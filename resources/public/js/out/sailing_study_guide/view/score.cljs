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
   [:button "Start Over"]
   [:button "Next Quiz"]])

(defn main []
  [:div
   [overall-score]
   [section-score]
   [nav-buttons]])
