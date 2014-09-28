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
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_pub_chan,(function (p1__13029_SHARP_){return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__13029_SHARP_);
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
sailing_study_guide.dispatch.whenever = (function whenever(tag,cb){var c = sailing_study_guide.dispatch.register.call(null,tag);var c__6831__auto___13104 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___13104,c){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___13104,c){
return (function (state_13086){var state_val_13087 = (state_13086[(1)]);if((state_val_13087 === (8)))
{var inst_13077 = (state_13086[(2)]);var inst_13069 = inst_13077;var state_13086__$1 = (function (){var statearr_13088 = state_13086;(statearr_13088[(7)] = inst_13069);
return statearr_13088;
})();var statearr_13089_13105 = state_13086__$1;(statearr_13089_13105[(2)] = null);
(statearr_13089_13105[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13087 === (7)))
{var inst_13082 = (state_13086[(2)]);var state_13086__$1 = state_13086;var statearr_13090_13106 = state_13086__$1;(statearr_13090_13106[(2)] = inst_13082);
(statearr_13090_13106[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13087 === (6)))
{var inst_13080 = cljs.core.async.close_BANG_.call(null,c);var state_13086__$1 = state_13086;var statearr_13091_13107 = state_13086__$1;(statearr_13091_13107[(2)] = inst_13080);
(statearr_13091_13107[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13087 === (5)))
{var inst_13069 = (state_13086[(7)]);var inst_13074 = sailing_study_guide.dispatch.retrieve_message.call(null,inst_13069);var inst_13075 = cb.call(null,inst_13074);var state_13086__$1 = (function (){var statearr_13092 = state_13086;(statearr_13092[(8)] = inst_13075);
return statearr_13092;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13086__$1,(8),c);
} else
{if((state_val_13087 === (4)))
{var inst_13084 = (state_13086[(2)]);var state_13086__$1 = state_13086;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13086__$1,inst_13084);
} else
{if((state_val_13087 === (3)))
{var inst_13069 = (state_13086[(7)]);var inst_13071 = (inst_13069 == null);var inst_13072 = cljs.core.not.call(null,inst_13071);var state_13086__$1 = state_13086;if(inst_13072)
{var statearr_13093_13108 = state_13086__$1;(statearr_13093_13108[(1)] = (5));
} else
{var statearr_13094_13109 = state_13086__$1;(statearr_13094_13109[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13087 === (2)))
{var inst_13068 = (state_13086[(2)]);var inst_13069 = inst_13068;var state_13086__$1 = (function (){var statearr_13095 = state_13086;(statearr_13095[(7)] = inst_13069);
return statearr_13095;
})();var statearr_13096_13110 = state_13086__$1;(statearr_13096_13110[(2)] = null);
(statearr_13096_13110[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13087 === (1)))
{var state_13086__$1 = state_13086;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13086__$1,(2),c);
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
});})(c__6831__auto___13104,c))
;return ((function (switch__6816__auto__,c__6831__auto___13104,c){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_13100 = [null,null,null,null,null,null,null,null,null];(statearr_13100[(0)] = state_machine__6817__auto__);
(statearr_13100[(1)] = (1));
return statearr_13100;
});
var state_machine__6817__auto____1 = (function (state_13086){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_13086);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e13101){if((e13101 instanceof Object))
{var ex__6820__auto__ = e13101;var statearr_13102_13111 = state_13086;(statearr_13102_13111[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13086);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13101;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13112 = state_13086;
state_13086 = G__13112;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_13086){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_13086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___13104,c))
})();var state__6833__auto__ = (function (){var statearr_13103 = f__6832__auto__.call(null);(statearr_13103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___13104);
return statearr_13103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___13104,c))
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
{var seq__13117 = cljs.core.seq.call(null,tags);var chunk__13118 = null;var count__13119 = (0);var i__13120 = (0);while(true){
if((i__13120 < count__13119))
{var tag = cljs.core._nth.call(null,chunk__13118,i__13120);dispatchfn.call(null,tag);
{
var G__13121 = seq__13117;
var G__13122 = chunk__13118;
var G__13123 = count__13119;
var G__13124 = (i__13120 + (1));
seq__13117 = G__13121;
chunk__13118 = G__13122;
count__13119 = G__13123;
i__13120 = G__13124;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13117);if(temp__4126__auto__)
{var seq__13117__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13117__$1))
{var c__4395__auto__ = cljs.core.chunk_first.call(null,seq__13117__$1);{
var G__13125 = cljs.core.chunk_rest.call(null,seq__13117__$1);
var G__13126 = c__4395__auto__;
var G__13127 = cljs.core.count.call(null,c__4395__auto__);
var G__13128 = (0);
seq__13117 = G__13125;
chunk__13118 = G__13126;
count__13119 = G__13127;
i__13120 = G__13128;
continue;
}
} else
{var tag = cljs.core.first.call(null,seq__13117__$1);dispatchfn.call(null,tag);
{
var G__13129 = cljs.core.next.call(null,seq__13117__$1);
var G__13130 = null;
var G__13131 = (0);
var G__13132 = (0);
seq__13117 = G__13129;
chunk__13118 = G__13130;
count__13119 = G__13131;
i__13120 = G__13132;
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
dispatch_BANG_.cljs$lang$applyTo = (function (arglist__13133){
var tags = cljs.core.first(arglist__13133);
var message = cljs.core.rest(arglist__13133);
return dispatch_BANG___delegate(tags,message);
});
dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = dispatch_BANG___delegate;
return dispatch_BANG_;
})()
;
var c__6831__auto___13155 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___13155){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___13155){
return (function (state_13143){var state_val_13144 = (state_13143[(1)]);if((state_val_13144 === (4)))
{var inst_13136 = (state_13143[(2)]);var inst_13137 = cljs.core.pr_str.call(null,inst_13136);var inst_13138 = cljs.core.println.call(null,"Dispatched: ",inst_13137);var state_13143__$1 = (function (){var statearr_13145 = state_13143;(statearr_13145[(7)] = inst_13138);
return statearr_13145;
})();var statearr_13146_13156 = state_13143__$1;(statearr_13146_13156[(2)] = null);
(statearr_13146_13156[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13144 === (3)))
{var inst_13141 = (state_13143[(2)]);var state_13143__$1 = state_13143;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13143__$1,inst_13141);
} else
{if((state_val_13144 === (2)))
{var state_13143__$1 = state_13143;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13143__$1,(4),sailing_study_guide.dispatch.dispatch_logger_chan);
} else
{if((state_val_13144 === (1)))
{var state_13143__$1 = state_13143;var statearr_13147_13157 = state_13143__$1;(statearr_13147_13157[(2)] = null);
(statearr_13147_13157[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6831__auto___13155))
;return ((function (switch__6816__auto__,c__6831__auto___13155){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_13151 = [null,null,null,null,null,null,null,null];(statearr_13151[(0)] = state_machine__6817__auto__);
(statearr_13151[(1)] = (1));
return statearr_13151;
});
var state_machine__6817__auto____1 = (function (state_13143){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_13143);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e13152){if((e13152 instanceof Object))
{var ex__6820__auto__ = e13152;var statearr_13153_13158 = state_13143;(statearr_13153_13158[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13143);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13152;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13159 = state_13143;
state_13143 = G__13159;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_13143){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_13143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___13155))
})();var state__6833__auto__ = (function (){var statearr_13154 = f__6832__auto__.call(null);(statearr_13154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___13155);
return statearr_13154;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___13155))
);

//# sourceMappingURL=dispatch.js.map