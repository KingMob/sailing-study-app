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
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t16429 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t16429 = (function (owner,answer,answer_view,meta16430){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta16430 = meta16430;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t16429.cljs$lang$type = true;
sailing_study_guide.core.t16429.cljs$lang$ctorStr = "sailing-study-guide.core/t16429";
sailing_study_guide.core.t16429.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t16429");
});
sailing_study_guide.core.t16429.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t16429.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__16432){var self__ = this;
var map__16433 = p__16432;var map__16433__$1 = ((cljs.core.seq_QMARK_.call(null,map__16433))?cljs.core.apply.call(null,cljs.core.hash_map,map__16433):map__16433);var choose_answer_chan = cljs.core.get.call(null,map__16433__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return React.DOM.div({"className": "answer-container"},React.DOM.button({"className": ("answer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.answer_css_class.call(null,self__.answer))), "onClick": ((function (___$1,map__16433,map__16433__$1,choose_answer_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,choose_answer_chan,self__.answer);
});})(___$1,map__16433,map__16433__$1,choose_answer_chan))
},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.answer)));
});
sailing_study_guide.core.t16429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16431){var self__ = this;
var _16431__$1 = this;return self__.meta16430;
});
sailing_study_guide.core.t16429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16431,meta16430__$1){var self__ = this;
var _16431__$1 = this;return (new sailing_study_guide.core.t16429(self__.owner,self__.answer,self__.answer_view,meta16430__$1));
});
sailing_study_guide.core.__GT_t16429 = (function __GT_t16429(owner__$1,answer__$1,answer_view__$1,meta16430){return (new sailing_study_guide.core.t16429(owner__$1,answer__$1,answer_view__$1,meta16430));
});
}
return (new sailing_study_guide.core.t16429(owner,answer,answer_view,null));
});
sailing_study_guide.core.answer_section_view = (function answer_section_view(answers,owner){if(typeof sailing_study_guide.core.t16439 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t16439 = (function (owner,answers,answer_section_view,meta16440){
this.owner = owner;
this.answers = answers;
this.answer_section_view = answer_section_view;
this.meta16440 = meta16440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t16439.cljs$lang$type = true;
sailing_study_guide.core.t16439.cljs$lang$ctorStr = "sailing-study-guide.core/t16439";
sailing_study_guide.core.t16439.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t16439");
});
sailing_study_guide.core.t16439.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t16439.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__16442){var self__ = this;
var map__16443 = p__16442;var map__16443__$1 = ((cljs.core.seq_QMARK_.call(null,map__16443))?cljs.core.apply.call(null,cljs.core.hash_map,map__16443):map__16443);var choose_answer_chan = cljs.core.get.call(null,map__16443__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "answer-section"},om.core.build_all.call(null,sailing_study_guide.core.answer_view,self__.answers,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),choose_answer_chan], null)], null)));
});
sailing_study_guide.core.t16439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16441){var self__ = this;
var _16441__$1 = this;return self__.meta16440;
});
sailing_study_guide.core.t16439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16441,meta16440__$1){var self__ = this;
var _16441__$1 = this;return (new sailing_study_guide.core.t16439(self__.owner,self__.answers,self__.answer_section_view,meta16440__$1));
});
sailing_study_guide.core.__GT_t16439 = (function __GT_t16439(owner__$1,answers__$1,answer_section_view__$1,meta16440){return (new sailing_study_guide.core.t16439(owner__$1,answers__$1,answer_section_view__$1,meta16440));
});
}
return (new sailing_study_guide.core.t16439(owner,answers,answer_section_view,null));
});
sailing_study_guide.core.question_view = (function question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t16488 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t16488 = (function (owner,quiz_question,question_view,meta16489){
this.owner = owner;
this.quiz_question = quiz_question;
this.question_view = question_view;
this.meta16489 = meta16489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t16488.cljs$lang$type = true;
sailing_study_guide.core.t16488.cljs$lang$ctorStr = "sailing-study-guide.core/t16488";
sailing_study_guide.core.t16488.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t16488");
});
sailing_study_guide.core.t16488.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t16488.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__16491){var self__ = this;
var map__16492 = p__16491;var map__16492__$1 = ((cljs.core.seq_QMARK_.call(null,map__16492))?cljs.core.apply.call(null,cljs.core.hash_map,map__16492):map__16492);var choose_answer_chan = cljs.core.get.call(null,map__16492__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return React.DOM.div({"className": "question-container"},React.DOM.div({"className": "question-text-container"},React.DOM.h3({"className": "question-text"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(self__.quiz_question))),React.DOM.div({"className": "media-container"}),om.core.build.call(null,sailing_study_guide.core.answer_section_view,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),choose_answer_chan], null)], null)));
});
sailing_study_guide.core.t16488.prototype.om$core$IWillMount$ = true;
sailing_study_guide.core.t16488.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var choose_answer_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var c__6376__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto__,choose_answer_chan,___$1){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto__,choose_answer_chan,___$1){
return (function (state_16515){var state_val_16516 = (state_16515[(1)]);if((state_val_16516 === (7)))
{var inst_16510 = (state_16515[(2)]);var state_16515__$1 = (function (){var statearr_16517 = state_16515;(statearr_16517[(7)] = inst_16510);
return statearr_16517;
})();var statearr_16518_16532 = state_16515__$1;(statearr_16518_16532[(2)] = null);
(statearr_16518_16532[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16516 === (6)))
{var state_16515__$1 = state_16515;var statearr_16519_16533 = state_16515__$1;(statearr_16519_16533[(2)] = null);
(statearr_16519_16533[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16516 === (5)))
{var inst_16507 = sailing_study_guide.core.question_answered.call(null);var state_16515__$1 = state_16515;var statearr_16520_16534 = state_16515__$1;(statearr_16520_16534[(2)] = inst_16507);
(statearr_16520_16534[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16516 === (4)))
{var inst_16495 = (state_16515[(2)]);var inst_16496 = cljs.core.deref.call(null,inst_16495);var inst_16497 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inst_16496);var inst_16498 = ("Chose "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16497));var inst_16499 = console.log(inst_16498);var inst_16500 = om.core.update_BANG_.call(null,inst_16495,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"chosen","chosen",-1422409985));var inst_16501 = cljs.core.deref.call(null,inst_16495);var inst_16502 = new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(inst_16501);var inst_16503 = console.log(inst_16502);var inst_16504 = cljs.core.deref.call(null,inst_16495);var inst_16505 = new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(inst_16504);var state_16515__$1 = (function (){var statearr_16521 = state_16515;(statearr_16521[(8)] = inst_16499);
(statearr_16521[(9)] = inst_16500);
(statearr_16521[(10)] = inst_16503);
return statearr_16521;
})();if(cljs.core.truth_(inst_16505))
{var statearr_16522_16535 = state_16515__$1;(statearr_16522_16535[(1)] = (5));
} else
{var statearr_16523_16536 = state_16515__$1;(statearr_16523_16536[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16516 === (3)))
{var inst_16513 = (state_16515[(2)]);var state_16515__$1 = state_16515;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16515__$1,inst_16513);
} else
{if((state_val_16516 === (2)))
{var state_16515__$1 = state_16515;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16515__$1,(4),choose_answer_chan);
} else
{if((state_val_16516 === (1)))
{var state_16515__$1 = state_16515;var statearr_16524_16537 = state_16515__$1;(statearr_16524_16537[(2)] = null);
(statearr_16524_16537[(1)] = (2));
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
var state_machine__6362__auto____0 = (function (){var statearr_16528 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16528[(0)] = state_machine__6362__auto__);
(statearr_16528[(1)] = (1));
return statearr_16528;
});
var state_machine__6362__auto____1 = (function (state_16515){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_16515);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e16529){if((e16529 instanceof Object))
{var ex__6365__auto__ = e16529;var statearr_16530_16538 = state_16515;(statearr_16530_16538[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16515);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16529;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16539 = state_16515;
state_16515 = G__16539;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_16515){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_16515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__,choose_answer_chan,___$1))
})();var state__6378__auto__ = (function (){var statearr_16531 = f__6377__auto__.call(null);(statearr_16531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_16531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto__,choose_answer_chan,___$1))
);
return c__6376__auto__;
});
sailing_study_guide.core.t16488.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t16488.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),cljs.core.async.chan.call(null)], null);
});
sailing_study_guide.core.t16488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16490){var self__ = this;
var _16490__$1 = this;return self__.meta16489;
});
sailing_study_guide.core.t16488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16490,meta16489__$1){var self__ = this;
var _16490__$1 = this;return (new sailing_study_guide.core.t16488(self__.owner,self__.quiz_question,self__.question_view,meta16489__$1));
});
sailing_study_guide.core.__GT_t16488 = (function __GT_t16488(owner__$1,quiz_question__$1,question_view__$1,meta16489){return (new sailing_study_guide.core.t16488(owner__$1,quiz_question__$1,question_view__$1,meta16489));
});
}
return (new sailing_study_guide.core.t16488(owner,quiz_question,question_view,null));
});
sailing_study_guide.core.header_bar_view = (function header_bar_view(section,_){if(typeof sailing_study_guide.core.t16543 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t16543 = (function (_,section,header_bar_view,meta16544){
this._ = _;
this.section = section;
this.header_bar_view = header_bar_view;
this.meta16544 = meta16544;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t16543.cljs$lang$type = true;
sailing_study_guide.core.t16543.cljs$lang$ctorStr = "sailing-study-guide.core/t16543";
sailing_study_guide.core.t16543.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t16543");
});
sailing_study_guide.core.t16543.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t16543.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.nav({"className": "tab-bar"},React.DOM.section({"className": "left-small text-center"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_question_num)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_num_questions))),React.DOM.section({"className": "middle tab-bar-section"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.section)),React.DOM.section({"className": "right-small"},React.DOM.a({"href": "#", "className": "right-off-canvas-toggle menu-icon"},React.DOM.span(null))));
});
sailing_study_guide.core.t16543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16545){var self__ = this;
var _16545__$1 = this;return self__.meta16544;
});
sailing_study_guide.core.t16543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16545,meta16544__$1){var self__ = this;
var _16545__$1 = this;return (new sailing_study_guide.core.t16543(self__._,self__.section,self__.header_bar_view,meta16544__$1));
});
sailing_study_guide.core.__GT_t16543 = (function __GT_t16543(___$1,section__$1,header_bar_view__$1,meta16544){return (new sailing_study_guide.core.t16543(___$1,section__$1,header_bar_view__$1,meta16544));
});
}
return (new sailing_study_guide.core.t16543(_,section,header_bar_view,null));
});
sailing_study_guide.core.header_progress_view = (function header_progress_view(section,_){if(typeof sailing_study_guide.core.t16549 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t16549 = (function (_,section,header_progress_view,meta16550){
this._ = _;
this.section = section;
this.header_progress_view = header_progress_view;
this.meta16550 = meta16550;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t16549.cljs$lang$type = true;
sailing_study_guide.core.t16549.cljs$lang$ctorStr = "sailing-study-guide.core/t16549";
sailing_study_guide.core.t16549.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t16549");
});
sailing_study_guide.core.t16549.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t16549.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.div({"className": "progress"},React.DOM.span({"style": {"width": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (current_question_num / total_num_questions)))+"%")}, "className": "meter"}));
});
sailing_study_guide.core.t16549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16551){var self__ = this;
var _16551__$1 = this;return self__.meta16550;
});
sailing_study_guide.core.t16549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16551,meta16550__$1){var self__ = this;
var _16551__$1 = this;return (new sailing_study_guide.core.t16549(self__._,self__.section,self__.header_progress_view,meta16550__$1));
});
sailing_study_guide.core.__GT_t16549 = (function __GT_t16549(___$1,section__$1,header_progress_view__$1,meta16550){return (new sailing_study_guide.core.t16549(___$1,section__$1,header_progress_view__$1,meta16550));
});
}
return (new sailing_study_guide.core.t16549(_,section,header_progress_view,null));
});
sailing_study_guide.core.header_view = (function header_view(section,_){if(typeof sailing_study_guide.core.t16555 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t16555 = (function (_,section,header_view,meta16556){
this._ = _;
this.section = section;
this.header_view = header_view;
this.meta16556 = meta16556;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t16555.cljs$lang$type = true;
sailing_study_guide.core.t16555.cljs$lang$ctorStr = "sailing-study-guide.core/t16555";
sailing_study_guide.core.t16555.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t16555");
});
sailing_study_guide.core.t16555.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t16555.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.div({"className": "quiz-header"},om.core.build.call(null,sailing_study_guide.core.header_bar_view,self__.section),om.core.build.call(null,sailing_study_guide.core.header_progress_view,self__.section));
});
sailing_study_guide.core.t16555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16557){var self__ = this;
var _16557__$1 = this;return self__.meta16556;
});
sailing_study_guide.core.t16555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16557,meta16556__$1){var self__ = this;
var _16557__$1 = this;return (new sailing_study_guide.core.t16555(self__._,self__.section,self__.header_view,meta16556__$1));
});
sailing_study_guide.core.__GT_t16555 = (function __GT_t16555(___$1,section__$1,header_view__$1,meta16556){return (new sailing_study_guide.core.t16555(___$1,section__$1,header_view__$1,meta16556));
});
}
return (new sailing_study_guide.core.t16555(_,section,header_view,null));
});
sailing_study_guide.core.section_view = (function section_view(section,owner){if(typeof sailing_study_guide.core.t16561 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t16561 = (function (owner,section,section_view,meta16562){
this.owner = owner;
this.section = section;
this.section_view = section_view;
this.meta16562 = meta16562;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t16561.cljs$lang$type = true;
sailing_study_guide.core.t16561.cljs$lang$ctorStr = "sailing-study-guide.core/t16561";
sailing_study_guide.core.t16561.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t16561");
});
sailing_study_guide.core.t16561.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t16561.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"data-offcanvas": true, "className": "off-canvas-wrap", "id": "quiz-section"},React.DOM.div({"className": "main-content inner-wrap"},om.core.build.call(null,sailing_study_guide.core.header_view,self__.section),om.core.build.call(null,sailing_study_guide.core.question_view,cljs.core.get.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section),new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section))),React.DOM.a({"className": "exit-off-canvas"})));
});
sailing_study_guide.core.t16561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16563){var self__ = this;
var _16563__$1 = this;return self__.meta16562;
});
sailing_study_guide.core.t16561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16563,meta16562__$1){var self__ = this;
var _16563__$1 = this;return (new sailing_study_guide.core.t16561(self__.owner,self__.section,self__.section_view,meta16562__$1));
});
sailing_study_guide.core.__GT_t16561 = (function __GT_t16561(owner__$1,section__$1,section_view__$1,meta16562){return (new sailing_study_guide.core.t16561(owner__$1,section__$1,section_view__$1,meta16562));
});
}
return (new sailing_study_guide.core.t16561(owner,section,section_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(quiz,owner){if(typeof sailing_study_guide.core.t16567 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t16567 = (function (owner,quiz,quiz_view,meta16568){
this.owner = owner;
this.quiz = quiz;
this.quiz_view = quiz_view;
this.meta16568 = meta16568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t16567.cljs$lang$type = true;
sailing_study_guide.core.t16567.cljs$lang$ctorStr = "sailing-study-guide.core/t16567";
sailing_study_guide.core.t16567.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t16567");
});
sailing_study_guide.core.t16567.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t16567.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.section_view,cljs.core.nth.call(null,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(self__.quiz),new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(self__.quiz))));
});
sailing_study_guide.core.t16567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16569){var self__ = this;
var _16569__$1 = this;return self__.meta16568;
});
sailing_study_guide.core.t16567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16569,meta16568__$1){var self__ = this;
var _16569__$1 = this;return (new sailing_study_guide.core.t16567(self__.owner,self__.quiz,self__.quiz_view,meta16568__$1));
});
sailing_study_guide.core.__GT_t16567 = (function __GT_t16567(owner__$1,quiz__$1,quiz_view__$1,meta16568){return (new sailing_study_guide.core.t16567(owner__$1,quiz__$1,quiz_view__$1,meta16568));
});
}
return (new sailing_study_guide.core.t16567(owner,quiz,quiz_view,null));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map