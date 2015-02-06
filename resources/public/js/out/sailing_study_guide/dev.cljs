(ns sailing-study-guide.dev
  (:require
   [sailing-study-guide.core :refer [run]]
   [figwheel.client :as fw]))

;; Start Figwheel ;; FIXME: make this dev-only

(fw/start {
           ;; optional callback
           :on-jsload (fn [] (print "Reloaded js code"))})

(run)
