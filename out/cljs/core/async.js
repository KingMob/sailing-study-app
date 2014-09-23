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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12097 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12097 = (function (f,fn_handler,meta12098){
this.f = f;
this.fn_handler = fn_handler;
this.meta12098 = meta12098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12097.cljs$lang$type = true;
cljs.core.async.t12097.cljs$lang$ctorStr = "cljs.core.async/t12097";
cljs.core.async.t12097.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t12097");
});
cljs.core.async.t12097.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12097.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12097.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12099){var self__ = this;
var _12099__$1 = this;return self__.meta12098;
});
cljs.core.async.t12097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12099,meta12098__$1){var self__ = this;
var _12099__$1 = this;return (new cljs.core.async.t12097(self__.f,self__.fn_handler,meta12098__$1));
});
cljs.core.async.__GT_t12097 = (function __GT_t12097(f__$1,fn_handler__$1,meta12098){return (new cljs.core.async.t12097(f__$1,fn_handler__$1,meta12098));
});
}
return (new cljs.core.async.t12097(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12101 = buff;if(G__12101)
{var bit__4289__auto__ = null;if(cljs.core.truth_((function (){var or__3626__auto__ = bit__4289__auto__;if(cljs.core.truth_(or__3626__auto__))
{return or__3626__auto__;
} else
{return G__12101.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12101.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12101);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12101);
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
{var val_12102 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12102);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12102,ret){
return (function (){return fn1.call(null,val_12102);
});})(val_12102,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4495__auto___12103 = n;var x_12104 = (0);while(true){
if((x_12104 < n__4495__auto___12103))
{(a[x_12104] = (0));
{
var G__12105 = (x_12104 + (1));
x_12104 = G__12105;
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
var G__12106 = (i + (1));
i = G__12106;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12110 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12110 = (function (flag,alt_flag,meta12111){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12111 = meta12111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12110.cljs$lang$type = true;
cljs.core.async.t12110.cljs$lang$ctorStr = "cljs.core.async/t12110";
cljs.core.async.t12110.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t12110");
});})(flag))
;
cljs.core.async.t12110.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12112){var self__ = this;
var _12112__$1 = this;return self__.meta12111;
});})(flag))
;
cljs.core.async.t12110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12112,meta12111__$1){var self__ = this;
var _12112__$1 = this;return (new cljs.core.async.t12110(self__.flag,self__.alt_flag,meta12111__$1));
});})(flag))
;
cljs.core.async.__GT_t12110 = ((function (flag){
return (function __GT_t12110(flag__$1,alt_flag__$1,meta12111){return (new cljs.core.async.t12110(flag__$1,alt_flag__$1,meta12111));
});})(flag))
;
}
return (new cljs.core.async.t12110(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12116 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12116 = (function (cb,flag,alt_handler,meta12117){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12117 = meta12117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12116.cljs$lang$type = true;
cljs.core.async.t12116.cljs$lang$ctorStr = "cljs.core.async/t12116";
cljs.core.async.t12116.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t12116");
});
cljs.core.async.t12116.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12118){var self__ = this;
var _12118__$1 = this;return self__.meta12117;
});
cljs.core.async.t12116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12118,meta12117__$1){var self__ = this;
var _12118__$1 = this;return (new cljs.core.async.t12116(self__.cb,self__.flag,self__.alt_handler,meta12117__$1));
});
cljs.core.async.__GT_t12116 = (function __GT_t12116(cb__$1,flag__$1,alt_handler__$1,meta12117){return (new cljs.core.async.t12116(cb__$1,flag__$1,alt_handler__$1,meta12117));
});
}
return (new cljs.core.async.t12116(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12119_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12119_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12120_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12120_SHARP_,port], null));
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
var G__12121 = (i + (1));
i = G__12121;
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
var alts_BANG___delegate = function (ports,p__12122){var map__12124 = p__12122;var map__12124__$1 = ((cljs.core.seq_QMARK_.call(null,map__12124))?cljs.core.apply.call(null,cljs.core.hash_map,map__12124):map__12124);var opts = map__12124__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12122 = null;if (arguments.length > 1) {
  p__12122 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12122);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12125){
var ports = cljs.core.first(arglist__12125);
var p__12122 = cljs.core.rest(arglist__12125);
return alts_BANG___delegate(ports,p__12122);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6831__auto___12220 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___12220){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___12220){
return (function (state_12196){var state_val_12197 = (state_12196[(1)]);if((state_val_12197 === (7)))
{var inst_12192 = (state_12196[(2)]);var state_12196__$1 = state_12196;var statearr_12198_12221 = state_12196__$1;(statearr_12198_12221[(2)] = inst_12192);
(statearr_12198_12221[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12197 === (1)))
{var state_12196__$1 = state_12196;var statearr_12199_12222 = state_12196__$1;(statearr_12199_12222[(2)] = null);
(statearr_12199_12222[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12197 === (4)))
{var inst_12175 = (state_12196[(7)]);var inst_12175__$1 = (state_12196[(2)]);var inst_12176 = (inst_12175__$1 == null);var state_12196__$1 = (function (){var statearr_12200 = state_12196;(statearr_12200[(7)] = inst_12175__$1);
return statearr_12200;
})();if(cljs.core.truth_(inst_12176))
{var statearr_12201_12223 = state_12196__$1;(statearr_12201_12223[(1)] = (5));
} else
{var statearr_12202_12224 = state_12196__$1;(statearr_12202_12224[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12197 === (13)))
{var state_12196__$1 = state_12196;var statearr_12203_12225 = state_12196__$1;(statearr_12203_12225[(2)] = null);
(statearr_12203_12225[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12197 === (6)))
{var inst_12175 = (state_12196[(7)]);var state_12196__$1 = state_12196;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12196__$1,(11),to,inst_12175);
} else
{if((state_val_12197 === (3)))
{var inst_12194 = (state_12196[(2)]);var state_12196__$1 = state_12196;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12196__$1,inst_12194);
} else
{if((state_val_12197 === (12)))
{var state_12196__$1 = state_12196;var statearr_12204_12226 = state_12196__$1;(statearr_12204_12226[(2)] = null);
(statearr_12204_12226[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12197 === (2)))
{var state_12196__$1 = state_12196;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12196__$1,(4),from);
} else
{if((state_val_12197 === (11)))
{var inst_12185 = (state_12196[(2)]);var state_12196__$1 = state_12196;if(cljs.core.truth_(inst_12185))
{var statearr_12205_12227 = state_12196__$1;(statearr_12205_12227[(1)] = (12));
} else
{var statearr_12206_12228 = state_12196__$1;(statearr_12206_12228[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12197 === (9)))
{var state_12196__$1 = state_12196;var statearr_12207_12229 = state_12196__$1;(statearr_12207_12229[(2)] = null);
(statearr_12207_12229[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12197 === (5)))
{var state_12196__$1 = state_12196;if(cljs.core.truth_(close_QMARK_))
{var statearr_12208_12230 = state_12196__$1;(statearr_12208_12230[(1)] = (8));
} else
{var statearr_12209_12231 = state_12196__$1;(statearr_12209_12231[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12197 === (14)))
{var inst_12190 = (state_12196[(2)]);var state_12196__$1 = state_12196;var statearr_12210_12232 = state_12196__$1;(statearr_12210_12232[(2)] = inst_12190);
(statearr_12210_12232[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12197 === (10)))
{var inst_12182 = (state_12196[(2)]);var state_12196__$1 = state_12196;var statearr_12211_12233 = state_12196__$1;(statearr_12211_12233[(2)] = inst_12182);
(statearr_12211_12233[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12197 === (8)))
{var inst_12179 = cljs.core.async.close_BANG_.call(null,to);var state_12196__$1 = state_12196;var statearr_12212_12234 = state_12196__$1;(statearr_12212_12234[(2)] = inst_12179);
(statearr_12212_12234[(1)] = (10));
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
});})(c__6831__auto___12220))
;return ((function (switch__6816__auto__,c__6831__auto___12220){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_12216 = [null,null,null,null,null,null,null,null];(statearr_12216[(0)] = state_machine__6817__auto__);
(statearr_12216[(1)] = (1));
return statearr_12216;
});
var state_machine__6817__auto____1 = (function (state_12196){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_12196);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e12217){if((e12217 instanceof Object))
{var ex__6820__auto__ = e12217;var statearr_12218_12235 = state_12196;(statearr_12218_12235[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12196);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12217;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12236 = state_12196;
state_12196 = G__12236;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_12196){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_12196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___12220))
})();var state__6833__auto__ = (function (){var statearr_12219 = f__6832__auto__.call(null);(statearr_12219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___12220);
return statearr_12219;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___12220))
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
return (function (p__12420){var vec__12421 = p__12420;var v = cljs.core.nth.call(null,vec__12421,(0),null);var p = cljs.core.nth.call(null,vec__12421,(1),null);var job = vec__12421;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6831__auto___12603 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___12603,res,vec__12421,v,p,job,jobs,results){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___12603,res,vec__12421,v,p,job,jobs,results){
return (function (state_12426){var state_val_12427 = (state_12426[(1)]);if((state_val_12427 === (2)))
{var inst_12423 = (state_12426[(2)]);var inst_12424 = cljs.core.async.close_BANG_.call(null,res);var state_12426__$1 = (function (){var statearr_12428 = state_12426;(statearr_12428[(7)] = inst_12423);
return statearr_12428;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12426__$1,inst_12424);
} else
{if((state_val_12427 === (1)))
{var state_12426__$1 = state_12426;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12426__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6831__auto___12603,res,vec__12421,v,p,job,jobs,results))
;return ((function (switch__6816__auto__,c__6831__auto___12603,res,vec__12421,v,p,job,jobs,results){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_12432 = [null,null,null,null,null,null,null,null];(statearr_12432[(0)] = state_machine__6817__auto__);
(statearr_12432[(1)] = (1));
return statearr_12432;
});
var state_machine__6817__auto____1 = (function (state_12426){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_12426);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e12433){if((e12433 instanceof Object))
{var ex__6820__auto__ = e12433;var statearr_12434_12604 = state_12426;(statearr_12434_12604[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12426);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12433;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12605 = state_12426;
state_12426 = G__12605;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_12426){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_12426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___12603,res,vec__12421,v,p,job,jobs,results))
})();var state__6833__auto__ = (function (){var statearr_12435 = f__6832__auto__.call(null);(statearr_12435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___12603);
return statearr_12435;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___12603,res,vec__12421,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12436){var vec__12437 = p__12436;var v = cljs.core.nth.call(null,vec__12437,(0),null);var p = cljs.core.nth.call(null,vec__12437,(1),null);var job = vec__12437;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4495__auto___12606 = n;var __12607 = (0);while(true){
if((__12607 < n__4495__auto___12606))
{var G__12438_12608 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__12438_12608) {
case "async":
var c__6831__auto___12610 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12607,c__6831__auto___12610,G__12438_12608,n__4495__auto___12606,jobs,results,process,async){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (__12607,c__6831__auto___12610,G__12438_12608,n__4495__auto___12606,jobs,results,process,async){
return (function (state_12451){var state_val_12452 = (state_12451[(1)]);if((state_val_12452 === (7)))
{var inst_12447 = (state_12451[(2)]);var state_12451__$1 = state_12451;var statearr_12453_12611 = state_12451__$1;(statearr_12453_12611[(2)] = inst_12447);
(statearr_12453_12611[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12452 === (6)))
{var state_12451__$1 = state_12451;var statearr_12454_12612 = state_12451__$1;(statearr_12454_12612[(2)] = null);
(statearr_12454_12612[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12452 === (5)))
{var state_12451__$1 = state_12451;var statearr_12455_12613 = state_12451__$1;(statearr_12455_12613[(2)] = null);
(statearr_12455_12613[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12452 === (4)))
{var inst_12441 = (state_12451[(2)]);var inst_12442 = async.call(null,inst_12441);var state_12451__$1 = state_12451;if(cljs.core.truth_(inst_12442))
{var statearr_12456_12614 = state_12451__$1;(statearr_12456_12614[(1)] = (5));
} else
{var statearr_12457_12615 = state_12451__$1;(statearr_12457_12615[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12452 === (3)))
{var inst_12449 = (state_12451[(2)]);var state_12451__$1 = state_12451;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12451__$1,inst_12449);
} else
{if((state_val_12452 === (2)))
{var state_12451__$1 = state_12451;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12451__$1,(4),jobs);
} else
{if((state_val_12452 === (1)))
{var state_12451__$1 = state_12451;var statearr_12458_12616 = state_12451__$1;(statearr_12458_12616[(2)] = null);
(statearr_12458_12616[(1)] = (2));
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
});})(__12607,c__6831__auto___12610,G__12438_12608,n__4495__auto___12606,jobs,results,process,async))
;return ((function (__12607,switch__6816__auto__,c__6831__auto___12610,G__12438_12608,n__4495__auto___12606,jobs,results,process,async){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_12462 = [null,null,null,null,null,null,null];(statearr_12462[(0)] = state_machine__6817__auto__);
(statearr_12462[(1)] = (1));
return statearr_12462;
});
var state_machine__6817__auto____1 = (function (state_12451){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_12451);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e12463){if((e12463 instanceof Object))
{var ex__6820__auto__ = e12463;var statearr_12464_12617 = state_12451;(statearr_12464_12617[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12451);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12463;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12618 = state_12451;
state_12451 = G__12618;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_12451){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_12451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(__12607,switch__6816__auto__,c__6831__auto___12610,G__12438_12608,n__4495__auto___12606,jobs,results,process,async))
})();var state__6833__auto__ = (function (){var statearr_12465 = f__6832__auto__.call(null);(statearr_12465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___12610);
return statearr_12465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(__12607,c__6831__auto___12610,G__12438_12608,n__4495__auto___12606,jobs,results,process,async))
);

break;
case "compute":
var c__6831__auto___12619 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12607,c__6831__auto___12619,G__12438_12608,n__4495__auto___12606,jobs,results,process,async){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (__12607,c__6831__auto___12619,G__12438_12608,n__4495__auto___12606,jobs,results,process,async){
return (function (state_12478){var state_val_12479 = (state_12478[(1)]);if((state_val_12479 === (7)))
{var inst_12474 = (state_12478[(2)]);var state_12478__$1 = state_12478;var statearr_12480_12620 = state_12478__$1;(statearr_12480_12620[(2)] = inst_12474);
(statearr_12480_12620[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12479 === (6)))
{var state_12478__$1 = state_12478;var statearr_12481_12621 = state_12478__$1;(statearr_12481_12621[(2)] = null);
(statearr_12481_12621[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12479 === (5)))
{var state_12478__$1 = state_12478;var statearr_12482_12622 = state_12478__$1;(statearr_12482_12622[(2)] = null);
(statearr_12482_12622[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12479 === (4)))
{var inst_12468 = (state_12478[(2)]);var inst_12469 = process.call(null,inst_12468);var state_12478__$1 = state_12478;if(cljs.core.truth_(inst_12469))
{var statearr_12483_12623 = state_12478__$1;(statearr_12483_12623[(1)] = (5));
} else
{var statearr_12484_12624 = state_12478__$1;(statearr_12484_12624[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12479 === (3)))
{var inst_12476 = (state_12478[(2)]);var state_12478__$1 = state_12478;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12478__$1,inst_12476);
} else
{if((state_val_12479 === (2)))
{var state_12478__$1 = state_12478;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12478__$1,(4),jobs);
} else
{if((state_val_12479 === (1)))
{var state_12478__$1 = state_12478;var statearr_12485_12625 = state_12478__$1;(statearr_12485_12625[(2)] = null);
(statearr_12485_12625[(1)] = (2));
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
});})(__12607,c__6831__auto___12619,G__12438_12608,n__4495__auto___12606,jobs,results,process,async))
;return ((function (__12607,switch__6816__auto__,c__6831__auto___12619,G__12438_12608,n__4495__auto___12606,jobs,results,process,async){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_12489 = [null,null,null,null,null,null,null];(statearr_12489[(0)] = state_machine__6817__auto__);
(statearr_12489[(1)] = (1));
return statearr_12489;
});
var state_machine__6817__auto____1 = (function (state_12478){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_12478);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e12490){if((e12490 instanceof Object))
{var ex__6820__auto__ = e12490;var statearr_12491_12626 = state_12478;(statearr_12491_12626[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12478);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12490;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12627 = state_12478;
state_12478 = G__12627;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_12478){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_12478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(__12607,switch__6816__auto__,c__6831__auto___12619,G__12438_12608,n__4495__auto___12606,jobs,results,process,async))
})();var state__6833__auto__ = (function (){var statearr_12492 = f__6832__auto__.call(null);(statearr_12492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___12619);
return statearr_12492;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(__12607,c__6831__auto___12619,G__12438_12608,n__4495__auto___12606,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__12628 = (__12607 + (1));
__12607 = G__12628;
continue;
}
} else
{}
break;
}
var c__6831__auto___12629 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___12629,jobs,results,process,async){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___12629,jobs,results,process,async){
return (function (state_12514){var state_val_12515 = (state_12514[(1)]);if((state_val_12515 === (9)))
{var inst_12507 = (state_12514[(2)]);var state_12514__$1 = (function (){var statearr_12516 = state_12514;(statearr_12516[(7)] = inst_12507);
return statearr_12516;
})();var statearr_12517_12630 = state_12514__$1;(statearr_12517_12630[(2)] = null);
(statearr_12517_12630[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12515 === (8)))
{var inst_12500 = (state_12514[(8)]);var inst_12505 = (state_12514[(2)]);var state_12514__$1 = (function (){var statearr_12518 = state_12514;(statearr_12518[(9)] = inst_12505);
return statearr_12518;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12514__$1,(9),results,inst_12500);
} else
{if((state_val_12515 === (7)))
{var inst_12510 = (state_12514[(2)]);var state_12514__$1 = state_12514;var statearr_12519_12631 = state_12514__$1;(statearr_12519_12631[(2)] = inst_12510);
(statearr_12519_12631[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12515 === (6)))
{var inst_12500 = (state_12514[(8)]);var inst_12495 = (state_12514[(10)]);var inst_12500__$1 = cljs.core.async.chan.call(null,(1));var inst_12501 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12502 = [inst_12495,inst_12500__$1];var inst_12503 = (new cljs.core.PersistentVector(null,2,(5),inst_12501,inst_12502,null));var state_12514__$1 = (function (){var statearr_12520 = state_12514;(statearr_12520[(8)] = inst_12500__$1);
return statearr_12520;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12514__$1,(8),jobs,inst_12503);
} else
{if((state_val_12515 === (5)))
{var inst_12498 = cljs.core.async.close_BANG_.call(null,jobs);var state_12514__$1 = state_12514;var statearr_12521_12632 = state_12514__$1;(statearr_12521_12632[(2)] = inst_12498);
(statearr_12521_12632[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12515 === (4)))
{var inst_12495 = (state_12514[(10)]);var inst_12495__$1 = (state_12514[(2)]);var inst_12496 = (inst_12495__$1 == null);var state_12514__$1 = (function (){var statearr_12522 = state_12514;(statearr_12522[(10)] = inst_12495__$1);
return statearr_12522;
})();if(cljs.core.truth_(inst_12496))
{var statearr_12523_12633 = state_12514__$1;(statearr_12523_12633[(1)] = (5));
} else
{var statearr_12524_12634 = state_12514__$1;(statearr_12524_12634[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12515 === (3)))
{var inst_12512 = (state_12514[(2)]);var state_12514__$1 = state_12514;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12514__$1,inst_12512);
} else
{if((state_val_12515 === (2)))
{var state_12514__$1 = state_12514;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12514__$1,(4),from);
} else
{if((state_val_12515 === (1)))
{var state_12514__$1 = state_12514;var statearr_12525_12635 = state_12514__$1;(statearr_12525_12635[(2)] = null);
(statearr_12525_12635[(1)] = (2));
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
});})(c__6831__auto___12629,jobs,results,process,async))
;return ((function (switch__6816__auto__,c__6831__auto___12629,jobs,results,process,async){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_12529 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12529[(0)] = state_machine__6817__auto__);
(statearr_12529[(1)] = (1));
return statearr_12529;
});
var state_machine__6817__auto____1 = (function (state_12514){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_12514);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e12530){if((e12530 instanceof Object))
{var ex__6820__auto__ = e12530;var statearr_12531_12636 = state_12514;(statearr_12531_12636[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12514);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12530;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12637 = state_12514;
state_12514 = G__12637;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_12514){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_12514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___12629,jobs,results,process,async))
})();var state__6833__auto__ = (function (){var statearr_12532 = f__6832__auto__.call(null);(statearr_12532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___12629);
return statearr_12532;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___12629,jobs,results,process,async))
);
var c__6831__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto__,jobs,results,process,async){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto__,jobs,results,process,async){
return (function (state_12570){var state_val_12571 = (state_12570[(1)]);if((state_val_12571 === (7)))
{var inst_12566 = (state_12570[(2)]);var state_12570__$1 = state_12570;var statearr_12572_12638 = state_12570__$1;(statearr_12572_12638[(2)] = inst_12566);
(statearr_12572_12638[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (20)))
{var state_12570__$1 = state_12570;var statearr_12573_12639 = state_12570__$1;(statearr_12573_12639[(2)] = null);
(statearr_12573_12639[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (1)))
{var state_12570__$1 = state_12570;var statearr_12574_12640 = state_12570__$1;(statearr_12574_12640[(2)] = null);
(statearr_12574_12640[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (4)))
{var inst_12535 = (state_12570[(7)]);var inst_12535__$1 = (state_12570[(2)]);var inst_12536 = (inst_12535__$1 == null);var state_12570__$1 = (function (){var statearr_12575 = state_12570;(statearr_12575[(7)] = inst_12535__$1);
return statearr_12575;
})();if(cljs.core.truth_(inst_12536))
{var statearr_12576_12641 = state_12570__$1;(statearr_12576_12641[(1)] = (5));
} else
{var statearr_12577_12642 = state_12570__$1;(statearr_12577_12642[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (15)))
{var inst_12548 = (state_12570[(8)]);var state_12570__$1 = state_12570;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12570__$1,(18),to,inst_12548);
} else
{if((state_val_12571 === (21)))
{var inst_12561 = (state_12570[(2)]);var state_12570__$1 = state_12570;var statearr_12578_12643 = state_12570__$1;(statearr_12578_12643[(2)] = inst_12561);
(statearr_12578_12643[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (13)))
{var inst_12563 = (state_12570[(2)]);var state_12570__$1 = (function (){var statearr_12579 = state_12570;(statearr_12579[(9)] = inst_12563);
return statearr_12579;
})();var statearr_12580_12644 = state_12570__$1;(statearr_12580_12644[(2)] = null);
(statearr_12580_12644[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (6)))
{var inst_12535 = (state_12570[(7)]);var state_12570__$1 = state_12570;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12570__$1,(11),inst_12535);
} else
{if((state_val_12571 === (17)))
{var inst_12556 = (state_12570[(2)]);var state_12570__$1 = state_12570;if(cljs.core.truth_(inst_12556))
{var statearr_12581_12645 = state_12570__$1;(statearr_12581_12645[(1)] = (19));
} else
{var statearr_12582_12646 = state_12570__$1;(statearr_12582_12646[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (3)))
{var inst_12568 = (state_12570[(2)]);var state_12570__$1 = state_12570;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12570__$1,inst_12568);
} else
{if((state_val_12571 === (12)))
{var inst_12545 = (state_12570[(10)]);var state_12570__$1 = state_12570;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12570__$1,(14),inst_12545);
} else
{if((state_val_12571 === (2)))
{var state_12570__$1 = state_12570;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12570__$1,(4),results);
} else
{if((state_val_12571 === (19)))
{var state_12570__$1 = state_12570;var statearr_12583_12647 = state_12570__$1;(statearr_12583_12647[(2)] = null);
(statearr_12583_12647[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (11)))
{var inst_12545 = (state_12570[(2)]);var state_12570__$1 = (function (){var statearr_12584 = state_12570;(statearr_12584[(10)] = inst_12545);
return statearr_12584;
})();var statearr_12585_12648 = state_12570__$1;(statearr_12585_12648[(2)] = null);
(statearr_12585_12648[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (9)))
{var state_12570__$1 = state_12570;var statearr_12586_12649 = state_12570__$1;(statearr_12586_12649[(2)] = null);
(statearr_12586_12649[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (5)))
{var state_12570__$1 = state_12570;if(cljs.core.truth_(close_QMARK_))
{var statearr_12587_12650 = state_12570__$1;(statearr_12587_12650[(1)] = (8));
} else
{var statearr_12588_12651 = state_12570__$1;(statearr_12588_12651[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (14)))
{var inst_12550 = (state_12570[(11)]);var inst_12548 = (state_12570[(8)]);var inst_12548__$1 = (state_12570[(2)]);var inst_12549 = (inst_12548__$1 == null);var inst_12550__$1 = cljs.core.not.call(null,inst_12549);var state_12570__$1 = (function (){var statearr_12589 = state_12570;(statearr_12589[(11)] = inst_12550__$1);
(statearr_12589[(8)] = inst_12548__$1);
return statearr_12589;
})();if(inst_12550__$1)
{var statearr_12590_12652 = state_12570__$1;(statearr_12590_12652[(1)] = (15));
} else
{var statearr_12591_12653 = state_12570__$1;(statearr_12591_12653[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (16)))
{var inst_12550 = (state_12570[(11)]);var state_12570__$1 = state_12570;var statearr_12592_12654 = state_12570__$1;(statearr_12592_12654[(2)] = inst_12550);
(statearr_12592_12654[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (10)))
{var inst_12542 = (state_12570[(2)]);var state_12570__$1 = state_12570;var statearr_12593_12655 = state_12570__$1;(statearr_12593_12655[(2)] = inst_12542);
(statearr_12593_12655[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (18)))
{var inst_12553 = (state_12570[(2)]);var state_12570__$1 = state_12570;var statearr_12594_12656 = state_12570__$1;(statearr_12594_12656[(2)] = inst_12553);
(statearr_12594_12656[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (8)))
{var inst_12539 = cljs.core.async.close_BANG_.call(null,to);var state_12570__$1 = state_12570;var statearr_12595_12657 = state_12570__$1;(statearr_12595_12657[(2)] = inst_12539);
(statearr_12595_12657[(1)] = (10));
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
var state_machine__6817__auto____0 = (function (){var statearr_12599 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12599[(0)] = state_machine__6817__auto__);
(statearr_12599[(1)] = (1));
return statearr_12599;
});
var state_machine__6817__auto____1 = (function (state_12570){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_12570);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e12600){if((e12600 instanceof Object))
{var ex__6820__auto__ = e12600;var statearr_12601_12658 = state_12570;(statearr_12601_12658[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12570);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12600;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12659 = state_12570;
state_12570 = G__12659;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_12570){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_12570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto__,jobs,results,process,async))
})();var state__6833__auto__ = (function (){var statearr_12602 = f__6832__auto__.call(null);(statearr_12602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto__);
return statearr_12602;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6831__auto___12760 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___12760,tc,fc){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___12760,tc,fc){
return (function (state_12735){var state_val_12736 = (state_12735[(1)]);if((state_val_12736 === (7)))
{var inst_12731 = (state_12735[(2)]);var state_12735__$1 = state_12735;var statearr_12737_12761 = state_12735__$1;(statearr_12737_12761[(2)] = inst_12731);
(statearr_12737_12761[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12736 === (1)))
{var state_12735__$1 = state_12735;var statearr_12738_12762 = state_12735__$1;(statearr_12738_12762[(2)] = null);
(statearr_12738_12762[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12736 === (4)))
{var inst_12712 = (state_12735[(7)]);var inst_12712__$1 = (state_12735[(2)]);var inst_12713 = (inst_12712__$1 == null);var state_12735__$1 = (function (){var statearr_12739 = state_12735;(statearr_12739[(7)] = inst_12712__$1);
return statearr_12739;
})();if(cljs.core.truth_(inst_12713))
{var statearr_12740_12763 = state_12735__$1;(statearr_12740_12763[(1)] = (5));
} else
{var statearr_12741_12764 = state_12735__$1;(statearr_12741_12764[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12736 === (13)))
{var state_12735__$1 = state_12735;var statearr_12742_12765 = state_12735__$1;(statearr_12742_12765[(2)] = null);
(statearr_12742_12765[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12736 === (6)))
{var inst_12712 = (state_12735[(7)]);var inst_12718 = p.call(null,inst_12712);var state_12735__$1 = state_12735;if(cljs.core.truth_(inst_12718))
{var statearr_12743_12766 = state_12735__$1;(statearr_12743_12766[(1)] = (9));
} else
{var statearr_12744_12767 = state_12735__$1;(statearr_12744_12767[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12736 === (3)))
{var inst_12733 = (state_12735[(2)]);var state_12735__$1 = state_12735;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12735__$1,inst_12733);
} else
{if((state_val_12736 === (12)))
{var state_12735__$1 = state_12735;var statearr_12745_12768 = state_12735__$1;(statearr_12745_12768[(2)] = null);
(statearr_12745_12768[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12736 === (2)))
{var state_12735__$1 = state_12735;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12735__$1,(4),ch);
} else
{if((state_val_12736 === (11)))
{var inst_12712 = (state_12735[(7)]);var inst_12722 = (state_12735[(2)]);var state_12735__$1 = state_12735;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12735__$1,(8),inst_12722,inst_12712);
} else
{if((state_val_12736 === (9)))
{var state_12735__$1 = state_12735;var statearr_12746_12769 = state_12735__$1;(statearr_12746_12769[(2)] = tc);
(statearr_12746_12769[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12736 === (5)))
{var inst_12715 = cljs.core.async.close_BANG_.call(null,tc);var inst_12716 = cljs.core.async.close_BANG_.call(null,fc);var state_12735__$1 = (function (){var statearr_12747 = state_12735;(statearr_12747[(8)] = inst_12715);
return statearr_12747;
})();var statearr_12748_12770 = state_12735__$1;(statearr_12748_12770[(2)] = inst_12716);
(statearr_12748_12770[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12736 === (14)))
{var inst_12729 = (state_12735[(2)]);var state_12735__$1 = state_12735;var statearr_12749_12771 = state_12735__$1;(statearr_12749_12771[(2)] = inst_12729);
(statearr_12749_12771[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12736 === (10)))
{var state_12735__$1 = state_12735;var statearr_12750_12772 = state_12735__$1;(statearr_12750_12772[(2)] = fc);
(statearr_12750_12772[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12736 === (8)))
{var inst_12724 = (state_12735[(2)]);var state_12735__$1 = state_12735;if(cljs.core.truth_(inst_12724))
{var statearr_12751_12773 = state_12735__$1;(statearr_12751_12773[(1)] = (12));
} else
{var statearr_12752_12774 = state_12735__$1;(statearr_12752_12774[(1)] = (13));
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
});})(c__6831__auto___12760,tc,fc))
;return ((function (switch__6816__auto__,c__6831__auto___12760,tc,fc){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_12756 = [null,null,null,null,null,null,null,null,null];(statearr_12756[(0)] = state_machine__6817__auto__);
(statearr_12756[(1)] = (1));
return statearr_12756;
});
var state_machine__6817__auto____1 = (function (state_12735){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_12735);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e12757){if((e12757 instanceof Object))
{var ex__6820__auto__ = e12757;var statearr_12758_12775 = state_12735;(statearr_12758_12775[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12735);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12757;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12776 = state_12735;
state_12735 = G__12776;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_12735){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_12735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___12760,tc,fc))
})();var state__6833__auto__ = (function (){var statearr_12759 = f__6832__auto__.call(null);(statearr_12759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___12760);
return statearr_12759;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___12760,tc,fc))
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
return (function (state_12823){var state_val_12824 = (state_12823[(1)]);if((state_val_12824 === (7)))
{var inst_12819 = (state_12823[(2)]);var state_12823__$1 = state_12823;var statearr_12825_12841 = state_12823__$1;(statearr_12825_12841[(2)] = inst_12819);
(statearr_12825_12841[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12824 === (6)))
{var inst_12809 = (state_12823[(7)]);var inst_12812 = (state_12823[(8)]);var inst_12816 = f.call(null,inst_12809,inst_12812);var inst_12809__$1 = inst_12816;var state_12823__$1 = (function (){var statearr_12826 = state_12823;(statearr_12826[(7)] = inst_12809__$1);
return statearr_12826;
})();var statearr_12827_12842 = state_12823__$1;(statearr_12827_12842[(2)] = null);
(statearr_12827_12842[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12824 === (5)))
{var inst_12809 = (state_12823[(7)]);var state_12823__$1 = state_12823;var statearr_12828_12843 = state_12823__$1;(statearr_12828_12843[(2)] = inst_12809);
(statearr_12828_12843[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12824 === (4)))
{var inst_12812 = (state_12823[(8)]);var inst_12812__$1 = (state_12823[(2)]);var inst_12813 = (inst_12812__$1 == null);var state_12823__$1 = (function (){var statearr_12829 = state_12823;(statearr_12829[(8)] = inst_12812__$1);
return statearr_12829;
})();if(cljs.core.truth_(inst_12813))
{var statearr_12830_12844 = state_12823__$1;(statearr_12830_12844[(1)] = (5));
} else
{var statearr_12831_12845 = state_12823__$1;(statearr_12831_12845[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12824 === (3)))
{var inst_12821 = (state_12823[(2)]);var state_12823__$1 = state_12823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12823__$1,inst_12821);
} else
{if((state_val_12824 === (2)))
{var state_12823__$1 = state_12823;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12823__$1,(4),ch);
} else
{if((state_val_12824 === (1)))
{var inst_12809 = init;var state_12823__$1 = (function (){var statearr_12832 = state_12823;(statearr_12832[(7)] = inst_12809);
return statearr_12832;
})();var statearr_12833_12846 = state_12823__$1;(statearr_12833_12846[(2)] = null);
(statearr_12833_12846[(1)] = (2));
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
var state_machine__6817__auto____0 = (function (){var statearr_12837 = [null,null,null,null,null,null,null,null,null];(statearr_12837[(0)] = state_machine__6817__auto__);
(statearr_12837[(1)] = (1));
return statearr_12837;
});
var state_machine__6817__auto____1 = (function (state_12823){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_12823);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e12838){if((e12838 instanceof Object))
{var ex__6820__auto__ = e12838;var statearr_12839_12847 = state_12823;(statearr_12839_12847[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12823);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12838;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12848 = state_12823;
state_12823 = G__12848;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_12823){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_12823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto__))
})();var state__6833__auto__ = (function (){var statearr_12840 = f__6832__auto__.call(null);(statearr_12840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto__);
return statearr_12840;
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
return (function (state_12922){var state_val_12923 = (state_12922[(1)]);if((state_val_12923 === (7)))
{var inst_12904 = (state_12922[(2)]);var state_12922__$1 = state_12922;var statearr_12924_12947 = state_12922__$1;(statearr_12924_12947[(2)] = inst_12904);
(statearr_12924_12947[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (1)))
{var inst_12898 = cljs.core.seq.call(null,coll);var inst_12899 = inst_12898;var state_12922__$1 = (function (){var statearr_12925 = state_12922;(statearr_12925[(7)] = inst_12899);
return statearr_12925;
})();var statearr_12926_12948 = state_12922__$1;(statearr_12926_12948[(2)] = null);
(statearr_12926_12948[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (4)))
{var inst_12899 = (state_12922[(7)]);var inst_12902 = cljs.core.first.call(null,inst_12899);var state_12922__$1 = state_12922;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12922__$1,(7),ch,inst_12902);
} else
{if((state_val_12923 === (13)))
{var inst_12916 = (state_12922[(2)]);var state_12922__$1 = state_12922;var statearr_12927_12949 = state_12922__$1;(statearr_12927_12949[(2)] = inst_12916);
(statearr_12927_12949[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (6)))
{var inst_12907 = (state_12922[(2)]);var state_12922__$1 = state_12922;if(cljs.core.truth_(inst_12907))
{var statearr_12928_12950 = state_12922__$1;(statearr_12928_12950[(1)] = (8));
} else
{var statearr_12929_12951 = state_12922__$1;(statearr_12929_12951[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (3)))
{var inst_12920 = (state_12922[(2)]);var state_12922__$1 = state_12922;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12922__$1,inst_12920);
} else
{if((state_val_12923 === (12)))
{var state_12922__$1 = state_12922;var statearr_12930_12952 = state_12922__$1;(statearr_12930_12952[(2)] = null);
(statearr_12930_12952[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (2)))
{var inst_12899 = (state_12922[(7)]);var state_12922__$1 = state_12922;if(cljs.core.truth_(inst_12899))
{var statearr_12931_12953 = state_12922__$1;(statearr_12931_12953[(1)] = (4));
} else
{var statearr_12932_12954 = state_12922__$1;(statearr_12932_12954[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (11)))
{var inst_12913 = cljs.core.async.close_BANG_.call(null,ch);var state_12922__$1 = state_12922;var statearr_12933_12955 = state_12922__$1;(statearr_12933_12955[(2)] = inst_12913);
(statearr_12933_12955[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (9)))
{var state_12922__$1 = state_12922;if(cljs.core.truth_(close_QMARK_))
{var statearr_12934_12956 = state_12922__$1;(statearr_12934_12956[(1)] = (11));
} else
{var statearr_12935_12957 = state_12922__$1;(statearr_12935_12957[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (5)))
{var inst_12899 = (state_12922[(7)]);var state_12922__$1 = state_12922;var statearr_12936_12958 = state_12922__$1;(statearr_12936_12958[(2)] = inst_12899);
(statearr_12936_12958[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (10)))
{var inst_12918 = (state_12922[(2)]);var state_12922__$1 = state_12922;var statearr_12937_12959 = state_12922__$1;(statearr_12937_12959[(2)] = inst_12918);
(statearr_12937_12959[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12923 === (8)))
{var inst_12899 = (state_12922[(7)]);var inst_12909 = cljs.core.next.call(null,inst_12899);var inst_12899__$1 = inst_12909;var state_12922__$1 = (function (){var statearr_12938 = state_12922;(statearr_12938[(7)] = inst_12899__$1);
return statearr_12938;
})();var statearr_12939_12960 = state_12922__$1;(statearr_12939_12960[(2)] = null);
(statearr_12939_12960[(1)] = (2));
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
var state_machine__6817__auto____0 = (function (){var statearr_12943 = [null,null,null,null,null,null,null,null];(statearr_12943[(0)] = state_machine__6817__auto__);
(statearr_12943[(1)] = (1));
return statearr_12943;
});
var state_machine__6817__auto____1 = (function (state_12922){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_12922);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e12944){if((e12944 instanceof Object))
{var ex__6820__auto__ = e12944;var statearr_12945_12961 = state_12922;(statearr_12945_12961[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12922);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12944;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12962 = state_12922;
state_12922 = G__12962;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_12922){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_12922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto__))
})();var state__6833__auto__ = (function (){var statearr_12946 = f__6832__auto__.call(null);(statearr_12946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto__);
return statearr_12946;
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
cljs.core.async.Mux = (function (){var obj12964 = {};return obj12964;
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
cljs.core.async.Mult = (function (){var obj12966 = {};return obj12966;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13188 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13188 = (function (cs,ch,mult,meta13189){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13189 = meta13189;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13188.cljs$lang$type = true;
cljs.core.async.t13188.cljs$lang$ctorStr = "cljs.core.async/t13188";
cljs.core.async.t13188.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t13188");
});})(cs))
;
cljs.core.async.t13188.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13188.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13188.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13188.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13188.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13188.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13188.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13190){var self__ = this;
var _13190__$1 = this;return self__.meta13189;
});})(cs))
;
cljs.core.async.t13188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13190,meta13189__$1){var self__ = this;
var _13190__$1 = this;return (new cljs.core.async.t13188(self__.cs,self__.ch,self__.mult,meta13189__$1));
});})(cs))
;
cljs.core.async.__GT_t13188 = ((function (cs){
return (function __GT_t13188(cs__$1,ch__$1,mult__$1,meta13189){return (new cljs.core.async.t13188(cs__$1,ch__$1,mult__$1,meta13189));
});})(cs))
;
}
return (new cljs.core.async.t13188(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6831__auto___13409 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___13409,cs,m,dchan,dctr,done){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___13409,cs,m,dchan,dctr,done){
return (function (state_13321){var state_val_13322 = (state_13321[(1)]);if((state_val_13322 === (7)))
{var inst_13317 = (state_13321[(2)]);var state_13321__$1 = state_13321;var statearr_13323_13410 = state_13321__$1;(statearr_13323_13410[(2)] = inst_13317);
(statearr_13323_13410[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (20)))
{var inst_13222 = (state_13321[(7)]);var inst_13232 = cljs.core.first.call(null,inst_13222);var inst_13233 = cljs.core.nth.call(null,inst_13232,(0),null);var inst_13234 = cljs.core.nth.call(null,inst_13232,(1),null);var state_13321__$1 = (function (){var statearr_13324 = state_13321;(statearr_13324[(8)] = inst_13233);
return statearr_13324;
})();if(cljs.core.truth_(inst_13234))
{var statearr_13325_13411 = state_13321__$1;(statearr_13325_13411[(1)] = (22));
} else
{var statearr_13326_13412 = state_13321__$1;(statearr_13326_13412[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (27)))
{var inst_13264 = (state_13321[(9)]);var inst_13269 = (state_13321[(10)]);var inst_13262 = (state_13321[(11)]);var inst_13193 = (state_13321[(12)]);var inst_13269__$1 = cljs.core._nth.call(null,inst_13262,inst_13264);var inst_13270 = cljs.core.async.put_BANG_.call(null,inst_13269__$1,inst_13193,done);var state_13321__$1 = (function (){var statearr_13327 = state_13321;(statearr_13327[(10)] = inst_13269__$1);
return statearr_13327;
})();if(cljs.core.truth_(inst_13270))
{var statearr_13328_13413 = state_13321__$1;(statearr_13328_13413[(1)] = (30));
} else
{var statearr_13329_13414 = state_13321__$1;(statearr_13329_13414[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (1)))
{var state_13321__$1 = state_13321;var statearr_13330_13415 = state_13321__$1;(statearr_13330_13415[(2)] = null);
(statearr_13330_13415[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (24)))
{var inst_13222 = (state_13321[(7)]);var inst_13239 = (state_13321[(2)]);var inst_13240 = cljs.core.next.call(null,inst_13222);var inst_13202 = inst_13240;var inst_13203 = null;var inst_13204 = (0);var inst_13205 = (0);var state_13321__$1 = (function (){var statearr_13331 = state_13321;(statearr_13331[(13)] = inst_13239);
(statearr_13331[(14)] = inst_13204);
(statearr_13331[(15)] = inst_13202);
(statearr_13331[(16)] = inst_13203);
(statearr_13331[(17)] = inst_13205);
return statearr_13331;
})();var statearr_13332_13416 = state_13321__$1;(statearr_13332_13416[(2)] = null);
(statearr_13332_13416[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (39)))
{var state_13321__$1 = state_13321;var statearr_13336_13417 = state_13321__$1;(statearr_13336_13417[(2)] = null);
(statearr_13336_13417[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (4)))
{var inst_13193 = (state_13321[(12)]);var inst_13193__$1 = (state_13321[(2)]);var inst_13194 = (inst_13193__$1 == null);var state_13321__$1 = (function (){var statearr_13337 = state_13321;(statearr_13337[(12)] = inst_13193__$1);
return statearr_13337;
})();if(cljs.core.truth_(inst_13194))
{var statearr_13338_13418 = state_13321__$1;(statearr_13338_13418[(1)] = (5));
} else
{var statearr_13339_13419 = state_13321__$1;(statearr_13339_13419[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (15)))
{var inst_13204 = (state_13321[(14)]);var inst_13202 = (state_13321[(15)]);var inst_13203 = (state_13321[(16)]);var inst_13205 = (state_13321[(17)]);var inst_13218 = (state_13321[(2)]);var inst_13219 = (inst_13205 + (1));var tmp13333 = inst_13204;var tmp13334 = inst_13202;var tmp13335 = inst_13203;var inst_13202__$1 = tmp13334;var inst_13203__$1 = tmp13335;var inst_13204__$1 = tmp13333;var inst_13205__$1 = inst_13219;var state_13321__$1 = (function (){var statearr_13340 = state_13321;(statearr_13340[(14)] = inst_13204__$1);
(statearr_13340[(15)] = inst_13202__$1);
(statearr_13340[(18)] = inst_13218);
(statearr_13340[(16)] = inst_13203__$1);
(statearr_13340[(17)] = inst_13205__$1);
return statearr_13340;
})();var statearr_13341_13420 = state_13321__$1;(statearr_13341_13420[(2)] = null);
(statearr_13341_13420[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (21)))
{var inst_13243 = (state_13321[(2)]);var state_13321__$1 = state_13321;var statearr_13345_13421 = state_13321__$1;(statearr_13345_13421[(2)] = inst_13243);
(statearr_13345_13421[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (31)))
{var inst_13269 = (state_13321[(10)]);var inst_13273 = done.call(null,null);var inst_13274 = cljs.core.async.untap_STAR_.call(null,m,inst_13269);var state_13321__$1 = (function (){var statearr_13346 = state_13321;(statearr_13346[(19)] = inst_13273);
return statearr_13346;
})();var statearr_13347_13422 = state_13321__$1;(statearr_13347_13422[(2)] = inst_13274);
(statearr_13347_13422[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (32)))
{var inst_13261 = (state_13321[(20)]);var inst_13263 = (state_13321[(21)]);var inst_13264 = (state_13321[(9)]);var inst_13262 = (state_13321[(11)]);var inst_13276 = (state_13321[(2)]);var inst_13277 = (inst_13264 + (1));var tmp13342 = inst_13261;var tmp13343 = inst_13263;var tmp13344 = inst_13262;var inst_13261__$1 = tmp13342;var inst_13262__$1 = tmp13344;var inst_13263__$1 = tmp13343;var inst_13264__$1 = inst_13277;var state_13321__$1 = (function (){var statearr_13348 = state_13321;(statearr_13348[(22)] = inst_13276);
(statearr_13348[(20)] = inst_13261__$1);
(statearr_13348[(21)] = inst_13263__$1);
(statearr_13348[(9)] = inst_13264__$1);
(statearr_13348[(11)] = inst_13262__$1);
return statearr_13348;
})();var statearr_13349_13423 = state_13321__$1;(statearr_13349_13423[(2)] = null);
(statearr_13349_13423[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (40)))
{var inst_13289 = (state_13321[(23)]);var inst_13293 = done.call(null,null);var inst_13294 = cljs.core.async.untap_STAR_.call(null,m,inst_13289);var state_13321__$1 = (function (){var statearr_13350 = state_13321;(statearr_13350[(24)] = inst_13293);
return statearr_13350;
})();var statearr_13351_13424 = state_13321__$1;(statearr_13351_13424[(2)] = inst_13294);
(statearr_13351_13424[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (33)))
{var inst_13280 = (state_13321[(25)]);var inst_13282 = cljs.core.chunked_seq_QMARK_.call(null,inst_13280);var state_13321__$1 = state_13321;if(inst_13282)
{var statearr_13352_13425 = state_13321__$1;(statearr_13352_13425[(1)] = (36));
} else
{var statearr_13353_13426 = state_13321__$1;(statearr_13353_13426[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (13)))
{var inst_13212 = (state_13321[(26)]);var inst_13215 = cljs.core.async.close_BANG_.call(null,inst_13212);var state_13321__$1 = state_13321;var statearr_13354_13427 = state_13321__$1;(statearr_13354_13427[(2)] = inst_13215);
(statearr_13354_13427[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (22)))
{var inst_13233 = (state_13321[(8)]);var inst_13236 = cljs.core.async.close_BANG_.call(null,inst_13233);var state_13321__$1 = state_13321;var statearr_13355_13428 = state_13321__$1;(statearr_13355_13428[(2)] = inst_13236);
(statearr_13355_13428[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (36)))
{var inst_13280 = (state_13321[(25)]);var inst_13284 = cljs.core.chunk_first.call(null,inst_13280);var inst_13285 = cljs.core.chunk_rest.call(null,inst_13280);var inst_13286 = cljs.core.count.call(null,inst_13284);var inst_13261 = inst_13285;var inst_13262 = inst_13284;var inst_13263 = inst_13286;var inst_13264 = (0);var state_13321__$1 = (function (){var statearr_13356 = state_13321;(statearr_13356[(20)] = inst_13261);
(statearr_13356[(21)] = inst_13263);
(statearr_13356[(9)] = inst_13264);
(statearr_13356[(11)] = inst_13262);
return statearr_13356;
})();var statearr_13357_13429 = state_13321__$1;(statearr_13357_13429[(2)] = null);
(statearr_13357_13429[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (41)))
{var inst_13280 = (state_13321[(25)]);var inst_13296 = (state_13321[(2)]);var inst_13297 = cljs.core.next.call(null,inst_13280);var inst_13261 = inst_13297;var inst_13262 = null;var inst_13263 = (0);var inst_13264 = (0);var state_13321__$1 = (function (){var statearr_13358 = state_13321;(statearr_13358[(20)] = inst_13261);
(statearr_13358[(21)] = inst_13263);
(statearr_13358[(27)] = inst_13296);
(statearr_13358[(9)] = inst_13264);
(statearr_13358[(11)] = inst_13262);
return statearr_13358;
})();var statearr_13359_13430 = state_13321__$1;(statearr_13359_13430[(2)] = null);
(statearr_13359_13430[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (43)))
{var state_13321__$1 = state_13321;var statearr_13360_13431 = state_13321__$1;(statearr_13360_13431[(2)] = null);
(statearr_13360_13431[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (29)))
{var inst_13305 = (state_13321[(2)]);var state_13321__$1 = state_13321;var statearr_13361_13432 = state_13321__$1;(statearr_13361_13432[(2)] = inst_13305);
(statearr_13361_13432[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (44)))
{var inst_13314 = (state_13321[(2)]);var state_13321__$1 = (function (){var statearr_13362 = state_13321;(statearr_13362[(28)] = inst_13314);
return statearr_13362;
})();var statearr_13363_13433 = state_13321__$1;(statearr_13363_13433[(2)] = null);
(statearr_13363_13433[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (6)))
{var inst_13253 = (state_13321[(29)]);var inst_13252 = cljs.core.deref.call(null,cs);var inst_13253__$1 = cljs.core.keys.call(null,inst_13252);var inst_13254 = cljs.core.count.call(null,inst_13253__$1);var inst_13255 = cljs.core.reset_BANG_.call(null,dctr,inst_13254);var inst_13260 = cljs.core.seq.call(null,inst_13253__$1);var inst_13261 = inst_13260;var inst_13262 = null;var inst_13263 = (0);var inst_13264 = (0);var state_13321__$1 = (function (){var statearr_13364 = state_13321;(statearr_13364[(20)] = inst_13261);
(statearr_13364[(21)] = inst_13263);
(statearr_13364[(29)] = inst_13253__$1);
(statearr_13364[(30)] = inst_13255);
(statearr_13364[(9)] = inst_13264);
(statearr_13364[(11)] = inst_13262);
return statearr_13364;
})();var statearr_13365_13434 = state_13321__$1;(statearr_13365_13434[(2)] = null);
(statearr_13365_13434[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (28)))
{var inst_13261 = (state_13321[(20)]);var inst_13280 = (state_13321[(25)]);var inst_13280__$1 = cljs.core.seq.call(null,inst_13261);var state_13321__$1 = (function (){var statearr_13366 = state_13321;(statearr_13366[(25)] = inst_13280__$1);
return statearr_13366;
})();if(inst_13280__$1)
{var statearr_13367_13435 = state_13321__$1;(statearr_13367_13435[(1)] = (33));
} else
{var statearr_13368_13436 = state_13321__$1;(statearr_13368_13436[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (25)))
{var inst_13263 = (state_13321[(21)]);var inst_13264 = (state_13321[(9)]);var inst_13266 = (inst_13264 < inst_13263);var inst_13267 = inst_13266;var state_13321__$1 = state_13321;if(cljs.core.truth_(inst_13267))
{var statearr_13369_13437 = state_13321__$1;(statearr_13369_13437[(1)] = (27));
} else
{var statearr_13370_13438 = state_13321__$1;(statearr_13370_13438[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (34)))
{var state_13321__$1 = state_13321;var statearr_13371_13439 = state_13321__$1;(statearr_13371_13439[(2)] = null);
(statearr_13371_13439[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (17)))
{var state_13321__$1 = state_13321;var statearr_13372_13440 = state_13321__$1;(statearr_13372_13440[(2)] = null);
(statearr_13372_13440[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (3)))
{var inst_13319 = (state_13321[(2)]);var state_13321__$1 = state_13321;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13321__$1,inst_13319);
} else
{if((state_val_13322 === (12)))
{var inst_13248 = (state_13321[(2)]);var state_13321__$1 = state_13321;var statearr_13373_13441 = state_13321__$1;(statearr_13373_13441[(2)] = inst_13248);
(statearr_13373_13441[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (2)))
{var state_13321__$1 = state_13321;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13321__$1,(4),ch);
} else
{if((state_val_13322 === (23)))
{var state_13321__$1 = state_13321;var statearr_13374_13442 = state_13321__$1;(statearr_13374_13442[(2)] = null);
(statearr_13374_13442[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (35)))
{var inst_13303 = (state_13321[(2)]);var state_13321__$1 = state_13321;var statearr_13375_13443 = state_13321__$1;(statearr_13375_13443[(2)] = inst_13303);
(statearr_13375_13443[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (19)))
{var inst_13222 = (state_13321[(7)]);var inst_13226 = cljs.core.chunk_first.call(null,inst_13222);var inst_13227 = cljs.core.chunk_rest.call(null,inst_13222);var inst_13228 = cljs.core.count.call(null,inst_13226);var inst_13202 = inst_13227;var inst_13203 = inst_13226;var inst_13204 = inst_13228;var inst_13205 = (0);var state_13321__$1 = (function (){var statearr_13376 = state_13321;(statearr_13376[(14)] = inst_13204);
(statearr_13376[(15)] = inst_13202);
(statearr_13376[(16)] = inst_13203);
(statearr_13376[(17)] = inst_13205);
return statearr_13376;
})();var statearr_13377_13444 = state_13321__$1;(statearr_13377_13444[(2)] = null);
(statearr_13377_13444[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (11)))
{var inst_13202 = (state_13321[(15)]);var inst_13222 = (state_13321[(7)]);var inst_13222__$1 = cljs.core.seq.call(null,inst_13202);var state_13321__$1 = (function (){var statearr_13378 = state_13321;(statearr_13378[(7)] = inst_13222__$1);
return statearr_13378;
})();if(inst_13222__$1)
{var statearr_13379_13445 = state_13321__$1;(statearr_13379_13445[(1)] = (16));
} else
{var statearr_13380_13446 = state_13321__$1;(statearr_13380_13446[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (9)))
{var inst_13250 = (state_13321[(2)]);var state_13321__$1 = state_13321;var statearr_13381_13447 = state_13321__$1;(statearr_13381_13447[(2)] = inst_13250);
(statearr_13381_13447[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (5)))
{var inst_13200 = cljs.core.deref.call(null,cs);var inst_13201 = cljs.core.seq.call(null,inst_13200);var inst_13202 = inst_13201;var inst_13203 = null;var inst_13204 = (0);var inst_13205 = (0);var state_13321__$1 = (function (){var statearr_13382 = state_13321;(statearr_13382[(14)] = inst_13204);
(statearr_13382[(15)] = inst_13202);
(statearr_13382[(16)] = inst_13203);
(statearr_13382[(17)] = inst_13205);
return statearr_13382;
})();var statearr_13383_13448 = state_13321__$1;(statearr_13383_13448[(2)] = null);
(statearr_13383_13448[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (14)))
{var state_13321__$1 = state_13321;var statearr_13384_13449 = state_13321__$1;(statearr_13384_13449[(2)] = null);
(statearr_13384_13449[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (45)))
{var inst_13311 = (state_13321[(2)]);var state_13321__$1 = state_13321;var statearr_13385_13450 = state_13321__$1;(statearr_13385_13450[(2)] = inst_13311);
(statearr_13385_13450[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (26)))
{var inst_13253 = (state_13321[(29)]);var inst_13307 = (state_13321[(2)]);var inst_13308 = cljs.core.seq.call(null,inst_13253);var state_13321__$1 = (function (){var statearr_13386 = state_13321;(statearr_13386[(31)] = inst_13307);
return statearr_13386;
})();if(inst_13308)
{var statearr_13387_13451 = state_13321__$1;(statearr_13387_13451[(1)] = (42));
} else
{var statearr_13388_13452 = state_13321__$1;(statearr_13388_13452[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (16)))
{var inst_13222 = (state_13321[(7)]);var inst_13224 = cljs.core.chunked_seq_QMARK_.call(null,inst_13222);var state_13321__$1 = state_13321;if(inst_13224)
{var statearr_13389_13453 = state_13321__$1;(statearr_13389_13453[(1)] = (19));
} else
{var statearr_13390_13454 = state_13321__$1;(statearr_13390_13454[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (38)))
{var inst_13300 = (state_13321[(2)]);var state_13321__$1 = state_13321;var statearr_13391_13455 = state_13321__$1;(statearr_13391_13455[(2)] = inst_13300);
(statearr_13391_13455[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (30)))
{var state_13321__$1 = state_13321;var statearr_13392_13456 = state_13321__$1;(statearr_13392_13456[(2)] = null);
(statearr_13392_13456[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (10)))
{var inst_13203 = (state_13321[(16)]);var inst_13205 = (state_13321[(17)]);var inst_13211 = cljs.core._nth.call(null,inst_13203,inst_13205);var inst_13212 = cljs.core.nth.call(null,inst_13211,(0),null);var inst_13213 = cljs.core.nth.call(null,inst_13211,(1),null);var state_13321__$1 = (function (){var statearr_13393 = state_13321;(statearr_13393[(26)] = inst_13212);
return statearr_13393;
})();if(cljs.core.truth_(inst_13213))
{var statearr_13394_13457 = state_13321__$1;(statearr_13394_13457[(1)] = (13));
} else
{var statearr_13395_13458 = state_13321__$1;(statearr_13395_13458[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (18)))
{var inst_13246 = (state_13321[(2)]);var state_13321__$1 = state_13321;var statearr_13396_13459 = state_13321__$1;(statearr_13396_13459[(2)] = inst_13246);
(statearr_13396_13459[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (42)))
{var state_13321__$1 = state_13321;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13321__$1,(45),dchan);
} else
{if((state_val_13322 === (37)))
{var inst_13289 = (state_13321[(23)]);var inst_13280 = (state_13321[(25)]);var inst_13193 = (state_13321[(12)]);var inst_13289__$1 = cljs.core.first.call(null,inst_13280);var inst_13290 = cljs.core.async.put_BANG_.call(null,inst_13289__$1,inst_13193,done);var state_13321__$1 = (function (){var statearr_13397 = state_13321;(statearr_13397[(23)] = inst_13289__$1);
return statearr_13397;
})();if(cljs.core.truth_(inst_13290))
{var statearr_13398_13460 = state_13321__$1;(statearr_13398_13460[(1)] = (39));
} else
{var statearr_13399_13461 = state_13321__$1;(statearr_13399_13461[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13322 === (8)))
{var inst_13204 = (state_13321[(14)]);var inst_13205 = (state_13321[(17)]);var inst_13207 = (inst_13205 < inst_13204);var inst_13208 = inst_13207;var state_13321__$1 = state_13321;if(cljs.core.truth_(inst_13208))
{var statearr_13400_13462 = state_13321__$1;(statearr_13400_13462[(1)] = (10));
} else
{var statearr_13401_13463 = state_13321__$1;(statearr_13401_13463[(1)] = (11));
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
});})(c__6831__auto___13409,cs,m,dchan,dctr,done))
;return ((function (switch__6816__auto__,c__6831__auto___13409,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_13405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13405[(0)] = state_machine__6817__auto__);
(statearr_13405[(1)] = (1));
return statearr_13405;
});
var state_machine__6817__auto____1 = (function (state_13321){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_13321);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e13406){if((e13406 instanceof Object))
{var ex__6820__auto__ = e13406;var statearr_13407_13464 = state_13321;(statearr_13407_13464[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13321);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13406;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13465 = state_13321;
state_13321 = G__13465;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_13321){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_13321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___13409,cs,m,dchan,dctr,done))
})();var state__6833__auto__ = (function (){var statearr_13408 = f__6832__auto__.call(null);(statearr_13408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___13409);
return statearr_13408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___13409,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj13467 = {};return obj13467;
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
;var m = (function (){if(typeof cljs.core.async.t13587 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13587 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13588){
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
this.meta13588 = meta13588;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13587.cljs$lang$type = true;
cljs.core.async.t13587.cljs$lang$ctorStr = "cljs.core.async/t13587";
cljs.core.async.t13587.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t13587");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13587.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13587.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13587.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13587.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13587.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13587.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13587.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13587.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13587.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13589){var self__ = this;
var _13589__$1 = this;return self__.meta13588;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13589,meta13588__$1){var self__ = this;
var _13589__$1 = this;return (new cljs.core.async.t13587(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13588__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13587 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13587(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13588){return (new cljs.core.async.t13587(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13588));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13587(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6831__auto___13706 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___13706,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___13706,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13659){var state_val_13660 = (state_13659[(1)]);if((state_val_13660 === (7)))
{var inst_13603 = (state_13659[(7)]);var inst_13608 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13603);var state_13659__$1 = state_13659;var statearr_13661_13707 = state_13659__$1;(statearr_13661_13707[(2)] = inst_13608);
(statearr_13661_13707[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (20)))
{var inst_13618 = (state_13659[(8)]);var state_13659__$1 = state_13659;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13659__$1,(23),out,inst_13618);
} else
{if((state_val_13660 === (1)))
{var inst_13593 = (state_13659[(9)]);var inst_13593__$1 = calc_state.call(null);var inst_13594 = cljs.core.seq_QMARK_.call(null,inst_13593__$1);var state_13659__$1 = (function (){var statearr_13662 = state_13659;(statearr_13662[(9)] = inst_13593__$1);
return statearr_13662;
})();if(inst_13594)
{var statearr_13663_13708 = state_13659__$1;(statearr_13663_13708[(1)] = (2));
} else
{var statearr_13664_13709 = state_13659__$1;(statearr_13664_13709[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (24)))
{var inst_13611 = (state_13659[(10)]);var inst_13603 = inst_13611;var state_13659__$1 = (function (){var statearr_13665 = state_13659;(statearr_13665[(7)] = inst_13603);
return statearr_13665;
})();var statearr_13666_13710 = state_13659__$1;(statearr_13666_13710[(2)] = null);
(statearr_13666_13710[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (4)))
{var inst_13593 = (state_13659[(9)]);var inst_13599 = (state_13659[(2)]);var inst_13600 = cljs.core.get.call(null,inst_13599,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13601 = cljs.core.get.call(null,inst_13599,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13602 = cljs.core.get.call(null,inst_13599,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13603 = inst_13593;var state_13659__$1 = (function (){var statearr_13667 = state_13659;(statearr_13667[(7)] = inst_13603);
(statearr_13667[(11)] = inst_13602);
(statearr_13667[(12)] = inst_13601);
(statearr_13667[(13)] = inst_13600);
return statearr_13667;
})();var statearr_13668_13711 = state_13659__$1;(statearr_13668_13711[(2)] = null);
(statearr_13668_13711[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (15)))
{var state_13659__$1 = state_13659;var statearr_13669_13712 = state_13659__$1;(statearr_13669_13712[(2)] = null);
(statearr_13669_13712[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (21)))
{var inst_13611 = (state_13659[(10)]);var inst_13603 = inst_13611;var state_13659__$1 = (function (){var statearr_13670 = state_13659;(statearr_13670[(7)] = inst_13603);
return statearr_13670;
})();var statearr_13671_13713 = state_13659__$1;(statearr_13671_13713[(2)] = null);
(statearr_13671_13713[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (13)))
{var inst_13655 = (state_13659[(2)]);var state_13659__$1 = state_13659;var statearr_13672_13714 = state_13659__$1;(statearr_13672_13714[(2)] = inst_13655);
(statearr_13672_13714[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (22)))
{var inst_13653 = (state_13659[(2)]);var state_13659__$1 = state_13659;var statearr_13673_13715 = state_13659__$1;(statearr_13673_13715[(2)] = inst_13653);
(statearr_13673_13715[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (6)))
{var inst_13657 = (state_13659[(2)]);var state_13659__$1 = state_13659;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13659__$1,inst_13657);
} else
{if((state_val_13660 === (25)))
{var state_13659__$1 = state_13659;var statearr_13674_13716 = state_13659__$1;(statearr_13674_13716[(2)] = null);
(statearr_13674_13716[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (17)))
{var inst_13633 = (state_13659[(14)]);var state_13659__$1 = state_13659;var statearr_13675_13717 = state_13659__$1;(statearr_13675_13717[(2)] = inst_13633);
(statearr_13675_13717[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (3)))
{var inst_13593 = (state_13659[(9)]);var state_13659__$1 = state_13659;var statearr_13676_13718 = state_13659__$1;(statearr_13676_13718[(2)] = inst_13593);
(statearr_13676_13718[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (12)))
{var inst_13619 = (state_13659[(15)]);var inst_13614 = (state_13659[(16)]);var inst_13633 = (state_13659[(14)]);var inst_13633__$1 = inst_13614.call(null,inst_13619);var state_13659__$1 = (function (){var statearr_13677 = state_13659;(statearr_13677[(14)] = inst_13633__$1);
return statearr_13677;
})();if(cljs.core.truth_(inst_13633__$1))
{var statearr_13678_13719 = state_13659__$1;(statearr_13678_13719[(1)] = (17));
} else
{var statearr_13679_13720 = state_13659__$1;(statearr_13679_13720[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (2)))
{var inst_13593 = (state_13659[(9)]);var inst_13596 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13593);var state_13659__$1 = state_13659;var statearr_13680_13721 = state_13659__$1;(statearr_13680_13721[(2)] = inst_13596);
(statearr_13680_13721[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (23)))
{var inst_13644 = (state_13659[(2)]);var state_13659__$1 = state_13659;if(cljs.core.truth_(inst_13644))
{var statearr_13681_13722 = state_13659__$1;(statearr_13681_13722[(1)] = (24));
} else
{var statearr_13682_13723 = state_13659__$1;(statearr_13682_13723[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (19)))
{var inst_13641 = (state_13659[(2)]);var state_13659__$1 = state_13659;if(cljs.core.truth_(inst_13641))
{var statearr_13683_13724 = state_13659__$1;(statearr_13683_13724[(1)] = (20));
} else
{var statearr_13684_13725 = state_13659__$1;(statearr_13684_13725[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (11)))
{var inst_13618 = (state_13659[(8)]);var inst_13624 = (inst_13618 == null);var state_13659__$1 = state_13659;if(cljs.core.truth_(inst_13624))
{var statearr_13685_13726 = state_13659__$1;(statearr_13685_13726[(1)] = (14));
} else
{var statearr_13686_13727 = state_13659__$1;(statearr_13686_13727[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (9)))
{var inst_13611 = (state_13659[(10)]);var inst_13611__$1 = (state_13659[(2)]);var inst_13612 = cljs.core.get.call(null,inst_13611__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13613 = cljs.core.get.call(null,inst_13611__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13614 = cljs.core.get.call(null,inst_13611__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13659__$1 = (function (){var statearr_13687 = state_13659;(statearr_13687[(16)] = inst_13614);
(statearr_13687[(10)] = inst_13611__$1);
(statearr_13687[(17)] = inst_13613);
return statearr_13687;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13659__$1,(10),inst_13612);
} else
{if((state_val_13660 === (5)))
{var inst_13603 = (state_13659[(7)]);var inst_13606 = cljs.core.seq_QMARK_.call(null,inst_13603);var state_13659__$1 = state_13659;if(inst_13606)
{var statearr_13688_13728 = state_13659__$1;(statearr_13688_13728[(1)] = (7));
} else
{var statearr_13689_13729 = state_13659__$1;(statearr_13689_13729[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (14)))
{var inst_13619 = (state_13659[(15)]);var inst_13626 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13619);var state_13659__$1 = state_13659;var statearr_13690_13730 = state_13659__$1;(statearr_13690_13730[(2)] = inst_13626);
(statearr_13690_13730[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (26)))
{var inst_13649 = (state_13659[(2)]);var state_13659__$1 = state_13659;var statearr_13691_13731 = state_13659__$1;(statearr_13691_13731[(2)] = inst_13649);
(statearr_13691_13731[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (16)))
{var inst_13629 = (state_13659[(2)]);var inst_13630 = calc_state.call(null);var inst_13603 = inst_13630;var state_13659__$1 = (function (){var statearr_13692 = state_13659;(statearr_13692[(7)] = inst_13603);
(statearr_13692[(18)] = inst_13629);
return statearr_13692;
})();var statearr_13693_13732 = state_13659__$1;(statearr_13693_13732[(2)] = null);
(statearr_13693_13732[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (10)))
{var inst_13619 = (state_13659[(15)]);var inst_13618 = (state_13659[(8)]);var inst_13617 = (state_13659[(2)]);var inst_13618__$1 = cljs.core.nth.call(null,inst_13617,(0),null);var inst_13619__$1 = cljs.core.nth.call(null,inst_13617,(1),null);var inst_13620 = (inst_13618__$1 == null);var inst_13621 = cljs.core._EQ_.call(null,inst_13619__$1,change);var inst_13622 = (inst_13620) || (inst_13621);var state_13659__$1 = (function (){var statearr_13694 = state_13659;(statearr_13694[(15)] = inst_13619__$1);
(statearr_13694[(8)] = inst_13618__$1);
return statearr_13694;
})();if(cljs.core.truth_(inst_13622))
{var statearr_13695_13733 = state_13659__$1;(statearr_13695_13733[(1)] = (11));
} else
{var statearr_13696_13734 = state_13659__$1;(statearr_13696_13734[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (18)))
{var inst_13619 = (state_13659[(15)]);var inst_13614 = (state_13659[(16)]);var inst_13613 = (state_13659[(17)]);var inst_13636 = cljs.core.empty_QMARK_.call(null,inst_13614);var inst_13637 = inst_13613.call(null,inst_13619);var inst_13638 = cljs.core.not.call(null,inst_13637);var inst_13639 = (inst_13636) && (inst_13638);var state_13659__$1 = state_13659;var statearr_13697_13735 = state_13659__$1;(statearr_13697_13735[(2)] = inst_13639);
(statearr_13697_13735[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (8)))
{var inst_13603 = (state_13659[(7)]);var state_13659__$1 = state_13659;var statearr_13698_13736 = state_13659__$1;(statearr_13698_13736[(2)] = inst_13603);
(statearr_13698_13736[(1)] = (9));
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
});})(c__6831__auto___13706,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6816__auto__,c__6831__auto___13706,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_13702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13702[(0)] = state_machine__6817__auto__);
(statearr_13702[(1)] = (1));
return statearr_13702;
});
var state_machine__6817__auto____1 = (function (state_13659){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_13659);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e13703){if((e13703 instanceof Object))
{var ex__6820__auto__ = e13703;var statearr_13704_13737 = state_13659;(statearr_13704_13737[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13659);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13703;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13738 = state_13659;
state_13659 = G__13738;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_13659){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_13659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___13706,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6833__auto__ = (function (){var statearr_13705 = f__6832__auto__.call(null);(statearr_13705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___13706);
return statearr_13705;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___13706,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj13740 = {};return obj13740;
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
return (function (p1__13741_SHARP_){if(cljs.core.truth_(p1__13741_SHARP_.call(null,topic)))
{return p1__13741_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13741_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3626__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13864 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13864 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13865){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13865 = meta13865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13864.cljs$lang$type = true;
cljs.core.async.t13864.cljs$lang$ctorStr = "cljs.core.async/t13864";
cljs.core.async.t13864.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t13864");
});})(mults,ensure_mult))
;
cljs.core.async.t13864.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13864.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13864.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13864.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13864.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13864.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13864.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13866){var self__ = this;
var _13866__$1 = this;return self__.meta13865;
});})(mults,ensure_mult))
;
cljs.core.async.t13864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13866,meta13865__$1){var self__ = this;
var _13866__$1 = this;return (new cljs.core.async.t13864(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13865__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13864 = ((function (mults,ensure_mult){
return (function __GT_t13864(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13865){return (new cljs.core.async.t13864(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13865));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13864(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6831__auto___13986 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___13986,mults,ensure_mult,p){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___13986,mults,ensure_mult,p){
return (function (state_13938){var state_val_13939 = (state_13938[(1)]);if((state_val_13939 === (7)))
{var inst_13934 = (state_13938[(2)]);var state_13938__$1 = state_13938;var statearr_13940_13987 = state_13938__$1;(statearr_13940_13987[(2)] = inst_13934);
(statearr_13940_13987[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (20)))
{var state_13938__$1 = state_13938;var statearr_13941_13988 = state_13938__$1;(statearr_13941_13988[(2)] = null);
(statearr_13941_13988[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (1)))
{var state_13938__$1 = state_13938;var statearr_13942_13989 = state_13938__$1;(statearr_13942_13989[(2)] = null);
(statearr_13942_13989[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (24)))
{var inst_13917 = (state_13938[(7)]);var inst_13926 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13917);var state_13938__$1 = state_13938;var statearr_13943_13990 = state_13938__$1;(statearr_13943_13990[(2)] = inst_13926);
(statearr_13943_13990[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (4)))
{var inst_13869 = (state_13938[(8)]);var inst_13869__$1 = (state_13938[(2)]);var inst_13870 = (inst_13869__$1 == null);var state_13938__$1 = (function (){var statearr_13944 = state_13938;(statearr_13944[(8)] = inst_13869__$1);
return statearr_13944;
})();if(cljs.core.truth_(inst_13870))
{var statearr_13945_13991 = state_13938__$1;(statearr_13945_13991[(1)] = (5));
} else
{var statearr_13946_13992 = state_13938__$1;(statearr_13946_13992[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (15)))
{var inst_13911 = (state_13938[(2)]);var state_13938__$1 = state_13938;var statearr_13947_13993 = state_13938__$1;(statearr_13947_13993[(2)] = inst_13911);
(statearr_13947_13993[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (21)))
{var inst_13931 = (state_13938[(2)]);var state_13938__$1 = (function (){var statearr_13948 = state_13938;(statearr_13948[(9)] = inst_13931);
return statearr_13948;
})();var statearr_13949_13994 = state_13938__$1;(statearr_13949_13994[(2)] = null);
(statearr_13949_13994[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (13)))
{var inst_13893 = (state_13938[(10)]);var inst_13895 = cljs.core.chunked_seq_QMARK_.call(null,inst_13893);var state_13938__$1 = state_13938;if(inst_13895)
{var statearr_13950_13995 = state_13938__$1;(statearr_13950_13995[(1)] = (16));
} else
{var statearr_13951_13996 = state_13938__$1;(statearr_13951_13996[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (22)))
{var inst_13923 = (state_13938[(2)]);var state_13938__$1 = state_13938;if(cljs.core.truth_(inst_13923))
{var statearr_13952_13997 = state_13938__$1;(statearr_13952_13997[(1)] = (23));
} else
{var statearr_13953_13998 = state_13938__$1;(statearr_13953_13998[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (6)))
{var inst_13917 = (state_13938[(7)]);var inst_13919 = (state_13938[(11)]);var inst_13869 = (state_13938[(8)]);var inst_13917__$1 = topic_fn.call(null,inst_13869);var inst_13918 = cljs.core.deref.call(null,mults);var inst_13919__$1 = cljs.core.get.call(null,inst_13918,inst_13917__$1);var state_13938__$1 = (function (){var statearr_13954 = state_13938;(statearr_13954[(7)] = inst_13917__$1);
(statearr_13954[(11)] = inst_13919__$1);
return statearr_13954;
})();if(cljs.core.truth_(inst_13919__$1))
{var statearr_13955_13999 = state_13938__$1;(statearr_13955_13999[(1)] = (19));
} else
{var statearr_13956_14000 = state_13938__$1;(statearr_13956_14000[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (25)))
{var inst_13928 = (state_13938[(2)]);var state_13938__$1 = state_13938;var statearr_13957_14001 = state_13938__$1;(statearr_13957_14001[(2)] = inst_13928);
(statearr_13957_14001[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (17)))
{var inst_13893 = (state_13938[(10)]);var inst_13902 = cljs.core.first.call(null,inst_13893);var inst_13903 = cljs.core.async.muxch_STAR_.call(null,inst_13902);var inst_13904 = cljs.core.async.close_BANG_.call(null,inst_13903);var inst_13905 = cljs.core.next.call(null,inst_13893);var inst_13879 = inst_13905;var inst_13880 = null;var inst_13881 = (0);var inst_13882 = (0);var state_13938__$1 = (function (){var statearr_13958 = state_13938;(statearr_13958[(12)] = inst_13880);
(statearr_13958[(13)] = inst_13882);
(statearr_13958[(14)] = inst_13904);
(statearr_13958[(15)] = inst_13879);
(statearr_13958[(16)] = inst_13881);
return statearr_13958;
})();var statearr_13959_14002 = state_13938__$1;(statearr_13959_14002[(2)] = null);
(statearr_13959_14002[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (3)))
{var inst_13936 = (state_13938[(2)]);var state_13938__$1 = state_13938;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13938__$1,inst_13936);
} else
{if((state_val_13939 === (12)))
{var inst_13913 = (state_13938[(2)]);var state_13938__$1 = state_13938;var statearr_13960_14003 = state_13938__$1;(statearr_13960_14003[(2)] = inst_13913);
(statearr_13960_14003[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (2)))
{var state_13938__$1 = state_13938;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13938__$1,(4),ch);
} else
{if((state_val_13939 === (23)))
{var state_13938__$1 = state_13938;var statearr_13961_14004 = state_13938__$1;(statearr_13961_14004[(2)] = null);
(statearr_13961_14004[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (19)))
{var inst_13919 = (state_13938[(11)]);var inst_13869 = (state_13938[(8)]);var inst_13921 = cljs.core.async.muxch_STAR_.call(null,inst_13919);var state_13938__$1 = state_13938;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13938__$1,(22),inst_13921,inst_13869);
} else
{if((state_val_13939 === (11)))
{var inst_13879 = (state_13938[(15)]);var inst_13893 = (state_13938[(10)]);var inst_13893__$1 = cljs.core.seq.call(null,inst_13879);var state_13938__$1 = (function (){var statearr_13962 = state_13938;(statearr_13962[(10)] = inst_13893__$1);
return statearr_13962;
})();if(inst_13893__$1)
{var statearr_13963_14005 = state_13938__$1;(statearr_13963_14005[(1)] = (13));
} else
{var statearr_13964_14006 = state_13938__$1;(statearr_13964_14006[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (9)))
{var inst_13915 = (state_13938[(2)]);var state_13938__$1 = state_13938;var statearr_13965_14007 = state_13938__$1;(statearr_13965_14007[(2)] = inst_13915);
(statearr_13965_14007[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (5)))
{var inst_13876 = cljs.core.deref.call(null,mults);var inst_13877 = cljs.core.vals.call(null,inst_13876);var inst_13878 = cljs.core.seq.call(null,inst_13877);var inst_13879 = inst_13878;var inst_13880 = null;var inst_13881 = (0);var inst_13882 = (0);var state_13938__$1 = (function (){var statearr_13966 = state_13938;(statearr_13966[(12)] = inst_13880);
(statearr_13966[(13)] = inst_13882);
(statearr_13966[(15)] = inst_13879);
(statearr_13966[(16)] = inst_13881);
return statearr_13966;
})();var statearr_13967_14008 = state_13938__$1;(statearr_13967_14008[(2)] = null);
(statearr_13967_14008[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (14)))
{var state_13938__$1 = state_13938;var statearr_13971_14009 = state_13938__$1;(statearr_13971_14009[(2)] = null);
(statearr_13971_14009[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (16)))
{var inst_13893 = (state_13938[(10)]);var inst_13897 = cljs.core.chunk_first.call(null,inst_13893);var inst_13898 = cljs.core.chunk_rest.call(null,inst_13893);var inst_13899 = cljs.core.count.call(null,inst_13897);var inst_13879 = inst_13898;var inst_13880 = inst_13897;var inst_13881 = inst_13899;var inst_13882 = (0);var state_13938__$1 = (function (){var statearr_13972 = state_13938;(statearr_13972[(12)] = inst_13880);
(statearr_13972[(13)] = inst_13882);
(statearr_13972[(15)] = inst_13879);
(statearr_13972[(16)] = inst_13881);
return statearr_13972;
})();var statearr_13973_14010 = state_13938__$1;(statearr_13973_14010[(2)] = null);
(statearr_13973_14010[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (10)))
{var inst_13880 = (state_13938[(12)]);var inst_13882 = (state_13938[(13)]);var inst_13879 = (state_13938[(15)]);var inst_13881 = (state_13938[(16)]);var inst_13887 = cljs.core._nth.call(null,inst_13880,inst_13882);var inst_13888 = cljs.core.async.muxch_STAR_.call(null,inst_13887);var inst_13889 = cljs.core.async.close_BANG_.call(null,inst_13888);var inst_13890 = (inst_13882 + (1));var tmp13968 = inst_13880;var tmp13969 = inst_13879;var tmp13970 = inst_13881;var inst_13879__$1 = tmp13969;var inst_13880__$1 = tmp13968;var inst_13881__$1 = tmp13970;var inst_13882__$1 = inst_13890;var state_13938__$1 = (function (){var statearr_13974 = state_13938;(statearr_13974[(12)] = inst_13880__$1);
(statearr_13974[(13)] = inst_13882__$1);
(statearr_13974[(15)] = inst_13879__$1);
(statearr_13974[(16)] = inst_13881__$1);
(statearr_13974[(17)] = inst_13889);
return statearr_13974;
})();var statearr_13975_14011 = state_13938__$1;(statearr_13975_14011[(2)] = null);
(statearr_13975_14011[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (18)))
{var inst_13908 = (state_13938[(2)]);var state_13938__$1 = state_13938;var statearr_13976_14012 = state_13938__$1;(statearr_13976_14012[(2)] = inst_13908);
(statearr_13976_14012[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13939 === (8)))
{var inst_13882 = (state_13938[(13)]);var inst_13881 = (state_13938[(16)]);var inst_13884 = (inst_13882 < inst_13881);var inst_13885 = inst_13884;var state_13938__$1 = state_13938;if(cljs.core.truth_(inst_13885))
{var statearr_13977_14013 = state_13938__$1;(statearr_13977_14013[(1)] = (10));
} else
{var statearr_13978_14014 = state_13938__$1;(statearr_13978_14014[(1)] = (11));
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
});})(c__6831__auto___13986,mults,ensure_mult,p))
;return ((function (switch__6816__auto__,c__6831__auto___13986,mults,ensure_mult,p){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_13982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13982[(0)] = state_machine__6817__auto__);
(statearr_13982[(1)] = (1));
return statearr_13982;
});
var state_machine__6817__auto____1 = (function (state_13938){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_13938);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e13983){if((e13983 instanceof Object))
{var ex__6820__auto__ = e13983;var statearr_13984_14015 = state_13938;(statearr_13984_14015[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13938);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13983;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14016 = state_13938;
state_13938 = G__14016;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_13938){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_13938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___13986,mults,ensure_mult,p))
})();var state__6833__auto__ = (function (){var statearr_13985 = f__6832__auto__.call(null);(statearr_13985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___13986);
return statearr_13985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___13986,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6831__auto___14153 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___14153,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___14153,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14123){var state_val_14124 = (state_14123[(1)]);if((state_val_14124 === (7)))
{var state_14123__$1 = state_14123;var statearr_14125_14154 = state_14123__$1;(statearr_14125_14154[(2)] = null);
(statearr_14125_14154[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14124 === (1)))
{var state_14123__$1 = state_14123;var statearr_14126_14155 = state_14123__$1;(statearr_14126_14155[(2)] = null);
(statearr_14126_14155[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14124 === (4)))
{var inst_14087 = (state_14123[(7)]);var inst_14089 = (inst_14087 < cnt);var state_14123__$1 = state_14123;if(cljs.core.truth_(inst_14089))
{var statearr_14127_14156 = state_14123__$1;(statearr_14127_14156[(1)] = (6));
} else
{var statearr_14128_14157 = state_14123__$1;(statearr_14128_14157[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14124 === (15)))
{var inst_14119 = (state_14123[(2)]);var state_14123__$1 = state_14123;var statearr_14129_14158 = state_14123__$1;(statearr_14129_14158[(2)] = inst_14119);
(statearr_14129_14158[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14124 === (13)))
{var inst_14112 = cljs.core.async.close_BANG_.call(null,out);var state_14123__$1 = state_14123;var statearr_14130_14159 = state_14123__$1;(statearr_14130_14159[(2)] = inst_14112);
(statearr_14130_14159[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14124 === (6)))
{var state_14123__$1 = state_14123;var statearr_14131_14160 = state_14123__$1;(statearr_14131_14160[(2)] = null);
(statearr_14131_14160[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14124 === (3)))
{var inst_14121 = (state_14123[(2)]);var state_14123__$1 = state_14123;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14123__$1,inst_14121);
} else
{if((state_val_14124 === (12)))
{var inst_14109 = (state_14123[(8)]);var inst_14109__$1 = (state_14123[(2)]);var inst_14110 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14109__$1);var state_14123__$1 = (function (){var statearr_14132 = state_14123;(statearr_14132[(8)] = inst_14109__$1);
return statearr_14132;
})();if(cljs.core.truth_(inst_14110))
{var statearr_14133_14161 = state_14123__$1;(statearr_14133_14161[(1)] = (13));
} else
{var statearr_14134_14162 = state_14123__$1;(statearr_14134_14162[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14124 === (2)))
{var inst_14086 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14087 = (0);var state_14123__$1 = (function (){var statearr_14135 = state_14123;(statearr_14135[(9)] = inst_14086);
(statearr_14135[(7)] = inst_14087);
return statearr_14135;
})();var statearr_14136_14163 = state_14123__$1;(statearr_14136_14163[(2)] = null);
(statearr_14136_14163[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14124 === (11)))
{var inst_14087 = (state_14123[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14123,(10),Object,null,(9));var inst_14096 = chs__$1.call(null,inst_14087);var inst_14097 = done.call(null,inst_14087);var inst_14098 = cljs.core.async.take_BANG_.call(null,inst_14096,inst_14097);var state_14123__$1 = state_14123;var statearr_14137_14164 = state_14123__$1;(statearr_14137_14164[(2)] = inst_14098);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14123__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14124 === (9)))
{var inst_14087 = (state_14123[(7)]);var inst_14100 = (state_14123[(2)]);var inst_14101 = (inst_14087 + (1));var inst_14087__$1 = inst_14101;var state_14123__$1 = (function (){var statearr_14138 = state_14123;(statearr_14138[(10)] = inst_14100);
(statearr_14138[(7)] = inst_14087__$1);
return statearr_14138;
})();var statearr_14139_14165 = state_14123__$1;(statearr_14139_14165[(2)] = null);
(statearr_14139_14165[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14124 === (5)))
{var inst_14107 = (state_14123[(2)]);var state_14123__$1 = (function (){var statearr_14140 = state_14123;(statearr_14140[(11)] = inst_14107);
return statearr_14140;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14123__$1,(12),dchan);
} else
{if((state_val_14124 === (14)))
{var inst_14109 = (state_14123[(8)]);var inst_14114 = cljs.core.apply.call(null,f,inst_14109);var state_14123__$1 = state_14123;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14123__$1,(16),out,inst_14114);
} else
{if((state_val_14124 === (16)))
{var inst_14116 = (state_14123[(2)]);var state_14123__$1 = (function (){var statearr_14141 = state_14123;(statearr_14141[(12)] = inst_14116);
return statearr_14141;
})();var statearr_14142_14166 = state_14123__$1;(statearr_14142_14166[(2)] = null);
(statearr_14142_14166[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14124 === (10)))
{var inst_14091 = (state_14123[(2)]);var inst_14092 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14123__$1 = (function (){var statearr_14143 = state_14123;(statearr_14143[(13)] = inst_14091);
return statearr_14143;
})();var statearr_14144_14167 = state_14123__$1;(statearr_14144_14167[(2)] = inst_14092);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14123__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14124 === (8)))
{var inst_14105 = (state_14123[(2)]);var state_14123__$1 = state_14123;var statearr_14145_14168 = state_14123__$1;(statearr_14145_14168[(2)] = inst_14105);
(statearr_14145_14168[(1)] = (5));
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
});})(c__6831__auto___14153,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6816__auto__,c__6831__auto___14153,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_14149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14149[(0)] = state_machine__6817__auto__);
(statearr_14149[(1)] = (1));
return statearr_14149;
});
var state_machine__6817__auto____1 = (function (state_14123){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_14123);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e14150){if((e14150 instanceof Object))
{var ex__6820__auto__ = e14150;var statearr_14151_14169 = state_14123;(statearr_14151_14169[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14123);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14150;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14170 = state_14123;
state_14123 = G__14170;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_14123){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_14123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___14153,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6833__auto__ = (function (){var statearr_14152 = f__6832__auto__.call(null);(statearr_14152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___14153);
return statearr_14152;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___14153,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6831__auto___14278 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___14278,out){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___14278,out){
return (function (state_14254){var state_val_14255 = (state_14254[(1)]);if((state_val_14255 === (7)))
{var inst_14233 = (state_14254[(7)]);var inst_14234 = (state_14254[(8)]);var inst_14233__$1 = (state_14254[(2)]);var inst_14234__$1 = cljs.core.nth.call(null,inst_14233__$1,(0),null);var inst_14235 = cljs.core.nth.call(null,inst_14233__$1,(1),null);var inst_14236 = (inst_14234__$1 == null);var state_14254__$1 = (function (){var statearr_14256 = state_14254;(statearr_14256[(9)] = inst_14235);
(statearr_14256[(7)] = inst_14233__$1);
(statearr_14256[(8)] = inst_14234__$1);
return statearr_14256;
})();if(cljs.core.truth_(inst_14236))
{var statearr_14257_14279 = state_14254__$1;(statearr_14257_14279[(1)] = (8));
} else
{var statearr_14258_14280 = state_14254__$1;(statearr_14258_14280[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14255 === (1)))
{var inst_14225 = cljs.core.vec.call(null,chs);var inst_14226 = inst_14225;var state_14254__$1 = (function (){var statearr_14259 = state_14254;(statearr_14259[(10)] = inst_14226);
return statearr_14259;
})();var statearr_14260_14281 = state_14254__$1;(statearr_14260_14281[(2)] = null);
(statearr_14260_14281[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14255 === (4)))
{var inst_14226 = (state_14254[(10)]);var state_14254__$1 = state_14254;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14254__$1,(7),inst_14226);
} else
{if((state_val_14255 === (6)))
{var inst_14250 = (state_14254[(2)]);var state_14254__$1 = state_14254;var statearr_14261_14282 = state_14254__$1;(statearr_14261_14282[(2)] = inst_14250);
(statearr_14261_14282[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14255 === (3)))
{var inst_14252 = (state_14254[(2)]);var state_14254__$1 = state_14254;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14254__$1,inst_14252);
} else
{if((state_val_14255 === (2)))
{var inst_14226 = (state_14254[(10)]);var inst_14228 = cljs.core.count.call(null,inst_14226);var inst_14229 = (inst_14228 > (0));var state_14254__$1 = state_14254;if(cljs.core.truth_(inst_14229))
{var statearr_14263_14283 = state_14254__$1;(statearr_14263_14283[(1)] = (4));
} else
{var statearr_14264_14284 = state_14254__$1;(statearr_14264_14284[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14255 === (11)))
{var inst_14226 = (state_14254[(10)]);var inst_14243 = (state_14254[(2)]);var tmp14262 = inst_14226;var inst_14226__$1 = tmp14262;var state_14254__$1 = (function (){var statearr_14265 = state_14254;(statearr_14265[(10)] = inst_14226__$1);
(statearr_14265[(11)] = inst_14243);
return statearr_14265;
})();var statearr_14266_14285 = state_14254__$1;(statearr_14266_14285[(2)] = null);
(statearr_14266_14285[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14255 === (9)))
{var inst_14234 = (state_14254[(8)]);var state_14254__$1 = state_14254;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14254__$1,(11),out,inst_14234);
} else
{if((state_val_14255 === (5)))
{var inst_14248 = cljs.core.async.close_BANG_.call(null,out);var state_14254__$1 = state_14254;var statearr_14267_14286 = state_14254__$1;(statearr_14267_14286[(2)] = inst_14248);
(statearr_14267_14286[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14255 === (10)))
{var inst_14246 = (state_14254[(2)]);var state_14254__$1 = state_14254;var statearr_14268_14287 = state_14254__$1;(statearr_14268_14287[(2)] = inst_14246);
(statearr_14268_14287[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14255 === (8)))
{var inst_14235 = (state_14254[(9)]);var inst_14233 = (state_14254[(7)]);var inst_14226 = (state_14254[(10)]);var inst_14234 = (state_14254[(8)]);var inst_14238 = (function (){var c = inst_14235;var v = inst_14234;var vec__14231 = inst_14233;var cs = inst_14226;return ((function (c,v,vec__14231,cs,inst_14235,inst_14233,inst_14226,inst_14234,state_val_14255,c__6831__auto___14278,out){
return (function (p1__14171_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14171_SHARP_);
});
;})(c,v,vec__14231,cs,inst_14235,inst_14233,inst_14226,inst_14234,state_val_14255,c__6831__auto___14278,out))
})();var inst_14239 = cljs.core.filterv.call(null,inst_14238,inst_14226);var inst_14226__$1 = inst_14239;var state_14254__$1 = (function (){var statearr_14269 = state_14254;(statearr_14269[(10)] = inst_14226__$1);
return statearr_14269;
})();var statearr_14270_14288 = state_14254__$1;(statearr_14270_14288[(2)] = null);
(statearr_14270_14288[(1)] = (2));
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
});})(c__6831__auto___14278,out))
;return ((function (switch__6816__auto__,c__6831__auto___14278,out){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_14274 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14274[(0)] = state_machine__6817__auto__);
(statearr_14274[(1)] = (1));
return statearr_14274;
});
var state_machine__6817__auto____1 = (function (state_14254){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_14254);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e14275){if((e14275 instanceof Object))
{var ex__6820__auto__ = e14275;var statearr_14276_14289 = state_14254;(statearr_14276_14289[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14254);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14275;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14290 = state_14254;
state_14254 = G__14290;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_14254){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_14254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___14278,out))
})();var state__6833__auto__ = (function (){var statearr_14277 = f__6832__auto__.call(null);(statearr_14277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___14278);
return statearr_14277;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___14278,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6831__auto___14383 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___14383,out){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___14383,out){
return (function (state_14360){var state_val_14361 = (state_14360[(1)]);if((state_val_14361 === (7)))
{var inst_14342 = (state_14360[(7)]);var inst_14342__$1 = (state_14360[(2)]);var inst_14343 = (inst_14342__$1 == null);var inst_14344 = cljs.core.not.call(null,inst_14343);var state_14360__$1 = (function (){var statearr_14362 = state_14360;(statearr_14362[(7)] = inst_14342__$1);
return statearr_14362;
})();if(inst_14344)
{var statearr_14363_14384 = state_14360__$1;(statearr_14363_14384[(1)] = (8));
} else
{var statearr_14364_14385 = state_14360__$1;(statearr_14364_14385[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (1)))
{var inst_14337 = (0);var state_14360__$1 = (function (){var statearr_14365 = state_14360;(statearr_14365[(8)] = inst_14337);
return statearr_14365;
})();var statearr_14366_14386 = state_14360__$1;(statearr_14366_14386[(2)] = null);
(statearr_14366_14386[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (4)))
{var state_14360__$1 = state_14360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14360__$1,(7),ch);
} else
{if((state_val_14361 === (6)))
{var inst_14355 = (state_14360[(2)]);var state_14360__$1 = state_14360;var statearr_14367_14387 = state_14360__$1;(statearr_14367_14387[(2)] = inst_14355);
(statearr_14367_14387[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (3)))
{var inst_14357 = (state_14360[(2)]);var inst_14358 = cljs.core.async.close_BANG_.call(null,out);var state_14360__$1 = (function (){var statearr_14368 = state_14360;(statearr_14368[(9)] = inst_14357);
return statearr_14368;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14360__$1,inst_14358);
} else
{if((state_val_14361 === (2)))
{var inst_14337 = (state_14360[(8)]);var inst_14339 = (inst_14337 < n);var state_14360__$1 = state_14360;if(cljs.core.truth_(inst_14339))
{var statearr_14369_14388 = state_14360__$1;(statearr_14369_14388[(1)] = (4));
} else
{var statearr_14370_14389 = state_14360__$1;(statearr_14370_14389[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (11)))
{var inst_14337 = (state_14360[(8)]);var inst_14347 = (state_14360[(2)]);var inst_14348 = (inst_14337 + (1));var inst_14337__$1 = inst_14348;var state_14360__$1 = (function (){var statearr_14371 = state_14360;(statearr_14371[(8)] = inst_14337__$1);
(statearr_14371[(10)] = inst_14347);
return statearr_14371;
})();var statearr_14372_14390 = state_14360__$1;(statearr_14372_14390[(2)] = null);
(statearr_14372_14390[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (9)))
{var state_14360__$1 = state_14360;var statearr_14373_14391 = state_14360__$1;(statearr_14373_14391[(2)] = null);
(statearr_14373_14391[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (5)))
{var state_14360__$1 = state_14360;var statearr_14374_14392 = state_14360__$1;(statearr_14374_14392[(2)] = null);
(statearr_14374_14392[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (10)))
{var inst_14352 = (state_14360[(2)]);var state_14360__$1 = state_14360;var statearr_14375_14393 = state_14360__$1;(statearr_14375_14393[(2)] = inst_14352);
(statearr_14375_14393[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (8)))
{var inst_14342 = (state_14360[(7)]);var state_14360__$1 = state_14360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14360__$1,(11),out,inst_14342);
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
});})(c__6831__auto___14383,out))
;return ((function (switch__6816__auto__,c__6831__auto___14383,out){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_14379 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14379[(0)] = state_machine__6817__auto__);
(statearr_14379[(1)] = (1));
return statearr_14379;
});
var state_machine__6817__auto____1 = (function (state_14360){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_14360);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e14380){if((e14380 instanceof Object))
{var ex__6820__auto__ = e14380;var statearr_14381_14394 = state_14360;(statearr_14381_14394[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14360);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14380;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14395 = state_14360;
state_14360 = G__14395;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_14360){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_14360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___14383,out))
})();var state__6833__auto__ = (function (){var statearr_14382 = f__6832__auto__.call(null);(statearr_14382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___14383);
return statearr_14382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___14383,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14403 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14403 = (function (ch,f,map_LT_,meta14404){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14404 = meta14404;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14403.cljs$lang$type = true;
cljs.core.async.t14403.cljs$lang$ctorStr = "cljs.core.async/t14403";
cljs.core.async.t14403.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t14403");
});
cljs.core.async.t14403.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14403.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14403.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14403.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14406 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14406 = (function (fn1,_,meta14404,ch,f,map_LT_,meta14407){
this.fn1 = fn1;
this._ = _;
this.meta14404 = meta14404;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14407 = meta14407;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14406.cljs$lang$type = true;
cljs.core.async.t14406.cljs$lang$ctorStr = "cljs.core.async/t14406";
cljs.core.async.t14406.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t14406");
});})(___$1))
;
cljs.core.async.t14406.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14406.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14406.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14406.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14396_SHARP_){return f1.call(null,(((p1__14396_SHARP_ == null))?null:self__.f.call(null,p1__14396_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14406.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14408){var self__ = this;
var _14408__$1 = this;return self__.meta14407;
});})(___$1))
;
cljs.core.async.t14406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14408,meta14407__$1){var self__ = this;
var _14408__$1 = this;return (new cljs.core.async.t14406(self__.fn1,self__._,self__.meta14404,self__.ch,self__.f,self__.map_LT_,meta14407__$1));
});})(___$1))
;
cljs.core.async.__GT_t14406 = ((function (___$1){
return (function __GT_t14406(fn1__$1,___$2,meta14404__$1,ch__$2,f__$2,map_LT___$2,meta14407){return (new cljs.core.async.t14406(fn1__$1,___$2,meta14404__$1,ch__$2,f__$2,map_LT___$2,meta14407));
});})(___$1))
;
}
return (new cljs.core.async.t14406(fn1,___$1,self__.meta14404,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t14403.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14403.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14403.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14405){var self__ = this;
var _14405__$1 = this;return self__.meta14404;
});
cljs.core.async.t14403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14405,meta14404__$1){var self__ = this;
var _14405__$1 = this;return (new cljs.core.async.t14403(self__.ch,self__.f,self__.map_LT_,meta14404__$1));
});
cljs.core.async.__GT_t14403 = (function __GT_t14403(ch__$1,f__$1,map_LT___$1,meta14404){return (new cljs.core.async.t14403(ch__$1,f__$1,map_LT___$1,meta14404));
});
}
return (new cljs.core.async.t14403(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14412 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14412 = (function (ch,f,map_GT_,meta14413){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14413 = meta14413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14412.cljs$lang$type = true;
cljs.core.async.t14412.cljs$lang$ctorStr = "cljs.core.async/t14412";
cljs.core.async.t14412.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t14412");
});
cljs.core.async.t14412.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14412.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14412.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14412.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14412.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14412.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14414){var self__ = this;
var _14414__$1 = this;return self__.meta14413;
});
cljs.core.async.t14412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14414,meta14413__$1){var self__ = this;
var _14414__$1 = this;return (new cljs.core.async.t14412(self__.ch,self__.f,self__.map_GT_,meta14413__$1));
});
cljs.core.async.__GT_t14412 = (function __GT_t14412(ch__$1,f__$1,map_GT___$1,meta14413){return (new cljs.core.async.t14412(ch__$1,f__$1,map_GT___$1,meta14413));
});
}
return (new cljs.core.async.t14412(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14418 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14418 = (function (ch,p,filter_GT_,meta14419){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14419 = meta14419;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14418.cljs$lang$type = true;
cljs.core.async.t14418.cljs$lang$ctorStr = "cljs.core.async/t14418";
cljs.core.async.t14418.cljs$lang$ctorPrWriter = (function (this__4202__auto__,writer__4203__auto__,opt__4204__auto__){return cljs.core._write.call(null,writer__4203__auto__,"cljs.core.async/t14418");
});
cljs.core.async.t14418.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14418.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14418.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14418.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14418.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14418.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14418.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14420){var self__ = this;
var _14420__$1 = this;return self__.meta14419;
});
cljs.core.async.t14418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14420,meta14419__$1){var self__ = this;
var _14420__$1 = this;return (new cljs.core.async.t14418(self__.ch,self__.p,self__.filter_GT_,meta14419__$1));
});
cljs.core.async.__GT_t14418 = (function __GT_t14418(ch__$1,p__$1,filter_GT___$1,meta14419){return (new cljs.core.async.t14418(ch__$1,p__$1,filter_GT___$1,meta14419));
});
}
return (new cljs.core.async.t14418(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6831__auto___14503 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___14503,out){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___14503,out){
return (function (state_14482){var state_val_14483 = (state_14482[(1)]);if((state_val_14483 === (7)))
{var inst_14478 = (state_14482[(2)]);var state_14482__$1 = state_14482;var statearr_14484_14504 = state_14482__$1;(statearr_14484_14504[(2)] = inst_14478);
(statearr_14484_14504[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14483 === (1)))
{var state_14482__$1 = state_14482;var statearr_14485_14505 = state_14482__$1;(statearr_14485_14505[(2)] = null);
(statearr_14485_14505[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14483 === (4)))
{var inst_14464 = (state_14482[(7)]);var inst_14464__$1 = (state_14482[(2)]);var inst_14465 = (inst_14464__$1 == null);var state_14482__$1 = (function (){var statearr_14486 = state_14482;(statearr_14486[(7)] = inst_14464__$1);
return statearr_14486;
})();if(cljs.core.truth_(inst_14465))
{var statearr_14487_14506 = state_14482__$1;(statearr_14487_14506[(1)] = (5));
} else
{var statearr_14488_14507 = state_14482__$1;(statearr_14488_14507[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14483 === (6)))
{var inst_14464 = (state_14482[(7)]);var inst_14469 = p.call(null,inst_14464);var state_14482__$1 = state_14482;if(cljs.core.truth_(inst_14469))
{var statearr_14489_14508 = state_14482__$1;(statearr_14489_14508[(1)] = (8));
} else
{var statearr_14490_14509 = state_14482__$1;(statearr_14490_14509[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14483 === (3)))
{var inst_14480 = (state_14482[(2)]);var state_14482__$1 = state_14482;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14482__$1,inst_14480);
} else
{if((state_val_14483 === (2)))
{var state_14482__$1 = state_14482;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14482__$1,(4),ch);
} else
{if((state_val_14483 === (11)))
{var inst_14472 = (state_14482[(2)]);var state_14482__$1 = state_14482;var statearr_14491_14510 = state_14482__$1;(statearr_14491_14510[(2)] = inst_14472);
(statearr_14491_14510[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14483 === (9)))
{var state_14482__$1 = state_14482;var statearr_14492_14511 = state_14482__$1;(statearr_14492_14511[(2)] = null);
(statearr_14492_14511[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14483 === (5)))
{var inst_14467 = cljs.core.async.close_BANG_.call(null,out);var state_14482__$1 = state_14482;var statearr_14493_14512 = state_14482__$1;(statearr_14493_14512[(2)] = inst_14467);
(statearr_14493_14512[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14483 === (10)))
{var inst_14475 = (state_14482[(2)]);var state_14482__$1 = (function (){var statearr_14494 = state_14482;(statearr_14494[(8)] = inst_14475);
return statearr_14494;
})();var statearr_14495_14513 = state_14482__$1;(statearr_14495_14513[(2)] = null);
(statearr_14495_14513[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14483 === (8)))
{var inst_14464 = (state_14482[(7)]);var state_14482__$1 = state_14482;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14482__$1,(11),out,inst_14464);
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
});})(c__6831__auto___14503,out))
;return ((function (switch__6816__auto__,c__6831__auto___14503,out){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_14499 = [null,null,null,null,null,null,null,null,null];(statearr_14499[(0)] = state_machine__6817__auto__);
(statearr_14499[(1)] = (1));
return statearr_14499;
});
var state_machine__6817__auto____1 = (function (state_14482){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_14482);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e14500){if((e14500 instanceof Object))
{var ex__6820__auto__ = e14500;var statearr_14501_14514 = state_14482;(statearr_14501_14514[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14482);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14500;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14515 = state_14482;
state_14482 = G__14515;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_14482){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_14482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___14503,out))
})();var state__6833__auto__ = (function (){var statearr_14502 = f__6832__auto__.call(null);(statearr_14502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___14503);
return statearr_14502;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___14503,out))
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
return (function (state_14681){var state_val_14682 = (state_14681[(1)]);if((state_val_14682 === (7)))
{var inst_14677 = (state_14681[(2)]);var state_14681__$1 = state_14681;var statearr_14683_14724 = state_14681__$1;(statearr_14683_14724[(2)] = inst_14677);
(statearr_14683_14724[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14682 === (20)))
{var inst_14647 = (state_14681[(7)]);var inst_14658 = (state_14681[(2)]);var inst_14659 = cljs.core.next.call(null,inst_14647);var inst_14633 = inst_14659;var inst_14634 = null;var inst_14635 = (0);var inst_14636 = (0);var state_14681__$1 = (function (){var statearr_14684 = state_14681;(statearr_14684[(8)] = inst_14636);
(statearr_14684[(9)] = inst_14658);
(statearr_14684[(10)] = inst_14633);
(statearr_14684[(11)] = inst_14635);
(statearr_14684[(12)] = inst_14634);
return statearr_14684;
})();var statearr_14685_14725 = state_14681__$1;(statearr_14685_14725[(2)] = null);
(statearr_14685_14725[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14682 === (1)))
{var state_14681__$1 = state_14681;var statearr_14686_14726 = state_14681__$1;(statearr_14686_14726[(2)] = null);
(statearr_14686_14726[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14682 === (4)))
{var inst_14622 = (state_14681[(13)]);var inst_14622__$1 = (state_14681[(2)]);var inst_14623 = (inst_14622__$1 == null);var state_14681__$1 = (function (){var statearr_14687 = state_14681;(statearr_14687[(13)] = inst_14622__$1);
return statearr_14687;
})();if(cljs.core.truth_(inst_14623))
{var statearr_14688_14727 = state_14681__$1;(statearr_14688_14727[(1)] = (5));
} else
{var statearr_14689_14728 = state_14681__$1;(statearr_14689_14728[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14682 === (15)))
{var state_14681__$1 = state_14681;var statearr_14693_14729 = state_14681__$1;(statearr_14693_14729[(2)] = null);
(statearr_14693_14729[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14682 === (21)))
{var state_14681__$1 = state_14681;var statearr_14694_14730 = state_14681__$1;(statearr_14694_14730[(2)] = null);
(statearr_14694_14730[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14682 === (13)))
{var inst_14636 = (state_14681[(8)]);var inst_14633 = (state_14681[(10)]);var inst_14635 = (state_14681[(11)]);var inst_14634 = (state_14681[(12)]);var inst_14643 = (state_14681[(2)]);var inst_14644 = (inst_14636 + (1));var tmp14690 = inst_14633;var tmp14691 = inst_14635;var tmp14692 = inst_14634;var inst_14633__$1 = tmp14690;var inst_14634__$1 = tmp14692;var inst_14635__$1 = tmp14691;var inst_14636__$1 = inst_14644;var state_14681__$1 = (function (){var statearr_14695 = state_14681;(statearr_14695[(8)] = inst_14636__$1);
(statearr_14695[(14)] = inst_14643);
(statearr_14695[(10)] = inst_14633__$1);
(statearr_14695[(11)] = inst_14635__$1);
(statearr_14695[(12)] = inst_14634__$1);
return statearr_14695;
})();var statearr_14696_14731 = state_14681__$1;(statearr_14696_14731[(2)] = null);
(statearr_14696_14731[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14682 === (22)))
{var state_14681__$1 = state_14681;var statearr_14697_14732 = state_14681__$1;(statearr_14697_14732[(2)] = null);
(statearr_14697_14732[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14682 === (6)))
{var inst_14622 = (state_14681[(13)]);var inst_14631 = f.call(null,inst_14622);var inst_14632 = cljs.core.seq.call(null,inst_14631);var inst_14633 = inst_14632;var inst_14634 = null;var inst_14635 = (0);var inst_14636 = (0);var state_14681__$1 = (function (){var statearr_14698 = state_14681;(statearr_14698[(8)] = inst_14636);
(statearr_14698[(10)] = inst_14633);
(statearr_14698[(11)] = inst_14635);
(statearr_14698[(12)] = inst_14634);
return statearr_14698;
})();var statearr_14699_14733 = state_14681__$1;(statearr_14699_14733[(2)] = null);
(statearr_14699_14733[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14682 === (17)))
{var inst_14647 = (state_14681[(7)]);var inst_14651 = cljs.core.chunk_first.call(null,inst_14647);var inst_14652 = cljs.core.chunk_rest.call(null,inst_14647);var inst_14653 = cljs.core.count.call(null,inst_14651);var inst_14633 = inst_14652;var inst_14634 = inst_14651;var inst_14635 = inst_14653;var inst_14636 = (0);var state_14681__$1 = (function (){var statearr_14700 = state_14681;(statearr_14700[(8)] = inst_14636);
(statearr_14700[(10)] = inst_14633);
(statearr_14700[(11)] = inst_14635);
(statearr_14700[(12)] = inst_14634);
return statearr_14700;
})();var statearr_14701_14734 = state_14681__$1;(statearr_14701_14734[(2)] = null);
(statearr_14701_14734[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14682 === (3)))
{var inst_14679 = (state_14681[(2)]);var state_14681__$1 = state_14681;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14681__$1,inst_14679);
} else
{if((state_val_14682 === (12)))
{var inst_14667 = (state_14681[(2)]);var state_14681__$1 = state_14681;var statearr_14702_14735 = state_14681__$1;(statearr_14702_14735[(2)] = inst_14667);
(statearr_14702_14735[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14682 === (2)))
{var state_14681__$1 = state_14681;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14681__$1,(4),in$);
} else
{if((state_val_14682 === (23)))
{var inst_14675 = (state_14681[(2)]);var state_14681__$1 = state_14681;var statearr_14703_14736 = state_14681__$1;(statearr_14703_14736[(2)] = inst_14675);
(statearr_14703_14736[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14682 === (19)))
{var inst_14662 = (state_14681[(2)]);var state_14681__$1 = state_14681;var statearr_14704_14737 = state_14681__$1;(statearr_14704_14737[(2)] = inst_14662);
(statearr_14704_14737[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14682 === (11)))
{var inst_14647 = (state_14681[(7)]);var inst_14633 = (state_14681[(10)]);var inst_14647__$1 = cljs.core.seq.call(null,inst_14633);var state_14681__$1 = (function (){var statearr_14705 = state_14681;(statearr_14705[(7)] = inst_14647__$1);
return statearr_14705;
})();if(inst_14647__$1)
{var statearr_14706_14738 = state_14681__$1;(statearr_14706_14738[(1)] = (14));
} else
{var statearr_14707_14739 = state_14681__$1;(statearr_14707_14739[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14682 === (9)))
{var inst_14669 = (state_14681[(2)]);var inst_14670 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14681__$1 = (function (){var statearr_14708 = state_14681;(statearr_14708[(15)] = inst_14669);
return statearr_14708;
})();if(cljs.core.truth_(inst_14670))
{var statearr_14709_14740 = state_14681__$1;(statearr_14709_14740[(1)] = (21));
} else
{var statearr_14710_14741 = state_14681__$1;(statearr_14710_14741[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14682 === (5)))
{var inst_14625 = cljs.core.async.close_BANG_.call(null,out);var state_14681__$1 = state_14681;var statearr_14711_14742 = state_14681__$1;(statearr_14711_14742[(2)] = inst_14625);
(statearr_14711_14742[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14682 === (14)))
{var inst_14647 = (state_14681[(7)]);var inst_14649 = cljs.core.chunked_seq_QMARK_.call(null,inst_14647);var state_14681__$1 = state_14681;if(inst_14649)
{var statearr_14712_14743 = state_14681__$1;(statearr_14712_14743[(1)] = (17));
} else
{var statearr_14713_14744 = state_14681__$1;(statearr_14713_14744[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14682 === (16)))
{var inst_14665 = (state_14681[(2)]);var state_14681__$1 = state_14681;var statearr_14714_14745 = state_14681__$1;(statearr_14714_14745[(2)] = inst_14665);
(statearr_14714_14745[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14682 === (10)))
{var inst_14636 = (state_14681[(8)]);var inst_14634 = (state_14681[(12)]);var inst_14641 = cljs.core._nth.call(null,inst_14634,inst_14636);var state_14681__$1 = state_14681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14681__$1,(13),out,inst_14641);
} else
{if((state_val_14682 === (18)))
{var inst_14647 = (state_14681[(7)]);var inst_14656 = cljs.core.first.call(null,inst_14647);var state_14681__$1 = state_14681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14681__$1,(20),out,inst_14656);
} else
{if((state_val_14682 === (8)))
{var inst_14636 = (state_14681[(8)]);var inst_14635 = (state_14681[(11)]);var inst_14638 = (inst_14636 < inst_14635);var inst_14639 = inst_14638;var state_14681__$1 = state_14681;if(cljs.core.truth_(inst_14639))
{var statearr_14715_14746 = state_14681__$1;(statearr_14715_14746[(1)] = (10));
} else
{var statearr_14716_14747 = state_14681__$1;(statearr_14716_14747[(1)] = (11));
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
var state_machine__6817__auto____0 = (function (){var statearr_14720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14720[(0)] = state_machine__6817__auto__);
(statearr_14720[(1)] = (1));
return statearr_14720;
});
var state_machine__6817__auto____1 = (function (state_14681){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_14681);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e14721){if((e14721 instanceof Object))
{var ex__6820__auto__ = e14721;var statearr_14722_14748 = state_14681;(statearr_14722_14748[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14681);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14721;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14749 = state_14681;
state_14681 = G__14749;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_14681){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_14681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto__))
})();var state__6833__auto__ = (function (){var statearr_14723 = f__6832__auto__.call(null);(statearr_14723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto__);
return statearr_14723;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6831__auto___14846 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___14846,out){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___14846,out){
return (function (state_14821){var state_val_14822 = (state_14821[(1)]);if((state_val_14822 === (7)))
{var inst_14816 = (state_14821[(2)]);var state_14821__$1 = state_14821;var statearr_14823_14847 = state_14821__$1;(statearr_14823_14847[(2)] = inst_14816);
(statearr_14823_14847[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14822 === (1)))
{var inst_14798 = null;var state_14821__$1 = (function (){var statearr_14824 = state_14821;(statearr_14824[(7)] = inst_14798);
return statearr_14824;
})();var statearr_14825_14848 = state_14821__$1;(statearr_14825_14848[(2)] = null);
(statearr_14825_14848[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14822 === (4)))
{var inst_14801 = (state_14821[(8)]);var inst_14801__$1 = (state_14821[(2)]);var inst_14802 = (inst_14801__$1 == null);var inst_14803 = cljs.core.not.call(null,inst_14802);var state_14821__$1 = (function (){var statearr_14826 = state_14821;(statearr_14826[(8)] = inst_14801__$1);
return statearr_14826;
})();if(inst_14803)
{var statearr_14827_14849 = state_14821__$1;(statearr_14827_14849[(1)] = (5));
} else
{var statearr_14828_14850 = state_14821__$1;(statearr_14828_14850[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14822 === (6)))
{var state_14821__$1 = state_14821;var statearr_14829_14851 = state_14821__$1;(statearr_14829_14851[(2)] = null);
(statearr_14829_14851[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14822 === (3)))
{var inst_14818 = (state_14821[(2)]);var inst_14819 = cljs.core.async.close_BANG_.call(null,out);var state_14821__$1 = (function (){var statearr_14830 = state_14821;(statearr_14830[(9)] = inst_14818);
return statearr_14830;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14821__$1,inst_14819);
} else
{if((state_val_14822 === (2)))
{var state_14821__$1 = state_14821;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14821__$1,(4),ch);
} else
{if((state_val_14822 === (11)))
{var inst_14801 = (state_14821[(8)]);var inst_14810 = (state_14821[(2)]);var inst_14798 = inst_14801;var state_14821__$1 = (function (){var statearr_14831 = state_14821;(statearr_14831[(10)] = inst_14810);
(statearr_14831[(7)] = inst_14798);
return statearr_14831;
})();var statearr_14832_14852 = state_14821__$1;(statearr_14832_14852[(2)] = null);
(statearr_14832_14852[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14822 === (9)))
{var inst_14801 = (state_14821[(8)]);var state_14821__$1 = state_14821;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14821__$1,(11),out,inst_14801);
} else
{if((state_val_14822 === (5)))
{var inst_14801 = (state_14821[(8)]);var inst_14798 = (state_14821[(7)]);var inst_14805 = cljs.core._EQ_.call(null,inst_14801,inst_14798);var state_14821__$1 = state_14821;if(inst_14805)
{var statearr_14834_14853 = state_14821__$1;(statearr_14834_14853[(1)] = (8));
} else
{var statearr_14835_14854 = state_14821__$1;(statearr_14835_14854[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14822 === (10)))
{var inst_14813 = (state_14821[(2)]);var state_14821__$1 = state_14821;var statearr_14836_14855 = state_14821__$1;(statearr_14836_14855[(2)] = inst_14813);
(statearr_14836_14855[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14822 === (8)))
{var inst_14798 = (state_14821[(7)]);var tmp14833 = inst_14798;var inst_14798__$1 = tmp14833;var state_14821__$1 = (function (){var statearr_14837 = state_14821;(statearr_14837[(7)] = inst_14798__$1);
return statearr_14837;
})();var statearr_14838_14856 = state_14821__$1;(statearr_14838_14856[(2)] = null);
(statearr_14838_14856[(1)] = (2));
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
});})(c__6831__auto___14846,out))
;return ((function (switch__6816__auto__,c__6831__auto___14846,out){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_14842 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14842[(0)] = state_machine__6817__auto__);
(statearr_14842[(1)] = (1));
return statearr_14842;
});
var state_machine__6817__auto____1 = (function (state_14821){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_14821);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e14843){if((e14843 instanceof Object))
{var ex__6820__auto__ = e14843;var statearr_14844_14857 = state_14821;(statearr_14844_14857[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14821);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14843;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14858 = state_14821;
state_14821 = G__14858;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_14821){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_14821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___14846,out))
})();var state__6833__auto__ = (function (){var statearr_14845 = f__6832__auto__.call(null);(statearr_14845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___14846);
return statearr_14845;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___14846,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6831__auto___14993 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___14993,out){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___14993,out){
return (function (state_14963){var state_val_14964 = (state_14963[(1)]);if((state_val_14964 === (7)))
{var inst_14959 = (state_14963[(2)]);var state_14963__$1 = state_14963;var statearr_14965_14994 = state_14963__$1;(statearr_14965_14994[(2)] = inst_14959);
(statearr_14965_14994[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14964 === (1)))
{var inst_14926 = (new Array(n));var inst_14927 = inst_14926;var inst_14928 = (0);var state_14963__$1 = (function (){var statearr_14966 = state_14963;(statearr_14966[(7)] = inst_14928);
(statearr_14966[(8)] = inst_14927);
return statearr_14966;
})();var statearr_14967_14995 = state_14963__$1;(statearr_14967_14995[(2)] = null);
(statearr_14967_14995[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14964 === (4)))
{var inst_14931 = (state_14963[(9)]);var inst_14931__$1 = (state_14963[(2)]);var inst_14932 = (inst_14931__$1 == null);var inst_14933 = cljs.core.not.call(null,inst_14932);var state_14963__$1 = (function (){var statearr_14968 = state_14963;(statearr_14968[(9)] = inst_14931__$1);
return statearr_14968;
})();if(inst_14933)
{var statearr_14969_14996 = state_14963__$1;(statearr_14969_14996[(1)] = (5));
} else
{var statearr_14970_14997 = state_14963__$1;(statearr_14970_14997[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14964 === (15)))
{var inst_14953 = (state_14963[(2)]);var state_14963__$1 = state_14963;var statearr_14971_14998 = state_14963__$1;(statearr_14971_14998[(2)] = inst_14953);
(statearr_14971_14998[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14964 === (13)))
{var state_14963__$1 = state_14963;var statearr_14972_14999 = state_14963__$1;(statearr_14972_14999[(2)] = null);
(statearr_14972_14999[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14964 === (6)))
{var inst_14928 = (state_14963[(7)]);var inst_14949 = (inst_14928 > (0));var state_14963__$1 = state_14963;if(cljs.core.truth_(inst_14949))
{var statearr_14973_15000 = state_14963__$1;(statearr_14973_15000[(1)] = (12));
} else
{var statearr_14974_15001 = state_14963__$1;(statearr_14974_15001[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14964 === (3)))
{var inst_14961 = (state_14963[(2)]);var state_14963__$1 = state_14963;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14963__$1,inst_14961);
} else
{if((state_val_14964 === (12)))
{var inst_14927 = (state_14963[(8)]);var inst_14951 = cljs.core.vec.call(null,inst_14927);var state_14963__$1 = state_14963;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14963__$1,(15),out,inst_14951);
} else
{if((state_val_14964 === (2)))
{var state_14963__$1 = state_14963;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14963__$1,(4),ch);
} else
{if((state_val_14964 === (11)))
{var inst_14943 = (state_14963[(2)]);var inst_14944 = (new Array(n));var inst_14927 = inst_14944;var inst_14928 = (0);var state_14963__$1 = (function (){var statearr_14975 = state_14963;(statearr_14975[(10)] = inst_14943);
(statearr_14975[(7)] = inst_14928);
(statearr_14975[(8)] = inst_14927);
return statearr_14975;
})();var statearr_14976_15002 = state_14963__$1;(statearr_14976_15002[(2)] = null);
(statearr_14976_15002[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14964 === (9)))
{var inst_14927 = (state_14963[(8)]);var inst_14941 = cljs.core.vec.call(null,inst_14927);var state_14963__$1 = state_14963;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14963__$1,(11),out,inst_14941);
} else
{if((state_val_14964 === (5)))
{var inst_14936 = (state_14963[(11)]);var inst_14931 = (state_14963[(9)]);var inst_14928 = (state_14963[(7)]);var inst_14927 = (state_14963[(8)]);var inst_14935 = (inst_14927[inst_14928] = inst_14931);var inst_14936__$1 = (inst_14928 + (1));var inst_14937 = (inst_14936__$1 < n);var state_14963__$1 = (function (){var statearr_14977 = state_14963;(statearr_14977[(12)] = inst_14935);
(statearr_14977[(11)] = inst_14936__$1);
return statearr_14977;
})();if(cljs.core.truth_(inst_14937))
{var statearr_14978_15003 = state_14963__$1;(statearr_14978_15003[(1)] = (8));
} else
{var statearr_14979_15004 = state_14963__$1;(statearr_14979_15004[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14964 === (14)))
{var inst_14956 = (state_14963[(2)]);var inst_14957 = cljs.core.async.close_BANG_.call(null,out);var state_14963__$1 = (function (){var statearr_14981 = state_14963;(statearr_14981[(13)] = inst_14956);
return statearr_14981;
})();var statearr_14982_15005 = state_14963__$1;(statearr_14982_15005[(2)] = inst_14957);
(statearr_14982_15005[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14964 === (10)))
{var inst_14947 = (state_14963[(2)]);var state_14963__$1 = state_14963;var statearr_14983_15006 = state_14963__$1;(statearr_14983_15006[(2)] = inst_14947);
(statearr_14983_15006[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14964 === (8)))
{var inst_14936 = (state_14963[(11)]);var inst_14927 = (state_14963[(8)]);var tmp14980 = inst_14927;var inst_14927__$1 = tmp14980;var inst_14928 = inst_14936;var state_14963__$1 = (function (){var statearr_14984 = state_14963;(statearr_14984[(7)] = inst_14928);
(statearr_14984[(8)] = inst_14927__$1);
return statearr_14984;
})();var statearr_14985_15007 = state_14963__$1;(statearr_14985_15007[(2)] = null);
(statearr_14985_15007[(1)] = (2));
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
});})(c__6831__auto___14993,out))
;return ((function (switch__6816__auto__,c__6831__auto___14993,out){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_14989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14989[(0)] = state_machine__6817__auto__);
(statearr_14989[(1)] = (1));
return statearr_14989;
});
var state_machine__6817__auto____1 = (function (state_14963){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_14963);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e14990){if((e14990 instanceof Object))
{var ex__6820__auto__ = e14990;var statearr_14991_15008 = state_14963;(statearr_14991_15008[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14963);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14990;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15009 = state_14963;
state_14963 = G__15009;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_14963){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_14963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___14993,out))
})();var state__6833__auto__ = (function (){var statearr_14992 = f__6832__auto__.call(null);(statearr_14992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___14993);
return statearr_14992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___14993,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6831__auto___15152 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6831__auto___15152,out){
return (function (){var f__6832__auto__ = (function (){var switch__6816__auto__ = ((function (c__6831__auto___15152,out){
return (function (state_15122){var state_val_15123 = (state_15122[(1)]);if((state_val_15123 === (7)))
{var inst_15118 = (state_15122[(2)]);var state_15122__$1 = state_15122;var statearr_15124_15153 = state_15122__$1;(statearr_15124_15153[(2)] = inst_15118);
(statearr_15124_15153[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15123 === (1)))
{var inst_15081 = [];var inst_15082 = inst_15081;var inst_15083 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15122__$1 = (function (){var statearr_15125 = state_15122;(statearr_15125[(7)] = inst_15082);
(statearr_15125[(8)] = inst_15083);
return statearr_15125;
})();var statearr_15126_15154 = state_15122__$1;(statearr_15126_15154[(2)] = null);
(statearr_15126_15154[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15123 === (4)))
{var inst_15086 = (state_15122[(9)]);var inst_15086__$1 = (state_15122[(2)]);var inst_15087 = (inst_15086__$1 == null);var inst_15088 = cljs.core.not.call(null,inst_15087);var state_15122__$1 = (function (){var statearr_15127 = state_15122;(statearr_15127[(9)] = inst_15086__$1);
return statearr_15127;
})();if(inst_15088)
{var statearr_15128_15155 = state_15122__$1;(statearr_15128_15155[(1)] = (5));
} else
{var statearr_15129_15156 = state_15122__$1;(statearr_15129_15156[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15123 === (15)))
{var inst_15112 = (state_15122[(2)]);var state_15122__$1 = state_15122;var statearr_15130_15157 = state_15122__$1;(statearr_15130_15157[(2)] = inst_15112);
(statearr_15130_15157[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15123 === (13)))
{var state_15122__$1 = state_15122;var statearr_15131_15158 = state_15122__$1;(statearr_15131_15158[(2)] = null);
(statearr_15131_15158[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15123 === (6)))
{var inst_15082 = (state_15122[(7)]);var inst_15107 = inst_15082.length;var inst_15108 = (inst_15107 > (0));var state_15122__$1 = state_15122;if(cljs.core.truth_(inst_15108))
{var statearr_15132_15159 = state_15122__$1;(statearr_15132_15159[(1)] = (12));
} else
{var statearr_15133_15160 = state_15122__$1;(statearr_15133_15160[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15123 === (3)))
{var inst_15120 = (state_15122[(2)]);var state_15122__$1 = state_15122;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15122__$1,inst_15120);
} else
{if((state_val_15123 === (12)))
{var inst_15082 = (state_15122[(7)]);var inst_15110 = cljs.core.vec.call(null,inst_15082);var state_15122__$1 = state_15122;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15122__$1,(15),out,inst_15110);
} else
{if((state_val_15123 === (2)))
{var state_15122__$1 = state_15122;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15122__$1,(4),ch);
} else
{if((state_val_15123 === (11)))
{var inst_15086 = (state_15122[(9)]);var inst_15090 = (state_15122[(10)]);var inst_15100 = (state_15122[(2)]);var inst_15101 = [];var inst_15102 = inst_15101.push(inst_15086);var inst_15082 = inst_15101;var inst_15083 = inst_15090;var state_15122__$1 = (function (){var statearr_15134 = state_15122;(statearr_15134[(7)] = inst_15082);
(statearr_15134[(11)] = inst_15102);
(statearr_15134[(12)] = inst_15100);
(statearr_15134[(8)] = inst_15083);
return statearr_15134;
})();var statearr_15135_15161 = state_15122__$1;(statearr_15135_15161[(2)] = null);
(statearr_15135_15161[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15123 === (9)))
{var inst_15082 = (state_15122[(7)]);var inst_15098 = cljs.core.vec.call(null,inst_15082);var state_15122__$1 = state_15122;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15122__$1,(11),out,inst_15098);
} else
{if((state_val_15123 === (5)))
{var inst_15086 = (state_15122[(9)]);var inst_15083 = (state_15122[(8)]);var inst_15090 = (state_15122[(10)]);var inst_15090__$1 = f.call(null,inst_15086);var inst_15091 = cljs.core._EQ_.call(null,inst_15090__$1,inst_15083);var inst_15092 = cljs.core.keyword_identical_QMARK_.call(null,inst_15083,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_15093 = (inst_15091) || (inst_15092);var state_15122__$1 = (function (){var statearr_15136 = state_15122;(statearr_15136[(10)] = inst_15090__$1);
return statearr_15136;
})();if(cljs.core.truth_(inst_15093))
{var statearr_15137_15162 = state_15122__$1;(statearr_15137_15162[(1)] = (8));
} else
{var statearr_15138_15163 = state_15122__$1;(statearr_15138_15163[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15123 === (14)))
{var inst_15115 = (state_15122[(2)]);var inst_15116 = cljs.core.async.close_BANG_.call(null,out);var state_15122__$1 = (function (){var statearr_15140 = state_15122;(statearr_15140[(13)] = inst_15115);
return statearr_15140;
})();var statearr_15141_15164 = state_15122__$1;(statearr_15141_15164[(2)] = inst_15116);
(statearr_15141_15164[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15123 === (10)))
{var inst_15105 = (state_15122[(2)]);var state_15122__$1 = state_15122;var statearr_15142_15165 = state_15122__$1;(statearr_15142_15165[(2)] = inst_15105);
(statearr_15142_15165[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15123 === (8)))
{var inst_15082 = (state_15122[(7)]);var inst_15086 = (state_15122[(9)]);var inst_15090 = (state_15122[(10)]);var inst_15095 = inst_15082.push(inst_15086);var tmp15139 = inst_15082;var inst_15082__$1 = tmp15139;var inst_15083 = inst_15090;var state_15122__$1 = (function (){var statearr_15143 = state_15122;(statearr_15143[(7)] = inst_15082__$1);
(statearr_15143[(14)] = inst_15095);
(statearr_15143[(8)] = inst_15083);
return statearr_15143;
})();var statearr_15144_15166 = state_15122__$1;(statearr_15144_15166[(2)] = null);
(statearr_15144_15166[(1)] = (2));
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
});})(c__6831__auto___15152,out))
;return ((function (switch__6816__auto__,c__6831__auto___15152,out){
return (function() {
var state_machine__6817__auto__ = null;
var state_machine__6817__auto____0 = (function (){var statearr_15148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15148[(0)] = state_machine__6817__auto__);
(statearr_15148[(1)] = (1));
return statearr_15148;
});
var state_machine__6817__auto____1 = (function (state_15122){while(true){
var ret_value__6818__auto__ = (function (){try{while(true){
var result__6819__auto__ = switch__6816__auto__.call(null,state_15122);if(cljs.core.keyword_identical_QMARK_.call(null,result__6819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6819__auto__;
}
break;
}
}catch (e15149){if((e15149 instanceof Object))
{var ex__6820__auto__ = e15149;var statearr_15150_15167 = state_15122;(statearr_15150_15167[(5)] = ex__6820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15122);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15149;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6818__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15168 = state_15122;
state_15122 = G__15168;
continue;
}
} else
{return ret_value__6818__auto__;
}
break;
}
});
state_machine__6817__auto__ = function(state_15122){
switch(arguments.length){
case 0:
return state_machine__6817__auto____0.call(this);
case 1:
return state_machine__6817__auto____1.call(this,state_15122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6817__auto____0;
state_machine__6817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6817__auto____1;
return state_machine__6817__auto__;
})()
;})(switch__6816__auto__,c__6831__auto___15152,out))
})();var state__6833__auto__ = (function (){var statearr_15151 = f__6832__auto__.call(null);(statearr_15151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6831__auto___15152);
return statearr_15151;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6833__auto__);
});})(c__6831__auto___15152,out))
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