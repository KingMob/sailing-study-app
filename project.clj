(defproject sailing-study-guide "0.3.0"
  :description "An app to help you study for the ASA sailing certification"
  :url "https://github.com/KingMob/sailing-study-app"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2816"]
                 [cljsjs/react-with-addons "0.12.2-4"]
                 [reagent "0.5.0-alpha"]
                 [reagent-forms "0.4.3"]
                 [reagent-utils "0.1.2"]
                 ;; [secretary "2.0.0.1-5a007a"]
                 [com.cemerick/piggieback "0.1.5"]
                 [weasel "0.5.0"]
                 [ring "1.3.2"]
                 [ring/ring-defaults "0.1.3"]
                 [prone "0.8.0"]
                 [compojure "1.3.1"]
                 [selmer "0.8.0"]
                 [environ "1.0.0"]
                 [leiningen "2.5.1"]
                 [figwheel "0.2.3-SNAPSHOT"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]]

  :hooks [leiningen.cljsbuild]
  :source-paths ["src/clj" "src/cljs"] ;; necessary for cljsbuild to hook into lein tasks

  :plugins [[lein-cljsbuild "1.0.4"]
            [lein-figwheel "0.2.2-SNAPSHOT"]
            [com.cemerick/clojurescript.test "0.3.3"]
            [lein-environ "1.0.0"]
            [lein-ring "0.9.1"]
            [lein-asset-minifier "0.2.2"]]

  ;; :ring {:handler sailreagent.handler/app
  ;;        :uberwar-name "sailreagent.war"}

  :min-lein-version "2.5.0"

  :uberjar-name "sailing-study-guide.jar"

  :main sailing-study-guide.server

  :clean-targets ^{:protect false} ["resources/public/js/out"]

  :minify-assets
  {:assets
   {"resources/public/css/site.min.css" "resources/public/css/site.css"}}

  :profiles {
            :dev {:env {:is-dev true}}
            :production {:env {:is-dev false}}}

  :cljsbuild
  {
   :builds
   [{:id "dev"
     :source-paths ["src/cljs" "dev/cljs"]
     :assert true
     :compiler {
                :main sailing-study-guide.dev
                :asset-path "js/out"
                :output-to "resources/public/js/sailing_study_guide.js"
                :output-dir "resources/public/js/out"
                :optimizations :none
                :pretty-print true
                :elide-asserts false
                :source-map true}}
    {:id "testing"
     :source-paths ["src" "tests"] ;;fixme
     :assert true
     :compiler {
                :main sailing-study-guide.view
                :asset-path "js/out"
                :output-to "resources/public/js/sailing_study_guide_test.js"
                :optimizations :whitespace
                :elide-asserts false
                :pretty-print true}}
    {:id "production"
     :source-paths ["src"]
     :compiler {
                :main sailing-study-guide.view
                :asset-path "js/out"
                :output-to "resources/public/js/main.js"
                :optimizations :advanced
                :pretty-print false}}]

   :test-commands {"unit-tests-phantomjs" ["phantomjs" :runner
                                           "out/sailing_study_guide_test.js"]
;;;;                               "unit-tests-rhino" ["rhino" "-opt" "-1" :rhino-runner
                   ;;                                                   "out/sailing_study_guide_test.js"]
                   }}

  :figwheel {
             :http-server-root "public" ;; this will be in resources/
             :css-dirs ["resources/public/css"]
             :open-file-command "emacsclient"})
