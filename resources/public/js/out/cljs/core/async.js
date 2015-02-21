// Compiled by ClojureScript 0.0-2850 {:elide-asserts false}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t26987 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26987 = (function (f,fn_handler,meta26988){
this.f = f;
this.fn_handler = fn_handler;
this.meta26988 = meta26988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26987.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26987.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26987.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26989){
var self__ = this;
var _26989__$1 = this;
return self__.meta26988;
});

cljs.core.async.t26987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26989,meta26988__$1){
var self__ = this;
var _26989__$1 = this;
return (new cljs.core.async.t26987(self__.f,self__.fn_handler,meta26988__$1));
});

cljs.core.async.t26987.cljs$lang$type = true;

cljs.core.async.t26987.cljs$lang$ctorStr = "cljs.core.async/t26987";

cljs.core.async.t26987.cljs$lang$ctorPrWriter = (function (this__13915__auto__,writer__13916__auto__,opt__13917__auto__){
return cljs.core._write.call(null,writer__13916__auto__,"cljs.core.async/t26987");
});

cljs.core.async.__GT_t26987 = (function __GT_t26987(f__$1,fn_handler__$1,meta26988){
return (new cljs.core.async.t26987(f__$1,fn_handler__$1,meta26988));
});

}

return (new cljs.core.async.t26987(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__26991 = buff;
if(G__26991){
var bit__14009__auto__ = null;
if(cljs.core.truth_((function (){var or__13328__auto__ = bit__14009__auto__;
if(cljs.core.truth_(or__13328__auto__)){
return or__13328__auto__;
} else {
return G__26991.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26991.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26991);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26991);
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
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

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
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26992 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26992);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26992,ret){
return (function (){
return fn1.call(null,val_26992);
});})(val_26992,ret))
);
}
} else {
}

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
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__14215__auto___26993 = n;
var x_26994 = (0);
while(true){
if((x_26994 < n__14215__auto___26993)){
(a[x_26994] = (0));

var G__26995 = (x_26994 + (1));
x_26994 = G__26995;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26996 = (i + (1));
i = G__26996;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27000 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27000 = (function (flag,alt_flag,meta27001){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27001 = meta27001;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27000.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27000.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27000.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27000.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27002){
var self__ = this;
var _27002__$1 = this;
return self__.meta27001;
});})(flag))
;

cljs.core.async.t27000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27002,meta27001__$1){
var self__ = this;
var _27002__$1 = this;
return (new cljs.core.async.t27000(self__.flag,self__.alt_flag,meta27001__$1));
});})(flag))
;

cljs.core.async.t27000.cljs$lang$type = true;

cljs.core.async.t27000.cljs$lang$ctorStr = "cljs.core.async/t27000";

cljs.core.async.t27000.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13915__auto__,writer__13916__auto__,opt__13917__auto__){
return cljs.core._write.call(null,writer__13916__auto__,"cljs.core.async/t27000");
});})(flag))
;

cljs.core.async.__GT_t27000 = ((function (flag){
return (function __GT_t27000(flag__$1,alt_flag__$1,meta27001){
return (new cljs.core.async.t27000(flag__$1,alt_flag__$1,meta27001));
});})(flag))
;

}

return (new cljs.core.async.t27000(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t27006 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27006 = (function (cb,flag,alt_handler,meta27007){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27007 = meta27007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27006.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27006.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27006.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27008){
var self__ = this;
var _27008__$1 = this;
return self__.meta27007;
});

cljs.core.async.t27006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27008,meta27007__$1){
var self__ = this;
var _27008__$1 = this;
return (new cljs.core.async.t27006(self__.cb,self__.flag,self__.alt_handler,meta27007__$1));
});

cljs.core.async.t27006.cljs$lang$type = true;

cljs.core.async.t27006.cljs$lang$ctorStr = "cljs.core.async/t27006";

cljs.core.async.t27006.cljs$lang$ctorPrWriter = (function (this__13915__auto__,writer__13916__auto__,opt__13917__auto__){
return cljs.core._write.call(null,writer__13916__auto__,"cljs.core.async/t27006");
});

cljs.core.async.__GT_t27006 = (function __GT_t27006(cb__$1,flag__$1,alt_handler__$1,meta27007){
return (new cljs.core.async.t27006(cb__$1,flag__$1,alt_handler__$1,meta27007));
});

}

