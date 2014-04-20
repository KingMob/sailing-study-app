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
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t14268 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t14268 = (function (owner,answer,answer_view,meta14269){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta14269 = meta14269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t14268.cljs$lang$type = true;
sailing_study_guide.core.t14268.cljs$lang$ctorStr = "sailing-study-guide.core/t14268";
sailing_study_guide.core.t14268.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"sailing-study-guide.core/t14268");
});
sailing_study_guide.core.t14268.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t14268.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__14271){var self__ = this;
var map__14272 = p__14271;var map__14272__$1 = ((cljs.core.seq_QMARK_.call(null,map__14272))?cljs.core.apply.call(null,cljs.core.hash_map,map__14272):map__14272);var choose_answer_chan = cljs.core.get.call(null,map__14272__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133));var ___$1 = this;return React.DOM.li({"className": clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["answer",sailing_study_guide.core.answer_class.call(null,self__.answer)], null)), "onClick": (function (e){return cljs.core.async.put_BANG_.call(null,choose_answer_chan,self__.answer);
})},new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(self__.answer));
});
sailing_study_guide.core.t14268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14270){var self__ = this;
var _14270__$1 = this;return self__.meta14269;
});
sailing_study_guide.core.t14268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14270,meta14269__$1){var self__ = this;
var _14270__$1 = this;return (new sailing_study_guide.core.t14268(self__.owner,self__.answer,self__.answer_view,meta14269__$1));
});
sailing_study_guide.core.__GT_t14268 = (function __GT_t14268(owner__$1,answer__$1,answer_view__$1,meta14269){return (new sailing_study_guide.core.t14268(owner__$1,answer__$1,answer_view__$1,meta14269));
});
}
return (new sailing_study_guide.core.t14268(owner,answer,answer_view,null));
});
sailing_study_guide.core.quiz_question_view = (function quiz_question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t14302 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t14302 = (function (owner,quiz_question,quiz_question_view,meta14303){
this.owner = owner;
this.quiz_question = quiz_question;
this.quiz_question_view = quiz_question_view;
this.meta14303 = meta14303;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t14302.cljs$lang$type = true;
sailing_study_guide.core.t14302.cljs$lang$ctorStr = "sailing-study-guide.core/t14302";
sailing_study_guide.core.t14302.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"sailing-study-guide.core/t14302");
});
sailing_study_guide.core.t14302.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t14302.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__14305){var self__ = this;
var map__14306 = p__14305;var map__14306__$1 = ((cljs.core.seq_QMARK_.call(null,map__14306))?cljs.core.apply.call(null,cljs.core.hash_map,map__14306):map__14306);var choose_answer_chan = cljs.core.get.call(null,map__14306__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133));var ___$1 = this;return React.DOM.div(null,React.DOM.h3({"className": "quiz-question"},new cljs.core.Keyword(null,"question","question",4143001432).cljs$core$IFn$_invoke$arity$1(self__.quiz_question)),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,sailing_study_guide.core.answer_view,new cljs.core.Keyword(null,"answers","answers",4461472743).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133),choose_answer_chan], null)], null))));
});
sailing_study_guide.core.t14302.prototype.om$core$IWillMount$ = true;
sailing_study_guide.core.t14302.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var choose_answer_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133));var c__8068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8069__auto__ = (function (){var switch__8053__auto__ = (function (state_14319){var state_val_14320 = (state_14319[1]);if((state_val_14320 === 4))
{var inst_14309 = (state_14319[2]);var inst_14310 = cljs.core.deref.call(null,inst_14309);var inst_14311 = new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(inst_14310);var inst_14312 = [cljs.core.str("Chose "),cljs.core.str(inst_14311)].join('');var inst_14313 = console.log(inst_14312);var inst_14314 = om.core.update_BANG_.call(null,inst_14309,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"chosen","chosen",3947656932));var state_14319__$1 = (function (){var statearr_14321 = state_14319;(statearr_14321[7] = inst_14314);
(statearr_14321[8] = inst_14313);
return statearr_14321;
})();var statearr_14322_14331 = state_14319__$1;(statearr_14322_14331[2] = null);
(statearr_14322_14331[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14320 === 3))
{var inst_14317 = (state_14319[2]);var state_14319__$1 = state_14319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14319__$1,inst_14317);
} else
{if((state_val_14320 === 2))
{var state_14319__$1 = state_14319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14319__$1,4,choose_answer_chan);
} else
{if((state_val_14320 === 1))
{var state_14319__$1 = state_14319;var statearr_14323_14332 = state_14319__$1;(statearr_14323_14332[2] = null);
(statearr_14323_14332[1] = 2);
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
var state_machine__8054__auto____0 = (function (){var statearr_14327 = [null,null,null,null,null,null,null,null,null];(statearr_14327[0] = state_machine__8054__auto__);
(statearr_14327[1] = 1);
return statearr_14327;
});
var state_machine__8054__auto____1 = (function (state_14319){while(true){
var ret_value__8055__auto__ = (function (){try{while(true){
var result__8056__auto__ = switch__8053__auto__.call(null,state_14319);if(cljs.core.keyword_identical_QMARK_.call(null,result__8056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8056__auto__;
}
break;
}
}catch (e14328){if((e14328 instanceof Object))
{var ex__8057__auto__ = e14328;var statearr_14329_14333 = state_14319;(statearr_14329_14333[5] = ex__8057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14319);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14328;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14334 = state_14319;
state_14319 = G__14334;
continue;
}
} else
{return ret_value__8055__auto__;
}
break;
}
});
state_machine__8054__auto__ = function(state_14319){
switch(arguments.length){
case 0:
return state_machine__8054__auto____0.call(this);
case 1:
return state_machine__8054__auto____1.call(this,state_14319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8054__auto____0;
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8054__auto____1;
return state_machine__8054__auto__;
})()
;})(switch__8053__auto__))
})();var state__8070__auto__ = (function (){var statearr_14330 = f__8069__auto__.call(null);(statearr_14330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8068__auto__);
return statearr_14330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8070__auto__);
}));
return c__8068__auto__;
});
sailing_study_guide.core.t14302.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t14302.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133),cljs.core.async.chan.call(null)], null);
});
sailing_study_guide.core.t14302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14304){var self__ = this;
var _14304__$1 = this;return self__.meta14303;
});
sailing_study_guide.core.t14302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14304,meta14303__$1){var self__ = this;
var _14304__$1 = this;return (new sailing_study_guide.core.t14302(self__.owner,self__.quiz_question,self__.quiz_question_view,meta14303__$1));
});
sailing_study_guide.core.__GT_t14302 = (function __GT_t14302(owner__$1,quiz_question__$1,quiz_question_view__$1,meta14303){return (new sailing_study_guide.core.t14302(owner__$1,quiz_question__$1,quiz_question_view__$1,meta14303));
});
}
return (new sailing_study_guide.core.t14302(owner,quiz_question,quiz_question_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(quiz,owner){if(typeof sailing_study_guide.core.t14338 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t14338 = (function (owner,quiz,quiz_view,meta14339){
this.owner = owner;
this.quiz = quiz;
this.quiz_view = quiz_view;
this.meta14339 = meta14339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t14338.cljs$lang$type = true;
sailing_study_guide.core.t14338.cljs$lang$ctorStr = "sailing-study-guide.core/t14338";
sailing_study_guide.core.t14338.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"sailing-study-guide.core/t14338");
});
sailing_study_guide.core.t14338.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t14338.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h1(null,new cljs.core.Keyword(null,"banner","banner",3912528542).cljs$core$IFn$_invoke$arity$1(self__.quiz)),cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,sailing_study_guide.core.quiz_question_view,new cljs.core.Keyword(null,"quiz-questions","quiz-questions",2495550279).cljs$core$IFn$_invoke$arity$1(self__.quiz))));
});
sailing_study_guide.core.t14338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14340){var self__ = this;
var _14340__$1 = this;return self__.meta14339;
});
sailing_study_guide.core.t14338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14340,meta14339__$1){var self__ = this;
var _14340__$1 = this;return (new sailing_study_guide.core.t14338(self__.owner,self__.quiz,self__.quiz_view,meta14339__$1));
});
sailing_study_guide.core.__GT_t14338 = (function __GT_t14338(owner__$1,quiz__$1,quiz_view__$1,meta14339){return (new sailing_study_guide.core.t14338(owner__$1,quiz__$1,quiz_view__$1,meta14339));
});
}
return (new sailing_study_guide.core.t14338(owner,quiz,quiz_view,null));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map