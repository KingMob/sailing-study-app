// Compiled by ClojureScript 0.0-2740 {}
goog.provide('sailing_study_guide.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('sailing_study_guide.quiz');
goog.require('cljs.core.async');
goog.require('clairvoyant.core');
goog.require('sailing_study_guide.dispatch');
goog.require('om.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_print_meta_STAR_ = true;
sailing_study_guide.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-section","current-section",1519906460),(0),new cljs.core.Keyword(null,"current-question","current-question",-749753188),(0),new cljs.core.Keyword(null,"quiz","quiz",829625914),sailing_study_guide.quiz.default_quiz], null));
sailing_study_guide.core.cljs_type__GT_str = (function cljs_type__GT_str(x){
var temp__4124__auto__ = x.constructor;
if(cljs.core.truth_(temp__4124__auto__)){
var ctor = temp__4124__auto__;
return cljs.core.type__GT_str.call(null,ctor);
} else {
return cljs.core.type__GT_str.call(null,x);
}
});
sailing_study_guide.core.current_section = (function current_section(app_state){
var current_section__$1 = new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(app_state);
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quiz","quiz",829625914),new cljs.core.Keyword(null,"sections","sections",-886710106),current_section__$1], null));
});
sailing_study_guide.core.current_question = (function current_question(app_state){
var current_question__$1 = new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(app_state);
return cljs.core.get_in.call(null,sailing_study_guide.core.current_section.call(null,app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"questions","questions",1226225380),current_question__$1], null));
});
sailing_study_guide.core.question_answered = (function question_answered(){
console.log("Chose correctly");

var num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.current_section.call(null,cljs.core.deref.call(null,sailing_study_guide.core.app_state))));
return cljs.core.swap_BANG_.call(null,sailing_study_guide.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-question","current-question",-749753188)], null),cljs.core.inc);
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
sailing_study_guide.core.answer_css_class.call(null,new cljs.core.Keyword(null,"unchosen","unchosen",-205763213),false);
sailing_study_guide.core.answer_css_class.call(null,new cljs.core.Keyword(null,"chosen","chosen",-1422409985),false);
sailing_study_guide.core.answer_css_class.call(null,new cljs.core.Keyword(null,"chosen","chosen",-1422409985),true);
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){
if(typeof sailing_study_guide.core.t12120 !== 'undefined'){
} else {

/**
* @constructor
*/
sailing_study_guide.core.t12120 = (function (owner,answer,answer_view,meta12121){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta12121 = meta12121;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t12120.prototype.om$core$IRenderState$ = true;

sailing_study_guide.core.t12120.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__12123){
var self__ = this;
var map__12124 = p__12123;
var map__12124__$1 = ((cljs.core.seq_QMARK_.call(null,map__12124))?cljs.core.apply.call(null,cljs.core.hash_map,map__12124):map__12124);
var status = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var answer_chan = cljs.core.get.call(null,map__12124__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));
var ___$1 = this;
return React.DOM.div({"className": "answer-container"},React.DOM.button({"className": [cljs.core.str("answer "),cljs.core.str(sailing_study_guide.core.answer_css_class.call(null,status,new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(self__.answer)))].join(''), "onClick": ((function (___$1,map__12124,map__12124__$1,status,answer_chan){
return (function (e){
return sailing_study_guide.dispatch.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"answer-chosen","answer-chosen",-703375083),self__.answer);
});})(___$1,map__12124,map__12124__$1,status,answer_chan))
},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.answer)));
});

sailing_study_guide.core.t12120.prototype.om$core$IInitState$ = true;

sailing_study_guide.core.t12120.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null);
});

sailing_study_guide.core.t12120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12122){
var self__ = this;
var _12122__$1 = this;
return self__.meta12121;
});

sailing_study_guide.core.t12120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12122,meta12121__$1){
var self__ = this;
var _12122__$1 = this;
return (new sailing_study_guide.core.t12120(self__.owner,self__.answer,self__.answer_view,meta12121__$1));
});

sailing_study_guide.core.t12120.cljs$lang$type = true;

