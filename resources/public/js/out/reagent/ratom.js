// Compiled by ClojureScript 0.0-2843 {:elide-asserts false}
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = cljs.core.atom.call(null,(0));
reagent.ratom.running = (function running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_20594 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_20594;
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

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__13910__auto__,writer__13911__auto__,opt__13912__auto__){
return cljs.core._write.call(null,writer__13911__auto__,"reagent.ratom/RAtom");
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
var G__20598__delegate = function (x,p__20595){
var map__20597 = p__20595;
var map__20597__$1 = ((cljs.core.seq_QMARK_.call(null,map__20597))?cljs.core.apply.call(null,cljs.core.hash_map,map__20597):map__20597);
var validator = cljs.core.get.call(null,map__20597__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var meta = cljs.core.get.call(null,map__20597__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__20598 = function (x,var_args){
var p__20595 = null;
if (arguments.length > 1) {
var G__20599__i = 0, G__20599__a = new Array(arguments.length -  1);
while (G__20599__i < G__20599__a.length) {G__20599__a[G__20599__i] = arguments[G__20599__i + 1]; ++G__20599__i;}
  p__20595 = new cljs.core.IndexedSeq(G__20599__a,0);
} 
return G__20598__delegate.call(this,x,p__20595);};
G__20598.cljs$lang$maxFixedArity = 1;
G__20598.cljs$lang$applyTo = (function (arglist__20600){
var x = cljs.core.first(arglist__20600);
var p__20595 = cljs.core.rest(arglist__20600);
return G__20598__delegate(x,p__20595);
});
G__20598.cljs$core$IFn$_invoke$arity$variadic = G__20598__delegate;
return G__20598;
})()
;
atom = function(x,var_args){
var p__20595 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__20601 = null;
if (arguments.length > 1) {
var G__20602__i = 0, G__20602__a = new Array(arguments.length -  1);
while (G__20602__i < G__20602__a.length) {G__20602__a[G__20602__i] = arguments[G__20602__i + 1]; ++G__20602__i;}
G__20601 = new cljs.core.IndexedSeq(G__20602__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__20601);
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

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__13910__auto__,writer__13911__auto__,opt__13912__auto__){
return cljs.core._write.call(null,writer__13911__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(path,ratom){
return (new reagent.ratom.RCursor(path,ratom));
});

reagent.ratom.cursor = (function cursor(path,ra){
return (new reagent.ratom.RCursor(path,ra));
});

reagent.ratom.IDisposable = (function (){var obj20604 = {};
return obj20604;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__13311__auto__ = this$;
if(and__13311__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__13311__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__13967__auto__ = (((this$ == null))?null:this$);
return (function (){var or__13323__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__13967__auto__)]);
if(or__13323__auto__){
return or__13323__auto__;
} else {
var or__13323__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__13323__auto____$1){
return or__13323__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj20606 = {};
return obj20606;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__13311__auto__ = this$;
if(and__13311__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__13311__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__13967__auto__ = (((this$ == null))?null:this$);
return (function (){var or__13323__auto__ = (reagent.ratom.run[goog.typeOf(x__13967__auto__)]);
if(or__13323__auto__){
return or__13323__auto__;
} else {
var or__13323__auto____$1 = (reagent.ratom.run["_"]);
if(or__13323__auto____$1){
return or__13323__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj20608 = {};
return obj20608;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__13311__auto__ = this$;
if(and__13311__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__13311__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__13967__auto__ = (((this$ == null))?null:this$);
return (function (){var or__13323__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__13967__auto__)]);
if(or__13323__auto__){
return or__13323__auto__;
} else {
var or__13323__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__13323__auto____$1){
return or__13323__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__13311__auto__ = k;
if(and__13311__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__13311__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__13967__auto__ = (((k == null))?null:k);
return (function (){var or__13323__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__13967__auto__)]);
if(or__13323__auto__){
return or__13323__auto__;
} else {
var or__13323__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__13323__auto____$1){
return or__13323__auto____$1;
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
if(cljs.core.truth_((function (){var and__13311__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__13311__auto__)){
return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__13311__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__13323__auto__ = self__.auto_run;
if(cljs.core.truth_(or__13323__auto__)){
return or__13323__auto__;
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
var seq__20609_20621 = cljs.core.seq.call(null,derefed);
var chunk__20610_20622 = null;
var count__20611_20623 = (0);
var i__20612_20624 = (0);
while(true){
if((i__20612_20624 < count__20611_20623)){
var w_20625 = cljs.core._nth.call(null,chunk__20610_20622,i__20612_20624);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_20625)){
} else {
cljs.core.add_watch.call(null,w_20625,this$__$1,reagent.ratom._handle_change);
}

var G__20626 = seq__20609_20621;
var G__20627 = chunk__20610_20622;
var G__20628 = count__20611_20623;
var G__20629 = (i__20612_20624 + (1));
seq__20609_20621 = G__20626;
chunk__20610_20622 = G__20627;
count__20611_20623 = G__20628;
i__20612_20624 = G__20629;
continue;
} else {
var temp__4126__auto___20630 = cljs.core.seq.call(null,seq__20609_20621);
if(temp__4126__auto___20630){
var seq__20609_20631__$1 = temp__4126__auto___20630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20609_20631__$1)){
var c__14110__auto___20632 = cljs.core.chunk_first.call(null,seq__20609_20631__$1);
var G__20633 = cljs.core.chunk_rest.call(null,seq__20609_20631__$1);
var G__20634 = c__14110__auto___20632;
var G__20635 = cljs.core.count.call(null,c__14110__auto___20632);
var G__20636 = (0);
seq__20609_20621 = G__20633;
chunk__20610_20622 = G__20634;
count__20611_20623 = G__20635;
i__20612_20624 = G__20636;
continue;
} else {
var w_20637 = cljs.core.first.call(null,seq__20609_20631__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_20637)){
} else {
cljs.core.add_watch.call(null,w_20637,this$__$1,reagent.ratom._handle_change);
}

var G__20638 = cljs.core.next.call(null,seq__20609_20631__$1);
var G__20639 = null;
var G__20640 = (0);
var G__20641 = (0);
seq__20609_20621 = G__20638;
chunk__20610_20622 = G__20639;
count__20611_20623 = G__20640;
i__20612_20624 = G__20641;
continue;
}
} else {
}
}
break;
}

var seq__20613_20642 = cljs.core.seq.call(null,self__.watching);
var chunk__20614_20643 = null;
var count__20615_20644 = (0);
var i__20616_20645 = (0);
while(true){
if((i__20616_20645 < count__20615_20644)){
var w_20646 = cljs.core._nth.call(null,chunk__20614_20643,i__20616_20645);
if(cljs.core.contains_QMARK_.call(null,derefed,w_20646)){
} else {
cljs.core.remove_watch.call(null,w_20646,this$__$1);
}

var G__20647 = seq__20613_20642;
var G__20648 = chunk__20614_20643;
var G__20649 = count__20615_20644;
var G__20650 = (i__20616_20645 + (1));
seq__20613_20642 = G__20647;
chunk__20614_20643 = G__20648;
count__20615_20644 = G__20649;
i__20616_20645 = G__20650;
continue;
} else {
var temp__4126__auto___20651 = cljs.core.seq.call(null,seq__20613_20642);
if(temp__4126__auto___20651){
var seq__20613_20652__$1 = temp__4126__auto___20651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20613_20652__$1)){
var c__14110__auto___20653 = cljs.core.chunk_first.call(null,seq__20613_20652__$1);
var G__20654 = cljs.core.chunk_rest.call(null,seq__20613_20652__$1);
var G__20655 = c__14110__auto___20653;
var G__20656 = cljs.core.count.call(null,c__14110__auto___20653);
var G__20657 = (0);
seq__20613_20642 = G__20654;
chunk__20614_20643 = G__20655;
count__20615_20644 = G__20656;
i__20616_20645 = G__20657;
continue;
} else {
var w_20658 = cljs.core.first.call(null,seq__20613_20652__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_20658)){
} else {
cljs.core.remove_watch.call(null,w_20658,this$__$1);
}

var G__20659 = cljs.core.next.call(null,seq__20613_20652__$1);
var G__20660 = null;
var G__20661 = (0);
var G__20662 = (0);
seq__20613_20642 = G__20659;
chunk__20614_20643 = G__20660;
count__20615_20644 = G__20661;
i__20616_20645 = G__20662;
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
var seq__20617_20663 = cljs.core.seq.call(null,self__.watching);
var chunk__20618_20664 = null;
var count__20619_20665 = (0);
var i__20620_20666 = (0);
while(true){
if((i__20620_20666 < count__20619_20665)){
var w_20667 = cljs.core._nth.call(null,chunk__20618_20664,i__20620_20666);
cljs.core.remove_watch.call(null,w_20667,this$__$1);

var G__20668 = seq__20617_20663;
var G__20669 = chunk__20618_20664;
var G__20670 = count__20619_20665;
var G__20671 = (i__20620_20666 + (1));
seq__20617_20663 = G__20668;
chunk__20618_20664 = G__20669;
count__20619_20665 = G__20670;
i__20620_20666 = G__20671;
continue;
} else {
var temp__4126__auto___20672 = cljs.core.seq.call(null,seq__20617_20663);
if(temp__4126__auto___20672){
var seq__20617_20673__$1 = temp__4126__auto___20672;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20617_20673__$1)){
var c__14110__auto___20674 = cljs.core.chunk_first.call(null,seq__20617_20673__$1);
var G__20675 = cljs.core.chunk_rest.call(null,seq__20617_20673__$1);
var G__20676 = c__14110__auto___20674;
var G__20677 = cljs.core.count.call(null,c__14110__auto___20674);
var G__20678 = (0);
seq__20617_20663 = G__20675;
chunk__20618_20664 = G__20676;
count__20619_20665 = G__20677;
i__20620_20666 = G__20678;
continue;
} else {
var w_20679 = cljs.core.first.call(null,seq__20617_20673__$1);
cljs.core.remove_watch.call(null,w_20679,this$__$1);

var G__20680 = cljs.core.next.call(null,seq__20617_20673__$1);
var G__20681 = null;
var G__20682 = (0);
var G__20683 = (0);
seq__20617_20663 = G__20680;
chunk__20618_20664 = G__20681;
count__20619_20665 = G__20682;
i__20620_20666 = G__20683;
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
if(cljs.core.not.call(null,(function (){var or__13323__auto__ = self__.auto_run;
if(cljs.core.truth_(or__13323__auto__)){
return or__13323__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
var x__14852__auto___20684 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(typeof console !== 'undefined'){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(231),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__14852__auto___20684))].join(''))].join(''));
} else {
}

} else {
}

if(cljs.core.truth_((function (){var or__13323__auto__ = self__.auto_run;
if(cljs.core.truth_(or__13323__auto__)){
return or__13323__auto__;
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

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__13910__auto__,writer__13911__auto__,opt__13912__auto__){
return cljs.core._write.call(null,writer__13911__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__20685){
var map__20687 = p__20685;
var map__20687__$1 = ((cljs.core.seq_QMARK_.call(null,map__20687))?cljs.core.apply.call(null,cljs.core.hash_map,map__20687):map__20687);
var derefed = cljs.core.get.call(null,map__20687__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var on_dispose = cljs.core.get.call(null,map__20687__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var on_set = cljs.core.get.call(null,map__20687__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var auto_run = cljs.core.get.call(null,map__20687__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
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
var p__20685 = null;
if (arguments.length > 1) {
var G__20688__i = 0, G__20688__a = new Array(arguments.length -  1);
while (G__20688__i < G__20688__a.length) {G__20688__a[G__20688__i] = arguments[G__20688__i + 1]; ++G__20688__i;}
  p__20685 = new cljs.core.IndexedSeq(G__20688__a,0);
} 
return make_reaction__delegate.call(this,f,p__20685);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__20689){
var f = cljs.core.first(arglist__20689);
var p__20685 = cljs.core.rest(arglist__20689);
return make_reaction__delegate(f,p__20685);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map