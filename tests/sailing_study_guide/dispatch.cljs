(ns sailing-study-guide.dispatch
  (:require-macros [cemerick.cljs.test :refer (is deftest with-test run-tests testing test-var done block-or-done)]
                   [cljs.core.async.macros :refer [go go-loop]])
  (:require [cemerick.cljs.test :as t]
            [cljs.core.async :refer [chan mult tap put! <! >! pub sub unsub close!]]))

(deftest somewhat-less-wat
  (is (= 1 (+ 0 1))))

(deftest javascript-allows-div0
  (is (= js/Infinity (/ 1 0) (/ (int 1) (int 0)))))


(deftest ^:async core-async-test
  (let [inputs (repeatedly 10000 #(go 1))]
    (go (is (= 10000 (<! (reduce
                           (fn [sum in]
                             (go (+ (<! sum) (<! in))))
                           inputs))))
      (done))))


;; (deftest ^:async pointless-counting
;;   (let [inputs (repeatedly 10000 #(go 1))
;;         complete (chan)]
;;     (go (is (= 10000 (<! (reduce
;;                           (fn [sum in]
;;                             (go (+ (<! sum) (<! in))))
;;                           inputs))))
;;         (>! complete true))
;;     (block-or-done complete)))

(deftest ^:async basic-core-async-test
  (let [c (chan 1)
        val 1234]
    (go
     (>! c val)
     (is (= val (<! c)))
     (done))))

;; (with-test
;;   (defn pennies->dollar-string
;;     [pennies]
;;     {:pre [(integer? pennies)]}
;;     (str "$" (int (/ pennies 100)) "." (mod pennies 100)))
;;   (testing "assertions are nice"
;;     (is (thrown-with-msg? js/Error #"integer?" (pennies->dollar-string 564.2)))))
