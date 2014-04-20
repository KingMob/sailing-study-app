// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10454 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10454 = (function (f,fn_handler,meta10455){
this.f = f;
this.fn_handler = fn_handler;
this.meta10455 = meta10455;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10454.cljs$lang$type = true;
cljs.core.async.t10454.cljs$lang$ctorStr = "cljs.core.async/t10454";
cljs.core.async.t10454.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10454");
});
cljs.core.async.t10454.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10454.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10454.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10456){var self__ = this;
var _10456__$1 = this;return self__.meta10455;
});
cljs.core.async.t10454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10456,meta10455__$1){var self__ = this;
var _10456__$1 = this;return (new cljs.core.async.t10454(self__.f,self__.fn_handler,meta10455__$1));
});
cljs.core.async.__GT_t10454 = (function __GT_t10454(f__$1,fn_handler__$1,meta10455){return (new cljs.core.async.t10454(f__$1,fn_handler__$1,meta10455));
});
}
return (new cljs.core.async.t10454(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10458 = buff;if(G__10458)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__10458.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10458.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10458);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10458);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
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
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
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
{var val_10459 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10459);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10459);
}));
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
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3431__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___10460 = n;var x_10461 = 0;while(true){
if((x_10461 < n__4291__auto___10460))
{(a[x_10461] = 0);
{
var G__10462 = (x_10461 + 1);
x_10461 = G__10462;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10463 = (i + 1);
i = G__10463;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10467 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10467 = (function (flag,alt_flag,meta10468){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10468 = meta10468;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10467.cljs$lang$type = true;
cljs.core.async.t10467.cljs$lang$ctorStr = "cljs.core.async/t10467";
cljs.core.async.t10467.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10467");
});
cljs.core.async.t10467.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10467.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10467.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10469){var self__ = this;
var _10469__$1 = this;return self__.meta10468;
});
cljs.core.async.t10467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10469,meta10468__$1){var self__ = this;
var _10469__$1 = this;return (new cljs.core.async.t10467(self__.flag,self__.alt_flag,meta10468__$1));
});
cljs.core.async.__GT_t10467 = (function __GT_t10467(flag__$1,alt_flag__$1,meta10468){return (new cljs.core.async.t10467(flag__$1,alt_flag__$1,meta10468));
});
}
return (new cljs.core.async.t10467(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10473 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10473 = (function (cb,flag,alt_handler,meta10474){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10474 = meta10474;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10473.cljs$lang$type = true;
cljs.core.async.t10473.cljs$lang$ctorStr = "cljs.core.async/t10473";
cljs.core.async.t10473.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10473");
});
cljs.core.async.t10473.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10473.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10473.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10475){var self__ = this;
var _10475__$1 = this;return self__.meta10474;
});
cljs.core.async.t10473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10475,meta10474__$1){var self__ = this;
var _10475__$1 = this;return (new cljs.core.async.t10473(self__.cb,self__.flag,self__.alt_handler,meta10474__$1));
});
cljs.core.async.__GT_t10473 = (function __GT_t10473(cb__$1,flag__$1,alt_handler__$1,meta10474){return (new cljs.core.async.t10473(cb__$1,flag__$1,alt_handler__$1,meta10474));
});
}
return (new cljs.core.async.t10473(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10476_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10476_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10477 = (i + 1);
i = G__10477;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
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
var alts_BANG___delegate = function (ports,p__10478){var map__10480 = p__10478;var map__10480__$1 = ((cljs.core.seq_QMARK_.call(null,map__10480))?cljs.core.apply.call(null,cljs.core.hash_map,map__10480):map__10480);var opts = map__10480__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10478 = null;if (arguments.length > 1) {
  p__10478 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10478);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10481){
var ports = cljs.core.first(arglist__10481);
var p__10478 = cljs.core.rest(arglist__10481);
return alts_BANG___delegate(ports,p__10478);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10489 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10489 = (function (ch,f,map_LT_,meta10490){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10490 = meta10490;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10489.cljs$lang$type = true;
cljs.core.async.t10489.cljs$lang$ctorStr = "cljs.core.async/t10489";
cljs.core.async.t10489.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10489");
});
cljs.core.async.t10489.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10489.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10489.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10489.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10492 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10492 = (function (fn1,_,meta10490,ch,f,map_LT_,meta10493){
this.fn1 = fn1;
this._ = _;
this.meta10490 = meta10490;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10493 = meta10493;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10492.cljs$lang$type = true;
cljs.core.async.t10492.cljs$lang$ctorStr = "cljs.core.async/t10492";
cljs.core.async.t10492.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10492");
});
cljs.core.async.t10492.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10492.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10482_SHARP_){return f1.call(null,(((p1__10482_SHARP_ == null))?null:self__.f.call(null,p1__10482_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10494){var self__ = this;
var _10494__$1 = this;return self__.meta10493;
});
cljs.core.async.t10492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10494,meta10493__$1){var self__ = this;
var _10494__$1 = this;return (new cljs.core.async.t10492(self__.fn1,self__._,self__.meta10490,self__.ch,self__.f,self__.map_LT_,meta10493__$1));
});
cljs.core.async.__GT_t10492 = (function __GT_t10492(fn1__$1,___$2,meta10490__$1,ch__$2,f__$2,map_LT___$2,meta10493){return (new cljs.core.async.t10492(fn1__$1,___$2,meta10490__$1,ch__$2,f__$2,map_LT___$2,meta10493));
});
}
return (new cljs.core.async.t10492(fn1,___$1,self__.meta10490,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10489.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10489.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10491){var self__ = this;
var _10491__$1 = this;return self__.meta10490;
});
cljs.core.async.t10489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10491,meta10490__$1){var self__ = this;
var _10491__$1 = this;return (new cljs.core.async.t10489(self__.ch,self__.f,self__.map_LT_,meta10490__$1));
});
cljs.core.async.__GT_t10489 = (function __GT_t10489(ch__$1,f__$1,map_LT___$1,meta10490){return (new cljs.core.async.t10489(ch__$1,f__$1,map_LT___$1,meta10490));
});
}
return (new cljs.core.async.t10489(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10498 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10498 = (function (ch,f,map_GT_,meta10499){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10499 = meta10499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10498.cljs$lang$type = true;
cljs.core.async.t10498.cljs$lang$ctorStr = "cljs.core.async/t10498";
cljs.core.async.t10498.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10498");
});
cljs.core.async.t10498.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10498.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10498.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10498.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10498.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10498.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10500){var self__ = this;
var _10500__$1 = this;return self__.meta10499;
});
cljs.core.async.t10498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10500,meta10499__$1){var self__ = this;
var _10500__$1 = this;return (new cljs.core.async.t10498(self__.ch,self__.f,self__.map_GT_,meta10499__$1));
});
cljs.core.async.__GT_t10498 = (function __GT_t10498(ch__$1,f__$1,map_GT___$1,meta10499){return (new cljs.core.async.t10498(ch__$1,f__$1,map_GT___$1,meta10499));
});
}
return (new cljs.core.async.t10498(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10504 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10504 = (function (ch,p,filter_GT_,meta10505){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10505 = meta10505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10504.cljs$lang$type = true;
cljs.core.async.t10504.cljs$lang$ctorStr = "cljs.core.async/t10504";
cljs.core.async.t10504.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10504");
});
cljs.core.async.t10504.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10504.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10504.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10504.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10504.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10504.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10506){var self__ = this;
var _10506__$1 = this;return self__.meta10505;
});
cljs.core.async.t10504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10506,meta10505__$1){var self__ = this;
var _10506__$1 = this;return (new cljs.core.async.t10504(self__.ch,self__.p,self__.filter_GT_,meta10505__$1));
});
cljs.core.async.__GT_t10504 = (function __GT_t10504(ch__$1,p__$1,filter_GT___$1,meta10505){return (new cljs.core.async.t10504(ch__$1,p__$1,filter_GT___$1,meta10505));
});
}
return (new cljs.core.async.t10504(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8068__auto___10589 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8069__auto__ = (function (){var switch__8053__auto__ = (function (state_10568){var state_val_10569 = (state_10568[1]);if((state_val_10569 === 1))
{var state_10568__$1 = state_10568;var statearr_10570_10590 = state_10568__$1;(statearr_10570_10590[2] = null);
(statearr_10570_10590[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10569 === 2))
{var state_10568__$1 = state_10568;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10568__$1,4,ch);
} else
{if((state_val_10569 === 3))
{var inst_10566 = (state_10568[2]);var state_10568__$1 = state_10568;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10568__$1,inst_10566);
} else
{if((state_val_10569 === 4))
{var inst_10550 = (state_10568[7]);var inst_10550__$1 = (state_10568[2]);var inst_10551 = (inst_10550__$1 == null);var state_10568__$1 = (function (){var statearr_10571 = state_10568;(statearr_10571[7] = inst_10550__$1);
return statearr_10571;
})();if(cljs.core.truth_(inst_10551))
{var statearr_10572_10591 = state_10568__$1;(statearr_10572_10591[1] = 5);
} else
{var statearr_10573_10592 = state_10568__$1;(statearr_10573_10592[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10569 === 5))
{var inst_10553 = cljs.core.async.close_BANG_.call(null,out);var state_10568__$1 = state_10568;var statearr_10574_10593 = state_10568__$1;(statearr_10574_10593[2] = inst_10553);
(statearr_10574_10593[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10569 === 6))
{var inst_10550 = (state_10568[7]);var inst_10555 = p.call(null,inst_10550);var state_10568__$1 = state_10568;if(cljs.core.truth_(inst_10555))
{var statearr_10575_10594 = state_10568__$1;(statearr_10575_10594[1] = 8);
} else
{var statearr_10576_10595 = state_10568__$1;(statearr_10576_10595[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10569 === 7))
{var inst_10564 = (state_10568[2]);var state_10568__$1 = state_10568;var statearr_10577_10596 = state_10568__$1;(statearr_10577_10596[2] = inst_10564);
(statearr_10577_10596[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10569 === 8))
{var inst_10550 = (state_10568[7]);var state_10568__$1 = state_10568;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10568__$1,11,out,inst_10550);
} else
{if((state_val_10569 === 9))
{var state_10568__$1 = state_10568;var statearr_10578_10597 = state_10568__$1;(statearr_10578_10597[2] = null);
(statearr_10578_10597[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10569 === 10))
{var inst_10561 = (state_10568[2]);var state_10568__$1 = (function (){var statearr_10579 = state_10568;(statearr_10579[8] = inst_10561);
return statearr_10579;
})();var statearr_10580_10598 = state_10568__$1;(statearr_10580_10598[2] = null);
(statearr_10580_10598[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10569 === 11))
{var inst_10558 = (state_10568[2]);var state_10568__$1 = state_10568;var statearr_10581_10599 = state_10568__$1;(statearr_10581_10599[2] = inst_10558);
(statearr_10581_10599[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__8053__auto__){
return (function() {
var state_machine__8054__auto__ = null;
var state_machine__8054__auto____0 = (function (){var statearr_10585 = [null,null,null,null,null,null,null,null,null];(statearr_10585[0] = state_machine__8054__auto__);
(statearr_10585[1] = 1);
return statearr_10585;
});
var state_machine__8054__auto____1 = (function (state_10568){while(true){
var ret_value__8055__auto__ = (function (){try{while(true){
var result__8056__auto__ = switch__8053__auto__.call(null,state_10568);if(cljs.core.keyword_identical_QMARK_.call(null,result__8056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8056__auto__;
}
break;
}
}catch (e10586){if((e10586 instanceof Object))
{var ex__8057__auto__ = e10586;var statearr_10587_10600 = state_10568;(statearr_10587_10600[5] = ex__8057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10568);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10586;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10601 = state_10568;
state_10568 = G__10601;
continue;
}
} else
{return ret_value__8055__auto__;
}
break;
}
});
state_machine__8054__auto__ = function(state_10568){
switch(arguments.length){
case 0:
return state_machine__8054__auto____0.call(this);
case 1:
return state_machine__8054__auto____1.call(this,state_10568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8054__auto____0;
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8054__auto____1;
return state_machine__8054__auto__;
})()
;})(switch__8053__auto__))
})();var state__8070__auto__ = (function (){var statearr_10588 = f__8069__auto__.call(null);(statearr_10588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8068__auto___10589);
return statearr_10588;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8070__auto__);
}));
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
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8069__auto__ = (function (){var switch__8053__auto__ = (function (state_10753){var state_val_10754 = (state_10753[1]);if((state_val_10754 === 1))
{var state_10753__$1 = state_10753;var statearr_10755_10792 = state_10753__$1;(statearr_10755_10792[2] = null);
(statearr_10755_10792[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10754 === 2))
{var state_10753__$1 = state_10753;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10753__$1,4,in$);
} else
{if((state_val_10754 === 3))
{var inst_10751 = (state_10753[2]);var state_10753__$1 = state_10753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10753__$1,inst_10751);
} else
{if((state_val_10754 === 4))
{var inst_10699 = (state_10753[7]);var inst_10699__$1 = (state_10753[2]);var inst_10700 = (inst_10699__$1 == null);var state_10753__$1 = (function (){var statearr_10756 = state_10753;(statearr_10756[7] = inst_10699__$1);
return statearr_10756;
})();if(cljs.core.truth_(inst_10700))
{var statearr_10757_10793 = state_10753__$1;(statearr_10757_10793[1] = 5);
} else
{var statearr_10758_10794 = state_10753__$1;(statearr_10758_10794[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10754 === 5))
{var inst_10702 = cljs.core.async.close_BANG_.call(null,out);var state_10753__$1 = state_10753;var statearr_10759_10795 = state_10753__$1;(statearr_10759_10795[2] = inst_10702);
(statearr_10759_10795[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10754 === 6))
{var inst_10699 = (state_10753[7]);var inst_10704 = f.call(null,inst_10699);var inst_10709 = cljs.core.seq.call(null,inst_10704);var inst_10710 = inst_10709;var inst_10711 = null;var inst_10712 = 0;var inst_10713 = 0;var state_10753__$1 = (function (){var statearr_10760 = state_10753;(statearr_10760[8] = inst_10710);
(statearr_10760[9] = inst_10711);
(statearr_10760[10] = inst_10713);
(statearr_10760[11] = inst_10712);
return statearr_10760;
})();var statearr_10761_10796 = state_10753__$1;(statearr_10761_10796[2] = null);
(statearr_10761_10796[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10754 === 7))
{var inst_10749 = (state_10753[2]);var state_10753__$1 = state_10753;var statearr_10762_10797 = state_10753__$1;(statearr_10762_10797[2] = inst_10749);
(statearr_10762_10797[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10754 === 8))
{var inst_10713 = (state_10753[10]);var inst_10712 = (state_10753[11]);var inst_10715 = (inst_10713 < inst_10712);var inst_10716 = inst_10715;var state_10753__$1 = state_10753;if(cljs.core.truth_(inst_10716))
{var statearr_10763_10798 = state_10753__$1;(statearr_10763_10798[1] = 10);
} else
{var statearr_10764_10799 = state_10753__$1;(statearr_10764_10799[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10754 === 9))
{var inst_10746 = (state_10753[2]);var state_10753__$1 = (function (){var statearr_10765 = state_10753;(statearr_10765[12] = inst_10746);
return statearr_10765;
})();var statearr_10766_10800 = state_10753__$1;(statearr_10766_10800[2] = null);
(statearr_10766_10800[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10754 === 10))
{var inst_10711 = (state_10753[9]);var inst_10713 = (state_10753[10]);var inst_10718 = cljs.core._nth.call(null,inst_10711,inst_10713);var state_10753__$1 = state_10753;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10753__$1,13,out,inst_10718);
} else
{if((state_val_10754 === 11))
{var inst_10710 = (state_10753[8]);var inst_10724 = (state_10753[13]);var inst_10724__$1 = cljs.core.seq.call(null,inst_10710);var state_10753__$1 = (function (){var statearr_10770 = state_10753;(statearr_10770[13] = inst_10724__$1);
return statearr_10770;
})();if(inst_10724__$1)
{var statearr_10771_10801 = state_10753__$1;(statearr_10771_10801[1] = 14);
} else
{var statearr_10772_10802 = state_10753__$1;(statearr_10772_10802[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10754 === 12))
{var inst_10744 = (state_10753[2]);var state_10753__$1 = state_10753;var statearr_10773_10803 = state_10753__$1;(statearr_10773_10803[2] = inst_10744);
(statearr_10773_10803[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10754 === 13))
{var inst_10710 = (state_10753[8]);var inst_10711 = (state_10753[9]);var inst_10713 = (state_10753[10]);var inst_10712 = (state_10753[11]);var inst_10720 = (state_10753[2]);var inst_10721 = (inst_10713 + 1);var tmp10767 = inst_10710;var tmp10768 = inst_10711;var tmp10769 = inst_10712;var inst_10710__$1 = tmp10767;var inst_10711__$1 = tmp10768;var inst_10712__$1 = tmp10769;var inst_10713__$1 = inst_10721;var state_10753__$1 = (function (){var statearr_10774 = state_10753;(statearr_10774[14] = inst_10720);
(statearr_10774[8] = inst_10710__$1);
(statearr_10774[9] = inst_10711__$1);
(statearr_10774[10] = inst_10713__$1);
(statearr_10774[11] = inst_10712__$1);
return statearr_10774;
})();var statearr_10775_10804 = state_10753__$1;(statearr_10775_10804[2] = null);
(statearr_10775_10804[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10754 === 14))
{var inst_10724 = (state_10753[13]);var inst_10726 = cljs.core.chunked_seq_QMARK_.call(null,inst_10724);var state_10753__$1 = state_10753;if(inst_10726)
{var statearr_10776_10805 = state_10753__$1;(statearr_10776_10805[1] = 17);
} else
{var statearr_10777_10806 = state_10753__$1;(statearr_10777_10806[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10754 === 15))
{var state_10753__$1 = state_10753;var statearr_10778_10807 = state_10753__$1;(statearr_10778_10807[2] = null);
(statearr_10778_10807[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10754 === 16))
{var inst_10742 = (state_10753[2]);var state_10753__$1 = state_10753;var statearr_10779_10808 = state_10753__$1;(statearr_10779_10808[2] = inst_10742);
(statearr_10779_10808[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10754 === 17))
{var inst_10724 = (state_10753[13]);var inst_10728 = cljs.core.chunk_first.call(null,inst_10724);var inst_10729 = cljs.core.chunk_rest.call(null,inst_10724);var inst_10730 = cljs.core.count.call(null,inst_10728);var inst_10710 = inst_10729;var inst_10711 = inst_10728;var inst_10712 = inst_10730;var inst_10713 = 0;var state_10753__$1 = (function (){var statearr_10780 = state_10753;(statearr_10780[8] = inst_10710);
(statearr_10780[9] = inst_10711);
(statearr_10780[10] = inst_10713);
(statearr_10780[11] = inst_10712);
return statearr_10780;
})();var statearr_10781_10809 = state_10753__$1;(statearr_10781_10809[2] = null);
(statearr_10781_10809[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10754 === 18))
{var inst_10724 = (state_10753[13]);var inst_10733 = cljs.core.first.call(null,inst_10724);var state_10753__$1 = state_10753;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10753__$1,20,out,inst_10733);
} else
{if((state_val_10754 === 19))
{var inst_10739 = (state_10753[2]);var state_10753__$1 = state_10753;var statearr_10782_10810 = state_10753__$1;(statearr_10782_10810[2] = inst_10739);
(statearr_10782_10810[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10754 === 20))
{var inst_10724 = (state_10753[13]);var inst_10735 = (state_10753[2]);var inst_10736 = cljs.core.next.call(null,inst_10724);var inst_10710 = inst_10736;var inst_10711 = null;var inst_10712 = 0;var inst_10713 = 0;var state_10753__$1 = (function (){var statearr_10783 = state_10753;(statearr_10783[15] = inst_10735);
(statearr_10783[8] = inst_10710);
(statearr_10783[9] = inst_10711);
(statearr_10783[10] = inst_10713);
(statearr_10783[11] = inst_10712);
return statearr_10783;
})();var statearr_10784_10811 = state_10753__$1;(statearr_10784_10811[2] = null);
(statearr_10784_10811[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__8053__auto__){
return (function() {
var state_machine__8054__auto__ = null;
var state_machine__8054__auto____0 = (function (){var statearr_10788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10788[0] = state_machine__8054__auto__);
(statearr_10788[1] = 1);
return statearr_10788;
});
var state_machine__8054__auto____1 = (function (state_10753){while(true){
var ret_value__8055__auto__ = (function (){try{while(true){
var result__8056__auto__ = switch__8053__auto__.call(null,state_10753);if(cljs.core.keyword_identical_QMARK_.call(null,result__8056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8056__auto__;
}
break;
}
}catch (e10789){if((e10789 instanceof Object))
{var ex__8057__auto__ = e10789;var statearr_10790_10812 = state_10753;(statearr_10790_10812[5] = ex__8057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10753);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10789;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10813 = state_10753;
state_10753 = G__10813;
continue;
}
} else
{return ret_value__8055__auto__;
}
break;
}
});
state_machine__8054__auto__ = function(state_10753){
switch(arguments.length){
case 0:
return state_machine__8054__auto____0.call(this);
case 1:
return state_machine__8054__auto____1.call(this,state_10753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8054__auto____0;
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8054__auto____1;
return state_machine__8054__auto__;
})()
;})(switch__8053__auto__))
})();var state__8070__auto__ = (function (){var statearr_10791 = f__8069__auto__.call(null);(statearr_10791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8068__auto__);
return statearr_10791;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8070__auto__);
}));
return c__8068__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
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
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
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
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__8068__auto___10894 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8069__auto__ = (function (){var switch__8053__auto__ = (function (state_10873){var state_val_10874 = (state_10873[1]);if((state_val_10874 === 1))
{var state_10873__$1 = state_10873;var statearr_10875_10895 = state_10873__$1;(statearr_10875_10895[2] = null);
(statearr_10875_10895[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10874 === 2))
{var state_10873__$1 = state_10873;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10873__$1,4,from);
} else
{if((state_val_10874 === 3))
{var inst_10871 = (state_10873[2]);var state_10873__$1 = state_10873;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10873__$1,inst_10871);
} else
{if((state_val_10874 === 4))
{var inst_10856 = (state_10873[7]);var inst_10856__$1 = (state_10873[2]);var inst_10857 = (inst_10856__$1 == null);var state_10873__$1 = (function (){var statearr_10876 = state_10873;(statearr_10876[7] = inst_10856__$1);
return statearr_10876;
})();if(cljs.core.truth_(inst_10857))
{var statearr_10877_10896 = state_10873__$1;(statearr_10877_10896[1] = 5);
} else
{var statearr_10878_10897 = state_10873__$1;(statearr_10878_10897[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10874 === 5))
{var state_10873__$1 = state_10873;if(cljs.core.truth_(close_QMARK_))
{var statearr_10879_10898 = state_10873__$1;(statearr_10879_10898[1] = 8);
} else
{var statearr_10880_10899 = state_10873__$1;(statearr_10880_10899[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10874 === 6))
{var inst_10856 = (state_10873[7]);var state_10873__$1 = state_10873;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10873__$1,11,to,inst_10856);
} else
{if((state_val_10874 === 7))
{var inst_10869 = (state_10873[2]);var state_10873__$1 = state_10873;var statearr_10881_10900 = state_10873__$1;(statearr_10881_10900[2] = inst_10869);
(statearr_10881_10900[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10874 === 8))
{var inst_10860 = cljs.core.async.close_BANG_.call(null,to);var state_10873__$1 = state_10873;var statearr_10882_10901 = state_10873__$1;(statearr_10882_10901[2] = inst_10860);
(statearr_10882_10901[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10874 === 9))
{var state_10873__$1 = state_10873;var statearr_10883_10902 = state_10873__$1;(statearr_10883_10902[2] = null);
(statearr_10883_10902[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10874 === 10))
{var inst_10863 = (state_10873[2]);var state_10873__$1 = state_10873;var statearr_10884_10903 = state_10873__$1;(statearr_10884_10903[2] = inst_10863);
(statearr_10884_10903[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10874 === 11))
{var inst_10866 = (state_10873[2]);var state_10873__$1 = (function (){var statearr_10885 = state_10873;(statearr_10885[8] = inst_10866);
return statearr_10885;
})();var statearr_10886_10904 = state_10873__$1;(statearr_10886_10904[2] = null);
(statearr_10886_10904[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__8053__auto__){
return (function() {
var state_machine__8054__auto__ = null;
var state_machine__8054__auto____0 = (function (){var statearr_10890 = [null,null,null,null,null,null,null,null,null];(statearr_10890[0] = state_machine__8054__auto__);
(statearr_10890[1] = 1);
return statearr_10890;
});
var state_machine__8054__auto____1 = (function (state_10873){while(true){
var ret_value__8055__auto__ = (function (){try{while(true){
var result__8056__auto__ = switch__8053__auto__.call(null,state_10873);if(cljs.core.keyword_identical_QMARK_.call(null,result__8056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8056__auto__;
}
break;
}
}catch (e10891){if((e10891 instanceof Object))
{var ex__8057__auto__ = e10891;var statearr_10892_10905 = state_10873;(statearr_10892_10905[5] = ex__8057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10873);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10891;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10906 = state_10873;
state_10873 = G__10906;
continue;
}
} else
{return ret_value__8055__auto__;
}
break;
}
});
state_machine__8054__auto__ = function(state_10873){
switch(arguments.length){
case 0:
return state_machine__8054__auto____0.call(this);
case 1:
return state_machine__8054__auto____1.call(this,state_10873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8054__auto____0;
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8054__auto____1;
return state_machine__8054__auto__;
})()
;})(switch__8053__auto__))
})();var state__8070__auto__ = (function (){var statearr_10893 = f__8069__auto__.call(null);(statearr_10893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8068__auto___10894);
return statearr_10893;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8070__auto__);
}));
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8068__auto___10993 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8069__auto__ = (function (){var switch__8053__auto__ = (function (state_10971){var state_val_10972 = (state_10971[1]);if((state_val_10972 === 1))
{var state_10971__$1 = state_10971;var statearr_10973_10994 = state_10971__$1;(statearr_10973_10994[2] = null);
(statearr_10973_10994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10972 === 2))
{var state_10971__$1 = state_10971;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10971__$1,4,ch);
} else
{if((state_val_10972 === 3))
{var inst_10969 = (state_10971[2]);var state_10971__$1 = state_10971;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10971__$1,inst_10969);
} else
{if((state_val_10972 === 4))
{var inst_10952 = (state_10971[7]);var inst_10952__$1 = (state_10971[2]);var inst_10953 = (inst_10952__$1 == null);var state_10971__$1 = (function (){var statearr_10974 = state_10971;(statearr_10974[7] = inst_10952__$1);
return statearr_10974;
})();if(cljs.core.truth_(inst_10953))
{var statearr_10975_10995 = state_10971__$1;(statearr_10975_10995[1] = 5);
} else
{var statearr_10976_10996 = state_10971__$1;(statearr_10976_10996[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10972 === 5))
{var inst_10955 = cljs.core.async.close_BANG_.call(null,tc);var inst_10956 = cljs.core.async.close_BANG_.call(null,fc);var state_10971__$1 = (function (){var statearr_10977 = state_10971;(statearr_10977[8] = inst_10955);
return statearr_10977;
})();var statearr_10978_10997 = state_10971__$1;(statearr_10978_10997[2] = inst_10956);
(statearr_10978_10997[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10972 === 6))
{var inst_10952 = (state_10971[7]);var inst_10958 = p.call(null,inst_10952);var state_10971__$1 = state_10971;if(cljs.core.truth_(inst_10958))
{var statearr_10979_10998 = state_10971__$1;(statearr_10979_10998[1] = 9);
} else
{var statearr_10980_10999 = state_10971__$1;(statearr_10980_10999[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10972 === 7))
{var inst_10967 = (state_10971[2]);var state_10971__$1 = state_10971;var statearr_10981_11000 = state_10971__$1;(statearr_10981_11000[2] = inst_10967);
(statearr_10981_11000[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10972 === 8))
{var inst_10964 = (state_10971[2]);var state_10971__$1 = (function (){var statearr_10982 = state_10971;(statearr_10982[9] = inst_10964);
return statearr_10982;
})();var statearr_10983_11001 = state_10971__$1;(statearr_10983_11001[2] = null);
(statearr_10983_11001[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10972 === 9))
{var state_10971__$1 = state_10971;var statearr_10984_11002 = state_10971__$1;(statearr_10984_11002[2] = tc);
(statearr_10984_11002[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10972 === 10))
{var state_10971__$1 = state_10971;var statearr_10985_11003 = state_10971__$1;(statearr_10985_11003[2] = fc);
(statearr_10985_11003[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10972 === 11))
{var inst_10952 = (state_10971[7]);var inst_10962 = (state_10971[2]);var state_10971__$1 = state_10971;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10971__$1,8,inst_10962,inst_10952);
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
});return ((function (switch__8053__auto__){
return (function() {
var state_machine__8054__auto__ = null;
var state_machine__8054__auto____0 = (function (){var statearr_10989 = [null,null,null,null,null,null,null,null,null,null];(statearr_10989[0] = state_machine__8054__auto__);
(statearr_10989[1] = 1);
return statearr_10989;
});
var state_machine__8054__auto____1 = (function (state_10971){while(true){
var ret_value__8055__auto__ = (function (){try{while(true){
var result__8056__auto__ = switch__8053__auto__.call(null,state_10971);if(cljs.core.keyword_identical_QMARK_.call(null,result__8056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8056__auto__;
}
break;
}
}catch (e10990){if((e10990 instanceof Object))
{var ex__8057__auto__ = e10990;var statearr_10991_11004 = state_10971;(statearr_10991_11004[5] = ex__8057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10971);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10990;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11005 = state_10971;
state_10971 = G__11005;
continue;
}
} else
{return ret_value__8055__auto__;
}
break;
}
});
state_machine__8054__auto__ = function(state_10971){
switch(arguments.length){
case 0:
return state_machine__8054__auto____0.call(this);
case 1:
return state_machine__8054__auto____1.call(this,state_10971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8054__auto____0;
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8054__auto____1;
return state_machine__8054__auto__;
})()
;})(switch__8053__auto__))
})();var state__8070__auto__ = (function (){var statearr_10992 = f__8069__auto__.call(null);(statearr_10992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8068__auto___10993);
return statearr_10992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8070__auto__);
}));
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8069__auto__ = (function (){var switch__8053__auto__ = (function (state_11052){var state_val_11053 = (state_11052[1]);if((state_val_11053 === 7))
{var inst_11048 = (state_11052[2]);var state_11052__$1 = state_11052;var statearr_11054_11070 = state_11052__$1;(statearr_11054_11070[2] = inst_11048);
(statearr_11054_11070[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11053 === 6))
{var inst_11038 = (state_11052[7]);var inst_11041 = (state_11052[8]);var inst_11045 = f.call(null,inst_11038,inst_11041);var inst_11038__$1 = inst_11045;var state_11052__$1 = (function (){var statearr_11055 = state_11052;(statearr_11055[7] = inst_11038__$1);
return statearr_11055;
})();var statearr_11056_11071 = state_11052__$1;(statearr_11056_11071[2] = null);
(statearr_11056_11071[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11053 === 5))
{var inst_11038 = (state_11052[7]);var state_11052__$1 = state_11052;var statearr_11057_11072 = state_11052__$1;(statearr_11057_11072[2] = inst_11038);
(statearr_11057_11072[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11053 === 4))
{var inst_11041 = (state_11052[8]);var inst_11041__$1 = (state_11052[2]);var inst_11042 = (inst_11041__$1 == null);var state_11052__$1 = (function (){var statearr_11058 = state_11052;(statearr_11058[8] = inst_11041__$1);
return statearr_11058;
})();if(cljs.core.truth_(inst_11042))
{var statearr_11059_11073 = state_11052__$1;(statearr_11059_11073[1] = 5);
} else
{var statearr_11060_11074 = state_11052__$1;(statearr_11060_11074[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11053 === 3))
{var inst_11050 = (state_11052[2]);var state_11052__$1 = state_11052;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11052__$1,inst_11050);
} else
{if((state_val_11053 === 2))
{var state_11052__$1 = state_11052;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11052__$1,4,ch);
} else
{if((state_val_11053 === 1))
{var inst_11038 = init;var state_11052__$1 = (function (){var statearr_11061 = state_11052;(statearr_11061[7] = inst_11038);
return statearr_11061;
})();var statearr_11062_11075 = state_11052__$1;(statearr_11062_11075[2] = null);
(statearr_11062_11075[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__8053__auto__){
return (function() {
var state_machine__8054__auto__ = null;
var state_machine__8054__auto____0 = (function (){var statearr_11066 = [null,null,null,null,null,null,null,null,null];(statearr_11066[0] = state_machine__8054__auto__);
(statearr_11066[1] = 1);
return statearr_11066;
});
var state_machine__8054__auto____1 = (function (state_11052){while(true){
var ret_value__8055__auto__ = (function (){try{while(true){
var result__8056__auto__ = switch__8053__auto__.call(null,state_11052);if(cljs.core.keyword_identical_QMARK_.call(null,result__8056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8056__auto__;
}
break;
}
}catch (e11067){if((e11067 instanceof Object))
{var ex__8057__auto__ = e11067;var statearr_11068_11076 = state_11052;(statearr_11068_11076[5] = ex__8057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11052);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11067;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11077 = state_11052;
state_11052 = G__11077;
continue;
}
} else
{return ret_value__8055__auto__;
}
break;
}
});
state_machine__8054__auto__ = function(state_11052){
switch(arguments.length){
case 0:
return state_machine__8054__auto____0.call(this);
case 1:
return state_machine__8054__auto____1.call(this,state_11052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8054__auto____0;
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8054__auto____1;
return state_machine__8054__auto__;
})()
;})(switch__8053__auto__))
})();var state__8070__auto__ = (function (){var statearr_11069 = f__8069__auto__.call(null);(statearr_11069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8068__auto__);
return statearr_11069;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8070__auto__);
}));
return c__8068__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8069__auto__ = (function (){var switch__8053__auto__ = (function (state_11139){var state_val_11140 = (state_11139[1]);if((state_val_11140 === 1))
{var inst_11119 = cljs.core.seq.call(null,coll);var inst_11120 = inst_11119;var state_11139__$1 = (function (){var statearr_11141 = state_11139;(statearr_11141[7] = inst_11120);
return statearr_11141;
})();var statearr_11142_11160 = state_11139__$1;(statearr_11142_11160[2] = null);
(statearr_11142_11160[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11140 === 2))
{var inst_11120 = (state_11139[7]);var state_11139__$1 = state_11139;if(cljs.core.truth_(inst_11120))
{var statearr_11143_11161 = state_11139__$1;(statearr_11143_11161[1] = 4);
} else
{var statearr_11144_11162 = state_11139__$1;(statearr_11144_11162[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11140 === 3))
{var inst_11137 = (state_11139[2]);var state_11139__$1 = state_11139;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11139__$1,inst_11137);
} else
{if((state_val_11140 === 4))
{var inst_11120 = (state_11139[7]);var inst_11123 = cljs.core.first.call(null,inst_11120);var state_11139__$1 = state_11139;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11139__$1,7,ch,inst_11123);
} else
{if((state_val_11140 === 5))
{var state_11139__$1 = state_11139;if(cljs.core.truth_(close_QMARK_))
{var statearr_11145_11163 = state_11139__$1;(statearr_11145_11163[1] = 8);
} else
{var statearr_11146_11164 = state_11139__$1;(statearr_11146_11164[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11140 === 6))
{var inst_11135 = (state_11139[2]);var state_11139__$1 = state_11139;var statearr_11147_11165 = state_11139__$1;(statearr_11147_11165[2] = inst_11135);
(statearr_11147_11165[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11140 === 7))
{var inst_11120 = (state_11139[7]);var inst_11125 = (state_11139[2]);var inst_11126 = cljs.core.next.call(null,inst_11120);var inst_11120__$1 = inst_11126;var state_11139__$1 = (function (){var statearr_11148 = state_11139;(statearr_11148[8] = inst_11125);
(statearr_11148[7] = inst_11120__$1);
return statearr_11148;
})();var statearr_11149_11166 = state_11139__$1;(statearr_11149_11166[2] = null);
(statearr_11149_11166[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11140 === 8))
{var inst_11130 = cljs.core.async.close_BANG_.call(null,ch);var state_11139__$1 = state_11139;var statearr_11150_11167 = state_11139__$1;(statearr_11150_11167[2] = inst_11130);
(statearr_11150_11167[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11140 === 9))
{var state_11139__$1 = state_11139;var statearr_11151_11168 = state_11139__$1;(statearr_11151_11168[2] = null);
(statearr_11151_11168[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11140 === 10))
{var inst_11133 = (state_11139[2]);var state_11139__$1 = state_11139;var statearr_11152_11169 = state_11139__$1;(statearr_11152_11169[2] = inst_11133);
(statearr_11152_11169[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__8053__auto__){
return (function() {
var state_machine__8054__auto__ = null;
var state_machine__8054__auto____0 = (function (){var statearr_11156 = [null,null,null,null,null,null,null,null,null];(statearr_11156[0] = state_machine__8054__auto__);
(statearr_11156[1] = 1);
return statearr_11156;
});
var state_machine__8054__auto____1 = (function (state_11139){while(true){
var ret_value__8055__auto__ = (function (){try{while(true){
var result__8056__auto__ = switch__8053__auto__.call(null,state_11139);if(cljs.core.keyword_identical_QMARK_.call(null,result__8056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8056__auto__;
}
break;
}
}catch (e11157){if((e11157 instanceof Object))
{var ex__8057__auto__ = e11157;var statearr_11158_11170 = state_11139;(statearr_11158_11170[5] = ex__8057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11139);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11157;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11171 = state_11139;
state_11139 = G__11171;
continue;
}
} else
{return ret_value__8055__auto__;
}
break;
}
});
state_machine__8054__auto__ = function(state_11139){
switch(arguments.length){
case 0:
return state_machine__8054__auto____0.call(this);
case 1:
return state_machine__8054__auto____1.call(this,state_11139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8054__auto____0;
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8054__auto____1;
return state_machine__8054__auto__;
})()
;})(switch__8053__auto__))
})();var state__8070__auto__ = (function (){var statearr_11159 = f__8069__auto__.call(null);(statearr_11159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8068__auto__);
return statearr_11159;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8070__auto__);
}));
return c__8068__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11173 = {};return obj11173;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11175 = {};return obj11175;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11399 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11399 = (function (cs,ch,mult,meta11400){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11400 = meta11400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11399.cljs$lang$type = true;
cljs.core.async.t11399.cljs$lang$ctorStr = "cljs.core.async/t11399";
cljs.core.async.t11399.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11399");
});})(cs))
;
cljs.core.async.t11399.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11399.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11399.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11399.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11399.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11399.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11399.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11401){var self__ = this;
var _11401__$1 = this;return self__.meta11400;
});})(cs))
;
cljs.core.async.t11399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11401,meta11400__$1){var self__ = this;
var _11401__$1 = this;return (new cljs.core.async.t11399(self__.cs,self__.ch,self__.mult,meta11400__$1));
});})(cs))
;
cljs.core.async.__GT_t11399 = ((function (cs){
return (function __GT_t11399(cs__$1,ch__$1,mult__$1,meta11400){return (new cljs.core.async.t11399(cs__$1,ch__$1,mult__$1,meta11400));
});})(cs))
;
}
return (new cljs.core.async.t11399(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8068__auto___11622 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8069__auto__ = (function (){var switch__8053__auto__ = (function (state_11536){var state_val_11537 = (state_11536[1]);if((state_val_11537 === 32))
{var inst_11404 = (state_11536[7]);var inst_11480 = (state_11536[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11536,31,Object,null,30);var inst_11487 = cljs.core.async.put_BANG_.call(null,inst_11480,inst_11404,done);var state_11536__$1 = state_11536;var statearr_11538_11623 = state_11536__$1;(statearr_11538_11623[2] = inst_11487);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11536__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 1))
{var state_11536__$1 = state_11536;var statearr_11539_11624 = state_11536__$1;(statearr_11539_11624[2] = null);
(statearr_11539_11624[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 33))
{var inst_11493 = (state_11536[9]);var inst_11495 = cljs.core.chunked_seq_QMARK_.call(null,inst_11493);var state_11536__$1 = state_11536;if(inst_11495)
{var statearr_11540_11625 = state_11536__$1;(statearr_11540_11625[1] = 36);
} else
{var statearr_11541_11626 = state_11536__$1;(statearr_11541_11626[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 2))
{var state_11536__$1 = state_11536;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11536__$1,4,ch);
} else
{if((state_val_11537 === 34))
{var state_11536__$1 = state_11536;var statearr_11542_11627 = state_11536__$1;(statearr_11542_11627[2] = null);
(statearr_11542_11627[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 3))
{var inst_11534 = (state_11536[2]);var state_11536__$1 = state_11536;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11536__$1,inst_11534);
} else
{if((state_val_11537 === 35))
{var inst_11518 = (state_11536[2]);var state_11536__$1 = state_11536;var statearr_11543_11628 = state_11536__$1;(statearr_11543_11628[2] = inst_11518);
(statearr_11543_11628[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 4))
{var inst_11404 = (state_11536[7]);var inst_11404__$1 = (state_11536[2]);var inst_11405 = (inst_11404__$1 == null);var state_11536__$1 = (function (){var statearr_11544 = state_11536;(statearr_11544[7] = inst_11404__$1);
return statearr_11544;
})();if(cljs.core.truth_(inst_11405))
{var statearr_11545_11629 = state_11536__$1;(statearr_11545_11629[1] = 5);
} else
{var statearr_11546_11630 = state_11536__$1;(statearr_11546_11630[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 36))
{var inst_11493 = (state_11536[9]);var inst_11497 = cljs.core.chunk_first.call(null,inst_11493);var inst_11498 = cljs.core.chunk_rest.call(null,inst_11493);var inst_11499 = cljs.core.count.call(null,inst_11497);var inst_11472 = inst_11498;var inst_11473 = inst_11497;var inst_11474 = inst_11499;var inst_11475 = 0;var state_11536__$1 = (function (){var statearr_11547 = state_11536;(statearr_11547[10] = inst_11472);
(statearr_11547[11] = inst_11473);
(statearr_11547[12] = inst_11475);
(statearr_11547[13] = inst_11474);
return statearr_11547;
})();var statearr_11548_11631 = state_11536__$1;(statearr_11548_11631[2] = null);
(statearr_11548_11631[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 5))
{var inst_11411 = cljs.core.deref.call(null,cs);var inst_11412 = cljs.core.seq.call(null,inst_11411);var inst_11413 = inst_11412;var inst_11414 = null;var inst_11415 = 0;var inst_11416 = 0;var state_11536__$1 = (function (){var statearr_11549 = state_11536;(statearr_11549[14] = inst_11413);
(statearr_11549[15] = inst_11414);
(statearr_11549[16] = inst_11415);
(statearr_11549[17] = inst_11416);
return statearr_11549;
})();var statearr_11550_11632 = state_11536__$1;(statearr_11550_11632[2] = null);
(statearr_11550_11632[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 37))
{var inst_11493 = (state_11536[9]);var inst_11502 = cljs.core.first.call(null,inst_11493);var state_11536__$1 = (function (){var statearr_11551 = state_11536;(statearr_11551[18] = inst_11502);
return statearr_11551;
})();var statearr_11552_11633 = state_11536__$1;(statearr_11552_11633[2] = null);
(statearr_11552_11633[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 6))
{var inst_11464 = (state_11536[19]);var inst_11463 = cljs.core.deref.call(null,cs);var inst_11464__$1 = cljs.core.keys.call(null,inst_11463);var inst_11465 = cljs.core.count.call(null,inst_11464__$1);var inst_11466 = cljs.core.reset_BANG_.call(null,dctr,inst_11465);var inst_11471 = cljs.core.seq.call(null,inst_11464__$1);var inst_11472 = inst_11471;var inst_11473 = null;var inst_11474 = 0;var inst_11475 = 0;var state_11536__$1 = (function (){var statearr_11553 = state_11536;(statearr_11553[20] = inst_11466);
(statearr_11553[19] = inst_11464__$1);
(statearr_11553[10] = inst_11472);
(statearr_11553[11] = inst_11473);
(statearr_11553[12] = inst_11475);
(statearr_11553[13] = inst_11474);
return statearr_11553;
})();var statearr_11554_11634 = state_11536__$1;(statearr_11554_11634[2] = null);
(statearr_11554_11634[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 38))
{var inst_11515 = (state_11536[2]);var state_11536__$1 = state_11536;var statearr_11555_11635 = state_11536__$1;(statearr_11555_11635[2] = inst_11515);
(statearr_11555_11635[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 7))
{var inst_11532 = (state_11536[2]);var state_11536__$1 = state_11536;var statearr_11556_11636 = state_11536__$1;(statearr_11556_11636[2] = inst_11532);
(statearr_11556_11636[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 39))
{var inst_11493 = (state_11536[9]);var inst_11511 = (state_11536[2]);var inst_11512 = cljs.core.next.call(null,inst_11493);var inst_11472 = inst_11512;var inst_11473 = null;var inst_11474 = 0;var inst_11475 = 0;var state_11536__$1 = (function (){var statearr_11557 = state_11536;(statearr_11557[10] = inst_11472);
(statearr_11557[11] = inst_11473);
(statearr_11557[21] = inst_11511);
(statearr_11557[12] = inst_11475);
(statearr_11557[13] = inst_11474);
return statearr_11557;
})();var statearr_11558_11637 = state_11536__$1;(statearr_11558_11637[2] = null);
(statearr_11558_11637[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 8))
{var inst_11415 = (state_11536[16]);var inst_11416 = (state_11536[17]);var inst_11418 = (inst_11416 < inst_11415);var inst_11419 = inst_11418;var state_11536__$1 = state_11536;if(cljs.core.truth_(inst_11419))
{var statearr_11559_11638 = state_11536__$1;(statearr_11559_11638[1] = 10);
} else
{var statearr_11560_11639 = state_11536__$1;(statearr_11560_11639[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 40))
{var inst_11502 = (state_11536[18]);var inst_11503 = (state_11536[2]);var inst_11504 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11505 = cljs.core.async.untap_STAR_.call(null,m,inst_11502);var state_11536__$1 = (function (){var statearr_11561 = state_11536;(statearr_11561[22] = inst_11504);
(statearr_11561[23] = inst_11503);
return statearr_11561;
})();var statearr_11562_11640 = state_11536__$1;(statearr_11562_11640[2] = inst_11505);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11536__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 9))
{var inst_11461 = (state_11536[2]);var state_11536__$1 = state_11536;var statearr_11563_11641 = state_11536__$1;(statearr_11563_11641[2] = inst_11461);
(statearr_11563_11641[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 41))
{var inst_11404 = (state_11536[7]);var inst_11502 = (state_11536[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11536,40,Object,null,39);var inst_11509 = cljs.core.async.put_BANG_.call(null,inst_11502,inst_11404,done);var state_11536__$1 = state_11536;var statearr_11564_11642 = state_11536__$1;(statearr_11564_11642[2] = inst_11509);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11536__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 10))
{var inst_11414 = (state_11536[15]);var inst_11416 = (state_11536[17]);var inst_11422 = cljs.core._nth.call(null,inst_11414,inst_11416);var inst_11423 = cljs.core.nth.call(null,inst_11422,0,null);var inst_11424 = cljs.core.nth.call(null,inst_11422,1,null);var state_11536__$1 = (function (){var statearr_11565 = state_11536;(statearr_11565[24] = inst_11423);
return statearr_11565;
})();if(cljs.core.truth_(inst_11424))
{var statearr_11566_11643 = state_11536__$1;(statearr_11566_11643[1] = 13);
} else
{var statearr_11567_11644 = state_11536__$1;(statearr_11567_11644[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 42))
{var state_11536__$1 = state_11536;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11536__$1,45,dchan);
} else
{if((state_val_11537 === 11))
{var inst_11413 = (state_11536[14]);var inst_11433 = (state_11536[25]);var inst_11433__$1 = cljs.core.seq.call(null,inst_11413);var state_11536__$1 = (function (){var statearr_11568 = state_11536;(statearr_11568[25] = inst_11433__$1);
return statearr_11568;
})();if(inst_11433__$1)
{var statearr_11569_11645 = state_11536__$1;(statearr_11569_11645[1] = 16);
} else
{var statearr_11570_11646 = state_11536__$1;(statearr_11570_11646[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 43))
{var state_11536__$1 = state_11536;var statearr_11571_11647 = state_11536__$1;(statearr_11571_11647[2] = null);
(statearr_11571_11647[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 12))
{var inst_11459 = (state_11536[2]);var state_11536__$1 = state_11536;var statearr_11572_11648 = state_11536__$1;(statearr_11572_11648[2] = inst_11459);
(statearr_11572_11648[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 44))
{var inst_11529 = (state_11536[2]);var state_11536__$1 = (function (){var statearr_11573 = state_11536;(statearr_11573[26] = inst_11529);
return statearr_11573;
})();var statearr_11574_11649 = state_11536__$1;(statearr_11574_11649[2] = null);
(statearr_11574_11649[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 13))
{var inst_11423 = (state_11536[24]);var inst_11426 = cljs.core.async.close_BANG_.call(null,inst_11423);var state_11536__$1 = state_11536;var statearr_11575_11650 = state_11536__$1;(statearr_11575_11650[2] = inst_11426);
(statearr_11575_11650[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 45))
{var inst_11526 = (state_11536[2]);var state_11536__$1 = state_11536;var statearr_11579_11651 = state_11536__$1;(statearr_11579_11651[2] = inst_11526);
(statearr_11579_11651[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 14))
{var state_11536__$1 = state_11536;var statearr_11580_11652 = state_11536__$1;(statearr_11580_11652[2] = null);
(statearr_11580_11652[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 15))
{var inst_11413 = (state_11536[14]);var inst_11414 = (state_11536[15]);var inst_11415 = (state_11536[16]);var inst_11416 = (state_11536[17]);var inst_11429 = (state_11536[2]);var inst_11430 = (inst_11416 + 1);var tmp11576 = inst_11413;var tmp11577 = inst_11414;var tmp11578 = inst_11415;var inst_11413__$1 = tmp11576;var inst_11414__$1 = tmp11577;var inst_11415__$1 = tmp11578;var inst_11416__$1 = inst_11430;var state_11536__$1 = (function (){var statearr_11581 = state_11536;(statearr_11581[27] = inst_11429);
(statearr_11581[14] = inst_11413__$1);
(statearr_11581[15] = inst_11414__$1);
(statearr_11581[16] = inst_11415__$1);
(statearr_11581[17] = inst_11416__$1);
return statearr_11581;
})();var statearr_11582_11653 = state_11536__$1;(statearr_11582_11653[2] = null);
(statearr_11582_11653[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 16))
{var inst_11433 = (state_11536[25]);var inst_11435 = cljs.core.chunked_seq_QMARK_.call(null,inst_11433);var state_11536__$1 = state_11536;if(inst_11435)
{var statearr_11583_11654 = state_11536__$1;(statearr_11583_11654[1] = 19);
} else
{var statearr_11584_11655 = state_11536__$1;(statearr_11584_11655[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 17))
{var state_11536__$1 = state_11536;var statearr_11585_11656 = state_11536__$1;(statearr_11585_11656[2] = null);
(statearr_11585_11656[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 18))
{var inst_11457 = (state_11536[2]);var state_11536__$1 = state_11536;var statearr_11586_11657 = state_11536__$1;(statearr_11586_11657[2] = inst_11457);
(statearr_11586_11657[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 19))
{var inst_11433 = (state_11536[25]);var inst_11437 = cljs.core.chunk_first.call(null,inst_11433);var inst_11438 = cljs.core.chunk_rest.call(null,inst_11433);var inst_11439 = cljs.core.count.call(null,inst_11437);var inst_11413 = inst_11438;var inst_11414 = inst_11437;var inst_11415 = inst_11439;var inst_11416 = 0;var state_11536__$1 = (function (){var statearr_11587 = state_11536;(statearr_11587[14] = inst_11413);
(statearr_11587[15] = inst_11414);
(statearr_11587[16] = inst_11415);
(statearr_11587[17] = inst_11416);
return statearr_11587;
})();var statearr_11588_11658 = state_11536__$1;(statearr_11588_11658[2] = null);
(statearr_11588_11658[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 20))
{var inst_11433 = (state_11536[25]);var inst_11443 = cljs.core.first.call(null,inst_11433);var inst_11444 = cljs.core.nth.call(null,inst_11443,0,null);var inst_11445 = cljs.core.nth.call(null,inst_11443,1,null);var state_11536__$1 = (function (){var statearr_11589 = state_11536;(statearr_11589[28] = inst_11444);
return statearr_11589;
})();if(cljs.core.truth_(inst_11445))
{var statearr_11590_11659 = state_11536__$1;(statearr_11590_11659[1] = 22);
} else
{var statearr_11591_11660 = state_11536__$1;(statearr_11591_11660[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 21))
{var inst_11454 = (state_11536[2]);var state_11536__$1 = state_11536;var statearr_11592_11661 = state_11536__$1;(statearr_11592_11661[2] = inst_11454);
(statearr_11592_11661[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 22))
{var inst_11444 = (state_11536[28]);var inst_11447 = cljs.core.async.close_BANG_.call(null,inst_11444);var state_11536__$1 = state_11536;var statearr_11593_11662 = state_11536__$1;(statearr_11593_11662[2] = inst_11447);
(statearr_11593_11662[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 23))
{var state_11536__$1 = state_11536;var statearr_11594_11663 = state_11536__$1;(statearr_11594_11663[2] = null);
(statearr_11594_11663[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 24))
{var inst_11433 = (state_11536[25]);var inst_11450 = (state_11536[2]);var inst_11451 = cljs.core.next.call(null,inst_11433);var inst_11413 = inst_11451;var inst_11414 = null;var inst_11415 = 0;var inst_11416 = 0;var state_11536__$1 = (function (){var statearr_11595 = state_11536;(statearr_11595[29] = inst_11450);
(statearr_11595[14] = inst_11413);
(statearr_11595[15] = inst_11414);
(statearr_11595[16] = inst_11415);
(statearr_11595[17] = inst_11416);
return statearr_11595;
})();var statearr_11596_11664 = state_11536__$1;(statearr_11596_11664[2] = null);
(statearr_11596_11664[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 25))
{var inst_11475 = (state_11536[12]);var inst_11474 = (state_11536[13]);var inst_11477 = (inst_11475 < inst_11474);var inst_11478 = inst_11477;var state_11536__$1 = state_11536;if(cljs.core.truth_(inst_11478))
{var statearr_11597_11665 = state_11536__$1;(statearr_11597_11665[1] = 27);
} else
{var statearr_11598_11666 = state_11536__$1;(statearr_11598_11666[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 26))
{var inst_11464 = (state_11536[19]);var inst_11522 = (state_11536[2]);var inst_11523 = cljs.core.seq.call(null,inst_11464);var state_11536__$1 = (function (){var statearr_11599 = state_11536;(statearr_11599[30] = inst_11522);
return statearr_11599;
})();if(inst_11523)
{var statearr_11600_11667 = state_11536__$1;(statearr_11600_11667[1] = 42);
} else
{var statearr_11601_11668 = state_11536__$1;(statearr_11601_11668[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 27))
{var inst_11473 = (state_11536[11]);var inst_11475 = (state_11536[12]);var inst_11480 = cljs.core._nth.call(null,inst_11473,inst_11475);var state_11536__$1 = (function (){var statearr_11602 = state_11536;(statearr_11602[8] = inst_11480);
return statearr_11602;
})();var statearr_11603_11669 = state_11536__$1;(statearr_11603_11669[2] = null);
(statearr_11603_11669[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 28))
{var inst_11493 = (state_11536[9]);var inst_11472 = (state_11536[10]);var inst_11493__$1 = cljs.core.seq.call(null,inst_11472);var state_11536__$1 = (function (){var statearr_11607 = state_11536;(statearr_11607[9] = inst_11493__$1);
return statearr_11607;
})();if(inst_11493__$1)
{var statearr_11608_11670 = state_11536__$1;(statearr_11608_11670[1] = 33);
} else
{var statearr_11609_11671 = state_11536__$1;(statearr_11609_11671[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 29))
{var inst_11520 = (state_11536[2]);var state_11536__$1 = state_11536;var statearr_11610_11672 = state_11536__$1;(statearr_11610_11672[2] = inst_11520);
(statearr_11610_11672[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 30))
{var inst_11472 = (state_11536[10]);var inst_11473 = (state_11536[11]);var inst_11475 = (state_11536[12]);var inst_11474 = (state_11536[13]);var inst_11489 = (state_11536[2]);var inst_11490 = (inst_11475 + 1);var tmp11604 = inst_11472;var tmp11605 = inst_11473;var tmp11606 = inst_11474;var inst_11472__$1 = tmp11604;var inst_11473__$1 = tmp11605;var inst_11474__$1 = tmp11606;var inst_11475__$1 = inst_11490;var state_11536__$1 = (function (){var statearr_11611 = state_11536;(statearr_11611[31] = inst_11489);
(statearr_11611[10] = inst_11472__$1);
(statearr_11611[11] = inst_11473__$1);
(statearr_11611[12] = inst_11475__$1);
(statearr_11611[13] = inst_11474__$1);
return statearr_11611;
})();var statearr_11612_11673 = state_11536__$1;(statearr_11612_11673[2] = null);
(statearr_11612_11673[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11537 === 31))
{var inst_11480 = (state_11536[8]);var inst_11481 = (state_11536[2]);var inst_11482 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11483 = cljs.core.async.untap_STAR_.call(null,m,inst_11480);var state_11536__$1 = (function (){var statearr_11613 = state_11536;(statearr_11613[32] = inst_11481);
(statearr_11613[33] = inst_11482);
return statearr_11613;
})();var statearr_11614_11674 = state_11536__$1;(statearr_11614_11674[2] = inst_11483);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11536__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__8053__auto__){
return (function() {
var state_machine__8054__auto__ = null;
var state_machine__8054__auto____0 = (function (){var statearr_11618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11618[0] = state_machine__8054__auto__);
(statearr_11618[1] = 1);
return statearr_11618;
});
var state_machine__8054__auto____1 = (function (state_11536){while(true){
var ret_value__8055__auto__ = (function (){try{while(true){
var result__8056__auto__ = switch__8053__auto__.call(null,state_11536);if(cljs.core.keyword_identical_QMARK_.call(null,result__8056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8056__auto__;
}
break;
}
}catch (e11619){if((e11619 instanceof Object))
{var ex__8057__auto__ = e11619;var statearr_11620_11675 = state_11536;(statearr_11620_11675[5] = ex__8057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11536);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11619;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11676 = state_11536;
state_11536 = G__11676;
continue;
}
} else
{return ret_value__8055__auto__;
}
break;
}
});
state_machine__8054__auto__ = function(state_11536){
switch(arguments.length){
case 0:
return state_machine__8054__auto____0.call(this);
case 1:
return state_machine__8054__auto____1.call(this,state_11536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8054__auto____0;
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8054__auto____1;
return state_machine__8054__auto__;
})()
;})(switch__8053__auto__))
})();var state__8070__auto__ = (function (){var statearr_11621 = f__8069__auto__.call(null);(statearr_11621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8068__auto___11622);
return statearr_11621;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8070__auto__);
}));
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
cljs.core.async.Mix = (function (){var obj11678 = {};return obj11678;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11788 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11788 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11789){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta11789 = meta11789;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11788.cljs$lang$type = true;
cljs.core.async.t11788.cljs$lang$ctorStr = "cljs.core.async/t11788";
cljs.core.async.t11788.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11788");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11788.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11788.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11788.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11788.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11788.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11788.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11788.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11788.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11790){var self__ = this;
var _11790__$1 = this;return self__.meta11789;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11790,meta11789__$1){var self__ = this;
var _11790__$1 = this;return (new cljs.core.async.t11788(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11789__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11788 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11788(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11789){return (new cljs.core.async.t11788(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11789));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11788(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__8068__auto___11897 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8069__auto__ = (function (){var switch__8053__auto__ = (function (state_11855){var state_val_11856 = (state_11855[1]);if((state_val_11856 === 1))
{var inst_11794 = (state_11855[7]);var inst_11794__$1 = calc_state.call(null);var inst_11795 = cljs.core.seq_QMARK_.call(null,inst_11794__$1);var state_11855__$1 = (function (){var statearr_11857 = state_11855;(statearr_11857[7] = inst_11794__$1);
return statearr_11857;
})();if(inst_11795)
{var statearr_11858_11898 = state_11855__$1;(statearr_11858_11898[1] = 2);
} else
{var statearr_11859_11899 = state_11855__$1;(statearr_11859_11899[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11856 === 2))
{var inst_11794 = (state_11855[7]);var inst_11797 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11794);var state_11855__$1 = state_11855;var statearr_11860_11900 = state_11855__$1;(statearr_11860_11900[2] = inst_11797);
(statearr_11860_11900[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11856 === 3))
{var inst_11794 = (state_11855[7]);var state_11855__$1 = state_11855;var statearr_11861_11901 = state_11855__$1;(statearr_11861_11901[2] = inst_11794);
(statearr_11861_11901[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11856 === 4))
{var inst_11794 = (state_11855[7]);var inst_11800 = (state_11855[2]);var inst_11801 = cljs.core.get.call(null,inst_11800,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11802 = cljs.core.get.call(null,inst_11800,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11803 = cljs.core.get.call(null,inst_11800,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11804 = inst_11794;var state_11855__$1 = (function (){var statearr_11862 = state_11855;(statearr_11862[8] = inst_11802);
(statearr_11862[9] = inst_11801);
(statearr_11862[10] = inst_11804);
(statearr_11862[11] = inst_11803);
return statearr_11862;
})();var statearr_11863_11902 = state_11855__$1;(statearr_11863_11902[2] = null);
(statearr_11863_11902[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11856 === 5))
{var inst_11804 = (state_11855[10]);var inst_11807 = cljs.core.seq_QMARK_.call(null,inst_11804);var state_11855__$1 = state_11855;if(inst_11807)
{var statearr_11864_11903 = state_11855__$1;(statearr_11864_11903[1] = 7);
} else
{var statearr_11865_11904 = state_11855__$1;(statearr_11865_11904[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11856 === 6))
{var inst_11853 = (state_11855[2]);var state_11855__$1 = state_11855;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11855__$1,inst_11853);
} else
{if((state_val_11856 === 7))
{var inst_11804 = (state_11855[10]);var inst_11809 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11804);var state_11855__$1 = state_11855;var statearr_11866_11905 = state_11855__$1;(statearr_11866_11905[2] = inst_11809);
(statearr_11866_11905[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11856 === 8))
{var inst_11804 = (state_11855[10]);var state_11855__$1 = state_11855;var statearr_11867_11906 = state_11855__$1;(statearr_11867_11906[2] = inst_11804);
(statearr_11867_11906[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11856 === 9))
{var inst_11812 = (state_11855[12]);var inst_11812__$1 = (state_11855[2]);var inst_11813 = cljs.core.get.call(null,inst_11812__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11814 = cljs.core.get.call(null,inst_11812__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11815 = cljs.core.get.call(null,inst_11812__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11855__$1 = (function (){var statearr_11868 = state_11855;(statearr_11868[12] = inst_11812__$1);
(statearr_11868[13] = inst_11815);
(statearr_11868[14] = inst_11814);
return statearr_11868;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11855__$1,10,inst_11813);
} else
{if((state_val_11856 === 10))
{var inst_11820 = (state_11855[15]);var inst_11819 = (state_11855[16]);var inst_11818 = (state_11855[2]);var inst_11819__$1 = cljs.core.nth.call(null,inst_11818,0,null);var inst_11820__$1 = cljs.core.nth.call(null,inst_11818,1,null);var inst_11821 = (inst_11819__$1 == null);var inst_11822 = cljs.core._EQ_.call(null,inst_11820__$1,change);var inst_11823 = (inst_11821) || (inst_11822);var state_11855__$1 = (function (){var statearr_11869 = state_11855;(statearr_11869[15] = inst_11820__$1);
(statearr_11869[16] = inst_11819__$1);
return statearr_11869;
})();if(cljs.core.truth_(inst_11823))
{var statearr_11870_11907 = state_11855__$1;(statearr_11870_11907[1] = 11);
} else
{var statearr_11871_11908 = state_11855__$1;(statearr_11871_11908[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11856 === 11))
{var inst_11819 = (state_11855[16]);var inst_11825 = (inst_11819 == null);var state_11855__$1 = state_11855;if(cljs.core.truth_(inst_11825))
{var statearr_11872_11909 = state_11855__$1;(statearr_11872_11909[1] = 14);
} else
{var statearr_11873_11910 = state_11855__$1;(statearr_11873_11910[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11856 === 12))
{var inst_11834 = (state_11855[17]);var inst_11815 = (state_11855[13]);var inst_11820 = (state_11855[15]);var inst_11834__$1 = inst_11815.call(null,inst_11820);var state_11855__$1 = (function (){var statearr_11874 = state_11855;(statearr_11874[17] = inst_11834__$1);
return statearr_11874;
})();if(cljs.core.truth_(inst_11834__$1))
{var statearr_11875_11911 = state_11855__$1;(statearr_11875_11911[1] = 17);
} else
{var statearr_11876_11912 = state_11855__$1;(statearr_11876_11912[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11856 === 13))
{var inst_11851 = (state_11855[2]);var state_11855__$1 = state_11855;var statearr_11877_11913 = state_11855__$1;(statearr_11877_11913[2] = inst_11851);
(statearr_11877_11913[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11856 === 14))
{var inst_11820 = (state_11855[15]);var inst_11827 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11820);var state_11855__$1 = state_11855;var statearr_11878_11914 = state_11855__$1;(statearr_11878_11914[2] = inst_11827);
(statearr_11878_11914[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11856 === 15))
{var state_11855__$1 = state_11855;var statearr_11879_11915 = state_11855__$1;(statearr_11879_11915[2] = null);
(statearr_11879_11915[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11856 === 16))
{var inst_11830 = (state_11855[2]);var inst_11831 = calc_state.call(null);var inst_11804 = inst_11831;var state_11855__$1 = (function (){var statearr_11880 = state_11855;(statearr_11880[10] = inst_11804);
(statearr_11880[18] = inst_11830);
return statearr_11880;
})();var statearr_11881_11916 = state_11855__$1;(statearr_11881_11916[2] = null);
(statearr_11881_11916[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11856 === 17))
{var inst_11834 = (state_11855[17]);var state_11855__$1 = state_11855;var statearr_11882_11917 = state_11855__$1;(statearr_11882_11917[2] = inst_11834);
(statearr_11882_11917[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11856 === 18))
{var inst_11815 = (state_11855[13]);var inst_11814 = (state_11855[14]);var inst_11820 = (state_11855[15]);var inst_11837 = cljs.core.empty_QMARK_.call(null,inst_11815);var inst_11838 = inst_11814.call(null,inst_11820);var inst_11839 = cljs.core.not.call(null,inst_11838);var inst_11840 = (inst_11837) && (inst_11839);var state_11855__$1 = state_11855;var statearr_11883_11918 = state_11855__$1;(statearr_11883_11918[2] = inst_11840);
(statearr_11883_11918[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11856 === 19))
{var inst_11842 = (state_11855[2]);var state_11855__$1 = state_11855;if(cljs.core.truth_(inst_11842))
{var statearr_11884_11919 = state_11855__$1;(statearr_11884_11919[1] = 20);
} else
{var statearr_11885_11920 = state_11855__$1;(statearr_11885_11920[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11856 === 20))
{var inst_11819 = (state_11855[16]);var state_11855__$1 = state_11855;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11855__$1,23,out,inst_11819);
} else
{if((state_val_11856 === 21))
{var state_11855__$1 = state_11855;var statearr_11886_11921 = state_11855__$1;(statearr_11886_11921[2] = null);
(statearr_11886_11921[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11856 === 22))
{var inst_11812 = (state_11855[12]);var inst_11848 = (state_11855[2]);var inst_11804 = inst_11812;var state_11855__$1 = (function (){var statearr_11887 = state_11855;(statearr_11887[19] = inst_11848);
(statearr_11887[10] = inst_11804);
return statearr_11887;
})();var statearr_11888_11922 = state_11855__$1;(statearr_11888_11922[2] = null);
(statearr_11888_11922[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11856 === 23))
{var inst_11845 = (state_11855[2]);var state_11855__$1 = state_11855;var statearr_11889_11923 = state_11855__$1;(statearr_11889_11923[2] = inst_11845);
(statearr_11889_11923[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__8053__auto__){
return (function() {
var state_machine__8054__auto__ = null;
var state_machine__8054__auto____0 = (function (){var statearr_11893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11893[0] = state_machine__8054__auto__);
(statearr_11893[1] = 1);
return statearr_11893;
});
var state_machine__8054__auto____1 = (function (state_11855){while(true){
var ret_value__8055__auto__ = (function (){try{while(true){
var result__8056__auto__ = switch__8053__auto__.call(null,state_11855);if(cljs.core.keyword_identical_QMARK_.call(null,result__8056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8056__auto__;
}
break;
}
}catch (e11894){if((e11894 instanceof Object))
{var ex__8057__auto__ = e11894;var statearr_11895_11924 = state_11855;(statearr_11895_11924[5] = ex__8057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11855);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11894;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11925 = state_11855;
state_11855 = G__11925;
continue;
}
} else
{return ret_value__8055__auto__;
}
break;
}
});
state_machine__8054__auto__ = function(state_11855){
switch(arguments.length){
case 0:
return state_machine__8054__auto____0.call(this);
case 1:
return state_machine__8054__auto____1.call(this,state_11855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8054__auto____0;
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8054__auto____1;
return state_machine__8054__auto__;
})()
;})(switch__8053__auto__))
})();var state__8070__auto__ = (function (){var statearr_11896 = f__8069__auto__.call(null);(statearr_11896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8068__auto___11897);
return statearr_11896;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8070__auto__);
}));
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
cljs.core.async.Pub = (function (){var obj11927 = {};return obj11927;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__11928_SHARP_){if(cljs.core.truth_(p1__11928_SHARP_.call(null,topic)))
{return p1__11928_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11928_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12053 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12053 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12054){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12054 = meta12054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12053.cljs$lang$type = true;
cljs.core.async.t12053.cljs$lang$ctorStr = "cljs.core.async/t12053";
cljs.core.async.t12053.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12053");
});})(mults,ensure_mult))
;
cljs.core.async.t12053.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12053.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12053.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12053.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12053.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12053.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12053.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12053.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12055){var self__ = this;
var _12055__$1 = this;return self__.meta12054;
});})(mults,ensure_mult))
;
cljs.core.async.t12053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12055,meta12054__$1){var self__ = this;
var _12055__$1 = this;return (new cljs.core.async.t12053(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12054__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12053 = ((function (mults,ensure_mult){
return (function __GT_t12053(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12054){return (new cljs.core.async.t12053(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12054));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12053(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8068__auto___12177 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8069__auto__ = (function (){var switch__8053__auto__ = (function (state_12129){var state_val_12130 = (state_12129[1]);if((state_val_12130 === 1))
{var state_12129__$1 = state_12129;var statearr_12131_12178 = state_12129__$1;(statearr_12131_12178[2] = null);
(statearr_12131_12178[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 2))
{var state_12129__$1 = state_12129;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12129__$1,4,ch);
} else
{if((state_val_12130 === 3))
{var inst_12127 = (state_12129[2]);var state_12129__$1 = state_12129;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12129__$1,inst_12127);
} else
{if((state_val_12130 === 4))
{var inst_12058 = (state_12129[7]);var inst_12058__$1 = (state_12129[2]);var inst_12059 = (inst_12058__$1 == null);var state_12129__$1 = (function (){var statearr_12132 = state_12129;(statearr_12132[7] = inst_12058__$1);
return statearr_12132;
})();if(cljs.core.truth_(inst_12059))
{var statearr_12133_12179 = state_12129__$1;(statearr_12133_12179[1] = 5);
} else
{var statearr_12134_12180 = state_12129__$1;(statearr_12134_12180[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 5))
{var inst_12065 = cljs.core.deref.call(null,mults);var inst_12066 = cljs.core.vals.call(null,inst_12065);var inst_12067 = cljs.core.seq.call(null,inst_12066);var inst_12068 = inst_12067;var inst_12069 = null;var inst_12070 = 0;var inst_12071 = 0;var state_12129__$1 = (function (){var statearr_12135 = state_12129;(statearr_12135[8] = inst_12071);
(statearr_12135[9] = inst_12069);
(statearr_12135[10] = inst_12068);
(statearr_12135[11] = inst_12070);
return statearr_12135;
})();var statearr_12136_12181 = state_12129__$1;(statearr_12136_12181[2] = null);
(statearr_12136_12181[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 6))
{var inst_12106 = (state_12129[12]);var inst_12108 = (state_12129[13]);var inst_12058 = (state_12129[7]);var inst_12106__$1 = topic_fn.call(null,inst_12058);var inst_12107 = cljs.core.deref.call(null,mults);var inst_12108__$1 = cljs.core.get.call(null,inst_12107,inst_12106__$1);var state_12129__$1 = (function (){var statearr_12137 = state_12129;(statearr_12137[12] = inst_12106__$1);
(statearr_12137[13] = inst_12108__$1);
return statearr_12137;
})();if(cljs.core.truth_(inst_12108__$1))
{var statearr_12138_12182 = state_12129__$1;(statearr_12138_12182[1] = 19);
} else
{var statearr_12139_12183 = state_12129__$1;(statearr_12139_12183[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 7))
{var inst_12125 = (state_12129[2]);var state_12129__$1 = state_12129;var statearr_12140_12184 = state_12129__$1;(statearr_12140_12184[2] = inst_12125);
(statearr_12140_12184[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 8))
{var inst_12071 = (state_12129[8]);var inst_12070 = (state_12129[11]);var inst_12073 = (inst_12071 < inst_12070);var inst_12074 = inst_12073;var state_12129__$1 = state_12129;if(cljs.core.truth_(inst_12074))
{var statearr_12144_12185 = state_12129__$1;(statearr_12144_12185[1] = 10);
} else
{var statearr_12145_12186 = state_12129__$1;(statearr_12145_12186[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 9))
{var inst_12104 = (state_12129[2]);var state_12129__$1 = state_12129;var statearr_12146_12187 = state_12129__$1;(statearr_12146_12187[2] = inst_12104);
(statearr_12146_12187[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 10))
{var inst_12071 = (state_12129[8]);var inst_12069 = (state_12129[9]);var inst_12068 = (state_12129[10]);var inst_12070 = (state_12129[11]);var inst_12076 = cljs.core._nth.call(null,inst_12069,inst_12071);var inst_12077 = cljs.core.async.muxch_STAR_.call(null,inst_12076);var inst_12078 = cljs.core.async.close_BANG_.call(null,inst_12077);var inst_12079 = (inst_12071 + 1);var tmp12141 = inst_12069;var tmp12142 = inst_12068;var tmp12143 = inst_12070;var inst_12068__$1 = tmp12142;var inst_12069__$1 = tmp12141;var inst_12070__$1 = tmp12143;var inst_12071__$1 = inst_12079;var state_12129__$1 = (function (){var statearr_12147 = state_12129;(statearr_12147[14] = inst_12078);
(statearr_12147[8] = inst_12071__$1);
(statearr_12147[9] = inst_12069__$1);
(statearr_12147[10] = inst_12068__$1);
(statearr_12147[11] = inst_12070__$1);
return statearr_12147;
})();var statearr_12148_12188 = state_12129__$1;(statearr_12148_12188[2] = null);
(statearr_12148_12188[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 11))
{var inst_12068 = (state_12129[10]);var inst_12082 = (state_12129[15]);var inst_12082__$1 = cljs.core.seq.call(null,inst_12068);var state_12129__$1 = (function (){var statearr_12149 = state_12129;(statearr_12149[15] = inst_12082__$1);
return statearr_12149;
})();if(inst_12082__$1)
{var statearr_12150_12189 = state_12129__$1;(statearr_12150_12189[1] = 13);
} else
{var statearr_12151_12190 = state_12129__$1;(statearr_12151_12190[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 12))
{var inst_12102 = (state_12129[2]);var state_12129__$1 = state_12129;var statearr_12152_12191 = state_12129__$1;(statearr_12152_12191[2] = inst_12102);
(statearr_12152_12191[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 13))
{var inst_12082 = (state_12129[15]);var inst_12084 = cljs.core.chunked_seq_QMARK_.call(null,inst_12082);var state_12129__$1 = state_12129;if(inst_12084)
{var statearr_12153_12192 = state_12129__$1;(statearr_12153_12192[1] = 16);
} else
{var statearr_12154_12193 = state_12129__$1;(statearr_12154_12193[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 14))
{var state_12129__$1 = state_12129;var statearr_12155_12194 = state_12129__$1;(statearr_12155_12194[2] = null);
(statearr_12155_12194[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 15))
{var inst_12100 = (state_12129[2]);var state_12129__$1 = state_12129;var statearr_12156_12195 = state_12129__$1;(statearr_12156_12195[2] = inst_12100);
(statearr_12156_12195[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 16))
{var inst_12082 = (state_12129[15]);var inst_12086 = cljs.core.chunk_first.call(null,inst_12082);var inst_12087 = cljs.core.chunk_rest.call(null,inst_12082);var inst_12088 = cljs.core.count.call(null,inst_12086);var inst_12068 = inst_12087;var inst_12069 = inst_12086;var inst_12070 = inst_12088;var inst_12071 = 0;var state_12129__$1 = (function (){var statearr_12157 = state_12129;(statearr_12157[8] = inst_12071);
(statearr_12157[9] = inst_12069);
(statearr_12157[10] = inst_12068);
(statearr_12157[11] = inst_12070);
return statearr_12157;
})();var statearr_12158_12196 = state_12129__$1;(statearr_12158_12196[2] = null);
(statearr_12158_12196[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 17))
{var inst_12082 = (state_12129[15]);var inst_12091 = cljs.core.first.call(null,inst_12082);var inst_12092 = cljs.core.async.muxch_STAR_.call(null,inst_12091);var inst_12093 = cljs.core.async.close_BANG_.call(null,inst_12092);var inst_12094 = cljs.core.next.call(null,inst_12082);var inst_12068 = inst_12094;var inst_12069 = null;var inst_12070 = 0;var inst_12071 = 0;var state_12129__$1 = (function (){var statearr_12159 = state_12129;(statearr_12159[8] = inst_12071);
(statearr_12159[9] = inst_12069);
(statearr_12159[10] = inst_12068);
(statearr_12159[11] = inst_12070);
(statearr_12159[16] = inst_12093);
return statearr_12159;
})();var statearr_12160_12197 = state_12129__$1;(statearr_12160_12197[2] = null);
(statearr_12160_12197[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 18))
{var inst_12097 = (state_12129[2]);var state_12129__$1 = state_12129;var statearr_12161_12198 = state_12129__$1;(statearr_12161_12198[2] = inst_12097);
(statearr_12161_12198[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 19))
{var state_12129__$1 = state_12129;var statearr_12162_12199 = state_12129__$1;(statearr_12162_12199[2] = null);
(statearr_12162_12199[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 20))
{var state_12129__$1 = state_12129;var statearr_12163_12200 = state_12129__$1;(statearr_12163_12200[2] = null);
(statearr_12163_12200[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 21))
{var inst_12122 = (state_12129[2]);var state_12129__$1 = (function (){var statearr_12164 = state_12129;(statearr_12164[17] = inst_12122);
return statearr_12164;
})();var statearr_12165_12201 = state_12129__$1;(statearr_12165_12201[2] = null);
(statearr_12165_12201[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 22))
{var inst_12119 = (state_12129[2]);var state_12129__$1 = state_12129;var statearr_12166_12202 = state_12129__$1;(statearr_12166_12202[2] = inst_12119);
(statearr_12166_12202[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 23))
{var inst_12106 = (state_12129[12]);var inst_12110 = (state_12129[2]);var inst_12111 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12106);var state_12129__$1 = (function (){var statearr_12167 = state_12129;(statearr_12167[18] = inst_12110);
return statearr_12167;
})();var statearr_12168_12203 = state_12129__$1;(statearr_12168_12203[2] = inst_12111);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12129__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12130 === 24))
{var inst_12108 = (state_12129[13]);var inst_12058 = (state_12129[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12129,23,Object,null,22);var inst_12115 = cljs.core.async.muxch_STAR_.call(null,inst_12108);var state_12129__$1 = state_12129;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12129__$1,25,inst_12115,inst_12058);
} else
{if((state_val_12130 === 25))
{var inst_12117 = (state_12129[2]);var state_12129__$1 = state_12129;var statearr_12169_12204 = state_12129__$1;(statearr_12169_12204[2] = inst_12117);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12129__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__8053__auto__){
return (function() {
var state_machine__8054__auto__ = null;
var state_machine__8054__auto____0 = (function (){var statearr_12173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12173[0] = state_machine__8054__auto__);
(statearr_12173[1] = 1);
return statearr_12173;
});
var state_machine__8054__auto____1 = (function (state_12129){while(true){
var ret_value__8055__auto__ = (function (){try{while(true){
var result__8056__auto__ = switch__8053__auto__.call(null,state_12129);if(cljs.core.keyword_identical_QMARK_.call(null,result__8056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8056__auto__;
}
break;
}
}catch (e12174){if((e12174 instanceof Object))
{var ex__8057__auto__ = e12174;var statearr_12175_12205 = state_12129;(statearr_12175_12205[5] = ex__8057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12129);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12174;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12206 = state_12129;
state_12129 = G__12206;
continue;
}
} else
{return ret_value__8055__auto__;
}
break;
}
});
state_machine__8054__auto__ = function(state_12129){
switch(arguments.length){
case 0:
return state_machine__8054__auto____0.call(this);
case 1:
return state_machine__8054__auto____1.call(this,state_12129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8054__auto____0;
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8054__auto____1;
return state_machine__8054__auto__;
})()
;})(switch__8053__auto__))
})();var state__8070__auto__ = (function (){var statearr_12176 = f__8069__auto__.call(null);(statearr_12176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8068__auto___12177);
return statearr_12176;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8070__auto__);
}));
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__8068__auto___12343 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8069__auto__ = (function (){var switch__8053__auto__ = (function (state_12313){var state_val_12314 = (state_12313[1]);if((state_val_12314 === 1))
{var state_12313__$1 = state_12313;var statearr_12315_12344 = state_12313__$1;(statearr_12315_12344[2] = null);
(statearr_12315_12344[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12314 === 2))
{var inst_12276 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12277 = 0;var state_12313__$1 = (function (){var statearr_12316 = state_12313;(statearr_12316[7] = inst_12277);
(statearr_12316[8] = inst_12276);
return statearr_12316;
})();var statearr_12317_12345 = state_12313__$1;(statearr_12317_12345[2] = null);
(statearr_12317_12345[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12314 === 3))
{var inst_12311 = (state_12313[2]);var state_12313__$1 = state_12313;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12313__$1,inst_12311);
} else
{if((state_val_12314 === 4))
{var inst_12277 = (state_12313[7]);var inst_12279 = (inst_12277 < cnt);var state_12313__$1 = state_12313;if(cljs.core.truth_(inst_12279))
{var statearr_12318_12346 = state_12313__$1;(statearr_12318_12346[1] = 6);
} else
{var statearr_12319_12347 = state_12313__$1;(statearr_12319_12347[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12314 === 5))
{var inst_12297 = (state_12313[2]);var state_12313__$1 = (function (){var statearr_12320 = state_12313;(statearr_12320[9] = inst_12297);
return statearr_12320;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12313__$1,12,dchan);
} else
{if((state_val_12314 === 6))
{var state_12313__$1 = state_12313;var statearr_12321_12348 = state_12313__$1;(statearr_12321_12348[2] = null);
(statearr_12321_12348[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12314 === 7))
{var state_12313__$1 = state_12313;var statearr_12322_12349 = state_12313__$1;(statearr_12322_12349[2] = null);
(statearr_12322_12349[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12314 === 8))
{var inst_12295 = (state_12313[2]);var state_12313__$1 = state_12313;var statearr_12323_12350 = state_12313__$1;(statearr_12323_12350[2] = inst_12295);
(statearr_12323_12350[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12314 === 9))
{var inst_12277 = (state_12313[7]);var inst_12290 = (state_12313[2]);var inst_12291 = (inst_12277 + 1);var inst_12277__$1 = inst_12291;var state_12313__$1 = (function (){var statearr_12324 = state_12313;(statearr_12324[10] = inst_12290);
(statearr_12324[7] = inst_12277__$1);
return statearr_12324;
})();var statearr_12325_12351 = state_12313__$1;(statearr_12325_12351[2] = null);
(statearr_12325_12351[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12314 === 10))
{var inst_12281 = (state_12313[2]);var inst_12282 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12313__$1 = (function (){var statearr_12326 = state_12313;(statearr_12326[11] = inst_12281);
return statearr_12326;
})();var statearr_12327_12352 = state_12313__$1;(statearr_12327_12352[2] = inst_12282);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12313__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12314 === 11))
{var inst_12277 = (state_12313[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12313,10,Object,null,9);var inst_12286 = chs__$1.call(null,inst_12277);var inst_12287 = done.call(null,inst_12277);var inst_12288 = cljs.core.async.take_BANG_.call(null,inst_12286,inst_12287);var state_12313__$1 = state_12313;var statearr_12328_12353 = state_12313__$1;(statearr_12328_12353[2] = inst_12288);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12313__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12314 === 12))
{var inst_12299 = (state_12313[12]);var inst_12299__$1 = (state_12313[2]);var inst_12300 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12299__$1);var state_12313__$1 = (function (){var statearr_12329 = state_12313;(statearr_12329[12] = inst_12299__$1);
return statearr_12329;
})();if(cljs.core.truth_(inst_12300))
{var statearr_12330_12354 = state_12313__$1;(statearr_12330_12354[1] = 13);
} else
{var statearr_12331_12355 = state_12313__$1;(statearr_12331_12355[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12314 === 13))
{var inst_12302 = cljs.core.async.close_BANG_.call(null,out);var state_12313__$1 = state_12313;var statearr_12332_12356 = state_12313__$1;(statearr_12332_12356[2] = inst_12302);
(statearr_12332_12356[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12314 === 14))
{var inst_12299 = (state_12313[12]);var inst_12304 = cljs.core.apply.call(null,f,inst_12299);var state_12313__$1 = state_12313;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12313__$1,16,out,inst_12304);
} else
{if((state_val_12314 === 15))
{var inst_12309 = (state_12313[2]);var state_12313__$1 = state_12313;var statearr_12333_12357 = state_12313__$1;(statearr_12333_12357[2] = inst_12309);
(statearr_12333_12357[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12314 === 16))
{var inst_12306 = (state_12313[2]);var state_12313__$1 = (function (){var statearr_12334 = state_12313;(statearr_12334[13] = inst_12306);
return statearr_12334;
})();var statearr_12335_12358 = state_12313__$1;(statearr_12335_12358[2] = null);
(statearr_12335_12358[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__8053__auto__){
return (function() {
var state_machine__8054__auto__ = null;
var state_machine__8054__auto____0 = (function (){var statearr_12339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12339[0] = state_machine__8054__auto__);
(statearr_12339[1] = 1);
return statearr_12339;
});
var state_machine__8054__auto____1 = (function (state_12313){while(true){
var ret_value__8055__auto__ = (function (){try{while(true){
var result__8056__auto__ = switch__8053__auto__.call(null,state_12313);if(cljs.core.keyword_identical_QMARK_.call(null,result__8056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8056__auto__;
}
break;
}
}catch (e12340){if((e12340 instanceof Object))
{var ex__8057__auto__ = e12340;var statearr_12341_12359 = state_12313;(statearr_12341_12359[5] = ex__8057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12313);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12340;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12360 = state_12313;
state_12313 = G__12360;
continue;
}
} else
{return ret_value__8055__auto__;
}
break;
}
});
state_machine__8054__auto__ = function(state_12313){
switch(arguments.length){
case 0:
return state_machine__8054__auto____0.call(this);
case 1:
return state_machine__8054__auto____1.call(this,state_12313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8054__auto____0;
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8054__auto____1;
return state_machine__8054__auto__;
})()
;})(switch__8053__auto__))
})();var state__8070__auto__ = (function (){var statearr_12342 = f__8069__auto__.call(null);(statearr_12342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8068__auto___12343);
return statearr_12342;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8070__auto__);
}));
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8068__auto___12468 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8069__auto__ = (function (){var switch__8053__auto__ = (function (state_12444){var state_val_12445 = (state_12444[1]);if((state_val_12445 === 1))
{var inst_12415 = cljs.core.vec.call(null,chs);var inst_12416 = inst_12415;var state_12444__$1 = (function (){var statearr_12446 = state_12444;(statearr_12446[7] = inst_12416);
return statearr_12446;
})();var statearr_12447_12469 = state_12444__$1;(statearr_12447_12469[2] = null);
(statearr_12447_12469[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12445 === 2))
{var inst_12416 = (state_12444[7]);var inst_12418 = cljs.core.count.call(null,inst_12416);var inst_12419 = (inst_12418 > 0);var state_12444__$1 = state_12444;if(cljs.core.truth_(inst_12419))
{var statearr_12448_12470 = state_12444__$1;(statearr_12448_12470[1] = 4);
} else
{var statearr_12449_12471 = state_12444__$1;(statearr_12449_12471[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12445 === 3))
{var inst_12442 = (state_12444[2]);var state_12444__$1 = state_12444;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12444__$1,inst_12442);
} else
{if((state_val_12445 === 4))
{var inst_12416 = (state_12444[7]);var state_12444__$1 = state_12444;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12444__$1,7,inst_12416);
} else
{if((state_val_12445 === 5))
{var inst_12438 = cljs.core.async.close_BANG_.call(null,out);var state_12444__$1 = state_12444;var statearr_12450_12472 = state_12444__$1;(statearr_12450_12472[2] = inst_12438);
(statearr_12450_12472[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12445 === 6))
{var inst_12440 = (state_12444[2]);var state_12444__$1 = state_12444;var statearr_12451_12473 = state_12444__$1;(statearr_12451_12473[2] = inst_12440);
(statearr_12451_12473[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12445 === 7))
{var inst_12424 = (state_12444[8]);var inst_12423 = (state_12444[9]);var inst_12423__$1 = (state_12444[2]);var inst_12424__$1 = cljs.core.nth.call(null,inst_12423__$1,0,null);var inst_12425 = cljs.core.nth.call(null,inst_12423__$1,1,null);var inst_12426 = (inst_12424__$1 == null);var state_12444__$1 = (function (){var statearr_12452 = state_12444;(statearr_12452[8] = inst_12424__$1);
(statearr_12452[10] = inst_12425);
(statearr_12452[9] = inst_12423__$1);
return statearr_12452;
})();if(cljs.core.truth_(inst_12426))
{var statearr_12453_12474 = state_12444__$1;(statearr_12453_12474[1] = 8);
} else
{var statearr_12454_12475 = state_12444__$1;(statearr_12454_12475[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12445 === 8))
{var inst_12424 = (state_12444[8]);var inst_12425 = (state_12444[10]);var inst_12423 = (state_12444[9]);var inst_12416 = (state_12444[7]);var inst_12428 = (function (){var c = inst_12425;var v = inst_12424;var vec__12421 = inst_12423;var cs = inst_12416;return ((function (c,v,vec__12421,cs,inst_12424,inst_12425,inst_12423,inst_12416,state_val_12445){
return (function (p1__12361_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12361_SHARP_);
});
;})(c,v,vec__12421,cs,inst_12424,inst_12425,inst_12423,inst_12416,state_val_12445))
})();var inst_12429 = cljs.core.filterv.call(null,inst_12428,inst_12416);var inst_12416__$1 = inst_12429;var state_12444__$1 = (function (){var statearr_12455 = state_12444;(statearr_12455[7] = inst_12416__$1);
return statearr_12455;
})();var statearr_12456_12476 = state_12444__$1;(statearr_12456_12476[2] = null);
(statearr_12456_12476[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12445 === 9))
{var inst_12424 = (state_12444[8]);var state_12444__$1 = state_12444;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12444__$1,11,out,inst_12424);
} else
{if((state_val_12445 === 10))
{var inst_12436 = (state_12444[2]);var state_12444__$1 = state_12444;var statearr_12458_12477 = state_12444__$1;(statearr_12458_12477[2] = inst_12436);
(statearr_12458_12477[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12445 === 11))
{var inst_12416 = (state_12444[7]);var inst_12433 = (state_12444[2]);var tmp12457 = inst_12416;var inst_12416__$1 = tmp12457;var state_12444__$1 = (function (){var statearr_12459 = state_12444;(statearr_12459[11] = inst_12433);
(statearr_12459[7] = inst_12416__$1);
return statearr_12459;
})();var statearr_12460_12478 = state_12444__$1;(statearr_12460_12478[2] = null);
(statearr_12460_12478[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__8053__auto__){
return (function() {
var state_machine__8054__auto__ = null;
var state_machine__8054__auto____0 = (function (){var statearr_12464 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12464[0] = state_machine__8054__auto__);
(statearr_12464[1] = 1);
return statearr_12464;
});
var state_machine__8054__auto____1 = (function (state_12444){while(true){
var ret_value__8055__auto__ = (function (){try{while(true){
var result__8056__auto__ = switch__8053__auto__.call(null,state_12444);if(cljs.core.keyword_identical_QMARK_.call(null,result__8056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8056__auto__;
}
break;
}
}catch (e12465){if((e12465 instanceof Object))
{var ex__8057__auto__ = e12465;var statearr_12466_12479 = state_12444;(statearr_12466_12479[5] = ex__8057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12444);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12465;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12480 = state_12444;
state_12444 = G__12480;
continue;
}
} else
{return ret_value__8055__auto__;
}
break;
}
});
state_machine__8054__auto__ = function(state_12444){
switch(arguments.length){
case 0:
return state_machine__8054__auto____0.call(this);
case 1:
return state_machine__8054__auto____1.call(this,state_12444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8054__auto____0;
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8054__auto____1;
return state_machine__8054__auto__;
})()
;})(switch__8053__auto__))
})();var state__8070__auto__ = (function (){var statearr_12467 = f__8069__auto__.call(null);(statearr_12467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8068__auto___12468);
return statearr_12467;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8070__auto__);
}));
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8068__auto___12573 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8069__auto__ = (function (){var switch__8053__auto__ = (function (state_12550){var state_val_12551 = (state_12550[1]);if((state_val_12551 === 1))
{var inst_12527 = 0;var state_12550__$1 = (function (){var statearr_12552 = state_12550;(statearr_12552[7] = inst_12527);
return statearr_12552;
})();var statearr_12553_12574 = state_12550__$1;(statearr_12553_12574[2] = null);
(statearr_12553_12574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12551 === 2))
{var inst_12527 = (state_12550[7]);var inst_12529 = (inst_12527 < n);var state_12550__$1 = state_12550;if(cljs.core.truth_(inst_12529))
{var statearr_12554_12575 = state_12550__$1;(statearr_12554_12575[1] = 4);
} else
{var statearr_12555_12576 = state_12550__$1;(statearr_12555_12576[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12551 === 3))
{var inst_12547 = (state_12550[2]);var inst_12548 = cljs.core.async.close_BANG_.call(null,out);var state_12550__$1 = (function (){var statearr_12556 = state_12550;(statearr_12556[8] = inst_12547);
return statearr_12556;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12550__$1,inst_12548);
} else
{if((state_val_12551 === 4))
{var state_12550__$1 = state_12550;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12550__$1,7,ch);
} else
{if((state_val_12551 === 5))
{var state_12550__$1 = state_12550;var statearr_12557_12577 = state_12550__$1;(statearr_12557_12577[2] = null);
(statearr_12557_12577[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12551 === 6))
{var inst_12545 = (state_12550[2]);var state_12550__$1 = state_12550;var statearr_12558_12578 = state_12550__$1;(statearr_12558_12578[2] = inst_12545);
(statearr_12558_12578[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12551 === 7))
{var inst_12532 = (state_12550[9]);var inst_12532__$1 = (state_12550[2]);var inst_12533 = (inst_12532__$1 == null);var inst_12534 = cljs.core.not.call(null,inst_12533);var state_12550__$1 = (function (){var statearr_12559 = state_12550;(statearr_12559[9] = inst_12532__$1);
return statearr_12559;
})();if(inst_12534)
{var statearr_12560_12579 = state_12550__$1;(statearr_12560_12579[1] = 8);
} else
{var statearr_12561_12580 = state_12550__$1;(statearr_12561_12580[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12551 === 8))
{var inst_12532 = (state_12550[9]);var state_12550__$1 = state_12550;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12550__$1,11,out,inst_12532);
} else
{if((state_val_12551 === 9))
{var state_12550__$1 = state_12550;var statearr_12562_12581 = state_12550__$1;(statearr_12562_12581[2] = null);
(statearr_12562_12581[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12551 === 10))
{var inst_12542 = (state_12550[2]);var state_12550__$1 = state_12550;var statearr_12563_12582 = state_12550__$1;(statearr_12563_12582[2] = inst_12542);
(statearr_12563_12582[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12551 === 11))
{var inst_12527 = (state_12550[7]);var inst_12537 = (state_12550[2]);var inst_12538 = (inst_12527 + 1);var inst_12527__$1 = inst_12538;var state_12550__$1 = (function (){var statearr_12564 = state_12550;(statearr_12564[7] = inst_12527__$1);
(statearr_12564[10] = inst_12537);
return statearr_12564;
})();var statearr_12565_12583 = state_12550__$1;(statearr_12565_12583[2] = null);
(statearr_12565_12583[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__8053__auto__){
return (function() {
var state_machine__8054__auto__ = null;
var state_machine__8054__auto____0 = (function (){var statearr_12569 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12569[0] = state_machine__8054__auto__);
(statearr_12569[1] = 1);
return statearr_12569;
});
var state_machine__8054__auto____1 = (function (state_12550){while(true){
var ret_value__8055__auto__ = (function (){try{while(true){
var result__8056__auto__ = switch__8053__auto__.call(null,state_12550);if(cljs.core.keyword_identical_QMARK_.call(null,result__8056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8056__auto__;
}
break;
}
}catch (e12570){if((e12570 instanceof Object))
{var ex__8057__auto__ = e12570;var statearr_12571_12584 = state_12550;(statearr_12571_12584[5] = ex__8057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12550);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12570;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12585 = state_12550;
state_12550 = G__12585;
continue;
}
} else
{return ret_value__8055__auto__;
}
break;
}
});
state_machine__8054__auto__ = function(state_12550){
switch(arguments.length){
case 0:
return state_machine__8054__auto____0.call(this);
case 1:
return state_machine__8054__auto____1.call(this,state_12550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8054__auto____0;
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8054__auto____1;
return state_machine__8054__auto__;
})()
;})(switch__8053__auto__))
})();var state__8070__auto__ = (function (){var statearr_12572 = f__8069__auto__.call(null);(statearr_12572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8068__auto___12573);
return statearr_12572;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8070__auto__);
}));
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
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8068__auto___12682 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8069__auto__ = (function (){var switch__8053__auto__ = (function (state_12657){var state_val_12658 = (state_12657[1]);if((state_val_12658 === 1))
{var inst_12634 = null;var state_12657__$1 = (function (){var statearr_12659 = state_12657;(statearr_12659[7] = inst_12634);
return statearr_12659;
})();var statearr_12660_12683 = state_12657__$1;(statearr_12660_12683[2] = null);
(statearr_12660_12683[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12658 === 2))
{var state_12657__$1 = state_12657;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12657__$1,4,ch);
} else
{if((state_val_12658 === 3))
{var inst_12654 = (state_12657[2]);var inst_12655 = cljs.core.async.close_BANG_.call(null,out);var state_12657__$1 = (function (){var statearr_12661 = state_12657;(statearr_12661[8] = inst_12654);
return statearr_12661;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12657__$1,inst_12655);
} else
{if((state_val_12658 === 4))
{var inst_12637 = (state_12657[9]);var inst_12637__$1 = (state_12657[2]);var inst_12638 = (inst_12637__$1 == null);var inst_12639 = cljs.core.not.call(null,inst_12638);var state_12657__$1 = (function (){var statearr_12662 = state_12657;(statearr_12662[9] = inst_12637__$1);
return statearr_12662;
})();if(inst_12639)
{var statearr_12663_12684 = state_12657__$1;(statearr_12663_12684[1] = 5);
} else
{var statearr_12664_12685 = state_12657__$1;(statearr_12664_12685[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12658 === 5))
{var inst_12637 = (state_12657[9]);var inst_12634 = (state_12657[7]);var inst_12641 = cljs.core._EQ_.call(null,inst_12637,inst_12634);var state_12657__$1 = state_12657;if(inst_12641)
{var statearr_12665_12686 = state_12657__$1;(statearr_12665_12686[1] = 8);
} else
{var statearr_12666_12687 = state_12657__$1;(statearr_12666_12687[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12658 === 6))
{var state_12657__$1 = state_12657;var statearr_12668_12688 = state_12657__$1;(statearr_12668_12688[2] = null);
(statearr_12668_12688[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12658 === 7))
{var inst_12652 = (state_12657[2]);var state_12657__$1 = state_12657;var statearr_12669_12689 = state_12657__$1;(statearr_12669_12689[2] = inst_12652);
(statearr_12669_12689[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12658 === 8))
{var inst_12634 = (state_12657[7]);var tmp12667 = inst_12634;var inst_12634__$1 = tmp12667;var state_12657__$1 = (function (){var statearr_12670 = state_12657;(statearr_12670[7] = inst_12634__$1);
return statearr_12670;
})();var statearr_12671_12690 = state_12657__$1;(statearr_12671_12690[2] = null);
(statearr_12671_12690[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12658 === 9))
{var inst_12637 = (state_12657[9]);var state_12657__$1 = state_12657;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12657__$1,11,out,inst_12637);
} else
{if((state_val_12658 === 10))
{var inst_12649 = (state_12657[2]);var state_12657__$1 = state_12657;var statearr_12672_12691 = state_12657__$1;(statearr_12672_12691[2] = inst_12649);
(statearr_12672_12691[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12658 === 11))
{var inst_12637 = (state_12657[9]);var inst_12646 = (state_12657[2]);var inst_12634 = inst_12637;var state_12657__$1 = (function (){var statearr_12673 = state_12657;(statearr_12673[10] = inst_12646);
(statearr_12673[7] = inst_12634);
return statearr_12673;
})();var statearr_12674_12692 = state_12657__$1;(statearr_12674_12692[2] = null);
(statearr_12674_12692[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__8053__auto__){
return (function() {
var state_machine__8054__auto__ = null;
var state_machine__8054__auto____0 = (function (){var statearr_12678 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12678[0] = state_machine__8054__auto__);
(statearr_12678[1] = 1);
return statearr_12678;
});
var state_machine__8054__auto____1 = (function (state_12657){while(true){
var ret_value__8055__auto__ = (function (){try{while(true){
var result__8056__auto__ = switch__8053__auto__.call(null,state_12657);if(cljs.core.keyword_identical_QMARK_.call(null,result__8056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8056__auto__;
}
break;
}
}catch (e12679){if((e12679 instanceof Object))
{var ex__8057__auto__ = e12679;var statearr_12680_12693 = state_12657;(statearr_12680_12693[5] = ex__8057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12657);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12679;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12694 = state_12657;
state_12657 = G__12694;
continue;
}
} else
{return ret_value__8055__auto__;
}
break;
}
});
state_machine__8054__auto__ = function(state_12657){
switch(arguments.length){
case 0:
return state_machine__8054__auto____0.call(this);
case 1:
return state_machine__8054__auto____1.call(this,state_12657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8054__auto____0;
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8054__auto____1;
return state_machine__8054__auto__;
})()
;})(switch__8053__auto__))
})();var state__8070__auto__ = (function (){var statearr_12681 = f__8069__auto__.call(null);(statearr_12681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8068__auto___12682);
return statearr_12681;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8070__auto__);
}));
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
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8068__auto___12829 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8069__auto__ = (function (){var switch__8053__auto__ = (function (state_12799){var state_val_12800 = (state_12799[1]);if((state_val_12800 === 1))
{var inst_12762 = (new Array(n));var inst_12763 = inst_12762;var inst_12764 = 0;var state_12799__$1 = (function (){var statearr_12801 = state_12799;(statearr_12801[7] = inst_12764);
(statearr_12801[8] = inst_12763);
return statearr_12801;
})();var statearr_12802_12830 = state_12799__$1;(statearr_12802_12830[2] = null);
(statearr_12802_12830[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12800 === 2))
{var state_12799__$1 = state_12799;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12799__$1,4,ch);
} else
{if((state_val_12800 === 3))
{var inst_12797 = (state_12799[2]);var state_12799__$1 = state_12799;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12799__$1,inst_12797);
} else
{if((state_val_12800 === 4))
{var inst_12767 = (state_12799[9]);var inst_12767__$1 = (state_12799[2]);var inst_12768 = (inst_12767__$1 == null);var inst_12769 = cljs.core.not.call(null,inst_12768);var state_12799__$1 = (function (){var statearr_12803 = state_12799;(statearr_12803[9] = inst_12767__$1);
return statearr_12803;
})();if(inst_12769)
{var statearr_12804_12831 = state_12799__$1;(statearr_12804_12831[1] = 5);
} else
{var statearr_12805_12832 = state_12799__$1;(statearr_12805_12832[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12800 === 5))
{var inst_12767 = (state_12799[9]);var inst_12772 = (state_12799[10]);var inst_12764 = (state_12799[7]);var inst_12763 = (state_12799[8]);var inst_12771 = (inst_12763[inst_12764] = inst_12767);var inst_12772__$1 = (inst_12764 + 1);var inst_12773 = (inst_12772__$1 < n);var state_12799__$1 = (function (){var statearr_12806 = state_12799;(statearr_12806[10] = inst_12772__$1);
(statearr_12806[11] = inst_12771);
return statearr_12806;
})();if(cljs.core.truth_(inst_12773))
{var statearr_12807_12833 = state_12799__$1;(statearr_12807_12833[1] = 8);
} else
{var statearr_12808_12834 = state_12799__$1;(statearr_12808_12834[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12800 === 6))
{var inst_12764 = (state_12799[7]);var inst_12785 = (inst_12764 > 0);var state_12799__$1 = state_12799;if(cljs.core.truth_(inst_12785))
{var statearr_12810_12835 = state_12799__$1;(statearr_12810_12835[1] = 12);
} else
{var statearr_12811_12836 = state_12799__$1;(statearr_12811_12836[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12800 === 7))
{var inst_12795 = (state_12799[2]);var state_12799__$1 = state_12799;var statearr_12812_12837 = state_12799__$1;(statearr_12812_12837[2] = inst_12795);
(statearr_12812_12837[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12800 === 8))
{var inst_12772 = (state_12799[10]);var inst_12763 = (state_12799[8]);var tmp12809 = inst_12763;var inst_12763__$1 = tmp12809;var inst_12764 = inst_12772;var state_12799__$1 = (function (){var statearr_12813 = state_12799;(statearr_12813[7] = inst_12764);
(statearr_12813[8] = inst_12763__$1);
return statearr_12813;
})();var statearr_12814_12838 = state_12799__$1;(statearr_12814_12838[2] = null);
(statearr_12814_12838[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12800 === 9))
{var inst_12763 = (state_12799[8]);var inst_12777 = cljs.core.vec.call(null,inst_12763);var state_12799__$1 = state_12799;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12799__$1,11,out,inst_12777);
} else
{if((state_val_12800 === 10))
{var inst_12783 = (state_12799[2]);var state_12799__$1 = state_12799;var statearr_12815_12839 = state_12799__$1;(statearr_12815_12839[2] = inst_12783);
(statearr_12815_12839[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12800 === 11))
{var inst_12779 = (state_12799[2]);var inst_12780 = (new Array(n));var inst_12763 = inst_12780;var inst_12764 = 0;var state_12799__$1 = (function (){var statearr_12816 = state_12799;(statearr_12816[12] = inst_12779);
(statearr_12816[7] = inst_12764);
(statearr_12816[8] = inst_12763);
return statearr_12816;
})();var statearr_12817_12840 = state_12799__$1;(statearr_12817_12840[2] = null);
(statearr_12817_12840[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12800 === 12))
{var inst_12763 = (state_12799[8]);var inst_12787 = cljs.core.vec.call(null,inst_12763);var state_12799__$1 = state_12799;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12799__$1,15,out,inst_12787);
} else
{if((state_val_12800 === 13))
{var state_12799__$1 = state_12799;var statearr_12818_12841 = state_12799__$1;(statearr_12818_12841[2] = null);
(statearr_12818_12841[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12800 === 14))
{var inst_12792 = (state_12799[2]);var inst_12793 = cljs.core.async.close_BANG_.call(null,out);var state_12799__$1 = (function (){var statearr_12819 = state_12799;(statearr_12819[13] = inst_12792);
return statearr_12819;
})();var statearr_12820_12842 = state_12799__$1;(statearr_12820_12842[2] = inst_12793);
(statearr_12820_12842[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12800 === 15))
{var inst_12789 = (state_12799[2]);var state_12799__$1 = state_12799;var statearr_12821_12843 = state_12799__$1;(statearr_12821_12843[2] = inst_12789);
(statearr_12821_12843[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__8053__auto__){
return (function() {
var state_machine__8054__auto__ = null;
var state_machine__8054__auto____0 = (function (){var statearr_12825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12825[0] = state_machine__8054__auto__);
(statearr_12825[1] = 1);
return statearr_12825;
});
var state_machine__8054__auto____1 = (function (state_12799){while(true){
var ret_value__8055__auto__ = (function (){try{while(true){
var result__8056__auto__ = switch__8053__auto__.call(null,state_12799);if(cljs.core.keyword_identical_QMARK_.call(null,result__8056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8056__auto__;
}
break;
}
}catch (e12826){if((e12826 instanceof Object))
{var ex__8057__auto__ = e12826;var statearr_12827_12844 = state_12799;(statearr_12827_12844[5] = ex__8057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12799);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12826;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12845 = state_12799;
state_12799 = G__12845;
continue;
}
} else
{return ret_value__8055__auto__;
}
break;
}
});
state_machine__8054__auto__ = function(state_12799){
switch(arguments.length){
case 0:
return state_machine__8054__auto____0.call(this);
case 1:
return state_machine__8054__auto____1.call(this,state_12799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8054__auto____0;
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8054__auto____1;
return state_machine__8054__auto__;
})()
;})(switch__8053__auto__))
})();var state__8070__auto__ = (function (){var statearr_12828 = f__8069__auto__.call(null);(statearr_12828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8068__auto___12829);
return statearr_12828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8070__auto__);
}));
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
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8068__auto___12988 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8069__auto__ = (function (){var switch__8053__auto__ = (function (state_12958){var state_val_12959 = (state_12958[1]);if((state_val_12959 === 1))
{var inst_12917 = [];var inst_12918 = inst_12917;var inst_12919 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12958__$1 = (function (){var statearr_12960 = state_12958;(statearr_12960[7] = inst_12918);
(statearr_12960[8] = inst_12919);
return statearr_12960;
})();var statearr_12961_12989 = state_12958__$1;(statearr_12961_12989[2] = null);
(statearr_12961_12989[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12959 === 2))
{var state_12958__$1 = state_12958;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12958__$1,4,ch);
} else
{if((state_val_12959 === 3))
{var inst_12956 = (state_12958[2]);var state_12958__$1 = state_12958;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12958__$1,inst_12956);
} else
{if((state_val_12959 === 4))
{var inst_12922 = (state_12958[9]);var inst_12922__$1 = (state_12958[2]);var inst_12923 = (inst_12922__$1 == null);var inst_12924 = cljs.core.not.call(null,inst_12923);var state_12958__$1 = (function (){var statearr_12962 = state_12958;(statearr_12962[9] = inst_12922__$1);
return statearr_12962;
})();if(inst_12924)
{var statearr_12963_12990 = state_12958__$1;(statearr_12963_12990[1] = 5);
} else
{var statearr_12964_12991 = state_12958__$1;(statearr_12964_12991[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12959 === 5))
{var inst_12919 = (state_12958[8]);var inst_12926 = (state_12958[10]);var inst_12922 = (state_12958[9]);var inst_12926__$1 = f.call(null,inst_12922);var inst_12927 = cljs.core._EQ_.call(null,inst_12926__$1,inst_12919);var inst_12928 = cljs.core.keyword_identical_QMARK_.call(null,inst_12919,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12929 = (inst_12927) || (inst_12928);var state_12958__$1 = (function (){var statearr_12965 = state_12958;(statearr_12965[10] = inst_12926__$1);
return statearr_12965;
})();if(cljs.core.truth_(inst_12929))
{var statearr_12966_12992 = state_12958__$1;(statearr_12966_12992[1] = 8);
} else
{var statearr_12967_12993 = state_12958__$1;(statearr_12967_12993[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12959 === 6))
{var inst_12918 = (state_12958[7]);var inst_12943 = inst_12918.length;var inst_12944 = (inst_12943 > 0);var state_12958__$1 = state_12958;if(cljs.core.truth_(inst_12944))
{var statearr_12969_12994 = state_12958__$1;(statearr_12969_12994[1] = 12);
} else
{var statearr_12970_12995 = state_12958__$1;(statearr_12970_12995[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12959 === 7))
{var inst_12954 = (state_12958[2]);var state_12958__$1 = state_12958;var statearr_12971_12996 = state_12958__$1;(statearr_12971_12996[2] = inst_12954);
(statearr_12971_12996[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12959 === 8))
{var inst_12918 = (state_12958[7]);var inst_12926 = (state_12958[10]);var inst_12922 = (state_12958[9]);var inst_12931 = inst_12918.push(inst_12922);var tmp12968 = inst_12918;var inst_12918__$1 = tmp12968;var inst_12919 = inst_12926;var state_12958__$1 = (function (){var statearr_12972 = state_12958;(statearr_12972[7] = inst_12918__$1);
(statearr_12972[8] = inst_12919);
(statearr_12972[11] = inst_12931);
return statearr_12972;
})();var statearr_12973_12997 = state_12958__$1;(statearr_12973_12997[2] = null);
(statearr_12973_12997[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12959 === 9))
{var inst_12918 = (state_12958[7]);var inst_12934 = cljs.core.vec.call(null,inst_12918);var state_12958__$1 = state_12958;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12958__$1,11,out,inst_12934);
} else
{if((state_val_12959 === 10))
{var inst_12941 = (state_12958[2]);var state_12958__$1 = state_12958;var statearr_12974_12998 = state_12958__$1;(statearr_12974_12998[2] = inst_12941);
(statearr_12974_12998[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12959 === 11))
{var inst_12926 = (state_12958[10]);var inst_12922 = (state_12958[9]);var inst_12936 = (state_12958[2]);var inst_12937 = [];var inst_12938 = inst_12937.push(inst_12922);var inst_12918 = inst_12937;var inst_12919 = inst_12926;var state_12958__$1 = (function (){var statearr_12975 = state_12958;(statearr_12975[7] = inst_12918);
(statearr_12975[8] = inst_12919);
(statearr_12975[12] = inst_12936);
(statearr_12975[13] = inst_12938);
return statearr_12975;
})();var statearr_12976_12999 = state_12958__$1;(statearr_12976_12999[2] = null);
(statearr_12976_12999[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12959 === 12))
{var inst_12918 = (state_12958[7]);var inst_12946 = cljs.core.vec.call(null,inst_12918);var state_12958__$1 = state_12958;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12958__$1,15,out,inst_12946);
} else
{if((state_val_12959 === 13))
{var state_12958__$1 = state_12958;var statearr_12977_13000 = state_12958__$1;(statearr_12977_13000[2] = null);
(statearr_12977_13000[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12959 === 14))
{var inst_12951 = (state_12958[2]);var inst_12952 = cljs.core.async.close_BANG_.call(null,out);var state_12958__$1 = (function (){var statearr_12978 = state_12958;(statearr_12978[14] = inst_12951);
return statearr_12978;
})();var statearr_12979_13001 = state_12958__$1;(statearr_12979_13001[2] = inst_12952);
(statearr_12979_13001[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12959 === 15))
{var inst_12948 = (state_12958[2]);var state_12958__$1 = state_12958;var statearr_12980_13002 = state_12958__$1;(statearr_12980_13002[2] = inst_12948);
(statearr_12980_13002[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__8053__auto__){
return (function() {
var state_machine__8054__auto__ = null;
var state_machine__8054__auto____0 = (function (){var statearr_12984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12984[0] = state_machine__8054__auto__);
(statearr_12984[1] = 1);
return statearr_12984;
});
var state_machine__8054__auto____1 = (function (state_12958){while(true){
var ret_value__8055__auto__ = (function (){try{while(true){
var result__8056__auto__ = switch__8053__auto__.call(null,state_12958);if(cljs.core.keyword_identical_QMARK_.call(null,result__8056__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8056__auto__;
}
break;
}
}catch (e12985){if((e12985 instanceof Object))
{var ex__8057__auto__ = e12985;var statearr_12986_13003 = state_12958;(statearr_12986_13003[5] = ex__8057__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12958);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12985;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8055__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13004 = state_12958;
state_12958 = G__13004;
continue;
}
} else
{return ret_value__8055__auto__;
}
break;
}
});
state_machine__8054__auto__ = function(state_12958){
switch(arguments.length){
case 0:
return state_machine__8054__auto____0.call(this);
case 1:
return state_machine__8054__auto____1.call(this,state_12958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8054__auto____0;
state_machine__8054__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8054__auto____1;
return state_machine__8054__auto__;
})()
;})(switch__8053__auto__))
})();var state__8070__auto__ = (function (){var statearr_12987 = f__8069__auto__.call(null);(statearr_12987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8068__auto___12988);
return statearr_12987;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8070__auto__);
}));
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