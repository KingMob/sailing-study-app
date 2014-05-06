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
sailing_study_guide.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"banner","banner",3912528542),"Quiz",new cljs.core.Keyword(null,"quiz-questions","quiz-questions",2495550279),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",4143001432),"What's the small sail at front called?",new cljs.core.Keyword(null,"image","image",1114217677),null,new cljs.core.Keyword(null,"answers","answers",4461472743),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Jib",new cljs.core.Keyword(null,"correct","correct",1969069020),true,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Jab",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Jibjab",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Jibber jabber",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",4143001432),"What's the biggest danger to a boat?",new cljs.core.Keyword(null,"image","image",1114217677),null,new cljs.core.Keyword(null,"answers","answers",4461472743),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Pirates",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Giant squids",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Barnacles",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"That you'll need a bigger one",new cljs.core.Keyword(null,"correct","correct",1969069020),true,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null)], null)], null)], null)], null));
sailing_study_guide.core.answer_class = (function answer_class(answer){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unchosen","unchosen",539193021),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(answer)))
{return "answer-default";
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"correct","correct",1969069020).cljs$core$IFn$_invoke$arity$1(answer)))
{return "answer-correct success";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return "answer-incorrect alert";
} else
{return null;
}
}
}
});
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t9979 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9979 = (function (owner,answer,answer_view,meta9980){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta9980 = meta9980;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9979.cljs$lang$type = true;
sailing_study_guide.core.t9979.cljs$lang$ctorStr = "sailing-study-guide.core/t9979";
sailing_study_guide.core.t9979.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"sailing-study-guide.core/t9979");
});
sailing_study_guide.core.t9979.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t9979.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9982){var self__ = this;
var map__9983 = p__9982;var map__9983__$1 = ((cljs.core.seq_QMARK_.call(null,map__9983))?cljs.core.apply.call(null,cljs.core.hash_map,map__9983):map__9983);var choose_answer_chan = cljs.core.get.call(null,map__9983__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133));var ___$1 = this;return React.DOM.div({"className": [cljs.core.str("answer small-6 columns button "),cljs.core.str(sailing_study_guide.core.answer_class.call(null,self__.answer))].join(''), "onClick": (function (e){return cljs.core.async.put_BANG_.call(null,choose_answer_chan,self__.answer);
})},new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(self__.answer));
});
sailing_study_guide.core.t9979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9981){var self__ = this;
var _9981__$1 = this;return self__.meta9980;
});
sailing_study_guide.core.t9979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9981,meta9980__$1){var self__ = this;
var _9981__$1 = this;return (new sailing_study_guide.core.t9979(self__.owner,self__.answer,self__.answer_view,meta9980__$1));
});
sailing_study_guide.core.__GT_t9979 = (function __GT_t9979(owner__$1,answer__$1,answer_view__$1,meta9980){return (new sailing_study_guide.core.t9979(owner__$1,answer__$1,answer_view__$1,meta9980));
});
}
return (new sailing_study_guide.core.t9979(owner,answer,answer_view,null));
});
sailing_study_guide.core.quiz_question_view = (function quiz_question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t10013 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10013 = (function (owner,quiz_question,quiz_question_view,meta10014){
this.owner = owner;
this.quiz_question = quiz_question;
this.quiz_question_view = quiz_question_view;
this.meta10014 = meta10014;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10013.cljs$lang$type = true;
sailing_study_guide.core.t10013.cljs$lang$ctorStr = "sailing-study-guide.core/t10013";
sailing_study_guide.core.t10013.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"sailing-study-guide.core/t10013");
});
sailing_study_guide.core.t10013.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t10013.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10016){var self__ = this;
var map__10017 = p__10016;var map__10017__$1 = ((cljs.core.seq_QMARK_.call(null,map__10017))?cljs.core.apply.call(null,cljs.core.hash_map,map__10017):map__10017);var choose_answer_chan = cljs.core.get.call(null,map__10017__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133));var ___$1 = this;return React.DOM.div({"className": "row"},React.DOM.h3({"className": "quiz-question small-12 columns"},new cljs.core.Keyword(null,"question","question",4143001432).cljs$core$IFn$_invoke$arity$1(self__.quiz_question)),cljs.core.apply.call(null,om.dom.div,{"className": "small-12 columns"},om.core.build_all.call(null,sailing_study_guide.core.answer_view,new cljs.core.Keyword(null,"answers","answers",4461472743).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133),choose_answer_chan], null)], null))));
});
sailing_study_guide.core.t10013.prototype.om$core$IWillMount$ = true;
sailing_study_guide.core.t10013.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var choose_answer_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133));var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10030){var state_val_10031 = (state_10030[1]);if((state_val_10031 === 4))
{var inst_10020 = (state_10030[2]);var inst_10021 = cljs.core.deref.call(null,inst_10020);var inst_10022 = new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(inst_10021);var inst_10023 = [cljs.core.str("Chose "),cljs.core.str(inst_10022)].join('');var inst_10024 = console.log(inst_10023);var inst_10025 = om.core.update_BANG_.call(null,inst_10020,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"chosen","chosen",3947656932));var state_10030__$1 = (function (){var statearr_10032 = state_10030;(statearr_10032[7] = inst_10025);
(statearr_10032[8] = inst_10024);
return statearr_10032;
})();var statearr_10033_10042 = state_10030__$1;(statearr_10033_10042[2] = null);
(statearr_10033_10042[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10031 === 3))
{var inst_10028 = (state_10030[2]);var state_10030__$1 = state_10030;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10030__$1,inst_10028);
} else
{if((state_val_10031 === 2))
{var state_10030__$1 = state_10030;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10030__$1,4,choose_answer_chan);
} else
{if((state_val_10031 === 1))
{var state_10030__$1 = state_10030;var statearr_10034_10043 = state_10030__$1;(statearr_10034_10043[2] = null);
(statearr_10034_10043[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_10038 = [null,null,null,null,null,null,null,null,null];(statearr_10038[0] = state_machine__6178__auto__);
(statearr_10038[1] = 1);
return statearr_10038;
});
var state_machine__6178__auto____1 = (function (state_10030){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10030);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10039){if((e10039 instanceof Object))
{var ex__6181__auto__ = e10039;var statearr_10040_10044 = state_10030;(statearr_10040_10044[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10030);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10039;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10045 = state_10030;
state_10030 = G__10045;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10030){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10041 = f__6193__auto__.call(null);(statearr_10041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_10041;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
sailing_study_guide.core.t10013.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t10013.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133),cljs.core.async.chan.call(null)], null);
});
sailing_study_guide.core.t10013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10015){var self__ = this;
var _10015__$1 = this;return self__.meta10014;
});
sailing_study_guide.core.t10013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10015,meta10014__$1){var self__ = this;
var _10015__$1 = this;return (new sailing_study_guide.core.t10013(self__.owner,self__.quiz_question,self__.quiz_question_view,meta10014__$1));
});
sailing_study_guide.core.__GT_t10013 = (function __GT_t10013(owner__$1,quiz_question__$1,quiz_question_view__$1,meta10014){return (new sailing_study_guide.core.t10013(owner__$1,quiz_question__$1,quiz_question_view__$1,meta10014));
});
}
return (new sailing_study_guide.core.t10013(owner,quiz_question,quiz_question_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(quiz,owner){if(typeof sailing_study_guide.core.t10049 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10049 = (function (owner,quiz,quiz_view,meta10050){
this.owner = owner;
this.quiz = quiz;
this.quiz_view = quiz_view;
this.meta10050 = meta10050;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10049.cljs$lang$type = true;
sailing_study_guide.core.t10049.cljs$lang$ctorStr = "sailing-study-guide.core/t10049";
sailing_study_guide.core.t10049.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"sailing-study-guide.core/t10049");
});
sailing_study_guide.core.t10049.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10049.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "row"},React.DOM.h1({"className": "small-12 columns"},new cljs.core.Keyword(null,"banner","banner",3912528542).cljs$core$IFn$_invoke$arity$1(self__.quiz)),cljs.core.apply.call(null,om.dom.div,{"className": "small-12 columns"},om.core.build_all.call(null,sailing_study_guide.core.quiz_question_view,new cljs.core.Keyword(null,"quiz-questions","quiz-questions",2495550279).cljs$core$IFn$_invoke$arity$1(self__.quiz))));
});
sailing_study_guide.core.t10049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10051){var self__ = this;
var _10051__$1 = this;return self__.meta10050;
});
sailing_study_guide.core.t10049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10051,meta10050__$1){var self__ = this;
var _10051__$1 = this;return (new sailing_study_guide.core.t10049(self__.owner,self__.quiz,self__.quiz_view,meta10050__$1));
});
sailing_study_guide.core.__GT_t10049 = (function __GT_t10049(owner__$1,quiz__$1,quiz_view__$1,meta10050){return (new sailing_study_guide.core.t10049(owner__$1,quiz__$1,quiz_view__$1,meta10050));
});
}
return (new sailing_study_guide.core.t10049(owner,quiz,quiz_view,null));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map