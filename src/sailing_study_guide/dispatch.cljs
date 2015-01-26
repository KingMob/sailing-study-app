(ns sailing-study-guide.dispatch
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan mult tap put! <! >! pub sub unsub close!]]
            [clairvoyant.core :as trace :include-macros true]))


(def *dispatcher-logging-enabled* false)

(def ^:private dispatch-chan (chan 1))
(def ^:private dispatch-mult (mult dispatch-chan))
(def ^:private dispatch-pub-chan (chan 1))
(def ^:private dispatch-pub (pub dispatch-pub-chan #(:tag %)))
(tap dispatch-mult dispatch-pub-chan)


(defn- retrieve-message [payload]
   (when payload
     (:message payload)))

(defn register [tag]
  (let [c (chan)]
    (sub dispatch-pub tag c)))

(defn unregister [tag chan]
  (unsub dispatch-pub tag chan)
  (close! chan))

(defn whenever [tag cb]
  (let [c (register tag)]
    (go-loop [payload (<! c)]
             (if payload
               (do
;;                  (println "Processing mesg in " payload)
                 (cb (retrieve-message payload))
                 (recur (<! c)))
               (do
                 (println "Leaving loop for " c)
                 (close! c))))
    c))


;; (defn dispatch! [tags & message]
;;   (letfn ([dispatchfn [tag] (put! dispatch-chan {:tag tag :message message} #(println "Put!"))])
;;     (if (sequential? tags)
;;       (doseq [tag tags] (dispatchfn tag))
;;       (dispatchfn tags))))

;; (defn dispatch! [tagortags & message]
;;   (let [tags (if (sequential? tagortags) tagortags [tagortags])]
;;     (doseq [tag tags]
;;       (put! dispatch-chan {:tag tag :message message} #(println "Put!")))))

(defn dispatch! [tagortags & message]
  (let [tags (if (sequential? tagortags) tagortags [tagortags])]
    (doseq [tag tags]
      (go
       (>! dispatch-chan {:tag tag :message message})
       (println "Put!")))))


;; Start logger
(when *dispatcher-logging-enabled*
  (def ^:private dispatch-logger-chan (chan))
  (tap dispatch-mult dispatch-logger-chan)

  (go-loop []
           (println "Logged: " (pr-str (<! dispatch-logger-chan)))
           (recur)))


(comment

  (def tags [:answer-chosen])
  ;; (def tags :answer-chosen)
  ;; (def tags nil)
  (def payload "message")

  (dispatch! tags payload)
  ;; (dispatch! [:answer-unchosen "foo"])
  ;; (retrieve! bus)
  )


