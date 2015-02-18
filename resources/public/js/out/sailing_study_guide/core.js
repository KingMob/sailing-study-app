// Compiled by ClojureScript 0.0-2843 {:elide-asserts false}
goog.provide('sailing_study_guide.core');
goog.require('cljs.core');
goog.require('sailing_study_guide.dispatch');
goog.require('sailing_study_guide.quiz');
goog.require('clojure.string');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_print_meta_STAR_ = true;
cljs.core.println.call(null,"Starting...");
if(typeof sailing_study_guide.core.app_state !== 'undefined'){
} else {
sailing_study_guide.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-section","current-section",1519906460),(0),new cljs.core.Keyword(null,"current-question","current-question",-749753188),(0),new cljs.core.Keyword(null,"quiz","quiz",829625914),sailing_study_guide.quiz.default_quiz], null));
}
sailing_study_guide.core.section = (function section(idx){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,sailing_study_guide.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quiz","quiz",829625914),new cljs.core.Keyword(null,"sections","sections",-886710106),idx], null));
});
sailing_study_guide.core.question = (function question(idx){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,sailing_study_guide.core.app_state),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quiz","quiz",829625914),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sailing_study_guide.core.app_state)),new cljs.core.Keyword(null,"questions","questions",1226225380),idx], null));
});
sailing_study_guide.core.current_section = (function current_section(){
return sailing_study_guide.core.section.call(null,new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sailing_study_guide.core.app_state)));
});
sailing_study_guide.core.current_question = (function current_question(){
return sailing_study_guide.core.question.call(null,new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sailing_study_guide.core.app_state)));
});
sailing_study_guide.core.current_section_num = (function current_section_num(){
return (new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sailing_study_guide.core.app_state)) + (1));
});
sailing_study_guide.core.current_question_num = (function current_question_num(){
return (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sailing_study_guide.core.app_state)) + (1));
});
sailing_study_guide.core.num_sections = (function num_sections(){
return cljs.core.count.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,sailing_study_guide.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quiz","quiz",829625914),new cljs.core.Keyword(null,"sections","sections",-886710106)], null)));
});
sailing_study_guide.core.num_questions = (function num_questions(idx){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.section.call(null,idx)));
});
sailing_study_guide.core.num_questions_current_section = (function num_questions_current_section(){
return cljs.core.count.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,sailing_study_guide.core.app_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quiz","quiz",829625914),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sailing_study_guide.core.app_state)),new cljs.core.Keyword(null,"questions","questions",1226225380)], null)));
});
sailing_study_guide.core.quiz_finished = (function quiz_finished(){
return cljs.core.println.call(null,"Quiz ended");
});
sailing_study_guide.core.next_question = (function next_question(){
var curr_ques = sailing_study_guide.core.current_question_num.call(null);
var curr_sec = sailing_study_guide.core.current_section_num.call(null);
var curr_num_sections = sailing_study_guide.core.num_sections.call(null);
var curr_num_questions = sailing_study_guide.core.num_questions_current_section.call(null);
if((curr_ques < curr_num_questions)){
return cljs.core.swap_BANG_.call(null,sailing_study_guide.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-question","current-question",-749753188),curr_ques);
} else {
if((curr_sec < curr_num_sections)){
cljs.core.swap_BANG_.call(null,sailing_study_guide.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-section","current-section",1519906460),curr_sec);

return cljs.core.swap_BANG_.call(null,sailing_study_guide.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-question","current-question",-749753188),(0));
} else {
return sailing_study_guide.core.quiz_finished.call(null);

}
}
});
sailing_study_guide.dispatch.whenever.call(null,new cljs.core.Keyword(null,"answer-chosen","answer-chosen",-703375083),(function (answer){
cljs.core.println.call(null,"CB called w payload: ",answer);

if(cljs.core.truth_(new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(answer))){
cljs.core.println.call(null,"Chose correctly!");

return sailing_study_guide.core.next_question.call(null);
} else {
return null;
}
}));

//# sourceMappingURL=core.js.map