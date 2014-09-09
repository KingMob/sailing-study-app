(ns sailing-study-guide.quiz)

(def ^:export default-quiz
  {:name "Quiz"
   :sections [{
               :name "Parts of the boat"
               :questions
               [{
                 :question "What is placed between the boat and the dock to cushion the hull?"
                 :image nil
                 :answers [
                           {:text "Tiller"
                            :correct false
                            :status :unchosen}
                           {:text "Boomvang"
                            :correct false
                            :status :unchosen}
                           {:text "Fender"
                            :correct true
                            :status :unchosen}
                           {:text "Gooseneck"
                            :correct false
                            :status :unchosen}
                           ]}
                {
                 :question "What's the small sail at front called?"
                 :image nil
                 :answers [
                           {:text "Jib"
                            :correct true
                            :status :unchosen}
                           {:text "Jab"
                            :correct false
                            :status :unchosen}
                           {:text "Jibjab"
                            :correct false
                            :status :unchosen}
                           {:text "Jibber jabber"
                            :correct false
                            :status :unchosen}]}
                {
                 :question "What's the biggest danger to a boat?"
                 :image nil
                 :answers [
                           {:text "Pirates"
                            :correct false
                            :status :unchosen}
                           {:text "Giant squids"
                            :correct false
                            :status :unchosen}
                           {:text "Barnacles"
                            :correct false
                            :status :unchosen}
                           {:text "That you'll need a bigger one"
                            :correct true
                            :status :unchosen}]}]}]})
