(ns sailing-study-guide.view.utils
  (:require
   [clojure.string :as s]
   [reagent.core :as reagent :refer [atom cursor]]
   ))

(defn strip-css-units [size]
  (s/replace size #"[^0-9.]" ""))

(defn progress-bar-view [perc]
  [:div.progress
   [:span.meter {:style {:width (str perc "%")}}]])

(defn hexagon [size color extra-props]
  (let [basis-size (str size "vw")
        props (reagent/merge-props {:style {:width basis-size :height basis-size}} extra-props)]
    [:div.hexagon-wrapper props
     [:div.hexagon {:style {:background-color color}}]]))

(defn nested-hexagons [size base-color content]
  )
