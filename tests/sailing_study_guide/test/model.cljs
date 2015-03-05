(ns sailing-study-guide.test.model
  (:require-macros [cemerick.cljs.test :refer (is deftest with-test run-tests testing test-var done block-or-done use-fixtures)])
  (:require [cemerick.cljs.test :as t]
            [sailing-study-guide.model :as model]
            [sailing-study-guide.quiz :refer [default-quiz]]))

(defn setup []
  (reset! model/app-state
          {:current-quiz 0
           :current-section 0
           :current-question 0
           :quizzes [default-quiz default-quiz]})
  (def *quizzes* [default-quiz default-quiz])
  (def *default-quiz* default-quiz)
  (def *default-section* (nth (:sections *default-quiz*) 0)))

(defn teardown [])

(defn each-fixture [f]
  (setup)
  (f)
  (teardown))

(deftest counting
  (testing "num-quizzes"
    (is (= 2 (model/num-quizzes))))

  (testing "num-sections"
    (is (= 2 (model/num-sections *default-quiz*))))

  (testing "num-questions"
    (is (= 3 (model/num-questions *default-section*))))

  (testing "num-sections-current-quiz"
    (is (= 2 (model/num-sections-current-quiz))))

  (testing "num-questions-current-section"
    (is (= 3 (model/num-questions-current-section)))))



(use-fixtures :each each-fixture)
