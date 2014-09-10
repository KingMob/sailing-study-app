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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13198 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13198 = (function (f,fn_handler,meta13199){
this.f = f;
this.fn_handler = fn_handler;
this.meta13199 = meta13199;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13198.cljs$lang$type = true;
cljs.core.async.t13198.cljs$lang$ctorStr = "cljs.core.async/t13198";
cljs.core.async.t13198.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13198");
});
cljs.core.async.t13198.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13198.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13198.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13200){var self__ = this;
var _13200__$1 = this;return self__.meta13199;
});
cljs.core.async.t13198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13200,meta13199__$1){var self__ = this;
var _13200__$1 = this;return (new cljs.core.async.t13198(self__.f,self__.fn_handler,meta13199__$1));
});
cljs.core.async.__GT_t13198 = (function __GT_t13198(f__$1,fn_handler__$1,meta13199){return (new cljs.core.async.t13198(f__$1,fn_handler__$1,meta13199));
});
}
return (new cljs.core.async.t13198(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13202 = buff;if(G__13202)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__13202.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13202.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13202);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13202);
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
{var val_13203 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13203);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_13203,ret){
return (function (){return fn1.call(null,val_13203);
});})(val_13203,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4416__auto___13204 = n;var x_13205 = (0);while(true){
if((x_13205 < n__4416__auto___13204))
{(a[x_13205] = (0));
{
var G__13206 = (x_13205 + (1));
x_13205 = G__13206;
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
var G__13207 = (i + (1));
i = G__13207;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13211 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13211 = (function (flag,alt_flag,meta13212){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13212 = meta13212;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13211.cljs$lang$type = true;
cljs.core.async.t13211.cljs$lang$ctorStr = "cljs.core.async/t13211";
cljs.core.async.t13211.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13211");
});})(flag))
;
cljs.core.async.t13211.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13211.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t13211.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t13211.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13213){var self__ = this;
var _13213__$1 = this;return self__.meta13212;
});})(flag))
;
cljs.core.async.t13211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13213,meta13212__$1){var self__ = this;
var _13213__$1 = this;return (new cljs.core.async.t13211(self__.flag,self__.alt_flag,meta13212__$1));
});})(flag))
;
cljs.core.async.__GT_t13211 = ((function (flag){
return (function __GT_t13211(flag__$1,alt_flag__$1,meta13212){return (new cljs.core.async.t13211(flag__$1,alt_flag__$1,meta13212));
});})(flag))
;
}
return (new cljs.core.async.t13211(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13217 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13217 = (function (cb,flag,alt_handler,meta13218){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13218 = meta13218;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13217.cljs$lang$type = true;
cljs.core.async.t13217.cljs$lang$ctorStr = "cljs.core.async/t13217";
cljs.core.async.t13217.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13217");
});
cljs.core.async.t13217.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13217.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13217.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13219){var self__ = this;
var _13219__$1 = this;return self__.meta13218;
});
cljs.core.async.t13217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13219,meta13218__$1){var self__ = this;
var _13219__$1 = this;return (new cljs.core.async.t13217(self__.cb,self__.flag,self__.alt_handler,meta13218__$1));
});
cljs.core.async.__GT_t13217 = (function __GT_t13217(cb__$1,flag__$1,alt_handler__$1,meta13218){return (new cljs.core.async.t13217(cb__$1,flag__$1,alt_handler__$1,meta13218));
});
}
return (new cljs.core.async.t13217(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13220_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13220_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13221_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13221_SHARP_,port], null));
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
var G__13222 = (i + (1));
i = G__13222;
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
var alts_BANG___delegate = function (ports,p__13223){var map__13225 = p__13223;var map__13225__$1 = ((cljs.core.seq_QMARK_.call(null,map__13225))?cljs.core.apply.call(null,cljs.core.hash_map,map__13225):map__13225);var opts = map__13225__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__13223 = null;if (arguments.length > 1) {
  p__13223 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13223);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13226){
var ports = cljs.core.first(arglist__13226);
var p__13223 = cljs.core.rest(arglist__13226);
return alts_BANG___delegate(ports,p__13223);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6376__auto___13321 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___13321){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___13321){
return (function (state_13297){var state_val_13298 = (state_13297[(1)]);if((state_val_13298 === (7)))
{var inst_13293 = (state_13297[(2)]);var state_13297__$1 = state_13297;var statearr_13299_13322 = state_13297__$1;(statearr_13299_13322[(2)] = inst_13293);
(statearr_13299_13322[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13298 === (1)))
{var state_13297__$1 = state_13297;var statearr_13300_13323 = state_13297__$1;(statearr_13300_13323[(2)] = null);
(statearr_13300_13323[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13298 === (4)))
{var inst_13276 = (state_13297[(7)]);var inst_13276__$1 = (state_13297[(2)]);var inst_13277 = (inst_13276__$1 == null);var state_13297__$1 = (function (){var statearr_13301 = state_13297;(statearr_13301[(7)] = inst_13276__$1);
return statearr_13301;
})();if(cljs.core.truth_(inst_13277))
{var statearr_13302_13324 = state_13297__$1;(statearr_13302_13324[(1)] = (5));
} else
{var statearr_13303_13325 = state_13297__$1;(statearr_13303_13325[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13298 === (13)))
{var state_13297__$1 = state_13297;var statearr_13304_13326 = state_13297__$1;(statearr_13304_13326[(2)] = null);
(statearr_13304_13326[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13298 === (6)))
{var inst_13276 = (state_13297[(7)]);var state_13297__$1 = state_13297;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13297__$1,(11),to,inst_13276);
} else
{if((state_val_13298 === (3)))
{var inst_13295 = (state_13297[(2)]);var state_13297__$1 = state_13297;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13297__$1,inst_13295);
} else
{if((state_val_13298 === (12)))
{var state_13297__$1 = state_13297;var statearr_13305_13327 = state_13297__$1;(statearr_13305_13327[(2)] = null);
(statearr_13305_13327[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13298 === (2)))
{var state_13297__$1 = state_13297;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13297__$1,(4),from);
} else
{if((state_val_13298 === (11)))
{var inst_13286 = (state_13297[(2)]);var state_13297__$1 = state_13297;if(cljs.core.truth_(inst_13286))
{var statearr_13306_13328 = state_13297__$1;(statearr_13306_13328[(1)] = (12));
} else
{var statearr_13307_13329 = state_13297__$1;(statearr_13307_13329[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13298 === (9)))
{var state_13297__$1 = state_13297;var statearr_13308_13330 = state_13297__$1;(statearr_13308_13330[(2)] = null);
(statearr_13308_13330[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13298 === (5)))
{var state_13297__$1 = state_13297;if(cljs.core.truth_(close_QMARK_))
{var statearr_13309_13331 = state_13297__$1;(statearr_13309_13331[(1)] = (8));
} else
{var statearr_13310_13332 = state_13297__$1;(statearr_13310_13332[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13298 === (14)))
{var inst_13291 = (state_13297[(2)]);var state_13297__$1 = state_13297;var statearr_13311_13333 = state_13297__$1;(statearr_13311_13333[(2)] = inst_13291);
(statearr_13311_13333[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13298 === (10)))
{var inst_13283 = (state_13297[(2)]);var state_13297__$1 = state_13297;var statearr_13312_13334 = state_13297__$1;(statearr_13312_13334[(2)] = inst_13283);
(statearr_13312_13334[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13298 === (8)))
{var inst_13280 = cljs.core.async.close_BANG_.call(null,to);var state_13297__$1 = state_13297;var statearr_13313_13335 = state_13297__$1;(statearr_13313_13335[(2)] = inst_13280);
(statearr_13313_13335[(1)] = (10));
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
});})(c__6376__auto___13321))
;return ((function (switch__6361__auto__,c__6376__auto___13321){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_13317 = [null,null,null,null,null,null,null,null];(statearr_13317[(0)] = state_machine__6362__auto__);
(statearr_13317[(1)] = (1));
return statearr_13317;
});
var state_machine__6362__auto____1 = (function (state_13297){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_13297);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e13318){if((e13318 instanceof Object))
{var ex__6365__auto__ = e13318;var statearr_13319_13336 = state_13297;(statearr_13319_13336[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13297);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13318;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13337 = state_13297;
state_13297 = G__13337;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_13297){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_13297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___13321))
})();var state__6378__auto__ = (function (){var statearr_13320 = f__6377__auto__.call(null);(statearr_13320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___13321);
return statearr_13320;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___13321))
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
return (function (p__13521){var vec__13522 = p__13521;var v = cljs.core.nth.call(null,vec__13522,(0),null);var p = cljs.core.nth.call(null,vec__13522,(1),null);var job = vec__13522;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6376__auto___13704 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___13704,res,vec__13522,v,p,job,jobs,results){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___13704,res,vec__13522,v,p,job,jobs,results){
return (function (state_13527){var state_val_13528 = (state_13527[(1)]);if((state_val_13528 === (2)))
{var inst_13524 = (state_13527[(2)]);var inst_13525 = cljs.core.async.close_BANG_.call(null,res);var state_13527__$1 = (function (){var statearr_13529 = state_13527;(statearr_13529[(7)] = inst_13524);
return statearr_13529;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13527__$1,inst_13525);
} else
{if((state_val_13528 === (1)))
{var state_13527__$1 = state_13527;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13527__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6376__auto___13704,res,vec__13522,v,p,job,jobs,results))
;return ((function (switch__6361__auto__,c__6376__auto___13704,res,vec__13522,v,p,job,jobs,results){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_13533 = [null,null,null,null,null,null,null,null];(statearr_13533[(0)] = state_machine__6362__auto__);
(statearr_13533[(1)] = (1));
return statearr_13533;
});
var state_machine__6362__auto____1 = (function (state_13527){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_13527);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e13534){if((e13534 instanceof Object))
{var ex__6365__auto__ = e13534;var statearr_13535_13705 = state_13527;(statearr_13535_13705[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13527);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13534;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13706 = state_13527;
state_13527 = G__13706;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_13527){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_13527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___13704,res,vec__13522,v,p,job,jobs,results))
})();var state__6378__auto__ = (function (){var statearr_13536 = f__6377__auto__.call(null);(statearr_13536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___13704);
return statearr_13536;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___13704,res,vec__13522,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__13537){var vec__13538 = p__13537;var v = cljs.core.nth.call(null,vec__13538,(0),null);var p = cljs.core.nth.call(null,vec__13538,(1),null);var job = vec__13538;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4416__auto___13707 = n;var __13708 = (0);while(true){
if((__13708 < n__4416__auto___13707))
{var G__13539_13709 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__13539_13709) {
case "async":
var c__6376__auto___13711 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__13708,c__6376__auto___13711,G__13539_13709,n__4416__auto___13707,jobs,results,process,async){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (__13708,c__6376__auto___13711,G__13539_13709,n__4416__auto___13707,jobs,results,process,async){
return (function (state_13552){var state_val_13553 = (state_13552[(1)]);if((state_val_13553 === (7)))
{var inst_13548 = (state_13552[(2)]);var state_13552__$1 = state_13552;var statearr_13554_13712 = state_13552__$1;(statearr_13554_13712[(2)] = inst_13548);
(statearr_13554_13712[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13553 === (6)))
{var state_13552__$1 = state_13552;var statearr_13555_13713 = state_13552__$1;(statearr_13555_13713[(2)] = null);
(statearr_13555_13713[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13553 === (5)))
{var state_13552__$1 = state_13552;var statearr_13556_13714 = state_13552__$1;(statearr_13556_13714[(2)] = null);
(statearr_13556_13714[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13553 === (4)))
{var inst_13542 = (state_13552[(2)]);var inst_13543 = async.call(null,inst_13542);var state_13552__$1 = state_13552;if(cljs.core.truth_(inst_13543))
{var statearr_13557_13715 = state_13552__$1;(statearr_13557_13715[(1)] = (5));
} else
{var statearr_13558_13716 = state_13552__$1;(statearr_13558_13716[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13553 === (3)))
{var inst_13550 = (state_13552[(2)]);var state_13552__$1 = state_13552;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13552__$1,inst_13550);
} else
{if((state_val_13553 === (2)))
{var state_13552__$1 = state_13552;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13552__$1,(4),jobs);
} else
{if((state_val_13553 === (1)))
{var state_13552__$1 = state_13552;var statearr_13559_13717 = state_13552__$1;(statearr_13559_13717[(2)] = null);
(statearr_13559_13717[(1)] = (2));
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
});})(__13708,c__6376__auto___13711,G__13539_13709,n__4416__auto___13707,jobs,results,process,async))
;return ((function (__13708,switch__6361__auto__,c__6376__auto___13711,G__13539_13709,n__4416__auto___13707,jobs,results,process,async){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_13563 = [null,null,null,null,null,null,null];(statearr_13563[(0)] = state_machine__6362__auto__);
(statearr_13563[(1)] = (1));
return statearr_13563;
});
var state_machine__6362__auto____1 = (function (state_13552){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_13552);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e13564){if((e13564 instanceof Object))
{var ex__6365__auto__ = e13564;var statearr_13565_13718 = state_13552;(statearr_13565_13718[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13552);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13564;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13719 = state_13552;
state_13552 = G__13719;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_13552){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_13552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(__13708,switch__6361__auto__,c__6376__auto___13711,G__13539_13709,n__4416__auto___13707,jobs,results,process,async))
})();var state__6378__auto__ = (function (){var statearr_13566 = f__6377__auto__.call(null);(statearr_13566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___13711);
return statearr_13566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(__13708,c__6376__auto___13711,G__13539_13709,n__4416__auto___13707,jobs,results,process,async))
);

break;
case "compute":
var c__6376__auto___13720 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__13708,c__6376__auto___13720,G__13539_13709,n__4416__auto___13707,jobs,results,process,async){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (__13708,c__6376__auto___13720,G__13539_13709,n__4416__auto___13707,jobs,results,process,async){
return (function (state_13579){var state_val_13580 = (state_13579[(1)]);if((state_val_13580 === (7)))
{var inst_13575 = (state_13579[(2)]);var state_13579__$1 = state_13579;var statearr_13581_13721 = state_13579__$1;(statearr_13581_13721[(2)] = inst_13575);
(statearr_13581_13721[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13580 === (6)))
{var state_13579__$1 = state_13579;var statearr_13582_13722 = state_13579__$1;(statearr_13582_13722[(2)] = null);
(statearr_13582_13722[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13580 === (5)))
{var state_13579__$1 = state_13579;var statearr_13583_13723 = state_13579__$1;(statearr_13583_13723[(2)] = null);
(statearr_13583_13723[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13580 === (4)))
{var inst_13569 = (state_13579[(2)]);var inst_13570 = process.call(null,inst_13569);var state_13579__$1 = state_13579;if(cljs.core.truth_(inst_13570))
{var statearr_13584_13724 = state_13579__$1;(statearr_13584_13724[(1)] = (5));
} else
{var statearr_13585_13725 = state_13579__$1;(statearr_13585_13725[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13580 === (3)))
{var inst_13577 = (state_13579[(2)]);var state_13579__$1 = state_13579;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13579__$1,inst_13577);
} else
{if((state_val_13580 === (2)))
{var state_13579__$1 = state_13579;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13579__$1,(4),jobs);
} else
{if((state_val_13580 === (1)))
{var state_13579__$1 = state_13579;var statearr_13586_13726 = state_13579__$1;(statearr_13586_13726[(2)] = null);
(statearr_13586_13726[(1)] = (2));
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
});})(__13708,c__6376__auto___13720,G__13539_13709,n__4416__auto___13707,jobs,results,process,async))
;return ((function (__13708,switch__6361__auto__,c__6376__auto___13720,G__13539_13709,n__4416__auto___13707,jobs,results,process,async){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_13590 = [null,null,null,null,null,null,null];(statearr_13590[(0)] = state_machine__6362__auto__);
(statearr_13590[(1)] = (1));
return statearr_13590;
});
var state_machine__6362__auto____1 = (function (state_13579){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_13579);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e13591){if((e13591 instanceof Object))
{var ex__6365__auto__ = e13591;var statearr_13592_13727 = state_13579;(statearr_13592_13727[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13579);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13591;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13728 = state_13579;
state_13579 = G__13728;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_13579){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_13579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(__13708,switch__6361__auto__,c__6376__auto___13720,G__13539_13709,n__4416__auto___13707,jobs,results,process,async))
})();var state__6378__auto__ = (function (){var statearr_13593 = f__6377__auto__.call(null);(statearr_13593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___13720);
return statearr_13593;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(__13708,c__6376__auto___13720,G__13539_13709,n__4416__auto___13707,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__13729 = (__13708 + (1));
__13708 = G__13729;
continue;
}
} else
{}
break;
}
var c__6376__auto___13730 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___13730,jobs,results,process,async){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___13730,jobs,results,process,async){
return (function (state_13615){var state_val_13616 = (state_13615[(1)]);if((state_val_13616 === (9)))
{var inst_13608 = (state_13615[(2)]);var state_13615__$1 = (function (){var statearr_13617 = state_13615;(statearr_13617[(7)] = inst_13608);
return statearr_13617;
})();var statearr_13618_13731 = state_13615__$1;(statearr_13618_13731[(2)] = null);
(statearr_13618_13731[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13616 === (8)))
{var inst_13601 = (state_13615[(8)]);var inst_13606 = (state_13615[(2)]);var state_13615__$1 = (function (){var statearr_13619 = state_13615;(statearr_13619[(9)] = inst_13606);
return statearr_13619;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13615__$1,(9),results,inst_13601);
} else
{if((state_val_13616 === (7)))
{var inst_13611 = (state_13615[(2)]);var state_13615__$1 = state_13615;var statearr_13620_13732 = state_13615__$1;(statearr_13620_13732[(2)] = inst_13611);
(statearr_13620_13732[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13616 === (6)))
{var inst_13601 = (state_13615[(8)]);var inst_13596 = (state_13615[(10)]);var inst_13601__$1 = cljs.core.async.chan.call(null,(1));var inst_13602 = cljs.core.PersistentVector.EMPTY_NODE;var inst_13603 = [inst_13596,inst_13601__$1];var inst_13604 = (new cljs.core.PersistentVector(null,2,(5),inst_13602,inst_13603,null));var state_13615__$1 = (function (){var statearr_13621 = state_13615;(statearr_13621[(8)] = inst_13601__$1);
return statearr_13621;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13615__$1,(8),jobs,inst_13604);
} else
{if((state_val_13616 === (5)))
{var inst_13599 = cljs.core.async.close_BANG_.call(null,jobs);var state_13615__$1 = state_13615;var statearr_13622_13733 = state_13615__$1;(statearr_13622_13733[(2)] = inst_13599);
(statearr_13622_13733[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13616 === (4)))
{var inst_13596 = (state_13615[(10)]);var inst_13596__$1 = (state_13615[(2)]);var inst_13597 = (inst_13596__$1 == null);var state_13615__$1 = (function (){var statearr_13623 = state_13615;(statearr_13623[(10)] = inst_13596__$1);
return statearr_13623;
})();if(cljs.core.truth_(inst_13597))
{var statearr_13624_13734 = state_13615__$1;(statearr_13624_13734[(1)] = (5));
} else
{var statearr_13625_13735 = state_13615__$1;(statearr_13625_13735[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13616 === (3)))
{var inst_13613 = (state_13615[(2)]);var state_13615__$1 = state_13615;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13615__$1,inst_13613);
} else
{if((state_val_13616 === (2)))
{var state_13615__$1 = state_13615;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13615__$1,(4),from);
} else
{if((state_val_13616 === (1)))
{var state_13615__$1 = state_13615;var statearr_13626_13736 = state_13615__$1;(statearr_13626_13736[(2)] = null);
(statearr_13626_13736[(1)] = (2));
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
});})(c__6376__auto___13730,jobs,results,process,async))
;return ((function (switch__6361__auto__,c__6376__auto___13730,jobs,results,process,async){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_13630 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13630[(0)] = state_machine__6362__auto__);
(statearr_13630[(1)] = (1));
return statearr_13630;
});
var state_machine__6362__auto____1 = (function (state_13615){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_13615);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e13631){if((e13631 instanceof Object))
{var ex__6365__auto__ = e13631;var statearr_13632_13737 = state_13615;(statearr_13632_13737[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13615);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13631;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13738 = state_13615;
state_13615 = G__13738;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_13615){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_13615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___13730,jobs,results,process,async))
})();var state__6378__auto__ = (function (){var statearr_13633 = f__6377__auto__.call(null);(statearr_13633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___13730);
return statearr_13633;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___13730,jobs,results,process,async))
);
var c__6376__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto__,jobs,results,process,async){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto__,jobs,results,process,async){
return (function (state_13671){var state_val_13672 = (state_13671[(1)]);if((state_val_13672 === (7)))
{var inst_13667 = (state_13671[(2)]);var state_13671__$1 = state_13671;var statearr_13673_13739 = state_13671__$1;(statearr_13673_13739[(2)] = inst_13667);
(statearr_13673_13739[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (20)))
{var state_13671__$1 = state_13671;var statearr_13674_13740 = state_13671__$1;(statearr_13674_13740[(2)] = null);
(statearr_13674_13740[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (1)))
{var state_13671__$1 = state_13671;var statearr_13675_13741 = state_13671__$1;(statearr_13675_13741[(2)] = null);
(statearr_13675_13741[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (4)))
{var inst_13636 = (state_13671[(7)]);var inst_13636__$1 = (state_13671[(2)]);var inst_13637 = (inst_13636__$1 == null);var state_13671__$1 = (function (){var statearr_13676 = state_13671;(statearr_13676[(7)] = inst_13636__$1);
return statearr_13676;
})();if(cljs.core.truth_(inst_13637))
{var statearr_13677_13742 = state_13671__$1;(statearr_13677_13742[(1)] = (5));
} else
{var statearr_13678_13743 = state_13671__$1;(statearr_13678_13743[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (15)))
{var inst_13649 = (state_13671[(8)]);var state_13671__$1 = state_13671;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13671__$1,(18),to,inst_13649);
} else
{if((state_val_13672 === (21)))
{var inst_13662 = (state_13671[(2)]);var state_13671__$1 = state_13671;var statearr_13679_13744 = state_13671__$1;(statearr_13679_13744[(2)] = inst_13662);
(statearr_13679_13744[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (13)))
{var inst_13664 = (state_13671[(2)]);var state_13671__$1 = (function (){var statearr_13680 = state_13671;(statearr_13680[(9)] = inst_13664);
return statearr_13680;
})();var statearr_13681_13745 = state_13671__$1;(statearr_13681_13745[(2)] = null);
(statearr_13681_13745[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (6)))
{var inst_13636 = (state_13671[(7)]);var state_13671__$1 = state_13671;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13671__$1,(11),inst_13636);
} else
{if((state_val_13672 === (17)))
{var inst_13657 = (state_13671[(2)]);var state_13671__$1 = state_13671;if(cljs.core.truth_(inst_13657))
{var statearr_13682_13746 = state_13671__$1;(statearr_13682_13746[(1)] = (19));
} else
{var statearr_13683_13747 = state_13671__$1;(statearr_13683_13747[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (3)))
{var inst_13669 = (state_13671[(2)]);var state_13671__$1 = state_13671;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13671__$1,inst_13669);
} else
{if((state_val_13672 === (12)))
{var inst_13646 = (state_13671[(10)]);var state_13671__$1 = state_13671;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13671__$1,(14),inst_13646);
} else
{if((state_val_13672 === (2)))
{var state_13671__$1 = state_13671;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13671__$1,(4),results);
} else
{if((state_val_13672 === (19)))
{var state_13671__$1 = state_13671;var statearr_13684_13748 = state_13671__$1;(statearr_13684_13748[(2)] = null);
(statearr_13684_13748[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (11)))
{var inst_13646 = (state_13671[(2)]);var state_13671__$1 = (function (){var statearr_13685 = state_13671;(statearr_13685[(10)] = inst_13646);
return statearr_13685;
})();var statearr_13686_13749 = state_13671__$1;(statearr_13686_13749[(2)] = null);
(statearr_13686_13749[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (9)))
{var state_13671__$1 = state_13671;var statearr_13687_13750 = state_13671__$1;(statearr_13687_13750[(2)] = null);
(statearr_13687_13750[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (5)))
{var state_13671__$1 = state_13671;if(cljs.core.truth_(close_QMARK_))
{var statearr_13688_13751 = state_13671__$1;(statearr_13688_13751[(1)] = (8));
} else
{var statearr_13689_13752 = state_13671__$1;(statearr_13689_13752[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (14)))
{var inst_13651 = (state_13671[(11)]);var inst_13649 = (state_13671[(8)]);var inst_13649__$1 = (state_13671[(2)]);var inst_13650 = (inst_13649__$1 == null);var inst_13651__$1 = cljs.core.not.call(null,inst_13650);var state_13671__$1 = (function (){var statearr_13690 = state_13671;(statearr_13690[(11)] = inst_13651__$1);
(statearr_13690[(8)] = inst_13649__$1);
return statearr_13690;
})();if(inst_13651__$1)
{var statearr_13691_13753 = state_13671__$1;(statearr_13691_13753[(1)] = (15));
} else
{var statearr_13692_13754 = state_13671__$1;(statearr_13692_13754[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (16)))
{var inst_13651 = (state_13671[(11)]);var state_13671__$1 = state_13671;var statearr_13693_13755 = state_13671__$1;(statearr_13693_13755[(2)] = inst_13651);
(statearr_13693_13755[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (10)))
{var inst_13643 = (state_13671[(2)]);var state_13671__$1 = state_13671;var statearr_13694_13756 = state_13671__$1;(statearr_13694_13756[(2)] = inst_13643);
(statearr_13694_13756[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (18)))
{var inst_13654 = (state_13671[(2)]);var state_13671__$1 = state_13671;var statearr_13695_13757 = state_13671__$1;(statearr_13695_13757[(2)] = inst_13654);
(statearr_13695_13757[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (8)))
{var inst_13640 = cljs.core.async.close_BANG_.call(null,to);var state_13671__$1 = state_13671;var statearr_13696_13758 = state_13671__$1;(statearr_13696_13758[(2)] = inst_13640);
(statearr_13696_13758[(1)] = (10));
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
var state_machine__6362__auto____0 = (function (){var statearr_13700 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13700[(0)] = state_machine__6362__auto__);
(statearr_13700[(1)] = (1));
return statearr_13700;
});
var state_machine__6362__auto____1 = (function (state_13671){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_13671);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e13701){if((e13701 instanceof Object))
{var ex__6365__auto__ = e13701;var statearr_13702_13759 = state_13671;(statearr_13702_13759[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13671);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13701;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13760 = state_13671;
state_13671 = G__13760;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_13671){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_13671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__,jobs,results,process,async))
})();var state__6378__auto__ = (function (){var statearr_13703 = f__6377__auto__.call(null);(statearr_13703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_13703;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6376__auto___13861 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___13861,tc,fc){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___13861,tc,fc){
return (function (state_13836){var state_val_13837 = (state_13836[(1)]);if((state_val_13837 === (7)))
{var inst_13832 = (state_13836[(2)]);var state_13836__$1 = state_13836;var statearr_13838_13862 = state_13836__$1;(statearr_13838_13862[(2)] = inst_13832);
(statearr_13838_13862[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13837 === (1)))
{var state_13836__$1 = state_13836;var statearr_13839_13863 = state_13836__$1;(statearr_13839_13863[(2)] = null);
(statearr_13839_13863[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13837 === (4)))
{var inst_13813 = (state_13836[(7)]);var inst_13813__$1 = (state_13836[(2)]);var inst_13814 = (inst_13813__$1 == null);var state_13836__$1 = (function (){var statearr_13840 = state_13836;(statearr_13840[(7)] = inst_13813__$1);
return statearr_13840;
})();if(cljs.core.truth_(inst_13814))
{var statearr_13841_13864 = state_13836__$1;(statearr_13841_13864[(1)] = (5));
} else
{var statearr_13842_13865 = state_13836__$1;(statearr_13842_13865[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13837 === (13)))
{var state_13836__$1 = state_13836;var statearr_13843_13866 = state_13836__$1;(statearr_13843_13866[(2)] = null);
(statearr_13843_13866[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13837 === (6)))
{var inst_13813 = (state_13836[(7)]);var inst_13819 = p.call(null,inst_13813);var state_13836__$1 = state_13836;if(cljs.core.truth_(inst_13819))
{var statearr_13844_13867 = state_13836__$1;(statearr_13844_13867[(1)] = (9));
} else
{var statearr_13845_13868 = state_13836__$1;(statearr_13845_13868[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13837 === (3)))
{var inst_13834 = (state_13836[(2)]);var state_13836__$1 = state_13836;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13836__$1,inst_13834);
} else
{if((state_val_13837 === (12)))
{var state_13836__$1 = state_13836;var statearr_13846_13869 = state_13836__$1;(statearr_13846_13869[(2)] = null);
(statearr_13846_13869[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13837 === (2)))
{var state_13836__$1 = state_13836;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13836__$1,(4),ch);
} else
{if((state_val_13837 === (11)))
{var inst_13813 = (state_13836[(7)]);var inst_13823 = (state_13836[(2)]);var state_13836__$1 = state_13836;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13836__$1,(8),inst_13823,inst_13813);
} else
{if((state_val_13837 === (9)))
{var state_13836__$1 = state_13836;var statearr_13847_13870 = state_13836__$1;(statearr_13847_13870[(2)] = tc);
(statearr_13847_13870[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13837 === (5)))
{var inst_13816 = cljs.core.async.close_BANG_.call(null,tc);var inst_13817 = cljs.core.async.close_BANG_.call(null,fc);var state_13836__$1 = (function (){var statearr_13848 = state_13836;(statearr_13848[(8)] = inst_13816);
return statearr_13848;
})();var statearr_13849_13871 = state_13836__$1;(statearr_13849_13871[(2)] = inst_13817);
(statearr_13849_13871[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13837 === (14)))
{var inst_13830 = (state_13836[(2)]);var state_13836__$1 = state_13836;var statearr_13850_13872 = state_13836__$1;(statearr_13850_13872[(2)] = inst_13830);
(statearr_13850_13872[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13837 === (10)))
{var state_13836__$1 = state_13836;var statearr_13851_13873 = state_13836__$1;(statearr_13851_13873[(2)] = fc);
(statearr_13851_13873[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13837 === (8)))
{var inst_13825 = (state_13836[(2)]);var state_13836__$1 = state_13836;if(cljs.core.truth_(inst_13825))
{var statearr_13852_13874 = state_13836__$1;(statearr_13852_13874[(1)] = (12));
} else
{var statearr_13853_13875 = state_13836__$1;(statearr_13853_13875[(1)] = (13));
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
});})(c__6376__auto___13861,tc,fc))
;return ((function (switch__6361__auto__,c__6376__auto___13861,tc,fc){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_13857 = [null,null,null,null,null,null,null,null,null];(statearr_13857[(0)] = state_machine__6362__auto__);
(statearr_13857[(1)] = (1));
return statearr_13857;
});
var state_machine__6362__auto____1 = (function (state_13836){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_13836);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e13858){if((e13858 instanceof Object))
{var ex__6365__auto__ = e13858;var statearr_13859_13876 = state_13836;(statearr_13859_13876[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13836);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13858;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13877 = state_13836;
state_13836 = G__13877;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_13836){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_13836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___13861,tc,fc))
})();var state__6378__auto__ = (function (){var statearr_13860 = f__6377__auto__.call(null);(statearr_13860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___13861);
return statearr_13860;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___13861,tc,fc))
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
return (function (state_13924){var state_val_13925 = (state_13924[(1)]);if((state_val_13925 === (7)))
{var inst_13920 = (state_13924[(2)]);var state_13924__$1 = state_13924;var statearr_13926_13942 = state_13924__$1;(statearr_13926_13942[(2)] = inst_13920);
(statearr_13926_13942[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13925 === (6)))
{var inst_13910 = (state_13924[(7)]);var inst_13913 = (state_13924[(8)]);var inst_13917 = f.call(null,inst_13910,inst_13913);var inst_13910__$1 = inst_13917;var state_13924__$1 = (function (){var statearr_13927 = state_13924;(statearr_13927[(7)] = inst_13910__$1);
return statearr_13927;
})();var statearr_13928_13943 = state_13924__$1;(statearr_13928_13943[(2)] = null);
(statearr_13928_13943[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13925 === (5)))
{var inst_13910 = (state_13924[(7)]);var state_13924__$1 = state_13924;var statearr_13929_13944 = state_13924__$1;(statearr_13929_13944[(2)] = inst_13910);
(statearr_13929_13944[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13925 === (4)))
{var inst_13913 = (state_13924[(8)]);var inst_13913__$1 = (state_13924[(2)]);var inst_13914 = (inst_13913__$1 == null);var state_13924__$1 = (function (){var statearr_13930 = state_13924;(statearr_13930[(8)] = inst_13913__$1);
return statearr_13930;
})();if(cljs.core.truth_(inst_13914))
{var statearr_13931_13945 = state_13924__$1;(statearr_13931_13945[(1)] = (5));
} else
{var statearr_13932_13946 = state_13924__$1;(statearr_13932_13946[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13925 === (3)))
{var inst_13922 = (state_13924[(2)]);var state_13924__$1 = state_13924;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13924__$1,inst_13922);
} else
{if((state_val_13925 === (2)))
{var state_13924__$1 = state_13924;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13924__$1,(4),ch);
} else
{if((state_val_13925 === (1)))
{var inst_13910 = init;var state_13924__$1 = (function (){var statearr_13933 = state_13924;(statearr_13933[(7)] = inst_13910);
return statearr_13933;
})();var statearr_13934_13947 = state_13924__$1;(statearr_13934_13947[(2)] = null);
(statearr_13934_13947[(1)] = (2));
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
var state_machine__6362__auto____0 = (function (){var statearr_13938 = [null,null,null,null,null,null,null,null,null];(statearr_13938[(0)] = state_machine__6362__auto__);
(statearr_13938[(1)] = (1));
return statearr_13938;
});
var state_machine__6362__auto____1 = (function (state_13924){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_13924);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e13939){if((e13939 instanceof Object))
{var ex__6365__auto__ = e13939;var statearr_13940_13948 = state_13924;(statearr_13940_13948[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13924);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13939;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13949 = state_13924;
state_13924 = G__13949;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_13924){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_13924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__))
})();var state__6378__auto__ = (function (){var statearr_13941 = f__6377__auto__.call(null);(statearr_13941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_13941;
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
return (function (state_14023){var state_val_14024 = (state_14023[(1)]);if((state_val_14024 === (7)))
{var inst_14005 = (state_14023[(2)]);var state_14023__$1 = state_14023;var statearr_14025_14048 = state_14023__$1;(statearr_14025_14048[(2)] = inst_14005);
(statearr_14025_14048[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14024 === (1)))
{var inst_13999 = cljs.core.seq.call(null,coll);var inst_14000 = inst_13999;var state_14023__$1 = (function (){var statearr_14026 = state_14023;(statearr_14026[(7)] = inst_14000);
return statearr_14026;
})();var statearr_14027_14049 = state_14023__$1;(statearr_14027_14049[(2)] = null);
(statearr_14027_14049[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14024 === (4)))
{var inst_14000 = (state_14023[(7)]);var inst_14003 = cljs.core.first.call(null,inst_14000);var state_14023__$1 = state_14023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14023__$1,(7),ch,inst_14003);
} else
{if((state_val_14024 === (13)))
{var inst_14017 = (state_14023[(2)]);var state_14023__$1 = state_14023;var statearr_14028_14050 = state_14023__$1;(statearr_14028_14050[(2)] = inst_14017);
(statearr_14028_14050[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14024 === (6)))
{var inst_14008 = (state_14023[(2)]);var state_14023__$1 = state_14023;if(cljs.core.truth_(inst_14008))
{var statearr_14029_14051 = state_14023__$1;(statearr_14029_14051[(1)] = (8));
} else
{var statearr_14030_14052 = state_14023__$1;(statearr_14030_14052[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14024 === (3)))
{var inst_14021 = (state_14023[(2)]);var state_14023__$1 = state_14023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14023__$1,inst_14021);
} else
{if((state_val_14024 === (12)))
{var state_14023__$1 = state_14023;var statearr_14031_14053 = state_14023__$1;(statearr_14031_14053[(2)] = null);
(statearr_14031_14053[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14024 === (2)))
{var inst_14000 = (state_14023[(7)]);var state_14023__$1 = state_14023;if(cljs.core.truth_(inst_14000))
{var statearr_14032_14054 = state_14023__$1;(statearr_14032_14054[(1)] = (4));
} else
{var statearr_14033_14055 = state_14023__$1;(statearr_14033_14055[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14024 === (11)))
{var inst_14014 = cljs.core.async.close_BANG_.call(null,ch);var state_14023__$1 = state_14023;var statearr_14034_14056 = state_14023__$1;(statearr_14034_14056[(2)] = inst_14014);
(statearr_14034_14056[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14024 === (9)))
{var state_14023__$1 = state_14023;if(cljs.core.truth_(close_QMARK_))
{var statearr_14035_14057 = state_14023__$1;(statearr_14035_14057[(1)] = (11));
} else
{var statearr_14036_14058 = state_14023__$1;(statearr_14036_14058[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14024 === (5)))
{var inst_14000 = (state_14023[(7)]);var state_14023__$1 = state_14023;var statearr_14037_14059 = state_14023__$1;(statearr_14037_14059[(2)] = inst_14000);
(statearr_14037_14059[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14024 === (10)))
{var inst_14019 = (state_14023[(2)]);var state_14023__$1 = state_14023;var statearr_14038_14060 = state_14023__$1;(statearr_14038_14060[(2)] = inst_14019);
(statearr_14038_14060[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14024 === (8)))
{var inst_14000 = (state_14023[(7)]);var inst_14010 = cljs.core.next.call(null,inst_14000);var inst_14000__$1 = inst_14010;var state_14023__$1 = (function (){var statearr_14039 = state_14023;(statearr_14039[(7)] = inst_14000__$1);
return statearr_14039;
})();var statearr_14040_14061 = state_14023__$1;(statearr_14040_14061[(2)] = null);
(statearr_14040_14061[(1)] = (2));
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
var state_machine__6362__auto____0 = (function (){var statearr_14044 = [null,null,null,null,null,null,null,null];(statearr_14044[(0)] = state_machine__6362__auto__);
(statearr_14044[(1)] = (1));
return statearr_14044;
});
var state_machine__6362__auto____1 = (function (state_14023){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_14023);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e14045){if((e14045 instanceof Object))
{var ex__6365__auto__ = e14045;var statearr_14046_14062 = state_14023;(statearr_14046_14062[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14023);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14045;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14063 = state_14023;
state_14023 = G__14063;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_14023){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_14023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__))
})();var state__6378__auto__ = (function (){var statearr_14047 = f__6377__auto__.call(null);(statearr_14047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_14047;
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
cljs.core.async.Mux = (function (){var obj14065 = {};return obj14065;
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
cljs.core.async.Mult = (function (){var obj14067 = {};return obj14067;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14289 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14289 = (function (cs,ch,mult,meta14290){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14290 = meta14290;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14289.cljs$lang$type = true;
cljs.core.async.t14289.cljs$lang$ctorStr = "cljs.core.async/t14289";
cljs.core.async.t14289.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t14289");
});})(cs))
;
cljs.core.async.t14289.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14289.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14289.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14289.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14289.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14289.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14291){var self__ = this;
var _14291__$1 = this;return self__.meta14290;
});})(cs))
;
cljs.core.async.t14289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14291,meta14290__$1){var self__ = this;
var _14291__$1 = this;return (new cljs.core.async.t14289(self__.cs,self__.ch,self__.mult,meta14290__$1));
});})(cs))
;
cljs.core.async.__GT_t14289 = ((function (cs){
return (function __GT_t14289(cs__$1,ch__$1,mult__$1,meta14290){return (new cljs.core.async.t14289(cs__$1,ch__$1,mult__$1,meta14290));
});})(cs))
;
}
return (new cljs.core.async.t14289(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6376__auto___14510 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___14510,cs,m,dchan,dctr,done){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___14510,cs,m,dchan,dctr,done){
return (function (state_14422){var state_val_14423 = (state_14422[(1)]);if((state_val_14423 === (7)))
{var inst_14418 = (state_14422[(2)]);var state_14422__$1 = state_14422;var statearr_14424_14511 = state_14422__$1;(statearr_14424_14511[(2)] = inst_14418);
(statearr_14424_14511[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (20)))
{var inst_14323 = (state_14422[(7)]);var inst_14333 = cljs.core.first.call(null,inst_14323);var inst_14334 = cljs.core.nth.call(null,inst_14333,(0),null);var inst_14335 = cljs.core.nth.call(null,inst_14333,(1),null);var state_14422__$1 = (function (){var statearr_14425 = state_14422;(statearr_14425[(8)] = inst_14334);
return statearr_14425;
})();if(cljs.core.truth_(inst_14335))
{var statearr_14426_14512 = state_14422__$1;(statearr_14426_14512[(1)] = (22));
} else
{var statearr_14427_14513 = state_14422__$1;(statearr_14427_14513[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (27)))
{var inst_14294 = (state_14422[(9)]);var inst_14370 = (state_14422[(10)]);var inst_14363 = (state_14422[(11)]);var inst_14365 = (state_14422[(12)]);var inst_14370__$1 = cljs.core._nth.call(null,inst_14363,inst_14365);var inst_14371 = cljs.core.async.put_BANG_.call(null,inst_14370__$1,inst_14294,done);var state_14422__$1 = (function (){var statearr_14428 = state_14422;(statearr_14428[(10)] = inst_14370__$1);
return statearr_14428;
})();if(cljs.core.truth_(inst_14371))
{var statearr_14429_14514 = state_14422__$1;(statearr_14429_14514[(1)] = (30));
} else
{var statearr_14430_14515 = state_14422__$1;(statearr_14430_14515[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (1)))
{var state_14422__$1 = state_14422;var statearr_14431_14516 = state_14422__$1;(statearr_14431_14516[(2)] = null);
(statearr_14431_14516[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (24)))
{var inst_14323 = (state_14422[(7)]);var inst_14340 = (state_14422[(2)]);var inst_14341 = cljs.core.next.call(null,inst_14323);var inst_14303 = inst_14341;var inst_14304 = null;var inst_14305 = (0);var inst_14306 = (0);var state_14422__$1 = (function (){var statearr_14432 = state_14422;(statearr_14432[(13)] = inst_14303);
(statearr_14432[(14)] = inst_14340);
(statearr_14432[(15)] = inst_14306);
(statearr_14432[(16)] = inst_14305);
(statearr_14432[(17)] = inst_14304);
return statearr_14432;
})();var statearr_14433_14517 = state_14422__$1;(statearr_14433_14517[(2)] = null);
(statearr_14433_14517[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (39)))
{var state_14422__$1 = state_14422;var statearr_14437_14518 = state_14422__$1;(statearr_14437_14518[(2)] = null);
(statearr_14437_14518[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (4)))
{var inst_14294 = (state_14422[(9)]);var inst_14294__$1 = (state_14422[(2)]);var inst_14295 = (inst_14294__$1 == null);var state_14422__$1 = (function (){var statearr_14438 = state_14422;(statearr_14438[(9)] = inst_14294__$1);
return statearr_14438;
})();if(cljs.core.truth_(inst_14295))
{var statearr_14439_14519 = state_14422__$1;(statearr_14439_14519[(1)] = (5));
} else
{var statearr_14440_14520 = state_14422__$1;(statearr_14440_14520[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (15)))
{var inst_14303 = (state_14422[(13)]);var inst_14306 = (state_14422[(15)]);var inst_14305 = (state_14422[(16)]);var inst_14304 = (state_14422[(17)]);var inst_14319 = (state_14422[(2)]);var inst_14320 = (inst_14306 + (1));var tmp14434 = inst_14303;var tmp14435 = inst_14305;var tmp14436 = inst_14304;var inst_14303__$1 = tmp14434;var inst_14304__$1 = tmp14436;var inst_14305__$1 = tmp14435;var inst_14306__$1 = inst_14320;var state_14422__$1 = (function (){var statearr_14441 = state_14422;(statearr_14441[(18)] = inst_14319);
(statearr_14441[(13)] = inst_14303__$1);
(statearr_14441[(15)] = inst_14306__$1);
(statearr_14441[(16)] = inst_14305__$1);
(statearr_14441[(17)] = inst_14304__$1);
return statearr_14441;
})();var statearr_14442_14521 = state_14422__$1;(statearr_14442_14521[(2)] = null);
(statearr_14442_14521[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (21)))
{var inst_14344 = (state_14422[(2)]);var state_14422__$1 = state_14422;var statearr_14446_14522 = state_14422__$1;(statearr_14446_14522[(2)] = inst_14344);
(statearr_14446_14522[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (31)))
{var inst_14370 = (state_14422[(10)]);var inst_14374 = done.call(null,null);var inst_14375 = cljs.core.async.untap_STAR_.call(null,m,inst_14370);var state_14422__$1 = (function (){var statearr_14447 = state_14422;(statearr_14447[(19)] = inst_14374);
return statearr_14447;
})();var statearr_14448_14523 = state_14422__$1;(statearr_14448_14523[(2)] = inst_14375);
(statearr_14448_14523[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (32)))
{var inst_14363 = (state_14422[(11)]);var inst_14364 = (state_14422[(20)]);var inst_14362 = (state_14422[(21)]);var inst_14365 = (state_14422[(12)]);var inst_14377 = (state_14422[(2)]);var inst_14378 = (inst_14365 + (1));var tmp14443 = inst_14363;var tmp14444 = inst_14364;var tmp14445 = inst_14362;var inst_14362__$1 = tmp14445;var inst_14363__$1 = tmp14443;var inst_14364__$1 = tmp14444;var inst_14365__$1 = inst_14378;var state_14422__$1 = (function (){var statearr_14449 = state_14422;(statearr_14449[(22)] = inst_14377);
(statearr_14449[(11)] = inst_14363__$1);
(statearr_14449[(20)] = inst_14364__$1);
(statearr_14449[(21)] = inst_14362__$1);
(statearr_14449[(12)] = inst_14365__$1);
return statearr_14449;
})();var statearr_14450_14524 = state_14422__$1;(statearr_14450_14524[(2)] = null);
(statearr_14450_14524[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (40)))
{var inst_14390 = (state_14422[(23)]);var inst_14394 = done.call(null,null);var inst_14395 = cljs.core.async.untap_STAR_.call(null,m,inst_14390);var state_14422__$1 = (function (){var statearr_14451 = state_14422;(statearr_14451[(24)] = inst_14394);
return statearr_14451;
})();var statearr_14452_14525 = state_14422__$1;(statearr_14452_14525[(2)] = inst_14395);
(statearr_14452_14525[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (33)))
{var inst_14381 = (state_14422[(25)]);var inst_14383 = cljs.core.chunked_seq_QMARK_.call(null,inst_14381);var state_14422__$1 = state_14422;if(inst_14383)
{var statearr_14453_14526 = state_14422__$1;(statearr_14453_14526[(1)] = (36));
} else
{var statearr_14454_14527 = state_14422__$1;(statearr_14454_14527[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (13)))
{var inst_14313 = (state_14422[(26)]);var inst_14316 = cljs.core.async.close_BANG_.call(null,inst_14313);var state_14422__$1 = state_14422;var statearr_14455_14528 = state_14422__$1;(statearr_14455_14528[(2)] = inst_14316);
(statearr_14455_14528[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (22)))
{var inst_14334 = (state_14422[(8)]);var inst_14337 = cljs.core.async.close_BANG_.call(null,inst_14334);var state_14422__$1 = state_14422;var statearr_14456_14529 = state_14422__$1;(statearr_14456_14529[(2)] = inst_14337);
(statearr_14456_14529[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (36)))
{var inst_14381 = (state_14422[(25)]);var inst_14385 = cljs.core.chunk_first.call(null,inst_14381);var inst_14386 = cljs.core.chunk_rest.call(null,inst_14381);var inst_14387 = cljs.core.count.call(null,inst_14385);var inst_14362 = inst_14386;var inst_14363 = inst_14385;var inst_14364 = inst_14387;var inst_14365 = (0);var state_14422__$1 = (function (){var statearr_14457 = state_14422;(statearr_14457[(11)] = inst_14363);
(statearr_14457[(20)] = inst_14364);
(statearr_14457[(21)] = inst_14362);
(statearr_14457[(12)] = inst_14365);
return statearr_14457;
})();var statearr_14458_14530 = state_14422__$1;(statearr_14458_14530[(2)] = null);
(statearr_14458_14530[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (41)))
{var inst_14381 = (state_14422[(25)]);var inst_14397 = (state_14422[(2)]);var inst_14398 = cljs.core.next.call(null,inst_14381);var inst_14362 = inst_14398;var inst_14363 = null;var inst_14364 = (0);var inst_14365 = (0);var state_14422__$1 = (function (){var statearr_14459 = state_14422;(statearr_14459[(11)] = inst_14363);
(statearr_14459[(20)] = inst_14364);
(statearr_14459[(27)] = inst_14397);
(statearr_14459[(21)] = inst_14362);
(statearr_14459[(12)] = inst_14365);
return statearr_14459;
})();var statearr_14460_14531 = state_14422__$1;(statearr_14460_14531[(2)] = null);
(statearr_14460_14531[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (43)))
{var state_14422__$1 = state_14422;var statearr_14461_14532 = state_14422__$1;(statearr_14461_14532[(2)] = null);
(statearr_14461_14532[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (29)))
{var inst_14406 = (state_14422[(2)]);var state_14422__$1 = state_14422;var statearr_14462_14533 = state_14422__$1;(statearr_14462_14533[(2)] = inst_14406);
(statearr_14462_14533[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (44)))
{var inst_14415 = (state_14422[(2)]);var state_14422__$1 = (function (){var statearr_14463 = state_14422;(statearr_14463[(28)] = inst_14415);
return statearr_14463;
})();var statearr_14464_14534 = state_14422__$1;(statearr_14464_14534[(2)] = null);
(statearr_14464_14534[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (6)))
{var inst_14354 = (state_14422[(29)]);var inst_14353 = cljs.core.deref.call(null,cs);var inst_14354__$1 = cljs.core.keys.call(null,inst_14353);var inst_14355 = cljs.core.count.call(null,inst_14354__$1);var inst_14356 = cljs.core.reset_BANG_.call(null,dctr,inst_14355);var inst_14361 = cljs.core.seq.call(null,inst_14354__$1);var inst_14362 = inst_14361;var inst_14363 = null;var inst_14364 = (0);var inst_14365 = (0);var state_14422__$1 = (function (){var statearr_14465 = state_14422;(statearr_14465[(11)] = inst_14363);
(statearr_14465[(30)] = inst_14356);
(statearr_14465[(20)] = inst_14364);
(statearr_14465[(29)] = inst_14354__$1);
(statearr_14465[(21)] = inst_14362);
(statearr_14465[(12)] = inst_14365);
return statearr_14465;
})();var statearr_14466_14535 = state_14422__$1;(statearr_14466_14535[(2)] = null);
(statearr_14466_14535[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (28)))
{var inst_14362 = (state_14422[(21)]);var inst_14381 = (state_14422[(25)]);var inst_14381__$1 = cljs.core.seq.call(null,inst_14362);var state_14422__$1 = (function (){var statearr_14467 = state_14422;(statearr_14467[(25)] = inst_14381__$1);
return statearr_14467;
})();if(inst_14381__$1)
{var statearr_14468_14536 = state_14422__$1;(statearr_14468_14536[(1)] = (33));
} else
{var statearr_14469_14537 = state_14422__$1;(statearr_14469_14537[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (25)))
{var inst_14364 = (state_14422[(20)]);var inst_14365 = (state_14422[(12)]);var inst_14367 = (inst_14365 < inst_14364);var inst_14368 = inst_14367;var state_14422__$1 = state_14422;if(cljs.core.truth_(inst_14368))
{var statearr_14470_14538 = state_14422__$1;(statearr_14470_14538[(1)] = (27));
} else
{var statearr_14471_14539 = state_14422__$1;(statearr_14471_14539[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (34)))
{var state_14422__$1 = state_14422;var statearr_14472_14540 = state_14422__$1;(statearr_14472_14540[(2)] = null);
(statearr_14472_14540[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (17)))
{var state_14422__$1 = state_14422;var statearr_14473_14541 = state_14422__$1;(statearr_14473_14541[(2)] = null);
(statearr_14473_14541[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (3)))
{var inst_14420 = (state_14422[(2)]);var state_14422__$1 = state_14422;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14422__$1,inst_14420);
} else
{if((state_val_14423 === (12)))
{var inst_14349 = (state_14422[(2)]);var state_14422__$1 = state_14422;var statearr_14474_14542 = state_14422__$1;(statearr_14474_14542[(2)] = inst_14349);
(statearr_14474_14542[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (2)))
{var state_14422__$1 = state_14422;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14422__$1,(4),ch);
} else
{if((state_val_14423 === (23)))
{var state_14422__$1 = state_14422;var statearr_14475_14543 = state_14422__$1;(statearr_14475_14543[(2)] = null);
(statearr_14475_14543[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (35)))
{var inst_14404 = (state_14422[(2)]);var state_14422__$1 = state_14422;var statearr_14476_14544 = state_14422__$1;(statearr_14476_14544[(2)] = inst_14404);
(statearr_14476_14544[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (19)))
{var inst_14323 = (state_14422[(7)]);var inst_14327 = cljs.core.chunk_first.call(null,inst_14323);var inst_14328 = cljs.core.chunk_rest.call(null,inst_14323);var inst_14329 = cljs.core.count.call(null,inst_14327);var inst_14303 = inst_14328;var inst_14304 = inst_14327;var inst_14305 = inst_14329;var inst_14306 = (0);var state_14422__$1 = (function (){var statearr_14477 = state_14422;(statearr_14477[(13)] = inst_14303);
(statearr_14477[(15)] = inst_14306);
(statearr_14477[(16)] = inst_14305);
(statearr_14477[(17)] = inst_14304);
return statearr_14477;
})();var statearr_14478_14545 = state_14422__$1;(statearr_14478_14545[(2)] = null);
(statearr_14478_14545[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (11)))
{var inst_14323 = (state_14422[(7)]);var inst_14303 = (state_14422[(13)]);var inst_14323__$1 = cljs.core.seq.call(null,inst_14303);var state_14422__$1 = (function (){var statearr_14479 = state_14422;(statearr_14479[(7)] = inst_14323__$1);
return statearr_14479;
})();if(inst_14323__$1)
{var statearr_14480_14546 = state_14422__$1;(statearr_14480_14546[(1)] = (16));
} else
{var statearr_14481_14547 = state_14422__$1;(statearr_14481_14547[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (9)))
{var inst_14351 = (state_14422[(2)]);var state_14422__$1 = state_14422;var statearr_14482_14548 = state_14422__$1;(statearr_14482_14548[(2)] = inst_14351);
(statearr_14482_14548[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (5)))
{var inst_14301 = cljs.core.deref.call(null,cs);var inst_14302 = cljs.core.seq.call(null,inst_14301);var inst_14303 = inst_14302;var inst_14304 = null;var inst_14305 = (0);var inst_14306 = (0);var state_14422__$1 = (function (){var statearr_14483 = state_14422;(statearr_14483[(13)] = inst_14303);
(statearr_14483[(15)] = inst_14306);
(statearr_14483[(16)] = inst_14305);
(statearr_14483[(17)] = inst_14304);
return statearr_14483;
})();var statearr_14484_14549 = state_14422__$1;(statearr_14484_14549[(2)] = null);
(statearr_14484_14549[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (14)))
{var state_14422__$1 = state_14422;var statearr_14485_14550 = state_14422__$1;(statearr_14485_14550[(2)] = null);
(statearr_14485_14550[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (45)))
{var inst_14412 = (state_14422[(2)]);var state_14422__$1 = state_14422;var statearr_14486_14551 = state_14422__$1;(statearr_14486_14551[(2)] = inst_14412);
(statearr_14486_14551[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (26)))
{var inst_14354 = (state_14422[(29)]);var inst_14408 = (state_14422[(2)]);var inst_14409 = cljs.core.seq.call(null,inst_14354);var state_14422__$1 = (function (){var statearr_14487 = state_14422;(statearr_14487[(31)] = inst_14408);
return statearr_14487;
})();if(inst_14409)
{var statearr_14488_14552 = state_14422__$1;(statearr_14488_14552[(1)] = (42));
} else
{var statearr_14489_14553 = state_14422__$1;(statearr_14489_14553[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (16)))
{var inst_14323 = (state_14422[(7)]);var inst_14325 = cljs.core.chunked_seq_QMARK_.call(null,inst_14323);var state_14422__$1 = state_14422;if(inst_14325)
{var statearr_14490_14554 = state_14422__$1;(statearr_14490_14554[(1)] = (19));
} else
{var statearr_14491_14555 = state_14422__$1;(statearr_14491_14555[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (38)))
{var inst_14401 = (state_14422[(2)]);var state_14422__$1 = state_14422;var statearr_14492_14556 = state_14422__$1;(statearr_14492_14556[(2)] = inst_14401);
(statearr_14492_14556[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (30)))
{var state_14422__$1 = state_14422;var statearr_14493_14557 = state_14422__$1;(statearr_14493_14557[(2)] = null);
(statearr_14493_14557[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (10)))
{var inst_14306 = (state_14422[(15)]);var inst_14304 = (state_14422[(17)]);var inst_14312 = cljs.core._nth.call(null,inst_14304,inst_14306);var inst_14313 = cljs.core.nth.call(null,inst_14312,(0),null);var inst_14314 = cljs.core.nth.call(null,inst_14312,(1),null);var state_14422__$1 = (function (){var statearr_14494 = state_14422;(statearr_14494[(26)] = inst_14313);
return statearr_14494;
})();if(cljs.core.truth_(inst_14314))
{var statearr_14495_14558 = state_14422__$1;(statearr_14495_14558[(1)] = (13));
} else
{var statearr_14496_14559 = state_14422__$1;(statearr_14496_14559[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (18)))
{var inst_14347 = (state_14422[(2)]);var state_14422__$1 = state_14422;var statearr_14497_14560 = state_14422__$1;(statearr_14497_14560[(2)] = inst_14347);
(statearr_14497_14560[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (42)))
{var state_14422__$1 = state_14422;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14422__$1,(45),dchan);
} else
{if((state_val_14423 === (37)))
{var inst_14294 = (state_14422[(9)]);var inst_14390 = (state_14422[(23)]);var inst_14381 = (state_14422[(25)]);var inst_14390__$1 = cljs.core.first.call(null,inst_14381);var inst_14391 = cljs.core.async.put_BANG_.call(null,inst_14390__$1,inst_14294,done);var state_14422__$1 = (function (){var statearr_14498 = state_14422;(statearr_14498[(23)] = inst_14390__$1);
return statearr_14498;
})();if(cljs.core.truth_(inst_14391))
{var statearr_14499_14561 = state_14422__$1;(statearr_14499_14561[(1)] = (39));
} else
{var statearr_14500_14562 = state_14422__$1;(statearr_14500_14562[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14423 === (8)))
{var inst_14306 = (state_14422[(15)]);var inst_14305 = (state_14422[(16)]);var inst_14308 = (inst_14306 < inst_14305);var inst_14309 = inst_14308;var state_14422__$1 = state_14422;if(cljs.core.truth_(inst_14309))
{var statearr_14501_14563 = state_14422__$1;(statearr_14501_14563[(1)] = (10));
} else
{var statearr_14502_14564 = state_14422__$1;(statearr_14502_14564[(1)] = (11));
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
});})(c__6376__auto___14510,cs,m,dchan,dctr,done))
;return ((function (switch__6361__auto__,c__6376__auto___14510,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_14506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14506[(0)] = state_machine__6362__auto__);
(statearr_14506[(1)] = (1));
return statearr_14506;
});
var state_machine__6362__auto____1 = (function (state_14422){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_14422);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e14507){if((e14507 instanceof Object))
{var ex__6365__auto__ = e14507;var statearr_14508_14565 = state_14422;(statearr_14508_14565[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14422);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14507;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14566 = state_14422;
state_14422 = G__14566;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_14422){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_14422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___14510,cs,m,dchan,dctr,done))
})();var state__6378__auto__ = (function (){var statearr_14509 = f__6377__auto__.call(null);(statearr_14509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___14510);
return statearr_14509;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___14510,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj14568 = {};return obj14568;
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
;var m = (function (){if(typeof cljs.core.async.t14688 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14688 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14689){
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
this.meta14689 = meta14689;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14688.cljs$lang$type = true;
cljs.core.async.t14688.cljs$lang$ctorStr = "cljs.core.async/t14688";
cljs.core.async.t14688.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t14688");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14688.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14688.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14688.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14688.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14688.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14688.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14688.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14688.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14688.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14690){var self__ = this;
var _14690__$1 = this;return self__.meta14689;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14690,meta14689__$1){var self__ = this;
var _14690__$1 = this;return (new cljs.core.async.t14688(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14689__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14688 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14688(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14689){return (new cljs.core.async.t14688(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14689));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14688(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6376__auto___14807 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___14807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___14807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14760){var state_val_14761 = (state_14760[(1)]);if((state_val_14761 === (7)))
{var inst_14704 = (state_14760[(7)]);var inst_14709 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14704);var state_14760__$1 = state_14760;var statearr_14762_14808 = state_14760__$1;(statearr_14762_14808[(2)] = inst_14709);
(statearr_14762_14808[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (20)))
{var inst_14719 = (state_14760[(8)]);var state_14760__$1 = state_14760;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14760__$1,(23),out,inst_14719);
} else
{if((state_val_14761 === (1)))
{var inst_14694 = (state_14760[(9)]);var inst_14694__$1 = calc_state.call(null);var inst_14695 = cljs.core.seq_QMARK_.call(null,inst_14694__$1);var state_14760__$1 = (function (){var statearr_14763 = state_14760;(statearr_14763[(9)] = inst_14694__$1);
return statearr_14763;
})();if(inst_14695)
{var statearr_14764_14809 = state_14760__$1;(statearr_14764_14809[(1)] = (2));
} else
{var statearr_14765_14810 = state_14760__$1;(statearr_14765_14810[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (24)))
{var inst_14712 = (state_14760[(10)]);var inst_14704 = inst_14712;var state_14760__$1 = (function (){var statearr_14766 = state_14760;(statearr_14766[(7)] = inst_14704);
return statearr_14766;
})();var statearr_14767_14811 = state_14760__$1;(statearr_14767_14811[(2)] = null);
(statearr_14767_14811[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (4)))
{var inst_14694 = (state_14760[(9)]);var inst_14700 = (state_14760[(2)]);var inst_14701 = cljs.core.get.call(null,inst_14700,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_14702 = cljs.core.get.call(null,inst_14700,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_14703 = cljs.core.get.call(null,inst_14700,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_14704 = inst_14694;var state_14760__$1 = (function (){var statearr_14768 = state_14760;(statearr_14768[(11)] = inst_14703);
(statearr_14768[(12)] = inst_14701);
(statearr_14768[(13)] = inst_14702);
(statearr_14768[(7)] = inst_14704);
return statearr_14768;
})();var statearr_14769_14812 = state_14760__$1;(statearr_14769_14812[(2)] = null);
(statearr_14769_14812[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (15)))
{var state_14760__$1 = state_14760;var statearr_14770_14813 = state_14760__$1;(statearr_14770_14813[(2)] = null);
(statearr_14770_14813[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (21)))
{var inst_14712 = (state_14760[(10)]);var inst_14704 = inst_14712;var state_14760__$1 = (function (){var statearr_14771 = state_14760;(statearr_14771[(7)] = inst_14704);
return statearr_14771;
})();var statearr_14772_14814 = state_14760__$1;(statearr_14772_14814[(2)] = null);
(statearr_14772_14814[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (13)))
{var inst_14756 = (state_14760[(2)]);var state_14760__$1 = state_14760;var statearr_14773_14815 = state_14760__$1;(statearr_14773_14815[(2)] = inst_14756);
(statearr_14773_14815[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (22)))
{var inst_14754 = (state_14760[(2)]);var state_14760__$1 = state_14760;var statearr_14774_14816 = state_14760__$1;(statearr_14774_14816[(2)] = inst_14754);
(statearr_14774_14816[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (6)))
{var inst_14758 = (state_14760[(2)]);var state_14760__$1 = state_14760;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14760__$1,inst_14758);
} else
{if((state_val_14761 === (25)))
{var state_14760__$1 = state_14760;var statearr_14775_14817 = state_14760__$1;(statearr_14775_14817[(2)] = null);
(statearr_14775_14817[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (17)))
{var inst_14734 = (state_14760[(14)]);var state_14760__$1 = state_14760;var statearr_14776_14818 = state_14760__$1;(statearr_14776_14818[(2)] = inst_14734);
(statearr_14776_14818[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (3)))
{var inst_14694 = (state_14760[(9)]);var state_14760__$1 = state_14760;var statearr_14777_14819 = state_14760__$1;(statearr_14777_14819[(2)] = inst_14694);
(statearr_14777_14819[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (12)))
{var inst_14715 = (state_14760[(15)]);var inst_14720 = (state_14760[(16)]);var inst_14734 = (state_14760[(14)]);var inst_14734__$1 = inst_14715.call(null,inst_14720);var state_14760__$1 = (function (){var statearr_14778 = state_14760;(statearr_14778[(14)] = inst_14734__$1);
return statearr_14778;
})();if(cljs.core.truth_(inst_14734__$1))
{var statearr_14779_14820 = state_14760__$1;(statearr_14779_14820[(1)] = (17));
} else
{var statearr_14780_14821 = state_14760__$1;(statearr_14780_14821[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (2)))
{var inst_14694 = (state_14760[(9)]);var inst_14697 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14694);var state_14760__$1 = state_14760;var statearr_14781_14822 = state_14760__$1;(statearr_14781_14822[(2)] = inst_14697);
(statearr_14781_14822[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (23)))
{var inst_14745 = (state_14760[(2)]);var state_14760__$1 = state_14760;if(cljs.core.truth_(inst_14745))
{var statearr_14782_14823 = state_14760__$1;(statearr_14782_14823[(1)] = (24));
} else
{var statearr_14783_14824 = state_14760__$1;(statearr_14783_14824[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (19)))
{var inst_14742 = (state_14760[(2)]);var state_14760__$1 = state_14760;if(cljs.core.truth_(inst_14742))
{var statearr_14784_14825 = state_14760__$1;(statearr_14784_14825[(1)] = (20));
} else
{var statearr_14785_14826 = state_14760__$1;(statearr_14785_14826[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (11)))
{var inst_14719 = (state_14760[(8)]);var inst_14725 = (inst_14719 == null);var state_14760__$1 = state_14760;if(cljs.core.truth_(inst_14725))
{var statearr_14786_14827 = state_14760__$1;(statearr_14786_14827[(1)] = (14));
} else
{var statearr_14787_14828 = state_14760__$1;(statearr_14787_14828[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (9)))
{var inst_14712 = (state_14760[(10)]);var inst_14712__$1 = (state_14760[(2)]);var inst_14713 = cljs.core.get.call(null,inst_14712__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_14714 = cljs.core.get.call(null,inst_14712__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_14715 = cljs.core.get.call(null,inst_14712__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_14760__$1 = (function (){var statearr_14788 = state_14760;(statearr_14788[(15)] = inst_14715);
(statearr_14788[(17)] = inst_14714);
(statearr_14788[(10)] = inst_14712__$1);
return statearr_14788;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14760__$1,(10),inst_14713);
} else
{if((state_val_14761 === (5)))
{var inst_14704 = (state_14760[(7)]);var inst_14707 = cljs.core.seq_QMARK_.call(null,inst_14704);var state_14760__$1 = state_14760;if(inst_14707)
{var statearr_14789_14829 = state_14760__$1;(statearr_14789_14829[(1)] = (7));
} else
{var statearr_14790_14830 = state_14760__$1;(statearr_14790_14830[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (14)))
{var inst_14720 = (state_14760[(16)]);var inst_14727 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14720);var state_14760__$1 = state_14760;var statearr_14791_14831 = state_14760__$1;(statearr_14791_14831[(2)] = inst_14727);
(statearr_14791_14831[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (26)))
{var inst_14750 = (state_14760[(2)]);var state_14760__$1 = state_14760;var statearr_14792_14832 = state_14760__$1;(statearr_14792_14832[(2)] = inst_14750);
(statearr_14792_14832[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (16)))
{var inst_14730 = (state_14760[(2)]);var inst_14731 = calc_state.call(null);var inst_14704 = inst_14731;var state_14760__$1 = (function (){var statearr_14793 = state_14760;(statearr_14793[(18)] = inst_14730);
(statearr_14793[(7)] = inst_14704);
return statearr_14793;
})();var statearr_14794_14833 = state_14760__$1;(statearr_14794_14833[(2)] = null);
(statearr_14794_14833[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (10)))
{var inst_14720 = (state_14760[(16)]);var inst_14719 = (state_14760[(8)]);var inst_14718 = (state_14760[(2)]);var inst_14719__$1 = cljs.core.nth.call(null,inst_14718,(0),null);var inst_14720__$1 = cljs.core.nth.call(null,inst_14718,(1),null);var inst_14721 = (inst_14719__$1 == null);var inst_14722 = cljs.core._EQ_.call(null,inst_14720__$1,change);var inst_14723 = (inst_14721) || (inst_14722);var state_14760__$1 = (function (){var statearr_14795 = state_14760;(statearr_14795[(16)] = inst_14720__$1);
(statearr_14795[(8)] = inst_14719__$1);
return statearr_14795;
})();if(cljs.core.truth_(inst_14723))
{var statearr_14796_14834 = state_14760__$1;(statearr_14796_14834[(1)] = (11));
} else
{var statearr_14797_14835 = state_14760__$1;(statearr_14797_14835[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (18)))
{var inst_14715 = (state_14760[(15)]);var inst_14720 = (state_14760[(16)]);var inst_14714 = (state_14760[(17)]);var inst_14737 = cljs.core.empty_QMARK_.call(null,inst_14715);var inst_14738 = inst_14714.call(null,inst_14720);var inst_14739 = cljs.core.not.call(null,inst_14738);var inst_14740 = (inst_14737) && (inst_14739);var state_14760__$1 = state_14760;var statearr_14798_14836 = state_14760__$1;(statearr_14798_14836[(2)] = inst_14740);
(statearr_14798_14836[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14761 === (8)))
{var inst_14704 = (state_14760[(7)]);var state_14760__$1 = state_14760;var statearr_14799_14837 = state_14760__$1;(statearr_14799_14837[(2)] = inst_14704);
(statearr_14799_14837[(1)] = (9));
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
});})(c__6376__auto___14807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6361__auto__,c__6376__auto___14807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_14803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14803[(0)] = state_machine__6362__auto__);
(statearr_14803[(1)] = (1));
return statearr_14803;
});
var state_machine__6362__auto____1 = (function (state_14760){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_14760);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e14804){if((e14804 instanceof Object))
{var ex__6365__auto__ = e14804;var statearr_14805_14838 = state_14760;(statearr_14805_14838[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14760);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14804;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14839 = state_14760;
state_14760 = G__14839;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_14760){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_14760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___14807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6378__auto__ = (function (){var statearr_14806 = f__6377__auto__.call(null);(statearr_14806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___14807);
return statearr_14806;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___14807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj14841 = {};return obj14841;
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
return (function (p1__14842_SHARP_){if(cljs.core.truth_(p1__14842_SHARP_.call(null,topic)))
{return p1__14842_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14842_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3560__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14965 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14965 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14966){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14966 = meta14966;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14965.cljs$lang$type = true;
cljs.core.async.t14965.cljs$lang$ctorStr = "cljs.core.async/t14965";
cljs.core.async.t14965.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t14965");
});})(mults,ensure_mult))
;
cljs.core.async.t14965.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14965.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14965.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14965.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14965.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14965.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14965.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14965.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14967){var self__ = this;
var _14967__$1 = this;return self__.meta14966;
});})(mults,ensure_mult))
;
cljs.core.async.t14965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14967,meta14966__$1){var self__ = this;
var _14967__$1 = this;return (new cljs.core.async.t14965(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14966__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14965 = ((function (mults,ensure_mult){
return (function __GT_t14965(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14966){return (new cljs.core.async.t14965(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14966));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14965(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6376__auto___15087 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___15087,mults,ensure_mult,p){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___15087,mults,ensure_mult,p){
return (function (state_15039){var state_val_15040 = (state_15039[(1)]);if((state_val_15040 === (7)))
{var inst_15035 = (state_15039[(2)]);var state_15039__$1 = state_15039;var statearr_15041_15088 = state_15039__$1;(statearr_15041_15088[(2)] = inst_15035);
(statearr_15041_15088[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (20)))
{var state_15039__$1 = state_15039;var statearr_15042_15089 = state_15039__$1;(statearr_15042_15089[(2)] = null);
(statearr_15042_15089[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (1)))
{var state_15039__$1 = state_15039;var statearr_15043_15090 = state_15039__$1;(statearr_15043_15090[(2)] = null);
(statearr_15043_15090[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (24)))
{var inst_15018 = (state_15039[(7)]);var inst_15027 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15018);var state_15039__$1 = state_15039;var statearr_15044_15091 = state_15039__$1;(statearr_15044_15091[(2)] = inst_15027);
(statearr_15044_15091[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (4)))
{var inst_14970 = (state_15039[(8)]);var inst_14970__$1 = (state_15039[(2)]);var inst_14971 = (inst_14970__$1 == null);var state_15039__$1 = (function (){var statearr_15045 = state_15039;(statearr_15045[(8)] = inst_14970__$1);
return statearr_15045;
})();if(cljs.core.truth_(inst_14971))
{var statearr_15046_15092 = state_15039__$1;(statearr_15046_15092[(1)] = (5));
} else
{var statearr_15047_15093 = state_15039__$1;(statearr_15047_15093[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (15)))
{var inst_15012 = (state_15039[(2)]);var state_15039__$1 = state_15039;var statearr_15048_15094 = state_15039__$1;(statearr_15048_15094[(2)] = inst_15012);
(statearr_15048_15094[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (21)))
{var inst_15032 = (state_15039[(2)]);var state_15039__$1 = (function (){var statearr_15049 = state_15039;(statearr_15049[(9)] = inst_15032);
return statearr_15049;
})();var statearr_15050_15095 = state_15039__$1;(statearr_15050_15095[(2)] = null);
(statearr_15050_15095[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (13)))
{var inst_14994 = (state_15039[(10)]);var inst_14996 = cljs.core.chunked_seq_QMARK_.call(null,inst_14994);var state_15039__$1 = state_15039;if(inst_14996)
{var statearr_15051_15096 = state_15039__$1;(statearr_15051_15096[(1)] = (16));
} else
{var statearr_15052_15097 = state_15039__$1;(statearr_15052_15097[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (22)))
{var inst_15024 = (state_15039[(2)]);var state_15039__$1 = state_15039;if(cljs.core.truth_(inst_15024))
{var statearr_15053_15098 = state_15039__$1;(statearr_15053_15098[(1)] = (23));
} else
{var statearr_15054_15099 = state_15039__$1;(statearr_15054_15099[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (6)))
{var inst_15020 = (state_15039[(11)]);var inst_14970 = (state_15039[(8)]);var inst_15018 = (state_15039[(7)]);var inst_15018__$1 = topic_fn.call(null,inst_14970);var inst_15019 = cljs.core.deref.call(null,mults);var inst_15020__$1 = cljs.core.get.call(null,inst_15019,inst_15018__$1);var state_15039__$1 = (function (){var statearr_15055 = state_15039;(statearr_15055[(11)] = inst_15020__$1);
(statearr_15055[(7)] = inst_15018__$1);
return statearr_15055;
})();if(cljs.core.truth_(inst_15020__$1))
{var statearr_15056_15100 = state_15039__$1;(statearr_15056_15100[(1)] = (19));
} else
{var statearr_15057_15101 = state_15039__$1;(statearr_15057_15101[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (25)))
{var inst_15029 = (state_15039[(2)]);var state_15039__$1 = state_15039;var statearr_15058_15102 = state_15039__$1;(statearr_15058_15102[(2)] = inst_15029);
(statearr_15058_15102[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (17)))
{var inst_14994 = (state_15039[(10)]);var inst_15003 = cljs.core.first.call(null,inst_14994);var inst_15004 = cljs.core.async.muxch_STAR_.call(null,inst_15003);var inst_15005 = cljs.core.async.close_BANG_.call(null,inst_15004);var inst_15006 = cljs.core.next.call(null,inst_14994);var inst_14980 = inst_15006;var inst_14981 = null;var inst_14982 = (0);var inst_14983 = (0);var state_15039__$1 = (function (){var statearr_15059 = state_15039;(statearr_15059[(12)] = inst_14983);
(statearr_15059[(13)] = inst_14982);
(statearr_15059[(14)] = inst_15005);
(statearr_15059[(15)] = inst_14980);
(statearr_15059[(16)] = inst_14981);
return statearr_15059;
})();var statearr_15060_15103 = state_15039__$1;(statearr_15060_15103[(2)] = null);
(statearr_15060_15103[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (3)))
{var inst_15037 = (state_15039[(2)]);var state_15039__$1 = state_15039;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15039__$1,inst_15037);
} else
{if((state_val_15040 === (12)))
{var inst_15014 = (state_15039[(2)]);var state_15039__$1 = state_15039;var statearr_15061_15104 = state_15039__$1;(statearr_15061_15104[(2)] = inst_15014);
(statearr_15061_15104[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (2)))
{var state_15039__$1 = state_15039;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15039__$1,(4),ch);
} else
{if((state_val_15040 === (23)))
{var state_15039__$1 = state_15039;var statearr_15062_15105 = state_15039__$1;(statearr_15062_15105[(2)] = null);
(statearr_15062_15105[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (19)))
{var inst_15020 = (state_15039[(11)]);var inst_14970 = (state_15039[(8)]);var inst_15022 = cljs.core.async.muxch_STAR_.call(null,inst_15020);var state_15039__$1 = state_15039;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15039__$1,(22),inst_15022,inst_14970);
} else
{if((state_val_15040 === (11)))
{var inst_14994 = (state_15039[(10)]);var inst_14980 = (state_15039[(15)]);var inst_14994__$1 = cljs.core.seq.call(null,inst_14980);var state_15039__$1 = (function (){var statearr_15063 = state_15039;(statearr_15063[(10)] = inst_14994__$1);
return statearr_15063;
})();if(inst_14994__$1)
{var statearr_15064_15106 = state_15039__$1;(statearr_15064_15106[(1)] = (13));
} else
{var statearr_15065_15107 = state_15039__$1;(statearr_15065_15107[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (9)))
{var inst_15016 = (state_15039[(2)]);var state_15039__$1 = state_15039;var statearr_15066_15108 = state_15039__$1;(statearr_15066_15108[(2)] = inst_15016);
(statearr_15066_15108[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (5)))
{var inst_14977 = cljs.core.deref.call(null,mults);var inst_14978 = cljs.core.vals.call(null,inst_14977);var inst_14979 = cljs.core.seq.call(null,inst_14978);var inst_14980 = inst_14979;var inst_14981 = null;var inst_14982 = (0);var inst_14983 = (0);var state_15039__$1 = (function (){var statearr_15067 = state_15039;(statearr_15067[(12)] = inst_14983);
(statearr_15067[(13)] = inst_14982);
(statearr_15067[(15)] = inst_14980);
(statearr_15067[(16)] = inst_14981);
return statearr_15067;
})();var statearr_15068_15109 = state_15039__$1;(statearr_15068_15109[(2)] = null);
(statearr_15068_15109[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (14)))
{var state_15039__$1 = state_15039;var statearr_15072_15110 = state_15039__$1;(statearr_15072_15110[(2)] = null);
(statearr_15072_15110[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (16)))
{var inst_14994 = (state_15039[(10)]);var inst_14998 = cljs.core.chunk_first.call(null,inst_14994);var inst_14999 = cljs.core.chunk_rest.call(null,inst_14994);var inst_15000 = cljs.core.count.call(null,inst_14998);var inst_14980 = inst_14999;var inst_14981 = inst_14998;var inst_14982 = inst_15000;var inst_14983 = (0);var state_15039__$1 = (function (){var statearr_15073 = state_15039;(statearr_15073[(12)] = inst_14983);
(statearr_15073[(13)] = inst_14982);
(statearr_15073[(15)] = inst_14980);
(statearr_15073[(16)] = inst_14981);
return statearr_15073;
})();var statearr_15074_15111 = state_15039__$1;(statearr_15074_15111[(2)] = null);
(statearr_15074_15111[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (10)))
{var inst_14983 = (state_15039[(12)]);var inst_14982 = (state_15039[(13)]);var inst_14980 = (state_15039[(15)]);var inst_14981 = (state_15039[(16)]);var inst_14988 = cljs.core._nth.call(null,inst_14981,inst_14983);var inst_14989 = cljs.core.async.muxch_STAR_.call(null,inst_14988);var inst_14990 = cljs.core.async.close_BANG_.call(null,inst_14989);var inst_14991 = (inst_14983 + (1));var tmp15069 = inst_14982;var tmp15070 = inst_14980;var tmp15071 = inst_14981;var inst_14980__$1 = tmp15070;var inst_14981__$1 = tmp15071;var inst_14982__$1 = tmp15069;var inst_14983__$1 = inst_14991;var state_15039__$1 = (function (){var statearr_15075 = state_15039;(statearr_15075[(12)] = inst_14983__$1);
(statearr_15075[(17)] = inst_14990);
(statearr_15075[(13)] = inst_14982__$1);
(statearr_15075[(15)] = inst_14980__$1);
(statearr_15075[(16)] = inst_14981__$1);
return statearr_15075;
})();var statearr_15076_15112 = state_15039__$1;(statearr_15076_15112[(2)] = null);
(statearr_15076_15112[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (18)))
{var inst_15009 = (state_15039[(2)]);var state_15039__$1 = state_15039;var statearr_15077_15113 = state_15039__$1;(statearr_15077_15113[(2)] = inst_15009);
(statearr_15077_15113[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15040 === (8)))
{var inst_14983 = (state_15039[(12)]);var inst_14982 = (state_15039[(13)]);var inst_14985 = (inst_14983 < inst_14982);var inst_14986 = inst_14985;var state_15039__$1 = state_15039;if(cljs.core.truth_(inst_14986))
{var statearr_15078_15114 = state_15039__$1;(statearr_15078_15114[(1)] = (10));
} else
{var statearr_15079_15115 = state_15039__$1;(statearr_15079_15115[(1)] = (11));
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
});})(c__6376__auto___15087,mults,ensure_mult,p))
;return ((function (switch__6361__auto__,c__6376__auto___15087,mults,ensure_mult,p){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_15083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15083[(0)] = state_machine__6362__auto__);
(statearr_15083[(1)] = (1));
return statearr_15083;
});
var state_machine__6362__auto____1 = (function (state_15039){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_15039);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e15084){if((e15084 instanceof Object))
{var ex__6365__auto__ = e15084;var statearr_15085_15116 = state_15039;(statearr_15085_15116[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15039);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15084;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15117 = state_15039;
state_15039 = G__15117;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_15039){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_15039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___15087,mults,ensure_mult,p))
})();var state__6378__auto__ = (function (){var statearr_15086 = f__6377__auto__.call(null);(statearr_15086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___15087);
return statearr_15086;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___15087,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6376__auto___15254 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___15254,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___15254,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15224){var state_val_15225 = (state_15224[(1)]);if((state_val_15225 === (7)))
{var state_15224__$1 = state_15224;var statearr_15226_15255 = state_15224__$1;(statearr_15226_15255[(2)] = null);
(statearr_15226_15255[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15225 === (1)))
{var state_15224__$1 = state_15224;var statearr_15227_15256 = state_15224__$1;(statearr_15227_15256[(2)] = null);
(statearr_15227_15256[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15225 === (4)))
{var inst_15188 = (state_15224[(7)]);var inst_15190 = (inst_15188 < cnt);var state_15224__$1 = state_15224;if(cljs.core.truth_(inst_15190))
{var statearr_15228_15257 = state_15224__$1;(statearr_15228_15257[(1)] = (6));
} else
{var statearr_15229_15258 = state_15224__$1;(statearr_15229_15258[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15225 === (15)))
{var inst_15220 = (state_15224[(2)]);var state_15224__$1 = state_15224;var statearr_15230_15259 = state_15224__$1;(statearr_15230_15259[(2)] = inst_15220);
(statearr_15230_15259[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15225 === (13)))
{var inst_15213 = cljs.core.async.close_BANG_.call(null,out);var state_15224__$1 = state_15224;var statearr_15231_15260 = state_15224__$1;(statearr_15231_15260[(2)] = inst_15213);
(statearr_15231_15260[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15225 === (6)))
{var state_15224__$1 = state_15224;var statearr_15232_15261 = state_15224__$1;(statearr_15232_15261[(2)] = null);
(statearr_15232_15261[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15225 === (3)))
{var inst_15222 = (state_15224[(2)]);var state_15224__$1 = state_15224;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15224__$1,inst_15222);
} else
{if((state_val_15225 === (12)))
{var inst_15210 = (state_15224[(8)]);var inst_15210__$1 = (state_15224[(2)]);var inst_15211 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15210__$1);var state_15224__$1 = (function (){var statearr_15233 = state_15224;(statearr_15233[(8)] = inst_15210__$1);
return statearr_15233;
})();if(cljs.core.truth_(inst_15211))
{var statearr_15234_15262 = state_15224__$1;(statearr_15234_15262[(1)] = (13));
} else
{var statearr_15235_15263 = state_15224__$1;(statearr_15235_15263[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15225 === (2)))
{var inst_15187 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15188 = (0);var state_15224__$1 = (function (){var statearr_15236 = state_15224;(statearr_15236[(7)] = inst_15188);
(statearr_15236[(9)] = inst_15187);
return statearr_15236;
})();var statearr_15237_15264 = state_15224__$1;(statearr_15237_15264[(2)] = null);
(statearr_15237_15264[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15225 === (11)))
{var inst_15188 = (state_15224[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15224,(10),Object,null,(9));var inst_15197 = chs__$1.call(null,inst_15188);var inst_15198 = done.call(null,inst_15188);var inst_15199 = cljs.core.async.take_BANG_.call(null,inst_15197,inst_15198);var state_15224__$1 = state_15224;var statearr_15238_15265 = state_15224__$1;(statearr_15238_15265[(2)] = inst_15199);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15224__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15225 === (9)))
{var inst_15188 = (state_15224[(7)]);var inst_15201 = (state_15224[(2)]);var inst_15202 = (inst_15188 + (1));var inst_15188__$1 = inst_15202;var state_15224__$1 = (function (){var statearr_15239 = state_15224;(statearr_15239[(7)] = inst_15188__$1);
(statearr_15239[(10)] = inst_15201);
return statearr_15239;
})();var statearr_15240_15266 = state_15224__$1;(statearr_15240_15266[(2)] = null);
(statearr_15240_15266[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15225 === (5)))
{var inst_15208 = (state_15224[(2)]);var state_15224__$1 = (function (){var statearr_15241 = state_15224;(statearr_15241[(11)] = inst_15208);
return statearr_15241;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15224__$1,(12),dchan);
} else
{if((state_val_15225 === (14)))
{var inst_15210 = (state_15224[(8)]);var inst_15215 = cljs.core.apply.call(null,f,inst_15210);var state_15224__$1 = state_15224;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15224__$1,(16),out,inst_15215);
} else
{if((state_val_15225 === (16)))
{var inst_15217 = (state_15224[(2)]);var state_15224__$1 = (function (){var statearr_15242 = state_15224;(statearr_15242[(12)] = inst_15217);
return statearr_15242;
})();var statearr_15243_15267 = state_15224__$1;(statearr_15243_15267[(2)] = null);
(statearr_15243_15267[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15225 === (10)))
{var inst_15192 = (state_15224[(2)]);var inst_15193 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15224__$1 = (function (){var statearr_15244 = state_15224;(statearr_15244[(13)] = inst_15192);
return statearr_15244;
})();var statearr_15245_15268 = state_15224__$1;(statearr_15245_15268[(2)] = inst_15193);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15224__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15225 === (8)))
{var inst_15206 = (state_15224[(2)]);var state_15224__$1 = state_15224;var statearr_15246_15269 = state_15224__$1;(statearr_15246_15269[(2)] = inst_15206);
(statearr_15246_15269[(1)] = (5));
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
});})(c__6376__auto___15254,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6361__auto__,c__6376__auto___15254,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_15250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15250[(0)] = state_machine__6362__auto__);
(statearr_15250[(1)] = (1));
return statearr_15250;
});
var state_machine__6362__auto____1 = (function (state_15224){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_15224);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e15251){if((e15251 instanceof Object))
{var ex__6365__auto__ = e15251;var statearr_15252_15270 = state_15224;(statearr_15252_15270[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15224);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15251;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15271 = state_15224;
state_15224 = G__15271;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_15224){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_15224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___15254,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6378__auto__ = (function (){var statearr_15253 = f__6377__auto__.call(null);(statearr_15253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___15254);
return statearr_15253;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___15254,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___15379 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___15379,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___15379,out){
return (function (state_15355){var state_val_15356 = (state_15355[(1)]);if((state_val_15356 === (7)))
{var inst_15335 = (state_15355[(7)]);var inst_15334 = (state_15355[(8)]);var inst_15334__$1 = (state_15355[(2)]);var inst_15335__$1 = cljs.core.nth.call(null,inst_15334__$1,(0),null);var inst_15336 = cljs.core.nth.call(null,inst_15334__$1,(1),null);var inst_15337 = (inst_15335__$1 == null);var state_15355__$1 = (function (){var statearr_15357 = state_15355;(statearr_15357[(7)] = inst_15335__$1);
(statearr_15357[(9)] = inst_15336);
(statearr_15357[(8)] = inst_15334__$1);
return statearr_15357;
})();if(cljs.core.truth_(inst_15337))
{var statearr_15358_15380 = state_15355__$1;(statearr_15358_15380[(1)] = (8));
} else
{var statearr_15359_15381 = state_15355__$1;(statearr_15359_15381[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15356 === (1)))
{var inst_15326 = cljs.core.vec.call(null,chs);var inst_15327 = inst_15326;var state_15355__$1 = (function (){var statearr_15360 = state_15355;(statearr_15360[(10)] = inst_15327);
return statearr_15360;
})();var statearr_15361_15382 = state_15355__$1;(statearr_15361_15382[(2)] = null);
(statearr_15361_15382[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15356 === (4)))
{var inst_15327 = (state_15355[(10)]);var state_15355__$1 = state_15355;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15355__$1,(7),inst_15327);
} else
{if((state_val_15356 === (6)))
{var inst_15351 = (state_15355[(2)]);var state_15355__$1 = state_15355;var statearr_15362_15383 = state_15355__$1;(statearr_15362_15383[(2)] = inst_15351);
(statearr_15362_15383[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15356 === (3)))
{var inst_15353 = (state_15355[(2)]);var state_15355__$1 = state_15355;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15355__$1,inst_15353);
} else
{if((state_val_15356 === (2)))
{var inst_15327 = (state_15355[(10)]);var inst_15329 = cljs.core.count.call(null,inst_15327);var inst_15330 = (inst_15329 > (0));var state_15355__$1 = state_15355;if(cljs.core.truth_(inst_15330))
{var statearr_15364_15384 = state_15355__$1;(statearr_15364_15384[(1)] = (4));
} else
{var statearr_15365_15385 = state_15355__$1;(statearr_15365_15385[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15356 === (11)))
{var inst_15327 = (state_15355[(10)]);var inst_15344 = (state_15355[(2)]);var tmp15363 = inst_15327;var inst_15327__$1 = tmp15363;var state_15355__$1 = (function (){var statearr_15366 = state_15355;(statearr_15366[(10)] = inst_15327__$1);
(statearr_15366[(11)] = inst_15344);
return statearr_15366;
})();var statearr_15367_15386 = state_15355__$1;(statearr_15367_15386[(2)] = null);
(statearr_15367_15386[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15356 === (9)))
{var inst_15335 = (state_15355[(7)]);var state_15355__$1 = state_15355;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15355__$1,(11),out,inst_15335);
} else
{if((state_val_15356 === (5)))
{var inst_15349 = cljs.core.async.close_BANG_.call(null,out);var state_15355__$1 = state_15355;var statearr_15368_15387 = state_15355__$1;(statearr_15368_15387[(2)] = inst_15349);
(statearr_15368_15387[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15356 === (10)))
{var inst_15347 = (state_15355[(2)]);var state_15355__$1 = state_15355;var statearr_15369_15388 = state_15355__$1;(statearr_15369_15388[(2)] = inst_15347);
(statearr_15369_15388[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15356 === (8)))
{var inst_15335 = (state_15355[(7)]);var inst_15336 = (state_15355[(9)]);var inst_15334 = (state_15355[(8)]);var inst_15327 = (state_15355[(10)]);var inst_15339 = (function (){var c = inst_15336;var v = inst_15335;var vec__15332 = inst_15334;var cs = inst_15327;return ((function (c,v,vec__15332,cs,inst_15335,inst_15336,inst_15334,inst_15327,state_val_15356,c__6376__auto___15379,out){
return (function (p1__15272_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15272_SHARP_);
});
;})(c,v,vec__15332,cs,inst_15335,inst_15336,inst_15334,inst_15327,state_val_15356,c__6376__auto___15379,out))
})();var inst_15340 = cljs.core.filterv.call(null,inst_15339,inst_15327);var inst_15327__$1 = inst_15340;var state_15355__$1 = (function (){var statearr_15370 = state_15355;(statearr_15370[(10)] = inst_15327__$1);
return statearr_15370;
})();var statearr_15371_15389 = state_15355__$1;(statearr_15371_15389[(2)] = null);
(statearr_15371_15389[(1)] = (2));
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
});})(c__6376__auto___15379,out))
;return ((function (switch__6361__auto__,c__6376__auto___15379,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_15375 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15375[(0)] = state_machine__6362__auto__);
(statearr_15375[(1)] = (1));
return statearr_15375;
});
var state_machine__6362__auto____1 = (function (state_15355){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_15355);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e15376){if((e15376 instanceof Object))
{var ex__6365__auto__ = e15376;var statearr_15377_15390 = state_15355;(statearr_15377_15390[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15355);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15376;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15391 = state_15355;
state_15355 = G__15391;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_15355){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_15355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___15379,out))
})();var state__6378__auto__ = (function (){var statearr_15378 = f__6377__auto__.call(null);(statearr_15378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___15379);
return statearr_15378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___15379,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___15484 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___15484,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___15484,out){
return (function (state_15461){var state_val_15462 = (state_15461[(1)]);if((state_val_15462 === (7)))
{var inst_15443 = (state_15461[(7)]);var inst_15443__$1 = (state_15461[(2)]);var inst_15444 = (inst_15443__$1 == null);var inst_15445 = cljs.core.not.call(null,inst_15444);var state_15461__$1 = (function (){var statearr_15463 = state_15461;(statearr_15463[(7)] = inst_15443__$1);
return statearr_15463;
})();if(inst_15445)
{var statearr_15464_15485 = state_15461__$1;(statearr_15464_15485[(1)] = (8));
} else
{var statearr_15465_15486 = state_15461__$1;(statearr_15465_15486[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15462 === (1)))
{var inst_15438 = (0);var state_15461__$1 = (function (){var statearr_15466 = state_15461;(statearr_15466[(8)] = inst_15438);
return statearr_15466;
})();var statearr_15467_15487 = state_15461__$1;(statearr_15467_15487[(2)] = null);
(statearr_15467_15487[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15462 === (4)))
{var state_15461__$1 = state_15461;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15461__$1,(7),ch);
} else
{if((state_val_15462 === (6)))
{var inst_15456 = (state_15461[(2)]);var state_15461__$1 = state_15461;var statearr_15468_15488 = state_15461__$1;(statearr_15468_15488[(2)] = inst_15456);
(statearr_15468_15488[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15462 === (3)))
{var inst_15458 = (state_15461[(2)]);var inst_15459 = cljs.core.async.close_BANG_.call(null,out);var state_15461__$1 = (function (){var statearr_15469 = state_15461;(statearr_15469[(9)] = inst_15458);
return statearr_15469;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15461__$1,inst_15459);
} else
{if((state_val_15462 === (2)))
{var inst_15438 = (state_15461[(8)]);var inst_15440 = (inst_15438 < n);var state_15461__$1 = state_15461;if(cljs.core.truth_(inst_15440))
{var statearr_15470_15489 = state_15461__$1;(statearr_15470_15489[(1)] = (4));
} else
{var statearr_15471_15490 = state_15461__$1;(statearr_15471_15490[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15462 === (11)))
{var inst_15438 = (state_15461[(8)]);var inst_15448 = (state_15461[(2)]);var inst_15449 = (inst_15438 + (1));var inst_15438__$1 = inst_15449;var state_15461__$1 = (function (){var statearr_15472 = state_15461;(statearr_15472[(8)] = inst_15438__$1);
(statearr_15472[(10)] = inst_15448);
return statearr_15472;
})();var statearr_15473_15491 = state_15461__$1;(statearr_15473_15491[(2)] = null);
(statearr_15473_15491[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15462 === (9)))
{var state_15461__$1 = state_15461;var statearr_15474_15492 = state_15461__$1;(statearr_15474_15492[(2)] = null);
(statearr_15474_15492[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15462 === (5)))
{var state_15461__$1 = state_15461;var statearr_15475_15493 = state_15461__$1;(statearr_15475_15493[(2)] = null);
(statearr_15475_15493[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15462 === (10)))
{var inst_15453 = (state_15461[(2)]);var state_15461__$1 = state_15461;var statearr_15476_15494 = state_15461__$1;(statearr_15476_15494[(2)] = inst_15453);
(statearr_15476_15494[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15462 === (8)))
{var inst_15443 = (state_15461[(7)]);var state_15461__$1 = state_15461;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15461__$1,(11),out,inst_15443);
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
});})(c__6376__auto___15484,out))
;return ((function (switch__6361__auto__,c__6376__auto___15484,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_15480 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15480[(0)] = state_machine__6362__auto__);
(statearr_15480[(1)] = (1));
return statearr_15480;
});
var state_machine__6362__auto____1 = (function (state_15461){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_15461);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e15481){if((e15481 instanceof Object))
{var ex__6365__auto__ = e15481;var statearr_15482_15495 = state_15461;(statearr_15482_15495[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15461);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15481;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15496 = state_15461;
state_15461 = G__15496;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_15461){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_15461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___15484,out))
})();var state__6378__auto__ = (function (){var statearr_15483 = f__6377__auto__.call(null);(statearr_15483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___15484);
return statearr_15483;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___15484,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15504 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15504 = (function (ch,f,map_LT_,meta15505){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15505 = meta15505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15504.cljs$lang$type = true;
cljs.core.async.t15504.cljs$lang$ctorStr = "cljs.core.async/t15504";
cljs.core.async.t15504.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t15504");
});
cljs.core.async.t15504.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15504.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t15504.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15504.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15507 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15507 = (function (fn1,_,meta15505,ch,f,map_LT_,meta15508){
this.fn1 = fn1;
this._ = _;
this.meta15505 = meta15505;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15508 = meta15508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15507.cljs$lang$type = true;
cljs.core.async.t15507.cljs$lang$ctorStr = "cljs.core.async/t15507";
cljs.core.async.t15507.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t15507");
});})(___$1))
;
cljs.core.async.t15507.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15507.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15507.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15507.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15497_SHARP_){return f1.call(null,(((p1__15497_SHARP_ == null))?null:self__.f.call(null,p1__15497_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15509){var self__ = this;
var _15509__$1 = this;return self__.meta15508;
});})(___$1))
;
cljs.core.async.t15507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15509,meta15508__$1){var self__ = this;
var _15509__$1 = this;return (new cljs.core.async.t15507(self__.fn1,self__._,self__.meta15505,self__.ch,self__.f,self__.map_LT_,meta15508__$1));
});})(___$1))
;
cljs.core.async.__GT_t15507 = ((function (___$1){
return (function __GT_t15507(fn1__$1,___$2,meta15505__$1,ch__$2,f__$2,map_LT___$2,meta15508){return (new cljs.core.async.t15507(fn1__$1,___$2,meta15505__$1,ch__$2,f__$2,map_LT___$2,meta15508));
});})(___$1))
;
}
return (new cljs.core.async.t15507(fn1,___$1,self__.meta15505,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t15504.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15504.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15504.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t15504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15506){var self__ = this;
var _15506__$1 = this;return self__.meta15505;
});
cljs.core.async.t15504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15506,meta15505__$1){var self__ = this;
var _15506__$1 = this;return (new cljs.core.async.t15504(self__.ch,self__.f,self__.map_LT_,meta15505__$1));
});
cljs.core.async.__GT_t15504 = (function __GT_t15504(ch__$1,f__$1,map_LT___$1,meta15505){return (new cljs.core.async.t15504(ch__$1,f__$1,map_LT___$1,meta15505));
});
}
return (new cljs.core.async.t15504(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15513 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15513 = (function (ch,f,map_GT_,meta15514){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15514 = meta15514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15513.cljs$lang$type = true;
cljs.core.async.t15513.cljs$lang$ctorStr = "cljs.core.async/t15513";
cljs.core.async.t15513.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t15513");
});
cljs.core.async.t15513.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15513.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t15513.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15513.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15513.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15513.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15515){var self__ = this;
var _15515__$1 = this;return self__.meta15514;
});
cljs.core.async.t15513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15515,meta15514__$1){var self__ = this;
var _15515__$1 = this;return (new cljs.core.async.t15513(self__.ch,self__.f,self__.map_GT_,meta15514__$1));
});
cljs.core.async.__GT_t15513 = (function __GT_t15513(ch__$1,f__$1,map_GT___$1,meta15514){return (new cljs.core.async.t15513(ch__$1,f__$1,map_GT___$1,meta15514));
});
}
return (new cljs.core.async.t15513(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15519 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15519 = (function (ch,p,filter_GT_,meta15520){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15520 = meta15520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15519.cljs$lang$type = true;
cljs.core.async.t15519.cljs$lang$ctorStr = "cljs.core.async/t15519";
cljs.core.async.t15519.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t15519");
});
cljs.core.async.t15519.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15519.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t15519.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15519.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15519.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15519.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15519.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t15519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15521){var self__ = this;
var _15521__$1 = this;return self__.meta15520;
});
cljs.core.async.t15519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15521,meta15520__$1){var self__ = this;
var _15521__$1 = this;return (new cljs.core.async.t15519(self__.ch,self__.p,self__.filter_GT_,meta15520__$1));
});
cljs.core.async.__GT_t15519 = (function __GT_t15519(ch__$1,p__$1,filter_GT___$1,meta15520){return (new cljs.core.async.t15519(ch__$1,p__$1,filter_GT___$1,meta15520));
});
}
return (new cljs.core.async.t15519(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___15604 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___15604,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___15604,out){
return (function (state_15583){var state_val_15584 = (state_15583[(1)]);if((state_val_15584 === (7)))
{var inst_15579 = (state_15583[(2)]);var state_15583__$1 = state_15583;var statearr_15585_15605 = state_15583__$1;(statearr_15585_15605[(2)] = inst_15579);
(statearr_15585_15605[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15584 === (1)))
{var state_15583__$1 = state_15583;var statearr_15586_15606 = state_15583__$1;(statearr_15586_15606[(2)] = null);
(statearr_15586_15606[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15584 === (4)))
{var inst_15565 = (state_15583[(7)]);var inst_15565__$1 = (state_15583[(2)]);var inst_15566 = (inst_15565__$1 == null);var state_15583__$1 = (function (){var statearr_15587 = state_15583;(statearr_15587[(7)] = inst_15565__$1);
return statearr_15587;
})();if(cljs.core.truth_(inst_15566))
{var statearr_15588_15607 = state_15583__$1;(statearr_15588_15607[(1)] = (5));
} else
{var statearr_15589_15608 = state_15583__$1;(statearr_15589_15608[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15584 === (6)))
{var inst_15565 = (state_15583[(7)]);var inst_15570 = p.call(null,inst_15565);var state_15583__$1 = state_15583;if(cljs.core.truth_(inst_15570))
{var statearr_15590_15609 = state_15583__$1;(statearr_15590_15609[(1)] = (8));
} else
{var statearr_15591_15610 = state_15583__$1;(statearr_15591_15610[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15584 === (3)))
{var inst_15581 = (state_15583[(2)]);var state_15583__$1 = state_15583;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15583__$1,inst_15581);
} else
{if((state_val_15584 === (2)))
{var state_15583__$1 = state_15583;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15583__$1,(4),ch);
} else
{if((state_val_15584 === (11)))
{var inst_15573 = (state_15583[(2)]);var state_15583__$1 = state_15583;var statearr_15592_15611 = state_15583__$1;(statearr_15592_15611[(2)] = inst_15573);
(statearr_15592_15611[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15584 === (9)))
{var state_15583__$1 = state_15583;var statearr_15593_15612 = state_15583__$1;(statearr_15593_15612[(2)] = null);
(statearr_15593_15612[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15584 === (5)))
{var inst_15568 = cljs.core.async.close_BANG_.call(null,out);var state_15583__$1 = state_15583;var statearr_15594_15613 = state_15583__$1;(statearr_15594_15613[(2)] = inst_15568);
(statearr_15594_15613[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15584 === (10)))
{var inst_15576 = (state_15583[(2)]);var state_15583__$1 = (function (){var statearr_15595 = state_15583;(statearr_15595[(8)] = inst_15576);
return statearr_15595;
})();var statearr_15596_15614 = state_15583__$1;(statearr_15596_15614[(2)] = null);
(statearr_15596_15614[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15584 === (8)))
{var inst_15565 = (state_15583[(7)]);var state_15583__$1 = state_15583;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15583__$1,(11),out,inst_15565);
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
});})(c__6376__auto___15604,out))
;return ((function (switch__6361__auto__,c__6376__auto___15604,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_15600 = [null,null,null,null,null,null,null,null,null];(statearr_15600[(0)] = state_machine__6362__auto__);
(statearr_15600[(1)] = (1));
return statearr_15600;
});
var state_machine__6362__auto____1 = (function (state_15583){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_15583);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e15601){if((e15601 instanceof Object))
{var ex__6365__auto__ = e15601;var statearr_15602_15615 = state_15583;(statearr_15602_15615[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15583);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15601;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15616 = state_15583;
state_15583 = G__15616;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_15583){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_15583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___15604,out))
})();var state__6378__auto__ = (function (){var statearr_15603 = f__6377__auto__.call(null);(statearr_15603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___15604);
return statearr_15603;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___15604,out))
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
return (function (state_15782){var state_val_15783 = (state_15782[(1)]);if((state_val_15783 === (7)))
{var inst_15778 = (state_15782[(2)]);var state_15782__$1 = state_15782;var statearr_15784_15825 = state_15782__$1;(statearr_15784_15825[(2)] = inst_15778);
(statearr_15784_15825[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15783 === (20)))
{var inst_15748 = (state_15782[(7)]);var inst_15759 = (state_15782[(2)]);var inst_15760 = cljs.core.next.call(null,inst_15748);var inst_15734 = inst_15760;var inst_15735 = null;var inst_15736 = (0);var inst_15737 = (0);var state_15782__$1 = (function (){var statearr_15785 = state_15782;(statearr_15785[(8)] = inst_15759);
(statearr_15785[(9)] = inst_15734);
(statearr_15785[(10)] = inst_15736);
(statearr_15785[(11)] = inst_15735);
(statearr_15785[(12)] = inst_15737);
return statearr_15785;
})();var statearr_15786_15826 = state_15782__$1;(statearr_15786_15826[(2)] = null);
(statearr_15786_15826[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15783 === (1)))
{var state_15782__$1 = state_15782;var statearr_15787_15827 = state_15782__$1;(statearr_15787_15827[(2)] = null);
(statearr_15787_15827[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15783 === (4)))
{var inst_15723 = (state_15782[(13)]);var inst_15723__$1 = (state_15782[(2)]);var inst_15724 = (inst_15723__$1 == null);var state_15782__$1 = (function (){var statearr_15788 = state_15782;(statearr_15788[(13)] = inst_15723__$1);
return statearr_15788;
})();if(cljs.core.truth_(inst_15724))
{var statearr_15789_15828 = state_15782__$1;(statearr_15789_15828[(1)] = (5));
} else
{var statearr_15790_15829 = state_15782__$1;(statearr_15790_15829[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15783 === (15)))
{var state_15782__$1 = state_15782;var statearr_15794_15830 = state_15782__$1;(statearr_15794_15830[(2)] = null);
(statearr_15794_15830[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15783 === (21)))
{var state_15782__$1 = state_15782;var statearr_15795_15831 = state_15782__$1;(statearr_15795_15831[(2)] = null);
(statearr_15795_15831[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15783 === (13)))
{var inst_15734 = (state_15782[(9)]);var inst_15736 = (state_15782[(10)]);var inst_15735 = (state_15782[(11)]);var inst_15737 = (state_15782[(12)]);var inst_15744 = (state_15782[(2)]);var inst_15745 = (inst_15737 + (1));var tmp15791 = inst_15734;var tmp15792 = inst_15736;var tmp15793 = inst_15735;var inst_15734__$1 = tmp15791;var inst_15735__$1 = tmp15793;var inst_15736__$1 = tmp15792;var inst_15737__$1 = inst_15745;var state_15782__$1 = (function (){var statearr_15796 = state_15782;(statearr_15796[(9)] = inst_15734__$1);
(statearr_15796[(10)] = inst_15736__$1);
(statearr_15796[(11)] = inst_15735__$1);
(statearr_15796[(12)] = inst_15737__$1);
(statearr_15796[(14)] = inst_15744);
return statearr_15796;
})();var statearr_15797_15832 = state_15782__$1;(statearr_15797_15832[(2)] = null);
(statearr_15797_15832[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15783 === (22)))
{var state_15782__$1 = state_15782;var statearr_15798_15833 = state_15782__$1;(statearr_15798_15833[(2)] = null);
(statearr_15798_15833[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15783 === (6)))
{var inst_15723 = (state_15782[(13)]);var inst_15732 = f.call(null,inst_15723);var inst_15733 = cljs.core.seq.call(null,inst_15732);var inst_15734 = inst_15733;var inst_15735 = null;var inst_15736 = (0);var inst_15737 = (0);var state_15782__$1 = (function (){var statearr_15799 = state_15782;(statearr_15799[(9)] = inst_15734);
(statearr_15799[(10)] = inst_15736);
(statearr_15799[(11)] = inst_15735);
(statearr_15799[(12)] = inst_15737);
return statearr_15799;
})();var statearr_15800_15834 = state_15782__$1;(statearr_15800_15834[(2)] = null);
(statearr_15800_15834[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15783 === (17)))
{var inst_15748 = (state_15782[(7)]);var inst_15752 = cljs.core.chunk_first.call(null,inst_15748);var inst_15753 = cljs.core.chunk_rest.call(null,inst_15748);var inst_15754 = cljs.core.count.call(null,inst_15752);var inst_15734 = inst_15753;var inst_15735 = inst_15752;var inst_15736 = inst_15754;var inst_15737 = (0);var state_15782__$1 = (function (){var statearr_15801 = state_15782;(statearr_15801[(9)] = inst_15734);
(statearr_15801[(10)] = inst_15736);
(statearr_15801[(11)] = inst_15735);
(statearr_15801[(12)] = inst_15737);
return statearr_15801;
})();var statearr_15802_15835 = state_15782__$1;(statearr_15802_15835[(2)] = null);
(statearr_15802_15835[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15783 === (3)))
{var inst_15780 = (state_15782[(2)]);var state_15782__$1 = state_15782;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15782__$1,inst_15780);
} else
{if((state_val_15783 === (12)))
{var inst_15768 = (state_15782[(2)]);var state_15782__$1 = state_15782;var statearr_15803_15836 = state_15782__$1;(statearr_15803_15836[(2)] = inst_15768);
(statearr_15803_15836[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15783 === (2)))
{var state_15782__$1 = state_15782;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15782__$1,(4),in$);
} else
{if((state_val_15783 === (23)))
{var inst_15776 = (state_15782[(2)]);var state_15782__$1 = state_15782;var statearr_15804_15837 = state_15782__$1;(statearr_15804_15837[(2)] = inst_15776);
(statearr_15804_15837[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15783 === (19)))
{var inst_15763 = (state_15782[(2)]);var state_15782__$1 = state_15782;var statearr_15805_15838 = state_15782__$1;(statearr_15805_15838[(2)] = inst_15763);
(statearr_15805_15838[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15783 === (11)))
{var inst_15748 = (state_15782[(7)]);var inst_15734 = (state_15782[(9)]);var inst_15748__$1 = cljs.core.seq.call(null,inst_15734);var state_15782__$1 = (function (){var statearr_15806 = state_15782;(statearr_15806[(7)] = inst_15748__$1);
return statearr_15806;
})();if(inst_15748__$1)
{var statearr_15807_15839 = state_15782__$1;(statearr_15807_15839[(1)] = (14));
} else
{var statearr_15808_15840 = state_15782__$1;(statearr_15808_15840[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15783 === (9)))
{var inst_15770 = (state_15782[(2)]);var inst_15771 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_15782__$1 = (function (){var statearr_15809 = state_15782;(statearr_15809[(15)] = inst_15770);
return statearr_15809;
})();if(cljs.core.truth_(inst_15771))
{var statearr_15810_15841 = state_15782__$1;(statearr_15810_15841[(1)] = (21));
} else
{var statearr_15811_15842 = state_15782__$1;(statearr_15811_15842[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15783 === (5)))
{var inst_15726 = cljs.core.async.close_BANG_.call(null,out);var state_15782__$1 = state_15782;var statearr_15812_15843 = state_15782__$1;(statearr_15812_15843[(2)] = inst_15726);
(statearr_15812_15843[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15783 === (14)))
{var inst_15748 = (state_15782[(7)]);var inst_15750 = cljs.core.chunked_seq_QMARK_.call(null,inst_15748);var state_15782__$1 = state_15782;if(inst_15750)
{var statearr_15813_15844 = state_15782__$1;(statearr_15813_15844[(1)] = (17));
} else
{var statearr_15814_15845 = state_15782__$1;(statearr_15814_15845[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15783 === (16)))
{var inst_15766 = (state_15782[(2)]);var state_15782__$1 = state_15782;var statearr_15815_15846 = state_15782__$1;(statearr_15815_15846[(2)] = inst_15766);
(statearr_15815_15846[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15783 === (10)))
{var inst_15735 = (state_15782[(11)]);var inst_15737 = (state_15782[(12)]);var inst_15742 = cljs.core._nth.call(null,inst_15735,inst_15737);var state_15782__$1 = state_15782;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15782__$1,(13),out,inst_15742);
} else
{if((state_val_15783 === (18)))
{var inst_15748 = (state_15782[(7)]);var inst_15757 = cljs.core.first.call(null,inst_15748);var state_15782__$1 = state_15782;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15782__$1,(20),out,inst_15757);
} else
{if((state_val_15783 === (8)))
{var inst_15736 = (state_15782[(10)]);var inst_15737 = (state_15782[(12)]);var inst_15739 = (inst_15737 < inst_15736);var inst_15740 = inst_15739;var state_15782__$1 = state_15782;if(cljs.core.truth_(inst_15740))
{var statearr_15816_15847 = state_15782__$1;(statearr_15816_15847[(1)] = (10));
} else
{var statearr_15817_15848 = state_15782__$1;(statearr_15817_15848[(1)] = (11));
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
var state_machine__6362__auto____0 = (function (){var statearr_15821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15821[(0)] = state_machine__6362__auto__);
(statearr_15821[(1)] = (1));
return statearr_15821;
});
var state_machine__6362__auto____1 = (function (state_15782){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_15782);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e15822){if((e15822 instanceof Object))
{var ex__6365__auto__ = e15822;var statearr_15823_15849 = state_15782;(statearr_15823_15849[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15782);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15822;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15850 = state_15782;
state_15782 = G__15850;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_15782){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_15782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto__))
})();var state__6378__auto__ = (function (){var statearr_15824 = f__6377__auto__.call(null);(statearr_15824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto__);
return statearr_15824;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___15947 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___15947,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___15947,out){
return (function (state_15922){var state_val_15923 = (state_15922[(1)]);if((state_val_15923 === (7)))
{var inst_15917 = (state_15922[(2)]);var state_15922__$1 = state_15922;var statearr_15924_15948 = state_15922__$1;(statearr_15924_15948[(2)] = inst_15917);
(statearr_15924_15948[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15923 === (1)))
{var inst_15899 = null;var state_15922__$1 = (function (){var statearr_15925 = state_15922;(statearr_15925[(7)] = inst_15899);
return statearr_15925;
})();var statearr_15926_15949 = state_15922__$1;(statearr_15926_15949[(2)] = null);
(statearr_15926_15949[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15923 === (4)))
{var inst_15902 = (state_15922[(8)]);var inst_15902__$1 = (state_15922[(2)]);var inst_15903 = (inst_15902__$1 == null);var inst_15904 = cljs.core.not.call(null,inst_15903);var state_15922__$1 = (function (){var statearr_15927 = state_15922;(statearr_15927[(8)] = inst_15902__$1);
return statearr_15927;
})();if(inst_15904)
{var statearr_15928_15950 = state_15922__$1;(statearr_15928_15950[(1)] = (5));
} else
{var statearr_15929_15951 = state_15922__$1;(statearr_15929_15951[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15923 === (6)))
{var state_15922__$1 = state_15922;var statearr_15930_15952 = state_15922__$1;(statearr_15930_15952[(2)] = null);
(statearr_15930_15952[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15923 === (3)))
{var inst_15919 = (state_15922[(2)]);var inst_15920 = cljs.core.async.close_BANG_.call(null,out);var state_15922__$1 = (function (){var statearr_15931 = state_15922;(statearr_15931[(9)] = inst_15919);
return statearr_15931;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15922__$1,inst_15920);
} else
{if((state_val_15923 === (2)))
{var state_15922__$1 = state_15922;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15922__$1,(4),ch);
} else
{if((state_val_15923 === (11)))
{var inst_15902 = (state_15922[(8)]);var inst_15911 = (state_15922[(2)]);var inst_15899 = inst_15902;var state_15922__$1 = (function (){var statearr_15932 = state_15922;(statearr_15932[(10)] = inst_15911);
(statearr_15932[(7)] = inst_15899);
return statearr_15932;
})();var statearr_15933_15953 = state_15922__$1;(statearr_15933_15953[(2)] = null);
(statearr_15933_15953[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15923 === (9)))
{var inst_15902 = (state_15922[(8)]);var state_15922__$1 = state_15922;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15922__$1,(11),out,inst_15902);
} else
{if((state_val_15923 === (5)))
{var inst_15899 = (state_15922[(7)]);var inst_15902 = (state_15922[(8)]);var inst_15906 = cljs.core._EQ_.call(null,inst_15902,inst_15899);var state_15922__$1 = state_15922;if(inst_15906)
{var statearr_15935_15954 = state_15922__$1;(statearr_15935_15954[(1)] = (8));
} else
{var statearr_15936_15955 = state_15922__$1;(statearr_15936_15955[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15923 === (10)))
{var inst_15914 = (state_15922[(2)]);var state_15922__$1 = state_15922;var statearr_15937_15956 = state_15922__$1;(statearr_15937_15956[(2)] = inst_15914);
(statearr_15937_15956[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15923 === (8)))
{var inst_15899 = (state_15922[(7)]);var tmp15934 = inst_15899;var inst_15899__$1 = tmp15934;var state_15922__$1 = (function (){var statearr_15938 = state_15922;(statearr_15938[(7)] = inst_15899__$1);
return statearr_15938;
})();var statearr_15939_15957 = state_15922__$1;(statearr_15939_15957[(2)] = null);
(statearr_15939_15957[(1)] = (2));
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
});})(c__6376__auto___15947,out))
;return ((function (switch__6361__auto__,c__6376__auto___15947,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_15943 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15943[(0)] = state_machine__6362__auto__);
(statearr_15943[(1)] = (1));
return statearr_15943;
});
var state_machine__6362__auto____1 = (function (state_15922){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_15922);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e15944){if((e15944 instanceof Object))
{var ex__6365__auto__ = e15944;var statearr_15945_15958 = state_15922;(statearr_15945_15958[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15922);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15944;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15959 = state_15922;
state_15922 = G__15959;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_15922){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_15922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___15947,out))
})();var state__6378__auto__ = (function (){var statearr_15946 = f__6377__auto__.call(null);(statearr_15946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___15947);
return statearr_15946;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___15947,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___16094 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___16094,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___16094,out){
return (function (state_16064){var state_val_16065 = (state_16064[(1)]);if((state_val_16065 === (7)))
{var inst_16060 = (state_16064[(2)]);var state_16064__$1 = state_16064;var statearr_16066_16095 = state_16064__$1;(statearr_16066_16095[(2)] = inst_16060);
(statearr_16066_16095[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16065 === (1)))
{var inst_16027 = (new Array(n));var inst_16028 = inst_16027;var inst_16029 = (0);var state_16064__$1 = (function (){var statearr_16067 = state_16064;(statearr_16067[(7)] = inst_16028);
(statearr_16067[(8)] = inst_16029);
return statearr_16067;
})();var statearr_16068_16096 = state_16064__$1;(statearr_16068_16096[(2)] = null);
(statearr_16068_16096[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16065 === (4)))
{var inst_16032 = (state_16064[(9)]);var inst_16032__$1 = (state_16064[(2)]);var inst_16033 = (inst_16032__$1 == null);var inst_16034 = cljs.core.not.call(null,inst_16033);var state_16064__$1 = (function (){var statearr_16069 = state_16064;(statearr_16069[(9)] = inst_16032__$1);
return statearr_16069;
})();if(inst_16034)
{var statearr_16070_16097 = state_16064__$1;(statearr_16070_16097[(1)] = (5));
} else
{var statearr_16071_16098 = state_16064__$1;(statearr_16071_16098[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16065 === (15)))
{var inst_16054 = (state_16064[(2)]);var state_16064__$1 = state_16064;var statearr_16072_16099 = state_16064__$1;(statearr_16072_16099[(2)] = inst_16054);
(statearr_16072_16099[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16065 === (13)))
{var state_16064__$1 = state_16064;var statearr_16073_16100 = state_16064__$1;(statearr_16073_16100[(2)] = null);
(statearr_16073_16100[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16065 === (6)))
{var inst_16029 = (state_16064[(8)]);var inst_16050 = (inst_16029 > (0));var state_16064__$1 = state_16064;if(cljs.core.truth_(inst_16050))
{var statearr_16074_16101 = state_16064__$1;(statearr_16074_16101[(1)] = (12));
} else
{var statearr_16075_16102 = state_16064__$1;(statearr_16075_16102[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16065 === (3)))
{var inst_16062 = (state_16064[(2)]);var state_16064__$1 = state_16064;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16064__$1,inst_16062);
} else
{if((state_val_16065 === (12)))
{var inst_16028 = (state_16064[(7)]);var inst_16052 = cljs.core.vec.call(null,inst_16028);var state_16064__$1 = state_16064;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16064__$1,(15),out,inst_16052);
} else
{if((state_val_16065 === (2)))
{var state_16064__$1 = state_16064;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16064__$1,(4),ch);
} else
{if((state_val_16065 === (11)))
{var inst_16044 = (state_16064[(2)]);var inst_16045 = (new Array(n));var inst_16028 = inst_16045;var inst_16029 = (0);var state_16064__$1 = (function (){var statearr_16076 = state_16064;(statearr_16076[(7)] = inst_16028);
(statearr_16076[(8)] = inst_16029);
(statearr_16076[(10)] = inst_16044);
return statearr_16076;
})();var statearr_16077_16103 = state_16064__$1;(statearr_16077_16103[(2)] = null);
(statearr_16077_16103[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16065 === (9)))
{var inst_16028 = (state_16064[(7)]);var inst_16042 = cljs.core.vec.call(null,inst_16028);var state_16064__$1 = state_16064;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16064__$1,(11),out,inst_16042);
} else
{if((state_val_16065 === (5)))
{var inst_16028 = (state_16064[(7)]);var inst_16029 = (state_16064[(8)]);var inst_16032 = (state_16064[(9)]);var inst_16037 = (state_16064[(11)]);var inst_16036 = (inst_16028[inst_16029] = inst_16032);var inst_16037__$1 = (inst_16029 + (1));var inst_16038 = (inst_16037__$1 < n);var state_16064__$1 = (function (){var statearr_16078 = state_16064;(statearr_16078[(12)] = inst_16036);
(statearr_16078[(11)] = inst_16037__$1);
return statearr_16078;
})();if(cljs.core.truth_(inst_16038))
{var statearr_16079_16104 = state_16064__$1;(statearr_16079_16104[(1)] = (8));
} else
{var statearr_16080_16105 = state_16064__$1;(statearr_16080_16105[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16065 === (14)))
{var inst_16057 = (state_16064[(2)]);var inst_16058 = cljs.core.async.close_BANG_.call(null,out);var state_16064__$1 = (function (){var statearr_16082 = state_16064;(statearr_16082[(13)] = inst_16057);
return statearr_16082;
})();var statearr_16083_16106 = state_16064__$1;(statearr_16083_16106[(2)] = inst_16058);
(statearr_16083_16106[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16065 === (10)))
{var inst_16048 = (state_16064[(2)]);var state_16064__$1 = state_16064;var statearr_16084_16107 = state_16064__$1;(statearr_16084_16107[(2)] = inst_16048);
(statearr_16084_16107[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16065 === (8)))
{var inst_16028 = (state_16064[(7)]);var inst_16037 = (state_16064[(11)]);var tmp16081 = inst_16028;var inst_16028__$1 = tmp16081;var inst_16029 = inst_16037;var state_16064__$1 = (function (){var statearr_16085 = state_16064;(statearr_16085[(7)] = inst_16028__$1);
(statearr_16085[(8)] = inst_16029);
return statearr_16085;
})();var statearr_16086_16108 = state_16064__$1;(statearr_16086_16108[(2)] = null);
(statearr_16086_16108[(1)] = (2));
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
});})(c__6376__auto___16094,out))
;return ((function (switch__6361__auto__,c__6376__auto___16094,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_16090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16090[(0)] = state_machine__6362__auto__);
(statearr_16090[(1)] = (1));
return statearr_16090;
});
var state_machine__6362__auto____1 = (function (state_16064){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_16064);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e16091){if((e16091 instanceof Object))
{var ex__6365__auto__ = e16091;var statearr_16092_16109 = state_16064;(statearr_16092_16109[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16064);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16091;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16110 = state_16064;
state_16064 = G__16110;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_16064){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_16064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___16094,out))
})();var state__6378__auto__ = (function (){var statearr_16093 = f__6377__auto__.call(null);(statearr_16093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___16094);
return statearr_16093;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___16094,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6376__auto___16253 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6376__auto___16253,out){
return (function (){var f__6377__auto__ = (function (){var switch__6361__auto__ = ((function (c__6376__auto___16253,out){
return (function (state_16223){var state_val_16224 = (state_16223[(1)]);if((state_val_16224 === (7)))
{var inst_16219 = (state_16223[(2)]);var state_16223__$1 = state_16223;var statearr_16225_16254 = state_16223__$1;(statearr_16225_16254[(2)] = inst_16219);
(statearr_16225_16254[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16224 === (1)))
{var inst_16182 = [];var inst_16183 = inst_16182;var inst_16184 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_16223__$1 = (function (){var statearr_16226 = state_16223;(statearr_16226[(7)] = inst_16183);
(statearr_16226[(8)] = inst_16184);
return statearr_16226;
})();var statearr_16227_16255 = state_16223__$1;(statearr_16227_16255[(2)] = null);
(statearr_16227_16255[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16224 === (4)))
{var inst_16187 = (state_16223[(9)]);var inst_16187__$1 = (state_16223[(2)]);var inst_16188 = (inst_16187__$1 == null);var inst_16189 = cljs.core.not.call(null,inst_16188);var state_16223__$1 = (function (){var statearr_16228 = state_16223;(statearr_16228[(9)] = inst_16187__$1);
return statearr_16228;
})();if(inst_16189)
{var statearr_16229_16256 = state_16223__$1;(statearr_16229_16256[(1)] = (5));
} else
{var statearr_16230_16257 = state_16223__$1;(statearr_16230_16257[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16224 === (15)))
{var inst_16213 = (state_16223[(2)]);var state_16223__$1 = state_16223;var statearr_16231_16258 = state_16223__$1;(statearr_16231_16258[(2)] = inst_16213);
(statearr_16231_16258[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16224 === (13)))
{var state_16223__$1 = state_16223;var statearr_16232_16259 = state_16223__$1;(statearr_16232_16259[(2)] = null);
(statearr_16232_16259[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16224 === (6)))
{var inst_16183 = (state_16223[(7)]);var inst_16208 = inst_16183.length;var inst_16209 = (inst_16208 > (0));var state_16223__$1 = state_16223;if(cljs.core.truth_(inst_16209))
{var statearr_16233_16260 = state_16223__$1;(statearr_16233_16260[(1)] = (12));
} else
{var statearr_16234_16261 = state_16223__$1;(statearr_16234_16261[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16224 === (3)))
{var inst_16221 = (state_16223[(2)]);var state_16223__$1 = state_16223;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16223__$1,inst_16221);
} else
{if((state_val_16224 === (12)))
{var inst_16183 = (state_16223[(7)]);var inst_16211 = cljs.core.vec.call(null,inst_16183);var state_16223__$1 = state_16223;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16223__$1,(15),out,inst_16211);
} else
{if((state_val_16224 === (2)))
{var state_16223__$1 = state_16223;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16223__$1,(4),ch);
} else
{if((state_val_16224 === (11)))
{var inst_16187 = (state_16223[(9)]);var inst_16191 = (state_16223[(10)]);var inst_16201 = (state_16223[(2)]);var inst_16202 = [];var inst_16203 = inst_16202.push(inst_16187);var inst_16183 = inst_16202;var inst_16184 = inst_16191;var state_16223__$1 = (function (){var statearr_16235 = state_16223;(statearr_16235[(11)] = inst_16201);
(statearr_16235[(7)] = inst_16183);
(statearr_16235[(12)] = inst_16203);
(statearr_16235[(8)] = inst_16184);
return statearr_16235;
})();var statearr_16236_16262 = state_16223__$1;(statearr_16236_16262[(2)] = null);
(statearr_16236_16262[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16224 === (9)))
{var inst_16183 = (state_16223[(7)]);var inst_16199 = cljs.core.vec.call(null,inst_16183);var state_16223__$1 = state_16223;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16223__$1,(11),out,inst_16199);
} else
{if((state_val_16224 === (5)))
{var inst_16187 = (state_16223[(9)]);var inst_16191 = (state_16223[(10)]);var inst_16184 = (state_16223[(8)]);var inst_16191__$1 = f.call(null,inst_16187);var inst_16192 = cljs.core._EQ_.call(null,inst_16191__$1,inst_16184);var inst_16193 = cljs.core.keyword_identical_QMARK_.call(null,inst_16184,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_16194 = (inst_16192) || (inst_16193);var state_16223__$1 = (function (){var statearr_16237 = state_16223;(statearr_16237[(10)] = inst_16191__$1);
return statearr_16237;
})();if(cljs.core.truth_(inst_16194))
{var statearr_16238_16263 = state_16223__$1;(statearr_16238_16263[(1)] = (8));
} else
{var statearr_16239_16264 = state_16223__$1;(statearr_16239_16264[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16224 === (14)))
{var inst_16216 = (state_16223[(2)]);var inst_16217 = cljs.core.async.close_BANG_.call(null,out);var state_16223__$1 = (function (){var statearr_16241 = state_16223;(statearr_16241[(13)] = inst_16216);
return statearr_16241;
})();var statearr_16242_16265 = state_16223__$1;(statearr_16242_16265[(2)] = inst_16217);
(statearr_16242_16265[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16224 === (10)))
{var inst_16206 = (state_16223[(2)]);var state_16223__$1 = state_16223;var statearr_16243_16266 = state_16223__$1;(statearr_16243_16266[(2)] = inst_16206);
(statearr_16243_16266[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16224 === (8)))
{var inst_16187 = (state_16223[(9)]);var inst_16183 = (state_16223[(7)]);var inst_16191 = (state_16223[(10)]);var inst_16196 = inst_16183.push(inst_16187);var tmp16240 = inst_16183;var inst_16183__$1 = tmp16240;var inst_16184 = inst_16191;var state_16223__$1 = (function (){var statearr_16244 = state_16223;(statearr_16244[(14)] = inst_16196);
(statearr_16244[(7)] = inst_16183__$1);
(statearr_16244[(8)] = inst_16184);
return statearr_16244;
})();var statearr_16245_16267 = state_16223__$1;(statearr_16245_16267[(2)] = null);
(statearr_16245_16267[(1)] = (2));
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
});})(c__6376__auto___16253,out))
;return ((function (switch__6361__auto__,c__6376__auto___16253,out){
return (function() {
var state_machine__6362__auto__ = null;
var state_machine__6362__auto____0 = (function (){var statearr_16249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16249[(0)] = state_machine__6362__auto__);
(statearr_16249[(1)] = (1));
return statearr_16249;
});
var state_machine__6362__auto____1 = (function (state_16223){while(true){
var ret_value__6363__auto__ = (function (){try{while(true){
var result__6364__auto__ = switch__6361__auto__.call(null,state_16223);if(cljs.core.keyword_identical_QMARK_.call(null,result__6364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6364__auto__;
}
break;
}
}catch (e16250){if((e16250 instanceof Object))
{var ex__6365__auto__ = e16250;var statearr_16251_16268 = state_16223;(statearr_16251_16268[(5)] = ex__6365__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16223);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16250;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16269 = state_16223;
state_16223 = G__16269;
continue;
}
} else
{return ret_value__6363__auto__;
}
break;
}
});
state_machine__6362__auto__ = function(state_16223){
switch(arguments.length){
case 0:
return state_machine__6362__auto____0.call(this);
case 1:
return state_machine__6362__auto____1.call(this,state_16223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6362__auto____0;
state_machine__6362__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6362__auto____1;
return state_machine__6362__auto__;
})()
;})(switch__6361__auto__,c__6376__auto___16253,out))
})();var state__6378__auto__ = (function (){var statearr_16252 = f__6377__auto__.call(null);(statearr_16252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6376__auto___16253);
return statearr_16252;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6378__auto__);
});})(c__6376__auto___16253,out))
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