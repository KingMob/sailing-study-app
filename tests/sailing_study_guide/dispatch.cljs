(ns sailing-study-guide.dispatch
  (:require-macros [cemerick.cljs.test :refer (is deftest with-test run-tests testing test-var done block-or-done)]
                   [cljs.core.async.macros :refer [go go-loop]])
  (:require [cemerick.cljs.test :as t]
            [cljs.core.async :refer [chan mult tap put! <! >! pub sub unsub close!]]
            [clairvoyant.core :as trace :include-macros true]))

(defn setup []
  (let [default-tag :foo
        default-payload {:tag default-tag :message 42}])
(defn teardown [])

(defn fixture [f]
    (f)))

(deftest fixture-test
  (is (= :foo default-tag)))

(deftest ^:async register-test
  (let [c (register default-tag)]
    (put! c default-payload)

    (go
     (is (not (nil? (<! c))))
     (done))))

;; (deftest somewhat-less-wat
;;   (is (= 1 (+ 0 1))))

;; (deftest javascript-allows-div0
;;   (is (= js/Infinity (/ 1 0) (/ (int 1) (int 0)))))


;; (deftest ^:async core-async-test
;;   (let [inputs (repeatedly 10000 #(go 1))]
;;     (go (is (= 10000 (<! (reduce
;;                            (fn [sum in]
;;                              (go (+ (<! sum) (<! in))))
;;                            inputs))))
;;       (done))))


;; (deftest ^:async pointless-counting
;;   (let [inputs (repeatedly 10000 #(go 1))
;;         complete (chan)]
;;     (go (is (= 10000 (<! (reduce
;;                           (fn [sum in]
;;                             (go (+ (<! sum) (<! in))))
;;                           inputs))))
;;         (>! complete true))
;;     (block-or-done complete)))

;; (deftest ^:async basic-core-async-test
;;   (let [c (chan 1)
;;         val 1234]
;;     (go
;;      (>! c val)
;;      (is (= val (<! c)))
;;      (done))))

;; (deftest ^:async unbuffered-basic-core-async-test
;;   (let [c (chan)
;;         val 1234]
;;     (go
;;      (>! c val))
;;     (go
;;      (is (= val (<! c)))
;;      (done))))

;; (let [c (chan)
;;       val 1234]
;;   (go
;;    (>! c val)
;;    (println "Sent: " val))
;;   (go
;;    (println "Received: " (<! c)))
;;   nil)

;; (with-test
;;   (defn pennies->dollar-string
;;     [pennies]
;;     {:pre [(integer? pennies)]}
;;     (str "$" (int (/ pennies 100)) "." (mod pennies 100)))
;;   (testing "assertions are nice"
;;     (is (thrown-with-msg? js/Error #"integer?" (pennies->dollar-string 564.2)))))

(use-fixtures :each fixture)
