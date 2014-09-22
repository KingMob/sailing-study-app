// Compiled by ClojureScript 0.0-2322
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
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__10868_SHARP_){return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__10868_SHARP_);
}));
cljs.core.async.tap.call(null,sailing_study_guide.dispatch.dispatch_mult,sailing_study_guide.dispatch.dispatch_logger_chan);
cljs.core.async.tap.call(null,sailing_study_guide.dispatch.dispatch_mult,sailing_study_guide.dispatch.dispatch_pub_chan);
sailing_study_guide.dispatch.register = (function register(tag){return cljs.core.async.sub.call(null,sailing_study_guide.dispatch.dispatch_pub,tag,cljs.core.async.chan.call(null));
});
sailing_study_guide.dispatch.unregister = (function unregister(tag,chan){return cljs.core.async.unsub.call(null,sailing_study_guide.dispatch.dispatch_pub,tag,chan);
});
/**
* @param {...*} var_args
*/
sailing_study_guide.dispatch.dispatch_BANG_ = (function() { 
var dispatch_BANG___delegate = function (tags,payload){var dispatchfn = (function dispatchfn(tag){return cljs.core.async.put_BANG_.call(null,sailing_study_guide.dispatch.dispatch_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null));
});
if(cljs.core.sequential_QMARK_.call(null,tags))
{var seq__10873 = cljs.core.seq.call(null,tags);var chunk__10874 = null;var count__10875 = (0);var i__10876 = (0);while(true){
if((i__10876 < count__10875))
{var tag = cljs.core._nth.call(null,chunk__10874,i__10876);dispatchfn.call(null,tag);
{
var G__10877 = seq__10873;
var G__10878 = chunk__10874;
var G__10879 = count__10875;
var G__10880 = (i__10876 + (1));
seq__10873 = G__10877;
chunk__10874 = G__10878;
count__10875 = G__10879;
i__10876 = G__10880;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10873);if(temp__4126__auto__)
{var seq__10873__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10873__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__10873__$1);{
var G__10881 = cljs.core.chunk_rest.call(null,seq__10873__$1);
var G__10882 = c__4316__auto__;
var G__10883 = cljs.core.count.call(null,c__4316__auto__);
var G__10884 = (0);
seq__10873 = G__10881;
chunk__10874 = G__10882;
count__10875 = G__10883;
i__10876 = G__10884;
continue;
}
} else
{var tag = cljs.core.first.call(null,seq__10873__$1);dispatchfn.call(null,tag);
{
var G__10885 = cljs.core.next.call(null,seq__10873__$1);
var G__10886 = null;
var G__10887 = (0);
var G__10888 = (0);
seq__10873 = G__10885;
chunk__10874 = G__10886;
count__10875 = G__10887;
i__10876 = G__10888;
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
var payload = null;if (arguments.length > 1) {
  payload = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dispatch_BANG___delegate.call(this,tags,payload);};
dispatch_BANG_.cljs$lang$maxFixedArity = 1;
dispatch_BANG_.cljs$lang$applyTo = (function (arglist__10889){
var tags = cljs.core.first(arglist__10889);
var payload = cljs.core.rest(arglist__10889);
return dispatch_BANG___delegate(tags,payload);
});
dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = dispatch_BANG___delegate;
return dispatch_BANG_;
})()
;
sailing_study_guide.dispatch.retrieve_message = (function retrieve_message(message){if(cljs.core.truth_(message))
{return new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(message);
} else
{return null;
}
});
var c__6747__auto___10911 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6747__auto___10911){
return (function (){var f__6748__auto__ = (function (){var switch__6732__auto__ = ((function (c__6747__auto___10911){
return (function (state_10899){var state_val_10900 = (state_10899[(1)]);if((state_val_10900 === (4)))
{var inst_10892 = (state_10899[(2)]);var inst_10893 = cljs.core.pr_str.call(null,inst_10892);var inst_10894 = cljs.core.println.call(null,"Dispatched: ",inst_10893);var state_10899__$1 = (function (){var statearr_10901 = state_10899;(statearr_10901[(7)] = inst_10894);
return statearr_10901;
})();var statearr_10902_10912 = state_10899__$1;(statearr_10902_10912[(2)] = null);
(statearr_10902_10912[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10900 === (3)))
{var inst_10897 = (state_10899[(2)]);var state_10899__$1 = state_10899;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10899__$1,inst_10897);
} else
{if((state_val_10900 === (2)))
{var state_10899__$1 = state_10899;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10899__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else
{if((state_val_10900 === (1)))
{var state_10899__$1 = state_10899;var statearr_10903_10913 = state_10899__$1;(statearr_10903_10913[(2)] = null);
(statearr_10903_10913[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6747__auto___10911))
;return ((function (switch__6732__auto__,c__6747__auto___10911){
return (function() {
var state_machine__6733__auto__ = null;
var state_machine__6733__auto____0 = (function (){var statearr_10907 = [null,null,null,null,null,null,null,null];(statearr_10907[(0)] = state_machine__6733__auto__);
(statearr_10907[(1)] = (1));
return statearr_10907;
});
var state_machine__6733__auto____1 = (function (state_10899){while(true){
var ret_value__6734__auto__ = (function (){try{while(true){
var result__6735__auto__ = switch__6732__auto__.call(null,state_10899);if(cljs.core.keyword_identical_QMARK_.call(null,result__6735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6735__auto__;
}
break;
}
}catch (e10908){if((e10908 instanceof Object))
{var ex__6736__auto__ = e10908;var statearr_10909_10914 = state_10899;(statearr_10909_10914[(5)] = ex__6736__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10899);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10908;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10915 = state_10899;
state_10899 = G__10915;
continue;
}
} else
{return ret_value__6734__auto__;
}
break;
}
});
state_machine__6733__auto__ = function(state_10899){
switch(arguments.length){
case 0:
return state_machine__6733__auto____0.call(this);
case 1:
return state_machine__6733__auto____1.call(this,state_10899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6733__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6733__auto____0;
state_machine__6733__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6733__auto____1;
return state_machine__6733__auto__;
})()
;})(switch__6732__auto__,c__6747__auto___10911))
})();var state__6749__auto__ = (function (){var statearr_10910 = f__6748__auto__.call(null);(statearr_10910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6747__auto___10911);
return statearr_10910;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6749__auto__);
});})(c__6747__auto___10911))
);

//# sourceMappingURL=dispatch.js.map