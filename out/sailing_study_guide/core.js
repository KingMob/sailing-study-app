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
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t14063 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t14063 = (function (owner,answer,answer_view,meta14064){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta14064 = meta14064;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t14063.cljs$lang$type = true;
sailing_study_guide.core.t14063.cljs$lang$ctorStr = "sailing-study-guide.core/t14063";
sailing_study_guide.core.t14063.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t14063");
});
sailing_study_guide.core.t14063.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t14063.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__14066){var self__ = this;
var map__14067 = p__14066;var map__14067__$1 = ((cljs.core.seq_QMARK_.call(null,map__14067))?cljs.core.apply.call(null,cljs.core.hash_map,map__14067):map__14067);var choose_answer_chan = cljs.core.get.call(null,map__14067__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return React.DOM.div({"className": "small-6 columns"},React.DOM.button({"className": ("answer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.answer_css_class.call(null,self__.answer))), "onClick": ((function (___$1,map__14067,map__14067__$1,choose_answer_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,choose_answer_chan,self__.answer);
});})(___$1,map__14067,map__14067__$1,choose_answer_chan))
},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.answer)));
});
sailing_study_guide.core.t14063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14065){var self__ = this;
var _14065__$1 = this;return self__.meta14064;
});
sailing_study_guide.core.t14063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14065,meta14064__$1){var self__ = this;
var _14065__$1 = this;return (new sailing_study_guide.core.t14063(self__.owner,self__.answer,self__.answer_view,meta14064__$1));
});
sailing_study_guide.core.__GT_t14063 = (function __GT_t14063(owner__$1,answer__$1,answer_view__$1,meta14064){return (new sailing_study_guide.core.t14063(owner__$1,answer__$1,answer_view__$1,meta14064));
});
}
return (new sailing_study_guide.core.t14063(owner,answer,answer_view,null));
});
sailing_study_guide.core.quiz_question_view = (function quiz_question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t14097 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t14097 = (function (owner,quiz_question,quiz_question_view,meta14098){
this.owner = owner;
this.quiz_question = quiz_question;
this.quiz_question_view = quiz_question_view;
this.meta14098 = meta14098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t14097.cljs$lang$type = true;
sailing_study_guide.core.t14097.cljs$lang$ctorStr = "sailing-study-guide.core/t14097";
sailing_study_guide.core.t14097.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t14097");
});
sailing_study_guide.core.t14097.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t14097.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__14100){var self__ = this;
var map__14101 = p__14100;var map__14101__$1 = ((cljs.core.seq_QMARK_.call(null,map__14101))?cljs.core.apply.call(null,cljs.core.hash_map,map__14101):map__14101);var choose_answer_chan = cljs.core.get.call(null,map__14101__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var ___$1 = this;return React.DOM.div({"className": "row"},React.DOM.h3({"className": "quiz-question small-12 columns"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(self__.quiz_question)),cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,sailing_study_guide.core.answer_view,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),choose_answer_chan], null)], null))));
});
sailing_study_guide.core.t14097.prototype.om$core$IWillMount$ = true;
sailing_study_guide.core.t14097.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var choose_answer_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140));var c__6366__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto__,choose_answer_chan,___$1){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto__,choose_answer_chan,___$1){
return (function (state_14114){var state_val_14115 = (state_14114[(1)]);if((state_val_14115 === (4)))
{var inst_14104 = (state_14114[(2)]);var inst_14105 = cljs.core.deref.call(null,inst_14104);var inst_14106 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inst_14105);var inst_14107 = ("Chose "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14106));var inst_14108 = console.log(inst_14107);var inst_14109 = om.core.update_BANG_.call(null,inst_14104,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"chosen","chosen",-1422409985));var state_14114__$1 = (function (){var statearr_14116 = state_14114;(statearr_14116[(7)] = inst_14109);
(statearr_14116[(8)] = inst_14108);
return statearr_14116;
})();var statearr_14117_14126 = state_14114__$1;(statearr_14117_14126[(2)] = null);
(statearr_14117_14126[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14115 === (3)))
{var inst_14112 = (state_14114[(2)]);var state_14114__$1 = state_14114;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14114__$1,inst_14112);
} else
{if((state_val_14115 === (2)))
{var state_14114__$1 = state_14114;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14114__$1,(4),choose_answer_chan);
} else
{if((state_val_14115 === (1)))
{var state_14114__$1 = state_14114;var statearr_14118_14127 = state_14114__$1;(statearr_14118_14127[(2)] = null);
(statearr_14118_14127[(1)] = (2));
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
var state_machine__6352__auto____0 = (function (){var statearr_14122 = [null,null,null,null,null,null,null,null,null];(statearr_14122[(0)] = state_machine__6352__auto__);
(statearr_14122[(1)] = (1));
return statearr_14122;
});
var state_machine__6352__auto____1 = (function (state_14114){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_14114);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e14123){if((e14123 instanceof Object))
{var ex__6355__auto__ = e14123;var statearr_14124_14128 = state_14114;(statearr_14124_14128[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14114);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14123;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14129 = state_14114;
state_14114 = G__14129;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_14114){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_14114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto__,choose_answer_chan,___$1))
})();var state__6368__auto__ = (function (){var statearr_14125 = f__6367__auto__.call(null);(statearr_14125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto__);
return statearr_14125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto__,choose_answer_chan,___$1))
);
return c__6366__auto__;
});
sailing_study_guide.core.t14097.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t14097.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",-54838140),cljs.core.async.chan.call(null)], null);
});
sailing_study_guide.core.t14097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14099){var self__ = this;
var _14099__$1 = this;return self__.meta14098;
});
sailing_study_guide.core.t14097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14099,meta14098__$1){var self__ = this;
var _14099__$1 = this;return (new sailing_study_guide.core.t14097(self__.owner,self__.quiz_question,self__.quiz_question_view,meta14098__$1));
});
sailing_study_guide.core.__GT_t14097 = (function __GT_t14097(owner__$1,quiz_question__$1,quiz_question_view__$1,meta14098){return (new sailing_study_guide.core.t14097(owner__$1,quiz_question__$1,quiz_question_view__$1,meta14098));
});
}
return (new sailing_study_guide.core.t14097(owner,quiz_question,quiz_question_view,null));
});
sailing_study_guide.core.header_offcanvas_menu_link = (function header_offcanvas_menu_link(){return React.DOM.a({"href": "#", "className": "right-off-canvas-toggle menu-icon"},React.DOM.span(null));
});
sailing_study_guide.core.header_view = (function header_view(section,_){if(typeof sailing_study_guide.core.t14133 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t14133 = (function (_,section,header_view,meta14134){
this._ = _;
this.section = section;
this.header_view = header_view;
this.meta14134 = meta14134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t14133.cljs$lang$type = true;
sailing_study_guide.core.t14133.cljs$lang$ctorStr = "sailing-study-guide.core/t14133";
sailing_study_guide.core.t14133.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t14133");
});
sailing_study_guide.core.t14133.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t14133.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.div({"className": "quiz-header"},React.DOM.nav({"className": "tab-bar"},React.DOM.section({"className": "left-small text-center"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_question_num)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_num_questions))),React.DOM.section({"className": "middle tab-bar-section"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.section)),React.DOM.section({"className": "right-small"},sailing_study_guide.core.header_offcanvas_menu_link.call(null))),React.DOM.div({"className": "progress"},React.DOM.span({"style": {"width": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (current_question_num / total_num_questions)))+"%")}, "className": "meter"})));
});
sailing_study_guide.core.t14133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14135){var self__ = this;
var _14135__$1 = this;return self__.meta14134;
});
sailing_study_guide.core.t14133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14135,meta14134__$1){var self__ = this;
var _14135__$1 = this;return (new sailing_study_guide.core.t14133(self__._,self__.section,self__.header_view,meta14134__$1));
});
sailing_study_guide.core.__GT_t14133 = (function __GT_t14133(___$1,section__$1,header_view__$1,meta14134){return (new sailing_study_guide.core.t14133(___$1,section__$1,header_view__$1,meta14134));
});
}
return (new sailing_study_guide.core.t14133(_,section,header_view,null));
});
sailing_study_guide.core.section_view = (function section_view(section,owner){if(typeof sailing_study_guide.core.t14139 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t14139 = (function (owner,section,section_view,meta14140){
this.owner = owner;
this.section = section;
this.section_view = section_view;
this.meta14140 = meta14140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t14139.cljs$lang$type = true;
sailing_study_guide.core.t14139.cljs$lang$ctorStr = "sailing-study-guide.core/t14139";
sailing_study_guide.core.t14139.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t14139");
});
sailing_study_guide.core.t14139.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t14139.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"data-offcanvas": true, "className": "off-canvas-wrap", "id": "quiz-section"},React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.header_view,self__.section)),React.DOM.section({"className": "main-section"},om.core.build.call(null,sailing_study_guide.core.quiz_question_view,cljs.core.get.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section),new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section)))));
});
sailing_study_guide.core.t14139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14141){var self__ = this;
var _14141__$1 = this;return self__.meta14140;
});
sailing_study_guide.core.t14139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14141,meta14140__$1){var self__ = this;
var _14141__$1 = this;return (new sailing_study_guide.core.t14139(self__.owner,self__.section,self__.section_view,meta14140__$1));
});
sailing_study_guide.core.__GT_t14139 = (function __GT_t14139(owner__$1,section__$1,section_view__$1,meta14140){return (new sailing_study_guide.core.t14139(owner__$1,section__$1,section_view__$1,meta14140));
});
}
return (new sailing_study_guide.core.t14139(owner,section,section_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(quiz,owner){if(typeof sailing_study_guide.core.t14145 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t14145 = (function (owner,quiz,quiz_view,meta14146){
this.owner = owner;
this.quiz = quiz;
this.quiz_view = quiz_view;
this.meta14146 = meta14146;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t14145.cljs$lang$type = true;
sailing_study_guide.core.t14145.cljs$lang$ctorStr = "sailing-study-guide.core/t14145";
sailing_study_guide.core.t14145.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"sailing-study-guide.core/t14145");
});
sailing_study_guide.core.t14145.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t14145.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.section_view,cljs.core.nth.call(null,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(self__.quiz),new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(self__.quiz))));
});
sailing_study_guide.core.t14145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14147){var self__ = this;
var _14147__$1 = this;return self__.meta14146;
});
sailing_study_guide.core.t14145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14147,meta14146__$1){var self__ = this;
var _14147__$1 = this;return (new sailing_study_guide.core.t14145(self__.owner,self__.quiz,self__.quiz_view,meta14146__$1));
});
sailing_study_guide.core.__GT_t14145 = (function __GT_t14145(owner__$1,quiz__$1,quiz_view__$1,meta14146){return (new sailing_study_guide.core.t14145(owner__$1,quiz__$1,quiz_view__$1,meta14146));
});
}
return (new sailing_study_guide.core.t14145(owner,quiz,quiz_view,null));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map