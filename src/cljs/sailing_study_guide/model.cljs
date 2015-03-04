(ns sailing-study-guide.model
  (:require
   [reagent.core :as reagent :refer [atom cursor]]
   [sailing-study-guide.quiz :refer [default-quiz]]
   [sailing-study-guide.dispatch :as dispatcher]))

(defonce app-state
  (atom
   {:current-section 0
    :current-question 0
    :quiz default-quiz}))


(defn section [idx]
  (get-in @app-state [:quiz :sections idx]))

(defn question [idx]
  (get-in @app-state [:quiz :sections (:current-section @app-state) :questions idx]))

(defn current-section []
  (section (:current-section @app-state)))

(defn current-question []
  (question (:current-question @app-state)))

(defn current-section-num []
  (inc (:current-section @app-state)))

(defn current-question-num []
  (inc (:current-question @app-state)))


(defn num-sections []
  (count (get-in @app-state [:quiz :sections])))

(defn num-questions [idx]
  (count (:questions (section idx))))

(defn num-questions-current-section []
  (count (get-in @app-state [:quiz :sections (:current-section @app-state) :questions])))


(defn quiz-finished []
  (println "Quiz ended"))

(defn next-question []
  (let [curr-ques (current-question-num)
        curr-sec (current-section-num)
        curr-num-sections (num-sections)
        curr-num-questions (num-questions-current-section)]
    (cond
     (< curr-ques curr-num-questions) (swap! app-state assoc :current-question curr-ques)
     (< curr-sec curr-num-sections) (do
                                      (swap! app-state assoc :current-section curr-sec)
                                      (swap! app-state assoc :current-question 0))
     :else (quiz-finished);; end of all questions
     )))

(dispatcher/whenever
 :answer-chosen
 (fn [answer]
   (println "CB called w payload: " answer)
   (when (:correct answer)
     (println "Chose correctly!")
     ;; (swap! sail/current-question inc)
     (next-question))))
