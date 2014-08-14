// Compiled by ClojureScript 0.0-2277
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10798 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10798 = (function (f,fn_handler,meta10799){
this.f = f;
this.fn_handler = fn_handler;
this.meta10799 = meta10799;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10798.cljs$lang$type = true;
cljs.core.async.t10798.cljs$lang$ctorStr = "cljs.core.async/t10798";
cljs.core.async.t10798.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10798");
});
cljs.core.async.t10798.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10798.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10798.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10800){var self__ = this;
var _10800__$1 = this;return self__.meta10799;
});
cljs.core.async.t10798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10800,meta10799__$1){var self__ = this;
var _10800__$1 = this;return (new cljs.core.async.t10798(self__.f,self__.fn_handler,meta10799__$1));
});
cljs.core.async.__GT_t10798 = (function __GT_t10798(f__$1,fn_handler__$1,meta10799){return (new cljs.core.async.t10798(f__$1,fn_handler__$1,meta10799));
});
}
return (new cljs.core.async.t10798(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10802 = buff;if(G__10802)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__10802.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10802.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10802);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10802);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
{var val_10803 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10803);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10803,ret){
return (function (){return fn1.call(null,val_10803);
});})(val_10803,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___10804 = n;var x_10805 = (0);while(true){
if((x_10805 < n__4399__auto___10804))
{(a[x_10805] = (0));
{
var G__10806 = (x_10805 + (1));
x_10805 = G__10806;
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
var G__10807 = (i + (1));
i = G__10807;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10811 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10811 = (function (flag,alt_flag,meta10812){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10812 = meta10812;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10811.cljs$lang$type = true;
cljs.core.async.t10811.cljs$lang$ctorStr = "cljs.core.async/t10811";
cljs.core.async.t10811.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10811");
});})(flag))
;
cljs.core.async.t10811.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10811.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10811.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10811.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10813){var self__ = this;
var _10813__$1 = this;return self__.meta10812;
});})(flag))
;
cljs.core.async.t10811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10813,meta10812__$1){var self__ = this;
var _10813__$1 = this;return (new cljs.core.async.t10811(self__.flag,self__.alt_flag,meta10812__$1));
});})(flag))
;
cljs.core.async.__GT_t10811 = ((function (flag){
return (function __GT_t10811(flag__$1,alt_flag__$1,meta10812){return (new cljs.core.async.t10811(flag__$1,alt_flag__$1,meta10812));
});})(flag))
;
}
return (new cljs.core.async.t10811(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10817 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10817 = (function (cb,flag,alt_handler,meta10818){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10818 = meta10818;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10817.cljs$lang$type = true;
cljs.core.async.t10817.cljs$lang$ctorStr = "cljs.core.async/t10817";
cljs.core.async.t10817.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10817");
});
cljs.core.async.t10817.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10817.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10817.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10819){var self__ = this;
var _10819__$1 = this;return self__.meta10818;
});
cljs.core.async.t10817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10819,meta10818__$1){var self__ = this;
var _10819__$1 = this;return (new cljs.core.async.t10817(self__.cb,self__.flag,self__.alt_handler,meta10818__$1));
});
cljs.core.async.__GT_t10817 = (function __GT_t10817(cb__$1,flag__$1,alt_handler__$1,meta10818){return (new cljs.core.async.t10817(cb__$1,flag__$1,alt_handler__$1,meta10818));
});
}
return (new cljs.core.async.t10817(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10820_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10820_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10821_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10821_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3543__auto__ = wport;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10822 = (i + (1));
i = G__10822;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3543__auto__ = ret;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3531__auto__;
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
var alts_BANG___delegate = function (ports,p__10823){var map__10825 = p__10823;var map__10825__$1 = ((cljs.core.seq_QMARK_.call(null,map__10825))?cljs.core.apply.call(null,cljs.core.hash_map,map__10825):map__10825);var opts = map__10825__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10823 = null;if (arguments.length > 1) {
  p__10823 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10823);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10826){
var ports = cljs.core.first(arglist__10826);
var p__10823 = cljs.core.rest(arglist__10826);
return alts_BANG___delegate(ports,p__10823);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10834 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10834 = (function (ch,f,map_LT_,meta10835){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10835 = meta10835;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10834.cljs$lang$type = true;
cljs.core.async.t10834.cljs$lang$ctorStr = "cljs.core.async/t10834";
cljs.core.async.t10834.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10834");
});
cljs.core.async.t10834.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10834.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t10834.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10834.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10837 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10837 = (function (fn1,_,meta10835,ch,f,map_LT_,meta10838){
this.fn1 = fn1;
this._ = _;
this.meta10835 = meta10835;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10838 = meta10838;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10837.cljs$lang$type = true;
cljs.core.async.t10837.cljs$lang$ctorStr = "cljs.core.async/t10837";
cljs.core.async.t10837.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10837");
});})(___$1))
;
cljs.core.async.t10837.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10837.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10837.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10837.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10827_SHARP_){return f1.call(null,(((p1__10827_SHARP_ == null))?null:self__.f.call(null,p1__10827_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10837.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10839){var self__ = this;
var _10839__$1 = this;return self__.meta10838;
});})(___$1))
;
cljs.core.async.t10837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10839,meta10838__$1){var self__ = this;
var _10839__$1 = this;return (new cljs.core.async.t10837(self__.fn1,self__._,self__.meta10835,self__.ch,self__.f,self__.map_LT_,meta10838__$1));
});})(___$1))
;
cljs.core.async.__GT_t10837 = ((function (___$1){
return (function __GT_t10837(fn1__$1,___$2,meta10835__$1,ch__$2,f__$2,map_LT___$2,meta10838){return (new cljs.core.async.t10837(fn1__$1,___$2,meta10835__$1,ch__$2,f__$2,map_LT___$2,meta10838));
});})(___$1))
;
}
return (new cljs.core.async.t10837(fn1,___$1,self__.meta10835,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10834.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10834.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10834.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10836){var self__ = this;
var _10836__$1 = this;return self__.meta10835;
});
cljs.core.async.t10834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10836,meta10835__$1){var self__ = this;
var _10836__$1 = this;return (new cljs.core.async.t10834(self__.ch,self__.f,self__.map_LT_,meta10835__$1));
});
cljs.core.async.__GT_t10834 = (function __GT_t10834(ch__$1,f__$1,map_LT___$1,meta10835){return (new cljs.core.async.t10834(ch__$1,f__$1,map_LT___$1,meta10835));
});
}
return (new cljs.core.async.t10834(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10843 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10843 = (function (ch,f,map_GT_,meta10844){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10844 = meta10844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10843.cljs$lang$type = true;
cljs.core.async.t10843.cljs$lang$ctorStr = "cljs.core.async/t10843";
cljs.core.async.t10843.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10843");
});
cljs.core.async.t10843.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10843.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t10843.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10843.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10843.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10843.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10845){var self__ = this;
var _10845__$1 = this;return self__.meta10844;
});
cljs.core.async.t10843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10845,meta10844__$1){var self__ = this;
var _10845__$1 = this;return (new cljs.core.async.t10843(self__.ch,self__.f,self__.map_GT_,meta10844__$1));
});
cljs.core.async.__GT_t10843 = (function __GT_t10843(ch__$1,f__$1,map_GT___$1,meta10844){return (new cljs.core.async.t10843(ch__$1,f__$1,map_GT___$1,meta10844));
});
}
return (new cljs.core.async.t10843(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10849 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10849 = (function (ch,p,filter_GT_,meta10850){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10850 = meta10850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10849.cljs$lang$type = true;
cljs.core.async.t10849.cljs$lang$ctorStr = "cljs.core.async/t10849";
cljs.core.async.t10849.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10849");
});
cljs.core.async.t10849.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10849.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t10849.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10849.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10849.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10849.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10849.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10851){var self__ = this;
var _10851__$1 = this;return self__.meta10850;
});
cljs.core.async.t10849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10851,meta10850__$1){var self__ = this;
var _10851__$1 = this;return (new cljs.core.async.t10849(self__.ch,self__.p,self__.filter_GT_,meta10850__$1));
});
cljs.core.async.__GT_t10849 = (function __GT_t10849(ch__$1,p__$1,filter_GT___$1,meta10850){return (new cljs.core.async.t10849(ch__$1,p__$1,filter_GT___$1,meta10850));
});
}
return (new cljs.core.async.t10849(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6360__auto___10934 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6360__auto___10934,out){
return (function (){var f__6361__auto__ = (function (){var switch__6345__auto__ = ((function (c__6360__auto___10934,out){
return (function (state_10913){var state_val_10914 = (state_10913[(1)]);if((state_val_10914 === (7)))
{var inst_10909 = (state_10913[(2)]);var state_10913__$1 = state_10913;var statearr_10915_10935 = state_10913__$1;(statearr_10915_10935[(2)] = inst_10909);
(statearr_10915_10935[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10914 === (1)))
{var state_10913__$1 = state_10913;var statearr_10916_10936 = state_10913__$1;(statearr_10916_10936[(2)] = null);
(statearr_10916_10936[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10914 === (4)))
{var inst_10895 = (state_10913[(7)]);var inst_10895__$1 = (state_10913[(2)]);var inst_10896 = (inst_10895__$1 == null);var state_10913__$1 = (function (){var statearr_10917 = state_10913;(statearr_10917[(7)] = inst_10895__$1);
return statearr_10917;
})();if(cljs.core.truth_(inst_10896))
{var statearr_10918_10937 = state_10913__$1;(statearr_10918_10937[(1)] = (5));
} else
{var statearr_10919_10938 = state_10913__$1;(statearr_10919_10938[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10914 === (6)))
{var inst_10895 = (state_10913[(7)]);var inst_10900 = p.call(null,inst_10895);var state_10913__$1 = state_10913;if(cljs.core.truth_(inst_10900))
{var statearr_10920_10939 = state_10913__$1;(statearr_10920_10939[(1)] = (8));
} else
{var statearr_10921_10940 = state_10913__$1;(statearr_10921_10940[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10914 === (3)))
{var inst_10911 = (state_10913[(2)]);var state_10913__$1 = state_10913;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10913__$1,inst_10911);
} else
{if((state_val_10914 === (2)))
{var state_10913__$1 = state_10913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10913__$1,(4),ch);
} else
{if((state_val_10914 === (11)))
{var inst_10903 = (state_10913[(2)]);var state_10913__$1 = state_10913;var statearr_10922_10941 = state_10913__$1;(statearr_10922_10941[(2)] = inst_10903);
(statearr_10922_10941[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10914 === (9)))
{var state_10913__$1 = state_10913;var statearr_10923_10942 = state_10913__$1;(statearr_10923_10942[(2)] = null);
(statearr_10923_10942[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10914 === (5)))
{var inst_10898 = cljs.core.async.close_BANG_.call(null,out);var state_10913__$1 = state_10913;var statearr_10924_10943 = state_10913__$1;(statearr_10924_10943[(2)] = inst_10898);
(statearr_10924_10943[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10914 === (10)))
{var inst_10906 = (state_10913[(2)]);var state_10913__$1 = (function (){var statearr_10925 = state_10913;(statearr_10925[(8)] = inst_10906);
return statearr_10925;
})();var statearr_10926_10944 = state_10913__$1;(statearr_10926_10944[(2)] = null);
(statearr_10926_10944[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10914 === (8)))
{var inst_10895 = (state_10913[(7)]);var state_10913__$1 = state_10913;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10913__$1,(11),out,inst_10895);
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
});})(c__6360__auto___10934,out))
;return ((function (switch__6345__auto__,c__6360__auto___10934,out){
return (function() {
var state_machine__6346__auto__ = null;
var state_machine__6346__auto____0 = (function (){var statearr_10930 = [null,null,null,null,null,null,null,null,null];(statearr_10930[(0)] = state_machine__6346__auto__);
(statearr_10930[(1)] = (1));
return statearr_10930;
});
var state_machine__6346__auto____1 = (function (state_10913){while(true){
var ret_value__6347__auto__ = (function (){try{while(true){
var result__6348__auto__ = switch__6345__auto__.call(null,state_10913);if(cljs.core.keyword_identical_QMARK_.call(null,result__6348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6348__auto__;
}
break;
}
}catch (e10931){if((e10931 instanceof Object))
{var ex__6349__auto__ = e10931;var statearr_10932_10945 = state_10913;(statearr_10932_10945[(5)] = ex__6349__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10913);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10946 = state_10913;
state_10913 = G__10946;
continue;
}
} else
{return ret_value__6347__auto__;
}
break;
}
});
state_machine__6346__auto__ = function(state_10913){
switch(arguments.length){
case 0:
return state_machine__6346__auto____0.call(this);
case 1:
return state_machine__6346__auto____1.call(this,state_10913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6346__auto____0;
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6346__auto____1;
return state_machine__6346__auto__;
})()
;})(switch__6345__auto__,c__6360__auto___10934,out))
})();var state__6362__auto__ = (function (){var statearr_10933 = f__6361__auto__.call(null);(statearr_10933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6360__auto___10934);
return statearr_10933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6362__auto__);
});})(c__6360__auto___10934,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6360__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6360__auto__){
return (function (){var f__6361__auto__ = (function (){var switch__6345__auto__ = ((function (c__6360__auto__){
return (function (state_11112){var state_val_11113 = (state_11112[(1)]);if((state_val_11113 === (7)))
{var inst_11108 = (state_11112[(2)]);var state_11112__$1 = state_11112;var statearr_11114_11155 = state_11112__$1;(statearr_11114_11155[(2)] = inst_11108);
(statearr_11114_11155[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11113 === (20)))
{var inst_11078 = (state_11112[(7)]);var inst_11089 = (state_11112[(2)]);var inst_11090 = cljs.core.next.call(null,inst_11078);var inst_11064 = inst_11090;var inst_11065 = null;var inst_11066 = (0);var inst_11067 = (0);var state_11112__$1 = (function (){var statearr_11115 = state_11112;(statearr_11115[(8)] = inst_11064);
(statearr_11115[(9)] = inst_11065);
(statearr_11115[(10)] = inst_11067);
(statearr_11115[(11)] = inst_11066);
(statearr_11115[(12)] = inst_11089);
return statearr_11115;
})();var statearr_11116_11156 = state_11112__$1;(statearr_11116_11156[(2)] = null);
(statearr_11116_11156[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11113 === (1)))
{var state_11112__$1 = state_11112;var statearr_11117_11157 = state_11112__$1;(statearr_11117_11157[(2)] = null);
(statearr_11117_11157[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11113 === (4)))
{var inst_11053 = (state_11112[(13)]);var inst_11053__$1 = (state_11112[(2)]);var inst_11054 = (inst_11053__$1 == null);var state_11112__$1 = (function (){var statearr_11118 = state_11112;(statearr_11118[(13)] = inst_11053__$1);
return statearr_11118;
})();if(cljs.core.truth_(inst_11054))
{var statearr_11119_11158 = state_11112__$1;(statearr_11119_11158[(1)] = (5));
} else
{var statearr_11120_11159 = state_11112__$1;(statearr_11120_11159[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11113 === (15)))
{var state_11112__$1 = state_11112;var statearr_11124_11160 = state_11112__$1;(statearr_11124_11160[(2)] = null);
(statearr_11124_11160[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11113 === (21)))
{var state_11112__$1 = state_11112;var statearr_11125_11161 = state_11112__$1;(statearr_11125_11161[(2)] = null);
(statearr_11125_11161[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11113 === (13)))
{var inst_11064 = (state_11112[(8)]);var inst_11065 = (state_11112[(9)]);var inst_11067 = (state_11112[(10)]);var inst_11066 = (state_11112[(11)]);var inst_11074 = (state_11112[(2)]);var inst_11075 = (inst_11067 + (1));var tmp11121 = inst_11064;var tmp11122 = inst_11065;var tmp11123 = inst_11066;var inst_11064__$1 = tmp11121;var inst_11065__$1 = tmp11122;var inst_11066__$1 = tmp11123;var inst_11067__$1 = inst_11075;var state_11112__$1 = (function (){var statearr_11126 = state_11112;(statearr_11126[(8)] = inst_11064__$1);
(statearr_11126[(14)] = inst_11074);
(statearr_11126[(9)] = inst_11065__$1);
(statearr_11126[(10)] = inst_11067__$1);
(statearr_11126[(11)] = inst_11066__$1);
return statearr_11126;
})();var statearr_11127_11162 = state_11112__$1;(statearr_11127_11162[(2)] = null);
(statearr_11127_11162[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11113 === (22)))
{var state_11112__$1 = state_11112;var statearr_11128_11163 = state_11112__$1;(statearr_11128_11163[(2)] = null);
(statearr_11128_11163[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11113 === (6)))
{var inst_11053 = (state_11112[(13)]);var inst_11062 = f.call(null,inst_11053);var inst_11063 = cljs.core.seq.call(null,inst_11062);var inst_11064 = inst_11063;var inst_11065 = null;var inst_11066 = (0);var inst_11067 = (0);var state_11112__$1 = (function (){var statearr_11129 = state_11112;(statearr_11129[(8)] = inst_11064);
(statearr_11129[(9)] = inst_11065);
(statearr_11129[(10)] = inst_11067);
(statearr_11129[(11)] = inst_11066);
return statearr_11129;
})();var statearr_11130_11164 = state_11112__$1;(statearr_11130_11164[(2)] = null);
(statearr_11130_11164[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11113 === (17)))
{var inst_11078 = (state_11112[(7)]);var inst_11082 = cljs.core.chunk_first.call(null,inst_11078);var inst_11083 = cljs.core.chunk_rest.call(null,inst_11078);var inst_11084 = cljs.core.count.call(null,inst_11082);var inst_11064 = inst_11083;var inst_11065 = inst_11082;var inst_11066 = inst_11084;var inst_11067 = (0);var state_11112__$1 = (function (){var statearr_11131 = state_11112;(statearr_11131[(8)] = inst_11064);
(statearr_11131[(9)] = inst_11065);
(statearr_11131[(10)] = inst_11067);
(statearr_11131[(11)] = inst_11066);
return statearr_11131;
})();var statearr_11132_11165 = state_11112__$1;(statearr_11132_11165[(2)] = null);
(statearr_11132_11165[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11113 === (3)))
{var inst_11110 = (state_11112[(2)]);var state_11112__$1 = state_11112;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11112__$1,inst_11110);
} else
{if((state_val_11113 === (12)))
{var inst_11098 = (state_11112[(2)]);var state_11112__$1 = state_11112;var statearr_11133_11166 = state_11112__$1;(statearr_11133_11166[(2)] = inst_11098);
(statearr_11133_11166[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11113 === (2)))
{var state_11112__$1 = state_11112;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11112__$1,(4),in$);
} else
{if((state_val_11113 === (23)))
{var inst_11106 = (state_11112[(2)]);var state_11112__$1 = state_11112;var statearr_11134_11167 = state_11112__$1;(statearr_11134_11167[(2)] = inst_11106);
(statearr_11134_11167[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11113 === (19)))
{var inst_11093 = (state_11112[(2)]);var state_11112__$1 = state_11112;var statearr_11135_11168 = state_11112__$1;(statearr_11135_11168[(2)] = inst_11093);
(statearr_11135_11168[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11113 === (11)))
{var inst_11064 = (state_11112[(8)]);var inst_11078 = (state_11112[(7)]);var inst_11078__$1 = cljs.core.seq.call(null,inst_11064);var state_11112__$1 = (function (){var statearr_11136 = state_11112;(statearr_11136[(7)] = inst_11078__$1);
return statearr_11136;
})();if(inst_11078__$1)
{var statearr_11137_11169 = state_11112__$1;(statearr_11137_11169[(1)] = (14));
} else
{var statearr_11138_11170 = state_11112__$1;(statearr_11138_11170[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11113 === (9)))
{var inst_11100 = (state_11112[(2)]);var inst_11101 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11112__$1 = (function (){var statearr_11139 = state_11112;(statearr_11139[(15)] = inst_11100);
return statearr_11139;
})();if(cljs.core.truth_(inst_11101))
{var statearr_11140_11171 = state_11112__$1;(statearr_11140_11171[(1)] = (21));
} else
{var statearr_11141_11172 = state_11112__$1;(statearr_11141_11172[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11113 === (5)))
{var inst_11056 = cljs.core.async.close_BANG_.call(null,out);var state_11112__$1 = state_11112;var statearr_11142_11173 = state_11112__$1;(statearr_11142_11173[(2)] = inst_11056);
(statearr_11142_11173[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11113 === (14)))
{var inst_11078 = (state_11112[(7)]);var inst_11080 = cljs.core.chunked_seq_QMARK_.call(null,inst_11078);var state_11112__$1 = state_11112;if(inst_11080)
{var statearr_11143_11174 = state_11112__$1;(statearr_11143_11174[(1)] = (17));
} else
{var statearr_11144_11175 = state_11112__$1;(statearr_11144_11175[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11113 === (16)))
{var inst_11096 = (state_11112[(2)]);var state_11112__$1 = state_11112;var statearr_11145_11176 = state_11112__$1;(statearr_11145_11176[(2)] = inst_11096);
(statearr_11145_11176[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11113 === (10)))
{var inst_11065 = (state_11112[(9)]);var inst_11067 = (state_11112[(10)]);var inst_11072 = cljs.core._nth.call(null,inst_11065,inst_11067);var state_11112__$1 = state_11112;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11112__$1,(13),out,inst_11072);
} else
{if((state_val_11113 === (18)))
{var inst_11078 = (state_11112[(7)]);var inst_11087 = cljs.core.first.call(null,inst_11078);var state_11112__$1 = state_11112;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11112__$1,(20),out,inst_11087);
} else
{if((state_val_11113 === (8)))
{var inst_11067 = (state_11112[(10)]);var inst_11066 = (state_11112[(11)]);var inst_11069 = (inst_11067 < inst_11066);var inst_11070 = inst_11069;var state_11112__$1 = state_11112;if(cljs.core.truth_(inst_11070))
{var statearr_11146_11177 = state_11112__$1;(statearr_11146_11177[(1)] = (10));
} else
{var statearr_11147_11178 = state_11112__$1;(statearr_11147_11178[(1)] = (11));
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
});})(c__6360__auto__))
;return ((function (switch__6345__auto__,c__6360__auto__){
return (function() {
var state_machine__6346__auto__ = null;
var state_machine__6346__auto____0 = (function (){var statearr_11151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11151[(0)] = state_machine__6346__auto__);
(statearr_11151[(1)] = (1));
return statearr_11151;
});
var state_machine__6346__auto____1 = (function (state_11112){while(true){
var ret_value__6347__auto__ = (function (){try{while(true){
var result__6348__auto__ = switch__6345__auto__.call(null,state_11112);if(cljs.core.keyword_identical_QMARK_.call(null,result__6348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6348__auto__;
}
break;
}
}catch (e11152){if((e11152 instanceof Object))
{var ex__6349__auto__ = e11152;var statearr_11153_11179 = state_11112;(statearr_11153_11179[(5)] = ex__6349__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11112);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11152;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11180 = state_11112;
state_11112 = G__11180;
continue;
}
} else
{return ret_value__6347__auto__;
}
break;
}
});
state_machine__6346__auto__ = function(state_11112){
switch(arguments.length){
case 0:
return state_machine__6346__auto____0.call(this);
case 1:
return state_machine__6346__auto____1.call(this,state_11112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6346__auto____0;
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6346__auto____1;
return state_machine__6346__auto__;
})()
;})(switch__6345__auto__,c__6360__auto__))
})();var state__6362__auto__ = (function (){var statearr_11154 = f__6361__auto__.call(null);(statearr_11154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6360__auto__);
return statearr_11154;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6362__auto__);
});})(c__6360__auto__))
);
return c__6360__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6360__auto___11275 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6360__auto___11275){
return (function (){var f__6361__auto__ = (function (){var switch__6345__auto__ = ((function (c__6360__auto___11275){
return (function (state_11251){var state_val_11252 = (state_11251[(1)]);if((state_val_11252 === (7)))
{var inst_11247 = (state_11251[(2)]);var state_11251__$1 = state_11251;var statearr_11253_11276 = state_11251__$1;(statearr_11253_11276[(2)] = inst_11247);
(statearr_11253_11276[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11252 === (1)))
{var state_11251__$1 = state_11251;var statearr_11254_11277 = state_11251__$1;(statearr_11254_11277[(2)] = null);
(statearr_11254_11277[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11252 === (4)))
{var inst_11230 = (state_11251[(7)]);var inst_11230__$1 = (state_11251[(2)]);var inst_11231 = (inst_11230__$1 == null);var state_11251__$1 = (function (){var statearr_11255 = state_11251;(statearr_11255[(7)] = inst_11230__$1);
return statearr_11255;
})();if(cljs.core.truth_(inst_11231))
{var statearr_11256_11278 = state_11251__$1;(statearr_11256_11278[(1)] = (5));
} else
{var statearr_11257_11279 = state_11251__$1;(statearr_11257_11279[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11252 === (13)))
{var state_11251__$1 = state_11251;var statearr_11258_11280 = state_11251__$1;(statearr_11258_11280[(2)] = null);
(statearr_11258_11280[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11252 === (6)))
{var inst_11230 = (state_11251[(7)]);var state_11251__$1 = state_11251;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11251__$1,(11),to,inst_11230);
} else
{if((state_val_11252 === (3)))
{var inst_11249 = (state_11251[(2)]);var state_11251__$1 = state_11251;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11251__$1,inst_11249);
} else
{if((state_val_11252 === (12)))
{var state_11251__$1 = state_11251;var statearr_11259_11281 = state_11251__$1;(statearr_11259_11281[(2)] = null);
(statearr_11259_11281[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11252 === (2)))
{var state_11251__$1 = state_11251;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11251__$1,(4),from);
} else
{if((state_val_11252 === (11)))
{var inst_11240 = (state_11251[(2)]);var state_11251__$1 = state_11251;if(cljs.core.truth_(inst_11240))
{var statearr_11260_11282 = state_11251__$1;(statearr_11260_11282[(1)] = (12));
} else
{var statearr_11261_11283 = state_11251__$1;(statearr_11261_11283[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11252 === (9)))
{var state_11251__$1 = state_11251;var statearr_11262_11284 = state_11251__$1;(statearr_11262_11284[(2)] = null);
(statearr_11262_11284[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11252 === (5)))
{var state_11251__$1 = state_11251;if(cljs.core.truth_(close_QMARK_))
{var statearr_11263_11285 = state_11251__$1;(statearr_11263_11285[(1)] = (8));
} else
{var statearr_11264_11286 = state_11251__$1;(statearr_11264_11286[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11252 === (14)))
{var inst_11245 = (state_11251[(2)]);var state_11251__$1 = state_11251;var statearr_11265_11287 = state_11251__$1;(statearr_11265_11287[(2)] = inst_11245);
(statearr_11265_11287[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11252 === (10)))
{var inst_11237 = (state_11251[(2)]);var state_11251__$1 = state_11251;var statearr_11266_11288 = state_11251__$1;(statearr_11266_11288[(2)] = inst_11237);
(statearr_11266_11288[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11252 === (8)))
{var inst_11234 = cljs.core.async.close_BANG_.call(null,to);var state_11251__$1 = state_11251;var statearr_11267_11289 = state_11251__$1;(statearr_11267_11289[(2)] = inst_11234);
(statearr_11267_11289[(1)] = (10));
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
});})(c__6360__auto___11275))
;return ((function (switch__6345__auto__,c__6360__auto___11275){
return (function() {
var state_machine__6346__auto__ = null;
var state_machine__6346__auto____0 = (function (){var statearr_11271 = [null,null,null,null,null,null,null,null];(statearr_11271[(0)] = state_machine__6346__auto__);
(statearr_11271[(1)] = (1));
return statearr_11271;
});
var state_machine__6346__auto____1 = (function (state_11251){while(true){
var ret_value__6347__auto__ = (function (){try{while(true){
var result__6348__auto__ = switch__6345__auto__.call(null,state_11251);if(cljs.core.keyword_identical_QMARK_.call(null,result__6348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6348__auto__;
}
break;
}
}catch (e11272){if((e11272 instanceof Object))
{var ex__6349__auto__ = e11272;var statearr_11273_11290 = state_11251;(statearr_11273_11290[(5)] = ex__6349__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11251);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11272;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11291 = state_11251;
state_11251 = G__11291;
continue;
}
} else
{return ret_value__6347__auto__;
}
break;
}
});
state_machine__6346__auto__ = function(state_11251){
switch(arguments.length){
case 0:
return state_machine__6346__auto____0.call(this);
case 1:
return state_machine__6346__auto____1.call(this,state_11251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6346__auto____0;
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6346__auto____1;
return state_machine__6346__auto__;
})()
;})(switch__6345__auto__,c__6360__auto___11275))
})();var state__6362__auto__ = (function (){var statearr_11274 = f__6361__auto__.call(null);(statearr_11274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6360__auto___11275);
return statearr_11274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6362__auto__);
});})(c__6360__auto___11275))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6360__auto___11392 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6360__auto___11392,tc,fc){
return (function (){var f__6361__auto__ = (function (){var switch__6345__auto__ = ((function (c__6360__auto___11392,tc,fc){
return (function (state_11367){var state_val_11368 = (state_11367[(1)]);if((state_val_11368 === (7)))
{var inst_11363 = (state_11367[(2)]);var state_11367__$1 = state_11367;var statearr_11369_11393 = state_11367__$1;(statearr_11369_11393[(2)] = inst_11363);
(statearr_11369_11393[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11368 === (1)))
{var state_11367__$1 = state_11367;var statearr_11370_11394 = state_11367__$1;(statearr_11370_11394[(2)] = null);
(statearr_11370_11394[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11368 === (4)))
{var inst_11344 = (state_11367[(7)]);var inst_11344__$1 = (state_11367[(2)]);var inst_11345 = (inst_11344__$1 == null);var state_11367__$1 = (function (){var statearr_11371 = state_11367;(statearr_11371[(7)] = inst_11344__$1);
return statearr_11371;
})();if(cljs.core.truth_(inst_11345))
{var statearr_11372_11395 = state_11367__$1;(statearr_11372_11395[(1)] = (5));
} else
{var statearr_11373_11396 = state_11367__$1;(statearr_11373_11396[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11368 === (13)))
{var state_11367__$1 = state_11367;var statearr_11374_11397 = state_11367__$1;(statearr_11374_11397[(2)] = null);
(statearr_11374_11397[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11368 === (6)))
{var inst_11344 = (state_11367[(7)]);var inst_11350 = p.call(null,inst_11344);var state_11367__$1 = state_11367;if(cljs.core.truth_(inst_11350))
{var statearr_11375_11398 = state_11367__$1;(statearr_11375_11398[(1)] = (9));
} else
{var statearr_11376_11399 = state_11367__$1;(statearr_11376_11399[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11368 === (3)))
{var inst_11365 = (state_11367[(2)]);var state_11367__$1 = state_11367;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11367__$1,inst_11365);
} else
{if((state_val_11368 === (12)))
{var state_11367__$1 = state_11367;var statearr_11377_11400 = state_11367__$1;(statearr_11377_11400[(2)] = null);
(statearr_11377_11400[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11368 === (2)))
{var state_11367__$1 = state_11367;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11367__$1,(4),ch);
} else
{if((state_val_11368 === (11)))
{var inst_11344 = (state_11367[(7)]);var inst_11354 = (state_11367[(2)]);var state_11367__$1 = state_11367;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11367__$1,(8),inst_11354,inst_11344);
} else
{if((state_val_11368 === (9)))
{var state_11367__$1 = state_11367;var statearr_11378_11401 = state_11367__$1;(statearr_11378_11401[(2)] = tc);
(statearr_11378_11401[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11368 === (5)))
{var inst_11347 = cljs.core.async.close_BANG_.call(null,tc);var inst_11348 = cljs.core.async.close_BANG_.call(null,fc);var state_11367__$1 = (function (){var statearr_11379 = state_11367;(statearr_11379[(8)] = inst_11347);
return statearr_11379;
})();var statearr_11380_11402 = state_11367__$1;(statearr_11380_11402[(2)] = inst_11348);
(statearr_11380_11402[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11368 === (14)))
{var inst_11361 = (state_11367[(2)]);var state_11367__$1 = state_11367;var statearr_11381_11403 = state_11367__$1;(statearr_11381_11403[(2)] = inst_11361);
(statearr_11381_11403[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11368 === (10)))
{var state_11367__$1 = state_11367;var statearr_11382_11404 = state_11367__$1;(statearr_11382_11404[(2)] = fc);
(statearr_11382_11404[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11368 === (8)))
{var inst_11356 = (state_11367[(2)]);var state_11367__$1 = state_11367;if(cljs.core.truth_(inst_11356))
{var statearr_11383_11405 = state_11367__$1;(statearr_11383_11405[(1)] = (12));
} else
{var statearr_11384_11406 = state_11367__$1;(statearr_11384_11406[(1)] = (13));
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
});})(c__6360__auto___11392,tc,fc))
;return ((function (switch__6345__auto__,c__6360__auto___11392,tc,fc){
return (function() {
var state_machine__6346__auto__ = null;
var state_machine__6346__auto____0 = (function (){var statearr_11388 = [null,null,null,null,null,null,null,null,null];(statearr_11388[(0)] = state_machine__6346__auto__);
(statearr_11388[(1)] = (1));
return statearr_11388;
});
var state_machine__6346__auto____1 = (function (state_11367){while(true){
var ret_value__6347__auto__ = (function (){try{while(true){
var result__6348__auto__ = switch__6345__auto__.call(null,state_11367);if(cljs.core.keyword_identical_QMARK_.call(null,result__6348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6348__auto__;
}
break;
}
}catch (e11389){if((e11389 instanceof Object))
{var ex__6349__auto__ = e11389;var statearr_11390_11407 = state_11367;(statearr_11390_11407[(5)] = ex__6349__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11367);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11408 = state_11367;
state_11367 = G__11408;
continue;
}
} else
{return ret_value__6347__auto__;
}
break;
}
});
state_machine__6346__auto__ = function(state_11367){
switch(arguments.length){
case 0:
return state_machine__6346__auto____0.call(this);
case 1:
return state_machine__6346__auto____1.call(this,state_11367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6346__auto____0;
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6346__auto____1;
return state_machine__6346__auto__;
})()
;})(switch__6345__auto__,c__6360__auto___11392,tc,fc))
})();var state__6362__auto__ = (function (){var statearr_11391 = f__6361__auto__.call(null);(statearr_11391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6360__auto___11392);
return statearr_11391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6362__auto__);
});})(c__6360__auto___11392,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6360__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6360__auto__){
return (function (){var f__6361__auto__ = (function (){var switch__6345__auto__ = ((function (c__6360__auto__){
return (function (state_11455){var state_val_11456 = (state_11455[(1)]);if((state_val_11456 === (7)))
{var inst_11451 = (state_11455[(2)]);var state_11455__$1 = state_11455;var statearr_11457_11473 = state_11455__$1;(statearr_11457_11473[(2)] = inst_11451);
(statearr_11457_11473[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11456 === (6)))
{var inst_11441 = (state_11455[(7)]);var inst_11444 = (state_11455[(8)]);var inst_11448 = f.call(null,inst_11441,inst_11444);var inst_11441__$1 = inst_11448;var state_11455__$1 = (function (){var statearr_11458 = state_11455;(statearr_11458[(7)] = inst_11441__$1);
return statearr_11458;
})();var statearr_11459_11474 = state_11455__$1;(statearr_11459_11474[(2)] = null);
(statearr_11459_11474[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11456 === (5)))
{var inst_11441 = (state_11455[(7)]);var state_11455__$1 = state_11455;var statearr_11460_11475 = state_11455__$1;(statearr_11460_11475[(2)] = inst_11441);
(statearr_11460_11475[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11456 === (4)))
{var inst_11444 = (state_11455[(8)]);var inst_11444__$1 = (state_11455[(2)]);var inst_11445 = (inst_11444__$1 == null);var state_11455__$1 = (function (){var statearr_11461 = state_11455;(statearr_11461[(8)] = inst_11444__$1);
return statearr_11461;
})();if(cljs.core.truth_(inst_11445))
{var statearr_11462_11476 = state_11455__$1;(statearr_11462_11476[(1)] = (5));
} else
{var statearr_11463_11477 = state_11455__$1;(statearr_11463_11477[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11456 === (3)))
{var inst_11453 = (state_11455[(2)]);var state_11455__$1 = state_11455;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11455__$1,inst_11453);
} else
{if((state_val_11456 === (2)))
{var state_11455__$1 = state_11455;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11455__$1,(4),ch);
} else
{if((state_val_11456 === (1)))
{var inst_11441 = init;var state_11455__$1 = (function (){var statearr_11464 = state_11455;(statearr_11464[(7)] = inst_11441);
return statearr_11464;
})();var statearr_11465_11478 = state_11455__$1;(statearr_11465_11478[(2)] = null);
(statearr_11465_11478[(1)] = (2));
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
});})(c__6360__auto__))
;return ((function (switch__6345__auto__,c__6360__auto__){
return (function() {
var state_machine__6346__auto__ = null;
var state_machine__6346__auto____0 = (function (){var statearr_11469 = [null,null,null,null,null,null,null,null,null];(statearr_11469[(0)] = state_machine__6346__auto__);
(statearr_11469[(1)] = (1));
return statearr_11469;
});
var state_machine__6346__auto____1 = (function (state_11455){while(true){
var ret_value__6347__auto__ = (function (){try{while(true){
var result__6348__auto__ = switch__6345__auto__.call(null,state_11455);if(cljs.core.keyword_identical_QMARK_.call(null,result__6348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6348__auto__;
}
break;
}
}catch (e11470){if((e11470 instanceof Object))
{var ex__6349__auto__ = e11470;var statearr_11471_11479 = state_11455;(statearr_11471_11479[(5)] = ex__6349__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11455);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11470;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11480 = state_11455;
state_11455 = G__11480;
continue;
}
} else
{return ret_value__6347__auto__;
}
break;
}
});
state_machine__6346__auto__ = function(state_11455){
switch(arguments.length){
case 0:
return state_machine__6346__auto____0.call(this);
case 1:
return state_machine__6346__auto____1.call(this,state_11455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6346__auto____0;
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6346__auto____1;
return state_machine__6346__auto__;
})()
;})(switch__6345__auto__,c__6360__auto__))
})();var state__6362__auto__ = (function (){var statearr_11472 = f__6361__auto__.call(null);(statearr_11472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6360__auto__);
return statearr_11472;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6362__auto__);
});})(c__6360__auto__))
);
return c__6360__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6360__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6360__auto__){
return (function (){var f__6361__auto__ = (function (){var switch__6345__auto__ = ((function (c__6360__auto__){
return (function (state_11554){var state_val_11555 = (state_11554[(1)]);if((state_val_11555 === (7)))
{var inst_11536 = (state_11554[(2)]);var state_11554__$1 = state_11554;var statearr_11556_11579 = state_11554__$1;(statearr_11556_11579[(2)] = inst_11536);
(statearr_11556_11579[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11555 === (1)))
{var inst_11530 = cljs.core.seq.call(null,coll);var inst_11531 = inst_11530;var state_11554__$1 = (function (){var statearr_11557 = state_11554;(statearr_11557[(7)] = inst_11531);
return statearr_11557;
})();var statearr_11558_11580 = state_11554__$1;(statearr_11558_11580[(2)] = null);
(statearr_11558_11580[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11555 === (4)))
{var inst_11531 = (state_11554[(7)]);var inst_11534 = cljs.core.first.call(null,inst_11531);var state_11554__$1 = state_11554;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11554__$1,(7),ch,inst_11534);
} else
{if((state_val_11555 === (13)))
{var inst_11548 = (state_11554[(2)]);var state_11554__$1 = state_11554;var statearr_11559_11581 = state_11554__$1;(statearr_11559_11581[(2)] = inst_11548);
(statearr_11559_11581[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11555 === (6)))
{var inst_11539 = (state_11554[(2)]);var state_11554__$1 = state_11554;if(cljs.core.truth_(inst_11539))
{var statearr_11560_11582 = state_11554__$1;(statearr_11560_11582[(1)] = (8));
} else
{var statearr_11561_11583 = state_11554__$1;(statearr_11561_11583[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11555 === (3)))
{var inst_11552 = (state_11554[(2)]);var state_11554__$1 = state_11554;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11554__$1,inst_11552);
} else
{if((state_val_11555 === (12)))
{var state_11554__$1 = state_11554;var statearr_11562_11584 = state_11554__$1;(statearr_11562_11584[(2)] = null);
(statearr_11562_11584[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11555 === (2)))
{var inst_11531 = (state_11554[(7)]);var state_11554__$1 = state_11554;if(cljs.core.truth_(inst_11531))
{var statearr_11563_11585 = state_11554__$1;(statearr_11563_11585[(1)] = (4));
} else
{var statearr_11564_11586 = state_11554__$1;(statearr_11564_11586[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11555 === (11)))
{var inst_11545 = cljs.core.async.close_BANG_.call(null,ch);var state_11554__$1 = state_11554;var statearr_11565_11587 = state_11554__$1;(statearr_11565_11587[(2)] = inst_11545);
(statearr_11565_11587[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11555 === (9)))
{var state_11554__$1 = state_11554;if(cljs.core.truth_(close_QMARK_))
{var statearr_11566_11588 = state_11554__$1;(statearr_11566_11588[(1)] = (11));
} else
{var statearr_11567_11589 = state_11554__$1;(statearr_11567_11589[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11555 === (5)))
{var inst_11531 = (state_11554[(7)]);var state_11554__$1 = state_11554;var statearr_11568_11590 = state_11554__$1;(statearr_11568_11590[(2)] = inst_11531);
(statearr_11568_11590[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11555 === (10)))
{var inst_11550 = (state_11554[(2)]);var state_11554__$1 = state_11554;var statearr_11569_11591 = state_11554__$1;(statearr_11569_11591[(2)] = inst_11550);
(statearr_11569_11591[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11555 === (8)))
{var inst_11531 = (state_11554[(7)]);var inst_11541 = cljs.core.next.call(null,inst_11531);var inst_11531__$1 = inst_11541;var state_11554__$1 = (function (){var statearr_11570 = state_11554;(statearr_11570[(7)] = inst_11531__$1);
return statearr_11570;
})();var statearr_11571_11592 = state_11554__$1;(statearr_11571_11592[(2)] = null);
(statearr_11571_11592[(1)] = (2));
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
});})(c__6360__auto__))
;return ((function (switch__6345__auto__,c__6360__auto__){
return (function() {
var state_machine__6346__auto__ = null;
var state_machine__6346__auto____0 = (function (){var statearr_11575 = [null,null,null,null,null,null,null,null];(statearr_11575[(0)] = state_machine__6346__auto__);
(statearr_11575[(1)] = (1));
return statearr_11575;
});
var state_machine__6346__auto____1 = (function (state_11554){while(true){
var ret_value__6347__auto__ = (function (){try{while(true){
var result__6348__auto__ = switch__6345__auto__.call(null,state_11554);if(cljs.core.keyword_identical_QMARK_.call(null,result__6348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6348__auto__;
}
break;
}
}catch (e11576){if((e11576 instanceof Object))
{var ex__6349__auto__ = e11576;var statearr_11577_11593 = state_11554;(statearr_11577_11593[(5)] = ex__6349__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11554);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11576;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11594 = state_11554;
state_11554 = G__11594;
continue;
}
} else
{return ret_value__6347__auto__;
}
break;
}
});
state_machine__6346__auto__ = function(state_11554){
switch(arguments.length){
case 0:
return state_machine__6346__auto____0.call(this);
case 1:
return state_machine__6346__auto____1.call(this,state_11554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6346__auto____0;
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6346__auto____1;
return state_machine__6346__auto__;
})()
;})(switch__6345__auto__,c__6360__auto__))
})();var state__6362__auto__ = (function (){var statearr_11578 = f__6361__auto__.call(null);(statearr_11578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6360__auto__);
return statearr_11578;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6362__auto__);
});})(c__6360__auto__))
);
return c__6360__auto__;
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
cljs.core.async.Mux = (function (){var obj11596 = {};return obj11596;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3531__auto__ = _;if(and__3531__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4170__auto__ = (((_ == null))?null:_);return (function (){var or__3543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11598 = {};return obj11598;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11820 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11820 = (function (cs,ch,mult,meta11821){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11821 = meta11821;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11820.cljs$lang$type = true;
cljs.core.async.t11820.cljs$lang$ctorStr = "cljs.core.async/t11820";
cljs.core.async.t11820.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t11820");
});})(cs))
;
cljs.core.async.t11820.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11820.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11820.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11820.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11820.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11820.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11820.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11822){var self__ = this;
var _11822__$1 = this;return self__.meta11821;
});})(cs))
;
cljs.core.async.t11820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11822,meta11821__$1){var self__ = this;
var _11822__$1 = this;return (new cljs.core.async.t11820(self__.cs,self__.ch,self__.mult,meta11821__$1));
});})(cs))
;
cljs.core.async.__GT_t11820 = ((function (cs){
return (function __GT_t11820(cs__$1,ch__$1,mult__$1,meta11821){return (new cljs.core.async.t11820(cs__$1,ch__$1,mult__$1,meta11821));
});})(cs))
;
}
return (new cljs.core.async.t11820(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6360__auto___12041 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6360__auto___12041,cs,m,dchan,dctr,done){
return (function (){var f__6361__auto__ = (function (){var switch__6345__auto__ = ((function (c__6360__auto___12041,cs,m,dchan,dctr,done){
return (function (state_11953){var state_val_11954 = (state_11953[(1)]);if((state_val_11954 === (7)))
{var inst_11949 = (state_11953[(2)]);var state_11953__$1 = state_11953;var statearr_11955_12042 = state_11953__$1;(statearr_11955_12042[(2)] = inst_11949);
(statearr_11955_12042[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (20)))
{var inst_11854 = (state_11953[(7)]);var inst_11864 = cljs.core.first.call(null,inst_11854);var inst_11865 = cljs.core.nth.call(null,inst_11864,(0),null);var inst_11866 = cljs.core.nth.call(null,inst_11864,(1),null);var state_11953__$1 = (function (){var statearr_11956 = state_11953;(statearr_11956[(8)] = inst_11865);
return statearr_11956;
})();if(cljs.core.truth_(inst_11866))
{var statearr_11957_12043 = state_11953__$1;(statearr_11957_12043[(1)] = (22));
} else
{var statearr_11958_12044 = state_11953__$1;(statearr_11958_12044[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (27)))
{var inst_11825 = (state_11953[(9)]);var inst_11896 = (state_11953[(10)]);var inst_11901 = (state_11953[(11)]);var inst_11894 = (state_11953[(12)]);var inst_11901__$1 = cljs.core._nth.call(null,inst_11894,inst_11896);var inst_11902 = cljs.core.async.put_BANG_.call(null,inst_11901__$1,inst_11825,done);var state_11953__$1 = (function (){var statearr_11959 = state_11953;(statearr_11959[(11)] = inst_11901__$1);
return statearr_11959;
})();if(cljs.core.truth_(inst_11902))
{var statearr_11960_12045 = state_11953__$1;(statearr_11960_12045[(1)] = (30));
} else
{var statearr_11961_12046 = state_11953__$1;(statearr_11961_12046[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (1)))
{var state_11953__$1 = state_11953;var statearr_11962_12047 = state_11953__$1;(statearr_11962_12047[(2)] = null);
(statearr_11962_12047[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (24)))
{var inst_11854 = (state_11953[(7)]);var inst_11871 = (state_11953[(2)]);var inst_11872 = cljs.core.next.call(null,inst_11854);var inst_11834 = inst_11872;var inst_11835 = null;var inst_11836 = (0);var inst_11837 = (0);var state_11953__$1 = (function (){var statearr_11963 = state_11953;(statearr_11963[(13)] = inst_11834);
(statearr_11963[(14)] = inst_11837);
(statearr_11963[(15)] = inst_11871);
(statearr_11963[(16)] = inst_11835);
(statearr_11963[(17)] = inst_11836);
return statearr_11963;
})();var statearr_11964_12048 = state_11953__$1;(statearr_11964_12048[(2)] = null);
(statearr_11964_12048[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (39)))
{var state_11953__$1 = state_11953;var statearr_11968_12049 = state_11953__$1;(statearr_11968_12049[(2)] = null);
(statearr_11968_12049[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (4)))
{var inst_11825 = (state_11953[(9)]);var inst_11825__$1 = (state_11953[(2)]);var inst_11826 = (inst_11825__$1 == null);var state_11953__$1 = (function (){var statearr_11969 = state_11953;(statearr_11969[(9)] = inst_11825__$1);
return statearr_11969;
})();if(cljs.core.truth_(inst_11826))
{var statearr_11970_12050 = state_11953__$1;(statearr_11970_12050[(1)] = (5));
} else
{var statearr_11971_12051 = state_11953__$1;(statearr_11971_12051[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (15)))
{var inst_11834 = (state_11953[(13)]);var inst_11837 = (state_11953[(14)]);var inst_11835 = (state_11953[(16)]);var inst_11836 = (state_11953[(17)]);var inst_11850 = (state_11953[(2)]);var inst_11851 = (inst_11837 + (1));var tmp11965 = inst_11834;var tmp11966 = inst_11835;var tmp11967 = inst_11836;var inst_11834__$1 = tmp11965;var inst_11835__$1 = tmp11966;var inst_11836__$1 = tmp11967;var inst_11837__$1 = inst_11851;var state_11953__$1 = (function (){var statearr_11972 = state_11953;(statearr_11972[(13)] = inst_11834__$1);
(statearr_11972[(18)] = inst_11850);
(statearr_11972[(14)] = inst_11837__$1);
(statearr_11972[(16)] = inst_11835__$1);
(statearr_11972[(17)] = inst_11836__$1);
return statearr_11972;
})();var statearr_11973_12052 = state_11953__$1;(statearr_11973_12052[(2)] = null);
(statearr_11973_12052[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (21)))
{var inst_11875 = (state_11953[(2)]);var state_11953__$1 = state_11953;var statearr_11977_12053 = state_11953__$1;(statearr_11977_12053[(2)] = inst_11875);
(statearr_11977_12053[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (31)))
{var inst_11901 = (state_11953[(11)]);var inst_11905 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11906 = cljs.core.async.untap_STAR_.call(null,m,inst_11901);var state_11953__$1 = (function (){var statearr_11978 = state_11953;(statearr_11978[(19)] = inst_11905);
return statearr_11978;
})();var statearr_11979_12054 = state_11953__$1;(statearr_11979_12054[(2)] = inst_11906);
(statearr_11979_12054[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (32)))
{var inst_11896 = (state_11953[(10)]);var inst_11895 = (state_11953[(20)]);var inst_11893 = (state_11953[(21)]);var inst_11894 = (state_11953[(12)]);var inst_11908 = (state_11953[(2)]);var inst_11909 = (inst_11896 + (1));var tmp11974 = inst_11895;var tmp11975 = inst_11893;var tmp11976 = inst_11894;var inst_11893__$1 = tmp11975;var inst_11894__$1 = tmp11976;var inst_11895__$1 = tmp11974;var inst_11896__$1 = inst_11909;var state_11953__$1 = (function (){var statearr_11980 = state_11953;(statearr_11980[(10)] = inst_11896__$1);
(statearr_11980[(22)] = inst_11908);
(statearr_11980[(20)] = inst_11895__$1);
(statearr_11980[(21)] = inst_11893__$1);
(statearr_11980[(12)] = inst_11894__$1);
return statearr_11980;
})();var statearr_11981_12055 = state_11953__$1;(statearr_11981_12055[(2)] = null);
(statearr_11981_12055[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (40)))
{var inst_11921 = (state_11953[(23)]);var inst_11925 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11926 = cljs.core.async.untap_STAR_.call(null,m,inst_11921);var state_11953__$1 = (function (){var statearr_11982 = state_11953;(statearr_11982[(24)] = inst_11925);
return statearr_11982;
})();var statearr_11983_12056 = state_11953__$1;(statearr_11983_12056[(2)] = inst_11926);
(statearr_11983_12056[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (33)))
{var inst_11912 = (state_11953[(25)]);var inst_11914 = cljs.core.chunked_seq_QMARK_.call(null,inst_11912);var state_11953__$1 = state_11953;if(inst_11914)
{var statearr_11984_12057 = state_11953__$1;(statearr_11984_12057[(1)] = (36));
} else
{var statearr_11985_12058 = state_11953__$1;(statearr_11985_12058[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (13)))
{var inst_11844 = (state_11953[(26)]);var inst_11847 = cljs.core.async.close_BANG_.call(null,inst_11844);var state_11953__$1 = state_11953;var statearr_11986_12059 = state_11953__$1;(statearr_11986_12059[(2)] = inst_11847);
(statearr_11986_12059[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (22)))
{var inst_11865 = (state_11953[(8)]);var inst_11868 = cljs.core.async.close_BANG_.call(null,inst_11865);var state_11953__$1 = state_11953;var statearr_11987_12060 = state_11953__$1;(statearr_11987_12060[(2)] = inst_11868);
(statearr_11987_12060[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (36)))
{var inst_11912 = (state_11953[(25)]);var inst_11916 = cljs.core.chunk_first.call(null,inst_11912);var inst_11917 = cljs.core.chunk_rest.call(null,inst_11912);var inst_11918 = cljs.core.count.call(null,inst_11916);var inst_11893 = inst_11917;var inst_11894 = inst_11916;var inst_11895 = inst_11918;var inst_11896 = (0);var state_11953__$1 = (function (){var statearr_11988 = state_11953;(statearr_11988[(10)] = inst_11896);
(statearr_11988[(20)] = inst_11895);
(statearr_11988[(21)] = inst_11893);
(statearr_11988[(12)] = inst_11894);
return statearr_11988;
})();var statearr_11989_12061 = state_11953__$1;(statearr_11989_12061[(2)] = null);
(statearr_11989_12061[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (41)))
{var inst_11912 = (state_11953[(25)]);var inst_11928 = (state_11953[(2)]);var inst_11929 = cljs.core.next.call(null,inst_11912);var inst_11893 = inst_11929;var inst_11894 = null;var inst_11895 = (0);var inst_11896 = (0);var state_11953__$1 = (function (){var statearr_11990 = state_11953;(statearr_11990[(27)] = inst_11928);
(statearr_11990[(10)] = inst_11896);
(statearr_11990[(20)] = inst_11895);
(statearr_11990[(21)] = inst_11893);
(statearr_11990[(12)] = inst_11894);
return statearr_11990;
})();var statearr_11991_12062 = state_11953__$1;(statearr_11991_12062[(2)] = null);
(statearr_11991_12062[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (43)))
{var state_11953__$1 = state_11953;var statearr_11992_12063 = state_11953__$1;(statearr_11992_12063[(2)] = null);
(statearr_11992_12063[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (29)))
{var inst_11937 = (state_11953[(2)]);var state_11953__$1 = state_11953;var statearr_11993_12064 = state_11953__$1;(statearr_11993_12064[(2)] = inst_11937);
(statearr_11993_12064[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (44)))
{var inst_11946 = (state_11953[(2)]);var state_11953__$1 = (function (){var statearr_11994 = state_11953;(statearr_11994[(28)] = inst_11946);
return statearr_11994;
})();var statearr_11995_12065 = state_11953__$1;(statearr_11995_12065[(2)] = null);
(statearr_11995_12065[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (6)))
{var inst_11885 = (state_11953[(29)]);var inst_11884 = cljs.core.deref.call(null,cs);var inst_11885__$1 = cljs.core.keys.call(null,inst_11884);var inst_11886 = cljs.core.count.call(null,inst_11885__$1);var inst_11887 = cljs.core.reset_BANG_.call(null,dctr,inst_11886);var inst_11892 = cljs.core.seq.call(null,inst_11885__$1);var inst_11893 = inst_11892;var inst_11894 = null;var inst_11895 = (0);var inst_11896 = (0);var state_11953__$1 = (function (){var statearr_11996 = state_11953;(statearr_11996[(30)] = inst_11887);
(statearr_11996[(29)] = inst_11885__$1);
(statearr_11996[(10)] = inst_11896);
(statearr_11996[(20)] = inst_11895);
(statearr_11996[(21)] = inst_11893);
(statearr_11996[(12)] = inst_11894);
return statearr_11996;
})();var statearr_11997_12066 = state_11953__$1;(statearr_11997_12066[(2)] = null);
(statearr_11997_12066[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (28)))
{var inst_11912 = (state_11953[(25)]);var inst_11893 = (state_11953[(21)]);var inst_11912__$1 = cljs.core.seq.call(null,inst_11893);var state_11953__$1 = (function (){var statearr_11998 = state_11953;(statearr_11998[(25)] = inst_11912__$1);
return statearr_11998;
})();if(inst_11912__$1)
{var statearr_11999_12067 = state_11953__$1;(statearr_11999_12067[(1)] = (33));
} else
{var statearr_12000_12068 = state_11953__$1;(statearr_12000_12068[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (25)))
{var inst_11896 = (state_11953[(10)]);var inst_11895 = (state_11953[(20)]);var inst_11898 = (inst_11896 < inst_11895);var inst_11899 = inst_11898;var state_11953__$1 = state_11953;if(cljs.core.truth_(inst_11899))
{var statearr_12001_12069 = state_11953__$1;(statearr_12001_12069[(1)] = (27));
} else
{var statearr_12002_12070 = state_11953__$1;(statearr_12002_12070[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (34)))
{var state_11953__$1 = state_11953;var statearr_12003_12071 = state_11953__$1;(statearr_12003_12071[(2)] = null);
(statearr_12003_12071[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (17)))
{var state_11953__$1 = state_11953;var statearr_12004_12072 = state_11953__$1;(statearr_12004_12072[(2)] = null);
(statearr_12004_12072[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (3)))
{var inst_11951 = (state_11953[(2)]);var state_11953__$1 = state_11953;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11953__$1,inst_11951);
} else
{if((state_val_11954 === (12)))
{var inst_11880 = (state_11953[(2)]);var state_11953__$1 = state_11953;var statearr_12005_12073 = state_11953__$1;(statearr_12005_12073[(2)] = inst_11880);
(statearr_12005_12073[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (2)))
{var state_11953__$1 = state_11953;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11953__$1,(4),ch);
} else
{if((state_val_11954 === (23)))
{var state_11953__$1 = state_11953;var statearr_12006_12074 = state_11953__$1;(statearr_12006_12074[(2)] = null);
(statearr_12006_12074[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (35)))
{var inst_11935 = (state_11953[(2)]);var state_11953__$1 = state_11953;var statearr_12007_12075 = state_11953__$1;(statearr_12007_12075[(2)] = inst_11935);
(statearr_12007_12075[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (19)))
{var inst_11854 = (state_11953[(7)]);var inst_11858 = cljs.core.chunk_first.call(null,inst_11854);var inst_11859 = cljs.core.chunk_rest.call(null,inst_11854);var inst_11860 = cljs.core.count.call(null,inst_11858);var inst_11834 = inst_11859;var inst_11835 = inst_11858;var inst_11836 = inst_11860;var inst_11837 = (0);var state_11953__$1 = (function (){var statearr_12008 = state_11953;(statearr_12008[(13)] = inst_11834);
(statearr_12008[(14)] = inst_11837);
(statearr_12008[(16)] = inst_11835);
(statearr_12008[(17)] = inst_11836);
return statearr_12008;
})();var statearr_12009_12076 = state_11953__$1;(statearr_12009_12076[(2)] = null);
(statearr_12009_12076[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (11)))
{var inst_11834 = (state_11953[(13)]);var inst_11854 = (state_11953[(7)]);var inst_11854__$1 = cljs.core.seq.call(null,inst_11834);var state_11953__$1 = (function (){var statearr_12010 = state_11953;(statearr_12010[(7)] = inst_11854__$1);
return statearr_12010;
})();if(inst_11854__$1)
{var statearr_12011_12077 = state_11953__$1;(statearr_12011_12077[(1)] = (16));
} else
{var statearr_12012_12078 = state_11953__$1;(statearr_12012_12078[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (9)))
{var inst_11882 = (state_11953[(2)]);var state_11953__$1 = state_11953;var statearr_12013_12079 = state_11953__$1;(statearr_12013_12079[(2)] = inst_11882);
(statearr_12013_12079[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (5)))
{var inst_11832 = cljs.core.deref.call(null,cs);var inst_11833 = cljs.core.seq.call(null,inst_11832);var inst_11834 = inst_11833;var inst_11835 = null;var inst_11836 = (0);var inst_11837 = (0);var state_11953__$1 = (function (){var statearr_12014 = state_11953;(statearr_12014[(13)] = inst_11834);
(statearr_12014[(14)] = inst_11837);
(statearr_12014[(16)] = inst_11835);
(statearr_12014[(17)] = inst_11836);
return statearr_12014;
})();var statearr_12015_12080 = state_11953__$1;(statearr_12015_12080[(2)] = null);
(statearr_12015_12080[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (14)))
{var state_11953__$1 = state_11953;var statearr_12016_12081 = state_11953__$1;(statearr_12016_12081[(2)] = null);
(statearr_12016_12081[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (45)))
{var inst_11943 = (state_11953[(2)]);var state_11953__$1 = state_11953;var statearr_12017_12082 = state_11953__$1;(statearr_12017_12082[(2)] = inst_11943);
(statearr_12017_12082[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (26)))
{var inst_11885 = (state_11953[(29)]);var inst_11939 = (state_11953[(2)]);var inst_11940 = cljs.core.seq.call(null,inst_11885);var state_11953__$1 = (function (){var statearr_12018 = state_11953;(statearr_12018[(31)] = inst_11939);
return statearr_12018;
})();if(inst_11940)
{var statearr_12019_12083 = state_11953__$1;(statearr_12019_12083[(1)] = (42));
} else
{var statearr_12020_12084 = state_11953__$1;(statearr_12020_12084[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (16)))
{var inst_11854 = (state_11953[(7)]);var inst_11856 = cljs.core.chunked_seq_QMARK_.call(null,inst_11854);var state_11953__$1 = state_11953;if(inst_11856)
{var statearr_12021_12085 = state_11953__$1;(statearr_12021_12085[(1)] = (19));
} else
{var statearr_12022_12086 = state_11953__$1;(statearr_12022_12086[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (38)))
{var inst_11932 = (state_11953[(2)]);var state_11953__$1 = state_11953;var statearr_12023_12087 = state_11953__$1;(statearr_12023_12087[(2)] = inst_11932);
(statearr_12023_12087[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (30)))
{var state_11953__$1 = state_11953;var statearr_12024_12088 = state_11953__$1;(statearr_12024_12088[(2)] = null);
(statearr_12024_12088[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (10)))
{var inst_11837 = (state_11953[(14)]);var inst_11835 = (state_11953[(16)]);var inst_11843 = cljs.core._nth.call(null,inst_11835,inst_11837);var inst_11844 = cljs.core.nth.call(null,inst_11843,(0),null);var inst_11845 = cljs.core.nth.call(null,inst_11843,(1),null);var state_11953__$1 = (function (){var statearr_12025 = state_11953;(statearr_12025[(26)] = inst_11844);
return statearr_12025;
})();if(cljs.core.truth_(inst_11845))
{var statearr_12026_12089 = state_11953__$1;(statearr_12026_12089[(1)] = (13));
} else
{var statearr_12027_12090 = state_11953__$1;(statearr_12027_12090[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (18)))
{var inst_11878 = (state_11953[(2)]);var state_11953__$1 = state_11953;var statearr_12028_12091 = state_11953__$1;(statearr_12028_12091[(2)] = inst_11878);
(statearr_12028_12091[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (42)))
{var state_11953__$1 = state_11953;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11953__$1,(45),dchan);
} else
{if((state_val_11954 === (37)))
{var inst_11912 = (state_11953[(25)]);var inst_11825 = (state_11953[(9)]);var inst_11921 = (state_11953[(23)]);var inst_11921__$1 = cljs.core.first.call(null,inst_11912);var inst_11922 = cljs.core.async.put_BANG_.call(null,inst_11921__$1,inst_11825,done);var state_11953__$1 = (function (){var statearr_12029 = state_11953;(statearr_12029[(23)] = inst_11921__$1);
return statearr_12029;
})();if(cljs.core.truth_(inst_11922))
{var statearr_12030_12092 = state_11953__$1;(statearr_12030_12092[(1)] = (39));
} else
{var statearr_12031_12093 = state_11953__$1;(statearr_12031_12093[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11954 === (8)))
{var inst_11837 = (state_11953[(14)]);var inst_11836 = (state_11953[(17)]);var inst_11839 = (inst_11837 < inst_11836);var inst_11840 = inst_11839;var state_11953__$1 = state_11953;if(cljs.core.truth_(inst_11840))
{var statearr_12032_12094 = state_11953__$1;(statearr_12032_12094[(1)] = (10));
} else
{var statearr_12033_12095 = state_11953__$1;(statearr_12033_12095[(1)] = (11));
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
});})(c__6360__auto___12041,cs,m,dchan,dctr,done))
;return ((function (switch__6345__auto__,c__6360__auto___12041,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6346__auto__ = null;
var state_machine__6346__auto____0 = (function (){var statearr_12037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12037[(0)] = state_machine__6346__auto__);
(statearr_12037[(1)] = (1));
return statearr_12037;
});
var state_machine__6346__auto____1 = (function (state_11953){while(true){
var ret_value__6347__auto__ = (function (){try{while(true){
var result__6348__auto__ = switch__6345__auto__.call(null,state_11953);if(cljs.core.keyword_identical_QMARK_.call(null,result__6348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6348__auto__;
}
break;
}
}catch (e12038){if((e12038 instanceof Object))
{var ex__6349__auto__ = e12038;var statearr_12039_12096 = state_11953;(statearr_12039_12096[(5)] = ex__6349__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11953);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12038;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12097 = state_11953;
state_11953 = G__12097;
continue;
}
} else
{return ret_value__6347__auto__;
}
break;
}
});
state_machine__6346__auto__ = function(state_11953){
switch(arguments.length){
case 0:
return state_machine__6346__auto____0.call(this);
case 1:
return state_machine__6346__auto____1.call(this,state_11953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6346__auto____0;
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6346__auto____1;
return state_machine__6346__auto__;
})()
;})(switch__6345__auto__,c__6360__auto___12041,cs,m,dchan,dctr,done))
})();var state__6362__auto__ = (function (){var statearr_12040 = f__6361__auto__.call(null);(statearr_12040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6360__auto___12041);
return statearr_12040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6362__auto__);
});})(c__6360__auto___12041,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj12099 = {};return obj12099;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t12219 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12219 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12220){
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
this.meta12220 = meta12220;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12219.cljs$lang$type = true;
cljs.core.async.t12219.cljs$lang$ctorStr = "cljs.core.async/t12219";
cljs.core.async.t12219.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12219");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12219.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12219.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12219.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12219.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12219.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12219.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12219.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12219.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12219.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12221){var self__ = this;
var _12221__$1 = this;return self__.meta12220;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12221,meta12220__$1){var self__ = this;
var _12221__$1 = this;return (new cljs.core.async.t12219(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12220__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12219 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12219(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12220){return (new cljs.core.async.t12219(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12220));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12219(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6360__auto___12338 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6360__auto___12338,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6361__auto__ = (function (){var switch__6345__auto__ = ((function (c__6360__auto___12338,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12291){var state_val_12292 = (state_12291[(1)]);if((state_val_12292 === (7)))
{var inst_12235 = (state_12291[(7)]);var inst_12240 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12235);var state_12291__$1 = state_12291;var statearr_12293_12339 = state_12291__$1;(statearr_12293_12339[(2)] = inst_12240);
(statearr_12293_12339[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (20)))
{var inst_12250 = (state_12291[(8)]);var state_12291__$1 = state_12291;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12291__$1,(23),out,inst_12250);
} else
{if((state_val_12292 === (1)))
{var inst_12225 = (state_12291[(9)]);var inst_12225__$1 = calc_state.call(null);var inst_12226 = cljs.core.seq_QMARK_.call(null,inst_12225__$1);var state_12291__$1 = (function (){var statearr_12294 = state_12291;(statearr_12294[(9)] = inst_12225__$1);
return statearr_12294;
})();if(inst_12226)
{var statearr_12295_12340 = state_12291__$1;(statearr_12295_12340[(1)] = (2));
} else
{var statearr_12296_12341 = state_12291__$1;(statearr_12296_12341[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (24)))
{var inst_12243 = (state_12291[(10)]);var inst_12235 = inst_12243;var state_12291__$1 = (function (){var statearr_12297 = state_12291;(statearr_12297[(7)] = inst_12235);
return statearr_12297;
})();var statearr_12298_12342 = state_12291__$1;(statearr_12298_12342[(2)] = null);
(statearr_12298_12342[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (4)))
{var inst_12225 = (state_12291[(9)]);var inst_12231 = (state_12291[(2)]);var inst_12232 = cljs.core.get.call(null,inst_12231,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12233 = cljs.core.get.call(null,inst_12231,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12234 = cljs.core.get.call(null,inst_12231,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12235 = inst_12225;var state_12291__$1 = (function (){var statearr_12299 = state_12291;(statearr_12299[(11)] = inst_12233);
(statearr_12299[(7)] = inst_12235);
(statearr_12299[(12)] = inst_12232);
(statearr_12299[(13)] = inst_12234);
return statearr_12299;
})();var statearr_12300_12343 = state_12291__$1;(statearr_12300_12343[(2)] = null);
(statearr_12300_12343[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (15)))
{var state_12291__$1 = state_12291;var statearr_12301_12344 = state_12291__$1;(statearr_12301_12344[(2)] = null);
(statearr_12301_12344[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (21)))
{var inst_12243 = (state_12291[(10)]);var inst_12235 = inst_12243;var state_12291__$1 = (function (){var statearr_12302 = state_12291;(statearr_12302[(7)] = inst_12235);
return statearr_12302;
})();var statearr_12303_12345 = state_12291__$1;(statearr_12303_12345[(2)] = null);
(statearr_12303_12345[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (13)))
{var inst_12287 = (state_12291[(2)]);var state_12291__$1 = state_12291;var statearr_12304_12346 = state_12291__$1;(statearr_12304_12346[(2)] = inst_12287);
(statearr_12304_12346[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (22)))
{var inst_12285 = (state_12291[(2)]);var state_12291__$1 = state_12291;var statearr_12305_12347 = state_12291__$1;(statearr_12305_12347[(2)] = inst_12285);
(statearr_12305_12347[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (6)))
{var inst_12289 = (state_12291[(2)]);var state_12291__$1 = state_12291;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12291__$1,inst_12289);
} else
{if((state_val_12292 === (25)))
{var state_12291__$1 = state_12291;var statearr_12306_12348 = state_12291__$1;(statearr_12306_12348[(2)] = null);
(statearr_12306_12348[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (17)))
{var inst_12265 = (state_12291[(14)]);var state_12291__$1 = state_12291;var statearr_12307_12349 = state_12291__$1;(statearr_12307_12349[(2)] = inst_12265);
(statearr_12307_12349[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (3)))
{var inst_12225 = (state_12291[(9)]);var state_12291__$1 = state_12291;var statearr_12308_12350 = state_12291__$1;(statearr_12308_12350[(2)] = inst_12225);
(statearr_12308_12350[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (12)))
{var inst_12251 = (state_12291[(15)]);var inst_12246 = (state_12291[(16)]);var inst_12265 = (state_12291[(14)]);var inst_12265__$1 = inst_12246.call(null,inst_12251);var state_12291__$1 = (function (){var statearr_12309 = state_12291;(statearr_12309[(14)] = inst_12265__$1);
return statearr_12309;
})();if(cljs.core.truth_(inst_12265__$1))
{var statearr_12310_12351 = state_12291__$1;(statearr_12310_12351[(1)] = (17));
} else
{var statearr_12311_12352 = state_12291__$1;(statearr_12311_12352[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (2)))
{var inst_12225 = (state_12291[(9)]);var inst_12228 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12225);var state_12291__$1 = state_12291;var statearr_12312_12353 = state_12291__$1;(statearr_12312_12353[(2)] = inst_12228);
(statearr_12312_12353[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (23)))
{var inst_12276 = (state_12291[(2)]);var state_12291__$1 = state_12291;if(cljs.core.truth_(inst_12276))
{var statearr_12313_12354 = state_12291__$1;(statearr_12313_12354[(1)] = (24));
} else
{var statearr_12314_12355 = state_12291__$1;(statearr_12314_12355[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (19)))
{var inst_12273 = (state_12291[(2)]);var state_12291__$1 = state_12291;if(cljs.core.truth_(inst_12273))
{var statearr_12315_12356 = state_12291__$1;(statearr_12315_12356[(1)] = (20));
} else
{var statearr_12316_12357 = state_12291__$1;(statearr_12316_12357[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (11)))
{var inst_12250 = (state_12291[(8)]);var inst_12256 = (inst_12250 == null);var state_12291__$1 = state_12291;if(cljs.core.truth_(inst_12256))
{var statearr_12317_12358 = state_12291__$1;(statearr_12317_12358[(1)] = (14));
} else
{var statearr_12318_12359 = state_12291__$1;(statearr_12318_12359[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (9)))
{var inst_12243 = (state_12291[(10)]);var inst_12243__$1 = (state_12291[(2)]);var inst_12244 = cljs.core.get.call(null,inst_12243__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12245 = cljs.core.get.call(null,inst_12243__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12246 = cljs.core.get.call(null,inst_12243__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12291__$1 = (function (){var statearr_12319 = state_12291;(statearr_12319[(16)] = inst_12246);
(statearr_12319[(10)] = inst_12243__$1);
(statearr_12319[(17)] = inst_12245);
return statearr_12319;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12291__$1,(10),inst_12244);
} else
{if((state_val_12292 === (5)))
{var inst_12235 = (state_12291[(7)]);var inst_12238 = cljs.core.seq_QMARK_.call(null,inst_12235);var state_12291__$1 = state_12291;if(inst_12238)
{var statearr_12320_12360 = state_12291__$1;(statearr_12320_12360[(1)] = (7));
} else
{var statearr_12321_12361 = state_12291__$1;(statearr_12321_12361[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (14)))
{var inst_12251 = (state_12291[(15)]);var inst_12258 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12251);var state_12291__$1 = state_12291;var statearr_12322_12362 = state_12291__$1;(statearr_12322_12362[(2)] = inst_12258);
(statearr_12322_12362[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (26)))
{var inst_12281 = (state_12291[(2)]);var state_12291__$1 = state_12291;var statearr_12323_12363 = state_12291__$1;(statearr_12323_12363[(2)] = inst_12281);
(statearr_12323_12363[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (16)))
{var inst_12261 = (state_12291[(2)]);var inst_12262 = calc_state.call(null);var inst_12235 = inst_12262;var state_12291__$1 = (function (){var statearr_12324 = state_12291;(statearr_12324[(18)] = inst_12261);
(statearr_12324[(7)] = inst_12235);
return statearr_12324;
})();var statearr_12325_12364 = state_12291__$1;(statearr_12325_12364[(2)] = null);
(statearr_12325_12364[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (10)))
{var inst_12251 = (state_12291[(15)]);var inst_12250 = (state_12291[(8)]);var inst_12249 = (state_12291[(2)]);var inst_12250__$1 = cljs.core.nth.call(null,inst_12249,(0),null);var inst_12251__$1 = cljs.core.nth.call(null,inst_12249,(1),null);var inst_12252 = (inst_12250__$1 == null);var inst_12253 = cljs.core._EQ_.call(null,inst_12251__$1,change);var inst_12254 = (inst_12252) || (inst_12253);var state_12291__$1 = (function (){var statearr_12326 = state_12291;(statearr_12326[(15)] = inst_12251__$1);
(statearr_12326[(8)] = inst_12250__$1);
return statearr_12326;
})();if(cljs.core.truth_(inst_12254))
{var statearr_12327_12365 = state_12291__$1;(statearr_12327_12365[(1)] = (11));
} else
{var statearr_12328_12366 = state_12291__$1;(statearr_12328_12366[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (18)))
{var inst_12251 = (state_12291[(15)]);var inst_12246 = (state_12291[(16)]);var inst_12245 = (state_12291[(17)]);var inst_12268 = cljs.core.empty_QMARK_.call(null,inst_12246);var inst_12269 = inst_12245.call(null,inst_12251);var inst_12270 = cljs.core.not.call(null,inst_12269);var inst_12271 = (inst_12268) && (inst_12270);var state_12291__$1 = state_12291;var statearr_12329_12367 = state_12291__$1;(statearr_12329_12367[(2)] = inst_12271);
(statearr_12329_12367[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12292 === (8)))
{var inst_12235 = (state_12291[(7)]);var state_12291__$1 = state_12291;var statearr_12330_12368 = state_12291__$1;(statearr_12330_12368[(2)] = inst_12235);
(statearr_12330_12368[(1)] = (9));
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
});})(c__6360__auto___12338,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6345__auto__,c__6360__auto___12338,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6346__auto__ = null;
var state_machine__6346__auto____0 = (function (){var statearr_12334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12334[(0)] = state_machine__6346__auto__);
(statearr_12334[(1)] = (1));
return statearr_12334;
});
var state_machine__6346__auto____1 = (function (state_12291){while(true){
var ret_value__6347__auto__ = (function (){try{while(true){
var result__6348__auto__ = switch__6345__auto__.call(null,state_12291);if(cljs.core.keyword_identical_QMARK_.call(null,result__6348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6348__auto__;
}
break;
}
}catch (e12335){if((e12335 instanceof Object))
{var ex__6349__auto__ = e12335;var statearr_12336_12369 = state_12291;(statearr_12336_12369[(5)] = ex__6349__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12291);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12335;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12370 = state_12291;
state_12291 = G__12370;
continue;
}
} else
{return ret_value__6347__auto__;
}
break;
}
});
state_machine__6346__auto__ = function(state_12291){
switch(arguments.length){
case 0:
return state_machine__6346__auto____0.call(this);
case 1:
return state_machine__6346__auto____1.call(this,state_12291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6346__auto____0;
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6346__auto____1;
return state_machine__6346__auto__;
})()
;})(switch__6345__auto__,c__6360__auto___12338,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6362__auto__ = (function (){var statearr_12337 = f__6361__auto__.call(null);(statearr_12337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6360__auto___12338);
return statearr_12337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6362__auto__);
});})(c__6360__auto___12338,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj12372 = {};return obj12372;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
return (function (topic){var or__3543__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3543__auto__,mults){
return (function (p1__12373_SHARP_){if(cljs.core.truth_(p1__12373_SHARP_.call(null,topic)))
{return p1__12373_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12373_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12496 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12496 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12497){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12497 = meta12497;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12496.cljs$lang$type = true;
cljs.core.async.t12496.cljs$lang$ctorStr = "cljs.core.async/t12496";
cljs.core.async.t12496.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12496");
});})(mults,ensure_mult))
;
cljs.core.async.t12496.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12496.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12496.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12496.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12496.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12496.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12496.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12496.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12498){var self__ = this;
var _12498__$1 = this;return self__.meta12497;
});})(mults,ensure_mult))
;
cljs.core.async.t12496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12498,meta12497__$1){var self__ = this;
var _12498__$1 = this;return (new cljs.core.async.t12496(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12497__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12496 = ((function (mults,ensure_mult){
return (function __GT_t12496(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12497){return (new cljs.core.async.t12496(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12497));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12496(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6360__auto___12618 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6360__auto___12618,mults,ensure_mult,p){
return (function (){var f__6361__auto__ = (function (){var switch__6345__auto__ = ((function (c__6360__auto___12618,mults,ensure_mult,p){
return (function (state_12570){var state_val_12571 = (state_12570[(1)]);if((state_val_12571 === (7)))
{var inst_12566 = (state_12570[(2)]);var state_12570__$1 = state_12570;var statearr_12572_12619 = state_12570__$1;(statearr_12572_12619[(2)] = inst_12566);
(statearr_12572_12619[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (20)))
{var state_12570__$1 = state_12570;var statearr_12573_12620 = state_12570__$1;(statearr_12573_12620[(2)] = null);
(statearr_12573_12620[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (1)))
{var state_12570__$1 = state_12570;var statearr_12574_12621 = state_12570__$1;(statearr_12574_12621[(2)] = null);
(statearr_12574_12621[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (24)))
{var inst_12549 = (state_12570[(7)]);var inst_12558 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12549);var state_12570__$1 = state_12570;var statearr_12575_12622 = state_12570__$1;(statearr_12575_12622[(2)] = inst_12558);
(statearr_12575_12622[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (4)))
{var inst_12501 = (state_12570[(8)]);var inst_12501__$1 = (state_12570[(2)]);var inst_12502 = (inst_12501__$1 == null);var state_12570__$1 = (function (){var statearr_12576 = state_12570;(statearr_12576[(8)] = inst_12501__$1);
return statearr_12576;
})();if(cljs.core.truth_(inst_12502))
{var statearr_12577_12623 = state_12570__$1;(statearr_12577_12623[(1)] = (5));
} else
{var statearr_12578_12624 = state_12570__$1;(statearr_12578_12624[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (15)))
{var inst_12543 = (state_12570[(2)]);var state_12570__$1 = state_12570;var statearr_12579_12625 = state_12570__$1;(statearr_12579_12625[(2)] = inst_12543);
(statearr_12579_12625[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (21)))
{var inst_12563 = (state_12570[(2)]);var state_12570__$1 = (function (){var statearr_12580 = state_12570;(statearr_12580[(9)] = inst_12563);
return statearr_12580;
})();var statearr_12581_12626 = state_12570__$1;(statearr_12581_12626[(2)] = null);
(statearr_12581_12626[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (13)))
{var inst_12525 = (state_12570[(10)]);var inst_12527 = cljs.core.chunked_seq_QMARK_.call(null,inst_12525);var state_12570__$1 = state_12570;if(inst_12527)
{var statearr_12582_12627 = state_12570__$1;(statearr_12582_12627[(1)] = (16));
} else
{var statearr_12583_12628 = state_12570__$1;(statearr_12583_12628[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (22)))
{var inst_12555 = (state_12570[(2)]);var state_12570__$1 = state_12570;if(cljs.core.truth_(inst_12555))
{var statearr_12584_12629 = state_12570__$1;(statearr_12584_12629[(1)] = (23));
} else
{var statearr_12585_12630 = state_12570__$1;(statearr_12585_12630[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (6)))
{var inst_12551 = (state_12570[(11)]);var inst_12501 = (state_12570[(8)]);var inst_12549 = (state_12570[(7)]);var inst_12549__$1 = topic_fn.call(null,inst_12501);var inst_12550 = cljs.core.deref.call(null,mults);var inst_12551__$1 = cljs.core.get.call(null,inst_12550,inst_12549__$1);var state_12570__$1 = (function (){var statearr_12586 = state_12570;(statearr_12586[(11)] = inst_12551__$1);
(statearr_12586[(7)] = inst_12549__$1);
return statearr_12586;
})();if(cljs.core.truth_(inst_12551__$1))
{var statearr_12587_12631 = state_12570__$1;(statearr_12587_12631[(1)] = (19));
} else
{var statearr_12588_12632 = state_12570__$1;(statearr_12588_12632[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (25)))
{var inst_12560 = (state_12570[(2)]);var state_12570__$1 = state_12570;var statearr_12589_12633 = state_12570__$1;(statearr_12589_12633[(2)] = inst_12560);
(statearr_12589_12633[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (17)))
{var inst_12525 = (state_12570[(10)]);var inst_12534 = cljs.core.first.call(null,inst_12525);var inst_12535 = cljs.core.async.muxch_STAR_.call(null,inst_12534);var inst_12536 = cljs.core.async.close_BANG_.call(null,inst_12535);var inst_12537 = cljs.core.next.call(null,inst_12525);var inst_12511 = inst_12537;var inst_12512 = null;var inst_12513 = (0);var inst_12514 = (0);var state_12570__$1 = (function (){var statearr_12590 = state_12570;(statearr_12590[(12)] = inst_12514);
(statearr_12590[(13)] = inst_12511);
(statearr_12590[(14)] = inst_12536);
(statearr_12590[(15)] = inst_12513);
(statearr_12590[(16)] = inst_12512);
return statearr_12590;
})();var statearr_12591_12634 = state_12570__$1;(statearr_12591_12634[(2)] = null);
(statearr_12591_12634[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (3)))
{var inst_12568 = (state_12570[(2)]);var state_12570__$1 = state_12570;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12570__$1,inst_12568);
} else
{if((state_val_12571 === (12)))
{var inst_12545 = (state_12570[(2)]);var state_12570__$1 = state_12570;var statearr_12592_12635 = state_12570__$1;(statearr_12592_12635[(2)] = inst_12545);
(statearr_12592_12635[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (2)))
{var state_12570__$1 = state_12570;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12570__$1,(4),ch);
} else
{if((state_val_12571 === (23)))
{var state_12570__$1 = state_12570;var statearr_12593_12636 = state_12570__$1;(statearr_12593_12636[(2)] = null);
(statearr_12593_12636[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (19)))
{var inst_12551 = (state_12570[(11)]);var inst_12501 = (state_12570[(8)]);var inst_12553 = cljs.core.async.muxch_STAR_.call(null,inst_12551);var state_12570__$1 = state_12570;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12570__$1,(22),inst_12553,inst_12501);
} else
{if((state_val_12571 === (11)))
{var inst_12511 = (state_12570[(13)]);var inst_12525 = (state_12570[(10)]);var inst_12525__$1 = cljs.core.seq.call(null,inst_12511);var state_12570__$1 = (function (){var statearr_12594 = state_12570;(statearr_12594[(10)] = inst_12525__$1);
return statearr_12594;
})();if(inst_12525__$1)
{var statearr_12595_12637 = state_12570__$1;(statearr_12595_12637[(1)] = (13));
} else
{var statearr_12596_12638 = state_12570__$1;(statearr_12596_12638[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (9)))
{var inst_12547 = (state_12570[(2)]);var state_12570__$1 = state_12570;var statearr_12597_12639 = state_12570__$1;(statearr_12597_12639[(2)] = inst_12547);
(statearr_12597_12639[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (5)))
{var inst_12508 = cljs.core.deref.call(null,mults);var inst_12509 = cljs.core.vals.call(null,inst_12508);var inst_12510 = cljs.core.seq.call(null,inst_12509);var inst_12511 = inst_12510;var inst_12512 = null;var inst_12513 = (0);var inst_12514 = (0);var state_12570__$1 = (function (){var statearr_12598 = state_12570;(statearr_12598[(12)] = inst_12514);
(statearr_12598[(13)] = inst_12511);
(statearr_12598[(15)] = inst_12513);
(statearr_12598[(16)] = inst_12512);
return statearr_12598;
})();var statearr_12599_12640 = state_12570__$1;(statearr_12599_12640[(2)] = null);
(statearr_12599_12640[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (14)))
{var state_12570__$1 = state_12570;var statearr_12603_12641 = state_12570__$1;(statearr_12603_12641[(2)] = null);
(statearr_12603_12641[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (16)))
{var inst_12525 = (state_12570[(10)]);var inst_12529 = cljs.core.chunk_first.call(null,inst_12525);var inst_12530 = cljs.core.chunk_rest.call(null,inst_12525);var inst_12531 = cljs.core.count.call(null,inst_12529);var inst_12511 = inst_12530;var inst_12512 = inst_12529;var inst_12513 = inst_12531;var inst_12514 = (0);var state_12570__$1 = (function (){var statearr_12604 = state_12570;(statearr_12604[(12)] = inst_12514);
(statearr_12604[(13)] = inst_12511);
(statearr_12604[(15)] = inst_12513);
(statearr_12604[(16)] = inst_12512);
return statearr_12604;
})();var statearr_12605_12642 = state_12570__$1;(statearr_12605_12642[(2)] = null);
(statearr_12605_12642[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (10)))
{var inst_12514 = (state_12570[(12)]);var inst_12511 = (state_12570[(13)]);var inst_12513 = (state_12570[(15)]);var inst_12512 = (state_12570[(16)]);var inst_12519 = cljs.core._nth.call(null,inst_12512,inst_12514);var inst_12520 = cljs.core.async.muxch_STAR_.call(null,inst_12519);var inst_12521 = cljs.core.async.close_BANG_.call(null,inst_12520);var inst_12522 = (inst_12514 + (1));var tmp12600 = inst_12511;var tmp12601 = inst_12513;var tmp12602 = inst_12512;var inst_12511__$1 = tmp12600;var inst_12512__$1 = tmp12602;var inst_12513__$1 = tmp12601;var inst_12514__$1 = inst_12522;var state_12570__$1 = (function (){var statearr_12606 = state_12570;(statearr_12606[(12)] = inst_12514__$1);
(statearr_12606[(13)] = inst_12511__$1);
(statearr_12606[(15)] = inst_12513__$1);
(statearr_12606[(16)] = inst_12512__$1);
(statearr_12606[(17)] = inst_12521);
return statearr_12606;
})();var statearr_12607_12643 = state_12570__$1;(statearr_12607_12643[(2)] = null);
(statearr_12607_12643[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (18)))
{var inst_12540 = (state_12570[(2)]);var state_12570__$1 = state_12570;var statearr_12608_12644 = state_12570__$1;(statearr_12608_12644[(2)] = inst_12540);
(statearr_12608_12644[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (8)))
{var inst_12514 = (state_12570[(12)]);var inst_12513 = (state_12570[(15)]);var inst_12516 = (inst_12514 < inst_12513);var inst_12517 = inst_12516;var state_12570__$1 = state_12570;if(cljs.core.truth_(inst_12517))
{var statearr_12609_12645 = state_12570__$1;(statearr_12609_12645[(1)] = (10));
} else
{var statearr_12610_12646 = state_12570__$1;(statearr_12610_12646[(1)] = (11));
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
});})(c__6360__auto___12618,mults,ensure_mult,p))
;return ((function (switch__6345__auto__,c__6360__auto___12618,mults,ensure_mult,p){
return (function() {
var state_machine__6346__auto__ = null;
var state_machine__6346__auto____0 = (function (){var statearr_12614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12614[(0)] = state_machine__6346__auto__);
(statearr_12614[(1)] = (1));
return statearr_12614;
});
var state_machine__6346__auto____1 = (function (state_12570){while(true){
var ret_value__6347__auto__ = (function (){try{while(true){
var result__6348__auto__ = switch__6345__auto__.call(null,state_12570);if(cljs.core.keyword_identical_QMARK_.call(null,result__6348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6348__auto__;
}
break;
}
}catch (e12615){if((e12615 instanceof Object))
{var ex__6349__auto__ = e12615;var statearr_12616_12647 = state_12570;(statearr_12616_12647[(5)] = ex__6349__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12570);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12615;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12648 = state_12570;
state_12570 = G__12648;
continue;
}
} else
{return ret_value__6347__auto__;
}
break;
}
});
state_machine__6346__auto__ = function(state_12570){
switch(arguments.length){
case 0:
return state_machine__6346__auto____0.call(this);
case 1:
return state_machine__6346__auto____1.call(this,state_12570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6346__auto____0;
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6346__auto____1;
return state_machine__6346__auto__;
})()
;})(switch__6345__auto__,c__6360__auto___12618,mults,ensure_mult,p))
})();var state__6362__auto__ = (function (){var statearr_12617 = f__6361__auto__.call(null);(statearr_12617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6360__auto___12618);
return statearr_12617;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6362__auto__);
});})(c__6360__auto___12618,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6360__auto___12785 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6360__auto___12785,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6361__auto__ = (function (){var switch__6345__auto__ = ((function (c__6360__auto___12785,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12755){var state_val_12756 = (state_12755[(1)]);if((state_val_12756 === (7)))
{var state_12755__$1 = state_12755;var statearr_12757_12786 = state_12755__$1;(statearr_12757_12786[(2)] = null);
(statearr_12757_12786[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12756 === (1)))
{var state_12755__$1 = state_12755;var statearr_12758_12787 = state_12755__$1;(statearr_12758_12787[(2)] = null);
(statearr_12758_12787[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12756 === (4)))
{var inst_12719 = (state_12755[(7)]);var inst_12721 = (inst_12719 < cnt);var state_12755__$1 = state_12755;if(cljs.core.truth_(inst_12721))
{var statearr_12759_12788 = state_12755__$1;(statearr_12759_12788[(1)] = (6));
} else
{var statearr_12760_12789 = state_12755__$1;(statearr_12760_12789[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12756 === (15)))
{var inst_12751 = (state_12755[(2)]);var state_12755__$1 = state_12755;var statearr_12761_12790 = state_12755__$1;(statearr_12761_12790[(2)] = inst_12751);
(statearr_12761_12790[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12756 === (13)))
{var inst_12744 = cljs.core.async.close_BANG_.call(null,out);var state_12755__$1 = state_12755;var statearr_12762_12791 = state_12755__$1;(statearr_12762_12791[(2)] = inst_12744);
(statearr_12762_12791[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12756 === (6)))
{var state_12755__$1 = state_12755;var statearr_12763_12792 = state_12755__$1;(statearr_12763_12792[(2)] = null);
(statearr_12763_12792[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12756 === (3)))
{var inst_12753 = (state_12755[(2)]);var state_12755__$1 = state_12755;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12755__$1,inst_12753);
} else
{if((state_val_12756 === (12)))
{var inst_12741 = (state_12755[(8)]);var inst_12741__$1 = (state_12755[(2)]);var inst_12742 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12741__$1);var state_12755__$1 = (function (){var statearr_12764 = state_12755;(statearr_12764[(8)] = inst_12741__$1);
return statearr_12764;
})();if(cljs.core.truth_(inst_12742))
{var statearr_12765_12793 = state_12755__$1;(statearr_12765_12793[(1)] = (13));
} else
{var statearr_12766_12794 = state_12755__$1;(statearr_12766_12794[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12756 === (2)))
{var inst_12718 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12719 = (0);var state_12755__$1 = (function (){var statearr_12767 = state_12755;(statearr_12767[(9)] = inst_12718);
(statearr_12767[(7)] = inst_12719);
return statearr_12767;
})();var statearr_12768_12795 = state_12755__$1;(statearr_12768_12795[(2)] = null);
(statearr_12768_12795[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12756 === (11)))
{var inst_12719 = (state_12755[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12755,(10),Object,null,(9));var inst_12728 = chs__$1.call(null,inst_12719);var inst_12729 = done.call(null,inst_12719);var inst_12730 = cljs.core.async.take_BANG_.call(null,inst_12728,inst_12729);var state_12755__$1 = state_12755;var statearr_12769_12796 = state_12755__$1;(statearr_12769_12796[(2)] = inst_12730);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12755__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12756 === (9)))
{var inst_12719 = (state_12755[(7)]);var inst_12732 = (state_12755[(2)]);var inst_12733 = (inst_12719 + (1));var inst_12719__$1 = inst_12733;var state_12755__$1 = (function (){var statearr_12770 = state_12755;(statearr_12770[(10)] = inst_12732);
(statearr_12770[(7)] = inst_12719__$1);
return statearr_12770;
})();var statearr_12771_12797 = state_12755__$1;(statearr_12771_12797[(2)] = null);
(statearr_12771_12797[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12756 === (5)))
{var inst_12739 = (state_12755[(2)]);var state_12755__$1 = (function (){var statearr_12772 = state_12755;(statearr_12772[(11)] = inst_12739);
return statearr_12772;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12755__$1,(12),dchan);
} else
{if((state_val_12756 === (14)))
{var inst_12741 = (state_12755[(8)]);var inst_12746 = cljs.core.apply.call(null,f,inst_12741);var state_12755__$1 = state_12755;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12755__$1,(16),out,inst_12746);
} else
{if((state_val_12756 === (16)))
{var inst_12748 = (state_12755[(2)]);var state_12755__$1 = (function (){var statearr_12773 = state_12755;(statearr_12773[(12)] = inst_12748);
return statearr_12773;
})();var statearr_12774_12798 = state_12755__$1;(statearr_12774_12798[(2)] = null);
(statearr_12774_12798[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12756 === (10)))
{var inst_12723 = (state_12755[(2)]);var inst_12724 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12755__$1 = (function (){var statearr_12775 = state_12755;(statearr_12775[(13)] = inst_12723);
return statearr_12775;
})();var statearr_12776_12799 = state_12755__$1;(statearr_12776_12799[(2)] = inst_12724);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12755__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12756 === (8)))
{var inst_12737 = (state_12755[(2)]);var state_12755__$1 = state_12755;var statearr_12777_12800 = state_12755__$1;(statearr_12777_12800[(2)] = inst_12737);
(statearr_12777_12800[(1)] = (5));
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
});})(c__6360__auto___12785,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6345__auto__,c__6360__auto___12785,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6346__auto__ = null;
var state_machine__6346__auto____0 = (function (){var statearr_12781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12781[(0)] = state_machine__6346__auto__);
(statearr_12781[(1)] = (1));
return statearr_12781;
});
var state_machine__6346__auto____1 = (function (state_12755){while(true){
var ret_value__6347__auto__ = (function (){try{while(true){
var result__6348__auto__ = switch__6345__auto__.call(null,state_12755);if(cljs.core.keyword_identical_QMARK_.call(null,result__6348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6348__auto__;
}
break;
}
}catch (e12782){if((e12782 instanceof Object))
{var ex__6349__auto__ = e12782;var statearr_12783_12801 = state_12755;(statearr_12783_12801[(5)] = ex__6349__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12755);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12782;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12802 = state_12755;
state_12755 = G__12802;
continue;
}
} else
{return ret_value__6347__auto__;
}
break;
}
});
state_machine__6346__auto__ = function(state_12755){
switch(arguments.length){
case 0:
return state_machine__6346__auto____0.call(this);
case 1:
return state_machine__6346__auto____1.call(this,state_12755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6346__auto____0;
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6346__auto____1;
return state_machine__6346__auto__;
})()
;})(switch__6345__auto__,c__6360__auto___12785,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6362__auto__ = (function (){var statearr_12784 = f__6361__auto__.call(null);(statearr_12784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6360__auto___12785);
return statearr_12784;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6362__auto__);
});})(c__6360__auto___12785,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6360__auto___12910 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6360__auto___12910,out){
return (function (){var f__6361__auto__ = (function (){var switch__6345__auto__ = ((function (c__6360__auto___12910,out){
return (function (state_12886){var state_val_12887 = (state_12886[(1)]);if((state_val_12887 === (7)))
{var inst_12865 = (state_12886[(7)]);var inst_12866 = (state_12886[(8)]);var inst_12865__$1 = (state_12886[(2)]);var inst_12866__$1 = cljs.core.nth.call(null,inst_12865__$1,(0),null);var inst_12867 = cljs.core.nth.call(null,inst_12865__$1,(1),null);var inst_12868 = (inst_12866__$1 == null);var state_12886__$1 = (function (){var statearr_12888 = state_12886;(statearr_12888[(7)] = inst_12865__$1);
(statearr_12888[(9)] = inst_12867);
(statearr_12888[(8)] = inst_12866__$1);
return statearr_12888;
})();if(cljs.core.truth_(inst_12868))
{var statearr_12889_12911 = state_12886__$1;(statearr_12889_12911[(1)] = (8));
} else
{var statearr_12890_12912 = state_12886__$1;(statearr_12890_12912[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12887 === (1)))
{var inst_12857 = cljs.core.vec.call(null,chs);var inst_12858 = inst_12857;var state_12886__$1 = (function (){var statearr_12891 = state_12886;(statearr_12891[(10)] = inst_12858);
return statearr_12891;
})();var statearr_12892_12913 = state_12886__$1;(statearr_12892_12913[(2)] = null);
(statearr_12892_12913[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12887 === (4)))
{var inst_12858 = (state_12886[(10)]);var state_12886__$1 = state_12886;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12886__$1,(7),inst_12858);
} else
{if((state_val_12887 === (6)))
{var inst_12882 = (state_12886[(2)]);var state_12886__$1 = state_12886;var statearr_12893_12914 = state_12886__$1;(statearr_12893_12914[(2)] = inst_12882);
(statearr_12893_12914[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12887 === (3)))
{var inst_12884 = (state_12886[(2)]);var state_12886__$1 = state_12886;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12886__$1,inst_12884);
} else
{if((state_val_12887 === (2)))
{var inst_12858 = (state_12886[(10)]);var inst_12860 = cljs.core.count.call(null,inst_12858);var inst_12861 = (inst_12860 > (0));var state_12886__$1 = state_12886;if(cljs.core.truth_(inst_12861))
{var statearr_12895_12915 = state_12886__$1;(statearr_12895_12915[(1)] = (4));
} else
{var statearr_12896_12916 = state_12886__$1;(statearr_12896_12916[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12887 === (11)))
{var inst_12858 = (state_12886[(10)]);var inst_12875 = (state_12886[(2)]);var tmp12894 = inst_12858;var inst_12858__$1 = tmp12894;var state_12886__$1 = (function (){var statearr_12897 = state_12886;(statearr_12897[(10)] = inst_12858__$1);
(statearr_12897[(11)] = inst_12875);
return statearr_12897;
})();var statearr_12898_12917 = state_12886__$1;(statearr_12898_12917[(2)] = null);
(statearr_12898_12917[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12887 === (9)))
{var inst_12866 = (state_12886[(8)]);var state_12886__$1 = state_12886;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12886__$1,(11),out,inst_12866);
} else
{if((state_val_12887 === (5)))
{var inst_12880 = cljs.core.async.close_BANG_.call(null,out);var state_12886__$1 = state_12886;var statearr_12899_12918 = state_12886__$1;(statearr_12899_12918[(2)] = inst_12880);
(statearr_12899_12918[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12887 === (10)))
{var inst_12878 = (state_12886[(2)]);var state_12886__$1 = state_12886;var statearr_12900_12919 = state_12886__$1;(statearr_12900_12919[(2)] = inst_12878);
(statearr_12900_12919[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12887 === (8)))
{var inst_12865 = (state_12886[(7)]);var inst_12858 = (state_12886[(10)]);var inst_12867 = (state_12886[(9)]);var inst_12866 = (state_12886[(8)]);var inst_12870 = (function (){var c = inst_12867;var v = inst_12866;var vec__12863 = inst_12865;var cs = inst_12858;return ((function (c,v,vec__12863,cs,inst_12865,inst_12858,inst_12867,inst_12866,state_val_12887,c__6360__auto___12910,out){
return (function (p1__12803_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12803_SHARP_);
});
;})(c,v,vec__12863,cs,inst_12865,inst_12858,inst_12867,inst_12866,state_val_12887,c__6360__auto___12910,out))
})();var inst_12871 = cljs.core.filterv.call(null,inst_12870,inst_12858);var inst_12858__$1 = inst_12871;var state_12886__$1 = (function (){var statearr_12901 = state_12886;(statearr_12901[(10)] = inst_12858__$1);
return statearr_12901;
})();var statearr_12902_12920 = state_12886__$1;(statearr_12902_12920[(2)] = null);
(statearr_12902_12920[(1)] = (2));
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
});})(c__6360__auto___12910,out))
;return ((function (switch__6345__auto__,c__6360__auto___12910,out){
return (function() {
var state_machine__6346__auto__ = null;
var state_machine__6346__auto____0 = (function (){var statearr_12906 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12906[(0)] = state_machine__6346__auto__);
(statearr_12906[(1)] = (1));
return statearr_12906;
});
var state_machine__6346__auto____1 = (function (state_12886){while(true){
var ret_value__6347__auto__ = (function (){try{while(true){
var result__6348__auto__ = switch__6345__auto__.call(null,state_12886);if(cljs.core.keyword_identical_QMARK_.call(null,result__6348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6348__auto__;
}
break;
}
}catch (e12907){if((e12907 instanceof Object))
{var ex__6349__auto__ = e12907;var statearr_12908_12921 = state_12886;(statearr_12908_12921[(5)] = ex__6349__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12886);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12907;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12922 = state_12886;
state_12886 = G__12922;
continue;
}
} else
{return ret_value__6347__auto__;
}
break;
}
});
state_machine__6346__auto__ = function(state_12886){
switch(arguments.length){
case 0:
return state_machine__6346__auto____0.call(this);
case 1:
return state_machine__6346__auto____1.call(this,state_12886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6346__auto____0;
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6346__auto____1;
return state_machine__6346__auto__;
})()
;})(switch__6345__auto__,c__6360__auto___12910,out))
})();var state__6362__auto__ = (function (){var statearr_12909 = f__6361__auto__.call(null);(statearr_12909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6360__auto___12910);
return statearr_12909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6362__auto__);
});})(c__6360__auto___12910,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6360__auto___13015 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6360__auto___13015,out){
return (function (){var f__6361__auto__ = (function (){var switch__6345__auto__ = ((function (c__6360__auto___13015,out){
return (function (state_12992){var state_val_12993 = (state_12992[(1)]);if((state_val_12993 === (7)))
{var inst_12974 = (state_12992[(7)]);var inst_12974__$1 = (state_12992[(2)]);var inst_12975 = (inst_12974__$1 == null);var inst_12976 = cljs.core.not.call(null,inst_12975);var state_12992__$1 = (function (){var statearr_12994 = state_12992;(statearr_12994[(7)] = inst_12974__$1);
return statearr_12994;
})();if(inst_12976)
{var statearr_12995_13016 = state_12992__$1;(statearr_12995_13016[(1)] = (8));
} else
{var statearr_12996_13017 = state_12992__$1;(statearr_12996_13017[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12993 === (1)))
{var inst_12969 = (0);var state_12992__$1 = (function (){var statearr_12997 = state_12992;(statearr_12997[(8)] = inst_12969);
return statearr_12997;
})();var statearr_12998_13018 = state_12992__$1;(statearr_12998_13018[(2)] = null);
(statearr_12998_13018[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12993 === (4)))
{var state_12992__$1 = state_12992;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12992__$1,(7),ch);
} else
{if((state_val_12993 === (6)))
{var inst_12987 = (state_12992[(2)]);var state_12992__$1 = state_12992;var statearr_12999_13019 = state_12992__$1;(statearr_12999_13019[(2)] = inst_12987);
(statearr_12999_13019[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12993 === (3)))
{var inst_12989 = (state_12992[(2)]);var inst_12990 = cljs.core.async.close_BANG_.call(null,out);var state_12992__$1 = (function (){var statearr_13000 = state_12992;(statearr_13000[(9)] = inst_12989);
return statearr_13000;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12992__$1,inst_12990);
} else
{if((state_val_12993 === (2)))
{var inst_12969 = (state_12992[(8)]);var inst_12971 = (inst_12969 < n);var state_12992__$1 = state_12992;if(cljs.core.truth_(inst_12971))
{var statearr_13001_13020 = state_12992__$1;(statearr_13001_13020[(1)] = (4));
} else
{var statearr_13002_13021 = state_12992__$1;(statearr_13002_13021[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12993 === (11)))
{var inst_12969 = (state_12992[(8)]);var inst_12979 = (state_12992[(2)]);var inst_12980 = (inst_12969 + (1));var inst_12969__$1 = inst_12980;var state_12992__$1 = (function (){var statearr_13003 = state_12992;(statearr_13003[(8)] = inst_12969__$1);
(statearr_13003[(10)] = inst_12979);
return statearr_13003;
})();var statearr_13004_13022 = state_12992__$1;(statearr_13004_13022[(2)] = null);
(statearr_13004_13022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12993 === (9)))
{var state_12992__$1 = state_12992;var statearr_13005_13023 = state_12992__$1;(statearr_13005_13023[(2)] = null);
(statearr_13005_13023[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12993 === (5)))
{var state_12992__$1 = state_12992;var statearr_13006_13024 = state_12992__$1;(statearr_13006_13024[(2)] = null);
(statearr_13006_13024[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12993 === (10)))
{var inst_12984 = (state_12992[(2)]);var state_12992__$1 = state_12992;var statearr_13007_13025 = state_12992__$1;(statearr_13007_13025[(2)] = inst_12984);
(statearr_13007_13025[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12993 === (8)))
{var inst_12974 = (state_12992[(7)]);var state_12992__$1 = state_12992;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12992__$1,(11),out,inst_12974);
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
});})(c__6360__auto___13015,out))
;return ((function (switch__6345__auto__,c__6360__auto___13015,out){
return (function() {
var state_machine__6346__auto__ = null;
var state_machine__6346__auto____0 = (function (){var statearr_13011 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13011[(0)] = state_machine__6346__auto__);
(statearr_13011[(1)] = (1));
return statearr_13011;
});
var state_machine__6346__auto____1 = (function (state_12992){while(true){
var ret_value__6347__auto__ = (function (){try{while(true){
var result__6348__auto__ = switch__6345__auto__.call(null,state_12992);if(cljs.core.keyword_identical_QMARK_.call(null,result__6348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6348__auto__;
}
break;
}
}catch (e13012){if((e13012 instanceof Object))
{var ex__6349__auto__ = e13012;var statearr_13013_13026 = state_12992;(statearr_13013_13026[(5)] = ex__6349__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12992);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13012;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13027 = state_12992;
state_12992 = G__13027;
continue;
}
} else
{return ret_value__6347__auto__;
}
break;
}
});
state_machine__6346__auto__ = function(state_12992){
switch(arguments.length){
case 0:
return state_machine__6346__auto____0.call(this);
case 1:
return state_machine__6346__auto____1.call(this,state_12992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6346__auto____0;
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6346__auto____1;
return state_machine__6346__auto__;
})()
;})(switch__6345__auto__,c__6360__auto___13015,out))
})();var state__6362__auto__ = (function (){var statearr_13014 = f__6361__auto__.call(null);(statearr_13014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6360__auto___13015);
return statearr_13014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6362__auto__);
});})(c__6360__auto___13015,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6360__auto___13124 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6360__auto___13124,out){
return (function (){var f__6361__auto__ = (function (){var switch__6345__auto__ = ((function (c__6360__auto___13124,out){
return (function (state_13099){var state_val_13100 = (state_13099[(1)]);if((state_val_13100 === (7)))
{var inst_13094 = (state_13099[(2)]);var state_13099__$1 = state_13099;var statearr_13101_13125 = state_13099__$1;(statearr_13101_13125[(2)] = inst_13094);
(statearr_13101_13125[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (1)))
{var inst_13076 = null;var state_13099__$1 = (function (){var statearr_13102 = state_13099;(statearr_13102[(7)] = inst_13076);
return statearr_13102;
})();var statearr_13103_13126 = state_13099__$1;(statearr_13103_13126[(2)] = null);
(statearr_13103_13126[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (4)))
{var inst_13079 = (state_13099[(8)]);var inst_13079__$1 = (state_13099[(2)]);var inst_13080 = (inst_13079__$1 == null);var inst_13081 = cljs.core.not.call(null,inst_13080);var state_13099__$1 = (function (){var statearr_13104 = state_13099;(statearr_13104[(8)] = inst_13079__$1);
return statearr_13104;
})();if(inst_13081)
{var statearr_13105_13127 = state_13099__$1;(statearr_13105_13127[(1)] = (5));
} else
{var statearr_13106_13128 = state_13099__$1;(statearr_13106_13128[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (6)))
{var state_13099__$1 = state_13099;var statearr_13107_13129 = state_13099__$1;(statearr_13107_13129[(2)] = null);
(statearr_13107_13129[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (3)))
{var inst_13096 = (state_13099[(2)]);var inst_13097 = cljs.core.async.close_BANG_.call(null,out);var state_13099__$1 = (function (){var statearr_13108 = state_13099;(statearr_13108[(9)] = inst_13096);
return statearr_13108;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13099__$1,inst_13097);
} else
{if((state_val_13100 === (2)))
{var state_13099__$1 = state_13099;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13099__$1,(4),ch);
} else
{if((state_val_13100 === (11)))
{var inst_13079 = (state_13099[(8)]);var inst_13088 = (state_13099[(2)]);var inst_13076 = inst_13079;var state_13099__$1 = (function (){var statearr_13109 = state_13099;(statearr_13109[(7)] = inst_13076);
(statearr_13109[(10)] = inst_13088);
return statearr_13109;
})();var statearr_13110_13130 = state_13099__$1;(statearr_13110_13130[(2)] = null);
(statearr_13110_13130[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (9)))
{var inst_13079 = (state_13099[(8)]);var state_13099__$1 = state_13099;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13099__$1,(11),out,inst_13079);
} else
{if((state_val_13100 === (5)))
{var inst_13079 = (state_13099[(8)]);var inst_13076 = (state_13099[(7)]);var inst_13083 = cljs.core._EQ_.call(null,inst_13079,inst_13076);var state_13099__$1 = state_13099;if(inst_13083)
{var statearr_13112_13131 = state_13099__$1;(statearr_13112_13131[(1)] = (8));
} else
{var statearr_13113_13132 = state_13099__$1;(statearr_13113_13132[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (10)))
{var inst_13091 = (state_13099[(2)]);var state_13099__$1 = state_13099;var statearr_13114_13133 = state_13099__$1;(statearr_13114_13133[(2)] = inst_13091);
(statearr_13114_13133[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13100 === (8)))
{var inst_13076 = (state_13099[(7)]);var tmp13111 = inst_13076;var inst_13076__$1 = tmp13111;var state_13099__$1 = (function (){var statearr_13115 = state_13099;(statearr_13115[(7)] = inst_13076__$1);
return statearr_13115;
})();var statearr_13116_13134 = state_13099__$1;(statearr_13116_13134[(2)] = null);
(statearr_13116_13134[(1)] = (2));
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
});})(c__6360__auto___13124,out))
;return ((function (switch__6345__auto__,c__6360__auto___13124,out){
return (function() {
var state_machine__6346__auto__ = null;
var state_machine__6346__auto____0 = (function (){var statearr_13120 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13120[(0)] = state_machine__6346__auto__);
(statearr_13120[(1)] = (1));
return statearr_13120;
});
var state_machine__6346__auto____1 = (function (state_13099){while(true){
var ret_value__6347__auto__ = (function (){try{while(true){
var result__6348__auto__ = switch__6345__auto__.call(null,state_13099);if(cljs.core.keyword_identical_QMARK_.call(null,result__6348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6348__auto__;
}
break;
}
}catch (e13121){if((e13121 instanceof Object))
{var ex__6349__auto__ = e13121;var statearr_13122_13135 = state_13099;(statearr_13122_13135[(5)] = ex__6349__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13099);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13136 = state_13099;
state_13099 = G__13136;
continue;
}
} else
{return ret_value__6347__auto__;
}
break;
}
});
state_machine__6346__auto__ = function(state_13099){
switch(arguments.length){
case 0:
return state_machine__6346__auto____0.call(this);
case 1:
return state_machine__6346__auto____1.call(this,state_13099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6346__auto____0;
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6346__auto____1;
return state_machine__6346__auto__;
})()
;})(switch__6345__auto__,c__6360__auto___13124,out))
})();var state__6362__auto__ = (function (){var statearr_13123 = f__6361__auto__.call(null);(statearr_13123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6360__auto___13124);
return statearr_13123;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6362__auto__);
});})(c__6360__auto___13124,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6360__auto___13271 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6360__auto___13271,out){
return (function (){var f__6361__auto__ = (function (){var switch__6345__auto__ = ((function (c__6360__auto___13271,out){
return (function (state_13241){var state_val_13242 = (state_13241[(1)]);if((state_val_13242 === (7)))
{var inst_13237 = (state_13241[(2)]);var state_13241__$1 = state_13241;var statearr_13243_13272 = state_13241__$1;(statearr_13243_13272[(2)] = inst_13237);
(statearr_13243_13272[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13242 === (1)))
{var inst_13204 = (new Array(n));var inst_13205 = inst_13204;var inst_13206 = (0);var state_13241__$1 = (function (){var statearr_13244 = state_13241;(statearr_13244[(7)] = inst_13206);
(statearr_13244[(8)] = inst_13205);
return statearr_13244;
})();var statearr_13245_13273 = state_13241__$1;(statearr_13245_13273[(2)] = null);
(statearr_13245_13273[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13242 === (4)))
{var inst_13209 = (state_13241[(9)]);var inst_13209__$1 = (state_13241[(2)]);var inst_13210 = (inst_13209__$1 == null);var inst_13211 = cljs.core.not.call(null,inst_13210);var state_13241__$1 = (function (){var statearr_13246 = state_13241;(statearr_13246[(9)] = inst_13209__$1);
return statearr_13246;
})();if(inst_13211)
{var statearr_13247_13274 = state_13241__$1;(statearr_13247_13274[(1)] = (5));
} else
{var statearr_13248_13275 = state_13241__$1;(statearr_13248_13275[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13242 === (15)))
{var inst_13231 = (state_13241[(2)]);var state_13241__$1 = state_13241;var statearr_13249_13276 = state_13241__$1;(statearr_13249_13276[(2)] = inst_13231);
(statearr_13249_13276[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13242 === (13)))
{var state_13241__$1 = state_13241;var statearr_13250_13277 = state_13241__$1;(statearr_13250_13277[(2)] = null);
(statearr_13250_13277[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13242 === (6)))
{var inst_13206 = (state_13241[(7)]);var inst_13227 = (inst_13206 > (0));var state_13241__$1 = state_13241;if(cljs.core.truth_(inst_13227))
{var statearr_13251_13278 = state_13241__$1;(statearr_13251_13278[(1)] = (12));
} else
{var statearr_13252_13279 = state_13241__$1;(statearr_13252_13279[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13242 === (3)))
{var inst_13239 = (state_13241[(2)]);var state_13241__$1 = state_13241;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13241__$1,inst_13239);
} else
{if((state_val_13242 === (12)))
{var inst_13205 = (state_13241[(8)]);var inst_13229 = cljs.core.vec.call(null,inst_13205);var state_13241__$1 = state_13241;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13241__$1,(15),out,inst_13229);
} else
{if((state_val_13242 === (2)))
{var state_13241__$1 = state_13241;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13241__$1,(4),ch);
} else
{if((state_val_13242 === (11)))
{var inst_13221 = (state_13241[(2)]);var inst_13222 = (new Array(n));var inst_13205 = inst_13222;var inst_13206 = (0);var state_13241__$1 = (function (){var statearr_13253 = state_13241;(statearr_13253[(10)] = inst_13221);
(statearr_13253[(7)] = inst_13206);
(statearr_13253[(8)] = inst_13205);
return statearr_13253;
})();var statearr_13254_13280 = state_13241__$1;(statearr_13254_13280[(2)] = null);
(statearr_13254_13280[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13242 === (9)))
{var inst_13205 = (state_13241[(8)]);var inst_13219 = cljs.core.vec.call(null,inst_13205);var state_13241__$1 = state_13241;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13241__$1,(11),out,inst_13219);
} else
{if((state_val_13242 === (5)))
{var inst_13206 = (state_13241[(7)]);var inst_13209 = (state_13241[(9)]);var inst_13205 = (state_13241[(8)]);var inst_13214 = (state_13241[(11)]);var inst_13213 = (inst_13205[inst_13206] = inst_13209);var inst_13214__$1 = (inst_13206 + (1));var inst_13215 = (inst_13214__$1 < n);var state_13241__$1 = (function (){var statearr_13255 = state_13241;(statearr_13255[(12)] = inst_13213);
(statearr_13255[(11)] = inst_13214__$1);
return statearr_13255;
})();if(cljs.core.truth_(inst_13215))
{var statearr_13256_13281 = state_13241__$1;(statearr_13256_13281[(1)] = (8));
} else
{var statearr_13257_13282 = state_13241__$1;(statearr_13257_13282[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13242 === (14)))
{var inst_13234 = (state_13241[(2)]);var inst_13235 = cljs.core.async.close_BANG_.call(null,out);var state_13241__$1 = (function (){var statearr_13259 = state_13241;(statearr_13259[(13)] = inst_13234);
return statearr_13259;
})();var statearr_13260_13283 = state_13241__$1;(statearr_13260_13283[(2)] = inst_13235);
(statearr_13260_13283[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13242 === (10)))
{var inst_13225 = (state_13241[(2)]);var state_13241__$1 = state_13241;var statearr_13261_13284 = state_13241__$1;(statearr_13261_13284[(2)] = inst_13225);
(statearr_13261_13284[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13242 === (8)))
{var inst_13205 = (state_13241[(8)]);var inst_13214 = (state_13241[(11)]);var tmp13258 = inst_13205;var inst_13205__$1 = tmp13258;var inst_13206 = inst_13214;var state_13241__$1 = (function (){var statearr_13262 = state_13241;(statearr_13262[(7)] = inst_13206);
(statearr_13262[(8)] = inst_13205__$1);
return statearr_13262;
})();var statearr_13263_13285 = state_13241__$1;(statearr_13263_13285[(2)] = null);
(statearr_13263_13285[(1)] = (2));
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
});})(c__6360__auto___13271,out))
;return ((function (switch__6345__auto__,c__6360__auto___13271,out){
return (function() {
var state_machine__6346__auto__ = null;
var state_machine__6346__auto____0 = (function (){var statearr_13267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13267[(0)] = state_machine__6346__auto__);
(statearr_13267[(1)] = (1));
return statearr_13267;
});
var state_machine__6346__auto____1 = (function (state_13241){while(true){
var ret_value__6347__auto__ = (function (){try{while(true){
var result__6348__auto__ = switch__6345__auto__.call(null,state_13241);if(cljs.core.keyword_identical_QMARK_.call(null,result__6348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6348__auto__;
}
break;
}
}catch (e13268){if((e13268 instanceof Object))
{var ex__6349__auto__ = e13268;var statearr_13269_13286 = state_13241;(statearr_13269_13286[(5)] = ex__6349__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13241);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13268;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13287 = state_13241;
state_13241 = G__13287;
continue;
}
} else
{return ret_value__6347__auto__;
}
break;
}
});
state_machine__6346__auto__ = function(state_13241){
switch(arguments.length){
case 0:
return state_machine__6346__auto____0.call(this);
case 1:
return state_machine__6346__auto____1.call(this,state_13241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6346__auto____0;
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6346__auto____1;
return state_machine__6346__auto__;
})()
;})(switch__6345__auto__,c__6360__auto___13271,out))
})();var state__6362__auto__ = (function (){var statearr_13270 = f__6361__auto__.call(null);(statearr_13270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6360__auto___13271);
return statearr_13270;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6362__auto__);
});})(c__6360__auto___13271,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6360__auto___13430 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6360__auto___13430,out){
return (function (){var f__6361__auto__ = (function (){var switch__6345__auto__ = ((function (c__6360__auto___13430,out){
return (function (state_13400){var state_val_13401 = (state_13400[(1)]);if((state_val_13401 === (7)))
{var inst_13396 = (state_13400[(2)]);var state_13400__$1 = state_13400;var statearr_13402_13431 = state_13400__$1;(statearr_13402_13431[(2)] = inst_13396);
(statearr_13402_13431[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13401 === (1)))
{var inst_13359 = [];var inst_13360 = inst_13359;var inst_13361 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13400__$1 = (function (){var statearr_13403 = state_13400;(statearr_13403[(7)] = inst_13361);
(statearr_13403[(8)] = inst_13360);
return statearr_13403;
})();var statearr_13404_13432 = state_13400__$1;(statearr_13404_13432[(2)] = null);
(statearr_13404_13432[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13401 === (4)))
{var inst_13364 = (state_13400[(9)]);var inst_13364__$1 = (state_13400[(2)]);var inst_13365 = (inst_13364__$1 == null);var inst_13366 = cljs.core.not.call(null,inst_13365);var state_13400__$1 = (function (){var statearr_13405 = state_13400;(statearr_13405[(9)] = inst_13364__$1);
return statearr_13405;
})();if(inst_13366)
{var statearr_13406_13433 = state_13400__$1;(statearr_13406_13433[(1)] = (5));
} else
{var statearr_13407_13434 = state_13400__$1;(statearr_13407_13434[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13401 === (15)))
{var inst_13390 = (state_13400[(2)]);var state_13400__$1 = state_13400;var statearr_13408_13435 = state_13400__$1;(statearr_13408_13435[(2)] = inst_13390);
(statearr_13408_13435[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13401 === (13)))
{var state_13400__$1 = state_13400;var statearr_13409_13436 = state_13400__$1;(statearr_13409_13436[(2)] = null);
(statearr_13409_13436[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13401 === (6)))
{var inst_13360 = (state_13400[(8)]);var inst_13385 = inst_13360.length;var inst_13386 = (inst_13385 > (0));var state_13400__$1 = state_13400;if(cljs.core.truth_(inst_13386))
{var statearr_13410_13437 = state_13400__$1;(statearr_13410_13437[(1)] = (12));
} else
{var statearr_13411_13438 = state_13400__$1;(statearr_13411_13438[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13401 === (3)))
{var inst_13398 = (state_13400[(2)]);var state_13400__$1 = state_13400;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13400__$1,inst_13398);
} else
{if((state_val_13401 === (12)))
{var inst_13360 = (state_13400[(8)]);var inst_13388 = cljs.core.vec.call(null,inst_13360);var state_13400__$1 = state_13400;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13400__$1,(15),out,inst_13388);
} else
{if((state_val_13401 === (2)))
{var state_13400__$1 = state_13400;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13400__$1,(4),ch);
} else
{if((state_val_13401 === (11)))
{var inst_13368 = (state_13400[(10)]);var inst_13364 = (state_13400[(9)]);var inst_13378 = (state_13400[(2)]);var inst_13379 = [];var inst_13380 = inst_13379.push(inst_13364);var inst_13360 = inst_13379;var inst_13361 = inst_13368;var state_13400__$1 = (function (){var statearr_13412 = state_13400;(statearr_13412[(7)] = inst_13361);
(statearr_13412[(11)] = inst_13378);
(statearr_13412[(8)] = inst_13360);
(statearr_13412[(12)] = inst_13380);
return statearr_13412;
})();var statearr_13413_13439 = state_13400__$1;(statearr_13413_13439[(2)] = null);
(statearr_13413_13439[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13401 === (9)))
{var inst_13360 = (state_13400[(8)]);var inst_13376 = cljs.core.vec.call(null,inst_13360);var state_13400__$1 = state_13400;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13400__$1,(11),out,inst_13376);
} else
{if((state_val_13401 === (5)))
{var inst_13361 = (state_13400[(7)]);var inst_13368 = (state_13400[(10)]);var inst_13364 = (state_13400[(9)]);var inst_13368__$1 = f.call(null,inst_13364);var inst_13369 = cljs.core._EQ_.call(null,inst_13368__$1,inst_13361);var inst_13370 = cljs.core.keyword_identical_QMARK_.call(null,inst_13361,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13371 = (inst_13369) || (inst_13370);var state_13400__$1 = (function (){var statearr_13414 = state_13400;(statearr_13414[(10)] = inst_13368__$1);
return statearr_13414;
})();if(cljs.core.truth_(inst_13371))
{var statearr_13415_13440 = state_13400__$1;(statearr_13415_13440[(1)] = (8));
} else
{var statearr_13416_13441 = state_13400__$1;(statearr_13416_13441[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13401 === (14)))
{var inst_13393 = (state_13400[(2)]);var inst_13394 = cljs.core.async.close_BANG_.call(null,out);var state_13400__$1 = (function (){var statearr_13418 = state_13400;(statearr_13418[(13)] = inst_13393);
return statearr_13418;
})();var statearr_13419_13442 = state_13400__$1;(statearr_13419_13442[(2)] = inst_13394);
(statearr_13419_13442[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13401 === (10)))
{var inst_13383 = (state_13400[(2)]);var state_13400__$1 = state_13400;var statearr_13420_13443 = state_13400__$1;(statearr_13420_13443[(2)] = inst_13383);
(statearr_13420_13443[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13401 === (8)))
{var inst_13368 = (state_13400[(10)]);var inst_13364 = (state_13400[(9)]);var inst_13360 = (state_13400[(8)]);var inst_13373 = inst_13360.push(inst_13364);var tmp13417 = inst_13360;var inst_13360__$1 = tmp13417;var inst_13361 = inst_13368;var state_13400__$1 = (function (){var statearr_13421 = state_13400;(statearr_13421[(7)] = inst_13361);
(statearr_13421[(8)] = inst_13360__$1);
(statearr_13421[(14)] = inst_13373);
return statearr_13421;
})();var statearr_13422_13444 = state_13400__$1;(statearr_13422_13444[(2)] = null);
(statearr_13422_13444[(1)] = (2));
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
});})(c__6360__auto___13430,out))
;return ((function (switch__6345__auto__,c__6360__auto___13430,out){
return (function() {
var state_machine__6346__auto__ = null;
var state_machine__6346__auto____0 = (function (){var statearr_13426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13426[(0)] = state_machine__6346__auto__);
(statearr_13426[(1)] = (1));
return statearr_13426;
});
var state_machine__6346__auto____1 = (function (state_13400){while(true){
var ret_value__6347__auto__ = (function (){try{while(true){
var result__6348__auto__ = switch__6345__auto__.call(null,state_13400);if(cljs.core.keyword_identical_QMARK_.call(null,result__6348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6348__auto__;
}
break;
}
}catch (e13427){if((e13427 instanceof Object))
{var ex__6349__auto__ = e13427;var statearr_13428_13445 = state_13400;(statearr_13428_13445[(5)] = ex__6349__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13400);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13427;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13446 = state_13400;
state_13400 = G__13446;
continue;
}
} else
{return ret_value__6347__auto__;
}
break;
}
});
state_machine__6346__auto__ = function(state_13400){
switch(arguments.length){
case 0:
return state_machine__6346__auto____0.call(this);
case 1:
return state_machine__6346__auto____1.call(this,state_13400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6346__auto____0;
state_machine__6346__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6346__auto____1;
return state_machine__6346__auto__;
})()
;})(switch__6345__auto__,c__6360__auto___13430,out))
})();var state__6362__auto__ = (function (){var statearr_13429 = f__6361__auto__.call(null);(statearr_13429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6360__auto___13430);
return statearr_13429;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6362__auto__);
});})(c__6360__auto___13430,out))
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