(ns sailing-study-guide.view.splash
  (:require
   [reagent.core :as reagent :refer [atom cursor]]
   [cljsjs.react :as react]
   [sailing-study-guide.dispatch :as dispatcher]
   [sailing-study-guide.view.utils :as util :refer [nested-hexagons]]))

(def logo-img "images/splash-boat-only.png")

(defn logo []
  [:div.logo-hex
   [nested-hexagons 4 .1 "red"
    [:img {:src logo-img}]]])

(defn main []
  [:div.splash {:onClick #(dispatcher/dispatch! :page-finished :splash)}
   [logo]
   [:div.app-name "SAIL STUDY"]])
