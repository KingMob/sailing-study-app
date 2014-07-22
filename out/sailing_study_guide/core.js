// Compiled by ClojureScript 0.0-2234
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
sailing_study_guide.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"banner","banner",3912528542),"Quiz",new cljs.core.Keyword(null,"current-section","current-section",1995082243),0,new cljs.core.Keyword(null,"sections","sections",1961841056),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Parts of the boat",new cljs.core.Keyword(null,"current-question","current-question",3546811692),0,new cljs.core.Keyword(null,"questions","questions",3526636735),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",4143001432),"What is placed between the boat and the dock to cushion the hull?",new cljs.core.Keyword(null,"image","image",1114217677),null,new cljs.core.Keyword(null,"answers","answers",4461472743),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Tiller",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Boomvang",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Fender",new cljs.core.Keyword(null,"correct","correct",1969069020),true,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Gooseneck",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",4143001432),"What's the small sail at front called?",new cljs.core.Keyword(null,"image","image",1114217677),null,new cljs.core.Keyword(null,"answers","answers",4461472743),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Jib",new cljs.core.Keyword(null,"correct","correct",1969069020),true,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Jab",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Jibjab",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Jibber jabber",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",4143001432),"What's the biggest danger to a boat?",new cljs.core.Keyword(null,"image","image",1114217677),null,new cljs.core.Keyword(null,"answers","answers",4461472743),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Pirates",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Giant squids",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"Barnacles",new cljs.core.Keyword(null,"correct","correct",1969069020),false,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",1017460895),"That you'll need a bigger one",new cljs.core.Keyword(null,"correct","correct",1969069020),true,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"unchosen","unchosen",539193021)], null)], null)], null)], null)], null)], null)], null));
sailing_study_guide.core.answer_css_class = (function answer_css_class(answer){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unchosen","unchosen",539193021),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(answer)))
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
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t13660 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t13660 = (function (owner,answer,answer_view,meta13661){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta13661 = meta13661;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t13660.cljs$lang$type = true;
sailing_study_guide.core.t13660.cljs$lang$ctorStr = "sailing-study-guide.core/t13660";
sailing_study_guide.core.t13660.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"sailing-study-guide.core/t13660");
});
sailing_study_guide.core.t13660.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t13660.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__13663){var self__ = this;
var map__13664 = p__13663;var map__13664__$1 = ((cljs.core.seq_QMARK_.call(null,map__13664))?cljs.core.apply.call(null,cljs.core.hash_map,map__13664):map__13664);var choose_answer_chan = cljs.core.get.call(null,map__13664__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133));var ___$1 = this;return React.DOM.div({"className": ("answer small-6 columns button "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.answer_css_class.call(null,self__.answer))), "onClick": ((function (___$1,map__13664,map__13664__$1,choose_answer_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,choose_answer_chan,self__.answer);
});})(___$1,map__13664,map__13664__$1,choose_answer_chan))
},new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(self__.answer));
});
sailing_study_guide.core.t13660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13662){var self__ = this;
var _13662__$1 = this;return self__.meta13661;
});
sailing_study_guide.core.t13660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13662,meta13661__$1){var self__ = this;
var _13662__$1 = this;return (new sailing_study_guide.core.t13660(self__.owner,self__.answer,self__.answer_view,meta13661__$1));
});
sailing_study_guide.core.__GT_t13660 = (function __GT_t13660(owner__$1,answer__$1,answer_view__$1,meta13661){return (new sailing_study_guide.core.t13660(owner__$1,answer__$1,answer_view__$1,meta13661));
});
}
return (new sailing_study_guide.core.t13660(owner,answer,answer_view,null));
});
sailing_study_guide.core.quiz_question_view = (function quiz_question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t13694 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t13694 = (function (owner,quiz_question,quiz_question_view,meta13695){
this.owner = owner;
this.quiz_question = quiz_question;
this.quiz_question_view = quiz_question_view;
this.meta13695 = meta13695;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t13694.cljs$lang$type = true;
sailing_study_guide.core.t13694.cljs$lang$ctorStr = "sailing-study-guide.core/t13694";
sailing_study_guide.core.t13694.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"sailing-study-guide.core/t13694");
});
sailing_study_guide.core.t13694.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t13694.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__13697){var self__ = this;
var map__13698 = p__13697;var map__13698__$1 = ((cljs.core.seq_QMARK_.call(null,map__13698))?cljs.core.apply.call(null,cljs.core.hash_map,map__13698):map__13698);var choose_answer_chan = cljs.core.get.call(null,map__13698__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133));var ___$1 = this;return React.DOM.div({"className": "row"},React.DOM.h3({"className": "quiz-question small-12 columns"},new cljs.core.Keyword(null,"question","question",4143001432).cljs$core$IFn$_invoke$arity$1(self__.quiz_question)),cljs.core.apply.call(null,om.dom.div,{"className": "small-12 columns"},om.core.build_all.call(null,sailing_study_guide.core.answer_view,new cljs.core.Keyword(null,"answers","answers",4461472743).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133),choose_answer_chan], null)], null))));
});
sailing_study_guide.core.t13694.prototype.om$core$IWillMount$ = true;
sailing_study_guide.core.t13694.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var choose_answer_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133));var c__6361__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6361__auto__,choose_answer_chan,___$1){
return (function (){var f__6362__auto__ = (function (){var switch__6346__auto__ = ((function (c__6361__auto__,choose_answer_chan,___$1){
return (function (state_13711){var state_val_13712 = (state_13711[1]);if((state_val_13712 === 4))
{var inst_13701 = (state_13711[2]);var inst_13702 = cljs.core.deref.call(null,inst_13701);var inst_13703 = new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(inst_13702);var inst_13704 = ("Chose "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13703));var inst_13705 = console.log(inst_13704);var inst_13706 = om.core.update_BANG_.call(null,inst_13701,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"chosen","chosen",3947656932));var state_13711__$1 = (function (){var statearr_13713 = state_13711;(statearr_13713[7] = inst_13706);
(statearr_13713[8] = inst_13705);
return statearr_13713;
})();var statearr_13714_13723 = state_13711__$1;(statearr_13714_13723[2] = null);
(statearr_13714_13723[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13712 === 3))
{var inst_13709 = (state_13711[2]);var state_13711__$1 = state_13711;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13711__$1,inst_13709);
} else
{if((state_val_13712 === 2))
{var state_13711__$1 = state_13711;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13711__$1,4,choose_answer_chan);
} else
{if((state_val_13712 === 1))
{var state_13711__$1 = state_13711;var statearr_13715_13724 = state_13711__$1;(statearr_13715_13724[2] = null);
(statearr_13715_13724[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__6361__auto__,choose_answer_chan,___$1))
;return ((function (switch__6346__auto__,c__6361__auto__,choose_answer_chan,___$1){
return (function() {
var state_machine__6347__auto__ = null;
var state_machine__6347__auto____0 = (function (){var statearr_13719 = [null,null,null,null,null,null,null,null,null];(statearr_13719[0] = state_machine__6347__auto__);
(statearr_13719[1] = 1);
return statearr_13719;
});
var state_machine__6347__auto____1 = (function (state_13711){while(true){
var ret_value__6348__auto__ = (function (){try{while(true){
var result__6349__auto__ = switch__6346__auto__.call(null,state_13711);if(cljs.core.keyword_identical_QMARK_.call(null,result__6349__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6349__auto__;
}
break;
}
}catch (e13720){if((e13720 instanceof Object))
{var ex__6350__auto__ = e13720;var statearr_13721_13725 = state_13711;(statearr_13721_13725[5] = ex__6350__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13711);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13720;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6348__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13726 = state_13711;
state_13711 = G__13726;
continue;
}
} else
{return ret_value__6348__auto__;
}
break;
}
});
state_machine__6347__auto__ = function(state_13711){
switch(arguments.length){
case 0:
return state_machine__6347__auto____0.call(this);
case 1:
return state_machine__6347__auto____1.call(this,state_13711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6347__auto____0;
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6347__auto____1;
return state_machine__6347__auto__;
})()
;})(switch__6346__auto__,c__6361__auto__,choose_answer_chan,___$1))
})();var state__6363__auto__ = (function (){var statearr_13722 = f__6362__auto__.call(null);(statearr_13722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6361__auto__);
return statearr_13722;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6363__auto__);
});})(c__6361__auto__,choose_answer_chan,___$1))
);
return c__6361__auto__;
});
sailing_study_guide.core.t13694.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t13694.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133),cljs.core.async.chan.call(null)], null);
});
sailing_study_guide.core.t13694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13696){var self__ = this;
var _13696__$1 = this;return self__.meta13695;
});
sailing_study_guide.core.t13694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13696,meta13695__$1){var self__ = this;
var _13696__$1 = this;return (new sailing_study_guide.core.t13694(self__.owner,self__.quiz_question,self__.quiz_question_view,meta13695__$1));
});
sailing_study_guide.core.__GT_t13694 = (function __GT_t13694(owner__$1,quiz_question__$1,quiz_question_view__$1,meta13695){return (new sailing_study_guide.core.t13694(owner__$1,quiz_question__$1,quiz_question_view__$1,meta13695));
});
}
return (new sailing_study_guide.core.t13694(owner,quiz_question,quiz_question_view,null));
});
sailing_study_guide.core.header_offcanvas_menu_link = (function header_offcanvas_menu_link(){return React.DOM.a({"href": "#", "className": "right-off-canvas-toggle menu-icon"},React.DOM.span(null));
});
sailing_study_guide.core.header_view = (function header_view(section,_){if(typeof sailing_study_guide.core.t13730 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t13730 = (function (_,section,header_view,meta13731){
this._ = _;
this.section = section;
this.header_view = header_view;
this.meta13731 = meta13731;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t13730.cljs$lang$type = true;
sailing_study_guide.core.t13730.cljs$lang$ctorStr = "sailing-study-guide.core/t13730";
sailing_study_guide.core.t13730.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"sailing-study-guide.core/t13730");
});
sailing_study_guide.core.t13730.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t13730.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",3546811692).cljs$core$IFn$_invoke$arity$1(self__.section) + 1);var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",3526636735).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.div({"className": "quiz-header"},React.DOM.nav({"className": "tab-bar"},React.DOM.section({"className": "left-small text-center"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_question_num)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_num_questions))),React.DOM.section({"className": "middle tab-bar-section"},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.section)),React.DOM.section({"className": "right-small"},sailing_study_guide.core.header_offcanvas_menu_link.call(null))),React.DOM.div({"className": "progress"},React.DOM.span({"style": {"width": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((100 * (current_question_num / total_num_questions)))+"%")}, "className": "meter"})));
});
sailing_study_guide.core.t13730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13732){var self__ = this;
var _13732__$1 = this;return self__.meta13731;
});
sailing_study_guide.core.t13730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13732,meta13731__$1){var self__ = this;
var _13732__$1 = this;return (new sailing_study_guide.core.t13730(self__._,self__.section,self__.header_view,meta13731__$1));
});
sailing_study_guide.core.__GT_t13730 = (function __GT_t13730(___$1,section__$1,header_view__$1,meta13731){return (new sailing_study_guide.core.t13730(___$1,section__$1,header_view__$1,meta13731));
});
}
return (new sailing_study_guide.core.t13730(_,section,header_view,null));
});
sailing_study_guide.core.section_view = (function section_view(section,owner){if(typeof sailing_study_guide.core.t13736 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t13736 = (function (owner,section,section_view,meta13737){
this.owner = owner;
this.section = section;
this.section_view = section_view;
this.meta13737 = meta13737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t13736.cljs$lang$type = true;
sailing_study_guide.core.t13736.cljs$lang$ctorStr = "sailing-study-guide.core/t13736";
sailing_study_guide.core.t13736.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"sailing-study-guide.core/t13736");
});
sailing_study_guide.core.t13736.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t13736.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"data-offcanvas": true, "className": "off-canvas-wrap", "id": "quiz-section"},React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.header_view,self__.section)),React.DOM.section({"className": "main-section"},om.core.build.call(null,sailing_study_guide.core.quiz_question_view,cljs.core.get.call(null,new cljs.core.Keyword(null,"questions","questions",3526636735).cljs$core$IFn$_invoke$arity$1(self__.section),new cljs.core.Keyword(null,"current-question","current-question",3546811692).cljs$core$IFn$_invoke$arity$1(self__.section)))));
});
sailing_study_guide.core.t13736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13738){var self__ = this;
var _13738__$1 = this;return self__.meta13737;
});
sailing_study_guide.core.t13736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13738,meta13737__$1){var self__ = this;
var _13738__$1 = this;return (new sailing_study_guide.core.t13736(self__.owner,self__.section,self__.section_view,meta13737__$1));
});
sailing_study_guide.core.__GT_t13736 = (function __GT_t13736(owner__$1,section__$1,section_view__$1,meta13737){return (new sailing_study_guide.core.t13736(owner__$1,section__$1,section_view__$1,meta13737));
});
}
return (new sailing_study_guide.core.t13736(owner,section,section_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(quiz,owner){if(typeof sailing_study_guide.core.t13742 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t13742 = (function (owner,quiz,quiz_view,meta13743){
this.owner = owner;
this.quiz = quiz;
this.quiz_view = quiz_view;
this.meta13743 = meta13743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t13742.cljs$lang$type = true;
sailing_study_guide.core.t13742.cljs$lang$ctorStr = "sailing-study-guide.core/t13742";
sailing_study_guide.core.t13742.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"sailing-study-guide.core/t13742");
});
sailing_study_guide.core.t13742.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t13742.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.section_view,cljs.core.nth.call(null,new cljs.core.Keyword(null,"sections","sections",1961841056).cljs$core$IFn$_invoke$arity$1(self__.quiz),new cljs.core.Keyword(null,"current-section","current-section",1995082243).cljs$core$IFn$_invoke$arity$1(self__.quiz))));
});
sailing_study_guide.core.t13742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13744){var self__ = this;
var _13744__$1 = this;return self__.meta13743;
});
sailing_study_guide.core.t13742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13744,meta13743__$1){var self__ = this;
var _13744__$1 = this;return (new sailing_study_guide.core.t13742(self__.owner,self__.quiz,self__.quiz_view,meta13743__$1));
});
sailing_study_guide.core.__GT_t13742 = (function __GT_t13742(owner__$1,quiz__$1,quiz_view__$1,meta13743){return (new sailing_study_guide.core.t13742(owner__$1,quiz__$1,quiz_view__$1,meta13743));
});
}
return (new sailing_study_guide.core.t13742(owner,quiz,quiz_view,null));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map