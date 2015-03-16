(ns sailing-study-guide.view.utils
  (:require
   [clojure.string :as s]
   [reagent.core :as reagent :refer [atom cursor]]
   ))

(defn- split-css-size [size]
  [(js/parseFloat (s/replace size #"[^0-9.]" ""))
   (s/trim (s/replace size #"[0-9.]" ""))])

(defn- adjust-css-size [op factor size]
  (let [[base-size units] (split-css-size size)]
    (str (op factor base-size) units)))


(defn progress-bar-view [perc]
  [:div.progress
   [:span.meter {:style {:width (str perc "%")}}]])

(defn hexagon [size color extra-props]
  (let [basis-size size
        props (reagent/merge-props {:style {:width basis-size :height basis-size}} extra-props)]
    [:div.hexagon-wrapper props
     [:div.hexagon {:style {:background-color color}}]]))

(defn adjusted-hexagon [scaling-factor size color]
  (let [css-size (adjust-css-size * scaling-factor size)
        css-margin (adjust-css-size * (* .5 (- 1 scaling-factor)) size)]
    [hexagon css-size color {:style {:margin-left css-margin :margin-top css-margin}}]))

(defn nested-hexagons [num-hexagons size base-color content]
  {:pre [(< num-hexagons 9)]}
  (let [hexagon-separation .1 ; i.e., 10%
        scaling-factors (iterate #(- % hexagon-separation) 1)
        colors (cycle ["white" base-color])]
    [:div.nested-hexagons-wrapper {:style {:width size :height size}}
     [:div.content content]
     (take num-hexagons (map adjusted-hexagon scaling-factors (cycle [size]) colors))]))
