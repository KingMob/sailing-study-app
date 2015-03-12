(ns sailing-study-guide.test.model
  (:require-macros [cemerick.cljs.test :refer (is deftest with-test run-tests testing test-var done block-or-done use-fixtures)])
  (:require [cemerick.cljs.test :as t]
            [sailing-study-guide.model :as model]
            [sailing-study-guide.quiz :refer [default-quiz]]))

(defn setup []
  (let [default-quiz2 (assoc default-quiz :num 102)]
    (reset! model/app-state
            {:current-quiz 0
             :current-section 0
             :current-question 0
             :quizzes [default-quiz default-quiz2]})
    (def *quizzes* [default-quiz default-quiz])
    (def *default-quiz* default-quiz)
    (def *default-section* (nth (:sections *default-quiz*) 0))))

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
    (is (= 3 (model/num-questions-current-section))))

  (testing "num-questions-quiz"
    (is (= 6 (model/num-questions-quiz *default-quiz*)))))

(deftest current-pointer
  (testing "current-quiz"
    (is (= 101 (:num (model/current-quiz))))
    (swap! model/app-state assoc :current-quiz 1)
    (is (= 102 (:num (model/current-quiz)))))

  (testing "current-section"
    (is (= "Parts of the boat" (:name (model/current-section))))
    (swap! model/app-state assoc :current-section 1)
    (is (= "Parts of the boat 2" (:name (model/current-section)))))

  (testing "current-question"
    (is (= "What is placed between the boat and the dock to cushion the hull?" (:question (model/current-question))))
    (swap! model/app-state assoc :current-question 1)
    (is (= "What's the small sail at front called?" (:question (model/current-question))))))

(use-fixtures :each each-fixture)
