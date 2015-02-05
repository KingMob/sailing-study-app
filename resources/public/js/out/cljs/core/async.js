// Compiled by ClojureScript 0.0-2760 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t15704 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15704 = (function (f,fn_handler,meta15705){
this.f = f;
this.fn_handler = fn_handler;
this.meta15705 = meta15705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15704.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15704.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t15704.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t15704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15706){
var self__ = this;
var _15706__$1 = this;
return self__.meta15705;
});

cljs.core.async.t15704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15706,meta15705__$1){
var self__ = this;
var _15706__$1 = this;
return (new cljs.core.async.t15704(self__.f,self__.fn_handler,meta15705__$1));
});

cljs.core.async.t15704.cljs$lang$type = true;

cljs.core.async.t15704.cljs$lang$ctorStr = "cljs.core.async/t15704";

cljs.core.async.t15704.cljs$lang$ctorPrWriter = (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t15704");
});

cljs.core.async.__GT_t15704 = (function __GT_t15704(f__$1,fn_handler__$1,meta15705){
return (new cljs.core.async.t15704(f__$1,fn_handler__$1,meta15705));
});

}

return (new cljs.core.async.t15704(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__15708 = buff;
if(G__15708){
var bit__3933__auto__ = null;
if(cljs.core.truth_((function (){var or__3252__auto__ = bit__3933__auto__;
if(cljs.core.truth_(or__3252__auto__)){
return or__3252__auto__;
} else {
return G__15708.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__15708.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15708);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15708);
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
var val_15709 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15709);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15709,ret){
return (function (){
return fn1.call(null,val_15709);
});})(val_15709,ret))
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
var n__4139__auto___15710 = n;
var x_15711 = (0);
while(true){
if((x_15711 < n__4139__auto___15710)){
(a[x_15711] = (0));

var G__15712 = (x_15711 + (1));
x_15711 = G__15712;
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

var G__15713 = (i + (1));
i = G__15713;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t15717 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15717 = (function (flag,alt_flag,meta15718){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15718 = meta15718;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15717.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15717.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t15717.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t15717.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15719){
var self__ = this;
var _15719__$1 = this;
return self__.meta15718;
});})(flag))
;

cljs.core.async.t15717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15719,meta15718__$1){
var self__ = this;
var _15719__$1 = this;
return (new cljs.core.async.t15717(self__.flag,self__.alt_flag,meta15718__$1));
});})(flag))
;

cljs.core.async.t15717.cljs$lang$type = true;

cljs.core.async.t15717.cljs$lang$ctorStr = "cljs.core.async/t15717";

cljs.core.async.t15717.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t15717");
});})(flag))
;

cljs.core.async.__GT_t15717 = ((function (flag){
return (function __GT_t15717(flag__$1,alt_flag__$1,meta15718){
return (new cljs.core.async.t15717(flag__$1,alt_flag__$1,meta15718));
});})(flag))
;

}

return (new cljs.core.async.t15717(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t15723 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15723 = (function (cb,flag,alt_handler,meta15724){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15724 = meta15724;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15723.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15723.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t15723.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t15723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15725){
var self__ = this;
var _15725__$1 = this;
return self__.meta15724;
});

cljs.core.async.t15723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15725,meta15724__$1){
var self__ = this;
var _15725__$1 = this;
return (new cljs.core.async.t15723(self__.cb,self__.flag,self__.alt_handler,meta15724__$1));
});

cljs.core.async.t15723.cljs$lang$type = true;

cljs.core.async.t15723.cljs$lang$ctorStr = "cljs.core.async/t15723";

cljs.core.async.t15723.cljs$lang$ctorPrWriter = (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t15723");
});

cljs.core.async.__GT_t15723 = (function __GT_t15723(cb__$1,flag__$1,alt_handler__$1,meta15724){
return (new cljs.core.async.t15723(cb__$1,flag__$1,alt_handler__$1,meta15724));
});

}

