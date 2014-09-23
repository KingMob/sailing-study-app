// Compiled by ClojureScript 0.0-2342
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11934 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11934 = (function (f,fn_handler,meta11935){
this.f = f;
this.fn_handler = fn_handler;
this.meta11935 = meta11935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11934.cljs$lang$type = true;
cljs.core.async.t11934.cljs$lang$ctorStr = "cljs.core.async/t11934";
cljs.core.async.t11934.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t11934");
});
cljs.core.async.t11934.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11936){var self__ = this;
var _11936__$1 = this;return self__.meta11935;
});
cljs.core.async.t11934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11936,meta11935__$1){var self__ = this;
var _11936__$1 = this;return (new cljs.core.async.t11934(self__.f,self__.fn_handler,meta11935__$1));
});
cljs.core.async.__GT_t11934 = (function __GT_t11934(f__$1,fn_handler__$1,meta11935){return (new cljs.core.async.t11934(f__$1,fn_handler__$1,meta11935));
});
}
return (new cljs.core.async.t11934(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11938 = buff;if(G__11938)
{var bit__4289__auto__ = null;if(cljs.core.truth_((function (){var or__3626__auto__ = bit__4289__auto__;if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{return G__11938.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11938.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11938);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11938);
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
{var val_11939 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11939);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11939,ret){
return (function (){return fn1.call(null,val_11939);
});})(val_11939,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4495__auto___11940 = n;var x_11941 = (0);while(true){
if((x_11941 < n__4495__auto___11940))
{(a[x_11941] = (0));
{
var G__11942 = (x_11941 + (1));
x_11941 = G__11942;
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
var G__11943 = (i + (1));
i = G__11943;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11947 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11947 = (function (flag,alt_flag,meta11948){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11948 = meta11948;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11947.cljs$lang$type = true;
cljs.core.async.t11947.cljs$lang$ctorStr = "cljs.core.async/t11947";
cljs.core.async.t11947.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t11947");
});})(flag))
;
cljs.core.async.t11947.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11947.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11947.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11947.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11949){var self__ = this;
var _11949__$1 = this;return self__.meta11948;
});})(flag))
;
cljs.core.async.t11947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11949,meta11948__$1){var self__ = this;
var _11949__$1 = this;return (new cljs.core.async.t11947(self__.flag,self__.alt_flag,meta11948__$1));
});})(flag))
;
cljs.core.async.__GT_t11947 = ((function (flag){
return (function __GT_t11947(flag__$1,alt_flag__$1,meta11948){return (new cljs.core.async.t11947(flag__$1,alt_flag__$1,meta11948));
});})(flag))
;
}
return (new cljs.core.async.t11947(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11953 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11953 = (function (cb,flag,alt_handler,meta11954){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11954 = meta11954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11953.cljs$lang$type = true;
cljs.core.async.t11953.cljs$lang$ctorStr = "cljs.core.async/t11953";
cljs.core.async.t11953.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t11953");
});
cljs.core.async.t11953.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11953.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11953.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11955){var self__ = this;
var _11955__$1 = this;return self__.meta11954;
});
cljs.core.async.t11953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11955,meta11954__$1){var self__ = this;
var _11955__$1 = this;return (new cljs.core.async.t11953(self__.cb,self__.flag,self__.alt_handler,meta11954__$1));
});
cljs.core.async.__GT_t11953 = (function __GT_t11953(cb__$1,flag__$1,alt_handler__$1,meta11954){return (new cljs.core.async.t11953(cb__$1,flag__$1,alt_handler__$1,meta11954));
});
}
return (new cljs.core.async.t11953(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11956_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11956_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11957_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11957_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3626__auto__ = wport;if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11958 = (i + (1));
i = G__11958;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3626__auto__ = ret;if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3614__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3614__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3614__auto__;
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
var alts_BANG___delegate = function (ports,p__11959){var map__11961 = p__11959;var map__11961__$1 = ((cljs.core.seq_QMARK_.call(null,map__11961))?cljs.core.apply.call(null,cljs.core.hash_map,map__11961):map__11961);var opts = map__11961__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11959 = null;if (arguments.length > 1) {
  p__11959 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11959);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11962){
var ports = cljs.core.first(arglist__11962);
var p__11959 = cljs.core.rest(arglist__11962);
return alts_BANG___delegate(ports,p__11959);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6831__auto___12057 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___12057){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___12057){
return (function (state_12033){var state_val_12034 = (state_12033[(1)]);if((state_val_12034 === (7)))
{var inst_12029 = (state_12033[(2)]);var state_12033__$1 = state_12033;var statearr_12035_12058 = state_12033__$1;(statearr_12035_12058[(2)] = inst_12029);
(statearr_12035_12058[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12034 === (1)))
{var state_12033__$1 = state_12033;var statearr_12036_12059 = state_12033__$1;(statearr_12036_12059[(2)] = null);
(statearr_12036_12059[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12034 === (4)))
{var inst_12012 = (state_12033[(7)]);var inst_12012__$1 = (state_12033[(2)]);var inst_12013 = (inst_12012__$1 == null);var state_12033__$1 = (function (){var statearr_12037 = state_12033;(statearr_12037[(7)] = inst_12012__$1);
return statearr_12037;
})();if(cljs.core.truth_(inst_12013))
{var statearr_12038_12060 = state_12033__$1;(statearr_12038_12060[(1)] = (5));
} else
{var statearr_12039_12061 = state_12033__$1;(statearr_12039_12061[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12034 === (13)))
{var state_12033__$1 = state_12033;var statearr_12040_12062 = state_12033__$1;(statearr_12040_12062[(2)] = null);
(statearr_12040_12062[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12034 === (6)))
{var inst_12012 = (state_12033[(7)]);var state_12033__$1 = state_12033;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12033__$1,(11),to,inst_12012);
} else
{if((state_val_12034 === (3)))
{var inst_12031 = (state_12033[(2)]);var state_12033__$1 = state_12033;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12033__$1,inst_12031);
} else
{if((state_val_12034 === (12)))
{var state_12033__$1 = state_12033;var statearr_12041_12063 = state_12033__$1;(statearr_12041_12063[(2)] = null);
(statearr_12041_12063[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12034 === (2)))
{var state_12033__$1 = state_12033;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12033__$1,(4),from);
} else
{if((state_val_12034 === (11)))
{var inst_12022 = (state_12033[(2)]);var state_12033__$1 = state_12033;if(cljs.core.truth_(inst_12022))
{var statearr_12042_12064 = state_12033__$1;(statearr_12042_12064[(1)] = (12));
} else
{var statearr_12043_12065 = state_12033__$1;(statearr_12043_12065[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12034 === (9)))
{var state_12033__$1 = state_12033;var statearr_12044_12066 = state_12033__$1;(statearr_12044_12066[(2)] = null);
(statearr_12044_12066[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12034 === (5)))
{var state_12033__$1 = state_12033;if(cljs.core.truth_(close_QMARK_))
{var statearr_12045_12067 = state_12033__$1;(statearr_12045_12067[(1)] = (8));
} else
{var statearr_12046_12068 = state_12033__$1;(statearr_12046_12068[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12034 === (14)))
{var inst_12027 = (state_12033[(2)]);var state_12033__$1 = state_12033;var statearr_12047_12069 = state_12033__$1;(statearr_12047_12069[(2)] = inst_12027);
(statearr_12047_12069[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12034 === (10)))
{var inst_12019 = (state_12033[(2)]);var state_12033__$1 = state_12033;var statearr_12048_12070 = state_12033__$1;(statearr_12048_12070[(2)] = inst_12019);
(statearr_12048_12070[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12034 === (8)))
{var inst_12016 = cljs.core.async.close_BANG_.call(null,to);var state_12033__$1 = state_12033;var statearr_12049_12071 = state_12033__$1;(statearr_12049_12071[(2)] = inst_12016);
(statearr_12049_12071[(1)] = (10));
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
});})(c__6831__auto___12057))
;return ((function (switch__6816__auto__,c__6831__auto___12057){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_12053 = [null,null,null,null,null,null,null,null];(statearr_12053[(0)] = state_machine__6817__auto__);
(statearr_12053[(1)] = (1));
return statearr_12053;
});
var state_machine__6817__auto____1 = (function (state_12033){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_12033);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e12054){if((e12054 instanceof Object))
{var ex__6820__auto__ = e12054;var statearr_12055_12072 = state_12033;(statearr_12055_12072[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12033);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12054;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12073 = state_12033;
state_12033 = G__12073;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_12033){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_12033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___12057))
})();var state__6833__auto__ = (function (){var statearr_12056 = f__6832__auto__.call(null);(statearr_12056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___12057);
return statearr_12056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___12057))
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
return (function (p__12257){var vec__12258 = p__12257;var v = cljs.core.nth.call(null,vec__12258,(0),null);var p = cljs.core.nth.call(null,vec__12258,(1),null);var job = vec__12258;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6831__auto___12440 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___12440,res,vec__12258,v,p,job,jobs,results){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___12440,res,vec__12258,v,p,job,jobs,results){
return (function (state_12263){var state_val_12264 = (state_12263[(1)]);if((state_val_12264 === (2)))
{var inst_12260 = (state_12263[(2)]);var inst_12261 = cljs.core.async.close_BANG_.call(null,res);var state_12263__$1 = (function (){var statearr_12265 = state_12263;(statearr_12265[(7)] = inst_12260);
return statearr_12265;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12263__$1,inst_12261);
} else
{if((state_val_12264 === (1)))
{var state_12263__$1 = state_12263;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12263__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6831__auto___12440,res,vec__12258,v,p,job,jobs,results))
;return ((function (switch__6816__auto__,c__6831__auto___12440,res,vec__12258,v,p,job,jobs,results){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_12269 = [null,null,null,null,null,null,null,null];(statearr_12269[(0)] = state_machine__6817__auto__);
(statearr_12269[(1)] = (1));
return statearr_12269;
});
var state_machine__6817__auto____1 = (function (state_12263){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_12263);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e12270){if((e12270 instanceof Object))
{var ex__6820__auto__ = e12270;var statearr_12271_12441 = state_12263;(statearr_12271_12441[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12263);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12270;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12442 = state_12263;
state_12263 = G__12442;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_12263){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_12263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___12440,res,vec__12258,v,p,job,jobs,results))
})();var state__6833__auto__ = (function (){var statearr_12272 = f__6832__auto__.call(null);(statearr_12272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___12440);
return statearr_12272;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___12440,res,vec__12258,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12273){var vec__12274 = p__12273;var v = cljs.core.nth.call(null,vec__12274,(0),null);var p = cljs.core.nth.call(null,vec__12274,(1),null);var job = vec__12274;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4495__auto___12443 = n;var __12444 = (0);while(true){
if((__12444 < n__4495__auto___12443))
{var G__12275_12445 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__12275_12445) {
case "async":
var c__6831__auto___12447 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12444,c__6831__auto___12447,G__12275_12445,n__4495__auto___12443,jobs,results,process,async){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (__12444,c__6831__auto___12447,G__12275_12445,n__4495__auto___12443,jobs,results,process,async){
return (function (state_12288){var state_val_12289 = (state_12288[(1)]);if((state_val_12289 === (7)))
{var inst_12284 = (state_12288[(2)]);var state_12288__$1 = state_12288;var statearr_12290_12448 = state_12288__$1;(statearr_12290_12448[(2)] = inst_12284);
(statearr_12290_12448[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12289 === (6)))
{var state_12288__$1 = state_12288;var statearr_12291_12449 = state_12288__$1;(statearr_12291_12449[(2)] = null);
(statearr_12291_12449[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12289 === (5)))
{var state_12288__$1 = state_12288;var statearr_12292_12450 = state_12288__$1;(statearr_12292_12450[(2)] = null);
(statearr_12292_12450[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12289 === (4)))
{var inst_12278 = (state_12288[(2)]);var inst_12279 = async.call(null,inst_12278);var state_12288__$1 = state_12288;if(cljs.core.truth_(inst_12279))
{var statearr_12293_12451 = state_12288__$1;(statearr_12293_12451[(1)] = (5));
} else
{var statearr_12294_12452 = state_12288__$1;(statearr_12294_12452[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12289 === (3)))
{var inst_12286 = (state_12288[(2)]);var state_12288__$1 = state_12288;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12288__$1,inst_12286);
} else
{if((state_val_12289 === (2)))
{var state_12288__$1 = state_12288;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12288__$1,(4),jobs);
} else
{if((state_val_12289 === (1)))
{var state_12288__$1 = state_12288;var statearr_12295_12453 = state_12288__$1;(statearr_12295_12453[(2)] = null);
(statearr_12295_12453[(1)] = (2));
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
});})(__12444,c__6831__auto___12447,G__12275_12445,n__4495__auto___12443,jobs,results,process,async))
;return ((function (__12444,switch__6816__auto__,c__6831__auto___12447,G__12275_12445,n__4495__auto___12443,jobs,results,process,async){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_12299 = [null,null,null,null,null,null,null];(statearr_12299[(0)] = state_machine__6817__auto__);
(statearr_12299[(1)] = (1));
return statearr_12299;
});
var state_machine__6817__auto____1 = (function (state_12288){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_12288);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e12300){if((e12300 instanceof Object))
{var ex__6820__auto__ = e12300;var statearr_12301_12454 = state_12288;(statearr_12301_12454[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12288);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12300;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12455 = state_12288;
state_12288 = G__12455;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_12288){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_12288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(__12444,switch__6816__auto__,c__6831__auto___12447,G__12275_12445,n__4495__auto___12443,jobs,results,process,async))
})();var state__6833__auto__ = (function (){var statearr_12302 = f__6832__auto__.call(null);(statearr_12302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___12447);
return statearr_12302;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(__12444,c__6831__auto___12447,G__12275_12445,n__4495__auto___12443,jobs,results,process,async))
);

break;
case "compute":
var c__6831__auto___12456 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12444,c__6831__auto___12456,G__12275_12445,n__4495__auto___12443,jobs,results,process,async){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (__12444,c__6831__auto___12456,G__12275_12445,n__4495__auto___12443,jobs,results,process,async){
return (function (state_12315){var state_val_12316 = (state_12315[(1)]);if((state_val_12316 === (7)))
{var inst_12311 = (state_12315[(2)]);var state_12315__$1 = state_12315;var statearr_12317_12457 = state_12315__$1;(statearr_12317_12457[(2)] = inst_12311);
(statearr_12317_12457[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12316 === (6)))
{var state_12315__$1 = state_12315;var statearr_12318_12458 = state_12315__$1;(statearr_12318_12458[(2)] = null);
(statearr_12318_12458[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12316 === (5)))
{var state_12315__$1 = state_12315;var statearr_12319_12459 = state_12315__$1;(statearr_12319_12459[(2)] = null);
(statearr_12319_12459[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12316 === (4)))
{var inst_12305 = (state_12315[(2)]);var inst_12306 = process.call(null,inst_12305);var state_12315__$1 = state_12315;if(cljs.core.truth_(inst_12306))
{var statearr_12320_12460 = state_12315__$1;(statearr_12320_12460[(1)] = (5));
} else
{var statearr_12321_12461 = state_12315__$1;(statearr_12321_12461[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12316 === (3)))
{var inst_12313 = (state_12315[(2)]);var state_12315__$1 = state_12315;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12315__$1,inst_12313);
} else
{if((state_val_12316 === (2)))
{var state_12315__$1 = state_12315;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12315__$1,(4),jobs);
} else
{if((state_val_12316 === (1)))
{var state_12315__$1 = state_12315;var statearr_12322_12462 = state_12315__$1;(statearr_12322_12462[(2)] = null);
(statearr_12322_12462[(1)] = (2));
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
});})(__12444,c__6831__auto___12456,G__12275_12445,n__4495__auto___12443,jobs,results,process,async))
;return ((function (__12444,switch__6816__auto__,c__6831__auto___12456,G__12275_12445,n__4495__auto___12443,jobs,results,process,async){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_12326 = [null,null,null,null,null,null,null];(statearr_12326[(0)] = state_machine__6817__auto__);
(statearr_12326[(1)] = (1));
return statearr_12326;
});
var state_machine__6817__auto____1 = (function (state_12315){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_12315);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e12327){if((e12327 instanceof Object))
{var ex__6820__auto__ = e12327;var statearr_12328_12463 = state_12315;(statearr_12328_12463[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12315);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12327;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12464 = state_12315;
state_12315 = G__12464;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_12315){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_12315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(__12444,switch__6816__auto__,c__6831__auto___12456,G__12275_12445,n__4495__auto___12443,jobs,results,process,async))
})();var state__6833__auto__ = (function (){var statearr_12329 = f__6832__auto__.call(null);(statearr_12329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___12456);
return statearr_12329;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(__12444,c__6831__auto___12456,G__12275_12445,n__4495__auto___12443,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__12465 = (__12444 + (1));
__12444 = G__12465;
continue;
}
} else
{}
break;
}
var c__6831__auto___12466 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___12466,jobs,results,process,async){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___12466,jobs,results,process,async){
return (function (state_12351){var state_val_12352 = (state_12351[(1)]);if((state_val_12352 === (9)))
{var inst_12344 = (state_12351[(2)]);var state_12351__$1 = (function (){var statearr_12353 = state_12351;(statearr_12353[(7)] = inst_12344);
return statearr_12353;
})();var statearr_12354_12467 = state_12351__$1;(statearr_12354_12467[(2)] = null);
(statearr_12354_12467[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12352 === (8)))
{var inst_12337 = (state_12351[(8)]);var inst_12342 = (state_12351[(2)]);var state_12351__$1 = (function (){var statearr_12355 = state_12351;(statearr_12355[(9)] = inst_12342);
return statearr_12355;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12351__$1,(9),results,inst_12337);
} else
{if((state_val_12352 === (7)))
{var inst_12347 = (state_12351[(2)]);var state_12351__$1 = state_12351;var statearr_12356_12468 = state_12351__$1;(statearr_12356_12468[(2)] = inst_12347);
(statearr_12356_12468[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12352 === (6)))
{var inst_12332 = (state_12351[(10)]);var inst_12337 = (state_12351[(8)]);var inst_12337__$1 = cljs.core.async.chan.call(null,(1));var inst_12338 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12339 = [inst_12332,inst_12337__$1];var inst_12340 = (new cljs.core.PersistentVector(null,2,(5),inst_12338,inst_12339,null));var state_12351__$1 = (function (){var statearr_12357 = state_12351;(statearr_12357[(8)] = inst_12337__$1);
return statearr_12357;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12351__$1,(8),jobs,inst_12340);
} else
{if((state_val_12352 === (5)))
{var inst_12335 = cljs.core.async.close_BANG_.call(null,jobs);var state_12351__$1 = state_12351;var statearr_12358_12469 = state_12351__$1;(statearr_12358_12469[(2)] = inst_12335);
(statearr_12358_12469[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12352 === (4)))
{var inst_12332 = (state_12351[(10)]);var inst_12332__$1 = (state_12351[(2)]);var inst_12333 = (inst_12332__$1 == null);var state_12351__$1 = (function (){var statearr_12359 = state_12351;(statearr_12359[(10)] = inst_12332__$1);
return statearr_12359;
})();if(cljs.core.truth_(inst_12333))
{var statearr_12360_12470 = state_12351__$1;(statearr_12360_12470[(1)] = (5));
} else
{var statearr_12361_12471 = state_12351__$1;(statearr_12361_12471[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12352 === (3)))
{var inst_12349 = (state_12351[(2)]);var state_12351__$1 = state_12351;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12351__$1,inst_12349);
} else
{if((state_val_12352 === (2)))
{var state_12351__$1 = state_12351;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12351__$1,(4),from);
} else
{if((state_val_12352 === (1)))
{var state_12351__$1 = state_12351;var statearr_12362_12472 = state_12351__$1;(statearr_12362_12472[(2)] = null);
(statearr_12362_12472[(1)] = (2));
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
});})(c__6831__auto___12466,jobs,results,process,async))
;return ((function (switch__6816__auto__,c__6831__auto___12466,jobs,results,process,async){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_12366 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12366[(0)] = state_machine__6817__auto__);
(statearr_12366[(1)] = (1));
return statearr_12366;
});
var state_machine__6817__auto____1 = (function (state_12351){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_12351);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e12367){if((e12367 instanceof Object))
{var ex__6820__auto__ = e12367;var statearr_12368_12473 = state_12351;(statearr_12368_12473[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12351);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12367;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12474 = state_12351;
state_12351 = G__12474;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_12351){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_12351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___12466,jobs,results,process,async))
})();var state__6833__auto__ = (function (){var statearr_12369 = f__6832__auto__.call(null);(statearr_12369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___12466);
return statearr_12369;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___12466,jobs,results,process,async))
);
var c__6831__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto__,jobs,results,process,async){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto__,jobs,results,process,async){
return (function (state_12407){var state_val_12408 = (state_12407[(1)]);if((state_val_12408 === (7)))
{var inst_12403 = (state_12407[(2)]);var state_12407__$1 = state_12407;var statearr_12409_12475 = state_12407__$1;(statearr_12409_12475[(2)] = inst_12403);
(statearr_12409_12475[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12408 === (20)))
{var state_12407__$1 = state_12407;var statearr_12410_12476 = state_12407__$1;(statearr_12410_12476[(2)] = null);
(statearr_12410_12476[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12408 === (1)))
{var state_12407__$1 = state_12407;var statearr_12411_12477 = state_12407__$1;(statearr_12411_12477[(2)] = null);
(statearr_12411_12477[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12408 === (4)))
{var inst_12372 = (state_12407[(7)]);var inst_12372__$1 = (state_12407[(2)]);var inst_12373 = (inst_12372__$1 == null);var state_12407__$1 = (function (){var statearr_12412 = state_12407;(statearr_12412[(7)] = inst_12372__$1);
return statearr_12412;
})();if(cljs.core.truth_(inst_12373))
{var statearr_12413_12478 = state_12407__$1;(statearr_12413_12478[(1)] = (5));
} else
{var statearr_12414_12479 = state_12407__$1;(statearr_12414_12479[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12408 === (15)))
{var inst_12385 = (state_12407[(8)]);var state_12407__$1 = state_12407;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12407__$1,(18),to,inst_12385);
} else
{if((state_val_12408 === (21)))
{var inst_12398 = (state_12407[(2)]);var state_12407__$1 = state_12407;var statearr_12415_12480 = state_12407__$1;(statearr_12415_12480[(2)] = inst_12398);
(statearr_12415_12480[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12408 === (13)))
{var inst_12400 = (state_12407[(2)]);var state_12407__$1 = (function (){var statearr_12416 = state_12407;(statearr_12416[(9)] = inst_12400);
return statearr_12416;
})();var statearr_12417_12481 = state_12407__$1;(statearr_12417_12481[(2)] = null);
(statearr_12417_12481[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12408 === (6)))
{var inst_12372 = (state_12407[(7)]);var state_12407__$1 = state_12407;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12407__$1,(11),inst_12372);
} else
{if((state_val_12408 === (17)))
{var inst_12393 = (state_12407[(2)]);var state_12407__$1 = state_12407;if(cljs.core.truth_(inst_12393))
{var statearr_12418_12482 = state_12407__$1;(statearr_12418_12482[(1)] = (19));
} else
{var statearr_12419_12483 = state_12407__$1;(statearr_12419_12483[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12408 === (3)))
{var inst_12405 = (state_12407[(2)]);var state_12407__$1 = state_12407;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12407__$1,inst_12405);
} else
{if((state_val_12408 === (12)))
{var inst_12382 = (state_12407[(10)]);var state_12407__$1 = state_12407;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12407__$1,(14),inst_12382);
} else
{if((state_val_12408 === (2)))
{var state_12407__$1 = state_12407;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12407__$1,(4),results);
} else
{if((state_val_12408 === (19)))
{var state_12407__$1 = state_12407;var statearr_12420_12484 = state_12407__$1;(statearr_12420_12484[(2)] = null);
(statearr_12420_12484[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12408 === (11)))
{var inst_12382 = (state_12407[(2)]);var state_12407__$1 = (function (){var statearr_12421 = state_12407;(statearr_12421[(10)] = inst_12382);
return statearr_12421;
})();var statearr_12422_12485 = state_12407__$1;(statearr_12422_12485[(2)] = null);
(statearr_12422_12485[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12408 === (9)))
{var state_12407__$1 = state_12407;var statearr_12423_12486 = state_12407__$1;(statearr_12423_12486[(2)] = null);
(statearr_12423_12486[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12408 === (5)))
{var state_12407__$1 = state_12407;if(cljs.core.truth_(close_QMARK_))
{var statearr_12424_12487 = state_12407__$1;(statearr_12424_12487[(1)] = (8));
} else
{var statearr_12425_12488 = state_12407__$1;(statearr_12425_12488[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12408 === (14)))
{var inst_12385 = (state_12407[(8)]);var inst_12387 = (state_12407[(11)]);var inst_12385__$1 = (state_12407[(2)]);var inst_12386 = (inst_12385__$1 == null);var inst_12387__$1 = cljs.core.not.call(null,inst_12386);var state_12407__$1 = (function (){var statearr_12426 = state_12407;(statearr_12426[(8)] = inst_12385__$1);
(statearr_12426[(11)] = inst_12387__$1);
return statearr_12426;
})();if(inst_12387__$1)
{var statearr_12427_12489 = state_12407__$1;(statearr_12427_12489[(1)] = (15));
} else
{var statearr_12428_12490 = state_12407__$1;(statearr_12428_12490[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12408 === (16)))
{var inst_12387 = (state_12407[(11)]);var state_12407__$1 = state_12407;var statearr_12429_12491 = state_12407__$1;(statearr_12429_12491[(2)] = inst_12387);
(statearr_12429_12491[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12408 === (10)))
{var inst_12379 = (state_12407[(2)]);var state_12407__$1 = state_12407;var statearr_12430_12492 = state_12407__$1;(statearr_12430_12492[(2)] = inst_12379);
(statearr_12430_12492[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12408 === (18)))
{var inst_12390 = (state_12407[(2)]);var state_12407__$1 = state_12407;var statearr_12431_12493 = state_12407__$1;(statearr_12431_12493[(2)] = inst_12390);
(statearr_12431_12493[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12408 === (8)))
{var inst_12376 = cljs.core.async.close_BANG_.call(null,to);var state_12407__$1 = state_12407;var statearr_12432_12494 = state_12407__$1;(statearr_12432_12494[(2)] = inst_12376);
(statearr_12432_12494[(1)] = (10));
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
});})(c__6831__auto__,jobs,results,process,async))
;return ((function (switch__6816__auto__,c__6831__auto__,jobs,results,process,async){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_12436 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12436[(0)] = state_machine__6817__auto__);
(statearr_12436[(1)] = (1));
return statearr_12436;
});
var state_machine__6817__auto____1 = (function (state_12407){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_12407);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e12437){if((e12437 instanceof Object))
{var ex__6820__auto__ = e12437;var statearr_12438_12495 = state_12407;(statearr_12438_12495[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12407);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12437;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12496 = state_12407;
state_12407 = G__12496;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_12407){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_12407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto__,jobs,results,process,async))
})();var state__6833__auto__ = (function (){var statearr_12439 = f__6832__auto__.call(null);(statearr_12439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto__);
return statearr_12439;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto__,jobs,results,process,async))
);
return c__6831__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6831__auto___12597 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___12597,tc,fc){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___12597,tc,fc){
return (function (state_12572){var state_val_12573 = (state_12572[(1)]);if((state_val_12573 === (7)))
{var inst_12568 = (state_12572[(2)]);var state_12572__$1 = state_12572;var statearr_12574_12598 = state_12572__$1;(statearr_12574_12598[(2)] = inst_12568);
(statearr_12574_12598[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12573 === (1)))
{var state_12572__$1 = state_12572;var statearr_12575_12599 = state_12572__$1;(statearr_12575_12599[(2)] = null);
(statearr_12575_12599[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12573 === (4)))
{var inst_12549 = (state_12572[(7)]);var inst_12549__$1 = (state_12572[(2)]);var inst_12550 = (inst_12549__$1 == null);var state_12572__$1 = (function (){var statearr_12576 = state_12572;(statearr_12576[(7)] = inst_12549__$1);
return statearr_12576;
})();if(cljs.core.truth_(inst_12550))
{var statearr_12577_12600 = state_12572__$1;(statearr_12577_12600[(1)] = (5));
} else
{var statearr_12578_12601 = state_12572__$1;(statearr_12578_12601[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12573 === (13)))
{var state_12572__$1 = state_12572;var statearr_12579_12602 = state_12572__$1;(statearr_12579_12602[(2)] = null);
(statearr_12579_12602[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12573 === (6)))
{var inst_12549 = (state_12572[(7)]);var inst_12555 = p.call(null,inst_12549);var state_12572__$1 = state_12572;if(cljs.core.truth_(inst_12555))
{var statearr_12580_12603 = state_12572__$1;(statearr_12580_12603[(1)] = (9));
} else
{var statearr_12581_12604 = state_12572__$1;(statearr_12581_12604[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12573 === (3)))
{var inst_12570 = (state_12572[(2)]);var state_12572__$1 = state_12572;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12572__$1,inst_12570);
} else
{if((state_val_12573 === (12)))
{var state_12572__$1 = state_12572;var statearr_12582_12605 = state_12572__$1;(statearr_12582_12605[(2)] = null);
(statearr_12582_12605[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12573 === (2)))
{var state_12572__$1 = state_12572;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12572__$1,(4),ch);
} else
{if((state_val_12573 === (11)))
{var inst_12549 = (state_12572[(7)]);var inst_12559 = (state_12572[(2)]);var state_12572__$1 = state_12572;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12572__$1,(8),inst_12559,inst_12549);
} else
{if((state_val_12573 === (9)))
{var state_12572__$1 = state_12572;var statearr_12583_12606 = state_12572__$1;(statearr_12583_12606[(2)] = tc);
(statearr_12583_12606[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12573 === (5)))
{var inst_12552 = cljs.core.async.close_BANG_.call(null,tc);var inst_12553 = cljs.core.async.close_BANG_.call(null,fc);var state_12572__$1 = (function (){var statearr_12584 = state_12572;(statearr_12584[(8)] = inst_12552);
return statearr_12584;
})();var statearr_12585_12607 = state_12572__$1;(statearr_12585_12607[(2)] = inst_12553);
(statearr_12585_12607[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12573 === (14)))
{var inst_12566 = (state_12572[(2)]);var state_12572__$1 = state_12572;var statearr_12586_12608 = state_12572__$1;(statearr_12586_12608[(2)] = inst_12566);
(statearr_12586_12608[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12573 === (10)))
{var state_12572__$1 = state_12572;var statearr_12587_12609 = state_12572__$1;(statearr_12587_12609[(2)] = fc);
(statearr_12587_12609[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12573 === (8)))
{var inst_12561 = (state_12572[(2)]);var state_12572__$1 = state_12572;if(cljs.core.truth_(inst_12561))
{var statearr_12588_12610 = state_12572__$1;(statearr_12588_12610[(1)] = (12));
} else
{var statearr_12589_12611 = state_12572__$1;(statearr_12589_12611[(1)] = (13));
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
});})(c__6831__auto___12597,tc,fc))
;return ((function (switch__6816__auto__,c__6831__auto___12597,tc,fc){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_12593 = [null,null,null,null,null,null,null,null,null];(statearr_12593[(0)] = state_machine__6817__auto__);
(statearr_12593[(1)] = (1));
return statearr_12593;
});
var state_machine__6817__auto____1 = (function (state_12572){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_12572);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e12594){if((e12594 instanceof Object))
{var ex__6820__auto__ = e12594;var statearr_12595_12612 = state_12572;(statearr_12595_12612[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12572);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12594;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12613 = state_12572;
state_12572 = G__12613;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_12572){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_12572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___12597,tc,fc))
})();var state__6833__auto__ = (function (){var statearr_12596 = f__6832__auto__.call(null);(statearr_12596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___12597);
return statearr_12596;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___12597,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6831__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto__){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto__){
return (function (state_12660){var state_val_12661 = (state_12660[(1)]);if((state_val_12661 === (7)))
{var inst_12656 = (state_12660[(2)]);var state_12660__$1 = state_12660;var statearr_12662_12678 = state_12660__$1;(statearr_12662_12678[(2)] = inst_12656);
(statearr_12662_12678[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12661 === (6)))
{var inst_12646 = (state_12660[(7)]);var inst_12649 = (state_12660[(8)]);var inst_12653 = f.call(null,inst_12646,inst_12649);var inst_12646__$1 = inst_12653;var state_12660__$1 = (function (){var statearr_12663 = state_12660;(statearr_12663[(7)] = inst_12646__$1);
return statearr_12663;
})();var statearr_12664_12679 = state_12660__$1;(statearr_12664_12679[(2)] = null);
(statearr_12664_12679[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12661 === (5)))
{var inst_12646 = (state_12660[(7)]);var state_12660__$1 = state_12660;var statearr_12665_12680 = state_12660__$1;(statearr_12665_12680[(2)] = inst_12646);
(statearr_12665_12680[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12661 === (4)))
{var inst_12649 = (state_12660[(8)]);var inst_12649__$1 = (state_12660[(2)]);var inst_12650 = (inst_12649__$1 == null);var state_12660__$1 = (function (){var statearr_12666 = state_12660;(statearr_12666[(8)] = inst_12649__$1);
return statearr_12666;
})();if(cljs.core.truth_(inst_12650))
{var statearr_12667_12681 = state_12660__$1;(statearr_12667_12681[(1)] = (5));
} else
{var statearr_12668_12682 = state_12660__$1;(statearr_12668_12682[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12661 === (3)))
{var inst_12658 = (state_12660[(2)]);var state_12660__$1 = state_12660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12660__$1,inst_12658);
} else
{if((state_val_12661 === (2)))
{var state_12660__$1 = state_12660;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12660__$1,(4),ch);
} else
{if((state_val_12661 === (1)))
{var inst_12646 = init;var state_12660__$1 = (function (){var statearr_12669 = state_12660;(statearr_12669[(7)] = inst_12646);
return statearr_12669;
})();var statearr_12670_12683 = state_12660__$1;(statearr_12670_12683[(2)] = null);
(statearr_12670_12683[(1)] = (2));
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
});})(c__6831__auto__))
;return ((function (switch__6816__auto__,c__6831__auto__){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_12674 = [null,null,null,null,null,null,null,null,null];(statearr_12674[(0)] = state_machine__6817__auto__);
(statearr_12674[(1)] = (1));
return statearr_12674;
});
var state_machine__6817__auto____1 = (function (state_12660){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_12660);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e12675){if((e12675 instanceof Object))
{var ex__6820__auto__ = e12675;var statearr_12676_12684 = state_12660;(statearr_12676_12684[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12660);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12675;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12685 = state_12660;
state_12660 = G__12685;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_12660){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_12660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto__))
})();var state__6833__auto__ = (function (){var statearr_12677 = f__6832__auto__.call(null);(statearr_12677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto__);
return statearr_12677;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto__))
);
return c__6831__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6831__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto__){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto__){
return (function (state_12759){var state_val_12760 = (state_12759[(1)]);if((state_val_12760 === (7)))
{var inst_12741 = (state_12759[(2)]);var state_12759__$1 = state_12759;var statearr_12761_12784 = state_12759__$1;(statearr_12761_12784[(2)] = inst_12741);
(statearr_12761_12784[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (1)))
{var inst_12735 = cljs.core.seq.call(null,coll);var inst_12736 = inst_12735;var state_12759__$1 = (function (){var statearr_12762 = state_12759;(statearr_12762[(7)] = inst_12736);
return statearr_12762;
})();var statearr_12763_12785 = state_12759__$1;(statearr_12763_12785[(2)] = null);
(statearr_12763_12785[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (4)))
{var inst_12736 = (state_12759[(7)]);var inst_12739 = cljs.core.first.call(null,inst_12736);var state_12759__$1 = state_12759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12759__$1,(7),ch,inst_12739);
} else
{if((state_val_12760 === (13)))
{var inst_12753 = (state_12759[(2)]);var state_12759__$1 = state_12759;var statearr_12764_12786 = state_12759__$1;(statearr_12764_12786[(2)] = inst_12753);
(statearr_12764_12786[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (6)))
{var inst_12744 = (state_12759[(2)]);var state_12759__$1 = state_12759;if(cljs.core.truth_(inst_12744))
{var statearr_12765_12787 = state_12759__$1;(statearr_12765_12787[(1)] = (8));
} else
{var statearr_12766_12788 = state_12759__$1;(statearr_12766_12788[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (3)))
{var inst_12757 = (state_12759[(2)]);var state_12759__$1 = state_12759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12759__$1,inst_12757);
} else
{if((state_val_12760 === (12)))
{var state_12759__$1 = state_12759;var statearr_12767_12789 = state_12759__$1;(statearr_12767_12789[(2)] = null);
(statearr_12767_12789[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (2)))
{var inst_12736 = (state_12759[(7)]);var state_12759__$1 = state_12759;if(cljs.core.truth_(inst_12736))
{var statearr_12768_12790 = state_12759__$1;(statearr_12768_12790[(1)] = (4));
} else
{var statearr_12769_12791 = state_12759__$1;(statearr_12769_12791[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (11)))
{var inst_12750 = cljs.core.async.close_BANG_.call(null,ch);var state_12759__$1 = state_12759;var statearr_12770_12792 = state_12759__$1;(statearr_12770_12792[(2)] = inst_12750);
(statearr_12770_12792[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (9)))
{var state_12759__$1 = state_12759;if(cljs.core.truth_(close_QMARK_))
{var statearr_12771_12793 = state_12759__$1;(statearr_12771_12793[(1)] = (11));
} else
{var statearr_12772_12794 = state_12759__$1;(statearr_12772_12794[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (5)))
{var inst_12736 = (state_12759[(7)]);var state_12759__$1 = state_12759;var statearr_12773_12795 = state_12759__$1;(statearr_12773_12795[(2)] = inst_12736);
(statearr_12773_12795[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (10)))
{var inst_12755 = (state_12759[(2)]);var state_12759__$1 = state_12759;var statearr_12774_12796 = state_12759__$1;(statearr_12774_12796[(2)] = inst_12755);
(statearr_12774_12796[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (8)))
{var inst_12736 = (state_12759[(7)]);var inst_12746 = cljs.core.next.call(null,inst_12736);var inst_12736__$1 = inst_12746;var state_12759__$1 = (function (){var statearr_12775 = state_12759;(statearr_12775[(7)] = inst_12736__$1);
return statearr_12775;
})();var statearr_12776_12797 = state_12759__$1;(statearr_12776_12797[(2)] = null);
(statearr_12776_12797[(1)] = (2));
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
});})(c__6831__auto__))
;return ((function (switch__6816__auto__,c__6831__auto__){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_12780 = [null,null,null,null,null,null,null,null];(statearr_12780[(0)] = state_machine__6817__auto__);
(statearr_12780[(1)] = (1));
return statearr_12780;
});
var state_machine__6817__auto____1 = (function (state_12759){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_12759);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e12781){if((e12781 instanceof Object))
{var ex__6820__auto__ = e12781;var statearr_12782_12798 = state_12759;(statearr_12782_12798[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12759);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12781;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12799 = state_12759;
state_12759 = G__12799;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_12759){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_12759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto__))
})();var state__6833__auto__ = (function (){var statearr_12783 = f__6832__auto__.call(null);(statearr_12783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto__);
return statearr_12783;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto__))
);
return c__6831__auto__;
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
cljs.core.async.Mux = (function (){var obj12801 = {};return obj12801;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3614__auto__ = _;if(and__3614__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3614__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4262__auto__ = (((_ == null))?null:_);return (function (){var or__3626__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12803 = {};return obj12803;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13025 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13025 = (function (cs,ch,mult,meta13026){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13026 = meta13026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13025.cljs$lang$type = true;
cljs.core.async.t13025.cljs$lang$ctorStr = "cljs.core.async/t13025";
cljs.core.async.t13025.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t13025");
});})(cs))
;
cljs.core.async.t13025.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13025.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13025.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13025.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13025.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13025.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13027){var self__ = this;
var _13027__$1 = this;return self__.meta13026;
});})(cs))
;
cljs.core.async.t13025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13027,meta13026__$1){var self__ = this;
var _13027__$1 = this;return (new cljs.core.async.t13025(self__.cs,self__.ch,self__.mult,meta13026__$1));
});})(cs))
;
cljs.core.async.__GT_t13025 = ((function (cs){
return (function __GT_t13025(cs__$1,ch__$1,mult__$1,meta13026){return (new cljs.core.async.t13025(cs__$1,ch__$1,mult__$1,meta13026));
});})(cs))
;
}
return (new cljs.core.async.t13025(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6831__auto___13246 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___13246,cs,m,dchan,dctr,done){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___13246,cs,m,dchan,dctr,done){
return (function (state_13158){var state_val_13159 = (state_13158[(1)]);if((state_val_13159 === (7)))
{var inst_13154 = (state_13158[(2)]);var state_13158__$1 = state_13158;var statearr_13160_13247 = state_13158__$1;(statearr_13160_13247[(2)] = inst_13154);
(statearr_13160_13247[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (20)))
{var inst_13059 = (state_13158[(7)]);var inst_13069 = cljs.core.first.call(null,inst_13059);var inst_13070 = cljs.core.nth.call(null,inst_13069,(0),null);var inst_13071 = cljs.core.nth.call(null,inst_13069,(1),null);var state_13158__$1 = (function (){var statearr_13161 = state_13158;(statearr_13161[(8)] = inst_13070);
return statearr_13161;
})();if(cljs.core.truth_(inst_13071))
{var statearr_13162_13248 = state_13158__$1;(statearr_13162_13248[(1)] = (22));
} else
{var statearr_13163_13249 = state_13158__$1;(statearr_13163_13249[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (27)))
{var inst_13101 = (state_13158[(9)]);var inst_13106 = (state_13158[(10)]);var inst_13099 = (state_13158[(11)]);var inst_13030 = (state_13158[(12)]);var inst_13106__$1 = cljs.core._nth.call(null,inst_13099,inst_13101);var inst_13107 = cljs.core.async.put_BANG_.call(null,inst_13106__$1,inst_13030,done);var state_13158__$1 = (function (){var statearr_13164 = state_13158;(statearr_13164[(10)] = inst_13106__$1);
return statearr_13164;
})();if(cljs.core.truth_(inst_13107))
{var statearr_13165_13250 = state_13158__$1;(statearr_13165_13250[(1)] = (30));
} else
{var statearr_13166_13251 = state_13158__$1;(statearr_13166_13251[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (1)))
{var state_13158__$1 = state_13158;var statearr_13167_13252 = state_13158__$1;(statearr_13167_13252[(2)] = null);
(statearr_13167_13252[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (24)))
{var inst_13059 = (state_13158[(7)]);var inst_13076 = (state_13158[(2)]);var inst_13077 = cljs.core.next.call(null,inst_13059);var inst_13039 = inst_13077;var inst_13040 = null;var inst_13041 = (0);var inst_13042 = (0);var state_13158__$1 = (function (){var statearr_13168 = state_13158;(statearr_13168[(13)] = inst_13041);
(statearr_13168[(14)] = inst_13042);
(statearr_13168[(15)] = inst_13076);
(statearr_13168[(16)] = inst_13040);
(statearr_13168[(17)] = inst_13039);
return statearr_13168;
})();var statearr_13169_13253 = state_13158__$1;(statearr_13169_13253[(2)] = null);
(statearr_13169_13253[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (39)))
{var state_13158__$1 = state_13158;var statearr_13173_13254 = state_13158__$1;(statearr_13173_13254[(2)] = null);
(statearr_13173_13254[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (4)))
{var inst_13030 = (state_13158[(12)]);var inst_13030__$1 = (state_13158[(2)]);var inst_13031 = (inst_13030__$1 == null);var state_13158__$1 = (function (){var statearr_13174 = state_13158;(statearr_13174[(12)] = inst_13030__$1);
return statearr_13174;
})();if(cljs.core.truth_(inst_13031))
{var statearr_13175_13255 = state_13158__$1;(statearr_13175_13255[(1)] = (5));
} else
{var statearr_13176_13256 = state_13158__$1;(statearr_13176_13256[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (15)))
{var inst_13041 = (state_13158[(13)]);var inst_13042 = (state_13158[(14)]);var inst_13040 = (state_13158[(16)]);var inst_13039 = (state_13158[(17)]);var inst_13055 = (state_13158[(2)]);var inst_13056 = (inst_13042 + (1));var tmp13170 = inst_13041;var tmp13171 = inst_13040;var tmp13172 = inst_13039;var inst_13039__$1 = tmp13172;var inst_13040__$1 = tmp13171;var inst_13041__$1 = tmp13170;var inst_13042__$1 = inst_13056;var state_13158__$1 = (function (){var statearr_13177 = state_13158;(statearr_13177[(13)] = inst_13041__$1);
(statearr_13177[(14)] = inst_13042__$1);
(statearr_13177[(18)] = inst_13055);
(statearr_13177[(16)] = inst_13040__$1);
(statearr_13177[(17)] = inst_13039__$1);
return statearr_13177;
})();var statearr_13178_13257 = state_13158__$1;(statearr_13178_13257[(2)] = null);
(statearr_13178_13257[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (21)))
{var inst_13080 = (state_13158[(2)]);var state_13158__$1 = state_13158;var statearr_13182_13258 = state_13158__$1;(statearr_13182_13258[(2)] = inst_13080);
(statearr_13182_13258[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (31)))
{var inst_13106 = (state_13158[(10)]);var inst_13110 = done.call(null,null);var inst_13111 = cljs.core.async.untap_STAR_.call(null,m,inst_13106);var state_13158__$1 = (function (){var statearr_13183 = state_13158;(statearr_13183[(19)] = inst_13110);
return statearr_13183;
})();var statearr_13184_13259 = state_13158__$1;(statearr_13184_13259[(2)] = inst_13111);
(statearr_13184_13259[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (32)))
{var inst_13098 = (state_13158[(20)]);var inst_13101 = (state_13158[(9)]);var inst_13099 = (state_13158[(11)]);var inst_13100 = (state_13158[(21)]);var inst_13113 = (state_13158[(2)]);var inst_13114 = (inst_13101 + (1));var tmp13179 = inst_13098;var tmp13180 = inst_13099;var tmp13181 = inst_13100;var inst_13098__$1 = tmp13179;var inst_13099__$1 = tmp13180;var inst_13100__$1 = tmp13181;var inst_13101__$1 = inst_13114;var state_13158__$1 = (function (){var statearr_13185 = state_13158;(statearr_13185[(22)] = inst_13113);
(statearr_13185[(20)] = inst_13098__$1);
(statearr_13185[(9)] = inst_13101__$1);
(statearr_13185[(11)] = inst_13099__$1);
(statearr_13185[(21)] = inst_13100__$1);
return statearr_13185;
})();var statearr_13186_13260 = state_13158__$1;(statearr_13186_13260[(2)] = null);
(statearr_13186_13260[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (40)))
{var inst_13126 = (state_13158[(23)]);var inst_13130 = done.call(null,null);var inst_13131 = cljs.core.async.untap_STAR_.call(null,m,inst_13126);var state_13158__$1 = (function (){var statearr_13187 = state_13158;(statearr_13187[(24)] = inst_13130);
return statearr_13187;
})();var statearr_13188_13261 = state_13158__$1;(statearr_13188_13261[(2)] = inst_13131);
(statearr_13188_13261[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (33)))
{var inst_13117 = (state_13158[(25)]);var inst_13119 = cljs.core.chunked_seq_QMARK_.call(null,inst_13117);var state_13158__$1 = state_13158;if(inst_13119)
{var statearr_13189_13262 = state_13158__$1;(statearr_13189_13262[(1)] = (36));
} else
{var statearr_13190_13263 = state_13158__$1;(statearr_13190_13263[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (13)))
{var inst_13049 = (state_13158[(26)]);var inst_13052 = cljs.core.async.close_BANG_.call(null,inst_13049);var state_13158__$1 = state_13158;var statearr_13191_13264 = state_13158__$1;(statearr_13191_13264[(2)] = inst_13052);
(statearr_13191_13264[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (22)))
{var inst_13070 = (state_13158[(8)]);var inst_13073 = cljs.core.async.close_BANG_.call(null,inst_13070);var state_13158__$1 = state_13158;var statearr_13192_13265 = state_13158__$1;(statearr_13192_13265[(2)] = inst_13073);
(statearr_13192_13265[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (36)))
{var inst_13117 = (state_13158[(25)]);var inst_13121 = cljs.core.chunk_first.call(null,inst_13117);var inst_13122 = cljs.core.chunk_rest.call(null,inst_13117);var inst_13123 = cljs.core.count.call(null,inst_13121);var inst_13098 = inst_13122;var inst_13099 = inst_13121;var inst_13100 = inst_13123;var inst_13101 = (0);var state_13158__$1 = (function (){var statearr_13193 = state_13158;(statearr_13193[(20)] = inst_13098);
(statearr_13193[(9)] = inst_13101);
(statearr_13193[(11)] = inst_13099);
(statearr_13193[(21)] = inst_13100);
return statearr_13193;
})();var statearr_13194_13266 = state_13158__$1;(statearr_13194_13266[(2)] = null);
(statearr_13194_13266[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (41)))
{var inst_13117 = (state_13158[(25)]);var inst_13133 = (state_13158[(2)]);var inst_13134 = cljs.core.next.call(null,inst_13117);var inst_13098 = inst_13134;var inst_13099 = null;var inst_13100 = (0);var inst_13101 = (0);var state_13158__$1 = (function (){var statearr_13195 = state_13158;(statearr_13195[(20)] = inst_13098);
(statearr_13195[(27)] = inst_13133);
(statearr_13195[(9)] = inst_13101);
(statearr_13195[(11)] = inst_13099);
(statearr_13195[(21)] = inst_13100);
return statearr_13195;
})();var statearr_13196_13267 = state_13158__$1;(statearr_13196_13267[(2)] = null);
(statearr_13196_13267[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (43)))
{var state_13158__$1 = state_13158;var statearr_13197_13268 = state_13158__$1;(statearr_13197_13268[(2)] = null);
(statearr_13197_13268[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (29)))
{var inst_13142 = (state_13158[(2)]);var state_13158__$1 = state_13158;var statearr_13198_13269 = state_13158__$1;(statearr_13198_13269[(2)] = inst_13142);
(statearr_13198_13269[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (44)))
{var inst_13151 = (state_13158[(2)]);var state_13158__$1 = (function (){var statearr_13199 = state_13158;(statearr_13199[(28)] = inst_13151);
return statearr_13199;
})();var statearr_13200_13270 = state_13158__$1;(statearr_13200_13270[(2)] = null);
(statearr_13200_13270[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (6)))
{var inst_13090 = (state_13158[(29)]);var inst_13089 = cljs.core.deref.call(null,cs);var inst_13090__$1 = cljs.core.keys.call(null,inst_13089);var inst_13091 = cljs.core.count.call(null,inst_13090__$1);var inst_13092 = cljs.core.reset_BANG_.call(null,dctr,inst_13091);var inst_13097 = cljs.core.seq.call(null,inst_13090__$1);var inst_13098 = inst_13097;var inst_13099 = null;var inst_13100 = (0);var inst_13101 = (0);var state_13158__$1 = (function (){var statearr_13201 = state_13158;(statearr_13201[(20)] = inst_13098);
(statearr_13201[(9)] = inst_13101);
(statearr_13201[(11)] = inst_13099);
(statearr_13201[(21)] = inst_13100);
(statearr_13201[(30)] = inst_13092);
(statearr_13201[(29)] = inst_13090__$1);
return statearr_13201;
})();var statearr_13202_13271 = state_13158__$1;(statearr_13202_13271[(2)] = null);
(statearr_13202_13271[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (28)))
{var inst_13098 = (state_13158[(20)]);var inst_13117 = (state_13158[(25)]);var inst_13117__$1 = cljs.core.seq.call(null,inst_13098);var state_13158__$1 = (function (){var statearr_13203 = state_13158;(statearr_13203[(25)] = inst_13117__$1);
return statearr_13203;
})();if(inst_13117__$1)
{var statearr_13204_13272 = state_13158__$1;(statearr_13204_13272[(1)] = (33));
} else
{var statearr_13205_13273 = state_13158__$1;(statearr_13205_13273[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (25)))
{var inst_13101 = (state_13158[(9)]);var inst_13100 = (state_13158[(21)]);var inst_13103 = (inst_13101 < inst_13100);var inst_13104 = inst_13103;var state_13158__$1 = state_13158;if(cljs.core.truth_(inst_13104))
{var statearr_13206_13274 = state_13158__$1;(statearr_13206_13274[(1)] = (27));
} else
{var statearr_13207_13275 = state_13158__$1;(statearr_13207_13275[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (34)))
{var state_13158__$1 = state_13158;var statearr_13208_13276 = state_13158__$1;(statearr_13208_13276[(2)] = null);
(statearr_13208_13276[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (17)))
{var state_13158__$1 = state_13158;var statearr_13209_13277 = state_13158__$1;(statearr_13209_13277[(2)] = null);
(statearr_13209_13277[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (3)))
{var inst_13156 = (state_13158[(2)]);var state_13158__$1 = state_13158;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13158__$1,inst_13156);
} else
{if((state_val_13159 === (12)))
{var inst_13085 = (state_13158[(2)]);var state_13158__$1 = state_13158;var statearr_13210_13278 = state_13158__$1;(statearr_13210_13278[(2)] = inst_13085);
(statearr_13210_13278[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (2)))
{var state_13158__$1 = state_13158;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13158__$1,(4),ch);
} else
{if((state_val_13159 === (23)))
{var state_13158__$1 = state_13158;var statearr_13211_13279 = state_13158__$1;(statearr_13211_13279[(2)] = null);
(statearr_13211_13279[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (35)))
{var inst_13140 = (state_13158[(2)]);var state_13158__$1 = state_13158;var statearr_13212_13280 = state_13158__$1;(statearr_13212_13280[(2)] = inst_13140);
(statearr_13212_13280[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (19)))
{var inst_13059 = (state_13158[(7)]);var inst_13063 = cljs.core.chunk_first.call(null,inst_13059);var inst_13064 = cljs.core.chunk_rest.call(null,inst_13059);var inst_13065 = cljs.core.count.call(null,inst_13063);var inst_13039 = inst_13064;var inst_13040 = inst_13063;var inst_13041 = inst_13065;var inst_13042 = (0);var state_13158__$1 = (function (){var statearr_13213 = state_13158;(statearr_13213[(13)] = inst_13041);
(statearr_13213[(14)] = inst_13042);
(statearr_13213[(16)] = inst_13040);
(statearr_13213[(17)] = inst_13039);
return statearr_13213;
})();var statearr_13214_13281 = state_13158__$1;(statearr_13214_13281[(2)] = null);
(statearr_13214_13281[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (11)))
{var inst_13059 = (state_13158[(7)]);var inst_13039 = (state_13158[(17)]);var inst_13059__$1 = cljs.core.seq.call(null,inst_13039);var state_13158__$1 = (function (){var statearr_13215 = state_13158;(statearr_13215[(7)] = inst_13059__$1);
return statearr_13215;
})();if(inst_13059__$1)
{var statearr_13216_13282 = state_13158__$1;(statearr_13216_13282[(1)] = (16));
} else
{var statearr_13217_13283 = state_13158__$1;(statearr_13217_13283[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (9)))
{var inst_13087 = (state_13158[(2)]);var state_13158__$1 = state_13158;var statearr_13218_13284 = state_13158__$1;(statearr_13218_13284[(2)] = inst_13087);
(statearr_13218_13284[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (5)))
{var inst_13037 = cljs.core.deref.call(null,cs);var inst_13038 = cljs.core.seq.call(null,inst_13037);var inst_13039 = inst_13038;var inst_13040 = null;var inst_13041 = (0);var inst_13042 = (0);var state_13158__$1 = (function (){var statearr_13219 = state_13158;(statearr_13219[(13)] = inst_13041);
(statearr_13219[(14)] = inst_13042);
(statearr_13219[(16)] = inst_13040);
(statearr_13219[(17)] = inst_13039);
return statearr_13219;
})();var statearr_13220_13285 = state_13158__$1;(statearr_13220_13285[(2)] = null);
(statearr_13220_13285[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (14)))
{var state_13158__$1 = state_13158;var statearr_13221_13286 = state_13158__$1;(statearr_13221_13286[(2)] = null);
(statearr_13221_13286[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (45)))
{var inst_13148 = (state_13158[(2)]);var state_13158__$1 = state_13158;var statearr_13222_13287 = state_13158__$1;(statearr_13222_13287[(2)] = inst_13148);
(statearr_13222_13287[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (26)))
{var inst_13090 = (state_13158[(29)]);var inst_13144 = (state_13158[(2)]);var inst_13145 = cljs.core.seq.call(null,inst_13090);var state_13158__$1 = (function (){var statearr_13223 = state_13158;(statearr_13223[(31)] = inst_13144);
return statearr_13223;
})();if(inst_13145)
{var statearr_13224_13288 = state_13158__$1;(statearr_13224_13288[(1)] = (42));
} else
{var statearr_13225_13289 = state_13158__$1;(statearr_13225_13289[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (16)))
{var inst_13059 = (state_13158[(7)]);var inst_13061 = cljs.core.chunked_seq_QMARK_.call(null,inst_13059);var state_13158__$1 = state_13158;if(inst_13061)
{var statearr_13226_13290 = state_13158__$1;(statearr_13226_13290[(1)] = (19));
} else
{var statearr_13227_13291 = state_13158__$1;(statearr_13227_13291[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (38)))
{var inst_13137 = (state_13158[(2)]);var state_13158__$1 = state_13158;var statearr_13228_13292 = state_13158__$1;(statearr_13228_13292[(2)] = inst_13137);
(statearr_13228_13292[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (30)))
{var state_13158__$1 = state_13158;var statearr_13229_13293 = state_13158__$1;(statearr_13229_13293[(2)] = null);
(statearr_13229_13293[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (10)))
{var inst_13042 = (state_13158[(14)]);var inst_13040 = (state_13158[(16)]);var inst_13048 = cljs.core._nth.call(null,inst_13040,inst_13042);var inst_13049 = cljs.core.nth.call(null,inst_13048,(0),null);var inst_13050 = cljs.core.nth.call(null,inst_13048,(1),null);var state_13158__$1 = (function (){var statearr_13230 = state_13158;(statearr_13230[(26)] = inst_13049);
return statearr_13230;
})();if(cljs.core.truth_(inst_13050))
{var statearr_13231_13294 = state_13158__$1;(statearr_13231_13294[(1)] = (13));
} else
{var statearr_13232_13295 = state_13158__$1;(statearr_13232_13295[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (18)))
{var inst_13083 = (state_13158[(2)]);var state_13158__$1 = state_13158;var statearr_13233_13296 = state_13158__$1;(statearr_13233_13296[(2)] = inst_13083);
(statearr_13233_13296[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (42)))
{var state_13158__$1 = state_13158;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13158__$1,(45),dchan);
} else
{if((state_val_13159 === (37)))
{var inst_13126 = (state_13158[(23)]);var inst_13117 = (state_13158[(25)]);var inst_13030 = (state_13158[(12)]);var inst_13126__$1 = cljs.core.first.call(null,inst_13117);var inst_13127 = cljs.core.async.put_BANG_.call(null,inst_13126__$1,inst_13030,done);var state_13158__$1 = (function (){var statearr_13234 = state_13158;(statearr_13234[(23)] = inst_13126__$1);
return statearr_13234;
})();if(cljs.core.truth_(inst_13127))
{var statearr_13235_13297 = state_13158__$1;(statearr_13235_13297[(1)] = (39));
} else
{var statearr_13236_13298 = state_13158__$1;(statearr_13236_13298[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13159 === (8)))
{var inst_13041 = (state_13158[(13)]);var inst_13042 = (state_13158[(14)]);var inst_13044 = (inst_13042 < inst_13041);var inst_13045 = inst_13044;var state_13158__$1 = state_13158;if(cljs.core.truth_(inst_13045))
{var statearr_13237_13299 = state_13158__$1;(statearr_13237_13299[(1)] = (10));
} else
{var statearr_13238_13300 = state_13158__$1;(statearr_13238_13300[(1)] = (11));
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
});})(c__6831__auto___13246,cs,m,dchan,dctr,done))
;return ((function (switch__6816__auto__,c__6831__auto___13246,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_13242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13242[(0)] = state_machine__6817__auto__);
(statearr_13242[(1)] = (1));
return statearr_13242;
});
var state_machine__6817__auto____1 = (function (state_13158){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_13158);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e13243){if((e13243 instanceof Object))
{var ex__6820__auto__ = e13243;var statearr_13244_13301 = state_13158;(statearr_13244_13301[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13158);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13243;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13302 = state_13158;
state_13158 = G__13302;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_13158){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_13158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___13246,cs,m,dchan,dctr,done))
})();var state__6833__auto__ = (function (){var statearr_13245 = f__6832__auto__.call(null);(statearr_13245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___13246);
return statearr_13245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___13246,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj13304 = {};return obj13304;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3614__auto__ = m;if(and__3614__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4262__auto__ = (((m == null))?null:m);return (function (){var or__3626__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t13424 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13424 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13425){
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
this.meta13425 = meta13425;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13424.cljs$lang$type = true;
cljs.core.async.t13424.cljs$lang$ctorStr = "cljs.core.async/t13424";
cljs.core.async.t13424.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t13424");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13424.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13424.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13424.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13424.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13424.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13424.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13424.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13424.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13426){var self__ = this;
var _13426__$1 = this;return self__.meta13425;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13426,meta13425__$1){var self__ = this;
var _13426__$1 = this;return (new cljs.core.async.t13424(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13425__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13424 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13424(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13425){return (new cljs.core.async.t13424(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13425));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13424(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6831__auto___13543 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___13543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___13543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13496){var state_val_13497 = (state_13496[(1)]);if((state_val_13497 === (7)))
{var inst_13440 = (state_13496[(7)]);var inst_13445 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13440);var state_13496__$1 = state_13496;var statearr_13498_13544 = state_13496__$1;(statearr_13498_13544[(2)] = inst_13445);
(statearr_13498_13544[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (20)))
{var inst_13455 = (state_13496[(8)]);var state_13496__$1 = state_13496;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13496__$1,(23),out,inst_13455);
} else
{if((state_val_13497 === (1)))
{var inst_13430 = (state_13496[(9)]);var inst_13430__$1 = calc_state.call(null);var inst_13431 = cljs.core.seq_QMARK_.call(null,inst_13430__$1);var state_13496__$1 = (function (){var statearr_13499 = state_13496;(statearr_13499[(9)] = inst_13430__$1);
return statearr_13499;
})();if(inst_13431)
{var statearr_13500_13545 = state_13496__$1;(statearr_13500_13545[(1)] = (2));
} else
{var statearr_13501_13546 = state_13496__$1;(statearr_13501_13546[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (24)))
{var inst_13448 = (state_13496[(10)]);var inst_13440 = inst_13448;var state_13496__$1 = (function (){var statearr_13502 = state_13496;(statearr_13502[(7)] = inst_13440);
return statearr_13502;
})();var statearr_13503_13547 = state_13496__$1;(statearr_13503_13547[(2)] = null);
(statearr_13503_13547[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (4)))
{var inst_13430 = (state_13496[(9)]);var inst_13436 = (state_13496[(2)]);var inst_13437 = cljs.core.get.call(null,inst_13436,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13438 = cljs.core.get.call(null,inst_13436,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13439 = cljs.core.get.call(null,inst_13436,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13440 = inst_13430;var state_13496__$1 = (function (){var statearr_13504 = state_13496;(statearr_13504[(7)] = inst_13440);
(statearr_13504[(11)] = inst_13437);
(statearr_13504[(12)] = inst_13439);
(statearr_13504[(13)] = inst_13438);
return statearr_13504;
})();var statearr_13505_13548 = state_13496__$1;(statearr_13505_13548[(2)] = null);
(statearr_13505_13548[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (15)))
{var state_13496__$1 = state_13496;var statearr_13506_13549 = state_13496__$1;(statearr_13506_13549[(2)] = null);
(statearr_13506_13549[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (21)))
{var inst_13448 = (state_13496[(10)]);var inst_13440 = inst_13448;var state_13496__$1 = (function (){var statearr_13507 = state_13496;(statearr_13507[(7)] = inst_13440);
return statearr_13507;
})();var statearr_13508_13550 = state_13496__$1;(statearr_13508_13550[(2)] = null);
(statearr_13508_13550[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (13)))
{var inst_13492 = (state_13496[(2)]);var state_13496__$1 = state_13496;var statearr_13509_13551 = state_13496__$1;(statearr_13509_13551[(2)] = inst_13492);
(statearr_13509_13551[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (22)))
{var inst_13490 = (state_13496[(2)]);var state_13496__$1 = state_13496;var statearr_13510_13552 = state_13496__$1;(statearr_13510_13552[(2)] = inst_13490);
(statearr_13510_13552[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (6)))
{var inst_13494 = (state_13496[(2)]);var state_13496__$1 = state_13496;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13496__$1,inst_13494);
} else
{if((state_val_13497 === (25)))
{var state_13496__$1 = state_13496;var statearr_13511_13553 = state_13496__$1;(statearr_13511_13553[(2)] = null);
(statearr_13511_13553[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (17)))
{var inst_13470 = (state_13496[(14)]);var state_13496__$1 = state_13496;var statearr_13512_13554 = state_13496__$1;(statearr_13512_13554[(2)] = inst_13470);
(statearr_13512_13554[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (3)))
{var inst_13430 = (state_13496[(9)]);var state_13496__$1 = state_13496;var statearr_13513_13555 = state_13496__$1;(statearr_13513_13555[(2)] = inst_13430);
(statearr_13513_13555[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (12)))
{var inst_13456 = (state_13496[(15)]);var inst_13451 = (state_13496[(16)]);var inst_13470 = (state_13496[(14)]);var inst_13470__$1 = inst_13451.call(null,inst_13456);var state_13496__$1 = (function (){var statearr_13514 = state_13496;(statearr_13514[(14)] = inst_13470__$1);
return statearr_13514;
})();if(cljs.core.truth_(inst_13470__$1))
{var statearr_13515_13556 = state_13496__$1;(statearr_13515_13556[(1)] = (17));
} else
{var statearr_13516_13557 = state_13496__$1;(statearr_13516_13557[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (2)))
{var inst_13430 = (state_13496[(9)]);var inst_13433 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13430);var state_13496__$1 = state_13496;var statearr_13517_13558 = state_13496__$1;(statearr_13517_13558[(2)] = inst_13433);
(statearr_13517_13558[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (23)))
{var inst_13481 = (state_13496[(2)]);var state_13496__$1 = state_13496;if(cljs.core.truth_(inst_13481))
{var statearr_13518_13559 = state_13496__$1;(statearr_13518_13559[(1)] = (24));
} else
{var statearr_13519_13560 = state_13496__$1;(statearr_13519_13560[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (19)))
{var inst_13478 = (state_13496[(2)]);var state_13496__$1 = state_13496;if(cljs.core.truth_(inst_13478))
{var statearr_13520_13561 = state_13496__$1;(statearr_13520_13561[(1)] = (20));
} else
{var statearr_13521_13562 = state_13496__$1;(statearr_13521_13562[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (11)))
{var inst_13455 = (state_13496[(8)]);var inst_13461 = (inst_13455 == null);var state_13496__$1 = state_13496;if(cljs.core.truth_(inst_13461))
{var statearr_13522_13563 = state_13496__$1;(statearr_13522_13563[(1)] = (14));
} else
{var statearr_13523_13564 = state_13496__$1;(statearr_13523_13564[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (9)))
{var inst_13448 = (state_13496[(10)]);var inst_13448__$1 = (state_13496[(2)]);var inst_13449 = cljs.core.get.call(null,inst_13448__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13450 = cljs.core.get.call(null,inst_13448__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13451 = cljs.core.get.call(null,inst_13448__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13496__$1 = (function (){var statearr_13524 = state_13496;(statearr_13524[(16)] = inst_13451);
(statearr_13524[(17)] = inst_13450);
(statearr_13524[(10)] = inst_13448__$1);
return statearr_13524;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13496__$1,(10),inst_13449);
} else
{if((state_val_13497 === (5)))
{var inst_13440 = (state_13496[(7)]);var inst_13443 = cljs.core.seq_QMARK_.call(null,inst_13440);var state_13496__$1 = state_13496;if(inst_13443)
{var statearr_13525_13565 = state_13496__$1;(statearr_13525_13565[(1)] = (7));
} else
{var statearr_13526_13566 = state_13496__$1;(statearr_13526_13566[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (14)))
{var inst_13456 = (state_13496[(15)]);var inst_13463 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13456);var state_13496__$1 = state_13496;var statearr_13527_13567 = state_13496__$1;(statearr_13527_13567[(2)] = inst_13463);
(statearr_13527_13567[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (26)))
{var inst_13486 = (state_13496[(2)]);var state_13496__$1 = state_13496;var statearr_13528_13568 = state_13496__$1;(statearr_13528_13568[(2)] = inst_13486);
(statearr_13528_13568[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (16)))
{var inst_13466 = (state_13496[(2)]);var inst_13467 = calc_state.call(null);var inst_13440 = inst_13467;var state_13496__$1 = (function (){var statearr_13529 = state_13496;(statearr_13529[(7)] = inst_13440);
(statearr_13529[(18)] = inst_13466);
return statearr_13529;
})();var statearr_13530_13569 = state_13496__$1;(statearr_13530_13569[(2)] = null);
(statearr_13530_13569[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (10)))
{var inst_13456 = (state_13496[(15)]);var inst_13455 = (state_13496[(8)]);var inst_13454 = (state_13496[(2)]);var inst_13455__$1 = cljs.core.nth.call(null,inst_13454,(0),null);var inst_13456__$1 = cljs.core.nth.call(null,inst_13454,(1),null);var inst_13457 = (inst_13455__$1 == null);var inst_13458 = cljs.core._EQ_.call(null,inst_13456__$1,change);var inst_13459 = (inst_13457) || (inst_13458);var state_13496__$1 = (function (){var statearr_13531 = state_13496;(statearr_13531[(15)] = inst_13456__$1);
(statearr_13531[(8)] = inst_13455__$1);
return statearr_13531;
})();if(cljs.core.truth_(inst_13459))
{var statearr_13532_13570 = state_13496__$1;(statearr_13532_13570[(1)] = (11));
} else
{var statearr_13533_13571 = state_13496__$1;(statearr_13533_13571[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (18)))
{var inst_13456 = (state_13496[(15)]);var inst_13451 = (state_13496[(16)]);var inst_13450 = (state_13496[(17)]);var inst_13473 = cljs.core.empty_QMARK_.call(null,inst_13451);var inst_13474 = inst_13450.call(null,inst_13456);var inst_13475 = cljs.core.not.call(null,inst_13474);var inst_13476 = (inst_13473) && (inst_13475);var state_13496__$1 = state_13496;var statearr_13534_13572 = state_13496__$1;(statearr_13534_13572[(2)] = inst_13476);
(statearr_13534_13572[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (8)))
{var inst_13440 = (state_13496[(7)]);var state_13496__$1 = state_13496;var statearr_13535_13573 = state_13496__$1;(statearr_13535_13573[(2)] = inst_13440);
(statearr_13535_13573[(1)] = (9));
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
});})(c__6831__auto___13543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6816__auto__,c__6831__auto___13543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_13539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13539[(0)] = state_machine__6817__auto__);
(statearr_13539[(1)] = (1));
return statearr_13539;
});
var state_machine__6817__auto____1 = (function (state_13496){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_13496);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e13540){if((e13540 instanceof Object))
{var ex__6820__auto__ = e13540;var statearr_13541_13574 = state_13496;(statearr_13541_13574[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13496);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13540;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13575 = state_13496;
state_13496 = G__13575;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_13496){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_13496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___13543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6833__auto__ = (function (){var statearr_13542 = f__6832__auto__.call(null);(statearr_13542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___13543);
return statearr_13542;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___13543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj13577 = {};return obj13577;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3614__auto__ = p;if(and__3614__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3614__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4262__auto__ = (((p == null))?null:p);return (function (){var or__3626__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3614__auto__ = p;if(and__3614__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3614__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4262__auto__ = (((p == null))?null:p);return (function (){var or__3626__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3614__auto__ = p;if(and__3614__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3614__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4262__auto__ = (((p == null))?null:p);return (function (){var or__3626__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3614__auto__ = p;if(and__3614__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3614__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4262__auto__ = (((p == null))?null:p);return (function (){var or__3626__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4262__auto__)]);if(or__3626__auto__)
{return or__3626__auto__;
} else
{var or__3626__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3626__auto____$1)
{return or__3626__auto____$1;
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
return (function (topic){var or__3626__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3626__auto__,mults){
return (function (p1__13578_SHARP_){if(cljs.core.truth_(p1__13578_SHARP_.call(null,topic)))
{return p1__13578_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13578_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3626__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13701 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13701 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13702){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13702 = meta13702;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13701.cljs$lang$type = true;
cljs.core.async.t13701.cljs$lang$ctorStr = "cljs.core.async/t13701";
cljs.core.async.t13701.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t13701");
});})(mults,ensure_mult))
;
cljs.core.async.t13701.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13701.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13701.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13701.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13701.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13701.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13701.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13703){var self__ = this;
var _13703__$1 = this;return self__.meta13702;
});})(mults,ensure_mult))
;
cljs.core.async.t13701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13703,meta13702__$1){var self__ = this;
var _13703__$1 = this;return (new cljs.core.async.t13701(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13702__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13701 = ((function (mults,ensure_mult){
return (function __GT_t13701(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13702){return (new cljs.core.async.t13701(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13702));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13701(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6831__auto___13823 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___13823,mults,ensure_mult,p){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___13823,mults,ensure_mult,p){
return (function (state_13775){var state_val_13776 = (state_13775[(1)]);if((state_val_13776 === (7)))
{var inst_13771 = (state_13775[(2)]);var state_13775__$1 = state_13775;var statearr_13777_13824 = state_13775__$1;(statearr_13777_13824[(2)] = inst_13771);
(statearr_13777_13824[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (20)))
{var state_13775__$1 = state_13775;var statearr_13778_13825 = state_13775__$1;(statearr_13778_13825[(2)] = null);
(statearr_13778_13825[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (1)))
{var state_13775__$1 = state_13775;var statearr_13779_13826 = state_13775__$1;(statearr_13779_13826[(2)] = null);
(statearr_13779_13826[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (24)))
{var inst_13754 = (state_13775[(7)]);var inst_13763 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13754);var state_13775__$1 = state_13775;var statearr_13780_13827 = state_13775__$1;(statearr_13780_13827[(2)] = inst_13763);
(statearr_13780_13827[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (4)))
{var inst_13706 = (state_13775[(8)]);var inst_13706__$1 = (state_13775[(2)]);var inst_13707 = (inst_13706__$1 == null);var state_13775__$1 = (function (){var statearr_13781 = state_13775;(statearr_13781[(8)] = inst_13706__$1);
return statearr_13781;
})();if(cljs.core.truth_(inst_13707))
{var statearr_13782_13828 = state_13775__$1;(statearr_13782_13828[(1)] = (5));
} else
{var statearr_13783_13829 = state_13775__$1;(statearr_13783_13829[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (15)))
{var inst_13748 = (state_13775[(2)]);var state_13775__$1 = state_13775;var statearr_13784_13830 = state_13775__$1;(statearr_13784_13830[(2)] = inst_13748);
(statearr_13784_13830[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (21)))
{var inst_13768 = (state_13775[(2)]);var state_13775__$1 = (function (){var statearr_13785 = state_13775;(statearr_13785[(9)] = inst_13768);
return statearr_13785;
})();var statearr_13786_13831 = state_13775__$1;(statearr_13786_13831[(2)] = null);
(statearr_13786_13831[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (13)))
{var inst_13730 = (state_13775[(10)]);var inst_13732 = cljs.core.chunked_seq_QMARK_.call(null,inst_13730);var state_13775__$1 = state_13775;if(inst_13732)
{var statearr_13787_13832 = state_13775__$1;(statearr_13787_13832[(1)] = (16));
} else
{var statearr_13788_13833 = state_13775__$1;(statearr_13788_13833[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (22)))
{var inst_13760 = (state_13775[(2)]);var state_13775__$1 = state_13775;if(cljs.core.truth_(inst_13760))
{var statearr_13789_13834 = state_13775__$1;(statearr_13789_13834[(1)] = (23));
} else
{var statearr_13790_13835 = state_13775__$1;(statearr_13790_13835[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (6)))
{var inst_13706 = (state_13775[(8)]);var inst_13756 = (state_13775[(11)]);var inst_13754 = (state_13775[(7)]);var inst_13754__$1 = topic_fn.call(null,inst_13706);var inst_13755 = cljs.core.deref.call(null,mults);var inst_13756__$1 = cljs.core.get.call(null,inst_13755,inst_13754__$1);var state_13775__$1 = (function (){var statearr_13791 = state_13775;(statearr_13791[(11)] = inst_13756__$1);
(statearr_13791[(7)] = inst_13754__$1);
return statearr_13791;
})();if(cljs.core.truth_(inst_13756__$1))
{var statearr_13792_13836 = state_13775__$1;(statearr_13792_13836[(1)] = (19));
} else
{var statearr_13793_13837 = state_13775__$1;(statearr_13793_13837[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (25)))
{var inst_13765 = (state_13775[(2)]);var state_13775__$1 = state_13775;var statearr_13794_13838 = state_13775__$1;(statearr_13794_13838[(2)] = inst_13765);
(statearr_13794_13838[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (17)))
{var inst_13730 = (state_13775[(10)]);var inst_13739 = cljs.core.first.call(null,inst_13730);var inst_13740 = cljs.core.async.muxch_STAR_.call(null,inst_13739);var inst_13741 = cljs.core.async.close_BANG_.call(null,inst_13740);var inst_13742 = cljs.core.next.call(null,inst_13730);var inst_13716 = inst_13742;var inst_13717 = null;var inst_13718 = (0);var inst_13719 = (0);var state_13775__$1 = (function (){var statearr_13795 = state_13775;(statearr_13795[(12)] = inst_13717);
(statearr_13795[(13)] = inst_13719);
(statearr_13795[(14)] = inst_13718);
(statearr_13795[(15)] = inst_13741);
(statearr_13795[(16)] = inst_13716);
return statearr_13795;
})();var statearr_13796_13839 = state_13775__$1;(statearr_13796_13839[(2)] = null);
(statearr_13796_13839[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (3)))
{var inst_13773 = (state_13775[(2)]);var state_13775__$1 = state_13775;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13775__$1,inst_13773);
} else
{if((state_val_13776 === (12)))
{var inst_13750 = (state_13775[(2)]);var state_13775__$1 = state_13775;var statearr_13797_13840 = state_13775__$1;(statearr_13797_13840[(2)] = inst_13750);
(statearr_13797_13840[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (2)))
{var state_13775__$1 = state_13775;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13775__$1,(4),ch);
} else
{if((state_val_13776 === (23)))
{var state_13775__$1 = state_13775;var statearr_13798_13841 = state_13775__$1;(statearr_13798_13841[(2)] = null);
(statearr_13798_13841[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (19)))
{var inst_13706 = (state_13775[(8)]);var inst_13756 = (state_13775[(11)]);var inst_13758 = cljs.core.async.muxch_STAR_.call(null,inst_13756);var state_13775__$1 = state_13775;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13775__$1,(22),inst_13758,inst_13706);
} else
{if((state_val_13776 === (11)))
{var inst_13730 = (state_13775[(10)]);var inst_13716 = (state_13775[(16)]);var inst_13730__$1 = cljs.core.seq.call(null,inst_13716);var state_13775__$1 = (function (){var statearr_13799 = state_13775;(statearr_13799[(10)] = inst_13730__$1);
return statearr_13799;
})();if(inst_13730__$1)
{var statearr_13800_13842 = state_13775__$1;(statearr_13800_13842[(1)] = (13));
} else
{var statearr_13801_13843 = state_13775__$1;(statearr_13801_13843[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (9)))
{var inst_13752 = (state_13775[(2)]);var state_13775__$1 = state_13775;var statearr_13802_13844 = state_13775__$1;(statearr_13802_13844[(2)] = inst_13752);
(statearr_13802_13844[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (5)))
{var inst_13713 = cljs.core.deref.call(null,mults);var inst_13714 = cljs.core.vals.call(null,inst_13713);var inst_13715 = cljs.core.seq.call(null,inst_13714);var inst_13716 = inst_13715;var inst_13717 = null;var inst_13718 = (0);var inst_13719 = (0);var state_13775__$1 = (function (){var statearr_13803 = state_13775;(statearr_13803[(12)] = inst_13717);
(statearr_13803[(13)] = inst_13719);
(statearr_13803[(14)] = inst_13718);
(statearr_13803[(16)] = inst_13716);
return statearr_13803;
})();var statearr_13804_13845 = state_13775__$1;(statearr_13804_13845[(2)] = null);
(statearr_13804_13845[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (14)))
{var state_13775__$1 = state_13775;var statearr_13808_13846 = state_13775__$1;(statearr_13808_13846[(2)] = null);
(statearr_13808_13846[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (16)))
{var inst_13730 = (state_13775[(10)]);var inst_13734 = cljs.core.chunk_first.call(null,inst_13730);var inst_13735 = cljs.core.chunk_rest.call(null,inst_13730);var inst_13736 = cljs.core.count.call(null,inst_13734);var inst_13716 = inst_13735;var inst_13717 = inst_13734;var inst_13718 = inst_13736;var inst_13719 = (0);var state_13775__$1 = (function (){var statearr_13809 = state_13775;(statearr_13809[(12)] = inst_13717);
(statearr_13809[(13)] = inst_13719);
(statearr_13809[(14)] = inst_13718);
(statearr_13809[(16)] = inst_13716);
return statearr_13809;
})();var statearr_13810_13847 = state_13775__$1;(statearr_13810_13847[(2)] = null);
(statearr_13810_13847[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (10)))
{var inst_13717 = (state_13775[(12)]);var inst_13719 = (state_13775[(13)]);var inst_13718 = (state_13775[(14)]);var inst_13716 = (state_13775[(16)]);var inst_13724 = cljs.core._nth.call(null,inst_13717,inst_13719);var inst_13725 = cljs.core.async.muxch_STAR_.call(null,inst_13724);var inst_13726 = cljs.core.async.close_BANG_.call(null,inst_13725);var inst_13727 = (inst_13719 + (1));var tmp13805 = inst_13717;var tmp13806 = inst_13718;var tmp13807 = inst_13716;var inst_13716__$1 = tmp13807;var inst_13717__$1 = tmp13805;var inst_13718__$1 = tmp13806;var inst_13719__$1 = inst_13727;var state_13775__$1 = (function (){var statearr_13811 = state_13775;(statearr_13811[(12)] = inst_13717__$1);
(statearr_13811[(13)] = inst_13719__$1);
(statearr_13811[(14)] = inst_13718__$1);
(statearr_13811[(16)] = inst_13716__$1);
(statearr_13811[(17)] = inst_13726);
return statearr_13811;
})();var statearr_13812_13848 = state_13775__$1;(statearr_13812_13848[(2)] = null);
(statearr_13812_13848[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (18)))
{var inst_13745 = (state_13775[(2)]);var state_13775__$1 = state_13775;var statearr_13813_13849 = state_13775__$1;(statearr_13813_13849[(2)] = inst_13745);
(statearr_13813_13849[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13776 === (8)))
{var inst_13719 = (state_13775[(13)]);var inst_13718 = (state_13775[(14)]);var inst_13721 = (inst_13719 < inst_13718);var inst_13722 = inst_13721;var state_13775__$1 = state_13775;if(cljs.core.truth_(inst_13722))
{var statearr_13814_13850 = state_13775__$1;(statearr_13814_13850[(1)] = (10));
} else
{var statearr_13815_13851 = state_13775__$1;(statearr_13815_13851[(1)] = (11));
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
});})(c__6831__auto___13823,mults,ensure_mult,p))
;return ((function (switch__6816__auto__,c__6831__auto___13823,mults,ensure_mult,p){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_13819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13819[(0)] = state_machine__6817__auto__);
(statearr_13819[(1)] = (1));
return statearr_13819;
});
var state_machine__6817__auto____1 = (function (state_13775){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_13775);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e13820){if((e13820 instanceof Object))
{var ex__6820__auto__ = e13820;var statearr_13821_13852 = state_13775;(statearr_13821_13852[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13775);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13820;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13853 = state_13775;
state_13775 = G__13853;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_13775){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_13775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___13823,mults,ensure_mult,p))
})();var state__6833__auto__ = (function (){var statearr_13822 = f__6832__auto__.call(null);(statearr_13822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___13823);
return statearr_13822;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___13823,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6831__auto___13990 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___13990,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___13990,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13960){var state_val_13961 = (state_13960[(1)]);if((state_val_13961 === (7)))
{var state_13960__$1 = state_13960;var statearr_13962_13991 = state_13960__$1;(statearr_13962_13991[(2)] = null);
(statearr_13962_13991[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13961 === (1)))
{var state_13960__$1 = state_13960;var statearr_13963_13992 = state_13960__$1;(statearr_13963_13992[(2)] = null);
(statearr_13963_13992[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13961 === (4)))
{var inst_13924 = (state_13960[(7)]);var inst_13926 = (inst_13924 < cnt);var state_13960__$1 = state_13960;if(cljs.core.truth_(inst_13926))
{var statearr_13964_13993 = state_13960__$1;(statearr_13964_13993[(1)] = (6));
} else
{var statearr_13965_13994 = state_13960__$1;(statearr_13965_13994[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13961 === (15)))
{var inst_13956 = (state_13960[(2)]);var state_13960__$1 = state_13960;var statearr_13966_13995 = state_13960__$1;(statearr_13966_13995[(2)] = inst_13956);
(statearr_13966_13995[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13961 === (13)))
{var inst_13949 = cljs.core.async.close_BANG_.call(null,out);var state_13960__$1 = state_13960;var statearr_13967_13996 = state_13960__$1;(statearr_13967_13996[(2)] = inst_13949);
(statearr_13967_13996[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13961 === (6)))
{var state_13960__$1 = state_13960;var statearr_13968_13997 = state_13960__$1;(statearr_13968_13997[(2)] = null);
(statearr_13968_13997[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13961 === (3)))
{var inst_13958 = (state_13960[(2)]);var state_13960__$1 = state_13960;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13960__$1,inst_13958);
} else
{if((state_val_13961 === (12)))
{var inst_13946 = (state_13960[(8)]);var inst_13946__$1 = (state_13960[(2)]);var inst_13947 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13946__$1);var state_13960__$1 = (function (){var statearr_13969 = state_13960;(statearr_13969[(8)] = inst_13946__$1);
return statearr_13969;
})();if(cljs.core.truth_(inst_13947))
{var statearr_13970_13998 = state_13960__$1;(statearr_13970_13998[(1)] = (13));
} else
{var statearr_13971_13999 = state_13960__$1;(statearr_13971_13999[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13961 === (2)))
{var inst_13923 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13924 = (0);var state_13960__$1 = (function (){var statearr_13972 = state_13960;(statearr_13972[(9)] = inst_13923);
(statearr_13972[(7)] = inst_13924);
return statearr_13972;
})();var statearr_13973_14000 = state_13960__$1;(statearr_13973_14000[(2)] = null);
(statearr_13973_14000[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13961 === (11)))
{var inst_13924 = (state_13960[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13960,(10),Object,null,(9));var inst_13933 = chs__$1.call(null,inst_13924);var inst_13934 = done.call(null,inst_13924);var inst_13935 = cljs.core.async.take_BANG_.call(null,inst_13933,inst_13934);var state_13960__$1 = state_13960;var statearr_13974_14001 = state_13960__$1;(statearr_13974_14001[(2)] = inst_13935);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13960__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13961 === (9)))
{var inst_13924 = (state_13960[(7)]);var inst_13937 = (state_13960[(2)]);var inst_13938 = (inst_13924 + (1));var inst_13924__$1 = inst_13938;var state_13960__$1 = (function (){var statearr_13975 = state_13960;(statearr_13975[(10)] = inst_13937);
(statearr_13975[(7)] = inst_13924__$1);
return statearr_13975;
})();var statearr_13976_14002 = state_13960__$1;(statearr_13976_14002[(2)] = null);
(statearr_13976_14002[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13961 === (5)))
{var inst_13944 = (state_13960[(2)]);var state_13960__$1 = (function (){var statearr_13977 = state_13960;(statearr_13977[(11)] = inst_13944);
return statearr_13977;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13960__$1,(12),dchan);
} else
{if((state_val_13961 === (14)))
{var inst_13946 = (state_13960[(8)]);var inst_13951 = cljs.core.apply.call(null,f,inst_13946);var state_13960__$1 = state_13960;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13960__$1,(16),out,inst_13951);
} else
{if((state_val_13961 === (16)))
{var inst_13953 = (state_13960[(2)]);var state_13960__$1 = (function (){var statearr_13978 = state_13960;(statearr_13978[(12)] = inst_13953);
return statearr_13978;
})();var statearr_13979_14003 = state_13960__$1;(statearr_13979_14003[(2)] = null);
(statearr_13979_14003[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13961 === (10)))
{var inst_13928 = (state_13960[(2)]);var inst_13929 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13960__$1 = (function (){var statearr_13980 = state_13960;(statearr_13980[(13)] = inst_13928);
return statearr_13980;
})();var statearr_13981_14004 = state_13960__$1;(statearr_13981_14004[(2)] = inst_13929);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13960__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13961 === (8)))
{var inst_13942 = (state_13960[(2)]);var state_13960__$1 = state_13960;var statearr_13982_14005 = state_13960__$1;(statearr_13982_14005[(2)] = inst_13942);
(statearr_13982_14005[(1)] = (5));
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
});})(c__6831__auto___13990,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6816__auto__,c__6831__auto___13990,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_13986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13986[(0)] = state_machine__6817__auto__);
(statearr_13986[(1)] = (1));
return statearr_13986;
});
var state_machine__6817__auto____1 = (function (state_13960){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_13960);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e13987){if((e13987 instanceof Object))
{var ex__6820__auto__ = e13987;var statearr_13988_14006 = state_13960;(statearr_13988_14006[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13960);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13987;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14007 = state_13960;
state_13960 = G__14007;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_13960){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_13960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___13990,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6833__auto__ = (function (){var statearr_13989 = f__6832__auto__.call(null);(statearr_13989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___13990);
return statearr_13989;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___13990,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6831__auto___14115 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___14115,out){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___14115,out){
return (function (state_14091){var state_val_14092 = (state_14091[(1)]);if((state_val_14092 === (7)))
{var inst_14071 = (state_14091[(7)]);var inst_14070 = (state_14091[(8)]);var inst_14070__$1 = (state_14091[(2)]);var inst_14071__$1 = cljs.core.nth.call(null,inst_14070__$1,(0),null);var inst_14072 = cljs.core.nth.call(null,inst_14070__$1,(1),null);var inst_14073 = (inst_14071__$1 == null);var state_14091__$1 = (function (){var statearr_14093 = state_14091;(statearr_14093[(9)] = inst_14072);
(statearr_14093[(7)] = inst_14071__$1);
(statearr_14093[(8)] = inst_14070__$1);
return statearr_14093;
})();if(cljs.core.truth_(inst_14073))
{var statearr_14094_14116 = state_14091__$1;(statearr_14094_14116[(1)] = (8));
} else
{var statearr_14095_14117 = state_14091__$1;(statearr_14095_14117[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14092 === (1)))
{var inst_14062 = cljs.core.vec.call(null,chs);var inst_14063 = inst_14062;var state_14091__$1 = (function (){var statearr_14096 = state_14091;(statearr_14096[(10)] = inst_14063);
return statearr_14096;
})();var statearr_14097_14118 = state_14091__$1;(statearr_14097_14118[(2)] = null);
(statearr_14097_14118[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14092 === (4)))
{var inst_14063 = (state_14091[(10)]);var state_14091__$1 = state_14091;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14091__$1,(7),inst_14063);
} else
{if((state_val_14092 === (6)))
{var inst_14087 = (state_14091[(2)]);var state_14091__$1 = state_14091;var statearr_14098_14119 = state_14091__$1;(statearr_14098_14119[(2)] = inst_14087);
(statearr_14098_14119[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14092 === (3)))
{var inst_14089 = (state_14091[(2)]);var state_14091__$1 = state_14091;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14091__$1,inst_14089);
} else
{if((state_val_14092 === (2)))
{var inst_14063 = (state_14091[(10)]);var inst_14065 = cljs.core.count.call(null,inst_14063);var inst_14066 = (inst_14065 > (0));var state_14091__$1 = state_14091;if(cljs.core.truth_(inst_14066))
{var statearr_14100_14120 = state_14091__$1;(statearr_14100_14120[(1)] = (4));
} else
{var statearr_14101_14121 = state_14091__$1;(statearr_14101_14121[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14092 === (11)))
{var inst_14063 = (state_14091[(10)]);var inst_14080 = (state_14091[(2)]);var tmp14099 = inst_14063;var inst_14063__$1 = tmp14099;var state_14091__$1 = (function (){var statearr_14102 = state_14091;(statearr_14102[(11)] = inst_14080);
(statearr_14102[(10)] = inst_14063__$1);
return statearr_14102;
})();var statearr_14103_14122 = state_14091__$1;(statearr_14103_14122[(2)] = null);
(statearr_14103_14122[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14092 === (9)))
{var inst_14071 = (state_14091[(7)]);var state_14091__$1 = state_14091;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14091__$1,(11),out,inst_14071);
} else
{if((state_val_14092 === (5)))
{var inst_14085 = cljs.core.async.close_BANG_.call(null,out);var state_14091__$1 = state_14091;var statearr_14104_14123 = state_14091__$1;(statearr_14104_14123[(2)] = inst_14085);
(statearr_14104_14123[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14092 === (10)))
{var inst_14083 = (state_14091[(2)]);var state_14091__$1 = state_14091;var statearr_14105_14124 = state_14091__$1;(statearr_14105_14124[(2)] = inst_14083);
(statearr_14105_14124[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14092 === (8)))
{var inst_14072 = (state_14091[(9)]);var inst_14063 = (state_14091[(10)]);var inst_14071 = (state_14091[(7)]);var inst_14070 = (state_14091[(8)]);var inst_14075 = (function (){var c = inst_14072;var v = inst_14071;var vec__14068 = inst_14070;var cs = inst_14063;return ((function (c,v,vec__14068,cs,inst_14072,inst_14063,inst_14071,inst_14070,state_val_14092,c__6831__auto___14115,out){
return (function (p1__14008_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14008_SHARP_);
});
;})(c,v,vec__14068,cs,inst_14072,inst_14063,inst_14071,inst_14070,state_val_14092,c__6831__auto___14115,out))
})();var inst_14076 = cljs.core.filterv.call(null,inst_14075,inst_14063);var inst_14063__$1 = inst_14076;var state_14091__$1 = (function (){var statearr_14106 = state_14091;(statearr_14106[(10)] = inst_14063__$1);
return statearr_14106;
})();var statearr_14107_14125 = state_14091__$1;(statearr_14107_14125[(2)] = null);
(statearr_14107_14125[(1)] = (2));
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
});})(c__6831__auto___14115,out))
;return ((function (switch__6816__auto__,c__6831__auto___14115,out){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_14111 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14111[(0)] = state_machine__6817__auto__);
(statearr_14111[(1)] = (1));
return statearr_14111;
});
var state_machine__6817__auto____1 = (function (state_14091){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_14091);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e14112){if((e14112 instanceof Object))
{var ex__6820__auto__ = e14112;var statearr_14113_14126 = state_14091;(statearr_14113_14126[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14091);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14112;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14127 = state_14091;
state_14091 = G__14127;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_14091){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_14091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___14115,out))
})();var state__6833__auto__ = (function (){var statearr_14114 = f__6832__auto__.call(null);(statearr_14114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___14115);
return statearr_14114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___14115,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6831__auto___14220 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___14220,out){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___14220,out){
return (function (state_14197){var state_val_14198 = (state_14197[(1)]);if((state_val_14198 === (7)))
{var inst_14179 = (state_14197[(7)]);var inst_14179__$1 = (state_14197[(2)]);var inst_14180 = (inst_14179__$1 == null);var inst_14181 = cljs.core.not.call(null,inst_14180);var state_14197__$1 = (function (){var statearr_14199 = state_14197;(statearr_14199[(7)] = inst_14179__$1);
return statearr_14199;
})();if(inst_14181)
{var statearr_14200_14221 = state_14197__$1;(statearr_14200_14221[(1)] = (8));
} else
{var statearr_14201_14222 = state_14197__$1;(statearr_14201_14222[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14198 === (1)))
{var inst_14174 = (0);var state_14197__$1 = (function (){var statearr_14202 = state_14197;(statearr_14202[(8)] = inst_14174);
return statearr_14202;
})();var statearr_14203_14223 = state_14197__$1;(statearr_14203_14223[(2)] = null);
(statearr_14203_14223[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14198 === (4)))
{var state_14197__$1 = state_14197;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14197__$1,(7),ch);
} else
{if((state_val_14198 === (6)))
{var inst_14192 = (state_14197[(2)]);var state_14197__$1 = state_14197;var statearr_14204_14224 = state_14197__$1;(statearr_14204_14224[(2)] = inst_14192);
(statearr_14204_14224[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14198 === (3)))
{var inst_14194 = (state_14197[(2)]);var inst_14195 = cljs.core.async.close_BANG_.call(null,out);var state_14197__$1 = (function (){var statearr_14205 = state_14197;(statearr_14205[(9)] = inst_14194);
return statearr_14205;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14197__$1,inst_14195);
} else
{if((state_val_14198 === (2)))
{var inst_14174 = (state_14197[(8)]);var inst_14176 = (inst_14174 < n);var state_14197__$1 = state_14197;if(cljs.core.truth_(inst_14176))
{var statearr_14206_14225 = state_14197__$1;(statearr_14206_14225[(1)] = (4));
} else
{var statearr_14207_14226 = state_14197__$1;(statearr_14207_14226[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14198 === (11)))
{var inst_14174 = (state_14197[(8)]);var inst_14184 = (state_14197[(2)]);var inst_14185 = (inst_14174 + (1));var inst_14174__$1 = inst_14185;var state_14197__$1 = (function (){var statearr_14208 = state_14197;(statearr_14208[(10)] = inst_14184);
(statearr_14208[(8)] = inst_14174__$1);
return statearr_14208;
})();var statearr_14209_14227 = state_14197__$1;(statearr_14209_14227[(2)] = null);
(statearr_14209_14227[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14198 === (9)))
{var state_14197__$1 = state_14197;var statearr_14210_14228 = state_14197__$1;(statearr_14210_14228[(2)] = null);
(statearr_14210_14228[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14198 === (5)))
{var state_14197__$1 = state_14197;var statearr_14211_14229 = state_14197__$1;(statearr_14211_14229[(2)] = null);
(statearr_14211_14229[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14198 === (10)))
{var inst_14189 = (state_14197[(2)]);var state_14197__$1 = state_14197;var statearr_14212_14230 = state_14197__$1;(statearr_14212_14230[(2)] = inst_14189);
(statearr_14212_14230[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14198 === (8)))
{var inst_14179 = (state_14197[(7)]);var state_14197__$1 = state_14197;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14197__$1,(11),out,inst_14179);
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
});})(c__6831__auto___14220,out))
;return ((function (switch__6816__auto__,c__6831__auto___14220,out){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_14216 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14216[(0)] = state_machine__6817__auto__);
(statearr_14216[(1)] = (1));
return statearr_14216;
});
var state_machine__6817__auto____1 = (function (state_14197){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_14197);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e14217){if((e14217 instanceof Object))
{var ex__6820__auto__ = e14217;var statearr_14218_14231 = state_14197;(statearr_14218_14231[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14197);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14217;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14232 = state_14197;
state_14197 = G__14232;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_14197){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_14197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___14220,out))
})();var state__6833__auto__ = (function (){var statearr_14219 = f__6832__auto__.call(null);(statearr_14219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___14220);
return statearr_14219;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___14220,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14240 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14240 = (function (ch,f,map_LT_,meta14241){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14241 = meta14241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14240.cljs$lang$type = true;
cljs.core.async.t14240.cljs$lang$ctorStr = "cljs.core.async/t14240";
cljs.core.async.t14240.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t14240");
});
cljs.core.async.t14240.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14240.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14240.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14240.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14243 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14243 = (function (fn1,_,meta14241,ch,f,map_LT_,meta14244){
this.fn1 = fn1;
this._ = _;
this.meta14241 = meta14241;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14244 = meta14244;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14243.cljs$lang$type = true;
cljs.core.async.t14243.cljs$lang$ctorStr = "cljs.core.async/t14243";
cljs.core.async.t14243.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t14243");
});})(___$1))
;
cljs.core.async.t14243.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14243.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14243.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14243.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14233_SHARP_){return f1.call(null,(((p1__14233_SHARP_ == null))?null:self__.f.call(null,p1__14233_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14243.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14245){var self__ = this;
var _14245__$1 = this;return self__.meta14244;
});})(___$1))
;
cljs.core.async.t14243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14245,meta14244__$1){var self__ = this;
var _14245__$1 = this;return (new cljs.core.async.t14243(self__.fn1,self__._,self__.meta14241,self__.ch,self__.f,self__.map_LT_,meta14244__$1));
});})(___$1))
;
cljs.core.async.__GT_t14243 = ((function (___$1){
return (function __GT_t14243(fn1__$1,___$2,meta14241__$1,ch__$2,f__$2,map_LT___$2,meta14244){return (new cljs.core.async.t14243(fn1__$1,___$2,meta14241__$1,ch__$2,f__$2,map_LT___$2,meta14244));
});})(___$1))
;
}
return (new cljs.core.async.t14243(fn1,___$1,self__.meta14241,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3614__auto__ = ret;if(cljs.core.truth_(and__3614__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3614__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14240.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14240.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14240.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14242){var self__ = this;
var _14242__$1 = this;return self__.meta14241;
});
cljs.core.async.t14240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14242,meta14241__$1){var self__ = this;
var _14242__$1 = this;return (new cljs.core.async.t14240(self__.ch,self__.f,self__.map_LT_,meta14241__$1));
});
cljs.core.async.__GT_t14240 = (function __GT_t14240(ch__$1,f__$1,map_LT___$1,meta14241){return (new cljs.core.async.t14240(ch__$1,f__$1,map_LT___$1,meta14241));
});
}
return (new cljs.core.async.t14240(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14249 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14249 = (function (ch,f,map_GT_,meta14250){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14250 = meta14250;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14249.cljs$lang$type = true;
cljs.core.async.t14249.cljs$lang$ctorStr = "cljs.core.async/t14249";
cljs.core.async.t14249.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t14249");
});
cljs.core.async.t14249.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14249.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14249.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14249.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14249.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14249.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14251){var self__ = this;
var _14251__$1 = this;return self__.meta14250;
});
cljs.core.async.t14249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14251,meta14250__$1){var self__ = this;
var _14251__$1 = this;return (new cljs.core.async.t14249(self__.ch,self__.f,self__.map_GT_,meta14250__$1));
});
cljs.core.async.__GT_t14249 = (function __GT_t14249(ch__$1,f__$1,map_GT___$1,meta14250){return (new cljs.core.async.t14249(ch__$1,f__$1,map_GT___$1,meta14250));
});
}
return (new cljs.core.async.t14249(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14255 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14255 = (function (ch,p,filter_GT_,meta14256){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14256 = meta14256;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14255.cljs$lang$type = true;
cljs.core.async.t14255.cljs$lang$ctorStr = "cljs.core.async/t14255";
cljs.core.async.t14255.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t14255");
});
cljs.core.async.t14255.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14255.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14255.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14255.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14255.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14255.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14255.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14257){var self__ = this;
var _14257__$1 = this;return self__.meta14256;
});
cljs.core.async.t14255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14257,meta14256__$1){var self__ = this;
var _14257__$1 = this;return (new cljs.core.async.t14255(self__.ch,self__.p,self__.filter_GT_,meta14256__$1));
});
cljs.core.async.__GT_t14255 = (function __GT_t14255(ch__$1,p__$1,filter_GT___$1,meta14256){return (new cljs.core.async.t14255(ch__$1,p__$1,filter_GT___$1,meta14256));
});
}
return (new cljs.core.async.t14255(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6831__auto___14340 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___14340,out){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___14340,out){
return (function (state_14319){var state_val_14320 = (state_14319[(1)]);if((state_val_14320 === (7)))
{var inst_14315 = (state_14319[(2)]);var state_14319__$1 = state_14319;var statearr_14321_14341 = state_14319__$1;(statearr_14321_14341[(2)] = inst_14315);
(statearr_14321_14341[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14320 === (1)))
{var state_14319__$1 = state_14319;var statearr_14322_14342 = state_14319__$1;(statearr_14322_14342[(2)] = null);
(statearr_14322_14342[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14320 === (4)))
{var inst_14301 = (state_14319[(7)]);var inst_14301__$1 = (state_14319[(2)]);var inst_14302 = (inst_14301__$1 == null);var state_14319__$1 = (function (){var statearr_14323 = state_14319;(statearr_14323[(7)] = inst_14301__$1);
return statearr_14323;
})();if(cljs.core.truth_(inst_14302))
{var statearr_14324_14343 = state_14319__$1;(statearr_14324_14343[(1)] = (5));
} else
{var statearr_14325_14344 = state_14319__$1;(statearr_14325_14344[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14320 === (6)))
{var inst_14301 = (state_14319[(7)]);var inst_14306 = p.call(null,inst_14301);var state_14319__$1 = state_14319;if(cljs.core.truth_(inst_14306))
{var statearr_14326_14345 = state_14319__$1;(statearr_14326_14345[(1)] = (8));
} else
{var statearr_14327_14346 = state_14319__$1;(statearr_14327_14346[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14320 === (3)))
{var inst_14317 = (state_14319[(2)]);var state_14319__$1 = state_14319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14319__$1,inst_14317);
} else
{if((state_val_14320 === (2)))
{var state_14319__$1 = state_14319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14319__$1,(4),ch);
} else
{if((state_val_14320 === (11)))
{var inst_14309 = (state_14319[(2)]);var state_14319__$1 = state_14319;var statearr_14328_14347 = state_14319__$1;(statearr_14328_14347[(2)] = inst_14309);
(statearr_14328_14347[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14320 === (9)))
{var state_14319__$1 = state_14319;var statearr_14329_14348 = state_14319__$1;(statearr_14329_14348[(2)] = null);
(statearr_14329_14348[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14320 === (5)))
{var inst_14304 = cljs.core.async.close_BANG_.call(null,out);var state_14319__$1 = state_14319;var statearr_14330_14349 = state_14319__$1;(statearr_14330_14349[(2)] = inst_14304);
(statearr_14330_14349[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14320 === (10)))
{var inst_14312 = (state_14319[(2)]);var state_14319__$1 = (function (){var statearr_14331 = state_14319;(statearr_14331[(8)] = inst_14312);
return statearr_14331;
})();var statearr_14332_14350 = state_14319__$1;(statearr_14332_14350[(2)] = null);
(statearr_14332_14350[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14320 === (8)))
{var inst_14301 = (state_14319[(7)]);var state_14319__$1 = state_14319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14319__$1,(11),out,inst_14301);
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
});})(c__6831__auto___14340,out))
;return ((function (switch__6816__auto__,c__6831__auto___14340,out){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_14336 = [null,null,null,null,null,null,null,null,null];(statearr_14336[(0)] = state_machine__6817__auto__);
(statearr_14336[(1)] = (1));
return statearr_14336;
});
var state_machine__6817__auto____1 = (function (state_14319){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_14319);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e14337){if((e14337 instanceof Object))
{var ex__6820__auto__ = e14337;var statearr_14338_14351 = state_14319;(statearr_14338_14351[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14319);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14337;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14352 = state_14319;
state_14319 = G__14352;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_14319){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_14319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___14340,out))
})();var state__6833__auto__ = (function (){var statearr_14339 = f__6832__auto__.call(null);(statearr_14339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___14340);
return statearr_14339;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___14340,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6831__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto__){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto__){
return (function (state_14518){var state_val_14519 = (state_14518[(1)]);if((state_val_14519 === (7)))
{var inst_14514 = (state_14518[(2)]);var state_14518__$1 = state_14518;var statearr_14520_14561 = state_14518__$1;(statearr_14520_14561[(2)] = inst_14514);
(statearr_14520_14561[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14519 === (20)))
{var inst_14484 = (state_14518[(7)]);var inst_14495 = (state_14518[(2)]);var inst_14496 = cljs.core.next.call(null,inst_14484);var inst_14470 = inst_14496;var inst_14471 = null;var inst_14472 = (0);var inst_14473 = (0);var state_14518__$1 = (function (){var statearr_14521 = state_14518;(statearr_14521[(8)] = inst_14471);
(statearr_14521[(9)] = inst_14473);
(statearr_14521[(10)] = inst_14470);
(statearr_14521[(11)] = inst_14472);
(statearr_14521[(12)] = inst_14495);
return statearr_14521;
})();var statearr_14522_14562 = state_14518__$1;(statearr_14522_14562[(2)] = null);
(statearr_14522_14562[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14519 === (1)))
{var state_14518__$1 = state_14518;var statearr_14523_14563 = state_14518__$1;(statearr_14523_14563[(2)] = null);
(statearr_14523_14563[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14519 === (4)))
{var inst_14459 = (state_14518[(13)]);var inst_14459__$1 = (state_14518[(2)]);var inst_14460 = (inst_14459__$1 == null);var state_14518__$1 = (function (){var statearr_14524 = state_14518;(statearr_14524[(13)] = inst_14459__$1);
return statearr_14524;
})();if(cljs.core.truth_(inst_14460))
{var statearr_14525_14564 = state_14518__$1;(statearr_14525_14564[(1)] = (5));
} else
{var statearr_14526_14565 = state_14518__$1;(statearr_14526_14565[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14519 === (15)))
{var state_14518__$1 = state_14518;var statearr_14530_14566 = state_14518__$1;(statearr_14530_14566[(2)] = null);
(statearr_14530_14566[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14519 === (21)))
{var state_14518__$1 = state_14518;var statearr_14531_14567 = state_14518__$1;(statearr_14531_14567[(2)] = null);
(statearr_14531_14567[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14519 === (13)))
{var inst_14471 = (state_14518[(8)]);var inst_14473 = (state_14518[(9)]);var inst_14470 = (state_14518[(10)]);var inst_14472 = (state_14518[(11)]);var inst_14480 = (state_14518[(2)]);var inst_14481 = (inst_14473 + (1));var tmp14527 = inst_14471;var tmp14528 = inst_14470;var tmp14529 = inst_14472;var inst_14470__$1 = tmp14528;var inst_14471__$1 = tmp14527;var inst_14472__$1 = tmp14529;var inst_14473__$1 = inst_14481;var state_14518__$1 = (function (){var statearr_14532 = state_14518;(statearr_14532[(8)] = inst_14471__$1);
(statearr_14532[(9)] = inst_14473__$1);
(statearr_14532[(10)] = inst_14470__$1);
(statearr_14532[(11)] = inst_14472__$1);
(statearr_14532[(14)] = inst_14480);
return statearr_14532;
})();var statearr_14533_14568 = state_14518__$1;(statearr_14533_14568[(2)] = null);
(statearr_14533_14568[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14519 === (22)))
{var state_14518__$1 = state_14518;var statearr_14534_14569 = state_14518__$1;(statearr_14534_14569[(2)] = null);
(statearr_14534_14569[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14519 === (6)))
{var inst_14459 = (state_14518[(13)]);var inst_14468 = f.call(null,inst_14459);var inst_14469 = cljs.core.seq.call(null,inst_14468);var inst_14470 = inst_14469;var inst_14471 = null;var inst_14472 = (0);var inst_14473 = (0);var state_14518__$1 = (function (){var statearr_14535 = state_14518;(statearr_14535[(8)] = inst_14471);
(statearr_14535[(9)] = inst_14473);
(statearr_14535[(10)] = inst_14470);
(statearr_14535[(11)] = inst_14472);
return statearr_14535;
})();var statearr_14536_14570 = state_14518__$1;(statearr_14536_14570[(2)] = null);
(statearr_14536_14570[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14519 === (17)))
{var inst_14484 = (state_14518[(7)]);var inst_14488 = cljs.core.chunk_first.call(null,inst_14484);var inst_14489 = cljs.core.chunk_rest.call(null,inst_14484);var inst_14490 = cljs.core.count.call(null,inst_14488);var inst_14470 = inst_14489;var inst_14471 = inst_14488;var inst_14472 = inst_14490;var inst_14473 = (0);var state_14518__$1 = (function (){var statearr_14537 = state_14518;(statearr_14537[(8)] = inst_14471);
(statearr_14537[(9)] = inst_14473);
(statearr_14537[(10)] = inst_14470);
(statearr_14537[(11)] = inst_14472);
return statearr_14537;
})();var statearr_14538_14571 = state_14518__$1;(statearr_14538_14571[(2)] = null);
(statearr_14538_14571[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14519 === (3)))
{var inst_14516 = (state_14518[(2)]);var state_14518__$1 = state_14518;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14518__$1,inst_14516);
} else
{if((state_val_14519 === (12)))
{var inst_14504 = (state_14518[(2)]);var state_14518__$1 = state_14518;var statearr_14539_14572 = state_14518__$1;(statearr_14539_14572[(2)] = inst_14504);
(statearr_14539_14572[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14519 === (2)))
{var state_14518__$1 = state_14518;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14518__$1,(4),in$);
} else
{if((state_val_14519 === (23)))
{var inst_14512 = (state_14518[(2)]);var state_14518__$1 = state_14518;var statearr_14540_14573 = state_14518__$1;(statearr_14540_14573[(2)] = inst_14512);
(statearr_14540_14573[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14519 === (19)))
{var inst_14499 = (state_14518[(2)]);var state_14518__$1 = state_14518;var statearr_14541_14574 = state_14518__$1;(statearr_14541_14574[(2)] = inst_14499);
(statearr_14541_14574[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14519 === (11)))
{var inst_14470 = (state_14518[(10)]);var inst_14484 = (state_14518[(7)]);var inst_14484__$1 = cljs.core.seq.call(null,inst_14470);var state_14518__$1 = (function (){var statearr_14542 = state_14518;(statearr_14542[(7)] = inst_14484__$1);
return statearr_14542;
})();if(inst_14484__$1)
{var statearr_14543_14575 = state_14518__$1;(statearr_14543_14575[(1)] = (14));
} else
{var statearr_14544_14576 = state_14518__$1;(statearr_14544_14576[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14519 === (9)))
{var inst_14506 = (state_14518[(2)]);var inst_14507 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14518__$1 = (function (){var statearr_14545 = state_14518;(statearr_14545[(15)] = inst_14506);
return statearr_14545;
})();if(cljs.core.truth_(inst_14507))
{var statearr_14546_14577 = state_14518__$1;(statearr_14546_14577[(1)] = (21));
} else
{var statearr_14547_14578 = state_14518__$1;(statearr_14547_14578[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14519 === (5)))
{var inst_14462 = cljs.core.async.close_BANG_.call(null,out);var state_14518__$1 = state_14518;var statearr_14548_14579 = state_14518__$1;(statearr_14548_14579[(2)] = inst_14462);
(statearr_14548_14579[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14519 === (14)))
{var inst_14484 = (state_14518[(7)]);var inst_14486 = cljs.core.chunked_seq_QMARK_.call(null,inst_14484);var state_14518__$1 = state_14518;if(inst_14486)
{var statearr_14549_14580 = state_14518__$1;(statearr_14549_14580[(1)] = (17));
} else
{var statearr_14550_14581 = state_14518__$1;(statearr_14550_14581[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14519 === (16)))
{var inst_14502 = (state_14518[(2)]);var state_14518__$1 = state_14518;var statearr_14551_14582 = state_14518__$1;(statearr_14551_14582[(2)] = inst_14502);
(statearr_14551_14582[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14519 === (10)))
{var inst_14471 = (state_14518[(8)]);var inst_14473 = (state_14518[(9)]);var inst_14478 = cljs.core._nth.call(null,inst_14471,inst_14473);var state_14518__$1 = state_14518;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14518__$1,(13),out,inst_14478);
} else
{if((state_val_14519 === (18)))
{var inst_14484 = (state_14518[(7)]);var inst_14493 = cljs.core.first.call(null,inst_14484);var state_14518__$1 = state_14518;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14518__$1,(20),out,inst_14493);
} else
{if((state_val_14519 === (8)))
{var inst_14473 = (state_14518[(9)]);var inst_14472 = (state_14518[(11)]);var inst_14475 = (inst_14473 < inst_14472);var inst_14476 = inst_14475;var state_14518__$1 = state_14518;if(cljs.core.truth_(inst_14476))
{var statearr_14552_14583 = state_14518__$1;(statearr_14552_14583[(1)] = (10));
} else
{var statearr_14553_14584 = state_14518__$1;(statearr_14553_14584[(1)] = (11));
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
});})(c__6831__auto__))
;return ((function (switch__6816__auto__,c__6831__auto__){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_14557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14557[(0)] = state_machine__6817__auto__);
(statearr_14557[(1)] = (1));
return statearr_14557;
});
var state_machine__6817__auto____1 = (function (state_14518){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_14518);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e14558){if((e14558 instanceof Object))
{var ex__6820__auto__ = e14558;var statearr_14559_14585 = state_14518;(statearr_14559_14585[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14518);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14558;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14586 = state_14518;
state_14518 = G__14586;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_14518){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_14518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto__))
})();var state__6833__auto__ = (function (){var statearr_14560 = f__6832__auto__.call(null);(statearr_14560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto__);
return statearr_14560;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto__))
);
return c__6831__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6831__auto___14683 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___14683,out){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___14683,out){
return (function (state_14658){var state_val_14659 = (state_14658[(1)]);if((state_val_14659 === (7)))
{var inst_14653 = (state_14658[(2)]);var state_14658__$1 = state_14658;var statearr_14660_14684 = state_14658__$1;(statearr_14660_14684[(2)] = inst_14653);
(statearr_14660_14684[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14659 === (1)))
{var inst_14635 = null;var state_14658__$1 = (function (){var statearr_14661 = state_14658;(statearr_14661[(7)] = inst_14635);
return statearr_14661;
})();var statearr_14662_14685 = state_14658__$1;(statearr_14662_14685[(2)] = null);
(statearr_14662_14685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14659 === (4)))
{var inst_14638 = (state_14658[(8)]);var inst_14638__$1 = (state_14658[(2)]);var inst_14639 = (inst_14638__$1 == null);var inst_14640 = cljs.core.not.call(null,inst_14639);var state_14658__$1 = (function (){var statearr_14663 = state_14658;(statearr_14663[(8)] = inst_14638__$1);
return statearr_14663;
})();if(inst_14640)
{var statearr_14664_14686 = state_14658__$1;(statearr_14664_14686[(1)] = (5));
} else
{var statearr_14665_14687 = state_14658__$1;(statearr_14665_14687[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14659 === (6)))
{var state_14658__$1 = state_14658;var statearr_14666_14688 = state_14658__$1;(statearr_14666_14688[(2)] = null);
(statearr_14666_14688[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14659 === (3)))
{var inst_14655 = (state_14658[(2)]);var inst_14656 = cljs.core.async.close_BANG_.call(null,out);var state_14658__$1 = (function (){var statearr_14667 = state_14658;(statearr_14667[(9)] = inst_14655);
return statearr_14667;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14658__$1,inst_14656);
} else
{if((state_val_14659 === (2)))
{var state_14658__$1 = state_14658;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14658__$1,(4),ch);
} else
{if((state_val_14659 === (11)))
{var inst_14638 = (state_14658[(8)]);var inst_14647 = (state_14658[(2)]);var inst_14635 = inst_14638;var state_14658__$1 = (function (){var statearr_14668 = state_14658;(statearr_14668[(10)] = inst_14647);
(statearr_14668[(7)] = inst_14635);
return statearr_14668;
})();var statearr_14669_14689 = state_14658__$1;(statearr_14669_14689[(2)] = null);
(statearr_14669_14689[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14659 === (9)))
{var inst_14638 = (state_14658[(8)]);var state_14658__$1 = state_14658;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14658__$1,(11),out,inst_14638);
} else
{if((state_val_14659 === (5)))
{var inst_14638 = (state_14658[(8)]);var inst_14635 = (state_14658[(7)]);var inst_14642 = cljs.core._EQ_.call(null,inst_14638,inst_14635);var state_14658__$1 = state_14658;if(inst_14642)
{var statearr_14671_14690 = state_14658__$1;(statearr_14671_14690[(1)] = (8));
} else
{var statearr_14672_14691 = state_14658__$1;(statearr_14672_14691[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14659 === (10)))
{var inst_14650 = (state_14658[(2)]);var state_14658__$1 = state_14658;var statearr_14673_14692 = state_14658__$1;(statearr_14673_14692[(2)] = inst_14650);
(statearr_14673_14692[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14659 === (8)))
{var inst_14635 = (state_14658[(7)]);var tmp14670 = inst_14635;var inst_14635__$1 = tmp14670;var state_14658__$1 = (function (){var statearr_14674 = state_14658;(statearr_14674[(7)] = inst_14635__$1);
return statearr_14674;
})();var statearr_14675_14693 = state_14658__$1;(statearr_14675_14693[(2)] = null);
(statearr_14675_14693[(1)] = (2));
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
});})(c__6831__auto___14683,out))
;return ((function (switch__6816__auto__,c__6831__auto___14683,out){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_14679 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14679[(0)] = state_machine__6817__auto__);
(statearr_14679[(1)] = (1));
return statearr_14679;
});
var state_machine__6817__auto____1 = (function (state_14658){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_14658);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e14680){if((e14680 instanceof Object))
{var ex__6820__auto__ = e14680;var statearr_14681_14694 = state_14658;(statearr_14681_14694[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14658);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14680;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14695 = state_14658;
state_14658 = G__14695;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_14658){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_14658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___14683,out))
})();var state__6833__auto__ = (function (){var statearr_14682 = f__6832__auto__.call(null);(statearr_14682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___14683);
return statearr_14682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___14683,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6831__auto___14830 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___14830,out){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___14830,out){
return (function (state_14800){var state_val_14801 = (state_14800[(1)]);if((state_val_14801 === (7)))
{var inst_14796 = (state_14800[(2)]);var state_14800__$1 = state_14800;var statearr_14802_14831 = state_14800__$1;(statearr_14802_14831[(2)] = inst_14796);
(statearr_14802_14831[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14801 === (1)))
{var inst_14763 = (new Array(n));var inst_14764 = inst_14763;var inst_14765 = (0);var state_14800__$1 = (function (){var statearr_14803 = state_14800;(statearr_14803[(7)] = inst_14765);
(statearr_14803[(8)] = inst_14764);
return statearr_14803;
})();var statearr_14804_14832 = state_14800__$1;(statearr_14804_14832[(2)] = null);
(statearr_14804_14832[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14801 === (4)))
{var inst_14768 = (state_14800[(9)]);var inst_14768__$1 = (state_14800[(2)]);var inst_14769 = (inst_14768__$1 == null);var inst_14770 = cljs.core.not.call(null,inst_14769);var state_14800__$1 = (function (){var statearr_14805 = state_14800;(statearr_14805[(9)] = inst_14768__$1);
return statearr_14805;
})();if(inst_14770)
{var statearr_14806_14833 = state_14800__$1;(statearr_14806_14833[(1)] = (5));
} else
{var statearr_14807_14834 = state_14800__$1;(statearr_14807_14834[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14801 === (15)))
{var inst_14790 = (state_14800[(2)]);var state_14800__$1 = state_14800;var statearr_14808_14835 = state_14800__$1;(statearr_14808_14835[(2)] = inst_14790);
(statearr_14808_14835[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14801 === (13)))
{var state_14800__$1 = state_14800;var statearr_14809_14836 = state_14800__$1;(statearr_14809_14836[(2)] = null);
(statearr_14809_14836[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14801 === (6)))
{var inst_14765 = (state_14800[(7)]);var inst_14786 = (inst_14765 > (0));var state_14800__$1 = state_14800;if(cljs.core.truth_(inst_14786))
{var statearr_14810_14837 = state_14800__$1;(statearr_14810_14837[(1)] = (12));
} else
{var statearr_14811_14838 = state_14800__$1;(statearr_14811_14838[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14801 === (3)))
{var inst_14798 = (state_14800[(2)]);var state_14800__$1 = state_14800;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14800__$1,inst_14798);
} else
{if((state_val_14801 === (12)))
{var inst_14764 = (state_14800[(8)]);var inst_14788 = cljs.core.vec.call(null,inst_14764);var state_14800__$1 = state_14800;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14800__$1,(15),out,inst_14788);
} else
{if((state_val_14801 === (2)))
{var state_14800__$1 = state_14800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14800__$1,(4),ch);
} else
{if((state_val_14801 === (11)))
{var inst_14780 = (state_14800[(2)]);var inst_14781 = (new Array(n));var inst_14764 = inst_14781;var inst_14765 = (0);var state_14800__$1 = (function (){var statearr_14812 = state_14800;(statearr_14812[(7)] = inst_14765);
(statearr_14812[(10)] = inst_14780);
(statearr_14812[(8)] = inst_14764);
return statearr_14812;
})();var statearr_14813_14839 = state_14800__$1;(statearr_14813_14839[(2)] = null);
(statearr_14813_14839[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14801 === (9)))
{var inst_14764 = (state_14800[(8)]);var inst_14778 = cljs.core.vec.call(null,inst_14764);var state_14800__$1 = state_14800;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14800__$1,(11),out,inst_14778);
} else
{if((state_val_14801 === (5)))
{var inst_14765 = (state_14800[(7)]);var inst_14764 = (state_14800[(8)]);var inst_14773 = (state_14800[(11)]);var inst_14768 = (state_14800[(9)]);var inst_14772 = (inst_14764[inst_14765] = inst_14768);var inst_14773__$1 = (inst_14765 + (1));var inst_14774 = (inst_14773__$1 < n);var state_14800__$1 = (function (){var statearr_14814 = state_14800;(statearr_14814[(12)] = inst_14772);
(statearr_14814[(11)] = inst_14773__$1);
return statearr_14814;
})();if(cljs.core.truth_(inst_14774))
{var statearr_14815_14840 = state_14800__$1;(statearr_14815_14840[(1)] = (8));
} else
{var statearr_14816_14841 = state_14800__$1;(statearr_14816_14841[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14801 === (14)))
{var inst_14793 = (state_14800[(2)]);var inst_14794 = cljs.core.async.close_BANG_.call(null,out);var state_14800__$1 = (function (){var statearr_14818 = state_14800;(statearr_14818[(13)] = inst_14793);
return statearr_14818;
})();var statearr_14819_14842 = state_14800__$1;(statearr_14819_14842[(2)] = inst_14794);
(statearr_14819_14842[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14801 === (10)))
{var inst_14784 = (state_14800[(2)]);var state_14800__$1 = state_14800;var statearr_14820_14843 = state_14800__$1;(statearr_14820_14843[(2)] = inst_14784);
(statearr_14820_14843[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14801 === (8)))
{var inst_14764 = (state_14800[(8)]);var inst_14773 = (state_14800[(11)]);var tmp14817 = inst_14764;var inst_14764__$1 = tmp14817;var inst_14765 = inst_14773;var state_14800__$1 = (function (){var statearr_14821 = state_14800;(statearr_14821[(7)] = inst_14765);
(statearr_14821[(8)] = inst_14764__$1);
return statearr_14821;
})();var statearr_14822_14844 = state_14800__$1;(statearr_14822_14844[(2)] = null);
(statearr_14822_14844[(1)] = (2));
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
});})(c__6831__auto___14830,out))
;return ((function (switch__6816__auto__,c__6831__auto___14830,out){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_14826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14826[(0)] = state_machine__6817__auto__);
(statearr_14826[(1)] = (1));
return statearr_14826;
});
var state_machine__6817__auto____1 = (function (state_14800){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_14800);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e14827){if((e14827 instanceof Object))
{var ex__6820__auto__ = e14827;var statearr_14828_14845 = state_14800;(statearr_14828_14845[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14800);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14827;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14846 = state_14800;
state_14800 = G__14846;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_14800){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_14800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___14830,out))
})();var state__6833__auto__ = (function (){var statearr_14829 = f__6832__auto__.call(null);(statearr_14829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___14830);
return statearr_14829;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___14830,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6831__auto___14989 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___14989,out){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___14989,out){
return (function (state_14959){var state_val_14960 = (state_14959[(1)]);if((state_val_14960 === (7)))
{var inst_14955 = (state_14959[(2)]);var state_14959__$1 = state_14959;var statearr_14961_14990 = state_14959__$1;(statearr_14961_14990[(2)] = inst_14955);
(statearr_14961_14990[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14960 === (1)))
{var inst_14918 = [];var inst_14919 = inst_14918;var inst_14920 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14959__$1 = (function (){var statearr_14962 = state_14959;(statearr_14962[(7)] = inst_14919);
(statearr_14962[(8)] = inst_14920);
return statearr_14962;
})();var statearr_14963_14991 = state_14959__$1;(statearr_14963_14991[(2)] = null);
(statearr_14963_14991[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14960 === (4)))
{var inst_14923 = (state_14959[(9)]);var inst_14923__$1 = (state_14959[(2)]);var inst_14924 = (inst_14923__$1 == null);var inst_14925 = cljs.core.not.call(null,inst_14924);var state_14959__$1 = (function (){var statearr_14964 = state_14959;(statearr_14964[(9)] = inst_14923__$1);
return statearr_14964;
})();if(inst_14925)
{var statearr_14965_14992 = state_14959__$1;(statearr_14965_14992[(1)] = (5));
} else
{var statearr_14966_14993 = state_14959__$1;(statearr_14966_14993[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14960 === (15)))
{var inst_14949 = (state_14959[(2)]);var state_14959__$1 = state_14959;var statearr_14967_14994 = state_14959__$1;(statearr_14967_14994[(2)] = inst_14949);
(statearr_14967_14994[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14960 === (13)))
{var state_14959__$1 = state_14959;var statearr_14968_14995 = state_14959__$1;(statearr_14968_14995[(2)] = null);
(statearr_14968_14995[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14960 === (6)))
{var inst_14919 = (state_14959[(7)]);var inst_14944 = inst_14919.length;var inst_14945 = (inst_14944 > (0));var state_14959__$1 = state_14959;if(cljs.core.truth_(inst_14945))
{var statearr_14969_14996 = state_14959__$1;(statearr_14969_14996[(1)] = (12));
} else
{var statearr_14970_14997 = state_14959__$1;(statearr_14970_14997[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14960 === (3)))
{var inst_14957 = (state_14959[(2)]);var state_14959__$1 = state_14959;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14959__$1,inst_14957);
} else
{if((state_val_14960 === (12)))
{var inst_14919 = (state_14959[(7)]);var inst_14947 = cljs.core.vec.call(null,inst_14919);var state_14959__$1 = state_14959;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14959__$1,(15),out,inst_14947);
} else
{if((state_val_14960 === (2)))
{var state_14959__$1 = state_14959;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14959__$1,(4),ch);
} else
{if((state_val_14960 === (11)))
{var inst_14923 = (state_14959[(9)]);var inst_14927 = (state_14959[(10)]);var inst_14937 = (state_14959[(2)]);var inst_14938 = [];var inst_14939 = inst_14938.push(inst_14923);var inst_14919 = inst_14938;var inst_14920 = inst_14927;var state_14959__$1 = (function (){var statearr_14971 = state_14959;(statearr_14971[(11)] = inst_14937);
(statearr_14971[(7)] = inst_14919);
(statearr_14971[(12)] = inst_14939);
(statearr_14971[(8)] = inst_14920);
return statearr_14971;
})();var statearr_14972_14998 = state_14959__$1;(statearr_14972_14998[(2)] = null);
(statearr_14972_14998[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14960 === (9)))
{var inst_14919 = (state_14959[(7)]);var inst_14935 = cljs.core.vec.call(null,inst_14919);var state_14959__$1 = state_14959;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14959__$1,(11),out,inst_14935);
} else
{if((state_val_14960 === (5)))
{var inst_14923 = (state_14959[(9)]);var inst_14920 = (state_14959[(8)]);var inst_14927 = (state_14959[(10)]);var inst_14927__$1 = f.call(null,inst_14923);var inst_14928 = cljs.core._EQ_.call(null,inst_14927__$1,inst_14920);var inst_14929 = cljs.core.keyword_identical_QMARK_.call(null,inst_14920,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14930 = (inst_14928) || (inst_14929);var state_14959__$1 = (function (){var statearr_14973 = state_14959;(statearr_14973[(10)] = inst_14927__$1);
return statearr_14973;
})();if(cljs.core.truth_(inst_14930))
{var statearr_14974_14999 = state_14959__$1;(statearr_14974_14999[(1)] = (8));
} else
{var statearr_14975_15000 = state_14959__$1;(statearr_14975_15000[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14960 === (14)))
{var inst_14952 = (state_14959[(2)]);var inst_14953 = cljs.core.async.close_BANG_.call(null,out);var state_14959__$1 = (function (){var statearr_14977 = state_14959;(statearr_14977[(13)] = inst_14952);
return statearr_14977;
})();var statearr_14978_15001 = state_14959__$1;(statearr_14978_15001[(2)] = inst_14953);
(statearr_14978_15001[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14960 === (10)))
{var inst_14942 = (state_14959[(2)]);var state_14959__$1 = state_14959;var statearr_14979_15002 = state_14959__$1;(statearr_14979_15002[(2)] = inst_14942);
(statearr_14979_15002[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14960 === (8)))
{var inst_14919 = (state_14959[(7)]);var inst_14923 = (state_14959[(9)]);var inst_14927 = (state_14959[(10)]);var inst_14932 = inst_14919.push(inst_14923);var tmp14976 = inst_14919;var inst_14919__$1 = tmp14976;var inst_14920 = inst_14927;var state_14959__$1 = (function (){var statearr_14980 = state_14959;(statearr_14980[(7)] = inst_14919__$1);
(statearr_14980[(14)] = inst_14932);
(statearr_14980[(8)] = inst_14920);
return statearr_14980;
})();var statearr_14981_15003 = state_14959__$1;(statearr_14981_15003[(2)] = null);
(statearr_14981_15003[(1)] = (2));
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
});})(c__6831__auto___14989,out))
;return ((function (switch__6816__auto__,c__6831__auto___14989,out){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_14985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14985[(0)] = state_machine__6817__auto__);
(statearr_14985[(1)] = (1));
return statearr_14985;
});
var state_machine__6817__auto____1 = (function (state_14959){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_14959);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e14986){if((e14986 instanceof Object))
{var ex__6820__auto__ = e14986;var statearr_14987_15004 = state_14959;(statearr_14987_15004[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14959);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14986;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15005 = state_14959;
state_14959 = G__15005;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_14959){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_14959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___14989,out))
})();var state__6833__auto__ = (function (){var statearr_14988 = f__6832__auto__.call(null);(statearr_14988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___14989);
return statearr_14988;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___14989,out))
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