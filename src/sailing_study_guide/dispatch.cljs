(ns sailing-study-guide.dispatch
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan mult tap put! <! >! pub sub unsub close!]]
            [clairvoyant.core :as trace :include-macros true]))


(def ^:private dispatch-chan (chan))
(def ^:private dispatch-mult (mult dispatch-chan))
(def ^:private dispatch-logger-chan (chan))
(def ^:private dispatch-pub-chan (chan))
(def ^:private dispatch-pub (pub dispatch-pub-chan #(:tag %)))
(tap dispatch-mult dispatch-logger-chan)
(tap dispatch-mult dispatch-pub-chan)

(defn register [tag cb]
  (let [c (chan)]
    (sub dispatch-pub tag c)
    (go-loop [payload (<! c)]
             (if-not (nil? payload)
               (do
                 (cb (retrieve-message payload))
                 (recur (<! c)))
               (do
                 (println "Leaving loop for " tag)
                 (close! c))))))

(defn unregister [tag chan]
  (unsub dispatch-pub tag chan))

(defn dispatch! [tags & message]
  (letfn ([dispatchfn [tag] (put! dispatch-chan {:tag tag :message message})])
    (if (sequential? tags)
      (doseq [tag tags] (dispatchfn tag))
      (dispatchfn tags))))

(defn- retrieve-message [payload]
   (when payload
     (:message payload)))

;; Start logger
(go-loop []
         (println "Dispatched: " (pr-str (<! dispatch-logger-chan)))
         (recur))


(comment

  (def tags [:answer-chosen])
  ;; (def tags :answer-chosen)
  ;; (def tags nil)
  (def payload "message")

  (dispatch! tags payload)
  ;; (dispatch! [:answer-unchosen "foo"])
  ;; (retrieve! bus)
  )


