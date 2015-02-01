(defproject sailing-study-guide "0.2.0"
  :description "An app to help you study for the ASA sailing certification"
  :url "https://github.com/KingMob/sailing-study-app"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [com.facebook/react "0.12.2.4"]
                 [reagent "0.4.3"]
                 [reagent-forms "0.4.3"]
                 [reagent-utils "0.1.2"]
                 [secretary "1.2.1"]
                 [org.clojure/clojurescript "0.0-2740" :scope "provided"]
                 [com.cemerick/piggieback "0.1.5"]
                 [weasel "0.5.0"]
                 [ring "1.3.2"]
                 [ring/ring-defaults "0.1.3"]
                 [prone "0.8.0"]
                 [compojure "1.3.1"]
                 [selmer "0.8.0"]
                 [environ "1.0.0"]
                 [leiningen "2.5.1"]
                 [figwheel "0.1.6-SNAPSHOT"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]]

;;   :hooks [leiningen.cljsbuild]

  :plugins [[lein-cljsbuild "1.0.4"]
            [com.cemerick/clojurescript.test "0.3.1"]
            [lein-environ "1.0.0"]
            [lein-ring "0.9.0"]
            [lein-asset-minifier "0.2.2"]            ]

  :source-paths ["src/clj" "src/cljs"]

  :ring {:handler sailreagent.handler/app
         :uberwar-name "sailreagent.war"}

  :min-lein-version "2.5.0"

  :uberjar-name "sailing-study-guide.jar"

  :main sailing-study-guide.server

  :clean-targets ^{:protect false} ["resources/public/js"]

  :minify-assets
  {:assets
   {"resources/public/css/site.min.css" "resources/public/css/site.css"}}


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
;;;;                               "unit-tests-rhino" ["rhino" "-opt" "-1" :rhino-runner
;;                                                   "out/sailing_study_guide_test.js"]
                              }})
