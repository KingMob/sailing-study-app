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
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__10743_SHARP_){return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__10743_SHARP_);
}));
cljs.core.async.tap.call(null,sailing_study_guide.dispatch.dispatch_mult,sailing_study_guide.dispatch.dispatch_logger_chan);
cljs.core.async.tap.call(null,sailing_study_guide.dispatch.dispatch_mult,sailing_study_guide.dispatch.dispatch_pub_chan);
sailing_study_guide.dispatch.register = (function register(tag){var c = cljs.core.async.chan.call(null);return cljs.core.async.sub.call(null,sailing_study_guide.dispatch.dispatch_pub,tag,c);
});
sailing_study_guide.dispatch.whenever = (function whenever(c,cb){var c__6831__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto__){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto__){
return (function (state_10803){var state_val_10804 = (state_10803[(1)]);if((state_val_10804 === (8)))
{var inst_10793 = (state_10803[(2)]);var inst_10785 = inst_10793;var state_10803__$1 = (function (){var statearr_10805 = state_10803;(statearr_10805[(7)] = inst_10785);
return statearr_10805;
})();var statearr_10806_10822 = state_10803__$1;(statearr_10806_10822[(2)] = null);
(statearr_10806_10822[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10804 === (7)))
{var inst_10799 = (state_10803[(2)]);var state_10803__$1 = state_10803;var statearr_10807_10823 = state_10803__$1;(statearr_10807_10823[(2)] = inst_10799);
(statearr_10807_10823[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10804 === (6)))
{var inst_10796 = cljs.core.println.call(null,"Leaving loop for ",sailing_study_guide.dispatch.tag);var inst_10797 = cljs.core.async.close_BANG_.call(null,c);var state_10803__$1 = (function (){var statearr_10808 = state_10803;(statearr_10808[(8)] = inst_10796);
return statearr_10808;
})();var statearr_10809_10824 = state_10803__$1;(statearr_10809_10824[(2)] = inst_10797);
(statearr_10809_10824[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10804 === (5)))
{var inst_10785 = (state_10803[(7)]);var inst_10790 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_10785);var inst_10791 = cb.call(null,inst_10790);var state_10803__$1 = (function (){var statearr_10810 = state_10803;(statearr_10810[(9)] = inst_10791);
return statearr_10810;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10803__$1,(8),c);
} else
{if((state_val_10804 === (4)))
{var inst_10801 = (state_10803[(2)]);var state_10803__$1 = state_10803;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10803__$1,inst_10801);
} else
{if((state_val_10804 === (3)))
{var inst_10785 = (state_10803[(7)]);var inst_10787 = (inst_10785 == null);var inst_10788 = cljs.core.not.call(null,inst_10787);var state_10803__$1 = state_10803;if(inst_10788)
{var statearr_10811_10825 = state_10803__$1;(statearr_10811_10825[(1)] = (5));
} else
{var statearr_10812_10826 = state_10803__$1;(statearr_10812_10826[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10804 === (2)))
{var inst_10784 = (state_10803[(2)]);var inst_10785 = inst_10784;var state_10803__$1 = (function (){var statearr_10813 = state_10803;(statearr_10813[(7)] = inst_10785);
return statearr_10813;
})();var statearr_10814_10827 = state_10803__$1;(statearr_10814_10827[(2)] = null);
(statearr_10814_10827[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10804 === (1)))
{var state_10803__$1 = state_10803;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10803__$1,(2),c);
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
});})(c__6831__auto__))
;return ((function (switch__6816__auto__,c__6831__auto__){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_10818 = [null,null,null,null,null,null,null,null,null,null];(statearr_10818[(0)] = state_machine__6817__auto__);
(statearr_10818[(1)] = (1));
return statearr_10818;
});
var state_machine__6817__auto____1 = (function (state_10803){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_10803);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e10819){if((e10819 instanceof Object))
{var ex__6820__auto__ = e10819;var statearr_10820_10828 = state_10803;(statearr_10820_10828[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10803);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10819;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10829 = state_10803;
state_10803 = G__10829;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_10803){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_10803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto__))
})();var state__6833__auto__ = (function (){var statearr_10821 = f__6832__auto__.call(null);(statearr_10821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto__);
return statearr_10821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto__))
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
{var seq__10834 = cljs.core.seq.call(null,tags);var chunk__10835 = null;var count__10836 = (0);var i__10837 = (0);while(true){
if((i__10837 < count__10836))
{var tag = cljs.core._nth.call(null,chunk__10835,i__10837);dispatchfn.call(null,tag);
{
var G__10838 = seq__10834;
var G__10839 = chunk__10835;
var G__10840 = count__10836;
var G__10841 = (i__10837 + (1));
seq__10834 = G__10838;
chunk__10835 = G__10839;
count__10836 = G__10840;
i__10837 = G__10841;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10834);if(temp__4126__auto__)
{var seq__10834__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10834__$1))
{var c__4395__auto__ = cljs.core.chunk_first.call(null,seq__10834__$1);{
var G__10842 = cljs.core.chunk_rest.call(null,seq__10834__$1);
var G__10843 = c__4395__auto__;
var G__10844 = cljs.core.count.call(null,c__4395__auto__);
var G__10845 = (0);
seq__10834 = G__10842;
chunk__10835 = G__10843;
count__10836 = G__10844;
i__10837 = G__10845;
continue;
}
} else
{var tag = cljs.core.first.call(null,seq__10834__$1);dispatchfn.call(null,tag);
{
var G__10846 = cljs.core.next.call(null,seq__10834__$1);
var G__10847 = null;
var G__10848 = (0);
var G__10849 = (0);
seq__10834 = G__10846;
chunk__10835 = G__10847;
count__10836 = G__10848;
i__10837 = G__10849;
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
dispatch_BANG_.cljs$lang$applyTo = (function (arglist__10850){
var tags = cljs.core.first(arglist__10850);
var message = cljs.core.rest(arglist__10850);
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
var c__6831__auto___10872 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___10872){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___10872){
return (function (state_10860){var state_val_10861 = (state_10860[(1)]);if((state_val_10861 === (4)))
{var inst_10853 = (state_10860[(2)]);var inst_10854 = cljs.core.pr_str.call(null,inst_10853);var inst_10855 = cljs.core.println.call(null,"Dispatched: ",inst_10854);var state_10860__$1 = (function (){var statearr_10862 = state_10860;(statearr_10862[(7)] = inst_10855);
return statearr_10862;
})();var statearr_10863_10873 = state_10860__$1;(statearr_10863_10873[(2)] = null);
(statearr_10863_10873[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10861 === (3)))
{var inst_10858 = (state_10860[(2)]);var state_10860__$1 = state_10860;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10860__$1,inst_10858);
} else
{if((state_val_10861 === (2)))
{var state_10860__$1 = state_10860;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10860__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else
{if((state_val_10861 === (1)))
{var state_10860__$1 = state_10860;var statearr_10864_10874 = state_10860__$1;(statearr_10864_10874[(2)] = null);
(statearr_10864_10874[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6831__auto___10872))
;return ((function (switch__6816__auto__,c__6831__auto___10872){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_10868 = [null,null,null,null,null,null,null,null];(statearr_10868[(0)] = state_machine__6817__auto__);
(statearr_10868[(1)] = (1));
return statearr_10868;
});
var state_machine__6817__auto____1 = (function (state_10860){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_10860);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e10869){if((e10869 instanceof Object))
{var ex__6820__auto__ = e10869;var statearr_10870_10875 = state_10860;(statearr_10870_10875[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10860);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10869;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10876 = state_10860;
state_10860 = G__10876;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_10860){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_10860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___10872))
})();var state__6833__auto__ = (function (){var statearr_10871 = f__6832__auto__.call(null);(statearr_10871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___10872);
return statearr_10871;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___10872))
);

//# sourceMappingURL=dispatch.js.map