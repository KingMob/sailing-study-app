// Compiled by ClojureScript 0.0-2277
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
sailing_study_guide.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"banner","banner",177448281),"Quiz",new cljs.core.Keyword(null,"current-section","current-section",1519906460),(0),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Parts of the boat",new cljs.core.Keyword(null,"current-question","current-question",-749753188),(0),new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"What is placed between the boat and the dock to cushion the hull?",new cljs.core.Keyword(null,"image","image",-58725096),null,new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Tiller",new cljs.core.Keyword(null,"correct","correct",984806334),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Boomvang",new cljs.core.Keyword(null,"correct","correct",984806334),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Fender",new cljs.core.Keyword(null,"correct","correct",984806334),true,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Gooseneck",new cljs.core.Keyword(null,"correct","correct",984806334),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"What's the small sail at front called?",new cljs.core.Keyword(null,"image","image",-58725096),null,new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Jib",new cljs.core.Keyword(null,"correct","correct",984806334),true,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Jab",new cljs.core.Keyword(null,"correct","correct",984806334),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Jibjab",new cljs.core.Keyword(null,"correct","correct",984806334),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Jibber jabber",new cljs.core.Keyword(null,"correct","correct",984806334),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"What's the biggest danger to a boat?",new cljs.core.Keyword(null,"image","image",-58725096),null,new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Pirates",new cljs.core.Keyword(null,"correct","correct",984806334),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Giant squids",new cljs.core.Keyword(null,"correct","correct",984806334),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Barnacles",new cljs.core.Keyword(null,"correct","correct",984806334),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"That you'll need a bigger one",new cljs.core.Keyword(null,"correct","correct",984806334),true,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null)], null)], null)], null)], null)], null)], null));
sailing_study_guide.core.answer_css_class = (function answer_css_class(answer){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unchosen","unchosen",-205763213),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(answer)))
{return "answer-default";
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(answer)))
{return "answer-correct success";
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return "answer-incorrect alert";
} else
{return null;
}
}
}
});
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t9436 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9436 = (function (owner,answer,answer_view,meta9437){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta9437 = meta9437;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9436.cljs$lang$type = true;
sailing_study_guide.core.t9436.cljs$lang$ctorStr = "sailing-study-guide.core/t9436";
sailing_study_guide.core.t9436.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t9436");
});
sailing_study_guide.core.t9436.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t9436.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9439){var self__ = this;
var map__9440 = p__9439;var map__9440__$1 = ((cljs.core.seq_QMARK_.call(null,map__9440))?cljs.core.apply.call(null,cljs.core.hash_map,map__9440):map__9440);var choose_answer_chan = cljs.core.get.call(null,map__9440__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return React.DOM.div({"className": "answer-container"},React.DOM.button({"className": ("answer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.answer_css_class.call(null,self__.answer))), "onClick": ((function (___$1,map__9440,map__9440__$1,choose_answer_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,choose_answer_chan,self__.answer);
});})(___$1,map__9440,map__9440__$1,choose_answer_chan))
},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.answer)));
});
sailing_study_guide.core.t9436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9438){var self__ = this;
var _9438__$1 = this;return self__.meta9437;
});
sailing_study_guide.core.t9436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9438,meta9437__$1){var self__ = this;
var _9438__$1 = this;return (new sailing_study_guide.core.t9436(self__.owner,self__.answer,self__.answer_view,meta9437__$1));
});
sailing_study_guide.core.__GT_t9436 = (function __GT_t9436(owner__$1,answer__$1,answer_view__$1,meta9437){return (new sailing_study_guide.core.t9436(owner__$1,answer__$1,answer_view__$1,meta9437));
});
}
return (new sailing_study_guide.core.t9436(owner,answer,answer_view,null));
});
sailing_study_guide.core.question_view = (function question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t9470 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9470 = (function (owner,quiz_question,question_view,meta9471){
this.owner = owner;
this.quiz_question = quiz_question;
this.question_view = question_view;
this.meta9471 = meta9471;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9470.cljs$lang$type = true;
sailing_study_guide.core.t9470.cljs$lang$ctorStr = "sailing-study-guide.core/t9470";
sailing_study_guide.core.t9470.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t9470");
});
sailing_study_guide.core.t9470.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t9470.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9473){var self__ = this;
var map__9474 = p__9473;var map__9474__$1 = ((cljs.core.seq_QMARK_.call(null,map__9474))?cljs.core.apply.call(null,cljs.core.hash_map,map__9474):map__9474);var choose_answer_chan = cljs.core.get.call(null,map__9474__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return React.DOM.div({"className": "question-container"},React.DOM.div({"className": "question-text-container"},React.DOM.h3({"className": "question-text"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(self__.quiz_question))),React.DOM.div({"className": "media-container"}),cljs.core.apply.call(null,om.dom.div,{"className": "answer-section"},om.core.build_all.call(null,sailing_study_guide.core.answer_view,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),choose_answer_chan], null)], null))));
});
sailing_study_guide.core.t9470.prototype.om$core$IWillMount$ = true;
sailing_study_guide.core.t9470.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var choose_answer_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var c__6360__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6360__auto__,choose_answer_chan,___$1){
return (function (){var f__6361__auto__ = (function (){var switch__6345__auto__ = ((function (c__6360__auto__,choose_answer_chan,___$1){
return (function (state_9487){var state_val_9488 = (state_9487[(1)]);if((state_val_9488 === (4)))
{var inst_9477 = (state_9487[(2)]);var inst_9478 = cljs.core.deref.call(null,inst_9477);var inst_9479 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inst_9478);var inst_9480 = ("Chose "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9479));var inst_9481 = console.log(inst_9480);var inst_9482 = om.core.update_BANG_.call(null,inst_9477,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"chosen","chosen",-1422409985));var state_9487__$1 = (function (){var statearr_9489 = state_9487;(statearr_9489[(7)] = inst_9481);
(statearr_9489[(8)] = inst_9482);
return statearr_9489;
})();var statearr_9490_9499 = state_9487__$1;(statearr_9490_9499[(2)] = null);
(statearr_9490_9499[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9488 === (3)))
{var inst_9485 = (state_9487[(2)]);var state_9487__$1 = state_9487;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9487__$1,inst_9485);
} else
{if((state_val_9488 === (2)))
{var state_9487__$1 = state_9487;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9487__$1,(4),choose_answer_chan);
} else
{if((state_val_9488 === (1)))
{var state_9487__$1 = state_9487;var statearr_9491_9500 = state_9487__$1;(statearr_9491_9500[(2)] = null);
(statearr_9491_9500[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6360__auto__,choose_answer_chan,___$1))
;return ((function (switch__6345__auto__,c__6360__auto__,choose_answer_chan,___$1){
return (function() {
var state_machine__6346__auto__ = null;
var state_machine__6346__auto____0 = (function (){var statearr_9495 = [null,null,null,null,null,null,null,null,null];(statearr_9495[(0)] = state_machine__6346__auto__);
(statearr_9495[(1)] = (1));
return statearr_9495;
});
var state_machine__6346__auto____1 = (function (state_9487){while(true){
var ret_value__6347__auto__ = (function (){try{while(true){
var result__6348__auto__ = switch__6345__auto__.call(null,state_9487);if(cljs.core.keyword_identical_QMARK_.call(null,result__6348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6348__auto__;
}
break;
}
}catch (e9496){if((e9496 instanceof Object))
{var ex__6349__auto__ = e9496;var statearr_9497_9501 = state_9487;(statearr_9497_9501[(5)] = ex__6349__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9487);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9496;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9502 = state_9487;
state_9487 = G__9502;
continue;
}
} else
{return ret_value__6347__auto__;
}
break;
}
});
state_machine__6346__auto__ = function(state_9487){
switch(arguments.length){
case 0:
return state_machine__6346__auto____0.call(this);
case 1:
return state_machine__6346__auto____1.call(this,state_9487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6346__auto____0;
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6346__auto____1;
return state_machine__6346__auto__;
})()
;})(switch__6345__auto__,c__6360__auto__,choose_answer_chan,___$1))
})();var state__6362__auto__ = (function (){var statearr_9498 = f__6361__auto__.call(null);(statearr_9498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6360__auto__);
return statearr_9498;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6362__auto__);
});})(c__6360__auto__,choose_answer_chan,___$1))
);
return c__6360__auto__;
});
sailing_study_guide.core.t9470.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t9470.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),cljs.core.async.chan.call(null)], null);
});
sailing_study_guide.core.t9470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9472){var self__ = this;
var _9472__$1 = this;return self__.meta9471;
});
sailing_study_guide.core.t9470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9472,meta9471__$1){var self__ = this;
var _9472__$1 = this;return (new sailing_study_guide.core.t9470(self__.owner,self__.quiz_question,self__.question_view,meta9471__$1));
});
sailing_study_guide.core.__GT_t9470 = (function __GT_t9470(owner__$1,quiz_question__$1,question_view__$1,meta9471){return (new sailing_study_guide.core.t9470(owner__$1,quiz_question__$1,question_view__$1,meta9471));
});
}
return (new sailing_study_guide.core.t9470(owner,quiz_question,question_view,null));
});
sailing_study_guide.core.header_bar_view = (function header_bar_view(section,_){if(typeof sailing_study_guide.core.t9506 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9506 = (function (_,section,header_bar_view,meta9507){
this._ = _;
this.section = section;
this.header_bar_view = header_bar_view;
this.meta9507 = meta9507;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9506.cljs$lang$type = true;
sailing_study_guide.core.t9506.cljs$lang$ctorStr = "sailing-study-guide.core/t9506";
sailing_study_guide.core.t9506.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t9506");
});
sailing_study_guide.core.t9506.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t9506.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.nav({"className": "tab-bar"},React.DOM.section({"className": "left-small text-center"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_question_num)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_num_questions))),React.DOM.section({"className": "middle tab-bar-section"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.section)),React.DOM.section({"className": "right-small"},React.DOM.a({"href": "#", "className": "right-off-canvas-toggle menu-icon"},React.DOM.span(null))));
});
sailing_study_guide.core.t9506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9508){var self__ = this;
var _9508__$1 = this;return self__.meta9507;
});
sailing_study_guide.core.t9506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9508,meta9507__$1){var self__ = this;
var _9508__$1 = this;return (new sailing_study_guide.core.t9506(self__._,self__.section,self__.header_bar_view,meta9507__$1));
});
sailing_study_guide.core.__GT_t9506 = (function __GT_t9506(___$1,section__$1,header_bar_view__$1,meta9507){return (new sailing_study_guide.core.t9506(___$1,section__$1,header_bar_view__$1,meta9507));
});
}
return (new sailing_study_guide.core.t9506(_,section,header_bar_view,null));
});
sailing_study_guide.core.header_progress_view = (function header_progress_view(section,_){if(typeof sailing_study_guide.core.t9512 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9512 = (function (_,section,header_progress_view,meta9513){
this._ = _;
this.section = section;
this.header_progress_view = header_progress_view;
this.meta9513 = meta9513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9512.cljs$lang$type = true;
sailing_study_guide.core.t9512.cljs$lang$ctorStr = "sailing-study-guide.core/t9512";
sailing_study_guide.core.t9512.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t9512");
});
sailing_study_guide.core.t9512.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t9512.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.div({"className": "progress"},React.DOM.span({"style": {"width": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (current_question_num / total_num_questions)))+"%")}, "className": "meter"}));
});
sailing_study_guide.core.t9512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9514){var self__ = this;
var _9514__$1 = this;return self__.meta9513;
});
sailing_study_guide.core.t9512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9514,meta9513__$1){var self__ = this;
var _9514__$1 = this;return (new sailing_study_guide.core.t9512(self__._,self__.section,self__.header_progress_view,meta9513__$1));
});
sailing_study_guide.core.__GT_t9512 = (function __GT_t9512(___$1,section__$1,header_progress_view__$1,meta9513){return (new sailing_study_guide.core.t9512(___$1,section__$1,header_progress_view__$1,meta9513));
});
}
return (new sailing_study_guide.core.t9512(_,section,header_progress_view,null));
});
sailing_study_guide.core.header_view = (function header_view(section,_){if(typeof sailing_study_guide.core.t9518 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9518 = (function (_,section,header_view,meta9519){
this._ = _;
this.section = section;
this.header_view = header_view;
this.meta9519 = meta9519;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9518.cljs$lang$type = true;
sailing_study_guide.core.t9518.cljs$lang$ctorStr = "sailing-study-guide.core/t9518";
sailing_study_guide.core.t9518.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t9518");
});
sailing_study_guide.core.t9518.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t9518.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.div({"className": "quiz-header"},om.core.build.call(null,sailing_study_guide.core.header_bar_view,self__.section),om.core.build.call(null,sailing_study_guide.core.header_progress_view,self__.section));
});
sailing_study_guide.core.t9518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9520){var self__ = this;
var _9520__$1 = this;return self__.meta9519;
});
sailing_study_guide.core.t9518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9520,meta9519__$1){var self__ = this;
var _9520__$1 = this;return (new sailing_study_guide.core.t9518(self__._,self__.section,self__.header_view,meta9519__$1));
});
sailing_study_guide.core.__GT_t9518 = (function __GT_t9518(___$1,section__$1,header_view__$1,meta9519){return (new sailing_study_guide.core.t9518(___$1,section__$1,header_view__$1,meta9519));
});
}
return (new sailing_study_guide.core.t9518(_,section,header_view,null));
});
sailing_study_guide.core.section_view = (function section_view(section,owner){if(typeof sailing_study_guide.core.t9524 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9524 = (function (owner,section,section_view,meta9525){
this.owner = owner;
this.section = section;
this.section_view = section_view;
this.meta9525 = meta9525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9524.cljs$lang$type = true;
sailing_study_guide.core.t9524.cljs$lang$ctorStr = "sailing-study-guide.core/t9524";
sailing_study_guide.core.t9524.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t9524");
});
sailing_study_guide.core.t9524.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t9524.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"data-offcanvas": true, "className": "off-canvas-wrap", "id": "quiz-section"},React.DOM.div({"className": "inner-wrap"},om.core.build.call(null,sailing_study_guide.core.header_view,self__.section),om.core.build.call(null,sailing_study_guide.core.question_view,cljs.core.get.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section),new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section))),React.DOM.a({"className": "exit-off-canvas"})));
});
sailing_study_guide.core.t9524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9526){var self__ = this;
var _9526__$1 = this;return self__.meta9525;
});
sailing_study_guide.core.t9524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9526,meta9525__$1){var self__ = this;
var _9526__$1 = this;return (new sailing_study_guide.core.t9524(self__.owner,self__.section,self__.section_view,meta9525__$1));
});
sailing_study_guide.core.__GT_t9524 = (function __GT_t9524(owner__$1,section__$1,section_view__$1,meta9525){return (new sailing_study_guide.core.t9524(owner__$1,section__$1,section_view__$1,meta9525));
});
}
return (new sailing_study_guide.core.t9524(owner,section,section_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(quiz,owner){if(typeof sailing_study_guide.core.t9530 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9530 = (function (owner,quiz,quiz_view,meta9531){
this.owner = owner;
this.quiz = quiz;
this.quiz_view = quiz_view;
this.meta9531 = meta9531;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9530.cljs$lang$type = true;
sailing_study_guide.core.t9530.cljs$lang$ctorStr = "sailing-study-guide.core/t9530";
sailing_study_guide.core.t9530.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t9530");
});
sailing_study_guide.core.t9530.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t9530.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.section_view,cljs.core.nth.call(null,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(self__.quiz),new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(self__.quiz))));
});
sailing_study_guide.core.t9530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9532){var self__ = this;
var _9532__$1 = this;return self__.meta9531;
});
sailing_study_guide.core.t9530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9532,meta9531__$1){var self__ = this;
var _9532__$1 = this;return (new sailing_study_guide.core.t9530(self__.owner,self__.quiz,self__.quiz_view,meta9531__$1));
});
sailing_study_guide.core.__GT_t9530 = (function __GT_t9530(owner__$1,quiz__$1,quiz_view__$1,meta9531){return (new sailing_study_guide.core.t9530(owner__$1,quiz__$1,quiz_view__$1,meta9531));
});
}
return (new sailing_study_guide.core.t9530(owner,quiz,quiz_view,null));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map