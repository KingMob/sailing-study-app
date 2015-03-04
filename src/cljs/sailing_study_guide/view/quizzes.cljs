(ns sailing-study-guide.view.quizzes
  (:require
   [sailing-study-guide.model :refer [app-state section]]
   [sailing-study-guide.view.utils :as util]
   [reagent.core :as reagent :refer [atom cursor]]
   [cljsjs.react :as react]))

(defn quiz-img [quiz]
  "")

(defn quiz-card-view [quiz]
  [:div.quiz-card
   [:img.quiz-img {:src (quiz-img quiz)}]
   [:div.separator]
   [quiz-number quiz]
   [:div.quiz-title ]])

(defn header-bar-view []
  [:nav.tab-bar
   [:section.middle.tab-bar-section "SELECT A QUIZ"]
   [:section.right-small
    [:a {:class "right-off-canvas-toggle menu-icon" :href "#"}
     [:span]]]])

(defn quiz-list []
  [:div
   [header-bar-view]
   [:div.quiz-list
    (for [quiz (quizzes)]
      [quiz-card-view quiz])]])
