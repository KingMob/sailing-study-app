// Compiled by ClojureScript 0.0-2268
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
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t9604 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9604 = (function (owner,answer,answer_view,meta9605){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta9605 = meta9605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9604.cljs$lang$type = true;
sailing_study_guide.core.t9604.cljs$lang$ctorStr = "sailing-study-guide.core/t9604";
sailing_study_guide.core.t9604.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t9604");
});
sailing_study_guide.core.t9604.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t9604.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9607){var self__ = this;
var map__9608 = p__9607;var map__9608__$1 = ((cljs.core.seq_QMARK_.call(null,map__9608))?cljs.core.apply.call(null,cljs.core.hash_map,map__9608):map__9608);var choose_answer_chan = cljs.core.get.call(null,map__9608__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return React.DOM.div({"className": "answer-container"},React.DOM.button({"className": ("answer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.answer_css_class.call(null,self__.answer))), "onClick": ((function (___$1,map__9608,map__9608__$1,choose_answer_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,choose_answer_chan,self__.answer);
});})(___$1,map__9608,map__9608__$1,choose_answer_chan))
},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.answer)));
});
sailing_study_guide.core.t9604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9606){var self__ = this;
var _9606__$1 = this;return self__.meta9605;
});
sailing_study_guide.core.t9604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9606,meta9605__$1){var self__ = this;
var _9606__$1 = this;return (new sailing_study_guide.core.t9604(self__.owner,self__.answer,self__.answer_view,meta9605__$1));
});
sailing_study_guide.core.__GT_t9604 = (function __GT_t9604(owner__$1,answer__$1,answer_view__$1,meta9605){return (new sailing_study_guide.core.t9604(owner__$1,answer__$1,answer_view__$1,meta9605));
});
}
return (new sailing_study_guide.core.t9604(owner,answer,answer_view,null));
});
sailing_study_guide.core.question_view = (function question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t9638 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9638 = (function (owner,quiz_question,question_view,meta9639){
this.owner = owner;
this.quiz_question = quiz_question;
this.question_view = question_view;
this.meta9639 = meta9639;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9638.cljs$lang$type = true;
sailing_study_guide.core.t9638.cljs$lang$ctorStr = "sailing-study-guide.core/t9638";
sailing_study_guide.core.t9638.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t9638");
});
sailing_study_guide.core.t9638.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t9638.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9641){var self__ = this;
var map__9642 = p__9641;var map__9642__$1 = ((cljs.core.seq_QMARK_.call(null,map__9642))?cljs.core.apply.call(null,cljs.core.hash_map,map__9642):map__9642);var choose_answer_chan = cljs.core.get.call(null,map__9642__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return React.DOM.div({"className": "question-container"},React.DOM.div({"className": "question-text-container"},React.DOM.h3({"className": "question-text"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(self__.quiz_question))),React.DOM.div({"className": "media-container"}),cljs.core.apply.call(null,om.dom.div,{"className": "answer-section"},om.core.build_all.call(null,sailing_study_guide.core.answer_view,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),choose_answer_chan], null)], null))));
});
sailing_study_guide.core.t9638.prototype.om$core$IWillMount$ = true;
sailing_study_guide.core.t9638.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var choose_answer_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var c__6366__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto__,choose_answer_chan,___$1){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto__,choose_answer_chan,___$1){
return (function (state_9655){var state_val_9656 = (state_9655[(1)]);if((state_val_9656 === (4)))
{var inst_9645 = (state_9655[(2)]);var inst_9646 = cljs.core.deref.call(null,inst_9645);var inst_9647 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inst_9646);var inst_9648 = ("Chose "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9647));var inst_9649 = console.log(inst_9648);var inst_9650 = om.core.update_BANG_.call(null,inst_9645,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"chosen","chosen",-1422409985));var state_9655__$1 = (function (){var statearr_9657 = state_9655;(statearr_9657[(7)] = inst_9649);
(statearr_9657[(8)] = inst_9650);
return statearr_9657;
})();var statearr_9658_9667 = state_9655__$1;(statearr_9658_9667[(2)] = null);
(statearr_9658_9667[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9656 === (3)))
{var inst_9653 = (state_9655[(2)]);var state_9655__$1 = state_9655;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9655__$1,inst_9653);
} else
{if((state_val_9656 === (2)))
{var state_9655__$1 = state_9655;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9655__$1,(4),choose_answer_chan);
} else
{if((state_val_9656 === (1)))
{var state_9655__$1 = state_9655;var statearr_9659_9668 = state_9655__$1;(statearr_9659_9668[(2)] = null);
(statearr_9659_9668[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6366__auto__,choose_answer_chan,___$1))
;return ((function (switch__6351__auto__,c__6366__auto__,choose_answer_chan,___$1){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_9663 = [null,null,null,null,null,null,null,null,null];(statearr_9663[(0)] = state_machine__6352__auto__);
(statearr_9663[(1)] = (1));
return statearr_9663;
});
var state_machine__6352__auto____1 = (function (state_9655){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_9655);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e9664){if((e9664 instanceof Object))
{var ex__6355__auto__ = e9664;var statearr_9665_9669 = state_9655;(statearr_9665_9669[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9655);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9664;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9670 = state_9655;
state_9655 = G__9670;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_9655){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_9655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto__,choose_answer_chan,___$1))
})();var state__6368__auto__ = (function (){var statearr_9666 = f__6367__auto__.call(null);(statearr_9666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto__);
return statearr_9666;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto__,choose_answer_chan,___$1))
);
return c__6366__auto__;
});
sailing_study_guide.core.t9638.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t9638.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),cljs.core.async.chan.call(null)], null);
});
sailing_study_guide.core.t9638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9640){var self__ = this;
var _9640__$1 = this;return self__.meta9639;
});
sailing_study_guide.core.t9638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9640,meta9639__$1){var self__ = this;
var _9640__$1 = this;return (new sailing_study_guide.core.t9638(self__.owner,self__.quiz_question,self__.question_view,meta9639__$1));
});
sailing_study_guide.core.__GT_t9638 = (function __GT_t9638(owner__$1,quiz_question__$1,question_view__$1,meta9639){return (new sailing_study_guide.core.t9638(owner__$1,quiz_question__$1,question_view__$1,meta9639));
});
}
return (new sailing_study_guide.core.t9638(owner,quiz_question,question_view,null));
});
sailing_study_guide.core.header_offcanvas_menu_link = (function header_offcanvas_menu_link(){return React.DOM.a({"href": "#", "className": "right-off-canvas-toggle menu-icon"},React.DOM.span(null));
});
sailing_study_guide.core.header_bar_view = (function header_bar_view(section,_){if(typeof sailing_study_guide.core.t9674 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9674 = (function (_,section,header_bar_view,meta9675){
this._ = _;
this.section = section;
this.header_bar_view = header_bar_view;
this.meta9675 = meta9675;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9674.cljs$lang$type = true;
sailing_study_guide.core.t9674.cljs$lang$ctorStr = "sailing-study-guide.core/t9674";
sailing_study_guide.core.t9674.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t9674");
});
sailing_study_guide.core.t9674.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t9674.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.nav({"className": "tab-bar"},React.DOM.section({"className": "left-small text-center"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_question_num)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_num_questions))),React.DOM.section({"className": "middle tab-bar-section"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.section)),React.DOM.section({"className": "right-small"},sailing_study_guide.core.header_offcanvas_menu_link.call(null)));
});
sailing_study_guide.core.t9674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9676){var self__ = this;
var _9676__$1 = this;return self__.meta9675;
});
sailing_study_guide.core.t9674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9676,meta9675__$1){var self__ = this;
var _9676__$1 = this;return (new sailing_study_guide.core.t9674(self__._,self__.section,self__.header_bar_view,meta9675__$1));
});
sailing_study_guide.core.__GT_t9674 = (function __GT_t9674(___$1,section__$1,header_bar_view__$1,meta9675){return (new sailing_study_guide.core.t9674(___$1,section__$1,header_bar_view__$1,meta9675));
});
}
return (new sailing_study_guide.core.t9674(_,section,header_bar_view,null));
});
sailing_study_guide.core.header_view = (function header_view(section,_){if(typeof sailing_study_guide.core.t9680 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9680 = (function (_,section,header_view,meta9681){
this._ = _;
this.section = section;
this.header_view = header_view;
this.meta9681 = meta9681;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9680.cljs$lang$type = true;
sailing_study_guide.core.t9680.cljs$lang$ctorStr = "sailing-study-guide.core/t9680";
sailing_study_guide.core.t9680.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t9680");
});
sailing_study_guide.core.t9680.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t9680.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.div({"className": "quiz-header"},om.core.build.call(null,sailing_study_guide.core.header_bar_view,self__.section),React.DOM.div({"className": "progress"},React.DOM.span({"style": {"width": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (current_question_num / total_num_questions)))+"%")}, "className": "meter"})));
});
sailing_study_guide.core.t9680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9682){var self__ = this;
var _9682__$1 = this;return self__.meta9681;
});
sailing_study_guide.core.t9680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9682,meta9681__$1){var self__ = this;
var _9682__$1 = this;return (new sailing_study_guide.core.t9680(self__._,self__.section,self__.header_view,meta9681__$1));
});
sailing_study_guide.core.__GT_t9680 = (function __GT_t9680(___$1,section__$1,header_view__$1,meta9681){return (new sailing_study_guide.core.t9680(___$1,section__$1,header_view__$1,meta9681));
});
}
return (new sailing_study_guide.core.t9680(_,section,header_view,null));
});
sailing_study_guide.core.section_view = (function section_view(section,owner){if(typeof sailing_study_guide.core.t9686 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9686 = (function (owner,section,section_view,meta9687){
this.owner = owner;
this.section = section;
this.section_view = section_view;
this.meta9687 = meta9687;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9686.cljs$lang$type = true;
sailing_study_guide.core.t9686.cljs$lang$ctorStr = "sailing-study-guide.core/t9686";
sailing_study_guide.core.t9686.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t9686");
});
sailing_study_guide.core.t9686.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t9686.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"data-offcanvas": true, "className": "off-canvas-wrap", "id": "quiz-section"},React.DOM.div({"className": "inner-wrap"},om.core.build.call(null,sailing_study_guide.core.header_view,self__.section),om.core.build.call(null,sailing_study_guide.core.question_view,cljs.core.get.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section),new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section)))));
});
sailing_study_guide.core.t9686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9688){var self__ = this;
var _9688__$1 = this;return self__.meta9687;
});
sailing_study_guide.core.t9686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9688,meta9687__$1){var self__ = this;
var _9688__$1 = this;return (new sailing_study_guide.core.t9686(self__.owner,self__.section,self__.section_view,meta9687__$1));
});
sailing_study_guide.core.__GT_t9686 = (function __GT_t9686(owner__$1,section__$1,section_view__$1,meta9687){return (new sailing_study_guide.core.t9686(owner__$1,section__$1,section_view__$1,meta9687));
});
}
return (new sailing_study_guide.core.t9686(owner,section,section_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(quiz,owner){if(typeof sailing_study_guide.core.t9692 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9692 = (function (owner,quiz,quiz_view,meta9693){
this.owner = owner;
this.quiz = quiz;
this.quiz_view = quiz_view;
this.meta9693 = meta9693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9692.cljs$lang$type = true;
sailing_study_guide.core.t9692.cljs$lang$ctorStr = "sailing-study-guide.core/t9692";
sailing_study_guide.core.t9692.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t9692");
});
sailing_study_guide.core.t9692.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t9692.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.section_view,cljs.core.nth.call(null,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(self__.quiz),new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(self__.quiz))));
});
sailing_study_guide.core.t9692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9694){var self__ = this;
var _9694__$1 = this;return self__.meta9693;
});
sailing_study_guide.core.t9692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9694,meta9693__$1){var self__ = this;
var _9694__$1 = this;return (new sailing_study_guide.core.t9692(self__.owner,self__.quiz,self__.quiz_view,meta9693__$1));
});
sailing_study_guide.core.__GT_t9692 = (function __GT_t9692(owner__$1,quiz__$1,quiz_view__$1,meta9693){return (new sailing_study_guide.core.t9692(owner__$1,quiz__$1,quiz_view__$1,meta9693));
});
}
return (new sailing_study_guide.core.t9692(owner,quiz,quiz_view,null));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map