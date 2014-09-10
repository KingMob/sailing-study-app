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
sailing_study_guide.core.current_section = (function current_section(app_state){var current_section__$1 = new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(app_state);return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quiz","quiz",829625914),new cljs.core.Keyword(null,"sections","sections",-886710106),current_section__$1], null));
});
sailing_study_guide.core.current_section.call(null,cljs.core.deref.call(null,sailing_study_guide.core.app_state));
sailing_study_guide.core.current_question = (function current_question(app_state){var current_question__$1 = new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(app_state);return cljs.core.get_in.call(null,sailing_study_guide.core.current_section.call(null,app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"questions","questions",1226225380),current_question__$1], null));
});
sailing_study_guide.core.current_question.call(null,cljs.core.deref.call(null,sailing_study_guide.core.app_state));
cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.current_section.call(null,cljs.core.deref.call(null,sailing_study_guide.core.app_state))));
new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sailing_study_guide.core.app_state));
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
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t18298 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t18298 = (function (owner,answer,answer_view,meta18299){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta18299 = meta18299;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t18298.cljs$lang$type = true;
sailing_study_guide.core.t18298.cljs$lang$ctorStr = "sailing-study-guide.core/t18298";
sailing_study_guide.core.t18298.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t18298");
});
sailing_study_guide.core.t18298.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t18298.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__18301){var self__ = this;
var map__18302 = p__18301;var map__18302__$1 = ((cljs.core.seq_QMARK_.call(null,map__18302))?cljs.core.apply.call(null,cljs.core.hash_map,map__18302):map__18302);var choose_answer_chan = cljs.core.get.call(null,map__18302__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return React.DOM.div({"className": "answer-container"},React.DOM.button({"className": ("answer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.answer_css_class.call(null,self__.answer))), "onClick": ((function (___$1,map__18302,map__18302__$1,choose_answer_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,choose_answer_chan,self__.answer);
});})(___$1,map__18302,map__18302__$1,choose_answer_chan))
},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.answer)));
});
sailing_study_guide.core.t18298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18300){var self__ = this;
var _18300__$1 = this;return self__.meta18299;
});
sailing_study_guide.core.t18298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18300,meta18299__$1){var self__ = this;
var _18300__$1 = this;return (new sailing_study_guide.core.t18298(self__.owner,self__.answer,self__.answer_view,meta18299__$1));
});
sailing_study_guide.core.__GT_t18298 = (function __GT_t18298(owner__$1,answer__$1,answer_view__$1,meta18299){return (new sailing_study_guide.core.t18298(owner__$1,answer__$1,answer_view__$1,meta18299));
});
}
return (new sailing_study_guide.core.t18298(owner,answer,answer_view,null));
});
sailing_study_guide.core.answer_section_view = (function answer_section_view(answers,owner){if(typeof sailing_study_guide.core.t18308 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t18308 = (function (owner,answers,answer_section_view,meta18309){
this.owner = owner;
this.answers = answers;
this.answer_section_view = answer_section_view;
this.meta18309 = meta18309;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t18308.cljs$lang$type = true;
sailing_study_guide.core.t18308.cljs$lang$ctorStr = "sailing-study-guide.core/t18308";
sailing_study_guide.core.t18308.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t18308");
});
sailing_study_guide.core.t18308.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t18308.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__18311){var self__ = this;
var map__18312 = p__18311;var map__18312__$1 = ((cljs.core.seq_QMARK_.call(null,map__18312))?cljs.core.apply.call(null,cljs.core.hash_map,map__18312):map__18312);var choose_answer_chan = cljs.core.get.call(null,map__18312__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "answer-section"},om.core.build_all.call(null,sailing_study_guide.core.answer_view,self__.answers,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),choose_answer_chan], null)], null)));
});
sailing_study_guide.core.t18308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18310){var self__ = this;
var _18310__$1 = this;return self__.meta18309;
});
sailing_study_guide.core.t18308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18310,meta18309__$1){var self__ = this;
var _18310__$1 = this;return (new sailing_study_guide.core.t18308(self__.owner,self__.answers,self__.answer_section_view,meta18309__$1));
});
sailing_study_guide.core.__GT_t18308 = (function __GT_t18308(owner__$1,answers__$1,answer_section_view__$1,meta18309){return (new sailing_study_guide.core.t18308(owner__$1,answers__$1,answer_section_view__$1,meta18309));
});
}
return (new sailing_study_guide.core.t18308(owner,answers,answer_section_view,null));
});
sailing_study_guide.core.question_view = (function question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t18342 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t18342 = (function (owner,quiz_question,question_view,meta18343){
this.owner = owner;
this.quiz_question = quiz_question;
this.question_view = question_view;
this.meta18343 = meta18343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t18342.cljs$lang$type = true;
sailing_study_guide.core.t18342.cljs$lang$ctorStr = "sailing-study-guide.core/t18342";
sailing_study_guide.core.t18342.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t18342");
});
sailing_study_guide.core.t18342.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t18342.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__18345){var self__ = this;
var map__18346 = p__18345;var map__18346__$1 = ((cljs.core.seq_QMARK_.call(null,map__18346))?cljs.core.apply.call(null,cljs.core.hash_map,map__18346):map__18346);var choose_answer_chan = cljs.core.get.call(null,map__18346__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return React.DOM.div({"className": "question-container"},React.DOM.div({"className": "question-text-container"},React.DOM.h3({"className": "question-text"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(self__.quiz_question))),React.DOM.div({"className": "media-container"}),om.core.build.call(null,sailing_study_guide.core.answer_section_view,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),choose_answer_chan], null)], null)));
});
sailing_study_guide.core.t18342.prototype.om$core$IWillMount$ = true;
sailing_study_guide.core.t18342.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var choose_answer_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var c__6376__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto__,choose_answer_chan,___$1){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto__,choose_answer_chan,___$1){
return (function (state_18359){var state_val_18360 = (state_18359[(1)]);if((state_val_18360 === (4)))
{var inst_18349 = (state_18359[(2)]);var inst_18350 = cljs.core.deref.call(null,inst_18349);var inst_18351 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inst_18350);var inst_18352 = ("Chose "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18351));var inst_18353 = console.log(inst_18352);var inst_18354 = om.core.update_BANG_.call(null,inst_18349,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"chosen","chosen",-1422409985));var state_18359__$1 = (function (){var statearr_18361 = state_18359;(statearr_18361[(7)] = inst_18353);
(statearr_18361[(8)] = inst_18354);
return statearr_18361;
})();var statearr_18362_18371 = state_18359__$1;(statearr_18362_18371[(2)] = null);
(statearr_18362_18371[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18360 === (3)))
{var inst_18357 = (state_18359[(2)]);var state_18359__$1 = state_18359;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18359__$1,inst_18357);
} else
{if((state_val_18360 === (2)))
{var state_18359__$1 = state_18359;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18359__$1,(4),choose_answer_chan);
} else
{if((state_val_18360 === (1)))
{var state_18359__$1 = state_18359;var statearr_18363_18372 = state_18359__$1;(statearr_18363_18372[(2)] = null);
(statearr_18363_18372[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6376__auto__,choose_answer_chan,___$1))
;return ((function (switch__6361__auto__,c__6376__auto__,choose_answer_chan,___$1){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_18367 = [null,null,null,null,null,null,null,null,null];(statearr_18367[(0)] = state_machine__6362__auto__);
(statearr_18367[(1)] = (1));
return statearr_18367;
});
var state_machine__6362__auto____1 = (function (state_18359){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_18359);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e18368){if((e18368 instanceof Object))
{var ex__6365__auto__ = e18368;var statearr_18369_18373 = state_18359;(statearr_18369_18373[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18359);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18368;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18374 = state_18359;
state_18359 = G__18374;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_18359){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_18359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__,choose_answer_chan,___$1))
})();var state__6378__auto__ = (function (){var statearr_18370 = f__6377__auto__.call(null);(statearr_18370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_18370;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto__,choose_answer_chan,___$1))
);
return c__6376__auto__;
});
sailing_study_guide.core.t18342.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t18342.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),cljs.core.async.chan.call(null)], null);
});
sailing_study_guide.core.t18342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18344){var self__ = this;
var _18344__$1 = this;return self__.meta18343;
});
sailing_study_guide.core.t18342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18344,meta18343__$1){var self__ = this;
var _18344__$1 = this;return (new sailing_study_guide.core.t18342(self__.owner,self__.quiz_question,self__.question_view,meta18343__$1));
});
sailing_study_guide.core.__GT_t18342 = (function __GT_t18342(owner__$1,quiz_question__$1,question_view__$1,meta18343){return (new sailing_study_guide.core.t18342(owner__$1,quiz_question__$1,question_view__$1,meta18343));
});
}
return (new sailing_study_guide.core.t18342(owner,quiz_question,question_view,null));
});
sailing_study_guide.core.header_bar_view = (function header_bar_view(section,_){if(typeof sailing_study_guide.core.t18378 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t18378 = (function (_,section,header_bar_view,meta18379){
this._ = _;
this.section = section;
this.header_bar_view = header_bar_view;
this.meta18379 = meta18379;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t18378.cljs$lang$type = true;
sailing_study_guide.core.t18378.cljs$lang$ctorStr = "sailing-study-guide.core/t18378";
sailing_study_guide.core.t18378.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t18378");
});
sailing_study_guide.core.t18378.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t18378.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.nav({"className": "tab-bar"},React.DOM.section({"className": "left-small text-center"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_question_num)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_num_questions))),React.DOM.section({"className": "middle tab-bar-section"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.section)),React.DOM.section({"className": "right-small"},React.DOM.a({"href": "#", "className": "right-off-canvas-toggle menu-icon"},React.DOM.span(null))));
});
sailing_study_guide.core.t18378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18380){var self__ = this;
var _18380__$1 = this;return self__.meta18379;
});
sailing_study_guide.core.t18378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18380,meta18379__$1){var self__ = this;
var _18380__$1 = this;return (new sailing_study_guide.core.t18378(self__._,self__.section,self__.header_bar_view,meta18379__$1));
});
sailing_study_guide.core.__GT_t18378 = (function __GT_t18378(___$1,section__$1,header_bar_view__$1,meta18379){return (new sailing_study_guide.core.t18378(___$1,section__$1,header_bar_view__$1,meta18379));
});
}
return (new sailing_study_guide.core.t18378(_,section,header_bar_view,null));
});
sailing_study_guide.core.header_progress_view = (function header_progress_view(section,_){if(typeof sailing_study_guide.core.t18384 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t18384 = (function (_,section,header_progress_view,meta18385){
this._ = _;
this.section = section;
this.header_progress_view = header_progress_view;
this.meta18385 = meta18385;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t18384.cljs$lang$type = true;
sailing_study_guide.core.t18384.cljs$lang$ctorStr = "sailing-study-guide.core/t18384";
sailing_study_guide.core.t18384.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t18384");
});
sailing_study_guide.core.t18384.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t18384.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.div({"className": "progress"},React.DOM.span({"style": {"width": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (current_question_num / total_num_questions)))+"%")}, "className": "meter"}));
});
sailing_study_guide.core.t18384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18386){var self__ = this;
var _18386__$1 = this;return self__.meta18385;
});
sailing_study_guide.core.t18384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18386,meta18385__$1){var self__ = this;
var _18386__$1 = this;return (new sailing_study_guide.core.t18384(self__._,self__.section,self__.header_progress_view,meta18385__$1));
});
sailing_study_guide.core.__GT_t18384 = (function __GT_t18384(___$1,section__$1,header_progress_view__$1,meta18385){return (new sailing_study_guide.core.t18384(___$1,section__$1,header_progress_view__$1,meta18385));
});
}
return (new sailing_study_guide.core.t18384(_,section,header_progress_view,null));
});
sailing_study_guide.core.header_view = (function header_view(section,_){if(typeof sailing_study_guide.core.t18390 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t18390 = (function (_,section,header_view,meta18391){
this._ = _;
this.section = section;
this.header_view = header_view;
this.meta18391 = meta18391;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t18390.cljs$lang$type = true;
sailing_study_guide.core.t18390.cljs$lang$ctorStr = "sailing-study-guide.core/t18390";
sailing_study_guide.core.t18390.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t18390");
});
sailing_study_guide.core.t18390.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t18390.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.div({"className": "quiz-header"},om.core.build.call(null,sailing_study_guide.core.header_bar_view,self__.section),om.core.build.call(null,sailing_study_guide.core.header_progress_view,self__.section));
});
sailing_study_guide.core.t18390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18392){var self__ = this;
var _18392__$1 = this;return self__.meta18391;
});
sailing_study_guide.core.t18390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18392,meta18391__$1){var self__ = this;
var _18392__$1 = this;return (new sailing_study_guide.core.t18390(self__._,self__.section,self__.header_view,meta18391__$1));
});
sailing_study_guide.core.__GT_t18390 = (function __GT_t18390(___$1,section__$1,header_view__$1,meta18391){return (new sailing_study_guide.core.t18390(___$1,section__$1,header_view__$1,meta18391));
});
}
return (new sailing_study_guide.core.t18390(_,section,header_view,null));
});
sailing_study_guide.core.section_view = (function section_view(section,owner){if(typeof sailing_study_guide.core.t18396 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t18396 = (function (owner,section,section_view,meta18397){
this.owner = owner;
this.section = section;
this.section_view = section_view;
this.meta18397 = meta18397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t18396.cljs$lang$type = true;
sailing_study_guide.core.t18396.cljs$lang$ctorStr = "sailing-study-guide.core/t18396";
sailing_study_guide.core.t18396.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t18396");
});
sailing_study_guide.core.t18396.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t18396.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"data-offcanvas": true, "className": "off-canvas-wrap", "id": "quiz-section"},React.DOM.div({"className": "main-content inner-wrap"},om.core.build.call(null,sailing_study_guide.core.header_view,self__.section),om.core.build.call(null,sailing_study_guide.core.question_view,cljs.core.get.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section),new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section))),React.DOM.a({"className": "exit-off-canvas"})));
});
sailing_study_guide.core.t18396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18398){var self__ = this;
var _18398__$1 = this;return self__.meta18397;
});
sailing_study_guide.core.t18396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18398,meta18397__$1){var self__ = this;
var _18398__$1 = this;return (new sailing_study_guide.core.t18396(self__.owner,self__.section,self__.section_view,meta18397__$1));
});
sailing_study_guide.core.__GT_t18396 = (function __GT_t18396(owner__$1,section__$1,section_view__$1,meta18397){return (new sailing_study_guide.core.t18396(owner__$1,section__$1,section_view__$1,meta18397));
});
}
return (new sailing_study_guide.core.t18396(owner,section,section_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(app_state,owner){if(typeof sailing_study_guide.core.t18402 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t18402 = (function (owner,app_state,quiz_view,meta18403){
this.owner = owner;
this.app_state = app_state;
this.quiz_view = quiz_view;
this.meta18403 = meta18403;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t18402.cljs$lang$type = true;
sailing_study_guide.core.t18402.cljs$lang$ctorStr = "sailing-study-guide.core/t18402";
sailing_study_guide.core.t18402.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t18402");
});
sailing_study_guide.core.t18402.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t18402.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.section_view,cljs.core.nth.call(null,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"quiz","quiz",829625914).cljs$core$IFn$_invoke$arity$1(self__.app_state)),new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(self__.app_state))));
});
sailing_study_guide.core.t18402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18404){var self__ = this;
var _18404__$1 = this;return self__.meta18403;
});
sailing_study_guide.core.t18402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18404,meta18403__$1){var self__ = this;
var _18404__$1 = this;return (new sailing_study_guide.core.t18402(self__.owner,self__.app_state,self__.quiz_view,meta18403__$1));
});
sailing_study_guide.core.__GT_t18402 = (function __GT_t18402(owner__$1,app_state__$1,quiz_view__$1,meta18403){return (new sailing_study_guide.core.t18402(owner__$1,app_state__$1,quiz_view__$1,meta18403));
});
}
return (new sailing_study_guide.core.t18402(owner,app_state,quiz_view,null));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map