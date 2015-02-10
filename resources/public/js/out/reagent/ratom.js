// Compiled by ClojureScript 0.0-2816 {:elide-asserts false}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.running = (function running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_20544 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_20544;
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

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__13818__auto__,writer__13819__auto__,opt__13820__auto__){
return cljs.core._write.call(null,writer__13819__auto__,"reagent.ratom/RAtom");
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
var G__20548__delegate = function (x,p__20545){
var map__20547 = p__20545;
var map__20547__$1 = ((cljs.core.seq_QMARK_.call(null,map__20547))?cljs.core.apply.call(null,cljs.core.hash_map,map__20547):map__20547);
var validator = cljs.core.get.call(null,map__20547__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var meta = cljs.core.get.call(null,map__20547__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__20548 = function (x,var_args){
var p__20545 = null;
if (arguments.length > 1) {
var G__20549__i = 0, G__20549__a = new Array(arguments.length -  1);
while (G__20549__i < G__20549__a.length) {G__20549__a[G__20549__i] = arguments[G__20549__i + 1]; ++G__20549__i;}
  p__20545 = new cljs.core.IndexedSeq(G__20549__a,0);
} 
return G__20548__delegate.call(this,x,p__20545);};
G__20548.cljs$lang$maxFixedArity = 1;
G__20548.cljs$lang$applyTo = (function (arglist__20550){
var x = cljs.core.first(arglist__20550);
var p__20545 = cljs.core.rest(arglist__20550);
return G__20548__delegate(x,p__20545);
});
G__20548.cljs$core$IFn$_invoke$arity$variadic = G__20548__delegate;
return G__20548;
})()
;
atom = function(x,var_args){
var p__20545 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__20551 = null;
if (arguments.length > 1) {
var G__20552__i = 0, G__20552__a = new Array(arguments.length -  1);
while (G__20552__i < G__20552__a.length) {G__20552__a[G__20552__i] = arguments[G__20552__i + 1]; ++G__20552__i;}
G__20551 = new cljs.core.IndexedSeq(G__20552__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__20551);
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
reagent.ratom.peek_at = (function peek_at(a,path){
var _STAR_ratom_context_STAR_20554 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core.get_in.call(null,cljs.core.deref.call(null,a),path);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_20554;
}});

/**
* @constructor
*/
reagent.ratom.RCursor = (function (path,ratom,setf,reaction){
this.path = path;
this.ratom = ratom;
this.setf = setf;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path,self__.setf], null));
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

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,reagent.ratom.peek_at.call(null,self__.ratom,self__.path)));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,reagent.ratom.peek_at.call(null,self__.ratom,self__.path),x));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,reagent.ratom.peek_at.call(null,self__.ratom,self__.path),x,y));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,reagent.ratom.peek_at.call(null,self__.ratom,self__.path),x,y,more));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.setf == null)){
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
} else {
return self__.setf.call(null,new_value);
}
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((reagent.ratom._STAR_ratom_context_STAR_ == null)){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
} else {
if((self__.reaction == null)){
self__.reaction = reagent.ratom.make_reaction.call(null,((function (this$__$1){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(this$__$1))
);
} else {
}

return cljs.core.deref.call(null,self__.reaction);
}
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom)) && (cljs.core._EQ_.call(null,self__.setf,other.setf));
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__13818__auto__,writer__13819__auto__,opt__13820__auto__){
return cljs.core._write.call(null,writer__13819__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(path,ratom,setf,reaction){
return (new reagent.ratom.RCursor(path,ratom,setf,reaction));
});

reagent.ratom.cursor = (function() {
var cursor = null;
var cursor__2 = (function (path,ra){
return (new reagent.ratom.RCursor(path,ra,null,null));
});
var cursor__4 = (function (path,ra,setf,args){
return (new reagent.ratom.RCursor(path,ra,(new reagent.impl.util.partial_ifn(setf,args,null)),null));
});
cursor = function(path,ra,setf,args){
switch(arguments.length){
case 2:
return cursor__2.call(this,path,ra);
case 4:
return cursor__4.call(this,path,ra,setf,args);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cursor.cljs$core$IFn$_invoke$arity$2 = cursor__2;
cursor.cljs$core$IFn$_invoke$arity$4 = cursor__4;
return cursor;
})()
;

reagent.ratom.IDisposable = (function (){var obj20556 = {};
return obj20556;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__13219__auto__ = this$;
if(and__13219__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__13219__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__13875__auto__ = (((this$ == null))?null:this$);
return (function (){var or__13231__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__13875__auto__)]);
if(or__13231__auto__){
return or__13231__auto__;
} else {
var or__13231__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__13231__auto____$1){
return or__13231__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj20558 = {};
return obj20558;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__13219__auto__ = this$;
if(and__13219__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__13219__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__13875__auto__ = (((this$ == null))?null:this$);
return (function (){var or__13231__auto__ = (reagent.ratom.run[goog.typeOf(x__13875__auto__)]);
if(or__13231__auto__){
return or__13231__auto__;
} else {
var or__13231__auto____$1 = (reagent.ratom.run["_"]);
if(or__13231__auto____$1){
return or__13231__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj20560 = {};
return obj20560;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__13219__auto__ = this$;
if(and__13219__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__13219__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__13875__auto__ = (((this$ == null))?null:this$);
return (function (){var or__13231__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__13875__auto__)]);
if(or__13231__auto__){
return or__13231__auto__;
} else {
var or__13231__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__13231__auto____$1){
return or__13231__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__13219__auto__ = k;
if(and__13219__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__13219__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__13875__auto__ = (((k == null))?null:k);
return (function (){var or__13231__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__13875__auto__)]);
if(or__13231__auto__){
return or__13231__auto__;
} else {
var or__13231__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__13231__auto____$1){
return or__13231__auto____$1;
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
if(cljs.core.truth_((function (){var and__13219__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__13219__auto__)){
return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__13219__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__13231__auto__ = self__.auto_run;
if(cljs.core.truth_(or__13231__auto__)){
return or__13231__auto__;
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
var seq__20561_20573 = cljs.core.seq.call(null,derefed);
var chunk__20562_20574 = null;
var count__20563_20575 = (0);
var i__20564_20576 = (0);
while(true){
if((i__20564_20576 < count__20563_20575)){
var w_20577 = cljs.core._nth.call(null,chunk__20562_20574,i__20564_20576);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_20577)){
} else {
cljs.core.add_watch.call(null,w_20577,this$__$1,reagent.ratom._handle_change);
}

var G__20578 = seq__20561_20573;
var G__20579 = chunk__20562_20574;
var G__20580 = count__20563_20575;
var G__20581 = (i__20564_20576 + (1));
seq__20561_20573 = G__20578;
chunk__20562_20574 = G__20579;
count__20563_20575 = G__20580;
i__20564_20576 = G__20581;
continue;
} else {
var temp__4126__auto___20582 = cljs.core.seq.call(null,seq__20561_20573);
if(temp__4126__auto___20582){
var seq__20561_20583__$1 = temp__4126__auto___20582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20561_20583__$1)){
var c__14018__auto___20584 = cljs.core.chunk_first.call(null,seq__20561_20583__$1);
var G__20585 = cljs.core.chunk_rest.call(null,seq__20561_20583__$1);
var G__20586 = c__14018__auto___20584;
var G__20587 = cljs.core.count.call(null,c__14018__auto___20584);
var G__20588 = (0);
seq__20561_20573 = G__20585;
chunk__20562_20574 = G__20586;
count__20563_20575 = G__20587;
i__20564_20576 = G__20588;
continue;
} else {
var w_20589 = cljs.core.first.call(null,seq__20561_20583__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_20589)){
} else {
cljs.core.add_watch.call(null,w_20589,this$__$1,reagent.ratom._handle_change);
}

var G__20590 = cljs.core.next.call(null,seq__20561_20583__$1);
var G__20591 = null;
var G__20592 = (0);
var G__20593 = (0);
seq__20561_20573 = G__20590;
chunk__20562_20574 = G__20591;
count__20563_20575 = G__20592;
i__20564_20576 = G__20593;
continue;
}
} else {
}
}
break;
}

var seq__20565_20594 = cljs.core.seq.call(null,self__.watching);
var chunk__20566_20595 = null;
var count__20567_20596 = (0);
var i__20568_20597 = (0);
while(true){
if((i__20568_20597 < count__20567_20596)){
var w_20598 = cljs.core._nth.call(null,chunk__20566_20595,i__20568_20597);
if(cljs.core.contains_QMARK_.call(null,derefed,w_20598)){
} else {
cljs.core.remove_watch.call(null,w_20598,this$__$1);
}

var G__20599 = seq__20565_20594;
var G__20600 = chunk__20566_20595;
var G__20601 = count__20567_20596;
var G__20602 = (i__20568_20597 + (1));
seq__20565_20594 = G__20599;
chunk__20566_20595 = G__20600;
count__20567_20596 = G__20601;
i__20568_20597 = G__20602;
continue;
} else {
var temp__4126__auto___20603 = cljs.core.seq.call(null,seq__20565_20594);
if(temp__4126__auto___20603){
var seq__20565_20604__$1 = temp__4126__auto___20603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20565_20604__$1)){
var c__14018__auto___20605 = cljs.core.chunk_first.call(null,seq__20565_20604__$1);
var G__20606 = cljs.core.chunk_rest.call(null,seq__20565_20604__$1);
var G__20607 = c__14018__auto___20605;
var G__20608 = cljs.core.count.call(null,c__14018__auto___20605);
var G__20609 = (0);
seq__20565_20594 = G__20606;
chunk__20566_20595 = G__20607;
count__20567_20596 = G__20608;
i__20568_20597 = G__20609;
continue;
} else {
var w_20610 = cljs.core.first.call(null,seq__20565_20604__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_20610)){
} else {
cljs.core.remove_watch.call(null,w_20610,this$__$1);
}

var G__20611 = cljs.core.next.call(null,seq__20565_20604__$1);
var G__20612 = null;
var G__20613 = (0);
var G__20614 = (0);
seq__20565_20594 = G__20611;
chunk__20566_20595 = G__20612;
count__20567_20596 = G__20613;
i__20568_20597 = G__20614;
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
var seq__20569_20615 = cljs.core.seq.call(null,self__.watching);
var chunk__20570_20616 = null;
var count__20571_20617 = (0);
var i__20572_20618 = (0);
while(true){
if((i__20572_20618 < count__20571_20617)){
var w_20619 = cljs.core._nth.call(null,chunk__20570_20616,i__20572_20618);
cljs.core.remove_watch.call(null,w_20619,this$__$1);

var G__20620 = seq__20569_20615;
var G__20621 = chunk__20570_20616;
var G__20622 = count__20571_20617;
var G__20623 = (i__20572_20618 + (1));
seq__20569_20615 = G__20620;
chunk__20570_20616 = G__20621;
count__20571_20617 = G__20622;
i__20572_20618 = G__20623;
continue;
} else {
var temp__4126__auto___20624 = cljs.core.seq.call(null,seq__20569_20615);
if(temp__4126__auto___20624){
var seq__20569_20625__$1 = temp__4126__auto___20624;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20569_20625__$1)){
var c__14018__auto___20626 = cljs.core.chunk_first.call(null,seq__20569_20625__$1);
var G__20627 = cljs.core.chunk_rest.call(null,seq__20569_20625__$1);
var G__20628 = c__14018__auto___20626;
var G__20629 = cljs.core.count.call(null,c__14018__auto___20626);
var G__20630 = (0);
seq__20569_20615 = G__20627;
chunk__20570_20616 = G__20628;
count__20571_20617 = G__20629;
i__20572_20618 = G__20630;
continue;
} else {
var w_20631 = cljs.core.first.call(null,seq__20569_20625__$1);
cljs.core.remove_watch.call(null,w_20631,this$__$1);

var G__20632 = cljs.core.next.call(null,seq__20569_20625__$1);
var G__20633 = null;
var G__20634 = (0);
var G__20635 = (0);
seq__20569_20615 = G__20632;
chunk__20570_20616 = G__20633;
count__20571_20617 = G__20634;
i__20572_20618 = G__20635;
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
if(cljs.core.not.call(null,(function (){var or__13231__auto__ = self__.auto_run;
if(cljs.core.truth_(or__13231__auto__)){
return or__13231__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
var x__14759__auto___20636 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(typeof console !== 'undefined'){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(249),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__14759__auto___20636))].join(''))].join(''));
} else {
}

} else {
}

if(cljs.core.truth_((function (){var or__13231__auto__ = self__.auto_run;
if(cljs.core.truth_(or__13231__auto__)){
return or__13231__auto__;
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

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__13818__auto__,writer__13819__auto__,opt__13820__auto__){
return cljs.core._write.call(null,writer__13819__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__20637){
var map__20639 = p__20637;
var map__20639__$1 = ((cljs.core.seq_QMARK_.call(null,map__20639))?cljs.core.apply.call(null,cljs.core.hash_map,map__20639):map__20639);
var derefed = cljs.core.get.call(null,map__20639__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var on_dispose = cljs.core.get.call(null,map__20639__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var on_set = cljs.core.get.call(null,map__20639__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var auto_run = cljs.core.get.call(null,map__20639__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
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
var p__20637 = null;
if (arguments.length > 1) {
var G__20640__i = 0, G__20640__a = new Array(arguments.length -  1);
while (G__20640__i < G__20640__a.length) {G__20640__a[G__20640__i] = arguments[G__20640__i + 1]; ++G__20640__i;}
  p__20637 = new cljs.core.IndexedSeq(G__20640__a,0);
} 
return make_reaction__delegate.call(this,f,p__20637);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__20641){
var f = cljs.core.first(arglist__20641);
var p__20637 = cljs.core.rest(arglist__20641);
return make_reaction__delegate(f,p__20637);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map