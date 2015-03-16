// Compiled by ClojureScript 0.0-3053 {:elide-asserts false}
goog.provide('sailing_study_guide.model');
goog.require('cljs.core');
goog.require('sailing_study_guide.dispatch');
goog.require('sailing_study_guide.quiz');
goog.require('reagent.core');
if(typeof sailing_study_guide.model.app_state !== 'undefined'){
} else {
sailing_study_guide.model.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"current-quiz","current-quiz",-1542592384),(0),new cljs.core.Keyword(null,"current-section","current-section",1519906460),(0),new cljs.core.Keyword(null,"current-question","current-question",-749753188),(0),new cljs.core.Keyword(null,"quizzes","quizzes",-1946963243),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.quiz.default_quiz], null),new cljs.core.Keyword(null,"responses","responses",1257546453),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"splash","splash",-1122760796)], null));
}
if(typeof sailing_study_guide.model.current_quiz_idx !== 'undefined'){
} else {
sailing_study_guide.model.current_quiz_idx = reagent.core.cursor.call(null,sailing_study_guide.model.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-quiz","current-quiz",-1542592384)], null));
}
if(typeof sailing_study_guide.model.current_section_idx !== 'undefined'){
} else {
sailing_study_guide.model.current_section_idx = reagent.core.cursor.call(null,sailing_study_guide.model.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-section","current-section",1519906460)], null));
}
if(typeof sailing_study_guide.model.current_question_idx !== 'undefined'){
} else {
sailing_study_guide.model.current_question_idx = reagent.core.cursor.call(null,sailing_study_guide.model.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-question","current-question",-749753188)], null));
}
if(typeof sailing_study_guide.model.current_page !== 'undefined'){
} else {
sailing_study_guide.model.current_page = reagent.core.cursor.call(null,sailing_study_guide.model.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null));
}
if(typeof sailing_study_guide.model.responses !== 'undefined'){
} else {
sailing_study_guide.model.responses = reagent.core.cursor.call(null,sailing_study_guide.model.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"responses","responses",1257546453)], null));
}
sailing_study_guide.model.quizzes = (function sailing_study_guide$model$quizzes(){
return new cljs.core.Keyword(null,"quizzes","quizzes",-1946963243).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sailing_study_guide.model.app_state));
});
sailing_study_guide.model.sections = (function sailing_study_guide$model$sections(quiz){
return new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(quiz);
});
sailing_study_guide.model.questions = (function sailing_study_guide$model$questions(section){
return new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(section);
});
sailing_study_guide.model.quiz = (function sailing_study_guide$model$quiz(idx){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,sailing_study_guide.model.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quizzes","quizzes",-1946963243),idx], null));
});
sailing_study_guide.model.section = (function sailing_study_guide$model$section(idx){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,sailing_study_guide.model.app_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quizzes","quizzes",-1946963243),new cljs.core.Keyword(null,"current-quiz","current-quiz",-1542592384).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sailing_study_guide.model.app_state)),new cljs.core.Keyword(null,"sections","sections",-886710106),idx], null));
});
sailing_study_guide.model.question = (function sailing_study_guide$model$question(idx){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,sailing_study_guide.model.app_state),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quizzes","quizzes",-1946963243),new cljs.core.Keyword(null,"current-quiz","current-quiz",-1542592384).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sailing_study_guide.model.app_state)),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sailing_study_guide.model.app_state)),new cljs.core.Keyword(null,"questions","questions",1226225380),idx], null));
});
sailing_study_guide.model.current_quiz = (function sailing_study_guide$model$current_quiz(){
return sailing_study_guide.model.quiz.call(null,new cljs.core.Keyword(null,"current-quiz","current-quiz",-1542592384).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sailing_study_guide.model.app_state)));
});
sailing_study_guide.model.current_section = (function sailing_study_guide$model$current_section(){
return sailing_study_guide.model.section.call(null,new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sailing_study_guide.model.app_state)));
});
sailing_study_guide.model.current_question = (function sailing_study_guide$model$current_question(){
return sailing_study_guide.model.question.call(null,new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sailing_study_guide.model.app_state)));
});
sailing_study_guide.model.current_section_num = (function sailing_study_guide$model$current_section_num(){
return (new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sailing_study_guide.model.app_state)) + (1));
});
sailing_study_guide.model.current_question_num = (function sailing_study_guide$model$current_question_num(){
return (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sailing_study_guide.model.app_state)) + (1));
});
sailing_study_guide.model.num_quizzes = (function sailing_study_guide$model$num_quizzes(){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"quizzes","quizzes",-1946963243).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sailing_study_guide.model.app_state)));
});
sailing_study_guide.model.num_sections = (function sailing_study_guide$model$num_sections(quiz){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(quiz));
});
sailing_study_guide.model.num_sections_current_quiz = (function sailing_study_guide$model$num_sections_current_quiz(){
return sailing_study_guide.model.num_sections.call(null,sailing_study_guide.model.current_quiz.call(null));
});
sailing_study_guide.model.num_questions = (function sailing_study_guide$model$num_questions(section){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(section));
});
sailing_study_guide.model.num_questions_current_section = (function sailing_study_guide$model$num_questions_current_section(){
return sailing_study_guide.model.num_questions.call(null,sailing_study_guide.model.current_section.call(null));
});
sailing_study_guide.model.num_questions_quiz = (function sailing_study_guide$model$num_questions_quiz(quiz){
return cljs.core.transduce.call(null,cljs.core.map.call(null,sailing_study_guide.model.num_questions),cljs.core._PLUS_,sailing_study_guide.model.sections.call(null,quiz));
});
sailing_study_guide.model.num_questions_current_quiz = (function sailing_study_guide$model$num_questions_current_quiz(){
return sailing_study_guide.model.num_questions_quiz.call(null,sailing_study_guide.model.current_quiz.call(null));
});
sailing_study_guide.model.quiz_id = (function sailing_study_guide$model$quiz_id(quiz){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(quiz)),cljs.core.str("-"),cljs.core.str(new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(quiz))].join('');
});
sailing_study_guide.model.quiz_finished = (function sailing_study_guide$model$quiz_finished(){
return cljs.core.println.call(null,"Quiz ended");
});
sailing_study_guide.model.store_response = (function sailing_study_guide$model$store_response(question,answer){
return cljs.core.swap_BANG_.call(null,sailing_study_guide.model.responses,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(question),answer], null));
});
sailing_study_guide.model.next_question = (function sailing_study_guide$model$next_question(){
var curr_ques = sailing_study_guide.model.current_question_num.call(null);
var curr_sec = sailing_study_guide.model.current_section_num.call(null);
var curr_num_sections = sailing_study_guide.model.num_sections_current_quiz.call(null);
var curr_num_questions = sailing_study_guide.model.num_questions_current_section.call(null);
if((curr_ques < curr_num_questions)){
return cljs.core.swap_BANG_.call(null,sailing_study_guide.model.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-question","current-question",-749753188),curr_ques);
} else {
if((curr_sec < curr_num_sections)){
cljs.core.swap_BANG_.call(null,sailing_study_guide.model.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-section","current-section",1519906460),curr_sec);

return cljs.core.swap_BANG_.call(null,sailing_study_guide.model.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-question","current-question",-749753188),(0));
} else {
return sailing_study_guide.model.quiz_finished.call(null);

}
}
});
sailing_study_guide.dispatch.whenever.call(null,new cljs.core.Keyword(null,"start-quiz","start-quiz",-1828957706),(function (quiz_idx){
if(cljs.core.truth_(quiz_idx)){
cljs.core.reset_BANG_.call(null,sailing_study_guide.model.current_quiz_idx,quiz_idx);

cljs.core.reset_BANG_.call(null,sailing_study_guide.model.current_section_idx,(0));

cljs.core.reset_BANG_.call(null,sailing_study_guide.model.current_question_idx,(0));

return cljs.core.reset_BANG_.call(null,sailing_study_guide.model.current_page,new cljs.core.Keyword(null,"question","question",-1411720117));
} else {
return null;
}
}));
sailing_study_guide.dispatch.whenever.call(null,new cljs.core.Keyword(null,"answer-chosen","answer-chosen",-703375083),(function (p__24975){
var map__24976 = p__24975;
var map__24976__$1 = ((cljs.core.seq_QMARK_.call(null,map__24976))?cljs.core.apply.call(null,cljs.core.hash_map,map__24976):map__24976);
var answer = cljs.core.get.call(null,map__24976__$1,new cljs.core.Keyword(null,"answer","answer",-742633163));
var question = cljs.core.get.call(null,map__24976__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
cljs.core.println.call(null,"Chose",answer,"to",question);

sailing_study_guide.model.store_response.call(null,question,answer);

if(cljs.core.truth_(new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(answer))){
cljs.core.println.call(null,"Chose correctly!");

return sailing_study_guide.model.next_question.call(null);
} else {
return null;
}
}));

//# sourceMappingURL=model.js.map