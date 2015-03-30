(defproject sailing-study-guide "0.3.0"
  :description "An app to help you study for the ASA sailing certification"
  :url "https://github.com/KingMob/sailing-study-app"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3165"]
                 [cljsjs/react-with-addons "0.13.1-0"]
                 [reagent "0.5.0" :exclusions [cljsjs/react]]
                 [reagent-forms "0.4.7"]
                 [reagent-utils "0.1.4"]
                 ;; [com.cemerick/piggieback "0.1.5"]
                 ;; [weasel "0.6.0"]
                 [ring "1.3.2"]
                 [ring/ring-defaults "0.1.4"]
                 ;; [prone "0.8.1"]
                 [compojure "1.3.2"]
;                 [selmer "0.8.1"]
                 [environ "1.0.0"]
                 [leiningen "2.5.1"]
                 [figwheel "0.2.5"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]]

  :hooks [leiningen.cljsbuild]
  :source-paths ["src/clj" "src/cljs"] ;; necessary for cljsbuild to hook into lein tasks

  :plugins [[lein-cljsbuild "1.0.5"]
            [com.cemerick/clojurescript.test "0.3.3"]
            [lein-environ "1.0.0"]
            [lein-ring "0.9.1"]
            [lein-asset-minifier "0.2.2"]]

  ;; :ring {:handler sailreagent.handler/app
  ;;        :uberwar-name "sailreagent.war"}

  :min-lein-version "2.5.1"

  :uberjar-name "sailing-study-guide.jar"

  :main sailing-study-guide.server

  :clean-targets ^{:protect false} ["resources/public/js"]

  :minify-assets
  {:assets
   {"resources/public/css/site.min.css" "resources/public/css/site.css"}}

  :profiles {
             :dev {
                   :env {:is-dev true}
                   :plugins [[lein-figwheel "0.2.5-SNAPSHOT"]]
                   :figwheel {
                              :http-server-root "public" ;; this will be in resources/
                              :css-dirs ["resources/public/css"]
                              :open-file-command "emacsclient"}}
            :production {:env {:is-dev false}}}

  :cljsbuild
  {
   :builds
   [{:id "dev"
     :source-paths ["src/cljs" "env/dev/cljs"]
     :assert true
     :compiler {
                :main sailing-study-guide.dev
                :asset-path "js/out"
                :output-to "resources/public/js/sailing_study_guide.js"
                :output-dir "resources/public/js/out"
                :optimizations :none
                :pretty-print true
                :verbose true
                :elide-asserts false
                :source-map true}}

    {:id "testing"
     :source-paths ["src" "tests"] ;;fixme
     :assert true
     :compiler {
                ;; :main sailing-study-guide.view
                ;; :asset-path "js/out"
                :output-to "target/testable.js"
                :optimizations :whitespace
                :elide-asserts false
                :pretty-print true}}
    {:id "production"
     :source-paths ["src/cljs" "env/prod/cljs"]
     :compiler {
                :main sailing-study-guide.view
                :asset-path "js/out"
                :output-to "resources/public/js/main.js"
                :optimizations :advanced
                :pretty-print false}}]

   :test-commands {"unit-tests-phantomjs" ["phantomjs" :runner
                                           "target/testable.js"]
;;;;                               "unit-tests-rhino" ["rhino" "-opt" "-1" :rhino-runner
                   ;;                                                   "out/sailing_study_guide_test.js"]
                   }}

)
