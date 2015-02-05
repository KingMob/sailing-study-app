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
if(typeof cljs.core.async.t25323 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25323 = (function (f,fn_handler,meta25324){
this.f = f;
this.fn_handler = fn_handler;
this.meta25324 = meta25324;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25323.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25323.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25323.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25325){
var self__ = this;
var _25325__$1 = this;
return self__.meta25324;
});

cljs.core.async.t25323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25325,meta25324__$1){
var self__ = this;
var _25325__$1 = this;
return (new cljs.core.async.t25323(self__.f,self__.fn_handler,meta25324__$1));
});

cljs.core.async.t25323.cljs$lang$type = true;

cljs.core.async.t25323.cljs$lang$ctorStr = "cljs.core.async/t25323";

cljs.core.async.t25323.cljs$lang$ctorPrWriter = (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"cljs.core.async/t25323");
});

cljs.core.async.__GT_t25323 = (function __GT_t25323(f__$1,fn_handler__$1,meta25324){
return (new cljs.core.async.t25323(f__$1,fn_handler__$1,meta25324));
});

}

return (new cljs.core.async.t25323(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__25327 = buff;
if(G__25327){
var bit__13857__auto__ = null;
if(cljs.core.truth_((function (){var or__13176__auto__ = bit__13857__auto__;
if(cljs.core.truth_(or__13176__auto__)){
return or__13176__auto__;
} else {
return G__25327.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25327.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25327);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25327);
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
var val_25328 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25328);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25328,ret){
return (function (){
return fn1.call(null,val_25328);
});})(val_25328,ret))
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
var n__14063__auto___25329 = n;
var x_25330 = (0);
while(true){
if((x_25330 < n__14063__auto___25329)){
(a[x_25330] = (0));

var G__25331 = (x_25330 + (1));
x_25330 = G__25331;
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

var G__25332 = (i + (1));
i = G__25332;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25336 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25336 = (function (flag,alt_flag,meta25337){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25337 = meta25337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25336.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25336.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25336.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25336.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25338){
var self__ = this;
var _25338__$1 = this;
return self__.meta25337;
});})(flag))
;

cljs.core.async.t25336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25338,meta25337__$1){
var self__ = this;
var _25338__$1 = this;
return (new cljs.core.async.t25336(self__.flag,self__.alt_flag,meta25337__$1));
});})(flag))
;

cljs.core.async.t25336.cljs$lang$type = true;

cljs.core.async.t25336.cljs$lang$ctorStr = "cljs.core.async/t25336";

cljs.core.async.t25336.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"cljs.core.async/t25336");
});})(flag))
;

cljs.core.async.__GT_t25336 = ((function (flag){
return (function __GT_t25336(flag__$1,alt_flag__$1,meta25337){
return (new cljs.core.async.t25336(flag__$1,alt_flag__$1,meta25337));
});})(flag))
;

}

return (new cljs.core.async.t25336(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t25342 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25342 = (function (cb,flag,alt_handler,meta25343){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25343 = meta25343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25342.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25344){
var self__ = this;
var _25344__$1 = this;
return self__.meta25343;
});

cljs.core.async.t25342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25344,meta25343__$1){
var self__ = this;
var _25344__$1 = this;
return (new cljs.core.async.t25342(self__.cb,self__.flag,self__.alt_handler,meta25343__$1));
});

cljs.core.async.t25342.cljs$lang$type = true;

cljs.core.async.t25342.cljs$lang$ctorStr = "cljs.core.async/t25342";

cljs.core.async.t25342.cljs$lang$ctorPrWriter = (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"cljs.core.async/t25342");
});

cljs.core.async.__GT_t25342 = (function __GT_t25342(cb__$1,flag__$1,alt_handler__$1,meta25343){
return (new cljs.core.async.t25342(cb__$1,flag__$1,alt_handler__$1,meta25343));
});

}