return (new cljs.core.async.t15723(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__15726_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15726_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15727_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15727_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3252__auto__ = wport;
if(cljs.core.truth_(or__3252__auto__)){
return or__3252__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15728 = (i + (1));
i = G__15728;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3252__auto__ = ret;
if(cljs.core.truth_(or__3252__auto__)){
return or__3252__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3240__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3240__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3240__auto__;
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
var alts_BANG___delegate = function (ports,p__15729){
var map__15731 = p__15729;
var map__15731__$1 = ((cljs.core.seq_QMARK_.call(null,map__15731))?cljs.core.apply.call(null,cljs.core.hash_map,map__15731):map__15731);
var opts = map__15731__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__15729 = null;
if (arguments.length > 1) {
var G__15732__i = 0, G__15732__a = new Array(arguments.length -  1);
while (G__15732__i < G__15732__a.length) {G__15732__a[G__15732__i] = arguments[G__15732__i + 1]; ++G__15732__i;}
  p__15729 = new cljs.core.IndexedSeq(G__15732__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__15729);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15733){
var ports = cljs.core.first(arglist__15733);
var p__15729 = cljs.core.rest(arglist__15733);
return alts_BANG___delegate(ports,p__15729);
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
var c__6200__auto___15828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___15828){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___15828){
return (function (state_15804){
var state_val_15805 = (state_15804[(1)]);
if((state_val_15805 === (7))){
var inst_15800 = (state_15804[(2)]);
var state_15804__$1 = state_15804;
var statearr_15806_15829 = state_15804__$1;
(statearr_15806_15829[(2)] = inst_15800);

(statearr_15806_15829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15805 === (1))){
var state_15804__$1 = state_15804;
var statearr_15807_15830 = state_15804__$1;
(statearr_15807_15830[(2)] = null);

(statearr_15807_15830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15805 === (4))){
var inst_15783 = (state_15804[(7)]);
var inst_15783__$1 = (state_15804[(2)]);
var inst_15784 = (inst_15783__$1 == null);
var state_15804__$1 = (function (){var statearr_15808 = state_15804;
(statearr_15808[(7)] = inst_15783__$1);

return statearr_15808;
})();
if(cljs.core.truth_(inst_15784)){
var statearr_15809_15831 = state_15804__$1;
(statearr_15809_15831[(1)] = (5));

} else {
var statearr_15810_15832 = state_15804__$1;
(statearr_15810_15832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15805 === (13))){
var state_15804__$1 = state_15804;
var statearr_15811_15833 = state_15804__$1;
(statearr_15811_15833[(2)] = null);

(statearr_15811_15833[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15805 === (6))){
var inst_15783 = (state_15804[(7)]);
var state_15804__$1 = state_15804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15804__$1,(11),to,inst_15783);
} else {
if((state_val_15805 === (3))){
var inst_15802 = (state_15804[(2)]);
var state_15804__$1 = state_15804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15804__$1,inst_15802);
} else {
if((state_val_15805 === (12))){
var state_15804__$1 = state_15804;
var statearr_15812_15834 = state_15804__$1;
(statearr_15812_15834[(2)] = null);

(statearr_15812_15834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15805 === (2))){
var state_15804__$1 = state_15804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15804__$1,(4),from);
} else {
if((state_val_15805 === (11))){
var inst_15793 = (state_15804[(2)]);
var state_15804__$1 = state_15804;
if(cljs.core.truth_(inst_15793)){
var statearr_15813_15835 = state_15804__$1;
(statearr_15813_15835[(1)] = (12));

} else {
var statearr_15814_15836 = state_15804__$1;
(statearr_15814_15836[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15805 === (9))){
var state_15804__$1 = state_15804;
var statearr_15815_15837 = state_15804__$1;
(statearr_15815_15837[(2)] = null);

(statearr_15815_15837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15805 === (5))){
var state_15804__$1 = state_15804;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15816_15838 = state_15804__$1;
(statearr_15816_15838[(1)] = (8));

} else {
var statearr_15817_15839 = state_15804__$1;
(statearr_15817_15839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15805 === (14))){
var inst_15798 = (state_15804[(2)]);
var state_15804__$1 = state_15804;
var statearr_15818_15840 = state_15804__$1;
(statearr_15818_15840[(2)] = inst_15798);

(statearr_15818_15840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15805 === (10))){
var inst_15790 = (state_15804[(2)]);
var state_15804__$1 = state_15804;
var statearr_15819_15841 = state_15804__$1;
(statearr_15819_15841[(2)] = inst_15790);

(statearr_15819_15841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15805 === (8))){
var inst_15787 = cljs.core.async.close_BANG_.call(null,to);
var state_15804__$1 = state_15804;
var statearr_15820_15842 = state_15804__$1;
(statearr_15820_15842[(2)] = inst_15787);

(statearr_15820_15842[(1)] = (10));


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
});})(c__6200__auto___15828))
;
return ((function (switch__6144__auto__,c__6200__auto___15828){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_15824 = [null,null,null,null,null,null,null,null];
(statearr_15824[(0)] = state_machine__6145__auto__);

(statearr_15824[(1)] = (1));

return statearr_15824;
});
var state_machine__6145__auto____1 = (function (state_15804){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_15804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e15825){if((e15825 instanceof Object)){
var ex__6148__auto__ = e15825;
var statearr_15826_15843 = state_15804;
(statearr_15826_15843[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15844 = state_15804;
state_15804 = G__15844;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_15804){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_15804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___15828))
})();
var state__6202__auto__ = (function (){var statearr_15827 = f__6201__auto__.call(null);
(statearr_15827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___15828);

return statearr_15827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___15828))
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
return (function (p__16028){
var vec__16029 = p__16028;
var v = cljs.core.nth.call(null,vec__16029,(0),null);
var p = cljs.core.nth.call(null,vec__16029,(1),null);
var job = vec__16029;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6200__auto___16211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___16211,res,vec__16029,v,p,job,jobs,results){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___16211,res,vec__16029,v,p,job,jobs,results){
return (function (state_16034){
var state_val_16035 = (state_16034[(1)]);
if((state_val_16035 === (2))){
var inst_16031 = (state_16034[(2)]);
var inst_16032 = cljs.core.async.close_BANG_.call(null,res);
var state_16034__$1 = (function (){var statearr_16036 = state_16034;
(statearr_16036[(7)] = inst_16031);

return statearr_16036;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16034__$1,inst_16032);
} else {
if((state_val_16035 === (1))){
var state_16034__$1 = state_16034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16034__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6200__auto___16211,res,vec__16029,v,p,job,jobs,results))
;
return ((function (switch__6144__auto__,c__6200__auto___16211,res,vec__16029,v,p,job,jobs,results){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_16040 = [null,null,null,null,null,null,null,null];
(statearr_16040[(0)] = state_machine__6145__auto__);

(statearr_16040[(1)] = (1));

return statearr_16040;
});
var state_machine__6145__auto____1 = (function (state_16034){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_16034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e16041){if((e16041 instanceof Object)){
var ex__6148__auto__ = e16041;
var statearr_16042_16212 = state_16034;
(statearr_16042_16212[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16213 = state_16034;
state_16034 = G__16213;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_16034){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_16034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___16211,res,vec__16029,v,p,job,jobs,results))
})();
var state__6202__auto__ = (function (){var statearr_16043 = f__6201__auto__.call(null);
(statearr_16043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___16211);

return statearr_16043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___16211,res,vec__16029,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16044){
var vec__16045 = p__16044;
var v = cljs.core.nth.call(null,vec__16045,(0),null);
var p = cljs.core.nth.call(null,vec__16045,(1),null);
var job = vec__16045;
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
var n__4139__auto___16214 = n;
var __16215 = (0);
while(true){
if((__16215 < n__4139__auto___16214)){
var G__16046_16216 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16046_16216) {
case "async":
var c__6200__auto___16218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16215,c__6200__auto___16218,G__16046_16216,n__4139__auto___16214,jobs,results,process,async){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (__16215,c__6200__auto___16218,G__16046_16216,n__4139__auto___16214,jobs,results,process,async){
return (function (state_16059){
var state_val_16060 = (state_16059[(1)]);
if((state_val_16060 === (7))){
var inst_16055 = (state_16059[(2)]);
var state_16059__$1 = state_16059;
var statearr_16061_16219 = state_16059__$1;
(statearr_16061_16219[(2)] = inst_16055);

(statearr_16061_16219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16060 === (6))){
var state_16059__$1 = state_16059;
var statearr_16062_16220 = state_16059__$1;
(statearr_16062_16220[(2)] = null);

(statearr_16062_16220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16060 === (5))){
var state_16059__$1 = state_16059;
var statearr_16063_16221 = state_16059__$1;
(statearr_16063_16221[(2)] = null);

(statearr_16063_16221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16060 === (4))){
var inst_16049 = (state_16059[(2)]);
var inst_16050 = async.call(null,inst_16049);
var state_16059__$1 = state_16059;
if(cljs.core.truth_(inst_16050)){
var statearr_16064_16222 = state_16059__$1;
(statearr_16064_16222[(1)] = (5));

} else {
var statearr_16065_16223 = state_16059__$1;
(statearr_16065_16223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16060 === (3))){
var inst_16057 = (state_16059[(2)]);
var state_16059__$1 = state_16059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16059__$1,inst_16057);
} else {
if((state_val_16060 === (2))){
var state_16059__$1 = state_16059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16059__$1,(4),jobs);
} else {
if((state_val_16060 === (1))){
var state_16059__$1 = state_16059;
var statearr_16066_16224 = state_16059__$1;
(statearr_16066_16224[(2)] = null);

(statearr_16066_16224[(1)] = (2));


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
});})(__16215,c__6200__auto___16218,G__16046_16216,n__4139__auto___16214,jobs,results,process,async))
;
return ((function (__16215,switch__6144__auto__,c__6200__auto___16218,G__16046_16216,n__4139__auto___16214,jobs,results,process,async){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_16070 = [null,null,null,null,null,null,null];
(statearr_16070[(0)] = state_machine__6145__auto__);

(statearr_16070[(1)] = (1));

return statearr_16070;
});
var state_machine__6145__auto____1 = (function (state_16059){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_16059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e16071){if((e16071 instanceof Object)){
var ex__6148__auto__ = e16071;
var statearr_16072_16225 = state_16059;
(statearr_16072_16225[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16226 = state_16059;
state_16059 = G__16226;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_16059){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_16059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(__16215,switch__6144__auto__,c__6200__auto___16218,G__16046_16216,n__4139__auto___16214,jobs,results,process,async))
})();
var state__6202__auto__ = (function (){var statearr_16073 = f__6201__auto__.call(null);
(statearr_16073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___16218);

return statearr_16073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(__16215,c__6200__auto___16218,G__16046_16216,n__4139__auto___16214,jobs,results,process,async))
);


break;
case "compute":
var c__6200__auto___16227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16215,c__6200__auto___16227,G__16046_16216,n__4139__auto___16214,jobs,results,process,async){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (__16215,c__6200__auto___16227,G__16046_16216,n__4139__auto___16214,jobs,results,process,async){
return (function (state_16086){
var state_val_16087 = (state_16086[(1)]);
if((state_val_16087 === (7))){
var inst_16082 = (state_16086[(2)]);
var state_16086__$1 = state_16086;
var statearr_16088_16228 = state_16086__$1;
(statearr_16088_16228[(2)] = inst_16082);

(statearr_16088_16228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16087 === (6))){
var state_16086__$1 = state_16086;
var statearr_16089_16229 = state_16086__$1;
(statearr_16089_16229[(2)] = null);

(statearr_16089_16229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16087 === (5))){
var state_16086__$1 = state_16086;
var statearr_16090_16230 = state_16086__$1;
(statearr_16090_16230[(2)] = null);

(statearr_16090_16230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16087 === (4))){
var inst_16076 = (state_16086[(2)]);
var inst_16077 = process.call(null,inst_16076);
var state_16086__$1 = state_16086;
if(cljs.core.truth_(inst_16077)){
var statearr_16091_16231 = state_16086__$1;
(statearr_16091_16231[(1)] = (5));

} else {
var statearr_16092_16232 = state_16086__$1;
(statearr_16092_16232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16087 === (3))){
var inst_16084 = (state_16086[(2)]);
var state_16086__$1 = state_16086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16086__$1,inst_16084);
} else {
if((state_val_16087 === (2))){
var state_16086__$1 = state_16086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16086__$1,(4),jobs);
} else {
if((state_val_16087 === (1))){
var state_16086__$1 = state_16086;
var statearr_16093_16233 = state_16086__$1;
(statearr_16093_16233[(2)] = null);

(statearr_16093_16233[(1)] = (2));


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
});})(__16215,c__6200__auto___16227,G__16046_16216,n__4139__auto___16214,jobs,results,process,async))
;
return ((function (__16215,switch__6144__auto__,c__6200__auto___16227,G__16046_16216,n__4139__auto___16214,jobs,results,process,async){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_16097 = [null,null,null,null,null,null,null];
(statearr_16097[(0)] = state_machine__6145__auto__);

(statearr_16097[(1)] = (1));

return statearr_16097;
});
var state_machine__6145__auto____1 = (function (state_16086){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_16086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e16098){if((e16098 instanceof Object)){
var ex__6148__auto__ = e16098;
var statearr_16099_16234 = state_16086;
(statearr_16099_16234[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16235 = state_16086;
state_16086 = G__16235;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_16086){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_16086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(__16215,switch__6144__auto__,c__6200__auto___16227,G__16046_16216,n__4139__auto___16214,jobs,results,process,async))
})();
var state__6202__auto__ = (function (){var statearr_16100 = f__6201__auto__.call(null);
(statearr_16100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___16227);

return statearr_16100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(__16215,c__6200__auto___16227,G__16046_16216,n__4139__auto___16214,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16236 = (__16215 + (1));
__16215 = G__16236;
continue;
} else {
}
break;
}

var c__6200__auto___16237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___16237,jobs,results,process,async){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___16237,jobs,results,process,async){
return (function (state_16122){
var state_val_16123 = (state_16122[(1)]);
if((state_val_16123 === (9))){
var inst_16115 = (state_16122[(2)]);
var state_16122__$1 = (function (){var statearr_16124 = state_16122;
(statearr_16124[(7)] = inst_16115);

return statearr_16124;
})();
var statearr_16125_16238 = state_16122__$1;
(statearr_16125_16238[(2)] = null);

(statearr_16125_16238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16123 === (8))){
var inst_16108 = (state_16122[(8)]);
var inst_16113 = (state_16122[(2)]);
var state_16122__$1 = (function (){var statearr_16126 = state_16122;
(statearr_16126[(9)] = inst_16113);

return statearr_16126;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16122__$1,(9),results,inst_16108);
} else {
if((state_val_16123 === (7))){
var inst_16118 = (state_16122[(2)]);
var state_16122__$1 = state_16122;
var statearr_16127_16239 = state_16122__$1;
(statearr_16127_16239[(2)] = inst_16118);

(statearr_16127_16239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16123 === (6))){
var inst_16103 = (state_16122[(10)]);
var inst_16108 = (state_16122[(8)]);
var inst_16108__$1 = cljs.core.async.chan.call(null,(1));
var inst_16109 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16110 = [inst_16103,inst_16108__$1];
var inst_16111 = (new cljs.core.PersistentVector(null,2,(5),inst_16109,inst_16110,null));
var state_16122__$1 = (function (){var statearr_16128 = state_16122;
(statearr_16128[(8)] = inst_16108__$1);

return statearr_16128;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16122__$1,(8),jobs,inst_16111);
} else {
if((state_val_16123 === (5))){
var inst_16106 = cljs.core.async.close_BANG_.call(null,jobs);
var state_16122__$1 = state_16122;
var statearr_16129_16240 = state_16122__$1;
(statearr_16129_16240[(2)] = inst_16106);

(statearr_16129_16240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16123 === (4))){
var inst_16103 = (state_16122[(10)]);
var inst_16103__$1 = (state_16122[(2)]);
var inst_16104 = (inst_16103__$1 == null);
var state_16122__$1 = (function (){var statearr_16130 = state_16122;
(statearr_16130[(10)] = inst_16103__$1);

return statearr_16130;
})();
if(cljs.core.truth_(inst_16104)){
var statearr_16131_16241 = state_16122__$1;
(statearr_16131_16241[(1)] = (5));

} else {
var statearr_16132_16242 = state_16122__$1;
(statearr_16132_16242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16123 === (3))){
var inst_16120 = (state_16122[(2)]);
var state_16122__$1 = state_16122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16122__$1,inst_16120);
} else {
if((state_val_16123 === (2))){
var state_16122__$1 = state_16122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16122__$1,(4),from);
} else {
if((state_val_16123 === (1))){
var state_16122__$1 = state_16122;
var statearr_16133_16243 = state_16122__$1;
(statearr_16133_16243[(2)] = null);

(statearr_16133_16243[(1)] = (2));


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
});})(c__6200__auto___16237,jobs,results,process,async))
;
return ((function (switch__6144__auto__,c__6200__auto___16237,jobs,results,process,async){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_16137 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16137[(0)] = state_machine__6145__auto__);

(statearr_16137[(1)] = (1));

return statearr_16137;
});
var state_machine__6145__auto____1 = (function (state_16122){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_16122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e16138){if((e16138 instanceof Object)){
var ex__6148__auto__ = e16138;
var statearr_16139_16244 = state_16122;
(statearr_16139_16244[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16245 = state_16122;
state_16122 = G__16245;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_16122){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_16122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___16237,jobs,results,process,async))
})();
var state__6202__auto__ = (function (){var statearr_16140 = f__6201__auto__.call(null);
(statearr_16140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___16237);

return statearr_16140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___16237,jobs,results,process,async))
);


var c__6200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto__,jobs,results,process,async){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto__,jobs,results,process,async){
return (function (state_16178){
var state_val_16179 = (state_16178[(1)]);
if((state_val_16179 === (7))){
var inst_16174 = (state_16178[(2)]);
var state_16178__$1 = state_16178;
var statearr_16180_16246 = state_16178__$1;
(statearr_16180_16246[(2)] = inst_16174);

(statearr_16180_16246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (20))){
var state_16178__$1 = state_16178;
var statearr_16181_16247 = state_16178__$1;
(statearr_16181_16247[(2)] = null);

(statearr_16181_16247[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (1))){
var state_16178__$1 = state_16178;
var statearr_16182_16248 = state_16178__$1;
(statearr_16182_16248[(2)] = null);

(statearr_16182_16248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (4))){
var inst_16143 = (state_16178[(7)]);
var inst_16143__$1 = (state_16178[(2)]);
var inst_16144 = (inst_16143__$1 == null);
var state_16178__$1 = (function (){var statearr_16183 = state_16178;
(statearr_16183[(7)] = inst_16143__$1);

return statearr_16183;
})();
if(cljs.core.truth_(inst_16144)){
var statearr_16184_16249 = state_16178__$1;
(statearr_16184_16249[(1)] = (5));

} else {
var statearr_16185_16250 = state_16178__$1;
(statearr_16185_16250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (15))){
var inst_16156 = (state_16178[(8)]);
var state_16178__$1 = state_16178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16178__$1,(18),to,inst_16156);
} else {
if((state_val_16179 === (21))){
var inst_16169 = (state_16178[(2)]);
var state_16178__$1 = state_16178;
var statearr_16186_16251 = state_16178__$1;
(statearr_16186_16251[(2)] = inst_16169);

(statearr_16186_16251[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (13))){
var inst_16171 = (state_16178[(2)]);
var state_16178__$1 = (function (){var statearr_16187 = state_16178;
(statearr_16187[(9)] = inst_16171);

return statearr_16187;
})();
var statearr_16188_16252 = state_16178__$1;
(statearr_16188_16252[(2)] = null);

(statearr_16188_16252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (6))){
var inst_16143 = (state_16178[(7)]);
var state_16178__$1 = state_16178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16178__$1,(11),inst_16143);
} else {
if((state_val_16179 === (17))){
var inst_16164 = (state_16178[(2)]);
var state_16178__$1 = state_16178;
if(cljs.core.truth_(inst_16164)){
var statearr_16189_16253 = state_16178__$1;
(statearr_16189_16253[(1)] = (19));

} else {
var statearr_16190_16254 = state_16178__$1;
(statearr_16190_16254[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (3))){
var inst_16176 = (state_16178[(2)]);
var state_16178__$1 = state_16178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16178__$1,inst_16176);
} else {
if((state_val_16179 === (12))){
var inst_16153 = (state_16178[(10)]);
var state_16178__$1 = state_16178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16178__$1,(14),inst_16153);
} else {
if((state_val_16179 === (2))){
var state_16178__$1 = state_16178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16178__$1,(4),results);
} else {
if((state_val_16179 === (19))){
var state_16178__$1 = state_16178;
var statearr_16191_16255 = state_16178__$1;
(statearr_16191_16255[(2)] = null);

(statearr_16191_16255[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (11))){
var inst_16153 = (state_16178[(2)]);
var state_16178__$1 = (function (){var statearr_16192 = state_16178;
(statearr_16192[(10)] = inst_16153);

return statearr_16192;
})();
var statearr_16193_16256 = state_16178__$1;
(statearr_16193_16256[(2)] = null);

(statearr_16193_16256[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (9))){
var state_16178__$1 = state_16178;
var statearr_16194_16257 = state_16178__$1;
(statearr_16194_16257[(2)] = null);

(statearr_16194_16257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (5))){
var state_16178__$1 = state_16178;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16195_16258 = state_16178__$1;
(statearr_16195_16258[(1)] = (8));

} else {
var statearr_16196_16259 = state_16178__$1;
(statearr_16196_16259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (14))){
var inst_16156 = (state_16178[(8)]);
var inst_16158 = (state_16178[(11)]);
var inst_16156__$1 = (state_16178[(2)]);
var inst_16157 = (inst_16156__$1 == null);
var inst_16158__$1 = cljs.core.not.call(null,inst_16157);
var state_16178__$1 = (function (){var statearr_16197 = state_16178;
(statearr_16197[(8)] = inst_16156__$1);

(statearr_16197[(11)] = inst_16158__$1);

return statearr_16197;
})();
if(inst_16158__$1){
var statearr_16198_16260 = state_16178__$1;
(statearr_16198_16260[(1)] = (15));

} else {
var statearr_16199_16261 = state_16178__$1;
(statearr_16199_16261[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (16))){
var inst_16158 = (state_16178[(11)]);
var state_16178__$1 = state_16178;
var statearr_16200_16262 = state_16178__$1;
(statearr_16200_16262[(2)] = inst_16158);

(statearr_16200_16262[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (10))){
var inst_16150 = (state_16178[(2)]);
var state_16178__$1 = state_16178;
var statearr_16201_16263 = state_16178__$1;
(statearr_16201_16263[(2)] = inst_16150);

(statearr_16201_16263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (18))){
var inst_16161 = (state_16178[(2)]);
var state_16178__$1 = state_16178;
var statearr_16202_16264 = state_16178__$1;
(statearr_16202_16264[(2)] = inst_16161);

(statearr_16202_16264[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16179 === (8))){
var inst_16147 = cljs.core.async.close_BANG_.call(null,to);
var state_16178__$1 = state_16178;
var statearr_16203_16265 = state_16178__$1;
(statearr_16203_16265[(2)] = inst_16147);

(statearr_16203_16265[(1)] = (10));


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
});})(c__6200__auto__,jobs,results,process,async))
;
return ((function (switch__6144__auto__,c__6200__auto__,jobs,results,process,async){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_16207 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16207[(0)] = state_machine__6145__auto__);

(statearr_16207[(1)] = (1));

return statearr_16207;
});
var state_machine__6145__auto____1 = (function (state_16178){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_16178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e16208){if((e16208 instanceof Object)){
var ex__6148__auto__ = e16208;
var statearr_16209_16266 = state_16178;
(statearr_16209_16266[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16267 = state_16178;
state_16178 = G__16267;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_16178){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_16178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto__,jobs,results,process,async))
})();
var state__6202__auto__ = (function (){var statearr_16210 = f__6201__auto__.call(null);
(statearr_16210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto__);

return statearr_16210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto__,jobs,results,process,async))
);

return c__6200__auto__;
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
var c__6200__auto___16368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___16368,tc,fc){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___16368,tc,fc){
return (function (state_16343){
var state_val_16344 = (state_16343[(1)]);
if((state_val_16344 === (7))){
var inst_16339 = (state_16343[(2)]);
var state_16343__$1 = state_16343;
var statearr_16345_16369 = state_16343__$1;
(statearr_16345_16369[(2)] = inst_16339);

(statearr_16345_16369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16344 === (1))){
var state_16343__$1 = state_16343;
var statearr_16346_16370 = state_16343__$1;
(statearr_16346_16370[(2)] = null);

(statearr_16346_16370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16344 === (4))){
var inst_16320 = (state_16343[(7)]);
var inst_16320__$1 = (state_16343[(2)]);
var inst_16321 = (inst_16320__$1 == null);
var state_16343__$1 = (function (){var statearr_16347 = state_16343;
(statearr_16347[(7)] = inst_16320__$1);

return statearr_16347;
})();
if(cljs.core.truth_(inst_16321)){
var statearr_16348_16371 = state_16343__$1;
(statearr_16348_16371[(1)] = (5));

} else {
var statearr_16349_16372 = state_16343__$1;
(statearr_16349_16372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16344 === (13))){
var state_16343__$1 = state_16343;
var statearr_16350_16373 = state_16343__$1;
(statearr_16350_16373[(2)] = null);

(statearr_16350_16373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16344 === (6))){
var inst_16320 = (state_16343[(7)]);
var inst_16326 = p.call(null,inst_16320);
var state_16343__$1 = state_16343;
if(cljs.core.truth_(inst_16326)){
var statearr_16351_16374 = state_16343__$1;
(statearr_16351_16374[(1)] = (9));

} else {
var statearr_16352_16375 = state_16343__$1;
(statearr_16352_16375[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16344 === (3))){
var inst_16341 = (state_16343[(2)]);
var state_16343__$1 = state_16343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16343__$1,inst_16341);
} else {
if((state_val_16344 === (12))){
var state_16343__$1 = state_16343;
var statearr_16353_16376 = state_16343__$1;
(statearr_16353_16376[(2)] = null);

(statearr_16353_16376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16344 === (2))){
var state_16343__$1 = state_16343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16343__$1,(4),ch);
} else {
if((state_val_16344 === (11))){
var inst_16320 = (state_16343[(7)]);
var inst_16330 = (state_16343[(2)]);
var state_16343__$1 = state_16343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16343__$1,(8),inst_16330,inst_16320);
} else {
if((state_val_16344 === (9))){
var state_16343__$1 = state_16343;
var statearr_16354_16377 = state_16343__$1;
(statearr_16354_16377[(2)] = tc);

(statearr_16354_16377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16344 === (5))){
var inst_16323 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16324 = cljs.core.async.close_BANG_.call(null,fc);
var state_16343__$1 = (function (){var statearr_16355 = state_16343;
(statearr_16355[(8)] = inst_16323);

return statearr_16355;
})();
var statearr_16356_16378 = state_16343__$1;
(statearr_16356_16378[(2)] = inst_16324);

(statearr_16356_16378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16344 === (14))){
var inst_16337 = (state_16343[(2)]);
var state_16343__$1 = state_16343;
var statearr_16357_16379 = state_16343__$1;
(statearr_16357_16379[(2)] = inst_16337);

(statearr_16357_16379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16344 === (10))){
var state_16343__$1 = state_16343;
var statearr_16358_16380 = state_16343__$1;
(statearr_16358_16380[(2)] = fc);

(statearr_16358_16380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16344 === (8))){
var inst_16332 = (state_16343[(2)]);
var state_16343__$1 = state_16343;
if(cljs.core.truth_(inst_16332)){
var statearr_16359_16381 = state_16343__$1;
(statearr_16359_16381[(1)] = (12));

} else {
var statearr_16360_16382 = state_16343__$1;
(statearr_16360_16382[(1)] = (13));

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
});})(c__6200__auto___16368,tc,fc))
;
return ((function (switch__6144__auto__,c__6200__auto___16368,tc,fc){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_16364 = [null,null,null,null,null,null,null,null,null];
(statearr_16364[(0)] = state_machine__6145__auto__);

(statearr_16364[(1)] = (1));

return statearr_16364;
});
var state_machine__6145__auto____1 = (function (state_16343){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_16343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e16365){if((e16365 instanceof Object)){
var ex__6148__auto__ = e16365;
var statearr_16366_16383 = state_16343;
(statearr_16366_16383[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16384 = state_16343;
state_16343 = G__16384;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_16343){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_16343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___16368,tc,fc))
})();
var state__6202__auto__ = (function (){var statearr_16367 = f__6201__auto__.call(null);
(statearr_16367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___16368);

return statearr_16367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___16368,tc,fc))
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
var c__6200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto__){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto__){
return (function (state_16431){
var state_val_16432 = (state_16431[(1)]);
if((state_val_16432 === (7))){
var inst_16427 = (state_16431[(2)]);
var state_16431__$1 = state_16431;
var statearr_16433_16449 = state_16431__$1;
(statearr_16433_16449[(2)] = inst_16427);

(statearr_16433_16449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16432 === (6))){
var inst_16417 = (state_16431[(7)]);
var inst_16420 = (state_16431[(8)]);
var inst_16424 = f.call(null,inst_16417,inst_16420);
var inst_16417__$1 = inst_16424;
var state_16431__$1 = (function (){var statearr_16434 = state_16431;
(statearr_16434[(7)] = inst_16417__$1);

return statearr_16434;
})();
var statearr_16435_16450 = state_16431__$1;
(statearr_16435_16450[(2)] = null);

(statearr_16435_16450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16432 === (5))){
var inst_16417 = (state_16431[(7)]);
var state_16431__$1 = state_16431;
var statearr_16436_16451 = state_16431__$1;
(statearr_16436_16451[(2)] = inst_16417);

(statearr_16436_16451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16432 === (4))){
var inst_16420 = (state_16431[(8)]);
var inst_16420__$1 = (state_16431[(2)]);
var inst_16421 = (inst_16420__$1 == null);
var state_16431__$1 = (function (){var statearr_16437 = state_16431;
(statearr_16437[(8)] = inst_16420__$1);

return statearr_16437;
})();
if(cljs.core.truth_(inst_16421)){
var statearr_16438_16452 = state_16431__$1;
(statearr_16438_16452[(1)] = (5));

} else {
var statearr_16439_16453 = state_16431__$1;
(statearr_16439_16453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16432 === (3))){
var inst_16429 = (state_16431[(2)]);
var state_16431__$1 = state_16431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16431__$1,inst_16429);
} else {
if((state_val_16432 === (2))){
var state_16431__$1 = state_16431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16431__$1,(4),ch);
} else {
if((state_val_16432 === (1))){
var inst_16417 = init;
var state_16431__$1 = (function (){var statearr_16440 = state_16431;
(statearr_16440[(7)] = inst_16417);

return statearr_16440;
})();
var statearr_16441_16454 = state_16431__$1;
(statearr_16441_16454[(2)] = null);

(statearr_16441_16454[(1)] = (2));


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
});})(c__6200__auto__))
;
return ((function (switch__6144__auto__,c__6200__auto__){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_16445 = [null,null,null,null,null,null,null,null,null];
(statearr_16445[(0)] = state_machine__6145__auto__);

(statearr_16445[(1)] = (1));

return statearr_16445;
});
var state_machine__6145__auto____1 = (function (state_16431){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_16431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e16446){if((e16446 instanceof Object)){
var ex__6148__auto__ = e16446;
var statearr_16447_16455 = state_16431;
(statearr_16447_16455[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16456 = state_16431;
state_16431 = G__16456;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_16431){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_16431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto__))
})();
var state__6202__auto__ = (function (){var statearr_16448 = f__6201__auto__.call(null);
(statearr_16448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto__);

return statearr_16448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto__))
);

return c__6200__auto__;
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
var c__6200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto__){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto__){
return (function (state_16530){
var state_val_16531 = (state_16530[(1)]);
if((state_val_16531 === (7))){
var inst_16512 = (state_16530[(2)]);
var state_16530__$1 = state_16530;
var statearr_16532_16555 = state_16530__$1;
(statearr_16532_16555[(2)] = inst_16512);

(statearr_16532_16555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16531 === (1))){
var inst_16506 = cljs.core.seq.call(null,coll);
var inst_16507 = inst_16506;
var state_16530__$1 = (function (){var statearr_16533 = state_16530;
(statearr_16533[(7)] = inst_16507);

return statearr_16533;
})();
var statearr_16534_16556 = state_16530__$1;
(statearr_16534_16556[(2)] = null);

(statearr_16534_16556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16531 === (4))){
var inst_16507 = (state_16530[(7)]);
var inst_16510 = cljs.core.first.call(null,inst_16507);
var state_16530__$1 = state_16530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16530__$1,(7),ch,inst_16510);
} else {
if((state_val_16531 === (13))){
var inst_16524 = (state_16530[(2)]);
var state_16530__$1 = state_16530;
var statearr_16535_16557 = state_16530__$1;
(statearr_16535_16557[(2)] = inst_16524);

(statearr_16535_16557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16531 === (6))){
var inst_16515 = (state_16530[(2)]);
var state_16530__$1 = state_16530;
if(cljs.core.truth_(inst_16515)){
var statearr_16536_16558 = state_16530__$1;
(statearr_16536_16558[(1)] = (8));

} else {
var statearr_16537_16559 = state_16530__$1;
(statearr_16537_16559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16531 === (3))){
var inst_16528 = (state_16530[(2)]);
var state_16530__$1 = state_16530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16530__$1,inst_16528);
} else {
if((state_val_16531 === (12))){
var state_16530__$1 = state_16530;
var statearr_16538_16560 = state_16530__$1;
(statearr_16538_16560[(2)] = null);

(statearr_16538_16560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16531 === (2))){
var inst_16507 = (state_16530[(7)]);
var state_16530__$1 = state_16530;
if(cljs.core.truth_(inst_16507)){
var statearr_16539_16561 = state_16530__$1;
(statearr_16539_16561[(1)] = (4));

} else {
var statearr_16540_16562 = state_16530__$1;
(statearr_16540_16562[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16531 === (11))){
var inst_16521 = cljs.core.async.close_BANG_.call(null,ch);
var state_16530__$1 = state_16530;
var statearr_16541_16563 = state_16530__$1;
(statearr_16541_16563[(2)] = inst_16521);

(statearr_16541_16563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16531 === (9))){
var state_16530__$1 = state_16530;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16542_16564 = state_16530__$1;
(statearr_16542_16564[(1)] = (11));

} else {
var statearr_16543_16565 = state_16530__$1;
(statearr_16543_16565[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16531 === (5))){
var inst_16507 = (state_16530[(7)]);
var state_16530__$1 = state_16530;
var statearr_16544_16566 = state_16530__$1;
(statearr_16544_16566[(2)] = inst_16507);

(statearr_16544_16566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16531 === (10))){
var inst_16526 = (state_16530[(2)]);
var state_16530__$1 = state_16530;
var statearr_16545_16567 = state_16530__$1;
(statearr_16545_16567[(2)] = inst_16526);

(statearr_16545_16567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16531 === (8))){
var inst_16507 = (state_16530[(7)]);
var inst_16517 = cljs.core.next.call(null,inst_16507);
var inst_16507__$1 = inst_16517;
var state_16530__$1 = (function (){var statearr_16546 = state_16530;
(statearr_16546[(7)] = inst_16507__$1);

return statearr_16546;
})();
var statearr_16547_16568 = state_16530__$1;
(statearr_16547_16568[(2)] = null);

(statearr_16547_16568[(1)] = (2));


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
});})(c__6200__auto__))
;
return ((function (switch__6144__auto__,c__6200__auto__){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_16551 = [null,null,null,null,null,null,null,null];
(statearr_16551[(0)] = state_machine__6145__auto__);

(statearr_16551[(1)] = (1));

return statearr_16551;
});
var state_machine__6145__auto____1 = (function (state_16530){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_16530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e16552){if((e16552 instanceof Object)){
var ex__6148__auto__ = e16552;
var statearr_16553_16569 = state_16530;
(statearr_16553_16569[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16570 = state_16530;
state_16530 = G__16570;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_16530){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_16530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto__))
})();
var state__6202__auto__ = (function (){var statearr_16554 = f__6201__auto__.call(null);
(statearr_16554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto__);

return statearr_16554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto__))
);

return c__6200__auto__;
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

cljs.core.async.Mux = (function (){var obj16572 = {};
return obj16572;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3240__auto__ = _;
if(and__3240__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3240__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__3896__auto__ = (((_ == null))?null:_);
return (function (){var or__3252__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj16574 = {};
return obj16574;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
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
if(typeof cljs.core.async.t16796 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16796 = (function (cs,ch,mult,meta16797){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16797 = meta16797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16796.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t16796.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t16796.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t16796.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t16796.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16796.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t16796.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16798){
var self__ = this;
var _16798__$1 = this;
return self__.meta16797;
});})(cs))
;

cljs.core.async.t16796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16798,meta16797__$1){
var self__ = this;
var _16798__$1 = this;
return (new cljs.core.async.t16796(self__.cs,self__.ch,self__.mult,meta16797__$1));
});})(cs))
;

cljs.core.async.t16796.cljs$lang$type = true;

cljs.core.async.t16796.cljs$lang$ctorStr = "cljs.core.async/t16796";

cljs.core.async.t16796.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t16796");
});})(cs))
;

cljs.core.async.__GT_t16796 = ((function (cs){
return (function __GT_t16796(cs__$1,ch__$1,mult__$1,meta16797){
return (new cljs.core.async.t16796(cs__$1,ch__$1,mult__$1,meta16797));
});})(cs))
;

}

return (new cljs.core.async.t16796(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__6200__auto___17017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___17017,cs,m,dchan,dctr,done){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___17017,cs,m,dchan,dctr,done){
return (function (state_16929){
var state_val_16930 = (state_16929[(1)]);
if((state_val_16930 === (7))){
var inst_16925 = (state_16929[(2)]);
var state_16929__$1 = state_16929;
var statearr_16931_17018 = state_16929__$1;
(statearr_16931_17018[(2)] = inst_16925);

(statearr_16931_17018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (20))){
var inst_16830 = (state_16929[(7)]);
var inst_16840 = cljs.core.first.call(null,inst_16830);
var inst_16841 = cljs.core.nth.call(null,inst_16840,(0),null);
var inst_16842 = cljs.core.nth.call(null,inst_16840,(1),null);
var state_16929__$1 = (function (){var statearr_16932 = state_16929;
(statearr_16932[(8)] = inst_16841);

return statearr_16932;
})();
if(cljs.core.truth_(inst_16842)){
var statearr_16933_17019 = state_16929__$1;
(statearr_16933_17019[(1)] = (22));

} else {
var statearr_16934_17020 = state_16929__$1;
(statearr_16934_17020[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (27))){
var inst_16877 = (state_16929[(9)]);
var inst_16872 = (state_16929[(10)]);
var inst_16870 = (state_16929[(11)]);
var inst_16801 = (state_16929[(12)]);
var inst_16877__$1 = cljs.core._nth.call(null,inst_16870,inst_16872);
var inst_16878 = cljs.core.async.put_BANG_.call(null,inst_16877__$1,inst_16801,done);
var state_16929__$1 = (function (){var statearr_16935 = state_16929;
(statearr_16935[(9)] = inst_16877__$1);

return statearr_16935;
})();
if(cljs.core.truth_(inst_16878)){
var statearr_16936_17021 = state_16929__$1;
(statearr_16936_17021[(1)] = (30));

} else {
var statearr_16937_17022 = state_16929__$1;
(statearr_16937_17022[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (1))){
var state_16929__$1 = state_16929;
var statearr_16938_17023 = state_16929__$1;
(statearr_16938_17023[(2)] = null);

(statearr_16938_17023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (24))){
var inst_16830 = (state_16929[(7)]);
var inst_16847 = (state_16929[(2)]);
var inst_16848 = cljs.core.next.call(null,inst_16830);
var inst_16810 = inst_16848;
var inst_16811 = null;
var inst_16812 = (0);
var inst_16813 = (0);
var state_16929__$1 = (function (){var statearr_16939 = state_16929;
(statearr_16939[(13)] = inst_16847);

(statearr_16939[(14)] = inst_16812);

(statearr_16939[(15)] = inst_16811);

(statearr_16939[(16)] = inst_16810);

(statearr_16939[(17)] = inst_16813);

return statearr_16939;
})();
var statearr_16940_17024 = state_16929__$1;
(statearr_16940_17024[(2)] = null);

(statearr_16940_17024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (39))){
var state_16929__$1 = state_16929;
var statearr_16944_17025 = state_16929__$1;
(statearr_16944_17025[(2)] = null);

(statearr_16944_17025[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (4))){
var inst_16801 = (state_16929[(12)]);
var inst_16801__$1 = (state_16929[(2)]);
var inst_16802 = (inst_16801__$1 == null);
var state_16929__$1 = (function (){var statearr_16945 = state_16929;
(statearr_16945[(12)] = inst_16801__$1);

return statearr_16945;
})();
if(cljs.core.truth_(inst_16802)){
var statearr_16946_17026 = state_16929__$1;
(statearr_16946_17026[(1)] = (5));

} else {
var statearr_16947_17027 = state_16929__$1;
(statearr_16947_17027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (15))){
var inst_16812 = (state_16929[(14)]);
var inst_16811 = (state_16929[(15)]);
var inst_16810 = (state_16929[(16)]);
var inst_16813 = (state_16929[(17)]);
var inst_16826 = (state_16929[(2)]);
var inst_16827 = (inst_16813 + (1));
var tmp16941 = inst_16812;
var tmp16942 = inst_16811;
var tmp16943 = inst_16810;
var inst_16810__$1 = tmp16943;
var inst_16811__$1 = tmp16942;
var inst_16812__$1 = tmp16941;
var inst_16813__$1 = inst_16827;
var state_16929__$1 = (function (){var statearr_16948 = state_16929;
(statearr_16948[(14)] = inst_16812__$1);

(statearr_16948[(18)] = inst_16826);

(statearr_16948[(15)] = inst_16811__$1);

(statearr_16948[(16)] = inst_16810__$1);

(statearr_16948[(17)] = inst_16813__$1);

return statearr_16948;
})();
var statearr_16949_17028 = state_16929__$1;
(statearr_16949_17028[(2)] = null);

(statearr_16949_17028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (21))){
var inst_16851 = (state_16929[(2)]);
var state_16929__$1 = state_16929;
var statearr_16953_17029 = state_16929__$1;
(statearr_16953_17029[(2)] = inst_16851);

(statearr_16953_17029[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (31))){
var inst_16877 = (state_16929[(9)]);
var inst_16881 = done.call(null,null);
var inst_16882 = cljs.core.async.untap_STAR_.call(null,m,inst_16877);
var state_16929__$1 = (function (){var statearr_16954 = state_16929;
(statearr_16954[(19)] = inst_16881);

return statearr_16954;
})();
var statearr_16955_17030 = state_16929__$1;
(statearr_16955_17030[(2)] = inst_16882);

(statearr_16955_17030[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (32))){
var inst_16871 = (state_16929[(20)]);
var inst_16872 = (state_16929[(10)]);
var inst_16870 = (state_16929[(11)]);
var inst_16869 = (state_16929[(21)]);
var inst_16884 = (state_16929[(2)]);
var inst_16885 = (inst_16872 + (1));
var tmp16950 = inst_16871;
var tmp16951 = inst_16870;
var tmp16952 = inst_16869;
var inst_16869__$1 = tmp16952;
var inst_16870__$1 = tmp16951;
var inst_16871__$1 = tmp16950;
var inst_16872__$1 = inst_16885;
var state_16929__$1 = (function (){var statearr_16956 = state_16929;
(statearr_16956[(20)] = inst_16871__$1);

(statearr_16956[(22)] = inst_16884);

(statearr_16956[(10)] = inst_16872__$1);

(statearr_16956[(11)] = inst_16870__$1);

(statearr_16956[(21)] = inst_16869__$1);

return statearr_16956;
})();
var statearr_16957_17031 = state_16929__$1;
(statearr_16957_17031[(2)] = null);

(statearr_16957_17031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (40))){
var inst_16897 = (state_16929[(23)]);
var inst_16901 = done.call(null,null);
var inst_16902 = cljs.core.async.untap_STAR_.call(null,m,inst_16897);
var state_16929__$1 = (function (){var statearr_16958 = state_16929;
(statearr_16958[(24)] = inst_16901);

return statearr_16958;
})();
var statearr_16959_17032 = state_16929__$1;
(statearr_16959_17032[(2)] = inst_16902);

(statearr_16959_17032[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (33))){
var inst_16888 = (state_16929[(25)]);
var inst_16890 = cljs.core.chunked_seq_QMARK_.call(null,inst_16888);
var state_16929__$1 = state_16929;
if(inst_16890){
var statearr_16960_17033 = state_16929__$1;
(statearr_16960_17033[(1)] = (36));

} else {
var statearr_16961_17034 = state_16929__$1;
(statearr_16961_17034[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (13))){
var inst_16820 = (state_16929[(26)]);
var inst_16823 = cljs.core.async.close_BANG_.call(null,inst_16820);
var state_16929__$1 = state_16929;
var statearr_16962_17035 = state_16929__$1;
(statearr_16962_17035[(2)] = inst_16823);

(statearr_16962_17035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (22))){
var inst_16841 = (state_16929[(8)]);
var inst_16844 = cljs.core.async.close_BANG_.call(null,inst_16841);
var state_16929__$1 = state_16929;
var statearr_16963_17036 = state_16929__$1;
(statearr_16963_17036[(2)] = inst_16844);

(statearr_16963_17036[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (36))){
var inst_16888 = (state_16929[(25)]);
var inst_16892 = cljs.core.chunk_first.call(null,inst_16888);
var inst_16893 = cljs.core.chunk_rest.call(null,inst_16888);
var inst_16894 = cljs.core.count.call(null,inst_16892);
var inst_16869 = inst_16893;
var inst_16870 = inst_16892;
var inst_16871 = inst_16894;
var inst_16872 = (0);
var state_16929__$1 = (function (){var statearr_16964 = state_16929;
(statearr_16964[(20)] = inst_16871);

(statearr_16964[(10)] = inst_16872);

(statearr_16964[(11)] = inst_16870);

(statearr_16964[(21)] = inst_16869);

return statearr_16964;
})();
var statearr_16965_17037 = state_16929__$1;
(statearr_16965_17037[(2)] = null);

(statearr_16965_17037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (41))){
var inst_16888 = (state_16929[(25)]);
var inst_16904 = (state_16929[(2)]);
var inst_16905 = cljs.core.next.call(null,inst_16888);
var inst_16869 = inst_16905;
var inst_16870 = null;
var inst_16871 = (0);
var inst_16872 = (0);
var state_16929__$1 = (function (){var statearr_16966 = state_16929;
(statearr_16966[(20)] = inst_16871);

(statearr_16966[(10)] = inst_16872);

(statearr_16966[(11)] = inst_16870);

(statearr_16966[(27)] = inst_16904);

(statearr_16966[(21)] = inst_16869);

return statearr_16966;
})();
var statearr_16967_17038 = state_16929__$1;
(statearr_16967_17038[(2)] = null);

(statearr_16967_17038[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (43))){
var state_16929__$1 = state_16929;
var statearr_16968_17039 = state_16929__$1;
(statearr_16968_17039[(2)] = null);

(statearr_16968_17039[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (29))){
var inst_16913 = (state_16929[(2)]);
var state_16929__$1 = state_16929;
var statearr_16969_17040 = state_16929__$1;
(statearr_16969_17040[(2)] = inst_16913);

(statearr_16969_17040[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (44))){
var inst_16922 = (state_16929[(2)]);
var state_16929__$1 = (function (){var statearr_16970 = state_16929;
(statearr_16970[(28)] = inst_16922);

return statearr_16970;
})();
var statearr_16971_17041 = state_16929__$1;
(statearr_16971_17041[(2)] = null);

(statearr_16971_17041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (6))){
var inst_16861 = (state_16929[(29)]);
var inst_16860 = cljs.core.deref.call(null,cs);
var inst_16861__$1 = cljs.core.keys.call(null,inst_16860);
var inst_16862 = cljs.core.count.call(null,inst_16861__$1);
var inst_16863 = cljs.core.reset_BANG_.call(null,dctr,inst_16862);
var inst_16868 = cljs.core.seq.call(null,inst_16861__$1);
var inst_16869 = inst_16868;
var inst_16870 = null;
var inst_16871 = (0);
var inst_16872 = (0);
var state_16929__$1 = (function (){var statearr_16972 = state_16929;
(statearr_16972[(30)] = inst_16863);

(statearr_16972[(20)] = inst_16871);

(statearr_16972[(10)] = inst_16872);

(statearr_16972[(11)] = inst_16870);

(statearr_16972[(29)] = inst_16861__$1);

(statearr_16972[(21)] = inst_16869);

return statearr_16972;
})();
var statearr_16973_17042 = state_16929__$1;
(statearr_16973_17042[(2)] = null);

(statearr_16973_17042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (28))){
var inst_16888 = (state_16929[(25)]);
var inst_16869 = (state_16929[(21)]);
var inst_16888__$1 = cljs.core.seq.call(null,inst_16869);
var state_16929__$1 = (function (){var statearr_16974 = state_16929;
(statearr_16974[(25)] = inst_16888__$1);

return statearr_16974;
})();
if(inst_16888__$1){
var statearr_16975_17043 = state_16929__$1;
(statearr_16975_17043[(1)] = (33));

} else {
var statearr_16976_17044 = state_16929__$1;
(statearr_16976_17044[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (25))){
var inst_16871 = (state_16929[(20)]);
var inst_16872 = (state_16929[(10)]);
var inst_16874 = (inst_16872 < inst_16871);
var inst_16875 = inst_16874;
var state_16929__$1 = state_16929;
if(cljs.core.truth_(inst_16875)){
var statearr_16977_17045 = state_16929__$1;
(statearr_16977_17045[(1)] = (27));

} else {
var statearr_16978_17046 = state_16929__$1;
(statearr_16978_17046[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (34))){
var state_16929__$1 = state_16929;
var statearr_16979_17047 = state_16929__$1;
(statearr_16979_17047[(2)] = null);

(statearr_16979_17047[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (17))){
var state_16929__$1 = state_16929;
var statearr_16980_17048 = state_16929__$1;
(statearr_16980_17048[(2)] = null);

(statearr_16980_17048[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (3))){
var inst_16927 = (state_16929[(2)]);
var state_16929__$1 = state_16929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16929__$1,inst_16927);
} else {
if((state_val_16930 === (12))){
var inst_16856 = (state_16929[(2)]);
var state_16929__$1 = state_16929;
var statearr_16981_17049 = state_16929__$1;
(statearr_16981_17049[(2)] = inst_16856);

(statearr_16981_17049[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (2))){
var state_16929__$1 = state_16929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16929__$1,(4),ch);
} else {
if((state_val_16930 === (23))){
var state_16929__$1 = state_16929;
var statearr_16982_17050 = state_16929__$1;
(statearr_16982_17050[(2)] = null);

(statearr_16982_17050[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (35))){
var inst_16911 = (state_16929[(2)]);
var state_16929__$1 = state_16929;
var statearr_16983_17051 = state_16929__$1;
(statearr_16983_17051[(2)] = inst_16911);

(statearr_16983_17051[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (19))){
var inst_16830 = (state_16929[(7)]);
var inst_16834 = cljs.core.chunk_first.call(null,inst_16830);
var inst_16835 = cljs.core.chunk_rest.call(null,inst_16830);
var inst_16836 = cljs.core.count.call(null,inst_16834);
var inst_16810 = inst_16835;
var inst_16811 = inst_16834;
var inst_16812 = inst_16836;
var inst_16813 = (0);
var state_16929__$1 = (function (){var statearr_16984 = state_16929;
(statearr_16984[(14)] = inst_16812);

(statearr_16984[(15)] = inst_16811);

(statearr_16984[(16)] = inst_16810);

(statearr_16984[(17)] = inst_16813);

return statearr_16984;
})();
var statearr_16985_17052 = state_16929__$1;
(statearr_16985_17052[(2)] = null);

(statearr_16985_17052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (11))){
var inst_16830 = (state_16929[(7)]);
var inst_16810 = (state_16929[(16)]);
var inst_16830__$1 = cljs.core.seq.call(null,inst_16810);
var state_16929__$1 = (function (){var statearr_16986 = state_16929;
(statearr_16986[(7)] = inst_16830__$1);

return statearr_16986;
})();
if(inst_16830__$1){
var statearr_16987_17053 = state_16929__$1;
(statearr_16987_17053[(1)] = (16));

} else {
var statearr_16988_17054 = state_16929__$1;
(statearr_16988_17054[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (9))){
var inst_16858 = (state_16929[(2)]);
var state_16929__$1 = state_16929;
var statearr_16989_17055 = state_16929__$1;
(statearr_16989_17055[(2)] = inst_16858);

(statearr_16989_17055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (5))){
var inst_16808 = cljs.core.deref.call(null,cs);
var inst_16809 = cljs.core.seq.call(null,inst_16808);
var inst_16810 = inst_16809;
var inst_16811 = null;
var inst_16812 = (0);
var inst_16813 = (0);
var state_16929__$1 = (function (){var statearr_16990 = state_16929;
(statearr_16990[(14)] = inst_16812);

(statearr_16990[(15)] = inst_16811);

(statearr_16990[(16)] = inst_16810);

(statearr_16990[(17)] = inst_16813);

return statearr_16990;
})();
var statearr_16991_17056 = state_16929__$1;
(statearr_16991_17056[(2)] = null);

(statearr_16991_17056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (14))){
var state_16929__$1 = state_16929;
var statearr_16992_17057 = state_16929__$1;
(statearr_16992_17057[(2)] = null);

(statearr_16992_17057[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (45))){
var inst_16919 = (state_16929[(2)]);
var state_16929__$1 = state_16929;
var statearr_16993_17058 = state_16929__$1;
(statearr_16993_17058[(2)] = inst_16919);

(statearr_16993_17058[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (26))){
var inst_16861 = (state_16929[(29)]);
var inst_16915 = (state_16929[(2)]);
var inst_16916 = cljs.core.seq.call(null,inst_16861);
var state_16929__$1 = (function (){var statearr_16994 = state_16929;
(statearr_16994[(31)] = inst_16915);

return statearr_16994;
})();
if(inst_16916){
var statearr_16995_17059 = state_16929__$1;
(statearr_16995_17059[(1)] = (42));

} else {
var statearr_16996_17060 = state_16929__$1;
(statearr_16996_17060[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (16))){
var inst_16830 = (state_16929[(7)]);
var inst_16832 = cljs.core.chunked_seq_QMARK_.call(null,inst_16830);
var state_16929__$1 = state_16929;
if(inst_16832){
var statearr_16997_17061 = state_16929__$1;
(statearr_16997_17061[(1)] = (19));

} else {
var statearr_16998_17062 = state_16929__$1;
(statearr_16998_17062[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (38))){
var inst_16908 = (state_16929[(2)]);
var state_16929__$1 = state_16929;
var statearr_16999_17063 = state_16929__$1;
(statearr_16999_17063[(2)] = inst_16908);

(statearr_16999_17063[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (30))){
var state_16929__$1 = state_16929;
var statearr_17000_17064 = state_16929__$1;
(statearr_17000_17064[(2)] = null);

(statearr_17000_17064[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (10))){
var inst_16811 = (state_16929[(15)]);
var inst_16813 = (state_16929[(17)]);
var inst_16819 = cljs.core._nth.call(null,inst_16811,inst_16813);
var inst_16820 = cljs.core.nth.call(null,inst_16819,(0),null);
var inst_16821 = cljs.core.nth.call(null,inst_16819,(1),null);
var state_16929__$1 = (function (){var statearr_17001 = state_16929;
(statearr_17001[(26)] = inst_16820);

return statearr_17001;
})();
if(cljs.core.truth_(inst_16821)){
var statearr_17002_17065 = state_16929__$1;
(statearr_17002_17065[(1)] = (13));

} else {
var statearr_17003_17066 = state_16929__$1;
(statearr_17003_17066[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (18))){
var inst_16854 = (state_16929[(2)]);
var state_16929__$1 = state_16929;
var statearr_17004_17067 = state_16929__$1;
(statearr_17004_17067[(2)] = inst_16854);

(statearr_17004_17067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (42))){
var state_16929__$1 = state_16929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16929__$1,(45),dchan);
} else {
if((state_val_16930 === (37))){
var inst_16888 = (state_16929[(25)]);
var inst_16897 = (state_16929[(23)]);
var inst_16801 = (state_16929[(12)]);
var inst_16897__$1 = cljs.core.first.call(null,inst_16888);
var inst_16898 = cljs.core.async.put_BANG_.call(null,inst_16897__$1,inst_16801,done);
var state_16929__$1 = (function (){var statearr_17005 = state_16929;
(statearr_17005[(23)] = inst_16897__$1);

return statearr_17005;
})();
if(cljs.core.truth_(inst_16898)){
var statearr_17006_17068 = state_16929__$1;
(statearr_17006_17068[(1)] = (39));

} else {
var statearr_17007_17069 = state_16929__$1;
(statearr_17007_17069[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16930 === (8))){
var inst_16812 = (state_16929[(14)]);
var inst_16813 = (state_16929[(17)]);
var inst_16815 = (inst_16813 < inst_16812);
var inst_16816 = inst_16815;
var state_16929__$1 = state_16929;
if(cljs.core.truth_(inst_16816)){
var statearr_17008_17070 = state_16929__$1;
(statearr_17008_17070[(1)] = (10));

} else {
var statearr_17009_17071 = state_16929__$1;
(statearr_17009_17071[(1)] = (11));

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
});})(c__6200__auto___17017,cs,m,dchan,dctr,done))
;
return ((function (switch__6144__auto__,c__6200__auto___17017,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_17013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17013[(0)] = state_machine__6145__auto__);

(statearr_17013[(1)] = (1));

return statearr_17013;
});
var state_machine__6145__auto____1 = (function (state_16929){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_16929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e17014){if((e17014 instanceof Object)){
var ex__6148__auto__ = e17014;
var statearr_17015_17072 = state_16929;
(statearr_17015_17072[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17073 = state_16929;
state_16929 = G__17073;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_16929){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_16929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___17017,cs,m,dchan,dctr,done))
})();
var state__6202__auto__ = (function (){var statearr_17016 = f__6201__auto__.call(null);
(statearr_17016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___17017);

return statearr_17016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___17017,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj17075 = {};
return obj17075;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__17076){
var map__17081 = p__17076;
var map__17081__$1 = ((cljs.core.seq_QMARK_.call(null,map__17081))?cljs.core.apply.call(null,cljs.core.hash_map,map__17081):map__17081);
var opts = map__17081__$1;
var statearr_17082_17085 = state;
(statearr_17082_17085[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__17081,map__17081__$1,opts){
return (function (val){
var statearr_17083_17086 = state;
(statearr_17083_17086[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17081,map__17081__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_17084_17087 = state;
(statearr_17084_17087[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__17076 = null;
if (arguments.length > 3) {
var G__17088__i = 0, G__17088__a = new Array(arguments.length -  3);
while (G__17088__i < G__17088__a.length) {G__17088__a[G__17088__i] = arguments[G__17088__i + 3]; ++G__17088__i;}
  p__17076 = new cljs.core.IndexedSeq(G__17088__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__17076);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__17089){
var state = cljs.core.first(arglist__17089);
arglist__17089 = cljs.core.next(arglist__17089);
var cont_block = cljs.core.first(arglist__17089);
arglist__17089 = cljs.core.next(arglist__17089);
var ports = cljs.core.first(arglist__17089);
var p__17076 = cljs.core.rest(arglist__17089);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__17076);
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
if(typeof cljs.core.async.t17209 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17209 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17210){
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
this.meta17210 = meta17210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17209.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t17209.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17209.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17209.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17209.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17209.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t17209.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17209.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17209.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17211){
var self__ = this;
var _17211__$1 = this;
return self__.meta17210;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17211,meta17210__$1){
var self__ = this;
var _17211__$1 = this;
return (new cljs.core.async.t17209(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17210__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17209.cljs$lang$type = true;

cljs.core.async.t17209.cljs$lang$ctorStr = "cljs.core.async/t17209";

cljs.core.async.t17209.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t17209");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t17209 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17209(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17210){
return (new cljs.core.async.t17209(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17210));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t17209(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__6200__auto___17328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___17328,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___17328,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17281){
var state_val_17282 = (state_17281[(1)]);
if((state_val_17282 === (7))){
var inst_17225 = (state_17281[(7)]);
var inst_17230 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17225);
var state_17281__$1 = state_17281;
var statearr_17283_17329 = state_17281__$1;
(statearr_17283_17329[(2)] = inst_17230);

(statearr_17283_17329[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (20))){
var inst_17240 = (state_17281[(8)]);
var state_17281__$1 = state_17281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17281__$1,(23),out,inst_17240);
} else {
if((state_val_17282 === (1))){
var inst_17215 = (state_17281[(9)]);
var inst_17215__$1 = calc_state.call(null);
var inst_17216 = cljs.core.seq_QMARK_.call(null,inst_17215__$1);
var state_17281__$1 = (function (){var statearr_17284 = state_17281;
(statearr_17284[(9)] = inst_17215__$1);

return statearr_17284;
})();
if(inst_17216){
var statearr_17285_17330 = state_17281__$1;
(statearr_17285_17330[(1)] = (2));

} else {
var statearr_17286_17331 = state_17281__$1;
(statearr_17286_17331[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (24))){
var inst_17233 = (state_17281[(10)]);
var inst_17225 = inst_17233;
var state_17281__$1 = (function (){var statearr_17287 = state_17281;
(statearr_17287[(7)] = inst_17225);

return statearr_17287;
})();
var statearr_17288_17332 = state_17281__$1;
(statearr_17288_17332[(2)] = null);

(statearr_17288_17332[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (4))){
var inst_17215 = (state_17281[(9)]);
var inst_17221 = (state_17281[(2)]);
var inst_17222 = cljs.core.get.call(null,inst_17221,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17223 = cljs.core.get.call(null,inst_17221,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17224 = cljs.core.get.call(null,inst_17221,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17225 = inst_17215;
var state_17281__$1 = (function (){var statearr_17289 = state_17281;
(statearr_17289[(7)] = inst_17225);

(statearr_17289[(11)] = inst_17224);

(statearr_17289[(12)] = inst_17223);

(statearr_17289[(13)] = inst_17222);

return statearr_17289;
})();
var statearr_17290_17333 = state_17281__$1;
(statearr_17290_17333[(2)] = null);

(statearr_17290_17333[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (15))){
var state_17281__$1 = state_17281;
var statearr_17291_17334 = state_17281__$1;
(statearr_17291_17334[(2)] = null);

(statearr_17291_17334[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (21))){
var inst_17233 = (state_17281[(10)]);
var inst_17225 = inst_17233;
var state_17281__$1 = (function (){var statearr_17292 = state_17281;
(statearr_17292[(7)] = inst_17225);

return statearr_17292;
})();
var statearr_17293_17335 = state_17281__$1;
(statearr_17293_17335[(2)] = null);

(statearr_17293_17335[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (13))){
var inst_17277 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
var statearr_17294_17336 = state_17281__$1;
(statearr_17294_17336[(2)] = inst_17277);

(statearr_17294_17336[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (22))){
var inst_17275 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
var statearr_17295_17337 = state_17281__$1;
(statearr_17295_17337[(2)] = inst_17275);

(statearr_17295_17337[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (6))){
var inst_17279 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17281__$1,inst_17279);
} else {
if((state_val_17282 === (25))){
var state_17281__$1 = state_17281;
var statearr_17296_17338 = state_17281__$1;
(statearr_17296_17338[(2)] = null);

(statearr_17296_17338[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (17))){
var inst_17255 = (state_17281[(14)]);
var state_17281__$1 = state_17281;
var statearr_17297_17339 = state_17281__$1;
(statearr_17297_17339[(2)] = inst_17255);

(statearr_17297_17339[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (3))){
var inst_17215 = (state_17281[(9)]);
var state_17281__$1 = state_17281;
var statearr_17298_17340 = state_17281__$1;
(statearr_17298_17340[(2)] = inst_17215);

(statearr_17298_17340[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (12))){
var inst_17255 = (state_17281[(14)]);
var inst_17241 = (state_17281[(15)]);
var inst_17236 = (state_17281[(16)]);
var inst_17255__$1 = inst_17236.call(null,inst_17241);
var state_17281__$1 = (function (){var statearr_17299 = state_17281;
(statearr_17299[(14)] = inst_17255__$1);

return statearr_17299;
})();
if(cljs.core.truth_(inst_17255__$1)){
var statearr_17300_17341 = state_17281__$1;
(statearr_17300_17341[(1)] = (17));

} else {
var statearr_17301_17342 = state_17281__$1;
(statearr_17301_17342[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (2))){
var inst_17215 = (state_17281[(9)]);
var inst_17218 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17215);
var state_17281__$1 = state_17281;
var statearr_17302_17343 = state_17281__$1;
(statearr_17302_17343[(2)] = inst_17218);

(statearr_17302_17343[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (23))){
var inst_17266 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
if(cljs.core.truth_(inst_17266)){
var statearr_17303_17344 = state_17281__$1;
(statearr_17303_17344[(1)] = (24));

} else {
var statearr_17304_17345 = state_17281__$1;
(statearr_17304_17345[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (19))){
var inst_17263 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
if(cljs.core.truth_(inst_17263)){
var statearr_17305_17346 = state_17281__$1;
(statearr_17305_17346[(1)] = (20));

} else {
var statearr_17306_17347 = state_17281__$1;
(statearr_17306_17347[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (11))){
var inst_17240 = (state_17281[(8)]);
var inst_17246 = (inst_17240 == null);
var state_17281__$1 = state_17281;
if(cljs.core.truth_(inst_17246)){
var statearr_17307_17348 = state_17281__$1;
(statearr_17307_17348[(1)] = (14));

} else {
var statearr_17308_17349 = state_17281__$1;
(statearr_17308_17349[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (9))){
var inst_17233 = (state_17281[(10)]);
var inst_17233__$1 = (state_17281[(2)]);
var inst_17234 = cljs.core.get.call(null,inst_17233__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17235 = cljs.core.get.call(null,inst_17233__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17236 = cljs.core.get.call(null,inst_17233__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_17281__$1 = (function (){var statearr_17309 = state_17281;
(statearr_17309[(17)] = inst_17235);

(statearr_17309[(10)] = inst_17233__$1);

(statearr_17309[(16)] = inst_17236);

return statearr_17309;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_17281__$1,(10),inst_17234);
} else {
if((state_val_17282 === (5))){
var inst_17225 = (state_17281[(7)]);
var inst_17228 = cljs.core.seq_QMARK_.call(null,inst_17225);
var state_17281__$1 = state_17281;
if(inst_17228){
var statearr_17310_17350 = state_17281__$1;
(statearr_17310_17350[(1)] = (7));

} else {
var statearr_17311_17351 = state_17281__$1;
(statearr_17311_17351[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (14))){
var inst_17241 = (state_17281[(15)]);
var inst_17248 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17241);
var state_17281__$1 = state_17281;
var statearr_17312_17352 = state_17281__$1;
(statearr_17312_17352[(2)] = inst_17248);

(statearr_17312_17352[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (26))){
var inst_17271 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
var statearr_17313_17353 = state_17281__$1;
(statearr_17313_17353[(2)] = inst_17271);

(statearr_17313_17353[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (16))){
var inst_17251 = (state_17281[(2)]);
var inst_17252 = calc_state.call(null);
var inst_17225 = inst_17252;
var state_17281__$1 = (function (){var statearr_17314 = state_17281;
(statearr_17314[(7)] = inst_17225);

(statearr_17314[(18)] = inst_17251);

return statearr_17314;
})();
var statearr_17315_17354 = state_17281__$1;
(statearr_17315_17354[(2)] = null);

(statearr_17315_17354[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (10))){
var inst_17240 = (state_17281[(8)]);
var inst_17241 = (state_17281[(15)]);
var inst_17239 = (state_17281[(2)]);
var inst_17240__$1 = cljs.core.nth.call(null,inst_17239,(0),null);
var inst_17241__$1 = cljs.core.nth.call(null,inst_17239,(1),null);
var inst_17242 = (inst_17240__$1 == null);
var inst_17243 = cljs.core._EQ_.call(null,inst_17241__$1,change);
var inst_17244 = (inst_17242) || (inst_17243);
var state_17281__$1 = (function (){var statearr_17316 = state_17281;
(statearr_17316[(8)] = inst_17240__$1);

(statearr_17316[(15)] = inst_17241__$1);

return statearr_17316;
})();
if(cljs.core.truth_(inst_17244)){
var statearr_17317_17355 = state_17281__$1;
(statearr_17317_17355[(1)] = (11));

} else {
var statearr_17318_17356 = state_17281__$1;
(statearr_17318_17356[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (18))){
var inst_17235 = (state_17281[(17)]);
var inst_17241 = (state_17281[(15)]);
var inst_17236 = (state_17281[(16)]);
var inst_17258 = cljs.core.empty_QMARK_.call(null,inst_17236);
var inst_17259 = inst_17235.call(null,inst_17241);
var inst_17260 = cljs.core.not.call(null,inst_17259);
var inst_17261 = (inst_17258) && (inst_17260);
var state_17281__$1 = state_17281;
var statearr_17319_17357 = state_17281__$1;
(statearr_17319_17357[(2)] = inst_17261);

(statearr_17319_17357[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17282 === (8))){
var inst_17225 = (state_17281[(7)]);
var state_17281__$1 = state_17281;
var statearr_17320_17358 = state_17281__$1;
(statearr_17320_17358[(2)] = inst_17225);

(statearr_17320_17358[(1)] = (9));


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
});})(c__6200__auto___17328,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6144__auto__,c__6200__auto___17328,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_17324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17324[(0)] = state_machine__6145__auto__);

(statearr_17324[(1)] = (1));

return statearr_17324;
});
var state_machine__6145__auto____1 = (function (state_17281){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_17281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e17325){if((e17325 instanceof Object)){
var ex__6148__auto__ = e17325;
var statearr_17326_17359 = state_17281;
(statearr_17326_17359[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17360 = state_17281;
state_17281 = G__17360;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_17281){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_17281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___17328,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6202__auto__ = (function (){var statearr_17327 = f__6201__auto__.call(null);
(statearr_17327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___17328);

return statearr_17327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___17328,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj17362 = {};
return obj17362;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3240__auto__ = p;
if(and__3240__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3240__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__3896__auto__ = (((p == null))?null:p);
return (function (){var or__3252__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3240__auto__ = p;
if(and__3240__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3240__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__3896__auto__ = (((p == null))?null:p);
return (function (){var or__3252__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
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
if((function (){var and__3240__auto__ = p;
if(and__3240__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3240__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__3896__auto__ = (((p == null))?null:p);
return (function (){var or__3252__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3240__auto__ = p;
if(and__3240__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3240__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__3896__auto__ = (((p == null))?null:p);
return (function (){var or__3252__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
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
var or__3252__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3252__auto__)){
return or__3252__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3252__auto__,mults){
return (function (p1__17363_SHARP_){
if(cljs.core.truth_(p1__17363_SHARP_.call(null,topic))){
return p1__17363_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17363_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3252__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t17486 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17486 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17487){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17487 = meta17487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17486.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t17486.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t17486.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t17486.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t17486.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t17486.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17486.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t17486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17488){
var self__ = this;
var _17488__$1 = this;
return self__.meta17487;
});})(mults,ensure_mult))
;

cljs.core.async.t17486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17488,meta17487__$1){
var self__ = this;
var _17488__$1 = this;
return (new cljs.core.async.t17486(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17487__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t17486.cljs$lang$type = true;

cljs.core.async.t17486.cljs$lang$ctorStr = "cljs.core.async/t17486";

cljs.core.async.t17486.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t17486");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t17486 = ((function (mults,ensure_mult){
return (function __GT_t17486(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17487){
return (new cljs.core.async.t17486(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17487));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t17486(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__6200__auto___17608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___17608,mults,ensure_mult,p){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___17608,mults,ensure_mult,p){
return (function (state_17560){
var state_val_17561 = (state_17560[(1)]);
if((state_val_17561 === (7))){
var inst_17556 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
var statearr_17562_17609 = state_17560__$1;
(statearr_17562_17609[(2)] = inst_17556);

(statearr_17562_17609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (20))){
var state_17560__$1 = state_17560;
var statearr_17563_17610 = state_17560__$1;
(statearr_17563_17610[(2)] = null);

(statearr_17563_17610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (1))){
var state_17560__$1 = state_17560;
var statearr_17564_17611 = state_17560__$1;
(statearr_17564_17611[(2)] = null);

(statearr_17564_17611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (24))){
var inst_17539 = (state_17560[(7)]);
var inst_17548 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17539);
var state_17560__$1 = state_17560;
var statearr_17565_17612 = state_17560__$1;
(statearr_17565_17612[(2)] = inst_17548);

(statearr_17565_17612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (4))){
var inst_17491 = (state_17560[(8)]);
var inst_17491__$1 = (state_17560[(2)]);
var inst_17492 = (inst_17491__$1 == null);
var state_17560__$1 = (function (){var statearr_17566 = state_17560;
(statearr_17566[(8)] = inst_17491__$1);

return statearr_17566;
})();
if(cljs.core.truth_(inst_17492)){
var statearr_17567_17613 = state_17560__$1;
(statearr_17567_17613[(1)] = (5));

} else {
var statearr_17568_17614 = state_17560__$1;
(statearr_17568_17614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (15))){
var inst_17533 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
var statearr_17569_17615 = state_17560__$1;
(statearr_17569_17615[(2)] = inst_17533);

(statearr_17569_17615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (21))){
var inst_17553 = (state_17560[(2)]);
var state_17560__$1 = (function (){var statearr_17570 = state_17560;
(statearr_17570[(9)] = inst_17553);

return statearr_17570;
})();
var statearr_17571_17616 = state_17560__$1;
(statearr_17571_17616[(2)] = null);

(statearr_17571_17616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (13))){
var inst_17515 = (state_17560[(10)]);
var inst_17517 = cljs.core.chunked_seq_QMARK_.call(null,inst_17515);
var state_17560__$1 = state_17560;
if(inst_17517){
var statearr_17572_17617 = state_17560__$1;
(statearr_17572_17617[(1)] = (16));

} else {
var statearr_17573_17618 = state_17560__$1;
(statearr_17573_17618[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (22))){
var inst_17545 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
if(cljs.core.truth_(inst_17545)){
var statearr_17574_17619 = state_17560__$1;
(statearr_17574_17619[(1)] = (23));

} else {
var statearr_17575_17620 = state_17560__$1;
(statearr_17575_17620[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (6))){
var inst_17539 = (state_17560[(7)]);
var inst_17491 = (state_17560[(8)]);
var inst_17541 = (state_17560[(11)]);
var inst_17539__$1 = topic_fn.call(null,inst_17491);
var inst_17540 = cljs.core.deref.call(null,mults);
var inst_17541__$1 = cljs.core.get.call(null,inst_17540,inst_17539__$1);
var state_17560__$1 = (function (){var statearr_17576 = state_17560;
(statearr_17576[(7)] = inst_17539__$1);

(statearr_17576[(11)] = inst_17541__$1);

return statearr_17576;
})();
if(cljs.core.truth_(inst_17541__$1)){
var statearr_17577_17621 = state_17560__$1;
(statearr_17577_17621[(1)] = (19));

} else {
var statearr_17578_17622 = state_17560__$1;
(statearr_17578_17622[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (25))){
var inst_17550 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
var statearr_17579_17623 = state_17560__$1;
(statearr_17579_17623[(2)] = inst_17550);

(statearr_17579_17623[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (17))){
var inst_17515 = (state_17560[(10)]);
var inst_17524 = cljs.core.first.call(null,inst_17515);
var inst_17525 = cljs.core.async.muxch_STAR_.call(null,inst_17524);
var inst_17526 = cljs.core.async.close_BANG_.call(null,inst_17525);
var inst_17527 = cljs.core.next.call(null,inst_17515);
var inst_17501 = inst_17527;
var inst_17502 = null;
var inst_17503 = (0);
var inst_17504 = (0);
var state_17560__$1 = (function (){var statearr_17580 = state_17560;
(statearr_17580[(12)] = inst_17501);

(statearr_17580[(13)] = inst_17504);

(statearr_17580[(14)] = inst_17503);

(statearr_17580[(15)] = inst_17502);

(statearr_17580[(16)] = inst_17526);

return statearr_17580;
})();
var statearr_17581_17624 = state_17560__$1;
(statearr_17581_17624[(2)] = null);

(statearr_17581_17624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (3))){
var inst_17558 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17560__$1,inst_17558);
} else {
if((state_val_17561 === (12))){
var inst_17535 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
var statearr_17582_17625 = state_17560__$1;
(statearr_17582_17625[(2)] = inst_17535);

(statearr_17582_17625[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (2))){
var state_17560__$1 = state_17560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17560__$1,(4),ch);
} else {
if((state_val_17561 === (23))){
var state_17560__$1 = state_17560;
var statearr_17583_17626 = state_17560__$1;
(statearr_17583_17626[(2)] = null);

(statearr_17583_17626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (19))){
var inst_17491 = (state_17560[(8)]);
var inst_17541 = (state_17560[(11)]);
var inst_17543 = cljs.core.async.muxch_STAR_.call(null,inst_17541);
var state_17560__$1 = state_17560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17560__$1,(22),inst_17543,inst_17491);
} else {
if((state_val_17561 === (11))){
var inst_17515 = (state_17560[(10)]);
var inst_17501 = (state_17560[(12)]);
var inst_17515__$1 = cljs.core.seq.call(null,inst_17501);
var state_17560__$1 = (function (){var statearr_17584 = state_17560;
(statearr_17584[(10)] = inst_17515__$1);

return statearr_17584;
})();
if(inst_17515__$1){
var statearr_17585_17627 = state_17560__$1;
(statearr_17585_17627[(1)] = (13));

} else {
var statearr_17586_17628 = state_17560__$1;
(statearr_17586_17628[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (9))){
var inst_17537 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
var statearr_17587_17629 = state_17560__$1;
(statearr_17587_17629[(2)] = inst_17537);

(statearr_17587_17629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (5))){
var inst_17498 = cljs.core.deref.call(null,mults);
var inst_17499 = cljs.core.vals.call(null,inst_17498);
var inst_17500 = cljs.core.seq.call(null,inst_17499);
var inst_17501 = inst_17500;
var inst_17502 = null;
var inst_17503 = (0);
var inst_17504 = (0);
var state_17560__$1 = (function (){var statearr_17588 = state_17560;
(statearr_17588[(12)] = inst_17501);

(statearr_17588[(13)] = inst_17504);

(statearr_17588[(14)] = inst_17503);

(statearr_17588[(15)] = inst_17502);

return statearr_17588;
})();
var statearr_17589_17630 = state_17560__$1;
(statearr_17589_17630[(2)] = null);

(statearr_17589_17630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (14))){
var state_17560__$1 = state_17560;
var statearr_17593_17631 = state_17560__$1;
(statearr_17593_17631[(2)] = null);

(statearr_17593_17631[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (16))){
var inst_17515 = (state_17560[(10)]);
var inst_17519 = cljs.core.chunk_first.call(null,inst_17515);
var inst_17520 = cljs.core.chunk_rest.call(null,inst_17515);
var inst_17521 = cljs.core.count.call(null,inst_17519);
var inst_17501 = inst_17520;
var inst_17502 = inst_17519;
var inst_17503 = inst_17521;
var inst_17504 = (0);
var state_17560__$1 = (function (){var statearr_17594 = state_17560;
(statearr_17594[(12)] = inst_17501);

(statearr_17594[(13)] = inst_17504);

(statearr_17594[(14)] = inst_17503);

(statearr_17594[(15)] = inst_17502);

return statearr_17594;
})();
var statearr_17595_17632 = state_17560__$1;
(statearr_17595_17632[(2)] = null);

(statearr_17595_17632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (10))){
var inst_17501 = (state_17560[(12)]);
var inst_17504 = (state_17560[(13)]);
var inst_17503 = (state_17560[(14)]);
var inst_17502 = (state_17560[(15)]);
var inst_17509 = cljs.core._nth.call(null,inst_17502,inst_17504);
var inst_17510 = cljs.core.async.muxch_STAR_.call(null,inst_17509);
var inst_17511 = cljs.core.async.close_BANG_.call(null,inst_17510);
var inst_17512 = (inst_17504 + (1));
var tmp17590 = inst_17501;
var tmp17591 = inst_17503;
var tmp17592 = inst_17502;
var inst_17501__$1 = tmp17590;
var inst_17502__$1 = tmp17592;
var inst_17503__$1 = tmp17591;
var inst_17504__$1 = inst_17512;
var state_17560__$1 = (function (){var statearr_17596 = state_17560;
(statearr_17596[(17)] = inst_17511);

(statearr_17596[(12)] = inst_17501__$1);

(statearr_17596[(13)] = inst_17504__$1);

(statearr_17596[(14)] = inst_17503__$1);

(statearr_17596[(15)] = inst_17502__$1);

return statearr_17596;
})();
var statearr_17597_17633 = state_17560__$1;
(statearr_17597_17633[(2)] = null);

(statearr_17597_17633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (18))){
var inst_17530 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
var statearr_17598_17634 = state_17560__$1;
(statearr_17598_17634[(2)] = inst_17530);

(statearr_17598_17634[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (8))){
var inst_17504 = (state_17560[(13)]);
var inst_17503 = (state_17560[(14)]);
var inst_17506 = (inst_17504 < inst_17503);
var inst_17507 = inst_17506;
var state_17560__$1 = state_17560;
if(cljs.core.truth_(inst_17507)){
var statearr_17599_17635 = state_17560__$1;
(statearr_17599_17635[(1)] = (10));

} else {
var statearr_17600_17636 = state_17560__$1;
(statearr_17600_17636[(1)] = (11));

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
});})(c__6200__auto___17608,mults,ensure_mult,p))
;
return ((function (switch__6144__auto__,c__6200__auto___17608,mults,ensure_mult,p){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_17604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17604[(0)] = state_machine__6145__auto__);

(statearr_17604[(1)] = (1));

return statearr_17604;
});
var state_machine__6145__auto____1 = (function (state_17560){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_17560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e17605){if((e17605 instanceof Object)){
var ex__6148__auto__ = e17605;
var statearr_17606_17637 = state_17560;
(statearr_17606_17637[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17638 = state_17560;
state_17560 = G__17638;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_17560){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_17560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___17608,mults,ensure_mult,p))
})();
var state__6202__auto__ = (function (){var statearr_17607 = f__6201__auto__.call(null);
(statearr_17607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___17608);

return statearr_17607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___17608,mults,ensure_mult,p))
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
var c__6200__auto___17775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___17775,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___17775,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17745){
var state_val_17746 = (state_17745[(1)]);
if((state_val_17746 === (7))){
var state_17745__$1 = state_17745;
var statearr_17747_17776 = state_17745__$1;
(statearr_17747_17776[(2)] = null);

(statearr_17747_17776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17746 === (1))){
var state_17745__$1 = state_17745;
var statearr_17748_17777 = state_17745__$1;
(statearr_17748_17777[(2)] = null);

(statearr_17748_17777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17746 === (4))){
var inst_17709 = (state_17745[(7)]);
var inst_17711 = (inst_17709 < cnt);
var state_17745__$1 = state_17745;
if(cljs.core.truth_(inst_17711)){
var statearr_17749_17778 = state_17745__$1;
(statearr_17749_17778[(1)] = (6));

} else {
var statearr_17750_17779 = state_17745__$1;
(statearr_17750_17779[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17746 === (15))){
var inst_17741 = (state_17745[(2)]);
var state_17745__$1 = state_17745;
var statearr_17751_17780 = state_17745__$1;
(statearr_17751_17780[(2)] = inst_17741);

(statearr_17751_17780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17746 === (13))){
var inst_17734 = cljs.core.async.close_BANG_.call(null,out);
var state_17745__$1 = state_17745;
var statearr_17752_17781 = state_17745__$1;
(statearr_17752_17781[(2)] = inst_17734);

(statearr_17752_17781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17746 === (6))){
var state_17745__$1 = state_17745;
var statearr_17753_17782 = state_17745__$1;
(statearr_17753_17782[(2)] = null);

(statearr_17753_17782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17746 === (3))){
var inst_17743 = (state_17745[(2)]);
var state_17745__$1 = state_17745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17745__$1,inst_17743);
} else {
if((state_val_17746 === (12))){
var inst_17731 = (state_17745[(8)]);
var inst_17731__$1 = (state_17745[(2)]);
var inst_17732 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17731__$1);
var state_17745__$1 = (function (){var statearr_17754 = state_17745;
(statearr_17754[(8)] = inst_17731__$1);

return statearr_17754;
})();
if(cljs.core.truth_(inst_17732)){
var statearr_17755_17783 = state_17745__$1;
(statearr_17755_17783[(1)] = (13));

} else {
var statearr_17756_17784 = state_17745__$1;
(statearr_17756_17784[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17746 === (2))){
var inst_17708 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17709 = (0);
var state_17745__$1 = (function (){var statearr_17757 = state_17745;
(statearr_17757[(9)] = inst_17708);

(statearr_17757[(7)] = inst_17709);

return statearr_17757;
})();
var statearr_17758_17785 = state_17745__$1;
(statearr_17758_17785[(2)] = null);

(statearr_17758_17785[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17746 === (11))){
var inst_17709 = (state_17745[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17745,(10),Object,null,(9));
var inst_17718 = chs__$1.call(null,inst_17709);
var inst_17719 = done.call(null,inst_17709);
var inst_17720 = cljs.core.async.take_BANG_.call(null,inst_17718,inst_17719);
var state_17745__$1 = state_17745;
var statearr_17759_17786 = state_17745__$1;
(statearr_17759_17786[(2)] = inst_17720);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17745__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17746 === (9))){
var inst_17709 = (state_17745[(7)]);
var inst_17722 = (state_17745[(2)]);
var inst_17723 = (inst_17709 + (1));
var inst_17709__$1 = inst_17723;
var state_17745__$1 = (function (){var statearr_17760 = state_17745;
(statearr_17760[(10)] = inst_17722);

(statearr_17760[(7)] = inst_17709__$1);

return statearr_17760;
})();
var statearr_17761_17787 = state_17745__$1;
(statearr_17761_17787[(2)] = null);

(statearr_17761_17787[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17746 === (5))){
var inst_17729 = (state_17745[(2)]);
var state_17745__$1 = (function (){var statearr_17762 = state_17745;
(statearr_17762[(11)] = inst_17729);

return statearr_17762;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17745__$1,(12),dchan);
} else {
if((state_val_17746 === (14))){
var inst_17731 = (state_17745[(8)]);
var inst_17736 = cljs.core.apply.call(null,f,inst_17731);
var state_17745__$1 = state_17745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17745__$1,(16),out,inst_17736);
} else {
if((state_val_17746 === (16))){
var inst_17738 = (state_17745[(2)]);
var state_17745__$1 = (function (){var statearr_17763 = state_17745;
(statearr_17763[(12)] = inst_17738);

return statearr_17763;
})();
var statearr_17764_17788 = state_17745__$1;
(statearr_17764_17788[(2)] = null);

(statearr_17764_17788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17746 === (10))){
var inst_17713 = (state_17745[(2)]);
var inst_17714 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17745__$1 = (function (){var statearr_17765 = state_17745;
(statearr_17765[(13)] = inst_17713);

return statearr_17765;
})();
var statearr_17766_17789 = state_17745__$1;
(statearr_17766_17789[(2)] = inst_17714);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17745__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17746 === (8))){
var inst_17727 = (state_17745[(2)]);
var state_17745__$1 = state_17745;
var statearr_17767_17790 = state_17745__$1;
(statearr_17767_17790[(2)] = inst_17727);

(statearr_17767_17790[(1)] = (5));


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
});})(c__6200__auto___17775,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6144__auto__,c__6200__auto___17775,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_17771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17771[(0)] = state_machine__6145__auto__);

(statearr_17771[(1)] = (1));

return statearr_17771;
});
var state_machine__6145__auto____1 = (function (state_17745){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_17745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e17772){if((e17772 instanceof Object)){
var ex__6148__auto__ = e17772;
var statearr_17773_17791 = state_17745;
(statearr_17773_17791[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17792 = state_17745;
state_17745 = G__17792;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_17745){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_17745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___17775,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6202__auto__ = (function (){var statearr_17774 = f__6201__auto__.call(null);
(statearr_17774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___17775);

return statearr_17774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___17775,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6200__auto___17900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___17900,out){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___17900,out){
return (function (state_17876){
var state_val_17877 = (state_17876[(1)]);
if((state_val_17877 === (7))){
var inst_17856 = (state_17876[(7)]);
var inst_17855 = (state_17876[(8)]);
var inst_17855__$1 = (state_17876[(2)]);
var inst_17856__$1 = cljs.core.nth.call(null,inst_17855__$1,(0),null);
var inst_17857 = cljs.core.nth.call(null,inst_17855__$1,(1),null);
var inst_17858 = (inst_17856__$1 == null);
var state_17876__$1 = (function (){var statearr_17878 = state_17876;
(statearr_17878[(7)] = inst_17856__$1);

(statearr_17878[(8)] = inst_17855__$1);

(statearr_17878[(9)] = inst_17857);

return statearr_17878;
})();
if(cljs.core.truth_(inst_17858)){
var statearr_17879_17901 = state_17876__$1;
(statearr_17879_17901[(1)] = (8));

} else {
var statearr_17880_17902 = state_17876__$1;
(statearr_17880_17902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17877 === (1))){
var inst_17847 = cljs.core.vec.call(null,chs);
var inst_17848 = inst_17847;
var state_17876__$1 = (function (){var statearr_17881 = state_17876;
(statearr_17881[(10)] = inst_17848);

return statearr_17881;
})();
var statearr_17882_17903 = state_17876__$1;
(statearr_17882_17903[(2)] = null);

(statearr_17882_17903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17877 === (4))){
var inst_17848 = (state_17876[(10)]);
var state_17876__$1 = state_17876;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17876__$1,(7),inst_17848);
} else {
if((state_val_17877 === (6))){
var inst_17872 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
var statearr_17883_17904 = state_17876__$1;
(statearr_17883_17904[(2)] = inst_17872);

(statearr_17883_17904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17877 === (3))){
var inst_17874 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17876__$1,inst_17874);
} else {
if((state_val_17877 === (2))){
var inst_17848 = (state_17876[(10)]);
var inst_17850 = cljs.core.count.call(null,inst_17848);
var inst_17851 = (inst_17850 > (0));
var state_17876__$1 = state_17876;
if(cljs.core.truth_(inst_17851)){
var statearr_17885_17905 = state_17876__$1;
(statearr_17885_17905[(1)] = (4));

} else {
var statearr_17886_17906 = state_17876__$1;
(statearr_17886_17906[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17877 === (11))){
var inst_17848 = (state_17876[(10)]);
var inst_17865 = (state_17876[(2)]);
var tmp17884 = inst_17848;
var inst_17848__$1 = tmp17884;
var state_17876__$1 = (function (){var statearr_17887 = state_17876;
(statearr_17887[(10)] = inst_17848__$1);

(statearr_17887[(11)] = inst_17865);

return statearr_17887;
})();
var statearr_17888_17907 = state_17876__$1;
(statearr_17888_17907[(2)] = null);

(statearr_17888_17907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17877 === (9))){
var inst_17856 = (state_17876[(7)]);
var state_17876__$1 = state_17876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17876__$1,(11),out,inst_17856);
} else {
if((state_val_17877 === (5))){
var inst_17870 = cljs.core.async.close_BANG_.call(null,out);
var state_17876__$1 = state_17876;
var statearr_17889_17908 = state_17876__$1;
(statearr_17889_17908[(2)] = inst_17870);

(statearr_17889_17908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17877 === (10))){
var inst_17868 = (state_17876[(2)]);
var state_17876__$1 = state_17876;
var statearr_17890_17909 = state_17876__$1;
(statearr_17890_17909[(2)] = inst_17868);

(statearr_17890_17909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17877 === (8))){
var inst_17856 = (state_17876[(7)]);
var inst_17855 = (state_17876[(8)]);
var inst_17848 = (state_17876[(10)]);
var inst_17857 = (state_17876[(9)]);
var inst_17860 = (function (){var c = inst_17857;
var v = inst_17856;
var vec__17853 = inst_17855;
var cs = inst_17848;
return ((function (c,v,vec__17853,cs,inst_17856,inst_17855,inst_17848,inst_17857,state_val_17877,c__6200__auto___17900,out){
return (function (p1__17793_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17793_SHARP_);
});
;})(c,v,vec__17853,cs,inst_17856,inst_17855,inst_17848,inst_17857,state_val_17877,c__6200__auto___17900,out))
})();
var inst_17861 = cljs.core.filterv.call(null,inst_17860,inst_17848);
var inst_17848__$1 = inst_17861;
var state_17876__$1 = (function (){var statearr_17891 = state_17876;
(statearr_17891[(10)] = inst_17848__$1);

return statearr_17891;
})();
var statearr_17892_17910 = state_17876__$1;
(statearr_17892_17910[(2)] = null);

(statearr_17892_17910[(1)] = (2));


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
});})(c__6200__auto___17900,out))
;
return ((function (switch__6144__auto__,c__6200__auto___17900,out){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_17896 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17896[(0)] = state_machine__6145__auto__);

(statearr_17896[(1)] = (1));

return statearr_17896;
});
var state_machine__6145__auto____1 = (function (state_17876){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_17876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e17897){if((e17897 instanceof Object)){
var ex__6148__auto__ = e17897;
var statearr_17898_17911 = state_17876;
(statearr_17898_17911[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17912 = state_17876;
state_17876 = G__17912;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_17876){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_17876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___17900,out))
})();
var state__6202__auto__ = (function (){var statearr_17899 = f__6201__auto__.call(null);
(statearr_17899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___17900);

return statearr_17899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___17900,out))
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
var c__6200__auto___18005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___18005,out){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___18005,out){
return (function (state_17982){
var state_val_17983 = (state_17982[(1)]);
if((state_val_17983 === (7))){
var inst_17964 = (state_17982[(7)]);
var inst_17964__$1 = (state_17982[(2)]);
var inst_17965 = (inst_17964__$1 == null);
var inst_17966 = cljs.core.not.call(null,inst_17965);
var state_17982__$1 = (function (){var statearr_17984 = state_17982;
(statearr_17984[(7)] = inst_17964__$1);

return statearr_17984;
})();
if(inst_17966){
var statearr_17985_18006 = state_17982__$1;
(statearr_17985_18006[(1)] = (8));

} else {
var statearr_17986_18007 = state_17982__$1;
(statearr_17986_18007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17983 === (1))){
var inst_17959 = (0);
var state_17982__$1 = (function (){var statearr_17987 = state_17982;
(statearr_17987[(8)] = inst_17959);

return statearr_17987;
})();
var statearr_17988_18008 = state_17982__$1;
(statearr_17988_18008[(2)] = null);

(statearr_17988_18008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17983 === (4))){
var state_17982__$1 = state_17982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17982__$1,(7),ch);
} else {
if((state_val_17983 === (6))){
var inst_17977 = (state_17982[(2)]);
var state_17982__$1 = state_17982;
var statearr_17989_18009 = state_17982__$1;
(statearr_17989_18009[(2)] = inst_17977);

(statearr_17989_18009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17983 === (3))){
var inst_17979 = (state_17982[(2)]);
var inst_17980 = cljs.core.async.close_BANG_.call(null,out);
var state_17982__$1 = (function (){var statearr_17990 = state_17982;
(statearr_17990[(9)] = inst_17979);

return statearr_17990;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17982__$1,inst_17980);
} else {
if((state_val_17983 === (2))){
var inst_17959 = (state_17982[(8)]);
var inst_17961 = (inst_17959 < n);
var state_17982__$1 = state_17982;
if(cljs.core.truth_(inst_17961)){
var statearr_17991_18010 = state_17982__$1;
(statearr_17991_18010[(1)] = (4));

} else {
var statearr_17992_18011 = state_17982__$1;
(statearr_17992_18011[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17983 === (11))){
var inst_17959 = (state_17982[(8)]);
var inst_17969 = (state_17982[(2)]);
var inst_17970 = (inst_17959 + (1));
var inst_17959__$1 = inst_17970;
var state_17982__$1 = (function (){var statearr_17993 = state_17982;
(statearr_17993[(8)] = inst_17959__$1);

(statearr_17993[(10)] = inst_17969);

return statearr_17993;
})();
var statearr_17994_18012 = state_17982__$1;
(statearr_17994_18012[(2)] = null);

(statearr_17994_18012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17983 === (9))){
var state_17982__$1 = state_17982;
var statearr_17995_18013 = state_17982__$1;
(statearr_17995_18013[(2)] = null);

(statearr_17995_18013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17983 === (5))){
var state_17982__$1 = state_17982;
var statearr_17996_18014 = state_17982__$1;
(statearr_17996_18014[(2)] = null);

(statearr_17996_18014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17983 === (10))){
var inst_17974 = (state_17982[(2)]);
var state_17982__$1 = state_17982;
var statearr_17997_18015 = state_17982__$1;
(statearr_17997_18015[(2)] = inst_17974);

(statearr_17997_18015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17983 === (8))){
var inst_17964 = (state_17982[(7)]);
var state_17982__$1 = state_17982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17982__$1,(11),out,inst_17964);
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
});})(c__6200__auto___18005,out))
;
return ((function (switch__6144__auto__,c__6200__auto___18005,out){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_18001 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18001[(0)] = state_machine__6145__auto__);

(statearr_18001[(1)] = (1));

return statearr_18001;
});
var state_machine__6145__auto____1 = (function (state_17982){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_17982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e18002){if((e18002 instanceof Object)){
var ex__6148__auto__ = e18002;
var statearr_18003_18016 = state_17982;
(statearr_18003_18016[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18017 = state_17982;
state_17982 = G__18017;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_17982){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_17982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___18005,out))
})();
var state__6202__auto__ = (function (){var statearr_18004 = f__6201__auto__.call(null);
(statearr_18004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___18005);

return statearr_18004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___18005,out))
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
if(typeof cljs.core.async.t18025 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18025 = (function (ch,f,map_LT_,meta18026){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18026 = meta18026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18025.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18025.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t18025.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18025.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t18028 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18028 = (function (fn1,_,meta18026,map_LT_,f,ch,meta18029){
this.fn1 = fn1;
this._ = _;
this.meta18026 = meta18026;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18029 = meta18029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18028.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t18028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18018_SHARP_){
return f1.call(null,(((p1__18018_SHARP_ == null))?null:self__.f.call(null,p1__18018_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t18028.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18030){
var self__ = this;
var _18030__$1 = this;
return self__.meta18029;
});})(___$1))
;

cljs.core.async.t18028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18030,meta18029__$1){
var self__ = this;
var _18030__$1 = this;
return (new cljs.core.async.t18028(self__.fn1,self__._,self__.meta18026,self__.map_LT_,self__.f,self__.ch,meta18029__$1));
});})(___$1))
;

cljs.core.async.t18028.cljs$lang$type = true;

cljs.core.async.t18028.cljs$lang$ctorStr = "cljs.core.async/t18028";

cljs.core.async.t18028.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t18028");
});})(___$1))
;

cljs.core.async.__GT_t18028 = ((function (___$1){
return (function __GT_t18028(fn1__$1,___$2,meta18026__$1,map_LT___$1,f__$1,ch__$1,meta18029){
return (new cljs.core.async.t18028(fn1__$1,___$2,meta18026__$1,map_LT___$1,f__$1,ch__$1,meta18029));
});})(___$1))
;

}

return (new cljs.core.async.t18028(fn1,___$1,self__.meta18026,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3240__auto__ = ret;
if(cljs.core.truth_(and__3240__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3240__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t18025.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18025.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18025.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t18025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18027){
var self__ = this;
var _18027__$1 = this;
return self__.meta18026;
});

cljs.core.async.t18025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18027,meta18026__$1){
var self__ = this;
var _18027__$1 = this;
return (new cljs.core.async.t18025(self__.ch,self__.f,self__.map_LT_,meta18026__$1));
});

cljs.core.async.t18025.cljs$lang$type = true;

cljs.core.async.t18025.cljs$lang$ctorStr = "cljs.core.async/t18025";

cljs.core.async.t18025.cljs$lang$ctorPrWriter = (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t18025");
});

cljs.core.async.__GT_t18025 = (function __GT_t18025(ch__$1,f__$1,map_LT___$1,meta18026){
return (new cljs.core.async.t18025(ch__$1,f__$1,map_LT___$1,meta18026));
});

}

return (new cljs.core.async.t18025(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t18034 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18034 = (function (ch,f,map_GT_,meta18035){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta18035 = meta18035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18034.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18034.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t18034.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18034.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t18034.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18034.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18036){
var self__ = this;
var _18036__$1 = this;
return self__.meta18035;
});

cljs.core.async.t18034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18036,meta18035__$1){
var self__ = this;
var _18036__$1 = this;
return (new cljs.core.async.t18034(self__.ch,self__.f,self__.map_GT_,meta18035__$1));
});

cljs.core.async.t18034.cljs$lang$type = true;

cljs.core.async.t18034.cljs$lang$ctorStr = "cljs.core.async/t18034";

cljs.core.async.t18034.cljs$lang$ctorPrWriter = (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t18034");
});

cljs.core.async.__GT_t18034 = (function __GT_t18034(ch__$1,f__$1,map_GT___$1,meta18035){
return (new cljs.core.async.t18034(ch__$1,f__$1,map_GT___$1,meta18035));
});

}

return (new cljs.core.async.t18034(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t18040 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18040 = (function (ch,p,filter_GT_,meta18041){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta18041 = meta18041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18040.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18040.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t18040.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18040.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t18040.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18040.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18040.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t18040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18042){
var self__ = this;
var _18042__$1 = this;
return self__.meta18041;
});

cljs.core.async.t18040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18042,meta18041__$1){
var self__ = this;
var _18042__$1 = this;
return (new cljs.core.async.t18040(self__.ch,self__.p,self__.filter_GT_,meta18041__$1));
});

cljs.core.async.t18040.cljs$lang$type = true;

cljs.core.async.t18040.cljs$lang$ctorStr = "cljs.core.async/t18040";

cljs.core.async.t18040.cljs$lang$ctorPrWriter = (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t18040");
});

cljs.core.async.__GT_t18040 = (function __GT_t18040(ch__$1,p__$1,filter_GT___$1,meta18041){
return (new cljs.core.async.t18040(ch__$1,p__$1,filter_GT___$1,meta18041));
});

}

return (new cljs.core.async.t18040(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__6200__auto___18125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___18125,out){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___18125,out){
return (function (state_18104){
var state_val_18105 = (state_18104[(1)]);
if((state_val_18105 === (7))){
var inst_18100 = (state_18104[(2)]);
var state_18104__$1 = state_18104;
var statearr_18106_18126 = state_18104__$1;
(statearr_18106_18126[(2)] = inst_18100);

(statearr_18106_18126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18105 === (1))){
var state_18104__$1 = state_18104;
var statearr_18107_18127 = state_18104__$1;
(statearr_18107_18127[(2)] = null);

(statearr_18107_18127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18105 === (4))){
var inst_18086 = (state_18104[(7)]);
var inst_18086__$1 = (state_18104[(2)]);
var inst_18087 = (inst_18086__$1 == null);
var state_18104__$1 = (function (){var statearr_18108 = state_18104;
(statearr_18108[(7)] = inst_18086__$1);

return statearr_18108;
})();
if(cljs.core.truth_(inst_18087)){
var statearr_18109_18128 = state_18104__$1;
(statearr_18109_18128[(1)] = (5));

} else {
var statearr_18110_18129 = state_18104__$1;
(statearr_18110_18129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18105 === (6))){
var inst_18086 = (state_18104[(7)]);
var inst_18091 = p.call(null,inst_18086);
var state_18104__$1 = state_18104;
if(cljs.core.truth_(inst_18091)){
var statearr_18111_18130 = state_18104__$1;
(statearr_18111_18130[(1)] = (8));

} else {
var statearr_18112_18131 = state_18104__$1;
(statearr_18112_18131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18105 === (3))){
var inst_18102 = (state_18104[(2)]);
var state_18104__$1 = state_18104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18104__$1,inst_18102);
} else {
if((state_val_18105 === (2))){
var state_18104__$1 = state_18104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18104__$1,(4),ch);
} else {
if((state_val_18105 === (11))){
var inst_18094 = (state_18104[(2)]);
var state_18104__$1 = state_18104;
var statearr_18113_18132 = state_18104__$1;
(statearr_18113_18132[(2)] = inst_18094);

(statearr_18113_18132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18105 === (9))){
var state_18104__$1 = state_18104;
var statearr_18114_18133 = state_18104__$1;
(statearr_18114_18133[(2)] = null);

(statearr_18114_18133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18105 === (5))){
var inst_18089 = cljs.core.async.close_BANG_.call(null,out);
var state_18104__$1 = state_18104;
var statearr_18115_18134 = state_18104__$1;
(statearr_18115_18134[(2)] = inst_18089);

(statearr_18115_18134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18105 === (10))){
var inst_18097 = (state_18104[(2)]);
var state_18104__$1 = (function (){var statearr_18116 = state_18104;
(statearr_18116[(8)] = inst_18097);

return statearr_18116;
})();
var statearr_18117_18135 = state_18104__$1;
(statearr_18117_18135[(2)] = null);

(statearr_18117_18135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18105 === (8))){
var inst_18086 = (state_18104[(7)]);
var state_18104__$1 = state_18104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18104__$1,(11),out,inst_18086);
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
});})(c__6200__auto___18125,out))
;
return ((function (switch__6144__auto__,c__6200__auto___18125,out){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_18121 = [null,null,null,null,null,null,null,null,null];
(statearr_18121[(0)] = state_machine__6145__auto__);

(statearr_18121[(1)] = (1));

return statearr_18121;
});
var state_machine__6145__auto____1 = (function (state_18104){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_18104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e18122){if((e18122 instanceof Object)){
var ex__6148__auto__ = e18122;
var statearr_18123_18136 = state_18104;
(statearr_18123_18136[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18137 = state_18104;
state_18104 = G__18137;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_18104){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_18104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___18125,out))
})();
var state__6202__auto__ = (function (){var statearr_18124 = f__6201__auto__.call(null);
(statearr_18124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___18125);

return statearr_18124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___18125,out))
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
var c__6200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto__){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto__){
return (function (state_18303){
var state_val_18304 = (state_18303[(1)]);
if((state_val_18304 === (7))){
var inst_18299 = (state_18303[(2)]);
var state_18303__$1 = state_18303;
var statearr_18305_18346 = state_18303__$1;
(statearr_18305_18346[(2)] = inst_18299);

(statearr_18305_18346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (20))){
var inst_18269 = (state_18303[(7)]);
var inst_18280 = (state_18303[(2)]);
var inst_18281 = cljs.core.next.call(null,inst_18269);
var inst_18255 = inst_18281;
var inst_18256 = null;
var inst_18257 = (0);
var inst_18258 = (0);
var state_18303__$1 = (function (){var statearr_18306 = state_18303;
(statearr_18306[(8)] = inst_18255);

(statearr_18306[(9)] = inst_18258);

(statearr_18306[(10)] = inst_18256);

(statearr_18306[(11)] = inst_18280);

(statearr_18306[(12)] = inst_18257);

return statearr_18306;
})();
var statearr_18307_18347 = state_18303__$1;
(statearr_18307_18347[(2)] = null);

(statearr_18307_18347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (1))){
var state_18303__$1 = state_18303;
var statearr_18308_18348 = state_18303__$1;
(statearr_18308_18348[(2)] = null);

(statearr_18308_18348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (4))){
var inst_18244 = (state_18303[(13)]);
var inst_18244__$1 = (state_18303[(2)]);
var inst_18245 = (inst_18244__$1 == null);
var state_18303__$1 = (function (){var statearr_18309 = state_18303;
(statearr_18309[(13)] = inst_18244__$1);

return statearr_18309;
})();
if(cljs.core.truth_(inst_18245)){
var statearr_18310_18349 = state_18303__$1;
(statearr_18310_18349[(1)] = (5));

} else {
var statearr_18311_18350 = state_18303__$1;
(statearr_18311_18350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (15))){
var state_18303__$1 = state_18303;
var statearr_18315_18351 = state_18303__$1;
(statearr_18315_18351[(2)] = null);

(statearr_18315_18351[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (21))){
var state_18303__$1 = state_18303;
var statearr_18316_18352 = state_18303__$1;
(statearr_18316_18352[(2)] = null);

(statearr_18316_18352[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (13))){
var inst_18255 = (state_18303[(8)]);
var inst_18258 = (state_18303[(9)]);
var inst_18256 = (state_18303[(10)]);
var inst_18257 = (state_18303[(12)]);
var inst_18265 = (state_18303[(2)]);
var inst_18266 = (inst_18258 + (1));
var tmp18312 = inst_18255;
var tmp18313 = inst_18256;
var tmp18314 = inst_18257;
var inst_18255__$1 = tmp18312;
var inst_18256__$1 = tmp18313;
var inst_18257__$1 = tmp18314;
var inst_18258__$1 = inst_18266;
var state_18303__$1 = (function (){var statearr_18317 = state_18303;
(statearr_18317[(8)] = inst_18255__$1);

(statearr_18317[(9)] = inst_18258__$1);

(statearr_18317[(14)] = inst_18265);

(statearr_18317[(10)] = inst_18256__$1);

(statearr_18317[(12)] = inst_18257__$1);

return statearr_18317;
})();
var statearr_18318_18353 = state_18303__$1;
(statearr_18318_18353[(2)] = null);

(statearr_18318_18353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (22))){
var state_18303__$1 = state_18303;
var statearr_18319_18354 = state_18303__$1;
(statearr_18319_18354[(2)] = null);

(statearr_18319_18354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (6))){
var inst_18244 = (state_18303[(13)]);
var inst_18253 = f.call(null,inst_18244);
var inst_18254 = cljs.core.seq.call(null,inst_18253);
var inst_18255 = inst_18254;
var inst_18256 = null;
var inst_18257 = (0);
var inst_18258 = (0);
var state_18303__$1 = (function (){var statearr_18320 = state_18303;
(statearr_18320[(8)] = inst_18255);

(statearr_18320[(9)] = inst_18258);

(statearr_18320[(10)] = inst_18256);

(statearr_18320[(12)] = inst_18257);

return statearr_18320;
})();
var statearr_18321_18355 = state_18303__$1;
(statearr_18321_18355[(2)] = null);

(statearr_18321_18355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (17))){
var inst_18269 = (state_18303[(7)]);
var inst_18273 = cljs.core.chunk_first.call(null,inst_18269);
var inst_18274 = cljs.core.chunk_rest.call(null,inst_18269);
var inst_18275 = cljs.core.count.call(null,inst_18273);
var inst_18255 = inst_18274;
var inst_18256 = inst_18273;
var inst_18257 = inst_18275;
var inst_18258 = (0);
var state_18303__$1 = (function (){var statearr_18322 = state_18303;
(statearr_18322[(8)] = inst_18255);

(statearr_18322[(9)] = inst_18258);

(statearr_18322[(10)] = inst_18256);

(statearr_18322[(12)] = inst_18257);

return statearr_18322;
})();
var statearr_18323_18356 = state_18303__$1;
(statearr_18323_18356[(2)] = null);

(statearr_18323_18356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (3))){
var inst_18301 = (state_18303[(2)]);
var state_18303__$1 = state_18303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18303__$1,inst_18301);
} else {
if((state_val_18304 === (12))){
var inst_18289 = (state_18303[(2)]);
var state_18303__$1 = state_18303;
var statearr_18324_18357 = state_18303__$1;
(statearr_18324_18357[(2)] = inst_18289);

(statearr_18324_18357[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (2))){
var state_18303__$1 = state_18303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18303__$1,(4),in$);
} else {
if((state_val_18304 === (23))){
var inst_18297 = (state_18303[(2)]);
var state_18303__$1 = state_18303;
var statearr_18325_18358 = state_18303__$1;
(statearr_18325_18358[(2)] = inst_18297);

(statearr_18325_18358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (19))){
var inst_18284 = (state_18303[(2)]);
var state_18303__$1 = state_18303;
var statearr_18326_18359 = state_18303__$1;
(statearr_18326_18359[(2)] = inst_18284);

(statearr_18326_18359[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (11))){
var inst_18255 = (state_18303[(8)]);
var inst_18269 = (state_18303[(7)]);
var inst_18269__$1 = cljs.core.seq.call(null,inst_18255);
var state_18303__$1 = (function (){var statearr_18327 = state_18303;
(statearr_18327[(7)] = inst_18269__$1);

return statearr_18327;
})();
if(inst_18269__$1){
var statearr_18328_18360 = state_18303__$1;
(statearr_18328_18360[(1)] = (14));

} else {
var statearr_18329_18361 = state_18303__$1;
(statearr_18329_18361[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (9))){
var inst_18291 = (state_18303[(2)]);
var inst_18292 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18303__$1 = (function (){var statearr_18330 = state_18303;
(statearr_18330[(15)] = inst_18291);

return statearr_18330;
})();
if(cljs.core.truth_(inst_18292)){
var statearr_18331_18362 = state_18303__$1;
(statearr_18331_18362[(1)] = (21));

} else {
var statearr_18332_18363 = state_18303__$1;
(statearr_18332_18363[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (5))){
var inst_18247 = cljs.core.async.close_BANG_.call(null,out);
var state_18303__$1 = state_18303;
var statearr_18333_18364 = state_18303__$1;
(statearr_18333_18364[(2)] = inst_18247);

(statearr_18333_18364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (14))){
var inst_18269 = (state_18303[(7)]);
var inst_18271 = cljs.core.chunked_seq_QMARK_.call(null,inst_18269);
var state_18303__$1 = state_18303;
if(inst_18271){
var statearr_18334_18365 = state_18303__$1;
(statearr_18334_18365[(1)] = (17));

} else {
var statearr_18335_18366 = state_18303__$1;
(statearr_18335_18366[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (16))){
var inst_18287 = (state_18303[(2)]);
var state_18303__$1 = state_18303;
var statearr_18336_18367 = state_18303__$1;
(statearr_18336_18367[(2)] = inst_18287);

(statearr_18336_18367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18304 === (10))){
var inst_18258 = (state_18303[(9)]);
var inst_18256 = (state_18303[(10)]);
var inst_18263 = cljs.core._nth.call(null,inst_18256,inst_18258);
var state_18303__$1 = state_18303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18303__$1,(13),out,inst_18263);
} else {
if((state_val_18304 === (18))){
var inst_18269 = (state_18303[(7)]);
var inst_18278 = cljs.core.first.call(null,inst_18269);
var state_18303__$1 = state_18303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18303__$1,(20),out,inst_18278);
} else {
if((state_val_18304 === (8))){
var inst_18258 = (state_18303[(9)]);
var inst_18257 = (state_18303[(12)]);
var inst_18260 = (inst_18258 < inst_18257);
var inst_18261 = inst_18260;
var state_18303__$1 = state_18303;
if(cljs.core.truth_(inst_18261)){
var statearr_18337_18368 = state_18303__$1;
(statearr_18337_18368[(1)] = (10));

} else {
var statearr_18338_18369 = state_18303__$1;
(statearr_18338_18369[(1)] = (11));

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
});})(c__6200__auto__))
;
return ((function (switch__6144__auto__,c__6200__auto__){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_18342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18342[(0)] = state_machine__6145__auto__);

(statearr_18342[(1)] = (1));

return statearr_18342;
});
var state_machine__6145__auto____1 = (function (state_18303){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_18303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e18343){if((e18343 instanceof Object)){
var ex__6148__auto__ = e18343;
var statearr_18344_18370 = state_18303;
(statearr_18344_18370[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18371 = state_18303;
state_18303 = G__18371;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_18303){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_18303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto__))
})();
var state__6202__auto__ = (function (){var statearr_18345 = f__6201__auto__.call(null);
(statearr_18345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto__);

return statearr_18345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto__))
);

return c__6200__auto__;
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
var c__6200__auto___18468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___18468,out){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___18468,out){
return (function (state_18443){
var state_val_18444 = (state_18443[(1)]);
if((state_val_18444 === (7))){
var inst_18438 = (state_18443[(2)]);
var state_18443__$1 = state_18443;
var statearr_18445_18469 = state_18443__$1;
(statearr_18445_18469[(2)] = inst_18438);

(statearr_18445_18469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (1))){
var inst_18420 = null;
var state_18443__$1 = (function (){var statearr_18446 = state_18443;
(statearr_18446[(7)] = inst_18420);

return statearr_18446;
})();
var statearr_18447_18470 = state_18443__$1;
(statearr_18447_18470[(2)] = null);

(statearr_18447_18470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (4))){
var inst_18423 = (state_18443[(8)]);
var inst_18423__$1 = (state_18443[(2)]);
var inst_18424 = (inst_18423__$1 == null);
var inst_18425 = cljs.core.not.call(null,inst_18424);
var state_18443__$1 = (function (){var statearr_18448 = state_18443;
(statearr_18448[(8)] = inst_18423__$1);

return statearr_18448;
})();
if(inst_18425){
var statearr_18449_18471 = state_18443__$1;
(statearr_18449_18471[(1)] = (5));

} else {
var statearr_18450_18472 = state_18443__$1;
(statearr_18450_18472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (6))){
var state_18443__$1 = state_18443;
var statearr_18451_18473 = state_18443__$1;
(statearr_18451_18473[(2)] = null);

(statearr_18451_18473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (3))){
var inst_18440 = (state_18443[(2)]);
var inst_18441 = cljs.core.async.close_BANG_.call(null,out);
var state_18443__$1 = (function (){var statearr_18452 = state_18443;
(statearr_18452[(9)] = inst_18440);

return statearr_18452;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18443__$1,inst_18441);
} else {
if((state_val_18444 === (2))){
var state_18443__$1 = state_18443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18443__$1,(4),ch);
} else {
if((state_val_18444 === (11))){
var inst_18423 = (state_18443[(8)]);
var inst_18432 = (state_18443[(2)]);
var inst_18420 = inst_18423;
var state_18443__$1 = (function (){var statearr_18453 = state_18443;
(statearr_18453[(7)] = inst_18420);

(statearr_18453[(10)] = inst_18432);

return statearr_18453;
})();
var statearr_18454_18474 = state_18443__$1;
(statearr_18454_18474[(2)] = null);

(statearr_18454_18474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (9))){
var inst_18423 = (state_18443[(8)]);
var state_18443__$1 = state_18443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18443__$1,(11),out,inst_18423);
} else {
if((state_val_18444 === (5))){
var inst_18420 = (state_18443[(7)]);
var inst_18423 = (state_18443[(8)]);
var inst_18427 = cljs.core._EQ_.call(null,inst_18423,inst_18420);
var state_18443__$1 = state_18443;
if(inst_18427){
var statearr_18456_18475 = state_18443__$1;
(statearr_18456_18475[(1)] = (8));

} else {
var statearr_18457_18476 = state_18443__$1;
(statearr_18457_18476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (10))){
var inst_18435 = (state_18443[(2)]);
var state_18443__$1 = state_18443;
var statearr_18458_18477 = state_18443__$1;
(statearr_18458_18477[(2)] = inst_18435);

(statearr_18458_18477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18444 === (8))){
var inst_18420 = (state_18443[(7)]);
var tmp18455 = inst_18420;
var inst_18420__$1 = tmp18455;
var state_18443__$1 = (function (){var statearr_18459 = state_18443;
(statearr_18459[(7)] = inst_18420__$1);

return statearr_18459;
})();
var statearr_18460_18478 = state_18443__$1;
(statearr_18460_18478[(2)] = null);

(statearr_18460_18478[(1)] = (2));


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
});})(c__6200__auto___18468,out))
;
return ((function (switch__6144__auto__,c__6200__auto___18468,out){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_18464 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18464[(0)] = state_machine__6145__auto__);

(statearr_18464[(1)] = (1));

return statearr_18464;
});
var state_machine__6145__auto____1 = (function (state_18443){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_18443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e18465){if((e18465 instanceof Object)){
var ex__6148__auto__ = e18465;
var statearr_18466_18479 = state_18443;
(statearr_18466_18479[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18480 = state_18443;
state_18443 = G__18480;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_18443){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_18443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___18468,out))
})();
var state__6202__auto__ = (function (){var statearr_18467 = f__6201__auto__.call(null);
(statearr_18467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___18468);

return statearr_18467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___18468,out))
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
var c__6200__auto___18615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___18615,out){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___18615,out){
return (function (state_18585){
var state_val_18586 = (state_18585[(1)]);
if((state_val_18586 === (7))){
var inst_18581 = (state_18585[(2)]);
var state_18585__$1 = state_18585;
var statearr_18587_18616 = state_18585__$1;
(statearr_18587_18616[(2)] = inst_18581);

(statearr_18587_18616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18586 === (1))){
var inst_18548 = (new Array(n));
var inst_18549 = inst_18548;
var inst_18550 = (0);
var state_18585__$1 = (function (){var statearr_18588 = state_18585;
(statearr_18588[(7)] = inst_18549);

(statearr_18588[(8)] = inst_18550);

return statearr_18588;
})();
var statearr_18589_18617 = state_18585__$1;
(statearr_18589_18617[(2)] = null);

(statearr_18589_18617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18586 === (4))){
var inst_18553 = (state_18585[(9)]);
var inst_18553__$1 = (state_18585[(2)]);
var inst_18554 = (inst_18553__$1 == null);
var inst_18555 = cljs.core.not.call(null,inst_18554);
var state_18585__$1 = (function (){var statearr_18590 = state_18585;
(statearr_18590[(9)] = inst_18553__$1);

return statearr_18590;
})();
if(inst_18555){
var statearr_18591_18618 = state_18585__$1;
(statearr_18591_18618[(1)] = (5));

} else {
var statearr_18592_18619 = state_18585__$1;
(statearr_18592_18619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18586 === (15))){
var inst_18575 = (state_18585[(2)]);
var state_18585__$1 = state_18585;
var statearr_18593_18620 = state_18585__$1;
(statearr_18593_18620[(2)] = inst_18575);

(statearr_18593_18620[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18586 === (13))){
var state_18585__$1 = state_18585;
var statearr_18594_18621 = state_18585__$1;
(statearr_18594_18621[(2)] = null);

(statearr_18594_18621[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18586 === (6))){
var inst_18550 = (state_18585[(8)]);
var inst_18571 = (inst_18550 > (0));
var state_18585__$1 = state_18585;
if(cljs.core.truth_(inst_18571)){
var statearr_18595_18622 = state_18585__$1;
(statearr_18595_18622[(1)] = (12));

} else {
var statearr_18596_18623 = state_18585__$1;
(statearr_18596_18623[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18586 === (3))){
var inst_18583 = (state_18585[(2)]);
var state_18585__$1 = state_18585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18585__$1,inst_18583);
} else {
if((state_val_18586 === (12))){
var inst_18549 = (state_18585[(7)]);
var inst_18573 = cljs.core.vec.call(null,inst_18549);
var state_18585__$1 = state_18585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18585__$1,(15),out,inst_18573);
} else {
if((state_val_18586 === (2))){
var state_18585__$1 = state_18585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18585__$1,(4),ch);
} else {
if((state_val_18586 === (11))){
var inst_18565 = (state_18585[(2)]);
var inst_18566 = (new Array(n));
var inst_18549 = inst_18566;
var inst_18550 = (0);
var state_18585__$1 = (function (){var statearr_18597 = state_18585;
(statearr_18597[(7)] = inst_18549);

(statearr_18597[(8)] = inst_18550);

(statearr_18597[(10)] = inst_18565);

return statearr_18597;
})();
var statearr_18598_18624 = state_18585__$1;
(statearr_18598_18624[(2)] = null);

(statearr_18598_18624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18586 === (9))){
var inst_18549 = (state_18585[(7)]);
var inst_18563 = cljs.core.vec.call(null,inst_18549);
var state_18585__$1 = state_18585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18585__$1,(11),out,inst_18563);
} else {
if((state_val_18586 === (5))){
var inst_18553 = (state_18585[(9)]);
var inst_18549 = (state_18585[(7)]);
var inst_18550 = (state_18585[(8)]);
var inst_18558 = (state_18585[(11)]);
var inst_18557 = (inst_18549[inst_18550] = inst_18553);
var inst_18558__$1 = (inst_18550 + (1));
var inst_18559 = (inst_18558__$1 < n);
var state_18585__$1 = (function (){var statearr_18599 = state_18585;
(statearr_18599[(12)] = inst_18557);

(statearr_18599[(11)] = inst_18558__$1);

return statearr_18599;
})();
if(cljs.core.truth_(inst_18559)){
var statearr_18600_18625 = state_18585__$1;
(statearr_18600_18625[(1)] = (8));

} else {
var statearr_18601_18626 = state_18585__$1;
(statearr_18601_18626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18586 === (14))){
var inst_18578 = (state_18585[(2)]);
var inst_18579 = cljs.core.async.close_BANG_.call(null,out);
var state_18585__$1 = (function (){var statearr_18603 = state_18585;
(statearr_18603[(13)] = inst_18578);

return statearr_18603;
})();
var statearr_18604_18627 = state_18585__$1;
(statearr_18604_18627[(2)] = inst_18579);

(statearr_18604_18627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18586 === (10))){
var inst_18569 = (state_18585[(2)]);
var state_18585__$1 = state_18585;
var statearr_18605_18628 = state_18585__$1;
(statearr_18605_18628[(2)] = inst_18569);

(statearr_18605_18628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18586 === (8))){
var inst_18549 = (state_18585[(7)]);
var inst_18558 = (state_18585[(11)]);
var tmp18602 = inst_18549;
var inst_18549__$1 = tmp18602;
var inst_18550 = inst_18558;
var state_18585__$1 = (function (){var statearr_18606 = state_18585;
(statearr_18606[(7)] = inst_18549__$1);

(statearr_18606[(8)] = inst_18550);

return statearr_18606;
})();
var statearr_18607_18629 = state_18585__$1;
(statearr_18607_18629[(2)] = null);

(statearr_18607_18629[(1)] = (2));


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
});})(c__6200__auto___18615,out))
;
return ((function (switch__6144__auto__,c__6200__auto___18615,out){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_18611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18611[(0)] = state_machine__6145__auto__);

(statearr_18611[(1)] = (1));

return statearr_18611;
});
var state_machine__6145__auto____1 = (function (state_18585){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_18585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e18612){if((e18612 instanceof Object)){
var ex__6148__auto__ = e18612;
var statearr_18613_18630 = state_18585;
(statearr_18613_18630[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18631 = state_18585;
state_18585 = G__18631;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_18585){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_18585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___18615,out))
})();
var state__6202__auto__ = (function (){var statearr_18614 = f__6201__auto__.call(null);
(statearr_18614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___18615);

return statearr_18614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___18615,out))
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
var c__6200__auto___18774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6200__auto___18774,out){
return (function (){
var f__6201__auto__ = (function (){var switch__6144__auto__ = ((function (c__6200__auto___18774,out){
return (function (state_18744){
var state_val_18745 = (state_18744[(1)]);
if((state_val_18745 === (7))){
var inst_18740 = (state_18744[(2)]);
var state_18744__$1 = state_18744;
var statearr_18746_18775 = state_18744__$1;
(statearr_18746_18775[(2)] = inst_18740);

(statearr_18746_18775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (1))){
var inst_18703 = [];
var inst_18704 = inst_18703;
var inst_18705 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18744__$1 = (function (){var statearr_18747 = state_18744;
(statearr_18747[(7)] = inst_18704);

(statearr_18747[(8)] = inst_18705);

return statearr_18747;
})();
var statearr_18748_18776 = state_18744__$1;
(statearr_18748_18776[(2)] = null);

(statearr_18748_18776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (4))){
var inst_18708 = (state_18744[(9)]);
var inst_18708__$1 = (state_18744[(2)]);
var inst_18709 = (inst_18708__$1 == null);
var inst_18710 = cljs.core.not.call(null,inst_18709);
var state_18744__$1 = (function (){var statearr_18749 = state_18744;
(statearr_18749[(9)] = inst_18708__$1);

return statearr_18749;
})();
if(inst_18710){
var statearr_18750_18777 = state_18744__$1;
(statearr_18750_18777[(1)] = (5));

} else {
var statearr_18751_18778 = state_18744__$1;
(statearr_18751_18778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (15))){
var inst_18734 = (state_18744[(2)]);
var state_18744__$1 = state_18744;
var statearr_18752_18779 = state_18744__$1;
(statearr_18752_18779[(2)] = inst_18734);

(statearr_18752_18779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (13))){
var state_18744__$1 = state_18744;
var statearr_18753_18780 = state_18744__$1;
(statearr_18753_18780[(2)] = null);

(statearr_18753_18780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (6))){
var inst_18704 = (state_18744[(7)]);
var inst_18729 = inst_18704.length;
var inst_18730 = (inst_18729 > (0));
var state_18744__$1 = state_18744;
if(cljs.core.truth_(inst_18730)){
var statearr_18754_18781 = state_18744__$1;
(statearr_18754_18781[(1)] = (12));

} else {
var statearr_18755_18782 = state_18744__$1;
(statearr_18755_18782[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (3))){
var inst_18742 = (state_18744[(2)]);
var state_18744__$1 = state_18744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18744__$1,inst_18742);
} else {
if((state_val_18745 === (12))){
var inst_18704 = (state_18744[(7)]);
var inst_18732 = cljs.core.vec.call(null,inst_18704);
var state_18744__$1 = state_18744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18744__$1,(15),out,inst_18732);
} else {
if((state_val_18745 === (2))){
var state_18744__$1 = state_18744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18744__$1,(4),ch);
} else {
if((state_val_18745 === (11))){
var inst_18708 = (state_18744[(9)]);
var inst_18712 = (state_18744[(10)]);
var inst_18722 = (state_18744[(2)]);
var inst_18723 = [];
var inst_18724 = inst_18723.push(inst_18708);
var inst_18704 = inst_18723;
var inst_18705 = inst_18712;
var state_18744__$1 = (function (){var statearr_18756 = state_18744;
(statearr_18756[(11)] = inst_18722);

(statearr_18756[(7)] = inst_18704);

(statearr_18756[(12)] = inst_18724);

(statearr_18756[(8)] = inst_18705);

return statearr_18756;
})();
var statearr_18757_18783 = state_18744__$1;
(statearr_18757_18783[(2)] = null);

(statearr_18757_18783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (9))){
var inst_18704 = (state_18744[(7)]);
var inst_18720 = cljs.core.vec.call(null,inst_18704);
var state_18744__$1 = state_18744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18744__$1,(11),out,inst_18720);
} else {
if((state_val_18745 === (5))){
var inst_18708 = (state_18744[(9)]);
var inst_18712 = (state_18744[(10)]);
var inst_18705 = (state_18744[(8)]);
var inst_18712__$1 = f.call(null,inst_18708);
var inst_18713 = cljs.core._EQ_.call(null,inst_18712__$1,inst_18705);
var inst_18714 = cljs.core.keyword_identical_QMARK_.call(null,inst_18705,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18715 = (inst_18713) || (inst_18714);
var state_18744__$1 = (function (){var statearr_18758 = state_18744;
(statearr_18758[(10)] = inst_18712__$1);

return statearr_18758;
})();
if(cljs.core.truth_(inst_18715)){
var statearr_18759_18784 = state_18744__$1;
(statearr_18759_18784[(1)] = (8));

} else {
var statearr_18760_18785 = state_18744__$1;
(statearr_18760_18785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (14))){
var inst_18737 = (state_18744[(2)]);
var inst_18738 = cljs.core.async.close_BANG_.call(null,out);
var state_18744__$1 = (function (){var statearr_18762 = state_18744;
(statearr_18762[(13)] = inst_18737);

return statearr_18762;
})();
var statearr_18763_18786 = state_18744__$1;
(statearr_18763_18786[(2)] = inst_18738);

(statearr_18763_18786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (10))){
var inst_18727 = (state_18744[(2)]);
var state_18744__$1 = state_18744;
var statearr_18764_18787 = state_18744__$1;
(statearr_18764_18787[(2)] = inst_18727);

(statearr_18764_18787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (8))){
var inst_18708 = (state_18744[(9)]);
var inst_18704 = (state_18744[(7)]);
var inst_18712 = (state_18744[(10)]);
var inst_18717 = inst_18704.push(inst_18708);
var tmp18761 = inst_18704;
var inst_18704__$1 = tmp18761;
var inst_18705 = inst_18712;
var state_18744__$1 = (function (){var statearr_18765 = state_18744;
(statearr_18765[(7)] = inst_18704__$1);

(statearr_18765[(14)] = inst_18717);

(statearr_18765[(8)] = inst_18705);

return statearr_18765;
})();
var statearr_18766_18788 = state_18744__$1;
(statearr_18766_18788[(2)] = null);

(statearr_18766_18788[(1)] = (2));


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
});})(c__6200__auto___18774,out))
;
return ((function (switch__6144__auto__,c__6200__auto___18774,out){
return (function() {
var state_machine__6145__auto__ = null;
var state_machine__6145__auto____0 = (function (){
var statearr_18770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18770[(0)] = state_machine__6145__auto__);

(statearr_18770[(1)] = (1));

return statearr_18770;
});
var state_machine__6145__auto____1 = (function (state_18744){
while(true){
var ret_value__6146__auto__ = (function (){try{while(true){
var result__6147__auto__ = switch__6144__auto__.call(null,state_18744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6147__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6147__auto__;
}
break;
}
}catch (e18771){if((e18771 instanceof Object)){
var ex__6148__auto__ = e18771;
var statearr_18772_18789 = state_18744;
(statearr_18772_18789[(5)] = ex__6148__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18790 = state_18744;
state_18744 = G__18790;
continue;
} else {
return ret_value__6146__auto__;
}
break;
}
});
state_machine__6145__auto__ = function(state_18744){
switch(arguments.length){
case 0:
return state_machine__6145__auto____0.call(this);
case 1:
return state_machine__6145__auto____1.call(this,state_18744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6145__auto____0;
state_machine__6145__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6145__auto____1;
return state_machine__6145__auto__;
})()
;})(switch__6144__auto__,c__6200__auto___18774,out))
})();
var state__6202__auto__ = (function (){var statearr_18773 = f__6201__auto__.call(null);
(statearr_18773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6200__auto___18774);

return statearr_18773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6202__auto__);
});})(c__6200__auto___18774,out))
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