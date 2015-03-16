(ns sailing-study-guide.view.splash
  (:require
   [reagent.core :as reagent :refer [atom cursor]]
   [cljsjs.react :as react]
   [sailing-study-guide.dispatch :as dispatcher]
   [sailing-study-guide.view.utils :as util :refer [hexagon nested-hexagons adjust-css-size]]))

(def logo-img "images/splash-boat-only.png")

(defn- with-top-left-margin [margin]
  {:style {:margin-left margin :margin-top margin}})

(defn logo [size color]
  [:div.logo-hex {:style {:width size :height size}}
   [:img {:src logo-img}]
   [nested-hexagons 4 "34vw" "red"]
   ])

(defn main []
  [:div.splash {:onClick #(dispatcher/dispatch! :page-finished :splash)}
   [logo "34vw" "red"]
   [:div.app-name "SAIL STUDY"]])
