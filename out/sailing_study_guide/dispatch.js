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
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__11145_SHARP_){return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__11145_SHARP_);
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
sailing_study_guide.dispatch.whenever = (function whenever(c,cb){var c__6831__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto__){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto__){
return (function (state_11205){var state_val_11206 = (state_11205[(1)]);if((state_val_11206 === (8)))
{var inst_11195 = (state_11205[(2)]);var inst_11187 = inst_11195;var state_11205__$1 = (function (){var statearr_11207 = state_11205;(statearr_11207[(7)] = inst_11187);
return statearr_11207;
})();var statearr_11208_11224 = state_11205__$1;(statearr_11208_11224[(2)] = null);
(statearr_11208_11224[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11206 === (7)))
{var inst_11201 = (state_11205[(2)]);var state_11205__$1 = state_11205;var statearr_11209_11225 = state_11205__$1;(statearr_11209_11225[(2)] = inst_11201);
(statearr_11209_11225[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11206 === (6)))
{var inst_11198 = cljs.core.println.call(null,"Leaving loop for ",c);var inst_11199 = cljs.core.async.close_BANG_.call(null,c);var state_11205__$1 = (function (){var statearr_11210 = state_11205;(statearr_11210[(8)] = inst_11198);
return statearr_11210;
})();var statearr_11211_11226 = state_11205__$1;(statearr_11211_11226[(2)] = inst_11199);
(statearr_11211_11226[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11206 === (5)))
{var inst_11187 = (state_11205[(7)]);var inst_11192 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_11187);var inst_11193 = cb.call(null,inst_11192);var state_11205__$1 = (function (){var statearr_11212 = state_11205;(statearr_11212[(9)] = inst_11193);
return statearr_11212;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11205__$1,(8),c);
} else
{if((state_val_11206 === (4)))
{var inst_11203 = (state_11205[(2)]);var state_11205__$1 = state_11205;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11205__$1,inst_11203);
} else
{if((state_val_11206 === (3)))
{var inst_11187 = (state_11205[(7)]);var inst_11189 = (inst_11187 == null);var inst_11190 = cljs.core.not.call(null,inst_11189);var state_11205__$1 = state_11205;if(inst_11190)
{var statearr_11213_11227 = state_11205__$1;(statearr_11213_11227[(1)] = (5));
} else
{var statearr_11214_11228 = state_11205__$1;(statearr_11214_11228[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11206 === (2)))
{var inst_11186 = (state_11205[(2)]);var inst_11187 = inst_11186;var state_11205__$1 = (function (){var statearr_11215 = state_11205;(statearr_11215[(7)] = inst_11187);
return statearr_11215;
})();var statearr_11216_11229 = state_11205__$1;(statearr_11216_11229[(2)] = null);
(statearr_11216_11229[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11206 === (1)))
{var state_11205__$1 = state_11205;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11205__$1,(2),c);
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
var state_machine__6817__auto____0 = (function (){var statearr_11220 = [null,null,null,null,null,null,null,null,null,null];(statearr_11220[(0)] = state_machine__6817__auto__);
(statearr_11220[(1)] = (1));
return statearr_11220;
});
var state_machine__6817__auto____1 = (function (state_11205){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_11205);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e11221){if((e11221 instanceof Object))
{var ex__6820__auto__ = e11221;var statearr_11222_11230 = state_11205;(statearr_11222_11230[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11205);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11221;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11231 = state_11205;
state_11205 = G__11231;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_11205){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_11205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto__))
})();var state__6833__auto__ = (function (){var statearr_11223 = f__6832__auto__.call(null);(statearr_11223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto__);
return statearr_11223;
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
{var seq__11236 = cljs.core.seq.call(null,tags);var chunk__11237 = null;var count__11238 = (0);var i__11239 = (0);while(true){
if((i__11239 < count__11238))
{var tag = cljs.core._nth.call(null,chunk__11237,i__11239);dispatchfn.call(null,tag);
{
var G__11240 = seq__11236;
var G__11241 = chunk__11237;
var G__11242 = count__11238;
var G__11243 = (i__11239 + (1));
seq__11236 = G__11240;
chunk__11237 = G__11241;
count__11238 = G__11242;
i__11239 = G__11243;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11236);if(temp__4126__auto__)
{var seq__11236__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11236__$1))
{var c__4395__auto__ = cljs.core.chunk_first.call(null,seq__11236__$1);{
var G__11244 = cljs.core.chunk_rest.call(null,seq__11236__$1);
var G__11245 = c__4395__auto__;
var G__11246 = cljs.core.count.call(null,c__4395__auto__);
var G__11247 = (0);
seq__11236 = G__11244;
chunk__11237 = G__11245;
count__11238 = G__11246;
i__11239 = G__11247;
continue;
}
} else
{var tag = cljs.core.first.call(null,seq__11236__$1);dispatchfn.call(null,tag);
{
var G__11248 = cljs.core.next.call(null,seq__11236__$1);
var G__11249 = null;
var G__11250 = (0);
var G__11251 = (0);
seq__11236 = G__11248;
chunk__11237 = G__11249;
count__11238 = G__11250;
i__11239 = G__11251;
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
dispatch_BANG_.cljs$lang$applyTo = (function (arglist__11252){
var tags = cljs.core.first(arglist__11252);
var message = cljs.core.rest(arglist__11252);
return dispatch_BANG___delegate(tags,message);
});
dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = dispatch_BANG___delegate;
return dispatch_BANG_;
})()
;
var c__6831__auto___11274 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___11274){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___11274){
return (function (state_11262){var state_val_11263 = (state_11262[(1)]);if((state_val_11263 === (4)))
{var inst_11255 = (state_11262[(2)]);var inst_11256 = cljs.core.pr_str.call(null,inst_11255);var inst_11257 = cljs.core.println.call(null,"Dispatched: ",inst_11256);var state_11262__$1 = (function (){var statearr_11264 = state_11262;(statearr_11264[(7)] = inst_11257);
return statearr_11264;
})();var statearr_11265_11275 = state_11262__$1;(statearr_11265_11275[(2)] = null);
(statearr_11265_11275[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11263 === (3)))
{var inst_11260 = (state_11262[(2)]);var state_11262__$1 = state_11262;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11262__$1,inst_11260);
} else
{if((state_val_11263 === (2)))
{var state_11262__$1 = state_11262;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11262__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else
{if((state_val_11263 === (1)))
{var state_11262__$1 = state_11262;var statearr_11266_11276 = state_11262__$1;(statearr_11266_11276[(2)] = null);
(statearr_11266_11276[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6831__auto___11274))
;return ((function (switch__6816__auto__,c__6831__auto___11274){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_11270 = [null,null,null,null,null,null,null,null];(statearr_11270[(0)] = state_machine__6817__auto__);
(statearr_11270[(1)] = (1));
return statearr_11270;
});
var state_machine__6817__auto____1 = (function (state_11262){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_11262);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e11271){if((e11271 instanceof Object))
{var ex__6820__auto__ = e11271;var statearr_11272_11277 = state_11262;(statearr_11272_11277[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11262);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11271;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11278 = state_11262;
state_11262 = G__11278;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_11262){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_11262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___11274))
})();var state__6833__auto__ = (function (){var statearr_11273 = f__6832__auto__.call(null);(statearr_11273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___11274);
return statearr_11273;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___11274))
);

//# sourceMappingURL=dispatch.js.map