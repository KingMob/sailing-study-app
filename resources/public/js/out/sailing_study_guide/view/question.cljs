(ns sailing-study-guide.view.question
  (:require
   [sailing-study-guide.model :as model]
   [sailing-study-guide.dispatch :as dispatcher]
   [sailing-study-guide.view.utils :as util]
   [reagent.core :as reagent :refer [atom cursor]]
   [cljsjs.react :as react]))

(defonce ctg (reagent/adapt-react-class (aget js/React "addons" "CSSTransitionGroup")))

(defn answer-css-class [status correct]
  (cond
   (= :unchosen status) "answer-default"
   correct "answer-correct success"
   :else "answer-incorrect alert"))

(defn answer-view [quiz-question answer]
  (println "answer-view called")
  (let [status (atom :unchosen)]
    ;; (println "Status: "@status)
    (fn [quiz-question answer]
      [:div.answer-container
       [:button
        {
         :onClick (fn [e]
                    (dispatcher/dispatch! :answer-chosen
                                          {:question quiz-question :answer answer})
                    (reset! status :chosen))
         :class (str "answer " (answer-css-class @status (:correct answer)))}
        (:text answer)]])))


(defn answer-section-view [quiz-question answers]
  ;; (.dir js/console answers)
  [:div.answer-section
   (for [ans answers]
     ^{:key ans} [answer-view quiz-question ans]
     ;; {:init-state {:answer-chan answer-chan}}
     )])


(defn question-view [quiz-question]
  (.log js/console "question-view called for " (:question quiz-question))
  [:div.question-container
   [:div.question-text-container
    [:h3.question-text (:question quiz-question)]]
   [:div.media-container]
   [answer-section-view quiz-question (:answers quiz-question)]])


(defn header-bar-view [left middle]
  [:nav.tab-bar
   [:section.left-small.text-center left]
   [:section.middle.tab-bar-section middle]
   [:section.right-small
    [:a {:class "right-off-canvas-toggle menu-icon" :href "#"}
     [:span]]]])



(defn header-view []
  (let [question-num (model/current-question-num)
        total-num-questions (model/num-questions-current-section)
        perc (* 100 (/ question-num total-num-questions))]
    [:div.quiz-header
     [header-bar-view (str question-num "/" total-num-questions) (:name (model/current-section))]
     [util/progress-bar-view perc]]))


(defn section-view []
  (.log js/console "section-view called")

  [:div {:id "quiz-section" :className "off-canvas-wrap" :data-offcanvas true}
   [:div.main-content.inner-wrap
    [header-view]

    [ctg {:transitionName "question-transition" :className "question-transition-container" :component "div"}
     ^{:key (model/current-question)}
     [question-view (model/current-question)]]
    [:a.exit-off-canvas]]])

(defn main[]
  (.log js/console "question/main called")
  [:div
   [section-view]])
