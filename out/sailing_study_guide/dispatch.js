// Compiled by ClojureScript 0.0-2356
goog.provide('sailing_study_guide.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clairvoyant.core');
goog.require('clairvoyant.core');
goog.require('cljs.core.async');
sailing_study_guide.dispatch._STAR_dispatcher_logging_enabled_STAR_ = false;
sailing_study_guide.dispatch.dispatch_chan = cljs.core.async.chan.call(null,(1));
sailing_study_guide.dispatch.dispatch_mult = cljs.core.async.mult.call(null,sailing_study_guide.dispatch.dispatch_chan);
sailing_study_guide.dispatch.dispatch_pub_chan = cljs.core.async.chan.call(null,(1));
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__40487_SHARP_){return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__40487_SHARP_);
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
sailing_study_guide.dispatch.whenever = (function whenever(tag,cb){var c = sailing_study_guide.dispatch.register.call(null,tag);var c__6844__auto___40558 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto___40558,c){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto___40558,c){
return (function (state_40540){var state_val_40541 = (state_40540[(1)]);if((state_val_40541 === (8)))
{var inst_40531 = (state_40540[(2)]);var inst_40525 = inst_40531;var state_40540__$1 = (function (){var statearr_40542 = state_40540;(statearr_40542[(7)] = inst_40525);
return statearr_40542;
})();var statearr_40543_40559 = state_40540__$1;(statearr_40543_40559[(2)] = null);
(statearr_40543_40559[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40541 === (7)))
{var inst_40536 = (state_40540[(2)]);var state_40540__$1 = state_40540;var statearr_40544_40560 = state_40540__$1;(statearr_40544_40560[(2)] = inst_40536);
(statearr_40544_40560[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40541 === (6)))
{var inst_40534 = cljs.core.async.close_BANG_.call(null,c);var state_40540__$1 = state_40540;var statearr_40545_40561 = state_40540__$1;(statearr_40545_40561[(2)] = inst_40534);
(statearr_40545_40561[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40541 === (5)))
{var inst_40525 = (state_40540[(7)]);var inst_40528 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_40525);var inst_40529 = cb.call(null,inst_40528);var state_40540__$1 = (function (){var statearr_40546 = state_40540;(statearr_40546[(8)] = inst_40529);
return statearr_40546;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40540__$1,(8),c);
} else
{if((state_val_40541 === (4)))
{var inst_40538 = (state_40540[(2)]);var state_40540__$1 = state_40540;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40540__$1,inst_40538);
} else
{if((state_val_40541 === (3)))
{var inst_40525 = (state_40540[(7)]);var state_40540__$1 = state_40540;if(cljs.core.truth_(inst_40525))
{var statearr_40547_40562 = state_40540__$1;(statearr_40547_40562[(1)] = (5));
} else
{var statearr_40548_40563 = state_40540__$1;(statearr_40548_40563[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40541 === (2)))
{var inst_40524 = (state_40540[(2)]);var inst_40525 = inst_40524;var state_40540__$1 = (function (){var statearr_40549 = state_40540;(statearr_40549[(7)] = inst_40525);
return statearr_40549;
})();var statearr_40550_40564 = state_40540__$1;(statearr_40550_40564[(2)] = null);
(statearr_40550_40564[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40541 === (1)))
{var state_40540__$1 = state_40540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40540__$1,(2),c);
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
});})(c__6844__auto___40558,c))
;return ((function (switch__6829__auto__,c__6844__auto___40558,c){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_40554 = [null,null,null,null,null,null,null,null,null];(statearr_40554[(0)] = state_machine__6830__auto__);
(statearr_40554[(1)] = (1));
return statearr_40554;
});
var state_machine__6830__auto____1 = (function (state_40540){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_40540);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e40555){if((e40555 instanceof Object))
{var ex__6833__auto__ = e40555;var statearr_40556_40565 = state_40540;(statearr_40556_40565[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40540);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40555;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40566 = state_40540;
state_40540 = G__40566;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_40540){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_40540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto___40558,c))
})();var state__6846__auto__ = (function (){var statearr_40557 = f__6845__auto__.call(null);(statearr_40557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___40558);
return statearr_40557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto___40558,c))
);
return c;
});
/**
* @param {...*} var_args
*/
sailing_study_guide.dispatch.dispatch_BANG_ = (function() { 
var dispatch_BANG___delegate = function (tagortags,message){var tags = ((cljs.core.sequential_QMARK_.call(null,tagortags))?tagortags:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tagortags], null));var seq__40605 = cljs.core.seq.call(null,tags);var chunk__40606 = null;var count__40607 = (0);var i__40608 = (0);while(true){
if((i__40608 < count__40607))
{var tag = cljs.core._nth.call(null,chunk__40606,i__40608);var c__6844__auto___40643 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (seq__40605,chunk__40606,count__40607,i__40608,c__6844__auto___40643,tag,tags){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (seq__40605,chunk__40606,count__40607,i__40608,c__6844__auto___40643,tag,tags){
return (function (state_40616){var state_val_40617 = (state_40616[(1)]);if((state_val_40617 === (2)))
{var inst_40613 = (state_40616[(2)]);var inst_40614 = cljs.core.println.call(null,"Put!");var state_40616__$1 = (function (){var statearr_40618 = state_40616;(statearr_40618[(7)] = inst_40613);
return statearr_40618;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40616__$1,inst_40614);
} else
{if((state_val_40617 === (1)))
{var inst_40609 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];var inst_40610 = [tag,message];var inst_40611 = cljs.core.PersistentHashMap.fromArrays(inst_40609,inst_40610);var state_40616__$1 = state_40616;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40616__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_40611);
} else
{return null;
}
}
});})(seq__40605,chunk__40606,count__40607,i__40608,c__6844__auto___40643,tag,tags))
;return ((function (seq__40605,chunk__40606,count__40607,i__40608,switch__6829__auto__,c__6844__auto___40643,tag,tags){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_40622 = [null,null,null,null,null,null,null,null];(statearr_40622[(0)] = state_machine__6830__auto__);
(statearr_40622[(1)] = (1));
return statearr_40622;
});
var state_machine__6830__auto____1 = (function (state_40616){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_40616);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e40623){if((e40623 instanceof Object))
{var ex__6833__auto__ = e40623;var statearr_40624_40644 = state_40616;(statearr_40624_40644[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40616);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40623;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40645 = state_40616;
state_40616 = G__40645;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_40616){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_40616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(seq__40605,chunk__40606,count__40607,i__40608,switch__6829__auto__,c__6844__auto___40643,tag,tags))
})();var state__6846__auto__ = (function (){var statearr_40625 = f__6845__auto__.call(null);(statearr_40625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___40643);
return statearr_40625;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(seq__40605,chunk__40606,count__40607,i__40608,c__6844__auto___40643,tag,tags))
);
{
var G__40646 = seq__40605;
var G__40647 = chunk__40606;
var G__40648 = count__40607;
var G__40649 = (i__40608 + (1));
seq__40605 = G__40646;
chunk__40606 = G__40647;
count__40607 = G__40648;
i__40608 = G__40649;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__40605);if(temp__4126__auto__)
{var seq__40605__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40605__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__40605__$1);{
var G__40650 = cljs.core.chunk_rest.call(null,seq__40605__$1);
var G__40651 = c__4408__auto__;
var G__40652 = cljs.core.count.call(null,c__4408__auto__);
var G__40653 = (0);
seq__40605 = G__40650;
chunk__40606 = G__40651;
count__40607 = G__40652;
i__40608 = G__40653;
continue;
}
} else
{var tag = cljs.core.first.call(null,seq__40605__$1);var c__6844__auto___40654 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (seq__40605,chunk__40606,count__40607,i__40608,c__6844__auto___40654,tag,seq__40605__$1,temp__4126__auto__,tags){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (seq__40605,chunk__40606,count__40607,i__40608,c__6844__auto___40654,tag,seq__40605__$1,temp__4126__auto__,tags){
return (function (state_40633){var state_val_40634 = (state_40633[(1)]);if((state_val_40634 === (2)))
{var inst_40630 = (state_40633[(2)]);var inst_40631 = cljs.core.println.call(null,"Put!");var state_40633__$1 = (function (){var statearr_40635 = state_40633;(statearr_40635[(7)] = inst_40630);
return statearr_40635;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40633__$1,inst_40631);
} else
{if((state_val_40634 === (1)))
{var inst_40626 = [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002)];var inst_40627 = [tag,message];var inst_40628 = cljs.core.PersistentHashMap.fromArrays(inst_40626,inst_40627);var state_40633__$1 = state_40633;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40633__$1,(2),sailing_study_guide.dispatch.dispatch_chan,inst_40628);
} else
{return null;
}
}
});})(seq__40605,chunk__40606,count__40607,i__40608,c__6844__auto___40654,tag,seq__40605__$1,temp__4126__auto__,tags))
;return ((function (seq__40605,chunk__40606,count__40607,i__40608,switch__6829__auto__,c__6844__auto___40654,tag,seq__40605__$1,temp__4126__auto__,tags){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_40639 = [null,null,null,null,null,null,null,null];(statearr_40639[(0)] = state_machine__6830__auto__);
(statearr_40639[(1)] = (1));
return statearr_40639;
});
var state_machine__6830__auto____1 = (function (state_40633){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_40633);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e40640){if((e40640 instanceof Object))
{var ex__6833__auto__ = e40640;var statearr_40641_40655 = state_40633;(statearr_40641_40655[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40633);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40640;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40656 = state_40633;
state_40633 = G__40656;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_40633){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_40633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(seq__40605,chunk__40606,count__40607,i__40608,switch__6829__auto__,c__6844__auto___40654,tag,seq__40605__$1,temp__4126__auto__,tags))
})();var state__6846__auto__ = (function (){var statearr_40642 = f__6845__auto__.call(null);(statearr_40642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___40654);
return statearr_40642;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(seq__40605,chunk__40606,count__40607,i__40608,c__6844__auto___40654,tag,seq__40605__$1,temp__4126__auto__,tags))
);
{
var G__40657 = cljs.core.next.call(null,seq__40605__$1);
var G__40658 = null;
var G__40659 = (0);
var G__40660 = (0);
seq__40605 = G__40657;
chunk__40606 = G__40658;
count__40607 = G__40659;
i__40608 = G__40660;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var dispatch_BANG_ = function (tagortags,var_args){
var message = null;if (arguments.length > 1) {
  message = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dispatch_BANG___delegate.call(this,tagortags,message);};
dispatch_BANG_.cljs$lang$maxFixedArity = 1;
dispatch_BANG_.cljs$lang$applyTo = (function (arglist__40661){
var tagortags = cljs.core.first(arglist__40661);
var message = cljs.core.rest(arglist__40661);
return dispatch_BANG___delegate(tagortags,message);
});
dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = dispatch_BANG___delegate;
return dispatch_BANG_;
})()
;
if(cljs.core.truth_(sailing_study_guide.dispatch._STAR_dispatcher_logging_enabled_STAR_))
{sailing_study_guide.dispatch.dispatch_logger_chan = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,sailing_study_guide.dispatch.dispatch_mult,sailing_study_guide.dispatch.dispatch_logger_chan);
var c__6844__auto___40683 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto___40683){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto___40683){
return (function (state_40671){var state_val_40672 = (state_40671[(1)]);if((state_val_40672 === (4)))
{var inst_40664 = (state_40671[(2)]);var inst_40665 = cljs.core.pr_str.call(null,inst_40664);var inst_40666 = cljs.core.println.call(null,"Logged: ",inst_40665);var state_40671__$1 = (function (){var statearr_40673 = state_40671;(statearr_40673[(7)] = inst_40666);
return statearr_40673;
})();var statearr_40674_40684 = state_40671__$1;(statearr_40674_40684[(2)] = null);
(statearr_40674_40684[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40672 === (3)))
{var inst_40669 = (state_40671[(2)]);var state_40671__$1 = state_40671;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40671__$1,inst_40669);
} else
{if((state_val_40672 === (2)))
{var state_40671__$1 = state_40671;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40671__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else
{if((state_val_40672 === (1)))
{var state_40671__$1 = state_40671;var statearr_40675_40685 = state_40671__$1;(statearr_40675_40685[(2)] = null);
(statearr_40675_40685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6844__auto___40683))
;return ((function (switch__6829__auto__,c__6844__auto___40683){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_40679 = [null,null,null,null,null,null,null,null];(statearr_40679[(0)] = state_machine__6830__auto__);
(statearr_40679[(1)] = (1));
return statearr_40679;
});
var state_machine__6830__auto____1 = (function (state_40671){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_40671);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e40680){if((e40680 instanceof Object))
{var ex__6833__auto__ = e40680;var statearr_40681_40686 = state_40671;(statearr_40681_40686[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40671);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40680;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40687 = state_40671;
state_40671 = G__40687;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_40671){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_40671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto___40683))
})();var state__6846__auto__ = (function (){var statearr_40682 = f__6845__auto__.call(null);(statearr_40682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___40683);
return statearr_40682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto___40683))
);
} else
{}

//# sourceMappingURL=dispatch.js.map