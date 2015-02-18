(ns sailing-study-guide.view
  (:require
   [sailing-study-guide.core :as sail :refer [app-state section question current-section current-question current-question-num num-questions-current-section]]
   [sailing-study-guide.dispatch :as dispatcher]
   [reagent.core :as reagent :refer [atom cursor]]
   [cljsjs.react :as react]))

(defonce ctg (aget js/React "addons" "CSSTransitionGroup"))

(defn answer-css-class [status correct]
  (cond
   (= :unchosen status) "answer-default"
   correct "answer-correct success"
   :else "answer-incorrect alert"))

(defn answer-view [answer]
  (println "answer-view called")
  (let [status (atom :unchosen)]
    ;; (println "Status: "@status)
    (fn [answer]
      [:div.answer-container
       [:button
        {
         :onClick (fn [e]
                    (dispatcher/dispatch! :answer-chosen answer)
                    (reset! status :chosen))
         :class (str "answer " (answer-css-class @status (:correct answer)))}
        (:text answer)]])))


(defn answer-section-view [answers]
  ;; (.dir js/console answers)
  [:div.answer-section
   (for [ans answers]
     ^{:key ans} [answer-view ans]
     ;; {:init-state {:answer-chan answer-chan}}
     )])


(defn question-view []
  (let [quiz-question (current-question)]
    (.log js/console "question-view called")
    ;; ^{:key quiz-question}
    [:div.question-container {:key quiz-question}
     [:div.question-text-container
      [:h3.question-text (:question quiz-question)]]
     [:div.media-container]
     [answer-section-view (:answers quiz-question)
      ;; {:init-state {:answer-chan answer-chan}}
      ]]))

;; (defn question-view []
;;   (fn []
;;     (let [quiz-question (current-question)]
;;       ^{:key quiz-question}
;;       [:div.question-container {:key quiz-question}
;;        [:div.question-text-container
;;         [:h3.question-text (:question quiz-question)]]
;;        [:div.media-container]
;;        [answer-section-view (:answers quiz-question)
;;         ;; {:init-state {:answer-chan answer-chan}}
;;         ]])))

;; (defn question-view [quiz-question]
;;   (fn [q]
;;     (with-meta
;;       [:div.question-container
;;        [:div.question-text-container
;;         [:h3.question-text (:question q)]]
;;        [:div.media-container]
;;        [answer-section-view (:answers q)
;;         ;; {:init-state {:answer-chan answer-chan}}
;;         ]]
;;       {:key "foo 3"})))

(defn header-bar-view [left middle]
  [:nav.tab-bar
   [:section.left-small.text-center left]
   [:section.middle.tab-bar-section middle]
   [:section.right-small
    [:a {:class "right-off-canvas-toggle menu-icon" :href "#"}
     [:span]]]])

(defn progress-bar-view [perc]
  [:div.progress
   [:span.meter {:style {:width (str perc "%")}}]])


(defn header-view []
  (let [question-num (current-question-num)
        total-num-questions (num-questions-current-section)
        perc (* 100 (/ question-num total-num-questions))]
    [:div.quiz-header
     [header-bar-view (str question-num "/" total-num-questions) (:name (current-section))]
     [progress-bar-view perc]]))

;; ;;(.dir js/console (:current-section @app-state))
;; ;; (get-in @app-state [:sections (:current-section @app-state) :name])


(defn section-view []
  (.log js/console "section-view called")
  [:div {:id "quiz-section" :className "off-canvas-wrap" :data-offcanvas true}
   [:div.main-content.inner-wrap
    [header-view]
    ;; [question-view]
    [ctg {:transitionName "question-transition" :className "question-transition-container" :component "div"}
     ^{:key (current-question)}
     [question-view (current-question)]]
    [:a.exit-off-canvas]]])

(defn quiz-view []
  ;;(.dir js/console (current-section))
  [:div
   [section-view]])

(defn splash []
  (js/setTimeout #(reagent/render-component [quiz-view] (.-body js/document)) 1000)
  [:h2 "SAIL STUDY"])

(defn ^:export run []
  (reagent/render-component [splash] (.-body js/document)))

(run)
