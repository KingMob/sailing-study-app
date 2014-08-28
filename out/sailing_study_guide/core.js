// Compiled by ClojureScript 0.0-2322
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
cljs.core._STAR_print_meta_STAR_ = true;
sailing_study_guide.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"banner","banner",177448281),"Quiz",new cljs.core.Keyword(null,"current-section","current-section",1519906460),(0),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Parts of the boat",new cljs.core.Keyword(null,"current-question","current-question",-749753188),(0),new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"What is placed between the boat and the dock to cushion the hull?",new cljs.core.Keyword(null,"image","image",-58725096),null,new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Tiller",new cljs.core.Keyword(null,"correct","correct",984806334),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Boomvang",new cljs.core.Keyword(null,"correct","correct",984806334),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Fender",new cljs.core.Keyword(null,"correct","correct",984806334),true,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Gooseneck",new cljs.core.Keyword(null,"correct","correct",984806334),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"What's the small sail at front called?",new cljs.core.Keyword(null,"image","image",-58725096),null,new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Jib",new cljs.core.Keyword(null,"correct","correct",984806334),true,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Jab",new cljs.core.Keyword(null,"correct","correct",984806334),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Jibjab",new cljs.core.Keyword(null,"correct","correct",984806334),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Jibber jabber",new cljs.core.Keyword(null,"correct","correct",984806334),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"What's the biggest danger to a boat?",new cljs.core.Keyword(null,"image","image",-58725096),null,new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Pirates",new cljs.core.Keyword(null,"correct","correct",984806334),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Giant squids",new cljs.core.Keyword(null,"correct","correct",984806334),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Barnacles",new cljs.core.Keyword(null,"correct","correct",984806334),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"That you'll need a bigger one",new cljs.core.Keyword(null,"correct","correct",984806334),true,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null)], null)], null)], null)], null)], null)], null));
sailing_study_guide.core.current_section = (function current_section(app_state){return new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(app_state).call(null,new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(app_state));
});
sailing_study_guide.core.current_question = (function current_question(app_state){return new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.current_section.call(null,app_state)).call(null,new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(app_state));
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
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t15361 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t15361 = (function (owner,answer,answer_view,meta15362){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta15362 = meta15362;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t15361.cljs$lang$type = true;
sailing_study_guide.core.t15361.cljs$lang$ctorStr = "sailing-study-guide.core/t15361";
sailing_study_guide.core.t15361.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t15361");
});
sailing_study_guide.core.t15361.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t15361.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__15364){var self__ = this;
var map__15365 = p__15364;var map__15365__$1 = ((cljs.core.seq_QMARK_.call(null,map__15365))?cljs.core.apply.call(null,cljs.core.hash_map,map__15365):map__15365);var choose_answer_chan = cljs.core.get.call(null,map__15365__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return React.DOM.div({"className": "answer-container"},React.DOM.button({"className": ("answer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.answer_css_class.call(null,self__.answer))), "onClick": ((function (___$1,map__15365,map__15365__$1,choose_answer_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,choose_answer_chan,cljs.core.deref.call(null,self__.answer));
});})(___$1,map__15365,map__15365__$1,choose_answer_chan))
},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.answer)));
});
sailing_study_guide.core.t15361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15363){var self__ = this;
var _15363__$1 = this;return self__.meta15362;
});
sailing_study_guide.core.t15361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15363,meta15362__$1){var self__ = this;
var _15363__$1 = this;return (new sailing_study_guide.core.t15361(self__.owner,self__.answer,self__.answer_view,meta15362__$1));
});
sailing_study_guide.core.__GT_t15361 = (function __GT_t15361(owner__$1,answer__$1,answer_view__$1,meta15362){return (new sailing_study_guide.core.t15361(owner__$1,answer__$1,answer_view__$1,meta15362));
});
}
return (new sailing_study_guide.core.t15361(owner,answer,answer_view,null));
});
sailing_study_guide.core.answer_section_view = (function answer_section_view(answers,owner){if(typeof sailing_study_guide.core.t15371 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t15371 = (function (owner,answers,answer_section_view,meta15372){
this.owner = owner;
this.answers = answers;
this.answer_section_view = answer_section_view;
this.meta15372 = meta15372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t15371.cljs$lang$type = true;
sailing_study_guide.core.t15371.cljs$lang$ctorStr = "sailing-study-guide.core/t15371";
sailing_study_guide.core.t15371.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t15371");
});
sailing_study_guide.core.t15371.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t15371.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__15374){var self__ = this;
var map__15375 = p__15374;var map__15375__$1 = ((cljs.core.seq_QMARK_.call(null,map__15375))?cljs.core.apply.call(null,cljs.core.hash_map,map__15375):map__15375);var choose_answer_chan = cljs.core.get.call(null,map__15375__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "answer-section"},om.core.build_all.call(null,sailing_study_guide.core.answer_view,self__.answers,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),choose_answer_chan], null)], null)));
});
sailing_study_guide.core.t15371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15373){var self__ = this;
var _15373__$1 = this;return self__.meta15372;
});
sailing_study_guide.core.t15371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15373,meta15372__$1){var self__ = this;
var _15373__$1 = this;return (new sailing_study_guide.core.t15371(self__.owner,self__.answers,self__.answer_section_view,meta15372__$1));
});
sailing_study_guide.core.__GT_t15371 = (function __GT_t15371(owner__$1,answers__$1,answer_section_view__$1,meta15372){return (new sailing_study_guide.core.t15371(owner__$1,answers__$1,answer_section_view__$1,meta15372));
});
}
return (new sailing_study_guide.core.t15371(owner,answers,answer_section_view,null));
});
sailing_study_guide.core.question_view = (function question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t15414 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t15414 = (function (owner,quiz_question,question_view,meta15415){
this.owner = owner;
this.quiz_question = quiz_question;
this.question_view = question_view;
this.meta15415 = meta15415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t15414.cljs$lang$type = true;
sailing_study_guide.core.t15414.cljs$lang$ctorStr = "sailing-study-guide.core/t15414";
sailing_study_guide.core.t15414.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t15414");
});
sailing_study_guide.core.t15414.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t15414.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__15417){var self__ = this;
var map__15418 = p__15417;var map__15418__$1 = ((cljs.core.seq_QMARK_.call(null,map__15418))?cljs.core.apply.call(null,cljs.core.hash_map,map__15418):map__15418);var choose_answer_chan = cljs.core.get.call(null,map__15418__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return React.DOM.div({"className": "question-container"},React.DOM.div({"className": "question-text-container"},React.DOM.h3({"className": "question-text"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(self__.quiz_question))),React.DOM.div({"className": "media-container"}),om.core.build.call(null,sailing_study_guide.core.answer_section_view,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),choose_answer_chan], null)], null)));
});
sailing_study_guide.core.t15414.prototype.om$core$IWillMount$ = true;
sailing_study_guide.core.t15414.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var choose_answer_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var c__6376__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto__,choose_answer_chan,___$1){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto__,choose_answer_chan,___$1){
return (function (state_15440){var state_val_15441 = (state_15440[(1)]);if((state_val_15441 === (4)))
{var inst_15421 = (state_15440[(2)]);var inst_15422 = console.cd(inst_15421);var inst_15423 = cljs.core.type.call(null,inst_15421);var inst_15424 = ("Type of answer-chosen: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15423));var inst_15425 = console.log(inst_15424);var inst_15426 = cljs.core.type__GT_str.call(null,inst_15421);var inst_15427 = ("Type->str of answer-chosen: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15426));var inst_15428 = console.log(inst_15427);var inst_15429 = cljs.core.deref.call(null,inst_15421);var inst_15430 = cljs.core.type__GT_str.call(null,inst_15429);var inst_15431 = ("Type->str of @answer-chosen: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15430));var inst_15432 = console.log(inst_15431);var inst_15433 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inst_15421);var inst_15434 = ("Chose "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15433));var inst_15435 = console.log(inst_15434);var state_15440__$1 = (function (){var statearr_15442 = state_15440;(statearr_15442[(7)] = inst_15432);
(statearr_15442[(8)] = inst_15422);
(statearr_15442[(9)] = inst_15425);
(statearr_15442[(10)] = inst_15428);
(statearr_15442[(11)] = inst_15435);
return statearr_15442;
})();var statearr_15443_15452 = state_15440__$1;(statearr_15443_15452[(2)] = null);
(statearr_15443_15452[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15441 === (3)))
{var inst_15438 = (state_15440[(2)]);var state_15440__$1 = state_15440;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15440__$1,inst_15438);
} else
{if((state_val_15441 === (2)))
{var state_15440__$1 = state_15440;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15440__$1,(4),choose_answer_chan);
} else
{if((state_val_15441 === (1)))
{var state_15440__$1 = state_15440;var statearr_15444_15453 = state_15440__$1;(statearr_15444_15453[(2)] = null);
(statearr_15444_15453[(1)] = (2));
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
var state_machine__6362__auto____0 = (function (){var statearr_15448 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15448[(0)] = state_machine__6362__auto__);
(statearr_15448[(1)] = (1));
return statearr_15448;
});
var state_machine__6362__auto____1 = (function (state_15440){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_15440);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e15449){if((e15449 instanceof Object))
{var ex__6365__auto__ = e15449;var statearr_15450_15454 = state_15440;(statearr_15450_15454[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15440);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15449;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15455 = state_15440;
state_15440 = G__15455;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_15440){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_15440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__,choose_answer_chan,___$1))
})();var state__6378__auto__ = (function (){var statearr_15451 = f__6377__auto__.call(null);(statearr_15451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_15451;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto__,choose_answer_chan,___$1))
);
return c__6376__auto__;
});
sailing_study_guide.core.t15414.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t15414.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),cljs.core.async.chan.call(null)], null);
});
sailing_study_guide.core.t15414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15416){var self__ = this;
var _15416__$1 = this;return self__.meta15415;
});
sailing_study_guide.core.t15414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15416,meta15415__$1){var self__ = this;
var _15416__$1 = this;return (new sailing_study_guide.core.t15414(self__.owner,self__.quiz_question,self__.question_view,meta15415__$1));
});
sailing_study_guide.core.__GT_t15414 = (function __GT_t15414(owner__$1,quiz_question__$1,question_view__$1,meta15415){return (new sailing_study_guide.core.t15414(owner__$1,quiz_question__$1,question_view__$1,meta15415));
});
}
return (new sailing_study_guide.core.t15414(owner,quiz_question,question_view,null));
});
sailing_study_guide.core.header_bar_view = (function header_bar_view(section,_){if(typeof sailing_study_guide.core.t15459 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t15459 = (function (_,section,header_bar_view,meta15460){
this._ = _;
this.section = section;
this.header_bar_view = header_bar_view;
this.meta15460 = meta15460;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t15459.cljs$lang$type = true;
sailing_study_guide.core.t15459.cljs$lang$ctorStr = "sailing-study-guide.core/t15459";
sailing_study_guide.core.t15459.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t15459");
});
sailing_study_guide.core.t15459.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t15459.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.nav({"className": "tab-bar"},React.DOM.section({"className": "left-small text-center"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_question_num)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_num_questions))),React.DOM.section({"className": "middle tab-bar-section"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.section)),React.DOM.section({"className": "right-small"},React.DOM.a({"href": "#", "className": "right-off-canvas-toggle menu-icon"},React.DOM.span(null))));
});
sailing_study_guide.core.t15459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15461){var self__ = this;
var _15461__$1 = this;return self__.meta15460;
});
sailing_study_guide.core.t15459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15461,meta15460__$1){var self__ = this;
var _15461__$1 = this;return (new sailing_study_guide.core.t15459(self__._,self__.section,self__.header_bar_view,meta15460__$1));
});
sailing_study_guide.core.__GT_t15459 = (function __GT_t15459(___$1,section__$1,header_bar_view__$1,meta15460){return (new sailing_study_guide.core.t15459(___$1,section__$1,header_bar_view__$1,meta15460));
});
}
return (new sailing_study_guide.core.t15459(_,section,header_bar_view,null));
});
sailing_study_guide.core.header_progress_view = (function header_progress_view(section,_){if(typeof sailing_study_guide.core.t15465 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t15465 = (function (_,section,header_progress_view,meta15466){
this._ = _;
this.section = section;
this.header_progress_view = header_progress_view;
this.meta15466 = meta15466;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t15465.cljs$lang$type = true;
sailing_study_guide.core.t15465.cljs$lang$ctorStr = "sailing-study-guide.core/t15465";
sailing_study_guide.core.t15465.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t15465");
});
sailing_study_guide.core.t15465.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t15465.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.div({"className": "progress"},React.DOM.span({"style": {"width": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (current_question_num / total_num_questions)))+"%")}, "className": "meter"}));
});
sailing_study_guide.core.t15465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15467){var self__ = this;
var _15467__$1 = this;return self__.meta15466;
});
sailing_study_guide.core.t15465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15467,meta15466__$1){var self__ = this;
var _15467__$1 = this;return (new sailing_study_guide.core.t15465(self__._,self__.section,self__.header_progress_view,meta15466__$1));
});
sailing_study_guide.core.__GT_t15465 = (function __GT_t15465(___$1,section__$1,header_progress_view__$1,meta15466){return (new sailing_study_guide.core.t15465(___$1,section__$1,header_progress_view__$1,meta15466));
});
}
return (new sailing_study_guide.core.t15465(_,section,header_progress_view,null));
});
sailing_study_guide.core.header_view = (function header_view(section,_){if(typeof sailing_study_guide.core.t15471 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t15471 = (function (_,section,header_view,meta15472){
this._ = _;
this.section = section;
this.header_view = header_view;
this.meta15472 = meta15472;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t15471.cljs$lang$type = true;
sailing_study_guide.core.t15471.cljs$lang$ctorStr = "sailing-study-guide.core/t15471";
sailing_study_guide.core.t15471.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t15471");
});
sailing_study_guide.core.t15471.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t15471.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.div({"className": "quiz-header"},om.core.build.call(null,sailing_study_guide.core.header_bar_view,self__.section),om.core.build.call(null,sailing_study_guide.core.header_progress_view,self__.section));
});
sailing_study_guide.core.t15471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15473){var self__ = this;
var _15473__$1 = this;return self__.meta15472;
});
sailing_study_guide.core.t15471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15473,meta15472__$1){var self__ = this;
var _15473__$1 = this;return (new sailing_study_guide.core.t15471(self__._,self__.section,self__.header_view,meta15472__$1));
});
sailing_study_guide.core.__GT_t15471 = (function __GT_t15471(___$1,section__$1,header_view__$1,meta15472){return (new sailing_study_guide.core.t15471(___$1,section__$1,header_view__$1,meta15472));
});
}
return (new sailing_study_guide.core.t15471(_,section,header_view,null));
});
sailing_study_guide.core.section_view = (function section_view(section,owner){if(typeof sailing_study_guide.core.t15477 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t15477 = (function (owner,section,section_view,meta15478){
this.owner = owner;
this.section = section;
this.section_view = section_view;
this.meta15478 = meta15478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t15477.cljs$lang$type = true;
sailing_study_guide.core.t15477.cljs$lang$ctorStr = "sailing-study-guide.core/t15477";
sailing_study_guide.core.t15477.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t15477");
});
sailing_study_guide.core.t15477.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t15477.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"data-offcanvas": true, "className": "off-canvas-wrap", "id": "quiz-section"},React.DOM.div({"className": "main-content inner-wrap"},om.core.build.call(null,sailing_study_guide.core.header_view,self__.section),om.core.build.call(null,sailing_study_guide.core.question_view,cljs.core.get.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section),new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section))),React.DOM.a({"className": "exit-off-canvas"})));
});
sailing_study_guide.core.t15477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15479){var self__ = this;
var _15479__$1 = this;return self__.meta15478;
});
sailing_study_guide.core.t15477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15479,meta15478__$1){var self__ = this;
var _15479__$1 = this;return (new sailing_study_guide.core.t15477(self__.owner,self__.section,self__.section_view,meta15478__$1));
});
sailing_study_guide.core.__GT_t15477 = (function __GT_t15477(owner__$1,section__$1,section_view__$1,meta15478){return (new sailing_study_guide.core.t15477(owner__$1,section__$1,section_view__$1,meta15478));
});
}
return (new sailing_study_guide.core.t15477(owner,section,section_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(quiz,owner){if(typeof sailing_study_guide.core.t15483 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t15483 = (function (owner,quiz,quiz_view,meta15484){
this.owner = owner;
this.quiz = quiz;
this.quiz_view = quiz_view;
this.meta15484 = meta15484;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t15483.cljs$lang$type = true;
sailing_study_guide.core.t15483.cljs$lang$ctorStr = "sailing-study-guide.core/t15483";
sailing_study_guide.core.t15483.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t15483");
});
sailing_study_guide.core.t15483.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t15483.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.section_view,cljs.core.nth.call(null,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(self__.quiz),new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(self__.quiz))));
});
sailing_study_guide.core.t15483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15485){var self__ = this;
var _15485__$1 = this;return self__.meta15484;
});
sailing_study_guide.core.t15483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15485,meta15484__$1){var self__ = this;
var _15485__$1 = this;return (new sailing_study_guide.core.t15483(self__.owner,self__.quiz,self__.quiz_view,meta15484__$1));
});
sailing_study_guide.core.__GT_t15483 = (function __GT_t15483(owner__$1,quiz__$1,quiz_view__$1,meta15484){return (new sailing_study_guide.core.t15483(owner__$1,quiz__$1,quiz_view__$1,meta15484));
});
}
return (new sailing_study_guide.core.t15483(owner,quiz,quiz_view,null));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map