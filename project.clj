(defproject sailing-study-guide "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"] ; LightTable 0.6.3 has conn issues with higher versions
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.6.3"]]

  :plugins [[lein-cljsbuild "1.0.2"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {
                :output-to "out/sailing_study_guide.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}
             {:id "production"
              :source-paths ["src"]
              :compiler {
                :output-to "main.js"
                ;:output-dir "out"
                :optimizations :advanced
                :pretty-print false
                :preamble ["react/react.min.js"]
                :externs ["react/externs/react.js"]}}]})
