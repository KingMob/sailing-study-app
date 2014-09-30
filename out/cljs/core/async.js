// Compiled by ClojureScript 0.0-2356
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11945 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11945 = (function (f,fn_handler,meta11946){
this.f = f;
this.fn_handler = fn_handler;
this.meta11946 = meta11946;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11945.cljs$lang$type = true;
cljs.core.async.t11945.cljs$lang$ctorStr = "cljs.core.async/t11945";
cljs.core.async.t11945.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t11945");
});
cljs.core.async.t11945.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11945.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11945.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11947){var self__ = this;
var _11947__$1 = this;return self__.meta11946;
});
cljs.core.async.t11945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11947,meta11946__$1){var self__ = this;
var _11947__$1 = this;return (new cljs.core.async.t11945(self__.f,self__.fn_handler,meta11946__$1));
});
cljs.core.async.__GT_t11945 = (function __GT_t11945(f__$1,fn_handler__$1,meta11946){return (new cljs.core.async.t11945(f__$1,fn_handler__$1,meta11946));
});
}
return (new cljs.core.async.t11945(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11949 = buff;if(G__11949)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__11949.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11949.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11949);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11949);
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
{var val_11950 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11950);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11950,ret){
return (function (){return fn1.call(null,val_11950);
});})(val_11950,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___11951 = n;var x_11952 = (0);while(true){
if((x_11952 < n__4508__auto___11951))
{(a[x_11952] = (0));
{
var G__11953 = (x_11952 + (1));
x_11952 = G__11953;
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
var G__11954 = (i + (1));
i = G__11954;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11958 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11958 = (function (flag,alt_flag,meta11959){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11959 = meta11959;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11958.cljs$lang$type = true;
cljs.core.async.t11958.cljs$lang$ctorStr = "cljs.core.async/t11958";
cljs.core.async.t11958.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t11958");
});})(flag))
;
cljs.core.async.t11958.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11958.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11958.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11958.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11960){var self__ = this;
var _11960__$1 = this;return self__.meta11959;
});})(flag))
;
cljs.core.async.t11958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11960,meta11959__$1){var self__ = this;
var _11960__$1 = this;return (new cljs.core.async.t11958(self__.flag,self__.alt_flag,meta11959__$1));
});})(flag))
;
cljs.core.async.__GT_t11958 = ((function (flag){
return (function __GT_t11958(flag__$1,alt_flag__$1,meta11959){return (new cljs.core.async.t11958(flag__$1,alt_flag__$1,meta11959));
});})(flag))
;
}
return (new cljs.core.async.t11958(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11964 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11964 = (function (cb,flag,alt_handler,meta11965){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11965 = meta11965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11964.cljs$lang$type = true;
cljs.core.async.t11964.cljs$lang$ctorStr = "cljs.core.async/t11964";
cljs.core.async.t11964.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t11964");
});
cljs.core.async.t11964.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11964.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11964.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11966){var self__ = this;
var _11966__$1 = this;return self__.meta11965;
});
cljs.core.async.t11964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11966,meta11965__$1){var self__ = this;
var _11966__$1 = this;return (new cljs.core.async.t11964(self__.cb,self__.flag,self__.alt_handler,meta11965__$1));
});
cljs.core.async.__GT_t11964 = (function __GT_t11964(cb__$1,flag__$1,alt_handler__$1,meta11965){return (new cljs.core.async.t11964(cb__$1,flag__$1,alt_handler__$1,meta11965));
});
}
return (new cljs.core.async.t11964(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11967_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11967_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11968_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11968_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3639__auto__ = wport;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11969 = (i + (1));
i = G__11969;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3639__auto__ = ret;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3627__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3627__auto__;
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
var alts_BANG___delegate = function (ports,p__11970){var map__11972 = p__11970;var map__11972__$1 = ((cljs.core.seq_QMARK_.call(null,map__11972))?cljs.core.apply.call(null,cljs.core.hash_map,map__11972):map__11972);var opts = map__11972__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11970 = null;if (arguments.length > 1) {
  p__11970 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11970);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11973){
var ports = cljs.core.first(arglist__11973);
var p__11970 = cljs.core.rest(arglist__11973);
return alts_BANG___delegate(ports,p__11970);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6844__auto___12068 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto___12068){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto___12068){
return (function (state_12044){var state_val_12045 = (state_12044[(1)]);if((state_val_12045 === (7)))
{var inst_12040 = (state_12044[(2)]);var state_12044__$1 = state_12044;var statearr_12046_12069 = state_12044__$1;(statearr_12046_12069[(2)] = inst_12040);
(statearr_12046_12069[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12045 === (1)))
{var state_12044__$1 = state_12044;var statearr_12047_12070 = state_12044__$1;(statearr_12047_12070[(2)] = null);
(statearr_12047_12070[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12045 === (4)))
{var inst_12023 = (state_12044[(7)]);var inst_12023__$1 = (state_12044[(2)]);var inst_12024 = (inst_12023__$1 == null);var state_12044__$1 = (function (){var statearr_12048 = state_12044;(statearr_12048[(7)] = inst_12023__$1);
return statearr_12048;
})();if(cljs.core.truth_(inst_12024))
{var statearr_12049_12071 = state_12044__$1;(statearr_12049_12071[(1)] = (5));
} else
{var statearr_12050_12072 = state_12044__$1;(statearr_12050_12072[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12045 === (13)))
{var state_12044__$1 = state_12044;var statearr_12051_12073 = state_12044__$1;(statearr_12051_12073[(2)] = null);
(statearr_12051_12073[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12045 === (6)))
{var inst_12023 = (state_12044[(7)]);var state_12044__$1 = state_12044;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12044__$1,(11),to,inst_12023);
} else
{if((state_val_12045 === (3)))
{var inst_12042 = (state_12044[(2)]);var state_12044__$1 = state_12044;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12044__$1,inst_12042);
} else
{if((state_val_12045 === (12)))
{var state_12044__$1 = state_12044;var statearr_12052_12074 = state_12044__$1;(statearr_12052_12074[(2)] = null);
(statearr_12052_12074[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12045 === (2)))
{var state_12044__$1 = state_12044;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12044__$1,(4),from);
} else
{if((state_val_12045 === (11)))
{var inst_12033 = (state_12044[(2)]);var state_12044__$1 = state_12044;if(cljs.core.truth_(inst_12033))
{var statearr_12053_12075 = state_12044__$1;(statearr_12053_12075[(1)] = (12));
} else
{var statearr_12054_12076 = state_12044__$1;(statearr_12054_12076[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12045 === (9)))
{var state_12044__$1 = state_12044;var statearr_12055_12077 = state_12044__$1;(statearr_12055_12077[(2)] = null);
(statearr_12055_12077[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12045 === (5)))
{var state_12044__$1 = state_12044;if(cljs.core.truth_(close_QMARK_))
{var statearr_12056_12078 = state_12044__$1;(statearr_12056_12078[(1)] = (8));
} else
{var statearr_12057_12079 = state_12044__$1;(statearr_12057_12079[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12045 === (14)))
{var inst_12038 = (state_12044[(2)]);var state_12044__$1 = state_12044;var statearr_12058_12080 = state_12044__$1;(statearr_12058_12080[(2)] = inst_12038);
(statearr_12058_12080[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12045 === (10)))
{var inst_12030 = (state_12044[(2)]);var state_12044__$1 = state_12044;var statearr_12059_12081 = state_12044__$1;(statearr_12059_12081[(2)] = inst_12030);
(statearr_12059_12081[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12045 === (8)))
{var inst_12027 = cljs.core.async.close_BANG_.call(null,to);var state_12044__$1 = state_12044;var statearr_12060_12082 = state_12044__$1;(statearr_12060_12082[(2)] = inst_12027);
(statearr_12060_12082[(1)] = (10));
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
});})(c__6844__auto___12068))
;return ((function (switch__6829__auto__,c__6844__auto___12068){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_12064 = [null,null,null,null,null,null,null,null];(statearr_12064[(0)] = state_machine__6830__auto__);
(statearr_12064[(1)] = (1));
return statearr_12064;
});
var state_machine__6830__auto____1 = (function (state_12044){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_12044);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e12065){if((e12065 instanceof Object))
{var ex__6833__auto__ = e12065;var statearr_12066_12083 = state_12044;(statearr_12066_12083[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12044);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12065;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12084 = state_12044;
state_12044 = G__12084;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_12044){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_12044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto___12068))
})();var state__6846__auto__ = (function (){var statearr_12067 = f__6845__auto__.call(null);(statearr_12067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___12068);
return statearr_12067;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto___12068))
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
return (function (p__12268){var vec__12269 = p__12268;var v = cljs.core.nth.call(null,vec__12269,(0),null);var p = cljs.core.nth.call(null,vec__12269,(1),null);var job = vec__12269;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6844__auto___12451 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto___12451,res,vec__12269,v,p,job,jobs,results){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto___12451,res,vec__12269,v,p,job,jobs,results){
return (function (state_12274){var state_val_12275 = (state_12274[(1)]);if((state_val_12275 === (2)))
{var inst_12271 = (state_12274[(2)]);var inst_12272 = cljs.core.async.close_BANG_.call(null,res);var state_12274__$1 = (function (){var statearr_12276 = state_12274;(statearr_12276[(7)] = inst_12271);
return statearr_12276;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12274__$1,inst_12272);
} else
{if((state_val_12275 === (1)))
{var state_12274__$1 = state_12274;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12274__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6844__auto___12451,res,vec__12269,v,p,job,jobs,results))
;return ((function (switch__6829__auto__,c__6844__auto___12451,res,vec__12269,v,p,job,jobs,results){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_12280 = [null,null,null,null,null,null,null,null];(statearr_12280[(0)] = state_machine__6830__auto__);
(statearr_12280[(1)] = (1));
return statearr_12280;
});
var state_machine__6830__auto____1 = (function (state_12274){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_12274);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e12281){if((e12281 instanceof Object))
{var ex__6833__auto__ = e12281;var statearr_12282_12452 = state_12274;(statearr_12282_12452[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12274);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12281;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12453 = state_12274;
state_12274 = G__12453;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_12274){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_12274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto___12451,res,vec__12269,v,p,job,jobs,results))
})();var state__6846__auto__ = (function (){var statearr_12283 = f__6845__auto__.call(null);(statearr_12283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___12451);
return statearr_12283;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto___12451,res,vec__12269,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12284){var vec__12285 = p__12284;var v = cljs.core.nth.call(null,vec__12285,(0),null);var p = cljs.core.nth.call(null,vec__12285,(1),null);var job = vec__12285;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___12454 = n;var __12455 = (0);while(true){
if((__12455 < n__4508__auto___12454))
{var G__12286_12456 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__12286_12456) {
case "async":
var c__6844__auto___12458 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12455,c__6844__auto___12458,G__12286_12456,n__4508__auto___12454,jobs,results,process,async){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (__12455,c__6844__auto___12458,G__12286_12456,n__4508__auto___12454,jobs,results,process,async){
return (function (state_12299){var state_val_12300 = (state_12299[(1)]);if((state_val_12300 === (7)))
{var inst_12295 = (state_12299[(2)]);var state_12299__$1 = state_12299;var statearr_12301_12459 = state_12299__$1;(statearr_12301_12459[(2)] = inst_12295);
(statearr_12301_12459[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12300 === (6)))
{var state_12299__$1 = state_12299;var statearr_12302_12460 = state_12299__$1;(statearr_12302_12460[(2)] = null);
(statearr_12302_12460[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12300 === (5)))
{var state_12299__$1 = state_12299;var statearr_12303_12461 = state_12299__$1;(statearr_12303_12461[(2)] = null);
(statearr_12303_12461[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12300 === (4)))
{var inst_12289 = (state_12299[(2)]);var inst_12290 = async.call(null,inst_12289);var state_12299__$1 = state_12299;if(cljs.core.truth_(inst_12290))
{var statearr_12304_12462 = state_12299__$1;(statearr_12304_12462[(1)] = (5));
} else
{var statearr_12305_12463 = state_12299__$1;(statearr_12305_12463[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12300 === (3)))
{var inst_12297 = (state_12299[(2)]);var state_12299__$1 = state_12299;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12299__$1,inst_12297);
} else
{if((state_val_12300 === (2)))
{var state_12299__$1 = state_12299;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12299__$1,(4),jobs);
} else
{if((state_val_12300 === (1)))
{var state_12299__$1 = state_12299;var statearr_12306_12464 = state_12299__$1;(statearr_12306_12464[(2)] = null);
(statearr_12306_12464[(1)] = (2));
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
});})(__12455,c__6844__auto___12458,G__12286_12456,n__4508__auto___12454,jobs,results,process,async))
;return ((function (__12455,switch__6829__auto__,c__6844__auto___12458,G__12286_12456,n__4508__auto___12454,jobs,results,process,async){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_12310 = [null,null,null,null,null,null,null];(statearr_12310[(0)] = state_machine__6830__auto__);
(statearr_12310[(1)] = (1));
return statearr_12310;
});
var state_machine__6830__auto____1 = (function (state_12299){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_12299);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e12311){if((e12311 instanceof Object))
{var ex__6833__auto__ = e12311;var statearr_12312_12465 = state_12299;(statearr_12312_12465[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12299);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12311;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12466 = state_12299;
state_12299 = G__12466;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_12299){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_12299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(__12455,switch__6829__auto__,c__6844__auto___12458,G__12286_12456,n__4508__auto___12454,jobs,results,process,async))
})();var state__6846__auto__ = (function (){var statearr_12313 = f__6845__auto__.call(null);(statearr_12313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___12458);
return statearr_12313;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(__12455,c__6844__auto___12458,G__12286_12456,n__4508__auto___12454,jobs,results,process,async))
);

break;
case "compute":
var c__6844__auto___12467 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12455,c__6844__auto___12467,G__12286_12456,n__4508__auto___12454,jobs,results,process,async){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (__12455,c__6844__auto___12467,G__12286_12456,n__4508__auto___12454,jobs,results,process,async){
return (function (state_12326){var state_val_12327 = (state_12326[(1)]);if((state_val_12327 === (7)))
{var inst_12322 = (state_12326[(2)]);var state_12326__$1 = state_12326;var statearr_12328_12468 = state_12326__$1;(statearr_12328_12468[(2)] = inst_12322);
(statearr_12328_12468[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12327 === (6)))
{var state_12326__$1 = state_12326;var statearr_12329_12469 = state_12326__$1;(statearr_12329_12469[(2)] = null);
(statearr_12329_12469[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12327 === (5)))
{var state_12326__$1 = state_12326;var statearr_12330_12470 = state_12326__$1;(statearr_12330_12470[(2)] = null);
(statearr_12330_12470[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12327 === (4)))
{var inst_12316 = (state_12326[(2)]);var inst_12317 = process.call(null,inst_12316);var state_12326__$1 = state_12326;if(cljs.core.truth_(inst_12317))
{var statearr_12331_12471 = state_12326__$1;(statearr_12331_12471[(1)] = (5));
} else
{var statearr_12332_12472 = state_12326__$1;(statearr_12332_12472[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12327 === (3)))
{var inst_12324 = (state_12326[(2)]);var state_12326__$1 = state_12326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12326__$1,inst_12324);
} else
{if((state_val_12327 === (2)))
{var state_12326__$1 = state_12326;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12326__$1,(4),jobs);
} else
{if((state_val_12327 === (1)))
{var state_12326__$1 = state_12326;var statearr_12333_12473 = state_12326__$1;(statearr_12333_12473[(2)] = null);
(statearr_12333_12473[(1)] = (2));
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
});})(__12455,c__6844__auto___12467,G__12286_12456,n__4508__auto___12454,jobs,results,process,async))
;return ((function (__12455,switch__6829__auto__,c__6844__auto___12467,G__12286_12456,n__4508__auto___12454,jobs,results,process,async){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_12337 = [null,null,null,null,null,null,null];(statearr_12337[(0)] = state_machine__6830__auto__);
(statearr_12337[(1)] = (1));
return statearr_12337;
});
var state_machine__6830__auto____1 = (function (state_12326){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_12326);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e12338){if((e12338 instanceof Object))
{var ex__6833__auto__ = e12338;var statearr_12339_12474 = state_12326;(statearr_12339_12474[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12326);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12338;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12475 = state_12326;
state_12326 = G__12475;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_12326){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_12326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(__12455,switch__6829__auto__,c__6844__auto___12467,G__12286_12456,n__4508__auto___12454,jobs,results,process,async))
})();var state__6846__auto__ = (function (){var statearr_12340 = f__6845__auto__.call(null);(statearr_12340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___12467);
return statearr_12340;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(__12455,c__6844__auto___12467,G__12286_12456,n__4508__auto___12454,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__12476 = (__12455 + (1));
__12455 = G__12476;
continue;
}
} else
{}
break;
}
var c__6844__auto___12477 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto___12477,jobs,results,process,async){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto___12477,jobs,results,process,async){
return (function (state_12362){var state_val_12363 = (state_12362[(1)]);if((state_val_12363 === (9)))
{var inst_12355 = (state_12362[(2)]);var state_12362__$1 = (function (){var statearr_12364 = state_12362;(statearr_12364[(7)] = inst_12355);
return statearr_12364;
})();var statearr_12365_12478 = state_12362__$1;(statearr_12365_12478[(2)] = null);
(statearr_12365_12478[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12363 === (8)))
{var inst_12348 = (state_12362[(8)]);var inst_12353 = (state_12362[(2)]);var state_12362__$1 = (function (){var statearr_12366 = state_12362;(statearr_12366[(9)] = inst_12353);
return statearr_12366;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12362__$1,(9),results,inst_12348);
} else
{if((state_val_12363 === (7)))
{var inst_12358 = (state_12362[(2)]);var state_12362__$1 = state_12362;var statearr_12367_12479 = state_12362__$1;(statearr_12367_12479[(2)] = inst_12358);
(statearr_12367_12479[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12363 === (6)))
{var inst_12343 = (state_12362[(10)]);var inst_12348 = (state_12362[(8)]);var inst_12348__$1 = cljs.core.async.chan.call(null,(1));var inst_12349 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12350 = [inst_12343,inst_12348__$1];var inst_12351 = (new cljs.core.PersistentVector(null,2,(5),inst_12349,inst_12350,null));var state_12362__$1 = (function (){var statearr_12368 = state_12362;(statearr_12368[(8)] = inst_12348__$1);
return statearr_12368;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12362__$1,(8),jobs,inst_12351);
} else
{if((state_val_12363 === (5)))
{var inst_12346 = cljs.core.async.close_BANG_.call(null,jobs);var state_12362__$1 = state_12362;var statearr_12369_12480 = state_12362__$1;(statearr_12369_12480[(2)] = inst_12346);
(statearr_12369_12480[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12363 === (4)))
{var inst_12343 = (state_12362[(10)]);var inst_12343__$1 = (state_12362[(2)]);var inst_12344 = (inst_12343__$1 == null);var state_12362__$1 = (function (){var statearr_12370 = state_12362;(statearr_12370[(10)] = inst_12343__$1);
return statearr_12370;
})();if(cljs.core.truth_(inst_12344))
{var statearr_12371_12481 = state_12362__$1;(statearr_12371_12481[(1)] = (5));
} else
{var statearr_12372_12482 = state_12362__$1;(statearr_12372_12482[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12363 === (3)))
{var inst_12360 = (state_12362[(2)]);var state_12362__$1 = state_12362;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12362__$1,inst_12360);
} else
{if((state_val_12363 === (2)))
{var state_12362__$1 = state_12362;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12362__$1,(4),from);
} else
{if((state_val_12363 === (1)))
{var state_12362__$1 = state_12362;var statearr_12373_12483 = state_12362__$1;(statearr_12373_12483[(2)] = null);
(statearr_12373_12483[(1)] = (2));
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
});})(c__6844__auto___12477,jobs,results,process,async))
;return ((function (switch__6829__auto__,c__6844__auto___12477,jobs,results,process,async){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_12377 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12377[(0)] = state_machine__6830__auto__);
(statearr_12377[(1)] = (1));
return statearr_12377;
});
var state_machine__6830__auto____1 = (function (state_12362){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_12362);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e12378){if((e12378 instanceof Object))
{var ex__6833__auto__ = e12378;var statearr_12379_12484 = state_12362;(statearr_12379_12484[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12362);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12378;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12485 = state_12362;
state_12362 = G__12485;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_12362){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_12362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto___12477,jobs,results,process,async))
})();var state__6846__auto__ = (function (){var statearr_12380 = f__6845__auto__.call(null);(statearr_12380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___12477);
return statearr_12380;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto___12477,jobs,results,process,async))
);
var c__6844__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto__,jobs,results,process,async){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto__,jobs,results,process,async){
return (function (state_12418){var state_val_12419 = (state_12418[(1)]);if((state_val_12419 === (7)))
{var inst_12414 = (state_12418[(2)]);var state_12418__$1 = state_12418;var statearr_12420_12486 = state_12418__$1;(statearr_12420_12486[(2)] = inst_12414);
(statearr_12420_12486[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12419 === (20)))
{var state_12418__$1 = state_12418;var statearr_12421_12487 = state_12418__$1;(statearr_12421_12487[(2)] = null);
(statearr_12421_12487[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12419 === (1)))
{var state_12418__$1 = state_12418;var statearr_12422_12488 = state_12418__$1;(statearr_12422_12488[(2)] = null);
(statearr_12422_12488[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12419 === (4)))
{var inst_12383 = (state_12418[(7)]);var inst_12383__$1 = (state_12418[(2)]);var inst_12384 = (inst_12383__$1 == null);var state_12418__$1 = (function (){var statearr_12423 = state_12418;(statearr_12423[(7)] = inst_12383__$1);
return statearr_12423;
})();if(cljs.core.truth_(inst_12384))
{var statearr_12424_12489 = state_12418__$1;(statearr_12424_12489[(1)] = (5));
} else
{var statearr_12425_12490 = state_12418__$1;(statearr_12425_12490[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12419 === (15)))
{var inst_12396 = (state_12418[(8)]);var state_12418__$1 = state_12418;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12418__$1,(18),to,inst_12396);
} else
{if((state_val_12419 === (21)))
{var inst_12409 = (state_12418[(2)]);var state_12418__$1 = state_12418;var statearr_12426_12491 = state_12418__$1;(statearr_12426_12491[(2)] = inst_12409);
(statearr_12426_12491[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12419 === (13)))
{var inst_12411 = (state_12418[(2)]);var state_12418__$1 = (function (){var statearr_12427 = state_12418;(statearr_12427[(9)] = inst_12411);
return statearr_12427;
})();var statearr_12428_12492 = state_12418__$1;(statearr_12428_12492[(2)] = null);
(statearr_12428_12492[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12419 === (6)))
{var inst_12383 = (state_12418[(7)]);var state_12418__$1 = state_12418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12418__$1,(11),inst_12383);
} else
{if((state_val_12419 === (17)))
{var inst_12404 = (state_12418[(2)]);var state_12418__$1 = state_12418;if(cljs.core.truth_(inst_12404))
{var statearr_12429_12493 = state_12418__$1;(statearr_12429_12493[(1)] = (19));
} else
{var statearr_12430_12494 = state_12418__$1;(statearr_12430_12494[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12419 === (3)))
{var inst_12416 = (state_12418[(2)]);var state_12418__$1 = state_12418;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12418__$1,inst_12416);
} else
{if((state_val_12419 === (12)))
{var inst_12393 = (state_12418[(10)]);var state_12418__$1 = state_12418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12418__$1,(14),inst_12393);
} else
{if((state_val_12419 === (2)))
{var state_12418__$1 = state_12418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12418__$1,(4),results);
} else
{if((state_val_12419 === (19)))
{var state_12418__$1 = state_12418;var statearr_12431_12495 = state_12418__$1;(statearr_12431_12495[(2)] = null);
(statearr_12431_12495[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12419 === (11)))
{var inst_12393 = (state_12418[(2)]);var state_12418__$1 = (function (){var statearr_12432 = state_12418;(statearr_12432[(10)] = inst_12393);
return statearr_12432;
})();var statearr_12433_12496 = state_12418__$1;(statearr_12433_12496[(2)] = null);
(statearr_12433_12496[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12419 === (9)))
{var state_12418__$1 = state_12418;var statearr_12434_12497 = state_12418__$1;(statearr_12434_12497[(2)] = null);
(statearr_12434_12497[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12419 === (5)))
{var state_12418__$1 = state_12418;if(cljs.core.truth_(close_QMARK_))
{var statearr_12435_12498 = state_12418__$1;(statearr_12435_12498[(1)] = (8));
} else
{var statearr_12436_12499 = state_12418__$1;(statearr_12436_12499[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12419 === (14)))
{var inst_12396 = (state_12418[(8)]);var inst_12398 = (state_12418[(11)]);var inst_12396__$1 = (state_12418[(2)]);var inst_12397 = (inst_12396__$1 == null);var inst_12398__$1 = cljs.core.not.call(null,inst_12397);var state_12418__$1 = (function (){var statearr_12437 = state_12418;(statearr_12437[(8)] = inst_12396__$1);
(statearr_12437[(11)] = inst_12398__$1);
return statearr_12437;
})();if(inst_12398__$1)
{var statearr_12438_12500 = state_12418__$1;(statearr_12438_12500[(1)] = (15));
} else
{var statearr_12439_12501 = state_12418__$1;(statearr_12439_12501[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12419 === (16)))
{var inst_12398 = (state_12418[(11)]);var state_12418__$1 = state_12418;var statearr_12440_12502 = state_12418__$1;(statearr_12440_12502[(2)] = inst_12398);
(statearr_12440_12502[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12419 === (10)))
{var inst_12390 = (state_12418[(2)]);var state_12418__$1 = state_12418;var statearr_12441_12503 = state_12418__$1;(statearr_12441_12503[(2)] = inst_12390);
(statearr_12441_12503[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12419 === (18)))
{var inst_12401 = (state_12418[(2)]);var state_12418__$1 = state_12418;var statearr_12442_12504 = state_12418__$1;(statearr_12442_12504[(2)] = inst_12401);
(statearr_12442_12504[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12419 === (8)))
{var inst_12387 = cljs.core.async.close_BANG_.call(null,to);var state_12418__$1 = state_12418;var statearr_12443_12505 = state_12418__$1;(statearr_12443_12505[(2)] = inst_12387);
(statearr_12443_12505[(1)] = (10));
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
});})(c__6844__auto__,jobs,results,process,async))
;return ((function (switch__6829__auto__,c__6844__auto__,jobs,results,process,async){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_12447 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12447[(0)] = state_machine__6830__auto__);
(statearr_12447[(1)] = (1));
return statearr_12447;
});
var state_machine__6830__auto____1 = (function (state_12418){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_12418);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e12448){if((e12448 instanceof Object))
{var ex__6833__auto__ = e12448;var statearr_12449_12506 = state_12418;(statearr_12449_12506[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12418);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12448;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12507 = state_12418;
state_12418 = G__12507;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_12418){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_12418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto__,jobs,results,process,async))
})();var state__6846__auto__ = (function (){var statearr_12450 = f__6845__auto__.call(null);(statearr_12450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto__);
return statearr_12450;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto__,jobs,results,process,async))
);
return c__6844__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6844__auto___12608 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto___12608,tc,fc){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto___12608,tc,fc){
return (function (state_12583){var state_val_12584 = (state_12583[(1)]);if((state_val_12584 === (7)))
{var inst_12579 = (state_12583[(2)]);var state_12583__$1 = state_12583;var statearr_12585_12609 = state_12583__$1;(statearr_12585_12609[(2)] = inst_12579);
(statearr_12585_12609[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12584 === (1)))
{var state_12583__$1 = state_12583;var statearr_12586_12610 = state_12583__$1;(statearr_12586_12610[(2)] = null);
(statearr_12586_12610[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12584 === (4)))
{var inst_12560 = (state_12583[(7)]);var inst_12560__$1 = (state_12583[(2)]);var inst_12561 = (inst_12560__$1 == null);var state_12583__$1 = (function (){var statearr_12587 = state_12583;(statearr_12587[(7)] = inst_12560__$1);
return statearr_12587;
})();if(cljs.core.truth_(inst_12561))
{var statearr_12588_12611 = state_12583__$1;(statearr_12588_12611[(1)] = (5));
} else
{var statearr_12589_12612 = state_12583__$1;(statearr_12589_12612[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12584 === (13)))
{var state_12583__$1 = state_12583;var statearr_12590_12613 = state_12583__$1;(statearr_12590_12613[(2)] = null);
(statearr_12590_12613[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12584 === (6)))
{var inst_12560 = (state_12583[(7)]);var inst_12566 = p.call(null,inst_12560);var state_12583__$1 = state_12583;if(cljs.core.truth_(inst_12566))
{var statearr_12591_12614 = state_12583__$1;(statearr_12591_12614[(1)] = (9));
} else
{var statearr_12592_12615 = state_12583__$1;(statearr_12592_12615[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12584 === (3)))
{var inst_12581 = (state_12583[(2)]);var state_12583__$1 = state_12583;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12583__$1,inst_12581);
} else
{if((state_val_12584 === (12)))
{var state_12583__$1 = state_12583;var statearr_12593_12616 = state_12583__$1;(statearr_12593_12616[(2)] = null);
(statearr_12593_12616[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12584 === (2)))
{var state_12583__$1 = state_12583;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12583__$1,(4),ch);
} else
{if((state_val_12584 === (11)))
{var inst_12560 = (state_12583[(7)]);var inst_12570 = (state_12583[(2)]);var state_12583__$1 = state_12583;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12583__$1,(8),inst_12570,inst_12560);
} else
{if((state_val_12584 === (9)))
{var state_12583__$1 = state_12583;var statearr_12594_12617 = state_12583__$1;(statearr_12594_12617[(2)] = tc);
(statearr_12594_12617[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12584 === (5)))
{var inst_12563 = cljs.core.async.close_BANG_.call(null,tc);var inst_12564 = cljs.core.async.close_BANG_.call(null,fc);var state_12583__$1 = (function (){var statearr_12595 = state_12583;(statearr_12595[(8)] = inst_12563);
return statearr_12595;
})();var statearr_12596_12618 = state_12583__$1;(statearr_12596_12618[(2)] = inst_12564);
(statearr_12596_12618[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12584 === (14)))
{var inst_12577 = (state_12583[(2)]);var state_12583__$1 = state_12583;var statearr_12597_12619 = state_12583__$1;(statearr_12597_12619[(2)] = inst_12577);
(statearr_12597_12619[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12584 === (10)))
{var state_12583__$1 = state_12583;var statearr_12598_12620 = state_12583__$1;(statearr_12598_12620[(2)] = fc);
(statearr_12598_12620[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12584 === (8)))
{var inst_12572 = (state_12583[(2)]);var state_12583__$1 = state_12583;if(cljs.core.truth_(inst_12572))
{var statearr_12599_12621 = state_12583__$1;(statearr_12599_12621[(1)] = (12));
} else
{var statearr_12600_12622 = state_12583__$1;(statearr_12600_12622[(1)] = (13));
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
});})(c__6844__auto___12608,tc,fc))
;return ((function (switch__6829__auto__,c__6844__auto___12608,tc,fc){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_12604 = [null,null,null,null,null,null,null,null,null];(statearr_12604[(0)] = state_machine__6830__auto__);
(statearr_12604[(1)] = (1));
return statearr_12604;
});
var state_machine__6830__auto____1 = (function (state_12583){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_12583);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e12605){if((e12605 instanceof Object))
{var ex__6833__auto__ = e12605;var statearr_12606_12623 = state_12583;(statearr_12606_12623[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12583);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12605;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12624 = state_12583;
state_12583 = G__12624;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_12583){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_12583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto___12608,tc,fc))
})();var state__6846__auto__ = (function (){var statearr_12607 = f__6845__auto__.call(null);(statearr_12607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___12608);
return statearr_12607;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto___12608,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6844__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto__){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto__){
return (function (state_12671){var state_val_12672 = (state_12671[(1)]);if((state_val_12672 === (7)))
{var inst_12667 = (state_12671[(2)]);var state_12671__$1 = state_12671;var statearr_12673_12689 = state_12671__$1;(statearr_12673_12689[(2)] = inst_12667);
(statearr_12673_12689[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12672 === (6)))
{var inst_12657 = (state_12671[(7)]);var inst_12660 = (state_12671[(8)]);var inst_12664 = f.call(null,inst_12657,inst_12660);var inst_12657__$1 = inst_12664;var state_12671__$1 = (function (){var statearr_12674 = state_12671;(statearr_12674[(7)] = inst_12657__$1);
return statearr_12674;
})();var statearr_12675_12690 = state_12671__$1;(statearr_12675_12690[(2)] = null);
(statearr_12675_12690[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12672 === (5)))
{var inst_12657 = (state_12671[(7)]);var state_12671__$1 = state_12671;var statearr_12676_12691 = state_12671__$1;(statearr_12676_12691[(2)] = inst_12657);
(statearr_12676_12691[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12672 === (4)))
{var inst_12660 = (state_12671[(8)]);var inst_12660__$1 = (state_12671[(2)]);var inst_12661 = (inst_12660__$1 == null);var state_12671__$1 = (function (){var statearr_12677 = state_12671;(statearr_12677[(8)] = inst_12660__$1);
return statearr_12677;
})();if(cljs.core.truth_(inst_12661))
{var statearr_12678_12692 = state_12671__$1;(statearr_12678_12692[(1)] = (5));
} else
{var statearr_12679_12693 = state_12671__$1;(statearr_12679_12693[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12672 === (3)))
{var inst_12669 = (state_12671[(2)]);var state_12671__$1 = state_12671;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12671__$1,inst_12669);
} else
{if((state_val_12672 === (2)))
{var state_12671__$1 = state_12671;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12671__$1,(4),ch);
} else
{if((state_val_12672 === (1)))
{var inst_12657 = init;var state_12671__$1 = (function (){var statearr_12680 = state_12671;(statearr_12680[(7)] = inst_12657);
return statearr_12680;
})();var statearr_12681_12694 = state_12671__$1;(statearr_12681_12694[(2)] = null);
(statearr_12681_12694[(1)] = (2));
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
});})(c__6844__auto__))
;return ((function (switch__6829__auto__,c__6844__auto__){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_12685 = [null,null,null,null,null,null,null,null,null];(statearr_12685[(0)] = state_machine__6830__auto__);
(statearr_12685[(1)] = (1));
return statearr_12685;
});
var state_machine__6830__auto____1 = (function (state_12671){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_12671);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e12686){if((e12686 instanceof Object))
{var ex__6833__auto__ = e12686;var statearr_12687_12695 = state_12671;(statearr_12687_12695[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12671);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12686;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12696 = state_12671;
state_12671 = G__12696;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_12671){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_12671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto__))
})();var state__6846__auto__ = (function (){var statearr_12688 = f__6845__auto__.call(null);(statearr_12688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto__);
return statearr_12688;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto__))
);
return c__6844__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6844__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto__){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto__){
return (function (state_12770){var state_val_12771 = (state_12770[(1)]);if((state_val_12771 === (7)))
{var inst_12752 = (state_12770[(2)]);var state_12770__$1 = state_12770;var statearr_12772_12795 = state_12770__$1;(statearr_12772_12795[(2)] = inst_12752);
(statearr_12772_12795[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12771 === (1)))
{var inst_12746 = cljs.core.seq.call(null,coll);var inst_12747 = inst_12746;var state_12770__$1 = (function (){var statearr_12773 = state_12770;(statearr_12773[(7)] = inst_12747);
return statearr_12773;
})();var statearr_12774_12796 = state_12770__$1;(statearr_12774_12796[(2)] = null);
(statearr_12774_12796[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12771 === (4)))
{var inst_12747 = (state_12770[(7)]);var inst_12750 = cljs.core.first.call(null,inst_12747);var state_12770__$1 = state_12770;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12770__$1,(7),ch,inst_12750);
} else
{if((state_val_12771 === (13)))
{var inst_12764 = (state_12770[(2)]);var state_12770__$1 = state_12770;var statearr_12775_12797 = state_12770__$1;(statearr_12775_12797[(2)] = inst_12764);
(statearr_12775_12797[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12771 === (6)))
{var inst_12755 = (state_12770[(2)]);var state_12770__$1 = state_12770;if(cljs.core.truth_(inst_12755))
{var statearr_12776_12798 = state_12770__$1;(statearr_12776_12798[(1)] = (8));
} else
{var statearr_12777_12799 = state_12770__$1;(statearr_12777_12799[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12771 === (3)))
{var inst_12768 = (state_12770[(2)]);var state_12770__$1 = state_12770;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12770__$1,inst_12768);
} else
{if((state_val_12771 === (12)))
{var state_12770__$1 = state_12770;var statearr_12778_12800 = state_12770__$1;(statearr_12778_12800[(2)] = null);
(statearr_12778_12800[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12771 === (2)))
{var inst_12747 = (state_12770[(7)]);var state_12770__$1 = state_12770;if(cljs.core.truth_(inst_12747))
{var statearr_12779_12801 = state_12770__$1;(statearr_12779_12801[(1)] = (4));
} else
{var statearr_12780_12802 = state_12770__$1;(statearr_12780_12802[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12771 === (11)))
{var inst_12761 = cljs.core.async.close_BANG_.call(null,ch);var state_12770__$1 = state_12770;var statearr_12781_12803 = state_12770__$1;(statearr_12781_12803[(2)] = inst_12761);
(statearr_12781_12803[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12771 === (9)))
{var state_12770__$1 = state_12770;if(cljs.core.truth_(close_QMARK_))
{var statearr_12782_12804 = state_12770__$1;(statearr_12782_12804[(1)] = (11));
} else
{var statearr_12783_12805 = state_12770__$1;(statearr_12783_12805[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12771 === (5)))
{var inst_12747 = (state_12770[(7)]);var state_12770__$1 = state_12770;var statearr_12784_12806 = state_12770__$1;(statearr_12784_12806[(2)] = inst_12747);
(statearr_12784_12806[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12771 === (10)))
{var inst_12766 = (state_12770[(2)]);var state_12770__$1 = state_12770;var statearr_12785_12807 = state_12770__$1;(statearr_12785_12807[(2)] = inst_12766);
(statearr_12785_12807[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12771 === (8)))
{var inst_12747 = (state_12770[(7)]);var inst_12757 = cljs.core.next.call(null,inst_12747);var inst_12747__$1 = inst_12757;var state_12770__$1 = (function (){var statearr_12786 = state_12770;(statearr_12786[(7)] = inst_12747__$1);
return statearr_12786;
})();var statearr_12787_12808 = state_12770__$1;(statearr_12787_12808[(2)] = null);
(statearr_12787_12808[(1)] = (2));
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
});})(c__6844__auto__))
;return ((function (switch__6829__auto__,c__6844__auto__){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_12791 = [null,null,null,null,null,null,null,null];(statearr_12791[(0)] = state_machine__6830__auto__);
(statearr_12791[(1)] = (1));
return statearr_12791;
});
var state_machine__6830__auto____1 = (function (state_12770){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_12770);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e12792){if((e12792 instanceof Object))
{var ex__6833__auto__ = e12792;var statearr_12793_12809 = state_12770;(statearr_12793_12809[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12770);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12792;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12810 = state_12770;
state_12770 = G__12810;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_12770){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_12770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto__))
})();var state__6846__auto__ = (function (){var statearr_12794 = f__6845__auto__.call(null);(statearr_12794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto__);
return statearr_12794;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto__))
);
return c__6844__auto__;
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
cljs.core.async.Mux = (function (){var obj12812 = {};return obj12812;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3627__auto__ = _;if(and__3627__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4275__auto__ = (((_ == null))?null:_);return (function (){var or__3639__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12814 = {};return obj12814;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13036 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13036 = (function (cs,ch,mult,meta13037){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13037 = meta13037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13036.cljs$lang$type = true;
cljs.core.async.t13036.cljs$lang$ctorStr = "cljs.core.async/t13036";
cljs.core.async.t13036.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t13036");
});})(cs))
;
cljs.core.async.t13036.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13036.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13036.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13036.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13036.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13036.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13036.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13038){var self__ = this;
var _13038__$1 = this;return self__.meta13037;
});})(cs))
;
cljs.core.async.t13036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13038,meta13037__$1){var self__ = this;
var _13038__$1 = this;return (new cljs.core.async.t13036(self__.cs,self__.ch,self__.mult,meta13037__$1));
});})(cs))
;
cljs.core.async.__GT_t13036 = ((function (cs){
return (function __GT_t13036(cs__$1,ch__$1,mult__$1,meta13037){return (new cljs.core.async.t13036(cs__$1,ch__$1,mult__$1,meta13037));
});})(cs))
;
}
return (new cljs.core.async.t13036(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6844__auto___13257 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto___13257,cs,m,dchan,dctr,done){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto___13257,cs,m,dchan,dctr,done){
return (function (state_13169){var state_val_13170 = (state_13169[(1)]);if((state_val_13170 === (7)))
{var inst_13165 = (state_13169[(2)]);var state_13169__$1 = state_13169;var statearr_13171_13258 = state_13169__$1;(statearr_13171_13258[(2)] = inst_13165);
(statearr_13171_13258[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (20)))
{var inst_13070 = (state_13169[(7)]);var inst_13080 = cljs.core.first.call(null,inst_13070);var inst_13081 = cljs.core.nth.call(null,inst_13080,(0),null);var inst_13082 = cljs.core.nth.call(null,inst_13080,(1),null);var state_13169__$1 = (function (){var statearr_13172 = state_13169;(statearr_13172[(8)] = inst_13081);
return statearr_13172;
})();if(cljs.core.truth_(inst_13082))
{var statearr_13173_13259 = state_13169__$1;(statearr_13173_13259[(1)] = (22));
} else
{var statearr_13174_13260 = state_13169__$1;(statearr_13174_13260[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (27)))
{var inst_13041 = (state_13169[(9)]);var inst_13117 = (state_13169[(10)]);var inst_13112 = (state_13169[(11)]);var inst_13110 = (state_13169[(12)]);var inst_13117__$1 = cljs.core._nth.call(null,inst_13110,inst_13112);var inst_13118 = cljs.core.async.put_BANG_.call(null,inst_13117__$1,inst_13041,done);var state_13169__$1 = (function (){var statearr_13175 = state_13169;(statearr_13175[(10)] = inst_13117__$1);
return statearr_13175;
})();if(cljs.core.truth_(inst_13118))
{var statearr_13176_13261 = state_13169__$1;(statearr_13176_13261[(1)] = (30));
} else
{var statearr_13177_13262 = state_13169__$1;(statearr_13177_13262[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (1)))
{var state_13169__$1 = state_13169;var statearr_13178_13263 = state_13169__$1;(statearr_13178_13263[(2)] = null);
(statearr_13178_13263[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (24)))
{var inst_13070 = (state_13169[(7)]);var inst_13087 = (state_13169[(2)]);var inst_13088 = cljs.core.next.call(null,inst_13070);var inst_13050 = inst_13088;var inst_13051 = null;var inst_13052 = (0);var inst_13053 = (0);var state_13169__$1 = (function (){var statearr_13179 = state_13169;(statearr_13179[(13)] = inst_13053);
(statearr_13179[(14)] = inst_13052);
(statearr_13179[(15)] = inst_13051);
(statearr_13179[(16)] = inst_13050);
(statearr_13179[(17)] = inst_13087);
return statearr_13179;
})();var statearr_13180_13264 = state_13169__$1;(statearr_13180_13264[(2)] = null);
(statearr_13180_13264[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (39)))
{var state_13169__$1 = state_13169;var statearr_13184_13265 = state_13169__$1;(statearr_13184_13265[(2)] = null);
(statearr_13184_13265[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (4)))
{var inst_13041 = (state_13169[(9)]);var inst_13041__$1 = (state_13169[(2)]);var inst_13042 = (inst_13041__$1 == null);var state_13169__$1 = (function (){var statearr_13185 = state_13169;(statearr_13185[(9)] = inst_13041__$1);
return statearr_13185;
})();if(cljs.core.truth_(inst_13042))
{var statearr_13186_13266 = state_13169__$1;(statearr_13186_13266[(1)] = (5));
} else
{var statearr_13187_13267 = state_13169__$1;(statearr_13187_13267[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (15)))
{var inst_13053 = (state_13169[(13)]);var inst_13052 = (state_13169[(14)]);var inst_13051 = (state_13169[(15)]);var inst_13050 = (state_13169[(16)]);var inst_13066 = (state_13169[(2)]);var inst_13067 = (inst_13053 + (1));var tmp13181 = inst_13052;var tmp13182 = inst_13051;var tmp13183 = inst_13050;var inst_13050__$1 = tmp13183;var inst_13051__$1 = tmp13182;var inst_13052__$1 = tmp13181;var inst_13053__$1 = inst_13067;var state_13169__$1 = (function (){var statearr_13188 = state_13169;(statearr_13188[(13)] = inst_13053__$1);
(statearr_13188[(14)] = inst_13052__$1);
(statearr_13188[(15)] = inst_13051__$1);
(statearr_13188[(18)] = inst_13066);
(statearr_13188[(16)] = inst_13050__$1);
return statearr_13188;
})();var statearr_13189_13268 = state_13169__$1;(statearr_13189_13268[(2)] = null);
(statearr_13189_13268[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (21)))
{var inst_13091 = (state_13169[(2)]);var state_13169__$1 = state_13169;var statearr_13193_13269 = state_13169__$1;(statearr_13193_13269[(2)] = inst_13091);
(statearr_13193_13269[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (31)))
{var inst_13117 = (state_13169[(10)]);var inst_13121 = done.call(null,null);var inst_13122 = cljs.core.async.untap_STAR_.call(null,m,inst_13117);var state_13169__$1 = (function (){var statearr_13194 = state_13169;(statearr_13194[(19)] = inst_13121);
return statearr_13194;
})();var statearr_13195_13270 = state_13169__$1;(statearr_13195_13270[(2)] = inst_13122);
(statearr_13195_13270[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (32)))
{var inst_13109 = (state_13169[(20)]);var inst_13112 = (state_13169[(11)]);var inst_13111 = (state_13169[(21)]);var inst_13110 = (state_13169[(12)]);var inst_13124 = (state_13169[(2)]);var inst_13125 = (inst_13112 + (1));var tmp13190 = inst_13109;var tmp13191 = inst_13111;var tmp13192 = inst_13110;var inst_13109__$1 = tmp13190;var inst_13110__$1 = tmp13192;var inst_13111__$1 = tmp13191;var inst_13112__$1 = inst_13125;var state_13169__$1 = (function (){var statearr_13196 = state_13169;(statearr_13196[(20)] = inst_13109__$1);
(statearr_13196[(11)] = inst_13112__$1);
(statearr_13196[(21)] = inst_13111__$1);
(statearr_13196[(22)] = inst_13124);
(statearr_13196[(12)] = inst_13110__$1);
return statearr_13196;
})();var statearr_13197_13271 = state_13169__$1;(statearr_13197_13271[(2)] = null);
(statearr_13197_13271[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (40)))
{var inst_13137 = (state_13169[(23)]);var inst_13141 = done.call(null,null);var inst_13142 = cljs.core.async.untap_STAR_.call(null,m,inst_13137);var state_13169__$1 = (function (){var statearr_13198 = state_13169;(statearr_13198[(24)] = inst_13141);
return statearr_13198;
})();var statearr_13199_13272 = state_13169__$1;(statearr_13199_13272[(2)] = inst_13142);
(statearr_13199_13272[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (33)))
{var inst_13128 = (state_13169[(25)]);var inst_13130 = cljs.core.chunked_seq_QMARK_.call(null,inst_13128);var state_13169__$1 = state_13169;if(inst_13130)
{var statearr_13200_13273 = state_13169__$1;(statearr_13200_13273[(1)] = (36));
} else
{var statearr_13201_13274 = state_13169__$1;(statearr_13201_13274[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (13)))
{var inst_13060 = (state_13169[(26)]);var inst_13063 = cljs.core.async.close_BANG_.call(null,inst_13060);var state_13169__$1 = state_13169;var statearr_13202_13275 = state_13169__$1;(statearr_13202_13275[(2)] = inst_13063);
(statearr_13202_13275[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (22)))
{var inst_13081 = (state_13169[(8)]);var inst_13084 = cljs.core.async.close_BANG_.call(null,inst_13081);var state_13169__$1 = state_13169;var statearr_13203_13276 = state_13169__$1;(statearr_13203_13276[(2)] = inst_13084);
(statearr_13203_13276[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (36)))
{var inst_13128 = (state_13169[(25)]);var inst_13132 = cljs.core.chunk_first.call(null,inst_13128);var inst_13133 = cljs.core.chunk_rest.call(null,inst_13128);var inst_13134 = cljs.core.count.call(null,inst_13132);var inst_13109 = inst_13133;var inst_13110 = inst_13132;var inst_13111 = inst_13134;var inst_13112 = (0);var state_13169__$1 = (function (){var statearr_13204 = state_13169;(statearr_13204[(20)] = inst_13109);
(statearr_13204[(11)] = inst_13112);
(statearr_13204[(21)] = inst_13111);
(statearr_13204[(12)] = inst_13110);
return statearr_13204;
})();var statearr_13205_13277 = state_13169__$1;(statearr_13205_13277[(2)] = null);
(statearr_13205_13277[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (41)))
{var inst_13128 = (state_13169[(25)]);var inst_13144 = (state_13169[(2)]);var inst_13145 = cljs.core.next.call(null,inst_13128);var inst_13109 = inst_13145;var inst_13110 = null;var inst_13111 = (0);var inst_13112 = (0);var state_13169__$1 = (function (){var statearr_13206 = state_13169;(statearr_13206[(20)] = inst_13109);
(statearr_13206[(11)] = inst_13112);
(statearr_13206[(21)] = inst_13111);
(statearr_13206[(27)] = inst_13144);
(statearr_13206[(12)] = inst_13110);
return statearr_13206;
})();var statearr_13207_13278 = state_13169__$1;(statearr_13207_13278[(2)] = null);
(statearr_13207_13278[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (43)))
{var state_13169__$1 = state_13169;var statearr_13208_13279 = state_13169__$1;(statearr_13208_13279[(2)] = null);
(statearr_13208_13279[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (29)))
{var inst_13153 = (state_13169[(2)]);var state_13169__$1 = state_13169;var statearr_13209_13280 = state_13169__$1;(statearr_13209_13280[(2)] = inst_13153);
(statearr_13209_13280[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (44)))
{var inst_13162 = (state_13169[(2)]);var state_13169__$1 = (function (){var statearr_13210 = state_13169;(statearr_13210[(28)] = inst_13162);
return statearr_13210;
})();var statearr_13211_13281 = state_13169__$1;(statearr_13211_13281[(2)] = null);
(statearr_13211_13281[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (6)))
{var inst_13101 = (state_13169[(29)]);var inst_13100 = cljs.core.deref.call(null,cs);var inst_13101__$1 = cljs.core.keys.call(null,inst_13100);var inst_13102 = cljs.core.count.call(null,inst_13101__$1);var inst_13103 = cljs.core.reset_BANG_.call(null,dctr,inst_13102);var inst_13108 = cljs.core.seq.call(null,inst_13101__$1);var inst_13109 = inst_13108;var inst_13110 = null;var inst_13111 = (0);var inst_13112 = (0);var state_13169__$1 = (function (){var statearr_13212 = state_13169;(statearr_13212[(20)] = inst_13109);
(statearr_13212[(30)] = inst_13103);
(statearr_13212[(29)] = inst_13101__$1);
(statearr_13212[(11)] = inst_13112);
(statearr_13212[(21)] = inst_13111);
(statearr_13212[(12)] = inst_13110);
return statearr_13212;
})();var statearr_13213_13282 = state_13169__$1;(statearr_13213_13282[(2)] = null);
(statearr_13213_13282[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (28)))
{var inst_13109 = (state_13169[(20)]);var inst_13128 = (state_13169[(25)]);var inst_13128__$1 = cljs.core.seq.call(null,inst_13109);var state_13169__$1 = (function (){var statearr_13214 = state_13169;(statearr_13214[(25)] = inst_13128__$1);
return statearr_13214;
})();if(inst_13128__$1)
{var statearr_13215_13283 = state_13169__$1;(statearr_13215_13283[(1)] = (33));
} else
{var statearr_13216_13284 = state_13169__$1;(statearr_13216_13284[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (25)))
{var inst_13112 = (state_13169[(11)]);var inst_13111 = (state_13169[(21)]);var inst_13114 = (inst_13112 < inst_13111);var inst_13115 = inst_13114;var state_13169__$1 = state_13169;if(cljs.core.truth_(inst_13115))
{var statearr_13217_13285 = state_13169__$1;(statearr_13217_13285[(1)] = (27));
} else
{var statearr_13218_13286 = state_13169__$1;(statearr_13218_13286[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (34)))
{var state_13169__$1 = state_13169;var statearr_13219_13287 = state_13169__$1;(statearr_13219_13287[(2)] = null);
(statearr_13219_13287[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (17)))
{var state_13169__$1 = state_13169;var statearr_13220_13288 = state_13169__$1;(statearr_13220_13288[(2)] = null);
(statearr_13220_13288[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (3)))
{var inst_13167 = (state_13169[(2)]);var state_13169__$1 = state_13169;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13169__$1,inst_13167);
} else
{if((state_val_13170 === (12)))
{var inst_13096 = (state_13169[(2)]);var state_13169__$1 = state_13169;var statearr_13221_13289 = state_13169__$1;(statearr_13221_13289[(2)] = inst_13096);
(statearr_13221_13289[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (2)))
{var state_13169__$1 = state_13169;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13169__$1,(4),ch);
} else
{if((state_val_13170 === (23)))
{var state_13169__$1 = state_13169;var statearr_13222_13290 = state_13169__$1;(statearr_13222_13290[(2)] = null);
(statearr_13222_13290[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (35)))
{var inst_13151 = (state_13169[(2)]);var state_13169__$1 = state_13169;var statearr_13223_13291 = state_13169__$1;(statearr_13223_13291[(2)] = inst_13151);
(statearr_13223_13291[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (19)))
{var inst_13070 = (state_13169[(7)]);var inst_13074 = cljs.core.chunk_first.call(null,inst_13070);var inst_13075 = cljs.core.chunk_rest.call(null,inst_13070);var inst_13076 = cljs.core.count.call(null,inst_13074);var inst_13050 = inst_13075;var inst_13051 = inst_13074;var inst_13052 = inst_13076;var inst_13053 = (0);var state_13169__$1 = (function (){var statearr_13224 = state_13169;(statearr_13224[(13)] = inst_13053);
(statearr_13224[(14)] = inst_13052);
(statearr_13224[(15)] = inst_13051);
(statearr_13224[(16)] = inst_13050);
return statearr_13224;
})();var statearr_13225_13292 = state_13169__$1;(statearr_13225_13292[(2)] = null);
(statearr_13225_13292[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (11)))
{var inst_13050 = (state_13169[(16)]);var inst_13070 = (state_13169[(7)]);var inst_13070__$1 = cljs.core.seq.call(null,inst_13050);var state_13169__$1 = (function (){var statearr_13226 = state_13169;(statearr_13226[(7)] = inst_13070__$1);
return statearr_13226;
})();if(inst_13070__$1)
{var statearr_13227_13293 = state_13169__$1;(statearr_13227_13293[(1)] = (16));
} else
{var statearr_13228_13294 = state_13169__$1;(statearr_13228_13294[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (9)))
{var inst_13098 = (state_13169[(2)]);var state_13169__$1 = state_13169;var statearr_13229_13295 = state_13169__$1;(statearr_13229_13295[(2)] = inst_13098);
(statearr_13229_13295[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (5)))
{var inst_13048 = cljs.core.deref.call(null,cs);var inst_13049 = cljs.core.seq.call(null,inst_13048);var inst_13050 = inst_13049;var inst_13051 = null;var inst_13052 = (0);var inst_13053 = (0);var state_13169__$1 = (function (){var statearr_13230 = state_13169;(statearr_13230[(13)] = inst_13053);
(statearr_13230[(14)] = inst_13052);
(statearr_13230[(15)] = inst_13051);
(statearr_13230[(16)] = inst_13050);
return statearr_13230;
})();var statearr_13231_13296 = state_13169__$1;(statearr_13231_13296[(2)] = null);
(statearr_13231_13296[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (14)))
{var state_13169__$1 = state_13169;var statearr_13232_13297 = state_13169__$1;(statearr_13232_13297[(2)] = null);
(statearr_13232_13297[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (45)))
{var inst_13159 = (state_13169[(2)]);var state_13169__$1 = state_13169;var statearr_13233_13298 = state_13169__$1;(statearr_13233_13298[(2)] = inst_13159);
(statearr_13233_13298[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (26)))
{var inst_13101 = (state_13169[(29)]);var inst_13155 = (state_13169[(2)]);var inst_13156 = cljs.core.seq.call(null,inst_13101);var state_13169__$1 = (function (){var statearr_13234 = state_13169;(statearr_13234[(31)] = inst_13155);
return statearr_13234;
})();if(inst_13156)
{var statearr_13235_13299 = state_13169__$1;(statearr_13235_13299[(1)] = (42));
} else
{var statearr_13236_13300 = state_13169__$1;(statearr_13236_13300[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (16)))
{var inst_13070 = (state_13169[(7)]);var inst_13072 = cljs.core.chunked_seq_QMARK_.call(null,inst_13070);var state_13169__$1 = state_13169;if(inst_13072)
{var statearr_13237_13301 = state_13169__$1;(statearr_13237_13301[(1)] = (19));
} else
{var statearr_13238_13302 = state_13169__$1;(statearr_13238_13302[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (38)))
{var inst_13148 = (state_13169[(2)]);var state_13169__$1 = state_13169;var statearr_13239_13303 = state_13169__$1;(statearr_13239_13303[(2)] = inst_13148);
(statearr_13239_13303[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (30)))
{var state_13169__$1 = state_13169;var statearr_13240_13304 = state_13169__$1;(statearr_13240_13304[(2)] = null);
(statearr_13240_13304[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (10)))
{var inst_13053 = (state_13169[(13)]);var inst_13051 = (state_13169[(15)]);var inst_13059 = cljs.core._nth.call(null,inst_13051,inst_13053);var inst_13060 = cljs.core.nth.call(null,inst_13059,(0),null);var inst_13061 = cljs.core.nth.call(null,inst_13059,(1),null);var state_13169__$1 = (function (){var statearr_13241 = state_13169;(statearr_13241[(26)] = inst_13060);
return statearr_13241;
})();if(cljs.core.truth_(inst_13061))
{var statearr_13242_13305 = state_13169__$1;(statearr_13242_13305[(1)] = (13));
} else
{var statearr_13243_13306 = state_13169__$1;(statearr_13243_13306[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (18)))
{var inst_13094 = (state_13169[(2)]);var state_13169__$1 = state_13169;var statearr_13244_13307 = state_13169__$1;(statearr_13244_13307[(2)] = inst_13094);
(statearr_13244_13307[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (42)))
{var state_13169__$1 = state_13169;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13169__$1,(45),dchan);
} else
{if((state_val_13170 === (37)))
{var inst_13041 = (state_13169[(9)]);var inst_13137 = (state_13169[(23)]);var inst_13128 = (state_13169[(25)]);var inst_13137__$1 = cljs.core.first.call(null,inst_13128);var inst_13138 = cljs.core.async.put_BANG_.call(null,inst_13137__$1,inst_13041,done);var state_13169__$1 = (function (){var statearr_13245 = state_13169;(statearr_13245[(23)] = inst_13137__$1);
return statearr_13245;
})();if(cljs.core.truth_(inst_13138))
{var statearr_13246_13308 = state_13169__$1;(statearr_13246_13308[(1)] = (39));
} else
{var statearr_13247_13309 = state_13169__$1;(statearr_13247_13309[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13170 === (8)))
{var inst_13053 = (state_13169[(13)]);var inst_13052 = (state_13169[(14)]);var inst_13055 = (inst_13053 < inst_13052);var inst_13056 = inst_13055;var state_13169__$1 = state_13169;if(cljs.core.truth_(inst_13056))
{var statearr_13248_13310 = state_13169__$1;(statearr_13248_13310[(1)] = (10));
} else
{var statearr_13249_13311 = state_13169__$1;(statearr_13249_13311[(1)] = (11));
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
});})(c__6844__auto___13257,cs,m,dchan,dctr,done))
;return ((function (switch__6829__auto__,c__6844__auto___13257,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_13253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13253[(0)] = state_machine__6830__auto__);
(statearr_13253[(1)] = (1));
return statearr_13253;
});
var state_machine__6830__auto____1 = (function (state_13169){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_13169);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e13254){if((e13254 instanceof Object))
{var ex__6833__auto__ = e13254;var statearr_13255_13312 = state_13169;(statearr_13255_13312[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13169);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13254;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13313 = state_13169;
state_13169 = G__13313;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_13169){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_13169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto___13257,cs,m,dchan,dctr,done))
})();var state__6846__auto__ = (function (){var statearr_13256 = f__6845__auto__.call(null);(statearr_13256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___13257);
return statearr_13256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto___13257,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj13315 = {};return obj13315;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13316){var map__13321 = p__13316;var map__13321__$1 = ((cljs.core.seq_QMARK_.call(null,map__13321))?cljs.core.apply.call(null,cljs.core.hash_map,map__13321):map__13321);var opts = map__13321__$1;var statearr_13322_13325 = state;(statearr_13322_13325[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__13321,map__13321__$1,opts){
return (function (val){var statearr_13323_13326 = state;(statearr_13323_13326[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13321,map__13321__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_13324_13327 = state;(statearr_13324_13327[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13316 = null;if (arguments.length > 3) {
  p__13316 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13316);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13328){
var state = cljs.core.first(arglist__13328);
arglist__13328 = cljs.core.next(arglist__13328);
var cont_block = cljs.core.first(arglist__13328);
arglist__13328 = cljs.core.next(arglist__13328);
var ports = cljs.core.first(arglist__13328);
var p__13316 = cljs.core.rest(arglist__13328);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13316);
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
;var m = (function (){if(typeof cljs.core.async.t13448 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13448 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13449){
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
this.meta13449 = meta13449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13448.cljs$lang$type = true;
cljs.core.async.t13448.cljs$lang$ctorStr = "cljs.core.async/t13448";
cljs.core.async.t13448.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t13448");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13448.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13448.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13448.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13448.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13448.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13448.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13448.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13448.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13448.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13450){var self__ = this;
var _13450__$1 = this;return self__.meta13449;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13450,meta13449__$1){var self__ = this;
var _13450__$1 = this;return (new cljs.core.async.t13448(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13449__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13448 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13448(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13449){return (new cljs.core.async.t13448(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13449));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13448(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6844__auto___13567 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto___13567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto___13567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13520){var state_val_13521 = (state_13520[(1)]);if((state_val_13521 === (7)))
{var inst_13464 = (state_13520[(7)]);var inst_13469 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13464);var state_13520__$1 = state_13520;var statearr_13522_13568 = state_13520__$1;(statearr_13522_13568[(2)] = inst_13469);
(statearr_13522_13568[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (20)))
{var inst_13479 = (state_13520[(8)]);var state_13520__$1 = state_13520;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13520__$1,(23),out,inst_13479);
} else
{if((state_val_13521 === (1)))
{var inst_13454 = (state_13520[(9)]);var inst_13454__$1 = calc_state.call(null);var inst_13455 = cljs.core.seq_QMARK_.call(null,inst_13454__$1);var state_13520__$1 = (function (){var statearr_13523 = state_13520;(statearr_13523[(9)] = inst_13454__$1);
return statearr_13523;
})();if(inst_13455)
{var statearr_13524_13569 = state_13520__$1;(statearr_13524_13569[(1)] = (2));
} else
{var statearr_13525_13570 = state_13520__$1;(statearr_13525_13570[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (24)))
{var inst_13472 = (state_13520[(10)]);var inst_13464 = inst_13472;var state_13520__$1 = (function (){var statearr_13526 = state_13520;(statearr_13526[(7)] = inst_13464);
return statearr_13526;
})();var statearr_13527_13571 = state_13520__$1;(statearr_13527_13571[(2)] = null);
(statearr_13527_13571[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (4)))
{var inst_13454 = (state_13520[(9)]);var inst_13460 = (state_13520[(2)]);var inst_13461 = cljs.core.get.call(null,inst_13460,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13462 = cljs.core.get.call(null,inst_13460,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13463 = cljs.core.get.call(null,inst_13460,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13464 = inst_13454;var state_13520__$1 = (function (){var statearr_13528 = state_13520;(statearr_13528[(11)] = inst_13463);
(statearr_13528[(12)] = inst_13462);
(statearr_13528[(13)] = inst_13461);
(statearr_13528[(7)] = inst_13464);
return statearr_13528;
})();var statearr_13529_13572 = state_13520__$1;(statearr_13529_13572[(2)] = null);
(statearr_13529_13572[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (15)))
{var state_13520__$1 = state_13520;var statearr_13530_13573 = state_13520__$1;(statearr_13530_13573[(2)] = null);
(statearr_13530_13573[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (21)))
{var inst_13472 = (state_13520[(10)]);var inst_13464 = inst_13472;var state_13520__$1 = (function (){var statearr_13531 = state_13520;(statearr_13531[(7)] = inst_13464);
return statearr_13531;
})();var statearr_13532_13574 = state_13520__$1;(statearr_13532_13574[(2)] = null);
(statearr_13532_13574[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (13)))
{var inst_13516 = (state_13520[(2)]);var state_13520__$1 = state_13520;var statearr_13533_13575 = state_13520__$1;(statearr_13533_13575[(2)] = inst_13516);
(statearr_13533_13575[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (22)))
{var inst_13514 = (state_13520[(2)]);var state_13520__$1 = state_13520;var statearr_13534_13576 = state_13520__$1;(statearr_13534_13576[(2)] = inst_13514);
(statearr_13534_13576[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (6)))
{var inst_13518 = (state_13520[(2)]);var state_13520__$1 = state_13520;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13520__$1,inst_13518);
} else
{if((state_val_13521 === (25)))
{var state_13520__$1 = state_13520;var statearr_13535_13577 = state_13520__$1;(statearr_13535_13577[(2)] = null);
(statearr_13535_13577[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (17)))
{var inst_13494 = (state_13520[(14)]);var state_13520__$1 = state_13520;var statearr_13536_13578 = state_13520__$1;(statearr_13536_13578[(2)] = inst_13494);
(statearr_13536_13578[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (3)))
{var inst_13454 = (state_13520[(9)]);var state_13520__$1 = state_13520;var statearr_13537_13579 = state_13520__$1;(statearr_13537_13579[(2)] = inst_13454);
(statearr_13537_13579[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (12)))
{var inst_13494 = (state_13520[(14)]);var inst_13475 = (state_13520[(15)]);var inst_13480 = (state_13520[(16)]);var inst_13494__$1 = inst_13475.call(null,inst_13480);var state_13520__$1 = (function (){var statearr_13538 = state_13520;(statearr_13538[(14)] = inst_13494__$1);
return statearr_13538;
})();if(cljs.core.truth_(inst_13494__$1))
{var statearr_13539_13580 = state_13520__$1;(statearr_13539_13580[(1)] = (17));
} else
{var statearr_13540_13581 = state_13520__$1;(statearr_13540_13581[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (2)))
{var inst_13454 = (state_13520[(9)]);var inst_13457 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13454);var state_13520__$1 = state_13520;var statearr_13541_13582 = state_13520__$1;(statearr_13541_13582[(2)] = inst_13457);
(statearr_13541_13582[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (23)))
{var inst_13505 = (state_13520[(2)]);var state_13520__$1 = state_13520;if(cljs.core.truth_(inst_13505))
{var statearr_13542_13583 = state_13520__$1;(statearr_13542_13583[(1)] = (24));
} else
{var statearr_13543_13584 = state_13520__$1;(statearr_13543_13584[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (19)))
{var inst_13502 = (state_13520[(2)]);var state_13520__$1 = state_13520;if(cljs.core.truth_(inst_13502))
{var statearr_13544_13585 = state_13520__$1;(statearr_13544_13585[(1)] = (20));
} else
{var statearr_13545_13586 = state_13520__$1;(statearr_13545_13586[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (11)))
{var inst_13479 = (state_13520[(8)]);var inst_13485 = (inst_13479 == null);var state_13520__$1 = state_13520;if(cljs.core.truth_(inst_13485))
{var statearr_13546_13587 = state_13520__$1;(statearr_13546_13587[(1)] = (14));
} else
{var statearr_13547_13588 = state_13520__$1;(statearr_13547_13588[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (9)))
{var inst_13472 = (state_13520[(10)]);var inst_13472__$1 = (state_13520[(2)]);var inst_13473 = cljs.core.get.call(null,inst_13472__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13474 = cljs.core.get.call(null,inst_13472__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13475 = cljs.core.get.call(null,inst_13472__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13520__$1 = (function (){var statearr_13548 = state_13520;(statearr_13548[(17)] = inst_13474);
(statearr_13548[(10)] = inst_13472__$1);
(statearr_13548[(15)] = inst_13475);
return statearr_13548;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_13520__$1,(10),inst_13473);
} else
{if((state_val_13521 === (5)))
{var inst_13464 = (state_13520[(7)]);var inst_13467 = cljs.core.seq_QMARK_.call(null,inst_13464);var state_13520__$1 = state_13520;if(inst_13467)
{var statearr_13549_13589 = state_13520__$1;(statearr_13549_13589[(1)] = (7));
} else
{var statearr_13550_13590 = state_13520__$1;(statearr_13550_13590[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (14)))
{var inst_13480 = (state_13520[(16)]);var inst_13487 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13480);var state_13520__$1 = state_13520;var statearr_13551_13591 = state_13520__$1;(statearr_13551_13591[(2)] = inst_13487);
(statearr_13551_13591[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (26)))
{var inst_13510 = (state_13520[(2)]);var state_13520__$1 = state_13520;var statearr_13552_13592 = state_13520__$1;(statearr_13552_13592[(2)] = inst_13510);
(statearr_13552_13592[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (16)))
{var inst_13490 = (state_13520[(2)]);var inst_13491 = calc_state.call(null);var inst_13464 = inst_13491;var state_13520__$1 = (function (){var statearr_13553 = state_13520;(statearr_13553[(18)] = inst_13490);
(statearr_13553[(7)] = inst_13464);
return statearr_13553;
})();var statearr_13554_13593 = state_13520__$1;(statearr_13554_13593[(2)] = null);
(statearr_13554_13593[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (10)))
{var inst_13479 = (state_13520[(8)]);var inst_13480 = (state_13520[(16)]);var inst_13478 = (state_13520[(2)]);var inst_13479__$1 = cljs.core.nth.call(null,inst_13478,(0),null);var inst_13480__$1 = cljs.core.nth.call(null,inst_13478,(1),null);var inst_13481 = (inst_13479__$1 == null);var inst_13482 = cljs.core._EQ_.call(null,inst_13480__$1,change);var inst_13483 = (inst_13481) || (inst_13482);var state_13520__$1 = (function (){var statearr_13555 = state_13520;(statearr_13555[(8)] = inst_13479__$1);
(statearr_13555[(16)] = inst_13480__$1);
return statearr_13555;
})();if(cljs.core.truth_(inst_13483))
{var statearr_13556_13594 = state_13520__$1;(statearr_13556_13594[(1)] = (11));
} else
{var statearr_13557_13595 = state_13520__$1;(statearr_13557_13595[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (18)))
{var inst_13474 = (state_13520[(17)]);var inst_13475 = (state_13520[(15)]);var inst_13480 = (state_13520[(16)]);var inst_13497 = cljs.core.empty_QMARK_.call(null,inst_13475);var inst_13498 = inst_13474.call(null,inst_13480);var inst_13499 = cljs.core.not.call(null,inst_13498);var inst_13500 = (inst_13497) && (inst_13499);var state_13520__$1 = state_13520;var statearr_13558_13596 = state_13520__$1;(statearr_13558_13596[(2)] = inst_13500);
(statearr_13558_13596[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13521 === (8)))
{var inst_13464 = (state_13520[(7)]);var state_13520__$1 = state_13520;var statearr_13559_13597 = state_13520__$1;(statearr_13559_13597[(2)] = inst_13464);
(statearr_13559_13597[(1)] = (9));
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
});})(c__6844__auto___13567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6829__auto__,c__6844__auto___13567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_13563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13563[(0)] = state_machine__6830__auto__);
(statearr_13563[(1)] = (1));
return statearr_13563;
});
var state_machine__6830__auto____1 = (function (state_13520){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_13520);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e13564){if((e13564 instanceof Object))
{var ex__6833__auto__ = e13564;var statearr_13565_13598 = state_13520;(statearr_13565_13598[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13520);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13564;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13599 = state_13520;
state_13520 = G__13599;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_13520){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_13520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto___13567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6846__auto__ = (function (){var statearr_13566 = f__6845__auto__.call(null);(statearr_13566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___13567);
return statearr_13566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto___13567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj13601 = {};return obj13601;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
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
return (function (topic){var or__3639__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3639__auto__,mults){
return (function (p1__13602_SHARP_){if(cljs.core.truth_(p1__13602_SHARP_.call(null,topic)))
{return p1__13602_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13602_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13725 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13725 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13726){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13726 = meta13726;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13725.cljs$lang$type = true;
cljs.core.async.t13725.cljs$lang$ctorStr = "cljs.core.async/t13725";
cljs.core.async.t13725.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t13725");
});})(mults,ensure_mult))
;
cljs.core.async.t13725.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13725.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13725.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13725.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13725.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13725.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13725.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13725.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13727){var self__ = this;
var _13727__$1 = this;return self__.meta13726;
});})(mults,ensure_mult))
;
cljs.core.async.t13725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13727,meta13726__$1){var self__ = this;
var _13727__$1 = this;return (new cljs.core.async.t13725(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13726__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13725 = ((function (mults,ensure_mult){
return (function __GT_t13725(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13726){return (new cljs.core.async.t13725(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13726));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13725(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6844__auto___13847 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto___13847,mults,ensure_mult,p){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto___13847,mults,ensure_mult,p){
return (function (state_13799){var state_val_13800 = (state_13799[(1)]);if((state_val_13800 === (7)))
{var inst_13795 = (state_13799[(2)]);var state_13799__$1 = state_13799;var statearr_13801_13848 = state_13799__$1;(statearr_13801_13848[(2)] = inst_13795);
(statearr_13801_13848[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (20)))
{var state_13799__$1 = state_13799;var statearr_13802_13849 = state_13799__$1;(statearr_13802_13849[(2)] = null);
(statearr_13802_13849[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (1)))
{var state_13799__$1 = state_13799;var statearr_13803_13850 = state_13799__$1;(statearr_13803_13850[(2)] = null);
(statearr_13803_13850[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (24)))
{var inst_13778 = (state_13799[(7)]);var inst_13787 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13778);var state_13799__$1 = state_13799;var statearr_13804_13851 = state_13799__$1;(statearr_13804_13851[(2)] = inst_13787);
(statearr_13804_13851[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (4)))
{var inst_13730 = (state_13799[(8)]);var inst_13730__$1 = (state_13799[(2)]);var inst_13731 = (inst_13730__$1 == null);var state_13799__$1 = (function (){var statearr_13805 = state_13799;(statearr_13805[(8)] = inst_13730__$1);
return statearr_13805;
})();if(cljs.core.truth_(inst_13731))
{var statearr_13806_13852 = state_13799__$1;(statearr_13806_13852[(1)] = (5));
} else
{var statearr_13807_13853 = state_13799__$1;(statearr_13807_13853[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (15)))
{var inst_13772 = (state_13799[(2)]);var state_13799__$1 = state_13799;var statearr_13808_13854 = state_13799__$1;(statearr_13808_13854[(2)] = inst_13772);
(statearr_13808_13854[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (21)))
{var inst_13792 = (state_13799[(2)]);var state_13799__$1 = (function (){var statearr_13809 = state_13799;(statearr_13809[(9)] = inst_13792);
return statearr_13809;
})();var statearr_13810_13855 = state_13799__$1;(statearr_13810_13855[(2)] = null);
(statearr_13810_13855[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (13)))
{var inst_13754 = (state_13799[(10)]);var inst_13756 = cljs.core.chunked_seq_QMARK_.call(null,inst_13754);var state_13799__$1 = state_13799;if(inst_13756)
{var statearr_13811_13856 = state_13799__$1;(statearr_13811_13856[(1)] = (16));
} else
{var statearr_13812_13857 = state_13799__$1;(statearr_13812_13857[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (22)))
{var inst_13784 = (state_13799[(2)]);var state_13799__$1 = state_13799;if(cljs.core.truth_(inst_13784))
{var statearr_13813_13858 = state_13799__$1;(statearr_13813_13858[(1)] = (23));
} else
{var statearr_13814_13859 = state_13799__$1;(statearr_13814_13859[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (6)))
{var inst_13778 = (state_13799[(7)]);var inst_13730 = (state_13799[(8)]);var inst_13780 = (state_13799[(11)]);var inst_13778__$1 = topic_fn.call(null,inst_13730);var inst_13779 = cljs.core.deref.call(null,mults);var inst_13780__$1 = cljs.core.get.call(null,inst_13779,inst_13778__$1);var state_13799__$1 = (function (){var statearr_13815 = state_13799;(statearr_13815[(7)] = inst_13778__$1);
(statearr_13815[(11)] = inst_13780__$1);
return statearr_13815;
})();if(cljs.core.truth_(inst_13780__$1))
{var statearr_13816_13860 = state_13799__$1;(statearr_13816_13860[(1)] = (19));
} else
{var statearr_13817_13861 = state_13799__$1;(statearr_13817_13861[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (25)))
{var inst_13789 = (state_13799[(2)]);var state_13799__$1 = state_13799;var statearr_13818_13862 = state_13799__$1;(statearr_13818_13862[(2)] = inst_13789);
(statearr_13818_13862[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (17)))
{var inst_13754 = (state_13799[(10)]);var inst_13763 = cljs.core.first.call(null,inst_13754);var inst_13764 = cljs.core.async.muxch_STAR_.call(null,inst_13763);var inst_13765 = cljs.core.async.close_BANG_.call(null,inst_13764);var inst_13766 = cljs.core.next.call(null,inst_13754);var inst_13740 = inst_13766;var inst_13741 = null;var inst_13742 = (0);var inst_13743 = (0);var state_13799__$1 = (function (){var statearr_13819 = state_13799;(statearr_13819[(12)] = inst_13765);
(statearr_13819[(13)] = inst_13742);
(statearr_13819[(14)] = inst_13741);
(statearr_13819[(15)] = inst_13740);
(statearr_13819[(16)] = inst_13743);
return statearr_13819;
})();var statearr_13820_13863 = state_13799__$1;(statearr_13820_13863[(2)] = null);
(statearr_13820_13863[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (3)))
{var inst_13797 = (state_13799[(2)]);var state_13799__$1 = state_13799;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13799__$1,inst_13797);
} else
{if((state_val_13800 === (12)))
{var inst_13774 = (state_13799[(2)]);var state_13799__$1 = state_13799;var statearr_13821_13864 = state_13799__$1;(statearr_13821_13864[(2)] = inst_13774);
(statearr_13821_13864[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (2)))
{var state_13799__$1 = state_13799;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13799__$1,(4),ch);
} else
{if((state_val_13800 === (23)))
{var state_13799__$1 = state_13799;var statearr_13822_13865 = state_13799__$1;(statearr_13822_13865[(2)] = null);
(statearr_13822_13865[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (19)))
{var inst_13730 = (state_13799[(8)]);var inst_13780 = (state_13799[(11)]);var inst_13782 = cljs.core.async.muxch_STAR_.call(null,inst_13780);var state_13799__$1 = state_13799;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13799__$1,(22),inst_13782,inst_13730);
} else
{if((state_val_13800 === (11)))
{var inst_13740 = (state_13799[(15)]);var inst_13754 = (state_13799[(10)]);var inst_13754__$1 = cljs.core.seq.call(null,inst_13740);var state_13799__$1 = (function (){var statearr_13823 = state_13799;(statearr_13823[(10)] = inst_13754__$1);
return statearr_13823;
})();if(inst_13754__$1)
{var statearr_13824_13866 = state_13799__$1;(statearr_13824_13866[(1)] = (13));
} else
{var statearr_13825_13867 = state_13799__$1;(statearr_13825_13867[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (9)))
{var inst_13776 = (state_13799[(2)]);var state_13799__$1 = state_13799;var statearr_13826_13868 = state_13799__$1;(statearr_13826_13868[(2)] = inst_13776);
(statearr_13826_13868[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (5)))
{var inst_13737 = cljs.core.deref.call(null,mults);var inst_13738 = cljs.core.vals.call(null,inst_13737);var inst_13739 = cljs.core.seq.call(null,inst_13738);var inst_13740 = inst_13739;var inst_13741 = null;var inst_13742 = (0);var inst_13743 = (0);var state_13799__$1 = (function (){var statearr_13827 = state_13799;(statearr_13827[(13)] = inst_13742);
(statearr_13827[(14)] = inst_13741);
(statearr_13827[(15)] = inst_13740);
(statearr_13827[(16)] = inst_13743);
return statearr_13827;
})();var statearr_13828_13869 = state_13799__$1;(statearr_13828_13869[(2)] = null);
(statearr_13828_13869[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (14)))
{var state_13799__$1 = state_13799;var statearr_13832_13870 = state_13799__$1;(statearr_13832_13870[(2)] = null);
(statearr_13832_13870[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (16)))
{var inst_13754 = (state_13799[(10)]);var inst_13758 = cljs.core.chunk_first.call(null,inst_13754);var inst_13759 = cljs.core.chunk_rest.call(null,inst_13754);var inst_13760 = cljs.core.count.call(null,inst_13758);var inst_13740 = inst_13759;var inst_13741 = inst_13758;var inst_13742 = inst_13760;var inst_13743 = (0);var state_13799__$1 = (function (){var statearr_13833 = state_13799;(statearr_13833[(13)] = inst_13742);
(statearr_13833[(14)] = inst_13741);
(statearr_13833[(15)] = inst_13740);
(statearr_13833[(16)] = inst_13743);
return statearr_13833;
})();var statearr_13834_13871 = state_13799__$1;(statearr_13834_13871[(2)] = null);
(statearr_13834_13871[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (10)))
{var inst_13742 = (state_13799[(13)]);var inst_13741 = (state_13799[(14)]);var inst_13740 = (state_13799[(15)]);var inst_13743 = (state_13799[(16)]);var inst_13748 = cljs.core._nth.call(null,inst_13741,inst_13743);var inst_13749 = cljs.core.async.muxch_STAR_.call(null,inst_13748);var inst_13750 = cljs.core.async.close_BANG_.call(null,inst_13749);var inst_13751 = (inst_13743 + (1));var tmp13829 = inst_13742;var tmp13830 = inst_13741;var tmp13831 = inst_13740;var inst_13740__$1 = tmp13831;var inst_13741__$1 = tmp13830;var inst_13742__$1 = tmp13829;var inst_13743__$1 = inst_13751;var state_13799__$1 = (function (){var statearr_13835 = state_13799;(statearr_13835[(13)] = inst_13742__$1);
(statearr_13835[(17)] = inst_13750);
(statearr_13835[(14)] = inst_13741__$1);
(statearr_13835[(15)] = inst_13740__$1);
(statearr_13835[(16)] = inst_13743__$1);
return statearr_13835;
})();var statearr_13836_13872 = state_13799__$1;(statearr_13836_13872[(2)] = null);
(statearr_13836_13872[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (18)))
{var inst_13769 = (state_13799[(2)]);var state_13799__$1 = state_13799;var statearr_13837_13873 = state_13799__$1;(statearr_13837_13873[(2)] = inst_13769);
(statearr_13837_13873[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13800 === (8)))
{var inst_13742 = (state_13799[(13)]);var inst_13743 = (state_13799[(16)]);var inst_13745 = (inst_13743 < inst_13742);var inst_13746 = inst_13745;var state_13799__$1 = state_13799;if(cljs.core.truth_(inst_13746))
{var statearr_13838_13874 = state_13799__$1;(statearr_13838_13874[(1)] = (10));
} else
{var statearr_13839_13875 = state_13799__$1;(statearr_13839_13875[(1)] = (11));
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
});})(c__6844__auto___13847,mults,ensure_mult,p))
;return ((function (switch__6829__auto__,c__6844__auto___13847,mults,ensure_mult,p){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_13843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13843[(0)] = state_machine__6830__auto__);
(statearr_13843[(1)] = (1));
return statearr_13843;
});
var state_machine__6830__auto____1 = (function (state_13799){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_13799);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e13844){if((e13844 instanceof Object))
{var ex__6833__auto__ = e13844;var statearr_13845_13876 = state_13799;(statearr_13845_13876[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13799);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13844;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13877 = state_13799;
state_13799 = G__13877;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_13799){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_13799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto___13847,mults,ensure_mult,p))
})();var state__6846__auto__ = (function (){var statearr_13846 = f__6845__auto__.call(null);(statearr_13846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___13847);
return statearr_13846;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto___13847,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6844__auto___14014 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto___14014,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto___14014,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13984){var state_val_13985 = (state_13984[(1)]);if((state_val_13985 === (7)))
{var state_13984__$1 = state_13984;var statearr_13986_14015 = state_13984__$1;(statearr_13986_14015[(2)] = null);
(statearr_13986_14015[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13985 === (1)))
{var state_13984__$1 = state_13984;var statearr_13987_14016 = state_13984__$1;(statearr_13987_14016[(2)] = null);
(statearr_13987_14016[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13985 === (4)))
{var inst_13948 = (state_13984[(7)]);var inst_13950 = (inst_13948 < cnt);var state_13984__$1 = state_13984;if(cljs.core.truth_(inst_13950))
{var statearr_13988_14017 = state_13984__$1;(statearr_13988_14017[(1)] = (6));
} else
{var statearr_13989_14018 = state_13984__$1;(statearr_13989_14018[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13985 === (15)))
{var inst_13980 = (state_13984[(2)]);var state_13984__$1 = state_13984;var statearr_13990_14019 = state_13984__$1;(statearr_13990_14019[(2)] = inst_13980);
(statearr_13990_14019[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13985 === (13)))
{var inst_13973 = cljs.core.async.close_BANG_.call(null,out);var state_13984__$1 = state_13984;var statearr_13991_14020 = state_13984__$1;(statearr_13991_14020[(2)] = inst_13973);
(statearr_13991_14020[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13985 === (6)))
{var state_13984__$1 = state_13984;var statearr_13992_14021 = state_13984__$1;(statearr_13992_14021[(2)] = null);
(statearr_13992_14021[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13985 === (3)))
{var inst_13982 = (state_13984[(2)]);var state_13984__$1 = state_13984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13984__$1,inst_13982);
} else
{if((state_val_13985 === (12)))
{var inst_13970 = (state_13984[(8)]);var inst_13970__$1 = (state_13984[(2)]);var inst_13971 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13970__$1);var state_13984__$1 = (function (){var statearr_13993 = state_13984;(statearr_13993[(8)] = inst_13970__$1);
return statearr_13993;
})();if(cljs.core.truth_(inst_13971))
{var statearr_13994_14022 = state_13984__$1;(statearr_13994_14022[(1)] = (13));
} else
{var statearr_13995_14023 = state_13984__$1;(statearr_13995_14023[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13985 === (2)))
{var inst_13947 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13948 = (0);var state_13984__$1 = (function (){var statearr_13996 = state_13984;(statearr_13996[(9)] = inst_13947);
(statearr_13996[(7)] = inst_13948);
return statearr_13996;
})();var statearr_13997_14024 = state_13984__$1;(statearr_13997_14024[(2)] = null);
(statearr_13997_14024[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13985 === (11)))
{var inst_13948 = (state_13984[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13984,(10),Object,null,(9));var inst_13957 = chs__$1.call(null,inst_13948);var inst_13958 = done.call(null,inst_13948);var inst_13959 = cljs.core.async.take_BANG_.call(null,inst_13957,inst_13958);var state_13984__$1 = state_13984;var statearr_13998_14025 = state_13984__$1;(statearr_13998_14025[(2)] = inst_13959);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13984__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13985 === (9)))
{var inst_13948 = (state_13984[(7)]);var inst_13961 = (state_13984[(2)]);var inst_13962 = (inst_13948 + (1));var inst_13948__$1 = inst_13962;var state_13984__$1 = (function (){var statearr_13999 = state_13984;(statearr_13999[(7)] = inst_13948__$1);
(statearr_13999[(10)] = inst_13961);
return statearr_13999;
})();var statearr_14000_14026 = state_13984__$1;(statearr_14000_14026[(2)] = null);
(statearr_14000_14026[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13985 === (5)))
{var inst_13968 = (state_13984[(2)]);var state_13984__$1 = (function (){var statearr_14001 = state_13984;(statearr_14001[(11)] = inst_13968);
return statearr_14001;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13984__$1,(12),dchan);
} else
{if((state_val_13985 === (14)))
{var inst_13970 = (state_13984[(8)]);var inst_13975 = cljs.core.apply.call(null,f,inst_13970);var state_13984__$1 = state_13984;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13984__$1,(16),out,inst_13975);
} else
{if((state_val_13985 === (16)))
{var inst_13977 = (state_13984[(2)]);var state_13984__$1 = (function (){var statearr_14002 = state_13984;(statearr_14002[(12)] = inst_13977);
return statearr_14002;
})();var statearr_14003_14027 = state_13984__$1;(statearr_14003_14027[(2)] = null);
(statearr_14003_14027[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13985 === (10)))
{var inst_13952 = (state_13984[(2)]);var inst_13953 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13984__$1 = (function (){var statearr_14004 = state_13984;(statearr_14004[(13)] = inst_13952);
return statearr_14004;
})();var statearr_14005_14028 = state_13984__$1;(statearr_14005_14028[(2)] = inst_13953);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13984__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13985 === (8)))
{var inst_13966 = (state_13984[(2)]);var state_13984__$1 = state_13984;var statearr_14006_14029 = state_13984__$1;(statearr_14006_14029[(2)] = inst_13966);
(statearr_14006_14029[(1)] = (5));
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
});})(c__6844__auto___14014,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6829__auto__,c__6844__auto___14014,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_14010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14010[(0)] = state_machine__6830__auto__);
(statearr_14010[(1)] = (1));
return statearr_14010;
});
var state_machine__6830__auto____1 = (function (state_13984){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_13984);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e14011){if((e14011 instanceof Object))
{var ex__6833__auto__ = e14011;var statearr_14012_14030 = state_13984;(statearr_14012_14030[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13984);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14011;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14031 = state_13984;
state_13984 = G__14031;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_13984){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_13984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto___14014,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6846__auto__ = (function (){var statearr_14013 = f__6845__auto__.call(null);(statearr_14013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___14014);
return statearr_14013;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto___14014,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6844__auto___14139 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto___14139,out){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto___14139,out){
return (function (state_14115){var state_val_14116 = (state_14115[(1)]);if((state_val_14116 === (7)))
{var inst_14095 = (state_14115[(7)]);var inst_14094 = (state_14115[(8)]);var inst_14094__$1 = (state_14115[(2)]);var inst_14095__$1 = cljs.core.nth.call(null,inst_14094__$1,(0),null);var inst_14096 = cljs.core.nth.call(null,inst_14094__$1,(1),null);var inst_14097 = (inst_14095__$1 == null);var state_14115__$1 = (function (){var statearr_14117 = state_14115;(statearr_14117[(9)] = inst_14096);
(statearr_14117[(7)] = inst_14095__$1);
(statearr_14117[(8)] = inst_14094__$1);
return statearr_14117;
})();if(cljs.core.truth_(inst_14097))
{var statearr_14118_14140 = state_14115__$1;(statearr_14118_14140[(1)] = (8));
} else
{var statearr_14119_14141 = state_14115__$1;(statearr_14119_14141[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (1)))
{var inst_14086 = cljs.core.vec.call(null,chs);var inst_14087 = inst_14086;var state_14115__$1 = (function (){var statearr_14120 = state_14115;(statearr_14120[(10)] = inst_14087);
return statearr_14120;
})();var statearr_14121_14142 = state_14115__$1;(statearr_14121_14142[(2)] = null);
(statearr_14121_14142[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (4)))
{var inst_14087 = (state_14115[(10)]);var state_14115__$1 = state_14115;return cljs.core.async.ioc_alts_BANG_.call(null,state_14115__$1,(7),inst_14087);
} else
{if((state_val_14116 === (6)))
{var inst_14111 = (state_14115[(2)]);var state_14115__$1 = state_14115;var statearr_14122_14143 = state_14115__$1;(statearr_14122_14143[(2)] = inst_14111);
(statearr_14122_14143[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (3)))
{var inst_14113 = (state_14115[(2)]);var state_14115__$1 = state_14115;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14115__$1,inst_14113);
} else
{if((state_val_14116 === (2)))
{var inst_14087 = (state_14115[(10)]);var inst_14089 = cljs.core.count.call(null,inst_14087);var inst_14090 = (inst_14089 > (0));var state_14115__$1 = state_14115;if(cljs.core.truth_(inst_14090))
{var statearr_14124_14144 = state_14115__$1;(statearr_14124_14144[(1)] = (4));
} else
{var statearr_14125_14145 = state_14115__$1;(statearr_14125_14145[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (11)))
{var inst_14087 = (state_14115[(10)]);var inst_14104 = (state_14115[(2)]);var tmp14123 = inst_14087;var inst_14087__$1 = tmp14123;var state_14115__$1 = (function (){var statearr_14126 = state_14115;(statearr_14126[(11)] = inst_14104);
(statearr_14126[(10)] = inst_14087__$1);
return statearr_14126;
})();var statearr_14127_14146 = state_14115__$1;(statearr_14127_14146[(2)] = null);
(statearr_14127_14146[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (9)))
{var inst_14095 = (state_14115[(7)]);var state_14115__$1 = state_14115;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14115__$1,(11),out,inst_14095);
} else
{if((state_val_14116 === (5)))
{var inst_14109 = cljs.core.async.close_BANG_.call(null,out);var state_14115__$1 = state_14115;var statearr_14128_14147 = state_14115__$1;(statearr_14128_14147[(2)] = inst_14109);
(statearr_14128_14147[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (10)))
{var inst_14107 = (state_14115[(2)]);var state_14115__$1 = state_14115;var statearr_14129_14148 = state_14115__$1;(statearr_14129_14148[(2)] = inst_14107);
(statearr_14129_14148[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (8)))
{var inst_14096 = (state_14115[(9)]);var inst_14095 = (state_14115[(7)]);var inst_14087 = (state_14115[(10)]);var inst_14094 = (state_14115[(8)]);var inst_14099 = (function (){var c = inst_14096;var v = inst_14095;var vec__14092 = inst_14094;var cs = inst_14087;return ((function (c,v,vec__14092,cs,inst_14096,inst_14095,inst_14087,inst_14094,state_val_14116,c__6844__auto___14139,out){
return (function (p1__14032_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14032_SHARP_);
});
;})(c,v,vec__14092,cs,inst_14096,inst_14095,inst_14087,inst_14094,state_val_14116,c__6844__auto___14139,out))
})();var inst_14100 = cljs.core.filterv.call(null,inst_14099,inst_14087);var inst_14087__$1 = inst_14100;var state_14115__$1 = (function (){var statearr_14130 = state_14115;(statearr_14130[(10)] = inst_14087__$1);
return statearr_14130;
})();var statearr_14131_14149 = state_14115__$1;(statearr_14131_14149[(2)] = null);
(statearr_14131_14149[(1)] = (2));
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
});})(c__6844__auto___14139,out))
;return ((function (switch__6829__auto__,c__6844__auto___14139,out){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_14135 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14135[(0)] = state_machine__6830__auto__);
(statearr_14135[(1)] = (1));
return statearr_14135;
});
var state_machine__6830__auto____1 = (function (state_14115){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_14115);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e14136){if((e14136 instanceof Object))
{var ex__6833__auto__ = e14136;var statearr_14137_14150 = state_14115;(statearr_14137_14150[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14115);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14136;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14151 = state_14115;
state_14115 = G__14151;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_14115){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_14115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto___14139,out))
})();var state__6846__auto__ = (function (){var statearr_14138 = f__6845__auto__.call(null);(statearr_14138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___14139);
return statearr_14138;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto___14139,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6844__auto___14244 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto___14244,out){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto___14244,out){
return (function (state_14221){var state_val_14222 = (state_14221[(1)]);if((state_val_14222 === (7)))
{var inst_14203 = (state_14221[(7)]);var inst_14203__$1 = (state_14221[(2)]);var inst_14204 = (inst_14203__$1 == null);var inst_14205 = cljs.core.not.call(null,inst_14204);var state_14221__$1 = (function (){var statearr_14223 = state_14221;(statearr_14223[(7)] = inst_14203__$1);
return statearr_14223;
})();if(inst_14205)
{var statearr_14224_14245 = state_14221__$1;(statearr_14224_14245[(1)] = (8));
} else
{var statearr_14225_14246 = state_14221__$1;(statearr_14225_14246[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14222 === (1)))
{var inst_14198 = (0);var state_14221__$1 = (function (){var statearr_14226 = state_14221;(statearr_14226[(8)] = inst_14198);
return statearr_14226;
})();var statearr_14227_14247 = state_14221__$1;(statearr_14227_14247[(2)] = null);
(statearr_14227_14247[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14222 === (4)))
{var state_14221__$1 = state_14221;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14221__$1,(7),ch);
} else
{if((state_val_14222 === (6)))
{var inst_14216 = (state_14221[(2)]);var state_14221__$1 = state_14221;var statearr_14228_14248 = state_14221__$1;(statearr_14228_14248[(2)] = inst_14216);
(statearr_14228_14248[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14222 === (3)))
{var inst_14218 = (state_14221[(2)]);var inst_14219 = cljs.core.async.close_BANG_.call(null,out);var state_14221__$1 = (function (){var statearr_14229 = state_14221;(statearr_14229[(9)] = inst_14218);
return statearr_14229;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14221__$1,inst_14219);
} else
{if((state_val_14222 === (2)))
{var inst_14198 = (state_14221[(8)]);var inst_14200 = (inst_14198 < n);var state_14221__$1 = state_14221;if(cljs.core.truth_(inst_14200))
{var statearr_14230_14249 = state_14221__$1;(statearr_14230_14249[(1)] = (4));
} else
{var statearr_14231_14250 = state_14221__$1;(statearr_14231_14250[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14222 === (11)))
{var inst_14198 = (state_14221[(8)]);var inst_14208 = (state_14221[(2)]);var inst_14209 = (inst_14198 + (1));var inst_14198__$1 = inst_14209;var state_14221__$1 = (function (){var statearr_14232 = state_14221;(statearr_14232[(10)] = inst_14208);
(statearr_14232[(8)] = inst_14198__$1);
return statearr_14232;
})();var statearr_14233_14251 = state_14221__$1;(statearr_14233_14251[(2)] = null);
(statearr_14233_14251[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14222 === (9)))
{var state_14221__$1 = state_14221;var statearr_14234_14252 = state_14221__$1;(statearr_14234_14252[(2)] = null);
(statearr_14234_14252[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14222 === (5)))
{var state_14221__$1 = state_14221;var statearr_14235_14253 = state_14221__$1;(statearr_14235_14253[(2)] = null);
(statearr_14235_14253[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14222 === (10)))
{var inst_14213 = (state_14221[(2)]);var state_14221__$1 = state_14221;var statearr_14236_14254 = state_14221__$1;(statearr_14236_14254[(2)] = inst_14213);
(statearr_14236_14254[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14222 === (8)))
{var inst_14203 = (state_14221[(7)]);var state_14221__$1 = state_14221;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14221__$1,(11),out,inst_14203);
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
});})(c__6844__auto___14244,out))
;return ((function (switch__6829__auto__,c__6844__auto___14244,out){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_14240 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14240[(0)] = state_machine__6830__auto__);
(statearr_14240[(1)] = (1));
return statearr_14240;
});
var state_machine__6830__auto____1 = (function (state_14221){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_14221);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e14241){if((e14241 instanceof Object))
{var ex__6833__auto__ = e14241;var statearr_14242_14255 = state_14221;(statearr_14242_14255[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14221);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14241;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14256 = state_14221;
state_14221 = G__14256;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_14221){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_14221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto___14244,out))
})();var state__6846__auto__ = (function (){var statearr_14243 = f__6845__auto__.call(null);(statearr_14243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___14244);
return statearr_14243;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto___14244,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14264 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14264 = (function (ch,f,map_LT_,meta14265){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14265 = meta14265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14264.cljs$lang$type = true;
cljs.core.async.t14264.cljs$lang$ctorStr = "cljs.core.async/t14264";
cljs.core.async.t14264.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t14264");
});
cljs.core.async.t14264.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14264.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14264.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14264.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14267 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14267 = (function (fn1,_,meta14265,ch,f,map_LT_,meta14268){
this.fn1 = fn1;
this._ = _;
this.meta14265 = meta14265;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14268 = meta14268;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14267.cljs$lang$type = true;
cljs.core.async.t14267.cljs$lang$ctorStr = "cljs.core.async/t14267";
cljs.core.async.t14267.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t14267");
});})(___$1))
;
cljs.core.async.t14267.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14267.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14267.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14257_SHARP_){return f1.call(null,(((p1__14257_SHARP_ == null))?null:self__.f.call(null,p1__14257_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14267.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14269){var self__ = this;
var _14269__$1 = this;return self__.meta14268;
});})(___$1))
;
cljs.core.async.t14267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14269,meta14268__$1){var self__ = this;
var _14269__$1 = this;return (new cljs.core.async.t14267(self__.fn1,self__._,self__.meta14265,self__.ch,self__.f,self__.map_LT_,meta14268__$1));
});})(___$1))
;
cljs.core.async.__GT_t14267 = ((function (___$1){
return (function __GT_t14267(fn1__$1,___$2,meta14265__$1,ch__$2,f__$2,map_LT___$2,meta14268){return (new cljs.core.async.t14267(fn1__$1,___$2,meta14265__$1,ch__$2,f__$2,map_LT___$2,meta14268));
});})(___$1))
;
}
return (new cljs.core.async.t14267(fn1,___$1,self__.meta14265,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3627__auto__ = ret;if(cljs.core.truth_(and__3627__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3627__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14264.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14264.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14264.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14266){var self__ = this;
var _14266__$1 = this;return self__.meta14265;
});
cljs.core.async.t14264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14266,meta14265__$1){var self__ = this;
var _14266__$1 = this;return (new cljs.core.async.t14264(self__.ch,self__.f,self__.map_LT_,meta14265__$1));
});
cljs.core.async.__GT_t14264 = (function __GT_t14264(ch__$1,f__$1,map_LT___$1,meta14265){return (new cljs.core.async.t14264(ch__$1,f__$1,map_LT___$1,meta14265));
});
}
return (new cljs.core.async.t14264(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14273 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14273 = (function (ch,f,map_GT_,meta14274){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14274 = meta14274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14273.cljs$lang$type = true;
cljs.core.async.t14273.cljs$lang$ctorStr = "cljs.core.async/t14273";
cljs.core.async.t14273.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t14273");
});
cljs.core.async.t14273.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14273.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14273.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14273.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14273.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14273.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14275){var self__ = this;
var _14275__$1 = this;return self__.meta14274;
});
cljs.core.async.t14273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14275,meta14274__$1){var self__ = this;
var _14275__$1 = this;return (new cljs.core.async.t14273(self__.ch,self__.f,self__.map_GT_,meta14274__$1));
});
cljs.core.async.__GT_t14273 = (function __GT_t14273(ch__$1,f__$1,map_GT___$1,meta14274){return (new cljs.core.async.t14273(ch__$1,f__$1,map_GT___$1,meta14274));
});
}
return (new cljs.core.async.t14273(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14279 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14279 = (function (ch,p,filter_GT_,meta14280){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14280 = meta14280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14279.cljs$lang$type = true;
cljs.core.async.t14279.cljs$lang$ctorStr = "cljs.core.async/t14279";
cljs.core.async.t14279.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t14279");
});
cljs.core.async.t14279.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14279.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14279.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14279.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14279.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14279.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14279.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14281){var self__ = this;
var _14281__$1 = this;return self__.meta14280;
});
cljs.core.async.t14279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14281,meta14280__$1){var self__ = this;
var _14281__$1 = this;return (new cljs.core.async.t14279(self__.ch,self__.p,self__.filter_GT_,meta14280__$1));
});
cljs.core.async.__GT_t14279 = (function __GT_t14279(ch__$1,p__$1,filter_GT___$1,meta14280){return (new cljs.core.async.t14279(ch__$1,p__$1,filter_GT___$1,meta14280));
});
}
return (new cljs.core.async.t14279(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6844__auto___14364 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto___14364,out){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto___14364,out){
return (function (state_14343){var state_val_14344 = (state_14343[(1)]);if((state_val_14344 === (7)))
{var inst_14339 = (state_14343[(2)]);var state_14343__$1 = state_14343;var statearr_14345_14365 = state_14343__$1;(statearr_14345_14365[(2)] = inst_14339);
(statearr_14345_14365[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14344 === (1)))
{var state_14343__$1 = state_14343;var statearr_14346_14366 = state_14343__$1;(statearr_14346_14366[(2)] = null);
(statearr_14346_14366[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14344 === (4)))
{var inst_14325 = (state_14343[(7)]);var inst_14325__$1 = (state_14343[(2)]);var inst_14326 = (inst_14325__$1 == null);var state_14343__$1 = (function (){var statearr_14347 = state_14343;(statearr_14347[(7)] = inst_14325__$1);
return statearr_14347;
})();if(cljs.core.truth_(inst_14326))
{var statearr_14348_14367 = state_14343__$1;(statearr_14348_14367[(1)] = (5));
} else
{var statearr_14349_14368 = state_14343__$1;(statearr_14349_14368[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14344 === (6)))
{var inst_14325 = (state_14343[(7)]);var inst_14330 = p.call(null,inst_14325);var state_14343__$1 = state_14343;if(cljs.core.truth_(inst_14330))
{var statearr_14350_14369 = state_14343__$1;(statearr_14350_14369[(1)] = (8));
} else
{var statearr_14351_14370 = state_14343__$1;(statearr_14351_14370[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14344 === (3)))
{var inst_14341 = (state_14343[(2)]);var state_14343__$1 = state_14343;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14343__$1,inst_14341);
} else
{if((state_val_14344 === (2)))
{var state_14343__$1 = state_14343;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14343__$1,(4),ch);
} else
{if((state_val_14344 === (11)))
{var inst_14333 = (state_14343[(2)]);var state_14343__$1 = state_14343;var statearr_14352_14371 = state_14343__$1;(statearr_14352_14371[(2)] = inst_14333);
(statearr_14352_14371[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14344 === (9)))
{var state_14343__$1 = state_14343;var statearr_14353_14372 = state_14343__$1;(statearr_14353_14372[(2)] = null);
(statearr_14353_14372[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14344 === (5)))
{var inst_14328 = cljs.core.async.close_BANG_.call(null,out);var state_14343__$1 = state_14343;var statearr_14354_14373 = state_14343__$1;(statearr_14354_14373[(2)] = inst_14328);
(statearr_14354_14373[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14344 === (10)))
{var inst_14336 = (state_14343[(2)]);var state_14343__$1 = (function (){var statearr_14355 = state_14343;(statearr_14355[(8)] = inst_14336);
return statearr_14355;
})();var statearr_14356_14374 = state_14343__$1;(statearr_14356_14374[(2)] = null);
(statearr_14356_14374[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14344 === (8)))
{var inst_14325 = (state_14343[(7)]);var state_14343__$1 = state_14343;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14343__$1,(11),out,inst_14325);
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
});})(c__6844__auto___14364,out))
;return ((function (switch__6829__auto__,c__6844__auto___14364,out){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_14360 = [null,null,null,null,null,null,null,null,null];(statearr_14360[(0)] = state_machine__6830__auto__);
(statearr_14360[(1)] = (1));
return statearr_14360;
});
var state_machine__6830__auto____1 = (function (state_14343){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_14343);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e14361){if((e14361 instanceof Object))
{var ex__6833__auto__ = e14361;var statearr_14362_14375 = state_14343;(statearr_14362_14375[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14343);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14361;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14376 = state_14343;
state_14343 = G__14376;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_14343){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_14343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto___14364,out))
})();var state__6846__auto__ = (function (){var statearr_14363 = f__6845__auto__.call(null);(statearr_14363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___14364);
return statearr_14363;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto___14364,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6844__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto__){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto__){
return (function (state_14542){var state_val_14543 = (state_14542[(1)]);if((state_val_14543 === (7)))
{var inst_14538 = (state_14542[(2)]);var state_14542__$1 = state_14542;var statearr_14544_14585 = state_14542__$1;(statearr_14544_14585[(2)] = inst_14538);
(statearr_14544_14585[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14543 === (20)))
{var inst_14508 = (state_14542[(7)]);var inst_14519 = (state_14542[(2)]);var inst_14520 = cljs.core.next.call(null,inst_14508);var inst_14494 = inst_14520;var inst_14495 = null;var inst_14496 = (0);var inst_14497 = (0);var state_14542__$1 = (function (){var statearr_14545 = state_14542;(statearr_14545[(8)] = inst_14494);
(statearr_14545[(9)] = inst_14519);
(statearr_14545[(10)] = inst_14497);
(statearr_14545[(11)] = inst_14496);
(statearr_14545[(12)] = inst_14495);
return statearr_14545;
})();var statearr_14546_14586 = state_14542__$1;(statearr_14546_14586[(2)] = null);
(statearr_14546_14586[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14543 === (1)))
{var state_14542__$1 = state_14542;var statearr_14547_14587 = state_14542__$1;(statearr_14547_14587[(2)] = null);
(statearr_14547_14587[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14543 === (4)))
{var inst_14483 = (state_14542[(13)]);var inst_14483__$1 = (state_14542[(2)]);var inst_14484 = (inst_14483__$1 == null);var state_14542__$1 = (function (){var statearr_14548 = state_14542;(statearr_14548[(13)] = inst_14483__$1);
return statearr_14548;
})();if(cljs.core.truth_(inst_14484))
{var statearr_14549_14588 = state_14542__$1;(statearr_14549_14588[(1)] = (5));
} else
{var statearr_14550_14589 = state_14542__$1;(statearr_14550_14589[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14543 === (15)))
{var state_14542__$1 = state_14542;var statearr_14554_14590 = state_14542__$1;(statearr_14554_14590[(2)] = null);
(statearr_14554_14590[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14543 === (21)))
{var state_14542__$1 = state_14542;var statearr_14555_14591 = state_14542__$1;(statearr_14555_14591[(2)] = null);
(statearr_14555_14591[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14543 === (13)))
{var inst_14494 = (state_14542[(8)]);var inst_14497 = (state_14542[(10)]);var inst_14496 = (state_14542[(11)]);var inst_14495 = (state_14542[(12)]);var inst_14504 = (state_14542[(2)]);var inst_14505 = (inst_14497 + (1));var tmp14551 = inst_14494;var tmp14552 = inst_14496;var tmp14553 = inst_14495;var inst_14494__$1 = tmp14551;var inst_14495__$1 = tmp14553;var inst_14496__$1 = tmp14552;var inst_14497__$1 = inst_14505;var state_14542__$1 = (function (){var statearr_14556 = state_14542;(statearr_14556[(8)] = inst_14494__$1);
(statearr_14556[(10)] = inst_14497__$1);
(statearr_14556[(11)] = inst_14496__$1);
(statearr_14556[(14)] = inst_14504);
(statearr_14556[(12)] = inst_14495__$1);
return statearr_14556;
})();var statearr_14557_14592 = state_14542__$1;(statearr_14557_14592[(2)] = null);
(statearr_14557_14592[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14543 === (22)))
{var state_14542__$1 = state_14542;var statearr_14558_14593 = state_14542__$1;(statearr_14558_14593[(2)] = null);
(statearr_14558_14593[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14543 === (6)))
{var inst_14483 = (state_14542[(13)]);var inst_14492 = f.call(null,inst_14483);var inst_14493 = cljs.core.seq.call(null,inst_14492);var inst_14494 = inst_14493;var inst_14495 = null;var inst_14496 = (0);var inst_14497 = (0);var state_14542__$1 = (function (){var statearr_14559 = state_14542;(statearr_14559[(8)] = inst_14494);
(statearr_14559[(10)] = inst_14497);
(statearr_14559[(11)] = inst_14496);
(statearr_14559[(12)] = inst_14495);
return statearr_14559;
})();var statearr_14560_14594 = state_14542__$1;(statearr_14560_14594[(2)] = null);
(statearr_14560_14594[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14543 === (17)))
{var inst_14508 = (state_14542[(7)]);var inst_14512 = cljs.core.chunk_first.call(null,inst_14508);var inst_14513 = cljs.core.chunk_rest.call(null,inst_14508);var inst_14514 = cljs.core.count.call(null,inst_14512);var inst_14494 = inst_14513;var inst_14495 = inst_14512;var inst_14496 = inst_14514;var inst_14497 = (0);var state_14542__$1 = (function (){var statearr_14561 = state_14542;(statearr_14561[(8)] = inst_14494);
(statearr_14561[(10)] = inst_14497);
(statearr_14561[(11)] = inst_14496);
(statearr_14561[(12)] = inst_14495);
return statearr_14561;
})();var statearr_14562_14595 = state_14542__$1;(statearr_14562_14595[(2)] = null);
(statearr_14562_14595[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14543 === (3)))
{var inst_14540 = (state_14542[(2)]);var state_14542__$1 = state_14542;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14542__$1,inst_14540);
} else
{if((state_val_14543 === (12)))
{var inst_14528 = (state_14542[(2)]);var state_14542__$1 = state_14542;var statearr_14563_14596 = state_14542__$1;(statearr_14563_14596[(2)] = inst_14528);
(statearr_14563_14596[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14543 === (2)))
{var state_14542__$1 = state_14542;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14542__$1,(4),in$);
} else
{if((state_val_14543 === (23)))
{var inst_14536 = (state_14542[(2)]);var state_14542__$1 = state_14542;var statearr_14564_14597 = state_14542__$1;(statearr_14564_14597[(2)] = inst_14536);
(statearr_14564_14597[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14543 === (19)))
{var inst_14523 = (state_14542[(2)]);var state_14542__$1 = state_14542;var statearr_14565_14598 = state_14542__$1;(statearr_14565_14598[(2)] = inst_14523);
(statearr_14565_14598[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14543 === (11)))
{var inst_14494 = (state_14542[(8)]);var inst_14508 = (state_14542[(7)]);var inst_14508__$1 = cljs.core.seq.call(null,inst_14494);var state_14542__$1 = (function (){var statearr_14566 = state_14542;(statearr_14566[(7)] = inst_14508__$1);
return statearr_14566;
})();if(inst_14508__$1)
{var statearr_14567_14599 = state_14542__$1;(statearr_14567_14599[(1)] = (14));
} else
{var statearr_14568_14600 = state_14542__$1;(statearr_14568_14600[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14543 === (9)))
{var inst_14530 = (state_14542[(2)]);var inst_14531 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14542__$1 = (function (){var statearr_14569 = state_14542;(statearr_14569[(15)] = inst_14530);
return statearr_14569;
})();if(cljs.core.truth_(inst_14531))
{var statearr_14570_14601 = state_14542__$1;(statearr_14570_14601[(1)] = (21));
} else
{var statearr_14571_14602 = state_14542__$1;(statearr_14571_14602[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14543 === (5)))
{var inst_14486 = cljs.core.async.close_BANG_.call(null,out);var state_14542__$1 = state_14542;var statearr_14572_14603 = state_14542__$1;(statearr_14572_14603[(2)] = inst_14486);
(statearr_14572_14603[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14543 === (14)))
{var inst_14508 = (state_14542[(7)]);var inst_14510 = cljs.core.chunked_seq_QMARK_.call(null,inst_14508);var state_14542__$1 = state_14542;if(inst_14510)
{var statearr_14573_14604 = state_14542__$1;(statearr_14573_14604[(1)] = (17));
} else
{var statearr_14574_14605 = state_14542__$1;(statearr_14574_14605[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14543 === (16)))
{var inst_14526 = (state_14542[(2)]);var state_14542__$1 = state_14542;var statearr_14575_14606 = state_14542__$1;(statearr_14575_14606[(2)] = inst_14526);
(statearr_14575_14606[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14543 === (10)))
{var inst_14497 = (state_14542[(10)]);var inst_14495 = (state_14542[(12)]);var inst_14502 = cljs.core._nth.call(null,inst_14495,inst_14497);var state_14542__$1 = state_14542;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14542__$1,(13),out,inst_14502);
} else
{if((state_val_14543 === (18)))
{var inst_14508 = (state_14542[(7)]);var inst_14517 = cljs.core.first.call(null,inst_14508);var state_14542__$1 = state_14542;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14542__$1,(20),out,inst_14517);
} else
{if((state_val_14543 === (8)))
{var inst_14497 = (state_14542[(10)]);var inst_14496 = (state_14542[(11)]);var inst_14499 = (inst_14497 < inst_14496);var inst_14500 = inst_14499;var state_14542__$1 = state_14542;if(cljs.core.truth_(inst_14500))
{var statearr_14576_14607 = state_14542__$1;(statearr_14576_14607[(1)] = (10));
} else
{var statearr_14577_14608 = state_14542__$1;(statearr_14577_14608[(1)] = (11));
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
});})(c__6844__auto__))
;return ((function (switch__6829__auto__,c__6844__auto__){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_14581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14581[(0)] = state_machine__6830__auto__);
(statearr_14581[(1)] = (1));
return statearr_14581;
});
var state_machine__6830__auto____1 = (function (state_14542){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_14542);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e14582){if((e14582 instanceof Object))
{var ex__6833__auto__ = e14582;var statearr_14583_14609 = state_14542;(statearr_14583_14609[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14542);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14582;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14610 = state_14542;
state_14542 = G__14610;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_14542){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_14542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto__))
})();var state__6846__auto__ = (function (){var statearr_14584 = f__6845__auto__.call(null);(statearr_14584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto__);
return statearr_14584;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto__))
);
return c__6844__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6844__auto___14707 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto___14707,out){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto___14707,out){
return (function (state_14682){var state_val_14683 = (state_14682[(1)]);if((state_val_14683 === (7)))
{var inst_14677 = (state_14682[(2)]);var state_14682__$1 = state_14682;var statearr_14684_14708 = state_14682__$1;(statearr_14684_14708[(2)] = inst_14677);
(statearr_14684_14708[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14683 === (1)))
{var inst_14659 = null;var state_14682__$1 = (function (){var statearr_14685 = state_14682;(statearr_14685[(7)] = inst_14659);
return statearr_14685;
})();var statearr_14686_14709 = state_14682__$1;(statearr_14686_14709[(2)] = null);
(statearr_14686_14709[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14683 === (4)))
{var inst_14662 = (state_14682[(8)]);var inst_14662__$1 = (state_14682[(2)]);var inst_14663 = (inst_14662__$1 == null);var inst_14664 = cljs.core.not.call(null,inst_14663);var state_14682__$1 = (function (){var statearr_14687 = state_14682;(statearr_14687[(8)] = inst_14662__$1);
return statearr_14687;
})();if(inst_14664)
{var statearr_14688_14710 = state_14682__$1;(statearr_14688_14710[(1)] = (5));
} else
{var statearr_14689_14711 = state_14682__$1;(statearr_14689_14711[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14683 === (6)))
{var state_14682__$1 = state_14682;var statearr_14690_14712 = state_14682__$1;(statearr_14690_14712[(2)] = null);
(statearr_14690_14712[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14683 === (3)))
{var inst_14679 = (state_14682[(2)]);var inst_14680 = cljs.core.async.close_BANG_.call(null,out);var state_14682__$1 = (function (){var statearr_14691 = state_14682;(statearr_14691[(9)] = inst_14679);
return statearr_14691;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14682__$1,inst_14680);
} else
{if((state_val_14683 === (2)))
{var state_14682__$1 = state_14682;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14682__$1,(4),ch);
} else
{if((state_val_14683 === (11)))
{var inst_14662 = (state_14682[(8)]);var inst_14671 = (state_14682[(2)]);var inst_14659 = inst_14662;var state_14682__$1 = (function (){var statearr_14692 = state_14682;(statearr_14692[(7)] = inst_14659);
(statearr_14692[(10)] = inst_14671);
return statearr_14692;
})();var statearr_14693_14713 = state_14682__$1;(statearr_14693_14713[(2)] = null);
(statearr_14693_14713[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14683 === (9)))
{var inst_14662 = (state_14682[(8)]);var state_14682__$1 = state_14682;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14682__$1,(11),out,inst_14662);
} else
{if((state_val_14683 === (5)))
{var inst_14662 = (state_14682[(8)]);var inst_14659 = (state_14682[(7)]);var inst_14666 = cljs.core._EQ_.call(null,inst_14662,inst_14659);var state_14682__$1 = state_14682;if(inst_14666)
{var statearr_14695_14714 = state_14682__$1;(statearr_14695_14714[(1)] = (8));
} else
{var statearr_14696_14715 = state_14682__$1;(statearr_14696_14715[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14683 === (10)))
{var inst_14674 = (state_14682[(2)]);var state_14682__$1 = state_14682;var statearr_14697_14716 = state_14682__$1;(statearr_14697_14716[(2)] = inst_14674);
(statearr_14697_14716[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14683 === (8)))
{var inst_14659 = (state_14682[(7)]);var tmp14694 = inst_14659;var inst_14659__$1 = tmp14694;var state_14682__$1 = (function (){var statearr_14698 = state_14682;(statearr_14698[(7)] = inst_14659__$1);
return statearr_14698;
})();var statearr_14699_14717 = state_14682__$1;(statearr_14699_14717[(2)] = null);
(statearr_14699_14717[(1)] = (2));
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
});})(c__6844__auto___14707,out))
;return ((function (switch__6829__auto__,c__6844__auto___14707,out){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_14703 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14703[(0)] = state_machine__6830__auto__);
(statearr_14703[(1)] = (1));
return statearr_14703;
});
var state_machine__6830__auto____1 = (function (state_14682){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_14682);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e14704){if((e14704 instanceof Object))
{var ex__6833__auto__ = e14704;var statearr_14705_14718 = state_14682;(statearr_14705_14718[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14682);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14704;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14719 = state_14682;
state_14682 = G__14719;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_14682){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_14682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto___14707,out))
})();var state__6846__auto__ = (function (){var statearr_14706 = f__6845__auto__.call(null);(statearr_14706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___14707);
return statearr_14706;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto___14707,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6844__auto___14854 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto___14854,out){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto___14854,out){
return (function (state_14824){var state_val_14825 = (state_14824[(1)]);if((state_val_14825 === (7)))
{var inst_14820 = (state_14824[(2)]);var state_14824__$1 = state_14824;var statearr_14826_14855 = state_14824__$1;(statearr_14826_14855[(2)] = inst_14820);
(statearr_14826_14855[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14825 === (1)))
{var inst_14787 = (new Array(n));var inst_14788 = inst_14787;var inst_14789 = (0);var state_14824__$1 = (function (){var statearr_14827 = state_14824;(statearr_14827[(7)] = inst_14789);
(statearr_14827[(8)] = inst_14788);
return statearr_14827;
})();var statearr_14828_14856 = state_14824__$1;(statearr_14828_14856[(2)] = null);
(statearr_14828_14856[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14825 === (4)))
{var inst_14792 = (state_14824[(9)]);var inst_14792__$1 = (state_14824[(2)]);var inst_14793 = (inst_14792__$1 == null);var inst_14794 = cljs.core.not.call(null,inst_14793);var state_14824__$1 = (function (){var statearr_14829 = state_14824;(statearr_14829[(9)] = inst_14792__$1);
return statearr_14829;
})();if(inst_14794)
{var statearr_14830_14857 = state_14824__$1;(statearr_14830_14857[(1)] = (5));
} else
{var statearr_14831_14858 = state_14824__$1;(statearr_14831_14858[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14825 === (15)))
{var inst_14814 = (state_14824[(2)]);var state_14824__$1 = state_14824;var statearr_14832_14859 = state_14824__$1;(statearr_14832_14859[(2)] = inst_14814);
(statearr_14832_14859[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14825 === (13)))
{var state_14824__$1 = state_14824;var statearr_14833_14860 = state_14824__$1;(statearr_14833_14860[(2)] = null);
(statearr_14833_14860[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14825 === (6)))
{var inst_14789 = (state_14824[(7)]);var inst_14810 = (inst_14789 > (0));var state_14824__$1 = state_14824;if(cljs.core.truth_(inst_14810))
{var statearr_14834_14861 = state_14824__$1;(statearr_14834_14861[(1)] = (12));
} else
{var statearr_14835_14862 = state_14824__$1;(statearr_14835_14862[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14825 === (3)))
{var inst_14822 = (state_14824[(2)]);var state_14824__$1 = state_14824;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14824__$1,inst_14822);
} else
{if((state_val_14825 === (12)))
{var inst_14788 = (state_14824[(8)]);var inst_14812 = cljs.core.vec.call(null,inst_14788);var state_14824__$1 = state_14824;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14824__$1,(15),out,inst_14812);
} else
{if((state_val_14825 === (2)))
{var state_14824__$1 = state_14824;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14824__$1,(4),ch);
} else
{if((state_val_14825 === (11)))
{var inst_14804 = (state_14824[(2)]);var inst_14805 = (new Array(n));var inst_14788 = inst_14805;var inst_14789 = (0);var state_14824__$1 = (function (){var statearr_14836 = state_14824;(statearr_14836[(10)] = inst_14804);
(statearr_14836[(7)] = inst_14789);
(statearr_14836[(8)] = inst_14788);
return statearr_14836;
})();var statearr_14837_14863 = state_14824__$1;(statearr_14837_14863[(2)] = null);
(statearr_14837_14863[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14825 === (9)))
{var inst_14788 = (state_14824[(8)]);var inst_14802 = cljs.core.vec.call(null,inst_14788);var state_14824__$1 = state_14824;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14824__$1,(11),out,inst_14802);
} else
{if((state_val_14825 === (5)))
{var inst_14792 = (state_14824[(9)]);var inst_14797 = (state_14824[(11)]);var inst_14789 = (state_14824[(7)]);var inst_14788 = (state_14824[(8)]);var inst_14796 = (inst_14788[inst_14789] = inst_14792);var inst_14797__$1 = (inst_14789 + (1));var inst_14798 = (inst_14797__$1 < n);var state_14824__$1 = (function (){var statearr_14838 = state_14824;(statearr_14838[(11)] = inst_14797__$1);
(statearr_14838[(12)] = inst_14796);
return statearr_14838;
})();if(cljs.core.truth_(inst_14798))
{var statearr_14839_14864 = state_14824__$1;(statearr_14839_14864[(1)] = (8));
} else
{var statearr_14840_14865 = state_14824__$1;(statearr_14840_14865[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14825 === (14)))
{var inst_14817 = (state_14824[(2)]);var inst_14818 = cljs.core.async.close_BANG_.call(null,out);var state_14824__$1 = (function (){var statearr_14842 = state_14824;(statearr_14842[(13)] = inst_14817);
return statearr_14842;
})();var statearr_14843_14866 = state_14824__$1;(statearr_14843_14866[(2)] = inst_14818);
(statearr_14843_14866[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14825 === (10)))
{var inst_14808 = (state_14824[(2)]);var state_14824__$1 = state_14824;var statearr_14844_14867 = state_14824__$1;(statearr_14844_14867[(2)] = inst_14808);
(statearr_14844_14867[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14825 === (8)))
{var inst_14797 = (state_14824[(11)]);var inst_14788 = (state_14824[(8)]);var tmp14841 = inst_14788;var inst_14788__$1 = tmp14841;var inst_14789 = inst_14797;var state_14824__$1 = (function (){var statearr_14845 = state_14824;(statearr_14845[(7)] = inst_14789);
(statearr_14845[(8)] = inst_14788__$1);
return statearr_14845;
})();var statearr_14846_14868 = state_14824__$1;(statearr_14846_14868[(2)] = null);
(statearr_14846_14868[(1)] = (2));
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
});})(c__6844__auto___14854,out))
;return ((function (switch__6829__auto__,c__6844__auto___14854,out){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_14850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14850[(0)] = state_machine__6830__auto__);
(statearr_14850[(1)] = (1));
return statearr_14850;
});
var state_machine__6830__auto____1 = (function (state_14824){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_14824);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e14851){if((e14851 instanceof Object))
{var ex__6833__auto__ = e14851;var statearr_14852_14869 = state_14824;(statearr_14852_14869[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14824);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14851;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14870 = state_14824;
state_14824 = G__14870;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_14824){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_14824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto___14854,out))
})();var state__6846__auto__ = (function (){var statearr_14853 = f__6845__auto__.call(null);(statearr_14853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___14854);
return statearr_14853;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto___14854,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6844__auto___15013 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6844__auto___15013,out){
return (function (){var f__6845__auto__ = (function (){var switch__6829__auto__ = ((function (c__6844__auto___15013,out){
return (function (state_14983){var state_val_14984 = (state_14983[(1)]);if((state_val_14984 === (7)))
{var inst_14979 = (state_14983[(2)]);var state_14983__$1 = state_14983;var statearr_14985_15014 = state_14983__$1;(statearr_14985_15014[(2)] = inst_14979);
(statearr_14985_15014[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14984 === (1)))
{var inst_14942 = [];var inst_14943 = inst_14942;var inst_14944 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14983__$1 = (function (){var statearr_14986 = state_14983;(statearr_14986[(7)] = inst_14943);
(statearr_14986[(8)] = inst_14944);
return statearr_14986;
})();var statearr_14987_15015 = state_14983__$1;(statearr_14987_15015[(2)] = null);
(statearr_14987_15015[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14984 === (4)))
{var inst_14947 = (state_14983[(9)]);var inst_14947__$1 = (state_14983[(2)]);var inst_14948 = (inst_14947__$1 == null);var inst_14949 = cljs.core.not.call(null,inst_14948);var state_14983__$1 = (function (){var statearr_14988 = state_14983;(statearr_14988[(9)] = inst_14947__$1);
return statearr_14988;
})();if(inst_14949)
{var statearr_14989_15016 = state_14983__$1;(statearr_14989_15016[(1)] = (5));
} else
{var statearr_14990_15017 = state_14983__$1;(statearr_14990_15017[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14984 === (15)))
{var inst_14973 = (state_14983[(2)]);var state_14983__$1 = state_14983;var statearr_14991_15018 = state_14983__$1;(statearr_14991_15018[(2)] = inst_14973);
(statearr_14991_15018[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14984 === (13)))
{var state_14983__$1 = state_14983;var statearr_14992_15019 = state_14983__$1;(statearr_14992_15019[(2)] = null);
(statearr_14992_15019[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14984 === (6)))
{var inst_14943 = (state_14983[(7)]);var inst_14968 = inst_14943.length;var inst_14969 = (inst_14968 > (0));var state_14983__$1 = state_14983;if(cljs.core.truth_(inst_14969))
{var statearr_14993_15020 = state_14983__$1;(statearr_14993_15020[(1)] = (12));
} else
{var statearr_14994_15021 = state_14983__$1;(statearr_14994_15021[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14984 === (3)))
{var inst_14981 = (state_14983[(2)]);var state_14983__$1 = state_14983;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14983__$1,inst_14981);
} else
{if((state_val_14984 === (12)))
{var inst_14943 = (state_14983[(7)]);var inst_14971 = cljs.core.vec.call(null,inst_14943);var state_14983__$1 = state_14983;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14983__$1,(15),out,inst_14971);
} else
{if((state_val_14984 === (2)))
{var state_14983__$1 = state_14983;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14983__$1,(4),ch);
} else
{if((state_val_14984 === (11)))
{var inst_14947 = (state_14983[(9)]);var inst_14951 = (state_14983[(10)]);var inst_14961 = (state_14983[(2)]);var inst_14962 = [];var inst_14963 = inst_14962.push(inst_14947);var inst_14943 = inst_14962;var inst_14944 = inst_14951;var state_14983__$1 = (function (){var statearr_14995 = state_14983;(statearr_14995[(7)] = inst_14943);
(statearr_14995[(11)] = inst_14963);
(statearr_14995[(8)] = inst_14944);
(statearr_14995[(12)] = inst_14961);
return statearr_14995;
})();var statearr_14996_15022 = state_14983__$1;(statearr_14996_15022[(2)] = null);
(statearr_14996_15022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14984 === (9)))
{var inst_14943 = (state_14983[(7)]);var inst_14959 = cljs.core.vec.call(null,inst_14943);var state_14983__$1 = state_14983;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14983__$1,(11),out,inst_14959);
} else
{if((state_val_14984 === (5)))
{var inst_14947 = (state_14983[(9)]);var inst_14951 = (state_14983[(10)]);var inst_14944 = (state_14983[(8)]);var inst_14951__$1 = f.call(null,inst_14947);var inst_14952 = cljs.core._EQ_.call(null,inst_14951__$1,inst_14944);var inst_14953 = cljs.core.keyword_identical_QMARK_.call(null,inst_14944,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14954 = (inst_14952) || (inst_14953);var state_14983__$1 = (function (){var statearr_14997 = state_14983;(statearr_14997[(10)] = inst_14951__$1);
return statearr_14997;
})();if(cljs.core.truth_(inst_14954))
{var statearr_14998_15023 = state_14983__$1;(statearr_14998_15023[(1)] = (8));
} else
{var statearr_14999_15024 = state_14983__$1;(statearr_14999_15024[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14984 === (14)))
{var inst_14976 = (state_14983[(2)]);var inst_14977 = cljs.core.async.close_BANG_.call(null,out);var state_14983__$1 = (function (){var statearr_15001 = state_14983;(statearr_15001[(13)] = inst_14976);
return statearr_15001;
})();var statearr_15002_15025 = state_14983__$1;(statearr_15002_15025[(2)] = inst_14977);
(statearr_15002_15025[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14984 === (10)))
{var inst_14966 = (state_14983[(2)]);var state_14983__$1 = state_14983;var statearr_15003_15026 = state_14983__$1;(statearr_15003_15026[(2)] = inst_14966);
(statearr_15003_15026[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14984 === (8)))
{var inst_14947 = (state_14983[(9)]);var inst_14943 = (state_14983[(7)]);var inst_14951 = (state_14983[(10)]);var inst_14956 = inst_14943.push(inst_14947);var tmp15000 = inst_14943;var inst_14943__$1 = tmp15000;var inst_14944 = inst_14951;var state_14983__$1 = (function (){var statearr_15004 = state_14983;(statearr_15004[(7)] = inst_14943__$1);
(statearr_15004[(8)] = inst_14944);
(statearr_15004[(14)] = inst_14956);
return statearr_15004;
})();var statearr_15005_15027 = state_14983__$1;(statearr_15005_15027[(2)] = null);
(statearr_15005_15027[(1)] = (2));
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
});})(c__6844__auto___15013,out))
;return ((function (switch__6829__auto__,c__6844__auto___15013,out){
return (function() {
var state_machine__6830__auto__ = null;
var state_machine__6830__auto____0 = (function (){var statearr_15009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15009[(0)] = state_machine__6830__auto__);
(statearr_15009[(1)] = (1));
return statearr_15009;
});
var state_machine__6830__auto____1 = (function (state_14983){while(true){
var ret_value__6831__auto__ = (function (){try{while(true){
var result__6832__auto__ = switch__6829__auto__.call(null,state_14983);if(cljs.core.keyword_identical_QMARK_.call(null,result__6832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6832__auto__;
}
break;
}
}catch (e15010){if((e15010 instanceof Object))
{var ex__6833__auto__ = e15010;var statearr_15011_15028 = state_14983;(statearr_15011_15028[(5)] = ex__6833__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14983);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15010;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15029 = state_14983;
state_14983 = G__15029;
continue;
}
} else
{return ret_value__6831__auto__;
}
break;
}
});
state_machine__6830__auto__ = function(state_14983){
switch(arguments.length){
case 0:
return state_machine__6830__auto____0.call(this);
case 1:
return state_machine__6830__auto____1.call(this,state_14983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6830__auto____0;
state_machine__6830__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6830__auto____1;
return state_machine__6830__auto__;
})()
;})(switch__6829__auto__,c__6844__auto___15013,out))
})();var state__6846__auto__ = (function (){var statearr_15012 = f__6845__auto__.call(null);(statearr_15012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6844__auto___15013);
return statearr_15012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6846__auto__);
});})(c__6844__auto___15013,out))
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