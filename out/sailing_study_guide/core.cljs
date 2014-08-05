(ns sailing-study-guide.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.string :refer [join]]))

(enable-console-print!)

(def app-state
  (atom
   {:banner "Quiz"
    :current-section 0
    :sections [{
                :name "Parts of the boat"
                :current-question 0
                :questions
                [{
                  :question "What is placed between the boat and the dock to cushion the hull?"
                  :image nil
                  :answers [
                            {:text "Tiller"
                             :correct false
                             :status :unchosen}
                            {:text "Boomvang"
                             :correct false
                             :status :unchosen}
                            {:text "Fender"
                             :correct true
                             :status :unchosen}
                            {:text "Gooseneck"
                             :correct false
                             :status :unchosen}]}
                 {
                  :question "What's the small sail at front called?"
                  :image nil
                  :answers [
                            {:text "Jib"
                             :correct true
                             :status :unchosen}
                            {:text "Jab"
                             :correct false
                             :status :unchosen}
                            {:text "Jibjab"
                             :correct false
                             :status :unchosen}
                            {:text "Jibber jabber"
                             :correct false
                             :status :unchosen}]}
                 {
                  :question "What's the biggest danger to a boat?"
                  :image nil
                  :answers [
                            {:text "Pirates"
                             :correct false
                             :status :unchosen}
                            {:text "Giant squids"
                             :correct false
                             :status :unchosen}
                            {:text "Barnacles"
                             :correct false
                             :status :unchosen}
                            {:text "That you'll need a bigger one"
                             :correct true
                             :status :unchosen}]}]}]}))

(defn answer-css-class [answer]
  (cond
   (= :unchosen (:status answer)) "answer-default"
   (:correct answer) "answer-correct success"
   :else "answer-incorrect alert"))


(defn answer-view [answer owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [choose-answer-chan]}]
                  (dom/div
                   #js{:className "answer-container"}
                   (dom/button
                    #js{:onClick (fn [e] (put! choose-answer-chan answer))
                       :className (str "answer " (answer-css-class answer))}
                    (:text answer))))))

(defn question-view [quiz-question owner]
  (reify
    om/IInitState
    (init-state [_]
                {:choose-answer-chan (chan)})

    om/IWillMount
    (will-mount [_]
                (let [choose-answer-chan (om/get-state owner :choose-answer-chan)]
                  (go (loop []
                        (let [answer-chosen (<! choose-answer-chan)]
                          (.log js/console (str "Chose " (:text @answer-chosen)))
                          (om/update! answer-chosen :status :chosen)
                          (recur))))))

    om/IRenderState
    (render-state [_ {:keys [choose-answer-chan]}]
                  (dom/div #js{:className "question-container"}
                           (dom/div #js{:className "question-text-container"}
                             (dom/h3 #js{:className "question-text"} (:question quiz-question)))
                           (dom/div #js{:className "media-container"})
                           (apply dom/div #js{:className "answer-section"}
                                  (om/build-all answer-view (:answers quiz-question)
                                                {:init-state {:choose-answer-chan choose-answer-chan}}))))))

(defn header-offcanvas-menu-link []
  (dom/a #js{:className "right-off-canvas-toggle menu-icon" :href "#"}
         (dom/span nil)))

(defn header-view [section _]
  (reify
    om/IRender
    (render [_]
            (let [current-question-num (inc (:current-question section))
                  total-num-questions (count (:questions section))]
              (dom/div
               #js{:className "quiz-header"}
               (dom/nav
                #js{:className "tab-bar"}
                (dom/section #js{:className "left-small text-center"} (str current-question-num "/" total-num-questions))
                (dom/section #js{:className "middle tab-bar-section"} (:name section))
                (dom/section #js{:className "right-small"} (header-offcanvas-menu-link))
                )
               (dom/div
                #js{:className "progress"}
                (dom/span
                 #js{:className "meter"
                     :style #js{:width (str (* 100 (/ current-question-num total-num-questions)) "%")}})))))))

;; (:current-section @app-state)
;; (get-in @app-state [:sections (:current-section @app-state) :name])


(defn section-view [section owner]
  (reify
    om/IRender
    (render [_]
            (dom/div
             #js{:id "quiz-section" :className "off-canvas-wrap" :data-offcanvas true}
             (om/build header-view section)
             (om/build question-view (get (:questions section) (:current-question section)))))))


(defn quiz-view [quiz owner]
  (reify
    om/IRender
    (render [_]
            (dom/div nil
                     (om/build section-view
                               (->
                                quiz
                                :sections
                                (nth (:current-section quiz))))))))

(om/root
 quiz-view
 app-state
 {:target (. js/document (getElementById "app"))})
