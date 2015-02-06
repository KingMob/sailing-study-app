// Compiled by ClojureScript 0.0-2760 {:elide-asserts false}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t26259 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26259 = (function (f,fn_handler,meta26260){
this.f = f;
this.fn_handler = fn_handler;
this.meta26260 = meta26260;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26259.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26261){
var self__ = this;
var _26261__$1 = this;
return self__.meta26260;
});

cljs.core.async.t26259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26261,meta26260__$1){
var self__ = this;
var _26261__$1 = this;
return (new cljs.core.async.t26259(self__.f,self__.fn_handler,meta26260__$1));
});

cljs.core.async.t26259.cljs$lang$type = true;

cljs.core.async.t26259.cljs$lang$ctorStr = "cljs.core.async/t26259";

cljs.core.async.t26259.cljs$lang$ctorPrWriter = (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"cljs.core.async/t26259");
});

cljs.core.async.__GT_t26259 = (function __GT_t26259(f__$1,fn_handler__$1,meta26260){
return (new cljs.core.async.t26259(f__$1,fn_handler__$1,meta26260));
});

}

return (new cljs.core.async.t26259(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__26263 = buff;
if(G__26263){
var bit__13857__auto__ = null;
if(cljs.core.truth_((function (){var or__13176__auto__ = bit__13857__auto__;
if(cljs.core.truth_(or__13176__auto__)){
return or__13176__auto__;
} else {
return G__26263.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26263.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26263);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26263);
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
var val_26264 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26264);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26264,ret){
return (function (){
return fn1.call(null,val_26264);
});})(val_26264,ret))
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
var n__14063__auto___26265 = n;
var x_26266 = (0);
while(true){
if((x_26266 < n__14063__auto___26265)){
(a[x_26266] = (0));

var G__26267 = (x_26266 + (1));
x_26266 = G__26267;
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

var G__26268 = (i + (1));
i = G__26268;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26272 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26272 = (function (flag,alt_flag,meta26273){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26273 = meta26273;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26272.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26272.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26272.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26274){
var self__ = this;
var _26274__$1 = this;
return self__.meta26273;
});})(flag))
;

cljs.core.async.t26272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26274,meta26273__$1){
var self__ = this;
var _26274__$1 = this;
return (new cljs.core.async.t26272(self__.flag,self__.alt_flag,meta26273__$1));
});})(flag))
;

cljs.core.async.t26272.cljs$lang$type = true;

cljs.core.async.t26272.cljs$lang$ctorStr = "cljs.core.async/t26272";

cljs.core.async.t26272.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"cljs.core.async/t26272");
});})(flag))
;

cljs.core.async.__GT_t26272 = ((function (flag){
return (function __GT_t26272(flag__$1,alt_flag__$1,meta26273){
return (new cljs.core.async.t26272(flag__$1,alt_flag__$1,meta26273));
});})(flag))
;

}

return (new cljs.core.async.t26272(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t26278 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26278 = (function (cb,flag,alt_handler,meta26279){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26279 = meta26279;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26278.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26278.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26278.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26280){
var self__ = this;
var _26280__$1 = this;
return self__.meta26279;
});

cljs.core.async.t26278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26280,meta26279__$1){
var self__ = this;
var _26280__$1 = this;
return (new cljs.core.async.t26278(self__.cb,self__.flag,self__.alt_handler,meta26279__$1));
});

cljs.core.async.t26278.cljs$lang$type = true;

cljs.core.async.t26278.cljs$lang$ctorStr = "cljs.core.async/t26278";

cljs.core.async.t26278.cljs$lang$ctorPrWriter = (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"cljs.core.async/t26278");
});

cljs.core.async.__GT_t26278 = (function __GT_t26278(cb__$1,flag__$1,alt_handler__$1,meta26279){
return (new cljs.core.async.t26278(cb__$1,flag__$1,alt_handler__$1,meta26279));
});

}