sailing_study_guide.core.t12120.cljs$lang$ctorStr = "sailing-study-guide.core/t12120";

sailing_study_guide.core.t12120.cljs$lang$ctorPrWriter = (function (this__4346__auto__,writer__4347__auto__,opt__4348__auto__){
return cljs.core._write.call(null,writer__4347__auto__,"sailing-study-guide.core/t12120");
});

sailing_study_guide.core.__GT_t12120 = (function __GT_t12120(owner__$1,answer__$1,answer_view__$1,meta12121){
return (new sailing_study_guide.core.t12120(owner__$1,answer__$1,answer_view__$1,meta12121));
});

}

return (new sailing_study_guide.core.t12120(owner,answer,answer_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),39,new cljs.core.Keyword(null,"end-line","end-line",1837326455),74,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),61,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/src/sailing_study_guide/core.cljs"], null)));
});
sailing_study_guide.core.answer_section_view = (function answer_section_view(answers,owner){
if(typeof sailing_study_guide.core.t12130 !== 'undefined'){
} else {

/**
* @constructor
*/
sailing_study_guide.core.t12130 = (function (owner,answers,answer_section_view,meta12131){
this.owner = owner;
this.answers = answers;
this.answer_section_view = answer_section_view;
this.meta12131 = meta12131;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t12130.prototype.om$core$IRenderState$ = true;

sailing_study_guide.core.t12130.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__12133){
var self__ = this;
var map__12134 = p__12133;
var map__12134__$1 = ((cljs.core.seq_QMARK_.call(null,map__12134))?cljs.core.apply.call(null,cljs.core.hash_map,map__12134):map__12134);
var answer_chan = cljs.core.get.call(null,map__12134__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "answer-section"},om.core.build_all.call(null,sailing_study_guide.core.answer_view,self__.answers,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176),answer_chan], null)], null)));
});

sailing_study_guide.core.t12130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12132){
var self__ = this;
var _12132__$1 = this;
return self__.meta12131;
});

sailing_study_guide.core.t12130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12132,meta12131__$1){
var self__ = this;
var _12132__$1 = this;
return (new sailing_study_guide.core.t12130(self__.owner,self__.answers,self__.answer_section_view,meta12131__$1));
});

sailing_study_guide.core.t12130.cljs$lang$type = true;

sailing_study_guide.core.t12130.cljs$lang$ctorStr = "sailing-study-guide.core/t12130";

sailing_study_guide.core.t12130.cljs$lang$ctorPrWriter = (function (this__4346__auto__,writer__4347__auto__,opt__4348__auto__){
return cljs.core._write.call(null,writer__4347__auto__,"sailing-study-guide.core/t12130");
});

sailing_study_guide.core.__GT_t12130 = (function __GT_t12130(owner__$1,answers__$1,answer_section_view__$1,meta12131){
return (new sailing_study_guide.core.t12130(owner__$1,answers__$1,answer_section_view__$1,meta12131));
});

}

return (new sailing_study_guide.core.t12130(owner,answers,answer_section_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),84,new cljs.core.Keyword(null,"end-line","end-line",1837326455),82,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),77,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/src/sailing_study_guide/core.cljs"], null)));
});
sailing_study_guide.core.question_view = (function question_view(quiz_question,owner){
if(typeof sailing_study_guide.core.t12140 !== 'undefined'){
} else {

/**
* @constructor
*/
sailing_study_guide.core.t12140 = (function (owner,quiz_question,question_view,meta12141){
this.owner = owner;
this.quiz_question = quiz_question;
this.question_view = question_view;
this.meta12141 = meta12141;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t12140.prototype.om$core$IRenderState$ = true;

sailing_study_guide.core.t12140.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__12143){
var self__ = this;
var map__12144 = p__12143;
var map__12144__$1 = ((cljs.core.seq_QMARK_.call(null,map__12144))?cljs.core.apply.call(null,cljs.core.hash_map,map__12144):map__12144);
var answer_chan = cljs.core.get.call(null,map__12144__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));
var ___$1 = this;
return React.DOM.div({"className": "question-container"},React.DOM.div({"className": "question-text-container"},React.DOM.h3({"className": "question-text"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(self__.quiz_question))),React.DOM.div({"className": "media-container"}),om.core.build.call(null,sailing_study_guide.core.answer_section_view,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176),answer_chan], null)], null)));
});

