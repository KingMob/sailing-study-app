// Compiled by ClojureScript 0.0-2322
goog.provide('sailing_study_guide.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clairvoyant.core');
goog.require('clairvoyant.core');
goog.require('cljs.core.async');
sailing_study_guide.dispatch.pubfn = (function pubfn(a_11529){var trace_data__4546__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"sailing-study-guide.dispatch","sailing-study-guide.dispatch",876618739,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"pubfn","pubfn",-1859259198,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__11528","p__11528",-1011988621,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"pubfn","pubfn",-1859259198,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"arglist","arglist",-167740623,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),new cljs.core.Symbol(null,"arglist","arglist",-167740623,null)),new cljs.core.Symbol(null,"tag","tag",350170304,null))], null);if((function (){var G__11547 = clairvoyant.core.default_tracer;if(G__11547)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11547.clairvoyant$core$ITraceEnter$;
}
})()))
{return true;
} else
{if((!G__11547.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__11547);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__11547);
}
})())
{clairvoyant.core.trace_enter.call(null,clairvoyant.core.default_tracer,trace_data__4546__auto__);
} else
{}
var f__4547__auto__ = ((function (trace_data__4546__auto__){
return (function (){var return__4548__auto__ = ((function (trace_data__4546__auto__){
return (function (a_11529__$1){var p__11528 = (function (){var trace_data__4546__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_11529__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p__11528","p__11528",-1011988621,null)], null);if((function (){var G__11548 = clairvoyant.core.default_tracer;if(G__11548)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11548.clairvoyant$core$ITraceEnter$;
}
})()))
{return true;
} else
{if((!G__11548.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__11548);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__11548);
}
})())
{clairvoyant.core.trace_enter.call(null,clairvoyant.core.default_tracer,trace_data__4546__auto____$1);
} else
{}
var f__4547__auto__ = ((function (trace_data__4546__auto____$1,trace_data__4546__auto__){
return (function (){var return__4548__auto__ = a_11529__$1;if((function (){var G__11549 = clairvoyant.core.default_tracer;if(G__11549)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11549.clairvoyant$core$ITraceExit$;
}
})()))
{return true;
} else
{if((!G__11549.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__11549);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__11549);
}
})())
{clairvoyant.core.trace_exit.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__4546__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__4548__auto__));
} else
{}
return return__4548__auto__;
});})(trace_data__4546__auto____$1,trace_data__4546__auto__))
;if((function (){var G__11550 = clairvoyant.core.default_tracer;if(G__11550)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11550.clairvoyant$core$ITraceError$;
}
})()))
{return true;
} else
{if((!G__11550.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__11550);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__11550);
}
})())
{try{return f__4547__auto__.call(null);
}catch (e11551){if((e11551 instanceof Object))
{var e__4549__auto__ = e11551;clairvoyant.core.trace_error.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__4546__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__4549__auto__));
throw e__4549__auto__;
} else
{throw e11551;

}
}} else
{return f__4547__auto__.call(null);
}
})();return ((function (p__11528,trace_data__4546__auto__){
return (function (){var trace_data__4546__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"arglist","arglist",-167740623,null)], null),new cljs.core.Symbol(null,"p__11528","p__11528",-1011988621,null)], null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),new cljs.core.Symbol(null,"arglist","arglist",-167740623,null)),new cljs.core.Symbol(null,"tag","tag",350170304,null))], null);if((function (){var G__11552 = clairvoyant.core.default_tracer;if(G__11552)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11552.clairvoyant$core$ITraceEnter$;
}
})()))
{return true;
} else
{if((!G__11552.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__11552);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__11552);
}
})())
{clairvoyant.core.trace_enter.call(null,clairvoyant.core.default_tracer,trace_data__4546__auto____$1);
} else
{}
var f__4547__auto__ = ((function (trace_data__4546__auto____$1,p__11528,trace_data__4546__auto__){
return (function (){var return__4548__auto__ = (function (){var vec__11553 = (function (){var trace_data__4546__auto____$2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Symbol(null,"p__11528","p__11528",-1011988621,null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"arglist","arglist",-167740623,null)], null)], null);if((function (){var G__11554 = clairvoyant.core.default_tracer;if(G__11554)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11554.clairvoyant$core$ITraceEnter$;
}
})()))
{return true;
} else
{if((!G__11554.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__11554);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__11554);
}
})())
{clairvoyant.core.trace_enter.call(null,clairvoyant.core.default_tracer,trace_data__4546__auto____$2);
} else
{}
var f__4547__auto__ = ((function (trace_data__4546__auto____$2,trace_data__4546__auto____$1,p__11528,trace_data__4546__auto__){
return (function (){var return__4548__auto__ = p__11528;if((function (){var G__11555 = clairvoyant.core.default_tracer;if(G__11555)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11555.clairvoyant$core$ITraceExit$;
}
})()))
{return true;
} else
{if((!G__11555.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__11555);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__11555);
}
})())
{clairvoyant.core.trace_exit.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__4546__auto____$2,new cljs.core.Keyword(null,"exit","exit",351849638),return__4548__auto__));
} else
{}
return return__4548__auto__;
});})(trace_data__4546__auto____$2,trace_data__4546__auto____$1,p__11528,trace_data__4546__auto__))
;if((function (){var G__11556 = clairvoyant.core.default_tracer;if(G__11556)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11556.clairvoyant$core$ITraceError$;
}
})()))
{return true;
} else
{if((!G__11556.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__11556);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__11556);
}
})())
{try{return f__4547__auto__.call(null);
}catch (e11557){if((e11557 instanceof Object))
{var e__4549__auto__ = e11557;clairvoyant.core.trace_error.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__4546__auto____$2,new cljs.core.Keyword(null,"error","error",-978969032),e__4549__auto__));
throw e__4549__auto__;
} else
{throw e11557;

}
}} else
{return f__4547__auto__.call(null);
}
})();var tag = cljs.core.nth.call(null,vec__11553,(0),null);var args = cljs.core.nthnext.call(null,vec__11553,(1));var arglist = vec__11553;cljs.core.println.call(null,arglist);
return tag;
})();if((function (){var G__11558 = clairvoyant.core.default_tracer;if(G__11558)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11558.clairvoyant$core$ITraceExit$;
}
})()))
{return true;
} else
{if((!G__11558.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__11558);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__11558);
}
})())
{clairvoyant.core.trace_exit.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__4546__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__4548__auto__));
} else
{}
return return__4548__auto__;
});})(trace_data__4546__auto____$1,p__11528,trace_data__4546__auto__))
;if((function (){var G__11559 = clairvoyant.core.default_tracer;if(G__11559)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11559.clairvoyant$core$ITraceError$;
}
})()))
{return true;
} else
{if((!G__11559.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__11559);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__11559);
}
})())
{try{return f__4547__auto__.call(null);
}catch (e11560){if((e11560 instanceof Object))
{var e__4549__auto__ = e11560;clairvoyant.core.trace_error.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__4546__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__4549__auto__));
throw e__4549__auto__;
} else
{throw e11560;

}
}} else
{return f__4547__auto__.call(null);
}
});})(p__11528,trace_data__4546__auto__))
.call(null);
});})(trace_data__4546__auto__))
.call(null,a_11529);if((function (){var G__11561 = clairvoyant.core.default_tracer;if(G__11561)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11561.clairvoyant$core$ITraceExit$;
}
})()))
{return true;
} else
{if((!G__11561.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__11561);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__11561);
}
})())
{clairvoyant.core.trace_exit.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__4546__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__4548__auto__));
} else
{}
return return__4548__auto__;
});})(trace_data__4546__auto__))
;if((function (){var G__11562 = clairvoyant.core.default_tracer;if(G__11562)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11562.clairvoyant$core$ITraceError$;
}
})()))
{return true;
} else
{if((!G__11562.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__11562);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__11562);
}
})())
{try{return f__4547__auto__.call(null);
}catch (e11563){if((e11563 instanceof Object))
{var e__4549__auto__ = e11563;clairvoyant.core.trace_error.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__4546__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__4549__auto__));
throw e__4549__auto__;
} else
{throw e11563;

}
}} else
{return f__4547__auto__.call(null);
}
});
sailing_study_guide.dispatch.dispatch_chan = cljs.core.async.chan.call(null);
sailing_study_guide.dispatch.dispatch_pub = cljs.core.async.pub.call(null,sailing_study_guide.dispatch.dispatch_chan,sailing_study_guide.dispatch.pubfn);
sailing_study_guide.dispatch.register = (function register(tag){return cljs.core.async.sub.call(null,sailing_study_guide.dispatch.dispatch_pub,tag,cljs.core.async.chan.call(null));
});
sailing_study_guide.dispatch.unregister = (function unregister(tag,chan){return cljs.core.async.unsub.call(null,sailing_study_guide.dispatch.dispatch_pub,tag,chan);
});
/**
* @param {...*} var_args
*/
sailing_study_guide.dispatch.dispatch_BANG_ = (function() { 
var dispatch_BANG___delegate = function (a_11564,a_11565){var trace_data__4546__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"sailing-study-guide.dispatch","sailing-study-guide.dispatch",876618739,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"dispatch!","dispatch!",-286750137,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"korks","korks",296689185,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"dispatch!","dispatch!",-286750137,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"korks","korks",296689185,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null),cljs.core.list(new cljs.core.Symbol(null,"letfn","letfn",-480490827,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatchfn","dispatchfn",-2083128539,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"put!","put!",-531220546,null),new cljs.core.Symbol(null,"dispatch-chan","dispatch-chan",-2025542194,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"args","args",-1338879193,null))], null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),new cljs.core.Symbol(null,"korks","korks",296689185,null)),cljs.core.list(new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"korks","korks",296689185,null)], null),cljs.core.list(new cljs.core.Symbol(null,"dispatchfn","dispatchfn",-2083128539,null),new cljs.core.Symbol(null,"tag","tag",350170304,null))),cljs.core.list(new cljs.core.Symbol(null,"dispatchfn","dispatchfn",-2083128539,null),new cljs.core.Symbol(null,"korks","korks",296689185,null)))))], null);if((function (){var G__11582 = clairvoyant.core.default_tracer;if(G__11582)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11582.clairvoyant$core$ITraceEnter$;
}
})()))
{return true;
} else
{if((!G__11582.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__11582);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__11582);
}
})())
{clairvoyant.core.trace_enter.call(null,clairvoyant.core.default_tracer,trace_data__4546__auto__);
} else
{}
var f__4547__auto__ = ((function (trace_data__4546__auto__){
return (function (){var return__4548__auto__ = cljs.core.apply.call(null,((function (trace_data__4546__auto__){
return (function() { 
var G__11598__delegate = function (a_11564__$1,a_11565__$1){var korks = (function (){var trace_data__4546__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_11564__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"korks","korks",296689185,null)], null);if((function (){var G__11583 = clairvoyant.core.default_tracer;if(G__11583)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11583.clairvoyant$core$ITraceEnter$;
}
})()))
{return true;
} else
{if((!G__11583.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__11583);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__11583);
}
})())
{clairvoyant.core.trace_enter.call(null,clairvoyant.core.default_tracer,trace_data__4546__auto____$1);
} else
{}
var f__4547__auto__ = ((function (trace_data__4546__auto____$1,trace_data__4546__auto__){
return (function (){var return__4548__auto__ = a_11564__$1;if((function (){var G__11584 = clairvoyant.core.default_tracer;if(G__11584)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11584.clairvoyant$core$ITraceExit$;
}
})()))
{return true;
} else
{if((!G__11584.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__11584);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__11584);
}
})())
{clairvoyant.core.trace_exit.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__4546__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__4548__auto__));
} else
{}
return return__4548__auto__;
});})(trace_data__4546__auto____$1,trace_data__4546__auto__))
;if((function (){var G__11585 = clairvoyant.core.default_tracer;if(G__11585)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11585.clairvoyant$core$ITraceError$;
}
})()))
{return true;
} else
{if((!G__11585.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__11585);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__11585);
}
})())
{try{return f__4547__auto__.call(null);
}catch (e11586){if((e11586 instanceof Object))
{var e__4549__auto__ = e11586;clairvoyant.core.trace_error.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__4546__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__4549__auto__));
throw e__4549__auto__;
} else
{throw e11586;

}
}} else
{return f__4547__auto__.call(null);
}
})();var args = (function (){var trace_data__4546__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_11565__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);if((function (){var G__11587 = clairvoyant.core.default_tracer;if(G__11587)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11587.clairvoyant$core$ITraceEnter$;
}
})()))
{return true;
} else
{if((!G__11587.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__11587);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,G__11587);
}
})())
{clairvoyant.core.trace_enter.call(null,clairvoyant.core.default_tracer,trace_data__4546__auto____$1);
} else
{}
var f__4547__auto__ = ((function (trace_data__4546__auto____$1,korks,trace_data__4546__auto__){
return (function (){var return__4548__auto__ = a_11565__$1;if((function (){var G__11588 = clairvoyant.core.default_tracer;if(G__11588)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11588.clairvoyant$core$ITraceExit$;
}
})()))
{return true;
} else
{if((!G__11588.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__11588);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__11588);
}
})())
{clairvoyant.core.trace_exit.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__4546__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__4548__auto__));
} else
{}
return return__4548__auto__;
});})(trace_data__4546__auto____$1,korks,trace_data__4546__auto__))
;if((function (){var G__11589 = clairvoyant.core.default_tracer;if(G__11589)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11589.clairvoyant$core$ITraceError$;
}
})()))
{return true;
} else
{if((!G__11589.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__11589);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__11589);
}
})())
{try{return f__4547__auto__.call(null);
}catch (e11590){if((e11590 instanceof Object))
{var e__4549__auto__ = e11590;clairvoyant.core.trace_error.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__4546__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__4549__auto__));
throw e__4549__auto__;
} else
{throw e11590;

}
}} else
{return f__4547__auto__.call(null);
}
})();return ((function (korks,args,trace_data__4546__auto__){
return (function (){var dispatchfn = ((function (korks,args,trace_data__4546__auto__){
return (function dispatchfn(tag){return cljs.core.apply.call(null,cljs.core.async.put_BANG_,sailing_study_guide.dispatch.dispatch_chan,tag,args);
});})(korks,args,trace_data__4546__auto__))
;
if(cljs.core.sequential_QMARK_.call(null,korks))
{var seq__11591 = cljs.core.seq.call(null,korks);var chunk__11592 = null;var count__11593 = (0);var i__11594 = (0);while(true){
if((i__11594 < count__11593))
{var tag = cljs.core._nth.call(null,chunk__11592,i__11594);dispatchfn.call(null,tag);
{
var G__11599 = seq__11591;
var G__11600 = chunk__11592;
var G__11601 = count__11593;
var G__11602 = (i__11594 + (1));
seq__11591 = G__11599;
chunk__11592 = G__11600;
count__11593 = G__11601;
i__11594 = G__11602;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11591);if(temp__4126__auto__)
{var seq__11591__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11591__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__11591__$1);{
var G__11603 = cljs.core.chunk_rest.call(null,seq__11591__$1);
var G__11604 = c__4316__auto__;
var G__11605 = cljs.core.count.call(null,c__4316__auto__);
var G__11606 = (0);
seq__11591 = G__11603;
chunk__11592 = G__11604;
count__11593 = G__11605;
i__11594 = G__11606;
continue;
}
} else
{var tag = cljs.core.first.call(null,seq__11591__$1);dispatchfn.call(null,tag);
{
var G__11607 = cljs.core.next.call(null,seq__11591__$1);
var G__11608 = null;
var G__11609 = (0);
var G__11610 = (0);
seq__11591 = G__11607;
chunk__11592 = G__11608;
count__11593 = G__11609;
i__11594 = G__11610;
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
{return dispatchfn.call(null,korks);
}
});})(korks,args,trace_data__4546__auto__))
.call(null);
};
var G__11598 = function (a_11564__$1,var_args){
var a_11565__$1 = null;if (arguments.length > 1) {
  a_11565__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11598__delegate.call(this,a_11564__$1,a_11565__$1);};
G__11598.cljs$lang$maxFixedArity = 1;
G__11598.cljs$lang$applyTo = (function (arglist__11611){
var a_11564__$1 = cljs.core.first(arglist__11611);
var a_11565__$1 = cljs.core.rest(arglist__11611);
return G__11598__delegate(a_11564__$1,a_11565__$1);
});
G__11598.cljs$core$IFn$_invoke$arity$variadic = G__11598__delegate;
return G__11598;
})()
;})(trace_data__4546__auto__))
,a_11564,a_11565);if((function (){var G__11595 = clairvoyant.core.default_tracer;if(G__11595)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11595.clairvoyant$core$ITraceExit$;
}
})()))
{return true;
} else
{if((!G__11595.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__11595);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,G__11595);
}
})())
{clairvoyant.core.trace_exit.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__4546__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__4548__auto__));
} else
{}
return return__4548__auto__;
});})(trace_data__4546__auto__))
;if((function (){var G__11596 = clairvoyant.core.default_tracer;if(G__11596)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11596.clairvoyant$core$ITraceError$;
}
})()))
{return true;
} else
{if((!G__11596.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__11596);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,G__11596);
}
})())
{try{return f__4547__auto__.call(null);
}catch (e11597){if((e11597 instanceof Object))
{var e__4549__auto__ = e11597;clairvoyant.core.trace_error.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__4546__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__4549__auto__));
throw e__4549__auto__;
} else
{throw e11597;

}
}} else
{return f__4547__auto__.call(null);
}
};
var dispatch_BANG_ = function (a_11564,var_args){
var a_11565 = null;if (arguments.length > 1) {
  a_11565 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dispatch_BANG___delegate.call(this,a_11564,a_11565);};
dispatch_BANG_.cljs$lang$maxFixedArity = 1;
dispatch_BANG_.cljs$lang$applyTo = (function (arglist__11612){
var a_11564 = cljs.core.first(arglist__11612);
var a_11565 = cljs.core.rest(arglist__11612);
return dispatch_BANG___delegate(a_11564,a_11565);
});
dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = dispatch_BANG___delegate;
return dispatch_BANG_;
})()
;
sailing_study_guide.dispatch.korks = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer-chosen","answer-chosen",-703375083),"bap"], null);
cljs.core.sequential_QMARK_.call(null,sailing_study_guide.dispatch.korks);
sailing_study_guide.dispatch.args = "message";
sailing_study_guide.dispatch.bus = sailing_study_guide.dispatch.register.call(null,new cljs.core.Keyword(null,"answer-chosen","answer-chosen",-703375083));
sailing_study_guide.dispatch.dispatch_BANG_.call(null,sailing_study_guide.dispatch.korks,sailing_study_guide.dispatch.args);
var c__6747__auto___11626 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6747__auto___11626){
return (function (){var f__6748__auto__ = (function (){var switch__6732__auto__ = ((function (c__6747__auto___11626){
return (function (state_11617){var state_val_11618 = (state_11617[(1)]);if((state_val_11618 === (2)))
{var inst_11614 = (state_11617[(2)]);var inst_11615 = cljs.core.prn.call(null,inst_11614);var state_11617__$1 = state_11617;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11617__$1,inst_11615);
} else
{if((state_val_11618 === (1)))
{var state_11617__$1 = state_11617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11617__$1,(2),sailing_study_guide.dispatch.bus);
} else
{return null;
}
}
});})(c__6747__auto___11626))
;return ((function (switch__6732__auto__,c__6747__auto___11626){
return (function() {
var state_machine__6733__auto__ = null;
var state_machine__6733__auto____0 = (function (){var statearr_11622 = [null,null,null,null,null,null,null];(statearr_11622[(0)] = state_machine__6733__auto__);
(statearr_11622[(1)] = (1));
return statearr_11622;
});
var state_machine__6733__auto____1 = (function (state_11617){while(true){
var ret_value__6734__auto__ = (function (){try{while(true){
var result__6735__auto__ = switch__6732__auto__.call(null,state_11617);if(cljs.core.keyword_identical_QMARK_.call(null,result__6735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6735__auto__;
}
break;
}
}catch (e11623){if((e11623 instanceof Object))
{var ex__6736__auto__ = e11623;var statearr_11624_11627 = state_11617;(statearr_11624_11627[(5)] = ex__6736__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11617);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11623;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11628 = state_11617;
state_11617 = G__11628;
continue;
}
} else
{return ret_value__6734__auto__;
}
break;
}
});
state_machine__6733__auto__ = function(state_11617){
switch(arguments.length){
case 0:
return state_machine__6733__auto____0.call(this);
case 1:
return state_machine__6733__auto____1.call(this,state_11617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6733__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6733__auto____0;
state_machine__6733__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6733__auto____1;
return state_machine__6733__auto__;
})()
;})(switch__6732__auto__,c__6747__auto___11626))
})();var state__6749__auto__ = (function (){var statearr_11625 = f__6748__auto__.call(null);(statearr_11625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6747__auto___11626);
return statearr_11625;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6749__auto__);
});})(c__6747__auto___11626))
);

//# sourceMappingURL=dispatch.js.map