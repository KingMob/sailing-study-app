(ns sailing-study-guide.view-utils
  (:require
   [reagent.core :as reagent :refer [atom cursor]]
   [cljsjs.react :as react]))

(defn progress-bar-view [perc]
  [:div.progress
   [:span.meter {:style {:width (str perc "%")}}]])

(defn- hexagon [size color margin]
  (let [basis-size (str size "vw")
        margin-size (str margin "vw")]
    [:div.hexagon-wrapper {:style {:width basis-size :height basis-size
                                   :margin-left margin-size :margin-top margin-size}}
     [:div.hexagon {:style {:background-color color}}]]))
