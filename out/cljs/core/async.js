// Compiled by ClojureScript 0.0-2760 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t15753 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15753 = (function (f,fn_handler,meta15754){
this.f = f;
this.fn_handler = fn_handler;
this.meta15754 = meta15754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15753.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t15753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t15753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15755){
var self__ = this;
var _15755__$1 = this;
return self__.meta15754;
});

cljs.core.async.t15753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15755,meta15754__$1){
var self__ = this;
var _15755__$1 = this;
return (new cljs.core.async.t15753(self__.f,self__.fn_handler,meta15754__$1));
});

cljs.core.async.t15753.cljs$lang$type = true;

cljs.core.async.t15753.cljs$lang$ctorStr = "cljs.core.async/t15753";

cljs.core.async.t15753.cljs$lang$ctorPrWriter = (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t15753");
});

cljs.core.async.__GT_t15753 = (function __GT_t15753(f__$1,fn_handler__$1,meta15754){
return (new cljs.core.async.t15753(f__$1,fn_handler__$1,meta15754));
});

}

return (new cljs.core.async.t15753(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__15757 = buff;
if(G__15757){
var bit__3933__auto__ = null;
if(cljs.core.truth_((function (){var or__3252__auto__ = bit__3933__auto__;
if(cljs.core.truth_(or__3252__auto__)){
return or__3252__auto__;
} else {
return G__15757.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__15757.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15757);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15757);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_15758 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15758);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15758,ret){
return (function (){
return fn1.call(null,val_15758);
});})(val_15758,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4139__auto___15759 = n;
var x_15760 = (0);
while(true){
if((x_15760 < n__4139__auto___15759)){
(a[x_15760] = (0));

var G__15761 = (x_15760 + (1));
x_15760 = G__15761;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__15762 = (i + (1));
i = G__15762;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t15766 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15766 = (function (flag,alt_flag,meta15767){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15767 = meta15767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15766.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15766.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t15766.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t15766.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15768){
var self__ = this;
var _15768__$1 = this;
return self__.meta15767;
});})(flag))
;

cljs.core.async.t15766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15768,meta15767__$1){
var self__ = this;
var _15768__$1 = this;
return (new cljs.core.async.t15766(self__.flag,self__.alt_flag,meta15767__$1));
});})(flag))
;

cljs.core.async.t15766.cljs$lang$type = true;

cljs.core.async.t15766.cljs$lang$ctorStr = "cljs.core.async/t15766";

cljs.core.async.t15766.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t15766");
});})(flag))
;

cljs.core.async.__GT_t15766 = ((function (flag){
return (function __GT_t15766(flag__$1,alt_flag__$1,meta15767){
return (new cljs.core.async.t15766(flag__$1,alt_flag__$1,meta15767));
});})(flag))
;

}

return (new cljs.core.async.t15766(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t15772 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15772 = (function (cb,flag,alt_handler,meta15773){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15773 = meta15773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15772.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15772.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t15772.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t15772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15774){
var self__ = this;
var _15774__$1 = this;
return self__.meta15773;
});

cljs.core.async.t15772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15774,meta15773__$1){
var self__ = this;
var _15774__$1 = this;
return (new cljs.core.async.t15772(self__.cb,self__.flag,self__.alt_handler,meta15773__$1));
});

cljs.core.async.t15772.cljs$lang$type = true;

cljs.core.async.t15772.cljs$lang$ctorStr = "cljs.core.async/t15772";

cljs.core.async.t15772.cljs$lang$ctorPrWriter = (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t15772");
});

cljs.core.async.__GT_t15772 = (function __GT_t15772(cb__$1,flag__$1,alt_handler__$1,meta15773){
return (new cljs.core.async.t15772(cb__$1,flag__$1,alt_handler__$1,meta15773));
});

}

