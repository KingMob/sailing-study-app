// Compiled by ClojureScript 0.0-2843 {:elide-asserts false}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t26912 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26912 = (function (f,fn_handler,meta26913){
this.f = f;
this.fn_handler = fn_handler;
this.meta26913 = meta26913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26912.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26912.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26912.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26914){
var self__ = this;
var _26914__$1 = this;
return self__.meta26913;
});

cljs.core.async.t26912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26914,meta26913__$1){
var self__ = this;
var _26914__$1 = this;
return (new cljs.core.async.t26912(self__.f,self__.fn_handler,meta26913__$1));
});

cljs.core.async.t26912.cljs$lang$type = true;

cljs.core.async.t26912.cljs$lang$ctorStr = "cljs.core.async/t26912";

cljs.core.async.t26912.cljs$lang$ctorPrWriter = (function (this__13910__auto__,writer__13911__auto__,opt__13912__auto__){
return cljs.core._write.call(null,writer__13911__auto__,"cljs.core.async/t26912");
});

cljs.core.async.__GT_t26912 = (function __GT_t26912(f__$1,fn_handler__$1,meta26913){
return (new cljs.core.async.t26912(f__$1,fn_handler__$1,meta26913));
});

}

return (new cljs.core.async.t26912(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26916 = buff;
if(G__26916){
var bit__14004__auto__ = null;
if(cljs.core.truth_((function (){var or__13323__auto__ = bit__14004__auto__;
if(cljs.core.truth_(or__13323__auto__)){
return or__13323__auto__;
} else {
return G__26916.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26916.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26916);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26916);
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
var val_26917 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26917);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26917,ret){
return (function (){
return fn1.call(null,val_26917);
});})(val_26917,ret))
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
var n__14210__auto___26918 = n;
var x_26919 = (0);
while(true){
if((x_26919 < n__14210__auto___26918)){
(a[x_26919] = (0));

var G__26920 = (x_26919 + (1));
x_26919 = G__26920;
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

var G__26921 = (i + (1));
i = G__26921;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26925 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26925 = (function (flag,alt_flag,meta26926){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26926 = meta26926;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26925.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26925.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26925.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26925.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26927){
var self__ = this;
var _26927__$1 = this;
return self__.meta26926;
});})(flag))
;

cljs.core.async.t26925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26927,meta26926__$1){
var self__ = this;
var _26927__$1 = this;
return (new cljs.core.async.t26925(self__.flag,self__.alt_flag,meta26926__$1));
});})(flag))
;

cljs.core.async.t26925.cljs$lang$type = true;

cljs.core.async.t26925.cljs$lang$ctorStr = "cljs.core.async/t26925";

cljs.core.async.t26925.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13910__auto__,writer__13911__auto__,opt__13912__auto__){
return cljs.core._write.call(null,writer__13911__auto__,"cljs.core.async/t26925");
});})(flag))
;

cljs.core.async.__GT_t26925 = ((function (flag){
return (function __GT_t26925(flag__$1,alt_flag__$1,meta26926){
return (new cljs.core.async.t26925(flag__$1,alt_flag__$1,meta26926));
});})(flag))
;

}

return (new cljs.core.async.t26925(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t26931 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26931 = (function (cb,flag,alt_handler,meta26932){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26932 = meta26932;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26931.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26931.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26931.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26933){
var self__ = this;
var _26933__$1 = this;
return self__.meta26932;
});

cljs.core.async.t26931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26933,meta26932__$1){
var self__ = this;
var _26933__$1 = this;
return (new cljs.core.async.t26931(self__.cb,self__.flag,self__.alt_handler,meta26932__$1));
});

cljs.core.async.t26931.cljs$lang$type = true;

cljs.core.async.t26931.cljs$lang$ctorStr = "cljs.core.async/t26931";

cljs.core.async.t26931.cljs$lang$ctorPrWriter = (function (this__13910__auto__,writer__13911__auto__,opt__13912__auto__){
return cljs.core._write.call(null,writer__13911__auto__,"cljs.core.async/t26931");
});

cljs.core.async.__GT_t26931 = (function __GT_t26931(cb__$1,flag__$1,alt_handler__$1,meta26932){
return (new cljs.core.async.t26931(cb__$1,flag__$1,alt_handler__$1,meta26932));
});

}

