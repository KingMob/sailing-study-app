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
sailing_study_guide.core.next_question = (function next_question(){console.log("Chose correctly");
return om.core.transact_BANG_.call(null,sailing_study_guide.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-question","current-question",-749753188)], null),cljs.core.inc);
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
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t15845 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t15845 = (function (owner,answer,answer_view,meta15846){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta15846 = meta15846;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t15845.cljs$lang$type = true;
sailing_study_guide.core.t15845.cljs$lang$ctorStr = "sailing-study-guide.core/t15845";
sailing_study_guide.core.t15845.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t15845");
});
sailing_study_guide.core.t15845.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t15845.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__15848){var self__ = this;
var map__15849 = p__15848;var map__15849__$1 = ((cljs.core.seq_QMARK_.call(null,map__15849))?cljs.core.apply.call(null,cljs.core.hash_map,map__15849):map__15849);var choose_answer_chan = cljs.core.get.call(null,map__15849__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return React.DOM.div({"className": "answer-container"},React.DOM.button({"className": ("answer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.answer_css_class.call(null,self__.answer))), "onClick": ((function (___$1,map__15849,map__15849__$1,choose_answer_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,choose_answer_chan,self__.answer);
});})(___$1,map__15849,map__15849__$1,choose_answer_chan))
},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.answer)));
});
sailing_study_guide.core.t15845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15847){var self__ = this;
var _15847__$1 = this;return self__.meta15846;
});
sailing_study_guide.core.t15845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15847,meta15846__$1){var self__ = this;
var _15847__$1 = this;return (new sailing_study_guide.core.t15845(self__.owner,self__.answer,self__.answer_view,meta15846__$1));
});
sailing_study_guide.core.__GT_t15845 = (function __GT_t15845(owner__$1,answer__$1,answer_view__$1,meta15846){return (new sailing_study_guide.core.t15845(owner__$1,answer__$1,answer_view__$1,meta15846));
});
}
return (new sailing_study_guide.core.t15845(owner,answer,answer_view,null));
});
sailing_study_guide.core.answer_section_view = (function answer_section_view(answers,owner){if(typeof sailing_study_guide.core.t15855 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t15855 = (function (owner,answers,answer_section_view,meta15856){
this.owner = owner;
this.answers = answers;
this.answer_section_view = answer_section_view;
this.meta15856 = meta15856;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t15855.cljs$lang$type = true;
sailing_study_guide.core.t15855.cljs$lang$ctorStr = "sailing-study-guide.core/t15855";
sailing_study_guide.core.t15855.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t15855");
});
sailing_study_guide.core.t15855.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t15855.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__15858){var self__ = this;
var map__15859 = p__15858;var map__15859__$1 = ((cljs.core.seq_QMARK_.call(null,map__15859))?cljs.core.apply.call(null,cljs.core.hash_map,map__15859):map__15859);var choose_answer_chan = cljs.core.get.call(null,map__15859__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "answer-section"},om.core.build_all.call(null,sailing_study_guide.core.answer_view,self__.answers,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),choose_answer_chan], null)], null)));
});
sailing_study_guide.core.t15855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15857){var self__ = this;
var _15857__$1 = this;return self__.meta15856;
});
sailing_study_guide.core.t15855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15857,meta15856__$1){var self__ = this;
var _15857__$1 = this;return (new sailing_study_guide.core.t15855(self__.owner,self__.answers,self__.answer_section_view,meta15856__$1));
});
sailing_study_guide.core.__GT_t15855 = (function __GT_t15855(owner__$1,answers__$1,answer_section_view__$1,meta15856){return (new sailing_study_guide.core.t15855(owner__$1,answers__$1,answer_section_view__$1,meta15856));
});
}
return (new sailing_study_guide.core.t15855(owner,answers,answer_section_view,null));
});
sailing_study_guide.core.question_view = (function question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t15904 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t15904 = (function (owner,quiz_question,question_view,meta15905){
this.owner = owner;
this.quiz_question = quiz_question;
this.question_view = question_view;
this.meta15905 = meta15905;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t15904.cljs$lang$type = true;
sailing_study_guide.core.t15904.cljs$lang$ctorStr = "sailing-study-guide.core/t15904";
sailing_study_guide.core.t15904.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t15904");
});
sailing_study_guide.core.t15904.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t15904.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__15907){var self__ = this;
var map__15908 = p__15907;var map__15908__$1 = ((cljs.core.seq_QMARK_.call(null,map__15908))?cljs.core.apply.call(null,cljs.core.hash_map,map__15908):map__15908);var choose_answer_chan = cljs.core.get.call(null,map__15908__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return React.DOM.div({"className": "question-container"},React.DOM.div({"className": "question-text-container"},React.DOM.h3({"className": "question-text"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(self__.quiz_question))),React.DOM.div({"className": "media-container"}),om.core.build.call(null,sailing_study_guide.core.answer_section_view,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),choose_answer_chan], null)], null)));
});
sailing_study_guide.core.t15904.prototype.om$core$IWillMount$ = true;
sailing_study_guide.core.t15904.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var choose_answer_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var c__6376__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto__,choose_answer_chan,___$1){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto__,choose_answer_chan,___$1){
return (function (state_15931){var state_val_15932 = (state_15931[(1)]);if((state_val_15932 === (7)))
{var inst_15926 = (state_15931[(2)]);var state_15931__$1 = (function (){var statearr_15933 = state_15931;(statearr_15933[(7)] = inst_15926);
return statearr_15933;
})();var statearr_15934_15948 = state_15931__$1;(statearr_15934_15948[(2)] = null);
(statearr_15934_15948[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15932 === (6)))
{var state_15931__$1 = state_15931;var statearr_15935_15949 = state_15931__$1;(statearr_15935_15949[(2)] = null);
(statearr_15935_15949[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15932 === (5)))
{var inst_15923 = sailing_study_guide.core.next_question.call(null,null);var state_15931__$1 = state_15931;var statearr_15936_15950 = state_15931__$1;(statearr_15936_15950[(2)] = inst_15923);
(statearr_15936_15950[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15932 === (4)))
{var inst_15911 = (state_15931[(2)]);var inst_15912 = cljs.core.deref.call(null,inst_15911);var inst_15913 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inst_15912);var inst_15914 = ("Chose "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15913));var inst_15915 = console.log(inst_15914);var inst_15916 = om.core.update_BANG_.call(null,inst_15911,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"chosen","chosen",-1422409985));var inst_15917 = cljs.core.deref.call(null,inst_15911);var inst_15918 = new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(inst_15917);var inst_15919 = console.log(inst_15918);var inst_15920 = cljs.core.deref.call(null,inst_15911);var inst_15921 = new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(inst_15920);var state_15931__$1 = (function (){var statearr_15937 = state_15931;(statearr_15937[(8)] = inst_15916);
(statearr_15937[(9)] = inst_15919);
(statearr_15937[(10)] = inst_15915);
return statearr_15937;
})();if(cljs.core.truth_(inst_15921))
{var statearr_15938_15951 = state_15931__$1;(statearr_15938_15951[(1)] = (5));
} else
{var statearr_15939_15952 = state_15931__$1;(statearr_15939_15952[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15932 === (3)))
{var inst_15929 = (state_15931[(2)]);var state_15931__$1 = state_15931;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15931__$1,inst_15929);
} else
{if((state_val_15932 === (2)))
{var state_15931__$1 = state_15931;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15931__$1,(4),choose_answer_chan);
} else
{if((state_val_15932 === (1)))
{var state_15931__$1 = state_15931;var statearr_15940_15953 = state_15931__$1;(statearr_15940_15953[(2)] = null);
(statearr_15940_15953[(1)] = (2));
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
var state_machine__6362__auto____0 = (function (){var statearr_15944 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15944[(0)] = state_machine__6362__auto__);
(statearr_15944[(1)] = (1));
return statearr_15944;
});
var state_machine__6362__auto____1 = (function (state_15931){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_15931);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e15945){if((e15945 instanceof Object))
{var ex__6365__auto__ = e15945;var statearr_15946_15954 = state_15931;(statearr_15946_15954[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15931);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15945;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15955 = state_15931;
state_15931 = G__15955;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_15931){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_15931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__,choose_answer_chan,___$1))
})();var state__6378__auto__ = (function (){var statearr_15947 = f__6377__auto__.call(null);(statearr_15947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_15947;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto__,choose_answer_chan,___$1))
);
return c__6376__auto__;
});
sailing_study_guide.core.t15904.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t15904.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),cljs.core.async.chan.call(null)], null);
});
sailing_study_guide.core.t15904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15906){var self__ = this;
var _15906__$1 = this;return self__.meta15905;
});
sailing_study_guide.core.t15904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15906,meta15905__$1){var self__ = this;
var _15906__$1 = this;return (new sailing_study_guide.core.t15904(self__.owner,self__.quiz_question,self__.question_view,meta15905__$1));
});
sailing_study_guide.core.__GT_t15904 = (function __GT_t15904(owner__$1,quiz_question__$1,question_view__$1,meta15905){return (new sailing_study_guide.core.t15904(owner__$1,quiz_question__$1,question_view__$1,meta15905));
});
}
return (new sailing_study_guide.core.t15904(owner,quiz_question,question_view,null));
});
sailing_study_guide.core.header_bar_view = (function header_bar_view(section,_){if(typeof sailing_study_guide.core.t15959 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t15959 = (function (_,section,header_bar_view,meta15960){
this._ = _;
this.section = section;
this.header_bar_view = header_bar_view;
this.meta15960 = meta15960;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t15959.cljs$lang$type = true;
sailing_study_guide.core.t15959.cljs$lang$ctorStr = "sailing-study-guide.core/t15959";
sailing_study_guide.core.t15959.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t15959");
});
sailing_study_guide.core.t15959.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t15959.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.nav({"className": "tab-bar"},React.DOM.section({"className": "left-small text-center"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_question_num)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_num_questions))),React.DOM.section({"className": "middle tab-bar-section"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.section)),React.DOM.section({"className": "right-small"},React.DOM.a({"href": "#", "className": "right-off-canvas-toggle menu-icon"},React.DOM.span(null))));
});
sailing_study_guide.core.t15959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15961){var self__ = this;
var _15961__$1 = this;return self__.meta15960;
});
sailing_study_guide.core.t15959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15961,meta15960__$1){var self__ = this;
var _15961__$1 = this;return (new sailing_study_guide.core.t15959(self__._,self__.section,self__.header_bar_view,meta15960__$1));
});
sailing_study_guide.core.__GT_t15959 = (function __GT_t15959(___$1,section__$1,header_bar_view__$1,meta15960){return (new sailing_study_guide.core.t15959(___$1,section__$1,header_bar_view__$1,meta15960));
});
}
return (new sailing_study_guide.core.t15959(_,section,header_bar_view,null));
});
sailing_study_guide.core.header_progress_view = (function header_progress_view(section,_){if(typeof sailing_study_guide.core.t15965 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t15965 = (function (_,section,header_progress_view,meta15966){
this._ = _;
this.section = section;
this.header_progress_view = header_progress_view;
this.meta15966 = meta15966;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t15965.cljs$lang$type = true;
sailing_study_guide.core.t15965.cljs$lang$ctorStr = "sailing-study-guide.core/t15965";
sailing_study_guide.core.t15965.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t15965");
});
sailing_study_guide.core.t15965.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t15965.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.div({"className": "progress"},React.DOM.span({"style": {"width": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (current_question_num / total_num_questions)))+"%")}, "className": "meter"}));
});
sailing_study_guide.core.t15965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15967){var self__ = this;
var _15967__$1 = this;return self__.meta15966;
});
sailing_study_guide.core.t15965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15967,meta15966__$1){var self__ = this;
var _15967__$1 = this;return (new sailing_study_guide.core.t15965(self__._,self__.section,self__.header_progress_view,meta15966__$1));
});
sailing_study_guide.core.__GT_t15965 = (function __GT_t15965(___$1,section__$1,header_progress_view__$1,meta15966){return (new sailing_study_guide.core.t15965(___$1,section__$1,header_progress_view__$1,meta15966));
});
}
return (new sailing_study_guide.core.t15965(_,section,header_progress_view,null));
});
sailing_study_guide.core.header_view = (function header_view(section,_){if(typeof sailing_study_guide.core.t15971 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t15971 = (function (_,section,header_view,meta15972){
this._ = _;
this.section = section;
this.header_view = header_view;
this.meta15972 = meta15972;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t15971.cljs$lang$type = true;
sailing_study_guide.core.t15971.cljs$lang$ctorStr = "sailing-study-guide.core/t15971";
sailing_study_guide.core.t15971.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t15971");
});
sailing_study_guide.core.t15971.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t15971.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.div({"className": "quiz-header"},om.core.build.call(null,sailing_study_guide.core.header_bar_view,self__.section),om.core.build.call(null,sailing_study_guide.core.header_progress_view,self__.section));
});
sailing_study_guide.core.t15971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15973){var self__ = this;
var _15973__$1 = this;return self__.meta15972;
});
sailing_study_guide.core.t15971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15973,meta15972__$1){var self__ = this;
var _15973__$1 = this;return (new sailing_study_guide.core.t15971(self__._,self__.section,self__.header_view,meta15972__$1));
});
sailing_study_guide.core.__GT_t15971 = (function __GT_t15971(___$1,section__$1,header_view__$1,meta15972){return (new sailing_study_guide.core.t15971(___$1,section__$1,header_view__$1,meta15972));
});
}
return (new sailing_study_guide.core.t15971(_,section,header_view,null));
});
sailing_study_guide.core.section_view = (function section_view(section,owner){if(typeof sailing_study_guide.core.t15977 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t15977 = (function (owner,section,section_view,meta15978){
this.owner = owner;
this.section = section;
this.section_view = section_view;
this.meta15978 = meta15978;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t15977.cljs$lang$type = true;
sailing_study_guide.core.t15977.cljs$lang$ctorStr = "sailing-study-guide.core/t15977";
sailing_study_guide.core.t15977.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t15977");
});
sailing_study_guide.core.t15977.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t15977.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"data-offcanvas": true, "className": "off-canvas-wrap", "id": "quiz-section"},React.DOM.div({"className": "main-content inner-wrap"},om.core.build.call(null,sailing_study_guide.core.header_view,self__.section),om.core.build.call(null,sailing_study_guide.core.question_view,cljs.core.get.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section),new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section))),React.DOM.a({"className": "exit-off-canvas"})));
});
sailing_study_guide.core.t15977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15979){var self__ = this;
var _15979__$1 = this;return self__.meta15978;
});
sailing_study_guide.core.t15977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15979,meta15978__$1){var self__ = this;
var _15979__$1 = this;return (new sailing_study_guide.core.t15977(self__.owner,self__.section,self__.section_view,meta15978__$1));
});
sailing_study_guide.core.__GT_t15977 = (function __GT_t15977(owner__$1,section__$1,section_view__$1,meta15978){return (new sailing_study_guide.core.t15977(owner__$1,section__$1,section_view__$1,meta15978));
});
}
return (new sailing_study_guide.core.t15977(owner,section,section_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(quiz,owner){if(typeof sailing_study_guide.core.t15983 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t15983 = (function (owner,quiz,quiz_view,meta15984){
this.owner = owner;
this.quiz = quiz;
this.quiz_view = quiz_view;
this.meta15984 = meta15984;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t15983.cljs$lang$type = true;
sailing_study_guide.core.t15983.cljs$lang$ctorStr = "sailing-study-guide.core/t15983";
sailing_study_guide.core.t15983.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t15983");
});
sailing_study_guide.core.t15983.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t15983.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.section_view,cljs.core.nth.call(null,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(self__.quiz),new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(self__.quiz))));
});
sailing_study_guide.core.t15983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15985){var self__ = this;
var _15985__$1 = this;return self__.meta15984;
});
sailing_study_guide.core.t15983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15985,meta15984__$1){var self__ = this;
var _15985__$1 = this;return (new sailing_study_guide.core.t15983(self__.owner,self__.quiz,self__.quiz_view,meta15984__$1));
});
sailing_study_guide.core.__GT_t15983 = (function __GT_t15983(owner__$1,quiz__$1,quiz_view__$1,meta15984){return (new sailing_study_guide.core.t15983(owner__$1,quiz__$1,quiz_view__$1,meta15984));
});
}
return (new sailing_study_guide.core.t15983(owner,quiz,quiz_view,null));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map