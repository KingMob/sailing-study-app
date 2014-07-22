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
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t9402 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9402 = (function (owner,answer,answer_view,meta9403){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta9403 = meta9403;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9402.cljs$lang$type = true;
sailing_study_guide.core.t9402.cljs$lang$ctorStr = "sailing-study-guide.core/t9402";
sailing_study_guide.core.t9402.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"sailing-study-guide.core/t9402");
});
sailing_study_guide.core.t9402.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t9402.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9405){var self__ = this;
var map__9406 = p__9405;var map__9406__$1 = ((cljs.core.seq_QMARK_.call(null,map__9406))?cljs.core.apply.call(null,cljs.core.hash_map,map__9406):map__9406);var choose_answer_chan = cljs.core.get.call(null,map__9406__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133));var ___$1 = this;return React.DOM.div({"className": ("answer small-6 columns button "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.answer_class.call(null,self__.answer))), "onClick": ((function (___$1,map__9406,map__9406__$1,choose_answer_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,choose_answer_chan,self__.answer);
});})(___$1,map__9406,map__9406__$1,choose_answer_chan))
},new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(self__.answer));
});
sailing_study_guide.core.t9402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9404){var self__ = this;
var _9404__$1 = this;return self__.meta9403;
});
sailing_study_guide.core.t9402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9404,meta9403__$1){var self__ = this;
var _9404__$1 = this;return (new sailing_study_guide.core.t9402(self__.owner,self__.answer,self__.answer_view,meta9403__$1));
});
sailing_study_guide.core.__GT_t9402 = (function __GT_t9402(owner__$1,answer__$1,answer_view__$1,meta9403){return (new sailing_study_guide.core.t9402(owner__$1,answer__$1,answer_view__$1,meta9403));
});
}
return (new sailing_study_guide.core.t9402(owner,answer,answer_view,null));
});
sailing_study_guide.core.quiz_question_view = (function quiz_question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t9436 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9436 = (function (owner,quiz_question,quiz_question_view,meta9437){
this.owner = owner;
this.quiz_question = quiz_question;
this.quiz_question_view = quiz_question_view;
this.meta9437 = meta9437;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9436.cljs$lang$type = true;
sailing_study_guide.core.t9436.cljs$lang$ctorStr = "sailing-study-guide.core/t9436";
sailing_study_guide.core.t9436.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"sailing-study-guide.core/t9436");
});
sailing_study_guide.core.t9436.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t9436.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9439){var self__ = this;
var map__9440 = p__9439;var map__9440__$1 = ((cljs.core.seq_QMARK_.call(null,map__9440))?cljs.core.apply.call(null,cljs.core.hash_map,map__9440):map__9440);var choose_answer_chan = cljs.core.get.call(null,map__9440__$1,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133));var ___$1 = this;return React.DOM.div({"className": "row"},React.DOM.h3({"className": "quiz-question small-12 columns"},new cljs.core.Keyword(null,"question","question",4143001432).cljs$core$IFn$_invoke$arity$1(self__.quiz_question)),cljs.core.apply.call(null,om.dom.div,{"className": "small-12 columns"},om.core.build_all.call(null,sailing_study_guide.core.answer_view,new cljs.core.Keyword(null,"answers","answers",4461472743).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133),choose_answer_chan], null)], null))));
});
sailing_study_guide.core.t9436.prototype.om$core$IWillMount$ = true;
sailing_study_guide.core.t9436.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var choose_answer_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133));var c__6361__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6361__auto__,choose_answer_chan,___$1){
return (function (){var f__6362__auto__ = (function (){var switch__6346__auto__ = ((function (c__6361__auto__,choose_answer_chan,___$1){
return (function (state_9453){var state_val_9454 = (state_9453[1]);if((state_val_9454 === 4))
{var inst_9443 = (state_9453[2]);var inst_9444 = cljs.core.deref.call(null,inst_9443);var inst_9445 = new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(inst_9444);var inst_9446 = ("Chose "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_9445));var inst_9447 = console.log(inst_9446);var inst_9448 = om.core.update_BANG_.call(null,inst_9443,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"chosen","chosen",3947656932));var state_9453__$1 = (function (){var statearr_9455 = state_9453;(statearr_9455[7] = inst_9448);
(statearr_9455[8] = inst_9447);
return statearr_9455;
})();var statearr_9456_9465 = state_9453__$1;(statearr_9456_9465[2] = null);
(statearr_9456_9465[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9454 === 3))
{var inst_9451 = (state_9453[2]);var state_9453__$1 = state_9453;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9453__$1,inst_9451);
} else
{if((state_val_9454 === 2))
{var state_9453__$1 = state_9453;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9453__$1,4,choose_answer_chan);
} else
{if((state_val_9454 === 1))
{var state_9453__$1 = state_9453;var statearr_9457_9466 = state_9453__$1;(statearr_9457_9466[2] = null);
(statearr_9457_9466[1] = 2);
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
var state_machine__6347__auto____0 = (function (){var statearr_9461 = [null,null,null,null,null,null,null,null,null];(statearr_9461[0] = state_machine__6347__auto__);
(statearr_9461[1] = 1);
return statearr_9461;
});
var state_machine__6347__auto____1 = (function (state_9453){while(true){
var ret_value__6348__auto__ = (function (){try{while(true){
var result__6349__auto__ = switch__6346__auto__.call(null,state_9453);if(cljs.core.keyword_identical_QMARK_.call(null,result__6349__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6349__auto__;
}
break;
}
}catch (e9462){if((e9462 instanceof Object))
{var ex__6350__auto__ = e9462;var statearr_9463_9467 = state_9453;(statearr_9463_9467[5] = ex__6350__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9453);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9462;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6348__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9468 = state_9453;
state_9453 = G__9468;
continue;
}
} else
{return ret_value__6348__auto__;
}
break;
}
});
state_machine__6347__auto__ = function(state_9453){
switch(arguments.length){
case 0:
return state_machine__6347__auto____0.call(this);
case 1:
return state_machine__6347__auto____1.call(this,state_9453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6347__auto____0;
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6347__auto____1;
return state_machine__6347__auto__;
})()
;})(switch__6346__auto__,c__6361__auto__,choose_answer_chan,___$1))
})();var state__6363__auto__ = (function (){var statearr_9464 = f__6362__auto__.call(null);(statearr_9464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6361__auto__);
return statearr_9464;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6363__auto__);
});})(c__6361__auto__,choose_answer_chan,___$1))
);
return c__6361__auto__;
});
sailing_study_guide.core.t9436.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t9436.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choose-answer-chan","choose-answer-chan",2675027133),cljs.core.async.chan.call(null)], null);
});
sailing_study_guide.core.t9436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9438){var self__ = this;
var _9438__$1 = this;return self__.meta9437;
});
sailing_study_guide.core.t9436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9438,meta9437__$1){var self__ = this;
var _9438__$1 = this;return (new sailing_study_guide.core.t9436(self__.owner,self__.quiz_question,self__.quiz_question_view,meta9437__$1));
});
sailing_study_guide.core.__GT_t9436 = (function __GT_t9436(owner__$1,quiz_question__$1,quiz_question_view__$1,meta9437){return (new sailing_study_guide.core.t9436(owner__$1,quiz_question__$1,quiz_question_view__$1,meta9437));
});
}
return (new sailing_study_guide.core.t9436(owner,quiz_question,quiz_question_view,null));
});
sailing_study_guide.core.header_offcanvas_menu_link = (function header_offcanvas_menu_link(){return React.DOM.a({"href": "#", "className": "right-off-canvas-toggle menu-icon"},React.DOM.span(null));
});
sailing_study_guide.core.header_view = (function header_view(section,_){if(typeof sailing_study_guide.core.t9472 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9472 = (function (_,section,header_view,meta9473){
this._ = _;
this.section = section;
this.header_view = header_view;
this.meta9473 = meta9473;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9472.cljs$lang$type = true;
sailing_study_guide.core.t9472.cljs$lang$ctorStr = "sailing-study-guide.core/t9472";
sailing_study_guide.core.t9472.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"sailing-study-guide.core/t9472");
});
sailing_study_guide.core.t9472.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t9472.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",3546811692).cljs$core$IFn$_invoke$arity$1(self__.section) + 1);var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",3526636735).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.div({"className": "quiz-header"},React.DOM.nav({"className": "tab-bar"},React.DOM.section({"className": "left-small text-center"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_question_num)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_num_questions))),React.DOM.section({"className": "middle tab-bar-section"},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.section)),React.DOM.section({"className": "right-small"},sailing_study_guide.core.header_offcanvas_menu_link.call(null))),React.DOM.div({"className": "progress"},React.DOM.span({"style": {"width": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((100 * (current_question_num / total_num_questions)))+"%")}, "className": "meter"})));
});
sailing_study_guide.core.t9472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9474){var self__ = this;
var _9474__$1 = this;return self__.meta9473;
});
sailing_study_guide.core.t9472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9474,meta9473__$1){var self__ = this;
var _9474__$1 = this;return (new sailing_study_guide.core.t9472(self__._,self__.section,self__.header_view,meta9473__$1));
});
sailing_study_guide.core.__GT_t9472 = (function __GT_t9472(___$1,section__$1,header_view__$1,meta9473){return (new sailing_study_guide.core.t9472(___$1,section__$1,header_view__$1,meta9473));
});
}
return (new sailing_study_guide.core.t9472(_,section,header_view,null));
});
sailing_study_guide.core.section_view = (function section_view(section,owner){if(typeof sailing_study_guide.core.t9478 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9478 = (function (owner,section,section_view,meta9479){
this.owner = owner;
this.section = section;
this.section_view = section_view;
this.meta9479 = meta9479;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9478.cljs$lang$type = true;
sailing_study_guide.core.t9478.cljs$lang$ctorStr = "sailing-study-guide.core/t9478";
sailing_study_guide.core.t9478.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"sailing-study-guide.core/t9478");
});
sailing_study_guide.core.t9478.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t9478.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"data-offcanvas": true, "className": "off-canvas-wrap", "id": "quiz-section"},React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.header_view,self__.section)),React.DOM.section({"className": "main-section"},om.core.build.call(null,sailing_study_guide.core.quiz_question_view,cljs.core.get.call(null,new cljs.core.Keyword(null,"questions","questions",3526636735).cljs$core$IFn$_invoke$arity$1(self__.section),new cljs.core.Keyword(null,"current-question","current-question",3546811692).cljs$core$IFn$_invoke$arity$1(self__.section)))));
});
sailing_study_guide.core.t9478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9480){var self__ = this;
var _9480__$1 = this;return self__.meta9479;
});
sailing_study_guide.core.t9478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9480,meta9479__$1){var self__ = this;
var _9480__$1 = this;return (new sailing_study_guide.core.t9478(self__.owner,self__.section,self__.section_view,meta9479__$1));
});
sailing_study_guide.core.__GT_t9478 = (function __GT_t9478(owner__$1,section__$1,section_view__$1,meta9479){return (new sailing_study_guide.core.t9478(owner__$1,section__$1,section_view__$1,meta9479));
});
}
return (new sailing_study_guide.core.t9478(owner,section,section_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(quiz,owner){if(typeof sailing_study_guide.core.t9484 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t9484 = (function (owner,quiz,quiz_view,meta9485){
this.owner = owner;
this.quiz = quiz;
this.quiz_view = quiz_view;
this.meta9485 = meta9485;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t9484.cljs$lang$type = true;
sailing_study_guide.core.t9484.cljs$lang$ctorStr = "sailing-study-guide.core/t9484";
sailing_study_guide.core.t9484.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"sailing-study-guide.core/t9484");
});
sailing_study_guide.core.t9484.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t9484.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.section_view,cljs.core.nth.call(null,new cljs.core.Keyword(null,"sections","sections",1961841056).cljs$core$IFn$_invoke$arity$1(self__.quiz),new cljs.core.Keyword(null,"current-section","current-section",1995082243).cljs$core$IFn$_invoke$arity$1(self__.quiz))));
});
sailing_study_guide.core.t9484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9486){var self__ = this;
var _9486__$1 = this;return self__.meta9485;
});
sailing_study_guide.core.t9484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9486,meta9485__$1){var self__ = this;
var _9486__$1 = this;return (new sailing_study_guide.core.t9484(self__.owner,self__.quiz,self__.quiz_view,meta9485__$1));
});
sailing_study_guide.core.__GT_t9484 = (function __GT_t9484(owner__$1,quiz__$1,quiz_view__$1,meta9485){return (new sailing_study_guide.core.t9484(owner__$1,quiz__$1,quiz_view__$1,meta9485));
});
}
return (new sailing_study_guide.core.t9484(owner,quiz,quiz_view,null));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map