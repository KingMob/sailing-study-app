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
sailing_study_guide.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"banner","banner",3912528542),"Quiz",new cljs.core.Keyword(null,"sections","sections",1961841056),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Parts of the boat",new cljs.core.Keyword(null,"questions","questions",3526636735),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",4143001432),"What is placed between the boat and the dock to cushion the hull?",new cljs.core.Keyword(null,"image","image",1114217677),null,new cljs.core.Keyword(null,"answers","answers",4461472743),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Tiller",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Boomvang",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Fender",new cljs.core.Keyword(null,"correct","correct",1969069020),true,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Gooseneck",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",4143001432),"What's the small sail at front called?",new cljs.core.Keyword(null,"image","image",1114217677),null,new cljs.core.Keyword(null,"answers","answers",4461472743),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Jib",new cljs.core.Keyword(null,"correct","correct",1969069020),true,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Jab",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Jibjab",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Jibber jabber",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",4143001432),"What's the biggest danger to a boat?",new cljs.core.Keyword(null,"image","image",1114217677),null,new cljs.core.Keyword(null,"answers","answers",4461472743),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Pirates",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Giant squids",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Barnacles",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"That you'll need a bigger one",new cljs.core.Keyword(null,"correct","correct",1969069020),true,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null)], null)], null)], null)], null)], null)], null));
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
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t9261 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9261 = (function (owner,answer,answer_view,meta9262){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta9262 = meta9262;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9261.cljs$lang$type = true;
sailing_study_guide.core.t9261.cljs$lang$ctorStr = "sailing-study-guide.core/t9261";
sailing_study_guide.core.t9261.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"sailing-study-guide.core/t9261");
});
sailing_study_guide.core.t9261.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t9261.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9264){var self__ = this;
var map__9265 = p__9264;var map__9265__$1 = ((cljs.core.seq_QMARK_.call(null,map__9265))?cljs.core.apply.call(null,cljs.core.hash_map,map__9265):map__9265);var choose_answer_chan = cljs.core.get.call(null,map__9265__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133));var ___$1 = this;return React.DOM.div({"className": [cljs.core.str("answer small-6 columns button "),cljs.core.str(sailing_study_guide.core.answer_class.call(null,self__.answer))].join(''), "onClick": (function (e){return cljs.core.async.put_BANG_.call(null,choose_answer_chan,self__.answer);
})},new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(self__.answer));
});
sailing_study_guide.core.t9261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9263){var self__ = this;
var _9263__$1 = this;return self__.meta9262;
});
sailing_study_guide.core.t9261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9263,meta9262__$1){var self__ = this;
var _9263__$1 = this;return (new sailing_study_guide.core.t9261(self__.owner,self__.answer,self__.answer_view,meta9262__$1));
});
sailing_study_guide.core.__GT_t9261 = (function __GT_t9261(owner__$1,answer__$1,answer_view__$1,meta9262){return (new sailing_study_guide.core.t9261(owner__$1,answer__$1,answer_view__$1,meta9262));
});
}
return (new sailing_study_guide.core.t9261(owner,answer,answer_view,null));
});
sailing_study_guide.core.quiz_question_view = (function quiz_question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t9295 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9295 = (function (owner,quiz_question,quiz_question_view,meta9296){
this.owner = owner;
this.quiz_question = quiz_question;
this.quiz_question_view = quiz_question_view;
this.meta9296 = meta9296;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9295.cljs$lang$type = true;
sailing_study_guide.core.t9295.cljs$lang$ctorStr = "sailing-study-guide.core/t9295";
sailing_study_guide.core.t9295.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"sailing-study-guide.core/t9295");
});
sailing_study_guide.core.t9295.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t9295.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9298){var self__ = this;
var map__9299 = p__9298;var map__9299__$1 = ((cljs.core.seq_QMARK_.call(null,map__9299))?cljs.core.apply.call(null,cljs.core.hash_map,map__9299):map__9299);var choose_answer_chan = cljs.core.get.call(null,map__9299__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133));var ___$1 = this;return React.DOM.div({"className": "row"},React.DOM.h3({"className": "quiz-question small-12 columns"},new cljs.core.Keyword(null,"question","question",4143001432).cljs$core$IFn$_invoke$arity$1(self__.quiz_question)),cljs.core.apply.call(null,om.dom.div,{"className": "small-12 columns"},om.core.build_all.call(null,sailing_study_guide.core.answer_view,new cljs.core.Keyword(null,"answers","answers",4461472743).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133),choose_answer_chan], null)], null))));
});
sailing_study_guide.core.t9295.prototype.om$core$IWillMount$ = true;
sailing_study_guide.core.t9295.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var choose_answer_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133));var c__6222__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6223__auto__ = (function (){var switch__6207__auto__ = (function (state_9312){var state_val_9313 = (state_9312[1]);if((state_val_9313 === 4))
{var inst_9302 = (state_9312[2]);var inst_9303 = cljs.core.deref.call(null,inst_9302);var inst_9304 = new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(inst_9303);var inst_9305 = [cljs.core.str("Chose "),cljs.core.str(inst_9304)].join('');var inst_9306 = console.log(inst_9305);var inst_9307 = om.core.update_BANG_.call(null,inst_9302,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"chosen","chosen",3947656932));var state_9312__$1 = (function (){var statearr_9314 = state_9312;(statearr_9314[7] = inst_9307);
(statearr_9314[8] = inst_9306);
return statearr_9314;
})();var statearr_9315_9324 = state_9312__$1;(statearr_9315_9324[2] = null);
(statearr_9315_9324[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9313 === 3))
{var inst_9310 = (state_9312[2]);var state_9312__$1 = state_9312;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9312__$1,inst_9310);
} else
{if((state_val_9313 === 2))
{var state_9312__$1 = state_9312;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9312__$1,4,choose_answer_chan);
} else
{if((state_val_9313 === 1))
{var state_9312__$1 = state_9312;var statearr_9316_9325 = state_9312__$1;(statearr_9316_9325[2] = null);
(statearr_9316_9325[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6207__auto__){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_9320 = [null,null,null,null,null,null,null,null,null];(statearr_9320[0] = state_machine__6208__auto__);
(statearr_9320[1] = 1);
return statearr_9320;
});
var state_machine__6208__auto____1 = (function (state_9312){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_9312);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e9321){if((e9321 instanceof Object))
{var ex__6211__auto__ = e9321;var statearr_9322_9326 = state_9312;(statearr_9322_9326[5] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9312);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9321;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9327 = state_9312;
state_9312 = G__9327;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_9312){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_9312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__))
})();var state__6224__auto__ = (function (){var statearr_9323 = f__6223__auto__.call(null);(statearr_9323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6222__auto__);
return statearr_9323;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6224__auto__);
}));
return c__6222__auto__;
});
sailing_study_guide.core.t9295.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t9295.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133),cljs.core.async.chan.call(null)], null);
});
sailing_study_guide.core.t9295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9297){var self__ = this;
var _9297__$1 = this;return self__.meta9296;
});
sailing_study_guide.core.t9295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9297,meta9296__$1){var self__ = this;
var _9297__$1 = this;return (new sailing_study_guide.core.t9295(self__.owner,self__.quiz_question,self__.quiz_question_view,meta9296__$1));
});
sailing_study_guide.core.__GT_t9295 = (function __GT_t9295(owner__$1,quiz_question__$1,quiz_question_view__$1,meta9296){return (new sailing_study_guide.core.t9295(owner__$1,quiz_question__$1,quiz_question_view__$1,meta9296));
});
}
return (new sailing_study_guide.core.t9295(owner,quiz_question,quiz_question_view,null));
});
sailing_study_guide.core.section_view = (function section_view(section,owner){if(typeof sailing_study_guide.core.t9331 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9331 = (function (owner,section,section_view,meta9332){
this.owner = owner;
this.section = section;
this.section_view = section_view;
this.meta9332 = meta9332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9331.cljs$lang$type = true;
sailing_study_guide.core.t9331.cljs$lang$ctorStr = "sailing-study-guide.core/t9331";
sailing_study_guide.core.t9331.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"sailing-study-guide.core/t9331");
});
sailing_study_guide.core.t9331.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t9331.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.quiz_question_view,cljs.core.get.call(null,new cljs.core.Keyword(null,"questions","questions",3526636735).cljs$core$IFn$_invoke$arity$1(self__.section),new cljs.core.Keyword(null,"current-question","current-question",3546811692).cljs$core$IFn$_invoke$arity$1(state))));
});
sailing_study_guide.core.t9331.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t9331.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-question","current-question",3546811692),0], null);
});
sailing_study_guide.core.t9331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9333){var self__ = this;
var _9333__$1 = this;return self__.meta9332;
});
sailing_study_guide.core.t9331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9333,meta9332__$1){var self__ = this;
var _9333__$1 = this;return (new sailing_study_guide.core.t9331(self__.owner,self__.section,self__.section_view,meta9332__$1));
});
sailing_study_guide.core.__GT_t9331 = (function __GT_t9331(owner__$1,section__$1,section_view__$1,meta9332){return (new sailing_study_guide.core.t9331(owner__$1,section__$1,section_view__$1,meta9332));
});
}
return (new sailing_study_guide.core.t9331(owner,section,section_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(quiz,owner){if(typeof sailing_study_guide.core.t9339 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9339 = (function (owner,quiz,quiz_view,meta9340){
this.owner = owner;
this.quiz = quiz;
this.quiz_view = quiz_view;
this.meta9340 = meta9340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9339.cljs$lang$type = true;
sailing_study_guide.core.t9339.cljs$lang$ctorStr = "sailing-study-guide.core/t9339";
sailing_study_guide.core.t9339.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"sailing-study-guide.core/t9339");
});
sailing_study_guide.core.t9339.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t9339.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9342){var self__ = this;
var map__9343 = p__9342;var map__9343__$1 = ((cljs.core.seq_QMARK_.call(null,map__9343))?cljs.core.apply.call(null,cljs.core.hash_map,map__9343):map__9343);var current_section = cljs.core.get.call(null,map__9343__$1,new cljs.core.Keyword(null,"current-section","current-section",1995082243));var ___$1 = this;return React.DOM.div({"className": "row"},React.DOM.h1({"className": "small-12 columns"},new cljs.core.Keyword(null,"banner","banner",3912528542).cljs$core$IFn$_invoke$arity$1(self__.quiz)),React.DOM.div({"className": "small-12 columns"},om.core.build.call(null,sailing_study_guide.core.section_view,cljs.core.nth.call(null,new cljs.core.Keyword(null,"sections","sections",1961841056).cljs$core$IFn$_invoke$arity$1(self__.quiz),current_section))));
});
sailing_study_guide.core.t9339.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t9339.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-section","current-section",1995082243),0], null);
});
sailing_study_guide.core.t9339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9341){var self__ = this;
var _9341__$1 = this;return self__.meta9340;
});
sailing_study_guide.core.t9339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9341,meta9340__$1){var self__ = this;
var _9341__$1 = this;return (new sailing_study_guide.core.t9339(self__.owner,self__.quiz,self__.quiz_view,meta9340__$1));
});
sailing_study_guide.core.__GT_t9339 = (function __GT_t9339(owner__$1,quiz__$1,quiz_view__$1,meta9340){return (new sailing_study_guide.core.t9339(owner__$1,quiz__$1,quiz_view__$1,meta9340));
});
}
return (new sailing_study_guide.core.t9339(owner,quiz,quiz_view,null));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map