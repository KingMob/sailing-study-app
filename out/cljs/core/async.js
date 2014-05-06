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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10516 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10516 = (function (f,fn_handler,meta10517){
this.f = f;
this.fn_handler = fn_handler;
this.meta10517 = meta10517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10516.cljs$lang$type = true;
cljs.core.async.t10516.cljs$lang$ctorStr = "cljs.core.async/t10516";
cljs.core.async.t10516.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10516");
});
cljs.core.async.t10516.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10516.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10516.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10518){var self__ = this;
var _10518__$1 = this;return self__.meta10517;
});
cljs.core.async.t10516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10518,meta10517__$1){var self__ = this;
var _10518__$1 = this;return (new cljs.core.async.t10516(self__.f,self__.fn_handler,meta10517__$1));
});
cljs.core.async.__GT_t10516 = (function __GT_t10516(f__$1,fn_handler__$1,meta10517){return (new cljs.core.async.t10516(f__$1,fn_handler__$1,meta10517));
});
}
return (new cljs.core.async.t10516(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10520 = buff;if(G__10520)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__10520.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10520.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10520);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10520);
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
{var val_10521 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10521);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10521);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___10522 = n;var x_10523 = 0;while(true){
if((x_10523 < n__4291__auto___10522))
{(a[x_10523] = 0);
{
var G__10524 = (x_10523 + 1);
x_10523 = G__10524;
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
var G__10525 = (i + 1);
i = G__10525;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10529 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10529 = (function (flag,alt_flag,meta10530){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10530 = meta10530;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10529.cljs$lang$type = true;
cljs.core.async.t10529.cljs$lang$ctorStr = "cljs.core.async/t10529";
cljs.core.async.t10529.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10529");
});
cljs.core.async.t10529.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10529.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10529.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10531){var self__ = this;
var _10531__$1 = this;return self__.meta10530;
});
cljs.core.async.t10529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10531,meta10530__$1){var self__ = this;
var _10531__$1 = this;return (new cljs.core.async.t10529(self__.flag,self__.alt_flag,meta10530__$1));
});
cljs.core.async.__GT_t10529 = (function __GT_t10529(flag__$1,alt_flag__$1,meta10530){return (new cljs.core.async.t10529(flag__$1,alt_flag__$1,meta10530));
});
}
return (new cljs.core.async.t10529(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10535 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10535 = (function (cb,flag,alt_handler,meta10536){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10536 = meta10536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10535.cljs$lang$type = true;
cljs.core.async.t10535.cljs$lang$ctorStr = "cljs.core.async/t10535";
cljs.core.async.t10535.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10535");
});
cljs.core.async.t10535.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10537){var self__ = this;
var _10537__$1 = this;return self__.meta10536;
});
cljs.core.async.t10535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10537,meta10536__$1){var self__ = this;
var _10537__$1 = this;return (new cljs.core.async.t10535(self__.cb,self__.flag,self__.alt_handler,meta10536__$1));
});
cljs.core.async.__GT_t10535 = (function __GT_t10535(cb__$1,flag__$1,alt_handler__$1,meta10536){return (new cljs.core.async.t10535(cb__$1,flag__$1,alt_handler__$1,meta10536));
});
}
return (new cljs.core.async.t10535(cb,flag,alt_handler,null));
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
return (function (p1__10538_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10538_SHARP_,port], null));
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
var G__10539 = (i + 1);
i = G__10539;
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
var alts_BANG___delegate = function (ports,p__10540){var map__10542 = p__10540;var map__10542__$1 = ((cljs.core.seq_QMARK_.call(null,map__10542))?cljs.core.apply.call(null,cljs.core.hash_map,map__10542):map__10542);var opts = map__10542__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10540 = null;if (arguments.length > 1) {
  p__10540 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10540);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10543){
var ports = cljs.core.first(arglist__10543);
var p__10540 = cljs.core.rest(arglist__10543);
return alts_BANG___delegate(ports,p__10540);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10551 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10551 = (function (ch,f,map_LT_,meta10552){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10552 = meta10552;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10551.cljs$lang$type = true;
cljs.core.async.t10551.cljs$lang$ctorStr = "cljs.core.async/t10551";
cljs.core.async.t10551.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10551");
});
cljs.core.async.t10551.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10551.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10551.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10551.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10554 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10554 = (function (fn1,_,meta10552,ch,f,map_LT_,meta10555){
this.fn1 = fn1;
this._ = _;
this.meta10552 = meta10552;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10555 = meta10555;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10554.cljs$lang$type = true;
cljs.core.async.t10554.cljs$lang$ctorStr = "cljs.core.async/t10554";
cljs.core.async.t10554.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10554");
});
cljs.core.async.t10554.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10554.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10554.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10554.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10544_SHARP_){return f1.call(null,(((p1__10544_SHARP_ == null))?null:self__.f.call(null,p1__10544_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10556){var self__ = this;
var _10556__$1 = this;return self__.meta10555;
});
cljs.core.async.t10554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10556,meta10555__$1){var self__ = this;
var _10556__$1 = this;return (new cljs.core.async.t10554(self__.fn1,self__._,self__.meta10552,self__.ch,self__.f,self__.map_LT_,meta10555__$1));
});
cljs.core.async.__GT_t10554 = (function __GT_t10554(fn1__$1,___$2,meta10552__$1,ch__$2,f__$2,map_LT___$2,meta10555){return (new cljs.core.async.t10554(fn1__$1,___$2,meta10552__$1,ch__$2,f__$2,map_LT___$2,meta10555));
});
}
return (new cljs.core.async.t10554(fn1,___$1,self__.meta10552,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t10551.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10551.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10553){var self__ = this;
var _10553__$1 = this;return self__.meta10552;
});
cljs.core.async.t10551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10553,meta10552__$1){var self__ = this;
var _10553__$1 = this;return (new cljs.core.async.t10551(self__.ch,self__.f,self__.map_LT_,meta10552__$1));
});
cljs.core.async.__GT_t10551 = (function __GT_t10551(ch__$1,f__$1,map_LT___$1,meta10552){return (new cljs.core.async.t10551(ch__$1,f__$1,map_LT___$1,meta10552));
});
}
return (new cljs.core.async.t10551(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10560 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10560 = (function (ch,f,map_GT_,meta10561){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10561 = meta10561;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10560.cljs$lang$type = true;
cljs.core.async.t10560.cljs$lang$ctorStr = "cljs.core.async/t10560";
cljs.core.async.t10560.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10560");
});
cljs.core.async.t10560.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10560.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10560.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10560.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10560.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10560.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10562){var self__ = this;
var _10562__$1 = this;return self__.meta10561;
});
cljs.core.async.t10560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10562,meta10561__$1){var self__ = this;
var _10562__$1 = this;return (new cljs.core.async.t10560(self__.ch,self__.f,self__.map_GT_,meta10561__$1));
});
cljs.core.async.__GT_t10560 = (function __GT_t10560(ch__$1,f__$1,map_GT___$1,meta10561){return (new cljs.core.async.t10560(ch__$1,f__$1,map_GT___$1,meta10561));
});
}
return (new cljs.core.async.t10560(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10566 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10566 = (function (ch,p,filter_GT_,meta10567){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10567 = meta10567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10566.cljs$lang$type = true;
cljs.core.async.t10566.cljs$lang$ctorStr = "cljs.core.async/t10566";
cljs.core.async.t10566.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10566");
});
cljs.core.async.t10566.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10566.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10566.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10566.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10566.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10566.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10568){var self__ = this;
var _10568__$1 = this;return self__.meta10567;
});
cljs.core.async.t10566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10568,meta10567__$1){var self__ = this;
var _10568__$1 = this;return (new cljs.core.async.t10566(self__.ch,self__.p,self__.filter_GT_,meta10567__$1));
});
cljs.core.async.__GT_t10566 = (function __GT_t10566(ch__$1,p__$1,filter_GT___$1,meta10567){return (new cljs.core.async.t10566(ch__$1,p__$1,filter_GT___$1,meta10567));
});
}
return (new cljs.core.async.t10566(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___10651 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10630){var state_val_10631 = (state_10630[1]);if((state_val_10631 === 1))
{var state_10630__$1 = state_10630;var statearr_10632_10652 = state_10630__$1;(statearr_10632_10652[2] = null);
(statearr_10632_10652[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10631 === 2))
{var state_10630__$1 = state_10630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10630__$1,4,ch);
} else
{if((state_val_10631 === 3))
{var inst_10628 = (state_10630[2]);var state_10630__$1 = state_10630;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10630__$1,inst_10628);
} else
{if((state_val_10631 === 4))
{var inst_10612 = (state_10630[7]);var inst_10612__$1 = (state_10630[2]);var inst_10613 = (inst_10612__$1 == null);var state_10630__$1 = (function (){var statearr_10633 = state_10630;(statearr_10633[7] = inst_10612__$1);
return statearr_10633;
})();if(cljs.core.truth_(inst_10613))
{var statearr_10634_10653 = state_10630__$1;(statearr_10634_10653[1] = 5);
} else
{var statearr_10635_10654 = state_10630__$1;(statearr_10635_10654[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10631 === 5))
{var inst_10615 = cljs.core.async.close_BANG_.call(null,out);var state_10630__$1 = state_10630;var statearr_10636_10655 = state_10630__$1;(statearr_10636_10655[2] = inst_10615);
(statearr_10636_10655[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10631 === 6))
{var inst_10612 = (state_10630[7]);var inst_10617 = p.call(null,inst_10612);var state_10630__$1 = state_10630;if(cljs.core.truth_(inst_10617))
{var statearr_10637_10656 = state_10630__$1;(statearr_10637_10656[1] = 8);
} else
{var statearr_10638_10657 = state_10630__$1;(statearr_10638_10657[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10631 === 7))
{var inst_10626 = (state_10630[2]);var state_10630__$1 = state_10630;var statearr_10639_10658 = state_10630__$1;(statearr_10639_10658[2] = inst_10626);
(statearr_10639_10658[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10631 === 8))
{var inst_10612 = (state_10630[7]);var state_10630__$1 = state_10630;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10630__$1,11,out,inst_10612);
} else
{if((state_val_10631 === 9))
{var state_10630__$1 = state_10630;var statearr_10640_10659 = state_10630__$1;(statearr_10640_10659[2] = null);
(statearr_10640_10659[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10631 === 10))
{var inst_10623 = (state_10630[2]);var state_10630__$1 = (function (){var statearr_10641 = state_10630;(statearr_10641[8] = inst_10623);
return statearr_10641;
})();var statearr_10642_10660 = state_10630__$1;(statearr_10642_10660[2] = null);
(statearr_10642_10660[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10631 === 11))
{var inst_10620 = (state_10630[2]);var state_10630__$1 = state_10630;var statearr_10643_10661 = state_10630__$1;(statearr_10643_10661[2] = inst_10620);
(statearr_10643_10661[1] = 10);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_10647 = [null,null,null,null,null,null,null,null,null];(statearr_10647[0] = state_machine__6178__auto__);
(statearr_10647[1] = 1);
return statearr_10647;
});
var state_machine__6178__auto____1 = (function (state_10630){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10630);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10648){if((e10648 instanceof Object))
{var ex__6181__auto__ = e10648;var statearr_10649_10662 = state_10630;(statearr_10649_10662[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10630);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10648;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10663 = state_10630;
state_10630 = G__10663;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10630){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10650 = f__6193__auto__.call(null);(statearr_10650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___10651);
return statearr_10650;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10815){var state_val_10816 = (state_10815[1]);if((state_val_10816 === 1))
{var state_10815__$1 = state_10815;var statearr_10817_10854 = state_10815__$1;(statearr_10817_10854[2] = null);
(statearr_10817_10854[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 2))
{var state_10815__$1 = state_10815;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10815__$1,4,in$);
} else
{if((state_val_10816 === 3))
{var inst_10813 = (state_10815[2]);var state_10815__$1 = state_10815;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10815__$1,inst_10813);
} else
{if((state_val_10816 === 4))
{var inst_10761 = (state_10815[7]);var inst_10761__$1 = (state_10815[2]);var inst_10762 = (inst_10761__$1 == null);var state_10815__$1 = (function (){var statearr_10818 = state_10815;(statearr_10818[7] = inst_10761__$1);
return statearr_10818;
})();if(cljs.core.truth_(inst_10762))
{var statearr_10819_10855 = state_10815__$1;(statearr_10819_10855[1] = 5);
} else
{var statearr_10820_10856 = state_10815__$1;(statearr_10820_10856[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 5))
{var inst_10764 = cljs.core.async.close_BANG_.call(null,out);var state_10815__$1 = state_10815;var statearr_10821_10857 = state_10815__$1;(statearr_10821_10857[2] = inst_10764);
(statearr_10821_10857[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 6))
{var inst_10761 = (state_10815[7]);var inst_10766 = f.call(null,inst_10761);var inst_10771 = cljs.core.seq.call(null,inst_10766);var inst_10772 = inst_10771;var inst_10773 = null;var inst_10774 = 0;var inst_10775 = 0;var state_10815__$1 = (function (){var statearr_10822 = state_10815;(statearr_10822[8] = inst_10773);
(statearr_10822[9] = inst_10772);
(statearr_10822[10] = inst_10774);
(statearr_10822[11] = inst_10775);
return statearr_10822;
})();var statearr_10823_10858 = state_10815__$1;(statearr_10823_10858[2] = null);
(statearr_10823_10858[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 7))
{var inst_10811 = (state_10815[2]);var state_10815__$1 = state_10815;var statearr_10824_10859 = state_10815__$1;(statearr_10824_10859[2] = inst_10811);
(statearr_10824_10859[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 8))
{var inst_10774 = (state_10815[10]);var inst_10775 = (state_10815[11]);var inst_10777 = (inst_10775 < inst_10774);var inst_10778 = inst_10777;var state_10815__$1 = state_10815;if(cljs.core.truth_(inst_10778))
{var statearr_10825_10860 = state_10815__$1;(statearr_10825_10860[1] = 10);
} else
{var statearr_10826_10861 = state_10815__$1;(statearr_10826_10861[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 9))
{var inst_10808 = (state_10815[2]);var state_10815__$1 = (function (){var statearr_10827 = state_10815;(statearr_10827[12] = inst_10808);
return statearr_10827;
})();var statearr_10828_10862 = state_10815__$1;(statearr_10828_10862[2] = null);
(statearr_10828_10862[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 10))
{var inst_10773 = (state_10815[8]);var inst_10775 = (state_10815[11]);var inst_10780 = cljs.core._nth.call(null,inst_10773,inst_10775);var state_10815__$1 = state_10815;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10815__$1,13,out,inst_10780);
} else
{if((state_val_10816 === 11))
{var inst_10772 = (state_10815[9]);var inst_10786 = (state_10815[13]);var inst_10786__$1 = cljs.core.seq.call(null,inst_10772);var state_10815__$1 = (function (){var statearr_10832 = state_10815;(statearr_10832[13] = inst_10786__$1);
return statearr_10832;
})();if(inst_10786__$1)
{var statearr_10833_10863 = state_10815__$1;(statearr_10833_10863[1] = 14);
} else
{var statearr_10834_10864 = state_10815__$1;(statearr_10834_10864[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 12))
{var inst_10806 = (state_10815[2]);var state_10815__$1 = state_10815;var statearr_10835_10865 = state_10815__$1;(statearr_10835_10865[2] = inst_10806);
(statearr_10835_10865[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 13))
{var inst_10773 = (state_10815[8]);var inst_10772 = (state_10815[9]);var inst_10774 = (state_10815[10]);var inst_10775 = (state_10815[11]);var inst_10782 = (state_10815[2]);var inst_10783 = (inst_10775 + 1);var tmp10829 = inst_10773;var tmp10830 = inst_10772;var tmp10831 = inst_10774;var inst_10772__$1 = tmp10830;var inst_10773__$1 = tmp10829;var inst_10774__$1 = tmp10831;var inst_10775__$1 = inst_10783;var state_10815__$1 = (function (){var statearr_10836 = state_10815;(statearr_10836[8] = inst_10773__$1);
(statearr_10836[9] = inst_10772__$1);
(statearr_10836[10] = inst_10774__$1);
(statearr_10836[11] = inst_10775__$1);
(statearr_10836[14] = inst_10782);
return statearr_10836;
})();var statearr_10837_10866 = state_10815__$1;(statearr_10837_10866[2] = null);
(statearr_10837_10866[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 14))
{var inst_10786 = (state_10815[13]);var inst_10788 = cljs.core.chunked_seq_QMARK_.call(null,inst_10786);var state_10815__$1 = state_10815;if(inst_10788)
{var statearr_10838_10867 = state_10815__$1;(statearr_10838_10867[1] = 17);
} else
{var statearr_10839_10868 = state_10815__$1;(statearr_10839_10868[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 15))
{var state_10815__$1 = state_10815;var statearr_10840_10869 = state_10815__$1;(statearr_10840_10869[2] = null);
(statearr_10840_10869[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 16))
{var inst_10804 = (state_10815[2]);var state_10815__$1 = state_10815;var statearr_10841_10870 = state_10815__$1;(statearr_10841_10870[2] = inst_10804);
(statearr_10841_10870[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 17))
{var inst_10786 = (state_10815[13]);var inst_10790 = cljs.core.chunk_first.call(null,inst_10786);var inst_10791 = cljs.core.chunk_rest.call(null,inst_10786);var inst_10792 = cljs.core.count.call(null,inst_10790);var inst_10772 = inst_10791;var inst_10773 = inst_10790;var inst_10774 = inst_10792;var inst_10775 = 0;var state_10815__$1 = (function (){var statearr_10842 = state_10815;(statearr_10842[8] = inst_10773);
(statearr_10842[9] = inst_10772);
(statearr_10842[10] = inst_10774);
(statearr_10842[11] = inst_10775);
return statearr_10842;
})();var statearr_10843_10871 = state_10815__$1;(statearr_10843_10871[2] = null);
(statearr_10843_10871[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 18))
{var inst_10786 = (state_10815[13]);var inst_10795 = cljs.core.first.call(null,inst_10786);var state_10815__$1 = state_10815;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10815__$1,20,out,inst_10795);
} else
{if((state_val_10816 === 19))
{var inst_10801 = (state_10815[2]);var state_10815__$1 = state_10815;var statearr_10844_10872 = state_10815__$1;(statearr_10844_10872[2] = inst_10801);
(statearr_10844_10872[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10816 === 20))
{var inst_10786 = (state_10815[13]);var inst_10797 = (state_10815[2]);var inst_10798 = cljs.core.next.call(null,inst_10786);var inst_10772 = inst_10798;var inst_10773 = null;var inst_10774 = 0;var inst_10775 = 0;var state_10815__$1 = (function (){var statearr_10845 = state_10815;(statearr_10845[8] = inst_10773);
(statearr_10845[9] = inst_10772);
(statearr_10845[15] = inst_10797);
(statearr_10845[10] = inst_10774);
(statearr_10845[11] = inst_10775);
return statearr_10845;
})();var statearr_10846_10873 = state_10815__$1;(statearr_10846_10873[2] = null);
(statearr_10846_10873[1] = 8);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_10850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10850[0] = state_machine__6178__auto__);
(statearr_10850[1] = 1);
return statearr_10850;
});
var state_machine__6178__auto____1 = (function (state_10815){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10815);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10851){if((e10851 instanceof Object))
{var ex__6181__auto__ = e10851;var statearr_10852_10874 = state_10815;(statearr_10852_10874[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10815);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10851;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10875 = state_10815;
state_10815 = G__10875;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10815){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10853 = f__6193__auto__.call(null);(statearr_10853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_10853;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6192__auto___10956 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10935){var state_val_10936 = (state_10935[1]);if((state_val_10936 === 1))
{var state_10935__$1 = state_10935;var statearr_10937_10957 = state_10935__$1;(statearr_10937_10957[2] = null);
(statearr_10937_10957[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 2))
{var state_10935__$1 = state_10935;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10935__$1,4,from);
} else
{if((state_val_10936 === 3))
{var inst_10933 = (state_10935[2]);var state_10935__$1 = state_10935;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10935__$1,inst_10933);
} else
{if((state_val_10936 === 4))
{var inst_10918 = (state_10935[7]);var inst_10918__$1 = (state_10935[2]);var inst_10919 = (inst_10918__$1 == null);var state_10935__$1 = (function (){var statearr_10938 = state_10935;(statearr_10938[7] = inst_10918__$1);
return statearr_10938;
})();if(cljs.core.truth_(inst_10919))
{var statearr_10939_10958 = state_10935__$1;(statearr_10939_10958[1] = 5);
} else
{var statearr_10940_10959 = state_10935__$1;(statearr_10940_10959[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 5))
{var state_10935__$1 = state_10935;if(cljs.core.truth_(close_QMARK_))
{var statearr_10941_10960 = state_10935__$1;(statearr_10941_10960[1] = 8);
} else
{var statearr_10942_10961 = state_10935__$1;(statearr_10942_10961[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 6))
{var inst_10918 = (state_10935[7]);var state_10935__$1 = state_10935;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10935__$1,11,to,inst_10918);
} else
{if((state_val_10936 === 7))
{var inst_10931 = (state_10935[2]);var state_10935__$1 = state_10935;var statearr_10943_10962 = state_10935__$1;(statearr_10943_10962[2] = inst_10931);
(statearr_10943_10962[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 8))
{var inst_10922 = cljs.core.async.close_BANG_.call(null,to);var state_10935__$1 = state_10935;var statearr_10944_10963 = state_10935__$1;(statearr_10944_10963[2] = inst_10922);
(statearr_10944_10963[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 9))
{var state_10935__$1 = state_10935;var statearr_10945_10964 = state_10935__$1;(statearr_10945_10964[2] = null);
(statearr_10945_10964[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 10))
{var inst_10925 = (state_10935[2]);var state_10935__$1 = state_10935;var statearr_10946_10965 = state_10935__$1;(statearr_10946_10965[2] = inst_10925);
(statearr_10946_10965[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10936 === 11))
{var inst_10928 = (state_10935[2]);var state_10935__$1 = (function (){var statearr_10947 = state_10935;(statearr_10947[8] = inst_10928);
return statearr_10947;
})();var statearr_10948_10966 = state_10935__$1;(statearr_10948_10966[2] = null);
(statearr_10948_10966[1] = 2);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_10952 = [null,null,null,null,null,null,null,null,null];(statearr_10952[0] = state_machine__6178__auto__);
(statearr_10952[1] = 1);
return statearr_10952;
});
var state_machine__6178__auto____1 = (function (state_10935){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10935);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10953){if((e10953 instanceof Object))
{var ex__6181__auto__ = e10953;var statearr_10954_10967 = state_10935;(statearr_10954_10967[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10935);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10953;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10968 = state_10935;
state_10935 = G__10968;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10935){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10955 = f__6193__auto__.call(null);(statearr_10955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___10956);
return statearr_10955;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6192__auto___11055 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11033){var state_val_11034 = (state_11033[1]);if((state_val_11034 === 1))
{var state_11033__$1 = state_11033;var statearr_11035_11056 = state_11033__$1;(statearr_11035_11056[2] = null);
(statearr_11035_11056[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 2))
{var state_11033__$1 = state_11033;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11033__$1,4,ch);
} else
{if((state_val_11034 === 3))
{var inst_11031 = (state_11033[2]);var state_11033__$1 = state_11033;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11033__$1,inst_11031);
} else
{if((state_val_11034 === 4))
{var inst_11014 = (state_11033[7]);var inst_11014__$1 = (state_11033[2]);var inst_11015 = (inst_11014__$1 == null);var state_11033__$1 = (function (){var statearr_11036 = state_11033;(statearr_11036[7] = inst_11014__$1);
return statearr_11036;
})();if(cljs.core.truth_(inst_11015))
{var statearr_11037_11057 = state_11033__$1;(statearr_11037_11057[1] = 5);
} else
{var statearr_11038_11058 = state_11033__$1;(statearr_11038_11058[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 5))
{var inst_11017 = cljs.core.async.close_BANG_.call(null,tc);var inst_11018 = cljs.core.async.close_BANG_.call(null,fc);var state_11033__$1 = (function (){var statearr_11039 = state_11033;(statearr_11039[8] = inst_11017);
return statearr_11039;
})();var statearr_11040_11059 = state_11033__$1;(statearr_11040_11059[2] = inst_11018);
(statearr_11040_11059[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 6))
{var inst_11014 = (state_11033[7]);var inst_11020 = p.call(null,inst_11014);var state_11033__$1 = state_11033;if(cljs.core.truth_(inst_11020))
{var statearr_11041_11060 = state_11033__$1;(statearr_11041_11060[1] = 9);
} else
{var statearr_11042_11061 = state_11033__$1;(statearr_11042_11061[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 7))
{var inst_11029 = (state_11033[2]);var state_11033__$1 = state_11033;var statearr_11043_11062 = state_11033__$1;(statearr_11043_11062[2] = inst_11029);
(statearr_11043_11062[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 8))
{var inst_11026 = (state_11033[2]);var state_11033__$1 = (function (){var statearr_11044 = state_11033;(statearr_11044[9] = inst_11026);
return statearr_11044;
})();var statearr_11045_11063 = state_11033__$1;(statearr_11045_11063[2] = null);
(statearr_11045_11063[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 9))
{var state_11033__$1 = state_11033;var statearr_11046_11064 = state_11033__$1;(statearr_11046_11064[2] = tc);
(statearr_11046_11064[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 10))
{var state_11033__$1 = state_11033;var statearr_11047_11065 = state_11033__$1;(statearr_11047_11065[2] = fc);
(statearr_11047_11065[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11034 === 11))
{var inst_11014 = (state_11033[7]);var inst_11024 = (state_11033[2]);var state_11033__$1 = state_11033;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11033__$1,8,inst_11024,inst_11014);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11051 = [null,null,null,null,null,null,null,null,null,null];(statearr_11051[0] = state_machine__6178__auto__);
(statearr_11051[1] = 1);
return statearr_11051;
});
var state_machine__6178__auto____1 = (function (state_11033){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11033);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11052){if((e11052 instanceof Object))
{var ex__6181__auto__ = e11052;var statearr_11053_11066 = state_11033;(statearr_11053_11066[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11033);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11052;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11067 = state_11033;
state_11033 = G__11067;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11033){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11054 = f__6193__auto__.call(null);(statearr_11054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11055);
return statearr_11054;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11114){var state_val_11115 = (state_11114[1]);if((state_val_11115 === 7))
{var inst_11110 = (state_11114[2]);var state_11114__$1 = state_11114;var statearr_11116_11132 = state_11114__$1;(statearr_11116_11132[2] = inst_11110);
(statearr_11116_11132[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11115 === 6))
{var inst_11103 = (state_11114[7]);var inst_11100 = (state_11114[8]);var inst_11107 = f.call(null,inst_11100,inst_11103);var inst_11100__$1 = inst_11107;var state_11114__$1 = (function (){var statearr_11117 = state_11114;(statearr_11117[8] = inst_11100__$1);
return statearr_11117;
})();var statearr_11118_11133 = state_11114__$1;(statearr_11118_11133[2] = null);
(statearr_11118_11133[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11115 === 5))
{var inst_11100 = (state_11114[8]);var state_11114__$1 = state_11114;var statearr_11119_11134 = state_11114__$1;(statearr_11119_11134[2] = inst_11100);
(statearr_11119_11134[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11115 === 4))
{var inst_11103 = (state_11114[7]);var inst_11103__$1 = (state_11114[2]);var inst_11104 = (inst_11103__$1 == null);var state_11114__$1 = (function (){var statearr_11120 = state_11114;(statearr_11120[7] = inst_11103__$1);
return statearr_11120;
})();if(cljs.core.truth_(inst_11104))
{var statearr_11121_11135 = state_11114__$1;(statearr_11121_11135[1] = 5);
} else
{var statearr_11122_11136 = state_11114__$1;(statearr_11122_11136[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11115 === 3))
{var inst_11112 = (state_11114[2]);var state_11114__$1 = state_11114;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11114__$1,inst_11112);
} else
{if((state_val_11115 === 2))
{var state_11114__$1 = state_11114;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11114__$1,4,ch);
} else
{if((state_val_11115 === 1))
{var inst_11100 = init;var state_11114__$1 = (function (){var statearr_11123 = state_11114;(statearr_11123[8] = inst_11100);
return statearr_11123;
})();var statearr_11124_11137 = state_11114__$1;(statearr_11124_11137[2] = null);
(statearr_11124_11137[1] = 2);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11128 = [null,null,null,null,null,null,null,null,null];(statearr_11128[0] = state_machine__6178__auto__);
(statearr_11128[1] = 1);
return statearr_11128;
});
var state_machine__6178__auto____1 = (function (state_11114){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11114);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11129){if((e11129 instanceof Object))
{var ex__6181__auto__ = e11129;var statearr_11130_11138 = state_11114;(statearr_11130_11138[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11114);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11129;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11139 = state_11114;
state_11114 = G__11139;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11114){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11131 = f__6193__auto__.call(null);(statearr_11131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11131;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11201){var state_val_11202 = (state_11201[1]);if((state_val_11202 === 1))
{var inst_11181 = cljs.core.seq.call(null,coll);var inst_11182 = inst_11181;var state_11201__$1 = (function (){var statearr_11203 = state_11201;(statearr_11203[7] = inst_11182);
return statearr_11203;
})();var statearr_11204_11222 = state_11201__$1;(statearr_11204_11222[2] = null);
(statearr_11204_11222[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11202 === 2))
{var inst_11182 = (state_11201[7]);var state_11201__$1 = state_11201;if(cljs.core.truth_(inst_11182))
{var statearr_11205_11223 = state_11201__$1;(statearr_11205_11223[1] = 4);
} else
{var statearr_11206_11224 = state_11201__$1;(statearr_11206_11224[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11202 === 3))
{var inst_11199 = (state_11201[2]);var state_11201__$1 = state_11201;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11201__$1,inst_11199);
} else
{if((state_val_11202 === 4))
{var inst_11182 = (state_11201[7]);var inst_11185 = cljs.core.first.call(null,inst_11182);var state_11201__$1 = state_11201;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11201__$1,7,ch,inst_11185);
} else
{if((state_val_11202 === 5))
{var state_11201__$1 = state_11201;if(cljs.core.truth_(close_QMARK_))
{var statearr_11207_11225 = state_11201__$1;(statearr_11207_11225[1] = 8);
} else
{var statearr_11208_11226 = state_11201__$1;(statearr_11208_11226[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11202 === 6))
{var inst_11197 = (state_11201[2]);var state_11201__$1 = state_11201;var statearr_11209_11227 = state_11201__$1;(statearr_11209_11227[2] = inst_11197);
(statearr_11209_11227[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11202 === 7))
{var inst_11182 = (state_11201[7]);var inst_11187 = (state_11201[2]);var inst_11188 = cljs.core.next.call(null,inst_11182);var inst_11182__$1 = inst_11188;var state_11201__$1 = (function (){var statearr_11210 = state_11201;(statearr_11210[8] = inst_11187);
(statearr_11210[7] = inst_11182__$1);
return statearr_11210;
})();var statearr_11211_11228 = state_11201__$1;(statearr_11211_11228[2] = null);
(statearr_11211_11228[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11202 === 8))
{var inst_11192 = cljs.core.async.close_BANG_.call(null,ch);var state_11201__$1 = state_11201;var statearr_11212_11229 = state_11201__$1;(statearr_11212_11229[2] = inst_11192);
(statearr_11212_11229[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11202 === 9))
{var state_11201__$1 = state_11201;var statearr_11213_11230 = state_11201__$1;(statearr_11213_11230[2] = null);
(statearr_11213_11230[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11202 === 10))
{var inst_11195 = (state_11201[2]);var state_11201__$1 = state_11201;var statearr_11214_11231 = state_11201__$1;(statearr_11214_11231[2] = inst_11195);
(statearr_11214_11231[1] = 6);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11218 = [null,null,null,null,null,null,null,null,null];(statearr_11218[0] = state_machine__6178__auto__);
(statearr_11218[1] = 1);
return statearr_11218;
});
var state_machine__6178__auto____1 = (function (state_11201){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11201);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11219){if((e11219 instanceof Object))
{var ex__6181__auto__ = e11219;var statearr_11220_11232 = state_11201;(statearr_11220_11232[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11201);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11219;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11233 = state_11201;
state_11201 = G__11233;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11201){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11221 = f__6193__auto__.call(null);(statearr_11221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11221;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
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
cljs.core.async.Mux = (function (){var obj11235 = {};return obj11235;
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
cljs.core.async.Mult = (function (){var obj11237 = {};return obj11237;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11461 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11461 = (function (cs,ch,mult,meta11462){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11462 = meta11462;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11461.cljs$lang$type = true;
cljs.core.async.t11461.cljs$lang$ctorStr = "cljs.core.async/t11461";
cljs.core.async.t11461.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11461");
});})(cs))
;
cljs.core.async.t11461.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11461.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11461.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11461.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11461.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11461.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11461.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11463){var self__ = this;
var _11463__$1 = this;return self__.meta11462;
});})(cs))
;
cljs.core.async.t11461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11463,meta11462__$1){var self__ = this;
var _11463__$1 = this;return (new cljs.core.async.t11461(self__.cs,self__.ch,self__.mult,meta11462__$1));
});})(cs))
;
cljs.core.async.__GT_t11461 = ((function (cs){
return (function __GT_t11461(cs__$1,ch__$1,mult__$1,meta11462){return (new cljs.core.async.t11461(cs__$1,ch__$1,mult__$1,meta11462));
});})(cs))
;
}
return (new cljs.core.async.t11461(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6192__auto___11684 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11598){var state_val_11599 = (state_11598[1]);if((state_val_11599 === 32))
{var inst_11466 = (state_11598[7]);var inst_11542 = (state_11598[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11598,31,Object,null,30);var inst_11549 = cljs.core.async.put_BANG_.call(null,inst_11542,inst_11466,done);var state_11598__$1 = state_11598;var statearr_11600_11685 = state_11598__$1;(statearr_11600_11685[2] = inst_11549);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11598__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 1))
{var state_11598__$1 = state_11598;var statearr_11601_11686 = state_11598__$1;(statearr_11601_11686[2] = null);
(statearr_11601_11686[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 33))
{var inst_11555 = (state_11598[9]);var inst_11557 = cljs.core.chunked_seq_QMARK_.call(null,inst_11555);var state_11598__$1 = state_11598;if(inst_11557)
{var statearr_11602_11687 = state_11598__$1;(statearr_11602_11687[1] = 36);
} else
{var statearr_11603_11688 = state_11598__$1;(statearr_11603_11688[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 2))
{var state_11598__$1 = state_11598;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11598__$1,4,ch);
} else
{if((state_val_11599 === 34))
{var state_11598__$1 = state_11598;var statearr_11604_11689 = state_11598__$1;(statearr_11604_11689[2] = null);
(statearr_11604_11689[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 3))
{var inst_11596 = (state_11598[2]);var state_11598__$1 = state_11598;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11598__$1,inst_11596);
} else
{if((state_val_11599 === 35))
{var inst_11580 = (state_11598[2]);var state_11598__$1 = state_11598;var statearr_11605_11690 = state_11598__$1;(statearr_11605_11690[2] = inst_11580);
(statearr_11605_11690[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 4))
{var inst_11466 = (state_11598[7]);var inst_11466__$1 = (state_11598[2]);var inst_11467 = (inst_11466__$1 == null);var state_11598__$1 = (function (){var statearr_11606 = state_11598;(statearr_11606[7] = inst_11466__$1);
return statearr_11606;
})();if(cljs.core.truth_(inst_11467))
{var statearr_11607_11691 = state_11598__$1;(statearr_11607_11691[1] = 5);
} else
{var statearr_11608_11692 = state_11598__$1;(statearr_11608_11692[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 36))
{var inst_11555 = (state_11598[9]);var inst_11559 = cljs.core.chunk_first.call(null,inst_11555);var inst_11560 = cljs.core.chunk_rest.call(null,inst_11555);var inst_11561 = cljs.core.count.call(null,inst_11559);var inst_11534 = inst_11560;var inst_11535 = inst_11559;var inst_11536 = inst_11561;var inst_11537 = 0;var state_11598__$1 = (function (){var statearr_11609 = state_11598;(statearr_11609[10] = inst_11534);
(statearr_11609[11] = inst_11535);
(statearr_11609[12] = inst_11536);
(statearr_11609[13] = inst_11537);
return statearr_11609;
})();var statearr_11610_11693 = state_11598__$1;(statearr_11610_11693[2] = null);
(statearr_11610_11693[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 5))
{var inst_11473 = cljs.core.deref.call(null,cs);var inst_11474 = cljs.core.seq.call(null,inst_11473);var inst_11475 = inst_11474;var inst_11476 = null;var inst_11477 = 0;var inst_11478 = 0;var state_11598__$1 = (function (){var statearr_11611 = state_11598;(statearr_11611[14] = inst_11478);
(statearr_11611[15] = inst_11477);
(statearr_11611[16] = inst_11476);
(statearr_11611[17] = inst_11475);
return statearr_11611;
})();var statearr_11612_11694 = state_11598__$1;(statearr_11612_11694[2] = null);
(statearr_11612_11694[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 37))
{var inst_11555 = (state_11598[9]);var inst_11564 = cljs.core.first.call(null,inst_11555);var state_11598__$1 = (function (){var statearr_11613 = state_11598;(statearr_11613[18] = inst_11564);
return statearr_11613;
})();var statearr_11614_11695 = state_11598__$1;(statearr_11614_11695[2] = null);
(statearr_11614_11695[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 6))
{var inst_11526 = (state_11598[19]);var inst_11525 = cljs.core.deref.call(null,cs);var inst_11526__$1 = cljs.core.keys.call(null,inst_11525);var inst_11527 = cljs.core.count.call(null,inst_11526__$1);var inst_11528 = cljs.core.reset_BANG_.call(null,dctr,inst_11527);var inst_11533 = cljs.core.seq.call(null,inst_11526__$1);var inst_11534 = inst_11533;var inst_11535 = null;var inst_11536 = 0;var inst_11537 = 0;var state_11598__$1 = (function (){var statearr_11615 = state_11598;(statearr_11615[10] = inst_11534);
(statearr_11615[11] = inst_11535);
(statearr_11615[12] = inst_11536);
(statearr_11615[19] = inst_11526__$1);
(statearr_11615[20] = inst_11528);
(statearr_11615[13] = inst_11537);
return statearr_11615;
})();var statearr_11616_11696 = state_11598__$1;(statearr_11616_11696[2] = null);
(statearr_11616_11696[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 38))
{var inst_11577 = (state_11598[2]);var state_11598__$1 = state_11598;var statearr_11617_11697 = state_11598__$1;(statearr_11617_11697[2] = inst_11577);
(statearr_11617_11697[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 7))
{var inst_11594 = (state_11598[2]);var state_11598__$1 = state_11598;var statearr_11618_11698 = state_11598__$1;(statearr_11618_11698[2] = inst_11594);
(statearr_11618_11698[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 39))
{var inst_11555 = (state_11598[9]);var inst_11573 = (state_11598[2]);var inst_11574 = cljs.core.next.call(null,inst_11555);var inst_11534 = inst_11574;var inst_11535 = null;var inst_11536 = 0;var inst_11537 = 0;var state_11598__$1 = (function (){var statearr_11619 = state_11598;(statearr_11619[10] = inst_11534);
(statearr_11619[11] = inst_11535);
(statearr_11619[12] = inst_11536);
(statearr_11619[21] = inst_11573);
(statearr_11619[13] = inst_11537);
return statearr_11619;
})();var statearr_11620_11699 = state_11598__$1;(statearr_11620_11699[2] = null);
(statearr_11620_11699[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 8))
{var inst_11478 = (state_11598[14]);var inst_11477 = (state_11598[15]);var inst_11480 = (inst_11478 < inst_11477);var inst_11481 = inst_11480;var state_11598__$1 = state_11598;if(cljs.core.truth_(inst_11481))
{var statearr_11621_11700 = state_11598__$1;(statearr_11621_11700[1] = 10);
} else
{var statearr_11622_11701 = state_11598__$1;(statearr_11622_11701[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 40))
{var inst_11564 = (state_11598[18]);var inst_11565 = (state_11598[2]);var inst_11566 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11567 = cljs.core.async.untap_STAR_.call(null,m,inst_11564);var state_11598__$1 = (function (){var statearr_11623 = state_11598;(statearr_11623[22] = inst_11566);
(statearr_11623[23] = inst_11565);
return statearr_11623;
})();var statearr_11624_11702 = state_11598__$1;(statearr_11624_11702[2] = inst_11567);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11598__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 9))
{var inst_11523 = (state_11598[2]);var state_11598__$1 = state_11598;var statearr_11625_11703 = state_11598__$1;(statearr_11625_11703[2] = inst_11523);
(statearr_11625_11703[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 41))
{var inst_11466 = (state_11598[7]);var inst_11564 = (state_11598[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11598,40,Object,null,39);var inst_11571 = cljs.core.async.put_BANG_.call(null,inst_11564,inst_11466,done);var state_11598__$1 = state_11598;var statearr_11626_11704 = state_11598__$1;(statearr_11626_11704[2] = inst_11571);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11598__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 10))
{var inst_11478 = (state_11598[14]);var inst_11476 = (state_11598[16]);var inst_11484 = cljs.core._nth.call(null,inst_11476,inst_11478);var inst_11485 = cljs.core.nth.call(null,inst_11484,0,null);var inst_11486 = cljs.core.nth.call(null,inst_11484,1,null);var state_11598__$1 = (function (){var statearr_11627 = state_11598;(statearr_11627[24] = inst_11485);
return statearr_11627;
})();if(cljs.core.truth_(inst_11486))
{var statearr_11628_11705 = state_11598__$1;(statearr_11628_11705[1] = 13);
} else
{var statearr_11629_11706 = state_11598__$1;(statearr_11629_11706[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 42))
{var state_11598__$1 = state_11598;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11598__$1,45,dchan);
} else
{if((state_val_11599 === 11))
{var inst_11495 = (state_11598[25]);var inst_11475 = (state_11598[17]);var inst_11495__$1 = cljs.core.seq.call(null,inst_11475);var state_11598__$1 = (function (){var statearr_11630 = state_11598;(statearr_11630[25] = inst_11495__$1);
return statearr_11630;
})();if(inst_11495__$1)
{var statearr_11631_11707 = state_11598__$1;(statearr_11631_11707[1] = 16);
} else
{var statearr_11632_11708 = state_11598__$1;(statearr_11632_11708[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 43))
{var state_11598__$1 = state_11598;var statearr_11633_11709 = state_11598__$1;(statearr_11633_11709[2] = null);
(statearr_11633_11709[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 12))
{var inst_11521 = (state_11598[2]);var state_11598__$1 = state_11598;var statearr_11634_11710 = state_11598__$1;(statearr_11634_11710[2] = inst_11521);
(statearr_11634_11710[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 44))
{var inst_11591 = (state_11598[2]);var state_11598__$1 = (function (){var statearr_11635 = state_11598;(statearr_11635[26] = inst_11591);
return statearr_11635;
})();var statearr_11636_11711 = state_11598__$1;(statearr_11636_11711[2] = null);
(statearr_11636_11711[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 13))
{var inst_11485 = (state_11598[24]);var inst_11488 = cljs.core.async.close_BANG_.call(null,inst_11485);var state_11598__$1 = state_11598;var statearr_11637_11712 = state_11598__$1;(statearr_11637_11712[2] = inst_11488);
(statearr_11637_11712[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 45))
{var inst_11588 = (state_11598[2]);var state_11598__$1 = state_11598;var statearr_11641_11713 = state_11598__$1;(statearr_11641_11713[2] = inst_11588);
(statearr_11641_11713[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 14))
{var state_11598__$1 = state_11598;var statearr_11642_11714 = state_11598__$1;(statearr_11642_11714[2] = null);
(statearr_11642_11714[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 15))
{var inst_11478 = (state_11598[14]);var inst_11477 = (state_11598[15]);var inst_11476 = (state_11598[16]);var inst_11475 = (state_11598[17]);var inst_11491 = (state_11598[2]);var inst_11492 = (inst_11478 + 1);var tmp11638 = inst_11477;var tmp11639 = inst_11476;var tmp11640 = inst_11475;var inst_11475__$1 = tmp11640;var inst_11476__$1 = tmp11639;var inst_11477__$1 = tmp11638;var inst_11478__$1 = inst_11492;var state_11598__$1 = (function (){var statearr_11643 = state_11598;(statearr_11643[27] = inst_11491);
(statearr_11643[14] = inst_11478__$1);
(statearr_11643[15] = inst_11477__$1);
(statearr_11643[16] = inst_11476__$1);
(statearr_11643[17] = inst_11475__$1);
return statearr_11643;
})();var statearr_11644_11715 = state_11598__$1;(statearr_11644_11715[2] = null);
(statearr_11644_11715[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 16))
{var inst_11495 = (state_11598[25]);var inst_11497 = cljs.core.chunked_seq_QMARK_.call(null,inst_11495);var state_11598__$1 = state_11598;if(inst_11497)
{var statearr_11645_11716 = state_11598__$1;(statearr_11645_11716[1] = 19);
} else
{var statearr_11646_11717 = state_11598__$1;(statearr_11646_11717[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 17))
{var state_11598__$1 = state_11598;var statearr_11647_11718 = state_11598__$1;(statearr_11647_11718[2] = null);
(statearr_11647_11718[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 18))
{var inst_11519 = (state_11598[2]);var state_11598__$1 = state_11598;var statearr_11648_11719 = state_11598__$1;(statearr_11648_11719[2] = inst_11519);
(statearr_11648_11719[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 19))
{var inst_11495 = (state_11598[25]);var inst_11499 = cljs.core.chunk_first.call(null,inst_11495);var inst_11500 = cljs.core.chunk_rest.call(null,inst_11495);var inst_11501 = cljs.core.count.call(null,inst_11499);var inst_11475 = inst_11500;var inst_11476 = inst_11499;var inst_11477 = inst_11501;var inst_11478 = 0;var state_11598__$1 = (function (){var statearr_11649 = state_11598;(statearr_11649[14] = inst_11478);
(statearr_11649[15] = inst_11477);
(statearr_11649[16] = inst_11476);
(statearr_11649[17] = inst_11475);
return statearr_11649;
})();var statearr_11650_11720 = state_11598__$1;(statearr_11650_11720[2] = null);
(statearr_11650_11720[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 20))
{var inst_11495 = (state_11598[25]);var inst_11505 = cljs.core.first.call(null,inst_11495);var inst_11506 = cljs.core.nth.call(null,inst_11505,0,null);var inst_11507 = cljs.core.nth.call(null,inst_11505,1,null);var state_11598__$1 = (function (){var statearr_11651 = state_11598;(statearr_11651[28] = inst_11506);
return statearr_11651;
})();if(cljs.core.truth_(inst_11507))
{var statearr_11652_11721 = state_11598__$1;(statearr_11652_11721[1] = 22);
} else
{var statearr_11653_11722 = state_11598__$1;(statearr_11653_11722[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 21))
{var inst_11516 = (state_11598[2]);var state_11598__$1 = state_11598;var statearr_11654_11723 = state_11598__$1;(statearr_11654_11723[2] = inst_11516);
(statearr_11654_11723[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 22))
{var inst_11506 = (state_11598[28]);var inst_11509 = cljs.core.async.close_BANG_.call(null,inst_11506);var state_11598__$1 = state_11598;var statearr_11655_11724 = state_11598__$1;(statearr_11655_11724[2] = inst_11509);
(statearr_11655_11724[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 23))
{var state_11598__$1 = state_11598;var statearr_11656_11725 = state_11598__$1;(statearr_11656_11725[2] = null);
(statearr_11656_11725[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 24))
{var inst_11495 = (state_11598[25]);var inst_11512 = (state_11598[2]);var inst_11513 = cljs.core.next.call(null,inst_11495);var inst_11475 = inst_11513;var inst_11476 = null;var inst_11477 = 0;var inst_11478 = 0;var state_11598__$1 = (function (){var statearr_11657 = state_11598;(statearr_11657[14] = inst_11478);
(statearr_11657[29] = inst_11512);
(statearr_11657[15] = inst_11477);
(statearr_11657[16] = inst_11476);
(statearr_11657[17] = inst_11475);
return statearr_11657;
})();var statearr_11658_11726 = state_11598__$1;(statearr_11658_11726[2] = null);
(statearr_11658_11726[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 25))
{var inst_11536 = (state_11598[12]);var inst_11537 = (state_11598[13]);var inst_11539 = (inst_11537 < inst_11536);var inst_11540 = inst_11539;var state_11598__$1 = state_11598;if(cljs.core.truth_(inst_11540))
{var statearr_11659_11727 = state_11598__$1;(statearr_11659_11727[1] = 27);
} else
{var statearr_11660_11728 = state_11598__$1;(statearr_11660_11728[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 26))
{var inst_11526 = (state_11598[19]);var inst_11584 = (state_11598[2]);var inst_11585 = cljs.core.seq.call(null,inst_11526);var state_11598__$1 = (function (){var statearr_11661 = state_11598;(statearr_11661[30] = inst_11584);
return statearr_11661;
})();if(inst_11585)
{var statearr_11662_11729 = state_11598__$1;(statearr_11662_11729[1] = 42);
} else
{var statearr_11663_11730 = state_11598__$1;(statearr_11663_11730[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 27))
{var inst_11535 = (state_11598[11]);var inst_11537 = (state_11598[13]);var inst_11542 = cljs.core._nth.call(null,inst_11535,inst_11537);var state_11598__$1 = (function (){var statearr_11664 = state_11598;(statearr_11664[8] = inst_11542);
return statearr_11664;
})();var statearr_11665_11731 = state_11598__$1;(statearr_11665_11731[2] = null);
(statearr_11665_11731[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 28))
{var inst_11534 = (state_11598[10]);var inst_11555 = (state_11598[9]);var inst_11555__$1 = cljs.core.seq.call(null,inst_11534);var state_11598__$1 = (function (){var statearr_11669 = state_11598;(statearr_11669[9] = inst_11555__$1);
return statearr_11669;
})();if(inst_11555__$1)
{var statearr_11670_11732 = state_11598__$1;(statearr_11670_11732[1] = 33);
} else
{var statearr_11671_11733 = state_11598__$1;(statearr_11671_11733[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 29))
{var inst_11582 = (state_11598[2]);var state_11598__$1 = state_11598;var statearr_11672_11734 = state_11598__$1;(statearr_11672_11734[2] = inst_11582);
(statearr_11672_11734[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 30))
{var inst_11534 = (state_11598[10]);var inst_11535 = (state_11598[11]);var inst_11536 = (state_11598[12]);var inst_11537 = (state_11598[13]);var inst_11551 = (state_11598[2]);var inst_11552 = (inst_11537 + 1);var tmp11666 = inst_11534;var tmp11667 = inst_11535;var tmp11668 = inst_11536;var inst_11534__$1 = tmp11666;var inst_11535__$1 = tmp11667;var inst_11536__$1 = tmp11668;var inst_11537__$1 = inst_11552;var state_11598__$1 = (function (){var statearr_11673 = state_11598;(statearr_11673[10] = inst_11534__$1);
(statearr_11673[11] = inst_11535__$1);
(statearr_11673[12] = inst_11536__$1);
(statearr_11673[13] = inst_11537__$1);
(statearr_11673[31] = inst_11551);
return statearr_11673;
})();var statearr_11674_11735 = state_11598__$1;(statearr_11674_11735[2] = null);
(statearr_11674_11735[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11599 === 31))
{var inst_11542 = (state_11598[8]);var inst_11543 = (state_11598[2]);var inst_11544 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11545 = cljs.core.async.untap_STAR_.call(null,m,inst_11542);var state_11598__$1 = (function (){var statearr_11675 = state_11598;(statearr_11675[32] = inst_11543);
(statearr_11675[33] = inst_11544);
return statearr_11675;
})();var statearr_11676_11736 = state_11598__$1;(statearr_11676_11736[2] = inst_11545);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11598__$1);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11680[0] = state_machine__6178__auto__);
(statearr_11680[1] = 1);
return statearr_11680;
});
var state_machine__6178__auto____1 = (function (state_11598){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11598);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11681){if((e11681 instanceof Object))
{var ex__6181__auto__ = e11681;var statearr_11682_11737 = state_11598;(statearr_11682_11737[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11598);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11681;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11738 = state_11598;
state_11598 = G__11738;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11598){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11683 = f__6193__auto__.call(null);(statearr_11683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11684);
return statearr_11683;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
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
cljs.core.async.Mix = (function (){var obj11740 = {};return obj11740;
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
;var m = (function (){if(typeof cljs.core.async.t11850 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11850 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11851){
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
this.meta11851 = meta11851;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11850.cljs$lang$type = true;
cljs.core.async.t11850.cljs$lang$ctorStr = "cljs.core.async/t11850";
cljs.core.async.t11850.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11850");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11850.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11850.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11850.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11850.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11850.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11850.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11850.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11850.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11850.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11852){var self__ = this;
var _11852__$1 = this;return self__.meta11851;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11852,meta11851__$1){var self__ = this;
var _11852__$1 = this;return (new cljs.core.async.t11850(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11851__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11850 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11850(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11851){return (new cljs.core.async.t11850(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11851));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11850(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6192__auto___11959 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11917){var state_val_11918 = (state_11917[1]);if((state_val_11918 === 1))
{var inst_11856 = (state_11917[7]);var inst_11856__$1 = calc_state.call(null);var inst_11857 = cljs.core.seq_QMARK_.call(null,inst_11856__$1);var state_11917__$1 = (function (){var statearr_11919 = state_11917;(statearr_11919[7] = inst_11856__$1);
return statearr_11919;
})();if(inst_11857)
{var statearr_11920_11960 = state_11917__$1;(statearr_11920_11960[1] = 2);
} else
{var statearr_11921_11961 = state_11917__$1;(statearr_11921_11961[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11918 === 2))
{var inst_11856 = (state_11917[7]);var inst_11859 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11856);var state_11917__$1 = state_11917;var statearr_11922_11962 = state_11917__$1;(statearr_11922_11962[2] = inst_11859);
(statearr_11922_11962[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11918 === 3))
{var inst_11856 = (state_11917[7]);var state_11917__$1 = state_11917;var statearr_11923_11963 = state_11917__$1;(statearr_11923_11963[2] = inst_11856);
(statearr_11923_11963[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11918 === 4))
{var inst_11856 = (state_11917[7]);var inst_11862 = (state_11917[2]);var inst_11863 = cljs.core.get.call(null,inst_11862,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11864 = cljs.core.get.call(null,inst_11862,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11865 = cljs.core.get.call(null,inst_11862,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11866 = inst_11856;var state_11917__$1 = (function (){var statearr_11924 = state_11917;(statearr_11924[8] = inst_11863);
(statearr_11924[9] = inst_11864);
(statearr_11924[10] = inst_11865);
(statearr_11924[11] = inst_11866);
return statearr_11924;
})();var statearr_11925_11964 = state_11917__$1;(statearr_11925_11964[2] = null);
(statearr_11925_11964[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11918 === 5))
{var inst_11866 = (state_11917[11]);var inst_11869 = cljs.core.seq_QMARK_.call(null,inst_11866);var state_11917__$1 = state_11917;if(inst_11869)
{var statearr_11926_11965 = state_11917__$1;(statearr_11926_11965[1] = 7);
} else
{var statearr_11927_11966 = state_11917__$1;(statearr_11927_11966[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11918 === 6))
{var inst_11915 = (state_11917[2]);var state_11917__$1 = state_11917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11917__$1,inst_11915);
} else
{if((state_val_11918 === 7))
{var inst_11866 = (state_11917[11]);var inst_11871 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11866);var state_11917__$1 = state_11917;var statearr_11928_11967 = state_11917__$1;(statearr_11928_11967[2] = inst_11871);
(statearr_11928_11967[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11918 === 8))
{var inst_11866 = (state_11917[11]);var state_11917__$1 = state_11917;var statearr_11929_11968 = state_11917__$1;(statearr_11929_11968[2] = inst_11866);
(statearr_11929_11968[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11918 === 9))
{var inst_11874 = (state_11917[12]);var inst_11874__$1 = (state_11917[2]);var inst_11875 = cljs.core.get.call(null,inst_11874__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11876 = cljs.core.get.call(null,inst_11874__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11877 = cljs.core.get.call(null,inst_11874__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11917__$1 = (function (){var statearr_11930 = state_11917;(statearr_11930[12] = inst_11874__$1);
(statearr_11930[13] = inst_11876);
(statearr_11930[14] = inst_11877);
return statearr_11930;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11917__$1,10,inst_11875);
} else
{if((state_val_11918 === 10))
{var inst_11882 = (state_11917[15]);var inst_11881 = (state_11917[16]);var inst_11880 = (state_11917[2]);var inst_11881__$1 = cljs.core.nth.call(null,inst_11880,0,null);var inst_11882__$1 = cljs.core.nth.call(null,inst_11880,1,null);var inst_11883 = (inst_11881__$1 == null);var inst_11884 = cljs.core._EQ_.call(null,inst_11882__$1,change);var inst_11885 = (inst_11883) || (inst_11884);var state_11917__$1 = (function (){var statearr_11931 = state_11917;(statearr_11931[15] = inst_11882__$1);
(statearr_11931[16] = inst_11881__$1);
return statearr_11931;
})();if(cljs.core.truth_(inst_11885))
{var statearr_11932_11969 = state_11917__$1;(statearr_11932_11969[1] = 11);
} else
{var statearr_11933_11970 = state_11917__$1;(statearr_11933_11970[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11918 === 11))
{var inst_11881 = (state_11917[16]);var inst_11887 = (inst_11881 == null);var state_11917__$1 = state_11917;if(cljs.core.truth_(inst_11887))
{var statearr_11934_11971 = state_11917__$1;(statearr_11934_11971[1] = 14);
} else
{var statearr_11935_11972 = state_11917__$1;(statearr_11935_11972[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11918 === 12))
{var inst_11896 = (state_11917[17]);var inst_11882 = (state_11917[15]);var inst_11877 = (state_11917[14]);var inst_11896__$1 = inst_11877.call(null,inst_11882);var state_11917__$1 = (function (){var statearr_11936 = state_11917;(statearr_11936[17] = inst_11896__$1);
return statearr_11936;
})();if(cljs.core.truth_(inst_11896__$1))
{var statearr_11937_11973 = state_11917__$1;(statearr_11937_11973[1] = 17);
} else
{var statearr_11938_11974 = state_11917__$1;(statearr_11938_11974[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11918 === 13))
{var inst_11913 = (state_11917[2]);var state_11917__$1 = state_11917;var statearr_11939_11975 = state_11917__$1;(statearr_11939_11975[2] = inst_11913);
(statearr_11939_11975[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11918 === 14))
{var inst_11882 = (state_11917[15]);var inst_11889 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11882);var state_11917__$1 = state_11917;var statearr_11940_11976 = state_11917__$1;(statearr_11940_11976[2] = inst_11889);
(statearr_11940_11976[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11918 === 15))
{var state_11917__$1 = state_11917;var statearr_11941_11977 = state_11917__$1;(statearr_11941_11977[2] = null);
(statearr_11941_11977[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11918 === 16))
{var inst_11892 = (state_11917[2]);var inst_11893 = calc_state.call(null);var inst_11866 = inst_11893;var state_11917__$1 = (function (){var statearr_11942 = state_11917;(statearr_11942[18] = inst_11892);
(statearr_11942[11] = inst_11866);
return statearr_11942;
})();var statearr_11943_11978 = state_11917__$1;(statearr_11943_11978[2] = null);
(statearr_11943_11978[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11918 === 17))
{var inst_11896 = (state_11917[17]);var state_11917__$1 = state_11917;var statearr_11944_11979 = state_11917__$1;(statearr_11944_11979[2] = inst_11896);
(statearr_11944_11979[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11918 === 18))
{var inst_11882 = (state_11917[15]);var inst_11876 = (state_11917[13]);var inst_11877 = (state_11917[14]);var inst_11899 = cljs.core.empty_QMARK_.call(null,inst_11877);var inst_11900 = inst_11876.call(null,inst_11882);var inst_11901 = cljs.core.not.call(null,inst_11900);var inst_11902 = (inst_11899) && (inst_11901);var state_11917__$1 = state_11917;var statearr_11945_11980 = state_11917__$1;(statearr_11945_11980[2] = inst_11902);
(statearr_11945_11980[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11918 === 19))
{var inst_11904 = (state_11917[2]);var state_11917__$1 = state_11917;if(cljs.core.truth_(inst_11904))
{var statearr_11946_11981 = state_11917__$1;(statearr_11946_11981[1] = 20);
} else
{var statearr_11947_11982 = state_11917__$1;(statearr_11947_11982[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11918 === 20))
{var inst_11881 = (state_11917[16]);var state_11917__$1 = state_11917;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11917__$1,23,out,inst_11881);
} else
{if((state_val_11918 === 21))
{var state_11917__$1 = state_11917;var statearr_11948_11983 = state_11917__$1;(statearr_11948_11983[2] = null);
(statearr_11948_11983[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11918 === 22))
{var inst_11874 = (state_11917[12]);var inst_11910 = (state_11917[2]);var inst_11866 = inst_11874;var state_11917__$1 = (function (){var statearr_11949 = state_11917;(statearr_11949[19] = inst_11910);
(statearr_11949[11] = inst_11866);
return statearr_11949;
})();var statearr_11950_11984 = state_11917__$1;(statearr_11950_11984[2] = null);
(statearr_11950_11984[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11918 === 23))
{var inst_11907 = (state_11917[2]);var state_11917__$1 = state_11917;var statearr_11951_11985 = state_11917__$1;(statearr_11951_11985[2] = inst_11907);
(statearr_11951_11985[1] = 22);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11955[0] = state_machine__6178__auto__);
(statearr_11955[1] = 1);
return statearr_11955;
});
var state_machine__6178__auto____1 = (function (state_11917){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11917);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11956){if((e11956 instanceof Object))
{var ex__6181__auto__ = e11956;var statearr_11957_11986 = state_11917;(statearr_11957_11986[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11917);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11956;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11987 = state_11917;
state_11917 = G__11987;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11917){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11958 = f__6193__auto__.call(null);(statearr_11958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11959);
return statearr_11958;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
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
cljs.core.async.Pub = (function (){var obj11989 = {};return obj11989;
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
return (function (p1__11990_SHARP_){if(cljs.core.truth_(p1__11990_SHARP_.call(null,topic)))
{return p1__11990_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11990_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12115 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12115 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12116){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12116 = meta12116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12115.cljs$lang$type = true;
cljs.core.async.t12115.cljs$lang$ctorStr = "cljs.core.async/t12115";
cljs.core.async.t12115.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12115");
});})(mults,ensure_mult))
;
cljs.core.async.t12115.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12115.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12115.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12115.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12115.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12115.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12115.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12115.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12117){var self__ = this;
var _12117__$1 = this;return self__.meta12116;
});})(mults,ensure_mult))
;
cljs.core.async.t12115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12117,meta12116__$1){var self__ = this;
var _12117__$1 = this;return (new cljs.core.async.t12115(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12116__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12115 = ((function (mults,ensure_mult){
return (function __GT_t12115(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12116){return (new cljs.core.async.t12115(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12116));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12115(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6192__auto___12239 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12191){var state_val_12192 = (state_12191[1]);if((state_val_12192 === 1))
{var state_12191__$1 = state_12191;var statearr_12193_12240 = state_12191__$1;(statearr_12193_12240[2] = null);
(statearr_12193_12240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 2))
{var state_12191__$1 = state_12191;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12191__$1,4,ch);
} else
{if((state_val_12192 === 3))
{var inst_12189 = (state_12191[2]);var state_12191__$1 = state_12191;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12191__$1,inst_12189);
} else
{if((state_val_12192 === 4))
{var inst_12120 = (state_12191[7]);var inst_12120__$1 = (state_12191[2]);var inst_12121 = (inst_12120__$1 == null);var state_12191__$1 = (function (){var statearr_12194 = state_12191;(statearr_12194[7] = inst_12120__$1);
return statearr_12194;
})();if(cljs.core.truth_(inst_12121))
{var statearr_12195_12241 = state_12191__$1;(statearr_12195_12241[1] = 5);
} else
{var statearr_12196_12242 = state_12191__$1;(statearr_12196_12242[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 5))
{var inst_12127 = cljs.core.deref.call(null,mults);var inst_12128 = cljs.core.vals.call(null,inst_12127);var inst_12129 = cljs.core.seq.call(null,inst_12128);var inst_12130 = inst_12129;var inst_12131 = null;var inst_12132 = 0;var inst_12133 = 0;var state_12191__$1 = (function (){var statearr_12197 = state_12191;(statearr_12197[8] = inst_12132);
(statearr_12197[9] = inst_12133);
(statearr_12197[10] = inst_12130);
(statearr_12197[11] = inst_12131);
return statearr_12197;
})();var statearr_12198_12243 = state_12191__$1;(statearr_12198_12243[2] = null);
(statearr_12198_12243[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 6))
{var inst_12120 = (state_12191[7]);var inst_12170 = (state_12191[12]);var inst_12168 = (state_12191[13]);var inst_12168__$1 = topic_fn.call(null,inst_12120);var inst_12169 = cljs.core.deref.call(null,mults);var inst_12170__$1 = cljs.core.get.call(null,inst_12169,inst_12168__$1);var state_12191__$1 = (function (){var statearr_12199 = state_12191;(statearr_12199[12] = inst_12170__$1);
(statearr_12199[13] = inst_12168__$1);
return statearr_12199;
})();if(cljs.core.truth_(inst_12170__$1))
{var statearr_12200_12244 = state_12191__$1;(statearr_12200_12244[1] = 19);
} else
{var statearr_12201_12245 = state_12191__$1;(statearr_12201_12245[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 7))
{var inst_12187 = (state_12191[2]);var state_12191__$1 = state_12191;var statearr_12202_12246 = state_12191__$1;(statearr_12202_12246[2] = inst_12187);
(statearr_12202_12246[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 8))
{var inst_12132 = (state_12191[8]);var inst_12133 = (state_12191[9]);var inst_12135 = (inst_12133 < inst_12132);var inst_12136 = inst_12135;var state_12191__$1 = state_12191;if(cljs.core.truth_(inst_12136))
{var statearr_12206_12247 = state_12191__$1;(statearr_12206_12247[1] = 10);
} else
{var statearr_12207_12248 = state_12191__$1;(statearr_12207_12248[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 9))
{var inst_12166 = (state_12191[2]);var state_12191__$1 = state_12191;var statearr_12208_12249 = state_12191__$1;(statearr_12208_12249[2] = inst_12166);
(statearr_12208_12249[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 10))
{var inst_12132 = (state_12191[8]);var inst_12133 = (state_12191[9]);var inst_12130 = (state_12191[10]);var inst_12131 = (state_12191[11]);var inst_12138 = cljs.core._nth.call(null,inst_12131,inst_12133);var inst_12139 = cljs.core.async.muxch_STAR_.call(null,inst_12138);var inst_12140 = cljs.core.async.close_BANG_.call(null,inst_12139);var inst_12141 = (inst_12133 + 1);var tmp12203 = inst_12132;var tmp12204 = inst_12130;var tmp12205 = inst_12131;var inst_12130__$1 = tmp12204;var inst_12131__$1 = tmp12205;var inst_12132__$1 = tmp12203;var inst_12133__$1 = inst_12141;var state_12191__$1 = (function (){var statearr_12209 = state_12191;(statearr_12209[14] = inst_12140);
(statearr_12209[8] = inst_12132__$1);
(statearr_12209[9] = inst_12133__$1);
(statearr_12209[10] = inst_12130__$1);
(statearr_12209[11] = inst_12131__$1);
return statearr_12209;
})();var statearr_12210_12250 = state_12191__$1;(statearr_12210_12250[2] = null);
(statearr_12210_12250[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 11))
{var inst_12144 = (state_12191[15]);var inst_12130 = (state_12191[10]);var inst_12144__$1 = cljs.core.seq.call(null,inst_12130);var state_12191__$1 = (function (){var statearr_12211 = state_12191;(statearr_12211[15] = inst_12144__$1);
return statearr_12211;
})();if(inst_12144__$1)
{var statearr_12212_12251 = state_12191__$1;(statearr_12212_12251[1] = 13);
} else
{var statearr_12213_12252 = state_12191__$1;(statearr_12213_12252[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 12))
{var inst_12164 = (state_12191[2]);var state_12191__$1 = state_12191;var statearr_12214_12253 = state_12191__$1;(statearr_12214_12253[2] = inst_12164);
(statearr_12214_12253[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 13))
{var inst_12144 = (state_12191[15]);var inst_12146 = cljs.core.chunked_seq_QMARK_.call(null,inst_12144);var state_12191__$1 = state_12191;if(inst_12146)
{var statearr_12215_12254 = state_12191__$1;(statearr_12215_12254[1] = 16);
} else
{var statearr_12216_12255 = state_12191__$1;(statearr_12216_12255[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 14))
{var state_12191__$1 = state_12191;var statearr_12217_12256 = state_12191__$1;(statearr_12217_12256[2] = null);
(statearr_12217_12256[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 15))
{var inst_12162 = (state_12191[2]);var state_12191__$1 = state_12191;var statearr_12218_12257 = state_12191__$1;(statearr_12218_12257[2] = inst_12162);
(statearr_12218_12257[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 16))
{var inst_12144 = (state_12191[15]);var inst_12148 = cljs.core.chunk_first.call(null,inst_12144);var inst_12149 = cljs.core.chunk_rest.call(null,inst_12144);var inst_12150 = cljs.core.count.call(null,inst_12148);var inst_12130 = inst_12149;var inst_12131 = inst_12148;var inst_12132 = inst_12150;var inst_12133 = 0;var state_12191__$1 = (function (){var statearr_12219 = state_12191;(statearr_12219[8] = inst_12132);
(statearr_12219[9] = inst_12133);
(statearr_12219[10] = inst_12130);
(statearr_12219[11] = inst_12131);
return statearr_12219;
})();var statearr_12220_12258 = state_12191__$1;(statearr_12220_12258[2] = null);
(statearr_12220_12258[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 17))
{var inst_12144 = (state_12191[15]);var inst_12153 = cljs.core.first.call(null,inst_12144);var inst_12154 = cljs.core.async.muxch_STAR_.call(null,inst_12153);var inst_12155 = cljs.core.async.close_BANG_.call(null,inst_12154);var inst_12156 = cljs.core.next.call(null,inst_12144);var inst_12130 = inst_12156;var inst_12131 = null;var inst_12132 = 0;var inst_12133 = 0;var state_12191__$1 = (function (){var statearr_12221 = state_12191;(statearr_12221[16] = inst_12155);
(statearr_12221[8] = inst_12132);
(statearr_12221[9] = inst_12133);
(statearr_12221[10] = inst_12130);
(statearr_12221[11] = inst_12131);
return statearr_12221;
})();var statearr_12222_12259 = state_12191__$1;(statearr_12222_12259[2] = null);
(statearr_12222_12259[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 18))
{var inst_12159 = (state_12191[2]);var state_12191__$1 = state_12191;var statearr_12223_12260 = state_12191__$1;(statearr_12223_12260[2] = inst_12159);
(statearr_12223_12260[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 19))
{var state_12191__$1 = state_12191;var statearr_12224_12261 = state_12191__$1;(statearr_12224_12261[2] = null);
(statearr_12224_12261[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 20))
{var state_12191__$1 = state_12191;var statearr_12225_12262 = state_12191__$1;(statearr_12225_12262[2] = null);
(statearr_12225_12262[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 21))
{var inst_12184 = (state_12191[2]);var state_12191__$1 = (function (){var statearr_12226 = state_12191;(statearr_12226[17] = inst_12184);
return statearr_12226;
})();var statearr_12227_12263 = state_12191__$1;(statearr_12227_12263[2] = null);
(statearr_12227_12263[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 22))
{var inst_12181 = (state_12191[2]);var state_12191__$1 = state_12191;var statearr_12228_12264 = state_12191__$1;(statearr_12228_12264[2] = inst_12181);
(statearr_12228_12264[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 23))
{var inst_12168 = (state_12191[13]);var inst_12172 = (state_12191[2]);var inst_12173 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12168);var state_12191__$1 = (function (){var statearr_12229 = state_12191;(statearr_12229[18] = inst_12172);
return statearr_12229;
})();var statearr_12230_12265 = state_12191__$1;(statearr_12230_12265[2] = inst_12173);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12191__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12192 === 24))
{var inst_12120 = (state_12191[7]);var inst_12170 = (state_12191[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12191,23,Object,null,22);var inst_12177 = cljs.core.async.muxch_STAR_.call(null,inst_12170);var state_12191__$1 = state_12191;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12191__$1,25,inst_12177,inst_12120);
} else
{if((state_val_12192 === 25))
{var inst_12179 = (state_12191[2]);var state_12191__$1 = state_12191;var statearr_12231_12266 = state_12191__$1;(statearr_12231_12266[2] = inst_12179);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12191__$1);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12235[0] = state_machine__6178__auto__);
(statearr_12235[1] = 1);
return statearr_12235;
});
var state_machine__6178__auto____1 = (function (state_12191){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12191);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12236){if((e12236 instanceof Object))
{var ex__6181__auto__ = e12236;var statearr_12237_12267 = state_12191;(statearr_12237_12267[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12191);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12236;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12268 = state_12191;
state_12191 = G__12268;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12191){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12238 = f__6193__auto__.call(null);(statearr_12238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12239);
return statearr_12238;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
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
,cljs.core.range.call(null,cnt));var c__6192__auto___12405 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12375){var state_val_12376 = (state_12375[1]);if((state_val_12376 === 1))
{var state_12375__$1 = state_12375;var statearr_12377_12406 = state_12375__$1;(statearr_12377_12406[2] = null);
(statearr_12377_12406[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12376 === 2))
{var inst_12338 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12339 = 0;var state_12375__$1 = (function (){var statearr_12378 = state_12375;(statearr_12378[7] = inst_12338);
(statearr_12378[8] = inst_12339);
return statearr_12378;
})();var statearr_12379_12407 = state_12375__$1;(statearr_12379_12407[2] = null);
(statearr_12379_12407[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12376 === 3))
{var inst_12373 = (state_12375[2]);var state_12375__$1 = state_12375;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12375__$1,inst_12373);
} else
{if((state_val_12376 === 4))
{var inst_12339 = (state_12375[8]);var inst_12341 = (inst_12339 < cnt);var state_12375__$1 = state_12375;if(cljs.core.truth_(inst_12341))
{var statearr_12380_12408 = state_12375__$1;(statearr_12380_12408[1] = 6);
} else
{var statearr_12381_12409 = state_12375__$1;(statearr_12381_12409[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12376 === 5))
{var inst_12359 = (state_12375[2]);var state_12375__$1 = (function (){var statearr_12382 = state_12375;(statearr_12382[9] = inst_12359);
return statearr_12382;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12375__$1,12,dchan);
} else
{if((state_val_12376 === 6))
{var state_12375__$1 = state_12375;var statearr_12383_12410 = state_12375__$1;(statearr_12383_12410[2] = null);
(statearr_12383_12410[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12376 === 7))
{var state_12375__$1 = state_12375;var statearr_12384_12411 = state_12375__$1;(statearr_12384_12411[2] = null);
(statearr_12384_12411[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12376 === 8))
{var inst_12357 = (state_12375[2]);var state_12375__$1 = state_12375;var statearr_12385_12412 = state_12375__$1;(statearr_12385_12412[2] = inst_12357);
(statearr_12385_12412[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12376 === 9))
{var inst_12339 = (state_12375[8]);var inst_12352 = (state_12375[2]);var inst_12353 = (inst_12339 + 1);var inst_12339__$1 = inst_12353;var state_12375__$1 = (function (){var statearr_12386 = state_12375;(statearr_12386[10] = inst_12352);
(statearr_12386[8] = inst_12339__$1);
return statearr_12386;
})();var statearr_12387_12413 = state_12375__$1;(statearr_12387_12413[2] = null);
(statearr_12387_12413[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12376 === 10))
{var inst_12343 = (state_12375[2]);var inst_12344 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12375__$1 = (function (){var statearr_12388 = state_12375;(statearr_12388[11] = inst_12343);
return statearr_12388;
})();var statearr_12389_12414 = state_12375__$1;(statearr_12389_12414[2] = inst_12344);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12375__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12376 === 11))
{var inst_12339 = (state_12375[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12375,10,Object,null,9);var inst_12348 = chs__$1.call(null,inst_12339);var inst_12349 = done.call(null,inst_12339);var inst_12350 = cljs.core.async.take_BANG_.call(null,inst_12348,inst_12349);var state_12375__$1 = state_12375;var statearr_12390_12415 = state_12375__$1;(statearr_12390_12415[2] = inst_12350);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12375__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12376 === 12))
{var inst_12361 = (state_12375[12]);var inst_12361__$1 = (state_12375[2]);var inst_12362 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12361__$1);var state_12375__$1 = (function (){var statearr_12391 = state_12375;(statearr_12391[12] = inst_12361__$1);
return statearr_12391;
})();if(cljs.core.truth_(inst_12362))
{var statearr_12392_12416 = state_12375__$1;(statearr_12392_12416[1] = 13);
} else
{var statearr_12393_12417 = state_12375__$1;(statearr_12393_12417[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12376 === 13))
{var inst_12364 = cljs.core.async.close_BANG_.call(null,out);var state_12375__$1 = state_12375;var statearr_12394_12418 = state_12375__$1;(statearr_12394_12418[2] = inst_12364);
(statearr_12394_12418[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12376 === 14))
{var inst_12361 = (state_12375[12]);var inst_12366 = cljs.core.apply.call(null,f,inst_12361);var state_12375__$1 = state_12375;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12375__$1,16,out,inst_12366);
} else
{if((state_val_12376 === 15))
{var inst_12371 = (state_12375[2]);var state_12375__$1 = state_12375;var statearr_12395_12419 = state_12375__$1;(statearr_12395_12419[2] = inst_12371);
(statearr_12395_12419[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12376 === 16))
{var inst_12368 = (state_12375[2]);var state_12375__$1 = (function (){var statearr_12396 = state_12375;(statearr_12396[13] = inst_12368);
return statearr_12396;
})();var statearr_12397_12420 = state_12375__$1;(statearr_12397_12420[2] = null);
(statearr_12397_12420[1] = 2);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12401[0] = state_machine__6178__auto__);
(statearr_12401[1] = 1);
return statearr_12401;
});
var state_machine__6178__auto____1 = (function (state_12375){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12375);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12402){if((e12402 instanceof Object))
{var ex__6181__auto__ = e12402;var statearr_12403_12421 = state_12375;(statearr_12403_12421[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12375);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12402;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12422 = state_12375;
state_12375 = G__12422;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12375){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12404 = f__6193__auto__.call(null);(statearr_12404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12405);
return statearr_12404;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12530 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12506){var state_val_12507 = (state_12506[1]);if((state_val_12507 === 1))
{var inst_12477 = cljs.core.vec.call(null,chs);var inst_12478 = inst_12477;var state_12506__$1 = (function (){var statearr_12508 = state_12506;(statearr_12508[7] = inst_12478);
return statearr_12508;
})();var statearr_12509_12531 = state_12506__$1;(statearr_12509_12531[2] = null);
(statearr_12509_12531[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12507 === 2))
{var inst_12478 = (state_12506[7]);var inst_12480 = cljs.core.count.call(null,inst_12478);var inst_12481 = (inst_12480 > 0);var state_12506__$1 = state_12506;if(cljs.core.truth_(inst_12481))
{var statearr_12510_12532 = state_12506__$1;(statearr_12510_12532[1] = 4);
} else
{var statearr_12511_12533 = state_12506__$1;(statearr_12511_12533[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12507 === 3))
{var inst_12504 = (state_12506[2]);var state_12506__$1 = state_12506;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12506__$1,inst_12504);
} else
{if((state_val_12507 === 4))
{var inst_12478 = (state_12506[7]);var state_12506__$1 = state_12506;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12506__$1,7,inst_12478);
} else
{if((state_val_12507 === 5))
{var inst_12500 = cljs.core.async.close_BANG_.call(null,out);var state_12506__$1 = state_12506;var statearr_12512_12534 = state_12506__$1;(statearr_12512_12534[2] = inst_12500);
(statearr_12512_12534[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12507 === 6))
{var inst_12502 = (state_12506[2]);var state_12506__$1 = state_12506;var statearr_12513_12535 = state_12506__$1;(statearr_12513_12535[2] = inst_12502);
(statearr_12513_12535[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12507 === 7))
{var inst_12485 = (state_12506[8]);var inst_12486 = (state_12506[9]);var inst_12485__$1 = (state_12506[2]);var inst_12486__$1 = cljs.core.nth.call(null,inst_12485__$1,0,null);var inst_12487 = cljs.core.nth.call(null,inst_12485__$1,1,null);var inst_12488 = (inst_12486__$1 == null);var state_12506__$1 = (function (){var statearr_12514 = state_12506;(statearr_12514[8] = inst_12485__$1);
(statearr_12514[10] = inst_12487);
(statearr_12514[9] = inst_12486__$1);
return statearr_12514;
})();if(cljs.core.truth_(inst_12488))
{var statearr_12515_12536 = state_12506__$1;(statearr_12515_12536[1] = 8);
} else
{var statearr_12516_12537 = state_12506__$1;(statearr_12516_12537[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12507 === 8))
{var inst_12478 = (state_12506[7]);var inst_12485 = (state_12506[8]);var inst_12487 = (state_12506[10]);var inst_12486 = (state_12506[9]);var inst_12490 = (function (){var c = inst_12487;var v = inst_12486;var vec__12483 = inst_12485;var cs = inst_12478;return ((function (c,v,vec__12483,cs,inst_12478,inst_12485,inst_12487,inst_12486,state_val_12507){
return (function (p1__12423_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12423_SHARP_);
});
;})(c,v,vec__12483,cs,inst_12478,inst_12485,inst_12487,inst_12486,state_val_12507))
})();var inst_12491 = cljs.core.filterv.call(null,inst_12490,inst_12478);var inst_12478__$1 = inst_12491;var state_12506__$1 = (function (){var statearr_12517 = state_12506;(statearr_12517[7] = inst_12478__$1);
return statearr_12517;
})();var statearr_12518_12538 = state_12506__$1;(statearr_12518_12538[2] = null);
(statearr_12518_12538[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12507 === 9))
{var inst_12486 = (state_12506[9]);var state_12506__$1 = state_12506;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12506__$1,11,out,inst_12486);
} else
{if((state_val_12507 === 10))
{var inst_12498 = (state_12506[2]);var state_12506__$1 = state_12506;var statearr_12520_12539 = state_12506__$1;(statearr_12520_12539[2] = inst_12498);
(statearr_12520_12539[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12507 === 11))
{var inst_12478 = (state_12506[7]);var inst_12495 = (state_12506[2]);var tmp12519 = inst_12478;var inst_12478__$1 = tmp12519;var state_12506__$1 = (function (){var statearr_12521 = state_12506;(statearr_12521[7] = inst_12478__$1);
(statearr_12521[11] = inst_12495);
return statearr_12521;
})();var statearr_12522_12540 = state_12506__$1;(statearr_12522_12540[2] = null);
(statearr_12522_12540[1] = 2);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12526 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12526[0] = state_machine__6178__auto__);
(statearr_12526[1] = 1);
return statearr_12526;
});
var state_machine__6178__auto____1 = (function (state_12506){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12506);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12527){if((e12527 instanceof Object))
{var ex__6181__auto__ = e12527;var statearr_12528_12541 = state_12506;(statearr_12528_12541[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12506);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12527;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12542 = state_12506;
state_12506 = G__12542;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12506){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12529 = f__6193__auto__.call(null);(statearr_12529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12530);
return statearr_12529;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12635 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12612){var state_val_12613 = (state_12612[1]);if((state_val_12613 === 1))
{var inst_12589 = 0;var state_12612__$1 = (function (){var statearr_12614 = state_12612;(statearr_12614[7] = inst_12589);
return statearr_12614;
})();var statearr_12615_12636 = state_12612__$1;(statearr_12615_12636[2] = null);
(statearr_12615_12636[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12613 === 2))
{var inst_12589 = (state_12612[7]);var inst_12591 = (inst_12589 < n);var state_12612__$1 = state_12612;if(cljs.core.truth_(inst_12591))
{var statearr_12616_12637 = state_12612__$1;(statearr_12616_12637[1] = 4);
} else
{var statearr_12617_12638 = state_12612__$1;(statearr_12617_12638[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12613 === 3))
{var inst_12609 = (state_12612[2]);var inst_12610 = cljs.core.async.close_BANG_.call(null,out);var state_12612__$1 = (function (){var statearr_12618 = state_12612;(statearr_12618[8] = inst_12609);
return statearr_12618;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12612__$1,inst_12610);
} else
{if((state_val_12613 === 4))
{var state_12612__$1 = state_12612;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12612__$1,7,ch);
} else
{if((state_val_12613 === 5))
{var state_12612__$1 = state_12612;var statearr_12619_12639 = state_12612__$1;(statearr_12619_12639[2] = null);
(statearr_12619_12639[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12613 === 6))
{var inst_12607 = (state_12612[2]);var state_12612__$1 = state_12612;var statearr_12620_12640 = state_12612__$1;(statearr_12620_12640[2] = inst_12607);
(statearr_12620_12640[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12613 === 7))
{var inst_12594 = (state_12612[9]);var inst_12594__$1 = (state_12612[2]);var inst_12595 = (inst_12594__$1 == null);var inst_12596 = cljs.core.not.call(null,inst_12595);var state_12612__$1 = (function (){var statearr_12621 = state_12612;(statearr_12621[9] = inst_12594__$1);
return statearr_12621;
})();if(inst_12596)
{var statearr_12622_12641 = state_12612__$1;(statearr_12622_12641[1] = 8);
} else
{var statearr_12623_12642 = state_12612__$1;(statearr_12623_12642[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12613 === 8))
{var inst_12594 = (state_12612[9]);var state_12612__$1 = state_12612;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12612__$1,11,out,inst_12594);
} else
{if((state_val_12613 === 9))
{var state_12612__$1 = state_12612;var statearr_12624_12643 = state_12612__$1;(statearr_12624_12643[2] = null);
(statearr_12624_12643[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12613 === 10))
{var inst_12604 = (state_12612[2]);var state_12612__$1 = state_12612;var statearr_12625_12644 = state_12612__$1;(statearr_12625_12644[2] = inst_12604);
(statearr_12625_12644[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12613 === 11))
{var inst_12589 = (state_12612[7]);var inst_12599 = (state_12612[2]);var inst_12600 = (inst_12589 + 1);var inst_12589__$1 = inst_12600;var state_12612__$1 = (function (){var statearr_12626 = state_12612;(statearr_12626[10] = inst_12599);
(statearr_12626[7] = inst_12589__$1);
return statearr_12626;
})();var statearr_12627_12645 = state_12612__$1;(statearr_12627_12645[2] = null);
(statearr_12627_12645[1] = 2);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12631 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12631[0] = state_machine__6178__auto__);
(statearr_12631[1] = 1);
return statearr_12631;
});
var state_machine__6178__auto____1 = (function (state_12612){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12612);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12632){if((e12632 instanceof Object))
{var ex__6181__auto__ = e12632;var statearr_12633_12646 = state_12612;(statearr_12633_12646[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12612);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12632;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12647 = state_12612;
state_12612 = G__12647;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12612){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12634 = f__6193__auto__.call(null);(statearr_12634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12635);
return statearr_12634;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12744 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12719){var state_val_12720 = (state_12719[1]);if((state_val_12720 === 1))
{var inst_12696 = null;var state_12719__$1 = (function (){var statearr_12721 = state_12719;(statearr_12721[7] = inst_12696);
return statearr_12721;
})();var statearr_12722_12745 = state_12719__$1;(statearr_12722_12745[2] = null);
(statearr_12722_12745[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12720 === 2))
{var state_12719__$1 = state_12719;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12719__$1,4,ch);
} else
{if((state_val_12720 === 3))
{var inst_12716 = (state_12719[2]);var inst_12717 = cljs.core.async.close_BANG_.call(null,out);var state_12719__$1 = (function (){var statearr_12723 = state_12719;(statearr_12723[8] = inst_12716);
return statearr_12723;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12719__$1,inst_12717);
} else
{if((state_val_12720 === 4))
{var inst_12699 = (state_12719[9]);var inst_12699__$1 = (state_12719[2]);var inst_12700 = (inst_12699__$1 == null);var inst_12701 = cljs.core.not.call(null,inst_12700);var state_12719__$1 = (function (){var statearr_12724 = state_12719;(statearr_12724[9] = inst_12699__$1);
return statearr_12724;
})();if(inst_12701)
{var statearr_12725_12746 = state_12719__$1;(statearr_12725_12746[1] = 5);
} else
{var statearr_12726_12747 = state_12719__$1;(statearr_12726_12747[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12720 === 5))
{var inst_12699 = (state_12719[9]);var inst_12696 = (state_12719[7]);var inst_12703 = cljs.core._EQ_.call(null,inst_12699,inst_12696);var state_12719__$1 = state_12719;if(inst_12703)
{var statearr_12727_12748 = state_12719__$1;(statearr_12727_12748[1] = 8);
} else
{var statearr_12728_12749 = state_12719__$1;(statearr_12728_12749[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12720 === 6))
{var state_12719__$1 = state_12719;var statearr_12730_12750 = state_12719__$1;(statearr_12730_12750[2] = null);
(statearr_12730_12750[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12720 === 7))
{var inst_12714 = (state_12719[2]);var state_12719__$1 = state_12719;var statearr_12731_12751 = state_12719__$1;(statearr_12731_12751[2] = inst_12714);
(statearr_12731_12751[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12720 === 8))
{var inst_12696 = (state_12719[7]);var tmp12729 = inst_12696;var inst_12696__$1 = tmp12729;var state_12719__$1 = (function (){var statearr_12732 = state_12719;(statearr_12732[7] = inst_12696__$1);
return statearr_12732;
})();var statearr_12733_12752 = state_12719__$1;(statearr_12733_12752[2] = null);
(statearr_12733_12752[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12720 === 9))
{var inst_12699 = (state_12719[9]);var state_12719__$1 = state_12719;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12719__$1,11,out,inst_12699);
} else
{if((state_val_12720 === 10))
{var inst_12711 = (state_12719[2]);var state_12719__$1 = state_12719;var statearr_12734_12753 = state_12719__$1;(statearr_12734_12753[2] = inst_12711);
(statearr_12734_12753[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12720 === 11))
{var inst_12699 = (state_12719[9]);var inst_12708 = (state_12719[2]);var inst_12696 = inst_12699;var state_12719__$1 = (function (){var statearr_12735 = state_12719;(statearr_12735[7] = inst_12696);
(statearr_12735[10] = inst_12708);
return statearr_12735;
})();var statearr_12736_12754 = state_12719__$1;(statearr_12736_12754[2] = null);
(statearr_12736_12754[1] = 2);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12740 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12740[0] = state_machine__6178__auto__);
(statearr_12740[1] = 1);
return statearr_12740;
});
var state_machine__6178__auto____1 = (function (state_12719){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12719);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12741){if((e12741 instanceof Object))
{var ex__6181__auto__ = e12741;var statearr_12742_12755 = state_12719;(statearr_12742_12755[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12719);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12741;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12756 = state_12719;
state_12719 = G__12756;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12719){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12743 = f__6193__auto__.call(null);(statearr_12743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12744);
return statearr_12743;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12891 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12861){var state_val_12862 = (state_12861[1]);if((state_val_12862 === 1))
{var inst_12824 = (new Array(n));var inst_12825 = inst_12824;var inst_12826 = 0;var state_12861__$1 = (function (){var statearr_12863 = state_12861;(statearr_12863[7] = inst_12825);
(statearr_12863[8] = inst_12826);
return statearr_12863;
})();var statearr_12864_12892 = state_12861__$1;(statearr_12864_12892[2] = null);
(statearr_12864_12892[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12862 === 2))
{var state_12861__$1 = state_12861;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12861__$1,4,ch);
} else
{if((state_val_12862 === 3))
{var inst_12859 = (state_12861[2]);var state_12861__$1 = state_12861;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12861__$1,inst_12859);
} else
{if((state_val_12862 === 4))
{var inst_12829 = (state_12861[9]);var inst_12829__$1 = (state_12861[2]);var inst_12830 = (inst_12829__$1 == null);var inst_12831 = cljs.core.not.call(null,inst_12830);var state_12861__$1 = (function (){var statearr_12865 = state_12861;(statearr_12865[9] = inst_12829__$1);
return statearr_12865;
})();if(inst_12831)
{var statearr_12866_12893 = state_12861__$1;(statearr_12866_12893[1] = 5);
} else
{var statearr_12867_12894 = state_12861__$1;(statearr_12867_12894[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12862 === 5))
{var inst_12825 = (state_12861[7]);var inst_12826 = (state_12861[8]);var inst_12829 = (state_12861[9]);var inst_12834 = (state_12861[10]);var inst_12833 = (inst_12825[inst_12826] = inst_12829);var inst_12834__$1 = (inst_12826 + 1);var inst_12835 = (inst_12834__$1 < n);var state_12861__$1 = (function (){var statearr_12868 = state_12861;(statearr_12868[11] = inst_12833);
(statearr_12868[10] = inst_12834__$1);
return statearr_12868;
})();if(cljs.core.truth_(inst_12835))
{var statearr_12869_12895 = state_12861__$1;(statearr_12869_12895[1] = 8);
} else
{var statearr_12870_12896 = state_12861__$1;(statearr_12870_12896[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12862 === 6))
{var inst_12826 = (state_12861[8]);var inst_12847 = (inst_12826 > 0);var state_12861__$1 = state_12861;if(cljs.core.truth_(inst_12847))
{var statearr_12872_12897 = state_12861__$1;(statearr_12872_12897[1] = 12);
} else
{var statearr_12873_12898 = state_12861__$1;(statearr_12873_12898[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12862 === 7))
{var inst_12857 = (state_12861[2]);var state_12861__$1 = state_12861;var statearr_12874_12899 = state_12861__$1;(statearr_12874_12899[2] = inst_12857);
(statearr_12874_12899[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12862 === 8))
{var inst_12825 = (state_12861[7]);var inst_12834 = (state_12861[10]);var tmp12871 = inst_12825;var inst_12825__$1 = tmp12871;var inst_12826 = inst_12834;var state_12861__$1 = (function (){var statearr_12875 = state_12861;(statearr_12875[7] = inst_12825__$1);
(statearr_12875[8] = inst_12826);
return statearr_12875;
})();var statearr_12876_12900 = state_12861__$1;(statearr_12876_12900[2] = null);
(statearr_12876_12900[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12862 === 9))
{var inst_12825 = (state_12861[7]);var inst_12839 = cljs.core.vec.call(null,inst_12825);var state_12861__$1 = state_12861;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12861__$1,11,out,inst_12839);
} else
{if((state_val_12862 === 10))
{var inst_12845 = (state_12861[2]);var state_12861__$1 = state_12861;var statearr_12877_12901 = state_12861__$1;(statearr_12877_12901[2] = inst_12845);
(statearr_12877_12901[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12862 === 11))
{var inst_12841 = (state_12861[2]);var inst_12842 = (new Array(n));var inst_12825 = inst_12842;var inst_12826 = 0;var state_12861__$1 = (function (){var statearr_12878 = state_12861;(statearr_12878[7] = inst_12825);
(statearr_12878[8] = inst_12826);
(statearr_12878[12] = inst_12841);
return statearr_12878;
})();var statearr_12879_12902 = state_12861__$1;(statearr_12879_12902[2] = null);
(statearr_12879_12902[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12862 === 12))
{var inst_12825 = (state_12861[7]);var inst_12849 = cljs.core.vec.call(null,inst_12825);var state_12861__$1 = state_12861;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12861__$1,15,out,inst_12849);
} else
{if((state_val_12862 === 13))
{var state_12861__$1 = state_12861;var statearr_12880_12903 = state_12861__$1;(statearr_12880_12903[2] = null);
(statearr_12880_12903[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12862 === 14))
{var inst_12854 = (state_12861[2]);var inst_12855 = cljs.core.async.close_BANG_.call(null,out);var state_12861__$1 = (function (){var statearr_12881 = state_12861;(statearr_12881[13] = inst_12854);
return statearr_12881;
})();var statearr_12882_12904 = state_12861__$1;(statearr_12882_12904[2] = inst_12855);
(statearr_12882_12904[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12862 === 15))
{var inst_12851 = (state_12861[2]);var state_12861__$1 = state_12861;var statearr_12883_12905 = state_12861__$1;(statearr_12883_12905[2] = inst_12851);
(statearr_12883_12905[1] = 14);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12887[0] = state_machine__6178__auto__);
(statearr_12887[1] = 1);
return statearr_12887;
});
var state_machine__6178__auto____1 = (function (state_12861){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12861);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12888){if((e12888 instanceof Object))
{var ex__6181__auto__ = e12888;var statearr_12889_12906 = state_12861;(statearr_12889_12906[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12861);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12888;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12907 = state_12861;
state_12861 = G__12907;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12861){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12890 = f__6193__auto__.call(null);(statearr_12890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12891);
return statearr_12890;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___13050 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_13020){var state_val_13021 = (state_13020[1]);if((state_val_13021 === 1))
{var inst_12979 = [];var inst_12980 = inst_12979;var inst_12981 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13020__$1 = (function (){var statearr_13022 = state_13020;(statearr_13022[7] = inst_12980);
(statearr_13022[8] = inst_12981);
return statearr_13022;
})();var statearr_13023_13051 = state_13020__$1;(statearr_13023_13051[2] = null);
(statearr_13023_13051[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13021 === 2))
{var state_13020__$1 = state_13020;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13020__$1,4,ch);
} else
{if((state_val_13021 === 3))
{var inst_13018 = (state_13020[2]);var state_13020__$1 = state_13020;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13020__$1,inst_13018);
} else
{if((state_val_13021 === 4))
{var inst_12984 = (state_13020[9]);var inst_12984__$1 = (state_13020[2]);var inst_12985 = (inst_12984__$1 == null);var inst_12986 = cljs.core.not.call(null,inst_12985);var state_13020__$1 = (function (){var statearr_13024 = state_13020;(statearr_13024[9] = inst_12984__$1);
return statearr_13024;
})();if(inst_12986)
{var statearr_13025_13052 = state_13020__$1;(statearr_13025_13052[1] = 5);
} else
{var statearr_13026_13053 = state_13020__$1;(statearr_13026_13053[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13021 === 5))
{var inst_12988 = (state_13020[10]);var inst_12984 = (state_13020[9]);var inst_12981 = (state_13020[8]);var inst_12988__$1 = f.call(null,inst_12984);var inst_12989 = cljs.core._EQ_.call(null,inst_12988__$1,inst_12981);var inst_12990 = cljs.core.keyword_identical_QMARK_.call(null,inst_12981,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12991 = (inst_12989) || (inst_12990);var state_13020__$1 = (function (){var statearr_13027 = state_13020;(statearr_13027[10] = inst_12988__$1);
return statearr_13027;
})();if(cljs.core.truth_(inst_12991))
{var statearr_13028_13054 = state_13020__$1;(statearr_13028_13054[1] = 8);
} else
{var statearr_13029_13055 = state_13020__$1;(statearr_13029_13055[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13021 === 6))
{var inst_12980 = (state_13020[7]);var inst_13005 = inst_12980.length;var inst_13006 = (inst_13005 > 0);var state_13020__$1 = state_13020;if(cljs.core.truth_(inst_13006))
{var statearr_13031_13056 = state_13020__$1;(statearr_13031_13056[1] = 12);
} else
{var statearr_13032_13057 = state_13020__$1;(statearr_13032_13057[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13021 === 7))
{var inst_13016 = (state_13020[2]);var state_13020__$1 = state_13020;var statearr_13033_13058 = state_13020__$1;(statearr_13033_13058[2] = inst_13016);
(statearr_13033_13058[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13021 === 8))
{var inst_12980 = (state_13020[7]);var inst_12988 = (state_13020[10]);var inst_12984 = (state_13020[9]);var inst_12993 = inst_12980.push(inst_12984);var tmp13030 = inst_12980;var inst_12980__$1 = tmp13030;var inst_12981 = inst_12988;var state_13020__$1 = (function (){var statearr_13034 = state_13020;(statearr_13034[7] = inst_12980__$1);
(statearr_13034[11] = inst_12993);
(statearr_13034[8] = inst_12981);
return statearr_13034;
})();var statearr_13035_13059 = state_13020__$1;(statearr_13035_13059[2] = null);
(statearr_13035_13059[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13021 === 9))
{var inst_12980 = (state_13020[7]);var inst_12996 = cljs.core.vec.call(null,inst_12980);var state_13020__$1 = state_13020;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13020__$1,11,out,inst_12996);
} else
{if((state_val_13021 === 10))
{var inst_13003 = (state_13020[2]);var state_13020__$1 = state_13020;var statearr_13036_13060 = state_13020__$1;(statearr_13036_13060[2] = inst_13003);
(statearr_13036_13060[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13021 === 11))
{var inst_12988 = (state_13020[10]);var inst_12984 = (state_13020[9]);var inst_12998 = (state_13020[2]);var inst_12999 = [];var inst_13000 = inst_12999.push(inst_12984);var inst_12980 = inst_12999;var inst_12981 = inst_12988;var state_13020__$1 = (function (){var statearr_13037 = state_13020;(statearr_13037[7] = inst_12980);
(statearr_13037[12] = inst_13000);
(statearr_13037[8] = inst_12981);
(statearr_13037[13] = inst_12998);
return statearr_13037;
})();var statearr_13038_13061 = state_13020__$1;(statearr_13038_13061[2] = null);
(statearr_13038_13061[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13021 === 12))
{var inst_12980 = (state_13020[7]);var inst_13008 = cljs.core.vec.call(null,inst_12980);var state_13020__$1 = state_13020;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13020__$1,15,out,inst_13008);
} else
{if((state_val_13021 === 13))
{var state_13020__$1 = state_13020;var statearr_13039_13062 = state_13020__$1;(statearr_13039_13062[2] = null);
(statearr_13039_13062[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13021 === 14))
{var inst_13013 = (state_13020[2]);var inst_13014 = cljs.core.async.close_BANG_.call(null,out);var state_13020__$1 = (function (){var statearr_13040 = state_13020;(statearr_13040[14] = inst_13013);
return statearr_13040;
})();var statearr_13041_13063 = state_13020__$1;(statearr_13041_13063[2] = inst_13014);
(statearr_13041_13063[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13021 === 15))
{var inst_13010 = (state_13020[2]);var state_13020__$1 = state_13020;var statearr_13042_13064 = state_13020__$1;(statearr_13042_13064[2] = inst_13010);
(statearr_13042_13064[1] = 14);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13046[0] = state_machine__6178__auto__);
(statearr_13046[1] = 1);
return statearr_13046;
});
var state_machine__6178__auto____1 = (function (state_13020){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13020);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13047){if((e13047 instanceof Object))
{var ex__6181__auto__ = e13047;var statearr_13048_13065 = state_13020;(statearr_13048_13065[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13020);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13047;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13066 = state_13020;
state_13020 = G__13066;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13020){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13049 = f__6193__auto__.call(null);(statearr_13049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13050);
return statearr_13049;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
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