// Compiled by ClojureScript 0.0-2913 {:elide-asserts false}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t27126 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27126 = (function (f,fn_handler,meta27127){
this.f = f;
this.fn_handler = fn_handler;
this.meta27127 = meta27127;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27126.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27126.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t27126.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t27126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27128){
var self__ = this;
var _27128__$1 = this;
return self__.meta27127;
});

cljs.core.async.t27126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27128,meta27127__$1){
var self__ = this;
var _27128__$1 = this;
return (new cljs.core.async.t27126(self__.f,self__.fn_handler,meta27127__$1));
});

cljs.core.async.t27126.cljs$lang$type = true;

cljs.core.async.t27126.cljs$lang$ctorStr = "cljs.core.async/t27126";

cljs.core.async.t27126.cljs$lang$ctorPrWriter = (function (this__14052__auto__,writer__14053__auto__,opt__14054__auto__){
return cljs.core._write.call(null,writer__14053__auto__,"cljs.core.async/t27126");
});

cljs.core.async.__GT_t27126 = (function __GT_t27126(f__$1,fn_handler__$1,meta27127){
return (new cljs.core.async.t27126(f__$1,fn_handler__$1,meta27127));
});

}

return (new cljs.core.async.t27126(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27130 = buff;
if(G__27130){
var bit__14146__auto__ = null;
if(cljs.core.truth_((function (){var or__13465__auto__ = bit__14146__auto__;
if(cljs.core.truth_(or__13465__auto__)){
return or__13465__auto__;
} else {
return G__27130.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__27130.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27130);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27130);
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
var val_27131 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27131);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27131,ret){
return (function (){
return fn1.call(null,val_27131);
});})(val_27131,ret))
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
var n__14352__auto___27132 = n;
var x_27133 = (0);
while(true){
if((x_27133 < n__14352__auto___27132)){
(a[x_27133] = (0));

var G__27134 = (x_27133 + (1));
x_27133 = G__27134;
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

var G__27135 = (i + (1));
i = G__27135;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27139 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27139 = (function (flag,alt_flag,meta27140){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27140 = meta27140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27139.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27139.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27139.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27139.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27141){
var self__ = this;
var _27141__$1 = this;
return self__.meta27140;
});})(flag))
;

cljs.core.async.t27139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27141,meta27140__$1){
var self__ = this;
var _27141__$1 = this;
return (new cljs.core.async.t27139(self__.flag,self__.alt_flag,meta27140__$1));
});})(flag))
;

cljs.core.async.t27139.cljs$lang$type = true;

cljs.core.async.t27139.cljs$lang$ctorStr = "cljs.core.async/t27139";

cljs.core.async.t27139.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__14052__auto__,writer__14053__auto__,opt__14054__auto__){
return cljs.core._write.call(null,writer__14053__auto__,"cljs.core.async/t27139");
});})(flag))
;

cljs.core.async.__GT_t27139 = ((function (flag){
return (function __GT_t27139(flag__$1,alt_flag__$1,meta27140){
return (new cljs.core.async.t27139(flag__$1,alt_flag__$1,meta27140));
});})(flag))
;

}

return (new cljs.core.async.t27139(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t27145 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27145 = (function (cb,flag,alt_handler,meta27146){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27146 = meta27146;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27145.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27145.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27145.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27147){
var self__ = this;
var _27147__$1 = this;
return self__.meta27146;
});

cljs.core.async.t27145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27147,meta27146__$1){
var self__ = this;
var _27147__$1 = this;
return (new cljs.core.async.t27145(self__.cb,self__.flag,self__.alt_handler,meta27146__$1));
});

cljs.core.async.t27145.cljs$lang$type = true;

cljs.core.async.t27145.cljs$lang$ctorStr = "cljs.core.async/t27145";

cljs.core.async.t27145.cljs$lang$ctorPrWriter = (function (this__14052__auto__,writer__14053__auto__,opt__14054__auto__){
return cljs.core._write.call(null,writer__14053__auto__,"cljs.core.async/t27145");
});

cljs.core.async.__GT_t27145 = (function __GT_t27145(cb__$1,flag__$1,alt_handler__$1,meta27146){
return (new cljs.core.async.t27145(cb__$1,flag__$1,alt_handler__$1,meta27146));
});

}

