// Compiled by ClojureScript 0.0-2740 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t18757 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18757 = (function (f,fn_handler,meta18758){
this.f = f;
this.fn_handler = fn_handler;
this.meta18758 = meta18758;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18757.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18757.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t18757.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t18757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18759){
var self__ = this;
var _18759__$1 = this;
return self__.meta18758;
});

cljs.core.async.t18757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18759,meta18758__$1){
var self__ = this;
var _18759__$1 = this;
return (new cljs.core.async.t18757(self__.f,self__.fn_handler,meta18758__$1));
});

cljs.core.async.t18757.cljs$lang$type = true;

cljs.core.async.t18757.cljs$lang$ctorStr = "cljs.core.async/t18757";

cljs.core.async.t18757.cljs$lang$ctorPrWriter = (function (this__4346__auto__,writer__4347__auto__,opt__4348__auto__){
return cljs.core._write.call(null,writer__4347__auto__,"cljs.core.async/t18757");
});

cljs.core.async.__GT_t18757 = (function __GT_t18757(f__$1,fn_handler__$1,meta18758){
return (new cljs.core.async.t18757(f__$1,fn_handler__$1,meta18758));
});

}

return (new cljs.core.async.t18757(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/out/cljs/core/async.cljs"], null)));
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
var G__18761 = buff;
if(G__18761){
var bit__4440__auto__ = null;
if(cljs.core.truth_((function (){var or__3759__auto__ = bit__4440__auto__;
if(cljs.core.truth_(or__3759__auto__)){
return or__3759__auto__;
} else {
return G__18761.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__18761.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18761);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18761);
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
var val_18762 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18762);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18762,ret){
return (function (){
return fn1.call(null,val_18762);
});})(val_18762,ret))
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
var n__4646__auto___18763 = n;
var x_18764 = (0);
while(true){
if((x_18764 < n__4646__auto___18763)){
(a[x_18764] = (0));

var G__18765 = (x_18764 + (1));
x_18764 = G__18765;
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

var G__18766 = (i + (1));
i = G__18766;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t18770 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18770 = (function (flag,alt_flag,meta18771){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18771 = meta18771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18770.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18770.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t18770.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t18770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18772){
var self__ = this;
var _18772__$1 = this;
return self__.meta18771;
});})(flag))
;

cljs.core.async.t18770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18772,meta18771__$1){
var self__ = this;
var _18772__$1 = this;
return (new cljs.core.async.t18770(self__.flag,self__.alt_flag,meta18771__$1));
});})(flag))
;

cljs.core.async.t18770.cljs$lang$type = true;

cljs.core.async.t18770.cljs$lang$ctorStr = "cljs.core.async/t18770";

cljs.core.async.t18770.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4346__auto__,writer__4347__auto__,opt__4348__auto__){
return cljs.core._write.call(null,writer__4347__auto__,"cljs.core.async/t18770");
});})(flag))
;

cljs.core.async.__GT_t18770 = ((function (flag){
return (function __GT_t18770(flag__$1,alt_flag__$1,meta18771){
return (new cljs.core.async.t18770(flag__$1,alt_flag__$1,meta18771));
});})(flag))
;

}

return (new cljs.core.async.t18770(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t18776 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18776 = (function (cb,flag,alt_handler,meta18777){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18777 = meta18777;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18776.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18776.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t18776.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t18776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18778){
var self__ = this;
var _18778__$1 = this;
return self__.meta18777;
});

cljs.core.async.t18776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18778,meta18777__$1){
var self__ = this;
var _18778__$1 = this;
return (new cljs.core.async.t18776(self__.cb,self__.flag,self__.alt_handler,meta18777__$1));
});

cljs.core.async.t18776.cljs$lang$type = true;

cljs.core.async.t18776.cljs$lang$ctorStr = "cljs.core.async/t18776";

cljs.core.async.t18776.cljs$lang$ctorPrWriter = (function (this__4346__auto__,writer__4347__auto__,opt__4348__auto__){
return cljs.core._write.call(null,writer__4347__auto__,"cljs.core.async/t18776");
});

cljs.core.async.__GT_t18776 = (function __GT_t18776(cb__$1,flag__$1,alt_handler__$1,meta18777){
return (new cljs.core.async.t18776(cb__$1,flag__$1,alt_handler__$1,meta18777));
});

}

