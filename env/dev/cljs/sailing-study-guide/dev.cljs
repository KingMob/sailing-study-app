(ns sailing-study-guide.dev
  (:require
   [sailing-study-guide.core :refer [init!]]
   [figwheel.client :as fw]))

;; Start Figwheel

(fw/start {
           ;; optional callback
           :on-jsload (fn []
                        (print "Reloaded at " (js/Date))
                        (init!))})

(init!)
