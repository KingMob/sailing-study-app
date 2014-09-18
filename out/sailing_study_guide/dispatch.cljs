(ns sailing-study-guide.dispatch
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [chan put! <! >! pub sub unsub]]))

(let [dispatch-chan (chan)
      dispatch-pub (pub dispatch-chan (fn [[tag & args]] tag))]

  (defn register [tag]
    (sub dispatch-pub tag (chan)))

  (defn unregister [tag chan]
    (unsub dispatch-pub tag chan))

  (defn dispatch! [korks & args]
    (letfn
      [dispatchfn [tag] (apply put! dispatch-chan tag args)]
      (if (sequential? korks)
        (doseq [tag korks] (dispatchfn tag))
        (dispatchfn korks)))))


;; ;; (def korks [:foo :bar])
;; (def korks nil)
;; (sequential? korks)
;; (def args "message")

;; (letfn
;;   ([dispatchfn [tag] (println tag args)])
;;   (if (sequential? korks)
;;     (doseq [tag korks] (dispatchfn tag))
;;     (dispatchfn korks)))


;; (def bus (register :answer-chosen))
;; (dispatch! [:answer-chosen "baz"])
;; (dispatch! [:answer-unchosen "foo"])

;; (go
;;  (println "the val is: " (<! bus)))
(seq? :tag)
(vector :tag :foo)
(doseq [t (vector :tag :foo)]
  (println t))

