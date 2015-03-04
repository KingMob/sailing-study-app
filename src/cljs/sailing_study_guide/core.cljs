(ns sailing-study-guide.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [cljsjs.react]
   [reagent.core :as reagent]
   [sailing-study-guide.view.question :as question]
   [sailing-study-guide.view.splash :as splash]))

(enable-console-print!)
(set! cljs.core/*print-meta* true)
(println "Starting...")


(defn init! []
  (reagent/render-component [splash/splash question/quiz-view] (.-body js/document)))
