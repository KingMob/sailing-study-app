(ns sailing-study-guide.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(def app-state (atom
                {:banner "Quiz"
                 :quiz-items
                 [{
                   :question "What's the small sail at front called?"
                   :image nil
                   :answers ["Jib" "Jab" "Jibjab" "Mast"]
                   :correct 0}
                  {
                   :question "What's the biggest danger to a boat?"
                   :image nil
                   :answers ["Pirates" "Barnacles" "Leviathans" "That you'll need a bigger one"]
                   :correct 3}]}))


(defn answer-view [answer owner]
  (reify
    om/IRender
    (render [_]
            (dom/li nil answer))))

(defn quiz-item-view [quiz-item owner]
  (reify
    om/IRender
    (render [_]
            (dom/div nil
                     (dom/h3 #js {:className "quiz-item"} (:question quiz-item))
                     (apply dom/ul nil (om/build-all answer-view (:answers quiz-item)))))))

(defn quiz-view [quiz owner]
  (reify
    om/IRender
    (render [_]
            (dom/div nil
              (dom/h1 nil (:banner quiz))
              (apply dom/div nil (om/build-all quiz-item-view (:quiz-items quiz)))))))

(om/root
  quiz-view
  app-state
  {:target (. js/document (getElementById "app"))})
