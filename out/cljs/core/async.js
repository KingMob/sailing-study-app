// Compiled by ClojureScript 0.0-2268
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10786 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10786 = (function (f,fn_handler,meta10787){
this.f = f;
this.fn_handler = fn_handler;
this.meta10787 = meta10787;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10786.cljs$lang$type = true;
cljs.core.async.t10786.cljs$lang$ctorStr = "cljs.core.async/t10786";
cljs.core.async.t10786.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10786");
});
cljs.core.async.t10786.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10786.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10786.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10788){var self__ = this;
var _10788__$1 = this;return self__.meta10787;
});
cljs.core.async.t10786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10788,meta10787__$1){var self__ = this;
var _10788__$1 = this;return (new cljs.core.async.t10786(self__.f,self__.fn_handler,meta10787__$1));
});
cljs.core.async.__GT_t10786 = (function __GT_t10786(f__$1,fn_handler__$1,meta10787){return (new cljs.core.async.t10786(f__$1,fn_handler__$1,meta10787));
});
}
return (new cljs.core.async.t10786(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10790 = buff;if(G__10790)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__10790.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10790.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10790);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10790);
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
{var val_10791 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10791);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10791,ret){
return (function (){return fn1.call(null,val_10791);
});})(val_10791,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___10792 = n;var x_10793 = (0);while(true){
if((x_10793 < n__4399__auto___10792))
{(a[x_10793] = (0));
{
var G__10794 = (x_10793 + (1));
x_10793 = G__10794;
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
var G__10795 = (i + (1));
i = G__10795;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10799 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10799 = (function (flag,alt_flag,meta10800){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10800 = meta10800;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10799.cljs$lang$type = true;
cljs.core.async.t10799.cljs$lang$ctorStr = "cljs.core.async/t10799";
cljs.core.async.t10799.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10799");
});})(flag))
;
cljs.core.async.t10799.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10799.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10801){var self__ = this;
var _10801__$1 = this;return self__.meta10800;
});})(flag))
;
cljs.core.async.t10799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10801,meta10800__$1){var self__ = this;
var _10801__$1 = this;return (new cljs.core.async.t10799(self__.flag,self__.alt_flag,meta10800__$1));
});})(flag))
;
cljs.core.async.__GT_t10799 = ((function (flag){
return (function __GT_t10799(flag__$1,alt_flag__$1,meta10800){return (new cljs.core.async.t10799(flag__$1,alt_flag__$1,meta10800));
});})(flag))
;
}
return (new cljs.core.async.t10799(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10805 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10805 = (function (cb,flag,alt_handler,meta10806){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10806 = meta10806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10805.cljs$lang$type = true;
cljs.core.async.t10805.cljs$lang$ctorStr = "cljs.core.async/t10805";
cljs.core.async.t10805.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10805");
});
cljs.core.async.t10805.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10805.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10805.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10807){var self__ = this;
var _10807__$1 = this;return self__.meta10806;
});
cljs.core.async.t10805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10807,meta10806__$1){var self__ = this;
var _10807__$1 = this;return (new cljs.core.async.t10805(self__.cb,self__.flag,self__.alt_handler,meta10806__$1));
});
cljs.core.async.__GT_t10805 = (function __GT_t10805(cb__$1,flag__$1,alt_handler__$1,meta10806){return (new cljs.core.async.t10805(cb__$1,flag__$1,alt_handler__$1,meta10806));
});
}
return (new cljs.core.async.t10805(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10808_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10808_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10809_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10809_SHARP_,port], null));
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
var G__10810 = (i + (1));
i = G__10810;
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
var alts_BANG___delegate = function (ports,p__10811){var map__10813 = p__10811;var map__10813__$1 = ((cljs.core.seq_QMARK_.call(null,map__10813))?cljs.core.apply.call(null,cljs.core.hash_map,map__10813):map__10813);var opts = map__10813__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10811 = null;if (arguments.length > 1) {
  p__10811 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10811);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10814){
var ports = cljs.core.first(arglist__10814);
var p__10811 = cljs.core.rest(arglist__10814);
return alts_BANG___delegate(ports,p__10811);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10822 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10822 = (function (ch,f,map_LT_,meta10823){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10823 = meta10823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10822.cljs$lang$type = true;
cljs.core.async.t10822.cljs$lang$ctorStr = "cljs.core.async/t10822";
cljs.core.async.t10822.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10822");
});
cljs.core.async.t10822.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10822.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t10822.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10822.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10825 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10825 = (function (fn1,_,meta10823,ch,f,map_LT_,meta10826){
this.fn1 = fn1;
this._ = _;
this.meta10823 = meta10823;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10826 = meta10826;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10825.cljs$lang$type = true;
cljs.core.async.t10825.cljs$lang$ctorStr = "cljs.core.async/t10825";
cljs.core.async.t10825.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10825");
});})(___$1))
;
cljs.core.async.t10825.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10825.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10825.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10825.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10815_SHARP_){return f1.call(null,(((p1__10815_SHARP_ == null))?null:self__.f.call(null,p1__10815_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10825.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10827){var self__ = this;
var _10827__$1 = this;return self__.meta10826;
});})(___$1))
;
cljs.core.async.t10825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10827,meta10826__$1){var self__ = this;
var _10827__$1 = this;return (new cljs.core.async.t10825(self__.fn1,self__._,self__.meta10823,self__.ch,self__.f,self__.map_LT_,meta10826__$1));
});})(___$1))
;
cljs.core.async.__GT_t10825 = ((function (___$1){
return (function __GT_t10825(fn1__$1,___$2,meta10823__$1,ch__$2,f__$2,map_LT___$2,meta10826){return (new cljs.core.async.t10825(fn1__$1,___$2,meta10823__$1,ch__$2,f__$2,map_LT___$2,meta10826));
});})(___$1))
;
}
return (new cljs.core.async.t10825(fn1,___$1,self__.meta10823,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t10822.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10822.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10822.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10824){var self__ = this;
var _10824__$1 = this;return self__.meta10823;
});
cljs.core.async.t10822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10824,meta10823__$1){var self__ = this;
var _10824__$1 = this;return (new cljs.core.async.t10822(self__.ch,self__.f,self__.map_LT_,meta10823__$1));
});
cljs.core.async.__GT_t10822 = (function __GT_t10822(ch__$1,f__$1,map_LT___$1,meta10823){return (new cljs.core.async.t10822(ch__$1,f__$1,map_LT___$1,meta10823));
});
}
return (new cljs.core.async.t10822(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10831 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10831 = (function (ch,f,map_GT_,meta10832){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10832 = meta10832;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10831.cljs$lang$type = true;
cljs.core.async.t10831.cljs$lang$ctorStr = "cljs.core.async/t10831";
cljs.core.async.t10831.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10831");
});
cljs.core.async.t10831.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10831.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t10831.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10831.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10831.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10831.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10833){var self__ = this;
var _10833__$1 = this;return self__.meta10832;
});
cljs.core.async.t10831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10833,meta10832__$1){var self__ = this;
var _10833__$1 = this;return (new cljs.core.async.t10831(self__.ch,self__.f,self__.map_GT_,meta10832__$1));
});
cljs.core.async.__GT_t10831 = (function __GT_t10831(ch__$1,f__$1,map_GT___$1,meta10832){return (new cljs.core.async.t10831(ch__$1,f__$1,map_GT___$1,meta10832));
});
}
return (new cljs.core.async.t10831(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10837 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10837 = (function (ch,p,filter_GT_,meta10838){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10838 = meta10838;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10837.cljs$lang$type = true;
cljs.core.async.t10837.cljs$lang$ctorStr = "cljs.core.async/t10837";
cljs.core.async.t10837.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10837");
});
cljs.core.async.t10837.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10837.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t10837.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10837.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10837.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10837.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10837.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10839){var self__ = this;
var _10839__$1 = this;return self__.meta10838;
});
cljs.core.async.t10837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10839,meta10838__$1){var self__ = this;
var _10839__$1 = this;return (new cljs.core.async.t10837(self__.ch,self__.p,self__.filter_GT_,meta10838__$1));
});
cljs.core.async.__GT_t10837 = (function __GT_t10837(ch__$1,p__$1,filter_GT___$1,meta10838){return (new cljs.core.async.t10837(ch__$1,p__$1,filter_GT___$1,meta10838));
});
}
return (new cljs.core.async.t10837(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6366__auto___10922 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___10922,out){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___10922,out){
return (function (state_10901){var state_val_10902 = (state_10901[(1)]);if((state_val_10902 === (7)))
{var inst_10897 = (state_10901[(2)]);var state_10901__$1 = state_10901;var statearr_10903_10923 = state_10901__$1;(statearr_10903_10923[(2)] = inst_10897);
(statearr_10903_10923[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10902 === (1)))
{var state_10901__$1 = state_10901;var statearr_10904_10924 = state_10901__$1;(statearr_10904_10924[(2)] = null);
(statearr_10904_10924[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10902 === (4)))
{var inst_10883 = (state_10901[(7)]);var inst_10883__$1 = (state_10901[(2)]);var inst_10884 = (inst_10883__$1 == null);var state_10901__$1 = (function (){var statearr_10905 = state_10901;(statearr_10905[(7)] = inst_10883__$1);
return statearr_10905;
})();if(cljs.core.truth_(inst_10884))
{var statearr_10906_10925 = state_10901__$1;(statearr_10906_10925[(1)] = (5));
} else
{var statearr_10907_10926 = state_10901__$1;(statearr_10907_10926[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10902 === (6)))
{var inst_10883 = (state_10901[(7)]);var inst_10888 = p.call(null,inst_10883);var state_10901__$1 = state_10901;if(cljs.core.truth_(inst_10888))
{var statearr_10908_10927 = state_10901__$1;(statearr_10908_10927[(1)] = (8));
} else
{var statearr_10909_10928 = state_10901__$1;(statearr_10909_10928[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10902 === (3)))
{var inst_10899 = (state_10901[(2)]);var state_10901__$1 = state_10901;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10901__$1,inst_10899);
} else
{if((state_val_10902 === (2)))
{var state_10901__$1 = state_10901;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10901__$1,(4),ch);
} else
{if((state_val_10902 === (11)))
{var inst_10891 = (state_10901[(2)]);var state_10901__$1 = state_10901;var statearr_10910_10929 = state_10901__$1;(statearr_10910_10929[(2)] = inst_10891);
(statearr_10910_10929[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10902 === (9)))
{var state_10901__$1 = state_10901;var statearr_10911_10930 = state_10901__$1;(statearr_10911_10930[(2)] = null);
(statearr_10911_10930[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10902 === (5)))
{var inst_10886 = cljs.core.async.close_BANG_.call(null,out);var state_10901__$1 = state_10901;var statearr_10912_10931 = state_10901__$1;(statearr_10912_10931[(2)] = inst_10886);
(statearr_10912_10931[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10902 === (10)))
{var inst_10894 = (state_10901[(2)]);var state_10901__$1 = (function (){var statearr_10913 = state_10901;(statearr_10913[(8)] = inst_10894);
return statearr_10913;
})();var statearr_10914_10932 = state_10901__$1;(statearr_10914_10932[(2)] = null);
(statearr_10914_10932[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10902 === (8)))
{var inst_10883 = (state_10901[(7)]);var state_10901__$1 = state_10901;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10901__$1,(11),out,inst_10883);
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
});})(c__6366__auto___10922,out))
;return ((function (switch__6351__auto__,c__6366__auto___10922,out){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_10918 = [null,null,null,null,null,null,null,null,null];(statearr_10918[(0)] = state_machine__6352__auto__);
(statearr_10918[(1)] = (1));
return statearr_10918;
});
var state_machine__6352__auto____1 = (function (state_10901){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_10901);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e10919){if((e10919 instanceof Object))
{var ex__6355__auto__ = e10919;var statearr_10920_10933 = state_10901;(statearr_10920_10933[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10901);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10919;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10934 = state_10901;
state_10901 = G__10934;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_10901){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_10901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___10922,out))
})();var state__6368__auto__ = (function (){var statearr_10921 = f__6367__auto__.call(null);(statearr_10921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___10922);
return statearr_10921;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___10922,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6366__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto__){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto__){
return (function (state_11100){var state_val_11101 = (state_11100[(1)]);if((state_val_11101 === (7)))
{var inst_11096 = (state_11100[(2)]);var state_11100__$1 = state_11100;var statearr_11102_11143 = state_11100__$1;(statearr_11102_11143[(2)] = inst_11096);
(statearr_11102_11143[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (20)))
{var inst_11066 = (state_11100[(7)]);var inst_11077 = (state_11100[(2)]);var inst_11078 = cljs.core.next.call(null,inst_11066);var inst_11052 = inst_11078;var inst_11053 = null;var inst_11054 = (0);var inst_11055 = (0);var state_11100__$1 = (function (){var statearr_11103 = state_11100;(statearr_11103[(8)] = inst_11053);
(statearr_11103[(9)] = inst_11052);
(statearr_11103[(10)] = inst_11055);
(statearr_11103[(11)] = inst_11054);
(statearr_11103[(12)] = inst_11077);
return statearr_11103;
})();var statearr_11104_11144 = state_11100__$1;(statearr_11104_11144[(2)] = null);
(statearr_11104_11144[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (1)))
{var state_11100__$1 = state_11100;var statearr_11105_11145 = state_11100__$1;(statearr_11105_11145[(2)] = null);
(statearr_11105_11145[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (4)))
{var inst_11041 = (state_11100[(13)]);var inst_11041__$1 = (state_11100[(2)]);var inst_11042 = (inst_11041__$1 == null);var state_11100__$1 = (function (){var statearr_11106 = state_11100;(statearr_11106[(13)] = inst_11041__$1);
return statearr_11106;
})();if(cljs.core.truth_(inst_11042))
{var statearr_11107_11146 = state_11100__$1;(statearr_11107_11146[(1)] = (5));
} else
{var statearr_11108_11147 = state_11100__$1;(statearr_11108_11147[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (15)))
{var state_11100__$1 = state_11100;var statearr_11112_11148 = state_11100__$1;(statearr_11112_11148[(2)] = null);
(statearr_11112_11148[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (21)))
{var state_11100__$1 = state_11100;var statearr_11113_11149 = state_11100__$1;(statearr_11113_11149[(2)] = null);
(statearr_11113_11149[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (13)))
{var inst_11053 = (state_11100[(8)]);var inst_11052 = (state_11100[(9)]);var inst_11055 = (state_11100[(10)]);var inst_11054 = (state_11100[(11)]);var inst_11062 = (state_11100[(2)]);var inst_11063 = (inst_11055 + (1));var tmp11109 = inst_11053;var tmp11110 = inst_11052;var tmp11111 = inst_11054;var inst_11052__$1 = tmp11110;var inst_11053__$1 = tmp11109;var inst_11054__$1 = tmp11111;var inst_11055__$1 = inst_11063;var state_11100__$1 = (function (){var statearr_11114 = state_11100;(statearr_11114[(8)] = inst_11053__$1);
(statearr_11114[(9)] = inst_11052__$1);
(statearr_11114[(10)] = inst_11055__$1);
(statearr_11114[(11)] = inst_11054__$1);
(statearr_11114[(14)] = inst_11062);
return statearr_11114;
})();var statearr_11115_11150 = state_11100__$1;(statearr_11115_11150[(2)] = null);
(statearr_11115_11150[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (22)))
{var state_11100__$1 = state_11100;var statearr_11116_11151 = state_11100__$1;(statearr_11116_11151[(2)] = null);
(statearr_11116_11151[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (6)))
{var inst_11041 = (state_11100[(13)]);var inst_11050 = f.call(null,inst_11041);var inst_11051 = cljs.core.seq.call(null,inst_11050);var inst_11052 = inst_11051;var inst_11053 = null;var inst_11054 = (0);var inst_11055 = (0);var state_11100__$1 = (function (){var statearr_11117 = state_11100;(statearr_11117[(8)] = inst_11053);
(statearr_11117[(9)] = inst_11052);
(statearr_11117[(10)] = inst_11055);
(statearr_11117[(11)] = inst_11054);
return statearr_11117;
})();var statearr_11118_11152 = state_11100__$1;(statearr_11118_11152[(2)] = null);
(statearr_11118_11152[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (17)))
{var inst_11066 = (state_11100[(7)]);var inst_11070 = cljs.core.chunk_first.call(null,inst_11066);var inst_11071 = cljs.core.chunk_rest.call(null,inst_11066);var inst_11072 = cljs.core.count.call(null,inst_11070);var inst_11052 = inst_11071;var inst_11053 = inst_11070;var inst_11054 = inst_11072;var inst_11055 = (0);var state_11100__$1 = (function (){var statearr_11119 = state_11100;(statearr_11119[(8)] = inst_11053);
(statearr_11119[(9)] = inst_11052);
(statearr_11119[(10)] = inst_11055);
(statearr_11119[(11)] = inst_11054);
return statearr_11119;
})();var statearr_11120_11153 = state_11100__$1;(statearr_11120_11153[(2)] = null);
(statearr_11120_11153[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (3)))
{var inst_11098 = (state_11100[(2)]);var state_11100__$1 = state_11100;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11100__$1,inst_11098);
} else
{if((state_val_11101 === (12)))
{var inst_11086 = (state_11100[(2)]);var state_11100__$1 = state_11100;var statearr_11121_11154 = state_11100__$1;(statearr_11121_11154[(2)] = inst_11086);
(statearr_11121_11154[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (2)))
{var state_11100__$1 = state_11100;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11100__$1,(4),in$);
} else
{if((state_val_11101 === (23)))
{var inst_11094 = (state_11100[(2)]);var state_11100__$1 = state_11100;var statearr_11122_11155 = state_11100__$1;(statearr_11122_11155[(2)] = inst_11094);
(statearr_11122_11155[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (19)))
{var inst_11081 = (state_11100[(2)]);var state_11100__$1 = state_11100;var statearr_11123_11156 = state_11100__$1;(statearr_11123_11156[(2)] = inst_11081);
(statearr_11123_11156[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (11)))
{var inst_11052 = (state_11100[(9)]);var inst_11066 = (state_11100[(7)]);var inst_11066__$1 = cljs.core.seq.call(null,inst_11052);var state_11100__$1 = (function (){var statearr_11124 = state_11100;(statearr_11124[(7)] = inst_11066__$1);
return statearr_11124;
})();if(inst_11066__$1)
{var statearr_11125_11157 = state_11100__$1;(statearr_11125_11157[(1)] = (14));
} else
{var statearr_11126_11158 = state_11100__$1;(statearr_11126_11158[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (9)))
{var inst_11088 = (state_11100[(2)]);var inst_11089 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11100__$1 = (function (){var statearr_11127 = state_11100;(statearr_11127[(15)] = inst_11088);
return statearr_11127;
})();if(cljs.core.truth_(inst_11089))
{var statearr_11128_11159 = state_11100__$1;(statearr_11128_11159[(1)] = (21));
} else
{var statearr_11129_11160 = state_11100__$1;(statearr_11129_11160[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (5)))
{var inst_11044 = cljs.core.async.close_BANG_.call(null,out);var state_11100__$1 = state_11100;var statearr_11130_11161 = state_11100__$1;(statearr_11130_11161[(2)] = inst_11044);
(statearr_11130_11161[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (14)))
{var inst_11066 = (state_11100[(7)]);var inst_11068 = cljs.core.chunked_seq_QMARK_.call(null,inst_11066);var state_11100__$1 = state_11100;if(inst_11068)
{var statearr_11131_11162 = state_11100__$1;(statearr_11131_11162[(1)] = (17));
} else
{var statearr_11132_11163 = state_11100__$1;(statearr_11132_11163[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (16)))
{var inst_11084 = (state_11100[(2)]);var state_11100__$1 = state_11100;var statearr_11133_11164 = state_11100__$1;(statearr_11133_11164[(2)] = inst_11084);
(statearr_11133_11164[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11101 === (10)))
{var inst_11053 = (state_11100[(8)]);var inst_11055 = (state_11100[(10)]);var inst_11060 = cljs.core._nth.call(null,inst_11053,inst_11055);var state_11100__$1 = state_11100;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11100__$1,(13),out,inst_11060);
} else
{if((state_val_11101 === (18)))
{var inst_11066 = (state_11100[(7)]);var inst_11075 = cljs.core.first.call(null,inst_11066);var state_11100__$1 = state_11100;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11100__$1,(20),out,inst_11075);
} else
{if((state_val_11101 === (8)))
{var inst_11055 = (state_11100[(10)]);var inst_11054 = (state_11100[(11)]);var inst_11057 = (inst_11055 < inst_11054);var inst_11058 = inst_11057;var state_11100__$1 = state_11100;if(cljs.core.truth_(inst_11058))
{var statearr_11134_11165 = state_11100__$1;(statearr_11134_11165[(1)] = (10));
} else
{var statearr_11135_11166 = state_11100__$1;(statearr_11135_11166[(1)] = (11));
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
});})(c__6366__auto__))
;return ((function (switch__6351__auto__,c__6366__auto__){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_11139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11139[(0)] = state_machine__6352__auto__);
(statearr_11139[(1)] = (1));
return statearr_11139;
});
var state_machine__6352__auto____1 = (function (state_11100){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_11100);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e11140){if((e11140 instanceof Object))
{var ex__6355__auto__ = e11140;var statearr_11141_11167 = state_11100;(statearr_11141_11167[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11100);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11140;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11168 = state_11100;
state_11100 = G__11168;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_11100){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_11100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto__))
})();var state__6368__auto__ = (function (){var statearr_11142 = f__6367__auto__.call(null);(statearr_11142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto__);
return statearr_11142;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto__))
);
return c__6366__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6366__auto___11263 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___11263){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___11263){
return (function (state_11239){var state_val_11240 = (state_11239[(1)]);if((state_val_11240 === (7)))
{var inst_11235 = (state_11239[(2)]);var state_11239__$1 = state_11239;var statearr_11241_11264 = state_11239__$1;(statearr_11241_11264[(2)] = inst_11235);
(statearr_11241_11264[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11240 === (1)))
{var state_11239__$1 = state_11239;var statearr_11242_11265 = state_11239__$1;(statearr_11242_11265[(2)] = null);
(statearr_11242_11265[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11240 === (4)))
{var inst_11218 = (state_11239[(7)]);var inst_11218__$1 = (state_11239[(2)]);var inst_11219 = (inst_11218__$1 == null);var state_11239__$1 = (function (){var statearr_11243 = state_11239;(statearr_11243[(7)] = inst_11218__$1);
return statearr_11243;
})();if(cljs.core.truth_(inst_11219))
{var statearr_11244_11266 = state_11239__$1;(statearr_11244_11266[(1)] = (5));
} else
{var statearr_11245_11267 = state_11239__$1;(statearr_11245_11267[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11240 === (13)))
{var state_11239__$1 = state_11239;var statearr_11246_11268 = state_11239__$1;(statearr_11246_11268[(2)] = null);
(statearr_11246_11268[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11240 === (6)))
{var inst_11218 = (state_11239[(7)]);var state_11239__$1 = state_11239;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11239__$1,(11),to,inst_11218);
} else
{if((state_val_11240 === (3)))
{var inst_11237 = (state_11239[(2)]);var state_11239__$1 = state_11239;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11239__$1,inst_11237);
} else
{if((state_val_11240 === (12)))
{var state_11239__$1 = state_11239;var statearr_11247_11269 = state_11239__$1;(statearr_11247_11269[(2)] = null);
(statearr_11247_11269[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11240 === (2)))
{var state_11239__$1 = state_11239;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11239__$1,(4),from);
} else
{if((state_val_11240 === (11)))
{var inst_11228 = (state_11239[(2)]);var state_11239__$1 = state_11239;if(cljs.core.truth_(inst_11228))
{var statearr_11248_11270 = state_11239__$1;(statearr_11248_11270[(1)] = (12));
} else
{var statearr_11249_11271 = state_11239__$1;(statearr_11249_11271[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11240 === (9)))
{var state_11239__$1 = state_11239;var statearr_11250_11272 = state_11239__$1;(statearr_11250_11272[(2)] = null);
(statearr_11250_11272[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11240 === (5)))
{var state_11239__$1 = state_11239;if(cljs.core.truth_(close_QMARK_))
{var statearr_11251_11273 = state_11239__$1;(statearr_11251_11273[(1)] = (8));
} else
{var statearr_11252_11274 = state_11239__$1;(statearr_11252_11274[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11240 === (14)))
{var inst_11233 = (state_11239[(2)]);var state_11239__$1 = state_11239;var statearr_11253_11275 = state_11239__$1;(statearr_11253_11275[(2)] = inst_11233);
(statearr_11253_11275[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11240 === (10)))
{var inst_11225 = (state_11239[(2)]);var state_11239__$1 = state_11239;var statearr_11254_11276 = state_11239__$1;(statearr_11254_11276[(2)] = inst_11225);
(statearr_11254_11276[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11240 === (8)))
{var inst_11222 = cljs.core.async.close_BANG_.call(null,to);var state_11239__$1 = state_11239;var statearr_11255_11277 = state_11239__$1;(statearr_11255_11277[(2)] = inst_11222);
(statearr_11255_11277[(1)] = (10));
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
});})(c__6366__auto___11263))
;return ((function (switch__6351__auto__,c__6366__auto___11263){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_11259 = [null,null,null,null,null,null,null,null];(statearr_11259[(0)] = state_machine__6352__auto__);
(statearr_11259[(1)] = (1));
return statearr_11259;
});
var state_machine__6352__auto____1 = (function (state_11239){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_11239);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e11260){if((e11260 instanceof Object))
{var ex__6355__auto__ = e11260;var statearr_11261_11278 = state_11239;(statearr_11261_11278[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11239);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11260;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11279 = state_11239;
state_11239 = G__11279;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_11239){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_11239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___11263))
})();var state__6368__auto__ = (function (){var statearr_11262 = f__6367__auto__.call(null);(statearr_11262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___11263);
return statearr_11262;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___11263))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6366__auto___11380 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___11380,tc,fc){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___11380,tc,fc){
return (function (state_11355){var state_val_11356 = (state_11355[(1)]);if((state_val_11356 === (7)))
{var inst_11351 = (state_11355[(2)]);var state_11355__$1 = state_11355;var statearr_11357_11381 = state_11355__$1;(statearr_11357_11381[(2)] = inst_11351);
(statearr_11357_11381[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11356 === (1)))
{var state_11355__$1 = state_11355;var statearr_11358_11382 = state_11355__$1;(statearr_11358_11382[(2)] = null);
(statearr_11358_11382[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11356 === (4)))
{var inst_11332 = (state_11355[(7)]);var inst_11332__$1 = (state_11355[(2)]);var inst_11333 = (inst_11332__$1 == null);var state_11355__$1 = (function (){var statearr_11359 = state_11355;(statearr_11359[(7)] = inst_11332__$1);
return statearr_11359;
})();if(cljs.core.truth_(inst_11333))
{var statearr_11360_11383 = state_11355__$1;(statearr_11360_11383[(1)] = (5));
} else
{var statearr_11361_11384 = state_11355__$1;(statearr_11361_11384[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11356 === (13)))
{var state_11355__$1 = state_11355;var statearr_11362_11385 = state_11355__$1;(statearr_11362_11385[(2)] = null);
(statearr_11362_11385[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11356 === (6)))
{var inst_11332 = (state_11355[(7)]);var inst_11338 = p.call(null,inst_11332);var state_11355__$1 = state_11355;if(cljs.core.truth_(inst_11338))
{var statearr_11363_11386 = state_11355__$1;(statearr_11363_11386[(1)] = (9));
} else
{var statearr_11364_11387 = state_11355__$1;(statearr_11364_11387[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11356 === (3)))
{var inst_11353 = (state_11355[(2)]);var state_11355__$1 = state_11355;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11355__$1,inst_11353);
} else
{if((state_val_11356 === (12)))
{var state_11355__$1 = state_11355;var statearr_11365_11388 = state_11355__$1;(statearr_11365_11388[(2)] = null);
(statearr_11365_11388[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11356 === (2)))
{var state_11355__$1 = state_11355;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11355__$1,(4),ch);
} else
{if((state_val_11356 === (11)))
{var inst_11332 = (state_11355[(7)]);var inst_11342 = (state_11355[(2)]);var state_11355__$1 = state_11355;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11355__$1,(8),inst_11342,inst_11332);
} else
{if((state_val_11356 === (9)))
{var state_11355__$1 = state_11355;var statearr_11366_11389 = state_11355__$1;(statearr_11366_11389[(2)] = tc);
(statearr_11366_11389[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11356 === (5)))
{var inst_11335 = cljs.core.async.close_BANG_.call(null,tc);var inst_11336 = cljs.core.async.close_BANG_.call(null,fc);var state_11355__$1 = (function (){var statearr_11367 = state_11355;(statearr_11367[(8)] = inst_11335);
return statearr_11367;
})();var statearr_11368_11390 = state_11355__$1;(statearr_11368_11390[(2)] = inst_11336);
(statearr_11368_11390[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11356 === (14)))
{var inst_11349 = (state_11355[(2)]);var state_11355__$1 = state_11355;var statearr_11369_11391 = state_11355__$1;(statearr_11369_11391[(2)] = inst_11349);
(statearr_11369_11391[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11356 === (10)))
{var state_11355__$1 = state_11355;var statearr_11370_11392 = state_11355__$1;(statearr_11370_11392[(2)] = fc);
(statearr_11370_11392[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11356 === (8)))
{var inst_11344 = (state_11355[(2)]);var state_11355__$1 = state_11355;if(cljs.core.truth_(inst_11344))
{var statearr_11371_11393 = state_11355__$1;(statearr_11371_11393[(1)] = (12));
} else
{var statearr_11372_11394 = state_11355__$1;(statearr_11372_11394[(1)] = (13));
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
});})(c__6366__auto___11380,tc,fc))
;return ((function (switch__6351__auto__,c__6366__auto___11380,tc,fc){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_11376 = [null,null,null,null,null,null,null,null,null];(statearr_11376[(0)] = state_machine__6352__auto__);
(statearr_11376[(1)] = (1));
return statearr_11376;
});
var state_machine__6352__auto____1 = (function (state_11355){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_11355);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e11377){if((e11377 instanceof Object))
{var ex__6355__auto__ = e11377;var statearr_11378_11395 = state_11355;(statearr_11378_11395[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11355);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11377;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11396 = state_11355;
state_11355 = G__11396;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_11355){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_11355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___11380,tc,fc))
})();var state__6368__auto__ = (function (){var statearr_11379 = f__6367__auto__.call(null);(statearr_11379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___11380);
return statearr_11379;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___11380,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6366__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto__){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto__){
return (function (state_11443){var state_val_11444 = (state_11443[(1)]);if((state_val_11444 === (7)))
{var inst_11439 = (state_11443[(2)]);var state_11443__$1 = state_11443;var statearr_11445_11461 = state_11443__$1;(statearr_11445_11461[(2)] = inst_11439);
(statearr_11445_11461[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11444 === (6)))
{var inst_11432 = (state_11443[(7)]);var inst_11429 = (state_11443[(8)]);var inst_11436 = f.call(null,inst_11429,inst_11432);var inst_11429__$1 = inst_11436;var state_11443__$1 = (function (){var statearr_11446 = state_11443;(statearr_11446[(8)] = inst_11429__$1);
return statearr_11446;
})();var statearr_11447_11462 = state_11443__$1;(statearr_11447_11462[(2)] = null);
(statearr_11447_11462[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11444 === (5)))
{var inst_11429 = (state_11443[(8)]);var state_11443__$1 = state_11443;var statearr_11448_11463 = state_11443__$1;(statearr_11448_11463[(2)] = inst_11429);
(statearr_11448_11463[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11444 === (4)))
{var inst_11432 = (state_11443[(7)]);var inst_11432__$1 = (state_11443[(2)]);var inst_11433 = (inst_11432__$1 == null);var state_11443__$1 = (function (){var statearr_11449 = state_11443;(statearr_11449[(7)] = inst_11432__$1);
return statearr_11449;
})();if(cljs.core.truth_(inst_11433))
{var statearr_11450_11464 = state_11443__$1;(statearr_11450_11464[(1)] = (5));
} else
{var statearr_11451_11465 = state_11443__$1;(statearr_11451_11465[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11444 === (3)))
{var inst_11441 = (state_11443[(2)]);var state_11443__$1 = state_11443;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11443__$1,inst_11441);
} else
{if((state_val_11444 === (2)))
{var state_11443__$1 = state_11443;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11443__$1,(4),ch);
} else
{if((state_val_11444 === (1)))
{var inst_11429 = init;var state_11443__$1 = (function (){var statearr_11452 = state_11443;(statearr_11452[(8)] = inst_11429);
return statearr_11452;
})();var statearr_11453_11466 = state_11443__$1;(statearr_11453_11466[(2)] = null);
(statearr_11453_11466[(1)] = (2));
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
});})(c__6366__auto__))
;return ((function (switch__6351__auto__,c__6366__auto__){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_11457 = [null,null,null,null,null,null,null,null,null];(statearr_11457[(0)] = state_machine__6352__auto__);
(statearr_11457[(1)] = (1));
return statearr_11457;
});
var state_machine__6352__auto____1 = (function (state_11443){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_11443);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e11458){if((e11458 instanceof Object))
{var ex__6355__auto__ = e11458;var statearr_11459_11467 = state_11443;(statearr_11459_11467[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11443);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11468 = state_11443;
state_11443 = G__11468;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_11443){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_11443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto__))
})();var state__6368__auto__ = (function (){var statearr_11460 = f__6367__auto__.call(null);(statearr_11460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto__);
return statearr_11460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto__))
);
return c__6366__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6366__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto__){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto__){
return (function (state_11542){var state_val_11543 = (state_11542[(1)]);if((state_val_11543 === (7)))
{var inst_11524 = (state_11542[(2)]);var state_11542__$1 = state_11542;var statearr_11544_11567 = state_11542__$1;(statearr_11544_11567[(2)] = inst_11524);
(statearr_11544_11567[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11543 === (1)))
{var inst_11518 = cljs.core.seq.call(null,coll);var inst_11519 = inst_11518;var state_11542__$1 = (function (){var statearr_11545 = state_11542;(statearr_11545[(7)] = inst_11519);
return statearr_11545;
})();var statearr_11546_11568 = state_11542__$1;(statearr_11546_11568[(2)] = null);
(statearr_11546_11568[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11543 === (4)))
{var inst_11519 = (state_11542[(7)]);var inst_11522 = cljs.core.first.call(null,inst_11519);var state_11542__$1 = state_11542;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11542__$1,(7),ch,inst_11522);
} else
{if((state_val_11543 === (13)))
{var inst_11536 = (state_11542[(2)]);var state_11542__$1 = state_11542;var statearr_11547_11569 = state_11542__$1;(statearr_11547_11569[(2)] = inst_11536);
(statearr_11547_11569[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11543 === (6)))
{var inst_11527 = (state_11542[(2)]);var state_11542__$1 = state_11542;if(cljs.core.truth_(inst_11527))
{var statearr_11548_11570 = state_11542__$1;(statearr_11548_11570[(1)] = (8));
} else
{var statearr_11549_11571 = state_11542__$1;(statearr_11549_11571[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11543 === (3)))
{var inst_11540 = (state_11542[(2)]);var state_11542__$1 = state_11542;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11542__$1,inst_11540);
} else
{if((state_val_11543 === (12)))
{var state_11542__$1 = state_11542;var statearr_11550_11572 = state_11542__$1;(statearr_11550_11572[(2)] = null);
(statearr_11550_11572[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11543 === (2)))
{var inst_11519 = (state_11542[(7)]);var state_11542__$1 = state_11542;if(cljs.core.truth_(inst_11519))
{var statearr_11551_11573 = state_11542__$1;(statearr_11551_11573[(1)] = (4));
} else
{var statearr_11552_11574 = state_11542__$1;(statearr_11552_11574[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11543 === (11)))
{var inst_11533 = cljs.core.async.close_BANG_.call(null,ch);var state_11542__$1 = state_11542;var statearr_11553_11575 = state_11542__$1;(statearr_11553_11575[(2)] = inst_11533);
(statearr_11553_11575[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11543 === (9)))
{var state_11542__$1 = state_11542;if(cljs.core.truth_(close_QMARK_))
{var statearr_11554_11576 = state_11542__$1;(statearr_11554_11576[(1)] = (11));
} else
{var statearr_11555_11577 = state_11542__$1;(statearr_11555_11577[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11543 === (5)))
{var inst_11519 = (state_11542[(7)]);var state_11542__$1 = state_11542;var statearr_11556_11578 = state_11542__$1;(statearr_11556_11578[(2)] = inst_11519);
(statearr_11556_11578[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11543 === (10)))
{var inst_11538 = (state_11542[(2)]);var state_11542__$1 = state_11542;var statearr_11557_11579 = state_11542__$1;(statearr_11557_11579[(2)] = inst_11538);
(statearr_11557_11579[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11543 === (8)))
{var inst_11519 = (state_11542[(7)]);var inst_11529 = cljs.core.next.call(null,inst_11519);var inst_11519__$1 = inst_11529;var state_11542__$1 = (function (){var statearr_11558 = state_11542;(statearr_11558[(7)] = inst_11519__$1);
return statearr_11558;
})();var statearr_11559_11580 = state_11542__$1;(statearr_11559_11580[(2)] = null);
(statearr_11559_11580[(1)] = (2));
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
});})(c__6366__auto__))
;return ((function (switch__6351__auto__,c__6366__auto__){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_11563 = [null,null,null,null,null,null,null,null];(statearr_11563[(0)] = state_machine__6352__auto__);
(statearr_11563[(1)] = (1));
return statearr_11563;
});
var state_machine__6352__auto____1 = (function (state_11542){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_11542);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e11564){if((e11564 instanceof Object))
{var ex__6355__auto__ = e11564;var statearr_11565_11581 = state_11542;(statearr_11565_11581[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11542);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11564;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11582 = state_11542;
state_11542 = G__11582;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_11542){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_11542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto__))
})();var state__6368__auto__ = (function (){var statearr_11566 = f__6367__auto__.call(null);(statearr_11566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto__);
return statearr_11566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto__))
);
return c__6366__auto__;
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
cljs.core.async.Mux = (function (){var obj11584 = {};return obj11584;
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
cljs.core.async.Mult = (function (){var obj11586 = {};return obj11586;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11808 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11808 = (function (cs,ch,mult,meta11809){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11809 = meta11809;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11808.cljs$lang$type = true;
cljs.core.async.t11808.cljs$lang$ctorStr = "cljs.core.async/t11808";
cljs.core.async.t11808.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t11808");
});})(cs))
;
cljs.core.async.t11808.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11808.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11808.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11808.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11808.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11808.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11808.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11810){var self__ = this;
var _11810__$1 = this;return self__.meta11809;
});})(cs))
;
cljs.core.async.t11808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11810,meta11809__$1){var self__ = this;
var _11810__$1 = this;return (new cljs.core.async.t11808(self__.cs,self__.ch,self__.mult,meta11809__$1));
});})(cs))
;
cljs.core.async.__GT_t11808 = ((function (cs){
return (function __GT_t11808(cs__$1,ch__$1,mult__$1,meta11809){return (new cljs.core.async.t11808(cs__$1,ch__$1,mult__$1,meta11809));
});})(cs))
;
}
return (new cljs.core.async.t11808(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6366__auto___12029 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___12029,cs,m,dchan,dctr,done){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___12029,cs,m,dchan,dctr,done){
return (function (state_11941){var state_val_11942 = (state_11941[(1)]);if((state_val_11942 === (7)))
{var inst_11937 = (state_11941[(2)]);var state_11941__$1 = state_11941;var statearr_11943_12030 = state_11941__$1;(statearr_11943_12030[(2)] = inst_11937);
(statearr_11943_12030[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (20)))
{var inst_11842 = (state_11941[(7)]);var inst_11852 = cljs.core.first.call(null,inst_11842);var inst_11853 = cljs.core.nth.call(null,inst_11852,(0),null);var inst_11854 = cljs.core.nth.call(null,inst_11852,(1),null);var state_11941__$1 = (function (){var statearr_11944 = state_11941;(statearr_11944[(8)] = inst_11853);
return statearr_11944;
})();if(cljs.core.truth_(inst_11854))
{var statearr_11945_12031 = state_11941__$1;(statearr_11945_12031[(1)] = (22));
} else
{var statearr_11946_12032 = state_11941__$1;(statearr_11946_12032[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (27)))
{var inst_11884 = (state_11941[(9)]);var inst_11882 = (state_11941[(10)]);var inst_11889 = (state_11941[(11)]);var inst_11813 = (state_11941[(12)]);var inst_11889__$1 = cljs.core._nth.call(null,inst_11882,inst_11884);var inst_11890 = cljs.core.async.put_BANG_.call(null,inst_11889__$1,inst_11813,done);var state_11941__$1 = (function (){var statearr_11947 = state_11941;(statearr_11947[(11)] = inst_11889__$1);
return statearr_11947;
})();if(cljs.core.truth_(inst_11890))
{var statearr_11948_12033 = state_11941__$1;(statearr_11948_12033[(1)] = (30));
} else
{var statearr_11949_12034 = state_11941__$1;(statearr_11949_12034[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (1)))
{var state_11941__$1 = state_11941;var statearr_11950_12035 = state_11941__$1;(statearr_11950_12035[(2)] = null);
(statearr_11950_12035[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (24)))
{var inst_11842 = (state_11941[(7)]);var inst_11859 = (state_11941[(2)]);var inst_11860 = cljs.core.next.call(null,inst_11842);var inst_11822 = inst_11860;var inst_11823 = null;var inst_11824 = (0);var inst_11825 = (0);var state_11941__$1 = (function (){var statearr_11951 = state_11941;(statearr_11951[(13)] = inst_11823);
(statearr_11951[(14)] = inst_11825);
(statearr_11951[(15)] = inst_11824);
(statearr_11951[(16)] = inst_11822);
(statearr_11951[(17)] = inst_11859);
return statearr_11951;
})();var statearr_11952_12036 = state_11941__$1;(statearr_11952_12036[(2)] = null);
(statearr_11952_12036[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (39)))
{var state_11941__$1 = state_11941;var statearr_11956_12037 = state_11941__$1;(statearr_11956_12037[(2)] = null);
(statearr_11956_12037[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (4)))
{var inst_11813 = (state_11941[(12)]);var inst_11813__$1 = (state_11941[(2)]);var inst_11814 = (inst_11813__$1 == null);var state_11941__$1 = (function (){var statearr_11957 = state_11941;(statearr_11957[(12)] = inst_11813__$1);
return statearr_11957;
})();if(cljs.core.truth_(inst_11814))
{var statearr_11958_12038 = state_11941__$1;(statearr_11958_12038[(1)] = (5));
} else
{var statearr_11959_12039 = state_11941__$1;(statearr_11959_12039[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (15)))
{var inst_11823 = (state_11941[(13)]);var inst_11825 = (state_11941[(14)]);var inst_11824 = (state_11941[(15)]);var inst_11822 = (state_11941[(16)]);var inst_11838 = (state_11941[(2)]);var inst_11839 = (inst_11825 + (1));var tmp11953 = inst_11823;var tmp11954 = inst_11824;var tmp11955 = inst_11822;var inst_11822__$1 = tmp11955;var inst_11823__$1 = tmp11953;var inst_11824__$1 = tmp11954;var inst_11825__$1 = inst_11839;var state_11941__$1 = (function (){var statearr_11960 = state_11941;(statearr_11960[(13)] = inst_11823__$1);
(statearr_11960[(14)] = inst_11825__$1);
(statearr_11960[(15)] = inst_11824__$1);
(statearr_11960[(16)] = inst_11822__$1);
(statearr_11960[(18)] = inst_11838);
return statearr_11960;
})();var statearr_11961_12040 = state_11941__$1;(statearr_11961_12040[(2)] = null);
(statearr_11961_12040[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (21)))
{var inst_11863 = (state_11941[(2)]);var state_11941__$1 = state_11941;var statearr_11965_12041 = state_11941__$1;(statearr_11965_12041[(2)] = inst_11863);
(statearr_11965_12041[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (31)))
{var inst_11889 = (state_11941[(11)]);var inst_11893 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11894 = cljs.core.async.untap_STAR_.call(null,m,inst_11889);var state_11941__$1 = (function (){var statearr_11966 = state_11941;(statearr_11966[(19)] = inst_11893);
return statearr_11966;
})();var statearr_11967_12042 = state_11941__$1;(statearr_11967_12042[(2)] = inst_11894);
(statearr_11967_12042[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (32)))
{var inst_11884 = (state_11941[(9)]);var inst_11882 = (state_11941[(10)]);var inst_11881 = (state_11941[(20)]);var inst_11883 = (state_11941[(21)]);var inst_11896 = (state_11941[(2)]);var inst_11897 = (inst_11884 + (1));var tmp11962 = inst_11882;var tmp11963 = inst_11881;var tmp11964 = inst_11883;var inst_11881__$1 = tmp11963;var inst_11882__$1 = tmp11962;var inst_11883__$1 = tmp11964;var inst_11884__$1 = inst_11897;var state_11941__$1 = (function (){var statearr_11968 = state_11941;(statearr_11968[(9)] = inst_11884__$1);
(statearr_11968[(10)] = inst_11882__$1);
(statearr_11968[(22)] = inst_11896);
(statearr_11968[(20)] = inst_11881__$1);
(statearr_11968[(21)] = inst_11883__$1);
return statearr_11968;
})();var statearr_11969_12043 = state_11941__$1;(statearr_11969_12043[(2)] = null);
(statearr_11969_12043[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (40)))
{var inst_11909 = (state_11941[(23)]);var inst_11913 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11914 = cljs.core.async.untap_STAR_.call(null,m,inst_11909);var state_11941__$1 = (function (){var statearr_11970 = state_11941;(statearr_11970[(24)] = inst_11913);
return statearr_11970;
})();var statearr_11971_12044 = state_11941__$1;(statearr_11971_12044[(2)] = inst_11914);
(statearr_11971_12044[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (33)))
{var inst_11900 = (state_11941[(25)]);var inst_11902 = cljs.core.chunked_seq_QMARK_.call(null,inst_11900);var state_11941__$1 = state_11941;if(inst_11902)
{var statearr_11972_12045 = state_11941__$1;(statearr_11972_12045[(1)] = (36));
} else
{var statearr_11973_12046 = state_11941__$1;(statearr_11973_12046[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (13)))
{var inst_11832 = (state_11941[(26)]);var inst_11835 = cljs.core.async.close_BANG_.call(null,inst_11832);var state_11941__$1 = state_11941;var statearr_11974_12047 = state_11941__$1;(statearr_11974_12047[(2)] = inst_11835);
(statearr_11974_12047[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (22)))
{var inst_11853 = (state_11941[(8)]);var inst_11856 = cljs.core.async.close_BANG_.call(null,inst_11853);var state_11941__$1 = state_11941;var statearr_11975_12048 = state_11941__$1;(statearr_11975_12048[(2)] = inst_11856);
(statearr_11975_12048[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (36)))
{var inst_11900 = (state_11941[(25)]);var inst_11904 = cljs.core.chunk_first.call(null,inst_11900);var inst_11905 = cljs.core.chunk_rest.call(null,inst_11900);var inst_11906 = cljs.core.count.call(null,inst_11904);var inst_11881 = inst_11905;var inst_11882 = inst_11904;var inst_11883 = inst_11906;var inst_11884 = (0);var state_11941__$1 = (function (){var statearr_11976 = state_11941;(statearr_11976[(9)] = inst_11884);
(statearr_11976[(10)] = inst_11882);
(statearr_11976[(20)] = inst_11881);
(statearr_11976[(21)] = inst_11883);
return statearr_11976;
})();var statearr_11977_12049 = state_11941__$1;(statearr_11977_12049[(2)] = null);
(statearr_11977_12049[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (41)))
{var inst_11900 = (state_11941[(25)]);var inst_11916 = (state_11941[(2)]);var inst_11917 = cljs.core.next.call(null,inst_11900);var inst_11881 = inst_11917;var inst_11882 = null;var inst_11883 = (0);var inst_11884 = (0);var state_11941__$1 = (function (){var statearr_11978 = state_11941;(statearr_11978[(9)] = inst_11884);
(statearr_11978[(10)] = inst_11882);
(statearr_11978[(27)] = inst_11916);
(statearr_11978[(20)] = inst_11881);
(statearr_11978[(21)] = inst_11883);
return statearr_11978;
})();var statearr_11979_12050 = state_11941__$1;(statearr_11979_12050[(2)] = null);
(statearr_11979_12050[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (43)))
{var state_11941__$1 = state_11941;var statearr_11980_12051 = state_11941__$1;(statearr_11980_12051[(2)] = null);
(statearr_11980_12051[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (29)))
{var inst_11925 = (state_11941[(2)]);var state_11941__$1 = state_11941;var statearr_11981_12052 = state_11941__$1;(statearr_11981_12052[(2)] = inst_11925);
(statearr_11981_12052[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (44)))
{var inst_11934 = (state_11941[(2)]);var state_11941__$1 = (function (){var statearr_11982 = state_11941;(statearr_11982[(28)] = inst_11934);
return statearr_11982;
})();var statearr_11983_12053 = state_11941__$1;(statearr_11983_12053[(2)] = null);
(statearr_11983_12053[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (6)))
{var inst_11873 = (state_11941[(29)]);var inst_11872 = cljs.core.deref.call(null,cs);var inst_11873__$1 = cljs.core.keys.call(null,inst_11872);var inst_11874 = cljs.core.count.call(null,inst_11873__$1);var inst_11875 = cljs.core.reset_BANG_.call(null,dctr,inst_11874);var inst_11880 = cljs.core.seq.call(null,inst_11873__$1);var inst_11881 = inst_11880;var inst_11882 = null;var inst_11883 = (0);var inst_11884 = (0);var state_11941__$1 = (function (){var statearr_11984 = state_11941;(statearr_11984[(9)] = inst_11884);
(statearr_11984[(10)] = inst_11882);
(statearr_11984[(29)] = inst_11873__$1);
(statearr_11984[(30)] = inst_11875);
(statearr_11984[(20)] = inst_11881);
(statearr_11984[(21)] = inst_11883);
return statearr_11984;
})();var statearr_11985_12054 = state_11941__$1;(statearr_11985_12054[(2)] = null);
(statearr_11985_12054[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (28)))
{var inst_11900 = (state_11941[(25)]);var inst_11881 = (state_11941[(20)]);var inst_11900__$1 = cljs.core.seq.call(null,inst_11881);var state_11941__$1 = (function (){var statearr_11986 = state_11941;(statearr_11986[(25)] = inst_11900__$1);
return statearr_11986;
})();if(inst_11900__$1)
{var statearr_11987_12055 = state_11941__$1;(statearr_11987_12055[(1)] = (33));
} else
{var statearr_11988_12056 = state_11941__$1;(statearr_11988_12056[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (25)))
{var inst_11884 = (state_11941[(9)]);var inst_11883 = (state_11941[(21)]);var inst_11886 = (inst_11884 < inst_11883);var inst_11887 = inst_11886;var state_11941__$1 = state_11941;if(cljs.core.truth_(inst_11887))
{var statearr_11989_12057 = state_11941__$1;(statearr_11989_12057[(1)] = (27));
} else
{var statearr_11990_12058 = state_11941__$1;(statearr_11990_12058[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (34)))
{var state_11941__$1 = state_11941;var statearr_11991_12059 = state_11941__$1;(statearr_11991_12059[(2)] = null);
(statearr_11991_12059[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (17)))
{var state_11941__$1 = state_11941;var statearr_11992_12060 = state_11941__$1;(statearr_11992_12060[(2)] = null);
(statearr_11992_12060[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (3)))
{var inst_11939 = (state_11941[(2)]);var state_11941__$1 = state_11941;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11941__$1,inst_11939);
} else
{if((state_val_11942 === (12)))
{var inst_11868 = (state_11941[(2)]);var state_11941__$1 = state_11941;var statearr_11993_12061 = state_11941__$1;(statearr_11993_12061[(2)] = inst_11868);
(statearr_11993_12061[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (2)))
{var state_11941__$1 = state_11941;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11941__$1,(4),ch);
} else
{if((state_val_11942 === (23)))
{var state_11941__$1 = state_11941;var statearr_11994_12062 = state_11941__$1;(statearr_11994_12062[(2)] = null);
(statearr_11994_12062[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (35)))
{var inst_11923 = (state_11941[(2)]);var state_11941__$1 = state_11941;var statearr_11995_12063 = state_11941__$1;(statearr_11995_12063[(2)] = inst_11923);
(statearr_11995_12063[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (19)))
{var inst_11842 = (state_11941[(7)]);var inst_11846 = cljs.core.chunk_first.call(null,inst_11842);var inst_11847 = cljs.core.chunk_rest.call(null,inst_11842);var inst_11848 = cljs.core.count.call(null,inst_11846);var inst_11822 = inst_11847;var inst_11823 = inst_11846;var inst_11824 = inst_11848;var inst_11825 = (0);var state_11941__$1 = (function (){var statearr_11996 = state_11941;(statearr_11996[(13)] = inst_11823);
(statearr_11996[(14)] = inst_11825);
(statearr_11996[(15)] = inst_11824);
(statearr_11996[(16)] = inst_11822);
return statearr_11996;
})();var statearr_11997_12064 = state_11941__$1;(statearr_11997_12064[(2)] = null);
(statearr_11997_12064[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (11)))
{var inst_11842 = (state_11941[(7)]);var inst_11822 = (state_11941[(16)]);var inst_11842__$1 = cljs.core.seq.call(null,inst_11822);var state_11941__$1 = (function (){var statearr_11998 = state_11941;(statearr_11998[(7)] = inst_11842__$1);
return statearr_11998;
})();if(inst_11842__$1)
{var statearr_11999_12065 = state_11941__$1;(statearr_11999_12065[(1)] = (16));
} else
{var statearr_12000_12066 = state_11941__$1;(statearr_12000_12066[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (9)))
{var inst_11870 = (state_11941[(2)]);var state_11941__$1 = state_11941;var statearr_12001_12067 = state_11941__$1;(statearr_12001_12067[(2)] = inst_11870);
(statearr_12001_12067[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (5)))
{var inst_11820 = cljs.core.deref.call(null,cs);var inst_11821 = cljs.core.seq.call(null,inst_11820);var inst_11822 = inst_11821;var inst_11823 = null;var inst_11824 = (0);var inst_11825 = (0);var state_11941__$1 = (function (){var statearr_12002 = state_11941;(statearr_12002[(13)] = inst_11823);
(statearr_12002[(14)] = inst_11825);
(statearr_12002[(15)] = inst_11824);
(statearr_12002[(16)] = inst_11822);
return statearr_12002;
})();var statearr_12003_12068 = state_11941__$1;(statearr_12003_12068[(2)] = null);
(statearr_12003_12068[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (14)))
{var state_11941__$1 = state_11941;var statearr_12004_12069 = state_11941__$1;(statearr_12004_12069[(2)] = null);
(statearr_12004_12069[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (45)))
{var inst_11931 = (state_11941[(2)]);var state_11941__$1 = state_11941;var statearr_12005_12070 = state_11941__$1;(statearr_12005_12070[(2)] = inst_11931);
(statearr_12005_12070[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (26)))
{var inst_11873 = (state_11941[(29)]);var inst_11927 = (state_11941[(2)]);var inst_11928 = cljs.core.seq.call(null,inst_11873);var state_11941__$1 = (function (){var statearr_12006 = state_11941;(statearr_12006[(31)] = inst_11927);
return statearr_12006;
})();if(inst_11928)
{var statearr_12007_12071 = state_11941__$1;(statearr_12007_12071[(1)] = (42));
} else
{var statearr_12008_12072 = state_11941__$1;(statearr_12008_12072[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (16)))
{var inst_11842 = (state_11941[(7)]);var inst_11844 = cljs.core.chunked_seq_QMARK_.call(null,inst_11842);var state_11941__$1 = state_11941;if(inst_11844)
{var statearr_12009_12073 = state_11941__$1;(statearr_12009_12073[(1)] = (19));
} else
{var statearr_12010_12074 = state_11941__$1;(statearr_12010_12074[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (38)))
{var inst_11920 = (state_11941[(2)]);var state_11941__$1 = state_11941;var statearr_12011_12075 = state_11941__$1;(statearr_12011_12075[(2)] = inst_11920);
(statearr_12011_12075[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (30)))
{var state_11941__$1 = state_11941;var statearr_12012_12076 = state_11941__$1;(statearr_12012_12076[(2)] = null);
(statearr_12012_12076[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (10)))
{var inst_11823 = (state_11941[(13)]);var inst_11825 = (state_11941[(14)]);var inst_11831 = cljs.core._nth.call(null,inst_11823,inst_11825);var inst_11832 = cljs.core.nth.call(null,inst_11831,(0),null);var inst_11833 = cljs.core.nth.call(null,inst_11831,(1),null);var state_11941__$1 = (function (){var statearr_12013 = state_11941;(statearr_12013[(26)] = inst_11832);
return statearr_12013;
})();if(cljs.core.truth_(inst_11833))
{var statearr_12014_12077 = state_11941__$1;(statearr_12014_12077[(1)] = (13));
} else
{var statearr_12015_12078 = state_11941__$1;(statearr_12015_12078[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (18)))
{var inst_11866 = (state_11941[(2)]);var state_11941__$1 = state_11941;var statearr_12016_12079 = state_11941__$1;(statearr_12016_12079[(2)] = inst_11866);
(statearr_12016_12079[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (42)))
{var state_11941__$1 = state_11941;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11941__$1,(45),dchan);
} else
{if((state_val_11942 === (37)))
{var inst_11909 = (state_11941[(23)]);var inst_11900 = (state_11941[(25)]);var inst_11813 = (state_11941[(12)]);var inst_11909__$1 = cljs.core.first.call(null,inst_11900);var inst_11910 = cljs.core.async.put_BANG_.call(null,inst_11909__$1,inst_11813,done);var state_11941__$1 = (function (){var statearr_12017 = state_11941;(statearr_12017[(23)] = inst_11909__$1);
return statearr_12017;
})();if(cljs.core.truth_(inst_11910))
{var statearr_12018_12080 = state_11941__$1;(statearr_12018_12080[(1)] = (39));
} else
{var statearr_12019_12081 = state_11941__$1;(statearr_12019_12081[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11942 === (8)))
{var inst_11825 = (state_11941[(14)]);var inst_11824 = (state_11941[(15)]);var inst_11827 = (inst_11825 < inst_11824);var inst_11828 = inst_11827;var state_11941__$1 = state_11941;if(cljs.core.truth_(inst_11828))
{var statearr_12020_12082 = state_11941__$1;(statearr_12020_12082[(1)] = (10));
} else
{var statearr_12021_12083 = state_11941__$1;(statearr_12021_12083[(1)] = (11));
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
});})(c__6366__auto___12029,cs,m,dchan,dctr,done))
;return ((function (switch__6351__auto__,c__6366__auto___12029,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_12025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12025[(0)] = state_machine__6352__auto__);
(statearr_12025[(1)] = (1));
return statearr_12025;
});
var state_machine__6352__auto____1 = (function (state_11941){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_11941);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e12026){if((e12026 instanceof Object))
{var ex__6355__auto__ = e12026;var statearr_12027_12084 = state_11941;(statearr_12027_12084[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11941);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12026;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12085 = state_11941;
state_11941 = G__12085;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_11941){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_11941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___12029,cs,m,dchan,dctr,done))
})();var state__6368__auto__ = (function (){var statearr_12028 = f__6367__auto__.call(null);(statearr_12028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___12029);
return statearr_12028;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___12029,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj12087 = {};return obj12087;
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
;var m = (function (){if(typeof cljs.core.async.t12207 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12207 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12208){
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
this.meta12208 = meta12208;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12207.cljs$lang$type = true;
cljs.core.async.t12207.cljs$lang$ctorStr = "cljs.core.async/t12207";
cljs.core.async.t12207.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12207");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12207.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12207.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12207.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12207.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12207.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12207.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12207.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12207.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12207.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12209){var self__ = this;
var _12209__$1 = this;return self__.meta12208;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12209,meta12208__$1){var self__ = this;
var _12209__$1 = this;return (new cljs.core.async.t12207(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12208__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12207 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12207(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12208){return (new cljs.core.async.t12207(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12208));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12207(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6366__auto___12326 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___12326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___12326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12279){var state_val_12280 = (state_12279[(1)]);if((state_val_12280 === (7)))
{var inst_12223 = (state_12279[(7)]);var inst_12228 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12223);var state_12279__$1 = state_12279;var statearr_12281_12327 = state_12279__$1;(statearr_12281_12327[(2)] = inst_12228);
(statearr_12281_12327[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (20)))
{var inst_12238 = (state_12279[(8)]);var state_12279__$1 = state_12279;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12279__$1,(23),out,inst_12238);
} else
{if((state_val_12280 === (1)))
{var inst_12213 = (state_12279[(9)]);var inst_12213__$1 = calc_state.call(null);var inst_12214 = cljs.core.seq_QMARK_.call(null,inst_12213__$1);var state_12279__$1 = (function (){var statearr_12282 = state_12279;(statearr_12282[(9)] = inst_12213__$1);
return statearr_12282;
})();if(inst_12214)
{var statearr_12283_12328 = state_12279__$1;(statearr_12283_12328[(1)] = (2));
} else
{var statearr_12284_12329 = state_12279__$1;(statearr_12284_12329[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (24)))
{var inst_12231 = (state_12279[(10)]);var inst_12223 = inst_12231;var state_12279__$1 = (function (){var statearr_12285 = state_12279;(statearr_12285[(7)] = inst_12223);
return statearr_12285;
})();var statearr_12286_12330 = state_12279__$1;(statearr_12286_12330[(2)] = null);
(statearr_12286_12330[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (4)))
{var inst_12213 = (state_12279[(9)]);var inst_12219 = (state_12279[(2)]);var inst_12220 = cljs.core.get.call(null,inst_12219,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12221 = cljs.core.get.call(null,inst_12219,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12222 = cljs.core.get.call(null,inst_12219,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12223 = inst_12213;var state_12279__$1 = (function (){var statearr_12287 = state_12279;(statearr_12287[(7)] = inst_12223);
(statearr_12287[(11)] = inst_12220);
(statearr_12287[(12)] = inst_12222);
(statearr_12287[(13)] = inst_12221);
return statearr_12287;
})();var statearr_12288_12331 = state_12279__$1;(statearr_12288_12331[(2)] = null);
(statearr_12288_12331[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (15)))
{var state_12279__$1 = state_12279;var statearr_12289_12332 = state_12279__$1;(statearr_12289_12332[(2)] = null);
(statearr_12289_12332[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (21)))
{var inst_12231 = (state_12279[(10)]);var inst_12223 = inst_12231;var state_12279__$1 = (function (){var statearr_12290 = state_12279;(statearr_12290[(7)] = inst_12223);
return statearr_12290;
})();var statearr_12291_12333 = state_12279__$1;(statearr_12291_12333[(2)] = null);
(statearr_12291_12333[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (13)))
{var inst_12275 = (state_12279[(2)]);var state_12279__$1 = state_12279;var statearr_12292_12334 = state_12279__$1;(statearr_12292_12334[(2)] = inst_12275);
(statearr_12292_12334[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (22)))
{var inst_12273 = (state_12279[(2)]);var state_12279__$1 = state_12279;var statearr_12293_12335 = state_12279__$1;(statearr_12293_12335[(2)] = inst_12273);
(statearr_12293_12335[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (6)))
{var inst_12277 = (state_12279[(2)]);var state_12279__$1 = state_12279;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12279__$1,inst_12277);
} else
{if((state_val_12280 === (25)))
{var state_12279__$1 = state_12279;var statearr_12294_12336 = state_12279__$1;(statearr_12294_12336[(2)] = null);
(statearr_12294_12336[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (17)))
{var inst_12253 = (state_12279[(14)]);var state_12279__$1 = state_12279;var statearr_12295_12337 = state_12279__$1;(statearr_12295_12337[(2)] = inst_12253);
(statearr_12295_12337[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (3)))
{var inst_12213 = (state_12279[(9)]);var state_12279__$1 = state_12279;var statearr_12296_12338 = state_12279__$1;(statearr_12296_12338[(2)] = inst_12213);
(statearr_12296_12338[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (12)))
{var inst_12253 = (state_12279[(14)]);var inst_12239 = (state_12279[(15)]);var inst_12234 = (state_12279[(16)]);var inst_12253__$1 = inst_12234.call(null,inst_12239);var state_12279__$1 = (function (){var statearr_12297 = state_12279;(statearr_12297[(14)] = inst_12253__$1);
return statearr_12297;
})();if(cljs.core.truth_(inst_12253__$1))
{var statearr_12298_12339 = state_12279__$1;(statearr_12298_12339[(1)] = (17));
} else
{var statearr_12299_12340 = state_12279__$1;(statearr_12299_12340[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (2)))
{var inst_12213 = (state_12279[(9)]);var inst_12216 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12213);var state_12279__$1 = state_12279;var statearr_12300_12341 = state_12279__$1;(statearr_12300_12341[(2)] = inst_12216);
(statearr_12300_12341[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (23)))
{var inst_12264 = (state_12279[(2)]);var state_12279__$1 = state_12279;if(cljs.core.truth_(inst_12264))
{var statearr_12301_12342 = state_12279__$1;(statearr_12301_12342[(1)] = (24));
} else
{var statearr_12302_12343 = state_12279__$1;(statearr_12302_12343[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (19)))
{var inst_12261 = (state_12279[(2)]);var state_12279__$1 = state_12279;if(cljs.core.truth_(inst_12261))
{var statearr_12303_12344 = state_12279__$1;(statearr_12303_12344[(1)] = (20));
} else
{var statearr_12304_12345 = state_12279__$1;(statearr_12304_12345[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (11)))
{var inst_12238 = (state_12279[(8)]);var inst_12244 = (inst_12238 == null);var state_12279__$1 = state_12279;if(cljs.core.truth_(inst_12244))
{var statearr_12305_12346 = state_12279__$1;(statearr_12305_12346[(1)] = (14));
} else
{var statearr_12306_12347 = state_12279__$1;(statearr_12306_12347[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (9)))
{var inst_12231 = (state_12279[(10)]);var inst_12231__$1 = (state_12279[(2)]);var inst_12232 = cljs.core.get.call(null,inst_12231__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12233 = cljs.core.get.call(null,inst_12231__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12234 = cljs.core.get.call(null,inst_12231__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12279__$1 = (function (){var statearr_12307 = state_12279;(statearr_12307[(17)] = inst_12233);
(statearr_12307[(16)] = inst_12234);
(statearr_12307[(10)] = inst_12231__$1);
return statearr_12307;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12279__$1,(10),inst_12232);
} else
{if((state_val_12280 === (5)))
{var inst_12223 = (state_12279[(7)]);var inst_12226 = cljs.core.seq_QMARK_.call(null,inst_12223);var state_12279__$1 = state_12279;if(inst_12226)
{var statearr_12308_12348 = state_12279__$1;(statearr_12308_12348[(1)] = (7));
} else
{var statearr_12309_12349 = state_12279__$1;(statearr_12309_12349[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (14)))
{var inst_12239 = (state_12279[(15)]);var inst_12246 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12239);var state_12279__$1 = state_12279;var statearr_12310_12350 = state_12279__$1;(statearr_12310_12350[(2)] = inst_12246);
(statearr_12310_12350[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (26)))
{var inst_12269 = (state_12279[(2)]);var state_12279__$1 = state_12279;var statearr_12311_12351 = state_12279__$1;(statearr_12311_12351[(2)] = inst_12269);
(statearr_12311_12351[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (16)))
{var inst_12249 = (state_12279[(2)]);var inst_12250 = calc_state.call(null);var inst_12223 = inst_12250;var state_12279__$1 = (function (){var statearr_12312 = state_12279;(statearr_12312[(7)] = inst_12223);
(statearr_12312[(18)] = inst_12249);
return statearr_12312;
})();var statearr_12313_12352 = state_12279__$1;(statearr_12313_12352[(2)] = null);
(statearr_12313_12352[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (10)))
{var inst_12239 = (state_12279[(15)]);var inst_12238 = (state_12279[(8)]);var inst_12237 = (state_12279[(2)]);var inst_12238__$1 = cljs.core.nth.call(null,inst_12237,(0),null);var inst_12239__$1 = cljs.core.nth.call(null,inst_12237,(1),null);var inst_12240 = (inst_12238__$1 == null);var inst_12241 = cljs.core._EQ_.call(null,inst_12239__$1,change);var inst_12242 = (inst_12240) || (inst_12241);var state_12279__$1 = (function (){var statearr_12314 = state_12279;(statearr_12314[(15)] = inst_12239__$1);
(statearr_12314[(8)] = inst_12238__$1);
return statearr_12314;
})();if(cljs.core.truth_(inst_12242))
{var statearr_12315_12353 = state_12279__$1;(statearr_12315_12353[(1)] = (11));
} else
{var statearr_12316_12354 = state_12279__$1;(statearr_12316_12354[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (18)))
{var inst_12239 = (state_12279[(15)]);var inst_12233 = (state_12279[(17)]);var inst_12234 = (state_12279[(16)]);var inst_12256 = cljs.core.empty_QMARK_.call(null,inst_12234);var inst_12257 = inst_12233.call(null,inst_12239);var inst_12258 = cljs.core.not.call(null,inst_12257);var inst_12259 = (inst_12256) && (inst_12258);var state_12279__$1 = state_12279;var statearr_12317_12355 = state_12279__$1;(statearr_12317_12355[(2)] = inst_12259);
(statearr_12317_12355[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (8)))
{var inst_12223 = (state_12279[(7)]);var state_12279__$1 = state_12279;var statearr_12318_12356 = state_12279__$1;(statearr_12318_12356[(2)] = inst_12223);
(statearr_12318_12356[(1)] = (9));
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
});})(c__6366__auto___12326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6351__auto__,c__6366__auto___12326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_12322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12322[(0)] = state_machine__6352__auto__);
(statearr_12322[(1)] = (1));
return statearr_12322;
});
var state_machine__6352__auto____1 = (function (state_12279){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_12279);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e12323){if((e12323 instanceof Object))
{var ex__6355__auto__ = e12323;var statearr_12324_12357 = state_12279;(statearr_12324_12357[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12279);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12323;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12358 = state_12279;
state_12279 = G__12358;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_12279){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_12279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___12326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6368__auto__ = (function (){var statearr_12325 = f__6367__auto__.call(null);(statearr_12325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___12326);
return statearr_12325;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___12326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj12360 = {};return obj12360;
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
return (function (p1__12361_SHARP_){if(cljs.core.truth_(p1__12361_SHARP_.call(null,topic)))
{return p1__12361_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12361_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12484 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12484 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12485){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12485 = meta12485;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12484.cljs$lang$type = true;
cljs.core.async.t12484.cljs$lang$ctorStr = "cljs.core.async/t12484";
cljs.core.async.t12484.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12484");
});})(mults,ensure_mult))
;
cljs.core.async.t12484.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12484.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12484.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12484.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12484.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12484.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12484.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12484.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12486){var self__ = this;
var _12486__$1 = this;return self__.meta12485;
});})(mults,ensure_mult))
;
cljs.core.async.t12484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12486,meta12485__$1){var self__ = this;
var _12486__$1 = this;return (new cljs.core.async.t12484(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12485__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12484 = ((function (mults,ensure_mult){
return (function __GT_t12484(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12485){return (new cljs.core.async.t12484(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12485));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12484(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6366__auto___12606 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___12606,mults,ensure_mult,p){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___12606,mults,ensure_mult,p){
return (function (state_12558){var state_val_12559 = (state_12558[(1)]);if((state_val_12559 === (7)))
{var inst_12554 = (state_12558[(2)]);var state_12558__$1 = state_12558;var statearr_12560_12607 = state_12558__$1;(statearr_12560_12607[(2)] = inst_12554);
(statearr_12560_12607[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (20)))
{var state_12558__$1 = state_12558;var statearr_12561_12608 = state_12558__$1;(statearr_12561_12608[(2)] = null);
(statearr_12561_12608[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (1)))
{var state_12558__$1 = state_12558;var statearr_12562_12609 = state_12558__$1;(statearr_12562_12609[(2)] = null);
(statearr_12562_12609[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (24)))
{var inst_12537 = (state_12558[(7)]);var inst_12546 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12537);var state_12558__$1 = state_12558;var statearr_12563_12610 = state_12558__$1;(statearr_12563_12610[(2)] = inst_12546);
(statearr_12563_12610[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (4)))
{var inst_12489 = (state_12558[(8)]);var inst_12489__$1 = (state_12558[(2)]);var inst_12490 = (inst_12489__$1 == null);var state_12558__$1 = (function (){var statearr_12564 = state_12558;(statearr_12564[(8)] = inst_12489__$1);
return statearr_12564;
})();if(cljs.core.truth_(inst_12490))
{var statearr_12565_12611 = state_12558__$1;(statearr_12565_12611[(1)] = (5));
} else
{var statearr_12566_12612 = state_12558__$1;(statearr_12566_12612[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (15)))
{var inst_12531 = (state_12558[(2)]);var state_12558__$1 = state_12558;var statearr_12567_12613 = state_12558__$1;(statearr_12567_12613[(2)] = inst_12531);
(statearr_12567_12613[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (21)))
{var inst_12551 = (state_12558[(2)]);var state_12558__$1 = (function (){var statearr_12568 = state_12558;(statearr_12568[(9)] = inst_12551);
return statearr_12568;
})();var statearr_12569_12614 = state_12558__$1;(statearr_12569_12614[(2)] = null);
(statearr_12569_12614[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (13)))
{var inst_12513 = (state_12558[(10)]);var inst_12515 = cljs.core.chunked_seq_QMARK_.call(null,inst_12513);var state_12558__$1 = state_12558;if(inst_12515)
{var statearr_12570_12615 = state_12558__$1;(statearr_12570_12615[(1)] = (16));
} else
{var statearr_12571_12616 = state_12558__$1;(statearr_12571_12616[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (22)))
{var inst_12543 = (state_12558[(2)]);var state_12558__$1 = state_12558;if(cljs.core.truth_(inst_12543))
{var statearr_12572_12617 = state_12558__$1;(statearr_12572_12617[(1)] = (23));
} else
{var statearr_12573_12618 = state_12558__$1;(statearr_12573_12618[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (6)))
{var inst_12539 = (state_12558[(11)]);var inst_12489 = (state_12558[(8)]);var inst_12537 = (state_12558[(7)]);var inst_12537__$1 = topic_fn.call(null,inst_12489);var inst_12538 = cljs.core.deref.call(null,mults);var inst_12539__$1 = cljs.core.get.call(null,inst_12538,inst_12537__$1);var state_12558__$1 = (function (){var statearr_12574 = state_12558;(statearr_12574[(11)] = inst_12539__$1);
(statearr_12574[(7)] = inst_12537__$1);
return statearr_12574;
})();if(cljs.core.truth_(inst_12539__$1))
{var statearr_12575_12619 = state_12558__$1;(statearr_12575_12619[(1)] = (19));
} else
{var statearr_12576_12620 = state_12558__$1;(statearr_12576_12620[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (25)))
{var inst_12548 = (state_12558[(2)]);var state_12558__$1 = state_12558;var statearr_12577_12621 = state_12558__$1;(statearr_12577_12621[(2)] = inst_12548);
(statearr_12577_12621[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (17)))
{var inst_12513 = (state_12558[(10)]);var inst_12522 = cljs.core.first.call(null,inst_12513);var inst_12523 = cljs.core.async.muxch_STAR_.call(null,inst_12522);var inst_12524 = cljs.core.async.close_BANG_.call(null,inst_12523);var inst_12525 = cljs.core.next.call(null,inst_12513);var inst_12499 = inst_12525;var inst_12500 = null;var inst_12501 = (0);var inst_12502 = (0);var state_12558__$1 = (function (){var statearr_12578 = state_12558;(statearr_12578[(12)] = inst_12500);
(statearr_12578[(13)] = inst_12501);
(statearr_12578[(14)] = inst_12524);
(statearr_12578[(15)] = inst_12502);
(statearr_12578[(16)] = inst_12499);
return statearr_12578;
})();var statearr_12579_12622 = state_12558__$1;(statearr_12579_12622[(2)] = null);
(statearr_12579_12622[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (3)))
{var inst_12556 = (state_12558[(2)]);var state_12558__$1 = state_12558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12558__$1,inst_12556);
} else
{if((state_val_12559 === (12)))
{var inst_12533 = (state_12558[(2)]);var state_12558__$1 = state_12558;var statearr_12580_12623 = state_12558__$1;(statearr_12580_12623[(2)] = inst_12533);
(statearr_12580_12623[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (2)))
{var state_12558__$1 = state_12558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12558__$1,(4),ch);
} else
{if((state_val_12559 === (23)))
{var state_12558__$1 = state_12558;var statearr_12581_12624 = state_12558__$1;(statearr_12581_12624[(2)] = null);
(statearr_12581_12624[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (19)))
{var inst_12539 = (state_12558[(11)]);var inst_12489 = (state_12558[(8)]);var inst_12541 = cljs.core.async.muxch_STAR_.call(null,inst_12539);var state_12558__$1 = state_12558;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12558__$1,(22),inst_12541,inst_12489);
} else
{if((state_val_12559 === (11)))
{var inst_12513 = (state_12558[(10)]);var inst_12499 = (state_12558[(16)]);var inst_12513__$1 = cljs.core.seq.call(null,inst_12499);var state_12558__$1 = (function (){var statearr_12582 = state_12558;(statearr_12582[(10)] = inst_12513__$1);
return statearr_12582;
})();if(inst_12513__$1)
{var statearr_12583_12625 = state_12558__$1;(statearr_12583_12625[(1)] = (13));
} else
{var statearr_12584_12626 = state_12558__$1;(statearr_12584_12626[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (9)))
{var inst_12535 = (state_12558[(2)]);var state_12558__$1 = state_12558;var statearr_12585_12627 = state_12558__$1;(statearr_12585_12627[(2)] = inst_12535);
(statearr_12585_12627[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (5)))
{var inst_12496 = cljs.core.deref.call(null,mults);var inst_12497 = cljs.core.vals.call(null,inst_12496);var inst_12498 = cljs.core.seq.call(null,inst_12497);var inst_12499 = inst_12498;var inst_12500 = null;var inst_12501 = (0);var inst_12502 = (0);var state_12558__$1 = (function (){var statearr_12586 = state_12558;(statearr_12586[(12)] = inst_12500);
(statearr_12586[(13)] = inst_12501);
(statearr_12586[(15)] = inst_12502);
(statearr_12586[(16)] = inst_12499);
return statearr_12586;
})();var statearr_12587_12628 = state_12558__$1;(statearr_12587_12628[(2)] = null);
(statearr_12587_12628[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (14)))
{var state_12558__$1 = state_12558;var statearr_12591_12629 = state_12558__$1;(statearr_12591_12629[(2)] = null);
(statearr_12591_12629[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (16)))
{var inst_12513 = (state_12558[(10)]);var inst_12517 = cljs.core.chunk_first.call(null,inst_12513);var inst_12518 = cljs.core.chunk_rest.call(null,inst_12513);var inst_12519 = cljs.core.count.call(null,inst_12517);var inst_12499 = inst_12518;var inst_12500 = inst_12517;var inst_12501 = inst_12519;var inst_12502 = (0);var state_12558__$1 = (function (){var statearr_12592 = state_12558;(statearr_12592[(12)] = inst_12500);
(statearr_12592[(13)] = inst_12501);
(statearr_12592[(15)] = inst_12502);
(statearr_12592[(16)] = inst_12499);
return statearr_12592;
})();var statearr_12593_12630 = state_12558__$1;(statearr_12593_12630[(2)] = null);
(statearr_12593_12630[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (10)))
{var inst_12500 = (state_12558[(12)]);var inst_12501 = (state_12558[(13)]);var inst_12502 = (state_12558[(15)]);var inst_12499 = (state_12558[(16)]);var inst_12507 = cljs.core._nth.call(null,inst_12500,inst_12502);var inst_12508 = cljs.core.async.muxch_STAR_.call(null,inst_12507);var inst_12509 = cljs.core.async.close_BANG_.call(null,inst_12508);var inst_12510 = (inst_12502 + (1));var tmp12588 = inst_12500;var tmp12589 = inst_12501;var tmp12590 = inst_12499;var inst_12499__$1 = tmp12590;var inst_12500__$1 = tmp12588;var inst_12501__$1 = tmp12589;var inst_12502__$1 = inst_12510;var state_12558__$1 = (function (){var statearr_12594 = state_12558;(statearr_12594[(12)] = inst_12500__$1);
(statearr_12594[(13)] = inst_12501__$1);
(statearr_12594[(15)] = inst_12502__$1);
(statearr_12594[(17)] = inst_12509);
(statearr_12594[(16)] = inst_12499__$1);
return statearr_12594;
})();var statearr_12595_12631 = state_12558__$1;(statearr_12595_12631[(2)] = null);
(statearr_12595_12631[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (18)))
{var inst_12528 = (state_12558[(2)]);var state_12558__$1 = state_12558;var statearr_12596_12632 = state_12558__$1;(statearr_12596_12632[(2)] = inst_12528);
(statearr_12596_12632[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (8)))
{var inst_12501 = (state_12558[(13)]);var inst_12502 = (state_12558[(15)]);var inst_12504 = (inst_12502 < inst_12501);var inst_12505 = inst_12504;var state_12558__$1 = state_12558;if(cljs.core.truth_(inst_12505))
{var statearr_12597_12633 = state_12558__$1;(statearr_12597_12633[(1)] = (10));
} else
{var statearr_12598_12634 = state_12558__$1;(statearr_12598_12634[(1)] = (11));
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
});})(c__6366__auto___12606,mults,ensure_mult,p))
;return ((function (switch__6351__auto__,c__6366__auto___12606,mults,ensure_mult,p){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_12602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12602[(0)] = state_machine__6352__auto__);
(statearr_12602[(1)] = (1));
return statearr_12602;
});
var state_machine__6352__auto____1 = (function (state_12558){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_12558);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e12603){if((e12603 instanceof Object))
{var ex__6355__auto__ = e12603;var statearr_12604_12635 = state_12558;(statearr_12604_12635[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12558);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12603;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12636 = state_12558;
state_12558 = G__12636;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_12558){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_12558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___12606,mults,ensure_mult,p))
})();var state__6368__auto__ = (function (){var statearr_12605 = f__6367__auto__.call(null);(statearr_12605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___12606);
return statearr_12605;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___12606,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6366__auto___12773 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___12773,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___12773,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12743){var state_val_12744 = (state_12743[(1)]);if((state_val_12744 === (7)))
{var state_12743__$1 = state_12743;var statearr_12745_12774 = state_12743__$1;(statearr_12745_12774[(2)] = null);
(statearr_12745_12774[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12744 === (1)))
{var state_12743__$1 = state_12743;var statearr_12746_12775 = state_12743__$1;(statearr_12746_12775[(2)] = null);
(statearr_12746_12775[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12744 === (4)))
{var inst_12707 = (state_12743[(7)]);var inst_12709 = (inst_12707 < cnt);var state_12743__$1 = state_12743;if(cljs.core.truth_(inst_12709))
{var statearr_12747_12776 = state_12743__$1;(statearr_12747_12776[(1)] = (6));
} else
{var statearr_12748_12777 = state_12743__$1;(statearr_12748_12777[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12744 === (15)))
{var inst_12739 = (state_12743[(2)]);var state_12743__$1 = state_12743;var statearr_12749_12778 = state_12743__$1;(statearr_12749_12778[(2)] = inst_12739);
(statearr_12749_12778[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12744 === (13)))
{var inst_12732 = cljs.core.async.close_BANG_.call(null,out);var state_12743__$1 = state_12743;var statearr_12750_12779 = state_12743__$1;(statearr_12750_12779[(2)] = inst_12732);
(statearr_12750_12779[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12744 === (6)))
{var state_12743__$1 = state_12743;var statearr_12751_12780 = state_12743__$1;(statearr_12751_12780[(2)] = null);
(statearr_12751_12780[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12744 === (3)))
{var inst_12741 = (state_12743[(2)]);var state_12743__$1 = state_12743;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12743__$1,inst_12741);
} else
{if((state_val_12744 === (12)))
{var inst_12729 = (state_12743[(8)]);var inst_12729__$1 = (state_12743[(2)]);var inst_12730 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12729__$1);var state_12743__$1 = (function (){var statearr_12752 = state_12743;(statearr_12752[(8)] = inst_12729__$1);
return statearr_12752;
})();if(cljs.core.truth_(inst_12730))
{var statearr_12753_12781 = state_12743__$1;(statearr_12753_12781[(1)] = (13));
} else
{var statearr_12754_12782 = state_12743__$1;(statearr_12754_12782[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12744 === (2)))
{var inst_12706 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12707 = (0);var state_12743__$1 = (function (){var statearr_12755 = state_12743;(statearr_12755[(7)] = inst_12707);
(statearr_12755[(9)] = inst_12706);
return statearr_12755;
})();var statearr_12756_12783 = state_12743__$1;(statearr_12756_12783[(2)] = null);
(statearr_12756_12783[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12744 === (11)))
{var inst_12707 = (state_12743[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12743,(10),Object,null,(9));var inst_12716 = chs__$1.call(null,inst_12707);var inst_12717 = done.call(null,inst_12707);var inst_12718 = cljs.core.async.take_BANG_.call(null,inst_12716,inst_12717);var state_12743__$1 = state_12743;var statearr_12757_12784 = state_12743__$1;(statearr_12757_12784[(2)] = inst_12718);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12743__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12744 === (9)))
{var inst_12707 = (state_12743[(7)]);var inst_12720 = (state_12743[(2)]);var inst_12721 = (inst_12707 + (1));var inst_12707__$1 = inst_12721;var state_12743__$1 = (function (){var statearr_12758 = state_12743;(statearr_12758[(7)] = inst_12707__$1);
(statearr_12758[(10)] = inst_12720);
return statearr_12758;
})();var statearr_12759_12785 = state_12743__$1;(statearr_12759_12785[(2)] = null);
(statearr_12759_12785[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12744 === (5)))
{var inst_12727 = (state_12743[(2)]);var state_12743__$1 = (function (){var statearr_12760 = state_12743;(statearr_12760[(11)] = inst_12727);
return statearr_12760;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12743__$1,(12),dchan);
} else
{if((state_val_12744 === (14)))
{var inst_12729 = (state_12743[(8)]);var inst_12734 = cljs.core.apply.call(null,f,inst_12729);var state_12743__$1 = state_12743;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12743__$1,(16),out,inst_12734);
} else
{if((state_val_12744 === (16)))
{var inst_12736 = (state_12743[(2)]);var state_12743__$1 = (function (){var statearr_12761 = state_12743;(statearr_12761[(12)] = inst_12736);
return statearr_12761;
})();var statearr_12762_12786 = state_12743__$1;(statearr_12762_12786[(2)] = null);
(statearr_12762_12786[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12744 === (10)))
{var inst_12711 = (state_12743[(2)]);var inst_12712 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12743__$1 = (function (){var statearr_12763 = state_12743;(statearr_12763[(13)] = inst_12711);
return statearr_12763;
})();var statearr_12764_12787 = state_12743__$1;(statearr_12764_12787[(2)] = inst_12712);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12743__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12744 === (8)))
{var inst_12725 = (state_12743[(2)]);var state_12743__$1 = state_12743;var statearr_12765_12788 = state_12743__$1;(statearr_12765_12788[(2)] = inst_12725);
(statearr_12765_12788[(1)] = (5));
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
});})(c__6366__auto___12773,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6351__auto__,c__6366__auto___12773,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_12769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12769[(0)] = state_machine__6352__auto__);
(statearr_12769[(1)] = (1));
return statearr_12769;
});
var state_machine__6352__auto____1 = (function (state_12743){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_12743);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e12770){if((e12770 instanceof Object))
{var ex__6355__auto__ = e12770;var statearr_12771_12789 = state_12743;(statearr_12771_12789[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12743);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12770;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12790 = state_12743;
state_12743 = G__12790;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_12743){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_12743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___12773,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6368__auto__ = (function (){var statearr_12772 = f__6367__auto__.call(null);(statearr_12772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___12773);
return statearr_12772;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___12773,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6366__auto___12898 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___12898,out){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___12898,out){
return (function (state_12874){var state_val_12875 = (state_12874[(1)]);if((state_val_12875 === (7)))
{var inst_12854 = (state_12874[(7)]);var inst_12853 = (state_12874[(8)]);var inst_12853__$1 = (state_12874[(2)]);var inst_12854__$1 = cljs.core.nth.call(null,inst_12853__$1,(0),null);var inst_12855 = cljs.core.nth.call(null,inst_12853__$1,(1),null);var inst_12856 = (inst_12854__$1 == null);var state_12874__$1 = (function (){var statearr_12876 = state_12874;(statearr_12876[(9)] = inst_12855);
(statearr_12876[(7)] = inst_12854__$1);
(statearr_12876[(8)] = inst_12853__$1);
return statearr_12876;
})();if(cljs.core.truth_(inst_12856))
{var statearr_12877_12899 = state_12874__$1;(statearr_12877_12899[(1)] = (8));
} else
{var statearr_12878_12900 = state_12874__$1;(statearr_12878_12900[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12875 === (1)))
{var inst_12845 = cljs.core.vec.call(null,chs);var inst_12846 = inst_12845;var state_12874__$1 = (function (){var statearr_12879 = state_12874;(statearr_12879[(10)] = inst_12846);
return statearr_12879;
})();var statearr_12880_12901 = state_12874__$1;(statearr_12880_12901[(2)] = null);
(statearr_12880_12901[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12875 === (4)))
{var inst_12846 = (state_12874[(10)]);var state_12874__$1 = state_12874;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12874__$1,(7),inst_12846);
} else
{if((state_val_12875 === (6)))
{var inst_12870 = (state_12874[(2)]);var state_12874__$1 = state_12874;var statearr_12881_12902 = state_12874__$1;(statearr_12881_12902[(2)] = inst_12870);
(statearr_12881_12902[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12875 === (3)))
{var inst_12872 = (state_12874[(2)]);var state_12874__$1 = state_12874;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12874__$1,inst_12872);
} else
{if((state_val_12875 === (2)))
{var inst_12846 = (state_12874[(10)]);var inst_12848 = cljs.core.count.call(null,inst_12846);var inst_12849 = (inst_12848 > (0));var state_12874__$1 = state_12874;if(cljs.core.truth_(inst_12849))
{var statearr_12883_12903 = state_12874__$1;(statearr_12883_12903[(1)] = (4));
} else
{var statearr_12884_12904 = state_12874__$1;(statearr_12884_12904[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12875 === (11)))
{var inst_12846 = (state_12874[(10)]);var inst_12863 = (state_12874[(2)]);var tmp12882 = inst_12846;var inst_12846__$1 = tmp12882;var state_12874__$1 = (function (){var statearr_12885 = state_12874;(statearr_12885[(10)] = inst_12846__$1);
(statearr_12885[(11)] = inst_12863);
return statearr_12885;
})();var statearr_12886_12905 = state_12874__$1;(statearr_12886_12905[(2)] = null);
(statearr_12886_12905[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12875 === (9)))
{var inst_12854 = (state_12874[(7)]);var state_12874__$1 = state_12874;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12874__$1,(11),out,inst_12854);
} else
{if((state_val_12875 === (5)))
{var inst_12868 = cljs.core.async.close_BANG_.call(null,out);var state_12874__$1 = state_12874;var statearr_12887_12906 = state_12874__$1;(statearr_12887_12906[(2)] = inst_12868);
(statearr_12887_12906[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12875 === (10)))
{var inst_12866 = (state_12874[(2)]);var state_12874__$1 = state_12874;var statearr_12888_12907 = state_12874__$1;(statearr_12888_12907[(2)] = inst_12866);
(statearr_12888_12907[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12875 === (8)))
{var inst_12855 = (state_12874[(9)]);var inst_12854 = (state_12874[(7)]);var inst_12846 = (state_12874[(10)]);var inst_12853 = (state_12874[(8)]);var inst_12858 = (function (){var c = inst_12855;var v = inst_12854;var vec__12851 = inst_12853;var cs = inst_12846;return ((function (c,v,vec__12851,cs,inst_12855,inst_12854,inst_12846,inst_12853,state_val_12875,c__6366__auto___12898,out){
return (function (p1__12791_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12791_SHARP_);
});
;})(c,v,vec__12851,cs,inst_12855,inst_12854,inst_12846,inst_12853,state_val_12875,c__6366__auto___12898,out))
})();var inst_12859 = cljs.core.filterv.call(null,inst_12858,inst_12846);var inst_12846__$1 = inst_12859;var state_12874__$1 = (function (){var statearr_12889 = state_12874;(statearr_12889[(10)] = inst_12846__$1);
return statearr_12889;
})();var statearr_12890_12908 = state_12874__$1;(statearr_12890_12908[(2)] = null);
(statearr_12890_12908[(1)] = (2));
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
});})(c__6366__auto___12898,out))
;return ((function (switch__6351__auto__,c__6366__auto___12898,out){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_12894 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12894[(0)] = state_machine__6352__auto__);
(statearr_12894[(1)] = (1));
return statearr_12894;
});
var state_machine__6352__auto____1 = (function (state_12874){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_12874);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e12895){if((e12895 instanceof Object))
{var ex__6355__auto__ = e12895;var statearr_12896_12909 = state_12874;(statearr_12896_12909[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12874);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12895;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12910 = state_12874;
state_12874 = G__12910;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_12874){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_12874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___12898,out))
})();var state__6368__auto__ = (function (){var statearr_12897 = f__6367__auto__.call(null);(statearr_12897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___12898);
return statearr_12897;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___12898,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6366__auto___13003 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___13003,out){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___13003,out){
return (function (state_12980){var state_val_12981 = (state_12980[(1)]);if((state_val_12981 === (7)))
{var inst_12962 = (state_12980[(7)]);var inst_12962__$1 = (state_12980[(2)]);var inst_12963 = (inst_12962__$1 == null);var inst_12964 = cljs.core.not.call(null,inst_12963);var state_12980__$1 = (function (){var statearr_12982 = state_12980;(statearr_12982[(7)] = inst_12962__$1);
return statearr_12982;
})();if(inst_12964)
{var statearr_12983_13004 = state_12980__$1;(statearr_12983_13004[(1)] = (8));
} else
{var statearr_12984_13005 = state_12980__$1;(statearr_12984_13005[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12981 === (1)))
{var inst_12957 = (0);var state_12980__$1 = (function (){var statearr_12985 = state_12980;(statearr_12985[(8)] = inst_12957);
return statearr_12985;
})();var statearr_12986_13006 = state_12980__$1;(statearr_12986_13006[(2)] = null);
(statearr_12986_13006[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12981 === (4)))
{var state_12980__$1 = state_12980;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12980__$1,(7),ch);
} else
{if((state_val_12981 === (6)))
{var inst_12975 = (state_12980[(2)]);var state_12980__$1 = state_12980;var statearr_12987_13007 = state_12980__$1;(statearr_12987_13007[(2)] = inst_12975);
(statearr_12987_13007[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12981 === (3)))
{var inst_12977 = (state_12980[(2)]);var inst_12978 = cljs.core.async.close_BANG_.call(null,out);var state_12980__$1 = (function (){var statearr_12988 = state_12980;(statearr_12988[(9)] = inst_12977);
return statearr_12988;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12980__$1,inst_12978);
} else
{if((state_val_12981 === (2)))
{var inst_12957 = (state_12980[(8)]);var inst_12959 = (inst_12957 < n);var state_12980__$1 = state_12980;if(cljs.core.truth_(inst_12959))
{var statearr_12989_13008 = state_12980__$1;(statearr_12989_13008[(1)] = (4));
} else
{var statearr_12990_13009 = state_12980__$1;(statearr_12990_13009[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12981 === (11)))
{var inst_12957 = (state_12980[(8)]);var inst_12967 = (state_12980[(2)]);var inst_12968 = (inst_12957 + (1));var inst_12957__$1 = inst_12968;var state_12980__$1 = (function (){var statearr_12991 = state_12980;(statearr_12991[(10)] = inst_12967);
(statearr_12991[(8)] = inst_12957__$1);
return statearr_12991;
})();var statearr_12992_13010 = state_12980__$1;(statearr_12992_13010[(2)] = null);
(statearr_12992_13010[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12981 === (9)))
{var state_12980__$1 = state_12980;var statearr_12993_13011 = state_12980__$1;(statearr_12993_13011[(2)] = null);
(statearr_12993_13011[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12981 === (5)))
{var state_12980__$1 = state_12980;var statearr_12994_13012 = state_12980__$1;(statearr_12994_13012[(2)] = null);
(statearr_12994_13012[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12981 === (10)))
{var inst_12972 = (state_12980[(2)]);var state_12980__$1 = state_12980;var statearr_12995_13013 = state_12980__$1;(statearr_12995_13013[(2)] = inst_12972);
(statearr_12995_13013[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12981 === (8)))
{var inst_12962 = (state_12980[(7)]);var state_12980__$1 = state_12980;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12980__$1,(11),out,inst_12962);
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
});})(c__6366__auto___13003,out))
;return ((function (switch__6351__auto__,c__6366__auto___13003,out){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_12999 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12999[(0)] = state_machine__6352__auto__);
(statearr_12999[(1)] = (1));
return statearr_12999;
});
var state_machine__6352__auto____1 = (function (state_12980){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_12980);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e13000){if((e13000 instanceof Object))
{var ex__6355__auto__ = e13000;var statearr_13001_13014 = state_12980;(statearr_13001_13014[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12980);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13000;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13015 = state_12980;
state_12980 = G__13015;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_12980){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_12980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___13003,out))
})();var state__6368__auto__ = (function (){var statearr_13002 = f__6367__auto__.call(null);(statearr_13002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___13003);
return statearr_13002;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___13003,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6366__auto___13112 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___13112,out){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___13112,out){
return (function (state_13087){var state_val_13088 = (state_13087[(1)]);if((state_val_13088 === (7)))
{var inst_13082 = (state_13087[(2)]);var state_13087__$1 = state_13087;var statearr_13089_13113 = state_13087__$1;(statearr_13089_13113[(2)] = inst_13082);
(statearr_13089_13113[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13088 === (1)))
{var inst_13064 = null;var state_13087__$1 = (function (){var statearr_13090 = state_13087;(statearr_13090[(7)] = inst_13064);
return statearr_13090;
})();var statearr_13091_13114 = state_13087__$1;(statearr_13091_13114[(2)] = null);
(statearr_13091_13114[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13088 === (4)))
{var inst_13067 = (state_13087[(8)]);var inst_13067__$1 = (state_13087[(2)]);var inst_13068 = (inst_13067__$1 == null);var inst_13069 = cljs.core.not.call(null,inst_13068);var state_13087__$1 = (function (){var statearr_13092 = state_13087;(statearr_13092[(8)] = inst_13067__$1);
return statearr_13092;
})();if(inst_13069)
{var statearr_13093_13115 = state_13087__$1;(statearr_13093_13115[(1)] = (5));
} else
{var statearr_13094_13116 = state_13087__$1;(statearr_13094_13116[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13088 === (6)))
{var state_13087__$1 = state_13087;var statearr_13095_13117 = state_13087__$1;(statearr_13095_13117[(2)] = null);
(statearr_13095_13117[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13088 === (3)))
{var inst_13084 = (state_13087[(2)]);var inst_13085 = cljs.core.async.close_BANG_.call(null,out);var state_13087__$1 = (function (){var statearr_13096 = state_13087;(statearr_13096[(9)] = inst_13084);
return statearr_13096;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13087__$1,inst_13085);
} else
{if((state_val_13088 === (2)))
{var state_13087__$1 = state_13087;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13087__$1,(4),ch);
} else
{if((state_val_13088 === (11)))
{var inst_13067 = (state_13087[(8)]);var inst_13076 = (state_13087[(2)]);var inst_13064 = inst_13067;var state_13087__$1 = (function (){var statearr_13097 = state_13087;(statearr_13097[(7)] = inst_13064);
(statearr_13097[(10)] = inst_13076);
return statearr_13097;
})();var statearr_13098_13118 = state_13087__$1;(statearr_13098_13118[(2)] = null);
(statearr_13098_13118[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13088 === (9)))
{var inst_13067 = (state_13087[(8)]);var state_13087__$1 = state_13087;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13087__$1,(11),out,inst_13067);
} else
{if((state_val_13088 === (5)))
{var inst_13064 = (state_13087[(7)]);var inst_13067 = (state_13087[(8)]);var inst_13071 = cljs.core._EQ_.call(null,inst_13067,inst_13064);var state_13087__$1 = state_13087;if(inst_13071)
{var statearr_13100_13119 = state_13087__$1;(statearr_13100_13119[(1)] = (8));
} else
{var statearr_13101_13120 = state_13087__$1;(statearr_13101_13120[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13088 === (10)))
{var inst_13079 = (state_13087[(2)]);var state_13087__$1 = state_13087;var statearr_13102_13121 = state_13087__$1;(statearr_13102_13121[(2)] = inst_13079);
(statearr_13102_13121[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13088 === (8)))
{var inst_13064 = (state_13087[(7)]);var tmp13099 = inst_13064;var inst_13064__$1 = tmp13099;var state_13087__$1 = (function (){var statearr_13103 = state_13087;(statearr_13103[(7)] = inst_13064__$1);
return statearr_13103;
})();var statearr_13104_13122 = state_13087__$1;(statearr_13104_13122[(2)] = null);
(statearr_13104_13122[(1)] = (2));
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
});})(c__6366__auto___13112,out))
;return ((function (switch__6351__auto__,c__6366__auto___13112,out){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_13108 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13108[(0)] = state_machine__6352__auto__);
(statearr_13108[(1)] = (1));
return statearr_13108;
});
var state_machine__6352__auto____1 = (function (state_13087){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_13087);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e13109){if((e13109 instanceof Object))
{var ex__6355__auto__ = e13109;var statearr_13110_13123 = state_13087;(statearr_13110_13123[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13087);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13109;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13124 = state_13087;
state_13087 = G__13124;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_13087){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_13087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___13112,out))
})();var state__6368__auto__ = (function (){var statearr_13111 = f__6367__auto__.call(null);(statearr_13111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___13112);
return statearr_13111;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___13112,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6366__auto___13259 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___13259,out){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___13259,out){
return (function (state_13229){var state_val_13230 = (state_13229[(1)]);if((state_val_13230 === (7)))
{var inst_13225 = (state_13229[(2)]);var state_13229__$1 = state_13229;var statearr_13231_13260 = state_13229__$1;(statearr_13231_13260[(2)] = inst_13225);
(statearr_13231_13260[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13230 === (1)))
{var inst_13192 = (new Array(n));var inst_13193 = inst_13192;var inst_13194 = (0);var state_13229__$1 = (function (){var statearr_13232 = state_13229;(statearr_13232[(7)] = inst_13194);
(statearr_13232[(8)] = inst_13193);
return statearr_13232;
})();var statearr_13233_13261 = state_13229__$1;(statearr_13233_13261[(2)] = null);
(statearr_13233_13261[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13230 === (4)))
{var inst_13197 = (state_13229[(9)]);var inst_13197__$1 = (state_13229[(2)]);var inst_13198 = (inst_13197__$1 == null);var inst_13199 = cljs.core.not.call(null,inst_13198);var state_13229__$1 = (function (){var statearr_13234 = state_13229;(statearr_13234[(9)] = inst_13197__$1);
return statearr_13234;
})();if(inst_13199)
{var statearr_13235_13262 = state_13229__$1;(statearr_13235_13262[(1)] = (5));
} else
{var statearr_13236_13263 = state_13229__$1;(statearr_13236_13263[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13230 === (15)))
{var inst_13219 = (state_13229[(2)]);var state_13229__$1 = state_13229;var statearr_13237_13264 = state_13229__$1;(statearr_13237_13264[(2)] = inst_13219);
(statearr_13237_13264[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13230 === (13)))
{var state_13229__$1 = state_13229;var statearr_13238_13265 = state_13229__$1;(statearr_13238_13265[(2)] = null);
(statearr_13238_13265[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13230 === (6)))
{var inst_13194 = (state_13229[(7)]);var inst_13215 = (inst_13194 > (0));var state_13229__$1 = state_13229;if(cljs.core.truth_(inst_13215))
{var statearr_13239_13266 = state_13229__$1;(statearr_13239_13266[(1)] = (12));
} else
{var statearr_13240_13267 = state_13229__$1;(statearr_13240_13267[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13230 === (3)))
{var inst_13227 = (state_13229[(2)]);var state_13229__$1 = state_13229;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13229__$1,inst_13227);
} else
{if((state_val_13230 === (12)))
{var inst_13193 = (state_13229[(8)]);var inst_13217 = cljs.core.vec.call(null,inst_13193);var state_13229__$1 = state_13229;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13229__$1,(15),out,inst_13217);
} else
{if((state_val_13230 === (2)))
{var state_13229__$1 = state_13229;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13229__$1,(4),ch);
} else
{if((state_val_13230 === (11)))
{var inst_13209 = (state_13229[(2)]);var inst_13210 = (new Array(n));var inst_13193 = inst_13210;var inst_13194 = (0);var state_13229__$1 = (function (){var statearr_13241 = state_13229;(statearr_13241[(7)] = inst_13194);
(statearr_13241[(10)] = inst_13209);
(statearr_13241[(8)] = inst_13193);
return statearr_13241;
})();var statearr_13242_13268 = state_13229__$1;(statearr_13242_13268[(2)] = null);
(statearr_13242_13268[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13230 === (9)))
{var inst_13193 = (state_13229[(8)]);var inst_13207 = cljs.core.vec.call(null,inst_13193);var state_13229__$1 = state_13229;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13229__$1,(11),out,inst_13207);
} else
{if((state_val_13230 === (5)))
{var inst_13202 = (state_13229[(11)]);var inst_13194 = (state_13229[(7)]);var inst_13197 = (state_13229[(9)]);var inst_13193 = (state_13229[(8)]);var inst_13201 = (inst_13193[inst_13194] = inst_13197);var inst_13202__$1 = (inst_13194 + (1));var inst_13203 = (inst_13202__$1 < n);var state_13229__$1 = (function (){var statearr_13243 = state_13229;(statearr_13243[(11)] = inst_13202__$1);
(statearr_13243[(12)] = inst_13201);
return statearr_13243;
})();if(cljs.core.truth_(inst_13203))
{var statearr_13244_13269 = state_13229__$1;(statearr_13244_13269[(1)] = (8));
} else
{var statearr_13245_13270 = state_13229__$1;(statearr_13245_13270[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13230 === (14)))
{var inst_13222 = (state_13229[(2)]);var inst_13223 = cljs.core.async.close_BANG_.call(null,out);var state_13229__$1 = (function (){var statearr_13247 = state_13229;(statearr_13247[(13)] = inst_13222);
return statearr_13247;
})();var statearr_13248_13271 = state_13229__$1;(statearr_13248_13271[(2)] = inst_13223);
(statearr_13248_13271[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13230 === (10)))
{var inst_13213 = (state_13229[(2)]);var state_13229__$1 = state_13229;var statearr_13249_13272 = state_13229__$1;(statearr_13249_13272[(2)] = inst_13213);
(statearr_13249_13272[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13230 === (8)))
{var inst_13202 = (state_13229[(11)]);var inst_13193 = (state_13229[(8)]);var tmp13246 = inst_13193;var inst_13193__$1 = tmp13246;var inst_13194 = inst_13202;var state_13229__$1 = (function (){var statearr_13250 = state_13229;(statearr_13250[(7)] = inst_13194);
(statearr_13250[(8)] = inst_13193__$1);
return statearr_13250;
})();var statearr_13251_13273 = state_13229__$1;(statearr_13251_13273[(2)] = null);
(statearr_13251_13273[(1)] = (2));
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
});})(c__6366__auto___13259,out))
;return ((function (switch__6351__auto__,c__6366__auto___13259,out){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_13255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13255[(0)] = state_machine__6352__auto__);
(statearr_13255[(1)] = (1));
return statearr_13255;
});
var state_machine__6352__auto____1 = (function (state_13229){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_13229);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e13256){if((e13256 instanceof Object))
{var ex__6355__auto__ = e13256;var statearr_13257_13274 = state_13229;(statearr_13257_13274[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13229);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13256;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13275 = state_13229;
state_13229 = G__13275;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_13229){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_13229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___13259,out))
})();var state__6368__auto__ = (function (){var statearr_13258 = f__6367__auto__.call(null);(statearr_13258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___13259);
return statearr_13258;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___13259,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6366__auto___13418 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___13418,out){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___13418,out){
return (function (state_13388){var state_val_13389 = (state_13388[(1)]);if((state_val_13389 === (7)))
{var inst_13384 = (state_13388[(2)]);var state_13388__$1 = state_13388;var statearr_13390_13419 = state_13388__$1;(statearr_13390_13419[(2)] = inst_13384);
(statearr_13390_13419[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13389 === (1)))
{var inst_13347 = [];var inst_13348 = inst_13347;var inst_13349 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13388__$1 = (function (){var statearr_13391 = state_13388;(statearr_13391[(7)] = inst_13348);
(statearr_13391[(8)] = inst_13349);
return statearr_13391;
})();var statearr_13392_13420 = state_13388__$1;(statearr_13392_13420[(2)] = null);
(statearr_13392_13420[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13389 === (4)))
{var inst_13352 = (state_13388[(9)]);var inst_13352__$1 = (state_13388[(2)]);var inst_13353 = (inst_13352__$1 == null);var inst_13354 = cljs.core.not.call(null,inst_13353);var state_13388__$1 = (function (){var statearr_13393 = state_13388;(statearr_13393[(9)] = inst_13352__$1);
return statearr_13393;
})();if(inst_13354)
{var statearr_13394_13421 = state_13388__$1;(statearr_13394_13421[(1)] = (5));
} else
{var statearr_13395_13422 = state_13388__$1;(statearr_13395_13422[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13389 === (15)))
{var inst_13378 = (state_13388[(2)]);var state_13388__$1 = state_13388;var statearr_13396_13423 = state_13388__$1;(statearr_13396_13423[(2)] = inst_13378);
(statearr_13396_13423[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13389 === (13)))
{var state_13388__$1 = state_13388;var statearr_13397_13424 = state_13388__$1;(statearr_13397_13424[(2)] = null);
(statearr_13397_13424[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13389 === (6)))
{var inst_13348 = (state_13388[(7)]);var inst_13373 = inst_13348.length;var inst_13374 = (inst_13373 > (0));var state_13388__$1 = state_13388;if(cljs.core.truth_(inst_13374))
{var statearr_13398_13425 = state_13388__$1;(statearr_13398_13425[(1)] = (12));
} else
{var statearr_13399_13426 = state_13388__$1;(statearr_13399_13426[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13389 === (3)))
{var inst_13386 = (state_13388[(2)]);var state_13388__$1 = state_13388;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13388__$1,inst_13386);
} else
{if((state_val_13389 === (12)))
{var inst_13348 = (state_13388[(7)]);var inst_13376 = cljs.core.vec.call(null,inst_13348);var state_13388__$1 = state_13388;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13388__$1,(15),out,inst_13376);
} else
{if((state_val_13389 === (2)))
{var state_13388__$1 = state_13388;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13388__$1,(4),ch);
} else
{if((state_val_13389 === (11)))
{var inst_13356 = (state_13388[(10)]);var inst_13352 = (state_13388[(9)]);var inst_13366 = (state_13388[(2)]);var inst_13367 = [];var inst_13368 = inst_13367.push(inst_13352);var inst_13348 = inst_13367;var inst_13349 = inst_13356;var state_13388__$1 = (function (){var statearr_13400 = state_13388;(statearr_13400[(7)] = inst_13348);
(statearr_13400[(8)] = inst_13349);
(statearr_13400[(11)] = inst_13366);
(statearr_13400[(12)] = inst_13368);
return statearr_13400;
})();var statearr_13401_13427 = state_13388__$1;(statearr_13401_13427[(2)] = null);
(statearr_13401_13427[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13389 === (9)))
{var inst_13348 = (state_13388[(7)]);var inst_13364 = cljs.core.vec.call(null,inst_13348);var state_13388__$1 = state_13388;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13388__$1,(11),out,inst_13364);
} else
{if((state_val_13389 === (5)))
{var inst_13349 = (state_13388[(8)]);var inst_13356 = (state_13388[(10)]);var inst_13352 = (state_13388[(9)]);var inst_13356__$1 = f.call(null,inst_13352);var inst_13357 = cljs.core._EQ_.call(null,inst_13356__$1,inst_13349);var inst_13358 = cljs.core.keyword_identical_QMARK_.call(null,inst_13349,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13359 = (inst_13357) || (inst_13358);var state_13388__$1 = (function (){var statearr_13402 = state_13388;(statearr_13402[(10)] = inst_13356__$1);
return statearr_13402;
})();if(cljs.core.truth_(inst_13359))
{var statearr_13403_13428 = state_13388__$1;(statearr_13403_13428[(1)] = (8));
} else
{var statearr_13404_13429 = state_13388__$1;(statearr_13404_13429[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13389 === (14)))
{var inst_13381 = (state_13388[(2)]);var inst_13382 = cljs.core.async.close_BANG_.call(null,out);var state_13388__$1 = (function (){var statearr_13406 = state_13388;(statearr_13406[(13)] = inst_13381);
return statearr_13406;
})();var statearr_13407_13430 = state_13388__$1;(statearr_13407_13430[(2)] = inst_13382);
(statearr_13407_13430[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13389 === (10)))
{var inst_13371 = (state_13388[(2)]);var state_13388__$1 = state_13388;var statearr_13408_13431 = state_13388__$1;(statearr_13408_13431[(2)] = inst_13371);
(statearr_13408_13431[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13389 === (8)))
{var inst_13348 = (state_13388[(7)]);var inst_13356 = (state_13388[(10)]);var inst_13352 = (state_13388[(9)]);var inst_13361 = inst_13348.push(inst_13352);var tmp13405 = inst_13348;var inst_13348__$1 = tmp13405;var inst_13349 = inst_13356;var state_13388__$1 = (function (){var statearr_13409 = state_13388;(statearr_13409[(7)] = inst_13348__$1);
(statearr_13409[(8)] = inst_13349);
(statearr_13409[(14)] = inst_13361);
return statearr_13409;
})();var statearr_13410_13432 = state_13388__$1;(statearr_13410_13432[(2)] = null);
(statearr_13410_13432[(1)] = (2));
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
});})(c__6366__auto___13418,out))
;return ((function (switch__6351__auto__,c__6366__auto___13418,out){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_13414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13414[(0)] = state_machine__6352__auto__);
(statearr_13414[(1)] = (1));
return statearr_13414;
});
var state_machine__6352__auto____1 = (function (state_13388){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_13388);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e13415){if((e13415 instanceof Object))
{var ex__6355__auto__ = e13415;var statearr_13416_13433 = state_13388;(statearr_13416_13433[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13388);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13415;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13434 = state_13388;
state_13388 = G__13434;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_13388){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_13388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___13418,out))
})();var state__6368__auto__ = (function (){var statearr_13417 = f__6367__auto__.call(null);(statearr_13417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___13418);
return statearr_13417;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___13418,out))
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