(ns sailing-study-guide.view.splash
  (:require
   [reagent.core :as reagent :refer [atom cursor]]
   [cljsjs.react :as react]
   [sailing-study-guide.view.utils :as util :refer [hexagon]]))

(def logo-img "images/splash-boat-only.png")

(defn- with-top-left-margin [margin]
  (let [marginvw (str margin "vw")]
    {:style {:margin-left marginvw :margin-top marginvw}}))

(defn logo [size color]
  [:div.logo-hex {:style {:width (str size "vw") :height (str size "vw")}}
   [:img {:src logo-img}]
   [hexagon size "white"]
   [hexagon (* size .9) color (with-top-left-margin (* size .05))]
   [hexagon (* size .8) "white" (with-top-left-margin (* size .1))]
   [hexagon (* size .7) color (with-top-left-margin (* size .15))]
   ])

(defn splash [next-page]
  [:div.splash {:onClick #(reagent/render-component [next-page] (.-body js/document))}
   [logo 33 "red"]
   [:h2 "SAIL STUDY"]])
