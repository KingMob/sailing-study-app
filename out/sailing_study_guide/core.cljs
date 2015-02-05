(ns sailing-study-guide.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljsjs.react]
   [reagent.core :as reagent :refer [atom]]
   ;;[om.core :as om :include-macros true]
   ;;[om.dom :as dom :include-macros true]
   [cljs.core.async :refer [chan mult tap put! pub sub unsub <! >! close!]]
   [clojure.string :refer [join]]
   ;; [clairvoyant.core :as trace :include-macros true]
   [sailing-study-guide.quiz :refer [default-quiz]]
   [sailing-study-guide.dispatch :as dispatcher]
   ))

(enable-console-print!)
(set! cljs.core/*print-meta* true)

(def app-state
  (atom
   {:current-section 0
    :current-question 1
    :quiz default-quiz}))


(defn cljs-type->str [x]
  (if-let [ctor (.-constructor x)]
    (type->str ctor)
    (type->str x)))

;; (defn sections []
;;   (om/ref-cursor (get-in)))

;; (defn current-section []
;;   (let [curr-sec (:current-section app-state)]
;;     (om/ref-cursor (get-in (om/root-cursor app-state) [:quiz :sections curr-sec]))))

(defn current-section []
  (get-in @app-state [:quiz :sections 0])) ;; FIXME

;; (current-section)

(defn current-question []
  (let [curr-sec (:current-section @app-state)
        curr-ques (:current-question @app-state)]
    (get-in @app-state [:quiz :sections curr-sec :questions curr-ques])))

;; ;; (current-question @app-state)
;; ;; (-> @app-state current-section :questions count)
;; ;; (.log js/console (:current-question @app-state))

;; (defn question-answered []
;;   (.log js/console "Chose correctly")
;;   (let [num-questions (-> @app-state current-section :questions count)]
;;     (swap! app-state update-in [:current-question] inc)))

;; ;; (current-section @app-state)
;; ;; (.dir js/console (current-question @app-state))

(defn answer-css-class [status correct]
  (cond
   (= :unchosen status) "answer-default"
   correct "answer-correct success"
   :else "answer-incorrect alert"))

;; ;; (answer-css-class :unchosen false)
;; ;; (answer-css-class :chosen false)
;; ;; (answer-css-class :chosen true)



(defn answer-view [answer]
  (let [status :unchosen]
    [:div.answer-container
     [:button
      {
       :onClick (fn [e] (dispatcher/dispatch! :answer-chosen answer))
       :class (str "answer " (answer-css-class status (:correct answer)))}
      (:text answer)]]))


(defn answer-section-view [answers]
  (.dir js/console answers)
  [:div.answer-section
   (for [ans answers]
     ^{:key ans} [answer-view ans]
     ;; {:init-state {:answer-chan answer-chan}}
     )])


(defn question-view [quiz-question]

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

  ;; [{:keys [answer-chan]}]
  (.dir js/console quiz-question)
  [:div.question-container
   [:div.question-text-container
    [:h3.question-text (:question quiz-question)]]
   [:div.media-container]
   [answer-section-view (:answers quiz-question)
    ;; {:init-state {:answer-chan answer-chan}}
    ]])

(defn header-bar-view [section]
  (let [current-question-num (inc (:current-question section))
        total-num-questions (count (:questions section))]
    [:nav.tab-bar
     [:section.left-small.text-center (str current-question-num "/" total-num-questions)]
     [:section.middle.tab-bar-section (:name section)]
     [:section.right-small
      [:a {:class "right-off-canvas-toggle menu-icon" :href "#"}
       [:span]]]]))

(defn progress-bar-view [perc]
  [:div.progress
   [:span.meter {:style {:width (str perc "%")}}]])

(defn header-progress-view [section curr-ques]
  (let [current-question-num (inc curr-ques)
        total-num-questions (count (:questions section))]
    [progress-bar-view  (* 100 (/ current-question-num total-num-questions))]))


(defn header-view [section]
  [:div.quiz-header
   [header-bar-view section]
   [header-progress-view section (:current-question section)]])

;; ;;(.dir js/console (:current-section @app-state))
;; ;; (get-in @app-state [:sections (:current-section @app-state) :name])


(defn section-view [section]
  ;; (.dir js/console (current-question))
  [:div {:id "quiz-section" :className "off-canvas-wrap" :data-offcanvas true}
   [:div.main-content.inner-wrap
    [header-view section]
    [question-view (current-question)]
    [:a.exit-off-canvas]]])

;; (defn section-view [foo]
;;   [:div.error "Section-view " foo])

(defn quiz-view []
  ;;(.dir js/console (current-section))
  [:div
   [section-view (current-section)]])

(defn ^:export run []
  (reagent/render-component [quiz-view] (.-body js/document)))
