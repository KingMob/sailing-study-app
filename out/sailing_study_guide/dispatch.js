// Compiled by ClojureScript 0.0-2356
goog.provide('sailing_study_guide.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clairvoyant.core');
goog.require('clairvoyant.core');
goog.require('cljs.core.async');
sailing_study_guide.dispatch._STAR_dispatcher_logging_enabled_STAR_ = false;
sailing_study_guide.dispatch.dispatch_chan = cljs.core.async.chan.call(null);
sailing_study_guide.dispatch.dispatch_mult = cljs.core.async.mult.call(null,sailing_study_guide.dispatch.dispatch_chan);
sailing_study_guide.dispatch.dispatch_pub_chan = cljs.core.async.chan.call(null);
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__10483_SHARP_){return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__10483_SHARP_);
}));
cljs.core.async.tap.call(null,sailing_study_guide.dispatch.dispatch_mult,sailing_study_guide.dispatch.dispatch_pub_chan);
sailing_study_guide.dispatch.retrieve_message = (function retrieve_message(payload){if(cljs.core.truth_(payload))
{return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(payload);
} else
{return null;
}
});
sailing_study_guide.dispatch.register = (function register(tag){var c = cljs.core.async.chan.call(null);return cljs.core.async.sub.call(null,sailing_study_guide.dispatch.dispatch_pub,tag,c);
});
sailing_study_guide.dispatch.unregister = (function unregister(tag,chan){cljs.core.async.unsub.call(null,sailing_study_guide.dispatch.dispatch_pub,tag,chan);
return cljs.core.async.close_BANG_.call(null,chan);
});
sailing_study_guide.dispatch.whenever = (function whenever(tag,cb){var c = sailing_study_guide.dispatch.register.call(null,tag);var c__6844__auto___10554 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto___10554,c){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto___10554,c){
return (function (state_10536){var state_val_10537 = (state_10536[(1)]);if((state_val_10537 === (8)))
{var inst_10527 = (state_10536[(2)]);var inst_10521 = inst_10527;var state_10536__$1 = (function (){var statearr_10538 = state_10536;(statearr_10538[(7)] = inst_10521);
return statearr_10538;
})();var statearr_10539_10555 = state_10536__$1;(statearr_10539_10555[(2)] = null);
(statearr_10539_10555[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10537 === (7)))
{var inst_10532 = (state_10536[(2)]);var state_10536__$1 = state_10536;var statearr_10540_10556 = state_10536__$1;(statearr_10540_10556[(2)] = inst_10532);
(statearr_10540_10556[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10537 === (6)))
{var inst_10530 = cljs.core.async.close_BANG_.call(null,c);var state_10536__$1 = state_10536;var statearr_10541_10557 = state_10536__$1;(statearr_10541_10557[(2)] = inst_10530);
(statearr_10541_10557[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10537 === (5)))
{var inst_10521 = (state_10536[(7)]);var inst_10524 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_10521);var inst_10525 = cb.call(null,inst_10524);var state_10536__$1 = (function (){var statearr_10542 = state_10536;(statearr_10542[(8)] = inst_10525);
return statearr_10542;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10536__$1,(8),c);
} else
{if((state_val_10537 === (4)))
{var inst_10534 = (state_10536[(2)]);var state_10536__$1 = state_10536;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10536__$1,inst_10534);
} else
{if((state_val_10537 === (3)))
{var inst_10521 = (state_10536[(7)]);var state_10536__$1 = state_10536;if(cljs.core.truth_(inst_10521))
{var statearr_10543_10558 = state_10536__$1;(statearr_10543_10558[(1)] = (5));
} else
{var statearr_10544_10559 = state_10536__$1;(statearr_10544_10559[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10537 === (2)))
{var inst_10520 = (state_10536[(2)]);var inst_10521 = inst_10520;var state_10536__$1 = (function (){var statearr_10545 = state_10536;(statearr_10545[(7)] = inst_10521);
return statearr_10545;
})();var statearr_10546_10560 = state_10536__$1;(statearr_10546_10560[(2)] = null);
(statearr_10546_10560[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10537 === (1)))
{var state_10536__$1 = state_10536;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10536__$1,(2),c);
} else
{return null;
}
}
}
}
}
}
}
}
});})(c__6844__auto___10554,c))
;return ((function (switch__6829__auto__,c__6844__auto___10554,c){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_10550 = [null,null,null,null,null,null,null,null,null];(statearr_10550[(0)] = state_machine__6830__auto__);
(statearr_10550[(1)] = (1));
return statearr_10550;
});
var state_machine__6830__auto____1 = (function (state_10536){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_10536);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e10551){if((e10551 instanceof Object))
{var ex__6833__auto__ = e10551;var statearr_10552_10561 = state_10536;(statearr_10552_10561[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10536);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10551;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10562 = state_10536;
state_10536 = G__10562;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_10536){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_10536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto___10554,c))
})();var state__6846__auto__ = (function (){var statearr_10553 = f__6845__auto__.call(null);(statearr_10553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___10554);
return statearr_10553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto___10554,c))
);
return c;
});
/**
* @param {...*} var_args
*/
sailing_study_guide.dispatch.dispatch_BANG_ = (function() { 
var dispatch_BANG___delegate = function (tags,message){var dispatchfn = (function dispatchfn(tag){return cljs.core.async.put_BANG_.call(null,sailing_study_guide.dispatch.dispatch_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"message","message",-406056002),message], null));
});
if(cljs.core.sequential_QMARK_.call(null,tags))
{var seq__10567 = cljs.core.seq.call(null,tags);var chunk__10568 = null;var count__10569 = (0);var i__10570 = (0);while(true){
if((i__10570 < count__10569))
{var tag = cljs.core._nth.call(null,chunk__10568,i__10570);dispatchfn.call(null,tag);
{
var G__10571 = seq__10567;
var G__10572 = chunk__10568;
var G__10573 = count__10569;
var G__10574 = (i__10570 + (1));
seq__10567 = G__10571;
chunk__10568 = G__10572;
count__10569 = G__10573;
i__10570 = G__10574;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10567);if(temp__4126__auto__)
{var seq__10567__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10567__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__10567__$1);{
var G__10575 = cljs.core.chunk_rest.call(null,seq__10567__$1);
var G__10576 = c__4408__auto__;
var G__10577 = cljs.core.count.call(null,c__4408__auto__);
var G__10578 = (0);
seq__10567 = G__10575;
chunk__10568 = G__10576;
count__10569 = G__10577;
i__10570 = G__10578;
continue;
}
} else
{var tag = cljs.core.first.call(null,seq__10567__$1);dispatchfn.call(null,tag);
{
var G__10579 = cljs.core.next.call(null,seq__10567__$1);
var G__10580 = null;
var G__10581 = (0);
var G__10582 = (0);
seq__10567 = G__10579;
chunk__10568 = G__10580;
count__10569 = G__10581;
i__10570 = G__10582;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return dispatchfn.call(null,tags);
}
};
var dispatch_BANG_ = function (tags,var_args){
var message = null;if (arguments.length > 1) {
  message = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dispatch_BANG___delegate.call(this,tags,message);};
dispatch_BANG_.cljs$lang$maxFixedArity = 1;
dispatch_BANG_.cljs$lang$applyTo = (function (arglist__10583){
var tags = cljs.core.first(arglist__10583);
var message = cljs.core.rest(arglist__10583);
return dispatch_BANG___delegate(tags,message);
});
dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = dispatch_BANG___delegate;
return dispatch_BANG_;
})()
;
if(cljs.core.truth_(sailing_study_guide.dispatch._STAR_dispatcher_logging_enabled_STAR_))
{sailing_study_guide.dispatch.dispatch_logger_chan = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,sailing_study_guide.dispatch.dispatch_mult,sailing_study_guide.dispatch.dispatch_logger_chan);
var c__6844__auto___10605 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto___10605){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto___10605){
return (function (state_10593){var state_val_10594 = (state_10593[(1)]);if((state_val_10594 === (4)))
{var inst_10586 = (state_10593[(2)]);var inst_10587 = cljs.core.pr_str.call(null,inst_10586);var inst_10588 = cljs.core.println.call(null,"Logged: ",inst_10587);var state_10593__$1 = (function (){var statearr_10595 = state_10593;(statearr_10595[(7)] = inst_10588);
return statearr_10595;
})();var statearr_10596_10606 = state_10593__$1;(statearr_10596_10606[(2)] = null);
(statearr_10596_10606[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10594 === (3)))
{var inst_10591 = (state_10593[(2)]);var state_10593__$1 = state_10593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10593__$1,inst_10591);
} else
{if((state_val_10594 === (2)))
{var state_10593__$1 = state_10593;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10593__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else
{if((state_val_10594 === (1)))
{var state_10593__$1 = state_10593;var statearr_10597_10607 = state_10593__$1;(statearr_10597_10607[(2)] = null);
(statearr_10597_10607[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6844__auto___10605))
;return ((function (switch__6829__auto__,c__6844__auto___10605){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_10601 = [null,null,null,null,null,null,null,null];(statearr_10601[(0)] = state_machine__6830__auto__);
(statearr_10601[(1)] = (1));
return statearr_10601;
});
var state_machine__6830__auto____1 = (function (state_10593){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_10593);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e10602){if((e10602 instanceof Object))
{var ex__6833__auto__ = e10602;var statearr_10603_10608 = state_10593;(statearr_10603_10608[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10593);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10602;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10609 = state_10593;
state_10593 = G__10609;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_10593){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_10593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto___10605))
})();var state__6846__auto__ = (function (){var statearr_10604 = f__6845__auto__.call(null);(statearr_10604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___10605);
return statearr_10604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto___10605))
);
} else
{}

//# sourceMappingURL=dispatch.js.map