return (new cljs.core.async.t18776(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/out/cljs/core/async.cljs"], null)));
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
return (function (p1__18779_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18779_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18780_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18780_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3759__auto__ = wport;
if(cljs.core.truth_(or__3759__auto__)){
return or__3759__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18781 = (i + (1));
i = G__18781;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3759__auto__ = ret;
if(cljs.core.truth_(or__3759__auto__)){
return or__3759__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3747__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3747__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3747__auto__;
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
var alts_BANG___delegate = function (ports,p__18782){
var map__18784 = p__18782;
var map__18784__$1 = ((cljs.core.seq_QMARK_.call(null,map__18784))?cljs.core.apply.call(null,cljs.core.hash_map,map__18784):map__18784);
var opts = map__18784__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__18782 = null;
if (arguments.length > 1) {
var G__18785__i = 0, G__18785__a = new Array(arguments.length -  1);
while (G__18785__i < G__18785__a.length) {G__18785__a[G__18785__i] = arguments[G__18785__i + 1]; ++G__18785__i;}
  p__18782 = new cljs.core.IndexedSeq(G__18785__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__18782);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18786){
var ports = cljs.core.first(arglist__18786);
var p__18782 = cljs.core.rest(arglist__18786);
return alts_BANG___delegate(ports,p__18782);
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
var c__7173__auto___18881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7173__auto___18881){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (c__7173__auto___18881){
return (function (state_18857){
var state_val_18858 = (state_18857[(1)]);
if((state_val_18858 === (7))){
var inst_18853 = (state_18857[(2)]);
var state_18857__$1 = state_18857;
var statearr_18859_18882 = state_18857__$1;
(statearr_18859_18882[(2)] = inst_18853);

(statearr_18859_18882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18858 === (1))){
var state_18857__$1 = state_18857;
var statearr_18860_18883 = state_18857__$1;
(statearr_18860_18883[(2)] = null);

(statearr_18860_18883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18858 === (4))){
var inst_18836 = (state_18857[(7)]);
var inst_18836__$1 = (state_18857[(2)]);
var inst_18837 = (inst_18836__$1 == null);
var state_18857__$1 = (function (){var statearr_18861 = state_18857;
(statearr_18861[(7)] = inst_18836__$1);

return statearr_18861;
})();
if(cljs.core.truth_(inst_18837)){
var statearr_18862_18884 = state_18857__$1;
(statearr_18862_18884[(1)] = (5));

} else {
var statearr_18863_18885 = state_18857__$1;
(statearr_18863_18885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18858 === (13))){
var state_18857__$1 = state_18857;
var statearr_18864_18886 = state_18857__$1;
(statearr_18864_18886[(2)] = null);

(statearr_18864_18886[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18858 === (6))){
var inst_18836 = (state_18857[(7)]);
var state_18857__$1 = state_18857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18857__$1,(11),to,inst_18836);
} else {
if((state_val_18858 === (3))){
var inst_18855 = (state_18857[(2)]);
var state_18857__$1 = state_18857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18857__$1,inst_18855);
} else {
if((state_val_18858 === (12))){
var state_18857__$1 = state_18857;
var statearr_18865_18887 = state_18857__$1;
(statearr_18865_18887[(2)] = null);

(statearr_18865_18887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18858 === (2))){
var state_18857__$1 = state_18857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18857__$1,(4),from);
} else {
if((state_val_18858 === (11))){
var inst_18846 = (state_18857[(2)]);
var state_18857__$1 = state_18857;
if(cljs.core.truth_(inst_18846)){
var statearr_18866_18888 = state_18857__$1;
(statearr_18866_18888[(1)] = (12));

} else {
var statearr_18867_18889 = state_18857__$1;
(statearr_18867_18889[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18858 === (9))){
var state_18857__$1 = state_18857;
var statearr_18868_18890 = state_18857__$1;
(statearr_18868_18890[(2)] = null);

(statearr_18868_18890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18858 === (5))){
var state_18857__$1 = state_18857;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18869_18891 = state_18857__$1;
(statearr_18869_18891[(1)] = (8));

} else {
var statearr_18870_18892 = state_18857__$1;
(statearr_18870_18892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18858 === (14))){
var inst_18851 = (state_18857[(2)]);
var state_18857__$1 = state_18857;
var statearr_18871_18893 = state_18857__$1;
(statearr_18871_18893[(2)] = inst_18851);

(statearr_18871_18893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18858 === (10))){
var inst_18843 = (state_18857[(2)]);
var state_18857__$1 = state_18857;
var statearr_18872_18894 = state_18857__$1;
(statearr_18872_18894[(2)] = inst_18843);

(statearr_18872_18894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18858 === (8))){
var inst_18840 = cljs.core.async.close_BANG_.call(null,to);
var state_18857__$1 = state_18857;
var statearr_18873_18895 = state_18857__$1;
(statearr_18873_18895[(2)] = inst_18840);

(statearr_18873_18895[(1)] = (10));


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
});})(c__7173__auto___18881))
;
return ((function (switch__7117__auto__,c__7173__auto___18881){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_18877 = [null,null,null,null,null,null,null,null];
(statearr_18877[(0)] = state_machine__7118__auto__);

(statearr_18877[(1)] = (1));

return statearr_18877;
});
var state_machine__7118__auto____1 = (function (state_18857){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_18857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e18878){if((e18878 instanceof Object)){
var ex__7121__auto__ = e18878;
var statearr_18879_18896 = state_18857;
(statearr_18879_18896[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18897 = state_18857;
state_18857 = G__18897;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_18857){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_18857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(switch__7117__auto__,c__7173__auto___18881))
})();
var state__7175__auto__ = (function (){var statearr_18880 = f__7174__auto__.call(null);
(statearr_18880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto___18881);

return statearr_18880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(c__7173__auto___18881))
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
return (function (p__19081){
var vec__19082 = p__19081;
var v = cljs.core.nth.call(null,vec__19082,(0),null);
var p = cljs.core.nth.call(null,vec__19082,(1),null);
var job = vec__19082;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7173__auto___19264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7173__auto___19264,res,vec__19082,v,p,job,jobs,results){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (c__7173__auto___19264,res,vec__19082,v,p,job,jobs,results){
return (function (state_19087){
var state_val_19088 = (state_19087[(1)]);
if((state_val_19088 === (2))){
var inst_19084 = (state_19087[(2)]);
var inst_19085 = cljs.core.async.close_BANG_.call(null,res);
var state_19087__$1 = (function (){var statearr_19089 = state_19087;
(statearr_19089[(7)] = inst_19084);

return statearr_19089;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19087__$1,inst_19085);
} else {
if((state_val_19088 === (1))){
var state_19087__$1 = state_19087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19087__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7173__auto___19264,res,vec__19082,v,p,job,jobs,results))
;
return ((function (switch__7117__auto__,c__7173__auto___19264,res,vec__19082,v,p,job,jobs,results){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_19093 = [null,null,null,null,null,null,null,null];
(statearr_19093[(0)] = state_machine__7118__auto__);

(statearr_19093[(1)] = (1));

return statearr_19093;
});
var state_machine__7118__auto____1 = (function (state_19087){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_19087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e19094){if((e19094 instanceof Object)){
var ex__7121__auto__ = e19094;
var statearr_19095_19265 = state_19087;
(statearr_19095_19265[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19266 = state_19087;
state_19087 = G__19266;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_19087){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_19087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(switch__7117__auto__,c__7173__auto___19264,res,vec__19082,v,p,job,jobs,results))
})();
var state__7175__auto__ = (function (){var statearr_19096 = f__7174__auto__.call(null);
(statearr_19096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto___19264);

return statearr_19096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(c__7173__auto___19264,res,vec__19082,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19097){
var vec__19098 = p__19097;
var v = cljs.core.nth.call(null,vec__19098,(0),null);
var p = cljs.core.nth.call(null,vec__19098,(1),null);
var job = vec__19098;
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
var n__4646__auto___19267 = n;
var __19268 = (0);
while(true){
if((__19268 < n__4646__auto___19267)){
var G__19099_19269 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19099_19269) {
case "async":
var c__7173__auto___19271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19268,c__7173__auto___19271,G__19099_19269,n__4646__auto___19267,jobs,results,process,async){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (__19268,c__7173__auto___19271,G__19099_19269,n__4646__auto___19267,jobs,results,process,async){
return (function (state_19112){
var state_val_19113 = (state_19112[(1)]);
if((state_val_19113 === (7))){
var inst_19108 = (state_19112[(2)]);
var state_19112__$1 = state_19112;
var statearr_19114_19272 = state_19112__$1;
(statearr_19114_19272[(2)] = inst_19108);

(statearr_19114_19272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19113 === (6))){
var state_19112__$1 = state_19112;
var statearr_19115_19273 = state_19112__$1;
(statearr_19115_19273[(2)] = null);

(statearr_19115_19273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19113 === (5))){
var state_19112__$1 = state_19112;
var statearr_19116_19274 = state_19112__$1;
(statearr_19116_19274[(2)] = null);

(statearr_19116_19274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19113 === (4))){
var inst_19102 = (state_19112[(2)]);
var inst_19103 = async.call(null,inst_19102);
var state_19112__$1 = state_19112;
if(cljs.core.truth_(inst_19103)){
var statearr_19117_19275 = state_19112__$1;
(statearr_19117_19275[(1)] = (5));

} else {
var statearr_19118_19276 = state_19112__$1;
(statearr_19118_19276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19113 === (3))){
var inst_19110 = (state_19112[(2)]);
var state_19112__$1 = state_19112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19112__$1,inst_19110);
} else {
if((state_val_19113 === (2))){
var state_19112__$1 = state_19112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19112__$1,(4),jobs);
} else {
if((state_val_19113 === (1))){
var state_19112__$1 = state_19112;
var statearr_19119_19277 = state_19112__$1;
(statearr_19119_19277[(2)] = null);

(statearr_19119_19277[(1)] = (2));


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
});})(__19268,c__7173__auto___19271,G__19099_19269,n__4646__auto___19267,jobs,results,process,async))
;
return ((function (__19268,switch__7117__auto__,c__7173__auto___19271,G__19099_19269,n__4646__auto___19267,jobs,results,process,async){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_19123 = [null,null,null,null,null,null,null];
(statearr_19123[(0)] = state_machine__7118__auto__);

(statearr_19123[(1)] = (1));

return statearr_19123;
});
var state_machine__7118__auto____1 = (function (state_19112){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_19112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e19124){if((e19124 instanceof Object)){
var ex__7121__auto__ = e19124;
var statearr_19125_19278 = state_19112;
(statearr_19125_19278[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19279 = state_19112;
state_19112 = G__19279;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_19112){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_19112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(__19268,switch__7117__auto__,c__7173__auto___19271,G__19099_19269,n__4646__auto___19267,jobs,results,process,async))
})();
var state__7175__auto__ = (function (){var statearr_19126 = f__7174__auto__.call(null);
(statearr_19126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto___19271);

return statearr_19126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(__19268,c__7173__auto___19271,G__19099_19269,n__4646__auto___19267,jobs,results,process,async))
);


break;
case "compute":
var c__7173__auto___19280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19268,c__7173__auto___19280,G__19099_19269,n__4646__auto___19267,jobs,results,process,async){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (__19268,c__7173__auto___19280,G__19099_19269,n__4646__auto___19267,jobs,results,process,async){
return (function (state_19139){
var state_val_19140 = (state_19139[(1)]);
if((state_val_19140 === (7))){
var inst_19135 = (state_19139[(2)]);
var state_19139__$1 = state_19139;
var statearr_19141_19281 = state_19139__$1;
(statearr_19141_19281[(2)] = inst_19135);

(statearr_19141_19281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19140 === (6))){
var state_19139__$1 = state_19139;
var statearr_19142_19282 = state_19139__$1;
(statearr_19142_19282[(2)] = null);

(statearr_19142_19282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19140 === (5))){
var state_19139__$1 = state_19139;
var statearr_19143_19283 = state_19139__$1;
(statearr_19143_19283[(2)] = null);

(statearr_19143_19283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19140 === (4))){
var inst_19129 = (state_19139[(2)]);
var inst_19130 = process.call(null,inst_19129);
var state_19139__$1 = state_19139;
if(cljs.core.truth_(inst_19130)){
var statearr_19144_19284 = state_19139__$1;
(statearr_19144_19284[(1)] = (5));

} else {
var statearr_19145_19285 = state_19139__$1;
(statearr_19145_19285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19140 === (3))){
var inst_19137 = (state_19139[(2)]);
var state_19139__$1 = state_19139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19139__$1,inst_19137);
} else {
if((state_val_19140 === (2))){
var state_19139__$1 = state_19139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19139__$1,(4),jobs);
} else {
if((state_val_19140 === (1))){
var state_19139__$1 = state_19139;
var statearr_19146_19286 = state_19139__$1;
(statearr_19146_19286[(2)] = null);

(statearr_19146_19286[(1)] = (2));


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
});})(__19268,c__7173__auto___19280,G__19099_19269,n__4646__auto___19267,jobs,results,process,async))
;
return ((function (__19268,switch__7117__auto__,c__7173__auto___19280,G__19099_19269,n__4646__auto___19267,jobs,results,process,async){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_19150 = [null,null,null,null,null,null,null];
(statearr_19150[(0)] = state_machine__7118__auto__);

(statearr_19150[(1)] = (1));

return statearr_19150;
});
var state_machine__7118__auto____1 = (function (state_19139){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_19139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e19151){if((e19151 instanceof Object)){
var ex__7121__auto__ = e19151;
var statearr_19152_19287 = state_19139;
(statearr_19152_19287[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19288 = state_19139;
state_19139 = G__19288;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_19139){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_19139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(__19268,switch__7117__auto__,c__7173__auto___19280,G__19099_19269,n__4646__auto___19267,jobs,results,process,async))
})();
var state__7175__auto__ = (function (){var statearr_19153 = f__7174__auto__.call(null);
(statearr_19153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto___19280);

return statearr_19153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(__19268,c__7173__auto___19280,G__19099_19269,n__4646__auto___19267,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19289 = (__19268 + (1));
__19268 = G__19289;
continue;
} else {
}
break;
}

var c__7173__auto___19290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7173__auto___19290,jobs,results,process,async){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (c__7173__auto___19290,jobs,results,process,async){
return (function (state_19175){
var state_val_19176 = (state_19175[(1)]);
if((state_val_19176 === (9))){
var inst_19168 = (state_19175[(2)]);
var state_19175__$1 = (function (){var statearr_19177 = state_19175;
(statearr_19177[(7)] = inst_19168);

return statearr_19177;
})();
var statearr_19178_19291 = state_19175__$1;
(statearr_19178_19291[(2)] = null);

(statearr_19178_19291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19176 === (8))){
var inst_19161 = (state_19175[(8)]);
var inst_19166 = (state_19175[(2)]);
var state_19175__$1 = (function (){var statearr_19179 = state_19175;
(statearr_19179[(9)] = inst_19166);

return statearr_19179;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19175__$1,(9),results,inst_19161);
} else {
if((state_val_19176 === (7))){
var inst_19171 = (state_19175[(2)]);
var state_19175__$1 = state_19175;
var statearr_19180_19292 = state_19175__$1;
(statearr_19180_19292[(2)] = inst_19171);

(statearr_19180_19292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19176 === (6))){
var inst_19156 = (state_19175[(10)]);
var inst_19161 = (state_19175[(8)]);
var inst_19161__$1 = cljs.core.async.chan.call(null,(1));
var inst_19162 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19163 = [inst_19156,inst_19161__$1];
var inst_19164 = (new cljs.core.PersistentVector(null,2,(5),inst_19162,inst_19163,null));
var state_19175__$1 = (function (){var statearr_19181 = state_19175;
(statearr_19181[(8)] = inst_19161__$1);

return statearr_19181;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19175__$1,(8),jobs,inst_19164);
} else {
if((state_val_19176 === (5))){
var inst_19159 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19175__$1 = state_19175;
var statearr_19182_19293 = state_19175__$1;
(statearr_19182_19293[(2)] = inst_19159);

(statearr_19182_19293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19176 === (4))){
var inst_19156 = (state_19175[(10)]);
var inst_19156__$1 = (state_19175[(2)]);
var inst_19157 = (inst_19156__$1 == null);
var state_19175__$1 = (function (){var statearr_19183 = state_19175;
(statearr_19183[(10)] = inst_19156__$1);

return statearr_19183;
})();
if(cljs.core.truth_(inst_19157)){
var statearr_19184_19294 = state_19175__$1;
(statearr_19184_19294[(1)] = (5));

} else {
var statearr_19185_19295 = state_19175__$1;
(statearr_19185_19295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19176 === (3))){
var inst_19173 = (state_19175[(2)]);
var state_19175__$1 = state_19175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19175__$1,inst_19173);
} else {
if((state_val_19176 === (2))){
var state_19175__$1 = state_19175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19175__$1,(4),from);
} else {
if((state_val_19176 === (1))){
var state_19175__$1 = state_19175;
var statearr_19186_19296 = state_19175__$1;
(statearr_19186_19296[(2)] = null);

(statearr_19186_19296[(1)] = (2));


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
});})(c__7173__auto___19290,jobs,results,process,async))
;
return ((function (switch__7117__auto__,c__7173__auto___19290,jobs,results,process,async){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_19190 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19190[(0)] = state_machine__7118__auto__);

(statearr_19190[(1)] = (1));

return statearr_19190;
});
var state_machine__7118__auto____1 = (function (state_19175){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_19175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e19191){if((e19191 instanceof Object)){
var ex__7121__auto__ = e19191;
var statearr_19192_19297 = state_19175;
(statearr_19192_19297[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19298 = state_19175;
state_19175 = G__19298;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_19175){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_19175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(switch__7117__auto__,c__7173__auto___19290,jobs,results,process,async))
})();
var state__7175__auto__ = (function (){var statearr_19193 = f__7174__auto__.call(null);
(statearr_19193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto___19290);

return statearr_19193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(c__7173__auto___19290,jobs,results,process,async))
);


var c__7173__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7173__auto__,jobs,results,process,async){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (c__7173__auto__,jobs,results,process,async){
return (function (state_19231){
var state_val_19232 = (state_19231[(1)]);
if((state_val_19232 === (7))){
var inst_19227 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
var statearr_19233_19299 = state_19231__$1;
(statearr_19233_19299[(2)] = inst_19227);

(statearr_19233_19299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (20))){
var state_19231__$1 = state_19231;
var statearr_19234_19300 = state_19231__$1;
(statearr_19234_19300[(2)] = null);

(statearr_19234_19300[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (1))){
var state_19231__$1 = state_19231;
var statearr_19235_19301 = state_19231__$1;
(statearr_19235_19301[(2)] = null);

(statearr_19235_19301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (4))){
var inst_19196 = (state_19231[(7)]);
var inst_19196__$1 = (state_19231[(2)]);
var inst_19197 = (inst_19196__$1 == null);
var state_19231__$1 = (function (){var statearr_19236 = state_19231;
(statearr_19236[(7)] = inst_19196__$1);

return statearr_19236;
})();
if(cljs.core.truth_(inst_19197)){
var statearr_19237_19302 = state_19231__$1;
(statearr_19237_19302[(1)] = (5));

} else {
var statearr_19238_19303 = state_19231__$1;
(statearr_19238_19303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (15))){
var inst_19209 = (state_19231[(8)]);
var state_19231__$1 = state_19231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19231__$1,(18),to,inst_19209);
} else {
if((state_val_19232 === (21))){
var inst_19222 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
var statearr_19239_19304 = state_19231__$1;
(statearr_19239_19304[(2)] = inst_19222);

(statearr_19239_19304[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (13))){
var inst_19224 = (state_19231[(2)]);
var state_19231__$1 = (function (){var statearr_19240 = state_19231;
(statearr_19240[(9)] = inst_19224);

return statearr_19240;
})();
var statearr_19241_19305 = state_19231__$1;
(statearr_19241_19305[(2)] = null);

(statearr_19241_19305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (6))){
var inst_19196 = (state_19231[(7)]);
var state_19231__$1 = state_19231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19231__$1,(11),inst_19196);
} else {
if((state_val_19232 === (17))){
var inst_19217 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
if(cljs.core.truth_(inst_19217)){
var statearr_19242_19306 = state_19231__$1;
(statearr_19242_19306[(1)] = (19));

} else {
var statearr_19243_19307 = state_19231__$1;
(statearr_19243_19307[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (3))){
var inst_19229 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19231__$1,inst_19229);
} else {
if((state_val_19232 === (12))){
var inst_19206 = (state_19231[(10)]);
var state_19231__$1 = state_19231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19231__$1,(14),inst_19206);
} else {
if((state_val_19232 === (2))){
var state_19231__$1 = state_19231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19231__$1,(4),results);
} else {
if((state_val_19232 === (19))){
var state_19231__$1 = state_19231;
var statearr_19244_19308 = state_19231__$1;
(statearr_19244_19308[(2)] = null);

(statearr_19244_19308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (11))){
var inst_19206 = (state_19231[(2)]);
var state_19231__$1 = (function (){var statearr_19245 = state_19231;
(statearr_19245[(10)] = inst_19206);

return statearr_19245;
})();
var statearr_19246_19309 = state_19231__$1;
(statearr_19246_19309[(2)] = null);

(statearr_19246_19309[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (9))){
var state_19231__$1 = state_19231;
var statearr_19247_19310 = state_19231__$1;
(statearr_19247_19310[(2)] = null);

(statearr_19247_19310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (5))){
var state_19231__$1 = state_19231;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19248_19311 = state_19231__$1;
(statearr_19248_19311[(1)] = (8));

} else {
var statearr_19249_19312 = state_19231__$1;
(statearr_19249_19312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (14))){
var inst_19211 = (state_19231[(11)]);
var inst_19209 = (state_19231[(8)]);
var inst_19209__$1 = (state_19231[(2)]);
var inst_19210 = (inst_19209__$1 == null);
var inst_19211__$1 = cljs.core.not.call(null,inst_19210);
var state_19231__$1 = (function (){var statearr_19250 = state_19231;
(statearr_19250[(11)] = inst_19211__$1);

(statearr_19250[(8)] = inst_19209__$1);

return statearr_19250;
})();
if(inst_19211__$1){
var statearr_19251_19313 = state_19231__$1;
(statearr_19251_19313[(1)] = (15));

} else {
var statearr_19252_19314 = state_19231__$1;
(statearr_19252_19314[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (16))){
var inst_19211 = (state_19231[(11)]);
var state_19231__$1 = state_19231;
var statearr_19253_19315 = state_19231__$1;
(statearr_19253_19315[(2)] = inst_19211);

(statearr_19253_19315[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (10))){
var inst_19203 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
var statearr_19254_19316 = state_19231__$1;
(statearr_19254_19316[(2)] = inst_19203);

(statearr_19254_19316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (18))){
var inst_19214 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
var statearr_19255_19317 = state_19231__$1;
(statearr_19255_19317[(2)] = inst_19214);

(statearr_19255_19317[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (8))){
var inst_19200 = cljs.core.async.close_BANG_.call(null,to);
var state_19231__$1 = state_19231;
var statearr_19256_19318 = state_19231__$1;
(statearr_19256_19318[(2)] = inst_19200);

(statearr_19256_19318[(1)] = (10));


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
});})(c__7173__auto__,jobs,results,process,async))
;
return ((function (switch__7117__auto__,c__7173__auto__,jobs,results,process,async){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_19260 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19260[(0)] = state_machine__7118__auto__);

(statearr_19260[(1)] = (1));

return statearr_19260;
});
var state_machine__7118__auto____1 = (function (state_19231){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_19231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e19261){if((e19261 instanceof Object)){
var ex__7121__auto__ = e19261;
var statearr_19262_19319 = state_19231;
(statearr_19262_19319[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19320 = state_19231;
state_19231 = G__19320;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_19231){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_19231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(switch__7117__auto__,c__7173__auto__,jobs,results,process,async))
})();
var state__7175__auto__ = (function (){var statearr_19263 = f__7174__auto__.call(null);
(statearr_19263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto__);

return statearr_19263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(c__7173__auto__,jobs,results,process,async))
);

return c__7173__auto__;
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
var c__7173__auto___19421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7173__auto___19421,tc,fc){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (c__7173__auto___19421,tc,fc){
return (function (state_19396){
var state_val_19397 = (state_19396[(1)]);
if((state_val_19397 === (7))){
var inst_19392 = (state_19396[(2)]);
var state_19396__$1 = state_19396;
var statearr_19398_19422 = state_19396__$1;
(statearr_19398_19422[(2)] = inst_19392);

(statearr_19398_19422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (1))){
var state_19396__$1 = state_19396;
var statearr_19399_19423 = state_19396__$1;
(statearr_19399_19423[(2)] = null);

(statearr_19399_19423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (4))){
var inst_19373 = (state_19396[(7)]);
var inst_19373__$1 = (state_19396[(2)]);
var inst_19374 = (inst_19373__$1 == null);
var state_19396__$1 = (function (){var statearr_19400 = state_19396;
(statearr_19400[(7)] = inst_19373__$1);

return statearr_19400;
})();
if(cljs.core.truth_(inst_19374)){
var statearr_19401_19424 = state_19396__$1;
(statearr_19401_19424[(1)] = (5));

} else {
var statearr_19402_19425 = state_19396__$1;
(statearr_19402_19425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (13))){
var state_19396__$1 = state_19396;
var statearr_19403_19426 = state_19396__$1;
(statearr_19403_19426[(2)] = null);

(statearr_19403_19426[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (6))){
var inst_19373 = (state_19396[(7)]);
var inst_19379 = p.call(null,inst_19373);
var state_19396__$1 = state_19396;
if(cljs.core.truth_(inst_19379)){
var statearr_19404_19427 = state_19396__$1;
(statearr_19404_19427[(1)] = (9));

} else {
var statearr_19405_19428 = state_19396__$1;
(statearr_19405_19428[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (3))){
var inst_19394 = (state_19396[(2)]);
var state_19396__$1 = state_19396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19396__$1,inst_19394);
} else {
if((state_val_19397 === (12))){
var state_19396__$1 = state_19396;
var statearr_19406_19429 = state_19396__$1;
(statearr_19406_19429[(2)] = null);

(statearr_19406_19429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (2))){
var state_19396__$1 = state_19396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19396__$1,(4),ch);
} else {
if((state_val_19397 === (11))){
var inst_19373 = (state_19396[(7)]);
var inst_19383 = (state_19396[(2)]);
var state_19396__$1 = state_19396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19396__$1,(8),inst_19383,inst_19373);
} else {
if((state_val_19397 === (9))){
var state_19396__$1 = state_19396;
var statearr_19407_19430 = state_19396__$1;
(statearr_19407_19430[(2)] = tc);

(statearr_19407_19430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (5))){
var inst_19376 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19377 = cljs.core.async.close_BANG_.call(null,fc);
var state_19396__$1 = (function (){var statearr_19408 = state_19396;
(statearr_19408[(8)] = inst_19376);

return statearr_19408;
})();
var statearr_19409_19431 = state_19396__$1;
(statearr_19409_19431[(2)] = inst_19377);

(statearr_19409_19431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (14))){
var inst_19390 = (state_19396[(2)]);
var state_19396__$1 = state_19396;
var statearr_19410_19432 = state_19396__$1;
(statearr_19410_19432[(2)] = inst_19390);

(statearr_19410_19432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (10))){
var state_19396__$1 = state_19396;
var statearr_19411_19433 = state_19396__$1;
(statearr_19411_19433[(2)] = fc);

(statearr_19411_19433[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19397 === (8))){
var inst_19385 = (state_19396[(2)]);
var state_19396__$1 = state_19396;
if(cljs.core.truth_(inst_19385)){
var statearr_19412_19434 = state_19396__$1;
(statearr_19412_19434[(1)] = (12));

} else {
var statearr_19413_19435 = state_19396__$1;
(statearr_19413_19435[(1)] = (13));

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
});})(c__7173__auto___19421,tc,fc))
;
return ((function (switch__7117__auto__,c__7173__auto___19421,tc,fc){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_19417 = [null,null,null,null,null,null,null,null,null];
(statearr_19417[(0)] = state_machine__7118__auto__);

(statearr_19417[(1)] = (1));

return statearr_19417;
});
var state_machine__7118__auto____1 = (function (state_19396){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_19396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e19418){if((e19418 instanceof Object)){
var ex__7121__auto__ = e19418;
var statearr_19419_19436 = state_19396;
(statearr_19419_19436[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19437 = state_19396;
state_19396 = G__19437;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_19396){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_19396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(switch__7117__auto__,c__7173__auto___19421,tc,fc))
})();
var state__7175__auto__ = (function (){var statearr_19420 = f__7174__auto__.call(null);
(statearr_19420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto___19421);

return statearr_19420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(c__7173__auto___19421,tc,fc))
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
var c__7173__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7173__auto__){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (c__7173__auto__){
return (function (state_19484){
var state_val_19485 = (state_19484[(1)]);
if((state_val_19485 === (7))){
var inst_19480 = (state_19484[(2)]);
var state_19484__$1 = state_19484;
var statearr_19486_19502 = state_19484__$1;
(statearr_19486_19502[(2)] = inst_19480);

(statearr_19486_19502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (6))){
var inst_19473 = (state_19484[(7)]);
var inst_19470 = (state_19484[(8)]);
var inst_19477 = f.call(null,inst_19470,inst_19473);
var inst_19470__$1 = inst_19477;
var state_19484__$1 = (function (){var statearr_19487 = state_19484;
(statearr_19487[(8)] = inst_19470__$1);

return statearr_19487;
})();
var statearr_19488_19503 = state_19484__$1;
(statearr_19488_19503[(2)] = null);

(statearr_19488_19503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (5))){
var inst_19470 = (state_19484[(8)]);
var state_19484__$1 = state_19484;
var statearr_19489_19504 = state_19484__$1;
(statearr_19489_19504[(2)] = inst_19470);

(statearr_19489_19504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (4))){
var inst_19473 = (state_19484[(7)]);
var inst_19473__$1 = (state_19484[(2)]);
var inst_19474 = (inst_19473__$1 == null);
var state_19484__$1 = (function (){var statearr_19490 = state_19484;
(statearr_19490[(7)] = inst_19473__$1);

return statearr_19490;
})();
if(cljs.core.truth_(inst_19474)){
var statearr_19491_19505 = state_19484__$1;
(statearr_19491_19505[(1)] = (5));

} else {
var statearr_19492_19506 = state_19484__$1;
(statearr_19492_19506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (3))){
var inst_19482 = (state_19484[(2)]);
var state_19484__$1 = state_19484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19484__$1,inst_19482);
} else {
if((state_val_19485 === (2))){
var state_19484__$1 = state_19484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19484__$1,(4),ch);
} else {
if((state_val_19485 === (1))){
var inst_19470 = init;
var state_19484__$1 = (function (){var statearr_19493 = state_19484;
(statearr_19493[(8)] = inst_19470);

return statearr_19493;
})();
var statearr_19494_19507 = state_19484__$1;
(statearr_19494_19507[(2)] = null);

(statearr_19494_19507[(1)] = (2));


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
});})(c__7173__auto__))
;
return ((function (switch__7117__auto__,c__7173__auto__){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_19498 = [null,null,null,null,null,null,null,null,null];
(statearr_19498[(0)] = state_machine__7118__auto__);

(statearr_19498[(1)] = (1));

return statearr_19498;
});
var state_machine__7118__auto____1 = (function (state_19484){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_19484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e19499){if((e19499 instanceof Object)){
var ex__7121__auto__ = e19499;
var statearr_19500_19508 = state_19484;
(statearr_19500_19508[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19509 = state_19484;
state_19484 = G__19509;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_19484){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_19484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(switch__7117__auto__,c__7173__auto__))
})();
var state__7175__auto__ = (function (){var statearr_19501 = f__7174__auto__.call(null);
(statearr_19501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto__);

return statearr_19501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(c__7173__auto__))
);

return c__7173__auto__;
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
var c__7173__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7173__auto__){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (c__7173__auto__){
return (function (state_19583){
var state_val_19584 = (state_19583[(1)]);
if((state_val_19584 === (7))){
var inst_19565 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
var statearr_19585_19608 = state_19583__$1;
(statearr_19585_19608[(2)] = inst_19565);

(statearr_19585_19608[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19584 === (1))){
var inst_19559 = cljs.core.seq.call(null,coll);
var inst_19560 = inst_19559;
var state_19583__$1 = (function (){var statearr_19586 = state_19583;
(statearr_19586[(7)] = inst_19560);

return statearr_19586;
})();
var statearr_19587_19609 = state_19583__$1;
(statearr_19587_19609[(2)] = null);

(statearr_19587_19609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19584 === (4))){
var inst_19560 = (state_19583[(7)]);
var inst_19563 = cljs.core.first.call(null,inst_19560);
var state_19583__$1 = state_19583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19583__$1,(7),ch,inst_19563);
} else {
if((state_val_19584 === (13))){
var inst_19577 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
var statearr_19588_19610 = state_19583__$1;
(statearr_19588_19610[(2)] = inst_19577);

(statearr_19588_19610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19584 === (6))){
var inst_19568 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
if(cljs.core.truth_(inst_19568)){
var statearr_19589_19611 = state_19583__$1;
(statearr_19589_19611[(1)] = (8));

} else {
var statearr_19590_19612 = state_19583__$1;
(statearr_19590_19612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19584 === (3))){
var inst_19581 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19583__$1,inst_19581);
} else {
if((state_val_19584 === (12))){
var state_19583__$1 = state_19583;
var statearr_19591_19613 = state_19583__$1;
(statearr_19591_19613[(2)] = null);

(statearr_19591_19613[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19584 === (2))){
var inst_19560 = (state_19583[(7)]);
var state_19583__$1 = state_19583;
if(cljs.core.truth_(inst_19560)){
var statearr_19592_19614 = state_19583__$1;
(statearr_19592_19614[(1)] = (4));

} else {
var statearr_19593_19615 = state_19583__$1;
(statearr_19593_19615[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19584 === (11))){
var inst_19574 = cljs.core.async.close_BANG_.call(null,ch);
var state_19583__$1 = state_19583;
var statearr_19594_19616 = state_19583__$1;
(statearr_19594_19616[(2)] = inst_19574);

(statearr_19594_19616[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19584 === (9))){
var state_19583__$1 = state_19583;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19595_19617 = state_19583__$1;
(statearr_19595_19617[(1)] = (11));

} else {
var statearr_19596_19618 = state_19583__$1;
(statearr_19596_19618[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19584 === (5))){
var inst_19560 = (state_19583[(7)]);
var state_19583__$1 = state_19583;
var statearr_19597_19619 = state_19583__$1;
(statearr_19597_19619[(2)] = inst_19560);

(statearr_19597_19619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19584 === (10))){
var inst_19579 = (state_19583[(2)]);
var state_19583__$1 = state_19583;
var statearr_19598_19620 = state_19583__$1;
(statearr_19598_19620[(2)] = inst_19579);

(statearr_19598_19620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19584 === (8))){
var inst_19560 = (state_19583[(7)]);
var inst_19570 = cljs.core.next.call(null,inst_19560);
var inst_19560__$1 = inst_19570;
var state_19583__$1 = (function (){var statearr_19599 = state_19583;
(statearr_19599[(7)] = inst_19560__$1);

return statearr_19599;
})();
var statearr_19600_19621 = state_19583__$1;
(statearr_19600_19621[(2)] = null);

(statearr_19600_19621[(1)] = (2));


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
});})(c__7173__auto__))
;
return ((function (switch__7117__auto__,c__7173__auto__){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_19604 = [null,null,null,null,null,null,null,null];
(statearr_19604[(0)] = state_machine__7118__auto__);

(statearr_19604[(1)] = (1));

return statearr_19604;
});
var state_machine__7118__auto____1 = (function (state_19583){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_19583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e19605){if((e19605 instanceof Object)){
var ex__7121__auto__ = e19605;
var statearr_19606_19622 = state_19583;
(statearr_19606_19622[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19623 = state_19583;
state_19583 = G__19623;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_19583){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_19583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(switch__7117__auto__,c__7173__auto__))
})();
var state__7175__auto__ = (function (){var statearr_19607 = f__7174__auto__.call(null);
(statearr_19607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto__);

return statearr_19607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(c__7173__auto__))
);

return c__7173__auto__;
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

cljs.core.async.Mux = (function (){var obj19625 = {};
return obj19625;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3747__auto__ = _;
if(and__3747__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3747__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4403__auto__ = (((_ == null))?null:_);
return (function (){var or__3759__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4403__auto__)]);
if(or__3759__auto__){
return or__3759__auto__;
} else {
var or__3759__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3759__auto____$1){
return or__3759__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj19627 = {};
return obj19627;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3747__auto__ = m;
if(and__3747__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3747__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4403__auto__ = (((m == null))?null:m);
return (function (){var or__3759__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4403__auto__)]);
if(or__3759__auto__){
return or__3759__auto__;
} else {
var or__3759__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3759__auto____$1){
return or__3759__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3747__auto__ = m;
if(and__3747__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3747__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4403__auto__ = (((m == null))?null:m);
return (function (){var or__3759__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4403__auto__)]);
if(or__3759__auto__){
return or__3759__auto__;
} else {
var or__3759__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3759__auto____$1){
return or__3759__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3747__auto__ = m;
if(and__3747__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3747__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4403__auto__ = (((m == null))?null:m);
return (function (){var or__3759__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4403__auto__)]);
if(or__3759__auto__){
return or__3759__auto__;
} else {
var or__3759__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3759__auto____$1){
return or__3759__auto____$1;
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
if(typeof cljs.core.async.t19849 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19849 = (function (cs,ch,mult,meta19850){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19850 = meta19850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19849.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t19849.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t19849.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t19849.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t19849.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19849.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t19849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19851){
var self__ = this;
var _19851__$1 = this;
return self__.meta19850;
});})(cs))
;

cljs.core.async.t19849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19851,meta19850__$1){
var self__ = this;
var _19851__$1 = this;
return (new cljs.core.async.t19849(self__.cs,self__.ch,self__.mult,meta19850__$1));
});})(cs))
;

cljs.core.async.t19849.cljs$lang$type = true;

cljs.core.async.t19849.cljs$lang$ctorStr = "cljs.core.async/t19849";

cljs.core.async.t19849.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4346__auto__,writer__4347__auto__,opt__4348__auto__){
return cljs.core._write.call(null,writer__4347__auto__,"cljs.core.async/t19849");
});})(cs))
;

cljs.core.async.__GT_t19849 = ((function (cs){
return (function __GT_t19849(cs__$1,ch__$1,mult__$1,meta19850){
return (new cljs.core.async.t19849(cs__$1,ch__$1,mult__$1,meta19850));
});})(cs))
;

}

return (new cljs.core.async.t19849(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/out/cljs/core/async.cljs"], null)));
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
var c__7173__auto___20070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7173__auto___20070,cs,m,dchan,dctr,done){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (c__7173__auto___20070,cs,m,dchan,dctr,done){
return (function (state_19982){
var state_val_19983 = (state_19982[(1)]);
if((state_val_19983 === (7))){
var inst_19978 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
var statearr_19984_20071 = state_19982__$1;
(statearr_19984_20071[(2)] = inst_19978);

(statearr_19984_20071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (20))){
var inst_19883 = (state_19982[(7)]);
var inst_19893 = cljs.core.first.call(null,inst_19883);
var inst_19894 = cljs.core.nth.call(null,inst_19893,(0),null);
var inst_19895 = cljs.core.nth.call(null,inst_19893,(1),null);
var state_19982__$1 = (function (){var statearr_19985 = state_19982;
(statearr_19985[(8)] = inst_19894);

return statearr_19985;
})();
if(cljs.core.truth_(inst_19895)){
var statearr_19986_20072 = state_19982__$1;
(statearr_19986_20072[(1)] = (22));

} else {
var statearr_19987_20073 = state_19982__$1;
(statearr_19987_20073[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (27))){
var inst_19923 = (state_19982[(9)]);
var inst_19925 = (state_19982[(10)]);
var inst_19930 = (state_19982[(11)]);
var inst_19854 = (state_19982[(12)]);
var inst_19930__$1 = cljs.core._nth.call(null,inst_19923,inst_19925);
var inst_19931 = cljs.core.async.put_BANG_.call(null,inst_19930__$1,inst_19854,done);
var state_19982__$1 = (function (){var statearr_19988 = state_19982;
(statearr_19988[(11)] = inst_19930__$1);

return statearr_19988;
})();
if(cljs.core.truth_(inst_19931)){
var statearr_19989_20074 = state_19982__$1;
(statearr_19989_20074[(1)] = (30));

} else {
var statearr_19990_20075 = state_19982__$1;
(statearr_19990_20075[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (1))){
var state_19982__$1 = state_19982;
var statearr_19991_20076 = state_19982__$1;
(statearr_19991_20076[(2)] = null);

(statearr_19991_20076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (24))){
var inst_19883 = (state_19982[(7)]);
var inst_19900 = (state_19982[(2)]);
var inst_19901 = cljs.core.next.call(null,inst_19883);
var inst_19863 = inst_19901;
var inst_19864 = null;
var inst_19865 = (0);
var inst_19866 = (0);
var state_19982__$1 = (function (){var statearr_19992 = state_19982;
(statearr_19992[(13)] = inst_19864);

(statearr_19992[(14)] = inst_19863);

(statearr_19992[(15)] = inst_19866);

(statearr_19992[(16)] = inst_19865);

(statearr_19992[(17)] = inst_19900);

return statearr_19992;
})();
var statearr_19993_20077 = state_19982__$1;
(statearr_19993_20077[(2)] = null);

(statearr_19993_20077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (39))){
var state_19982__$1 = state_19982;
var statearr_19997_20078 = state_19982__$1;
(statearr_19997_20078[(2)] = null);

(statearr_19997_20078[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (4))){
var inst_19854 = (state_19982[(12)]);
var inst_19854__$1 = (state_19982[(2)]);
var inst_19855 = (inst_19854__$1 == null);
var state_19982__$1 = (function (){var statearr_19998 = state_19982;
(statearr_19998[(12)] = inst_19854__$1);

return statearr_19998;
})();
if(cljs.core.truth_(inst_19855)){
var statearr_19999_20079 = state_19982__$1;
(statearr_19999_20079[(1)] = (5));

} else {
var statearr_20000_20080 = state_19982__$1;
(statearr_20000_20080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (15))){
var inst_19864 = (state_19982[(13)]);
var inst_19863 = (state_19982[(14)]);
var inst_19866 = (state_19982[(15)]);
var inst_19865 = (state_19982[(16)]);
var inst_19879 = (state_19982[(2)]);
var inst_19880 = (inst_19866 + (1));
var tmp19994 = inst_19864;
var tmp19995 = inst_19863;
var tmp19996 = inst_19865;
var inst_19863__$1 = tmp19995;
var inst_19864__$1 = tmp19994;
var inst_19865__$1 = tmp19996;
var inst_19866__$1 = inst_19880;
var state_19982__$1 = (function (){var statearr_20001 = state_19982;
(statearr_20001[(13)] = inst_19864__$1);

(statearr_20001[(18)] = inst_19879);

(statearr_20001[(14)] = inst_19863__$1);

(statearr_20001[(15)] = inst_19866__$1);

(statearr_20001[(16)] = inst_19865__$1);

return statearr_20001;
})();
var statearr_20002_20081 = state_19982__$1;
(statearr_20002_20081[(2)] = null);

(statearr_20002_20081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (21))){
var inst_19904 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
var statearr_20006_20082 = state_19982__$1;
(statearr_20006_20082[(2)] = inst_19904);

(statearr_20006_20082[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (31))){
var inst_19930 = (state_19982[(11)]);
var inst_19934 = done.call(null,null);
var inst_19935 = cljs.core.async.untap_STAR_.call(null,m,inst_19930);
var state_19982__$1 = (function (){var statearr_20007 = state_19982;
(statearr_20007[(19)] = inst_19934);

return statearr_20007;
})();
var statearr_20008_20083 = state_19982__$1;
(statearr_20008_20083[(2)] = inst_19935);

(statearr_20008_20083[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (32))){
var inst_19923 = (state_19982[(9)]);
var inst_19924 = (state_19982[(20)]);
var inst_19925 = (state_19982[(10)]);
var inst_19922 = (state_19982[(21)]);
var inst_19937 = (state_19982[(2)]);
var inst_19938 = (inst_19925 + (1));
var tmp20003 = inst_19923;
var tmp20004 = inst_19924;
var tmp20005 = inst_19922;
var inst_19922__$1 = tmp20005;
var inst_19923__$1 = tmp20003;
var inst_19924__$1 = tmp20004;
var inst_19925__$1 = inst_19938;
var state_19982__$1 = (function (){var statearr_20009 = state_19982;
(statearr_20009[(9)] = inst_19923__$1);

(statearr_20009[(20)] = inst_19924__$1);

(statearr_20009[(10)] = inst_19925__$1);

(statearr_20009[(21)] = inst_19922__$1);

(statearr_20009[(22)] = inst_19937);

return statearr_20009;
})();
var statearr_20010_20084 = state_19982__$1;
(statearr_20010_20084[(2)] = null);

(statearr_20010_20084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (40))){
var inst_19950 = (state_19982[(23)]);
var inst_19954 = done.call(null,null);
var inst_19955 = cljs.core.async.untap_STAR_.call(null,m,inst_19950);
var state_19982__$1 = (function (){var statearr_20011 = state_19982;
(statearr_20011[(24)] = inst_19954);

return statearr_20011;
})();
var statearr_20012_20085 = state_19982__$1;
(statearr_20012_20085[(2)] = inst_19955);

(statearr_20012_20085[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (33))){
var inst_19941 = (state_19982[(25)]);
var inst_19943 = cljs.core.chunked_seq_QMARK_.call(null,inst_19941);
var state_19982__$1 = state_19982;
if(inst_19943){
var statearr_20013_20086 = state_19982__$1;
(statearr_20013_20086[(1)] = (36));

} else {
var statearr_20014_20087 = state_19982__$1;
(statearr_20014_20087[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (13))){
var inst_19873 = (state_19982[(26)]);
var inst_19876 = cljs.core.async.close_BANG_.call(null,inst_19873);
var state_19982__$1 = state_19982;
var statearr_20015_20088 = state_19982__$1;
(statearr_20015_20088[(2)] = inst_19876);

(statearr_20015_20088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (22))){
var inst_19894 = (state_19982[(8)]);
var inst_19897 = cljs.core.async.close_BANG_.call(null,inst_19894);
var state_19982__$1 = state_19982;
var statearr_20016_20089 = state_19982__$1;
(statearr_20016_20089[(2)] = inst_19897);

(statearr_20016_20089[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (36))){
var inst_19941 = (state_19982[(25)]);
var inst_19945 = cljs.core.chunk_first.call(null,inst_19941);
var inst_19946 = cljs.core.chunk_rest.call(null,inst_19941);
var inst_19947 = cljs.core.count.call(null,inst_19945);
var inst_19922 = inst_19946;
var inst_19923 = inst_19945;
var inst_19924 = inst_19947;
var inst_19925 = (0);
var state_19982__$1 = (function (){var statearr_20017 = state_19982;
(statearr_20017[(9)] = inst_19923);

(statearr_20017[(20)] = inst_19924);

(statearr_20017[(10)] = inst_19925);

(statearr_20017[(21)] = inst_19922);

return statearr_20017;
})();
var statearr_20018_20090 = state_19982__$1;
(statearr_20018_20090[(2)] = null);

(statearr_20018_20090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (41))){
var inst_19941 = (state_19982[(25)]);
var inst_19957 = (state_19982[(2)]);
var inst_19958 = cljs.core.next.call(null,inst_19941);
var inst_19922 = inst_19958;
var inst_19923 = null;
var inst_19924 = (0);
var inst_19925 = (0);
var state_19982__$1 = (function (){var statearr_20019 = state_19982;
(statearr_20019[(9)] = inst_19923);

(statearr_20019[(27)] = inst_19957);

(statearr_20019[(20)] = inst_19924);

(statearr_20019[(10)] = inst_19925);

(statearr_20019[(21)] = inst_19922);

return statearr_20019;
})();
var statearr_20020_20091 = state_19982__$1;
(statearr_20020_20091[(2)] = null);

(statearr_20020_20091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (43))){
var state_19982__$1 = state_19982;
var statearr_20021_20092 = state_19982__$1;
(statearr_20021_20092[(2)] = null);

(statearr_20021_20092[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (29))){
var inst_19966 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
var statearr_20022_20093 = state_19982__$1;
(statearr_20022_20093[(2)] = inst_19966);

(statearr_20022_20093[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (44))){
var inst_19975 = (state_19982[(2)]);
var state_19982__$1 = (function (){var statearr_20023 = state_19982;
(statearr_20023[(28)] = inst_19975);

return statearr_20023;
})();
var statearr_20024_20094 = state_19982__$1;
(statearr_20024_20094[(2)] = null);

(statearr_20024_20094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (6))){
var inst_19914 = (state_19982[(29)]);
var inst_19913 = cljs.core.deref.call(null,cs);
var inst_19914__$1 = cljs.core.keys.call(null,inst_19913);
var inst_19915 = cljs.core.count.call(null,inst_19914__$1);
var inst_19916 = cljs.core.reset_BANG_.call(null,dctr,inst_19915);
var inst_19921 = cljs.core.seq.call(null,inst_19914__$1);
var inst_19922 = inst_19921;
var inst_19923 = null;
var inst_19924 = (0);
var inst_19925 = (0);
var state_19982__$1 = (function (){var statearr_20025 = state_19982;
(statearr_20025[(9)] = inst_19923);

(statearr_20025[(20)] = inst_19924);

(statearr_20025[(10)] = inst_19925);

(statearr_20025[(30)] = inst_19916);

(statearr_20025[(29)] = inst_19914__$1);

(statearr_20025[(21)] = inst_19922);

return statearr_20025;
})();
var statearr_20026_20095 = state_19982__$1;
(statearr_20026_20095[(2)] = null);

(statearr_20026_20095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (28))){
var inst_19941 = (state_19982[(25)]);
var inst_19922 = (state_19982[(21)]);
var inst_19941__$1 = cljs.core.seq.call(null,inst_19922);
var state_19982__$1 = (function (){var statearr_20027 = state_19982;
(statearr_20027[(25)] = inst_19941__$1);

return statearr_20027;
})();
if(inst_19941__$1){
var statearr_20028_20096 = state_19982__$1;
(statearr_20028_20096[(1)] = (33));

} else {
var statearr_20029_20097 = state_19982__$1;
(statearr_20029_20097[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (25))){
var inst_19924 = (state_19982[(20)]);
var inst_19925 = (state_19982[(10)]);
var inst_19927 = (inst_19925 < inst_19924);
var inst_19928 = inst_19927;
var state_19982__$1 = state_19982;
if(cljs.core.truth_(inst_19928)){
var statearr_20030_20098 = state_19982__$1;
(statearr_20030_20098[(1)] = (27));

} else {
var statearr_20031_20099 = state_19982__$1;
(statearr_20031_20099[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (34))){
var state_19982__$1 = state_19982;
var statearr_20032_20100 = state_19982__$1;
(statearr_20032_20100[(2)] = null);

(statearr_20032_20100[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (17))){
var state_19982__$1 = state_19982;
var statearr_20033_20101 = state_19982__$1;
(statearr_20033_20101[(2)] = null);

(statearr_20033_20101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (3))){
var inst_19980 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19982__$1,inst_19980);
} else {
if((state_val_19983 === (12))){
var inst_19909 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
var statearr_20034_20102 = state_19982__$1;
(statearr_20034_20102[(2)] = inst_19909);

(statearr_20034_20102[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (2))){
var state_19982__$1 = state_19982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19982__$1,(4),ch);
} else {
if((state_val_19983 === (23))){
var state_19982__$1 = state_19982;
var statearr_20035_20103 = state_19982__$1;
(statearr_20035_20103[(2)] = null);

(statearr_20035_20103[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (35))){
var inst_19964 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
var statearr_20036_20104 = state_19982__$1;
(statearr_20036_20104[(2)] = inst_19964);

(statearr_20036_20104[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (19))){
var inst_19883 = (state_19982[(7)]);
var inst_19887 = cljs.core.chunk_first.call(null,inst_19883);
var inst_19888 = cljs.core.chunk_rest.call(null,inst_19883);
var inst_19889 = cljs.core.count.call(null,inst_19887);
var inst_19863 = inst_19888;
var inst_19864 = inst_19887;
var inst_19865 = inst_19889;
var inst_19866 = (0);
var state_19982__$1 = (function (){var statearr_20037 = state_19982;
(statearr_20037[(13)] = inst_19864);

(statearr_20037[(14)] = inst_19863);

(statearr_20037[(15)] = inst_19866);

(statearr_20037[(16)] = inst_19865);

return statearr_20037;
})();
var statearr_20038_20105 = state_19982__$1;
(statearr_20038_20105[(2)] = null);

(statearr_20038_20105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (11))){
var inst_19883 = (state_19982[(7)]);
var inst_19863 = (state_19982[(14)]);
var inst_19883__$1 = cljs.core.seq.call(null,inst_19863);
var state_19982__$1 = (function (){var statearr_20039 = state_19982;
(statearr_20039[(7)] = inst_19883__$1);

return statearr_20039;
})();
if(inst_19883__$1){
var statearr_20040_20106 = state_19982__$1;
(statearr_20040_20106[(1)] = (16));

} else {
var statearr_20041_20107 = state_19982__$1;
(statearr_20041_20107[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (9))){
var inst_19911 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
var statearr_20042_20108 = state_19982__$1;
(statearr_20042_20108[(2)] = inst_19911);

(statearr_20042_20108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (5))){
var inst_19861 = cljs.core.deref.call(null,cs);
var inst_19862 = cljs.core.seq.call(null,inst_19861);
var inst_19863 = inst_19862;
var inst_19864 = null;
var inst_19865 = (0);
var inst_19866 = (0);
var state_19982__$1 = (function (){var statearr_20043 = state_19982;
(statearr_20043[(13)] = inst_19864);

(statearr_20043[(14)] = inst_19863);

(statearr_20043[(15)] = inst_19866);

(statearr_20043[(16)] = inst_19865);

return statearr_20043;
})();
var statearr_20044_20109 = state_19982__$1;
(statearr_20044_20109[(2)] = null);

(statearr_20044_20109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (14))){
var state_19982__$1 = state_19982;
var statearr_20045_20110 = state_19982__$1;
(statearr_20045_20110[(2)] = null);

(statearr_20045_20110[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (45))){
var inst_19972 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
var statearr_20046_20111 = state_19982__$1;
(statearr_20046_20111[(2)] = inst_19972);

(statearr_20046_20111[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (26))){
var inst_19914 = (state_19982[(29)]);
var inst_19968 = (state_19982[(2)]);
var inst_19969 = cljs.core.seq.call(null,inst_19914);
var state_19982__$1 = (function (){var statearr_20047 = state_19982;
(statearr_20047[(31)] = inst_19968);

return statearr_20047;
})();
if(inst_19969){
var statearr_20048_20112 = state_19982__$1;
(statearr_20048_20112[(1)] = (42));

} else {
var statearr_20049_20113 = state_19982__$1;
(statearr_20049_20113[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (16))){
var inst_19883 = (state_19982[(7)]);
var inst_19885 = cljs.core.chunked_seq_QMARK_.call(null,inst_19883);
var state_19982__$1 = state_19982;
if(inst_19885){
var statearr_20050_20114 = state_19982__$1;
(statearr_20050_20114[(1)] = (19));

} else {
var statearr_20051_20115 = state_19982__$1;
(statearr_20051_20115[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (38))){
var inst_19961 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
var statearr_20052_20116 = state_19982__$1;
(statearr_20052_20116[(2)] = inst_19961);

(statearr_20052_20116[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (30))){
var state_19982__$1 = state_19982;
var statearr_20053_20117 = state_19982__$1;
(statearr_20053_20117[(2)] = null);

(statearr_20053_20117[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (10))){
var inst_19864 = (state_19982[(13)]);
var inst_19866 = (state_19982[(15)]);
var inst_19872 = cljs.core._nth.call(null,inst_19864,inst_19866);
var inst_19873 = cljs.core.nth.call(null,inst_19872,(0),null);
var inst_19874 = cljs.core.nth.call(null,inst_19872,(1),null);
var state_19982__$1 = (function (){var statearr_20054 = state_19982;
(statearr_20054[(26)] = inst_19873);

return statearr_20054;
})();
if(cljs.core.truth_(inst_19874)){
var statearr_20055_20118 = state_19982__$1;
(statearr_20055_20118[(1)] = (13));

} else {
var statearr_20056_20119 = state_19982__$1;
(statearr_20056_20119[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (18))){
var inst_19907 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
var statearr_20057_20120 = state_19982__$1;
(statearr_20057_20120[(2)] = inst_19907);

(statearr_20057_20120[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (42))){
var state_19982__$1 = state_19982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19982__$1,(45),dchan);
} else {
if((state_val_19983 === (37))){
var inst_19941 = (state_19982[(25)]);
var inst_19854 = (state_19982[(12)]);
var inst_19950 = (state_19982[(23)]);
var inst_19950__$1 = cljs.core.first.call(null,inst_19941);
var inst_19951 = cljs.core.async.put_BANG_.call(null,inst_19950__$1,inst_19854,done);
var state_19982__$1 = (function (){var statearr_20058 = state_19982;
(statearr_20058[(23)] = inst_19950__$1);

return statearr_20058;
})();
if(cljs.core.truth_(inst_19951)){
var statearr_20059_20121 = state_19982__$1;
(statearr_20059_20121[(1)] = (39));

} else {
var statearr_20060_20122 = state_19982__$1;
(statearr_20060_20122[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (8))){
var inst_19866 = (state_19982[(15)]);
var inst_19865 = (state_19982[(16)]);
var inst_19868 = (inst_19866 < inst_19865);
var inst_19869 = inst_19868;
var state_19982__$1 = state_19982;
if(cljs.core.truth_(inst_19869)){
var statearr_20061_20123 = state_19982__$1;
(statearr_20061_20123[(1)] = (10));

} else {
var statearr_20062_20124 = state_19982__$1;
(statearr_20062_20124[(1)] = (11));

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
});})(c__7173__auto___20070,cs,m,dchan,dctr,done))
;
return ((function (switch__7117__auto__,c__7173__auto___20070,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_20066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20066[(0)] = state_machine__7118__auto__);

(statearr_20066[(1)] = (1));

return statearr_20066;
});
var state_machine__7118__auto____1 = (function (state_19982){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_19982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e20067){if((e20067 instanceof Object)){
var ex__7121__auto__ = e20067;
var statearr_20068_20125 = state_19982;
(statearr_20068_20125[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20126 = state_19982;
state_19982 = G__20126;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_19982){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_19982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(switch__7117__auto__,c__7173__auto___20070,cs,m,dchan,dctr,done))
})();
var state__7175__auto__ = (function (){var statearr_20069 = f__7174__auto__.call(null);
(statearr_20069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto___20070);

return statearr_20069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(c__7173__auto___20070,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj20128 = {};
return obj20128;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3747__auto__ = m;
if(and__3747__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3747__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4403__auto__ = (((m == null))?null:m);
return (function (){var or__3759__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4403__auto__)]);
if(or__3759__auto__){
return or__3759__auto__;
} else {
var or__3759__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3759__auto____$1){
return or__3759__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3747__auto__ = m;
if(and__3747__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3747__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4403__auto__ = (((m == null))?null:m);
return (function (){var or__3759__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4403__auto__)]);
if(or__3759__auto__){
return or__3759__auto__;
} else {
var or__3759__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3759__auto____$1){
return or__3759__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3747__auto__ = m;
if(and__3747__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3747__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4403__auto__ = (((m == null))?null:m);
return (function (){var or__3759__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4403__auto__)]);
if(or__3759__auto__){
return or__3759__auto__;
} else {
var or__3759__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3759__auto____$1){
return or__3759__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3747__auto__ = m;
if(and__3747__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3747__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4403__auto__ = (((m == null))?null:m);
return (function (){var or__3759__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4403__auto__)]);
if(or__3759__auto__){
return or__3759__auto__;
} else {
var or__3759__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3759__auto____$1){
return or__3759__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3747__auto__ = m;
if(and__3747__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3747__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4403__auto__ = (((m == null))?null:m);
return (function (){var or__3759__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4403__auto__)]);
if(or__3759__auto__){
return or__3759__auto__;
} else {
var or__3759__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3759__auto____$1){
return or__3759__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__20129){
var map__20134 = p__20129;
var map__20134__$1 = ((cljs.core.seq_QMARK_.call(null,map__20134))?cljs.core.apply.call(null,cljs.core.hash_map,map__20134):map__20134);
var opts = map__20134__$1;
var statearr_20135_20138 = state;
(statearr_20135_20138[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__20134,map__20134__$1,opts){
return (function (val){
var statearr_20136_20139 = state;
(statearr_20136_20139[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20134,map__20134__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_20137_20140 = state;
(statearr_20137_20140[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__20129 = null;
if (arguments.length > 3) {
var G__20141__i = 0, G__20141__a = new Array(arguments.length -  3);
while (G__20141__i < G__20141__a.length) {G__20141__a[G__20141__i] = arguments[G__20141__i + 3]; ++G__20141__i;}
  p__20129 = new cljs.core.IndexedSeq(G__20141__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__20129);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__20142){
var state = cljs.core.first(arglist__20142);
arglist__20142 = cljs.core.next(arglist__20142);
var cont_block = cljs.core.first(arglist__20142);
arglist__20142 = cljs.core.next(arglist__20142);
var ports = cljs.core.first(arglist__20142);
var p__20129 = cljs.core.rest(arglist__20142);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__20129);
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
if(typeof cljs.core.async.t20262 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20262 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20263){
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
this.meta20263 = meta20263;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20262.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t20262.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20262.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20262.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20262.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20262.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t20262.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20262.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20264){
var self__ = this;
var _20264__$1 = this;
return self__.meta20263;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20264,meta20263__$1){
var self__ = this;
var _20264__$1 = this;
return (new cljs.core.async.t20262(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20263__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20262.cljs$lang$type = true;

cljs.core.async.t20262.cljs$lang$ctorStr = "cljs.core.async/t20262";

cljs.core.async.t20262.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4346__auto__,writer__4347__auto__,opt__4348__auto__){
return cljs.core._write.call(null,writer__4347__auto__,"cljs.core.async/t20262");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t20262 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20262(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20263){
return (new cljs.core.async.t20262(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20263));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t20262(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/out/cljs/core/async.cljs"], null)));
})()
;
var c__7173__auto___20381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7173__auto___20381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (c__7173__auto___20381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20334){
var state_val_20335 = (state_20334[(1)]);
if((state_val_20335 === (7))){
var inst_20278 = (state_20334[(7)]);
var inst_20283 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20278);
var state_20334__$1 = state_20334;
var statearr_20336_20382 = state_20334__$1;
(statearr_20336_20382[(2)] = inst_20283);

(statearr_20336_20382[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (20))){
var inst_20293 = (state_20334[(8)]);
var state_20334__$1 = state_20334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20334__$1,(23),out,inst_20293);
} else {
if((state_val_20335 === (1))){
var inst_20268 = (state_20334[(9)]);
var inst_20268__$1 = calc_state.call(null);
var inst_20269 = cljs.core.seq_QMARK_.call(null,inst_20268__$1);
var state_20334__$1 = (function (){var statearr_20337 = state_20334;
(statearr_20337[(9)] = inst_20268__$1);

return statearr_20337;
})();
if(inst_20269){
var statearr_20338_20383 = state_20334__$1;
(statearr_20338_20383[(1)] = (2));

} else {
var statearr_20339_20384 = state_20334__$1;
(statearr_20339_20384[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (24))){
var inst_20286 = (state_20334[(10)]);
var inst_20278 = inst_20286;
var state_20334__$1 = (function (){var statearr_20340 = state_20334;
(statearr_20340[(7)] = inst_20278);

return statearr_20340;
})();
var statearr_20341_20385 = state_20334__$1;
(statearr_20341_20385[(2)] = null);

(statearr_20341_20385[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (4))){
var inst_20268 = (state_20334[(9)]);
var inst_20274 = (state_20334[(2)]);
var inst_20275 = cljs.core.get.call(null,inst_20274,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20276 = cljs.core.get.call(null,inst_20274,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20277 = cljs.core.get.call(null,inst_20274,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20278 = inst_20268;
var state_20334__$1 = (function (){var statearr_20342 = state_20334;
(statearr_20342[(11)] = inst_20276);

(statearr_20342[(12)] = inst_20275);

(statearr_20342[(13)] = inst_20277);

(statearr_20342[(7)] = inst_20278);

return statearr_20342;
})();
var statearr_20343_20386 = state_20334__$1;
(statearr_20343_20386[(2)] = null);

(statearr_20343_20386[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (15))){
var state_20334__$1 = state_20334;
var statearr_20344_20387 = state_20334__$1;
(statearr_20344_20387[(2)] = null);

(statearr_20344_20387[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (21))){
var inst_20286 = (state_20334[(10)]);
var inst_20278 = inst_20286;
var state_20334__$1 = (function (){var statearr_20345 = state_20334;
(statearr_20345[(7)] = inst_20278);

return statearr_20345;
})();
var statearr_20346_20388 = state_20334__$1;
(statearr_20346_20388[(2)] = null);

(statearr_20346_20388[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (13))){
var inst_20330 = (state_20334[(2)]);
var state_20334__$1 = state_20334;
var statearr_20347_20389 = state_20334__$1;
(statearr_20347_20389[(2)] = inst_20330);

(statearr_20347_20389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (22))){
var inst_20328 = (state_20334[(2)]);
var state_20334__$1 = state_20334;
var statearr_20348_20390 = state_20334__$1;
(statearr_20348_20390[(2)] = inst_20328);

(statearr_20348_20390[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (6))){
var inst_20332 = (state_20334[(2)]);
var state_20334__$1 = state_20334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20334__$1,inst_20332);
} else {
if((state_val_20335 === (25))){
var state_20334__$1 = state_20334;
var statearr_20349_20391 = state_20334__$1;
(statearr_20349_20391[(2)] = null);

(statearr_20349_20391[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (17))){
var inst_20308 = (state_20334[(14)]);
var state_20334__$1 = state_20334;
var statearr_20350_20392 = state_20334__$1;
(statearr_20350_20392[(2)] = inst_20308);

(statearr_20350_20392[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (3))){
var inst_20268 = (state_20334[(9)]);
var state_20334__$1 = state_20334;
var statearr_20351_20393 = state_20334__$1;
(statearr_20351_20393[(2)] = inst_20268);

(statearr_20351_20393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (12))){
var inst_20308 = (state_20334[(14)]);
var inst_20289 = (state_20334[(15)]);
var inst_20294 = (state_20334[(16)]);
var inst_20308__$1 = inst_20289.call(null,inst_20294);
var state_20334__$1 = (function (){var statearr_20352 = state_20334;
(statearr_20352[(14)] = inst_20308__$1);

return statearr_20352;
})();
if(cljs.core.truth_(inst_20308__$1)){
var statearr_20353_20394 = state_20334__$1;
(statearr_20353_20394[(1)] = (17));

} else {
var statearr_20354_20395 = state_20334__$1;
(statearr_20354_20395[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (2))){
var inst_20268 = (state_20334[(9)]);
var inst_20271 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20268);
var state_20334__$1 = state_20334;
var statearr_20355_20396 = state_20334__$1;
(statearr_20355_20396[(2)] = inst_20271);

(statearr_20355_20396[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (23))){
var inst_20319 = (state_20334[(2)]);
var state_20334__$1 = state_20334;
if(cljs.core.truth_(inst_20319)){
var statearr_20356_20397 = state_20334__$1;
(statearr_20356_20397[(1)] = (24));

} else {
var statearr_20357_20398 = state_20334__$1;
(statearr_20357_20398[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (19))){
var inst_20316 = (state_20334[(2)]);
var state_20334__$1 = state_20334;
if(cljs.core.truth_(inst_20316)){
var statearr_20358_20399 = state_20334__$1;
(statearr_20358_20399[(1)] = (20));

} else {
var statearr_20359_20400 = state_20334__$1;
(statearr_20359_20400[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (11))){
var inst_20293 = (state_20334[(8)]);
var inst_20299 = (inst_20293 == null);
var state_20334__$1 = state_20334;
if(cljs.core.truth_(inst_20299)){
var statearr_20360_20401 = state_20334__$1;
(statearr_20360_20401[(1)] = (14));

} else {
var statearr_20361_20402 = state_20334__$1;
(statearr_20361_20402[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (9))){
var inst_20286 = (state_20334[(10)]);
var inst_20286__$1 = (state_20334[(2)]);
var inst_20287 = cljs.core.get.call(null,inst_20286__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20288 = cljs.core.get.call(null,inst_20286__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20289 = cljs.core.get.call(null,inst_20286__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_20334__$1 = (function (){var statearr_20362 = state_20334;
(statearr_20362[(10)] = inst_20286__$1);

(statearr_20362[(17)] = inst_20288);

(statearr_20362[(15)] = inst_20289);

return statearr_20362;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20334__$1,(10),inst_20287);
} else {
if((state_val_20335 === (5))){
var inst_20278 = (state_20334[(7)]);
var inst_20281 = cljs.core.seq_QMARK_.call(null,inst_20278);
var state_20334__$1 = state_20334;
if(inst_20281){
var statearr_20363_20403 = state_20334__$1;
(statearr_20363_20403[(1)] = (7));

} else {
var statearr_20364_20404 = state_20334__$1;
(statearr_20364_20404[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (14))){
var inst_20294 = (state_20334[(16)]);
var inst_20301 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20294);
var state_20334__$1 = state_20334;
var statearr_20365_20405 = state_20334__$1;
(statearr_20365_20405[(2)] = inst_20301);

(statearr_20365_20405[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (26))){
var inst_20324 = (state_20334[(2)]);
var state_20334__$1 = state_20334;
var statearr_20366_20406 = state_20334__$1;
(statearr_20366_20406[(2)] = inst_20324);

(statearr_20366_20406[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (16))){
var inst_20304 = (state_20334[(2)]);
var inst_20305 = calc_state.call(null);
var inst_20278 = inst_20305;
var state_20334__$1 = (function (){var statearr_20367 = state_20334;
(statearr_20367[(7)] = inst_20278);

(statearr_20367[(18)] = inst_20304);

return statearr_20367;
})();
var statearr_20368_20407 = state_20334__$1;
(statearr_20368_20407[(2)] = null);

(statearr_20368_20407[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (10))){
var inst_20293 = (state_20334[(8)]);
var inst_20294 = (state_20334[(16)]);
var inst_20292 = (state_20334[(2)]);
var inst_20293__$1 = cljs.core.nth.call(null,inst_20292,(0),null);
var inst_20294__$1 = cljs.core.nth.call(null,inst_20292,(1),null);
var inst_20295 = (inst_20293__$1 == null);
var inst_20296 = cljs.core._EQ_.call(null,inst_20294__$1,change);
var inst_20297 = (inst_20295) || (inst_20296);
var state_20334__$1 = (function (){var statearr_20369 = state_20334;
(statearr_20369[(8)] = inst_20293__$1);

(statearr_20369[(16)] = inst_20294__$1);

return statearr_20369;
})();
if(cljs.core.truth_(inst_20297)){
var statearr_20370_20408 = state_20334__$1;
(statearr_20370_20408[(1)] = (11));

} else {
var statearr_20371_20409 = state_20334__$1;
(statearr_20371_20409[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (18))){
var inst_20288 = (state_20334[(17)]);
var inst_20289 = (state_20334[(15)]);
var inst_20294 = (state_20334[(16)]);
var inst_20311 = cljs.core.empty_QMARK_.call(null,inst_20289);
var inst_20312 = inst_20288.call(null,inst_20294);
var inst_20313 = cljs.core.not.call(null,inst_20312);
var inst_20314 = (inst_20311) && (inst_20313);
var state_20334__$1 = state_20334;
var statearr_20372_20410 = state_20334__$1;
(statearr_20372_20410[(2)] = inst_20314);

(statearr_20372_20410[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (8))){
var inst_20278 = (state_20334[(7)]);
var state_20334__$1 = state_20334;
var statearr_20373_20411 = state_20334__$1;
(statearr_20373_20411[(2)] = inst_20278);

(statearr_20373_20411[(1)] = (9));


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
});})(c__7173__auto___20381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7117__auto__,c__7173__auto___20381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_20377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20377[(0)] = state_machine__7118__auto__);

(statearr_20377[(1)] = (1));

return statearr_20377;
});
var state_machine__7118__auto____1 = (function (state_20334){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_20334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e20378){if((e20378 instanceof Object)){
var ex__7121__auto__ = e20378;
var statearr_20379_20412 = state_20334;
(statearr_20379_20412[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20413 = state_20334;
state_20334 = G__20413;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_20334){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_20334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(switch__7117__auto__,c__7173__auto___20381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7175__auto__ = (function (){var statearr_20380 = f__7174__auto__.call(null);
(statearr_20380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto___20381);

return statearr_20380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(c__7173__auto___20381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj20415 = {};
return obj20415;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3747__auto__ = p;
if(and__3747__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3747__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4403__auto__ = (((p == null))?null:p);
return (function (){var or__3759__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4403__auto__)]);
if(or__3759__auto__){
return or__3759__auto__;
} else {
var or__3759__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3759__auto____$1){
return or__3759__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3747__auto__ = p;
if(and__3747__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3747__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4403__auto__ = (((p == null))?null:p);
return (function (){var or__3759__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4403__auto__)]);
if(or__3759__auto__){
return or__3759__auto__;
} else {
var or__3759__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3759__auto____$1){
return or__3759__auto____$1;
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
if((function (){var and__3747__auto__ = p;
if(and__3747__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3747__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4403__auto__ = (((p == null))?null:p);
return (function (){var or__3759__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4403__auto__)]);
if(or__3759__auto__){
return or__3759__auto__;
} else {
var or__3759__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3759__auto____$1){
return or__3759__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3747__auto__ = p;
if(and__3747__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3747__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4403__auto__ = (((p == null))?null:p);
return (function (){var or__3759__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4403__auto__)]);
if(or__3759__auto__){
return or__3759__auto__;
} else {
var or__3759__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3759__auto____$1){
return or__3759__auto____$1;
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
var or__3759__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3759__auto__)){
return or__3759__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3759__auto__,mults){
return (function (p1__20416_SHARP_){
if(cljs.core.truth_(p1__20416_SHARP_.call(null,topic))){
return p1__20416_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20416_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3759__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t20539 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20539 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20540){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20540 = meta20540;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20539.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t20539.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t20539.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t20539.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t20539.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t20539.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20539.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t20539.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20541){
var self__ = this;
var _20541__$1 = this;
return self__.meta20540;
});})(mults,ensure_mult))
;

cljs.core.async.t20539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20541,meta20540__$1){
var self__ = this;
var _20541__$1 = this;
return (new cljs.core.async.t20539(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20540__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t20539.cljs$lang$type = true;

cljs.core.async.t20539.cljs$lang$ctorStr = "cljs.core.async/t20539";

cljs.core.async.t20539.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4346__auto__,writer__4347__auto__,opt__4348__auto__){
return cljs.core._write.call(null,writer__4347__auto__,"cljs.core.async/t20539");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t20539 = ((function (mults,ensure_mult){
return (function __GT_t20539(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20540){
return (new cljs.core.async.t20539(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20540));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t20539(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/out/cljs/core/async.cljs"], null)));
})()
;
var c__7173__auto___20661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7173__auto___20661,mults,ensure_mult,p){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (c__7173__auto___20661,mults,ensure_mult,p){
return (function (state_20613){
var state_val_20614 = (state_20613[(1)]);
if((state_val_20614 === (7))){
var inst_20609 = (state_20613[(2)]);
var state_20613__$1 = state_20613;
var statearr_20615_20662 = state_20613__$1;
(statearr_20615_20662[(2)] = inst_20609);

(statearr_20615_20662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (20))){
var state_20613__$1 = state_20613;
var statearr_20616_20663 = state_20613__$1;
(statearr_20616_20663[(2)] = null);

(statearr_20616_20663[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (1))){
var state_20613__$1 = state_20613;
var statearr_20617_20664 = state_20613__$1;
(statearr_20617_20664[(2)] = null);

(statearr_20617_20664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (24))){
var inst_20592 = (state_20613[(7)]);
var inst_20601 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20592);
var state_20613__$1 = state_20613;
var statearr_20618_20665 = state_20613__$1;
(statearr_20618_20665[(2)] = inst_20601);

(statearr_20618_20665[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (4))){
var inst_20544 = (state_20613[(8)]);
var inst_20544__$1 = (state_20613[(2)]);
var inst_20545 = (inst_20544__$1 == null);
var state_20613__$1 = (function (){var statearr_20619 = state_20613;
(statearr_20619[(8)] = inst_20544__$1);

return statearr_20619;
})();
if(cljs.core.truth_(inst_20545)){
var statearr_20620_20666 = state_20613__$1;
(statearr_20620_20666[(1)] = (5));

} else {
var statearr_20621_20667 = state_20613__$1;
(statearr_20621_20667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (15))){
var inst_20586 = (state_20613[(2)]);
var state_20613__$1 = state_20613;
var statearr_20622_20668 = state_20613__$1;
(statearr_20622_20668[(2)] = inst_20586);

(statearr_20622_20668[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (21))){
var inst_20606 = (state_20613[(2)]);
var state_20613__$1 = (function (){var statearr_20623 = state_20613;
(statearr_20623[(9)] = inst_20606);

return statearr_20623;
})();
var statearr_20624_20669 = state_20613__$1;
(statearr_20624_20669[(2)] = null);

(statearr_20624_20669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (13))){
var inst_20568 = (state_20613[(10)]);
var inst_20570 = cljs.core.chunked_seq_QMARK_.call(null,inst_20568);
var state_20613__$1 = state_20613;
if(inst_20570){
var statearr_20625_20670 = state_20613__$1;
(statearr_20625_20670[(1)] = (16));

} else {
var statearr_20626_20671 = state_20613__$1;
(statearr_20626_20671[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (22))){
var inst_20598 = (state_20613[(2)]);
var state_20613__$1 = state_20613;
if(cljs.core.truth_(inst_20598)){
var statearr_20627_20672 = state_20613__$1;
(statearr_20627_20672[(1)] = (23));

} else {
var statearr_20628_20673 = state_20613__$1;
(statearr_20628_20673[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (6))){
var inst_20592 = (state_20613[(7)]);
var inst_20594 = (state_20613[(11)]);
var inst_20544 = (state_20613[(8)]);
var inst_20592__$1 = topic_fn.call(null,inst_20544);
var inst_20593 = cljs.core.deref.call(null,mults);
var inst_20594__$1 = cljs.core.get.call(null,inst_20593,inst_20592__$1);
var state_20613__$1 = (function (){var statearr_20629 = state_20613;
(statearr_20629[(7)] = inst_20592__$1);

(statearr_20629[(11)] = inst_20594__$1);

return statearr_20629;
})();
if(cljs.core.truth_(inst_20594__$1)){
var statearr_20630_20674 = state_20613__$1;
(statearr_20630_20674[(1)] = (19));

} else {
var statearr_20631_20675 = state_20613__$1;
(statearr_20631_20675[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (25))){
var inst_20603 = (state_20613[(2)]);
var state_20613__$1 = state_20613;
var statearr_20632_20676 = state_20613__$1;
(statearr_20632_20676[(2)] = inst_20603);

(statearr_20632_20676[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (17))){
var inst_20568 = (state_20613[(10)]);
var inst_20577 = cljs.core.first.call(null,inst_20568);
var inst_20578 = cljs.core.async.muxch_STAR_.call(null,inst_20577);
var inst_20579 = cljs.core.async.close_BANG_.call(null,inst_20578);
var inst_20580 = cljs.core.next.call(null,inst_20568);
var inst_20554 = inst_20580;
var inst_20555 = null;
var inst_20556 = (0);
var inst_20557 = (0);
var state_20613__$1 = (function (){var statearr_20633 = state_20613;
(statearr_20633[(12)] = inst_20554);

(statearr_20633[(13)] = inst_20579);

(statearr_20633[(14)] = inst_20557);

(statearr_20633[(15)] = inst_20556);

(statearr_20633[(16)] = inst_20555);

return statearr_20633;
})();
var statearr_20634_20677 = state_20613__$1;
(statearr_20634_20677[(2)] = null);

(statearr_20634_20677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (3))){
var inst_20611 = (state_20613[(2)]);
var state_20613__$1 = state_20613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20613__$1,inst_20611);
} else {
if((state_val_20614 === (12))){
var inst_20588 = (state_20613[(2)]);
var state_20613__$1 = state_20613;
var statearr_20635_20678 = state_20613__$1;
(statearr_20635_20678[(2)] = inst_20588);

(statearr_20635_20678[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (2))){
var state_20613__$1 = state_20613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20613__$1,(4),ch);
} else {
if((state_val_20614 === (23))){
var state_20613__$1 = state_20613;
var statearr_20636_20679 = state_20613__$1;
(statearr_20636_20679[(2)] = null);

(statearr_20636_20679[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (19))){
var inst_20594 = (state_20613[(11)]);
var inst_20544 = (state_20613[(8)]);
var inst_20596 = cljs.core.async.muxch_STAR_.call(null,inst_20594);
var state_20613__$1 = state_20613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20613__$1,(22),inst_20596,inst_20544);
} else {
if((state_val_20614 === (11))){
var inst_20568 = (state_20613[(10)]);
var inst_20554 = (state_20613[(12)]);
var inst_20568__$1 = cljs.core.seq.call(null,inst_20554);
var state_20613__$1 = (function (){var statearr_20637 = state_20613;
(statearr_20637[(10)] = inst_20568__$1);

return statearr_20637;
})();
if(inst_20568__$1){
var statearr_20638_20680 = state_20613__$1;
(statearr_20638_20680[(1)] = (13));

} else {
var statearr_20639_20681 = state_20613__$1;
(statearr_20639_20681[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (9))){
var inst_20590 = (state_20613[(2)]);
var state_20613__$1 = state_20613;
var statearr_20640_20682 = state_20613__$1;
(statearr_20640_20682[(2)] = inst_20590);

(statearr_20640_20682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (5))){
var inst_20551 = cljs.core.deref.call(null,mults);
var inst_20552 = cljs.core.vals.call(null,inst_20551);
var inst_20553 = cljs.core.seq.call(null,inst_20552);
var inst_20554 = inst_20553;
var inst_20555 = null;
var inst_20556 = (0);
var inst_20557 = (0);
var state_20613__$1 = (function (){var statearr_20641 = state_20613;
(statearr_20641[(12)] = inst_20554);

(statearr_20641[(14)] = inst_20557);

(statearr_20641[(15)] = inst_20556);

(statearr_20641[(16)] = inst_20555);

return statearr_20641;
})();
var statearr_20642_20683 = state_20613__$1;
(statearr_20642_20683[(2)] = null);

(statearr_20642_20683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (14))){
var state_20613__$1 = state_20613;
var statearr_20646_20684 = state_20613__$1;
(statearr_20646_20684[(2)] = null);

(statearr_20646_20684[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (16))){
var inst_20568 = (state_20613[(10)]);
var inst_20572 = cljs.core.chunk_first.call(null,inst_20568);
var inst_20573 = cljs.core.chunk_rest.call(null,inst_20568);
var inst_20574 = cljs.core.count.call(null,inst_20572);
var inst_20554 = inst_20573;
var inst_20555 = inst_20572;
var inst_20556 = inst_20574;
var inst_20557 = (0);
var state_20613__$1 = (function (){var statearr_20647 = state_20613;
(statearr_20647[(12)] = inst_20554);

(statearr_20647[(14)] = inst_20557);

(statearr_20647[(15)] = inst_20556);

(statearr_20647[(16)] = inst_20555);

return statearr_20647;
})();
var statearr_20648_20685 = state_20613__$1;
(statearr_20648_20685[(2)] = null);

(statearr_20648_20685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (10))){
var inst_20554 = (state_20613[(12)]);
var inst_20557 = (state_20613[(14)]);
var inst_20556 = (state_20613[(15)]);
var inst_20555 = (state_20613[(16)]);
var inst_20562 = cljs.core._nth.call(null,inst_20555,inst_20557);
var inst_20563 = cljs.core.async.muxch_STAR_.call(null,inst_20562);
var inst_20564 = cljs.core.async.close_BANG_.call(null,inst_20563);
var inst_20565 = (inst_20557 + (1));
var tmp20643 = inst_20554;
var tmp20644 = inst_20556;
var tmp20645 = inst_20555;
var inst_20554__$1 = tmp20643;
var inst_20555__$1 = tmp20645;
var inst_20556__$1 = tmp20644;
var inst_20557__$1 = inst_20565;
var state_20613__$1 = (function (){var statearr_20649 = state_20613;
(statearr_20649[(17)] = inst_20564);

(statearr_20649[(12)] = inst_20554__$1);

(statearr_20649[(14)] = inst_20557__$1);

(statearr_20649[(15)] = inst_20556__$1);

(statearr_20649[(16)] = inst_20555__$1);

return statearr_20649;
})();
var statearr_20650_20686 = state_20613__$1;
(statearr_20650_20686[(2)] = null);

(statearr_20650_20686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (18))){
var inst_20583 = (state_20613[(2)]);
var state_20613__$1 = state_20613;
var statearr_20651_20687 = state_20613__$1;
(statearr_20651_20687[(2)] = inst_20583);

(statearr_20651_20687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20614 === (8))){
var inst_20557 = (state_20613[(14)]);
var inst_20556 = (state_20613[(15)]);
var inst_20559 = (inst_20557 < inst_20556);
var inst_20560 = inst_20559;
var state_20613__$1 = state_20613;
if(cljs.core.truth_(inst_20560)){
var statearr_20652_20688 = state_20613__$1;
(statearr_20652_20688[(1)] = (10));

} else {
var statearr_20653_20689 = state_20613__$1;
(statearr_20653_20689[(1)] = (11));

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
});})(c__7173__auto___20661,mults,ensure_mult,p))
;
return ((function (switch__7117__auto__,c__7173__auto___20661,mults,ensure_mult,p){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_20657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20657[(0)] = state_machine__7118__auto__);

(statearr_20657[(1)] = (1));

return statearr_20657;
});
var state_machine__7118__auto____1 = (function (state_20613){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_20613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e20658){if((e20658 instanceof Object)){
var ex__7121__auto__ = e20658;
var statearr_20659_20690 = state_20613;
(statearr_20659_20690[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20691 = state_20613;
state_20613 = G__20691;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_20613){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_20613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(switch__7117__auto__,c__7173__auto___20661,mults,ensure_mult,p))
})();
var state__7175__auto__ = (function (){var statearr_20660 = f__7174__auto__.call(null);
(statearr_20660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto___20661);

return statearr_20660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(c__7173__auto___20661,mults,ensure_mult,p))
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
var c__7173__auto___20828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7173__auto___20828,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (c__7173__auto___20828,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20798){
var state_val_20799 = (state_20798[(1)]);
if((state_val_20799 === (7))){
var state_20798__$1 = state_20798;
var statearr_20800_20829 = state_20798__$1;
(statearr_20800_20829[(2)] = null);

(statearr_20800_20829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20799 === (1))){
var state_20798__$1 = state_20798;
var statearr_20801_20830 = state_20798__$1;
(statearr_20801_20830[(2)] = null);

(statearr_20801_20830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20799 === (4))){
var inst_20762 = (state_20798[(7)]);
var inst_20764 = (inst_20762 < cnt);
var state_20798__$1 = state_20798;
if(cljs.core.truth_(inst_20764)){
var statearr_20802_20831 = state_20798__$1;
(statearr_20802_20831[(1)] = (6));

} else {
var statearr_20803_20832 = state_20798__$1;
(statearr_20803_20832[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20799 === (15))){
var inst_20794 = (state_20798[(2)]);
var state_20798__$1 = state_20798;
var statearr_20804_20833 = state_20798__$1;
(statearr_20804_20833[(2)] = inst_20794);

(statearr_20804_20833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20799 === (13))){
var inst_20787 = cljs.core.async.close_BANG_.call(null,out);
var state_20798__$1 = state_20798;
var statearr_20805_20834 = state_20798__$1;
(statearr_20805_20834[(2)] = inst_20787);

(statearr_20805_20834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20799 === (6))){
var state_20798__$1 = state_20798;
var statearr_20806_20835 = state_20798__$1;
(statearr_20806_20835[(2)] = null);

(statearr_20806_20835[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20799 === (3))){
var inst_20796 = (state_20798[(2)]);
var state_20798__$1 = state_20798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20798__$1,inst_20796);
} else {
if((state_val_20799 === (12))){
var inst_20784 = (state_20798[(8)]);
var inst_20784__$1 = (state_20798[(2)]);
var inst_20785 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20784__$1);
var state_20798__$1 = (function (){var statearr_20807 = state_20798;
(statearr_20807[(8)] = inst_20784__$1);

return statearr_20807;
})();
if(cljs.core.truth_(inst_20785)){
var statearr_20808_20836 = state_20798__$1;
(statearr_20808_20836[(1)] = (13));

} else {
var statearr_20809_20837 = state_20798__$1;
(statearr_20809_20837[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20799 === (2))){
var inst_20761 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20762 = (0);
var state_20798__$1 = (function (){var statearr_20810 = state_20798;
(statearr_20810[(7)] = inst_20762);

(statearr_20810[(9)] = inst_20761);

return statearr_20810;
})();
var statearr_20811_20838 = state_20798__$1;
(statearr_20811_20838[(2)] = null);

(statearr_20811_20838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20799 === (11))){
var inst_20762 = (state_20798[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20798,(10),Object,null,(9));
var inst_20771 = chs__$1.call(null,inst_20762);
var inst_20772 = done.call(null,inst_20762);
var inst_20773 = cljs.core.async.take_BANG_.call(null,inst_20771,inst_20772);
var state_20798__$1 = state_20798;
var statearr_20812_20839 = state_20798__$1;
(statearr_20812_20839[(2)] = inst_20773);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20798__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20799 === (9))){
var inst_20762 = (state_20798[(7)]);
var inst_20775 = (state_20798[(2)]);
var inst_20776 = (inst_20762 + (1));
var inst_20762__$1 = inst_20776;
var state_20798__$1 = (function (){var statearr_20813 = state_20798;
(statearr_20813[(10)] = inst_20775);

(statearr_20813[(7)] = inst_20762__$1);

return statearr_20813;
})();
var statearr_20814_20840 = state_20798__$1;
(statearr_20814_20840[(2)] = null);

(statearr_20814_20840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20799 === (5))){
var inst_20782 = (state_20798[(2)]);
var state_20798__$1 = (function (){var statearr_20815 = state_20798;
(statearr_20815[(11)] = inst_20782);

return statearr_20815;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20798__$1,(12),dchan);
} else {
if((state_val_20799 === (14))){
var inst_20784 = (state_20798[(8)]);
var inst_20789 = cljs.core.apply.call(null,f,inst_20784);
var state_20798__$1 = state_20798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20798__$1,(16),out,inst_20789);
} else {
if((state_val_20799 === (16))){
var inst_20791 = (state_20798[(2)]);
var state_20798__$1 = (function (){var statearr_20816 = state_20798;
(statearr_20816[(12)] = inst_20791);

return statearr_20816;
})();
var statearr_20817_20841 = state_20798__$1;
(statearr_20817_20841[(2)] = null);

(statearr_20817_20841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20799 === (10))){
var inst_20766 = (state_20798[(2)]);
var inst_20767 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20798__$1 = (function (){var statearr_20818 = state_20798;
(statearr_20818[(13)] = inst_20766);

return statearr_20818;
})();
var statearr_20819_20842 = state_20798__$1;
(statearr_20819_20842[(2)] = inst_20767);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20798__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20799 === (8))){
var inst_20780 = (state_20798[(2)]);
var state_20798__$1 = state_20798;
var statearr_20820_20843 = state_20798__$1;
(statearr_20820_20843[(2)] = inst_20780);

(statearr_20820_20843[(1)] = (5));


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
});})(c__7173__auto___20828,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7117__auto__,c__7173__auto___20828,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_20824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20824[(0)] = state_machine__7118__auto__);

(statearr_20824[(1)] = (1));

return statearr_20824;
});
var state_machine__7118__auto____1 = (function (state_20798){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_20798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e20825){if((e20825 instanceof Object)){
var ex__7121__auto__ = e20825;
var statearr_20826_20844 = state_20798;
(statearr_20826_20844[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20845 = state_20798;
state_20798 = G__20845;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_20798){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_20798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(switch__7117__auto__,c__7173__auto___20828,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7175__auto__ = (function (){var statearr_20827 = f__7174__auto__.call(null);
(statearr_20827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto___20828);

return statearr_20827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(c__7173__auto___20828,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7173__auto___20953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7173__auto___20953,out){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (c__7173__auto___20953,out){
return (function (state_20929){
var state_val_20930 = (state_20929[(1)]);
if((state_val_20930 === (7))){
var inst_20909 = (state_20929[(7)]);
var inst_20908 = (state_20929[(8)]);
var inst_20908__$1 = (state_20929[(2)]);
var inst_20909__$1 = cljs.core.nth.call(null,inst_20908__$1,(0),null);
var inst_20910 = cljs.core.nth.call(null,inst_20908__$1,(1),null);
var inst_20911 = (inst_20909__$1 == null);
var state_20929__$1 = (function (){var statearr_20931 = state_20929;
(statearr_20931[(9)] = inst_20910);

(statearr_20931[(7)] = inst_20909__$1);

(statearr_20931[(8)] = inst_20908__$1);

return statearr_20931;
})();
if(cljs.core.truth_(inst_20911)){
var statearr_20932_20954 = state_20929__$1;
(statearr_20932_20954[(1)] = (8));

} else {
var statearr_20933_20955 = state_20929__$1;
(statearr_20933_20955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20930 === (1))){
var inst_20900 = cljs.core.vec.call(null,chs);
var inst_20901 = inst_20900;
var state_20929__$1 = (function (){var statearr_20934 = state_20929;
(statearr_20934[(10)] = inst_20901);

return statearr_20934;
})();
var statearr_20935_20956 = state_20929__$1;
(statearr_20935_20956[(2)] = null);

(statearr_20935_20956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20930 === (4))){
var inst_20901 = (state_20929[(10)]);
var state_20929__$1 = state_20929;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20929__$1,(7),inst_20901);
} else {
if((state_val_20930 === (6))){
var inst_20925 = (state_20929[(2)]);
var state_20929__$1 = state_20929;
var statearr_20936_20957 = state_20929__$1;
(statearr_20936_20957[(2)] = inst_20925);

(statearr_20936_20957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20930 === (3))){
var inst_20927 = (state_20929[(2)]);
var state_20929__$1 = state_20929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20929__$1,inst_20927);
} else {
if((state_val_20930 === (2))){
var inst_20901 = (state_20929[(10)]);
var inst_20903 = cljs.core.count.call(null,inst_20901);
var inst_20904 = (inst_20903 > (0));
var state_20929__$1 = state_20929;
if(cljs.core.truth_(inst_20904)){
var statearr_20938_20958 = state_20929__$1;
(statearr_20938_20958[(1)] = (4));

} else {
var statearr_20939_20959 = state_20929__$1;
(statearr_20939_20959[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20930 === (11))){
var inst_20901 = (state_20929[(10)]);
var inst_20918 = (state_20929[(2)]);
var tmp20937 = inst_20901;
var inst_20901__$1 = tmp20937;
var state_20929__$1 = (function (){var statearr_20940 = state_20929;
(statearr_20940[(11)] = inst_20918);

(statearr_20940[(10)] = inst_20901__$1);

return statearr_20940;
})();
var statearr_20941_20960 = state_20929__$1;
(statearr_20941_20960[(2)] = null);

(statearr_20941_20960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20930 === (9))){
var inst_20909 = (state_20929[(7)]);
var state_20929__$1 = state_20929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20929__$1,(11),out,inst_20909);
} else {
if((state_val_20930 === (5))){
var inst_20923 = cljs.core.async.close_BANG_.call(null,out);
var state_20929__$1 = state_20929;
var statearr_20942_20961 = state_20929__$1;
(statearr_20942_20961[(2)] = inst_20923);

(statearr_20942_20961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20930 === (10))){
var inst_20921 = (state_20929[(2)]);
var state_20929__$1 = state_20929;
var statearr_20943_20962 = state_20929__$1;
(statearr_20943_20962[(2)] = inst_20921);

(statearr_20943_20962[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20930 === (8))){
var inst_20910 = (state_20929[(9)]);
var inst_20909 = (state_20929[(7)]);
var inst_20901 = (state_20929[(10)]);
var inst_20908 = (state_20929[(8)]);
var inst_20913 = (function (){var c = inst_20910;
var v = inst_20909;
var vec__20906 = inst_20908;
var cs = inst_20901;
return ((function (c,v,vec__20906,cs,inst_20910,inst_20909,inst_20901,inst_20908,state_val_20930,c__7173__auto___20953,out){
return (function (p1__20846_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20846_SHARP_);
});
;})(c,v,vec__20906,cs,inst_20910,inst_20909,inst_20901,inst_20908,state_val_20930,c__7173__auto___20953,out))
})();
var inst_20914 = cljs.core.filterv.call(null,inst_20913,inst_20901);
var inst_20901__$1 = inst_20914;
var state_20929__$1 = (function (){var statearr_20944 = state_20929;
(statearr_20944[(10)] = inst_20901__$1);

return statearr_20944;
})();
var statearr_20945_20963 = state_20929__$1;
(statearr_20945_20963[(2)] = null);

(statearr_20945_20963[(1)] = (2));


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
});})(c__7173__auto___20953,out))
;
return ((function (switch__7117__auto__,c__7173__auto___20953,out){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_20949 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20949[(0)] = state_machine__7118__auto__);

(statearr_20949[(1)] = (1));

return statearr_20949;
});
var state_machine__7118__auto____1 = (function (state_20929){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_20929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e20950){if((e20950 instanceof Object)){
var ex__7121__auto__ = e20950;
var statearr_20951_20964 = state_20929;
(statearr_20951_20964[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20965 = state_20929;
state_20929 = G__20965;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_20929){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_20929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(switch__7117__auto__,c__7173__auto___20953,out))
})();
var state__7175__auto__ = (function (){var statearr_20952 = f__7174__auto__.call(null);
(statearr_20952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto___20953);

return statearr_20952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(c__7173__auto___20953,out))
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
var c__7173__auto___21058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7173__auto___21058,out){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (c__7173__auto___21058,out){
return (function (state_21035){
var state_val_21036 = (state_21035[(1)]);
if((state_val_21036 === (7))){
var inst_21017 = (state_21035[(7)]);
var inst_21017__$1 = (state_21035[(2)]);
var inst_21018 = (inst_21017__$1 == null);
var inst_21019 = cljs.core.not.call(null,inst_21018);
var state_21035__$1 = (function (){var statearr_21037 = state_21035;
(statearr_21037[(7)] = inst_21017__$1);

return statearr_21037;
})();
if(inst_21019){
var statearr_21038_21059 = state_21035__$1;
(statearr_21038_21059[(1)] = (8));

} else {
var statearr_21039_21060 = state_21035__$1;
(statearr_21039_21060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (1))){
var inst_21012 = (0);
var state_21035__$1 = (function (){var statearr_21040 = state_21035;
(statearr_21040[(8)] = inst_21012);

return statearr_21040;
})();
var statearr_21041_21061 = state_21035__$1;
(statearr_21041_21061[(2)] = null);

(statearr_21041_21061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (4))){
var state_21035__$1 = state_21035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21035__$1,(7),ch);
} else {
if((state_val_21036 === (6))){
var inst_21030 = (state_21035[(2)]);
var state_21035__$1 = state_21035;
var statearr_21042_21062 = state_21035__$1;
(statearr_21042_21062[(2)] = inst_21030);

(statearr_21042_21062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (3))){
var inst_21032 = (state_21035[(2)]);
var inst_21033 = cljs.core.async.close_BANG_.call(null,out);
var state_21035__$1 = (function (){var statearr_21043 = state_21035;
(statearr_21043[(9)] = inst_21032);

return statearr_21043;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21035__$1,inst_21033);
} else {
if((state_val_21036 === (2))){
var inst_21012 = (state_21035[(8)]);
var inst_21014 = (inst_21012 < n);
var state_21035__$1 = state_21035;
if(cljs.core.truth_(inst_21014)){
var statearr_21044_21063 = state_21035__$1;
(statearr_21044_21063[(1)] = (4));

} else {
var statearr_21045_21064 = state_21035__$1;
(statearr_21045_21064[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (11))){
var inst_21012 = (state_21035[(8)]);
var inst_21022 = (state_21035[(2)]);
var inst_21023 = (inst_21012 + (1));
var inst_21012__$1 = inst_21023;
var state_21035__$1 = (function (){var statearr_21046 = state_21035;
(statearr_21046[(8)] = inst_21012__$1);

(statearr_21046[(10)] = inst_21022);

return statearr_21046;
})();
var statearr_21047_21065 = state_21035__$1;
(statearr_21047_21065[(2)] = null);

(statearr_21047_21065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (9))){
var state_21035__$1 = state_21035;
var statearr_21048_21066 = state_21035__$1;
(statearr_21048_21066[(2)] = null);

(statearr_21048_21066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (5))){
var state_21035__$1 = state_21035;
var statearr_21049_21067 = state_21035__$1;
(statearr_21049_21067[(2)] = null);

(statearr_21049_21067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (10))){
var inst_21027 = (state_21035[(2)]);
var state_21035__$1 = state_21035;
var statearr_21050_21068 = state_21035__$1;
(statearr_21050_21068[(2)] = inst_21027);

(statearr_21050_21068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21036 === (8))){
var inst_21017 = (state_21035[(7)]);
var state_21035__$1 = state_21035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21035__$1,(11),out,inst_21017);
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
});})(c__7173__auto___21058,out))
;
return ((function (switch__7117__auto__,c__7173__auto___21058,out){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_21054 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21054[(0)] = state_machine__7118__auto__);

(statearr_21054[(1)] = (1));

return statearr_21054;
});
var state_machine__7118__auto____1 = (function (state_21035){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_21035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e21055){if((e21055 instanceof Object)){
var ex__7121__auto__ = e21055;
var statearr_21056_21069 = state_21035;
(statearr_21056_21069[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21070 = state_21035;
state_21035 = G__21070;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_21035){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_21035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(switch__7117__auto__,c__7173__auto___21058,out))
})();
var state__7175__auto__ = (function (){var statearr_21057 = f__7174__auto__.call(null);
(statearr_21057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto___21058);

return statearr_21057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(c__7173__auto___21058,out))
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
if(typeof cljs.core.async.t21078 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21078 = (function (ch,f,map_LT_,meta21079){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21079 = meta21079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21078.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21078.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t21078.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21078.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t21081 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21081 = (function (fn1,_,meta21079,map_LT_,f,ch,meta21082){
this.fn1 = fn1;
this._ = _;
this.meta21079 = meta21079;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21082 = meta21082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21081.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21081.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t21081.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21071_SHARP_){
return f1.call(null,(((p1__21071_SHARP_ == null))?null:self__.f.call(null,p1__21071_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t21081.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21083){
var self__ = this;
var _21083__$1 = this;
return self__.meta21082;
});})(___$1))
;

cljs.core.async.t21081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21083,meta21082__$1){
var self__ = this;
var _21083__$1 = this;
return (new cljs.core.async.t21081(self__.fn1,self__._,self__.meta21079,self__.map_LT_,self__.f,self__.ch,meta21082__$1));
});})(___$1))
;

cljs.core.async.t21081.cljs$lang$type = true;

cljs.core.async.t21081.cljs$lang$ctorStr = "cljs.core.async/t21081";

cljs.core.async.t21081.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4346__auto__,writer__4347__auto__,opt__4348__auto__){
return cljs.core._write.call(null,writer__4347__auto__,"cljs.core.async/t21081");
});})(___$1))
;

cljs.core.async.__GT_t21081 = ((function (___$1){
return (function __GT_t21081(fn1__$1,___$2,meta21079__$1,map_LT___$1,f__$1,ch__$1,meta21082){
return (new cljs.core.async.t21081(fn1__$1,___$2,meta21079__$1,map_LT___$1,f__$1,ch__$1,meta21082));
});})(___$1))
;

}

return (new cljs.core.async.t21081(fn1,___$1,self__.meta21079,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3747__auto__ = ret;
if(cljs.core.truth_(and__3747__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3747__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t21078.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21078.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21078.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21080){
var self__ = this;
var _21080__$1 = this;
return self__.meta21079;
});

cljs.core.async.t21078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21080,meta21079__$1){
var self__ = this;
var _21080__$1 = this;
return (new cljs.core.async.t21078(self__.ch,self__.f,self__.map_LT_,meta21079__$1));
});

cljs.core.async.t21078.cljs$lang$type = true;

cljs.core.async.t21078.cljs$lang$ctorStr = "cljs.core.async/t21078";

cljs.core.async.t21078.cljs$lang$ctorPrWriter = (function (this__4346__auto__,writer__4347__auto__,opt__4348__auto__){
return cljs.core._write.call(null,writer__4347__auto__,"cljs.core.async/t21078");
});

cljs.core.async.__GT_t21078 = (function __GT_t21078(ch__$1,f__$1,map_LT___$1,meta21079){
return (new cljs.core.async.t21078(ch__$1,f__$1,map_LT___$1,meta21079));
});

}

return (new cljs.core.async.t21078(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t21087 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21087 = (function (ch,f,map_GT_,meta21088){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21088 = meta21088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21087.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21087.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t21087.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21087.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21087.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21087.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21089){
var self__ = this;
var _21089__$1 = this;
return self__.meta21088;
});

cljs.core.async.t21087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21089,meta21088__$1){
var self__ = this;
var _21089__$1 = this;
return (new cljs.core.async.t21087(self__.ch,self__.f,self__.map_GT_,meta21088__$1));
});

cljs.core.async.t21087.cljs$lang$type = true;

cljs.core.async.t21087.cljs$lang$ctorStr = "cljs.core.async/t21087";

cljs.core.async.t21087.cljs$lang$ctorPrWriter = (function (this__4346__auto__,writer__4347__auto__,opt__4348__auto__){
return cljs.core._write.call(null,writer__4347__auto__,"cljs.core.async/t21087");
});

cljs.core.async.__GT_t21087 = (function __GT_t21087(ch__$1,f__$1,map_GT___$1,meta21088){
return (new cljs.core.async.t21087(ch__$1,f__$1,map_GT___$1,meta21088));
});

}

return (new cljs.core.async.t21087(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t21093 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21093 = (function (ch,p,filter_GT_,meta21094){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21094 = meta21094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21093.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21093.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t21093.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21093.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21093.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21093.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21093.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21095){
var self__ = this;
var _21095__$1 = this;
return self__.meta21094;
});

cljs.core.async.t21093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21095,meta21094__$1){
var self__ = this;
var _21095__$1 = this;
return (new cljs.core.async.t21093(self__.ch,self__.p,self__.filter_GT_,meta21094__$1));
});

cljs.core.async.t21093.cljs$lang$type = true;

cljs.core.async.t21093.cljs$lang$ctorStr = "cljs.core.async/t21093";

cljs.core.async.t21093.cljs$lang$ctorPrWriter = (function (this__4346__auto__,writer__4347__auto__,opt__4348__auto__){
return cljs.core._write.call(null,writer__4347__auto__,"cljs.core.async/t21093");
});

cljs.core.async.__GT_t21093 = (function __GT_t21093(ch__$1,p__$1,filter_GT___$1,meta21094){
return (new cljs.core.async.t21093(ch__$1,p__$1,filter_GT___$1,meta21094));
});

}

return (new cljs.core.async.t21093(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/matthew/Documents/Code/sailing-study-guide/out/cljs/core/async.cljs"], null)));
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
var c__7173__auto___21178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7173__auto___21178,out){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (c__7173__auto___21178,out){
return (function (state_21157){
var state_val_21158 = (state_21157[(1)]);
if((state_val_21158 === (7))){
var inst_21153 = (state_21157[(2)]);
var state_21157__$1 = state_21157;
var statearr_21159_21179 = state_21157__$1;
(statearr_21159_21179[(2)] = inst_21153);

(statearr_21159_21179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (1))){
var state_21157__$1 = state_21157;
var statearr_21160_21180 = state_21157__$1;
(statearr_21160_21180[(2)] = null);

(statearr_21160_21180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (4))){
var inst_21139 = (state_21157[(7)]);
var inst_21139__$1 = (state_21157[(2)]);
var inst_21140 = (inst_21139__$1 == null);
var state_21157__$1 = (function (){var statearr_21161 = state_21157;
(statearr_21161[(7)] = inst_21139__$1);

return statearr_21161;
})();
if(cljs.core.truth_(inst_21140)){
var statearr_21162_21181 = state_21157__$1;
(statearr_21162_21181[(1)] = (5));

} else {
var statearr_21163_21182 = state_21157__$1;
(statearr_21163_21182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (6))){
var inst_21139 = (state_21157[(7)]);
var inst_21144 = p.call(null,inst_21139);
var state_21157__$1 = state_21157;
if(cljs.core.truth_(inst_21144)){
var statearr_21164_21183 = state_21157__$1;
(statearr_21164_21183[(1)] = (8));

} else {
var statearr_21165_21184 = state_21157__$1;
(statearr_21165_21184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (3))){
var inst_21155 = (state_21157[(2)]);
var state_21157__$1 = state_21157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21157__$1,inst_21155);
} else {
if((state_val_21158 === (2))){
var state_21157__$1 = state_21157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21157__$1,(4),ch);
} else {
if((state_val_21158 === (11))){
var inst_21147 = (state_21157[(2)]);
var state_21157__$1 = state_21157;
var statearr_21166_21185 = state_21157__$1;
(statearr_21166_21185[(2)] = inst_21147);

(statearr_21166_21185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (9))){
var state_21157__$1 = state_21157;
var statearr_21167_21186 = state_21157__$1;
(statearr_21167_21186[(2)] = null);

(statearr_21167_21186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (5))){
var inst_21142 = cljs.core.async.close_BANG_.call(null,out);
var state_21157__$1 = state_21157;
var statearr_21168_21187 = state_21157__$1;
(statearr_21168_21187[(2)] = inst_21142);

(statearr_21168_21187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (10))){
var inst_21150 = (state_21157[(2)]);
var state_21157__$1 = (function (){var statearr_21169 = state_21157;
(statearr_21169[(8)] = inst_21150);

return statearr_21169;
})();
var statearr_21170_21188 = state_21157__$1;
(statearr_21170_21188[(2)] = null);

(statearr_21170_21188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (8))){
var inst_21139 = (state_21157[(7)]);
var state_21157__$1 = state_21157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21157__$1,(11),out,inst_21139);
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
});})(c__7173__auto___21178,out))
;
return ((function (switch__7117__auto__,c__7173__auto___21178,out){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_21174 = [null,null,null,null,null,null,null,null,null];
(statearr_21174[(0)] = state_machine__7118__auto__);

(statearr_21174[(1)] = (1));

return statearr_21174;
});
var state_machine__7118__auto____1 = (function (state_21157){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_21157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e21175){if((e21175 instanceof Object)){
var ex__7121__auto__ = e21175;
var statearr_21176_21189 = state_21157;
(statearr_21176_21189[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21190 = state_21157;
state_21157 = G__21190;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_21157){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_21157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(switch__7117__auto__,c__7173__auto___21178,out))
})();
var state__7175__auto__ = (function (){var statearr_21177 = f__7174__auto__.call(null);
(statearr_21177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto___21178);

return statearr_21177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(c__7173__auto___21178,out))
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
var c__7173__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7173__auto__){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (c__7173__auto__){
return (function (state_21356){
var state_val_21357 = (state_21356[(1)]);
if((state_val_21357 === (7))){
var inst_21352 = (state_21356[(2)]);
var state_21356__$1 = state_21356;
var statearr_21358_21399 = state_21356__$1;
(statearr_21358_21399[(2)] = inst_21352);

(statearr_21358_21399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (20))){
var inst_21322 = (state_21356[(7)]);
var inst_21333 = (state_21356[(2)]);
var inst_21334 = cljs.core.next.call(null,inst_21322);
var inst_21308 = inst_21334;
var inst_21309 = null;
var inst_21310 = (0);
var inst_21311 = (0);
var state_21356__$1 = (function (){var statearr_21359 = state_21356;
(statearr_21359[(8)] = inst_21309);

(statearr_21359[(9)] = inst_21310);

(statearr_21359[(10)] = inst_21333);

(statearr_21359[(11)] = inst_21311);

(statearr_21359[(12)] = inst_21308);

return statearr_21359;
})();
var statearr_21360_21400 = state_21356__$1;
(statearr_21360_21400[(2)] = null);

(statearr_21360_21400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (1))){
var state_21356__$1 = state_21356;
var statearr_21361_21401 = state_21356__$1;
(statearr_21361_21401[(2)] = null);

(statearr_21361_21401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (4))){
var inst_21297 = (state_21356[(13)]);
var inst_21297__$1 = (state_21356[(2)]);
var inst_21298 = (inst_21297__$1 == null);
var state_21356__$1 = (function (){var statearr_21362 = state_21356;
(statearr_21362[(13)] = inst_21297__$1);

return statearr_21362;
})();
if(cljs.core.truth_(inst_21298)){
var statearr_21363_21402 = state_21356__$1;
(statearr_21363_21402[(1)] = (5));

} else {
var statearr_21364_21403 = state_21356__$1;
(statearr_21364_21403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (15))){
var state_21356__$1 = state_21356;
var statearr_21368_21404 = state_21356__$1;
(statearr_21368_21404[(2)] = null);

(statearr_21368_21404[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (21))){
var state_21356__$1 = state_21356;
var statearr_21369_21405 = state_21356__$1;
(statearr_21369_21405[(2)] = null);

(statearr_21369_21405[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (13))){
var inst_21309 = (state_21356[(8)]);
var inst_21310 = (state_21356[(9)]);
var inst_21311 = (state_21356[(11)]);
var inst_21308 = (state_21356[(12)]);
var inst_21318 = (state_21356[(2)]);
var inst_21319 = (inst_21311 + (1));
var tmp21365 = inst_21309;
var tmp21366 = inst_21310;
var tmp21367 = inst_21308;
var inst_21308__$1 = tmp21367;
var inst_21309__$1 = tmp21365;
var inst_21310__$1 = tmp21366;
var inst_21311__$1 = inst_21319;
var state_21356__$1 = (function (){var statearr_21370 = state_21356;
(statearr_21370[(14)] = inst_21318);

(statearr_21370[(8)] = inst_21309__$1);

(statearr_21370[(9)] = inst_21310__$1);

(statearr_21370[(11)] = inst_21311__$1);

(statearr_21370[(12)] = inst_21308__$1);

return statearr_21370;
})();
var statearr_21371_21406 = state_21356__$1;
(statearr_21371_21406[(2)] = null);

(statearr_21371_21406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (22))){
var state_21356__$1 = state_21356;
var statearr_21372_21407 = state_21356__$1;
(statearr_21372_21407[(2)] = null);

(statearr_21372_21407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (6))){
var inst_21297 = (state_21356[(13)]);
var inst_21306 = f.call(null,inst_21297);
var inst_21307 = cljs.core.seq.call(null,inst_21306);
var inst_21308 = inst_21307;
var inst_21309 = null;
var inst_21310 = (0);
var inst_21311 = (0);
var state_21356__$1 = (function (){var statearr_21373 = state_21356;
(statearr_21373[(8)] = inst_21309);

(statearr_21373[(9)] = inst_21310);

(statearr_21373[(11)] = inst_21311);

(statearr_21373[(12)] = inst_21308);

return statearr_21373;
})();
var statearr_21374_21408 = state_21356__$1;
(statearr_21374_21408[(2)] = null);

(statearr_21374_21408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (17))){
var inst_21322 = (state_21356[(7)]);
var inst_21326 = cljs.core.chunk_first.call(null,inst_21322);
var inst_21327 = cljs.core.chunk_rest.call(null,inst_21322);
var inst_21328 = cljs.core.count.call(null,inst_21326);
var inst_21308 = inst_21327;
var inst_21309 = inst_21326;
var inst_21310 = inst_21328;
var inst_21311 = (0);
var state_21356__$1 = (function (){var statearr_21375 = state_21356;
(statearr_21375[(8)] = inst_21309);

(statearr_21375[(9)] = inst_21310);

(statearr_21375[(11)] = inst_21311);

(statearr_21375[(12)] = inst_21308);

return statearr_21375;
})();
var statearr_21376_21409 = state_21356__$1;
(statearr_21376_21409[(2)] = null);

(statearr_21376_21409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (3))){
var inst_21354 = (state_21356[(2)]);
var state_21356__$1 = state_21356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21356__$1,inst_21354);
} else {
if((state_val_21357 === (12))){
var inst_21342 = (state_21356[(2)]);
var state_21356__$1 = state_21356;
var statearr_21377_21410 = state_21356__$1;
(statearr_21377_21410[(2)] = inst_21342);

(statearr_21377_21410[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (2))){
var state_21356__$1 = state_21356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21356__$1,(4),in$);
} else {
if((state_val_21357 === (23))){
var inst_21350 = (state_21356[(2)]);
var state_21356__$1 = state_21356;
var statearr_21378_21411 = state_21356__$1;
(statearr_21378_21411[(2)] = inst_21350);

(statearr_21378_21411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (19))){
var inst_21337 = (state_21356[(2)]);
var state_21356__$1 = state_21356;
var statearr_21379_21412 = state_21356__$1;
(statearr_21379_21412[(2)] = inst_21337);

(statearr_21379_21412[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (11))){
var inst_21322 = (state_21356[(7)]);
var inst_21308 = (state_21356[(12)]);
var inst_21322__$1 = cljs.core.seq.call(null,inst_21308);
var state_21356__$1 = (function (){var statearr_21380 = state_21356;
(statearr_21380[(7)] = inst_21322__$1);

return statearr_21380;
})();
if(inst_21322__$1){
var statearr_21381_21413 = state_21356__$1;
(statearr_21381_21413[(1)] = (14));

} else {
var statearr_21382_21414 = state_21356__$1;
(statearr_21382_21414[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (9))){
var inst_21344 = (state_21356[(2)]);
var inst_21345 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21356__$1 = (function (){var statearr_21383 = state_21356;
(statearr_21383[(15)] = inst_21344);

return statearr_21383;
})();
if(cljs.core.truth_(inst_21345)){
var statearr_21384_21415 = state_21356__$1;
(statearr_21384_21415[(1)] = (21));

} else {
var statearr_21385_21416 = state_21356__$1;
(statearr_21385_21416[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (5))){
var inst_21300 = cljs.core.async.close_BANG_.call(null,out);
var state_21356__$1 = state_21356;
var statearr_21386_21417 = state_21356__$1;
(statearr_21386_21417[(2)] = inst_21300);

(statearr_21386_21417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (14))){
var inst_21322 = (state_21356[(7)]);
var inst_21324 = cljs.core.chunked_seq_QMARK_.call(null,inst_21322);
var state_21356__$1 = state_21356;
if(inst_21324){
var statearr_21387_21418 = state_21356__$1;
(statearr_21387_21418[(1)] = (17));

} else {
var statearr_21388_21419 = state_21356__$1;
(statearr_21388_21419[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (16))){
var inst_21340 = (state_21356[(2)]);
var state_21356__$1 = state_21356;
var statearr_21389_21420 = state_21356__$1;
(statearr_21389_21420[(2)] = inst_21340);

(statearr_21389_21420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21357 === (10))){
var inst_21309 = (state_21356[(8)]);
var inst_21311 = (state_21356[(11)]);
var inst_21316 = cljs.core._nth.call(null,inst_21309,inst_21311);
var state_21356__$1 = state_21356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21356__$1,(13),out,inst_21316);
} else {
if((state_val_21357 === (18))){
var inst_21322 = (state_21356[(7)]);
var inst_21331 = cljs.core.first.call(null,inst_21322);
var state_21356__$1 = state_21356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21356__$1,(20),out,inst_21331);
} else {
if((state_val_21357 === (8))){
var inst_21310 = (state_21356[(9)]);
var inst_21311 = (state_21356[(11)]);
var inst_21313 = (inst_21311 < inst_21310);
var inst_21314 = inst_21313;
var state_21356__$1 = state_21356;
if(cljs.core.truth_(inst_21314)){
var statearr_21390_21421 = state_21356__$1;
(statearr_21390_21421[(1)] = (10));

} else {
var statearr_21391_21422 = state_21356__$1;
(statearr_21391_21422[(1)] = (11));

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
});})(c__7173__auto__))
;
return ((function (switch__7117__auto__,c__7173__auto__){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_21395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21395[(0)] = state_machine__7118__auto__);

(statearr_21395[(1)] = (1));

return statearr_21395;
});
var state_machine__7118__auto____1 = (function (state_21356){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_21356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e21396){if((e21396 instanceof Object)){
var ex__7121__auto__ = e21396;
var statearr_21397_21423 = state_21356;
(statearr_21397_21423[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21424 = state_21356;
state_21356 = G__21424;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_21356){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_21356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(switch__7117__auto__,c__7173__auto__))
})();
var state__7175__auto__ = (function (){var statearr_21398 = f__7174__auto__.call(null);
(statearr_21398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto__);

return statearr_21398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(c__7173__auto__))
);

return c__7173__auto__;
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
var c__7173__auto___21521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7173__auto___21521,out){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (c__7173__auto___21521,out){
return (function (state_21496){
var state_val_21497 = (state_21496[(1)]);
if((state_val_21497 === (7))){
var inst_21491 = (state_21496[(2)]);
var state_21496__$1 = state_21496;
var statearr_21498_21522 = state_21496__$1;
(statearr_21498_21522[(2)] = inst_21491);

(statearr_21498_21522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (1))){
var inst_21473 = null;
var state_21496__$1 = (function (){var statearr_21499 = state_21496;
(statearr_21499[(7)] = inst_21473);

return statearr_21499;
})();
var statearr_21500_21523 = state_21496__$1;
(statearr_21500_21523[(2)] = null);

(statearr_21500_21523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (4))){
var inst_21476 = (state_21496[(8)]);
var inst_21476__$1 = (state_21496[(2)]);
var inst_21477 = (inst_21476__$1 == null);
var inst_21478 = cljs.core.not.call(null,inst_21477);
var state_21496__$1 = (function (){var statearr_21501 = state_21496;
(statearr_21501[(8)] = inst_21476__$1);

return statearr_21501;
})();
if(inst_21478){
var statearr_21502_21524 = state_21496__$1;
(statearr_21502_21524[(1)] = (5));

} else {
var statearr_21503_21525 = state_21496__$1;
(statearr_21503_21525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (6))){
var state_21496__$1 = state_21496;
var statearr_21504_21526 = state_21496__$1;
(statearr_21504_21526[(2)] = null);

(statearr_21504_21526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (3))){
var inst_21493 = (state_21496[(2)]);
var inst_21494 = cljs.core.async.close_BANG_.call(null,out);
var state_21496__$1 = (function (){var statearr_21505 = state_21496;
(statearr_21505[(9)] = inst_21493);

return statearr_21505;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21496__$1,inst_21494);
} else {
if((state_val_21497 === (2))){
var state_21496__$1 = state_21496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21496__$1,(4),ch);
} else {
if((state_val_21497 === (11))){
var inst_21476 = (state_21496[(8)]);
var inst_21485 = (state_21496[(2)]);
var inst_21473 = inst_21476;
var state_21496__$1 = (function (){var statearr_21506 = state_21496;
(statearr_21506[(7)] = inst_21473);

(statearr_21506[(10)] = inst_21485);

return statearr_21506;
})();
var statearr_21507_21527 = state_21496__$1;
(statearr_21507_21527[(2)] = null);

(statearr_21507_21527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (9))){
var inst_21476 = (state_21496[(8)]);
var state_21496__$1 = state_21496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21496__$1,(11),out,inst_21476);
} else {
if((state_val_21497 === (5))){
var inst_21476 = (state_21496[(8)]);
var inst_21473 = (state_21496[(7)]);
var inst_21480 = cljs.core._EQ_.call(null,inst_21476,inst_21473);
var state_21496__$1 = state_21496;
if(inst_21480){
var statearr_21509_21528 = state_21496__$1;
(statearr_21509_21528[(1)] = (8));

} else {
var statearr_21510_21529 = state_21496__$1;
(statearr_21510_21529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (10))){
var inst_21488 = (state_21496[(2)]);
var state_21496__$1 = state_21496;
var statearr_21511_21530 = state_21496__$1;
(statearr_21511_21530[(2)] = inst_21488);

(statearr_21511_21530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (8))){
var inst_21473 = (state_21496[(7)]);
var tmp21508 = inst_21473;
var inst_21473__$1 = tmp21508;
var state_21496__$1 = (function (){var statearr_21512 = state_21496;
(statearr_21512[(7)] = inst_21473__$1);

return statearr_21512;
})();
var statearr_21513_21531 = state_21496__$1;
(statearr_21513_21531[(2)] = null);

(statearr_21513_21531[(1)] = (2));


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
});})(c__7173__auto___21521,out))
;
return ((function (switch__7117__auto__,c__7173__auto___21521,out){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_21517 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21517[(0)] = state_machine__7118__auto__);

(statearr_21517[(1)] = (1));

return statearr_21517;
});
var state_machine__7118__auto____1 = (function (state_21496){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_21496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e21518){if((e21518 instanceof Object)){
var ex__7121__auto__ = e21518;
var statearr_21519_21532 = state_21496;
(statearr_21519_21532[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21533 = state_21496;
state_21496 = G__21533;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_21496){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_21496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(switch__7117__auto__,c__7173__auto___21521,out))
})();
var state__7175__auto__ = (function (){var statearr_21520 = f__7174__auto__.call(null);
(statearr_21520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto___21521);

return statearr_21520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(c__7173__auto___21521,out))
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
var c__7173__auto___21668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7173__auto___21668,out){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (c__7173__auto___21668,out){
return (function (state_21638){
var state_val_21639 = (state_21638[(1)]);
if((state_val_21639 === (7))){
var inst_21634 = (state_21638[(2)]);
var state_21638__$1 = state_21638;
var statearr_21640_21669 = state_21638__$1;
(statearr_21640_21669[(2)] = inst_21634);

(statearr_21640_21669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21639 === (1))){
var inst_21601 = (new Array(n));
var inst_21602 = inst_21601;
var inst_21603 = (0);
var state_21638__$1 = (function (){var statearr_21641 = state_21638;
(statearr_21641[(7)] = inst_21602);

(statearr_21641[(8)] = inst_21603);

return statearr_21641;
})();
var statearr_21642_21670 = state_21638__$1;
(statearr_21642_21670[(2)] = null);

(statearr_21642_21670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21639 === (4))){
var inst_21606 = (state_21638[(9)]);
var inst_21606__$1 = (state_21638[(2)]);
var inst_21607 = (inst_21606__$1 == null);
var inst_21608 = cljs.core.not.call(null,inst_21607);
var state_21638__$1 = (function (){var statearr_21643 = state_21638;
(statearr_21643[(9)] = inst_21606__$1);

return statearr_21643;
})();
if(inst_21608){
var statearr_21644_21671 = state_21638__$1;
(statearr_21644_21671[(1)] = (5));

} else {
var statearr_21645_21672 = state_21638__$1;
(statearr_21645_21672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21639 === (15))){
var inst_21628 = (state_21638[(2)]);
var state_21638__$1 = state_21638;
var statearr_21646_21673 = state_21638__$1;
(statearr_21646_21673[(2)] = inst_21628);

(statearr_21646_21673[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21639 === (13))){
var state_21638__$1 = state_21638;
var statearr_21647_21674 = state_21638__$1;
(statearr_21647_21674[(2)] = null);

(statearr_21647_21674[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21639 === (6))){
var inst_21603 = (state_21638[(8)]);
var inst_21624 = (inst_21603 > (0));
var state_21638__$1 = state_21638;
if(cljs.core.truth_(inst_21624)){
var statearr_21648_21675 = state_21638__$1;
(statearr_21648_21675[(1)] = (12));

} else {
var statearr_21649_21676 = state_21638__$1;
(statearr_21649_21676[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21639 === (3))){
var inst_21636 = (state_21638[(2)]);
var state_21638__$1 = state_21638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21638__$1,inst_21636);
} else {
if((state_val_21639 === (12))){
var inst_21602 = (state_21638[(7)]);
var inst_21626 = cljs.core.vec.call(null,inst_21602);
var state_21638__$1 = state_21638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21638__$1,(15),out,inst_21626);
} else {
if((state_val_21639 === (2))){
var state_21638__$1 = state_21638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21638__$1,(4),ch);
} else {
if((state_val_21639 === (11))){
var inst_21618 = (state_21638[(2)]);
var inst_21619 = (new Array(n));
var inst_21602 = inst_21619;
var inst_21603 = (0);
var state_21638__$1 = (function (){var statearr_21650 = state_21638;
(statearr_21650[(7)] = inst_21602);

(statearr_21650[(8)] = inst_21603);

(statearr_21650[(10)] = inst_21618);

return statearr_21650;
})();
var statearr_21651_21677 = state_21638__$1;
(statearr_21651_21677[(2)] = null);

(statearr_21651_21677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21639 === (9))){
var inst_21602 = (state_21638[(7)]);
var inst_21616 = cljs.core.vec.call(null,inst_21602);
var state_21638__$1 = state_21638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21638__$1,(11),out,inst_21616);
} else {
if((state_val_21639 === (5))){
var inst_21602 = (state_21638[(7)]);
var inst_21603 = (state_21638[(8)]);
var inst_21606 = (state_21638[(9)]);
var inst_21611 = (state_21638[(11)]);
var inst_21610 = (inst_21602[inst_21603] = inst_21606);
var inst_21611__$1 = (inst_21603 + (1));
var inst_21612 = (inst_21611__$1 < n);
var state_21638__$1 = (function (){var statearr_21652 = state_21638;
(statearr_21652[(11)] = inst_21611__$1);

(statearr_21652[(12)] = inst_21610);

return statearr_21652;
})();
if(cljs.core.truth_(inst_21612)){
var statearr_21653_21678 = state_21638__$1;
(statearr_21653_21678[(1)] = (8));

} else {
var statearr_21654_21679 = state_21638__$1;
(statearr_21654_21679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21639 === (14))){
var inst_21631 = (state_21638[(2)]);
var inst_21632 = cljs.core.async.close_BANG_.call(null,out);
var state_21638__$1 = (function (){var statearr_21656 = state_21638;
(statearr_21656[(13)] = inst_21631);

return statearr_21656;
})();
var statearr_21657_21680 = state_21638__$1;
(statearr_21657_21680[(2)] = inst_21632);

(statearr_21657_21680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21639 === (10))){
var inst_21622 = (state_21638[(2)]);
var state_21638__$1 = state_21638;
var statearr_21658_21681 = state_21638__$1;
(statearr_21658_21681[(2)] = inst_21622);

(statearr_21658_21681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21639 === (8))){
var inst_21602 = (state_21638[(7)]);
var inst_21611 = (state_21638[(11)]);
var tmp21655 = inst_21602;
var inst_21602__$1 = tmp21655;
var inst_21603 = inst_21611;
var state_21638__$1 = (function (){var statearr_21659 = state_21638;
(statearr_21659[(7)] = inst_21602__$1);

(statearr_21659[(8)] = inst_21603);

return statearr_21659;
})();
var statearr_21660_21682 = state_21638__$1;
(statearr_21660_21682[(2)] = null);

(statearr_21660_21682[(1)] = (2));


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
});})(c__7173__auto___21668,out))
;
return ((function (switch__7117__auto__,c__7173__auto___21668,out){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_21664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21664[(0)] = state_machine__7118__auto__);

(statearr_21664[(1)] = (1));

return statearr_21664;
});
var state_machine__7118__auto____1 = (function (state_21638){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_21638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e21665){if((e21665 instanceof Object)){
var ex__7121__auto__ = e21665;
var statearr_21666_21683 = state_21638;
(statearr_21666_21683[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21684 = state_21638;
state_21638 = G__21684;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_21638){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_21638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(switch__7117__auto__,c__7173__auto___21668,out))
})();
var state__7175__auto__ = (function (){var statearr_21667 = f__7174__auto__.call(null);
(statearr_21667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto___21668);

return statearr_21667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(c__7173__auto___21668,out))
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
var c__7173__auto___21827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7173__auto___21827,out){
return (function (){
var f__7174__auto__ = (function (){var switch__7117__auto__ = ((function (c__7173__auto___21827,out){
return (function (state_21797){
var state_val_21798 = (state_21797[(1)]);
if((state_val_21798 === (7))){
var inst_21793 = (state_21797[(2)]);
var state_21797__$1 = state_21797;
var statearr_21799_21828 = state_21797__$1;
(statearr_21799_21828[(2)] = inst_21793);

(statearr_21799_21828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21798 === (1))){
var inst_21756 = [];
var inst_21757 = inst_21756;
var inst_21758 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21797__$1 = (function (){var statearr_21800 = state_21797;
(statearr_21800[(7)] = inst_21757);

(statearr_21800[(8)] = inst_21758);

return statearr_21800;
})();
var statearr_21801_21829 = state_21797__$1;
(statearr_21801_21829[(2)] = null);

(statearr_21801_21829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21798 === (4))){
var inst_21761 = (state_21797[(9)]);
var inst_21761__$1 = (state_21797[(2)]);
var inst_21762 = (inst_21761__$1 == null);
var inst_21763 = cljs.core.not.call(null,inst_21762);
var state_21797__$1 = (function (){var statearr_21802 = state_21797;
(statearr_21802[(9)] = inst_21761__$1);

return statearr_21802;
})();
if(inst_21763){
var statearr_21803_21830 = state_21797__$1;
(statearr_21803_21830[(1)] = (5));

} else {
var statearr_21804_21831 = state_21797__$1;
(statearr_21804_21831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21798 === (15))){
var inst_21787 = (state_21797[(2)]);
var state_21797__$1 = state_21797;
var statearr_21805_21832 = state_21797__$1;
(statearr_21805_21832[(2)] = inst_21787);

(statearr_21805_21832[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21798 === (13))){
var state_21797__$1 = state_21797;
var statearr_21806_21833 = state_21797__$1;
(statearr_21806_21833[(2)] = null);

(statearr_21806_21833[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21798 === (6))){
var inst_21757 = (state_21797[(7)]);
var inst_21782 = inst_21757.length;
var inst_21783 = (inst_21782 > (0));
var state_21797__$1 = state_21797;
if(cljs.core.truth_(inst_21783)){
var statearr_21807_21834 = state_21797__$1;
(statearr_21807_21834[(1)] = (12));

} else {
var statearr_21808_21835 = state_21797__$1;
(statearr_21808_21835[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21798 === (3))){
var inst_21795 = (state_21797[(2)]);
var state_21797__$1 = state_21797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21797__$1,inst_21795);
} else {
if((state_val_21798 === (12))){
var inst_21757 = (state_21797[(7)]);
var inst_21785 = cljs.core.vec.call(null,inst_21757);
var state_21797__$1 = state_21797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21797__$1,(15),out,inst_21785);
} else {
if((state_val_21798 === (2))){
var state_21797__$1 = state_21797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21797__$1,(4),ch);
} else {
if((state_val_21798 === (11))){
var inst_21761 = (state_21797[(9)]);
var inst_21765 = (state_21797[(10)]);
var inst_21775 = (state_21797[(2)]);
var inst_21776 = [];
var inst_21777 = inst_21776.push(inst_21761);
var inst_21757 = inst_21776;
var inst_21758 = inst_21765;
var state_21797__$1 = (function (){var statearr_21809 = state_21797;
(statearr_21809[(7)] = inst_21757);

(statearr_21809[(11)] = inst_21777);

(statearr_21809[(12)] = inst_21775);

(statearr_21809[(8)] = inst_21758);

return statearr_21809;
})();
var statearr_21810_21836 = state_21797__$1;
(statearr_21810_21836[(2)] = null);

(statearr_21810_21836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21798 === (9))){
var inst_21757 = (state_21797[(7)]);
var inst_21773 = cljs.core.vec.call(null,inst_21757);
var state_21797__$1 = state_21797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21797__$1,(11),out,inst_21773);
} else {
if((state_val_21798 === (5))){
var inst_21761 = (state_21797[(9)]);
var inst_21758 = (state_21797[(8)]);
var inst_21765 = (state_21797[(10)]);
var inst_21765__$1 = f.call(null,inst_21761);
var inst_21766 = cljs.core._EQ_.call(null,inst_21765__$1,inst_21758);
var inst_21767 = cljs.core.keyword_identical_QMARK_.call(null,inst_21758,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21768 = (inst_21766) || (inst_21767);
var state_21797__$1 = (function (){var statearr_21811 = state_21797;
(statearr_21811[(10)] = inst_21765__$1);

return statearr_21811;
})();
if(cljs.core.truth_(inst_21768)){
var statearr_21812_21837 = state_21797__$1;
(statearr_21812_21837[(1)] = (8));

} else {
var statearr_21813_21838 = state_21797__$1;
(statearr_21813_21838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21798 === (14))){
var inst_21790 = (state_21797[(2)]);
var inst_21791 = cljs.core.async.close_BANG_.call(null,out);
var state_21797__$1 = (function (){var statearr_21815 = state_21797;
(statearr_21815[(13)] = inst_21790);

return statearr_21815;
})();
var statearr_21816_21839 = state_21797__$1;
(statearr_21816_21839[(2)] = inst_21791);

(statearr_21816_21839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21798 === (10))){
var inst_21780 = (state_21797[(2)]);
var state_21797__$1 = state_21797;
var statearr_21817_21840 = state_21797__$1;
(statearr_21817_21840[(2)] = inst_21780);

(statearr_21817_21840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21798 === (8))){
var inst_21757 = (state_21797[(7)]);
var inst_21761 = (state_21797[(9)]);
var inst_21765 = (state_21797[(10)]);
var inst_21770 = inst_21757.push(inst_21761);
var tmp21814 = inst_21757;
var inst_21757__$1 = tmp21814;
var inst_21758 = inst_21765;
var state_21797__$1 = (function (){var statearr_21818 = state_21797;
(statearr_21818[(7)] = inst_21757__$1);

(statearr_21818[(8)] = inst_21758);

(statearr_21818[(14)] = inst_21770);

return statearr_21818;
})();
var statearr_21819_21841 = state_21797__$1;
(statearr_21819_21841[(2)] = null);

(statearr_21819_21841[(1)] = (2));


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
});})(c__7173__auto___21827,out))
;
return ((function (switch__7117__auto__,c__7173__auto___21827,out){
return (function() {
var state_machine__7118__auto__ = null;
var state_machine__7118__auto____0 = (function (){
var statearr_21823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21823[(0)] = state_machine__7118__auto__);

(statearr_21823[(1)] = (1));

return statearr_21823;
});
var state_machine__7118__auto____1 = (function (state_21797){
while(true){
var ret_value__7119__auto__ = (function (){try{while(true){
var result__7120__auto__ = switch__7117__auto__.call(null,state_21797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7120__auto__;
}
break;
}
}catch (e21824){if((e21824 instanceof Object)){
var ex__7121__auto__ = e21824;
var statearr_21825_21842 = state_21797;
(statearr_21825_21842[(5)] = ex__7121__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21843 = state_21797;
state_21797 = G__21843;
continue;
} else {
return ret_value__7119__auto__;
}
break;
}
});
state_machine__7118__auto__ = function(state_21797){
switch(arguments.length){
case 0:
return state_machine__7118__auto____0.call(this);
case 1:
return state_machine__7118__auto____1.call(this,state_21797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7118__auto____0;
state_machine__7118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7118__auto____1;
return state_machine__7118__auto__;
})()
;})(switch__7117__auto__,c__7173__auto___21827,out))
})();
var state__7175__auto__ = (function (){var statearr_21826 = f__7174__auto__.call(null);
(statearr_21826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7173__auto___21827);

return statearr_21826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7175__auto__);
});})(c__7173__auto___21827,out))
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