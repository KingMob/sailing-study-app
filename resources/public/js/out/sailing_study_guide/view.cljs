(ns sailing-study-guide.view
  (:require
   [sailing-study-guide.core :as sail :refer [app-state section question current-section current-question current-question-num num-questions-current-section]]
   [sailing-study-guide.dispatch :as dispatcher]
   [reagent.core :as reagent :refer [atom cursor]]))

(defn answer-css-class [status correct]
  (cond
   (= :unchosen status) "answer-default"
   correct "answer-correct success"
   :else "answer-incorrect alert"))

(defn answer-view [answer]
  (println "answer-view called")
  (let [status (atom :unchosen)]
    (println "Status: "@status)
    (fn [answer]
      [:div.answer-container
       [:button
        {
         :onClick (fn [e]
                    (dispatcher/dispatch! :answer-chosen answer)
                    (reset! status :chosen))
         :class (str "answer " (answer-css-class @status (:correct answer)))}
        (:text answer)]])))


(defn answer-section-view [answers]
  ;; (.dir js/console answers)
  [:div.answer-section
   (for [ans answers]
     ^{:key ans} [answer-view ans]
     ;; {:init-state {:answer-chan answer-chan}}
     )])


(defn question-view []
  (println "question-view called")
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
  ;; (.dir js/console quiz-question)
  (let [quiz-question (current-question)]
    [:div.question-container
     [:div.question-text-container
      [:h3.question-text (:question quiz-question)]]
     [:div.media-container]
     [answer-section-view (:answers quiz-question)
      ;; {:init-state {:answer-chan answer-chan}}
      ]]))

(defn header-bar-view [left middle]
  [:nav.tab-bar
   [:section.left-small.text-center left]
   [:section.middle.tab-bar-section middle]
   [:section.right-small
    [:a {:class "right-off-canvas-toggle menu-icon" :href "#"}
     [:span]]]])

(defn progress-bar-view [perc]
  [:div.progress
   [:span.meter {:style {:width (str perc "%")}}]])


(defn header-view []
  (let [question-num (current-question-num)
        total-num-questions (num-questions-current-section)
        perc (* 100 (/ question-num total-num-questions))]
    [:div.quiz-header
     [header-bar-view (str question-num "/" total-num-questions) (:name section)]
     [progress-bar-view perc]]))

;; ;;(.dir js/console (:current-section @app-state))
;; ;; (get-in @app-state [:sections (:current-section @app-state) :name])


(defn section-view []
  ;; (.dir js/console (current-question))
  [:div {:id "quiz-section" :className "off-canvas-wrap" :data-offcanvas true}
   [:div.main-content.inner-wrap
    [header-view]
    [question-view]
    [:a.exit-off-canvas]]])

;; (defn section-view [foo]
;;   [:div.error "Section-view " foo])

(defn quiz-view []
  ;;(.dir js/console (current-section))
  [:div
   [section-view]])

(defn ^:export run []
  (reagent/render [quiz-view] (.-body js/document)))

(run)
