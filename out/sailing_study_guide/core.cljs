(ns sailing-study-guide.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.string :refer [join]]))

(enable-console-print!)

(def app-state (atom
                {:banner "Quiz"
                 :quiz-questions
                 [{
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
                             {:text "Mast"
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
                              :status :unchosen}]}]}))

(defn answer-class [answer]
  (cond
   (= :unchosen (:status answer)) "answer-default"
   (:correct answer) "answer-correct"
   :else "answer-incorrect"))

;(get-in @app-state [:quiz-questions 0 :answers 0])
;(answer-class (get-in @app-state [:quiz-questions 0 :answers 0]))


(defn answer-view [answer owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [choose-answer-chan]}]
            (dom/li
               #js {
                    :onClick #(put! choose-answer-chan answer)
                    :className (join " " ["answer" (answer-class answer)])}
               (:text answer)))))

(defn quiz-question-view [quiz-question owner]
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
            (dom/div nil
                     (dom/h3 #js {:className "quiz-question"} (:question quiz-question))
                     (apply dom/ul nil (om/build-all answer-view (:answers quiz-question)
                                                     {:init-state {:choose-answer-chan choose-answer-chan}}))))))

(defn quiz-view [quiz owner]
  (reify
    om/IRender
    (render [_]
            (dom/div nil
              (dom/h1 nil (:banner quiz))
              (apply dom/div nil (om/build-all quiz-question-view (:quiz-questions quiz)))))))

(om/root
  quiz-view
  app-state
  {:target (. js/document (getElementById "app"))})
