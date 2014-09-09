// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23103 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23103 = (function (f,fn_handler,meta23104){
this.f = f;
this.fn_handler = fn_handler;
this.meta23104 = meta23104;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23103.cljs$lang$type = true;
cljs.core.async.t23103.cljs$lang$ctorStr = "cljs.core.async/t23103";
cljs.core.async.t23103.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t23103");
});
cljs.core.async.t23103.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23103.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23103.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23105){var self__ = this;
var _23105__$1 = this;return self__.meta23104;
});
cljs.core.async.t23103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23105,meta23104__$1){var self__ = this;
var _23105__$1 = this;return (new cljs.core.async.t23103(self__.f,self__.fn_handler,meta23104__$1));
});
cljs.core.async.__GT_t23103 = (function __GT_t23103(f__$1,fn_handler__$1,meta23104){return (new cljs.core.async.t23103(f__$1,fn_handler__$1,meta23104));
});
}
return (new cljs.core.async.t23103(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23107 = buff;if(G__23107)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__23107.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23107.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23107);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23107);
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
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_23108 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23108);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23108,ret){
return (function (){return fn1.call(null,val_23108);
});})(val_23108,ret))
);
}
} else
{}
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
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4416__auto___23109 = n;var x_23110 = (0);while(true){
if((x_23110 < n__4416__auto___23109))
{(a[x_23110] = (0));
{
var G__23111 = (x_23110 + (1));
x_23110 = G__23111;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__23112 = (i + (1));
i = G__23112;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23116 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23116 = (function (flag,alt_flag,meta23117){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23117 = meta23117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23116.cljs$lang$type = true;
cljs.core.async.t23116.cljs$lang$ctorStr = "cljs.core.async/t23116";
cljs.core.async.t23116.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t23116");
});})(flag))
;
cljs.core.async.t23116.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23116.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23118){var self__ = this;
var _23118__$1 = this;return self__.meta23117;
});})(flag))
;
cljs.core.async.t23116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23118,meta23117__$1){var self__ = this;
var _23118__$1 = this;return (new cljs.core.async.t23116(self__.flag,self__.alt_flag,meta23117__$1));
});})(flag))
;
cljs.core.async.__GT_t23116 = ((function (flag){
return (function __GT_t23116(flag__$1,alt_flag__$1,meta23117){return (new cljs.core.async.t23116(flag__$1,alt_flag__$1,meta23117));
});})(flag))
;
}
return (new cljs.core.async.t23116(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23122 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23122 = (function (cb,flag,alt_handler,meta23123){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23123 = meta23123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23122.cljs$lang$type = true;
cljs.core.async.t23122.cljs$lang$ctorStr = "cljs.core.async/t23122";
cljs.core.async.t23122.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t23122");
});
cljs.core.async.t23122.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23124){var self__ = this;
var _23124__$1 = this;return self__.meta23123;
});
cljs.core.async.t23122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23124,meta23123__$1){var self__ = this;
var _23124__$1 = this;return (new cljs.core.async.t23122(self__.cb,self__.flag,self__.alt_handler,meta23123__$1));
});
cljs.core.async.__GT_t23122 = (function __GT_t23122(cb__$1,flag__$1,alt_handler__$1,meta23123){return (new cljs.core.async.t23122(cb__$1,flag__$1,alt_handler__$1,meta23123));
});
}
return (new cljs.core.async.t23122(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23125_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23125_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23126_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23126_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3560__auto__ = wport;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__23127 = (i + (1));
i = G__23127;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3560__auto__ = ret;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3548__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3548__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3548__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
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
var alts_BANG___delegate = function (ports,p__23128){var map__23130 = p__23128;var map__23130__$1 = ((cljs.core.seq_QMARK_.call(null,map__23130))?cljs.core.apply.call(null,cljs.core.hash_map,map__23130):map__23130);var opts = map__23130__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23128 = null;if (arguments.length > 1) {
  p__23128 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23128);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23131){
var ports = cljs.core.first(arglist__23131);
var p__23128 = cljs.core.rest(arglist__23131);
return alts_BANG___delegate(ports,p__23128);
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
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6376__auto___23226 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___23226){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___23226){
return (function (state_23202){var state_val_23203 = (state_23202[(1)]);if((state_val_23203 === (7)))
{var inst_23198 = (state_23202[(2)]);var state_23202__$1 = state_23202;var statearr_23204_23227 = state_23202__$1;(statearr_23204_23227[(2)] = inst_23198);
(statearr_23204_23227[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23203 === (1)))
{var state_23202__$1 = state_23202;var statearr_23205_23228 = state_23202__$1;(statearr_23205_23228[(2)] = null);
(statearr_23205_23228[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23203 === (4)))
{var inst_23181 = (state_23202[(7)]);var inst_23181__$1 = (state_23202[(2)]);var inst_23182 = (inst_23181__$1 == null);var state_23202__$1 = (function (){var statearr_23206 = state_23202;(statearr_23206[(7)] = inst_23181__$1);
return statearr_23206;
})();if(cljs.core.truth_(inst_23182))
{var statearr_23207_23229 = state_23202__$1;(statearr_23207_23229[(1)] = (5));
} else
{var statearr_23208_23230 = state_23202__$1;(statearr_23208_23230[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23203 === (13)))
{var state_23202__$1 = state_23202;var statearr_23209_23231 = state_23202__$1;(statearr_23209_23231[(2)] = null);
(statearr_23209_23231[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23203 === (6)))
{var inst_23181 = (state_23202[(7)]);var state_23202__$1 = state_23202;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23202__$1,(11),to,inst_23181);
} else
{if((state_val_23203 === (3)))
{var inst_23200 = (state_23202[(2)]);var state_23202__$1 = state_23202;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23202__$1,inst_23200);
} else
{if((state_val_23203 === (12)))
{var state_23202__$1 = state_23202;var statearr_23210_23232 = state_23202__$1;(statearr_23210_23232[(2)] = null);
(statearr_23210_23232[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23203 === (2)))
{var state_23202__$1 = state_23202;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23202__$1,(4),from);
} else
{if((state_val_23203 === (11)))
{var inst_23191 = (state_23202[(2)]);var state_23202__$1 = state_23202;if(cljs.core.truth_(inst_23191))
{var statearr_23211_23233 = state_23202__$1;(statearr_23211_23233[(1)] = (12));
} else
{var statearr_23212_23234 = state_23202__$1;(statearr_23212_23234[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23203 === (9)))
{var state_23202__$1 = state_23202;var statearr_23213_23235 = state_23202__$1;(statearr_23213_23235[(2)] = null);
(statearr_23213_23235[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23203 === (5)))
{var state_23202__$1 = state_23202;if(cljs.core.truth_(close_QMARK_))
{var statearr_23214_23236 = state_23202__$1;(statearr_23214_23236[(1)] = (8));
} else
{var statearr_23215_23237 = state_23202__$1;(statearr_23215_23237[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23203 === (14)))
{var inst_23196 = (state_23202[(2)]);var state_23202__$1 = state_23202;var statearr_23216_23238 = state_23202__$1;(statearr_23216_23238[(2)] = inst_23196);
(statearr_23216_23238[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23203 === (10)))
{var inst_23188 = (state_23202[(2)]);var state_23202__$1 = state_23202;var statearr_23217_23239 = state_23202__$1;(statearr_23217_23239[(2)] = inst_23188);
(statearr_23217_23239[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23203 === (8)))
{var inst_23185 = cljs.core.async.close_BANG_.call(null,to);var state_23202__$1 = state_23202;var statearr_23218_23240 = state_23202__$1;(statearr_23218_23240[(2)] = inst_23185);
(statearr_23218_23240[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__6376__auto___23226))
;return ((function (switch__6361__auto__,c__6376__auto___23226){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_23222 = [null,null,null,null,null,null,null,null];(statearr_23222[(0)] = state_machine__6362__auto__);
(statearr_23222[(1)] = (1));
return statearr_23222;
});
var state_machine__6362__auto____1 = (function (state_23202){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_23202);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e23223){if((e23223 instanceof Object))
{var ex__6365__auto__ = e23223;var statearr_23224_23241 = state_23202;(statearr_23224_23241[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23202);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23223;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23242 = state_23202;
state_23202 = G__23242;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_23202){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_23202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___23226))
})();var state__6378__auto__ = (function (){var statearr_23225 = f__6377__auto__.call(null);(statearr_23225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___23226);
return statearr_23225;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___23226))
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
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__23426){var vec__23427 = p__23426;var v = cljs.core.nth.call(null,vec__23427,(0),null);var p = cljs.core.nth.call(null,vec__23427,(1),null);var job = vec__23427;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6376__auto___23609 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___23609,res,vec__23427,v,p,job,jobs,results){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___23609,res,vec__23427,v,p,job,jobs,results){
return (function (state_23432){var state_val_23433 = (state_23432[(1)]);if((state_val_23433 === (2)))
{var inst_23429 = (state_23432[(2)]);var inst_23430 = cljs.core.async.close_BANG_.call(null,res);var state_23432__$1 = (function (){var statearr_23434 = state_23432;(statearr_23434[(7)] = inst_23429);
return statearr_23434;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23432__$1,inst_23430);
} else
{if((state_val_23433 === (1)))
{var state_23432__$1 = state_23432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23432__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6376__auto___23609,res,vec__23427,v,p,job,jobs,results))
;return ((function (switch__6361__auto__,c__6376__auto___23609,res,vec__23427,v,p,job,jobs,results){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_23438 = [null,null,null,null,null,null,null,null];(statearr_23438[(0)] = state_machine__6362__auto__);
(statearr_23438[(1)] = (1));
return statearr_23438;
});
var state_machine__6362__auto____1 = (function (state_23432){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_23432);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e23439){if((e23439 instanceof Object))
{var ex__6365__auto__ = e23439;var statearr_23440_23610 = state_23432;(statearr_23440_23610[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23432);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23439;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23611 = state_23432;
state_23432 = G__23611;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_23432){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_23432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___23609,res,vec__23427,v,p,job,jobs,results))
})();var state__6378__auto__ = (function (){var statearr_23441 = f__6377__auto__.call(null);(statearr_23441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___23609);
return statearr_23441;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___23609,res,vec__23427,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23442){var vec__23443 = p__23442;var v = cljs.core.nth.call(null,vec__23443,(0),null);var p = cljs.core.nth.call(null,vec__23443,(1),null);var job = vec__23443;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4416__auto___23612 = n;var __23613 = (0);while(true){
if((__23613 < n__4416__auto___23612))
{var G__23444_23614 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23444_23614) {
case "async":
var c__6376__auto___23616 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23613,c__6376__auto___23616,G__23444_23614,n__4416__auto___23612,jobs,results,process,async){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (__23613,c__6376__auto___23616,G__23444_23614,n__4416__auto___23612,jobs,results,process,async){
return (function (state_23457){var state_val_23458 = (state_23457[(1)]);if((state_val_23458 === (7)))
{var inst_23453 = (state_23457[(2)]);var state_23457__$1 = state_23457;var statearr_23459_23617 = state_23457__$1;(statearr_23459_23617[(2)] = inst_23453);
(statearr_23459_23617[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23458 === (6)))
{var state_23457__$1 = state_23457;var statearr_23460_23618 = state_23457__$1;(statearr_23460_23618[(2)] = null);
(statearr_23460_23618[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23458 === (5)))
{var state_23457__$1 = state_23457;var statearr_23461_23619 = state_23457__$1;(statearr_23461_23619[(2)] = null);
(statearr_23461_23619[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23458 === (4)))
{var inst_23447 = (state_23457[(2)]);var inst_23448 = async.call(null,inst_23447);var state_23457__$1 = state_23457;if(cljs.core.truth_(inst_23448))
{var statearr_23462_23620 = state_23457__$1;(statearr_23462_23620[(1)] = (5));
} else
{var statearr_23463_23621 = state_23457__$1;(statearr_23463_23621[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23458 === (3)))
{var inst_23455 = (state_23457[(2)]);var state_23457__$1 = state_23457;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23457__$1,inst_23455);
} else
{if((state_val_23458 === (2)))
{var state_23457__$1 = state_23457;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23457__$1,(4),jobs);
} else
{if((state_val_23458 === (1)))
{var state_23457__$1 = state_23457;var statearr_23464_23622 = state_23457__$1;(statearr_23464_23622[(2)] = null);
(statearr_23464_23622[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__23613,c__6376__auto___23616,G__23444_23614,n__4416__auto___23612,jobs,results,process,async))
;return ((function (__23613,switch__6361__auto__,c__6376__auto___23616,G__23444_23614,n__4416__auto___23612,jobs,results,process,async){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_23468 = [null,null,null,null,null,null,null];(statearr_23468[(0)] = state_machine__6362__auto__);
(statearr_23468[(1)] = (1));
return statearr_23468;
});
var state_machine__6362__auto____1 = (function (state_23457){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_23457);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e23469){if((e23469 instanceof Object))
{var ex__6365__auto__ = e23469;var statearr_23470_23623 = state_23457;(statearr_23470_23623[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23457);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23469;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23624 = state_23457;
state_23457 = G__23624;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_23457){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_23457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(__23613,switch__6361__auto__,c__6376__auto___23616,G__23444_23614,n__4416__auto___23612,jobs,results,process,async))
})();var state__6378__auto__ = (function (){var statearr_23471 = f__6377__auto__.call(null);(statearr_23471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___23616);
return statearr_23471;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(__23613,c__6376__auto___23616,G__23444_23614,n__4416__auto___23612,jobs,results,process,async))
);

break;
case "compute":
var c__6376__auto___23625 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23613,c__6376__auto___23625,G__23444_23614,n__4416__auto___23612,jobs,results,process,async){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (__23613,c__6376__auto___23625,G__23444_23614,n__4416__auto___23612,jobs,results,process,async){
return (function (state_23484){var state_val_23485 = (state_23484[(1)]);if((state_val_23485 === (7)))
{var inst_23480 = (state_23484[(2)]);var state_23484__$1 = state_23484;var statearr_23486_23626 = state_23484__$1;(statearr_23486_23626[(2)] = inst_23480);
(statearr_23486_23626[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23485 === (6)))
{var state_23484__$1 = state_23484;var statearr_23487_23627 = state_23484__$1;(statearr_23487_23627[(2)] = null);
(statearr_23487_23627[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23485 === (5)))
{var state_23484__$1 = state_23484;var statearr_23488_23628 = state_23484__$1;(statearr_23488_23628[(2)] = null);
(statearr_23488_23628[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23485 === (4)))
{var inst_23474 = (state_23484[(2)]);var inst_23475 = process.call(null,inst_23474);var state_23484__$1 = state_23484;if(cljs.core.truth_(inst_23475))
{var statearr_23489_23629 = state_23484__$1;(statearr_23489_23629[(1)] = (5));
} else
{var statearr_23490_23630 = state_23484__$1;(statearr_23490_23630[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23485 === (3)))
{var inst_23482 = (state_23484[(2)]);var state_23484__$1 = state_23484;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23484__$1,inst_23482);
} else
{if((state_val_23485 === (2)))
{var state_23484__$1 = state_23484;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23484__$1,(4),jobs);
} else
{if((state_val_23485 === (1)))
{var state_23484__$1 = state_23484;var statearr_23491_23631 = state_23484__$1;(statearr_23491_23631[(2)] = null);
(statearr_23491_23631[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__23613,c__6376__auto___23625,G__23444_23614,n__4416__auto___23612,jobs,results,process,async))
;return ((function (__23613,switch__6361__auto__,c__6376__auto___23625,G__23444_23614,n__4416__auto___23612,jobs,results,process,async){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_23495 = [null,null,null,null,null,null,null];(statearr_23495[(0)] = state_machine__6362__auto__);
(statearr_23495[(1)] = (1));
return statearr_23495;
});
var state_machine__6362__auto____1 = (function (state_23484){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_23484);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e23496){if((e23496 instanceof Object))
{var ex__6365__auto__ = e23496;var statearr_23497_23632 = state_23484;(statearr_23497_23632[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23484);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23496;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23633 = state_23484;
state_23484 = G__23633;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_23484){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_23484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(__23613,switch__6361__auto__,c__6376__auto___23625,G__23444_23614,n__4416__auto___23612,jobs,results,process,async))
})();var state__6378__auto__ = (function (){var statearr_23498 = f__6377__auto__.call(null);(statearr_23498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___23625);
return statearr_23498;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(__23613,c__6376__auto___23625,G__23444_23614,n__4416__auto___23612,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__23634 = (__23613 + (1));
__23613 = G__23634;
continue;
}
} else
{}
break;
}
var c__6376__auto___23635 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___23635,jobs,results,process,async){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___23635,jobs,results,process,async){
return (function (state_23520){var state_val_23521 = (state_23520[(1)]);if((state_val_23521 === (9)))
{var inst_23513 = (state_23520[(2)]);var state_23520__$1 = (function (){var statearr_23522 = state_23520;(statearr_23522[(7)] = inst_23513);
return statearr_23522;
})();var statearr_23523_23636 = state_23520__$1;(statearr_23523_23636[(2)] = null);
(statearr_23523_23636[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23521 === (8)))
{var inst_23506 = (state_23520[(8)]);var inst_23511 = (state_23520[(2)]);var state_23520__$1 = (function (){var statearr_23524 = state_23520;(statearr_23524[(9)] = inst_23511);
return statearr_23524;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23520__$1,(9),results,inst_23506);
} else
{if((state_val_23521 === (7)))
{var inst_23516 = (state_23520[(2)]);var state_23520__$1 = state_23520;var statearr_23525_23637 = state_23520__$1;(statearr_23525_23637[(2)] = inst_23516);
(statearr_23525_23637[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23521 === (6)))
{var inst_23506 = (state_23520[(8)]);var inst_23501 = (state_23520[(10)]);var inst_23506__$1 = cljs.core.async.chan.call(null,(1));var inst_23507 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23508 = [inst_23501,inst_23506__$1];var inst_23509 = (new cljs.core.PersistentVector(null,2,(5),inst_23507,inst_23508,null));var state_23520__$1 = (function (){var statearr_23526 = state_23520;(statearr_23526[(8)] = inst_23506__$1);
return statearr_23526;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23520__$1,(8),jobs,inst_23509);
} else
{if((state_val_23521 === (5)))
{var inst_23504 = cljs.core.async.close_BANG_.call(null,jobs);var state_23520__$1 = state_23520;var statearr_23527_23638 = state_23520__$1;(statearr_23527_23638[(2)] = inst_23504);
(statearr_23527_23638[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23521 === (4)))
{var inst_23501 = (state_23520[(10)]);var inst_23501__$1 = (state_23520[(2)]);var inst_23502 = (inst_23501__$1 == null);var state_23520__$1 = (function (){var statearr_23528 = state_23520;(statearr_23528[(10)] = inst_23501__$1);
return statearr_23528;
})();if(cljs.core.truth_(inst_23502))
{var statearr_23529_23639 = state_23520__$1;(statearr_23529_23639[(1)] = (5));
} else
{var statearr_23530_23640 = state_23520__$1;(statearr_23530_23640[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23521 === (3)))
{var inst_23518 = (state_23520[(2)]);var state_23520__$1 = state_23520;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23520__$1,inst_23518);
} else
{if((state_val_23521 === (2)))
{var state_23520__$1 = state_23520;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23520__$1,(4),from);
} else
{if((state_val_23521 === (1)))
{var state_23520__$1 = state_23520;var statearr_23531_23641 = state_23520__$1;(statearr_23531_23641[(2)] = null);
(statearr_23531_23641[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});})(c__6376__auto___23635,jobs,results,process,async))
;return ((function (switch__6361__auto__,c__6376__auto___23635,jobs,results,process,async){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_23535 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23535[(0)] = state_machine__6362__auto__);
(statearr_23535[(1)] = (1));
return statearr_23535;
});
var state_machine__6362__auto____1 = (function (state_23520){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_23520);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e23536){if((e23536 instanceof Object))
{var ex__6365__auto__ = e23536;var statearr_23537_23642 = state_23520;(statearr_23537_23642[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23520);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23536;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23643 = state_23520;
state_23520 = G__23643;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_23520){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_23520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___23635,jobs,results,process,async))
})();var state__6378__auto__ = (function (){var statearr_23538 = f__6377__auto__.call(null);(statearr_23538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___23635);
return statearr_23538;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___23635,jobs,results,process,async))
);
var c__6376__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto__,jobs,results,process,async){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto__,jobs,results,process,async){
return (function (state_23576){var state_val_23577 = (state_23576[(1)]);if((state_val_23577 === (7)))
{var inst_23572 = (state_23576[(2)]);var state_23576__$1 = state_23576;var statearr_23578_23644 = state_23576__$1;(statearr_23578_23644[(2)] = inst_23572);
(statearr_23578_23644[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23577 === (20)))
{var state_23576__$1 = state_23576;var statearr_23579_23645 = state_23576__$1;(statearr_23579_23645[(2)] = null);
(statearr_23579_23645[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23577 === (1)))
{var state_23576__$1 = state_23576;var statearr_23580_23646 = state_23576__$1;(statearr_23580_23646[(2)] = null);
(statearr_23580_23646[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23577 === (4)))
{var inst_23541 = (state_23576[(7)]);var inst_23541__$1 = (state_23576[(2)]);var inst_23542 = (inst_23541__$1 == null);var state_23576__$1 = (function (){var statearr_23581 = state_23576;(statearr_23581[(7)] = inst_23541__$1);
return statearr_23581;
})();if(cljs.core.truth_(inst_23542))
{var statearr_23582_23647 = state_23576__$1;(statearr_23582_23647[(1)] = (5));
} else
{var statearr_23583_23648 = state_23576__$1;(statearr_23583_23648[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23577 === (15)))
{var inst_23554 = (state_23576[(8)]);var state_23576__$1 = state_23576;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23576__$1,(18),to,inst_23554);
} else
{if((state_val_23577 === (21)))
{var inst_23567 = (state_23576[(2)]);var state_23576__$1 = state_23576;var statearr_23584_23649 = state_23576__$1;(statearr_23584_23649[(2)] = inst_23567);
(statearr_23584_23649[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23577 === (13)))
{var inst_23569 = (state_23576[(2)]);var state_23576__$1 = (function (){var statearr_23585 = state_23576;(statearr_23585[(9)] = inst_23569);
return statearr_23585;
})();var statearr_23586_23650 = state_23576__$1;(statearr_23586_23650[(2)] = null);
(statearr_23586_23650[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23577 === (6)))
{var inst_23541 = (state_23576[(7)]);var state_23576__$1 = state_23576;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23576__$1,(11),inst_23541);
} else
{if((state_val_23577 === (17)))
{var inst_23562 = (state_23576[(2)]);var state_23576__$1 = state_23576;if(cljs.core.truth_(inst_23562))
{var statearr_23587_23651 = state_23576__$1;(statearr_23587_23651[(1)] = (19));
} else
{var statearr_23588_23652 = state_23576__$1;(statearr_23588_23652[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23577 === (3)))
{var inst_23574 = (state_23576[(2)]);var state_23576__$1 = state_23576;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23576__$1,inst_23574);
} else
{if((state_val_23577 === (12)))
{var inst_23551 = (state_23576[(10)]);var state_23576__$1 = state_23576;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23576__$1,(14),inst_23551);
} else
{if((state_val_23577 === (2)))
{var state_23576__$1 = state_23576;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23576__$1,(4),results);
} else
{if((state_val_23577 === (19)))
{var state_23576__$1 = state_23576;var statearr_23589_23653 = state_23576__$1;(statearr_23589_23653[(2)] = null);
(statearr_23589_23653[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23577 === (11)))
{var inst_23551 = (state_23576[(2)]);var state_23576__$1 = (function (){var statearr_23590 = state_23576;(statearr_23590[(10)] = inst_23551);
return statearr_23590;
})();var statearr_23591_23654 = state_23576__$1;(statearr_23591_23654[(2)] = null);
(statearr_23591_23654[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23577 === (9)))
{var state_23576__$1 = state_23576;var statearr_23592_23655 = state_23576__$1;(statearr_23592_23655[(2)] = null);
(statearr_23592_23655[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23577 === (5)))
{var state_23576__$1 = state_23576;if(cljs.core.truth_(close_QMARK_))
{var statearr_23593_23656 = state_23576__$1;(statearr_23593_23656[(1)] = (8));
} else
{var statearr_23594_23657 = state_23576__$1;(statearr_23594_23657[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23577 === (14)))
{var inst_23556 = (state_23576[(11)]);var inst_23554 = (state_23576[(8)]);var inst_23554__$1 = (state_23576[(2)]);var inst_23555 = (inst_23554__$1 == null);var inst_23556__$1 = cljs.core.not.call(null,inst_23555);var state_23576__$1 = (function (){var statearr_23595 = state_23576;(statearr_23595[(11)] = inst_23556__$1);
(statearr_23595[(8)] = inst_23554__$1);
return statearr_23595;
})();if(inst_23556__$1)
{var statearr_23596_23658 = state_23576__$1;(statearr_23596_23658[(1)] = (15));
} else
{var statearr_23597_23659 = state_23576__$1;(statearr_23597_23659[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23577 === (16)))
{var inst_23556 = (state_23576[(11)]);var state_23576__$1 = state_23576;var statearr_23598_23660 = state_23576__$1;(statearr_23598_23660[(2)] = inst_23556);
(statearr_23598_23660[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23577 === (10)))
{var inst_23548 = (state_23576[(2)]);var state_23576__$1 = state_23576;var statearr_23599_23661 = state_23576__$1;(statearr_23599_23661[(2)] = inst_23548);
(statearr_23599_23661[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23577 === (18)))
{var inst_23559 = (state_23576[(2)]);var state_23576__$1 = state_23576;var statearr_23600_23662 = state_23576__$1;(statearr_23600_23662[(2)] = inst_23559);
(statearr_23600_23662[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23577 === (8)))
{var inst_23545 = cljs.core.async.close_BANG_.call(null,to);var state_23576__$1 = state_23576;var statearr_23601_23663 = state_23576__$1;(statearr_23601_23663[(2)] = inst_23545);
(statearr_23601_23663[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6376__auto__,jobs,results,process,async))
;return ((function (switch__6361__auto__,c__6376__auto__,jobs,results,process,async){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_23605 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23605[(0)] = state_machine__6362__auto__);
(statearr_23605[(1)] = (1));
return statearr_23605;
});
var state_machine__6362__auto____1 = (function (state_23576){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_23576);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e23606){if((e23606 instanceof Object))
{var ex__6365__auto__ = e23606;var statearr_23607_23664 = state_23576;(statearr_23607_23664[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23576);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23606;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23665 = state_23576;
state_23576 = G__23665;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_23576){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_23576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__,jobs,results,process,async))
})();var state__6378__auto__ = (function (){var statearr_23608 = f__6377__auto__.call(null);(statearr_23608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_23608;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto__,jobs,results,process,async))
);
return c__6376__auto__;
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
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6376__auto___23766 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___23766,tc,fc){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___23766,tc,fc){
return (function (state_23741){var state_val_23742 = (state_23741[(1)]);if((state_val_23742 === (7)))
{var inst_23737 = (state_23741[(2)]);var state_23741__$1 = state_23741;var statearr_23743_23767 = state_23741__$1;(statearr_23743_23767[(2)] = inst_23737);
(statearr_23743_23767[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23742 === (1)))
{var state_23741__$1 = state_23741;var statearr_23744_23768 = state_23741__$1;(statearr_23744_23768[(2)] = null);
(statearr_23744_23768[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23742 === (4)))
{var inst_23718 = (state_23741[(7)]);var inst_23718__$1 = (state_23741[(2)]);var inst_23719 = (inst_23718__$1 == null);var state_23741__$1 = (function (){var statearr_23745 = state_23741;(statearr_23745[(7)] = inst_23718__$1);
return statearr_23745;
})();if(cljs.core.truth_(inst_23719))
{var statearr_23746_23769 = state_23741__$1;(statearr_23746_23769[(1)] = (5));
} else
{var statearr_23747_23770 = state_23741__$1;(statearr_23747_23770[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23742 === (13)))
{var state_23741__$1 = state_23741;var statearr_23748_23771 = state_23741__$1;(statearr_23748_23771[(2)] = null);
(statearr_23748_23771[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23742 === (6)))
{var inst_23718 = (state_23741[(7)]);var inst_23724 = p.call(null,inst_23718);var state_23741__$1 = state_23741;if(cljs.core.truth_(inst_23724))
{var statearr_23749_23772 = state_23741__$1;(statearr_23749_23772[(1)] = (9));
} else
{var statearr_23750_23773 = state_23741__$1;(statearr_23750_23773[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23742 === (3)))
{var inst_23739 = (state_23741[(2)]);var state_23741__$1 = state_23741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23741__$1,inst_23739);
} else
{if((state_val_23742 === (12)))
{var state_23741__$1 = state_23741;var statearr_23751_23774 = state_23741__$1;(statearr_23751_23774[(2)] = null);
(statearr_23751_23774[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23742 === (2)))
{var state_23741__$1 = state_23741;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23741__$1,(4),ch);
} else
{if((state_val_23742 === (11)))
{var inst_23718 = (state_23741[(7)]);var inst_23728 = (state_23741[(2)]);var state_23741__$1 = state_23741;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23741__$1,(8),inst_23728,inst_23718);
} else
{if((state_val_23742 === (9)))
{var state_23741__$1 = state_23741;var statearr_23752_23775 = state_23741__$1;(statearr_23752_23775[(2)] = tc);
(statearr_23752_23775[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23742 === (5)))
{var inst_23721 = cljs.core.async.close_BANG_.call(null,tc);var inst_23722 = cljs.core.async.close_BANG_.call(null,fc);var state_23741__$1 = (function (){var statearr_23753 = state_23741;(statearr_23753[(8)] = inst_23721);
return statearr_23753;
})();var statearr_23754_23776 = state_23741__$1;(statearr_23754_23776[(2)] = inst_23722);
(statearr_23754_23776[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23742 === (14)))
{var inst_23735 = (state_23741[(2)]);var state_23741__$1 = state_23741;var statearr_23755_23777 = state_23741__$1;(statearr_23755_23777[(2)] = inst_23735);
(statearr_23755_23777[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23742 === (10)))
{var state_23741__$1 = state_23741;var statearr_23756_23778 = state_23741__$1;(statearr_23756_23778[(2)] = fc);
(statearr_23756_23778[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23742 === (8)))
{var inst_23730 = (state_23741[(2)]);var state_23741__$1 = state_23741;if(cljs.core.truth_(inst_23730))
{var statearr_23757_23779 = state_23741__$1;(statearr_23757_23779[(1)] = (12));
} else
{var statearr_23758_23780 = state_23741__$1;(statearr_23758_23780[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__6376__auto___23766,tc,fc))
;return ((function (switch__6361__auto__,c__6376__auto___23766,tc,fc){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_23762 = [null,null,null,null,null,null,null,null,null];(statearr_23762[(0)] = state_machine__6362__auto__);
(statearr_23762[(1)] = (1));
return statearr_23762;
});
var state_machine__6362__auto____1 = (function (state_23741){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_23741);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e23763){if((e23763 instanceof Object))
{var ex__6365__auto__ = e23763;var statearr_23764_23781 = state_23741;(statearr_23764_23781[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23741);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23763;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23782 = state_23741;
state_23741 = G__23782;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_23741){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_23741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___23766,tc,fc))
})();var state__6378__auto__ = (function (){var statearr_23765 = f__6377__auto__.call(null);(statearr_23765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___23766);
return statearr_23765;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___23766,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6376__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto__){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto__){
return (function (state_23829){var state_val_23830 = (state_23829[(1)]);if((state_val_23830 === (7)))
{var inst_23825 = (state_23829[(2)]);var state_23829__$1 = state_23829;var statearr_23831_23847 = state_23829__$1;(statearr_23831_23847[(2)] = inst_23825);
(statearr_23831_23847[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23830 === (6)))
{var inst_23815 = (state_23829[(7)]);var inst_23818 = (state_23829[(8)]);var inst_23822 = f.call(null,inst_23815,inst_23818);var inst_23815__$1 = inst_23822;var state_23829__$1 = (function (){var statearr_23832 = state_23829;(statearr_23832[(7)] = inst_23815__$1);
return statearr_23832;
})();var statearr_23833_23848 = state_23829__$1;(statearr_23833_23848[(2)] = null);
(statearr_23833_23848[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23830 === (5)))
{var inst_23815 = (state_23829[(7)]);var state_23829__$1 = state_23829;var statearr_23834_23849 = state_23829__$1;(statearr_23834_23849[(2)] = inst_23815);
(statearr_23834_23849[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23830 === (4)))
{var inst_23818 = (state_23829[(8)]);var inst_23818__$1 = (state_23829[(2)]);var inst_23819 = (inst_23818__$1 == null);var state_23829__$1 = (function (){var statearr_23835 = state_23829;(statearr_23835[(8)] = inst_23818__$1);
return statearr_23835;
})();if(cljs.core.truth_(inst_23819))
{var statearr_23836_23850 = state_23829__$1;(statearr_23836_23850[(1)] = (5));
} else
{var statearr_23837_23851 = state_23829__$1;(statearr_23837_23851[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23830 === (3)))
{var inst_23827 = (state_23829[(2)]);var state_23829__$1 = state_23829;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23829__$1,inst_23827);
} else
{if((state_val_23830 === (2)))
{var state_23829__$1 = state_23829;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23829__$1,(4),ch);
} else
{if((state_val_23830 === (1)))
{var inst_23815 = init;var state_23829__$1 = (function (){var statearr_23838 = state_23829;(statearr_23838[(7)] = inst_23815);
return statearr_23838;
})();var statearr_23839_23852 = state_23829__$1;(statearr_23839_23852[(2)] = null);
(statearr_23839_23852[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6376__auto__))
;return ((function (switch__6361__auto__,c__6376__auto__){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_23843 = [null,null,null,null,null,null,null,null,null];(statearr_23843[(0)] = state_machine__6362__auto__);
(statearr_23843[(1)] = (1));
return statearr_23843;
});
var state_machine__6362__auto____1 = (function (state_23829){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_23829);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e23844){if((e23844 instanceof Object))
{var ex__6365__auto__ = e23844;var statearr_23845_23853 = state_23829;(statearr_23845_23853[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23829);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23844;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23854 = state_23829;
state_23829 = G__23854;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_23829){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_23829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__))
})();var state__6378__auto__ = (function (){var statearr_23846 = f__6377__auto__.call(null);(statearr_23846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_23846;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto__))
);
return c__6376__auto__;
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
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6376__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto__){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto__){
return (function (state_23928){var state_val_23929 = (state_23928[(1)]);if((state_val_23929 === (7)))
{var inst_23910 = (state_23928[(2)]);var state_23928__$1 = state_23928;var statearr_23930_23953 = state_23928__$1;(statearr_23930_23953[(2)] = inst_23910);
(statearr_23930_23953[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23929 === (1)))
{var inst_23904 = cljs.core.seq.call(null,coll);var inst_23905 = inst_23904;var state_23928__$1 = (function (){var statearr_23931 = state_23928;(statearr_23931[(7)] = inst_23905);
return statearr_23931;
})();var statearr_23932_23954 = state_23928__$1;(statearr_23932_23954[(2)] = null);
(statearr_23932_23954[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23929 === (4)))
{var inst_23905 = (state_23928[(7)]);var inst_23908 = cljs.core.first.call(null,inst_23905);var state_23928__$1 = state_23928;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23928__$1,(7),ch,inst_23908);
} else
{if((state_val_23929 === (13)))
{var inst_23922 = (state_23928[(2)]);var state_23928__$1 = state_23928;var statearr_23933_23955 = state_23928__$1;(statearr_23933_23955[(2)] = inst_23922);
(statearr_23933_23955[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23929 === (6)))
{var inst_23913 = (state_23928[(2)]);var state_23928__$1 = state_23928;if(cljs.core.truth_(inst_23913))
{var statearr_23934_23956 = state_23928__$1;(statearr_23934_23956[(1)] = (8));
} else
{var statearr_23935_23957 = state_23928__$1;(statearr_23935_23957[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23929 === (3)))
{var inst_23926 = (state_23928[(2)]);var state_23928__$1 = state_23928;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23928__$1,inst_23926);
} else
{if((state_val_23929 === (12)))
{var state_23928__$1 = state_23928;var statearr_23936_23958 = state_23928__$1;(statearr_23936_23958[(2)] = null);
(statearr_23936_23958[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23929 === (2)))
{var inst_23905 = (state_23928[(7)]);var state_23928__$1 = state_23928;if(cljs.core.truth_(inst_23905))
{var statearr_23937_23959 = state_23928__$1;(statearr_23937_23959[(1)] = (4));
} else
{var statearr_23938_23960 = state_23928__$1;(statearr_23938_23960[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23929 === (11)))
{var inst_23919 = cljs.core.async.close_BANG_.call(null,ch);var state_23928__$1 = state_23928;var statearr_23939_23961 = state_23928__$1;(statearr_23939_23961[(2)] = inst_23919);
(statearr_23939_23961[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23929 === (9)))
{var state_23928__$1 = state_23928;if(cljs.core.truth_(close_QMARK_))
{var statearr_23940_23962 = state_23928__$1;(statearr_23940_23962[(1)] = (11));
} else
{var statearr_23941_23963 = state_23928__$1;(statearr_23941_23963[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23929 === (5)))
{var inst_23905 = (state_23928[(7)]);var state_23928__$1 = state_23928;var statearr_23942_23964 = state_23928__$1;(statearr_23942_23964[(2)] = inst_23905);
(statearr_23942_23964[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23929 === (10)))
{var inst_23924 = (state_23928[(2)]);var state_23928__$1 = state_23928;var statearr_23943_23965 = state_23928__$1;(statearr_23943_23965[(2)] = inst_23924);
(statearr_23943_23965[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23929 === (8)))
{var inst_23905 = (state_23928[(7)]);var inst_23915 = cljs.core.next.call(null,inst_23905);var inst_23905__$1 = inst_23915;var state_23928__$1 = (function (){var statearr_23944 = state_23928;(statearr_23944[(7)] = inst_23905__$1);
return statearr_23944;
})();var statearr_23945_23966 = state_23928__$1;(statearr_23945_23966[(2)] = null);
(statearr_23945_23966[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});})(c__6376__auto__))
;return ((function (switch__6361__auto__,c__6376__auto__){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_23949 = [null,null,null,null,null,null,null,null];(statearr_23949[(0)] = state_machine__6362__auto__);
(statearr_23949[(1)] = (1));
return statearr_23949;
});
var state_machine__6362__auto____1 = (function (state_23928){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_23928);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e23950){if((e23950 instanceof Object))
{var ex__6365__auto__ = e23950;var statearr_23951_23967 = state_23928;(statearr_23951_23967[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23928);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23950;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23968 = state_23928;
state_23928 = G__23968;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_23928){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_23928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__))
})();var state__6378__auto__ = (function (){var statearr_23952 = f__6377__auto__.call(null);(statearr_23952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_23952;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto__))
);
return c__6376__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj23970 = {};return obj23970;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3548__auto__ = _;if(and__3548__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4187__auto__ = (((_ == null))?null:_);return (function (){var or__3560__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj23972 = {};return obj23972;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24194 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24194 = (function (cs,ch,mult,meta24195){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24195 = meta24195;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24194.cljs$lang$type = true;
cljs.core.async.t24194.cljs$lang$ctorStr = "cljs.core.async/t24194";
cljs.core.async.t24194.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t24194");
});})(cs))
;
cljs.core.async.t24194.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24194.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24194.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24194.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24194.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24194.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24194.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24196){var self__ = this;
var _24196__$1 = this;return self__.meta24195;
});})(cs))
;
cljs.core.async.t24194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24196,meta24195__$1){var self__ = this;
var _24196__$1 = this;return (new cljs.core.async.t24194(self__.cs,self__.ch,self__.mult,meta24195__$1));
});})(cs))
;
cljs.core.async.__GT_t24194 = ((function (cs){
return (function __GT_t24194(cs__$1,ch__$1,mult__$1,meta24195){return (new cljs.core.async.t24194(cs__$1,ch__$1,mult__$1,meta24195));
});})(cs))
;
}
return (new cljs.core.async.t24194(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6376__auto___24415 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___24415,cs,m,dchan,dctr,done){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___24415,cs,m,dchan,dctr,done){
return (function (state_24327){var state_val_24328 = (state_24327[(1)]);if((state_val_24328 === (7)))
{var inst_24323 = (state_24327[(2)]);var state_24327__$1 = state_24327;var statearr_24329_24416 = state_24327__$1;(statearr_24329_24416[(2)] = inst_24323);
(statearr_24329_24416[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (20)))
{var inst_24228 = (state_24327[(7)]);var inst_24238 = cljs.core.first.call(null,inst_24228);var inst_24239 = cljs.core.nth.call(null,inst_24238,(0),null);var inst_24240 = cljs.core.nth.call(null,inst_24238,(1),null);var state_24327__$1 = (function (){var statearr_24330 = state_24327;(statearr_24330[(8)] = inst_24239);
return statearr_24330;
})();if(cljs.core.truth_(inst_24240))
{var statearr_24331_24417 = state_24327__$1;(statearr_24331_24417[(1)] = (22));
} else
{var statearr_24332_24418 = state_24327__$1;(statearr_24332_24418[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (27)))
{var inst_24275 = (state_24327[(9)]);var inst_24268 = (state_24327[(10)]);var inst_24199 = (state_24327[(11)]);var inst_24270 = (state_24327[(12)]);var inst_24275__$1 = cljs.core._nth.call(null,inst_24268,inst_24270);var inst_24276 = cljs.core.async.put_BANG_.call(null,inst_24275__$1,inst_24199,done);var state_24327__$1 = (function (){var statearr_24333 = state_24327;(statearr_24333[(9)] = inst_24275__$1);
return statearr_24333;
})();if(cljs.core.truth_(inst_24276))
{var statearr_24334_24419 = state_24327__$1;(statearr_24334_24419[(1)] = (30));
} else
{var statearr_24335_24420 = state_24327__$1;(statearr_24335_24420[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (1)))
{var state_24327__$1 = state_24327;var statearr_24336_24421 = state_24327__$1;(statearr_24336_24421[(2)] = null);
(statearr_24336_24421[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (24)))
{var inst_24228 = (state_24327[(7)]);var inst_24245 = (state_24327[(2)]);var inst_24246 = cljs.core.next.call(null,inst_24228);var inst_24208 = inst_24246;var inst_24209 = null;var inst_24210 = (0);var inst_24211 = (0);var state_24327__$1 = (function (){var statearr_24337 = state_24327;(statearr_24337[(13)] = inst_24211);
(statearr_24337[(14)] = inst_24209);
(statearr_24337[(15)] = inst_24208);
(statearr_24337[(16)] = inst_24245);
(statearr_24337[(17)] = inst_24210);
return statearr_24337;
})();var statearr_24338_24422 = state_24327__$1;(statearr_24338_24422[(2)] = null);
(statearr_24338_24422[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (39)))
{var state_24327__$1 = state_24327;var statearr_24342_24423 = state_24327__$1;(statearr_24342_24423[(2)] = null);
(statearr_24342_24423[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (4)))
{var inst_24199 = (state_24327[(11)]);var inst_24199__$1 = (state_24327[(2)]);var inst_24200 = (inst_24199__$1 == null);var state_24327__$1 = (function (){var statearr_24343 = state_24327;(statearr_24343[(11)] = inst_24199__$1);
return statearr_24343;
})();if(cljs.core.truth_(inst_24200))
{var statearr_24344_24424 = state_24327__$1;(statearr_24344_24424[(1)] = (5));
} else
{var statearr_24345_24425 = state_24327__$1;(statearr_24345_24425[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (15)))
{var inst_24211 = (state_24327[(13)]);var inst_24209 = (state_24327[(14)]);var inst_24208 = (state_24327[(15)]);var inst_24210 = (state_24327[(17)]);var inst_24224 = (state_24327[(2)]);var inst_24225 = (inst_24211 + (1));var tmp24339 = inst_24209;var tmp24340 = inst_24208;var tmp24341 = inst_24210;var inst_24208__$1 = tmp24340;var inst_24209__$1 = tmp24339;var inst_24210__$1 = tmp24341;var inst_24211__$1 = inst_24225;var state_24327__$1 = (function (){var statearr_24346 = state_24327;(statearr_24346[(13)] = inst_24211__$1);
(statearr_24346[(14)] = inst_24209__$1);
(statearr_24346[(15)] = inst_24208__$1);
(statearr_24346[(17)] = inst_24210__$1);
(statearr_24346[(18)] = inst_24224);
return statearr_24346;
})();var statearr_24347_24426 = state_24327__$1;(statearr_24347_24426[(2)] = null);
(statearr_24347_24426[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (21)))
{var inst_24249 = (state_24327[(2)]);var state_24327__$1 = state_24327;var statearr_24351_24427 = state_24327__$1;(statearr_24351_24427[(2)] = inst_24249);
(statearr_24351_24427[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (31)))
{var inst_24275 = (state_24327[(9)]);var inst_24279 = done.call(null,null);var inst_24280 = cljs.core.async.untap_STAR_.call(null,m,inst_24275);var state_24327__$1 = (function (){var statearr_24352 = state_24327;(statearr_24352[(19)] = inst_24279);
return statearr_24352;
})();var statearr_24353_24428 = state_24327__$1;(statearr_24353_24428[(2)] = inst_24280);
(statearr_24353_24428[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (32)))
{var inst_24269 = (state_24327[(20)]);var inst_24268 = (state_24327[(10)]);var inst_24267 = (state_24327[(21)]);var inst_24270 = (state_24327[(12)]);var inst_24282 = (state_24327[(2)]);var inst_24283 = (inst_24270 + (1));var tmp24348 = inst_24269;var tmp24349 = inst_24268;var tmp24350 = inst_24267;var inst_24267__$1 = tmp24350;var inst_24268__$1 = tmp24349;var inst_24269__$1 = tmp24348;var inst_24270__$1 = inst_24283;var state_24327__$1 = (function (){var statearr_24354 = state_24327;(statearr_24354[(20)] = inst_24269__$1);
(statearr_24354[(10)] = inst_24268__$1);
(statearr_24354[(21)] = inst_24267__$1);
(statearr_24354[(22)] = inst_24282);
(statearr_24354[(12)] = inst_24270__$1);
return statearr_24354;
})();var statearr_24355_24429 = state_24327__$1;(statearr_24355_24429[(2)] = null);
(statearr_24355_24429[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (40)))
{var inst_24295 = (state_24327[(23)]);var inst_24299 = done.call(null,null);var inst_24300 = cljs.core.async.untap_STAR_.call(null,m,inst_24295);var state_24327__$1 = (function (){var statearr_24356 = state_24327;(statearr_24356[(24)] = inst_24299);
return statearr_24356;
})();var statearr_24357_24430 = state_24327__$1;(statearr_24357_24430[(2)] = inst_24300);
(statearr_24357_24430[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (33)))
{var inst_24286 = (state_24327[(25)]);var inst_24288 = cljs.core.chunked_seq_QMARK_.call(null,inst_24286);var state_24327__$1 = state_24327;if(inst_24288)
{var statearr_24358_24431 = state_24327__$1;(statearr_24358_24431[(1)] = (36));
} else
{var statearr_24359_24432 = state_24327__$1;(statearr_24359_24432[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (13)))
{var inst_24218 = (state_24327[(26)]);var inst_24221 = cljs.core.async.close_BANG_.call(null,inst_24218);var state_24327__$1 = state_24327;var statearr_24360_24433 = state_24327__$1;(statearr_24360_24433[(2)] = inst_24221);
(statearr_24360_24433[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (22)))
{var inst_24239 = (state_24327[(8)]);var inst_24242 = cljs.core.async.close_BANG_.call(null,inst_24239);var state_24327__$1 = state_24327;var statearr_24361_24434 = state_24327__$1;(statearr_24361_24434[(2)] = inst_24242);
(statearr_24361_24434[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (36)))
{var inst_24286 = (state_24327[(25)]);var inst_24290 = cljs.core.chunk_first.call(null,inst_24286);var inst_24291 = cljs.core.chunk_rest.call(null,inst_24286);var inst_24292 = cljs.core.count.call(null,inst_24290);var inst_24267 = inst_24291;var inst_24268 = inst_24290;var inst_24269 = inst_24292;var inst_24270 = (0);var state_24327__$1 = (function (){var statearr_24362 = state_24327;(statearr_24362[(20)] = inst_24269);
(statearr_24362[(10)] = inst_24268);
(statearr_24362[(21)] = inst_24267);
(statearr_24362[(12)] = inst_24270);
return statearr_24362;
})();var statearr_24363_24435 = state_24327__$1;(statearr_24363_24435[(2)] = null);
(statearr_24363_24435[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (41)))
{var inst_24286 = (state_24327[(25)]);var inst_24302 = (state_24327[(2)]);var inst_24303 = cljs.core.next.call(null,inst_24286);var inst_24267 = inst_24303;var inst_24268 = null;var inst_24269 = (0);var inst_24270 = (0);var state_24327__$1 = (function (){var statearr_24364 = state_24327;(statearr_24364[(20)] = inst_24269);
(statearr_24364[(10)] = inst_24268);
(statearr_24364[(21)] = inst_24267);
(statearr_24364[(27)] = inst_24302);
(statearr_24364[(12)] = inst_24270);
return statearr_24364;
})();var statearr_24365_24436 = state_24327__$1;(statearr_24365_24436[(2)] = null);
(statearr_24365_24436[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (43)))
{var state_24327__$1 = state_24327;var statearr_24366_24437 = state_24327__$1;(statearr_24366_24437[(2)] = null);
(statearr_24366_24437[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (29)))
{var inst_24311 = (state_24327[(2)]);var state_24327__$1 = state_24327;var statearr_24367_24438 = state_24327__$1;(statearr_24367_24438[(2)] = inst_24311);
(statearr_24367_24438[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (44)))
{var inst_24320 = (state_24327[(2)]);var state_24327__$1 = (function (){var statearr_24368 = state_24327;(statearr_24368[(28)] = inst_24320);
return statearr_24368;
})();var statearr_24369_24439 = state_24327__$1;(statearr_24369_24439[(2)] = null);
(statearr_24369_24439[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (6)))
{var inst_24259 = (state_24327[(29)]);var inst_24258 = cljs.core.deref.call(null,cs);var inst_24259__$1 = cljs.core.keys.call(null,inst_24258);var inst_24260 = cljs.core.count.call(null,inst_24259__$1);var inst_24261 = cljs.core.reset_BANG_.call(null,dctr,inst_24260);var inst_24266 = cljs.core.seq.call(null,inst_24259__$1);var inst_24267 = inst_24266;var inst_24268 = null;var inst_24269 = (0);var inst_24270 = (0);var state_24327__$1 = (function (){var statearr_24370 = state_24327;(statearr_24370[(20)] = inst_24269);
(statearr_24370[(29)] = inst_24259__$1);
(statearr_24370[(30)] = inst_24261);
(statearr_24370[(10)] = inst_24268);
(statearr_24370[(21)] = inst_24267);
(statearr_24370[(12)] = inst_24270);
return statearr_24370;
})();var statearr_24371_24440 = state_24327__$1;(statearr_24371_24440[(2)] = null);
(statearr_24371_24440[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (28)))
{var inst_24286 = (state_24327[(25)]);var inst_24267 = (state_24327[(21)]);var inst_24286__$1 = cljs.core.seq.call(null,inst_24267);var state_24327__$1 = (function (){var statearr_24372 = state_24327;(statearr_24372[(25)] = inst_24286__$1);
return statearr_24372;
})();if(inst_24286__$1)
{var statearr_24373_24441 = state_24327__$1;(statearr_24373_24441[(1)] = (33));
} else
{var statearr_24374_24442 = state_24327__$1;(statearr_24374_24442[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (25)))
{var inst_24269 = (state_24327[(20)]);var inst_24270 = (state_24327[(12)]);var inst_24272 = (inst_24270 < inst_24269);var inst_24273 = inst_24272;var state_24327__$1 = state_24327;if(cljs.core.truth_(inst_24273))
{var statearr_24375_24443 = state_24327__$1;(statearr_24375_24443[(1)] = (27));
} else
{var statearr_24376_24444 = state_24327__$1;(statearr_24376_24444[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (34)))
{var state_24327__$1 = state_24327;var statearr_24377_24445 = state_24327__$1;(statearr_24377_24445[(2)] = null);
(statearr_24377_24445[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (17)))
{var state_24327__$1 = state_24327;var statearr_24378_24446 = state_24327__$1;(statearr_24378_24446[(2)] = null);
(statearr_24378_24446[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (3)))
{var inst_24325 = (state_24327[(2)]);var state_24327__$1 = state_24327;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24327__$1,inst_24325);
} else
{if((state_val_24328 === (12)))
{var inst_24254 = (state_24327[(2)]);var state_24327__$1 = state_24327;var statearr_24379_24447 = state_24327__$1;(statearr_24379_24447[(2)] = inst_24254);
(statearr_24379_24447[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (2)))
{var state_24327__$1 = state_24327;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24327__$1,(4),ch);
} else
{if((state_val_24328 === (23)))
{var state_24327__$1 = state_24327;var statearr_24380_24448 = state_24327__$1;(statearr_24380_24448[(2)] = null);
(statearr_24380_24448[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (35)))
{var inst_24309 = (state_24327[(2)]);var state_24327__$1 = state_24327;var statearr_24381_24449 = state_24327__$1;(statearr_24381_24449[(2)] = inst_24309);
(statearr_24381_24449[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (19)))
{var inst_24228 = (state_24327[(7)]);var inst_24232 = cljs.core.chunk_first.call(null,inst_24228);var inst_24233 = cljs.core.chunk_rest.call(null,inst_24228);var inst_24234 = cljs.core.count.call(null,inst_24232);var inst_24208 = inst_24233;var inst_24209 = inst_24232;var inst_24210 = inst_24234;var inst_24211 = (0);var state_24327__$1 = (function (){var statearr_24382 = state_24327;(statearr_24382[(13)] = inst_24211);
(statearr_24382[(14)] = inst_24209);
(statearr_24382[(15)] = inst_24208);
(statearr_24382[(17)] = inst_24210);
return statearr_24382;
})();var statearr_24383_24450 = state_24327__$1;(statearr_24383_24450[(2)] = null);
(statearr_24383_24450[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (11)))
{var inst_24208 = (state_24327[(15)]);var inst_24228 = (state_24327[(7)]);var inst_24228__$1 = cljs.core.seq.call(null,inst_24208);var state_24327__$1 = (function (){var statearr_24384 = state_24327;(statearr_24384[(7)] = inst_24228__$1);
return statearr_24384;
})();if(inst_24228__$1)
{var statearr_24385_24451 = state_24327__$1;(statearr_24385_24451[(1)] = (16));
} else
{var statearr_24386_24452 = state_24327__$1;(statearr_24386_24452[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (9)))
{var inst_24256 = (state_24327[(2)]);var state_24327__$1 = state_24327;var statearr_24387_24453 = state_24327__$1;(statearr_24387_24453[(2)] = inst_24256);
(statearr_24387_24453[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (5)))
{var inst_24206 = cljs.core.deref.call(null,cs);var inst_24207 = cljs.core.seq.call(null,inst_24206);var inst_24208 = inst_24207;var inst_24209 = null;var inst_24210 = (0);var inst_24211 = (0);var state_24327__$1 = (function (){var statearr_24388 = state_24327;(statearr_24388[(13)] = inst_24211);
(statearr_24388[(14)] = inst_24209);
(statearr_24388[(15)] = inst_24208);
(statearr_24388[(17)] = inst_24210);
return statearr_24388;
})();var statearr_24389_24454 = state_24327__$1;(statearr_24389_24454[(2)] = null);
(statearr_24389_24454[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (14)))
{var state_24327__$1 = state_24327;var statearr_24390_24455 = state_24327__$1;(statearr_24390_24455[(2)] = null);
(statearr_24390_24455[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (45)))
{var inst_24317 = (state_24327[(2)]);var state_24327__$1 = state_24327;var statearr_24391_24456 = state_24327__$1;(statearr_24391_24456[(2)] = inst_24317);
(statearr_24391_24456[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (26)))
{var inst_24259 = (state_24327[(29)]);var inst_24313 = (state_24327[(2)]);var inst_24314 = cljs.core.seq.call(null,inst_24259);var state_24327__$1 = (function (){var statearr_24392 = state_24327;(statearr_24392[(31)] = inst_24313);
return statearr_24392;
})();if(inst_24314)
{var statearr_24393_24457 = state_24327__$1;(statearr_24393_24457[(1)] = (42));
} else
{var statearr_24394_24458 = state_24327__$1;(statearr_24394_24458[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (16)))
{var inst_24228 = (state_24327[(7)]);var inst_24230 = cljs.core.chunked_seq_QMARK_.call(null,inst_24228);var state_24327__$1 = state_24327;if(inst_24230)
{var statearr_24395_24459 = state_24327__$1;(statearr_24395_24459[(1)] = (19));
} else
{var statearr_24396_24460 = state_24327__$1;(statearr_24396_24460[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (38)))
{var inst_24306 = (state_24327[(2)]);var state_24327__$1 = state_24327;var statearr_24397_24461 = state_24327__$1;(statearr_24397_24461[(2)] = inst_24306);
(statearr_24397_24461[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (30)))
{var state_24327__$1 = state_24327;var statearr_24398_24462 = state_24327__$1;(statearr_24398_24462[(2)] = null);
(statearr_24398_24462[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (10)))
{var inst_24211 = (state_24327[(13)]);var inst_24209 = (state_24327[(14)]);var inst_24217 = cljs.core._nth.call(null,inst_24209,inst_24211);var inst_24218 = cljs.core.nth.call(null,inst_24217,(0),null);var inst_24219 = cljs.core.nth.call(null,inst_24217,(1),null);var state_24327__$1 = (function (){var statearr_24399 = state_24327;(statearr_24399[(26)] = inst_24218);
return statearr_24399;
})();if(cljs.core.truth_(inst_24219))
{var statearr_24400_24463 = state_24327__$1;(statearr_24400_24463[(1)] = (13));
} else
{var statearr_24401_24464 = state_24327__$1;(statearr_24401_24464[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (18)))
{var inst_24252 = (state_24327[(2)]);var state_24327__$1 = state_24327;var statearr_24402_24465 = state_24327__$1;(statearr_24402_24465[(2)] = inst_24252);
(statearr_24402_24465[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (42)))
{var state_24327__$1 = state_24327;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24327__$1,(45),dchan);
} else
{if((state_val_24328 === (37)))
{var inst_24286 = (state_24327[(25)]);var inst_24295 = (state_24327[(23)]);var inst_24199 = (state_24327[(11)]);var inst_24295__$1 = cljs.core.first.call(null,inst_24286);var inst_24296 = cljs.core.async.put_BANG_.call(null,inst_24295__$1,inst_24199,done);var state_24327__$1 = (function (){var statearr_24403 = state_24327;(statearr_24403[(23)] = inst_24295__$1);
return statearr_24403;
})();if(cljs.core.truth_(inst_24296))
{var statearr_24404_24466 = state_24327__$1;(statearr_24404_24466[(1)] = (39));
} else
{var statearr_24405_24467 = state_24327__$1;(statearr_24405_24467[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (8)))
{var inst_24211 = (state_24327[(13)]);var inst_24210 = (state_24327[(17)]);var inst_24213 = (inst_24211 < inst_24210);var inst_24214 = inst_24213;var state_24327__$1 = state_24327;if(cljs.core.truth_(inst_24214))
{var statearr_24406_24468 = state_24327__$1;(statearr_24406_24468[(1)] = (10));
} else
{var statearr_24407_24469 = state_24327__$1;(statearr_24407_24469[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6376__auto___24415,cs,m,dchan,dctr,done))
;return ((function (switch__6361__auto__,c__6376__auto___24415,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_24411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24411[(0)] = state_machine__6362__auto__);
(statearr_24411[(1)] = (1));
return statearr_24411;
});
var state_machine__6362__auto____1 = (function (state_24327){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_24327);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e24412){if((e24412 instanceof Object))
{var ex__6365__auto__ = e24412;var statearr_24413_24470 = state_24327;(statearr_24413_24470[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24327);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24412;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24471 = state_24327;
state_24327 = G__24471;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_24327){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_24327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___24415,cs,m,dchan,dctr,done))
})();var state__6378__auto__ = (function (){var statearr_24414 = f__6377__auto__.call(null);(statearr_24414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___24415);
return statearr_24414;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___24415,cs,m,dchan,dctr,done))
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
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj24473 = {};return obj24473;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24593 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24593 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24594){
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
this.meta24594 = meta24594;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24593.cljs$lang$type = true;
cljs.core.async.t24593.cljs$lang$ctorStr = "cljs.core.async/t24593";
cljs.core.async.t24593.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t24593");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24593.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24593.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24593.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24593.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24593.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24593.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24593.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24593.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24595){var self__ = this;
var _24595__$1 = this;return self__.meta24594;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24595,meta24594__$1){var self__ = this;
var _24595__$1 = this;return (new cljs.core.async.t24593(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24594__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24593 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24593(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24594){return (new cljs.core.async.t24593(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24594));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24593(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6376__auto___24712 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___24712,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___24712,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24665){var state_val_24666 = (state_24665[(1)]);if((state_val_24666 === (7)))
{var inst_24609 = (state_24665[(7)]);var inst_24614 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24609);var state_24665__$1 = state_24665;var statearr_24667_24713 = state_24665__$1;(statearr_24667_24713[(2)] = inst_24614);
(statearr_24667_24713[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (20)))
{var inst_24624 = (state_24665[(8)]);var state_24665__$1 = state_24665;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24665__$1,(23),out,inst_24624);
} else
{if((state_val_24666 === (1)))
{var inst_24599 = (state_24665[(9)]);var inst_24599__$1 = calc_state.call(null);var inst_24600 = cljs.core.seq_QMARK_.call(null,inst_24599__$1);var state_24665__$1 = (function (){var statearr_24668 = state_24665;(statearr_24668[(9)] = inst_24599__$1);
return statearr_24668;
})();if(inst_24600)
{var statearr_24669_24714 = state_24665__$1;(statearr_24669_24714[(1)] = (2));
} else
{var statearr_24670_24715 = state_24665__$1;(statearr_24670_24715[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (24)))
{var inst_24617 = (state_24665[(10)]);var inst_24609 = inst_24617;var state_24665__$1 = (function (){var statearr_24671 = state_24665;(statearr_24671[(7)] = inst_24609);
return statearr_24671;
})();var statearr_24672_24716 = state_24665__$1;(statearr_24672_24716[(2)] = null);
(statearr_24672_24716[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (4)))
{var inst_24599 = (state_24665[(9)]);var inst_24605 = (state_24665[(2)]);var inst_24606 = cljs.core.get.call(null,inst_24605,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24607 = cljs.core.get.call(null,inst_24605,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24608 = cljs.core.get.call(null,inst_24605,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_24609 = inst_24599;var state_24665__$1 = (function (){var statearr_24673 = state_24665;(statearr_24673[(7)] = inst_24609);
(statearr_24673[(11)] = inst_24607);
(statearr_24673[(12)] = inst_24608);
(statearr_24673[(13)] = inst_24606);
return statearr_24673;
})();var statearr_24674_24717 = state_24665__$1;(statearr_24674_24717[(2)] = null);
(statearr_24674_24717[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (15)))
{var state_24665__$1 = state_24665;var statearr_24675_24718 = state_24665__$1;(statearr_24675_24718[(2)] = null);
(statearr_24675_24718[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (21)))
{var inst_24617 = (state_24665[(10)]);var inst_24609 = inst_24617;var state_24665__$1 = (function (){var statearr_24676 = state_24665;(statearr_24676[(7)] = inst_24609);
return statearr_24676;
})();var statearr_24677_24719 = state_24665__$1;(statearr_24677_24719[(2)] = null);
(statearr_24677_24719[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (13)))
{var inst_24661 = (state_24665[(2)]);var state_24665__$1 = state_24665;var statearr_24678_24720 = state_24665__$1;(statearr_24678_24720[(2)] = inst_24661);
(statearr_24678_24720[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (22)))
{var inst_24659 = (state_24665[(2)]);var state_24665__$1 = state_24665;var statearr_24679_24721 = state_24665__$1;(statearr_24679_24721[(2)] = inst_24659);
(statearr_24679_24721[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (6)))
{var inst_24663 = (state_24665[(2)]);var state_24665__$1 = state_24665;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24665__$1,inst_24663);
} else
{if((state_val_24666 === (25)))
{var state_24665__$1 = state_24665;var statearr_24680_24722 = state_24665__$1;(statearr_24680_24722[(2)] = null);
(statearr_24680_24722[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (17)))
{var inst_24639 = (state_24665[(14)]);var state_24665__$1 = state_24665;var statearr_24681_24723 = state_24665__$1;(statearr_24681_24723[(2)] = inst_24639);
(statearr_24681_24723[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (3)))
{var inst_24599 = (state_24665[(9)]);var state_24665__$1 = state_24665;var statearr_24682_24724 = state_24665__$1;(statearr_24682_24724[(2)] = inst_24599);
(statearr_24682_24724[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (12)))
{var inst_24639 = (state_24665[(14)]);var inst_24625 = (state_24665[(15)]);var inst_24620 = (state_24665[(16)]);var inst_24639__$1 = inst_24620.call(null,inst_24625);var state_24665__$1 = (function (){var statearr_24683 = state_24665;(statearr_24683[(14)] = inst_24639__$1);
return statearr_24683;
})();if(cljs.core.truth_(inst_24639__$1))
{var statearr_24684_24725 = state_24665__$1;(statearr_24684_24725[(1)] = (17));
} else
{var statearr_24685_24726 = state_24665__$1;(statearr_24685_24726[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (2)))
{var inst_24599 = (state_24665[(9)]);var inst_24602 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24599);var state_24665__$1 = state_24665;var statearr_24686_24727 = state_24665__$1;(statearr_24686_24727[(2)] = inst_24602);
(statearr_24686_24727[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (23)))
{var inst_24650 = (state_24665[(2)]);var state_24665__$1 = state_24665;if(cljs.core.truth_(inst_24650))
{var statearr_24687_24728 = state_24665__$1;(statearr_24687_24728[(1)] = (24));
} else
{var statearr_24688_24729 = state_24665__$1;(statearr_24688_24729[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (19)))
{var inst_24647 = (state_24665[(2)]);var state_24665__$1 = state_24665;if(cljs.core.truth_(inst_24647))
{var statearr_24689_24730 = state_24665__$1;(statearr_24689_24730[(1)] = (20));
} else
{var statearr_24690_24731 = state_24665__$1;(statearr_24690_24731[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (11)))
{var inst_24624 = (state_24665[(8)]);var inst_24630 = (inst_24624 == null);var state_24665__$1 = state_24665;if(cljs.core.truth_(inst_24630))
{var statearr_24691_24732 = state_24665__$1;(statearr_24691_24732[(1)] = (14));
} else
{var statearr_24692_24733 = state_24665__$1;(statearr_24692_24733[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (9)))
{var inst_24617 = (state_24665[(10)]);var inst_24617__$1 = (state_24665[(2)]);var inst_24618 = cljs.core.get.call(null,inst_24617__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24619 = cljs.core.get.call(null,inst_24617__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24620 = cljs.core.get.call(null,inst_24617__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_24665__$1 = (function (){var statearr_24693 = state_24665;(statearr_24693[(17)] = inst_24619);
(statearr_24693[(10)] = inst_24617__$1);
(statearr_24693[(16)] = inst_24620);
return statearr_24693;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_24665__$1,(10),inst_24618);
} else
{if((state_val_24666 === (5)))
{var inst_24609 = (state_24665[(7)]);var inst_24612 = cljs.core.seq_QMARK_.call(null,inst_24609);var state_24665__$1 = state_24665;if(inst_24612)
{var statearr_24694_24734 = state_24665__$1;(statearr_24694_24734[(1)] = (7));
} else
{var statearr_24695_24735 = state_24665__$1;(statearr_24695_24735[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (14)))
{var inst_24625 = (state_24665[(15)]);var inst_24632 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24625);var state_24665__$1 = state_24665;var statearr_24696_24736 = state_24665__$1;(statearr_24696_24736[(2)] = inst_24632);
(statearr_24696_24736[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (26)))
{var inst_24655 = (state_24665[(2)]);var state_24665__$1 = state_24665;var statearr_24697_24737 = state_24665__$1;(statearr_24697_24737[(2)] = inst_24655);
(statearr_24697_24737[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (16)))
{var inst_24635 = (state_24665[(2)]);var inst_24636 = calc_state.call(null);var inst_24609 = inst_24636;var state_24665__$1 = (function (){var statearr_24698 = state_24665;(statearr_24698[(7)] = inst_24609);
(statearr_24698[(18)] = inst_24635);
return statearr_24698;
})();var statearr_24699_24738 = state_24665__$1;(statearr_24699_24738[(2)] = null);
(statearr_24699_24738[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (10)))
{var inst_24624 = (state_24665[(8)]);var inst_24625 = (state_24665[(15)]);var inst_24623 = (state_24665[(2)]);var inst_24624__$1 = cljs.core.nth.call(null,inst_24623,(0),null);var inst_24625__$1 = cljs.core.nth.call(null,inst_24623,(1),null);var inst_24626 = (inst_24624__$1 == null);var inst_24627 = cljs.core._EQ_.call(null,inst_24625__$1,change);var inst_24628 = (inst_24626) || (inst_24627);var state_24665__$1 = (function (){var statearr_24700 = state_24665;(statearr_24700[(8)] = inst_24624__$1);
(statearr_24700[(15)] = inst_24625__$1);
return statearr_24700;
})();if(cljs.core.truth_(inst_24628))
{var statearr_24701_24739 = state_24665__$1;(statearr_24701_24739[(1)] = (11));
} else
{var statearr_24702_24740 = state_24665__$1;(statearr_24702_24740[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (18)))
{var inst_24619 = (state_24665[(17)]);var inst_24625 = (state_24665[(15)]);var inst_24620 = (state_24665[(16)]);var inst_24642 = cljs.core.empty_QMARK_.call(null,inst_24620);var inst_24643 = inst_24619.call(null,inst_24625);var inst_24644 = cljs.core.not.call(null,inst_24643);var inst_24645 = (inst_24642) && (inst_24644);var state_24665__$1 = state_24665;var statearr_24703_24741 = state_24665__$1;(statearr_24703_24741[(2)] = inst_24645);
(statearr_24703_24741[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24666 === (8)))
{var inst_24609 = (state_24665[(7)]);var state_24665__$1 = state_24665;var statearr_24704_24742 = state_24665__$1;(statearr_24704_24742[(2)] = inst_24609);
(statearr_24704_24742[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6376__auto___24712,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6361__auto__,c__6376__auto___24712,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_24708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24708[(0)] = state_machine__6362__auto__);
(statearr_24708[(1)] = (1));
return statearr_24708;
});
var state_machine__6362__auto____1 = (function (state_24665){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_24665);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e24709){if((e24709 instanceof Object))
{var ex__6365__auto__ = e24709;var statearr_24710_24743 = state_24665;(statearr_24710_24743[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24665);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24709;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24744 = state_24665;
state_24665 = G__24744;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_24665){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_24665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___24712,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6378__auto__ = (function (){var statearr_24711 = f__6377__auto__.call(null);(statearr_24711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___24712);
return statearr_24711;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___24712,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj24746 = {};return obj24746;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3560__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3560__auto__,mults){
return (function (p1__24747_SHARP_){if(cljs.core.truth_(p1__24747_SHARP_.call(null,topic)))
{return p1__24747_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__24747_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3560__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24870 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24870 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24871){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24871 = meta24871;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24870.cljs$lang$type = true;
cljs.core.async.t24870.cljs$lang$ctorStr = "cljs.core.async/t24870";
cljs.core.async.t24870.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t24870");
});})(mults,ensure_mult))
;
cljs.core.async.t24870.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24870.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24870.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24870.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24870.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24870.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24870.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24870.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24872){var self__ = this;
var _24872__$1 = this;return self__.meta24871;
});})(mults,ensure_mult))
;
cljs.core.async.t24870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24872,meta24871__$1){var self__ = this;
var _24872__$1 = this;return (new cljs.core.async.t24870(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24871__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24870 = ((function (mults,ensure_mult){
return (function __GT_t24870(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24871){return (new cljs.core.async.t24870(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24871));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24870(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6376__auto___24992 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___24992,mults,ensure_mult,p){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___24992,mults,ensure_mult,p){
return (function (state_24944){var state_val_24945 = (state_24944[(1)]);if((state_val_24945 === (7)))
{var inst_24940 = (state_24944[(2)]);var state_24944__$1 = state_24944;var statearr_24946_24993 = state_24944__$1;(statearr_24946_24993[(2)] = inst_24940);
(statearr_24946_24993[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (20)))
{var state_24944__$1 = state_24944;var statearr_24947_24994 = state_24944__$1;(statearr_24947_24994[(2)] = null);
(statearr_24947_24994[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (1)))
{var state_24944__$1 = state_24944;var statearr_24948_24995 = state_24944__$1;(statearr_24948_24995[(2)] = null);
(statearr_24948_24995[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (24)))
{var inst_24923 = (state_24944[(7)]);var inst_24932 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24923);var state_24944__$1 = state_24944;var statearr_24949_24996 = state_24944__$1;(statearr_24949_24996[(2)] = inst_24932);
(statearr_24949_24996[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (4)))
{var inst_24875 = (state_24944[(8)]);var inst_24875__$1 = (state_24944[(2)]);var inst_24876 = (inst_24875__$1 == null);var state_24944__$1 = (function (){var statearr_24950 = state_24944;(statearr_24950[(8)] = inst_24875__$1);
return statearr_24950;
})();if(cljs.core.truth_(inst_24876))
{var statearr_24951_24997 = state_24944__$1;(statearr_24951_24997[(1)] = (5));
} else
{var statearr_24952_24998 = state_24944__$1;(statearr_24952_24998[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (15)))
{var inst_24917 = (state_24944[(2)]);var state_24944__$1 = state_24944;var statearr_24953_24999 = state_24944__$1;(statearr_24953_24999[(2)] = inst_24917);
(statearr_24953_24999[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (21)))
{var inst_24937 = (state_24944[(2)]);var state_24944__$1 = (function (){var statearr_24954 = state_24944;(statearr_24954[(9)] = inst_24937);
return statearr_24954;
})();var statearr_24955_25000 = state_24944__$1;(statearr_24955_25000[(2)] = null);
(statearr_24955_25000[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (13)))
{var inst_24899 = (state_24944[(10)]);var inst_24901 = cljs.core.chunked_seq_QMARK_.call(null,inst_24899);var state_24944__$1 = state_24944;if(inst_24901)
{var statearr_24956_25001 = state_24944__$1;(statearr_24956_25001[(1)] = (16));
} else
{var statearr_24957_25002 = state_24944__$1;(statearr_24957_25002[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (22)))
{var inst_24929 = (state_24944[(2)]);var state_24944__$1 = state_24944;if(cljs.core.truth_(inst_24929))
{var statearr_24958_25003 = state_24944__$1;(statearr_24958_25003[(1)] = (23));
} else
{var statearr_24959_25004 = state_24944__$1;(statearr_24959_25004[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (6)))
{var inst_24923 = (state_24944[(7)]);var inst_24875 = (state_24944[(8)]);var inst_24925 = (state_24944[(11)]);var inst_24923__$1 = topic_fn.call(null,inst_24875);var inst_24924 = cljs.core.deref.call(null,mults);var inst_24925__$1 = cljs.core.get.call(null,inst_24924,inst_24923__$1);var state_24944__$1 = (function (){var statearr_24960 = state_24944;(statearr_24960[(7)] = inst_24923__$1);
(statearr_24960[(11)] = inst_24925__$1);
return statearr_24960;
})();if(cljs.core.truth_(inst_24925__$1))
{var statearr_24961_25005 = state_24944__$1;(statearr_24961_25005[(1)] = (19));
} else
{var statearr_24962_25006 = state_24944__$1;(statearr_24962_25006[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (25)))
{var inst_24934 = (state_24944[(2)]);var state_24944__$1 = state_24944;var statearr_24963_25007 = state_24944__$1;(statearr_24963_25007[(2)] = inst_24934);
(statearr_24963_25007[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (17)))
{var inst_24899 = (state_24944[(10)]);var inst_24908 = cljs.core.first.call(null,inst_24899);var inst_24909 = cljs.core.async.muxch_STAR_.call(null,inst_24908);var inst_24910 = cljs.core.async.close_BANG_.call(null,inst_24909);var inst_24911 = cljs.core.next.call(null,inst_24899);var inst_24885 = inst_24911;var inst_24886 = null;var inst_24887 = (0);var inst_24888 = (0);var state_24944__$1 = (function (){var statearr_24964 = state_24944;(statearr_24964[(12)] = inst_24888);
(statearr_24964[(13)] = inst_24887);
(statearr_24964[(14)] = inst_24885);
(statearr_24964[(15)] = inst_24910);
(statearr_24964[(16)] = inst_24886);
return statearr_24964;
})();var statearr_24965_25008 = state_24944__$1;(statearr_24965_25008[(2)] = null);
(statearr_24965_25008[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (3)))
{var inst_24942 = (state_24944[(2)]);var state_24944__$1 = state_24944;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24944__$1,inst_24942);
} else
{if((state_val_24945 === (12)))
{var inst_24919 = (state_24944[(2)]);var state_24944__$1 = state_24944;var statearr_24966_25009 = state_24944__$1;(statearr_24966_25009[(2)] = inst_24919);
(statearr_24966_25009[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (2)))
{var state_24944__$1 = state_24944;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24944__$1,(4),ch);
} else
{if((state_val_24945 === (23)))
{var state_24944__$1 = state_24944;var statearr_24967_25010 = state_24944__$1;(statearr_24967_25010[(2)] = null);
(statearr_24967_25010[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (19)))
{var inst_24875 = (state_24944[(8)]);var inst_24925 = (state_24944[(11)]);var inst_24927 = cljs.core.async.muxch_STAR_.call(null,inst_24925);var state_24944__$1 = state_24944;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24944__$1,(22),inst_24927,inst_24875);
} else
{if((state_val_24945 === (11)))
{var inst_24885 = (state_24944[(14)]);var inst_24899 = (state_24944[(10)]);var inst_24899__$1 = cljs.core.seq.call(null,inst_24885);var state_24944__$1 = (function (){var statearr_24968 = state_24944;(statearr_24968[(10)] = inst_24899__$1);
return statearr_24968;
})();if(inst_24899__$1)
{var statearr_24969_25011 = state_24944__$1;(statearr_24969_25011[(1)] = (13));
} else
{var statearr_24970_25012 = state_24944__$1;(statearr_24970_25012[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (9)))
{var inst_24921 = (state_24944[(2)]);var state_24944__$1 = state_24944;var statearr_24971_25013 = state_24944__$1;(statearr_24971_25013[(2)] = inst_24921);
(statearr_24971_25013[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (5)))
{var inst_24882 = cljs.core.deref.call(null,mults);var inst_24883 = cljs.core.vals.call(null,inst_24882);var inst_24884 = cljs.core.seq.call(null,inst_24883);var inst_24885 = inst_24884;var inst_24886 = null;var inst_24887 = (0);var inst_24888 = (0);var state_24944__$1 = (function (){var statearr_24972 = state_24944;(statearr_24972[(12)] = inst_24888);
(statearr_24972[(13)] = inst_24887);
(statearr_24972[(14)] = inst_24885);
(statearr_24972[(16)] = inst_24886);
return statearr_24972;
})();var statearr_24973_25014 = state_24944__$1;(statearr_24973_25014[(2)] = null);
(statearr_24973_25014[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (14)))
{var state_24944__$1 = state_24944;var statearr_24977_25015 = state_24944__$1;(statearr_24977_25015[(2)] = null);
(statearr_24977_25015[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (16)))
{var inst_24899 = (state_24944[(10)]);var inst_24903 = cljs.core.chunk_first.call(null,inst_24899);var inst_24904 = cljs.core.chunk_rest.call(null,inst_24899);var inst_24905 = cljs.core.count.call(null,inst_24903);var inst_24885 = inst_24904;var inst_24886 = inst_24903;var inst_24887 = inst_24905;var inst_24888 = (0);var state_24944__$1 = (function (){var statearr_24978 = state_24944;(statearr_24978[(12)] = inst_24888);
(statearr_24978[(13)] = inst_24887);
(statearr_24978[(14)] = inst_24885);
(statearr_24978[(16)] = inst_24886);
return statearr_24978;
})();var statearr_24979_25016 = state_24944__$1;(statearr_24979_25016[(2)] = null);
(statearr_24979_25016[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (10)))
{var inst_24888 = (state_24944[(12)]);var inst_24887 = (state_24944[(13)]);var inst_24885 = (state_24944[(14)]);var inst_24886 = (state_24944[(16)]);var inst_24893 = cljs.core._nth.call(null,inst_24886,inst_24888);var inst_24894 = cljs.core.async.muxch_STAR_.call(null,inst_24893);var inst_24895 = cljs.core.async.close_BANG_.call(null,inst_24894);var inst_24896 = (inst_24888 + (1));var tmp24974 = inst_24887;var tmp24975 = inst_24885;var tmp24976 = inst_24886;var inst_24885__$1 = tmp24975;var inst_24886__$1 = tmp24976;var inst_24887__$1 = tmp24974;var inst_24888__$1 = inst_24896;var state_24944__$1 = (function (){var statearr_24980 = state_24944;(statearr_24980[(12)] = inst_24888__$1);
(statearr_24980[(13)] = inst_24887__$1);
(statearr_24980[(14)] = inst_24885__$1);
(statearr_24980[(17)] = inst_24895);
(statearr_24980[(16)] = inst_24886__$1);
return statearr_24980;
})();var statearr_24981_25017 = state_24944__$1;(statearr_24981_25017[(2)] = null);
(statearr_24981_25017[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (18)))
{var inst_24914 = (state_24944[(2)]);var state_24944__$1 = state_24944;var statearr_24982_25018 = state_24944__$1;(statearr_24982_25018[(2)] = inst_24914);
(statearr_24982_25018[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24945 === (8)))
{var inst_24888 = (state_24944[(12)]);var inst_24887 = (state_24944[(13)]);var inst_24890 = (inst_24888 < inst_24887);var inst_24891 = inst_24890;var state_24944__$1 = state_24944;if(cljs.core.truth_(inst_24891))
{var statearr_24983_25019 = state_24944__$1;(statearr_24983_25019[(1)] = (10));
} else
{var statearr_24984_25020 = state_24944__$1;(statearr_24984_25020[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6376__auto___24992,mults,ensure_mult,p))
;return ((function (switch__6361__auto__,c__6376__auto___24992,mults,ensure_mult,p){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_24988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24988[(0)] = state_machine__6362__auto__);
(statearr_24988[(1)] = (1));
return statearr_24988;
});
var state_machine__6362__auto____1 = (function (state_24944){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_24944);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e24989){if((e24989 instanceof Object))
{var ex__6365__auto__ = e24989;var statearr_24990_25021 = state_24944;(statearr_24990_25021[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24944);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24989;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25022 = state_24944;
state_24944 = G__25022;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_24944){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_24944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___24992,mults,ensure_mult,p))
})();var state__6378__auto__ = (function (){var statearr_24991 = f__6377__auto__.call(null);(statearr_24991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___24992);
return statearr_24991;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___24992,mults,ensure_mult,p))
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
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6376__auto___25159 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___25159,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___25159,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25129){var state_val_25130 = (state_25129[(1)]);if((state_val_25130 === (7)))
{var state_25129__$1 = state_25129;var statearr_25131_25160 = state_25129__$1;(statearr_25131_25160[(2)] = null);
(statearr_25131_25160[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25130 === (1)))
{var state_25129__$1 = state_25129;var statearr_25132_25161 = state_25129__$1;(statearr_25132_25161[(2)] = null);
(statearr_25132_25161[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25130 === (4)))
{var inst_25093 = (state_25129[(7)]);var inst_25095 = (inst_25093 < cnt);var state_25129__$1 = state_25129;if(cljs.core.truth_(inst_25095))
{var statearr_25133_25162 = state_25129__$1;(statearr_25133_25162[(1)] = (6));
} else
{var statearr_25134_25163 = state_25129__$1;(statearr_25134_25163[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25130 === (15)))
{var inst_25125 = (state_25129[(2)]);var state_25129__$1 = state_25129;var statearr_25135_25164 = state_25129__$1;(statearr_25135_25164[(2)] = inst_25125);
(statearr_25135_25164[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25130 === (13)))
{var inst_25118 = cljs.core.async.close_BANG_.call(null,out);var state_25129__$1 = state_25129;var statearr_25136_25165 = state_25129__$1;(statearr_25136_25165[(2)] = inst_25118);
(statearr_25136_25165[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25130 === (6)))
{var state_25129__$1 = state_25129;var statearr_25137_25166 = state_25129__$1;(statearr_25137_25166[(2)] = null);
(statearr_25137_25166[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25130 === (3)))
{var inst_25127 = (state_25129[(2)]);var state_25129__$1 = state_25129;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25129__$1,inst_25127);
} else
{if((state_val_25130 === (12)))
{var inst_25115 = (state_25129[(8)]);var inst_25115__$1 = (state_25129[(2)]);var inst_25116 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25115__$1);var state_25129__$1 = (function (){var statearr_25138 = state_25129;(statearr_25138[(8)] = inst_25115__$1);
return statearr_25138;
})();if(cljs.core.truth_(inst_25116))
{var statearr_25139_25167 = state_25129__$1;(statearr_25139_25167[(1)] = (13));
} else
{var statearr_25140_25168 = state_25129__$1;(statearr_25140_25168[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25130 === (2)))
{var inst_25092 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25093 = (0);var state_25129__$1 = (function (){var statearr_25141 = state_25129;(statearr_25141[(9)] = inst_25092);
(statearr_25141[(7)] = inst_25093);
return statearr_25141;
})();var statearr_25142_25169 = state_25129__$1;(statearr_25142_25169[(2)] = null);
(statearr_25142_25169[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25130 === (11)))
{var inst_25093 = (state_25129[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25129,(10),Object,null,(9));var inst_25102 = chs__$1.call(null,inst_25093);var inst_25103 = done.call(null,inst_25093);var inst_25104 = cljs.core.async.take_BANG_.call(null,inst_25102,inst_25103);var state_25129__$1 = state_25129;var statearr_25143_25170 = state_25129__$1;(statearr_25143_25170[(2)] = inst_25104);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25129__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25130 === (9)))
{var inst_25093 = (state_25129[(7)]);var inst_25106 = (state_25129[(2)]);var inst_25107 = (inst_25093 + (1));var inst_25093__$1 = inst_25107;var state_25129__$1 = (function (){var statearr_25144 = state_25129;(statearr_25144[(10)] = inst_25106);
(statearr_25144[(7)] = inst_25093__$1);
return statearr_25144;
})();var statearr_25145_25171 = state_25129__$1;(statearr_25145_25171[(2)] = null);
(statearr_25145_25171[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25130 === (5)))
{var inst_25113 = (state_25129[(2)]);var state_25129__$1 = (function (){var statearr_25146 = state_25129;(statearr_25146[(11)] = inst_25113);
return statearr_25146;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25129__$1,(12),dchan);
} else
{if((state_val_25130 === (14)))
{var inst_25115 = (state_25129[(8)]);var inst_25120 = cljs.core.apply.call(null,f,inst_25115);var state_25129__$1 = state_25129;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25129__$1,(16),out,inst_25120);
} else
{if((state_val_25130 === (16)))
{var inst_25122 = (state_25129[(2)]);var state_25129__$1 = (function (){var statearr_25147 = state_25129;(statearr_25147[(12)] = inst_25122);
return statearr_25147;
})();var statearr_25148_25172 = state_25129__$1;(statearr_25148_25172[(2)] = null);
(statearr_25148_25172[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25130 === (10)))
{var inst_25097 = (state_25129[(2)]);var inst_25098 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25129__$1 = (function (){var statearr_25149 = state_25129;(statearr_25149[(13)] = inst_25097);
return statearr_25149;
})();var statearr_25150_25173 = state_25129__$1;(statearr_25150_25173[(2)] = inst_25098);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25129__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25130 === (8)))
{var inst_25111 = (state_25129[(2)]);var state_25129__$1 = state_25129;var statearr_25151_25174 = state_25129__$1;(statearr_25151_25174[(2)] = inst_25111);
(statearr_25151_25174[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
});})(c__6376__auto___25159,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6361__auto__,c__6376__auto___25159,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_25155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25155[(0)] = state_machine__6362__auto__);
(statearr_25155[(1)] = (1));
return statearr_25155;
});
var state_machine__6362__auto____1 = (function (state_25129){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_25129);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e25156){if((e25156 instanceof Object))
{var ex__6365__auto__ = e25156;var statearr_25157_25175 = state_25129;(statearr_25157_25175[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25129);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25156;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25176 = state_25129;
state_25129 = G__25176;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_25129){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_25129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___25159,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6378__auto__ = (function (){var statearr_25158 = f__6377__auto__.call(null);(statearr_25158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___25159);
return statearr_25158;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___25159,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___25284 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___25284,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___25284,out){
return (function (state_25260){var state_val_25261 = (state_25260[(1)]);if((state_val_25261 === (7)))
{var inst_25240 = (state_25260[(7)]);var inst_25239 = (state_25260[(8)]);var inst_25239__$1 = (state_25260[(2)]);var inst_25240__$1 = cljs.core.nth.call(null,inst_25239__$1,(0),null);var inst_25241 = cljs.core.nth.call(null,inst_25239__$1,(1),null);var inst_25242 = (inst_25240__$1 == null);var state_25260__$1 = (function (){var statearr_25262 = state_25260;(statearr_25262[(9)] = inst_25241);
(statearr_25262[(7)] = inst_25240__$1);
(statearr_25262[(8)] = inst_25239__$1);
return statearr_25262;
})();if(cljs.core.truth_(inst_25242))
{var statearr_25263_25285 = state_25260__$1;(statearr_25263_25285[(1)] = (8));
} else
{var statearr_25264_25286 = state_25260__$1;(statearr_25264_25286[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25261 === (1)))
{var inst_25231 = cljs.core.vec.call(null,chs);var inst_25232 = inst_25231;var state_25260__$1 = (function (){var statearr_25265 = state_25260;(statearr_25265[(10)] = inst_25232);
return statearr_25265;
})();var statearr_25266_25287 = state_25260__$1;(statearr_25266_25287[(2)] = null);
(statearr_25266_25287[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25261 === (4)))
{var inst_25232 = (state_25260[(10)]);var state_25260__$1 = state_25260;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_25260__$1,(7),inst_25232);
} else
{if((state_val_25261 === (6)))
{var inst_25256 = (state_25260[(2)]);var state_25260__$1 = state_25260;var statearr_25267_25288 = state_25260__$1;(statearr_25267_25288[(2)] = inst_25256);
(statearr_25267_25288[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25261 === (3)))
{var inst_25258 = (state_25260[(2)]);var state_25260__$1 = state_25260;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25260__$1,inst_25258);
} else
{if((state_val_25261 === (2)))
{var inst_25232 = (state_25260[(10)]);var inst_25234 = cljs.core.count.call(null,inst_25232);var inst_25235 = (inst_25234 > (0));var state_25260__$1 = state_25260;if(cljs.core.truth_(inst_25235))
{var statearr_25269_25289 = state_25260__$1;(statearr_25269_25289[(1)] = (4));
} else
{var statearr_25270_25290 = state_25260__$1;(statearr_25270_25290[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25261 === (11)))
{var inst_25232 = (state_25260[(10)]);var inst_25249 = (state_25260[(2)]);var tmp25268 = inst_25232;var inst_25232__$1 = tmp25268;var state_25260__$1 = (function (){var statearr_25271 = state_25260;(statearr_25271[(10)] = inst_25232__$1);
(statearr_25271[(11)] = inst_25249);
return statearr_25271;
})();var statearr_25272_25291 = state_25260__$1;(statearr_25272_25291[(2)] = null);
(statearr_25272_25291[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25261 === (9)))
{var inst_25240 = (state_25260[(7)]);var state_25260__$1 = state_25260;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25260__$1,(11),out,inst_25240);
} else
{if((state_val_25261 === (5)))
{var inst_25254 = cljs.core.async.close_BANG_.call(null,out);var state_25260__$1 = state_25260;var statearr_25273_25292 = state_25260__$1;(statearr_25273_25292[(2)] = inst_25254);
(statearr_25273_25292[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25261 === (10)))
{var inst_25252 = (state_25260[(2)]);var state_25260__$1 = state_25260;var statearr_25274_25293 = state_25260__$1;(statearr_25274_25293[(2)] = inst_25252);
(statearr_25274_25293[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25261 === (8)))
{var inst_25241 = (state_25260[(9)]);var inst_25232 = (state_25260[(10)]);var inst_25240 = (state_25260[(7)]);var inst_25239 = (state_25260[(8)]);var inst_25244 = (function (){var c = inst_25241;var v = inst_25240;var vec__25237 = inst_25239;var cs = inst_25232;return ((function (c,v,vec__25237,cs,inst_25241,inst_25232,inst_25240,inst_25239,state_val_25261,c__6376__auto___25284,out){
return (function (p1__25177_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25177_SHARP_);
});
;})(c,v,vec__25237,cs,inst_25241,inst_25232,inst_25240,inst_25239,state_val_25261,c__6376__auto___25284,out))
})();var inst_25245 = cljs.core.filterv.call(null,inst_25244,inst_25232);var inst_25232__$1 = inst_25245;var state_25260__$1 = (function (){var statearr_25275 = state_25260;(statearr_25275[(10)] = inst_25232__$1);
return statearr_25275;
})();var statearr_25276_25294 = state_25260__$1;(statearr_25276_25294[(2)] = null);
(statearr_25276_25294[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});})(c__6376__auto___25284,out))
;return ((function (switch__6361__auto__,c__6376__auto___25284,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_25280 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25280[(0)] = state_machine__6362__auto__);
(statearr_25280[(1)] = (1));
return statearr_25280;
});
var state_machine__6362__auto____1 = (function (state_25260){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_25260);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e25281){if((e25281 instanceof Object))
{var ex__6365__auto__ = e25281;var statearr_25282_25295 = state_25260;(statearr_25282_25295[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25260);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25281;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25296 = state_25260;
state_25260 = G__25296;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_25260){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_25260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___25284,out))
})();var state__6378__auto__ = (function (){var statearr_25283 = f__6377__auto__.call(null);(statearr_25283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___25284);
return statearr_25283;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___25284,out))
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___25389 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___25389,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___25389,out){
return (function (state_25366){var state_val_25367 = (state_25366[(1)]);if((state_val_25367 === (7)))
{var inst_25348 = (state_25366[(7)]);var inst_25348__$1 = (state_25366[(2)]);var inst_25349 = (inst_25348__$1 == null);var inst_25350 = cljs.core.not.call(null,inst_25349);var state_25366__$1 = (function (){var statearr_25368 = state_25366;(statearr_25368[(7)] = inst_25348__$1);
return statearr_25368;
})();if(inst_25350)
{var statearr_25369_25390 = state_25366__$1;(statearr_25369_25390[(1)] = (8));
} else
{var statearr_25370_25391 = state_25366__$1;(statearr_25370_25391[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25367 === (1)))
{var inst_25343 = (0);var state_25366__$1 = (function (){var statearr_25371 = state_25366;(statearr_25371[(8)] = inst_25343);
return statearr_25371;
})();var statearr_25372_25392 = state_25366__$1;(statearr_25372_25392[(2)] = null);
(statearr_25372_25392[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25367 === (4)))
{var state_25366__$1 = state_25366;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25366__$1,(7),ch);
} else
{if((state_val_25367 === (6)))
{var inst_25361 = (state_25366[(2)]);var state_25366__$1 = state_25366;var statearr_25373_25393 = state_25366__$1;(statearr_25373_25393[(2)] = inst_25361);
(statearr_25373_25393[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25367 === (3)))
{var inst_25363 = (state_25366[(2)]);var inst_25364 = cljs.core.async.close_BANG_.call(null,out);var state_25366__$1 = (function (){var statearr_25374 = state_25366;(statearr_25374[(9)] = inst_25363);
return statearr_25374;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25366__$1,inst_25364);
} else
{if((state_val_25367 === (2)))
{var inst_25343 = (state_25366[(8)]);var inst_25345 = (inst_25343 < n);var state_25366__$1 = state_25366;if(cljs.core.truth_(inst_25345))
{var statearr_25375_25394 = state_25366__$1;(statearr_25375_25394[(1)] = (4));
} else
{var statearr_25376_25395 = state_25366__$1;(statearr_25376_25395[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25367 === (11)))
{var inst_25343 = (state_25366[(8)]);var inst_25353 = (state_25366[(2)]);var inst_25354 = (inst_25343 + (1));var inst_25343__$1 = inst_25354;var state_25366__$1 = (function (){var statearr_25377 = state_25366;(statearr_25377[(8)] = inst_25343__$1);
(statearr_25377[(10)] = inst_25353);
return statearr_25377;
})();var statearr_25378_25396 = state_25366__$1;(statearr_25378_25396[(2)] = null);
(statearr_25378_25396[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25367 === (9)))
{var state_25366__$1 = state_25366;var statearr_25379_25397 = state_25366__$1;(statearr_25379_25397[(2)] = null);
(statearr_25379_25397[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25367 === (5)))
{var state_25366__$1 = state_25366;var statearr_25380_25398 = state_25366__$1;(statearr_25380_25398[(2)] = null);
(statearr_25380_25398[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25367 === (10)))
{var inst_25358 = (state_25366[(2)]);var state_25366__$1 = state_25366;var statearr_25381_25399 = state_25366__$1;(statearr_25381_25399[(2)] = inst_25358);
(statearr_25381_25399[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25367 === (8)))
{var inst_25348 = (state_25366[(7)]);var state_25366__$1 = state_25366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25366__$1,(11),out,inst_25348);
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
}
}
}
});})(c__6376__auto___25389,out))
;return ((function (switch__6361__auto__,c__6376__auto___25389,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_25385 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25385[(0)] = state_machine__6362__auto__);
(statearr_25385[(1)] = (1));
return statearr_25385;
});
var state_machine__6362__auto____1 = (function (state_25366){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_25366);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e25386){if((e25386 instanceof Object))
{var ex__6365__auto__ = e25386;var statearr_25387_25400 = state_25366;(statearr_25387_25400[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25366);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25386;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25401 = state_25366;
state_25366 = G__25401;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_25366){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_25366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___25389,out))
})();var state__6378__auto__ = (function (){var statearr_25388 = f__6377__auto__.call(null);(statearr_25388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___25389);
return statearr_25388;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___25389,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25409 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25409 = (function (ch,f,map_LT_,meta25410){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25410 = meta25410;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25409.cljs$lang$type = true;
cljs.core.async.t25409.cljs$lang$ctorStr = "cljs.core.async/t25409";
cljs.core.async.t25409.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t25409");
});
cljs.core.async.t25409.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25409.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25409.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25409.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25412 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25412 = (function (fn1,_,meta25410,ch,f,map_LT_,meta25413){
this.fn1 = fn1;
this._ = _;
this.meta25410 = meta25410;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25413 = meta25413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25412.cljs$lang$type = true;
cljs.core.async.t25412.cljs$lang$ctorStr = "cljs.core.async/t25412";
cljs.core.async.t25412.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t25412");
});})(___$1))
;
cljs.core.async.t25412.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25412.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25402_SHARP_){return f1.call(null,(((p1__25402_SHARP_ == null))?null:self__.f.call(null,p1__25402_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25414){var self__ = this;
var _25414__$1 = this;return self__.meta25413;
});})(___$1))
;
cljs.core.async.t25412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25414,meta25413__$1){var self__ = this;
var _25414__$1 = this;return (new cljs.core.async.t25412(self__.fn1,self__._,self__.meta25410,self__.ch,self__.f,self__.map_LT_,meta25413__$1));
});})(___$1))
;
cljs.core.async.__GT_t25412 = ((function (___$1){
return (function __GT_t25412(fn1__$1,___$2,meta25410__$1,ch__$2,f__$2,map_LT___$2,meta25413){return (new cljs.core.async.t25412(fn1__$1,___$2,meta25410__$1,ch__$2,f__$2,map_LT___$2,meta25413));
});})(___$1))
;
}
return (new cljs.core.async.t25412(fn1,___$1,self__.meta25410,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3548__auto__ = ret;if(cljs.core.truth_(and__3548__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3548__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t25409.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25409.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25409.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25411){var self__ = this;
var _25411__$1 = this;return self__.meta25410;
});
cljs.core.async.t25409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25411,meta25410__$1){var self__ = this;
var _25411__$1 = this;return (new cljs.core.async.t25409(self__.ch,self__.f,self__.map_LT_,meta25410__$1));
});
cljs.core.async.__GT_t25409 = (function __GT_t25409(ch__$1,f__$1,map_LT___$1,meta25410){return (new cljs.core.async.t25409(ch__$1,f__$1,map_LT___$1,meta25410));
});
}
return (new cljs.core.async.t25409(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25418 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25418 = (function (ch,f,map_GT_,meta25419){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25419 = meta25419;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25418.cljs$lang$type = true;
cljs.core.async.t25418.cljs$lang$ctorStr = "cljs.core.async/t25418";
cljs.core.async.t25418.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t25418");
});
cljs.core.async.t25418.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25418.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25418.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25418.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25418.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25418.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25420){var self__ = this;
var _25420__$1 = this;return self__.meta25419;
});
cljs.core.async.t25418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25420,meta25419__$1){var self__ = this;
var _25420__$1 = this;return (new cljs.core.async.t25418(self__.ch,self__.f,self__.map_GT_,meta25419__$1));
});
cljs.core.async.__GT_t25418 = (function __GT_t25418(ch__$1,f__$1,map_GT___$1,meta25419){return (new cljs.core.async.t25418(ch__$1,f__$1,map_GT___$1,meta25419));
});
}
return (new cljs.core.async.t25418(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25424 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25424 = (function (ch,p,filter_GT_,meta25425){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25425 = meta25425;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25424.cljs$lang$type = true;
cljs.core.async.t25424.cljs$lang$ctorStr = "cljs.core.async/t25424";
cljs.core.async.t25424.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t25424");
});
cljs.core.async.t25424.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25424.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25424.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25424.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25424.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25424.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25424.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25426){var self__ = this;
var _25426__$1 = this;return self__.meta25425;
});
cljs.core.async.t25424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25426,meta25425__$1){var self__ = this;
var _25426__$1 = this;return (new cljs.core.async.t25424(self__.ch,self__.p,self__.filter_GT_,meta25425__$1));
});
cljs.core.async.__GT_t25424 = (function __GT_t25424(ch__$1,p__$1,filter_GT___$1,meta25425){return (new cljs.core.async.t25424(ch__$1,p__$1,filter_GT___$1,meta25425));
});
}
return (new cljs.core.async.t25424(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___25509 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___25509,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___25509,out){
return (function (state_25488){var state_val_25489 = (state_25488[(1)]);if((state_val_25489 === (7)))
{var inst_25484 = (state_25488[(2)]);var state_25488__$1 = state_25488;var statearr_25490_25510 = state_25488__$1;(statearr_25490_25510[(2)] = inst_25484);
(statearr_25490_25510[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25489 === (1)))
{var state_25488__$1 = state_25488;var statearr_25491_25511 = state_25488__$1;(statearr_25491_25511[(2)] = null);
(statearr_25491_25511[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25489 === (4)))
{var inst_25470 = (state_25488[(7)]);var inst_25470__$1 = (state_25488[(2)]);var inst_25471 = (inst_25470__$1 == null);var state_25488__$1 = (function (){var statearr_25492 = state_25488;(statearr_25492[(7)] = inst_25470__$1);
return statearr_25492;
})();if(cljs.core.truth_(inst_25471))
{var statearr_25493_25512 = state_25488__$1;(statearr_25493_25512[(1)] = (5));
} else
{var statearr_25494_25513 = state_25488__$1;(statearr_25494_25513[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25489 === (6)))
{var inst_25470 = (state_25488[(7)]);var inst_25475 = p.call(null,inst_25470);var state_25488__$1 = state_25488;if(cljs.core.truth_(inst_25475))
{var statearr_25495_25514 = state_25488__$1;(statearr_25495_25514[(1)] = (8));
} else
{var statearr_25496_25515 = state_25488__$1;(statearr_25496_25515[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25489 === (3)))
{var inst_25486 = (state_25488[(2)]);var state_25488__$1 = state_25488;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25488__$1,inst_25486);
} else
{if((state_val_25489 === (2)))
{var state_25488__$1 = state_25488;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25488__$1,(4),ch);
} else
{if((state_val_25489 === (11)))
{var inst_25478 = (state_25488[(2)]);var state_25488__$1 = state_25488;var statearr_25497_25516 = state_25488__$1;(statearr_25497_25516[(2)] = inst_25478);
(statearr_25497_25516[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25489 === (9)))
{var state_25488__$1 = state_25488;var statearr_25498_25517 = state_25488__$1;(statearr_25498_25517[(2)] = null);
(statearr_25498_25517[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25489 === (5)))
{var inst_25473 = cljs.core.async.close_BANG_.call(null,out);var state_25488__$1 = state_25488;var statearr_25499_25518 = state_25488__$1;(statearr_25499_25518[(2)] = inst_25473);
(statearr_25499_25518[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25489 === (10)))
{var inst_25481 = (state_25488[(2)]);var state_25488__$1 = (function (){var statearr_25500 = state_25488;(statearr_25500[(8)] = inst_25481);
return statearr_25500;
})();var statearr_25501_25519 = state_25488__$1;(statearr_25501_25519[(2)] = null);
(statearr_25501_25519[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25489 === (8)))
{var inst_25470 = (state_25488[(7)]);var state_25488__$1 = state_25488;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25488__$1,(11),out,inst_25470);
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
}
}
}
});})(c__6376__auto___25509,out))
;return ((function (switch__6361__auto__,c__6376__auto___25509,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_25505 = [null,null,null,null,null,null,null,null,null];(statearr_25505[(0)] = state_machine__6362__auto__);
(statearr_25505[(1)] = (1));
return statearr_25505;
});
var state_machine__6362__auto____1 = (function (state_25488){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_25488);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e25506){if((e25506 instanceof Object))
{var ex__6365__auto__ = e25506;var statearr_25507_25520 = state_25488;(statearr_25507_25520[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25488);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25506;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25521 = state_25488;
state_25488 = G__25521;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_25488){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_25488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___25509,out))
})();var state__6378__auto__ = (function (){var statearr_25508 = f__6377__auto__.call(null);(statearr_25508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___25509);
return statearr_25508;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___25509,out))
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
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6376__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto__){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto__){
return (function (state_25687){var state_val_25688 = (state_25687[(1)]);if((state_val_25688 === (7)))
{var inst_25683 = (state_25687[(2)]);var state_25687__$1 = state_25687;var statearr_25689_25730 = state_25687__$1;(statearr_25689_25730[(2)] = inst_25683);
(statearr_25689_25730[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (20)))
{var inst_25653 = (state_25687[(7)]);var inst_25664 = (state_25687[(2)]);var inst_25665 = cljs.core.next.call(null,inst_25653);var inst_25639 = inst_25665;var inst_25640 = null;var inst_25641 = (0);var inst_25642 = (0);var state_25687__$1 = (function (){var statearr_25690 = state_25687;(statearr_25690[(8)] = inst_25640);
(statearr_25690[(9)] = inst_25639);
(statearr_25690[(10)] = inst_25664);
(statearr_25690[(11)] = inst_25642);
(statearr_25690[(12)] = inst_25641);
return statearr_25690;
})();var statearr_25691_25731 = state_25687__$1;(statearr_25691_25731[(2)] = null);
(statearr_25691_25731[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (1)))
{var state_25687__$1 = state_25687;var statearr_25692_25732 = state_25687__$1;(statearr_25692_25732[(2)] = null);
(statearr_25692_25732[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (4)))
{var inst_25628 = (state_25687[(13)]);var inst_25628__$1 = (state_25687[(2)]);var inst_25629 = (inst_25628__$1 == null);var state_25687__$1 = (function (){var statearr_25693 = state_25687;(statearr_25693[(13)] = inst_25628__$1);
return statearr_25693;
})();if(cljs.core.truth_(inst_25629))
{var statearr_25694_25733 = state_25687__$1;(statearr_25694_25733[(1)] = (5));
} else
{var statearr_25695_25734 = state_25687__$1;(statearr_25695_25734[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (15)))
{var state_25687__$1 = state_25687;var statearr_25699_25735 = state_25687__$1;(statearr_25699_25735[(2)] = null);
(statearr_25699_25735[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (21)))
{var state_25687__$1 = state_25687;var statearr_25700_25736 = state_25687__$1;(statearr_25700_25736[(2)] = null);
(statearr_25700_25736[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (13)))
{var inst_25640 = (state_25687[(8)]);var inst_25639 = (state_25687[(9)]);var inst_25642 = (state_25687[(11)]);var inst_25641 = (state_25687[(12)]);var inst_25649 = (state_25687[(2)]);var inst_25650 = (inst_25642 + (1));var tmp25696 = inst_25640;var tmp25697 = inst_25639;var tmp25698 = inst_25641;var inst_25639__$1 = tmp25697;var inst_25640__$1 = tmp25696;var inst_25641__$1 = tmp25698;var inst_25642__$1 = inst_25650;var state_25687__$1 = (function (){var statearr_25701 = state_25687;(statearr_25701[(14)] = inst_25649);
(statearr_25701[(8)] = inst_25640__$1);
(statearr_25701[(9)] = inst_25639__$1);
(statearr_25701[(11)] = inst_25642__$1);
(statearr_25701[(12)] = inst_25641__$1);
return statearr_25701;
})();var statearr_25702_25737 = state_25687__$1;(statearr_25702_25737[(2)] = null);
(statearr_25702_25737[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (22)))
{var state_25687__$1 = state_25687;var statearr_25703_25738 = state_25687__$1;(statearr_25703_25738[(2)] = null);
(statearr_25703_25738[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (6)))
{var inst_25628 = (state_25687[(13)]);var inst_25637 = f.call(null,inst_25628);var inst_25638 = cljs.core.seq.call(null,inst_25637);var inst_25639 = inst_25638;var inst_25640 = null;var inst_25641 = (0);var inst_25642 = (0);var state_25687__$1 = (function (){var statearr_25704 = state_25687;(statearr_25704[(8)] = inst_25640);
(statearr_25704[(9)] = inst_25639);
(statearr_25704[(11)] = inst_25642);
(statearr_25704[(12)] = inst_25641);
return statearr_25704;
})();var statearr_25705_25739 = state_25687__$1;(statearr_25705_25739[(2)] = null);
(statearr_25705_25739[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (17)))
{var inst_25653 = (state_25687[(7)]);var inst_25657 = cljs.core.chunk_first.call(null,inst_25653);var inst_25658 = cljs.core.chunk_rest.call(null,inst_25653);var inst_25659 = cljs.core.count.call(null,inst_25657);var inst_25639 = inst_25658;var inst_25640 = inst_25657;var inst_25641 = inst_25659;var inst_25642 = (0);var state_25687__$1 = (function (){var statearr_25706 = state_25687;(statearr_25706[(8)] = inst_25640);
(statearr_25706[(9)] = inst_25639);
(statearr_25706[(11)] = inst_25642);
(statearr_25706[(12)] = inst_25641);
return statearr_25706;
})();var statearr_25707_25740 = state_25687__$1;(statearr_25707_25740[(2)] = null);
(statearr_25707_25740[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (3)))
{var inst_25685 = (state_25687[(2)]);var state_25687__$1 = state_25687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25687__$1,inst_25685);
} else
{if((state_val_25688 === (12)))
{var inst_25673 = (state_25687[(2)]);var state_25687__$1 = state_25687;var statearr_25708_25741 = state_25687__$1;(statearr_25708_25741[(2)] = inst_25673);
(statearr_25708_25741[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (2)))
{var state_25687__$1 = state_25687;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25687__$1,(4),in$);
} else
{if((state_val_25688 === (23)))
{var inst_25681 = (state_25687[(2)]);var state_25687__$1 = state_25687;var statearr_25709_25742 = state_25687__$1;(statearr_25709_25742[(2)] = inst_25681);
(statearr_25709_25742[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (19)))
{var inst_25668 = (state_25687[(2)]);var state_25687__$1 = state_25687;var statearr_25710_25743 = state_25687__$1;(statearr_25710_25743[(2)] = inst_25668);
(statearr_25710_25743[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (11)))
{var inst_25653 = (state_25687[(7)]);var inst_25639 = (state_25687[(9)]);var inst_25653__$1 = cljs.core.seq.call(null,inst_25639);var state_25687__$1 = (function (){var statearr_25711 = state_25687;(statearr_25711[(7)] = inst_25653__$1);
return statearr_25711;
})();if(inst_25653__$1)
{var statearr_25712_25744 = state_25687__$1;(statearr_25712_25744[(1)] = (14));
} else
{var statearr_25713_25745 = state_25687__$1;(statearr_25713_25745[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (9)))
{var inst_25675 = (state_25687[(2)]);var inst_25676 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_25687__$1 = (function (){var statearr_25714 = state_25687;(statearr_25714[(15)] = inst_25675);
return statearr_25714;
})();if(cljs.core.truth_(inst_25676))
{var statearr_25715_25746 = state_25687__$1;(statearr_25715_25746[(1)] = (21));
} else
{var statearr_25716_25747 = state_25687__$1;(statearr_25716_25747[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (5)))
{var inst_25631 = cljs.core.async.close_BANG_.call(null,out);var state_25687__$1 = state_25687;var statearr_25717_25748 = state_25687__$1;(statearr_25717_25748[(2)] = inst_25631);
(statearr_25717_25748[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (14)))
{var inst_25653 = (state_25687[(7)]);var inst_25655 = cljs.core.chunked_seq_QMARK_.call(null,inst_25653);var state_25687__$1 = state_25687;if(inst_25655)
{var statearr_25718_25749 = state_25687__$1;(statearr_25718_25749[(1)] = (17));
} else
{var statearr_25719_25750 = state_25687__$1;(statearr_25719_25750[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (16)))
{var inst_25671 = (state_25687[(2)]);var state_25687__$1 = state_25687;var statearr_25720_25751 = state_25687__$1;(statearr_25720_25751[(2)] = inst_25671);
(statearr_25720_25751[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (10)))
{var inst_25640 = (state_25687[(8)]);var inst_25642 = (state_25687[(11)]);var inst_25647 = cljs.core._nth.call(null,inst_25640,inst_25642);var state_25687__$1 = state_25687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25687__$1,(13),out,inst_25647);
} else
{if((state_val_25688 === (18)))
{var inst_25653 = (state_25687[(7)]);var inst_25662 = cljs.core.first.call(null,inst_25653);var state_25687__$1 = state_25687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25687__$1,(20),out,inst_25662);
} else
{if((state_val_25688 === (8)))
{var inst_25642 = (state_25687[(11)]);var inst_25641 = (state_25687[(12)]);var inst_25644 = (inst_25642 < inst_25641);var inst_25645 = inst_25644;var state_25687__$1 = state_25687;if(cljs.core.truth_(inst_25645))
{var statearr_25721_25752 = state_25687__$1;(statearr_25721_25752[(1)] = (10));
} else
{var statearr_25722_25753 = state_25687__$1;(statearr_25722_25753[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6376__auto__))
;return ((function (switch__6361__auto__,c__6376__auto__){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_25726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25726[(0)] = state_machine__6362__auto__);
(statearr_25726[(1)] = (1));
return statearr_25726;
});
var state_machine__6362__auto____1 = (function (state_25687){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_25687);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e25727){if((e25727 instanceof Object))
{var ex__6365__auto__ = e25727;var statearr_25728_25754 = state_25687;(statearr_25728_25754[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25687);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25727;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25755 = state_25687;
state_25687 = G__25755;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_25687){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_25687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__))
})();var state__6378__auto__ = (function (){var statearr_25729 = f__6377__auto__.call(null);(statearr_25729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_25729;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto__))
);
return c__6376__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___25852 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___25852,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___25852,out){
return (function (state_25827){var state_val_25828 = (state_25827[(1)]);if((state_val_25828 === (7)))
{var inst_25822 = (state_25827[(2)]);var state_25827__$1 = state_25827;var statearr_25829_25853 = state_25827__$1;(statearr_25829_25853[(2)] = inst_25822);
(statearr_25829_25853[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25828 === (1)))
{var inst_25804 = null;var state_25827__$1 = (function (){var statearr_25830 = state_25827;(statearr_25830[(7)] = inst_25804);
return statearr_25830;
})();var statearr_25831_25854 = state_25827__$1;(statearr_25831_25854[(2)] = null);
(statearr_25831_25854[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25828 === (4)))
{var inst_25807 = (state_25827[(8)]);var inst_25807__$1 = (state_25827[(2)]);var inst_25808 = (inst_25807__$1 == null);var inst_25809 = cljs.core.not.call(null,inst_25808);var state_25827__$1 = (function (){var statearr_25832 = state_25827;(statearr_25832[(8)] = inst_25807__$1);
return statearr_25832;
})();if(inst_25809)
{var statearr_25833_25855 = state_25827__$1;(statearr_25833_25855[(1)] = (5));
} else
{var statearr_25834_25856 = state_25827__$1;(statearr_25834_25856[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25828 === (6)))
{var state_25827__$1 = state_25827;var statearr_25835_25857 = state_25827__$1;(statearr_25835_25857[(2)] = null);
(statearr_25835_25857[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25828 === (3)))
{var inst_25824 = (state_25827[(2)]);var inst_25825 = cljs.core.async.close_BANG_.call(null,out);var state_25827__$1 = (function (){var statearr_25836 = state_25827;(statearr_25836[(9)] = inst_25824);
return statearr_25836;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25827__$1,inst_25825);
} else
{if((state_val_25828 === (2)))
{var state_25827__$1 = state_25827;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25827__$1,(4),ch);
} else
{if((state_val_25828 === (11)))
{var inst_25807 = (state_25827[(8)]);var inst_25816 = (state_25827[(2)]);var inst_25804 = inst_25807;var state_25827__$1 = (function (){var statearr_25837 = state_25827;(statearr_25837[(7)] = inst_25804);
(statearr_25837[(10)] = inst_25816);
return statearr_25837;
})();var statearr_25838_25858 = state_25827__$1;(statearr_25838_25858[(2)] = null);
(statearr_25838_25858[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25828 === (9)))
{var inst_25807 = (state_25827[(8)]);var state_25827__$1 = state_25827;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25827__$1,(11),out,inst_25807);
} else
{if((state_val_25828 === (5)))
{var inst_25807 = (state_25827[(8)]);var inst_25804 = (state_25827[(7)]);var inst_25811 = cljs.core._EQ_.call(null,inst_25807,inst_25804);var state_25827__$1 = state_25827;if(inst_25811)
{var statearr_25840_25859 = state_25827__$1;(statearr_25840_25859[(1)] = (8));
} else
{var statearr_25841_25860 = state_25827__$1;(statearr_25841_25860[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25828 === (10)))
{var inst_25819 = (state_25827[(2)]);var state_25827__$1 = state_25827;var statearr_25842_25861 = state_25827__$1;(statearr_25842_25861[(2)] = inst_25819);
(statearr_25842_25861[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25828 === (8)))
{var inst_25804 = (state_25827[(7)]);var tmp25839 = inst_25804;var inst_25804__$1 = tmp25839;var state_25827__$1 = (function (){var statearr_25843 = state_25827;(statearr_25843[(7)] = inst_25804__$1);
return statearr_25843;
})();var statearr_25844_25862 = state_25827__$1;(statearr_25844_25862[(2)] = null);
(statearr_25844_25862[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});})(c__6376__auto___25852,out))
;return ((function (switch__6361__auto__,c__6376__auto___25852,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_25848 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25848[(0)] = state_machine__6362__auto__);
(statearr_25848[(1)] = (1));
return statearr_25848;
});
var state_machine__6362__auto____1 = (function (state_25827){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_25827);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e25849){if((e25849 instanceof Object))
{var ex__6365__auto__ = e25849;var statearr_25850_25863 = state_25827;(statearr_25850_25863[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25827);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25849;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25864 = state_25827;
state_25827 = G__25864;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_25827){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_25827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___25852,out))
})();var state__6378__auto__ = (function (){var statearr_25851 = f__6377__auto__.call(null);(statearr_25851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___25852);
return statearr_25851;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___25852,out))
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
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___25999 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___25999,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___25999,out){
return (function (state_25969){var state_val_25970 = (state_25969[(1)]);if((state_val_25970 === (7)))
{var inst_25965 = (state_25969[(2)]);var state_25969__$1 = state_25969;var statearr_25971_26000 = state_25969__$1;(statearr_25971_26000[(2)] = inst_25965);
(statearr_25971_26000[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25970 === (1)))
{var inst_25932 = (new Array(n));var inst_25933 = inst_25932;var inst_25934 = (0);var state_25969__$1 = (function (){var statearr_25972 = state_25969;(statearr_25972[(7)] = inst_25934);
(statearr_25972[(8)] = inst_25933);
return statearr_25972;
})();var statearr_25973_26001 = state_25969__$1;(statearr_25973_26001[(2)] = null);
(statearr_25973_26001[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25970 === (4)))
{var inst_25937 = (state_25969[(9)]);var inst_25937__$1 = (state_25969[(2)]);var inst_25938 = (inst_25937__$1 == null);var inst_25939 = cljs.core.not.call(null,inst_25938);var state_25969__$1 = (function (){var statearr_25974 = state_25969;(statearr_25974[(9)] = inst_25937__$1);
return statearr_25974;
})();if(inst_25939)
{var statearr_25975_26002 = state_25969__$1;(statearr_25975_26002[(1)] = (5));
} else
{var statearr_25976_26003 = state_25969__$1;(statearr_25976_26003[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25970 === (15)))
{var inst_25959 = (state_25969[(2)]);var state_25969__$1 = state_25969;var statearr_25977_26004 = state_25969__$1;(statearr_25977_26004[(2)] = inst_25959);
(statearr_25977_26004[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25970 === (13)))
{var state_25969__$1 = state_25969;var statearr_25978_26005 = state_25969__$1;(statearr_25978_26005[(2)] = null);
(statearr_25978_26005[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25970 === (6)))
{var inst_25934 = (state_25969[(7)]);var inst_25955 = (inst_25934 > (0));var state_25969__$1 = state_25969;if(cljs.core.truth_(inst_25955))
{var statearr_25979_26006 = state_25969__$1;(statearr_25979_26006[(1)] = (12));
} else
{var statearr_25980_26007 = state_25969__$1;(statearr_25980_26007[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25970 === (3)))
{var inst_25967 = (state_25969[(2)]);var state_25969__$1 = state_25969;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25969__$1,inst_25967);
} else
{if((state_val_25970 === (12)))
{var inst_25933 = (state_25969[(8)]);var inst_25957 = cljs.core.vec.call(null,inst_25933);var state_25969__$1 = state_25969;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25969__$1,(15),out,inst_25957);
} else
{if((state_val_25970 === (2)))
{var state_25969__$1 = state_25969;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25969__$1,(4),ch);
} else
{if((state_val_25970 === (11)))
{var inst_25949 = (state_25969[(2)]);var inst_25950 = (new Array(n));var inst_25933 = inst_25950;var inst_25934 = (0);var state_25969__$1 = (function (){var statearr_25981 = state_25969;(statearr_25981[(7)] = inst_25934);
(statearr_25981[(8)] = inst_25933);
(statearr_25981[(10)] = inst_25949);
return statearr_25981;
})();var statearr_25982_26008 = state_25969__$1;(statearr_25982_26008[(2)] = null);
(statearr_25982_26008[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25970 === (9)))
{var inst_25933 = (state_25969[(8)]);var inst_25947 = cljs.core.vec.call(null,inst_25933);var state_25969__$1 = state_25969;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25969__$1,(11),out,inst_25947);
} else
{if((state_val_25970 === (5)))
{var inst_25937 = (state_25969[(9)]);var inst_25942 = (state_25969[(11)]);var inst_25934 = (state_25969[(7)]);var inst_25933 = (state_25969[(8)]);var inst_25941 = (inst_25933[inst_25934] = inst_25937);var inst_25942__$1 = (inst_25934 + (1));var inst_25943 = (inst_25942__$1 < n);var state_25969__$1 = (function (){var statearr_25983 = state_25969;(statearr_25983[(12)] = inst_25941);
(statearr_25983[(11)] = inst_25942__$1);
return statearr_25983;
})();if(cljs.core.truth_(inst_25943))
{var statearr_25984_26009 = state_25969__$1;(statearr_25984_26009[(1)] = (8));
} else
{var statearr_25985_26010 = state_25969__$1;(statearr_25985_26010[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25970 === (14)))
{var inst_25962 = (state_25969[(2)]);var inst_25963 = cljs.core.async.close_BANG_.call(null,out);var state_25969__$1 = (function (){var statearr_25987 = state_25969;(statearr_25987[(13)] = inst_25962);
return statearr_25987;
})();var statearr_25988_26011 = state_25969__$1;(statearr_25988_26011[(2)] = inst_25963);
(statearr_25988_26011[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25970 === (10)))
{var inst_25953 = (state_25969[(2)]);var state_25969__$1 = state_25969;var statearr_25989_26012 = state_25969__$1;(statearr_25989_26012[(2)] = inst_25953);
(statearr_25989_26012[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25970 === (8)))
{var inst_25942 = (state_25969[(11)]);var inst_25933 = (state_25969[(8)]);var tmp25986 = inst_25933;var inst_25933__$1 = tmp25986;var inst_25934 = inst_25942;var state_25969__$1 = (function (){var statearr_25990 = state_25969;(statearr_25990[(7)] = inst_25934);
(statearr_25990[(8)] = inst_25933__$1);
return statearr_25990;
})();var statearr_25991_26013 = state_25969__$1;(statearr_25991_26013[(2)] = null);
(statearr_25991_26013[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});})(c__6376__auto___25999,out))
;return ((function (switch__6361__auto__,c__6376__auto___25999,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_25995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25995[(0)] = state_machine__6362__auto__);
(statearr_25995[(1)] = (1));
return statearr_25995;
});
var state_machine__6362__auto____1 = (function (state_25969){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_25969);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e25996){if((e25996 instanceof Object))
{var ex__6365__auto__ = e25996;var statearr_25997_26014 = state_25969;(statearr_25997_26014[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25969);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25996;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26015 = state_25969;
state_25969 = G__26015;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_25969){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_25969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___25999,out))
})();var state__6378__auto__ = (function (){var statearr_25998 = f__6377__auto__.call(null);(statearr_25998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___25999);
return statearr_25998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___25999,out))
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
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___26158 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___26158,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___26158,out){
return (function (state_26128){var state_val_26129 = (state_26128[(1)]);if((state_val_26129 === (7)))
{var inst_26124 = (state_26128[(2)]);var state_26128__$1 = state_26128;var statearr_26130_26159 = state_26128__$1;(statearr_26130_26159[(2)] = inst_26124);
(statearr_26130_26159[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26129 === (1)))
{var inst_26087 = [];var inst_26088 = inst_26087;var inst_26089 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26128__$1 = (function (){var statearr_26131 = state_26128;(statearr_26131[(7)] = inst_26089);
(statearr_26131[(8)] = inst_26088);
return statearr_26131;
})();var statearr_26132_26160 = state_26128__$1;(statearr_26132_26160[(2)] = null);
(statearr_26132_26160[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26129 === (4)))
{var inst_26092 = (state_26128[(9)]);var inst_26092__$1 = (state_26128[(2)]);var inst_26093 = (inst_26092__$1 == null);var inst_26094 = cljs.core.not.call(null,inst_26093);var state_26128__$1 = (function (){var statearr_26133 = state_26128;(statearr_26133[(9)] = inst_26092__$1);
return statearr_26133;
})();if(inst_26094)
{var statearr_26134_26161 = state_26128__$1;(statearr_26134_26161[(1)] = (5));
} else
{var statearr_26135_26162 = state_26128__$1;(statearr_26135_26162[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26129 === (15)))
{var inst_26118 = (state_26128[(2)]);var state_26128__$1 = state_26128;var statearr_26136_26163 = state_26128__$1;(statearr_26136_26163[(2)] = inst_26118);
(statearr_26136_26163[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26129 === (13)))
{var state_26128__$1 = state_26128;var statearr_26137_26164 = state_26128__$1;(statearr_26137_26164[(2)] = null);
(statearr_26137_26164[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26129 === (6)))
{var inst_26088 = (state_26128[(8)]);var inst_26113 = inst_26088.length;var inst_26114 = (inst_26113 > (0));var state_26128__$1 = state_26128;if(cljs.core.truth_(inst_26114))
{var statearr_26138_26165 = state_26128__$1;(statearr_26138_26165[(1)] = (12));
} else
{var statearr_26139_26166 = state_26128__$1;(statearr_26139_26166[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26129 === (3)))
{var inst_26126 = (state_26128[(2)]);var state_26128__$1 = state_26128;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26128__$1,inst_26126);
} else
{if((state_val_26129 === (12)))
{var inst_26088 = (state_26128[(8)]);var inst_26116 = cljs.core.vec.call(null,inst_26088);var state_26128__$1 = state_26128;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26128__$1,(15),out,inst_26116);
} else
{if((state_val_26129 === (2)))
{var state_26128__$1 = state_26128;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26128__$1,(4),ch);
} else
{if((state_val_26129 === (11)))
{var inst_26096 = (state_26128[(10)]);var inst_26092 = (state_26128[(9)]);var inst_26106 = (state_26128[(2)]);var inst_26107 = [];var inst_26108 = inst_26107.push(inst_26092);var inst_26088 = inst_26107;var inst_26089 = inst_26096;var state_26128__$1 = (function (){var statearr_26140 = state_26128;(statearr_26140[(7)] = inst_26089);
(statearr_26140[(11)] = inst_26106);
(statearr_26140[(8)] = inst_26088);
(statearr_26140[(12)] = inst_26108);
return statearr_26140;
})();var statearr_26141_26167 = state_26128__$1;(statearr_26141_26167[(2)] = null);
(statearr_26141_26167[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26129 === (9)))
{var inst_26088 = (state_26128[(8)]);var inst_26104 = cljs.core.vec.call(null,inst_26088);var state_26128__$1 = state_26128;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26128__$1,(11),out,inst_26104);
} else
{if((state_val_26129 === (5)))
{var inst_26089 = (state_26128[(7)]);var inst_26096 = (state_26128[(10)]);var inst_26092 = (state_26128[(9)]);var inst_26096__$1 = f.call(null,inst_26092);var inst_26097 = cljs.core._EQ_.call(null,inst_26096__$1,inst_26089);var inst_26098 = cljs.core.keyword_identical_QMARK_.call(null,inst_26089,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26099 = (inst_26097) || (inst_26098);var state_26128__$1 = (function (){var statearr_26142 = state_26128;(statearr_26142[(10)] = inst_26096__$1);
return statearr_26142;
})();if(cljs.core.truth_(inst_26099))
{var statearr_26143_26168 = state_26128__$1;(statearr_26143_26168[(1)] = (8));
} else
{var statearr_26144_26169 = state_26128__$1;(statearr_26144_26169[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26129 === (14)))
{var inst_26121 = (state_26128[(2)]);var inst_26122 = cljs.core.async.close_BANG_.call(null,out);var state_26128__$1 = (function (){var statearr_26146 = state_26128;(statearr_26146[(13)] = inst_26121);
return statearr_26146;
})();var statearr_26147_26170 = state_26128__$1;(statearr_26147_26170[(2)] = inst_26122);
(statearr_26147_26170[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26129 === (10)))
{var inst_26111 = (state_26128[(2)]);var state_26128__$1 = state_26128;var statearr_26148_26171 = state_26128__$1;(statearr_26148_26171[(2)] = inst_26111);
(statearr_26148_26171[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26129 === (8)))
{var inst_26096 = (state_26128[(10)]);var inst_26088 = (state_26128[(8)]);var inst_26092 = (state_26128[(9)]);var inst_26101 = inst_26088.push(inst_26092);var tmp26145 = inst_26088;var inst_26088__$1 = tmp26145;var inst_26089 = inst_26096;var state_26128__$1 = (function (){var statearr_26149 = state_26128;(statearr_26149[(7)] = inst_26089);
(statearr_26149[(14)] = inst_26101);
(statearr_26149[(8)] = inst_26088__$1);
return statearr_26149;
})();var statearr_26150_26172 = state_26128__$1;(statearr_26150_26172[(2)] = null);
(statearr_26150_26172[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});})(c__6376__auto___26158,out))
;return ((function (switch__6361__auto__,c__6376__auto___26158,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_26154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26154[(0)] = state_machine__6362__auto__);
(statearr_26154[(1)] = (1));
return statearr_26154;
});
var state_machine__6362__auto____1 = (function (state_26128){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_26128);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e26155){if((e26155 instanceof Object))
{var ex__6365__auto__ = e26155;var statearr_26156_26173 = state_26128;(statearr_26156_26173[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26128);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26155;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26174 = state_26128;
state_26128 = G__26174;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_26128){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_26128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___26158,out))
})();var state__6378__auto__ = (function (){var statearr_26157 = f__6377__auto__.call(null);(statearr_26157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___26158);
return statearr_26157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___26158,out))
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