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
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t10108 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10108 = (function (owner,answer,answer_view,meta10109){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta10109 = meta10109;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10108.cljs$lang$type = true;
sailing_study_guide.core.t10108.cljs$lang$ctorStr = "sailing-study-guide.core/t10108";
sailing_study_guide.core.t10108.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t10108");
});
sailing_study_guide.core.t10108.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t10108.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10111){var self__ = this;
var map__10112 = p__10111;var map__10112__$1 = ((cljs.core.seq_QMARK_.call(null,map__10112))?cljs.core.apply.call(null,cljs.core.hash_map,map__10112):map__10112);var choose_answer_chan = cljs.core.get.call(null,map__10112__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return React.DOM.div({"className": "answer-container"},React.DOM.button({"className": ("answer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.answer_css_class.call(null,self__.answer))), "onClick": ((function (___$1,map__10112,map__10112__$1,choose_answer_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,choose_answer_chan,self__.answer);
});})(___$1,map__10112,map__10112__$1,choose_answer_chan))
},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.answer)));
});
sailing_study_guide.core.t10108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10110){var self__ = this;
var _10110__$1 = this;return self__.meta10109;
});
sailing_study_guide.core.t10108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10110,meta10109__$1){var self__ = this;
var _10110__$1 = this;return (new sailing_study_guide.core.t10108(self__.owner,self__.answer,self__.answer_view,meta10109__$1));
});
sailing_study_guide.core.__GT_t10108 = (function __GT_t10108(owner__$1,answer__$1,answer_view__$1,meta10109){return (new sailing_study_guide.core.t10108(owner__$1,answer__$1,answer_view__$1,meta10109));
});
}
return (new sailing_study_guide.core.t10108(owner,answer,answer_view,null));
});
sailing_study_guide.core.answer_section_view = (function answer_section_view(answers,owner){if(typeof sailing_study_guide.core.t10118 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10118 = (function (owner,answers,answer_section_view,meta10119){
this.owner = owner;
this.answers = answers;
this.answer_section_view = answer_section_view;
this.meta10119 = meta10119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10118.cljs$lang$type = true;
sailing_study_guide.core.t10118.cljs$lang$ctorStr = "sailing-study-guide.core/t10118";
sailing_study_guide.core.t10118.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t10118");
});
sailing_study_guide.core.t10118.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t10118.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10121){var self__ = this;
var map__10122 = p__10121;var map__10122__$1 = ((cljs.core.seq_QMARK_.call(null,map__10122))?cljs.core.apply.call(null,cljs.core.hash_map,map__10122):map__10122);var choose_answer_chan = cljs.core.get.call(null,map__10122__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "answer-section"},om.core.build_all.call(null,sailing_study_guide.core.answer_view,self__.answers,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),choose_answer_chan], null)], null)));
});
sailing_study_guide.core.t10118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10120){var self__ = this;
var _10120__$1 = this;return self__.meta10119;
});
sailing_study_guide.core.t10118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10120,meta10119__$1){var self__ = this;
var _10120__$1 = this;return (new sailing_study_guide.core.t10118(self__.owner,self__.answers,self__.answer_section_view,meta10119__$1));
});
sailing_study_guide.core.__GT_t10118 = (function __GT_t10118(owner__$1,answers__$1,answer_section_view__$1,meta10119){return (new sailing_study_guide.core.t10118(owner__$1,answers__$1,answer_section_view__$1,meta10119));
});
}
return (new sailing_study_guide.core.t10118(owner,answers,answer_section_view,null));
});
sailing_study_guide.core.question_view = (function question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t10152 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10152 = (function (owner,quiz_question,question_view,meta10153){
this.owner = owner;
this.quiz_question = quiz_question;
this.question_view = question_view;
this.meta10153 = meta10153;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10152.cljs$lang$type = true;
sailing_study_guide.core.t10152.cljs$lang$ctorStr = "sailing-study-guide.core/t10152";
sailing_study_guide.core.t10152.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t10152");
});
sailing_study_guide.core.t10152.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t10152.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10155){var self__ = this;
var map__10156 = p__10155;var map__10156__$1 = ((cljs.core.seq_QMARK_.call(null,map__10156))?cljs.core.apply.call(null,cljs.core.hash_map,map__10156):map__10156);var choose_answer_chan = cljs.core.get.call(null,map__10156__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return React.DOM.div({"className": "question-container"},React.DOM.div({"className": "question-text-container"},React.DOM.h3({"className": "question-text"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(self__.quiz_question))),React.DOM.div({"className": "media-container"}),om.core.build.call(null,sailing_study_guide.core.answer_section_view,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(self__.quiz_question)));
});
sailing_study_guide.core.t10152.prototype.om$core$IWillMount$ = true;
sailing_study_guide.core.t10152.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var choose_answer_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var c__6360__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6360__auto__,choose_answer_chan,___$1){
return (function (){var f__6361__auto__ = (function (){var switch__6345__auto__ = ((function (c__6360__auto__,choose_answer_chan,___$1){
return (function (state_10169){var state_val_10170 = (state_10169[(1)]);if((state_val_10170 === (4)))
{var inst_10159 = (state_10169[(2)]);var inst_10160 = cljs.core.deref.call(null,inst_10159);var inst_10161 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inst_10160);var inst_10162 = ("Chose "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10161));var inst_10163 = console.log(inst_10162);var inst_10164 = om.core.update_BANG_.call(null,inst_10159,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"chosen","chosen",-1422409985));var state_10169__$1 = (function (){var statearr_10171 = state_10169;(statearr_10171[(7)] = inst_10163);
(statearr_10171[(8)] = inst_10164);
return statearr_10171;
})();var statearr_10172_10181 = state_10169__$1;(statearr_10172_10181[(2)] = null);
(statearr_10172_10181[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10170 === (3)))
{var inst_10167 = (state_10169[(2)]);var state_10169__$1 = state_10169;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10169__$1,inst_10167);
} else
{if((state_val_10170 === (2)))
{var state_10169__$1 = state_10169;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10169__$1,(4),choose_answer_chan);
} else
{if((state_val_10170 === (1)))
{var state_10169__$1 = state_10169;var statearr_10173_10182 = state_10169__$1;(statearr_10173_10182[(2)] = null);
(statearr_10173_10182[(1)] = (2));
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
var state_machine__6346__auto____0 = (function (){var statearr_10177 = [null,null,null,null,null,null,null,null,null];(statearr_10177[(0)] = state_machine__6346__auto__);
(statearr_10177[(1)] = (1));
return statearr_10177;
});
var state_machine__6346__auto____1 = (function (state_10169){while(true){
var ret_value__6347__auto__ = (function (){try{while(true){
var result__6348__auto__ = switch__6345__auto__.call(null,state_10169);if(cljs.core.keyword_identical_QMARK_.call(null,result__6348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6348__auto__;
}
break;
}
}catch (e10178){if((e10178 instanceof Object))
{var ex__6349__auto__ = e10178;var statearr_10179_10183 = state_10169;(statearr_10179_10183[(5)] = ex__6349__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10169);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10184 = state_10169;
state_10169 = G__10184;
continue;
}
} else
{return ret_value__6347__auto__;
}
break;
}
});
state_machine__6346__auto__ = function(state_10169){
switch(arguments.length){
case 0:
return state_machine__6346__auto____0.call(this);
case 1:
return state_machine__6346__auto____1.call(this,state_10169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6346__auto____0;
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6346__auto____1;
return state_machine__6346__auto__;
})()
;})(switch__6345__auto__,c__6360__auto__,choose_answer_chan,___$1))
})();var state__6362__auto__ = (function (){var statearr_10180 = f__6361__auto__.call(null);(statearr_10180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6360__auto__);
return statearr_10180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6362__auto__);
});})(c__6360__auto__,choose_answer_chan,___$1))
);
return c__6360__auto__;
});
sailing_study_guide.core.t10152.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t10152.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),cljs.core.async.chan.call(null)], null);
});
sailing_study_guide.core.t10152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10154){var self__ = this;
var _10154__$1 = this;return self__.meta10153;
});
sailing_study_guide.core.t10152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10154,meta10153__$1){var self__ = this;
var _10154__$1 = this;return (new sailing_study_guide.core.t10152(self__.owner,self__.quiz_question,self__.question_view,meta10153__$1));
});
sailing_study_guide.core.__GT_t10152 = (function __GT_t10152(owner__$1,quiz_question__$1,question_view__$1,meta10153){return (new sailing_study_guide.core.t10152(owner__$1,quiz_question__$1,question_view__$1,meta10153));
});
}
return (new sailing_study_guide.core.t10152(owner,quiz_question,question_view,null));
});
sailing_study_guide.core.header_bar_view = (function header_bar_view(section,_){if(typeof sailing_study_guide.core.t10188 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10188 = (function (_,section,header_bar_view,meta10189){
this._ = _;
this.section = section;
this.header_bar_view = header_bar_view;
this.meta10189 = meta10189;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10188.cljs$lang$type = true;
sailing_study_guide.core.t10188.cljs$lang$ctorStr = "sailing-study-guide.core/t10188";
sailing_study_guide.core.t10188.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t10188");
});
sailing_study_guide.core.t10188.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10188.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.nav({"className": "tab-bar"},React.DOM.section({"className": "left-small text-center"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_question_num)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_num_questions))),React.DOM.section({"className": "middle tab-bar-section"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.section)),React.DOM.section({"className": "right-small"},React.DOM.a({"href": "#", "className": "right-off-canvas-toggle menu-icon"},React.DOM.span(null))));
});
sailing_study_guide.core.t10188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10190){var self__ = this;
var _10190__$1 = this;return self__.meta10189;
});
sailing_study_guide.core.t10188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10190,meta10189__$1){var self__ = this;
var _10190__$1 = this;return (new sailing_study_guide.core.t10188(self__._,self__.section,self__.header_bar_view,meta10189__$1));
});
sailing_study_guide.core.__GT_t10188 = (function __GT_t10188(___$1,section__$1,header_bar_view__$1,meta10189){return (new sailing_study_guide.core.t10188(___$1,section__$1,header_bar_view__$1,meta10189));
});
}
return (new sailing_study_guide.core.t10188(_,section,header_bar_view,null));
});
sailing_study_guide.core.header_progress_view = (function header_progress_view(section,_){if(typeof sailing_study_guide.core.t10194 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10194 = (function (_,section,header_progress_view,meta10195){
this._ = _;
this.section = section;
this.header_progress_view = header_progress_view;
this.meta10195 = meta10195;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10194.cljs$lang$type = true;
sailing_study_guide.core.t10194.cljs$lang$ctorStr = "sailing-study-guide.core/t10194";
sailing_study_guide.core.t10194.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t10194");
});
sailing_study_guide.core.t10194.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10194.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.div({"className": "progress"},React.DOM.span({"style": {"width": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (current_question_num / total_num_questions)))+"%")}, "className": "meter"}));
});
sailing_study_guide.core.t10194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10196){var self__ = this;
var _10196__$1 = this;return self__.meta10195;
});
sailing_study_guide.core.t10194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10196,meta10195__$1){var self__ = this;
var _10196__$1 = this;return (new sailing_study_guide.core.t10194(self__._,self__.section,self__.header_progress_view,meta10195__$1));
});
sailing_study_guide.core.__GT_t10194 = (function __GT_t10194(___$1,section__$1,header_progress_view__$1,meta10195){return (new sailing_study_guide.core.t10194(___$1,section__$1,header_progress_view__$1,meta10195));
});
}
return (new sailing_study_guide.core.t10194(_,section,header_progress_view,null));
});
sailing_study_guide.core.header_view = (function header_view(section,_){if(typeof sailing_study_guide.core.t10200 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10200 = (function (_,section,header_view,meta10201){
this._ = _;
this.section = section;
this.header_view = header_view;
this.meta10201 = meta10201;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10200.cljs$lang$type = true;
sailing_study_guide.core.t10200.cljs$lang$ctorStr = "sailing-study-guide.core/t10200";
sailing_study_guide.core.t10200.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t10200");
});
sailing_study_guide.core.t10200.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10200.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.div({"className": "quiz-header"},om.core.build.call(null,sailing_study_guide.core.header_bar_view,self__.section),om.core.build.call(null,sailing_study_guide.core.header_progress_view,self__.section));
});
sailing_study_guide.core.t10200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10202){var self__ = this;
var _10202__$1 = this;return self__.meta10201;
});
sailing_study_guide.core.t10200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10202,meta10201__$1){var self__ = this;
var _10202__$1 = this;return (new sailing_study_guide.core.t10200(self__._,self__.section,self__.header_view,meta10201__$1));
});
sailing_study_guide.core.__GT_t10200 = (function __GT_t10200(___$1,section__$1,header_view__$1,meta10201){return (new sailing_study_guide.core.t10200(___$1,section__$1,header_view__$1,meta10201));
});
}
return (new sailing_study_guide.core.t10200(_,section,header_view,null));
});
sailing_study_guide.core.section_view = (function section_view(section,owner){if(typeof sailing_study_guide.core.t10206 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10206 = (function (owner,section,section_view,meta10207){
this.owner = owner;
this.section = section;
this.section_view = section_view;
this.meta10207 = meta10207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10206.cljs$lang$type = true;
sailing_study_guide.core.t10206.cljs$lang$ctorStr = "sailing-study-guide.core/t10206";
sailing_study_guide.core.t10206.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t10206");
});
sailing_study_guide.core.t10206.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10206.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"data-offcanvas": true, "className": "off-canvas-wrap", "id": "quiz-section"},React.DOM.div({"className": "main-content inner-wrap"},om.core.build.call(null,sailing_study_guide.core.header_view,self__.section),om.core.build.call(null,sailing_study_guide.core.question_view,cljs.core.get.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section),new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section))),React.DOM.a({"className": "exit-off-canvas"})));
});
sailing_study_guide.core.t10206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10208){var self__ = this;
var _10208__$1 = this;return self__.meta10207;
});
sailing_study_guide.core.t10206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10208,meta10207__$1){var self__ = this;
var _10208__$1 = this;return (new sailing_study_guide.core.t10206(self__.owner,self__.section,self__.section_view,meta10207__$1));
});
sailing_study_guide.core.__GT_t10206 = (function __GT_t10206(owner__$1,section__$1,section_view__$1,meta10207){return (new sailing_study_guide.core.t10206(owner__$1,section__$1,section_view__$1,meta10207));
});
}
return (new sailing_study_guide.core.t10206(owner,section,section_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(quiz,owner){if(typeof sailing_study_guide.core.t10212 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10212 = (function (owner,quiz,quiz_view,meta10213){
this.owner = owner;
this.quiz = quiz;
this.quiz_view = quiz_view;
this.meta10213 = meta10213;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10212.cljs$lang$type = true;
sailing_study_guide.core.t10212.cljs$lang$ctorStr = "sailing-study-guide.core/t10212";
sailing_study_guide.core.t10212.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t10212");
});
sailing_study_guide.core.t10212.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t10212.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.section_view,cljs.core.nth.call(null,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(self__.quiz),new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(self__.quiz))));
});
sailing_study_guide.core.t10212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10214){var self__ = this;
var _10214__$1 = this;return self__.meta10213;
});
sailing_study_guide.core.t10212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10214,meta10213__$1){var self__ = this;
var _10214__$1 = this;return (new sailing_study_guide.core.t10212(self__.owner,self__.quiz,self__.quiz_view,meta10213__$1));
});
sailing_study_guide.core.__GT_t10212 = (function __GT_t10212(owner__$1,quiz__$1,quiz_view__$1,meta10213){return (new sailing_study_guide.core.t10212(owner__$1,quiz__$1,quiz_view__$1,meta10213));
});
}
return (new sailing_study_guide.core.t10212(owner,quiz,quiz_view,null));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map