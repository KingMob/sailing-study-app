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
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__13291_SHARP_){return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__13291_SHARP_);
}));
cljs.core.async.tap.call(null,sailing_study_guide.dispatch.dispatch_mult,sailing_study_guide.dispatch.dispatch_logger_chan);
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
sailing_study_guide.dispatch.whenever = (function whenever(tag,cb){var c = sailing_study_guide.dispatch.register.call(null,tag);var c__6831__auto___13362 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___13362,c){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___13362,c){
return (function (state_13344){var state_val_13345 = (state_13344[(1)]);if((state_val_13345 === (8)))
{var inst_13335 = (state_13344[(2)]);var inst_13329 = inst_13335;var state_13344__$1 = (function (){var statearr_13346 = state_13344;(statearr_13346[(7)] = inst_13329);
return statearr_13346;
})();var statearr_13347_13363 = state_13344__$1;(statearr_13347_13363[(2)] = null);
(statearr_13347_13363[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13345 === (7)))
{var inst_13340 = (state_13344[(2)]);var state_13344__$1 = state_13344;var statearr_13348_13364 = state_13344__$1;(statearr_13348_13364[(2)] = inst_13340);
(statearr_13348_13364[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13345 === (6)))
{var inst_13338 = cljs.core.async.close_BANG_.call(null,c);var state_13344__$1 = state_13344;var statearr_13349_13365 = state_13344__$1;(statearr_13349_13365[(2)] = inst_13338);
(statearr_13349_13365[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13345 === (5)))
{var inst_13329 = (state_13344[(7)]);var inst_13332 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_13329);var inst_13333 = cb.call(null,inst_13332);var state_13344__$1 = (function (){var statearr_13350 = state_13344;(statearr_13350[(8)] = inst_13333);
return statearr_13350;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13344__$1,(8),c);
} else
{if((state_val_13345 === (4)))
{var inst_13342 = (state_13344[(2)]);var state_13344__$1 = state_13344;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13344__$1,inst_13342);
} else
{if((state_val_13345 === (3)))
{var inst_13329 = (state_13344[(7)]);var state_13344__$1 = state_13344;if(cljs.core.truth_(inst_13329))
{var statearr_13351_13366 = state_13344__$1;(statearr_13351_13366[(1)] = (5));
} else
{var statearr_13352_13367 = state_13344__$1;(statearr_13352_13367[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13345 === (2)))
{var inst_13328 = (state_13344[(2)]);var inst_13329 = inst_13328;var state_13344__$1 = (function (){var statearr_13353 = state_13344;(statearr_13353[(7)] = inst_13329);
return statearr_13353;
})();var statearr_13354_13368 = state_13344__$1;(statearr_13354_13368[(2)] = null);
(statearr_13354_13368[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13345 === (1)))
{var state_13344__$1 = state_13344;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13344__$1,(2),c);
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
});})(c__6831__auto___13362,c))
;return ((function (switch__6816__auto__,c__6831__auto___13362,c){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_13358 = [null,null,null,null,null,null,null,null,null];(statearr_13358[(0)] = state_machine__6817__auto__);
(statearr_13358[(1)] = (1));
return statearr_13358;
});
var state_machine__6817__auto____1 = (function (state_13344){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_13344);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e13359){if((e13359 instanceof Object))
{var ex__6820__auto__ = e13359;var statearr_13360_13369 = state_13344;(statearr_13360_13369[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13344);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13359;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13370 = state_13344;
state_13344 = G__13370;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_13344){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_13344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___13362,c))
})();var state__6833__auto__ = (function (){var statearr_13361 = f__6832__auto__.call(null);(statearr_13361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___13362);
return statearr_13361;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___13362,c))
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
{var seq__13375 = cljs.core.seq.call(null,tags);var chunk__13376 = null;var count__13377 = (0);var i__13378 = (0);while(true){
if((i__13378 < count__13377))
{var tag = cljs.core._nth.call(null,chunk__13376,i__13378);dispatchfn.call(null,tag);
{
var G__13379 = seq__13375;
var G__13380 = chunk__13376;
var G__13381 = count__13377;
var G__13382 = (i__13378 + (1));
seq__13375 = G__13379;
chunk__13376 = G__13380;
count__13377 = G__13381;
i__13378 = G__13382;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13375);if(temp__4126__auto__)
{var seq__13375__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13375__$1))
{var c__4395__auto__ = cljs.core.chunk_first.call(null,seq__13375__$1);{
var G__13383 = cljs.core.chunk_rest.call(null,seq__13375__$1);
var G__13384 = c__4395__auto__;
var G__13385 = cljs.core.count.call(null,c__4395__auto__);
var G__13386 = (0);
seq__13375 = G__13383;
chunk__13376 = G__13384;
count__13377 = G__13385;
i__13378 = G__13386;
continue;
}
} else
{var tag = cljs.core.first.call(null,seq__13375__$1);dispatchfn.call(null,tag);
{
var G__13387 = cljs.core.next.call(null,seq__13375__$1);
var G__13388 = null;
var G__13389 = (0);
var G__13390 = (0);
seq__13375 = G__13387;
chunk__13376 = G__13388;
count__13377 = G__13389;
i__13378 = G__13390;
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
dispatch_BANG_.cljs$lang$applyTo = (function (arglist__13391){
var tags = cljs.core.first(arglist__13391);
var message = cljs.core.rest(arglist__13391);
return dispatch_BANG___delegate(tags,message);
});
dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = dispatch_BANG___delegate;
return dispatch_BANG_;
})()
;
var c__6831__auto___13413 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___13413){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___13413){
return (function (state_13401){var state_val_13402 = (state_13401[(1)]);if((state_val_13402 === (4)))
{var inst_13394 = (state_13401[(2)]);var inst_13395 = cljs.core.pr_str.call(null,inst_13394);var inst_13396 = cljs.core.println.call(null,"Logged: ",inst_13395);var state_13401__$1 = (function (){var statearr_13403 = state_13401;(statearr_13403[(7)] = inst_13396);
return statearr_13403;
})();var statearr_13404_13414 = state_13401__$1;(statearr_13404_13414[(2)] = null);
(statearr_13404_13414[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13402 === (3)))
{var inst_13399 = (state_13401[(2)]);var state_13401__$1 = state_13401;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13401__$1,inst_13399);
} else
{if((state_val_13402 === (2)))
{var state_13401__$1 = state_13401;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13401__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else
{if((state_val_13402 === (1)))
{var state_13401__$1 = state_13401;var statearr_13405_13415 = state_13401__$1;(statearr_13405_13415[(2)] = null);
(statearr_13405_13415[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6831__auto___13413))
;return ((function (switch__6816__auto__,c__6831__auto___13413){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_13409 = [null,null,null,null,null,null,null,null];(statearr_13409[(0)] = state_machine__6817__auto__);
(statearr_13409[(1)] = (1));
return statearr_13409;
});
var state_machine__6817__auto____1 = (function (state_13401){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_13401);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e13410){if((e13410 instanceof Object))
{var ex__6820__auto__ = e13410;var statearr_13411_13416 = state_13401;(statearr_13411_13416[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13401);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13410;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13417 = state_13401;
state_13401 = G__13417;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_13401){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_13401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___13413))
})();var state__6833__auto__ = (function (){var statearr_13412 = f__6832__auto__.call(null);(statearr_13412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___13413);
return statearr_13412;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___13413))
);

//# sourceMappingURL=dispatch.js.map