return (new cljs.core.async.t27006(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27009_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27009_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27010_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27010_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__13328__auto__ = wport;
if(cljs.core.truth_(or__13328__auto__)){
return or__13328__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27011 = (i + (1));
i = G__27011;
continue;
}
} else {
return null;
}
break;
}
})();
var or__13328__auto__ = ret;
if(cljs.core.truth_(or__13328__auto__)){
return or__13328__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__13316__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__13316__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__13316__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
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
var alts_BANG___delegate = function (ports,p__27012){
var map__27014 = p__27012;
var map__27014__$1 = ((cljs.core.seq_QMARK_.call(null,map__27014))?cljs.core.apply.call(null,cljs.core.hash_map,map__27014):map__27014);
var opts = map__27014__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__27012 = null;
if (arguments.length > 1) {
var G__27015__i = 0, G__27015__a = new Array(arguments.length -  1);
while (G__27015__i < G__27015__a.length) {G__27015__a[G__27015__i] = arguments[G__27015__i + 1]; ++G__27015__i;}
  p__27012 = new cljs.core.IndexedSeq(G__27015__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__27012);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__27016){
var ports = cljs.core.first(arglist__27016);
var p__27012 = cljs.core.rest(arglist__27016);
return alts_BANG___delegate(ports,p__27012);
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
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__15996__auto___27111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto___27111){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto___27111){
return (function (state_27087){
var state_val_27088 = (state_27087[(1)]);
if((state_val_27088 === (7))){
var inst_27083 = (state_27087[(2)]);
var state_27087__$1 = state_27087;
var statearr_27089_27112 = state_27087__$1;
(statearr_27089_27112[(2)] = inst_27083);

(statearr_27089_27112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (1))){
var state_27087__$1 = state_27087;
var statearr_27090_27113 = state_27087__$1;
(statearr_27090_27113[(2)] = null);

(statearr_27090_27113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (4))){
var inst_27066 = (state_27087[(7)]);
var inst_27066__$1 = (state_27087[(2)]);
var inst_27067 = (inst_27066__$1 == null);
var state_27087__$1 = (function (){var statearr_27091 = state_27087;
(statearr_27091[(7)] = inst_27066__$1);

return statearr_27091;
})();
if(cljs.core.truth_(inst_27067)){
var statearr_27092_27114 = state_27087__$1;
(statearr_27092_27114[(1)] = (5));

} else {
var statearr_27093_27115 = state_27087__$1;
(statearr_27093_27115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (13))){
var state_27087__$1 = state_27087;
var statearr_27094_27116 = state_27087__$1;
(statearr_27094_27116[(2)] = null);

(statearr_27094_27116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (6))){
var inst_27066 = (state_27087[(7)]);
var state_27087__$1 = state_27087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27087__$1,(11),to,inst_27066);
} else {
if((state_val_27088 === (3))){
var inst_27085 = (state_27087[(2)]);
var state_27087__$1 = state_27087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27087__$1,inst_27085);
} else {
if((state_val_27088 === (12))){
var state_27087__$1 = state_27087;
var statearr_27095_27117 = state_27087__$1;
(statearr_27095_27117[(2)] = null);

(statearr_27095_27117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (2))){
var state_27087__$1 = state_27087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27087__$1,(4),from);
} else {
if((state_val_27088 === (11))){
var inst_27076 = (state_27087[(2)]);
var state_27087__$1 = state_27087;
if(cljs.core.truth_(inst_27076)){
var statearr_27096_27118 = state_27087__$1;
(statearr_27096_27118[(1)] = (12));

} else {
var statearr_27097_27119 = state_27087__$1;
(statearr_27097_27119[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (9))){
var state_27087__$1 = state_27087;
var statearr_27098_27120 = state_27087__$1;
(statearr_27098_27120[(2)] = null);

(statearr_27098_27120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (5))){
var state_27087__$1 = state_27087;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27099_27121 = state_27087__$1;
(statearr_27099_27121[(1)] = (8));

} else {
var statearr_27100_27122 = state_27087__$1;
(statearr_27100_27122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (14))){
var inst_27081 = (state_27087[(2)]);
var state_27087__$1 = state_27087;
var statearr_27101_27123 = state_27087__$1;
(statearr_27101_27123[(2)] = inst_27081);

(statearr_27101_27123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (10))){
var inst_27073 = (state_27087[(2)]);
var state_27087__$1 = state_27087;
var statearr_27102_27124 = state_27087__$1;
(statearr_27102_27124[(2)] = inst_27073);

(statearr_27102_27124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27088 === (8))){
var inst_27070 = cljs.core.async.close_BANG_.call(null,to);
var state_27087__$1 = state_27087;
var statearr_27103_27125 = state_27087__$1;
(statearr_27103_27125[(2)] = inst_27070);

(statearr_27103_27125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15996__auto___27111))
;
return ((function (switch__15940__auto__,c__15996__auto___27111){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_27107 = [null,null,null,null,null,null,null,null];
(statearr_27107[(0)] = state_machine__15941__auto__);

(statearr_27107[(1)] = (1));

return statearr_27107;
});
var state_machine__15941__auto____1 = (function (state_27087){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_27087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e27108){if((e27108 instanceof Object)){
var ex__15944__auto__ = e27108;
var statearr_27109_27126 = state_27087;
(statearr_27109_27126[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27127 = state_27087;
state_27087 = G__27127;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_27087){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_27087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto___27111))
})();
var state__15998__auto__ = (function (){var statearr_27110 = f__15997__auto__.call(null);
(statearr_27110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___27111);

return statearr_27110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto___27111))
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
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27311){
var vec__27312 = p__27311;
var v = cljs.core.nth.call(null,vec__27312,(0),null);
var p = cljs.core.nth.call(null,vec__27312,(1),null);
var job = vec__27312;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15996__auto___27494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto___27494,res,vec__27312,v,p,job,jobs,results){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto___27494,res,vec__27312,v,p,job,jobs,results){
return (function (state_27317){
var state_val_27318 = (state_27317[(1)]);
if((state_val_27318 === (2))){
var inst_27314 = (state_27317[(2)]);
var inst_27315 = cljs.core.async.close_BANG_.call(null,res);
var state_27317__$1 = (function (){var statearr_27319 = state_27317;
(statearr_27319[(7)] = inst_27314);

return statearr_27319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27317__$1,inst_27315);
} else {
if((state_val_27318 === (1))){
var state_27317__$1 = state_27317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27317__$1,(2),res,v);
} else {
return null;
}
}
});})(c__15996__auto___27494,res,vec__27312,v,p,job,jobs,results))
;
return ((function (switch__15940__auto__,c__15996__auto___27494,res,vec__27312,v,p,job,jobs,results){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_27323 = [null,null,null,null,null,null,null,null];
(statearr_27323[(0)] = state_machine__15941__auto__);

(statearr_27323[(1)] = (1));

return statearr_27323;
});
var state_machine__15941__auto____1 = (function (state_27317){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_27317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e27324){if((e27324 instanceof Object)){
var ex__15944__auto__ = e27324;
var statearr_27325_27495 = state_27317;
(statearr_27325_27495[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27496 = state_27317;
state_27317 = G__27496;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_27317){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_27317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto___27494,res,vec__27312,v,p,job,jobs,results))
})();
var state__15998__auto__ = (function (){var statearr_27326 = f__15997__auto__.call(null);
(statearr_27326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___27494);

return statearr_27326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto___27494,res,vec__27312,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27327){
var vec__27328 = p__27327;
var v = cljs.core.nth.call(null,vec__27328,(0),null);
var p = cljs.core.nth.call(null,vec__27328,(1),null);
var job = vec__27328;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__14215__auto___27497 = n;
var __27498 = (0);
while(true){
if((__27498 < n__14215__auto___27497)){
var G__27329_27499 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27329_27499) {
case "async":
var c__15996__auto___27501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27498,c__15996__auto___27501,G__27329_27499,n__14215__auto___27497,jobs,results,process,async){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (__27498,c__15996__auto___27501,G__27329_27499,n__14215__auto___27497,jobs,results,process,async){
return (function (state_27342){
var state_val_27343 = (state_27342[(1)]);
if((state_val_27343 === (7))){
var inst_27338 = (state_27342[(2)]);
var state_27342__$1 = state_27342;
var statearr_27344_27502 = state_27342__$1;
(statearr_27344_27502[(2)] = inst_27338);

(statearr_27344_27502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27343 === (6))){
var state_27342__$1 = state_27342;
var statearr_27345_27503 = state_27342__$1;
(statearr_27345_27503[(2)] = null);

(statearr_27345_27503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27343 === (5))){
var state_27342__$1 = state_27342;
var statearr_27346_27504 = state_27342__$1;
(statearr_27346_27504[(2)] = null);

(statearr_27346_27504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27343 === (4))){
var inst_27332 = (state_27342[(2)]);
var inst_27333 = async.call(null,inst_27332);
var state_27342__$1 = state_27342;
if(cljs.core.truth_(inst_27333)){
var statearr_27347_27505 = state_27342__$1;
(statearr_27347_27505[(1)] = (5));

} else {
var statearr_27348_27506 = state_27342__$1;
(statearr_27348_27506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27343 === (3))){
var inst_27340 = (state_27342[(2)]);
var state_27342__$1 = state_27342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27342__$1,inst_27340);
} else {
if((state_val_27343 === (2))){
var state_27342__$1 = state_27342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27342__$1,(4),jobs);
} else {
if((state_val_27343 === (1))){
var state_27342__$1 = state_27342;
var statearr_27349_27507 = state_27342__$1;
(statearr_27349_27507[(2)] = null);

(statearr_27349_27507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27498,c__15996__auto___27501,G__27329_27499,n__14215__auto___27497,jobs,results,process,async))
;
return ((function (__27498,switch__15940__auto__,c__15996__auto___27501,G__27329_27499,n__14215__auto___27497,jobs,results,process,async){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_27353 = [null,null,null,null,null,null,null];
(statearr_27353[(0)] = state_machine__15941__auto__);

(statearr_27353[(1)] = (1));

return statearr_27353;
});
var state_machine__15941__auto____1 = (function (state_27342){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_27342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e27354){if((e27354 instanceof Object)){
var ex__15944__auto__ = e27354;
var statearr_27355_27508 = state_27342;
(statearr_27355_27508[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27509 = state_27342;
state_27342 = G__27509;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_27342){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_27342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(__27498,switch__15940__auto__,c__15996__auto___27501,G__27329_27499,n__14215__auto___27497,jobs,results,process,async))
})();
var state__15998__auto__ = (function (){var statearr_27356 = f__15997__auto__.call(null);
(statearr_27356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___27501);

return statearr_27356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(__27498,c__15996__auto___27501,G__27329_27499,n__14215__auto___27497,jobs,results,process,async))
);


break;
case "compute":
var c__15996__auto___27510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27498,c__15996__auto___27510,G__27329_27499,n__14215__auto___27497,jobs,results,process,async){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (__27498,c__15996__auto___27510,G__27329_27499,n__14215__auto___27497,jobs,results,process,async){
return (function (state_27369){
var state_val_27370 = (state_27369[(1)]);
if((state_val_27370 === (7))){
var inst_27365 = (state_27369[(2)]);
var state_27369__$1 = state_27369;
var statearr_27371_27511 = state_27369__$1;
(statearr_27371_27511[(2)] = inst_27365);

(statearr_27371_27511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (6))){
var state_27369__$1 = state_27369;
var statearr_27372_27512 = state_27369__$1;
(statearr_27372_27512[(2)] = null);

(statearr_27372_27512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (5))){
var state_27369__$1 = state_27369;
var statearr_27373_27513 = state_27369__$1;
(statearr_27373_27513[(2)] = null);

(statearr_27373_27513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (4))){
var inst_27359 = (state_27369[(2)]);
var inst_27360 = process.call(null,inst_27359);
var state_27369__$1 = state_27369;
if(cljs.core.truth_(inst_27360)){
var statearr_27374_27514 = state_27369__$1;
(statearr_27374_27514[(1)] = (5));

} else {
var statearr_27375_27515 = state_27369__$1;
(statearr_27375_27515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (3))){
var inst_27367 = (state_27369[(2)]);
var state_27369__$1 = state_27369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27369__$1,inst_27367);
} else {
if((state_val_27370 === (2))){
var state_27369__$1 = state_27369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27369__$1,(4),jobs);
} else {
if((state_val_27370 === (1))){
var state_27369__$1 = state_27369;
var statearr_27376_27516 = state_27369__$1;
(statearr_27376_27516[(2)] = null);

(statearr_27376_27516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27498,c__15996__auto___27510,G__27329_27499,n__14215__auto___27497,jobs,results,process,async))
;
return ((function (__27498,switch__15940__auto__,c__15996__auto___27510,G__27329_27499,n__14215__auto___27497,jobs,results,process,async){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_27380 = [null,null,null,null,null,null,null];
(statearr_27380[(0)] = state_machine__15941__auto__);

(statearr_27380[(1)] = (1));

return statearr_27380;
});
var state_machine__15941__auto____1 = (function (state_27369){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_27369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e27381){if((e27381 instanceof Object)){
var ex__15944__auto__ = e27381;
var statearr_27382_27517 = state_27369;
(statearr_27382_27517[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27518 = state_27369;
state_27369 = G__27518;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_27369){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_27369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(__27498,switch__15940__auto__,c__15996__auto___27510,G__27329_27499,n__14215__auto___27497,jobs,results,process,async))
})();
var state__15998__auto__ = (function (){var statearr_27383 = f__15997__auto__.call(null);
(statearr_27383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___27510);

return statearr_27383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(__27498,c__15996__auto___27510,G__27329_27499,n__14215__auto___27497,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27519 = (__27498 + (1));
__27498 = G__27519;
continue;
} else {
}
break;
}

var c__15996__auto___27520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto___27520,jobs,results,process,async){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto___27520,jobs,results,process,async){
return (function (state_27405){
var state_val_27406 = (state_27405[(1)]);
if((state_val_27406 === (9))){
var inst_27398 = (state_27405[(2)]);
var state_27405__$1 = (function (){var statearr_27407 = state_27405;
(statearr_27407[(7)] = inst_27398);

return statearr_27407;
})();
var statearr_27408_27521 = state_27405__$1;
(statearr_27408_27521[(2)] = null);

(statearr_27408_27521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (8))){
var inst_27391 = (state_27405[(8)]);
var inst_27396 = (state_27405[(2)]);
var state_27405__$1 = (function (){var statearr_27409 = state_27405;
(statearr_27409[(9)] = inst_27396);

return statearr_27409;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27405__$1,(9),results,inst_27391);
} else {
if((state_val_27406 === (7))){
var inst_27401 = (state_27405[(2)]);
var state_27405__$1 = state_27405;
var statearr_27410_27522 = state_27405__$1;
(statearr_27410_27522[(2)] = inst_27401);

(statearr_27410_27522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (6))){
var inst_27386 = (state_27405[(10)]);
var inst_27391 = (state_27405[(8)]);
var inst_27391__$1 = cljs.core.async.chan.call(null,(1));
var inst_27392 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27393 = [inst_27386,inst_27391__$1];
var inst_27394 = (new cljs.core.PersistentVector(null,2,(5),inst_27392,inst_27393,null));
var state_27405__$1 = (function (){var statearr_27411 = state_27405;
(statearr_27411[(8)] = inst_27391__$1);

return statearr_27411;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27405__$1,(8),jobs,inst_27394);
} else {
if((state_val_27406 === (5))){
var inst_27389 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27405__$1 = state_27405;
var statearr_27412_27523 = state_27405__$1;
(statearr_27412_27523[(2)] = inst_27389);

(statearr_27412_27523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (4))){
var inst_27386 = (state_27405[(10)]);
var inst_27386__$1 = (state_27405[(2)]);
var inst_27387 = (inst_27386__$1 == null);
var state_27405__$1 = (function (){var statearr_27413 = state_27405;
(statearr_27413[(10)] = inst_27386__$1);

return statearr_27413;
})();
if(cljs.core.truth_(inst_27387)){
var statearr_27414_27524 = state_27405__$1;
(statearr_27414_27524[(1)] = (5));

} else {
var statearr_27415_27525 = state_27405__$1;
(statearr_27415_27525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (3))){
var inst_27403 = (state_27405[(2)]);
var state_27405__$1 = state_27405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27405__$1,inst_27403);
} else {
if((state_val_27406 === (2))){
var state_27405__$1 = state_27405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27405__$1,(4),from);
} else {
if((state_val_27406 === (1))){
var state_27405__$1 = state_27405;
var statearr_27416_27526 = state_27405__$1;
(statearr_27416_27526[(2)] = null);

(statearr_27416_27526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__15996__auto___27520,jobs,results,process,async))
;
return ((function (switch__15940__auto__,c__15996__auto___27520,jobs,results,process,async){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_27420 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27420[(0)] = state_machine__15941__auto__);

(statearr_27420[(1)] = (1));

return statearr_27420;
});
var state_machine__15941__auto____1 = (function (state_27405){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_27405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e27421){if((e27421 instanceof Object)){
var ex__15944__auto__ = e27421;
var statearr_27422_27527 = state_27405;
(statearr_27422_27527[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27528 = state_27405;
state_27405 = G__27528;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_27405){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_27405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto___27520,jobs,results,process,async))
})();
var state__15998__auto__ = (function (){var statearr_27423 = f__15997__auto__.call(null);
(statearr_27423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___27520);

return statearr_27423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto___27520,jobs,results,process,async))
);


var c__15996__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto__,jobs,results,process,async){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto__,jobs,results,process,async){
return (function (state_27461){
var state_val_27462 = (state_27461[(1)]);
if((state_val_27462 === (7))){
var inst_27457 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
var statearr_27463_27529 = state_27461__$1;
(statearr_27463_27529[(2)] = inst_27457);

(statearr_27463_27529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (20))){
var state_27461__$1 = state_27461;
var statearr_27464_27530 = state_27461__$1;
(statearr_27464_27530[(2)] = null);

(statearr_27464_27530[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (1))){
var state_27461__$1 = state_27461;
var statearr_27465_27531 = state_27461__$1;
(statearr_27465_27531[(2)] = null);

(statearr_27465_27531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (4))){
var inst_27426 = (state_27461[(7)]);
var inst_27426__$1 = (state_27461[(2)]);
var inst_27427 = (inst_27426__$1 == null);
var state_27461__$1 = (function (){var statearr_27466 = state_27461;
(statearr_27466[(7)] = inst_27426__$1);

return statearr_27466;
})();
if(cljs.core.truth_(inst_27427)){
var statearr_27467_27532 = state_27461__$1;
(statearr_27467_27532[(1)] = (5));

} else {
var statearr_27468_27533 = state_27461__$1;
(statearr_27468_27533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (15))){
var inst_27439 = (state_27461[(8)]);
var state_27461__$1 = state_27461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27461__$1,(18),to,inst_27439);
} else {
if((state_val_27462 === (21))){
var inst_27452 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
var statearr_27469_27534 = state_27461__$1;
(statearr_27469_27534[(2)] = inst_27452);

(statearr_27469_27534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (13))){
var inst_27454 = (state_27461[(2)]);
var state_27461__$1 = (function (){var statearr_27470 = state_27461;
(statearr_27470[(9)] = inst_27454);

return statearr_27470;
})();
var statearr_27471_27535 = state_27461__$1;
(statearr_27471_27535[(2)] = null);

(statearr_27471_27535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (6))){
var inst_27426 = (state_27461[(7)]);
var state_27461__$1 = state_27461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27461__$1,(11),inst_27426);
} else {
if((state_val_27462 === (17))){
var inst_27447 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
if(cljs.core.truth_(inst_27447)){
var statearr_27472_27536 = state_27461__$1;
(statearr_27472_27536[(1)] = (19));

} else {
var statearr_27473_27537 = state_27461__$1;
(statearr_27473_27537[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (3))){
var inst_27459 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27461__$1,inst_27459);
} else {
if((state_val_27462 === (12))){
var inst_27436 = (state_27461[(10)]);
var state_27461__$1 = state_27461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27461__$1,(14),inst_27436);
} else {
if((state_val_27462 === (2))){
var state_27461__$1 = state_27461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27461__$1,(4),results);
} else {
if((state_val_27462 === (19))){
var state_27461__$1 = state_27461;
var statearr_27474_27538 = state_27461__$1;
(statearr_27474_27538[(2)] = null);

(statearr_27474_27538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (11))){
var inst_27436 = (state_27461[(2)]);
var state_27461__$1 = (function (){var statearr_27475 = state_27461;
(statearr_27475[(10)] = inst_27436);

return statearr_27475;
})();
var statearr_27476_27539 = state_27461__$1;
(statearr_27476_27539[(2)] = null);

(statearr_27476_27539[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (9))){
var state_27461__$1 = state_27461;
var statearr_27477_27540 = state_27461__$1;
(statearr_27477_27540[(2)] = null);

(statearr_27477_27540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (5))){
var state_27461__$1 = state_27461;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27478_27541 = state_27461__$1;
(statearr_27478_27541[(1)] = (8));

} else {
var statearr_27479_27542 = state_27461__$1;
(statearr_27479_27542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (14))){
var inst_27441 = (state_27461[(11)]);
var inst_27439 = (state_27461[(8)]);
var inst_27439__$1 = (state_27461[(2)]);
var inst_27440 = (inst_27439__$1 == null);
var inst_27441__$1 = cljs.core.not.call(null,inst_27440);
var state_27461__$1 = (function (){var statearr_27480 = state_27461;
(statearr_27480[(11)] = inst_27441__$1);

(statearr_27480[(8)] = inst_27439__$1);

return statearr_27480;
})();
if(inst_27441__$1){
var statearr_27481_27543 = state_27461__$1;
(statearr_27481_27543[(1)] = (15));

} else {
var statearr_27482_27544 = state_27461__$1;
(statearr_27482_27544[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (16))){
var inst_27441 = (state_27461[(11)]);
var state_27461__$1 = state_27461;
var statearr_27483_27545 = state_27461__$1;
(statearr_27483_27545[(2)] = inst_27441);

(statearr_27483_27545[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (10))){
var inst_27433 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
var statearr_27484_27546 = state_27461__$1;
(statearr_27484_27546[(2)] = inst_27433);

(statearr_27484_27546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (18))){
var inst_27444 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
var statearr_27485_27547 = state_27461__$1;
(statearr_27485_27547[(2)] = inst_27444);

(statearr_27485_27547[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (8))){
var inst_27430 = cljs.core.async.close_BANG_.call(null,to);
var state_27461__$1 = state_27461;
var statearr_27486_27548 = state_27461__$1;
(statearr_27486_27548[(2)] = inst_27430);

(statearr_27486_27548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15996__auto__,jobs,results,process,async))
;
return ((function (switch__15940__auto__,c__15996__auto__,jobs,results,process,async){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_27490 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27490[(0)] = state_machine__15941__auto__);

(statearr_27490[(1)] = (1));

return statearr_27490;
});
var state_machine__15941__auto____1 = (function (state_27461){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_27461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e27491){if((e27491 instanceof Object)){
var ex__15944__auto__ = e27491;
var statearr_27492_27549 = state_27461;
(statearr_27492_27549[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27550 = state_27461;
state_27461 = G__27550;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_27461){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_27461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto__,jobs,results,process,async))
})();
var state__15998__auto__ = (function (){var statearr_27493 = f__15997__auto__.call(null);
(statearr_27493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto__);

return statearr_27493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto__,jobs,results,process,async))
);

return c__15996__auto__;
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
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15996__auto___27651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto___27651,tc,fc){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto___27651,tc,fc){
return (function (state_27626){
var state_val_27627 = (state_27626[(1)]);
if((state_val_27627 === (7))){
var inst_27622 = (state_27626[(2)]);
var state_27626__$1 = state_27626;
var statearr_27628_27652 = state_27626__$1;
(statearr_27628_27652[(2)] = inst_27622);

(statearr_27628_27652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27627 === (1))){
var state_27626__$1 = state_27626;
var statearr_27629_27653 = state_27626__$1;
(statearr_27629_27653[(2)] = null);

(statearr_27629_27653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27627 === (4))){
var inst_27603 = (state_27626[(7)]);
var inst_27603__$1 = (state_27626[(2)]);
var inst_27604 = (inst_27603__$1 == null);
var state_27626__$1 = (function (){var statearr_27630 = state_27626;
(statearr_27630[(7)] = inst_27603__$1);

return statearr_27630;
})();
if(cljs.core.truth_(inst_27604)){
var statearr_27631_27654 = state_27626__$1;
(statearr_27631_27654[(1)] = (5));

} else {
var statearr_27632_27655 = state_27626__$1;
(statearr_27632_27655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27627 === (13))){
var state_27626__$1 = state_27626;
var statearr_27633_27656 = state_27626__$1;
(statearr_27633_27656[(2)] = null);

(statearr_27633_27656[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27627 === (6))){
var inst_27603 = (state_27626[(7)]);
var inst_27609 = p.call(null,inst_27603);
var state_27626__$1 = state_27626;
if(cljs.core.truth_(inst_27609)){
var statearr_27634_27657 = state_27626__$1;
(statearr_27634_27657[(1)] = (9));

} else {
var statearr_27635_27658 = state_27626__$1;
(statearr_27635_27658[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27627 === (3))){
var inst_27624 = (state_27626[(2)]);
var state_27626__$1 = state_27626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27626__$1,inst_27624);
} else {
if((state_val_27627 === (12))){
var state_27626__$1 = state_27626;
var statearr_27636_27659 = state_27626__$1;
(statearr_27636_27659[(2)] = null);

(statearr_27636_27659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27627 === (2))){
var state_27626__$1 = state_27626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27626__$1,(4),ch);
} else {
if((state_val_27627 === (11))){
var inst_27603 = (state_27626[(7)]);
var inst_27613 = (state_27626[(2)]);
var state_27626__$1 = state_27626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27626__$1,(8),inst_27613,inst_27603);
} else {
if((state_val_27627 === (9))){
var state_27626__$1 = state_27626;
var statearr_27637_27660 = state_27626__$1;
(statearr_27637_27660[(2)] = tc);

(statearr_27637_27660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27627 === (5))){
var inst_27606 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27607 = cljs.core.async.close_BANG_.call(null,fc);
var state_27626__$1 = (function (){var statearr_27638 = state_27626;
(statearr_27638[(8)] = inst_27606);

return statearr_27638;
})();
var statearr_27639_27661 = state_27626__$1;
(statearr_27639_27661[(2)] = inst_27607);

(statearr_27639_27661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27627 === (14))){
var inst_27620 = (state_27626[(2)]);
var state_27626__$1 = state_27626;
var statearr_27640_27662 = state_27626__$1;
(statearr_27640_27662[(2)] = inst_27620);

(statearr_27640_27662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27627 === (10))){
var state_27626__$1 = state_27626;
var statearr_27641_27663 = state_27626__$1;
(statearr_27641_27663[(2)] = fc);

(statearr_27641_27663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27627 === (8))){
var inst_27615 = (state_27626[(2)]);
var state_27626__$1 = state_27626;
if(cljs.core.truth_(inst_27615)){
var statearr_27642_27664 = state_27626__$1;
(statearr_27642_27664[(1)] = (12));

} else {
var statearr_27643_27665 = state_27626__$1;
(statearr_27643_27665[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15996__auto___27651,tc,fc))
;
return ((function (switch__15940__auto__,c__15996__auto___27651,tc,fc){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_27647 = [null,null,null,null,null,null,null,null,null];
(statearr_27647[(0)] = state_machine__15941__auto__);

(statearr_27647[(1)] = (1));

return statearr_27647;
});
var state_machine__15941__auto____1 = (function (state_27626){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_27626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e27648){if((e27648 instanceof Object)){
var ex__15944__auto__ = e27648;
var statearr_27649_27666 = state_27626;
(statearr_27649_27666[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27667 = state_27626;
state_27626 = G__27667;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_27626){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_27626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto___27651,tc,fc))
})();
var state__15998__auto__ = (function (){var statearr_27650 = f__15997__auto__.call(null);
(statearr_27650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___27651);

return statearr_27650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto___27651,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__15996__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto__){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto__){
return (function (state_27714){
var state_val_27715 = (state_27714[(1)]);
if((state_val_27715 === (7))){
var inst_27710 = (state_27714[(2)]);
var state_27714__$1 = state_27714;
var statearr_27716_27732 = state_27714__$1;
(statearr_27716_27732[(2)] = inst_27710);

(statearr_27716_27732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27715 === (6))){
var inst_27703 = (state_27714[(7)]);
var inst_27700 = (state_27714[(8)]);
var inst_27707 = f.call(null,inst_27700,inst_27703);
var inst_27700__$1 = inst_27707;
var state_27714__$1 = (function (){var statearr_27717 = state_27714;
(statearr_27717[(8)] = inst_27700__$1);

return statearr_27717;
})();
var statearr_27718_27733 = state_27714__$1;
(statearr_27718_27733[(2)] = null);

(statearr_27718_27733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27715 === (5))){
var inst_27700 = (state_27714[(8)]);
var state_27714__$1 = state_27714;
var statearr_27719_27734 = state_27714__$1;
(statearr_27719_27734[(2)] = inst_27700);

(statearr_27719_27734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27715 === (4))){
var inst_27703 = (state_27714[(7)]);
var inst_27703__$1 = (state_27714[(2)]);
var inst_27704 = (inst_27703__$1 == null);
var state_27714__$1 = (function (){var statearr_27720 = state_27714;
(statearr_27720[(7)] = inst_27703__$1);

return statearr_27720;
})();
if(cljs.core.truth_(inst_27704)){
var statearr_27721_27735 = state_27714__$1;
(statearr_27721_27735[(1)] = (5));

} else {
var statearr_27722_27736 = state_27714__$1;
(statearr_27722_27736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27715 === (3))){
var inst_27712 = (state_27714[(2)]);
var state_27714__$1 = state_27714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27714__$1,inst_27712);
} else {
if((state_val_27715 === (2))){
var state_27714__$1 = state_27714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27714__$1,(4),ch);
} else {
if((state_val_27715 === (1))){
var inst_27700 = init;
var state_27714__$1 = (function (){var statearr_27723 = state_27714;
(statearr_27723[(8)] = inst_27700);

return statearr_27723;
})();
var statearr_27724_27737 = state_27714__$1;
(statearr_27724_27737[(2)] = null);

(statearr_27724_27737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__15996__auto__))
;
return ((function (switch__15940__auto__,c__15996__auto__){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_27728 = [null,null,null,null,null,null,null,null,null];
(statearr_27728[(0)] = state_machine__15941__auto__);

(statearr_27728[(1)] = (1));

return statearr_27728;
});
var state_machine__15941__auto____1 = (function (state_27714){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_27714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e27729){if((e27729 instanceof Object)){
var ex__15944__auto__ = e27729;
var statearr_27730_27738 = state_27714;
(statearr_27730_27738[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27739 = state_27714;
state_27714 = G__27739;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_27714){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_27714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto__))
})();
var state__15998__auto__ = (function (){var statearr_27731 = f__15997__auto__.call(null);
(statearr_27731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto__);

return statearr_27731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto__))
);

return c__15996__auto__;
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
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__15996__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto__){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto__){
return (function (state_27813){
var state_val_27814 = (state_27813[(1)]);
if((state_val_27814 === (7))){
var inst_27795 = (state_27813[(2)]);
var state_27813__$1 = state_27813;
var statearr_27815_27838 = state_27813__$1;
(statearr_27815_27838[(2)] = inst_27795);

(statearr_27815_27838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (1))){
var inst_27789 = cljs.core.seq.call(null,coll);
var inst_27790 = inst_27789;
var state_27813__$1 = (function (){var statearr_27816 = state_27813;
(statearr_27816[(7)] = inst_27790);

return statearr_27816;
})();
var statearr_27817_27839 = state_27813__$1;
(statearr_27817_27839[(2)] = null);

(statearr_27817_27839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (4))){
var inst_27790 = (state_27813[(7)]);
var inst_27793 = cljs.core.first.call(null,inst_27790);
var state_27813__$1 = state_27813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27813__$1,(7),ch,inst_27793);
} else {
if((state_val_27814 === (13))){
var inst_27807 = (state_27813[(2)]);
var state_27813__$1 = state_27813;
var statearr_27818_27840 = state_27813__$1;
(statearr_27818_27840[(2)] = inst_27807);

(statearr_27818_27840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (6))){
var inst_27798 = (state_27813[(2)]);
var state_27813__$1 = state_27813;
if(cljs.core.truth_(inst_27798)){
var statearr_27819_27841 = state_27813__$1;
(statearr_27819_27841[(1)] = (8));

} else {
var statearr_27820_27842 = state_27813__$1;
(statearr_27820_27842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (3))){
var inst_27811 = (state_27813[(2)]);
var state_27813__$1 = state_27813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27813__$1,inst_27811);
} else {
if((state_val_27814 === (12))){
var state_27813__$1 = state_27813;
var statearr_27821_27843 = state_27813__$1;
(statearr_27821_27843[(2)] = null);

(statearr_27821_27843[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (2))){
var inst_27790 = (state_27813[(7)]);
var state_27813__$1 = state_27813;
if(cljs.core.truth_(inst_27790)){
var statearr_27822_27844 = state_27813__$1;
(statearr_27822_27844[(1)] = (4));

} else {
var statearr_27823_27845 = state_27813__$1;
(statearr_27823_27845[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (11))){
var inst_27804 = cljs.core.async.close_BANG_.call(null,ch);
var state_27813__$1 = state_27813;
var statearr_27824_27846 = state_27813__$1;
(statearr_27824_27846[(2)] = inst_27804);

(statearr_27824_27846[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (9))){
var state_27813__$1 = state_27813;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27825_27847 = state_27813__$1;
(statearr_27825_27847[(1)] = (11));

} else {
var statearr_27826_27848 = state_27813__$1;
(statearr_27826_27848[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (5))){
var inst_27790 = (state_27813[(7)]);
var state_27813__$1 = state_27813;
var statearr_27827_27849 = state_27813__$1;
(statearr_27827_27849[(2)] = inst_27790);

(statearr_27827_27849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (10))){
var inst_27809 = (state_27813[(2)]);
var state_27813__$1 = state_27813;
var statearr_27828_27850 = state_27813__$1;
(statearr_27828_27850[(2)] = inst_27809);

(statearr_27828_27850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27814 === (8))){
var inst_27790 = (state_27813[(7)]);
var inst_27800 = cljs.core.next.call(null,inst_27790);
var inst_27790__$1 = inst_27800;
var state_27813__$1 = (function (){var statearr_27829 = state_27813;
(statearr_27829[(7)] = inst_27790__$1);

return statearr_27829;
})();
var statearr_27830_27851 = state_27813__$1;
(statearr_27830_27851[(2)] = null);

(statearr_27830_27851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15996__auto__))
;
return ((function (switch__15940__auto__,c__15996__auto__){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_27834 = [null,null,null,null,null,null,null,null];
(statearr_27834[(0)] = state_machine__15941__auto__);

(statearr_27834[(1)] = (1));

return statearr_27834;
});
var state_machine__15941__auto____1 = (function (state_27813){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_27813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e27835){if((e27835 instanceof Object)){
var ex__15944__auto__ = e27835;
var statearr_27836_27852 = state_27813;
(statearr_27836_27852[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27853 = state_27813;
state_27813 = G__27853;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_27813){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_27813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto__))
})();
var state__15998__auto__ = (function (){var statearr_27837 = f__15997__auto__.call(null);
(statearr_27837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto__);

return statearr_27837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto__))
);

return c__15996__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj27855 = {};
return obj27855;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__13316__auto__ = _;
if(and__13316__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__13316__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__13972__auto__ = (((_ == null))?null:_);
return (function (){var or__13328__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27857 = {};
return obj27857;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__13316__auto__ = m;
if(and__13316__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__13316__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__13972__auto__ = (((m == null))?null:m);
return (function (){var or__13328__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__13316__auto__ = m;
if(and__13316__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__13316__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__13972__auto__ = (((m == null))?null:m);
return (function (){var or__13328__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__13316__auto__ = m;
if(and__13316__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__13316__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__13972__auto__ = (((m == null))?null:m);
return (function (){var or__13328__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t28079 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28079 = (function (cs,ch,mult,meta28080){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28080 = meta28080;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28079.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28079.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28079.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28079.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28079.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28079.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28081){
var self__ = this;
var _28081__$1 = this;
return self__.meta28080;
});})(cs))
;

cljs.core.async.t28079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28081,meta28080__$1){
var self__ = this;
var _28081__$1 = this;
return (new cljs.core.async.t28079(self__.cs,self__.ch,self__.mult,meta28080__$1));
});})(cs))
;

cljs.core.async.t28079.cljs$lang$type = true;

cljs.core.async.t28079.cljs$lang$ctorStr = "cljs.core.async/t28079";

cljs.core.async.t28079.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13915__auto__,writer__13916__auto__,opt__13917__auto__){
return cljs.core._write.call(null,writer__13916__auto__,"cljs.core.async/t28079");
});})(cs))
;

cljs.core.async.__GT_t28079 = ((function (cs){
return (function __GT_t28079(cs__$1,ch__$1,mult__$1,meta28080){
return (new cljs.core.async.t28079(cs__$1,ch__$1,mult__$1,meta28080));
});})(cs))
;

}

return (new cljs.core.async.t28079(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15996__auto___28300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto___28300,cs,m,dchan,dctr,done){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto___28300,cs,m,dchan,dctr,done){
return (function (state_28212){
var state_val_28213 = (state_28212[(1)]);
if((state_val_28213 === (7))){
var inst_28208 = (state_28212[(2)]);
var state_28212__$1 = state_28212;
var statearr_28214_28301 = state_28212__$1;
(statearr_28214_28301[(2)] = inst_28208);

(statearr_28214_28301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (20))){
var inst_28113 = (state_28212[(7)]);
var inst_28123 = cljs.core.first.call(null,inst_28113);
var inst_28124 = cljs.core.nth.call(null,inst_28123,(0),null);
var inst_28125 = cljs.core.nth.call(null,inst_28123,(1),null);
var state_28212__$1 = (function (){var statearr_28215 = state_28212;
(statearr_28215[(8)] = inst_28124);

return statearr_28215;
})();
if(cljs.core.truth_(inst_28125)){
var statearr_28216_28302 = state_28212__$1;
(statearr_28216_28302[(1)] = (22));

} else {
var statearr_28217_28303 = state_28212__$1;
(statearr_28217_28303[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (27))){
var inst_28084 = (state_28212[(9)]);
var inst_28153 = (state_28212[(10)]);
var inst_28155 = (state_28212[(11)]);
var inst_28160 = (state_28212[(12)]);
var inst_28160__$1 = cljs.core._nth.call(null,inst_28153,inst_28155);
var inst_28161 = cljs.core.async.put_BANG_.call(null,inst_28160__$1,inst_28084,done);
var state_28212__$1 = (function (){var statearr_28218 = state_28212;
(statearr_28218[(12)] = inst_28160__$1);

return statearr_28218;
})();
if(cljs.core.truth_(inst_28161)){
var statearr_28219_28304 = state_28212__$1;
(statearr_28219_28304[(1)] = (30));

} else {
var statearr_28220_28305 = state_28212__$1;
(statearr_28220_28305[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (1))){
var state_28212__$1 = state_28212;
var statearr_28221_28306 = state_28212__$1;
(statearr_28221_28306[(2)] = null);

(statearr_28221_28306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (24))){
var inst_28113 = (state_28212[(7)]);
var inst_28130 = (state_28212[(2)]);
var inst_28131 = cljs.core.next.call(null,inst_28113);
var inst_28093 = inst_28131;
var inst_28094 = null;
var inst_28095 = (0);
var inst_28096 = (0);
var state_28212__$1 = (function (){var statearr_28222 = state_28212;
(statearr_28222[(13)] = inst_28130);

(statearr_28222[(14)] = inst_28094);

(statearr_28222[(15)] = inst_28095);

(statearr_28222[(16)] = inst_28093);

(statearr_28222[(17)] = inst_28096);

return statearr_28222;
})();
var statearr_28223_28307 = state_28212__$1;
(statearr_28223_28307[(2)] = null);

(statearr_28223_28307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (39))){
var state_28212__$1 = state_28212;
var statearr_28227_28308 = state_28212__$1;
(statearr_28227_28308[(2)] = null);

(statearr_28227_28308[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (4))){
var inst_28084 = (state_28212[(9)]);
var inst_28084__$1 = (state_28212[(2)]);
var inst_28085 = (inst_28084__$1 == null);
var state_28212__$1 = (function (){var statearr_28228 = state_28212;
(statearr_28228[(9)] = inst_28084__$1);

return statearr_28228;
})();
if(cljs.core.truth_(inst_28085)){
var statearr_28229_28309 = state_28212__$1;
(statearr_28229_28309[(1)] = (5));

} else {
var statearr_28230_28310 = state_28212__$1;
(statearr_28230_28310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (15))){
var inst_28094 = (state_28212[(14)]);
var inst_28095 = (state_28212[(15)]);
var inst_28093 = (state_28212[(16)]);
var inst_28096 = (state_28212[(17)]);
var inst_28109 = (state_28212[(2)]);
var inst_28110 = (inst_28096 + (1));
var tmp28224 = inst_28094;
var tmp28225 = inst_28095;
var tmp28226 = inst_28093;
var inst_28093__$1 = tmp28226;
var inst_28094__$1 = tmp28224;
var inst_28095__$1 = tmp28225;
var inst_28096__$1 = inst_28110;
var state_28212__$1 = (function (){var statearr_28231 = state_28212;
(statearr_28231[(14)] = inst_28094__$1);

(statearr_28231[(15)] = inst_28095__$1);

(statearr_28231[(16)] = inst_28093__$1);

(statearr_28231[(18)] = inst_28109);

(statearr_28231[(17)] = inst_28096__$1);

return statearr_28231;
})();
var statearr_28232_28311 = state_28212__$1;
(statearr_28232_28311[(2)] = null);

(statearr_28232_28311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (21))){
var inst_28134 = (state_28212[(2)]);
var state_28212__$1 = state_28212;
var statearr_28236_28312 = state_28212__$1;
(statearr_28236_28312[(2)] = inst_28134);

(statearr_28236_28312[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (31))){
var inst_28160 = (state_28212[(12)]);
var inst_28164 = done.call(null,null);
var inst_28165 = cljs.core.async.untap_STAR_.call(null,m,inst_28160);
var state_28212__$1 = (function (){var statearr_28237 = state_28212;
(statearr_28237[(19)] = inst_28164);

return statearr_28237;
})();
var statearr_28238_28313 = state_28212__$1;
(statearr_28238_28313[(2)] = inst_28165);

(statearr_28238_28313[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (32))){
var inst_28154 = (state_28212[(20)]);
var inst_28152 = (state_28212[(21)]);
var inst_28153 = (state_28212[(10)]);
var inst_28155 = (state_28212[(11)]);
var inst_28167 = (state_28212[(2)]);
var inst_28168 = (inst_28155 + (1));
var tmp28233 = inst_28154;
var tmp28234 = inst_28152;
var tmp28235 = inst_28153;
var inst_28152__$1 = tmp28234;
var inst_28153__$1 = tmp28235;
var inst_28154__$1 = tmp28233;
var inst_28155__$1 = inst_28168;
var state_28212__$1 = (function (){var statearr_28239 = state_28212;
(statearr_28239[(20)] = inst_28154__$1);

(statearr_28239[(21)] = inst_28152__$1);

(statearr_28239[(10)] = inst_28153__$1);

(statearr_28239[(11)] = inst_28155__$1);

(statearr_28239[(22)] = inst_28167);

return statearr_28239;
})();
var statearr_28240_28314 = state_28212__$1;
(statearr_28240_28314[(2)] = null);

(statearr_28240_28314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (40))){
var inst_28180 = (state_28212[(23)]);
var inst_28184 = done.call(null,null);
var inst_28185 = cljs.core.async.untap_STAR_.call(null,m,inst_28180);
var state_28212__$1 = (function (){var statearr_28241 = state_28212;
(statearr_28241[(24)] = inst_28184);

return statearr_28241;
})();
var statearr_28242_28315 = state_28212__$1;
(statearr_28242_28315[(2)] = inst_28185);

(statearr_28242_28315[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (33))){
var inst_28171 = (state_28212[(25)]);
var inst_28173 = cljs.core.chunked_seq_QMARK_.call(null,inst_28171);
var state_28212__$1 = state_28212;
if(inst_28173){
var statearr_28243_28316 = state_28212__$1;
(statearr_28243_28316[(1)] = (36));

} else {
var statearr_28244_28317 = state_28212__$1;
(statearr_28244_28317[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (13))){
var inst_28103 = (state_28212[(26)]);
var inst_28106 = cljs.core.async.close_BANG_.call(null,inst_28103);
var state_28212__$1 = state_28212;
var statearr_28245_28318 = state_28212__$1;
(statearr_28245_28318[(2)] = inst_28106);

(statearr_28245_28318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (22))){
var inst_28124 = (state_28212[(8)]);
var inst_28127 = cljs.core.async.close_BANG_.call(null,inst_28124);
var state_28212__$1 = state_28212;
var statearr_28246_28319 = state_28212__$1;
(statearr_28246_28319[(2)] = inst_28127);

(statearr_28246_28319[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (36))){
var inst_28171 = (state_28212[(25)]);
var inst_28175 = cljs.core.chunk_first.call(null,inst_28171);
var inst_28176 = cljs.core.chunk_rest.call(null,inst_28171);
var inst_28177 = cljs.core.count.call(null,inst_28175);
var inst_28152 = inst_28176;
var inst_28153 = inst_28175;
var inst_28154 = inst_28177;
var inst_28155 = (0);
var state_28212__$1 = (function (){var statearr_28247 = state_28212;
(statearr_28247[(20)] = inst_28154);

(statearr_28247[(21)] = inst_28152);

(statearr_28247[(10)] = inst_28153);

(statearr_28247[(11)] = inst_28155);

return statearr_28247;
})();
var statearr_28248_28320 = state_28212__$1;
(statearr_28248_28320[(2)] = null);

(statearr_28248_28320[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (41))){
var inst_28171 = (state_28212[(25)]);
var inst_28187 = (state_28212[(2)]);
var inst_28188 = cljs.core.next.call(null,inst_28171);
var inst_28152 = inst_28188;
var inst_28153 = null;
var inst_28154 = (0);
var inst_28155 = (0);
var state_28212__$1 = (function (){var statearr_28249 = state_28212;
(statearr_28249[(20)] = inst_28154);

(statearr_28249[(21)] = inst_28152);

(statearr_28249[(10)] = inst_28153);

(statearr_28249[(11)] = inst_28155);

(statearr_28249[(27)] = inst_28187);

return statearr_28249;
})();
var statearr_28250_28321 = state_28212__$1;
(statearr_28250_28321[(2)] = null);

(statearr_28250_28321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (43))){
var state_28212__$1 = state_28212;
var statearr_28251_28322 = state_28212__$1;
(statearr_28251_28322[(2)] = null);

(statearr_28251_28322[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (29))){
var inst_28196 = (state_28212[(2)]);
var state_28212__$1 = state_28212;
var statearr_28252_28323 = state_28212__$1;
(statearr_28252_28323[(2)] = inst_28196);

(statearr_28252_28323[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (44))){
var inst_28205 = (state_28212[(2)]);
var state_28212__$1 = (function (){var statearr_28253 = state_28212;
(statearr_28253[(28)] = inst_28205);

return statearr_28253;
})();
var statearr_28254_28324 = state_28212__$1;
(statearr_28254_28324[(2)] = null);

(statearr_28254_28324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (6))){
var inst_28144 = (state_28212[(29)]);
var inst_28143 = cljs.core.deref.call(null,cs);
var inst_28144__$1 = cljs.core.keys.call(null,inst_28143);
var inst_28145 = cljs.core.count.call(null,inst_28144__$1);
var inst_28146 = cljs.core.reset_BANG_.call(null,dctr,inst_28145);
var inst_28151 = cljs.core.seq.call(null,inst_28144__$1);
var inst_28152 = inst_28151;
var inst_28153 = null;
var inst_28154 = (0);
var inst_28155 = (0);
var state_28212__$1 = (function (){var statearr_28255 = state_28212;
(statearr_28255[(20)] = inst_28154);

(statearr_28255[(21)] = inst_28152);

(statearr_28255[(10)] = inst_28153);

(statearr_28255[(30)] = inst_28146);

(statearr_28255[(11)] = inst_28155);

(statearr_28255[(29)] = inst_28144__$1);

return statearr_28255;
})();
var statearr_28256_28325 = state_28212__$1;
(statearr_28256_28325[(2)] = null);

(statearr_28256_28325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (28))){
var inst_28152 = (state_28212[(21)]);
var inst_28171 = (state_28212[(25)]);
var inst_28171__$1 = cljs.core.seq.call(null,inst_28152);
var state_28212__$1 = (function (){var statearr_28257 = state_28212;
(statearr_28257[(25)] = inst_28171__$1);

return statearr_28257;
})();
if(inst_28171__$1){
var statearr_28258_28326 = state_28212__$1;
(statearr_28258_28326[(1)] = (33));

} else {
var statearr_28259_28327 = state_28212__$1;
(statearr_28259_28327[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (25))){
var inst_28154 = (state_28212[(20)]);
var inst_28155 = (state_28212[(11)]);
var inst_28157 = (inst_28155 < inst_28154);
var inst_28158 = inst_28157;
var state_28212__$1 = state_28212;
if(cljs.core.truth_(inst_28158)){
var statearr_28260_28328 = state_28212__$1;
(statearr_28260_28328[(1)] = (27));

} else {
var statearr_28261_28329 = state_28212__$1;
(statearr_28261_28329[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (34))){
var state_28212__$1 = state_28212;
var statearr_28262_28330 = state_28212__$1;
(statearr_28262_28330[(2)] = null);

(statearr_28262_28330[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (17))){
var state_28212__$1 = state_28212;
var statearr_28263_28331 = state_28212__$1;
(statearr_28263_28331[(2)] = null);

(statearr_28263_28331[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (3))){
var inst_28210 = (state_28212[(2)]);
var state_28212__$1 = state_28212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28212__$1,inst_28210);
} else {
if((state_val_28213 === (12))){
var inst_28139 = (state_28212[(2)]);
var state_28212__$1 = state_28212;
var statearr_28264_28332 = state_28212__$1;
(statearr_28264_28332[(2)] = inst_28139);

(statearr_28264_28332[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (2))){
var state_28212__$1 = state_28212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28212__$1,(4),ch);
} else {
if((state_val_28213 === (23))){
var state_28212__$1 = state_28212;
var statearr_28265_28333 = state_28212__$1;
(statearr_28265_28333[(2)] = null);

(statearr_28265_28333[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (35))){
var inst_28194 = (state_28212[(2)]);
var state_28212__$1 = state_28212;
var statearr_28266_28334 = state_28212__$1;
(statearr_28266_28334[(2)] = inst_28194);

(statearr_28266_28334[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (19))){
var inst_28113 = (state_28212[(7)]);
var inst_28117 = cljs.core.chunk_first.call(null,inst_28113);
var inst_28118 = cljs.core.chunk_rest.call(null,inst_28113);
var inst_28119 = cljs.core.count.call(null,inst_28117);
var inst_28093 = inst_28118;
var inst_28094 = inst_28117;
var inst_28095 = inst_28119;
var inst_28096 = (0);
var state_28212__$1 = (function (){var statearr_28267 = state_28212;
(statearr_28267[(14)] = inst_28094);

(statearr_28267[(15)] = inst_28095);

(statearr_28267[(16)] = inst_28093);

(statearr_28267[(17)] = inst_28096);

return statearr_28267;
})();
var statearr_28268_28335 = state_28212__$1;
(statearr_28268_28335[(2)] = null);

(statearr_28268_28335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (11))){
var inst_28113 = (state_28212[(7)]);
var inst_28093 = (state_28212[(16)]);
var inst_28113__$1 = cljs.core.seq.call(null,inst_28093);
var state_28212__$1 = (function (){var statearr_28269 = state_28212;
(statearr_28269[(7)] = inst_28113__$1);

return statearr_28269;
})();
if(inst_28113__$1){
var statearr_28270_28336 = state_28212__$1;
(statearr_28270_28336[(1)] = (16));

} else {
var statearr_28271_28337 = state_28212__$1;
(statearr_28271_28337[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (9))){
var inst_28141 = (state_28212[(2)]);
var state_28212__$1 = state_28212;
var statearr_28272_28338 = state_28212__$1;
(statearr_28272_28338[(2)] = inst_28141);

(statearr_28272_28338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (5))){
var inst_28091 = cljs.core.deref.call(null,cs);
var inst_28092 = cljs.core.seq.call(null,inst_28091);
var inst_28093 = inst_28092;
var inst_28094 = null;
var inst_28095 = (0);
var inst_28096 = (0);
var state_28212__$1 = (function (){var statearr_28273 = state_28212;
(statearr_28273[(14)] = inst_28094);

(statearr_28273[(15)] = inst_28095);

(statearr_28273[(16)] = inst_28093);

(statearr_28273[(17)] = inst_28096);

return statearr_28273;
})();
var statearr_28274_28339 = state_28212__$1;
(statearr_28274_28339[(2)] = null);

(statearr_28274_28339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (14))){
var state_28212__$1 = state_28212;
var statearr_28275_28340 = state_28212__$1;
(statearr_28275_28340[(2)] = null);

(statearr_28275_28340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (45))){
var inst_28202 = (state_28212[(2)]);
var state_28212__$1 = state_28212;
var statearr_28276_28341 = state_28212__$1;
(statearr_28276_28341[(2)] = inst_28202);

(statearr_28276_28341[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (26))){
var inst_28144 = (state_28212[(29)]);
var inst_28198 = (state_28212[(2)]);
var inst_28199 = cljs.core.seq.call(null,inst_28144);
var state_28212__$1 = (function (){var statearr_28277 = state_28212;
(statearr_28277[(31)] = inst_28198);

return statearr_28277;
})();
if(inst_28199){
var statearr_28278_28342 = state_28212__$1;
(statearr_28278_28342[(1)] = (42));

} else {
var statearr_28279_28343 = state_28212__$1;
(statearr_28279_28343[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (16))){
var inst_28113 = (state_28212[(7)]);
var inst_28115 = cljs.core.chunked_seq_QMARK_.call(null,inst_28113);
var state_28212__$1 = state_28212;
if(inst_28115){
var statearr_28280_28344 = state_28212__$1;
(statearr_28280_28344[(1)] = (19));

} else {
var statearr_28281_28345 = state_28212__$1;
(statearr_28281_28345[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (38))){
var inst_28191 = (state_28212[(2)]);
var state_28212__$1 = state_28212;
var statearr_28282_28346 = state_28212__$1;
(statearr_28282_28346[(2)] = inst_28191);

(statearr_28282_28346[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (30))){
var state_28212__$1 = state_28212;
var statearr_28283_28347 = state_28212__$1;
(statearr_28283_28347[(2)] = null);

(statearr_28283_28347[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (10))){
var inst_28094 = (state_28212[(14)]);
var inst_28096 = (state_28212[(17)]);
var inst_28102 = cljs.core._nth.call(null,inst_28094,inst_28096);
var inst_28103 = cljs.core.nth.call(null,inst_28102,(0),null);
var inst_28104 = cljs.core.nth.call(null,inst_28102,(1),null);
var state_28212__$1 = (function (){var statearr_28284 = state_28212;
(statearr_28284[(26)] = inst_28103);

return statearr_28284;
})();
if(cljs.core.truth_(inst_28104)){
var statearr_28285_28348 = state_28212__$1;
(statearr_28285_28348[(1)] = (13));

} else {
var statearr_28286_28349 = state_28212__$1;
(statearr_28286_28349[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (18))){
var inst_28137 = (state_28212[(2)]);
var state_28212__$1 = state_28212;
var statearr_28287_28350 = state_28212__$1;
(statearr_28287_28350[(2)] = inst_28137);

(statearr_28287_28350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (42))){
var state_28212__$1 = state_28212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28212__$1,(45),dchan);
} else {
if((state_val_28213 === (37))){
var inst_28084 = (state_28212[(9)]);
var inst_28171 = (state_28212[(25)]);
var inst_28180 = (state_28212[(23)]);
var inst_28180__$1 = cljs.core.first.call(null,inst_28171);
var inst_28181 = cljs.core.async.put_BANG_.call(null,inst_28180__$1,inst_28084,done);
var state_28212__$1 = (function (){var statearr_28288 = state_28212;
(statearr_28288[(23)] = inst_28180__$1);

return statearr_28288;
})();
if(cljs.core.truth_(inst_28181)){
var statearr_28289_28351 = state_28212__$1;
(statearr_28289_28351[(1)] = (39));

} else {
var statearr_28290_28352 = state_28212__$1;
(statearr_28290_28352[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28213 === (8))){
var inst_28095 = (state_28212[(15)]);
var inst_28096 = (state_28212[(17)]);
var inst_28098 = (inst_28096 < inst_28095);
var inst_28099 = inst_28098;
var state_28212__$1 = state_28212;
if(cljs.core.truth_(inst_28099)){
var statearr_28291_28353 = state_28212__$1;
(statearr_28291_28353[(1)] = (10));

} else {
var statearr_28292_28354 = state_28212__$1;
(statearr_28292_28354[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15996__auto___28300,cs,m,dchan,dctr,done))
;
return ((function (switch__15940__auto__,c__15996__auto___28300,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_28296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28296[(0)] = state_machine__15941__auto__);

(statearr_28296[(1)] = (1));

return statearr_28296;
});
var state_machine__15941__auto____1 = (function (state_28212){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_28212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e28297){if((e28297 instanceof Object)){
var ex__15944__auto__ = e28297;
var statearr_28298_28355 = state_28212;
(statearr_28298_28355[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28356 = state_28212;
state_28212 = G__28356;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_28212){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_28212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto___28300,cs,m,dchan,dctr,done))
})();
var state__15998__auto__ = (function (){var statearr_28299 = f__15997__auto__.call(null);
(statearr_28299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___28300);

return statearr_28299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto___28300,cs,m,dchan,dctr,done))
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
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

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
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj28358 = {};
return obj28358;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__13316__auto__ = m;
if(and__13316__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__13316__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__13972__auto__ = (((m == null))?null:m);
return (function (){var or__13328__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__13316__auto__ = m;
if(and__13316__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__13316__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__13972__auto__ = (((m == null))?null:m);
return (function (){var or__13328__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__13316__auto__ = m;
if(and__13316__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__13316__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__13972__auto__ = (((m == null))?null:m);
return (function (){var or__13328__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__13316__auto__ = m;
if(and__13316__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__13316__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__13972__auto__ = (((m == null))?null:m);
return (function (){var or__13328__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__13316__auto__ = m;
if(and__13316__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__13316__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__13972__auto__ = (((m == null))?null:m);
return (function (){var or__13328__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__28359){
var map__28364 = p__28359;
var map__28364__$1 = ((cljs.core.seq_QMARK_.call(null,map__28364))?cljs.core.apply.call(null,cljs.core.hash_map,map__28364):map__28364);
var opts = map__28364__$1;
var statearr_28365_28368 = state;
(statearr_28365_28368[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__28364,map__28364__$1,opts){
return (function (val){
var statearr_28366_28369 = state;
(statearr_28366_28369[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28364,map__28364__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_28367_28370 = state;
(statearr_28367_28370[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__28359 = null;
if (arguments.length > 3) {
var G__28371__i = 0, G__28371__a = new Array(arguments.length -  3);
while (G__28371__i < G__28371__a.length) {G__28371__a[G__28371__i] = arguments[G__28371__i + 3]; ++G__28371__i;}
  p__28359 = new cljs.core.IndexedSeq(G__28371__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__28359);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__28372){
var state = cljs.core.first(arglist__28372);
arglist__28372 = cljs.core.next(arglist__28372);
var cont_block = cljs.core.first(arglist__28372);
arglist__28372 = cljs.core.next(arglist__28372);
var ports = cljs.core.first(arglist__28372);
var p__28359 = cljs.core.rest(arglist__28372);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__28359);
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
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t28492 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28492 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28493){
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
this.meta28493 = meta28493;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28492.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28492.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28492.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28492.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28492.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28492.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28492.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28492.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28492.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28494){
var self__ = this;
var _28494__$1 = this;
return self__.meta28493;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28494,meta28493__$1){
var self__ = this;
var _28494__$1 = this;
return (new cljs.core.async.t28492(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28493__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28492.cljs$lang$type = true;

cljs.core.async.t28492.cljs$lang$ctorStr = "cljs.core.async/t28492";

cljs.core.async.t28492.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13915__auto__,writer__13916__auto__,opt__13917__auto__){
return cljs.core._write.call(null,writer__13916__auto__,"cljs.core.async/t28492");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28492 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t28492(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28493){
return (new cljs.core.async.t28492(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28493));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28492(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15996__auto___28611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto___28611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto___28611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28564){
var state_val_28565 = (state_28564[(1)]);
if((state_val_28565 === (7))){
var inst_28508 = (state_28564[(7)]);
var inst_28513 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28508);
var state_28564__$1 = state_28564;
var statearr_28566_28612 = state_28564__$1;
(statearr_28566_28612[(2)] = inst_28513);

(statearr_28566_28612[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (20))){
var inst_28523 = (state_28564[(8)]);
var state_28564__$1 = state_28564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28564__$1,(23),out,inst_28523);
} else {
if((state_val_28565 === (1))){
var inst_28498 = (state_28564[(9)]);
var inst_28498__$1 = calc_state.call(null);
var inst_28499 = cljs.core.seq_QMARK_.call(null,inst_28498__$1);
var state_28564__$1 = (function (){var statearr_28567 = state_28564;
(statearr_28567[(9)] = inst_28498__$1);

return statearr_28567;
})();
if(inst_28499){
var statearr_28568_28613 = state_28564__$1;
(statearr_28568_28613[(1)] = (2));

} else {
var statearr_28569_28614 = state_28564__$1;
(statearr_28569_28614[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (24))){
var inst_28516 = (state_28564[(10)]);
var inst_28508 = inst_28516;
var state_28564__$1 = (function (){var statearr_28570 = state_28564;
(statearr_28570[(7)] = inst_28508);

return statearr_28570;
})();
var statearr_28571_28615 = state_28564__$1;
(statearr_28571_28615[(2)] = null);

(statearr_28571_28615[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (4))){
var inst_28498 = (state_28564[(9)]);
var inst_28504 = (state_28564[(2)]);
var inst_28505 = cljs.core.get.call(null,inst_28504,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28506 = cljs.core.get.call(null,inst_28504,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28507 = cljs.core.get.call(null,inst_28504,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28508 = inst_28498;
var state_28564__$1 = (function (){var statearr_28572 = state_28564;
(statearr_28572[(11)] = inst_28507);

(statearr_28572[(12)] = inst_28505);

(statearr_28572[(7)] = inst_28508);

(statearr_28572[(13)] = inst_28506);

return statearr_28572;
})();
var statearr_28573_28616 = state_28564__$1;
(statearr_28573_28616[(2)] = null);

(statearr_28573_28616[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (15))){
var state_28564__$1 = state_28564;
var statearr_28574_28617 = state_28564__$1;
(statearr_28574_28617[(2)] = null);

(statearr_28574_28617[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (21))){
var inst_28516 = (state_28564[(10)]);
var inst_28508 = inst_28516;
var state_28564__$1 = (function (){var statearr_28575 = state_28564;
(statearr_28575[(7)] = inst_28508);

return statearr_28575;
})();
var statearr_28576_28618 = state_28564__$1;
(statearr_28576_28618[(2)] = null);

(statearr_28576_28618[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (13))){
var inst_28560 = (state_28564[(2)]);
var state_28564__$1 = state_28564;
var statearr_28577_28619 = state_28564__$1;
(statearr_28577_28619[(2)] = inst_28560);

(statearr_28577_28619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (22))){
var inst_28558 = (state_28564[(2)]);
var state_28564__$1 = state_28564;
var statearr_28578_28620 = state_28564__$1;
(statearr_28578_28620[(2)] = inst_28558);

(statearr_28578_28620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (6))){
var inst_28562 = (state_28564[(2)]);
var state_28564__$1 = state_28564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28564__$1,inst_28562);
} else {
if((state_val_28565 === (25))){
var state_28564__$1 = state_28564;
var statearr_28579_28621 = state_28564__$1;
(statearr_28579_28621[(2)] = null);

(statearr_28579_28621[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (17))){
var inst_28538 = (state_28564[(14)]);
var state_28564__$1 = state_28564;
var statearr_28580_28622 = state_28564__$1;
(statearr_28580_28622[(2)] = inst_28538);

(statearr_28580_28622[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (3))){
var inst_28498 = (state_28564[(9)]);
var state_28564__$1 = state_28564;
var statearr_28581_28623 = state_28564__$1;
(statearr_28581_28623[(2)] = inst_28498);

(statearr_28581_28623[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (12))){
var inst_28538 = (state_28564[(14)]);
var inst_28524 = (state_28564[(15)]);
var inst_28519 = (state_28564[(16)]);
var inst_28538__$1 = inst_28519.call(null,inst_28524);
var state_28564__$1 = (function (){var statearr_28582 = state_28564;
(statearr_28582[(14)] = inst_28538__$1);

return statearr_28582;
})();
if(cljs.core.truth_(inst_28538__$1)){
var statearr_28583_28624 = state_28564__$1;
(statearr_28583_28624[(1)] = (17));

} else {
var statearr_28584_28625 = state_28564__$1;
(statearr_28584_28625[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (2))){
var inst_28498 = (state_28564[(9)]);
var inst_28501 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28498);
var state_28564__$1 = state_28564;
var statearr_28585_28626 = state_28564__$1;
(statearr_28585_28626[(2)] = inst_28501);

(statearr_28585_28626[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (23))){
var inst_28549 = (state_28564[(2)]);
var state_28564__$1 = state_28564;
if(cljs.core.truth_(inst_28549)){
var statearr_28586_28627 = state_28564__$1;
(statearr_28586_28627[(1)] = (24));

} else {
var statearr_28587_28628 = state_28564__$1;
(statearr_28587_28628[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (19))){
var inst_28546 = (state_28564[(2)]);
var state_28564__$1 = state_28564;
if(cljs.core.truth_(inst_28546)){
var statearr_28588_28629 = state_28564__$1;
(statearr_28588_28629[(1)] = (20));

} else {
var statearr_28589_28630 = state_28564__$1;
(statearr_28589_28630[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (11))){
var inst_28523 = (state_28564[(8)]);
var inst_28529 = (inst_28523 == null);
var state_28564__$1 = state_28564;
if(cljs.core.truth_(inst_28529)){
var statearr_28590_28631 = state_28564__$1;
(statearr_28590_28631[(1)] = (14));

} else {
var statearr_28591_28632 = state_28564__$1;
(statearr_28591_28632[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (9))){
var inst_28516 = (state_28564[(10)]);
var inst_28516__$1 = (state_28564[(2)]);
var inst_28517 = cljs.core.get.call(null,inst_28516__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28518 = cljs.core.get.call(null,inst_28516__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28519 = cljs.core.get.call(null,inst_28516__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28564__$1 = (function (){var statearr_28592 = state_28564;
(statearr_28592[(17)] = inst_28518);

(statearr_28592[(16)] = inst_28519);

(statearr_28592[(10)] = inst_28516__$1);

return statearr_28592;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28564__$1,(10),inst_28517);
} else {
if((state_val_28565 === (5))){
var inst_28508 = (state_28564[(7)]);
var inst_28511 = cljs.core.seq_QMARK_.call(null,inst_28508);
var state_28564__$1 = state_28564;
if(inst_28511){
var statearr_28593_28633 = state_28564__$1;
(statearr_28593_28633[(1)] = (7));

} else {
var statearr_28594_28634 = state_28564__$1;
(statearr_28594_28634[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (14))){
var inst_28524 = (state_28564[(15)]);
var inst_28531 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28524);
var state_28564__$1 = state_28564;
var statearr_28595_28635 = state_28564__$1;
(statearr_28595_28635[(2)] = inst_28531);

(statearr_28595_28635[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (26))){
var inst_28554 = (state_28564[(2)]);
var state_28564__$1 = state_28564;
var statearr_28596_28636 = state_28564__$1;
(statearr_28596_28636[(2)] = inst_28554);

(statearr_28596_28636[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (16))){
var inst_28534 = (state_28564[(2)]);
var inst_28535 = calc_state.call(null);
var inst_28508 = inst_28535;
var state_28564__$1 = (function (){var statearr_28597 = state_28564;
(statearr_28597[(7)] = inst_28508);

(statearr_28597[(18)] = inst_28534);

return statearr_28597;
})();
var statearr_28598_28637 = state_28564__$1;
(statearr_28598_28637[(2)] = null);

(statearr_28598_28637[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (10))){
var inst_28524 = (state_28564[(15)]);
var inst_28523 = (state_28564[(8)]);
var inst_28522 = (state_28564[(2)]);
var inst_28523__$1 = cljs.core.nth.call(null,inst_28522,(0),null);
var inst_28524__$1 = cljs.core.nth.call(null,inst_28522,(1),null);
var inst_28525 = (inst_28523__$1 == null);
var inst_28526 = cljs.core._EQ_.call(null,inst_28524__$1,change);
var inst_28527 = (inst_28525) || (inst_28526);
var state_28564__$1 = (function (){var statearr_28599 = state_28564;
(statearr_28599[(15)] = inst_28524__$1);

(statearr_28599[(8)] = inst_28523__$1);

return statearr_28599;
})();
if(cljs.core.truth_(inst_28527)){
var statearr_28600_28638 = state_28564__$1;
(statearr_28600_28638[(1)] = (11));

} else {
var statearr_28601_28639 = state_28564__$1;
(statearr_28601_28639[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (18))){
var inst_28518 = (state_28564[(17)]);
var inst_28524 = (state_28564[(15)]);
var inst_28519 = (state_28564[(16)]);
var inst_28541 = cljs.core.empty_QMARK_.call(null,inst_28519);
var inst_28542 = inst_28518.call(null,inst_28524);
var inst_28543 = cljs.core.not.call(null,inst_28542);
var inst_28544 = (inst_28541) && (inst_28543);
var state_28564__$1 = state_28564;
var statearr_28602_28640 = state_28564__$1;
(statearr_28602_28640[(2)] = inst_28544);

(statearr_28602_28640[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (8))){
var inst_28508 = (state_28564[(7)]);
var state_28564__$1 = state_28564;
var statearr_28603_28641 = state_28564__$1;
(statearr_28603_28641[(2)] = inst_28508);

(statearr_28603_28641[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15996__auto___28611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15940__auto__,c__15996__auto___28611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_28607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28607[(0)] = state_machine__15941__auto__);

(statearr_28607[(1)] = (1));

return statearr_28607;
});
var state_machine__15941__auto____1 = (function (state_28564){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_28564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e28608){if((e28608 instanceof Object)){
var ex__15944__auto__ = e28608;
var statearr_28609_28642 = state_28564;
(statearr_28609_28642[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28643 = state_28564;
state_28564 = G__28643;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_28564){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_28564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto___28611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15998__auto__ = (function (){var statearr_28610 = f__15997__auto__.call(null);
(statearr_28610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___28611);

return statearr_28610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto___28611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj28645 = {};
return obj28645;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__13316__auto__ = p;
if(and__13316__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__13316__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__13972__auto__ = (((p == null))?null:p);
return (function (){var or__13328__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__13316__auto__ = p;
if(and__13316__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__13316__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__13972__auto__ = (((p == null))?null:p);
return (function (){var or__13328__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__13316__auto__ = p;
if(and__13316__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__13316__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__13972__auto__ = (((p == null))?null:p);
return (function (){var or__13328__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__13316__auto__ = p;
if(and__13316__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__13316__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__13972__auto__ = (((p == null))?null:p);
return (function (){var or__13328__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13972__auto__)]);
if(or__13328__auto__){
return or__13328__auto__;
} else {
var or__13328__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__13328__auto____$1){
return or__13328__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__13328__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__13328__auto__)){
return or__13328__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__13328__auto__,mults){
return (function (p1__28646_SHARP_){
if(cljs.core.truth_(p1__28646_SHARP_.call(null,topic))){
return p1__28646_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28646_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13328__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28769 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28769 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta28770){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta28770 = meta28770;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28769.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28769.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28769.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t28769.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28769.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28769.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28769.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28769.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28771){
var self__ = this;
var _28771__$1 = this;
return self__.meta28770;
});})(mults,ensure_mult))
;

cljs.core.async.t28769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28771,meta28770__$1){
var self__ = this;
var _28771__$1 = this;
return (new cljs.core.async.t28769(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta28770__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28769.cljs$lang$type = true;

cljs.core.async.t28769.cljs$lang$ctorStr = "cljs.core.async/t28769";

cljs.core.async.t28769.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13915__auto__,writer__13916__auto__,opt__13917__auto__){
return cljs.core._write.call(null,writer__13916__auto__,"cljs.core.async/t28769");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28769 = ((function (mults,ensure_mult){
return (function __GT_t28769(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28770){
return (new cljs.core.async.t28769(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28770));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28769(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15996__auto___28891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto___28891,mults,ensure_mult,p){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto___28891,mults,ensure_mult,p){
return (function (state_28843){
var state_val_28844 = (state_28843[(1)]);
if((state_val_28844 === (7))){
var inst_28839 = (state_28843[(2)]);
var state_28843__$1 = state_28843;
var statearr_28845_28892 = state_28843__$1;
(statearr_28845_28892[(2)] = inst_28839);

(statearr_28845_28892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (20))){
var state_28843__$1 = state_28843;
var statearr_28846_28893 = state_28843__$1;
(statearr_28846_28893[(2)] = null);

(statearr_28846_28893[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (1))){
var state_28843__$1 = state_28843;
var statearr_28847_28894 = state_28843__$1;
(statearr_28847_28894[(2)] = null);

(statearr_28847_28894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (24))){
var inst_28822 = (state_28843[(7)]);
var inst_28831 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28822);
var state_28843__$1 = state_28843;
var statearr_28848_28895 = state_28843__$1;
(statearr_28848_28895[(2)] = inst_28831);

(statearr_28848_28895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (4))){
var inst_28774 = (state_28843[(8)]);
var inst_28774__$1 = (state_28843[(2)]);
var inst_28775 = (inst_28774__$1 == null);
var state_28843__$1 = (function (){var statearr_28849 = state_28843;
(statearr_28849[(8)] = inst_28774__$1);

return statearr_28849;
})();
if(cljs.core.truth_(inst_28775)){
var statearr_28850_28896 = state_28843__$1;
(statearr_28850_28896[(1)] = (5));

} else {
var statearr_28851_28897 = state_28843__$1;
(statearr_28851_28897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (15))){
var inst_28816 = (state_28843[(2)]);
var state_28843__$1 = state_28843;
var statearr_28852_28898 = state_28843__$1;
(statearr_28852_28898[(2)] = inst_28816);

(statearr_28852_28898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (21))){
var inst_28836 = (state_28843[(2)]);
var state_28843__$1 = (function (){var statearr_28853 = state_28843;
(statearr_28853[(9)] = inst_28836);

return statearr_28853;
})();
var statearr_28854_28899 = state_28843__$1;
(statearr_28854_28899[(2)] = null);

(statearr_28854_28899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (13))){
var inst_28798 = (state_28843[(10)]);
var inst_28800 = cljs.core.chunked_seq_QMARK_.call(null,inst_28798);
var state_28843__$1 = state_28843;
if(inst_28800){
var statearr_28855_28900 = state_28843__$1;
(statearr_28855_28900[(1)] = (16));

} else {
var statearr_28856_28901 = state_28843__$1;
(statearr_28856_28901[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (22))){
var inst_28828 = (state_28843[(2)]);
var state_28843__$1 = state_28843;
if(cljs.core.truth_(inst_28828)){
var statearr_28857_28902 = state_28843__$1;
(statearr_28857_28902[(1)] = (23));

} else {
var statearr_28858_28903 = state_28843__$1;
(statearr_28858_28903[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (6))){
var inst_28822 = (state_28843[(7)]);
var inst_28824 = (state_28843[(11)]);
var inst_28774 = (state_28843[(8)]);
var inst_28822__$1 = topic_fn.call(null,inst_28774);
var inst_28823 = cljs.core.deref.call(null,mults);
var inst_28824__$1 = cljs.core.get.call(null,inst_28823,inst_28822__$1);
var state_28843__$1 = (function (){var statearr_28859 = state_28843;
(statearr_28859[(7)] = inst_28822__$1);

(statearr_28859[(11)] = inst_28824__$1);

return statearr_28859;
})();
if(cljs.core.truth_(inst_28824__$1)){
var statearr_28860_28904 = state_28843__$1;
(statearr_28860_28904[(1)] = (19));

} else {
var statearr_28861_28905 = state_28843__$1;
(statearr_28861_28905[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (25))){
var inst_28833 = (state_28843[(2)]);
var state_28843__$1 = state_28843;
var statearr_28862_28906 = state_28843__$1;
(statearr_28862_28906[(2)] = inst_28833);

(statearr_28862_28906[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (17))){
var inst_28798 = (state_28843[(10)]);
var inst_28807 = cljs.core.first.call(null,inst_28798);
var inst_28808 = cljs.core.async.muxch_STAR_.call(null,inst_28807);
var inst_28809 = cljs.core.async.close_BANG_.call(null,inst_28808);
var inst_28810 = cljs.core.next.call(null,inst_28798);
var inst_28784 = inst_28810;
var inst_28785 = null;
var inst_28786 = (0);
var inst_28787 = (0);
var state_28843__$1 = (function (){var statearr_28863 = state_28843;
(statearr_28863[(12)] = inst_28787);

(statearr_28863[(13)] = inst_28784);

(statearr_28863[(14)] = inst_28809);

(statearr_28863[(15)] = inst_28786);

(statearr_28863[(16)] = inst_28785);

return statearr_28863;
})();
var statearr_28864_28907 = state_28843__$1;
(statearr_28864_28907[(2)] = null);

(statearr_28864_28907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (3))){
var inst_28841 = (state_28843[(2)]);
var state_28843__$1 = state_28843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28843__$1,inst_28841);
} else {
if((state_val_28844 === (12))){
var inst_28818 = (state_28843[(2)]);
var state_28843__$1 = state_28843;
var statearr_28865_28908 = state_28843__$1;
(statearr_28865_28908[(2)] = inst_28818);

(statearr_28865_28908[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (2))){
var state_28843__$1 = state_28843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28843__$1,(4),ch);
} else {
if((state_val_28844 === (23))){
var state_28843__$1 = state_28843;
var statearr_28866_28909 = state_28843__$1;
(statearr_28866_28909[(2)] = null);

(statearr_28866_28909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (19))){
var inst_28824 = (state_28843[(11)]);
var inst_28774 = (state_28843[(8)]);
var inst_28826 = cljs.core.async.muxch_STAR_.call(null,inst_28824);
var state_28843__$1 = state_28843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28843__$1,(22),inst_28826,inst_28774);
} else {
if((state_val_28844 === (11))){
var inst_28784 = (state_28843[(13)]);
var inst_28798 = (state_28843[(10)]);
var inst_28798__$1 = cljs.core.seq.call(null,inst_28784);
var state_28843__$1 = (function (){var statearr_28867 = state_28843;
(statearr_28867[(10)] = inst_28798__$1);

return statearr_28867;
})();
if(inst_28798__$1){
var statearr_28868_28910 = state_28843__$1;
(statearr_28868_28910[(1)] = (13));

} else {
var statearr_28869_28911 = state_28843__$1;
(statearr_28869_28911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (9))){
var inst_28820 = (state_28843[(2)]);
var state_28843__$1 = state_28843;
var statearr_28870_28912 = state_28843__$1;
(statearr_28870_28912[(2)] = inst_28820);

(statearr_28870_28912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (5))){
var inst_28781 = cljs.core.deref.call(null,mults);
var inst_28782 = cljs.core.vals.call(null,inst_28781);
var inst_28783 = cljs.core.seq.call(null,inst_28782);
var inst_28784 = inst_28783;
var inst_28785 = null;
var inst_28786 = (0);
var inst_28787 = (0);
var state_28843__$1 = (function (){var statearr_28871 = state_28843;
(statearr_28871[(12)] = inst_28787);

(statearr_28871[(13)] = inst_28784);

(statearr_28871[(15)] = inst_28786);

(statearr_28871[(16)] = inst_28785);

return statearr_28871;
})();
var statearr_28872_28913 = state_28843__$1;
(statearr_28872_28913[(2)] = null);

(statearr_28872_28913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (14))){
var state_28843__$1 = state_28843;
var statearr_28876_28914 = state_28843__$1;
(statearr_28876_28914[(2)] = null);

(statearr_28876_28914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (16))){
var inst_28798 = (state_28843[(10)]);
var inst_28802 = cljs.core.chunk_first.call(null,inst_28798);
var inst_28803 = cljs.core.chunk_rest.call(null,inst_28798);
var inst_28804 = cljs.core.count.call(null,inst_28802);
var inst_28784 = inst_28803;
var inst_28785 = inst_28802;
var inst_28786 = inst_28804;
var inst_28787 = (0);
var state_28843__$1 = (function (){var statearr_28877 = state_28843;
(statearr_28877[(12)] = inst_28787);

(statearr_28877[(13)] = inst_28784);

(statearr_28877[(15)] = inst_28786);

(statearr_28877[(16)] = inst_28785);

return statearr_28877;
})();
var statearr_28878_28915 = state_28843__$1;
(statearr_28878_28915[(2)] = null);

(statearr_28878_28915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (10))){
var inst_28787 = (state_28843[(12)]);
var inst_28784 = (state_28843[(13)]);
var inst_28786 = (state_28843[(15)]);
var inst_28785 = (state_28843[(16)]);
var inst_28792 = cljs.core._nth.call(null,inst_28785,inst_28787);
var inst_28793 = cljs.core.async.muxch_STAR_.call(null,inst_28792);
var inst_28794 = cljs.core.async.close_BANG_.call(null,inst_28793);
var inst_28795 = (inst_28787 + (1));
var tmp28873 = inst_28784;
var tmp28874 = inst_28786;
var tmp28875 = inst_28785;
var inst_28784__$1 = tmp28873;
var inst_28785__$1 = tmp28875;
var inst_28786__$1 = tmp28874;
var inst_28787__$1 = inst_28795;
var state_28843__$1 = (function (){var statearr_28879 = state_28843;
(statearr_28879[(12)] = inst_28787__$1);

(statearr_28879[(13)] = inst_28784__$1);

(statearr_28879[(15)] = inst_28786__$1);

(statearr_28879[(16)] = inst_28785__$1);

(statearr_28879[(17)] = inst_28794);

return statearr_28879;
})();
var statearr_28880_28916 = state_28843__$1;
(statearr_28880_28916[(2)] = null);

(statearr_28880_28916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (18))){
var inst_28813 = (state_28843[(2)]);
var state_28843__$1 = state_28843;
var statearr_28881_28917 = state_28843__$1;
(statearr_28881_28917[(2)] = inst_28813);

(statearr_28881_28917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28844 === (8))){
var inst_28787 = (state_28843[(12)]);
var inst_28786 = (state_28843[(15)]);
var inst_28789 = (inst_28787 < inst_28786);
var inst_28790 = inst_28789;
var state_28843__$1 = state_28843;
if(cljs.core.truth_(inst_28790)){
var statearr_28882_28918 = state_28843__$1;
(statearr_28882_28918[(1)] = (10));

} else {
var statearr_28883_28919 = state_28843__$1;
(statearr_28883_28919[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15996__auto___28891,mults,ensure_mult,p))
;
return ((function (switch__15940__auto__,c__15996__auto___28891,mults,ensure_mult,p){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_28887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28887[(0)] = state_machine__15941__auto__);

(statearr_28887[(1)] = (1));

return statearr_28887;
});
var state_machine__15941__auto____1 = (function (state_28843){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_28843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e28888){if((e28888 instanceof Object)){
var ex__15944__auto__ = e28888;
var statearr_28889_28920 = state_28843;
(statearr_28889_28920[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28921 = state_28843;
state_28843 = G__28921;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_28843){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_28843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto___28891,mults,ensure_mult,p))
})();
var state__15998__auto__ = (function (){var statearr_28890 = f__15997__auto__.call(null);
(statearr_28890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___28891);

return statearr_28890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto___28891,mults,ensure_mult,p))
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
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__15996__auto___29058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto___29058,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto___29058,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29028){
var state_val_29029 = (state_29028[(1)]);
if((state_val_29029 === (7))){
var state_29028__$1 = state_29028;
var statearr_29030_29059 = state_29028__$1;
(statearr_29030_29059[(2)] = null);

(statearr_29030_29059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (1))){
var state_29028__$1 = state_29028;
var statearr_29031_29060 = state_29028__$1;
(statearr_29031_29060[(2)] = null);

(statearr_29031_29060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (4))){
var inst_28992 = (state_29028[(7)]);
var inst_28994 = (inst_28992 < cnt);
var state_29028__$1 = state_29028;
if(cljs.core.truth_(inst_28994)){
var statearr_29032_29061 = state_29028__$1;
(statearr_29032_29061[(1)] = (6));

} else {
var statearr_29033_29062 = state_29028__$1;
(statearr_29033_29062[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (15))){
var inst_29024 = (state_29028[(2)]);
var state_29028__$1 = state_29028;
var statearr_29034_29063 = state_29028__$1;
(statearr_29034_29063[(2)] = inst_29024);

(statearr_29034_29063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (13))){
var inst_29017 = cljs.core.async.close_BANG_.call(null,out);
var state_29028__$1 = state_29028;
var statearr_29035_29064 = state_29028__$1;
(statearr_29035_29064[(2)] = inst_29017);

(statearr_29035_29064[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (6))){
var state_29028__$1 = state_29028;
var statearr_29036_29065 = state_29028__$1;
(statearr_29036_29065[(2)] = null);

(statearr_29036_29065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (3))){
var inst_29026 = (state_29028[(2)]);
var state_29028__$1 = state_29028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29028__$1,inst_29026);
} else {
if((state_val_29029 === (12))){
var inst_29014 = (state_29028[(8)]);
var inst_29014__$1 = (state_29028[(2)]);
var inst_29015 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29014__$1);
var state_29028__$1 = (function (){var statearr_29037 = state_29028;
(statearr_29037[(8)] = inst_29014__$1);

return statearr_29037;
})();
if(cljs.core.truth_(inst_29015)){
var statearr_29038_29066 = state_29028__$1;
(statearr_29038_29066[(1)] = (13));

} else {
var statearr_29039_29067 = state_29028__$1;
(statearr_29039_29067[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (2))){
var inst_28991 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28992 = (0);
var state_29028__$1 = (function (){var statearr_29040 = state_29028;
(statearr_29040[(9)] = inst_28991);

(statearr_29040[(7)] = inst_28992);

return statearr_29040;
})();
var statearr_29041_29068 = state_29028__$1;
(statearr_29041_29068[(2)] = null);

(statearr_29041_29068[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (11))){
var inst_28992 = (state_29028[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29028,(10),Object,null,(9));
var inst_29001 = chs__$1.call(null,inst_28992);
var inst_29002 = done.call(null,inst_28992);
var inst_29003 = cljs.core.async.take_BANG_.call(null,inst_29001,inst_29002);
var state_29028__$1 = state_29028;
var statearr_29042_29069 = state_29028__$1;
(statearr_29042_29069[(2)] = inst_29003);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29028__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (9))){
var inst_28992 = (state_29028[(7)]);
var inst_29005 = (state_29028[(2)]);
var inst_29006 = (inst_28992 + (1));
var inst_28992__$1 = inst_29006;
var state_29028__$1 = (function (){var statearr_29043 = state_29028;
(statearr_29043[(10)] = inst_29005);

(statearr_29043[(7)] = inst_28992__$1);

return statearr_29043;
})();
var statearr_29044_29070 = state_29028__$1;
(statearr_29044_29070[(2)] = null);

(statearr_29044_29070[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (5))){
var inst_29012 = (state_29028[(2)]);
var state_29028__$1 = (function (){var statearr_29045 = state_29028;
(statearr_29045[(11)] = inst_29012);

return statearr_29045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29028__$1,(12),dchan);
} else {
if((state_val_29029 === (14))){
var inst_29014 = (state_29028[(8)]);
var inst_29019 = cljs.core.apply.call(null,f,inst_29014);
var state_29028__$1 = state_29028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29028__$1,(16),out,inst_29019);
} else {
if((state_val_29029 === (16))){
var inst_29021 = (state_29028[(2)]);
var state_29028__$1 = (function (){var statearr_29046 = state_29028;
(statearr_29046[(12)] = inst_29021);

return statearr_29046;
})();
var statearr_29047_29071 = state_29028__$1;
(statearr_29047_29071[(2)] = null);

(statearr_29047_29071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (10))){
var inst_28996 = (state_29028[(2)]);
var inst_28997 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29028__$1 = (function (){var statearr_29048 = state_29028;
(statearr_29048[(13)] = inst_28996);

return statearr_29048;
})();
var statearr_29049_29072 = state_29028__$1;
(statearr_29049_29072[(2)] = inst_28997);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29028__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (8))){
var inst_29010 = (state_29028[(2)]);
var state_29028__$1 = state_29028;
var statearr_29050_29073 = state_29028__$1;
(statearr_29050_29073[(2)] = inst_29010);

(statearr_29050_29073[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15996__auto___29058,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15940__auto__,c__15996__auto___29058,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_29054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29054[(0)] = state_machine__15941__auto__);

(statearr_29054[(1)] = (1));

return statearr_29054;
});
var state_machine__15941__auto____1 = (function (state_29028){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_29028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e29055){if((e29055 instanceof Object)){
var ex__15944__auto__ = e29055;
var statearr_29056_29074 = state_29028;
(statearr_29056_29074[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29075 = state_29028;
state_29028 = G__29075;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_29028){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_29028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto___29058,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15998__auto__ = (function (){var statearr_29057 = f__15997__auto__.call(null);
(statearr_29057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___29058);

return statearr_29057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto___29058,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15996__auto___29183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto___29183,out){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto___29183,out){
return (function (state_29159){
var state_val_29160 = (state_29159[(1)]);
if((state_val_29160 === (7))){
var inst_29139 = (state_29159[(7)]);
var inst_29138 = (state_29159[(8)]);
var inst_29138__$1 = (state_29159[(2)]);
var inst_29139__$1 = cljs.core.nth.call(null,inst_29138__$1,(0),null);
var inst_29140 = cljs.core.nth.call(null,inst_29138__$1,(1),null);
var inst_29141 = (inst_29139__$1 == null);
var state_29159__$1 = (function (){var statearr_29161 = state_29159;
(statearr_29161[(9)] = inst_29140);

(statearr_29161[(7)] = inst_29139__$1);

(statearr_29161[(8)] = inst_29138__$1);

return statearr_29161;
})();
if(cljs.core.truth_(inst_29141)){
var statearr_29162_29184 = state_29159__$1;
(statearr_29162_29184[(1)] = (8));

} else {
var statearr_29163_29185 = state_29159__$1;
(statearr_29163_29185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (1))){
var inst_29130 = cljs.core.vec.call(null,chs);
var inst_29131 = inst_29130;
var state_29159__$1 = (function (){var statearr_29164 = state_29159;
(statearr_29164[(10)] = inst_29131);

return statearr_29164;
})();
var statearr_29165_29186 = state_29159__$1;
(statearr_29165_29186[(2)] = null);

(statearr_29165_29186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (4))){
var inst_29131 = (state_29159[(10)]);
var state_29159__$1 = state_29159;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29159__$1,(7),inst_29131);
} else {
if((state_val_29160 === (6))){
var inst_29155 = (state_29159[(2)]);
var state_29159__$1 = state_29159;
var statearr_29166_29187 = state_29159__$1;
(statearr_29166_29187[(2)] = inst_29155);

(statearr_29166_29187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (3))){
var inst_29157 = (state_29159[(2)]);
var state_29159__$1 = state_29159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29159__$1,inst_29157);
} else {
if((state_val_29160 === (2))){
var inst_29131 = (state_29159[(10)]);
var inst_29133 = cljs.core.count.call(null,inst_29131);
var inst_29134 = (inst_29133 > (0));
var state_29159__$1 = state_29159;
if(cljs.core.truth_(inst_29134)){
var statearr_29168_29188 = state_29159__$1;
(statearr_29168_29188[(1)] = (4));

} else {
var statearr_29169_29189 = state_29159__$1;
(statearr_29169_29189[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (11))){
var inst_29131 = (state_29159[(10)]);
var inst_29148 = (state_29159[(2)]);
var tmp29167 = inst_29131;
var inst_29131__$1 = tmp29167;
var state_29159__$1 = (function (){var statearr_29170 = state_29159;
(statearr_29170[(10)] = inst_29131__$1);

(statearr_29170[(11)] = inst_29148);

return statearr_29170;
})();
var statearr_29171_29190 = state_29159__$1;
(statearr_29171_29190[(2)] = null);

(statearr_29171_29190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (9))){
var inst_29139 = (state_29159[(7)]);
var state_29159__$1 = state_29159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29159__$1,(11),out,inst_29139);
} else {
if((state_val_29160 === (5))){
var inst_29153 = cljs.core.async.close_BANG_.call(null,out);
var state_29159__$1 = state_29159;
var statearr_29172_29191 = state_29159__$1;
(statearr_29172_29191[(2)] = inst_29153);

(statearr_29172_29191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (10))){
var inst_29151 = (state_29159[(2)]);
var state_29159__$1 = state_29159;
var statearr_29173_29192 = state_29159__$1;
(statearr_29173_29192[(2)] = inst_29151);

(statearr_29173_29192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (8))){
var inst_29140 = (state_29159[(9)]);
var inst_29139 = (state_29159[(7)]);
var inst_29138 = (state_29159[(8)]);
var inst_29131 = (state_29159[(10)]);
var inst_29143 = (function (){var c = inst_29140;
var v = inst_29139;
var vec__29136 = inst_29138;
var cs = inst_29131;
return ((function (c,v,vec__29136,cs,inst_29140,inst_29139,inst_29138,inst_29131,state_val_29160,c__15996__auto___29183,out){
return (function (p1__29076_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29076_SHARP_);
});
;})(c,v,vec__29136,cs,inst_29140,inst_29139,inst_29138,inst_29131,state_val_29160,c__15996__auto___29183,out))
})();
var inst_29144 = cljs.core.filterv.call(null,inst_29143,inst_29131);
var inst_29131__$1 = inst_29144;
var state_29159__$1 = (function (){var statearr_29174 = state_29159;
(statearr_29174[(10)] = inst_29131__$1);

return statearr_29174;
})();
var statearr_29175_29193 = state_29159__$1;
(statearr_29175_29193[(2)] = null);

(statearr_29175_29193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15996__auto___29183,out))
;
return ((function (switch__15940__auto__,c__15996__auto___29183,out){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_29179 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29179[(0)] = state_machine__15941__auto__);

(statearr_29179[(1)] = (1));

return statearr_29179;
});
var state_machine__15941__auto____1 = (function (state_29159){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_29159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e29180){if((e29180 instanceof Object)){
var ex__15944__auto__ = e29180;
var statearr_29181_29194 = state_29159;
(statearr_29181_29194[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29195 = state_29159;
state_29159 = G__29195;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_29159){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_29159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto___29183,out))
})();
var state__15998__auto__ = (function (){var statearr_29182 = f__15997__auto__.call(null);
(statearr_29182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___29183);

return statearr_29182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto___29183,out))
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
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15996__auto___29288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto___29288,out){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto___29288,out){
return (function (state_29265){
var state_val_29266 = (state_29265[(1)]);
if((state_val_29266 === (7))){
var inst_29247 = (state_29265[(7)]);
var inst_29247__$1 = (state_29265[(2)]);
var inst_29248 = (inst_29247__$1 == null);
var inst_29249 = cljs.core.not.call(null,inst_29248);
var state_29265__$1 = (function (){var statearr_29267 = state_29265;
(statearr_29267[(7)] = inst_29247__$1);

return statearr_29267;
})();
if(inst_29249){
var statearr_29268_29289 = state_29265__$1;
(statearr_29268_29289[(1)] = (8));

} else {
var statearr_29269_29290 = state_29265__$1;
(statearr_29269_29290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (1))){
var inst_29242 = (0);
var state_29265__$1 = (function (){var statearr_29270 = state_29265;
(statearr_29270[(8)] = inst_29242);

return statearr_29270;
})();
var statearr_29271_29291 = state_29265__$1;
(statearr_29271_29291[(2)] = null);

(statearr_29271_29291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (4))){
var state_29265__$1 = state_29265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29265__$1,(7),ch);
} else {
if((state_val_29266 === (6))){
var inst_29260 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
var statearr_29272_29292 = state_29265__$1;
(statearr_29272_29292[(2)] = inst_29260);

(statearr_29272_29292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (3))){
var inst_29262 = (state_29265[(2)]);
var inst_29263 = cljs.core.async.close_BANG_.call(null,out);
var state_29265__$1 = (function (){var statearr_29273 = state_29265;
(statearr_29273[(9)] = inst_29262);

return statearr_29273;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29265__$1,inst_29263);
} else {
if((state_val_29266 === (2))){
var inst_29242 = (state_29265[(8)]);
var inst_29244 = (inst_29242 < n);
var state_29265__$1 = state_29265;
if(cljs.core.truth_(inst_29244)){
var statearr_29274_29293 = state_29265__$1;
(statearr_29274_29293[(1)] = (4));

} else {
var statearr_29275_29294 = state_29265__$1;
(statearr_29275_29294[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (11))){
var inst_29242 = (state_29265[(8)]);
var inst_29252 = (state_29265[(2)]);
var inst_29253 = (inst_29242 + (1));
var inst_29242__$1 = inst_29253;
var state_29265__$1 = (function (){var statearr_29276 = state_29265;
(statearr_29276[(8)] = inst_29242__$1);

(statearr_29276[(10)] = inst_29252);

return statearr_29276;
})();
var statearr_29277_29295 = state_29265__$1;
(statearr_29277_29295[(2)] = null);

(statearr_29277_29295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (9))){
var state_29265__$1 = state_29265;
var statearr_29278_29296 = state_29265__$1;
(statearr_29278_29296[(2)] = null);

(statearr_29278_29296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (5))){
var state_29265__$1 = state_29265;
var statearr_29279_29297 = state_29265__$1;
(statearr_29279_29297[(2)] = null);

(statearr_29279_29297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (10))){
var inst_29257 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
var statearr_29280_29298 = state_29265__$1;
(statearr_29280_29298[(2)] = inst_29257);

(statearr_29280_29298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (8))){
var inst_29247 = (state_29265[(7)]);
var state_29265__$1 = state_29265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29265__$1,(11),out,inst_29247);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15996__auto___29288,out))
;
return ((function (switch__15940__auto__,c__15996__auto___29288,out){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_29284 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29284[(0)] = state_machine__15941__auto__);

(statearr_29284[(1)] = (1));

return statearr_29284;
});
var state_machine__15941__auto____1 = (function (state_29265){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_29265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e29285){if((e29285 instanceof Object)){
var ex__15944__auto__ = e29285;
var statearr_29286_29299 = state_29265;
(statearr_29286_29299[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29300 = state_29265;
state_29265 = G__29300;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_29265){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_29265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto___29288,out))
})();
var state__15998__auto__ = (function (){var statearr_29287 = f__15997__auto__.call(null);
(statearr_29287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___29288);

return statearr_29287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto___29288,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t29308 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29308 = (function (ch,f,map_LT_,meta29309){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29309 = meta29309;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29308.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29308.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29308.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29308.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29311 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29311 = (function (fn1,_,meta29309,map_LT_,f,ch,meta29312){
this.fn1 = fn1;
this._ = _;
this.meta29309 = meta29309;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29312 = meta29312;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29311.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29311.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29311.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29301_SHARP_){
return f1.call(null,(((p1__29301_SHARP_ == null))?null:self__.f.call(null,p1__29301_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29311.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29313){
var self__ = this;
var _29313__$1 = this;
return self__.meta29312;
});})(___$1))
;

cljs.core.async.t29311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29313,meta29312__$1){
var self__ = this;
var _29313__$1 = this;
return (new cljs.core.async.t29311(self__.fn1,self__._,self__.meta29309,self__.map_LT_,self__.f,self__.ch,meta29312__$1));
});})(___$1))
;

cljs.core.async.t29311.cljs$lang$type = true;

cljs.core.async.t29311.cljs$lang$ctorStr = "cljs.core.async/t29311";

cljs.core.async.t29311.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13915__auto__,writer__13916__auto__,opt__13917__auto__){
return cljs.core._write.call(null,writer__13916__auto__,"cljs.core.async/t29311");
});})(___$1))
;

cljs.core.async.__GT_t29311 = ((function (___$1){
return (function __GT_t29311(fn1__$1,___$2,meta29309__$1,map_LT___$1,f__$1,ch__$1,meta29312){
return (new cljs.core.async.t29311(fn1__$1,___$2,meta29309__$1,map_LT___$1,f__$1,ch__$1,meta29312));
});})(___$1))
;

}

return (new cljs.core.async.t29311(fn1,___$1,self__.meta29309,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__13316__auto__ = ret;
if(cljs.core.truth_(and__13316__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__13316__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t29308.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29308.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29308.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29310){
var self__ = this;
var _29310__$1 = this;
return self__.meta29309;
});

cljs.core.async.t29308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29310,meta29309__$1){
var self__ = this;
var _29310__$1 = this;
return (new cljs.core.async.t29308(self__.ch,self__.f,self__.map_LT_,meta29309__$1));
});

cljs.core.async.t29308.cljs$lang$type = true;

cljs.core.async.t29308.cljs$lang$ctorStr = "cljs.core.async/t29308";

cljs.core.async.t29308.cljs$lang$ctorPrWriter = (function (this__13915__auto__,writer__13916__auto__,opt__13917__auto__){
return cljs.core._write.call(null,writer__13916__auto__,"cljs.core.async/t29308");
});

cljs.core.async.__GT_t29308 = (function __GT_t29308(ch__$1,f__$1,map_LT___$1,meta29309){
return (new cljs.core.async.t29308(ch__$1,f__$1,map_LT___$1,meta29309));
});

}

return (new cljs.core.async.t29308(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t29317 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29317 = (function (ch,f,map_GT_,meta29318){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29318 = meta29318;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29317.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29317.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29317.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29317.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29317.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29317.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29319){
var self__ = this;
var _29319__$1 = this;
return self__.meta29318;
});

cljs.core.async.t29317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29319,meta29318__$1){
var self__ = this;
var _29319__$1 = this;
return (new cljs.core.async.t29317(self__.ch,self__.f,self__.map_GT_,meta29318__$1));
});

cljs.core.async.t29317.cljs$lang$type = true;

cljs.core.async.t29317.cljs$lang$ctorStr = "cljs.core.async/t29317";

cljs.core.async.t29317.cljs$lang$ctorPrWriter = (function (this__13915__auto__,writer__13916__auto__,opt__13917__auto__){
return cljs.core._write.call(null,writer__13916__auto__,"cljs.core.async/t29317");
});

cljs.core.async.__GT_t29317 = (function __GT_t29317(ch__$1,f__$1,map_GT___$1,meta29318){
return (new cljs.core.async.t29317(ch__$1,f__$1,map_GT___$1,meta29318));
});

}

return (new cljs.core.async.t29317(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t29323 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29323 = (function (ch,p,filter_GT_,meta29324){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29324 = meta29324;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29323.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29323.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29323.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29323.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29323.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29323.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29323.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29325){
var self__ = this;
var _29325__$1 = this;
return self__.meta29324;
});

cljs.core.async.t29323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29325,meta29324__$1){
var self__ = this;
var _29325__$1 = this;
return (new cljs.core.async.t29323(self__.ch,self__.p,self__.filter_GT_,meta29324__$1));
});

cljs.core.async.t29323.cljs$lang$type = true;

cljs.core.async.t29323.cljs$lang$ctorStr = "cljs.core.async/t29323";

cljs.core.async.t29323.cljs$lang$ctorPrWriter = (function (this__13915__auto__,writer__13916__auto__,opt__13917__auto__){
return cljs.core._write.call(null,writer__13916__auto__,"cljs.core.async/t29323");
});

cljs.core.async.__GT_t29323 = (function __GT_t29323(ch__$1,p__$1,filter_GT___$1,meta29324){
return (new cljs.core.async.t29323(ch__$1,p__$1,filter_GT___$1,meta29324));
});

}

return (new cljs.core.async.t29323(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15996__auto___29408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto___29408,out){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto___29408,out){
return (function (state_29387){
var state_val_29388 = (state_29387[(1)]);
if((state_val_29388 === (7))){
var inst_29383 = (state_29387[(2)]);
var state_29387__$1 = state_29387;
var statearr_29389_29409 = state_29387__$1;
(statearr_29389_29409[(2)] = inst_29383);

(statearr_29389_29409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (1))){
var state_29387__$1 = state_29387;
var statearr_29390_29410 = state_29387__$1;
(statearr_29390_29410[(2)] = null);

(statearr_29390_29410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (4))){
var inst_29369 = (state_29387[(7)]);
var inst_29369__$1 = (state_29387[(2)]);
var inst_29370 = (inst_29369__$1 == null);
var state_29387__$1 = (function (){var statearr_29391 = state_29387;
(statearr_29391[(7)] = inst_29369__$1);

return statearr_29391;
})();
if(cljs.core.truth_(inst_29370)){
var statearr_29392_29411 = state_29387__$1;
(statearr_29392_29411[(1)] = (5));

} else {
var statearr_29393_29412 = state_29387__$1;
(statearr_29393_29412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (6))){
var inst_29369 = (state_29387[(7)]);
var inst_29374 = p.call(null,inst_29369);
var state_29387__$1 = state_29387;
if(cljs.core.truth_(inst_29374)){
var statearr_29394_29413 = state_29387__$1;
(statearr_29394_29413[(1)] = (8));

} else {
var statearr_29395_29414 = state_29387__$1;
(statearr_29395_29414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (3))){
var inst_29385 = (state_29387[(2)]);
var state_29387__$1 = state_29387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29387__$1,inst_29385);
} else {
if((state_val_29388 === (2))){
var state_29387__$1 = state_29387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29387__$1,(4),ch);
} else {
if((state_val_29388 === (11))){
var inst_29377 = (state_29387[(2)]);
var state_29387__$1 = state_29387;
var statearr_29396_29415 = state_29387__$1;
(statearr_29396_29415[(2)] = inst_29377);

(statearr_29396_29415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (9))){
var state_29387__$1 = state_29387;
var statearr_29397_29416 = state_29387__$1;
(statearr_29397_29416[(2)] = null);

(statearr_29397_29416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (5))){
var inst_29372 = cljs.core.async.close_BANG_.call(null,out);
var state_29387__$1 = state_29387;
var statearr_29398_29417 = state_29387__$1;
(statearr_29398_29417[(2)] = inst_29372);

(statearr_29398_29417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (10))){
var inst_29380 = (state_29387[(2)]);
var state_29387__$1 = (function (){var statearr_29399 = state_29387;
(statearr_29399[(8)] = inst_29380);

return statearr_29399;
})();
var statearr_29400_29418 = state_29387__$1;
(statearr_29400_29418[(2)] = null);

(statearr_29400_29418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (8))){
var inst_29369 = (state_29387[(7)]);
var state_29387__$1 = state_29387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29387__$1,(11),out,inst_29369);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15996__auto___29408,out))
;
return ((function (switch__15940__auto__,c__15996__auto___29408,out){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_29404 = [null,null,null,null,null,null,null,null,null];
(statearr_29404[(0)] = state_machine__15941__auto__);

(statearr_29404[(1)] = (1));

return statearr_29404;
});
var state_machine__15941__auto____1 = (function (state_29387){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_29387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e29405){if((e29405 instanceof Object)){
var ex__15944__auto__ = e29405;
var statearr_29406_29419 = state_29387;
(statearr_29406_29419[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29420 = state_29387;
state_29387 = G__29420;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_29387){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_29387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto___29408,out))
})();
var state__15998__auto__ = (function (){var statearr_29407 = f__15997__auto__.call(null);
(statearr_29407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___29408);

return statearr_29407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto___29408,out))
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
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__15996__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto__){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto__){
return (function (state_29586){
var state_val_29587 = (state_29586[(1)]);
if((state_val_29587 === (7))){
var inst_29582 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
var statearr_29588_29629 = state_29586__$1;
(statearr_29588_29629[(2)] = inst_29582);

(statearr_29588_29629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (20))){
var inst_29552 = (state_29586[(7)]);
var inst_29563 = (state_29586[(2)]);
var inst_29564 = cljs.core.next.call(null,inst_29552);
var inst_29538 = inst_29564;
var inst_29539 = null;
var inst_29540 = (0);
var inst_29541 = (0);
var state_29586__$1 = (function (){var statearr_29589 = state_29586;
(statearr_29589[(8)] = inst_29538);

(statearr_29589[(9)] = inst_29539);

(statearr_29589[(10)] = inst_29563);

(statearr_29589[(11)] = inst_29540);

(statearr_29589[(12)] = inst_29541);

return statearr_29589;
})();
var statearr_29590_29630 = state_29586__$1;
(statearr_29590_29630[(2)] = null);

(statearr_29590_29630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (1))){
var state_29586__$1 = state_29586;
var statearr_29591_29631 = state_29586__$1;
(statearr_29591_29631[(2)] = null);

(statearr_29591_29631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (4))){
var inst_29527 = (state_29586[(13)]);
var inst_29527__$1 = (state_29586[(2)]);
var inst_29528 = (inst_29527__$1 == null);
var state_29586__$1 = (function (){var statearr_29592 = state_29586;
(statearr_29592[(13)] = inst_29527__$1);

return statearr_29592;
})();
if(cljs.core.truth_(inst_29528)){
var statearr_29593_29632 = state_29586__$1;
(statearr_29593_29632[(1)] = (5));

} else {
var statearr_29594_29633 = state_29586__$1;
(statearr_29594_29633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (15))){
var state_29586__$1 = state_29586;
var statearr_29598_29634 = state_29586__$1;
(statearr_29598_29634[(2)] = null);

(statearr_29598_29634[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (21))){
var state_29586__$1 = state_29586;
var statearr_29599_29635 = state_29586__$1;
(statearr_29599_29635[(2)] = null);

(statearr_29599_29635[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (13))){
var inst_29538 = (state_29586[(8)]);
var inst_29539 = (state_29586[(9)]);
var inst_29540 = (state_29586[(11)]);
var inst_29541 = (state_29586[(12)]);
var inst_29548 = (state_29586[(2)]);
var inst_29549 = (inst_29541 + (1));
var tmp29595 = inst_29538;
var tmp29596 = inst_29539;
var tmp29597 = inst_29540;
var inst_29538__$1 = tmp29595;
var inst_29539__$1 = tmp29596;
var inst_29540__$1 = tmp29597;
var inst_29541__$1 = inst_29549;
var state_29586__$1 = (function (){var statearr_29600 = state_29586;
(statearr_29600[(8)] = inst_29538__$1);

(statearr_29600[(9)] = inst_29539__$1);

(statearr_29600[(14)] = inst_29548);

(statearr_29600[(11)] = inst_29540__$1);

(statearr_29600[(12)] = inst_29541__$1);

return statearr_29600;
})();
var statearr_29601_29636 = state_29586__$1;
(statearr_29601_29636[(2)] = null);

(statearr_29601_29636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (22))){
var state_29586__$1 = state_29586;
var statearr_29602_29637 = state_29586__$1;
(statearr_29602_29637[(2)] = null);

(statearr_29602_29637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (6))){
var inst_29527 = (state_29586[(13)]);
var inst_29536 = f.call(null,inst_29527);
var inst_29537 = cljs.core.seq.call(null,inst_29536);
var inst_29538 = inst_29537;
var inst_29539 = null;
var inst_29540 = (0);
var inst_29541 = (0);
var state_29586__$1 = (function (){var statearr_29603 = state_29586;
(statearr_29603[(8)] = inst_29538);

(statearr_29603[(9)] = inst_29539);

(statearr_29603[(11)] = inst_29540);

(statearr_29603[(12)] = inst_29541);

return statearr_29603;
})();
var statearr_29604_29638 = state_29586__$1;
(statearr_29604_29638[(2)] = null);

(statearr_29604_29638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (17))){
var inst_29552 = (state_29586[(7)]);
var inst_29556 = cljs.core.chunk_first.call(null,inst_29552);
var inst_29557 = cljs.core.chunk_rest.call(null,inst_29552);
var inst_29558 = cljs.core.count.call(null,inst_29556);
var inst_29538 = inst_29557;
var inst_29539 = inst_29556;
var inst_29540 = inst_29558;
var inst_29541 = (0);
var state_29586__$1 = (function (){var statearr_29605 = state_29586;
(statearr_29605[(8)] = inst_29538);

(statearr_29605[(9)] = inst_29539);

(statearr_29605[(11)] = inst_29540);

(statearr_29605[(12)] = inst_29541);

return statearr_29605;
})();
var statearr_29606_29639 = state_29586__$1;
(statearr_29606_29639[(2)] = null);

(statearr_29606_29639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (3))){
var inst_29584 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29586__$1,inst_29584);
} else {
if((state_val_29587 === (12))){
var inst_29572 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
var statearr_29607_29640 = state_29586__$1;
(statearr_29607_29640[(2)] = inst_29572);

(statearr_29607_29640[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (2))){
var state_29586__$1 = state_29586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29586__$1,(4),in$);
} else {
if((state_val_29587 === (23))){
var inst_29580 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
var statearr_29608_29641 = state_29586__$1;
(statearr_29608_29641[(2)] = inst_29580);

(statearr_29608_29641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (19))){
var inst_29567 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
var statearr_29609_29642 = state_29586__$1;
(statearr_29609_29642[(2)] = inst_29567);

(statearr_29609_29642[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (11))){
var inst_29538 = (state_29586[(8)]);
var inst_29552 = (state_29586[(7)]);
var inst_29552__$1 = cljs.core.seq.call(null,inst_29538);
var state_29586__$1 = (function (){var statearr_29610 = state_29586;
(statearr_29610[(7)] = inst_29552__$1);

return statearr_29610;
})();
if(inst_29552__$1){
var statearr_29611_29643 = state_29586__$1;
(statearr_29611_29643[(1)] = (14));

} else {
var statearr_29612_29644 = state_29586__$1;
(statearr_29612_29644[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (9))){
var inst_29574 = (state_29586[(2)]);
var inst_29575 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29586__$1 = (function (){var statearr_29613 = state_29586;
(statearr_29613[(15)] = inst_29574);

return statearr_29613;
})();
if(cljs.core.truth_(inst_29575)){
var statearr_29614_29645 = state_29586__$1;
(statearr_29614_29645[(1)] = (21));

} else {
var statearr_29615_29646 = state_29586__$1;
(statearr_29615_29646[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (5))){
var inst_29530 = cljs.core.async.close_BANG_.call(null,out);
var state_29586__$1 = state_29586;
var statearr_29616_29647 = state_29586__$1;
(statearr_29616_29647[(2)] = inst_29530);

(statearr_29616_29647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (14))){
var inst_29552 = (state_29586[(7)]);
var inst_29554 = cljs.core.chunked_seq_QMARK_.call(null,inst_29552);
var state_29586__$1 = state_29586;
if(inst_29554){
var statearr_29617_29648 = state_29586__$1;
(statearr_29617_29648[(1)] = (17));

} else {
var statearr_29618_29649 = state_29586__$1;
(statearr_29618_29649[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (16))){
var inst_29570 = (state_29586[(2)]);
var state_29586__$1 = state_29586;
var statearr_29619_29650 = state_29586__$1;
(statearr_29619_29650[(2)] = inst_29570);

(statearr_29619_29650[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29587 === (10))){
var inst_29539 = (state_29586[(9)]);
var inst_29541 = (state_29586[(12)]);
var inst_29546 = cljs.core._nth.call(null,inst_29539,inst_29541);
var state_29586__$1 = state_29586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29586__$1,(13),out,inst_29546);
} else {
if((state_val_29587 === (18))){
var inst_29552 = (state_29586[(7)]);
var inst_29561 = cljs.core.first.call(null,inst_29552);
var state_29586__$1 = state_29586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29586__$1,(20),out,inst_29561);
} else {
if((state_val_29587 === (8))){
var inst_29540 = (state_29586[(11)]);
var inst_29541 = (state_29586[(12)]);
var inst_29543 = (inst_29541 < inst_29540);
var inst_29544 = inst_29543;
var state_29586__$1 = state_29586;
if(cljs.core.truth_(inst_29544)){
var statearr_29620_29651 = state_29586__$1;
(statearr_29620_29651[(1)] = (10));

} else {
var statearr_29621_29652 = state_29586__$1;
(statearr_29621_29652[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15996__auto__))
;
return ((function (switch__15940__auto__,c__15996__auto__){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_29625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29625[(0)] = state_machine__15941__auto__);

(statearr_29625[(1)] = (1));

return statearr_29625;
});
var state_machine__15941__auto____1 = (function (state_29586){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_29586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e29626){if((e29626 instanceof Object)){
var ex__15944__auto__ = e29626;
var statearr_29627_29653 = state_29586;
(statearr_29627_29653[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29654 = state_29586;
state_29586 = G__29654;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_29586){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_29586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto__))
})();
var state__15998__auto__ = (function (){var statearr_29628 = f__15997__auto__.call(null);
(statearr_29628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto__);

return statearr_29628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto__))
);

return c__15996__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15996__auto___29751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto___29751,out){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto___29751,out){
return (function (state_29726){
var state_val_29727 = (state_29726[(1)]);
if((state_val_29727 === (7))){
var inst_29721 = (state_29726[(2)]);
var state_29726__$1 = state_29726;
var statearr_29728_29752 = state_29726__$1;
(statearr_29728_29752[(2)] = inst_29721);

(statearr_29728_29752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (1))){
var inst_29703 = null;
var state_29726__$1 = (function (){var statearr_29729 = state_29726;
(statearr_29729[(7)] = inst_29703);

return statearr_29729;
})();
var statearr_29730_29753 = state_29726__$1;
(statearr_29730_29753[(2)] = null);

(statearr_29730_29753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (4))){
var inst_29706 = (state_29726[(8)]);
var inst_29706__$1 = (state_29726[(2)]);
var inst_29707 = (inst_29706__$1 == null);
var inst_29708 = cljs.core.not.call(null,inst_29707);
var state_29726__$1 = (function (){var statearr_29731 = state_29726;
(statearr_29731[(8)] = inst_29706__$1);

return statearr_29731;
})();
if(inst_29708){
var statearr_29732_29754 = state_29726__$1;
(statearr_29732_29754[(1)] = (5));

} else {
var statearr_29733_29755 = state_29726__$1;
(statearr_29733_29755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (6))){
var state_29726__$1 = state_29726;
var statearr_29734_29756 = state_29726__$1;
(statearr_29734_29756[(2)] = null);

(statearr_29734_29756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (3))){
var inst_29723 = (state_29726[(2)]);
var inst_29724 = cljs.core.async.close_BANG_.call(null,out);
var state_29726__$1 = (function (){var statearr_29735 = state_29726;
(statearr_29735[(9)] = inst_29723);

return statearr_29735;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29726__$1,inst_29724);
} else {
if((state_val_29727 === (2))){
var state_29726__$1 = state_29726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29726__$1,(4),ch);
} else {
if((state_val_29727 === (11))){
var inst_29706 = (state_29726[(8)]);
var inst_29715 = (state_29726[(2)]);
var inst_29703 = inst_29706;
var state_29726__$1 = (function (){var statearr_29736 = state_29726;
(statearr_29736[(10)] = inst_29715);

(statearr_29736[(7)] = inst_29703);

return statearr_29736;
})();
var statearr_29737_29757 = state_29726__$1;
(statearr_29737_29757[(2)] = null);

(statearr_29737_29757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (9))){
var inst_29706 = (state_29726[(8)]);
var state_29726__$1 = state_29726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29726__$1,(11),out,inst_29706);
} else {
if((state_val_29727 === (5))){
var inst_29706 = (state_29726[(8)]);
var inst_29703 = (state_29726[(7)]);
var inst_29710 = cljs.core._EQ_.call(null,inst_29706,inst_29703);
var state_29726__$1 = state_29726;
if(inst_29710){
var statearr_29739_29758 = state_29726__$1;
(statearr_29739_29758[(1)] = (8));

} else {
var statearr_29740_29759 = state_29726__$1;
(statearr_29740_29759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (10))){
var inst_29718 = (state_29726[(2)]);
var state_29726__$1 = state_29726;
var statearr_29741_29760 = state_29726__$1;
(statearr_29741_29760[(2)] = inst_29718);

(statearr_29741_29760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (8))){
var inst_29703 = (state_29726[(7)]);
var tmp29738 = inst_29703;
var inst_29703__$1 = tmp29738;
var state_29726__$1 = (function (){var statearr_29742 = state_29726;
(statearr_29742[(7)] = inst_29703__$1);

return statearr_29742;
})();
var statearr_29743_29761 = state_29726__$1;
(statearr_29743_29761[(2)] = null);

(statearr_29743_29761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15996__auto___29751,out))
;
return ((function (switch__15940__auto__,c__15996__auto___29751,out){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_29747 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29747[(0)] = state_machine__15941__auto__);

(statearr_29747[(1)] = (1));

return statearr_29747;
});
var state_machine__15941__auto____1 = (function (state_29726){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_29726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e29748){if((e29748 instanceof Object)){
var ex__15944__auto__ = e29748;
var statearr_29749_29762 = state_29726;
(statearr_29749_29762[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29763 = state_29726;
state_29726 = G__29763;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_29726){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_29726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto___29751,out))
})();
var state__15998__auto__ = (function (){var statearr_29750 = f__15997__auto__.call(null);
(statearr_29750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___29751);

return statearr_29750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto___29751,out))
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
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15996__auto___29898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto___29898,out){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto___29898,out){
return (function (state_29868){
var state_val_29869 = (state_29868[(1)]);
if((state_val_29869 === (7))){
var inst_29864 = (state_29868[(2)]);
var state_29868__$1 = state_29868;
var statearr_29870_29899 = state_29868__$1;
(statearr_29870_29899[(2)] = inst_29864);

(statearr_29870_29899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (1))){
var inst_29831 = (new Array(n));
var inst_29832 = inst_29831;
var inst_29833 = (0);
var state_29868__$1 = (function (){var statearr_29871 = state_29868;
(statearr_29871[(7)] = inst_29832);

(statearr_29871[(8)] = inst_29833);

return statearr_29871;
})();
var statearr_29872_29900 = state_29868__$1;
(statearr_29872_29900[(2)] = null);

(statearr_29872_29900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (4))){
var inst_29836 = (state_29868[(9)]);
var inst_29836__$1 = (state_29868[(2)]);
var inst_29837 = (inst_29836__$1 == null);
var inst_29838 = cljs.core.not.call(null,inst_29837);
var state_29868__$1 = (function (){var statearr_29873 = state_29868;
(statearr_29873[(9)] = inst_29836__$1);

return statearr_29873;
})();
if(inst_29838){
var statearr_29874_29901 = state_29868__$1;
(statearr_29874_29901[(1)] = (5));

} else {
var statearr_29875_29902 = state_29868__$1;
(statearr_29875_29902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (15))){
var inst_29858 = (state_29868[(2)]);
var state_29868__$1 = state_29868;
var statearr_29876_29903 = state_29868__$1;
(statearr_29876_29903[(2)] = inst_29858);

(statearr_29876_29903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (13))){
var state_29868__$1 = state_29868;
var statearr_29877_29904 = state_29868__$1;
(statearr_29877_29904[(2)] = null);

(statearr_29877_29904[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (6))){
var inst_29833 = (state_29868[(8)]);
var inst_29854 = (inst_29833 > (0));
var state_29868__$1 = state_29868;
if(cljs.core.truth_(inst_29854)){
var statearr_29878_29905 = state_29868__$1;
(statearr_29878_29905[(1)] = (12));

} else {
var statearr_29879_29906 = state_29868__$1;
(statearr_29879_29906[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (3))){
var inst_29866 = (state_29868[(2)]);
var state_29868__$1 = state_29868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29868__$1,inst_29866);
} else {
if((state_val_29869 === (12))){
var inst_29832 = (state_29868[(7)]);
var inst_29856 = cljs.core.vec.call(null,inst_29832);
var state_29868__$1 = state_29868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29868__$1,(15),out,inst_29856);
} else {
if((state_val_29869 === (2))){
var state_29868__$1 = state_29868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29868__$1,(4),ch);
} else {
if((state_val_29869 === (11))){
var inst_29848 = (state_29868[(2)]);
var inst_29849 = (new Array(n));
var inst_29832 = inst_29849;
var inst_29833 = (0);
var state_29868__$1 = (function (){var statearr_29880 = state_29868;
(statearr_29880[(10)] = inst_29848);

(statearr_29880[(7)] = inst_29832);

(statearr_29880[(8)] = inst_29833);

return statearr_29880;
})();
var statearr_29881_29907 = state_29868__$1;
(statearr_29881_29907[(2)] = null);

(statearr_29881_29907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (9))){
var inst_29832 = (state_29868[(7)]);
var inst_29846 = cljs.core.vec.call(null,inst_29832);
var state_29868__$1 = state_29868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29868__$1,(11),out,inst_29846);
} else {
if((state_val_29869 === (5))){
var inst_29832 = (state_29868[(7)]);
var inst_29841 = (state_29868[(11)]);
var inst_29833 = (state_29868[(8)]);
var inst_29836 = (state_29868[(9)]);
var inst_29840 = (inst_29832[inst_29833] = inst_29836);
var inst_29841__$1 = (inst_29833 + (1));
var inst_29842 = (inst_29841__$1 < n);
var state_29868__$1 = (function (){var statearr_29882 = state_29868;
(statearr_29882[(11)] = inst_29841__$1);

(statearr_29882[(12)] = inst_29840);

return statearr_29882;
})();
if(cljs.core.truth_(inst_29842)){
var statearr_29883_29908 = state_29868__$1;
(statearr_29883_29908[(1)] = (8));

} else {
var statearr_29884_29909 = state_29868__$1;
(statearr_29884_29909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (14))){
var inst_29861 = (state_29868[(2)]);
var inst_29862 = cljs.core.async.close_BANG_.call(null,out);
var state_29868__$1 = (function (){var statearr_29886 = state_29868;
(statearr_29886[(13)] = inst_29861);

return statearr_29886;
})();
var statearr_29887_29910 = state_29868__$1;
(statearr_29887_29910[(2)] = inst_29862);

(statearr_29887_29910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (10))){
var inst_29852 = (state_29868[(2)]);
var state_29868__$1 = state_29868;
var statearr_29888_29911 = state_29868__$1;
(statearr_29888_29911[(2)] = inst_29852);

(statearr_29888_29911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29869 === (8))){
var inst_29832 = (state_29868[(7)]);
var inst_29841 = (state_29868[(11)]);
var tmp29885 = inst_29832;
var inst_29832__$1 = tmp29885;
var inst_29833 = inst_29841;
var state_29868__$1 = (function (){var statearr_29889 = state_29868;
(statearr_29889[(7)] = inst_29832__$1);

(statearr_29889[(8)] = inst_29833);

return statearr_29889;
})();
var statearr_29890_29912 = state_29868__$1;
(statearr_29890_29912[(2)] = null);

(statearr_29890_29912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15996__auto___29898,out))
;
return ((function (switch__15940__auto__,c__15996__auto___29898,out){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_29894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29894[(0)] = state_machine__15941__auto__);

(statearr_29894[(1)] = (1));

return statearr_29894;
});
var state_machine__15941__auto____1 = (function (state_29868){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_29868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e29895){if((e29895 instanceof Object)){
var ex__15944__auto__ = e29895;
var statearr_29896_29913 = state_29868;
(statearr_29896_29913[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29914 = state_29868;
state_29868 = G__29914;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_29868){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_29868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto___29898,out))
})();
var state__15998__auto__ = (function (){var statearr_29897 = f__15997__auto__.call(null);
(statearr_29897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___29898);

return statearr_29897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto___29898,out))
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
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15996__auto___30057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15996__auto___30057,out){
return (function (){
var f__15997__auto__ = (function (){var switch__15940__auto__ = ((function (c__15996__auto___30057,out){
return (function (state_30027){
var state_val_30028 = (state_30027[(1)]);
if((state_val_30028 === (7))){
var inst_30023 = (state_30027[(2)]);
var state_30027__$1 = state_30027;
var statearr_30029_30058 = state_30027__$1;
(statearr_30029_30058[(2)] = inst_30023);

(statearr_30029_30058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (1))){
var inst_29986 = [];
var inst_29987 = inst_29986;
var inst_29988 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30027__$1 = (function (){var statearr_30030 = state_30027;
(statearr_30030[(7)] = inst_29987);

(statearr_30030[(8)] = inst_29988);

return statearr_30030;
})();
var statearr_30031_30059 = state_30027__$1;
(statearr_30031_30059[(2)] = null);

(statearr_30031_30059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (4))){
var inst_29991 = (state_30027[(9)]);
var inst_29991__$1 = (state_30027[(2)]);
var inst_29992 = (inst_29991__$1 == null);
var inst_29993 = cljs.core.not.call(null,inst_29992);
var state_30027__$1 = (function (){var statearr_30032 = state_30027;
(statearr_30032[(9)] = inst_29991__$1);

return statearr_30032;
})();
if(inst_29993){
var statearr_30033_30060 = state_30027__$1;
(statearr_30033_30060[(1)] = (5));

} else {
var statearr_30034_30061 = state_30027__$1;
(statearr_30034_30061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (15))){
var inst_30017 = (state_30027[(2)]);
var state_30027__$1 = state_30027;
var statearr_30035_30062 = state_30027__$1;
(statearr_30035_30062[(2)] = inst_30017);

(statearr_30035_30062[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (13))){
var state_30027__$1 = state_30027;
var statearr_30036_30063 = state_30027__$1;
(statearr_30036_30063[(2)] = null);

(statearr_30036_30063[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (6))){
var inst_29987 = (state_30027[(7)]);
var inst_30012 = inst_29987.length;
var inst_30013 = (inst_30012 > (0));
var state_30027__$1 = state_30027;
if(cljs.core.truth_(inst_30013)){
var statearr_30037_30064 = state_30027__$1;
(statearr_30037_30064[(1)] = (12));

} else {
var statearr_30038_30065 = state_30027__$1;
(statearr_30038_30065[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (3))){
var inst_30025 = (state_30027[(2)]);
var state_30027__$1 = state_30027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30027__$1,inst_30025);
} else {
if((state_val_30028 === (12))){
var inst_29987 = (state_30027[(7)]);
var inst_30015 = cljs.core.vec.call(null,inst_29987);
var state_30027__$1 = state_30027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30027__$1,(15),out,inst_30015);
} else {
if((state_val_30028 === (2))){
var state_30027__$1 = state_30027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30027__$1,(4),ch);
} else {
if((state_val_30028 === (11))){
var inst_29991 = (state_30027[(9)]);
var inst_29995 = (state_30027[(10)]);
var inst_30005 = (state_30027[(2)]);
var inst_30006 = [];
var inst_30007 = inst_30006.push(inst_29991);
var inst_29987 = inst_30006;
var inst_29988 = inst_29995;
var state_30027__$1 = (function (){var statearr_30039 = state_30027;
(statearr_30039[(7)] = inst_29987);

(statearr_30039[(11)] = inst_30005);

(statearr_30039[(8)] = inst_29988);

(statearr_30039[(12)] = inst_30007);

return statearr_30039;
})();
var statearr_30040_30066 = state_30027__$1;
(statearr_30040_30066[(2)] = null);

(statearr_30040_30066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (9))){
var inst_29987 = (state_30027[(7)]);
var inst_30003 = cljs.core.vec.call(null,inst_29987);
var state_30027__$1 = state_30027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30027__$1,(11),out,inst_30003);
} else {
if((state_val_30028 === (5))){
var inst_29991 = (state_30027[(9)]);
var inst_29995 = (state_30027[(10)]);
var inst_29988 = (state_30027[(8)]);
var inst_29995__$1 = f.call(null,inst_29991);
var inst_29996 = cljs.core._EQ_.call(null,inst_29995__$1,inst_29988);
var inst_29997 = cljs.core.keyword_identical_QMARK_.call(null,inst_29988,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29998 = (inst_29996) || (inst_29997);
var state_30027__$1 = (function (){var statearr_30041 = state_30027;
(statearr_30041[(10)] = inst_29995__$1);

return statearr_30041;
})();
if(cljs.core.truth_(inst_29998)){
var statearr_30042_30067 = state_30027__$1;
(statearr_30042_30067[(1)] = (8));

} else {
var statearr_30043_30068 = state_30027__$1;
(statearr_30043_30068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (14))){
var inst_30020 = (state_30027[(2)]);
var inst_30021 = cljs.core.async.close_BANG_.call(null,out);
var state_30027__$1 = (function (){var statearr_30045 = state_30027;
(statearr_30045[(13)] = inst_30020);

return statearr_30045;
})();
var statearr_30046_30069 = state_30027__$1;
(statearr_30046_30069[(2)] = inst_30021);

(statearr_30046_30069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (10))){
var inst_30010 = (state_30027[(2)]);
var state_30027__$1 = state_30027;
var statearr_30047_30070 = state_30027__$1;
(statearr_30047_30070[(2)] = inst_30010);

(statearr_30047_30070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (8))){
var inst_29991 = (state_30027[(9)]);
var inst_29987 = (state_30027[(7)]);
var inst_29995 = (state_30027[(10)]);
var inst_30000 = inst_29987.push(inst_29991);
var tmp30044 = inst_29987;
var inst_29987__$1 = tmp30044;
var inst_29988 = inst_29995;
var state_30027__$1 = (function (){var statearr_30048 = state_30027;
(statearr_30048[(7)] = inst_29987__$1);

(statearr_30048[(8)] = inst_29988);

(statearr_30048[(14)] = inst_30000);

return statearr_30048;
})();
var statearr_30049_30071 = state_30027__$1;
(statearr_30049_30071[(2)] = null);

(statearr_30049_30071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15996__auto___30057,out))
;
return ((function (switch__15940__auto__,c__15996__auto___30057,out){
return (function() {
var state_machine__15941__auto__ = null;
var state_machine__15941__auto____0 = (function (){
var statearr_30053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30053[(0)] = state_machine__15941__auto__);

(statearr_30053[(1)] = (1));

return statearr_30053;
});
var state_machine__15941__auto____1 = (function (state_30027){
while(true){
var ret_value__15942__auto__ = (function (){try{while(true){
var result__15943__auto__ = switch__15940__auto__.call(null,state_30027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15943__auto__;
}
break;
}
}catch (e30054){if((e30054 instanceof Object)){
var ex__15944__auto__ = e30054;
var statearr_30055_30072 = state_30027;
(statearr_30055_30072[(5)] = ex__15944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30073 = state_30027;
state_30027 = G__30073;
continue;
} else {
return ret_value__15942__auto__;
}
break;
}
});
state_machine__15941__auto__ = function(state_30027){
switch(arguments.length){
case 0:
return state_machine__15941__auto____0.call(this);
case 1:
return state_machine__15941__auto____1.call(this,state_30027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15941__auto____0;
state_machine__15941__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15941__auto____1;
return state_machine__15941__auto__;
})()
;})(switch__15940__auto__,c__15996__auto___30057,out))
})();
var state__15998__auto__ = (function (){var statearr_30056 = f__15997__auto__.call(null);
(statearr_30056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15996__auto___30057);

return statearr_30056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15998__auto__);
});})(c__15996__auto___30057,out))
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