return (new cljs.core.async.t15772(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15775_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15775_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15776_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15776_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3252__auto__ = wport;
if(cljs.core.truth_(or__3252__auto__)){
return or__3252__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15777 = (i + (1));
i = G__15777;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3252__auto__ = ret;
if(cljs.core.truth_(or__3252__auto__)){
return or__3252__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3240__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3240__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3240__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__15778){
var map__15780 = p__15778;
var map__15780__$1 = ((cljs.core.seq_QMARK_.call(null,map__15780))?cljs.core.apply.call(null,cljs.core.hash_map,map__15780):map__15780);
var opts = map__15780__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__15778 = null;
if (arguments.length > 1) {
var G__15781__i = 0, G__15781__a = new Array(arguments.length -  1);
while (G__15781__i < G__15781__a.length) {G__15781__a[G__15781__i] = arguments[G__15781__i + 1]; ++G__15781__i;}
  p__15778 = new cljs.core.IndexedSeq(G__15781__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__15778);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15782){
var ports = cljs.core.first(arglist__15782);
var p__15778 = cljs.core.rest(arglist__15782);
return alts_BANG___delegate(ports,p__15778);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__6200__auto___15877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___15877){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___15877){
return (function (state_15853){
var state_val_15854 = (state_15853[(1)]);
if((state_val_15854 === (7))){
var inst_15849 = (state_15853[(2)]);
var state_15853__$1 = state_15853;
var statearr_15855_15878 = state_15853__$1;
(statearr_15855_15878[(2)] = inst_15849);

(statearr_15855_15878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (1))){
var state_15853__$1 = state_15853;
var statearr_15856_15879 = state_15853__$1;
(statearr_15856_15879[(2)] = null);

(statearr_15856_15879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (4))){
var inst_15832 = (state_15853[(7)]);
var inst_15832__$1 = (state_15853[(2)]);
var inst_15833 = (inst_15832__$1 == null);
var state_15853__$1 = (function (){var statearr_15857 = state_15853;
(statearr_15857[(7)] = inst_15832__$1);

return statearr_15857;
})();
if(cljs.core.truth_(inst_15833)){
var statearr_15858_15880 = state_15853__$1;
(statearr_15858_15880[(1)] = (5));

} else {
var statearr_15859_15881 = state_15853__$1;
(statearr_15859_15881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (13))){
var state_15853__$1 = state_15853;
var statearr_15860_15882 = state_15853__$1;
(statearr_15860_15882[(2)] = null);

(statearr_15860_15882[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (6))){
var inst_15832 = (state_15853[(7)]);
var state_15853__$1 = state_15853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15853__$1,(11),to,inst_15832);
} else {
if((state_val_15854 === (3))){
var inst_15851 = (state_15853[(2)]);
var state_15853__$1 = state_15853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15853__$1,inst_15851);
} else {
if((state_val_15854 === (12))){
var state_15853__$1 = state_15853;
var statearr_15861_15883 = state_15853__$1;
(statearr_15861_15883[(2)] = null);

(statearr_15861_15883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (2))){
var state_15853__$1 = state_15853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15853__$1,(4),from);
} else {
if((state_val_15854 === (11))){
var inst_15842 = (state_15853[(2)]);
var state_15853__$1 = state_15853;
if(cljs.core.truth_(inst_15842)){
var statearr_15862_15884 = state_15853__$1;
(statearr_15862_15884[(1)] = (12));

} else {
var statearr_15863_15885 = state_15853__$1;
(statearr_15863_15885[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (9))){
var state_15853__$1 = state_15853;
var statearr_15864_15886 = state_15853__$1;
(statearr_15864_15886[(2)] = null);

(statearr_15864_15886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (5))){
var state_15853__$1 = state_15853;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15865_15887 = state_15853__$1;
(statearr_15865_15887[(1)] = (8));

} else {
var statearr_15866_15888 = state_15853__$1;
(statearr_15866_15888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (14))){
var inst_15847 = (state_15853[(2)]);
var state_15853__$1 = state_15853;
var statearr_15867_15889 = state_15853__$1;
(statearr_15867_15889[(2)] = inst_15847);

(statearr_15867_15889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (10))){
var inst_15839 = (state_15853[(2)]);
var state_15853__$1 = state_15853;
var statearr_15868_15890 = state_15853__$1;
(statearr_15868_15890[(2)] = inst_15839);

(statearr_15868_15890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15854 === (8))){
var inst_15836 = cljs.core.async.close_BANG_.call(null,to);
var state_15853__$1 = state_15853;
var statearr_15869_15891 = state_15853__$1;
(statearr_15869_15891[(2)] = inst_15836);

(statearr_15869_15891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6200__auto___15877))
;
return ((function (switch__6144__auto__,c__6200__auto___15877){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_15873 = [null,null,null,null,null,null,null,null];
(statearr_15873[(0)] = state_machine__6145__auto__);

(statearr_15873[(1)] = (1));

return statearr_15873;
});
var state_machine__6145__auto____1 = (function (state_15853){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_15853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e15874){if((e15874 instanceof Object)){
var ex__6148__auto__ = e15874;
var statearr_15875_15892 = state_15853;
(statearr_15875_15892[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15893 = state_15853;
state_15853 = G__15893;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_15853){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_15853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___15877))
})();
var state__6202__auto__ = (function (){var statearr_15876 = f__6201__auto__.call(null);
(statearr_15876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___15877);

return statearr_15876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___15877))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__16077){
var vec__16078 = p__16077;
var v = cljs.core.nth.call(null,vec__16078,(0),null);
var p = cljs.core.nth.call(null,vec__16078,(1),null);
var job = vec__16078;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6200__auto___16260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___16260,res,vec__16078,v,p,job,jobs,results){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___16260,res,vec__16078,v,p,job,jobs,results){
return (function (state_16083){
var state_val_16084 = (state_16083[(1)]);
if((state_val_16084 === (2))){
var inst_16080 = (state_16083[(2)]);
var inst_16081 = cljs.core.async.close_BANG_.call(null,res);
var state_16083__$1 = (function (){var statearr_16085 = state_16083;
(statearr_16085[(7)] = inst_16080);

return statearr_16085;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16083__$1,inst_16081);
} else {
if((state_val_16084 === (1))){
var state_16083__$1 = state_16083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16083__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6200__auto___16260,res,vec__16078,v,p,job,jobs,results))
;
return ((function (switch__6144__auto__,c__6200__auto___16260,res,vec__16078,v,p,job,jobs,results){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_16089 = [null,null,null,null,null,null,null,null];
(statearr_16089[(0)] = state_machine__6145__auto__);

(statearr_16089[(1)] = (1));

return statearr_16089;
});
var state_machine__6145__auto____1 = (function (state_16083){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_16083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e16090){if((e16090 instanceof Object)){
var ex__6148__auto__ = e16090;
var statearr_16091_16261 = state_16083;
(statearr_16091_16261[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16262 = state_16083;
state_16083 = G__16262;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_16083){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_16083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___16260,res,vec__16078,v,p,job,jobs,results))
})();
var state__6202__auto__ = (function (){var statearr_16092 = f__6201__auto__.call(null);
(statearr_16092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___16260);

return statearr_16092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___16260,res,vec__16078,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16093){
var vec__16094 = p__16093;
var v = cljs.core.nth.call(null,vec__16094,(0),null);
var p = cljs.core.nth.call(null,vec__16094,(1),null);
var job = vec__16094;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4139__auto___16263 = n;
var __16264 = (0);
while(true){
if((__16264 < n__4139__auto___16263)){
var G__16095_16265 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16095_16265) {
case "async":
var c__6200__auto___16267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16264,c__6200__auto___16267,G__16095_16265,n__4139__auto___16263,jobs,results,process,async){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (__16264,c__6200__auto___16267,G__16095_16265,n__4139__auto___16263,jobs,results,process,async){
return (function (state_16108){
var state_val_16109 = (state_16108[(1)]);
if((state_val_16109 === (7))){
var inst_16104 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
var statearr_16110_16268 = state_16108__$1;
(statearr_16110_16268[(2)] = inst_16104);

(statearr_16110_16268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (6))){
var state_16108__$1 = state_16108;
var statearr_16111_16269 = state_16108__$1;
(statearr_16111_16269[(2)] = null);

(statearr_16111_16269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (5))){
var state_16108__$1 = state_16108;
var statearr_16112_16270 = state_16108__$1;
(statearr_16112_16270[(2)] = null);

(statearr_16112_16270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (4))){
var inst_16098 = (state_16108[(2)]);
var inst_16099 = async.call(null,inst_16098);
var state_16108__$1 = state_16108;
if(cljs.core.truth_(inst_16099)){
var statearr_16113_16271 = state_16108__$1;
(statearr_16113_16271[(1)] = (5));

} else {
var statearr_16114_16272 = state_16108__$1;
(statearr_16114_16272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (3))){
var inst_16106 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16108__$1,inst_16106);
} else {
if((state_val_16109 === (2))){
var state_16108__$1 = state_16108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16108__$1,(4),jobs);
} else {
if((state_val_16109 === (1))){
var state_16108__$1 = state_16108;
var statearr_16115_16273 = state_16108__$1;
(statearr_16115_16273[(2)] = null);

(statearr_16115_16273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16264,c__6200__auto___16267,G__16095_16265,n__4139__auto___16263,jobs,results,process,async))
;
return ((function (__16264,switch__6144__auto__,c__6200__auto___16267,G__16095_16265,n__4139__auto___16263,jobs,results,process,async){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_16119 = [null,null,null,null,null,null,null];
(statearr_16119[(0)] = state_machine__6145__auto__);

(statearr_16119[(1)] = (1));

return statearr_16119;
});
var state_machine__6145__auto____1 = (function (state_16108){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_16108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e16120){if((e16120 instanceof Object)){
var ex__6148__auto__ = e16120;
var statearr_16121_16274 = state_16108;
(statearr_16121_16274[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16275 = state_16108;
state_16108 = G__16275;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_16108){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_16108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(__16264,switch__6144__auto__,c__6200__auto___16267,G__16095_16265,n__4139__auto___16263,jobs,results,process,async))
})();
var state__6202__auto__ = (function (){var statearr_16122 = f__6201__auto__.call(null);
(statearr_16122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___16267);

return statearr_16122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(__16264,c__6200__auto___16267,G__16095_16265,n__4139__auto___16263,jobs,results,process,async))
);


break;
case "compute":
var c__6200__auto___16276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16264,c__6200__auto___16276,G__16095_16265,n__4139__auto___16263,jobs,results,process,async){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (__16264,c__6200__auto___16276,G__16095_16265,n__4139__auto___16263,jobs,results,process,async){
return (function (state_16135){
var state_val_16136 = (state_16135[(1)]);
if((state_val_16136 === (7))){
var inst_16131 = (state_16135[(2)]);
var state_16135__$1 = state_16135;
var statearr_16137_16277 = state_16135__$1;
(statearr_16137_16277[(2)] = inst_16131);

(statearr_16137_16277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16136 === (6))){
var state_16135__$1 = state_16135;
var statearr_16138_16278 = state_16135__$1;
(statearr_16138_16278[(2)] = null);

(statearr_16138_16278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16136 === (5))){
var state_16135__$1 = state_16135;
var statearr_16139_16279 = state_16135__$1;
(statearr_16139_16279[(2)] = null);

(statearr_16139_16279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16136 === (4))){
var inst_16125 = (state_16135[(2)]);
var inst_16126 = process.call(null,inst_16125);
var state_16135__$1 = state_16135;
if(cljs.core.truth_(inst_16126)){
var statearr_16140_16280 = state_16135__$1;
(statearr_16140_16280[(1)] = (5));

} else {
var statearr_16141_16281 = state_16135__$1;
(statearr_16141_16281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16136 === (3))){
var inst_16133 = (state_16135[(2)]);
var state_16135__$1 = state_16135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16135__$1,inst_16133);
} else {
if((state_val_16136 === (2))){
var state_16135__$1 = state_16135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16135__$1,(4),jobs);
} else {
if((state_val_16136 === (1))){
var state_16135__$1 = state_16135;
var statearr_16142_16282 = state_16135__$1;
(statearr_16142_16282[(2)] = null);

(statearr_16142_16282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16264,c__6200__auto___16276,G__16095_16265,n__4139__auto___16263,jobs,results,process,async))
;
return ((function (__16264,switch__6144__auto__,c__6200__auto___16276,G__16095_16265,n__4139__auto___16263,jobs,results,process,async){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_16146 = [null,null,null,null,null,null,null];
(statearr_16146[(0)] = state_machine__6145__auto__);

(statearr_16146[(1)] = (1));

return statearr_16146;
});
var state_machine__6145__auto____1 = (function (state_16135){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_16135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e16147){if((e16147 instanceof Object)){
var ex__6148__auto__ = e16147;
var statearr_16148_16283 = state_16135;
(statearr_16148_16283[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16284 = state_16135;
state_16135 = G__16284;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_16135){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_16135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(__16264,switch__6144__auto__,c__6200__auto___16276,G__16095_16265,n__4139__auto___16263,jobs,results,process,async))
})();
var state__6202__auto__ = (function (){var statearr_16149 = f__6201__auto__.call(null);
(statearr_16149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___16276);

return statearr_16149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(__16264,c__6200__auto___16276,G__16095_16265,n__4139__auto___16263,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16285 = (__16264 + (1));
__16264 = G__16285;
continue;
} else {
}
break;
}

var c__6200__auto___16286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___16286,jobs,results,process,async){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___16286,jobs,results,process,async){
return (function (state_16171){
var state_val_16172 = (state_16171[(1)]);
if((state_val_16172 === (9))){
var inst_16164 = (state_16171[(2)]);
var state_16171__$1 = (function (){var statearr_16173 = state_16171;
(statearr_16173[(7)] = inst_16164);

return statearr_16173;
})();
var statearr_16174_16287 = state_16171__$1;
(statearr_16174_16287[(2)] = null);

(statearr_16174_16287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16172 === (8))){
var inst_16157 = (state_16171[(8)]);
var inst_16162 = (state_16171[(2)]);
var state_16171__$1 = (function (){var statearr_16175 = state_16171;
(statearr_16175[(9)] = inst_16162);

return statearr_16175;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16171__$1,(9),results,inst_16157);
} else {
if((state_val_16172 === (7))){
var inst_16167 = (state_16171[(2)]);
var state_16171__$1 = state_16171;
var statearr_16176_16288 = state_16171__$1;
(statearr_16176_16288[(2)] = inst_16167);

(statearr_16176_16288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16172 === (6))){
var inst_16152 = (state_16171[(10)]);
var inst_16157 = (state_16171[(8)]);
var inst_16157__$1 = cljs.core.async.chan.call(null,(1));
var inst_16158 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16159 = [inst_16152,inst_16157__$1];
var inst_16160 = (new cljs.core.PersistentVector(null,2,(5),inst_16158,inst_16159,null));
var state_16171__$1 = (function (){var statearr_16177 = state_16171;
(statearr_16177[(8)] = inst_16157__$1);

return statearr_16177;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16171__$1,(8),jobs,inst_16160);
} else {
if((state_val_16172 === (5))){
var inst_16155 = cljs.core.async.close_BANG_.call(null,jobs);
var state_16171__$1 = state_16171;
var statearr_16178_16289 = state_16171__$1;
(statearr_16178_16289[(2)] = inst_16155);

(statearr_16178_16289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16172 === (4))){
var inst_16152 = (state_16171[(10)]);
var inst_16152__$1 = (state_16171[(2)]);
var inst_16153 = (inst_16152__$1 == null);
var state_16171__$1 = (function (){var statearr_16179 = state_16171;
(statearr_16179[(10)] = inst_16152__$1);

return statearr_16179;
})();
if(cljs.core.truth_(inst_16153)){
var statearr_16180_16290 = state_16171__$1;
(statearr_16180_16290[(1)] = (5));

} else {
var statearr_16181_16291 = state_16171__$1;
(statearr_16181_16291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16172 === (3))){
var inst_16169 = (state_16171[(2)]);
var state_16171__$1 = state_16171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16171__$1,inst_16169);
} else {
if((state_val_16172 === (2))){
var state_16171__$1 = state_16171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16171__$1,(4),from);
} else {
if((state_val_16172 === (1))){
var state_16171__$1 = state_16171;
var statearr_16182_16292 = state_16171__$1;
(statearr_16182_16292[(2)] = null);

(statearr_16182_16292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__6200__auto___16286,jobs,results,process,async))
;
return ((function (switch__6144__auto__,c__6200__auto___16286,jobs,results,process,async){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_16186 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16186[(0)] = state_machine__6145__auto__);

(statearr_16186[(1)] = (1));

return statearr_16186;
});
var state_machine__6145__auto____1 = (function (state_16171){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_16171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e16187){if((e16187 instanceof Object)){
var ex__6148__auto__ = e16187;
var statearr_16188_16293 = state_16171;
(statearr_16188_16293[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16294 = state_16171;
state_16171 = G__16294;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_16171){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_16171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___16286,jobs,results,process,async))
})();
var state__6202__auto__ = (function (){var statearr_16189 = f__6201__auto__.call(null);
(statearr_16189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___16286);

return statearr_16189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___16286,jobs,results,process,async))
);


var c__6200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto__,jobs,results,process,async){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto__,jobs,results,process,async){
return (function (state_16227){
var state_val_16228 = (state_16227[(1)]);
if((state_val_16228 === (7))){
var inst_16223 = (state_16227[(2)]);
var state_16227__$1 = state_16227;
var statearr_16229_16295 = state_16227__$1;
(statearr_16229_16295[(2)] = inst_16223);

(statearr_16229_16295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16228 === (20))){
var state_16227__$1 = state_16227;
var statearr_16230_16296 = state_16227__$1;
(statearr_16230_16296[(2)] = null);

(statearr_16230_16296[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16228 === (1))){
var state_16227__$1 = state_16227;
var statearr_16231_16297 = state_16227__$1;
(statearr_16231_16297[(2)] = null);

(statearr_16231_16297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16228 === (4))){
var inst_16192 = (state_16227[(7)]);
var inst_16192__$1 = (state_16227[(2)]);
var inst_16193 = (inst_16192__$1 == null);
var state_16227__$1 = (function (){var statearr_16232 = state_16227;
(statearr_16232[(7)] = inst_16192__$1);

return statearr_16232;
})();
if(cljs.core.truth_(inst_16193)){
var statearr_16233_16298 = state_16227__$1;
(statearr_16233_16298[(1)] = (5));

} else {
var statearr_16234_16299 = state_16227__$1;
(statearr_16234_16299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16228 === (15))){
var inst_16205 = (state_16227[(8)]);
var state_16227__$1 = state_16227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16227__$1,(18),to,inst_16205);
} else {
if((state_val_16228 === (21))){
var inst_16218 = (state_16227[(2)]);
var state_16227__$1 = state_16227;
var statearr_16235_16300 = state_16227__$1;
(statearr_16235_16300[(2)] = inst_16218);

(statearr_16235_16300[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16228 === (13))){
var inst_16220 = (state_16227[(2)]);
var state_16227__$1 = (function (){var statearr_16236 = state_16227;
(statearr_16236[(9)] = inst_16220);

return statearr_16236;
})();
var statearr_16237_16301 = state_16227__$1;
(statearr_16237_16301[(2)] = null);

(statearr_16237_16301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16228 === (6))){
var inst_16192 = (state_16227[(7)]);
var state_16227__$1 = state_16227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16227__$1,(11),inst_16192);
} else {
if((state_val_16228 === (17))){
var inst_16213 = (state_16227[(2)]);
var state_16227__$1 = state_16227;
if(cljs.core.truth_(inst_16213)){
var statearr_16238_16302 = state_16227__$1;
(statearr_16238_16302[(1)] = (19));

} else {
var statearr_16239_16303 = state_16227__$1;
(statearr_16239_16303[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16228 === (3))){
var inst_16225 = (state_16227[(2)]);
var state_16227__$1 = state_16227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16227__$1,inst_16225);
} else {
if((state_val_16228 === (12))){
var inst_16202 = (state_16227[(10)]);
var state_16227__$1 = state_16227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16227__$1,(14),inst_16202);
} else {
if((state_val_16228 === (2))){
var state_16227__$1 = state_16227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16227__$1,(4),results);
} else {
if((state_val_16228 === (19))){
var state_16227__$1 = state_16227;
var statearr_16240_16304 = state_16227__$1;
(statearr_16240_16304[(2)] = null);

(statearr_16240_16304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16228 === (11))){
var inst_16202 = (state_16227[(2)]);
var state_16227__$1 = (function (){var statearr_16241 = state_16227;
(statearr_16241[(10)] = inst_16202);

return statearr_16241;
})();
var statearr_16242_16305 = state_16227__$1;
(statearr_16242_16305[(2)] = null);

(statearr_16242_16305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16228 === (9))){
var state_16227__$1 = state_16227;
var statearr_16243_16306 = state_16227__$1;
(statearr_16243_16306[(2)] = null);

(statearr_16243_16306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16228 === (5))){
var state_16227__$1 = state_16227;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16244_16307 = state_16227__$1;
(statearr_16244_16307[(1)] = (8));

} else {
var statearr_16245_16308 = state_16227__$1;
(statearr_16245_16308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16228 === (14))){
var inst_16205 = (state_16227[(8)]);
var inst_16207 = (state_16227[(11)]);
var inst_16205__$1 = (state_16227[(2)]);
var inst_16206 = (inst_16205__$1 == null);
var inst_16207__$1 = cljs.core.not.call(null,inst_16206);
var state_16227__$1 = (function (){var statearr_16246 = state_16227;
(statearr_16246[(8)] = inst_16205__$1);

(statearr_16246[(11)] = inst_16207__$1);

return statearr_16246;
})();
if(inst_16207__$1){
var statearr_16247_16309 = state_16227__$1;
(statearr_16247_16309[(1)] = (15));

} else {
var statearr_16248_16310 = state_16227__$1;
(statearr_16248_16310[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16228 === (16))){
var inst_16207 = (state_16227[(11)]);
var state_16227__$1 = state_16227;
var statearr_16249_16311 = state_16227__$1;
(statearr_16249_16311[(2)] = inst_16207);

(statearr_16249_16311[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16228 === (10))){
var inst_16199 = (state_16227[(2)]);
var state_16227__$1 = state_16227;
var statearr_16250_16312 = state_16227__$1;
(statearr_16250_16312[(2)] = inst_16199);

(statearr_16250_16312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16228 === (18))){
var inst_16210 = (state_16227[(2)]);
var state_16227__$1 = state_16227;
var statearr_16251_16313 = state_16227__$1;
(statearr_16251_16313[(2)] = inst_16210);

(statearr_16251_16313[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16228 === (8))){
var inst_16196 = cljs.core.async.close_BANG_.call(null,to);
var state_16227__$1 = state_16227;
var statearr_16252_16314 = state_16227__$1;
(statearr_16252_16314[(2)] = inst_16196);

(statearr_16252_16314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6200__auto__,jobs,results,process,async))
;
return ((function (switch__6144__auto__,c__6200__auto__,jobs,results,process,async){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_16256 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16256[(0)] = state_machine__6145__auto__);

(statearr_16256[(1)] = (1));

return statearr_16256;
});
var state_machine__6145__auto____1 = (function (state_16227){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_16227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e16257){if((e16257 instanceof Object)){
var ex__6148__auto__ = e16257;
var statearr_16258_16315 = state_16227;
(statearr_16258_16315[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16316 = state_16227;
state_16227 = G__16316;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_16227){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_16227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto__,jobs,results,process,async))
})();
var state__6202__auto__ = (function (){var statearr_16259 = f__6201__auto__.call(null);
(statearr_16259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto__);

return statearr_16259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto__,jobs,results,process,async))
);

return c__6200__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6200__auto___16417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___16417,tc,fc){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___16417,tc,fc){
return (function (state_16392){
var state_val_16393 = (state_16392[(1)]);
if((state_val_16393 === (7))){
var inst_16388 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
var statearr_16394_16418 = state_16392__$1;
(statearr_16394_16418[(2)] = inst_16388);

(statearr_16394_16418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (1))){
var state_16392__$1 = state_16392;
var statearr_16395_16419 = state_16392__$1;
(statearr_16395_16419[(2)] = null);

(statearr_16395_16419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (4))){
var inst_16369 = (state_16392[(7)]);
var inst_16369__$1 = (state_16392[(2)]);
var inst_16370 = (inst_16369__$1 == null);
var state_16392__$1 = (function (){var statearr_16396 = state_16392;
(statearr_16396[(7)] = inst_16369__$1);

return statearr_16396;
})();
if(cljs.core.truth_(inst_16370)){
var statearr_16397_16420 = state_16392__$1;
(statearr_16397_16420[(1)] = (5));

} else {
var statearr_16398_16421 = state_16392__$1;
(statearr_16398_16421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (13))){
var state_16392__$1 = state_16392;
var statearr_16399_16422 = state_16392__$1;
(statearr_16399_16422[(2)] = null);

(statearr_16399_16422[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (6))){
var inst_16369 = (state_16392[(7)]);
var inst_16375 = p.call(null,inst_16369);
var state_16392__$1 = state_16392;
if(cljs.core.truth_(inst_16375)){
var statearr_16400_16423 = state_16392__$1;
(statearr_16400_16423[(1)] = (9));

} else {
var statearr_16401_16424 = state_16392__$1;
(statearr_16401_16424[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (3))){
var inst_16390 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16392__$1,inst_16390);
} else {
if((state_val_16393 === (12))){
var state_16392__$1 = state_16392;
var statearr_16402_16425 = state_16392__$1;
(statearr_16402_16425[(2)] = null);

(statearr_16402_16425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (2))){
var state_16392__$1 = state_16392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16392__$1,(4),ch);
} else {
if((state_val_16393 === (11))){
var inst_16369 = (state_16392[(7)]);
var inst_16379 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16392__$1,(8),inst_16379,inst_16369);
} else {
if((state_val_16393 === (9))){
var state_16392__$1 = state_16392;
var statearr_16403_16426 = state_16392__$1;
(statearr_16403_16426[(2)] = tc);

(statearr_16403_16426[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (5))){
var inst_16372 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16373 = cljs.core.async.close_BANG_.call(null,fc);
var state_16392__$1 = (function (){var statearr_16404 = state_16392;
(statearr_16404[(8)] = inst_16372);

return statearr_16404;
})();
var statearr_16405_16427 = state_16392__$1;
(statearr_16405_16427[(2)] = inst_16373);

(statearr_16405_16427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (14))){
var inst_16386 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
var statearr_16406_16428 = state_16392__$1;
(statearr_16406_16428[(2)] = inst_16386);

(statearr_16406_16428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (10))){
var state_16392__$1 = state_16392;
var statearr_16407_16429 = state_16392__$1;
(statearr_16407_16429[(2)] = fc);

(statearr_16407_16429[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (8))){
var inst_16381 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
if(cljs.core.truth_(inst_16381)){
var statearr_16408_16430 = state_16392__$1;
(statearr_16408_16430[(1)] = (12));

} else {
var statearr_16409_16431 = state_16392__$1;
(statearr_16409_16431[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6200__auto___16417,tc,fc))
;
return ((function (switch__6144__auto__,c__6200__auto___16417,tc,fc){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_16413 = [null,null,null,null,null,null,null,null,null];
(statearr_16413[(0)] = state_machine__6145__auto__);

(statearr_16413[(1)] = (1));

return statearr_16413;
});
var state_machine__6145__auto____1 = (function (state_16392){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_16392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e16414){if((e16414 instanceof Object)){
var ex__6148__auto__ = e16414;
var statearr_16415_16432 = state_16392;
(statearr_16415_16432[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16433 = state_16392;
state_16392 = G__16433;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_16392){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_16392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___16417,tc,fc))
})();
var state__6202__auto__ = (function (){var statearr_16416 = f__6201__auto__.call(null);
(statearr_16416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___16417);

return statearr_16416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___16417,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__6200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto__){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto__){
return (function (state_16480){
var state_val_16481 = (state_16480[(1)]);
if((state_val_16481 === (7))){
var inst_16476 = (state_16480[(2)]);
var state_16480__$1 = state_16480;
var statearr_16482_16498 = state_16480__$1;
(statearr_16482_16498[(2)] = inst_16476);

(statearr_16482_16498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16481 === (6))){
var inst_16469 = (state_16480[(7)]);
var inst_16466 = (state_16480[(8)]);
var inst_16473 = f.call(null,inst_16466,inst_16469);
var inst_16466__$1 = inst_16473;
var state_16480__$1 = (function (){var statearr_16483 = state_16480;
(statearr_16483[(8)] = inst_16466__$1);

return statearr_16483;
})();
var statearr_16484_16499 = state_16480__$1;
(statearr_16484_16499[(2)] = null);

(statearr_16484_16499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16481 === (5))){
var inst_16466 = (state_16480[(8)]);
var state_16480__$1 = state_16480;
var statearr_16485_16500 = state_16480__$1;
(statearr_16485_16500[(2)] = inst_16466);

(statearr_16485_16500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16481 === (4))){
var inst_16469 = (state_16480[(7)]);
var inst_16469__$1 = (state_16480[(2)]);
var inst_16470 = (inst_16469__$1 == null);
var state_16480__$1 = (function (){var statearr_16486 = state_16480;
(statearr_16486[(7)] = inst_16469__$1);

return statearr_16486;
})();
if(cljs.core.truth_(inst_16470)){
var statearr_16487_16501 = state_16480__$1;
(statearr_16487_16501[(1)] = (5));

} else {
var statearr_16488_16502 = state_16480__$1;
(statearr_16488_16502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16481 === (3))){
var inst_16478 = (state_16480[(2)]);
var state_16480__$1 = state_16480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16480__$1,inst_16478);
} else {
if((state_val_16481 === (2))){
var state_16480__$1 = state_16480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16480__$1,(4),ch);
} else {
if((state_val_16481 === (1))){
var inst_16466 = init;
var state_16480__$1 = (function (){var statearr_16489 = state_16480;
(statearr_16489[(8)] = inst_16466);

return statearr_16489;
})();
var statearr_16490_16503 = state_16480__$1;
(statearr_16490_16503[(2)] = null);

(statearr_16490_16503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6200__auto__))
;
return ((function (switch__6144__auto__,c__6200__auto__){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_16494 = [null,null,null,null,null,null,null,null,null];
(statearr_16494[(0)] = state_machine__6145__auto__);

(statearr_16494[(1)] = (1));

return statearr_16494;
});
var state_machine__6145__auto____1 = (function (state_16480){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_16480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e16495){if((e16495 instanceof Object)){
var ex__6148__auto__ = e16495;
var statearr_16496_16504 = state_16480;
(statearr_16496_16504[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16505 = state_16480;
state_16480 = G__16505;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_16480){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_16480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto__))
})();
var state__6202__auto__ = (function (){var statearr_16497 = f__6201__auto__.call(null);
(statearr_16497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto__);

return statearr_16497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto__))
);

return c__6200__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto__){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto__){
return (function (state_16579){
var state_val_16580 = (state_16579[(1)]);
if((state_val_16580 === (7))){
var inst_16561 = (state_16579[(2)]);
var state_16579__$1 = state_16579;
var statearr_16581_16604 = state_16579__$1;
(statearr_16581_16604[(2)] = inst_16561);

(statearr_16581_16604[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16580 === (1))){
var inst_16555 = cljs.core.seq.call(null,coll);
var inst_16556 = inst_16555;
var state_16579__$1 = (function (){var statearr_16582 = state_16579;
(statearr_16582[(7)] = inst_16556);

return statearr_16582;
})();
var statearr_16583_16605 = state_16579__$1;
(statearr_16583_16605[(2)] = null);

(statearr_16583_16605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16580 === (4))){
var inst_16556 = (state_16579[(7)]);
var inst_16559 = cljs.core.first.call(null,inst_16556);
var state_16579__$1 = state_16579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16579__$1,(7),ch,inst_16559);
} else {
if((state_val_16580 === (13))){
var inst_16573 = (state_16579[(2)]);
var state_16579__$1 = state_16579;
var statearr_16584_16606 = state_16579__$1;
(statearr_16584_16606[(2)] = inst_16573);

(statearr_16584_16606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16580 === (6))){
var inst_16564 = (state_16579[(2)]);
var state_16579__$1 = state_16579;
if(cljs.core.truth_(inst_16564)){
var statearr_16585_16607 = state_16579__$1;
(statearr_16585_16607[(1)] = (8));

} else {
var statearr_16586_16608 = state_16579__$1;
(statearr_16586_16608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16580 === (3))){
var inst_16577 = (state_16579[(2)]);
var state_16579__$1 = state_16579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16579__$1,inst_16577);
} else {
if((state_val_16580 === (12))){
var state_16579__$1 = state_16579;
var statearr_16587_16609 = state_16579__$1;
(statearr_16587_16609[(2)] = null);

(statearr_16587_16609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16580 === (2))){
var inst_16556 = (state_16579[(7)]);
var state_16579__$1 = state_16579;
if(cljs.core.truth_(inst_16556)){
var statearr_16588_16610 = state_16579__$1;
(statearr_16588_16610[(1)] = (4));

} else {
var statearr_16589_16611 = state_16579__$1;
(statearr_16589_16611[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16580 === (11))){
var inst_16570 = cljs.core.async.close_BANG_.call(null,ch);
var state_16579__$1 = state_16579;
var statearr_16590_16612 = state_16579__$1;
(statearr_16590_16612[(2)] = inst_16570);

(statearr_16590_16612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16580 === (9))){
var state_16579__$1 = state_16579;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16591_16613 = state_16579__$1;
(statearr_16591_16613[(1)] = (11));

} else {
var statearr_16592_16614 = state_16579__$1;
(statearr_16592_16614[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16580 === (5))){
var inst_16556 = (state_16579[(7)]);
var state_16579__$1 = state_16579;
var statearr_16593_16615 = state_16579__$1;
(statearr_16593_16615[(2)] = inst_16556);

(statearr_16593_16615[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16580 === (10))){
var inst_16575 = (state_16579[(2)]);
var state_16579__$1 = state_16579;
var statearr_16594_16616 = state_16579__$1;
(statearr_16594_16616[(2)] = inst_16575);

(statearr_16594_16616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16580 === (8))){
var inst_16556 = (state_16579[(7)]);
var inst_16566 = cljs.core.next.call(null,inst_16556);
var inst_16556__$1 = inst_16566;
var state_16579__$1 = (function (){var statearr_16595 = state_16579;
(statearr_16595[(7)] = inst_16556__$1);

return statearr_16595;
})();
var statearr_16596_16617 = state_16579__$1;
(statearr_16596_16617[(2)] = null);

(statearr_16596_16617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6200__auto__))
;
return ((function (switch__6144__auto__,c__6200__auto__){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_16600 = [null,null,null,null,null,null,null,null];
(statearr_16600[(0)] = state_machine__6145__auto__);

(statearr_16600[(1)] = (1));

return statearr_16600;
});
var state_machine__6145__auto____1 = (function (state_16579){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_16579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e16601){if((e16601 instanceof Object)){
var ex__6148__auto__ = e16601;
var statearr_16602_16618 = state_16579;
(statearr_16602_16618[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16619 = state_16579;
state_16579 = G__16619;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_16579){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_16579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto__))
})();
var state__6202__auto__ = (function (){var statearr_16603 = f__6201__auto__.call(null);
(statearr_16603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto__);

return statearr_16603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto__))
);

return c__6200__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj16621 = {};
return obj16621;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3240__auto__ = _;
if(and__3240__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3240__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__3896__auto__ = (((_ == null))?null:_);
return (function (){var or__3252__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj16623 = {};
return obj16623;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t16845 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16845 = (function (cs,ch,mult,meta16846){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16846 = meta16846;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16845.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t16845.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t16845.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t16845.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t16845.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16845.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t16845.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16847){
var self__ = this;
var _16847__$1 = this;
return self__.meta16846;
});})(cs))
;

cljs.core.async.t16845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16847,meta16846__$1){
var self__ = this;
var _16847__$1 = this;
return (new cljs.core.async.t16845(self__.cs,self__.ch,self__.mult,meta16846__$1));
});})(cs))
;

cljs.core.async.t16845.cljs$lang$type = true;

cljs.core.async.t16845.cljs$lang$ctorStr = "cljs.core.async/t16845";

cljs.core.async.t16845.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t16845");
});})(cs))
;

cljs.core.async.__GT_t16845 = ((function (cs){
return (function __GT_t16845(cs__$1,ch__$1,mult__$1,meta16846){
return (new cljs.core.async.t16845(cs__$1,ch__$1,mult__$1,meta16846));
});})(cs))
;

}

return (new cljs.core.async.t16845(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6200__auto___17066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___17066,cs,m,dchan,dctr,done){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___17066,cs,m,dchan,dctr,done){
return (function (state_16978){
var state_val_16979 = (state_16978[(1)]);
if((state_val_16979 === (7))){
var inst_16974 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_16980_17067 = state_16978__$1;
(statearr_16980_17067[(2)] = inst_16974);

(statearr_16980_17067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (20))){
var inst_16879 = (state_16978[(7)]);
var inst_16889 = cljs.core.first.call(null,inst_16879);
var inst_16890 = cljs.core.nth.call(null,inst_16889,(0),null);
var inst_16891 = cljs.core.nth.call(null,inst_16889,(1),null);
var state_16978__$1 = (function (){var statearr_16981 = state_16978;
(statearr_16981[(8)] = inst_16890);

return statearr_16981;
})();
if(cljs.core.truth_(inst_16891)){
var statearr_16982_17068 = state_16978__$1;
(statearr_16982_17068[(1)] = (22));

} else {
var statearr_16983_17069 = state_16978__$1;
(statearr_16983_17069[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (27))){
var inst_16926 = (state_16978[(9)]);
var inst_16850 = (state_16978[(10)]);
var inst_16919 = (state_16978[(11)]);
var inst_16921 = (state_16978[(12)]);
var inst_16926__$1 = cljs.core._nth.call(null,inst_16919,inst_16921);
var inst_16927 = cljs.core.async.put_BANG_.call(null,inst_16926__$1,inst_16850,done);
var state_16978__$1 = (function (){var statearr_16984 = state_16978;
(statearr_16984[(9)] = inst_16926__$1);

return statearr_16984;
})();
if(cljs.core.truth_(inst_16927)){
var statearr_16985_17070 = state_16978__$1;
(statearr_16985_17070[(1)] = (30));

} else {
var statearr_16986_17071 = state_16978__$1;
(statearr_16986_17071[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (1))){
var state_16978__$1 = state_16978;
var statearr_16987_17072 = state_16978__$1;
(statearr_16987_17072[(2)] = null);

(statearr_16987_17072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (24))){
var inst_16879 = (state_16978[(7)]);
var inst_16896 = (state_16978[(2)]);
var inst_16897 = cljs.core.next.call(null,inst_16879);
var inst_16859 = inst_16897;
var inst_16860 = null;
var inst_16861 = (0);
var inst_16862 = (0);
var state_16978__$1 = (function (){var statearr_16988 = state_16978;
(statearr_16988[(13)] = inst_16862);

(statearr_16988[(14)] = inst_16860);

(statearr_16988[(15)] = inst_16859);

(statearr_16988[(16)] = inst_16861);

(statearr_16988[(17)] = inst_16896);

return statearr_16988;
})();
var statearr_16989_17073 = state_16978__$1;
(statearr_16989_17073[(2)] = null);

(statearr_16989_17073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (39))){
var state_16978__$1 = state_16978;
var statearr_16993_17074 = state_16978__$1;
(statearr_16993_17074[(2)] = null);

(statearr_16993_17074[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (4))){
var inst_16850 = (state_16978[(10)]);
var inst_16850__$1 = (state_16978[(2)]);
var inst_16851 = (inst_16850__$1 == null);
var state_16978__$1 = (function (){var statearr_16994 = state_16978;
(statearr_16994[(10)] = inst_16850__$1);

return statearr_16994;
})();
if(cljs.core.truth_(inst_16851)){
var statearr_16995_17075 = state_16978__$1;
(statearr_16995_17075[(1)] = (5));

} else {
var statearr_16996_17076 = state_16978__$1;
(statearr_16996_17076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (15))){
var inst_16862 = (state_16978[(13)]);
var inst_16860 = (state_16978[(14)]);
var inst_16859 = (state_16978[(15)]);
var inst_16861 = (state_16978[(16)]);
var inst_16875 = (state_16978[(2)]);
var inst_16876 = (inst_16862 + (1));
var tmp16990 = inst_16860;
var tmp16991 = inst_16859;
var tmp16992 = inst_16861;
var inst_16859__$1 = tmp16991;
var inst_16860__$1 = tmp16990;
var inst_16861__$1 = tmp16992;
var inst_16862__$1 = inst_16876;
var state_16978__$1 = (function (){var statearr_16997 = state_16978;
(statearr_16997[(13)] = inst_16862__$1);

(statearr_16997[(14)] = inst_16860__$1);

(statearr_16997[(15)] = inst_16859__$1);

(statearr_16997[(18)] = inst_16875);

(statearr_16997[(16)] = inst_16861__$1);

return statearr_16997;
})();
var statearr_16998_17077 = state_16978__$1;
(statearr_16998_17077[(2)] = null);

(statearr_16998_17077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (21))){
var inst_16900 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_17002_17078 = state_16978__$1;
(statearr_17002_17078[(2)] = inst_16900);

(statearr_17002_17078[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (31))){
var inst_16926 = (state_16978[(9)]);
var inst_16930 = done.call(null,null);
var inst_16931 = cljs.core.async.untap_STAR_.call(null,m,inst_16926);
var state_16978__$1 = (function (){var statearr_17003 = state_16978;
(statearr_17003[(19)] = inst_16930);

return statearr_17003;
})();
var statearr_17004_17079 = state_16978__$1;
(statearr_17004_17079[(2)] = inst_16931);

(statearr_17004_17079[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (32))){
var inst_16919 = (state_16978[(11)]);
var inst_16921 = (state_16978[(12)]);
var inst_16920 = (state_16978[(20)]);
var inst_16918 = (state_16978[(21)]);
var inst_16933 = (state_16978[(2)]);
var inst_16934 = (inst_16921 + (1));
var tmp16999 = inst_16919;
var tmp17000 = inst_16920;
var tmp17001 = inst_16918;
var inst_16918__$1 = tmp17001;
var inst_16919__$1 = tmp16999;
var inst_16920__$1 = tmp17000;
var inst_16921__$1 = inst_16934;
var state_16978__$1 = (function (){var statearr_17005 = state_16978;
(statearr_17005[(22)] = inst_16933);

(statearr_17005[(11)] = inst_16919__$1);

(statearr_17005[(12)] = inst_16921__$1);

(statearr_17005[(20)] = inst_16920__$1);

(statearr_17005[(21)] = inst_16918__$1);

return statearr_17005;
})();
var statearr_17006_17080 = state_16978__$1;
(statearr_17006_17080[(2)] = null);

(statearr_17006_17080[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (40))){
var inst_16946 = (state_16978[(23)]);
var inst_16950 = done.call(null,null);
var inst_16951 = cljs.core.async.untap_STAR_.call(null,m,inst_16946);
var state_16978__$1 = (function (){var statearr_17007 = state_16978;
(statearr_17007[(24)] = inst_16950);

return statearr_17007;
})();
var statearr_17008_17081 = state_16978__$1;
(statearr_17008_17081[(2)] = inst_16951);

(statearr_17008_17081[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (33))){
var inst_16937 = (state_16978[(25)]);
var inst_16939 = cljs.core.chunked_seq_QMARK_.call(null,inst_16937);
var state_16978__$1 = state_16978;
if(inst_16939){
var statearr_17009_17082 = state_16978__$1;
(statearr_17009_17082[(1)] = (36));

} else {
var statearr_17010_17083 = state_16978__$1;
(statearr_17010_17083[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (13))){
var inst_16869 = (state_16978[(26)]);
var inst_16872 = cljs.core.async.close_BANG_.call(null,inst_16869);
var state_16978__$1 = state_16978;
var statearr_17011_17084 = state_16978__$1;
(statearr_17011_17084[(2)] = inst_16872);

(statearr_17011_17084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (22))){
var inst_16890 = (state_16978[(8)]);
var inst_16893 = cljs.core.async.close_BANG_.call(null,inst_16890);
var state_16978__$1 = state_16978;
var statearr_17012_17085 = state_16978__$1;
(statearr_17012_17085[(2)] = inst_16893);

(statearr_17012_17085[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (36))){
var inst_16937 = (state_16978[(25)]);
var inst_16941 = cljs.core.chunk_first.call(null,inst_16937);
var inst_16942 = cljs.core.chunk_rest.call(null,inst_16937);
var inst_16943 = cljs.core.count.call(null,inst_16941);
var inst_16918 = inst_16942;
var inst_16919 = inst_16941;
var inst_16920 = inst_16943;
var inst_16921 = (0);
var state_16978__$1 = (function (){var statearr_17013 = state_16978;
(statearr_17013[(11)] = inst_16919);

(statearr_17013[(12)] = inst_16921);

(statearr_17013[(20)] = inst_16920);

(statearr_17013[(21)] = inst_16918);

return statearr_17013;
})();
var statearr_17014_17086 = state_16978__$1;
(statearr_17014_17086[(2)] = null);

(statearr_17014_17086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (41))){
var inst_16937 = (state_16978[(25)]);
var inst_16953 = (state_16978[(2)]);
var inst_16954 = cljs.core.next.call(null,inst_16937);
var inst_16918 = inst_16954;
var inst_16919 = null;
var inst_16920 = (0);
var inst_16921 = (0);
var state_16978__$1 = (function (){var statearr_17015 = state_16978;
(statearr_17015[(27)] = inst_16953);

(statearr_17015[(11)] = inst_16919);

(statearr_17015[(12)] = inst_16921);

(statearr_17015[(20)] = inst_16920);

(statearr_17015[(21)] = inst_16918);

return statearr_17015;
})();
var statearr_17016_17087 = state_16978__$1;
(statearr_17016_17087[(2)] = null);

(statearr_17016_17087[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (43))){
var state_16978__$1 = state_16978;
var statearr_17017_17088 = state_16978__$1;
(statearr_17017_17088[(2)] = null);

(statearr_17017_17088[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (29))){
var inst_16962 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_17018_17089 = state_16978__$1;
(statearr_17018_17089[(2)] = inst_16962);

(statearr_17018_17089[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (44))){
var inst_16971 = (state_16978[(2)]);
var state_16978__$1 = (function (){var statearr_17019 = state_16978;
(statearr_17019[(28)] = inst_16971);

return statearr_17019;
})();
var statearr_17020_17090 = state_16978__$1;
(statearr_17020_17090[(2)] = null);

(statearr_17020_17090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (6))){
var inst_16910 = (state_16978[(29)]);
var inst_16909 = cljs.core.deref.call(null,cs);
var inst_16910__$1 = cljs.core.keys.call(null,inst_16909);
var inst_16911 = cljs.core.count.call(null,inst_16910__$1);
var inst_16912 = cljs.core.reset_BANG_.call(null,dctr,inst_16911);
var inst_16917 = cljs.core.seq.call(null,inst_16910__$1);
var inst_16918 = inst_16917;
var inst_16919 = null;
var inst_16920 = (0);
var inst_16921 = (0);
var state_16978__$1 = (function (){var statearr_17021 = state_16978;
(statearr_17021[(30)] = inst_16912);

(statearr_17021[(11)] = inst_16919);

(statearr_17021[(12)] = inst_16921);

(statearr_17021[(20)] = inst_16920);

(statearr_17021[(29)] = inst_16910__$1);

(statearr_17021[(21)] = inst_16918);

return statearr_17021;
})();
var statearr_17022_17091 = state_16978__$1;
(statearr_17022_17091[(2)] = null);

(statearr_17022_17091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (28))){
var inst_16937 = (state_16978[(25)]);
var inst_16918 = (state_16978[(21)]);
var inst_16937__$1 = cljs.core.seq.call(null,inst_16918);
var state_16978__$1 = (function (){var statearr_17023 = state_16978;
(statearr_17023[(25)] = inst_16937__$1);

return statearr_17023;
})();
if(inst_16937__$1){
var statearr_17024_17092 = state_16978__$1;
(statearr_17024_17092[(1)] = (33));

} else {
var statearr_17025_17093 = state_16978__$1;
(statearr_17025_17093[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (25))){
var inst_16921 = (state_16978[(12)]);
var inst_16920 = (state_16978[(20)]);
var inst_16923 = (inst_16921 < inst_16920);
var inst_16924 = inst_16923;
var state_16978__$1 = state_16978;
if(cljs.core.truth_(inst_16924)){
var statearr_17026_17094 = state_16978__$1;
(statearr_17026_17094[(1)] = (27));

} else {
var statearr_17027_17095 = state_16978__$1;
(statearr_17027_17095[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (34))){
var state_16978__$1 = state_16978;
var statearr_17028_17096 = state_16978__$1;
(statearr_17028_17096[(2)] = null);

(statearr_17028_17096[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (17))){
var state_16978__$1 = state_16978;
var statearr_17029_17097 = state_16978__$1;
(statearr_17029_17097[(2)] = null);

(statearr_17029_17097[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (3))){
var inst_16976 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16978__$1,inst_16976);
} else {
if((state_val_16979 === (12))){
var inst_16905 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_17030_17098 = state_16978__$1;
(statearr_17030_17098[(2)] = inst_16905);

(statearr_17030_17098[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (2))){
var state_16978__$1 = state_16978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16978__$1,(4),ch);
} else {
if((state_val_16979 === (23))){
var state_16978__$1 = state_16978;
var statearr_17031_17099 = state_16978__$1;
(statearr_17031_17099[(2)] = null);

(statearr_17031_17099[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (35))){
var inst_16960 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_17032_17100 = state_16978__$1;
(statearr_17032_17100[(2)] = inst_16960);

(statearr_17032_17100[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (19))){
var inst_16879 = (state_16978[(7)]);
var inst_16883 = cljs.core.chunk_first.call(null,inst_16879);
var inst_16884 = cljs.core.chunk_rest.call(null,inst_16879);
var inst_16885 = cljs.core.count.call(null,inst_16883);
var inst_16859 = inst_16884;
var inst_16860 = inst_16883;
var inst_16861 = inst_16885;
var inst_16862 = (0);
var state_16978__$1 = (function (){var statearr_17033 = state_16978;
(statearr_17033[(13)] = inst_16862);

(statearr_17033[(14)] = inst_16860);

(statearr_17033[(15)] = inst_16859);

(statearr_17033[(16)] = inst_16861);

return statearr_17033;
})();
var statearr_17034_17101 = state_16978__$1;
(statearr_17034_17101[(2)] = null);

(statearr_17034_17101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (11))){
var inst_16879 = (state_16978[(7)]);
var inst_16859 = (state_16978[(15)]);
var inst_16879__$1 = cljs.core.seq.call(null,inst_16859);
var state_16978__$1 = (function (){var statearr_17035 = state_16978;
(statearr_17035[(7)] = inst_16879__$1);

return statearr_17035;
})();
if(inst_16879__$1){
var statearr_17036_17102 = state_16978__$1;
(statearr_17036_17102[(1)] = (16));

} else {
var statearr_17037_17103 = state_16978__$1;
(statearr_17037_17103[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (9))){
var inst_16907 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_17038_17104 = state_16978__$1;
(statearr_17038_17104[(2)] = inst_16907);

(statearr_17038_17104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (5))){
var inst_16857 = cljs.core.deref.call(null,cs);
var inst_16858 = cljs.core.seq.call(null,inst_16857);
var inst_16859 = inst_16858;
var inst_16860 = null;
var inst_16861 = (0);
var inst_16862 = (0);
var state_16978__$1 = (function (){var statearr_17039 = state_16978;
(statearr_17039[(13)] = inst_16862);

(statearr_17039[(14)] = inst_16860);

(statearr_17039[(15)] = inst_16859);

(statearr_17039[(16)] = inst_16861);

return statearr_17039;
})();
var statearr_17040_17105 = state_16978__$1;
(statearr_17040_17105[(2)] = null);

(statearr_17040_17105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (14))){
var state_16978__$1 = state_16978;
var statearr_17041_17106 = state_16978__$1;
(statearr_17041_17106[(2)] = null);

(statearr_17041_17106[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (45))){
var inst_16968 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_17042_17107 = state_16978__$1;
(statearr_17042_17107[(2)] = inst_16968);

(statearr_17042_17107[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (26))){
var inst_16910 = (state_16978[(29)]);
var inst_16964 = (state_16978[(2)]);
var inst_16965 = cljs.core.seq.call(null,inst_16910);
var state_16978__$1 = (function (){var statearr_17043 = state_16978;
(statearr_17043[(31)] = inst_16964);

return statearr_17043;
})();
if(inst_16965){
var statearr_17044_17108 = state_16978__$1;
(statearr_17044_17108[(1)] = (42));

} else {
var statearr_17045_17109 = state_16978__$1;
(statearr_17045_17109[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (16))){
var inst_16879 = (state_16978[(7)]);
var inst_16881 = cljs.core.chunked_seq_QMARK_.call(null,inst_16879);
var state_16978__$1 = state_16978;
if(inst_16881){
var statearr_17046_17110 = state_16978__$1;
(statearr_17046_17110[(1)] = (19));

} else {
var statearr_17047_17111 = state_16978__$1;
(statearr_17047_17111[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (38))){
var inst_16957 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_17048_17112 = state_16978__$1;
(statearr_17048_17112[(2)] = inst_16957);

(statearr_17048_17112[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (30))){
var state_16978__$1 = state_16978;
var statearr_17049_17113 = state_16978__$1;
(statearr_17049_17113[(2)] = null);

(statearr_17049_17113[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (10))){
var inst_16862 = (state_16978[(13)]);
var inst_16860 = (state_16978[(14)]);
var inst_16868 = cljs.core._nth.call(null,inst_16860,inst_16862);
var inst_16869 = cljs.core.nth.call(null,inst_16868,(0),null);
var inst_16870 = cljs.core.nth.call(null,inst_16868,(1),null);
var state_16978__$1 = (function (){var statearr_17050 = state_16978;
(statearr_17050[(26)] = inst_16869);

return statearr_17050;
})();
if(cljs.core.truth_(inst_16870)){
var statearr_17051_17114 = state_16978__$1;
(statearr_17051_17114[(1)] = (13));

} else {
var statearr_17052_17115 = state_16978__$1;
(statearr_17052_17115[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (18))){
var inst_16903 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_17053_17116 = state_16978__$1;
(statearr_17053_17116[(2)] = inst_16903);

(statearr_17053_17116[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (42))){
var state_16978__$1 = state_16978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16978__$1,(45),dchan);
} else {
if((state_val_16979 === (37))){
var inst_16946 = (state_16978[(23)]);
var inst_16937 = (state_16978[(25)]);
var inst_16850 = (state_16978[(10)]);
var inst_16946__$1 = cljs.core.first.call(null,inst_16937);
var inst_16947 = cljs.core.async.put_BANG_.call(null,inst_16946__$1,inst_16850,done);
var state_16978__$1 = (function (){var statearr_17054 = state_16978;
(statearr_17054[(23)] = inst_16946__$1);

return statearr_17054;
})();
if(cljs.core.truth_(inst_16947)){
var statearr_17055_17117 = state_16978__$1;
(statearr_17055_17117[(1)] = (39));

} else {
var statearr_17056_17118 = state_16978__$1;
(statearr_17056_17118[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (8))){
var inst_16862 = (state_16978[(13)]);
var inst_16861 = (state_16978[(16)]);
var inst_16864 = (inst_16862 < inst_16861);
var inst_16865 = inst_16864;
var state_16978__$1 = state_16978;
if(cljs.core.truth_(inst_16865)){
var statearr_17057_17119 = state_16978__$1;
(statearr_17057_17119[(1)] = (10));

} else {
var statearr_17058_17120 = state_16978__$1;
(statearr_17058_17120[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6200__auto___17066,cs,m,dchan,dctr,done))
;
return ((function (switch__6144__auto__,c__6200__auto___17066,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_17062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17062[(0)] = state_machine__6145__auto__);

(statearr_17062[(1)] = (1));

return statearr_17062;
});
var state_machine__6145__auto____1 = (function (state_16978){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_16978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e17063){if((e17063 instanceof Object)){
var ex__6148__auto__ = e17063;
var statearr_17064_17121 = state_16978;
(statearr_17064_17121[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17122 = state_16978;
state_16978 = G__17122;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_16978){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_16978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___17066,cs,m,dchan,dctr,done))
})();
var state__6202__auto__ = (function (){var statearr_17065 = f__6201__auto__.call(null);
(statearr_17065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___17066);

return statearr_17065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___17066,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj17124 = {};
return obj17124;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__17125){
var map__17130 = p__17125;
var map__17130__$1 = ((cljs.core.seq_QMARK_.call(null,map__17130))?cljs.core.apply.call(null,cljs.core.hash_map,map__17130):map__17130);
var opts = map__17130__$1;
var statearr_17131_17134 = state;
(statearr_17131_17134[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__17130,map__17130__$1,opts){
return (function (val){
var statearr_17132_17135 = state;
(statearr_17132_17135[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17130,map__17130__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_17133_17136 = state;
(statearr_17133_17136[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__17125 = null;
if (arguments.length > 3) {
var G__17137__i = 0, G__17137__a = new Array(arguments.length -  3);
while (G__17137__i < G__17137__a.length) {G__17137__a[G__17137__i] = arguments[G__17137__i + 3]; ++G__17137__i;}
  p__17125 = new cljs.core.IndexedSeq(G__17137__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__17125);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__17138){
var state = cljs.core.first(arglist__17138);
arglist__17138 = cljs.core.next(arglist__17138);
var cont_block = cljs.core.first(arglist__17138);
arglist__17138 = cljs.core.next(arglist__17138);
var ports = cljs.core.first(arglist__17138);
var p__17125 = cljs.core.rest(arglist__17138);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__17125);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t17258 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17258 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17259){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17259 = meta17259;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17258.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t17258.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17258.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17258.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17258.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17258.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17258.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17258.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17258.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17260){
var self__ = this;
var _17260__$1 = this;
return self__.meta17259;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17260,meta17259__$1){
var self__ = this;
var _17260__$1 = this;
return (new cljs.core.async.t17258(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17259__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17258.cljs$lang$type = true;

cljs.core.async.t17258.cljs$lang$ctorStr = "cljs.core.async/t17258";

cljs.core.async.t17258.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t17258");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t17258 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17258(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17259){
return (new cljs.core.async.t17258(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17259));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t17258(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/out/cljs/core/async.cljs"], null)));
})()
;
var c__6200__auto___17377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___17377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___17377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17330){
var state_val_17331 = (state_17330[(1)]);
if((state_val_17331 === (7))){
var inst_17274 = (state_17330[(7)]);
var inst_17279 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17274);
var state_17330__$1 = state_17330;
var statearr_17332_17378 = state_17330__$1;
(statearr_17332_17378[(2)] = inst_17279);

(statearr_17332_17378[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (20))){
var inst_17289 = (state_17330[(8)]);
var state_17330__$1 = state_17330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17330__$1,(23),out,inst_17289);
} else {
if((state_val_17331 === (1))){
var inst_17264 = (state_17330[(9)]);
var inst_17264__$1 = calc_state.call(null);
var inst_17265 = cljs.core.seq_QMARK_.call(null,inst_17264__$1);
var state_17330__$1 = (function (){var statearr_17333 = state_17330;
(statearr_17333[(9)] = inst_17264__$1);

return statearr_17333;
})();
if(inst_17265){
var statearr_17334_17379 = state_17330__$1;
(statearr_17334_17379[(1)] = (2));

} else {
var statearr_17335_17380 = state_17330__$1;
(statearr_17335_17380[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (24))){
var inst_17282 = (state_17330[(10)]);
var inst_17274 = inst_17282;
var state_17330__$1 = (function (){var statearr_17336 = state_17330;
(statearr_17336[(7)] = inst_17274);

return statearr_17336;
})();
var statearr_17337_17381 = state_17330__$1;
(statearr_17337_17381[(2)] = null);

(statearr_17337_17381[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (4))){
var inst_17264 = (state_17330[(9)]);
var inst_17270 = (state_17330[(2)]);
var inst_17271 = cljs.core.get.call(null,inst_17270,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17272 = cljs.core.get.call(null,inst_17270,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17273 = cljs.core.get.call(null,inst_17270,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17274 = inst_17264;
var state_17330__$1 = (function (){var statearr_17338 = state_17330;
(statearr_17338[(11)] = inst_17271);

(statearr_17338[(7)] = inst_17274);

(statearr_17338[(12)] = inst_17273);

(statearr_17338[(13)] = inst_17272);

return statearr_17338;
})();
var statearr_17339_17382 = state_17330__$1;
(statearr_17339_17382[(2)] = null);

(statearr_17339_17382[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (15))){
var state_17330__$1 = state_17330;
var statearr_17340_17383 = state_17330__$1;
(statearr_17340_17383[(2)] = null);

(statearr_17340_17383[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (21))){
var inst_17282 = (state_17330[(10)]);
var inst_17274 = inst_17282;
var state_17330__$1 = (function (){var statearr_17341 = state_17330;
(statearr_17341[(7)] = inst_17274);

return statearr_17341;
})();
var statearr_17342_17384 = state_17330__$1;
(statearr_17342_17384[(2)] = null);

(statearr_17342_17384[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (13))){
var inst_17326 = (state_17330[(2)]);
var state_17330__$1 = state_17330;
var statearr_17343_17385 = state_17330__$1;
(statearr_17343_17385[(2)] = inst_17326);

(statearr_17343_17385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (22))){
var inst_17324 = (state_17330[(2)]);
var state_17330__$1 = state_17330;
var statearr_17344_17386 = state_17330__$1;
(statearr_17344_17386[(2)] = inst_17324);

(statearr_17344_17386[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (6))){
var inst_17328 = (state_17330[(2)]);
var state_17330__$1 = state_17330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17330__$1,inst_17328);
} else {
if((state_val_17331 === (25))){
var state_17330__$1 = state_17330;
var statearr_17345_17387 = state_17330__$1;
(statearr_17345_17387[(2)] = null);

(statearr_17345_17387[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (17))){
var inst_17304 = (state_17330[(14)]);
var state_17330__$1 = state_17330;
var statearr_17346_17388 = state_17330__$1;
(statearr_17346_17388[(2)] = inst_17304);

(statearr_17346_17388[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (3))){
var inst_17264 = (state_17330[(9)]);
var state_17330__$1 = state_17330;
var statearr_17347_17389 = state_17330__$1;
(statearr_17347_17389[(2)] = inst_17264);

(statearr_17347_17389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (12))){
var inst_17285 = (state_17330[(15)]);
var inst_17304 = (state_17330[(14)]);
var inst_17290 = (state_17330[(16)]);
var inst_17304__$1 = inst_17285.call(null,inst_17290);
var state_17330__$1 = (function (){var statearr_17348 = state_17330;
(statearr_17348[(14)] = inst_17304__$1);

return statearr_17348;
})();
if(cljs.core.truth_(inst_17304__$1)){
var statearr_17349_17390 = state_17330__$1;
(statearr_17349_17390[(1)] = (17));

} else {
var statearr_17350_17391 = state_17330__$1;
(statearr_17350_17391[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (2))){
var inst_17264 = (state_17330[(9)]);
var inst_17267 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17264);
var state_17330__$1 = state_17330;
var statearr_17351_17392 = state_17330__$1;
(statearr_17351_17392[(2)] = inst_17267);

(statearr_17351_17392[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (23))){
var inst_17315 = (state_17330[(2)]);
var state_17330__$1 = state_17330;
if(cljs.core.truth_(inst_17315)){
var statearr_17352_17393 = state_17330__$1;
(statearr_17352_17393[(1)] = (24));

} else {
var statearr_17353_17394 = state_17330__$1;
(statearr_17353_17394[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (19))){
var inst_17312 = (state_17330[(2)]);
var state_17330__$1 = state_17330;
if(cljs.core.truth_(inst_17312)){
var statearr_17354_17395 = state_17330__$1;
(statearr_17354_17395[(1)] = (20));

} else {
var statearr_17355_17396 = state_17330__$1;
(statearr_17355_17396[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (11))){
var inst_17289 = (state_17330[(8)]);
var inst_17295 = (inst_17289 == null);
var state_17330__$1 = state_17330;
if(cljs.core.truth_(inst_17295)){
var statearr_17356_17397 = state_17330__$1;
(statearr_17356_17397[(1)] = (14));

} else {
var statearr_17357_17398 = state_17330__$1;
(statearr_17357_17398[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (9))){
var inst_17282 = (state_17330[(10)]);
var inst_17282__$1 = (state_17330[(2)]);
var inst_17283 = cljs.core.get.call(null,inst_17282__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17284 = cljs.core.get.call(null,inst_17282__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17285 = cljs.core.get.call(null,inst_17282__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_17330__$1 = (function (){var statearr_17358 = state_17330;
(statearr_17358[(15)] = inst_17285);

(statearr_17358[(10)] = inst_17282__$1);

(statearr_17358[(17)] = inst_17284);

return statearr_17358;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_17330__$1,(10),inst_17283);
} else {
if((state_val_17331 === (5))){
var inst_17274 = (state_17330[(7)]);
var inst_17277 = cljs.core.seq_QMARK_.call(null,inst_17274);
var state_17330__$1 = state_17330;
if(inst_17277){
var statearr_17359_17399 = state_17330__$1;
(statearr_17359_17399[(1)] = (7));

} else {
var statearr_17360_17400 = state_17330__$1;
(statearr_17360_17400[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (14))){
var inst_17290 = (state_17330[(16)]);
var inst_17297 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17290);
var state_17330__$1 = state_17330;
var statearr_17361_17401 = state_17330__$1;
(statearr_17361_17401[(2)] = inst_17297);

(statearr_17361_17401[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (26))){
var inst_17320 = (state_17330[(2)]);
var state_17330__$1 = state_17330;
var statearr_17362_17402 = state_17330__$1;
(statearr_17362_17402[(2)] = inst_17320);

(statearr_17362_17402[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (16))){
var inst_17300 = (state_17330[(2)]);
var inst_17301 = calc_state.call(null);
var inst_17274 = inst_17301;
var state_17330__$1 = (function (){var statearr_17363 = state_17330;
(statearr_17363[(7)] = inst_17274);

(statearr_17363[(18)] = inst_17300);

return statearr_17363;
})();
var statearr_17364_17403 = state_17330__$1;
(statearr_17364_17403[(2)] = null);

(statearr_17364_17403[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (10))){
var inst_17289 = (state_17330[(8)]);
var inst_17290 = (state_17330[(16)]);
var inst_17288 = (state_17330[(2)]);
var inst_17289__$1 = cljs.core.nth.call(null,inst_17288,(0),null);
var inst_17290__$1 = cljs.core.nth.call(null,inst_17288,(1),null);
var inst_17291 = (inst_17289__$1 == null);
var inst_17292 = cljs.core._EQ_.call(null,inst_17290__$1,change);
var inst_17293 = (inst_17291) || (inst_17292);
var state_17330__$1 = (function (){var statearr_17365 = state_17330;
(statearr_17365[(8)] = inst_17289__$1);

(statearr_17365[(16)] = inst_17290__$1);

return statearr_17365;
})();
if(cljs.core.truth_(inst_17293)){
var statearr_17366_17404 = state_17330__$1;
(statearr_17366_17404[(1)] = (11));

} else {
var statearr_17367_17405 = state_17330__$1;
(statearr_17367_17405[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (18))){
var inst_17285 = (state_17330[(15)]);
var inst_17290 = (state_17330[(16)]);
var inst_17284 = (state_17330[(17)]);
var inst_17307 = cljs.core.empty_QMARK_.call(null,inst_17285);
var inst_17308 = inst_17284.call(null,inst_17290);
var inst_17309 = cljs.core.not.call(null,inst_17308);
var inst_17310 = (inst_17307) && (inst_17309);
var state_17330__$1 = state_17330;
var statearr_17368_17406 = state_17330__$1;
(statearr_17368_17406[(2)] = inst_17310);

(statearr_17368_17406[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (8))){
var inst_17274 = (state_17330[(7)]);
var state_17330__$1 = state_17330;
var statearr_17369_17407 = state_17330__$1;
(statearr_17369_17407[(2)] = inst_17274);

(statearr_17369_17407[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6200__auto___17377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6144__auto__,c__6200__auto___17377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_17373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17373[(0)] = state_machine__6145__auto__);

(statearr_17373[(1)] = (1));

return statearr_17373;
});
var state_machine__6145__auto____1 = (function (state_17330){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_17330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e17374){if((e17374 instanceof Object)){
var ex__6148__auto__ = e17374;
var statearr_17375_17408 = state_17330;
(statearr_17375_17408[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17409 = state_17330;
state_17330 = G__17409;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_17330){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_17330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___17377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6202__auto__ = (function (){var statearr_17376 = f__6201__auto__.call(null);
(statearr_17376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___17377);

return statearr_17376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___17377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj17411 = {};
return obj17411;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3240__auto__ = p;
if(and__3240__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3240__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__3896__auto__ = (((p == null))?null:p);
return (function (){var or__3252__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3240__auto__ = p;
if(and__3240__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3240__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__3896__auto__ = (((p == null))?null:p);
return (function (){var or__3252__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3240__auto__ = p;
if(and__3240__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3240__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__3896__auto__ = (((p == null))?null:p);
return (function (){var or__3252__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3240__auto__ = p;
if(and__3240__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3240__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__3896__auto__ = (((p == null))?null:p);
return (function (){var or__3252__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3252__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3252__auto__)){
return or__3252__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3252__auto__,mults){
return (function (p1__17412_SHARP_){
if(cljs.core.truth_(p1__17412_SHARP_.call(null,topic))){
return p1__17412_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17412_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3252__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t17535 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17535 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17536){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17536 = meta17536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17535.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t17535.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t17535.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t17535.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t17535.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t17535.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17535.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t17535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17537){
var self__ = this;
var _17537__$1 = this;
return self__.meta17536;
});})(mults,ensure_mult))
;

cljs.core.async.t17535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17537,meta17536__$1){
var self__ = this;
var _17537__$1 = this;
return (new cljs.core.async.t17535(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17536__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t17535.cljs$lang$type = true;

cljs.core.async.t17535.cljs$lang$ctorStr = "cljs.core.async/t17535";

cljs.core.async.t17535.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t17535");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t17535 = ((function (mults,ensure_mult){
return (function __GT_t17535(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17536){
return (new cljs.core.async.t17535(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17536));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t17535(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/out/cljs/core/async.cljs"], null)));
})()
;
var c__6200__auto___17657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___17657,mults,ensure_mult,p){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___17657,mults,ensure_mult,p){
return (function (state_17609){
var state_val_17610 = (state_17609[(1)]);
if((state_val_17610 === (7))){
var inst_17605 = (state_17609[(2)]);
var state_17609__$1 = state_17609;
var statearr_17611_17658 = state_17609__$1;
(statearr_17611_17658[(2)] = inst_17605);

(statearr_17611_17658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (20))){
var state_17609__$1 = state_17609;
var statearr_17612_17659 = state_17609__$1;
(statearr_17612_17659[(2)] = null);

(statearr_17612_17659[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (1))){
var state_17609__$1 = state_17609;
var statearr_17613_17660 = state_17609__$1;
(statearr_17613_17660[(2)] = null);

(statearr_17613_17660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (24))){
var inst_17588 = (state_17609[(7)]);
var inst_17597 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17588);
var state_17609__$1 = state_17609;
var statearr_17614_17661 = state_17609__$1;
(statearr_17614_17661[(2)] = inst_17597);

(statearr_17614_17661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (4))){
var inst_17540 = (state_17609[(8)]);
var inst_17540__$1 = (state_17609[(2)]);
var inst_17541 = (inst_17540__$1 == null);
var state_17609__$1 = (function (){var statearr_17615 = state_17609;
(statearr_17615[(8)] = inst_17540__$1);

return statearr_17615;
})();
if(cljs.core.truth_(inst_17541)){
var statearr_17616_17662 = state_17609__$1;
(statearr_17616_17662[(1)] = (5));

} else {
var statearr_17617_17663 = state_17609__$1;
(statearr_17617_17663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (15))){
var inst_17582 = (state_17609[(2)]);
var state_17609__$1 = state_17609;
var statearr_17618_17664 = state_17609__$1;
(statearr_17618_17664[(2)] = inst_17582);

(statearr_17618_17664[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (21))){
var inst_17602 = (state_17609[(2)]);
var state_17609__$1 = (function (){var statearr_17619 = state_17609;
(statearr_17619[(9)] = inst_17602);

return statearr_17619;
})();
var statearr_17620_17665 = state_17609__$1;
(statearr_17620_17665[(2)] = null);

(statearr_17620_17665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (13))){
var inst_17564 = (state_17609[(10)]);
var inst_17566 = cljs.core.chunked_seq_QMARK_.call(null,inst_17564);
var state_17609__$1 = state_17609;
if(inst_17566){
var statearr_17621_17666 = state_17609__$1;
(statearr_17621_17666[(1)] = (16));

} else {
var statearr_17622_17667 = state_17609__$1;
(statearr_17622_17667[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (22))){
var inst_17594 = (state_17609[(2)]);
var state_17609__$1 = state_17609;
if(cljs.core.truth_(inst_17594)){
var statearr_17623_17668 = state_17609__$1;
(statearr_17623_17668[(1)] = (23));

} else {
var statearr_17624_17669 = state_17609__$1;
(statearr_17624_17669[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (6))){
var inst_17540 = (state_17609[(8)]);
var inst_17588 = (state_17609[(7)]);
var inst_17590 = (state_17609[(11)]);
var inst_17588__$1 = topic_fn.call(null,inst_17540);
var inst_17589 = cljs.core.deref.call(null,mults);
var inst_17590__$1 = cljs.core.get.call(null,inst_17589,inst_17588__$1);
var state_17609__$1 = (function (){var statearr_17625 = state_17609;
(statearr_17625[(7)] = inst_17588__$1);

(statearr_17625[(11)] = inst_17590__$1);

return statearr_17625;
})();
if(cljs.core.truth_(inst_17590__$1)){
var statearr_17626_17670 = state_17609__$1;
(statearr_17626_17670[(1)] = (19));

} else {
var statearr_17627_17671 = state_17609__$1;
(statearr_17627_17671[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (25))){
var inst_17599 = (state_17609[(2)]);
var state_17609__$1 = state_17609;
var statearr_17628_17672 = state_17609__$1;
(statearr_17628_17672[(2)] = inst_17599);

(statearr_17628_17672[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (17))){
var inst_17564 = (state_17609[(10)]);
var inst_17573 = cljs.core.first.call(null,inst_17564);
var inst_17574 = cljs.core.async.muxch_STAR_.call(null,inst_17573);
var inst_17575 = cljs.core.async.close_BANG_.call(null,inst_17574);
var inst_17576 = cljs.core.next.call(null,inst_17564);
var inst_17550 = inst_17576;
var inst_17551 = null;
var inst_17552 = (0);
var inst_17553 = (0);
var state_17609__$1 = (function (){var statearr_17629 = state_17609;
(statearr_17629[(12)] = inst_17550);

(statearr_17629[(13)] = inst_17552);

(statearr_17629[(14)] = inst_17553);

(statearr_17629[(15)] = inst_17575);

(statearr_17629[(16)] = inst_17551);

return statearr_17629;
})();
var statearr_17630_17673 = state_17609__$1;
(statearr_17630_17673[(2)] = null);

(statearr_17630_17673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (3))){
var inst_17607 = (state_17609[(2)]);
var state_17609__$1 = state_17609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17609__$1,inst_17607);
} else {
if((state_val_17610 === (12))){
var inst_17584 = (state_17609[(2)]);
var state_17609__$1 = state_17609;
var statearr_17631_17674 = state_17609__$1;
(statearr_17631_17674[(2)] = inst_17584);

(statearr_17631_17674[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (2))){
var state_17609__$1 = state_17609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17609__$1,(4),ch);
} else {
if((state_val_17610 === (23))){
var state_17609__$1 = state_17609;
var statearr_17632_17675 = state_17609__$1;
(statearr_17632_17675[(2)] = null);

(statearr_17632_17675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (19))){
var inst_17540 = (state_17609[(8)]);
var inst_17590 = (state_17609[(11)]);
var inst_17592 = cljs.core.async.muxch_STAR_.call(null,inst_17590);
var state_17609__$1 = state_17609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17609__$1,(22),inst_17592,inst_17540);
} else {
if((state_val_17610 === (11))){
var inst_17550 = (state_17609[(12)]);
var inst_17564 = (state_17609[(10)]);
var inst_17564__$1 = cljs.core.seq.call(null,inst_17550);
var state_17609__$1 = (function (){var statearr_17633 = state_17609;
(statearr_17633[(10)] = inst_17564__$1);

return statearr_17633;
})();
if(inst_17564__$1){
var statearr_17634_17676 = state_17609__$1;
(statearr_17634_17676[(1)] = (13));

} else {
var statearr_17635_17677 = state_17609__$1;
(statearr_17635_17677[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (9))){
var inst_17586 = (state_17609[(2)]);
var state_17609__$1 = state_17609;
var statearr_17636_17678 = state_17609__$1;
(statearr_17636_17678[(2)] = inst_17586);

(statearr_17636_17678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (5))){
var inst_17547 = cljs.core.deref.call(null,mults);
var inst_17548 = cljs.core.vals.call(null,inst_17547);
var inst_17549 = cljs.core.seq.call(null,inst_17548);
var inst_17550 = inst_17549;
var inst_17551 = null;
var inst_17552 = (0);
var inst_17553 = (0);
var state_17609__$1 = (function (){var statearr_17637 = state_17609;
(statearr_17637[(12)] = inst_17550);

(statearr_17637[(13)] = inst_17552);

(statearr_17637[(14)] = inst_17553);

(statearr_17637[(16)] = inst_17551);

return statearr_17637;
})();
var statearr_17638_17679 = state_17609__$1;
(statearr_17638_17679[(2)] = null);

(statearr_17638_17679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (14))){
var state_17609__$1 = state_17609;
var statearr_17642_17680 = state_17609__$1;
(statearr_17642_17680[(2)] = null);

(statearr_17642_17680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (16))){
var inst_17564 = (state_17609[(10)]);
var inst_17568 = cljs.core.chunk_first.call(null,inst_17564);
var inst_17569 = cljs.core.chunk_rest.call(null,inst_17564);
var inst_17570 = cljs.core.count.call(null,inst_17568);
var inst_17550 = inst_17569;
var inst_17551 = inst_17568;
var inst_17552 = inst_17570;
var inst_17553 = (0);
var state_17609__$1 = (function (){var statearr_17643 = state_17609;
(statearr_17643[(12)] = inst_17550);

(statearr_17643[(13)] = inst_17552);

(statearr_17643[(14)] = inst_17553);

(statearr_17643[(16)] = inst_17551);

return statearr_17643;
})();
var statearr_17644_17681 = state_17609__$1;
(statearr_17644_17681[(2)] = null);

(statearr_17644_17681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (10))){
var inst_17550 = (state_17609[(12)]);
var inst_17552 = (state_17609[(13)]);
var inst_17553 = (state_17609[(14)]);
var inst_17551 = (state_17609[(16)]);
var inst_17558 = cljs.core._nth.call(null,inst_17551,inst_17553);
var inst_17559 = cljs.core.async.muxch_STAR_.call(null,inst_17558);
var inst_17560 = cljs.core.async.close_BANG_.call(null,inst_17559);
var inst_17561 = (inst_17553 + (1));
var tmp17639 = inst_17550;
var tmp17640 = inst_17552;
var tmp17641 = inst_17551;
var inst_17550__$1 = tmp17639;
var inst_17551__$1 = tmp17641;
var inst_17552__$1 = tmp17640;
var inst_17553__$1 = inst_17561;
var state_17609__$1 = (function (){var statearr_17645 = state_17609;
(statearr_17645[(12)] = inst_17550__$1);

(statearr_17645[(13)] = inst_17552__$1);

(statearr_17645[(14)] = inst_17553__$1);

(statearr_17645[(16)] = inst_17551__$1);

(statearr_17645[(17)] = inst_17560);

return statearr_17645;
})();
var statearr_17646_17682 = state_17609__$1;
(statearr_17646_17682[(2)] = null);

(statearr_17646_17682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (18))){
var inst_17579 = (state_17609[(2)]);
var state_17609__$1 = state_17609;
var statearr_17647_17683 = state_17609__$1;
(statearr_17647_17683[(2)] = inst_17579);

(statearr_17647_17683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (8))){
var inst_17552 = (state_17609[(13)]);
var inst_17553 = (state_17609[(14)]);
var inst_17555 = (inst_17553 < inst_17552);
var inst_17556 = inst_17555;
var state_17609__$1 = state_17609;
if(cljs.core.truth_(inst_17556)){
var statearr_17648_17684 = state_17609__$1;
(statearr_17648_17684[(1)] = (10));

} else {
var statearr_17649_17685 = state_17609__$1;
(statearr_17649_17685[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6200__auto___17657,mults,ensure_mult,p))
;
return ((function (switch__6144__auto__,c__6200__auto___17657,mults,ensure_mult,p){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_17653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17653[(0)] = state_machine__6145__auto__);

(statearr_17653[(1)] = (1));

return statearr_17653;
});
var state_machine__6145__auto____1 = (function (state_17609){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_17609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e17654){if((e17654 instanceof Object)){
var ex__6148__auto__ = e17654;
var statearr_17655_17686 = state_17609;
(statearr_17655_17686[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17687 = state_17609;
state_17609 = G__17687;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_17609){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_17609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___17657,mults,ensure_mult,p))
})();
var state__6202__auto__ = (function (){var statearr_17656 = f__6201__auto__.call(null);
(statearr_17656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___17657);

return statearr_17656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___17657,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6200__auto___17824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___17824,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___17824,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17794){
var state_val_17795 = (state_17794[(1)]);
if((state_val_17795 === (7))){
var state_17794__$1 = state_17794;
var statearr_17796_17825 = state_17794__$1;
(statearr_17796_17825[(2)] = null);

(statearr_17796_17825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17795 === (1))){
var state_17794__$1 = state_17794;
var statearr_17797_17826 = state_17794__$1;
(statearr_17797_17826[(2)] = null);

(statearr_17797_17826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17795 === (4))){
var inst_17758 = (state_17794[(7)]);
var inst_17760 = (inst_17758 < cnt);
var state_17794__$1 = state_17794;
if(cljs.core.truth_(inst_17760)){
var statearr_17798_17827 = state_17794__$1;
(statearr_17798_17827[(1)] = (6));

} else {
var statearr_17799_17828 = state_17794__$1;
(statearr_17799_17828[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17795 === (15))){
var inst_17790 = (state_17794[(2)]);
var state_17794__$1 = state_17794;
var statearr_17800_17829 = state_17794__$1;
(statearr_17800_17829[(2)] = inst_17790);

(statearr_17800_17829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17795 === (13))){
var inst_17783 = cljs.core.async.close_BANG_.call(null,out);
var state_17794__$1 = state_17794;
var statearr_17801_17830 = state_17794__$1;
(statearr_17801_17830[(2)] = inst_17783);

(statearr_17801_17830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17795 === (6))){
var state_17794__$1 = state_17794;
var statearr_17802_17831 = state_17794__$1;
(statearr_17802_17831[(2)] = null);

(statearr_17802_17831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17795 === (3))){
var inst_17792 = (state_17794[(2)]);
var state_17794__$1 = state_17794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17794__$1,inst_17792);
} else {
if((state_val_17795 === (12))){
var inst_17780 = (state_17794[(8)]);
var inst_17780__$1 = (state_17794[(2)]);
var inst_17781 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17780__$1);
var state_17794__$1 = (function (){var statearr_17803 = state_17794;
(statearr_17803[(8)] = inst_17780__$1);

return statearr_17803;
})();
if(cljs.core.truth_(inst_17781)){
var statearr_17804_17832 = state_17794__$1;
(statearr_17804_17832[(1)] = (13));

} else {
var statearr_17805_17833 = state_17794__$1;
(statearr_17805_17833[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17795 === (2))){
var inst_17757 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17758 = (0);
var state_17794__$1 = (function (){var statearr_17806 = state_17794;
(statearr_17806[(7)] = inst_17758);

(statearr_17806[(9)] = inst_17757);

return statearr_17806;
})();
var statearr_17807_17834 = state_17794__$1;
(statearr_17807_17834[(2)] = null);

(statearr_17807_17834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17795 === (11))){
var inst_17758 = (state_17794[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17794,(10),Object,null,(9));
var inst_17767 = chs__$1.call(null,inst_17758);
var inst_17768 = done.call(null,inst_17758);
var inst_17769 = cljs.core.async.take_BANG_.call(null,inst_17767,inst_17768);
var state_17794__$1 = state_17794;
var statearr_17808_17835 = state_17794__$1;
(statearr_17808_17835[(2)] = inst_17769);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17794__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17795 === (9))){
var inst_17758 = (state_17794[(7)]);
var inst_17771 = (state_17794[(2)]);
var inst_17772 = (inst_17758 + (1));
var inst_17758__$1 = inst_17772;
var state_17794__$1 = (function (){var statearr_17809 = state_17794;
(statearr_17809[(7)] = inst_17758__$1);

(statearr_17809[(10)] = inst_17771);

return statearr_17809;
})();
var statearr_17810_17836 = state_17794__$1;
(statearr_17810_17836[(2)] = null);

(statearr_17810_17836[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17795 === (5))){
var inst_17778 = (state_17794[(2)]);
var state_17794__$1 = (function (){var statearr_17811 = state_17794;
(statearr_17811[(11)] = inst_17778);

return statearr_17811;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17794__$1,(12),dchan);
} else {
if((state_val_17795 === (14))){
var inst_17780 = (state_17794[(8)]);
var inst_17785 = cljs.core.apply.call(null,f,inst_17780);
var state_17794__$1 = state_17794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17794__$1,(16),out,inst_17785);
} else {
if((state_val_17795 === (16))){
var inst_17787 = (state_17794[(2)]);
var state_17794__$1 = (function (){var statearr_17812 = state_17794;
(statearr_17812[(12)] = inst_17787);

return statearr_17812;
})();
var statearr_17813_17837 = state_17794__$1;
(statearr_17813_17837[(2)] = null);

(statearr_17813_17837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17795 === (10))){
var inst_17762 = (state_17794[(2)]);
var inst_17763 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17794__$1 = (function (){var statearr_17814 = state_17794;
(statearr_17814[(13)] = inst_17762);

return statearr_17814;
})();
var statearr_17815_17838 = state_17794__$1;
(statearr_17815_17838[(2)] = inst_17763);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17794__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17795 === (8))){
var inst_17776 = (state_17794[(2)]);
var state_17794__$1 = state_17794;
var statearr_17816_17839 = state_17794__$1;
(statearr_17816_17839[(2)] = inst_17776);

(statearr_17816_17839[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6200__auto___17824,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6144__auto__,c__6200__auto___17824,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_17820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17820[(0)] = state_machine__6145__auto__);

(statearr_17820[(1)] = (1));

return statearr_17820;
});
var state_machine__6145__auto____1 = (function (state_17794){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_17794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e17821){if((e17821 instanceof Object)){
var ex__6148__auto__ = e17821;
var statearr_17822_17840 = state_17794;
(statearr_17822_17840[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17841 = state_17794;
state_17794 = G__17841;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_17794){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_17794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___17824,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6202__auto__ = (function (){var statearr_17823 = f__6201__auto__.call(null);
(statearr_17823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___17824);

return statearr_17823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___17824,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6200__auto___17949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___17949,out){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___17949,out){
return (function (state_17925){
var state_val_17926 = (state_17925[(1)]);
if((state_val_17926 === (7))){
var inst_17905 = (state_17925[(7)]);
var inst_17904 = (state_17925[(8)]);
var inst_17904__$1 = (state_17925[(2)]);
var inst_17905__$1 = cljs.core.nth.call(null,inst_17904__$1,(0),null);
var inst_17906 = cljs.core.nth.call(null,inst_17904__$1,(1),null);
var inst_17907 = (inst_17905__$1 == null);
var state_17925__$1 = (function (){var statearr_17927 = state_17925;
(statearr_17927[(9)] = inst_17906);

(statearr_17927[(7)] = inst_17905__$1);

(statearr_17927[(8)] = inst_17904__$1);

return statearr_17927;
})();
if(cljs.core.truth_(inst_17907)){
var statearr_17928_17950 = state_17925__$1;
(statearr_17928_17950[(1)] = (8));

} else {
var statearr_17929_17951 = state_17925__$1;
(statearr_17929_17951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17926 === (1))){
var inst_17896 = cljs.core.vec.call(null,chs);
var inst_17897 = inst_17896;
var state_17925__$1 = (function (){var statearr_17930 = state_17925;
(statearr_17930[(10)] = inst_17897);

return statearr_17930;
})();
var statearr_17931_17952 = state_17925__$1;
(statearr_17931_17952[(2)] = null);

(statearr_17931_17952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17926 === (4))){
var inst_17897 = (state_17925[(10)]);
var state_17925__$1 = state_17925;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17925__$1,(7),inst_17897);
} else {
if((state_val_17926 === (6))){
var inst_17921 = (state_17925[(2)]);
var state_17925__$1 = state_17925;
var statearr_17932_17953 = state_17925__$1;
(statearr_17932_17953[(2)] = inst_17921);

(statearr_17932_17953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17926 === (3))){
var inst_17923 = (state_17925[(2)]);
var state_17925__$1 = state_17925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17925__$1,inst_17923);
} else {
if((state_val_17926 === (2))){
var inst_17897 = (state_17925[(10)]);
var inst_17899 = cljs.core.count.call(null,inst_17897);
var inst_17900 = (inst_17899 > (0));
var state_17925__$1 = state_17925;
if(cljs.core.truth_(inst_17900)){
var statearr_17934_17954 = state_17925__$1;
(statearr_17934_17954[(1)] = (4));

} else {
var statearr_17935_17955 = state_17925__$1;
(statearr_17935_17955[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17926 === (11))){
var inst_17897 = (state_17925[(10)]);
var inst_17914 = (state_17925[(2)]);
var tmp17933 = inst_17897;
var inst_17897__$1 = tmp17933;
var state_17925__$1 = (function (){var statearr_17936 = state_17925;
(statearr_17936[(10)] = inst_17897__$1);

(statearr_17936[(11)] = inst_17914);

return statearr_17936;
})();
var statearr_17937_17956 = state_17925__$1;
(statearr_17937_17956[(2)] = null);

(statearr_17937_17956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17926 === (9))){
var inst_17905 = (state_17925[(7)]);
var state_17925__$1 = state_17925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17925__$1,(11),out,inst_17905);
} else {
if((state_val_17926 === (5))){
var inst_17919 = cljs.core.async.close_BANG_.call(null,out);
var state_17925__$1 = state_17925;
var statearr_17938_17957 = state_17925__$1;
(statearr_17938_17957[(2)] = inst_17919);

(statearr_17938_17957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17926 === (10))){
var inst_17917 = (state_17925[(2)]);
var state_17925__$1 = state_17925;
var statearr_17939_17958 = state_17925__$1;
(statearr_17939_17958[(2)] = inst_17917);

(statearr_17939_17958[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17926 === (8))){
var inst_17906 = (state_17925[(9)]);
var inst_17897 = (state_17925[(10)]);
var inst_17905 = (state_17925[(7)]);
var inst_17904 = (state_17925[(8)]);
var inst_17909 = (function (){var c = inst_17906;
var v = inst_17905;
var vec__17902 = inst_17904;
var cs = inst_17897;
return ((function (c,v,vec__17902,cs,inst_17906,inst_17897,inst_17905,inst_17904,state_val_17926,c__6200__auto___17949,out){
return (function (p1__17842_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17842_SHARP_);
});
;})(c,v,vec__17902,cs,inst_17906,inst_17897,inst_17905,inst_17904,state_val_17926,c__6200__auto___17949,out))
})();
var inst_17910 = cljs.core.filterv.call(null,inst_17909,inst_17897);
var inst_17897__$1 = inst_17910;
var state_17925__$1 = (function (){var statearr_17940 = state_17925;
(statearr_17940[(10)] = inst_17897__$1);

return statearr_17940;
})();
var statearr_17941_17959 = state_17925__$1;
(statearr_17941_17959[(2)] = null);

(statearr_17941_17959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6200__auto___17949,out))
;
return ((function (switch__6144__auto__,c__6200__auto___17949,out){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_17945 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17945[(0)] = state_machine__6145__auto__);

(statearr_17945[(1)] = (1));

return statearr_17945;
});
var state_machine__6145__auto____1 = (function (state_17925){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_17925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e17946){if((e17946 instanceof Object)){
var ex__6148__auto__ = e17946;
var statearr_17947_17960 = state_17925;
(statearr_17947_17960[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17961 = state_17925;
state_17925 = G__17961;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_17925){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_17925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___17949,out))
})();
var state__6202__auto__ = (function (){var statearr_17948 = f__6201__auto__.call(null);
(statearr_17948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___17949);

return statearr_17948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___17949,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6200__auto___18054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___18054,out){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___18054,out){
return (function (state_18031){
var state_val_18032 = (state_18031[(1)]);
if((state_val_18032 === (7))){
var inst_18013 = (state_18031[(7)]);
var inst_18013__$1 = (state_18031[(2)]);
var inst_18014 = (inst_18013__$1 == null);
var inst_18015 = cljs.core.not.call(null,inst_18014);
var state_18031__$1 = (function (){var statearr_18033 = state_18031;
(statearr_18033[(7)] = inst_18013__$1);

return statearr_18033;
})();
if(inst_18015){
var statearr_18034_18055 = state_18031__$1;
(statearr_18034_18055[(1)] = (8));

} else {
var statearr_18035_18056 = state_18031__$1;
(statearr_18035_18056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (1))){
var inst_18008 = (0);
var state_18031__$1 = (function (){var statearr_18036 = state_18031;
(statearr_18036[(8)] = inst_18008);

return statearr_18036;
})();
var statearr_18037_18057 = state_18031__$1;
(statearr_18037_18057[(2)] = null);

(statearr_18037_18057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (4))){
var state_18031__$1 = state_18031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18031__$1,(7),ch);
} else {
if((state_val_18032 === (6))){
var inst_18026 = (state_18031[(2)]);
var state_18031__$1 = state_18031;
var statearr_18038_18058 = state_18031__$1;
(statearr_18038_18058[(2)] = inst_18026);

(statearr_18038_18058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (3))){
var inst_18028 = (state_18031[(2)]);
var inst_18029 = cljs.core.async.close_BANG_.call(null,out);
var state_18031__$1 = (function (){var statearr_18039 = state_18031;
(statearr_18039[(9)] = inst_18028);

return statearr_18039;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18031__$1,inst_18029);
} else {
if((state_val_18032 === (2))){
var inst_18008 = (state_18031[(8)]);
var inst_18010 = (inst_18008 < n);
var state_18031__$1 = state_18031;
if(cljs.core.truth_(inst_18010)){
var statearr_18040_18059 = state_18031__$1;
(statearr_18040_18059[(1)] = (4));

} else {
var statearr_18041_18060 = state_18031__$1;
(statearr_18041_18060[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (11))){
var inst_18008 = (state_18031[(8)]);
var inst_18018 = (state_18031[(2)]);
var inst_18019 = (inst_18008 + (1));
var inst_18008__$1 = inst_18019;
var state_18031__$1 = (function (){var statearr_18042 = state_18031;
(statearr_18042[(8)] = inst_18008__$1);

(statearr_18042[(10)] = inst_18018);

return statearr_18042;
})();
var statearr_18043_18061 = state_18031__$1;
(statearr_18043_18061[(2)] = null);

(statearr_18043_18061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (9))){
var state_18031__$1 = state_18031;
var statearr_18044_18062 = state_18031__$1;
(statearr_18044_18062[(2)] = null);

(statearr_18044_18062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (5))){
var state_18031__$1 = state_18031;
var statearr_18045_18063 = state_18031__$1;
(statearr_18045_18063[(2)] = null);

(statearr_18045_18063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (10))){
var inst_18023 = (state_18031[(2)]);
var state_18031__$1 = state_18031;
var statearr_18046_18064 = state_18031__$1;
(statearr_18046_18064[(2)] = inst_18023);

(statearr_18046_18064[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (8))){
var inst_18013 = (state_18031[(7)]);
var state_18031__$1 = state_18031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18031__$1,(11),out,inst_18013);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6200__auto___18054,out))
;
return ((function (switch__6144__auto__,c__6200__auto___18054,out){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_18050 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18050[(0)] = state_machine__6145__auto__);

(statearr_18050[(1)] = (1));

return statearr_18050;
});
var state_machine__6145__auto____1 = (function (state_18031){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_18031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e18051){if((e18051 instanceof Object)){
var ex__6148__auto__ = e18051;
var statearr_18052_18065 = state_18031;
(statearr_18052_18065[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18066 = state_18031;
state_18031 = G__18066;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_18031){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_18031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___18054,out))
})();
var state__6202__auto__ = (function (){var statearr_18053 = f__6201__auto__.call(null);
(statearr_18053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___18054);

return statearr_18053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___18054,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t18074 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18074 = (function (ch,f,map_LT_,meta18075){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18075 = meta18075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18074.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18074.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t18074.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18074.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t18077 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18077 = (function (fn1,_,meta18075,map_LT_,f,ch,meta18078){
this.fn1 = fn1;
this._ = _;
this.meta18075 = meta18075;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18078 = meta18078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18077.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18077.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t18077.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18067_SHARP_){
return f1.call(null,(((p1__18067_SHARP_ == null))?null:self__.f.call(null,p1__18067_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t18077.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18079){
var self__ = this;
var _18079__$1 = this;
return self__.meta18078;
});})(___$1))
;

cljs.core.async.t18077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18079,meta18078__$1){
var self__ = this;
var _18079__$1 = this;
return (new cljs.core.async.t18077(self__.fn1,self__._,self__.meta18075,self__.map_LT_,self__.f,self__.ch,meta18078__$1));
});})(___$1))
;

cljs.core.async.t18077.cljs$lang$type = true;

cljs.core.async.t18077.cljs$lang$ctorStr = "cljs.core.async/t18077";

cljs.core.async.t18077.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t18077");
});})(___$1))
;

cljs.core.async.__GT_t18077 = ((function (___$1){
return (function __GT_t18077(fn1__$1,___$2,meta18075__$1,map_LT___$1,f__$1,ch__$1,meta18078){
return (new cljs.core.async.t18077(fn1__$1,___$2,meta18075__$1,map_LT___$1,f__$1,ch__$1,meta18078));
});})(___$1))
;

}

return (new cljs.core.async.t18077(fn1,___$1,self__.meta18075,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3240__auto__ = ret;
if(cljs.core.truth_(and__3240__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3240__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t18074.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18074.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18074.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t18074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18076){
var self__ = this;
var _18076__$1 = this;
return self__.meta18075;
});

cljs.core.async.t18074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18076,meta18075__$1){
var self__ = this;
var _18076__$1 = this;
return (new cljs.core.async.t18074(self__.ch,self__.f,self__.map_LT_,meta18075__$1));
});

cljs.core.async.t18074.cljs$lang$type = true;

cljs.core.async.t18074.cljs$lang$ctorStr = "cljs.core.async/t18074";

cljs.core.async.t18074.cljs$lang$ctorPrWriter = (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t18074");
});

cljs.core.async.__GT_t18074 = (function __GT_t18074(ch__$1,f__$1,map_LT___$1,meta18075){
return (new cljs.core.async.t18074(ch__$1,f__$1,map_LT___$1,meta18075));
});

}

return (new cljs.core.async.t18074(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t18083 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18083 = (function (ch,f,map_GT_,meta18084){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta18084 = meta18084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18083.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18083.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t18083.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18083.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t18083.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18083.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18085){
var self__ = this;
var _18085__$1 = this;
return self__.meta18084;
});

cljs.core.async.t18083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18085,meta18084__$1){
var self__ = this;
var _18085__$1 = this;
return (new cljs.core.async.t18083(self__.ch,self__.f,self__.map_GT_,meta18084__$1));
});

cljs.core.async.t18083.cljs$lang$type = true;

cljs.core.async.t18083.cljs$lang$ctorStr = "cljs.core.async/t18083";

cljs.core.async.t18083.cljs$lang$ctorPrWriter = (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t18083");
});

cljs.core.async.__GT_t18083 = (function __GT_t18083(ch__$1,f__$1,map_GT___$1,meta18084){
return (new cljs.core.async.t18083(ch__$1,f__$1,map_GT___$1,meta18084));
});

}

return (new cljs.core.async.t18083(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t18089 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18089 = (function (ch,p,filter_GT_,meta18090){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta18090 = meta18090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18089.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18089.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t18089.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18089.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t18089.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18089.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18089.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t18089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18091){
var self__ = this;
var _18091__$1 = this;
return self__.meta18090;
});

cljs.core.async.t18089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18091,meta18090__$1){
var self__ = this;
var _18091__$1 = this;
return (new cljs.core.async.t18089(self__.ch,self__.p,self__.filter_GT_,meta18090__$1));
});

cljs.core.async.t18089.cljs$lang$type = true;

cljs.core.async.t18089.cljs$lang$ctorStr = "cljs.core.async/t18089";

cljs.core.async.t18089.cljs$lang$ctorPrWriter = (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t18089");
});

cljs.core.async.__GT_t18089 = (function __GT_t18089(ch__$1,p__$1,filter_GT___$1,meta18090){
return (new cljs.core.async.t18089(ch__$1,p__$1,filter_GT___$1,meta18090));
});

}

return (new cljs.core.async.t18089(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6200__auto___18174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___18174,out){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___18174,out){
return (function (state_18153){
var state_val_18154 = (state_18153[(1)]);
if((state_val_18154 === (7))){
var inst_18149 = (state_18153[(2)]);
var state_18153__$1 = state_18153;
var statearr_18155_18175 = state_18153__$1;
(statearr_18155_18175[(2)] = inst_18149);

(statearr_18155_18175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18154 === (1))){
var state_18153__$1 = state_18153;
var statearr_18156_18176 = state_18153__$1;
(statearr_18156_18176[(2)] = null);

(statearr_18156_18176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18154 === (4))){
var inst_18135 = (state_18153[(7)]);
var inst_18135__$1 = (state_18153[(2)]);
var inst_18136 = (inst_18135__$1 == null);
var state_18153__$1 = (function (){var statearr_18157 = state_18153;
(statearr_18157[(7)] = inst_18135__$1);

return statearr_18157;
})();
if(cljs.core.truth_(inst_18136)){
var statearr_18158_18177 = state_18153__$1;
(statearr_18158_18177[(1)] = (5));

} else {
var statearr_18159_18178 = state_18153__$1;
(statearr_18159_18178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18154 === (6))){
var inst_18135 = (state_18153[(7)]);
var inst_18140 = p.call(null,inst_18135);
var state_18153__$1 = state_18153;
if(cljs.core.truth_(inst_18140)){
var statearr_18160_18179 = state_18153__$1;
(statearr_18160_18179[(1)] = (8));

} else {
var statearr_18161_18180 = state_18153__$1;
(statearr_18161_18180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18154 === (3))){
var inst_18151 = (state_18153[(2)]);
var state_18153__$1 = state_18153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18153__$1,inst_18151);
} else {
if((state_val_18154 === (2))){
var state_18153__$1 = state_18153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18153__$1,(4),ch);
} else {
if((state_val_18154 === (11))){
var inst_18143 = (state_18153[(2)]);
var state_18153__$1 = state_18153;
var statearr_18162_18181 = state_18153__$1;
(statearr_18162_18181[(2)] = inst_18143);

(statearr_18162_18181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18154 === (9))){
var state_18153__$1 = state_18153;
var statearr_18163_18182 = state_18153__$1;
(statearr_18163_18182[(2)] = null);

(statearr_18163_18182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18154 === (5))){
var inst_18138 = cljs.core.async.close_BANG_.call(null,out);
var state_18153__$1 = state_18153;
var statearr_18164_18183 = state_18153__$1;
(statearr_18164_18183[(2)] = inst_18138);

(statearr_18164_18183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18154 === (10))){
var inst_18146 = (state_18153[(2)]);
var state_18153__$1 = (function (){var statearr_18165 = state_18153;
(statearr_18165[(8)] = inst_18146);

return statearr_18165;
})();
var statearr_18166_18184 = state_18153__$1;
(statearr_18166_18184[(2)] = null);

(statearr_18166_18184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18154 === (8))){
var inst_18135 = (state_18153[(7)]);
var state_18153__$1 = state_18153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18153__$1,(11),out,inst_18135);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6200__auto___18174,out))
;
return ((function (switch__6144__auto__,c__6200__auto___18174,out){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_18170 = [null,null,null,null,null,null,null,null,null];
(statearr_18170[(0)] = state_machine__6145__auto__);

(statearr_18170[(1)] = (1));

return statearr_18170;
});
var state_machine__6145__auto____1 = (function (state_18153){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_18153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e18171){if((e18171 instanceof Object)){
var ex__6148__auto__ = e18171;
var statearr_18172_18185 = state_18153;
(statearr_18172_18185[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18186 = state_18153;
state_18153 = G__18186;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_18153){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_18153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___18174,out))
})();
var state__6202__auto__ = (function (){var statearr_18173 = f__6201__auto__.call(null);
(statearr_18173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___18174);

return statearr_18173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___18174,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__6200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto__){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto__){
return (function (state_18352){
var state_val_18353 = (state_18352[(1)]);
if((state_val_18353 === (7))){
var inst_18348 = (state_18352[(2)]);
var state_18352__$1 = state_18352;
var statearr_18354_18395 = state_18352__$1;
(statearr_18354_18395[(2)] = inst_18348);

(statearr_18354_18395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (20))){
var inst_18318 = (state_18352[(7)]);
var inst_18329 = (state_18352[(2)]);
var inst_18330 = cljs.core.next.call(null,inst_18318);
var inst_18304 = inst_18330;
var inst_18305 = null;
var inst_18306 = (0);
var inst_18307 = (0);
var state_18352__$1 = (function (){var statearr_18355 = state_18352;
(statearr_18355[(8)] = inst_18304);

(statearr_18355[(9)] = inst_18306);

(statearr_18355[(10)] = inst_18305);

(statearr_18355[(11)] = inst_18307);

(statearr_18355[(12)] = inst_18329);

return statearr_18355;
})();
var statearr_18356_18396 = state_18352__$1;
(statearr_18356_18396[(2)] = null);

(statearr_18356_18396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (1))){
var state_18352__$1 = state_18352;
var statearr_18357_18397 = state_18352__$1;
(statearr_18357_18397[(2)] = null);

(statearr_18357_18397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (4))){
var inst_18293 = (state_18352[(13)]);
var inst_18293__$1 = (state_18352[(2)]);
var inst_18294 = (inst_18293__$1 == null);
var state_18352__$1 = (function (){var statearr_18358 = state_18352;
(statearr_18358[(13)] = inst_18293__$1);

return statearr_18358;
})();
if(cljs.core.truth_(inst_18294)){
var statearr_18359_18398 = state_18352__$1;
(statearr_18359_18398[(1)] = (5));

} else {
var statearr_18360_18399 = state_18352__$1;
(statearr_18360_18399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (15))){
var state_18352__$1 = state_18352;
var statearr_18364_18400 = state_18352__$1;
(statearr_18364_18400[(2)] = null);

(statearr_18364_18400[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (21))){
var state_18352__$1 = state_18352;
var statearr_18365_18401 = state_18352__$1;
(statearr_18365_18401[(2)] = null);

(statearr_18365_18401[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (13))){
var inst_18304 = (state_18352[(8)]);
var inst_18306 = (state_18352[(9)]);
var inst_18305 = (state_18352[(10)]);
var inst_18307 = (state_18352[(11)]);
var inst_18314 = (state_18352[(2)]);
var inst_18315 = (inst_18307 + (1));
var tmp18361 = inst_18304;
var tmp18362 = inst_18306;
var tmp18363 = inst_18305;
var inst_18304__$1 = tmp18361;
var inst_18305__$1 = tmp18363;
var inst_18306__$1 = tmp18362;
var inst_18307__$1 = inst_18315;
var state_18352__$1 = (function (){var statearr_18366 = state_18352;
(statearr_18366[(8)] = inst_18304__$1);

(statearr_18366[(9)] = inst_18306__$1);

(statearr_18366[(10)] = inst_18305__$1);

(statearr_18366[(11)] = inst_18307__$1);

(statearr_18366[(14)] = inst_18314);

return statearr_18366;
})();
var statearr_18367_18402 = state_18352__$1;
(statearr_18367_18402[(2)] = null);

(statearr_18367_18402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (22))){
var state_18352__$1 = state_18352;
var statearr_18368_18403 = state_18352__$1;
(statearr_18368_18403[(2)] = null);

(statearr_18368_18403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (6))){
var inst_18293 = (state_18352[(13)]);
var inst_18302 = f.call(null,inst_18293);
var inst_18303 = cljs.core.seq.call(null,inst_18302);
var inst_18304 = inst_18303;
var inst_18305 = null;
var inst_18306 = (0);
var inst_18307 = (0);
var state_18352__$1 = (function (){var statearr_18369 = state_18352;
(statearr_18369[(8)] = inst_18304);

(statearr_18369[(9)] = inst_18306);

(statearr_18369[(10)] = inst_18305);

(statearr_18369[(11)] = inst_18307);

return statearr_18369;
})();
var statearr_18370_18404 = state_18352__$1;
(statearr_18370_18404[(2)] = null);

(statearr_18370_18404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (17))){
var inst_18318 = (state_18352[(7)]);
var inst_18322 = cljs.core.chunk_first.call(null,inst_18318);
var inst_18323 = cljs.core.chunk_rest.call(null,inst_18318);
var inst_18324 = cljs.core.count.call(null,inst_18322);
var inst_18304 = inst_18323;
var inst_18305 = inst_18322;
var inst_18306 = inst_18324;
var inst_18307 = (0);
var state_18352__$1 = (function (){var statearr_18371 = state_18352;
(statearr_18371[(8)] = inst_18304);

(statearr_18371[(9)] = inst_18306);

(statearr_18371[(10)] = inst_18305);

(statearr_18371[(11)] = inst_18307);

return statearr_18371;
})();
var statearr_18372_18405 = state_18352__$1;
(statearr_18372_18405[(2)] = null);

(statearr_18372_18405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (3))){
var inst_18350 = (state_18352[(2)]);
var state_18352__$1 = state_18352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18352__$1,inst_18350);
} else {
if((state_val_18353 === (12))){
var inst_18338 = (state_18352[(2)]);
var state_18352__$1 = state_18352;
var statearr_18373_18406 = state_18352__$1;
(statearr_18373_18406[(2)] = inst_18338);

(statearr_18373_18406[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (2))){
var state_18352__$1 = state_18352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18352__$1,(4),in$);
} else {
if((state_val_18353 === (23))){
var inst_18346 = (state_18352[(2)]);
var state_18352__$1 = state_18352;
var statearr_18374_18407 = state_18352__$1;
(statearr_18374_18407[(2)] = inst_18346);

(statearr_18374_18407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (19))){
var inst_18333 = (state_18352[(2)]);
var state_18352__$1 = state_18352;
var statearr_18375_18408 = state_18352__$1;
(statearr_18375_18408[(2)] = inst_18333);

(statearr_18375_18408[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (11))){
var inst_18304 = (state_18352[(8)]);
var inst_18318 = (state_18352[(7)]);
var inst_18318__$1 = cljs.core.seq.call(null,inst_18304);
var state_18352__$1 = (function (){var statearr_18376 = state_18352;
(statearr_18376[(7)] = inst_18318__$1);

return statearr_18376;
})();
if(inst_18318__$1){
var statearr_18377_18409 = state_18352__$1;
(statearr_18377_18409[(1)] = (14));

} else {
var statearr_18378_18410 = state_18352__$1;
(statearr_18378_18410[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (9))){
var inst_18340 = (state_18352[(2)]);
var inst_18341 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18352__$1 = (function (){var statearr_18379 = state_18352;
(statearr_18379[(15)] = inst_18340);

return statearr_18379;
})();
if(cljs.core.truth_(inst_18341)){
var statearr_18380_18411 = state_18352__$1;
(statearr_18380_18411[(1)] = (21));

} else {
var statearr_18381_18412 = state_18352__$1;
(statearr_18381_18412[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (5))){
var inst_18296 = cljs.core.async.close_BANG_.call(null,out);
var state_18352__$1 = state_18352;
var statearr_18382_18413 = state_18352__$1;
(statearr_18382_18413[(2)] = inst_18296);

(statearr_18382_18413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (14))){
var inst_18318 = (state_18352[(7)]);
var inst_18320 = cljs.core.chunked_seq_QMARK_.call(null,inst_18318);
var state_18352__$1 = state_18352;
if(inst_18320){
var statearr_18383_18414 = state_18352__$1;
(statearr_18383_18414[(1)] = (17));

} else {
var statearr_18384_18415 = state_18352__$1;
(statearr_18384_18415[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (16))){
var inst_18336 = (state_18352[(2)]);
var state_18352__$1 = state_18352;
var statearr_18385_18416 = state_18352__$1;
(statearr_18385_18416[(2)] = inst_18336);

(statearr_18385_18416[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (10))){
var inst_18305 = (state_18352[(10)]);
var inst_18307 = (state_18352[(11)]);
var inst_18312 = cljs.core._nth.call(null,inst_18305,inst_18307);
var state_18352__$1 = state_18352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18352__$1,(13),out,inst_18312);
} else {
if((state_val_18353 === (18))){
var inst_18318 = (state_18352[(7)]);
var inst_18327 = cljs.core.first.call(null,inst_18318);
var state_18352__$1 = state_18352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18352__$1,(20),out,inst_18327);
} else {
if((state_val_18353 === (8))){
var inst_18306 = (state_18352[(9)]);
var inst_18307 = (state_18352[(11)]);
var inst_18309 = (inst_18307 < inst_18306);
var inst_18310 = inst_18309;
var state_18352__$1 = state_18352;
if(cljs.core.truth_(inst_18310)){
var statearr_18386_18417 = state_18352__$1;
(statearr_18386_18417[(1)] = (10));

} else {
var statearr_18387_18418 = state_18352__$1;
(statearr_18387_18418[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6200__auto__))
;
return ((function (switch__6144__auto__,c__6200__auto__){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_18391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18391[(0)] = state_machine__6145__auto__);

(statearr_18391[(1)] = (1));

return statearr_18391;
});
var state_machine__6145__auto____1 = (function (state_18352){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_18352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e18392){if((e18392 instanceof Object)){
var ex__6148__auto__ = e18392;
var statearr_18393_18419 = state_18352;
(statearr_18393_18419[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18420 = state_18352;
state_18352 = G__18420;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_18352){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_18352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto__))
})();
var state__6202__auto__ = (function (){var statearr_18394 = f__6201__auto__.call(null);
(statearr_18394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto__);

return statearr_18394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto__))
);

return c__6200__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6200__auto___18517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___18517,out){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___18517,out){
return (function (state_18492){
var state_val_18493 = (state_18492[(1)]);
if((state_val_18493 === (7))){
var inst_18487 = (state_18492[(2)]);
var state_18492__$1 = state_18492;
var statearr_18494_18518 = state_18492__$1;
(statearr_18494_18518[(2)] = inst_18487);

(statearr_18494_18518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18493 === (1))){
var inst_18469 = null;
var state_18492__$1 = (function (){var statearr_18495 = state_18492;
(statearr_18495[(7)] = inst_18469);

return statearr_18495;
})();
var statearr_18496_18519 = state_18492__$1;
(statearr_18496_18519[(2)] = null);

(statearr_18496_18519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18493 === (4))){
var inst_18472 = (state_18492[(8)]);
var inst_18472__$1 = (state_18492[(2)]);
var inst_18473 = (inst_18472__$1 == null);
var inst_18474 = cljs.core.not.call(null,inst_18473);
var state_18492__$1 = (function (){var statearr_18497 = state_18492;
(statearr_18497[(8)] = inst_18472__$1);

return statearr_18497;
})();
if(inst_18474){
var statearr_18498_18520 = state_18492__$1;
(statearr_18498_18520[(1)] = (5));

} else {
var statearr_18499_18521 = state_18492__$1;
(statearr_18499_18521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18493 === (6))){
var state_18492__$1 = state_18492;
var statearr_18500_18522 = state_18492__$1;
(statearr_18500_18522[(2)] = null);

(statearr_18500_18522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18493 === (3))){
var inst_18489 = (state_18492[(2)]);
var inst_18490 = cljs.core.async.close_BANG_.call(null,out);
var state_18492__$1 = (function (){var statearr_18501 = state_18492;
(statearr_18501[(9)] = inst_18489);

return statearr_18501;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18492__$1,inst_18490);
} else {
if((state_val_18493 === (2))){
var state_18492__$1 = state_18492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18492__$1,(4),ch);
} else {
if((state_val_18493 === (11))){
var inst_18472 = (state_18492[(8)]);
var inst_18481 = (state_18492[(2)]);
var inst_18469 = inst_18472;
var state_18492__$1 = (function (){var statearr_18502 = state_18492;
(statearr_18502[(7)] = inst_18469);

(statearr_18502[(10)] = inst_18481);

return statearr_18502;
})();
var statearr_18503_18523 = state_18492__$1;
(statearr_18503_18523[(2)] = null);

(statearr_18503_18523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18493 === (9))){
var inst_18472 = (state_18492[(8)]);
var state_18492__$1 = state_18492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18492__$1,(11),out,inst_18472);
} else {
if((state_val_18493 === (5))){
var inst_18469 = (state_18492[(7)]);
var inst_18472 = (state_18492[(8)]);
var inst_18476 = cljs.core._EQ_.call(null,inst_18472,inst_18469);
var state_18492__$1 = state_18492;
if(inst_18476){
var statearr_18505_18524 = state_18492__$1;
(statearr_18505_18524[(1)] = (8));

} else {
var statearr_18506_18525 = state_18492__$1;
(statearr_18506_18525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18493 === (10))){
var inst_18484 = (state_18492[(2)]);
var state_18492__$1 = state_18492;
var statearr_18507_18526 = state_18492__$1;
(statearr_18507_18526[(2)] = inst_18484);

(statearr_18507_18526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18493 === (8))){
var inst_18469 = (state_18492[(7)]);
var tmp18504 = inst_18469;
var inst_18469__$1 = tmp18504;
var state_18492__$1 = (function (){var statearr_18508 = state_18492;
(statearr_18508[(7)] = inst_18469__$1);

return statearr_18508;
})();
var statearr_18509_18527 = state_18492__$1;
(statearr_18509_18527[(2)] = null);

(statearr_18509_18527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6200__auto___18517,out))
;
return ((function (switch__6144__auto__,c__6200__auto___18517,out){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_18513 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18513[(0)] = state_machine__6145__auto__);

(statearr_18513[(1)] = (1));

return statearr_18513;
});
var state_machine__6145__auto____1 = (function (state_18492){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_18492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e18514){if((e18514 instanceof Object)){
var ex__6148__auto__ = e18514;
var statearr_18515_18528 = state_18492;
(statearr_18515_18528[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18529 = state_18492;
state_18492 = G__18529;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_18492){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_18492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___18517,out))
})();
var state__6202__auto__ = (function (){var statearr_18516 = f__6201__auto__.call(null);
(statearr_18516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___18517);

return statearr_18516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___18517,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6200__auto___18664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___18664,out){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___18664,out){
return (function (state_18634){
var state_val_18635 = (state_18634[(1)]);
if((state_val_18635 === (7))){
var inst_18630 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
var statearr_18636_18665 = state_18634__$1;
(statearr_18636_18665[(2)] = inst_18630);

(statearr_18636_18665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (1))){
var inst_18597 = (new Array(n));
var inst_18598 = inst_18597;
var inst_18599 = (0);
var state_18634__$1 = (function (){var statearr_18637 = state_18634;
(statearr_18637[(7)] = inst_18598);

(statearr_18637[(8)] = inst_18599);

return statearr_18637;
})();
var statearr_18638_18666 = state_18634__$1;
(statearr_18638_18666[(2)] = null);

(statearr_18638_18666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (4))){
var inst_18602 = (state_18634[(9)]);
var inst_18602__$1 = (state_18634[(2)]);
var inst_18603 = (inst_18602__$1 == null);
var inst_18604 = cljs.core.not.call(null,inst_18603);
var state_18634__$1 = (function (){var statearr_18639 = state_18634;
(statearr_18639[(9)] = inst_18602__$1);

return statearr_18639;
})();
if(inst_18604){
var statearr_18640_18667 = state_18634__$1;
(statearr_18640_18667[(1)] = (5));

} else {
var statearr_18641_18668 = state_18634__$1;
(statearr_18641_18668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (15))){
var inst_18624 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
var statearr_18642_18669 = state_18634__$1;
(statearr_18642_18669[(2)] = inst_18624);

(statearr_18642_18669[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (13))){
var state_18634__$1 = state_18634;
var statearr_18643_18670 = state_18634__$1;
(statearr_18643_18670[(2)] = null);

(statearr_18643_18670[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (6))){
var inst_18599 = (state_18634[(8)]);
var inst_18620 = (inst_18599 > (0));
var state_18634__$1 = state_18634;
if(cljs.core.truth_(inst_18620)){
var statearr_18644_18671 = state_18634__$1;
(statearr_18644_18671[(1)] = (12));

} else {
var statearr_18645_18672 = state_18634__$1;
(statearr_18645_18672[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (3))){
var inst_18632 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18634__$1,inst_18632);
} else {
if((state_val_18635 === (12))){
var inst_18598 = (state_18634[(7)]);
var inst_18622 = cljs.core.vec.call(null,inst_18598);
var state_18634__$1 = state_18634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18634__$1,(15),out,inst_18622);
} else {
if((state_val_18635 === (2))){
var state_18634__$1 = state_18634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18634__$1,(4),ch);
} else {
if((state_val_18635 === (11))){
var inst_18614 = (state_18634[(2)]);
var inst_18615 = (new Array(n));
var inst_18598 = inst_18615;
var inst_18599 = (0);
var state_18634__$1 = (function (){var statearr_18646 = state_18634;
(statearr_18646[(7)] = inst_18598);

(statearr_18646[(8)] = inst_18599);

(statearr_18646[(10)] = inst_18614);

return statearr_18646;
})();
var statearr_18647_18673 = state_18634__$1;
(statearr_18647_18673[(2)] = null);

(statearr_18647_18673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (9))){
var inst_18598 = (state_18634[(7)]);
var inst_18612 = cljs.core.vec.call(null,inst_18598);
var state_18634__$1 = state_18634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18634__$1,(11),out,inst_18612);
} else {
if((state_val_18635 === (5))){
var inst_18598 = (state_18634[(7)]);
var inst_18607 = (state_18634[(11)]);
var inst_18602 = (state_18634[(9)]);
var inst_18599 = (state_18634[(8)]);
var inst_18606 = (inst_18598[inst_18599] = inst_18602);
var inst_18607__$1 = (inst_18599 + (1));
var inst_18608 = (inst_18607__$1 < n);
var state_18634__$1 = (function (){var statearr_18648 = state_18634;
(statearr_18648[(12)] = inst_18606);

(statearr_18648[(11)] = inst_18607__$1);

return statearr_18648;
})();
if(cljs.core.truth_(inst_18608)){
var statearr_18649_18674 = state_18634__$1;
(statearr_18649_18674[(1)] = (8));

} else {
var statearr_18650_18675 = state_18634__$1;
(statearr_18650_18675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (14))){
var inst_18627 = (state_18634[(2)]);
var inst_18628 = cljs.core.async.close_BANG_.call(null,out);
var state_18634__$1 = (function (){var statearr_18652 = state_18634;
(statearr_18652[(13)] = inst_18627);

return statearr_18652;
})();
var statearr_18653_18676 = state_18634__$1;
(statearr_18653_18676[(2)] = inst_18628);

(statearr_18653_18676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (10))){
var inst_18618 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
var statearr_18654_18677 = state_18634__$1;
(statearr_18654_18677[(2)] = inst_18618);

(statearr_18654_18677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (8))){
var inst_18598 = (state_18634[(7)]);
var inst_18607 = (state_18634[(11)]);
var tmp18651 = inst_18598;
var inst_18598__$1 = tmp18651;
var inst_18599 = inst_18607;
var state_18634__$1 = (function (){var statearr_18655 = state_18634;
(statearr_18655[(7)] = inst_18598__$1);

(statearr_18655[(8)] = inst_18599);

return statearr_18655;
})();
var statearr_18656_18678 = state_18634__$1;
(statearr_18656_18678[(2)] = null);

(statearr_18656_18678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6200__auto___18664,out))
;
return ((function (switch__6144__auto__,c__6200__auto___18664,out){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_18660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18660[(0)] = state_machine__6145__auto__);

(statearr_18660[(1)] = (1));

return statearr_18660;
});
var state_machine__6145__auto____1 = (function (state_18634){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_18634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e18661){if((e18661 instanceof Object)){
var ex__6148__auto__ = e18661;
var statearr_18662_18679 = state_18634;
(statearr_18662_18679[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18680 = state_18634;
state_18634 = G__18680;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_18634){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_18634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___18664,out))
})();
var state__6202__auto__ = (function (){var statearr_18663 = f__6201__auto__.call(null);
(statearr_18663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___18664);

return statearr_18663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___18664,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6200__auto___18823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___18823,out){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___18823,out){
return (function (state_18793){
var state_val_18794 = (state_18793[(1)]);
if((state_val_18794 === (7))){
var inst_18789 = (state_18793[(2)]);
var state_18793__$1 = state_18793;
var statearr_18795_18824 = state_18793__$1;
(statearr_18795_18824[(2)] = inst_18789);

(statearr_18795_18824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (1))){
var inst_18752 = [];
var inst_18753 = inst_18752;
var inst_18754 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18793__$1 = (function (){var statearr_18796 = state_18793;
(statearr_18796[(7)] = inst_18753);

(statearr_18796[(8)] = inst_18754);

return statearr_18796;
})();
var statearr_18797_18825 = state_18793__$1;
(statearr_18797_18825[(2)] = null);

(statearr_18797_18825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (4))){
var inst_18757 = (state_18793[(9)]);
var inst_18757__$1 = (state_18793[(2)]);
var inst_18758 = (inst_18757__$1 == null);
var inst_18759 = cljs.core.not.call(null,inst_18758);
var state_18793__$1 = (function (){var statearr_18798 = state_18793;
(statearr_18798[(9)] = inst_18757__$1);

return statearr_18798;
})();
if(inst_18759){
var statearr_18799_18826 = state_18793__$1;
(statearr_18799_18826[(1)] = (5));

} else {
var statearr_18800_18827 = state_18793__$1;
(statearr_18800_18827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (15))){
var inst_18783 = (state_18793[(2)]);
var state_18793__$1 = state_18793;
var statearr_18801_18828 = state_18793__$1;
(statearr_18801_18828[(2)] = inst_18783);

(statearr_18801_18828[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (13))){
var state_18793__$1 = state_18793;
var statearr_18802_18829 = state_18793__$1;
(statearr_18802_18829[(2)] = null);

(statearr_18802_18829[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (6))){
var inst_18753 = (state_18793[(7)]);
var inst_18778 = inst_18753.length;
var inst_18779 = (inst_18778 > (0));
var state_18793__$1 = state_18793;
if(cljs.core.truth_(inst_18779)){
var statearr_18803_18830 = state_18793__$1;
(statearr_18803_18830[(1)] = (12));

} else {
var statearr_18804_18831 = state_18793__$1;
(statearr_18804_18831[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (3))){
var inst_18791 = (state_18793[(2)]);
var state_18793__$1 = state_18793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18793__$1,inst_18791);
} else {
if((state_val_18794 === (12))){
var inst_18753 = (state_18793[(7)]);
var inst_18781 = cljs.core.vec.call(null,inst_18753);
var state_18793__$1 = state_18793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18793__$1,(15),out,inst_18781);
} else {
if((state_val_18794 === (2))){
var state_18793__$1 = state_18793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18793__$1,(4),ch);
} else {
if((state_val_18794 === (11))){
var inst_18761 = (state_18793[(10)]);
var inst_18757 = (state_18793[(9)]);
var inst_18771 = (state_18793[(2)]);
var inst_18772 = [];
var inst_18773 = inst_18772.push(inst_18757);
var inst_18753 = inst_18772;
var inst_18754 = inst_18761;
var state_18793__$1 = (function (){var statearr_18805 = state_18793;
(statearr_18805[(11)] = inst_18773);

(statearr_18805[(12)] = inst_18771);

(statearr_18805[(7)] = inst_18753);

(statearr_18805[(8)] = inst_18754);

return statearr_18805;
})();
var statearr_18806_18832 = state_18793__$1;
(statearr_18806_18832[(2)] = null);

(statearr_18806_18832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (9))){
var inst_18753 = (state_18793[(7)]);
var inst_18769 = cljs.core.vec.call(null,inst_18753);
var state_18793__$1 = state_18793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18793__$1,(11),out,inst_18769);
} else {
if((state_val_18794 === (5))){
var inst_18761 = (state_18793[(10)]);
var inst_18754 = (state_18793[(8)]);
var inst_18757 = (state_18793[(9)]);
var inst_18761__$1 = f.call(null,inst_18757);
var inst_18762 = cljs.core._EQ_.call(null,inst_18761__$1,inst_18754);
var inst_18763 = cljs.core.keyword_identical_QMARK_.call(null,inst_18754,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18764 = (inst_18762) || (inst_18763);
var state_18793__$1 = (function (){var statearr_18807 = state_18793;
(statearr_18807[(10)] = inst_18761__$1);

return statearr_18807;
})();
if(cljs.core.truth_(inst_18764)){
var statearr_18808_18833 = state_18793__$1;
(statearr_18808_18833[(1)] = (8));

} else {
var statearr_18809_18834 = state_18793__$1;
(statearr_18809_18834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (14))){
var inst_18786 = (state_18793[(2)]);
var inst_18787 = cljs.core.async.close_BANG_.call(null,out);
var state_18793__$1 = (function (){var statearr_18811 = state_18793;
(statearr_18811[(13)] = inst_18786);

return statearr_18811;
})();
var statearr_18812_18835 = state_18793__$1;
(statearr_18812_18835[(2)] = inst_18787);

(statearr_18812_18835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (10))){
var inst_18776 = (state_18793[(2)]);
var state_18793__$1 = state_18793;
var statearr_18813_18836 = state_18793__$1;
(statearr_18813_18836[(2)] = inst_18776);

(statearr_18813_18836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (8))){
var inst_18761 = (state_18793[(10)]);
var inst_18753 = (state_18793[(7)]);
var inst_18757 = (state_18793[(9)]);
var inst_18766 = inst_18753.push(inst_18757);
var tmp18810 = inst_18753;
var inst_18753__$1 = tmp18810;
var inst_18754 = inst_18761;
var state_18793__$1 = (function (){var statearr_18814 = state_18793;
(statearr_18814[(7)] = inst_18753__$1);

(statearr_18814[(8)] = inst_18754);

(statearr_18814[(14)] = inst_18766);

return statearr_18814;
})();
var statearr_18815_18837 = state_18793__$1;
(statearr_18815_18837[(2)] = null);

(statearr_18815_18837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6200__auto___18823,out))
;
return ((function (switch__6144__auto__,c__6200__auto___18823,out){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_18819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18819[(0)] = state_machine__6145__auto__);

(statearr_18819[(1)] = (1));

return statearr_18819;
});
var state_machine__6145__auto____1 = (function (state_18793){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_18793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e18820){if((e18820 instanceof Object)){
var ex__6148__auto__ = e18820;
var statearr_18821_18838 = state_18793;
(statearr_18821_18838[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18839 = state_18793;
state_18793 = G__18839;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_18793){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_18793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___18823,out))
})();
var state__6202__auto__ = (function (){var statearr_18822 = f__6201__auto__.call(null);
(statearr_18822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___18823);

return statearr_18822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___18823,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map