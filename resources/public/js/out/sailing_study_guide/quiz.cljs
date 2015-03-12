(ns sailing-study-guide.quiz)

(defonce ^:export default-quiz
  {:name "Basic Keelboat Sailing"
   :num 101
   :description "Covers basic sailing terminology, boat parts and functions, helm commands, basic sail trim, points of sail, buoyage, seamanship, and safety."
   :image nil
   :sections [{
               :name "Parts of the boat"
               :questions
               [{
                 :question "What is placed between the boat and the dock to cushion the hull?"
                 :image nil
                 :answers [
                           {:text "Tiller"
                            :correct false}
                           {:text "Boomvang"
                            :correct false}
                           {:text "Fender"
                            :correct true}
                           {:text "Gooseneck"
                            :correct false}
                           ]}
                {
                 :question "What's the small sail at front called?"
                 :image nil
                 :answers [
                           {:text "Jib"
                            :correct true}
                           {:text "Jab"
                            :correct false}
                           {:text "Jibjab"
                            :correct false}
                           {:text "Jibber jabber"
                            :correct false}]}
                {
                 :question "What's the biggest danger to a boat?"
                 :image nil
                 :answers [
                           {:text "Pirates"
                            :correct false}
                           {:text "Giant squids"
                            :correct false}
                           {:text "Barnacles"
                            :correct false}
                           {:text "That you'll need a bigger one"
                            :correct true}]}]}
              {
               :name "Parts of the boat 2"
               :questions
               [{
                 :question "What is placed between the boat and the dock to cushion the hull?"
                 :image nil
                 :answers [
                           {:text "Tiller"
                            :correct false}
                           {:text "Boomvang"
                            :correct false}
                           {:text "Fender"
                            :correct true}
                           {:text "Gooseneck"
                            :correct false}
                           ]}
                {
                 :question "What's the small sail at front called?"
                 :image nil
                 :answers [
                           {:text "Jib"
                            :correct true}
                           {:text "Jab"
                            :correct false}
                           {:text "Jibjab"
                            :correct false}
                           {:text "Jibber jabber"
                            :correct false}]}
                {
                 :question "What's the biggest danger to a boat?"
                 :image nil
                 :answers [
                           {:text "Pirates"
                            :correct false}
                           {:text "Giant squids"
                            :correct false}
                           {:text "Barnacles"
                            :correct false}
                           {:text "That you'll need a bigger one"
                            :correct true}]}]}]})
