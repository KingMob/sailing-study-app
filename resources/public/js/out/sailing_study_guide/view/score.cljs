(ns sailing-study-guide.view.score
  (:require
   [sailing-study-guide.model :as model]
   [sailing-study-guide.dispatch :as dispatcher]
   [sailing-study-guide.view.utils :as util :refer [progress-bar-view]]
;   [reagent.core :as reagent :refer [atom cursor]]
;   [cljsjs.react :as react]
   ))



(defn- overall-score []
  [:div.overall-score
   [:div.tab-links
    [:a "Your Score"]
    [:a "Your Progress"]]])

(defn- section-score []
  [:div.section-score])

(defn- nav-buttons []
  [:div.nav-buttons
   [:div ; necess container for grid cell
    [:button.nav-button "Start Over"]]
   [:div
    [:button.nav-button "Next Quiz"]]])

(defn main [quiz]
  [:div.score-container
   [overall-score quiz]
   [section-score]
   [nav-buttons]])
