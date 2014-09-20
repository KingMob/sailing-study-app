(ns sailing-study-guide.dispatch
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [chan put! <! >! pub sub unsub]]
            [clairvoyant.core :as trace :include-macros true]))

(trace/trace-forms {:tracer trace/default-tracer}
                   (defn pubfn [[tag & args :as arglist]]
                     (println arglist)
                     tag))

(def ^:private dispatch-chan (chan))
(def ^:private dispatch-pub (pub dispatch-chan pubfn))

(defn register [tag]
  (sub dispatch-pub tag (chan)))

(defn unregister [tag chan]
  (unsub dispatch-pub tag chan))

(trace/trace-forms {:tracer trace/default-tracer}
(defn dispatch! [korks & args]
  (letfn ([dispatchfn [tag] (apply put! dispatch-chan tag args)])
    (if (sequential? korks)
      (doseq [tag korks] (dispatchfn tag))
      (dispatchfn korks))))
)

(def korks [:answer-chosen "bap"])
;; (def korks nil)
(sequential? korks)
(def args "message")
;; (def args nil)

;; (letfn
;;   ([dispatchfn [tag] (println tag args)])
;;   (if (sequential? korks)
;;     (doseq [tag korks] (dispatchfn tag))
;;     (dispatchfn korks)))

korks
args
dispatch!
(def bus (register :answer-chosen))
(dispatch! korks args)
;; (dispatch! [:answer-unchosen "foo"])

(go
 (prn (<! bus)))

;; (seq? :tag)
;; (vector :tag :foo)
;; (doseq [t (vector :tag :foo)]
;;   (println t))