return (new cljs.core.async.t27145(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27148_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27148_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27149_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27149_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__13465__auto__ = wport;
if(cljs.core.truth_(or__13465__auto__)){
return or__13465__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27150 = (i + (1));
i = G__27150;
continue;
}
} else {
return null;
}
break;
}
})();
var or__13465__auto__ = ret;
if(cljs.core.truth_(or__13465__auto__)){
return or__13465__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__13453__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__13453__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__13453__auto__;
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
var alts_BANG___delegate = function (ports,p__27151){
var map__27153 = p__27151;
var map__27153__$1 = ((cljs.core.seq_QMARK_.call(null,map__27153))?cljs.core.apply.call(null,cljs.core.hash_map,map__27153):map__27153);
var opts = map__27153__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__27151 = null;
if (arguments.length > 1) {
var G__27154__i = 0, G__27154__a = new Array(arguments.length -  1);
while (G__27154__i < G__27154__a.length) {G__27154__a[G__27154__i] = arguments[G__27154__i + 1]; ++G__27154__i;}
  p__27151 = new cljs.core.IndexedSeq(G__27154__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__27151);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__27155){
var ports = cljs.core.first(arglist__27155);
var p__27151 = cljs.core.rest(arglist__27155);
return alts_BANG___delegate(ports,p__27151);
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
var c__16133__auto___27250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto___27250){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto___27250){
return (function (state_27226){
var state_val_27227 = (state_27226[(1)]);
if((state_val_27227 === (7))){
var inst_27222 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
var statearr_27228_27251 = state_27226__$1;
(statearr_27228_27251[(2)] = inst_27222);

(statearr_27228_27251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (1))){
var state_27226__$1 = state_27226;
var statearr_27229_27252 = state_27226__$1;
(statearr_27229_27252[(2)] = null);

(statearr_27229_27252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (4))){
var inst_27205 = (state_27226[(7)]);
var inst_27205__$1 = (state_27226[(2)]);
var inst_27206 = (inst_27205__$1 == null);
var state_27226__$1 = (function (){var statearr_27230 = state_27226;
(statearr_27230[(7)] = inst_27205__$1);

return statearr_27230;
})();
if(cljs.core.truth_(inst_27206)){
var statearr_27231_27253 = state_27226__$1;
(statearr_27231_27253[(1)] = (5));

} else {
var statearr_27232_27254 = state_27226__$1;
(statearr_27232_27254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (13))){
var state_27226__$1 = state_27226;
var statearr_27233_27255 = state_27226__$1;
(statearr_27233_27255[(2)] = null);

(statearr_27233_27255[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (6))){
var inst_27205 = (state_27226[(7)]);
var state_27226__$1 = state_27226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27226__$1,(11),to,inst_27205);
} else {
if((state_val_27227 === (3))){
var inst_27224 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27226__$1,inst_27224);
} else {
if((state_val_27227 === (12))){
var state_27226__$1 = state_27226;
var statearr_27234_27256 = state_27226__$1;
(statearr_27234_27256[(2)] = null);

(statearr_27234_27256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (2))){
var state_27226__$1 = state_27226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27226__$1,(4),from);
} else {
if((state_val_27227 === (11))){
var inst_27215 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
if(cljs.core.truth_(inst_27215)){
var statearr_27235_27257 = state_27226__$1;
(statearr_27235_27257[(1)] = (12));

} else {
var statearr_27236_27258 = state_27226__$1;
(statearr_27236_27258[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (9))){
var state_27226__$1 = state_27226;
var statearr_27237_27259 = state_27226__$1;
(statearr_27237_27259[(2)] = null);

(statearr_27237_27259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (5))){
var state_27226__$1 = state_27226;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27238_27260 = state_27226__$1;
(statearr_27238_27260[(1)] = (8));

} else {
var statearr_27239_27261 = state_27226__$1;
(statearr_27239_27261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (14))){
var inst_27220 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
var statearr_27240_27262 = state_27226__$1;
(statearr_27240_27262[(2)] = inst_27220);

(statearr_27240_27262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (10))){
var inst_27212 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
var statearr_27241_27263 = state_27226__$1;
(statearr_27241_27263[(2)] = inst_27212);

(statearr_27241_27263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (8))){
var inst_27209 = cljs.core.async.close_BANG_.call(null,to);
var state_27226__$1 = state_27226;
var statearr_27242_27264 = state_27226__$1;
(statearr_27242_27264[(2)] = inst_27209);

(statearr_27242_27264[(1)] = (10));


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
});})(c__16133__auto___27250))
;
return ((function (switch__16077__auto__,c__16133__auto___27250){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_27246 = [null,null,null,null,null,null,null,null];
(statearr_27246[(0)] = state_machine__16078__auto__);

(statearr_27246[(1)] = (1));

return statearr_27246;
});
var state_machine__16078__auto____1 = (function (state_27226){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_27226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e27247){if((e27247 instanceof Object)){
var ex__16081__auto__ = e27247;
var statearr_27248_27265 = state_27226;
(statearr_27248_27265[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27266 = state_27226;
state_27226 = G__27266;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_27226){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_27226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto___27250))
})();
var state__16135__auto__ = (function (){var statearr_27249 = f__16134__auto__.call(null);
(statearr_27249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___27250);

return statearr_27249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto___27250))
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
return (function (p__27450){
var vec__27451 = p__27450;
var v = cljs.core.nth.call(null,vec__27451,(0),null);
var p = cljs.core.nth.call(null,vec__27451,(1),null);
var job = vec__27451;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16133__auto___27633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto___27633,res,vec__27451,v,p,job,jobs,results){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto___27633,res,vec__27451,v,p,job,jobs,results){
return (function (state_27456){
var state_val_27457 = (state_27456[(1)]);
if((state_val_27457 === (2))){
var inst_27453 = (state_27456[(2)]);
var inst_27454 = cljs.core.async.close_BANG_.call(null,res);
var state_27456__$1 = (function (){var statearr_27458 = state_27456;
(statearr_27458[(7)] = inst_27453);

return statearr_27458;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27456__$1,inst_27454);
} else {
if((state_val_27457 === (1))){
var state_27456__$1 = state_27456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27456__$1,(2),res,v);
} else {
return null;
}
}
});})(c__16133__auto___27633,res,vec__27451,v,p,job,jobs,results))
;
return ((function (switch__16077__auto__,c__16133__auto___27633,res,vec__27451,v,p,job,jobs,results){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_27462 = [null,null,null,null,null,null,null,null];
(statearr_27462[(0)] = state_machine__16078__auto__);

(statearr_27462[(1)] = (1));

return statearr_27462;
});
var state_machine__16078__auto____1 = (function (state_27456){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_27456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e27463){if((e27463 instanceof Object)){
var ex__16081__auto__ = e27463;
var statearr_27464_27634 = state_27456;
(statearr_27464_27634[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27635 = state_27456;
state_27456 = G__27635;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_27456){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_27456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto___27633,res,vec__27451,v,p,job,jobs,results))
})();
var state__16135__auto__ = (function (){var statearr_27465 = f__16134__auto__.call(null);
(statearr_27465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___27633);

return statearr_27465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto___27633,res,vec__27451,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27466){
var vec__27467 = p__27466;
var v = cljs.core.nth.call(null,vec__27467,(0),null);
var p = cljs.core.nth.call(null,vec__27467,(1),null);
var job = vec__27467;
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
var n__14352__auto___27636 = n;
var __27637 = (0);
while(true){
if((__27637 < n__14352__auto___27636)){
var G__27468_27638 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27468_27638) {
case "async":
var c__16133__auto___27640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27637,c__16133__auto___27640,G__27468_27638,n__14352__auto___27636,jobs,results,process,async){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (__27637,c__16133__auto___27640,G__27468_27638,n__14352__auto___27636,jobs,results,process,async){
return (function (state_27481){
var state_val_27482 = (state_27481[(1)]);
if((state_val_27482 === (7))){
var inst_27477 = (state_27481[(2)]);
var state_27481__$1 = state_27481;
var statearr_27483_27641 = state_27481__$1;
(statearr_27483_27641[(2)] = inst_27477);

(statearr_27483_27641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (6))){
var state_27481__$1 = state_27481;
var statearr_27484_27642 = state_27481__$1;
(statearr_27484_27642[(2)] = null);

(statearr_27484_27642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (5))){
var state_27481__$1 = state_27481;
var statearr_27485_27643 = state_27481__$1;
(statearr_27485_27643[(2)] = null);

(statearr_27485_27643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (4))){
var inst_27471 = (state_27481[(2)]);
var inst_27472 = async.call(null,inst_27471);
var state_27481__$1 = state_27481;
if(cljs.core.truth_(inst_27472)){
var statearr_27486_27644 = state_27481__$1;
(statearr_27486_27644[(1)] = (5));

} else {
var statearr_27487_27645 = state_27481__$1;
(statearr_27487_27645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (3))){
var inst_27479 = (state_27481[(2)]);
var state_27481__$1 = state_27481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27481__$1,inst_27479);
} else {
if((state_val_27482 === (2))){
var state_27481__$1 = state_27481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27481__$1,(4),jobs);
} else {
if((state_val_27482 === (1))){
var state_27481__$1 = state_27481;
var statearr_27488_27646 = state_27481__$1;
(statearr_27488_27646[(2)] = null);

(statearr_27488_27646[(1)] = (2));


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
});})(__27637,c__16133__auto___27640,G__27468_27638,n__14352__auto___27636,jobs,results,process,async))
;
return ((function (__27637,switch__16077__auto__,c__16133__auto___27640,G__27468_27638,n__14352__auto___27636,jobs,results,process,async){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_27492 = [null,null,null,null,null,null,null];
(statearr_27492[(0)] = state_machine__16078__auto__);

(statearr_27492[(1)] = (1));

return statearr_27492;
});
var state_machine__16078__auto____1 = (function (state_27481){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_27481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e27493){if((e27493 instanceof Object)){
var ex__16081__auto__ = e27493;
var statearr_27494_27647 = state_27481;
(statearr_27494_27647[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27648 = state_27481;
state_27481 = G__27648;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_27481){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_27481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(__27637,switch__16077__auto__,c__16133__auto___27640,G__27468_27638,n__14352__auto___27636,jobs,results,process,async))
})();
var state__16135__auto__ = (function (){var statearr_27495 = f__16134__auto__.call(null);
(statearr_27495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___27640);

return statearr_27495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(__27637,c__16133__auto___27640,G__27468_27638,n__14352__auto___27636,jobs,results,process,async))
);


break;
case "compute":
var c__16133__auto___27649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27637,c__16133__auto___27649,G__27468_27638,n__14352__auto___27636,jobs,results,process,async){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (__27637,c__16133__auto___27649,G__27468_27638,n__14352__auto___27636,jobs,results,process,async){
return (function (state_27508){
var state_val_27509 = (state_27508[(1)]);
if((state_val_27509 === (7))){
var inst_27504 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
var statearr_27510_27650 = state_27508__$1;
(statearr_27510_27650[(2)] = inst_27504);

(statearr_27510_27650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (6))){
var state_27508__$1 = state_27508;
var statearr_27511_27651 = state_27508__$1;
(statearr_27511_27651[(2)] = null);

(statearr_27511_27651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (5))){
var state_27508__$1 = state_27508;
var statearr_27512_27652 = state_27508__$1;
(statearr_27512_27652[(2)] = null);

(statearr_27512_27652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (4))){
var inst_27498 = (state_27508[(2)]);
var inst_27499 = process.call(null,inst_27498);
var state_27508__$1 = state_27508;
if(cljs.core.truth_(inst_27499)){
var statearr_27513_27653 = state_27508__$1;
(statearr_27513_27653[(1)] = (5));

} else {
var statearr_27514_27654 = state_27508__$1;
(statearr_27514_27654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (3))){
var inst_27506 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27508__$1,inst_27506);
} else {
if((state_val_27509 === (2))){
var state_27508__$1 = state_27508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27508__$1,(4),jobs);
} else {
if((state_val_27509 === (1))){
var state_27508__$1 = state_27508;
var statearr_27515_27655 = state_27508__$1;
(statearr_27515_27655[(2)] = null);

(statearr_27515_27655[(1)] = (2));


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
});})(__27637,c__16133__auto___27649,G__27468_27638,n__14352__auto___27636,jobs,results,process,async))
;
return ((function (__27637,switch__16077__auto__,c__16133__auto___27649,G__27468_27638,n__14352__auto___27636,jobs,results,process,async){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_27519 = [null,null,null,null,null,null,null];
(statearr_27519[(0)] = state_machine__16078__auto__);

(statearr_27519[(1)] = (1));

return statearr_27519;
});
var state_machine__16078__auto____1 = (function (state_27508){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_27508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e27520){if((e27520 instanceof Object)){
var ex__16081__auto__ = e27520;
var statearr_27521_27656 = state_27508;
(statearr_27521_27656[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27657 = state_27508;
state_27508 = G__27657;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_27508){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_27508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(__27637,switch__16077__auto__,c__16133__auto___27649,G__27468_27638,n__14352__auto___27636,jobs,results,process,async))
})();
var state__16135__auto__ = (function (){var statearr_27522 = f__16134__auto__.call(null);
(statearr_27522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___27649);

return statearr_27522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(__27637,c__16133__auto___27649,G__27468_27638,n__14352__auto___27636,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27658 = (__27637 + (1));
__27637 = G__27658;
continue;
} else {
}
break;
}

var c__16133__auto___27659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto___27659,jobs,results,process,async){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto___27659,jobs,results,process,async){
return (function (state_27544){
var state_val_27545 = (state_27544[(1)]);
if((state_val_27545 === (9))){
var inst_27537 = (state_27544[(2)]);
var state_27544__$1 = (function (){var statearr_27546 = state_27544;
(statearr_27546[(7)] = inst_27537);

return statearr_27546;
})();
var statearr_27547_27660 = state_27544__$1;
(statearr_27547_27660[(2)] = null);

(statearr_27547_27660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27545 === (8))){
var inst_27530 = (state_27544[(8)]);
var inst_27535 = (state_27544[(2)]);
var state_27544__$1 = (function (){var statearr_27548 = state_27544;
(statearr_27548[(9)] = inst_27535);

return statearr_27548;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27544__$1,(9),results,inst_27530);
} else {
if((state_val_27545 === (7))){
var inst_27540 = (state_27544[(2)]);
var state_27544__$1 = state_27544;
var statearr_27549_27661 = state_27544__$1;
(statearr_27549_27661[(2)] = inst_27540);

(statearr_27549_27661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27545 === (6))){
var inst_27530 = (state_27544[(8)]);
var inst_27525 = (state_27544[(10)]);
var inst_27530__$1 = cljs.core.async.chan.call(null,(1));
var inst_27531 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27532 = [inst_27525,inst_27530__$1];
var inst_27533 = (new cljs.core.PersistentVector(null,2,(5),inst_27531,inst_27532,null));
var state_27544__$1 = (function (){var statearr_27550 = state_27544;
(statearr_27550[(8)] = inst_27530__$1);

return statearr_27550;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27544__$1,(8),jobs,inst_27533);
} else {
if((state_val_27545 === (5))){
var inst_27528 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27544__$1 = state_27544;
var statearr_27551_27662 = state_27544__$1;
(statearr_27551_27662[(2)] = inst_27528);

(statearr_27551_27662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27545 === (4))){
var inst_27525 = (state_27544[(10)]);
var inst_27525__$1 = (state_27544[(2)]);
var inst_27526 = (inst_27525__$1 == null);
var state_27544__$1 = (function (){var statearr_27552 = state_27544;
(statearr_27552[(10)] = inst_27525__$1);

return statearr_27552;
})();
if(cljs.core.truth_(inst_27526)){
var statearr_27553_27663 = state_27544__$1;
(statearr_27553_27663[(1)] = (5));

} else {
var statearr_27554_27664 = state_27544__$1;
(statearr_27554_27664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27545 === (3))){
var inst_27542 = (state_27544[(2)]);
var state_27544__$1 = state_27544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27544__$1,inst_27542);
} else {
if((state_val_27545 === (2))){
var state_27544__$1 = state_27544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27544__$1,(4),from);
} else {
if((state_val_27545 === (1))){
var state_27544__$1 = state_27544;
var statearr_27555_27665 = state_27544__$1;
(statearr_27555_27665[(2)] = null);

(statearr_27555_27665[(1)] = (2));


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
});})(c__16133__auto___27659,jobs,results,process,async))
;
return ((function (switch__16077__auto__,c__16133__auto___27659,jobs,results,process,async){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_27559 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27559[(0)] = state_machine__16078__auto__);

(statearr_27559[(1)] = (1));

return statearr_27559;
});
var state_machine__16078__auto____1 = (function (state_27544){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_27544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e27560){if((e27560 instanceof Object)){
var ex__16081__auto__ = e27560;
var statearr_27561_27666 = state_27544;
(statearr_27561_27666[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27667 = state_27544;
state_27544 = G__27667;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_27544){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_27544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto___27659,jobs,results,process,async))
})();
var state__16135__auto__ = (function (){var statearr_27562 = f__16134__auto__.call(null);
(statearr_27562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___27659);

return statearr_27562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto___27659,jobs,results,process,async))
);


var c__16133__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto__,jobs,results,process,async){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto__,jobs,results,process,async){
return (function (state_27600){
var state_val_27601 = (state_27600[(1)]);
if((state_val_27601 === (7))){
var inst_27596 = (state_27600[(2)]);
var state_27600__$1 = state_27600;
var statearr_27602_27668 = state_27600__$1;
(statearr_27602_27668[(2)] = inst_27596);

(statearr_27602_27668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (20))){
var state_27600__$1 = state_27600;
var statearr_27603_27669 = state_27600__$1;
(statearr_27603_27669[(2)] = null);

(statearr_27603_27669[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (1))){
var state_27600__$1 = state_27600;
var statearr_27604_27670 = state_27600__$1;
(statearr_27604_27670[(2)] = null);

(statearr_27604_27670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (4))){
var inst_27565 = (state_27600[(7)]);
var inst_27565__$1 = (state_27600[(2)]);
var inst_27566 = (inst_27565__$1 == null);
var state_27600__$1 = (function (){var statearr_27605 = state_27600;
(statearr_27605[(7)] = inst_27565__$1);

return statearr_27605;
})();
if(cljs.core.truth_(inst_27566)){
var statearr_27606_27671 = state_27600__$1;
(statearr_27606_27671[(1)] = (5));

} else {
var statearr_27607_27672 = state_27600__$1;
(statearr_27607_27672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (15))){
var inst_27578 = (state_27600[(8)]);
var state_27600__$1 = state_27600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27600__$1,(18),to,inst_27578);
} else {
if((state_val_27601 === (21))){
var inst_27591 = (state_27600[(2)]);
var state_27600__$1 = state_27600;
var statearr_27608_27673 = state_27600__$1;
(statearr_27608_27673[(2)] = inst_27591);

(statearr_27608_27673[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (13))){
var inst_27593 = (state_27600[(2)]);
var state_27600__$1 = (function (){var statearr_27609 = state_27600;
(statearr_27609[(9)] = inst_27593);

return statearr_27609;
})();
var statearr_27610_27674 = state_27600__$1;
(statearr_27610_27674[(2)] = null);

(statearr_27610_27674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (6))){
var inst_27565 = (state_27600[(7)]);
var state_27600__$1 = state_27600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27600__$1,(11),inst_27565);
} else {
if((state_val_27601 === (17))){
var inst_27586 = (state_27600[(2)]);
var state_27600__$1 = state_27600;
if(cljs.core.truth_(inst_27586)){
var statearr_27611_27675 = state_27600__$1;
(statearr_27611_27675[(1)] = (19));

} else {
var statearr_27612_27676 = state_27600__$1;
(statearr_27612_27676[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (3))){
var inst_27598 = (state_27600[(2)]);
var state_27600__$1 = state_27600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27600__$1,inst_27598);
} else {
if((state_val_27601 === (12))){
var inst_27575 = (state_27600[(10)]);
var state_27600__$1 = state_27600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27600__$1,(14),inst_27575);
} else {
if((state_val_27601 === (2))){
var state_27600__$1 = state_27600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27600__$1,(4),results);
} else {
if((state_val_27601 === (19))){
var state_27600__$1 = state_27600;
var statearr_27613_27677 = state_27600__$1;
(statearr_27613_27677[(2)] = null);

(statearr_27613_27677[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (11))){
var inst_27575 = (state_27600[(2)]);
var state_27600__$1 = (function (){var statearr_27614 = state_27600;
(statearr_27614[(10)] = inst_27575);

return statearr_27614;
})();
var statearr_27615_27678 = state_27600__$1;
(statearr_27615_27678[(2)] = null);

(statearr_27615_27678[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (9))){
var state_27600__$1 = state_27600;
var statearr_27616_27679 = state_27600__$1;
(statearr_27616_27679[(2)] = null);

(statearr_27616_27679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (5))){
var state_27600__$1 = state_27600;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27617_27680 = state_27600__$1;
(statearr_27617_27680[(1)] = (8));

} else {
var statearr_27618_27681 = state_27600__$1;
(statearr_27618_27681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (14))){
var inst_27578 = (state_27600[(8)]);
var inst_27580 = (state_27600[(11)]);
var inst_27578__$1 = (state_27600[(2)]);
var inst_27579 = (inst_27578__$1 == null);
var inst_27580__$1 = cljs.core.not.call(null,inst_27579);
var state_27600__$1 = (function (){var statearr_27619 = state_27600;
(statearr_27619[(8)] = inst_27578__$1);

(statearr_27619[(11)] = inst_27580__$1);

return statearr_27619;
})();
if(inst_27580__$1){
var statearr_27620_27682 = state_27600__$1;
(statearr_27620_27682[(1)] = (15));

} else {
var statearr_27621_27683 = state_27600__$1;
(statearr_27621_27683[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (16))){
var inst_27580 = (state_27600[(11)]);
var state_27600__$1 = state_27600;
var statearr_27622_27684 = state_27600__$1;
(statearr_27622_27684[(2)] = inst_27580);

(statearr_27622_27684[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (10))){
var inst_27572 = (state_27600[(2)]);
var state_27600__$1 = state_27600;
var statearr_27623_27685 = state_27600__$1;
(statearr_27623_27685[(2)] = inst_27572);

(statearr_27623_27685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (18))){
var inst_27583 = (state_27600[(2)]);
var state_27600__$1 = state_27600;
var statearr_27624_27686 = state_27600__$1;
(statearr_27624_27686[(2)] = inst_27583);

(statearr_27624_27686[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27601 === (8))){
var inst_27569 = cljs.core.async.close_BANG_.call(null,to);
var state_27600__$1 = state_27600;
var statearr_27625_27687 = state_27600__$1;
(statearr_27625_27687[(2)] = inst_27569);

(statearr_27625_27687[(1)] = (10));


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
});})(c__16133__auto__,jobs,results,process,async))
;
return ((function (switch__16077__auto__,c__16133__auto__,jobs,results,process,async){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_27629 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27629[(0)] = state_machine__16078__auto__);

(statearr_27629[(1)] = (1));

return statearr_27629;
});
var state_machine__16078__auto____1 = (function (state_27600){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_27600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e27630){if((e27630 instanceof Object)){
var ex__16081__auto__ = e27630;
var statearr_27631_27688 = state_27600;
(statearr_27631_27688[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27689 = state_27600;
state_27600 = G__27689;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_27600){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_27600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto__,jobs,results,process,async))
})();
var state__16135__auto__ = (function (){var statearr_27632 = f__16134__auto__.call(null);
(statearr_27632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto__);

return statearr_27632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto__,jobs,results,process,async))
);

return c__16133__auto__;
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
var c__16133__auto___27790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto___27790,tc,fc){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto___27790,tc,fc){
return (function (state_27765){
var state_val_27766 = (state_27765[(1)]);
if((state_val_27766 === (7))){
var inst_27761 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
var statearr_27767_27791 = state_27765__$1;
(statearr_27767_27791[(2)] = inst_27761);

(statearr_27767_27791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (1))){
var state_27765__$1 = state_27765;
var statearr_27768_27792 = state_27765__$1;
(statearr_27768_27792[(2)] = null);

(statearr_27768_27792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (4))){
var inst_27742 = (state_27765[(7)]);
var inst_27742__$1 = (state_27765[(2)]);
var inst_27743 = (inst_27742__$1 == null);
var state_27765__$1 = (function (){var statearr_27769 = state_27765;
(statearr_27769[(7)] = inst_27742__$1);

return statearr_27769;
})();
if(cljs.core.truth_(inst_27743)){
var statearr_27770_27793 = state_27765__$1;
(statearr_27770_27793[(1)] = (5));

} else {
var statearr_27771_27794 = state_27765__$1;
(statearr_27771_27794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (13))){
var state_27765__$1 = state_27765;
var statearr_27772_27795 = state_27765__$1;
(statearr_27772_27795[(2)] = null);

(statearr_27772_27795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (6))){
var inst_27742 = (state_27765[(7)]);
var inst_27748 = p.call(null,inst_27742);
var state_27765__$1 = state_27765;
if(cljs.core.truth_(inst_27748)){
var statearr_27773_27796 = state_27765__$1;
(statearr_27773_27796[(1)] = (9));

} else {
var statearr_27774_27797 = state_27765__$1;
(statearr_27774_27797[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (3))){
var inst_27763 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27765__$1,inst_27763);
} else {
if((state_val_27766 === (12))){
var state_27765__$1 = state_27765;
var statearr_27775_27798 = state_27765__$1;
(statearr_27775_27798[(2)] = null);

(statearr_27775_27798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (2))){
var state_27765__$1 = state_27765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27765__$1,(4),ch);
} else {
if((state_val_27766 === (11))){
var inst_27742 = (state_27765[(7)]);
var inst_27752 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27765__$1,(8),inst_27752,inst_27742);
} else {
if((state_val_27766 === (9))){
var state_27765__$1 = state_27765;
var statearr_27776_27799 = state_27765__$1;
(statearr_27776_27799[(2)] = tc);

(statearr_27776_27799[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (5))){
var inst_27745 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27746 = cljs.core.async.close_BANG_.call(null,fc);
var state_27765__$1 = (function (){var statearr_27777 = state_27765;
(statearr_27777[(8)] = inst_27745);

return statearr_27777;
})();
var statearr_27778_27800 = state_27765__$1;
(statearr_27778_27800[(2)] = inst_27746);

(statearr_27778_27800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (14))){
var inst_27759 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
var statearr_27779_27801 = state_27765__$1;
(statearr_27779_27801[(2)] = inst_27759);

(statearr_27779_27801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (10))){
var state_27765__$1 = state_27765;
var statearr_27780_27802 = state_27765__$1;
(statearr_27780_27802[(2)] = fc);

(statearr_27780_27802[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (8))){
var inst_27754 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
if(cljs.core.truth_(inst_27754)){
var statearr_27781_27803 = state_27765__$1;
(statearr_27781_27803[(1)] = (12));

} else {
var statearr_27782_27804 = state_27765__$1;
(statearr_27782_27804[(1)] = (13));

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
});})(c__16133__auto___27790,tc,fc))
;
return ((function (switch__16077__auto__,c__16133__auto___27790,tc,fc){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_27786 = [null,null,null,null,null,null,null,null,null];
(statearr_27786[(0)] = state_machine__16078__auto__);

(statearr_27786[(1)] = (1));

return statearr_27786;
});
var state_machine__16078__auto____1 = (function (state_27765){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_27765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e27787){if((e27787 instanceof Object)){
var ex__16081__auto__ = e27787;
var statearr_27788_27805 = state_27765;
(statearr_27788_27805[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27806 = state_27765;
state_27765 = G__27806;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_27765){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_27765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto___27790,tc,fc))
})();
var state__16135__auto__ = (function (){var statearr_27789 = f__16134__auto__.call(null);
(statearr_27789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___27790);

return statearr_27789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto___27790,tc,fc))
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
var c__16133__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto__){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto__){
return (function (state_27853){
var state_val_27854 = (state_27853[(1)]);
if((state_val_27854 === (7))){
var inst_27849 = (state_27853[(2)]);
var state_27853__$1 = state_27853;
var statearr_27855_27871 = state_27853__$1;
(statearr_27855_27871[(2)] = inst_27849);

(statearr_27855_27871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27854 === (6))){
var inst_27842 = (state_27853[(7)]);
var inst_27839 = (state_27853[(8)]);
var inst_27846 = f.call(null,inst_27839,inst_27842);
var inst_27839__$1 = inst_27846;
var state_27853__$1 = (function (){var statearr_27856 = state_27853;
(statearr_27856[(8)] = inst_27839__$1);

return statearr_27856;
})();
var statearr_27857_27872 = state_27853__$1;
(statearr_27857_27872[(2)] = null);

(statearr_27857_27872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27854 === (5))){
var inst_27839 = (state_27853[(8)]);
var state_27853__$1 = state_27853;
var statearr_27858_27873 = state_27853__$1;
(statearr_27858_27873[(2)] = inst_27839);

(statearr_27858_27873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27854 === (4))){
var inst_27842 = (state_27853[(7)]);
var inst_27842__$1 = (state_27853[(2)]);
var inst_27843 = (inst_27842__$1 == null);
var state_27853__$1 = (function (){var statearr_27859 = state_27853;
(statearr_27859[(7)] = inst_27842__$1);

return statearr_27859;
})();
if(cljs.core.truth_(inst_27843)){
var statearr_27860_27874 = state_27853__$1;
(statearr_27860_27874[(1)] = (5));

} else {
var statearr_27861_27875 = state_27853__$1;
(statearr_27861_27875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27854 === (3))){
var inst_27851 = (state_27853[(2)]);
var state_27853__$1 = state_27853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27853__$1,inst_27851);
} else {
if((state_val_27854 === (2))){
var state_27853__$1 = state_27853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27853__$1,(4),ch);
} else {
if((state_val_27854 === (1))){
var inst_27839 = init;
var state_27853__$1 = (function (){var statearr_27862 = state_27853;
(statearr_27862[(8)] = inst_27839);

return statearr_27862;
})();
var statearr_27863_27876 = state_27853__$1;
(statearr_27863_27876[(2)] = null);

(statearr_27863_27876[(1)] = (2));


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
});})(c__16133__auto__))
;
return ((function (switch__16077__auto__,c__16133__auto__){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_27867 = [null,null,null,null,null,null,null,null,null];
(statearr_27867[(0)] = state_machine__16078__auto__);

(statearr_27867[(1)] = (1));

return statearr_27867;
});
var state_machine__16078__auto____1 = (function (state_27853){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_27853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e27868){if((e27868 instanceof Object)){
var ex__16081__auto__ = e27868;
var statearr_27869_27877 = state_27853;
(statearr_27869_27877[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27878 = state_27853;
state_27853 = G__27878;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_27853){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_27853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto__))
})();
var state__16135__auto__ = (function (){var statearr_27870 = f__16134__auto__.call(null);
(statearr_27870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto__);

return statearr_27870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto__))
);

return c__16133__auto__;
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
var c__16133__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto__){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto__){
return (function (state_27952){
var state_val_27953 = (state_27952[(1)]);
if((state_val_27953 === (7))){
var inst_27934 = (state_27952[(2)]);
var state_27952__$1 = state_27952;
var statearr_27954_27977 = state_27952__$1;
(statearr_27954_27977[(2)] = inst_27934);

(statearr_27954_27977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (1))){
var inst_27928 = cljs.core.seq.call(null,coll);
var inst_27929 = inst_27928;
var state_27952__$1 = (function (){var statearr_27955 = state_27952;
(statearr_27955[(7)] = inst_27929);

return statearr_27955;
})();
var statearr_27956_27978 = state_27952__$1;
(statearr_27956_27978[(2)] = null);

(statearr_27956_27978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (4))){
var inst_27929 = (state_27952[(7)]);
var inst_27932 = cljs.core.first.call(null,inst_27929);
var state_27952__$1 = state_27952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27952__$1,(7),ch,inst_27932);
} else {
if((state_val_27953 === (13))){
var inst_27946 = (state_27952[(2)]);
var state_27952__$1 = state_27952;
var statearr_27957_27979 = state_27952__$1;
(statearr_27957_27979[(2)] = inst_27946);

(statearr_27957_27979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (6))){
var inst_27937 = (state_27952[(2)]);
var state_27952__$1 = state_27952;
if(cljs.core.truth_(inst_27937)){
var statearr_27958_27980 = state_27952__$1;
(statearr_27958_27980[(1)] = (8));

} else {
var statearr_27959_27981 = state_27952__$1;
(statearr_27959_27981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (3))){
var inst_27950 = (state_27952[(2)]);
var state_27952__$1 = state_27952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27952__$1,inst_27950);
} else {
if((state_val_27953 === (12))){
var state_27952__$1 = state_27952;
var statearr_27960_27982 = state_27952__$1;
(statearr_27960_27982[(2)] = null);

(statearr_27960_27982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (2))){
var inst_27929 = (state_27952[(7)]);
var state_27952__$1 = state_27952;
if(cljs.core.truth_(inst_27929)){
var statearr_27961_27983 = state_27952__$1;
(statearr_27961_27983[(1)] = (4));

} else {
var statearr_27962_27984 = state_27952__$1;
(statearr_27962_27984[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (11))){
var inst_27943 = cljs.core.async.close_BANG_.call(null,ch);
var state_27952__$1 = state_27952;
var statearr_27963_27985 = state_27952__$1;
(statearr_27963_27985[(2)] = inst_27943);

(statearr_27963_27985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (9))){
var state_27952__$1 = state_27952;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27964_27986 = state_27952__$1;
(statearr_27964_27986[(1)] = (11));

} else {
var statearr_27965_27987 = state_27952__$1;
(statearr_27965_27987[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (5))){
var inst_27929 = (state_27952[(7)]);
var state_27952__$1 = state_27952;
var statearr_27966_27988 = state_27952__$1;
(statearr_27966_27988[(2)] = inst_27929);

(statearr_27966_27988[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (10))){
var inst_27948 = (state_27952[(2)]);
var state_27952__$1 = state_27952;
var statearr_27967_27989 = state_27952__$1;
(statearr_27967_27989[(2)] = inst_27948);

(statearr_27967_27989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (8))){
var inst_27929 = (state_27952[(7)]);
var inst_27939 = cljs.core.next.call(null,inst_27929);
var inst_27929__$1 = inst_27939;
var state_27952__$1 = (function (){var statearr_27968 = state_27952;
(statearr_27968[(7)] = inst_27929__$1);

return statearr_27968;
})();
var statearr_27969_27990 = state_27952__$1;
(statearr_27969_27990[(2)] = null);

(statearr_27969_27990[(1)] = (2));


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
});})(c__16133__auto__))
;
return ((function (switch__16077__auto__,c__16133__auto__){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_27973 = [null,null,null,null,null,null,null,null];
(statearr_27973[(0)] = state_machine__16078__auto__);

(statearr_27973[(1)] = (1));

return statearr_27973;
});
var state_machine__16078__auto____1 = (function (state_27952){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_27952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e27974){if((e27974 instanceof Object)){
var ex__16081__auto__ = e27974;
var statearr_27975_27991 = state_27952;
(statearr_27975_27991[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27992 = state_27952;
state_27952 = G__27992;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_27952){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_27952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto__))
})();
var state__16135__auto__ = (function (){var statearr_27976 = f__16134__auto__.call(null);
(statearr_27976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto__);

return statearr_27976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto__))
);

return c__16133__auto__;
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

cljs.core.async.Mux = (function (){var obj27994 = {};
return obj27994;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__13453__auto__ = _;
if(and__13453__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__13453__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__14109__auto__ = (((_ == null))?null:_);
return (function (){var or__13465__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__14109__auto__)]);
if(or__13465__auto__){
return or__13465__auto__;
} else {
var or__13465__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__13465__auto____$1){
return or__13465__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27996 = {};
return obj27996;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__13453__auto__ = m;
if(and__13453__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__13453__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__14109__auto__ = (((m == null))?null:m);
return (function (){var or__13465__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__14109__auto__)]);
if(or__13465__auto__){
return or__13465__auto__;
} else {
var or__13465__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__13465__auto____$1){
return or__13465__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__13453__auto__ = m;
if(and__13453__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__13453__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__14109__auto__ = (((m == null))?null:m);
return (function (){var or__13465__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__14109__auto__)]);
if(or__13465__auto__){
return or__13465__auto__;
} else {
var or__13465__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__13465__auto____$1){
return or__13465__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__13453__auto__ = m;
if(and__13453__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__13453__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__14109__auto__ = (((m == null))?null:m);
return (function (){var or__13465__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__14109__auto__)]);
if(or__13465__auto__){
return or__13465__auto__;
} else {
var or__13465__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__13465__auto____$1){
return or__13465__auto____$1;
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
if(typeof cljs.core.async.t28218 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28218 = (function (cs,ch,mult,meta28219){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28219 = meta28219;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28218.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28218.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28218.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28218.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28218.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28218.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28220){
var self__ = this;
var _28220__$1 = this;
return self__.meta28219;
});})(cs))
;

cljs.core.async.t28218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28220,meta28219__$1){
var self__ = this;
var _28220__$1 = this;
return (new cljs.core.async.t28218(self__.cs,self__.ch,self__.mult,meta28219__$1));
});})(cs))
;

cljs.core.async.t28218.cljs$lang$type = true;

cljs.core.async.t28218.cljs$lang$ctorStr = "cljs.core.async/t28218";

cljs.core.async.t28218.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__14052__auto__,writer__14053__auto__,opt__14054__auto__){
return cljs.core._write.call(null,writer__14053__auto__,"cljs.core.async/t28218");
});})(cs))
;

cljs.core.async.__GT_t28218 = ((function (cs){
return (function __GT_t28218(cs__$1,ch__$1,mult__$1,meta28219){
return (new cljs.core.async.t28218(cs__$1,ch__$1,mult__$1,meta28219));
});})(cs))
;

}

return (new cljs.core.async.t28218(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16133__auto___28439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto___28439,cs,m,dchan,dctr,done){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto___28439,cs,m,dchan,dctr,done){
return (function (state_28351){
var state_val_28352 = (state_28351[(1)]);
if((state_val_28352 === (7))){
var inst_28347 = (state_28351[(2)]);
var state_28351__$1 = state_28351;
var statearr_28353_28440 = state_28351__$1;
(statearr_28353_28440[(2)] = inst_28347);

(statearr_28353_28440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (20))){
var inst_28252 = (state_28351[(7)]);
var inst_28262 = cljs.core.first.call(null,inst_28252);
var inst_28263 = cljs.core.nth.call(null,inst_28262,(0),null);
var inst_28264 = cljs.core.nth.call(null,inst_28262,(1),null);
var state_28351__$1 = (function (){var statearr_28354 = state_28351;
(statearr_28354[(8)] = inst_28263);

return statearr_28354;
})();
if(cljs.core.truth_(inst_28264)){
var statearr_28355_28441 = state_28351__$1;
(statearr_28355_28441[(1)] = (22));

} else {
var statearr_28356_28442 = state_28351__$1;
(statearr_28356_28442[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (27))){
var inst_28294 = (state_28351[(9)]);
var inst_28292 = (state_28351[(10)]);
var inst_28299 = (state_28351[(11)]);
var inst_28223 = (state_28351[(12)]);
var inst_28299__$1 = cljs.core._nth.call(null,inst_28292,inst_28294);
var inst_28300 = cljs.core.async.put_BANG_.call(null,inst_28299__$1,inst_28223,done);
var state_28351__$1 = (function (){var statearr_28357 = state_28351;
(statearr_28357[(11)] = inst_28299__$1);

return statearr_28357;
})();
if(cljs.core.truth_(inst_28300)){
var statearr_28358_28443 = state_28351__$1;
(statearr_28358_28443[(1)] = (30));

} else {
var statearr_28359_28444 = state_28351__$1;
(statearr_28359_28444[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (1))){
var state_28351__$1 = state_28351;
var statearr_28360_28445 = state_28351__$1;
(statearr_28360_28445[(2)] = null);

(statearr_28360_28445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (24))){
var inst_28252 = (state_28351[(7)]);
var inst_28269 = (state_28351[(2)]);
var inst_28270 = cljs.core.next.call(null,inst_28252);
var inst_28232 = inst_28270;
var inst_28233 = null;
var inst_28234 = (0);
var inst_28235 = (0);
var state_28351__$1 = (function (){var statearr_28361 = state_28351;
(statearr_28361[(13)] = inst_28234);

(statearr_28361[(14)] = inst_28269);

(statearr_28361[(15)] = inst_28235);

(statearr_28361[(16)] = inst_28232);

(statearr_28361[(17)] = inst_28233);

return statearr_28361;
})();
var statearr_28362_28446 = state_28351__$1;
(statearr_28362_28446[(2)] = null);

(statearr_28362_28446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (39))){
var state_28351__$1 = state_28351;
var statearr_28366_28447 = state_28351__$1;
(statearr_28366_28447[(2)] = null);

(statearr_28366_28447[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (4))){
var inst_28223 = (state_28351[(12)]);
var inst_28223__$1 = (state_28351[(2)]);
var inst_28224 = (inst_28223__$1 == null);
var state_28351__$1 = (function (){var statearr_28367 = state_28351;
(statearr_28367[(12)] = inst_28223__$1);

return statearr_28367;
})();
if(cljs.core.truth_(inst_28224)){
var statearr_28368_28448 = state_28351__$1;
(statearr_28368_28448[(1)] = (5));

} else {
var statearr_28369_28449 = state_28351__$1;
(statearr_28369_28449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (15))){
var inst_28234 = (state_28351[(13)]);
var inst_28235 = (state_28351[(15)]);
var inst_28232 = (state_28351[(16)]);
var inst_28233 = (state_28351[(17)]);
var inst_28248 = (state_28351[(2)]);
var inst_28249 = (inst_28235 + (1));
var tmp28363 = inst_28234;
var tmp28364 = inst_28232;
var tmp28365 = inst_28233;
var inst_28232__$1 = tmp28364;
var inst_28233__$1 = tmp28365;
var inst_28234__$1 = tmp28363;
var inst_28235__$1 = inst_28249;
var state_28351__$1 = (function (){var statearr_28370 = state_28351;
(statearr_28370[(13)] = inst_28234__$1);

(statearr_28370[(18)] = inst_28248);

(statearr_28370[(15)] = inst_28235__$1);

(statearr_28370[(16)] = inst_28232__$1);

(statearr_28370[(17)] = inst_28233__$1);

return statearr_28370;
})();
var statearr_28371_28450 = state_28351__$1;
(statearr_28371_28450[(2)] = null);

(statearr_28371_28450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (21))){
var inst_28273 = (state_28351[(2)]);
var state_28351__$1 = state_28351;
var statearr_28375_28451 = state_28351__$1;
(statearr_28375_28451[(2)] = inst_28273);

(statearr_28375_28451[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (31))){
var inst_28299 = (state_28351[(11)]);
var inst_28303 = done.call(null,null);
var inst_28304 = cljs.core.async.untap_STAR_.call(null,m,inst_28299);
var state_28351__$1 = (function (){var statearr_28376 = state_28351;
(statearr_28376[(19)] = inst_28303);

return statearr_28376;
})();
var statearr_28377_28452 = state_28351__$1;
(statearr_28377_28452[(2)] = inst_28304);

(statearr_28377_28452[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (32))){
var inst_28294 = (state_28351[(9)]);
var inst_28292 = (state_28351[(10)]);
var inst_28293 = (state_28351[(20)]);
var inst_28291 = (state_28351[(21)]);
var inst_28306 = (state_28351[(2)]);
var inst_28307 = (inst_28294 + (1));
var tmp28372 = inst_28292;
var tmp28373 = inst_28293;
var tmp28374 = inst_28291;
var inst_28291__$1 = tmp28374;
var inst_28292__$1 = tmp28372;
var inst_28293__$1 = tmp28373;
var inst_28294__$1 = inst_28307;
var state_28351__$1 = (function (){var statearr_28378 = state_28351;
(statearr_28378[(9)] = inst_28294__$1);

(statearr_28378[(10)] = inst_28292__$1);

(statearr_28378[(20)] = inst_28293__$1);

(statearr_28378[(22)] = inst_28306);

(statearr_28378[(21)] = inst_28291__$1);

return statearr_28378;
})();
var statearr_28379_28453 = state_28351__$1;
(statearr_28379_28453[(2)] = null);

(statearr_28379_28453[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (40))){
var inst_28319 = (state_28351[(23)]);
var inst_28323 = done.call(null,null);
var inst_28324 = cljs.core.async.untap_STAR_.call(null,m,inst_28319);
var state_28351__$1 = (function (){var statearr_28380 = state_28351;
(statearr_28380[(24)] = inst_28323);

return statearr_28380;
})();
var statearr_28381_28454 = state_28351__$1;
(statearr_28381_28454[(2)] = inst_28324);

(statearr_28381_28454[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (33))){
var inst_28310 = (state_28351[(25)]);
var inst_28312 = cljs.core.chunked_seq_QMARK_.call(null,inst_28310);
var state_28351__$1 = state_28351;
if(inst_28312){
var statearr_28382_28455 = state_28351__$1;
(statearr_28382_28455[(1)] = (36));

} else {
var statearr_28383_28456 = state_28351__$1;
(statearr_28383_28456[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (13))){
var inst_28242 = (state_28351[(26)]);
var inst_28245 = cljs.core.async.close_BANG_.call(null,inst_28242);
var state_28351__$1 = state_28351;
var statearr_28384_28457 = state_28351__$1;
(statearr_28384_28457[(2)] = inst_28245);

(statearr_28384_28457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (22))){
var inst_28263 = (state_28351[(8)]);
var inst_28266 = cljs.core.async.close_BANG_.call(null,inst_28263);
var state_28351__$1 = state_28351;
var statearr_28385_28458 = state_28351__$1;
(statearr_28385_28458[(2)] = inst_28266);

(statearr_28385_28458[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (36))){
var inst_28310 = (state_28351[(25)]);
var inst_28314 = cljs.core.chunk_first.call(null,inst_28310);
var inst_28315 = cljs.core.chunk_rest.call(null,inst_28310);
var inst_28316 = cljs.core.count.call(null,inst_28314);
var inst_28291 = inst_28315;
var inst_28292 = inst_28314;
var inst_28293 = inst_28316;
var inst_28294 = (0);
var state_28351__$1 = (function (){var statearr_28386 = state_28351;
(statearr_28386[(9)] = inst_28294);

(statearr_28386[(10)] = inst_28292);

(statearr_28386[(20)] = inst_28293);

(statearr_28386[(21)] = inst_28291);

return statearr_28386;
})();
var statearr_28387_28459 = state_28351__$1;
(statearr_28387_28459[(2)] = null);

(statearr_28387_28459[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (41))){
var inst_28310 = (state_28351[(25)]);
var inst_28326 = (state_28351[(2)]);
var inst_28327 = cljs.core.next.call(null,inst_28310);
var inst_28291 = inst_28327;
var inst_28292 = null;
var inst_28293 = (0);
var inst_28294 = (0);
var state_28351__$1 = (function (){var statearr_28388 = state_28351;
(statearr_28388[(9)] = inst_28294);

(statearr_28388[(27)] = inst_28326);

(statearr_28388[(10)] = inst_28292);

(statearr_28388[(20)] = inst_28293);

(statearr_28388[(21)] = inst_28291);

return statearr_28388;
})();
var statearr_28389_28460 = state_28351__$1;
(statearr_28389_28460[(2)] = null);

(statearr_28389_28460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (43))){
var state_28351__$1 = state_28351;
var statearr_28390_28461 = state_28351__$1;
(statearr_28390_28461[(2)] = null);

(statearr_28390_28461[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (29))){
var inst_28335 = (state_28351[(2)]);
var state_28351__$1 = state_28351;
var statearr_28391_28462 = state_28351__$1;
(statearr_28391_28462[(2)] = inst_28335);

(statearr_28391_28462[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (44))){
var inst_28344 = (state_28351[(2)]);
var state_28351__$1 = (function (){var statearr_28392 = state_28351;
(statearr_28392[(28)] = inst_28344);

return statearr_28392;
})();
var statearr_28393_28463 = state_28351__$1;
(statearr_28393_28463[(2)] = null);

(statearr_28393_28463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (6))){
var inst_28283 = (state_28351[(29)]);
var inst_28282 = cljs.core.deref.call(null,cs);
var inst_28283__$1 = cljs.core.keys.call(null,inst_28282);
var inst_28284 = cljs.core.count.call(null,inst_28283__$1);
var inst_28285 = cljs.core.reset_BANG_.call(null,dctr,inst_28284);
var inst_28290 = cljs.core.seq.call(null,inst_28283__$1);
var inst_28291 = inst_28290;
var inst_28292 = null;
var inst_28293 = (0);
var inst_28294 = (0);
var state_28351__$1 = (function (){var statearr_28394 = state_28351;
(statearr_28394[(30)] = inst_28285);

(statearr_28394[(9)] = inst_28294);

(statearr_28394[(10)] = inst_28292);

(statearr_28394[(20)] = inst_28293);

(statearr_28394[(29)] = inst_28283__$1);

(statearr_28394[(21)] = inst_28291);

return statearr_28394;
})();
var statearr_28395_28464 = state_28351__$1;
(statearr_28395_28464[(2)] = null);

(statearr_28395_28464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (28))){
var inst_28291 = (state_28351[(21)]);
var inst_28310 = (state_28351[(25)]);
var inst_28310__$1 = cljs.core.seq.call(null,inst_28291);
var state_28351__$1 = (function (){var statearr_28396 = state_28351;
(statearr_28396[(25)] = inst_28310__$1);

return statearr_28396;
})();
if(inst_28310__$1){
var statearr_28397_28465 = state_28351__$1;
(statearr_28397_28465[(1)] = (33));

} else {
var statearr_28398_28466 = state_28351__$1;
(statearr_28398_28466[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (25))){
var inst_28294 = (state_28351[(9)]);
var inst_28293 = (state_28351[(20)]);
var inst_28296 = (inst_28294 < inst_28293);
var inst_28297 = inst_28296;
var state_28351__$1 = state_28351;
if(cljs.core.truth_(inst_28297)){
var statearr_28399_28467 = state_28351__$1;
(statearr_28399_28467[(1)] = (27));

} else {
var statearr_28400_28468 = state_28351__$1;
(statearr_28400_28468[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (34))){
var state_28351__$1 = state_28351;
var statearr_28401_28469 = state_28351__$1;
(statearr_28401_28469[(2)] = null);

(statearr_28401_28469[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (17))){
var state_28351__$1 = state_28351;
var statearr_28402_28470 = state_28351__$1;
(statearr_28402_28470[(2)] = null);

(statearr_28402_28470[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (3))){
var inst_28349 = (state_28351[(2)]);
var state_28351__$1 = state_28351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28351__$1,inst_28349);
} else {
if((state_val_28352 === (12))){
var inst_28278 = (state_28351[(2)]);
var state_28351__$1 = state_28351;
var statearr_28403_28471 = state_28351__$1;
(statearr_28403_28471[(2)] = inst_28278);

(statearr_28403_28471[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (2))){
var state_28351__$1 = state_28351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28351__$1,(4),ch);
} else {
if((state_val_28352 === (23))){
var state_28351__$1 = state_28351;
var statearr_28404_28472 = state_28351__$1;
(statearr_28404_28472[(2)] = null);

(statearr_28404_28472[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (35))){
var inst_28333 = (state_28351[(2)]);
var state_28351__$1 = state_28351;
var statearr_28405_28473 = state_28351__$1;
(statearr_28405_28473[(2)] = inst_28333);

(statearr_28405_28473[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (19))){
var inst_28252 = (state_28351[(7)]);
var inst_28256 = cljs.core.chunk_first.call(null,inst_28252);
var inst_28257 = cljs.core.chunk_rest.call(null,inst_28252);
var inst_28258 = cljs.core.count.call(null,inst_28256);
var inst_28232 = inst_28257;
var inst_28233 = inst_28256;
var inst_28234 = inst_28258;
var inst_28235 = (0);
var state_28351__$1 = (function (){var statearr_28406 = state_28351;
(statearr_28406[(13)] = inst_28234);

(statearr_28406[(15)] = inst_28235);

(statearr_28406[(16)] = inst_28232);

(statearr_28406[(17)] = inst_28233);

return statearr_28406;
})();
var statearr_28407_28474 = state_28351__$1;
(statearr_28407_28474[(2)] = null);

(statearr_28407_28474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (11))){
var inst_28252 = (state_28351[(7)]);
var inst_28232 = (state_28351[(16)]);
var inst_28252__$1 = cljs.core.seq.call(null,inst_28232);
var state_28351__$1 = (function (){var statearr_28408 = state_28351;
(statearr_28408[(7)] = inst_28252__$1);

return statearr_28408;
})();
if(inst_28252__$1){
var statearr_28409_28475 = state_28351__$1;
(statearr_28409_28475[(1)] = (16));

} else {
var statearr_28410_28476 = state_28351__$1;
(statearr_28410_28476[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (9))){
var inst_28280 = (state_28351[(2)]);
var state_28351__$1 = state_28351;
var statearr_28411_28477 = state_28351__$1;
(statearr_28411_28477[(2)] = inst_28280);

(statearr_28411_28477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (5))){
var inst_28230 = cljs.core.deref.call(null,cs);
var inst_28231 = cljs.core.seq.call(null,inst_28230);
var inst_28232 = inst_28231;
var inst_28233 = null;
var inst_28234 = (0);
var inst_28235 = (0);
var state_28351__$1 = (function (){var statearr_28412 = state_28351;
(statearr_28412[(13)] = inst_28234);

(statearr_28412[(15)] = inst_28235);

(statearr_28412[(16)] = inst_28232);

(statearr_28412[(17)] = inst_28233);

return statearr_28412;
})();
var statearr_28413_28478 = state_28351__$1;
(statearr_28413_28478[(2)] = null);

(statearr_28413_28478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (14))){
var state_28351__$1 = state_28351;
var statearr_28414_28479 = state_28351__$1;
(statearr_28414_28479[(2)] = null);

(statearr_28414_28479[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (45))){
var inst_28341 = (state_28351[(2)]);
var state_28351__$1 = state_28351;
var statearr_28415_28480 = state_28351__$1;
(statearr_28415_28480[(2)] = inst_28341);

(statearr_28415_28480[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (26))){
var inst_28283 = (state_28351[(29)]);
var inst_28337 = (state_28351[(2)]);
var inst_28338 = cljs.core.seq.call(null,inst_28283);
var state_28351__$1 = (function (){var statearr_28416 = state_28351;
(statearr_28416[(31)] = inst_28337);

return statearr_28416;
})();
if(inst_28338){
var statearr_28417_28481 = state_28351__$1;
(statearr_28417_28481[(1)] = (42));

} else {
var statearr_28418_28482 = state_28351__$1;
(statearr_28418_28482[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (16))){
var inst_28252 = (state_28351[(7)]);
var inst_28254 = cljs.core.chunked_seq_QMARK_.call(null,inst_28252);
var state_28351__$1 = state_28351;
if(inst_28254){
var statearr_28419_28483 = state_28351__$1;
(statearr_28419_28483[(1)] = (19));

} else {
var statearr_28420_28484 = state_28351__$1;
(statearr_28420_28484[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (38))){
var inst_28330 = (state_28351[(2)]);
var state_28351__$1 = state_28351;
var statearr_28421_28485 = state_28351__$1;
(statearr_28421_28485[(2)] = inst_28330);

(statearr_28421_28485[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (30))){
var state_28351__$1 = state_28351;
var statearr_28422_28486 = state_28351__$1;
(statearr_28422_28486[(2)] = null);

(statearr_28422_28486[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (10))){
var inst_28235 = (state_28351[(15)]);
var inst_28233 = (state_28351[(17)]);
var inst_28241 = cljs.core._nth.call(null,inst_28233,inst_28235);
var inst_28242 = cljs.core.nth.call(null,inst_28241,(0),null);
var inst_28243 = cljs.core.nth.call(null,inst_28241,(1),null);
var state_28351__$1 = (function (){var statearr_28423 = state_28351;
(statearr_28423[(26)] = inst_28242);

return statearr_28423;
})();
if(cljs.core.truth_(inst_28243)){
var statearr_28424_28487 = state_28351__$1;
(statearr_28424_28487[(1)] = (13));

} else {
var statearr_28425_28488 = state_28351__$1;
(statearr_28425_28488[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (18))){
var inst_28276 = (state_28351[(2)]);
var state_28351__$1 = state_28351;
var statearr_28426_28489 = state_28351__$1;
(statearr_28426_28489[(2)] = inst_28276);

(statearr_28426_28489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (42))){
var state_28351__$1 = state_28351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28351__$1,(45),dchan);
} else {
if((state_val_28352 === (37))){
var inst_28223 = (state_28351[(12)]);
var inst_28319 = (state_28351[(23)]);
var inst_28310 = (state_28351[(25)]);
var inst_28319__$1 = cljs.core.first.call(null,inst_28310);
var inst_28320 = cljs.core.async.put_BANG_.call(null,inst_28319__$1,inst_28223,done);
var state_28351__$1 = (function (){var statearr_28427 = state_28351;
(statearr_28427[(23)] = inst_28319__$1);

return statearr_28427;
})();
if(cljs.core.truth_(inst_28320)){
var statearr_28428_28490 = state_28351__$1;
(statearr_28428_28490[(1)] = (39));

} else {
var statearr_28429_28491 = state_28351__$1;
(statearr_28429_28491[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (8))){
var inst_28234 = (state_28351[(13)]);
var inst_28235 = (state_28351[(15)]);
var inst_28237 = (inst_28235 < inst_28234);
var inst_28238 = inst_28237;
var state_28351__$1 = state_28351;
if(cljs.core.truth_(inst_28238)){
var statearr_28430_28492 = state_28351__$1;
(statearr_28430_28492[(1)] = (10));

} else {
var statearr_28431_28493 = state_28351__$1;
(statearr_28431_28493[(1)] = (11));

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
});})(c__16133__auto___28439,cs,m,dchan,dctr,done))
;
return ((function (switch__16077__auto__,c__16133__auto___28439,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_28435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28435[(0)] = state_machine__16078__auto__);

(statearr_28435[(1)] = (1));

return statearr_28435;
});
var state_machine__16078__auto____1 = (function (state_28351){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_28351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e28436){if((e28436 instanceof Object)){
var ex__16081__auto__ = e28436;
var statearr_28437_28494 = state_28351;
(statearr_28437_28494[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28495 = state_28351;
state_28351 = G__28495;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_28351){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_28351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto___28439,cs,m,dchan,dctr,done))
})();
var state__16135__auto__ = (function (){var statearr_28438 = f__16134__auto__.call(null);
(statearr_28438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___28439);

return statearr_28438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto___28439,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj28497 = {};
return obj28497;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__13453__auto__ = m;
if(and__13453__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__13453__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__14109__auto__ = (((m == null))?null:m);
return (function (){var or__13465__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__14109__auto__)]);
if(or__13465__auto__){
return or__13465__auto__;
} else {
var or__13465__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__13465__auto____$1){
return or__13465__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__13453__auto__ = m;
if(and__13453__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__13453__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__14109__auto__ = (((m == null))?null:m);
return (function (){var or__13465__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__14109__auto__)]);
if(or__13465__auto__){
return or__13465__auto__;
} else {
var or__13465__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__13465__auto____$1){
return or__13465__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__13453__auto__ = m;
if(and__13453__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__13453__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__14109__auto__ = (((m == null))?null:m);
return (function (){var or__13465__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__14109__auto__)]);
if(or__13465__auto__){
return or__13465__auto__;
} else {
var or__13465__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__13465__auto____$1){
return or__13465__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__13453__auto__ = m;
if(and__13453__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__13453__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__14109__auto__ = (((m == null))?null:m);
return (function (){var or__13465__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__14109__auto__)]);
if(or__13465__auto__){
return or__13465__auto__;
} else {
var or__13465__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__13465__auto____$1){
return or__13465__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__13453__auto__ = m;
if(and__13453__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__13453__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__14109__auto__ = (((m == null))?null:m);
return (function (){var or__13465__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__14109__auto__)]);
if(or__13465__auto__){
return or__13465__auto__;
} else {
var or__13465__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__13465__auto____$1){
return or__13465__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__28498){
var map__28503 = p__28498;
var map__28503__$1 = ((cljs.core.seq_QMARK_.call(null,map__28503))?cljs.core.apply.call(null,cljs.core.hash_map,map__28503):map__28503);
var opts = map__28503__$1;
var statearr_28504_28507 = state;
(statearr_28504_28507[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__28503,map__28503__$1,opts){
return (function (val){
var statearr_28505_28508 = state;
(statearr_28505_28508[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28503,map__28503__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_28506_28509 = state;
(statearr_28506_28509[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__28498 = null;
if (arguments.length > 3) {
var G__28510__i = 0, G__28510__a = new Array(arguments.length -  3);
while (G__28510__i < G__28510__a.length) {G__28510__a[G__28510__i] = arguments[G__28510__i + 3]; ++G__28510__i;}
  p__28498 = new cljs.core.IndexedSeq(G__28510__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__28498);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__28511){
var state = cljs.core.first(arglist__28511);
arglist__28511 = cljs.core.next(arglist__28511);
var cont_block = cljs.core.first(arglist__28511);
arglist__28511 = cljs.core.next(arglist__28511);
var ports = cljs.core.first(arglist__28511);
var p__28498 = cljs.core.rest(arglist__28511);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__28498);
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
if(typeof cljs.core.async.t28631 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28631 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28632){
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
this.meta28632 = meta28632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28631.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28631.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28631.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28631.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28631.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28631.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t28631.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28631.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28631.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28633){
var self__ = this;
var _28633__$1 = this;
return self__.meta28632;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28633,meta28632__$1){
var self__ = this;
var _28633__$1 = this;
return (new cljs.core.async.t28631(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28632__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28631.cljs$lang$type = true;

cljs.core.async.t28631.cljs$lang$ctorStr = "cljs.core.async/t28631";

cljs.core.async.t28631.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__14052__auto__,writer__14053__auto__,opt__14054__auto__){
return cljs.core._write.call(null,writer__14053__auto__,"cljs.core.async/t28631");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28631 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t28631(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28632){
return (new cljs.core.async.t28631(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28632));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28631(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16133__auto___28750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto___28750,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto___28750,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28703){
var state_val_28704 = (state_28703[(1)]);
if((state_val_28704 === (7))){
var inst_28647 = (state_28703[(7)]);
var inst_28652 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28647);
var state_28703__$1 = state_28703;
var statearr_28705_28751 = state_28703__$1;
(statearr_28705_28751[(2)] = inst_28652);

(statearr_28705_28751[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (20))){
var inst_28662 = (state_28703[(8)]);
var state_28703__$1 = state_28703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28703__$1,(23),out,inst_28662);
} else {
if((state_val_28704 === (1))){
var inst_28637 = (state_28703[(9)]);
var inst_28637__$1 = calc_state.call(null);
var inst_28638 = cljs.core.seq_QMARK_.call(null,inst_28637__$1);
var state_28703__$1 = (function (){var statearr_28706 = state_28703;
(statearr_28706[(9)] = inst_28637__$1);

return statearr_28706;
})();
if(inst_28638){
var statearr_28707_28752 = state_28703__$1;
(statearr_28707_28752[(1)] = (2));

} else {
var statearr_28708_28753 = state_28703__$1;
(statearr_28708_28753[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (24))){
var inst_28655 = (state_28703[(10)]);
var inst_28647 = inst_28655;
var state_28703__$1 = (function (){var statearr_28709 = state_28703;
(statearr_28709[(7)] = inst_28647);

return statearr_28709;
})();
var statearr_28710_28754 = state_28703__$1;
(statearr_28710_28754[(2)] = null);

(statearr_28710_28754[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (4))){
var inst_28637 = (state_28703[(9)]);
var inst_28643 = (state_28703[(2)]);
var inst_28644 = cljs.core.get.call(null,inst_28643,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28645 = cljs.core.get.call(null,inst_28643,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28646 = cljs.core.get.call(null,inst_28643,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28647 = inst_28637;
var state_28703__$1 = (function (){var statearr_28711 = state_28703;
(statearr_28711[(11)] = inst_28646);

(statearr_28711[(7)] = inst_28647);

(statearr_28711[(12)] = inst_28645);

(statearr_28711[(13)] = inst_28644);

return statearr_28711;
})();
var statearr_28712_28755 = state_28703__$1;
(statearr_28712_28755[(2)] = null);

(statearr_28712_28755[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (15))){
var state_28703__$1 = state_28703;
var statearr_28713_28756 = state_28703__$1;
(statearr_28713_28756[(2)] = null);

(statearr_28713_28756[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (21))){
var inst_28655 = (state_28703[(10)]);
var inst_28647 = inst_28655;
var state_28703__$1 = (function (){var statearr_28714 = state_28703;
(statearr_28714[(7)] = inst_28647);

return statearr_28714;
})();
var statearr_28715_28757 = state_28703__$1;
(statearr_28715_28757[(2)] = null);

(statearr_28715_28757[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (13))){
var inst_28699 = (state_28703[(2)]);
var state_28703__$1 = state_28703;
var statearr_28716_28758 = state_28703__$1;
(statearr_28716_28758[(2)] = inst_28699);

(statearr_28716_28758[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (22))){
var inst_28697 = (state_28703[(2)]);
var state_28703__$1 = state_28703;
var statearr_28717_28759 = state_28703__$1;
(statearr_28717_28759[(2)] = inst_28697);

(statearr_28717_28759[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (6))){
var inst_28701 = (state_28703[(2)]);
var state_28703__$1 = state_28703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28703__$1,inst_28701);
} else {
if((state_val_28704 === (25))){
var state_28703__$1 = state_28703;
var statearr_28718_28760 = state_28703__$1;
(statearr_28718_28760[(2)] = null);

(statearr_28718_28760[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (17))){
var inst_28677 = (state_28703[(14)]);
var state_28703__$1 = state_28703;
var statearr_28719_28761 = state_28703__$1;
(statearr_28719_28761[(2)] = inst_28677);

(statearr_28719_28761[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (3))){
var inst_28637 = (state_28703[(9)]);
var state_28703__$1 = state_28703;
var statearr_28720_28762 = state_28703__$1;
(statearr_28720_28762[(2)] = inst_28637);

(statearr_28720_28762[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (12))){
var inst_28677 = (state_28703[(14)]);
var inst_28663 = (state_28703[(15)]);
var inst_28658 = (state_28703[(16)]);
var inst_28677__$1 = inst_28658.call(null,inst_28663);
var state_28703__$1 = (function (){var statearr_28721 = state_28703;
(statearr_28721[(14)] = inst_28677__$1);

return statearr_28721;
})();
if(cljs.core.truth_(inst_28677__$1)){
var statearr_28722_28763 = state_28703__$1;
(statearr_28722_28763[(1)] = (17));

} else {
var statearr_28723_28764 = state_28703__$1;
(statearr_28723_28764[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (2))){
var inst_28637 = (state_28703[(9)]);
var inst_28640 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28637);
var state_28703__$1 = state_28703;
var statearr_28724_28765 = state_28703__$1;
(statearr_28724_28765[(2)] = inst_28640);

(statearr_28724_28765[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (23))){
var inst_28688 = (state_28703[(2)]);
var state_28703__$1 = state_28703;
if(cljs.core.truth_(inst_28688)){
var statearr_28725_28766 = state_28703__$1;
(statearr_28725_28766[(1)] = (24));

} else {
var statearr_28726_28767 = state_28703__$1;
(statearr_28726_28767[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (19))){
var inst_28685 = (state_28703[(2)]);
var state_28703__$1 = state_28703;
if(cljs.core.truth_(inst_28685)){
var statearr_28727_28768 = state_28703__$1;
(statearr_28727_28768[(1)] = (20));

} else {
var statearr_28728_28769 = state_28703__$1;
(statearr_28728_28769[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (11))){
var inst_28662 = (state_28703[(8)]);
var inst_28668 = (inst_28662 == null);
var state_28703__$1 = state_28703;
if(cljs.core.truth_(inst_28668)){
var statearr_28729_28770 = state_28703__$1;
(statearr_28729_28770[(1)] = (14));

} else {
var statearr_28730_28771 = state_28703__$1;
(statearr_28730_28771[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (9))){
var inst_28655 = (state_28703[(10)]);
var inst_28655__$1 = (state_28703[(2)]);
var inst_28656 = cljs.core.get.call(null,inst_28655__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28657 = cljs.core.get.call(null,inst_28655__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28658 = cljs.core.get.call(null,inst_28655__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28703__$1 = (function (){var statearr_28731 = state_28703;
(statearr_28731[(10)] = inst_28655__$1);

(statearr_28731[(16)] = inst_28658);

(statearr_28731[(17)] = inst_28657);

return statearr_28731;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28703__$1,(10),inst_28656);
} else {
if((state_val_28704 === (5))){
var inst_28647 = (state_28703[(7)]);
var inst_28650 = cljs.core.seq_QMARK_.call(null,inst_28647);
var state_28703__$1 = state_28703;
if(inst_28650){
var statearr_28732_28772 = state_28703__$1;
(statearr_28732_28772[(1)] = (7));

} else {
var statearr_28733_28773 = state_28703__$1;
(statearr_28733_28773[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (14))){
var inst_28663 = (state_28703[(15)]);
var inst_28670 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28663);
var state_28703__$1 = state_28703;
var statearr_28734_28774 = state_28703__$1;
(statearr_28734_28774[(2)] = inst_28670);

(statearr_28734_28774[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (26))){
var inst_28693 = (state_28703[(2)]);
var state_28703__$1 = state_28703;
var statearr_28735_28775 = state_28703__$1;
(statearr_28735_28775[(2)] = inst_28693);

(statearr_28735_28775[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (16))){
var inst_28673 = (state_28703[(2)]);
var inst_28674 = calc_state.call(null);
var inst_28647 = inst_28674;
var state_28703__$1 = (function (){var statearr_28736 = state_28703;
(statearr_28736[(18)] = inst_28673);

(statearr_28736[(7)] = inst_28647);

return statearr_28736;
})();
var statearr_28737_28776 = state_28703__$1;
(statearr_28737_28776[(2)] = null);

(statearr_28737_28776[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (10))){
var inst_28662 = (state_28703[(8)]);
var inst_28663 = (state_28703[(15)]);
var inst_28661 = (state_28703[(2)]);
var inst_28662__$1 = cljs.core.nth.call(null,inst_28661,(0),null);
var inst_28663__$1 = cljs.core.nth.call(null,inst_28661,(1),null);
var inst_28664 = (inst_28662__$1 == null);
var inst_28665 = cljs.core._EQ_.call(null,inst_28663__$1,change);
var inst_28666 = (inst_28664) || (inst_28665);
var state_28703__$1 = (function (){var statearr_28738 = state_28703;
(statearr_28738[(8)] = inst_28662__$1);

(statearr_28738[(15)] = inst_28663__$1);

return statearr_28738;
})();
if(cljs.core.truth_(inst_28666)){
var statearr_28739_28777 = state_28703__$1;
(statearr_28739_28777[(1)] = (11));

} else {
var statearr_28740_28778 = state_28703__$1;
(statearr_28740_28778[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (18))){
var inst_28663 = (state_28703[(15)]);
var inst_28658 = (state_28703[(16)]);
var inst_28657 = (state_28703[(17)]);
var inst_28680 = cljs.core.empty_QMARK_.call(null,inst_28658);
var inst_28681 = inst_28657.call(null,inst_28663);
var inst_28682 = cljs.core.not.call(null,inst_28681);
var inst_28683 = (inst_28680) && (inst_28682);
var state_28703__$1 = state_28703;
var statearr_28741_28779 = state_28703__$1;
(statearr_28741_28779[(2)] = inst_28683);

(statearr_28741_28779[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (8))){
var inst_28647 = (state_28703[(7)]);
var state_28703__$1 = state_28703;
var statearr_28742_28780 = state_28703__$1;
(statearr_28742_28780[(2)] = inst_28647);

(statearr_28742_28780[(1)] = (9));


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
});})(c__16133__auto___28750,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16077__auto__,c__16133__auto___28750,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_28746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28746[(0)] = state_machine__16078__auto__);

(statearr_28746[(1)] = (1));

return statearr_28746;
});
var state_machine__16078__auto____1 = (function (state_28703){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_28703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e28747){if((e28747 instanceof Object)){
var ex__16081__auto__ = e28747;
var statearr_28748_28781 = state_28703;
(statearr_28748_28781[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28782 = state_28703;
state_28703 = G__28782;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_28703){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_28703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto___28750,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16135__auto__ = (function (){var statearr_28749 = f__16134__auto__.call(null);
(statearr_28749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___28750);

return statearr_28749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto___28750,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj28784 = {};
return obj28784;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__13453__auto__ = p;
if(and__13453__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__13453__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__14109__auto__ = (((p == null))?null:p);
return (function (){var or__13465__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__14109__auto__)]);
if(or__13465__auto__){
return or__13465__auto__;
} else {
var or__13465__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__13465__auto____$1){
return or__13465__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__13453__auto__ = p;
if(and__13453__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__13453__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__14109__auto__ = (((p == null))?null:p);
return (function (){var or__13465__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__14109__auto__)]);
if(or__13465__auto__){
return or__13465__auto__;
} else {
var or__13465__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__13465__auto____$1){
return or__13465__auto____$1;
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
if((function (){var and__13453__auto__ = p;
if(and__13453__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__13453__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__14109__auto__ = (((p == null))?null:p);
return (function (){var or__13465__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14109__auto__)]);
if(or__13465__auto__){
return or__13465__auto__;
} else {
var or__13465__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__13465__auto____$1){
return or__13465__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__13453__auto__ = p;
if(and__13453__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__13453__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__14109__auto__ = (((p == null))?null:p);
return (function (){var or__13465__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14109__auto__)]);
if(or__13465__auto__){
return or__13465__auto__;
} else {
var or__13465__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__13465__auto____$1){
return or__13465__auto____$1;
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
var or__13465__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__13465__auto__)){
return or__13465__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__13465__auto__,mults){
return (function (p1__28785_SHARP_){
if(cljs.core.truth_(p1__28785_SHARP_.call(null,topic))){
return p1__28785_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28785_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13465__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28908 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28908 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta28909){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta28909 = meta28909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28908.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28908.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28908.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t28908.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28908.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28908.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28908.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28910){
var self__ = this;
var _28910__$1 = this;
return self__.meta28909;
});})(mults,ensure_mult))
;

cljs.core.async.t28908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28910,meta28909__$1){
var self__ = this;
var _28910__$1 = this;
return (new cljs.core.async.t28908(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta28909__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28908.cljs$lang$type = true;

cljs.core.async.t28908.cljs$lang$ctorStr = "cljs.core.async/t28908";

cljs.core.async.t28908.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__14052__auto__,writer__14053__auto__,opt__14054__auto__){
return cljs.core._write.call(null,writer__14053__auto__,"cljs.core.async/t28908");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28908 = ((function (mults,ensure_mult){
return (function __GT_t28908(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28909){
return (new cljs.core.async.t28908(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28909));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28908(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16133__auto___29030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto___29030,mults,ensure_mult,p){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto___29030,mults,ensure_mult,p){
return (function (state_28982){
var state_val_28983 = (state_28982[(1)]);
if((state_val_28983 === (7))){
var inst_28978 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_28984_29031 = state_28982__$1;
(statearr_28984_29031[(2)] = inst_28978);

(statearr_28984_29031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (20))){
var state_28982__$1 = state_28982;
var statearr_28985_29032 = state_28982__$1;
(statearr_28985_29032[(2)] = null);

(statearr_28985_29032[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (1))){
var state_28982__$1 = state_28982;
var statearr_28986_29033 = state_28982__$1;
(statearr_28986_29033[(2)] = null);

(statearr_28986_29033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (24))){
var inst_28961 = (state_28982[(7)]);
var inst_28970 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28961);
var state_28982__$1 = state_28982;
var statearr_28987_29034 = state_28982__$1;
(statearr_28987_29034[(2)] = inst_28970);

(statearr_28987_29034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (4))){
var inst_28913 = (state_28982[(8)]);
var inst_28913__$1 = (state_28982[(2)]);
var inst_28914 = (inst_28913__$1 == null);
var state_28982__$1 = (function (){var statearr_28988 = state_28982;
(statearr_28988[(8)] = inst_28913__$1);

return statearr_28988;
})();
if(cljs.core.truth_(inst_28914)){
var statearr_28989_29035 = state_28982__$1;
(statearr_28989_29035[(1)] = (5));

} else {
var statearr_28990_29036 = state_28982__$1;
(statearr_28990_29036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (15))){
var inst_28955 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_28991_29037 = state_28982__$1;
(statearr_28991_29037[(2)] = inst_28955);

(statearr_28991_29037[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (21))){
var inst_28975 = (state_28982[(2)]);
var state_28982__$1 = (function (){var statearr_28992 = state_28982;
(statearr_28992[(9)] = inst_28975);

return statearr_28992;
})();
var statearr_28993_29038 = state_28982__$1;
(statearr_28993_29038[(2)] = null);

(statearr_28993_29038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (13))){
var inst_28937 = (state_28982[(10)]);
var inst_28939 = cljs.core.chunked_seq_QMARK_.call(null,inst_28937);
var state_28982__$1 = state_28982;
if(inst_28939){
var statearr_28994_29039 = state_28982__$1;
(statearr_28994_29039[(1)] = (16));

} else {
var statearr_28995_29040 = state_28982__$1;
(statearr_28995_29040[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (22))){
var inst_28967 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
if(cljs.core.truth_(inst_28967)){
var statearr_28996_29041 = state_28982__$1;
(statearr_28996_29041[(1)] = (23));

} else {
var statearr_28997_29042 = state_28982__$1;
(statearr_28997_29042[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (6))){
var inst_28963 = (state_28982[(11)]);
var inst_28913 = (state_28982[(8)]);
var inst_28961 = (state_28982[(7)]);
var inst_28961__$1 = topic_fn.call(null,inst_28913);
var inst_28962 = cljs.core.deref.call(null,mults);
var inst_28963__$1 = cljs.core.get.call(null,inst_28962,inst_28961__$1);
var state_28982__$1 = (function (){var statearr_28998 = state_28982;
(statearr_28998[(11)] = inst_28963__$1);

(statearr_28998[(7)] = inst_28961__$1);

return statearr_28998;
})();
if(cljs.core.truth_(inst_28963__$1)){
var statearr_28999_29043 = state_28982__$1;
(statearr_28999_29043[(1)] = (19));

} else {
var statearr_29000_29044 = state_28982__$1;
(statearr_29000_29044[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (25))){
var inst_28972 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_29001_29045 = state_28982__$1;
(statearr_29001_29045[(2)] = inst_28972);

(statearr_29001_29045[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (17))){
var inst_28937 = (state_28982[(10)]);
var inst_28946 = cljs.core.first.call(null,inst_28937);
var inst_28947 = cljs.core.async.muxch_STAR_.call(null,inst_28946);
var inst_28948 = cljs.core.async.close_BANG_.call(null,inst_28947);
var inst_28949 = cljs.core.next.call(null,inst_28937);
var inst_28923 = inst_28949;
var inst_28924 = null;
var inst_28925 = (0);
var inst_28926 = (0);
var state_28982__$1 = (function (){var statearr_29002 = state_28982;
(statearr_29002[(12)] = inst_28924);

(statearr_29002[(13)] = inst_28923);

(statearr_29002[(14)] = inst_28925);

(statearr_29002[(15)] = inst_28926);

(statearr_29002[(16)] = inst_28948);

return statearr_29002;
})();
var statearr_29003_29046 = state_28982__$1;
(statearr_29003_29046[(2)] = null);

(statearr_29003_29046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (3))){
var inst_28980 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28982__$1,inst_28980);
} else {
if((state_val_28983 === (12))){
var inst_28957 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_29004_29047 = state_28982__$1;
(statearr_29004_29047[(2)] = inst_28957);

(statearr_29004_29047[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (2))){
var state_28982__$1 = state_28982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28982__$1,(4),ch);
} else {
if((state_val_28983 === (23))){
var state_28982__$1 = state_28982;
var statearr_29005_29048 = state_28982__$1;
(statearr_29005_29048[(2)] = null);

(statearr_29005_29048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (19))){
var inst_28963 = (state_28982[(11)]);
var inst_28913 = (state_28982[(8)]);
var inst_28965 = cljs.core.async.muxch_STAR_.call(null,inst_28963);
var state_28982__$1 = state_28982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28982__$1,(22),inst_28965,inst_28913);
} else {
if((state_val_28983 === (11))){
var inst_28923 = (state_28982[(13)]);
var inst_28937 = (state_28982[(10)]);
var inst_28937__$1 = cljs.core.seq.call(null,inst_28923);
var state_28982__$1 = (function (){var statearr_29006 = state_28982;
(statearr_29006[(10)] = inst_28937__$1);

return statearr_29006;
})();
if(inst_28937__$1){
var statearr_29007_29049 = state_28982__$1;
(statearr_29007_29049[(1)] = (13));

} else {
var statearr_29008_29050 = state_28982__$1;
(statearr_29008_29050[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (9))){
var inst_28959 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_29009_29051 = state_28982__$1;
(statearr_29009_29051[(2)] = inst_28959);

(statearr_29009_29051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (5))){
var inst_28920 = cljs.core.deref.call(null,mults);
var inst_28921 = cljs.core.vals.call(null,inst_28920);
var inst_28922 = cljs.core.seq.call(null,inst_28921);
var inst_28923 = inst_28922;
var inst_28924 = null;
var inst_28925 = (0);
var inst_28926 = (0);
var state_28982__$1 = (function (){var statearr_29010 = state_28982;
(statearr_29010[(12)] = inst_28924);

(statearr_29010[(13)] = inst_28923);

(statearr_29010[(14)] = inst_28925);

(statearr_29010[(15)] = inst_28926);

return statearr_29010;
})();
var statearr_29011_29052 = state_28982__$1;
(statearr_29011_29052[(2)] = null);

(statearr_29011_29052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (14))){
var state_28982__$1 = state_28982;
var statearr_29015_29053 = state_28982__$1;
(statearr_29015_29053[(2)] = null);

(statearr_29015_29053[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (16))){
var inst_28937 = (state_28982[(10)]);
var inst_28941 = cljs.core.chunk_first.call(null,inst_28937);
var inst_28942 = cljs.core.chunk_rest.call(null,inst_28937);
var inst_28943 = cljs.core.count.call(null,inst_28941);
var inst_28923 = inst_28942;
var inst_28924 = inst_28941;
var inst_28925 = inst_28943;
var inst_28926 = (0);
var state_28982__$1 = (function (){var statearr_29016 = state_28982;
(statearr_29016[(12)] = inst_28924);

(statearr_29016[(13)] = inst_28923);

(statearr_29016[(14)] = inst_28925);

(statearr_29016[(15)] = inst_28926);

return statearr_29016;
})();
var statearr_29017_29054 = state_28982__$1;
(statearr_29017_29054[(2)] = null);

(statearr_29017_29054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (10))){
var inst_28924 = (state_28982[(12)]);
var inst_28923 = (state_28982[(13)]);
var inst_28925 = (state_28982[(14)]);
var inst_28926 = (state_28982[(15)]);
var inst_28931 = cljs.core._nth.call(null,inst_28924,inst_28926);
var inst_28932 = cljs.core.async.muxch_STAR_.call(null,inst_28931);
var inst_28933 = cljs.core.async.close_BANG_.call(null,inst_28932);
var inst_28934 = (inst_28926 + (1));
var tmp29012 = inst_28924;
var tmp29013 = inst_28923;
var tmp29014 = inst_28925;
var inst_28923__$1 = tmp29013;
var inst_28924__$1 = tmp29012;
var inst_28925__$1 = tmp29014;
var inst_28926__$1 = inst_28934;
var state_28982__$1 = (function (){var statearr_29018 = state_28982;
(statearr_29018[(12)] = inst_28924__$1);

(statearr_29018[(13)] = inst_28923__$1);

(statearr_29018[(14)] = inst_28925__$1);

(statearr_29018[(15)] = inst_28926__$1);

(statearr_29018[(17)] = inst_28933);

return statearr_29018;
})();
var statearr_29019_29055 = state_28982__$1;
(statearr_29019_29055[(2)] = null);

(statearr_29019_29055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (18))){
var inst_28952 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_29020_29056 = state_28982__$1;
(statearr_29020_29056[(2)] = inst_28952);

(statearr_29020_29056[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (8))){
var inst_28925 = (state_28982[(14)]);
var inst_28926 = (state_28982[(15)]);
var inst_28928 = (inst_28926 < inst_28925);
var inst_28929 = inst_28928;
var state_28982__$1 = state_28982;
if(cljs.core.truth_(inst_28929)){
var statearr_29021_29057 = state_28982__$1;
(statearr_29021_29057[(1)] = (10));

} else {
var statearr_29022_29058 = state_28982__$1;
(statearr_29022_29058[(1)] = (11));

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
});})(c__16133__auto___29030,mults,ensure_mult,p))
;
return ((function (switch__16077__auto__,c__16133__auto___29030,mults,ensure_mult,p){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_29026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29026[(0)] = state_machine__16078__auto__);

(statearr_29026[(1)] = (1));

return statearr_29026;
});
var state_machine__16078__auto____1 = (function (state_28982){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_28982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e29027){if((e29027 instanceof Object)){
var ex__16081__auto__ = e29027;
var statearr_29028_29059 = state_28982;
(statearr_29028_29059[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29060 = state_28982;
state_28982 = G__29060;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_28982){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_28982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto___29030,mults,ensure_mult,p))
})();
var state__16135__auto__ = (function (){var statearr_29029 = f__16134__auto__.call(null);
(statearr_29029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___29030);

return statearr_29029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto___29030,mults,ensure_mult,p))
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
var c__16133__auto___29197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto___29197,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto___29197,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29167){
var state_val_29168 = (state_29167[(1)]);
if((state_val_29168 === (7))){
var state_29167__$1 = state_29167;
var statearr_29169_29198 = state_29167__$1;
(statearr_29169_29198[(2)] = null);

(statearr_29169_29198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (1))){
var state_29167__$1 = state_29167;
var statearr_29170_29199 = state_29167__$1;
(statearr_29170_29199[(2)] = null);

(statearr_29170_29199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (4))){
var inst_29131 = (state_29167[(7)]);
var inst_29133 = (inst_29131 < cnt);
var state_29167__$1 = state_29167;
if(cljs.core.truth_(inst_29133)){
var statearr_29171_29200 = state_29167__$1;
(statearr_29171_29200[(1)] = (6));

} else {
var statearr_29172_29201 = state_29167__$1;
(statearr_29172_29201[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (15))){
var inst_29163 = (state_29167[(2)]);
var state_29167__$1 = state_29167;
var statearr_29173_29202 = state_29167__$1;
(statearr_29173_29202[(2)] = inst_29163);

(statearr_29173_29202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (13))){
var inst_29156 = cljs.core.async.close_BANG_.call(null,out);
var state_29167__$1 = state_29167;
var statearr_29174_29203 = state_29167__$1;
(statearr_29174_29203[(2)] = inst_29156);

(statearr_29174_29203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (6))){
var state_29167__$1 = state_29167;
var statearr_29175_29204 = state_29167__$1;
(statearr_29175_29204[(2)] = null);

(statearr_29175_29204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (3))){
var inst_29165 = (state_29167[(2)]);
var state_29167__$1 = state_29167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29167__$1,inst_29165);
} else {
if((state_val_29168 === (12))){
var inst_29153 = (state_29167[(8)]);
var inst_29153__$1 = (state_29167[(2)]);
var inst_29154 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29153__$1);
var state_29167__$1 = (function (){var statearr_29176 = state_29167;
(statearr_29176[(8)] = inst_29153__$1);

return statearr_29176;
})();
if(cljs.core.truth_(inst_29154)){
var statearr_29177_29205 = state_29167__$1;
(statearr_29177_29205[(1)] = (13));

} else {
var statearr_29178_29206 = state_29167__$1;
(statearr_29178_29206[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (2))){
var inst_29130 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29131 = (0);
var state_29167__$1 = (function (){var statearr_29179 = state_29167;
(statearr_29179[(9)] = inst_29130);

(statearr_29179[(7)] = inst_29131);

return statearr_29179;
})();
var statearr_29180_29207 = state_29167__$1;
(statearr_29180_29207[(2)] = null);

(statearr_29180_29207[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (11))){
var inst_29131 = (state_29167[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29167,(10),Object,null,(9));
var inst_29140 = chs__$1.call(null,inst_29131);
var inst_29141 = done.call(null,inst_29131);
var inst_29142 = cljs.core.async.take_BANG_.call(null,inst_29140,inst_29141);
var state_29167__$1 = state_29167;
var statearr_29181_29208 = state_29167__$1;
(statearr_29181_29208[(2)] = inst_29142);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29167__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (9))){
var inst_29131 = (state_29167[(7)]);
var inst_29144 = (state_29167[(2)]);
var inst_29145 = (inst_29131 + (1));
var inst_29131__$1 = inst_29145;
var state_29167__$1 = (function (){var statearr_29182 = state_29167;
(statearr_29182[(7)] = inst_29131__$1);

(statearr_29182[(10)] = inst_29144);

return statearr_29182;
})();
var statearr_29183_29209 = state_29167__$1;
(statearr_29183_29209[(2)] = null);

(statearr_29183_29209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (5))){
var inst_29151 = (state_29167[(2)]);
var state_29167__$1 = (function (){var statearr_29184 = state_29167;
(statearr_29184[(11)] = inst_29151);

return statearr_29184;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29167__$1,(12),dchan);
} else {
if((state_val_29168 === (14))){
var inst_29153 = (state_29167[(8)]);
var inst_29158 = cljs.core.apply.call(null,f,inst_29153);
var state_29167__$1 = state_29167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29167__$1,(16),out,inst_29158);
} else {
if((state_val_29168 === (16))){
var inst_29160 = (state_29167[(2)]);
var state_29167__$1 = (function (){var statearr_29185 = state_29167;
(statearr_29185[(12)] = inst_29160);

return statearr_29185;
})();
var statearr_29186_29210 = state_29167__$1;
(statearr_29186_29210[(2)] = null);

(statearr_29186_29210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (10))){
var inst_29135 = (state_29167[(2)]);
var inst_29136 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29167__$1 = (function (){var statearr_29187 = state_29167;
(statearr_29187[(13)] = inst_29135);

return statearr_29187;
})();
var statearr_29188_29211 = state_29167__$1;
(statearr_29188_29211[(2)] = inst_29136);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29167__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29168 === (8))){
var inst_29149 = (state_29167[(2)]);
var state_29167__$1 = state_29167;
var statearr_29189_29212 = state_29167__$1;
(statearr_29189_29212[(2)] = inst_29149);

(statearr_29189_29212[(1)] = (5));


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
});})(c__16133__auto___29197,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16077__auto__,c__16133__auto___29197,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_29193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29193[(0)] = state_machine__16078__auto__);

(statearr_29193[(1)] = (1));

return statearr_29193;
});
var state_machine__16078__auto____1 = (function (state_29167){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_29167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e29194){if((e29194 instanceof Object)){
var ex__16081__auto__ = e29194;
var statearr_29195_29213 = state_29167;
(statearr_29195_29213[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29214 = state_29167;
state_29167 = G__29214;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_29167){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_29167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto___29197,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16135__auto__ = (function (){var statearr_29196 = f__16134__auto__.call(null);
(statearr_29196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___29197);

return statearr_29196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto___29197,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__16133__auto___29322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto___29322,out){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto___29322,out){
return (function (state_29298){
var state_val_29299 = (state_29298[(1)]);
if((state_val_29299 === (7))){
var inst_29277 = (state_29298[(7)]);
var inst_29278 = (state_29298[(8)]);
var inst_29277__$1 = (state_29298[(2)]);
var inst_29278__$1 = cljs.core.nth.call(null,inst_29277__$1,(0),null);
var inst_29279 = cljs.core.nth.call(null,inst_29277__$1,(1),null);
var inst_29280 = (inst_29278__$1 == null);
var state_29298__$1 = (function (){var statearr_29300 = state_29298;
(statearr_29300[(9)] = inst_29279);

(statearr_29300[(7)] = inst_29277__$1);

(statearr_29300[(8)] = inst_29278__$1);

return statearr_29300;
})();
if(cljs.core.truth_(inst_29280)){
var statearr_29301_29323 = state_29298__$1;
(statearr_29301_29323[(1)] = (8));

} else {
var statearr_29302_29324 = state_29298__$1;
(statearr_29302_29324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (1))){
var inst_29269 = cljs.core.vec.call(null,chs);
var inst_29270 = inst_29269;
var state_29298__$1 = (function (){var statearr_29303 = state_29298;
(statearr_29303[(10)] = inst_29270);

return statearr_29303;
})();
var statearr_29304_29325 = state_29298__$1;
(statearr_29304_29325[(2)] = null);

(statearr_29304_29325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (4))){
var inst_29270 = (state_29298[(10)]);
var state_29298__$1 = state_29298;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29298__$1,(7),inst_29270);
} else {
if((state_val_29299 === (6))){
var inst_29294 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29305_29326 = state_29298__$1;
(statearr_29305_29326[(2)] = inst_29294);

(statearr_29305_29326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (3))){
var inst_29296 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29298__$1,inst_29296);
} else {
if((state_val_29299 === (2))){
var inst_29270 = (state_29298[(10)]);
var inst_29272 = cljs.core.count.call(null,inst_29270);
var inst_29273 = (inst_29272 > (0));
var state_29298__$1 = state_29298;
if(cljs.core.truth_(inst_29273)){
var statearr_29307_29327 = state_29298__$1;
(statearr_29307_29327[(1)] = (4));

} else {
var statearr_29308_29328 = state_29298__$1;
(statearr_29308_29328[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (11))){
var inst_29270 = (state_29298[(10)]);
var inst_29287 = (state_29298[(2)]);
var tmp29306 = inst_29270;
var inst_29270__$1 = tmp29306;
var state_29298__$1 = (function (){var statearr_29309 = state_29298;
(statearr_29309[(11)] = inst_29287);

(statearr_29309[(10)] = inst_29270__$1);

return statearr_29309;
})();
var statearr_29310_29329 = state_29298__$1;
(statearr_29310_29329[(2)] = null);

(statearr_29310_29329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (9))){
var inst_29278 = (state_29298[(8)]);
var state_29298__$1 = state_29298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29298__$1,(11),out,inst_29278);
} else {
if((state_val_29299 === (5))){
var inst_29292 = cljs.core.async.close_BANG_.call(null,out);
var state_29298__$1 = state_29298;
var statearr_29311_29330 = state_29298__$1;
(statearr_29311_29330[(2)] = inst_29292);

(statearr_29311_29330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (10))){
var inst_29290 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29312_29331 = state_29298__$1;
(statearr_29312_29331[(2)] = inst_29290);

(statearr_29312_29331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (8))){
var inst_29279 = (state_29298[(9)]);
var inst_29277 = (state_29298[(7)]);
var inst_29278 = (state_29298[(8)]);
var inst_29270 = (state_29298[(10)]);
var inst_29282 = (function (){var c = inst_29279;
var v = inst_29278;
var vec__29275 = inst_29277;
var cs = inst_29270;
return ((function (c,v,vec__29275,cs,inst_29279,inst_29277,inst_29278,inst_29270,state_val_29299,c__16133__auto___29322,out){
return (function (p1__29215_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29215_SHARP_);
});
;})(c,v,vec__29275,cs,inst_29279,inst_29277,inst_29278,inst_29270,state_val_29299,c__16133__auto___29322,out))
})();
var inst_29283 = cljs.core.filterv.call(null,inst_29282,inst_29270);
var inst_29270__$1 = inst_29283;
var state_29298__$1 = (function (){var statearr_29313 = state_29298;
(statearr_29313[(10)] = inst_29270__$1);

return statearr_29313;
})();
var statearr_29314_29332 = state_29298__$1;
(statearr_29314_29332[(2)] = null);

(statearr_29314_29332[(1)] = (2));


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
});})(c__16133__auto___29322,out))
;
return ((function (switch__16077__auto__,c__16133__auto___29322,out){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_29318 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29318[(0)] = state_machine__16078__auto__);

(statearr_29318[(1)] = (1));

return statearr_29318;
});
var state_machine__16078__auto____1 = (function (state_29298){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_29298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e29319){if((e29319 instanceof Object)){
var ex__16081__auto__ = e29319;
var statearr_29320_29333 = state_29298;
(statearr_29320_29333[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29334 = state_29298;
state_29298 = G__29334;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_29298){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_29298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto___29322,out))
})();
var state__16135__auto__ = (function (){var statearr_29321 = f__16134__auto__.call(null);
(statearr_29321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___29322);

return statearr_29321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto___29322,out))
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
var c__16133__auto___29427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto___29427,out){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto___29427,out){
return (function (state_29404){
var state_val_29405 = (state_29404[(1)]);
if((state_val_29405 === (7))){
var inst_29386 = (state_29404[(7)]);
var inst_29386__$1 = (state_29404[(2)]);
var inst_29387 = (inst_29386__$1 == null);
var inst_29388 = cljs.core.not.call(null,inst_29387);
var state_29404__$1 = (function (){var statearr_29406 = state_29404;
(statearr_29406[(7)] = inst_29386__$1);

return statearr_29406;
})();
if(inst_29388){
var statearr_29407_29428 = state_29404__$1;
(statearr_29407_29428[(1)] = (8));

} else {
var statearr_29408_29429 = state_29404__$1;
(statearr_29408_29429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (1))){
var inst_29381 = (0);
var state_29404__$1 = (function (){var statearr_29409 = state_29404;
(statearr_29409[(8)] = inst_29381);

return statearr_29409;
})();
var statearr_29410_29430 = state_29404__$1;
(statearr_29410_29430[(2)] = null);

(statearr_29410_29430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (4))){
var state_29404__$1 = state_29404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29404__$1,(7),ch);
} else {
if((state_val_29405 === (6))){
var inst_29399 = (state_29404[(2)]);
var state_29404__$1 = state_29404;
var statearr_29411_29431 = state_29404__$1;
(statearr_29411_29431[(2)] = inst_29399);

(statearr_29411_29431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (3))){
var inst_29401 = (state_29404[(2)]);
var inst_29402 = cljs.core.async.close_BANG_.call(null,out);
var state_29404__$1 = (function (){var statearr_29412 = state_29404;
(statearr_29412[(9)] = inst_29401);

return statearr_29412;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29404__$1,inst_29402);
} else {
if((state_val_29405 === (2))){
var inst_29381 = (state_29404[(8)]);
var inst_29383 = (inst_29381 < n);
var state_29404__$1 = state_29404;
if(cljs.core.truth_(inst_29383)){
var statearr_29413_29432 = state_29404__$1;
(statearr_29413_29432[(1)] = (4));

} else {
var statearr_29414_29433 = state_29404__$1;
(statearr_29414_29433[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (11))){
var inst_29381 = (state_29404[(8)]);
var inst_29391 = (state_29404[(2)]);
var inst_29392 = (inst_29381 + (1));
var inst_29381__$1 = inst_29392;
var state_29404__$1 = (function (){var statearr_29415 = state_29404;
(statearr_29415[(8)] = inst_29381__$1);

(statearr_29415[(10)] = inst_29391);

return statearr_29415;
})();
var statearr_29416_29434 = state_29404__$1;
(statearr_29416_29434[(2)] = null);

(statearr_29416_29434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (9))){
var state_29404__$1 = state_29404;
var statearr_29417_29435 = state_29404__$1;
(statearr_29417_29435[(2)] = null);

(statearr_29417_29435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (5))){
var state_29404__$1 = state_29404;
var statearr_29418_29436 = state_29404__$1;
(statearr_29418_29436[(2)] = null);

(statearr_29418_29436[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (10))){
var inst_29396 = (state_29404[(2)]);
var state_29404__$1 = state_29404;
var statearr_29419_29437 = state_29404__$1;
(statearr_29419_29437[(2)] = inst_29396);

(statearr_29419_29437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29405 === (8))){
var inst_29386 = (state_29404[(7)]);
var state_29404__$1 = state_29404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29404__$1,(11),out,inst_29386);
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
});})(c__16133__auto___29427,out))
;
return ((function (switch__16077__auto__,c__16133__auto___29427,out){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_29423 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29423[(0)] = state_machine__16078__auto__);

(statearr_29423[(1)] = (1));

return statearr_29423;
});
var state_machine__16078__auto____1 = (function (state_29404){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_29404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e29424){if((e29424 instanceof Object)){
var ex__16081__auto__ = e29424;
var statearr_29425_29438 = state_29404;
(statearr_29425_29438[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29439 = state_29404;
state_29404 = G__29439;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_29404){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_29404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto___29427,out))
})();
var state__16135__auto__ = (function (){var statearr_29426 = f__16134__auto__.call(null);
(statearr_29426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___29427);

return statearr_29426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto___29427,out))
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
if(typeof cljs.core.async.t29447 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29447 = (function (ch,f,map_LT_,meta29448){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29448 = meta29448;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29447.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29447.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29447.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29447.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29450 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29450 = (function (fn1,_,meta29448,map_LT_,f,ch,meta29451){
this.fn1 = fn1;
this._ = _;
this.meta29448 = meta29448;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29451 = meta29451;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29450.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29450.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29450.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29440_SHARP_){
return f1.call(null,(((p1__29440_SHARP_ == null))?null:self__.f.call(null,p1__29440_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29450.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29452){
var self__ = this;
var _29452__$1 = this;
return self__.meta29451;
});})(___$1))
;

cljs.core.async.t29450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29452,meta29451__$1){
var self__ = this;
var _29452__$1 = this;
return (new cljs.core.async.t29450(self__.fn1,self__._,self__.meta29448,self__.map_LT_,self__.f,self__.ch,meta29451__$1));
});})(___$1))
;

cljs.core.async.t29450.cljs$lang$type = true;

cljs.core.async.t29450.cljs$lang$ctorStr = "cljs.core.async/t29450";

cljs.core.async.t29450.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__14052__auto__,writer__14053__auto__,opt__14054__auto__){
return cljs.core._write.call(null,writer__14053__auto__,"cljs.core.async/t29450");
});})(___$1))
;

cljs.core.async.__GT_t29450 = ((function (___$1){
return (function __GT_t29450(fn1__$1,___$2,meta29448__$1,map_LT___$1,f__$1,ch__$1,meta29451){
return (new cljs.core.async.t29450(fn1__$1,___$2,meta29448__$1,map_LT___$1,f__$1,ch__$1,meta29451));
});})(___$1))
;

}

return (new cljs.core.async.t29450(fn1,___$1,self__.meta29448,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__13453__auto__ = ret;
if(cljs.core.truth_(and__13453__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__13453__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t29447.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29447.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29447.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29449){
var self__ = this;
var _29449__$1 = this;
return self__.meta29448;
});

cljs.core.async.t29447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29449,meta29448__$1){
var self__ = this;
var _29449__$1 = this;
return (new cljs.core.async.t29447(self__.ch,self__.f,self__.map_LT_,meta29448__$1));
});

cljs.core.async.t29447.cljs$lang$type = true;

cljs.core.async.t29447.cljs$lang$ctorStr = "cljs.core.async/t29447";

cljs.core.async.t29447.cljs$lang$ctorPrWriter = (function (this__14052__auto__,writer__14053__auto__,opt__14054__auto__){
return cljs.core._write.call(null,writer__14053__auto__,"cljs.core.async/t29447");
});

cljs.core.async.__GT_t29447 = (function __GT_t29447(ch__$1,f__$1,map_LT___$1,meta29448){
return (new cljs.core.async.t29447(ch__$1,f__$1,map_LT___$1,meta29448));
});

}

return (new cljs.core.async.t29447(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t29456 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29456 = (function (ch,f,map_GT_,meta29457){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29457 = meta29457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29456.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29456.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29456.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29456.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29456.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29456.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29458){
var self__ = this;
var _29458__$1 = this;
return self__.meta29457;
});

cljs.core.async.t29456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29458,meta29457__$1){
var self__ = this;
var _29458__$1 = this;
return (new cljs.core.async.t29456(self__.ch,self__.f,self__.map_GT_,meta29457__$1));
});

cljs.core.async.t29456.cljs$lang$type = true;

cljs.core.async.t29456.cljs$lang$ctorStr = "cljs.core.async/t29456";

cljs.core.async.t29456.cljs$lang$ctorPrWriter = (function (this__14052__auto__,writer__14053__auto__,opt__14054__auto__){
return cljs.core._write.call(null,writer__14053__auto__,"cljs.core.async/t29456");
});

cljs.core.async.__GT_t29456 = (function __GT_t29456(ch__$1,f__$1,map_GT___$1,meta29457){
return (new cljs.core.async.t29456(ch__$1,f__$1,map_GT___$1,meta29457));
});

}

return (new cljs.core.async.t29456(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t29462 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29462 = (function (ch,p,filter_GT_,meta29463){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29463 = meta29463;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29462.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29462.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29462.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29462.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29462.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29462.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29462.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29464){
var self__ = this;
var _29464__$1 = this;
return self__.meta29463;
});

cljs.core.async.t29462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29464,meta29463__$1){
var self__ = this;
var _29464__$1 = this;
return (new cljs.core.async.t29462(self__.ch,self__.p,self__.filter_GT_,meta29463__$1));
});

cljs.core.async.t29462.cljs$lang$type = true;

cljs.core.async.t29462.cljs$lang$ctorStr = "cljs.core.async/t29462";

cljs.core.async.t29462.cljs$lang$ctorPrWriter = (function (this__14052__auto__,writer__14053__auto__,opt__14054__auto__){
return cljs.core._write.call(null,writer__14053__auto__,"cljs.core.async/t29462");
});

cljs.core.async.__GT_t29462 = (function __GT_t29462(ch__$1,p__$1,filter_GT___$1,meta29463){
return (new cljs.core.async.t29462(ch__$1,p__$1,filter_GT___$1,meta29463));
});

}

return (new cljs.core.async.t29462(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16133__auto___29547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto___29547,out){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto___29547,out){
return (function (state_29526){
var state_val_29527 = (state_29526[(1)]);
if((state_val_29527 === (7))){
var inst_29522 = (state_29526[(2)]);
var state_29526__$1 = state_29526;
var statearr_29528_29548 = state_29526__$1;
(statearr_29528_29548[(2)] = inst_29522);

(statearr_29528_29548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29527 === (1))){
var state_29526__$1 = state_29526;
var statearr_29529_29549 = state_29526__$1;
(statearr_29529_29549[(2)] = null);

(statearr_29529_29549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29527 === (4))){
var inst_29508 = (state_29526[(7)]);
var inst_29508__$1 = (state_29526[(2)]);
var inst_29509 = (inst_29508__$1 == null);
var state_29526__$1 = (function (){var statearr_29530 = state_29526;
(statearr_29530[(7)] = inst_29508__$1);

return statearr_29530;
})();
if(cljs.core.truth_(inst_29509)){
var statearr_29531_29550 = state_29526__$1;
(statearr_29531_29550[(1)] = (5));

} else {
var statearr_29532_29551 = state_29526__$1;
(statearr_29532_29551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29527 === (6))){
var inst_29508 = (state_29526[(7)]);
var inst_29513 = p.call(null,inst_29508);
var state_29526__$1 = state_29526;
if(cljs.core.truth_(inst_29513)){
var statearr_29533_29552 = state_29526__$1;
(statearr_29533_29552[(1)] = (8));

} else {
var statearr_29534_29553 = state_29526__$1;
(statearr_29534_29553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29527 === (3))){
var inst_29524 = (state_29526[(2)]);
var state_29526__$1 = state_29526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29526__$1,inst_29524);
} else {
if((state_val_29527 === (2))){
var state_29526__$1 = state_29526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29526__$1,(4),ch);
} else {
if((state_val_29527 === (11))){
var inst_29516 = (state_29526[(2)]);
var state_29526__$1 = state_29526;
var statearr_29535_29554 = state_29526__$1;
(statearr_29535_29554[(2)] = inst_29516);

(statearr_29535_29554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29527 === (9))){
var state_29526__$1 = state_29526;
var statearr_29536_29555 = state_29526__$1;
(statearr_29536_29555[(2)] = null);

(statearr_29536_29555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29527 === (5))){
var inst_29511 = cljs.core.async.close_BANG_.call(null,out);
var state_29526__$1 = state_29526;
var statearr_29537_29556 = state_29526__$1;
(statearr_29537_29556[(2)] = inst_29511);

(statearr_29537_29556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29527 === (10))){
var inst_29519 = (state_29526[(2)]);
var state_29526__$1 = (function (){var statearr_29538 = state_29526;
(statearr_29538[(8)] = inst_29519);

return statearr_29538;
})();
var statearr_29539_29557 = state_29526__$1;
(statearr_29539_29557[(2)] = null);

(statearr_29539_29557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29527 === (8))){
var inst_29508 = (state_29526[(7)]);
var state_29526__$1 = state_29526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29526__$1,(11),out,inst_29508);
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
});})(c__16133__auto___29547,out))
;
return ((function (switch__16077__auto__,c__16133__auto___29547,out){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_29543 = [null,null,null,null,null,null,null,null,null];
(statearr_29543[(0)] = state_machine__16078__auto__);

(statearr_29543[(1)] = (1));

return statearr_29543;
});
var state_machine__16078__auto____1 = (function (state_29526){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_29526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e29544){if((e29544 instanceof Object)){
var ex__16081__auto__ = e29544;
var statearr_29545_29558 = state_29526;
(statearr_29545_29558[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29559 = state_29526;
state_29526 = G__29559;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_29526){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_29526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto___29547,out))
})();
var state__16135__auto__ = (function (){var statearr_29546 = f__16134__auto__.call(null);
(statearr_29546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___29547);

return statearr_29546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto___29547,out))
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
var c__16133__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto__){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto__){
return (function (state_29725){
var state_val_29726 = (state_29725[(1)]);
if((state_val_29726 === (7))){
var inst_29721 = (state_29725[(2)]);
var state_29725__$1 = state_29725;
var statearr_29727_29768 = state_29725__$1;
(statearr_29727_29768[(2)] = inst_29721);

(statearr_29727_29768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (20))){
var inst_29691 = (state_29725[(7)]);
var inst_29702 = (state_29725[(2)]);
var inst_29703 = cljs.core.next.call(null,inst_29691);
var inst_29677 = inst_29703;
var inst_29678 = null;
var inst_29679 = (0);
var inst_29680 = (0);
var state_29725__$1 = (function (){var statearr_29728 = state_29725;
(statearr_29728[(8)] = inst_29680);

(statearr_29728[(9)] = inst_29679);

(statearr_29728[(10)] = inst_29677);

(statearr_29728[(11)] = inst_29702);

(statearr_29728[(12)] = inst_29678);

return statearr_29728;
})();
var statearr_29729_29769 = state_29725__$1;
(statearr_29729_29769[(2)] = null);

(statearr_29729_29769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (1))){
var state_29725__$1 = state_29725;
var statearr_29730_29770 = state_29725__$1;
(statearr_29730_29770[(2)] = null);

(statearr_29730_29770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (4))){
var inst_29666 = (state_29725[(13)]);
var inst_29666__$1 = (state_29725[(2)]);
var inst_29667 = (inst_29666__$1 == null);
var state_29725__$1 = (function (){var statearr_29731 = state_29725;
(statearr_29731[(13)] = inst_29666__$1);

return statearr_29731;
})();
if(cljs.core.truth_(inst_29667)){
var statearr_29732_29771 = state_29725__$1;
(statearr_29732_29771[(1)] = (5));

} else {
var statearr_29733_29772 = state_29725__$1;
(statearr_29733_29772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (15))){
var state_29725__$1 = state_29725;
var statearr_29737_29773 = state_29725__$1;
(statearr_29737_29773[(2)] = null);

(statearr_29737_29773[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (21))){
var state_29725__$1 = state_29725;
var statearr_29738_29774 = state_29725__$1;
(statearr_29738_29774[(2)] = null);

(statearr_29738_29774[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (13))){
var inst_29680 = (state_29725[(8)]);
var inst_29679 = (state_29725[(9)]);
var inst_29677 = (state_29725[(10)]);
var inst_29678 = (state_29725[(12)]);
var inst_29687 = (state_29725[(2)]);
var inst_29688 = (inst_29680 + (1));
var tmp29734 = inst_29679;
var tmp29735 = inst_29677;
var tmp29736 = inst_29678;
var inst_29677__$1 = tmp29735;
var inst_29678__$1 = tmp29736;
var inst_29679__$1 = tmp29734;
var inst_29680__$1 = inst_29688;
var state_29725__$1 = (function (){var statearr_29739 = state_29725;
(statearr_29739[(8)] = inst_29680__$1);

(statearr_29739[(14)] = inst_29687);

(statearr_29739[(9)] = inst_29679__$1);

(statearr_29739[(10)] = inst_29677__$1);

(statearr_29739[(12)] = inst_29678__$1);

return statearr_29739;
})();
var statearr_29740_29775 = state_29725__$1;
(statearr_29740_29775[(2)] = null);

(statearr_29740_29775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (22))){
var state_29725__$1 = state_29725;
var statearr_29741_29776 = state_29725__$1;
(statearr_29741_29776[(2)] = null);

(statearr_29741_29776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (6))){
var inst_29666 = (state_29725[(13)]);
var inst_29675 = f.call(null,inst_29666);
var inst_29676 = cljs.core.seq.call(null,inst_29675);
var inst_29677 = inst_29676;
var inst_29678 = null;
var inst_29679 = (0);
var inst_29680 = (0);
var state_29725__$1 = (function (){var statearr_29742 = state_29725;
(statearr_29742[(8)] = inst_29680);

(statearr_29742[(9)] = inst_29679);

(statearr_29742[(10)] = inst_29677);

(statearr_29742[(12)] = inst_29678);

return statearr_29742;
})();
var statearr_29743_29777 = state_29725__$1;
(statearr_29743_29777[(2)] = null);

(statearr_29743_29777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (17))){
var inst_29691 = (state_29725[(7)]);
var inst_29695 = cljs.core.chunk_first.call(null,inst_29691);
var inst_29696 = cljs.core.chunk_rest.call(null,inst_29691);
var inst_29697 = cljs.core.count.call(null,inst_29695);
var inst_29677 = inst_29696;
var inst_29678 = inst_29695;
var inst_29679 = inst_29697;
var inst_29680 = (0);
var state_29725__$1 = (function (){var statearr_29744 = state_29725;
(statearr_29744[(8)] = inst_29680);

(statearr_29744[(9)] = inst_29679);

(statearr_29744[(10)] = inst_29677);

(statearr_29744[(12)] = inst_29678);

return statearr_29744;
})();
var statearr_29745_29778 = state_29725__$1;
(statearr_29745_29778[(2)] = null);

(statearr_29745_29778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (3))){
var inst_29723 = (state_29725[(2)]);
var state_29725__$1 = state_29725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29725__$1,inst_29723);
} else {
if((state_val_29726 === (12))){
var inst_29711 = (state_29725[(2)]);
var state_29725__$1 = state_29725;
var statearr_29746_29779 = state_29725__$1;
(statearr_29746_29779[(2)] = inst_29711);

(statearr_29746_29779[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (2))){
var state_29725__$1 = state_29725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29725__$1,(4),in$);
} else {
if((state_val_29726 === (23))){
var inst_29719 = (state_29725[(2)]);
var state_29725__$1 = state_29725;
var statearr_29747_29780 = state_29725__$1;
(statearr_29747_29780[(2)] = inst_29719);

(statearr_29747_29780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (19))){
var inst_29706 = (state_29725[(2)]);
var state_29725__$1 = state_29725;
var statearr_29748_29781 = state_29725__$1;
(statearr_29748_29781[(2)] = inst_29706);

(statearr_29748_29781[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (11))){
var inst_29677 = (state_29725[(10)]);
var inst_29691 = (state_29725[(7)]);
var inst_29691__$1 = cljs.core.seq.call(null,inst_29677);
var state_29725__$1 = (function (){var statearr_29749 = state_29725;
(statearr_29749[(7)] = inst_29691__$1);

return statearr_29749;
})();
if(inst_29691__$1){
var statearr_29750_29782 = state_29725__$1;
(statearr_29750_29782[(1)] = (14));

} else {
var statearr_29751_29783 = state_29725__$1;
(statearr_29751_29783[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (9))){
var inst_29713 = (state_29725[(2)]);
var inst_29714 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29725__$1 = (function (){var statearr_29752 = state_29725;
(statearr_29752[(15)] = inst_29713);

return statearr_29752;
})();
if(cljs.core.truth_(inst_29714)){
var statearr_29753_29784 = state_29725__$1;
(statearr_29753_29784[(1)] = (21));

} else {
var statearr_29754_29785 = state_29725__$1;
(statearr_29754_29785[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (5))){
var inst_29669 = cljs.core.async.close_BANG_.call(null,out);
var state_29725__$1 = state_29725;
var statearr_29755_29786 = state_29725__$1;
(statearr_29755_29786[(2)] = inst_29669);

(statearr_29755_29786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (14))){
var inst_29691 = (state_29725[(7)]);
var inst_29693 = cljs.core.chunked_seq_QMARK_.call(null,inst_29691);
var state_29725__$1 = state_29725;
if(inst_29693){
var statearr_29756_29787 = state_29725__$1;
(statearr_29756_29787[(1)] = (17));

} else {
var statearr_29757_29788 = state_29725__$1;
(statearr_29757_29788[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (16))){
var inst_29709 = (state_29725[(2)]);
var state_29725__$1 = state_29725;
var statearr_29758_29789 = state_29725__$1;
(statearr_29758_29789[(2)] = inst_29709);

(statearr_29758_29789[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (10))){
var inst_29680 = (state_29725[(8)]);
var inst_29678 = (state_29725[(12)]);
var inst_29685 = cljs.core._nth.call(null,inst_29678,inst_29680);
var state_29725__$1 = state_29725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29725__$1,(13),out,inst_29685);
} else {
if((state_val_29726 === (18))){
var inst_29691 = (state_29725[(7)]);
var inst_29700 = cljs.core.first.call(null,inst_29691);
var state_29725__$1 = state_29725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29725__$1,(20),out,inst_29700);
} else {
if((state_val_29726 === (8))){
var inst_29680 = (state_29725[(8)]);
var inst_29679 = (state_29725[(9)]);
var inst_29682 = (inst_29680 < inst_29679);
var inst_29683 = inst_29682;
var state_29725__$1 = state_29725;
if(cljs.core.truth_(inst_29683)){
var statearr_29759_29790 = state_29725__$1;
(statearr_29759_29790[(1)] = (10));

} else {
var statearr_29760_29791 = state_29725__$1;
(statearr_29760_29791[(1)] = (11));

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
});})(c__16133__auto__))
;
return ((function (switch__16077__auto__,c__16133__auto__){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_29764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29764[(0)] = state_machine__16078__auto__);

(statearr_29764[(1)] = (1));

return statearr_29764;
});
var state_machine__16078__auto____1 = (function (state_29725){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_29725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e29765){if((e29765 instanceof Object)){
var ex__16081__auto__ = e29765;
var statearr_29766_29792 = state_29725;
(statearr_29766_29792[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29793 = state_29725;
state_29725 = G__29793;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_29725){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_29725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto__))
})();
var state__16135__auto__ = (function (){var statearr_29767 = f__16134__auto__.call(null);
(statearr_29767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto__);

return statearr_29767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto__))
);

return c__16133__auto__;
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
var c__16133__auto___29890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto___29890,out){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto___29890,out){
return (function (state_29865){
var state_val_29866 = (state_29865[(1)]);
if((state_val_29866 === (7))){
var inst_29860 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
var statearr_29867_29891 = state_29865__$1;
(statearr_29867_29891[(2)] = inst_29860);

(statearr_29867_29891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (1))){
var inst_29842 = null;
var state_29865__$1 = (function (){var statearr_29868 = state_29865;
(statearr_29868[(7)] = inst_29842);

return statearr_29868;
})();
var statearr_29869_29892 = state_29865__$1;
(statearr_29869_29892[(2)] = null);

(statearr_29869_29892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (4))){
var inst_29845 = (state_29865[(8)]);
var inst_29845__$1 = (state_29865[(2)]);
var inst_29846 = (inst_29845__$1 == null);
var inst_29847 = cljs.core.not.call(null,inst_29846);
var state_29865__$1 = (function (){var statearr_29870 = state_29865;
(statearr_29870[(8)] = inst_29845__$1);

return statearr_29870;
})();
if(inst_29847){
var statearr_29871_29893 = state_29865__$1;
(statearr_29871_29893[(1)] = (5));

} else {
var statearr_29872_29894 = state_29865__$1;
(statearr_29872_29894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (6))){
var state_29865__$1 = state_29865;
var statearr_29873_29895 = state_29865__$1;
(statearr_29873_29895[(2)] = null);

(statearr_29873_29895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (3))){
var inst_29862 = (state_29865[(2)]);
var inst_29863 = cljs.core.async.close_BANG_.call(null,out);
var state_29865__$1 = (function (){var statearr_29874 = state_29865;
(statearr_29874[(9)] = inst_29862);

return statearr_29874;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29865__$1,inst_29863);
} else {
if((state_val_29866 === (2))){
var state_29865__$1 = state_29865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29865__$1,(4),ch);
} else {
if((state_val_29866 === (11))){
var inst_29845 = (state_29865[(8)]);
var inst_29854 = (state_29865[(2)]);
var inst_29842 = inst_29845;
var state_29865__$1 = (function (){var statearr_29875 = state_29865;
(statearr_29875[(10)] = inst_29854);

(statearr_29875[(7)] = inst_29842);

return statearr_29875;
})();
var statearr_29876_29896 = state_29865__$1;
(statearr_29876_29896[(2)] = null);

(statearr_29876_29896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (9))){
var inst_29845 = (state_29865[(8)]);
var state_29865__$1 = state_29865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29865__$1,(11),out,inst_29845);
} else {
if((state_val_29866 === (5))){
var inst_29842 = (state_29865[(7)]);
var inst_29845 = (state_29865[(8)]);
var inst_29849 = cljs.core._EQ_.call(null,inst_29845,inst_29842);
var state_29865__$1 = state_29865;
if(inst_29849){
var statearr_29878_29897 = state_29865__$1;
(statearr_29878_29897[(1)] = (8));

} else {
var statearr_29879_29898 = state_29865__$1;
(statearr_29879_29898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (10))){
var inst_29857 = (state_29865[(2)]);
var state_29865__$1 = state_29865;
var statearr_29880_29899 = state_29865__$1;
(statearr_29880_29899[(2)] = inst_29857);

(statearr_29880_29899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29866 === (8))){
var inst_29842 = (state_29865[(7)]);
var tmp29877 = inst_29842;
var inst_29842__$1 = tmp29877;
var state_29865__$1 = (function (){var statearr_29881 = state_29865;
(statearr_29881[(7)] = inst_29842__$1);

return statearr_29881;
})();
var statearr_29882_29900 = state_29865__$1;
(statearr_29882_29900[(2)] = null);

(statearr_29882_29900[(1)] = (2));


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
});})(c__16133__auto___29890,out))
;
return ((function (switch__16077__auto__,c__16133__auto___29890,out){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_29886 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29886[(0)] = state_machine__16078__auto__);

(statearr_29886[(1)] = (1));

return statearr_29886;
});
var state_machine__16078__auto____1 = (function (state_29865){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_29865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e29887){if((e29887 instanceof Object)){
var ex__16081__auto__ = e29887;
var statearr_29888_29901 = state_29865;
(statearr_29888_29901[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29902 = state_29865;
state_29865 = G__29902;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_29865){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_29865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto___29890,out))
})();
var state__16135__auto__ = (function (){var statearr_29889 = f__16134__auto__.call(null);
(statearr_29889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___29890);

return statearr_29889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto___29890,out))
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
var c__16133__auto___30037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto___30037,out){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto___30037,out){
return (function (state_30007){
var state_val_30008 = (state_30007[(1)]);
if((state_val_30008 === (7))){
var inst_30003 = (state_30007[(2)]);
var state_30007__$1 = state_30007;
var statearr_30009_30038 = state_30007__$1;
(statearr_30009_30038[(2)] = inst_30003);

(statearr_30009_30038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30008 === (1))){
var inst_29970 = (new Array(n));
var inst_29971 = inst_29970;
var inst_29972 = (0);
var state_30007__$1 = (function (){var statearr_30010 = state_30007;
(statearr_30010[(7)] = inst_29971);

(statearr_30010[(8)] = inst_29972);

return statearr_30010;
})();
var statearr_30011_30039 = state_30007__$1;
(statearr_30011_30039[(2)] = null);

(statearr_30011_30039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30008 === (4))){
var inst_29975 = (state_30007[(9)]);
var inst_29975__$1 = (state_30007[(2)]);
var inst_29976 = (inst_29975__$1 == null);
var inst_29977 = cljs.core.not.call(null,inst_29976);
var state_30007__$1 = (function (){var statearr_30012 = state_30007;
(statearr_30012[(9)] = inst_29975__$1);

return statearr_30012;
})();
if(inst_29977){
var statearr_30013_30040 = state_30007__$1;
(statearr_30013_30040[(1)] = (5));

} else {
var statearr_30014_30041 = state_30007__$1;
(statearr_30014_30041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30008 === (15))){
var inst_29997 = (state_30007[(2)]);
var state_30007__$1 = state_30007;
var statearr_30015_30042 = state_30007__$1;
(statearr_30015_30042[(2)] = inst_29997);

(statearr_30015_30042[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30008 === (13))){
var state_30007__$1 = state_30007;
var statearr_30016_30043 = state_30007__$1;
(statearr_30016_30043[(2)] = null);

(statearr_30016_30043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30008 === (6))){
var inst_29972 = (state_30007[(8)]);
var inst_29993 = (inst_29972 > (0));
var state_30007__$1 = state_30007;
if(cljs.core.truth_(inst_29993)){
var statearr_30017_30044 = state_30007__$1;
(statearr_30017_30044[(1)] = (12));

} else {
var statearr_30018_30045 = state_30007__$1;
(statearr_30018_30045[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30008 === (3))){
var inst_30005 = (state_30007[(2)]);
var state_30007__$1 = state_30007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30007__$1,inst_30005);
} else {
if((state_val_30008 === (12))){
var inst_29971 = (state_30007[(7)]);
var inst_29995 = cljs.core.vec.call(null,inst_29971);
var state_30007__$1 = state_30007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30007__$1,(15),out,inst_29995);
} else {
if((state_val_30008 === (2))){
var state_30007__$1 = state_30007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30007__$1,(4),ch);
} else {
if((state_val_30008 === (11))){
var inst_29987 = (state_30007[(2)]);
var inst_29988 = (new Array(n));
var inst_29971 = inst_29988;
var inst_29972 = (0);
var state_30007__$1 = (function (){var statearr_30019 = state_30007;
(statearr_30019[(7)] = inst_29971);

(statearr_30019[(10)] = inst_29987);

(statearr_30019[(8)] = inst_29972);

return statearr_30019;
})();
var statearr_30020_30046 = state_30007__$1;
(statearr_30020_30046[(2)] = null);

(statearr_30020_30046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30008 === (9))){
var inst_29971 = (state_30007[(7)]);
var inst_29985 = cljs.core.vec.call(null,inst_29971);
var state_30007__$1 = state_30007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30007__$1,(11),out,inst_29985);
} else {
if((state_val_30008 === (5))){
var inst_29980 = (state_30007[(11)]);
var inst_29971 = (state_30007[(7)]);
var inst_29975 = (state_30007[(9)]);
var inst_29972 = (state_30007[(8)]);
var inst_29979 = (inst_29971[inst_29972] = inst_29975);
var inst_29980__$1 = (inst_29972 + (1));
var inst_29981 = (inst_29980__$1 < n);
var state_30007__$1 = (function (){var statearr_30021 = state_30007;
(statearr_30021[(11)] = inst_29980__$1);

(statearr_30021[(12)] = inst_29979);

return statearr_30021;
})();
if(cljs.core.truth_(inst_29981)){
var statearr_30022_30047 = state_30007__$1;
(statearr_30022_30047[(1)] = (8));

} else {
var statearr_30023_30048 = state_30007__$1;
(statearr_30023_30048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30008 === (14))){
var inst_30000 = (state_30007[(2)]);
var inst_30001 = cljs.core.async.close_BANG_.call(null,out);
var state_30007__$1 = (function (){var statearr_30025 = state_30007;
(statearr_30025[(13)] = inst_30000);

return statearr_30025;
})();
var statearr_30026_30049 = state_30007__$1;
(statearr_30026_30049[(2)] = inst_30001);

(statearr_30026_30049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30008 === (10))){
var inst_29991 = (state_30007[(2)]);
var state_30007__$1 = state_30007;
var statearr_30027_30050 = state_30007__$1;
(statearr_30027_30050[(2)] = inst_29991);

(statearr_30027_30050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30008 === (8))){
var inst_29980 = (state_30007[(11)]);
var inst_29971 = (state_30007[(7)]);
var tmp30024 = inst_29971;
var inst_29971__$1 = tmp30024;
var inst_29972 = inst_29980;
var state_30007__$1 = (function (){var statearr_30028 = state_30007;
(statearr_30028[(7)] = inst_29971__$1);

(statearr_30028[(8)] = inst_29972);

return statearr_30028;
})();
var statearr_30029_30051 = state_30007__$1;
(statearr_30029_30051[(2)] = null);

(statearr_30029_30051[(1)] = (2));


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
});})(c__16133__auto___30037,out))
;
return ((function (switch__16077__auto__,c__16133__auto___30037,out){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_30033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30033[(0)] = state_machine__16078__auto__);

(statearr_30033[(1)] = (1));

return statearr_30033;
});
var state_machine__16078__auto____1 = (function (state_30007){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_30007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e30034){if((e30034 instanceof Object)){
var ex__16081__auto__ = e30034;
var statearr_30035_30052 = state_30007;
(statearr_30035_30052[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30053 = state_30007;
state_30007 = G__30053;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_30007){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_30007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto___30037,out))
})();
var state__16135__auto__ = (function (){var statearr_30036 = f__16134__auto__.call(null);
(statearr_30036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___30037);

return statearr_30036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto___30037,out))
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
var c__16133__auto___30196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16133__auto___30196,out){
return (function (){
var f__16134__auto__ = (function (){var switch__16077__auto__ = ((function (c__16133__auto___30196,out){
return (function (state_30166){
var state_val_30167 = (state_30166[(1)]);
if((state_val_30167 === (7))){
var inst_30162 = (state_30166[(2)]);
var state_30166__$1 = state_30166;
var statearr_30168_30197 = state_30166__$1;
(statearr_30168_30197[(2)] = inst_30162);

(statearr_30168_30197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (1))){
var inst_30125 = [];
var inst_30126 = inst_30125;
var inst_30127 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30166__$1 = (function (){var statearr_30169 = state_30166;
(statearr_30169[(7)] = inst_30126);

(statearr_30169[(8)] = inst_30127);

return statearr_30169;
})();
var statearr_30170_30198 = state_30166__$1;
(statearr_30170_30198[(2)] = null);

(statearr_30170_30198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (4))){
var inst_30130 = (state_30166[(9)]);
var inst_30130__$1 = (state_30166[(2)]);
var inst_30131 = (inst_30130__$1 == null);
var inst_30132 = cljs.core.not.call(null,inst_30131);
var state_30166__$1 = (function (){var statearr_30171 = state_30166;
(statearr_30171[(9)] = inst_30130__$1);

return statearr_30171;
})();
if(inst_30132){
var statearr_30172_30199 = state_30166__$1;
(statearr_30172_30199[(1)] = (5));

} else {
var statearr_30173_30200 = state_30166__$1;
(statearr_30173_30200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (15))){
var inst_30156 = (state_30166[(2)]);
var state_30166__$1 = state_30166;
var statearr_30174_30201 = state_30166__$1;
(statearr_30174_30201[(2)] = inst_30156);

(statearr_30174_30201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (13))){
var state_30166__$1 = state_30166;
var statearr_30175_30202 = state_30166__$1;
(statearr_30175_30202[(2)] = null);

(statearr_30175_30202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (6))){
var inst_30126 = (state_30166[(7)]);
var inst_30151 = inst_30126.length;
var inst_30152 = (inst_30151 > (0));
var state_30166__$1 = state_30166;
if(cljs.core.truth_(inst_30152)){
var statearr_30176_30203 = state_30166__$1;
(statearr_30176_30203[(1)] = (12));

} else {
var statearr_30177_30204 = state_30166__$1;
(statearr_30177_30204[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (3))){
var inst_30164 = (state_30166[(2)]);
var state_30166__$1 = state_30166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30166__$1,inst_30164);
} else {
if((state_val_30167 === (12))){
var inst_30126 = (state_30166[(7)]);
var inst_30154 = cljs.core.vec.call(null,inst_30126);
var state_30166__$1 = state_30166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30166__$1,(15),out,inst_30154);
} else {
if((state_val_30167 === (2))){
var state_30166__$1 = state_30166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30166__$1,(4),ch);
} else {
if((state_val_30167 === (11))){
var inst_30130 = (state_30166[(9)]);
var inst_30134 = (state_30166[(10)]);
var inst_30144 = (state_30166[(2)]);
var inst_30145 = [];
var inst_30146 = inst_30145.push(inst_30130);
var inst_30126 = inst_30145;
var inst_30127 = inst_30134;
var state_30166__$1 = (function (){var statearr_30178 = state_30166;
(statearr_30178[(11)] = inst_30146);

(statearr_30178[(12)] = inst_30144);

(statearr_30178[(7)] = inst_30126);

(statearr_30178[(8)] = inst_30127);

return statearr_30178;
})();
var statearr_30179_30205 = state_30166__$1;
(statearr_30179_30205[(2)] = null);

(statearr_30179_30205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (9))){
var inst_30126 = (state_30166[(7)]);
var inst_30142 = cljs.core.vec.call(null,inst_30126);
var state_30166__$1 = state_30166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30166__$1,(11),out,inst_30142);
} else {
if((state_val_30167 === (5))){
var inst_30130 = (state_30166[(9)]);
var inst_30134 = (state_30166[(10)]);
var inst_30127 = (state_30166[(8)]);
var inst_30134__$1 = f.call(null,inst_30130);
var inst_30135 = cljs.core._EQ_.call(null,inst_30134__$1,inst_30127);
var inst_30136 = cljs.core.keyword_identical_QMARK_.call(null,inst_30127,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30137 = (inst_30135) || (inst_30136);
var state_30166__$1 = (function (){var statearr_30180 = state_30166;
(statearr_30180[(10)] = inst_30134__$1);

return statearr_30180;
})();
if(cljs.core.truth_(inst_30137)){
var statearr_30181_30206 = state_30166__$1;
(statearr_30181_30206[(1)] = (8));

} else {
var statearr_30182_30207 = state_30166__$1;
(statearr_30182_30207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (14))){
var inst_30159 = (state_30166[(2)]);
var inst_30160 = cljs.core.async.close_BANG_.call(null,out);
var state_30166__$1 = (function (){var statearr_30184 = state_30166;
(statearr_30184[(13)] = inst_30159);

return statearr_30184;
})();
var statearr_30185_30208 = state_30166__$1;
(statearr_30185_30208[(2)] = inst_30160);

(statearr_30185_30208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (10))){
var inst_30149 = (state_30166[(2)]);
var state_30166__$1 = state_30166;
var statearr_30186_30209 = state_30166__$1;
(statearr_30186_30209[(2)] = inst_30149);

(statearr_30186_30209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (8))){
var inst_30130 = (state_30166[(9)]);
var inst_30126 = (state_30166[(7)]);
var inst_30134 = (state_30166[(10)]);
var inst_30139 = inst_30126.push(inst_30130);
var tmp30183 = inst_30126;
var inst_30126__$1 = tmp30183;
var inst_30127 = inst_30134;
var state_30166__$1 = (function (){var statearr_30187 = state_30166;
(statearr_30187[(7)] = inst_30126__$1);

(statearr_30187[(8)] = inst_30127);

(statearr_30187[(14)] = inst_30139);

return statearr_30187;
})();
var statearr_30188_30210 = state_30166__$1;
(statearr_30188_30210[(2)] = null);

(statearr_30188_30210[(1)] = (2));


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
});})(c__16133__auto___30196,out))
;
return ((function (switch__16077__auto__,c__16133__auto___30196,out){
return (function() {
var state_machine__16078__auto__ = null;
var state_machine__16078__auto____0 = (function (){
var statearr_30192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30192[(0)] = state_machine__16078__auto__);

(statearr_30192[(1)] = (1));

return statearr_30192;
});
var state_machine__16078__auto____1 = (function (state_30166){
while(true){
var ret_value__16079__auto__ = (function (){try{while(true){
var result__16080__auto__ = switch__16077__auto__.call(null,state_30166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16080__auto__;
}
break;
}
}catch (e30193){if((e30193 instanceof Object)){
var ex__16081__auto__ = e30193;
var statearr_30194_30211 = state_30166;
(statearr_30194_30211[(5)] = ex__16081__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30212 = state_30166;
state_30166 = G__30212;
continue;
} else {
return ret_value__16079__auto__;
}
break;
}
});
state_machine__16078__auto__ = function(state_30166){
switch(arguments.length){
case 0:
return state_machine__16078__auto____0.call(this);
case 1:
return state_machine__16078__auto____1.call(this,state_30166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16078__auto____0;
state_machine__16078__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16078__auto____1;
return state_machine__16078__auto__;
})()
;})(switch__16077__auto__,c__16133__auto___30196,out))
})();
var state__16135__auto__ = (function (){var statearr_30195 = f__16134__auto__.call(null);
(statearr_30195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16133__auto___30196);

return statearr_30195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16135__auto__);
});})(c__16133__auto___30196,out))
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