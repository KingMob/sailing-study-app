(ns sailing-study-guide.view.splash
  (:require
   [reagent.core :as reagent :refer [atom cursor]]
   [cljsjs.react :as react]
   [sailing-study-guide.view.utils :as util :refer [hexagon]]))

(declare quiz-view)

(defn logo [size color]
  [:div.logo-hex {:style {:width (str size "vw") :height (str size "vw")}}
   [:img {:src "images/splash-boat-only.png"}]
   [hexagon size "white" 0]
   [hexagon (* size .9) color (* size .05)]
   [hexagon (* size .8) "white" (* size .1)]
   [hexagon (* size .7) color (* size .15)]])

(defn splash [next-page]
  [:div.splash {:onClick #(reagent/render-component [next-page] (.-body js/document))}
   [logo 33 "red"]
   [:h2 "SAIL STUDY"]])
