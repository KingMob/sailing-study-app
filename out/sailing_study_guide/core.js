// Compiled by ClojureScript 0.0-2322
goog.provide('sailing_study_guide.core');
goog.require('cljs.core');
goog.require('sailing_study_guide.quiz');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('sailing_study_guide.quiz');
goog.require('cljs.core.async');
goog.require('clairvoyant.core');
goog.require('sailing_study_guide.dispatch');
goog.require('clairvoyant.core');
goog.require('sailing_study_guide.dispatch');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
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
sailing_study_guide.core.answer_css_class = (function answer_css_class(status,correct){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unchosen","unchosen",-205763213),status))
{return "answer-default";
} else
{if(cljs.core.truth_(correct))
{return "answer-correct success";
} else
{return "answer-incorrect alert";

}
}
});
sailing_study_guide.core.answer_css_class.call(null,new cljs.core.Keyword(null,"unchosen","unchosen",-205763213),false);
sailing_study_guide.core.answer_css_class.call(null,new cljs.core.Keyword(null,"chosen","chosen",-1422409985),false);
sailing_study_guide.core.answer_css_class.call(null,new cljs.core.Keyword(null,"chosen","chosen",-1422409985),true);
sailing_study_guide.core.answer_view = (function answer_view(answer,owner){if(typeof sailing_study_guide.core.t10938 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10938 = (function (owner,answer,answer_view,meta10939){
this.owner = owner;
this.answer = answer;
this.answer_view = answer_view;
this.meta10939 = meta10939;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10938.cljs$lang$type = true;
sailing_study_guide.core.t10938.cljs$lang$ctorStr = "sailing-study-guide.core/t10938";
sailing_study_guide.core.t10938.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10938");
});
sailing_study_guide.core.t10938.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t10938.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10941){var self__ = this;
var map__10942 = p__10941;var map__10942__$1 = ((cljs.core.seq_QMARK_.call(null,map__10942))?cljs.core.apply.call(null,cljs.core.hash_map,map__10942):map__10942);var status = cljs.core.get.call(null,map__10942__$1,new cljs.core.Keyword(null,"status","status",-1997798413));var answer_chan = cljs.core.get.call(null,map__10942__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));var ___$1 = this;return React.DOM.div({"className": "answer-container"},React.DOM.button({"className": ("answer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sailing_study_guide.core.answer_css_class.call(null,status,new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(self__.answer)))), "onClick": ((function (___$1,map__10942,map__10942__$1,status,answer_chan){
return (function (e){return sailing_study_guide.dispatch.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"answer-chosen","answer-chosen",-703375083),self__.answer);
});})(___$1,map__10942,map__10942__$1,status,answer_chan))
},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.answer)));
});
sailing_study_guide.core.t10938.prototype.om$core$IInitState$ = true;
sailing_study_guide.core.t10938.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unchosen","unchosen",-205763213)], null);
});
sailing_study_guide.core.t10938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10940){var self__ = this;
var _10940__$1 = this;return self__.meta10939;
});
sailing_study_guide.core.t10938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10940,meta10939__$1){var self__ = this;
var _10940__$1 = this;return (new sailing_study_guide.core.t10938(self__.owner,self__.answer,self__.answer_view,meta10939__$1));
});
sailing_study_guide.core.__GT_t10938 = (function __GT_t10938(owner__$1,answer__$1,answer_view__$1,meta10939){return (new sailing_study_guide.core.t10938(owner__$1,answer__$1,answer_view__$1,meta10939));
});
}
return (new sailing_study_guide.core.t10938(owner,answer,answer_view,null));
});
sailing_study_guide.core.answer_section_view = (function answer_section_view(answers,owner){if(typeof sailing_study_guide.core.t10948 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10948 = (function (owner,answers,answer_section_view,meta10949){
this.owner = owner;
this.answers = answers;
this.answer_section_view = answer_section_view;
this.meta10949 = meta10949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10948.cljs$lang$type = true;
sailing_study_guide.core.t10948.cljs$lang$ctorStr = "sailing-study-guide.core/t10948";
sailing_study_guide.core.t10948.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10948");
});
sailing_study_guide.core.t10948.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t10948.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10951){var self__ = this;
var map__10952 = p__10951;var map__10952__$1 = ((cljs.core.seq_QMARK_.call(null,map__10952))?cljs.core.apply.call(null,cljs.core.hash_map,map__10952):map__10952);var answer_chan = cljs.core.get.call(null,map__10952__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "answer-section"},om.core.build_all.call(null,sailing_study_guide.core.answer_view,self__.answers,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176),answer_chan], null)], null)));
});
sailing_study_guide.core.t10948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10950){var self__ = this;
var _10950__$1 = this;return self__.meta10949;
});
sailing_study_guide.core.t10948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10950,meta10949__$1){var self__ = this;
var _10950__$1 = this;return (new sailing_study_guide.core.t10948(self__.owner,self__.answers,self__.answer_section_view,meta10949__$1));
});
sailing_study_guide.core.__GT_t10948 = (function __GT_t10948(owner__$1,answers__$1,answer_section_view__$1,meta10949){return (new sailing_study_guide.core.t10948(owner__$1,answers__$1,answer_section_view__$1,meta10949));
});
}
return (new sailing_study_guide.core.t10948(owner,answers,answer_section_view,null));
});
sailing_study_guide.core.question_view = (function question_view(quiz_question,owner){if(typeof sailing_study_guide.core.t10981 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t10981 = (function (owner,quiz_question,question_view,meta10982){
this.owner = owner;
this.quiz_question = quiz_question;
this.question_view = question_view;
this.meta10982 = meta10982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t10981.cljs$lang$type = true;
sailing_study_guide.core.t10981.cljs$lang$ctorStr = "sailing-study-guide.core/t10981";
sailing_study_guide.core.t10981.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t10981");
});
sailing_study_guide.core.t10981.prototype.om$core$IRenderState$ = true;
sailing_study_guide.core.t10981.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10984){var self__ = this;
var map__10985 = p__10984;var map__10985__$1 = ((cljs.core.seq_QMARK_.call(null,map__10985))?cljs.core.apply.call(null,cljs.core.hash_map,map__10985):map__10985);var answer_chan = cljs.core.get.call(null,map__10985__$1,new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176));var ___$1 = this;return React.DOM.div({"className": "question-container"},React.DOM.div({"className": "question-text-container"},React.DOM.h3({"className": "question-text"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(self__.quiz_question))),React.DOM.div({"className": "media-container"}),om.core.build.call(null,sailing_study_guide.core.answer_section_view,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(self__.quiz_question),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answer-chan","answer-chan",2060719176),answer_chan], null)], null)));
});
sailing_study_guide.core.t10981.prototype.om$core$IWillMount$ = true;
sailing_study_guide.core.t10981.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var answer_chan = sailing_study_guide.dispatch.register.call(null,new cljs.core.Keyword(null,"answer-chosen","answer-chosen",-703375083));var c__6747__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6747__auto__,answer_chan,___$1){
return (function (){var f__6748__auto__ = (function (){var switch__6732__auto__ = ((function (c__6747__auto__,answer_chan,___$1){
return (function (state_10997){var state_val_10998 = (state_10997[(1)]);if((state_val_10998 === (4)))
{var inst_10988 = (state_10997[(2)]);var inst_10989 = cljs.core.deref.call(null,inst_10988);var inst_10990 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inst_10989);var inst_10991 = ("Chose "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10990));var inst_10992 = console.log(inst_10991);var state_10997__$1 = (function (){var statearr_10999 = state_10997;(statearr_10999[(7)] = inst_10992);
return statearr_10999;
})();var statearr_11000_11009 = state_10997__$1;(statearr_11000_11009[(2)] = null);
(statearr_11000_11009[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10998 === (3)))
{var inst_10995 = (state_10997[(2)]);var state_10997__$1 = state_10997;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10997__$1,inst_10995);
} else
{if((state_val_10998 === (2)))
{var state_10997__$1 = state_10997;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10997__$1,(4),answer_chan);
} else
{if((state_val_10998 === (1)))
{var state_10997__$1 = state_10997;var statearr_11001_11010 = state_10997__$1;(statearr_11001_11010[(2)] = null);
(statearr_11001_11010[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6747__auto__,answer_chan,___$1))
;return ((function (switch__6732__auto__,c__6747__auto__,answer_chan,___$1){
return (function() {
var state_machine__6733__auto__ = null;
var state_machine__6733__auto____0 = (function (){var statearr_11005 = [null,null,null,null,null,null,null,null];(statearr_11005[(0)] = state_machine__6733__auto__);
(statearr_11005[(1)] = (1));
return statearr_11005;
});
var state_machine__6733__auto____1 = (function (state_10997){while(true){
var ret_value__6734__auto__ = (function (){try{while(true){
var result__6735__auto__ = switch__6732__auto__.call(null,state_10997);if(cljs.core.keyword_identical_QMARK_.call(null,result__6735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6735__auto__;
}
break;
}
}catch (e11006){if((e11006 instanceof Object))
{var ex__6736__auto__ = e11006;var statearr_11007_11011 = state_10997;(statearr_11007_11011[(5)] = ex__6736__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10997);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11006;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11012 = state_10997;
state_10997 = G__11012;
continue;
}
} else
{return ret_value__6734__auto__;
}
break;
}
});
state_machine__6733__auto__ = function(state_10997){
switch(arguments.length){
case 0:
return state_machine__6733__auto____0.call(this);
case 1:
return state_machine__6733__auto____1.call(this,state_10997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6733__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6733__auto____0;
state_machine__6733__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6733__auto____1;
return state_machine__6733__auto__;
})()
;})(switch__6732__auto__,c__6747__auto__,answer_chan,___$1))
})();var state__6749__auto__ = (function (){var statearr_11008 = f__6748__auto__.call(null);(statearr_11008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6747__auto__);
return statearr_11008;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6749__auto__);
});})(c__6747__auto__,answer_chan,___$1))
);
return c__6747__auto__;
});
sailing_study_guide.core.t10981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10983){var self__ = this;
var _10983__$1 = this;return self__.meta10982;
});
sailing_study_guide.core.t10981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10983,meta10982__$1){var self__ = this;
var _10983__$1 = this;return (new sailing_study_guide.core.t10981(self__.owner,self__.quiz_question,self__.question_view,meta10982__$1));
});
sailing_study_guide.core.__GT_t10981 = (function __GT_t10981(owner__$1,quiz_question__$1,question_view__$1,meta10982){return (new sailing_study_guide.core.t10981(owner__$1,quiz_question__$1,question_view__$1,meta10982));
});
}
return (new sailing_study_guide.core.t10981(owner,quiz_question,question_view,null));
});
sailing_study_guide.core.header_bar_view = (function header_bar_view(section,_){if(typeof sailing_study_guide.core.t11016 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11016 = (function (_,section,header_bar_view,meta11017){
this._ = _;
this.section = section;
this.header_bar_view = header_bar_view;
this.meta11017 = meta11017;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11016.cljs$lang$type = true;
sailing_study_guide.core.t11016.cljs$lang$ctorStr = "sailing-study-guide.core/t11016";
sailing_study_guide.core.t11016.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11016");
});
sailing_study_guide.core.t11016.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t11016.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.nav({"className": "tab-bar"},React.DOM.section({"className": "left-small text-center"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_question_num)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_num_questions))),React.DOM.section({"className": "middle tab-bar-section"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.section)),React.DOM.section({"className": "right-small"},React.DOM.a({"href": "#", "className": "right-off-canvas-toggle menu-icon"},React.DOM.span(null))));
});
sailing_study_guide.core.t11016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11018){var self__ = this;
var _11018__$1 = this;return self__.meta11017;
});
sailing_study_guide.core.t11016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11018,meta11017__$1){var self__ = this;
var _11018__$1 = this;return (new sailing_study_guide.core.t11016(self__._,self__.section,self__.header_bar_view,meta11017__$1));
});
sailing_study_guide.core.__GT_t11016 = (function __GT_t11016(___$1,section__$1,header_bar_view__$1,meta11017){return (new sailing_study_guide.core.t11016(___$1,section__$1,header_bar_view__$1,meta11017));
});
}
return (new sailing_study_guide.core.t11016(_,section,header_bar_view,null));
});
sailing_study_guide.core.header_progress_view = (function header_progress_view(section,_){if(typeof sailing_study_guide.core.t11022 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11022 = (function (_,section,header_progress_view,meta11023){
this._ = _;
this.section = section;
this.header_progress_view = header_progress_view;
this.meta11023 = meta11023;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11022.cljs$lang$type = true;
sailing_study_guide.core.t11022.cljs$lang$ctorStr = "sailing-study-guide.core/t11022";
sailing_study_guide.core.t11022.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11022");
});
sailing_study_guide.core.t11022.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t11022.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var current_question_num = (new cljs.core.Keyword(null,"current-question","current-question",-749753188).cljs$core$IFn$_invoke$arity$1(self__.section) + (1));var total_num_questions = cljs.core.count.call(null,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.section));return React.DOM.div({"className": "progress"},React.DOM.span({"style": {"width": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (current_question_num / total_num_questions)))+"%")}, "className": "meter"}));
});
sailing_study_guide.core.t11022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11024){var self__ = this;
var _11024__$1 = this;return self__.meta11023;
});
sailing_study_guide.core.t11022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11024,meta11023__$1){var self__ = this;
var _11024__$1 = this;return (new sailing_study_guide.core.t11022(self__._,self__.section,self__.header_progress_view,meta11023__$1));
});
sailing_study_guide.core.__GT_t11022 = (function __GT_t11022(___$1,section__$1,header_progress_view__$1,meta11023){return (new sailing_study_guide.core.t11022(___$1,section__$1,header_progress_view__$1,meta11023));
});
}
return (new sailing_study_guide.core.t11022(_,section,header_progress_view,null));
});
sailing_study_guide.core.header_view = (function header_view(section,_){if(typeof sailing_study_guide.core.t11028 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11028 = (function (_,section,header_view,meta11029){
this._ = _;
this.section = section;
this.header_view = header_view;
this.meta11029 = meta11029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11028.cljs$lang$type = true;
sailing_study_guide.core.t11028.cljs$lang$ctorStr = "sailing-study-guide.core/t11028";
sailing_study_guide.core.t11028.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11028");
});
sailing_study_guide.core.t11028.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t11028.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.div({"className": "quiz-header"},om.core.build.call(null,sailing_study_guide.core.header_bar_view,self__.section),om.core.build.call(null,sailing_study_guide.core.header_progress_view,self__.section));
});
sailing_study_guide.core.t11028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11030){var self__ = this;
var _11030__$1 = this;return self__.meta11029;
});
sailing_study_guide.core.t11028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11030,meta11029__$1){var self__ = this;
var _11030__$1 = this;return (new sailing_study_guide.core.t11028(self__._,self__.section,self__.header_view,meta11029__$1));
});
sailing_study_guide.core.__GT_t11028 = (function __GT_t11028(___$1,section__$1,header_view__$1,meta11029){return (new sailing_study_guide.core.t11028(___$1,section__$1,header_view__$1,meta11029));
});
}
return (new sailing_study_guide.core.t11028(_,section,header_view,null));
});
sailing_study_guide.core.section_view = (function section_view(section,owner){if(typeof sailing_study_guide.core.t11034 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11034 = (function (owner,section,section_view,meta11035){
this.owner = owner;
this.section = section;
this.section_view = section_view;
this.meta11035 = meta11035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11034.cljs$lang$type = true;
sailing_study_guide.core.t11034.cljs$lang$ctorStr = "sailing-study-guide.core/t11034";
sailing_study_guide.core.t11034.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11034");
});
sailing_study_guide.core.t11034.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t11034.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"data-offcanvas": true, "className": "off-canvas-wrap", "id": "quiz-section"},React.DOM.div({"className": "main-content inner-wrap"},om.core.build.call(null,sailing_study_guide.core.header_view,self__.section),om.core.build.call(null,sailing_study_guide.core.question_view,sailing_study_guide.core.current_question.call(null,self__.section)),React.DOM.a({"className": "exit-off-canvas"})));
});
sailing_study_guide.core.t11034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11036){var self__ = this;
var _11036__$1 = this;return self__.meta11035;
});
sailing_study_guide.core.t11034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11036,meta11035__$1){var self__ = this;
var _11036__$1 = this;return (new sailing_study_guide.core.t11034(self__.owner,self__.section,self__.section_view,meta11035__$1));
});
sailing_study_guide.core.__GT_t11034 = (function __GT_t11034(owner__$1,section__$1,section_view__$1,meta11035){return (new sailing_study_guide.core.t11034(owner__$1,section__$1,section_view__$1,meta11035));
});
}
return (new sailing_study_guide.core.t11034(owner,section,section_view,null));
});
sailing_study_guide.core.quiz_view = (function quiz_view(app_state,owner){if(typeof sailing_study_guide.core.t11040 !== 'undefined')
{} else
{
/**
* @constructor
*/
sailing_study_guide.core.t11040 = (function (owner,app_state,quiz_view,meta11041){
this.owner = owner;
this.app_state = app_state;
this.quiz_view = quiz_view;
this.meta11041 = meta11041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sailing_study_guide.core.t11040.cljs$lang$type = true;
sailing_study_guide.core.t11040.cljs$lang$ctorStr = "sailing-study-guide.core/t11040";
sailing_study_guide.core.t11040.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"sailing-study-guide.core/t11040");
});
sailing_study_guide.core.t11040.prototype.om$core$IRender$ = true;
sailing_study_guide.core.t11040.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,sailing_study_guide.core.section_view,cljs.core.nth.call(null,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"quiz","quiz",829625914).cljs$core$IFn$_invoke$arity$1(self__.app_state)),new cljs.core.Keyword(null,"current-section","current-section",1519906460).cljs$core$IFn$_invoke$arity$1(self__.app_state))));
});
sailing_study_guide.core.t11040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11042){var self__ = this;
var _11042__$1 = this;return self__.meta11041;
});
sailing_study_guide.core.t11040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11042,meta11041__$1){var self__ = this;
var _11042__$1 = this;return (new sailing_study_guide.core.t11040(self__.owner,self__.app_state,self__.quiz_view,meta11041__$1));
});
sailing_study_guide.core.__GT_t11040 = (function __GT_t11040(owner__$1,app_state__$1,quiz_view__$1,meta11041){return (new sailing_study_guide.core.t11040(owner__$1,app_state__$1,quiz_view__$1,meta11041));
});
}
return (new sailing_study_guide.core.t11040(owner,app_state,quiz_view,null));
});
om.core.root.call(null,sailing_study_guide.core.quiz_view,sailing_study_guide.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map