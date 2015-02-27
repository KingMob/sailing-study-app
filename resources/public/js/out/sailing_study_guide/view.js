// Compiled by ClojureScript 0.0-2913 {:elide-asserts false}
goog.provide('sailing_study_guide.view');
goog.require('cljs.core');
goog.require('sailing_study_guide.core');
goog.require('reagent.core');
goog.require('sailing_study_guide.view.splash');
goog.require('sailing_study_guide.view.utils');
goog.require('sailing_study_guide.dispatch');
if(typeof sailing_study_guide.view.ctg !== 'undefined'){
} else {
sailing_study_guide.view.ctg = reagent.core.adapt_react_class.call(null,(React["addons"]["CSSTransitionGroup"]));
}
sailing_study_guide.view.answer_css_class = (function answer_css_class(status,correct){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unchosen","unchosen",-205763213),status)){
return "answer-default";
} else {
if(cljs.core.truth_(correct)){
return "answer-correct success";
} else {
return "answer-incorrect alert";

}
}
});
sailing_study_guide.view.answer_view = (function answer_view(answer){
cljs.core.println.call(null,"answer-view called");

var status = reagent.core.atom.call(null,new cljs.core.Keyword(null,"unchosen","unchosen",-205763213));
return ((function (status){
return (function (answer__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.answer-container","div.answer-container",195852279),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (status){
return (function (e){
sailing_study_guide.dispatch.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"answer-chosen","answer-chosen",-703375083),answer__$1);

return cljs.core.reset_BANG_.call(null,status,new cljs.core.Keyword(null,"chosen","chosen",-1422409985));
});})(status))
,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("answer "),cljs.core.str(sailing_study_guide.view.answer_css_class.call(null,cljs.core.deref.call(null,status),new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(answer__$1)))].join('')], null),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(answer__$1)], null)], null);
});
;})(status))
});
sailing_study_guide.view.answer_section_view = (function answer_section_view(answers){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.answer-section","div.answer-section",1749317064),(function (){var iter__17569__auto__ = (function iter__23999(s__24000){
return (new cljs.core.LazySeq(null,(function (){
var s__24000__$1 = s__24000;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24000__$1);
if(temp__4126__auto__){
var s__24000__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24000__$2)){
var c__17567__auto__ = cljs.core.chunk_first.call(null,s__24000__$2);
var size__17568__auto__ = cljs.core.count.call(null,c__17567__auto__);
var b__24002 = cljs.core.chunk_buffer.call(null,size__17568__auto__);
if((function (){var i__24001 = (0);
while(true){
if((i__24001 < size__17568__auto__)){
var ans = cljs.core._nth.call(null,c__17567__auto__,i__24001);
cljs.core.chunk_append.call(null,b__24002,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.answer_view,ans], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ans], null)));

var G__24003 = (i__24001 + (1));
i__24001 = G__24003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24002),iter__23999.call(null,cljs.core.chunk_rest.call(null,s__24000__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24002),null);
}
} else {
var ans = cljs.core.first.call(null,s__24000__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.answer_view,ans], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ans], null)),iter__23999.call(null,cljs.core.rest.call(null,s__24000__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17569__auto__.call(null,answers);
})()], null);
});
sailing_study_guide.view.question_view = (function question_view(quiz_question){
console.log("question-view called for ",new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(quiz_question));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.question-container","div.question-container",-678898620),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.question-text-container","div.question-text-container",1391679038),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.question-text","h3.question-text",-481973586),new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(quiz_question)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-container","div.media-container",-523615011)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.answer_section_view,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(quiz_question)], null)], null);
});
sailing_study_guide.view.header_bar_view = (function header_bar_view(left,middle){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.tab-bar","nav.tab-bar",240222619),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.left-small.text-center","section.left-small.text-center",-1259024526),left], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.middle.tab-bar-section","section.middle.tab-bar-section",-967373016),middle], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.right-small","section.right-small",257528220),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"right-off-canvas-toggle menu-icon",new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null)], null)], null)], null);
});
sailing_study_guide.view.header_view = (function header_view(){
var question_num = sailing_study_guide.core.current_question_num.call(null);
var total_num_questions = sailing_study_guide.core.num_questions_current_section.call(null);
var perc = ((100) * (question_num / total_num_questions));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.quiz-header","div.quiz-header",269841790),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.header_bar_view,[cljs.core.str(question_num),cljs.core.str("/"),cljs.core.str(total_num_questions)].join(''),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.current_section.call(null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.utils.progress_bar_view,perc], null)], null);
});
sailing_study_guide.view.section_view = (function section_view(){
console.log("section-view called");

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"quiz-section",new cljs.core.Keyword(null,"className","className",-1983287057),"off-canvas-wrap",new cljs.core.Keyword(null,"data-offcanvas","data-offcanvas",-1343884258),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-content.inner-wrap","div.main-content.inner-wrap",-1889940405),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.header_view], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.ctg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transitionName","transitionName",-654288740),"question-transition",new cljs.core.Keyword(null,"className","className",-1983287057),"question-transition-container",new cljs.core.Keyword(null,"component","component",1555936782),"div"], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.question_view,sailing_study_guide.core.current_question.call(null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),sailing_study_guide.core.current_question.call(null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.exit-off-canvas","a.exit-off-canvas",-1870222295)], null)], null)], null);
});
sailing_study_guide.view.quiz_view = (function quiz_view(){
console.log("quiz-view called");

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.section_view], null)], null);
});
sailing_study_guide.view.run = (function run(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.view.splash.splash,sailing_study_guide.view.quiz_view], null),document.body);
});
goog.exportSymbol('sailing_study_guide.view.run', sailing_study_guide.view.run);
sailing_study_guide.view.run.call(null);

//# sourceMappingURL=view.js.map