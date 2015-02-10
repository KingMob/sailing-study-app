(ns sailing-study-guide.dev
  (:require
   [sailing-study-guide.view :refer [run]]
   [figwheel.client :as fw]))

;; Start Figwheel

(fw/start {
           ;; optional callback
           :on-jsload (fn []
                        (print "Reloaded at " (js/Date))
                        (run))})
