(ns sailing-study-guide.view.quizzes
  (:require
   [sailing-study-guide.model :as model]
   [sailing-study-guide.dispatch :as dispatcher]
   [sailing-study-guide.view.utils :as util]
   [reagent.core :as reagent :refer [atom cursor]]
   [cljsjs.react :as react]))

(def default-quiz-img "http://cdn.makeagif.com/media/6-13-2014/A9qwsI.gif")

(defn quiz-img [quiz]
  (if-let [image (:image quiz)]
    image
    default-quiz-img))

(defn quiz-card-footer [num-sections num-questions]
  [:div.quiz-card-footer
   [:div.num-sections num-sections "SECTIONS"]
   [:div.num-questions num-questions "QUESTIONS"]
   [:div.start-quiz-container
    [:button.start-quiz "Start Quiz"]]])

(defn quiz-number [quiz]
  [:div.quiz-num
   (:num quiz)])

(defn quiz-card-view [quiz]
  [:div.quiz-card
   [:img.quiz-img {:src (quiz-img quiz)}]
   [:div.separator]
   [quiz-number quiz]
   [:div.quiz-name (:name quiz)]
   [:div.quiz-desc (:description quiz)]
   [quiz-card-footer (model/num-sections quiz) (model/num-questions-quiz quiz)]
   ])

(defn header-bar-view []
  [:nav.tab-bar
   [:section.middle.tab-bar-section "SELECT A QUIZ"]
   [:section.right-small
    [:a {:class "right-off-canvas-toggle menu-icon" :href "#"}
     [:span]]]])

(defn main []
  [:div
   [header-bar-view]
   [:div.quiz-list
    (for [quiz (model/quizzes)]
      [quiz-card-view quiz])]])
