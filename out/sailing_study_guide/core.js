// Compiled by ClojureScript 0.0-2356
goog.provide('sailing_study_guide.core');
goog.require('cljs.core');
goog.require('sailing_study_guide.quiz');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('sailing_study_guide.quiz');
goog.require('cljs.core.async');
goog.require('clairvoyant.core');
goog.require('sailing_study_guide.dispatch');
goog.require('clairvoyant.core');
goog.require('sailing_study_guide.dispatch');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_print_meta_STAR_ = true;
sailing_study_guide.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-section","current-section",1519906460),(0),new cljs.core.Keyword(null,"current-question","current-question",-749753188),(0),new cljs.core.Keyword(null,"quiz","quiz",829625914),sailing_study_guide.quiz.default_quiz], null));
sailing_study_guide.core.cljs_type__GT_str = (function cljs_type__GT_str(x){var temp__4124__auto__ = x.constructor;if(cljs.core.truth_(temp__4124__auto__))
{var ctor = temp__4124__auto__;return cljs.core.type__GT_str.call(null,ctor);
} else
{return cljs.core.type__GT_str.call(null,x);
}
});
sailing_study_guide.core.current_section = (function current_section(app_state){var current_section__$1 = new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(app_state);return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quiz","quiz",829625914),new cljs.core.Keyword(null,"sections","sections",-886710106),current_section__$1], null));
});
sailing_study_guide.core.current_question = (function current_question(app_state){var current_question__$1 = new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(app_state);return cljs.core.get_in.call(null,sailing_study_guide.core.current_section.call(null,app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"questions","questions",1226225380),current_question__$1], null));
});
sailing_study_guide.core.question_answered = (function question_answered(){console.log("Chose correctly");
var num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.current_section.call(null,cljs.core.deref.call(null,sailing_study_guide.core.app_state))));return cljs.core.swap_BANG_.call(null,sailing_study_guide.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-question","current-question",-749753188)], null),cljs.core.inc);
});
sailing_study_guide.core.answer_css_class = (function answer_css_class(status,correct){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unchosen","unchosen",-205763213),status))
{return "answer-default";
} else
{if(cljs.core.truth_(correct))
{return "answer-correct success";
} else
{return "answer-incorrect alert";

}
}
});
sailing_study_guide.core.answer_css_class.call(null,new cljs.core.Keyword(null,"unchosen","unchosen",-205763213),false);
sailing_study_guide.core.answer_css_class.call(null,new cljs.core.Keyword(null,"chosen","chosen",-1422409985),false);
sailing_study_guide.core.answer_css_class.call(null,new cljs.core.Keyword(null,"chosen","chosen",-1422409985),true);
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t10428 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10428 = (function (owner,answer,answer_view,meta10429){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta10429 = meta10429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10428.cljs$lang$type = true;
sailing_study_guide.core.t10428.cljs$lang$ctorStr = "sailing-study-guide.core/t10428";
sailing_study_guide.core.t10428.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"sailing-study-guide.core/t10428");
});
sailing_study_guide.core.t10428.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t10428.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10431){var self__ = this;
var map__10432 = p__10431;var map__10432__$1 = ((cljs.core.seq_QMARK_.call(null,map__10432))?cljs.core.apply.call(null,cljs.core.hash_map,map__10432):map__10432);var status = cljs.core.get.call(null,map__10432__$1,new cljs.core.Keyword(null,"status","status",-1997798413));var answer_chan = cljs.core.get.call(null,map__10432__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));var ___$1 = this;return React.DOM.div({"className": "answer-container"},React.DOM.button({"className": ("answer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.answer_css_class.call(null,status,new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(self__.answer)))), "onClick": ((function (___$1,map__10432,map__10432__$1,status,answer_chan){
return (function (e){return sailing_study_guide.dispatch.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"answer-chosen","answer-chosen",-703375083),self__.answer);
});})(___$1,map__10432,map__10432__$1,status,answer_chan))
},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.answer)));
});
sailing_study_guide.core.t10428.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t10428.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null);
});
sailing_study_guide.core.t10428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10430){var self__ = this;
var _10430__$1 = this;return self__.meta10429;
});
sailing_study_guide.core.t10428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10430,meta10429__$1){var self__ = this;
var _10430__$1 = this;return (new sailing_study_guide.core.t10428(self__.owner,self__.answer,self__.answer_view,meta10429__$1));
});
sailing_study_guide.core.__GT_t10428 = (function __GT_t10428(owner__$1,answer__$1,answer_view__$1,meta10429){return (new sailing_study_guide.core.t10428(owner__$1,answer__$1,answer_view__$1,meta10429));
});
}
return (new sailing_study_guide.core.t10428(owner,answer,answer_view,null));
});
sailing_study_guide.core.answer_section_view = (function answer_section_view(answers,owner){if(typeof sailing_study_guide.core.t10438 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10438 = (function (owner,answers,answer_section_view,meta10439){
this.owner = owner;
this.answers = answers;
this.answer_section_view = answer_section_view;
this.meta10439 = meta10439;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10438.cljs$lang$type = true;
sailing_study_guide.core.t10438.cljs$lang$ctorStr = "sailing-study-guide.core/t10438";
sailing_study_guide.core.t10438.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"sailing-study-guide.core/t10438");
});
sailing_study_guide.core.t10438.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t10438.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10441){var self__ = this;
var map__10442 = p__10441;var map__10442__$1 = ((cljs.core.seq_QMARK_.call(null,map__10442))?cljs.core.apply.call(null,cljs.core.hash_map,map__10442):map__10442);var answer_chan = cljs.core.get.call(null,map__10442__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "answer-section"},om.core.build_all.call(null,sailing_study_guide.core.answer_view,self__.answers,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176),answer_chan], null)], null)));
});
sailing_study_guide.core.t10438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10440){var self__ = this;
var _10440__$1 = this;return self__.meta10439;
});
sailing_study_guide.core.t10438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10440,meta10439__$1){var self__ = this;
var _10440__$1 = this;return (new sailing_study_guide.core.t10438(self__.owner,self__.answers,self__.answer_section_view,meta10439__$1));
});
sailing_study_guide.core.__GT_t10438 = (function __GT_t10438(owner__$1,answers__$1,answer_section_view__$1,meta10439){return (new sailing_study_guide.core.t10438(owner__$1,answers__$1,answer_section_view__$1,meta10439));
});
}
return (new sailing_study_guide.core.t10438(owner,answers,answer_section_view,null));
});
sailing_study_guide.core.question_view = (function question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t10448 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10448 = (function (owner,quiz_question,question_view,meta10449){
this.owner = owner;
this.quiz_question = quiz_question;
this.question_view = question_view;
this.meta10449 = meta10449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10448.cljs$lang$type = true;
sailing_study_guide.core.t10448.cljs$lang$ctorStr = "sailing-study-guide.core/t10448";
sailing_study_guide.core.t10448.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"sailing-study-guide.core/t10448");
});
sailing_study_guide.core.t10448.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t10448.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10451){var self__ = this;
var map__10452 = p__10451;var map__10452__$1 = ((cljs.core.seq_QMARK_.call(null,map__10452))?cljs.core.apply.call(null,cljs.core.hash_map,map__10452):map__10452);var answer_chan = cljs.core.get.call(null,map__10452__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));var ___$1 = this;return React.DOM.div({"className": "question-container"},React.DOM.div({"className": "question-text-container"},React.DOM.h3({"className": "question-text"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(self__.quiz_question))),React.DOM.div({"className": "media-container"}),om.core.build.call(null,sailing_study_guide.core.answer_section_view,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176),answer_chan], null)], null)));
});
sailing_study_guide.core.t10448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10450){var self__ = this;
var _10450__$1 = this;return self__.meta10449;
});
sailing_study_guide.core.t10448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10450,meta10449__$1){var self__ = this;
var _10450__$1 = this;return (new sailing_study_guide.core.t10448(self__.owner,self__.quiz_question,self__.question_view,meta10449__$1));
});
sailing_study_guide.core.__GT_t10448 = (function __GT_t10448(owner__$1,quiz_question__$1,question_view__$1,meta10449){return (new sailing_study_guide.core.t10448(owner__$1,quiz_question__$1,question_view__$1,meta10449));
});
}
return (new sailing_study_guide.core.t10448(owner,quiz_question,question_view,null));
});
sailing_study_guide.core.header_bar_view = (function header_bar_view(section,_){if(typeof sailing_study_guide.core.t10456 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10456 = (function (_,section,header_bar_view,meta10457){
this._ = _;
this.section = section;
this.header_bar_view = header_bar_view;
this.meta10457 = meta10457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10456.cljs$lang$type = true;
sailing_study_guide.core.t10456.cljs$lang$ctorStr = "sailing-study-guide.core/t10456";
sailing_study_guide.core.t10456.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"sailing-study-guide.core/t10456");
});
sailing_study_guide.core.t10456.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10456.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.nav({"className": "tab-bar"},React.DOM.section({"className": "left-small text-center"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_question_num)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_num_questions))),React.DOM.section({"className": "middle tab-bar-section"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.section)),React.DOM.section({"className": "right-small"},React.DOM.a({"href": "#", "className": "right-off-canvas-toggle menu-icon"},React.DOM.span(null))));
});
sailing_study_guide.core.t10456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10458){var self__ = this;
var _10458__$1 = this;return self__.meta10457;
});
sailing_study_guide.core.t10456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10458,meta10457__$1){var self__ = this;
var _10458__$1 = this;return (new sailing_study_guide.core.t10456(self__._,self__.section,self__.header_bar_view,meta10457__$1));
});
sailing_study_guide.core.__GT_t10456 = (function __GT_t10456(___$1,section__$1,header_bar_view__$1,meta10457){return (new sailing_study_guide.core.t10456(___$1,section__$1,header_bar_view__$1,meta10457));
});
}
return (new sailing_study_guide.core.t10456(_,section,header_bar_view,null));
});
sailing_study_guide.core.header_progress_view = (function header_progress_view(section,_){if(typeof sailing_study_guide.core.t10462 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10462 = (function (_,section,header_progress_view,meta10463){
this._ = _;
this.section = section;
this.header_progress_view = header_progress_view;
this.meta10463 = meta10463;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10462.cljs$lang$type = true;
sailing_study_guide.core.t10462.cljs$lang$ctorStr = "sailing-study-guide.core/t10462";
sailing_study_guide.core.t10462.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"sailing-study-guide.core/t10462");
});
sailing_study_guide.core.t10462.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10462.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.div({"className": "progress"},React.DOM.span({"style": {"width": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (current_question_num / total_num_questions)))+"%")}, "className": "meter"}));
});
sailing_study_guide.core.t10462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10464){var self__ = this;
var _10464__$1 = this;return self__.meta10463;
});
sailing_study_guide.core.t10462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10464,meta10463__$1){var self__ = this;
var _10464__$1 = this;return (new sailing_study_guide.core.t10462(self__._,self__.section,self__.header_progress_view,meta10463__$1));
});
sailing_study_guide.core.__GT_t10462 = (function __GT_t10462(___$1,section__$1,header_progress_view__$1,meta10463){return (new sailing_study_guide.core.t10462(___$1,section__$1,header_progress_view__$1,meta10463));
});
}
return (new sailing_study_guide.core.t10462(_,section,header_progress_view,null));
});
sailing_study_guide.core.header_view = (function header_view(section,_){if(typeof sailing_study_guide.core.t10468 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10468 = (function (_,section,header_view,meta10469){
this._ = _;
this.section = section;
this.header_view = header_view;
this.meta10469 = meta10469;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10468.cljs$lang$type = true;
sailing_study_guide.core.t10468.cljs$lang$ctorStr = "sailing-study-guide.core/t10468";
sailing_study_guide.core.t10468.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"sailing-study-guide.core/t10468");
});
sailing_study_guide.core.t10468.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10468.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.div({"className": "quiz-header"},om.core.build.call(null,sailing_study_guide.core.header_bar_view,self__.section),om.core.build.call(null,sailing_study_guide.core.header_progress_view,self__.section));
});
sailing_study_guide.core.t10468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10470){var self__ = this;
var _10470__$1 = this;return self__.meta10469;
});
sailing_study_guide.core.t10468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10470,meta10469__$1){var self__ = this;
var _10470__$1 = this;return (new sailing_study_guide.core.t10468(self__._,self__.section,self__.header_view,meta10469__$1));
});
sailing_study_guide.core.__GT_t10468 = (function __GT_t10468(___$1,section__$1,header_view__$1,meta10469){return (new sailing_study_guide.core.t10468(___$1,section__$1,header_view__$1,meta10469));
});
}
return (new sailing_study_guide.core.t10468(_,section,header_view,null));
});
sailing_study_guide.core.section_view = (function section_view(section,owner){if(typeof sailing_study_guide.core.t10474 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10474 = (function (owner,section,section_view,meta10475){
this.owner = owner;
this.section = section;
this.section_view = section_view;
this.meta10475 = meta10475;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10474.cljs$lang$type = true;
sailing_study_guide.core.t10474.cljs$lang$ctorStr = "sailing-study-guide.core/t10474";
sailing_study_guide.core.t10474.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"sailing-study-guide.core/t10474");
});
sailing_study_guide.core.t10474.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10474.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"data-offcanvas": true, "className": "off-canvas-wrap", "id": "quiz-section"},React.DOM.div({"className": "main-content inner-wrap"},om.core.build.call(null,sailing_study_guide.core.header_view,self__.section),om.core.build.call(null,sailing_study_guide.core.question_view,sailing_study_guide.core.current_question.call(null,self__.section)),React.DOM.a({"className": "exit-off-canvas"})));
});
sailing_study_guide.core.t10474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10476){var self__ = this;
var _10476__$1 = this;return self__.meta10475;
});
sailing_study_guide.core.t10474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10476,meta10475__$1){var self__ = this;
var _10476__$1 = this;return (new sailing_study_guide.core.t10474(self__.owner,self__.section,self__.section_view,meta10475__$1));
});
sailing_study_guide.core.__GT_t10474 = (function __GT_t10474(owner__$1,section__$1,section_view__$1,meta10475){return (new sailing_study_guide.core.t10474(owner__$1,section__$1,section_view__$1,meta10475));
});
}
return (new sailing_study_guide.core.t10474(owner,section,section_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(app_state,owner){if(typeof sailing_study_guide.core.t10480 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10480 = (function (owner,app_state,quiz_view,meta10481){
this.owner = owner;
this.app_state = app_state;
this.quiz_view = quiz_view;
this.meta10481 = meta10481;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10480.cljs$lang$type = true;
sailing_study_guide.core.t10480.cljs$lang$ctorStr = "sailing-study-guide.core/t10480";
sailing_study_guide.core.t10480.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"sailing-study-guide.core/t10480");
});
sailing_study_guide.core.t10480.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10480.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.section_view,cljs.core.nth.call(null,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"quiz","quiz",829625914).cljs$core$IFn$_invoke$arity$1(self__.app_state)),new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(self__.app_state))));
});
sailing_study_guide.core.t10480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10482){var self__ = this;
var _10482__$1 = this;return self__.meta10481;
});
sailing_study_guide.core.t10480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10482,meta10481__$1){var self__ = this;
var _10482__$1 = this;return (new sailing_study_guide.core.t10480(self__.owner,self__.app_state,self__.quiz_view,meta10481__$1));
});
sailing_study_guide.core.__GT_t10480 = (function __GT_t10480(owner__$1,app_state__$1,quiz_view__$1,meta10481){return (new sailing_study_guide.core.t10480(owner__$1,app_state__$1,quiz_view__$1,meta10481));
});
}
return (new sailing_study_guide.core.t10480(owner,app_state,quiz_view,null));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map