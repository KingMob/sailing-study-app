// Compiled by ClojureScript 0.0-2760 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = cljs.core.atom.call(null,(0));
reagent.ratom.running = (function running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_9467 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_9467;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__9471__delegate = function (x,p__9468){
var map__9470 = p__9468;
var map__9470__$1 = ((cljs.core.seq_QMARK_.call(null,map__9470))?cljs.core.apply.call(null,cljs.core.hash_map,map__9470):map__9470);
var validator = cljs.core.get.call(null,map__9470__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var meta = cljs.core.get.call(null,map__9470__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__9471 = function (x,var_args){
var p__9468 = null;
if (arguments.length > 1) {
var G__9472__i = 0, G__9472__a = new Array(arguments.length -  1);
while (G__9472__i < G__9472__a.length) {G__9472__a[G__9472__i] = arguments[G__9472__i + 1]; ++G__9472__i;}
  p__9468 = new cljs.core.IndexedSeq(G__9472__a,0);
} 
return G__9471__delegate.call(this,x,p__9468);};
G__9471.cljs$lang$maxFixedArity = 1;
G__9471.cljs$lang$applyTo = (function (arglist__9473){
var x = cljs.core.first(arglist__9473);
var p__9468 = cljs.core.rest(arglist__9473);
return G__9471__delegate(x,p__9468);
});
G__9471.cljs$core$IFn$_invoke$arity$variadic = G__9471__delegate;
return G__9471;
})()
;
atom = function(x,var_args){
var p__9468 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__9474 = null;
if (arguments.length > 1) {
var G__9475__i = 0, G__9475__a = new Array(arguments.length -  1);
while (G__9475__i < G__9475__a.length) {G__9475__a[G__9475__i] = arguments[G__9475__i + 1]; ++G__9475__i;}
G__9474 = new cljs.core.IndexedSeq(G__9475__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__9474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (path,ratom){
this.path = path;
this.ratom = ratom;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches.call(null,self__.ratom,oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch.call(null,self__.ratom,key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch.call(null,self__.ratom,key);
});

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,self__.path,writer,opts);

cljs.core._write.call(null,writer," ");

cljs.core.pr_writer.call(null,self__.ratom,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._meta.call(null,self__.ratom);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f,x);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f,x,y);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f,x,y,more);
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(path,ratom){
return (new reagent.ratom.RCursor(path,ratom));
});

reagent.ratom.cursor = (function cursor(path,ra){
return (new reagent.ratom.RCursor(path,ra));
});

reagent.ratom.IDisposable = (function (){var obj9477 = {};
return obj9477;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3240__auto__ = this$;
if(and__3240__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__3240__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__3896__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3252__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj9479 = {};
return obj9479;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__3240__auto__ = this$;
if(and__3240__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__3240__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__3896__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3252__auto__ = (reagent.ratom.run[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (reagent.ratom.run["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj9481 = {};
return obj9481;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__3240__auto__ = this$;
if(and__3240__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__3240__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__3896__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3252__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__3240__auto__ = k;
if(and__3240__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__3240__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__3896__auto__ = (((k == null))?null:k);
return (function (){var or__3252__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){
return cljs.core.reduce_kv.call(null,(function (_,key,f){
f.call(null,key,obs,oldval,newval);

return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3240__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__3240__auto__)){
return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__3240__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__3252__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3252__auto__)){
return or__3252__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__9482_9494 = cljs.core.seq.call(null,derefed);
var chunk__9483_9495 = null;
var count__9484_9496 = (0);
var i__9485_9497 = (0);
while(true){
if((i__9485_9497 < count__9484_9496)){
var w_9498 = cljs.core._nth.call(null,chunk__9483_9495,i__9485_9497);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_9498)){
} else {
cljs.core.add_watch.call(null,w_9498,this$__$1,reagent.ratom._handle_change);
}

var G__9499 = seq__9482_9494;
var G__9500 = chunk__9483_9495;
var G__9501 = count__9484_9496;
var G__9502 = (i__9485_9497 + (1));
seq__9482_9494 = G__9499;
chunk__9483_9495 = G__9500;
count__9484_9496 = G__9501;
i__9485_9497 = G__9502;
continue;
} else {
var temp__4126__auto___9503 = cljs.core.seq.call(null,seq__9482_9494);
if(temp__4126__auto___9503){
var seq__9482_9504__$1 = temp__4126__auto___9503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9482_9504__$1)){
var c__4039__auto___9505 = cljs.core.chunk_first.call(null,seq__9482_9504__$1);
var G__9506 = cljs.core.chunk_rest.call(null,seq__9482_9504__$1);
var G__9507 = c__4039__auto___9505;
var G__9508 = cljs.core.count.call(null,c__4039__auto___9505);
var G__9509 = (0);
seq__9482_9494 = G__9506;
chunk__9483_9495 = G__9507;
count__9484_9496 = G__9508;
i__9485_9497 = G__9509;
continue;
} else {
var w_9510 = cljs.core.first.call(null,seq__9482_9504__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_9510)){
} else {
cljs.core.add_watch.call(null,w_9510,this$__$1,reagent.ratom._handle_change);
}

var G__9511 = cljs.core.next.call(null,seq__9482_9504__$1);
var G__9512 = null;
var G__9513 = (0);
var G__9514 = (0);
seq__9482_9494 = G__9511;
chunk__9483_9495 = G__9512;
count__9484_9496 = G__9513;
i__9485_9497 = G__9514;
continue;
}
} else {
}
}
break;
}

var seq__9486_9515 = cljs.core.seq.call(null,self__.watching);
var chunk__9487_9516 = null;
var count__9488_9517 = (0);
var i__9489_9518 = (0);
while(true){
if((i__9489_9518 < count__9488_9517)){
var w_9519 = cljs.core._nth.call(null,chunk__9487_9516,i__9489_9518);
if(cljs.core.contains_QMARK_.call(null,derefed,w_9519)){
} else {
cljs.core.remove_watch.call(null,w_9519,this$__$1);
}

var G__9520 = seq__9486_9515;
var G__9521 = chunk__9487_9516;
var G__9522 = count__9488_9517;
var G__9523 = (i__9489_9518 + (1));
seq__9486_9515 = G__9520;
chunk__9487_9516 = G__9521;
count__9488_9517 = G__9522;
i__9489_9518 = G__9523;
continue;
} else {
var temp__4126__auto___9524 = cljs.core.seq.call(null,seq__9486_9515);
if(temp__4126__auto___9524){
var seq__9486_9525__$1 = temp__4126__auto___9524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9486_9525__$1)){
var c__4039__auto___9526 = cljs.core.chunk_first.call(null,seq__9486_9525__$1);
var G__9527 = cljs.core.chunk_rest.call(null,seq__9486_9525__$1);
var G__9528 = c__4039__auto___9526;
var G__9529 = cljs.core.count.call(null,c__4039__auto___9526);
var G__9530 = (0);
seq__9486_9515 = G__9527;
chunk__9487_9516 = G__9528;
count__9488_9517 = G__9529;
i__9489_9518 = G__9530;
continue;
} else {
var w_9531 = cljs.core.first.call(null,seq__9486_9525__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_9531)){
} else {
cljs.core.remove_watch.call(null,w_9531,this$__$1);
}

var G__9532 = cljs.core.next.call(null,seq__9486_9525__$1);
var G__9533 = null;
var G__9534 = (0);
var G__9535 = (0);
seq__9486_9515 = G__9532;
chunk__9487_9516 = G__9533;
count__9488_9517 = G__9534;
i__9489_9518 = G__9535;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__9490_9536 = cljs.core.seq.call(null,self__.watching);
var chunk__9491_9537 = null;
var count__9492_9538 = (0);
var i__9493_9539 = (0);
while(true){
if((i__9493_9539 < count__9492_9538)){
var w_9540 = cljs.core._nth.call(null,chunk__9491_9537,i__9493_9539);
cljs.core.remove_watch.call(null,w_9540,this$__$1);

var G__9541 = seq__9490_9536;
var G__9542 = chunk__9491_9537;
var G__9543 = count__9492_9538;
var G__9544 = (i__9493_9539 + (1));
seq__9490_9536 = G__9541;
chunk__9491_9537 = G__9542;
count__9492_9538 = G__9543;
i__9493_9539 = G__9544;
continue;
} else {
var temp__4126__auto___9545 = cljs.core.seq.call(null,seq__9490_9536);
if(temp__4126__auto___9545){
var seq__9490_9546__$1 = temp__4126__auto___9545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9490_9546__$1)){
var c__4039__auto___9547 = cljs.core.chunk_first.call(null,seq__9490_9546__$1);
var G__9548 = cljs.core.chunk_rest.call(null,seq__9490_9546__$1);
var G__9549 = c__4039__auto___9547;
var G__9550 = cljs.core.count.call(null,c__4039__auto___9547);
var G__9551 = (0);
seq__9490_9536 = G__9548;
chunk__9491_9537 = G__9549;
count__9492_9538 = G__9550;
i__9493_9539 = G__9551;
continue;
} else {
var w_9552 = cljs.core.first.call(null,seq__9490_9546__$1);
cljs.core.remove_watch.call(null,w_9552,this$__$1);

var G__9553 = cljs.core.next.call(null,seq__9490_9546__$1);
var G__9554 = null;
var G__9555 = (0);
var G__9556 = (0);
seq__9490_9536 = G__9553;
chunk__9491_9537 = G__9554;
count__9492_9538 = G__9555;
i__9493_9539 = G__9556;
continue;
}
} else {
}
}
break;
}

self__.watching = cljs.core.PersistentHashSet.EMPTY;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return self__.on_dispose.call(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
var old_value = self__.state;
self__.state = new_value;

cljs.core._notify_watches.call(null,a__$1,old_value,new_value);

return new_value;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);
var derefed = reagent.ratom.captured.call(null,this$__$1);
if(cljs.core.not_EQ_.call(null,derefed,self__.watching)){
reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_set)){
self__.on_set.call(null,oldval,newval);
} else {
}

return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.call(null,self__.watches,k);

if(cljs.core.empty_QMARK_.call(null,self__.watches)){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,(function (){var or__3252__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3252__auto__)){
return or__3252__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
var x__4780__auto___9557 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(typeof console !== 'undefined'){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(231),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__4780__auto___9557))].join(''))].join(''));
} else {
}

} else {
}

if(cljs.core.truth_((function (){var or__3252__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3252__auto__)){
return or__3252__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null))))].join('')));
}

reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run.call(null,this$__$1);
} else {
return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__9558){
var map__9560 = p__9558;
var map__9560__$1 = ((cljs.core.seq_QMARK_.call(null,map__9560))?cljs.core.apply.call(null,cljs.core.hash_map,map__9560):map__9560);
var derefed = cljs.core.get.call(null,map__9560__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var on_dispose = cljs.core.get.call(null,map__9560__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var on_set = cljs.core.get.call(null,map__9560__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var auto_run = cljs.core.get.call(null,map__9560__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

reagent.ratom._update_watching.call(null,reaction,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__9558 = null;
if (arguments.length > 1) {
var G__9561__i = 0, G__9561__a = new Array(arguments.length -  1);
while (G__9561__i < G__9561__a.length) {G__9561__a[G__9561__i] = arguments[G__9561__i + 1]; ++G__9561__i;}
  p__9558 = new cljs.core.IndexedSeq(G__9561__a,0);
} 
return make_reaction__delegate.call(this,f,p__9558);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__9562){
var f = cljs.core.first(arglist__9562);
var p__9558 = cljs.core.rest(arglist__9562);
return make_reaction__delegate(f,p__9558);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map