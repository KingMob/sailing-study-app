(defproject sailing-study-guide "0.2.0"
  :description "An app to help you study for the ASA sailing certification"
  :url "https://github.com/KingMob/sailing-study-app"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2725"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [spellhouse/clairvoyant "0.0-29-g825d69c"]
                 [org.omcljs/om "0.8.3"]]

;;   :hooks [leiningen.cljsbuild]

  :plugins [[lein-cljsbuild "1.0.4"]
            [lein-ring "0.8.11"]
            [com.cemerick/clojurescript.test "0.3.1"]
            ]

  :source-paths ["src"]

  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {
                                   :main main.core
                                   :output-to "out/sailing_study_guide.js"
                                   :output-dir "out"
                                   :optimizations :none
                                   :pretty-print true
                                   :source-map true}}
                       {:id "testing"
                        :source-paths ["src" "tests"]
                        :compiler {
                                   :main main.core
                                   :output-to "out/sailing_study_guide_test.js"
                                   :optimizations :whitespace
                                   :pretty-print true
;;                                    :preamble ["react/react.min.js"] ; seems to cause "React not found" warnings is missing, but "cemerick.cljs.test not found" errors if present!
;;                                    :externs ["react/externs/react.js"]
                                   }}
                       {:id "production"
                        :source-paths ["src"]
                        :compiler {
                                   :main main.core
                                   :output-to "main.js"
                                   :optimizations :advanced
                                   :pretty-print false
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]}}]

              :test-commands {"unit-tests-phantomjs" ["phantomjs" :runner
                                                      "out/sailing_study_guide_test.js"]
;;                               "unit-tests-rhino" ["rhino" "-opt" "-1" :rhino-runner
;;                                                   "out/sailing_study_guide_test.js"]
                              }})
