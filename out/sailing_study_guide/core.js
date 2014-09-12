// Compiled by ClojureScript 0.0-2322
goog.provide('sailing_study_guide.core');
goog.require('cljs.core');
goog.require('sailing_study_guide.quiz');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('sailing_study_guide.quiz');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_print_meta_STAR_ = true;
sailing_study_guide.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-section","current-section",1519906460),(0),new cljs.core.Keyword(null,"current-question","current-question",-749753188),(0),new cljs.core.Keyword(null,"quiz","quiz",829625914),sailing_study_guide.quiz.default_quiz], null));
sailing_study_guide.core.cljs_type__GT_str = (function cljs_type__GT_str(x){var temp__4124__auto__ = x.constructor;if(cljs.core.truth_(temp__4124__auto__))
{var ctor = temp__4124__auto__;return cljs.core.type__GT_str.call(null,ctor);
} else
{return cljs.core.type__GT_str.call(null,x);
}
});
sailing_study_guide.core.current_section = (function current_section(app_state){var current_section__$1 = new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(app_state);return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quiz","quiz",829625914),new cljs.core.Keyword(null,"sections","sections",-886710106),current_section__$1], null));
});
sailing_study_guide.core.current_question = (function current_question(app_state){var current_question__$1 = new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(app_state);return cljs.core.get_in.call(null,sailing_study_guide.core.current_section.call(null,app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"questions","questions",1226225380),current_question__$1], null));
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
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t11022 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11022 = (function (owner,answer,answer_view,meta11023){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta11023 = meta11023;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11022.cljs$lang$type = true;
sailing_study_guide.core.t11022.cljs$lang$ctorStr = "sailing-study-guide.core/t11022";
sailing_study_guide.core.t11022.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11022");
});
sailing_study_guide.core.t11022.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t11022.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__11025){var self__ = this;
var map__11026 = p__11025;var map__11026__$1 = ((cljs.core.seq_QMARK_.call(null,map__11026))?cljs.core.apply.call(null,cljs.core.hash_map,map__11026):map__11026);var answer_chan = cljs.core.get.call(null,map__11026__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));var ___$1 = this;return React.DOM.div({"className": "answer-container"},React.DOM.button({"className": ("answer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.answer_css_class.call(null,self__.answer))), "onClick": ((function (___$1,map__11026,map__11026__$1,answer_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,answer_chan,self__.answer);
});})(___$1,map__11026,map__11026__$1,answer_chan))
},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.answer)));
});
sailing_study_guide.core.t11022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11024){var self__ = this;
var _11024__$1 = this;return self__.meta11023;
});
sailing_study_guide.core.t11022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11024,meta11023__$1){var self__ = this;
var _11024__$1 = this;return (new sailing_study_guide.core.t11022(self__.owner,self__.answer,self__.answer_view,meta11023__$1));
});
sailing_study_guide.core.__GT_t11022 = (function __GT_t11022(owner__$1,answer__$1,answer_view__$1,meta11023){return (new sailing_study_guide.core.t11022(owner__$1,answer__$1,answer_view__$1,meta11023));
});
}
return (new sailing_study_guide.core.t11022(owner,answer,answer_view,null));
});
sailing_study_guide.core.answer_section_view = (function answer_section_view(answers,owner){if(typeof sailing_study_guide.core.t11032 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11032 = (function (owner,answers,answer_section_view,meta11033){
this.owner = owner;
this.answers = answers;
this.answer_section_view = answer_section_view;
this.meta11033 = meta11033;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11032.cljs$lang$type = true;
sailing_study_guide.core.t11032.cljs$lang$ctorStr = "sailing-study-guide.core/t11032";
sailing_study_guide.core.t11032.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11032");
});
sailing_study_guide.core.t11032.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t11032.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__11035){var self__ = this;
var map__11036 = p__11035;var map__11036__$1 = ((cljs.core.seq_QMARK_.call(null,map__11036))?cljs.core.apply.call(null,cljs.core.hash_map,map__11036):map__11036);var answer_chan = cljs.core.get.call(null,map__11036__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "answer-section"},om.core.build_all.call(null,sailing_study_guide.core.answer_view,self__.answers,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176),answer_chan], null)], null)));
});
sailing_study_guide.core.t11032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11034){var self__ = this;
var _11034__$1 = this;return self__.meta11033;
});
sailing_study_guide.core.t11032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11034,meta11033__$1){var self__ = this;
var _11034__$1 = this;return (new sailing_study_guide.core.t11032(self__.owner,self__.answers,self__.answer_section_view,meta11033__$1));
});
sailing_study_guide.core.__GT_t11032 = (function __GT_t11032(owner__$1,answers__$1,answer_section_view__$1,meta11033){return (new sailing_study_guide.core.t11032(owner__$1,answers__$1,answer_section_view__$1,meta11033));
});
}
return (new sailing_study_guide.core.t11032(owner,answers,answer_section_view,null));
});
sailing_study_guide.core.question_view = (function question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t11071 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11071 = (function (owner,quiz_question,question_view,meta11072){
this.owner = owner;
this.quiz_question = quiz_question;
this.question_view = question_view;
this.meta11072 = meta11072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11071.cljs$lang$type = true;
sailing_study_guide.core.t11071.cljs$lang$ctorStr = "sailing-study-guide.core/t11071";
sailing_study_guide.core.t11071.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11071");
});
sailing_study_guide.core.t11071.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t11071.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__11074){var self__ = this;
var map__11075 = p__11074;var map__11075__$1 = ((cljs.core.seq_QMARK_.call(null,map__11075))?cljs.core.apply.call(null,cljs.core.hash_map,map__11075):map__11075);var answer_chan = cljs.core.get.call(null,map__11075__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));var ___$1 = this;return React.DOM.div({"className": "question-container"},React.DOM.div({"className": "question-text-container"},React.DOM.h3({"className": "question-text"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(self__.quiz_question))),React.DOM.div({"className": "media-container"}),om.core.build.call(null,sailing_study_guide.core.answer_section_view,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176),answer_chan], null)], null)));
});
sailing_study_guide.core.t11071.prototype.om$core$IWillMount$ = true;
sailing_study_guide.core.t11071.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var answer_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));var c__6376__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto__,answer_chan,___$1){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto__,answer_chan,___$1){
return (function (state_11092){var state_val_11093 = (state_11092[(1)]);if((state_val_11093 === (4)))
{var inst_11078 = (state_11092[(2)]);var inst_11079 = cljs.core.deref.call(null,inst_11078);var inst_11080 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inst_11079);var inst_11081 = ("Chothe "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11080));var inst_11082 = console.log(inst_11081);var inst_11083 = cljs.core.PersistentVector.EMPTY_NODE;var inst_11084 = [new cljs.core.Keyword(null,"text","text",-1790561697)];var inst_11085 = (new cljs.core.PersistentVector(null,1,(5),inst_11083,inst_11084,null));var inst_11086 = (function (){var answer_chosen = inst_11078;return ((function (answer_chosen,inst_11078,inst_11079,inst_11080,inst_11081,inst_11082,inst_11083,inst_11084,inst_11085,state_val_11093,c__6376__auto__,answer_chan,___$1){
return (function (p1__11037_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11037_SHARP_)+" *");
});
;})(answer_chosen,inst_11078,inst_11079,inst_11080,inst_11081,inst_11082,inst_11083,inst_11084,inst_11085,state_val_11093,c__6376__auto__,answer_chan,___$1))
})();var inst_11087 = om.core.transact_BANG_.call(null,inst_11078,inst_11085,inst_11086);var state_11092__$1 = (function (){var statearr_11094 = state_11092;(statearr_11094[(7)] = inst_11082);
(statearr_11094[(8)] = inst_11087);
return statearr_11094;
})();var statearr_11095_11104 = state_11092__$1;(statearr_11095_11104[(2)] = null);
(statearr_11095_11104[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11093 === (3)))
{var inst_11090 = (state_11092[(2)]);var state_11092__$1 = state_11092;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11092__$1,inst_11090);
} else
{if((state_val_11093 === (2)))
{var state_11092__$1 = state_11092;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11092__$1,(4),answer_chan);
} else
{if((state_val_11093 === (1)))
{var state_11092__$1 = state_11092;var statearr_11096_11105 = state_11092__$1;(statearr_11096_11105[(2)] = null);
(statearr_11096_11105[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6376__auto__,answer_chan,___$1))
;return ((function (switch__6361__auto__,c__6376__auto__,answer_chan,___$1){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_11100 = [null,null,null,null,null,null,null,null,null];(statearr_11100[(0)] = state_machine__6362__auto__);
(statearr_11100[(1)] = (1));
return statearr_11100;
});
var state_machine__6362__auto____1 = (function (state_11092){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_11092);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e11101){if((e11101 instanceof Object))
{var ex__6365__auto__ = e11101;var statearr_11102_11106 = state_11092;(statearr_11102_11106[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11092);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11101;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11107 = state_11092;
state_11092 = G__11107;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_11092){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_11092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__,answer_chan,___$1))
})();var state__6378__auto__ = (function (){var statearr_11103 = f__6377__auto__.call(null);(statearr_11103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_11103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto__,answer_chan,___$1))
);
return c__6376__auto__;
});
sailing_study_guide.core.t11071.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t11071.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176),cljs.core.async.chan.call(null)], null);
});
sailing_study_guide.core.t11071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11073){var self__ = this;
var _11073__$1 = this;return self__.meta11072;
});
sailing_study_guide.core.t11071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11073,meta11072__$1){var self__ = this;
var _11073__$1 = this;return (new sailing_study_guide.core.t11071(self__.owner,self__.quiz_question,self__.question_view,meta11072__$1));
});
sailing_study_guide.core.__GT_t11071 = (function __GT_t11071(owner__$1,quiz_question__$1,question_view__$1,meta11072){return (new sailing_study_guide.core.t11071(owner__$1,quiz_question__$1,question_view__$1,meta11072));
});
}
return (new sailing_study_guide.core.t11071(owner,quiz_question,question_view,null));
});
sailing_study_guide.core.header_bar_view = (function header_bar_view(section,_){if(typeof sailing_study_guide.core.t11111 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11111 = (function (_,section,header_bar_view,meta11112){
this._ = _;
this.section = section;
this.header_bar_view = header_bar_view;
this.meta11112 = meta11112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11111.cljs$lang$type = true;
sailing_study_guide.core.t11111.cljs$lang$ctorStr = "sailing-study-guide.core/t11111";
sailing_study_guide.core.t11111.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11111");
});
sailing_study_guide.core.t11111.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t11111.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.nav({"className": "tab-bar"},React.DOM.section({"className": "left-small text-center"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_question_num)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_num_questions))),React.DOM.section({"className": "middle tab-bar-section"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.section)),React.DOM.section({"className": "right-small"},React.DOM.a({"href": "#", "className": "right-off-canvas-toggle menu-icon"},React.DOM.span(null))));
});
sailing_study_guide.core.t11111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11113){var self__ = this;
var _11113__$1 = this;return self__.meta11112;
});
sailing_study_guide.core.t11111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11113,meta11112__$1){var self__ = this;
var _11113__$1 = this;return (new sailing_study_guide.core.t11111(self__._,self__.section,self__.header_bar_view,meta11112__$1));
});
sailing_study_guide.core.__GT_t11111 = (function __GT_t11111(___$1,section__$1,header_bar_view__$1,meta11112){return (new sailing_study_guide.core.t11111(___$1,section__$1,header_bar_view__$1,meta11112));
});
}
return (new sailing_study_guide.core.t11111(_,section,header_bar_view,null));
});
sailing_study_guide.core.header_progress_view = (function header_progress_view(section,_){if(typeof sailing_study_guide.core.t11117 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11117 = (function (_,section,header_progress_view,meta11118){
this._ = _;
this.section = section;
this.header_progress_view = header_progress_view;
this.meta11118 = meta11118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11117.cljs$lang$type = true;
sailing_study_guide.core.t11117.cljs$lang$ctorStr = "sailing-study-guide.core/t11117";
sailing_study_guide.core.t11117.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11117");
});
sailing_study_guide.core.t11117.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t11117.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.div({"className": "progress"},React.DOM.span({"style": {"width": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (current_question_num / total_num_questions)))+"%")}, "className": "meter"}));
});
sailing_study_guide.core.t11117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11119){var self__ = this;
var _11119__$1 = this;return self__.meta11118;
});
sailing_study_guide.core.t11117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11119,meta11118__$1){var self__ = this;
var _11119__$1 = this;return (new sailing_study_guide.core.t11117(self__._,self__.section,self__.header_progress_view,meta11118__$1));
});
sailing_study_guide.core.__GT_t11117 = (function __GT_t11117(___$1,section__$1,header_progress_view__$1,meta11118){return (new sailing_study_guide.core.t11117(___$1,section__$1,header_progress_view__$1,meta11118));
});
}
return (new sailing_study_guide.core.t11117(_,section,header_progress_view,null));
});
sailing_study_guide.core.header_view = (function header_view(section,_){if(typeof sailing_study_guide.core.t11123 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11123 = (function (_,section,header_view,meta11124){
this._ = _;
this.section = section;
this.header_view = header_view;
this.meta11124 = meta11124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11123.cljs$lang$type = true;
sailing_study_guide.core.t11123.cljs$lang$ctorStr = "sailing-study-guide.core/t11123";
sailing_study_guide.core.t11123.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11123");
});
sailing_study_guide.core.t11123.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t11123.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.div({"className": "quiz-header"},om.core.build.call(null,sailing_study_guide.core.header_bar_view,self__.section),om.core.build.call(null,sailing_study_guide.core.header_progress_view,self__.section));
});
sailing_study_guide.core.t11123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11125){var self__ = this;
var _11125__$1 = this;return self__.meta11124;
});
sailing_study_guide.core.t11123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11125,meta11124__$1){var self__ = this;
var _11125__$1 = this;return (new sailing_study_guide.core.t11123(self__._,self__.section,self__.header_view,meta11124__$1));
});
sailing_study_guide.core.__GT_t11123 = (function __GT_t11123(___$1,section__$1,header_view__$1,meta11124){return (new sailing_study_guide.core.t11123(___$1,section__$1,header_view__$1,meta11124));
});
}
return (new sailing_study_guide.core.t11123(_,section,header_view,null));
});
sailing_study_guide.core.section_view = (function section_view(section,owner){if(typeof sailing_study_guide.core.t11129 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11129 = (function (owner,section,section_view,meta11130){
this.owner = owner;
this.section = section;
this.section_view = section_view;
this.meta11130 = meta11130;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11129.cljs$lang$type = true;
sailing_study_guide.core.t11129.cljs$lang$ctorStr = "sailing-study-guide.core/t11129";
sailing_study_guide.core.t11129.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11129");
});
sailing_study_guide.core.t11129.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t11129.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;console.dir(("(:current-question section): "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section))));
console.dir(("questionable: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section),new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section)))));
console.log(("questionable type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.cljs_type__GT_str.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section),new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section))))));
return React.DOM.div({"data-offcanvas": true, "className": "off-canvas-wrap", "id": "quiz-section"},React.DOM.div({"className": "main-content inner-wrap"},om.core.build.call(null,sailing_study_guide.core.header_view,self__.section),om.core.build.call(null,sailing_study_guide.core.question_view,cljs.core.get.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section),new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section))),React.DOM.a({"className": "exit-off-canvas"})));
});
sailing_study_guide.core.t11129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11131){var self__ = this;
var _11131__$1 = this;return self__.meta11130;
});
sailing_study_guide.core.t11129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11131,meta11130__$1){var self__ = this;
var _11131__$1 = this;return (new sailing_study_guide.core.t11129(self__.owner,self__.section,self__.section_view,meta11130__$1));
});
sailing_study_guide.core.__GT_t11129 = (function __GT_t11129(owner__$1,section__$1,section_view__$1,meta11130){return (new sailing_study_guide.core.t11129(owner__$1,section__$1,section_view__$1,meta11130));
});
}
return (new sailing_study_guide.core.t11129(owner,section,section_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(app_state,owner){if(typeof sailing_study_guide.core.t11135 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11135 = (function (owner,app_state,quiz_view,meta11136){
this.owner = owner;
this.app_state = app_state;
this.quiz_view = quiz_view;
this.meta11136 = meta11136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11135.cljs$lang$type = true;
sailing_study_guide.core.t11135.cljs$lang$ctorStr = "sailing-study-guide.core/t11135";
sailing_study_guide.core.t11135.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11135");
});
sailing_study_guide.core.t11135.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t11135.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.section_view,cljs.core.nth.call(null,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"quiz","quiz",829625914).cljs$core$IFn$_invoke$arity$1(self__.app_state)),new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(self__.app_state))));
});
sailing_study_guide.core.t11135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11137){var self__ = this;
var _11137__$1 = this;return self__.meta11136;
});
sailing_study_guide.core.t11135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11137,meta11136__$1){var self__ = this;
var _11137__$1 = this;return (new sailing_study_guide.core.t11135(self__.owner,self__.app_state,self__.quiz_view,meta11136__$1));
});
sailing_study_guide.core.__GT_t11135 = (function __GT_t11135(owner__$1,app_state__$1,quiz_view__$1,meta11136){return (new sailing_study_guide.core.t11135(owner__$1,app_state__$1,quiz_view__$1,meta11136));
});
}
return (new sailing_study_guide.core.t11135(owner,app_state,quiz_view,null));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map