// Compiled by ClojureScript 0.0-2850 {:elide-asserts false}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t26986 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26986 = (function (f,fn_handler,meta26987){
this.f = f;
this.fn_handler = fn_handler;
this.meta26987 = meta26987;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26986.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26986.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26986.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26988){
var self__ = this;
var _26988__$1 = this;
return self__.meta26987;
});

cljs.core.async.t26986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26988,meta26987__$1){
var self__ = this;
var _26988__$1 = this;
return (new cljs.core.async.t26986(self__.f,self__.fn_handler,meta26987__$1));
});

cljs.core.async.t26986.cljs$lang$type = true;

cljs.core.async.t26986.cljs$lang$ctorStr = "cljs.core.async/t26986";

cljs.core.async.t26986.cljs$lang$ctorPrWriter = (function (this__13915__auto__,writer__13916__auto__,opt__13917__auto__){
return cljs.core._write.call(null,writer__13916__auto__,"cljs.core.async/t26986");
});

cljs.core.async.__GT_t26986 = (function __GT_t26986(f__$1,fn_handler__$1,meta26987){
return (new cljs.core.async.t26986(f__$1,fn_handler__$1,meta26987));
});

}

return (new cljs.core.async.t26986(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26990 = buff;
if(G__26990){
var bit__14009__auto__ = null;
if(cljs.core.truth_((function (){var or__13328__auto__ = bit__14009__auto__;
if(cljs.core.truth_(or__13328__auto__)){
return or__13328__auto__;
} else {
return G__26990.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26990.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26990);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26990);
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
var val_26991 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26991);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26991,ret){
return (function (){
return fn1.call(null,val_26991);
});})(val_26991,ret))
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
var n__14215__auto___26992 = n;
var x_26993 = (0);
while(true){
if((x_26993 < n__14215__auto___26992)){
(a[x_26993] = (0));

var G__26994 = (x_26993 + (1));
x_26993 = G__26994;
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

var G__26995 = (i + (1));
i = G__26995;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26999 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26999 = (function (flag,alt_flag,meta27000){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27000 = meta27000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26999.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26999.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26999.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26999.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27001){
var self__ = this;
var _27001__$1 = this;
return self__.meta27000;
});})(flag))
;

cljs.core.async.t26999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27001,meta27000__$1){
var self__ = this;
var _27001__$1 = this;
return (new cljs.core.async.t26999(self__.flag,self__.alt_flag,meta27000__$1));
});})(flag))
;

cljs.core.async.t26999.cljs$lang$type = true;

cljs.core.async.t26999.cljs$lang$ctorStr = "cljs.core.async/t26999";

cljs.core.async.t26999.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13915__auto__,writer__13916__auto__,opt__13917__auto__){
return cljs.core._write.call(null,writer__13916__auto__,"cljs.core.async/t26999");
});})(flag))
;

cljs.core.async.__GT_t26999 = ((function (flag){
return (function __GT_t26999(flag__$1,alt_flag__$1,meta27000){
return (new cljs.core.async.t26999(flag__$1,alt_flag__$1,meta27000));
});})(flag))
;

}

return (new cljs.core.async.t26999(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t27005 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27005 = (function (cb,flag,alt_handler,meta27006){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27006 = meta27006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27005.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27005.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27005.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27007){
var self__ = this;
var _27007__$1 = this;
return self__.meta27006;
});

cljs.core.async.t27005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27007,meta27006__$1){
var self__ = this;
var _27007__$1 = this;
return (new cljs.core.async.t27005(self__.cb,self__.flag,self__.alt_handler,meta27006__$1));
});

cljs.core.async.t27005.cljs$lang$type = true;

cljs.core.async.t27005.cljs$lang$ctorStr = "cljs.core.async/t27005";

cljs.core.async.t27005.cljs$lang$ctorPrWriter = (function (this__13915__auto__,writer__13916__auto__,opt__13917__auto__){
return cljs.core._write.call(null,writer__13916__auto__,"cljs.core.async/t27005");
});

cljs.core.async.__GT_t27005 = (function __GT_t27005(cb__$1,flag__$1,alt_handler__$1,meta27006){
return (new cljs.core.async.t27005(cb__$1,flag__$1,alt_handler__$1,meta27006));
});

}

