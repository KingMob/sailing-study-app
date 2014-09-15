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
sailing_study_guide.core.answer_css_class = (function answer_css_class(answer){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unchosen","unchosen",-205763213),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(answer)))
{return "answer-default";
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(answer)))
{return "answer-correct success";
} else
{return "answer-incorrect alert";

}
}
});
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t10358 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10358 = (function (owner,answer,answer_view,meta10359){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta10359 = meta10359;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10358.cljs$lang$type = true;
sailing_study_guide.core.t10358.cljs$lang$ctorStr = "sailing-study-guide.core/t10358";
sailing_study_guide.core.t10358.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10358");
});
sailing_study_guide.core.t10358.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t10358.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10361){var self__ = this;
var map__10362 = p__10361;var map__10362__$1 = ((cljs.core.seq_QMARK_.call(null,map__10362))?cljs.core.apply.call(null,cljs.core.hash_map,map__10362):map__10362);var answer_chan = cljs.core.get.call(null,map__10362__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));var ___$1 = this;return React.DOM.div({"className": "answer-container"},React.DOM.button({"className": ("answer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.answer_css_class.call(null,self__.answer))), "onClick": ((function (___$1,map__10362,map__10362__$1,answer_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,answer_chan,self__.answer);
});})(___$1,map__10362,map__10362__$1,answer_chan))
},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.answer)));
});
sailing_study_guide.core.t10358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10360){var self__ = this;
var _10360__$1 = this;return self__.meta10359;
});
sailing_study_guide.core.t10358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10360,meta10359__$1){var self__ = this;
var _10360__$1 = this;return (new sailing_study_guide.core.t10358(self__.owner,self__.answer,self__.answer_view,meta10359__$1));
});
sailing_study_guide.core.__GT_t10358 = (function __GT_t10358(owner__$1,answer__$1,answer_view__$1,meta10359){return (new sailing_study_guide.core.t10358(owner__$1,answer__$1,answer_view__$1,meta10359));
});
}
return (new sailing_study_guide.core.t10358(owner,answer,answer_view,null));
});
sailing_study_guide.core.answer_section_view = (function answer_section_view(answers,owner){if(typeof sailing_study_guide.core.t10368 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10368 = (function (owner,answers,answer_section_view,meta10369){
this.owner = owner;
this.answers = answers;
this.answer_section_view = answer_section_view;
this.meta10369 = meta10369;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10368.cljs$lang$type = true;
sailing_study_guide.core.t10368.cljs$lang$ctorStr = "sailing-study-guide.core/t10368";
sailing_study_guide.core.t10368.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10368");
});
sailing_study_guide.core.t10368.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t10368.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10371){var self__ = this;
var map__10372 = p__10371;var map__10372__$1 = ((cljs.core.seq_QMARK_.call(null,map__10372))?cljs.core.apply.call(null,cljs.core.hash_map,map__10372):map__10372);var answer_chan = cljs.core.get.call(null,map__10372__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "answer-section"},om.core.build_all.call(null,sailing_study_guide.core.answer_view,self__.answers,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176),answer_chan], null)], null)));
});
sailing_study_guide.core.t10368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10370){var self__ = this;
var _10370__$1 = this;return self__.meta10369;
});
sailing_study_guide.core.t10368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10370,meta10369__$1){var self__ = this;
var _10370__$1 = this;return (new sailing_study_guide.core.t10368(self__.owner,self__.answers,self__.answer_section_view,meta10369__$1));
});
sailing_study_guide.core.__GT_t10368 = (function __GT_t10368(owner__$1,answers__$1,answer_section_view__$1,meta10369){return (new sailing_study_guide.core.t10368(owner__$1,answers__$1,answer_section_view__$1,meta10369));
});
}
return (new sailing_study_guide.core.t10368(owner,answers,answer_section_view,null));
});
sailing_study_guide.core.question_view = (function question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t10407 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10407 = (function (owner,quiz_question,question_view,meta10408){
this.owner = owner;
this.quiz_question = quiz_question;
this.question_view = question_view;
this.meta10408 = meta10408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10407.cljs$lang$type = true;
sailing_study_guide.core.t10407.cljs$lang$ctorStr = "sailing-study-guide.core/t10407";
sailing_study_guide.core.t10407.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10407");
});
sailing_study_guide.core.t10407.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t10407.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10410){var self__ = this;
var map__10411 = p__10410;var map__10411__$1 = ((cljs.core.seq_QMARK_.call(null,map__10411))?cljs.core.apply.call(null,cljs.core.hash_map,map__10411):map__10411);var answer_chan = cljs.core.get.call(null,map__10411__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));var ___$1 = this;return React.DOM.div({"className": "question-container"},React.DOM.div({"className": "question-text-container"},React.DOM.h3({"className": "question-text"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(self__.quiz_question))),React.DOM.div({"className": "media-container"}),om.core.build.call(null,sailing_study_guide.core.answer_section_view,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176),answer_chan], null)], null)));
});
sailing_study_guide.core.t10407.prototype.om$core$IWillMount$ = true;
sailing_study_guide.core.t10407.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var answer_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));var c__6742__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6742__auto__,answer_chan,___$1){
return (function (){var f__6743__auto__ = (function (){var switch__6727__auto__ = ((function (c__6742__auto__,answer_chan,___$1){
return (function (state_10428){var state_val_10429 = (state_10428[(1)]);if((state_val_10429 === (4)))
{var inst_10414 = (state_10428[(2)]);var inst_10415 = cljs.core.deref.call(null,inst_10414);var inst_10416 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inst_10415);var inst_10417 = ("Chothe "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10416));var inst_10418 = console.log(inst_10417);var inst_10419 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10420 = [new cljs.core.Keyword(null,"text","text",-1790561697)];var inst_10421 = (new cljs.core.PersistentVector(null,1,(5),inst_10419,inst_10420,null));var inst_10422 = (function (){var answer_chosen = inst_10414;return ((function (answer_chosen,inst_10414,inst_10415,inst_10416,inst_10417,inst_10418,inst_10419,inst_10420,inst_10421,state_val_10429,c__6742__auto__,answer_chan,___$1){
return (function (p1__10373_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10373_SHARP_)+" *");
});
;})(answer_chosen,inst_10414,inst_10415,inst_10416,inst_10417,inst_10418,inst_10419,inst_10420,inst_10421,state_val_10429,c__6742__auto__,answer_chan,___$1))
})();var inst_10423 = om.core.transact_BANG_.call(null,inst_10414,inst_10421,inst_10422);var state_10428__$1 = (function (){var statearr_10430 = state_10428;(statearr_10430[(7)] = inst_10418);
(statearr_10430[(8)] = inst_10423);
return statearr_10430;
})();var statearr_10431_10440 = state_10428__$1;(statearr_10431_10440[(2)] = null);
(statearr_10431_10440[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10429 === (3)))
{var inst_10426 = (state_10428[(2)]);var state_10428__$1 = state_10428;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10428__$1,inst_10426);
} else
{if((state_val_10429 === (2)))
{var state_10428__$1 = state_10428;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10428__$1,(4),answer_chan);
} else
{if((state_val_10429 === (1)))
{var state_10428__$1 = state_10428;var statearr_10432_10441 = state_10428__$1;(statearr_10432_10441[(2)] = null);
(statearr_10432_10441[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6742__auto__,answer_chan,___$1))
;return ((function (switch__6727__auto__,c__6742__auto__,answer_chan,___$1){
return (function() {
var state_machine__6728__auto__ = null;
var state_machine__6728__auto____0 = (function (){var statearr_10436 = [null,null,null,null,null,null,null,null,null];(statearr_10436[(0)] = state_machine__6728__auto__);
(statearr_10436[(1)] = (1));
return statearr_10436;
});
var state_machine__6728__auto____1 = (function (state_10428){while(true){
var ret_value__6729__auto__ = (function (){try{while(true){
var result__6730__auto__ = switch__6727__auto__.call(null,state_10428);if(cljs.core.keyword_identical_QMARK_.call(null,result__6730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6730__auto__;
}
break;
}
}catch (e10437){if((e10437 instanceof Object))
{var ex__6731__auto__ = e10437;var statearr_10438_10442 = state_10428;(statearr_10438_10442[(5)] = ex__6731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10428);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10437;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10443 = state_10428;
state_10428 = G__10443;
continue;
}
} else
{return ret_value__6729__auto__;
}
break;
}
});
state_machine__6728__auto__ = function(state_10428){
switch(arguments.length){
case 0:
return state_machine__6728__auto____0.call(this);
case 1:
return state_machine__6728__auto____1.call(this,state_10428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6728__auto____0;
state_machine__6728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6728__auto____1;
return state_machine__6728__auto__;
})()
;})(switch__6727__auto__,c__6742__auto__,answer_chan,___$1))
})();var state__6744__auto__ = (function (){var statearr_10439 = f__6743__auto__.call(null);(statearr_10439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto__);
return statearr_10439;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(c__6742__auto__,answer_chan,___$1))
);
return c__6742__auto__;
});
sailing_study_guide.core.t10407.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t10407.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176),cljs.core.async.chan.call(null)], null);
});
sailing_study_guide.core.t10407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10409){var self__ = this;
var _10409__$1 = this;return self__.meta10408;
});
sailing_study_guide.core.t10407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10409,meta10408__$1){var self__ = this;
var _10409__$1 = this;return (new sailing_study_guide.core.t10407(self__.owner,self__.quiz_question,self__.question_view,meta10408__$1));
});
sailing_study_guide.core.__GT_t10407 = (function __GT_t10407(owner__$1,quiz_question__$1,question_view__$1,meta10408){return (new sailing_study_guide.core.t10407(owner__$1,quiz_question__$1,question_view__$1,meta10408));
});
}
return (new sailing_study_guide.core.t10407(owner,quiz_question,question_view,null));
});
sailing_study_guide.core.header_bar_view = (function header_bar_view(section,_){if(typeof sailing_study_guide.core.t10447 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10447 = (function (_,section,header_bar_view,meta10448){
this._ = _;
this.section = section;
this.header_bar_view = header_bar_view;
this.meta10448 = meta10448;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10447.cljs$lang$type = true;
sailing_study_guide.core.t10447.cljs$lang$ctorStr = "sailing-study-guide.core/t10447";
sailing_study_guide.core.t10447.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10447");
});
sailing_study_guide.core.t10447.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10447.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.nav({"className": "tab-bar"},React.DOM.section({"className": "left-small text-center"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_question_num)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_num_questions))),React.DOM.section({"className": "middle tab-bar-section"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.section)),React.DOM.section({"className": "right-small"},React.DOM.a({"href": "#", "className": "right-off-canvas-toggle menu-icon"},React.DOM.span(null))));
});
sailing_study_guide.core.t10447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10449){var self__ = this;
var _10449__$1 = this;return self__.meta10448;
});
sailing_study_guide.core.t10447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10449,meta10448__$1){var self__ = this;
var _10449__$1 = this;return (new sailing_study_guide.core.t10447(self__._,self__.section,self__.header_bar_view,meta10448__$1));
});
sailing_study_guide.core.__GT_t10447 = (function __GT_t10447(___$1,section__$1,header_bar_view__$1,meta10448){return (new sailing_study_guide.core.t10447(___$1,section__$1,header_bar_view__$1,meta10448));
});
}
return (new sailing_study_guide.core.t10447(_,section,header_bar_view,null));
});
sailing_study_guide.core.header_progress_view = (function header_progress_view(section,_){if(typeof sailing_study_guide.core.t10453 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10453 = (function (_,section,header_progress_view,meta10454){
this._ = _;
this.section = section;
this.header_progress_view = header_progress_view;
this.meta10454 = meta10454;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10453.cljs$lang$type = true;
sailing_study_guide.core.t10453.cljs$lang$ctorStr = "sailing-study-guide.core/t10453";
sailing_study_guide.core.t10453.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10453");
});
sailing_study_guide.core.t10453.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10453.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.div({"className": "progress"},React.DOM.span({"style": {"width": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (current_question_num / total_num_questions)))+"%")}, "className": "meter"}));
});
sailing_study_guide.core.t10453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10455){var self__ = this;
var _10455__$1 = this;return self__.meta10454;
});
sailing_study_guide.core.t10453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10455,meta10454__$1){var self__ = this;
var _10455__$1 = this;return (new sailing_study_guide.core.t10453(self__._,self__.section,self__.header_progress_view,meta10454__$1));
});
sailing_study_guide.core.__GT_t10453 = (function __GT_t10453(___$1,section__$1,header_progress_view__$1,meta10454){return (new sailing_study_guide.core.t10453(___$1,section__$1,header_progress_view__$1,meta10454));
});
}
return (new sailing_study_guide.core.t10453(_,section,header_progress_view,null));
});
sailing_study_guide.core.header_view = (function header_view(section,_){if(typeof sailing_study_guide.core.t10459 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10459 = (function (_,section,header_view,meta10460){
this._ = _;
this.section = section;
this.header_view = header_view;
this.meta10460 = meta10460;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10459.cljs$lang$type = true;
sailing_study_guide.core.t10459.cljs$lang$ctorStr = "sailing-study-guide.core/t10459";
sailing_study_guide.core.t10459.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10459");
});
sailing_study_guide.core.t10459.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10459.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.div({"className": "quiz-header"},om.core.build.call(null,sailing_study_guide.core.header_bar_view,self__.section),om.core.build.call(null,sailing_study_guide.core.header_progress_view,self__.section));
});
sailing_study_guide.core.t10459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10461){var self__ = this;
var _10461__$1 = this;return self__.meta10460;
});
sailing_study_guide.core.t10459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10461,meta10460__$1){var self__ = this;
var _10461__$1 = this;return (new sailing_study_guide.core.t10459(self__._,self__.section,self__.header_view,meta10460__$1));
});
sailing_study_guide.core.__GT_t10459 = (function __GT_t10459(___$1,section__$1,header_view__$1,meta10460){return (new sailing_study_guide.core.t10459(___$1,section__$1,header_view__$1,meta10460));
});
}
return (new sailing_study_guide.core.t10459(_,section,header_view,null));
});
sailing_study_guide.core.section_view = (function section_view(section,owner){if(typeof sailing_study_guide.core.t10465 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10465 = (function (owner,section,section_view,meta10466){
this.owner = owner;
this.section = section;
this.section_view = section_view;
this.meta10466 = meta10466;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10465.cljs$lang$type = true;
sailing_study_guide.core.t10465.cljs$lang$ctorStr = "sailing-study-guide.core/t10465";
sailing_study_guide.core.t10465.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10465");
});
sailing_study_guide.core.t10465.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10465.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"data-offcanvas": true, "className": "off-canvas-wrap", "id": "quiz-section"},React.DOM.div({"className": "main-content inner-wrap"},om.core.build.call(null,sailing_study_guide.core.header_view,self__.section),om.core.build.call(null,sailing_study_guide.core.question_view,sailing_study_guide.core.current_question.call(null,self__.section)),React.DOM.a({"className": "exit-off-canvas"})));
});
sailing_study_guide.core.t10465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10467){var self__ = this;
var _10467__$1 = this;return self__.meta10466;
});
sailing_study_guide.core.t10465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10467,meta10466__$1){var self__ = this;
var _10467__$1 = this;return (new sailing_study_guide.core.t10465(self__.owner,self__.section,self__.section_view,meta10466__$1));
});
sailing_study_guide.core.__GT_t10465 = (function __GT_t10465(owner__$1,section__$1,section_view__$1,meta10466){return (new sailing_study_guide.core.t10465(owner__$1,section__$1,section_view__$1,meta10466));
});
}
return (new sailing_study_guide.core.t10465(owner,section,section_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(app_state,owner){if(typeof sailing_study_guide.core.t10471 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10471 = (function (owner,app_state,quiz_view,meta10472){
this.owner = owner;
this.app_state = app_state;
this.quiz_view = quiz_view;
this.meta10472 = meta10472;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10471.cljs$lang$type = true;
sailing_study_guide.core.t10471.cljs$lang$ctorStr = "sailing-study-guide.core/t10471";
sailing_study_guide.core.t10471.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10471");
});
sailing_study_guide.core.t10471.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10471.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.section_view,cljs.core.nth.call(null,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"quiz","quiz",829625914).cljs$core$IFn$_invoke$arity$1(self__.app_state)),new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(self__.app_state))));
});
sailing_study_guide.core.t10471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10473){var self__ = this;
var _10473__$1 = this;return self__.meta10472;
});
sailing_study_guide.core.t10471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10473,meta10472__$1){var self__ = this;
var _10473__$1 = this;return (new sailing_study_guide.core.t10471(self__.owner,self__.app_state,self__.quiz_view,meta10472__$1));
});
sailing_study_guide.core.__GT_t10471 = (function __GT_t10471(owner__$1,app_state__$1,quiz_view__$1,meta10472){return (new sailing_study_guide.core.t10471(owner__$1,app_state__$1,quiz_view__$1,meta10472));
});
}
return (new sailing_study_guide.core.t10471(owner,app_state,quiz_view,null));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map