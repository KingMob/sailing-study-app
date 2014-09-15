// Compiled by ClojureScript 0.0-2322
goog.provide('clairvoyant.core');
goog.require('cljs.core');
clairvoyant.core.ITraceEnter = (function (){var obj10339 = {};return obj10339;
})();
clairvoyant.core._trace_enter = (function _trace_enter(this$,trace_data){if((function (){var and__3548__auto__ = this$;if(and__3548__auto__)
{return this$.clairvoyant$core$ITraceEnter$_trace_enter$arity$2;
} else
{return and__3548__auto__;
}
})())
{return this$.clairvoyant$core$ITraceEnter$_trace_enter$arity$2(this$,trace_data);
} else
{var x__4187__auto__ = (((this$ == null))?null:this$);return (function (){var or__3560__auto__ = (clairvoyant.core._trace_enter[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (clairvoyant.core._trace_enter["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITraceEnter.-trace-enter",this$);
}
}
})().call(null,this$,trace_data);
}
});
clairvoyant.core.ITraceError = (function (){var obj10341 = {};return obj10341;
})();
clairvoyant.core._trace_error = (function _trace_error(this$,trace_data){if((function (){var and__3548__auto__ = this$;if(and__3548__auto__)
{return this$.clairvoyant$core$ITraceError$_trace_error$arity$2;
} else
{return and__3548__auto__;
}
})())
{return this$.clairvoyant$core$ITraceError$_trace_error$arity$2(this$,trace_data);
} else
{var x__4187__auto__ = (((this$ == null))?null:this$);return (function (){var or__3560__auto__ = (clairvoyant.core._trace_error[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (clairvoyant.core._trace_error["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITraceError.-trace-error",this$);
}
}
})().call(null,this$,trace_data);
}
});
clairvoyant.core.ITraceExit = (function (){var obj10343 = {};return obj10343;
})();
clairvoyant.core._trace_exit = (function _trace_exit(this$,trace_data){if((function (){var and__3548__auto__ = this$;if(and__3548__auto__)
{return this$.clairvoyant$core$ITraceExit$_trace_exit$arity$2;
} else
{return and__3548__auto__;
}
})())
{return this$.clairvoyant$core$ITraceExit$_trace_exit$arity$2(this$,trace_data);
} else
{var x__4187__auto__ = (((this$ == null))?null:this$);return (function (){var or__3560__auto__ = (clairvoyant.core._trace_exit[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (clairvoyant.core._trace_exit["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITraceExit.-trace-exit",this$);
}
}
})().call(null,this$,trace_data);
}
});
/**
* Call the -trace-enter method for a given tracer with trace-data.
* tracer must satisfy ITraceEnter.
*/
clairvoyant.core.trace_enter = (function trace_enter(tracer,trace_data){return clairvoyant.core._trace_enter.call(null,tracer,trace_data);
});
/**
* Call the -trace-error method for a given tracer with trace-data.
* tracer must satisfy ITraceError.
*/
clairvoyant.core.trace_error = (function trace_error(tracer,trace_data){return clairvoyant.core._trace_error.call(null,tracer,trace_data);
});
/**
* Call the -trace-exit method for a given tracer with trace-data.
* tracer must satisfy ITraceExit.
*/
clairvoyant.core.trace_exit = (function trace_exit(tracer,trace_data){return clairvoyant.core._trace_exit.call(null,tracer,trace_data);
});
clairvoyant.core.default_tracer = (function (){var log_binding = (function log_binding(form,init){return console.groupCollapsed("%c%s %c%s","font-weight:bold;",cljs.core.pr_str.call(null,form),"font-weight:normal;",cljs.core.pr_str.call(null,init));
});
var has_bindings_QMARK_ = (function has_bindings_QMARK_(op){cljs.core.PersistentHashSet.fromArray([new cljs.core.Symbol(null,"defmethod","defmethod",-579171823,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"extend-protocol","extend-protocol",306378578,null),new cljs.core.Symbol(null,"extend-type","extend-type",1123355921,null),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","defmethod","clojure.core/defmethod",-346593352,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,26),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/matthew/Documents/Code/sailing-study-guide/out/clairvoyant/core.cljs"))))),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","extend-type","clojure.core/extend-type",1892724878,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,28),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,60),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,60),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/matthew/Documents/Code/sailing-study-guide/out/clairvoyant/core.cljs"))))),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","defn","clojure.core/defn",-1504648747,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,21),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/matthew/Documents/Code/sailing-study-guide/out/clairvoyant/core.cljs"))))),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","extend-protocol","clojure.core/extend-protocol",-1004430087,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,32),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,62),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,62),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/matthew/Documents/Code/sailing-study-guide/out/clairvoyant/core.cljs"))))),new cljs.core.Symbol(null,"reify","reify",1885539699,null),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","reify","clojure.core/reify",562538906,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,22),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,56),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,56),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/matthew/Documents/Code/sailing-study-guide/out/clairvoyant/core.cljs"))))),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,20),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,58),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,58),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/matthew/Documents/Code/sailing-study-guide/out/clairvoyant/core.cljs"))))),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/matthew/Documents/Code/sailing-study-guide/out/clairvoyant/core.cljs")))))], true);
return op;
});
if(typeof clairvoyant.core.t10344 !== 'undefined')
{} else
{
/**
* @constructor
*/
clairvoyant.core.t10344 = (function (has_bindings_QMARK_,log_binding,meta10345){
this.has_bindings_QMARK_ = has_bindings_QMARK_;
this.log_binding = log_binding;
this.meta10345 = meta10345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clairvoyant.core.t10344.cljs$lang$type = true;
clairvoyant.core.t10344.cljs$lang$ctorStr = "clairvoyant.core/t10344";
clairvoyant.core.t10344.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"clairvoyant.core/t10344");
});
clairvoyant.core.t10344.prototype.clairvoyant$core$ITraceError$ = true;
clairvoyant.core.t10344.prototype.clairvoyant$core$ITraceError$_trace_error$arity$2 = (function (_,p__10347){var self__ = this;
var map__10348 = p__10347;var map__10348__$1 = ((cljs.core.seq_QMARK_.call(null,map__10348))?cljs.core.apply.call(null,cljs.core.hash_map,map__10348):map__10348);var error = cljs.core.get.call(null,map__10348__$1,new cljs.core.Keyword(null,"error","error",-978969032));var form = cljs.core.get.call(null,map__10348__$1,new cljs.core.Keyword(null,"form","form",-1624062471));var op = cljs.core.get.call(null,map__10348__$1,new cljs.core.Keyword(null,"op","op",-1882987955));var ___$1 = this;if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op)))
{return console.error(error.stack);
} else
{if(cljs.core.truth_(self__.has_bindings_QMARK_.call(null,op)))
{console.groupEnd();
console.error(error.stack);
return console.groupEnd();
} else
{return null;
}
}
});
clairvoyant.core.t10344.prototype.clairvoyant$core$ITraceExit$ = true;
clairvoyant.core.t10344.prototype.clairvoyant$core$ITraceExit$_trace_exit$arity$2 = (function (_,p__10349){var self__ = this;
var map__10350 = p__10349;var map__10350__$1 = ((cljs.core.seq_QMARK_.call(null,map__10350))?cljs.core.apply.call(null,cljs.core.hash_map,map__10350):map__10350);var exit = cljs.core.get.call(null,map__10350__$1,new cljs.core.Keyword(null,"exit","exit",351849638));var op = cljs.core.get.call(null,map__10350__$1,new cljs.core.Keyword(null,"op","op",-1882987955));var ___$1 = this;if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op)))
{console.info(exit);
return console.groupEnd();
} else
{if(cljs.core.truth_(self__.has_bindings_QMARK_.call(null,op)))
{console.groupEnd();
console.info(exit);
return console.groupEnd();
} else
{return null;
}
}
});
clairvoyant.core.t10344.prototype.clairvoyant$core$ITraceEnter$ = true;
clairvoyant.core.t10344.prototype.clairvoyant$core$ITraceEnter$_trace_enter$arity$2 = (function (_,p__10351){var self__ = this;
var map__10352 = p__10351;var map__10352__$1 = ((cljs.core.seq_QMARK_.call(null,map__10352))?cljs.core.apply.call(null,cljs.core.hash_map,map__10352):map__10352);var form = cljs.core.get.call(null,map__10352__$1,new cljs.core.Keyword(null,"form","form",-1624062471));var args = cljs.core.get.call(null,map__10352__$1,new cljs.core.Keyword(null,"args","args",1315556576));var dispatch_val = cljs.core.get.call(null,map__10352__$1,new cljs.core.Keyword(null,"dispatch-val","dispatch-val",-1571470527));var protocol = cljs.core.get.call(null,map__10352__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));var init = cljs.core.get.call(null,map__10352__$1,new cljs.core.Keyword(null,"init","init",-1875481434));var ns = cljs.core.get.call(null,map__10352__$1,new cljs.core.Keyword(null,"ns","ns",441598760));var name = cljs.core.get.call(null,map__10352__$1,new cljs.core.Keyword(null,"name","name",1843675177));var arglist = cljs.core.get.call(null,map__10352__$1,new cljs.core.Keyword(null,"arglist","arglist",-1808272150));var op = cljs.core.get.call(null,map__10352__$1,new cljs.core.Keyword(null,"op","op",-1882987955));var anonymous_QMARK_ = cljs.core.get.call(null,map__10352__$1,new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995));var ___$1 = this;if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([new cljs.core.Symbol(null,"defmethod","defmethod",-579171823,null),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","defn","clojure.core/defn",-1504648747,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,14),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/matthew/Documents/Code/sailing-study-guide/out/clairvoyant/core.cljs"))))),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,17),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,79),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,14),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,79),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/matthew/Documents/Code/sailing-study-guide/out/clairvoyant/core.cljs"))))),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","extend-protocol","clojure.core/extend-protocol",-1004430087,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,30),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,90),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,14),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,90),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/matthew/Documents/Code/sailing-study-guide/out/clairvoyant/core.cljs"))))),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","defmethod","clojure.core/defmethod",-346593352,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,24),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,84),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,14),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,84),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/matthew/Documents/Code/sailing-study-guide/out/clairvoyant/core.cljs"))))),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"extend-protocol","extend-protocol",306378578,null),new cljs.core.Symbol(null,"extend-type","extend-type",1123355921,null),new cljs.core.Symbol(null,"reify","reify",1885539699,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","extend-type","clojure.core/extend-type",1892724878,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,26),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,88),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,14),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,88),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/matthew/Documents/Code/sailing-study-guide/out/clairvoyant/core.cljs"))))),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","reify","clojure.core/reify",562538906,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,20),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,86),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,14),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,86),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/matthew/Documents/Code/sailing-study-guide/out/clairvoyant/core.cljs")))))], true).call(null,op)))
{var title = (cljs.core.truth_(protocol)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arglist)):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(dispatch_val)?(" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,dispatch_val))):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arglist)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(anonymous_QMARK_)?" (anonymous)":null))));var arglist__$1 = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);console.groupCollapsed(title);
return console.groupCollapsed("bindings");
} else
{if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,23),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,102),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,102),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/matthew/Documents/Code/sailing-study-guide/out/clairvoyant/core.cljs"))))),new cljs.core.Symbol(null,"let","let",358118826,null)], true).call(null,op)))
{var title = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op));console.groupCollapsed(title);
return console.groupCollapsed("bindings");
} else
{if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op)))
{return self__.log_binding.call(null,form,init);
} else
{return null;
}
}
}
});
clairvoyant.core.t10344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10346){var self__ = this;
var _10346__$1 = this;return self__.meta10345;
});
clairvoyant.core.t10344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10346,meta10345__$1){var self__ = this;
var _10346__$1 = this;return (new clairvoyant.core.t10344(self__.has_bindings_QMARK_,self__.log_binding,meta10345__$1));
});
clairvoyant.core.__GT_t10344 = (function __GT_t10344(has_bindings_QMARK___$1,log_binding__$1,meta10345){return (new clairvoyant.core.t10344(has_bindings_QMARK___$1,log_binding__$1,meta10345));
});
}
return (new clairvoyant.core.t10344(has_bindings_QMARK_,log_binding,null));
})();

//# sourceMappingURL=core.js.map