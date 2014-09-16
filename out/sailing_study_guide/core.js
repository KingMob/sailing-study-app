// Compiled by ClojureScript 0.0-2322
goog.provide('sailing_study_guide.core');
goog.require('cljs.core');
goog.require('sailing_study_guide.quiz');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('sailing_study_guide.quiz');
goog.require('clairvoyant.core');
goog.require('clairvoyant.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
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
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t10350 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10350 = (function (owner,answer,answer_view,meta10351){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta10351 = meta10351;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10350.cljs$lang$type = true;
sailing_study_guide.core.t10350.cljs$lang$ctorStr = "sailing-study-guide.core/t10350";
sailing_study_guide.core.t10350.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10350");
});
sailing_study_guide.core.t10350.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t10350.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10353){var self__ = this;
var map__10354 = p__10353;var map__10354__$1 = ((cljs.core.seq_QMARK_.call(null,map__10354))?cljs.core.apply.call(null,cljs.core.hash_map,map__10354):map__10354);var status = cljs.core.get.call(null,map__10354__$1,new cljs.core.Keyword(null,"status","status",-1997798413));var answer_chan = cljs.core.get.call(null,map__10354__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));var ___$1 = this;return React.DOM.div({"className": "answer-container"},React.DOM.button({"className": ("answer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.answer_css_class.call(null,status,new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(self__.answer)))), "onClick": ((function (___$1,map__10354,map__10354__$1,status,answer_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,answer_chan,self__.answer);
});})(___$1,map__10354,map__10354__$1,status,answer_chan))
},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.answer)));
});
sailing_study_guide.core.t10350.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t10350.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null);
});
sailing_study_guide.core.t10350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10352){var self__ = this;
var _10352__$1 = this;return self__.meta10351;
});
sailing_study_guide.core.t10350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10352,meta10351__$1){var self__ = this;
var _10352__$1 = this;return (new sailing_study_guide.core.t10350(self__.owner,self__.answer,self__.answer_view,meta10351__$1));
});
sailing_study_guide.core.__GT_t10350 = (function __GT_t10350(owner__$1,answer__$1,answer_view__$1,meta10351){return (new sailing_study_guide.core.t10350(owner__$1,answer__$1,answer_view__$1,meta10351));
});
}
return (new sailing_study_guide.core.t10350(owner,answer,answer_view,null));
});
sailing_study_guide.core.answer_section_view = (function answer_section_view(answers,owner){if(typeof sailing_study_guide.core.t10360 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10360 = (function (owner,answers,answer_section_view,meta10361){
this.owner = owner;
this.answers = answers;
this.answer_section_view = answer_section_view;
this.meta10361 = meta10361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10360.cljs$lang$type = true;
sailing_study_guide.core.t10360.cljs$lang$ctorStr = "sailing-study-guide.core/t10360";
sailing_study_guide.core.t10360.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10360");
});
sailing_study_guide.core.t10360.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t10360.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10363){var self__ = this;
var map__10364 = p__10363;var map__10364__$1 = ((cljs.core.seq_QMARK_.call(null,map__10364))?cljs.core.apply.call(null,cljs.core.hash_map,map__10364):map__10364);var answer_chan = cljs.core.get.call(null,map__10364__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "answer-section"},om.core.build_all.call(null,sailing_study_guide.core.answer_view,self__.answers,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176),answer_chan], null)], null)));
});
sailing_study_guide.core.t10360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10362){var self__ = this;
var _10362__$1 = this;return self__.meta10361;
});
sailing_study_guide.core.t10360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10362,meta10361__$1){var self__ = this;
var _10362__$1 = this;return (new sailing_study_guide.core.t10360(self__.owner,self__.answers,self__.answer_section_view,meta10361__$1));
});
sailing_study_guide.core.__GT_t10360 = (function __GT_t10360(owner__$1,answers__$1,answer_section_view__$1,meta10361){return (new sailing_study_guide.core.t10360(owner__$1,answers__$1,answer_section_view__$1,meta10361));
});
}
return (new sailing_study_guide.core.t10360(owner,answers,answer_section_view,null));
});
sailing_study_guide.core.question_view = (function question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t10399 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10399 = (function (owner,quiz_question,question_view,meta10400){
this.owner = owner;
this.quiz_question = quiz_question;
this.question_view = question_view;
this.meta10400 = meta10400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10399.cljs$lang$type = true;
sailing_study_guide.core.t10399.cljs$lang$ctorStr = "sailing-study-guide.core/t10399";
sailing_study_guide.core.t10399.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10399");
});
sailing_study_guide.core.t10399.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t10399.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10402){var self__ = this;
var map__10403 = p__10402;var map__10403__$1 = ((cljs.core.seq_QMARK_.call(null,map__10403))?cljs.core.apply.call(null,cljs.core.hash_map,map__10403):map__10403);var answer_chan = cljs.core.get.call(null,map__10403__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));var ___$1 = this;return React.DOM.div({"className": "question-container"},React.DOM.div({"className": "question-text-container"},React.DOM.h3({"className": "question-text"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(self__.quiz_question))),React.DOM.div({"className": "media-container"}),om.core.build.call(null,sailing_study_guide.core.answer_section_view,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176),answer_chan], null)], null)));
});
sailing_study_guide.core.t10399.prototype.om$core$IWillMount$ = true;
sailing_study_guide.core.t10399.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var answer_chan = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"tx-chan","tx-chan",1461202998));var c__6747__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6747__auto__,answer_chan,___$1){
return (function (){var f__6748__auto__ = (function (){var switch__6732__auto__ = ((function (c__6747__auto__,answer_chan,___$1){
return (function (state_10420){var state_val_10421 = (state_10420[(1)]);if((state_val_10421 === (4)))
{var inst_10406 = (state_10420[(2)]);var inst_10407 = cljs.core.deref.call(null,inst_10406);var inst_10408 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inst_10407);var inst_10409 = ("Chose "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10408));var inst_10410 = console.log(inst_10409);var inst_10411 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10412 = [new cljs.core.Keyword(null,"text","text",-1790561697)];var inst_10413 = (new cljs.core.PersistentVector(null,1,(5),inst_10411,inst_10412,null));var inst_10414 = (function (){var answer_chosen = inst_10406;return ((function (answer_chosen,inst_10406,inst_10407,inst_10408,inst_10409,inst_10410,inst_10411,inst_10412,inst_10413,state_val_10421,c__6747__auto__,answer_chan,___$1){
return (function (p1__10365_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10365_SHARP_)+" *");
});
;})(answer_chosen,inst_10406,inst_10407,inst_10408,inst_10409,inst_10410,inst_10411,inst_10412,inst_10413,state_val_10421,c__6747__auto__,answer_chan,___$1))
})();var inst_10415 = om.core.transact_BANG_.call(null,inst_10406,inst_10413,inst_10414);var state_10420__$1 = (function (){var statearr_10422 = state_10420;(statearr_10422[(7)] = inst_10415);
(statearr_10422[(8)] = inst_10410);
return statearr_10422;
})();var statearr_10423_10432 = state_10420__$1;(statearr_10423_10432[(2)] = null);
(statearr_10423_10432[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10421 === (3)))
{var inst_10418 = (state_10420[(2)]);var state_10420__$1 = state_10420;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10420__$1,inst_10418);
} else
{if((state_val_10421 === (2)))
{var state_10420__$1 = state_10420;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10420__$1,(4),answer_chan);
} else
{if((state_val_10421 === (1)))
{var state_10420__$1 = state_10420;var statearr_10424_10433 = state_10420__$1;(statearr_10424_10433[(2)] = null);
(statearr_10424_10433[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6747__auto__,answer_chan,___$1))
;return ((function (switch__6732__auto__,c__6747__auto__,answer_chan,___$1){
return (function() {
var state_machine__6733__auto__ = null;
var state_machine__6733__auto____0 = (function (){var statearr_10428 = [null,null,null,null,null,null,null,null,null];(statearr_10428[(0)] = state_machine__6733__auto__);
(statearr_10428[(1)] = (1));
return statearr_10428;
});
var state_machine__6733__auto____1 = (function (state_10420){while(true){
var ret_value__6734__auto__ = (function (){try{while(true){
var result__6735__auto__ = switch__6732__auto__.call(null,state_10420);if(cljs.core.keyword_identical_QMARK_.call(null,result__6735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6735__auto__;
}
break;
}
}catch (e10429){if((e10429 instanceof Object))
{var ex__6736__auto__ = e10429;var statearr_10430_10434 = state_10420;(statearr_10430_10434[(5)] = ex__6736__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10420);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10429;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10435 = state_10420;
state_10420 = G__10435;
continue;
}
} else
{return ret_value__6734__auto__;
}
break;
}
});
state_machine__6733__auto__ = function(state_10420){
switch(arguments.length){
case 0:
return state_machine__6733__auto____0.call(this);
case 1:
return state_machine__6733__auto____1.call(this,state_10420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6733__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6733__auto____0;
state_machine__6733__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6733__auto____1;
return state_machine__6733__auto__;
})()
;})(switch__6732__auto__,c__6747__auto__,answer_chan,___$1))
})();var state__6749__auto__ = (function (){var statearr_10431 = f__6748__auto__.call(null);(statearr_10431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6747__auto__);
return statearr_10431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6749__auto__);
});})(c__6747__auto__,answer_chan,___$1))
);
return c__6747__auto__;
});
sailing_study_guide.core.t10399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10401){var self__ = this;
var _10401__$1 = this;return self__.meta10400;
});
sailing_study_guide.core.t10399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10401,meta10400__$1){var self__ = this;
var _10401__$1 = this;return (new sailing_study_guide.core.t10399(self__.owner,self__.quiz_question,self__.question_view,meta10400__$1));
});
sailing_study_guide.core.__GT_t10399 = (function __GT_t10399(owner__$1,quiz_question__$1,question_view__$1,meta10400){return (new sailing_study_guide.core.t10399(owner__$1,quiz_question__$1,question_view__$1,meta10400));
});
}
return (new sailing_study_guide.core.t10399(owner,quiz_question,question_view,null));
});
sailing_study_guide.core.header_bar_view = (function header_bar_view(section,_){if(typeof sailing_study_guide.core.t10439 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10439 = (function (_,section,header_bar_view,meta10440){
this._ = _;
this.section = section;
this.header_bar_view = header_bar_view;
this.meta10440 = meta10440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10439.cljs$lang$type = true;
sailing_study_guide.core.t10439.cljs$lang$ctorStr = "sailing-study-guide.core/t10439";
sailing_study_guide.core.t10439.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10439");
});
sailing_study_guide.core.t10439.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10439.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.nav({"className": "tab-bar"},React.DOM.section({"className": "left-small text-center"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_question_num)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_num_questions))),React.DOM.section({"className": "middle tab-bar-section"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.section)),React.DOM.section({"className": "right-small"},React.DOM.a({"href": "#", "className": "right-off-canvas-toggle menu-icon"},React.DOM.span(null))));
});
sailing_study_guide.core.t10439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10441){var self__ = this;
var _10441__$1 = this;return self__.meta10440;
});
sailing_study_guide.core.t10439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10441,meta10440__$1){var self__ = this;
var _10441__$1 = this;return (new sailing_study_guide.core.t10439(self__._,self__.section,self__.header_bar_view,meta10440__$1));
});
sailing_study_guide.core.__GT_t10439 = (function __GT_t10439(___$1,section__$1,header_bar_view__$1,meta10440){return (new sailing_study_guide.core.t10439(___$1,section__$1,header_bar_view__$1,meta10440));
});
}
return (new sailing_study_guide.core.t10439(_,section,header_bar_view,null));
});
sailing_study_guide.core.header_progress_view = (function header_progress_view(section,_){if(typeof sailing_study_guide.core.t10445 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10445 = (function (_,section,header_progress_view,meta10446){
this._ = _;
this.section = section;
this.header_progress_view = header_progress_view;
this.meta10446 = meta10446;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10445.cljs$lang$type = true;
sailing_study_guide.core.t10445.cljs$lang$ctorStr = "sailing-study-guide.core/t10445";
sailing_study_guide.core.t10445.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10445");
});
sailing_study_guide.core.t10445.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10445.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.div({"className": "progress"},React.DOM.span({"style": {"width": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (current_question_num / total_num_questions)))+"%")}, "className": "meter"}));
});
sailing_study_guide.core.t10445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10447){var self__ = this;
var _10447__$1 = this;return self__.meta10446;
});
sailing_study_guide.core.t10445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10447,meta10446__$1){var self__ = this;
var _10447__$1 = this;return (new sailing_study_guide.core.t10445(self__._,self__.section,self__.header_progress_view,meta10446__$1));
});
sailing_study_guide.core.__GT_t10445 = (function __GT_t10445(___$1,section__$1,header_progress_view__$1,meta10446){return (new sailing_study_guide.core.t10445(___$1,section__$1,header_progress_view__$1,meta10446));
});
}
return (new sailing_study_guide.core.t10445(_,section,header_progress_view,null));
});
sailing_study_guide.core.header_view = (function header_view(section,_){if(typeof sailing_study_guide.core.t10451 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10451 = (function (_,section,header_view,meta10452){
this._ = _;
this.section = section;
this.header_view = header_view;
this.meta10452 = meta10452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10451.cljs$lang$type = true;
sailing_study_guide.core.t10451.cljs$lang$ctorStr = "sailing-study-guide.core/t10451";
sailing_study_guide.core.t10451.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10451");
});
sailing_study_guide.core.t10451.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10451.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.div({"className": "quiz-header"},om.core.build.call(null,sailing_study_guide.core.header_bar_view,self__.section),om.core.build.call(null,sailing_study_guide.core.header_progress_view,self__.section));
});
sailing_study_guide.core.t10451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10453){var self__ = this;
var _10453__$1 = this;return self__.meta10452;
});
sailing_study_guide.core.t10451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10453,meta10452__$1){var self__ = this;
var _10453__$1 = this;return (new sailing_study_guide.core.t10451(self__._,self__.section,self__.header_view,meta10452__$1));
});
sailing_study_guide.core.__GT_t10451 = (function __GT_t10451(___$1,section__$1,header_view__$1,meta10452){return (new sailing_study_guide.core.t10451(___$1,section__$1,header_view__$1,meta10452));
});
}
return (new sailing_study_guide.core.t10451(_,section,header_view,null));
});
sailing_study_guide.core.section_view = (function section_view(section,owner){if(typeof sailing_study_guide.core.t10457 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10457 = (function (owner,section,section_view,meta10458){
this.owner = owner;
this.section = section;
this.section_view = section_view;
this.meta10458 = meta10458;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10457.cljs$lang$type = true;
sailing_study_guide.core.t10457.cljs$lang$ctorStr = "sailing-study-guide.core/t10457";
sailing_study_guide.core.t10457.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10457");
});
sailing_study_guide.core.t10457.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10457.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"data-offcanvas": true, "className": "off-canvas-wrap", "id": "quiz-section"},React.DOM.div({"className": "main-content inner-wrap"},om.core.build.call(null,sailing_study_guide.core.header_view,self__.section),om.core.build.call(null,sailing_study_guide.core.question_view,sailing_study_guide.core.current_question.call(null,self__.section)),React.DOM.a({"className": "exit-off-canvas"})));
});
sailing_study_guide.core.t10457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10459){var self__ = this;
var _10459__$1 = this;return self__.meta10458;
});
sailing_study_guide.core.t10457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10459,meta10458__$1){var self__ = this;
var _10459__$1 = this;return (new sailing_study_guide.core.t10457(self__.owner,self__.section,self__.section_view,meta10458__$1));
});
sailing_study_guide.core.__GT_t10457 = (function __GT_t10457(owner__$1,section__$1,section_view__$1,meta10458){return (new sailing_study_guide.core.t10457(owner__$1,section__$1,section_view__$1,meta10458));
});
}
return (new sailing_study_guide.core.t10457(owner,section,section_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(app_state,owner){if(typeof sailing_study_guide.core.t10463 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10463 = (function (owner,app_state,quiz_view,meta10464){
this.owner = owner;
this.app_state = app_state;
this.quiz_view = quiz_view;
this.meta10464 = meta10464;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10463.cljs$lang$type = true;
sailing_study_guide.core.t10463.cljs$lang$ctorStr = "sailing-study-guide.core/t10463";
sailing_study_guide.core.t10463.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10463");
});
sailing_study_guide.core.t10463.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10463.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.section_view,cljs.core.nth.call(null,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"quiz","quiz",829625914).cljs$core$IFn$_invoke$arity$1(self__.app_state)),new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(self__.app_state))));
});
sailing_study_guide.core.t10463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10465){var self__ = this;
var _10465__$1 = this;return self__.meta10464;
});
sailing_study_guide.core.t10463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10465,meta10464__$1){var self__ = this;
var _10465__$1 = this;return (new sailing_study_guide.core.t10463(self__.owner,self__.app_state,self__.quiz_view,meta10464__$1));
});
sailing_study_guide.core.__GT_t10463 = (function __GT_t10463(owner__$1,app_state__$1,quiz_view__$1,meta10464){return (new sailing_study_guide.core.t10463(owner__$1,app_state__$1,quiz_view__$1,meta10464));
});
}
return (new sailing_study_guide.core.t10463(owner,app_state,quiz_view,null));
});
var tx_chan_10466 = cljs.core.async.chan.call(null);var tx_pub_chan_10467 = cljs.core.async.pub.call(null,tx_chan_10466,new cljs.core.Keyword(null,"tag","tag",-1290361223));om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app"),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-chan","tx-chan",1461202998),tx_chan_10466], null)], null));

//# sourceMappingURL=core.js.map