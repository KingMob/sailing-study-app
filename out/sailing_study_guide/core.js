// Compiled by ClojureScript 0.0-2322
goog.provide('sailing_study_guide.core');
goog.require('cljs.core');
goog.require('sailing_study_guide.quiz');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('sailing_study_guide.quiz');
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
sailing_study_guide.core.current_section = (function current_section(app_state){return new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(app_state).call(null,new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(app_state));
});
sailing_study_guide.core.current_question = (function current_question(app_state){return new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.current_section.call(null,app_state)).call(null,new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(app_state));
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
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t11293 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11293 = (function (owner,answer,answer_view,meta11294){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta11294 = meta11294;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11293.cljs$lang$type = true;
sailing_study_guide.core.t11293.cljs$lang$ctorStr = "sailing-study-guide.core/t11293";
sailing_study_guide.core.t11293.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11293");
});
sailing_study_guide.core.t11293.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t11293.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__11296){var self__ = this;
var map__11297 = p__11296;var map__11297__$1 = ((cljs.core.seq_QMARK_.call(null,map__11297))?cljs.core.apply.call(null,cljs.core.hash_map,map__11297):map__11297);var choose_answer_chan = cljs.core.get.call(null,map__11297__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return React.DOM.div({"className": "answer-container"},React.DOM.button({"className": ("answer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.answer_css_class.call(null,self__.answer))), "onClick": ((function (___$1,map__11297,map__11297__$1,choose_answer_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,choose_answer_chan,self__.answer);
});})(___$1,map__11297,map__11297__$1,choose_answer_chan))
},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.answer)));
});
sailing_study_guide.core.t11293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11295){var self__ = this;
var _11295__$1 = this;return self__.meta11294;
});
sailing_study_guide.core.t11293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11295,meta11294__$1){var self__ = this;
var _11295__$1 = this;return (new sailing_study_guide.core.t11293(self__.owner,self__.answer,self__.answer_view,meta11294__$1));
});
sailing_study_guide.core.__GT_t11293 = (function __GT_t11293(owner__$1,answer__$1,answer_view__$1,meta11294){return (new sailing_study_guide.core.t11293(owner__$1,answer__$1,answer_view__$1,meta11294));
});
}
return (new sailing_study_guide.core.t11293(owner,answer,answer_view,null));
});
sailing_study_guide.core.answer_section_view = (function answer_section_view(answers,owner){if(typeof sailing_study_guide.core.t11303 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11303 = (function (owner,answers,answer_section_view,meta11304){
this.owner = owner;
this.answers = answers;
this.answer_section_view = answer_section_view;
this.meta11304 = meta11304;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11303.cljs$lang$type = true;
sailing_study_guide.core.t11303.cljs$lang$ctorStr = "sailing-study-guide.core/t11303";
sailing_study_guide.core.t11303.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11303");
});
sailing_study_guide.core.t11303.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t11303.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__11306){var self__ = this;
var map__11307 = p__11306;var map__11307__$1 = ((cljs.core.seq_QMARK_.call(null,map__11307))?cljs.core.apply.call(null,cljs.core.hash_map,map__11307):map__11307);var choose_answer_chan = cljs.core.get.call(null,map__11307__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "answer-section"},om.core.build_all.call(null,sailing_study_guide.core.answer_view,self__.answers,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),choose_answer_chan], null)], null)));
});
sailing_study_guide.core.t11303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11305){var self__ = this;
var _11305__$1 = this;return self__.meta11304;
});
sailing_study_guide.core.t11303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11305,meta11304__$1){var self__ = this;
var _11305__$1 = this;return (new sailing_study_guide.core.t11303(self__.owner,self__.answers,self__.answer_section_view,meta11304__$1));
});
sailing_study_guide.core.__GT_t11303 = (function __GT_t11303(owner__$1,answers__$1,answer_section_view__$1,meta11304){return (new sailing_study_guide.core.t11303(owner__$1,answers__$1,answer_section_view__$1,meta11304));
});
}
return (new sailing_study_guide.core.t11303(owner,answers,answer_section_view,null));
});
sailing_study_guide.core.question_view = (function question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t11352 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11352 = (function (owner,quiz_question,question_view,meta11353){
this.owner = owner;
this.quiz_question = quiz_question;
this.question_view = question_view;
this.meta11353 = meta11353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11352.cljs$lang$type = true;
sailing_study_guide.core.t11352.cljs$lang$ctorStr = "sailing-study-guide.core/t11352";
sailing_study_guide.core.t11352.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11352");
});
sailing_study_guide.core.t11352.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t11352.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__11355){var self__ = this;
var map__11356 = p__11355;var map__11356__$1 = ((cljs.core.seq_QMARK_.call(null,map__11356))?cljs.core.apply.call(null,cljs.core.hash_map,map__11356):map__11356);var choose_answer_chan = cljs.core.get.call(null,map__11356__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return React.DOM.div({"className": "question-container"},React.DOM.div({"className": "question-text-container"},React.DOM.h3({"className": "question-text"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(self__.quiz_question))),React.DOM.div({"className": "media-container"}),om.core.build.call(null,sailing_study_guide.core.answer_section_view,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),choose_answer_chan], null)], null)));
});
sailing_study_guide.core.t11352.prototype.om$core$IWillMount$ = true;
sailing_study_guide.core.t11352.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var choose_answer_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var c__6376__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto__,choose_answer_chan,___$1){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto__,choose_answer_chan,___$1){
return (function (state_11379){var state_val_11380 = (state_11379[(1)]);if((state_val_11380 === (7)))
{var inst_11374 = (state_11379[(2)]);var state_11379__$1 = (function (){var statearr_11381 = state_11379;(statearr_11381[(7)] = inst_11374);
return statearr_11381;
})();var statearr_11382_11396 = state_11379__$1;(statearr_11382_11396[(2)] = null);
(statearr_11382_11396[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11380 === (6)))
{var state_11379__$1 = state_11379;var statearr_11383_11397 = state_11379__$1;(statearr_11383_11397[(2)] = null);
(statearr_11383_11397[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11380 === (5)))
{var inst_11371 = sailing_study_guide.core.question_answered.call(null);var state_11379__$1 = state_11379;var statearr_11384_11398 = state_11379__$1;(statearr_11384_11398[(2)] = inst_11371);
(statearr_11384_11398[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11380 === (4)))
{var inst_11359 = (state_11379[(2)]);var inst_11360 = cljs.core.deref.call(null,inst_11359);var inst_11361 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inst_11360);var inst_11362 = ("Chose "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11361));var inst_11363 = console.log(inst_11362);var inst_11364 = om.core.update_BANG_.call(null,inst_11359,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"chosen","chosen",-1422409985));var inst_11365 = cljs.core.deref.call(null,inst_11359);var inst_11366 = new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(inst_11365);var inst_11367 = console.log(inst_11366);var inst_11368 = cljs.core.deref.call(null,inst_11359);var inst_11369 = new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(inst_11368);var state_11379__$1 = (function (){var statearr_11385 = state_11379;(statearr_11385[(8)] = inst_11364);
(statearr_11385[(9)] = inst_11363);
(statearr_11385[(10)] = inst_11367);
return statearr_11385;
})();if(cljs.core.truth_(inst_11369))
{var statearr_11386_11399 = state_11379__$1;(statearr_11386_11399[(1)] = (5));
} else
{var statearr_11387_11400 = state_11379__$1;(statearr_11387_11400[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11380 === (3)))
{var inst_11377 = (state_11379[(2)]);var state_11379__$1 = state_11379;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11379__$1,inst_11377);
} else
{if((state_val_11380 === (2)))
{var state_11379__$1 = state_11379;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11379__$1,(4),choose_answer_chan);
} else
{if((state_val_11380 === (1)))
{var state_11379__$1 = state_11379;var statearr_11388_11401 = state_11379__$1;(statearr_11388_11401[(2)] = null);
(statearr_11388_11401[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6376__auto__,choose_answer_chan,___$1))
;return ((function (switch__6361__auto__,c__6376__auto__,choose_answer_chan,___$1){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_11392 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11392[(0)] = state_machine__6362__auto__);
(statearr_11392[(1)] = (1));
return statearr_11392;
});
var state_machine__6362__auto____1 = (function (state_11379){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_11379);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e11393){if((e11393 instanceof Object))
{var ex__6365__auto__ = e11393;var statearr_11394_11402 = state_11379;(statearr_11394_11402[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11379);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11393;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11403 = state_11379;
state_11379 = G__11403;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_11379){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_11379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__,choose_answer_chan,___$1))
})();var state__6378__auto__ = (function (){var statearr_11395 = f__6377__auto__.call(null);(statearr_11395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_11395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto__,choose_answer_chan,___$1))
);
return c__6376__auto__;
});
sailing_study_guide.core.t11352.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t11352.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),cljs.core.async.chan.call(null)], null);
});
sailing_study_guide.core.t11352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11354){var self__ = this;
var _11354__$1 = this;return self__.meta11353;
});
sailing_study_guide.core.t11352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11354,meta11353__$1){var self__ = this;
var _11354__$1 = this;return (new sailing_study_guide.core.t11352(self__.owner,self__.quiz_question,self__.question_view,meta11353__$1));
});
sailing_study_guide.core.__GT_t11352 = (function __GT_t11352(owner__$1,quiz_question__$1,question_view__$1,meta11353){return (new sailing_study_guide.core.t11352(owner__$1,quiz_question__$1,question_view__$1,meta11353));
});
}
return (new sailing_study_guide.core.t11352(owner,quiz_question,question_view,null));
});
sailing_study_guide.core.header_bar_view = (function header_bar_view(section,_){if(typeof sailing_study_guide.core.t11407 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11407 = (function (_,section,header_bar_view,meta11408){
this._ = _;
this.section = section;
this.header_bar_view = header_bar_view;
this.meta11408 = meta11408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11407.cljs$lang$type = true;
sailing_study_guide.core.t11407.cljs$lang$ctorStr = "sailing-study-guide.core/t11407";
sailing_study_guide.core.t11407.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11407");
});
sailing_study_guide.core.t11407.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t11407.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.nav({"className": "tab-bar"},React.DOM.section({"className": "left-small text-center"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_question_num)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_num_questions))),React.DOM.section({"className": "middle tab-bar-section"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.section)),React.DOM.section({"className": "right-small"},React.DOM.a({"href": "#", "className": "right-off-canvas-toggle menu-icon"},React.DOM.span(null))));
});
sailing_study_guide.core.t11407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11409){var self__ = this;
var _11409__$1 = this;return self__.meta11408;
});
sailing_study_guide.core.t11407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11409,meta11408__$1){var self__ = this;
var _11409__$1 = this;return (new sailing_study_guide.core.t11407(self__._,self__.section,self__.header_bar_view,meta11408__$1));
});
sailing_study_guide.core.__GT_t11407 = (function __GT_t11407(___$1,section__$1,header_bar_view__$1,meta11408){return (new sailing_study_guide.core.t11407(___$1,section__$1,header_bar_view__$1,meta11408));
});
}
return (new sailing_study_guide.core.t11407(_,section,header_bar_view,null));
});
sailing_study_guide.core.header_progress_view = (function header_progress_view(section,_){if(typeof sailing_study_guide.core.t11413 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11413 = (function (_,section,header_progress_view,meta11414){
this._ = _;
this.section = section;
this.header_progress_view = header_progress_view;
this.meta11414 = meta11414;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11413.cljs$lang$type = true;
sailing_study_guide.core.t11413.cljs$lang$ctorStr = "sailing-study-guide.core/t11413";
sailing_study_guide.core.t11413.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11413");
});
sailing_study_guide.core.t11413.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t11413.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.div({"className": "progress"},React.DOM.span({"style": {"width": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (current_question_num / total_num_questions)))+"%")}, "className": "meter"}));
});
sailing_study_guide.core.t11413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11415){var self__ = this;
var _11415__$1 = this;return self__.meta11414;
});
sailing_study_guide.core.t11413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11415,meta11414__$1){var self__ = this;
var _11415__$1 = this;return (new sailing_study_guide.core.t11413(self__._,self__.section,self__.header_progress_view,meta11414__$1));
});
sailing_study_guide.core.__GT_t11413 = (function __GT_t11413(___$1,section__$1,header_progress_view__$1,meta11414){return (new sailing_study_guide.core.t11413(___$1,section__$1,header_progress_view__$1,meta11414));
});
}
return (new sailing_study_guide.core.t11413(_,section,header_progress_view,null));
});
sailing_study_guide.core.header_view = (function header_view(section,_){if(typeof sailing_study_guide.core.t11419 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11419 = (function (_,section,header_view,meta11420){
this._ = _;
this.section = section;
this.header_view = header_view;
this.meta11420 = meta11420;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11419.cljs$lang$type = true;
sailing_study_guide.core.t11419.cljs$lang$ctorStr = "sailing-study-guide.core/t11419";
sailing_study_guide.core.t11419.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11419");
});
sailing_study_guide.core.t11419.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t11419.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.div({"className": "quiz-header"},om.core.build.call(null,sailing_study_guide.core.header_bar_view,self__.section),om.core.build.call(null,sailing_study_guide.core.header_progress_view,self__.section));
});
sailing_study_guide.core.t11419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11421){var self__ = this;
var _11421__$1 = this;return self__.meta11420;
});
sailing_study_guide.core.t11419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11421,meta11420__$1){var self__ = this;
var _11421__$1 = this;return (new sailing_study_guide.core.t11419(self__._,self__.section,self__.header_view,meta11420__$1));
});
sailing_study_guide.core.__GT_t11419 = (function __GT_t11419(___$1,section__$1,header_view__$1,meta11420){return (new sailing_study_guide.core.t11419(___$1,section__$1,header_view__$1,meta11420));
});
}
return (new sailing_study_guide.core.t11419(_,section,header_view,null));
});
sailing_study_guide.core.section_view = (function section_view(section,owner){if(typeof sailing_study_guide.core.t11425 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11425 = (function (owner,section,section_view,meta11426){
this.owner = owner;
this.section = section;
this.section_view = section_view;
this.meta11426 = meta11426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11425.cljs$lang$type = true;
sailing_study_guide.core.t11425.cljs$lang$ctorStr = "sailing-study-guide.core/t11425";
sailing_study_guide.core.t11425.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11425");
});
sailing_study_guide.core.t11425.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t11425.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"data-offcanvas": true, "className": "off-canvas-wrap", "id": "quiz-section"},React.DOM.div({"className": "main-content inner-wrap"},om.core.build.call(null,sailing_study_guide.core.header_view,self__.section),om.core.build.call(null,sailing_study_guide.core.question_view,cljs.core.get.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section),new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section))),React.DOM.a({"className": "exit-off-canvas"})));
});
sailing_study_guide.core.t11425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11427){var self__ = this;
var _11427__$1 = this;return self__.meta11426;
});
sailing_study_guide.core.t11425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11427,meta11426__$1){var self__ = this;
var _11427__$1 = this;return (new sailing_study_guide.core.t11425(self__.owner,self__.section,self__.section_view,meta11426__$1));
});
sailing_study_guide.core.__GT_t11425 = (function __GT_t11425(owner__$1,section__$1,section_view__$1,meta11426){return (new sailing_study_guide.core.t11425(owner__$1,section__$1,section_view__$1,meta11426));
});
}
return (new sailing_study_guide.core.t11425(owner,section,section_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(app_state,owner){if(typeof sailing_study_guide.core.t11431 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11431 = (function (owner,app_state,quiz_view,meta11432){
this.owner = owner;
this.app_state = app_state;
this.quiz_view = quiz_view;
this.meta11432 = meta11432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11431.cljs$lang$type = true;
sailing_study_guide.core.t11431.cljs$lang$ctorStr = "sailing-study-guide.core/t11431";
sailing_study_guide.core.t11431.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11431");
});
sailing_study_guide.core.t11431.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t11431.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.section_view,cljs.core.nth.call(null,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"quiz","quiz",829625914).cljs$core$IFn$_invoke$arity$1(self__.app_state)),new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(self__.app_state))));
});
sailing_study_guide.core.t11431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11433){var self__ = this;
var _11433__$1 = this;return self__.meta11432;
});
sailing_study_guide.core.t11431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11433,meta11432__$1){var self__ = this;
var _11433__$1 = this;return (new sailing_study_guide.core.t11431(self__.owner,self__.app_state,self__.quiz_view,meta11432__$1));
});
sailing_study_guide.core.__GT_t11431 = (function __GT_t11431(owner__$1,app_state__$1,quiz_view__$1,meta11432){return (new sailing_study_guide.core.t11431(owner__$1,app_state__$1,quiz_view__$1,meta11432));
});
}
return (new sailing_study_guide.core.t11431(owner,app_state,quiz_view,null));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map