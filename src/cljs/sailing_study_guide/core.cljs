(ns sailing-study-guide.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [cljsjs.react]
   [reagent.core :as reagent]
   [sailing-study-guide.model :as model]
   [sailing-study-guide.dispatch :as dispatcher]
   [sailing-study-guide.view.splash :as splash]
   [sailing-study-guide.view.quizzes :as quizzes]
   [sailing-study-guide.view.question :as question]
   [sailing-study-guide.view.score :as score]))

(enable-console-print!)
(set! cljs.core/*print-meta* true)
(println "Starting...")

(defonce pages
  {:splash splash/main
   :quizzes quizzes/main
   :question question/main
   :score score/main})

(dispatcher/whenever
 :page-finished
 (fn [old-page]
   (println "Finished with" old-page "page")
   (reset! model/current-page
           (case old-page
               :splash :quizzes
               :quizzes :question
               :question :score))
   ))

(defn page-container [page & args]
  [:div.page-container
   [(pages @page)]])


(defn init! []
  (reagent/render-component [page-container model/current-page] (.-body js/document)))
