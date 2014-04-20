// Compiled by ClojureScript 0.0-2173
goog.provide('sailing_study_guide.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
sailing_study_guide.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"banner","banner",3912528542),"Quiz",new cljs.core.Keyword(null,"quiz-questions","quiz-questions",2495550279),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",4143001432),"What's the small sail at front called?",new cljs.core.Keyword(null,"image","image",1114217677),null,new cljs.core.Keyword(null,"answers","answers",4461472743),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Jib",new cljs.core.Keyword(null,"correct","correct",1969069020),true,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Jab",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Jibjab",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Mast",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",4143001432),"What's the biggest danger to a boat?",new cljs.core.Keyword(null,"image","image",1114217677),null,new cljs.core.Keyword(null,"answers","answers",4461472743),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Pirates",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Giant squids",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Barnacles",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"That you'll need a bigger one",new cljs.core.Keyword(null,"correct","correct",1969069020),true,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null)], null)], null)], null)], null));
sailing_study_guide.core.answer_class = (function answer_class(answer){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unchosen","unchosen",539193021),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(answer)))
{return "answer-default";
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"correct","correct",1969069020).cljs$core$IFn$_invoke$arity$1(answer)))
{return "answer-correct";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return "answer-incorrect";
} else
{return null;
}
}
}
});
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t14176 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t14176 = (function (owner,answer,answer_view,meta14177){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta14177 = meta14177;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t14176.cljs$lang$type = true;
sailing_study_guide.core.t14176.cljs$lang$ctorStr = "sailing-study-guide.core/t14176";
sailing_study_guide.core.t14176.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"sailing-study-guide.core/t14176");
});
sailing_study_guide.core.t14176.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t14176.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__14179){var self__ = this;
var map__14180 = p__14179;var map__14180__$1 = ((cljs.core.seq_QMARK_.call(null,map__14180))?cljs.core.apply.call(null,cljs.core.hash_map,map__14180):map__14180);var choose_answer_chan = cljs.core.get.call(null,map__14180__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133));var ___$1 = this;return React.DOM.li({"className": clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["answer",sailing_study_guide.core.answer_class.call(null,self__.answer)], null)), "onClick": (function (){return cljs.core.async.put_BANG_.call(null,choose_answer_chan,self__.answer);
})},new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(self__.answer));
});
sailing_study_guide.core.t14176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14178){var self__ = this;
var _14178__$1 = this;return self__.meta14177;
});
sailing_study_guide.core.t14176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14178,meta14177__$1){var self__ = this;
var _14178__$1 = this;return (new sailing_study_guide.core.t14176(self__.owner,self__.answer,self__.answer_view,meta14177__$1));
});
sailing_study_guide.core.__GT_t14176 = (function __GT_t14176(owner__$1,answer__$1,answer_view__$1,meta14177){return (new sailing_study_guide.core.t14176(owner__$1,answer__$1,answer_view__$1,meta14177));
});
}
return (new sailing_study_guide.core.t14176(owner,answer,answer_view,null));
});
sailing_study_guide.core.quiz_question_view = (function quiz_question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t14210 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t14210 = (function (owner,quiz_question,quiz_question_view,meta14211){
this.owner = owner;
this.quiz_question = quiz_question;
this.quiz_question_view = quiz_question_view;
this.meta14211 = meta14211;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t14210.cljs$lang$type = true;
sailing_study_guide.core.t14210.cljs$lang$ctorStr = "sailing-study-guide.core/t14210";
sailing_study_guide.core.t14210.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"sailing-study-guide.core/t14210");
});
sailing_study_guide.core.t14210.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t14210.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__14213){var self__ = this;
var map__14214 = p__14213;var map__14214__$1 = ((cljs.core.seq_QMARK_.call(null,map__14214))?cljs.core.apply.call(null,cljs.core.hash_map,map__14214):map__14214);var choose_answer_chan = cljs.core.get.call(null,map__14214__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133));var ___$1 = this;return React.DOM.div(null,React.DOM.h3({"className": "quiz-question"},new cljs.core.Keyword(null,"question","question",4143001432).cljs$core$IFn$_invoke$arity$1(self__.quiz_question)),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,sailing_study_guide.core.answer_view,new cljs.core.Keyword(null,"answers","answers",4461472743).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133),choose_answer_chan], null)], null))));
});
sailing_study_guide.core.t14210.prototype.om$core$IWillMount$ = true;
sailing_study_guide.core.t14210.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var choose_answer_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133));var c__8068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8069__auto__ = (function (){var switch__8053__auto__ = (function (state_14227){var state_val_14228 = (state_14227[1]);if((state_val_14228 === 4))
{var inst_14217 = (state_14227[2]);var inst_14218 = cljs.core.deref.call(null,inst_14217);var inst_14219 = new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(inst_14218);var inst_14220 = [cljs.core.str("Chose "),cljs.core.str(inst_14219)].join('');var inst_14221 = console.log(inst_14220);var inst_14222 = om.core.update_BANG_.call(null,inst_14217,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"chosen","chosen",3947656932));var state_14227__$1 = (function (){var statearr_14229 = state_14227;(statearr_14229[7] = inst_14222);
(statearr_14229[8] = inst_14221);
return statearr_14229;
})();var statearr_14230_14239 = state_14227__$1;(statearr_14230_14239[2] = null);
(statearr_14230_14239[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14228 === 3))
{var inst_14225 = (state_14227[2]);var state_14227__$1 = state_14227;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14227__$1,inst_14225);
} else
{if((state_val_14228 === 2))
{var state_14227__$1 = state_14227;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14227__$1,4,choose_answer_chan);
} else
{if((state_val_14228 === 1))
{var state_14227__$1 = state_14227;var statearr_14231_14240 = state_14227__$1;(statearr_14231_14240[2] = null);
(statearr_14231_14240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__8053__auto__){
return (function() {
var state_machine__8054__auto__ = null;
var state_machine__8054__auto____0 = (function (){var statearr_14235 = [null,null,null,null,null,null,null,null,null];(statearr_14235[0] = state_machine__8054__auto__);
(statearr_14235[1] = 1);
return statearr_14235;
});
var state_machine__8054__auto____1 = (function (state_14227){while(true){
var ret_value__8055__auto__ = (function (){try{while(true){
var result__8056__auto__ = switch__8053__auto__.call(null,state_14227);if(cljs.core.keyword_identical_QMARK_.call(null,result__8056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8056__auto__;
}
break;
}
}catch (e14236){if((e14236 instanceof Object))
{var ex__8057__auto__ = e14236;var statearr_14237_14241 = state_14227;(statearr_14237_14241[5] = ex__8057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14227);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14236;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14242 = state_14227;
state_14227 = G__14242;
continue;
}
} else
{return ret_value__8055__auto__;
}
break;
}
});
state_machine__8054__auto__ = function(state_14227){
switch(arguments.length){
case 0:
return state_machine__8054__auto____0.call(this);
case 1:
return state_machine__8054__auto____1.call(this,state_14227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8054__auto____0;
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8054__auto____1;
return state_machine__8054__auto__;
})()
;})(switch__8053__auto__))
})();var state__8070__auto__ = (function (){var statearr_14238 = f__8069__auto__.call(null);(statearr_14238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8068__auto__);
return statearr_14238;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8070__auto__);
}));
return c__8068__auto__;
});
sailing_study_guide.core.t14210.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t14210.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133),cljs.core.async.chan.call(null)], null);
});
sailing_study_guide.core.t14210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14212){var self__ = this;
var _14212__$1 = this;return self__.meta14211;
});
sailing_study_guide.core.t14210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14212,meta14211__$1){var self__ = this;
var _14212__$1 = this;return (new sailing_study_guide.core.t14210(self__.owner,self__.quiz_question,self__.quiz_question_view,meta14211__$1));
});
sailing_study_guide.core.__GT_t14210 = (function __GT_t14210(owner__$1,quiz_question__$1,quiz_question_view__$1,meta14211){return (new sailing_study_guide.core.t14210(owner__$1,quiz_question__$1,quiz_question_view__$1,meta14211));
});
}
return (new sailing_study_guide.core.t14210(owner,quiz_question,quiz_question_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(quiz,owner){if(typeof sailing_study_guide.core.t14246 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t14246 = (function (owner,quiz,quiz_view,meta14247){
this.owner = owner;
this.quiz = quiz;
this.quiz_view = quiz_view;
this.meta14247 = meta14247;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t14246.cljs$lang$type = true;
sailing_study_guide.core.t14246.cljs$lang$ctorStr = "sailing-study-guide.core/t14246";
sailing_study_guide.core.t14246.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"sailing-study-guide.core/t14246");
});
sailing_study_guide.core.t14246.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t14246.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h1(null,new cljs.core.Keyword(null,"banner","banner",3912528542).cljs$core$IFn$_invoke$arity$1(self__.quiz)),cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,sailing_study_guide.core.quiz_question_view,new cljs.core.Keyword(null,"quiz-questions","quiz-questions",2495550279).cljs$core$IFn$_invoke$arity$1(self__.quiz))));
});
sailing_study_guide.core.t14246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14248){var self__ = this;
var _14248__$1 = this;return self__.meta14247;
});
sailing_study_guide.core.t14246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14248,meta14247__$1){var self__ = this;
var _14248__$1 = this;return (new sailing_study_guide.core.t14246(self__.owner,self__.quiz,self__.quiz_view,meta14247__$1));
});
sailing_study_guide.core.__GT_t14246 = (function __GT_t14246(owner__$1,quiz__$1,quiz_view__$1,meta14247){return (new sailing_study_guide.core.t14246(owner__$1,quiz__$1,quiz_view__$1,meta14247));
});
}
return (new sailing_study_guide.core.t14246(owner,quiz,quiz_view,null));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map