return (new cljs.core.async.t27005(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27008_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27008_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27009_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27009_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__13328__auto__ = wport;
if(cljs.core.truth_(or__13328__auto__)){
return or__13328__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27010 = (i + (1));
i = G__27010;
continue;
}
} else {
return null;
}
break;
}
})();
var or__13328__auto__ = ret;
if(cljs.core.truth_(or__13328__auto__)){
return or__13328__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__13316__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__13316__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__13316__auto__;
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
var alts_BANG___delegate = function (ports,p__27011){
var map__27013 = p__27011;
var map__27013__$1 = ((cljs.core.seq_QMARK_.call(null,map__27013))?cljs.core.apply.call(null,cljs.core.hash_map,map__27013):map__27013);
var opts = map__27013__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__27011 = null;
if (arguments.length > 1) {
var G__27014__i = 0, G__27014__a = new Array(arguments.length -  1);
while (G__27014__i < G__27014__a.length) {G__27014__a[G__27014__i] = arguments[G__27014__i + 1]; ++G__27014__i;}
  p__27011 = new cljs.core.IndexedSeq(G__27014__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__27011);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__27015){
var ports = cljs.core.first(arglist__27015);
var p__27011 = cljs.core.rest(arglist__27015);
return alts_BANG___delegate(ports,p__27011);
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
var c__15997__auto___27110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto___27110){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto___27110){
return (function (state_27086){
var state_val_27087 = (state_27086[(1)]);
if((state_val_27087 === (7))){
var inst_27082 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
var statearr_27088_27111 = state_27086__$1;
(statearr_27088_27111[(2)] = inst_27082);

(statearr_27088_27111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (1))){
var state_27086__$1 = state_27086;
var statearr_27089_27112 = state_27086__$1;
(statearr_27089_27112[(2)] = null);

(statearr_27089_27112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (4))){
var inst_27065 = (state_27086[(7)]);
var inst_27065__$1 = (state_27086[(2)]);
var inst_27066 = (inst_27065__$1 == null);
var state_27086__$1 = (function (){var statearr_27090 = state_27086;
(statearr_27090[(7)] = inst_27065__$1);

return statearr_27090;
})();
if(cljs.core.truth_(inst_27066)){
var statearr_27091_27113 = state_27086__$1;
(statearr_27091_27113[(1)] = (5));

} else {
var statearr_27092_27114 = state_27086__$1;
(statearr_27092_27114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (13))){
var state_27086__$1 = state_27086;
var statearr_27093_27115 = state_27086__$1;
(statearr_27093_27115[(2)] = null);

(statearr_27093_27115[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (6))){
var inst_27065 = (state_27086[(7)]);
var state_27086__$1 = state_27086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27086__$1,(11),to,inst_27065);
} else {
if((state_val_27087 === (3))){
var inst_27084 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27086__$1,inst_27084);
} else {
if((state_val_27087 === (12))){
var state_27086__$1 = state_27086;
var statearr_27094_27116 = state_27086__$1;
(statearr_27094_27116[(2)] = null);

(statearr_27094_27116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (2))){
var state_27086__$1 = state_27086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27086__$1,(4),from);
} else {
if((state_val_27087 === (11))){
var inst_27075 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
if(cljs.core.truth_(inst_27075)){
var statearr_27095_27117 = state_27086__$1;
(statearr_27095_27117[(1)] = (12));

} else {
var statearr_27096_27118 = state_27086__$1;
(statearr_27096_27118[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (9))){
var state_27086__$1 = state_27086;
var statearr_27097_27119 = state_27086__$1;
(statearr_27097_27119[(2)] = null);

(statearr_27097_27119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (5))){
var state_27086__$1 = state_27086;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27098_27120 = state_27086__$1;
(statearr_27098_27120[(1)] = (8));

} else {
var statearr_27099_27121 = state_27086__$1;
(statearr_27099_27121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (14))){
var inst_27080 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
var statearr_27100_27122 = state_27086__$1;
(statearr_27100_27122[(2)] = inst_27080);

(statearr_27100_27122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (10))){
var inst_27072 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
var statearr_27101_27123 = state_27086__$1;
(statearr_27101_27123[(2)] = inst_27072);

(statearr_27101_27123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27087 === (8))){
var inst_27069 = cljs.core.async.close_BANG_.call(null,to);
var state_27086__$1 = state_27086;
var statearr_27102_27124 = state_27086__$1;
(statearr_27102_27124[(2)] = inst_27069);

(statearr_27102_27124[(1)] = (10));


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
});})(c__15997__auto___27110))
;
return ((function (switch__15941__auto__,c__15997__auto___27110){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_27106 = [null,null,null,null,null,null,null,null];
(statearr_27106[(0)] = state_machine__15942__auto__);

(statearr_27106[(1)] = (1));

return statearr_27106;
});
var state_machine__15942__auto____1 = (function (state_27086){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_27086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e27107){if((e27107 instanceof Object)){
var ex__15945__auto__ = e27107;
var statearr_27108_27125 = state_27086;
(statearr_27108_27125[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27126 = state_27086;
state_27086 = G__27126;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_27086){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_27086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto___27110))
})();
var state__15999__auto__ = (function (){var statearr_27109 = f__15998__auto__.call(null);
(statearr_27109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___27110);

return statearr_27109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto___27110))
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
return (function (p__27310){
var vec__27311 = p__27310;
var v = cljs.core.nth.call(null,vec__27311,(0),null);
var p = cljs.core.nth.call(null,vec__27311,(1),null);
var job = vec__27311;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15997__auto___27493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto___27493,res,vec__27311,v,p,job,jobs,results){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto___27493,res,vec__27311,v,p,job,jobs,results){
return (function (state_27316){
var state_val_27317 = (state_27316[(1)]);
if((state_val_27317 === (2))){
var inst_27313 = (state_27316[(2)]);
var inst_27314 = cljs.core.async.close_BANG_.call(null,res);
var state_27316__$1 = (function (){var statearr_27318 = state_27316;
(statearr_27318[(7)] = inst_27313);

return statearr_27318;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27316__$1,inst_27314);
} else {
if((state_val_27317 === (1))){
var state_27316__$1 = state_27316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27316__$1,(2),res,v);
} else {
return null;
}
}
});})(c__15997__auto___27493,res,vec__27311,v,p,job,jobs,results))
;
return ((function (switch__15941__auto__,c__15997__auto___27493,res,vec__27311,v,p,job,jobs,results){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_27322 = [null,null,null,null,null,null,null,null];
(statearr_27322[(0)] = state_machine__15942__auto__);

(statearr_27322[(1)] = (1));

return statearr_27322;
});
var state_machine__15942__auto____1 = (function (state_27316){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_27316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e27323){if((e27323 instanceof Object)){
var ex__15945__auto__ = e27323;
var statearr_27324_27494 = state_27316;
(statearr_27324_27494[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27495 = state_27316;
state_27316 = G__27495;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_27316){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_27316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto___27493,res,vec__27311,v,p,job,jobs,results))
})();
var state__15999__auto__ = (function (){var statearr_27325 = f__15998__auto__.call(null);
(statearr_27325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___27493);

return statearr_27325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto___27493,res,vec__27311,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27326){
var vec__27327 = p__27326;
var v = cljs.core.nth.call(null,vec__27327,(0),null);
var p = cljs.core.nth.call(null,vec__27327,(1),null);
var job = vec__27327;
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
var n__14215__auto___27496 = n;
var __27497 = (0);
while(true){
if((__27497 < n__14215__auto___27496)){
var G__27328_27498 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27328_27498) {
case "async":
var c__15997__auto___27500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27497,c__15997__auto___27500,G__27328_27498,n__14215__auto___27496,jobs,results,process,async){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (__27497,c__15997__auto___27500,G__27328_27498,n__14215__auto___27496,jobs,results,process,async){
return (function (state_27341){
var state_val_27342 = (state_27341[(1)]);
if((state_val_27342 === (7))){
var inst_27337 = (state_27341[(2)]);
var state_27341__$1 = state_27341;
var statearr_27343_27501 = state_27341__$1;
(statearr_27343_27501[(2)] = inst_27337);

(statearr_27343_27501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27342 === (6))){
var state_27341__$1 = state_27341;
var statearr_27344_27502 = state_27341__$1;
(statearr_27344_27502[(2)] = null);

(statearr_27344_27502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27342 === (5))){
var state_27341__$1 = state_27341;
var statearr_27345_27503 = state_27341__$1;
(statearr_27345_27503[(2)] = null);

(statearr_27345_27503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27342 === (4))){
var inst_27331 = (state_27341[(2)]);
var inst_27332 = async.call(null,inst_27331);
var state_27341__$1 = state_27341;
if(cljs.core.truth_(inst_27332)){
var statearr_27346_27504 = state_27341__$1;
(statearr_27346_27504[(1)] = (5));

} else {
var statearr_27347_27505 = state_27341__$1;
(statearr_27347_27505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27342 === (3))){
var inst_27339 = (state_27341[(2)]);
var state_27341__$1 = state_27341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27341__$1,inst_27339);
} else {
if((state_val_27342 === (2))){
var state_27341__$1 = state_27341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27341__$1,(4),jobs);
} else {
if((state_val_27342 === (1))){
var state_27341__$1 = state_27341;
var statearr_27348_27506 = state_27341__$1;
(statearr_27348_27506[(2)] = null);

(statearr_27348_27506[(1)] = (2));


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
});})(__27497,c__15997__auto___27500,G__27328_27498,n__14215__auto___27496,jobs,results,process,async))
;
return ((function (__27497,switch__15941__auto__,c__15997__auto___27500,G__27328_27498,n__14215__auto___27496,jobs,results,process,async){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_27352 = [null,null,null,null,null,null,null];
(statearr_27352[(0)] = state_machine__15942__auto__);

(statearr_27352[(1)] = (1));

return statearr_27352;
});
var state_machine__15942__auto____1 = (function (state_27341){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_27341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e27353){if((e27353 instanceof Object)){
var ex__15945__auto__ = e27353;
var statearr_27354_27507 = state_27341;
(statearr_27354_27507[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27508 = state_27341;
state_27341 = G__27508;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_27341){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_27341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(__27497,switch__15941__auto__,c__15997__auto___27500,G__27328_27498,n__14215__auto___27496,jobs,results,process,async))
})();
var state__15999__auto__ = (function (){var statearr_27355 = f__15998__auto__.call(null);
(statearr_27355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___27500);

return statearr_27355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(__27497,c__15997__auto___27500,G__27328_27498,n__14215__auto___27496,jobs,results,process,async))
);


break;
case "compute":
var c__15997__auto___27509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27497,c__15997__auto___27509,G__27328_27498,n__14215__auto___27496,jobs,results,process,async){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (__27497,c__15997__auto___27509,G__27328_27498,n__14215__auto___27496,jobs,results,process,async){
return (function (state_27368){
var state_val_27369 = (state_27368[(1)]);
if((state_val_27369 === (7))){
var inst_27364 = (state_27368[(2)]);
var state_27368__$1 = state_27368;
var statearr_27370_27510 = state_27368__$1;
(statearr_27370_27510[(2)] = inst_27364);

(statearr_27370_27510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (6))){
var state_27368__$1 = state_27368;
var statearr_27371_27511 = state_27368__$1;
(statearr_27371_27511[(2)] = null);

(statearr_27371_27511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (5))){
var state_27368__$1 = state_27368;
var statearr_27372_27512 = state_27368__$1;
(statearr_27372_27512[(2)] = null);

(statearr_27372_27512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (4))){
var inst_27358 = (state_27368[(2)]);
var inst_27359 = process.call(null,inst_27358);
var state_27368__$1 = state_27368;
if(cljs.core.truth_(inst_27359)){
var statearr_27373_27513 = state_27368__$1;
(statearr_27373_27513[(1)] = (5));

} else {
var statearr_27374_27514 = state_27368__$1;
(statearr_27374_27514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (3))){
var inst_27366 = (state_27368[(2)]);
var state_27368__$1 = state_27368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27368__$1,inst_27366);
} else {
if((state_val_27369 === (2))){
var state_27368__$1 = state_27368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27368__$1,(4),jobs);
} else {
if((state_val_27369 === (1))){
var state_27368__$1 = state_27368;
var statearr_27375_27515 = state_27368__$1;
(statearr_27375_27515[(2)] = null);

(statearr_27375_27515[(1)] = (2));


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
});})(__27497,c__15997__auto___27509,G__27328_27498,n__14215__auto___27496,jobs,results,process,async))
;
return ((function (__27497,switch__15941__auto__,c__15997__auto___27509,G__27328_27498,n__14215__auto___27496,jobs,results,process,async){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_27379 = [null,null,null,null,null,null,null];
(statearr_27379[(0)] = state_machine__15942__auto__);

(statearr_27379[(1)] = (1));

return statearr_27379;
});
var state_machine__15942__auto____1 = (function (state_27368){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_27368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e27380){if((e27380 instanceof Object)){
var ex__15945__auto__ = e27380;
var statearr_27381_27516 = state_27368;
(statearr_27381_27516[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27517 = state_27368;
state_27368 = G__27517;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_27368){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_27368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(__27497,switch__15941__auto__,c__15997__auto___27509,G__27328_27498,n__14215__auto___27496,jobs,results,process,async))
})();
var state__15999__auto__ = (function (){var statearr_27382 = f__15998__auto__.call(null);
(statearr_27382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___27509);

return statearr_27382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(__27497,c__15997__auto___27509,G__27328_27498,n__14215__auto___27496,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27518 = (__27497 + (1));
__27497 = G__27518;
continue;
} else {
}
break;
}

var c__15997__auto___27519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto___27519,jobs,results,process,async){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto___27519,jobs,results,process,async){
return (function (state_27404){
var state_val_27405 = (state_27404[(1)]);
if((state_val_27405 === (9))){
var inst_27397 = (state_27404[(2)]);
var state_27404__$1 = (function (){var statearr_27406 = state_27404;
(statearr_27406[(7)] = inst_27397);

return statearr_27406;
})();
var statearr_27407_27520 = state_27404__$1;
(statearr_27407_27520[(2)] = null);

(statearr_27407_27520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27405 === (8))){
var inst_27390 = (state_27404[(8)]);
var inst_27395 = (state_27404[(2)]);
var state_27404__$1 = (function (){var statearr_27408 = state_27404;
(statearr_27408[(9)] = inst_27395);

return statearr_27408;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27404__$1,(9),results,inst_27390);
} else {
if((state_val_27405 === (7))){
var inst_27400 = (state_27404[(2)]);
var state_27404__$1 = state_27404;
var statearr_27409_27521 = state_27404__$1;
(statearr_27409_27521[(2)] = inst_27400);

(statearr_27409_27521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27405 === (6))){
var inst_27390 = (state_27404[(8)]);
var inst_27385 = (state_27404[(10)]);
var inst_27390__$1 = cljs.core.async.chan.call(null,(1));
var inst_27391 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27392 = [inst_27385,inst_27390__$1];
var inst_27393 = (new cljs.core.PersistentVector(null,2,(5),inst_27391,inst_27392,null));
var state_27404__$1 = (function (){var statearr_27410 = state_27404;
(statearr_27410[(8)] = inst_27390__$1);

return statearr_27410;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27404__$1,(8),jobs,inst_27393);
} else {
if((state_val_27405 === (5))){
var inst_27388 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27404__$1 = state_27404;
var statearr_27411_27522 = state_27404__$1;
(statearr_27411_27522[(2)] = inst_27388);

(statearr_27411_27522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27405 === (4))){
var inst_27385 = (state_27404[(10)]);
var inst_27385__$1 = (state_27404[(2)]);
var inst_27386 = (inst_27385__$1 == null);
var state_27404__$1 = (function (){var statearr_27412 = state_27404;
(statearr_27412[(10)] = inst_27385__$1);

return statearr_27412;
})();
if(cljs.core.truth_(inst_27386)){
var statearr_27413_27523 = state_27404__$1;
(statearr_27413_27523[(1)] = (5));

} else {
var statearr_27414_27524 = state_27404__$1;
(statearr_27414_27524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27405 === (3))){
var inst_27402 = (state_27404[(2)]);
var state_27404__$1 = state_27404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27404__$1,inst_27402);
} else {
if((state_val_27405 === (2))){
var state_27404__$1 = state_27404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27404__$1,(4),from);
} else {
if((state_val_27405 === (1))){
var state_27404__$1 = state_27404;
var statearr_27415_27525 = state_27404__$1;
(statearr_27415_27525[(2)] = null);

(statearr_27415_27525[(1)] = (2));


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
});})(c__15997__auto___27519,jobs,results,process,async))
;
return ((function (switch__15941__auto__,c__15997__auto___27519,jobs,results,process,async){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_27419 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27419[(0)] = state_machine__15942__auto__);

(statearr_27419[(1)] = (1));

return statearr_27419;
});
var state_machine__15942__auto____1 = (function (state_27404){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_27404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e27420){if((e27420 instanceof Object)){
var ex__15945__auto__ = e27420;
var statearr_27421_27526 = state_27404;
(statearr_27421_27526[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27527 = state_27404;
state_27404 = G__27527;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_27404){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_27404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto___27519,jobs,results,process,async))
})();
var state__15999__auto__ = (function (){var statearr_27422 = f__15998__auto__.call(null);
(statearr_27422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___27519);

return statearr_27422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto___27519,jobs,results,process,async))
);


var c__15997__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto__,jobs,results,process,async){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto__,jobs,results,process,async){
return (function (state_27460){
var state_val_27461 = (state_27460[(1)]);
if((state_val_27461 === (7))){
var inst_27456 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
var statearr_27462_27528 = state_27460__$1;
(statearr_27462_27528[(2)] = inst_27456);

(statearr_27462_27528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (20))){
var state_27460__$1 = state_27460;
var statearr_27463_27529 = state_27460__$1;
(statearr_27463_27529[(2)] = null);

(statearr_27463_27529[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (1))){
var state_27460__$1 = state_27460;
var statearr_27464_27530 = state_27460__$1;
(statearr_27464_27530[(2)] = null);

(statearr_27464_27530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (4))){
var inst_27425 = (state_27460[(7)]);
var inst_27425__$1 = (state_27460[(2)]);
var inst_27426 = (inst_27425__$1 == null);
var state_27460__$1 = (function (){var statearr_27465 = state_27460;
(statearr_27465[(7)] = inst_27425__$1);

return statearr_27465;
})();
if(cljs.core.truth_(inst_27426)){
var statearr_27466_27531 = state_27460__$1;
(statearr_27466_27531[(1)] = (5));

} else {
var statearr_27467_27532 = state_27460__$1;
(statearr_27467_27532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (15))){
var inst_27438 = (state_27460[(8)]);
var state_27460__$1 = state_27460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27460__$1,(18),to,inst_27438);
} else {
if((state_val_27461 === (21))){
var inst_27451 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
var statearr_27468_27533 = state_27460__$1;
(statearr_27468_27533[(2)] = inst_27451);

(statearr_27468_27533[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (13))){
var inst_27453 = (state_27460[(2)]);
var state_27460__$1 = (function (){var statearr_27469 = state_27460;
(statearr_27469[(9)] = inst_27453);

return statearr_27469;
})();
var statearr_27470_27534 = state_27460__$1;
(statearr_27470_27534[(2)] = null);

(statearr_27470_27534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (6))){
var inst_27425 = (state_27460[(7)]);
var state_27460__$1 = state_27460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27460__$1,(11),inst_27425);
} else {
if((state_val_27461 === (17))){
var inst_27446 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
if(cljs.core.truth_(inst_27446)){
var statearr_27471_27535 = state_27460__$1;
(statearr_27471_27535[(1)] = (19));

} else {
var statearr_27472_27536 = state_27460__$1;
(statearr_27472_27536[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (3))){
var inst_27458 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27460__$1,inst_27458);
} else {
if((state_val_27461 === (12))){
var inst_27435 = (state_27460[(10)]);
var state_27460__$1 = state_27460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27460__$1,(14),inst_27435);
} else {
if((state_val_27461 === (2))){
var state_27460__$1 = state_27460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27460__$1,(4),results);
} else {
if((state_val_27461 === (19))){
var state_27460__$1 = state_27460;
var statearr_27473_27537 = state_27460__$1;
(statearr_27473_27537[(2)] = null);

(statearr_27473_27537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (11))){
var inst_27435 = (state_27460[(2)]);
var state_27460__$1 = (function (){var statearr_27474 = state_27460;
(statearr_27474[(10)] = inst_27435);

return statearr_27474;
})();
var statearr_27475_27538 = state_27460__$1;
(statearr_27475_27538[(2)] = null);

(statearr_27475_27538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (9))){
var state_27460__$1 = state_27460;
var statearr_27476_27539 = state_27460__$1;
(statearr_27476_27539[(2)] = null);

(statearr_27476_27539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (5))){
var state_27460__$1 = state_27460;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27477_27540 = state_27460__$1;
(statearr_27477_27540[(1)] = (8));

} else {
var statearr_27478_27541 = state_27460__$1;
(statearr_27478_27541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (14))){
var inst_27440 = (state_27460[(11)]);
var inst_27438 = (state_27460[(8)]);
var inst_27438__$1 = (state_27460[(2)]);
var inst_27439 = (inst_27438__$1 == null);
var inst_27440__$1 = cljs.core.not.call(null,inst_27439);
var state_27460__$1 = (function (){var statearr_27479 = state_27460;
(statearr_27479[(11)] = inst_27440__$1);

(statearr_27479[(8)] = inst_27438__$1);

return statearr_27479;
})();
if(inst_27440__$1){
var statearr_27480_27542 = state_27460__$1;
(statearr_27480_27542[(1)] = (15));

} else {
var statearr_27481_27543 = state_27460__$1;
(statearr_27481_27543[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (16))){
var inst_27440 = (state_27460[(11)]);
var state_27460__$1 = state_27460;
var statearr_27482_27544 = state_27460__$1;
(statearr_27482_27544[(2)] = inst_27440);

(statearr_27482_27544[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (10))){
var inst_27432 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
var statearr_27483_27545 = state_27460__$1;
(statearr_27483_27545[(2)] = inst_27432);

(statearr_27483_27545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (18))){
var inst_27443 = (state_27460[(2)]);
var state_27460__$1 = state_27460;
var statearr_27484_27546 = state_27460__$1;
(statearr_27484_27546[(2)] = inst_27443);

(statearr_27484_27546[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27461 === (8))){
var inst_27429 = cljs.core.async.close_BANG_.call(null,to);
var state_27460__$1 = state_27460;
var statearr_27485_27547 = state_27460__$1;
(statearr_27485_27547[(2)] = inst_27429);

(statearr_27485_27547[(1)] = (10));


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
});})(c__15997__auto__,jobs,results,process,async))
;
return ((function (switch__15941__auto__,c__15997__auto__,jobs,results,process,async){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_27489 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27489[(0)] = state_machine__15942__auto__);

(statearr_27489[(1)] = (1));

return statearr_27489;
});
var state_machine__15942__auto____1 = (function (state_27460){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_27460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e27490){if((e27490 instanceof Object)){
var ex__15945__auto__ = e27490;
var statearr_27491_27548 = state_27460;
(statearr_27491_27548[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27549 = state_27460;
state_27460 = G__27549;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_27460){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_27460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto__,jobs,results,process,async))
})();
var state__15999__auto__ = (function (){var statearr_27492 = f__15998__auto__.call(null);
(statearr_27492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto__);

return statearr_27492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto__,jobs,results,process,async))
);

return c__15997__auto__;
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
var c__15997__auto___27650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto___27650,tc,fc){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto___27650,tc,fc){
return (function (state_27625){
var state_val_27626 = (state_27625[(1)]);
if((state_val_27626 === (7))){
var inst_27621 = (state_27625[(2)]);
var state_27625__$1 = state_27625;
var statearr_27627_27651 = state_27625__$1;
(statearr_27627_27651[(2)] = inst_27621);

(statearr_27627_27651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27626 === (1))){
var state_27625__$1 = state_27625;
var statearr_27628_27652 = state_27625__$1;
(statearr_27628_27652[(2)] = null);

(statearr_27628_27652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27626 === (4))){
var inst_27602 = (state_27625[(7)]);
var inst_27602__$1 = (state_27625[(2)]);
var inst_27603 = (inst_27602__$1 == null);
var state_27625__$1 = (function (){var statearr_27629 = state_27625;
(statearr_27629[(7)] = inst_27602__$1);

return statearr_27629;
})();
if(cljs.core.truth_(inst_27603)){
var statearr_27630_27653 = state_27625__$1;
(statearr_27630_27653[(1)] = (5));

} else {
var statearr_27631_27654 = state_27625__$1;
(statearr_27631_27654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27626 === (13))){
var state_27625__$1 = state_27625;
var statearr_27632_27655 = state_27625__$1;
(statearr_27632_27655[(2)] = null);

(statearr_27632_27655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27626 === (6))){
var inst_27602 = (state_27625[(7)]);
var inst_27608 = p.call(null,inst_27602);
var state_27625__$1 = state_27625;
if(cljs.core.truth_(inst_27608)){
var statearr_27633_27656 = state_27625__$1;
(statearr_27633_27656[(1)] = (9));

} else {
var statearr_27634_27657 = state_27625__$1;
(statearr_27634_27657[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27626 === (3))){
var inst_27623 = (state_27625[(2)]);
var state_27625__$1 = state_27625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27625__$1,inst_27623);
} else {
if((state_val_27626 === (12))){
var state_27625__$1 = state_27625;
var statearr_27635_27658 = state_27625__$1;
(statearr_27635_27658[(2)] = null);

(statearr_27635_27658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27626 === (2))){
var state_27625__$1 = state_27625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27625__$1,(4),ch);
} else {
if((state_val_27626 === (11))){
var inst_27602 = (state_27625[(7)]);
var inst_27612 = (state_27625[(2)]);
var state_27625__$1 = state_27625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27625__$1,(8),inst_27612,inst_27602);
} else {
if((state_val_27626 === (9))){
var state_27625__$1 = state_27625;
var statearr_27636_27659 = state_27625__$1;
(statearr_27636_27659[(2)] = tc);

(statearr_27636_27659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27626 === (5))){
var inst_27605 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27606 = cljs.core.async.close_BANG_.call(null,fc);
var state_27625__$1 = (function (){var statearr_27637 = state_27625;
(statearr_27637[(8)] = inst_27605);

return statearr_27637;
})();
var statearr_27638_27660 = state_27625__$1;
(statearr_27638_27660[(2)] = inst_27606);

(statearr_27638_27660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27626 === (14))){
var inst_27619 = (state_27625[(2)]);
var state_27625__$1 = state_27625;
var statearr_27639_27661 = state_27625__$1;
(statearr_27639_27661[(2)] = inst_27619);

(statearr_27639_27661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27626 === (10))){
var state_27625__$1 = state_27625;
var statearr_27640_27662 = state_27625__$1;
(statearr_27640_27662[(2)] = fc);

(statearr_27640_27662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27626 === (8))){
var inst_27614 = (state_27625[(2)]);
var state_27625__$1 = state_27625;
if(cljs.core.truth_(inst_27614)){
var statearr_27641_27663 = state_27625__$1;
(statearr_27641_27663[(1)] = (12));

} else {
var statearr_27642_27664 = state_27625__$1;
(statearr_27642_27664[(1)] = (13));

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
});})(c__15997__auto___27650,tc,fc))
;
return ((function (switch__15941__auto__,c__15997__auto___27650,tc,fc){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_27646 = [null,null,null,null,null,null,null,null,null];
(statearr_27646[(0)] = state_machine__15942__auto__);

(statearr_27646[(1)] = (1));

return statearr_27646;
});
var state_machine__15942__auto____1 = (function (state_27625){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_27625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e27647){if((e27647 instanceof Object)){
var ex__15945__auto__ = e27647;
var statearr_27648_27665 = state_27625;
(statearr_27648_27665[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27666 = state_27625;
state_27625 = G__27666;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_27625){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_27625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto___27650,tc,fc))
})();
var state__15999__auto__ = (function (){var statearr_27649 = f__15998__auto__.call(null);
(statearr_27649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___27650);

return statearr_27649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto___27650,tc,fc))
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
var c__15997__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto__){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto__){
return (function (state_27713){
var state_val_27714 = (state_27713[(1)]);
if((state_val_27714 === (7))){
var inst_27709 = (state_27713[(2)]);
var state_27713__$1 = state_27713;
var statearr_27715_27731 = state_27713__$1;
(statearr_27715_27731[(2)] = inst_27709);

(statearr_27715_27731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (6))){
var inst_27702 = (state_27713[(7)]);
var inst_27699 = (state_27713[(8)]);
var inst_27706 = f.call(null,inst_27699,inst_27702);
var inst_27699__$1 = inst_27706;
var state_27713__$1 = (function (){var statearr_27716 = state_27713;
(statearr_27716[(8)] = inst_27699__$1);

return statearr_27716;
})();
var statearr_27717_27732 = state_27713__$1;
(statearr_27717_27732[(2)] = null);

(statearr_27717_27732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (5))){
var inst_27699 = (state_27713[(8)]);
var state_27713__$1 = state_27713;
var statearr_27718_27733 = state_27713__$1;
(statearr_27718_27733[(2)] = inst_27699);

(statearr_27718_27733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (4))){
var inst_27702 = (state_27713[(7)]);
var inst_27702__$1 = (state_27713[(2)]);
var inst_27703 = (inst_27702__$1 == null);
var state_27713__$1 = (function (){var statearr_27719 = state_27713;
(statearr_27719[(7)] = inst_27702__$1);

return statearr_27719;
})();
if(cljs.core.truth_(inst_27703)){
var statearr_27720_27734 = state_27713__$1;
(statearr_27720_27734[(1)] = (5));

} else {
var statearr_27721_27735 = state_27713__$1;
(statearr_27721_27735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (3))){
var inst_27711 = (state_27713[(2)]);
var state_27713__$1 = state_27713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27713__$1,inst_27711);
} else {
if((state_val_27714 === (2))){
var state_27713__$1 = state_27713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27713__$1,(4),ch);
} else {
if((state_val_27714 === (1))){
var inst_27699 = init;
var state_27713__$1 = (function (){var statearr_27722 = state_27713;
(statearr_27722[(8)] = inst_27699);

return statearr_27722;
})();
var statearr_27723_27736 = state_27713__$1;
(statearr_27723_27736[(2)] = null);

(statearr_27723_27736[(1)] = (2));


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
});})(c__15997__auto__))
;
return ((function (switch__15941__auto__,c__15997__auto__){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_27727 = [null,null,null,null,null,null,null,null,null];
(statearr_27727[(0)] = state_machine__15942__auto__);

(statearr_27727[(1)] = (1));

return statearr_27727;
});
var state_machine__15942__auto____1 = (function (state_27713){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_27713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e27728){if((e27728 instanceof Object)){
var ex__15945__auto__ = e27728;
var statearr_27729_27737 = state_27713;
(statearr_27729_27737[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27738 = state_27713;
state_27713 = G__27738;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_27713){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_27713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto__))
})();
var state__15999__auto__ = (function (){var statearr_27730 = f__15998__auto__.call(null);
(statearr_27730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto__);

return statearr_27730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto__))
);

return c__15997__auto__;
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
var c__15997__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto__){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto__){
return (function (state_27812){
var state_val_27813 = (state_27812[(1)]);
if((state_val_27813 === (7))){
var inst_27794 = (state_27812[(2)]);
var state_27812__$1 = state_27812;
var statearr_27814_27837 = state_27812__$1;
(statearr_27814_27837[(2)] = inst_27794);

(statearr_27814_27837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (1))){
var inst_27788 = cljs.core.seq.call(null,coll);
var inst_27789 = inst_27788;
var state_27812__$1 = (function (){var statearr_27815 = state_27812;
(statearr_27815[(7)] = inst_27789);

return statearr_27815;
})();
var statearr_27816_27838 = state_27812__$1;
(statearr_27816_27838[(2)] = null);

(statearr_27816_27838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (4))){
var inst_27789 = (state_27812[(7)]);
var inst_27792 = cljs.core.first.call(null,inst_27789);
var state_27812__$1 = state_27812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27812__$1,(7),ch,inst_27792);
} else {
if((state_val_27813 === (13))){
var inst_27806 = (state_27812[(2)]);
var state_27812__$1 = state_27812;
var statearr_27817_27839 = state_27812__$1;
(statearr_27817_27839[(2)] = inst_27806);

(statearr_27817_27839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (6))){
var inst_27797 = (state_27812[(2)]);
var state_27812__$1 = state_27812;
if(cljs.core.truth_(inst_27797)){
var statearr_27818_27840 = state_27812__$1;
(statearr_27818_27840[(1)] = (8));

} else {
var statearr_27819_27841 = state_27812__$1;
(statearr_27819_27841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (3))){
var inst_27810 = (state_27812[(2)]);
var state_27812__$1 = state_27812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27812__$1,inst_27810);
} else {
if((state_val_27813 === (12))){
var state_27812__$1 = state_27812;
var statearr_27820_27842 = state_27812__$1;
(statearr_27820_27842[(2)] = null);

(statearr_27820_27842[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (2))){
var inst_27789 = (state_27812[(7)]);
var state_27812__$1 = state_27812;
if(cljs.core.truth_(inst_27789)){
var statearr_27821_27843 = state_27812__$1;
(statearr_27821_27843[(1)] = (4));

} else {
var statearr_27822_27844 = state_27812__$1;
(statearr_27822_27844[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (11))){
var inst_27803 = cljs.core.async.close_BANG_.call(null,ch);
var state_27812__$1 = state_27812;
var statearr_27823_27845 = state_27812__$1;
(statearr_27823_27845[(2)] = inst_27803);

(statearr_27823_27845[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (9))){
var state_27812__$1 = state_27812;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27824_27846 = state_27812__$1;
(statearr_27824_27846[(1)] = (11));

} else {
var statearr_27825_27847 = state_27812__$1;
(statearr_27825_27847[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (5))){
var inst_27789 = (state_27812[(7)]);
var state_27812__$1 = state_27812;
var statearr_27826_27848 = state_27812__$1;
(statearr_27826_27848[(2)] = inst_27789);

(statearr_27826_27848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (10))){
var inst_27808 = (state_27812[(2)]);
var state_27812__$1 = state_27812;
var statearr_27827_27849 = state_27812__$1;
(statearr_27827_27849[(2)] = inst_27808);

(statearr_27827_27849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (8))){
var inst_27789 = (state_27812[(7)]);
var inst_27799 = cljs.core.next.call(null,inst_27789);
var inst_27789__$1 = inst_27799;
var state_27812__$1 = (function (){var statearr_27828 = state_27812;
(statearr_27828[(7)] = inst_27789__$1);

return statearr_27828;
})();
var statearr_27829_27850 = state_27812__$1;
(statearr_27829_27850[(2)] = null);

(statearr_27829_27850[(1)] = (2));


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
});})(c__15997__auto__))
;
return ((function (switch__15941__auto__,c__15997__auto__){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_27833 = [null,null,null,null,null,null,null,null];
(statearr_27833[(0)] = state_machine__15942__auto__);

(statearr_27833[(1)] = (1));

return statearr_27833;
});
var state_machine__15942__auto____1 = (function (state_27812){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_27812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e27834){if((e27834 instanceof Object)){
var ex__15945__auto__ = e27834;
var statearr_27835_27851 = state_27812;
(statearr_27835_27851[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27852 = state_27812;
state_27812 = G__27852;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_27812){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_27812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto__))
})();
var state__15999__auto__ = (function (){var statearr_27836 = f__15998__auto__.call(null);
(statearr_27836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto__);

return statearr_27836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto__))
);

return c__15997__auto__;
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

cljs.core.async.Mux = (function (){var obj27854 = {};
return obj27854;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__13316__auto__ = _;
if(and__13316__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__13316__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__13972__auto__ = (((_ == null))?null:_);
return (function (){var or__13328__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27856 = {};
return obj27856;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__13316__auto__ = m;
if(and__13316__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__13316__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__13972__auto__ = (((m == null))?null:m);
return (function (){var or__13328__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__13316__auto__ = m;
if(and__13316__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__13316__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__13972__auto__ = (((m == null))?null:m);
return (function (){var or__13328__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__13316__auto__ = m;
if(and__13316__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__13316__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__13972__auto__ = (((m == null))?null:m);
return (function (){var or__13328__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
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
if(typeof cljs.core.async.t28078 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28078 = (function (cs,ch,mult,meta28079){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28079 = meta28079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28078.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28078.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28078.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28078.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28078.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28078.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28078.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28080){
var self__ = this;
var _28080__$1 = this;
return self__.meta28079;
});})(cs))
;

cljs.core.async.t28078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28080,meta28079__$1){
var self__ = this;
var _28080__$1 = this;
return (new cljs.core.async.t28078(self__.cs,self__.ch,self__.mult,meta28079__$1));
});})(cs))
;

cljs.core.async.t28078.cljs$lang$type = true;

cljs.core.async.t28078.cljs$lang$ctorStr = "cljs.core.async/t28078";

cljs.core.async.t28078.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13915__auto__,writer__13916__auto__,opt__13917__auto__){
return cljs.core._write.call(null,writer__13916__auto__,"cljs.core.async/t28078");
});})(cs))
;

cljs.core.async.__GT_t28078 = ((function (cs){
return (function __GT_t28078(cs__$1,ch__$1,mult__$1,meta28079){
return (new cljs.core.async.t28078(cs__$1,ch__$1,mult__$1,meta28079));
});})(cs))
;

}

return (new cljs.core.async.t28078(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15997__auto___28299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto___28299,cs,m,dchan,dctr,done){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto___28299,cs,m,dchan,dctr,done){
return (function (state_28211){
var state_val_28212 = (state_28211[(1)]);
if((state_val_28212 === (7))){
var inst_28207 = (state_28211[(2)]);
var state_28211__$1 = state_28211;
var statearr_28213_28300 = state_28211__$1;
(statearr_28213_28300[(2)] = inst_28207);

(statearr_28213_28300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (20))){
var inst_28112 = (state_28211[(7)]);
var inst_28122 = cljs.core.first.call(null,inst_28112);
var inst_28123 = cljs.core.nth.call(null,inst_28122,(0),null);
var inst_28124 = cljs.core.nth.call(null,inst_28122,(1),null);
var state_28211__$1 = (function (){var statearr_28214 = state_28211;
(statearr_28214[(8)] = inst_28123);

return statearr_28214;
})();
if(cljs.core.truth_(inst_28124)){
var statearr_28215_28301 = state_28211__$1;
(statearr_28215_28301[(1)] = (22));

} else {
var statearr_28216_28302 = state_28211__$1;
(statearr_28216_28302[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (27))){
var inst_28154 = (state_28211[(9)]);
var inst_28152 = (state_28211[(10)]);
var inst_28159 = (state_28211[(11)]);
var inst_28083 = (state_28211[(12)]);
var inst_28159__$1 = cljs.core._nth.call(null,inst_28152,inst_28154);
var inst_28160 = cljs.core.async.put_BANG_.call(null,inst_28159__$1,inst_28083,done);
var state_28211__$1 = (function (){var statearr_28217 = state_28211;
(statearr_28217[(11)] = inst_28159__$1);

return statearr_28217;
})();
if(cljs.core.truth_(inst_28160)){
var statearr_28218_28303 = state_28211__$1;
(statearr_28218_28303[(1)] = (30));

} else {
var statearr_28219_28304 = state_28211__$1;
(statearr_28219_28304[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (1))){
var state_28211__$1 = state_28211;
var statearr_28220_28305 = state_28211__$1;
(statearr_28220_28305[(2)] = null);

(statearr_28220_28305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (24))){
var inst_28112 = (state_28211[(7)]);
var inst_28129 = (state_28211[(2)]);
var inst_28130 = cljs.core.next.call(null,inst_28112);
var inst_28092 = inst_28130;
var inst_28093 = null;
var inst_28094 = (0);
var inst_28095 = (0);
var state_28211__$1 = (function (){var statearr_28221 = state_28211;
(statearr_28221[(13)] = inst_28092);

(statearr_28221[(14)] = inst_28129);

(statearr_28221[(15)] = inst_28094);

(statearr_28221[(16)] = inst_28095);

(statearr_28221[(17)] = inst_28093);

return statearr_28221;
})();
var statearr_28222_28306 = state_28211__$1;
(statearr_28222_28306[(2)] = null);

(statearr_28222_28306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (39))){
var state_28211__$1 = state_28211;
var statearr_28226_28307 = state_28211__$1;
(statearr_28226_28307[(2)] = null);

(statearr_28226_28307[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (4))){
var inst_28083 = (state_28211[(12)]);
var inst_28083__$1 = (state_28211[(2)]);
var inst_28084 = (inst_28083__$1 == null);
var state_28211__$1 = (function (){var statearr_28227 = state_28211;
(statearr_28227[(12)] = inst_28083__$1);

return statearr_28227;
})();
if(cljs.core.truth_(inst_28084)){
var statearr_28228_28308 = state_28211__$1;
(statearr_28228_28308[(1)] = (5));

} else {
var statearr_28229_28309 = state_28211__$1;
(statearr_28229_28309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (15))){
var inst_28092 = (state_28211[(13)]);
var inst_28094 = (state_28211[(15)]);
var inst_28095 = (state_28211[(16)]);
var inst_28093 = (state_28211[(17)]);
var inst_28108 = (state_28211[(2)]);
var inst_28109 = (inst_28095 + (1));
var tmp28223 = inst_28092;
var tmp28224 = inst_28094;
var tmp28225 = inst_28093;
var inst_28092__$1 = tmp28223;
var inst_28093__$1 = tmp28225;
var inst_28094__$1 = tmp28224;
var inst_28095__$1 = inst_28109;
var state_28211__$1 = (function (){var statearr_28230 = state_28211;
(statearr_28230[(13)] = inst_28092__$1);

(statearr_28230[(15)] = inst_28094__$1);

(statearr_28230[(16)] = inst_28095__$1);

(statearr_28230[(17)] = inst_28093__$1);

(statearr_28230[(18)] = inst_28108);

return statearr_28230;
})();
var statearr_28231_28310 = state_28211__$1;
(statearr_28231_28310[(2)] = null);

(statearr_28231_28310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (21))){
var inst_28133 = (state_28211[(2)]);
var state_28211__$1 = state_28211;
var statearr_28235_28311 = state_28211__$1;
(statearr_28235_28311[(2)] = inst_28133);

(statearr_28235_28311[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (31))){
var inst_28159 = (state_28211[(11)]);
var inst_28163 = done.call(null,null);
var inst_28164 = cljs.core.async.untap_STAR_.call(null,m,inst_28159);
var state_28211__$1 = (function (){var statearr_28236 = state_28211;
(statearr_28236[(19)] = inst_28163);

return statearr_28236;
})();
var statearr_28237_28312 = state_28211__$1;
(statearr_28237_28312[(2)] = inst_28164);

(statearr_28237_28312[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (32))){
var inst_28154 = (state_28211[(9)]);
var inst_28151 = (state_28211[(20)]);
var inst_28152 = (state_28211[(10)]);
var inst_28153 = (state_28211[(21)]);
var inst_28166 = (state_28211[(2)]);
var inst_28167 = (inst_28154 + (1));
var tmp28232 = inst_28151;
var tmp28233 = inst_28152;
var tmp28234 = inst_28153;
var inst_28151__$1 = tmp28232;
var inst_28152__$1 = tmp28233;
var inst_28153__$1 = tmp28234;
var inst_28154__$1 = inst_28167;
var state_28211__$1 = (function (){var statearr_28238 = state_28211;
(statearr_28238[(9)] = inst_28154__$1);

(statearr_28238[(22)] = inst_28166);

(statearr_28238[(20)] = inst_28151__$1);

(statearr_28238[(10)] = inst_28152__$1);

(statearr_28238[(21)] = inst_28153__$1);

return statearr_28238;
})();
var statearr_28239_28313 = state_28211__$1;
(statearr_28239_28313[(2)] = null);

(statearr_28239_28313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (40))){
var inst_28179 = (state_28211[(23)]);
var inst_28183 = done.call(null,null);
var inst_28184 = cljs.core.async.untap_STAR_.call(null,m,inst_28179);
var state_28211__$1 = (function (){var statearr_28240 = state_28211;
(statearr_28240[(24)] = inst_28183);

return statearr_28240;
})();
var statearr_28241_28314 = state_28211__$1;
(statearr_28241_28314[(2)] = inst_28184);

(statearr_28241_28314[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (33))){
var inst_28170 = (state_28211[(25)]);
var inst_28172 = cljs.core.chunked_seq_QMARK_.call(null,inst_28170);
var state_28211__$1 = state_28211;
if(inst_28172){
var statearr_28242_28315 = state_28211__$1;
(statearr_28242_28315[(1)] = (36));

} else {
var statearr_28243_28316 = state_28211__$1;
(statearr_28243_28316[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (13))){
var inst_28102 = (state_28211[(26)]);
var inst_28105 = cljs.core.async.close_BANG_.call(null,inst_28102);
var state_28211__$1 = state_28211;
var statearr_28244_28317 = state_28211__$1;
(statearr_28244_28317[(2)] = inst_28105);

(statearr_28244_28317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (22))){
var inst_28123 = (state_28211[(8)]);
var inst_28126 = cljs.core.async.close_BANG_.call(null,inst_28123);
var state_28211__$1 = state_28211;
var statearr_28245_28318 = state_28211__$1;
(statearr_28245_28318[(2)] = inst_28126);

(statearr_28245_28318[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (36))){
var inst_28170 = (state_28211[(25)]);
var inst_28174 = cljs.core.chunk_first.call(null,inst_28170);
var inst_28175 = cljs.core.chunk_rest.call(null,inst_28170);
var inst_28176 = cljs.core.count.call(null,inst_28174);
var inst_28151 = inst_28175;
var inst_28152 = inst_28174;
var inst_28153 = inst_28176;
var inst_28154 = (0);
var state_28211__$1 = (function (){var statearr_28246 = state_28211;
(statearr_28246[(9)] = inst_28154);

(statearr_28246[(20)] = inst_28151);

(statearr_28246[(10)] = inst_28152);

(statearr_28246[(21)] = inst_28153);

return statearr_28246;
})();
var statearr_28247_28319 = state_28211__$1;
(statearr_28247_28319[(2)] = null);

(statearr_28247_28319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (41))){
var inst_28170 = (state_28211[(25)]);
var inst_28186 = (state_28211[(2)]);
var inst_28187 = cljs.core.next.call(null,inst_28170);
var inst_28151 = inst_28187;
var inst_28152 = null;
var inst_28153 = (0);
var inst_28154 = (0);
var state_28211__$1 = (function (){var statearr_28248 = state_28211;
(statearr_28248[(9)] = inst_28154);

(statearr_28248[(20)] = inst_28151);

(statearr_28248[(27)] = inst_28186);

(statearr_28248[(10)] = inst_28152);

(statearr_28248[(21)] = inst_28153);

return statearr_28248;
})();
var statearr_28249_28320 = state_28211__$1;
(statearr_28249_28320[(2)] = null);

(statearr_28249_28320[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (43))){
var state_28211__$1 = state_28211;
var statearr_28250_28321 = state_28211__$1;
(statearr_28250_28321[(2)] = null);

(statearr_28250_28321[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (29))){
var inst_28195 = (state_28211[(2)]);
var state_28211__$1 = state_28211;
var statearr_28251_28322 = state_28211__$1;
(statearr_28251_28322[(2)] = inst_28195);

(statearr_28251_28322[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (44))){
var inst_28204 = (state_28211[(2)]);
var state_28211__$1 = (function (){var statearr_28252 = state_28211;
(statearr_28252[(28)] = inst_28204);

return statearr_28252;
})();
var statearr_28253_28323 = state_28211__$1;
(statearr_28253_28323[(2)] = null);

(statearr_28253_28323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (6))){
var inst_28143 = (state_28211[(29)]);
var inst_28142 = cljs.core.deref.call(null,cs);
var inst_28143__$1 = cljs.core.keys.call(null,inst_28142);
var inst_28144 = cljs.core.count.call(null,inst_28143__$1);
var inst_28145 = cljs.core.reset_BANG_.call(null,dctr,inst_28144);
var inst_28150 = cljs.core.seq.call(null,inst_28143__$1);
var inst_28151 = inst_28150;
var inst_28152 = null;
var inst_28153 = (0);
var inst_28154 = (0);
var state_28211__$1 = (function (){var statearr_28254 = state_28211;
(statearr_28254[(29)] = inst_28143__$1);

(statearr_28254[(9)] = inst_28154);

(statearr_28254[(20)] = inst_28151);

(statearr_28254[(10)] = inst_28152);

(statearr_28254[(21)] = inst_28153);

(statearr_28254[(30)] = inst_28145);

return statearr_28254;
})();
var statearr_28255_28324 = state_28211__$1;
(statearr_28255_28324[(2)] = null);

(statearr_28255_28324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (28))){
var inst_28151 = (state_28211[(20)]);
var inst_28170 = (state_28211[(25)]);
var inst_28170__$1 = cljs.core.seq.call(null,inst_28151);
var state_28211__$1 = (function (){var statearr_28256 = state_28211;
(statearr_28256[(25)] = inst_28170__$1);

return statearr_28256;
})();
if(inst_28170__$1){
var statearr_28257_28325 = state_28211__$1;
(statearr_28257_28325[(1)] = (33));

} else {
var statearr_28258_28326 = state_28211__$1;
(statearr_28258_28326[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (25))){
var inst_28154 = (state_28211[(9)]);
var inst_28153 = (state_28211[(21)]);
var inst_28156 = (inst_28154 < inst_28153);
var inst_28157 = inst_28156;
var state_28211__$1 = state_28211;
if(cljs.core.truth_(inst_28157)){
var statearr_28259_28327 = state_28211__$1;
(statearr_28259_28327[(1)] = (27));

} else {
var statearr_28260_28328 = state_28211__$1;
(statearr_28260_28328[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (34))){
var state_28211__$1 = state_28211;
var statearr_28261_28329 = state_28211__$1;
(statearr_28261_28329[(2)] = null);

(statearr_28261_28329[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (17))){
var state_28211__$1 = state_28211;
var statearr_28262_28330 = state_28211__$1;
(statearr_28262_28330[(2)] = null);

(statearr_28262_28330[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (3))){
var inst_28209 = (state_28211[(2)]);
var state_28211__$1 = state_28211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28211__$1,inst_28209);
} else {
if((state_val_28212 === (12))){
var inst_28138 = (state_28211[(2)]);
var state_28211__$1 = state_28211;
var statearr_28263_28331 = state_28211__$1;
(statearr_28263_28331[(2)] = inst_28138);

(statearr_28263_28331[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (2))){
var state_28211__$1 = state_28211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28211__$1,(4),ch);
} else {
if((state_val_28212 === (23))){
var state_28211__$1 = state_28211;
var statearr_28264_28332 = state_28211__$1;
(statearr_28264_28332[(2)] = null);

(statearr_28264_28332[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (35))){
var inst_28193 = (state_28211[(2)]);
var state_28211__$1 = state_28211;
var statearr_28265_28333 = state_28211__$1;
(statearr_28265_28333[(2)] = inst_28193);

(statearr_28265_28333[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (19))){
var inst_28112 = (state_28211[(7)]);
var inst_28116 = cljs.core.chunk_first.call(null,inst_28112);
var inst_28117 = cljs.core.chunk_rest.call(null,inst_28112);
var inst_28118 = cljs.core.count.call(null,inst_28116);
var inst_28092 = inst_28117;
var inst_28093 = inst_28116;
var inst_28094 = inst_28118;
var inst_28095 = (0);
var state_28211__$1 = (function (){var statearr_28266 = state_28211;
(statearr_28266[(13)] = inst_28092);

(statearr_28266[(15)] = inst_28094);

(statearr_28266[(16)] = inst_28095);

(statearr_28266[(17)] = inst_28093);

return statearr_28266;
})();
var statearr_28267_28334 = state_28211__$1;
(statearr_28267_28334[(2)] = null);

(statearr_28267_28334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (11))){
var inst_28112 = (state_28211[(7)]);
var inst_28092 = (state_28211[(13)]);
var inst_28112__$1 = cljs.core.seq.call(null,inst_28092);
var state_28211__$1 = (function (){var statearr_28268 = state_28211;
(statearr_28268[(7)] = inst_28112__$1);

return statearr_28268;
})();
if(inst_28112__$1){
var statearr_28269_28335 = state_28211__$1;
(statearr_28269_28335[(1)] = (16));

} else {
var statearr_28270_28336 = state_28211__$1;
(statearr_28270_28336[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (9))){
var inst_28140 = (state_28211[(2)]);
var state_28211__$1 = state_28211;
var statearr_28271_28337 = state_28211__$1;
(statearr_28271_28337[(2)] = inst_28140);

(statearr_28271_28337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (5))){
var inst_28090 = cljs.core.deref.call(null,cs);
var inst_28091 = cljs.core.seq.call(null,inst_28090);
var inst_28092 = inst_28091;
var inst_28093 = null;
var inst_28094 = (0);
var inst_28095 = (0);
var state_28211__$1 = (function (){var statearr_28272 = state_28211;
(statearr_28272[(13)] = inst_28092);

(statearr_28272[(15)] = inst_28094);

(statearr_28272[(16)] = inst_28095);

(statearr_28272[(17)] = inst_28093);

return statearr_28272;
})();
var statearr_28273_28338 = state_28211__$1;
(statearr_28273_28338[(2)] = null);

(statearr_28273_28338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (14))){
var state_28211__$1 = state_28211;
var statearr_28274_28339 = state_28211__$1;
(statearr_28274_28339[(2)] = null);

(statearr_28274_28339[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (45))){
var inst_28201 = (state_28211[(2)]);
var state_28211__$1 = state_28211;
var statearr_28275_28340 = state_28211__$1;
(statearr_28275_28340[(2)] = inst_28201);

(statearr_28275_28340[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (26))){
var inst_28143 = (state_28211[(29)]);
var inst_28197 = (state_28211[(2)]);
var inst_28198 = cljs.core.seq.call(null,inst_28143);
var state_28211__$1 = (function (){var statearr_28276 = state_28211;
(statearr_28276[(31)] = inst_28197);

return statearr_28276;
})();
if(inst_28198){
var statearr_28277_28341 = state_28211__$1;
(statearr_28277_28341[(1)] = (42));

} else {
var statearr_28278_28342 = state_28211__$1;
(statearr_28278_28342[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (16))){
var inst_28112 = (state_28211[(7)]);
var inst_28114 = cljs.core.chunked_seq_QMARK_.call(null,inst_28112);
var state_28211__$1 = state_28211;
if(inst_28114){
var statearr_28279_28343 = state_28211__$1;
(statearr_28279_28343[(1)] = (19));

} else {
var statearr_28280_28344 = state_28211__$1;
(statearr_28280_28344[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (38))){
var inst_28190 = (state_28211[(2)]);
var state_28211__$1 = state_28211;
var statearr_28281_28345 = state_28211__$1;
(statearr_28281_28345[(2)] = inst_28190);

(statearr_28281_28345[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (30))){
var state_28211__$1 = state_28211;
var statearr_28282_28346 = state_28211__$1;
(statearr_28282_28346[(2)] = null);

(statearr_28282_28346[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (10))){
var inst_28095 = (state_28211[(16)]);
var inst_28093 = (state_28211[(17)]);
var inst_28101 = cljs.core._nth.call(null,inst_28093,inst_28095);
var inst_28102 = cljs.core.nth.call(null,inst_28101,(0),null);
var inst_28103 = cljs.core.nth.call(null,inst_28101,(1),null);
var state_28211__$1 = (function (){var statearr_28283 = state_28211;
(statearr_28283[(26)] = inst_28102);

return statearr_28283;
})();
if(cljs.core.truth_(inst_28103)){
var statearr_28284_28347 = state_28211__$1;
(statearr_28284_28347[(1)] = (13));

} else {
var statearr_28285_28348 = state_28211__$1;
(statearr_28285_28348[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (18))){
var inst_28136 = (state_28211[(2)]);
var state_28211__$1 = state_28211;
var statearr_28286_28349 = state_28211__$1;
(statearr_28286_28349[(2)] = inst_28136);

(statearr_28286_28349[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (42))){
var state_28211__$1 = state_28211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28211__$1,(45),dchan);
} else {
if((state_val_28212 === (37))){
var inst_28170 = (state_28211[(25)]);
var inst_28179 = (state_28211[(23)]);
var inst_28083 = (state_28211[(12)]);
var inst_28179__$1 = cljs.core.first.call(null,inst_28170);
var inst_28180 = cljs.core.async.put_BANG_.call(null,inst_28179__$1,inst_28083,done);
var state_28211__$1 = (function (){var statearr_28287 = state_28211;
(statearr_28287[(23)] = inst_28179__$1);

return statearr_28287;
})();
if(cljs.core.truth_(inst_28180)){
var statearr_28288_28350 = state_28211__$1;
(statearr_28288_28350[(1)] = (39));

} else {
var statearr_28289_28351 = state_28211__$1;
(statearr_28289_28351[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28212 === (8))){
var inst_28094 = (state_28211[(15)]);
var inst_28095 = (state_28211[(16)]);
var inst_28097 = (inst_28095 < inst_28094);
var inst_28098 = inst_28097;
var state_28211__$1 = state_28211;
if(cljs.core.truth_(inst_28098)){
var statearr_28290_28352 = state_28211__$1;
(statearr_28290_28352[(1)] = (10));

} else {
var statearr_28291_28353 = state_28211__$1;
(statearr_28291_28353[(1)] = (11));

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
});})(c__15997__auto___28299,cs,m,dchan,dctr,done))
;
return ((function (switch__15941__auto__,c__15997__auto___28299,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_28295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28295[(0)] = state_machine__15942__auto__);

(statearr_28295[(1)] = (1));

return statearr_28295;
});
var state_machine__15942__auto____1 = (function (state_28211){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_28211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e28296){if((e28296 instanceof Object)){
var ex__15945__auto__ = e28296;
var statearr_28297_28354 = state_28211;
(statearr_28297_28354[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28355 = state_28211;
state_28211 = G__28355;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_28211){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_28211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto___28299,cs,m,dchan,dctr,done))
})();
var state__15999__auto__ = (function (){var statearr_28298 = f__15998__auto__.call(null);
(statearr_28298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___28299);

return statearr_28298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto___28299,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj28357 = {};
return obj28357;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__13316__auto__ = m;
if(and__13316__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__13316__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__13972__auto__ = (((m == null))?null:m);
return (function (){var or__13328__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__13316__auto__ = m;
if(and__13316__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__13316__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__13972__auto__ = (((m == null))?null:m);
return (function (){var or__13328__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__13316__auto__ = m;
if(and__13316__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__13316__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__13972__auto__ = (((m == null))?null:m);
return (function (){var or__13328__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__13316__auto__ = m;
if(and__13316__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__13316__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__13972__auto__ = (((m == null))?null:m);
return (function (){var or__13328__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__13316__auto__ = m;
if(and__13316__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__13316__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__13972__auto__ = (((m == null))?null:m);
return (function (){var or__13328__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__28358){
var map__28363 = p__28358;
var map__28363__$1 = ((cljs.core.seq_QMARK_.call(null,map__28363))?cljs.core.apply.call(null,cljs.core.hash_map,map__28363):map__28363);
var opts = map__28363__$1;
var statearr_28364_28367 = state;
(statearr_28364_28367[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__28363,map__28363__$1,opts){
return (function (val){
var statearr_28365_28368 = state;
(statearr_28365_28368[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28363,map__28363__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_28366_28369 = state;
(statearr_28366_28369[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__28358 = null;
if (arguments.length > 3) {
var G__28370__i = 0, G__28370__a = new Array(arguments.length -  3);
while (G__28370__i < G__28370__a.length) {G__28370__a[G__28370__i] = arguments[G__28370__i + 3]; ++G__28370__i;}
  p__28358 = new cljs.core.IndexedSeq(G__28370__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__28358);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__28371){
var state = cljs.core.first(arglist__28371);
arglist__28371 = cljs.core.next(arglist__28371);
var cont_block = cljs.core.first(arglist__28371);
arglist__28371 = cljs.core.next(arglist__28371);
var ports = cljs.core.first(arglist__28371);
var p__28358 = cljs.core.rest(arglist__28371);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__28358);
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
if(typeof cljs.core.async.t28491 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28491 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28492){
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
this.meta28492 = meta28492;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28491.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28491.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28491.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28491.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28491.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28491.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t28491.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28491.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28493){
var self__ = this;
var _28493__$1 = this;
return self__.meta28492;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28493,meta28492__$1){
var self__ = this;
var _28493__$1 = this;
return (new cljs.core.async.t28491(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28492__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28491.cljs$lang$type = true;

cljs.core.async.t28491.cljs$lang$ctorStr = "cljs.core.async/t28491";

cljs.core.async.t28491.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13915__auto__,writer__13916__auto__,opt__13917__auto__){
return cljs.core._write.call(null,writer__13916__auto__,"cljs.core.async/t28491");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28491 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t28491(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28492){
return (new cljs.core.async.t28491(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28492));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28491(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15997__auto___28610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto___28610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto___28610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28563){
var state_val_28564 = (state_28563[(1)]);
if((state_val_28564 === (7))){
var inst_28507 = (state_28563[(7)]);
var inst_28512 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28507);
var state_28563__$1 = state_28563;
var statearr_28565_28611 = state_28563__$1;
(statearr_28565_28611[(2)] = inst_28512);

(statearr_28565_28611[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (20))){
var inst_28522 = (state_28563[(8)]);
var state_28563__$1 = state_28563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28563__$1,(23),out,inst_28522);
} else {
if((state_val_28564 === (1))){
var inst_28497 = (state_28563[(9)]);
var inst_28497__$1 = calc_state.call(null);
var inst_28498 = cljs.core.seq_QMARK_.call(null,inst_28497__$1);
var state_28563__$1 = (function (){var statearr_28566 = state_28563;
(statearr_28566[(9)] = inst_28497__$1);

return statearr_28566;
})();
if(inst_28498){
var statearr_28567_28612 = state_28563__$1;
(statearr_28567_28612[(1)] = (2));

} else {
var statearr_28568_28613 = state_28563__$1;
(statearr_28568_28613[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (24))){
var inst_28515 = (state_28563[(10)]);
var inst_28507 = inst_28515;
var state_28563__$1 = (function (){var statearr_28569 = state_28563;
(statearr_28569[(7)] = inst_28507);

return statearr_28569;
})();
var statearr_28570_28614 = state_28563__$1;
(statearr_28570_28614[(2)] = null);

(statearr_28570_28614[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (4))){
var inst_28497 = (state_28563[(9)]);
var inst_28503 = (state_28563[(2)]);
var inst_28504 = cljs.core.get.call(null,inst_28503,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28505 = cljs.core.get.call(null,inst_28503,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28506 = cljs.core.get.call(null,inst_28503,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28507 = inst_28497;
var state_28563__$1 = (function (){var statearr_28571 = state_28563;
(statearr_28571[(7)] = inst_28507);

(statearr_28571[(11)] = inst_28505);

(statearr_28571[(12)] = inst_28504);

(statearr_28571[(13)] = inst_28506);

return statearr_28571;
})();
var statearr_28572_28615 = state_28563__$1;
(statearr_28572_28615[(2)] = null);

(statearr_28572_28615[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (15))){
var state_28563__$1 = state_28563;
var statearr_28573_28616 = state_28563__$1;
(statearr_28573_28616[(2)] = null);

(statearr_28573_28616[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (21))){
var inst_28515 = (state_28563[(10)]);
var inst_28507 = inst_28515;
var state_28563__$1 = (function (){var statearr_28574 = state_28563;
(statearr_28574[(7)] = inst_28507);

return statearr_28574;
})();
var statearr_28575_28617 = state_28563__$1;
(statearr_28575_28617[(2)] = null);

(statearr_28575_28617[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (13))){
var inst_28559 = (state_28563[(2)]);
var state_28563__$1 = state_28563;
var statearr_28576_28618 = state_28563__$1;
(statearr_28576_28618[(2)] = inst_28559);

(statearr_28576_28618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (22))){
var inst_28557 = (state_28563[(2)]);
var state_28563__$1 = state_28563;
var statearr_28577_28619 = state_28563__$1;
(statearr_28577_28619[(2)] = inst_28557);

(statearr_28577_28619[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (6))){
var inst_28561 = (state_28563[(2)]);
var state_28563__$1 = state_28563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28563__$1,inst_28561);
} else {
if((state_val_28564 === (25))){
var state_28563__$1 = state_28563;
var statearr_28578_28620 = state_28563__$1;
(statearr_28578_28620[(2)] = null);

(statearr_28578_28620[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (17))){
var inst_28537 = (state_28563[(14)]);
var state_28563__$1 = state_28563;
var statearr_28579_28621 = state_28563__$1;
(statearr_28579_28621[(2)] = inst_28537);

(statearr_28579_28621[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (3))){
var inst_28497 = (state_28563[(9)]);
var state_28563__$1 = state_28563;
var statearr_28580_28622 = state_28563__$1;
(statearr_28580_28622[(2)] = inst_28497);

(statearr_28580_28622[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (12))){
var inst_28518 = (state_28563[(15)]);
var inst_28537 = (state_28563[(14)]);
var inst_28523 = (state_28563[(16)]);
var inst_28537__$1 = inst_28518.call(null,inst_28523);
var state_28563__$1 = (function (){var statearr_28581 = state_28563;
(statearr_28581[(14)] = inst_28537__$1);

return statearr_28581;
})();
if(cljs.core.truth_(inst_28537__$1)){
var statearr_28582_28623 = state_28563__$1;
(statearr_28582_28623[(1)] = (17));

} else {
var statearr_28583_28624 = state_28563__$1;
(statearr_28583_28624[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (2))){
var inst_28497 = (state_28563[(9)]);
var inst_28500 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28497);
var state_28563__$1 = state_28563;
var statearr_28584_28625 = state_28563__$1;
(statearr_28584_28625[(2)] = inst_28500);

(statearr_28584_28625[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (23))){
var inst_28548 = (state_28563[(2)]);
var state_28563__$1 = state_28563;
if(cljs.core.truth_(inst_28548)){
var statearr_28585_28626 = state_28563__$1;
(statearr_28585_28626[(1)] = (24));

} else {
var statearr_28586_28627 = state_28563__$1;
(statearr_28586_28627[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (19))){
var inst_28545 = (state_28563[(2)]);
var state_28563__$1 = state_28563;
if(cljs.core.truth_(inst_28545)){
var statearr_28587_28628 = state_28563__$1;
(statearr_28587_28628[(1)] = (20));

} else {
var statearr_28588_28629 = state_28563__$1;
(statearr_28588_28629[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (11))){
var inst_28522 = (state_28563[(8)]);
var inst_28528 = (inst_28522 == null);
var state_28563__$1 = state_28563;
if(cljs.core.truth_(inst_28528)){
var statearr_28589_28630 = state_28563__$1;
(statearr_28589_28630[(1)] = (14));

} else {
var statearr_28590_28631 = state_28563__$1;
(statearr_28590_28631[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (9))){
var inst_28515 = (state_28563[(10)]);
var inst_28515__$1 = (state_28563[(2)]);
var inst_28516 = cljs.core.get.call(null,inst_28515__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28517 = cljs.core.get.call(null,inst_28515__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28518 = cljs.core.get.call(null,inst_28515__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28563__$1 = (function (){var statearr_28591 = state_28563;
(statearr_28591[(15)] = inst_28518);

(statearr_28591[(10)] = inst_28515__$1);

(statearr_28591[(17)] = inst_28517);

return statearr_28591;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28563__$1,(10),inst_28516);
} else {
if((state_val_28564 === (5))){
var inst_28507 = (state_28563[(7)]);
var inst_28510 = cljs.core.seq_QMARK_.call(null,inst_28507);
var state_28563__$1 = state_28563;
if(inst_28510){
var statearr_28592_28632 = state_28563__$1;
(statearr_28592_28632[(1)] = (7));

} else {
var statearr_28593_28633 = state_28563__$1;
(statearr_28593_28633[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (14))){
var inst_28523 = (state_28563[(16)]);
var inst_28530 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28523);
var state_28563__$1 = state_28563;
var statearr_28594_28634 = state_28563__$1;
(statearr_28594_28634[(2)] = inst_28530);

(statearr_28594_28634[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (26))){
var inst_28553 = (state_28563[(2)]);
var state_28563__$1 = state_28563;
var statearr_28595_28635 = state_28563__$1;
(statearr_28595_28635[(2)] = inst_28553);

(statearr_28595_28635[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (16))){
var inst_28533 = (state_28563[(2)]);
var inst_28534 = calc_state.call(null);
var inst_28507 = inst_28534;
var state_28563__$1 = (function (){var statearr_28596 = state_28563;
(statearr_28596[(7)] = inst_28507);

(statearr_28596[(18)] = inst_28533);

return statearr_28596;
})();
var statearr_28597_28636 = state_28563__$1;
(statearr_28597_28636[(2)] = null);

(statearr_28597_28636[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (10))){
var inst_28522 = (state_28563[(8)]);
var inst_28523 = (state_28563[(16)]);
var inst_28521 = (state_28563[(2)]);
var inst_28522__$1 = cljs.core.nth.call(null,inst_28521,(0),null);
var inst_28523__$1 = cljs.core.nth.call(null,inst_28521,(1),null);
var inst_28524 = (inst_28522__$1 == null);
var inst_28525 = cljs.core._EQ_.call(null,inst_28523__$1,change);
var inst_28526 = (inst_28524) || (inst_28525);
var state_28563__$1 = (function (){var statearr_28598 = state_28563;
(statearr_28598[(8)] = inst_28522__$1);

(statearr_28598[(16)] = inst_28523__$1);

return statearr_28598;
})();
if(cljs.core.truth_(inst_28526)){
var statearr_28599_28637 = state_28563__$1;
(statearr_28599_28637[(1)] = (11));

} else {
var statearr_28600_28638 = state_28563__$1;
(statearr_28600_28638[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (18))){
var inst_28518 = (state_28563[(15)]);
var inst_28517 = (state_28563[(17)]);
var inst_28523 = (state_28563[(16)]);
var inst_28540 = cljs.core.empty_QMARK_.call(null,inst_28518);
var inst_28541 = inst_28517.call(null,inst_28523);
var inst_28542 = cljs.core.not.call(null,inst_28541);
var inst_28543 = (inst_28540) && (inst_28542);
var state_28563__$1 = state_28563;
var statearr_28601_28639 = state_28563__$1;
(statearr_28601_28639[(2)] = inst_28543);

(statearr_28601_28639[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28564 === (8))){
var inst_28507 = (state_28563[(7)]);
var state_28563__$1 = state_28563;
var statearr_28602_28640 = state_28563__$1;
(statearr_28602_28640[(2)] = inst_28507);

(statearr_28602_28640[(1)] = (9));


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
});})(c__15997__auto___28610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15941__auto__,c__15997__auto___28610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_28606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28606[(0)] = state_machine__15942__auto__);

(statearr_28606[(1)] = (1));

return statearr_28606;
});
var state_machine__15942__auto____1 = (function (state_28563){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_28563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e28607){if((e28607 instanceof Object)){
var ex__15945__auto__ = e28607;
var statearr_28608_28641 = state_28563;
(statearr_28608_28641[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28642 = state_28563;
state_28563 = G__28642;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_28563){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_28563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto___28610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15999__auto__ = (function (){var statearr_28609 = f__15998__auto__.call(null);
(statearr_28609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___28610);

return statearr_28609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto___28610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj28644 = {};
return obj28644;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__13316__auto__ = p;
if(and__13316__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__13316__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__13972__auto__ = (((p == null))?null:p);
return (function (){var or__13328__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__13316__auto__ = p;
if(and__13316__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__13316__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__13972__auto__ = (((p == null))?null:p);
return (function (){var or__13328__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
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
if((function (){var and__13316__auto__ = p;
if(and__13316__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__13316__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__13972__auto__ = (((p == null))?null:p);
return (function (){var or__13328__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__13316__auto__ = p;
if(and__13316__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__13316__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__13972__auto__ = (((p == null))?null:p);
return (function (){var or__13328__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
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
var or__13328__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__13328__auto__)){
return or__13328__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__13328__auto__,mults){
return (function (p1__28645_SHARP_){
if(cljs.core.truth_(p1__28645_SHARP_.call(null,topic))){
return p1__28645_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28645_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13328__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28768 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28768 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta28769){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta28769 = meta28769;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28768.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28768.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28768.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t28768.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28768.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28768.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28768.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28768.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28770){
var self__ = this;
var _28770__$1 = this;
return self__.meta28769;
});})(mults,ensure_mult))
;

cljs.core.async.t28768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28770,meta28769__$1){
var self__ = this;
var _28770__$1 = this;
return (new cljs.core.async.t28768(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta28769__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28768.cljs$lang$type = true;

cljs.core.async.t28768.cljs$lang$ctorStr = "cljs.core.async/t28768";

cljs.core.async.t28768.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13915__auto__,writer__13916__auto__,opt__13917__auto__){
return cljs.core._write.call(null,writer__13916__auto__,"cljs.core.async/t28768");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28768 = ((function (mults,ensure_mult){
return (function __GT_t28768(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28769){
return (new cljs.core.async.t28768(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28769));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28768(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15997__auto___28890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto___28890,mults,ensure_mult,p){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto___28890,mults,ensure_mult,p){
return (function (state_28842){
var state_val_28843 = (state_28842[(1)]);
if((state_val_28843 === (7))){
var inst_28838 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28844_28891 = state_28842__$1;
(statearr_28844_28891[(2)] = inst_28838);

(statearr_28844_28891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (20))){
var state_28842__$1 = state_28842;
var statearr_28845_28892 = state_28842__$1;
(statearr_28845_28892[(2)] = null);

(statearr_28845_28892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (1))){
var state_28842__$1 = state_28842;
var statearr_28846_28893 = state_28842__$1;
(statearr_28846_28893[(2)] = null);

(statearr_28846_28893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (24))){
var inst_28821 = (state_28842[(7)]);
var inst_28830 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28821);
var state_28842__$1 = state_28842;
var statearr_28847_28894 = state_28842__$1;
(statearr_28847_28894[(2)] = inst_28830);

(statearr_28847_28894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (4))){
var inst_28773 = (state_28842[(8)]);
var inst_28773__$1 = (state_28842[(2)]);
var inst_28774 = (inst_28773__$1 == null);
var state_28842__$1 = (function (){var statearr_28848 = state_28842;
(statearr_28848[(8)] = inst_28773__$1);

return statearr_28848;
})();
if(cljs.core.truth_(inst_28774)){
var statearr_28849_28895 = state_28842__$1;
(statearr_28849_28895[(1)] = (5));

} else {
var statearr_28850_28896 = state_28842__$1;
(statearr_28850_28896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (15))){
var inst_28815 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28851_28897 = state_28842__$1;
(statearr_28851_28897[(2)] = inst_28815);

(statearr_28851_28897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (21))){
var inst_28835 = (state_28842[(2)]);
var state_28842__$1 = (function (){var statearr_28852 = state_28842;
(statearr_28852[(9)] = inst_28835);

return statearr_28852;
})();
var statearr_28853_28898 = state_28842__$1;
(statearr_28853_28898[(2)] = null);

(statearr_28853_28898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (13))){
var inst_28797 = (state_28842[(10)]);
var inst_28799 = cljs.core.chunked_seq_QMARK_.call(null,inst_28797);
var state_28842__$1 = state_28842;
if(inst_28799){
var statearr_28854_28899 = state_28842__$1;
(statearr_28854_28899[(1)] = (16));

} else {
var statearr_28855_28900 = state_28842__$1;
(statearr_28855_28900[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (22))){
var inst_28827 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
if(cljs.core.truth_(inst_28827)){
var statearr_28856_28901 = state_28842__$1;
(statearr_28856_28901[(1)] = (23));

} else {
var statearr_28857_28902 = state_28842__$1;
(statearr_28857_28902[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (6))){
var inst_28773 = (state_28842[(8)]);
var inst_28823 = (state_28842[(11)]);
var inst_28821 = (state_28842[(7)]);
var inst_28821__$1 = topic_fn.call(null,inst_28773);
var inst_28822 = cljs.core.deref.call(null,mults);
var inst_28823__$1 = cljs.core.get.call(null,inst_28822,inst_28821__$1);
var state_28842__$1 = (function (){var statearr_28858 = state_28842;
(statearr_28858[(11)] = inst_28823__$1);

(statearr_28858[(7)] = inst_28821__$1);

return statearr_28858;
})();
if(cljs.core.truth_(inst_28823__$1)){
var statearr_28859_28903 = state_28842__$1;
(statearr_28859_28903[(1)] = (19));

} else {
var statearr_28860_28904 = state_28842__$1;
(statearr_28860_28904[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (25))){
var inst_28832 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28861_28905 = state_28842__$1;
(statearr_28861_28905[(2)] = inst_28832);

(statearr_28861_28905[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (17))){
var inst_28797 = (state_28842[(10)]);
var inst_28806 = cljs.core.first.call(null,inst_28797);
var inst_28807 = cljs.core.async.muxch_STAR_.call(null,inst_28806);
var inst_28808 = cljs.core.async.close_BANG_.call(null,inst_28807);
var inst_28809 = cljs.core.next.call(null,inst_28797);
var inst_28783 = inst_28809;
var inst_28784 = null;
var inst_28785 = (0);
var inst_28786 = (0);
var state_28842__$1 = (function (){var statearr_28862 = state_28842;
(statearr_28862[(12)] = inst_28784);

(statearr_28862[(13)] = inst_28786);

(statearr_28862[(14)] = inst_28783);

(statearr_28862[(15)] = inst_28785);

(statearr_28862[(16)] = inst_28808);

return statearr_28862;
})();
var statearr_28863_28906 = state_28842__$1;
(statearr_28863_28906[(2)] = null);

(statearr_28863_28906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (3))){
var inst_28840 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28842__$1,inst_28840);
} else {
if((state_val_28843 === (12))){
var inst_28817 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28864_28907 = state_28842__$1;
(statearr_28864_28907[(2)] = inst_28817);

(statearr_28864_28907[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (2))){
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28842__$1,(4),ch);
} else {
if((state_val_28843 === (23))){
var state_28842__$1 = state_28842;
var statearr_28865_28908 = state_28842__$1;
(statearr_28865_28908[(2)] = null);

(statearr_28865_28908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (19))){
var inst_28773 = (state_28842[(8)]);
var inst_28823 = (state_28842[(11)]);
var inst_28825 = cljs.core.async.muxch_STAR_.call(null,inst_28823);
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28842__$1,(22),inst_28825,inst_28773);
} else {
if((state_val_28843 === (11))){
var inst_28783 = (state_28842[(14)]);
var inst_28797 = (state_28842[(10)]);
var inst_28797__$1 = cljs.core.seq.call(null,inst_28783);
var state_28842__$1 = (function (){var statearr_28866 = state_28842;
(statearr_28866[(10)] = inst_28797__$1);

return statearr_28866;
})();
if(inst_28797__$1){
var statearr_28867_28909 = state_28842__$1;
(statearr_28867_28909[(1)] = (13));

} else {
var statearr_28868_28910 = state_28842__$1;
(statearr_28868_28910[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (9))){
var inst_28819 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28869_28911 = state_28842__$1;
(statearr_28869_28911[(2)] = inst_28819);

(statearr_28869_28911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (5))){
var inst_28780 = cljs.core.deref.call(null,mults);
var inst_28781 = cljs.core.vals.call(null,inst_28780);
var inst_28782 = cljs.core.seq.call(null,inst_28781);
var inst_28783 = inst_28782;
var inst_28784 = null;
var inst_28785 = (0);
var inst_28786 = (0);
var state_28842__$1 = (function (){var statearr_28870 = state_28842;
(statearr_28870[(12)] = inst_28784);

(statearr_28870[(13)] = inst_28786);

(statearr_28870[(14)] = inst_28783);

(statearr_28870[(15)] = inst_28785);

return statearr_28870;
})();
var statearr_28871_28912 = state_28842__$1;
(statearr_28871_28912[(2)] = null);

(statearr_28871_28912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (14))){
var state_28842__$1 = state_28842;
var statearr_28875_28913 = state_28842__$1;
(statearr_28875_28913[(2)] = null);

(statearr_28875_28913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (16))){
var inst_28797 = (state_28842[(10)]);
var inst_28801 = cljs.core.chunk_first.call(null,inst_28797);
var inst_28802 = cljs.core.chunk_rest.call(null,inst_28797);
var inst_28803 = cljs.core.count.call(null,inst_28801);
var inst_28783 = inst_28802;
var inst_28784 = inst_28801;
var inst_28785 = inst_28803;
var inst_28786 = (0);
var state_28842__$1 = (function (){var statearr_28876 = state_28842;
(statearr_28876[(12)] = inst_28784);

(statearr_28876[(13)] = inst_28786);

(statearr_28876[(14)] = inst_28783);

(statearr_28876[(15)] = inst_28785);

return statearr_28876;
})();
var statearr_28877_28914 = state_28842__$1;
(statearr_28877_28914[(2)] = null);

(statearr_28877_28914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (10))){
var inst_28784 = (state_28842[(12)]);
var inst_28786 = (state_28842[(13)]);
var inst_28783 = (state_28842[(14)]);
var inst_28785 = (state_28842[(15)]);
var inst_28791 = cljs.core._nth.call(null,inst_28784,inst_28786);
var inst_28792 = cljs.core.async.muxch_STAR_.call(null,inst_28791);
var inst_28793 = cljs.core.async.close_BANG_.call(null,inst_28792);
var inst_28794 = (inst_28786 + (1));
var tmp28872 = inst_28784;
var tmp28873 = inst_28783;
var tmp28874 = inst_28785;
var inst_28783__$1 = tmp28873;
var inst_28784__$1 = tmp28872;
var inst_28785__$1 = tmp28874;
var inst_28786__$1 = inst_28794;
var state_28842__$1 = (function (){var statearr_28878 = state_28842;
(statearr_28878[(17)] = inst_28793);

(statearr_28878[(12)] = inst_28784__$1);

(statearr_28878[(13)] = inst_28786__$1);

(statearr_28878[(14)] = inst_28783__$1);

(statearr_28878[(15)] = inst_28785__$1);

return statearr_28878;
})();
var statearr_28879_28915 = state_28842__$1;
(statearr_28879_28915[(2)] = null);

(statearr_28879_28915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (18))){
var inst_28812 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28880_28916 = state_28842__$1;
(statearr_28880_28916[(2)] = inst_28812);

(statearr_28880_28916[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (8))){
var inst_28786 = (state_28842[(13)]);
var inst_28785 = (state_28842[(15)]);
var inst_28788 = (inst_28786 < inst_28785);
var inst_28789 = inst_28788;
var state_28842__$1 = state_28842;
if(cljs.core.truth_(inst_28789)){
var statearr_28881_28917 = state_28842__$1;
(statearr_28881_28917[(1)] = (10));

} else {
var statearr_28882_28918 = state_28842__$1;
(statearr_28882_28918[(1)] = (11));

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
});})(c__15997__auto___28890,mults,ensure_mult,p))
;
return ((function (switch__15941__auto__,c__15997__auto___28890,mults,ensure_mult,p){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_28886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28886[(0)] = state_machine__15942__auto__);

(statearr_28886[(1)] = (1));

return statearr_28886;
});
var state_machine__15942__auto____1 = (function (state_28842){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_28842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e28887){if((e28887 instanceof Object)){
var ex__15945__auto__ = e28887;
var statearr_28888_28919 = state_28842;
(statearr_28888_28919[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28920 = state_28842;
state_28842 = G__28920;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_28842){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_28842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto___28890,mults,ensure_mult,p))
})();
var state__15999__auto__ = (function (){var statearr_28889 = f__15998__auto__.call(null);
(statearr_28889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___28890);

return statearr_28889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto___28890,mults,ensure_mult,p))
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
var c__15997__auto___29057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto___29057,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto___29057,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29027){
var state_val_29028 = (state_29027[(1)]);
if((state_val_29028 === (7))){
var state_29027__$1 = state_29027;
var statearr_29029_29058 = state_29027__$1;
(statearr_29029_29058[(2)] = null);

(statearr_29029_29058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (1))){
var state_29027__$1 = state_29027;
var statearr_29030_29059 = state_29027__$1;
(statearr_29030_29059[(2)] = null);

(statearr_29030_29059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (4))){
var inst_28991 = (state_29027[(7)]);
var inst_28993 = (inst_28991 < cnt);
var state_29027__$1 = state_29027;
if(cljs.core.truth_(inst_28993)){
var statearr_29031_29060 = state_29027__$1;
(statearr_29031_29060[(1)] = (6));

} else {
var statearr_29032_29061 = state_29027__$1;
(statearr_29032_29061[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (15))){
var inst_29023 = (state_29027[(2)]);
var state_29027__$1 = state_29027;
var statearr_29033_29062 = state_29027__$1;
(statearr_29033_29062[(2)] = inst_29023);

(statearr_29033_29062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (13))){
var inst_29016 = cljs.core.async.close_BANG_.call(null,out);
var state_29027__$1 = state_29027;
var statearr_29034_29063 = state_29027__$1;
(statearr_29034_29063[(2)] = inst_29016);

(statearr_29034_29063[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (6))){
var state_29027__$1 = state_29027;
var statearr_29035_29064 = state_29027__$1;
(statearr_29035_29064[(2)] = null);

(statearr_29035_29064[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (3))){
var inst_29025 = (state_29027[(2)]);
var state_29027__$1 = state_29027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29027__$1,inst_29025);
} else {
if((state_val_29028 === (12))){
var inst_29013 = (state_29027[(8)]);
var inst_29013__$1 = (state_29027[(2)]);
var inst_29014 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29013__$1);
var state_29027__$1 = (function (){var statearr_29036 = state_29027;
(statearr_29036[(8)] = inst_29013__$1);

return statearr_29036;
})();
if(cljs.core.truth_(inst_29014)){
var statearr_29037_29065 = state_29027__$1;
(statearr_29037_29065[(1)] = (13));

} else {
var statearr_29038_29066 = state_29027__$1;
(statearr_29038_29066[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (2))){
var inst_28990 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28991 = (0);
var state_29027__$1 = (function (){var statearr_29039 = state_29027;
(statearr_29039[(7)] = inst_28991);

(statearr_29039[(9)] = inst_28990);

return statearr_29039;
})();
var statearr_29040_29067 = state_29027__$1;
(statearr_29040_29067[(2)] = null);

(statearr_29040_29067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (11))){
var inst_28991 = (state_29027[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29027,(10),Object,null,(9));
var inst_29000 = chs__$1.call(null,inst_28991);
var inst_29001 = done.call(null,inst_28991);
var inst_29002 = cljs.core.async.take_BANG_.call(null,inst_29000,inst_29001);
var state_29027__$1 = state_29027;
var statearr_29041_29068 = state_29027__$1;
(statearr_29041_29068[(2)] = inst_29002);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29027__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (9))){
var inst_28991 = (state_29027[(7)]);
var inst_29004 = (state_29027[(2)]);
var inst_29005 = (inst_28991 + (1));
var inst_28991__$1 = inst_29005;
var state_29027__$1 = (function (){var statearr_29042 = state_29027;
(statearr_29042[(7)] = inst_28991__$1);

(statearr_29042[(10)] = inst_29004);

return statearr_29042;
})();
var statearr_29043_29069 = state_29027__$1;
(statearr_29043_29069[(2)] = null);

(statearr_29043_29069[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (5))){
var inst_29011 = (state_29027[(2)]);
var state_29027__$1 = (function (){var statearr_29044 = state_29027;
(statearr_29044[(11)] = inst_29011);

return statearr_29044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29027__$1,(12),dchan);
} else {
if((state_val_29028 === (14))){
var inst_29013 = (state_29027[(8)]);
var inst_29018 = cljs.core.apply.call(null,f,inst_29013);
var state_29027__$1 = state_29027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29027__$1,(16),out,inst_29018);
} else {
if((state_val_29028 === (16))){
var inst_29020 = (state_29027[(2)]);
var state_29027__$1 = (function (){var statearr_29045 = state_29027;
(statearr_29045[(12)] = inst_29020);

return statearr_29045;
})();
var statearr_29046_29070 = state_29027__$1;
(statearr_29046_29070[(2)] = null);

(statearr_29046_29070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (10))){
var inst_28995 = (state_29027[(2)]);
var inst_28996 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29027__$1 = (function (){var statearr_29047 = state_29027;
(statearr_29047[(13)] = inst_28995);

return statearr_29047;
})();
var statearr_29048_29071 = state_29027__$1;
(statearr_29048_29071[(2)] = inst_28996);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29027__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29028 === (8))){
var inst_29009 = (state_29027[(2)]);
var state_29027__$1 = state_29027;
var statearr_29049_29072 = state_29027__$1;
(statearr_29049_29072[(2)] = inst_29009);

(statearr_29049_29072[(1)] = (5));


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
});})(c__15997__auto___29057,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15941__auto__,c__15997__auto___29057,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_29053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29053[(0)] = state_machine__15942__auto__);

(statearr_29053[(1)] = (1));

return statearr_29053;
});
var state_machine__15942__auto____1 = (function (state_29027){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_29027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e29054){if((e29054 instanceof Object)){
var ex__15945__auto__ = e29054;
var statearr_29055_29073 = state_29027;
(statearr_29055_29073[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29074 = state_29027;
state_29027 = G__29074;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_29027){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_29027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto___29057,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15999__auto__ = (function (){var statearr_29056 = f__15998__auto__.call(null);
(statearr_29056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___29057);

return statearr_29056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto___29057,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__15997__auto___29182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto___29182,out){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto___29182,out){
return (function (state_29158){
var state_val_29159 = (state_29158[(1)]);
if((state_val_29159 === (7))){
var inst_29138 = (state_29158[(7)]);
var inst_29137 = (state_29158[(8)]);
var inst_29137__$1 = (state_29158[(2)]);
var inst_29138__$1 = cljs.core.nth.call(null,inst_29137__$1,(0),null);
var inst_29139 = cljs.core.nth.call(null,inst_29137__$1,(1),null);
var inst_29140 = (inst_29138__$1 == null);
var state_29158__$1 = (function (){var statearr_29160 = state_29158;
(statearr_29160[(9)] = inst_29139);

(statearr_29160[(7)] = inst_29138__$1);

(statearr_29160[(8)] = inst_29137__$1);

return statearr_29160;
})();
if(cljs.core.truth_(inst_29140)){
var statearr_29161_29183 = state_29158__$1;
(statearr_29161_29183[(1)] = (8));

} else {
var statearr_29162_29184 = state_29158__$1;
(statearr_29162_29184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29159 === (1))){
var inst_29129 = cljs.core.vec.call(null,chs);
var inst_29130 = inst_29129;
var state_29158__$1 = (function (){var statearr_29163 = state_29158;
(statearr_29163[(10)] = inst_29130);

return statearr_29163;
})();
var statearr_29164_29185 = state_29158__$1;
(statearr_29164_29185[(2)] = null);

(statearr_29164_29185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29159 === (4))){
var inst_29130 = (state_29158[(10)]);
var state_29158__$1 = state_29158;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29158__$1,(7),inst_29130);
} else {
if((state_val_29159 === (6))){
var inst_29154 = (state_29158[(2)]);
var state_29158__$1 = state_29158;
var statearr_29165_29186 = state_29158__$1;
(statearr_29165_29186[(2)] = inst_29154);

(statearr_29165_29186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29159 === (3))){
var inst_29156 = (state_29158[(2)]);
var state_29158__$1 = state_29158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29158__$1,inst_29156);
} else {
if((state_val_29159 === (2))){
var inst_29130 = (state_29158[(10)]);
var inst_29132 = cljs.core.count.call(null,inst_29130);
var inst_29133 = (inst_29132 > (0));
var state_29158__$1 = state_29158;
if(cljs.core.truth_(inst_29133)){
var statearr_29167_29187 = state_29158__$1;
(statearr_29167_29187[(1)] = (4));

} else {
var statearr_29168_29188 = state_29158__$1;
(statearr_29168_29188[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29159 === (11))){
var inst_29130 = (state_29158[(10)]);
var inst_29147 = (state_29158[(2)]);
var tmp29166 = inst_29130;
var inst_29130__$1 = tmp29166;
var state_29158__$1 = (function (){var statearr_29169 = state_29158;
(statearr_29169[(11)] = inst_29147);

(statearr_29169[(10)] = inst_29130__$1);

return statearr_29169;
})();
var statearr_29170_29189 = state_29158__$1;
(statearr_29170_29189[(2)] = null);

(statearr_29170_29189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29159 === (9))){
var inst_29138 = (state_29158[(7)]);
var state_29158__$1 = state_29158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29158__$1,(11),out,inst_29138);
} else {
if((state_val_29159 === (5))){
var inst_29152 = cljs.core.async.close_BANG_.call(null,out);
var state_29158__$1 = state_29158;
var statearr_29171_29190 = state_29158__$1;
(statearr_29171_29190[(2)] = inst_29152);

(statearr_29171_29190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29159 === (10))){
var inst_29150 = (state_29158[(2)]);
var state_29158__$1 = state_29158;
var statearr_29172_29191 = state_29158__$1;
(statearr_29172_29191[(2)] = inst_29150);

(statearr_29172_29191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29159 === (8))){
var inst_29139 = (state_29158[(9)]);
var inst_29138 = (state_29158[(7)]);
var inst_29130 = (state_29158[(10)]);
var inst_29137 = (state_29158[(8)]);
var inst_29142 = (function (){var c = inst_29139;
var v = inst_29138;
var vec__29135 = inst_29137;
var cs = inst_29130;
return ((function (c,v,vec__29135,cs,inst_29139,inst_29138,inst_29130,inst_29137,state_val_29159,c__15997__auto___29182,out){
return (function (p1__29075_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29075_SHARP_);
});
;})(c,v,vec__29135,cs,inst_29139,inst_29138,inst_29130,inst_29137,state_val_29159,c__15997__auto___29182,out))
})();
var inst_29143 = cljs.core.filterv.call(null,inst_29142,inst_29130);
var inst_29130__$1 = inst_29143;
var state_29158__$1 = (function (){var statearr_29173 = state_29158;
(statearr_29173[(10)] = inst_29130__$1);

return statearr_29173;
})();
var statearr_29174_29192 = state_29158__$1;
(statearr_29174_29192[(2)] = null);

(statearr_29174_29192[(1)] = (2));


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
});})(c__15997__auto___29182,out))
;
return ((function (switch__15941__auto__,c__15997__auto___29182,out){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_29178 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29178[(0)] = state_machine__15942__auto__);

(statearr_29178[(1)] = (1));

return statearr_29178;
});
var state_machine__15942__auto____1 = (function (state_29158){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_29158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e29179){if((e29179 instanceof Object)){
var ex__15945__auto__ = e29179;
var statearr_29180_29193 = state_29158;
(statearr_29180_29193[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29194 = state_29158;
state_29158 = G__29194;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_29158){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_29158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto___29182,out))
})();
var state__15999__auto__ = (function (){var statearr_29181 = f__15998__auto__.call(null);
(statearr_29181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___29182);

return statearr_29181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto___29182,out))
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
var c__15997__auto___29287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto___29287,out){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto___29287,out){
return (function (state_29264){
var state_val_29265 = (state_29264[(1)]);
if((state_val_29265 === (7))){
var inst_29246 = (state_29264[(7)]);
var inst_29246__$1 = (state_29264[(2)]);
var inst_29247 = (inst_29246__$1 == null);
var inst_29248 = cljs.core.not.call(null,inst_29247);
var state_29264__$1 = (function (){var statearr_29266 = state_29264;
(statearr_29266[(7)] = inst_29246__$1);

return statearr_29266;
})();
if(inst_29248){
var statearr_29267_29288 = state_29264__$1;
(statearr_29267_29288[(1)] = (8));

} else {
var statearr_29268_29289 = state_29264__$1;
(statearr_29268_29289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (1))){
var inst_29241 = (0);
var state_29264__$1 = (function (){var statearr_29269 = state_29264;
(statearr_29269[(8)] = inst_29241);

return statearr_29269;
})();
var statearr_29270_29290 = state_29264__$1;
(statearr_29270_29290[(2)] = null);

(statearr_29270_29290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (4))){
var state_29264__$1 = state_29264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29264__$1,(7),ch);
} else {
if((state_val_29265 === (6))){
var inst_29259 = (state_29264[(2)]);
var state_29264__$1 = state_29264;
var statearr_29271_29291 = state_29264__$1;
(statearr_29271_29291[(2)] = inst_29259);

(statearr_29271_29291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (3))){
var inst_29261 = (state_29264[(2)]);
var inst_29262 = cljs.core.async.close_BANG_.call(null,out);
var state_29264__$1 = (function (){var statearr_29272 = state_29264;
(statearr_29272[(9)] = inst_29261);

return statearr_29272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29264__$1,inst_29262);
} else {
if((state_val_29265 === (2))){
var inst_29241 = (state_29264[(8)]);
var inst_29243 = (inst_29241 < n);
var state_29264__$1 = state_29264;
if(cljs.core.truth_(inst_29243)){
var statearr_29273_29292 = state_29264__$1;
(statearr_29273_29292[(1)] = (4));

} else {
var statearr_29274_29293 = state_29264__$1;
(statearr_29274_29293[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (11))){
var inst_29241 = (state_29264[(8)]);
var inst_29251 = (state_29264[(2)]);
var inst_29252 = (inst_29241 + (1));
var inst_29241__$1 = inst_29252;
var state_29264__$1 = (function (){var statearr_29275 = state_29264;
(statearr_29275[(10)] = inst_29251);

(statearr_29275[(8)] = inst_29241__$1);

return statearr_29275;
})();
var statearr_29276_29294 = state_29264__$1;
(statearr_29276_29294[(2)] = null);

(statearr_29276_29294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (9))){
var state_29264__$1 = state_29264;
var statearr_29277_29295 = state_29264__$1;
(statearr_29277_29295[(2)] = null);

(statearr_29277_29295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (5))){
var state_29264__$1 = state_29264;
var statearr_29278_29296 = state_29264__$1;
(statearr_29278_29296[(2)] = null);

(statearr_29278_29296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (10))){
var inst_29256 = (state_29264[(2)]);
var state_29264__$1 = state_29264;
var statearr_29279_29297 = state_29264__$1;
(statearr_29279_29297[(2)] = inst_29256);

(statearr_29279_29297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (8))){
var inst_29246 = (state_29264[(7)]);
var state_29264__$1 = state_29264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29264__$1,(11),out,inst_29246);
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
});})(c__15997__auto___29287,out))
;
return ((function (switch__15941__auto__,c__15997__auto___29287,out){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_29283 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29283[(0)] = state_machine__15942__auto__);

(statearr_29283[(1)] = (1));

return statearr_29283;
});
var state_machine__15942__auto____1 = (function (state_29264){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_29264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e29284){if((e29284 instanceof Object)){
var ex__15945__auto__ = e29284;
var statearr_29285_29298 = state_29264;
(statearr_29285_29298[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29299 = state_29264;
state_29264 = G__29299;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_29264){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_29264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto___29287,out))
})();
var state__15999__auto__ = (function (){var statearr_29286 = f__15998__auto__.call(null);
(statearr_29286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___29287);

return statearr_29286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto___29287,out))
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
if(typeof cljs.core.async.t29307 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29307 = (function (ch,f,map_LT_,meta29308){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29308 = meta29308;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29307.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29307.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29307.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29307.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29310 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29310 = (function (fn1,_,meta29308,map_LT_,f,ch,meta29311){
this.fn1 = fn1;
this._ = _;
this.meta29308 = meta29308;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29311 = meta29311;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29310.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29310.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29310.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29300_SHARP_){
return f1.call(null,(((p1__29300_SHARP_ == null))?null:self__.f.call(null,p1__29300_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29312){
var self__ = this;
var _29312__$1 = this;
return self__.meta29311;
});})(___$1))
;

cljs.core.async.t29310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29312,meta29311__$1){
var self__ = this;
var _29312__$1 = this;
return (new cljs.core.async.t29310(self__.fn1,self__._,self__.meta29308,self__.map_LT_,self__.f,self__.ch,meta29311__$1));
});})(___$1))
;

cljs.core.async.t29310.cljs$lang$type = true;

cljs.core.async.t29310.cljs$lang$ctorStr = "cljs.core.async/t29310";

cljs.core.async.t29310.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13915__auto__,writer__13916__auto__,opt__13917__auto__){
return cljs.core._write.call(null,writer__13916__auto__,"cljs.core.async/t29310");
});})(___$1))
;

cljs.core.async.__GT_t29310 = ((function (___$1){
return (function __GT_t29310(fn1__$1,___$2,meta29308__$1,map_LT___$1,f__$1,ch__$1,meta29311){
return (new cljs.core.async.t29310(fn1__$1,___$2,meta29308__$1,map_LT___$1,f__$1,ch__$1,meta29311));
});})(___$1))
;

}

return (new cljs.core.async.t29310(fn1,___$1,self__.meta29308,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__13316__auto__ = ret;
if(cljs.core.truth_(and__13316__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__13316__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t29307.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29307.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29307.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29309){
var self__ = this;
var _29309__$1 = this;
return self__.meta29308;
});

cljs.core.async.t29307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29309,meta29308__$1){
var self__ = this;
var _29309__$1 = this;
return (new cljs.core.async.t29307(self__.ch,self__.f,self__.map_LT_,meta29308__$1));
});

cljs.core.async.t29307.cljs$lang$type = true;

cljs.core.async.t29307.cljs$lang$ctorStr = "cljs.core.async/t29307";

cljs.core.async.t29307.cljs$lang$ctorPrWriter = (function (this__13915__auto__,writer__13916__auto__,opt__13917__auto__){
return cljs.core._write.call(null,writer__13916__auto__,"cljs.core.async/t29307");
});

cljs.core.async.__GT_t29307 = (function __GT_t29307(ch__$1,f__$1,map_LT___$1,meta29308){
return (new cljs.core.async.t29307(ch__$1,f__$1,map_LT___$1,meta29308));
});

}

return (new cljs.core.async.t29307(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t29316 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29316 = (function (ch,f,map_GT_,meta29317){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29317 = meta29317;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29316.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29316.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29316.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29316.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29316.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29316.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29318){
var self__ = this;
var _29318__$1 = this;
return self__.meta29317;
});

cljs.core.async.t29316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29318,meta29317__$1){
var self__ = this;
var _29318__$1 = this;
return (new cljs.core.async.t29316(self__.ch,self__.f,self__.map_GT_,meta29317__$1));
});

cljs.core.async.t29316.cljs$lang$type = true;

cljs.core.async.t29316.cljs$lang$ctorStr = "cljs.core.async/t29316";

cljs.core.async.t29316.cljs$lang$ctorPrWriter = (function (this__13915__auto__,writer__13916__auto__,opt__13917__auto__){
return cljs.core._write.call(null,writer__13916__auto__,"cljs.core.async/t29316");
});

cljs.core.async.__GT_t29316 = (function __GT_t29316(ch__$1,f__$1,map_GT___$1,meta29317){
return (new cljs.core.async.t29316(ch__$1,f__$1,map_GT___$1,meta29317));
});

}

return (new cljs.core.async.t29316(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t29322 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29322 = (function (ch,p,filter_GT_,meta29323){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29323 = meta29323;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29322.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29322.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29322.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29322.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29322.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29322.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29322.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29324){
var self__ = this;
var _29324__$1 = this;
return self__.meta29323;
});

cljs.core.async.t29322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29324,meta29323__$1){
var self__ = this;
var _29324__$1 = this;
return (new cljs.core.async.t29322(self__.ch,self__.p,self__.filter_GT_,meta29323__$1));
});

cljs.core.async.t29322.cljs$lang$type = true;

cljs.core.async.t29322.cljs$lang$ctorStr = "cljs.core.async/t29322";

cljs.core.async.t29322.cljs$lang$ctorPrWriter = (function (this__13915__auto__,writer__13916__auto__,opt__13917__auto__){
return cljs.core._write.call(null,writer__13916__auto__,"cljs.core.async/t29322");
});

cljs.core.async.__GT_t29322 = (function __GT_t29322(ch__$1,p__$1,filter_GT___$1,meta29323){
return (new cljs.core.async.t29322(ch__$1,p__$1,filter_GT___$1,meta29323));
});

}

return (new cljs.core.async.t29322(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15997__auto___29407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto___29407,out){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto___29407,out){
return (function (state_29386){
var state_val_29387 = (state_29386[(1)]);
if((state_val_29387 === (7))){
var inst_29382 = (state_29386[(2)]);
var state_29386__$1 = state_29386;
var statearr_29388_29408 = state_29386__$1;
(statearr_29388_29408[(2)] = inst_29382);

(statearr_29388_29408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (1))){
var state_29386__$1 = state_29386;
var statearr_29389_29409 = state_29386__$1;
(statearr_29389_29409[(2)] = null);

(statearr_29389_29409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (4))){
var inst_29368 = (state_29386[(7)]);
var inst_29368__$1 = (state_29386[(2)]);
var inst_29369 = (inst_29368__$1 == null);
var state_29386__$1 = (function (){var statearr_29390 = state_29386;
(statearr_29390[(7)] = inst_29368__$1);

return statearr_29390;
})();
if(cljs.core.truth_(inst_29369)){
var statearr_29391_29410 = state_29386__$1;
(statearr_29391_29410[(1)] = (5));

} else {
var statearr_29392_29411 = state_29386__$1;
(statearr_29392_29411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (6))){
var inst_29368 = (state_29386[(7)]);
var inst_29373 = p.call(null,inst_29368);
var state_29386__$1 = state_29386;
if(cljs.core.truth_(inst_29373)){
var statearr_29393_29412 = state_29386__$1;
(statearr_29393_29412[(1)] = (8));

} else {
var statearr_29394_29413 = state_29386__$1;
(statearr_29394_29413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (3))){
var inst_29384 = (state_29386[(2)]);
var state_29386__$1 = state_29386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29386__$1,inst_29384);
} else {
if((state_val_29387 === (2))){
var state_29386__$1 = state_29386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29386__$1,(4),ch);
} else {
if((state_val_29387 === (11))){
var inst_29376 = (state_29386[(2)]);
var state_29386__$1 = state_29386;
var statearr_29395_29414 = state_29386__$1;
(statearr_29395_29414[(2)] = inst_29376);

(statearr_29395_29414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (9))){
var state_29386__$1 = state_29386;
var statearr_29396_29415 = state_29386__$1;
(statearr_29396_29415[(2)] = null);

(statearr_29396_29415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (5))){
var inst_29371 = cljs.core.async.close_BANG_.call(null,out);
var state_29386__$1 = state_29386;
var statearr_29397_29416 = state_29386__$1;
(statearr_29397_29416[(2)] = inst_29371);

(statearr_29397_29416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (10))){
var inst_29379 = (state_29386[(2)]);
var state_29386__$1 = (function (){var statearr_29398 = state_29386;
(statearr_29398[(8)] = inst_29379);

return statearr_29398;
})();
var statearr_29399_29417 = state_29386__$1;
(statearr_29399_29417[(2)] = null);

(statearr_29399_29417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (8))){
var inst_29368 = (state_29386[(7)]);
var state_29386__$1 = state_29386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29386__$1,(11),out,inst_29368);
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
});})(c__15997__auto___29407,out))
;
return ((function (switch__15941__auto__,c__15997__auto___29407,out){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_29403 = [null,null,null,null,null,null,null,null,null];
(statearr_29403[(0)] = state_machine__15942__auto__);

(statearr_29403[(1)] = (1));

return statearr_29403;
});
var state_machine__15942__auto____1 = (function (state_29386){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_29386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e29404){if((e29404 instanceof Object)){
var ex__15945__auto__ = e29404;
var statearr_29405_29418 = state_29386;
(statearr_29405_29418[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29419 = state_29386;
state_29386 = G__29419;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_29386){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_29386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto___29407,out))
})();
var state__15999__auto__ = (function (){var statearr_29406 = f__15998__auto__.call(null);
(statearr_29406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___29407);

return statearr_29406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto___29407,out))
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
var c__15997__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto__){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto__){
return (function (state_29585){
var state_val_29586 = (state_29585[(1)]);
if((state_val_29586 === (7))){
var inst_29581 = (state_29585[(2)]);
var state_29585__$1 = state_29585;
var statearr_29587_29628 = state_29585__$1;
(statearr_29587_29628[(2)] = inst_29581);

(statearr_29587_29628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (20))){
var inst_29551 = (state_29585[(7)]);
var inst_29562 = (state_29585[(2)]);
var inst_29563 = cljs.core.next.call(null,inst_29551);
var inst_29537 = inst_29563;
var inst_29538 = null;
var inst_29539 = (0);
var inst_29540 = (0);
var state_29585__$1 = (function (){var statearr_29588 = state_29585;
(statearr_29588[(8)] = inst_29538);

(statearr_29588[(9)] = inst_29539);

(statearr_29588[(10)] = inst_29562);

(statearr_29588[(11)] = inst_29537);

(statearr_29588[(12)] = inst_29540);

return statearr_29588;
})();
var statearr_29589_29629 = state_29585__$1;
(statearr_29589_29629[(2)] = null);

(statearr_29589_29629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (1))){
var state_29585__$1 = state_29585;
var statearr_29590_29630 = state_29585__$1;
(statearr_29590_29630[(2)] = null);

(statearr_29590_29630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (4))){
var inst_29526 = (state_29585[(13)]);
var inst_29526__$1 = (state_29585[(2)]);
var inst_29527 = (inst_29526__$1 == null);
var state_29585__$1 = (function (){var statearr_29591 = state_29585;
(statearr_29591[(13)] = inst_29526__$1);

return statearr_29591;
})();
if(cljs.core.truth_(inst_29527)){
var statearr_29592_29631 = state_29585__$1;
(statearr_29592_29631[(1)] = (5));

} else {
var statearr_29593_29632 = state_29585__$1;
(statearr_29593_29632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (15))){
var state_29585__$1 = state_29585;
var statearr_29597_29633 = state_29585__$1;
(statearr_29597_29633[(2)] = null);

(statearr_29597_29633[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (21))){
var state_29585__$1 = state_29585;
var statearr_29598_29634 = state_29585__$1;
(statearr_29598_29634[(2)] = null);

(statearr_29598_29634[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (13))){
var inst_29538 = (state_29585[(8)]);
var inst_29539 = (state_29585[(9)]);
var inst_29537 = (state_29585[(11)]);
var inst_29540 = (state_29585[(12)]);
var inst_29547 = (state_29585[(2)]);
var inst_29548 = (inst_29540 + (1));
var tmp29594 = inst_29538;
var tmp29595 = inst_29539;
var tmp29596 = inst_29537;
var inst_29537__$1 = tmp29596;
var inst_29538__$1 = tmp29594;
var inst_29539__$1 = tmp29595;
var inst_29540__$1 = inst_29548;
var state_29585__$1 = (function (){var statearr_29599 = state_29585;
(statearr_29599[(14)] = inst_29547);

(statearr_29599[(8)] = inst_29538__$1);

(statearr_29599[(9)] = inst_29539__$1);

(statearr_29599[(11)] = inst_29537__$1);

(statearr_29599[(12)] = inst_29540__$1);

return statearr_29599;
})();
var statearr_29600_29635 = state_29585__$1;
(statearr_29600_29635[(2)] = null);

(statearr_29600_29635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (22))){
var state_29585__$1 = state_29585;
var statearr_29601_29636 = state_29585__$1;
(statearr_29601_29636[(2)] = null);

(statearr_29601_29636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (6))){
var inst_29526 = (state_29585[(13)]);
var inst_29535 = f.call(null,inst_29526);
var inst_29536 = cljs.core.seq.call(null,inst_29535);
var inst_29537 = inst_29536;
var inst_29538 = null;
var inst_29539 = (0);
var inst_29540 = (0);
var state_29585__$1 = (function (){var statearr_29602 = state_29585;
(statearr_29602[(8)] = inst_29538);

(statearr_29602[(9)] = inst_29539);

(statearr_29602[(11)] = inst_29537);

(statearr_29602[(12)] = inst_29540);

return statearr_29602;
})();
var statearr_29603_29637 = state_29585__$1;
(statearr_29603_29637[(2)] = null);

(statearr_29603_29637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (17))){
var inst_29551 = (state_29585[(7)]);
var inst_29555 = cljs.core.chunk_first.call(null,inst_29551);
var inst_29556 = cljs.core.chunk_rest.call(null,inst_29551);
var inst_29557 = cljs.core.count.call(null,inst_29555);
var inst_29537 = inst_29556;
var inst_29538 = inst_29555;
var inst_29539 = inst_29557;
var inst_29540 = (0);
var state_29585__$1 = (function (){var statearr_29604 = state_29585;
(statearr_29604[(8)] = inst_29538);

(statearr_29604[(9)] = inst_29539);

(statearr_29604[(11)] = inst_29537);

(statearr_29604[(12)] = inst_29540);

return statearr_29604;
})();
var statearr_29605_29638 = state_29585__$1;
(statearr_29605_29638[(2)] = null);

(statearr_29605_29638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (3))){
var inst_29583 = (state_29585[(2)]);
var state_29585__$1 = state_29585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29585__$1,inst_29583);
} else {
if((state_val_29586 === (12))){
var inst_29571 = (state_29585[(2)]);
var state_29585__$1 = state_29585;
var statearr_29606_29639 = state_29585__$1;
(statearr_29606_29639[(2)] = inst_29571);

(statearr_29606_29639[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (2))){
var state_29585__$1 = state_29585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29585__$1,(4),in$);
} else {
if((state_val_29586 === (23))){
var inst_29579 = (state_29585[(2)]);
var state_29585__$1 = state_29585;
var statearr_29607_29640 = state_29585__$1;
(statearr_29607_29640[(2)] = inst_29579);

(statearr_29607_29640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (19))){
var inst_29566 = (state_29585[(2)]);
var state_29585__$1 = state_29585;
var statearr_29608_29641 = state_29585__$1;
(statearr_29608_29641[(2)] = inst_29566);

(statearr_29608_29641[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (11))){
var inst_29537 = (state_29585[(11)]);
var inst_29551 = (state_29585[(7)]);
var inst_29551__$1 = cljs.core.seq.call(null,inst_29537);
var state_29585__$1 = (function (){var statearr_29609 = state_29585;
(statearr_29609[(7)] = inst_29551__$1);

return statearr_29609;
})();
if(inst_29551__$1){
var statearr_29610_29642 = state_29585__$1;
(statearr_29610_29642[(1)] = (14));

} else {
var statearr_29611_29643 = state_29585__$1;
(statearr_29611_29643[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (9))){
var inst_29573 = (state_29585[(2)]);
var inst_29574 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29585__$1 = (function (){var statearr_29612 = state_29585;
(statearr_29612[(15)] = inst_29573);

return statearr_29612;
})();
if(cljs.core.truth_(inst_29574)){
var statearr_29613_29644 = state_29585__$1;
(statearr_29613_29644[(1)] = (21));

} else {
var statearr_29614_29645 = state_29585__$1;
(statearr_29614_29645[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (5))){
var inst_29529 = cljs.core.async.close_BANG_.call(null,out);
var state_29585__$1 = state_29585;
var statearr_29615_29646 = state_29585__$1;
(statearr_29615_29646[(2)] = inst_29529);

(statearr_29615_29646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (14))){
var inst_29551 = (state_29585[(7)]);
var inst_29553 = cljs.core.chunked_seq_QMARK_.call(null,inst_29551);
var state_29585__$1 = state_29585;
if(inst_29553){
var statearr_29616_29647 = state_29585__$1;
(statearr_29616_29647[(1)] = (17));

} else {
var statearr_29617_29648 = state_29585__$1;
(statearr_29617_29648[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (16))){
var inst_29569 = (state_29585[(2)]);
var state_29585__$1 = state_29585;
var statearr_29618_29649 = state_29585__$1;
(statearr_29618_29649[(2)] = inst_29569);

(statearr_29618_29649[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (10))){
var inst_29538 = (state_29585[(8)]);
var inst_29540 = (state_29585[(12)]);
var inst_29545 = cljs.core._nth.call(null,inst_29538,inst_29540);
var state_29585__$1 = state_29585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29585__$1,(13),out,inst_29545);
} else {
if((state_val_29586 === (18))){
var inst_29551 = (state_29585[(7)]);
var inst_29560 = cljs.core.first.call(null,inst_29551);
var state_29585__$1 = state_29585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29585__$1,(20),out,inst_29560);
} else {
if((state_val_29586 === (8))){
var inst_29539 = (state_29585[(9)]);
var inst_29540 = (state_29585[(12)]);
var inst_29542 = (inst_29540 < inst_29539);
var inst_29543 = inst_29542;
var state_29585__$1 = state_29585;
if(cljs.core.truth_(inst_29543)){
var statearr_29619_29650 = state_29585__$1;
(statearr_29619_29650[(1)] = (10));

} else {
var statearr_29620_29651 = state_29585__$1;
(statearr_29620_29651[(1)] = (11));

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
});})(c__15997__auto__))
;
return ((function (switch__15941__auto__,c__15997__auto__){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_29624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29624[(0)] = state_machine__15942__auto__);

(statearr_29624[(1)] = (1));

return statearr_29624;
});
var state_machine__15942__auto____1 = (function (state_29585){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_29585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e29625){if((e29625 instanceof Object)){
var ex__15945__auto__ = e29625;
var statearr_29626_29652 = state_29585;
(statearr_29626_29652[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29653 = state_29585;
state_29585 = G__29653;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_29585){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_29585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto__))
})();
var state__15999__auto__ = (function (){var statearr_29627 = f__15998__auto__.call(null);
(statearr_29627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto__);

return statearr_29627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto__))
);

return c__15997__auto__;
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
var c__15997__auto___29750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto___29750,out){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto___29750,out){
return (function (state_29725){
var state_val_29726 = (state_29725[(1)]);
if((state_val_29726 === (7))){
var inst_29720 = (state_29725[(2)]);
var state_29725__$1 = state_29725;
var statearr_29727_29751 = state_29725__$1;
(statearr_29727_29751[(2)] = inst_29720);

(statearr_29727_29751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (1))){
var inst_29702 = null;
var state_29725__$1 = (function (){var statearr_29728 = state_29725;
(statearr_29728[(7)] = inst_29702);

return statearr_29728;
})();
var statearr_29729_29752 = state_29725__$1;
(statearr_29729_29752[(2)] = null);

(statearr_29729_29752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (4))){
var inst_29705 = (state_29725[(8)]);
var inst_29705__$1 = (state_29725[(2)]);
var inst_29706 = (inst_29705__$1 == null);
var inst_29707 = cljs.core.not.call(null,inst_29706);
var state_29725__$1 = (function (){var statearr_29730 = state_29725;
(statearr_29730[(8)] = inst_29705__$1);

return statearr_29730;
})();
if(inst_29707){
var statearr_29731_29753 = state_29725__$1;
(statearr_29731_29753[(1)] = (5));

} else {
var statearr_29732_29754 = state_29725__$1;
(statearr_29732_29754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (6))){
var state_29725__$1 = state_29725;
var statearr_29733_29755 = state_29725__$1;
(statearr_29733_29755[(2)] = null);

(statearr_29733_29755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (3))){
var inst_29722 = (state_29725[(2)]);
var inst_29723 = cljs.core.async.close_BANG_.call(null,out);
var state_29725__$1 = (function (){var statearr_29734 = state_29725;
(statearr_29734[(9)] = inst_29722);

return statearr_29734;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29725__$1,inst_29723);
} else {
if((state_val_29726 === (2))){
var state_29725__$1 = state_29725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29725__$1,(4),ch);
} else {
if((state_val_29726 === (11))){
var inst_29705 = (state_29725[(8)]);
var inst_29714 = (state_29725[(2)]);
var inst_29702 = inst_29705;
var state_29725__$1 = (function (){var statearr_29735 = state_29725;
(statearr_29735[(10)] = inst_29714);

(statearr_29735[(7)] = inst_29702);

return statearr_29735;
})();
var statearr_29736_29756 = state_29725__$1;
(statearr_29736_29756[(2)] = null);

(statearr_29736_29756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (9))){
var inst_29705 = (state_29725[(8)]);
var state_29725__$1 = state_29725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29725__$1,(11),out,inst_29705);
} else {
if((state_val_29726 === (5))){
var inst_29702 = (state_29725[(7)]);
var inst_29705 = (state_29725[(8)]);
var inst_29709 = cljs.core._EQ_.call(null,inst_29705,inst_29702);
var state_29725__$1 = state_29725;
if(inst_29709){
var statearr_29738_29757 = state_29725__$1;
(statearr_29738_29757[(1)] = (8));

} else {
var statearr_29739_29758 = state_29725__$1;
(statearr_29739_29758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (10))){
var inst_29717 = (state_29725[(2)]);
var state_29725__$1 = state_29725;
var statearr_29740_29759 = state_29725__$1;
(statearr_29740_29759[(2)] = inst_29717);

(statearr_29740_29759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29726 === (8))){
var inst_29702 = (state_29725[(7)]);
var tmp29737 = inst_29702;
var inst_29702__$1 = tmp29737;
var state_29725__$1 = (function (){var statearr_29741 = state_29725;
(statearr_29741[(7)] = inst_29702__$1);

return statearr_29741;
})();
var statearr_29742_29760 = state_29725__$1;
(statearr_29742_29760[(2)] = null);

(statearr_29742_29760[(1)] = (2));


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
});})(c__15997__auto___29750,out))
;
return ((function (switch__15941__auto__,c__15997__auto___29750,out){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_29746 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29746[(0)] = state_machine__15942__auto__);

(statearr_29746[(1)] = (1));

return statearr_29746;
});
var state_machine__15942__auto____1 = (function (state_29725){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_29725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e29747){if((e29747 instanceof Object)){
var ex__15945__auto__ = e29747;
var statearr_29748_29761 = state_29725;
(statearr_29748_29761[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29762 = state_29725;
state_29725 = G__29762;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_29725){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_29725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto___29750,out))
})();
var state__15999__auto__ = (function (){var statearr_29749 = f__15998__auto__.call(null);
(statearr_29749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___29750);

return statearr_29749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto___29750,out))
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
var c__15997__auto___29897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto___29897,out){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto___29897,out){
return (function (state_29867){
var state_val_29868 = (state_29867[(1)]);
if((state_val_29868 === (7))){
var inst_29863 = (state_29867[(2)]);
var state_29867__$1 = state_29867;
var statearr_29869_29898 = state_29867__$1;
(statearr_29869_29898[(2)] = inst_29863);

(statearr_29869_29898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29868 === (1))){
var inst_29830 = (new Array(n));
var inst_29831 = inst_29830;
var inst_29832 = (0);
var state_29867__$1 = (function (){var statearr_29870 = state_29867;
(statearr_29870[(7)] = inst_29831);

(statearr_29870[(8)] = inst_29832);

return statearr_29870;
})();
var statearr_29871_29899 = state_29867__$1;
(statearr_29871_29899[(2)] = null);

(statearr_29871_29899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29868 === (4))){
var inst_29835 = (state_29867[(9)]);
var inst_29835__$1 = (state_29867[(2)]);
var inst_29836 = (inst_29835__$1 == null);
var inst_29837 = cljs.core.not.call(null,inst_29836);
var state_29867__$1 = (function (){var statearr_29872 = state_29867;
(statearr_29872[(9)] = inst_29835__$1);

return statearr_29872;
})();
if(inst_29837){
var statearr_29873_29900 = state_29867__$1;
(statearr_29873_29900[(1)] = (5));

} else {
var statearr_29874_29901 = state_29867__$1;
(statearr_29874_29901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29868 === (15))){
var inst_29857 = (state_29867[(2)]);
var state_29867__$1 = state_29867;
var statearr_29875_29902 = state_29867__$1;
(statearr_29875_29902[(2)] = inst_29857);

(statearr_29875_29902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29868 === (13))){
var state_29867__$1 = state_29867;
var statearr_29876_29903 = state_29867__$1;
(statearr_29876_29903[(2)] = null);

(statearr_29876_29903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29868 === (6))){
var inst_29832 = (state_29867[(8)]);
var inst_29853 = (inst_29832 > (0));
var state_29867__$1 = state_29867;
if(cljs.core.truth_(inst_29853)){
var statearr_29877_29904 = state_29867__$1;
(statearr_29877_29904[(1)] = (12));

} else {
var statearr_29878_29905 = state_29867__$1;
(statearr_29878_29905[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29868 === (3))){
var inst_29865 = (state_29867[(2)]);
var state_29867__$1 = state_29867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29867__$1,inst_29865);
} else {
if((state_val_29868 === (12))){
var inst_29831 = (state_29867[(7)]);
var inst_29855 = cljs.core.vec.call(null,inst_29831);
var state_29867__$1 = state_29867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29867__$1,(15),out,inst_29855);
} else {
if((state_val_29868 === (2))){
var state_29867__$1 = state_29867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29867__$1,(4),ch);
} else {
if((state_val_29868 === (11))){
var inst_29847 = (state_29867[(2)]);
var inst_29848 = (new Array(n));
var inst_29831 = inst_29848;
var inst_29832 = (0);
var state_29867__$1 = (function (){var statearr_29879 = state_29867;
(statearr_29879[(7)] = inst_29831);

(statearr_29879[(8)] = inst_29832);

(statearr_29879[(10)] = inst_29847);

return statearr_29879;
})();
var statearr_29880_29906 = state_29867__$1;
(statearr_29880_29906[(2)] = null);

(statearr_29880_29906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29868 === (9))){
var inst_29831 = (state_29867[(7)]);
var inst_29845 = cljs.core.vec.call(null,inst_29831);
var state_29867__$1 = state_29867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29867__$1,(11),out,inst_29845);
} else {
if((state_val_29868 === (5))){
var inst_29831 = (state_29867[(7)]);
var inst_29832 = (state_29867[(8)]);
var inst_29835 = (state_29867[(9)]);
var inst_29840 = (state_29867[(11)]);
var inst_29839 = (inst_29831[inst_29832] = inst_29835);
var inst_29840__$1 = (inst_29832 + (1));
var inst_29841 = (inst_29840__$1 < n);
var state_29867__$1 = (function (){var statearr_29881 = state_29867;
(statearr_29881[(12)] = inst_29839);

(statearr_29881[(11)] = inst_29840__$1);

return statearr_29881;
})();
if(cljs.core.truth_(inst_29841)){
var statearr_29882_29907 = state_29867__$1;
(statearr_29882_29907[(1)] = (8));

} else {
var statearr_29883_29908 = state_29867__$1;
(statearr_29883_29908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29868 === (14))){
var inst_29860 = (state_29867[(2)]);
var inst_29861 = cljs.core.async.close_BANG_.call(null,out);
var state_29867__$1 = (function (){var statearr_29885 = state_29867;
(statearr_29885[(13)] = inst_29860);

return statearr_29885;
})();
var statearr_29886_29909 = state_29867__$1;
(statearr_29886_29909[(2)] = inst_29861);

(statearr_29886_29909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29868 === (10))){
var inst_29851 = (state_29867[(2)]);
var state_29867__$1 = state_29867;
var statearr_29887_29910 = state_29867__$1;
(statearr_29887_29910[(2)] = inst_29851);

(statearr_29887_29910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29868 === (8))){
var inst_29831 = (state_29867[(7)]);
var inst_29840 = (state_29867[(11)]);
var tmp29884 = inst_29831;
var inst_29831__$1 = tmp29884;
var inst_29832 = inst_29840;
var state_29867__$1 = (function (){var statearr_29888 = state_29867;
(statearr_29888[(7)] = inst_29831__$1);

(statearr_29888[(8)] = inst_29832);

return statearr_29888;
})();
var statearr_29889_29911 = state_29867__$1;
(statearr_29889_29911[(2)] = null);

(statearr_29889_29911[(1)] = (2));


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
});})(c__15997__auto___29897,out))
;
return ((function (switch__15941__auto__,c__15997__auto___29897,out){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_29893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29893[(0)] = state_machine__15942__auto__);

(statearr_29893[(1)] = (1));

return statearr_29893;
});
var state_machine__15942__auto____1 = (function (state_29867){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_29867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e29894){if((e29894 instanceof Object)){
var ex__15945__auto__ = e29894;
var statearr_29895_29912 = state_29867;
(statearr_29895_29912[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29913 = state_29867;
state_29867 = G__29913;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_29867){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_29867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto___29897,out))
})();
var state__15999__auto__ = (function (){var statearr_29896 = f__15998__auto__.call(null);
(statearr_29896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___29897);

return statearr_29896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto___29897,out))
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
var c__15997__auto___30056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15997__auto___30056,out){
return (function (){
var f__15998__auto__ = (function (){var switch__15941__auto__ = ((function (c__15997__auto___30056,out){
return (function (state_30026){
var state_val_30027 = (state_30026[(1)]);
if((state_val_30027 === (7))){
var inst_30022 = (state_30026[(2)]);
var state_30026__$1 = state_30026;
var statearr_30028_30057 = state_30026__$1;
(statearr_30028_30057[(2)] = inst_30022);

(statearr_30028_30057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (1))){
var inst_29985 = [];
var inst_29986 = inst_29985;
var inst_29987 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30026__$1 = (function (){var statearr_30029 = state_30026;
(statearr_30029[(7)] = inst_29986);

(statearr_30029[(8)] = inst_29987);

return statearr_30029;
})();
var statearr_30030_30058 = state_30026__$1;
(statearr_30030_30058[(2)] = null);

(statearr_30030_30058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (4))){
var inst_29990 = (state_30026[(9)]);
var inst_29990__$1 = (state_30026[(2)]);
var inst_29991 = (inst_29990__$1 == null);
var inst_29992 = cljs.core.not.call(null,inst_29991);
var state_30026__$1 = (function (){var statearr_30031 = state_30026;
(statearr_30031[(9)] = inst_29990__$1);

return statearr_30031;
})();
if(inst_29992){
var statearr_30032_30059 = state_30026__$1;
(statearr_30032_30059[(1)] = (5));

} else {
var statearr_30033_30060 = state_30026__$1;
(statearr_30033_30060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (15))){
var inst_30016 = (state_30026[(2)]);
var state_30026__$1 = state_30026;
var statearr_30034_30061 = state_30026__$1;
(statearr_30034_30061[(2)] = inst_30016);

(statearr_30034_30061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (13))){
var state_30026__$1 = state_30026;
var statearr_30035_30062 = state_30026__$1;
(statearr_30035_30062[(2)] = null);

(statearr_30035_30062[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (6))){
var inst_29986 = (state_30026[(7)]);
var inst_30011 = inst_29986.length;
var inst_30012 = (inst_30011 > (0));
var state_30026__$1 = state_30026;
if(cljs.core.truth_(inst_30012)){
var statearr_30036_30063 = state_30026__$1;
(statearr_30036_30063[(1)] = (12));

} else {
var statearr_30037_30064 = state_30026__$1;
(statearr_30037_30064[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (3))){
var inst_30024 = (state_30026[(2)]);
var state_30026__$1 = state_30026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30026__$1,inst_30024);
} else {
if((state_val_30027 === (12))){
var inst_29986 = (state_30026[(7)]);
var inst_30014 = cljs.core.vec.call(null,inst_29986);
var state_30026__$1 = state_30026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30026__$1,(15),out,inst_30014);
} else {
if((state_val_30027 === (2))){
var state_30026__$1 = state_30026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30026__$1,(4),ch);
} else {
if((state_val_30027 === (11))){
var inst_29994 = (state_30026[(10)]);
var inst_29990 = (state_30026[(9)]);
var inst_30004 = (state_30026[(2)]);
var inst_30005 = [];
var inst_30006 = inst_30005.push(inst_29990);
var inst_29986 = inst_30005;
var inst_29987 = inst_29994;
var state_30026__$1 = (function (){var statearr_30038 = state_30026;
(statearr_30038[(11)] = inst_30004);

(statearr_30038[(7)] = inst_29986);

(statearr_30038[(8)] = inst_29987);

(statearr_30038[(12)] = inst_30006);

return statearr_30038;
})();
var statearr_30039_30065 = state_30026__$1;
(statearr_30039_30065[(2)] = null);

(statearr_30039_30065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (9))){
var inst_29986 = (state_30026[(7)]);
var inst_30002 = cljs.core.vec.call(null,inst_29986);
var state_30026__$1 = state_30026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30026__$1,(11),out,inst_30002);
} else {
if((state_val_30027 === (5))){
var inst_29994 = (state_30026[(10)]);
var inst_29987 = (state_30026[(8)]);
var inst_29990 = (state_30026[(9)]);
var inst_29994__$1 = f.call(null,inst_29990);
var inst_29995 = cljs.core._EQ_.call(null,inst_29994__$1,inst_29987);
var inst_29996 = cljs.core.keyword_identical_QMARK_.call(null,inst_29987,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29997 = (inst_29995) || (inst_29996);
var state_30026__$1 = (function (){var statearr_30040 = state_30026;
(statearr_30040[(10)] = inst_29994__$1);

return statearr_30040;
})();
if(cljs.core.truth_(inst_29997)){
var statearr_30041_30066 = state_30026__$1;
(statearr_30041_30066[(1)] = (8));

} else {
var statearr_30042_30067 = state_30026__$1;
(statearr_30042_30067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (14))){
var inst_30019 = (state_30026[(2)]);
var inst_30020 = cljs.core.async.close_BANG_.call(null,out);
var state_30026__$1 = (function (){var statearr_30044 = state_30026;
(statearr_30044[(13)] = inst_30019);

return statearr_30044;
})();
var statearr_30045_30068 = state_30026__$1;
(statearr_30045_30068[(2)] = inst_30020);

(statearr_30045_30068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (10))){
var inst_30009 = (state_30026[(2)]);
var state_30026__$1 = state_30026;
var statearr_30046_30069 = state_30026__$1;
(statearr_30046_30069[(2)] = inst_30009);

(statearr_30046_30069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (8))){
var inst_29994 = (state_30026[(10)]);
var inst_29986 = (state_30026[(7)]);
var inst_29990 = (state_30026[(9)]);
var inst_29999 = inst_29986.push(inst_29990);
var tmp30043 = inst_29986;
var inst_29986__$1 = tmp30043;
var inst_29987 = inst_29994;
var state_30026__$1 = (function (){var statearr_30047 = state_30026;
(statearr_30047[(7)] = inst_29986__$1);

(statearr_30047[(14)] = inst_29999);

(statearr_30047[(8)] = inst_29987);

return statearr_30047;
})();
var statearr_30048_30070 = state_30026__$1;
(statearr_30048_30070[(2)] = null);

(statearr_30048_30070[(1)] = (2));


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
});})(c__15997__auto___30056,out))
;
return ((function (switch__15941__auto__,c__15997__auto___30056,out){
return (function() {
var state_machine__15942__auto__ = null;
var state_machine__15942__auto____0 = (function (){
var statearr_30052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30052[(0)] = state_machine__15942__auto__);

(statearr_30052[(1)] = (1));

return statearr_30052;
});
var state_machine__15942__auto____1 = (function (state_30026){
while(true){
var ret_value__15943__auto__ = (function (){try{while(true){
var result__15944__auto__ = switch__15941__auto__.call(null,state_30026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15944__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15944__auto__;
}
break;
}
}catch (e30053){if((e30053 instanceof Object)){
var ex__15945__auto__ = e30053;
var statearr_30054_30071 = state_30026;
(statearr_30054_30071[(5)] = ex__15945__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30072 = state_30026;
state_30026 = G__30072;
continue;
} else {
return ret_value__15943__auto__;
}
break;
}
});
state_machine__15942__auto__ = function(state_30026){
switch(arguments.length){
case 0:
return state_machine__15942__auto____0.call(this);
case 1:
return state_machine__15942__auto____1.call(this,state_30026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15942__auto____0;
state_machine__15942__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15942__auto____1;
return state_machine__15942__auto__;
})()
;})(switch__15941__auto__,c__15997__auto___30056,out))
})();
var state__15999__auto__ = (function (){var statearr_30055 = f__15998__auto__.call(null);
(statearr_30055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15997__auto___30056);

return statearr_30055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15999__auto__);
});})(c__15997__auto___30056,out))
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