// Compiled by ClojureScript 0.0-2760 {}
goog.provide('sailing_study_guide.core');
goog.require('cljs.core');
goog.require('sailing_study_guide.dispatch');
goog.require('sailing_study_guide.quiz');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_print_meta_STAR_ = true;
sailing_study_guide.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-section","current-section",1519906460),(0),new cljs.core.Keyword(null,"current-question","current-question",-749753188),(1),new cljs.core.Keyword(null,"quiz","quiz",829625914),sailing_study_guide.quiz.default_quiz], null));
sailing_study_guide.core.cljs_type__GT_str = (function cljs_type__GT_str(x){
var temp__4124__auto__ = x.constructor;
if(cljs.core.truth_(temp__4124__auto__)){
var ctor = temp__4124__auto__;
return cljs.core.type__GT_str.call(null,ctor);
} else {
return cljs.core.type__GT_str.call(null,x);
}
});
sailing_study_guide.core.current_section = (function current_section(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,sailing_study_guide.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quiz","quiz",829625914),new cljs.core.Keyword(null,"sections","sections",-886710106),(0)], null));
});
sailing_study_guide.core.current_question = (function current_question(){
var curr_sec = new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sailing_study_guide.core.app_state));
var curr_ques = new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sailing_study_guide.core.app_state));
return cljs.core.get_in.call(null,cljs.core.deref.call(null,sailing_study_guide.core.app_state),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quiz","quiz",829625914),new cljs.core.Keyword(null,"sections","sections",-886710106),curr_sec,new cljs.core.Keyword(null,"questions","questions",1226225380),curr_ques], null));
});
sailing_study_guide.core.answer_css_class = (function answer_css_class(status,correct){
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
sailing_study_guide.core.answer_view = (function answer_view(answer){
var status = new cljs.core.Keyword(null,"unchosen","unchosen",-205763213);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.answer-container","div.answer-container",195852279),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (status){
return (function (e){
return sailing_study_guide.dispatch.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"answer-chosen","answer-chosen",-703375083),answer);
});})(status))
,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("answer "),cljs.core.str(sailing_study_guide.core.answer_css_class.call(null,status,new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(answer)))].join('')], null),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(answer)], null)], null);
});
sailing_study_guide.core.answer_section_view = (function answer_section_view(answers){
console.dir(answers);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.answer-section","div.answer-section",1749317064),(function (){var iter__4008__auto__ = (function iter__9293(s__9294){
return (new cljs.core.LazySeq(null,(function (){
var s__9294__$1 = s__9294;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9294__$1);
if(temp__4126__auto__){
var s__9294__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9294__$2)){
var c__4006__auto__ = cljs.core.chunk_first.call(null,s__9294__$2);
var size__4007__auto__ = cljs.core.count.call(null,c__4006__auto__);
var b__9296 = cljs.core.chunk_buffer.call(null,size__4007__auto__);
if((function (){var i__9295 = (0);
while(true){
if((i__9295 < size__4007__auto__)){
var ans = cljs.core._nth.call(null,c__4006__auto__,i__9295);
cljs.core.chunk_append.call(null,b__9296,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.core.answer_view,ans], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ans], null)));

var G__9297 = (i__9295 + (1));
i__9295 = G__9297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9296),iter__9293.call(null,cljs.core.chunk_rest.call(null,s__9294__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9296),null);
}
} else {
var ans = cljs.core.first.call(null,s__9294__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.core.answer_view,ans], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ans], null)),iter__9293.call(null,cljs.core.rest.call(null,s__9294__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4008__auto__.call(null,answers);
})()], null);
});
sailing_study_guide.core.question_view = (function question_view(quiz_question){
console.dir(quiz_question);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.question-container","div.question-container",-678898620),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.question-text-container","div.question-text-container",1391679038),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.question-text","h3.question-text",-481973586),new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(quiz_question)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-container","div.media-container",-523615011)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.core.answer_section_view,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(quiz_question)], null)], null);
});
sailing_study_guide.core.header_bar_view = (function header_bar_view(section){
var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(section) + (1));
var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(section));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.tab-bar","nav.tab-bar",240222619),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.left-small.text-center","section.left-small.text-center",-1259024526),[cljs.core.str(current_question_num),cljs.core.str("/"),cljs.core.str(total_num_questions)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.middle.tab-bar-section","section.middle.tab-bar-section",-967373016),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(section)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.right-small","section.right-small",257528220),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"right-off-canvas-toggle menu-icon",new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null)], null)], null)], null);
});
sailing_study_guide.core.progress_bar_view = (function progress_bar_view(perc){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress","div.progress",169531213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.meter","span.meter",2023760245),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(perc),cljs.core.str("%")].join('')], null)], null)], null)], null);
});
sailing_study_guide.core.header_progress_view = (function header_progress_view(section,curr_ques){
var current_question_num = (curr_ques + (1));
var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(section));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.core.progress_bar_view,((100) * (current_question_num / total_num_questions))], null);
});
sailing_study_guide.core.header_view = (function header_view(section){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.quiz-header","div.quiz-header",269841790),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.core.header_bar_view,section], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.core.header_progress_view,section,new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(section)], null)], null);
});
sailing_study_guide.core.section_view = (function section_view(section){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"quiz-section",new cljs.core.Keyword(null,"className","className",-1983287057),"off-canvas-wrap",new cljs.core.Keyword(null,"data-offcanvas","data-offcanvas",-1343884258),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-content.inner-wrap","div.main-content.inner-wrap",-1889940405),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.core.header_view,section], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.core.question_view,sailing_study_guide.core.current_question.call(null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.exit-off-canvas","a.exit-off-canvas",-1870222295)], null)], null)], null);
});
sailing_study_guide.core.quiz_view = (function quiz_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.core.section_view,sailing_study_guide.core.current_section.call(null)], null)], null);
});
sailing_study_guide.core.run = (function run(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sailing_study_guide.core.quiz_view], null),document.body);
});
goog.exportSymbol('sailing_study_guide.core.run', sailing_study_guide.core.run);

//# sourceMappingURL=core.js.map