return (new cljs.core.async.t26931(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26934_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26934_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26935_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26935_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__13323__auto__ = wport;
if(cljs.core.truth_(or__13323__auto__)){
return or__13323__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26936 = (i + (1));
i = G__26936;
continue;
}
} else {
return null;
}
break;
}
})();
var or__13323__auto__ = ret;
if(cljs.core.truth_(or__13323__auto__)){
return or__13323__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__13311__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__13311__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__13311__auto__;
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
var alts_BANG___delegate = function (ports,p__26937){
var map__26939 = p__26937;
var map__26939__$1 = ((cljs.core.seq_QMARK_.call(null,map__26939))?cljs.core.apply.call(null,cljs.core.hash_map,map__26939):map__26939);
var opts = map__26939__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__26937 = null;
if (arguments.length > 1) {
var G__26940__i = 0, G__26940__a = new Array(arguments.length -  1);
while (G__26940__i < G__26940__a.length) {G__26940__a[G__26940__i] = arguments[G__26940__i + 1]; ++G__26940__i;}
  p__26937 = new cljs.core.IndexedSeq(G__26940__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__26937);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__26941){
var ports = cljs.core.first(arglist__26941);
var p__26937 = cljs.core.rest(arglist__26941);
return alts_BANG___delegate(ports,p__26937);
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
var c__15967__auto___27036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto___27036){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto___27036){
return (function (state_27012){
var state_val_27013 = (state_27012[(1)]);
if((state_val_27013 === (7))){
var inst_27008 = (state_27012[(2)]);
var state_27012__$1 = state_27012;
var statearr_27014_27037 = state_27012__$1;
(statearr_27014_27037[(2)] = inst_27008);

(statearr_27014_27037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (1))){
var state_27012__$1 = state_27012;
var statearr_27015_27038 = state_27012__$1;
(statearr_27015_27038[(2)] = null);

(statearr_27015_27038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (4))){
var inst_26991 = (state_27012[(7)]);
var inst_26991__$1 = (state_27012[(2)]);
var inst_26992 = (inst_26991__$1 == null);
var state_27012__$1 = (function (){var statearr_27016 = state_27012;
(statearr_27016[(7)] = inst_26991__$1);

return statearr_27016;
})();
if(cljs.core.truth_(inst_26992)){
var statearr_27017_27039 = state_27012__$1;
(statearr_27017_27039[(1)] = (5));

} else {
var statearr_27018_27040 = state_27012__$1;
(statearr_27018_27040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (13))){
var state_27012__$1 = state_27012;
var statearr_27019_27041 = state_27012__$1;
(statearr_27019_27041[(2)] = null);

(statearr_27019_27041[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (6))){
var inst_26991 = (state_27012[(7)]);
var state_27012__$1 = state_27012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27012__$1,(11),to,inst_26991);
} else {
if((state_val_27013 === (3))){
var inst_27010 = (state_27012[(2)]);
var state_27012__$1 = state_27012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27012__$1,inst_27010);
} else {
if((state_val_27013 === (12))){
var state_27012__$1 = state_27012;
var statearr_27020_27042 = state_27012__$1;
(statearr_27020_27042[(2)] = null);

(statearr_27020_27042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (2))){
var state_27012__$1 = state_27012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27012__$1,(4),from);
} else {
if((state_val_27013 === (11))){
var inst_27001 = (state_27012[(2)]);
var state_27012__$1 = state_27012;
if(cljs.core.truth_(inst_27001)){
var statearr_27021_27043 = state_27012__$1;
(statearr_27021_27043[(1)] = (12));

} else {
var statearr_27022_27044 = state_27012__$1;
(statearr_27022_27044[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (9))){
var state_27012__$1 = state_27012;
var statearr_27023_27045 = state_27012__$1;
(statearr_27023_27045[(2)] = null);

(statearr_27023_27045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (5))){
var state_27012__$1 = state_27012;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27024_27046 = state_27012__$1;
(statearr_27024_27046[(1)] = (8));

} else {
var statearr_27025_27047 = state_27012__$1;
(statearr_27025_27047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (14))){
var inst_27006 = (state_27012[(2)]);
var state_27012__$1 = state_27012;
var statearr_27026_27048 = state_27012__$1;
(statearr_27026_27048[(2)] = inst_27006);

(statearr_27026_27048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (10))){
var inst_26998 = (state_27012[(2)]);
var state_27012__$1 = state_27012;
var statearr_27027_27049 = state_27012__$1;
(statearr_27027_27049[(2)] = inst_26998);

(statearr_27027_27049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27013 === (8))){
var inst_26995 = cljs.core.async.close_BANG_.call(null,to);
var state_27012__$1 = state_27012;
var statearr_27028_27050 = state_27012__$1;
(statearr_27028_27050[(2)] = inst_26995);

(statearr_27028_27050[(1)] = (10));


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
});})(c__15967__auto___27036))
;
return ((function (switch__15911__auto__,c__15967__auto___27036){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_27032 = [null,null,null,null,null,null,null,null];
(statearr_27032[(0)] = state_machine__15912__auto__);

(statearr_27032[(1)] = (1));

return statearr_27032;
});
var state_machine__15912__auto____1 = (function (state_27012){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_27012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e27033){if((e27033 instanceof Object)){
var ex__15915__auto__ = e27033;
var statearr_27034_27051 = state_27012;
(statearr_27034_27051[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27052 = state_27012;
state_27012 = G__27052;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_27012){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_27012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto___27036))
})();
var state__15969__auto__ = (function (){var statearr_27035 = f__15968__auto__.call(null);
(statearr_27035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___27036);

return statearr_27035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto___27036))
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
return (function (p__27236){
var vec__27237 = p__27236;
var v = cljs.core.nth.call(null,vec__27237,(0),null);
var p = cljs.core.nth.call(null,vec__27237,(1),null);
var job = vec__27237;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15967__auto___27419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto___27419,res,vec__27237,v,p,job,jobs,results){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto___27419,res,vec__27237,v,p,job,jobs,results){
return (function (state_27242){
var state_val_27243 = (state_27242[(1)]);
if((state_val_27243 === (2))){
var inst_27239 = (state_27242[(2)]);
var inst_27240 = cljs.core.async.close_BANG_.call(null,res);
var state_27242__$1 = (function (){var statearr_27244 = state_27242;
(statearr_27244[(7)] = inst_27239);

return statearr_27244;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27242__$1,inst_27240);
} else {
if((state_val_27243 === (1))){
var state_27242__$1 = state_27242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27242__$1,(2),res,v);
} else {
return null;
}
}
});})(c__15967__auto___27419,res,vec__27237,v,p,job,jobs,results))
;
return ((function (switch__15911__auto__,c__15967__auto___27419,res,vec__27237,v,p,job,jobs,results){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_27248 = [null,null,null,null,null,null,null,null];
(statearr_27248[(0)] = state_machine__15912__auto__);

(statearr_27248[(1)] = (1));

return statearr_27248;
});
var state_machine__15912__auto____1 = (function (state_27242){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_27242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e27249){if((e27249 instanceof Object)){
var ex__15915__auto__ = e27249;
var statearr_27250_27420 = state_27242;
(statearr_27250_27420[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27421 = state_27242;
state_27242 = G__27421;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_27242){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_27242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto___27419,res,vec__27237,v,p,job,jobs,results))
})();
var state__15969__auto__ = (function (){var statearr_27251 = f__15968__auto__.call(null);
(statearr_27251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___27419);

return statearr_27251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto___27419,res,vec__27237,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27252){
var vec__27253 = p__27252;
var v = cljs.core.nth.call(null,vec__27253,(0),null);
var p = cljs.core.nth.call(null,vec__27253,(1),null);
var job = vec__27253;
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
var n__14210__auto___27422 = n;
var __27423 = (0);
while(true){
if((__27423 < n__14210__auto___27422)){
var G__27254_27424 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27254_27424) {
case "async":
var c__15967__auto___27426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27423,c__15967__auto___27426,G__27254_27424,n__14210__auto___27422,jobs,results,process,async){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (__27423,c__15967__auto___27426,G__27254_27424,n__14210__auto___27422,jobs,results,process,async){
return (function (state_27267){
var state_val_27268 = (state_27267[(1)]);
if((state_val_27268 === (7))){
var inst_27263 = (state_27267[(2)]);
var state_27267__$1 = state_27267;
var statearr_27269_27427 = state_27267__$1;
(statearr_27269_27427[(2)] = inst_27263);

(statearr_27269_27427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (6))){
var state_27267__$1 = state_27267;
var statearr_27270_27428 = state_27267__$1;
(statearr_27270_27428[(2)] = null);

(statearr_27270_27428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (5))){
var state_27267__$1 = state_27267;
var statearr_27271_27429 = state_27267__$1;
(statearr_27271_27429[(2)] = null);

(statearr_27271_27429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (4))){
var inst_27257 = (state_27267[(2)]);
var inst_27258 = async.call(null,inst_27257);
var state_27267__$1 = state_27267;
if(cljs.core.truth_(inst_27258)){
var statearr_27272_27430 = state_27267__$1;
(statearr_27272_27430[(1)] = (5));

} else {
var statearr_27273_27431 = state_27267__$1;
(statearr_27273_27431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (3))){
var inst_27265 = (state_27267[(2)]);
var state_27267__$1 = state_27267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27267__$1,inst_27265);
} else {
if((state_val_27268 === (2))){
var state_27267__$1 = state_27267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27267__$1,(4),jobs);
} else {
if((state_val_27268 === (1))){
var state_27267__$1 = state_27267;
var statearr_27274_27432 = state_27267__$1;
(statearr_27274_27432[(2)] = null);

(statearr_27274_27432[(1)] = (2));


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
});})(__27423,c__15967__auto___27426,G__27254_27424,n__14210__auto___27422,jobs,results,process,async))
;
return ((function (__27423,switch__15911__auto__,c__15967__auto___27426,G__27254_27424,n__14210__auto___27422,jobs,results,process,async){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_27278 = [null,null,null,null,null,null,null];
(statearr_27278[(0)] = state_machine__15912__auto__);

(statearr_27278[(1)] = (1));

return statearr_27278;
});
var state_machine__15912__auto____1 = (function (state_27267){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_27267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e27279){if((e27279 instanceof Object)){
var ex__15915__auto__ = e27279;
var statearr_27280_27433 = state_27267;
(statearr_27280_27433[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27434 = state_27267;
state_27267 = G__27434;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_27267){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_27267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(__27423,switch__15911__auto__,c__15967__auto___27426,G__27254_27424,n__14210__auto___27422,jobs,results,process,async))
})();
var state__15969__auto__ = (function (){var statearr_27281 = f__15968__auto__.call(null);
(statearr_27281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___27426);

return statearr_27281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(__27423,c__15967__auto___27426,G__27254_27424,n__14210__auto___27422,jobs,results,process,async))
);


break;
case "compute":
var c__15967__auto___27435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27423,c__15967__auto___27435,G__27254_27424,n__14210__auto___27422,jobs,results,process,async){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (__27423,c__15967__auto___27435,G__27254_27424,n__14210__auto___27422,jobs,results,process,async){
return (function (state_27294){
var state_val_27295 = (state_27294[(1)]);
if((state_val_27295 === (7))){
var inst_27290 = (state_27294[(2)]);
var state_27294__$1 = state_27294;
var statearr_27296_27436 = state_27294__$1;
(statearr_27296_27436[(2)] = inst_27290);

(statearr_27296_27436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (6))){
var state_27294__$1 = state_27294;
var statearr_27297_27437 = state_27294__$1;
(statearr_27297_27437[(2)] = null);

(statearr_27297_27437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (5))){
var state_27294__$1 = state_27294;
var statearr_27298_27438 = state_27294__$1;
(statearr_27298_27438[(2)] = null);

(statearr_27298_27438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (4))){
var inst_27284 = (state_27294[(2)]);
var inst_27285 = process.call(null,inst_27284);
var state_27294__$1 = state_27294;
if(cljs.core.truth_(inst_27285)){
var statearr_27299_27439 = state_27294__$1;
(statearr_27299_27439[(1)] = (5));

} else {
var statearr_27300_27440 = state_27294__$1;
(statearr_27300_27440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (3))){
var inst_27292 = (state_27294[(2)]);
var state_27294__$1 = state_27294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27294__$1,inst_27292);
} else {
if((state_val_27295 === (2))){
var state_27294__$1 = state_27294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27294__$1,(4),jobs);
} else {
if((state_val_27295 === (1))){
var state_27294__$1 = state_27294;
var statearr_27301_27441 = state_27294__$1;
(statearr_27301_27441[(2)] = null);

(statearr_27301_27441[(1)] = (2));


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
});})(__27423,c__15967__auto___27435,G__27254_27424,n__14210__auto___27422,jobs,results,process,async))
;
return ((function (__27423,switch__15911__auto__,c__15967__auto___27435,G__27254_27424,n__14210__auto___27422,jobs,results,process,async){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_27305 = [null,null,null,null,null,null,null];
(statearr_27305[(0)] = state_machine__15912__auto__);

(statearr_27305[(1)] = (1));

return statearr_27305;
});
var state_machine__15912__auto____1 = (function (state_27294){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_27294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e27306){if((e27306 instanceof Object)){
var ex__15915__auto__ = e27306;
var statearr_27307_27442 = state_27294;
(statearr_27307_27442[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27443 = state_27294;
state_27294 = G__27443;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_27294){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_27294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(__27423,switch__15911__auto__,c__15967__auto___27435,G__27254_27424,n__14210__auto___27422,jobs,results,process,async))
})();
var state__15969__auto__ = (function (){var statearr_27308 = f__15968__auto__.call(null);
(statearr_27308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___27435);

return statearr_27308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(__27423,c__15967__auto___27435,G__27254_27424,n__14210__auto___27422,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27444 = (__27423 + (1));
__27423 = G__27444;
continue;
} else {
}
break;
}

var c__15967__auto___27445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto___27445,jobs,results,process,async){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto___27445,jobs,results,process,async){
return (function (state_27330){
var state_val_27331 = (state_27330[(1)]);
if((state_val_27331 === (9))){
var inst_27323 = (state_27330[(2)]);
var state_27330__$1 = (function (){var statearr_27332 = state_27330;
(statearr_27332[(7)] = inst_27323);

return statearr_27332;
})();
var statearr_27333_27446 = state_27330__$1;
(statearr_27333_27446[(2)] = null);

(statearr_27333_27446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (8))){
var inst_27316 = (state_27330[(8)]);
var inst_27321 = (state_27330[(2)]);
var state_27330__$1 = (function (){var statearr_27334 = state_27330;
(statearr_27334[(9)] = inst_27321);

return statearr_27334;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27330__$1,(9),results,inst_27316);
} else {
if((state_val_27331 === (7))){
var inst_27326 = (state_27330[(2)]);
var state_27330__$1 = state_27330;
var statearr_27335_27447 = state_27330__$1;
(statearr_27335_27447[(2)] = inst_27326);

(statearr_27335_27447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (6))){
var inst_27311 = (state_27330[(10)]);
var inst_27316 = (state_27330[(8)]);
var inst_27316__$1 = cljs.core.async.chan.call(null,(1));
var inst_27317 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27318 = [inst_27311,inst_27316__$1];
var inst_27319 = (new cljs.core.PersistentVector(null,2,(5),inst_27317,inst_27318,null));
var state_27330__$1 = (function (){var statearr_27336 = state_27330;
(statearr_27336[(8)] = inst_27316__$1);

return statearr_27336;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27330__$1,(8),jobs,inst_27319);
} else {
if((state_val_27331 === (5))){
var inst_27314 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27330__$1 = state_27330;
var statearr_27337_27448 = state_27330__$1;
(statearr_27337_27448[(2)] = inst_27314);

(statearr_27337_27448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (4))){
var inst_27311 = (state_27330[(10)]);
var inst_27311__$1 = (state_27330[(2)]);
var inst_27312 = (inst_27311__$1 == null);
var state_27330__$1 = (function (){var statearr_27338 = state_27330;
(statearr_27338[(10)] = inst_27311__$1);

return statearr_27338;
})();
if(cljs.core.truth_(inst_27312)){
var statearr_27339_27449 = state_27330__$1;
(statearr_27339_27449[(1)] = (5));

} else {
var statearr_27340_27450 = state_27330__$1;
(statearr_27340_27450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27331 === (3))){
var inst_27328 = (state_27330[(2)]);
var state_27330__$1 = state_27330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27330__$1,inst_27328);
} else {
if((state_val_27331 === (2))){
var state_27330__$1 = state_27330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27330__$1,(4),from);
} else {
if((state_val_27331 === (1))){
var state_27330__$1 = state_27330;
var statearr_27341_27451 = state_27330__$1;
(statearr_27341_27451[(2)] = null);

(statearr_27341_27451[(1)] = (2));


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
});})(c__15967__auto___27445,jobs,results,process,async))
;
return ((function (switch__15911__auto__,c__15967__auto___27445,jobs,results,process,async){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_27345 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27345[(0)] = state_machine__15912__auto__);

(statearr_27345[(1)] = (1));

return statearr_27345;
});
var state_machine__15912__auto____1 = (function (state_27330){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_27330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e27346){if((e27346 instanceof Object)){
var ex__15915__auto__ = e27346;
var statearr_27347_27452 = state_27330;
(statearr_27347_27452[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27453 = state_27330;
state_27330 = G__27453;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_27330){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_27330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto___27445,jobs,results,process,async))
})();
var state__15969__auto__ = (function (){var statearr_27348 = f__15968__auto__.call(null);
(statearr_27348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___27445);

return statearr_27348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto___27445,jobs,results,process,async))
);


var c__15967__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto__,jobs,results,process,async){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto__,jobs,results,process,async){
return (function (state_27386){
var state_val_27387 = (state_27386[(1)]);
if((state_val_27387 === (7))){
var inst_27382 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
var statearr_27388_27454 = state_27386__$1;
(statearr_27388_27454[(2)] = inst_27382);

(statearr_27388_27454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (20))){
var state_27386__$1 = state_27386;
var statearr_27389_27455 = state_27386__$1;
(statearr_27389_27455[(2)] = null);

(statearr_27389_27455[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (1))){
var state_27386__$1 = state_27386;
var statearr_27390_27456 = state_27386__$1;
(statearr_27390_27456[(2)] = null);

(statearr_27390_27456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (4))){
var inst_27351 = (state_27386[(7)]);
var inst_27351__$1 = (state_27386[(2)]);
var inst_27352 = (inst_27351__$1 == null);
var state_27386__$1 = (function (){var statearr_27391 = state_27386;
(statearr_27391[(7)] = inst_27351__$1);

return statearr_27391;
})();
if(cljs.core.truth_(inst_27352)){
var statearr_27392_27457 = state_27386__$1;
(statearr_27392_27457[(1)] = (5));

} else {
var statearr_27393_27458 = state_27386__$1;
(statearr_27393_27458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (15))){
var inst_27364 = (state_27386[(8)]);
var state_27386__$1 = state_27386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27386__$1,(18),to,inst_27364);
} else {
if((state_val_27387 === (21))){
var inst_27377 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
var statearr_27394_27459 = state_27386__$1;
(statearr_27394_27459[(2)] = inst_27377);

(statearr_27394_27459[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (13))){
var inst_27379 = (state_27386[(2)]);
var state_27386__$1 = (function (){var statearr_27395 = state_27386;
(statearr_27395[(9)] = inst_27379);

return statearr_27395;
})();
var statearr_27396_27460 = state_27386__$1;
(statearr_27396_27460[(2)] = null);

(statearr_27396_27460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (6))){
var inst_27351 = (state_27386[(7)]);
var state_27386__$1 = state_27386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27386__$1,(11),inst_27351);
} else {
if((state_val_27387 === (17))){
var inst_27372 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
if(cljs.core.truth_(inst_27372)){
var statearr_27397_27461 = state_27386__$1;
(statearr_27397_27461[(1)] = (19));

} else {
var statearr_27398_27462 = state_27386__$1;
(statearr_27398_27462[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (3))){
var inst_27384 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27386__$1,inst_27384);
} else {
if((state_val_27387 === (12))){
var inst_27361 = (state_27386[(10)]);
var state_27386__$1 = state_27386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27386__$1,(14),inst_27361);
} else {
if((state_val_27387 === (2))){
var state_27386__$1 = state_27386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27386__$1,(4),results);
} else {
if((state_val_27387 === (19))){
var state_27386__$1 = state_27386;
var statearr_27399_27463 = state_27386__$1;
(statearr_27399_27463[(2)] = null);

(statearr_27399_27463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (11))){
var inst_27361 = (state_27386[(2)]);
var state_27386__$1 = (function (){var statearr_27400 = state_27386;
(statearr_27400[(10)] = inst_27361);

return statearr_27400;
})();
var statearr_27401_27464 = state_27386__$1;
(statearr_27401_27464[(2)] = null);

(statearr_27401_27464[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (9))){
var state_27386__$1 = state_27386;
var statearr_27402_27465 = state_27386__$1;
(statearr_27402_27465[(2)] = null);

(statearr_27402_27465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (5))){
var state_27386__$1 = state_27386;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27403_27466 = state_27386__$1;
(statearr_27403_27466[(1)] = (8));

} else {
var statearr_27404_27467 = state_27386__$1;
(statearr_27404_27467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (14))){
var inst_27364 = (state_27386[(8)]);
var inst_27366 = (state_27386[(11)]);
var inst_27364__$1 = (state_27386[(2)]);
var inst_27365 = (inst_27364__$1 == null);
var inst_27366__$1 = cljs.core.not.call(null,inst_27365);
var state_27386__$1 = (function (){var statearr_27405 = state_27386;
(statearr_27405[(8)] = inst_27364__$1);

(statearr_27405[(11)] = inst_27366__$1);

return statearr_27405;
})();
if(inst_27366__$1){
var statearr_27406_27468 = state_27386__$1;
(statearr_27406_27468[(1)] = (15));

} else {
var statearr_27407_27469 = state_27386__$1;
(statearr_27407_27469[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (16))){
var inst_27366 = (state_27386[(11)]);
var state_27386__$1 = state_27386;
var statearr_27408_27470 = state_27386__$1;
(statearr_27408_27470[(2)] = inst_27366);

(statearr_27408_27470[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (10))){
var inst_27358 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
var statearr_27409_27471 = state_27386__$1;
(statearr_27409_27471[(2)] = inst_27358);

(statearr_27409_27471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (18))){
var inst_27369 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
var statearr_27410_27472 = state_27386__$1;
(statearr_27410_27472[(2)] = inst_27369);

(statearr_27410_27472[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (8))){
var inst_27355 = cljs.core.async.close_BANG_.call(null,to);
var state_27386__$1 = state_27386;
var statearr_27411_27473 = state_27386__$1;
(statearr_27411_27473[(2)] = inst_27355);

(statearr_27411_27473[(1)] = (10));


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
});})(c__15967__auto__,jobs,results,process,async))
;
return ((function (switch__15911__auto__,c__15967__auto__,jobs,results,process,async){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_27415 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27415[(0)] = state_machine__15912__auto__);

(statearr_27415[(1)] = (1));

return statearr_27415;
});
var state_machine__15912__auto____1 = (function (state_27386){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_27386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e27416){if((e27416 instanceof Object)){
var ex__15915__auto__ = e27416;
var statearr_27417_27474 = state_27386;
(statearr_27417_27474[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27475 = state_27386;
state_27386 = G__27475;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_27386){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_27386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto__,jobs,results,process,async))
})();
var state__15969__auto__ = (function (){var statearr_27418 = f__15968__auto__.call(null);
(statearr_27418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto__);

return statearr_27418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto__,jobs,results,process,async))
);

return c__15967__auto__;
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
var c__15967__auto___27576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto___27576,tc,fc){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto___27576,tc,fc){
return (function (state_27551){
var state_val_27552 = (state_27551[(1)]);
if((state_val_27552 === (7))){
var inst_27547 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27553_27577 = state_27551__$1;
(statearr_27553_27577[(2)] = inst_27547);

(statearr_27553_27577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (1))){
var state_27551__$1 = state_27551;
var statearr_27554_27578 = state_27551__$1;
(statearr_27554_27578[(2)] = null);

(statearr_27554_27578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (4))){
var inst_27528 = (state_27551[(7)]);
var inst_27528__$1 = (state_27551[(2)]);
var inst_27529 = (inst_27528__$1 == null);
var state_27551__$1 = (function (){var statearr_27555 = state_27551;
(statearr_27555[(7)] = inst_27528__$1);

return statearr_27555;
})();
if(cljs.core.truth_(inst_27529)){
var statearr_27556_27579 = state_27551__$1;
(statearr_27556_27579[(1)] = (5));

} else {
var statearr_27557_27580 = state_27551__$1;
(statearr_27557_27580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (13))){
var state_27551__$1 = state_27551;
var statearr_27558_27581 = state_27551__$1;
(statearr_27558_27581[(2)] = null);

(statearr_27558_27581[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (6))){
var inst_27528 = (state_27551[(7)]);
var inst_27534 = p.call(null,inst_27528);
var state_27551__$1 = state_27551;
if(cljs.core.truth_(inst_27534)){
var statearr_27559_27582 = state_27551__$1;
(statearr_27559_27582[(1)] = (9));

} else {
var statearr_27560_27583 = state_27551__$1;
(statearr_27560_27583[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (3))){
var inst_27549 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27551__$1,inst_27549);
} else {
if((state_val_27552 === (12))){
var state_27551__$1 = state_27551;
var statearr_27561_27584 = state_27551__$1;
(statearr_27561_27584[(2)] = null);

(statearr_27561_27584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (2))){
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27551__$1,(4),ch);
} else {
if((state_val_27552 === (11))){
var inst_27528 = (state_27551[(7)]);
var inst_27538 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27551__$1,(8),inst_27538,inst_27528);
} else {
if((state_val_27552 === (9))){
var state_27551__$1 = state_27551;
var statearr_27562_27585 = state_27551__$1;
(statearr_27562_27585[(2)] = tc);

(statearr_27562_27585[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (5))){
var inst_27531 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27532 = cljs.core.async.close_BANG_.call(null,fc);
var state_27551__$1 = (function (){var statearr_27563 = state_27551;
(statearr_27563[(8)] = inst_27531);

return statearr_27563;
})();
var statearr_27564_27586 = state_27551__$1;
(statearr_27564_27586[(2)] = inst_27532);

(statearr_27564_27586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (14))){
var inst_27545 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27565_27587 = state_27551__$1;
(statearr_27565_27587[(2)] = inst_27545);

(statearr_27565_27587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (10))){
var state_27551__$1 = state_27551;
var statearr_27566_27588 = state_27551__$1;
(statearr_27566_27588[(2)] = fc);

(statearr_27566_27588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (8))){
var inst_27540 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
if(cljs.core.truth_(inst_27540)){
var statearr_27567_27589 = state_27551__$1;
(statearr_27567_27589[(1)] = (12));

} else {
var statearr_27568_27590 = state_27551__$1;
(statearr_27568_27590[(1)] = (13));

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
});})(c__15967__auto___27576,tc,fc))
;
return ((function (switch__15911__auto__,c__15967__auto___27576,tc,fc){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_27572 = [null,null,null,null,null,null,null,null,null];
(statearr_27572[(0)] = state_machine__15912__auto__);

(statearr_27572[(1)] = (1));

return statearr_27572;
});
var state_machine__15912__auto____1 = (function (state_27551){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_27551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e27573){if((e27573 instanceof Object)){
var ex__15915__auto__ = e27573;
var statearr_27574_27591 = state_27551;
(statearr_27574_27591[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27592 = state_27551;
state_27551 = G__27592;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_27551){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_27551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto___27576,tc,fc))
})();
var state__15969__auto__ = (function (){var statearr_27575 = f__15968__auto__.call(null);
(statearr_27575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___27576);

return statearr_27575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto___27576,tc,fc))
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
var c__15967__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto__){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto__){
return (function (state_27639){
var state_val_27640 = (state_27639[(1)]);
if((state_val_27640 === (7))){
var inst_27635 = (state_27639[(2)]);
var state_27639__$1 = state_27639;
var statearr_27641_27657 = state_27639__$1;
(statearr_27641_27657[(2)] = inst_27635);

(statearr_27641_27657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27640 === (6))){
var inst_27628 = (state_27639[(7)]);
var inst_27625 = (state_27639[(8)]);
var inst_27632 = f.call(null,inst_27625,inst_27628);
var inst_27625__$1 = inst_27632;
var state_27639__$1 = (function (){var statearr_27642 = state_27639;
(statearr_27642[(8)] = inst_27625__$1);

return statearr_27642;
})();
var statearr_27643_27658 = state_27639__$1;
(statearr_27643_27658[(2)] = null);

(statearr_27643_27658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27640 === (5))){
var inst_27625 = (state_27639[(8)]);
var state_27639__$1 = state_27639;
var statearr_27644_27659 = state_27639__$1;
(statearr_27644_27659[(2)] = inst_27625);

(statearr_27644_27659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27640 === (4))){
var inst_27628 = (state_27639[(7)]);
var inst_27628__$1 = (state_27639[(2)]);
var inst_27629 = (inst_27628__$1 == null);
var state_27639__$1 = (function (){var statearr_27645 = state_27639;
(statearr_27645[(7)] = inst_27628__$1);

return statearr_27645;
})();
if(cljs.core.truth_(inst_27629)){
var statearr_27646_27660 = state_27639__$1;
(statearr_27646_27660[(1)] = (5));

} else {
var statearr_27647_27661 = state_27639__$1;
(statearr_27647_27661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27640 === (3))){
var inst_27637 = (state_27639[(2)]);
var state_27639__$1 = state_27639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27639__$1,inst_27637);
} else {
if((state_val_27640 === (2))){
var state_27639__$1 = state_27639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27639__$1,(4),ch);
} else {
if((state_val_27640 === (1))){
var inst_27625 = init;
var state_27639__$1 = (function (){var statearr_27648 = state_27639;
(statearr_27648[(8)] = inst_27625);

return statearr_27648;
})();
var statearr_27649_27662 = state_27639__$1;
(statearr_27649_27662[(2)] = null);

(statearr_27649_27662[(1)] = (2));


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
});})(c__15967__auto__))
;
return ((function (switch__15911__auto__,c__15967__auto__){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_27653 = [null,null,null,null,null,null,null,null,null];
(statearr_27653[(0)] = state_machine__15912__auto__);

(statearr_27653[(1)] = (1));

return statearr_27653;
});
var state_machine__15912__auto____1 = (function (state_27639){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_27639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e27654){if((e27654 instanceof Object)){
var ex__15915__auto__ = e27654;
var statearr_27655_27663 = state_27639;
(statearr_27655_27663[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27664 = state_27639;
state_27639 = G__27664;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_27639){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_27639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto__))
})();
var state__15969__auto__ = (function (){var statearr_27656 = f__15968__auto__.call(null);
(statearr_27656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto__);

return statearr_27656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto__))
);

return c__15967__auto__;
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
var c__15967__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto__){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto__){
return (function (state_27738){
var state_val_27739 = (state_27738[(1)]);
if((state_val_27739 === (7))){
var inst_27720 = (state_27738[(2)]);
var state_27738__$1 = state_27738;
var statearr_27740_27763 = state_27738__$1;
(statearr_27740_27763[(2)] = inst_27720);

(statearr_27740_27763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (1))){
var inst_27714 = cljs.core.seq.call(null,coll);
var inst_27715 = inst_27714;
var state_27738__$1 = (function (){var statearr_27741 = state_27738;
(statearr_27741[(7)] = inst_27715);

return statearr_27741;
})();
var statearr_27742_27764 = state_27738__$1;
(statearr_27742_27764[(2)] = null);

(statearr_27742_27764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (4))){
var inst_27715 = (state_27738[(7)]);
var inst_27718 = cljs.core.first.call(null,inst_27715);
var state_27738__$1 = state_27738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27738__$1,(7),ch,inst_27718);
} else {
if((state_val_27739 === (13))){
var inst_27732 = (state_27738[(2)]);
var state_27738__$1 = state_27738;
var statearr_27743_27765 = state_27738__$1;
(statearr_27743_27765[(2)] = inst_27732);

(statearr_27743_27765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (6))){
var inst_27723 = (state_27738[(2)]);
var state_27738__$1 = state_27738;
if(cljs.core.truth_(inst_27723)){
var statearr_27744_27766 = state_27738__$1;
(statearr_27744_27766[(1)] = (8));

} else {
var statearr_27745_27767 = state_27738__$1;
(statearr_27745_27767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (3))){
var inst_27736 = (state_27738[(2)]);
var state_27738__$1 = state_27738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27738__$1,inst_27736);
} else {
if((state_val_27739 === (12))){
var state_27738__$1 = state_27738;
var statearr_27746_27768 = state_27738__$1;
(statearr_27746_27768[(2)] = null);

(statearr_27746_27768[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (2))){
var inst_27715 = (state_27738[(7)]);
var state_27738__$1 = state_27738;
if(cljs.core.truth_(inst_27715)){
var statearr_27747_27769 = state_27738__$1;
(statearr_27747_27769[(1)] = (4));

} else {
var statearr_27748_27770 = state_27738__$1;
(statearr_27748_27770[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (11))){
var inst_27729 = cljs.core.async.close_BANG_.call(null,ch);
var state_27738__$1 = state_27738;
var statearr_27749_27771 = state_27738__$1;
(statearr_27749_27771[(2)] = inst_27729);

(statearr_27749_27771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (9))){
var state_27738__$1 = state_27738;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27750_27772 = state_27738__$1;
(statearr_27750_27772[(1)] = (11));

} else {
var statearr_27751_27773 = state_27738__$1;
(statearr_27751_27773[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (5))){
var inst_27715 = (state_27738[(7)]);
var state_27738__$1 = state_27738;
var statearr_27752_27774 = state_27738__$1;
(statearr_27752_27774[(2)] = inst_27715);

(statearr_27752_27774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (10))){
var inst_27734 = (state_27738[(2)]);
var state_27738__$1 = state_27738;
var statearr_27753_27775 = state_27738__$1;
(statearr_27753_27775[(2)] = inst_27734);

(statearr_27753_27775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (8))){
var inst_27715 = (state_27738[(7)]);
var inst_27725 = cljs.core.next.call(null,inst_27715);
var inst_27715__$1 = inst_27725;
var state_27738__$1 = (function (){var statearr_27754 = state_27738;
(statearr_27754[(7)] = inst_27715__$1);

return statearr_27754;
})();
var statearr_27755_27776 = state_27738__$1;
(statearr_27755_27776[(2)] = null);

(statearr_27755_27776[(1)] = (2));


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
});})(c__15967__auto__))
;
return ((function (switch__15911__auto__,c__15967__auto__){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_27759 = [null,null,null,null,null,null,null,null];
(statearr_27759[(0)] = state_machine__15912__auto__);

(statearr_27759[(1)] = (1));

return statearr_27759;
});
var state_machine__15912__auto____1 = (function (state_27738){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_27738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e27760){if((e27760 instanceof Object)){
var ex__15915__auto__ = e27760;
var statearr_27761_27777 = state_27738;
(statearr_27761_27777[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27778 = state_27738;
state_27738 = G__27778;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_27738){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_27738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto__))
})();
var state__15969__auto__ = (function (){var statearr_27762 = f__15968__auto__.call(null);
(statearr_27762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto__);

return statearr_27762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto__))
);

return c__15967__auto__;
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

cljs.core.async.Mux = (function (){var obj27780 = {};
return obj27780;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__13311__auto__ = _;
if(and__13311__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__13311__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__13967__auto__ = (((_ == null))?null:_);
return (function (){var or__13323__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13967__auto__)]);
if(or__13323__auto__){
return or__13323__auto__;
} else {
var or__13323__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__13323__auto____$1){
return or__13323__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27782 = {};
return obj27782;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__13311__auto__ = m;
if(and__13311__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__13311__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__13967__auto__ = (((m == null))?null:m);
return (function (){var or__13323__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13967__auto__)]);
if(or__13323__auto__){
return or__13323__auto__;
} else {
var or__13323__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__13323__auto____$1){
return or__13323__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__13311__auto__ = m;
if(and__13311__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__13311__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__13967__auto__ = (((m == null))?null:m);
return (function (){var or__13323__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13967__auto__)]);
if(or__13323__auto__){
return or__13323__auto__;
} else {
var or__13323__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__13323__auto____$1){
return or__13323__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__13311__auto__ = m;
if(and__13311__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__13311__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__13967__auto__ = (((m == null))?null:m);
return (function (){var or__13323__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13967__auto__)]);
if(or__13323__auto__){
return or__13323__auto__;
} else {
var or__13323__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__13323__auto____$1){
return or__13323__auto____$1;
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
if(typeof cljs.core.async.t28004 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28004 = (function (cs,ch,mult,meta28005){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28005 = meta28005;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28004.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28004.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28004.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28004.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28004.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28004.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28004.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28006){
var self__ = this;
var _28006__$1 = this;
return self__.meta28005;
});})(cs))
;

cljs.core.async.t28004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28006,meta28005__$1){
var self__ = this;
var _28006__$1 = this;
return (new cljs.core.async.t28004(self__.cs,self__.ch,self__.mult,meta28005__$1));
});})(cs))
;

cljs.core.async.t28004.cljs$lang$type = true;

cljs.core.async.t28004.cljs$lang$ctorStr = "cljs.core.async/t28004";

cljs.core.async.t28004.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13910__auto__,writer__13911__auto__,opt__13912__auto__){
return cljs.core._write.call(null,writer__13911__auto__,"cljs.core.async/t28004");
});})(cs))
;

cljs.core.async.__GT_t28004 = ((function (cs){
return (function __GT_t28004(cs__$1,ch__$1,mult__$1,meta28005){
return (new cljs.core.async.t28004(cs__$1,ch__$1,mult__$1,meta28005));
});})(cs))
;

}

return (new cljs.core.async.t28004(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15967__auto___28225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto___28225,cs,m,dchan,dctr,done){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto___28225,cs,m,dchan,dctr,done){
return (function (state_28137){
var state_val_28138 = (state_28137[(1)]);
if((state_val_28138 === (7))){
var inst_28133 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28139_28226 = state_28137__$1;
(statearr_28139_28226[(2)] = inst_28133);

(statearr_28139_28226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (20))){
var inst_28038 = (state_28137[(7)]);
var inst_28048 = cljs.core.first.call(null,inst_28038);
var inst_28049 = cljs.core.nth.call(null,inst_28048,(0),null);
var inst_28050 = cljs.core.nth.call(null,inst_28048,(1),null);
var state_28137__$1 = (function (){var statearr_28140 = state_28137;
(statearr_28140[(8)] = inst_28049);

return statearr_28140;
})();
if(cljs.core.truth_(inst_28050)){
var statearr_28141_28227 = state_28137__$1;
(statearr_28141_28227[(1)] = (22));

} else {
var statearr_28142_28228 = state_28137__$1;
(statearr_28142_28228[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (27))){
var inst_28080 = (state_28137[(9)]);
var inst_28085 = (state_28137[(10)]);
var inst_28009 = (state_28137[(11)]);
var inst_28078 = (state_28137[(12)]);
var inst_28085__$1 = cljs.core._nth.call(null,inst_28078,inst_28080);
var inst_28086 = cljs.core.async.put_BANG_.call(null,inst_28085__$1,inst_28009,done);
var state_28137__$1 = (function (){var statearr_28143 = state_28137;
(statearr_28143[(10)] = inst_28085__$1);

return statearr_28143;
})();
if(cljs.core.truth_(inst_28086)){
var statearr_28144_28229 = state_28137__$1;
(statearr_28144_28229[(1)] = (30));

} else {
var statearr_28145_28230 = state_28137__$1;
(statearr_28145_28230[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (1))){
var state_28137__$1 = state_28137;
var statearr_28146_28231 = state_28137__$1;
(statearr_28146_28231[(2)] = null);

(statearr_28146_28231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (24))){
var inst_28038 = (state_28137[(7)]);
var inst_28055 = (state_28137[(2)]);
var inst_28056 = cljs.core.next.call(null,inst_28038);
var inst_28018 = inst_28056;
var inst_28019 = null;
var inst_28020 = (0);
var inst_28021 = (0);
var state_28137__$1 = (function (){var statearr_28147 = state_28137;
(statearr_28147[(13)] = inst_28018);

(statearr_28147[(14)] = inst_28019);

(statearr_28147[(15)] = inst_28021);

(statearr_28147[(16)] = inst_28055);

(statearr_28147[(17)] = inst_28020);

return statearr_28147;
})();
var statearr_28148_28232 = state_28137__$1;
(statearr_28148_28232[(2)] = null);

(statearr_28148_28232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (39))){
var state_28137__$1 = state_28137;
var statearr_28152_28233 = state_28137__$1;
(statearr_28152_28233[(2)] = null);

(statearr_28152_28233[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (4))){
var inst_28009 = (state_28137[(11)]);
var inst_28009__$1 = (state_28137[(2)]);
var inst_28010 = (inst_28009__$1 == null);
var state_28137__$1 = (function (){var statearr_28153 = state_28137;
(statearr_28153[(11)] = inst_28009__$1);

return statearr_28153;
})();
if(cljs.core.truth_(inst_28010)){
var statearr_28154_28234 = state_28137__$1;
(statearr_28154_28234[(1)] = (5));

} else {
var statearr_28155_28235 = state_28137__$1;
(statearr_28155_28235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (15))){
var inst_28018 = (state_28137[(13)]);
var inst_28019 = (state_28137[(14)]);
var inst_28021 = (state_28137[(15)]);
var inst_28020 = (state_28137[(17)]);
var inst_28034 = (state_28137[(2)]);
var inst_28035 = (inst_28021 + (1));
var tmp28149 = inst_28018;
var tmp28150 = inst_28019;
var tmp28151 = inst_28020;
var inst_28018__$1 = tmp28149;
var inst_28019__$1 = tmp28150;
var inst_28020__$1 = tmp28151;
var inst_28021__$1 = inst_28035;
var state_28137__$1 = (function (){var statearr_28156 = state_28137;
(statearr_28156[(13)] = inst_28018__$1);

(statearr_28156[(14)] = inst_28019__$1);

(statearr_28156[(15)] = inst_28021__$1);

(statearr_28156[(17)] = inst_28020__$1);

(statearr_28156[(18)] = inst_28034);

return statearr_28156;
})();
var statearr_28157_28236 = state_28137__$1;
(statearr_28157_28236[(2)] = null);

(statearr_28157_28236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (21))){
var inst_28059 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28161_28237 = state_28137__$1;
(statearr_28161_28237[(2)] = inst_28059);

(statearr_28161_28237[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (31))){
var inst_28085 = (state_28137[(10)]);
var inst_28089 = done.call(null,null);
var inst_28090 = cljs.core.async.untap_STAR_.call(null,m,inst_28085);
var state_28137__$1 = (function (){var statearr_28162 = state_28137;
(statearr_28162[(19)] = inst_28089);

return statearr_28162;
})();
var statearr_28163_28238 = state_28137__$1;
(statearr_28163_28238[(2)] = inst_28090);

(statearr_28163_28238[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (32))){
var inst_28080 = (state_28137[(9)]);
var inst_28079 = (state_28137[(20)]);
var inst_28077 = (state_28137[(21)]);
var inst_28078 = (state_28137[(12)]);
var inst_28092 = (state_28137[(2)]);
var inst_28093 = (inst_28080 + (1));
var tmp28158 = inst_28079;
var tmp28159 = inst_28077;
var tmp28160 = inst_28078;
var inst_28077__$1 = tmp28159;
var inst_28078__$1 = tmp28160;
var inst_28079__$1 = tmp28158;
var inst_28080__$1 = inst_28093;
var state_28137__$1 = (function (){var statearr_28164 = state_28137;
(statearr_28164[(9)] = inst_28080__$1);

(statearr_28164[(22)] = inst_28092);

(statearr_28164[(20)] = inst_28079__$1);

(statearr_28164[(21)] = inst_28077__$1);

(statearr_28164[(12)] = inst_28078__$1);

return statearr_28164;
})();
var statearr_28165_28239 = state_28137__$1;
(statearr_28165_28239[(2)] = null);

(statearr_28165_28239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (40))){
var inst_28105 = (state_28137[(23)]);
var inst_28109 = done.call(null,null);
var inst_28110 = cljs.core.async.untap_STAR_.call(null,m,inst_28105);
var state_28137__$1 = (function (){var statearr_28166 = state_28137;
(statearr_28166[(24)] = inst_28109);

return statearr_28166;
})();
var statearr_28167_28240 = state_28137__$1;
(statearr_28167_28240[(2)] = inst_28110);

(statearr_28167_28240[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (33))){
var inst_28096 = (state_28137[(25)]);
var inst_28098 = cljs.core.chunked_seq_QMARK_.call(null,inst_28096);
var state_28137__$1 = state_28137;
if(inst_28098){
var statearr_28168_28241 = state_28137__$1;
(statearr_28168_28241[(1)] = (36));

} else {
var statearr_28169_28242 = state_28137__$1;
(statearr_28169_28242[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (13))){
var inst_28028 = (state_28137[(26)]);
var inst_28031 = cljs.core.async.close_BANG_.call(null,inst_28028);
var state_28137__$1 = state_28137;
var statearr_28170_28243 = state_28137__$1;
(statearr_28170_28243[(2)] = inst_28031);

(statearr_28170_28243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (22))){
var inst_28049 = (state_28137[(8)]);
var inst_28052 = cljs.core.async.close_BANG_.call(null,inst_28049);
var state_28137__$1 = state_28137;
var statearr_28171_28244 = state_28137__$1;
(statearr_28171_28244[(2)] = inst_28052);

(statearr_28171_28244[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (36))){
var inst_28096 = (state_28137[(25)]);
var inst_28100 = cljs.core.chunk_first.call(null,inst_28096);
var inst_28101 = cljs.core.chunk_rest.call(null,inst_28096);
var inst_28102 = cljs.core.count.call(null,inst_28100);
var inst_28077 = inst_28101;
var inst_28078 = inst_28100;
var inst_28079 = inst_28102;
var inst_28080 = (0);
var state_28137__$1 = (function (){var statearr_28172 = state_28137;
(statearr_28172[(9)] = inst_28080);

(statearr_28172[(20)] = inst_28079);

(statearr_28172[(21)] = inst_28077);

(statearr_28172[(12)] = inst_28078);

return statearr_28172;
})();
var statearr_28173_28245 = state_28137__$1;
(statearr_28173_28245[(2)] = null);

(statearr_28173_28245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (41))){
var inst_28096 = (state_28137[(25)]);
var inst_28112 = (state_28137[(2)]);
var inst_28113 = cljs.core.next.call(null,inst_28096);
var inst_28077 = inst_28113;
var inst_28078 = null;
var inst_28079 = (0);
var inst_28080 = (0);
var state_28137__$1 = (function (){var statearr_28174 = state_28137;
(statearr_28174[(27)] = inst_28112);

(statearr_28174[(9)] = inst_28080);

(statearr_28174[(20)] = inst_28079);

(statearr_28174[(21)] = inst_28077);

(statearr_28174[(12)] = inst_28078);

return statearr_28174;
})();
var statearr_28175_28246 = state_28137__$1;
(statearr_28175_28246[(2)] = null);

(statearr_28175_28246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (43))){
var state_28137__$1 = state_28137;
var statearr_28176_28247 = state_28137__$1;
(statearr_28176_28247[(2)] = null);

(statearr_28176_28247[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (29))){
var inst_28121 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28177_28248 = state_28137__$1;
(statearr_28177_28248[(2)] = inst_28121);

(statearr_28177_28248[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (44))){
var inst_28130 = (state_28137[(2)]);
var state_28137__$1 = (function (){var statearr_28178 = state_28137;
(statearr_28178[(28)] = inst_28130);

return statearr_28178;
})();
var statearr_28179_28249 = state_28137__$1;
(statearr_28179_28249[(2)] = null);

(statearr_28179_28249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (6))){
var inst_28069 = (state_28137[(29)]);
var inst_28068 = cljs.core.deref.call(null,cs);
var inst_28069__$1 = cljs.core.keys.call(null,inst_28068);
var inst_28070 = cljs.core.count.call(null,inst_28069__$1);
var inst_28071 = cljs.core.reset_BANG_.call(null,dctr,inst_28070);
var inst_28076 = cljs.core.seq.call(null,inst_28069__$1);
var inst_28077 = inst_28076;
var inst_28078 = null;
var inst_28079 = (0);
var inst_28080 = (0);
var state_28137__$1 = (function (){var statearr_28180 = state_28137;
(statearr_28180[(30)] = inst_28071);

(statearr_28180[(9)] = inst_28080);

(statearr_28180[(29)] = inst_28069__$1);

(statearr_28180[(20)] = inst_28079);

(statearr_28180[(21)] = inst_28077);

(statearr_28180[(12)] = inst_28078);

return statearr_28180;
})();
var statearr_28181_28250 = state_28137__$1;
(statearr_28181_28250[(2)] = null);

(statearr_28181_28250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (28))){
var inst_28077 = (state_28137[(21)]);
var inst_28096 = (state_28137[(25)]);
var inst_28096__$1 = cljs.core.seq.call(null,inst_28077);
var state_28137__$1 = (function (){var statearr_28182 = state_28137;
(statearr_28182[(25)] = inst_28096__$1);

return statearr_28182;
})();
if(inst_28096__$1){
var statearr_28183_28251 = state_28137__$1;
(statearr_28183_28251[(1)] = (33));

} else {
var statearr_28184_28252 = state_28137__$1;
(statearr_28184_28252[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (25))){
var inst_28080 = (state_28137[(9)]);
var inst_28079 = (state_28137[(20)]);
var inst_28082 = (inst_28080 < inst_28079);
var inst_28083 = inst_28082;
var state_28137__$1 = state_28137;
if(cljs.core.truth_(inst_28083)){
var statearr_28185_28253 = state_28137__$1;
(statearr_28185_28253[(1)] = (27));

} else {
var statearr_28186_28254 = state_28137__$1;
(statearr_28186_28254[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (34))){
var state_28137__$1 = state_28137;
var statearr_28187_28255 = state_28137__$1;
(statearr_28187_28255[(2)] = null);

(statearr_28187_28255[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (17))){
var state_28137__$1 = state_28137;
var statearr_28188_28256 = state_28137__$1;
(statearr_28188_28256[(2)] = null);

(statearr_28188_28256[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (3))){
var inst_28135 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28137__$1,inst_28135);
} else {
if((state_val_28138 === (12))){
var inst_28064 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28189_28257 = state_28137__$1;
(statearr_28189_28257[(2)] = inst_28064);

(statearr_28189_28257[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (2))){
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28137__$1,(4),ch);
} else {
if((state_val_28138 === (23))){
var state_28137__$1 = state_28137;
var statearr_28190_28258 = state_28137__$1;
(statearr_28190_28258[(2)] = null);

(statearr_28190_28258[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (35))){
var inst_28119 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28191_28259 = state_28137__$1;
(statearr_28191_28259[(2)] = inst_28119);

(statearr_28191_28259[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (19))){
var inst_28038 = (state_28137[(7)]);
var inst_28042 = cljs.core.chunk_first.call(null,inst_28038);
var inst_28043 = cljs.core.chunk_rest.call(null,inst_28038);
var inst_28044 = cljs.core.count.call(null,inst_28042);
var inst_28018 = inst_28043;
var inst_28019 = inst_28042;
var inst_28020 = inst_28044;
var inst_28021 = (0);
var state_28137__$1 = (function (){var statearr_28192 = state_28137;
(statearr_28192[(13)] = inst_28018);

(statearr_28192[(14)] = inst_28019);

(statearr_28192[(15)] = inst_28021);

(statearr_28192[(17)] = inst_28020);

return statearr_28192;
})();
var statearr_28193_28260 = state_28137__$1;
(statearr_28193_28260[(2)] = null);

(statearr_28193_28260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (11))){
var inst_28018 = (state_28137[(13)]);
var inst_28038 = (state_28137[(7)]);
var inst_28038__$1 = cljs.core.seq.call(null,inst_28018);
var state_28137__$1 = (function (){var statearr_28194 = state_28137;
(statearr_28194[(7)] = inst_28038__$1);

return statearr_28194;
})();
if(inst_28038__$1){
var statearr_28195_28261 = state_28137__$1;
(statearr_28195_28261[(1)] = (16));

} else {
var statearr_28196_28262 = state_28137__$1;
(statearr_28196_28262[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (9))){
var inst_28066 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28197_28263 = state_28137__$1;
(statearr_28197_28263[(2)] = inst_28066);

(statearr_28197_28263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (5))){
var inst_28016 = cljs.core.deref.call(null,cs);
var inst_28017 = cljs.core.seq.call(null,inst_28016);
var inst_28018 = inst_28017;
var inst_28019 = null;
var inst_28020 = (0);
var inst_28021 = (0);
var state_28137__$1 = (function (){var statearr_28198 = state_28137;
(statearr_28198[(13)] = inst_28018);

(statearr_28198[(14)] = inst_28019);

(statearr_28198[(15)] = inst_28021);

(statearr_28198[(17)] = inst_28020);

return statearr_28198;
})();
var statearr_28199_28264 = state_28137__$1;
(statearr_28199_28264[(2)] = null);

(statearr_28199_28264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (14))){
var state_28137__$1 = state_28137;
var statearr_28200_28265 = state_28137__$1;
(statearr_28200_28265[(2)] = null);

(statearr_28200_28265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (45))){
var inst_28127 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28201_28266 = state_28137__$1;
(statearr_28201_28266[(2)] = inst_28127);

(statearr_28201_28266[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (26))){
var inst_28069 = (state_28137[(29)]);
var inst_28123 = (state_28137[(2)]);
var inst_28124 = cljs.core.seq.call(null,inst_28069);
var state_28137__$1 = (function (){var statearr_28202 = state_28137;
(statearr_28202[(31)] = inst_28123);

return statearr_28202;
})();
if(inst_28124){
var statearr_28203_28267 = state_28137__$1;
(statearr_28203_28267[(1)] = (42));

} else {
var statearr_28204_28268 = state_28137__$1;
(statearr_28204_28268[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (16))){
var inst_28038 = (state_28137[(7)]);
var inst_28040 = cljs.core.chunked_seq_QMARK_.call(null,inst_28038);
var state_28137__$1 = state_28137;
if(inst_28040){
var statearr_28205_28269 = state_28137__$1;
(statearr_28205_28269[(1)] = (19));

} else {
var statearr_28206_28270 = state_28137__$1;
(statearr_28206_28270[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (38))){
var inst_28116 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28207_28271 = state_28137__$1;
(statearr_28207_28271[(2)] = inst_28116);

(statearr_28207_28271[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (30))){
var state_28137__$1 = state_28137;
var statearr_28208_28272 = state_28137__$1;
(statearr_28208_28272[(2)] = null);

(statearr_28208_28272[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (10))){
var inst_28019 = (state_28137[(14)]);
var inst_28021 = (state_28137[(15)]);
var inst_28027 = cljs.core._nth.call(null,inst_28019,inst_28021);
var inst_28028 = cljs.core.nth.call(null,inst_28027,(0),null);
var inst_28029 = cljs.core.nth.call(null,inst_28027,(1),null);
var state_28137__$1 = (function (){var statearr_28209 = state_28137;
(statearr_28209[(26)] = inst_28028);

return statearr_28209;
})();
if(cljs.core.truth_(inst_28029)){
var statearr_28210_28273 = state_28137__$1;
(statearr_28210_28273[(1)] = (13));

} else {
var statearr_28211_28274 = state_28137__$1;
(statearr_28211_28274[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (18))){
var inst_28062 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28212_28275 = state_28137__$1;
(statearr_28212_28275[(2)] = inst_28062);

(statearr_28212_28275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (42))){
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28137__$1,(45),dchan);
} else {
if((state_val_28138 === (37))){
var inst_28009 = (state_28137[(11)]);
var inst_28105 = (state_28137[(23)]);
var inst_28096 = (state_28137[(25)]);
var inst_28105__$1 = cljs.core.first.call(null,inst_28096);
var inst_28106 = cljs.core.async.put_BANG_.call(null,inst_28105__$1,inst_28009,done);
var state_28137__$1 = (function (){var statearr_28213 = state_28137;
(statearr_28213[(23)] = inst_28105__$1);

return statearr_28213;
})();
if(cljs.core.truth_(inst_28106)){
var statearr_28214_28276 = state_28137__$1;
(statearr_28214_28276[(1)] = (39));

} else {
var statearr_28215_28277 = state_28137__$1;
(statearr_28215_28277[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (8))){
var inst_28021 = (state_28137[(15)]);
var inst_28020 = (state_28137[(17)]);
var inst_28023 = (inst_28021 < inst_28020);
var inst_28024 = inst_28023;
var state_28137__$1 = state_28137;
if(cljs.core.truth_(inst_28024)){
var statearr_28216_28278 = state_28137__$1;
(statearr_28216_28278[(1)] = (10));

} else {
var statearr_28217_28279 = state_28137__$1;
(statearr_28217_28279[(1)] = (11));

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
});})(c__15967__auto___28225,cs,m,dchan,dctr,done))
;
return ((function (switch__15911__auto__,c__15967__auto___28225,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_28221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28221[(0)] = state_machine__15912__auto__);

(statearr_28221[(1)] = (1));

return statearr_28221;
});
var state_machine__15912__auto____1 = (function (state_28137){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_28137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e28222){if((e28222 instanceof Object)){
var ex__15915__auto__ = e28222;
var statearr_28223_28280 = state_28137;
(statearr_28223_28280[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28281 = state_28137;
state_28137 = G__28281;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_28137){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_28137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto___28225,cs,m,dchan,dctr,done))
})();
var state__15969__auto__ = (function (){var statearr_28224 = f__15968__auto__.call(null);
(statearr_28224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___28225);

return statearr_28224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto___28225,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj28283 = {};
return obj28283;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__13311__auto__ = m;
if(and__13311__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__13311__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__13967__auto__ = (((m == null))?null:m);
return (function (){var or__13323__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13967__auto__)]);
if(or__13323__auto__){
return or__13323__auto__;
} else {
var or__13323__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__13323__auto____$1){
return or__13323__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__13311__auto__ = m;
if(and__13311__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__13311__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__13967__auto__ = (((m == null))?null:m);
return (function (){var or__13323__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13967__auto__)]);
if(or__13323__auto__){
return or__13323__auto__;
} else {
var or__13323__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__13323__auto____$1){
return or__13323__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__13311__auto__ = m;
if(and__13311__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__13311__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__13967__auto__ = (((m == null))?null:m);
return (function (){var or__13323__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13967__auto__)]);
if(or__13323__auto__){
return or__13323__auto__;
} else {
var or__13323__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__13323__auto____$1){
return or__13323__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__13311__auto__ = m;
if(and__13311__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__13311__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__13967__auto__ = (((m == null))?null:m);
return (function (){var or__13323__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13967__auto__)]);
if(or__13323__auto__){
return or__13323__auto__;
} else {
var or__13323__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__13323__auto____$1){
return or__13323__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__13311__auto__ = m;
if(and__13311__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__13311__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__13967__auto__ = (((m == null))?null:m);
return (function (){var or__13323__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13967__auto__)]);
if(or__13323__auto__){
return or__13323__auto__;
} else {
var or__13323__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__13323__auto____$1){
return or__13323__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__28284){
var map__28289 = p__28284;
var map__28289__$1 = ((cljs.core.seq_QMARK_.call(null,map__28289))?cljs.core.apply.call(null,cljs.core.hash_map,map__28289):map__28289);
var opts = map__28289__$1;
var statearr_28290_28293 = state;
(statearr_28290_28293[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__28289,map__28289__$1,opts){
return (function (val){
var statearr_28291_28294 = state;
(statearr_28291_28294[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28289,map__28289__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_28292_28295 = state;
(statearr_28292_28295[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__28284 = null;
if (arguments.length > 3) {
var G__28296__i = 0, G__28296__a = new Array(arguments.length -  3);
while (G__28296__i < G__28296__a.length) {G__28296__a[G__28296__i] = arguments[G__28296__i + 3]; ++G__28296__i;}
  p__28284 = new cljs.core.IndexedSeq(G__28296__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__28284);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__28297){
var state = cljs.core.first(arglist__28297);
arglist__28297 = cljs.core.next(arglist__28297);
var cont_block = cljs.core.first(arglist__28297);
arglist__28297 = cljs.core.next(arglist__28297);
var ports = cljs.core.first(arglist__28297);
var p__28284 = cljs.core.rest(arglist__28297);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__28284);
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
if(typeof cljs.core.async.t28417 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28417 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28418){
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
this.meta28418 = meta28418;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28417.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28417.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28417.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28417.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28417.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28417.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t28417.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28417.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28417.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28419){
var self__ = this;
var _28419__$1 = this;
return self__.meta28418;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28419,meta28418__$1){
var self__ = this;
var _28419__$1 = this;
return (new cljs.core.async.t28417(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28418__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28417.cljs$lang$type = true;

cljs.core.async.t28417.cljs$lang$ctorStr = "cljs.core.async/t28417";

cljs.core.async.t28417.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13910__auto__,writer__13911__auto__,opt__13912__auto__){
return cljs.core._write.call(null,writer__13911__auto__,"cljs.core.async/t28417");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28417 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t28417(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28418){
return (new cljs.core.async.t28417(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28418));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28417(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15967__auto___28536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto___28536,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto___28536,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28489){
var state_val_28490 = (state_28489[(1)]);
if((state_val_28490 === (7))){
var inst_28433 = (state_28489[(7)]);
var inst_28438 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28433);
var state_28489__$1 = state_28489;
var statearr_28491_28537 = state_28489__$1;
(statearr_28491_28537[(2)] = inst_28438);

(statearr_28491_28537[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (20))){
var inst_28448 = (state_28489[(8)]);
var state_28489__$1 = state_28489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28489__$1,(23),out,inst_28448);
} else {
if((state_val_28490 === (1))){
var inst_28423 = (state_28489[(9)]);
var inst_28423__$1 = calc_state.call(null);
var inst_28424 = cljs.core.seq_QMARK_.call(null,inst_28423__$1);
var state_28489__$1 = (function (){var statearr_28492 = state_28489;
(statearr_28492[(9)] = inst_28423__$1);

return statearr_28492;
})();
if(inst_28424){
var statearr_28493_28538 = state_28489__$1;
(statearr_28493_28538[(1)] = (2));

} else {
var statearr_28494_28539 = state_28489__$1;
(statearr_28494_28539[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (24))){
var inst_28441 = (state_28489[(10)]);
var inst_28433 = inst_28441;
var state_28489__$1 = (function (){var statearr_28495 = state_28489;
(statearr_28495[(7)] = inst_28433);

return statearr_28495;
})();
var statearr_28496_28540 = state_28489__$1;
(statearr_28496_28540[(2)] = null);

(statearr_28496_28540[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (4))){
var inst_28423 = (state_28489[(9)]);
var inst_28429 = (state_28489[(2)]);
var inst_28430 = cljs.core.get.call(null,inst_28429,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28431 = cljs.core.get.call(null,inst_28429,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28432 = cljs.core.get.call(null,inst_28429,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28433 = inst_28423;
var state_28489__$1 = (function (){var statearr_28497 = state_28489;
(statearr_28497[(7)] = inst_28433);

(statearr_28497[(11)] = inst_28432);

(statearr_28497[(12)] = inst_28430);

(statearr_28497[(13)] = inst_28431);

return statearr_28497;
})();
var statearr_28498_28541 = state_28489__$1;
(statearr_28498_28541[(2)] = null);

(statearr_28498_28541[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (15))){
var state_28489__$1 = state_28489;
var statearr_28499_28542 = state_28489__$1;
(statearr_28499_28542[(2)] = null);

(statearr_28499_28542[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (21))){
var inst_28441 = (state_28489[(10)]);
var inst_28433 = inst_28441;
var state_28489__$1 = (function (){var statearr_28500 = state_28489;
(statearr_28500[(7)] = inst_28433);

return statearr_28500;
})();
var statearr_28501_28543 = state_28489__$1;
(statearr_28501_28543[(2)] = null);

(statearr_28501_28543[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (13))){
var inst_28485 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
var statearr_28502_28544 = state_28489__$1;
(statearr_28502_28544[(2)] = inst_28485);

(statearr_28502_28544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (22))){
var inst_28483 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
var statearr_28503_28545 = state_28489__$1;
(statearr_28503_28545[(2)] = inst_28483);

(statearr_28503_28545[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (6))){
var inst_28487 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28489__$1,inst_28487);
} else {
if((state_val_28490 === (25))){
var state_28489__$1 = state_28489;
var statearr_28504_28546 = state_28489__$1;
(statearr_28504_28546[(2)] = null);

(statearr_28504_28546[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (17))){
var inst_28463 = (state_28489[(14)]);
var state_28489__$1 = state_28489;
var statearr_28505_28547 = state_28489__$1;
(statearr_28505_28547[(2)] = inst_28463);

(statearr_28505_28547[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (3))){
var inst_28423 = (state_28489[(9)]);
var state_28489__$1 = state_28489;
var statearr_28506_28548 = state_28489__$1;
(statearr_28506_28548[(2)] = inst_28423);

(statearr_28506_28548[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (12))){
var inst_28463 = (state_28489[(14)]);
var inst_28444 = (state_28489[(15)]);
var inst_28449 = (state_28489[(16)]);
var inst_28463__$1 = inst_28444.call(null,inst_28449);
var state_28489__$1 = (function (){var statearr_28507 = state_28489;
(statearr_28507[(14)] = inst_28463__$1);

return statearr_28507;
})();
if(cljs.core.truth_(inst_28463__$1)){
var statearr_28508_28549 = state_28489__$1;
(statearr_28508_28549[(1)] = (17));

} else {
var statearr_28509_28550 = state_28489__$1;
(statearr_28509_28550[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (2))){
var inst_28423 = (state_28489[(9)]);
var inst_28426 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28423);
var state_28489__$1 = state_28489;
var statearr_28510_28551 = state_28489__$1;
(statearr_28510_28551[(2)] = inst_28426);

(statearr_28510_28551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (23))){
var inst_28474 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
if(cljs.core.truth_(inst_28474)){
var statearr_28511_28552 = state_28489__$1;
(statearr_28511_28552[(1)] = (24));

} else {
var statearr_28512_28553 = state_28489__$1;
(statearr_28512_28553[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (19))){
var inst_28471 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
if(cljs.core.truth_(inst_28471)){
var statearr_28513_28554 = state_28489__$1;
(statearr_28513_28554[(1)] = (20));

} else {
var statearr_28514_28555 = state_28489__$1;
(statearr_28514_28555[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (11))){
var inst_28448 = (state_28489[(8)]);
var inst_28454 = (inst_28448 == null);
var state_28489__$1 = state_28489;
if(cljs.core.truth_(inst_28454)){
var statearr_28515_28556 = state_28489__$1;
(statearr_28515_28556[(1)] = (14));

} else {
var statearr_28516_28557 = state_28489__$1;
(statearr_28516_28557[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (9))){
var inst_28441 = (state_28489[(10)]);
var inst_28441__$1 = (state_28489[(2)]);
var inst_28442 = cljs.core.get.call(null,inst_28441__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28443 = cljs.core.get.call(null,inst_28441__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28444 = cljs.core.get.call(null,inst_28441__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28489__$1 = (function (){var statearr_28517 = state_28489;
(statearr_28517[(17)] = inst_28443);

(statearr_28517[(10)] = inst_28441__$1);

(statearr_28517[(15)] = inst_28444);

return statearr_28517;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28489__$1,(10),inst_28442);
} else {
if((state_val_28490 === (5))){
var inst_28433 = (state_28489[(7)]);
var inst_28436 = cljs.core.seq_QMARK_.call(null,inst_28433);
var state_28489__$1 = state_28489;
if(inst_28436){
var statearr_28518_28558 = state_28489__$1;
(statearr_28518_28558[(1)] = (7));

} else {
var statearr_28519_28559 = state_28489__$1;
(statearr_28519_28559[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (14))){
var inst_28449 = (state_28489[(16)]);
var inst_28456 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28449);
var state_28489__$1 = state_28489;
var statearr_28520_28560 = state_28489__$1;
(statearr_28520_28560[(2)] = inst_28456);

(statearr_28520_28560[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (26))){
var inst_28479 = (state_28489[(2)]);
var state_28489__$1 = state_28489;
var statearr_28521_28561 = state_28489__$1;
(statearr_28521_28561[(2)] = inst_28479);

(statearr_28521_28561[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (16))){
var inst_28459 = (state_28489[(2)]);
var inst_28460 = calc_state.call(null);
var inst_28433 = inst_28460;
var state_28489__$1 = (function (){var statearr_28522 = state_28489;
(statearr_28522[(7)] = inst_28433);

(statearr_28522[(18)] = inst_28459);

return statearr_28522;
})();
var statearr_28523_28562 = state_28489__$1;
(statearr_28523_28562[(2)] = null);

(statearr_28523_28562[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (10))){
var inst_28448 = (state_28489[(8)]);
var inst_28449 = (state_28489[(16)]);
var inst_28447 = (state_28489[(2)]);
var inst_28448__$1 = cljs.core.nth.call(null,inst_28447,(0),null);
var inst_28449__$1 = cljs.core.nth.call(null,inst_28447,(1),null);
var inst_28450 = (inst_28448__$1 == null);
var inst_28451 = cljs.core._EQ_.call(null,inst_28449__$1,change);
var inst_28452 = (inst_28450) || (inst_28451);
var state_28489__$1 = (function (){var statearr_28524 = state_28489;
(statearr_28524[(8)] = inst_28448__$1);

(statearr_28524[(16)] = inst_28449__$1);

return statearr_28524;
})();
if(cljs.core.truth_(inst_28452)){
var statearr_28525_28563 = state_28489__$1;
(statearr_28525_28563[(1)] = (11));

} else {
var statearr_28526_28564 = state_28489__$1;
(statearr_28526_28564[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (18))){
var inst_28443 = (state_28489[(17)]);
var inst_28444 = (state_28489[(15)]);
var inst_28449 = (state_28489[(16)]);
var inst_28466 = cljs.core.empty_QMARK_.call(null,inst_28444);
var inst_28467 = inst_28443.call(null,inst_28449);
var inst_28468 = cljs.core.not.call(null,inst_28467);
var inst_28469 = (inst_28466) && (inst_28468);
var state_28489__$1 = state_28489;
var statearr_28527_28565 = state_28489__$1;
(statearr_28527_28565[(2)] = inst_28469);

(statearr_28527_28565[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28490 === (8))){
var inst_28433 = (state_28489[(7)]);
var state_28489__$1 = state_28489;
var statearr_28528_28566 = state_28489__$1;
(statearr_28528_28566[(2)] = inst_28433);

(statearr_28528_28566[(1)] = (9));


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
});})(c__15967__auto___28536,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15911__auto__,c__15967__auto___28536,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_28532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28532[(0)] = state_machine__15912__auto__);

(statearr_28532[(1)] = (1));

return statearr_28532;
});
var state_machine__15912__auto____1 = (function (state_28489){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_28489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e28533){if((e28533 instanceof Object)){
var ex__15915__auto__ = e28533;
var statearr_28534_28567 = state_28489;
(statearr_28534_28567[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28568 = state_28489;
state_28489 = G__28568;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_28489){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_28489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto___28536,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15969__auto__ = (function (){var statearr_28535 = f__15968__auto__.call(null);
(statearr_28535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___28536);

return statearr_28535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto___28536,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj28570 = {};
return obj28570;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__13311__auto__ = p;
if(and__13311__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__13311__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__13967__auto__ = (((p == null))?null:p);
return (function (){var or__13323__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13967__auto__)]);
if(or__13323__auto__){
return or__13323__auto__;
} else {
var or__13323__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__13323__auto____$1){
return or__13323__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__13311__auto__ = p;
if(and__13311__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__13311__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__13967__auto__ = (((p == null))?null:p);
return (function (){var or__13323__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13967__auto__)]);
if(or__13323__auto__){
return or__13323__auto__;
} else {
var or__13323__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__13323__auto____$1){
return or__13323__auto____$1;
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
if((function (){var and__13311__auto__ = p;
if(and__13311__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__13311__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__13967__auto__ = (((p == null))?null:p);
return (function (){var or__13323__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13967__auto__)]);
if(or__13323__auto__){
return or__13323__auto__;
} else {
var or__13323__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__13323__auto____$1){
return or__13323__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__13311__auto__ = p;
if(and__13311__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__13311__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__13967__auto__ = (((p == null))?null:p);
return (function (){var or__13323__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13967__auto__)]);
if(or__13323__auto__){
return or__13323__auto__;
} else {
var or__13323__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__13323__auto____$1){
return or__13323__auto____$1;
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
var or__13323__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__13323__auto__)){
return or__13323__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__13323__auto__,mults){
return (function (p1__28571_SHARP_){
if(cljs.core.truth_(p1__28571_SHARP_.call(null,topic))){
return p1__28571_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28571_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13323__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28694 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28694 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta28695){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta28695 = meta28695;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28694.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28694.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28694.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t28694.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28694.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28694.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28694.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28694.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28696){
var self__ = this;
var _28696__$1 = this;
return self__.meta28695;
});})(mults,ensure_mult))
;

cljs.core.async.t28694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28696,meta28695__$1){
var self__ = this;
var _28696__$1 = this;
return (new cljs.core.async.t28694(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta28695__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28694.cljs$lang$type = true;

cljs.core.async.t28694.cljs$lang$ctorStr = "cljs.core.async/t28694";

cljs.core.async.t28694.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13910__auto__,writer__13911__auto__,opt__13912__auto__){
return cljs.core._write.call(null,writer__13911__auto__,"cljs.core.async/t28694");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28694 = ((function (mults,ensure_mult){
return (function __GT_t28694(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28695){
return (new cljs.core.async.t28694(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28695));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28694(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15967__auto___28816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto___28816,mults,ensure_mult,p){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto___28816,mults,ensure_mult,p){
return (function (state_28768){
var state_val_28769 = (state_28768[(1)]);
if((state_val_28769 === (7))){
var inst_28764 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
var statearr_28770_28817 = state_28768__$1;
(statearr_28770_28817[(2)] = inst_28764);

(statearr_28770_28817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (20))){
var state_28768__$1 = state_28768;
var statearr_28771_28818 = state_28768__$1;
(statearr_28771_28818[(2)] = null);

(statearr_28771_28818[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (1))){
var state_28768__$1 = state_28768;
var statearr_28772_28819 = state_28768__$1;
(statearr_28772_28819[(2)] = null);

(statearr_28772_28819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (24))){
var inst_28747 = (state_28768[(7)]);
var inst_28756 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28747);
var state_28768__$1 = state_28768;
var statearr_28773_28820 = state_28768__$1;
(statearr_28773_28820[(2)] = inst_28756);

(statearr_28773_28820[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (4))){
var inst_28699 = (state_28768[(8)]);
var inst_28699__$1 = (state_28768[(2)]);
var inst_28700 = (inst_28699__$1 == null);
var state_28768__$1 = (function (){var statearr_28774 = state_28768;
(statearr_28774[(8)] = inst_28699__$1);

return statearr_28774;
})();
if(cljs.core.truth_(inst_28700)){
var statearr_28775_28821 = state_28768__$1;
(statearr_28775_28821[(1)] = (5));

} else {
var statearr_28776_28822 = state_28768__$1;
(statearr_28776_28822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (15))){
var inst_28741 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
var statearr_28777_28823 = state_28768__$1;
(statearr_28777_28823[(2)] = inst_28741);

(statearr_28777_28823[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (21))){
var inst_28761 = (state_28768[(2)]);
var state_28768__$1 = (function (){var statearr_28778 = state_28768;
(statearr_28778[(9)] = inst_28761);

return statearr_28778;
})();
var statearr_28779_28824 = state_28768__$1;
(statearr_28779_28824[(2)] = null);

(statearr_28779_28824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (13))){
var inst_28723 = (state_28768[(10)]);
var inst_28725 = cljs.core.chunked_seq_QMARK_.call(null,inst_28723);
var state_28768__$1 = state_28768;
if(inst_28725){
var statearr_28780_28825 = state_28768__$1;
(statearr_28780_28825[(1)] = (16));

} else {
var statearr_28781_28826 = state_28768__$1;
(statearr_28781_28826[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (22))){
var inst_28753 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
if(cljs.core.truth_(inst_28753)){
var statearr_28782_28827 = state_28768__$1;
(statearr_28782_28827[(1)] = (23));

} else {
var statearr_28783_28828 = state_28768__$1;
(statearr_28783_28828[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (6))){
var inst_28699 = (state_28768[(8)]);
var inst_28749 = (state_28768[(11)]);
var inst_28747 = (state_28768[(7)]);
var inst_28747__$1 = topic_fn.call(null,inst_28699);
var inst_28748 = cljs.core.deref.call(null,mults);
var inst_28749__$1 = cljs.core.get.call(null,inst_28748,inst_28747__$1);
var state_28768__$1 = (function (){var statearr_28784 = state_28768;
(statearr_28784[(11)] = inst_28749__$1);

(statearr_28784[(7)] = inst_28747__$1);

return statearr_28784;
})();
if(cljs.core.truth_(inst_28749__$1)){
var statearr_28785_28829 = state_28768__$1;
(statearr_28785_28829[(1)] = (19));

} else {
var statearr_28786_28830 = state_28768__$1;
(statearr_28786_28830[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (25))){
var inst_28758 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
var statearr_28787_28831 = state_28768__$1;
(statearr_28787_28831[(2)] = inst_28758);

(statearr_28787_28831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (17))){
var inst_28723 = (state_28768[(10)]);
var inst_28732 = cljs.core.first.call(null,inst_28723);
var inst_28733 = cljs.core.async.muxch_STAR_.call(null,inst_28732);
var inst_28734 = cljs.core.async.close_BANG_.call(null,inst_28733);
var inst_28735 = cljs.core.next.call(null,inst_28723);
var inst_28709 = inst_28735;
var inst_28710 = null;
var inst_28711 = (0);
var inst_28712 = (0);
var state_28768__$1 = (function (){var statearr_28788 = state_28768;
(statearr_28788[(12)] = inst_28709);

(statearr_28788[(13)] = inst_28711);

(statearr_28788[(14)] = inst_28710);

(statearr_28788[(15)] = inst_28734);

(statearr_28788[(16)] = inst_28712);

return statearr_28788;
})();
var statearr_28789_28832 = state_28768__$1;
(statearr_28789_28832[(2)] = null);

(statearr_28789_28832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (3))){
var inst_28766 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28768__$1,inst_28766);
} else {
if((state_val_28769 === (12))){
var inst_28743 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
var statearr_28790_28833 = state_28768__$1;
(statearr_28790_28833[(2)] = inst_28743);

(statearr_28790_28833[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (2))){
var state_28768__$1 = state_28768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28768__$1,(4),ch);
} else {
if((state_val_28769 === (23))){
var state_28768__$1 = state_28768;
var statearr_28791_28834 = state_28768__$1;
(statearr_28791_28834[(2)] = null);

(statearr_28791_28834[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (19))){
var inst_28699 = (state_28768[(8)]);
var inst_28749 = (state_28768[(11)]);
var inst_28751 = cljs.core.async.muxch_STAR_.call(null,inst_28749);
var state_28768__$1 = state_28768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28768__$1,(22),inst_28751,inst_28699);
} else {
if((state_val_28769 === (11))){
var inst_28709 = (state_28768[(12)]);
var inst_28723 = (state_28768[(10)]);
var inst_28723__$1 = cljs.core.seq.call(null,inst_28709);
var state_28768__$1 = (function (){var statearr_28792 = state_28768;
(statearr_28792[(10)] = inst_28723__$1);

return statearr_28792;
})();
if(inst_28723__$1){
var statearr_28793_28835 = state_28768__$1;
(statearr_28793_28835[(1)] = (13));

} else {
var statearr_28794_28836 = state_28768__$1;
(statearr_28794_28836[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (9))){
var inst_28745 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
var statearr_28795_28837 = state_28768__$1;
(statearr_28795_28837[(2)] = inst_28745);

(statearr_28795_28837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (5))){
var inst_28706 = cljs.core.deref.call(null,mults);
var inst_28707 = cljs.core.vals.call(null,inst_28706);
var inst_28708 = cljs.core.seq.call(null,inst_28707);
var inst_28709 = inst_28708;
var inst_28710 = null;
var inst_28711 = (0);
var inst_28712 = (0);
var state_28768__$1 = (function (){var statearr_28796 = state_28768;
(statearr_28796[(12)] = inst_28709);

(statearr_28796[(13)] = inst_28711);

(statearr_28796[(14)] = inst_28710);

(statearr_28796[(16)] = inst_28712);

return statearr_28796;
})();
var statearr_28797_28838 = state_28768__$1;
(statearr_28797_28838[(2)] = null);

(statearr_28797_28838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (14))){
var state_28768__$1 = state_28768;
var statearr_28801_28839 = state_28768__$1;
(statearr_28801_28839[(2)] = null);

(statearr_28801_28839[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (16))){
var inst_28723 = (state_28768[(10)]);
var inst_28727 = cljs.core.chunk_first.call(null,inst_28723);
var inst_28728 = cljs.core.chunk_rest.call(null,inst_28723);
var inst_28729 = cljs.core.count.call(null,inst_28727);
var inst_28709 = inst_28728;
var inst_28710 = inst_28727;
var inst_28711 = inst_28729;
var inst_28712 = (0);
var state_28768__$1 = (function (){var statearr_28802 = state_28768;
(statearr_28802[(12)] = inst_28709);

(statearr_28802[(13)] = inst_28711);

(statearr_28802[(14)] = inst_28710);

(statearr_28802[(16)] = inst_28712);

return statearr_28802;
})();
var statearr_28803_28840 = state_28768__$1;
(statearr_28803_28840[(2)] = null);

(statearr_28803_28840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (10))){
var inst_28709 = (state_28768[(12)]);
var inst_28711 = (state_28768[(13)]);
var inst_28710 = (state_28768[(14)]);
var inst_28712 = (state_28768[(16)]);
var inst_28717 = cljs.core._nth.call(null,inst_28710,inst_28712);
var inst_28718 = cljs.core.async.muxch_STAR_.call(null,inst_28717);
var inst_28719 = cljs.core.async.close_BANG_.call(null,inst_28718);
var inst_28720 = (inst_28712 + (1));
var tmp28798 = inst_28709;
var tmp28799 = inst_28711;
var tmp28800 = inst_28710;
var inst_28709__$1 = tmp28798;
var inst_28710__$1 = tmp28800;
var inst_28711__$1 = tmp28799;
var inst_28712__$1 = inst_28720;
var state_28768__$1 = (function (){var statearr_28804 = state_28768;
(statearr_28804[(12)] = inst_28709__$1);

(statearr_28804[(17)] = inst_28719);

(statearr_28804[(13)] = inst_28711__$1);

(statearr_28804[(14)] = inst_28710__$1);

(statearr_28804[(16)] = inst_28712__$1);

return statearr_28804;
})();
var statearr_28805_28841 = state_28768__$1;
(statearr_28805_28841[(2)] = null);

(statearr_28805_28841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (18))){
var inst_28738 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
var statearr_28806_28842 = state_28768__$1;
(statearr_28806_28842[(2)] = inst_28738);

(statearr_28806_28842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (8))){
var inst_28711 = (state_28768[(13)]);
var inst_28712 = (state_28768[(16)]);
var inst_28714 = (inst_28712 < inst_28711);
var inst_28715 = inst_28714;
var state_28768__$1 = state_28768;
if(cljs.core.truth_(inst_28715)){
var statearr_28807_28843 = state_28768__$1;
(statearr_28807_28843[(1)] = (10));

} else {
var statearr_28808_28844 = state_28768__$1;
(statearr_28808_28844[(1)] = (11));

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
});})(c__15967__auto___28816,mults,ensure_mult,p))
;
return ((function (switch__15911__auto__,c__15967__auto___28816,mults,ensure_mult,p){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_28812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28812[(0)] = state_machine__15912__auto__);

(statearr_28812[(1)] = (1));

return statearr_28812;
});
var state_machine__15912__auto____1 = (function (state_28768){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_28768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e28813){if((e28813 instanceof Object)){
var ex__15915__auto__ = e28813;
var statearr_28814_28845 = state_28768;
(statearr_28814_28845[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28846 = state_28768;
state_28768 = G__28846;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_28768){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_28768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto___28816,mults,ensure_mult,p))
})();
var state__15969__auto__ = (function (){var statearr_28815 = f__15968__auto__.call(null);
(statearr_28815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___28816);

return statearr_28815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto___28816,mults,ensure_mult,p))
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
var c__15967__auto___28983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto___28983,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto___28983,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28953){
var state_val_28954 = (state_28953[(1)]);
if((state_val_28954 === (7))){
var state_28953__$1 = state_28953;
var statearr_28955_28984 = state_28953__$1;
(statearr_28955_28984[(2)] = null);

(statearr_28955_28984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (1))){
var state_28953__$1 = state_28953;
var statearr_28956_28985 = state_28953__$1;
(statearr_28956_28985[(2)] = null);

(statearr_28956_28985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (4))){
var inst_28917 = (state_28953[(7)]);
var inst_28919 = (inst_28917 < cnt);
var state_28953__$1 = state_28953;
if(cljs.core.truth_(inst_28919)){
var statearr_28957_28986 = state_28953__$1;
(statearr_28957_28986[(1)] = (6));

} else {
var statearr_28958_28987 = state_28953__$1;
(statearr_28958_28987[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (15))){
var inst_28949 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
var statearr_28959_28988 = state_28953__$1;
(statearr_28959_28988[(2)] = inst_28949);

(statearr_28959_28988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (13))){
var inst_28942 = cljs.core.async.close_BANG_.call(null,out);
var state_28953__$1 = state_28953;
var statearr_28960_28989 = state_28953__$1;
(statearr_28960_28989[(2)] = inst_28942);

(statearr_28960_28989[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (6))){
var state_28953__$1 = state_28953;
var statearr_28961_28990 = state_28953__$1;
(statearr_28961_28990[(2)] = null);

(statearr_28961_28990[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (3))){
var inst_28951 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28953__$1,inst_28951);
} else {
if((state_val_28954 === (12))){
var inst_28939 = (state_28953[(8)]);
var inst_28939__$1 = (state_28953[(2)]);
var inst_28940 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28939__$1);
var state_28953__$1 = (function (){var statearr_28962 = state_28953;
(statearr_28962[(8)] = inst_28939__$1);

return statearr_28962;
})();
if(cljs.core.truth_(inst_28940)){
var statearr_28963_28991 = state_28953__$1;
(statearr_28963_28991[(1)] = (13));

} else {
var statearr_28964_28992 = state_28953__$1;
(statearr_28964_28992[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (2))){
var inst_28916 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28917 = (0);
var state_28953__$1 = (function (){var statearr_28965 = state_28953;
(statearr_28965[(9)] = inst_28916);

(statearr_28965[(7)] = inst_28917);

return statearr_28965;
})();
var statearr_28966_28993 = state_28953__$1;
(statearr_28966_28993[(2)] = null);

(statearr_28966_28993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (11))){
var inst_28917 = (state_28953[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28953,(10),Object,null,(9));
var inst_28926 = chs__$1.call(null,inst_28917);
var inst_28927 = done.call(null,inst_28917);
var inst_28928 = cljs.core.async.take_BANG_.call(null,inst_28926,inst_28927);
var state_28953__$1 = state_28953;
var statearr_28967_28994 = state_28953__$1;
(statearr_28967_28994[(2)] = inst_28928);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28953__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (9))){
var inst_28917 = (state_28953[(7)]);
var inst_28930 = (state_28953[(2)]);
var inst_28931 = (inst_28917 + (1));
var inst_28917__$1 = inst_28931;
var state_28953__$1 = (function (){var statearr_28968 = state_28953;
(statearr_28968[(7)] = inst_28917__$1);

(statearr_28968[(10)] = inst_28930);

return statearr_28968;
})();
var statearr_28969_28995 = state_28953__$1;
(statearr_28969_28995[(2)] = null);

(statearr_28969_28995[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (5))){
var inst_28937 = (state_28953[(2)]);
var state_28953__$1 = (function (){var statearr_28970 = state_28953;
(statearr_28970[(11)] = inst_28937);

return statearr_28970;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28953__$1,(12),dchan);
} else {
if((state_val_28954 === (14))){
var inst_28939 = (state_28953[(8)]);
var inst_28944 = cljs.core.apply.call(null,f,inst_28939);
var state_28953__$1 = state_28953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28953__$1,(16),out,inst_28944);
} else {
if((state_val_28954 === (16))){
var inst_28946 = (state_28953[(2)]);
var state_28953__$1 = (function (){var statearr_28971 = state_28953;
(statearr_28971[(12)] = inst_28946);

return statearr_28971;
})();
var statearr_28972_28996 = state_28953__$1;
(statearr_28972_28996[(2)] = null);

(statearr_28972_28996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (10))){
var inst_28921 = (state_28953[(2)]);
var inst_28922 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28953__$1 = (function (){var statearr_28973 = state_28953;
(statearr_28973[(13)] = inst_28921);

return statearr_28973;
})();
var statearr_28974_28997 = state_28953__$1;
(statearr_28974_28997[(2)] = inst_28922);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28953__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (8))){
var inst_28935 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
var statearr_28975_28998 = state_28953__$1;
(statearr_28975_28998[(2)] = inst_28935);

(statearr_28975_28998[(1)] = (5));


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
});})(c__15967__auto___28983,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15911__auto__,c__15967__auto___28983,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_28979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28979[(0)] = state_machine__15912__auto__);

(statearr_28979[(1)] = (1));

return statearr_28979;
});
var state_machine__15912__auto____1 = (function (state_28953){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_28953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e28980){if((e28980 instanceof Object)){
var ex__15915__auto__ = e28980;
var statearr_28981_28999 = state_28953;
(statearr_28981_28999[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29000 = state_28953;
state_28953 = G__29000;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_28953){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_28953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto___28983,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15969__auto__ = (function (){var statearr_28982 = f__15968__auto__.call(null);
(statearr_28982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___28983);

return statearr_28982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto___28983,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__15967__auto___29108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto___29108,out){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto___29108,out){
return (function (state_29084){
var state_val_29085 = (state_29084[(1)]);
if((state_val_29085 === (7))){
var inst_29064 = (state_29084[(7)]);
var inst_29063 = (state_29084[(8)]);
var inst_29063__$1 = (state_29084[(2)]);
var inst_29064__$1 = cljs.core.nth.call(null,inst_29063__$1,(0),null);
var inst_29065 = cljs.core.nth.call(null,inst_29063__$1,(1),null);
var inst_29066 = (inst_29064__$1 == null);
var state_29084__$1 = (function (){var statearr_29086 = state_29084;
(statearr_29086[(7)] = inst_29064__$1);

(statearr_29086[(9)] = inst_29065);

(statearr_29086[(8)] = inst_29063__$1);

return statearr_29086;
})();
if(cljs.core.truth_(inst_29066)){
var statearr_29087_29109 = state_29084__$1;
(statearr_29087_29109[(1)] = (8));

} else {
var statearr_29088_29110 = state_29084__$1;
(statearr_29088_29110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (1))){
var inst_29055 = cljs.core.vec.call(null,chs);
var inst_29056 = inst_29055;
var state_29084__$1 = (function (){var statearr_29089 = state_29084;
(statearr_29089[(10)] = inst_29056);

return statearr_29089;
})();
var statearr_29090_29111 = state_29084__$1;
(statearr_29090_29111[(2)] = null);

(statearr_29090_29111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (4))){
var inst_29056 = (state_29084[(10)]);
var state_29084__$1 = state_29084;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29084__$1,(7),inst_29056);
} else {
if((state_val_29085 === (6))){
var inst_29080 = (state_29084[(2)]);
var state_29084__$1 = state_29084;
var statearr_29091_29112 = state_29084__$1;
(statearr_29091_29112[(2)] = inst_29080);

(statearr_29091_29112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (3))){
var inst_29082 = (state_29084[(2)]);
var state_29084__$1 = state_29084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29084__$1,inst_29082);
} else {
if((state_val_29085 === (2))){
var inst_29056 = (state_29084[(10)]);
var inst_29058 = cljs.core.count.call(null,inst_29056);
var inst_29059 = (inst_29058 > (0));
var state_29084__$1 = state_29084;
if(cljs.core.truth_(inst_29059)){
var statearr_29093_29113 = state_29084__$1;
(statearr_29093_29113[(1)] = (4));

} else {
var statearr_29094_29114 = state_29084__$1;
(statearr_29094_29114[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (11))){
var inst_29056 = (state_29084[(10)]);
var inst_29073 = (state_29084[(2)]);
var tmp29092 = inst_29056;
var inst_29056__$1 = tmp29092;
var state_29084__$1 = (function (){var statearr_29095 = state_29084;
(statearr_29095[(10)] = inst_29056__$1);

(statearr_29095[(11)] = inst_29073);

return statearr_29095;
})();
var statearr_29096_29115 = state_29084__$1;
(statearr_29096_29115[(2)] = null);

(statearr_29096_29115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (9))){
var inst_29064 = (state_29084[(7)]);
var state_29084__$1 = state_29084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29084__$1,(11),out,inst_29064);
} else {
if((state_val_29085 === (5))){
var inst_29078 = cljs.core.async.close_BANG_.call(null,out);
var state_29084__$1 = state_29084;
var statearr_29097_29116 = state_29084__$1;
(statearr_29097_29116[(2)] = inst_29078);

(statearr_29097_29116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (10))){
var inst_29076 = (state_29084[(2)]);
var state_29084__$1 = state_29084;
var statearr_29098_29117 = state_29084__$1;
(statearr_29098_29117[(2)] = inst_29076);

(statearr_29098_29117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (8))){
var inst_29064 = (state_29084[(7)]);
var inst_29065 = (state_29084[(9)]);
var inst_29056 = (state_29084[(10)]);
var inst_29063 = (state_29084[(8)]);
var inst_29068 = (function (){var c = inst_29065;
var v = inst_29064;
var vec__29061 = inst_29063;
var cs = inst_29056;
return ((function (c,v,vec__29061,cs,inst_29064,inst_29065,inst_29056,inst_29063,state_val_29085,c__15967__auto___29108,out){
return (function (p1__29001_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29001_SHARP_);
});
;})(c,v,vec__29061,cs,inst_29064,inst_29065,inst_29056,inst_29063,state_val_29085,c__15967__auto___29108,out))
})();
var inst_29069 = cljs.core.filterv.call(null,inst_29068,inst_29056);
var inst_29056__$1 = inst_29069;
var state_29084__$1 = (function (){var statearr_29099 = state_29084;
(statearr_29099[(10)] = inst_29056__$1);

return statearr_29099;
})();
var statearr_29100_29118 = state_29084__$1;
(statearr_29100_29118[(2)] = null);

(statearr_29100_29118[(1)] = (2));


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
});})(c__15967__auto___29108,out))
;
return ((function (switch__15911__auto__,c__15967__auto___29108,out){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_29104 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29104[(0)] = state_machine__15912__auto__);

(statearr_29104[(1)] = (1));

return statearr_29104;
});
var state_machine__15912__auto____1 = (function (state_29084){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_29084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e29105){if((e29105 instanceof Object)){
var ex__15915__auto__ = e29105;
var statearr_29106_29119 = state_29084;
(statearr_29106_29119[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29120 = state_29084;
state_29084 = G__29120;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_29084){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_29084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto___29108,out))
})();
var state__15969__auto__ = (function (){var statearr_29107 = f__15968__auto__.call(null);
(statearr_29107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___29108);

return statearr_29107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto___29108,out))
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
var c__15967__auto___29213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto___29213,out){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto___29213,out){
return (function (state_29190){
var state_val_29191 = (state_29190[(1)]);
if((state_val_29191 === (7))){
var inst_29172 = (state_29190[(7)]);
var inst_29172__$1 = (state_29190[(2)]);
var inst_29173 = (inst_29172__$1 == null);
var inst_29174 = cljs.core.not.call(null,inst_29173);
var state_29190__$1 = (function (){var statearr_29192 = state_29190;
(statearr_29192[(7)] = inst_29172__$1);

return statearr_29192;
})();
if(inst_29174){
var statearr_29193_29214 = state_29190__$1;
(statearr_29193_29214[(1)] = (8));

} else {
var statearr_29194_29215 = state_29190__$1;
(statearr_29194_29215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (1))){
var inst_29167 = (0);
var state_29190__$1 = (function (){var statearr_29195 = state_29190;
(statearr_29195[(8)] = inst_29167);

return statearr_29195;
})();
var statearr_29196_29216 = state_29190__$1;
(statearr_29196_29216[(2)] = null);

(statearr_29196_29216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (4))){
var state_29190__$1 = state_29190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29190__$1,(7),ch);
} else {
if((state_val_29191 === (6))){
var inst_29185 = (state_29190[(2)]);
var state_29190__$1 = state_29190;
var statearr_29197_29217 = state_29190__$1;
(statearr_29197_29217[(2)] = inst_29185);

(statearr_29197_29217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (3))){
var inst_29187 = (state_29190[(2)]);
var inst_29188 = cljs.core.async.close_BANG_.call(null,out);
var state_29190__$1 = (function (){var statearr_29198 = state_29190;
(statearr_29198[(9)] = inst_29187);

return statearr_29198;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29190__$1,inst_29188);
} else {
if((state_val_29191 === (2))){
var inst_29167 = (state_29190[(8)]);
var inst_29169 = (inst_29167 < n);
var state_29190__$1 = state_29190;
if(cljs.core.truth_(inst_29169)){
var statearr_29199_29218 = state_29190__$1;
(statearr_29199_29218[(1)] = (4));

} else {
var statearr_29200_29219 = state_29190__$1;
(statearr_29200_29219[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (11))){
var inst_29167 = (state_29190[(8)]);
var inst_29177 = (state_29190[(2)]);
var inst_29178 = (inst_29167 + (1));
var inst_29167__$1 = inst_29178;
var state_29190__$1 = (function (){var statearr_29201 = state_29190;
(statearr_29201[(10)] = inst_29177);

(statearr_29201[(8)] = inst_29167__$1);

return statearr_29201;
})();
var statearr_29202_29220 = state_29190__$1;
(statearr_29202_29220[(2)] = null);

(statearr_29202_29220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (9))){
var state_29190__$1 = state_29190;
var statearr_29203_29221 = state_29190__$1;
(statearr_29203_29221[(2)] = null);

(statearr_29203_29221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (5))){
var state_29190__$1 = state_29190;
var statearr_29204_29222 = state_29190__$1;
(statearr_29204_29222[(2)] = null);

(statearr_29204_29222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (10))){
var inst_29182 = (state_29190[(2)]);
var state_29190__$1 = state_29190;
var statearr_29205_29223 = state_29190__$1;
(statearr_29205_29223[(2)] = inst_29182);

(statearr_29205_29223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29191 === (8))){
var inst_29172 = (state_29190[(7)]);
var state_29190__$1 = state_29190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29190__$1,(11),out,inst_29172);
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
});})(c__15967__auto___29213,out))
;
return ((function (switch__15911__auto__,c__15967__auto___29213,out){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_29209 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29209[(0)] = state_machine__15912__auto__);

(statearr_29209[(1)] = (1));

return statearr_29209;
});
var state_machine__15912__auto____1 = (function (state_29190){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_29190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e29210){if((e29210 instanceof Object)){
var ex__15915__auto__ = e29210;
var statearr_29211_29224 = state_29190;
(statearr_29211_29224[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29225 = state_29190;
state_29190 = G__29225;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_29190){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_29190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto___29213,out))
})();
var state__15969__auto__ = (function (){var statearr_29212 = f__15968__auto__.call(null);
(statearr_29212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___29213);

return statearr_29212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto___29213,out))
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
if(typeof cljs.core.async.t29233 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29233 = (function (ch,f,map_LT_,meta29234){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29234 = meta29234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29233.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29233.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29233.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29233.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29236 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29236 = (function (fn1,_,meta29234,map_LT_,f,ch,meta29237){
this.fn1 = fn1;
this._ = _;
this.meta29234 = meta29234;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29237 = meta29237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29236.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29236.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29236.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29226_SHARP_){
return f1.call(null,(((p1__29226_SHARP_ == null))?null:self__.f.call(null,p1__29226_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29236.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29238){
var self__ = this;
var _29238__$1 = this;
return self__.meta29237;
});})(___$1))
;

cljs.core.async.t29236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29238,meta29237__$1){
var self__ = this;
var _29238__$1 = this;
return (new cljs.core.async.t29236(self__.fn1,self__._,self__.meta29234,self__.map_LT_,self__.f,self__.ch,meta29237__$1));
});})(___$1))
;

cljs.core.async.t29236.cljs$lang$type = true;

cljs.core.async.t29236.cljs$lang$ctorStr = "cljs.core.async/t29236";

cljs.core.async.t29236.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13910__auto__,writer__13911__auto__,opt__13912__auto__){
return cljs.core._write.call(null,writer__13911__auto__,"cljs.core.async/t29236");
});})(___$1))
;

cljs.core.async.__GT_t29236 = ((function (___$1){
return (function __GT_t29236(fn1__$1,___$2,meta29234__$1,map_LT___$1,f__$1,ch__$1,meta29237){
return (new cljs.core.async.t29236(fn1__$1,___$2,meta29234__$1,map_LT___$1,f__$1,ch__$1,meta29237));
});})(___$1))
;

}

return (new cljs.core.async.t29236(fn1,___$1,self__.meta29234,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__13311__auto__ = ret;
if(cljs.core.truth_(and__13311__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__13311__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t29233.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29233.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29233.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29235){
var self__ = this;
var _29235__$1 = this;
return self__.meta29234;
});

cljs.core.async.t29233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29235,meta29234__$1){
var self__ = this;
var _29235__$1 = this;
return (new cljs.core.async.t29233(self__.ch,self__.f,self__.map_LT_,meta29234__$1));
});

cljs.core.async.t29233.cljs$lang$type = true;

cljs.core.async.t29233.cljs$lang$ctorStr = "cljs.core.async/t29233";

cljs.core.async.t29233.cljs$lang$ctorPrWriter = (function (this__13910__auto__,writer__13911__auto__,opt__13912__auto__){
return cljs.core._write.call(null,writer__13911__auto__,"cljs.core.async/t29233");
});

cljs.core.async.__GT_t29233 = (function __GT_t29233(ch__$1,f__$1,map_LT___$1,meta29234){
return (new cljs.core.async.t29233(ch__$1,f__$1,map_LT___$1,meta29234));
});

}

return (new cljs.core.async.t29233(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t29242 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29242 = (function (ch,f,map_GT_,meta29243){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29243 = meta29243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29242.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29242.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29242.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29242.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29242.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29242.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29244){
var self__ = this;
var _29244__$1 = this;
return self__.meta29243;
});

cljs.core.async.t29242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29244,meta29243__$1){
var self__ = this;
var _29244__$1 = this;
return (new cljs.core.async.t29242(self__.ch,self__.f,self__.map_GT_,meta29243__$1));
});

cljs.core.async.t29242.cljs$lang$type = true;

cljs.core.async.t29242.cljs$lang$ctorStr = "cljs.core.async/t29242";

cljs.core.async.t29242.cljs$lang$ctorPrWriter = (function (this__13910__auto__,writer__13911__auto__,opt__13912__auto__){
return cljs.core._write.call(null,writer__13911__auto__,"cljs.core.async/t29242");
});

cljs.core.async.__GT_t29242 = (function __GT_t29242(ch__$1,f__$1,map_GT___$1,meta29243){
return (new cljs.core.async.t29242(ch__$1,f__$1,map_GT___$1,meta29243));
});

}

return (new cljs.core.async.t29242(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t29248 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29248 = (function (ch,p,filter_GT_,meta29249){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29249 = meta29249;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29248.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29248.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29248.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29248.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29248.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29248.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29248.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29250){
var self__ = this;
var _29250__$1 = this;
return self__.meta29249;
});

cljs.core.async.t29248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29250,meta29249__$1){
var self__ = this;
var _29250__$1 = this;
return (new cljs.core.async.t29248(self__.ch,self__.p,self__.filter_GT_,meta29249__$1));
});

cljs.core.async.t29248.cljs$lang$type = true;

cljs.core.async.t29248.cljs$lang$ctorStr = "cljs.core.async/t29248";

cljs.core.async.t29248.cljs$lang$ctorPrWriter = (function (this__13910__auto__,writer__13911__auto__,opt__13912__auto__){
return cljs.core._write.call(null,writer__13911__auto__,"cljs.core.async/t29248");
});

cljs.core.async.__GT_t29248 = (function __GT_t29248(ch__$1,p__$1,filter_GT___$1,meta29249){
return (new cljs.core.async.t29248(ch__$1,p__$1,filter_GT___$1,meta29249));
});

}

return (new cljs.core.async.t29248(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15967__auto___29333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto___29333,out){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto___29333,out){
return (function (state_29312){
var state_val_29313 = (state_29312[(1)]);
if((state_val_29313 === (7))){
var inst_29308 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
var statearr_29314_29334 = state_29312__$1;
(statearr_29314_29334[(2)] = inst_29308);

(statearr_29314_29334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (1))){
var state_29312__$1 = state_29312;
var statearr_29315_29335 = state_29312__$1;
(statearr_29315_29335[(2)] = null);

(statearr_29315_29335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (4))){
var inst_29294 = (state_29312[(7)]);
var inst_29294__$1 = (state_29312[(2)]);
var inst_29295 = (inst_29294__$1 == null);
var state_29312__$1 = (function (){var statearr_29316 = state_29312;
(statearr_29316[(7)] = inst_29294__$1);

return statearr_29316;
})();
if(cljs.core.truth_(inst_29295)){
var statearr_29317_29336 = state_29312__$1;
(statearr_29317_29336[(1)] = (5));

} else {
var statearr_29318_29337 = state_29312__$1;
(statearr_29318_29337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (6))){
var inst_29294 = (state_29312[(7)]);
var inst_29299 = p.call(null,inst_29294);
var state_29312__$1 = state_29312;
if(cljs.core.truth_(inst_29299)){
var statearr_29319_29338 = state_29312__$1;
(statearr_29319_29338[(1)] = (8));

} else {
var statearr_29320_29339 = state_29312__$1;
(statearr_29320_29339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (3))){
var inst_29310 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29312__$1,inst_29310);
} else {
if((state_val_29313 === (2))){
var state_29312__$1 = state_29312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29312__$1,(4),ch);
} else {
if((state_val_29313 === (11))){
var inst_29302 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
var statearr_29321_29340 = state_29312__$1;
(statearr_29321_29340[(2)] = inst_29302);

(statearr_29321_29340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (9))){
var state_29312__$1 = state_29312;
var statearr_29322_29341 = state_29312__$1;
(statearr_29322_29341[(2)] = null);

(statearr_29322_29341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (5))){
var inst_29297 = cljs.core.async.close_BANG_.call(null,out);
var state_29312__$1 = state_29312;
var statearr_29323_29342 = state_29312__$1;
(statearr_29323_29342[(2)] = inst_29297);

(statearr_29323_29342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (10))){
var inst_29305 = (state_29312[(2)]);
var state_29312__$1 = (function (){var statearr_29324 = state_29312;
(statearr_29324[(8)] = inst_29305);

return statearr_29324;
})();
var statearr_29325_29343 = state_29312__$1;
(statearr_29325_29343[(2)] = null);

(statearr_29325_29343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (8))){
var inst_29294 = (state_29312[(7)]);
var state_29312__$1 = state_29312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29312__$1,(11),out,inst_29294);
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
});})(c__15967__auto___29333,out))
;
return ((function (switch__15911__auto__,c__15967__auto___29333,out){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_29329 = [null,null,null,null,null,null,null,null,null];
(statearr_29329[(0)] = state_machine__15912__auto__);

(statearr_29329[(1)] = (1));

return statearr_29329;
});
var state_machine__15912__auto____1 = (function (state_29312){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_29312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e29330){if((e29330 instanceof Object)){
var ex__15915__auto__ = e29330;
var statearr_29331_29344 = state_29312;
(statearr_29331_29344[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29345 = state_29312;
state_29312 = G__29345;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_29312){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_29312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto___29333,out))
})();
var state__15969__auto__ = (function (){var statearr_29332 = f__15968__auto__.call(null);
(statearr_29332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___29333);

return statearr_29332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto___29333,out))
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
var c__15967__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto__){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto__){
return (function (state_29511){
var state_val_29512 = (state_29511[(1)]);
if((state_val_29512 === (7))){
var inst_29507 = (state_29511[(2)]);
var state_29511__$1 = state_29511;
var statearr_29513_29554 = state_29511__$1;
(statearr_29513_29554[(2)] = inst_29507);

(statearr_29513_29554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (20))){
var inst_29477 = (state_29511[(7)]);
var inst_29488 = (state_29511[(2)]);
var inst_29489 = cljs.core.next.call(null,inst_29477);
var inst_29463 = inst_29489;
var inst_29464 = null;
var inst_29465 = (0);
var inst_29466 = (0);
var state_29511__$1 = (function (){var statearr_29514 = state_29511;
(statearr_29514[(8)] = inst_29465);

(statearr_29514[(9)] = inst_29488);

(statearr_29514[(10)] = inst_29463);

(statearr_29514[(11)] = inst_29464);

(statearr_29514[(12)] = inst_29466);

return statearr_29514;
})();
var statearr_29515_29555 = state_29511__$1;
(statearr_29515_29555[(2)] = null);

(statearr_29515_29555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (1))){
var state_29511__$1 = state_29511;
var statearr_29516_29556 = state_29511__$1;
(statearr_29516_29556[(2)] = null);

(statearr_29516_29556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (4))){
var inst_29452 = (state_29511[(13)]);
var inst_29452__$1 = (state_29511[(2)]);
var inst_29453 = (inst_29452__$1 == null);
var state_29511__$1 = (function (){var statearr_29517 = state_29511;
(statearr_29517[(13)] = inst_29452__$1);

return statearr_29517;
})();
if(cljs.core.truth_(inst_29453)){
var statearr_29518_29557 = state_29511__$1;
(statearr_29518_29557[(1)] = (5));

} else {
var statearr_29519_29558 = state_29511__$1;
(statearr_29519_29558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (15))){
var state_29511__$1 = state_29511;
var statearr_29523_29559 = state_29511__$1;
(statearr_29523_29559[(2)] = null);

(statearr_29523_29559[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (21))){
var state_29511__$1 = state_29511;
var statearr_29524_29560 = state_29511__$1;
(statearr_29524_29560[(2)] = null);

(statearr_29524_29560[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (13))){
var inst_29465 = (state_29511[(8)]);
var inst_29463 = (state_29511[(10)]);
var inst_29464 = (state_29511[(11)]);
var inst_29466 = (state_29511[(12)]);
var inst_29473 = (state_29511[(2)]);
var inst_29474 = (inst_29466 + (1));
var tmp29520 = inst_29465;
var tmp29521 = inst_29463;
var tmp29522 = inst_29464;
var inst_29463__$1 = tmp29521;
var inst_29464__$1 = tmp29522;
var inst_29465__$1 = tmp29520;
var inst_29466__$1 = inst_29474;
var state_29511__$1 = (function (){var statearr_29525 = state_29511;
(statearr_29525[(8)] = inst_29465__$1);

(statearr_29525[(10)] = inst_29463__$1);

(statearr_29525[(14)] = inst_29473);

(statearr_29525[(11)] = inst_29464__$1);

(statearr_29525[(12)] = inst_29466__$1);

return statearr_29525;
})();
var statearr_29526_29561 = state_29511__$1;
(statearr_29526_29561[(2)] = null);

(statearr_29526_29561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (22))){
var state_29511__$1 = state_29511;
var statearr_29527_29562 = state_29511__$1;
(statearr_29527_29562[(2)] = null);

(statearr_29527_29562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (6))){
var inst_29452 = (state_29511[(13)]);
var inst_29461 = f.call(null,inst_29452);
var inst_29462 = cljs.core.seq.call(null,inst_29461);
var inst_29463 = inst_29462;
var inst_29464 = null;
var inst_29465 = (0);
var inst_29466 = (0);
var state_29511__$1 = (function (){var statearr_29528 = state_29511;
(statearr_29528[(8)] = inst_29465);

(statearr_29528[(10)] = inst_29463);

(statearr_29528[(11)] = inst_29464);

(statearr_29528[(12)] = inst_29466);

return statearr_29528;
})();
var statearr_29529_29563 = state_29511__$1;
(statearr_29529_29563[(2)] = null);

(statearr_29529_29563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (17))){
var inst_29477 = (state_29511[(7)]);
var inst_29481 = cljs.core.chunk_first.call(null,inst_29477);
var inst_29482 = cljs.core.chunk_rest.call(null,inst_29477);
var inst_29483 = cljs.core.count.call(null,inst_29481);
var inst_29463 = inst_29482;
var inst_29464 = inst_29481;
var inst_29465 = inst_29483;
var inst_29466 = (0);
var state_29511__$1 = (function (){var statearr_29530 = state_29511;
(statearr_29530[(8)] = inst_29465);

(statearr_29530[(10)] = inst_29463);

(statearr_29530[(11)] = inst_29464);

(statearr_29530[(12)] = inst_29466);

return statearr_29530;
})();
var statearr_29531_29564 = state_29511__$1;
(statearr_29531_29564[(2)] = null);

(statearr_29531_29564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (3))){
var inst_29509 = (state_29511[(2)]);
var state_29511__$1 = state_29511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29511__$1,inst_29509);
} else {
if((state_val_29512 === (12))){
var inst_29497 = (state_29511[(2)]);
var state_29511__$1 = state_29511;
var statearr_29532_29565 = state_29511__$1;
(statearr_29532_29565[(2)] = inst_29497);

(statearr_29532_29565[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (2))){
var state_29511__$1 = state_29511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29511__$1,(4),in$);
} else {
if((state_val_29512 === (23))){
var inst_29505 = (state_29511[(2)]);
var state_29511__$1 = state_29511;
var statearr_29533_29566 = state_29511__$1;
(statearr_29533_29566[(2)] = inst_29505);

(statearr_29533_29566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (19))){
var inst_29492 = (state_29511[(2)]);
var state_29511__$1 = state_29511;
var statearr_29534_29567 = state_29511__$1;
(statearr_29534_29567[(2)] = inst_29492);

(statearr_29534_29567[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (11))){
var inst_29477 = (state_29511[(7)]);
var inst_29463 = (state_29511[(10)]);
var inst_29477__$1 = cljs.core.seq.call(null,inst_29463);
var state_29511__$1 = (function (){var statearr_29535 = state_29511;
(statearr_29535[(7)] = inst_29477__$1);

return statearr_29535;
})();
if(inst_29477__$1){
var statearr_29536_29568 = state_29511__$1;
(statearr_29536_29568[(1)] = (14));

} else {
var statearr_29537_29569 = state_29511__$1;
(statearr_29537_29569[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (9))){
var inst_29499 = (state_29511[(2)]);
var inst_29500 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29511__$1 = (function (){var statearr_29538 = state_29511;
(statearr_29538[(15)] = inst_29499);

return statearr_29538;
})();
if(cljs.core.truth_(inst_29500)){
var statearr_29539_29570 = state_29511__$1;
(statearr_29539_29570[(1)] = (21));

} else {
var statearr_29540_29571 = state_29511__$1;
(statearr_29540_29571[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (5))){
var inst_29455 = cljs.core.async.close_BANG_.call(null,out);
var state_29511__$1 = state_29511;
var statearr_29541_29572 = state_29511__$1;
(statearr_29541_29572[(2)] = inst_29455);

(statearr_29541_29572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (14))){
var inst_29477 = (state_29511[(7)]);
var inst_29479 = cljs.core.chunked_seq_QMARK_.call(null,inst_29477);
var state_29511__$1 = state_29511;
if(inst_29479){
var statearr_29542_29573 = state_29511__$1;
(statearr_29542_29573[(1)] = (17));

} else {
var statearr_29543_29574 = state_29511__$1;
(statearr_29543_29574[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (16))){
var inst_29495 = (state_29511[(2)]);
var state_29511__$1 = state_29511;
var statearr_29544_29575 = state_29511__$1;
(statearr_29544_29575[(2)] = inst_29495);

(statearr_29544_29575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (10))){
var inst_29464 = (state_29511[(11)]);
var inst_29466 = (state_29511[(12)]);
var inst_29471 = cljs.core._nth.call(null,inst_29464,inst_29466);
var state_29511__$1 = state_29511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29511__$1,(13),out,inst_29471);
} else {
if((state_val_29512 === (18))){
var inst_29477 = (state_29511[(7)]);
var inst_29486 = cljs.core.first.call(null,inst_29477);
var state_29511__$1 = state_29511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29511__$1,(20),out,inst_29486);
} else {
if((state_val_29512 === (8))){
var inst_29465 = (state_29511[(8)]);
var inst_29466 = (state_29511[(12)]);
var inst_29468 = (inst_29466 < inst_29465);
var inst_29469 = inst_29468;
var state_29511__$1 = state_29511;
if(cljs.core.truth_(inst_29469)){
var statearr_29545_29576 = state_29511__$1;
(statearr_29545_29576[(1)] = (10));

} else {
var statearr_29546_29577 = state_29511__$1;
(statearr_29546_29577[(1)] = (11));

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
});})(c__15967__auto__))
;
return ((function (switch__15911__auto__,c__15967__auto__){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_29550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29550[(0)] = state_machine__15912__auto__);

(statearr_29550[(1)] = (1));

return statearr_29550;
});
var state_machine__15912__auto____1 = (function (state_29511){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_29511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e29551){if((e29551 instanceof Object)){
var ex__15915__auto__ = e29551;
var statearr_29552_29578 = state_29511;
(statearr_29552_29578[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29579 = state_29511;
state_29511 = G__29579;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_29511){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_29511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto__))
})();
var state__15969__auto__ = (function (){var statearr_29553 = f__15968__auto__.call(null);
(statearr_29553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto__);

return statearr_29553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto__))
);

return c__15967__auto__;
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
var c__15967__auto___29676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto___29676,out){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto___29676,out){
return (function (state_29651){
var state_val_29652 = (state_29651[(1)]);
if((state_val_29652 === (7))){
var inst_29646 = (state_29651[(2)]);
var state_29651__$1 = state_29651;
var statearr_29653_29677 = state_29651__$1;
(statearr_29653_29677[(2)] = inst_29646);

(statearr_29653_29677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (1))){
var inst_29628 = null;
var state_29651__$1 = (function (){var statearr_29654 = state_29651;
(statearr_29654[(7)] = inst_29628);

return statearr_29654;
})();
var statearr_29655_29678 = state_29651__$1;
(statearr_29655_29678[(2)] = null);

(statearr_29655_29678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (4))){
var inst_29631 = (state_29651[(8)]);
var inst_29631__$1 = (state_29651[(2)]);
var inst_29632 = (inst_29631__$1 == null);
var inst_29633 = cljs.core.not.call(null,inst_29632);
var state_29651__$1 = (function (){var statearr_29656 = state_29651;
(statearr_29656[(8)] = inst_29631__$1);

return statearr_29656;
})();
if(inst_29633){
var statearr_29657_29679 = state_29651__$1;
(statearr_29657_29679[(1)] = (5));

} else {
var statearr_29658_29680 = state_29651__$1;
(statearr_29658_29680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (6))){
var state_29651__$1 = state_29651;
var statearr_29659_29681 = state_29651__$1;
(statearr_29659_29681[(2)] = null);

(statearr_29659_29681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (3))){
var inst_29648 = (state_29651[(2)]);
var inst_29649 = cljs.core.async.close_BANG_.call(null,out);
var state_29651__$1 = (function (){var statearr_29660 = state_29651;
(statearr_29660[(9)] = inst_29648);

return statearr_29660;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29651__$1,inst_29649);
} else {
if((state_val_29652 === (2))){
var state_29651__$1 = state_29651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29651__$1,(4),ch);
} else {
if((state_val_29652 === (11))){
var inst_29631 = (state_29651[(8)]);
var inst_29640 = (state_29651[(2)]);
var inst_29628 = inst_29631;
var state_29651__$1 = (function (){var statearr_29661 = state_29651;
(statearr_29661[(7)] = inst_29628);

(statearr_29661[(10)] = inst_29640);

return statearr_29661;
})();
var statearr_29662_29682 = state_29651__$1;
(statearr_29662_29682[(2)] = null);

(statearr_29662_29682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (9))){
var inst_29631 = (state_29651[(8)]);
var state_29651__$1 = state_29651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29651__$1,(11),out,inst_29631);
} else {
if((state_val_29652 === (5))){
var inst_29631 = (state_29651[(8)]);
var inst_29628 = (state_29651[(7)]);
var inst_29635 = cljs.core._EQ_.call(null,inst_29631,inst_29628);
var state_29651__$1 = state_29651;
if(inst_29635){
var statearr_29664_29683 = state_29651__$1;
(statearr_29664_29683[(1)] = (8));

} else {
var statearr_29665_29684 = state_29651__$1;
(statearr_29665_29684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (10))){
var inst_29643 = (state_29651[(2)]);
var state_29651__$1 = state_29651;
var statearr_29666_29685 = state_29651__$1;
(statearr_29666_29685[(2)] = inst_29643);

(statearr_29666_29685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (8))){
var inst_29628 = (state_29651[(7)]);
var tmp29663 = inst_29628;
var inst_29628__$1 = tmp29663;
var state_29651__$1 = (function (){var statearr_29667 = state_29651;
(statearr_29667[(7)] = inst_29628__$1);

return statearr_29667;
})();
var statearr_29668_29686 = state_29651__$1;
(statearr_29668_29686[(2)] = null);

(statearr_29668_29686[(1)] = (2));


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
});})(c__15967__auto___29676,out))
;
return ((function (switch__15911__auto__,c__15967__auto___29676,out){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_29672 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29672[(0)] = state_machine__15912__auto__);

(statearr_29672[(1)] = (1));

return statearr_29672;
});
var state_machine__15912__auto____1 = (function (state_29651){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_29651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e29673){if((e29673 instanceof Object)){
var ex__15915__auto__ = e29673;
var statearr_29674_29687 = state_29651;
(statearr_29674_29687[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29688 = state_29651;
state_29651 = G__29688;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_29651){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_29651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto___29676,out))
})();
var state__15969__auto__ = (function (){var statearr_29675 = f__15968__auto__.call(null);
(statearr_29675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___29676);

return statearr_29675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto___29676,out))
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
var c__15967__auto___29823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto___29823,out){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto___29823,out){
return (function (state_29793){
var state_val_29794 = (state_29793[(1)]);
if((state_val_29794 === (7))){
var inst_29789 = (state_29793[(2)]);
var state_29793__$1 = state_29793;
var statearr_29795_29824 = state_29793__$1;
(statearr_29795_29824[(2)] = inst_29789);

(statearr_29795_29824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29794 === (1))){
var inst_29756 = (new Array(n));
var inst_29757 = inst_29756;
var inst_29758 = (0);
var state_29793__$1 = (function (){var statearr_29796 = state_29793;
(statearr_29796[(7)] = inst_29757);

(statearr_29796[(8)] = inst_29758);

return statearr_29796;
})();
var statearr_29797_29825 = state_29793__$1;
(statearr_29797_29825[(2)] = null);

(statearr_29797_29825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29794 === (4))){
var inst_29761 = (state_29793[(9)]);
var inst_29761__$1 = (state_29793[(2)]);
var inst_29762 = (inst_29761__$1 == null);
var inst_29763 = cljs.core.not.call(null,inst_29762);
var state_29793__$1 = (function (){var statearr_29798 = state_29793;
(statearr_29798[(9)] = inst_29761__$1);

return statearr_29798;
})();
if(inst_29763){
var statearr_29799_29826 = state_29793__$1;
(statearr_29799_29826[(1)] = (5));

} else {
var statearr_29800_29827 = state_29793__$1;
(statearr_29800_29827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29794 === (15))){
var inst_29783 = (state_29793[(2)]);
var state_29793__$1 = state_29793;
var statearr_29801_29828 = state_29793__$1;
(statearr_29801_29828[(2)] = inst_29783);

(statearr_29801_29828[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29794 === (13))){
var state_29793__$1 = state_29793;
var statearr_29802_29829 = state_29793__$1;
(statearr_29802_29829[(2)] = null);

(statearr_29802_29829[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29794 === (6))){
var inst_29758 = (state_29793[(8)]);
var inst_29779 = (inst_29758 > (0));
var state_29793__$1 = state_29793;
if(cljs.core.truth_(inst_29779)){
var statearr_29803_29830 = state_29793__$1;
(statearr_29803_29830[(1)] = (12));

} else {
var statearr_29804_29831 = state_29793__$1;
(statearr_29804_29831[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29794 === (3))){
var inst_29791 = (state_29793[(2)]);
var state_29793__$1 = state_29793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29793__$1,inst_29791);
} else {
if((state_val_29794 === (12))){
var inst_29757 = (state_29793[(7)]);
var inst_29781 = cljs.core.vec.call(null,inst_29757);
var state_29793__$1 = state_29793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29793__$1,(15),out,inst_29781);
} else {
if((state_val_29794 === (2))){
var state_29793__$1 = state_29793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29793__$1,(4),ch);
} else {
if((state_val_29794 === (11))){
var inst_29773 = (state_29793[(2)]);
var inst_29774 = (new Array(n));
var inst_29757 = inst_29774;
var inst_29758 = (0);
var state_29793__$1 = (function (){var statearr_29805 = state_29793;
(statearr_29805[(10)] = inst_29773);

(statearr_29805[(7)] = inst_29757);

(statearr_29805[(8)] = inst_29758);

return statearr_29805;
})();
var statearr_29806_29832 = state_29793__$1;
(statearr_29806_29832[(2)] = null);

(statearr_29806_29832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29794 === (9))){
var inst_29757 = (state_29793[(7)]);
var inst_29771 = cljs.core.vec.call(null,inst_29757);
var state_29793__$1 = state_29793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29793__$1,(11),out,inst_29771);
} else {
if((state_val_29794 === (5))){
var inst_29757 = (state_29793[(7)]);
var inst_29758 = (state_29793[(8)]);
var inst_29761 = (state_29793[(9)]);
var inst_29766 = (state_29793[(11)]);
var inst_29765 = (inst_29757[inst_29758] = inst_29761);
var inst_29766__$1 = (inst_29758 + (1));
var inst_29767 = (inst_29766__$1 < n);
var state_29793__$1 = (function (){var statearr_29807 = state_29793;
(statearr_29807[(12)] = inst_29765);

(statearr_29807[(11)] = inst_29766__$1);

return statearr_29807;
})();
if(cljs.core.truth_(inst_29767)){
var statearr_29808_29833 = state_29793__$1;
(statearr_29808_29833[(1)] = (8));

} else {
var statearr_29809_29834 = state_29793__$1;
(statearr_29809_29834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29794 === (14))){
var inst_29786 = (state_29793[(2)]);
var inst_29787 = cljs.core.async.close_BANG_.call(null,out);
var state_29793__$1 = (function (){var statearr_29811 = state_29793;
(statearr_29811[(13)] = inst_29786);

return statearr_29811;
})();
var statearr_29812_29835 = state_29793__$1;
(statearr_29812_29835[(2)] = inst_29787);

(statearr_29812_29835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29794 === (10))){
var inst_29777 = (state_29793[(2)]);
var state_29793__$1 = state_29793;
var statearr_29813_29836 = state_29793__$1;
(statearr_29813_29836[(2)] = inst_29777);

(statearr_29813_29836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29794 === (8))){
var inst_29757 = (state_29793[(7)]);
var inst_29766 = (state_29793[(11)]);
var tmp29810 = inst_29757;
var inst_29757__$1 = tmp29810;
var inst_29758 = inst_29766;
var state_29793__$1 = (function (){var statearr_29814 = state_29793;
(statearr_29814[(7)] = inst_29757__$1);

(statearr_29814[(8)] = inst_29758);

return statearr_29814;
})();
var statearr_29815_29837 = state_29793__$1;
(statearr_29815_29837[(2)] = null);

(statearr_29815_29837[(1)] = (2));


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
});})(c__15967__auto___29823,out))
;
return ((function (switch__15911__auto__,c__15967__auto___29823,out){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_29819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29819[(0)] = state_machine__15912__auto__);

(statearr_29819[(1)] = (1));

return statearr_29819;
});
var state_machine__15912__auto____1 = (function (state_29793){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_29793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e29820){if((e29820 instanceof Object)){
var ex__15915__auto__ = e29820;
var statearr_29821_29838 = state_29793;
(statearr_29821_29838[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29839 = state_29793;
state_29793 = G__29839;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_29793){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_29793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto___29823,out))
})();
var state__15969__auto__ = (function (){var statearr_29822 = f__15968__auto__.call(null);
(statearr_29822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___29823);

return statearr_29822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto___29823,out))
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
var c__15967__auto___29982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15967__auto___29982,out){
return (function (){
var f__15968__auto__ = (function (){var switch__15911__auto__ = ((function (c__15967__auto___29982,out){
return (function (state_29952){
var state_val_29953 = (state_29952[(1)]);
if((state_val_29953 === (7))){
var inst_29948 = (state_29952[(2)]);
var state_29952__$1 = state_29952;
var statearr_29954_29983 = state_29952__$1;
(statearr_29954_29983[(2)] = inst_29948);

(statearr_29954_29983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29953 === (1))){
var inst_29911 = [];
var inst_29912 = inst_29911;
var inst_29913 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29952__$1 = (function (){var statearr_29955 = state_29952;
(statearr_29955[(7)] = inst_29912);

(statearr_29955[(8)] = inst_29913);

return statearr_29955;
})();
var statearr_29956_29984 = state_29952__$1;
(statearr_29956_29984[(2)] = null);

(statearr_29956_29984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29953 === (4))){
var inst_29916 = (state_29952[(9)]);
var inst_29916__$1 = (state_29952[(2)]);
var inst_29917 = (inst_29916__$1 == null);
var inst_29918 = cljs.core.not.call(null,inst_29917);
var state_29952__$1 = (function (){var statearr_29957 = state_29952;
(statearr_29957[(9)] = inst_29916__$1);

return statearr_29957;
})();
if(inst_29918){
var statearr_29958_29985 = state_29952__$1;
(statearr_29958_29985[(1)] = (5));

} else {
var statearr_29959_29986 = state_29952__$1;
(statearr_29959_29986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29953 === (15))){
var inst_29942 = (state_29952[(2)]);
var state_29952__$1 = state_29952;
var statearr_29960_29987 = state_29952__$1;
(statearr_29960_29987[(2)] = inst_29942);

(statearr_29960_29987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29953 === (13))){
var state_29952__$1 = state_29952;
var statearr_29961_29988 = state_29952__$1;
(statearr_29961_29988[(2)] = null);

(statearr_29961_29988[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29953 === (6))){
var inst_29912 = (state_29952[(7)]);
var inst_29937 = inst_29912.length;
var inst_29938 = (inst_29937 > (0));
var state_29952__$1 = state_29952;
if(cljs.core.truth_(inst_29938)){
var statearr_29962_29989 = state_29952__$1;
(statearr_29962_29989[(1)] = (12));

} else {
var statearr_29963_29990 = state_29952__$1;
(statearr_29963_29990[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29953 === (3))){
var inst_29950 = (state_29952[(2)]);
var state_29952__$1 = state_29952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29952__$1,inst_29950);
} else {
if((state_val_29953 === (12))){
var inst_29912 = (state_29952[(7)]);
var inst_29940 = cljs.core.vec.call(null,inst_29912);
var state_29952__$1 = state_29952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29952__$1,(15),out,inst_29940);
} else {
if((state_val_29953 === (2))){
var state_29952__$1 = state_29952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29952__$1,(4),ch);
} else {
if((state_val_29953 === (11))){
var inst_29920 = (state_29952[(10)]);
var inst_29916 = (state_29952[(9)]);
var inst_29930 = (state_29952[(2)]);
var inst_29931 = [];
var inst_29932 = inst_29931.push(inst_29916);
var inst_29912 = inst_29931;
var inst_29913 = inst_29920;
var state_29952__$1 = (function (){var statearr_29964 = state_29952;
(statearr_29964[(11)] = inst_29930);

(statearr_29964[(7)] = inst_29912);

(statearr_29964[(8)] = inst_29913);

(statearr_29964[(12)] = inst_29932);

return statearr_29964;
})();
var statearr_29965_29991 = state_29952__$1;
(statearr_29965_29991[(2)] = null);

(statearr_29965_29991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29953 === (9))){
var inst_29912 = (state_29952[(7)]);
var inst_29928 = cljs.core.vec.call(null,inst_29912);
var state_29952__$1 = state_29952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29952__$1,(11),out,inst_29928);
} else {
if((state_val_29953 === (5))){
var inst_29920 = (state_29952[(10)]);
var inst_29913 = (state_29952[(8)]);
var inst_29916 = (state_29952[(9)]);
var inst_29920__$1 = f.call(null,inst_29916);
var inst_29921 = cljs.core._EQ_.call(null,inst_29920__$1,inst_29913);
var inst_29922 = cljs.core.keyword_identical_QMARK_.call(null,inst_29913,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29923 = (inst_29921) || (inst_29922);
var state_29952__$1 = (function (){var statearr_29966 = state_29952;
(statearr_29966[(10)] = inst_29920__$1);

return statearr_29966;
})();
if(cljs.core.truth_(inst_29923)){
var statearr_29967_29992 = state_29952__$1;
(statearr_29967_29992[(1)] = (8));

} else {
var statearr_29968_29993 = state_29952__$1;
(statearr_29968_29993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29953 === (14))){
var inst_29945 = (state_29952[(2)]);
var inst_29946 = cljs.core.async.close_BANG_.call(null,out);
var state_29952__$1 = (function (){var statearr_29970 = state_29952;
(statearr_29970[(13)] = inst_29945);

return statearr_29970;
})();
var statearr_29971_29994 = state_29952__$1;
(statearr_29971_29994[(2)] = inst_29946);

(statearr_29971_29994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29953 === (10))){
var inst_29935 = (state_29952[(2)]);
var state_29952__$1 = state_29952;
var statearr_29972_29995 = state_29952__$1;
(statearr_29972_29995[(2)] = inst_29935);

(statearr_29972_29995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29953 === (8))){
var inst_29920 = (state_29952[(10)]);
var inst_29912 = (state_29952[(7)]);
var inst_29916 = (state_29952[(9)]);
var inst_29925 = inst_29912.push(inst_29916);
var tmp29969 = inst_29912;
var inst_29912__$1 = tmp29969;
var inst_29913 = inst_29920;
var state_29952__$1 = (function (){var statearr_29973 = state_29952;
(statearr_29973[(7)] = inst_29912__$1);

(statearr_29973[(8)] = inst_29913);

(statearr_29973[(14)] = inst_29925);

return statearr_29973;
})();
var statearr_29974_29996 = state_29952__$1;
(statearr_29974_29996[(2)] = null);

(statearr_29974_29996[(1)] = (2));


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
});})(c__15967__auto___29982,out))
;
return ((function (switch__15911__auto__,c__15967__auto___29982,out){
return (function() {
var state_machine__15912__auto__ = null;
var state_machine__15912__auto____0 = (function (){
var statearr_29978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29978[(0)] = state_machine__15912__auto__);

(statearr_29978[(1)] = (1));

return statearr_29978;
});
var state_machine__15912__auto____1 = (function (state_29952){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_29952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e29979){if((e29979 instanceof Object)){
var ex__15915__auto__ = e29979;
var statearr_29980_29997 = state_29952;
(statearr_29980_29997[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29998 = state_29952;
state_29952 = G__29998;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
state_machine__15912__auto__ = function(state_29952){
switch(arguments.length){
case 0:
return state_machine__15912__auto____0.call(this);
case 1:
return state_machine__15912__auto____1.call(this,state_29952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15912__auto____0;
state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15912__auto____1;
return state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__15967__auto___29982,out))
})();
var state__15969__auto__ = (function (){var statearr_29981 = f__15968__auto__.call(null);
(statearr_29981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15967__auto___29982);

return statearr_29981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15969__auto__);
});})(c__15967__auto___29982,out))
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