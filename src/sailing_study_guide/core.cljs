(ns sailing-study-guide.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [chan put! pub sub unsub <! >!]]
            [clojure.string :refer [join]]
            [clairvoyant.core :as trace :include-macros true]
            [sailing-study-guide.quiz :refer [default-quiz]]
            [sailing-study-guide.dispatch :as dispatcher]
            ))

(enable-console-print!)
;; (set! cljs.core/*print-meta* true)

(def app-state
  (atom
   {:current-section 0
    :current-question 0
    :quiz default-quiz}))


(defn cljs-type->str [x]
  (if-let [ctor (.-constructor x)]
    (type->str ctor)
    (type->str x)))

(defn current-section [app-state]
  (let [current-section (:current-section app-state)]
    (get-in app-state [:quiz :sections current-section])))

;; (current-section @app-state)

(defn current-question [app-state]
  (let [current-question (:current-section app-state)]
    (get-in (current-section app-state) [:questions current-question])))

;; (current-question @app-state)
;; (-> @app-state current-section :questions count)
;; (:current-question @app-state)

(defn question-answered []
  (.log js/console "Chose correctly")
  (let [num-questions (-> @app-state current-section :questions count)]
    (swap! app-state update-in [:current-question] inc)))

;; (current-section @app-state)
;; (current-question @app-state)

(defn answer-css-class [status correct]
  (cond
   (= :unchosen status) "answer-default"
   correct "answer-correct success"
   :else "answer-incorrect alert"))

(answer-css-class :unchosen false)
(answer-css-class :chosen false)
(answer-css-class :chosen true)


(defn answer-view [answer owner]
  (reify
    om/IInitState
    (init-state [_]
                {:status :unchosen})
    om/IRenderState
    (render-state [_ {:keys [answer-chan status]}]
                  (dom/div
                   #js{:className "answer-container"}
                   (dom/button
                    #js{
;;                         :onClick (fn [e] (put! answer-chan answer))
                        :onClick (fn [e] (dispatcher/dispatch! :answer-chosen answer))
                        :className (str "answer " (answer-css-class status (:correct answer)))}
                    (:text answer))))))

(defn answer-section-view [answers owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [answer-chan]}]
                  (apply dom/div #js{:className "answer-section"}
                         (om/build-all answer-view answers
                                       {:init-state {:answer-chan answer-chan}})))))


(defn question-view [quiz-question owner]
  (reify
    ;;     om/IInitState
    ;;     (init-state [_]
    ;;                 {:answer-chan (chan)})

;;     om/IWillMount
;;     (will-mount [_]
;;                 ;;                 (let [answer-chan (om/get-state owner :answer-chan)]
;;                 (let [answer-chan (om/get-shared owner :tx-chan)]
;;                   (go (loop []
;;                         (let [answer-chosen (<! answer-chan)]
;;                           (.log js/console (str "Chose " (:text @answer-chosen)))
;;                           (om/transact! answer-chosen [:text] #(str % " *"))
;;                           ;;                           (om/update! answer-chosen :status :chosen)
;;                           ;;                           (when (:correct @answer-chosen)
;;                           ;;                             (question-answered))
;;                           (recur))))))

;;     om/IWillMount
;;     (will-mount [_]
;;                 (let [answer-chan (dispatcher/register :answer-chosen)]
;;                   (go-loop []
;;                            (let [answer-chosen (<! answer-chan)]
;;                              (.log js/console (str "Chose " (:text @answer-chosen)))
;;                              ;;                           (om/transact! answer-chosen [:text] #(str % " *"))
;;                              ;;                           ;;                           (om/update! answer-chosen :status :chosen)
;;                              ;;                           ;;                           (when (:correct @answer-chosen)
;;                              ;;                           ;;                             (question-answered))
;;                              (recur)))))

    om/IRenderState
    (render-state [_ {:keys [answer-chan]}]
                  (dom/div #js{:className "question-container"}
                           (dom/div #js{:className "question-text-container"}
                                    (dom/h3 #js{:className "question-text"} (:question quiz-question)))
                           (dom/div #js{:className "media-container"})
                           (om/build answer-section-view (:answers quiz-question)
                                     {:init-state {:answer-chan answer-chan}})))))

(defn header-bar-view [section _]
  (reify
    om/IRender
    (render [_]
            (let [current-question-num (inc (:current-question section))
                  total-num-questions (count (:questions section))]
              (dom/nav
               #js{:className "tab-bar"}
               (dom/section #js{:className "left-small text-center"} (str current-question-num "/" total-num-questions))
               (dom/section #js{:className "middle tab-bar-section"} (:name section))
               (dom/section #js{:className "right-small"}
                            (dom/a #js{:className "right-off-canvas-toggle menu-icon" :href "#"}
                                   (dom/span nil))))))))

(defn header-progress-view [section _]
  (reify
    om/IRender
    (render [_]
            (let [current-question-num (inc (:current-question section))
                  total-num-questions (count (:questions section))]
              (dom/div
               #js{:className "progress"}
               (dom/span
                #js{:className "meter"
                    :style #js{:width (str (* 100 (/ current-question-num total-num-questions)) "%")}}))))))

(defn header-view [section _]
  (reify
    om/IRender
    (render [_]
            (dom/div
             #js{:className "quiz-header"}
             (om/build header-bar-view section)
             (om/build header-progress-view section)))))

;; (:current-section @app-state)
;; (get-in @app-state [:sections (:current-section @app-state) :name])


(defn section-view [section owner]
  (reify
    om/IRender
    (render [_]
            (dom/div
             #js{:id "quiz-section" :className "off-canvas-wrap" :data-offcanvas true}
             (dom/div
              #js{:className "main-content inner-wrap"}
              (om/build header-view section)
              ;;               (om/build question-view (nth (:questions section) (:current-question section)))
              (om/build question-view (current-question section))
              (dom/a #js{:className "exit-off-canvas"}))))))


(defn quiz-view [app-state owner]
  (reify
    om/IRender
    (render [_]
            (dom/div nil
                     (om/build section-view
                               (->
                                app-state
                                :quiz
                                :sections
                                (nth (:current-section app-state))))))))

;; Re-eval this to see live changes in fns
(om/root
 quiz-view
 app-state
 {:target (. js/document (getElementById "app"))})
