(ns sailing-study-guide.model
  (:require
   [reagent.core :as reagent :refer [atom cursor]]
   [sailing-study-guide.quiz :refer [default-quiz]]
   [sailing-study-guide.dispatch :as dispatcher]))



(defonce app-state
  (atom
   {:current-quiz 0
    :current-section 0
    :current-question 0
    :quizzes [default-quiz]
    :current-page :splash}))

(defonce current-page (cursor app-state [:current-page]))

;;; Access fns
(defn quizzes []
  (:quizzes @app-state))

(defn sections [quiz]
  (:sections quiz))

(defn questions [section]
  (:questions section))


(defn quiz [idx]
  (get-in @app-state [:quizzes idx]))

(defn section [idx]
  (get-in @app-state [:quizzes (:current-quiz @app-state) :sections idx]))

(defn question [idx]
  (get-in @app-state [:quizzes (:current-quiz @app-state) :sections (:current-section @app-state) :questions idx]))

;;; Current quiz/section/question
(defn current-quiz []
  (quiz (:current-quiz @app-state)))

(defn current-section []
  (section (:current-section @app-state)))

(defn current-question []
  (question (:current-question @app-state)))

;;; Numerical position
;; (defn current-quiz-num []
;;   (inc (:current-quiz @app-state)))

(defn current-section-num []
  (inc (:current-section @app-state)))

(defn current-question-num []
  (inc (:current-question @app-state)))


;;; Counts
(defn num-quizzes []
  (count (:quizzes @app-state)))

(defn num-sections [quiz]
  (count (:sections quiz)))

(defn num-sections-current-quiz []
  (num-sections (current-quiz)))

(defn num-questions [section]
  (count (:questions section)))

(defn num-questions-current-section []
  (num-questions (current-section)))

(defn num-questions-quiz [quiz]
  (transduce num-questions + (sections quiz)))

(defn num-questions-current-quiz []
  (num-questions-quiz (current-quiz)))


;;; Quiz navigation
(defn quiz-finished []
  (println "Quiz ended"))

(defn next-question []
  (let [curr-ques (current-question-num)
        curr-sec (current-section-num)
        curr-num-sections (num-sections-current-quiz)
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
     (next-question))))
