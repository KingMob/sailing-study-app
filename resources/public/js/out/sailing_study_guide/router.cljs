(ns sailing-study-guide.router
  (:require
   [sailing-study-guide.core :as sail :refer [app-state section question current-section current-question]]
   [sailing-study-guide.dispatch :as dispatcher]))

;; (defn quiz-finished []
;;   (println "Quiz ended"))

;; (defn next-question []
;;   (let [curr-ques @current-question
;;         curr-sec @current-section
;;         curr-num-sections (count (get-in @app-state [:quiz :sections]))
;;         curr-num-questions (count (:questions (section @current-section)))]
;;     (cond
;;      (< curr-ques (dec curr-num-questions)) (swap! current-question inc)
;;      (< curr-sec (dec curr-num-sections)) (swap! current-section inc)
;;      :else (quiz-finished);; end of all questions
;;      )))

;; (dispatcher/whenever
;;  :answer-chosen
;;  (fn [answer]
;;    (println "CB called w payload: " answer)
;;    (when (:correct answer)
;;      (println "Chose correctly!")
;;      ;; (swap! sail/current-question inc)
;;      (next-question))))
