// Compiled by ClojureScript 0.0-3123 {:elide-asserts false}
goog.provide('sailing_study_guide.view.quizzes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('sailing_study_guide.model');
goog.require('cljsjs.react');
goog.require('sailing_study_guide.view.utils');
goog.require('sailing_study_guide.dispatch');
sailing_study_guide.view.quizzes.default_quiz_img = "http://cdn.makeagif.com/media/6-13-2014/A9qwsI.gif";
sailing_study_guide.view.quizzes.quiz_img = (function sailing_study_guide$view$quizzes$quiz_img(quiz){
var temp__4124__auto__ = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(quiz);
if(cljs.core.truth_(temp__4124__auto__)){
var image = temp__4124__auto__;
return image;
} else {
return sailing_study_guide.view.quizzes.default_quiz_img;
}
});
sailing_study_guide.view.quizzes.quiz_card_footer = (function sailing_study_guide$view$quizzes$quiz_card_footer(num_sections,num_questions,quiz_idx){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.quiz-card-footer","div.quiz-card-footer",416169879),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.num-sections","div.num-sections",-1739739799),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),num_sections], null),"SECTIONS"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.num-questions","div.num-questions",-1706998464),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),num_questions], null),"QUESTIONS"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.start-quiz-container","div.start-quiz-container",-1617016718),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.start-quiz","button.start-quiz",1921541417),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return sailing_study_guide.dispatch.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"start-quiz","start-quiz",-1828957706),quiz_idx);
})], null),"Start Quiz"], null)], null)], null);
});
sailing_study_guide.view.quizzes.quiz_number = (function sailing_study_guide$view$quizzes$quiz_number(quiz){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.quiz-num-hex","div.quiz-num-hex",-1009492600),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.utils.nested_hexagons,(2),.125,"red",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.quiz-num","div.quiz-num",2065174305),new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(quiz)], null)], null)], null);
});
sailing_study_guide.view.quizzes.quiz_card_view = (function sailing_study_guide$view$quizzes$quiz_card_view(idx,quiz){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.quiz-card","div.quiz-card",-1060183273),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.quiz-img","img.quiz-img",-1787925303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sailing_study_guide.view.quizzes.quiz_img.call(null,quiz)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.separator","div.separator",1779164091)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.quizzes.quiz_number,quiz], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.quiz-body-text","div.quiz-body-text",1924336866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.quiz-name","div.quiz-name",406211829),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(quiz)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.quiz-desc","div.quiz-desc",589584747),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(quiz)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.quizzes.quiz_card_footer,sailing_study_guide.model.num_sections.call(null,quiz),sailing_study_guide.model.num_questions_quiz.call(null,quiz),idx], null)], null);
});
sailing_study_guide.view.quizzes.header_bar_view = (function sailing_study_guide$view$quizzes$header_bar_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.tab-bar","nav.tab-bar",240222619),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.middle.tab-bar-section","section.middle.tab-bar-section",-967373016),"SELECT A QUIZ"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.right-small","section.right-small",257528220),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"right-off-canvas-toggle menu-icon",new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null)], null)], null)], null);
});
sailing_study_guide.view.quizzes.main = (function sailing_study_guide$view$quizzes$main(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.quizzes.header_bar_view], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.quiz-list","div.quiz-list",-725930293),cljs.core.map_indexed.call(null,(function (idx,quiz){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.quizzes.quiz_card_view,idx,quiz], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),sailing_study_guide.model.quiz_id.call(null,quiz)], null));
}),sailing_study_guide.model.quizzes.call(null))], null)], null);
});

//# sourceMappingURL=quizzes.js.map