sailing_study_guide.core.t12140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12142){
var self__ = this;
var _12142__$1 = this;
return self__.meta12141;
});

sailing_study_guide.core.t12140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12142,meta12141__$1){
var self__ = this;
var _12142__$1 = this;
return (new sailing_study_guide.core.t12140(self__.owner,self__.quiz_question,self__.question_view,meta12141__$1));
});

sailing_study_guide.core.t12140.cljs$lang$type = true;

sailing_study_guide.core.t12140.cljs$lang$ctorStr = "sailing-study-guide.core/t12140";

sailing_study_guide.core.t12140.cljs$lang$ctorPrWriter = (function (this__4346__auto__,writer__4347__auto__,opt__4348__auto__){
return cljs.core._write.call(null,writer__4347__auto__,"sailing-study-guide.core/t12140");
});

sailing_study_guide.core.__GT_t12140 = (function __GT_t12140(owner__$1,quiz_question__$1,question_view__$1,meta12141){
return (new sailing_study_guide.core.t12140(owner__$1,quiz_question__$1,question_view__$1,meta12141));
});

}

return (new sailing_study_guide.core.t12140(owner,quiz_question,question_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),82,new cljs.core.Keyword(null,"end-line","end-line",1837326455),123,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),86,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/src/sailing_study_guide/core.cljs"], null)));
});
sailing_study_guide.core.header_bar_view = (function header_bar_view(section,_){
if(typeof sailing_study_guide.core.t12148 !== 'undefined'){
} else {

/**
* @constructor
*/
sailing_study_guide.core.t12148 = (function (_,section,header_bar_view,meta12149){
this._ = _;
this.section = section;
this.header_bar_view = header_bar_view;
this.meta12149 = meta12149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t12148.prototype.om$core$IRender$ = true;

sailing_study_guide.core.t12148.prototype.om$core$IRender$render$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));
var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));
return React.DOM.nav({"className": "tab-bar"},React.DOM.section({"className": "left-small text-center"},[cljs.core.str(current_question_num),cljs.core.str("/"),cljs.core.str(total_num_questions)].join('')),React.DOM.section({"className": "middle tab-bar-section"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.section)),React.DOM.section({"className": "right-small"},React.DOM.a({"href": "#", "className": "right-off-canvas-toggle menu-icon"},React.DOM.span(null))));
});

sailing_study_guide.core.t12148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12150){
var self__ = this;
var _12150__$1 = this;
return self__.meta12149;
});

sailing_study_guide.core.t12148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12150,meta12149__$1){
var self__ = this;
var _12150__$1 = this;
return (new sailing_study_guide.core.t12148(self__._,self__.section,self__.header_bar_view,meta12149__$1));
});

sailing_study_guide.core.t12148.cljs$lang$type = true;

sailing_study_guide.core.t12148.cljs$lang$ctorStr = "sailing-study-guide.core/t12148";

sailing_study_guide.core.t12148.cljs$lang$ctorPrWriter = (function (this__4346__auto__,writer__4347__auto__,opt__4348__auto__){
return cljs.core._write.call(null,writer__4347__auto__,"sailing-study-guide.core/t12148");
});

sailing_study_guide.core.__GT_t12148 = (function __GT_t12148(___$1,section__$1,header_bar_view__$1,meta12149){
return (new sailing_study_guide.core.t12148(___$1,section__$1,header_bar_view__$1,meta12149));
});

}

