// Compiled by ClojureScript 0.0-2234
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10653 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10653 = (function (f,fn_handler,meta10654){
this.f = f;
this.fn_handler = fn_handler;
this.meta10654 = meta10654;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10653.cljs$lang$type = true;
cljs.core.async.t10653.cljs$lang$ctorStr = "cljs.core.async/t10653";
cljs.core.async.t10653.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"cljs.core.async/t10653");
});
cljs.core.async.t10653.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10653.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10653.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10655){var self__ = this;
var _10655__$1 = this;return self__.meta10654;
});
cljs.core.async.t10653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10655,meta10654__$1){var self__ = this;
var _10655__$1 = this;return (new cljs.core.async.t10653(self__.f,self__.fn_handler,meta10654__$1));
});
cljs.core.async.__GT_t10653 = (function __GT_t10653(f__$1,fn_handler__$1,meta10654){return (new cljs.core.async.t10653(f__$1,fn_handler__$1,meta10654));
});
}
return (new cljs.core.async.t10653(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10657 = buff;if(G__10657)
{var bit__4188__auto__ = null;if(cljs.core.truth_((function (){var or__3538__auto__ = bit__4188__auto__;if(cljs.core.truth_(or__3538__auto__))
{return or__3538__auto__;
} else
{return G__10657.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10657.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10657);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10657);
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
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
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
{var val_10658 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10658);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10658,ret){
return (function (){return fn1.call(null,val_10658);
});})(val_10658,ret))
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
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4394__auto___10659 = n;var x_10660 = 0;while(true){
if((x_10660 < n__4394__auto___10659))
{(a[x_10660] = 0);
{
var G__10661 = (x_10660 + 1);
x_10660 = G__10661;
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
var G__10662 = (i + 1);
i = G__10662;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10666 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10666 = (function (flag,alt_flag,meta10667){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10667 = meta10667;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10666.cljs$lang$type = true;
cljs.core.async.t10666.cljs$lang$ctorStr = "cljs.core.async/t10666";
cljs.core.async.t10666.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"cljs.core.async/t10666");
});})(flag))
;
cljs.core.async.t10666.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10666.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10666.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10666.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10668){var self__ = this;
var _10668__$1 = this;return self__.meta10667;
});})(flag))
;
cljs.core.async.t10666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10668,meta10667__$1){var self__ = this;
var _10668__$1 = this;return (new cljs.core.async.t10666(self__.flag,self__.alt_flag,meta10667__$1));
});})(flag))
;
cljs.core.async.__GT_t10666 = ((function (flag){
return (function __GT_t10666(flag__$1,alt_flag__$1,meta10667){return (new cljs.core.async.t10666(flag__$1,alt_flag__$1,meta10667));
});})(flag))
;
}
return (new cljs.core.async.t10666(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10672 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10672 = (function (cb,flag,alt_handler,meta10673){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10673 = meta10673;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10672.cljs$lang$type = true;
cljs.core.async.t10672.cljs$lang$ctorStr = "cljs.core.async/t10672";
cljs.core.async.t10672.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"cljs.core.async/t10672");
});
cljs.core.async.t10672.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10672.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10672.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10674){var self__ = this;
var _10674__$1 = this;return self__.meta10673;
});
cljs.core.async.t10672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10674,meta10673__$1){var self__ = this;
var _10674__$1 = this;return (new cljs.core.async.t10672(self__.cb,self__.flag,self__.alt_handler,meta10673__$1));
});
cljs.core.async.__GT_t10672 = (function __GT_t10672(cb__$1,flag__$1,alt_handler__$1,meta10673){return (new cljs.core.async.t10672(cb__$1,flag__$1,alt_handler__$1,meta10673));
});
}
return (new cljs.core.async.t10672(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10675_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10675_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10676_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10676_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3538__auto__ = wport;if(cljs.core.truth_(or__3538__auto__))
{return or__3538__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10677 = (i + 1);
i = G__10677;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3538__auto__ = ret;if(cljs.core.truth_(or__3538__auto__))
{return or__3538__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__3526__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3526__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3526__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__10678){var map__10680 = p__10678;var map__10680__$1 = ((cljs.core.seq_QMARK_.call(null,map__10680))?cljs.core.apply.call(null,cljs.core.hash_map,map__10680):map__10680);var opts = map__10680__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10678 = null;if (arguments.length > 1) {
  p__10678 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10678);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10681){
var ports = cljs.core.first(arglist__10681);
var p__10678 = cljs.core.rest(arglist__10681);
return alts_BANG___delegate(ports,p__10678);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10689 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10689 = (function (ch,f,map_LT_,meta10690){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10690 = meta10690;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10689.cljs$lang$type = true;
cljs.core.async.t10689.cljs$lang$ctorStr = "cljs.core.async/t10689";
cljs.core.async.t10689.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"cljs.core.async/t10689");
});
cljs.core.async.t10689.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10689.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t10689.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10689.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10692 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10692 = (function (fn1,_,meta10690,ch,f,map_LT_,meta10693){
this.fn1 = fn1;
this._ = _;
this.meta10690 = meta10690;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10693 = meta10693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10692.cljs$lang$type = true;
cljs.core.async.t10692.cljs$lang$ctorStr = "cljs.core.async/t10692";
cljs.core.async.t10692.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"cljs.core.async/t10692");
});})(___$1))
;
cljs.core.async.t10692.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10692.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10682_SHARP_){return f1.call(null,(((p1__10682_SHARP_ == null))?null:self__.f.call(null,p1__10682_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10692.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10694){var self__ = this;
var _10694__$1 = this;return self__.meta10693;
});})(___$1))
;
cljs.core.async.t10692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10694,meta10693__$1){var self__ = this;
var _10694__$1 = this;return (new cljs.core.async.t10692(self__.fn1,self__._,self__.meta10690,self__.ch,self__.f,self__.map_LT_,meta10693__$1));
});})(___$1))
;
cljs.core.async.__GT_t10692 = ((function (___$1){
return (function __GT_t10692(fn1__$1,___$2,meta10690__$1,ch__$2,f__$2,map_LT___$2,meta10693){return (new cljs.core.async.t10692(fn1__$1,___$2,meta10690__$1,ch__$2,f__$2,map_LT___$2,meta10693));
});})(___$1))
;
}
return (new cljs.core.async.t10692(fn1,___$1,self__.meta10690,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3526__auto__ = ret;if(cljs.core.truth_(and__3526__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3526__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10689.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10689.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10689.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10691){var self__ = this;
var _10691__$1 = this;return self__.meta10690;
});
cljs.core.async.t10689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10691,meta10690__$1){var self__ = this;
var _10691__$1 = this;return (new cljs.core.async.t10689(self__.ch,self__.f,self__.map_LT_,meta10690__$1));
});
cljs.core.async.__GT_t10689 = (function __GT_t10689(ch__$1,f__$1,map_LT___$1,meta10690){return (new cljs.core.async.t10689(ch__$1,f__$1,map_LT___$1,meta10690));
});
}
return (new cljs.core.async.t10689(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10698 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10698 = (function (ch,f,map_GT_,meta10699){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10699 = meta10699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10698.cljs$lang$type = true;
cljs.core.async.t10698.cljs$lang$ctorStr = "cljs.core.async/t10698";
cljs.core.async.t10698.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"cljs.core.async/t10698");
});
cljs.core.async.t10698.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10698.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t10698.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10698.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10698.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10698.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10700){var self__ = this;
var _10700__$1 = this;return self__.meta10699;
});
cljs.core.async.t10698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10700,meta10699__$1){var self__ = this;
var _10700__$1 = this;return (new cljs.core.async.t10698(self__.ch,self__.f,self__.map_GT_,meta10699__$1));
});
cljs.core.async.__GT_t10698 = (function __GT_t10698(ch__$1,f__$1,map_GT___$1,meta10699){return (new cljs.core.async.t10698(ch__$1,f__$1,map_GT___$1,meta10699));
});
}
return (new cljs.core.async.t10698(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10704 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10704 = (function (ch,p,filter_GT_,meta10705){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10705 = meta10705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10704.cljs$lang$type = true;
cljs.core.async.t10704.cljs$lang$ctorStr = "cljs.core.async/t10704";
cljs.core.async.t10704.cljs$lang$ctorPrWriter = (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"cljs.core.async/t10704");
});
cljs.core.async.t10704.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10704.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t10704.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10704.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10704.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10704.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10704.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10706){var self__ = this;
var _10706__$1 = this;return self__.meta10705;
});
cljs.core.async.t10704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10706,meta10705__$1){var self__ = this;
var _10706__$1 = this;return (new cljs.core.async.t10704(self__.ch,self__.p,self__.filter_GT_,meta10705__$1));
});
cljs.core.async.__GT_t10704 = (function __GT_t10704(ch__$1,p__$1,filter_GT___$1,meta10705){return (new cljs.core.async.t10704(ch__$1,p__$1,filter_GT___$1,meta10705));
});
}
return (new cljs.core.async.t10704(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6361__auto___10789 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6361__auto___10789,out){
return (function (){var f__6362__auto__ = (function (){var switch__6346__auto__ = ((function (c__6361__auto___10789,out){
return (function (state_10768){var state_val_10769 = (state_10768[1]);if((state_val_10769 === 7))
{var inst_10764 = (state_10768[2]);var state_10768__$1 = state_10768;var statearr_10770_10790 = state_10768__$1;(statearr_10770_10790[2] = inst_10764);
(statearr_10770_10790[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10769 === 1))
{var state_10768__$1 = state_10768;var statearr_10771_10791 = state_10768__$1;(statearr_10771_10791[2] = null);
(statearr_10771_10791[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10769 === 4))
{var inst_10750 = (state_10768[7]);var inst_10750__$1 = (state_10768[2]);var inst_10751 = (inst_10750__$1 == null);var state_10768__$1 = (function (){var statearr_10772 = state_10768;(statearr_10772[7] = inst_10750__$1);
return statearr_10772;
})();if(cljs.core.truth_(inst_10751))
{var statearr_10773_10792 = state_10768__$1;(statearr_10773_10792[1] = 5);
} else
{var statearr_10774_10793 = state_10768__$1;(statearr_10774_10793[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10769 === 6))
{var inst_10750 = (state_10768[7]);var inst_10755 = p.call(null,inst_10750);var state_10768__$1 = state_10768;if(cljs.core.truth_(inst_10755))
{var statearr_10775_10794 = state_10768__$1;(statearr_10775_10794[1] = 8);
} else
{var statearr_10776_10795 = state_10768__$1;(statearr_10776_10795[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10769 === 3))
{var inst_10766 = (state_10768[2]);var state_10768__$1 = state_10768;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10768__$1,inst_10766);
} else
{if((state_val_10769 === 2))
{var state_10768__$1 = state_10768;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10768__$1,4,ch);
} else
{if((state_val_10769 === 11))
{var inst_10758 = (state_10768[2]);var state_10768__$1 = state_10768;var statearr_10777_10796 = state_10768__$1;(statearr_10777_10796[2] = inst_10758);
(statearr_10777_10796[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10769 === 9))
{var state_10768__$1 = state_10768;var statearr_10778_10797 = state_10768__$1;(statearr_10778_10797[2] = null);
(statearr_10778_10797[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10769 === 5))
{var inst_10753 = cljs.core.async.close_BANG_.call(null,out);var state_10768__$1 = state_10768;var statearr_10779_10798 = state_10768__$1;(statearr_10779_10798[2] = inst_10753);
(statearr_10779_10798[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10769 === 10))
{var inst_10761 = (state_10768[2]);var state_10768__$1 = (function (){var statearr_10780 = state_10768;(statearr_10780[8] = inst_10761);
return statearr_10780;
})();var statearr_10781_10799 = state_10768__$1;(statearr_10781_10799[2] = null);
(statearr_10781_10799[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10769 === 8))
{var inst_10750 = (state_10768[7]);var state_10768__$1 = state_10768;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10768__$1,11,out,inst_10750);
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
});})(c__6361__auto___10789,out))
;return ((function (switch__6346__auto__,c__6361__auto___10789,out){
return (function() {
var state_machine__6347__auto__ = null;
var state_machine__6347__auto____0 = (function (){var statearr_10785 = [null,null,null,null,null,null,null,null,null];(statearr_10785[0] = state_machine__6347__auto__);
(statearr_10785[1] = 1);
return statearr_10785;
});
var state_machine__6347__auto____1 = (function (state_10768){while(true){
var ret_value__6348__auto__ = (function (){try{while(true){
var result__6349__auto__ = switch__6346__auto__.call(null,state_10768);if(cljs.core.keyword_identical_QMARK_.call(null,result__6349__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6349__auto__;
}
break;
}
}catch (e10786){if((e10786 instanceof Object))
{var ex__6350__auto__ = e10786;var statearr_10787_10800 = state_10768;(statearr_10787_10800[5] = ex__6350__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10768);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10786;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6348__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10801 = state_10768;
state_10768 = G__10801;
continue;
}
} else
{return ret_value__6348__auto__;
}
break;
}
});
state_machine__6347__auto__ = function(state_10768){
switch(arguments.length){
case 0:
return state_machine__6347__auto____0.call(this);
case 1:
return state_machine__6347__auto____1.call(this,state_10768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6347__auto____0;
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6347__auto____1;
return state_machine__6347__auto__;
})()
;})(switch__6346__auto__,c__6361__auto___10789,out))
})();var state__6363__auto__ = (function (){var statearr_10788 = f__6362__auto__.call(null);(statearr_10788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6361__auto___10789);
return statearr_10788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6363__auto__);
});})(c__6361__auto___10789,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6361__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6361__auto__){
return (function (){var f__6362__auto__ = (function (){var switch__6346__auto__ = ((function (c__6361__auto__){
return (function (state_10967){var state_val_10968 = (state_10967[1]);if((state_val_10968 === 7))
{var inst_10963 = (state_10967[2]);var state_10967__$1 = state_10967;var statearr_10969_11010 = state_10967__$1;(statearr_10969_11010[2] = inst_10963);
(statearr_10969_11010[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 20))
{var inst_10933 = (state_10967[7]);var inst_10944 = (state_10967[2]);var inst_10945 = cljs.core.next.call(null,inst_10933);var inst_10919 = inst_10945;var inst_10920 = null;var inst_10921 = 0;var inst_10922 = 0;var state_10967__$1 = (function (){var statearr_10970 = state_10967;(statearr_10970[8] = inst_10921);
(statearr_10970[9] = inst_10920);
(statearr_10970[10] = inst_10944);
(statearr_10970[11] = inst_10919);
(statearr_10970[12] = inst_10922);
return statearr_10970;
})();var statearr_10971_11011 = state_10967__$1;(statearr_10971_11011[2] = null);
(statearr_10971_11011[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 1))
{var state_10967__$1 = state_10967;var statearr_10972_11012 = state_10967__$1;(statearr_10972_11012[2] = null);
(statearr_10972_11012[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 4))
{var inst_10908 = (state_10967[13]);var inst_10908__$1 = (state_10967[2]);var inst_10909 = (inst_10908__$1 == null);var state_10967__$1 = (function (){var statearr_10973 = state_10967;(statearr_10973[13] = inst_10908__$1);
return statearr_10973;
})();if(cljs.core.truth_(inst_10909))
{var statearr_10974_11013 = state_10967__$1;(statearr_10974_11013[1] = 5);
} else
{var statearr_10975_11014 = state_10967__$1;(statearr_10975_11014[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 15))
{var state_10967__$1 = state_10967;var statearr_10979_11015 = state_10967__$1;(statearr_10979_11015[2] = null);
(statearr_10979_11015[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 21))
{var state_10967__$1 = state_10967;var statearr_10980_11016 = state_10967__$1;(statearr_10980_11016[2] = null);
(statearr_10980_11016[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 13))
{var inst_10921 = (state_10967[8]);var inst_10920 = (state_10967[9]);var inst_10919 = (state_10967[11]);var inst_10922 = (state_10967[12]);var inst_10929 = (state_10967[2]);var inst_10930 = (inst_10922 + 1);var tmp10976 = inst_10921;var tmp10977 = inst_10920;var tmp10978 = inst_10919;var inst_10919__$1 = tmp10978;var inst_10920__$1 = tmp10977;var inst_10921__$1 = tmp10976;var inst_10922__$1 = inst_10930;var state_10967__$1 = (function (){var statearr_10981 = state_10967;(statearr_10981[8] = inst_10921__$1);
(statearr_10981[14] = inst_10929);
(statearr_10981[9] = inst_10920__$1);
(statearr_10981[11] = inst_10919__$1);
(statearr_10981[12] = inst_10922__$1);
return statearr_10981;
})();var statearr_10982_11017 = state_10967__$1;(statearr_10982_11017[2] = null);
(statearr_10982_11017[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 22))
{var state_10967__$1 = state_10967;var statearr_10983_11018 = state_10967__$1;(statearr_10983_11018[2] = null);
(statearr_10983_11018[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 6))
{var inst_10908 = (state_10967[13]);var inst_10917 = f.call(null,inst_10908);var inst_10918 = cljs.core.seq.call(null,inst_10917);var inst_10919 = inst_10918;var inst_10920 = null;var inst_10921 = 0;var inst_10922 = 0;var state_10967__$1 = (function (){var statearr_10984 = state_10967;(statearr_10984[8] = inst_10921);
(statearr_10984[9] = inst_10920);
(statearr_10984[11] = inst_10919);
(statearr_10984[12] = inst_10922);
return statearr_10984;
})();var statearr_10985_11019 = state_10967__$1;(statearr_10985_11019[2] = null);
(statearr_10985_11019[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 17))
{var inst_10933 = (state_10967[7]);var inst_10937 = cljs.core.chunk_first.call(null,inst_10933);var inst_10938 = cljs.core.chunk_rest.call(null,inst_10933);var inst_10939 = cljs.core.count.call(null,inst_10937);var inst_10919 = inst_10938;var inst_10920 = inst_10937;var inst_10921 = inst_10939;var inst_10922 = 0;var state_10967__$1 = (function (){var statearr_10986 = state_10967;(statearr_10986[8] = inst_10921);
(statearr_10986[9] = inst_10920);
(statearr_10986[11] = inst_10919);
(statearr_10986[12] = inst_10922);
return statearr_10986;
})();var statearr_10987_11020 = state_10967__$1;(statearr_10987_11020[2] = null);
(statearr_10987_11020[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 3))
{var inst_10965 = (state_10967[2]);var state_10967__$1 = state_10967;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10967__$1,inst_10965);
} else
{if((state_val_10968 === 12))
{var inst_10953 = (state_10967[2]);var state_10967__$1 = state_10967;var statearr_10988_11021 = state_10967__$1;(statearr_10988_11021[2] = inst_10953);
(statearr_10988_11021[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 2))
{var state_10967__$1 = state_10967;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10967__$1,4,in$);
} else
{if((state_val_10968 === 23))
{var inst_10961 = (state_10967[2]);var state_10967__$1 = state_10967;var statearr_10989_11022 = state_10967__$1;(statearr_10989_11022[2] = inst_10961);
(statearr_10989_11022[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 19))
{var inst_10948 = (state_10967[2]);var state_10967__$1 = state_10967;var statearr_10990_11023 = state_10967__$1;(statearr_10990_11023[2] = inst_10948);
(statearr_10990_11023[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 11))
{var inst_10933 = (state_10967[7]);var inst_10919 = (state_10967[11]);var inst_10933__$1 = cljs.core.seq.call(null,inst_10919);var state_10967__$1 = (function (){var statearr_10991 = state_10967;(statearr_10991[7] = inst_10933__$1);
return statearr_10991;
})();if(inst_10933__$1)
{var statearr_10992_11024 = state_10967__$1;(statearr_10992_11024[1] = 14);
} else
{var statearr_10993_11025 = state_10967__$1;(statearr_10993_11025[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 9))
{var inst_10955 = (state_10967[2]);var inst_10956 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_10967__$1 = (function (){var statearr_10994 = state_10967;(statearr_10994[15] = inst_10955);
return statearr_10994;
})();if(cljs.core.truth_(inst_10956))
{var statearr_10995_11026 = state_10967__$1;(statearr_10995_11026[1] = 21);
} else
{var statearr_10996_11027 = state_10967__$1;(statearr_10996_11027[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 5))
{var inst_10911 = cljs.core.async.close_BANG_.call(null,out);var state_10967__$1 = state_10967;var statearr_10997_11028 = state_10967__$1;(statearr_10997_11028[2] = inst_10911);
(statearr_10997_11028[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 14))
{var inst_10933 = (state_10967[7]);var inst_10935 = cljs.core.chunked_seq_QMARK_.call(null,inst_10933);var state_10967__$1 = state_10967;if(inst_10935)
{var statearr_10998_11029 = state_10967__$1;(statearr_10998_11029[1] = 17);
} else
{var statearr_10999_11030 = state_10967__$1;(statearr_10999_11030[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 16))
{var inst_10951 = (state_10967[2]);var state_10967__$1 = state_10967;var statearr_11000_11031 = state_10967__$1;(statearr_11000_11031[2] = inst_10951);
(statearr_11000_11031[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 10))
{var inst_10920 = (state_10967[9]);var inst_10922 = (state_10967[12]);var inst_10927 = cljs.core._nth.call(null,inst_10920,inst_10922);var state_10967__$1 = state_10967;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10967__$1,13,out,inst_10927);
} else
{if((state_val_10968 === 18))
{var inst_10933 = (state_10967[7]);var inst_10942 = cljs.core.first.call(null,inst_10933);var state_10967__$1 = state_10967;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10967__$1,20,out,inst_10942);
} else
{if((state_val_10968 === 8))
{var inst_10921 = (state_10967[8]);var inst_10922 = (state_10967[12]);var inst_10924 = (inst_10922 < inst_10921);var inst_10925 = inst_10924;var state_10967__$1 = state_10967;if(cljs.core.truth_(inst_10925))
{var statearr_11001_11032 = state_10967__$1;(statearr_11001_11032[1] = 10);
} else
{var statearr_11002_11033 = state_10967__$1;(statearr_11002_11033[1] = 11);
}
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
});})(c__6361__auto__))
;return ((function (switch__6346__auto__,c__6361__auto__){
return (function() {
var state_machine__6347__auto__ = null;
var state_machine__6347__auto____0 = (function (){var statearr_11006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11006[0] = state_machine__6347__auto__);
(statearr_11006[1] = 1);
return statearr_11006;
});
var state_machine__6347__auto____1 = (function (state_10967){while(true){
var ret_value__6348__auto__ = (function (){try{while(true){
var result__6349__auto__ = switch__6346__auto__.call(null,state_10967);if(cljs.core.keyword_identical_QMARK_.call(null,result__6349__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6349__auto__;
}
break;
}
}catch (e11007){if((e11007 instanceof Object))
{var ex__6350__auto__ = e11007;var statearr_11008_11034 = state_10967;(statearr_11008_11034[5] = ex__6350__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10967);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11007;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6348__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11035 = state_10967;
state_10967 = G__11035;
continue;
}
} else
{return ret_value__6348__auto__;
}
break;
}
});
state_machine__6347__auto__ = function(state_10967){
switch(arguments.length){
case 0:
return state_machine__6347__auto____0.call(this);
case 1:
return state_machine__6347__auto____1.call(this,state_10967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6347__auto____0;
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6347__auto____1;
return state_machine__6347__auto__;
})()
;})(switch__6346__auto__,c__6361__auto__))
})();var state__6363__auto__ = (function (){var statearr_11009 = f__6362__auto__.call(null);(statearr_11009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6361__auto__);
return statearr_11009;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6363__auto__);
});})(c__6361__auto__))
);
return c__6361__auto__;
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
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6361__auto___11130 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6361__auto___11130){
return (function (){var f__6362__auto__ = (function (){var switch__6346__auto__ = ((function (c__6361__auto___11130){
return (function (state_11106){var state_val_11107 = (state_11106[1]);if((state_val_11107 === 7))
{var inst_11102 = (state_11106[2]);var state_11106__$1 = state_11106;var statearr_11108_11131 = state_11106__$1;(statearr_11108_11131[2] = inst_11102);
(statearr_11108_11131[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11107 === 1))
{var state_11106__$1 = state_11106;var statearr_11109_11132 = state_11106__$1;(statearr_11109_11132[2] = null);
(statearr_11109_11132[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11107 === 4))
{var inst_11085 = (state_11106[7]);var inst_11085__$1 = (state_11106[2]);var inst_11086 = (inst_11085__$1 == null);var state_11106__$1 = (function (){var statearr_11110 = state_11106;(statearr_11110[7] = inst_11085__$1);
return statearr_11110;
})();if(cljs.core.truth_(inst_11086))
{var statearr_11111_11133 = state_11106__$1;(statearr_11111_11133[1] = 5);
} else
{var statearr_11112_11134 = state_11106__$1;(statearr_11112_11134[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11107 === 13))
{var state_11106__$1 = state_11106;var statearr_11113_11135 = state_11106__$1;(statearr_11113_11135[2] = null);
(statearr_11113_11135[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11107 === 6))
{var inst_11085 = (state_11106[7]);var state_11106__$1 = state_11106;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11106__$1,11,to,inst_11085);
} else
{if((state_val_11107 === 3))
{var inst_11104 = (state_11106[2]);var state_11106__$1 = state_11106;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11106__$1,inst_11104);
} else
{if((state_val_11107 === 12))
{var state_11106__$1 = state_11106;var statearr_11114_11136 = state_11106__$1;(statearr_11114_11136[2] = null);
(statearr_11114_11136[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11107 === 2))
{var state_11106__$1 = state_11106;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11106__$1,4,from);
} else
{if((state_val_11107 === 11))
{var inst_11095 = (state_11106[2]);var state_11106__$1 = state_11106;if(cljs.core.truth_(inst_11095))
{var statearr_11115_11137 = state_11106__$1;(statearr_11115_11137[1] = 12);
} else
{var statearr_11116_11138 = state_11106__$1;(statearr_11116_11138[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11107 === 9))
{var state_11106__$1 = state_11106;var statearr_11117_11139 = state_11106__$1;(statearr_11117_11139[2] = null);
(statearr_11117_11139[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11107 === 5))
{var state_11106__$1 = state_11106;if(cljs.core.truth_(close_QMARK_))
{var statearr_11118_11140 = state_11106__$1;(statearr_11118_11140[1] = 8);
} else
{var statearr_11119_11141 = state_11106__$1;(statearr_11119_11141[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11107 === 14))
{var inst_11100 = (state_11106[2]);var state_11106__$1 = state_11106;var statearr_11120_11142 = state_11106__$1;(statearr_11120_11142[2] = inst_11100);
(statearr_11120_11142[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11107 === 10))
{var inst_11092 = (state_11106[2]);var state_11106__$1 = state_11106;var statearr_11121_11143 = state_11106__$1;(statearr_11121_11143[2] = inst_11092);
(statearr_11121_11143[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11107 === 8))
{var inst_11089 = cljs.core.async.close_BANG_.call(null,to);var state_11106__$1 = state_11106;var statearr_11122_11144 = state_11106__$1;(statearr_11122_11144[2] = inst_11089);
(statearr_11122_11144[1] = 10);
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
});})(c__6361__auto___11130))
;return ((function (switch__6346__auto__,c__6361__auto___11130){
return (function() {
var state_machine__6347__auto__ = null;
var state_machine__6347__auto____0 = (function (){var statearr_11126 = [null,null,null,null,null,null,null,null];(statearr_11126[0] = state_machine__6347__auto__);
(statearr_11126[1] = 1);
return statearr_11126;
});
var state_machine__6347__auto____1 = (function (state_11106){while(true){
var ret_value__6348__auto__ = (function (){try{while(true){
var result__6349__auto__ = switch__6346__auto__.call(null,state_11106);if(cljs.core.keyword_identical_QMARK_.call(null,result__6349__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6349__auto__;
}
break;
}
}catch (e11127){if((e11127 instanceof Object))
{var ex__6350__auto__ = e11127;var statearr_11128_11145 = state_11106;(statearr_11128_11145[5] = ex__6350__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11106);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6348__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11146 = state_11106;
state_11106 = G__11146;
continue;
}
} else
{return ret_value__6348__auto__;
}
break;
}
});
state_machine__6347__auto__ = function(state_11106){
switch(arguments.length){
case 0:
return state_machine__6347__auto____0.call(this);
case 1:
return state_machine__6347__auto____1.call(this,state_11106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6347__auto____0;
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6347__auto____1;
return state_machine__6347__auto__;
})()
;})(switch__6346__auto__,c__6361__auto___11130))
})();var state__6363__auto__ = (function (){var statearr_11129 = f__6362__auto__.call(null);(statearr_11129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6361__auto___11130);
return statearr_11129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6363__auto__);
});})(c__6361__auto___11130))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6361__auto___11247 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6361__auto___11247,tc,fc){
return (function (){var f__6362__auto__ = (function (){var switch__6346__auto__ = ((function (c__6361__auto___11247,tc,fc){
return (function (state_11222){var state_val_11223 = (state_11222[1]);if((state_val_11223 === 7))
{var inst_11218 = (state_11222[2]);var state_11222__$1 = state_11222;var statearr_11224_11248 = state_11222__$1;(statearr_11224_11248[2] = inst_11218);
(statearr_11224_11248[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 1))
{var state_11222__$1 = state_11222;var statearr_11225_11249 = state_11222__$1;(statearr_11225_11249[2] = null);
(statearr_11225_11249[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 4))
{var inst_11199 = (state_11222[7]);var inst_11199__$1 = (state_11222[2]);var inst_11200 = (inst_11199__$1 == null);var state_11222__$1 = (function (){var statearr_11226 = state_11222;(statearr_11226[7] = inst_11199__$1);
return statearr_11226;
})();if(cljs.core.truth_(inst_11200))
{var statearr_11227_11250 = state_11222__$1;(statearr_11227_11250[1] = 5);
} else
{var statearr_11228_11251 = state_11222__$1;(statearr_11228_11251[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 13))
{var state_11222__$1 = state_11222;var statearr_11229_11252 = state_11222__$1;(statearr_11229_11252[2] = null);
(statearr_11229_11252[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 6))
{var inst_11199 = (state_11222[7]);var inst_11205 = p.call(null,inst_11199);var state_11222__$1 = state_11222;if(cljs.core.truth_(inst_11205))
{var statearr_11230_11253 = state_11222__$1;(statearr_11230_11253[1] = 9);
} else
{var statearr_11231_11254 = state_11222__$1;(statearr_11231_11254[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 3))
{var inst_11220 = (state_11222[2]);var state_11222__$1 = state_11222;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11222__$1,inst_11220);
} else
{if((state_val_11223 === 12))
{var state_11222__$1 = state_11222;var statearr_11232_11255 = state_11222__$1;(statearr_11232_11255[2] = null);
(statearr_11232_11255[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 2))
{var state_11222__$1 = state_11222;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11222__$1,4,ch);
} else
{if((state_val_11223 === 11))
{var inst_11199 = (state_11222[7]);var inst_11209 = (state_11222[2]);var state_11222__$1 = state_11222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11222__$1,8,inst_11209,inst_11199);
} else
{if((state_val_11223 === 9))
{var state_11222__$1 = state_11222;var statearr_11233_11256 = state_11222__$1;(statearr_11233_11256[2] = tc);
(statearr_11233_11256[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 5))
{var inst_11202 = cljs.core.async.close_BANG_.call(null,tc);var inst_11203 = cljs.core.async.close_BANG_.call(null,fc);var state_11222__$1 = (function (){var statearr_11234 = state_11222;(statearr_11234[8] = inst_11202);
return statearr_11234;
})();var statearr_11235_11257 = state_11222__$1;(statearr_11235_11257[2] = inst_11203);
(statearr_11235_11257[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 14))
{var inst_11216 = (state_11222[2]);var state_11222__$1 = state_11222;var statearr_11236_11258 = state_11222__$1;(statearr_11236_11258[2] = inst_11216);
(statearr_11236_11258[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 10))
{var state_11222__$1 = state_11222;var statearr_11237_11259 = state_11222__$1;(statearr_11237_11259[2] = fc);
(statearr_11237_11259[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11223 === 8))
{var inst_11211 = (state_11222[2]);var state_11222__$1 = state_11222;if(cljs.core.truth_(inst_11211))
{var statearr_11238_11260 = state_11222__$1;(statearr_11238_11260[1] = 12);
} else
{var statearr_11239_11261 = state_11222__$1;(statearr_11239_11261[1] = 13);
}
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
});})(c__6361__auto___11247,tc,fc))
;return ((function (switch__6346__auto__,c__6361__auto___11247,tc,fc){
return (function() {
var state_machine__6347__auto__ = null;
var state_machine__6347__auto____0 = (function (){var statearr_11243 = [null,null,null,null,null,null,null,null,null];(statearr_11243[0] = state_machine__6347__auto__);
(statearr_11243[1] = 1);
return statearr_11243;
});
var state_machine__6347__auto____1 = (function (state_11222){while(true){
var ret_value__6348__auto__ = (function (){try{while(true){
var result__6349__auto__ = switch__6346__auto__.call(null,state_11222);if(cljs.core.keyword_identical_QMARK_.call(null,result__6349__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6349__auto__;
}
break;
}
}catch (e11244){if((e11244 instanceof Object))
{var ex__6350__auto__ = e11244;var statearr_11245_11262 = state_11222;(statearr_11245_11262[5] = ex__6350__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11222);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11244;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6348__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11263 = state_11222;
state_11222 = G__11263;
continue;
}
} else
{return ret_value__6348__auto__;
}
break;
}
});
state_machine__6347__auto__ = function(state_11222){
switch(arguments.length){
case 0:
return state_machine__6347__auto____0.call(this);
case 1:
return state_machine__6347__auto____1.call(this,state_11222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6347__auto____0;
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6347__auto____1;
return state_machine__6347__auto__;
})()
;})(switch__6346__auto__,c__6361__auto___11247,tc,fc))
})();var state__6363__auto__ = (function (){var statearr_11246 = f__6362__auto__.call(null);(statearr_11246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6361__auto___11247);
return statearr_11246;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6363__auto__);
});})(c__6361__auto___11247,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6361__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6361__auto__){
return (function (){var f__6362__auto__ = (function (){var switch__6346__auto__ = ((function (c__6361__auto__){
return (function (state_11310){var state_val_11311 = (state_11310[1]);if((state_val_11311 === 7))
{var inst_11306 = (state_11310[2]);var state_11310__$1 = state_11310;var statearr_11312_11328 = state_11310__$1;(statearr_11312_11328[2] = inst_11306);
(statearr_11312_11328[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11311 === 6))
{var inst_11299 = (state_11310[7]);var inst_11296 = (state_11310[8]);var inst_11303 = f.call(null,inst_11296,inst_11299);var inst_11296__$1 = inst_11303;var state_11310__$1 = (function (){var statearr_11313 = state_11310;(statearr_11313[8] = inst_11296__$1);
return statearr_11313;
})();var statearr_11314_11329 = state_11310__$1;(statearr_11314_11329[2] = null);
(statearr_11314_11329[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11311 === 5))
{var inst_11296 = (state_11310[8]);var state_11310__$1 = state_11310;var statearr_11315_11330 = state_11310__$1;(statearr_11315_11330[2] = inst_11296);
(statearr_11315_11330[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11311 === 4))
{var inst_11299 = (state_11310[7]);var inst_11299__$1 = (state_11310[2]);var inst_11300 = (inst_11299__$1 == null);var state_11310__$1 = (function (){var statearr_11316 = state_11310;(statearr_11316[7] = inst_11299__$1);
return statearr_11316;
})();if(cljs.core.truth_(inst_11300))
{var statearr_11317_11331 = state_11310__$1;(statearr_11317_11331[1] = 5);
} else
{var statearr_11318_11332 = state_11310__$1;(statearr_11318_11332[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11311 === 3))
{var inst_11308 = (state_11310[2]);var state_11310__$1 = state_11310;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11310__$1,inst_11308);
} else
{if((state_val_11311 === 2))
{var state_11310__$1 = state_11310;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11310__$1,4,ch);
} else
{if((state_val_11311 === 1))
{var inst_11296 = init;var state_11310__$1 = (function (){var statearr_11319 = state_11310;(statearr_11319[8] = inst_11296);
return statearr_11319;
})();var statearr_11320_11333 = state_11310__$1;(statearr_11320_11333[2] = null);
(statearr_11320_11333[1] = 2);
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
});})(c__6361__auto__))
;return ((function (switch__6346__auto__,c__6361__auto__){
return (function() {
var state_machine__6347__auto__ = null;
var state_machine__6347__auto____0 = (function (){var statearr_11324 = [null,null,null,null,null,null,null,null,null];(statearr_11324[0] = state_machine__6347__auto__);
(statearr_11324[1] = 1);
return statearr_11324;
});
var state_machine__6347__auto____1 = (function (state_11310){while(true){
var ret_value__6348__auto__ = (function (){try{while(true){
var result__6349__auto__ = switch__6346__auto__.call(null,state_11310);if(cljs.core.keyword_identical_QMARK_.call(null,result__6349__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6349__auto__;
}
break;
}
}catch (e11325){if((e11325 instanceof Object))
{var ex__6350__auto__ = e11325;var statearr_11326_11334 = state_11310;(statearr_11326_11334[5] = ex__6350__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11310);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11325;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6348__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11335 = state_11310;
state_11310 = G__11335;
continue;
}
} else
{return ret_value__6348__auto__;
}
break;
}
});
state_machine__6347__auto__ = function(state_11310){
switch(arguments.length){
case 0:
return state_machine__6347__auto____0.call(this);
case 1:
return state_machine__6347__auto____1.call(this,state_11310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6347__auto____0;
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6347__auto____1;
return state_machine__6347__auto__;
})()
;})(switch__6346__auto__,c__6361__auto__))
})();var state__6363__auto__ = (function (){var statearr_11327 = f__6362__auto__.call(null);(statearr_11327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6361__auto__);
return statearr_11327;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6363__auto__);
});})(c__6361__auto__))
);
return c__6361__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6361__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6361__auto__){
return (function (){var f__6362__auto__ = (function (){var switch__6346__auto__ = ((function (c__6361__auto__){
return (function (state_11409){var state_val_11410 = (state_11409[1]);if((state_val_11410 === 7))
{var inst_11391 = (state_11409[2]);var state_11409__$1 = state_11409;var statearr_11411_11434 = state_11409__$1;(statearr_11411_11434[2] = inst_11391);
(statearr_11411_11434[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11410 === 1))
{var inst_11385 = cljs.core.seq.call(null,coll);var inst_11386 = inst_11385;var state_11409__$1 = (function (){var statearr_11412 = state_11409;(statearr_11412[7] = inst_11386);
return statearr_11412;
})();var statearr_11413_11435 = state_11409__$1;(statearr_11413_11435[2] = null);
(statearr_11413_11435[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11410 === 4))
{var inst_11386 = (state_11409[7]);var inst_11389 = cljs.core.first.call(null,inst_11386);var state_11409__$1 = state_11409;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11409__$1,7,ch,inst_11389);
} else
{if((state_val_11410 === 13))
{var inst_11403 = (state_11409[2]);var state_11409__$1 = state_11409;var statearr_11414_11436 = state_11409__$1;(statearr_11414_11436[2] = inst_11403);
(statearr_11414_11436[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11410 === 6))
{var inst_11394 = (state_11409[2]);var state_11409__$1 = state_11409;if(cljs.core.truth_(inst_11394))
{var statearr_11415_11437 = state_11409__$1;(statearr_11415_11437[1] = 8);
} else
{var statearr_11416_11438 = state_11409__$1;(statearr_11416_11438[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11410 === 3))
{var inst_11407 = (state_11409[2]);var state_11409__$1 = state_11409;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11409__$1,inst_11407);
} else
{if((state_val_11410 === 12))
{var state_11409__$1 = state_11409;var statearr_11417_11439 = state_11409__$1;(statearr_11417_11439[2] = null);
(statearr_11417_11439[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11410 === 2))
{var inst_11386 = (state_11409[7]);var state_11409__$1 = state_11409;if(cljs.core.truth_(inst_11386))
{var statearr_11418_11440 = state_11409__$1;(statearr_11418_11440[1] = 4);
} else
{var statearr_11419_11441 = state_11409__$1;(statearr_11419_11441[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11410 === 11))
{var inst_11400 = cljs.core.async.close_BANG_.call(null,ch);var state_11409__$1 = state_11409;var statearr_11420_11442 = state_11409__$1;(statearr_11420_11442[2] = inst_11400);
(statearr_11420_11442[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11410 === 9))
{var state_11409__$1 = state_11409;if(cljs.core.truth_(close_QMARK_))
{var statearr_11421_11443 = state_11409__$1;(statearr_11421_11443[1] = 11);
} else
{var statearr_11422_11444 = state_11409__$1;(statearr_11422_11444[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11410 === 5))
{var inst_11386 = (state_11409[7]);var state_11409__$1 = state_11409;var statearr_11423_11445 = state_11409__$1;(statearr_11423_11445[2] = inst_11386);
(statearr_11423_11445[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11410 === 10))
{var inst_11405 = (state_11409[2]);var state_11409__$1 = state_11409;var statearr_11424_11446 = state_11409__$1;(statearr_11424_11446[2] = inst_11405);
(statearr_11424_11446[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11410 === 8))
{var inst_11386 = (state_11409[7]);var inst_11396 = cljs.core.next.call(null,inst_11386);var inst_11386__$1 = inst_11396;var state_11409__$1 = (function (){var statearr_11425 = state_11409;(statearr_11425[7] = inst_11386__$1);
return statearr_11425;
})();var statearr_11426_11447 = state_11409__$1;(statearr_11426_11447[2] = null);
(statearr_11426_11447[1] = 2);
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
});})(c__6361__auto__))
;return ((function (switch__6346__auto__,c__6361__auto__){
return (function() {
var state_machine__6347__auto__ = null;
var state_machine__6347__auto____0 = (function (){var statearr_11430 = [null,null,null,null,null,null,null,null];(statearr_11430[0] = state_machine__6347__auto__);
(statearr_11430[1] = 1);
return statearr_11430;
});
var state_machine__6347__auto____1 = (function (state_11409){while(true){
var ret_value__6348__auto__ = (function (){try{while(true){
var result__6349__auto__ = switch__6346__auto__.call(null,state_11409);if(cljs.core.keyword_identical_QMARK_.call(null,result__6349__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6349__auto__;
}
break;
}
}catch (e11431){if((e11431 instanceof Object))
{var ex__6350__auto__ = e11431;var statearr_11432_11448 = state_11409;(statearr_11432_11448[5] = ex__6350__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11409);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11431;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6348__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11449 = state_11409;
state_11409 = G__11449;
continue;
}
} else
{return ret_value__6348__auto__;
}
break;
}
});
state_machine__6347__auto__ = function(state_11409){
switch(arguments.length){
case 0:
return state_machine__6347__auto____0.call(this);
case 1:
return state_machine__6347__auto____1.call(this,state_11409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6347__auto____0;
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6347__auto____1;
return state_machine__6347__auto__;
})()
;})(switch__6346__auto__,c__6361__auto__))
})();var state__6363__auto__ = (function (){var statearr_11433 = f__6362__auto__.call(null);(statearr_11433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6361__auto__);
return statearr_11433;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6363__auto__);
});})(c__6361__auto__))
);
return c__6361__auto__;
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
cljs.core.async.Mux = (function (){var obj11451 = {};return obj11451;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3526__auto__ = _;if(and__3526__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3526__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4165__auto__ = (((_ == null))?null:_);return (function (){var or__3538__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11453 = {};return obj11453;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3526__auto__ = m;if(and__3526__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3526__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4165__auto__ = (((m == null))?null:m);return (function (){var or__3538__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3526__auto__ = m;if(and__3526__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3526__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4165__auto__ = (((m == null))?null:m);return (function (){var or__3538__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3526__auto__ = m;if(and__3526__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3526__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4165__auto__ = (((m == null))?null:m);return (function (){var or__3538__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11675 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11675 = (function (cs,ch,mult,meta11676){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11676 = meta11676;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11675.cljs$lang$type = true;
cljs.core.async.t11675.cljs$lang$ctorStr = "cljs.core.async/t11675";
cljs.core.async.t11675.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"cljs.core.async/t11675");
});})(cs))
;
cljs.core.async.t11675.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11675.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11675.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11675.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11675.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11675.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11677){var self__ = this;
var _11677__$1 = this;return self__.meta11676;
});})(cs))
;
cljs.core.async.t11675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11677,meta11676__$1){var self__ = this;
var _11677__$1 = this;return (new cljs.core.async.t11675(self__.cs,self__.ch,self__.mult,meta11676__$1));
});})(cs))
;
cljs.core.async.__GT_t11675 = ((function (cs){
return (function __GT_t11675(cs__$1,ch__$1,mult__$1,meta11676){return (new cljs.core.async.t11675(cs__$1,ch__$1,mult__$1,meta11676));
});})(cs))
;
}
return (new cljs.core.async.t11675(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6361__auto___11896 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6361__auto___11896,cs,m,dchan,dctr,done){
return (function (){var f__6362__auto__ = (function (){var switch__6346__auto__ = ((function (c__6361__auto___11896,cs,m,dchan,dctr,done){
return (function (state_11808){var state_val_11809 = (state_11808[1]);if((state_val_11809 === 7))
{var inst_11804 = (state_11808[2]);var state_11808__$1 = state_11808;var statearr_11810_11897 = state_11808__$1;(statearr_11810_11897[2] = inst_11804);
(statearr_11810_11897[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 20))
{var inst_11709 = (state_11808[7]);var inst_11719 = cljs.core.first.call(null,inst_11709);var inst_11720 = cljs.core.nth.call(null,inst_11719,0,null);var inst_11721 = cljs.core.nth.call(null,inst_11719,1,null);var state_11808__$1 = (function (){var statearr_11811 = state_11808;(statearr_11811[8] = inst_11720);
return statearr_11811;
})();if(cljs.core.truth_(inst_11721))
{var statearr_11812_11898 = state_11808__$1;(statearr_11812_11898[1] = 22);
} else
{var statearr_11813_11899 = state_11808__$1;(statearr_11813_11899[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 27))
{var inst_11680 = (state_11808[9]);var inst_11751 = (state_11808[10]);var inst_11749 = (state_11808[11]);var inst_11756 = (state_11808[12]);var inst_11756__$1 = cljs.core._nth.call(null,inst_11749,inst_11751);var inst_11757 = cljs.core.async.put_BANG_.call(null,inst_11756__$1,inst_11680,done);var state_11808__$1 = (function (){var statearr_11814 = state_11808;(statearr_11814[12] = inst_11756__$1);
return statearr_11814;
})();if(cljs.core.truth_(inst_11757))
{var statearr_11815_11900 = state_11808__$1;(statearr_11815_11900[1] = 30);
} else
{var statearr_11816_11901 = state_11808__$1;(statearr_11816_11901[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 1))
{var state_11808__$1 = state_11808;var statearr_11817_11902 = state_11808__$1;(statearr_11817_11902[2] = null);
(statearr_11817_11902[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 24))
{var inst_11709 = (state_11808[7]);var inst_11726 = (state_11808[2]);var inst_11727 = cljs.core.next.call(null,inst_11709);var inst_11689 = inst_11727;var inst_11690 = null;var inst_11691 = 0;var inst_11692 = 0;var state_11808__$1 = (function (){var statearr_11818 = state_11808;(statearr_11818[13] = inst_11689);
(statearr_11818[14] = inst_11692);
(statearr_11818[15] = inst_11691);
(statearr_11818[16] = inst_11690);
(statearr_11818[17] = inst_11726);
return statearr_11818;
})();var statearr_11819_11903 = state_11808__$1;(statearr_11819_11903[2] = null);
(statearr_11819_11903[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 39))
{var state_11808__$1 = state_11808;var statearr_11823_11904 = state_11808__$1;(statearr_11823_11904[2] = null);
(statearr_11823_11904[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 4))
{var inst_11680 = (state_11808[9]);var inst_11680__$1 = (state_11808[2]);var inst_11681 = (inst_11680__$1 == null);var state_11808__$1 = (function (){var statearr_11824 = state_11808;(statearr_11824[9] = inst_11680__$1);
return statearr_11824;
})();if(cljs.core.truth_(inst_11681))
{var statearr_11825_11905 = state_11808__$1;(statearr_11825_11905[1] = 5);
} else
{var statearr_11826_11906 = state_11808__$1;(statearr_11826_11906[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 15))
{var inst_11689 = (state_11808[13]);var inst_11692 = (state_11808[14]);var inst_11691 = (state_11808[15]);var inst_11690 = (state_11808[16]);var inst_11705 = (state_11808[2]);var inst_11706 = (inst_11692 + 1);var tmp11820 = inst_11689;var tmp11821 = inst_11691;var tmp11822 = inst_11690;var inst_11689__$1 = tmp11820;var inst_11690__$1 = tmp11822;var inst_11691__$1 = tmp11821;var inst_11692__$1 = inst_11706;var state_11808__$1 = (function (){var statearr_11827 = state_11808;(statearr_11827[13] = inst_11689__$1);
(statearr_11827[14] = inst_11692__$1);
(statearr_11827[15] = inst_11691__$1);
(statearr_11827[16] = inst_11690__$1);
(statearr_11827[18] = inst_11705);
return statearr_11827;
})();var statearr_11828_11907 = state_11808__$1;(statearr_11828_11907[2] = null);
(statearr_11828_11907[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 21))
{var inst_11730 = (state_11808[2]);var state_11808__$1 = state_11808;var statearr_11832_11908 = state_11808__$1;(statearr_11832_11908[2] = inst_11730);
(statearr_11832_11908[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 31))
{var inst_11756 = (state_11808[12]);var inst_11760 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11761 = cljs.core.async.untap_STAR_.call(null,m,inst_11756);var state_11808__$1 = (function (){var statearr_11833 = state_11808;(statearr_11833[19] = inst_11760);
return statearr_11833;
})();var statearr_11834_11909 = state_11808__$1;(statearr_11834_11909[2] = inst_11761);
(statearr_11834_11909[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 32))
{var inst_11748 = (state_11808[20]);var inst_11751 = (state_11808[10]);var inst_11749 = (state_11808[11]);var inst_11750 = (state_11808[21]);var inst_11763 = (state_11808[2]);var inst_11764 = (inst_11751 + 1);var tmp11829 = inst_11748;var tmp11830 = inst_11749;var tmp11831 = inst_11750;var inst_11748__$1 = tmp11829;var inst_11749__$1 = tmp11830;var inst_11750__$1 = tmp11831;var inst_11751__$1 = inst_11764;var state_11808__$1 = (function (){var statearr_11835 = state_11808;(statearr_11835[20] = inst_11748__$1);
(statearr_11835[10] = inst_11751__$1);
(statearr_11835[11] = inst_11749__$1);
(statearr_11835[21] = inst_11750__$1);
(statearr_11835[22] = inst_11763);
return statearr_11835;
})();var statearr_11836_11910 = state_11808__$1;(statearr_11836_11910[2] = null);
(statearr_11836_11910[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 40))
{var inst_11776 = (state_11808[23]);var inst_11780 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11781 = cljs.core.async.untap_STAR_.call(null,m,inst_11776);var state_11808__$1 = (function (){var statearr_11837 = state_11808;(statearr_11837[24] = inst_11780);
return statearr_11837;
})();var statearr_11838_11911 = state_11808__$1;(statearr_11838_11911[2] = inst_11781);
(statearr_11838_11911[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 33))
{var inst_11767 = (state_11808[25]);var inst_11769 = cljs.core.chunked_seq_QMARK_.call(null,inst_11767);var state_11808__$1 = state_11808;if(inst_11769)
{var statearr_11839_11912 = state_11808__$1;(statearr_11839_11912[1] = 36);
} else
{var statearr_11840_11913 = state_11808__$1;(statearr_11840_11913[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 13))
{var inst_11699 = (state_11808[26]);var inst_11702 = cljs.core.async.close_BANG_.call(null,inst_11699);var state_11808__$1 = state_11808;var statearr_11841_11914 = state_11808__$1;(statearr_11841_11914[2] = inst_11702);
(statearr_11841_11914[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 22))
{var inst_11720 = (state_11808[8]);var inst_11723 = cljs.core.async.close_BANG_.call(null,inst_11720);var state_11808__$1 = state_11808;var statearr_11842_11915 = state_11808__$1;(statearr_11842_11915[2] = inst_11723);
(statearr_11842_11915[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 36))
{var inst_11767 = (state_11808[25]);var inst_11771 = cljs.core.chunk_first.call(null,inst_11767);var inst_11772 = cljs.core.chunk_rest.call(null,inst_11767);var inst_11773 = cljs.core.count.call(null,inst_11771);var inst_11748 = inst_11772;var inst_11749 = inst_11771;var inst_11750 = inst_11773;var inst_11751 = 0;var state_11808__$1 = (function (){var statearr_11843 = state_11808;(statearr_11843[20] = inst_11748);
(statearr_11843[10] = inst_11751);
(statearr_11843[11] = inst_11749);
(statearr_11843[21] = inst_11750);
return statearr_11843;
})();var statearr_11844_11916 = state_11808__$1;(statearr_11844_11916[2] = null);
(statearr_11844_11916[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 41))
{var inst_11767 = (state_11808[25]);var inst_11783 = (state_11808[2]);var inst_11784 = cljs.core.next.call(null,inst_11767);var inst_11748 = inst_11784;var inst_11749 = null;var inst_11750 = 0;var inst_11751 = 0;var state_11808__$1 = (function (){var statearr_11845 = state_11808;(statearr_11845[20] = inst_11748);
(statearr_11845[10] = inst_11751);
(statearr_11845[11] = inst_11749);
(statearr_11845[21] = inst_11750);
(statearr_11845[27] = inst_11783);
return statearr_11845;
})();var statearr_11846_11917 = state_11808__$1;(statearr_11846_11917[2] = null);
(statearr_11846_11917[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 43))
{var state_11808__$1 = state_11808;var statearr_11847_11918 = state_11808__$1;(statearr_11847_11918[2] = null);
(statearr_11847_11918[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 29))
{var inst_11792 = (state_11808[2]);var state_11808__$1 = state_11808;var statearr_11848_11919 = state_11808__$1;(statearr_11848_11919[2] = inst_11792);
(statearr_11848_11919[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 44))
{var inst_11801 = (state_11808[2]);var state_11808__$1 = (function (){var statearr_11849 = state_11808;(statearr_11849[28] = inst_11801);
return statearr_11849;
})();var statearr_11850_11920 = state_11808__$1;(statearr_11850_11920[2] = null);
(statearr_11850_11920[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 6))
{var inst_11740 = (state_11808[29]);var inst_11739 = cljs.core.deref.call(null,cs);var inst_11740__$1 = cljs.core.keys.call(null,inst_11739);var inst_11741 = cljs.core.count.call(null,inst_11740__$1);var inst_11742 = cljs.core.reset_BANG_.call(null,dctr,inst_11741);var inst_11747 = cljs.core.seq.call(null,inst_11740__$1);var inst_11748 = inst_11747;var inst_11749 = null;var inst_11750 = 0;var inst_11751 = 0;var state_11808__$1 = (function (){var statearr_11851 = state_11808;(statearr_11851[29] = inst_11740__$1);
(statearr_11851[20] = inst_11748);
(statearr_11851[10] = inst_11751);
(statearr_11851[11] = inst_11749);
(statearr_11851[21] = inst_11750);
(statearr_11851[30] = inst_11742);
return statearr_11851;
})();var statearr_11852_11921 = state_11808__$1;(statearr_11852_11921[2] = null);
(statearr_11852_11921[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 28))
{var inst_11748 = (state_11808[20]);var inst_11767 = (state_11808[25]);var inst_11767__$1 = cljs.core.seq.call(null,inst_11748);var state_11808__$1 = (function (){var statearr_11853 = state_11808;(statearr_11853[25] = inst_11767__$1);
return statearr_11853;
})();if(inst_11767__$1)
{var statearr_11854_11922 = state_11808__$1;(statearr_11854_11922[1] = 33);
} else
{var statearr_11855_11923 = state_11808__$1;(statearr_11855_11923[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 25))
{var inst_11751 = (state_11808[10]);var inst_11750 = (state_11808[21]);var inst_11753 = (inst_11751 < inst_11750);var inst_11754 = inst_11753;var state_11808__$1 = state_11808;if(cljs.core.truth_(inst_11754))
{var statearr_11856_11924 = state_11808__$1;(statearr_11856_11924[1] = 27);
} else
{var statearr_11857_11925 = state_11808__$1;(statearr_11857_11925[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 34))
{var state_11808__$1 = state_11808;var statearr_11858_11926 = state_11808__$1;(statearr_11858_11926[2] = null);
(statearr_11858_11926[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 17))
{var state_11808__$1 = state_11808;var statearr_11859_11927 = state_11808__$1;(statearr_11859_11927[2] = null);
(statearr_11859_11927[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 3))
{var inst_11806 = (state_11808[2]);var state_11808__$1 = state_11808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11808__$1,inst_11806);
} else
{if((state_val_11809 === 12))
{var inst_11735 = (state_11808[2]);var state_11808__$1 = state_11808;var statearr_11860_11928 = state_11808__$1;(statearr_11860_11928[2] = inst_11735);
(statearr_11860_11928[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 2))
{var state_11808__$1 = state_11808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11808__$1,4,ch);
} else
{if((state_val_11809 === 23))
{var state_11808__$1 = state_11808;var statearr_11861_11929 = state_11808__$1;(statearr_11861_11929[2] = null);
(statearr_11861_11929[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 35))
{var inst_11790 = (state_11808[2]);var state_11808__$1 = state_11808;var statearr_11862_11930 = state_11808__$1;(statearr_11862_11930[2] = inst_11790);
(statearr_11862_11930[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 19))
{var inst_11709 = (state_11808[7]);var inst_11713 = cljs.core.chunk_first.call(null,inst_11709);var inst_11714 = cljs.core.chunk_rest.call(null,inst_11709);var inst_11715 = cljs.core.count.call(null,inst_11713);var inst_11689 = inst_11714;var inst_11690 = inst_11713;var inst_11691 = inst_11715;var inst_11692 = 0;var state_11808__$1 = (function (){var statearr_11863 = state_11808;(statearr_11863[13] = inst_11689);
(statearr_11863[14] = inst_11692);
(statearr_11863[15] = inst_11691);
(statearr_11863[16] = inst_11690);
return statearr_11863;
})();var statearr_11864_11931 = state_11808__$1;(statearr_11864_11931[2] = null);
(statearr_11864_11931[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 11))
{var inst_11689 = (state_11808[13]);var inst_11709 = (state_11808[7]);var inst_11709__$1 = cljs.core.seq.call(null,inst_11689);var state_11808__$1 = (function (){var statearr_11865 = state_11808;(statearr_11865[7] = inst_11709__$1);
return statearr_11865;
})();if(inst_11709__$1)
{var statearr_11866_11932 = state_11808__$1;(statearr_11866_11932[1] = 16);
} else
{var statearr_11867_11933 = state_11808__$1;(statearr_11867_11933[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 9))
{var inst_11737 = (state_11808[2]);var state_11808__$1 = state_11808;var statearr_11868_11934 = state_11808__$1;(statearr_11868_11934[2] = inst_11737);
(statearr_11868_11934[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 5))
{var inst_11687 = cljs.core.deref.call(null,cs);var inst_11688 = cljs.core.seq.call(null,inst_11687);var inst_11689 = inst_11688;var inst_11690 = null;var inst_11691 = 0;var inst_11692 = 0;var state_11808__$1 = (function (){var statearr_11869 = state_11808;(statearr_11869[13] = inst_11689);
(statearr_11869[14] = inst_11692);
(statearr_11869[15] = inst_11691);
(statearr_11869[16] = inst_11690);
return statearr_11869;
})();var statearr_11870_11935 = state_11808__$1;(statearr_11870_11935[2] = null);
(statearr_11870_11935[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 14))
{var state_11808__$1 = state_11808;var statearr_11871_11936 = state_11808__$1;(statearr_11871_11936[2] = null);
(statearr_11871_11936[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 45))
{var inst_11798 = (state_11808[2]);var state_11808__$1 = state_11808;var statearr_11872_11937 = state_11808__$1;(statearr_11872_11937[2] = inst_11798);
(statearr_11872_11937[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 26))
{var inst_11740 = (state_11808[29]);var inst_11794 = (state_11808[2]);var inst_11795 = cljs.core.seq.call(null,inst_11740);var state_11808__$1 = (function (){var statearr_11873 = state_11808;(statearr_11873[31] = inst_11794);
return statearr_11873;
})();if(inst_11795)
{var statearr_11874_11938 = state_11808__$1;(statearr_11874_11938[1] = 42);
} else
{var statearr_11875_11939 = state_11808__$1;(statearr_11875_11939[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 16))
{var inst_11709 = (state_11808[7]);var inst_11711 = cljs.core.chunked_seq_QMARK_.call(null,inst_11709);var state_11808__$1 = state_11808;if(inst_11711)
{var statearr_11876_11940 = state_11808__$1;(statearr_11876_11940[1] = 19);
} else
{var statearr_11877_11941 = state_11808__$1;(statearr_11877_11941[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 38))
{var inst_11787 = (state_11808[2]);var state_11808__$1 = state_11808;var statearr_11878_11942 = state_11808__$1;(statearr_11878_11942[2] = inst_11787);
(statearr_11878_11942[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 30))
{var state_11808__$1 = state_11808;var statearr_11879_11943 = state_11808__$1;(statearr_11879_11943[2] = null);
(statearr_11879_11943[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 10))
{var inst_11692 = (state_11808[14]);var inst_11690 = (state_11808[16]);var inst_11698 = cljs.core._nth.call(null,inst_11690,inst_11692);var inst_11699 = cljs.core.nth.call(null,inst_11698,0,null);var inst_11700 = cljs.core.nth.call(null,inst_11698,1,null);var state_11808__$1 = (function (){var statearr_11880 = state_11808;(statearr_11880[26] = inst_11699);
return statearr_11880;
})();if(cljs.core.truth_(inst_11700))
{var statearr_11881_11944 = state_11808__$1;(statearr_11881_11944[1] = 13);
} else
{var statearr_11882_11945 = state_11808__$1;(statearr_11882_11945[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 18))
{var inst_11733 = (state_11808[2]);var state_11808__$1 = state_11808;var statearr_11883_11946 = state_11808__$1;(statearr_11883_11946[2] = inst_11733);
(statearr_11883_11946[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 42))
{var state_11808__$1 = state_11808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11808__$1,45,dchan);
} else
{if((state_val_11809 === 37))
{var inst_11680 = (state_11808[9]);var inst_11776 = (state_11808[23]);var inst_11767 = (state_11808[25]);var inst_11776__$1 = cljs.core.first.call(null,inst_11767);var inst_11777 = cljs.core.async.put_BANG_.call(null,inst_11776__$1,inst_11680,done);var state_11808__$1 = (function (){var statearr_11884 = state_11808;(statearr_11884[23] = inst_11776__$1);
return statearr_11884;
})();if(cljs.core.truth_(inst_11777))
{var statearr_11885_11947 = state_11808__$1;(statearr_11885_11947[1] = 39);
} else
{var statearr_11886_11948 = state_11808__$1;(statearr_11886_11948[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 8))
{var inst_11692 = (state_11808[14]);var inst_11691 = (state_11808[15]);var inst_11694 = (inst_11692 < inst_11691);var inst_11695 = inst_11694;var state_11808__$1 = state_11808;if(cljs.core.truth_(inst_11695))
{var statearr_11887_11949 = state_11808__$1;(statearr_11887_11949[1] = 10);
} else
{var statearr_11888_11950 = state_11808__$1;(statearr_11888_11950[1] = 11);
}
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
});})(c__6361__auto___11896,cs,m,dchan,dctr,done))
;return ((function (switch__6346__auto__,c__6361__auto___11896,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6347__auto__ = null;
var state_machine__6347__auto____0 = (function (){var statearr_11892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11892[0] = state_machine__6347__auto__);
(statearr_11892[1] = 1);
return statearr_11892;
});
var state_machine__6347__auto____1 = (function (state_11808){while(true){
var ret_value__6348__auto__ = (function (){try{while(true){
var result__6349__auto__ = switch__6346__auto__.call(null,state_11808);if(cljs.core.keyword_identical_QMARK_.call(null,result__6349__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6349__auto__;
}
break;
}
}catch (e11893){if((e11893 instanceof Object))
{var ex__6350__auto__ = e11893;var statearr_11894_11951 = state_11808;(statearr_11894_11951[5] = ex__6350__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11808);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11893;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6348__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11952 = state_11808;
state_11808 = G__11952;
continue;
}
} else
{return ret_value__6348__auto__;
}
break;
}
});
state_machine__6347__auto__ = function(state_11808){
switch(arguments.length){
case 0:
return state_machine__6347__auto____0.call(this);
case 1:
return state_machine__6347__auto____1.call(this,state_11808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6347__auto____0;
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6347__auto____1;
return state_machine__6347__auto__;
})()
;})(switch__6346__auto__,c__6361__auto___11896,cs,m,dchan,dctr,done))
})();var state__6363__auto__ = (function (){var statearr_11895 = f__6362__auto__.call(null);(statearr_11895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6361__auto___11896);
return statearr_11895;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6363__auto__);
});})(c__6361__auto___11896,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj11954 = {};return obj11954;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3526__auto__ = m;if(and__3526__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3526__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4165__auto__ = (((m == null))?null:m);return (function (){var or__3538__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3526__auto__ = m;if(and__3526__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3526__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4165__auto__ = (((m == null))?null:m);return (function (){var or__3538__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3526__auto__ = m;if(and__3526__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3526__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4165__auto__ = (((m == null))?null:m);return (function (){var or__3538__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3526__auto__ = m;if(and__3526__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3526__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4165__auto__ = (((m == null))?null:m);return (function (){var or__3538__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3526__auto__ = m;if(and__3526__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3526__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4165__auto__ = (((m == null))?null:m);return (function (){var or__3538__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t12074 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12074 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12075){
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
this.meta12075 = meta12075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12074.cljs$lang$type = true;
cljs.core.async.t12074.cljs$lang$ctorStr = "cljs.core.async/t12074";
cljs.core.async.t12074.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"cljs.core.async/t12074");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12074.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12074.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12074.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12074.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12074.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12074.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12074.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12074.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12074.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12076){var self__ = this;
var _12076__$1 = this;return self__.meta12075;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12076,meta12075__$1){var self__ = this;
var _12076__$1 = this;return (new cljs.core.async.t12074(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12075__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12074 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12074(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12075){return (new cljs.core.async.t12074(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12075));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12074(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6361__auto___12193 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6361__auto___12193,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6362__auto__ = (function (){var switch__6346__auto__ = ((function (c__6361__auto___12193,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12146){var state_val_12147 = (state_12146[1]);if((state_val_12147 === 7))
{var inst_12090 = (state_12146[7]);var inst_12095 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12090);var state_12146__$1 = state_12146;var statearr_12148_12194 = state_12146__$1;(statearr_12148_12194[2] = inst_12095);
(statearr_12148_12194[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 20))
{var inst_12105 = (state_12146[8]);var state_12146__$1 = state_12146;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12146__$1,23,out,inst_12105);
} else
{if((state_val_12147 === 1))
{var inst_12080 = (state_12146[9]);var inst_12080__$1 = calc_state.call(null);var inst_12081 = cljs.core.seq_QMARK_.call(null,inst_12080__$1);var state_12146__$1 = (function (){var statearr_12149 = state_12146;(statearr_12149[9] = inst_12080__$1);
return statearr_12149;
})();if(inst_12081)
{var statearr_12150_12195 = state_12146__$1;(statearr_12150_12195[1] = 2);
} else
{var statearr_12151_12196 = state_12146__$1;(statearr_12151_12196[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 24))
{var inst_12098 = (state_12146[10]);var inst_12090 = inst_12098;var state_12146__$1 = (function (){var statearr_12152 = state_12146;(statearr_12152[7] = inst_12090);
return statearr_12152;
})();var statearr_12153_12197 = state_12146__$1;(statearr_12153_12197[2] = null);
(statearr_12153_12197[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 4))
{var inst_12080 = (state_12146[9]);var inst_12086 = (state_12146[2]);var inst_12087 = cljs.core.get.call(null,inst_12086,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12088 = cljs.core.get.call(null,inst_12086,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12089 = cljs.core.get.call(null,inst_12086,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12090 = inst_12080;var state_12146__$1 = (function (){var statearr_12154 = state_12146;(statearr_12154[11] = inst_12087);
(statearr_12154[12] = inst_12089);
(statearr_12154[7] = inst_12090);
(statearr_12154[13] = inst_12088);
return statearr_12154;
})();var statearr_12155_12198 = state_12146__$1;(statearr_12155_12198[2] = null);
(statearr_12155_12198[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 15))
{var state_12146__$1 = state_12146;var statearr_12156_12199 = state_12146__$1;(statearr_12156_12199[2] = null);
(statearr_12156_12199[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 21))
{var inst_12098 = (state_12146[10]);var inst_12090 = inst_12098;var state_12146__$1 = (function (){var statearr_12157 = state_12146;(statearr_12157[7] = inst_12090);
return statearr_12157;
})();var statearr_12158_12200 = state_12146__$1;(statearr_12158_12200[2] = null);
(statearr_12158_12200[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 13))
{var inst_12142 = (state_12146[2]);var state_12146__$1 = state_12146;var statearr_12159_12201 = state_12146__$1;(statearr_12159_12201[2] = inst_12142);
(statearr_12159_12201[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 22))
{var inst_12140 = (state_12146[2]);var state_12146__$1 = state_12146;var statearr_12160_12202 = state_12146__$1;(statearr_12160_12202[2] = inst_12140);
(statearr_12160_12202[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 6))
{var inst_12144 = (state_12146[2]);var state_12146__$1 = state_12146;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12146__$1,inst_12144);
} else
{if((state_val_12147 === 25))
{var state_12146__$1 = state_12146;var statearr_12161_12203 = state_12146__$1;(statearr_12161_12203[2] = null);
(statearr_12161_12203[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 17))
{var inst_12120 = (state_12146[14]);var state_12146__$1 = state_12146;var statearr_12162_12204 = state_12146__$1;(statearr_12162_12204[2] = inst_12120);
(statearr_12162_12204[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 3))
{var inst_12080 = (state_12146[9]);var state_12146__$1 = state_12146;var statearr_12163_12205 = state_12146__$1;(statearr_12163_12205[2] = inst_12080);
(statearr_12163_12205[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 12))
{var inst_12106 = (state_12146[15]);var inst_12101 = (state_12146[16]);var inst_12120 = (state_12146[14]);var inst_12120__$1 = inst_12101.call(null,inst_12106);var state_12146__$1 = (function (){var statearr_12164 = state_12146;(statearr_12164[14] = inst_12120__$1);
return statearr_12164;
})();if(cljs.core.truth_(inst_12120__$1))
{var statearr_12165_12206 = state_12146__$1;(statearr_12165_12206[1] = 17);
} else
{var statearr_12166_12207 = state_12146__$1;(statearr_12166_12207[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 2))
{var inst_12080 = (state_12146[9]);var inst_12083 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12080);var state_12146__$1 = state_12146;var statearr_12167_12208 = state_12146__$1;(statearr_12167_12208[2] = inst_12083);
(statearr_12167_12208[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 23))
{var inst_12131 = (state_12146[2]);var state_12146__$1 = state_12146;if(cljs.core.truth_(inst_12131))
{var statearr_12168_12209 = state_12146__$1;(statearr_12168_12209[1] = 24);
} else
{var statearr_12169_12210 = state_12146__$1;(statearr_12169_12210[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 19))
{var inst_12128 = (state_12146[2]);var state_12146__$1 = state_12146;if(cljs.core.truth_(inst_12128))
{var statearr_12170_12211 = state_12146__$1;(statearr_12170_12211[1] = 20);
} else
{var statearr_12171_12212 = state_12146__$1;(statearr_12171_12212[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 11))
{var inst_12105 = (state_12146[8]);var inst_12111 = (inst_12105 == null);var state_12146__$1 = state_12146;if(cljs.core.truth_(inst_12111))
{var statearr_12172_12213 = state_12146__$1;(statearr_12172_12213[1] = 14);
} else
{var statearr_12173_12214 = state_12146__$1;(statearr_12173_12214[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 9))
{var inst_12098 = (state_12146[10]);var inst_12098__$1 = (state_12146[2]);var inst_12099 = cljs.core.get.call(null,inst_12098__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12100 = cljs.core.get.call(null,inst_12098__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12101 = cljs.core.get.call(null,inst_12098__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12146__$1 = (function (){var statearr_12174 = state_12146;(statearr_12174[10] = inst_12098__$1);
(statearr_12174[17] = inst_12100);
(statearr_12174[16] = inst_12101);
return statearr_12174;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12146__$1,10,inst_12099);
} else
{if((state_val_12147 === 5))
{var inst_12090 = (state_12146[7]);var inst_12093 = cljs.core.seq_QMARK_.call(null,inst_12090);var state_12146__$1 = state_12146;if(inst_12093)
{var statearr_12175_12215 = state_12146__$1;(statearr_12175_12215[1] = 7);
} else
{var statearr_12176_12216 = state_12146__$1;(statearr_12176_12216[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 14))
{var inst_12106 = (state_12146[15]);var inst_12113 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12106);var state_12146__$1 = state_12146;var statearr_12177_12217 = state_12146__$1;(statearr_12177_12217[2] = inst_12113);
(statearr_12177_12217[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 26))
{var inst_12136 = (state_12146[2]);var state_12146__$1 = state_12146;var statearr_12178_12218 = state_12146__$1;(statearr_12178_12218[2] = inst_12136);
(statearr_12178_12218[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 16))
{var inst_12116 = (state_12146[2]);var inst_12117 = calc_state.call(null);var inst_12090 = inst_12117;var state_12146__$1 = (function (){var statearr_12179 = state_12146;(statearr_12179[18] = inst_12116);
(statearr_12179[7] = inst_12090);
return statearr_12179;
})();var statearr_12180_12219 = state_12146__$1;(statearr_12180_12219[2] = null);
(statearr_12180_12219[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 10))
{var inst_12106 = (state_12146[15]);var inst_12105 = (state_12146[8]);var inst_12104 = (state_12146[2]);var inst_12105__$1 = cljs.core.nth.call(null,inst_12104,0,null);var inst_12106__$1 = cljs.core.nth.call(null,inst_12104,1,null);var inst_12107 = (inst_12105__$1 == null);var inst_12108 = cljs.core._EQ_.call(null,inst_12106__$1,change);var inst_12109 = (inst_12107) || (inst_12108);var state_12146__$1 = (function (){var statearr_12181 = state_12146;(statearr_12181[15] = inst_12106__$1);
(statearr_12181[8] = inst_12105__$1);
return statearr_12181;
})();if(cljs.core.truth_(inst_12109))
{var statearr_12182_12220 = state_12146__$1;(statearr_12182_12220[1] = 11);
} else
{var statearr_12183_12221 = state_12146__$1;(statearr_12183_12221[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 18))
{var inst_12106 = (state_12146[15]);var inst_12100 = (state_12146[17]);var inst_12101 = (state_12146[16]);var inst_12123 = cljs.core.empty_QMARK_.call(null,inst_12101);var inst_12124 = inst_12100.call(null,inst_12106);var inst_12125 = cljs.core.not.call(null,inst_12124);var inst_12126 = (inst_12123) && (inst_12125);var state_12146__$1 = state_12146;var statearr_12184_12222 = state_12146__$1;(statearr_12184_12222[2] = inst_12126);
(statearr_12184_12222[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 8))
{var inst_12090 = (state_12146[7]);var state_12146__$1 = state_12146;var statearr_12185_12223 = state_12146__$1;(statearr_12185_12223[2] = inst_12090);
(statearr_12185_12223[1] = 9);
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
});})(c__6361__auto___12193,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6346__auto__,c__6361__auto___12193,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6347__auto__ = null;
var state_machine__6347__auto____0 = (function (){var statearr_12189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12189[0] = state_machine__6347__auto__);
(statearr_12189[1] = 1);
return statearr_12189;
});
var state_machine__6347__auto____1 = (function (state_12146){while(true){
var ret_value__6348__auto__ = (function (){try{while(true){
var result__6349__auto__ = switch__6346__auto__.call(null,state_12146);if(cljs.core.keyword_identical_QMARK_.call(null,result__6349__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6349__auto__;
}
break;
}
}catch (e12190){if((e12190 instanceof Object))
{var ex__6350__auto__ = e12190;var statearr_12191_12224 = state_12146;(statearr_12191_12224[5] = ex__6350__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12146);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12190;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6348__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12225 = state_12146;
state_12146 = G__12225;
continue;
}
} else
{return ret_value__6348__auto__;
}
break;
}
});
state_machine__6347__auto__ = function(state_12146){
switch(arguments.length){
case 0:
return state_machine__6347__auto____0.call(this);
case 1:
return state_machine__6347__auto____1.call(this,state_12146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6347__auto____0;
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6347__auto____1;
return state_machine__6347__auto__;
})()
;})(switch__6346__auto__,c__6361__auto___12193,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6363__auto__ = (function (){var statearr_12192 = f__6362__auto__.call(null);(statearr_12192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6361__auto___12193);
return statearr_12192;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6363__auto__);
});})(c__6361__auto___12193,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj12227 = {};return obj12227;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3526__auto__ = p;if(and__3526__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3526__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4165__auto__ = (((p == null))?null:p);return (function (){var or__3538__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3526__auto__ = p;if(and__3526__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3526__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4165__auto__ = (((p == null))?null:p);return (function (){var or__3538__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3526__auto__ = p;if(and__3526__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3526__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4165__auto__ = (((p == null))?null:p);return (function (){var or__3538__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3526__auto__ = p;if(and__3526__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3526__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4165__auto__ = (((p == null))?null:p);return (function (){var or__3538__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4165__auto__)]);if(or__3538__auto__)
{return or__3538__auto__;
} else
{var or__3538__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3538__auto____$1)
{return or__3538__auto____$1;
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
return (function (topic){var or__3538__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3538__auto__))
{return or__3538__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3538__auto__,mults){
return (function (p1__12228_SHARP_){if(cljs.core.truth_(p1__12228_SHARP_.call(null,topic)))
{return p1__12228_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12228_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3538__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12351 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12351 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12352){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12352 = meta12352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12351.cljs$lang$type = true;
cljs.core.async.t12351.cljs$lang$ctorStr = "cljs.core.async/t12351";
cljs.core.async.t12351.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4105__auto__,writer__4106__auto__,opt__4107__auto__){return cljs.core._write.call(null,writer__4106__auto__,"cljs.core.async/t12351");
});})(mults,ensure_mult))
;
cljs.core.async.t12351.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12351.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12351.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12351.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12351.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12351.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12351.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12351.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12353){var self__ = this;
var _12353__$1 = this;return self__.meta12352;
});})(mults,ensure_mult))
;
cljs.core.async.t12351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12353,meta12352__$1){var self__ = this;
var _12353__$1 = this;return (new cljs.core.async.t12351(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12352__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12351 = ((function (mults,ensure_mult){
return (function __GT_t12351(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12352){return (new cljs.core.async.t12351(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12352));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12351(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6361__auto___12473 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6361__auto___12473,mults,ensure_mult,p){
return (function (){var f__6362__auto__ = (function (){var switch__6346__auto__ = ((function (c__6361__auto___12473,mults,ensure_mult,p){
return (function (state_12425){var state_val_12426 = (state_12425[1]);if((state_val_12426 === 7))
{var inst_12421 = (state_12425[2]);var state_12425__$1 = state_12425;var statearr_12427_12474 = state_12425__$1;(statearr_12427_12474[2] = inst_12421);
(statearr_12427_12474[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 20))
{var state_12425__$1 = state_12425;var statearr_12428_12475 = state_12425__$1;(statearr_12428_12475[2] = null);
(statearr_12428_12475[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 1))
{var state_12425__$1 = state_12425;var statearr_12429_12476 = state_12425__$1;(statearr_12429_12476[2] = null);
(statearr_12429_12476[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 24))
{var inst_12404 = (state_12425[7]);var inst_12413 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12404);var state_12425__$1 = state_12425;var statearr_12430_12477 = state_12425__$1;(statearr_12430_12477[2] = inst_12413);
(statearr_12430_12477[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 4))
{var inst_12356 = (state_12425[8]);var inst_12356__$1 = (state_12425[2]);var inst_12357 = (inst_12356__$1 == null);var state_12425__$1 = (function (){var statearr_12431 = state_12425;(statearr_12431[8] = inst_12356__$1);
return statearr_12431;
})();if(cljs.core.truth_(inst_12357))
{var statearr_12432_12478 = state_12425__$1;(statearr_12432_12478[1] = 5);
} else
{var statearr_12433_12479 = state_12425__$1;(statearr_12433_12479[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 15))
{var inst_12398 = (state_12425[2]);var state_12425__$1 = state_12425;var statearr_12434_12480 = state_12425__$1;(statearr_12434_12480[2] = inst_12398);
(statearr_12434_12480[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 21))
{var inst_12418 = (state_12425[2]);var state_12425__$1 = (function (){var statearr_12435 = state_12425;(statearr_12435[9] = inst_12418);
return statearr_12435;
})();var statearr_12436_12481 = state_12425__$1;(statearr_12436_12481[2] = null);
(statearr_12436_12481[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 13))
{var inst_12380 = (state_12425[10]);var inst_12382 = cljs.core.chunked_seq_QMARK_.call(null,inst_12380);var state_12425__$1 = state_12425;if(inst_12382)
{var statearr_12437_12482 = state_12425__$1;(statearr_12437_12482[1] = 16);
} else
{var statearr_12438_12483 = state_12425__$1;(statearr_12438_12483[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 22))
{var inst_12410 = (state_12425[2]);var state_12425__$1 = state_12425;if(cljs.core.truth_(inst_12410))
{var statearr_12439_12484 = state_12425__$1;(statearr_12439_12484[1] = 23);
} else
{var statearr_12440_12485 = state_12425__$1;(statearr_12440_12485[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 6))
{var inst_12356 = (state_12425[8]);var inst_12404 = (state_12425[7]);var inst_12406 = (state_12425[11]);var inst_12404__$1 = topic_fn.call(null,inst_12356);var inst_12405 = cljs.core.deref.call(null,mults);var inst_12406__$1 = cljs.core.get.call(null,inst_12405,inst_12404__$1);var state_12425__$1 = (function (){var statearr_12441 = state_12425;(statearr_12441[7] = inst_12404__$1);
(statearr_12441[11] = inst_12406__$1);
return statearr_12441;
})();if(cljs.core.truth_(inst_12406__$1))
{var statearr_12442_12486 = state_12425__$1;(statearr_12442_12486[1] = 19);
} else
{var statearr_12443_12487 = state_12425__$1;(statearr_12443_12487[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 25))
{var inst_12415 = (state_12425[2]);var state_12425__$1 = state_12425;var statearr_12444_12488 = state_12425__$1;(statearr_12444_12488[2] = inst_12415);
(statearr_12444_12488[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 17))
{var inst_12380 = (state_12425[10]);var inst_12389 = cljs.core.first.call(null,inst_12380);var inst_12390 = cljs.core.async.muxch_STAR_.call(null,inst_12389);var inst_12391 = cljs.core.async.close_BANG_.call(null,inst_12390);var inst_12392 = cljs.core.next.call(null,inst_12380);var inst_12366 = inst_12392;var inst_12367 = null;var inst_12368 = 0;var inst_12369 = 0;var state_12425__$1 = (function (){var statearr_12445 = state_12425;(statearr_12445[12] = inst_12369);
(statearr_12445[13] = inst_12367);
(statearr_12445[14] = inst_12366);
(statearr_12445[15] = inst_12391);
(statearr_12445[16] = inst_12368);
return statearr_12445;
})();var statearr_12446_12489 = state_12425__$1;(statearr_12446_12489[2] = null);
(statearr_12446_12489[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 3))
{var inst_12423 = (state_12425[2]);var state_12425__$1 = state_12425;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12425__$1,inst_12423);
} else
{if((state_val_12426 === 12))
{var inst_12400 = (state_12425[2]);var state_12425__$1 = state_12425;var statearr_12447_12490 = state_12425__$1;(statearr_12447_12490[2] = inst_12400);
(statearr_12447_12490[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 2))
{var state_12425__$1 = state_12425;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12425__$1,4,ch);
} else
{if((state_val_12426 === 23))
{var state_12425__$1 = state_12425;var statearr_12448_12491 = state_12425__$1;(statearr_12448_12491[2] = null);
(statearr_12448_12491[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 19))
{var inst_12356 = (state_12425[8]);var inst_12406 = (state_12425[11]);var inst_12408 = cljs.core.async.muxch_STAR_.call(null,inst_12406);var state_12425__$1 = state_12425;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12425__$1,22,inst_12408,inst_12356);
} else
{if((state_val_12426 === 11))
{var inst_12380 = (state_12425[10]);var inst_12366 = (state_12425[14]);var inst_12380__$1 = cljs.core.seq.call(null,inst_12366);var state_12425__$1 = (function (){var statearr_12449 = state_12425;(statearr_12449[10] = inst_12380__$1);
return statearr_12449;
})();if(inst_12380__$1)
{var statearr_12450_12492 = state_12425__$1;(statearr_12450_12492[1] = 13);
} else
{var statearr_12451_12493 = state_12425__$1;(statearr_12451_12493[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 9))
{var inst_12402 = (state_12425[2]);var state_12425__$1 = state_12425;var statearr_12452_12494 = state_12425__$1;(statearr_12452_12494[2] = inst_12402);
(statearr_12452_12494[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 5))
{var inst_12363 = cljs.core.deref.call(null,mults);var inst_12364 = cljs.core.vals.call(null,inst_12363);var inst_12365 = cljs.core.seq.call(null,inst_12364);var inst_12366 = inst_12365;var inst_12367 = null;var inst_12368 = 0;var inst_12369 = 0;var state_12425__$1 = (function (){var statearr_12453 = state_12425;(statearr_12453[12] = inst_12369);
(statearr_12453[13] = inst_12367);
(statearr_12453[14] = inst_12366);
(statearr_12453[16] = inst_12368);
return statearr_12453;
})();var statearr_12454_12495 = state_12425__$1;(statearr_12454_12495[2] = null);
(statearr_12454_12495[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 14))
{var state_12425__$1 = state_12425;var statearr_12458_12496 = state_12425__$1;(statearr_12458_12496[2] = null);
(statearr_12458_12496[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 16))
{var inst_12380 = (state_12425[10]);var inst_12384 = cljs.core.chunk_first.call(null,inst_12380);var inst_12385 = cljs.core.chunk_rest.call(null,inst_12380);var inst_12386 = cljs.core.count.call(null,inst_12384);var inst_12366 = inst_12385;var inst_12367 = inst_12384;var inst_12368 = inst_12386;var inst_12369 = 0;var state_12425__$1 = (function (){var statearr_12459 = state_12425;(statearr_12459[12] = inst_12369);
(statearr_12459[13] = inst_12367);
(statearr_12459[14] = inst_12366);
(statearr_12459[16] = inst_12368);
return statearr_12459;
})();var statearr_12460_12497 = state_12425__$1;(statearr_12460_12497[2] = null);
(statearr_12460_12497[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 10))
{var inst_12369 = (state_12425[12]);var inst_12367 = (state_12425[13]);var inst_12366 = (state_12425[14]);var inst_12368 = (state_12425[16]);var inst_12374 = cljs.core._nth.call(null,inst_12367,inst_12369);var inst_12375 = cljs.core.async.muxch_STAR_.call(null,inst_12374);var inst_12376 = cljs.core.async.close_BANG_.call(null,inst_12375);var inst_12377 = (inst_12369 + 1);var tmp12455 = inst_12367;var tmp12456 = inst_12366;var tmp12457 = inst_12368;var inst_12366__$1 = tmp12456;var inst_12367__$1 = tmp12455;var inst_12368__$1 = tmp12457;var inst_12369__$1 = inst_12377;var state_12425__$1 = (function (){var statearr_12461 = state_12425;(statearr_12461[12] = inst_12369__$1);
(statearr_12461[13] = inst_12367__$1);
(statearr_12461[14] = inst_12366__$1);
(statearr_12461[17] = inst_12376);
(statearr_12461[16] = inst_12368__$1);
return statearr_12461;
})();var statearr_12462_12498 = state_12425__$1;(statearr_12462_12498[2] = null);
(statearr_12462_12498[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 18))
{var inst_12395 = (state_12425[2]);var state_12425__$1 = state_12425;var statearr_12463_12499 = state_12425__$1;(statearr_12463_12499[2] = inst_12395);
(statearr_12463_12499[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12426 === 8))
{var inst_12369 = (state_12425[12]);var inst_12368 = (state_12425[16]);var inst_12371 = (inst_12369 < inst_12368);var inst_12372 = inst_12371;var state_12425__$1 = state_12425;if(cljs.core.truth_(inst_12372))
{var statearr_12464_12500 = state_12425__$1;(statearr_12464_12500[1] = 10);
} else
{var statearr_12465_12501 = state_12425__$1;(statearr_12465_12501[1] = 11);
}
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
});})(c__6361__auto___12473,mults,ensure_mult,p))
;return ((function (switch__6346__auto__,c__6361__auto___12473,mults,ensure_mult,p){
return (function() {
var state_machine__6347__auto__ = null;
var state_machine__6347__auto____0 = (function (){var statearr_12469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12469[0] = state_machine__6347__auto__);
(statearr_12469[1] = 1);
return statearr_12469;
});
var state_machine__6347__auto____1 = (function (state_12425){while(true){
var ret_value__6348__auto__ = (function (){try{while(true){
var result__6349__auto__ = switch__6346__auto__.call(null,state_12425);if(cljs.core.keyword_identical_QMARK_.call(null,result__6349__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6349__auto__;
}
break;
}
}catch (e12470){if((e12470 instanceof Object))
{var ex__6350__auto__ = e12470;var statearr_12471_12502 = state_12425;(statearr_12471_12502[5] = ex__6350__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12425);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12470;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6348__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12503 = state_12425;
state_12425 = G__12503;
continue;
}
} else
{return ret_value__6348__auto__;
}
break;
}
});
state_machine__6347__auto__ = function(state_12425){
switch(arguments.length){
case 0:
return state_machine__6347__auto____0.call(this);
case 1:
return state_machine__6347__auto____1.call(this,state_12425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6347__auto____0;
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6347__auto____1;
return state_machine__6347__auto__;
})()
;})(switch__6346__auto__,c__6361__auto___12473,mults,ensure_mult,p))
})();var state__6363__auto__ = (function (){var statearr_12472 = f__6362__auto__.call(null);(statearr_12472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6361__auto___12473);
return statearr_12472;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6363__auto__);
});})(c__6361__auto___12473,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6361__auto___12640 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6361__auto___12640,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6362__auto__ = (function (){var switch__6346__auto__ = ((function (c__6361__auto___12640,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12610){var state_val_12611 = (state_12610[1]);if((state_val_12611 === 7))
{var state_12610__$1 = state_12610;var statearr_12612_12641 = state_12610__$1;(statearr_12612_12641[2] = null);
(statearr_12612_12641[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12611 === 1))
{var state_12610__$1 = state_12610;var statearr_12613_12642 = state_12610__$1;(statearr_12613_12642[2] = null);
(statearr_12613_12642[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12611 === 4))
{var inst_12574 = (state_12610[7]);var inst_12576 = (inst_12574 < cnt);var state_12610__$1 = state_12610;if(cljs.core.truth_(inst_12576))
{var statearr_12614_12643 = state_12610__$1;(statearr_12614_12643[1] = 6);
} else
{var statearr_12615_12644 = state_12610__$1;(statearr_12615_12644[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12611 === 15))
{var inst_12606 = (state_12610[2]);var state_12610__$1 = state_12610;var statearr_12616_12645 = state_12610__$1;(statearr_12616_12645[2] = inst_12606);
(statearr_12616_12645[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12611 === 13))
{var inst_12599 = cljs.core.async.close_BANG_.call(null,out);var state_12610__$1 = state_12610;var statearr_12617_12646 = state_12610__$1;(statearr_12617_12646[2] = inst_12599);
(statearr_12617_12646[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12611 === 6))
{var state_12610__$1 = state_12610;var statearr_12618_12647 = state_12610__$1;(statearr_12618_12647[2] = null);
(statearr_12618_12647[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12611 === 3))
{var inst_12608 = (state_12610[2]);var state_12610__$1 = state_12610;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12610__$1,inst_12608);
} else
{if((state_val_12611 === 12))
{var inst_12596 = (state_12610[8]);var inst_12596__$1 = (state_12610[2]);var inst_12597 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12596__$1);var state_12610__$1 = (function (){var statearr_12619 = state_12610;(statearr_12619[8] = inst_12596__$1);
return statearr_12619;
})();if(cljs.core.truth_(inst_12597))
{var statearr_12620_12648 = state_12610__$1;(statearr_12620_12648[1] = 13);
} else
{var statearr_12621_12649 = state_12610__$1;(statearr_12621_12649[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12611 === 2))
{var inst_12573 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12574 = 0;var state_12610__$1 = (function (){var statearr_12622 = state_12610;(statearr_12622[7] = inst_12574);
(statearr_12622[9] = inst_12573);
return statearr_12622;
})();var statearr_12623_12650 = state_12610__$1;(statearr_12623_12650[2] = null);
(statearr_12623_12650[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12611 === 11))
{var inst_12574 = (state_12610[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12610,10,Object,null,9);var inst_12583 = chs__$1.call(null,inst_12574);var inst_12584 = done.call(null,inst_12574);var inst_12585 = cljs.core.async.take_BANG_.call(null,inst_12583,inst_12584);var state_12610__$1 = state_12610;var statearr_12624_12651 = state_12610__$1;(statearr_12624_12651[2] = inst_12585);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12610__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12611 === 9))
{var inst_12574 = (state_12610[7]);var inst_12587 = (state_12610[2]);var inst_12588 = (inst_12574 + 1);var inst_12574__$1 = inst_12588;var state_12610__$1 = (function (){var statearr_12625 = state_12610;(statearr_12625[10] = inst_12587);
(statearr_12625[7] = inst_12574__$1);
return statearr_12625;
})();var statearr_12626_12652 = state_12610__$1;(statearr_12626_12652[2] = null);
(statearr_12626_12652[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12611 === 5))
{var inst_12594 = (state_12610[2]);var state_12610__$1 = (function (){var statearr_12627 = state_12610;(statearr_12627[11] = inst_12594);
return statearr_12627;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12610__$1,12,dchan);
} else
{if((state_val_12611 === 14))
{var inst_12596 = (state_12610[8]);var inst_12601 = cljs.core.apply.call(null,f,inst_12596);var state_12610__$1 = state_12610;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12610__$1,16,out,inst_12601);
} else
{if((state_val_12611 === 16))
{var inst_12603 = (state_12610[2]);var state_12610__$1 = (function (){var statearr_12628 = state_12610;(statearr_12628[12] = inst_12603);
return statearr_12628;
})();var statearr_12629_12653 = state_12610__$1;(statearr_12629_12653[2] = null);
(statearr_12629_12653[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12611 === 10))
{var inst_12578 = (state_12610[2]);var inst_12579 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12610__$1 = (function (){var statearr_12630 = state_12610;(statearr_12630[13] = inst_12578);
return statearr_12630;
})();var statearr_12631_12654 = state_12610__$1;(statearr_12631_12654[2] = inst_12579);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12610__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12611 === 8))
{var inst_12592 = (state_12610[2]);var state_12610__$1 = state_12610;var statearr_12632_12655 = state_12610__$1;(statearr_12632_12655[2] = inst_12592);
(statearr_12632_12655[1] = 5);
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
});})(c__6361__auto___12640,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6346__auto__,c__6361__auto___12640,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6347__auto__ = null;
var state_machine__6347__auto____0 = (function (){var statearr_12636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12636[0] = state_machine__6347__auto__);
(statearr_12636[1] = 1);
return statearr_12636;
});
var state_machine__6347__auto____1 = (function (state_12610){while(true){
var ret_value__6348__auto__ = (function (){try{while(true){
var result__6349__auto__ = switch__6346__auto__.call(null,state_12610);if(cljs.core.keyword_identical_QMARK_.call(null,result__6349__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6349__auto__;
}
break;
}
}catch (e12637){if((e12637 instanceof Object))
{var ex__6350__auto__ = e12637;var statearr_12638_12656 = state_12610;(statearr_12638_12656[5] = ex__6350__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12610);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12637;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6348__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12657 = state_12610;
state_12610 = G__12657;
continue;
}
} else
{return ret_value__6348__auto__;
}
break;
}
});
state_machine__6347__auto__ = function(state_12610){
switch(arguments.length){
case 0:
return state_machine__6347__auto____0.call(this);
case 1:
return state_machine__6347__auto____1.call(this,state_12610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6347__auto____0;
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6347__auto____1;
return state_machine__6347__auto__;
})()
;})(switch__6346__auto__,c__6361__auto___12640,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6363__auto__ = (function (){var statearr_12639 = f__6362__auto__.call(null);(statearr_12639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6361__auto___12640);
return statearr_12639;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6363__auto__);
});})(c__6361__auto___12640,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6361__auto___12765 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6361__auto___12765,out){
return (function (){var f__6362__auto__ = (function (){var switch__6346__auto__ = ((function (c__6361__auto___12765,out){
return (function (state_12741){var state_val_12742 = (state_12741[1]);if((state_val_12742 === 7))
{var inst_12721 = (state_12741[7]);var inst_12720 = (state_12741[8]);var inst_12720__$1 = (state_12741[2]);var inst_12721__$1 = cljs.core.nth.call(null,inst_12720__$1,0,null);var inst_12722 = cljs.core.nth.call(null,inst_12720__$1,1,null);var inst_12723 = (inst_12721__$1 == null);var state_12741__$1 = (function (){var statearr_12743 = state_12741;(statearr_12743[9] = inst_12722);
(statearr_12743[7] = inst_12721__$1);
(statearr_12743[8] = inst_12720__$1);
return statearr_12743;
})();if(cljs.core.truth_(inst_12723))
{var statearr_12744_12766 = state_12741__$1;(statearr_12744_12766[1] = 8);
} else
{var statearr_12745_12767 = state_12741__$1;(statearr_12745_12767[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12742 === 1))
{var inst_12712 = cljs.core.vec.call(null,chs);var inst_12713 = inst_12712;var state_12741__$1 = (function (){var statearr_12746 = state_12741;(statearr_12746[10] = inst_12713);
return statearr_12746;
})();var statearr_12747_12768 = state_12741__$1;(statearr_12747_12768[2] = null);
(statearr_12747_12768[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12742 === 4))
{var inst_12713 = (state_12741[10]);var state_12741__$1 = state_12741;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12741__$1,7,inst_12713);
} else
{if((state_val_12742 === 6))
{var inst_12737 = (state_12741[2]);var state_12741__$1 = state_12741;var statearr_12748_12769 = state_12741__$1;(statearr_12748_12769[2] = inst_12737);
(statearr_12748_12769[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12742 === 3))
{var inst_12739 = (state_12741[2]);var state_12741__$1 = state_12741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12741__$1,inst_12739);
} else
{if((state_val_12742 === 2))
{var inst_12713 = (state_12741[10]);var inst_12715 = cljs.core.count.call(null,inst_12713);var inst_12716 = (inst_12715 > 0);var state_12741__$1 = state_12741;if(cljs.core.truth_(inst_12716))
{var statearr_12750_12770 = state_12741__$1;(statearr_12750_12770[1] = 4);
} else
{var statearr_12751_12771 = state_12741__$1;(statearr_12751_12771[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12742 === 11))
{var inst_12713 = (state_12741[10]);var inst_12730 = (state_12741[2]);var tmp12749 = inst_12713;var inst_12713__$1 = tmp12749;var state_12741__$1 = (function (){var statearr_12752 = state_12741;(statearr_12752[11] = inst_12730);
(statearr_12752[10] = inst_12713__$1);
return statearr_12752;
})();var statearr_12753_12772 = state_12741__$1;(statearr_12753_12772[2] = null);
(statearr_12753_12772[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12742 === 9))
{var inst_12721 = (state_12741[7]);var state_12741__$1 = state_12741;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12741__$1,11,out,inst_12721);
} else
{if((state_val_12742 === 5))
{var inst_12735 = cljs.core.async.close_BANG_.call(null,out);var state_12741__$1 = state_12741;var statearr_12754_12773 = state_12741__$1;(statearr_12754_12773[2] = inst_12735);
(statearr_12754_12773[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12742 === 10))
{var inst_12733 = (state_12741[2]);var state_12741__$1 = state_12741;var statearr_12755_12774 = state_12741__$1;(statearr_12755_12774[2] = inst_12733);
(statearr_12755_12774[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12742 === 8))
{var inst_12722 = (state_12741[9]);var inst_12721 = (state_12741[7]);var inst_12713 = (state_12741[10]);var inst_12720 = (state_12741[8]);var inst_12725 = (function (){var c = inst_12722;var v = inst_12721;var vec__12718 = inst_12720;var cs = inst_12713;return ((function (c,v,vec__12718,cs,inst_12722,inst_12721,inst_12713,inst_12720,state_val_12742,c__6361__auto___12765,out){
return (function (p1__12658_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12658_SHARP_);
});
;})(c,v,vec__12718,cs,inst_12722,inst_12721,inst_12713,inst_12720,state_val_12742,c__6361__auto___12765,out))
})();var inst_12726 = cljs.core.filterv.call(null,inst_12725,inst_12713);var inst_12713__$1 = inst_12726;var state_12741__$1 = (function (){var statearr_12756 = state_12741;(statearr_12756[10] = inst_12713__$1);
return statearr_12756;
})();var statearr_12757_12775 = state_12741__$1;(statearr_12757_12775[2] = null);
(statearr_12757_12775[1] = 2);
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
});})(c__6361__auto___12765,out))
;return ((function (switch__6346__auto__,c__6361__auto___12765,out){
return (function() {
var state_machine__6347__auto__ = null;
var state_machine__6347__auto____0 = (function (){var statearr_12761 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12761[0] = state_machine__6347__auto__);
(statearr_12761[1] = 1);
return statearr_12761;
});
var state_machine__6347__auto____1 = (function (state_12741){while(true){
var ret_value__6348__auto__ = (function (){try{while(true){
var result__6349__auto__ = switch__6346__auto__.call(null,state_12741);if(cljs.core.keyword_identical_QMARK_.call(null,result__6349__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6349__auto__;
}
break;
}
}catch (e12762){if((e12762 instanceof Object))
{var ex__6350__auto__ = e12762;var statearr_12763_12776 = state_12741;(statearr_12763_12776[5] = ex__6350__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12741);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12762;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6348__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12777 = state_12741;
state_12741 = G__12777;
continue;
}
} else
{return ret_value__6348__auto__;
}
break;
}
});
state_machine__6347__auto__ = function(state_12741){
switch(arguments.length){
case 0:
return state_machine__6347__auto____0.call(this);
case 1:
return state_machine__6347__auto____1.call(this,state_12741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6347__auto____0;
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6347__auto____1;
return state_machine__6347__auto__;
})()
;})(switch__6346__auto__,c__6361__auto___12765,out))
})();var state__6363__auto__ = (function (){var statearr_12764 = f__6362__auto__.call(null);(statearr_12764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6361__auto___12765);
return statearr_12764;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6363__auto__);
});})(c__6361__auto___12765,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6361__auto___12870 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6361__auto___12870,out){
return (function (){var f__6362__auto__ = (function (){var switch__6346__auto__ = ((function (c__6361__auto___12870,out){
return (function (state_12847){var state_val_12848 = (state_12847[1]);if((state_val_12848 === 7))
{var inst_12829 = (state_12847[7]);var inst_12829__$1 = (state_12847[2]);var inst_12830 = (inst_12829__$1 == null);var inst_12831 = cljs.core.not.call(null,inst_12830);var state_12847__$1 = (function (){var statearr_12849 = state_12847;(statearr_12849[7] = inst_12829__$1);
return statearr_12849;
})();if(inst_12831)
{var statearr_12850_12871 = state_12847__$1;(statearr_12850_12871[1] = 8);
} else
{var statearr_12851_12872 = state_12847__$1;(statearr_12851_12872[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12848 === 1))
{var inst_12824 = 0;var state_12847__$1 = (function (){var statearr_12852 = state_12847;(statearr_12852[8] = inst_12824);
return statearr_12852;
})();var statearr_12853_12873 = state_12847__$1;(statearr_12853_12873[2] = null);
(statearr_12853_12873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12848 === 4))
{var state_12847__$1 = state_12847;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12847__$1,7,ch);
} else
{if((state_val_12848 === 6))
{var inst_12842 = (state_12847[2]);var state_12847__$1 = state_12847;var statearr_12854_12874 = state_12847__$1;(statearr_12854_12874[2] = inst_12842);
(statearr_12854_12874[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12848 === 3))
{var inst_12844 = (state_12847[2]);var inst_12845 = cljs.core.async.close_BANG_.call(null,out);var state_12847__$1 = (function (){var statearr_12855 = state_12847;(statearr_12855[9] = inst_12844);
return statearr_12855;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12847__$1,inst_12845);
} else
{if((state_val_12848 === 2))
{var inst_12824 = (state_12847[8]);var inst_12826 = (inst_12824 < n);var state_12847__$1 = state_12847;if(cljs.core.truth_(inst_12826))
{var statearr_12856_12875 = state_12847__$1;(statearr_12856_12875[1] = 4);
} else
{var statearr_12857_12876 = state_12847__$1;(statearr_12857_12876[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12848 === 11))
{var inst_12824 = (state_12847[8]);var inst_12834 = (state_12847[2]);var inst_12835 = (inst_12824 + 1);var inst_12824__$1 = inst_12835;var state_12847__$1 = (function (){var statearr_12858 = state_12847;(statearr_12858[10] = inst_12834);
(statearr_12858[8] = inst_12824__$1);
return statearr_12858;
})();var statearr_12859_12877 = state_12847__$1;(statearr_12859_12877[2] = null);
(statearr_12859_12877[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12848 === 9))
{var state_12847__$1 = state_12847;var statearr_12860_12878 = state_12847__$1;(statearr_12860_12878[2] = null);
(statearr_12860_12878[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12848 === 5))
{var state_12847__$1 = state_12847;var statearr_12861_12879 = state_12847__$1;(statearr_12861_12879[2] = null);
(statearr_12861_12879[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12848 === 10))
{var inst_12839 = (state_12847[2]);var state_12847__$1 = state_12847;var statearr_12862_12880 = state_12847__$1;(statearr_12862_12880[2] = inst_12839);
(statearr_12862_12880[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12848 === 8))
{var inst_12829 = (state_12847[7]);var state_12847__$1 = state_12847;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12847__$1,11,out,inst_12829);
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
});})(c__6361__auto___12870,out))
;return ((function (switch__6346__auto__,c__6361__auto___12870,out){
return (function() {
var state_machine__6347__auto__ = null;
var state_machine__6347__auto____0 = (function (){var statearr_12866 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12866[0] = state_machine__6347__auto__);
(statearr_12866[1] = 1);
return statearr_12866;
});
var state_machine__6347__auto____1 = (function (state_12847){while(true){
var ret_value__6348__auto__ = (function (){try{while(true){
var result__6349__auto__ = switch__6346__auto__.call(null,state_12847);if(cljs.core.keyword_identical_QMARK_.call(null,result__6349__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6349__auto__;
}
break;
}
}catch (e12867){if((e12867 instanceof Object))
{var ex__6350__auto__ = e12867;var statearr_12868_12881 = state_12847;(statearr_12868_12881[5] = ex__6350__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12847);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12867;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6348__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12882 = state_12847;
state_12847 = G__12882;
continue;
}
} else
{return ret_value__6348__auto__;
}
break;
}
});
state_machine__6347__auto__ = function(state_12847){
switch(arguments.length){
case 0:
return state_machine__6347__auto____0.call(this);
case 1:
return state_machine__6347__auto____1.call(this,state_12847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6347__auto____0;
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6347__auto____1;
return state_machine__6347__auto__;
})()
;})(switch__6346__auto__,c__6361__auto___12870,out))
})();var state__6363__auto__ = (function (){var statearr_12869 = f__6362__auto__.call(null);(statearr_12869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6361__auto___12870);
return statearr_12869;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6363__auto__);
});})(c__6361__auto___12870,out))
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
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6361__auto___12979 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6361__auto___12979,out){
return (function (){var f__6362__auto__ = (function (){var switch__6346__auto__ = ((function (c__6361__auto___12979,out){
return (function (state_12954){var state_val_12955 = (state_12954[1]);if((state_val_12955 === 7))
{var inst_12949 = (state_12954[2]);var state_12954__$1 = state_12954;var statearr_12956_12980 = state_12954__$1;(statearr_12956_12980[2] = inst_12949);
(statearr_12956_12980[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12955 === 1))
{var inst_12931 = null;var state_12954__$1 = (function (){var statearr_12957 = state_12954;(statearr_12957[7] = inst_12931);
return statearr_12957;
})();var statearr_12958_12981 = state_12954__$1;(statearr_12958_12981[2] = null);
(statearr_12958_12981[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12955 === 4))
{var inst_12934 = (state_12954[8]);var inst_12934__$1 = (state_12954[2]);var inst_12935 = (inst_12934__$1 == null);var inst_12936 = cljs.core.not.call(null,inst_12935);var state_12954__$1 = (function (){var statearr_12959 = state_12954;(statearr_12959[8] = inst_12934__$1);
return statearr_12959;
})();if(inst_12936)
{var statearr_12960_12982 = state_12954__$1;(statearr_12960_12982[1] = 5);
} else
{var statearr_12961_12983 = state_12954__$1;(statearr_12961_12983[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12955 === 6))
{var state_12954__$1 = state_12954;var statearr_12962_12984 = state_12954__$1;(statearr_12962_12984[2] = null);
(statearr_12962_12984[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12955 === 3))
{var inst_12951 = (state_12954[2]);var inst_12952 = cljs.core.async.close_BANG_.call(null,out);var state_12954__$1 = (function (){var statearr_12963 = state_12954;(statearr_12963[9] = inst_12951);
return statearr_12963;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12954__$1,inst_12952);
} else
{if((state_val_12955 === 2))
{var state_12954__$1 = state_12954;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12954__$1,4,ch);
} else
{if((state_val_12955 === 11))
{var inst_12934 = (state_12954[8]);var inst_12943 = (state_12954[2]);var inst_12931 = inst_12934;var state_12954__$1 = (function (){var statearr_12964 = state_12954;(statearr_12964[7] = inst_12931);
(statearr_12964[10] = inst_12943);
return statearr_12964;
})();var statearr_12965_12985 = state_12954__$1;(statearr_12965_12985[2] = null);
(statearr_12965_12985[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12955 === 9))
{var inst_12934 = (state_12954[8]);var state_12954__$1 = state_12954;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12954__$1,11,out,inst_12934);
} else
{if((state_val_12955 === 5))
{var inst_12931 = (state_12954[7]);var inst_12934 = (state_12954[8]);var inst_12938 = cljs.core._EQ_.call(null,inst_12934,inst_12931);var state_12954__$1 = state_12954;if(inst_12938)
{var statearr_12967_12986 = state_12954__$1;(statearr_12967_12986[1] = 8);
} else
{var statearr_12968_12987 = state_12954__$1;(statearr_12968_12987[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12955 === 10))
{var inst_12946 = (state_12954[2]);var state_12954__$1 = state_12954;var statearr_12969_12988 = state_12954__$1;(statearr_12969_12988[2] = inst_12946);
(statearr_12969_12988[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12955 === 8))
{var inst_12931 = (state_12954[7]);var tmp12966 = inst_12931;var inst_12931__$1 = tmp12966;var state_12954__$1 = (function (){var statearr_12970 = state_12954;(statearr_12970[7] = inst_12931__$1);
return statearr_12970;
})();var statearr_12971_12989 = state_12954__$1;(statearr_12971_12989[2] = null);
(statearr_12971_12989[1] = 2);
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
});})(c__6361__auto___12979,out))
;return ((function (switch__6346__auto__,c__6361__auto___12979,out){
return (function() {
var state_machine__6347__auto__ = null;
var state_machine__6347__auto____0 = (function (){var statearr_12975 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12975[0] = state_machine__6347__auto__);
(statearr_12975[1] = 1);
return statearr_12975;
});
var state_machine__6347__auto____1 = (function (state_12954){while(true){
var ret_value__6348__auto__ = (function (){try{while(true){
var result__6349__auto__ = switch__6346__auto__.call(null,state_12954);if(cljs.core.keyword_identical_QMARK_.call(null,result__6349__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6349__auto__;
}
break;
}
}catch (e12976){if((e12976 instanceof Object))
{var ex__6350__auto__ = e12976;var statearr_12977_12990 = state_12954;(statearr_12977_12990[5] = ex__6350__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12954);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12976;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6348__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12991 = state_12954;
state_12954 = G__12991;
continue;
}
} else
{return ret_value__6348__auto__;
}
break;
}
});
state_machine__6347__auto__ = function(state_12954){
switch(arguments.length){
case 0:
return state_machine__6347__auto____0.call(this);
case 1:
return state_machine__6347__auto____1.call(this,state_12954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6347__auto____0;
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6347__auto____1;
return state_machine__6347__auto__;
})()
;})(switch__6346__auto__,c__6361__auto___12979,out))
})();var state__6363__auto__ = (function (){var statearr_12978 = f__6362__auto__.call(null);(statearr_12978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6361__auto___12979);
return statearr_12978;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6363__auto__);
});})(c__6361__auto___12979,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6361__auto___13126 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6361__auto___13126,out){
return (function (){var f__6362__auto__ = (function (){var switch__6346__auto__ = ((function (c__6361__auto___13126,out){
return (function (state_13096){var state_val_13097 = (state_13096[1]);if((state_val_13097 === 7))
{var inst_13092 = (state_13096[2]);var state_13096__$1 = state_13096;var statearr_13098_13127 = state_13096__$1;(statearr_13098_13127[2] = inst_13092);
(statearr_13098_13127[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 1))
{var inst_13059 = (new Array(n));var inst_13060 = inst_13059;var inst_13061 = 0;var state_13096__$1 = (function (){var statearr_13099 = state_13096;(statearr_13099[7] = inst_13060);
(statearr_13099[8] = inst_13061);
return statearr_13099;
})();var statearr_13100_13128 = state_13096__$1;(statearr_13100_13128[2] = null);
(statearr_13100_13128[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 4))
{var inst_13064 = (state_13096[9]);var inst_13064__$1 = (state_13096[2]);var inst_13065 = (inst_13064__$1 == null);var inst_13066 = cljs.core.not.call(null,inst_13065);var state_13096__$1 = (function (){var statearr_13101 = state_13096;(statearr_13101[9] = inst_13064__$1);
return statearr_13101;
})();if(inst_13066)
{var statearr_13102_13129 = state_13096__$1;(statearr_13102_13129[1] = 5);
} else
{var statearr_13103_13130 = state_13096__$1;(statearr_13103_13130[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 15))
{var inst_13086 = (state_13096[2]);var state_13096__$1 = state_13096;var statearr_13104_13131 = state_13096__$1;(statearr_13104_13131[2] = inst_13086);
(statearr_13104_13131[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 13))
{var state_13096__$1 = state_13096;var statearr_13105_13132 = state_13096__$1;(statearr_13105_13132[2] = null);
(statearr_13105_13132[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 6))
{var inst_13061 = (state_13096[8]);var inst_13082 = (inst_13061 > 0);var state_13096__$1 = state_13096;if(cljs.core.truth_(inst_13082))
{var statearr_13106_13133 = state_13096__$1;(statearr_13106_13133[1] = 12);
} else
{var statearr_13107_13134 = state_13096__$1;(statearr_13107_13134[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 3))
{var inst_13094 = (state_13096[2]);var state_13096__$1 = state_13096;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13096__$1,inst_13094);
} else
{if((state_val_13097 === 12))
{var inst_13060 = (state_13096[7]);var inst_13084 = cljs.core.vec.call(null,inst_13060);var state_13096__$1 = state_13096;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13096__$1,15,out,inst_13084);
} else
{if((state_val_13097 === 2))
{var state_13096__$1 = state_13096;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13096__$1,4,ch);
} else
{if((state_val_13097 === 11))
{var inst_13076 = (state_13096[2]);var inst_13077 = (new Array(n));var inst_13060 = inst_13077;var inst_13061 = 0;var state_13096__$1 = (function (){var statearr_13108 = state_13096;(statearr_13108[7] = inst_13060);
(statearr_13108[10] = inst_13076);
(statearr_13108[8] = inst_13061);
return statearr_13108;
})();var statearr_13109_13135 = state_13096__$1;(statearr_13109_13135[2] = null);
(statearr_13109_13135[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 9))
{var inst_13060 = (state_13096[7]);var inst_13074 = cljs.core.vec.call(null,inst_13060);var state_13096__$1 = state_13096;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13096__$1,11,out,inst_13074);
} else
{if((state_val_13097 === 5))
{var inst_13060 = (state_13096[7]);var inst_13064 = (state_13096[9]);var inst_13061 = (state_13096[8]);var inst_13069 = (state_13096[11]);var inst_13068 = (inst_13060[inst_13061] = inst_13064);var inst_13069__$1 = (inst_13061 + 1);var inst_13070 = (inst_13069__$1 < n);var state_13096__$1 = (function (){var statearr_13110 = state_13096;(statearr_13110[12] = inst_13068);
(statearr_13110[11] = inst_13069__$1);
return statearr_13110;
})();if(cljs.core.truth_(inst_13070))
{var statearr_13111_13136 = state_13096__$1;(statearr_13111_13136[1] = 8);
} else
{var statearr_13112_13137 = state_13096__$1;(statearr_13112_13137[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 14))
{var inst_13089 = (state_13096[2]);var inst_13090 = cljs.core.async.close_BANG_.call(null,out);var state_13096__$1 = (function (){var statearr_13114 = state_13096;(statearr_13114[13] = inst_13089);
return statearr_13114;
})();var statearr_13115_13138 = state_13096__$1;(statearr_13115_13138[2] = inst_13090);
(statearr_13115_13138[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 10))
{var inst_13080 = (state_13096[2]);var state_13096__$1 = state_13096;var statearr_13116_13139 = state_13096__$1;(statearr_13116_13139[2] = inst_13080);
(statearr_13116_13139[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13097 === 8))
{var inst_13060 = (state_13096[7]);var inst_13069 = (state_13096[11]);var tmp13113 = inst_13060;var inst_13060__$1 = tmp13113;var inst_13061 = inst_13069;var state_13096__$1 = (function (){var statearr_13117 = state_13096;(statearr_13117[7] = inst_13060__$1);
(statearr_13117[8] = inst_13061);
return statearr_13117;
})();var statearr_13118_13140 = state_13096__$1;(statearr_13118_13140[2] = null);
(statearr_13118_13140[1] = 2);
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
});})(c__6361__auto___13126,out))
;return ((function (switch__6346__auto__,c__6361__auto___13126,out){
return (function() {
var state_machine__6347__auto__ = null;
var state_machine__6347__auto____0 = (function (){var statearr_13122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13122[0] = state_machine__6347__auto__);
(statearr_13122[1] = 1);
return statearr_13122;
});
var state_machine__6347__auto____1 = (function (state_13096){while(true){
var ret_value__6348__auto__ = (function (){try{while(true){
var result__6349__auto__ = switch__6346__auto__.call(null,state_13096);if(cljs.core.keyword_identical_QMARK_.call(null,result__6349__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6349__auto__;
}
break;
}
}catch (e13123){if((e13123 instanceof Object))
{var ex__6350__auto__ = e13123;var statearr_13124_13141 = state_13096;(statearr_13124_13141[5] = ex__6350__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13096);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13123;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6348__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13142 = state_13096;
state_13096 = G__13142;
continue;
}
} else
{return ret_value__6348__auto__;
}
break;
}
});
state_machine__6347__auto__ = function(state_13096){
switch(arguments.length){
case 0:
return state_machine__6347__auto____0.call(this);
case 1:
return state_machine__6347__auto____1.call(this,state_13096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6347__auto____0;
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6347__auto____1;
return state_machine__6347__auto__;
})()
;})(switch__6346__auto__,c__6361__auto___13126,out))
})();var state__6363__auto__ = (function (){var statearr_13125 = f__6362__auto__.call(null);(statearr_13125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6361__auto___13126);
return statearr_13125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6363__auto__);
});})(c__6361__auto___13126,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6361__auto___13285 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6361__auto___13285,out){
return (function (){var f__6362__auto__ = (function (){var switch__6346__auto__ = ((function (c__6361__auto___13285,out){
return (function (state_13255){var state_val_13256 = (state_13255[1]);if((state_val_13256 === 7))
{var inst_13251 = (state_13255[2]);var state_13255__$1 = state_13255;var statearr_13257_13286 = state_13255__$1;(statearr_13257_13286[2] = inst_13251);
(statearr_13257_13286[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 1))
{var inst_13214 = [];var inst_13215 = inst_13214;var inst_13216 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13255__$1 = (function (){var statearr_13258 = state_13255;(statearr_13258[7] = inst_13216);
(statearr_13258[8] = inst_13215);
return statearr_13258;
})();var statearr_13259_13287 = state_13255__$1;(statearr_13259_13287[2] = null);
(statearr_13259_13287[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 4))
{var inst_13219 = (state_13255[9]);var inst_13219__$1 = (state_13255[2]);var inst_13220 = (inst_13219__$1 == null);var inst_13221 = cljs.core.not.call(null,inst_13220);var state_13255__$1 = (function (){var statearr_13260 = state_13255;(statearr_13260[9] = inst_13219__$1);
return statearr_13260;
})();if(inst_13221)
{var statearr_13261_13288 = state_13255__$1;(statearr_13261_13288[1] = 5);
} else
{var statearr_13262_13289 = state_13255__$1;(statearr_13262_13289[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 15))
{var inst_13245 = (state_13255[2]);var state_13255__$1 = state_13255;var statearr_13263_13290 = state_13255__$1;(statearr_13263_13290[2] = inst_13245);
(statearr_13263_13290[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 13))
{var state_13255__$1 = state_13255;var statearr_13264_13291 = state_13255__$1;(statearr_13264_13291[2] = null);
(statearr_13264_13291[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 6))
{var inst_13215 = (state_13255[8]);var inst_13240 = inst_13215.length;var inst_13241 = (inst_13240 > 0);var state_13255__$1 = state_13255;if(cljs.core.truth_(inst_13241))
{var statearr_13265_13292 = state_13255__$1;(statearr_13265_13292[1] = 12);
} else
{var statearr_13266_13293 = state_13255__$1;(statearr_13266_13293[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 3))
{var inst_13253 = (state_13255[2]);var state_13255__$1 = state_13255;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13255__$1,inst_13253);
} else
{if((state_val_13256 === 12))
{var inst_13215 = (state_13255[8]);var inst_13243 = cljs.core.vec.call(null,inst_13215);var state_13255__$1 = state_13255;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13255__$1,15,out,inst_13243);
} else
{if((state_val_13256 === 2))
{var state_13255__$1 = state_13255;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13255__$1,4,ch);
} else
{if((state_val_13256 === 11))
{var inst_13219 = (state_13255[9]);var inst_13223 = (state_13255[10]);var inst_13233 = (state_13255[2]);var inst_13234 = [];var inst_13235 = inst_13234.push(inst_13219);var inst_13215 = inst_13234;var inst_13216 = inst_13223;var state_13255__$1 = (function (){var statearr_13267 = state_13255;(statearr_13267[7] = inst_13216);
(statearr_13267[11] = inst_13233);
(statearr_13267[8] = inst_13215);
(statearr_13267[12] = inst_13235);
return statearr_13267;
})();var statearr_13268_13294 = state_13255__$1;(statearr_13268_13294[2] = null);
(statearr_13268_13294[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 9))
{var inst_13215 = (state_13255[8]);var inst_13231 = cljs.core.vec.call(null,inst_13215);var state_13255__$1 = state_13255;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13255__$1,11,out,inst_13231);
} else
{if((state_val_13256 === 5))
{var inst_13216 = (state_13255[7]);var inst_13219 = (state_13255[9]);var inst_13223 = (state_13255[10]);var inst_13223__$1 = f.call(null,inst_13219);var inst_13224 = cljs.core._EQ_.call(null,inst_13223__$1,inst_13216);var inst_13225 = cljs.core.keyword_identical_QMARK_.call(null,inst_13216,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13226 = (inst_13224) || (inst_13225);var state_13255__$1 = (function (){var statearr_13269 = state_13255;(statearr_13269[10] = inst_13223__$1);
return statearr_13269;
})();if(cljs.core.truth_(inst_13226))
{var statearr_13270_13295 = state_13255__$1;(statearr_13270_13295[1] = 8);
} else
{var statearr_13271_13296 = state_13255__$1;(statearr_13271_13296[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 14))
{var inst_13248 = (state_13255[2]);var inst_13249 = cljs.core.async.close_BANG_.call(null,out);var state_13255__$1 = (function (){var statearr_13273 = state_13255;(statearr_13273[13] = inst_13248);
return statearr_13273;
})();var statearr_13274_13297 = state_13255__$1;(statearr_13274_13297[2] = inst_13249);
(statearr_13274_13297[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 10))
{var inst_13238 = (state_13255[2]);var state_13255__$1 = state_13255;var statearr_13275_13298 = state_13255__$1;(statearr_13275_13298[2] = inst_13238);
(statearr_13275_13298[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13256 === 8))
{var inst_13219 = (state_13255[9]);var inst_13223 = (state_13255[10]);var inst_13215 = (state_13255[8]);var inst_13228 = inst_13215.push(inst_13219);var tmp13272 = inst_13215;var inst_13215__$1 = tmp13272;var inst_13216 = inst_13223;var state_13255__$1 = (function (){var statearr_13276 = state_13255;(statearr_13276[7] = inst_13216);
(statearr_13276[8] = inst_13215__$1);
(statearr_13276[14] = inst_13228);
return statearr_13276;
})();var statearr_13277_13299 = state_13255__$1;(statearr_13277_13299[2] = null);
(statearr_13277_13299[1] = 2);
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
});})(c__6361__auto___13285,out))
;return ((function (switch__6346__auto__,c__6361__auto___13285,out){
return (function() {
var state_machine__6347__auto__ = null;
var state_machine__6347__auto____0 = (function (){var statearr_13281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13281[0] = state_machine__6347__auto__);
(statearr_13281[1] = 1);
return statearr_13281;
});
var state_machine__6347__auto____1 = (function (state_13255){while(true){
var ret_value__6348__auto__ = (function (){try{while(true){
var result__6349__auto__ = switch__6346__auto__.call(null,state_13255);if(cljs.core.keyword_identical_QMARK_.call(null,result__6349__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6349__auto__;
}
break;
}
}catch (e13282){if((e13282 instanceof Object))
{var ex__6350__auto__ = e13282;var statearr_13283_13300 = state_13255;(statearr_13283_13300[5] = ex__6350__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13255);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13282;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6348__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13301 = state_13255;
state_13255 = G__13301;
continue;
}
} else
{return ret_value__6348__auto__;
}
break;
}
});
state_machine__6347__auto__ = function(state_13255){
switch(arguments.length){
case 0:
return state_machine__6347__auto____0.call(this);
case 1:
return state_machine__6347__auto____1.call(this,state_13255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6347__auto____0;
state_machine__6347__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6347__auto____1;
return state_machine__6347__auto__;
})()
;})(switch__6346__auto__,c__6361__auto___13285,out))
})();var state__6363__auto__ = (function (){var statearr_13284 = f__6362__auto__.call(null);(statearr_13284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6361__auto___13285);
return statearr_13284;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6363__auto__);
});})(c__6361__auto___13285,out))
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