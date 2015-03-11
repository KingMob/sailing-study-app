(ns sailing-study-guide.test.view
  (:require-macros [cemerick.cljs.test :refer (is deftest with-test run-tests testing test-var done block-or-done use-fixtures)])
  (:require [sailing-study-guide.view.utils :as utils]
            [cemerick.cljs.test :as t]))

(deftest css
  (testing "strip-css-units"
    (is (= "1" (utils/strip-css-units "1rem")))
    (is (= "33" (utils/strip-css-units "33vw")))
    (is (= "100" (utils/strip-css-units "100%")))
    (is (= ".5" (utils/strip-css-units ".5rem")))))