return (new sailing_study_guide.core.t12148(_,section,header_bar_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),137,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),126,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/src/sailing_study_guide/core.cljs"], null)));
});
sailing_study_guide.core.header_progress_view = (function header_progress_view(section,_){
if(typeof sailing_study_guide.core.t12154 !== 'undefined'){
} else {

/**
* @constructor
*/
sailing_study_guide.core.t12154 = (function (_,section,header_progress_view,meta12155){
this._ = _;
this.section = section;
this.header_progress_view = header_progress_view;
this.meta12155 = meta12155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t12154.prototype.om$core$IRender$ = true;

sailing_study_guide.core.t12154.prototype.om$core$IRender$render$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));
var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));
return React.DOM.div({"className": "progress"},React.DOM.span({"style": {"width": [cljs.core.str(((100) * (current_question_num / total_num_questions))),cljs.core.str("%")].join('')}, "className": "meter"}));
});

sailing_study_guide.core.t12154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12156){
var self__ = this;
var _12156__$1 = this;
return self__.meta12155;
});

sailing_study_guide.core.t12154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12156,meta12155__$1){
var self__ = this;
var _12156__$1 = this;
return (new sailing_study_guide.core.t12154(self__._,self__.section,self__.header_progress_view,meta12155__$1));
});

sailing_study_guide.core.t12154.cljs$lang$type = true;

sailing_study_guide.core.t12154.cljs$lang$ctorStr = "sailing-study-guide.core/t12154";

sailing_study_guide.core.t12154.cljs$lang$ctorPrWriter = (function (this__4346__auto__,writer__4347__auto__,opt__4348__auto__){
return cljs.core._write.call(null,writer__4347__auto__,"sailing-study-guide.core/t12154");
});

sailing_study_guide.core.__GT_t12154 = (function __GT_t12154(___$1,section__$1,header_progress_view__$1,meta12155){
return (new sailing_study_guide.core.t12154(___$1,section__$1,header_progress_view__$1,meta12155));
});

}

return (new sailing_study_guide.core.t12154(_,section,header_progress_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),108,new cljs.core.Keyword(null,"end-line","end-line",1837326455),149,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),140,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/src/sailing_study_guide/core.cljs"], null)));
});
sailing_study_guide.core.header_view = (function header_view(section,_){
if(typeof sailing_study_guide.core.t12160 !== 'undefined'){
} else {

/**
* @constructor
*/
sailing_study_guide.core.t12160 = (function (_,section,header_view,meta12161){
this._ = _;
this.section = section;
this.header_view = header_view;
this.meta12161 = meta12161;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t12160.prototype.om$core$IRender$ = true;

sailing_study_guide.core.t12160.prototype.om$core$IRender$render$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return React.DOM.div({"className": "quiz-header"},om.core.build.call(null,sailing_study_guide.core.header_bar_view,self__.section),om.core.build.call(null,sailing_study_guide.core.header_progress_view,self__.section));
});

sailing_study_guide.core.t12160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12162){
var self__ = this;
var _12162__$1 = this;
return self__.meta12161;
});

sailing_study_guide.core.t12160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12162,meta12161__$1){
var self__ = this;
var _12162__$1 = this;
return (new sailing_study_guide.core.t12160(self__._,self__.section,self__.header_view,meta12161__$1));
});

sailing_study_guide.core.t12160.cljs$lang$type = true;

sailing_study_guide.core.t12160.cljs$lang$ctorStr = "sailing-study-guide.core/t12160";

sailing_study_guide.core.t12160.cljs$lang$ctorPrWriter = (function (this__4346__auto__,writer__4347__auto__,opt__4348__auto__){
return cljs.core._write.call(null,writer__4347__auto__,"sailing-study-guide.core/t12160");
});

sailing_study_guide.core.__GT_t12160 = (function __GT_t12160(___$1,section__$1,header_view__$1,meta12161){
return (new sailing_study_guide.core.t12160(___$1,section__$1,header_view__$1,meta12161));
});

}

