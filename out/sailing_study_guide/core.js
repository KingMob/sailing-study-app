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
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t10473 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10473 = (function (owner,answer,answer_view,meta10474){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta10474 = meta10474;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10473.cljs$lang$type = true;
sailing_study_guide.core.t10473.cljs$lang$ctorStr = "sailing-study-guide.core/t10473";
sailing_study_guide.core.t10473.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10473");
});
sailing_study_guide.core.t10473.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t10473.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10476){var self__ = this;
var map__10477 = p__10476;var map__10477__$1 = ((cljs.core.seq_QMARK_.call(null,map__10477))?cljs.core.apply.call(null,cljs.core.hash_map,map__10477):map__10477);var status = cljs.core.get.call(null,map__10477__$1,new cljs.core.Keyword(null,"status","status",-1997798413));var answer_chan = cljs.core.get.call(null,map__10477__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));var ___$1 = this;return React.DOM.div({"className": "answer-container"},React.DOM.button({"className": ("answer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.answer_css_class.call(null,status,new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(self__.answer)))), "onClick": ((function (___$1,map__10477,map__10477__$1,status,answer_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,answer_chan,self__.answer);
});})(___$1,map__10477,map__10477__$1,status,answer_chan))
},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.answer)));
});
sailing_study_guide.core.t10473.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t10473.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null);
});
sailing_study_guide.core.t10473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10475){var self__ = this;
var _10475__$1 = this;return self__.meta10474;
});
sailing_study_guide.core.t10473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10475,meta10474__$1){var self__ = this;
var _10475__$1 = this;return (new sailing_study_guide.core.t10473(self__.owner,self__.answer,self__.answer_view,meta10474__$1));
});
sailing_study_guide.core.__GT_t10473 = (function __GT_t10473(owner__$1,answer__$1,answer_view__$1,meta10474){return (new sailing_study_guide.core.t10473(owner__$1,answer__$1,answer_view__$1,meta10474));
});
}
return (new sailing_study_guide.core.t10473(owner,answer,answer_view,null));
});
sailing_study_guide.core.answer_section_view = (function answer_section_view(answers,owner){if(typeof sailing_study_guide.core.t10483 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10483 = (function (owner,answers,answer_section_view,meta10484){
this.owner = owner;
this.answers = answers;
this.answer_section_view = answer_section_view;
this.meta10484 = meta10484;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10483.cljs$lang$type = true;
sailing_study_guide.core.t10483.cljs$lang$ctorStr = "sailing-study-guide.core/t10483";
sailing_study_guide.core.t10483.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10483");
});
sailing_study_guide.core.t10483.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t10483.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10486){var self__ = this;
var map__10487 = p__10486;var map__10487__$1 = ((cljs.core.seq_QMARK_.call(null,map__10487))?cljs.core.apply.call(null,cljs.core.hash_map,map__10487):map__10487);var answer_chan = cljs.core.get.call(null,map__10487__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "answer-section"},om.core.build_all.call(null,sailing_study_guide.core.answer_view,self__.answers,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176),answer_chan], null)], null)));
});
sailing_study_guide.core.t10483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10485){var self__ = this;
var _10485__$1 = this;return self__.meta10484;
});
sailing_study_guide.core.t10483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10485,meta10484__$1){var self__ = this;
var _10485__$1 = this;return (new sailing_study_guide.core.t10483(self__.owner,self__.answers,self__.answer_section_view,meta10484__$1));
});
sailing_study_guide.core.__GT_t10483 = (function __GT_t10483(owner__$1,answers__$1,answer_section_view__$1,meta10484){return (new sailing_study_guide.core.t10483(owner__$1,answers__$1,answer_section_view__$1,meta10484));
});
}
return (new sailing_study_guide.core.t10483(owner,answers,answer_section_view,null));
});
sailing_study_guide.core.question_view = (function question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t10522 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10522 = (function (owner,quiz_question,question_view,meta10523){
this.owner = owner;
this.quiz_question = quiz_question;
this.question_view = question_view;
this.meta10523 = meta10523;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10522.cljs$lang$type = true;
sailing_study_guide.core.t10522.cljs$lang$ctorStr = "sailing-study-guide.core/t10522";
sailing_study_guide.core.t10522.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10522");
});
sailing_study_guide.core.t10522.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t10522.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10525){var self__ = this;
var map__10526 = p__10525;var map__10526__$1 = ((cljs.core.seq_QMARK_.call(null,map__10526))?cljs.core.apply.call(null,cljs.core.hash_map,map__10526):map__10526);var answer_chan = cljs.core.get.call(null,map__10526__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));var ___$1 = this;return React.DOM.div({"className": "question-container"},React.DOM.div({"className": "question-text-container"},React.DOM.h3({"className": "question-text"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(self__.quiz_question))),React.DOM.div({"className": "media-container"}),om.core.build.call(null,sailing_study_guide.core.answer_section_view,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176),answer_chan], null)], null)));
});
sailing_study_guide.core.t10522.prototype.om$core$IWillMount$ = true;
sailing_study_guide.core.t10522.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var answer_chan = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"tx-chan","tx-chan",1461202998));var c__6747__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6747__auto__,answer_chan,___$1){
return (function (){var f__6748__auto__ = (function (){var switch__6732__auto__ = ((function (c__6747__auto__,answer_chan,___$1){
return (function (state_10543){var state_val_10544 = (state_10543[(1)]);if((state_val_10544 === (4)))
{var inst_10529 = (state_10543[(2)]);var inst_10530 = cljs.core.deref.call(null,inst_10529);var inst_10531 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inst_10530);var inst_10532 = ("Chose "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10531));var inst_10533 = console.log(inst_10532);var inst_10534 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10535 = [new cljs.core.Keyword(null,"text","text",-1790561697)];var inst_10536 = (new cljs.core.PersistentVector(null,1,(5),inst_10534,inst_10535,null));var inst_10537 = (function (){var answer_chosen = inst_10529;return ((function (answer_chosen,inst_10529,inst_10530,inst_10531,inst_10532,inst_10533,inst_10534,inst_10535,inst_10536,state_val_10544,c__6747__auto__,answer_chan,___$1){
return (function (p1__10488_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10488_SHARP_)+" *");
});
;})(answer_chosen,inst_10529,inst_10530,inst_10531,inst_10532,inst_10533,inst_10534,inst_10535,inst_10536,state_val_10544,c__6747__auto__,answer_chan,___$1))
})();var inst_10538 = om.core.transact_BANG_.call(null,inst_10529,inst_10536,inst_10537);var state_10543__$1 = (function (){var statearr_10545 = state_10543;(statearr_10545[(7)] = inst_10538);
(statearr_10545[(8)] = inst_10533);
return statearr_10545;
})();var statearr_10546_10555 = state_10543__$1;(statearr_10546_10555[(2)] = null);
(statearr_10546_10555[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10544 === (3)))
{var inst_10541 = (state_10543[(2)]);var state_10543__$1 = state_10543;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10543__$1,inst_10541);
} else
{if((state_val_10544 === (2)))
{var state_10543__$1 = state_10543;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10543__$1,(4),answer_chan);
} else
{if((state_val_10544 === (1)))
{var state_10543__$1 = state_10543;var statearr_10547_10556 = state_10543__$1;(statearr_10547_10556[(2)] = null);
(statearr_10547_10556[(1)] = (2));
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
var state_machine__6733__auto____0 = (function (){var statearr_10551 = [null,null,null,null,null,null,null,null,null];(statearr_10551[(0)] = state_machine__6733__auto__);
(statearr_10551[(1)] = (1));
return statearr_10551;
});
var state_machine__6733__auto____1 = (function (state_10543){while(true){
var ret_value__6734__auto__ = (function (){try{while(true){
var result__6735__auto__ = switch__6732__auto__.call(null,state_10543);if(cljs.core.keyword_identical_QMARK_.call(null,result__6735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6735__auto__;
}
break;
}
}catch (e10552){if((e10552 instanceof Object))
{var ex__6736__auto__ = e10552;var statearr_10553_10557 = state_10543;(statearr_10553_10557[(5)] = ex__6736__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10543);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10552;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10558 = state_10543;
state_10543 = G__10558;
continue;
}
} else
{return ret_value__6734__auto__;
}
break;
}
});
state_machine__6733__auto__ = function(state_10543){
switch(arguments.length){
case 0:
return state_machine__6733__auto____0.call(this);
case 1:
return state_machine__6733__auto____1.call(this,state_10543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6733__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6733__auto____0;
state_machine__6733__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6733__auto____1;
return state_machine__6733__auto__;
})()
;})(switch__6732__auto__,c__6747__auto__,answer_chan,___$1))
})();var state__6749__auto__ = (function (){var statearr_10554 = f__6748__auto__.call(null);(statearr_10554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6747__auto__);
return statearr_10554;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6749__auto__);
});})(c__6747__auto__,answer_chan,___$1))
);
return c__6747__auto__;
});
sailing_study_guide.core.t10522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10524){var self__ = this;
var _10524__$1 = this;return self__.meta10523;
});
sailing_study_guide.core.t10522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10524,meta10523__$1){var self__ = this;
var _10524__$1 = this;return (new sailing_study_guide.core.t10522(self__.owner,self__.quiz_question,self__.question_view,meta10523__$1));
});
sailing_study_guide.core.__GT_t10522 = (function __GT_t10522(owner__$1,quiz_question__$1,question_view__$1,meta10523){return (new sailing_study_guide.core.t10522(owner__$1,quiz_question__$1,question_view__$1,meta10523));
});
}
return (new sailing_study_guide.core.t10522(owner,quiz_question,question_view,null));
});
sailing_study_guide.core.header_bar_view = (function header_bar_view(section,_){if(typeof sailing_study_guide.core.t10562 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10562 = (function (_,section,header_bar_view,meta10563){
this._ = _;
this.section = section;
this.header_bar_view = header_bar_view;
this.meta10563 = meta10563;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10562.cljs$lang$type = true;
sailing_study_guide.core.t10562.cljs$lang$ctorStr = "sailing-study-guide.core/t10562";
sailing_study_guide.core.t10562.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10562");
});
sailing_study_guide.core.t10562.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10562.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.nav({"className": "tab-bar"},React.DOM.section({"className": "left-small text-center"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_question_num)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_num_questions))),React.DOM.section({"className": "middle tab-bar-section"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.section)),React.DOM.section({"className": "right-small"},React.DOM.a({"href": "#", "className": "right-off-canvas-toggle menu-icon"},React.DOM.span(null))));
});
sailing_study_guide.core.t10562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10564){var self__ = this;
var _10564__$1 = this;return self__.meta10563;
});
sailing_study_guide.core.t10562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10564,meta10563__$1){var self__ = this;
var _10564__$1 = this;return (new sailing_study_guide.core.t10562(self__._,self__.section,self__.header_bar_view,meta10563__$1));
});
sailing_study_guide.core.__GT_t10562 = (function __GT_t10562(___$1,section__$1,header_bar_view__$1,meta10563){return (new sailing_study_guide.core.t10562(___$1,section__$1,header_bar_view__$1,meta10563));
});
}
return (new sailing_study_guide.core.t10562(_,section,header_bar_view,null));
});
sailing_study_guide.core.header_progress_view = (function header_progress_view(section,_){if(typeof sailing_study_guide.core.t10568 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10568 = (function (_,section,header_progress_view,meta10569){
this._ = _;
this.section = section;
this.header_progress_view = header_progress_view;
this.meta10569 = meta10569;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10568.cljs$lang$type = true;
sailing_study_guide.core.t10568.cljs$lang$ctorStr = "sailing-study-guide.core/t10568";
sailing_study_guide.core.t10568.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10568");
});
sailing_study_guide.core.t10568.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10568.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.div({"className": "progress"},React.DOM.span({"style": {"width": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (current_question_num / total_num_questions)))+"%")}, "className": "meter"}));
});
sailing_study_guide.core.t10568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10570){var self__ = this;
var _10570__$1 = this;return self__.meta10569;
});
sailing_study_guide.core.t10568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10570,meta10569__$1){var self__ = this;
var _10570__$1 = this;return (new sailing_study_guide.core.t10568(self__._,self__.section,self__.header_progress_view,meta10569__$1));
});
sailing_study_guide.core.__GT_t10568 = (function __GT_t10568(___$1,section__$1,header_progress_view__$1,meta10569){return (new sailing_study_guide.core.t10568(___$1,section__$1,header_progress_view__$1,meta10569));
});
}
return (new sailing_study_guide.core.t10568(_,section,header_progress_view,null));
});
sailing_study_guide.core.header_view = (function header_view(section,_){if(typeof sailing_study_guide.core.t10574 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10574 = (function (_,section,header_view,meta10575){
this._ = _;
this.section = section;
this.header_view = header_view;
this.meta10575 = meta10575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10574.cljs$lang$type = true;
sailing_study_guide.core.t10574.cljs$lang$ctorStr = "sailing-study-guide.core/t10574";
sailing_study_guide.core.t10574.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10574");
});
sailing_study_guide.core.t10574.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10574.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.div({"className": "quiz-header"},om.core.build.call(null,sailing_study_guide.core.header_bar_view,self__.section),om.core.build.call(null,sailing_study_guide.core.header_progress_view,self__.section));
});
sailing_study_guide.core.t10574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10576){var self__ = this;
var _10576__$1 = this;return self__.meta10575;
});
sailing_study_guide.core.t10574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10576,meta10575__$1){var self__ = this;
var _10576__$1 = this;return (new sailing_study_guide.core.t10574(self__._,self__.section,self__.header_view,meta10575__$1));
});
sailing_study_guide.core.__GT_t10574 = (function __GT_t10574(___$1,section__$1,header_view__$1,meta10575){return (new sailing_study_guide.core.t10574(___$1,section__$1,header_view__$1,meta10575));
});
}
return (new sailing_study_guide.core.t10574(_,section,header_view,null));
});
sailing_study_guide.core.section_view = (function section_view(section,owner){if(typeof sailing_study_guide.core.t10580 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10580 = (function (owner,section,section_view,meta10581){
this.owner = owner;
this.section = section;
this.section_view = section_view;
this.meta10581 = meta10581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10580.cljs$lang$type = true;
sailing_study_guide.core.t10580.cljs$lang$ctorStr = "sailing-study-guide.core/t10580";
sailing_study_guide.core.t10580.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10580");
});
sailing_study_guide.core.t10580.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10580.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"data-offcanvas": true, "className": "off-canvas-wrap", "id": "quiz-section"},React.DOM.div({"className": "main-content inner-wrap"},om.core.build.call(null,sailing_study_guide.core.header_view,self__.section),om.core.build.call(null,sailing_study_guide.core.question_view,sailing_study_guide.core.current_question.call(null,self__.section)),React.DOM.a({"className": "exit-off-canvas"})));
});
sailing_study_guide.core.t10580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10582){var self__ = this;
var _10582__$1 = this;return self__.meta10581;
});
sailing_study_guide.core.t10580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10582,meta10581__$1){var self__ = this;
var _10582__$1 = this;return (new sailing_study_guide.core.t10580(self__.owner,self__.section,self__.section_view,meta10581__$1));
});
sailing_study_guide.core.__GT_t10580 = (function __GT_t10580(owner__$1,section__$1,section_view__$1,meta10581){return (new sailing_study_guide.core.t10580(owner__$1,section__$1,section_view__$1,meta10581));
});
}
return (new sailing_study_guide.core.t10580(owner,section,section_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(app_state,owner){if(typeof sailing_study_guide.core.t10586 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10586 = (function (owner,app_state,quiz_view,meta10587){
this.owner = owner;
this.app_state = app_state;
this.quiz_view = quiz_view;
this.meta10587 = meta10587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10586.cljs$lang$type = true;
sailing_study_guide.core.t10586.cljs$lang$ctorStr = "sailing-study-guide.core/t10586";
sailing_study_guide.core.t10586.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10586");
});
sailing_study_guide.core.t10586.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10586.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.section_view,cljs.core.nth.call(null,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"quiz","quiz",829625914).cljs$core$IFn$_invoke$arity$1(self__.app_state)),new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(self__.app_state))));
});
sailing_study_guide.core.t10586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10588){var self__ = this;
var _10588__$1 = this;return self__.meta10587;
});
sailing_study_guide.core.t10586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10588,meta10587__$1){var self__ = this;
var _10588__$1 = this;return (new sailing_study_guide.core.t10586(self__.owner,self__.app_state,self__.quiz_view,meta10587__$1));
});
sailing_study_guide.core.__GT_t10586 = (function __GT_t10586(owner__$1,app_state__$1,quiz_view__$1,meta10587){return (new sailing_study_guide.core.t10586(owner__$1,app_state__$1,quiz_view__$1,meta10587));
});
}
return (new sailing_study_guide.core.t10586(owner,app_state,quiz_view,null));
});
var tx_chan_10589 = cljs.core.async.chan.call(null);var tx_pub_chan_10590 = cljs.core.async.pub.call(null,tx_chan_10589,new cljs.core.Keyword(null,"tag","tag",-1290361223));om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app"),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-chan","tx-chan",1461202998),tx_chan_10589], null)], null));

//# sourceMappingURL=core.js.map