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

(defn ring-chart-view [perc]
  )


(defn- hexagon [scale color]
  (let [hex-coords "0 -125, 108 -62.5, 108 62.5, 0 125, -108 62.5, -108 -62.5"]
    (fn [scale color]
      [:polygon {:fill color :points hex-coords :transform (str "scale(" scale ")")}])))

(defn nested-hexagons [num-hexagons separation base-color content]
  {:pre [(< num-hexagons 9)]}
  (let [scaling-factors (iterate #(- % separation) 1)
        colors (cycle ["white" base-color])]
    [:div.hexagon-wrapper
     [:div.content content]
     [:svg
      {:width "100%" :height "100%"
       :viewBox "-130 -130 260 260"
       :xmlns "http://www.w3.org/2000/svg"
       :baseProfile "full"
       :version "1.1"}
      (take num-hexagons (map #(vector hexagon %1 %2) scaling-factors colors))]]))
