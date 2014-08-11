(defproject sailing-study-guide "0.2.0"
  :description "An app to help you study for the ASA sailing certification"
  :url "https://github.com/KingMob/sailing-study-app"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2277"]
;                 [org.clojure/clojurescript "0.0-2234"] ; LightTable 0.6.3 has conn issues with higher versions
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [om "0.7.1"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-ring "0.8.11"]
            ]

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
                :optimizations :advanced
                :pretty-print false
                :preamble ["react/react.min.js"]
                :externs ["react/externs/react.js"]}}]})
