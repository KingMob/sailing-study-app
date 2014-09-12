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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11275 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11275 = (function (f,fn_handler,meta11276){
this.f = f;
this.fn_handler = fn_handler;
this.meta11276 = meta11276;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11275.cljs$lang$type = true;
cljs.core.async.t11275.cljs$lang$ctorStr = "cljs.core.async/t11275";
cljs.core.async.t11275.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11275");
});
cljs.core.async.t11275.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11275.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11275.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11277){var self__ = this;
var _11277__$1 = this;return self__.meta11276;
});
cljs.core.async.t11275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11277,meta11276__$1){var self__ = this;
var _11277__$1 = this;return (new cljs.core.async.t11275(self__.f,self__.fn_handler,meta11276__$1));
});
cljs.core.async.__GT_t11275 = (function __GT_t11275(f__$1,fn_handler__$1,meta11276){return (new cljs.core.async.t11275(f__$1,fn_handler__$1,meta11276));
});
}
return (new cljs.core.async.t11275(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11279 = buff;if(G__11279)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11279.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11279.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11279);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11279);
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
{var val_11280 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11280);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11280,ret){
return (function (){return fn1.call(null,val_11280);
});})(val_11280,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4416__auto___11281 = n;var x_11282 = (0);while(true){
if((x_11282 < n__4416__auto___11281))
{(a[x_11282] = (0));
{
var G__11283 = (x_11282 + (1));
x_11282 = G__11283;
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
var G__11284 = (i + (1));
i = G__11284;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11288 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11288 = (function (flag,alt_flag,meta11289){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11289 = meta11289;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11288.cljs$lang$type = true;
cljs.core.async.t11288.cljs$lang$ctorStr = "cljs.core.async/t11288";
cljs.core.async.t11288.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11288");
});})(flag))
;
cljs.core.async.t11288.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11288.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11288.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11288.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11290){var self__ = this;
var _11290__$1 = this;return self__.meta11289;
});})(flag))
;
cljs.core.async.t11288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11290,meta11289__$1){var self__ = this;
var _11290__$1 = this;return (new cljs.core.async.t11288(self__.flag,self__.alt_flag,meta11289__$1));
});})(flag))
;
cljs.core.async.__GT_t11288 = ((function (flag){
return (function __GT_t11288(flag__$1,alt_flag__$1,meta11289){return (new cljs.core.async.t11288(flag__$1,alt_flag__$1,meta11289));
});})(flag))
;
}
return (new cljs.core.async.t11288(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11294 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11294 = (function (cb,flag,alt_handler,meta11295){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11295 = meta11295;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11294.cljs$lang$type = true;
cljs.core.async.t11294.cljs$lang$ctorStr = "cljs.core.async/t11294";
cljs.core.async.t11294.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11294");
});
cljs.core.async.t11294.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11294.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11294.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11296){var self__ = this;
var _11296__$1 = this;return self__.meta11295;
});
cljs.core.async.t11294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11296,meta11295__$1){var self__ = this;
var _11296__$1 = this;return (new cljs.core.async.t11294(self__.cb,self__.flag,self__.alt_handler,meta11295__$1));
});
cljs.core.async.__GT_t11294 = (function __GT_t11294(cb__$1,flag__$1,alt_handler__$1,meta11295){return (new cljs.core.async.t11294(cb__$1,flag__$1,alt_handler__$1,meta11295));
});
}
return (new cljs.core.async.t11294(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11297_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11297_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11298_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11298_SHARP_,port], null));
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
var G__11299 = (i + (1));
i = G__11299;
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
var alts_BANG___delegate = function (ports,p__11300){var map__11302 = p__11300;var map__11302__$1 = ((cljs.core.seq_QMARK_.call(null,map__11302))?cljs.core.apply.call(null,cljs.core.hash_map,map__11302):map__11302);var opts = map__11302__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11300 = null;if (arguments.length > 1) {
  p__11300 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11300);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11303){
var ports = cljs.core.first(arglist__11303);
var p__11300 = cljs.core.rest(arglist__11303);
return alts_BANG___delegate(ports,p__11300);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6376__auto___11398 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___11398){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___11398){
return (function (state_11374){var state_val_11375 = (state_11374[(1)]);if((state_val_11375 === (7)))
{var inst_11370 = (state_11374[(2)]);var state_11374__$1 = state_11374;var statearr_11376_11399 = state_11374__$1;(statearr_11376_11399[(2)] = inst_11370);
(statearr_11376_11399[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11375 === (1)))
{var state_11374__$1 = state_11374;var statearr_11377_11400 = state_11374__$1;(statearr_11377_11400[(2)] = null);
(statearr_11377_11400[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11375 === (4)))
{var inst_11353 = (state_11374[(7)]);var inst_11353__$1 = (state_11374[(2)]);var inst_11354 = (inst_11353__$1 == null);var state_11374__$1 = (function (){var statearr_11378 = state_11374;(statearr_11378[(7)] = inst_11353__$1);
return statearr_11378;
})();if(cljs.core.truth_(inst_11354))
{var statearr_11379_11401 = state_11374__$1;(statearr_11379_11401[(1)] = (5));
} else
{var statearr_11380_11402 = state_11374__$1;(statearr_11380_11402[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11375 === (13)))
{var state_11374__$1 = state_11374;var statearr_11381_11403 = state_11374__$1;(statearr_11381_11403[(2)] = null);
(statearr_11381_11403[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11375 === (6)))
{var inst_11353 = (state_11374[(7)]);var state_11374__$1 = state_11374;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11374__$1,(11),to,inst_11353);
} else
{if((state_val_11375 === (3)))
{var inst_11372 = (state_11374[(2)]);var state_11374__$1 = state_11374;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11374__$1,inst_11372);
} else
{if((state_val_11375 === (12)))
{var state_11374__$1 = state_11374;var statearr_11382_11404 = state_11374__$1;(statearr_11382_11404[(2)] = null);
(statearr_11382_11404[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11375 === (2)))
{var state_11374__$1 = state_11374;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11374__$1,(4),from);
} else
{if((state_val_11375 === (11)))
{var inst_11363 = (state_11374[(2)]);var state_11374__$1 = state_11374;if(cljs.core.truth_(inst_11363))
{var statearr_11383_11405 = state_11374__$1;(statearr_11383_11405[(1)] = (12));
} else
{var statearr_11384_11406 = state_11374__$1;(statearr_11384_11406[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11375 === (9)))
{var state_11374__$1 = state_11374;var statearr_11385_11407 = state_11374__$1;(statearr_11385_11407[(2)] = null);
(statearr_11385_11407[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11375 === (5)))
{var state_11374__$1 = state_11374;if(cljs.core.truth_(close_QMARK_))
{var statearr_11386_11408 = state_11374__$1;(statearr_11386_11408[(1)] = (8));
} else
{var statearr_11387_11409 = state_11374__$1;(statearr_11387_11409[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11375 === (14)))
{var inst_11368 = (state_11374[(2)]);var state_11374__$1 = state_11374;var statearr_11388_11410 = state_11374__$1;(statearr_11388_11410[(2)] = inst_11368);
(statearr_11388_11410[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11375 === (10)))
{var inst_11360 = (state_11374[(2)]);var state_11374__$1 = state_11374;var statearr_11389_11411 = state_11374__$1;(statearr_11389_11411[(2)] = inst_11360);
(statearr_11389_11411[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11375 === (8)))
{var inst_11357 = cljs.core.async.close_BANG_.call(null,to);var state_11374__$1 = state_11374;var statearr_11390_11412 = state_11374__$1;(statearr_11390_11412[(2)] = inst_11357);
(statearr_11390_11412[(1)] = (10));
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
});})(c__6376__auto___11398))
;return ((function (switch__6361__auto__,c__6376__auto___11398){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_11394 = [null,null,null,null,null,null,null,null];(statearr_11394[(0)] = state_machine__6362__auto__);
(statearr_11394[(1)] = (1));
return statearr_11394;
});
var state_machine__6362__auto____1 = (function (state_11374){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_11374);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e11395){if((e11395 instanceof Object))
{var ex__6365__auto__ = e11395;var statearr_11396_11413 = state_11374;(statearr_11396_11413[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11374);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11395;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11414 = state_11374;
state_11374 = G__11414;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_11374){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_11374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___11398))
})();var state__6378__auto__ = (function (){var statearr_11397 = f__6377__auto__.call(null);(statearr_11397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___11398);
return statearr_11397;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___11398))
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
return (function (p__11598){var vec__11599 = p__11598;var v = cljs.core.nth.call(null,vec__11599,(0),null);var p = cljs.core.nth.call(null,vec__11599,(1),null);var job = vec__11599;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6376__auto___11781 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___11781,res,vec__11599,v,p,job,jobs,results){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___11781,res,vec__11599,v,p,job,jobs,results){
return (function (state_11604){var state_val_11605 = (state_11604[(1)]);if((state_val_11605 === (2)))
{var inst_11601 = (state_11604[(2)]);var inst_11602 = cljs.core.async.close_BANG_.call(null,res);var state_11604__$1 = (function (){var statearr_11606 = state_11604;(statearr_11606[(7)] = inst_11601);
return statearr_11606;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11604__$1,inst_11602);
} else
{if((state_val_11605 === (1)))
{var state_11604__$1 = state_11604;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11604__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6376__auto___11781,res,vec__11599,v,p,job,jobs,results))
;return ((function (switch__6361__auto__,c__6376__auto___11781,res,vec__11599,v,p,job,jobs,results){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_11610 = [null,null,null,null,null,null,null,null];(statearr_11610[(0)] = state_machine__6362__auto__);
(statearr_11610[(1)] = (1));
return statearr_11610;
});
var state_machine__6362__auto____1 = (function (state_11604){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_11604);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e11611){if((e11611 instanceof Object))
{var ex__6365__auto__ = e11611;var statearr_11612_11782 = state_11604;(statearr_11612_11782[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11604);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11611;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11783 = state_11604;
state_11604 = G__11783;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_11604){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_11604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___11781,res,vec__11599,v,p,job,jobs,results))
})();var state__6378__auto__ = (function (){var statearr_11613 = f__6377__auto__.call(null);(statearr_11613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___11781);
return statearr_11613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___11781,res,vec__11599,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__11614){var vec__11615 = p__11614;var v = cljs.core.nth.call(null,vec__11615,(0),null);var p = cljs.core.nth.call(null,vec__11615,(1),null);var job = vec__11615;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4416__auto___11784 = n;var __11785 = (0);while(true){
if((__11785 < n__4416__auto___11784))
{var G__11616_11786 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__11616_11786) {
case "async":
var c__6376__auto___11788 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__11785,c__6376__auto___11788,G__11616_11786,n__4416__auto___11784,jobs,results,process,async){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (__11785,c__6376__auto___11788,G__11616_11786,n__4416__auto___11784,jobs,results,process,async){
return (function (state_11629){var state_val_11630 = (state_11629[(1)]);if((state_val_11630 === (7)))
{var inst_11625 = (state_11629[(2)]);var state_11629__$1 = state_11629;var statearr_11631_11789 = state_11629__$1;(statearr_11631_11789[(2)] = inst_11625);
(statearr_11631_11789[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11630 === (6)))
{var state_11629__$1 = state_11629;var statearr_11632_11790 = state_11629__$1;(statearr_11632_11790[(2)] = null);
(statearr_11632_11790[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11630 === (5)))
{var state_11629__$1 = state_11629;var statearr_11633_11791 = state_11629__$1;(statearr_11633_11791[(2)] = null);
(statearr_11633_11791[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11630 === (4)))
{var inst_11619 = (state_11629[(2)]);var inst_11620 = async.call(null,inst_11619);var state_11629__$1 = state_11629;if(cljs.core.truth_(inst_11620))
{var statearr_11634_11792 = state_11629__$1;(statearr_11634_11792[(1)] = (5));
} else
{var statearr_11635_11793 = state_11629__$1;(statearr_11635_11793[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11630 === (3)))
{var inst_11627 = (state_11629[(2)]);var state_11629__$1 = state_11629;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11629__$1,inst_11627);
} else
{if((state_val_11630 === (2)))
{var state_11629__$1 = state_11629;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11629__$1,(4),jobs);
} else
{if((state_val_11630 === (1)))
{var state_11629__$1 = state_11629;var statearr_11636_11794 = state_11629__$1;(statearr_11636_11794[(2)] = null);
(statearr_11636_11794[(1)] = (2));
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
});})(__11785,c__6376__auto___11788,G__11616_11786,n__4416__auto___11784,jobs,results,process,async))
;return ((function (__11785,switch__6361__auto__,c__6376__auto___11788,G__11616_11786,n__4416__auto___11784,jobs,results,process,async){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_11640 = [null,null,null,null,null,null,null];(statearr_11640[(0)] = state_machine__6362__auto__);
(statearr_11640[(1)] = (1));
return statearr_11640;
});
var state_machine__6362__auto____1 = (function (state_11629){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_11629);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e11641){if((e11641 instanceof Object))
{var ex__6365__auto__ = e11641;var statearr_11642_11795 = state_11629;(statearr_11642_11795[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11629);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11641;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11796 = state_11629;
state_11629 = G__11796;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_11629){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_11629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(__11785,switch__6361__auto__,c__6376__auto___11788,G__11616_11786,n__4416__auto___11784,jobs,results,process,async))
})();var state__6378__auto__ = (function (){var statearr_11643 = f__6377__auto__.call(null);(statearr_11643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___11788);
return statearr_11643;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(__11785,c__6376__auto___11788,G__11616_11786,n__4416__auto___11784,jobs,results,process,async))
);

break;
case "compute":
var c__6376__auto___11797 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__11785,c__6376__auto___11797,G__11616_11786,n__4416__auto___11784,jobs,results,process,async){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (__11785,c__6376__auto___11797,G__11616_11786,n__4416__auto___11784,jobs,results,process,async){
return (function (state_11656){var state_val_11657 = (state_11656[(1)]);if((state_val_11657 === (7)))
{var inst_11652 = (state_11656[(2)]);var state_11656__$1 = state_11656;var statearr_11658_11798 = state_11656__$1;(statearr_11658_11798[(2)] = inst_11652);
(statearr_11658_11798[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11657 === (6)))
{var state_11656__$1 = state_11656;var statearr_11659_11799 = state_11656__$1;(statearr_11659_11799[(2)] = null);
(statearr_11659_11799[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11657 === (5)))
{var state_11656__$1 = state_11656;var statearr_11660_11800 = state_11656__$1;(statearr_11660_11800[(2)] = null);
(statearr_11660_11800[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11657 === (4)))
{var inst_11646 = (state_11656[(2)]);var inst_11647 = process.call(null,inst_11646);var state_11656__$1 = state_11656;if(cljs.core.truth_(inst_11647))
{var statearr_11661_11801 = state_11656__$1;(statearr_11661_11801[(1)] = (5));
} else
{var statearr_11662_11802 = state_11656__$1;(statearr_11662_11802[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11657 === (3)))
{var inst_11654 = (state_11656[(2)]);var state_11656__$1 = state_11656;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11656__$1,inst_11654);
} else
{if((state_val_11657 === (2)))
{var state_11656__$1 = state_11656;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11656__$1,(4),jobs);
} else
{if((state_val_11657 === (1)))
{var state_11656__$1 = state_11656;var statearr_11663_11803 = state_11656__$1;(statearr_11663_11803[(2)] = null);
(statearr_11663_11803[(1)] = (2));
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
});})(__11785,c__6376__auto___11797,G__11616_11786,n__4416__auto___11784,jobs,results,process,async))
;return ((function (__11785,switch__6361__auto__,c__6376__auto___11797,G__11616_11786,n__4416__auto___11784,jobs,results,process,async){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_11667 = [null,null,null,null,null,null,null];(statearr_11667[(0)] = state_machine__6362__auto__);
(statearr_11667[(1)] = (1));
return statearr_11667;
});
var state_machine__6362__auto____1 = (function (state_11656){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_11656);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e11668){if((e11668 instanceof Object))
{var ex__6365__auto__ = e11668;var statearr_11669_11804 = state_11656;(statearr_11669_11804[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11656);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11668;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11805 = state_11656;
state_11656 = G__11805;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_11656){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_11656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(__11785,switch__6361__auto__,c__6376__auto___11797,G__11616_11786,n__4416__auto___11784,jobs,results,process,async))
})();var state__6378__auto__ = (function (){var statearr_11670 = f__6377__auto__.call(null);(statearr_11670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___11797);
return statearr_11670;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(__11785,c__6376__auto___11797,G__11616_11786,n__4416__auto___11784,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__11806 = (__11785 + (1));
__11785 = G__11806;
continue;
}
} else
{}
break;
}
var c__6376__auto___11807 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___11807,jobs,results,process,async){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___11807,jobs,results,process,async){
return (function (state_11692){var state_val_11693 = (state_11692[(1)]);if((state_val_11693 === (9)))
{var inst_11685 = (state_11692[(2)]);var state_11692__$1 = (function (){var statearr_11694 = state_11692;(statearr_11694[(7)] = inst_11685);
return statearr_11694;
})();var statearr_11695_11808 = state_11692__$1;(statearr_11695_11808[(2)] = null);
(statearr_11695_11808[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11693 === (8)))
{var inst_11678 = (state_11692[(8)]);var inst_11683 = (state_11692[(2)]);var state_11692__$1 = (function (){var statearr_11696 = state_11692;(statearr_11696[(9)] = inst_11683);
return statearr_11696;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11692__$1,(9),results,inst_11678);
} else
{if((state_val_11693 === (7)))
{var inst_11688 = (state_11692[(2)]);var state_11692__$1 = state_11692;var statearr_11697_11809 = state_11692__$1;(statearr_11697_11809[(2)] = inst_11688);
(statearr_11697_11809[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11693 === (6)))
{var inst_11673 = (state_11692[(10)]);var inst_11678 = (state_11692[(8)]);var inst_11678__$1 = cljs.core.async.chan.call(null,(1));var inst_11679 = cljs.core.PersistentVector.EMPTY_NODE;var inst_11680 = [inst_11673,inst_11678__$1];var inst_11681 = (new cljs.core.PersistentVector(null,2,(5),inst_11679,inst_11680,null));var state_11692__$1 = (function (){var statearr_11698 = state_11692;(statearr_11698[(8)] = inst_11678__$1);
return statearr_11698;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11692__$1,(8),jobs,inst_11681);
} else
{if((state_val_11693 === (5)))
{var inst_11676 = cljs.core.async.close_BANG_.call(null,jobs);var state_11692__$1 = state_11692;var statearr_11699_11810 = state_11692__$1;(statearr_11699_11810[(2)] = inst_11676);
(statearr_11699_11810[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11693 === (4)))
{var inst_11673 = (state_11692[(10)]);var inst_11673__$1 = (state_11692[(2)]);var inst_11674 = (inst_11673__$1 == null);var state_11692__$1 = (function (){var statearr_11700 = state_11692;(statearr_11700[(10)] = inst_11673__$1);
return statearr_11700;
})();if(cljs.core.truth_(inst_11674))
{var statearr_11701_11811 = state_11692__$1;(statearr_11701_11811[(1)] = (5));
} else
{var statearr_11702_11812 = state_11692__$1;(statearr_11702_11812[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11693 === (3)))
{var inst_11690 = (state_11692[(2)]);var state_11692__$1 = state_11692;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11692__$1,inst_11690);
} else
{if((state_val_11693 === (2)))
{var state_11692__$1 = state_11692;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11692__$1,(4),from);
} else
{if((state_val_11693 === (1)))
{var state_11692__$1 = state_11692;var statearr_11703_11813 = state_11692__$1;(statearr_11703_11813[(2)] = null);
(statearr_11703_11813[(1)] = (2));
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
});})(c__6376__auto___11807,jobs,results,process,async))
;return ((function (switch__6361__auto__,c__6376__auto___11807,jobs,results,process,async){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_11707 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11707[(0)] = state_machine__6362__auto__);
(statearr_11707[(1)] = (1));
return statearr_11707;
});
var state_machine__6362__auto____1 = (function (state_11692){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_11692);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e11708){if((e11708 instanceof Object))
{var ex__6365__auto__ = e11708;var statearr_11709_11814 = state_11692;(statearr_11709_11814[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11692);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11708;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11815 = state_11692;
state_11692 = G__11815;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_11692){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_11692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___11807,jobs,results,process,async))
})();var state__6378__auto__ = (function (){var statearr_11710 = f__6377__auto__.call(null);(statearr_11710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___11807);
return statearr_11710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___11807,jobs,results,process,async))
);
var c__6376__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto__,jobs,results,process,async){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto__,jobs,results,process,async){
return (function (state_11748){var state_val_11749 = (state_11748[(1)]);if((state_val_11749 === (7)))
{var inst_11744 = (state_11748[(2)]);var state_11748__$1 = state_11748;var statearr_11750_11816 = state_11748__$1;(statearr_11750_11816[(2)] = inst_11744);
(statearr_11750_11816[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (20)))
{var state_11748__$1 = state_11748;var statearr_11751_11817 = state_11748__$1;(statearr_11751_11817[(2)] = null);
(statearr_11751_11817[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (1)))
{var state_11748__$1 = state_11748;var statearr_11752_11818 = state_11748__$1;(statearr_11752_11818[(2)] = null);
(statearr_11752_11818[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (4)))
{var inst_11713 = (state_11748[(7)]);var inst_11713__$1 = (state_11748[(2)]);var inst_11714 = (inst_11713__$1 == null);var state_11748__$1 = (function (){var statearr_11753 = state_11748;(statearr_11753[(7)] = inst_11713__$1);
return statearr_11753;
})();if(cljs.core.truth_(inst_11714))
{var statearr_11754_11819 = state_11748__$1;(statearr_11754_11819[(1)] = (5));
} else
{var statearr_11755_11820 = state_11748__$1;(statearr_11755_11820[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (15)))
{var inst_11726 = (state_11748[(8)]);var state_11748__$1 = state_11748;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11748__$1,(18),to,inst_11726);
} else
{if((state_val_11749 === (21)))
{var inst_11739 = (state_11748[(2)]);var state_11748__$1 = state_11748;var statearr_11756_11821 = state_11748__$1;(statearr_11756_11821[(2)] = inst_11739);
(statearr_11756_11821[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (13)))
{var inst_11741 = (state_11748[(2)]);var state_11748__$1 = (function (){var statearr_11757 = state_11748;(statearr_11757[(9)] = inst_11741);
return statearr_11757;
})();var statearr_11758_11822 = state_11748__$1;(statearr_11758_11822[(2)] = null);
(statearr_11758_11822[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (6)))
{var inst_11713 = (state_11748[(7)]);var state_11748__$1 = state_11748;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11748__$1,(11),inst_11713);
} else
{if((state_val_11749 === (17)))
{var inst_11734 = (state_11748[(2)]);var state_11748__$1 = state_11748;if(cljs.core.truth_(inst_11734))
{var statearr_11759_11823 = state_11748__$1;(statearr_11759_11823[(1)] = (19));
} else
{var statearr_11760_11824 = state_11748__$1;(statearr_11760_11824[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (3)))
{var inst_11746 = (state_11748[(2)]);var state_11748__$1 = state_11748;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11748__$1,inst_11746);
} else
{if((state_val_11749 === (12)))
{var inst_11723 = (state_11748[(10)]);var state_11748__$1 = state_11748;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11748__$1,(14),inst_11723);
} else
{if((state_val_11749 === (2)))
{var state_11748__$1 = state_11748;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11748__$1,(4),results);
} else
{if((state_val_11749 === (19)))
{var state_11748__$1 = state_11748;var statearr_11761_11825 = state_11748__$1;(statearr_11761_11825[(2)] = null);
(statearr_11761_11825[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (11)))
{var inst_11723 = (state_11748[(2)]);var state_11748__$1 = (function (){var statearr_11762 = state_11748;(statearr_11762[(10)] = inst_11723);
return statearr_11762;
})();var statearr_11763_11826 = state_11748__$1;(statearr_11763_11826[(2)] = null);
(statearr_11763_11826[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (9)))
{var state_11748__$1 = state_11748;var statearr_11764_11827 = state_11748__$1;(statearr_11764_11827[(2)] = null);
(statearr_11764_11827[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (5)))
{var state_11748__$1 = state_11748;if(cljs.core.truth_(close_QMARK_))
{var statearr_11765_11828 = state_11748__$1;(statearr_11765_11828[(1)] = (8));
} else
{var statearr_11766_11829 = state_11748__$1;(statearr_11766_11829[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (14)))
{var inst_11728 = (state_11748[(11)]);var inst_11726 = (state_11748[(8)]);var inst_11726__$1 = (state_11748[(2)]);var inst_11727 = (inst_11726__$1 == null);var inst_11728__$1 = cljs.core.not.call(null,inst_11727);var state_11748__$1 = (function (){var statearr_11767 = state_11748;(statearr_11767[(11)] = inst_11728__$1);
(statearr_11767[(8)] = inst_11726__$1);
return statearr_11767;
})();if(inst_11728__$1)
{var statearr_11768_11830 = state_11748__$1;(statearr_11768_11830[(1)] = (15));
} else
{var statearr_11769_11831 = state_11748__$1;(statearr_11769_11831[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (16)))
{var inst_11728 = (state_11748[(11)]);var state_11748__$1 = state_11748;var statearr_11770_11832 = state_11748__$1;(statearr_11770_11832[(2)] = inst_11728);
(statearr_11770_11832[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (10)))
{var inst_11720 = (state_11748[(2)]);var state_11748__$1 = state_11748;var statearr_11771_11833 = state_11748__$1;(statearr_11771_11833[(2)] = inst_11720);
(statearr_11771_11833[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (18)))
{var inst_11731 = (state_11748[(2)]);var state_11748__$1 = state_11748;var statearr_11772_11834 = state_11748__$1;(statearr_11772_11834[(2)] = inst_11731);
(statearr_11772_11834[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11749 === (8)))
{var inst_11717 = cljs.core.async.close_BANG_.call(null,to);var state_11748__$1 = state_11748;var statearr_11773_11835 = state_11748__$1;(statearr_11773_11835[(2)] = inst_11717);
(statearr_11773_11835[(1)] = (10));
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
var state_machine__6362__auto____0 = (function (){var statearr_11777 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11777[(0)] = state_machine__6362__auto__);
(statearr_11777[(1)] = (1));
return statearr_11777;
});
var state_machine__6362__auto____1 = (function (state_11748){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_11748);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e11778){if((e11778 instanceof Object))
{var ex__6365__auto__ = e11778;var statearr_11779_11836 = state_11748;(statearr_11779_11836[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11748);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11778;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11837 = state_11748;
state_11748 = G__11837;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_11748){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_11748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__,jobs,results,process,async))
})();var state__6378__auto__ = (function (){var statearr_11780 = f__6377__auto__.call(null);(statearr_11780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_11780;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6376__auto___11938 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___11938,tc,fc){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___11938,tc,fc){
return (function (state_11913){var state_val_11914 = (state_11913[(1)]);if((state_val_11914 === (7)))
{var inst_11909 = (state_11913[(2)]);var state_11913__$1 = state_11913;var statearr_11915_11939 = state_11913__$1;(statearr_11915_11939[(2)] = inst_11909);
(statearr_11915_11939[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11914 === (1)))
{var state_11913__$1 = state_11913;var statearr_11916_11940 = state_11913__$1;(statearr_11916_11940[(2)] = null);
(statearr_11916_11940[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11914 === (4)))
{var inst_11890 = (state_11913[(7)]);var inst_11890__$1 = (state_11913[(2)]);var inst_11891 = (inst_11890__$1 == null);var state_11913__$1 = (function (){var statearr_11917 = state_11913;(statearr_11917[(7)] = inst_11890__$1);
return statearr_11917;
})();if(cljs.core.truth_(inst_11891))
{var statearr_11918_11941 = state_11913__$1;(statearr_11918_11941[(1)] = (5));
} else
{var statearr_11919_11942 = state_11913__$1;(statearr_11919_11942[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11914 === (13)))
{var state_11913__$1 = state_11913;var statearr_11920_11943 = state_11913__$1;(statearr_11920_11943[(2)] = null);
(statearr_11920_11943[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11914 === (6)))
{var inst_11890 = (state_11913[(7)]);var inst_11896 = p.call(null,inst_11890);var state_11913__$1 = state_11913;if(cljs.core.truth_(inst_11896))
{var statearr_11921_11944 = state_11913__$1;(statearr_11921_11944[(1)] = (9));
} else
{var statearr_11922_11945 = state_11913__$1;(statearr_11922_11945[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11914 === (3)))
{var inst_11911 = (state_11913[(2)]);var state_11913__$1 = state_11913;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11913__$1,inst_11911);
} else
{if((state_val_11914 === (12)))
{var state_11913__$1 = state_11913;var statearr_11923_11946 = state_11913__$1;(statearr_11923_11946[(2)] = null);
(statearr_11923_11946[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11914 === (2)))
{var state_11913__$1 = state_11913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11913__$1,(4),ch);
} else
{if((state_val_11914 === (11)))
{var inst_11890 = (state_11913[(7)]);var inst_11900 = (state_11913[(2)]);var state_11913__$1 = state_11913;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11913__$1,(8),inst_11900,inst_11890);
} else
{if((state_val_11914 === (9)))
{var state_11913__$1 = state_11913;var statearr_11924_11947 = state_11913__$1;(statearr_11924_11947[(2)] = tc);
(statearr_11924_11947[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11914 === (5)))
{var inst_11893 = cljs.core.async.close_BANG_.call(null,tc);var inst_11894 = cljs.core.async.close_BANG_.call(null,fc);var state_11913__$1 = (function (){var statearr_11925 = state_11913;(statearr_11925[(8)] = inst_11893);
return statearr_11925;
})();var statearr_11926_11948 = state_11913__$1;(statearr_11926_11948[(2)] = inst_11894);
(statearr_11926_11948[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11914 === (14)))
{var inst_11907 = (state_11913[(2)]);var state_11913__$1 = state_11913;var statearr_11927_11949 = state_11913__$1;(statearr_11927_11949[(2)] = inst_11907);
(statearr_11927_11949[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11914 === (10)))
{var state_11913__$1 = state_11913;var statearr_11928_11950 = state_11913__$1;(statearr_11928_11950[(2)] = fc);
(statearr_11928_11950[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11914 === (8)))
{var inst_11902 = (state_11913[(2)]);var state_11913__$1 = state_11913;if(cljs.core.truth_(inst_11902))
{var statearr_11929_11951 = state_11913__$1;(statearr_11929_11951[(1)] = (12));
} else
{var statearr_11930_11952 = state_11913__$1;(statearr_11930_11952[(1)] = (13));
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
});})(c__6376__auto___11938,tc,fc))
;return ((function (switch__6361__auto__,c__6376__auto___11938,tc,fc){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_11934 = [null,null,null,null,null,null,null,null,null];(statearr_11934[(0)] = state_machine__6362__auto__);
(statearr_11934[(1)] = (1));
return statearr_11934;
});
var state_machine__6362__auto____1 = (function (state_11913){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_11913);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e11935){if((e11935 instanceof Object))
{var ex__6365__auto__ = e11935;var statearr_11936_11953 = state_11913;(statearr_11936_11953[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11913);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11935;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11954 = state_11913;
state_11913 = G__11954;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_11913){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_11913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___11938,tc,fc))
})();var state__6378__auto__ = (function (){var statearr_11937 = f__6377__auto__.call(null);(statearr_11937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___11938);
return statearr_11937;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___11938,tc,fc))
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
return (function (state_12001){var state_val_12002 = (state_12001[(1)]);if((state_val_12002 === (7)))
{var inst_11997 = (state_12001[(2)]);var state_12001__$1 = state_12001;var statearr_12003_12019 = state_12001__$1;(statearr_12003_12019[(2)] = inst_11997);
(statearr_12003_12019[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12002 === (6)))
{var inst_11987 = (state_12001[(7)]);var inst_11990 = (state_12001[(8)]);var inst_11994 = f.call(null,inst_11987,inst_11990);var inst_11987__$1 = inst_11994;var state_12001__$1 = (function (){var statearr_12004 = state_12001;(statearr_12004[(7)] = inst_11987__$1);
return statearr_12004;
})();var statearr_12005_12020 = state_12001__$1;(statearr_12005_12020[(2)] = null);
(statearr_12005_12020[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12002 === (5)))
{var inst_11987 = (state_12001[(7)]);var state_12001__$1 = state_12001;var statearr_12006_12021 = state_12001__$1;(statearr_12006_12021[(2)] = inst_11987);
(statearr_12006_12021[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12002 === (4)))
{var inst_11990 = (state_12001[(8)]);var inst_11990__$1 = (state_12001[(2)]);var inst_11991 = (inst_11990__$1 == null);var state_12001__$1 = (function (){var statearr_12007 = state_12001;(statearr_12007[(8)] = inst_11990__$1);
return statearr_12007;
})();if(cljs.core.truth_(inst_11991))
{var statearr_12008_12022 = state_12001__$1;(statearr_12008_12022[(1)] = (5));
} else
{var statearr_12009_12023 = state_12001__$1;(statearr_12009_12023[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12002 === (3)))
{var inst_11999 = (state_12001[(2)]);var state_12001__$1 = state_12001;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12001__$1,inst_11999);
} else
{if((state_val_12002 === (2)))
{var state_12001__$1 = state_12001;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12001__$1,(4),ch);
} else
{if((state_val_12002 === (1)))
{var inst_11987 = init;var state_12001__$1 = (function (){var statearr_12010 = state_12001;(statearr_12010[(7)] = inst_11987);
return statearr_12010;
})();var statearr_12011_12024 = state_12001__$1;(statearr_12011_12024[(2)] = null);
(statearr_12011_12024[(1)] = (2));
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
var state_machine__6362__auto____0 = (function (){var statearr_12015 = [null,null,null,null,null,null,null,null,null];(statearr_12015[(0)] = state_machine__6362__auto__);
(statearr_12015[(1)] = (1));
return statearr_12015;
});
var state_machine__6362__auto____1 = (function (state_12001){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_12001);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e12016){if((e12016 instanceof Object))
{var ex__6365__auto__ = e12016;var statearr_12017_12025 = state_12001;(statearr_12017_12025[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12001);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12016;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12026 = state_12001;
state_12001 = G__12026;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_12001){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_12001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__))
})();var state__6378__auto__ = (function (){var statearr_12018 = f__6377__auto__.call(null);(statearr_12018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_12018;
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
return (function (state_12100){var state_val_12101 = (state_12100[(1)]);if((state_val_12101 === (7)))
{var inst_12082 = (state_12100[(2)]);var state_12100__$1 = state_12100;var statearr_12102_12125 = state_12100__$1;(statearr_12102_12125[(2)] = inst_12082);
(statearr_12102_12125[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12101 === (1)))
{var inst_12076 = cljs.core.seq.call(null,coll);var inst_12077 = inst_12076;var state_12100__$1 = (function (){var statearr_12103 = state_12100;(statearr_12103[(7)] = inst_12077);
return statearr_12103;
})();var statearr_12104_12126 = state_12100__$1;(statearr_12104_12126[(2)] = null);
(statearr_12104_12126[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12101 === (4)))
{var inst_12077 = (state_12100[(7)]);var inst_12080 = cljs.core.first.call(null,inst_12077);var state_12100__$1 = state_12100;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12100__$1,(7),ch,inst_12080);
} else
{if((state_val_12101 === (13)))
{var inst_12094 = (state_12100[(2)]);var state_12100__$1 = state_12100;var statearr_12105_12127 = state_12100__$1;(statearr_12105_12127[(2)] = inst_12094);
(statearr_12105_12127[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12101 === (6)))
{var inst_12085 = (state_12100[(2)]);var state_12100__$1 = state_12100;if(cljs.core.truth_(inst_12085))
{var statearr_12106_12128 = state_12100__$1;(statearr_12106_12128[(1)] = (8));
} else
{var statearr_12107_12129 = state_12100__$1;(statearr_12107_12129[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12101 === (3)))
{var inst_12098 = (state_12100[(2)]);var state_12100__$1 = state_12100;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12100__$1,inst_12098);
} else
{if((state_val_12101 === (12)))
{var state_12100__$1 = state_12100;var statearr_12108_12130 = state_12100__$1;(statearr_12108_12130[(2)] = null);
(statearr_12108_12130[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12101 === (2)))
{var inst_12077 = (state_12100[(7)]);var state_12100__$1 = state_12100;if(cljs.core.truth_(inst_12077))
{var statearr_12109_12131 = state_12100__$1;(statearr_12109_12131[(1)] = (4));
} else
{var statearr_12110_12132 = state_12100__$1;(statearr_12110_12132[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12101 === (11)))
{var inst_12091 = cljs.core.async.close_BANG_.call(null,ch);var state_12100__$1 = state_12100;var statearr_12111_12133 = state_12100__$1;(statearr_12111_12133[(2)] = inst_12091);
(statearr_12111_12133[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12101 === (9)))
{var state_12100__$1 = state_12100;if(cljs.core.truth_(close_QMARK_))
{var statearr_12112_12134 = state_12100__$1;(statearr_12112_12134[(1)] = (11));
} else
{var statearr_12113_12135 = state_12100__$1;(statearr_12113_12135[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12101 === (5)))
{var inst_12077 = (state_12100[(7)]);var state_12100__$1 = state_12100;var statearr_12114_12136 = state_12100__$1;(statearr_12114_12136[(2)] = inst_12077);
(statearr_12114_12136[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12101 === (10)))
{var inst_12096 = (state_12100[(2)]);var state_12100__$1 = state_12100;var statearr_12115_12137 = state_12100__$1;(statearr_12115_12137[(2)] = inst_12096);
(statearr_12115_12137[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12101 === (8)))
{var inst_12077 = (state_12100[(7)]);var inst_12087 = cljs.core.next.call(null,inst_12077);var inst_12077__$1 = inst_12087;var state_12100__$1 = (function (){var statearr_12116 = state_12100;(statearr_12116[(7)] = inst_12077__$1);
return statearr_12116;
})();var statearr_12117_12138 = state_12100__$1;(statearr_12117_12138[(2)] = null);
(statearr_12117_12138[(1)] = (2));
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
var state_machine__6362__auto____0 = (function (){var statearr_12121 = [null,null,null,null,null,null,null,null];(statearr_12121[(0)] = state_machine__6362__auto__);
(statearr_12121[(1)] = (1));
return statearr_12121;
});
var state_machine__6362__auto____1 = (function (state_12100){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_12100);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e12122){if((e12122 instanceof Object))
{var ex__6365__auto__ = e12122;var statearr_12123_12139 = state_12100;(statearr_12123_12139[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12100);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12122;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12140 = state_12100;
state_12100 = G__12140;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_12100){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_12100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__))
})();var state__6378__auto__ = (function (){var statearr_12124 = f__6377__auto__.call(null);(statearr_12124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_12124;
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
cljs.core.async.Mux = (function (){var obj12142 = {};return obj12142;
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
cljs.core.async.Mult = (function (){var obj12144 = {};return obj12144;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12366 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12366 = (function (cs,ch,mult,meta12367){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12367 = meta12367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12366.cljs$lang$type = true;
cljs.core.async.t12366.cljs$lang$ctorStr = "cljs.core.async/t12366";
cljs.core.async.t12366.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12366");
});})(cs))
;
cljs.core.async.t12366.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12366.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12366.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12366.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12366.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12366.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12368){var self__ = this;
var _12368__$1 = this;return self__.meta12367;
});})(cs))
;
cljs.core.async.t12366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12368,meta12367__$1){var self__ = this;
var _12368__$1 = this;return (new cljs.core.async.t12366(self__.cs,self__.ch,self__.mult,meta12367__$1));
});})(cs))
;
cljs.core.async.__GT_t12366 = ((function (cs){
return (function __GT_t12366(cs__$1,ch__$1,mult__$1,meta12367){return (new cljs.core.async.t12366(cs__$1,ch__$1,mult__$1,meta12367));
});})(cs))
;
}
return (new cljs.core.async.t12366(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6376__auto___12587 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___12587,cs,m,dchan,dctr,done){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___12587,cs,m,dchan,dctr,done){
return (function (state_12499){var state_val_12500 = (state_12499[(1)]);if((state_val_12500 === (7)))
{var inst_12495 = (state_12499[(2)]);var state_12499__$1 = state_12499;var statearr_12501_12588 = state_12499__$1;(statearr_12501_12588[(2)] = inst_12495);
(statearr_12501_12588[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (20)))
{var inst_12400 = (state_12499[(7)]);var inst_12410 = cljs.core.first.call(null,inst_12400);var inst_12411 = cljs.core.nth.call(null,inst_12410,(0),null);var inst_12412 = cljs.core.nth.call(null,inst_12410,(1),null);var state_12499__$1 = (function (){var statearr_12502 = state_12499;(statearr_12502[(8)] = inst_12411);
return statearr_12502;
})();if(cljs.core.truth_(inst_12412))
{var statearr_12503_12589 = state_12499__$1;(statearr_12503_12589[(1)] = (22));
} else
{var statearr_12504_12590 = state_12499__$1;(statearr_12504_12590[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (27)))
{var inst_12447 = (state_12499[(9)]);var inst_12442 = (state_12499[(10)]);var inst_12440 = (state_12499[(11)]);var inst_12371 = (state_12499[(12)]);var inst_12447__$1 = cljs.core._nth.call(null,inst_12440,inst_12442);var inst_12448 = cljs.core.async.put_BANG_.call(null,inst_12447__$1,inst_12371,done);var state_12499__$1 = (function (){var statearr_12505 = state_12499;(statearr_12505[(9)] = inst_12447__$1);
return statearr_12505;
})();if(cljs.core.truth_(inst_12448))
{var statearr_12506_12591 = state_12499__$1;(statearr_12506_12591[(1)] = (30));
} else
{var statearr_12507_12592 = state_12499__$1;(statearr_12507_12592[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (1)))
{var state_12499__$1 = state_12499;var statearr_12508_12593 = state_12499__$1;(statearr_12508_12593[(2)] = null);
(statearr_12508_12593[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (24)))
{var inst_12400 = (state_12499[(7)]);var inst_12417 = (state_12499[(2)]);var inst_12418 = cljs.core.next.call(null,inst_12400);var inst_12380 = inst_12418;var inst_12381 = null;var inst_12382 = (0);var inst_12383 = (0);var state_12499__$1 = (function (){var statearr_12509 = state_12499;(statearr_12509[(13)] = inst_12417);
(statearr_12509[(14)] = inst_12383);
(statearr_12509[(15)] = inst_12382);
(statearr_12509[(16)] = inst_12380);
(statearr_12509[(17)] = inst_12381);
return statearr_12509;
})();var statearr_12510_12594 = state_12499__$1;(statearr_12510_12594[(2)] = null);
(statearr_12510_12594[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (39)))
{var state_12499__$1 = state_12499;var statearr_12514_12595 = state_12499__$1;(statearr_12514_12595[(2)] = null);
(statearr_12514_12595[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (4)))
{var inst_12371 = (state_12499[(12)]);var inst_12371__$1 = (state_12499[(2)]);var inst_12372 = (inst_12371__$1 == null);var state_12499__$1 = (function (){var statearr_12515 = state_12499;(statearr_12515[(12)] = inst_12371__$1);
return statearr_12515;
})();if(cljs.core.truth_(inst_12372))
{var statearr_12516_12596 = state_12499__$1;(statearr_12516_12596[(1)] = (5));
} else
{var statearr_12517_12597 = state_12499__$1;(statearr_12517_12597[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (15)))
{var inst_12383 = (state_12499[(14)]);var inst_12382 = (state_12499[(15)]);var inst_12380 = (state_12499[(16)]);var inst_12381 = (state_12499[(17)]);var inst_12396 = (state_12499[(2)]);var inst_12397 = (inst_12383 + (1));var tmp12511 = inst_12382;var tmp12512 = inst_12380;var tmp12513 = inst_12381;var inst_12380__$1 = tmp12512;var inst_12381__$1 = tmp12513;var inst_12382__$1 = tmp12511;var inst_12383__$1 = inst_12397;var state_12499__$1 = (function (){var statearr_12518 = state_12499;(statearr_12518[(14)] = inst_12383__$1);
(statearr_12518[(15)] = inst_12382__$1);
(statearr_12518[(16)] = inst_12380__$1);
(statearr_12518[(17)] = inst_12381__$1);
(statearr_12518[(18)] = inst_12396);
return statearr_12518;
})();var statearr_12519_12598 = state_12499__$1;(statearr_12519_12598[(2)] = null);
(statearr_12519_12598[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (21)))
{var inst_12421 = (state_12499[(2)]);var state_12499__$1 = state_12499;var statearr_12523_12599 = state_12499__$1;(statearr_12523_12599[(2)] = inst_12421);
(statearr_12523_12599[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (31)))
{var inst_12447 = (state_12499[(9)]);var inst_12451 = done.call(null,null);var inst_12452 = cljs.core.async.untap_STAR_.call(null,m,inst_12447);var state_12499__$1 = (function (){var statearr_12524 = state_12499;(statearr_12524[(19)] = inst_12451);
return statearr_12524;
})();var statearr_12525_12600 = state_12499__$1;(statearr_12525_12600[(2)] = inst_12452);
(statearr_12525_12600[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (32)))
{var inst_12442 = (state_12499[(10)]);var inst_12441 = (state_12499[(20)]);var inst_12439 = (state_12499[(21)]);var inst_12440 = (state_12499[(11)]);var inst_12454 = (state_12499[(2)]);var inst_12455 = (inst_12442 + (1));var tmp12520 = inst_12441;var tmp12521 = inst_12439;var tmp12522 = inst_12440;var inst_12439__$1 = tmp12521;var inst_12440__$1 = tmp12522;var inst_12441__$1 = tmp12520;var inst_12442__$1 = inst_12455;var state_12499__$1 = (function (){var statearr_12526 = state_12499;(statearr_12526[(22)] = inst_12454);
(statearr_12526[(10)] = inst_12442__$1);
(statearr_12526[(20)] = inst_12441__$1);
(statearr_12526[(21)] = inst_12439__$1);
(statearr_12526[(11)] = inst_12440__$1);
return statearr_12526;
})();var statearr_12527_12601 = state_12499__$1;(statearr_12527_12601[(2)] = null);
(statearr_12527_12601[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (40)))
{var inst_12467 = (state_12499[(23)]);var inst_12471 = done.call(null,null);var inst_12472 = cljs.core.async.untap_STAR_.call(null,m,inst_12467);var state_12499__$1 = (function (){var statearr_12528 = state_12499;(statearr_12528[(24)] = inst_12471);
return statearr_12528;
})();var statearr_12529_12602 = state_12499__$1;(statearr_12529_12602[(2)] = inst_12472);
(statearr_12529_12602[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (33)))
{var inst_12458 = (state_12499[(25)]);var inst_12460 = cljs.core.chunked_seq_QMARK_.call(null,inst_12458);var state_12499__$1 = state_12499;if(inst_12460)
{var statearr_12530_12603 = state_12499__$1;(statearr_12530_12603[(1)] = (36));
} else
{var statearr_12531_12604 = state_12499__$1;(statearr_12531_12604[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (13)))
{var inst_12390 = (state_12499[(26)]);var inst_12393 = cljs.core.async.close_BANG_.call(null,inst_12390);var state_12499__$1 = state_12499;var statearr_12532_12605 = state_12499__$1;(statearr_12532_12605[(2)] = inst_12393);
(statearr_12532_12605[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (22)))
{var inst_12411 = (state_12499[(8)]);var inst_12414 = cljs.core.async.close_BANG_.call(null,inst_12411);var state_12499__$1 = state_12499;var statearr_12533_12606 = state_12499__$1;(statearr_12533_12606[(2)] = inst_12414);
(statearr_12533_12606[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (36)))
{var inst_12458 = (state_12499[(25)]);var inst_12462 = cljs.core.chunk_first.call(null,inst_12458);var inst_12463 = cljs.core.chunk_rest.call(null,inst_12458);var inst_12464 = cljs.core.count.call(null,inst_12462);var inst_12439 = inst_12463;var inst_12440 = inst_12462;var inst_12441 = inst_12464;var inst_12442 = (0);var state_12499__$1 = (function (){var statearr_12534 = state_12499;(statearr_12534[(10)] = inst_12442);
(statearr_12534[(20)] = inst_12441);
(statearr_12534[(21)] = inst_12439);
(statearr_12534[(11)] = inst_12440);
return statearr_12534;
})();var statearr_12535_12607 = state_12499__$1;(statearr_12535_12607[(2)] = null);
(statearr_12535_12607[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (41)))
{var inst_12458 = (state_12499[(25)]);var inst_12474 = (state_12499[(2)]);var inst_12475 = cljs.core.next.call(null,inst_12458);var inst_12439 = inst_12475;var inst_12440 = null;var inst_12441 = (0);var inst_12442 = (0);var state_12499__$1 = (function (){var statearr_12536 = state_12499;(statearr_12536[(27)] = inst_12474);
(statearr_12536[(10)] = inst_12442);
(statearr_12536[(20)] = inst_12441);
(statearr_12536[(21)] = inst_12439);
(statearr_12536[(11)] = inst_12440);
return statearr_12536;
})();var statearr_12537_12608 = state_12499__$1;(statearr_12537_12608[(2)] = null);
(statearr_12537_12608[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (43)))
{var state_12499__$1 = state_12499;var statearr_12538_12609 = state_12499__$1;(statearr_12538_12609[(2)] = null);
(statearr_12538_12609[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (29)))
{var inst_12483 = (state_12499[(2)]);var state_12499__$1 = state_12499;var statearr_12539_12610 = state_12499__$1;(statearr_12539_12610[(2)] = inst_12483);
(statearr_12539_12610[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (44)))
{var inst_12492 = (state_12499[(2)]);var state_12499__$1 = (function (){var statearr_12540 = state_12499;(statearr_12540[(28)] = inst_12492);
return statearr_12540;
})();var statearr_12541_12611 = state_12499__$1;(statearr_12541_12611[(2)] = null);
(statearr_12541_12611[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (6)))
{var inst_12431 = (state_12499[(29)]);var inst_12430 = cljs.core.deref.call(null,cs);var inst_12431__$1 = cljs.core.keys.call(null,inst_12430);var inst_12432 = cljs.core.count.call(null,inst_12431__$1);var inst_12433 = cljs.core.reset_BANG_.call(null,dctr,inst_12432);var inst_12438 = cljs.core.seq.call(null,inst_12431__$1);var inst_12439 = inst_12438;var inst_12440 = null;var inst_12441 = (0);var inst_12442 = (0);var state_12499__$1 = (function (){var statearr_12542 = state_12499;(statearr_12542[(30)] = inst_12433);
(statearr_12542[(29)] = inst_12431__$1);
(statearr_12542[(10)] = inst_12442);
(statearr_12542[(20)] = inst_12441);
(statearr_12542[(21)] = inst_12439);
(statearr_12542[(11)] = inst_12440);
return statearr_12542;
})();var statearr_12543_12612 = state_12499__$1;(statearr_12543_12612[(2)] = null);
(statearr_12543_12612[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (28)))
{var inst_12439 = (state_12499[(21)]);var inst_12458 = (state_12499[(25)]);var inst_12458__$1 = cljs.core.seq.call(null,inst_12439);var state_12499__$1 = (function (){var statearr_12544 = state_12499;(statearr_12544[(25)] = inst_12458__$1);
return statearr_12544;
})();if(inst_12458__$1)
{var statearr_12545_12613 = state_12499__$1;(statearr_12545_12613[(1)] = (33));
} else
{var statearr_12546_12614 = state_12499__$1;(statearr_12546_12614[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (25)))
{var inst_12442 = (state_12499[(10)]);var inst_12441 = (state_12499[(20)]);var inst_12444 = (inst_12442 < inst_12441);var inst_12445 = inst_12444;var state_12499__$1 = state_12499;if(cljs.core.truth_(inst_12445))
{var statearr_12547_12615 = state_12499__$1;(statearr_12547_12615[(1)] = (27));
} else
{var statearr_12548_12616 = state_12499__$1;(statearr_12548_12616[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (34)))
{var state_12499__$1 = state_12499;var statearr_12549_12617 = state_12499__$1;(statearr_12549_12617[(2)] = null);
(statearr_12549_12617[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (17)))
{var state_12499__$1 = state_12499;var statearr_12550_12618 = state_12499__$1;(statearr_12550_12618[(2)] = null);
(statearr_12550_12618[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (3)))
{var inst_12497 = (state_12499[(2)]);var state_12499__$1 = state_12499;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12499__$1,inst_12497);
} else
{if((state_val_12500 === (12)))
{var inst_12426 = (state_12499[(2)]);var state_12499__$1 = state_12499;var statearr_12551_12619 = state_12499__$1;(statearr_12551_12619[(2)] = inst_12426);
(statearr_12551_12619[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (2)))
{var state_12499__$1 = state_12499;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12499__$1,(4),ch);
} else
{if((state_val_12500 === (23)))
{var state_12499__$1 = state_12499;var statearr_12552_12620 = state_12499__$1;(statearr_12552_12620[(2)] = null);
(statearr_12552_12620[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (35)))
{var inst_12481 = (state_12499[(2)]);var state_12499__$1 = state_12499;var statearr_12553_12621 = state_12499__$1;(statearr_12553_12621[(2)] = inst_12481);
(statearr_12553_12621[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (19)))
{var inst_12400 = (state_12499[(7)]);var inst_12404 = cljs.core.chunk_first.call(null,inst_12400);var inst_12405 = cljs.core.chunk_rest.call(null,inst_12400);var inst_12406 = cljs.core.count.call(null,inst_12404);var inst_12380 = inst_12405;var inst_12381 = inst_12404;var inst_12382 = inst_12406;var inst_12383 = (0);var state_12499__$1 = (function (){var statearr_12554 = state_12499;(statearr_12554[(14)] = inst_12383);
(statearr_12554[(15)] = inst_12382);
(statearr_12554[(16)] = inst_12380);
(statearr_12554[(17)] = inst_12381);
return statearr_12554;
})();var statearr_12555_12622 = state_12499__$1;(statearr_12555_12622[(2)] = null);
(statearr_12555_12622[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (11)))
{var inst_12400 = (state_12499[(7)]);var inst_12380 = (state_12499[(16)]);var inst_12400__$1 = cljs.core.seq.call(null,inst_12380);var state_12499__$1 = (function (){var statearr_12556 = state_12499;(statearr_12556[(7)] = inst_12400__$1);
return statearr_12556;
})();if(inst_12400__$1)
{var statearr_12557_12623 = state_12499__$1;(statearr_12557_12623[(1)] = (16));
} else
{var statearr_12558_12624 = state_12499__$1;(statearr_12558_12624[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (9)))
{var inst_12428 = (state_12499[(2)]);var state_12499__$1 = state_12499;var statearr_12559_12625 = state_12499__$1;(statearr_12559_12625[(2)] = inst_12428);
(statearr_12559_12625[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (5)))
{var inst_12378 = cljs.core.deref.call(null,cs);var inst_12379 = cljs.core.seq.call(null,inst_12378);var inst_12380 = inst_12379;var inst_12381 = null;var inst_12382 = (0);var inst_12383 = (0);var state_12499__$1 = (function (){var statearr_12560 = state_12499;(statearr_12560[(14)] = inst_12383);
(statearr_12560[(15)] = inst_12382);
(statearr_12560[(16)] = inst_12380);
(statearr_12560[(17)] = inst_12381);
return statearr_12560;
})();var statearr_12561_12626 = state_12499__$1;(statearr_12561_12626[(2)] = null);
(statearr_12561_12626[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (14)))
{var state_12499__$1 = state_12499;var statearr_12562_12627 = state_12499__$1;(statearr_12562_12627[(2)] = null);
(statearr_12562_12627[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (45)))
{var inst_12489 = (state_12499[(2)]);var state_12499__$1 = state_12499;var statearr_12563_12628 = state_12499__$1;(statearr_12563_12628[(2)] = inst_12489);
(statearr_12563_12628[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (26)))
{var inst_12431 = (state_12499[(29)]);var inst_12485 = (state_12499[(2)]);var inst_12486 = cljs.core.seq.call(null,inst_12431);var state_12499__$1 = (function (){var statearr_12564 = state_12499;(statearr_12564[(31)] = inst_12485);
return statearr_12564;
})();if(inst_12486)
{var statearr_12565_12629 = state_12499__$1;(statearr_12565_12629[(1)] = (42));
} else
{var statearr_12566_12630 = state_12499__$1;(statearr_12566_12630[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (16)))
{var inst_12400 = (state_12499[(7)]);var inst_12402 = cljs.core.chunked_seq_QMARK_.call(null,inst_12400);var state_12499__$1 = state_12499;if(inst_12402)
{var statearr_12567_12631 = state_12499__$1;(statearr_12567_12631[(1)] = (19));
} else
{var statearr_12568_12632 = state_12499__$1;(statearr_12568_12632[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (38)))
{var inst_12478 = (state_12499[(2)]);var state_12499__$1 = state_12499;var statearr_12569_12633 = state_12499__$1;(statearr_12569_12633[(2)] = inst_12478);
(statearr_12569_12633[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (30)))
{var state_12499__$1 = state_12499;var statearr_12570_12634 = state_12499__$1;(statearr_12570_12634[(2)] = null);
(statearr_12570_12634[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (10)))
{var inst_12383 = (state_12499[(14)]);var inst_12381 = (state_12499[(17)]);var inst_12389 = cljs.core._nth.call(null,inst_12381,inst_12383);var inst_12390 = cljs.core.nth.call(null,inst_12389,(0),null);var inst_12391 = cljs.core.nth.call(null,inst_12389,(1),null);var state_12499__$1 = (function (){var statearr_12571 = state_12499;(statearr_12571[(26)] = inst_12390);
return statearr_12571;
})();if(cljs.core.truth_(inst_12391))
{var statearr_12572_12635 = state_12499__$1;(statearr_12572_12635[(1)] = (13));
} else
{var statearr_12573_12636 = state_12499__$1;(statearr_12573_12636[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (18)))
{var inst_12424 = (state_12499[(2)]);var state_12499__$1 = state_12499;var statearr_12574_12637 = state_12499__$1;(statearr_12574_12637[(2)] = inst_12424);
(statearr_12574_12637[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (42)))
{var state_12499__$1 = state_12499;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12499__$1,(45),dchan);
} else
{if((state_val_12500 === (37)))
{var inst_12467 = (state_12499[(23)]);var inst_12371 = (state_12499[(12)]);var inst_12458 = (state_12499[(25)]);var inst_12467__$1 = cljs.core.first.call(null,inst_12458);var inst_12468 = cljs.core.async.put_BANG_.call(null,inst_12467__$1,inst_12371,done);var state_12499__$1 = (function (){var statearr_12575 = state_12499;(statearr_12575[(23)] = inst_12467__$1);
return statearr_12575;
})();if(cljs.core.truth_(inst_12468))
{var statearr_12576_12638 = state_12499__$1;(statearr_12576_12638[(1)] = (39));
} else
{var statearr_12577_12639 = state_12499__$1;(statearr_12577_12639[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12500 === (8)))
{var inst_12383 = (state_12499[(14)]);var inst_12382 = (state_12499[(15)]);var inst_12385 = (inst_12383 < inst_12382);var inst_12386 = inst_12385;var state_12499__$1 = state_12499;if(cljs.core.truth_(inst_12386))
{var statearr_12578_12640 = state_12499__$1;(statearr_12578_12640[(1)] = (10));
} else
{var statearr_12579_12641 = state_12499__$1;(statearr_12579_12641[(1)] = (11));
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
});})(c__6376__auto___12587,cs,m,dchan,dctr,done))
;return ((function (switch__6361__auto__,c__6376__auto___12587,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_12583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12583[(0)] = state_machine__6362__auto__);
(statearr_12583[(1)] = (1));
return statearr_12583;
});
var state_machine__6362__auto____1 = (function (state_12499){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_12499);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e12584){if((e12584 instanceof Object))
{var ex__6365__auto__ = e12584;var statearr_12585_12642 = state_12499;(statearr_12585_12642[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12499);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12584;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12643 = state_12499;
state_12499 = G__12643;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_12499){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_12499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___12587,cs,m,dchan,dctr,done))
})();var state__6378__auto__ = (function (){var statearr_12586 = f__6377__auto__.call(null);(statearr_12586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___12587);
return statearr_12586;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___12587,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj12645 = {};return obj12645;
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
;var m = (function (){if(typeof cljs.core.async.t12765 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12765 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12766){
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
this.meta12766 = meta12766;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12765.cljs$lang$type = true;
cljs.core.async.t12765.cljs$lang$ctorStr = "cljs.core.async/t12765";
cljs.core.async.t12765.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12765");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12765.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12765.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12765.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12765.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12765.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12765.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12765.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12765.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12765.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12767){var self__ = this;
var _12767__$1 = this;return self__.meta12766;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12767,meta12766__$1){var self__ = this;
var _12767__$1 = this;return (new cljs.core.async.t12765(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12766__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12765 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12765(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12766){return (new cljs.core.async.t12765(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12766));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12765(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6376__auto___12884 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___12884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___12884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12837){var state_val_12838 = (state_12837[(1)]);if((state_val_12838 === (7)))
{var inst_12781 = (state_12837[(7)]);var inst_12786 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12781);var state_12837__$1 = state_12837;var statearr_12839_12885 = state_12837__$1;(statearr_12839_12885[(2)] = inst_12786);
(statearr_12839_12885[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (20)))
{var inst_12796 = (state_12837[(8)]);var state_12837__$1 = state_12837;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12837__$1,(23),out,inst_12796);
} else
{if((state_val_12838 === (1)))
{var inst_12771 = (state_12837[(9)]);var inst_12771__$1 = calc_state.call(null);var inst_12772 = cljs.core.seq_QMARK_.call(null,inst_12771__$1);var state_12837__$1 = (function (){var statearr_12840 = state_12837;(statearr_12840[(9)] = inst_12771__$1);
return statearr_12840;
})();if(inst_12772)
{var statearr_12841_12886 = state_12837__$1;(statearr_12841_12886[(1)] = (2));
} else
{var statearr_12842_12887 = state_12837__$1;(statearr_12842_12887[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (24)))
{var inst_12789 = (state_12837[(10)]);var inst_12781 = inst_12789;var state_12837__$1 = (function (){var statearr_12843 = state_12837;(statearr_12843[(7)] = inst_12781);
return statearr_12843;
})();var statearr_12844_12888 = state_12837__$1;(statearr_12844_12888[(2)] = null);
(statearr_12844_12888[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (4)))
{var inst_12771 = (state_12837[(9)]);var inst_12777 = (state_12837[(2)]);var inst_12778 = cljs.core.get.call(null,inst_12777,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12779 = cljs.core.get.call(null,inst_12777,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12780 = cljs.core.get.call(null,inst_12777,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12781 = inst_12771;var state_12837__$1 = (function (){var statearr_12845 = state_12837;(statearr_12845[(7)] = inst_12781);
(statearr_12845[(11)] = inst_12778);
(statearr_12845[(12)] = inst_12779);
(statearr_12845[(13)] = inst_12780);
return statearr_12845;
})();var statearr_12846_12889 = state_12837__$1;(statearr_12846_12889[(2)] = null);
(statearr_12846_12889[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (15)))
{var state_12837__$1 = state_12837;var statearr_12847_12890 = state_12837__$1;(statearr_12847_12890[(2)] = null);
(statearr_12847_12890[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (21)))
{var inst_12789 = (state_12837[(10)]);var inst_12781 = inst_12789;var state_12837__$1 = (function (){var statearr_12848 = state_12837;(statearr_12848[(7)] = inst_12781);
return statearr_12848;
})();var statearr_12849_12891 = state_12837__$1;(statearr_12849_12891[(2)] = null);
(statearr_12849_12891[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (13)))
{var inst_12833 = (state_12837[(2)]);var state_12837__$1 = state_12837;var statearr_12850_12892 = state_12837__$1;(statearr_12850_12892[(2)] = inst_12833);
(statearr_12850_12892[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (22)))
{var inst_12831 = (state_12837[(2)]);var state_12837__$1 = state_12837;var statearr_12851_12893 = state_12837__$1;(statearr_12851_12893[(2)] = inst_12831);
(statearr_12851_12893[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (6)))
{var inst_12835 = (state_12837[(2)]);var state_12837__$1 = state_12837;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12837__$1,inst_12835);
} else
{if((state_val_12838 === (25)))
{var state_12837__$1 = state_12837;var statearr_12852_12894 = state_12837__$1;(statearr_12852_12894[(2)] = null);
(statearr_12852_12894[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (17)))
{var inst_12811 = (state_12837[(14)]);var state_12837__$1 = state_12837;var statearr_12853_12895 = state_12837__$1;(statearr_12853_12895[(2)] = inst_12811);
(statearr_12853_12895[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (3)))
{var inst_12771 = (state_12837[(9)]);var state_12837__$1 = state_12837;var statearr_12854_12896 = state_12837__$1;(statearr_12854_12896[(2)] = inst_12771);
(statearr_12854_12896[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (12)))
{var inst_12811 = (state_12837[(14)]);var inst_12797 = (state_12837[(15)]);var inst_12792 = (state_12837[(16)]);var inst_12811__$1 = inst_12792.call(null,inst_12797);var state_12837__$1 = (function (){var statearr_12855 = state_12837;(statearr_12855[(14)] = inst_12811__$1);
return statearr_12855;
})();if(cljs.core.truth_(inst_12811__$1))
{var statearr_12856_12897 = state_12837__$1;(statearr_12856_12897[(1)] = (17));
} else
{var statearr_12857_12898 = state_12837__$1;(statearr_12857_12898[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (2)))
{var inst_12771 = (state_12837[(9)]);var inst_12774 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12771);var state_12837__$1 = state_12837;var statearr_12858_12899 = state_12837__$1;(statearr_12858_12899[(2)] = inst_12774);
(statearr_12858_12899[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (23)))
{var inst_12822 = (state_12837[(2)]);var state_12837__$1 = state_12837;if(cljs.core.truth_(inst_12822))
{var statearr_12859_12900 = state_12837__$1;(statearr_12859_12900[(1)] = (24));
} else
{var statearr_12860_12901 = state_12837__$1;(statearr_12860_12901[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (19)))
{var inst_12819 = (state_12837[(2)]);var state_12837__$1 = state_12837;if(cljs.core.truth_(inst_12819))
{var statearr_12861_12902 = state_12837__$1;(statearr_12861_12902[(1)] = (20));
} else
{var statearr_12862_12903 = state_12837__$1;(statearr_12862_12903[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (11)))
{var inst_12796 = (state_12837[(8)]);var inst_12802 = (inst_12796 == null);var state_12837__$1 = state_12837;if(cljs.core.truth_(inst_12802))
{var statearr_12863_12904 = state_12837__$1;(statearr_12863_12904[(1)] = (14));
} else
{var statearr_12864_12905 = state_12837__$1;(statearr_12864_12905[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (9)))
{var inst_12789 = (state_12837[(10)]);var inst_12789__$1 = (state_12837[(2)]);var inst_12790 = cljs.core.get.call(null,inst_12789__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12791 = cljs.core.get.call(null,inst_12789__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12792 = cljs.core.get.call(null,inst_12789__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12837__$1 = (function (){var statearr_12865 = state_12837;(statearr_12865[(16)] = inst_12792);
(statearr_12865[(17)] = inst_12791);
(statearr_12865[(10)] = inst_12789__$1);
return statearr_12865;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12837__$1,(10),inst_12790);
} else
{if((state_val_12838 === (5)))
{var inst_12781 = (state_12837[(7)]);var inst_12784 = cljs.core.seq_QMARK_.call(null,inst_12781);var state_12837__$1 = state_12837;if(inst_12784)
{var statearr_12866_12906 = state_12837__$1;(statearr_12866_12906[(1)] = (7));
} else
{var statearr_12867_12907 = state_12837__$1;(statearr_12867_12907[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (14)))
{var inst_12797 = (state_12837[(15)]);var inst_12804 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12797);var state_12837__$1 = state_12837;var statearr_12868_12908 = state_12837__$1;(statearr_12868_12908[(2)] = inst_12804);
(statearr_12868_12908[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (26)))
{var inst_12827 = (state_12837[(2)]);var state_12837__$1 = state_12837;var statearr_12869_12909 = state_12837__$1;(statearr_12869_12909[(2)] = inst_12827);
(statearr_12869_12909[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (16)))
{var inst_12807 = (state_12837[(2)]);var inst_12808 = calc_state.call(null);var inst_12781 = inst_12808;var state_12837__$1 = (function (){var statearr_12870 = state_12837;(statearr_12870[(7)] = inst_12781);
(statearr_12870[(18)] = inst_12807);
return statearr_12870;
})();var statearr_12871_12910 = state_12837__$1;(statearr_12871_12910[(2)] = null);
(statearr_12871_12910[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (10)))
{var inst_12796 = (state_12837[(8)]);var inst_12797 = (state_12837[(15)]);var inst_12795 = (state_12837[(2)]);var inst_12796__$1 = cljs.core.nth.call(null,inst_12795,(0),null);var inst_12797__$1 = cljs.core.nth.call(null,inst_12795,(1),null);var inst_12798 = (inst_12796__$1 == null);var inst_12799 = cljs.core._EQ_.call(null,inst_12797__$1,change);var inst_12800 = (inst_12798) || (inst_12799);var state_12837__$1 = (function (){var statearr_12872 = state_12837;(statearr_12872[(8)] = inst_12796__$1);
(statearr_12872[(15)] = inst_12797__$1);
return statearr_12872;
})();if(cljs.core.truth_(inst_12800))
{var statearr_12873_12911 = state_12837__$1;(statearr_12873_12911[(1)] = (11));
} else
{var statearr_12874_12912 = state_12837__$1;(statearr_12874_12912[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (18)))
{var inst_12797 = (state_12837[(15)]);var inst_12792 = (state_12837[(16)]);var inst_12791 = (state_12837[(17)]);var inst_12814 = cljs.core.empty_QMARK_.call(null,inst_12792);var inst_12815 = inst_12791.call(null,inst_12797);var inst_12816 = cljs.core.not.call(null,inst_12815);var inst_12817 = (inst_12814) && (inst_12816);var state_12837__$1 = state_12837;var statearr_12875_12913 = state_12837__$1;(statearr_12875_12913[(2)] = inst_12817);
(statearr_12875_12913[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12838 === (8)))
{var inst_12781 = (state_12837[(7)]);var state_12837__$1 = state_12837;var statearr_12876_12914 = state_12837__$1;(statearr_12876_12914[(2)] = inst_12781);
(statearr_12876_12914[(1)] = (9));
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
});})(c__6376__auto___12884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6361__auto__,c__6376__auto___12884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_12880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12880[(0)] = state_machine__6362__auto__);
(statearr_12880[(1)] = (1));
return statearr_12880;
});
var state_machine__6362__auto____1 = (function (state_12837){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_12837);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e12881){if((e12881 instanceof Object))
{var ex__6365__auto__ = e12881;var statearr_12882_12915 = state_12837;(statearr_12882_12915[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12837);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12881;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12916 = state_12837;
state_12837 = G__12916;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_12837){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_12837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___12884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6378__auto__ = (function (){var statearr_12883 = f__6377__auto__.call(null);(statearr_12883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___12884);
return statearr_12883;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___12884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj12918 = {};return obj12918;
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
return (function (p1__12919_SHARP_){if(cljs.core.truth_(p1__12919_SHARP_.call(null,topic)))
{return p1__12919_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12919_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3560__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13042 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13042 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13043){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13043 = meta13043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13042.cljs$lang$type = true;
cljs.core.async.t13042.cljs$lang$ctorStr = "cljs.core.async/t13042";
cljs.core.async.t13042.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13042");
});})(mults,ensure_mult))
;
cljs.core.async.t13042.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13042.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13042.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13042.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13042.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13042.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13042.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13042.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13044){var self__ = this;
var _13044__$1 = this;return self__.meta13043;
});})(mults,ensure_mult))
;
cljs.core.async.t13042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13044,meta13043__$1){var self__ = this;
var _13044__$1 = this;return (new cljs.core.async.t13042(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13043__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13042 = ((function (mults,ensure_mult){
return (function __GT_t13042(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13043){return (new cljs.core.async.t13042(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13043));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13042(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6376__auto___13164 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___13164,mults,ensure_mult,p){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___13164,mults,ensure_mult,p){
return (function (state_13116){var state_val_13117 = (state_13116[(1)]);if((state_val_13117 === (7)))
{var inst_13112 = (state_13116[(2)]);var state_13116__$1 = state_13116;var statearr_13118_13165 = state_13116__$1;(statearr_13118_13165[(2)] = inst_13112);
(statearr_13118_13165[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (20)))
{var state_13116__$1 = state_13116;var statearr_13119_13166 = state_13116__$1;(statearr_13119_13166[(2)] = null);
(statearr_13119_13166[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (1)))
{var state_13116__$1 = state_13116;var statearr_13120_13167 = state_13116__$1;(statearr_13120_13167[(2)] = null);
(statearr_13120_13167[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (24)))
{var inst_13095 = (state_13116[(7)]);var inst_13104 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13095);var state_13116__$1 = state_13116;var statearr_13121_13168 = state_13116__$1;(statearr_13121_13168[(2)] = inst_13104);
(statearr_13121_13168[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (4)))
{var inst_13047 = (state_13116[(8)]);var inst_13047__$1 = (state_13116[(2)]);var inst_13048 = (inst_13047__$1 == null);var state_13116__$1 = (function (){var statearr_13122 = state_13116;(statearr_13122[(8)] = inst_13047__$1);
return statearr_13122;
})();if(cljs.core.truth_(inst_13048))
{var statearr_13123_13169 = state_13116__$1;(statearr_13123_13169[(1)] = (5));
} else
{var statearr_13124_13170 = state_13116__$1;(statearr_13124_13170[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (15)))
{var inst_13089 = (state_13116[(2)]);var state_13116__$1 = state_13116;var statearr_13125_13171 = state_13116__$1;(statearr_13125_13171[(2)] = inst_13089);
(statearr_13125_13171[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (21)))
{var inst_13109 = (state_13116[(2)]);var state_13116__$1 = (function (){var statearr_13126 = state_13116;(statearr_13126[(9)] = inst_13109);
return statearr_13126;
})();var statearr_13127_13172 = state_13116__$1;(statearr_13127_13172[(2)] = null);
(statearr_13127_13172[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (13)))
{var inst_13071 = (state_13116[(10)]);var inst_13073 = cljs.core.chunked_seq_QMARK_.call(null,inst_13071);var state_13116__$1 = state_13116;if(inst_13073)
{var statearr_13128_13173 = state_13116__$1;(statearr_13128_13173[(1)] = (16));
} else
{var statearr_13129_13174 = state_13116__$1;(statearr_13129_13174[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (22)))
{var inst_13101 = (state_13116[(2)]);var state_13116__$1 = state_13116;if(cljs.core.truth_(inst_13101))
{var statearr_13130_13175 = state_13116__$1;(statearr_13130_13175[(1)] = (23));
} else
{var statearr_13131_13176 = state_13116__$1;(statearr_13131_13176[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (6)))
{var inst_13097 = (state_13116[(11)]);var inst_13095 = (state_13116[(7)]);var inst_13047 = (state_13116[(8)]);var inst_13095__$1 = topic_fn.call(null,inst_13047);var inst_13096 = cljs.core.deref.call(null,mults);var inst_13097__$1 = cljs.core.get.call(null,inst_13096,inst_13095__$1);var state_13116__$1 = (function (){var statearr_13132 = state_13116;(statearr_13132[(11)] = inst_13097__$1);
(statearr_13132[(7)] = inst_13095__$1);
return statearr_13132;
})();if(cljs.core.truth_(inst_13097__$1))
{var statearr_13133_13177 = state_13116__$1;(statearr_13133_13177[(1)] = (19));
} else
{var statearr_13134_13178 = state_13116__$1;(statearr_13134_13178[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (25)))
{var inst_13106 = (state_13116[(2)]);var state_13116__$1 = state_13116;var statearr_13135_13179 = state_13116__$1;(statearr_13135_13179[(2)] = inst_13106);
(statearr_13135_13179[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (17)))
{var inst_13071 = (state_13116[(10)]);var inst_13080 = cljs.core.first.call(null,inst_13071);var inst_13081 = cljs.core.async.muxch_STAR_.call(null,inst_13080);var inst_13082 = cljs.core.async.close_BANG_.call(null,inst_13081);var inst_13083 = cljs.core.next.call(null,inst_13071);var inst_13057 = inst_13083;var inst_13058 = null;var inst_13059 = (0);var inst_13060 = (0);var state_13116__$1 = (function (){var statearr_13136 = state_13116;(statearr_13136[(12)] = inst_13058);
(statearr_13136[(13)] = inst_13082);
(statearr_13136[(14)] = inst_13059);
(statearr_13136[(15)] = inst_13060);
(statearr_13136[(16)] = inst_13057);
return statearr_13136;
})();var statearr_13137_13180 = state_13116__$1;(statearr_13137_13180[(2)] = null);
(statearr_13137_13180[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (3)))
{var inst_13114 = (state_13116[(2)]);var state_13116__$1 = state_13116;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13116__$1,inst_13114);
} else
{if((state_val_13117 === (12)))
{var inst_13091 = (state_13116[(2)]);var state_13116__$1 = state_13116;var statearr_13138_13181 = state_13116__$1;(statearr_13138_13181[(2)] = inst_13091);
(statearr_13138_13181[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (2)))
{var state_13116__$1 = state_13116;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13116__$1,(4),ch);
} else
{if((state_val_13117 === (23)))
{var state_13116__$1 = state_13116;var statearr_13139_13182 = state_13116__$1;(statearr_13139_13182[(2)] = null);
(statearr_13139_13182[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (19)))
{var inst_13097 = (state_13116[(11)]);var inst_13047 = (state_13116[(8)]);var inst_13099 = cljs.core.async.muxch_STAR_.call(null,inst_13097);var state_13116__$1 = state_13116;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13116__$1,(22),inst_13099,inst_13047);
} else
{if((state_val_13117 === (11)))
{var inst_13057 = (state_13116[(16)]);var inst_13071 = (state_13116[(10)]);var inst_13071__$1 = cljs.core.seq.call(null,inst_13057);var state_13116__$1 = (function (){var statearr_13140 = state_13116;(statearr_13140[(10)] = inst_13071__$1);
return statearr_13140;
})();if(inst_13071__$1)
{var statearr_13141_13183 = state_13116__$1;(statearr_13141_13183[(1)] = (13));
} else
{var statearr_13142_13184 = state_13116__$1;(statearr_13142_13184[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (9)))
{var inst_13093 = (state_13116[(2)]);var state_13116__$1 = state_13116;var statearr_13143_13185 = state_13116__$1;(statearr_13143_13185[(2)] = inst_13093);
(statearr_13143_13185[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (5)))
{var inst_13054 = cljs.core.deref.call(null,mults);var inst_13055 = cljs.core.vals.call(null,inst_13054);var inst_13056 = cljs.core.seq.call(null,inst_13055);var inst_13057 = inst_13056;var inst_13058 = null;var inst_13059 = (0);var inst_13060 = (0);var state_13116__$1 = (function (){var statearr_13144 = state_13116;(statearr_13144[(12)] = inst_13058);
(statearr_13144[(14)] = inst_13059);
(statearr_13144[(15)] = inst_13060);
(statearr_13144[(16)] = inst_13057);
return statearr_13144;
})();var statearr_13145_13186 = state_13116__$1;(statearr_13145_13186[(2)] = null);
(statearr_13145_13186[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (14)))
{var state_13116__$1 = state_13116;var statearr_13149_13187 = state_13116__$1;(statearr_13149_13187[(2)] = null);
(statearr_13149_13187[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (16)))
{var inst_13071 = (state_13116[(10)]);var inst_13075 = cljs.core.chunk_first.call(null,inst_13071);var inst_13076 = cljs.core.chunk_rest.call(null,inst_13071);var inst_13077 = cljs.core.count.call(null,inst_13075);var inst_13057 = inst_13076;var inst_13058 = inst_13075;var inst_13059 = inst_13077;var inst_13060 = (0);var state_13116__$1 = (function (){var statearr_13150 = state_13116;(statearr_13150[(12)] = inst_13058);
(statearr_13150[(14)] = inst_13059);
(statearr_13150[(15)] = inst_13060);
(statearr_13150[(16)] = inst_13057);
return statearr_13150;
})();var statearr_13151_13188 = state_13116__$1;(statearr_13151_13188[(2)] = null);
(statearr_13151_13188[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (10)))
{var inst_13058 = (state_13116[(12)]);var inst_13059 = (state_13116[(14)]);var inst_13060 = (state_13116[(15)]);var inst_13057 = (state_13116[(16)]);var inst_13065 = cljs.core._nth.call(null,inst_13058,inst_13060);var inst_13066 = cljs.core.async.muxch_STAR_.call(null,inst_13065);var inst_13067 = cljs.core.async.close_BANG_.call(null,inst_13066);var inst_13068 = (inst_13060 + (1));var tmp13146 = inst_13058;var tmp13147 = inst_13059;var tmp13148 = inst_13057;var inst_13057__$1 = tmp13148;var inst_13058__$1 = tmp13146;var inst_13059__$1 = tmp13147;var inst_13060__$1 = inst_13068;var state_13116__$1 = (function (){var statearr_13152 = state_13116;(statearr_13152[(12)] = inst_13058__$1);
(statearr_13152[(14)] = inst_13059__$1);
(statearr_13152[(15)] = inst_13060__$1);
(statearr_13152[(16)] = inst_13057__$1);
(statearr_13152[(17)] = inst_13067);
return statearr_13152;
})();var statearr_13153_13189 = state_13116__$1;(statearr_13153_13189[(2)] = null);
(statearr_13153_13189[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (18)))
{var inst_13086 = (state_13116[(2)]);var state_13116__$1 = state_13116;var statearr_13154_13190 = state_13116__$1;(statearr_13154_13190[(2)] = inst_13086);
(statearr_13154_13190[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13117 === (8)))
{var inst_13059 = (state_13116[(14)]);var inst_13060 = (state_13116[(15)]);var inst_13062 = (inst_13060 < inst_13059);var inst_13063 = inst_13062;var state_13116__$1 = state_13116;if(cljs.core.truth_(inst_13063))
{var statearr_13155_13191 = state_13116__$1;(statearr_13155_13191[(1)] = (10));
} else
{var statearr_13156_13192 = state_13116__$1;(statearr_13156_13192[(1)] = (11));
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
});})(c__6376__auto___13164,mults,ensure_mult,p))
;return ((function (switch__6361__auto__,c__6376__auto___13164,mults,ensure_mult,p){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_13160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13160[(0)] = state_machine__6362__auto__);
(statearr_13160[(1)] = (1));
return statearr_13160;
});
var state_machine__6362__auto____1 = (function (state_13116){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_13116);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e13161){if((e13161 instanceof Object))
{var ex__6365__auto__ = e13161;var statearr_13162_13193 = state_13116;(statearr_13162_13193[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13116);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13161;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13194 = state_13116;
state_13116 = G__13194;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_13116){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_13116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___13164,mults,ensure_mult,p))
})();var state__6378__auto__ = (function (){var statearr_13163 = f__6377__auto__.call(null);(statearr_13163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___13164);
return statearr_13163;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___13164,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6376__auto___13331 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___13331,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___13331,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13301){var state_val_13302 = (state_13301[(1)]);if((state_val_13302 === (7)))
{var state_13301__$1 = state_13301;var statearr_13303_13332 = state_13301__$1;(statearr_13303_13332[(2)] = null);
(statearr_13303_13332[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13302 === (1)))
{var state_13301__$1 = state_13301;var statearr_13304_13333 = state_13301__$1;(statearr_13304_13333[(2)] = null);
(statearr_13304_13333[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13302 === (4)))
{var inst_13265 = (state_13301[(7)]);var inst_13267 = (inst_13265 < cnt);var state_13301__$1 = state_13301;if(cljs.core.truth_(inst_13267))
{var statearr_13305_13334 = state_13301__$1;(statearr_13305_13334[(1)] = (6));
} else
{var statearr_13306_13335 = state_13301__$1;(statearr_13306_13335[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13302 === (15)))
{var inst_13297 = (state_13301[(2)]);var state_13301__$1 = state_13301;var statearr_13307_13336 = state_13301__$1;(statearr_13307_13336[(2)] = inst_13297);
(statearr_13307_13336[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13302 === (13)))
{var inst_13290 = cljs.core.async.close_BANG_.call(null,out);var state_13301__$1 = state_13301;var statearr_13308_13337 = state_13301__$1;(statearr_13308_13337[(2)] = inst_13290);
(statearr_13308_13337[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13302 === (6)))
{var state_13301__$1 = state_13301;var statearr_13309_13338 = state_13301__$1;(statearr_13309_13338[(2)] = null);
(statearr_13309_13338[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13302 === (3)))
{var inst_13299 = (state_13301[(2)]);var state_13301__$1 = state_13301;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13301__$1,inst_13299);
} else
{if((state_val_13302 === (12)))
{var inst_13287 = (state_13301[(8)]);var inst_13287__$1 = (state_13301[(2)]);var inst_13288 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13287__$1);var state_13301__$1 = (function (){var statearr_13310 = state_13301;(statearr_13310[(8)] = inst_13287__$1);
return statearr_13310;
})();if(cljs.core.truth_(inst_13288))
{var statearr_13311_13339 = state_13301__$1;(statearr_13311_13339[(1)] = (13));
} else
{var statearr_13312_13340 = state_13301__$1;(statearr_13312_13340[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13302 === (2)))
{var inst_13264 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13265 = (0);var state_13301__$1 = (function (){var statearr_13313 = state_13301;(statearr_13313[(7)] = inst_13265);
(statearr_13313[(9)] = inst_13264);
return statearr_13313;
})();var statearr_13314_13341 = state_13301__$1;(statearr_13314_13341[(2)] = null);
(statearr_13314_13341[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13302 === (11)))
{var inst_13265 = (state_13301[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13301,(10),Object,null,(9));var inst_13274 = chs__$1.call(null,inst_13265);var inst_13275 = done.call(null,inst_13265);var inst_13276 = cljs.core.async.take_BANG_.call(null,inst_13274,inst_13275);var state_13301__$1 = state_13301;var statearr_13315_13342 = state_13301__$1;(statearr_13315_13342[(2)] = inst_13276);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13301__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13302 === (9)))
{var inst_13265 = (state_13301[(7)]);var inst_13278 = (state_13301[(2)]);var inst_13279 = (inst_13265 + (1));var inst_13265__$1 = inst_13279;var state_13301__$1 = (function (){var statearr_13316 = state_13301;(statearr_13316[(7)] = inst_13265__$1);
(statearr_13316[(10)] = inst_13278);
return statearr_13316;
})();var statearr_13317_13343 = state_13301__$1;(statearr_13317_13343[(2)] = null);
(statearr_13317_13343[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13302 === (5)))
{var inst_13285 = (state_13301[(2)]);var state_13301__$1 = (function (){var statearr_13318 = state_13301;(statearr_13318[(11)] = inst_13285);
return statearr_13318;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13301__$1,(12),dchan);
} else
{if((state_val_13302 === (14)))
{var inst_13287 = (state_13301[(8)]);var inst_13292 = cljs.core.apply.call(null,f,inst_13287);var state_13301__$1 = state_13301;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13301__$1,(16),out,inst_13292);
} else
{if((state_val_13302 === (16)))
{var inst_13294 = (state_13301[(2)]);var state_13301__$1 = (function (){var statearr_13319 = state_13301;(statearr_13319[(12)] = inst_13294);
return statearr_13319;
})();var statearr_13320_13344 = state_13301__$1;(statearr_13320_13344[(2)] = null);
(statearr_13320_13344[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13302 === (10)))
{var inst_13269 = (state_13301[(2)]);var inst_13270 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13301__$1 = (function (){var statearr_13321 = state_13301;(statearr_13321[(13)] = inst_13269);
return statearr_13321;
})();var statearr_13322_13345 = state_13301__$1;(statearr_13322_13345[(2)] = inst_13270);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13301__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13302 === (8)))
{var inst_13283 = (state_13301[(2)]);var state_13301__$1 = state_13301;var statearr_13323_13346 = state_13301__$1;(statearr_13323_13346[(2)] = inst_13283);
(statearr_13323_13346[(1)] = (5));
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
});})(c__6376__auto___13331,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6361__auto__,c__6376__auto___13331,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_13327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13327[(0)] = state_machine__6362__auto__);
(statearr_13327[(1)] = (1));
return statearr_13327;
});
var state_machine__6362__auto____1 = (function (state_13301){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_13301);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e13328){if((e13328 instanceof Object))
{var ex__6365__auto__ = e13328;var statearr_13329_13347 = state_13301;(statearr_13329_13347[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13301);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13328;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13348 = state_13301;
state_13301 = G__13348;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_13301){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_13301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___13331,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6378__auto__ = (function (){var statearr_13330 = f__6377__auto__.call(null);(statearr_13330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___13331);
return statearr_13330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___13331,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___13456 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___13456,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___13456,out){
return (function (state_13432){var state_val_13433 = (state_13432[(1)]);if((state_val_13433 === (7)))
{var inst_13411 = (state_13432[(7)]);var inst_13412 = (state_13432[(8)]);var inst_13411__$1 = (state_13432[(2)]);var inst_13412__$1 = cljs.core.nth.call(null,inst_13411__$1,(0),null);var inst_13413 = cljs.core.nth.call(null,inst_13411__$1,(1),null);var inst_13414 = (inst_13412__$1 == null);var state_13432__$1 = (function (){var statearr_13434 = state_13432;(statearr_13434[(7)] = inst_13411__$1);
(statearr_13434[(9)] = inst_13413);
(statearr_13434[(8)] = inst_13412__$1);
return statearr_13434;
})();if(cljs.core.truth_(inst_13414))
{var statearr_13435_13457 = state_13432__$1;(statearr_13435_13457[(1)] = (8));
} else
{var statearr_13436_13458 = state_13432__$1;(statearr_13436_13458[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13433 === (1)))
{var inst_13403 = cljs.core.vec.call(null,chs);var inst_13404 = inst_13403;var state_13432__$1 = (function (){var statearr_13437 = state_13432;(statearr_13437[(10)] = inst_13404);
return statearr_13437;
})();var statearr_13438_13459 = state_13432__$1;(statearr_13438_13459[(2)] = null);
(statearr_13438_13459[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13433 === (4)))
{var inst_13404 = (state_13432[(10)]);var state_13432__$1 = state_13432;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13432__$1,(7),inst_13404);
} else
{if((state_val_13433 === (6)))
{var inst_13428 = (state_13432[(2)]);var state_13432__$1 = state_13432;var statearr_13439_13460 = state_13432__$1;(statearr_13439_13460[(2)] = inst_13428);
(statearr_13439_13460[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13433 === (3)))
{var inst_13430 = (state_13432[(2)]);var state_13432__$1 = state_13432;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13432__$1,inst_13430);
} else
{if((state_val_13433 === (2)))
{var inst_13404 = (state_13432[(10)]);var inst_13406 = cljs.core.count.call(null,inst_13404);var inst_13407 = (inst_13406 > (0));var state_13432__$1 = state_13432;if(cljs.core.truth_(inst_13407))
{var statearr_13441_13461 = state_13432__$1;(statearr_13441_13461[(1)] = (4));
} else
{var statearr_13442_13462 = state_13432__$1;(statearr_13442_13462[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13433 === (11)))
{var inst_13404 = (state_13432[(10)]);var inst_13421 = (state_13432[(2)]);var tmp13440 = inst_13404;var inst_13404__$1 = tmp13440;var state_13432__$1 = (function (){var statearr_13443 = state_13432;(statearr_13443[(11)] = inst_13421);
(statearr_13443[(10)] = inst_13404__$1);
return statearr_13443;
})();var statearr_13444_13463 = state_13432__$1;(statearr_13444_13463[(2)] = null);
(statearr_13444_13463[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13433 === (9)))
{var inst_13412 = (state_13432[(8)]);var state_13432__$1 = state_13432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13432__$1,(11),out,inst_13412);
} else
{if((state_val_13433 === (5)))
{var inst_13426 = cljs.core.async.close_BANG_.call(null,out);var state_13432__$1 = state_13432;var statearr_13445_13464 = state_13432__$1;(statearr_13445_13464[(2)] = inst_13426);
(statearr_13445_13464[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13433 === (10)))
{var inst_13424 = (state_13432[(2)]);var state_13432__$1 = state_13432;var statearr_13446_13465 = state_13432__$1;(statearr_13446_13465[(2)] = inst_13424);
(statearr_13446_13465[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13433 === (8)))
{var inst_13411 = (state_13432[(7)]);var inst_13413 = (state_13432[(9)]);var inst_13412 = (state_13432[(8)]);var inst_13404 = (state_13432[(10)]);var inst_13416 = (function (){var c = inst_13413;var v = inst_13412;var vec__13409 = inst_13411;var cs = inst_13404;return ((function (c,v,vec__13409,cs,inst_13411,inst_13413,inst_13412,inst_13404,state_val_13433,c__6376__auto___13456,out){
return (function (p1__13349_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13349_SHARP_);
});
;})(c,v,vec__13409,cs,inst_13411,inst_13413,inst_13412,inst_13404,state_val_13433,c__6376__auto___13456,out))
})();var inst_13417 = cljs.core.filterv.call(null,inst_13416,inst_13404);var inst_13404__$1 = inst_13417;var state_13432__$1 = (function (){var statearr_13447 = state_13432;(statearr_13447[(10)] = inst_13404__$1);
return statearr_13447;
})();var statearr_13448_13466 = state_13432__$1;(statearr_13448_13466[(2)] = null);
(statearr_13448_13466[(1)] = (2));
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
});})(c__6376__auto___13456,out))
;return ((function (switch__6361__auto__,c__6376__auto___13456,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_13452 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13452[(0)] = state_machine__6362__auto__);
(statearr_13452[(1)] = (1));
return statearr_13452;
});
var state_machine__6362__auto____1 = (function (state_13432){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_13432);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e13453){if((e13453 instanceof Object))
{var ex__6365__auto__ = e13453;var statearr_13454_13467 = state_13432;(statearr_13454_13467[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13432);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13453;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13468 = state_13432;
state_13432 = G__13468;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_13432){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_13432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___13456,out))
})();var state__6378__auto__ = (function (){var statearr_13455 = f__6377__auto__.call(null);(statearr_13455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___13456);
return statearr_13455;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___13456,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___13561 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___13561,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___13561,out){
return (function (state_13538){var state_val_13539 = (state_13538[(1)]);if((state_val_13539 === (7)))
{var inst_13520 = (state_13538[(7)]);var inst_13520__$1 = (state_13538[(2)]);var inst_13521 = (inst_13520__$1 == null);var inst_13522 = cljs.core.not.call(null,inst_13521);var state_13538__$1 = (function (){var statearr_13540 = state_13538;(statearr_13540[(7)] = inst_13520__$1);
return statearr_13540;
})();if(inst_13522)
{var statearr_13541_13562 = state_13538__$1;(statearr_13541_13562[(1)] = (8));
} else
{var statearr_13542_13563 = state_13538__$1;(statearr_13542_13563[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13539 === (1)))
{var inst_13515 = (0);var state_13538__$1 = (function (){var statearr_13543 = state_13538;(statearr_13543[(8)] = inst_13515);
return statearr_13543;
})();var statearr_13544_13564 = state_13538__$1;(statearr_13544_13564[(2)] = null);
(statearr_13544_13564[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13539 === (4)))
{var state_13538__$1 = state_13538;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13538__$1,(7),ch);
} else
{if((state_val_13539 === (6)))
{var inst_13533 = (state_13538[(2)]);var state_13538__$1 = state_13538;var statearr_13545_13565 = state_13538__$1;(statearr_13545_13565[(2)] = inst_13533);
(statearr_13545_13565[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13539 === (3)))
{var inst_13535 = (state_13538[(2)]);var inst_13536 = cljs.core.async.close_BANG_.call(null,out);var state_13538__$1 = (function (){var statearr_13546 = state_13538;(statearr_13546[(9)] = inst_13535);
return statearr_13546;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13538__$1,inst_13536);
} else
{if((state_val_13539 === (2)))
{var inst_13515 = (state_13538[(8)]);var inst_13517 = (inst_13515 < n);var state_13538__$1 = state_13538;if(cljs.core.truth_(inst_13517))
{var statearr_13547_13566 = state_13538__$1;(statearr_13547_13566[(1)] = (4));
} else
{var statearr_13548_13567 = state_13538__$1;(statearr_13548_13567[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13539 === (11)))
{var inst_13515 = (state_13538[(8)]);var inst_13525 = (state_13538[(2)]);var inst_13526 = (inst_13515 + (1));var inst_13515__$1 = inst_13526;var state_13538__$1 = (function (){var statearr_13549 = state_13538;(statearr_13549[(10)] = inst_13525);
(statearr_13549[(8)] = inst_13515__$1);
return statearr_13549;
})();var statearr_13550_13568 = state_13538__$1;(statearr_13550_13568[(2)] = null);
(statearr_13550_13568[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13539 === (9)))
{var state_13538__$1 = state_13538;var statearr_13551_13569 = state_13538__$1;(statearr_13551_13569[(2)] = null);
(statearr_13551_13569[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13539 === (5)))
{var state_13538__$1 = state_13538;var statearr_13552_13570 = state_13538__$1;(statearr_13552_13570[(2)] = null);
(statearr_13552_13570[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13539 === (10)))
{var inst_13530 = (state_13538[(2)]);var state_13538__$1 = state_13538;var statearr_13553_13571 = state_13538__$1;(statearr_13553_13571[(2)] = inst_13530);
(statearr_13553_13571[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13539 === (8)))
{var inst_13520 = (state_13538[(7)]);var state_13538__$1 = state_13538;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13538__$1,(11),out,inst_13520);
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
});})(c__6376__auto___13561,out))
;return ((function (switch__6361__auto__,c__6376__auto___13561,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_13557 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13557[(0)] = state_machine__6362__auto__);
(statearr_13557[(1)] = (1));
return statearr_13557;
});
var state_machine__6362__auto____1 = (function (state_13538){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_13538);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e13558){if((e13558 instanceof Object))
{var ex__6365__auto__ = e13558;var statearr_13559_13572 = state_13538;(statearr_13559_13572[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13538);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13558;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13573 = state_13538;
state_13538 = G__13573;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_13538){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_13538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___13561,out))
})();var state__6378__auto__ = (function (){var statearr_13560 = f__6377__auto__.call(null);(statearr_13560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___13561);
return statearr_13560;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___13561,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13581 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13581 = (function (ch,f,map_LT_,meta13582){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13582 = meta13582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13581.cljs$lang$type = true;
cljs.core.async.t13581.cljs$lang$ctorStr = "cljs.core.async/t13581";
cljs.core.async.t13581.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13581");
});
cljs.core.async.t13581.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13581.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t13581.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13581.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13584 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13584 = (function (fn1,_,meta13582,ch,f,map_LT_,meta13585){
this.fn1 = fn1;
this._ = _;
this.meta13582 = meta13582;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13585 = meta13585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13584.cljs$lang$type = true;
cljs.core.async.t13584.cljs$lang$ctorStr = "cljs.core.async/t13584";
cljs.core.async.t13584.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13584");
});})(___$1))
;
cljs.core.async.t13584.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13584.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__13574_SHARP_){return f1.call(null,(((p1__13574_SHARP_ == null))?null:self__.f.call(null,p1__13574_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t13584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13586){var self__ = this;
var _13586__$1 = this;return self__.meta13585;
});})(___$1))
;
cljs.core.async.t13584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13586,meta13585__$1){var self__ = this;
var _13586__$1 = this;return (new cljs.core.async.t13584(self__.fn1,self__._,self__.meta13582,self__.ch,self__.f,self__.map_LT_,meta13585__$1));
});})(___$1))
;
cljs.core.async.__GT_t13584 = ((function (___$1){
return (function __GT_t13584(fn1__$1,___$2,meta13582__$1,ch__$2,f__$2,map_LT___$2,meta13585){return (new cljs.core.async.t13584(fn1__$1,___$2,meta13582__$1,ch__$2,f__$2,map_LT___$2,meta13585));
});})(___$1))
;
}
return (new cljs.core.async.t13584(fn1,___$1,self__.meta13582,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13581.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13581.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13581.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13583){var self__ = this;
var _13583__$1 = this;return self__.meta13582;
});
cljs.core.async.t13581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13583,meta13582__$1){var self__ = this;
var _13583__$1 = this;return (new cljs.core.async.t13581(self__.ch,self__.f,self__.map_LT_,meta13582__$1));
});
cljs.core.async.__GT_t13581 = (function __GT_t13581(ch__$1,f__$1,map_LT___$1,meta13582){return (new cljs.core.async.t13581(ch__$1,f__$1,map_LT___$1,meta13582));
});
}
return (new cljs.core.async.t13581(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13590 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13590 = (function (ch,f,map_GT_,meta13591){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13591 = meta13591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13590.cljs$lang$type = true;
cljs.core.async.t13590.cljs$lang$ctorStr = "cljs.core.async/t13590";
cljs.core.async.t13590.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13590");
});
cljs.core.async.t13590.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13590.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t13590.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13590.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13590.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13590.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13592){var self__ = this;
var _13592__$1 = this;return self__.meta13591;
});
cljs.core.async.t13590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13592,meta13591__$1){var self__ = this;
var _13592__$1 = this;return (new cljs.core.async.t13590(self__.ch,self__.f,self__.map_GT_,meta13591__$1));
});
cljs.core.async.__GT_t13590 = (function __GT_t13590(ch__$1,f__$1,map_GT___$1,meta13591){return (new cljs.core.async.t13590(ch__$1,f__$1,map_GT___$1,meta13591));
});
}
return (new cljs.core.async.t13590(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13596 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13596 = (function (ch,p,filter_GT_,meta13597){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13597 = meta13597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13596.cljs$lang$type = true;
cljs.core.async.t13596.cljs$lang$ctorStr = "cljs.core.async/t13596";
cljs.core.async.t13596.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13596");
});
cljs.core.async.t13596.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13596.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t13596.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13596.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13596.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13596.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13596.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13598){var self__ = this;
var _13598__$1 = this;return self__.meta13597;
});
cljs.core.async.t13596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13598,meta13597__$1){var self__ = this;
var _13598__$1 = this;return (new cljs.core.async.t13596(self__.ch,self__.p,self__.filter_GT_,meta13597__$1));
});
cljs.core.async.__GT_t13596 = (function __GT_t13596(ch__$1,p__$1,filter_GT___$1,meta13597){return (new cljs.core.async.t13596(ch__$1,p__$1,filter_GT___$1,meta13597));
});
}
return (new cljs.core.async.t13596(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___13681 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___13681,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___13681,out){
return (function (state_13660){var state_val_13661 = (state_13660[(1)]);if((state_val_13661 === (7)))
{var inst_13656 = (state_13660[(2)]);var state_13660__$1 = state_13660;var statearr_13662_13682 = state_13660__$1;(statearr_13662_13682[(2)] = inst_13656);
(statearr_13662_13682[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (1)))
{var state_13660__$1 = state_13660;var statearr_13663_13683 = state_13660__$1;(statearr_13663_13683[(2)] = null);
(statearr_13663_13683[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (4)))
{var inst_13642 = (state_13660[(7)]);var inst_13642__$1 = (state_13660[(2)]);var inst_13643 = (inst_13642__$1 == null);var state_13660__$1 = (function (){var statearr_13664 = state_13660;(statearr_13664[(7)] = inst_13642__$1);
return statearr_13664;
})();if(cljs.core.truth_(inst_13643))
{var statearr_13665_13684 = state_13660__$1;(statearr_13665_13684[(1)] = (5));
} else
{var statearr_13666_13685 = state_13660__$1;(statearr_13666_13685[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (6)))
{var inst_13642 = (state_13660[(7)]);var inst_13647 = p.call(null,inst_13642);var state_13660__$1 = state_13660;if(cljs.core.truth_(inst_13647))
{var statearr_13667_13686 = state_13660__$1;(statearr_13667_13686[(1)] = (8));
} else
{var statearr_13668_13687 = state_13660__$1;(statearr_13668_13687[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (3)))
{var inst_13658 = (state_13660[(2)]);var state_13660__$1 = state_13660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13660__$1,inst_13658);
} else
{if((state_val_13661 === (2)))
{var state_13660__$1 = state_13660;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13660__$1,(4),ch);
} else
{if((state_val_13661 === (11)))
{var inst_13650 = (state_13660[(2)]);var state_13660__$1 = state_13660;var statearr_13669_13688 = state_13660__$1;(statearr_13669_13688[(2)] = inst_13650);
(statearr_13669_13688[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (9)))
{var state_13660__$1 = state_13660;var statearr_13670_13689 = state_13660__$1;(statearr_13670_13689[(2)] = null);
(statearr_13670_13689[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (5)))
{var inst_13645 = cljs.core.async.close_BANG_.call(null,out);var state_13660__$1 = state_13660;var statearr_13671_13690 = state_13660__$1;(statearr_13671_13690[(2)] = inst_13645);
(statearr_13671_13690[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (10)))
{var inst_13653 = (state_13660[(2)]);var state_13660__$1 = (function (){var statearr_13672 = state_13660;(statearr_13672[(8)] = inst_13653);
return statearr_13672;
})();var statearr_13673_13691 = state_13660__$1;(statearr_13673_13691[(2)] = null);
(statearr_13673_13691[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13661 === (8)))
{var inst_13642 = (state_13660[(7)]);var state_13660__$1 = state_13660;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13660__$1,(11),out,inst_13642);
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
});})(c__6376__auto___13681,out))
;return ((function (switch__6361__auto__,c__6376__auto___13681,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_13677 = [null,null,null,null,null,null,null,null,null];(statearr_13677[(0)] = state_machine__6362__auto__);
(statearr_13677[(1)] = (1));
return statearr_13677;
});
var state_machine__6362__auto____1 = (function (state_13660){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_13660);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e13678){if((e13678 instanceof Object))
{var ex__6365__auto__ = e13678;var statearr_13679_13692 = state_13660;(statearr_13679_13692[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13660);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13678;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13693 = state_13660;
state_13660 = G__13693;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_13660){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_13660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___13681,out))
})();var state__6378__auto__ = (function (){var statearr_13680 = f__6377__auto__.call(null);(statearr_13680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___13681);
return statearr_13680;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___13681,out))
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
return (function (state_13859){var state_val_13860 = (state_13859[(1)]);if((state_val_13860 === (7)))
{var inst_13855 = (state_13859[(2)]);var state_13859__$1 = state_13859;var statearr_13861_13902 = state_13859__$1;(statearr_13861_13902[(2)] = inst_13855);
(statearr_13861_13902[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13860 === (20)))
{var inst_13825 = (state_13859[(7)]);var inst_13836 = (state_13859[(2)]);var inst_13837 = cljs.core.next.call(null,inst_13825);var inst_13811 = inst_13837;var inst_13812 = null;var inst_13813 = (0);var inst_13814 = (0);var state_13859__$1 = (function (){var statearr_13862 = state_13859;(statearr_13862[(8)] = inst_13836);
(statearr_13862[(9)] = inst_13814);
(statearr_13862[(10)] = inst_13813);
(statearr_13862[(11)] = inst_13811);
(statearr_13862[(12)] = inst_13812);
return statearr_13862;
})();var statearr_13863_13903 = state_13859__$1;(statearr_13863_13903[(2)] = null);
(statearr_13863_13903[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13860 === (1)))
{var state_13859__$1 = state_13859;var statearr_13864_13904 = state_13859__$1;(statearr_13864_13904[(2)] = null);
(statearr_13864_13904[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13860 === (4)))
{var inst_13800 = (state_13859[(13)]);var inst_13800__$1 = (state_13859[(2)]);var inst_13801 = (inst_13800__$1 == null);var state_13859__$1 = (function (){var statearr_13865 = state_13859;(statearr_13865[(13)] = inst_13800__$1);
return statearr_13865;
})();if(cljs.core.truth_(inst_13801))
{var statearr_13866_13905 = state_13859__$1;(statearr_13866_13905[(1)] = (5));
} else
{var statearr_13867_13906 = state_13859__$1;(statearr_13867_13906[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13860 === (15)))
{var state_13859__$1 = state_13859;var statearr_13871_13907 = state_13859__$1;(statearr_13871_13907[(2)] = null);
(statearr_13871_13907[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13860 === (21)))
{var state_13859__$1 = state_13859;var statearr_13872_13908 = state_13859__$1;(statearr_13872_13908[(2)] = null);
(statearr_13872_13908[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13860 === (13)))
{var inst_13814 = (state_13859[(9)]);var inst_13813 = (state_13859[(10)]);var inst_13811 = (state_13859[(11)]);var inst_13812 = (state_13859[(12)]);var inst_13821 = (state_13859[(2)]);var inst_13822 = (inst_13814 + (1));var tmp13868 = inst_13813;var tmp13869 = inst_13811;var tmp13870 = inst_13812;var inst_13811__$1 = tmp13869;var inst_13812__$1 = tmp13870;var inst_13813__$1 = tmp13868;var inst_13814__$1 = inst_13822;var state_13859__$1 = (function (){var statearr_13873 = state_13859;(statearr_13873[(14)] = inst_13821);
(statearr_13873[(9)] = inst_13814__$1);
(statearr_13873[(10)] = inst_13813__$1);
(statearr_13873[(11)] = inst_13811__$1);
(statearr_13873[(12)] = inst_13812__$1);
return statearr_13873;
})();var statearr_13874_13909 = state_13859__$1;(statearr_13874_13909[(2)] = null);
(statearr_13874_13909[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13860 === (22)))
{var state_13859__$1 = state_13859;var statearr_13875_13910 = state_13859__$1;(statearr_13875_13910[(2)] = null);
(statearr_13875_13910[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13860 === (6)))
{var inst_13800 = (state_13859[(13)]);var inst_13809 = f.call(null,inst_13800);var inst_13810 = cljs.core.seq.call(null,inst_13809);var inst_13811 = inst_13810;var inst_13812 = null;var inst_13813 = (0);var inst_13814 = (0);var state_13859__$1 = (function (){var statearr_13876 = state_13859;(statearr_13876[(9)] = inst_13814);
(statearr_13876[(10)] = inst_13813);
(statearr_13876[(11)] = inst_13811);
(statearr_13876[(12)] = inst_13812);
return statearr_13876;
})();var statearr_13877_13911 = state_13859__$1;(statearr_13877_13911[(2)] = null);
(statearr_13877_13911[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13860 === (17)))
{var inst_13825 = (state_13859[(7)]);var inst_13829 = cljs.core.chunk_first.call(null,inst_13825);var inst_13830 = cljs.core.chunk_rest.call(null,inst_13825);var inst_13831 = cljs.core.count.call(null,inst_13829);var inst_13811 = inst_13830;var inst_13812 = inst_13829;var inst_13813 = inst_13831;var inst_13814 = (0);var state_13859__$1 = (function (){var statearr_13878 = state_13859;(statearr_13878[(9)] = inst_13814);
(statearr_13878[(10)] = inst_13813);
(statearr_13878[(11)] = inst_13811);
(statearr_13878[(12)] = inst_13812);
return statearr_13878;
})();var statearr_13879_13912 = state_13859__$1;(statearr_13879_13912[(2)] = null);
(statearr_13879_13912[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13860 === (3)))
{var inst_13857 = (state_13859[(2)]);var state_13859__$1 = state_13859;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13859__$1,inst_13857);
} else
{if((state_val_13860 === (12)))
{var inst_13845 = (state_13859[(2)]);var state_13859__$1 = state_13859;var statearr_13880_13913 = state_13859__$1;(statearr_13880_13913[(2)] = inst_13845);
(statearr_13880_13913[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13860 === (2)))
{var state_13859__$1 = state_13859;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13859__$1,(4),in$);
} else
{if((state_val_13860 === (23)))
{var inst_13853 = (state_13859[(2)]);var state_13859__$1 = state_13859;var statearr_13881_13914 = state_13859__$1;(statearr_13881_13914[(2)] = inst_13853);
(statearr_13881_13914[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13860 === (19)))
{var inst_13840 = (state_13859[(2)]);var state_13859__$1 = state_13859;var statearr_13882_13915 = state_13859__$1;(statearr_13882_13915[(2)] = inst_13840);
(statearr_13882_13915[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13860 === (11)))
{var inst_13825 = (state_13859[(7)]);var inst_13811 = (state_13859[(11)]);var inst_13825__$1 = cljs.core.seq.call(null,inst_13811);var state_13859__$1 = (function (){var statearr_13883 = state_13859;(statearr_13883[(7)] = inst_13825__$1);
return statearr_13883;
})();if(inst_13825__$1)
{var statearr_13884_13916 = state_13859__$1;(statearr_13884_13916[(1)] = (14));
} else
{var statearr_13885_13917 = state_13859__$1;(statearr_13885_13917[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13860 === (9)))
{var inst_13847 = (state_13859[(2)]);var inst_13848 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_13859__$1 = (function (){var statearr_13886 = state_13859;(statearr_13886[(15)] = inst_13847);
return statearr_13886;
})();if(cljs.core.truth_(inst_13848))
{var statearr_13887_13918 = state_13859__$1;(statearr_13887_13918[(1)] = (21));
} else
{var statearr_13888_13919 = state_13859__$1;(statearr_13888_13919[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13860 === (5)))
{var inst_13803 = cljs.core.async.close_BANG_.call(null,out);var state_13859__$1 = state_13859;var statearr_13889_13920 = state_13859__$1;(statearr_13889_13920[(2)] = inst_13803);
(statearr_13889_13920[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13860 === (14)))
{var inst_13825 = (state_13859[(7)]);var inst_13827 = cljs.core.chunked_seq_QMARK_.call(null,inst_13825);var state_13859__$1 = state_13859;if(inst_13827)
{var statearr_13890_13921 = state_13859__$1;(statearr_13890_13921[(1)] = (17));
} else
{var statearr_13891_13922 = state_13859__$1;(statearr_13891_13922[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13860 === (16)))
{var inst_13843 = (state_13859[(2)]);var state_13859__$1 = state_13859;var statearr_13892_13923 = state_13859__$1;(statearr_13892_13923[(2)] = inst_13843);
(statearr_13892_13923[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13860 === (10)))
{var inst_13814 = (state_13859[(9)]);var inst_13812 = (state_13859[(12)]);var inst_13819 = cljs.core._nth.call(null,inst_13812,inst_13814);var state_13859__$1 = state_13859;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13859__$1,(13),out,inst_13819);
} else
{if((state_val_13860 === (18)))
{var inst_13825 = (state_13859[(7)]);var inst_13834 = cljs.core.first.call(null,inst_13825);var state_13859__$1 = state_13859;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13859__$1,(20),out,inst_13834);
} else
{if((state_val_13860 === (8)))
{var inst_13814 = (state_13859[(9)]);var inst_13813 = (state_13859[(10)]);var inst_13816 = (inst_13814 < inst_13813);var inst_13817 = inst_13816;var state_13859__$1 = state_13859;if(cljs.core.truth_(inst_13817))
{var statearr_13893_13924 = state_13859__$1;(statearr_13893_13924[(1)] = (10));
} else
{var statearr_13894_13925 = state_13859__$1;(statearr_13894_13925[(1)] = (11));
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
var state_machine__6362__auto____0 = (function (){var statearr_13898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13898[(0)] = state_machine__6362__auto__);
(statearr_13898[(1)] = (1));
return statearr_13898;
});
var state_machine__6362__auto____1 = (function (state_13859){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_13859);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e13899){if((e13899 instanceof Object))
{var ex__6365__auto__ = e13899;var statearr_13900_13926 = state_13859;(statearr_13900_13926[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13859);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13899;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13927 = state_13859;
state_13859 = G__13927;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_13859){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_13859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__))
})();var state__6378__auto__ = (function (){var statearr_13901 = f__6377__auto__.call(null);(statearr_13901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_13901;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___14024 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___14024,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___14024,out){
return (function (state_13999){var state_val_14000 = (state_13999[(1)]);if((state_val_14000 === (7)))
{var inst_13994 = (state_13999[(2)]);var state_13999__$1 = state_13999;var statearr_14001_14025 = state_13999__$1;(statearr_14001_14025[(2)] = inst_13994);
(statearr_14001_14025[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14000 === (1)))
{var inst_13976 = null;var state_13999__$1 = (function (){var statearr_14002 = state_13999;(statearr_14002[(7)] = inst_13976);
return statearr_14002;
})();var statearr_14003_14026 = state_13999__$1;(statearr_14003_14026[(2)] = null);
(statearr_14003_14026[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14000 === (4)))
{var inst_13979 = (state_13999[(8)]);var inst_13979__$1 = (state_13999[(2)]);var inst_13980 = (inst_13979__$1 == null);var inst_13981 = cljs.core.not.call(null,inst_13980);var state_13999__$1 = (function (){var statearr_14004 = state_13999;(statearr_14004[(8)] = inst_13979__$1);
return statearr_14004;
})();if(inst_13981)
{var statearr_14005_14027 = state_13999__$1;(statearr_14005_14027[(1)] = (5));
} else
{var statearr_14006_14028 = state_13999__$1;(statearr_14006_14028[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14000 === (6)))
{var state_13999__$1 = state_13999;var statearr_14007_14029 = state_13999__$1;(statearr_14007_14029[(2)] = null);
(statearr_14007_14029[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14000 === (3)))
{var inst_13996 = (state_13999[(2)]);var inst_13997 = cljs.core.async.close_BANG_.call(null,out);var state_13999__$1 = (function (){var statearr_14008 = state_13999;(statearr_14008[(9)] = inst_13996);
return statearr_14008;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13999__$1,inst_13997);
} else
{if((state_val_14000 === (2)))
{var state_13999__$1 = state_13999;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13999__$1,(4),ch);
} else
{if((state_val_14000 === (11)))
{var inst_13979 = (state_13999[(8)]);var inst_13988 = (state_13999[(2)]);var inst_13976 = inst_13979;var state_13999__$1 = (function (){var statearr_14009 = state_13999;(statearr_14009[(7)] = inst_13976);
(statearr_14009[(10)] = inst_13988);
return statearr_14009;
})();var statearr_14010_14030 = state_13999__$1;(statearr_14010_14030[(2)] = null);
(statearr_14010_14030[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14000 === (9)))
{var inst_13979 = (state_13999[(8)]);var state_13999__$1 = state_13999;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13999__$1,(11),out,inst_13979);
} else
{if((state_val_14000 === (5)))
{var inst_13976 = (state_13999[(7)]);var inst_13979 = (state_13999[(8)]);var inst_13983 = cljs.core._EQ_.call(null,inst_13979,inst_13976);var state_13999__$1 = state_13999;if(inst_13983)
{var statearr_14012_14031 = state_13999__$1;(statearr_14012_14031[(1)] = (8));
} else
{var statearr_14013_14032 = state_13999__$1;(statearr_14013_14032[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14000 === (10)))
{var inst_13991 = (state_13999[(2)]);var state_13999__$1 = state_13999;var statearr_14014_14033 = state_13999__$1;(statearr_14014_14033[(2)] = inst_13991);
(statearr_14014_14033[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14000 === (8)))
{var inst_13976 = (state_13999[(7)]);var tmp14011 = inst_13976;var inst_13976__$1 = tmp14011;var state_13999__$1 = (function (){var statearr_14015 = state_13999;(statearr_14015[(7)] = inst_13976__$1);
return statearr_14015;
})();var statearr_14016_14034 = state_13999__$1;(statearr_14016_14034[(2)] = null);
(statearr_14016_14034[(1)] = (2));
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
});})(c__6376__auto___14024,out))
;return ((function (switch__6361__auto__,c__6376__auto___14024,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_14020 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14020[(0)] = state_machine__6362__auto__);
(statearr_14020[(1)] = (1));
return statearr_14020;
});
var state_machine__6362__auto____1 = (function (state_13999){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_13999);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e14021){if((e14021 instanceof Object))
{var ex__6365__auto__ = e14021;var statearr_14022_14035 = state_13999;(statearr_14022_14035[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13999);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14021;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14036 = state_13999;
state_13999 = G__14036;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_13999){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_13999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___14024,out))
})();var state__6378__auto__ = (function (){var statearr_14023 = f__6377__auto__.call(null);(statearr_14023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___14024);
return statearr_14023;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___14024,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___14171 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___14171,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___14171,out){
return (function (state_14141){var state_val_14142 = (state_14141[(1)]);if((state_val_14142 === (7)))
{var inst_14137 = (state_14141[(2)]);var state_14141__$1 = state_14141;var statearr_14143_14172 = state_14141__$1;(statearr_14143_14172[(2)] = inst_14137);
(statearr_14143_14172[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14142 === (1)))
{var inst_14104 = (new Array(n));var inst_14105 = inst_14104;var inst_14106 = (0);var state_14141__$1 = (function (){var statearr_14144 = state_14141;(statearr_14144[(7)] = inst_14105);
(statearr_14144[(8)] = inst_14106);
return statearr_14144;
})();var statearr_14145_14173 = state_14141__$1;(statearr_14145_14173[(2)] = null);
(statearr_14145_14173[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14142 === (4)))
{var inst_14109 = (state_14141[(9)]);var inst_14109__$1 = (state_14141[(2)]);var inst_14110 = (inst_14109__$1 == null);var inst_14111 = cljs.core.not.call(null,inst_14110);var state_14141__$1 = (function (){var statearr_14146 = state_14141;(statearr_14146[(9)] = inst_14109__$1);
return statearr_14146;
})();if(inst_14111)
{var statearr_14147_14174 = state_14141__$1;(statearr_14147_14174[(1)] = (5));
} else
{var statearr_14148_14175 = state_14141__$1;(statearr_14148_14175[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14142 === (15)))
{var inst_14131 = (state_14141[(2)]);var state_14141__$1 = state_14141;var statearr_14149_14176 = state_14141__$1;(statearr_14149_14176[(2)] = inst_14131);
(statearr_14149_14176[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14142 === (13)))
{var state_14141__$1 = state_14141;var statearr_14150_14177 = state_14141__$1;(statearr_14150_14177[(2)] = null);
(statearr_14150_14177[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14142 === (6)))
{var inst_14106 = (state_14141[(8)]);var inst_14127 = (inst_14106 > (0));var state_14141__$1 = state_14141;if(cljs.core.truth_(inst_14127))
{var statearr_14151_14178 = state_14141__$1;(statearr_14151_14178[(1)] = (12));
} else
{var statearr_14152_14179 = state_14141__$1;(statearr_14152_14179[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14142 === (3)))
{var inst_14139 = (state_14141[(2)]);var state_14141__$1 = state_14141;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14141__$1,inst_14139);
} else
{if((state_val_14142 === (12)))
{var inst_14105 = (state_14141[(7)]);var inst_14129 = cljs.core.vec.call(null,inst_14105);var state_14141__$1 = state_14141;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14141__$1,(15),out,inst_14129);
} else
{if((state_val_14142 === (2)))
{var state_14141__$1 = state_14141;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14141__$1,(4),ch);
} else
{if((state_val_14142 === (11)))
{var inst_14121 = (state_14141[(2)]);var inst_14122 = (new Array(n));var inst_14105 = inst_14122;var inst_14106 = (0);var state_14141__$1 = (function (){var statearr_14153 = state_14141;(statearr_14153[(10)] = inst_14121);
(statearr_14153[(7)] = inst_14105);
(statearr_14153[(8)] = inst_14106);
return statearr_14153;
})();var statearr_14154_14180 = state_14141__$1;(statearr_14154_14180[(2)] = null);
(statearr_14154_14180[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14142 === (9)))
{var inst_14105 = (state_14141[(7)]);var inst_14119 = cljs.core.vec.call(null,inst_14105);var state_14141__$1 = state_14141;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14141__$1,(11),out,inst_14119);
} else
{if((state_val_14142 === (5)))
{var inst_14105 = (state_14141[(7)]);var inst_14109 = (state_14141[(9)]);var inst_14106 = (state_14141[(8)]);var inst_14114 = (state_14141[(11)]);var inst_14113 = (inst_14105[inst_14106] = inst_14109);var inst_14114__$1 = (inst_14106 + (1));var inst_14115 = (inst_14114__$1 < n);var state_14141__$1 = (function (){var statearr_14155 = state_14141;(statearr_14155[(12)] = inst_14113);
(statearr_14155[(11)] = inst_14114__$1);
return statearr_14155;
})();if(cljs.core.truth_(inst_14115))
{var statearr_14156_14181 = state_14141__$1;(statearr_14156_14181[(1)] = (8));
} else
{var statearr_14157_14182 = state_14141__$1;(statearr_14157_14182[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14142 === (14)))
{var inst_14134 = (state_14141[(2)]);var inst_14135 = cljs.core.async.close_BANG_.call(null,out);var state_14141__$1 = (function (){var statearr_14159 = state_14141;(statearr_14159[(13)] = inst_14134);
return statearr_14159;
})();var statearr_14160_14183 = state_14141__$1;(statearr_14160_14183[(2)] = inst_14135);
(statearr_14160_14183[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14142 === (10)))
{var inst_14125 = (state_14141[(2)]);var state_14141__$1 = state_14141;var statearr_14161_14184 = state_14141__$1;(statearr_14161_14184[(2)] = inst_14125);
(statearr_14161_14184[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14142 === (8)))
{var inst_14105 = (state_14141[(7)]);var inst_14114 = (state_14141[(11)]);var tmp14158 = inst_14105;var inst_14105__$1 = tmp14158;var inst_14106 = inst_14114;var state_14141__$1 = (function (){var statearr_14162 = state_14141;(statearr_14162[(7)] = inst_14105__$1);
(statearr_14162[(8)] = inst_14106);
return statearr_14162;
})();var statearr_14163_14185 = state_14141__$1;(statearr_14163_14185[(2)] = null);
(statearr_14163_14185[(1)] = (2));
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
});})(c__6376__auto___14171,out))
;return ((function (switch__6361__auto__,c__6376__auto___14171,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_14167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14167[(0)] = state_machine__6362__auto__);
(statearr_14167[(1)] = (1));
return statearr_14167;
});
var state_machine__6362__auto____1 = (function (state_14141){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_14141);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e14168){if((e14168 instanceof Object))
{var ex__6365__auto__ = e14168;var statearr_14169_14186 = state_14141;(statearr_14169_14186[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14141);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14168;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14187 = state_14141;
state_14141 = G__14187;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_14141){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_14141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___14171,out))
})();var state__6378__auto__ = (function (){var statearr_14170 = f__6377__auto__.call(null);(statearr_14170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___14171);
return statearr_14170;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___14171,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___14330 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___14330,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___14330,out){
return (function (state_14300){var state_val_14301 = (state_14300[(1)]);if((state_val_14301 === (7)))
{var inst_14296 = (state_14300[(2)]);var state_14300__$1 = state_14300;var statearr_14302_14331 = state_14300__$1;(statearr_14302_14331[(2)] = inst_14296);
(statearr_14302_14331[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14301 === (1)))
{var inst_14259 = [];var inst_14260 = inst_14259;var inst_14261 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14300__$1 = (function (){var statearr_14303 = state_14300;(statearr_14303[(7)] = inst_14260);
(statearr_14303[(8)] = inst_14261);
return statearr_14303;
})();var statearr_14304_14332 = state_14300__$1;(statearr_14304_14332[(2)] = null);
(statearr_14304_14332[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14301 === (4)))
{var inst_14264 = (state_14300[(9)]);var inst_14264__$1 = (state_14300[(2)]);var inst_14265 = (inst_14264__$1 == null);var inst_14266 = cljs.core.not.call(null,inst_14265);var state_14300__$1 = (function (){var statearr_14305 = state_14300;(statearr_14305[(9)] = inst_14264__$1);
return statearr_14305;
})();if(inst_14266)
{var statearr_14306_14333 = state_14300__$1;(statearr_14306_14333[(1)] = (5));
} else
{var statearr_14307_14334 = state_14300__$1;(statearr_14307_14334[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14301 === (15)))
{var inst_14290 = (state_14300[(2)]);var state_14300__$1 = state_14300;var statearr_14308_14335 = state_14300__$1;(statearr_14308_14335[(2)] = inst_14290);
(statearr_14308_14335[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14301 === (13)))
{var state_14300__$1 = state_14300;var statearr_14309_14336 = state_14300__$1;(statearr_14309_14336[(2)] = null);
(statearr_14309_14336[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14301 === (6)))
{var inst_14260 = (state_14300[(7)]);var inst_14285 = inst_14260.length;var inst_14286 = (inst_14285 > (0));var state_14300__$1 = state_14300;if(cljs.core.truth_(inst_14286))
{var statearr_14310_14337 = state_14300__$1;(statearr_14310_14337[(1)] = (12));
} else
{var statearr_14311_14338 = state_14300__$1;(statearr_14311_14338[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14301 === (3)))
{var inst_14298 = (state_14300[(2)]);var state_14300__$1 = state_14300;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14300__$1,inst_14298);
} else
{if((state_val_14301 === (12)))
{var inst_14260 = (state_14300[(7)]);var inst_14288 = cljs.core.vec.call(null,inst_14260);var state_14300__$1 = state_14300;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14300__$1,(15),out,inst_14288);
} else
{if((state_val_14301 === (2)))
{var state_14300__$1 = state_14300;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14300__$1,(4),ch);
} else
{if((state_val_14301 === (11)))
{var inst_14268 = (state_14300[(10)]);var inst_14264 = (state_14300[(9)]);var inst_14278 = (state_14300[(2)]);var inst_14279 = [];var inst_14280 = inst_14279.push(inst_14264);var inst_14260 = inst_14279;var inst_14261 = inst_14268;var state_14300__$1 = (function (){var statearr_14312 = state_14300;(statearr_14312[(7)] = inst_14260);
(statearr_14312[(11)] = inst_14278);
(statearr_14312[(12)] = inst_14280);
(statearr_14312[(8)] = inst_14261);
return statearr_14312;
})();var statearr_14313_14339 = state_14300__$1;(statearr_14313_14339[(2)] = null);
(statearr_14313_14339[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14301 === (9)))
{var inst_14260 = (state_14300[(7)]);var inst_14276 = cljs.core.vec.call(null,inst_14260);var state_14300__$1 = state_14300;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14300__$1,(11),out,inst_14276);
} else
{if((state_val_14301 === (5)))
{var inst_14268 = (state_14300[(10)]);var inst_14264 = (state_14300[(9)]);var inst_14261 = (state_14300[(8)]);var inst_14268__$1 = f.call(null,inst_14264);var inst_14269 = cljs.core._EQ_.call(null,inst_14268__$1,inst_14261);var inst_14270 = cljs.core.keyword_identical_QMARK_.call(null,inst_14261,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14271 = (inst_14269) || (inst_14270);var state_14300__$1 = (function (){var statearr_14314 = state_14300;(statearr_14314[(10)] = inst_14268__$1);
return statearr_14314;
})();if(cljs.core.truth_(inst_14271))
{var statearr_14315_14340 = state_14300__$1;(statearr_14315_14340[(1)] = (8));
} else
{var statearr_14316_14341 = state_14300__$1;(statearr_14316_14341[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14301 === (14)))
{var inst_14293 = (state_14300[(2)]);var inst_14294 = cljs.core.async.close_BANG_.call(null,out);var state_14300__$1 = (function (){var statearr_14318 = state_14300;(statearr_14318[(13)] = inst_14293);
return statearr_14318;
})();var statearr_14319_14342 = state_14300__$1;(statearr_14319_14342[(2)] = inst_14294);
(statearr_14319_14342[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14301 === (10)))
{var inst_14283 = (state_14300[(2)]);var state_14300__$1 = state_14300;var statearr_14320_14343 = state_14300__$1;(statearr_14320_14343[(2)] = inst_14283);
(statearr_14320_14343[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14301 === (8)))
{var inst_14268 = (state_14300[(10)]);var inst_14260 = (state_14300[(7)]);var inst_14264 = (state_14300[(9)]);var inst_14273 = inst_14260.push(inst_14264);var tmp14317 = inst_14260;var inst_14260__$1 = tmp14317;var inst_14261 = inst_14268;var state_14300__$1 = (function (){var statearr_14321 = state_14300;(statearr_14321[(14)] = inst_14273);
(statearr_14321[(7)] = inst_14260__$1);
(statearr_14321[(8)] = inst_14261);
return statearr_14321;
})();var statearr_14322_14344 = state_14300__$1;(statearr_14322_14344[(2)] = null);
(statearr_14322_14344[(1)] = (2));
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
});})(c__6376__auto___14330,out))
;return ((function (switch__6361__auto__,c__6376__auto___14330,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_14326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14326[(0)] = state_machine__6362__auto__);
(statearr_14326[(1)] = (1));
return statearr_14326;
});
var state_machine__6362__auto____1 = (function (state_14300){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_14300);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e14327){if((e14327 instanceof Object))
{var ex__6365__auto__ = e14327;var statearr_14328_14345 = state_14300;(statearr_14328_14345[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14300);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14327;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14346 = state_14300;
state_14300 = G__14346;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_14300){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_14300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___14330,out))
})();var state__6378__auto__ = (function (){var statearr_14329 = f__6377__auto__.call(null);(statearr_14329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___14330);
return statearr_14329;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___14330,out))
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