return (new sailing_study_guide.core.t12160(_,section,header_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),158,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),152,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/src/sailing_study_guide/core.cljs"], null)));
});
sailing_study_guide.core.section_view = (function section_view(section,owner){
if(typeof sailing_study_guide.core.t12166 !== 'undefined'){
} else {

/**
* @constructor
*/
sailing_study_guide.core.t12166 = (function (owner,section,section_view,meta12167){
this.owner = owner;
this.section = section;
this.section_view = section_view;
this.meta12167 = meta12167;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t12166.prototype.om$core$IRender$ = true;

sailing_study_guide.core.t12166.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"data-offcanvas": true, "className": "off-canvas-wrap", "id": "quiz-section"},React.DOM.div({"className": "main-content inner-wrap"},om.core.build.call(null,sailing_study_guide.core.header_view,self__.section),om.core.build.call(null,sailing_study_guide.core.question_view,sailing_study_guide.core.current_question.call(null,self__.section)),React.DOM.a({"className": "exit-off-canvas"})));
});

sailing_study_guide.core.t12166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12168){
var self__ = this;
var _12168__$1 = this;
return self__.meta12167;
});

sailing_study_guide.core.t12166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12168,meta12167__$1){
var self__ = this;
var _12168__$1 = this;
return (new sailing_study_guide.core.t12166(self__.owner,self__.section,self__.section_view,meta12167__$1));
});

sailing_study_guide.core.t12166.cljs$lang$type = true;

sailing_study_guide.core.t12166.cljs$lang$ctorStr = "sailing-study-guide.core/t12166";

sailing_study_guide.core.t12166.cljs$lang$ctorPrWriter = (function (this__4346__auto__,writer__4347__auto__,opt__4348__auto__){
return cljs.core._write.call(null,writer__4347__auto__,"sailing-study-guide.core/t12166");
});

sailing_study_guide.core.__GT_t12166 = (function __GT_t12166(owner__$1,section__$1,section_view__$1,meta12167){
return (new sailing_study_guide.core.t12166(owner__$1,section__$1,section_view__$1,meta12167));
});

}

return (new sailing_study_guide.core.t12166(owner,section,section_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),60,new cljs.core.Keyword(null,"end-line","end-line",1837326455),175,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),165,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/src/sailing_study_guide/core.cljs"], null)));
});
sailing_study_guide.core.quiz_view = (function quiz_view(app_state,owner){
if(typeof sailing_study_guide.core.t12172 !== 'undefined'){
} else {

/**
* @constructor
*/
sailing_study_guide.core.t12172 = (function (owner,app_state,quiz_view,meta12173){
this.owner = owner;
this.app_state = app_state;
this.quiz_view = quiz_view;
this.meta12173 = meta12173;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t12172.prototype.om$core$IRender$ = true;

sailing_study_guide.core.t12172.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.section_view,cljs.core.nth.call(null,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"quiz","quiz",829625914).cljs$core$IFn$_invoke$arity$1(self__.app_state)),new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(self__.app_state))));
});

sailing_study_guide.core.t12172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12174){
var self__ = this;
var _12174__$1 = this;
return self__.meta12173;
});

sailing_study_guide.core.t12172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12174,meta12173__$1){
var self__ = this;
var _12174__$1 = this;
return (new sailing_study_guide.core.t12172(self__.owner,self__.app_state,self__.quiz_view,meta12173__$1));
});

sailing_study_guide.core.t12172.cljs$lang$type = true;

sailing_study_guide.core.t12172.cljs$lang$ctorStr = "sailing-study-guide.core/t12172";

sailing_study_guide.core.t12172.cljs$lang$ctorPrWriter = (function (this__4346__auto__,writer__4347__auto__,opt__4348__auto__){
return cljs.core._write.call(null,writer__4347__auto__,"sailing-study-guide.core/t12172");
});

sailing_study_guide.core.__GT_t12172 = (function __GT_t12172(owner__$1,app_state__$1,quiz_view__$1,meta12173){
return (new sailing_study_guide.core.t12172(owner__$1,app_state__$1,quiz_view__$1,meta12173));
});

}

return (new sailing_study_guide.core.t12172(owner,app_state,quiz_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),72,new cljs.core.Keyword(null,"end-line","end-line",1837326455),188,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),179,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/src/sailing_study_guide/core.cljs"], null)));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map