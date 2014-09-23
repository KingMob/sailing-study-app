// Compiled by ClojureScript 0.0-2342
goog.provide('sailing_study_guide.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clairvoyant.core');
goog.require('clairvoyant.core');
goog.require('cljs.core.async');
sailing_study_guide.dispatch.dispatch_chan = cljs.core.async.chan.call(null);
sailing_study_guide.dispatch.dispatch_mult = cljs.core.async.mult.call(null,sailing_study_guide.dispatch.dispatch_chan);
sailing_study_guide.dispatch.dispatch_logger_chan = cljs.core.async.chan.call(null);
sailing_study_guide.dispatch.dispatch_pub_chan = cljs.core.async.chan.call(null);
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__10474_SHARP_){return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__10474_SHARP_);
}));
cljs.core.async.tap.call(null,sailing_study_guide.dispatch.dispatch_mult,sailing_study_guide.dispatch.dispatch_logger_chan);
cljs.core.async.tap.call(null,sailing_study_guide.dispatch.dispatch_mult,sailing_study_guide.dispatch.dispatch_pub_chan);
sailing_study_guide.dispatch.register = (function register(tag,cb){var c = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,sailing_study_guide.dispatch.dispatch_pub,tag,c);
var c__6831__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto__,c){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto__,c){
return (function (state_10534){var state_val_10535 = (state_10534[(1)]);if((state_val_10535 === (8)))
{var inst_10524 = (state_10534[(2)]);var inst_10516 = inst_10524;var state_10534__$1 = (function (){var statearr_10536 = state_10534;(statearr_10536[(7)] = inst_10516);
return statearr_10536;
})();var statearr_10537_10553 = state_10534__$1;(statearr_10537_10553[(2)] = null);
(statearr_10537_10553[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10535 === (7)))
{var inst_10530 = (state_10534[(2)]);var state_10534__$1 = state_10534;var statearr_10538_10554 = state_10534__$1;(statearr_10538_10554[(2)] = inst_10530);
(statearr_10538_10554[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10535 === (6)))
{var inst_10527 = cljs.core.println.call(null,"Leaving loop for ",tag);var inst_10528 = cljs.core.async.close_BANG_.call(null,c);var state_10534__$1 = (function (){var statearr_10539 = state_10534;(statearr_10539[(8)] = inst_10527);
return statearr_10539;
})();var statearr_10540_10555 = state_10534__$1;(statearr_10540_10555[(2)] = inst_10528);
(statearr_10540_10555[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10535 === (5)))
{var inst_10516 = (state_10534[(7)]);var inst_10521 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_10516);var inst_10522 = cb.call(null,inst_10521);var state_10534__$1 = (function (){var statearr_10541 = state_10534;(statearr_10541[(9)] = inst_10522);
return statearr_10541;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10534__$1,(8),c);
} else
{if((state_val_10535 === (4)))
{var inst_10532 = (state_10534[(2)]);var state_10534__$1 = state_10534;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10534__$1,inst_10532);
} else
{if((state_val_10535 === (3)))
{var inst_10516 = (state_10534[(7)]);var inst_10518 = (inst_10516 == null);var inst_10519 = cljs.core.not.call(null,inst_10518);var state_10534__$1 = state_10534;if(inst_10519)
{var statearr_10542_10556 = state_10534__$1;(statearr_10542_10556[(1)] = (5));
} else
{var statearr_10543_10557 = state_10534__$1;(statearr_10543_10557[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10535 === (2)))
{var inst_10515 = (state_10534[(2)]);var inst_10516 = inst_10515;var state_10534__$1 = (function (){var statearr_10544 = state_10534;(statearr_10544[(7)] = inst_10516);
return statearr_10544;
})();var statearr_10545_10558 = state_10534__$1;(statearr_10545_10558[(2)] = null);
(statearr_10545_10558[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10535 === (1)))
{var state_10534__$1 = state_10534;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10534__$1,(2),c);
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
});})(c__6831__auto__,c))
;return ((function (switch__6816__auto__,c__6831__auto__,c){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_10549 = [null,null,null,null,null,null,null,null,null,null];(statearr_10549[(0)] = state_machine__6817__auto__);
(statearr_10549[(1)] = (1));
return statearr_10549;
});
var state_machine__6817__auto____1 = (function (state_10534){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_10534);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e10550){if((e10550 instanceof Object))
{var ex__6820__auto__ = e10550;var statearr_10551_10559 = state_10534;(statearr_10551_10559[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10534);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10550;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10560 = state_10534;
state_10534 = G__10560;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_10534){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_10534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto__,c))
})();var state__6833__auto__ = (function (){var statearr_10552 = f__6832__auto__.call(null);(statearr_10552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto__);
return statearr_10552;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto__,c))
);
return c__6831__auto__;
});
sailing_study_guide.dispatch.unregister = (function unregister(tag,chan){return cljs.core.async.unsub.call(null,sailing_study_guide.dispatch.dispatch_pub,tag,chan);
});
/**
* @param {...*} var_args
*/
sailing_study_guide.dispatch.dispatch_BANG_ = (function() { 
var dispatch_BANG___delegate = function (tags,message){var dispatchfn = (function dispatchfn(tag){return cljs.core.async.put_BANG_.call(null,sailing_study_guide.dispatch.dispatch_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"message","message",-406056002),message], null));
});
if(cljs.core.sequential_QMARK_.call(null,tags))
{var seq__10565 = cljs.core.seq.call(null,tags);var chunk__10566 = null;var count__10567 = (0);var i__10568 = (0);while(true){
if((i__10568 < count__10567))
{var tag = cljs.core._nth.call(null,chunk__10566,i__10568);dispatchfn.call(null,tag);
{
var G__10569 = seq__10565;
var G__10570 = chunk__10566;
var G__10571 = count__10567;
var G__10572 = (i__10568 + (1));
seq__10565 = G__10569;
chunk__10566 = G__10570;
count__10567 = G__10571;
i__10568 = G__10572;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10565);if(temp__4126__auto__)
{var seq__10565__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10565__$1))
{var c__4395__auto__ = cljs.core.chunk_first.call(null,seq__10565__$1);{
var G__10573 = cljs.core.chunk_rest.call(null,seq__10565__$1);
var G__10574 = c__4395__auto__;
var G__10575 = cljs.core.count.call(null,c__4395__auto__);
var G__10576 = (0);
seq__10565 = G__10573;
chunk__10566 = G__10574;
count__10567 = G__10575;
i__10568 = G__10576;
continue;
}
} else
{var tag = cljs.core.first.call(null,seq__10565__$1);dispatchfn.call(null,tag);
{
var G__10577 = cljs.core.next.call(null,seq__10565__$1);
var G__10578 = null;
var G__10579 = (0);
var G__10580 = (0);
seq__10565 = G__10577;
chunk__10566 = G__10578;
count__10567 = G__10579;
i__10568 = G__10580;
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
dispatch_BANG_.cljs$lang$applyTo = (function (arglist__10581){
var tags = cljs.core.first(arglist__10581);
var message = cljs.core.rest(arglist__10581);
return dispatch_BANG___delegate(tags,message);
});
dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = dispatch_BANG___delegate;
return dispatch_BANG_;
})()
;
sailing_study_guide.dispatch.retrieve_message = (function retrieve_message(payload){if(cljs.core.truth_(payload))
{return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(payload);
} else
{return null;
}
});
var c__6831__auto___10603 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___10603){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___10603){
return (function (state_10591){var state_val_10592 = (state_10591[(1)]);if((state_val_10592 === (4)))
{var inst_10584 = (state_10591[(2)]);var inst_10585 = cljs.core.pr_str.call(null,inst_10584);var inst_10586 = cljs.core.println.call(null,"Dispatched: ",inst_10585);var state_10591__$1 = (function (){var statearr_10593 = state_10591;(statearr_10593[(7)] = inst_10586);
return statearr_10593;
})();var statearr_10594_10604 = state_10591__$1;(statearr_10594_10604[(2)] = null);
(statearr_10594_10604[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10592 === (3)))
{var inst_10589 = (state_10591[(2)]);var state_10591__$1 = state_10591;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10591__$1,inst_10589);
} else
{if((state_val_10592 === (2)))
{var state_10591__$1 = state_10591;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10591__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else
{if((state_val_10592 === (1)))
{var state_10591__$1 = state_10591;var statearr_10595_10605 = state_10591__$1;(statearr_10595_10605[(2)] = null);
(statearr_10595_10605[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6831__auto___10603))
;return ((function (switch__6816__auto__,c__6831__auto___10603){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_10599 = [null,null,null,null,null,null,null,null];(statearr_10599[(0)] = state_machine__6817__auto__);
(statearr_10599[(1)] = (1));
return statearr_10599;
});
var state_machine__6817__auto____1 = (function (state_10591){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_10591);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e10600){if((e10600 instanceof Object))
{var ex__6820__auto__ = e10600;var statearr_10601_10606 = state_10591;(statearr_10601_10606[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10591);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10600;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10607 = state_10591;
state_10591 = G__10607;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_10591){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_10591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___10603))
})();var state__6833__auto__ = (function (){var statearr_10602 = f__6832__auto__.call(null);(statearr_10602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___10603);
return statearr_10602;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___10603))
);

//# sourceMappingURL=dispatch.js.map