return (new cljs.core.async.t26278(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__26281_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26281_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26282_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26282_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__13176__auto__ = wport;
if(cljs.core.truth_(or__13176__auto__)){
return or__13176__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26283 = (i + (1));
i = G__26283;
continue;
}
} else {
return null;
}
break;
}
})();
var or__13176__auto__ = ret;
if(cljs.core.truth_(or__13176__auto__)){
return or__13176__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__13164__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__13164__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__13164__auto__;
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
var alts_BANG___delegate = function (ports,p__26284){
var map__26286 = p__26284;
var map__26286__$1 = ((cljs.core.seq_QMARK_.call(null,map__26286))?cljs.core.apply.call(null,cljs.core.hash_map,map__26286):map__26286);
var opts = map__26286__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__26284 = null;
if (arguments.length > 1) {
var G__26287__i = 0, G__26287__a = new Array(arguments.length -  1);
while (G__26287__i < G__26287__a.length) {G__26287__a[G__26287__i] = arguments[G__26287__i + 1]; ++G__26287__i;}
  p__26284 = new cljs.core.IndexedSeq(G__26287__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__26284);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__26288){
var ports = cljs.core.first(arglist__26288);
var p__26284 = cljs.core.rest(arglist__26288);
return alts_BANG___delegate(ports,p__26284);
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
var c__15819__auto___26383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___26383){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___26383){
return (function (state_26359){
var state_val_26360 = (state_26359[(1)]);
if((state_val_26360 === (7))){
var inst_26355 = (state_26359[(2)]);
var state_26359__$1 = state_26359;
var statearr_26361_26384 = state_26359__$1;
(statearr_26361_26384[(2)] = inst_26355);

(statearr_26361_26384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (1))){
var state_26359__$1 = state_26359;
var statearr_26362_26385 = state_26359__$1;
(statearr_26362_26385[(2)] = null);

(statearr_26362_26385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (4))){
var inst_26338 = (state_26359[(7)]);
var inst_26338__$1 = (state_26359[(2)]);
var inst_26339 = (inst_26338__$1 == null);
var state_26359__$1 = (function (){var statearr_26363 = state_26359;
(statearr_26363[(7)] = inst_26338__$1);

return statearr_26363;
})();
if(cljs.core.truth_(inst_26339)){
var statearr_26364_26386 = state_26359__$1;
(statearr_26364_26386[(1)] = (5));

} else {
var statearr_26365_26387 = state_26359__$1;
(statearr_26365_26387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (13))){
var state_26359__$1 = state_26359;
var statearr_26366_26388 = state_26359__$1;
(statearr_26366_26388[(2)] = null);

(statearr_26366_26388[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (6))){
var inst_26338 = (state_26359[(7)]);
var state_26359__$1 = state_26359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26359__$1,(11),to,inst_26338);
} else {
if((state_val_26360 === (3))){
var inst_26357 = (state_26359[(2)]);
var state_26359__$1 = state_26359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26359__$1,inst_26357);
} else {
if((state_val_26360 === (12))){
var state_26359__$1 = state_26359;
var statearr_26367_26389 = state_26359__$1;
(statearr_26367_26389[(2)] = null);

(statearr_26367_26389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (2))){
var state_26359__$1 = state_26359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26359__$1,(4),from);
} else {
if((state_val_26360 === (11))){
var inst_26348 = (state_26359[(2)]);
var state_26359__$1 = state_26359;
if(cljs.core.truth_(inst_26348)){
var statearr_26368_26390 = state_26359__$1;
(statearr_26368_26390[(1)] = (12));

} else {
var statearr_26369_26391 = state_26359__$1;
(statearr_26369_26391[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (9))){
var state_26359__$1 = state_26359;
var statearr_26370_26392 = state_26359__$1;
(statearr_26370_26392[(2)] = null);

(statearr_26370_26392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (5))){
var state_26359__$1 = state_26359;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26371_26393 = state_26359__$1;
(statearr_26371_26393[(1)] = (8));

} else {
var statearr_26372_26394 = state_26359__$1;
(statearr_26372_26394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (14))){
var inst_26353 = (state_26359[(2)]);
var state_26359__$1 = state_26359;
var statearr_26373_26395 = state_26359__$1;
(statearr_26373_26395[(2)] = inst_26353);

(statearr_26373_26395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (10))){
var inst_26345 = (state_26359[(2)]);
var state_26359__$1 = state_26359;
var statearr_26374_26396 = state_26359__$1;
(statearr_26374_26396[(2)] = inst_26345);

(statearr_26374_26396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (8))){
var inst_26342 = cljs.core.async.close_BANG_.call(null,to);
var state_26359__$1 = state_26359;
var statearr_26375_26397 = state_26359__$1;
(statearr_26375_26397[(2)] = inst_26342);

(statearr_26375_26397[(1)] = (10));


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
});})(c__15819__auto___26383))
;
return ((function (switch__15763__auto__,c__15819__auto___26383){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_26379 = [null,null,null,null,null,null,null,null];
(statearr_26379[(0)] = state_machine__15764__auto__);

(statearr_26379[(1)] = (1));

return statearr_26379;
});
var state_machine__15764__auto____1 = (function (state_26359){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_26359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e26380){if((e26380 instanceof Object)){
var ex__15767__auto__ = e26380;
var statearr_26381_26398 = state_26359;
(statearr_26381_26398[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26399 = state_26359;
state_26359 = G__26399;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_26359){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_26359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___26383))
})();
var state__15821__auto__ = (function (){var statearr_26382 = f__15820__auto__.call(null);
(statearr_26382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___26383);

return statearr_26382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___26383))
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
return (function (p__26583){
var vec__26584 = p__26583;
var v = cljs.core.nth.call(null,vec__26584,(0),null);
var p = cljs.core.nth.call(null,vec__26584,(1),null);
var job = vec__26584;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15819__auto___26766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___26766,res,vec__26584,v,p,job,jobs,results){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___26766,res,vec__26584,v,p,job,jobs,results){
return (function (state_26589){
var state_val_26590 = (state_26589[(1)]);
if((state_val_26590 === (2))){
var inst_26586 = (state_26589[(2)]);
var inst_26587 = cljs.core.async.close_BANG_.call(null,res);
var state_26589__$1 = (function (){var statearr_26591 = state_26589;
(statearr_26591[(7)] = inst_26586);

return statearr_26591;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26589__$1,inst_26587);
} else {
if((state_val_26590 === (1))){
var state_26589__$1 = state_26589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26589__$1,(2),res,v);
} else {
return null;
}
}
});})(c__15819__auto___26766,res,vec__26584,v,p,job,jobs,results))
;
return ((function (switch__15763__auto__,c__15819__auto___26766,res,vec__26584,v,p,job,jobs,results){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_26595 = [null,null,null,null,null,null,null,null];
(statearr_26595[(0)] = state_machine__15764__auto__);

(statearr_26595[(1)] = (1));

return statearr_26595;
});
var state_machine__15764__auto____1 = (function (state_26589){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_26589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e26596){if((e26596 instanceof Object)){
var ex__15767__auto__ = e26596;
var statearr_26597_26767 = state_26589;
(statearr_26597_26767[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26768 = state_26589;
state_26589 = G__26768;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_26589){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_26589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___26766,res,vec__26584,v,p,job,jobs,results))
})();
var state__15821__auto__ = (function (){var statearr_26598 = f__15820__auto__.call(null);
(statearr_26598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___26766);

return statearr_26598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___26766,res,vec__26584,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26599){
var vec__26600 = p__26599;
var v = cljs.core.nth.call(null,vec__26600,(0),null);
var p = cljs.core.nth.call(null,vec__26600,(1),null);
var job = vec__26600;
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
var n__14063__auto___26769 = n;
var __26770 = (0);
while(true){
if((__26770 < n__14063__auto___26769)){
var G__26601_26771 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26601_26771) {
case "async":
var c__15819__auto___26773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26770,c__15819__auto___26773,G__26601_26771,n__14063__auto___26769,jobs,results,process,async){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (__26770,c__15819__auto___26773,G__26601_26771,n__14063__auto___26769,jobs,results,process,async){
return (function (state_26614){
var state_val_26615 = (state_26614[(1)]);
if((state_val_26615 === (7))){
var inst_26610 = (state_26614[(2)]);
var state_26614__$1 = state_26614;
var statearr_26616_26774 = state_26614__$1;
(statearr_26616_26774[(2)] = inst_26610);

(statearr_26616_26774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26615 === (6))){
var state_26614__$1 = state_26614;
var statearr_26617_26775 = state_26614__$1;
(statearr_26617_26775[(2)] = null);

(statearr_26617_26775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26615 === (5))){
var state_26614__$1 = state_26614;
var statearr_26618_26776 = state_26614__$1;
(statearr_26618_26776[(2)] = null);

(statearr_26618_26776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26615 === (4))){
var inst_26604 = (state_26614[(2)]);
var inst_26605 = async.call(null,inst_26604);
var state_26614__$1 = state_26614;
if(cljs.core.truth_(inst_26605)){
var statearr_26619_26777 = state_26614__$1;
(statearr_26619_26777[(1)] = (5));

} else {
var statearr_26620_26778 = state_26614__$1;
(statearr_26620_26778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26615 === (3))){
var inst_26612 = (state_26614[(2)]);
var state_26614__$1 = state_26614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26614__$1,inst_26612);
} else {
if((state_val_26615 === (2))){
var state_26614__$1 = state_26614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26614__$1,(4),jobs);
} else {
if((state_val_26615 === (1))){
var state_26614__$1 = state_26614;
var statearr_26621_26779 = state_26614__$1;
(statearr_26621_26779[(2)] = null);

(statearr_26621_26779[(1)] = (2));


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
});})(__26770,c__15819__auto___26773,G__26601_26771,n__14063__auto___26769,jobs,results,process,async))
;
return ((function (__26770,switch__15763__auto__,c__15819__auto___26773,G__26601_26771,n__14063__auto___26769,jobs,results,process,async){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_26625 = [null,null,null,null,null,null,null];
(statearr_26625[(0)] = state_machine__15764__auto__);

(statearr_26625[(1)] = (1));

return statearr_26625;
});
var state_machine__15764__auto____1 = (function (state_26614){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_26614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e26626){if((e26626 instanceof Object)){
var ex__15767__auto__ = e26626;
var statearr_26627_26780 = state_26614;
(statearr_26627_26780[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26781 = state_26614;
state_26614 = G__26781;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_26614){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_26614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(__26770,switch__15763__auto__,c__15819__auto___26773,G__26601_26771,n__14063__auto___26769,jobs,results,process,async))
})();
var state__15821__auto__ = (function (){var statearr_26628 = f__15820__auto__.call(null);
(statearr_26628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___26773);

return statearr_26628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(__26770,c__15819__auto___26773,G__26601_26771,n__14063__auto___26769,jobs,results,process,async))
);


break;
case "compute":
var c__15819__auto___26782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26770,c__15819__auto___26782,G__26601_26771,n__14063__auto___26769,jobs,results,process,async){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (__26770,c__15819__auto___26782,G__26601_26771,n__14063__auto___26769,jobs,results,process,async){
return (function (state_26641){
var state_val_26642 = (state_26641[(1)]);
if((state_val_26642 === (7))){
var inst_26637 = (state_26641[(2)]);
var state_26641__$1 = state_26641;
var statearr_26643_26783 = state_26641__$1;
(statearr_26643_26783[(2)] = inst_26637);

(statearr_26643_26783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26642 === (6))){
var state_26641__$1 = state_26641;
var statearr_26644_26784 = state_26641__$1;
(statearr_26644_26784[(2)] = null);

(statearr_26644_26784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26642 === (5))){
var state_26641__$1 = state_26641;
var statearr_26645_26785 = state_26641__$1;
(statearr_26645_26785[(2)] = null);

(statearr_26645_26785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26642 === (4))){
var inst_26631 = (state_26641[(2)]);
var inst_26632 = process.call(null,inst_26631);
var state_26641__$1 = state_26641;
if(cljs.core.truth_(inst_26632)){
var statearr_26646_26786 = state_26641__$1;
(statearr_26646_26786[(1)] = (5));

} else {
var statearr_26647_26787 = state_26641__$1;
(statearr_26647_26787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26642 === (3))){
var inst_26639 = (state_26641[(2)]);
var state_26641__$1 = state_26641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26641__$1,inst_26639);
} else {
if((state_val_26642 === (2))){
var state_26641__$1 = state_26641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26641__$1,(4),jobs);
} else {
if((state_val_26642 === (1))){
var state_26641__$1 = state_26641;
var statearr_26648_26788 = state_26641__$1;
(statearr_26648_26788[(2)] = null);

(statearr_26648_26788[(1)] = (2));


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
});})(__26770,c__15819__auto___26782,G__26601_26771,n__14063__auto___26769,jobs,results,process,async))
;
return ((function (__26770,switch__15763__auto__,c__15819__auto___26782,G__26601_26771,n__14063__auto___26769,jobs,results,process,async){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_26652 = [null,null,null,null,null,null,null];
(statearr_26652[(0)] = state_machine__15764__auto__);

(statearr_26652[(1)] = (1));

return statearr_26652;
});
var state_machine__15764__auto____1 = (function (state_26641){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_26641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e26653){if((e26653 instanceof Object)){
var ex__15767__auto__ = e26653;
var statearr_26654_26789 = state_26641;
(statearr_26654_26789[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26790 = state_26641;
state_26641 = G__26790;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_26641){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_26641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(__26770,switch__15763__auto__,c__15819__auto___26782,G__26601_26771,n__14063__auto___26769,jobs,results,process,async))
})();
var state__15821__auto__ = (function (){var statearr_26655 = f__15820__auto__.call(null);
(statearr_26655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___26782);

return statearr_26655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(__26770,c__15819__auto___26782,G__26601_26771,n__14063__auto___26769,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26791 = (__26770 + (1));
__26770 = G__26791;
continue;
} else {
}
break;
}

var c__15819__auto___26792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___26792,jobs,results,process,async){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___26792,jobs,results,process,async){
return (function (state_26677){
var state_val_26678 = (state_26677[(1)]);
if((state_val_26678 === (9))){
var inst_26670 = (state_26677[(2)]);
var state_26677__$1 = (function (){var statearr_26679 = state_26677;
(statearr_26679[(7)] = inst_26670);

return statearr_26679;
})();
var statearr_26680_26793 = state_26677__$1;
(statearr_26680_26793[(2)] = null);

(statearr_26680_26793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (8))){
var inst_26663 = (state_26677[(8)]);
var inst_26668 = (state_26677[(2)]);
var state_26677__$1 = (function (){var statearr_26681 = state_26677;
(statearr_26681[(9)] = inst_26668);

return statearr_26681;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26677__$1,(9),results,inst_26663);
} else {
if((state_val_26678 === (7))){
var inst_26673 = (state_26677[(2)]);
var state_26677__$1 = state_26677;
var statearr_26682_26794 = state_26677__$1;
(statearr_26682_26794[(2)] = inst_26673);

(statearr_26682_26794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (6))){
var inst_26663 = (state_26677[(8)]);
var inst_26658 = (state_26677[(10)]);
var inst_26663__$1 = cljs.core.async.chan.call(null,(1));
var inst_26664 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26665 = [inst_26658,inst_26663__$1];
var inst_26666 = (new cljs.core.PersistentVector(null,2,(5),inst_26664,inst_26665,null));
var state_26677__$1 = (function (){var statearr_26683 = state_26677;
(statearr_26683[(8)] = inst_26663__$1);

return statearr_26683;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26677__$1,(8),jobs,inst_26666);
} else {
if((state_val_26678 === (5))){
var inst_26661 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26677__$1 = state_26677;
var statearr_26684_26795 = state_26677__$1;
(statearr_26684_26795[(2)] = inst_26661);

(statearr_26684_26795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (4))){
var inst_26658 = (state_26677[(10)]);
var inst_26658__$1 = (state_26677[(2)]);
var inst_26659 = (inst_26658__$1 == null);
var state_26677__$1 = (function (){var statearr_26685 = state_26677;
(statearr_26685[(10)] = inst_26658__$1);

return statearr_26685;
})();
if(cljs.core.truth_(inst_26659)){
var statearr_26686_26796 = state_26677__$1;
(statearr_26686_26796[(1)] = (5));

} else {
var statearr_26687_26797 = state_26677__$1;
(statearr_26687_26797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26678 === (3))){
var inst_26675 = (state_26677[(2)]);
var state_26677__$1 = state_26677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26677__$1,inst_26675);
} else {
if((state_val_26678 === (2))){
var state_26677__$1 = state_26677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26677__$1,(4),from);
} else {
if((state_val_26678 === (1))){
var state_26677__$1 = state_26677;
var statearr_26688_26798 = state_26677__$1;
(statearr_26688_26798[(2)] = null);

(statearr_26688_26798[(1)] = (2));


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
});})(c__15819__auto___26792,jobs,results,process,async))
;
return ((function (switch__15763__auto__,c__15819__auto___26792,jobs,results,process,async){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_26692 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26692[(0)] = state_machine__15764__auto__);

(statearr_26692[(1)] = (1));

return statearr_26692;
});
var state_machine__15764__auto____1 = (function (state_26677){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_26677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e26693){if((e26693 instanceof Object)){
var ex__15767__auto__ = e26693;
var statearr_26694_26799 = state_26677;
(statearr_26694_26799[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26800 = state_26677;
state_26677 = G__26800;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_26677){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_26677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___26792,jobs,results,process,async))
})();
var state__15821__auto__ = (function (){var statearr_26695 = f__15820__auto__.call(null);
(statearr_26695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___26792);

return statearr_26695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___26792,jobs,results,process,async))
);


var c__15819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto__,jobs,results,process,async){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto__,jobs,results,process,async){
return (function (state_26733){
var state_val_26734 = (state_26733[(1)]);
if((state_val_26734 === (7))){
var inst_26729 = (state_26733[(2)]);
var state_26733__$1 = state_26733;
var statearr_26735_26801 = state_26733__$1;
(statearr_26735_26801[(2)] = inst_26729);

(statearr_26735_26801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26734 === (20))){
var state_26733__$1 = state_26733;
var statearr_26736_26802 = state_26733__$1;
(statearr_26736_26802[(2)] = null);

(statearr_26736_26802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26734 === (1))){
var state_26733__$1 = state_26733;
var statearr_26737_26803 = state_26733__$1;
(statearr_26737_26803[(2)] = null);

(statearr_26737_26803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26734 === (4))){
var inst_26698 = (state_26733[(7)]);
var inst_26698__$1 = (state_26733[(2)]);
var inst_26699 = (inst_26698__$1 == null);
var state_26733__$1 = (function (){var statearr_26738 = state_26733;
(statearr_26738[(7)] = inst_26698__$1);

return statearr_26738;
})();
if(cljs.core.truth_(inst_26699)){
var statearr_26739_26804 = state_26733__$1;
(statearr_26739_26804[(1)] = (5));

} else {
var statearr_26740_26805 = state_26733__$1;
(statearr_26740_26805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26734 === (15))){
var inst_26711 = (state_26733[(8)]);
var state_26733__$1 = state_26733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26733__$1,(18),to,inst_26711);
} else {
if((state_val_26734 === (21))){
var inst_26724 = (state_26733[(2)]);
var state_26733__$1 = state_26733;
var statearr_26741_26806 = state_26733__$1;
(statearr_26741_26806[(2)] = inst_26724);

(statearr_26741_26806[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26734 === (13))){
var inst_26726 = (state_26733[(2)]);
var state_26733__$1 = (function (){var statearr_26742 = state_26733;
(statearr_26742[(9)] = inst_26726);

return statearr_26742;
})();
var statearr_26743_26807 = state_26733__$1;
(statearr_26743_26807[(2)] = null);

(statearr_26743_26807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26734 === (6))){
var inst_26698 = (state_26733[(7)]);
var state_26733__$1 = state_26733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26733__$1,(11),inst_26698);
} else {
if((state_val_26734 === (17))){
var inst_26719 = (state_26733[(2)]);
var state_26733__$1 = state_26733;
if(cljs.core.truth_(inst_26719)){
var statearr_26744_26808 = state_26733__$1;
(statearr_26744_26808[(1)] = (19));

} else {
var statearr_26745_26809 = state_26733__$1;
(statearr_26745_26809[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26734 === (3))){
var inst_26731 = (state_26733[(2)]);
var state_26733__$1 = state_26733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26733__$1,inst_26731);
} else {
if((state_val_26734 === (12))){
var inst_26708 = (state_26733[(10)]);
var state_26733__$1 = state_26733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26733__$1,(14),inst_26708);
} else {
if((state_val_26734 === (2))){
var state_26733__$1 = state_26733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26733__$1,(4),results);
} else {
if((state_val_26734 === (19))){
var state_26733__$1 = state_26733;
var statearr_26746_26810 = state_26733__$1;
(statearr_26746_26810[(2)] = null);

(statearr_26746_26810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26734 === (11))){
var inst_26708 = (state_26733[(2)]);
var state_26733__$1 = (function (){var statearr_26747 = state_26733;
(statearr_26747[(10)] = inst_26708);

return statearr_26747;
})();
var statearr_26748_26811 = state_26733__$1;
(statearr_26748_26811[(2)] = null);

(statearr_26748_26811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26734 === (9))){
var state_26733__$1 = state_26733;
var statearr_26749_26812 = state_26733__$1;
(statearr_26749_26812[(2)] = null);

(statearr_26749_26812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26734 === (5))){
var state_26733__$1 = state_26733;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26750_26813 = state_26733__$1;
(statearr_26750_26813[(1)] = (8));

} else {
var statearr_26751_26814 = state_26733__$1;
(statearr_26751_26814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26734 === (14))){
var inst_26713 = (state_26733[(11)]);
var inst_26711 = (state_26733[(8)]);
var inst_26711__$1 = (state_26733[(2)]);
var inst_26712 = (inst_26711__$1 == null);
var inst_26713__$1 = cljs.core.not.call(null,inst_26712);
var state_26733__$1 = (function (){var statearr_26752 = state_26733;
(statearr_26752[(11)] = inst_26713__$1);

(statearr_26752[(8)] = inst_26711__$1);

return statearr_26752;
})();
if(inst_26713__$1){
var statearr_26753_26815 = state_26733__$1;
(statearr_26753_26815[(1)] = (15));

} else {
var statearr_26754_26816 = state_26733__$1;
(statearr_26754_26816[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26734 === (16))){
var inst_26713 = (state_26733[(11)]);
var state_26733__$1 = state_26733;
var statearr_26755_26817 = state_26733__$1;
(statearr_26755_26817[(2)] = inst_26713);

(statearr_26755_26817[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26734 === (10))){
var inst_26705 = (state_26733[(2)]);
var state_26733__$1 = state_26733;
var statearr_26756_26818 = state_26733__$1;
(statearr_26756_26818[(2)] = inst_26705);

(statearr_26756_26818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26734 === (18))){
var inst_26716 = (state_26733[(2)]);
var state_26733__$1 = state_26733;
var statearr_26757_26819 = state_26733__$1;
(statearr_26757_26819[(2)] = inst_26716);

(statearr_26757_26819[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26734 === (8))){
var inst_26702 = cljs.core.async.close_BANG_.call(null,to);
var state_26733__$1 = state_26733;
var statearr_26758_26820 = state_26733__$1;
(statearr_26758_26820[(2)] = inst_26702);

(statearr_26758_26820[(1)] = (10));


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
});})(c__15819__auto__,jobs,results,process,async))
;
return ((function (switch__15763__auto__,c__15819__auto__,jobs,results,process,async){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_26762 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26762[(0)] = state_machine__15764__auto__);

(statearr_26762[(1)] = (1));

return statearr_26762;
});
var state_machine__15764__auto____1 = (function (state_26733){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_26733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e26763){if((e26763 instanceof Object)){
var ex__15767__auto__ = e26763;
var statearr_26764_26821 = state_26733;
(statearr_26764_26821[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26822 = state_26733;
state_26733 = G__26822;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_26733){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_26733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto__,jobs,results,process,async))
})();
var state__15821__auto__ = (function (){var statearr_26765 = f__15820__auto__.call(null);
(statearr_26765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto__);

return statearr_26765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto__,jobs,results,process,async))
);

return c__15819__auto__;
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
var c__15819__auto___26923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___26923,tc,fc){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___26923,tc,fc){
return (function (state_26898){
var state_val_26899 = (state_26898[(1)]);
if((state_val_26899 === (7))){
var inst_26894 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
var statearr_26900_26924 = state_26898__$1;
(statearr_26900_26924[(2)] = inst_26894);

(statearr_26900_26924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (1))){
var state_26898__$1 = state_26898;
var statearr_26901_26925 = state_26898__$1;
(statearr_26901_26925[(2)] = null);

(statearr_26901_26925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (4))){
var inst_26875 = (state_26898[(7)]);
var inst_26875__$1 = (state_26898[(2)]);
var inst_26876 = (inst_26875__$1 == null);
var state_26898__$1 = (function (){var statearr_26902 = state_26898;
(statearr_26902[(7)] = inst_26875__$1);

return statearr_26902;
})();
if(cljs.core.truth_(inst_26876)){
var statearr_26903_26926 = state_26898__$1;
(statearr_26903_26926[(1)] = (5));

} else {
var statearr_26904_26927 = state_26898__$1;
(statearr_26904_26927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (13))){
var state_26898__$1 = state_26898;
var statearr_26905_26928 = state_26898__$1;
(statearr_26905_26928[(2)] = null);

(statearr_26905_26928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (6))){
var inst_26875 = (state_26898[(7)]);
var inst_26881 = p.call(null,inst_26875);
var state_26898__$1 = state_26898;
if(cljs.core.truth_(inst_26881)){
var statearr_26906_26929 = state_26898__$1;
(statearr_26906_26929[(1)] = (9));

} else {
var statearr_26907_26930 = state_26898__$1;
(statearr_26907_26930[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (3))){
var inst_26896 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26898__$1,inst_26896);
} else {
if((state_val_26899 === (12))){
var state_26898__$1 = state_26898;
var statearr_26908_26931 = state_26898__$1;
(statearr_26908_26931[(2)] = null);

(statearr_26908_26931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (2))){
var state_26898__$1 = state_26898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26898__$1,(4),ch);
} else {
if((state_val_26899 === (11))){
var inst_26875 = (state_26898[(7)]);
var inst_26885 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26898__$1,(8),inst_26885,inst_26875);
} else {
if((state_val_26899 === (9))){
var state_26898__$1 = state_26898;
var statearr_26909_26932 = state_26898__$1;
(statearr_26909_26932[(2)] = tc);

(statearr_26909_26932[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (5))){
var inst_26878 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26879 = cljs.core.async.close_BANG_.call(null,fc);
var state_26898__$1 = (function (){var statearr_26910 = state_26898;
(statearr_26910[(8)] = inst_26878);

return statearr_26910;
})();
var statearr_26911_26933 = state_26898__$1;
(statearr_26911_26933[(2)] = inst_26879);

(statearr_26911_26933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (14))){
var inst_26892 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
var statearr_26912_26934 = state_26898__$1;
(statearr_26912_26934[(2)] = inst_26892);

(statearr_26912_26934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (10))){
var state_26898__$1 = state_26898;
var statearr_26913_26935 = state_26898__$1;
(statearr_26913_26935[(2)] = fc);

(statearr_26913_26935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26899 === (8))){
var inst_26887 = (state_26898[(2)]);
var state_26898__$1 = state_26898;
if(cljs.core.truth_(inst_26887)){
var statearr_26914_26936 = state_26898__$1;
(statearr_26914_26936[(1)] = (12));

} else {
var statearr_26915_26937 = state_26898__$1;
(statearr_26915_26937[(1)] = (13));

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
});})(c__15819__auto___26923,tc,fc))
;
return ((function (switch__15763__auto__,c__15819__auto___26923,tc,fc){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_26919 = [null,null,null,null,null,null,null,null,null];
(statearr_26919[(0)] = state_machine__15764__auto__);

(statearr_26919[(1)] = (1));

return statearr_26919;
});
var state_machine__15764__auto____1 = (function (state_26898){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_26898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e26920){if((e26920 instanceof Object)){
var ex__15767__auto__ = e26920;
var statearr_26921_26938 = state_26898;
(statearr_26921_26938[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26939 = state_26898;
state_26898 = G__26939;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_26898){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_26898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___26923,tc,fc))
})();
var state__15821__auto__ = (function (){var statearr_26922 = f__15820__auto__.call(null);
(statearr_26922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___26923);

return statearr_26922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___26923,tc,fc))
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
var c__15819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto__){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto__){
return (function (state_26986){
var state_val_26987 = (state_26986[(1)]);
if((state_val_26987 === (7))){
var inst_26982 = (state_26986[(2)]);
var state_26986__$1 = state_26986;
var statearr_26988_27004 = state_26986__$1;
(statearr_26988_27004[(2)] = inst_26982);

(statearr_26988_27004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26987 === (6))){
var inst_26975 = (state_26986[(7)]);
var inst_26972 = (state_26986[(8)]);
var inst_26979 = f.call(null,inst_26972,inst_26975);
var inst_26972__$1 = inst_26979;
var state_26986__$1 = (function (){var statearr_26989 = state_26986;
(statearr_26989[(8)] = inst_26972__$1);

return statearr_26989;
})();
var statearr_26990_27005 = state_26986__$1;
(statearr_26990_27005[(2)] = null);

(statearr_26990_27005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26987 === (5))){
var inst_26972 = (state_26986[(8)]);
var state_26986__$1 = state_26986;
var statearr_26991_27006 = state_26986__$1;
(statearr_26991_27006[(2)] = inst_26972);

(statearr_26991_27006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26987 === (4))){
var inst_26975 = (state_26986[(7)]);
var inst_26975__$1 = (state_26986[(2)]);
var inst_26976 = (inst_26975__$1 == null);
var state_26986__$1 = (function (){var statearr_26992 = state_26986;
(statearr_26992[(7)] = inst_26975__$1);

return statearr_26992;
})();
if(cljs.core.truth_(inst_26976)){
var statearr_26993_27007 = state_26986__$1;
(statearr_26993_27007[(1)] = (5));

} else {
var statearr_26994_27008 = state_26986__$1;
(statearr_26994_27008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26987 === (3))){
var inst_26984 = (state_26986[(2)]);
var state_26986__$1 = state_26986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26986__$1,inst_26984);
} else {
if((state_val_26987 === (2))){
var state_26986__$1 = state_26986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26986__$1,(4),ch);
} else {
if((state_val_26987 === (1))){
var inst_26972 = init;
var state_26986__$1 = (function (){var statearr_26995 = state_26986;
(statearr_26995[(8)] = inst_26972);

return statearr_26995;
})();
var statearr_26996_27009 = state_26986__$1;
(statearr_26996_27009[(2)] = null);

(statearr_26996_27009[(1)] = (2));


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
});})(c__15819__auto__))
;
return ((function (switch__15763__auto__,c__15819__auto__){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_27000 = [null,null,null,null,null,null,null,null,null];
(statearr_27000[(0)] = state_machine__15764__auto__);

(statearr_27000[(1)] = (1));

return statearr_27000;
});
var state_machine__15764__auto____1 = (function (state_26986){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_26986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e27001){if((e27001 instanceof Object)){
var ex__15767__auto__ = e27001;
var statearr_27002_27010 = state_26986;
(statearr_27002_27010[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27011 = state_26986;
state_26986 = G__27011;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_26986){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_26986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto__))
})();
var state__15821__auto__ = (function (){var statearr_27003 = f__15820__auto__.call(null);
(statearr_27003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto__);

return statearr_27003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto__))
);

return c__15819__auto__;
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
var c__15819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto__){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto__){
return (function (state_27085){
var state_val_27086 = (state_27085[(1)]);
if((state_val_27086 === (7))){
var inst_27067 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
var statearr_27087_27110 = state_27085__$1;
(statearr_27087_27110[(2)] = inst_27067);

(statearr_27087_27110[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (1))){
var inst_27061 = cljs.core.seq.call(null,coll);
var inst_27062 = inst_27061;
var state_27085__$1 = (function (){var statearr_27088 = state_27085;
(statearr_27088[(7)] = inst_27062);

return statearr_27088;
})();
var statearr_27089_27111 = state_27085__$1;
(statearr_27089_27111[(2)] = null);

(statearr_27089_27111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (4))){
var inst_27062 = (state_27085[(7)]);
var inst_27065 = cljs.core.first.call(null,inst_27062);
var state_27085__$1 = state_27085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27085__$1,(7),ch,inst_27065);
} else {
if((state_val_27086 === (13))){
var inst_27079 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
var statearr_27090_27112 = state_27085__$1;
(statearr_27090_27112[(2)] = inst_27079);

(statearr_27090_27112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (6))){
var inst_27070 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
if(cljs.core.truth_(inst_27070)){
var statearr_27091_27113 = state_27085__$1;
(statearr_27091_27113[(1)] = (8));

} else {
var statearr_27092_27114 = state_27085__$1;
(statearr_27092_27114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (3))){
var inst_27083 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27085__$1,inst_27083);
} else {
if((state_val_27086 === (12))){
var state_27085__$1 = state_27085;
var statearr_27093_27115 = state_27085__$1;
(statearr_27093_27115[(2)] = null);

(statearr_27093_27115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (2))){
var inst_27062 = (state_27085[(7)]);
var state_27085__$1 = state_27085;
if(cljs.core.truth_(inst_27062)){
var statearr_27094_27116 = state_27085__$1;
(statearr_27094_27116[(1)] = (4));

} else {
var statearr_27095_27117 = state_27085__$1;
(statearr_27095_27117[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (11))){
var inst_27076 = cljs.core.async.close_BANG_.call(null,ch);
var state_27085__$1 = state_27085;
var statearr_27096_27118 = state_27085__$1;
(statearr_27096_27118[(2)] = inst_27076);

(statearr_27096_27118[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (9))){
var state_27085__$1 = state_27085;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27097_27119 = state_27085__$1;
(statearr_27097_27119[(1)] = (11));

} else {
var statearr_27098_27120 = state_27085__$1;
(statearr_27098_27120[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (5))){
var inst_27062 = (state_27085[(7)]);
var state_27085__$1 = state_27085;
var statearr_27099_27121 = state_27085__$1;
(statearr_27099_27121[(2)] = inst_27062);

(statearr_27099_27121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (10))){
var inst_27081 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
var statearr_27100_27122 = state_27085__$1;
(statearr_27100_27122[(2)] = inst_27081);

(statearr_27100_27122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (8))){
var inst_27062 = (state_27085[(7)]);
var inst_27072 = cljs.core.next.call(null,inst_27062);
var inst_27062__$1 = inst_27072;
var state_27085__$1 = (function (){var statearr_27101 = state_27085;
(statearr_27101[(7)] = inst_27062__$1);

return statearr_27101;
})();
var statearr_27102_27123 = state_27085__$1;
(statearr_27102_27123[(2)] = null);

(statearr_27102_27123[(1)] = (2));


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
});})(c__15819__auto__))
;
return ((function (switch__15763__auto__,c__15819__auto__){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_27106 = [null,null,null,null,null,null,null,null];
(statearr_27106[(0)] = state_machine__15764__auto__);

(statearr_27106[(1)] = (1));

return statearr_27106;
});
var state_machine__15764__auto____1 = (function (state_27085){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_27085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e27107){if((e27107 instanceof Object)){
var ex__15767__auto__ = e27107;
var statearr_27108_27124 = state_27085;
(statearr_27108_27124[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27125 = state_27085;
state_27085 = G__27125;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_27085){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_27085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto__))
})();
var state__15821__auto__ = (function (){var statearr_27109 = f__15820__auto__.call(null);
(statearr_27109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto__);

return statearr_27109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto__))
);

return c__15819__auto__;
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

cljs.core.async.Mux = (function (){var obj27127 = {};
return obj27127;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__13164__auto__ = _;
if(and__13164__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__13164__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__13820__auto__ = (((_ == null))?null:_);
return (function (){var or__13176__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13820__auto__)]);
if(or__13176__auto__){
return or__13176__auto__;
} else {
var or__13176__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__13176__auto____$1){
return or__13176__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27129 = {};
return obj27129;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__13164__auto__ = m;
if(and__13164__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__13164__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__13820__auto__ = (((m == null))?null:m);
return (function (){var or__13176__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13820__auto__)]);
if(or__13176__auto__){
return or__13176__auto__;
} else {
var or__13176__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__13176__auto____$1){
return or__13176__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__13164__auto__ = m;
if(and__13164__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__13164__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__13820__auto__ = (((m == null))?null:m);
return (function (){var or__13176__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13820__auto__)]);
if(or__13176__auto__){
return or__13176__auto__;
} else {
var or__13176__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__13176__auto____$1){
return or__13176__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__13164__auto__ = m;
if(and__13164__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__13164__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__13820__auto__ = (((m == null))?null:m);
return (function (){var or__13176__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13820__auto__)]);
if(or__13176__auto__){
return or__13176__auto__;
} else {
var or__13176__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__13176__auto____$1){
return or__13176__auto____$1;
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
if(typeof cljs.core.async.t27351 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27351 = (function (cs,ch,mult,meta27352){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27352 = meta27352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27351.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27351.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27351.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27351.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27351.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27351.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27351.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27353){
var self__ = this;
var _27353__$1 = this;
return self__.meta27352;
});})(cs))
;

cljs.core.async.t27351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27353,meta27352__$1){
var self__ = this;
var _27353__$1 = this;
return (new cljs.core.async.t27351(self__.cs,self__.ch,self__.mult,meta27352__$1));
});})(cs))
;

cljs.core.async.t27351.cljs$lang$type = true;

cljs.core.async.t27351.cljs$lang$ctorStr = "cljs.core.async/t27351";

cljs.core.async.t27351.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"cljs.core.async/t27351");
});})(cs))
;

cljs.core.async.__GT_t27351 = ((function (cs){
return (function __GT_t27351(cs__$1,ch__$1,mult__$1,meta27352){
return (new cljs.core.async.t27351(cs__$1,ch__$1,mult__$1,meta27352));
});})(cs))
;

}

return (new cljs.core.async.t27351(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__15819__auto___27572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___27572,cs,m,dchan,dctr,done){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___27572,cs,m,dchan,dctr,done){
return (function (state_27484){
var state_val_27485 = (state_27484[(1)]);
if((state_val_27485 === (7))){
var inst_27480 = (state_27484[(2)]);
var state_27484__$1 = state_27484;
var statearr_27486_27573 = state_27484__$1;
(statearr_27486_27573[(2)] = inst_27480);

(statearr_27486_27573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (20))){
var inst_27385 = (state_27484[(7)]);
var inst_27395 = cljs.core.first.call(null,inst_27385);
var inst_27396 = cljs.core.nth.call(null,inst_27395,(0),null);
var inst_27397 = cljs.core.nth.call(null,inst_27395,(1),null);
var state_27484__$1 = (function (){var statearr_27487 = state_27484;
(statearr_27487[(8)] = inst_27396);

return statearr_27487;
})();
if(cljs.core.truth_(inst_27397)){
var statearr_27488_27574 = state_27484__$1;
(statearr_27488_27574[(1)] = (22));

} else {
var statearr_27489_27575 = state_27484__$1;
(statearr_27489_27575[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (27))){
var inst_27356 = (state_27484[(9)]);
var inst_27427 = (state_27484[(10)]);
var inst_27432 = (state_27484[(11)]);
var inst_27425 = (state_27484[(12)]);
var inst_27432__$1 = cljs.core._nth.call(null,inst_27425,inst_27427);
var inst_27433 = cljs.core.async.put_BANG_.call(null,inst_27432__$1,inst_27356,done);
var state_27484__$1 = (function (){var statearr_27490 = state_27484;
(statearr_27490[(11)] = inst_27432__$1);

return statearr_27490;
})();
if(cljs.core.truth_(inst_27433)){
var statearr_27491_27576 = state_27484__$1;
(statearr_27491_27576[(1)] = (30));

} else {
var statearr_27492_27577 = state_27484__$1;
(statearr_27492_27577[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (1))){
var state_27484__$1 = state_27484;
var statearr_27493_27578 = state_27484__$1;
(statearr_27493_27578[(2)] = null);

(statearr_27493_27578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (24))){
var inst_27385 = (state_27484[(7)]);
var inst_27402 = (state_27484[(2)]);
var inst_27403 = cljs.core.next.call(null,inst_27385);
var inst_27365 = inst_27403;
var inst_27366 = null;
var inst_27367 = (0);
var inst_27368 = (0);
var state_27484__$1 = (function (){var statearr_27494 = state_27484;
(statearr_27494[(13)] = inst_27402);

(statearr_27494[(14)] = inst_27367);

(statearr_27494[(15)] = inst_27365);

(statearr_27494[(16)] = inst_27368);

(statearr_27494[(17)] = inst_27366);

return statearr_27494;
})();
var statearr_27495_27579 = state_27484__$1;
(statearr_27495_27579[(2)] = null);

(statearr_27495_27579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (39))){
var state_27484__$1 = state_27484;
var statearr_27499_27580 = state_27484__$1;
(statearr_27499_27580[(2)] = null);

(statearr_27499_27580[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (4))){
var inst_27356 = (state_27484[(9)]);
var inst_27356__$1 = (state_27484[(2)]);
var inst_27357 = (inst_27356__$1 == null);
var state_27484__$1 = (function (){var statearr_27500 = state_27484;
(statearr_27500[(9)] = inst_27356__$1);

return statearr_27500;
})();
if(cljs.core.truth_(inst_27357)){
var statearr_27501_27581 = state_27484__$1;
(statearr_27501_27581[(1)] = (5));

} else {
var statearr_27502_27582 = state_27484__$1;
(statearr_27502_27582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (15))){
var inst_27367 = (state_27484[(14)]);
var inst_27365 = (state_27484[(15)]);
var inst_27368 = (state_27484[(16)]);
var inst_27366 = (state_27484[(17)]);
var inst_27381 = (state_27484[(2)]);
var inst_27382 = (inst_27368 + (1));
var tmp27496 = inst_27367;
var tmp27497 = inst_27365;
var tmp27498 = inst_27366;
var inst_27365__$1 = tmp27497;
var inst_27366__$1 = tmp27498;
var inst_27367__$1 = tmp27496;
var inst_27368__$1 = inst_27382;
var state_27484__$1 = (function (){var statearr_27503 = state_27484;
(statearr_27503[(18)] = inst_27381);

(statearr_27503[(14)] = inst_27367__$1);

(statearr_27503[(15)] = inst_27365__$1);

(statearr_27503[(16)] = inst_27368__$1);

(statearr_27503[(17)] = inst_27366__$1);

return statearr_27503;
})();
var statearr_27504_27583 = state_27484__$1;
(statearr_27504_27583[(2)] = null);

(statearr_27504_27583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (21))){
var inst_27406 = (state_27484[(2)]);
var state_27484__$1 = state_27484;
var statearr_27508_27584 = state_27484__$1;
(statearr_27508_27584[(2)] = inst_27406);

(statearr_27508_27584[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (31))){
var inst_27432 = (state_27484[(11)]);
var inst_27436 = done.call(null,null);
var inst_27437 = cljs.core.async.untap_STAR_.call(null,m,inst_27432);
var state_27484__$1 = (function (){var statearr_27509 = state_27484;
(statearr_27509[(19)] = inst_27436);

return statearr_27509;
})();
var statearr_27510_27585 = state_27484__$1;
(statearr_27510_27585[(2)] = inst_27437);

(statearr_27510_27585[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (32))){
var inst_27427 = (state_27484[(10)]);
var inst_27426 = (state_27484[(20)]);
var inst_27425 = (state_27484[(12)]);
var inst_27424 = (state_27484[(21)]);
var inst_27439 = (state_27484[(2)]);
var inst_27440 = (inst_27427 + (1));
var tmp27505 = inst_27426;
var tmp27506 = inst_27425;
var tmp27507 = inst_27424;
var inst_27424__$1 = tmp27507;
var inst_27425__$1 = tmp27506;
var inst_27426__$1 = tmp27505;
var inst_27427__$1 = inst_27440;
var state_27484__$1 = (function (){var statearr_27511 = state_27484;
(statearr_27511[(10)] = inst_27427__$1);

(statearr_27511[(20)] = inst_27426__$1);

(statearr_27511[(12)] = inst_27425__$1);

(statearr_27511[(22)] = inst_27439);

(statearr_27511[(21)] = inst_27424__$1);

return statearr_27511;
})();
var statearr_27512_27586 = state_27484__$1;
(statearr_27512_27586[(2)] = null);

(statearr_27512_27586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (40))){
var inst_27452 = (state_27484[(23)]);
var inst_27456 = done.call(null,null);
var inst_27457 = cljs.core.async.untap_STAR_.call(null,m,inst_27452);
var state_27484__$1 = (function (){var statearr_27513 = state_27484;
(statearr_27513[(24)] = inst_27456);

return statearr_27513;
})();
var statearr_27514_27587 = state_27484__$1;
(statearr_27514_27587[(2)] = inst_27457);

(statearr_27514_27587[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (33))){
var inst_27443 = (state_27484[(25)]);
var inst_27445 = cljs.core.chunked_seq_QMARK_.call(null,inst_27443);
var state_27484__$1 = state_27484;
if(inst_27445){
var statearr_27515_27588 = state_27484__$1;
(statearr_27515_27588[(1)] = (36));

} else {
var statearr_27516_27589 = state_27484__$1;
(statearr_27516_27589[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (13))){
var inst_27375 = (state_27484[(26)]);
var inst_27378 = cljs.core.async.close_BANG_.call(null,inst_27375);
var state_27484__$1 = state_27484;
var statearr_27517_27590 = state_27484__$1;
(statearr_27517_27590[(2)] = inst_27378);

(statearr_27517_27590[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (22))){
var inst_27396 = (state_27484[(8)]);
var inst_27399 = cljs.core.async.close_BANG_.call(null,inst_27396);
var state_27484__$1 = state_27484;
var statearr_27518_27591 = state_27484__$1;
(statearr_27518_27591[(2)] = inst_27399);

(statearr_27518_27591[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (36))){
var inst_27443 = (state_27484[(25)]);
var inst_27447 = cljs.core.chunk_first.call(null,inst_27443);
var inst_27448 = cljs.core.chunk_rest.call(null,inst_27443);
var inst_27449 = cljs.core.count.call(null,inst_27447);
var inst_27424 = inst_27448;
var inst_27425 = inst_27447;
var inst_27426 = inst_27449;
var inst_27427 = (0);
var state_27484__$1 = (function (){var statearr_27519 = state_27484;
(statearr_27519[(10)] = inst_27427);

(statearr_27519[(20)] = inst_27426);

(statearr_27519[(12)] = inst_27425);

(statearr_27519[(21)] = inst_27424);

return statearr_27519;
})();
var statearr_27520_27592 = state_27484__$1;
(statearr_27520_27592[(2)] = null);

(statearr_27520_27592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (41))){
var inst_27443 = (state_27484[(25)]);
var inst_27459 = (state_27484[(2)]);
var inst_27460 = cljs.core.next.call(null,inst_27443);
var inst_27424 = inst_27460;
var inst_27425 = null;
var inst_27426 = (0);
var inst_27427 = (0);
var state_27484__$1 = (function (){var statearr_27521 = state_27484;
(statearr_27521[(10)] = inst_27427);

(statearr_27521[(20)] = inst_27426);

(statearr_27521[(27)] = inst_27459);

(statearr_27521[(12)] = inst_27425);

(statearr_27521[(21)] = inst_27424);

return statearr_27521;
})();
var statearr_27522_27593 = state_27484__$1;
(statearr_27522_27593[(2)] = null);

(statearr_27522_27593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (43))){
var state_27484__$1 = state_27484;
var statearr_27523_27594 = state_27484__$1;
(statearr_27523_27594[(2)] = null);

(statearr_27523_27594[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (29))){
var inst_27468 = (state_27484[(2)]);
var state_27484__$1 = state_27484;
var statearr_27524_27595 = state_27484__$1;
(statearr_27524_27595[(2)] = inst_27468);

(statearr_27524_27595[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (44))){
var inst_27477 = (state_27484[(2)]);
var state_27484__$1 = (function (){var statearr_27525 = state_27484;
(statearr_27525[(28)] = inst_27477);

return statearr_27525;
})();
var statearr_27526_27596 = state_27484__$1;
(statearr_27526_27596[(2)] = null);

(statearr_27526_27596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (6))){
var inst_27416 = (state_27484[(29)]);
var inst_27415 = cljs.core.deref.call(null,cs);
var inst_27416__$1 = cljs.core.keys.call(null,inst_27415);
var inst_27417 = cljs.core.count.call(null,inst_27416__$1);
var inst_27418 = cljs.core.reset_BANG_.call(null,dctr,inst_27417);
var inst_27423 = cljs.core.seq.call(null,inst_27416__$1);
var inst_27424 = inst_27423;
var inst_27425 = null;
var inst_27426 = (0);
var inst_27427 = (0);
var state_27484__$1 = (function (){var statearr_27527 = state_27484;
(statearr_27527[(10)] = inst_27427);

(statearr_27527[(20)] = inst_27426);

(statearr_27527[(30)] = inst_27418);

(statearr_27527[(29)] = inst_27416__$1);

(statearr_27527[(12)] = inst_27425);

(statearr_27527[(21)] = inst_27424);

return statearr_27527;
})();
var statearr_27528_27597 = state_27484__$1;
(statearr_27528_27597[(2)] = null);

(statearr_27528_27597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (28))){
var inst_27443 = (state_27484[(25)]);
var inst_27424 = (state_27484[(21)]);
var inst_27443__$1 = cljs.core.seq.call(null,inst_27424);
var state_27484__$1 = (function (){var statearr_27529 = state_27484;
(statearr_27529[(25)] = inst_27443__$1);

return statearr_27529;
})();
if(inst_27443__$1){
var statearr_27530_27598 = state_27484__$1;
(statearr_27530_27598[(1)] = (33));

} else {
var statearr_27531_27599 = state_27484__$1;
(statearr_27531_27599[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (25))){
var inst_27427 = (state_27484[(10)]);
var inst_27426 = (state_27484[(20)]);
var inst_27429 = (inst_27427 < inst_27426);
var inst_27430 = inst_27429;
var state_27484__$1 = state_27484;
if(cljs.core.truth_(inst_27430)){
var statearr_27532_27600 = state_27484__$1;
(statearr_27532_27600[(1)] = (27));

} else {
var statearr_27533_27601 = state_27484__$1;
(statearr_27533_27601[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (34))){
var state_27484__$1 = state_27484;
var statearr_27534_27602 = state_27484__$1;
(statearr_27534_27602[(2)] = null);

(statearr_27534_27602[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (17))){
var state_27484__$1 = state_27484;
var statearr_27535_27603 = state_27484__$1;
(statearr_27535_27603[(2)] = null);

(statearr_27535_27603[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (3))){
var inst_27482 = (state_27484[(2)]);
var state_27484__$1 = state_27484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27484__$1,inst_27482);
} else {
if((state_val_27485 === (12))){
var inst_27411 = (state_27484[(2)]);
var state_27484__$1 = state_27484;
var statearr_27536_27604 = state_27484__$1;
(statearr_27536_27604[(2)] = inst_27411);

(statearr_27536_27604[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (2))){
var state_27484__$1 = state_27484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27484__$1,(4),ch);
} else {
if((state_val_27485 === (23))){
var state_27484__$1 = state_27484;
var statearr_27537_27605 = state_27484__$1;
(statearr_27537_27605[(2)] = null);

(statearr_27537_27605[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (35))){
var inst_27466 = (state_27484[(2)]);
var state_27484__$1 = state_27484;
var statearr_27538_27606 = state_27484__$1;
(statearr_27538_27606[(2)] = inst_27466);

(statearr_27538_27606[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (19))){
var inst_27385 = (state_27484[(7)]);
var inst_27389 = cljs.core.chunk_first.call(null,inst_27385);
var inst_27390 = cljs.core.chunk_rest.call(null,inst_27385);
var inst_27391 = cljs.core.count.call(null,inst_27389);
var inst_27365 = inst_27390;
var inst_27366 = inst_27389;
var inst_27367 = inst_27391;
var inst_27368 = (0);
var state_27484__$1 = (function (){var statearr_27539 = state_27484;
(statearr_27539[(14)] = inst_27367);

(statearr_27539[(15)] = inst_27365);

(statearr_27539[(16)] = inst_27368);

(statearr_27539[(17)] = inst_27366);

return statearr_27539;
})();
var statearr_27540_27607 = state_27484__$1;
(statearr_27540_27607[(2)] = null);

(statearr_27540_27607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (11))){
var inst_27365 = (state_27484[(15)]);
var inst_27385 = (state_27484[(7)]);
var inst_27385__$1 = cljs.core.seq.call(null,inst_27365);
var state_27484__$1 = (function (){var statearr_27541 = state_27484;
(statearr_27541[(7)] = inst_27385__$1);

return statearr_27541;
})();
if(inst_27385__$1){
var statearr_27542_27608 = state_27484__$1;
(statearr_27542_27608[(1)] = (16));

} else {
var statearr_27543_27609 = state_27484__$1;
(statearr_27543_27609[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (9))){
var inst_27413 = (state_27484[(2)]);
var state_27484__$1 = state_27484;
var statearr_27544_27610 = state_27484__$1;
(statearr_27544_27610[(2)] = inst_27413);

(statearr_27544_27610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (5))){
var inst_27363 = cljs.core.deref.call(null,cs);
var inst_27364 = cljs.core.seq.call(null,inst_27363);
var inst_27365 = inst_27364;
var inst_27366 = null;
var inst_27367 = (0);
var inst_27368 = (0);
var state_27484__$1 = (function (){var statearr_27545 = state_27484;
(statearr_27545[(14)] = inst_27367);

(statearr_27545[(15)] = inst_27365);

(statearr_27545[(16)] = inst_27368);

(statearr_27545[(17)] = inst_27366);

return statearr_27545;
})();
var statearr_27546_27611 = state_27484__$1;
(statearr_27546_27611[(2)] = null);

(statearr_27546_27611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (14))){
var state_27484__$1 = state_27484;
var statearr_27547_27612 = state_27484__$1;
(statearr_27547_27612[(2)] = null);

(statearr_27547_27612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (45))){
var inst_27474 = (state_27484[(2)]);
var state_27484__$1 = state_27484;
var statearr_27548_27613 = state_27484__$1;
(statearr_27548_27613[(2)] = inst_27474);

(statearr_27548_27613[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (26))){
var inst_27416 = (state_27484[(29)]);
var inst_27470 = (state_27484[(2)]);
var inst_27471 = cljs.core.seq.call(null,inst_27416);
var state_27484__$1 = (function (){var statearr_27549 = state_27484;
(statearr_27549[(31)] = inst_27470);

return statearr_27549;
})();
if(inst_27471){
var statearr_27550_27614 = state_27484__$1;
(statearr_27550_27614[(1)] = (42));

} else {
var statearr_27551_27615 = state_27484__$1;
(statearr_27551_27615[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (16))){
var inst_27385 = (state_27484[(7)]);
var inst_27387 = cljs.core.chunked_seq_QMARK_.call(null,inst_27385);
var state_27484__$1 = state_27484;
if(inst_27387){
var statearr_27552_27616 = state_27484__$1;
(statearr_27552_27616[(1)] = (19));

} else {
var statearr_27553_27617 = state_27484__$1;
(statearr_27553_27617[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (38))){
var inst_27463 = (state_27484[(2)]);
var state_27484__$1 = state_27484;
var statearr_27554_27618 = state_27484__$1;
(statearr_27554_27618[(2)] = inst_27463);

(statearr_27554_27618[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (30))){
var state_27484__$1 = state_27484;
var statearr_27555_27619 = state_27484__$1;
(statearr_27555_27619[(2)] = null);

(statearr_27555_27619[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (10))){
var inst_27368 = (state_27484[(16)]);
var inst_27366 = (state_27484[(17)]);
var inst_27374 = cljs.core._nth.call(null,inst_27366,inst_27368);
var inst_27375 = cljs.core.nth.call(null,inst_27374,(0),null);
var inst_27376 = cljs.core.nth.call(null,inst_27374,(1),null);
var state_27484__$1 = (function (){var statearr_27556 = state_27484;
(statearr_27556[(26)] = inst_27375);

return statearr_27556;
})();
if(cljs.core.truth_(inst_27376)){
var statearr_27557_27620 = state_27484__$1;
(statearr_27557_27620[(1)] = (13));

} else {
var statearr_27558_27621 = state_27484__$1;
(statearr_27558_27621[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (18))){
var inst_27409 = (state_27484[(2)]);
var state_27484__$1 = state_27484;
var statearr_27559_27622 = state_27484__$1;
(statearr_27559_27622[(2)] = inst_27409);

(statearr_27559_27622[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (42))){
var state_27484__$1 = state_27484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27484__$1,(45),dchan);
} else {
if((state_val_27485 === (37))){
var inst_27443 = (state_27484[(25)]);
var inst_27356 = (state_27484[(9)]);
var inst_27452 = (state_27484[(23)]);
var inst_27452__$1 = cljs.core.first.call(null,inst_27443);
var inst_27453 = cljs.core.async.put_BANG_.call(null,inst_27452__$1,inst_27356,done);
var state_27484__$1 = (function (){var statearr_27560 = state_27484;
(statearr_27560[(23)] = inst_27452__$1);

return statearr_27560;
})();
if(cljs.core.truth_(inst_27453)){
var statearr_27561_27623 = state_27484__$1;
(statearr_27561_27623[(1)] = (39));

} else {
var statearr_27562_27624 = state_27484__$1;
(statearr_27562_27624[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (8))){
var inst_27367 = (state_27484[(14)]);
var inst_27368 = (state_27484[(16)]);
var inst_27370 = (inst_27368 < inst_27367);
var inst_27371 = inst_27370;
var state_27484__$1 = state_27484;
if(cljs.core.truth_(inst_27371)){
var statearr_27563_27625 = state_27484__$1;
(statearr_27563_27625[(1)] = (10));

} else {
var statearr_27564_27626 = state_27484__$1;
(statearr_27564_27626[(1)] = (11));

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
});})(c__15819__auto___27572,cs,m,dchan,dctr,done))
;
return ((function (switch__15763__auto__,c__15819__auto___27572,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_27568 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27568[(0)] = state_machine__15764__auto__);

(statearr_27568[(1)] = (1));

return statearr_27568;
});
var state_machine__15764__auto____1 = (function (state_27484){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_27484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e27569){if((e27569 instanceof Object)){
var ex__15767__auto__ = e27569;
var statearr_27570_27627 = state_27484;
(statearr_27570_27627[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27628 = state_27484;
state_27484 = G__27628;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_27484){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_27484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___27572,cs,m,dchan,dctr,done))
})();
var state__15821__auto__ = (function (){var statearr_27571 = f__15820__auto__.call(null);
(statearr_27571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___27572);

return statearr_27571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___27572,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj27630 = {};
return obj27630;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__13164__auto__ = m;
if(and__13164__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__13164__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__13820__auto__ = (((m == null))?null:m);
return (function (){var or__13176__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13820__auto__)]);
if(or__13176__auto__){
return or__13176__auto__;
} else {
var or__13176__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__13176__auto____$1){
return or__13176__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__13164__auto__ = m;
if(and__13164__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__13164__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__13820__auto__ = (((m == null))?null:m);
return (function (){var or__13176__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13820__auto__)]);
if(or__13176__auto__){
return or__13176__auto__;
} else {
var or__13176__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__13176__auto____$1){
return or__13176__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__13164__auto__ = m;
if(and__13164__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__13164__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__13820__auto__ = (((m == null))?null:m);
return (function (){var or__13176__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13820__auto__)]);
if(or__13176__auto__){
return or__13176__auto__;
} else {
var or__13176__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__13176__auto____$1){
return or__13176__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__13164__auto__ = m;
if(and__13164__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__13164__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__13820__auto__ = (((m == null))?null:m);
return (function (){var or__13176__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13820__auto__)]);
if(or__13176__auto__){
return or__13176__auto__;
} else {
var or__13176__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__13176__auto____$1){
return or__13176__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__13164__auto__ = m;
if(and__13164__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__13164__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__13820__auto__ = (((m == null))?null:m);
return (function (){var or__13176__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13820__auto__)]);
if(or__13176__auto__){
return or__13176__auto__;
} else {
var or__13176__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__13176__auto____$1){
return or__13176__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__27631){
var map__27636 = p__27631;
var map__27636__$1 = ((cljs.core.seq_QMARK_.call(null,map__27636))?cljs.core.apply.call(null,cljs.core.hash_map,map__27636):map__27636);
var opts = map__27636__$1;
var statearr_27637_27640 = state;
(statearr_27637_27640[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__27636,map__27636__$1,opts){
return (function (val){
var statearr_27638_27641 = state;
(statearr_27638_27641[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27636,map__27636__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_27639_27642 = state;
(statearr_27639_27642[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__27631 = null;
if (arguments.length > 3) {
var G__27643__i = 0, G__27643__a = new Array(arguments.length -  3);
while (G__27643__i < G__27643__a.length) {G__27643__a[G__27643__i] = arguments[G__27643__i + 3]; ++G__27643__i;}
  p__27631 = new cljs.core.IndexedSeq(G__27643__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__27631);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__27644){
var state = cljs.core.first(arglist__27644);
arglist__27644 = cljs.core.next(arglist__27644);
var cont_block = cljs.core.first(arglist__27644);
arglist__27644 = cljs.core.next(arglist__27644);
var ports = cljs.core.first(arglist__27644);
var p__27631 = cljs.core.rest(arglist__27644);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__27631);
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
if(typeof cljs.core.async.t27764 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27764 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27765){
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
this.meta27765 = meta27765;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27764.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27764.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27764.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27764.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27764.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27764.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t27764.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27764.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27764.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27766){
var self__ = this;
var _27766__$1 = this;
return self__.meta27765;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27766,meta27765__$1){
var self__ = this;
var _27766__$1 = this;
return (new cljs.core.async.t27764(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27765__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27764.cljs$lang$type = true;

cljs.core.async.t27764.cljs$lang$ctorStr = "cljs.core.async/t27764";

cljs.core.async.t27764.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"cljs.core.async/t27764");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27764 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27764(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27765){
return (new cljs.core.async.t27764(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27765));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27764(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__15819__auto___27883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___27883,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___27883,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27836){
var state_val_27837 = (state_27836[(1)]);
if((state_val_27837 === (7))){
var inst_27780 = (state_27836[(7)]);
var inst_27785 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27780);
var state_27836__$1 = state_27836;
var statearr_27838_27884 = state_27836__$1;
(statearr_27838_27884[(2)] = inst_27785);

(statearr_27838_27884[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (20))){
var inst_27795 = (state_27836[(8)]);
var state_27836__$1 = state_27836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27836__$1,(23),out,inst_27795);
} else {
if((state_val_27837 === (1))){
var inst_27770 = (state_27836[(9)]);
var inst_27770__$1 = calc_state.call(null);
var inst_27771 = cljs.core.seq_QMARK_.call(null,inst_27770__$1);
var state_27836__$1 = (function (){var statearr_27839 = state_27836;
(statearr_27839[(9)] = inst_27770__$1);

return statearr_27839;
})();
if(inst_27771){
var statearr_27840_27885 = state_27836__$1;
(statearr_27840_27885[(1)] = (2));

} else {
var statearr_27841_27886 = state_27836__$1;
(statearr_27841_27886[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (24))){
var inst_27788 = (state_27836[(10)]);
var inst_27780 = inst_27788;
var state_27836__$1 = (function (){var statearr_27842 = state_27836;
(statearr_27842[(7)] = inst_27780);

return statearr_27842;
})();
var statearr_27843_27887 = state_27836__$1;
(statearr_27843_27887[(2)] = null);

(statearr_27843_27887[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (4))){
var inst_27770 = (state_27836[(9)]);
var inst_27776 = (state_27836[(2)]);
var inst_27777 = cljs.core.get.call(null,inst_27776,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27778 = cljs.core.get.call(null,inst_27776,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27779 = cljs.core.get.call(null,inst_27776,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27780 = inst_27770;
var state_27836__$1 = (function (){var statearr_27844 = state_27836;
(statearr_27844[(11)] = inst_27778);

(statearr_27844[(7)] = inst_27780);

(statearr_27844[(12)] = inst_27779);

(statearr_27844[(13)] = inst_27777);

return statearr_27844;
})();
var statearr_27845_27888 = state_27836__$1;
(statearr_27845_27888[(2)] = null);

(statearr_27845_27888[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (15))){
var state_27836__$1 = state_27836;
var statearr_27846_27889 = state_27836__$1;
(statearr_27846_27889[(2)] = null);

(statearr_27846_27889[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (21))){
var inst_27788 = (state_27836[(10)]);
var inst_27780 = inst_27788;
var state_27836__$1 = (function (){var statearr_27847 = state_27836;
(statearr_27847[(7)] = inst_27780);

return statearr_27847;
})();
var statearr_27848_27890 = state_27836__$1;
(statearr_27848_27890[(2)] = null);

(statearr_27848_27890[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (13))){
var inst_27832 = (state_27836[(2)]);
var state_27836__$1 = state_27836;
var statearr_27849_27891 = state_27836__$1;
(statearr_27849_27891[(2)] = inst_27832);

(statearr_27849_27891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (22))){
var inst_27830 = (state_27836[(2)]);
var state_27836__$1 = state_27836;
var statearr_27850_27892 = state_27836__$1;
(statearr_27850_27892[(2)] = inst_27830);

(statearr_27850_27892[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (6))){
var inst_27834 = (state_27836[(2)]);
var state_27836__$1 = state_27836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27836__$1,inst_27834);
} else {
if((state_val_27837 === (25))){
var state_27836__$1 = state_27836;
var statearr_27851_27893 = state_27836__$1;
(statearr_27851_27893[(2)] = null);

(statearr_27851_27893[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (17))){
var inst_27810 = (state_27836[(14)]);
var state_27836__$1 = state_27836;
var statearr_27852_27894 = state_27836__$1;
(statearr_27852_27894[(2)] = inst_27810);

(statearr_27852_27894[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (3))){
var inst_27770 = (state_27836[(9)]);
var state_27836__$1 = state_27836;
var statearr_27853_27895 = state_27836__$1;
(statearr_27853_27895[(2)] = inst_27770);

(statearr_27853_27895[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (12))){
var inst_27810 = (state_27836[(14)]);
var inst_27796 = (state_27836[(15)]);
var inst_27791 = (state_27836[(16)]);
var inst_27810__$1 = inst_27791.call(null,inst_27796);
var state_27836__$1 = (function (){var statearr_27854 = state_27836;
(statearr_27854[(14)] = inst_27810__$1);

return statearr_27854;
})();
if(cljs.core.truth_(inst_27810__$1)){
var statearr_27855_27896 = state_27836__$1;
(statearr_27855_27896[(1)] = (17));

} else {
var statearr_27856_27897 = state_27836__$1;
(statearr_27856_27897[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (2))){
var inst_27770 = (state_27836[(9)]);
var inst_27773 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27770);
var state_27836__$1 = state_27836;
var statearr_27857_27898 = state_27836__$1;
(statearr_27857_27898[(2)] = inst_27773);

(statearr_27857_27898[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (23))){
var inst_27821 = (state_27836[(2)]);
var state_27836__$1 = state_27836;
if(cljs.core.truth_(inst_27821)){
var statearr_27858_27899 = state_27836__$1;
(statearr_27858_27899[(1)] = (24));

} else {
var statearr_27859_27900 = state_27836__$1;
(statearr_27859_27900[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (19))){
var inst_27818 = (state_27836[(2)]);
var state_27836__$1 = state_27836;
if(cljs.core.truth_(inst_27818)){
var statearr_27860_27901 = state_27836__$1;
(statearr_27860_27901[(1)] = (20));

} else {
var statearr_27861_27902 = state_27836__$1;
(statearr_27861_27902[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (11))){
var inst_27795 = (state_27836[(8)]);
var inst_27801 = (inst_27795 == null);
var state_27836__$1 = state_27836;
if(cljs.core.truth_(inst_27801)){
var statearr_27862_27903 = state_27836__$1;
(statearr_27862_27903[(1)] = (14));

} else {
var statearr_27863_27904 = state_27836__$1;
(statearr_27863_27904[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (9))){
var inst_27788 = (state_27836[(10)]);
var inst_27788__$1 = (state_27836[(2)]);
var inst_27789 = cljs.core.get.call(null,inst_27788__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27790 = cljs.core.get.call(null,inst_27788__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27791 = cljs.core.get.call(null,inst_27788__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_27836__$1 = (function (){var statearr_27864 = state_27836;
(statearr_27864[(10)] = inst_27788__$1);

(statearr_27864[(16)] = inst_27791);

(statearr_27864[(17)] = inst_27790);

return statearr_27864;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27836__$1,(10),inst_27789);
} else {
if((state_val_27837 === (5))){
var inst_27780 = (state_27836[(7)]);
var inst_27783 = cljs.core.seq_QMARK_.call(null,inst_27780);
var state_27836__$1 = state_27836;
if(inst_27783){
var statearr_27865_27905 = state_27836__$1;
(statearr_27865_27905[(1)] = (7));

} else {
var statearr_27866_27906 = state_27836__$1;
(statearr_27866_27906[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (14))){
var inst_27796 = (state_27836[(15)]);
var inst_27803 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27796);
var state_27836__$1 = state_27836;
var statearr_27867_27907 = state_27836__$1;
(statearr_27867_27907[(2)] = inst_27803);

(statearr_27867_27907[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (26))){
var inst_27826 = (state_27836[(2)]);
var state_27836__$1 = state_27836;
var statearr_27868_27908 = state_27836__$1;
(statearr_27868_27908[(2)] = inst_27826);

(statearr_27868_27908[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (16))){
var inst_27806 = (state_27836[(2)]);
var inst_27807 = calc_state.call(null);
var inst_27780 = inst_27807;
var state_27836__$1 = (function (){var statearr_27869 = state_27836;
(statearr_27869[(18)] = inst_27806);

(statearr_27869[(7)] = inst_27780);

return statearr_27869;
})();
var statearr_27870_27909 = state_27836__$1;
(statearr_27870_27909[(2)] = null);

(statearr_27870_27909[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (10))){
var inst_27795 = (state_27836[(8)]);
var inst_27796 = (state_27836[(15)]);
var inst_27794 = (state_27836[(2)]);
var inst_27795__$1 = cljs.core.nth.call(null,inst_27794,(0),null);
var inst_27796__$1 = cljs.core.nth.call(null,inst_27794,(1),null);
var inst_27797 = (inst_27795__$1 == null);
var inst_27798 = cljs.core._EQ_.call(null,inst_27796__$1,change);
var inst_27799 = (inst_27797) || (inst_27798);
var state_27836__$1 = (function (){var statearr_27871 = state_27836;
(statearr_27871[(8)] = inst_27795__$1);

(statearr_27871[(15)] = inst_27796__$1);

return statearr_27871;
})();
if(cljs.core.truth_(inst_27799)){
var statearr_27872_27910 = state_27836__$1;
(statearr_27872_27910[(1)] = (11));

} else {
var statearr_27873_27911 = state_27836__$1;
(statearr_27873_27911[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (18))){
var inst_27796 = (state_27836[(15)]);
var inst_27791 = (state_27836[(16)]);
var inst_27790 = (state_27836[(17)]);
var inst_27813 = cljs.core.empty_QMARK_.call(null,inst_27791);
var inst_27814 = inst_27790.call(null,inst_27796);
var inst_27815 = cljs.core.not.call(null,inst_27814);
var inst_27816 = (inst_27813) && (inst_27815);
var state_27836__$1 = state_27836;
var statearr_27874_27912 = state_27836__$1;
(statearr_27874_27912[(2)] = inst_27816);

(statearr_27874_27912[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (8))){
var inst_27780 = (state_27836[(7)]);
var state_27836__$1 = state_27836;
var statearr_27875_27913 = state_27836__$1;
(statearr_27875_27913[(2)] = inst_27780);

(statearr_27875_27913[(1)] = (9));


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
});})(c__15819__auto___27883,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15763__auto__,c__15819__auto___27883,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_27879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27879[(0)] = state_machine__15764__auto__);

(statearr_27879[(1)] = (1));

return statearr_27879;
});
var state_machine__15764__auto____1 = (function (state_27836){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_27836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e27880){if((e27880 instanceof Object)){
var ex__15767__auto__ = e27880;
var statearr_27881_27914 = state_27836;
(statearr_27881_27914[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27915 = state_27836;
state_27836 = G__27915;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_27836){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_27836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___27883,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15821__auto__ = (function (){var statearr_27882 = f__15820__auto__.call(null);
(statearr_27882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___27883);

return statearr_27882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___27883,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj27917 = {};
return obj27917;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__13164__auto__ = p;
if(and__13164__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__13164__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__13820__auto__ = (((p == null))?null:p);
return (function (){var or__13176__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13820__auto__)]);
if(or__13176__auto__){
return or__13176__auto__;
} else {
var or__13176__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__13176__auto____$1){
return or__13176__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__13164__auto__ = p;
if(and__13164__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__13164__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__13820__auto__ = (((p == null))?null:p);
return (function (){var or__13176__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13820__auto__)]);
if(or__13176__auto__){
return or__13176__auto__;
} else {
var or__13176__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__13176__auto____$1){
return or__13176__auto____$1;
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
if((function (){var and__13164__auto__ = p;
if(and__13164__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__13164__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__13820__auto__ = (((p == null))?null:p);
return (function (){var or__13176__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13820__auto__)]);
if(or__13176__auto__){
return or__13176__auto__;
} else {
var or__13176__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__13176__auto____$1){
return or__13176__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__13164__auto__ = p;
if(and__13164__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__13164__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__13820__auto__ = (((p == null))?null:p);
return (function (){var or__13176__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13820__auto__)]);
if(or__13176__auto__){
return or__13176__auto__;
} else {
var or__13176__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__13176__auto____$1){
return or__13176__auto____$1;
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
var or__13176__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__13176__auto__)){
return or__13176__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__13176__auto__,mults){
return (function (p1__27918_SHARP_){
if(cljs.core.truth_(p1__27918_SHARP_.call(null,topic))){
return p1__27918_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27918_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13176__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28041 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28041 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta28042){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta28042 = meta28042;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28041.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28041.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28041.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t28041.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28041.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28041.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28041.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28041.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28043){
var self__ = this;
var _28043__$1 = this;
return self__.meta28042;
});})(mults,ensure_mult))
;

cljs.core.async.t28041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28043,meta28042__$1){
var self__ = this;
var _28043__$1 = this;
return (new cljs.core.async.t28041(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta28042__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28041.cljs$lang$type = true;

cljs.core.async.t28041.cljs$lang$ctorStr = "cljs.core.async/t28041";

cljs.core.async.t28041.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"cljs.core.async/t28041");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28041 = ((function (mults,ensure_mult){
return (function __GT_t28041(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28042){
return (new cljs.core.async.t28041(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28042));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28041(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__15819__auto___28163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___28163,mults,ensure_mult,p){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___28163,mults,ensure_mult,p){
return (function (state_28115){
var state_val_28116 = (state_28115[(1)]);
if((state_val_28116 === (7))){
var inst_28111 = (state_28115[(2)]);
var state_28115__$1 = state_28115;
var statearr_28117_28164 = state_28115__$1;
(statearr_28117_28164[(2)] = inst_28111);

(statearr_28117_28164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (20))){
var state_28115__$1 = state_28115;
var statearr_28118_28165 = state_28115__$1;
(statearr_28118_28165[(2)] = null);

(statearr_28118_28165[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (1))){
var state_28115__$1 = state_28115;
var statearr_28119_28166 = state_28115__$1;
(statearr_28119_28166[(2)] = null);

(statearr_28119_28166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (24))){
var inst_28094 = (state_28115[(7)]);
var inst_28103 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28094);
var state_28115__$1 = state_28115;
var statearr_28120_28167 = state_28115__$1;
(statearr_28120_28167[(2)] = inst_28103);

(statearr_28120_28167[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (4))){
var inst_28046 = (state_28115[(8)]);
var inst_28046__$1 = (state_28115[(2)]);
var inst_28047 = (inst_28046__$1 == null);
var state_28115__$1 = (function (){var statearr_28121 = state_28115;
(statearr_28121[(8)] = inst_28046__$1);

return statearr_28121;
})();
if(cljs.core.truth_(inst_28047)){
var statearr_28122_28168 = state_28115__$1;
(statearr_28122_28168[(1)] = (5));

} else {
var statearr_28123_28169 = state_28115__$1;
(statearr_28123_28169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (15))){
var inst_28088 = (state_28115[(2)]);
var state_28115__$1 = state_28115;
var statearr_28124_28170 = state_28115__$1;
(statearr_28124_28170[(2)] = inst_28088);

(statearr_28124_28170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (21))){
var inst_28108 = (state_28115[(2)]);
var state_28115__$1 = (function (){var statearr_28125 = state_28115;
(statearr_28125[(9)] = inst_28108);

return statearr_28125;
})();
var statearr_28126_28171 = state_28115__$1;
(statearr_28126_28171[(2)] = null);

(statearr_28126_28171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (13))){
var inst_28070 = (state_28115[(10)]);
var inst_28072 = cljs.core.chunked_seq_QMARK_.call(null,inst_28070);
var state_28115__$1 = state_28115;
if(inst_28072){
var statearr_28127_28172 = state_28115__$1;
(statearr_28127_28172[(1)] = (16));

} else {
var statearr_28128_28173 = state_28115__$1;
(statearr_28128_28173[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (22))){
var inst_28100 = (state_28115[(2)]);
var state_28115__$1 = state_28115;
if(cljs.core.truth_(inst_28100)){
var statearr_28129_28174 = state_28115__$1;
(statearr_28129_28174[(1)] = (23));

} else {
var statearr_28130_28175 = state_28115__$1;
(statearr_28130_28175[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (6))){
var inst_28094 = (state_28115[(7)]);
var inst_28046 = (state_28115[(8)]);
var inst_28096 = (state_28115[(11)]);
var inst_28094__$1 = topic_fn.call(null,inst_28046);
var inst_28095 = cljs.core.deref.call(null,mults);
var inst_28096__$1 = cljs.core.get.call(null,inst_28095,inst_28094__$1);
var state_28115__$1 = (function (){var statearr_28131 = state_28115;
(statearr_28131[(7)] = inst_28094__$1);

(statearr_28131[(11)] = inst_28096__$1);

return statearr_28131;
})();
if(cljs.core.truth_(inst_28096__$1)){
var statearr_28132_28176 = state_28115__$1;
(statearr_28132_28176[(1)] = (19));

} else {
var statearr_28133_28177 = state_28115__$1;
(statearr_28133_28177[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (25))){
var inst_28105 = (state_28115[(2)]);
var state_28115__$1 = state_28115;
var statearr_28134_28178 = state_28115__$1;
(statearr_28134_28178[(2)] = inst_28105);

(statearr_28134_28178[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (17))){
var inst_28070 = (state_28115[(10)]);
var inst_28079 = cljs.core.first.call(null,inst_28070);
var inst_28080 = cljs.core.async.muxch_STAR_.call(null,inst_28079);
var inst_28081 = cljs.core.async.close_BANG_.call(null,inst_28080);
var inst_28082 = cljs.core.next.call(null,inst_28070);
var inst_28056 = inst_28082;
var inst_28057 = null;
var inst_28058 = (0);
var inst_28059 = (0);
var state_28115__$1 = (function (){var statearr_28135 = state_28115;
(statearr_28135[(12)] = inst_28057);

(statearr_28135[(13)] = inst_28059);

(statearr_28135[(14)] = inst_28081);

(statearr_28135[(15)] = inst_28056);

(statearr_28135[(16)] = inst_28058);

return statearr_28135;
})();
var statearr_28136_28179 = state_28115__$1;
(statearr_28136_28179[(2)] = null);

(statearr_28136_28179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (3))){
var inst_28113 = (state_28115[(2)]);
var state_28115__$1 = state_28115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28115__$1,inst_28113);
} else {
if((state_val_28116 === (12))){
var inst_28090 = (state_28115[(2)]);
var state_28115__$1 = state_28115;
var statearr_28137_28180 = state_28115__$1;
(statearr_28137_28180[(2)] = inst_28090);

(statearr_28137_28180[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (2))){
var state_28115__$1 = state_28115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28115__$1,(4),ch);
} else {
if((state_val_28116 === (23))){
var state_28115__$1 = state_28115;
var statearr_28138_28181 = state_28115__$1;
(statearr_28138_28181[(2)] = null);

(statearr_28138_28181[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (19))){
var inst_28046 = (state_28115[(8)]);
var inst_28096 = (state_28115[(11)]);
var inst_28098 = cljs.core.async.muxch_STAR_.call(null,inst_28096);
var state_28115__$1 = state_28115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28115__$1,(22),inst_28098,inst_28046);
} else {
if((state_val_28116 === (11))){
var inst_28056 = (state_28115[(15)]);
var inst_28070 = (state_28115[(10)]);
var inst_28070__$1 = cljs.core.seq.call(null,inst_28056);
var state_28115__$1 = (function (){var statearr_28139 = state_28115;
(statearr_28139[(10)] = inst_28070__$1);

return statearr_28139;
})();
if(inst_28070__$1){
var statearr_28140_28182 = state_28115__$1;
(statearr_28140_28182[(1)] = (13));

} else {
var statearr_28141_28183 = state_28115__$1;
(statearr_28141_28183[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (9))){
var inst_28092 = (state_28115[(2)]);
var state_28115__$1 = state_28115;
var statearr_28142_28184 = state_28115__$1;
(statearr_28142_28184[(2)] = inst_28092);

(statearr_28142_28184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (5))){
var inst_28053 = cljs.core.deref.call(null,mults);
var inst_28054 = cljs.core.vals.call(null,inst_28053);
var inst_28055 = cljs.core.seq.call(null,inst_28054);
var inst_28056 = inst_28055;
var inst_28057 = null;
var inst_28058 = (0);
var inst_28059 = (0);
var state_28115__$1 = (function (){var statearr_28143 = state_28115;
(statearr_28143[(12)] = inst_28057);

(statearr_28143[(13)] = inst_28059);

(statearr_28143[(15)] = inst_28056);

(statearr_28143[(16)] = inst_28058);

return statearr_28143;
})();
var statearr_28144_28185 = state_28115__$1;
(statearr_28144_28185[(2)] = null);

(statearr_28144_28185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (14))){
var state_28115__$1 = state_28115;
var statearr_28148_28186 = state_28115__$1;
(statearr_28148_28186[(2)] = null);

(statearr_28148_28186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (16))){
var inst_28070 = (state_28115[(10)]);
var inst_28074 = cljs.core.chunk_first.call(null,inst_28070);
var inst_28075 = cljs.core.chunk_rest.call(null,inst_28070);
var inst_28076 = cljs.core.count.call(null,inst_28074);
var inst_28056 = inst_28075;
var inst_28057 = inst_28074;
var inst_28058 = inst_28076;
var inst_28059 = (0);
var state_28115__$1 = (function (){var statearr_28149 = state_28115;
(statearr_28149[(12)] = inst_28057);

(statearr_28149[(13)] = inst_28059);

(statearr_28149[(15)] = inst_28056);

(statearr_28149[(16)] = inst_28058);

return statearr_28149;
})();
var statearr_28150_28187 = state_28115__$1;
(statearr_28150_28187[(2)] = null);

(statearr_28150_28187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (10))){
var inst_28057 = (state_28115[(12)]);
var inst_28059 = (state_28115[(13)]);
var inst_28056 = (state_28115[(15)]);
var inst_28058 = (state_28115[(16)]);
var inst_28064 = cljs.core._nth.call(null,inst_28057,inst_28059);
var inst_28065 = cljs.core.async.muxch_STAR_.call(null,inst_28064);
var inst_28066 = cljs.core.async.close_BANG_.call(null,inst_28065);
var inst_28067 = (inst_28059 + (1));
var tmp28145 = inst_28057;
var tmp28146 = inst_28056;
var tmp28147 = inst_28058;
var inst_28056__$1 = tmp28146;
var inst_28057__$1 = tmp28145;
var inst_28058__$1 = tmp28147;
var inst_28059__$1 = inst_28067;
var state_28115__$1 = (function (){var statearr_28151 = state_28115;
(statearr_28151[(12)] = inst_28057__$1);

(statearr_28151[(13)] = inst_28059__$1);

(statearr_28151[(17)] = inst_28066);

(statearr_28151[(15)] = inst_28056__$1);

(statearr_28151[(16)] = inst_28058__$1);

return statearr_28151;
})();
var statearr_28152_28188 = state_28115__$1;
(statearr_28152_28188[(2)] = null);

(statearr_28152_28188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (18))){
var inst_28085 = (state_28115[(2)]);
var state_28115__$1 = state_28115;
var statearr_28153_28189 = state_28115__$1;
(statearr_28153_28189[(2)] = inst_28085);

(statearr_28153_28189[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (8))){
var inst_28059 = (state_28115[(13)]);
var inst_28058 = (state_28115[(16)]);
var inst_28061 = (inst_28059 < inst_28058);
var inst_28062 = inst_28061;
var state_28115__$1 = state_28115;
if(cljs.core.truth_(inst_28062)){
var statearr_28154_28190 = state_28115__$1;
(statearr_28154_28190[(1)] = (10));

} else {
var statearr_28155_28191 = state_28115__$1;
(statearr_28155_28191[(1)] = (11));

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
});})(c__15819__auto___28163,mults,ensure_mult,p))
;
return ((function (switch__15763__auto__,c__15819__auto___28163,mults,ensure_mult,p){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_28159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28159[(0)] = state_machine__15764__auto__);

(statearr_28159[(1)] = (1));

return statearr_28159;
});
var state_machine__15764__auto____1 = (function (state_28115){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_28115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e28160){if((e28160 instanceof Object)){
var ex__15767__auto__ = e28160;
var statearr_28161_28192 = state_28115;
(statearr_28161_28192[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28193 = state_28115;
state_28115 = G__28193;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_28115){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_28115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___28163,mults,ensure_mult,p))
})();
var state__15821__auto__ = (function (){var statearr_28162 = f__15820__auto__.call(null);
(statearr_28162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___28163);

return statearr_28162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___28163,mults,ensure_mult,p))
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
var c__15819__auto___28330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___28330,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___28330,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28300){
var state_val_28301 = (state_28300[(1)]);
if((state_val_28301 === (7))){
var state_28300__$1 = state_28300;
var statearr_28302_28331 = state_28300__$1;
(statearr_28302_28331[(2)] = null);

(statearr_28302_28331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (1))){
var state_28300__$1 = state_28300;
var statearr_28303_28332 = state_28300__$1;
(statearr_28303_28332[(2)] = null);

(statearr_28303_28332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (4))){
var inst_28264 = (state_28300[(7)]);
var inst_28266 = (inst_28264 < cnt);
var state_28300__$1 = state_28300;
if(cljs.core.truth_(inst_28266)){
var statearr_28304_28333 = state_28300__$1;
(statearr_28304_28333[(1)] = (6));

} else {
var statearr_28305_28334 = state_28300__$1;
(statearr_28305_28334[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (15))){
var inst_28296 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
var statearr_28306_28335 = state_28300__$1;
(statearr_28306_28335[(2)] = inst_28296);

(statearr_28306_28335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (13))){
var inst_28289 = cljs.core.async.close_BANG_.call(null,out);
var state_28300__$1 = state_28300;
var statearr_28307_28336 = state_28300__$1;
(statearr_28307_28336[(2)] = inst_28289);

(statearr_28307_28336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (6))){
var state_28300__$1 = state_28300;
var statearr_28308_28337 = state_28300__$1;
(statearr_28308_28337[(2)] = null);

(statearr_28308_28337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (3))){
var inst_28298 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28300__$1,inst_28298);
} else {
if((state_val_28301 === (12))){
var inst_28286 = (state_28300[(8)]);
var inst_28286__$1 = (state_28300[(2)]);
var inst_28287 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28286__$1);
var state_28300__$1 = (function (){var statearr_28309 = state_28300;
(statearr_28309[(8)] = inst_28286__$1);

return statearr_28309;
})();
if(cljs.core.truth_(inst_28287)){
var statearr_28310_28338 = state_28300__$1;
(statearr_28310_28338[(1)] = (13));

} else {
var statearr_28311_28339 = state_28300__$1;
(statearr_28311_28339[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (2))){
var inst_28263 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28264 = (0);
var state_28300__$1 = (function (){var statearr_28312 = state_28300;
(statearr_28312[(9)] = inst_28263);

(statearr_28312[(7)] = inst_28264);

return statearr_28312;
})();
var statearr_28313_28340 = state_28300__$1;
(statearr_28313_28340[(2)] = null);

(statearr_28313_28340[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (11))){
var inst_28264 = (state_28300[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28300,(10),Object,null,(9));
var inst_28273 = chs__$1.call(null,inst_28264);
var inst_28274 = done.call(null,inst_28264);
var inst_28275 = cljs.core.async.take_BANG_.call(null,inst_28273,inst_28274);
var state_28300__$1 = state_28300;
var statearr_28314_28341 = state_28300__$1;
(statearr_28314_28341[(2)] = inst_28275);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28300__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (9))){
var inst_28264 = (state_28300[(7)]);
var inst_28277 = (state_28300[(2)]);
var inst_28278 = (inst_28264 + (1));
var inst_28264__$1 = inst_28278;
var state_28300__$1 = (function (){var statearr_28315 = state_28300;
(statearr_28315[(10)] = inst_28277);

(statearr_28315[(7)] = inst_28264__$1);

return statearr_28315;
})();
var statearr_28316_28342 = state_28300__$1;
(statearr_28316_28342[(2)] = null);

(statearr_28316_28342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (5))){
var inst_28284 = (state_28300[(2)]);
var state_28300__$1 = (function (){var statearr_28317 = state_28300;
(statearr_28317[(11)] = inst_28284);

return statearr_28317;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28300__$1,(12),dchan);
} else {
if((state_val_28301 === (14))){
var inst_28286 = (state_28300[(8)]);
var inst_28291 = cljs.core.apply.call(null,f,inst_28286);
var state_28300__$1 = state_28300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28300__$1,(16),out,inst_28291);
} else {
if((state_val_28301 === (16))){
var inst_28293 = (state_28300[(2)]);
var state_28300__$1 = (function (){var statearr_28318 = state_28300;
(statearr_28318[(12)] = inst_28293);

return statearr_28318;
})();
var statearr_28319_28343 = state_28300__$1;
(statearr_28319_28343[(2)] = null);

(statearr_28319_28343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (10))){
var inst_28268 = (state_28300[(2)]);
var inst_28269 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28300__$1 = (function (){var statearr_28320 = state_28300;
(statearr_28320[(13)] = inst_28268);

return statearr_28320;
})();
var statearr_28321_28344 = state_28300__$1;
(statearr_28321_28344[(2)] = inst_28269);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28300__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (8))){
var inst_28282 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
var statearr_28322_28345 = state_28300__$1;
(statearr_28322_28345[(2)] = inst_28282);

(statearr_28322_28345[(1)] = (5));


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
});})(c__15819__auto___28330,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15763__auto__,c__15819__auto___28330,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_28326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28326[(0)] = state_machine__15764__auto__);

(statearr_28326[(1)] = (1));

return statearr_28326;
});
var state_machine__15764__auto____1 = (function (state_28300){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_28300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e28327){if((e28327 instanceof Object)){
var ex__15767__auto__ = e28327;
var statearr_28328_28346 = state_28300;
(statearr_28328_28346[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28347 = state_28300;
state_28300 = G__28347;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_28300){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_28300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___28330,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15821__auto__ = (function (){var statearr_28329 = f__15820__auto__.call(null);
(statearr_28329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___28330);

return statearr_28329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___28330,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__15819__auto___28455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___28455,out){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___28455,out){
return (function (state_28431){
var state_val_28432 = (state_28431[(1)]);
if((state_val_28432 === (7))){
var inst_28411 = (state_28431[(7)]);
var inst_28410 = (state_28431[(8)]);
var inst_28410__$1 = (state_28431[(2)]);
var inst_28411__$1 = cljs.core.nth.call(null,inst_28410__$1,(0),null);
var inst_28412 = cljs.core.nth.call(null,inst_28410__$1,(1),null);
var inst_28413 = (inst_28411__$1 == null);
var state_28431__$1 = (function (){var statearr_28433 = state_28431;
(statearr_28433[(7)] = inst_28411__$1);

(statearr_28433[(9)] = inst_28412);

(statearr_28433[(8)] = inst_28410__$1);

return statearr_28433;
})();
if(cljs.core.truth_(inst_28413)){
var statearr_28434_28456 = state_28431__$1;
(statearr_28434_28456[(1)] = (8));

} else {
var statearr_28435_28457 = state_28431__$1;
(statearr_28435_28457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (1))){
var inst_28402 = cljs.core.vec.call(null,chs);
var inst_28403 = inst_28402;
var state_28431__$1 = (function (){var statearr_28436 = state_28431;
(statearr_28436[(10)] = inst_28403);

return statearr_28436;
})();
var statearr_28437_28458 = state_28431__$1;
(statearr_28437_28458[(2)] = null);

(statearr_28437_28458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (4))){
var inst_28403 = (state_28431[(10)]);
var state_28431__$1 = state_28431;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28431__$1,(7),inst_28403);
} else {
if((state_val_28432 === (6))){
var inst_28427 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28438_28459 = state_28431__$1;
(statearr_28438_28459[(2)] = inst_28427);

(statearr_28438_28459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (3))){
var inst_28429 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28431__$1,inst_28429);
} else {
if((state_val_28432 === (2))){
var inst_28403 = (state_28431[(10)]);
var inst_28405 = cljs.core.count.call(null,inst_28403);
var inst_28406 = (inst_28405 > (0));
var state_28431__$1 = state_28431;
if(cljs.core.truth_(inst_28406)){
var statearr_28440_28460 = state_28431__$1;
(statearr_28440_28460[(1)] = (4));

} else {
var statearr_28441_28461 = state_28431__$1;
(statearr_28441_28461[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (11))){
var inst_28403 = (state_28431[(10)]);
var inst_28420 = (state_28431[(2)]);
var tmp28439 = inst_28403;
var inst_28403__$1 = tmp28439;
var state_28431__$1 = (function (){var statearr_28442 = state_28431;
(statearr_28442[(11)] = inst_28420);

(statearr_28442[(10)] = inst_28403__$1);

return statearr_28442;
})();
var statearr_28443_28462 = state_28431__$1;
(statearr_28443_28462[(2)] = null);

(statearr_28443_28462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (9))){
var inst_28411 = (state_28431[(7)]);
var state_28431__$1 = state_28431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28431__$1,(11),out,inst_28411);
} else {
if((state_val_28432 === (5))){
var inst_28425 = cljs.core.async.close_BANG_.call(null,out);
var state_28431__$1 = state_28431;
var statearr_28444_28463 = state_28431__$1;
(statearr_28444_28463[(2)] = inst_28425);

(statearr_28444_28463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (10))){
var inst_28423 = (state_28431[(2)]);
var state_28431__$1 = state_28431;
var statearr_28445_28464 = state_28431__$1;
(statearr_28445_28464[(2)] = inst_28423);

(statearr_28445_28464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28432 === (8))){
var inst_28403 = (state_28431[(10)]);
var inst_28411 = (state_28431[(7)]);
var inst_28412 = (state_28431[(9)]);
var inst_28410 = (state_28431[(8)]);
var inst_28415 = (function (){var c = inst_28412;
var v = inst_28411;
var vec__28408 = inst_28410;
var cs = inst_28403;
return ((function (c,v,vec__28408,cs,inst_28403,inst_28411,inst_28412,inst_28410,state_val_28432,c__15819__auto___28455,out){
return (function (p1__28348_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28348_SHARP_);
});
;})(c,v,vec__28408,cs,inst_28403,inst_28411,inst_28412,inst_28410,state_val_28432,c__15819__auto___28455,out))
})();
var inst_28416 = cljs.core.filterv.call(null,inst_28415,inst_28403);
var inst_28403__$1 = inst_28416;
var state_28431__$1 = (function (){var statearr_28446 = state_28431;
(statearr_28446[(10)] = inst_28403__$1);

return statearr_28446;
})();
var statearr_28447_28465 = state_28431__$1;
(statearr_28447_28465[(2)] = null);

(statearr_28447_28465[(1)] = (2));


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
});})(c__15819__auto___28455,out))
;
return ((function (switch__15763__auto__,c__15819__auto___28455,out){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_28451 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28451[(0)] = state_machine__15764__auto__);

(statearr_28451[(1)] = (1));

return statearr_28451;
});
var state_machine__15764__auto____1 = (function (state_28431){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_28431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e28452){if((e28452 instanceof Object)){
var ex__15767__auto__ = e28452;
var statearr_28453_28466 = state_28431;
(statearr_28453_28466[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28467 = state_28431;
state_28431 = G__28467;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_28431){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_28431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___28455,out))
})();
var state__15821__auto__ = (function (){var statearr_28454 = f__15820__auto__.call(null);
(statearr_28454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___28455);

return statearr_28454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___28455,out))
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
var c__15819__auto___28560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___28560,out){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___28560,out){
return (function (state_28537){
var state_val_28538 = (state_28537[(1)]);
if((state_val_28538 === (7))){
var inst_28519 = (state_28537[(7)]);
var inst_28519__$1 = (state_28537[(2)]);
var inst_28520 = (inst_28519__$1 == null);
var inst_28521 = cljs.core.not.call(null,inst_28520);
var state_28537__$1 = (function (){var statearr_28539 = state_28537;
(statearr_28539[(7)] = inst_28519__$1);

return statearr_28539;
})();
if(inst_28521){
var statearr_28540_28561 = state_28537__$1;
(statearr_28540_28561[(1)] = (8));

} else {
var statearr_28541_28562 = state_28537__$1;
(statearr_28541_28562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (1))){
var inst_28514 = (0);
var state_28537__$1 = (function (){var statearr_28542 = state_28537;
(statearr_28542[(8)] = inst_28514);

return statearr_28542;
})();
var statearr_28543_28563 = state_28537__$1;
(statearr_28543_28563[(2)] = null);

(statearr_28543_28563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (4))){
var state_28537__$1 = state_28537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28537__$1,(7),ch);
} else {
if((state_val_28538 === (6))){
var inst_28532 = (state_28537[(2)]);
var state_28537__$1 = state_28537;
var statearr_28544_28564 = state_28537__$1;
(statearr_28544_28564[(2)] = inst_28532);

(statearr_28544_28564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (3))){
var inst_28534 = (state_28537[(2)]);
var inst_28535 = cljs.core.async.close_BANG_.call(null,out);
var state_28537__$1 = (function (){var statearr_28545 = state_28537;
(statearr_28545[(9)] = inst_28534);

return statearr_28545;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28537__$1,inst_28535);
} else {
if((state_val_28538 === (2))){
var inst_28514 = (state_28537[(8)]);
var inst_28516 = (inst_28514 < n);
var state_28537__$1 = state_28537;
if(cljs.core.truth_(inst_28516)){
var statearr_28546_28565 = state_28537__$1;
(statearr_28546_28565[(1)] = (4));

} else {
var statearr_28547_28566 = state_28537__$1;
(statearr_28547_28566[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (11))){
var inst_28514 = (state_28537[(8)]);
var inst_28524 = (state_28537[(2)]);
var inst_28525 = (inst_28514 + (1));
var inst_28514__$1 = inst_28525;
var state_28537__$1 = (function (){var statearr_28548 = state_28537;
(statearr_28548[(8)] = inst_28514__$1);

(statearr_28548[(10)] = inst_28524);

return statearr_28548;
})();
var statearr_28549_28567 = state_28537__$1;
(statearr_28549_28567[(2)] = null);

(statearr_28549_28567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (9))){
var state_28537__$1 = state_28537;
var statearr_28550_28568 = state_28537__$1;
(statearr_28550_28568[(2)] = null);

(statearr_28550_28568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (5))){
var state_28537__$1 = state_28537;
var statearr_28551_28569 = state_28537__$1;
(statearr_28551_28569[(2)] = null);

(statearr_28551_28569[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (10))){
var inst_28529 = (state_28537[(2)]);
var state_28537__$1 = state_28537;
var statearr_28552_28570 = state_28537__$1;
(statearr_28552_28570[(2)] = inst_28529);

(statearr_28552_28570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (8))){
var inst_28519 = (state_28537[(7)]);
var state_28537__$1 = state_28537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28537__$1,(11),out,inst_28519);
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
});})(c__15819__auto___28560,out))
;
return ((function (switch__15763__auto__,c__15819__auto___28560,out){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_28556 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28556[(0)] = state_machine__15764__auto__);

(statearr_28556[(1)] = (1));

return statearr_28556;
});
var state_machine__15764__auto____1 = (function (state_28537){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_28537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e28557){if((e28557 instanceof Object)){
var ex__15767__auto__ = e28557;
var statearr_28558_28571 = state_28537;
(statearr_28558_28571[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28572 = state_28537;
state_28537 = G__28572;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_28537){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_28537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___28560,out))
})();
var state__15821__auto__ = (function (){var statearr_28559 = f__15820__auto__.call(null);
(statearr_28559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___28560);

return statearr_28559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___28560,out))
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
if(typeof cljs.core.async.t28580 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28580 = (function (ch,f,map_LT_,meta28581){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28581 = meta28581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28580.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28580.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28580.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28580.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28583 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28583 = (function (fn1,_,meta28581,map_LT_,f,ch,meta28584){
this.fn1 = fn1;
this._ = _;
this.meta28581 = meta28581;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28584 = meta28584;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28583.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28583.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28583.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28573_SHARP_){
return f1.call(null,(((p1__28573_SHARP_ == null))?null:self__.f.call(null,p1__28573_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28585){
var self__ = this;
var _28585__$1 = this;
return self__.meta28584;
});})(___$1))
;

cljs.core.async.t28583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28585,meta28584__$1){
var self__ = this;
var _28585__$1 = this;
return (new cljs.core.async.t28583(self__.fn1,self__._,self__.meta28581,self__.map_LT_,self__.f,self__.ch,meta28584__$1));
});})(___$1))
;

cljs.core.async.t28583.cljs$lang$type = true;

cljs.core.async.t28583.cljs$lang$ctorStr = "cljs.core.async/t28583";

cljs.core.async.t28583.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"cljs.core.async/t28583");
});})(___$1))
;

cljs.core.async.__GT_t28583 = ((function (___$1){
return (function __GT_t28583(fn1__$1,___$2,meta28581__$1,map_LT___$1,f__$1,ch__$1,meta28584){
return (new cljs.core.async.t28583(fn1__$1,___$2,meta28581__$1,map_LT___$1,f__$1,ch__$1,meta28584));
});})(___$1))
;

}

return (new cljs.core.async.t28583(fn1,___$1,self__.meta28581,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__13164__auto__ = ret;
if(cljs.core.truth_(and__13164__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__13164__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t28580.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28580.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28580.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28582){
var self__ = this;
var _28582__$1 = this;
return self__.meta28581;
});

cljs.core.async.t28580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28582,meta28581__$1){
var self__ = this;
var _28582__$1 = this;
return (new cljs.core.async.t28580(self__.ch,self__.f,self__.map_LT_,meta28581__$1));
});

cljs.core.async.t28580.cljs$lang$type = true;

cljs.core.async.t28580.cljs$lang$ctorStr = "cljs.core.async/t28580";

cljs.core.async.t28580.cljs$lang$ctorPrWriter = (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"cljs.core.async/t28580");
});

cljs.core.async.__GT_t28580 = (function __GT_t28580(ch__$1,f__$1,map_LT___$1,meta28581){
return (new cljs.core.async.t28580(ch__$1,f__$1,map_LT___$1,meta28581));
});

}

return (new cljs.core.async.t28580(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t28589 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28589 = (function (ch,f,map_GT_,meta28590){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28590 = meta28590;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28589.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28589.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28589.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28589.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28589.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28589.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28591){
var self__ = this;
var _28591__$1 = this;
return self__.meta28590;
});

cljs.core.async.t28589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28591,meta28590__$1){
var self__ = this;
var _28591__$1 = this;
return (new cljs.core.async.t28589(self__.ch,self__.f,self__.map_GT_,meta28590__$1));
});

cljs.core.async.t28589.cljs$lang$type = true;

cljs.core.async.t28589.cljs$lang$ctorStr = "cljs.core.async/t28589";

cljs.core.async.t28589.cljs$lang$ctorPrWriter = (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"cljs.core.async/t28589");
});

cljs.core.async.__GT_t28589 = (function __GT_t28589(ch__$1,f__$1,map_GT___$1,meta28590){
return (new cljs.core.async.t28589(ch__$1,f__$1,map_GT___$1,meta28590));
});

}

return (new cljs.core.async.t28589(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t28595 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28595 = (function (ch,p,filter_GT_,meta28596){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28596 = meta28596;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28595.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28595.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28595.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28595.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28595.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28595.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28595.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28597){
var self__ = this;
var _28597__$1 = this;
return self__.meta28596;
});

cljs.core.async.t28595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28597,meta28596__$1){
var self__ = this;
var _28597__$1 = this;
return (new cljs.core.async.t28595(self__.ch,self__.p,self__.filter_GT_,meta28596__$1));
});

cljs.core.async.t28595.cljs$lang$type = true;

cljs.core.async.t28595.cljs$lang$ctorStr = "cljs.core.async/t28595";

cljs.core.async.t28595.cljs$lang$ctorPrWriter = (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"cljs.core.async/t28595");
});

cljs.core.async.__GT_t28595 = (function __GT_t28595(ch__$1,p__$1,filter_GT___$1,meta28596){
return (new cljs.core.async.t28595(ch__$1,p__$1,filter_GT___$1,meta28596));
});

}

return (new cljs.core.async.t28595(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__15819__auto___28680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___28680,out){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___28680,out){
return (function (state_28659){
var state_val_28660 = (state_28659[(1)]);
if((state_val_28660 === (7))){
var inst_28655 = (state_28659[(2)]);
var state_28659__$1 = state_28659;
var statearr_28661_28681 = state_28659__$1;
(statearr_28661_28681[(2)] = inst_28655);

(statearr_28661_28681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28660 === (1))){
var state_28659__$1 = state_28659;
var statearr_28662_28682 = state_28659__$1;
(statearr_28662_28682[(2)] = null);

(statearr_28662_28682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28660 === (4))){
var inst_28641 = (state_28659[(7)]);
var inst_28641__$1 = (state_28659[(2)]);
var inst_28642 = (inst_28641__$1 == null);
var state_28659__$1 = (function (){var statearr_28663 = state_28659;
(statearr_28663[(7)] = inst_28641__$1);

return statearr_28663;
})();
if(cljs.core.truth_(inst_28642)){
var statearr_28664_28683 = state_28659__$1;
(statearr_28664_28683[(1)] = (5));

} else {
var statearr_28665_28684 = state_28659__$1;
(statearr_28665_28684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28660 === (6))){
var inst_28641 = (state_28659[(7)]);
var inst_28646 = p.call(null,inst_28641);
var state_28659__$1 = state_28659;
if(cljs.core.truth_(inst_28646)){
var statearr_28666_28685 = state_28659__$1;
(statearr_28666_28685[(1)] = (8));

} else {
var statearr_28667_28686 = state_28659__$1;
(statearr_28667_28686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28660 === (3))){
var inst_28657 = (state_28659[(2)]);
var state_28659__$1 = state_28659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28659__$1,inst_28657);
} else {
if((state_val_28660 === (2))){
var state_28659__$1 = state_28659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28659__$1,(4),ch);
} else {
if((state_val_28660 === (11))){
var inst_28649 = (state_28659[(2)]);
var state_28659__$1 = state_28659;
var statearr_28668_28687 = state_28659__$1;
(statearr_28668_28687[(2)] = inst_28649);

(statearr_28668_28687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28660 === (9))){
var state_28659__$1 = state_28659;
var statearr_28669_28688 = state_28659__$1;
(statearr_28669_28688[(2)] = null);

(statearr_28669_28688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28660 === (5))){
var inst_28644 = cljs.core.async.close_BANG_.call(null,out);
var state_28659__$1 = state_28659;
var statearr_28670_28689 = state_28659__$1;
(statearr_28670_28689[(2)] = inst_28644);

(statearr_28670_28689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28660 === (10))){
var inst_28652 = (state_28659[(2)]);
var state_28659__$1 = (function (){var statearr_28671 = state_28659;
(statearr_28671[(8)] = inst_28652);

return statearr_28671;
})();
var statearr_28672_28690 = state_28659__$1;
(statearr_28672_28690[(2)] = null);

(statearr_28672_28690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28660 === (8))){
var inst_28641 = (state_28659[(7)]);
var state_28659__$1 = state_28659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28659__$1,(11),out,inst_28641);
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
});})(c__15819__auto___28680,out))
;
return ((function (switch__15763__auto__,c__15819__auto___28680,out){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_28676 = [null,null,null,null,null,null,null,null,null];
(statearr_28676[(0)] = state_machine__15764__auto__);

(statearr_28676[(1)] = (1));

return statearr_28676;
});
var state_machine__15764__auto____1 = (function (state_28659){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_28659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e28677){if((e28677 instanceof Object)){
var ex__15767__auto__ = e28677;
var statearr_28678_28691 = state_28659;
(statearr_28678_28691[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28692 = state_28659;
state_28659 = G__28692;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_28659){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_28659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___28680,out))
})();
var state__15821__auto__ = (function (){var statearr_28679 = f__15820__auto__.call(null);
(statearr_28679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___28680);

return statearr_28679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___28680,out))
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
var c__15819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto__){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto__){
return (function (state_28858){
var state_val_28859 = (state_28858[(1)]);
if((state_val_28859 === (7))){
var inst_28854 = (state_28858[(2)]);
var state_28858__$1 = state_28858;
var statearr_28860_28901 = state_28858__$1;
(statearr_28860_28901[(2)] = inst_28854);

(statearr_28860_28901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (20))){
var inst_28824 = (state_28858[(7)]);
var inst_28835 = (state_28858[(2)]);
var inst_28836 = cljs.core.next.call(null,inst_28824);
var inst_28810 = inst_28836;
var inst_28811 = null;
var inst_28812 = (0);
var inst_28813 = (0);
var state_28858__$1 = (function (){var statearr_28861 = state_28858;
(statearr_28861[(8)] = inst_28812);

(statearr_28861[(9)] = inst_28813);

(statearr_28861[(10)] = inst_28811);

(statearr_28861[(11)] = inst_28835);

(statearr_28861[(12)] = inst_28810);

return statearr_28861;
})();
var statearr_28862_28902 = state_28858__$1;
(statearr_28862_28902[(2)] = null);

(statearr_28862_28902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (1))){
var state_28858__$1 = state_28858;
var statearr_28863_28903 = state_28858__$1;
(statearr_28863_28903[(2)] = null);

(statearr_28863_28903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (4))){
var inst_28799 = (state_28858[(13)]);
var inst_28799__$1 = (state_28858[(2)]);
var inst_28800 = (inst_28799__$1 == null);
var state_28858__$1 = (function (){var statearr_28864 = state_28858;
(statearr_28864[(13)] = inst_28799__$1);

return statearr_28864;
})();
if(cljs.core.truth_(inst_28800)){
var statearr_28865_28904 = state_28858__$1;
(statearr_28865_28904[(1)] = (5));

} else {
var statearr_28866_28905 = state_28858__$1;
(statearr_28866_28905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (15))){
var state_28858__$1 = state_28858;
var statearr_28870_28906 = state_28858__$1;
(statearr_28870_28906[(2)] = null);

(statearr_28870_28906[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (21))){
var state_28858__$1 = state_28858;
var statearr_28871_28907 = state_28858__$1;
(statearr_28871_28907[(2)] = null);

(statearr_28871_28907[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (13))){
var inst_28812 = (state_28858[(8)]);
var inst_28813 = (state_28858[(9)]);
var inst_28811 = (state_28858[(10)]);
var inst_28810 = (state_28858[(12)]);
var inst_28820 = (state_28858[(2)]);
var inst_28821 = (inst_28813 + (1));
var tmp28867 = inst_28812;
var tmp28868 = inst_28811;
var tmp28869 = inst_28810;
var inst_28810__$1 = tmp28869;
var inst_28811__$1 = tmp28868;
var inst_28812__$1 = tmp28867;
var inst_28813__$1 = inst_28821;
var state_28858__$1 = (function (){var statearr_28872 = state_28858;
(statearr_28872[(8)] = inst_28812__$1);

(statearr_28872[(9)] = inst_28813__$1);

(statearr_28872[(10)] = inst_28811__$1);

(statearr_28872[(12)] = inst_28810__$1);

(statearr_28872[(14)] = inst_28820);

return statearr_28872;
})();
var statearr_28873_28908 = state_28858__$1;
(statearr_28873_28908[(2)] = null);

(statearr_28873_28908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (22))){
var state_28858__$1 = state_28858;
var statearr_28874_28909 = state_28858__$1;
(statearr_28874_28909[(2)] = null);

(statearr_28874_28909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (6))){
var inst_28799 = (state_28858[(13)]);
var inst_28808 = f.call(null,inst_28799);
var inst_28809 = cljs.core.seq.call(null,inst_28808);
var inst_28810 = inst_28809;
var inst_28811 = null;
var inst_28812 = (0);
var inst_28813 = (0);
var state_28858__$1 = (function (){var statearr_28875 = state_28858;
(statearr_28875[(8)] = inst_28812);

(statearr_28875[(9)] = inst_28813);

(statearr_28875[(10)] = inst_28811);

(statearr_28875[(12)] = inst_28810);

return statearr_28875;
})();
var statearr_28876_28910 = state_28858__$1;
(statearr_28876_28910[(2)] = null);

(statearr_28876_28910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (17))){
var inst_28824 = (state_28858[(7)]);
var inst_28828 = cljs.core.chunk_first.call(null,inst_28824);
var inst_28829 = cljs.core.chunk_rest.call(null,inst_28824);
var inst_28830 = cljs.core.count.call(null,inst_28828);
var inst_28810 = inst_28829;
var inst_28811 = inst_28828;
var inst_28812 = inst_28830;
var inst_28813 = (0);
var state_28858__$1 = (function (){var statearr_28877 = state_28858;
(statearr_28877[(8)] = inst_28812);

(statearr_28877[(9)] = inst_28813);

(statearr_28877[(10)] = inst_28811);

(statearr_28877[(12)] = inst_28810);

return statearr_28877;
})();
var statearr_28878_28911 = state_28858__$1;
(statearr_28878_28911[(2)] = null);

(statearr_28878_28911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (3))){
var inst_28856 = (state_28858[(2)]);
var state_28858__$1 = state_28858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28858__$1,inst_28856);
} else {
if((state_val_28859 === (12))){
var inst_28844 = (state_28858[(2)]);
var state_28858__$1 = state_28858;
var statearr_28879_28912 = state_28858__$1;
(statearr_28879_28912[(2)] = inst_28844);

(statearr_28879_28912[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (2))){
var state_28858__$1 = state_28858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28858__$1,(4),in$);
} else {
if((state_val_28859 === (23))){
var inst_28852 = (state_28858[(2)]);
var state_28858__$1 = state_28858;
var statearr_28880_28913 = state_28858__$1;
(statearr_28880_28913[(2)] = inst_28852);

(statearr_28880_28913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (19))){
var inst_28839 = (state_28858[(2)]);
var state_28858__$1 = state_28858;
var statearr_28881_28914 = state_28858__$1;
(statearr_28881_28914[(2)] = inst_28839);

(statearr_28881_28914[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (11))){
var inst_28824 = (state_28858[(7)]);
var inst_28810 = (state_28858[(12)]);
var inst_28824__$1 = cljs.core.seq.call(null,inst_28810);
var state_28858__$1 = (function (){var statearr_28882 = state_28858;
(statearr_28882[(7)] = inst_28824__$1);

return statearr_28882;
})();
if(inst_28824__$1){
var statearr_28883_28915 = state_28858__$1;
(statearr_28883_28915[(1)] = (14));

} else {
var statearr_28884_28916 = state_28858__$1;
(statearr_28884_28916[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (9))){
var inst_28846 = (state_28858[(2)]);
var inst_28847 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28858__$1 = (function (){var statearr_28885 = state_28858;
(statearr_28885[(15)] = inst_28846);

return statearr_28885;
})();
if(cljs.core.truth_(inst_28847)){
var statearr_28886_28917 = state_28858__$1;
(statearr_28886_28917[(1)] = (21));

} else {
var statearr_28887_28918 = state_28858__$1;
(statearr_28887_28918[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (5))){
var inst_28802 = cljs.core.async.close_BANG_.call(null,out);
var state_28858__$1 = state_28858;
var statearr_28888_28919 = state_28858__$1;
(statearr_28888_28919[(2)] = inst_28802);

(statearr_28888_28919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (14))){
var inst_28824 = (state_28858[(7)]);
var inst_28826 = cljs.core.chunked_seq_QMARK_.call(null,inst_28824);
var state_28858__$1 = state_28858;
if(inst_28826){
var statearr_28889_28920 = state_28858__$1;
(statearr_28889_28920[(1)] = (17));

} else {
var statearr_28890_28921 = state_28858__$1;
(statearr_28890_28921[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (16))){
var inst_28842 = (state_28858[(2)]);
var state_28858__$1 = state_28858;
var statearr_28891_28922 = state_28858__$1;
(statearr_28891_28922[(2)] = inst_28842);

(statearr_28891_28922[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (10))){
var inst_28813 = (state_28858[(9)]);
var inst_28811 = (state_28858[(10)]);
var inst_28818 = cljs.core._nth.call(null,inst_28811,inst_28813);
var state_28858__$1 = state_28858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28858__$1,(13),out,inst_28818);
} else {
if((state_val_28859 === (18))){
var inst_28824 = (state_28858[(7)]);
var inst_28833 = cljs.core.first.call(null,inst_28824);
var state_28858__$1 = state_28858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28858__$1,(20),out,inst_28833);
} else {
if((state_val_28859 === (8))){
var inst_28812 = (state_28858[(8)]);
var inst_28813 = (state_28858[(9)]);
var inst_28815 = (inst_28813 < inst_28812);
var inst_28816 = inst_28815;
var state_28858__$1 = state_28858;
if(cljs.core.truth_(inst_28816)){
var statearr_28892_28923 = state_28858__$1;
(statearr_28892_28923[(1)] = (10));

} else {
var statearr_28893_28924 = state_28858__$1;
(statearr_28893_28924[(1)] = (11));

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
});})(c__15819__auto__))
;
return ((function (switch__15763__auto__,c__15819__auto__){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_28897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28897[(0)] = state_machine__15764__auto__);

(statearr_28897[(1)] = (1));

return statearr_28897;
});
var state_machine__15764__auto____1 = (function (state_28858){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_28858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e28898){if((e28898 instanceof Object)){
var ex__15767__auto__ = e28898;
var statearr_28899_28925 = state_28858;
(statearr_28899_28925[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28926 = state_28858;
state_28858 = G__28926;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_28858){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_28858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto__))
})();
var state__15821__auto__ = (function (){var statearr_28900 = f__15820__auto__.call(null);
(statearr_28900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto__);

return statearr_28900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto__))
);

return c__15819__auto__;
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
var c__15819__auto___29023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___29023,out){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___29023,out){
return (function (state_28998){
var state_val_28999 = (state_28998[(1)]);
if((state_val_28999 === (7))){
var inst_28993 = (state_28998[(2)]);
var state_28998__$1 = state_28998;
var statearr_29000_29024 = state_28998__$1;
(statearr_29000_29024[(2)] = inst_28993);

(statearr_29000_29024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28999 === (1))){
var inst_28975 = null;
var state_28998__$1 = (function (){var statearr_29001 = state_28998;
(statearr_29001[(7)] = inst_28975);

return statearr_29001;
})();
var statearr_29002_29025 = state_28998__$1;
(statearr_29002_29025[(2)] = null);

(statearr_29002_29025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28999 === (4))){
var inst_28978 = (state_28998[(8)]);
var inst_28978__$1 = (state_28998[(2)]);
var inst_28979 = (inst_28978__$1 == null);
var inst_28980 = cljs.core.not.call(null,inst_28979);
var state_28998__$1 = (function (){var statearr_29003 = state_28998;
(statearr_29003[(8)] = inst_28978__$1);

return statearr_29003;
})();
if(inst_28980){
var statearr_29004_29026 = state_28998__$1;
(statearr_29004_29026[(1)] = (5));

} else {
var statearr_29005_29027 = state_28998__$1;
(statearr_29005_29027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28999 === (6))){
var state_28998__$1 = state_28998;
var statearr_29006_29028 = state_28998__$1;
(statearr_29006_29028[(2)] = null);

(statearr_29006_29028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28999 === (3))){
var inst_28995 = (state_28998[(2)]);
var inst_28996 = cljs.core.async.close_BANG_.call(null,out);
var state_28998__$1 = (function (){var statearr_29007 = state_28998;
(statearr_29007[(9)] = inst_28995);

return statearr_29007;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28998__$1,inst_28996);
} else {
if((state_val_28999 === (2))){
var state_28998__$1 = state_28998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28998__$1,(4),ch);
} else {
if((state_val_28999 === (11))){
var inst_28978 = (state_28998[(8)]);
var inst_28987 = (state_28998[(2)]);
var inst_28975 = inst_28978;
var state_28998__$1 = (function (){var statearr_29008 = state_28998;
(statearr_29008[(7)] = inst_28975);

(statearr_29008[(10)] = inst_28987);

return statearr_29008;
})();
var statearr_29009_29029 = state_28998__$1;
(statearr_29009_29029[(2)] = null);

(statearr_29009_29029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28999 === (9))){
var inst_28978 = (state_28998[(8)]);
var state_28998__$1 = state_28998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28998__$1,(11),out,inst_28978);
} else {
if((state_val_28999 === (5))){
var inst_28978 = (state_28998[(8)]);
var inst_28975 = (state_28998[(7)]);
var inst_28982 = cljs.core._EQ_.call(null,inst_28978,inst_28975);
var state_28998__$1 = state_28998;
if(inst_28982){
var statearr_29011_29030 = state_28998__$1;
(statearr_29011_29030[(1)] = (8));

} else {
var statearr_29012_29031 = state_28998__$1;
(statearr_29012_29031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28999 === (10))){
var inst_28990 = (state_28998[(2)]);
var state_28998__$1 = state_28998;
var statearr_29013_29032 = state_28998__$1;
(statearr_29013_29032[(2)] = inst_28990);

(statearr_29013_29032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28999 === (8))){
var inst_28975 = (state_28998[(7)]);
var tmp29010 = inst_28975;
var inst_28975__$1 = tmp29010;
var state_28998__$1 = (function (){var statearr_29014 = state_28998;
(statearr_29014[(7)] = inst_28975__$1);

return statearr_29014;
})();
var statearr_29015_29033 = state_28998__$1;
(statearr_29015_29033[(2)] = null);

(statearr_29015_29033[(1)] = (2));


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
});})(c__15819__auto___29023,out))
;
return ((function (switch__15763__auto__,c__15819__auto___29023,out){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_29019 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29019[(0)] = state_machine__15764__auto__);

(statearr_29019[(1)] = (1));

return statearr_29019;
});
var state_machine__15764__auto____1 = (function (state_28998){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_28998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e29020){if((e29020 instanceof Object)){
var ex__15767__auto__ = e29020;
var statearr_29021_29034 = state_28998;
(statearr_29021_29034[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29035 = state_28998;
state_28998 = G__29035;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_28998){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_28998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___29023,out))
})();
var state__15821__auto__ = (function (){var statearr_29022 = f__15820__auto__.call(null);
(statearr_29022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___29023);

return statearr_29022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___29023,out))
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
var c__15819__auto___29170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___29170,out){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___29170,out){
return (function (state_29140){
var state_val_29141 = (state_29140[(1)]);
if((state_val_29141 === (7))){
var inst_29136 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
var statearr_29142_29171 = state_29140__$1;
(statearr_29142_29171[(2)] = inst_29136);

(statearr_29142_29171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (1))){
var inst_29103 = (new Array(n));
var inst_29104 = inst_29103;
var inst_29105 = (0);
var state_29140__$1 = (function (){var statearr_29143 = state_29140;
(statearr_29143[(7)] = inst_29105);

(statearr_29143[(8)] = inst_29104);

return statearr_29143;
})();
var statearr_29144_29172 = state_29140__$1;
(statearr_29144_29172[(2)] = null);

(statearr_29144_29172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (4))){
var inst_29108 = (state_29140[(9)]);
var inst_29108__$1 = (state_29140[(2)]);
var inst_29109 = (inst_29108__$1 == null);
var inst_29110 = cljs.core.not.call(null,inst_29109);
var state_29140__$1 = (function (){var statearr_29145 = state_29140;
(statearr_29145[(9)] = inst_29108__$1);

return statearr_29145;
})();
if(inst_29110){
var statearr_29146_29173 = state_29140__$1;
(statearr_29146_29173[(1)] = (5));

} else {
var statearr_29147_29174 = state_29140__$1;
(statearr_29147_29174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (15))){
var inst_29130 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
var statearr_29148_29175 = state_29140__$1;
(statearr_29148_29175[(2)] = inst_29130);

(statearr_29148_29175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (13))){
var state_29140__$1 = state_29140;
var statearr_29149_29176 = state_29140__$1;
(statearr_29149_29176[(2)] = null);

(statearr_29149_29176[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (6))){
var inst_29105 = (state_29140[(7)]);
var inst_29126 = (inst_29105 > (0));
var state_29140__$1 = state_29140;
if(cljs.core.truth_(inst_29126)){
var statearr_29150_29177 = state_29140__$1;
(statearr_29150_29177[(1)] = (12));

} else {
var statearr_29151_29178 = state_29140__$1;
(statearr_29151_29178[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (3))){
var inst_29138 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29140__$1,inst_29138);
} else {
if((state_val_29141 === (12))){
var inst_29104 = (state_29140[(8)]);
var inst_29128 = cljs.core.vec.call(null,inst_29104);
var state_29140__$1 = state_29140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29140__$1,(15),out,inst_29128);
} else {
if((state_val_29141 === (2))){
var state_29140__$1 = state_29140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29140__$1,(4),ch);
} else {
if((state_val_29141 === (11))){
var inst_29120 = (state_29140[(2)]);
var inst_29121 = (new Array(n));
var inst_29104 = inst_29121;
var inst_29105 = (0);
var state_29140__$1 = (function (){var statearr_29152 = state_29140;
(statearr_29152[(7)] = inst_29105);

(statearr_29152[(10)] = inst_29120);

(statearr_29152[(8)] = inst_29104);

return statearr_29152;
})();
var statearr_29153_29179 = state_29140__$1;
(statearr_29153_29179[(2)] = null);

(statearr_29153_29179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (9))){
var inst_29104 = (state_29140[(8)]);
var inst_29118 = cljs.core.vec.call(null,inst_29104);
var state_29140__$1 = state_29140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29140__$1,(11),out,inst_29118);
} else {
if((state_val_29141 === (5))){
var inst_29105 = (state_29140[(7)]);
var inst_29113 = (state_29140[(11)]);
var inst_29108 = (state_29140[(9)]);
var inst_29104 = (state_29140[(8)]);
var inst_29112 = (inst_29104[inst_29105] = inst_29108);
var inst_29113__$1 = (inst_29105 + (1));
var inst_29114 = (inst_29113__$1 < n);
var state_29140__$1 = (function (){var statearr_29154 = state_29140;
(statearr_29154[(11)] = inst_29113__$1);

(statearr_29154[(12)] = inst_29112);

return statearr_29154;
})();
if(cljs.core.truth_(inst_29114)){
var statearr_29155_29180 = state_29140__$1;
(statearr_29155_29180[(1)] = (8));

} else {
var statearr_29156_29181 = state_29140__$1;
(statearr_29156_29181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (14))){
var inst_29133 = (state_29140[(2)]);
var inst_29134 = cljs.core.async.close_BANG_.call(null,out);
var state_29140__$1 = (function (){var statearr_29158 = state_29140;
(statearr_29158[(13)] = inst_29133);

return statearr_29158;
})();
var statearr_29159_29182 = state_29140__$1;
(statearr_29159_29182[(2)] = inst_29134);

(statearr_29159_29182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (10))){
var inst_29124 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
var statearr_29160_29183 = state_29140__$1;
(statearr_29160_29183[(2)] = inst_29124);

(statearr_29160_29183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (8))){
var inst_29113 = (state_29140[(11)]);
var inst_29104 = (state_29140[(8)]);
var tmp29157 = inst_29104;
var inst_29104__$1 = tmp29157;
var inst_29105 = inst_29113;
var state_29140__$1 = (function (){var statearr_29161 = state_29140;
(statearr_29161[(7)] = inst_29105);

(statearr_29161[(8)] = inst_29104__$1);

return statearr_29161;
})();
var statearr_29162_29184 = state_29140__$1;
(statearr_29162_29184[(2)] = null);

(statearr_29162_29184[(1)] = (2));


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
});})(c__15819__auto___29170,out))
;
return ((function (switch__15763__auto__,c__15819__auto___29170,out){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_29166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29166[(0)] = state_machine__15764__auto__);

(statearr_29166[(1)] = (1));

return statearr_29166;
});
var state_machine__15764__auto____1 = (function (state_29140){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_29140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e29167){if((e29167 instanceof Object)){
var ex__15767__auto__ = e29167;
var statearr_29168_29185 = state_29140;
(statearr_29168_29185[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29186 = state_29140;
state_29140 = G__29186;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_29140){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_29140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___29170,out))
})();
var state__15821__auto__ = (function (){var statearr_29169 = f__15820__auto__.call(null);
(statearr_29169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___29170);

return statearr_29169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___29170,out))
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
var c__15819__auto___29329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___29329,out){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___29329,out){
return (function (state_29299){
var state_val_29300 = (state_29299[(1)]);
if((state_val_29300 === (7))){
var inst_29295 = (state_29299[(2)]);
var state_29299__$1 = state_29299;
var statearr_29301_29330 = state_29299__$1;
(statearr_29301_29330[(2)] = inst_29295);

(statearr_29301_29330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29300 === (1))){
var inst_29258 = [];
var inst_29259 = inst_29258;
var inst_29260 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29299__$1 = (function (){var statearr_29302 = state_29299;
(statearr_29302[(7)] = inst_29260);

(statearr_29302[(8)] = inst_29259);

return statearr_29302;
})();
var statearr_29303_29331 = state_29299__$1;
(statearr_29303_29331[(2)] = null);

(statearr_29303_29331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29300 === (4))){
var inst_29263 = (state_29299[(9)]);
var inst_29263__$1 = (state_29299[(2)]);
var inst_29264 = (inst_29263__$1 == null);
var inst_29265 = cljs.core.not.call(null,inst_29264);
var state_29299__$1 = (function (){var statearr_29304 = state_29299;
(statearr_29304[(9)] = inst_29263__$1);

return statearr_29304;
})();
if(inst_29265){
var statearr_29305_29332 = state_29299__$1;
(statearr_29305_29332[(1)] = (5));

} else {
var statearr_29306_29333 = state_29299__$1;
(statearr_29306_29333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29300 === (15))){
var inst_29289 = (state_29299[(2)]);
var state_29299__$1 = state_29299;
var statearr_29307_29334 = state_29299__$1;
(statearr_29307_29334[(2)] = inst_29289);

(statearr_29307_29334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29300 === (13))){
var state_29299__$1 = state_29299;
var statearr_29308_29335 = state_29299__$1;
(statearr_29308_29335[(2)] = null);

(statearr_29308_29335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29300 === (6))){
var inst_29259 = (state_29299[(8)]);
var inst_29284 = inst_29259.length;
var inst_29285 = (inst_29284 > (0));
var state_29299__$1 = state_29299;
if(cljs.core.truth_(inst_29285)){
var statearr_29309_29336 = state_29299__$1;
(statearr_29309_29336[(1)] = (12));

} else {
var statearr_29310_29337 = state_29299__$1;
(statearr_29310_29337[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29300 === (3))){
var inst_29297 = (state_29299[(2)]);
var state_29299__$1 = state_29299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29299__$1,inst_29297);
} else {
if((state_val_29300 === (12))){
var inst_29259 = (state_29299[(8)]);
var inst_29287 = cljs.core.vec.call(null,inst_29259);
var state_29299__$1 = state_29299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29299__$1,(15),out,inst_29287);
} else {
if((state_val_29300 === (2))){
var state_29299__$1 = state_29299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29299__$1,(4),ch);
} else {
if((state_val_29300 === (11))){
var inst_29267 = (state_29299[(10)]);
var inst_29263 = (state_29299[(9)]);
var inst_29277 = (state_29299[(2)]);
var inst_29278 = [];
var inst_29279 = inst_29278.push(inst_29263);
var inst_29259 = inst_29278;
var inst_29260 = inst_29267;
var state_29299__$1 = (function (){var statearr_29311 = state_29299;
(statearr_29311[(7)] = inst_29260);

(statearr_29311[(11)] = inst_29279);

(statearr_29311[(12)] = inst_29277);

(statearr_29311[(8)] = inst_29259);

return statearr_29311;
})();
var statearr_29312_29338 = state_29299__$1;
(statearr_29312_29338[(2)] = null);

(statearr_29312_29338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29300 === (9))){
var inst_29259 = (state_29299[(8)]);
var inst_29275 = cljs.core.vec.call(null,inst_29259);
var state_29299__$1 = state_29299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29299__$1,(11),out,inst_29275);
} else {
if((state_val_29300 === (5))){
var inst_29267 = (state_29299[(10)]);
var inst_29260 = (state_29299[(7)]);
var inst_29263 = (state_29299[(9)]);
var inst_29267__$1 = f.call(null,inst_29263);
var inst_29268 = cljs.core._EQ_.call(null,inst_29267__$1,inst_29260);
var inst_29269 = cljs.core.keyword_identical_QMARK_.call(null,inst_29260,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29270 = (inst_29268) || (inst_29269);
var state_29299__$1 = (function (){var statearr_29313 = state_29299;
(statearr_29313[(10)] = inst_29267__$1);

return statearr_29313;
})();
if(cljs.core.truth_(inst_29270)){
var statearr_29314_29339 = state_29299__$1;
(statearr_29314_29339[(1)] = (8));

} else {
var statearr_29315_29340 = state_29299__$1;
(statearr_29315_29340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29300 === (14))){
var inst_29292 = (state_29299[(2)]);
var inst_29293 = cljs.core.async.close_BANG_.call(null,out);
var state_29299__$1 = (function (){var statearr_29317 = state_29299;
(statearr_29317[(13)] = inst_29292);

return statearr_29317;
})();
var statearr_29318_29341 = state_29299__$1;
(statearr_29318_29341[(2)] = inst_29293);

(statearr_29318_29341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29300 === (10))){
var inst_29282 = (state_29299[(2)]);
var state_29299__$1 = state_29299;
var statearr_29319_29342 = state_29299__$1;
(statearr_29319_29342[(2)] = inst_29282);

(statearr_29319_29342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29300 === (8))){
var inst_29267 = (state_29299[(10)]);
var inst_29263 = (state_29299[(9)]);
var inst_29259 = (state_29299[(8)]);
var inst_29272 = inst_29259.push(inst_29263);
var tmp29316 = inst_29259;
var inst_29259__$1 = tmp29316;
var inst_29260 = inst_29267;
var state_29299__$1 = (function (){var statearr_29320 = state_29299;
(statearr_29320[(7)] = inst_29260);

(statearr_29320[(14)] = inst_29272);

(statearr_29320[(8)] = inst_29259__$1);

return statearr_29320;
})();
var statearr_29321_29343 = state_29299__$1;
(statearr_29321_29343[(2)] = null);

(statearr_29321_29343[(1)] = (2));


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
});})(c__15819__auto___29329,out))
;
return ((function (switch__15763__auto__,c__15819__auto___29329,out){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_29325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29325[(0)] = state_machine__15764__auto__);

(statearr_29325[(1)] = (1));

return statearr_29325;
});
var state_machine__15764__auto____1 = (function (state_29299){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_29299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e29326){if((e29326 instanceof Object)){
var ex__15767__auto__ = e29326;
var statearr_29327_29344 = state_29299;
(statearr_29327_29344[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29345 = state_29299;
state_29299 = G__29345;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_29299){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_29299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___29329,out))
})();
var state__15821__auto__ = (function (){var statearr_29328 = f__15820__auto__.call(null);
(statearr_29328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___29329);

return statearr_29328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___29329,out))
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