(ns sailing-study-guide.view.quizzes
  (:require
   [sailing-study-guide.model :as model]
   [sailing-study-guide.dispatch :as dispatcher]
   [sailing-study-guide.view.utils :as util :refer [nested-hexagons]]
   [reagent.core :as reagent :refer [atom cursor]]
   [cljsjs.react :as react]))

(def default-quiz-img "http://cdn.makeagif.com/media/6-13-2014/A9qwsI.gif")

(defn quiz-img [quiz]
  (if-let [image (:image quiz)]
    image
    default-quiz-img))

(defn quiz-card-footer [num-sections num-questions quiz-idx]
  [:div.quiz-card-footer
   [:div.num-sections
    [:em num-sections] "SECTIONS"]
   [:div.num-questions
    [:em num-questions] "QUESTIONS"]
   [:div.start-quiz-container
    [:button.start-quiz {:onClick #(dispatcher/dispatch! :start-quiz quiz-idx)}
     "Start Quiz"]]])

(defn quiz-number [quiz]
  [:div.quiz-num
   [nested-hexagons 2 "12vw" "red" (:num quiz)]])

(defn quiz-card-view [idx quiz]
  [:div.quiz-card
   [:img.quiz-img {:src (quiz-img quiz)}]
   [:div.separator]
   [quiz-number quiz]
   [:div.quiz-body-text
    [:div.quiz-name (:name quiz)]
    [:div.quiz-desc (:description quiz)]]
   [quiz-card-footer (model/num-sections quiz) (model/num-questions-quiz quiz) idx]])

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
    (map-indexed
     (fn [idx quiz]
       ^{:key (model/quiz-id quiz)}
       [quiz-card-view idx quiz])
     (model/quizzes))]])