return (new cljs.core.async.t25342(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__25345_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25345_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25346_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25346_SHARP_,port], null));
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
var G__25347 = (i + (1));
i = G__25347;
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
var alts_BANG___delegate = function (ports,p__25348){
var map__25350 = p__25348;
var map__25350__$1 = ((cljs.core.seq_QMARK_.call(null,map__25350))?cljs.core.apply.call(null,cljs.core.hash_map,map__25350):map__25350);
var opts = map__25350__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__25348 = null;
if (arguments.length > 1) {
var G__25351__i = 0, G__25351__a = new Array(arguments.length -  1);
while (G__25351__i < G__25351__a.length) {G__25351__a[G__25351__i] = arguments[G__25351__i + 1]; ++G__25351__i;}
  p__25348 = new cljs.core.IndexedSeq(G__25351__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__25348);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25352){
var ports = cljs.core.first(arglist__25352);
var p__25348 = cljs.core.rest(arglist__25352);
return alts_BANG___delegate(ports,p__25348);
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
var c__15819__auto___25447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___25447){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___25447){
return (function (state_25423){
var state_val_25424 = (state_25423[(1)]);
if((state_val_25424 === (7))){
var inst_25419 = (state_25423[(2)]);
var state_25423__$1 = state_25423;
var statearr_25425_25448 = state_25423__$1;
(statearr_25425_25448[(2)] = inst_25419);

(statearr_25425_25448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (1))){
var state_25423__$1 = state_25423;
var statearr_25426_25449 = state_25423__$1;
(statearr_25426_25449[(2)] = null);

(statearr_25426_25449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (4))){
var inst_25402 = (state_25423[(7)]);
var inst_25402__$1 = (state_25423[(2)]);
var inst_25403 = (inst_25402__$1 == null);
var state_25423__$1 = (function (){var statearr_25427 = state_25423;
(statearr_25427[(7)] = inst_25402__$1);

return statearr_25427;
})();
if(cljs.core.truth_(inst_25403)){
var statearr_25428_25450 = state_25423__$1;
(statearr_25428_25450[(1)] = (5));

} else {
var statearr_25429_25451 = state_25423__$1;
(statearr_25429_25451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (13))){
var state_25423__$1 = state_25423;
var statearr_25430_25452 = state_25423__$1;
(statearr_25430_25452[(2)] = null);

(statearr_25430_25452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (6))){
var inst_25402 = (state_25423[(7)]);
var state_25423__$1 = state_25423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25423__$1,(11),to,inst_25402);
} else {
if((state_val_25424 === (3))){
var inst_25421 = (state_25423[(2)]);
var state_25423__$1 = state_25423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25423__$1,inst_25421);
} else {
if((state_val_25424 === (12))){
var state_25423__$1 = state_25423;
var statearr_25431_25453 = state_25423__$1;
(statearr_25431_25453[(2)] = null);

(statearr_25431_25453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (2))){
var state_25423__$1 = state_25423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25423__$1,(4),from);
} else {
if((state_val_25424 === (11))){
var inst_25412 = (state_25423[(2)]);
var state_25423__$1 = state_25423;
if(cljs.core.truth_(inst_25412)){
var statearr_25432_25454 = state_25423__$1;
(statearr_25432_25454[(1)] = (12));

} else {
var statearr_25433_25455 = state_25423__$1;
(statearr_25433_25455[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (9))){
var state_25423__$1 = state_25423;
var statearr_25434_25456 = state_25423__$1;
(statearr_25434_25456[(2)] = null);

(statearr_25434_25456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (5))){
var state_25423__$1 = state_25423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25435_25457 = state_25423__$1;
(statearr_25435_25457[(1)] = (8));

} else {
var statearr_25436_25458 = state_25423__$1;
(statearr_25436_25458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (14))){
var inst_25417 = (state_25423[(2)]);
var state_25423__$1 = state_25423;
var statearr_25437_25459 = state_25423__$1;
(statearr_25437_25459[(2)] = inst_25417);

(statearr_25437_25459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (10))){
var inst_25409 = (state_25423[(2)]);
var state_25423__$1 = state_25423;
var statearr_25438_25460 = state_25423__$1;
(statearr_25438_25460[(2)] = inst_25409);

(statearr_25438_25460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (8))){
var inst_25406 = cljs.core.async.close_BANG_.call(null,to);
var state_25423__$1 = state_25423;
var statearr_25439_25461 = state_25423__$1;
(statearr_25439_25461[(2)] = inst_25406);

(statearr_25439_25461[(1)] = (10));


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
});})(c__15819__auto___25447))
;
return ((function (switch__15763__auto__,c__15819__auto___25447){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_25443 = [null,null,null,null,null,null,null,null];
(statearr_25443[(0)] = state_machine__15764__auto__);

(statearr_25443[(1)] = (1));

return statearr_25443;
});
var state_machine__15764__auto____1 = (function (state_25423){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_25423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e25444){if((e25444 instanceof Object)){
var ex__15767__auto__ = e25444;
var statearr_25445_25462 = state_25423;
(statearr_25445_25462[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25463 = state_25423;
state_25423 = G__25463;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_25423){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_25423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___25447))
})();
var state__15821__auto__ = (function (){var statearr_25446 = f__15820__auto__.call(null);
(statearr_25446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___25447);

return statearr_25446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___25447))
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
return (function (p__25647){
var vec__25648 = p__25647;
var v = cljs.core.nth.call(null,vec__25648,(0),null);
var p = cljs.core.nth.call(null,vec__25648,(1),null);
var job = vec__25648;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15819__auto___25830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___25830,res,vec__25648,v,p,job,jobs,results){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___25830,res,vec__25648,v,p,job,jobs,results){
return (function (state_25653){
var state_val_25654 = (state_25653[(1)]);
if((state_val_25654 === (2))){
var inst_25650 = (state_25653[(2)]);
var inst_25651 = cljs.core.async.close_BANG_.call(null,res);
var state_25653__$1 = (function (){var statearr_25655 = state_25653;
(statearr_25655[(7)] = inst_25650);

return statearr_25655;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25653__$1,inst_25651);
} else {
if((state_val_25654 === (1))){
var state_25653__$1 = state_25653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25653__$1,(2),res,v);
} else {
return null;
}
}
});})(c__15819__auto___25830,res,vec__25648,v,p,job,jobs,results))
;
return ((function (switch__15763__auto__,c__15819__auto___25830,res,vec__25648,v,p,job,jobs,results){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_25659 = [null,null,null,null,null,null,null,null];
(statearr_25659[(0)] = state_machine__15764__auto__);

(statearr_25659[(1)] = (1));

return statearr_25659;
});
var state_machine__15764__auto____1 = (function (state_25653){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_25653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e25660){if((e25660 instanceof Object)){
var ex__15767__auto__ = e25660;
var statearr_25661_25831 = state_25653;
(statearr_25661_25831[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25832 = state_25653;
state_25653 = G__25832;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_25653){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_25653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___25830,res,vec__25648,v,p,job,jobs,results))
})();
var state__15821__auto__ = (function (){var statearr_25662 = f__15820__auto__.call(null);
(statearr_25662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___25830);

return statearr_25662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___25830,res,vec__25648,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25663){
var vec__25664 = p__25663;
var v = cljs.core.nth.call(null,vec__25664,(0),null);
var p = cljs.core.nth.call(null,vec__25664,(1),null);
var job = vec__25664;
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
var n__14063__auto___25833 = n;
var __25834 = (0);
while(true){
if((__25834 < n__14063__auto___25833)){
var G__25665_25835 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25665_25835) {
case "async":
var c__15819__auto___25837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25834,c__15819__auto___25837,G__25665_25835,n__14063__auto___25833,jobs,results,process,async){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (__25834,c__15819__auto___25837,G__25665_25835,n__14063__auto___25833,jobs,results,process,async){
return (function (state_25678){
var state_val_25679 = (state_25678[(1)]);
if((state_val_25679 === (7))){
var inst_25674 = (state_25678[(2)]);
var state_25678__$1 = state_25678;
var statearr_25680_25838 = state_25678__$1;
(statearr_25680_25838[(2)] = inst_25674);

(statearr_25680_25838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (6))){
var state_25678__$1 = state_25678;
var statearr_25681_25839 = state_25678__$1;
(statearr_25681_25839[(2)] = null);

(statearr_25681_25839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (5))){
var state_25678__$1 = state_25678;
var statearr_25682_25840 = state_25678__$1;
(statearr_25682_25840[(2)] = null);

(statearr_25682_25840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (4))){
var inst_25668 = (state_25678[(2)]);
var inst_25669 = async.call(null,inst_25668);
var state_25678__$1 = state_25678;
if(cljs.core.truth_(inst_25669)){
var statearr_25683_25841 = state_25678__$1;
(statearr_25683_25841[(1)] = (5));

} else {
var statearr_25684_25842 = state_25678__$1;
(statearr_25684_25842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25679 === (3))){
var inst_25676 = (state_25678[(2)]);
var state_25678__$1 = state_25678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25678__$1,inst_25676);
} else {
if((state_val_25679 === (2))){
var state_25678__$1 = state_25678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25678__$1,(4),jobs);
} else {
if((state_val_25679 === (1))){
var state_25678__$1 = state_25678;
var statearr_25685_25843 = state_25678__$1;
(statearr_25685_25843[(2)] = null);

(statearr_25685_25843[(1)] = (2));


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
});})(__25834,c__15819__auto___25837,G__25665_25835,n__14063__auto___25833,jobs,results,process,async))
;
return ((function (__25834,switch__15763__auto__,c__15819__auto___25837,G__25665_25835,n__14063__auto___25833,jobs,results,process,async){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_25689 = [null,null,null,null,null,null,null];
(statearr_25689[(0)] = state_machine__15764__auto__);

(statearr_25689[(1)] = (1));

return statearr_25689;
});
var state_machine__15764__auto____1 = (function (state_25678){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_25678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e25690){if((e25690 instanceof Object)){
var ex__15767__auto__ = e25690;
var statearr_25691_25844 = state_25678;
(statearr_25691_25844[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25845 = state_25678;
state_25678 = G__25845;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_25678){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_25678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(__25834,switch__15763__auto__,c__15819__auto___25837,G__25665_25835,n__14063__auto___25833,jobs,results,process,async))
})();
var state__15821__auto__ = (function (){var statearr_25692 = f__15820__auto__.call(null);
(statearr_25692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___25837);

return statearr_25692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(__25834,c__15819__auto___25837,G__25665_25835,n__14063__auto___25833,jobs,results,process,async))
);


break;
case "compute":
var c__15819__auto___25846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25834,c__15819__auto___25846,G__25665_25835,n__14063__auto___25833,jobs,results,process,async){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (__25834,c__15819__auto___25846,G__25665_25835,n__14063__auto___25833,jobs,results,process,async){
return (function (state_25705){
var state_val_25706 = (state_25705[(1)]);
if((state_val_25706 === (7))){
var inst_25701 = (state_25705[(2)]);
var state_25705__$1 = state_25705;
var statearr_25707_25847 = state_25705__$1;
(statearr_25707_25847[(2)] = inst_25701);

(statearr_25707_25847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25706 === (6))){
var state_25705__$1 = state_25705;
var statearr_25708_25848 = state_25705__$1;
(statearr_25708_25848[(2)] = null);

(statearr_25708_25848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25706 === (5))){
var state_25705__$1 = state_25705;
var statearr_25709_25849 = state_25705__$1;
(statearr_25709_25849[(2)] = null);

(statearr_25709_25849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25706 === (4))){
var inst_25695 = (state_25705[(2)]);
var inst_25696 = process.call(null,inst_25695);
var state_25705__$1 = state_25705;
if(cljs.core.truth_(inst_25696)){
var statearr_25710_25850 = state_25705__$1;
(statearr_25710_25850[(1)] = (5));

} else {
var statearr_25711_25851 = state_25705__$1;
(statearr_25711_25851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25706 === (3))){
var inst_25703 = (state_25705[(2)]);
var state_25705__$1 = state_25705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25705__$1,inst_25703);
} else {
if((state_val_25706 === (2))){
var state_25705__$1 = state_25705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25705__$1,(4),jobs);
} else {
if((state_val_25706 === (1))){
var state_25705__$1 = state_25705;
var statearr_25712_25852 = state_25705__$1;
(statearr_25712_25852[(2)] = null);

(statearr_25712_25852[(1)] = (2));


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
});})(__25834,c__15819__auto___25846,G__25665_25835,n__14063__auto___25833,jobs,results,process,async))
;
return ((function (__25834,switch__15763__auto__,c__15819__auto___25846,G__25665_25835,n__14063__auto___25833,jobs,results,process,async){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_25716 = [null,null,null,null,null,null,null];
(statearr_25716[(0)] = state_machine__15764__auto__);

(statearr_25716[(1)] = (1));

return statearr_25716;
});
var state_machine__15764__auto____1 = (function (state_25705){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_25705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e25717){if((e25717 instanceof Object)){
var ex__15767__auto__ = e25717;
var statearr_25718_25853 = state_25705;
(statearr_25718_25853[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25854 = state_25705;
state_25705 = G__25854;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_25705){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_25705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(__25834,switch__15763__auto__,c__15819__auto___25846,G__25665_25835,n__14063__auto___25833,jobs,results,process,async))
})();
var state__15821__auto__ = (function (){var statearr_25719 = f__15820__auto__.call(null);
(statearr_25719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___25846);

return statearr_25719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(__25834,c__15819__auto___25846,G__25665_25835,n__14063__auto___25833,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25855 = (__25834 + (1));
__25834 = G__25855;
continue;
} else {
}
break;
}

var c__15819__auto___25856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___25856,jobs,results,process,async){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___25856,jobs,results,process,async){
return (function (state_25741){
var state_val_25742 = (state_25741[(1)]);
if((state_val_25742 === (9))){
var inst_25734 = (state_25741[(2)]);
var state_25741__$1 = (function (){var statearr_25743 = state_25741;
(statearr_25743[(7)] = inst_25734);

return statearr_25743;
})();
var statearr_25744_25857 = state_25741__$1;
(statearr_25744_25857[(2)] = null);

(statearr_25744_25857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25742 === (8))){
var inst_25727 = (state_25741[(8)]);
var inst_25732 = (state_25741[(2)]);
var state_25741__$1 = (function (){var statearr_25745 = state_25741;
(statearr_25745[(9)] = inst_25732);

return statearr_25745;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25741__$1,(9),results,inst_25727);
} else {
if((state_val_25742 === (7))){
var inst_25737 = (state_25741[(2)]);
var state_25741__$1 = state_25741;
var statearr_25746_25858 = state_25741__$1;
(statearr_25746_25858[(2)] = inst_25737);

(statearr_25746_25858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25742 === (6))){
var inst_25727 = (state_25741[(8)]);
var inst_25722 = (state_25741[(10)]);
var inst_25727__$1 = cljs.core.async.chan.call(null,(1));
var inst_25728 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25729 = [inst_25722,inst_25727__$1];
var inst_25730 = (new cljs.core.PersistentVector(null,2,(5),inst_25728,inst_25729,null));
var state_25741__$1 = (function (){var statearr_25747 = state_25741;
(statearr_25747[(8)] = inst_25727__$1);

return statearr_25747;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25741__$1,(8),jobs,inst_25730);
} else {
if((state_val_25742 === (5))){
var inst_25725 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25741__$1 = state_25741;
var statearr_25748_25859 = state_25741__$1;
(statearr_25748_25859[(2)] = inst_25725);

(statearr_25748_25859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25742 === (4))){
var inst_25722 = (state_25741[(10)]);
var inst_25722__$1 = (state_25741[(2)]);
var inst_25723 = (inst_25722__$1 == null);
var state_25741__$1 = (function (){var statearr_25749 = state_25741;
(statearr_25749[(10)] = inst_25722__$1);

return statearr_25749;
})();
if(cljs.core.truth_(inst_25723)){
var statearr_25750_25860 = state_25741__$1;
(statearr_25750_25860[(1)] = (5));

} else {
var statearr_25751_25861 = state_25741__$1;
(statearr_25751_25861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25742 === (3))){
var inst_25739 = (state_25741[(2)]);
var state_25741__$1 = state_25741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25741__$1,inst_25739);
} else {
if((state_val_25742 === (2))){
var state_25741__$1 = state_25741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25741__$1,(4),from);
} else {
if((state_val_25742 === (1))){
var state_25741__$1 = state_25741;
var statearr_25752_25862 = state_25741__$1;
(statearr_25752_25862[(2)] = null);

(statearr_25752_25862[(1)] = (2));


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
});})(c__15819__auto___25856,jobs,results,process,async))
;
return ((function (switch__15763__auto__,c__15819__auto___25856,jobs,results,process,async){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_25756 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25756[(0)] = state_machine__15764__auto__);

(statearr_25756[(1)] = (1));

return statearr_25756;
});
var state_machine__15764__auto____1 = (function (state_25741){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_25741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e25757){if((e25757 instanceof Object)){
var ex__15767__auto__ = e25757;
var statearr_25758_25863 = state_25741;
(statearr_25758_25863[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25864 = state_25741;
state_25741 = G__25864;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_25741){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_25741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___25856,jobs,results,process,async))
})();
var state__15821__auto__ = (function (){var statearr_25759 = f__15820__auto__.call(null);
(statearr_25759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___25856);

return statearr_25759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___25856,jobs,results,process,async))
);


var c__15819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto__,jobs,results,process,async){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto__,jobs,results,process,async){
return (function (state_25797){
var state_val_25798 = (state_25797[(1)]);
if((state_val_25798 === (7))){
var inst_25793 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25799_25865 = state_25797__$1;
(statearr_25799_25865[(2)] = inst_25793);

(statearr_25799_25865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (20))){
var state_25797__$1 = state_25797;
var statearr_25800_25866 = state_25797__$1;
(statearr_25800_25866[(2)] = null);

(statearr_25800_25866[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (1))){
var state_25797__$1 = state_25797;
var statearr_25801_25867 = state_25797__$1;
(statearr_25801_25867[(2)] = null);

(statearr_25801_25867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (4))){
var inst_25762 = (state_25797[(7)]);
var inst_25762__$1 = (state_25797[(2)]);
var inst_25763 = (inst_25762__$1 == null);
var state_25797__$1 = (function (){var statearr_25802 = state_25797;
(statearr_25802[(7)] = inst_25762__$1);

return statearr_25802;
})();
if(cljs.core.truth_(inst_25763)){
var statearr_25803_25868 = state_25797__$1;
(statearr_25803_25868[(1)] = (5));

} else {
var statearr_25804_25869 = state_25797__$1;
(statearr_25804_25869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (15))){
var inst_25775 = (state_25797[(8)]);
var state_25797__$1 = state_25797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25797__$1,(18),to,inst_25775);
} else {
if((state_val_25798 === (21))){
var inst_25788 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25805_25870 = state_25797__$1;
(statearr_25805_25870[(2)] = inst_25788);

(statearr_25805_25870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (13))){
var inst_25790 = (state_25797[(2)]);
var state_25797__$1 = (function (){var statearr_25806 = state_25797;
(statearr_25806[(9)] = inst_25790);

return statearr_25806;
})();
var statearr_25807_25871 = state_25797__$1;
(statearr_25807_25871[(2)] = null);

(statearr_25807_25871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (6))){
var inst_25762 = (state_25797[(7)]);
var state_25797__$1 = state_25797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25797__$1,(11),inst_25762);
} else {
if((state_val_25798 === (17))){
var inst_25783 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
if(cljs.core.truth_(inst_25783)){
var statearr_25808_25872 = state_25797__$1;
(statearr_25808_25872[(1)] = (19));

} else {
var statearr_25809_25873 = state_25797__$1;
(statearr_25809_25873[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (3))){
var inst_25795 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25797__$1,inst_25795);
} else {
if((state_val_25798 === (12))){
var inst_25772 = (state_25797[(10)]);
var state_25797__$1 = state_25797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25797__$1,(14),inst_25772);
} else {
if((state_val_25798 === (2))){
var state_25797__$1 = state_25797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25797__$1,(4),results);
} else {
if((state_val_25798 === (19))){
var state_25797__$1 = state_25797;
var statearr_25810_25874 = state_25797__$1;
(statearr_25810_25874[(2)] = null);

(statearr_25810_25874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (11))){
var inst_25772 = (state_25797[(2)]);
var state_25797__$1 = (function (){var statearr_25811 = state_25797;
(statearr_25811[(10)] = inst_25772);

return statearr_25811;
})();
var statearr_25812_25875 = state_25797__$1;
(statearr_25812_25875[(2)] = null);

(statearr_25812_25875[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (9))){
var state_25797__$1 = state_25797;
var statearr_25813_25876 = state_25797__$1;
(statearr_25813_25876[(2)] = null);

(statearr_25813_25876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (5))){
var state_25797__$1 = state_25797;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25814_25877 = state_25797__$1;
(statearr_25814_25877[(1)] = (8));

} else {
var statearr_25815_25878 = state_25797__$1;
(statearr_25815_25878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (14))){
var inst_25777 = (state_25797[(11)]);
var inst_25775 = (state_25797[(8)]);
var inst_25775__$1 = (state_25797[(2)]);
var inst_25776 = (inst_25775__$1 == null);
var inst_25777__$1 = cljs.core.not.call(null,inst_25776);
var state_25797__$1 = (function (){var statearr_25816 = state_25797;
(statearr_25816[(11)] = inst_25777__$1);

(statearr_25816[(8)] = inst_25775__$1);

return statearr_25816;
})();
if(inst_25777__$1){
var statearr_25817_25879 = state_25797__$1;
(statearr_25817_25879[(1)] = (15));

} else {
var statearr_25818_25880 = state_25797__$1;
(statearr_25818_25880[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (16))){
var inst_25777 = (state_25797[(11)]);
var state_25797__$1 = state_25797;
var statearr_25819_25881 = state_25797__$1;
(statearr_25819_25881[(2)] = inst_25777);

(statearr_25819_25881[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (10))){
var inst_25769 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25820_25882 = state_25797__$1;
(statearr_25820_25882[(2)] = inst_25769);

(statearr_25820_25882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (18))){
var inst_25780 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25821_25883 = state_25797__$1;
(statearr_25821_25883[(2)] = inst_25780);

(statearr_25821_25883[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (8))){
var inst_25766 = cljs.core.async.close_BANG_.call(null,to);
var state_25797__$1 = state_25797;
var statearr_25822_25884 = state_25797__$1;
(statearr_25822_25884[(2)] = inst_25766);

(statearr_25822_25884[(1)] = (10));


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
var statearr_25826 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25826[(0)] = state_machine__15764__auto__);

(statearr_25826[(1)] = (1));

return statearr_25826;
});
var state_machine__15764__auto____1 = (function (state_25797){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_25797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e25827){if((e25827 instanceof Object)){
var ex__15767__auto__ = e25827;
var statearr_25828_25885 = state_25797;
(statearr_25828_25885[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25886 = state_25797;
state_25797 = G__25886;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_25797){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_25797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto__,jobs,results,process,async))
})();
var state__15821__auto__ = (function (){var statearr_25829 = f__15820__auto__.call(null);
(statearr_25829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto__);

return statearr_25829;
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
var c__15819__auto___25987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___25987,tc,fc){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___25987,tc,fc){
return (function (state_25962){
var state_val_25963 = (state_25962[(1)]);
if((state_val_25963 === (7))){
var inst_25958 = (state_25962[(2)]);
var state_25962__$1 = state_25962;
var statearr_25964_25988 = state_25962__$1;
(statearr_25964_25988[(2)] = inst_25958);

(statearr_25964_25988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25963 === (1))){
var state_25962__$1 = state_25962;
var statearr_25965_25989 = state_25962__$1;
(statearr_25965_25989[(2)] = null);

(statearr_25965_25989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25963 === (4))){
var inst_25939 = (state_25962[(7)]);
var inst_25939__$1 = (state_25962[(2)]);
var inst_25940 = (inst_25939__$1 == null);
var state_25962__$1 = (function (){var statearr_25966 = state_25962;
(statearr_25966[(7)] = inst_25939__$1);

return statearr_25966;
})();
if(cljs.core.truth_(inst_25940)){
var statearr_25967_25990 = state_25962__$1;
(statearr_25967_25990[(1)] = (5));

} else {
var statearr_25968_25991 = state_25962__$1;
(statearr_25968_25991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25963 === (13))){
var state_25962__$1 = state_25962;
var statearr_25969_25992 = state_25962__$1;
(statearr_25969_25992[(2)] = null);

(statearr_25969_25992[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25963 === (6))){
var inst_25939 = (state_25962[(7)]);
var inst_25945 = p.call(null,inst_25939);
var state_25962__$1 = state_25962;
if(cljs.core.truth_(inst_25945)){
var statearr_25970_25993 = state_25962__$1;
(statearr_25970_25993[(1)] = (9));

} else {
var statearr_25971_25994 = state_25962__$1;
(statearr_25971_25994[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25963 === (3))){
var inst_25960 = (state_25962[(2)]);
var state_25962__$1 = state_25962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25962__$1,inst_25960);
} else {
if((state_val_25963 === (12))){
var state_25962__$1 = state_25962;
var statearr_25972_25995 = state_25962__$1;
(statearr_25972_25995[(2)] = null);

(statearr_25972_25995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25963 === (2))){
var state_25962__$1 = state_25962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25962__$1,(4),ch);
} else {
if((state_val_25963 === (11))){
var inst_25939 = (state_25962[(7)]);
var inst_25949 = (state_25962[(2)]);
var state_25962__$1 = state_25962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25962__$1,(8),inst_25949,inst_25939);
} else {
if((state_val_25963 === (9))){
var state_25962__$1 = state_25962;
var statearr_25973_25996 = state_25962__$1;
(statearr_25973_25996[(2)] = tc);

(statearr_25973_25996[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25963 === (5))){
var inst_25942 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25943 = cljs.core.async.close_BANG_.call(null,fc);
var state_25962__$1 = (function (){var statearr_25974 = state_25962;
(statearr_25974[(8)] = inst_25942);

return statearr_25974;
})();
var statearr_25975_25997 = state_25962__$1;
(statearr_25975_25997[(2)] = inst_25943);

(statearr_25975_25997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25963 === (14))){
var inst_25956 = (state_25962[(2)]);
var state_25962__$1 = state_25962;
var statearr_25976_25998 = state_25962__$1;
(statearr_25976_25998[(2)] = inst_25956);

(statearr_25976_25998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25963 === (10))){
var state_25962__$1 = state_25962;
var statearr_25977_25999 = state_25962__$1;
(statearr_25977_25999[(2)] = fc);

(statearr_25977_25999[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25963 === (8))){
var inst_25951 = (state_25962[(2)]);
var state_25962__$1 = state_25962;
if(cljs.core.truth_(inst_25951)){
var statearr_25978_26000 = state_25962__$1;
(statearr_25978_26000[(1)] = (12));

} else {
var statearr_25979_26001 = state_25962__$1;
(statearr_25979_26001[(1)] = (13));

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
});})(c__15819__auto___25987,tc,fc))
;
return ((function (switch__15763__auto__,c__15819__auto___25987,tc,fc){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_25983 = [null,null,null,null,null,null,null,null,null];
(statearr_25983[(0)] = state_machine__15764__auto__);

(statearr_25983[(1)] = (1));

return statearr_25983;
});
var state_machine__15764__auto____1 = (function (state_25962){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_25962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e25984){if((e25984 instanceof Object)){
var ex__15767__auto__ = e25984;
var statearr_25985_26002 = state_25962;
(statearr_25985_26002[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26003 = state_25962;
state_25962 = G__26003;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_25962){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_25962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___25987,tc,fc))
})();
var state__15821__auto__ = (function (){var statearr_25986 = f__15820__auto__.call(null);
(statearr_25986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___25987);

return statearr_25986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___25987,tc,fc))
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
return (function (state_26050){
var state_val_26051 = (state_26050[(1)]);
if((state_val_26051 === (7))){
var inst_26046 = (state_26050[(2)]);
var state_26050__$1 = state_26050;
var statearr_26052_26068 = state_26050__$1;
(statearr_26052_26068[(2)] = inst_26046);

(statearr_26052_26068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (6))){
var inst_26039 = (state_26050[(7)]);
var inst_26036 = (state_26050[(8)]);
var inst_26043 = f.call(null,inst_26036,inst_26039);
var inst_26036__$1 = inst_26043;
var state_26050__$1 = (function (){var statearr_26053 = state_26050;
(statearr_26053[(8)] = inst_26036__$1);

return statearr_26053;
})();
var statearr_26054_26069 = state_26050__$1;
(statearr_26054_26069[(2)] = null);

(statearr_26054_26069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (5))){
var inst_26036 = (state_26050[(8)]);
var state_26050__$1 = state_26050;
var statearr_26055_26070 = state_26050__$1;
(statearr_26055_26070[(2)] = inst_26036);

(statearr_26055_26070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (4))){
var inst_26039 = (state_26050[(7)]);
var inst_26039__$1 = (state_26050[(2)]);
var inst_26040 = (inst_26039__$1 == null);
var state_26050__$1 = (function (){var statearr_26056 = state_26050;
(statearr_26056[(7)] = inst_26039__$1);

return statearr_26056;
})();
if(cljs.core.truth_(inst_26040)){
var statearr_26057_26071 = state_26050__$1;
(statearr_26057_26071[(1)] = (5));

} else {
var statearr_26058_26072 = state_26050__$1;
(statearr_26058_26072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26051 === (3))){
var inst_26048 = (state_26050[(2)]);
var state_26050__$1 = state_26050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26050__$1,inst_26048);
} else {
if((state_val_26051 === (2))){
var state_26050__$1 = state_26050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26050__$1,(4),ch);
} else {
if((state_val_26051 === (1))){
var inst_26036 = init;
var state_26050__$1 = (function (){var statearr_26059 = state_26050;
(statearr_26059[(8)] = inst_26036);

return statearr_26059;
})();
var statearr_26060_26073 = state_26050__$1;
(statearr_26060_26073[(2)] = null);

(statearr_26060_26073[(1)] = (2));


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
var statearr_26064 = [null,null,null,null,null,null,null,null,null];
(statearr_26064[(0)] = state_machine__15764__auto__);

(statearr_26064[(1)] = (1));

return statearr_26064;
});
var state_machine__15764__auto____1 = (function (state_26050){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_26050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e26065){if((e26065 instanceof Object)){
var ex__15767__auto__ = e26065;
var statearr_26066_26074 = state_26050;
(statearr_26066_26074[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26075 = state_26050;
state_26050 = G__26075;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_26050){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_26050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto__))
})();
var state__15821__auto__ = (function (){var statearr_26067 = f__15820__auto__.call(null);
(statearr_26067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto__);

return statearr_26067;
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
return (function (state_26149){
var state_val_26150 = (state_26149[(1)]);
if((state_val_26150 === (7))){
var inst_26131 = (state_26149[(2)]);
var state_26149__$1 = state_26149;
var statearr_26151_26174 = state_26149__$1;
(statearr_26151_26174[(2)] = inst_26131);

(statearr_26151_26174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (1))){
var inst_26125 = cljs.core.seq.call(null,coll);
var inst_26126 = inst_26125;
var state_26149__$1 = (function (){var statearr_26152 = state_26149;
(statearr_26152[(7)] = inst_26126);

return statearr_26152;
})();
var statearr_26153_26175 = state_26149__$1;
(statearr_26153_26175[(2)] = null);

(statearr_26153_26175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (4))){
var inst_26126 = (state_26149[(7)]);
var inst_26129 = cljs.core.first.call(null,inst_26126);
var state_26149__$1 = state_26149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26149__$1,(7),ch,inst_26129);
} else {
if((state_val_26150 === (13))){
var inst_26143 = (state_26149[(2)]);
var state_26149__$1 = state_26149;
var statearr_26154_26176 = state_26149__$1;
(statearr_26154_26176[(2)] = inst_26143);

(statearr_26154_26176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (6))){
var inst_26134 = (state_26149[(2)]);
var state_26149__$1 = state_26149;
if(cljs.core.truth_(inst_26134)){
var statearr_26155_26177 = state_26149__$1;
(statearr_26155_26177[(1)] = (8));

} else {
var statearr_26156_26178 = state_26149__$1;
(statearr_26156_26178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (3))){
var inst_26147 = (state_26149[(2)]);
var state_26149__$1 = state_26149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26149__$1,inst_26147);
} else {
if((state_val_26150 === (12))){
var state_26149__$1 = state_26149;
var statearr_26157_26179 = state_26149__$1;
(statearr_26157_26179[(2)] = null);

(statearr_26157_26179[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (2))){
var inst_26126 = (state_26149[(7)]);
var state_26149__$1 = state_26149;
if(cljs.core.truth_(inst_26126)){
var statearr_26158_26180 = state_26149__$1;
(statearr_26158_26180[(1)] = (4));

} else {
var statearr_26159_26181 = state_26149__$1;
(statearr_26159_26181[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (11))){
var inst_26140 = cljs.core.async.close_BANG_.call(null,ch);
var state_26149__$1 = state_26149;
var statearr_26160_26182 = state_26149__$1;
(statearr_26160_26182[(2)] = inst_26140);

(statearr_26160_26182[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (9))){
var state_26149__$1 = state_26149;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26161_26183 = state_26149__$1;
(statearr_26161_26183[(1)] = (11));

} else {
var statearr_26162_26184 = state_26149__$1;
(statearr_26162_26184[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (5))){
var inst_26126 = (state_26149[(7)]);
var state_26149__$1 = state_26149;
var statearr_26163_26185 = state_26149__$1;
(statearr_26163_26185[(2)] = inst_26126);

(statearr_26163_26185[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (10))){
var inst_26145 = (state_26149[(2)]);
var state_26149__$1 = state_26149;
var statearr_26164_26186 = state_26149__$1;
(statearr_26164_26186[(2)] = inst_26145);

(statearr_26164_26186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (8))){
var inst_26126 = (state_26149[(7)]);
var inst_26136 = cljs.core.next.call(null,inst_26126);
var inst_26126__$1 = inst_26136;
var state_26149__$1 = (function (){var statearr_26165 = state_26149;
(statearr_26165[(7)] = inst_26126__$1);

return statearr_26165;
})();
var statearr_26166_26187 = state_26149__$1;
(statearr_26166_26187[(2)] = null);

(statearr_26166_26187[(1)] = (2));


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
var statearr_26170 = [null,null,null,null,null,null,null,null];
(statearr_26170[(0)] = state_machine__15764__auto__);

(statearr_26170[(1)] = (1));

return statearr_26170;
});
var state_machine__15764__auto____1 = (function (state_26149){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_26149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e26171){if((e26171 instanceof Object)){
var ex__15767__auto__ = e26171;
var statearr_26172_26188 = state_26149;
(statearr_26172_26188[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26189 = state_26149;
state_26149 = G__26189;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_26149){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_26149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto__))
})();
var state__15821__auto__ = (function (){var statearr_26173 = f__15820__auto__.call(null);
(statearr_26173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto__);

return statearr_26173;
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

cljs.core.async.Mux = (function (){var obj26191 = {};
return obj26191;
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


cljs.core.async.Mult = (function (){var obj26193 = {};
return obj26193;
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
if(typeof cljs.core.async.t26415 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26415 = (function (cs,ch,mult,meta26416){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26416 = meta26416;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26415.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26415.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26415.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26415.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26415.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26415.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26415.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26417){
var self__ = this;
var _26417__$1 = this;
return self__.meta26416;
});})(cs))
;

cljs.core.async.t26415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26417,meta26416__$1){
var self__ = this;
var _26417__$1 = this;
return (new cljs.core.async.t26415(self__.cs,self__.ch,self__.mult,meta26416__$1));
});})(cs))
;

cljs.core.async.t26415.cljs$lang$type = true;

cljs.core.async.t26415.cljs$lang$ctorStr = "cljs.core.async/t26415";

cljs.core.async.t26415.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"cljs.core.async/t26415");
});})(cs))
;

cljs.core.async.__GT_t26415 = ((function (cs){
return (function __GT_t26415(cs__$1,ch__$1,mult__$1,meta26416){
return (new cljs.core.async.t26415(cs__$1,ch__$1,mult__$1,meta26416));
});})(cs))
;

}

return (new cljs.core.async.t26415(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__15819__auto___26636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___26636,cs,m,dchan,dctr,done){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___26636,cs,m,dchan,dctr,done){
return (function (state_26548){
var state_val_26549 = (state_26548[(1)]);
if((state_val_26549 === (7))){
var inst_26544 = (state_26548[(2)]);
var state_26548__$1 = state_26548;
var statearr_26550_26637 = state_26548__$1;
(statearr_26550_26637[(2)] = inst_26544);

(statearr_26550_26637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (20))){
var inst_26449 = (state_26548[(7)]);
var inst_26459 = cljs.core.first.call(null,inst_26449);
var inst_26460 = cljs.core.nth.call(null,inst_26459,(0),null);
var inst_26461 = cljs.core.nth.call(null,inst_26459,(1),null);
var state_26548__$1 = (function (){var statearr_26551 = state_26548;
(statearr_26551[(8)] = inst_26460);

return statearr_26551;
})();
if(cljs.core.truth_(inst_26461)){
var statearr_26552_26638 = state_26548__$1;
(statearr_26552_26638[(1)] = (22));

} else {
var statearr_26553_26639 = state_26548__$1;
(statearr_26553_26639[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (27))){
var inst_26496 = (state_26548[(9)]);
var inst_26420 = (state_26548[(10)]);
var inst_26491 = (state_26548[(11)]);
var inst_26489 = (state_26548[(12)]);
var inst_26496__$1 = cljs.core._nth.call(null,inst_26489,inst_26491);
var inst_26497 = cljs.core.async.put_BANG_.call(null,inst_26496__$1,inst_26420,done);
var state_26548__$1 = (function (){var statearr_26554 = state_26548;
(statearr_26554[(9)] = inst_26496__$1);

return statearr_26554;
})();
if(cljs.core.truth_(inst_26497)){
var statearr_26555_26640 = state_26548__$1;
(statearr_26555_26640[(1)] = (30));

} else {
var statearr_26556_26641 = state_26548__$1;
(statearr_26556_26641[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (1))){
var state_26548__$1 = state_26548;
var statearr_26557_26642 = state_26548__$1;
(statearr_26557_26642[(2)] = null);

(statearr_26557_26642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (24))){
var inst_26449 = (state_26548[(7)]);
var inst_26466 = (state_26548[(2)]);
var inst_26467 = cljs.core.next.call(null,inst_26449);
var inst_26429 = inst_26467;
var inst_26430 = null;
var inst_26431 = (0);
var inst_26432 = (0);
var state_26548__$1 = (function (){var statearr_26558 = state_26548;
(statearr_26558[(13)] = inst_26430);

(statearr_26558[(14)] = inst_26466);

(statearr_26558[(15)] = inst_26432);

(statearr_26558[(16)] = inst_26429);

(statearr_26558[(17)] = inst_26431);

return statearr_26558;
})();
var statearr_26559_26643 = state_26548__$1;
(statearr_26559_26643[(2)] = null);

(statearr_26559_26643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (39))){
var state_26548__$1 = state_26548;
var statearr_26563_26644 = state_26548__$1;
(statearr_26563_26644[(2)] = null);

(statearr_26563_26644[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (4))){
var inst_26420 = (state_26548[(10)]);
var inst_26420__$1 = (state_26548[(2)]);
var inst_26421 = (inst_26420__$1 == null);
var state_26548__$1 = (function (){var statearr_26564 = state_26548;
(statearr_26564[(10)] = inst_26420__$1);

return statearr_26564;
})();
if(cljs.core.truth_(inst_26421)){
var statearr_26565_26645 = state_26548__$1;
(statearr_26565_26645[(1)] = (5));

} else {
var statearr_26566_26646 = state_26548__$1;
(statearr_26566_26646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (15))){
var inst_26430 = (state_26548[(13)]);
var inst_26432 = (state_26548[(15)]);
var inst_26429 = (state_26548[(16)]);
var inst_26431 = (state_26548[(17)]);
var inst_26445 = (state_26548[(2)]);
var inst_26446 = (inst_26432 + (1));
var tmp26560 = inst_26430;
var tmp26561 = inst_26429;
var tmp26562 = inst_26431;
var inst_26429__$1 = tmp26561;
var inst_26430__$1 = tmp26560;
var inst_26431__$1 = tmp26562;
var inst_26432__$1 = inst_26446;
var state_26548__$1 = (function (){var statearr_26567 = state_26548;
(statearr_26567[(18)] = inst_26445);

(statearr_26567[(13)] = inst_26430__$1);

(statearr_26567[(15)] = inst_26432__$1);

(statearr_26567[(16)] = inst_26429__$1);

(statearr_26567[(17)] = inst_26431__$1);

return statearr_26567;
})();
var statearr_26568_26647 = state_26548__$1;
(statearr_26568_26647[(2)] = null);

(statearr_26568_26647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (21))){
var inst_26470 = (state_26548[(2)]);
var state_26548__$1 = state_26548;
var statearr_26572_26648 = state_26548__$1;
(statearr_26572_26648[(2)] = inst_26470);

(statearr_26572_26648[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (31))){
var inst_26496 = (state_26548[(9)]);
var inst_26500 = done.call(null,null);
var inst_26501 = cljs.core.async.untap_STAR_.call(null,m,inst_26496);
var state_26548__$1 = (function (){var statearr_26573 = state_26548;
(statearr_26573[(19)] = inst_26500);

return statearr_26573;
})();
var statearr_26574_26649 = state_26548__$1;
(statearr_26574_26649[(2)] = inst_26501);

(statearr_26574_26649[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (32))){
var inst_26491 = (state_26548[(11)]);
var inst_26490 = (state_26548[(20)]);
var inst_26489 = (state_26548[(12)]);
var inst_26488 = (state_26548[(21)]);
var inst_26503 = (state_26548[(2)]);
var inst_26504 = (inst_26491 + (1));
var tmp26569 = inst_26490;
var tmp26570 = inst_26489;
var tmp26571 = inst_26488;
var inst_26488__$1 = tmp26571;
var inst_26489__$1 = tmp26570;
var inst_26490__$1 = tmp26569;
var inst_26491__$1 = inst_26504;
var state_26548__$1 = (function (){var statearr_26575 = state_26548;
(statearr_26575[(22)] = inst_26503);

(statearr_26575[(11)] = inst_26491__$1);

(statearr_26575[(20)] = inst_26490__$1);

(statearr_26575[(12)] = inst_26489__$1);

(statearr_26575[(21)] = inst_26488__$1);

return statearr_26575;
})();
var statearr_26576_26650 = state_26548__$1;
(statearr_26576_26650[(2)] = null);

(statearr_26576_26650[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (40))){
var inst_26516 = (state_26548[(23)]);
var inst_26520 = done.call(null,null);
var inst_26521 = cljs.core.async.untap_STAR_.call(null,m,inst_26516);
var state_26548__$1 = (function (){var statearr_26577 = state_26548;
(statearr_26577[(24)] = inst_26520);

return statearr_26577;
})();
var statearr_26578_26651 = state_26548__$1;
(statearr_26578_26651[(2)] = inst_26521);

(statearr_26578_26651[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (33))){
var inst_26507 = (state_26548[(25)]);
var inst_26509 = cljs.core.chunked_seq_QMARK_.call(null,inst_26507);
var state_26548__$1 = state_26548;
if(inst_26509){
var statearr_26579_26652 = state_26548__$1;
(statearr_26579_26652[(1)] = (36));

} else {
var statearr_26580_26653 = state_26548__$1;
(statearr_26580_26653[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (13))){
var inst_26439 = (state_26548[(26)]);
var inst_26442 = cljs.core.async.close_BANG_.call(null,inst_26439);
var state_26548__$1 = state_26548;
var statearr_26581_26654 = state_26548__$1;
(statearr_26581_26654[(2)] = inst_26442);

(statearr_26581_26654[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (22))){
var inst_26460 = (state_26548[(8)]);
var inst_26463 = cljs.core.async.close_BANG_.call(null,inst_26460);
var state_26548__$1 = state_26548;
var statearr_26582_26655 = state_26548__$1;
(statearr_26582_26655[(2)] = inst_26463);

(statearr_26582_26655[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (36))){
var inst_26507 = (state_26548[(25)]);
var inst_26511 = cljs.core.chunk_first.call(null,inst_26507);
var inst_26512 = cljs.core.chunk_rest.call(null,inst_26507);
var inst_26513 = cljs.core.count.call(null,inst_26511);
var inst_26488 = inst_26512;
var inst_26489 = inst_26511;
var inst_26490 = inst_26513;
var inst_26491 = (0);
var state_26548__$1 = (function (){var statearr_26583 = state_26548;
(statearr_26583[(11)] = inst_26491);

(statearr_26583[(20)] = inst_26490);

(statearr_26583[(12)] = inst_26489);

(statearr_26583[(21)] = inst_26488);

return statearr_26583;
})();
var statearr_26584_26656 = state_26548__$1;
(statearr_26584_26656[(2)] = null);

(statearr_26584_26656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (41))){
var inst_26507 = (state_26548[(25)]);
var inst_26523 = (state_26548[(2)]);
var inst_26524 = cljs.core.next.call(null,inst_26507);
var inst_26488 = inst_26524;
var inst_26489 = null;
var inst_26490 = (0);
var inst_26491 = (0);
var state_26548__$1 = (function (){var statearr_26585 = state_26548;
(statearr_26585[(11)] = inst_26491);

(statearr_26585[(20)] = inst_26490);

(statearr_26585[(12)] = inst_26489);

(statearr_26585[(21)] = inst_26488);

(statearr_26585[(27)] = inst_26523);

return statearr_26585;
})();
var statearr_26586_26657 = state_26548__$1;
(statearr_26586_26657[(2)] = null);

(statearr_26586_26657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (43))){
var state_26548__$1 = state_26548;
var statearr_26587_26658 = state_26548__$1;
(statearr_26587_26658[(2)] = null);

(statearr_26587_26658[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (29))){
var inst_26532 = (state_26548[(2)]);
var state_26548__$1 = state_26548;
var statearr_26588_26659 = state_26548__$1;
(statearr_26588_26659[(2)] = inst_26532);

(statearr_26588_26659[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (44))){
var inst_26541 = (state_26548[(2)]);
var state_26548__$1 = (function (){var statearr_26589 = state_26548;
(statearr_26589[(28)] = inst_26541);

return statearr_26589;
})();
var statearr_26590_26660 = state_26548__$1;
(statearr_26590_26660[(2)] = null);

(statearr_26590_26660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (6))){
var inst_26480 = (state_26548[(29)]);
var inst_26479 = cljs.core.deref.call(null,cs);
var inst_26480__$1 = cljs.core.keys.call(null,inst_26479);
var inst_26481 = cljs.core.count.call(null,inst_26480__$1);
var inst_26482 = cljs.core.reset_BANG_.call(null,dctr,inst_26481);
var inst_26487 = cljs.core.seq.call(null,inst_26480__$1);
var inst_26488 = inst_26487;
var inst_26489 = null;
var inst_26490 = (0);
var inst_26491 = (0);
var state_26548__$1 = (function (){var statearr_26591 = state_26548;
(statearr_26591[(11)] = inst_26491);

(statearr_26591[(20)] = inst_26490);

(statearr_26591[(29)] = inst_26480__$1);

(statearr_26591[(30)] = inst_26482);

(statearr_26591[(12)] = inst_26489);

(statearr_26591[(21)] = inst_26488);

return statearr_26591;
})();
var statearr_26592_26661 = state_26548__$1;
(statearr_26592_26661[(2)] = null);

(statearr_26592_26661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (28))){
var inst_26507 = (state_26548[(25)]);
var inst_26488 = (state_26548[(21)]);
var inst_26507__$1 = cljs.core.seq.call(null,inst_26488);
var state_26548__$1 = (function (){var statearr_26593 = state_26548;
(statearr_26593[(25)] = inst_26507__$1);

return statearr_26593;
})();
if(inst_26507__$1){
var statearr_26594_26662 = state_26548__$1;
(statearr_26594_26662[(1)] = (33));

} else {
var statearr_26595_26663 = state_26548__$1;
(statearr_26595_26663[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (25))){
var inst_26491 = (state_26548[(11)]);
var inst_26490 = (state_26548[(20)]);
var inst_26493 = (inst_26491 < inst_26490);
var inst_26494 = inst_26493;
var state_26548__$1 = state_26548;
if(cljs.core.truth_(inst_26494)){
var statearr_26596_26664 = state_26548__$1;
(statearr_26596_26664[(1)] = (27));

} else {
var statearr_26597_26665 = state_26548__$1;
(statearr_26597_26665[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (34))){
var state_26548__$1 = state_26548;
var statearr_26598_26666 = state_26548__$1;
(statearr_26598_26666[(2)] = null);

(statearr_26598_26666[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (17))){
var state_26548__$1 = state_26548;
var statearr_26599_26667 = state_26548__$1;
(statearr_26599_26667[(2)] = null);

(statearr_26599_26667[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (3))){
var inst_26546 = (state_26548[(2)]);
var state_26548__$1 = state_26548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26548__$1,inst_26546);
} else {
if((state_val_26549 === (12))){
var inst_26475 = (state_26548[(2)]);
var state_26548__$1 = state_26548;
var statearr_26600_26668 = state_26548__$1;
(statearr_26600_26668[(2)] = inst_26475);

(statearr_26600_26668[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (2))){
var state_26548__$1 = state_26548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26548__$1,(4),ch);
} else {
if((state_val_26549 === (23))){
var state_26548__$1 = state_26548;
var statearr_26601_26669 = state_26548__$1;
(statearr_26601_26669[(2)] = null);

(statearr_26601_26669[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (35))){
var inst_26530 = (state_26548[(2)]);
var state_26548__$1 = state_26548;
var statearr_26602_26670 = state_26548__$1;
(statearr_26602_26670[(2)] = inst_26530);

(statearr_26602_26670[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (19))){
var inst_26449 = (state_26548[(7)]);
var inst_26453 = cljs.core.chunk_first.call(null,inst_26449);
var inst_26454 = cljs.core.chunk_rest.call(null,inst_26449);
var inst_26455 = cljs.core.count.call(null,inst_26453);
var inst_26429 = inst_26454;
var inst_26430 = inst_26453;
var inst_26431 = inst_26455;
var inst_26432 = (0);
var state_26548__$1 = (function (){var statearr_26603 = state_26548;
(statearr_26603[(13)] = inst_26430);

(statearr_26603[(15)] = inst_26432);

(statearr_26603[(16)] = inst_26429);

(statearr_26603[(17)] = inst_26431);

return statearr_26603;
})();
var statearr_26604_26671 = state_26548__$1;
(statearr_26604_26671[(2)] = null);

(statearr_26604_26671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (11))){
var inst_26449 = (state_26548[(7)]);
var inst_26429 = (state_26548[(16)]);
var inst_26449__$1 = cljs.core.seq.call(null,inst_26429);
var state_26548__$1 = (function (){var statearr_26605 = state_26548;
(statearr_26605[(7)] = inst_26449__$1);

return statearr_26605;
})();
if(inst_26449__$1){
var statearr_26606_26672 = state_26548__$1;
(statearr_26606_26672[(1)] = (16));

} else {
var statearr_26607_26673 = state_26548__$1;
(statearr_26607_26673[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (9))){
var inst_26477 = (state_26548[(2)]);
var state_26548__$1 = state_26548;
var statearr_26608_26674 = state_26548__$1;
(statearr_26608_26674[(2)] = inst_26477);

(statearr_26608_26674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (5))){
var inst_26427 = cljs.core.deref.call(null,cs);
var inst_26428 = cljs.core.seq.call(null,inst_26427);
var inst_26429 = inst_26428;
var inst_26430 = null;
var inst_26431 = (0);
var inst_26432 = (0);
var state_26548__$1 = (function (){var statearr_26609 = state_26548;
(statearr_26609[(13)] = inst_26430);

(statearr_26609[(15)] = inst_26432);

(statearr_26609[(16)] = inst_26429);

(statearr_26609[(17)] = inst_26431);

return statearr_26609;
})();
var statearr_26610_26675 = state_26548__$1;
(statearr_26610_26675[(2)] = null);

(statearr_26610_26675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (14))){
var state_26548__$1 = state_26548;
var statearr_26611_26676 = state_26548__$1;
(statearr_26611_26676[(2)] = null);

(statearr_26611_26676[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (45))){
var inst_26538 = (state_26548[(2)]);
var state_26548__$1 = state_26548;
var statearr_26612_26677 = state_26548__$1;
(statearr_26612_26677[(2)] = inst_26538);

(statearr_26612_26677[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (26))){
var inst_26480 = (state_26548[(29)]);
var inst_26534 = (state_26548[(2)]);
var inst_26535 = cljs.core.seq.call(null,inst_26480);
var state_26548__$1 = (function (){var statearr_26613 = state_26548;
(statearr_26613[(31)] = inst_26534);

return statearr_26613;
})();
if(inst_26535){
var statearr_26614_26678 = state_26548__$1;
(statearr_26614_26678[(1)] = (42));

} else {
var statearr_26615_26679 = state_26548__$1;
(statearr_26615_26679[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (16))){
var inst_26449 = (state_26548[(7)]);
var inst_26451 = cljs.core.chunked_seq_QMARK_.call(null,inst_26449);
var state_26548__$1 = state_26548;
if(inst_26451){
var statearr_26616_26680 = state_26548__$1;
(statearr_26616_26680[(1)] = (19));

} else {
var statearr_26617_26681 = state_26548__$1;
(statearr_26617_26681[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (38))){
var inst_26527 = (state_26548[(2)]);
var state_26548__$1 = state_26548;
var statearr_26618_26682 = state_26548__$1;
(statearr_26618_26682[(2)] = inst_26527);

(statearr_26618_26682[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (30))){
var state_26548__$1 = state_26548;
var statearr_26619_26683 = state_26548__$1;
(statearr_26619_26683[(2)] = null);

(statearr_26619_26683[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (10))){
var inst_26430 = (state_26548[(13)]);
var inst_26432 = (state_26548[(15)]);
var inst_26438 = cljs.core._nth.call(null,inst_26430,inst_26432);
var inst_26439 = cljs.core.nth.call(null,inst_26438,(0),null);
var inst_26440 = cljs.core.nth.call(null,inst_26438,(1),null);
var state_26548__$1 = (function (){var statearr_26620 = state_26548;
(statearr_26620[(26)] = inst_26439);

return statearr_26620;
})();
if(cljs.core.truth_(inst_26440)){
var statearr_26621_26684 = state_26548__$1;
(statearr_26621_26684[(1)] = (13));

} else {
var statearr_26622_26685 = state_26548__$1;
(statearr_26622_26685[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (18))){
var inst_26473 = (state_26548[(2)]);
var state_26548__$1 = state_26548;
var statearr_26623_26686 = state_26548__$1;
(statearr_26623_26686[(2)] = inst_26473);

(statearr_26623_26686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (42))){
var state_26548__$1 = state_26548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26548__$1,(45),dchan);
} else {
if((state_val_26549 === (37))){
var inst_26420 = (state_26548[(10)]);
var inst_26507 = (state_26548[(25)]);
var inst_26516 = (state_26548[(23)]);
var inst_26516__$1 = cljs.core.first.call(null,inst_26507);
var inst_26517 = cljs.core.async.put_BANG_.call(null,inst_26516__$1,inst_26420,done);
var state_26548__$1 = (function (){var statearr_26624 = state_26548;
(statearr_26624[(23)] = inst_26516__$1);

return statearr_26624;
})();
if(cljs.core.truth_(inst_26517)){
var statearr_26625_26687 = state_26548__$1;
(statearr_26625_26687[(1)] = (39));

} else {
var statearr_26626_26688 = state_26548__$1;
(statearr_26626_26688[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26549 === (8))){
var inst_26432 = (state_26548[(15)]);
var inst_26431 = (state_26548[(17)]);
var inst_26434 = (inst_26432 < inst_26431);
var inst_26435 = inst_26434;
var state_26548__$1 = state_26548;
if(cljs.core.truth_(inst_26435)){
var statearr_26627_26689 = state_26548__$1;
(statearr_26627_26689[(1)] = (10));

} else {
var statearr_26628_26690 = state_26548__$1;
(statearr_26628_26690[(1)] = (11));

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
});})(c__15819__auto___26636,cs,m,dchan,dctr,done))
;
return ((function (switch__15763__auto__,c__15819__auto___26636,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_26632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26632[(0)] = state_machine__15764__auto__);

(statearr_26632[(1)] = (1));

return statearr_26632;
});
var state_machine__15764__auto____1 = (function (state_26548){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_26548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e26633){if((e26633 instanceof Object)){
var ex__15767__auto__ = e26633;
var statearr_26634_26691 = state_26548;
(statearr_26634_26691[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26692 = state_26548;
state_26548 = G__26692;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_26548){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_26548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___26636,cs,m,dchan,dctr,done))
})();
var state__15821__auto__ = (function (){var statearr_26635 = f__15820__auto__.call(null);
(statearr_26635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___26636);

return statearr_26635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___26636,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj26694 = {};
return obj26694;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26695){
var map__26700 = p__26695;
var map__26700__$1 = ((cljs.core.seq_QMARK_.call(null,map__26700))?cljs.core.apply.call(null,cljs.core.hash_map,map__26700):map__26700);
var opts = map__26700__$1;
var statearr_26701_26704 = state;
(statearr_26701_26704[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__26700,map__26700__$1,opts){
return (function (val){
var statearr_26702_26705 = state;
(statearr_26702_26705[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26700,map__26700__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_26703_26706 = state;
(statearr_26703_26706[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26695 = null;
if (arguments.length > 3) {
var G__26707__i = 0, G__26707__a = new Array(arguments.length -  3);
while (G__26707__i < G__26707__a.length) {G__26707__a[G__26707__i] = arguments[G__26707__i + 3]; ++G__26707__i;}
  p__26695 = new cljs.core.IndexedSeq(G__26707__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26695);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26708){
var state = cljs.core.first(arglist__26708);
arglist__26708 = cljs.core.next(arglist__26708);
var cont_block = cljs.core.first(arglist__26708);
arglist__26708 = cljs.core.next(arglist__26708);
var ports = cljs.core.first(arglist__26708);
var p__26695 = cljs.core.rest(arglist__26708);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__26695);
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
if(typeof cljs.core.async.t26828 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26828 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26829){
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
this.meta26829 = meta26829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26828.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26828.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26828.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26828.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26828.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26828.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t26828.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26828.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26830){
var self__ = this;
var _26830__$1 = this;
return self__.meta26829;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26830,meta26829__$1){
var self__ = this;
var _26830__$1 = this;
return (new cljs.core.async.t26828(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26829__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26828.cljs$lang$type = true;

cljs.core.async.t26828.cljs$lang$ctorStr = "cljs.core.async/t26828";

cljs.core.async.t26828.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"cljs.core.async/t26828");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26828 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26828(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26829){
return (new cljs.core.async.t26828(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26829));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26828(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__15819__auto___26947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___26947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___26947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26900){
var state_val_26901 = (state_26900[(1)]);
if((state_val_26901 === (7))){
var inst_26844 = (state_26900[(7)]);
var inst_26849 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26844);
var state_26900__$1 = state_26900;
var statearr_26902_26948 = state_26900__$1;
(statearr_26902_26948[(2)] = inst_26849);

(statearr_26902_26948[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (20))){
var inst_26859 = (state_26900[(8)]);
var state_26900__$1 = state_26900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26900__$1,(23),out,inst_26859);
} else {
if((state_val_26901 === (1))){
var inst_26834 = (state_26900[(9)]);
var inst_26834__$1 = calc_state.call(null);
var inst_26835 = cljs.core.seq_QMARK_.call(null,inst_26834__$1);
var state_26900__$1 = (function (){var statearr_26903 = state_26900;
(statearr_26903[(9)] = inst_26834__$1);

return statearr_26903;
})();
if(inst_26835){
var statearr_26904_26949 = state_26900__$1;
(statearr_26904_26949[(1)] = (2));

} else {
var statearr_26905_26950 = state_26900__$1;
(statearr_26905_26950[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (24))){
var inst_26852 = (state_26900[(10)]);
var inst_26844 = inst_26852;
var state_26900__$1 = (function (){var statearr_26906 = state_26900;
(statearr_26906[(7)] = inst_26844);

return statearr_26906;
})();
var statearr_26907_26951 = state_26900__$1;
(statearr_26907_26951[(2)] = null);

(statearr_26907_26951[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (4))){
var inst_26834 = (state_26900[(9)]);
var inst_26840 = (state_26900[(2)]);
var inst_26841 = cljs.core.get.call(null,inst_26840,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26842 = cljs.core.get.call(null,inst_26840,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26843 = cljs.core.get.call(null,inst_26840,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26844 = inst_26834;
var state_26900__$1 = (function (){var statearr_26908 = state_26900;
(statearr_26908[(11)] = inst_26843);

(statearr_26908[(7)] = inst_26844);

(statearr_26908[(12)] = inst_26842);

(statearr_26908[(13)] = inst_26841);

return statearr_26908;
})();
var statearr_26909_26952 = state_26900__$1;
(statearr_26909_26952[(2)] = null);

(statearr_26909_26952[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (15))){
var state_26900__$1 = state_26900;
var statearr_26910_26953 = state_26900__$1;
(statearr_26910_26953[(2)] = null);

(statearr_26910_26953[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (21))){
var inst_26852 = (state_26900[(10)]);
var inst_26844 = inst_26852;
var state_26900__$1 = (function (){var statearr_26911 = state_26900;
(statearr_26911[(7)] = inst_26844);

return statearr_26911;
})();
var statearr_26912_26954 = state_26900__$1;
(statearr_26912_26954[(2)] = null);

(statearr_26912_26954[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (13))){
var inst_26896 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26913_26955 = state_26900__$1;
(statearr_26913_26955[(2)] = inst_26896);

(statearr_26913_26955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (22))){
var inst_26894 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26914_26956 = state_26900__$1;
(statearr_26914_26956[(2)] = inst_26894);

(statearr_26914_26956[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (6))){
var inst_26898 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26900__$1,inst_26898);
} else {
if((state_val_26901 === (25))){
var state_26900__$1 = state_26900;
var statearr_26915_26957 = state_26900__$1;
(statearr_26915_26957[(2)] = null);

(statearr_26915_26957[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (17))){
var inst_26874 = (state_26900[(14)]);
var state_26900__$1 = state_26900;
var statearr_26916_26958 = state_26900__$1;
(statearr_26916_26958[(2)] = inst_26874);

(statearr_26916_26958[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (3))){
var inst_26834 = (state_26900[(9)]);
var state_26900__$1 = state_26900;
var statearr_26917_26959 = state_26900__$1;
(statearr_26917_26959[(2)] = inst_26834);

(statearr_26917_26959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (12))){
var inst_26855 = (state_26900[(15)]);
var inst_26860 = (state_26900[(16)]);
var inst_26874 = (state_26900[(14)]);
var inst_26874__$1 = inst_26855.call(null,inst_26860);
var state_26900__$1 = (function (){var statearr_26918 = state_26900;
(statearr_26918[(14)] = inst_26874__$1);

return statearr_26918;
})();
if(cljs.core.truth_(inst_26874__$1)){
var statearr_26919_26960 = state_26900__$1;
(statearr_26919_26960[(1)] = (17));

} else {
var statearr_26920_26961 = state_26900__$1;
(statearr_26920_26961[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (2))){
var inst_26834 = (state_26900[(9)]);
var inst_26837 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26834);
var state_26900__$1 = state_26900;
var statearr_26921_26962 = state_26900__$1;
(statearr_26921_26962[(2)] = inst_26837);

(statearr_26921_26962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (23))){
var inst_26885 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
if(cljs.core.truth_(inst_26885)){
var statearr_26922_26963 = state_26900__$1;
(statearr_26922_26963[(1)] = (24));

} else {
var statearr_26923_26964 = state_26900__$1;
(statearr_26923_26964[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (19))){
var inst_26882 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
if(cljs.core.truth_(inst_26882)){
var statearr_26924_26965 = state_26900__$1;
(statearr_26924_26965[(1)] = (20));

} else {
var statearr_26925_26966 = state_26900__$1;
(statearr_26925_26966[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (11))){
var inst_26859 = (state_26900[(8)]);
var inst_26865 = (inst_26859 == null);
var state_26900__$1 = state_26900;
if(cljs.core.truth_(inst_26865)){
var statearr_26926_26967 = state_26900__$1;
(statearr_26926_26967[(1)] = (14));

} else {
var statearr_26927_26968 = state_26900__$1;
(statearr_26927_26968[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (9))){
var inst_26852 = (state_26900[(10)]);
var inst_26852__$1 = (state_26900[(2)]);
var inst_26853 = cljs.core.get.call(null,inst_26852__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26854 = cljs.core.get.call(null,inst_26852__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26855 = cljs.core.get.call(null,inst_26852__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_26900__$1 = (function (){var statearr_26928 = state_26900;
(statearr_26928[(15)] = inst_26855);

(statearr_26928[(17)] = inst_26854);

(statearr_26928[(10)] = inst_26852__$1);

return statearr_26928;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26900__$1,(10),inst_26853);
} else {
if((state_val_26901 === (5))){
var inst_26844 = (state_26900[(7)]);
var inst_26847 = cljs.core.seq_QMARK_.call(null,inst_26844);
var state_26900__$1 = state_26900;
if(inst_26847){
var statearr_26929_26969 = state_26900__$1;
(statearr_26929_26969[(1)] = (7));

} else {
var statearr_26930_26970 = state_26900__$1;
(statearr_26930_26970[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (14))){
var inst_26860 = (state_26900[(16)]);
var inst_26867 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26860);
var state_26900__$1 = state_26900;
var statearr_26931_26971 = state_26900__$1;
(statearr_26931_26971[(2)] = inst_26867);

(statearr_26931_26971[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (26))){
var inst_26890 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26932_26972 = state_26900__$1;
(statearr_26932_26972[(2)] = inst_26890);

(statearr_26932_26972[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (16))){
var inst_26870 = (state_26900[(2)]);
var inst_26871 = calc_state.call(null);
var inst_26844 = inst_26871;
var state_26900__$1 = (function (){var statearr_26933 = state_26900;
(statearr_26933[(7)] = inst_26844);

(statearr_26933[(18)] = inst_26870);

return statearr_26933;
})();
var statearr_26934_26973 = state_26900__$1;
(statearr_26934_26973[(2)] = null);

(statearr_26934_26973[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (10))){
var inst_26859 = (state_26900[(8)]);
var inst_26860 = (state_26900[(16)]);
var inst_26858 = (state_26900[(2)]);
var inst_26859__$1 = cljs.core.nth.call(null,inst_26858,(0),null);
var inst_26860__$1 = cljs.core.nth.call(null,inst_26858,(1),null);
var inst_26861 = (inst_26859__$1 == null);
var inst_26862 = cljs.core._EQ_.call(null,inst_26860__$1,change);
var inst_26863 = (inst_26861) || (inst_26862);
var state_26900__$1 = (function (){var statearr_26935 = state_26900;
(statearr_26935[(8)] = inst_26859__$1);

(statearr_26935[(16)] = inst_26860__$1);

return statearr_26935;
})();
if(cljs.core.truth_(inst_26863)){
var statearr_26936_26974 = state_26900__$1;
(statearr_26936_26974[(1)] = (11));

} else {
var statearr_26937_26975 = state_26900__$1;
(statearr_26937_26975[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (18))){
var inst_26855 = (state_26900[(15)]);
var inst_26854 = (state_26900[(17)]);
var inst_26860 = (state_26900[(16)]);
var inst_26877 = cljs.core.empty_QMARK_.call(null,inst_26855);
var inst_26878 = inst_26854.call(null,inst_26860);
var inst_26879 = cljs.core.not.call(null,inst_26878);
var inst_26880 = (inst_26877) && (inst_26879);
var state_26900__$1 = state_26900;
var statearr_26938_26976 = state_26900__$1;
(statearr_26938_26976[(2)] = inst_26880);

(statearr_26938_26976[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (8))){
var inst_26844 = (state_26900[(7)]);
var state_26900__$1 = state_26900;
var statearr_26939_26977 = state_26900__$1;
(statearr_26939_26977[(2)] = inst_26844);

(statearr_26939_26977[(1)] = (9));


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
});})(c__15819__auto___26947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15763__auto__,c__15819__auto___26947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_26943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26943[(0)] = state_machine__15764__auto__);

(statearr_26943[(1)] = (1));

return statearr_26943;
});
var state_machine__15764__auto____1 = (function (state_26900){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_26900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e26944){if((e26944 instanceof Object)){
var ex__15767__auto__ = e26944;
var statearr_26945_26978 = state_26900;
(statearr_26945_26978[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26979 = state_26900;
state_26900 = G__26979;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_26900){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_26900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___26947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15821__auto__ = (function (){var statearr_26946 = f__15820__auto__.call(null);
(statearr_26946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___26947);

return statearr_26946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___26947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj26981 = {};
return obj26981;
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
return (function (p1__26982_SHARP_){
if(cljs.core.truth_(p1__26982_SHARP_.call(null,topic))){
return p1__26982_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26982_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13176__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27105 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27105 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27106){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27106 = meta27106;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27105.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27105.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27105.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t27105.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27105.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27105.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27105.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27105.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27107){
var self__ = this;
var _27107__$1 = this;
return self__.meta27106;
});})(mults,ensure_mult))
;

cljs.core.async.t27105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27107,meta27106__$1){
var self__ = this;
var _27107__$1 = this;
return (new cljs.core.async.t27105(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27106__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27105.cljs$lang$type = true;

cljs.core.async.t27105.cljs$lang$ctorStr = "cljs.core.async/t27105";

cljs.core.async.t27105.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"cljs.core.async/t27105");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27105 = ((function (mults,ensure_mult){
return (function __GT_t27105(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27106){
return (new cljs.core.async.t27105(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27106));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27105(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__15819__auto___27227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___27227,mults,ensure_mult,p){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___27227,mults,ensure_mult,p){
return (function (state_27179){
var state_val_27180 = (state_27179[(1)]);
if((state_val_27180 === (7))){
var inst_27175 = (state_27179[(2)]);
var state_27179__$1 = state_27179;
var statearr_27181_27228 = state_27179__$1;
(statearr_27181_27228[(2)] = inst_27175);

(statearr_27181_27228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (20))){
var state_27179__$1 = state_27179;
var statearr_27182_27229 = state_27179__$1;
(statearr_27182_27229[(2)] = null);

(statearr_27182_27229[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (1))){
var state_27179__$1 = state_27179;
var statearr_27183_27230 = state_27179__$1;
(statearr_27183_27230[(2)] = null);

(statearr_27183_27230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (24))){
var inst_27158 = (state_27179[(7)]);
var inst_27167 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27158);
var state_27179__$1 = state_27179;
var statearr_27184_27231 = state_27179__$1;
(statearr_27184_27231[(2)] = inst_27167);

(statearr_27184_27231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (4))){
var inst_27110 = (state_27179[(8)]);
var inst_27110__$1 = (state_27179[(2)]);
var inst_27111 = (inst_27110__$1 == null);
var state_27179__$1 = (function (){var statearr_27185 = state_27179;
(statearr_27185[(8)] = inst_27110__$1);

return statearr_27185;
})();
if(cljs.core.truth_(inst_27111)){
var statearr_27186_27232 = state_27179__$1;
(statearr_27186_27232[(1)] = (5));

} else {
var statearr_27187_27233 = state_27179__$1;
(statearr_27187_27233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (15))){
var inst_27152 = (state_27179[(2)]);
var state_27179__$1 = state_27179;
var statearr_27188_27234 = state_27179__$1;
(statearr_27188_27234[(2)] = inst_27152);

(statearr_27188_27234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (21))){
var inst_27172 = (state_27179[(2)]);
var state_27179__$1 = (function (){var statearr_27189 = state_27179;
(statearr_27189[(9)] = inst_27172);

return statearr_27189;
})();
var statearr_27190_27235 = state_27179__$1;
(statearr_27190_27235[(2)] = null);

(statearr_27190_27235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (13))){
var inst_27134 = (state_27179[(10)]);
var inst_27136 = cljs.core.chunked_seq_QMARK_.call(null,inst_27134);
var state_27179__$1 = state_27179;
if(inst_27136){
var statearr_27191_27236 = state_27179__$1;
(statearr_27191_27236[(1)] = (16));

} else {
var statearr_27192_27237 = state_27179__$1;
(statearr_27192_27237[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (22))){
var inst_27164 = (state_27179[(2)]);
var state_27179__$1 = state_27179;
if(cljs.core.truth_(inst_27164)){
var statearr_27193_27238 = state_27179__$1;
(statearr_27193_27238[(1)] = (23));

} else {
var statearr_27194_27239 = state_27179__$1;
(statearr_27194_27239[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (6))){
var inst_27160 = (state_27179[(11)]);
var inst_27158 = (state_27179[(7)]);
var inst_27110 = (state_27179[(8)]);
var inst_27158__$1 = topic_fn.call(null,inst_27110);
var inst_27159 = cljs.core.deref.call(null,mults);
var inst_27160__$1 = cljs.core.get.call(null,inst_27159,inst_27158__$1);
var state_27179__$1 = (function (){var statearr_27195 = state_27179;
(statearr_27195[(11)] = inst_27160__$1);

(statearr_27195[(7)] = inst_27158__$1);

return statearr_27195;
})();
if(cljs.core.truth_(inst_27160__$1)){
var statearr_27196_27240 = state_27179__$1;
(statearr_27196_27240[(1)] = (19));

} else {
var statearr_27197_27241 = state_27179__$1;
(statearr_27197_27241[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (25))){
var inst_27169 = (state_27179[(2)]);
var state_27179__$1 = state_27179;
var statearr_27198_27242 = state_27179__$1;
(statearr_27198_27242[(2)] = inst_27169);

(statearr_27198_27242[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (17))){
var inst_27134 = (state_27179[(10)]);
var inst_27143 = cljs.core.first.call(null,inst_27134);
var inst_27144 = cljs.core.async.muxch_STAR_.call(null,inst_27143);
var inst_27145 = cljs.core.async.close_BANG_.call(null,inst_27144);
var inst_27146 = cljs.core.next.call(null,inst_27134);
var inst_27120 = inst_27146;
var inst_27121 = null;
var inst_27122 = (0);
var inst_27123 = (0);
var state_27179__$1 = (function (){var statearr_27199 = state_27179;
(statearr_27199[(12)] = inst_27121);

(statearr_27199[(13)] = inst_27145);

(statearr_27199[(14)] = inst_27120);

(statearr_27199[(15)] = inst_27123);

(statearr_27199[(16)] = inst_27122);

return statearr_27199;
})();
var statearr_27200_27243 = state_27179__$1;
(statearr_27200_27243[(2)] = null);

(statearr_27200_27243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (3))){
var inst_27177 = (state_27179[(2)]);
var state_27179__$1 = state_27179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27179__$1,inst_27177);
} else {
if((state_val_27180 === (12))){
var inst_27154 = (state_27179[(2)]);
var state_27179__$1 = state_27179;
var statearr_27201_27244 = state_27179__$1;
(statearr_27201_27244[(2)] = inst_27154);

(statearr_27201_27244[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (2))){
var state_27179__$1 = state_27179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27179__$1,(4),ch);
} else {
if((state_val_27180 === (23))){
var state_27179__$1 = state_27179;
var statearr_27202_27245 = state_27179__$1;
(statearr_27202_27245[(2)] = null);

(statearr_27202_27245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (19))){
var inst_27160 = (state_27179[(11)]);
var inst_27110 = (state_27179[(8)]);
var inst_27162 = cljs.core.async.muxch_STAR_.call(null,inst_27160);
var state_27179__$1 = state_27179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27179__$1,(22),inst_27162,inst_27110);
} else {
if((state_val_27180 === (11))){
var inst_27120 = (state_27179[(14)]);
var inst_27134 = (state_27179[(10)]);
var inst_27134__$1 = cljs.core.seq.call(null,inst_27120);
var state_27179__$1 = (function (){var statearr_27203 = state_27179;
(statearr_27203[(10)] = inst_27134__$1);

return statearr_27203;
})();
if(inst_27134__$1){
var statearr_27204_27246 = state_27179__$1;
(statearr_27204_27246[(1)] = (13));

} else {
var statearr_27205_27247 = state_27179__$1;
(statearr_27205_27247[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (9))){
var inst_27156 = (state_27179[(2)]);
var state_27179__$1 = state_27179;
var statearr_27206_27248 = state_27179__$1;
(statearr_27206_27248[(2)] = inst_27156);

(statearr_27206_27248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (5))){
var inst_27117 = cljs.core.deref.call(null,mults);
var inst_27118 = cljs.core.vals.call(null,inst_27117);
var inst_27119 = cljs.core.seq.call(null,inst_27118);
var inst_27120 = inst_27119;
var inst_27121 = null;
var inst_27122 = (0);
var inst_27123 = (0);
var state_27179__$1 = (function (){var statearr_27207 = state_27179;
(statearr_27207[(12)] = inst_27121);

(statearr_27207[(14)] = inst_27120);

(statearr_27207[(15)] = inst_27123);

(statearr_27207[(16)] = inst_27122);

return statearr_27207;
})();
var statearr_27208_27249 = state_27179__$1;
(statearr_27208_27249[(2)] = null);

(statearr_27208_27249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (14))){
var state_27179__$1 = state_27179;
var statearr_27212_27250 = state_27179__$1;
(statearr_27212_27250[(2)] = null);

(statearr_27212_27250[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (16))){
var inst_27134 = (state_27179[(10)]);
var inst_27138 = cljs.core.chunk_first.call(null,inst_27134);
var inst_27139 = cljs.core.chunk_rest.call(null,inst_27134);
var inst_27140 = cljs.core.count.call(null,inst_27138);
var inst_27120 = inst_27139;
var inst_27121 = inst_27138;
var inst_27122 = inst_27140;
var inst_27123 = (0);
var state_27179__$1 = (function (){var statearr_27213 = state_27179;
(statearr_27213[(12)] = inst_27121);

(statearr_27213[(14)] = inst_27120);

(statearr_27213[(15)] = inst_27123);

(statearr_27213[(16)] = inst_27122);

return statearr_27213;
})();
var statearr_27214_27251 = state_27179__$1;
(statearr_27214_27251[(2)] = null);

(statearr_27214_27251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (10))){
var inst_27121 = (state_27179[(12)]);
var inst_27120 = (state_27179[(14)]);
var inst_27123 = (state_27179[(15)]);
var inst_27122 = (state_27179[(16)]);
var inst_27128 = cljs.core._nth.call(null,inst_27121,inst_27123);
var inst_27129 = cljs.core.async.muxch_STAR_.call(null,inst_27128);
var inst_27130 = cljs.core.async.close_BANG_.call(null,inst_27129);
var inst_27131 = (inst_27123 + (1));
var tmp27209 = inst_27121;
var tmp27210 = inst_27120;
var tmp27211 = inst_27122;
var inst_27120__$1 = tmp27210;
var inst_27121__$1 = tmp27209;
var inst_27122__$1 = tmp27211;
var inst_27123__$1 = inst_27131;
var state_27179__$1 = (function (){var statearr_27215 = state_27179;
(statearr_27215[(17)] = inst_27130);

(statearr_27215[(12)] = inst_27121__$1);

(statearr_27215[(14)] = inst_27120__$1);

(statearr_27215[(15)] = inst_27123__$1);

(statearr_27215[(16)] = inst_27122__$1);

return statearr_27215;
})();
var statearr_27216_27252 = state_27179__$1;
(statearr_27216_27252[(2)] = null);

(statearr_27216_27252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (18))){
var inst_27149 = (state_27179[(2)]);
var state_27179__$1 = state_27179;
var statearr_27217_27253 = state_27179__$1;
(statearr_27217_27253[(2)] = inst_27149);

(statearr_27217_27253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (8))){
var inst_27123 = (state_27179[(15)]);
var inst_27122 = (state_27179[(16)]);
var inst_27125 = (inst_27123 < inst_27122);
var inst_27126 = inst_27125;
var state_27179__$1 = state_27179;
if(cljs.core.truth_(inst_27126)){
var statearr_27218_27254 = state_27179__$1;
(statearr_27218_27254[(1)] = (10));

} else {
var statearr_27219_27255 = state_27179__$1;
(statearr_27219_27255[(1)] = (11));

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
});})(c__15819__auto___27227,mults,ensure_mult,p))
;
return ((function (switch__15763__auto__,c__15819__auto___27227,mults,ensure_mult,p){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_27223 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27223[(0)] = state_machine__15764__auto__);

(statearr_27223[(1)] = (1));

return statearr_27223;
});
var state_machine__15764__auto____1 = (function (state_27179){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_27179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e27224){if((e27224 instanceof Object)){
var ex__15767__auto__ = e27224;
var statearr_27225_27256 = state_27179;
(statearr_27225_27256[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27257 = state_27179;
state_27179 = G__27257;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_27179){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_27179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___27227,mults,ensure_mult,p))
})();
var state__15821__auto__ = (function (){var statearr_27226 = f__15820__auto__.call(null);
(statearr_27226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___27227);

return statearr_27226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___27227,mults,ensure_mult,p))
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
var c__15819__auto___27394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___27394,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___27394,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27364){
var state_val_27365 = (state_27364[(1)]);
if((state_val_27365 === (7))){
var state_27364__$1 = state_27364;
var statearr_27366_27395 = state_27364__$1;
(statearr_27366_27395[(2)] = null);

(statearr_27366_27395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (1))){
var state_27364__$1 = state_27364;
var statearr_27367_27396 = state_27364__$1;
(statearr_27367_27396[(2)] = null);

(statearr_27367_27396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (4))){
var inst_27328 = (state_27364[(7)]);
var inst_27330 = (inst_27328 < cnt);
var state_27364__$1 = state_27364;
if(cljs.core.truth_(inst_27330)){
var statearr_27368_27397 = state_27364__$1;
(statearr_27368_27397[(1)] = (6));

} else {
var statearr_27369_27398 = state_27364__$1;
(statearr_27369_27398[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (15))){
var inst_27360 = (state_27364[(2)]);
var state_27364__$1 = state_27364;
var statearr_27370_27399 = state_27364__$1;
(statearr_27370_27399[(2)] = inst_27360);

(statearr_27370_27399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (13))){
var inst_27353 = cljs.core.async.close_BANG_.call(null,out);
var state_27364__$1 = state_27364;
var statearr_27371_27400 = state_27364__$1;
(statearr_27371_27400[(2)] = inst_27353);

(statearr_27371_27400[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (6))){
var state_27364__$1 = state_27364;
var statearr_27372_27401 = state_27364__$1;
(statearr_27372_27401[(2)] = null);

(statearr_27372_27401[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (3))){
var inst_27362 = (state_27364[(2)]);
var state_27364__$1 = state_27364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27364__$1,inst_27362);
} else {
if((state_val_27365 === (12))){
var inst_27350 = (state_27364[(8)]);
var inst_27350__$1 = (state_27364[(2)]);
var inst_27351 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27350__$1);
var state_27364__$1 = (function (){var statearr_27373 = state_27364;
(statearr_27373[(8)] = inst_27350__$1);

return statearr_27373;
})();
if(cljs.core.truth_(inst_27351)){
var statearr_27374_27402 = state_27364__$1;
(statearr_27374_27402[(1)] = (13));

} else {
var statearr_27375_27403 = state_27364__$1;
(statearr_27375_27403[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (2))){
var inst_27327 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27328 = (0);
var state_27364__$1 = (function (){var statearr_27376 = state_27364;
(statearr_27376[(9)] = inst_27327);

(statearr_27376[(7)] = inst_27328);

return statearr_27376;
})();
var statearr_27377_27404 = state_27364__$1;
(statearr_27377_27404[(2)] = null);

(statearr_27377_27404[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (11))){
var inst_27328 = (state_27364[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27364,(10),Object,null,(9));
var inst_27337 = chs__$1.call(null,inst_27328);
var inst_27338 = done.call(null,inst_27328);
var inst_27339 = cljs.core.async.take_BANG_.call(null,inst_27337,inst_27338);
var state_27364__$1 = state_27364;
var statearr_27378_27405 = state_27364__$1;
(statearr_27378_27405[(2)] = inst_27339);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27364__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (9))){
var inst_27328 = (state_27364[(7)]);
var inst_27341 = (state_27364[(2)]);
var inst_27342 = (inst_27328 + (1));
var inst_27328__$1 = inst_27342;
var state_27364__$1 = (function (){var statearr_27379 = state_27364;
(statearr_27379[(10)] = inst_27341);

(statearr_27379[(7)] = inst_27328__$1);

return statearr_27379;
})();
var statearr_27380_27406 = state_27364__$1;
(statearr_27380_27406[(2)] = null);

(statearr_27380_27406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (5))){
var inst_27348 = (state_27364[(2)]);
var state_27364__$1 = (function (){var statearr_27381 = state_27364;
(statearr_27381[(11)] = inst_27348);

return statearr_27381;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27364__$1,(12),dchan);
} else {
if((state_val_27365 === (14))){
var inst_27350 = (state_27364[(8)]);
var inst_27355 = cljs.core.apply.call(null,f,inst_27350);
var state_27364__$1 = state_27364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27364__$1,(16),out,inst_27355);
} else {
if((state_val_27365 === (16))){
var inst_27357 = (state_27364[(2)]);
var state_27364__$1 = (function (){var statearr_27382 = state_27364;
(statearr_27382[(12)] = inst_27357);

return statearr_27382;
})();
var statearr_27383_27407 = state_27364__$1;
(statearr_27383_27407[(2)] = null);

(statearr_27383_27407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (10))){
var inst_27332 = (state_27364[(2)]);
var inst_27333 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27364__$1 = (function (){var statearr_27384 = state_27364;
(statearr_27384[(13)] = inst_27332);

return statearr_27384;
})();
var statearr_27385_27408 = state_27364__$1;
(statearr_27385_27408[(2)] = inst_27333);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27364__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (8))){
var inst_27346 = (state_27364[(2)]);
var state_27364__$1 = state_27364;
var statearr_27386_27409 = state_27364__$1;
(statearr_27386_27409[(2)] = inst_27346);

(statearr_27386_27409[(1)] = (5));


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
});})(c__15819__auto___27394,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15763__auto__,c__15819__auto___27394,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_27390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27390[(0)] = state_machine__15764__auto__);

(statearr_27390[(1)] = (1));

return statearr_27390;
});
var state_machine__15764__auto____1 = (function (state_27364){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_27364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e27391){if((e27391 instanceof Object)){
var ex__15767__auto__ = e27391;
var statearr_27392_27410 = state_27364;
(statearr_27392_27410[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27411 = state_27364;
state_27364 = G__27411;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_27364){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_27364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___27394,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15821__auto__ = (function (){var statearr_27393 = f__15820__auto__.call(null);
(statearr_27393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___27394);

return statearr_27393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___27394,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__15819__auto___27519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___27519,out){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___27519,out){
return (function (state_27495){
var state_val_27496 = (state_27495[(1)]);
if((state_val_27496 === (7))){
var inst_27474 = (state_27495[(7)]);
var inst_27475 = (state_27495[(8)]);
var inst_27474__$1 = (state_27495[(2)]);
var inst_27475__$1 = cljs.core.nth.call(null,inst_27474__$1,(0),null);
var inst_27476 = cljs.core.nth.call(null,inst_27474__$1,(1),null);
var inst_27477 = (inst_27475__$1 == null);
var state_27495__$1 = (function (){var statearr_27497 = state_27495;
(statearr_27497[(7)] = inst_27474__$1);

(statearr_27497[(8)] = inst_27475__$1);

(statearr_27497[(9)] = inst_27476);

return statearr_27497;
})();
if(cljs.core.truth_(inst_27477)){
var statearr_27498_27520 = state_27495__$1;
(statearr_27498_27520[(1)] = (8));

} else {
var statearr_27499_27521 = state_27495__$1;
(statearr_27499_27521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (1))){
var inst_27466 = cljs.core.vec.call(null,chs);
var inst_27467 = inst_27466;
var state_27495__$1 = (function (){var statearr_27500 = state_27495;
(statearr_27500[(10)] = inst_27467);

return statearr_27500;
})();
var statearr_27501_27522 = state_27495__$1;
(statearr_27501_27522[(2)] = null);

(statearr_27501_27522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (4))){
var inst_27467 = (state_27495[(10)]);
var state_27495__$1 = state_27495;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27495__$1,(7),inst_27467);
} else {
if((state_val_27496 === (6))){
var inst_27491 = (state_27495[(2)]);
var state_27495__$1 = state_27495;
var statearr_27502_27523 = state_27495__$1;
(statearr_27502_27523[(2)] = inst_27491);

(statearr_27502_27523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (3))){
var inst_27493 = (state_27495[(2)]);
var state_27495__$1 = state_27495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27495__$1,inst_27493);
} else {
if((state_val_27496 === (2))){
var inst_27467 = (state_27495[(10)]);
var inst_27469 = cljs.core.count.call(null,inst_27467);
var inst_27470 = (inst_27469 > (0));
var state_27495__$1 = state_27495;
if(cljs.core.truth_(inst_27470)){
var statearr_27504_27524 = state_27495__$1;
(statearr_27504_27524[(1)] = (4));

} else {
var statearr_27505_27525 = state_27495__$1;
(statearr_27505_27525[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (11))){
var inst_27467 = (state_27495[(10)]);
var inst_27484 = (state_27495[(2)]);
var tmp27503 = inst_27467;
var inst_27467__$1 = tmp27503;
var state_27495__$1 = (function (){var statearr_27506 = state_27495;
(statearr_27506[(10)] = inst_27467__$1);

(statearr_27506[(11)] = inst_27484);

return statearr_27506;
})();
var statearr_27507_27526 = state_27495__$1;
(statearr_27507_27526[(2)] = null);

(statearr_27507_27526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (9))){
var inst_27475 = (state_27495[(8)]);
var state_27495__$1 = state_27495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27495__$1,(11),out,inst_27475);
} else {
if((state_val_27496 === (5))){
var inst_27489 = cljs.core.async.close_BANG_.call(null,out);
var state_27495__$1 = state_27495;
var statearr_27508_27527 = state_27495__$1;
(statearr_27508_27527[(2)] = inst_27489);

(statearr_27508_27527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (10))){
var inst_27487 = (state_27495[(2)]);
var state_27495__$1 = state_27495;
var statearr_27509_27528 = state_27495__$1;
(statearr_27509_27528[(2)] = inst_27487);

(statearr_27509_27528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27496 === (8))){
var inst_27474 = (state_27495[(7)]);
var inst_27475 = (state_27495[(8)]);
var inst_27467 = (state_27495[(10)]);
var inst_27476 = (state_27495[(9)]);
var inst_27479 = (function (){var c = inst_27476;
var v = inst_27475;
var vec__27472 = inst_27474;
var cs = inst_27467;
return ((function (c,v,vec__27472,cs,inst_27474,inst_27475,inst_27467,inst_27476,state_val_27496,c__15819__auto___27519,out){
return (function (p1__27412_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27412_SHARP_);
});
;})(c,v,vec__27472,cs,inst_27474,inst_27475,inst_27467,inst_27476,state_val_27496,c__15819__auto___27519,out))
})();
var inst_27480 = cljs.core.filterv.call(null,inst_27479,inst_27467);
var inst_27467__$1 = inst_27480;
var state_27495__$1 = (function (){var statearr_27510 = state_27495;
(statearr_27510[(10)] = inst_27467__$1);

return statearr_27510;
})();
var statearr_27511_27529 = state_27495__$1;
(statearr_27511_27529[(2)] = null);

(statearr_27511_27529[(1)] = (2));


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
});})(c__15819__auto___27519,out))
;
return ((function (switch__15763__auto__,c__15819__auto___27519,out){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_27515 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27515[(0)] = state_machine__15764__auto__);

(statearr_27515[(1)] = (1));

return statearr_27515;
});
var state_machine__15764__auto____1 = (function (state_27495){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_27495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e27516){if((e27516 instanceof Object)){
var ex__15767__auto__ = e27516;
var statearr_27517_27530 = state_27495;
(statearr_27517_27530[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27531 = state_27495;
state_27495 = G__27531;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_27495){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_27495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___27519,out))
})();
var state__15821__auto__ = (function (){var statearr_27518 = f__15820__auto__.call(null);
(statearr_27518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___27519);

return statearr_27518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___27519,out))
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
var c__15819__auto___27624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___27624,out){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___27624,out){
return (function (state_27601){
var state_val_27602 = (state_27601[(1)]);
if((state_val_27602 === (7))){
var inst_27583 = (state_27601[(7)]);
var inst_27583__$1 = (state_27601[(2)]);
var inst_27584 = (inst_27583__$1 == null);
var inst_27585 = cljs.core.not.call(null,inst_27584);
var state_27601__$1 = (function (){var statearr_27603 = state_27601;
(statearr_27603[(7)] = inst_27583__$1);

return statearr_27603;
})();
if(inst_27585){
var statearr_27604_27625 = state_27601__$1;
(statearr_27604_27625[(1)] = (8));

} else {
var statearr_27605_27626 = state_27601__$1;
(statearr_27605_27626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27602 === (1))){
var inst_27578 = (0);
var state_27601__$1 = (function (){var statearr_27606 = state_27601;
(statearr_27606[(8)] = inst_27578);

return statearr_27606;
})();
var statearr_27607_27627 = state_27601__$1;
(statearr_27607_27627[(2)] = null);

(statearr_27607_27627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27602 === (4))){
var state_27601__$1 = state_27601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27601__$1,(7),ch);
} else {
if((state_val_27602 === (6))){
var inst_27596 = (state_27601[(2)]);
var state_27601__$1 = state_27601;
var statearr_27608_27628 = state_27601__$1;
(statearr_27608_27628[(2)] = inst_27596);

(statearr_27608_27628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27602 === (3))){
var inst_27598 = (state_27601[(2)]);
var inst_27599 = cljs.core.async.close_BANG_.call(null,out);
var state_27601__$1 = (function (){var statearr_27609 = state_27601;
(statearr_27609[(9)] = inst_27598);

return statearr_27609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27601__$1,inst_27599);
} else {
if((state_val_27602 === (2))){
var inst_27578 = (state_27601[(8)]);
var inst_27580 = (inst_27578 < n);
var state_27601__$1 = state_27601;
if(cljs.core.truth_(inst_27580)){
var statearr_27610_27629 = state_27601__$1;
(statearr_27610_27629[(1)] = (4));

} else {
var statearr_27611_27630 = state_27601__$1;
(statearr_27611_27630[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27602 === (11))){
var inst_27578 = (state_27601[(8)]);
var inst_27588 = (state_27601[(2)]);
var inst_27589 = (inst_27578 + (1));
var inst_27578__$1 = inst_27589;
var state_27601__$1 = (function (){var statearr_27612 = state_27601;
(statearr_27612[(10)] = inst_27588);

(statearr_27612[(8)] = inst_27578__$1);

return statearr_27612;
})();
var statearr_27613_27631 = state_27601__$1;
(statearr_27613_27631[(2)] = null);

(statearr_27613_27631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27602 === (9))){
var state_27601__$1 = state_27601;
var statearr_27614_27632 = state_27601__$1;
(statearr_27614_27632[(2)] = null);

(statearr_27614_27632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27602 === (5))){
var state_27601__$1 = state_27601;
var statearr_27615_27633 = state_27601__$1;
(statearr_27615_27633[(2)] = null);

(statearr_27615_27633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27602 === (10))){
var inst_27593 = (state_27601[(2)]);
var state_27601__$1 = state_27601;
var statearr_27616_27634 = state_27601__$1;
(statearr_27616_27634[(2)] = inst_27593);

(statearr_27616_27634[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27602 === (8))){
var inst_27583 = (state_27601[(7)]);
var state_27601__$1 = state_27601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27601__$1,(11),out,inst_27583);
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
});})(c__15819__auto___27624,out))
;
return ((function (switch__15763__auto__,c__15819__auto___27624,out){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_27620 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27620[(0)] = state_machine__15764__auto__);

(statearr_27620[(1)] = (1));

return statearr_27620;
});
var state_machine__15764__auto____1 = (function (state_27601){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_27601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e27621){if((e27621 instanceof Object)){
var ex__15767__auto__ = e27621;
var statearr_27622_27635 = state_27601;
(statearr_27622_27635[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27636 = state_27601;
state_27601 = G__27636;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_27601){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_27601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___27624,out))
})();
var state__15821__auto__ = (function (){var statearr_27623 = f__15820__auto__.call(null);
(statearr_27623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___27624);

return statearr_27623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___27624,out))
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
if(typeof cljs.core.async.t27644 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27644 = (function (ch,f,map_LT_,meta27645){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27645 = meta27645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27644.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27644.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27644.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27644.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27647 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27647 = (function (fn1,_,meta27645,map_LT_,f,ch,meta27648){
this.fn1 = fn1;
this._ = _;
this.meta27645 = meta27645;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27648 = meta27648;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27647.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27647.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27647.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27637_SHARP_){
return f1.call(null,(((p1__27637_SHARP_ == null))?null:self__.f.call(null,p1__27637_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27647.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27649){
var self__ = this;
var _27649__$1 = this;
return self__.meta27648;
});})(___$1))
;

cljs.core.async.t27647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27649,meta27648__$1){
var self__ = this;
var _27649__$1 = this;
return (new cljs.core.async.t27647(self__.fn1,self__._,self__.meta27645,self__.map_LT_,self__.f,self__.ch,meta27648__$1));
});})(___$1))
;

cljs.core.async.t27647.cljs$lang$type = true;

cljs.core.async.t27647.cljs$lang$ctorStr = "cljs.core.async/t27647";

cljs.core.async.t27647.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"cljs.core.async/t27647");
});})(___$1))
;

cljs.core.async.__GT_t27647 = ((function (___$1){
return (function __GT_t27647(fn1__$1,___$2,meta27645__$1,map_LT___$1,f__$1,ch__$1,meta27648){
return (new cljs.core.async.t27647(fn1__$1,___$2,meta27645__$1,map_LT___$1,f__$1,ch__$1,meta27648));
});})(___$1))
;

}

return (new cljs.core.async.t27647(fn1,___$1,self__.meta27645,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t27644.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27644.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27644.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27646){
var self__ = this;
var _27646__$1 = this;
return self__.meta27645;
});

cljs.core.async.t27644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27646,meta27645__$1){
var self__ = this;
var _27646__$1 = this;
return (new cljs.core.async.t27644(self__.ch,self__.f,self__.map_LT_,meta27645__$1));
});

cljs.core.async.t27644.cljs$lang$type = true;

cljs.core.async.t27644.cljs$lang$ctorStr = "cljs.core.async/t27644";

cljs.core.async.t27644.cljs$lang$ctorPrWriter = (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"cljs.core.async/t27644");
});

cljs.core.async.__GT_t27644 = (function __GT_t27644(ch__$1,f__$1,map_LT___$1,meta27645){
return (new cljs.core.async.t27644(ch__$1,f__$1,map_LT___$1,meta27645));
});

}

return (new cljs.core.async.t27644(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t27653 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27653 = (function (ch,f,map_GT_,meta27654){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27654 = meta27654;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27653.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27653.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27653.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27653.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27653.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27653.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27655){
var self__ = this;
var _27655__$1 = this;
return self__.meta27654;
});

cljs.core.async.t27653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27655,meta27654__$1){
var self__ = this;
var _27655__$1 = this;
return (new cljs.core.async.t27653(self__.ch,self__.f,self__.map_GT_,meta27654__$1));
});

cljs.core.async.t27653.cljs$lang$type = true;

cljs.core.async.t27653.cljs$lang$ctorStr = "cljs.core.async/t27653";

cljs.core.async.t27653.cljs$lang$ctorPrWriter = (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"cljs.core.async/t27653");
});

cljs.core.async.__GT_t27653 = (function __GT_t27653(ch__$1,f__$1,map_GT___$1,meta27654){
return (new cljs.core.async.t27653(ch__$1,f__$1,map_GT___$1,meta27654));
});

}

return (new cljs.core.async.t27653(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t27659 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27659 = (function (ch,p,filter_GT_,meta27660){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27660 = meta27660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27659.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27659.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27659.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27659.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27659.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27659.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27659.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27661){
var self__ = this;
var _27661__$1 = this;
return self__.meta27660;
});

cljs.core.async.t27659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27661,meta27660__$1){
var self__ = this;
var _27661__$1 = this;
return (new cljs.core.async.t27659(self__.ch,self__.p,self__.filter_GT_,meta27660__$1));
});

cljs.core.async.t27659.cljs$lang$type = true;

cljs.core.async.t27659.cljs$lang$ctorStr = "cljs.core.async/t27659";

cljs.core.async.t27659.cljs$lang$ctorPrWriter = (function (this__13763__auto__,writer__13764__auto__,opt__13765__auto__){
return cljs.core._write.call(null,writer__13764__auto__,"cljs.core.async/t27659");
});

cljs.core.async.__GT_t27659 = (function __GT_t27659(ch__$1,p__$1,filter_GT___$1,meta27660){
return (new cljs.core.async.t27659(ch__$1,p__$1,filter_GT___$1,meta27660));
});

}

return (new cljs.core.async.t27659(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__15819__auto___27744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___27744,out){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___27744,out){
return (function (state_27723){
var state_val_27724 = (state_27723[(1)]);
if((state_val_27724 === (7))){
var inst_27719 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27725_27745 = state_27723__$1;
(statearr_27725_27745[(2)] = inst_27719);

(statearr_27725_27745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (1))){
var state_27723__$1 = state_27723;
var statearr_27726_27746 = state_27723__$1;
(statearr_27726_27746[(2)] = null);

(statearr_27726_27746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (4))){
var inst_27705 = (state_27723[(7)]);
var inst_27705__$1 = (state_27723[(2)]);
var inst_27706 = (inst_27705__$1 == null);
var state_27723__$1 = (function (){var statearr_27727 = state_27723;
(statearr_27727[(7)] = inst_27705__$1);

return statearr_27727;
})();
if(cljs.core.truth_(inst_27706)){
var statearr_27728_27747 = state_27723__$1;
(statearr_27728_27747[(1)] = (5));

} else {
var statearr_27729_27748 = state_27723__$1;
(statearr_27729_27748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (6))){
var inst_27705 = (state_27723[(7)]);
var inst_27710 = p.call(null,inst_27705);
var state_27723__$1 = state_27723;
if(cljs.core.truth_(inst_27710)){
var statearr_27730_27749 = state_27723__$1;
(statearr_27730_27749[(1)] = (8));

} else {
var statearr_27731_27750 = state_27723__$1;
(statearr_27731_27750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (3))){
var inst_27721 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27723__$1,inst_27721);
} else {
if((state_val_27724 === (2))){
var state_27723__$1 = state_27723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27723__$1,(4),ch);
} else {
if((state_val_27724 === (11))){
var inst_27713 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27732_27751 = state_27723__$1;
(statearr_27732_27751[(2)] = inst_27713);

(statearr_27732_27751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (9))){
var state_27723__$1 = state_27723;
var statearr_27733_27752 = state_27723__$1;
(statearr_27733_27752[(2)] = null);

(statearr_27733_27752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (5))){
var inst_27708 = cljs.core.async.close_BANG_.call(null,out);
var state_27723__$1 = state_27723;
var statearr_27734_27753 = state_27723__$1;
(statearr_27734_27753[(2)] = inst_27708);

(statearr_27734_27753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (10))){
var inst_27716 = (state_27723[(2)]);
var state_27723__$1 = (function (){var statearr_27735 = state_27723;
(statearr_27735[(8)] = inst_27716);

return statearr_27735;
})();
var statearr_27736_27754 = state_27723__$1;
(statearr_27736_27754[(2)] = null);

(statearr_27736_27754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (8))){
var inst_27705 = (state_27723[(7)]);
var state_27723__$1 = state_27723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27723__$1,(11),out,inst_27705);
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
});})(c__15819__auto___27744,out))
;
return ((function (switch__15763__auto__,c__15819__auto___27744,out){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_27740 = [null,null,null,null,null,null,null,null,null];
(statearr_27740[(0)] = state_machine__15764__auto__);

(statearr_27740[(1)] = (1));

return statearr_27740;
});
var state_machine__15764__auto____1 = (function (state_27723){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_27723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e27741){if((e27741 instanceof Object)){
var ex__15767__auto__ = e27741;
var statearr_27742_27755 = state_27723;
(statearr_27742_27755[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27756 = state_27723;
state_27723 = G__27756;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_27723){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_27723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___27744,out))
})();
var state__15821__auto__ = (function (){var statearr_27743 = f__15820__auto__.call(null);
(statearr_27743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___27744);

return statearr_27743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___27744,out))
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
return (function (state_27922){
var state_val_27923 = (state_27922[(1)]);
if((state_val_27923 === (7))){
var inst_27918 = (state_27922[(2)]);
var state_27922__$1 = state_27922;
var statearr_27924_27965 = state_27922__$1;
(statearr_27924_27965[(2)] = inst_27918);

(statearr_27924_27965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27923 === (20))){
var inst_27888 = (state_27922[(7)]);
var inst_27899 = (state_27922[(2)]);
var inst_27900 = cljs.core.next.call(null,inst_27888);
var inst_27874 = inst_27900;
var inst_27875 = null;
var inst_27876 = (0);
var inst_27877 = (0);
var state_27922__$1 = (function (){var statearr_27925 = state_27922;
(statearr_27925[(8)] = inst_27874);

(statearr_27925[(9)] = inst_27875);

(statearr_27925[(10)] = inst_27899);

(statearr_27925[(11)] = inst_27876);

(statearr_27925[(12)] = inst_27877);

return statearr_27925;
})();
var statearr_27926_27966 = state_27922__$1;
(statearr_27926_27966[(2)] = null);

(statearr_27926_27966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27923 === (1))){
var state_27922__$1 = state_27922;
var statearr_27927_27967 = state_27922__$1;
(statearr_27927_27967[(2)] = null);

(statearr_27927_27967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27923 === (4))){
var inst_27863 = (state_27922[(13)]);
var inst_27863__$1 = (state_27922[(2)]);
var inst_27864 = (inst_27863__$1 == null);
var state_27922__$1 = (function (){var statearr_27928 = state_27922;
(statearr_27928[(13)] = inst_27863__$1);

return statearr_27928;
})();
if(cljs.core.truth_(inst_27864)){
var statearr_27929_27968 = state_27922__$1;
(statearr_27929_27968[(1)] = (5));

} else {
var statearr_27930_27969 = state_27922__$1;
(statearr_27930_27969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27923 === (15))){
var state_27922__$1 = state_27922;
var statearr_27934_27970 = state_27922__$1;
(statearr_27934_27970[(2)] = null);

(statearr_27934_27970[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27923 === (21))){
var state_27922__$1 = state_27922;
var statearr_27935_27971 = state_27922__$1;
(statearr_27935_27971[(2)] = null);

(statearr_27935_27971[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27923 === (13))){
var inst_27874 = (state_27922[(8)]);
var inst_27875 = (state_27922[(9)]);
var inst_27876 = (state_27922[(11)]);
var inst_27877 = (state_27922[(12)]);
var inst_27884 = (state_27922[(2)]);
var inst_27885 = (inst_27877 + (1));
var tmp27931 = inst_27874;
var tmp27932 = inst_27875;
var tmp27933 = inst_27876;
var inst_27874__$1 = tmp27931;
var inst_27875__$1 = tmp27932;
var inst_27876__$1 = tmp27933;
var inst_27877__$1 = inst_27885;
var state_27922__$1 = (function (){var statearr_27936 = state_27922;
(statearr_27936[(8)] = inst_27874__$1);

(statearr_27936[(14)] = inst_27884);

(statearr_27936[(9)] = inst_27875__$1);

(statearr_27936[(11)] = inst_27876__$1);

(statearr_27936[(12)] = inst_27877__$1);

return statearr_27936;
})();
var statearr_27937_27972 = state_27922__$1;
(statearr_27937_27972[(2)] = null);

(statearr_27937_27972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27923 === (22))){
var state_27922__$1 = state_27922;
var statearr_27938_27973 = state_27922__$1;
(statearr_27938_27973[(2)] = null);

(statearr_27938_27973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27923 === (6))){
var inst_27863 = (state_27922[(13)]);
var inst_27872 = f.call(null,inst_27863);
var inst_27873 = cljs.core.seq.call(null,inst_27872);
var inst_27874 = inst_27873;
var inst_27875 = null;
var inst_27876 = (0);
var inst_27877 = (0);
var state_27922__$1 = (function (){var statearr_27939 = state_27922;
(statearr_27939[(8)] = inst_27874);

(statearr_27939[(9)] = inst_27875);

(statearr_27939[(11)] = inst_27876);

(statearr_27939[(12)] = inst_27877);

return statearr_27939;
})();
var statearr_27940_27974 = state_27922__$1;
(statearr_27940_27974[(2)] = null);

(statearr_27940_27974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27923 === (17))){
var inst_27888 = (state_27922[(7)]);
var inst_27892 = cljs.core.chunk_first.call(null,inst_27888);
var inst_27893 = cljs.core.chunk_rest.call(null,inst_27888);
var inst_27894 = cljs.core.count.call(null,inst_27892);
var inst_27874 = inst_27893;
var inst_27875 = inst_27892;
var inst_27876 = inst_27894;
var inst_27877 = (0);
var state_27922__$1 = (function (){var statearr_27941 = state_27922;
(statearr_27941[(8)] = inst_27874);

(statearr_27941[(9)] = inst_27875);

(statearr_27941[(11)] = inst_27876);

(statearr_27941[(12)] = inst_27877);

return statearr_27941;
})();
var statearr_27942_27975 = state_27922__$1;
(statearr_27942_27975[(2)] = null);

(statearr_27942_27975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27923 === (3))){
var inst_27920 = (state_27922[(2)]);
var state_27922__$1 = state_27922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27922__$1,inst_27920);
} else {
if((state_val_27923 === (12))){
var inst_27908 = (state_27922[(2)]);
var state_27922__$1 = state_27922;
var statearr_27943_27976 = state_27922__$1;
(statearr_27943_27976[(2)] = inst_27908);

(statearr_27943_27976[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27923 === (2))){
var state_27922__$1 = state_27922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27922__$1,(4),in$);
} else {
if((state_val_27923 === (23))){
var inst_27916 = (state_27922[(2)]);
var state_27922__$1 = state_27922;
var statearr_27944_27977 = state_27922__$1;
(statearr_27944_27977[(2)] = inst_27916);

(statearr_27944_27977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27923 === (19))){
var inst_27903 = (state_27922[(2)]);
var state_27922__$1 = state_27922;
var statearr_27945_27978 = state_27922__$1;
(statearr_27945_27978[(2)] = inst_27903);

(statearr_27945_27978[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27923 === (11))){
var inst_27874 = (state_27922[(8)]);
var inst_27888 = (state_27922[(7)]);
var inst_27888__$1 = cljs.core.seq.call(null,inst_27874);
var state_27922__$1 = (function (){var statearr_27946 = state_27922;
(statearr_27946[(7)] = inst_27888__$1);

return statearr_27946;
})();
if(inst_27888__$1){
var statearr_27947_27979 = state_27922__$1;
(statearr_27947_27979[(1)] = (14));

} else {
var statearr_27948_27980 = state_27922__$1;
(statearr_27948_27980[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27923 === (9))){
var inst_27910 = (state_27922[(2)]);
var inst_27911 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27922__$1 = (function (){var statearr_27949 = state_27922;
(statearr_27949[(15)] = inst_27910);

return statearr_27949;
})();
if(cljs.core.truth_(inst_27911)){
var statearr_27950_27981 = state_27922__$1;
(statearr_27950_27981[(1)] = (21));

} else {
var statearr_27951_27982 = state_27922__$1;
(statearr_27951_27982[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27923 === (5))){
var inst_27866 = cljs.core.async.close_BANG_.call(null,out);
var state_27922__$1 = state_27922;
var statearr_27952_27983 = state_27922__$1;
(statearr_27952_27983[(2)] = inst_27866);

(statearr_27952_27983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27923 === (14))){
var inst_27888 = (state_27922[(7)]);
var inst_27890 = cljs.core.chunked_seq_QMARK_.call(null,inst_27888);
var state_27922__$1 = state_27922;
if(inst_27890){
var statearr_27953_27984 = state_27922__$1;
(statearr_27953_27984[(1)] = (17));

} else {
var statearr_27954_27985 = state_27922__$1;
(statearr_27954_27985[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27923 === (16))){
var inst_27906 = (state_27922[(2)]);
var state_27922__$1 = state_27922;
var statearr_27955_27986 = state_27922__$1;
(statearr_27955_27986[(2)] = inst_27906);

(statearr_27955_27986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27923 === (10))){
var inst_27875 = (state_27922[(9)]);
var inst_27877 = (state_27922[(12)]);
var inst_27882 = cljs.core._nth.call(null,inst_27875,inst_27877);
var state_27922__$1 = state_27922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27922__$1,(13),out,inst_27882);
} else {
if((state_val_27923 === (18))){
var inst_27888 = (state_27922[(7)]);
var inst_27897 = cljs.core.first.call(null,inst_27888);
var state_27922__$1 = state_27922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27922__$1,(20),out,inst_27897);
} else {
if((state_val_27923 === (8))){
var inst_27876 = (state_27922[(11)]);
var inst_27877 = (state_27922[(12)]);
var inst_27879 = (inst_27877 < inst_27876);
var inst_27880 = inst_27879;
var state_27922__$1 = state_27922;
if(cljs.core.truth_(inst_27880)){
var statearr_27956_27987 = state_27922__$1;
(statearr_27956_27987[(1)] = (10));

} else {
var statearr_27957_27988 = state_27922__$1;
(statearr_27957_27988[(1)] = (11));

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
var statearr_27961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27961[(0)] = state_machine__15764__auto__);

(statearr_27961[(1)] = (1));

return statearr_27961;
});
var state_machine__15764__auto____1 = (function (state_27922){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_27922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e27962){if((e27962 instanceof Object)){
var ex__15767__auto__ = e27962;
var statearr_27963_27989 = state_27922;
(statearr_27963_27989[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27990 = state_27922;
state_27922 = G__27990;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_27922){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_27922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto__))
})();
var state__15821__auto__ = (function (){var statearr_27964 = f__15820__auto__.call(null);
(statearr_27964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto__);

return statearr_27964;
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
var c__15819__auto___28087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___28087,out){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___28087,out){
return (function (state_28062){
var state_val_28063 = (state_28062[(1)]);
if((state_val_28063 === (7))){
var inst_28057 = (state_28062[(2)]);
var state_28062__$1 = state_28062;
var statearr_28064_28088 = state_28062__$1;
(statearr_28064_28088[(2)] = inst_28057);

(statearr_28064_28088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (1))){
var inst_28039 = null;
var state_28062__$1 = (function (){var statearr_28065 = state_28062;
(statearr_28065[(7)] = inst_28039);

return statearr_28065;
})();
var statearr_28066_28089 = state_28062__$1;
(statearr_28066_28089[(2)] = null);

(statearr_28066_28089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (4))){
var inst_28042 = (state_28062[(8)]);
var inst_28042__$1 = (state_28062[(2)]);
var inst_28043 = (inst_28042__$1 == null);
var inst_28044 = cljs.core.not.call(null,inst_28043);
var state_28062__$1 = (function (){var statearr_28067 = state_28062;
(statearr_28067[(8)] = inst_28042__$1);

return statearr_28067;
})();
if(inst_28044){
var statearr_28068_28090 = state_28062__$1;
(statearr_28068_28090[(1)] = (5));

} else {
var statearr_28069_28091 = state_28062__$1;
(statearr_28069_28091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (6))){
var state_28062__$1 = state_28062;
var statearr_28070_28092 = state_28062__$1;
(statearr_28070_28092[(2)] = null);

(statearr_28070_28092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (3))){
var inst_28059 = (state_28062[(2)]);
var inst_28060 = cljs.core.async.close_BANG_.call(null,out);
var state_28062__$1 = (function (){var statearr_28071 = state_28062;
(statearr_28071[(9)] = inst_28059);

return statearr_28071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28062__$1,inst_28060);
} else {
if((state_val_28063 === (2))){
var state_28062__$1 = state_28062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28062__$1,(4),ch);
} else {
if((state_val_28063 === (11))){
var inst_28042 = (state_28062[(8)]);
var inst_28051 = (state_28062[(2)]);
var inst_28039 = inst_28042;
var state_28062__$1 = (function (){var statearr_28072 = state_28062;
(statearr_28072[(7)] = inst_28039);

(statearr_28072[(10)] = inst_28051);

return statearr_28072;
})();
var statearr_28073_28093 = state_28062__$1;
(statearr_28073_28093[(2)] = null);

(statearr_28073_28093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (9))){
var inst_28042 = (state_28062[(8)]);
var state_28062__$1 = state_28062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28062__$1,(11),out,inst_28042);
} else {
if((state_val_28063 === (5))){
var inst_28042 = (state_28062[(8)]);
var inst_28039 = (state_28062[(7)]);
var inst_28046 = cljs.core._EQ_.call(null,inst_28042,inst_28039);
var state_28062__$1 = state_28062;
if(inst_28046){
var statearr_28075_28094 = state_28062__$1;
(statearr_28075_28094[(1)] = (8));

} else {
var statearr_28076_28095 = state_28062__$1;
(statearr_28076_28095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (10))){
var inst_28054 = (state_28062[(2)]);
var state_28062__$1 = state_28062;
var statearr_28077_28096 = state_28062__$1;
(statearr_28077_28096[(2)] = inst_28054);

(statearr_28077_28096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28063 === (8))){
var inst_28039 = (state_28062[(7)]);
var tmp28074 = inst_28039;
var inst_28039__$1 = tmp28074;
var state_28062__$1 = (function (){var statearr_28078 = state_28062;
(statearr_28078[(7)] = inst_28039__$1);

return statearr_28078;
})();
var statearr_28079_28097 = state_28062__$1;
(statearr_28079_28097[(2)] = null);

(statearr_28079_28097[(1)] = (2));


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
});})(c__15819__auto___28087,out))
;
return ((function (switch__15763__auto__,c__15819__auto___28087,out){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_28083 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28083[(0)] = state_machine__15764__auto__);

(statearr_28083[(1)] = (1));

return statearr_28083;
});
var state_machine__15764__auto____1 = (function (state_28062){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_28062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e28084){if((e28084 instanceof Object)){
var ex__15767__auto__ = e28084;
var statearr_28085_28098 = state_28062;
(statearr_28085_28098[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28099 = state_28062;
state_28062 = G__28099;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_28062){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_28062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___28087,out))
})();
var state__15821__auto__ = (function (){var statearr_28086 = f__15820__auto__.call(null);
(statearr_28086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___28087);

return statearr_28086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___28087,out))
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
var c__15819__auto___28234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___28234,out){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___28234,out){
return (function (state_28204){
var state_val_28205 = (state_28204[(1)]);
if((state_val_28205 === (7))){
var inst_28200 = (state_28204[(2)]);
var state_28204__$1 = state_28204;
var statearr_28206_28235 = state_28204__$1;
(statearr_28206_28235[(2)] = inst_28200);

(statearr_28206_28235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (1))){
var inst_28167 = (new Array(n));
var inst_28168 = inst_28167;
var inst_28169 = (0);
var state_28204__$1 = (function (){var statearr_28207 = state_28204;
(statearr_28207[(7)] = inst_28169);

(statearr_28207[(8)] = inst_28168);

return statearr_28207;
})();
var statearr_28208_28236 = state_28204__$1;
(statearr_28208_28236[(2)] = null);

(statearr_28208_28236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (4))){
var inst_28172 = (state_28204[(9)]);
var inst_28172__$1 = (state_28204[(2)]);
var inst_28173 = (inst_28172__$1 == null);
var inst_28174 = cljs.core.not.call(null,inst_28173);
var state_28204__$1 = (function (){var statearr_28209 = state_28204;
(statearr_28209[(9)] = inst_28172__$1);

return statearr_28209;
})();
if(inst_28174){
var statearr_28210_28237 = state_28204__$1;
(statearr_28210_28237[(1)] = (5));

} else {
var statearr_28211_28238 = state_28204__$1;
(statearr_28211_28238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (15))){
var inst_28194 = (state_28204[(2)]);
var state_28204__$1 = state_28204;
var statearr_28212_28239 = state_28204__$1;
(statearr_28212_28239[(2)] = inst_28194);

(statearr_28212_28239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (13))){
var state_28204__$1 = state_28204;
var statearr_28213_28240 = state_28204__$1;
(statearr_28213_28240[(2)] = null);

(statearr_28213_28240[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (6))){
var inst_28169 = (state_28204[(7)]);
var inst_28190 = (inst_28169 > (0));
var state_28204__$1 = state_28204;
if(cljs.core.truth_(inst_28190)){
var statearr_28214_28241 = state_28204__$1;
(statearr_28214_28241[(1)] = (12));

} else {
var statearr_28215_28242 = state_28204__$1;
(statearr_28215_28242[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (3))){
var inst_28202 = (state_28204[(2)]);
var state_28204__$1 = state_28204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28204__$1,inst_28202);
} else {
if((state_val_28205 === (12))){
var inst_28168 = (state_28204[(8)]);
var inst_28192 = cljs.core.vec.call(null,inst_28168);
var state_28204__$1 = state_28204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28204__$1,(15),out,inst_28192);
} else {
if((state_val_28205 === (2))){
var state_28204__$1 = state_28204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28204__$1,(4),ch);
} else {
if((state_val_28205 === (11))){
var inst_28184 = (state_28204[(2)]);
var inst_28185 = (new Array(n));
var inst_28168 = inst_28185;
var inst_28169 = (0);
var state_28204__$1 = (function (){var statearr_28216 = state_28204;
(statearr_28216[(7)] = inst_28169);

(statearr_28216[(10)] = inst_28184);

(statearr_28216[(8)] = inst_28168);

return statearr_28216;
})();
var statearr_28217_28243 = state_28204__$1;
(statearr_28217_28243[(2)] = null);

(statearr_28217_28243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (9))){
var inst_28168 = (state_28204[(8)]);
var inst_28182 = cljs.core.vec.call(null,inst_28168);
var state_28204__$1 = state_28204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28204__$1,(11),out,inst_28182);
} else {
if((state_val_28205 === (5))){
var inst_28172 = (state_28204[(9)]);
var inst_28169 = (state_28204[(7)]);
var inst_28177 = (state_28204[(11)]);
var inst_28168 = (state_28204[(8)]);
var inst_28176 = (inst_28168[inst_28169] = inst_28172);
var inst_28177__$1 = (inst_28169 + (1));
var inst_28178 = (inst_28177__$1 < n);
var state_28204__$1 = (function (){var statearr_28218 = state_28204;
(statearr_28218[(12)] = inst_28176);

(statearr_28218[(11)] = inst_28177__$1);

return statearr_28218;
})();
if(cljs.core.truth_(inst_28178)){
var statearr_28219_28244 = state_28204__$1;
(statearr_28219_28244[(1)] = (8));

} else {
var statearr_28220_28245 = state_28204__$1;
(statearr_28220_28245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (14))){
var inst_28197 = (state_28204[(2)]);
var inst_28198 = cljs.core.async.close_BANG_.call(null,out);
var state_28204__$1 = (function (){var statearr_28222 = state_28204;
(statearr_28222[(13)] = inst_28197);

return statearr_28222;
})();
var statearr_28223_28246 = state_28204__$1;
(statearr_28223_28246[(2)] = inst_28198);

(statearr_28223_28246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (10))){
var inst_28188 = (state_28204[(2)]);
var state_28204__$1 = state_28204;
var statearr_28224_28247 = state_28204__$1;
(statearr_28224_28247[(2)] = inst_28188);

(statearr_28224_28247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (8))){
var inst_28177 = (state_28204[(11)]);
var inst_28168 = (state_28204[(8)]);
var tmp28221 = inst_28168;
var inst_28168__$1 = tmp28221;
var inst_28169 = inst_28177;
var state_28204__$1 = (function (){var statearr_28225 = state_28204;
(statearr_28225[(7)] = inst_28169);

(statearr_28225[(8)] = inst_28168__$1);

return statearr_28225;
})();
var statearr_28226_28248 = state_28204__$1;
(statearr_28226_28248[(2)] = null);

(statearr_28226_28248[(1)] = (2));


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
});})(c__15819__auto___28234,out))
;
return ((function (switch__15763__auto__,c__15819__auto___28234,out){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_28230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28230[(0)] = state_machine__15764__auto__);

(statearr_28230[(1)] = (1));

return statearr_28230;
});
var state_machine__15764__auto____1 = (function (state_28204){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_28204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e28231){if((e28231 instanceof Object)){
var ex__15767__auto__ = e28231;
var statearr_28232_28249 = state_28204;
(statearr_28232_28249[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28250 = state_28204;
state_28204 = G__28250;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_28204){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_28204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___28234,out))
})();
var state__15821__auto__ = (function (){var statearr_28233 = f__15820__auto__.call(null);
(statearr_28233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___28234);

return statearr_28233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___28234,out))
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
var c__15819__auto___28393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15819__auto___28393,out){
return (function (){
var f__15820__auto__ = (function (){var switch__15763__auto__ = ((function (c__15819__auto___28393,out){
return (function (state_28363){
var state_val_28364 = (state_28363[(1)]);
if((state_val_28364 === (7))){
var inst_28359 = (state_28363[(2)]);
var state_28363__$1 = state_28363;
var statearr_28365_28394 = state_28363__$1;
(statearr_28365_28394[(2)] = inst_28359);

(statearr_28365_28394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (1))){
var inst_28322 = [];
var inst_28323 = inst_28322;
var inst_28324 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28363__$1 = (function (){var statearr_28366 = state_28363;
(statearr_28366[(7)] = inst_28323);

(statearr_28366[(8)] = inst_28324);

return statearr_28366;
})();
var statearr_28367_28395 = state_28363__$1;
(statearr_28367_28395[(2)] = null);

(statearr_28367_28395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (4))){
var inst_28327 = (state_28363[(9)]);
var inst_28327__$1 = (state_28363[(2)]);
var inst_28328 = (inst_28327__$1 == null);
var inst_28329 = cljs.core.not.call(null,inst_28328);
var state_28363__$1 = (function (){var statearr_28368 = state_28363;
(statearr_28368[(9)] = inst_28327__$1);

return statearr_28368;
})();
if(inst_28329){
var statearr_28369_28396 = state_28363__$1;
(statearr_28369_28396[(1)] = (5));

} else {
var statearr_28370_28397 = state_28363__$1;
(statearr_28370_28397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (15))){
var inst_28353 = (state_28363[(2)]);
var state_28363__$1 = state_28363;
var statearr_28371_28398 = state_28363__$1;
(statearr_28371_28398[(2)] = inst_28353);

(statearr_28371_28398[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (13))){
var state_28363__$1 = state_28363;
var statearr_28372_28399 = state_28363__$1;
(statearr_28372_28399[(2)] = null);

(statearr_28372_28399[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (6))){
var inst_28323 = (state_28363[(7)]);
var inst_28348 = inst_28323.length;
var inst_28349 = (inst_28348 > (0));
var state_28363__$1 = state_28363;
if(cljs.core.truth_(inst_28349)){
var statearr_28373_28400 = state_28363__$1;
(statearr_28373_28400[(1)] = (12));

} else {
var statearr_28374_28401 = state_28363__$1;
(statearr_28374_28401[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (3))){
var inst_28361 = (state_28363[(2)]);
var state_28363__$1 = state_28363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28363__$1,inst_28361);
} else {
if((state_val_28364 === (12))){
var inst_28323 = (state_28363[(7)]);
var inst_28351 = cljs.core.vec.call(null,inst_28323);
var state_28363__$1 = state_28363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28363__$1,(15),out,inst_28351);
} else {
if((state_val_28364 === (2))){
var state_28363__$1 = state_28363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28363__$1,(4),ch);
} else {
if((state_val_28364 === (11))){
var inst_28327 = (state_28363[(9)]);
var inst_28331 = (state_28363[(10)]);
var inst_28341 = (state_28363[(2)]);
var inst_28342 = [];
var inst_28343 = inst_28342.push(inst_28327);
var inst_28323 = inst_28342;
var inst_28324 = inst_28331;
var state_28363__$1 = (function (){var statearr_28375 = state_28363;
(statearr_28375[(7)] = inst_28323);

(statearr_28375[(11)] = inst_28341);

(statearr_28375[(8)] = inst_28324);

(statearr_28375[(12)] = inst_28343);

return statearr_28375;
})();
var statearr_28376_28402 = state_28363__$1;
(statearr_28376_28402[(2)] = null);

(statearr_28376_28402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (9))){
var inst_28323 = (state_28363[(7)]);
var inst_28339 = cljs.core.vec.call(null,inst_28323);
var state_28363__$1 = state_28363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28363__$1,(11),out,inst_28339);
} else {
if((state_val_28364 === (5))){
var inst_28327 = (state_28363[(9)]);
var inst_28331 = (state_28363[(10)]);
var inst_28324 = (state_28363[(8)]);
var inst_28331__$1 = f.call(null,inst_28327);
var inst_28332 = cljs.core._EQ_.call(null,inst_28331__$1,inst_28324);
var inst_28333 = cljs.core.keyword_identical_QMARK_.call(null,inst_28324,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28334 = (inst_28332) || (inst_28333);
var state_28363__$1 = (function (){var statearr_28377 = state_28363;
(statearr_28377[(10)] = inst_28331__$1);

return statearr_28377;
})();
if(cljs.core.truth_(inst_28334)){
var statearr_28378_28403 = state_28363__$1;
(statearr_28378_28403[(1)] = (8));

} else {
var statearr_28379_28404 = state_28363__$1;
(statearr_28379_28404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (14))){
var inst_28356 = (state_28363[(2)]);
var inst_28357 = cljs.core.async.close_BANG_.call(null,out);
var state_28363__$1 = (function (){var statearr_28381 = state_28363;
(statearr_28381[(13)] = inst_28356);

return statearr_28381;
})();
var statearr_28382_28405 = state_28363__$1;
(statearr_28382_28405[(2)] = inst_28357);

(statearr_28382_28405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (10))){
var inst_28346 = (state_28363[(2)]);
var state_28363__$1 = state_28363;
var statearr_28383_28406 = state_28363__$1;
(statearr_28383_28406[(2)] = inst_28346);

(statearr_28383_28406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (8))){
var inst_28327 = (state_28363[(9)]);
var inst_28331 = (state_28363[(10)]);
var inst_28323 = (state_28363[(7)]);
var inst_28336 = inst_28323.push(inst_28327);
var tmp28380 = inst_28323;
var inst_28323__$1 = tmp28380;
var inst_28324 = inst_28331;
var state_28363__$1 = (function (){var statearr_28384 = state_28363;
(statearr_28384[(7)] = inst_28323__$1);

(statearr_28384[(14)] = inst_28336);

(statearr_28384[(8)] = inst_28324);

return statearr_28384;
})();
var statearr_28385_28407 = state_28363__$1;
(statearr_28385_28407[(2)] = null);

(statearr_28385_28407[(1)] = (2));


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
});})(c__15819__auto___28393,out))
;
return ((function (switch__15763__auto__,c__15819__auto___28393,out){
return (function() {
var state_machine__15764__auto__ = null;
var state_machine__15764__auto____0 = (function (){
var statearr_28389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28389[(0)] = state_machine__15764__auto__);

(statearr_28389[(1)] = (1));

return statearr_28389;
});
var state_machine__15764__auto____1 = (function (state_28363){
while(true){
var ret_value__15765__auto__ = (function (){try{while(true){
var result__15766__auto__ = switch__15763__auto__.call(null,state_28363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15766__auto__;
}
break;
}
}catch (e28390){if((e28390 instanceof Object)){
var ex__15767__auto__ = e28390;
var statearr_28391_28408 = state_28363;
(statearr_28391_28408[(5)] = ex__15767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28409 = state_28363;
state_28363 = G__28409;
continue;
} else {
return ret_value__15765__auto__;
}
break;
}
});
state_machine__15764__auto__ = function(state_28363){
switch(arguments.length){
case 0:
return state_machine__15764__auto____0.call(this);
case 1:
return state_machine__15764__auto____1.call(this,state_28363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15764__auto____0;
state_machine__15764__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15764__auto____1;
return state_machine__15764__auto__;
})()
;})(switch__15763__auto__,c__15819__auto___28393,out))
})();
var state__15821__auto__ = (function (){var statearr_28392 = f__15820__auto__.call(null);
(statearr_28392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15819__auto___28393);

return statearr_28392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15821__auto__);
});})(c__15819__auto___28393,out))
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