// Compiled by ClojureScript 0.0-2816 {:elide-asserts false}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t26840 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26840 = (function (f,fn_handler,meta26841){
this.f = f;
this.fn_handler = fn_handler;
this.meta26841 = meta26841;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26840.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26840.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26840.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26842){
var self__ = this;
var _26842__$1 = this;
return self__.meta26841;
});

cljs.core.async.t26840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26842,meta26841__$1){
var self__ = this;
var _26842__$1 = this;
return (new cljs.core.async.t26840(self__.f,self__.fn_handler,meta26841__$1));
});

cljs.core.async.t26840.cljs$lang$type = true;

cljs.core.async.t26840.cljs$lang$ctorStr = "cljs.core.async/t26840";

cljs.core.async.t26840.cljs$lang$ctorPrWriter = (function (this__13818__auto__,writer__13819__auto__,opt__13820__auto__){
return cljs.core._write.call(null,writer__13819__auto__,"cljs.core.async/t26840");
});

cljs.core.async.__GT_t26840 = (function __GT_t26840(f__$1,fn_handler__$1,meta26841){
return (new cljs.core.async.t26840(f__$1,fn_handler__$1,meta26841));
});

}

return (new cljs.core.async.t26840(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26844 = buff;
if(G__26844){
var bit__13912__auto__ = null;
if(cljs.core.truth_((function (){var or__13231__auto__ = bit__13912__auto__;
if(cljs.core.truth_(or__13231__auto__)){
return or__13231__auto__;
} else {
return G__26844.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26844.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26844);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26844);
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
var val_26845 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26845);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26845,ret){
return (function (){
return fn1.call(null,val_26845);
});})(val_26845,ret))
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
var n__14118__auto___26846 = n;
var x_26847 = (0);
while(true){
if((x_26847 < n__14118__auto___26846)){
(a[x_26847] = (0));

var G__26848 = (x_26847 + (1));
x_26847 = G__26848;
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

var G__26849 = (i + (1));
i = G__26849;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26853 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26853 = (function (flag,alt_flag,meta26854){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26854 = meta26854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26853.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26853.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26855){
var self__ = this;
var _26855__$1 = this;
return self__.meta26854;
});})(flag))
;

cljs.core.async.t26853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26855,meta26854__$1){
var self__ = this;
var _26855__$1 = this;
return (new cljs.core.async.t26853(self__.flag,self__.alt_flag,meta26854__$1));
});})(flag))
;

cljs.core.async.t26853.cljs$lang$type = true;

cljs.core.async.t26853.cljs$lang$ctorStr = "cljs.core.async/t26853";

cljs.core.async.t26853.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13818__auto__,writer__13819__auto__,opt__13820__auto__){
return cljs.core._write.call(null,writer__13819__auto__,"cljs.core.async/t26853");
});})(flag))
;

cljs.core.async.__GT_t26853 = ((function (flag){
return (function __GT_t26853(flag__$1,alt_flag__$1,meta26854){
return (new cljs.core.async.t26853(flag__$1,alt_flag__$1,meta26854));
});})(flag))
;

}

return (new cljs.core.async.t26853(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t26859 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26859 = (function (cb,flag,alt_handler,meta26860){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26860 = meta26860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26859.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26859.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26859.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26861){
var self__ = this;
var _26861__$1 = this;
return self__.meta26860;
});

cljs.core.async.t26859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26861,meta26860__$1){
var self__ = this;
var _26861__$1 = this;
return (new cljs.core.async.t26859(self__.cb,self__.flag,self__.alt_handler,meta26860__$1));
});

cljs.core.async.t26859.cljs$lang$type = true;

cljs.core.async.t26859.cljs$lang$ctorStr = "cljs.core.async/t26859";

cljs.core.async.t26859.cljs$lang$ctorPrWriter = (function (this__13818__auto__,writer__13819__auto__,opt__13820__auto__){
return cljs.core._write.call(null,writer__13819__auto__,"cljs.core.async/t26859");
});

cljs.core.async.__GT_t26859 = (function __GT_t26859(cb__$1,flag__$1,alt_handler__$1,meta26860){
return (new cljs.core.async.t26859(cb__$1,flag__$1,alt_handler__$1,meta26860));
});

}

return (new cljs.core.async.t26859(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26862_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26862_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26863_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26863_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__13231__auto__ = wport;
if(cljs.core.truth_(or__13231__auto__)){
return or__13231__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26864 = (i + (1));
i = G__26864;
continue;
}
} else {
return null;
}
break;
}
})();
var or__13231__auto__ = ret;
if(cljs.core.truth_(or__13231__auto__)){
return or__13231__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__13219__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__13219__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__13219__auto__;
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
var alts_BANG___delegate = function (ports,p__26865){
var map__26867 = p__26865;
var map__26867__$1 = ((cljs.core.seq_QMARK_.call(null,map__26867))?cljs.core.apply.call(null,cljs.core.hash_map,map__26867):map__26867);
var opts = map__26867__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__26865 = null;
if (arguments.length > 1) {
var G__26868__i = 0, G__26868__a = new Array(arguments.length -  1);
while (G__26868__i < G__26868__a.length) {G__26868__a[G__26868__i] = arguments[G__26868__i + 1]; ++G__26868__i;}
  p__26865 = new cljs.core.IndexedSeq(G__26868__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__26865);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__26869){
var ports = cljs.core.first(arglist__26869);
var p__26865 = cljs.core.rest(arglist__26869);
return alts_BANG___delegate(ports,p__26865);
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
var c__15889__auto___26964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto___26964){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto___26964){
return (function (state_26940){
var state_val_26941 = (state_26940[(1)]);
if((state_val_26941 === (7))){
var inst_26936 = (state_26940[(2)]);
var state_26940__$1 = state_26940;
var statearr_26942_26965 = state_26940__$1;
(statearr_26942_26965[(2)] = inst_26936);

(statearr_26942_26965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (1))){
var state_26940__$1 = state_26940;
var statearr_26943_26966 = state_26940__$1;
(statearr_26943_26966[(2)] = null);

(statearr_26943_26966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (4))){
var inst_26919 = (state_26940[(7)]);
var inst_26919__$1 = (state_26940[(2)]);
var inst_26920 = (inst_26919__$1 == null);
var state_26940__$1 = (function (){var statearr_26944 = state_26940;
(statearr_26944[(7)] = inst_26919__$1);

return statearr_26944;
})();
if(cljs.core.truth_(inst_26920)){
var statearr_26945_26967 = state_26940__$1;
(statearr_26945_26967[(1)] = (5));

} else {
var statearr_26946_26968 = state_26940__$1;
(statearr_26946_26968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (13))){
var state_26940__$1 = state_26940;
var statearr_26947_26969 = state_26940__$1;
(statearr_26947_26969[(2)] = null);

(statearr_26947_26969[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (6))){
var inst_26919 = (state_26940[(7)]);
var state_26940__$1 = state_26940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26940__$1,(11),to,inst_26919);
} else {
if((state_val_26941 === (3))){
var inst_26938 = (state_26940[(2)]);
var state_26940__$1 = state_26940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26940__$1,inst_26938);
} else {
if((state_val_26941 === (12))){
var state_26940__$1 = state_26940;
var statearr_26948_26970 = state_26940__$1;
(statearr_26948_26970[(2)] = null);

(statearr_26948_26970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (2))){
var state_26940__$1 = state_26940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26940__$1,(4),from);
} else {
if((state_val_26941 === (11))){
var inst_26929 = (state_26940[(2)]);
var state_26940__$1 = state_26940;
if(cljs.core.truth_(inst_26929)){
var statearr_26949_26971 = state_26940__$1;
(statearr_26949_26971[(1)] = (12));

} else {
var statearr_26950_26972 = state_26940__$1;
(statearr_26950_26972[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (9))){
var state_26940__$1 = state_26940;
var statearr_26951_26973 = state_26940__$1;
(statearr_26951_26973[(2)] = null);

(statearr_26951_26973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (5))){
var state_26940__$1 = state_26940;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26952_26974 = state_26940__$1;
(statearr_26952_26974[(1)] = (8));

} else {
var statearr_26953_26975 = state_26940__$1;
(statearr_26953_26975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (14))){
var inst_26934 = (state_26940[(2)]);
var state_26940__$1 = state_26940;
var statearr_26954_26976 = state_26940__$1;
(statearr_26954_26976[(2)] = inst_26934);

(statearr_26954_26976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (10))){
var inst_26926 = (state_26940[(2)]);
var state_26940__$1 = state_26940;
var statearr_26955_26977 = state_26940__$1;
(statearr_26955_26977[(2)] = inst_26926);

(statearr_26955_26977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (8))){
var inst_26923 = cljs.core.async.close_BANG_.call(null,to);
var state_26940__$1 = state_26940;
var statearr_26956_26978 = state_26940__$1;
(statearr_26956_26978[(2)] = inst_26923);

(statearr_26956_26978[(1)] = (10));


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
});})(c__15889__auto___26964))
;
return ((function (switch__15833__auto__,c__15889__auto___26964){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_26960 = [null,null,null,null,null,null,null,null];
(statearr_26960[(0)] = state_machine__15834__auto__);

(statearr_26960[(1)] = (1));

return statearr_26960;
});
var state_machine__15834__auto____1 = (function (state_26940){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_26940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e26961){if((e26961 instanceof Object)){
var ex__15837__auto__ = e26961;
var statearr_26962_26979 = state_26940;
(statearr_26962_26979[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26980 = state_26940;
state_26940 = G__26980;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_26940){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_26940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto___26964))
})();
var state__15891__auto__ = (function (){var statearr_26963 = f__15890__auto__.call(null);
(statearr_26963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___26964);

return statearr_26963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto___26964))
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
return (function (p__27164){
var vec__27165 = p__27164;
var v = cljs.core.nth.call(null,vec__27165,(0),null);
var p = cljs.core.nth.call(null,vec__27165,(1),null);
var job = vec__27165;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15889__auto___27347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto___27347,res,vec__27165,v,p,job,jobs,results){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto___27347,res,vec__27165,v,p,job,jobs,results){
return (function (state_27170){
var state_val_27171 = (state_27170[(1)]);
if((state_val_27171 === (2))){
var inst_27167 = (state_27170[(2)]);
var inst_27168 = cljs.core.async.close_BANG_.call(null,res);
var state_27170__$1 = (function (){var statearr_27172 = state_27170;
(statearr_27172[(7)] = inst_27167);

return statearr_27172;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27170__$1,inst_27168);
} else {
if((state_val_27171 === (1))){
var state_27170__$1 = state_27170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27170__$1,(2),res,v);
} else {
return null;
}
}
});})(c__15889__auto___27347,res,vec__27165,v,p,job,jobs,results))
;
return ((function (switch__15833__auto__,c__15889__auto___27347,res,vec__27165,v,p,job,jobs,results){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_27176 = [null,null,null,null,null,null,null,null];
(statearr_27176[(0)] = state_machine__15834__auto__);

(statearr_27176[(1)] = (1));

return statearr_27176;
});
var state_machine__15834__auto____1 = (function (state_27170){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_27170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e27177){if((e27177 instanceof Object)){
var ex__15837__auto__ = e27177;
var statearr_27178_27348 = state_27170;
(statearr_27178_27348[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27349 = state_27170;
state_27170 = G__27349;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_27170){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_27170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto___27347,res,vec__27165,v,p,job,jobs,results))
})();
var state__15891__auto__ = (function (){var statearr_27179 = f__15890__auto__.call(null);
(statearr_27179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___27347);

return statearr_27179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto___27347,res,vec__27165,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27180){
var vec__27181 = p__27180;
var v = cljs.core.nth.call(null,vec__27181,(0),null);
var p = cljs.core.nth.call(null,vec__27181,(1),null);
var job = vec__27181;
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
var n__14118__auto___27350 = n;
var __27351 = (0);
while(true){
if((__27351 < n__14118__auto___27350)){
var G__27182_27352 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27182_27352) {
case "async":
var c__15889__auto___27354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27351,c__15889__auto___27354,G__27182_27352,n__14118__auto___27350,jobs,results,process,async){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (__27351,c__15889__auto___27354,G__27182_27352,n__14118__auto___27350,jobs,results,process,async){
return (function (state_27195){
var state_val_27196 = (state_27195[(1)]);
if((state_val_27196 === (7))){
var inst_27191 = (state_27195[(2)]);
var state_27195__$1 = state_27195;
var statearr_27197_27355 = state_27195__$1;
(statearr_27197_27355[(2)] = inst_27191);

(statearr_27197_27355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27196 === (6))){
var state_27195__$1 = state_27195;
var statearr_27198_27356 = state_27195__$1;
(statearr_27198_27356[(2)] = null);

(statearr_27198_27356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27196 === (5))){
var state_27195__$1 = state_27195;
var statearr_27199_27357 = state_27195__$1;
(statearr_27199_27357[(2)] = null);

(statearr_27199_27357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27196 === (4))){
var inst_27185 = (state_27195[(2)]);
var inst_27186 = async.call(null,inst_27185);
var state_27195__$1 = state_27195;
if(cljs.core.truth_(inst_27186)){
var statearr_27200_27358 = state_27195__$1;
(statearr_27200_27358[(1)] = (5));

} else {
var statearr_27201_27359 = state_27195__$1;
(statearr_27201_27359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27196 === (3))){
var inst_27193 = (state_27195[(2)]);
var state_27195__$1 = state_27195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27195__$1,inst_27193);
} else {
if((state_val_27196 === (2))){
var state_27195__$1 = state_27195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27195__$1,(4),jobs);
} else {
if((state_val_27196 === (1))){
var state_27195__$1 = state_27195;
var statearr_27202_27360 = state_27195__$1;
(statearr_27202_27360[(2)] = null);

(statearr_27202_27360[(1)] = (2));


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
});})(__27351,c__15889__auto___27354,G__27182_27352,n__14118__auto___27350,jobs,results,process,async))
;
return ((function (__27351,switch__15833__auto__,c__15889__auto___27354,G__27182_27352,n__14118__auto___27350,jobs,results,process,async){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_27206 = [null,null,null,null,null,null,null];
(statearr_27206[(0)] = state_machine__15834__auto__);

(statearr_27206[(1)] = (1));

return statearr_27206;
});
var state_machine__15834__auto____1 = (function (state_27195){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_27195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e27207){if((e27207 instanceof Object)){
var ex__15837__auto__ = e27207;
var statearr_27208_27361 = state_27195;
(statearr_27208_27361[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27362 = state_27195;
state_27195 = G__27362;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_27195){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_27195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(__27351,switch__15833__auto__,c__15889__auto___27354,G__27182_27352,n__14118__auto___27350,jobs,results,process,async))
})();
var state__15891__auto__ = (function (){var statearr_27209 = f__15890__auto__.call(null);
(statearr_27209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___27354);

return statearr_27209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(__27351,c__15889__auto___27354,G__27182_27352,n__14118__auto___27350,jobs,results,process,async))
);


break;
case "compute":
var c__15889__auto___27363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27351,c__15889__auto___27363,G__27182_27352,n__14118__auto___27350,jobs,results,process,async){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (__27351,c__15889__auto___27363,G__27182_27352,n__14118__auto___27350,jobs,results,process,async){
return (function (state_27222){
var state_val_27223 = (state_27222[(1)]);
if((state_val_27223 === (7))){
var inst_27218 = (state_27222[(2)]);
var state_27222__$1 = state_27222;
var statearr_27224_27364 = state_27222__$1;
(statearr_27224_27364[(2)] = inst_27218);

(statearr_27224_27364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27223 === (6))){
var state_27222__$1 = state_27222;
var statearr_27225_27365 = state_27222__$1;
(statearr_27225_27365[(2)] = null);

(statearr_27225_27365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27223 === (5))){
var state_27222__$1 = state_27222;
var statearr_27226_27366 = state_27222__$1;
(statearr_27226_27366[(2)] = null);

(statearr_27226_27366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27223 === (4))){
var inst_27212 = (state_27222[(2)]);
var inst_27213 = process.call(null,inst_27212);
var state_27222__$1 = state_27222;
if(cljs.core.truth_(inst_27213)){
var statearr_27227_27367 = state_27222__$1;
(statearr_27227_27367[(1)] = (5));

} else {
var statearr_27228_27368 = state_27222__$1;
(statearr_27228_27368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27223 === (3))){
var inst_27220 = (state_27222[(2)]);
var state_27222__$1 = state_27222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27222__$1,inst_27220);
} else {
if((state_val_27223 === (2))){
var state_27222__$1 = state_27222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27222__$1,(4),jobs);
} else {
if((state_val_27223 === (1))){
var state_27222__$1 = state_27222;
var statearr_27229_27369 = state_27222__$1;
(statearr_27229_27369[(2)] = null);

(statearr_27229_27369[(1)] = (2));


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
});})(__27351,c__15889__auto___27363,G__27182_27352,n__14118__auto___27350,jobs,results,process,async))
;
return ((function (__27351,switch__15833__auto__,c__15889__auto___27363,G__27182_27352,n__14118__auto___27350,jobs,results,process,async){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_27233 = [null,null,null,null,null,null,null];
(statearr_27233[(0)] = state_machine__15834__auto__);

(statearr_27233[(1)] = (1));

return statearr_27233;
});
var state_machine__15834__auto____1 = (function (state_27222){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_27222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e27234){if((e27234 instanceof Object)){
var ex__15837__auto__ = e27234;
var statearr_27235_27370 = state_27222;
(statearr_27235_27370[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27371 = state_27222;
state_27222 = G__27371;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_27222){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_27222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(__27351,switch__15833__auto__,c__15889__auto___27363,G__27182_27352,n__14118__auto___27350,jobs,results,process,async))
})();
var state__15891__auto__ = (function (){var statearr_27236 = f__15890__auto__.call(null);
(statearr_27236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___27363);

return statearr_27236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(__27351,c__15889__auto___27363,G__27182_27352,n__14118__auto___27350,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27372 = (__27351 + (1));
__27351 = G__27372;
continue;
} else {
}
break;
}

var c__15889__auto___27373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto___27373,jobs,results,process,async){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto___27373,jobs,results,process,async){
return (function (state_27258){
var state_val_27259 = (state_27258[(1)]);
if((state_val_27259 === (9))){
var inst_27251 = (state_27258[(2)]);
var state_27258__$1 = (function (){var statearr_27260 = state_27258;
(statearr_27260[(7)] = inst_27251);

return statearr_27260;
})();
var statearr_27261_27374 = state_27258__$1;
(statearr_27261_27374[(2)] = null);

(statearr_27261_27374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (8))){
var inst_27244 = (state_27258[(8)]);
var inst_27249 = (state_27258[(2)]);
var state_27258__$1 = (function (){var statearr_27262 = state_27258;
(statearr_27262[(9)] = inst_27249);

return statearr_27262;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27258__$1,(9),results,inst_27244);
} else {
if((state_val_27259 === (7))){
var inst_27254 = (state_27258[(2)]);
var state_27258__$1 = state_27258;
var statearr_27263_27375 = state_27258__$1;
(statearr_27263_27375[(2)] = inst_27254);

(statearr_27263_27375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (6))){
var inst_27244 = (state_27258[(8)]);
var inst_27239 = (state_27258[(10)]);
var inst_27244__$1 = cljs.core.async.chan.call(null,(1));
var inst_27245 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27246 = [inst_27239,inst_27244__$1];
var inst_27247 = (new cljs.core.PersistentVector(null,2,(5),inst_27245,inst_27246,null));
var state_27258__$1 = (function (){var statearr_27264 = state_27258;
(statearr_27264[(8)] = inst_27244__$1);

return statearr_27264;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27258__$1,(8),jobs,inst_27247);
} else {
if((state_val_27259 === (5))){
var inst_27242 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27258__$1 = state_27258;
var statearr_27265_27376 = state_27258__$1;
(statearr_27265_27376[(2)] = inst_27242);

(statearr_27265_27376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (4))){
var inst_27239 = (state_27258[(10)]);
var inst_27239__$1 = (state_27258[(2)]);
var inst_27240 = (inst_27239__$1 == null);
var state_27258__$1 = (function (){var statearr_27266 = state_27258;
(statearr_27266[(10)] = inst_27239__$1);

return statearr_27266;
})();
if(cljs.core.truth_(inst_27240)){
var statearr_27267_27377 = state_27258__$1;
(statearr_27267_27377[(1)] = (5));

} else {
var statearr_27268_27378 = state_27258__$1;
(statearr_27268_27378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (3))){
var inst_27256 = (state_27258[(2)]);
var state_27258__$1 = state_27258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27258__$1,inst_27256);
} else {
if((state_val_27259 === (2))){
var state_27258__$1 = state_27258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27258__$1,(4),from);
} else {
if((state_val_27259 === (1))){
var state_27258__$1 = state_27258;
var statearr_27269_27379 = state_27258__$1;
(statearr_27269_27379[(2)] = null);

(statearr_27269_27379[(1)] = (2));


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
});})(c__15889__auto___27373,jobs,results,process,async))
;
return ((function (switch__15833__auto__,c__15889__auto___27373,jobs,results,process,async){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_27273 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27273[(0)] = state_machine__15834__auto__);

(statearr_27273[(1)] = (1));

return statearr_27273;
});
var state_machine__15834__auto____1 = (function (state_27258){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_27258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e27274){if((e27274 instanceof Object)){
var ex__15837__auto__ = e27274;
var statearr_27275_27380 = state_27258;
(statearr_27275_27380[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27381 = state_27258;
state_27258 = G__27381;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_27258){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_27258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto___27373,jobs,results,process,async))
})();
var state__15891__auto__ = (function (){var statearr_27276 = f__15890__auto__.call(null);
(statearr_27276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___27373);

return statearr_27276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto___27373,jobs,results,process,async))
);


var c__15889__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto__,jobs,results,process,async){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto__,jobs,results,process,async){
return (function (state_27314){
var state_val_27315 = (state_27314[(1)]);
if((state_val_27315 === (7))){
var inst_27310 = (state_27314[(2)]);
var state_27314__$1 = state_27314;
var statearr_27316_27382 = state_27314__$1;
(statearr_27316_27382[(2)] = inst_27310);

(statearr_27316_27382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (20))){
var state_27314__$1 = state_27314;
var statearr_27317_27383 = state_27314__$1;
(statearr_27317_27383[(2)] = null);

(statearr_27317_27383[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (1))){
var state_27314__$1 = state_27314;
var statearr_27318_27384 = state_27314__$1;
(statearr_27318_27384[(2)] = null);

(statearr_27318_27384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (4))){
var inst_27279 = (state_27314[(7)]);
var inst_27279__$1 = (state_27314[(2)]);
var inst_27280 = (inst_27279__$1 == null);
var state_27314__$1 = (function (){var statearr_27319 = state_27314;
(statearr_27319[(7)] = inst_27279__$1);

return statearr_27319;
})();
if(cljs.core.truth_(inst_27280)){
var statearr_27320_27385 = state_27314__$1;
(statearr_27320_27385[(1)] = (5));

} else {
var statearr_27321_27386 = state_27314__$1;
(statearr_27321_27386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (15))){
var inst_27292 = (state_27314[(8)]);
var state_27314__$1 = state_27314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27314__$1,(18),to,inst_27292);
} else {
if((state_val_27315 === (21))){
var inst_27305 = (state_27314[(2)]);
var state_27314__$1 = state_27314;
var statearr_27322_27387 = state_27314__$1;
(statearr_27322_27387[(2)] = inst_27305);

(statearr_27322_27387[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (13))){
var inst_27307 = (state_27314[(2)]);
var state_27314__$1 = (function (){var statearr_27323 = state_27314;
(statearr_27323[(9)] = inst_27307);

return statearr_27323;
})();
var statearr_27324_27388 = state_27314__$1;
(statearr_27324_27388[(2)] = null);

(statearr_27324_27388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (6))){
var inst_27279 = (state_27314[(7)]);
var state_27314__$1 = state_27314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27314__$1,(11),inst_27279);
} else {
if((state_val_27315 === (17))){
var inst_27300 = (state_27314[(2)]);
var state_27314__$1 = state_27314;
if(cljs.core.truth_(inst_27300)){
var statearr_27325_27389 = state_27314__$1;
(statearr_27325_27389[(1)] = (19));

} else {
var statearr_27326_27390 = state_27314__$1;
(statearr_27326_27390[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (3))){
var inst_27312 = (state_27314[(2)]);
var state_27314__$1 = state_27314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27314__$1,inst_27312);
} else {
if((state_val_27315 === (12))){
var inst_27289 = (state_27314[(10)]);
var state_27314__$1 = state_27314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27314__$1,(14),inst_27289);
} else {
if((state_val_27315 === (2))){
var state_27314__$1 = state_27314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27314__$1,(4),results);
} else {
if((state_val_27315 === (19))){
var state_27314__$1 = state_27314;
var statearr_27327_27391 = state_27314__$1;
(statearr_27327_27391[(2)] = null);

(statearr_27327_27391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (11))){
var inst_27289 = (state_27314[(2)]);
var state_27314__$1 = (function (){var statearr_27328 = state_27314;
(statearr_27328[(10)] = inst_27289);

return statearr_27328;
})();
var statearr_27329_27392 = state_27314__$1;
(statearr_27329_27392[(2)] = null);

(statearr_27329_27392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (9))){
var state_27314__$1 = state_27314;
var statearr_27330_27393 = state_27314__$1;
(statearr_27330_27393[(2)] = null);

(statearr_27330_27393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (5))){
var state_27314__$1 = state_27314;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27331_27394 = state_27314__$1;
(statearr_27331_27394[(1)] = (8));

} else {
var statearr_27332_27395 = state_27314__$1;
(statearr_27332_27395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (14))){
var inst_27292 = (state_27314[(8)]);
var inst_27294 = (state_27314[(11)]);
var inst_27292__$1 = (state_27314[(2)]);
var inst_27293 = (inst_27292__$1 == null);
var inst_27294__$1 = cljs.core.not.call(null,inst_27293);
var state_27314__$1 = (function (){var statearr_27333 = state_27314;
(statearr_27333[(8)] = inst_27292__$1);

(statearr_27333[(11)] = inst_27294__$1);

return statearr_27333;
})();
if(inst_27294__$1){
var statearr_27334_27396 = state_27314__$1;
(statearr_27334_27396[(1)] = (15));

} else {
var statearr_27335_27397 = state_27314__$1;
(statearr_27335_27397[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (16))){
var inst_27294 = (state_27314[(11)]);
var state_27314__$1 = state_27314;
var statearr_27336_27398 = state_27314__$1;
(statearr_27336_27398[(2)] = inst_27294);

(statearr_27336_27398[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (10))){
var inst_27286 = (state_27314[(2)]);
var state_27314__$1 = state_27314;
var statearr_27337_27399 = state_27314__$1;
(statearr_27337_27399[(2)] = inst_27286);

(statearr_27337_27399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (18))){
var inst_27297 = (state_27314[(2)]);
var state_27314__$1 = state_27314;
var statearr_27338_27400 = state_27314__$1;
(statearr_27338_27400[(2)] = inst_27297);

(statearr_27338_27400[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (8))){
var inst_27283 = cljs.core.async.close_BANG_.call(null,to);
var state_27314__$1 = state_27314;
var statearr_27339_27401 = state_27314__$1;
(statearr_27339_27401[(2)] = inst_27283);

(statearr_27339_27401[(1)] = (10));


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
});})(c__15889__auto__,jobs,results,process,async))
;
return ((function (switch__15833__auto__,c__15889__auto__,jobs,results,process,async){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_27343 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27343[(0)] = state_machine__15834__auto__);

(statearr_27343[(1)] = (1));

return statearr_27343;
});
var state_machine__15834__auto____1 = (function (state_27314){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_27314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e27344){if((e27344 instanceof Object)){
var ex__15837__auto__ = e27344;
var statearr_27345_27402 = state_27314;
(statearr_27345_27402[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27403 = state_27314;
state_27314 = G__27403;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_27314){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_27314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto__,jobs,results,process,async))
})();
var state__15891__auto__ = (function (){var statearr_27346 = f__15890__auto__.call(null);
(statearr_27346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto__);

return statearr_27346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto__,jobs,results,process,async))
);

return c__15889__auto__;
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
var c__15889__auto___27504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto___27504,tc,fc){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto___27504,tc,fc){
return (function (state_27479){
var state_val_27480 = (state_27479[(1)]);
if((state_val_27480 === (7))){
var inst_27475 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
var statearr_27481_27505 = state_27479__$1;
(statearr_27481_27505[(2)] = inst_27475);

(statearr_27481_27505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (1))){
var state_27479__$1 = state_27479;
var statearr_27482_27506 = state_27479__$1;
(statearr_27482_27506[(2)] = null);

(statearr_27482_27506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (4))){
var inst_27456 = (state_27479[(7)]);
var inst_27456__$1 = (state_27479[(2)]);
var inst_27457 = (inst_27456__$1 == null);
var state_27479__$1 = (function (){var statearr_27483 = state_27479;
(statearr_27483[(7)] = inst_27456__$1);

return statearr_27483;
})();
if(cljs.core.truth_(inst_27457)){
var statearr_27484_27507 = state_27479__$1;
(statearr_27484_27507[(1)] = (5));

} else {
var statearr_27485_27508 = state_27479__$1;
(statearr_27485_27508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (13))){
var state_27479__$1 = state_27479;
var statearr_27486_27509 = state_27479__$1;
(statearr_27486_27509[(2)] = null);

(statearr_27486_27509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (6))){
var inst_27456 = (state_27479[(7)]);
var inst_27462 = p.call(null,inst_27456);
var state_27479__$1 = state_27479;
if(cljs.core.truth_(inst_27462)){
var statearr_27487_27510 = state_27479__$1;
(statearr_27487_27510[(1)] = (9));

} else {
var statearr_27488_27511 = state_27479__$1;
(statearr_27488_27511[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (3))){
var inst_27477 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27479__$1,inst_27477);
} else {
if((state_val_27480 === (12))){
var state_27479__$1 = state_27479;
var statearr_27489_27512 = state_27479__$1;
(statearr_27489_27512[(2)] = null);

(statearr_27489_27512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (2))){
var state_27479__$1 = state_27479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27479__$1,(4),ch);
} else {
if((state_val_27480 === (11))){
var inst_27456 = (state_27479[(7)]);
var inst_27466 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27479__$1,(8),inst_27466,inst_27456);
} else {
if((state_val_27480 === (9))){
var state_27479__$1 = state_27479;
var statearr_27490_27513 = state_27479__$1;
(statearr_27490_27513[(2)] = tc);

(statearr_27490_27513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (5))){
var inst_27459 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27460 = cljs.core.async.close_BANG_.call(null,fc);
var state_27479__$1 = (function (){var statearr_27491 = state_27479;
(statearr_27491[(8)] = inst_27459);

return statearr_27491;
})();
var statearr_27492_27514 = state_27479__$1;
(statearr_27492_27514[(2)] = inst_27460);

(statearr_27492_27514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (14))){
var inst_27473 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
var statearr_27493_27515 = state_27479__$1;
(statearr_27493_27515[(2)] = inst_27473);

(statearr_27493_27515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (10))){
var state_27479__$1 = state_27479;
var statearr_27494_27516 = state_27479__$1;
(statearr_27494_27516[(2)] = fc);

(statearr_27494_27516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (8))){
var inst_27468 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
if(cljs.core.truth_(inst_27468)){
var statearr_27495_27517 = state_27479__$1;
(statearr_27495_27517[(1)] = (12));

} else {
var statearr_27496_27518 = state_27479__$1;
(statearr_27496_27518[(1)] = (13));

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
});})(c__15889__auto___27504,tc,fc))
;
return ((function (switch__15833__auto__,c__15889__auto___27504,tc,fc){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_27500 = [null,null,null,null,null,null,null,null,null];
(statearr_27500[(0)] = state_machine__15834__auto__);

(statearr_27500[(1)] = (1));

return statearr_27500;
});
var state_machine__15834__auto____1 = (function (state_27479){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_27479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e27501){if((e27501 instanceof Object)){
var ex__15837__auto__ = e27501;
var statearr_27502_27519 = state_27479;
(statearr_27502_27519[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27520 = state_27479;
state_27479 = G__27520;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_27479){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_27479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto___27504,tc,fc))
})();
var state__15891__auto__ = (function (){var statearr_27503 = f__15890__auto__.call(null);
(statearr_27503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___27504);

return statearr_27503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto___27504,tc,fc))
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
var c__15889__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto__){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto__){
return (function (state_27567){
var state_val_27568 = (state_27567[(1)]);
if((state_val_27568 === (7))){
var inst_27563 = (state_27567[(2)]);
var state_27567__$1 = state_27567;
var statearr_27569_27585 = state_27567__$1;
(statearr_27569_27585[(2)] = inst_27563);

(statearr_27569_27585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27568 === (6))){
var inst_27556 = (state_27567[(7)]);
var inst_27553 = (state_27567[(8)]);
var inst_27560 = f.call(null,inst_27553,inst_27556);
var inst_27553__$1 = inst_27560;
var state_27567__$1 = (function (){var statearr_27570 = state_27567;
(statearr_27570[(8)] = inst_27553__$1);

return statearr_27570;
})();
var statearr_27571_27586 = state_27567__$1;
(statearr_27571_27586[(2)] = null);

(statearr_27571_27586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27568 === (5))){
var inst_27553 = (state_27567[(8)]);
var state_27567__$1 = state_27567;
var statearr_27572_27587 = state_27567__$1;
(statearr_27572_27587[(2)] = inst_27553);

(statearr_27572_27587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27568 === (4))){
var inst_27556 = (state_27567[(7)]);
var inst_27556__$1 = (state_27567[(2)]);
var inst_27557 = (inst_27556__$1 == null);
var state_27567__$1 = (function (){var statearr_27573 = state_27567;
(statearr_27573[(7)] = inst_27556__$1);

return statearr_27573;
})();
if(cljs.core.truth_(inst_27557)){
var statearr_27574_27588 = state_27567__$1;
(statearr_27574_27588[(1)] = (5));

} else {
var statearr_27575_27589 = state_27567__$1;
(statearr_27575_27589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27568 === (3))){
var inst_27565 = (state_27567[(2)]);
var state_27567__$1 = state_27567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27567__$1,inst_27565);
} else {
if((state_val_27568 === (2))){
var state_27567__$1 = state_27567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27567__$1,(4),ch);
} else {
if((state_val_27568 === (1))){
var inst_27553 = init;
var state_27567__$1 = (function (){var statearr_27576 = state_27567;
(statearr_27576[(8)] = inst_27553);

return statearr_27576;
})();
var statearr_27577_27590 = state_27567__$1;
(statearr_27577_27590[(2)] = null);

(statearr_27577_27590[(1)] = (2));


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
});})(c__15889__auto__))
;
return ((function (switch__15833__auto__,c__15889__auto__){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_27581 = [null,null,null,null,null,null,null,null,null];
(statearr_27581[(0)] = state_machine__15834__auto__);

(statearr_27581[(1)] = (1));

return statearr_27581;
});
var state_machine__15834__auto____1 = (function (state_27567){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_27567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e27582){if((e27582 instanceof Object)){
var ex__15837__auto__ = e27582;
var statearr_27583_27591 = state_27567;
(statearr_27583_27591[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27592 = state_27567;
state_27567 = G__27592;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_27567){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_27567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto__))
})();
var state__15891__auto__ = (function (){var statearr_27584 = f__15890__auto__.call(null);
(statearr_27584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto__);

return statearr_27584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto__))
);

return c__15889__auto__;
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
var c__15889__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto__){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto__){
return (function (state_27666){
var state_val_27667 = (state_27666[(1)]);
if((state_val_27667 === (7))){
var inst_27648 = (state_27666[(2)]);
var state_27666__$1 = state_27666;
var statearr_27668_27691 = state_27666__$1;
(statearr_27668_27691[(2)] = inst_27648);

(statearr_27668_27691[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (1))){
var inst_27642 = cljs.core.seq.call(null,coll);
var inst_27643 = inst_27642;
var state_27666__$1 = (function (){var statearr_27669 = state_27666;
(statearr_27669[(7)] = inst_27643);

return statearr_27669;
})();
var statearr_27670_27692 = state_27666__$1;
(statearr_27670_27692[(2)] = null);

(statearr_27670_27692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (4))){
var inst_27643 = (state_27666[(7)]);
var inst_27646 = cljs.core.first.call(null,inst_27643);
var state_27666__$1 = state_27666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27666__$1,(7),ch,inst_27646);
} else {
if((state_val_27667 === (13))){
var inst_27660 = (state_27666[(2)]);
var state_27666__$1 = state_27666;
var statearr_27671_27693 = state_27666__$1;
(statearr_27671_27693[(2)] = inst_27660);

(statearr_27671_27693[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (6))){
var inst_27651 = (state_27666[(2)]);
var state_27666__$1 = state_27666;
if(cljs.core.truth_(inst_27651)){
var statearr_27672_27694 = state_27666__$1;
(statearr_27672_27694[(1)] = (8));

} else {
var statearr_27673_27695 = state_27666__$1;
(statearr_27673_27695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (3))){
var inst_27664 = (state_27666[(2)]);
var state_27666__$1 = state_27666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27666__$1,inst_27664);
} else {
if((state_val_27667 === (12))){
var state_27666__$1 = state_27666;
var statearr_27674_27696 = state_27666__$1;
(statearr_27674_27696[(2)] = null);

(statearr_27674_27696[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (2))){
var inst_27643 = (state_27666[(7)]);
var state_27666__$1 = state_27666;
if(cljs.core.truth_(inst_27643)){
var statearr_27675_27697 = state_27666__$1;
(statearr_27675_27697[(1)] = (4));

} else {
var statearr_27676_27698 = state_27666__$1;
(statearr_27676_27698[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (11))){
var inst_27657 = cljs.core.async.close_BANG_.call(null,ch);
var state_27666__$1 = state_27666;
var statearr_27677_27699 = state_27666__$1;
(statearr_27677_27699[(2)] = inst_27657);

(statearr_27677_27699[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (9))){
var state_27666__$1 = state_27666;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27678_27700 = state_27666__$1;
(statearr_27678_27700[(1)] = (11));

} else {
var statearr_27679_27701 = state_27666__$1;
(statearr_27679_27701[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (5))){
var inst_27643 = (state_27666[(7)]);
var state_27666__$1 = state_27666;
var statearr_27680_27702 = state_27666__$1;
(statearr_27680_27702[(2)] = inst_27643);

(statearr_27680_27702[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (10))){
var inst_27662 = (state_27666[(2)]);
var state_27666__$1 = state_27666;
var statearr_27681_27703 = state_27666__$1;
(statearr_27681_27703[(2)] = inst_27662);

(statearr_27681_27703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (8))){
var inst_27643 = (state_27666[(7)]);
var inst_27653 = cljs.core.next.call(null,inst_27643);
var inst_27643__$1 = inst_27653;
var state_27666__$1 = (function (){var statearr_27682 = state_27666;
(statearr_27682[(7)] = inst_27643__$1);

return statearr_27682;
})();
var statearr_27683_27704 = state_27666__$1;
(statearr_27683_27704[(2)] = null);

(statearr_27683_27704[(1)] = (2));


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
});})(c__15889__auto__))
;
return ((function (switch__15833__auto__,c__15889__auto__){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_27687 = [null,null,null,null,null,null,null,null];
(statearr_27687[(0)] = state_machine__15834__auto__);

(statearr_27687[(1)] = (1));

return statearr_27687;
});
var state_machine__15834__auto____1 = (function (state_27666){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_27666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e27688){if((e27688 instanceof Object)){
var ex__15837__auto__ = e27688;
var statearr_27689_27705 = state_27666;
(statearr_27689_27705[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27706 = state_27666;
state_27666 = G__27706;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_27666){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_27666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto__))
})();
var state__15891__auto__ = (function (){var statearr_27690 = f__15890__auto__.call(null);
(statearr_27690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto__);

return statearr_27690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto__))
);

return c__15889__auto__;
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

cljs.core.async.Mux = (function (){var obj27708 = {};
return obj27708;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__13219__auto__ = _;
if(and__13219__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__13219__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__13875__auto__ = (((_ == null))?null:_);
return (function (){var or__13231__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13875__auto__)]);
if(or__13231__auto__){
return or__13231__auto__;
} else {
var or__13231__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__13231__auto____$1){
return or__13231__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27710 = {};
return obj27710;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__13219__auto__ = m;
if(and__13219__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__13219__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__13875__auto__ = (((m == null))?null:m);
return (function (){var or__13231__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13875__auto__)]);
if(or__13231__auto__){
return or__13231__auto__;
} else {
var or__13231__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__13231__auto____$1){
return or__13231__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__13219__auto__ = m;
if(and__13219__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__13219__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__13875__auto__ = (((m == null))?null:m);
return (function (){var or__13231__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13875__auto__)]);
if(or__13231__auto__){
return or__13231__auto__;
} else {
var or__13231__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__13231__auto____$1){
return or__13231__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__13219__auto__ = m;
if(and__13219__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__13219__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__13875__auto__ = (((m == null))?null:m);
return (function (){var or__13231__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13875__auto__)]);
if(or__13231__auto__){
return or__13231__auto__;
} else {
var or__13231__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__13231__auto____$1){
return or__13231__auto____$1;
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
if(typeof cljs.core.async.t27932 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27932 = (function (cs,ch,mult,meta27933){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27933 = meta27933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27932.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27932.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27932.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27932.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27932.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27932.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27932.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27934){
var self__ = this;
var _27934__$1 = this;
return self__.meta27933;
});})(cs))
;

cljs.core.async.t27932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27934,meta27933__$1){
var self__ = this;
var _27934__$1 = this;
return (new cljs.core.async.t27932(self__.cs,self__.ch,self__.mult,meta27933__$1));
});})(cs))
;

cljs.core.async.t27932.cljs$lang$type = true;

cljs.core.async.t27932.cljs$lang$ctorStr = "cljs.core.async/t27932";

cljs.core.async.t27932.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13818__auto__,writer__13819__auto__,opt__13820__auto__){
return cljs.core._write.call(null,writer__13819__auto__,"cljs.core.async/t27932");
});})(cs))
;

cljs.core.async.__GT_t27932 = ((function (cs){
return (function __GT_t27932(cs__$1,ch__$1,mult__$1,meta27933){
return (new cljs.core.async.t27932(cs__$1,ch__$1,mult__$1,meta27933));
});})(cs))
;

}

return (new cljs.core.async.t27932(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15889__auto___28153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto___28153,cs,m,dchan,dctr,done){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto___28153,cs,m,dchan,dctr,done){
return (function (state_28065){
var state_val_28066 = (state_28065[(1)]);
if((state_val_28066 === (7))){
var inst_28061 = (state_28065[(2)]);
var state_28065__$1 = state_28065;
var statearr_28067_28154 = state_28065__$1;
(statearr_28067_28154[(2)] = inst_28061);

(statearr_28067_28154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (20))){
var inst_27966 = (state_28065[(7)]);
var inst_27976 = cljs.core.first.call(null,inst_27966);
var inst_27977 = cljs.core.nth.call(null,inst_27976,(0),null);
var inst_27978 = cljs.core.nth.call(null,inst_27976,(1),null);
var state_28065__$1 = (function (){var statearr_28068 = state_28065;
(statearr_28068[(8)] = inst_27977);

return statearr_28068;
})();
if(cljs.core.truth_(inst_27978)){
var statearr_28069_28155 = state_28065__$1;
(statearr_28069_28155[(1)] = (22));

} else {
var statearr_28070_28156 = state_28065__$1;
(statearr_28070_28156[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (27))){
var inst_28006 = (state_28065[(9)]);
var inst_27937 = (state_28065[(10)]);
var inst_28008 = (state_28065[(11)]);
var inst_28013 = (state_28065[(12)]);
var inst_28013__$1 = cljs.core._nth.call(null,inst_28006,inst_28008);
var inst_28014 = cljs.core.async.put_BANG_.call(null,inst_28013__$1,inst_27937,done);
var state_28065__$1 = (function (){var statearr_28071 = state_28065;
(statearr_28071[(12)] = inst_28013__$1);

return statearr_28071;
})();
if(cljs.core.truth_(inst_28014)){
var statearr_28072_28157 = state_28065__$1;
(statearr_28072_28157[(1)] = (30));

} else {
var statearr_28073_28158 = state_28065__$1;
(statearr_28073_28158[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (1))){
var state_28065__$1 = state_28065;
var statearr_28074_28159 = state_28065__$1;
(statearr_28074_28159[(2)] = null);

(statearr_28074_28159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (24))){
var inst_27966 = (state_28065[(7)]);
var inst_27983 = (state_28065[(2)]);
var inst_27984 = cljs.core.next.call(null,inst_27966);
var inst_27946 = inst_27984;
var inst_27947 = null;
var inst_27948 = (0);
var inst_27949 = (0);
var state_28065__$1 = (function (){var statearr_28075 = state_28065;
(statearr_28075[(13)] = inst_27949);

(statearr_28075[(14)] = inst_27948);

(statearr_28075[(15)] = inst_27946);

(statearr_28075[(16)] = inst_27947);

(statearr_28075[(17)] = inst_27983);

return statearr_28075;
})();
var statearr_28076_28160 = state_28065__$1;
(statearr_28076_28160[(2)] = null);

(statearr_28076_28160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (39))){
var state_28065__$1 = state_28065;
var statearr_28080_28161 = state_28065__$1;
(statearr_28080_28161[(2)] = null);

(statearr_28080_28161[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (4))){
var inst_27937 = (state_28065[(10)]);
var inst_27937__$1 = (state_28065[(2)]);
var inst_27938 = (inst_27937__$1 == null);
var state_28065__$1 = (function (){var statearr_28081 = state_28065;
(statearr_28081[(10)] = inst_27937__$1);

return statearr_28081;
})();
if(cljs.core.truth_(inst_27938)){
var statearr_28082_28162 = state_28065__$1;
(statearr_28082_28162[(1)] = (5));

} else {
var statearr_28083_28163 = state_28065__$1;
(statearr_28083_28163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (15))){
var inst_27949 = (state_28065[(13)]);
var inst_27948 = (state_28065[(14)]);
var inst_27946 = (state_28065[(15)]);
var inst_27947 = (state_28065[(16)]);
var inst_27962 = (state_28065[(2)]);
var inst_27963 = (inst_27949 + (1));
var tmp28077 = inst_27948;
var tmp28078 = inst_27946;
var tmp28079 = inst_27947;
var inst_27946__$1 = tmp28078;
var inst_27947__$1 = tmp28079;
var inst_27948__$1 = tmp28077;
var inst_27949__$1 = inst_27963;
var state_28065__$1 = (function (){var statearr_28084 = state_28065;
(statearr_28084[(13)] = inst_27949__$1);

(statearr_28084[(14)] = inst_27948__$1);

(statearr_28084[(18)] = inst_27962);

(statearr_28084[(15)] = inst_27946__$1);

(statearr_28084[(16)] = inst_27947__$1);

return statearr_28084;
})();
var statearr_28085_28164 = state_28065__$1;
(statearr_28085_28164[(2)] = null);

(statearr_28085_28164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (21))){
var inst_27987 = (state_28065[(2)]);
var state_28065__$1 = state_28065;
var statearr_28089_28165 = state_28065__$1;
(statearr_28089_28165[(2)] = inst_27987);

(statearr_28089_28165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (31))){
var inst_28013 = (state_28065[(12)]);
var inst_28017 = done.call(null,null);
var inst_28018 = cljs.core.async.untap_STAR_.call(null,m,inst_28013);
var state_28065__$1 = (function (){var statearr_28090 = state_28065;
(statearr_28090[(19)] = inst_28017);

return statearr_28090;
})();
var statearr_28091_28166 = state_28065__$1;
(statearr_28091_28166[(2)] = inst_28018);

(statearr_28091_28166[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (32))){
var inst_28006 = (state_28065[(9)]);
var inst_28007 = (state_28065[(20)]);
var inst_28005 = (state_28065[(21)]);
var inst_28008 = (state_28065[(11)]);
var inst_28020 = (state_28065[(2)]);
var inst_28021 = (inst_28008 + (1));
var tmp28086 = inst_28006;
var tmp28087 = inst_28007;
var tmp28088 = inst_28005;
var inst_28005__$1 = tmp28088;
var inst_28006__$1 = tmp28086;
var inst_28007__$1 = tmp28087;
var inst_28008__$1 = inst_28021;
var state_28065__$1 = (function (){var statearr_28092 = state_28065;
(statearr_28092[(9)] = inst_28006__$1);

(statearr_28092[(20)] = inst_28007__$1);

(statearr_28092[(22)] = inst_28020);

(statearr_28092[(21)] = inst_28005__$1);

(statearr_28092[(11)] = inst_28008__$1);

return statearr_28092;
})();
var statearr_28093_28167 = state_28065__$1;
(statearr_28093_28167[(2)] = null);

(statearr_28093_28167[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (40))){
var inst_28033 = (state_28065[(23)]);
var inst_28037 = done.call(null,null);
var inst_28038 = cljs.core.async.untap_STAR_.call(null,m,inst_28033);
var state_28065__$1 = (function (){var statearr_28094 = state_28065;
(statearr_28094[(24)] = inst_28037);

return statearr_28094;
})();
var statearr_28095_28168 = state_28065__$1;
(statearr_28095_28168[(2)] = inst_28038);

(statearr_28095_28168[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (33))){
var inst_28024 = (state_28065[(25)]);
var inst_28026 = cljs.core.chunked_seq_QMARK_.call(null,inst_28024);
var state_28065__$1 = state_28065;
if(inst_28026){
var statearr_28096_28169 = state_28065__$1;
(statearr_28096_28169[(1)] = (36));

} else {
var statearr_28097_28170 = state_28065__$1;
(statearr_28097_28170[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (13))){
var inst_27956 = (state_28065[(26)]);
var inst_27959 = cljs.core.async.close_BANG_.call(null,inst_27956);
var state_28065__$1 = state_28065;
var statearr_28098_28171 = state_28065__$1;
(statearr_28098_28171[(2)] = inst_27959);

(statearr_28098_28171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (22))){
var inst_27977 = (state_28065[(8)]);
var inst_27980 = cljs.core.async.close_BANG_.call(null,inst_27977);
var state_28065__$1 = state_28065;
var statearr_28099_28172 = state_28065__$1;
(statearr_28099_28172[(2)] = inst_27980);

(statearr_28099_28172[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (36))){
var inst_28024 = (state_28065[(25)]);
var inst_28028 = cljs.core.chunk_first.call(null,inst_28024);
var inst_28029 = cljs.core.chunk_rest.call(null,inst_28024);
var inst_28030 = cljs.core.count.call(null,inst_28028);
var inst_28005 = inst_28029;
var inst_28006 = inst_28028;
var inst_28007 = inst_28030;
var inst_28008 = (0);
var state_28065__$1 = (function (){var statearr_28100 = state_28065;
(statearr_28100[(9)] = inst_28006);

(statearr_28100[(20)] = inst_28007);

(statearr_28100[(21)] = inst_28005);

(statearr_28100[(11)] = inst_28008);

return statearr_28100;
})();
var statearr_28101_28173 = state_28065__$1;
(statearr_28101_28173[(2)] = null);

(statearr_28101_28173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (41))){
var inst_28024 = (state_28065[(25)]);
var inst_28040 = (state_28065[(2)]);
var inst_28041 = cljs.core.next.call(null,inst_28024);
var inst_28005 = inst_28041;
var inst_28006 = null;
var inst_28007 = (0);
var inst_28008 = (0);
var state_28065__$1 = (function (){var statearr_28102 = state_28065;
(statearr_28102[(9)] = inst_28006);

(statearr_28102[(20)] = inst_28007);

(statearr_28102[(27)] = inst_28040);

(statearr_28102[(21)] = inst_28005);

(statearr_28102[(11)] = inst_28008);

return statearr_28102;
})();
var statearr_28103_28174 = state_28065__$1;
(statearr_28103_28174[(2)] = null);

(statearr_28103_28174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (43))){
var state_28065__$1 = state_28065;
var statearr_28104_28175 = state_28065__$1;
(statearr_28104_28175[(2)] = null);

(statearr_28104_28175[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (29))){
var inst_28049 = (state_28065[(2)]);
var state_28065__$1 = state_28065;
var statearr_28105_28176 = state_28065__$1;
(statearr_28105_28176[(2)] = inst_28049);

(statearr_28105_28176[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (44))){
var inst_28058 = (state_28065[(2)]);
var state_28065__$1 = (function (){var statearr_28106 = state_28065;
(statearr_28106[(28)] = inst_28058);

return statearr_28106;
})();
var statearr_28107_28177 = state_28065__$1;
(statearr_28107_28177[(2)] = null);

(statearr_28107_28177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (6))){
var inst_27997 = (state_28065[(29)]);
var inst_27996 = cljs.core.deref.call(null,cs);
var inst_27997__$1 = cljs.core.keys.call(null,inst_27996);
var inst_27998 = cljs.core.count.call(null,inst_27997__$1);
var inst_27999 = cljs.core.reset_BANG_.call(null,dctr,inst_27998);
var inst_28004 = cljs.core.seq.call(null,inst_27997__$1);
var inst_28005 = inst_28004;
var inst_28006 = null;
var inst_28007 = (0);
var inst_28008 = (0);
var state_28065__$1 = (function (){var statearr_28108 = state_28065;
(statearr_28108[(9)] = inst_28006);

(statearr_28108[(20)] = inst_28007);

(statearr_28108[(29)] = inst_27997__$1);

(statearr_28108[(30)] = inst_27999);

(statearr_28108[(21)] = inst_28005);

(statearr_28108[(11)] = inst_28008);

return statearr_28108;
})();
var statearr_28109_28178 = state_28065__$1;
(statearr_28109_28178[(2)] = null);

(statearr_28109_28178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (28))){
var inst_28024 = (state_28065[(25)]);
var inst_28005 = (state_28065[(21)]);
var inst_28024__$1 = cljs.core.seq.call(null,inst_28005);
var state_28065__$1 = (function (){var statearr_28110 = state_28065;
(statearr_28110[(25)] = inst_28024__$1);

return statearr_28110;
})();
if(inst_28024__$1){
var statearr_28111_28179 = state_28065__$1;
(statearr_28111_28179[(1)] = (33));

} else {
var statearr_28112_28180 = state_28065__$1;
(statearr_28112_28180[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (25))){
var inst_28007 = (state_28065[(20)]);
var inst_28008 = (state_28065[(11)]);
var inst_28010 = (inst_28008 < inst_28007);
var inst_28011 = inst_28010;
var state_28065__$1 = state_28065;
if(cljs.core.truth_(inst_28011)){
var statearr_28113_28181 = state_28065__$1;
(statearr_28113_28181[(1)] = (27));

} else {
var statearr_28114_28182 = state_28065__$1;
(statearr_28114_28182[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (34))){
var state_28065__$1 = state_28065;
var statearr_28115_28183 = state_28065__$1;
(statearr_28115_28183[(2)] = null);

(statearr_28115_28183[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (17))){
var state_28065__$1 = state_28065;
var statearr_28116_28184 = state_28065__$1;
(statearr_28116_28184[(2)] = null);

(statearr_28116_28184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (3))){
var inst_28063 = (state_28065[(2)]);
var state_28065__$1 = state_28065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28065__$1,inst_28063);
} else {
if((state_val_28066 === (12))){
var inst_27992 = (state_28065[(2)]);
var state_28065__$1 = state_28065;
var statearr_28117_28185 = state_28065__$1;
(statearr_28117_28185[(2)] = inst_27992);

(statearr_28117_28185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (2))){
var state_28065__$1 = state_28065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28065__$1,(4),ch);
} else {
if((state_val_28066 === (23))){
var state_28065__$1 = state_28065;
var statearr_28118_28186 = state_28065__$1;
(statearr_28118_28186[(2)] = null);

(statearr_28118_28186[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (35))){
var inst_28047 = (state_28065[(2)]);
var state_28065__$1 = state_28065;
var statearr_28119_28187 = state_28065__$1;
(statearr_28119_28187[(2)] = inst_28047);

(statearr_28119_28187[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (19))){
var inst_27966 = (state_28065[(7)]);
var inst_27970 = cljs.core.chunk_first.call(null,inst_27966);
var inst_27971 = cljs.core.chunk_rest.call(null,inst_27966);
var inst_27972 = cljs.core.count.call(null,inst_27970);
var inst_27946 = inst_27971;
var inst_27947 = inst_27970;
var inst_27948 = inst_27972;
var inst_27949 = (0);
var state_28065__$1 = (function (){var statearr_28120 = state_28065;
(statearr_28120[(13)] = inst_27949);

(statearr_28120[(14)] = inst_27948);

(statearr_28120[(15)] = inst_27946);

(statearr_28120[(16)] = inst_27947);

return statearr_28120;
})();
var statearr_28121_28188 = state_28065__$1;
(statearr_28121_28188[(2)] = null);

(statearr_28121_28188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (11))){
var inst_27966 = (state_28065[(7)]);
var inst_27946 = (state_28065[(15)]);
var inst_27966__$1 = cljs.core.seq.call(null,inst_27946);
var state_28065__$1 = (function (){var statearr_28122 = state_28065;
(statearr_28122[(7)] = inst_27966__$1);

return statearr_28122;
})();
if(inst_27966__$1){
var statearr_28123_28189 = state_28065__$1;
(statearr_28123_28189[(1)] = (16));

} else {
var statearr_28124_28190 = state_28065__$1;
(statearr_28124_28190[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (9))){
var inst_27994 = (state_28065[(2)]);
var state_28065__$1 = state_28065;
var statearr_28125_28191 = state_28065__$1;
(statearr_28125_28191[(2)] = inst_27994);

(statearr_28125_28191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (5))){
var inst_27944 = cljs.core.deref.call(null,cs);
var inst_27945 = cljs.core.seq.call(null,inst_27944);
var inst_27946 = inst_27945;
var inst_27947 = null;
var inst_27948 = (0);
var inst_27949 = (0);
var state_28065__$1 = (function (){var statearr_28126 = state_28065;
(statearr_28126[(13)] = inst_27949);

(statearr_28126[(14)] = inst_27948);

(statearr_28126[(15)] = inst_27946);

(statearr_28126[(16)] = inst_27947);

return statearr_28126;
})();
var statearr_28127_28192 = state_28065__$1;
(statearr_28127_28192[(2)] = null);

(statearr_28127_28192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (14))){
var state_28065__$1 = state_28065;
var statearr_28128_28193 = state_28065__$1;
(statearr_28128_28193[(2)] = null);

(statearr_28128_28193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (45))){
var inst_28055 = (state_28065[(2)]);
var state_28065__$1 = state_28065;
var statearr_28129_28194 = state_28065__$1;
(statearr_28129_28194[(2)] = inst_28055);

(statearr_28129_28194[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (26))){
var inst_27997 = (state_28065[(29)]);
var inst_28051 = (state_28065[(2)]);
var inst_28052 = cljs.core.seq.call(null,inst_27997);
var state_28065__$1 = (function (){var statearr_28130 = state_28065;
(statearr_28130[(31)] = inst_28051);

return statearr_28130;
})();
if(inst_28052){
var statearr_28131_28195 = state_28065__$1;
(statearr_28131_28195[(1)] = (42));

} else {
var statearr_28132_28196 = state_28065__$1;
(statearr_28132_28196[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (16))){
var inst_27966 = (state_28065[(7)]);
var inst_27968 = cljs.core.chunked_seq_QMARK_.call(null,inst_27966);
var state_28065__$1 = state_28065;
if(inst_27968){
var statearr_28133_28197 = state_28065__$1;
(statearr_28133_28197[(1)] = (19));

} else {
var statearr_28134_28198 = state_28065__$1;
(statearr_28134_28198[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (38))){
var inst_28044 = (state_28065[(2)]);
var state_28065__$1 = state_28065;
var statearr_28135_28199 = state_28065__$1;
(statearr_28135_28199[(2)] = inst_28044);

(statearr_28135_28199[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (30))){
var state_28065__$1 = state_28065;
var statearr_28136_28200 = state_28065__$1;
(statearr_28136_28200[(2)] = null);

(statearr_28136_28200[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (10))){
var inst_27949 = (state_28065[(13)]);
var inst_27947 = (state_28065[(16)]);
var inst_27955 = cljs.core._nth.call(null,inst_27947,inst_27949);
var inst_27956 = cljs.core.nth.call(null,inst_27955,(0),null);
var inst_27957 = cljs.core.nth.call(null,inst_27955,(1),null);
var state_28065__$1 = (function (){var statearr_28137 = state_28065;
(statearr_28137[(26)] = inst_27956);

return statearr_28137;
})();
if(cljs.core.truth_(inst_27957)){
var statearr_28138_28201 = state_28065__$1;
(statearr_28138_28201[(1)] = (13));

} else {
var statearr_28139_28202 = state_28065__$1;
(statearr_28139_28202[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (18))){
var inst_27990 = (state_28065[(2)]);
var state_28065__$1 = state_28065;
var statearr_28140_28203 = state_28065__$1;
(statearr_28140_28203[(2)] = inst_27990);

(statearr_28140_28203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (42))){
var state_28065__$1 = state_28065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28065__$1,(45),dchan);
} else {
if((state_val_28066 === (37))){
var inst_28024 = (state_28065[(25)]);
var inst_28033 = (state_28065[(23)]);
var inst_27937 = (state_28065[(10)]);
var inst_28033__$1 = cljs.core.first.call(null,inst_28024);
var inst_28034 = cljs.core.async.put_BANG_.call(null,inst_28033__$1,inst_27937,done);
var state_28065__$1 = (function (){var statearr_28141 = state_28065;
(statearr_28141[(23)] = inst_28033__$1);

return statearr_28141;
})();
if(cljs.core.truth_(inst_28034)){
var statearr_28142_28204 = state_28065__$1;
(statearr_28142_28204[(1)] = (39));

} else {
var statearr_28143_28205 = state_28065__$1;
(statearr_28143_28205[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28066 === (8))){
var inst_27949 = (state_28065[(13)]);
var inst_27948 = (state_28065[(14)]);
var inst_27951 = (inst_27949 < inst_27948);
var inst_27952 = inst_27951;
var state_28065__$1 = state_28065;
if(cljs.core.truth_(inst_27952)){
var statearr_28144_28206 = state_28065__$1;
(statearr_28144_28206[(1)] = (10));

} else {
var statearr_28145_28207 = state_28065__$1;
(statearr_28145_28207[(1)] = (11));

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
});})(c__15889__auto___28153,cs,m,dchan,dctr,done))
;
return ((function (switch__15833__auto__,c__15889__auto___28153,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_28149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28149[(0)] = state_machine__15834__auto__);

(statearr_28149[(1)] = (1));

return statearr_28149;
});
var state_machine__15834__auto____1 = (function (state_28065){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_28065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e28150){if((e28150 instanceof Object)){
var ex__15837__auto__ = e28150;
var statearr_28151_28208 = state_28065;
(statearr_28151_28208[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28209 = state_28065;
state_28065 = G__28209;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_28065){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_28065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto___28153,cs,m,dchan,dctr,done))
})();
var state__15891__auto__ = (function (){var statearr_28152 = f__15890__auto__.call(null);
(statearr_28152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___28153);

return statearr_28152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto___28153,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj28211 = {};
return obj28211;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__13219__auto__ = m;
if(and__13219__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__13219__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__13875__auto__ = (((m == null))?null:m);
return (function (){var or__13231__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13875__auto__)]);
if(or__13231__auto__){
return or__13231__auto__;
} else {
var or__13231__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__13231__auto____$1){
return or__13231__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__13219__auto__ = m;
if(and__13219__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__13219__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__13875__auto__ = (((m == null))?null:m);
return (function (){var or__13231__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13875__auto__)]);
if(or__13231__auto__){
return or__13231__auto__;
} else {
var or__13231__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__13231__auto____$1){
return or__13231__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__13219__auto__ = m;
if(and__13219__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__13219__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__13875__auto__ = (((m == null))?null:m);
return (function (){var or__13231__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13875__auto__)]);
if(or__13231__auto__){
return or__13231__auto__;
} else {
var or__13231__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__13231__auto____$1){
return or__13231__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__13219__auto__ = m;
if(and__13219__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__13219__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__13875__auto__ = (((m == null))?null:m);
return (function (){var or__13231__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13875__auto__)]);
if(or__13231__auto__){
return or__13231__auto__;
} else {
var or__13231__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__13231__auto____$1){
return or__13231__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__13219__auto__ = m;
if(and__13219__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__13219__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__13875__auto__ = (((m == null))?null:m);
return (function (){var or__13231__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13875__auto__)]);
if(or__13231__auto__){
return or__13231__auto__;
} else {
var or__13231__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__13231__auto____$1){
return or__13231__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__28212){
var map__28217 = p__28212;
var map__28217__$1 = ((cljs.core.seq_QMARK_.call(null,map__28217))?cljs.core.apply.call(null,cljs.core.hash_map,map__28217):map__28217);
var opts = map__28217__$1;
var statearr_28218_28221 = state;
(statearr_28218_28221[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__28217,map__28217__$1,opts){
return (function (val){
var statearr_28219_28222 = state;
(statearr_28219_28222[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28217,map__28217__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_28220_28223 = state;
(statearr_28220_28223[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__28212 = null;
if (arguments.length > 3) {
var G__28224__i = 0, G__28224__a = new Array(arguments.length -  3);
while (G__28224__i < G__28224__a.length) {G__28224__a[G__28224__i] = arguments[G__28224__i + 3]; ++G__28224__i;}
  p__28212 = new cljs.core.IndexedSeq(G__28224__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__28212);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__28225){
var state = cljs.core.first(arglist__28225);
arglist__28225 = cljs.core.next(arglist__28225);
var cont_block = cljs.core.first(arglist__28225);
arglist__28225 = cljs.core.next(arglist__28225);
var ports = cljs.core.first(arglist__28225);
var p__28212 = cljs.core.rest(arglist__28225);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__28212);
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
if(typeof cljs.core.async.t28345 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28345 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28346){
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
this.meta28346 = meta28346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28345.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28345.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28345.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28345.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28345.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28345.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t28345.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28345.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28345.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28347){
var self__ = this;
var _28347__$1 = this;
return self__.meta28346;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28347,meta28346__$1){
var self__ = this;
var _28347__$1 = this;
return (new cljs.core.async.t28345(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28346__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28345.cljs$lang$type = true;

cljs.core.async.t28345.cljs$lang$ctorStr = "cljs.core.async/t28345";

cljs.core.async.t28345.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13818__auto__,writer__13819__auto__,opt__13820__auto__){
return cljs.core._write.call(null,writer__13819__auto__,"cljs.core.async/t28345");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28345 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t28345(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28346){
return (new cljs.core.async.t28345(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28346));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28345(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15889__auto___28464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto___28464,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto___28464,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28417){
var state_val_28418 = (state_28417[(1)]);
if((state_val_28418 === (7))){
var inst_28361 = (state_28417[(7)]);
var inst_28366 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28361);
var state_28417__$1 = state_28417;
var statearr_28419_28465 = state_28417__$1;
(statearr_28419_28465[(2)] = inst_28366);

(statearr_28419_28465[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (20))){
var inst_28376 = (state_28417[(8)]);
var state_28417__$1 = state_28417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28417__$1,(23),out,inst_28376);
} else {
if((state_val_28418 === (1))){
var inst_28351 = (state_28417[(9)]);
var inst_28351__$1 = calc_state.call(null);
var inst_28352 = cljs.core.seq_QMARK_.call(null,inst_28351__$1);
var state_28417__$1 = (function (){var statearr_28420 = state_28417;
(statearr_28420[(9)] = inst_28351__$1);

return statearr_28420;
})();
if(inst_28352){
var statearr_28421_28466 = state_28417__$1;
(statearr_28421_28466[(1)] = (2));

} else {
var statearr_28422_28467 = state_28417__$1;
(statearr_28422_28467[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (24))){
var inst_28369 = (state_28417[(10)]);
var inst_28361 = inst_28369;
var state_28417__$1 = (function (){var statearr_28423 = state_28417;
(statearr_28423[(7)] = inst_28361);

return statearr_28423;
})();
var statearr_28424_28468 = state_28417__$1;
(statearr_28424_28468[(2)] = null);

(statearr_28424_28468[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (4))){
var inst_28351 = (state_28417[(9)]);
var inst_28357 = (state_28417[(2)]);
var inst_28358 = cljs.core.get.call(null,inst_28357,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28359 = cljs.core.get.call(null,inst_28357,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28360 = cljs.core.get.call(null,inst_28357,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28361 = inst_28351;
var state_28417__$1 = (function (){var statearr_28425 = state_28417;
(statearr_28425[(7)] = inst_28361);

(statearr_28425[(11)] = inst_28360);

(statearr_28425[(12)] = inst_28359);

(statearr_28425[(13)] = inst_28358);

return statearr_28425;
})();
var statearr_28426_28469 = state_28417__$1;
(statearr_28426_28469[(2)] = null);

(statearr_28426_28469[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (15))){
var state_28417__$1 = state_28417;
var statearr_28427_28470 = state_28417__$1;
(statearr_28427_28470[(2)] = null);

(statearr_28427_28470[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (21))){
var inst_28369 = (state_28417[(10)]);
var inst_28361 = inst_28369;
var state_28417__$1 = (function (){var statearr_28428 = state_28417;
(statearr_28428[(7)] = inst_28361);

return statearr_28428;
})();
var statearr_28429_28471 = state_28417__$1;
(statearr_28429_28471[(2)] = null);

(statearr_28429_28471[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (13))){
var inst_28413 = (state_28417[(2)]);
var state_28417__$1 = state_28417;
var statearr_28430_28472 = state_28417__$1;
(statearr_28430_28472[(2)] = inst_28413);

(statearr_28430_28472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (22))){
var inst_28411 = (state_28417[(2)]);
var state_28417__$1 = state_28417;
var statearr_28431_28473 = state_28417__$1;
(statearr_28431_28473[(2)] = inst_28411);

(statearr_28431_28473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (6))){
var inst_28415 = (state_28417[(2)]);
var state_28417__$1 = state_28417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28417__$1,inst_28415);
} else {
if((state_val_28418 === (25))){
var state_28417__$1 = state_28417;
var statearr_28432_28474 = state_28417__$1;
(statearr_28432_28474[(2)] = null);

(statearr_28432_28474[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (17))){
var inst_28391 = (state_28417[(14)]);
var state_28417__$1 = state_28417;
var statearr_28433_28475 = state_28417__$1;
(statearr_28433_28475[(2)] = inst_28391);

(statearr_28433_28475[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (3))){
var inst_28351 = (state_28417[(9)]);
var state_28417__$1 = state_28417;
var statearr_28434_28476 = state_28417__$1;
(statearr_28434_28476[(2)] = inst_28351);

(statearr_28434_28476[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (12))){
var inst_28372 = (state_28417[(15)]);
var inst_28391 = (state_28417[(14)]);
var inst_28377 = (state_28417[(16)]);
var inst_28391__$1 = inst_28372.call(null,inst_28377);
var state_28417__$1 = (function (){var statearr_28435 = state_28417;
(statearr_28435[(14)] = inst_28391__$1);

return statearr_28435;
})();
if(cljs.core.truth_(inst_28391__$1)){
var statearr_28436_28477 = state_28417__$1;
(statearr_28436_28477[(1)] = (17));

} else {
var statearr_28437_28478 = state_28417__$1;
(statearr_28437_28478[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (2))){
var inst_28351 = (state_28417[(9)]);
var inst_28354 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28351);
var state_28417__$1 = state_28417;
var statearr_28438_28479 = state_28417__$1;
(statearr_28438_28479[(2)] = inst_28354);

(statearr_28438_28479[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (23))){
var inst_28402 = (state_28417[(2)]);
var state_28417__$1 = state_28417;
if(cljs.core.truth_(inst_28402)){
var statearr_28439_28480 = state_28417__$1;
(statearr_28439_28480[(1)] = (24));

} else {
var statearr_28440_28481 = state_28417__$1;
(statearr_28440_28481[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (19))){
var inst_28399 = (state_28417[(2)]);
var state_28417__$1 = state_28417;
if(cljs.core.truth_(inst_28399)){
var statearr_28441_28482 = state_28417__$1;
(statearr_28441_28482[(1)] = (20));

} else {
var statearr_28442_28483 = state_28417__$1;
(statearr_28442_28483[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (11))){
var inst_28376 = (state_28417[(8)]);
var inst_28382 = (inst_28376 == null);
var state_28417__$1 = state_28417;
if(cljs.core.truth_(inst_28382)){
var statearr_28443_28484 = state_28417__$1;
(statearr_28443_28484[(1)] = (14));

} else {
var statearr_28444_28485 = state_28417__$1;
(statearr_28444_28485[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (9))){
var inst_28369 = (state_28417[(10)]);
var inst_28369__$1 = (state_28417[(2)]);
var inst_28370 = cljs.core.get.call(null,inst_28369__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28371 = cljs.core.get.call(null,inst_28369__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28372 = cljs.core.get.call(null,inst_28369__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28417__$1 = (function (){var statearr_28445 = state_28417;
(statearr_28445[(15)] = inst_28372);

(statearr_28445[(17)] = inst_28371);

(statearr_28445[(10)] = inst_28369__$1);

return statearr_28445;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28417__$1,(10),inst_28370);
} else {
if((state_val_28418 === (5))){
var inst_28361 = (state_28417[(7)]);
var inst_28364 = cljs.core.seq_QMARK_.call(null,inst_28361);
var state_28417__$1 = state_28417;
if(inst_28364){
var statearr_28446_28486 = state_28417__$1;
(statearr_28446_28486[(1)] = (7));

} else {
var statearr_28447_28487 = state_28417__$1;
(statearr_28447_28487[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (14))){
var inst_28377 = (state_28417[(16)]);
var inst_28384 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28377);
var state_28417__$1 = state_28417;
var statearr_28448_28488 = state_28417__$1;
(statearr_28448_28488[(2)] = inst_28384);

(statearr_28448_28488[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (26))){
var inst_28407 = (state_28417[(2)]);
var state_28417__$1 = state_28417;
var statearr_28449_28489 = state_28417__$1;
(statearr_28449_28489[(2)] = inst_28407);

(statearr_28449_28489[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (16))){
var inst_28387 = (state_28417[(2)]);
var inst_28388 = calc_state.call(null);
var inst_28361 = inst_28388;
var state_28417__$1 = (function (){var statearr_28450 = state_28417;
(statearr_28450[(7)] = inst_28361);

(statearr_28450[(18)] = inst_28387);

return statearr_28450;
})();
var statearr_28451_28490 = state_28417__$1;
(statearr_28451_28490[(2)] = null);

(statearr_28451_28490[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (10))){
var inst_28377 = (state_28417[(16)]);
var inst_28376 = (state_28417[(8)]);
var inst_28375 = (state_28417[(2)]);
var inst_28376__$1 = cljs.core.nth.call(null,inst_28375,(0),null);
var inst_28377__$1 = cljs.core.nth.call(null,inst_28375,(1),null);
var inst_28378 = (inst_28376__$1 == null);
var inst_28379 = cljs.core._EQ_.call(null,inst_28377__$1,change);
var inst_28380 = (inst_28378) || (inst_28379);
var state_28417__$1 = (function (){var statearr_28452 = state_28417;
(statearr_28452[(16)] = inst_28377__$1);

(statearr_28452[(8)] = inst_28376__$1);

return statearr_28452;
})();
if(cljs.core.truth_(inst_28380)){
var statearr_28453_28491 = state_28417__$1;
(statearr_28453_28491[(1)] = (11));

} else {
var statearr_28454_28492 = state_28417__$1;
(statearr_28454_28492[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (18))){
var inst_28372 = (state_28417[(15)]);
var inst_28371 = (state_28417[(17)]);
var inst_28377 = (state_28417[(16)]);
var inst_28394 = cljs.core.empty_QMARK_.call(null,inst_28372);
var inst_28395 = inst_28371.call(null,inst_28377);
var inst_28396 = cljs.core.not.call(null,inst_28395);
var inst_28397 = (inst_28394) && (inst_28396);
var state_28417__$1 = state_28417;
var statearr_28455_28493 = state_28417__$1;
(statearr_28455_28493[(2)] = inst_28397);

(statearr_28455_28493[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (8))){
var inst_28361 = (state_28417[(7)]);
var state_28417__$1 = state_28417;
var statearr_28456_28494 = state_28417__$1;
(statearr_28456_28494[(2)] = inst_28361);

(statearr_28456_28494[(1)] = (9));


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
});})(c__15889__auto___28464,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15833__auto__,c__15889__auto___28464,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_28460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28460[(0)] = state_machine__15834__auto__);

(statearr_28460[(1)] = (1));

return statearr_28460;
});
var state_machine__15834__auto____1 = (function (state_28417){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_28417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e28461){if((e28461 instanceof Object)){
var ex__15837__auto__ = e28461;
var statearr_28462_28495 = state_28417;
(statearr_28462_28495[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28496 = state_28417;
state_28417 = G__28496;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_28417){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_28417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto___28464,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15891__auto__ = (function (){var statearr_28463 = f__15890__auto__.call(null);
(statearr_28463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___28464);

return statearr_28463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto___28464,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj28498 = {};
return obj28498;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__13219__auto__ = p;
if(and__13219__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__13219__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__13875__auto__ = (((p == null))?null:p);
return (function (){var or__13231__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13875__auto__)]);
if(or__13231__auto__){
return or__13231__auto__;
} else {
var or__13231__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__13231__auto____$1){
return or__13231__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__13219__auto__ = p;
if(and__13219__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__13219__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__13875__auto__ = (((p == null))?null:p);
return (function (){var or__13231__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13875__auto__)]);
if(or__13231__auto__){
return or__13231__auto__;
} else {
var or__13231__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__13231__auto____$1){
return or__13231__auto____$1;
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
if((function (){var and__13219__auto__ = p;
if(and__13219__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__13219__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__13875__auto__ = (((p == null))?null:p);
return (function (){var or__13231__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13875__auto__)]);
if(or__13231__auto__){
return or__13231__auto__;
} else {
var or__13231__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__13231__auto____$1){
return or__13231__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__13219__auto__ = p;
if(and__13219__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__13219__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__13875__auto__ = (((p == null))?null:p);
return (function (){var or__13231__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13875__auto__)]);
if(or__13231__auto__){
return or__13231__auto__;
} else {
var or__13231__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__13231__auto____$1){
return or__13231__auto____$1;
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
var or__13231__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__13231__auto__)){
return or__13231__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__13231__auto__,mults){
return (function (p1__28499_SHARP_){
if(cljs.core.truth_(p1__28499_SHARP_.call(null,topic))){
return p1__28499_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28499_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13231__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28622 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28622 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta28623){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta28623 = meta28623;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28622.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28622.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28622.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t28622.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28622.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28622.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28622.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28622.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28624){
var self__ = this;
var _28624__$1 = this;
return self__.meta28623;
});})(mults,ensure_mult))
;

cljs.core.async.t28622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28624,meta28623__$1){
var self__ = this;
var _28624__$1 = this;
return (new cljs.core.async.t28622(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta28623__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28622.cljs$lang$type = true;

cljs.core.async.t28622.cljs$lang$ctorStr = "cljs.core.async/t28622";

cljs.core.async.t28622.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13818__auto__,writer__13819__auto__,opt__13820__auto__){
return cljs.core._write.call(null,writer__13819__auto__,"cljs.core.async/t28622");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28622 = ((function (mults,ensure_mult){
return (function __GT_t28622(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28623){
return (new cljs.core.async.t28622(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28623));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28622(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15889__auto___28744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto___28744,mults,ensure_mult,p){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto___28744,mults,ensure_mult,p){
return (function (state_28696){
var state_val_28697 = (state_28696[(1)]);
if((state_val_28697 === (7))){
var inst_28692 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28698_28745 = state_28696__$1;
(statearr_28698_28745[(2)] = inst_28692);

(statearr_28698_28745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (20))){
var state_28696__$1 = state_28696;
var statearr_28699_28746 = state_28696__$1;
(statearr_28699_28746[(2)] = null);

(statearr_28699_28746[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (1))){
var state_28696__$1 = state_28696;
var statearr_28700_28747 = state_28696__$1;
(statearr_28700_28747[(2)] = null);

(statearr_28700_28747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (24))){
var inst_28675 = (state_28696[(7)]);
var inst_28684 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28675);
var state_28696__$1 = state_28696;
var statearr_28701_28748 = state_28696__$1;
(statearr_28701_28748[(2)] = inst_28684);

(statearr_28701_28748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (4))){
var inst_28627 = (state_28696[(8)]);
var inst_28627__$1 = (state_28696[(2)]);
var inst_28628 = (inst_28627__$1 == null);
var state_28696__$1 = (function (){var statearr_28702 = state_28696;
(statearr_28702[(8)] = inst_28627__$1);

return statearr_28702;
})();
if(cljs.core.truth_(inst_28628)){
var statearr_28703_28749 = state_28696__$1;
(statearr_28703_28749[(1)] = (5));

} else {
var statearr_28704_28750 = state_28696__$1;
(statearr_28704_28750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (15))){
var inst_28669 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28705_28751 = state_28696__$1;
(statearr_28705_28751[(2)] = inst_28669);

(statearr_28705_28751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (21))){
var inst_28689 = (state_28696[(2)]);
var state_28696__$1 = (function (){var statearr_28706 = state_28696;
(statearr_28706[(9)] = inst_28689);

return statearr_28706;
})();
var statearr_28707_28752 = state_28696__$1;
(statearr_28707_28752[(2)] = null);

(statearr_28707_28752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (13))){
var inst_28651 = (state_28696[(10)]);
var inst_28653 = cljs.core.chunked_seq_QMARK_.call(null,inst_28651);
var state_28696__$1 = state_28696;
if(inst_28653){
var statearr_28708_28753 = state_28696__$1;
(statearr_28708_28753[(1)] = (16));

} else {
var statearr_28709_28754 = state_28696__$1;
(statearr_28709_28754[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (22))){
var inst_28681 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
if(cljs.core.truth_(inst_28681)){
var statearr_28710_28755 = state_28696__$1;
(statearr_28710_28755[(1)] = (23));

} else {
var statearr_28711_28756 = state_28696__$1;
(statearr_28711_28756[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (6))){
var inst_28677 = (state_28696[(11)]);
var inst_28675 = (state_28696[(7)]);
var inst_28627 = (state_28696[(8)]);
var inst_28675__$1 = topic_fn.call(null,inst_28627);
var inst_28676 = cljs.core.deref.call(null,mults);
var inst_28677__$1 = cljs.core.get.call(null,inst_28676,inst_28675__$1);
var state_28696__$1 = (function (){var statearr_28712 = state_28696;
(statearr_28712[(11)] = inst_28677__$1);

(statearr_28712[(7)] = inst_28675__$1);

return statearr_28712;
})();
if(cljs.core.truth_(inst_28677__$1)){
var statearr_28713_28757 = state_28696__$1;
(statearr_28713_28757[(1)] = (19));

} else {
var statearr_28714_28758 = state_28696__$1;
(statearr_28714_28758[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (25))){
var inst_28686 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28715_28759 = state_28696__$1;
(statearr_28715_28759[(2)] = inst_28686);

(statearr_28715_28759[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (17))){
var inst_28651 = (state_28696[(10)]);
var inst_28660 = cljs.core.first.call(null,inst_28651);
var inst_28661 = cljs.core.async.muxch_STAR_.call(null,inst_28660);
var inst_28662 = cljs.core.async.close_BANG_.call(null,inst_28661);
var inst_28663 = cljs.core.next.call(null,inst_28651);
var inst_28637 = inst_28663;
var inst_28638 = null;
var inst_28639 = (0);
var inst_28640 = (0);
var state_28696__$1 = (function (){var statearr_28716 = state_28696;
(statearr_28716[(12)] = inst_28638);

(statearr_28716[(13)] = inst_28640);

(statearr_28716[(14)] = inst_28662);

(statearr_28716[(15)] = inst_28637);

(statearr_28716[(16)] = inst_28639);

return statearr_28716;
})();
var statearr_28717_28760 = state_28696__$1;
(statearr_28717_28760[(2)] = null);

(statearr_28717_28760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (3))){
var inst_28694 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28696__$1,inst_28694);
} else {
if((state_val_28697 === (12))){
var inst_28671 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28718_28761 = state_28696__$1;
(statearr_28718_28761[(2)] = inst_28671);

(statearr_28718_28761[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (2))){
var state_28696__$1 = state_28696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28696__$1,(4),ch);
} else {
if((state_val_28697 === (23))){
var state_28696__$1 = state_28696;
var statearr_28719_28762 = state_28696__$1;
(statearr_28719_28762[(2)] = null);

(statearr_28719_28762[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (19))){
var inst_28677 = (state_28696[(11)]);
var inst_28627 = (state_28696[(8)]);
var inst_28679 = cljs.core.async.muxch_STAR_.call(null,inst_28677);
var state_28696__$1 = state_28696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28696__$1,(22),inst_28679,inst_28627);
} else {
if((state_val_28697 === (11))){
var inst_28637 = (state_28696[(15)]);
var inst_28651 = (state_28696[(10)]);
var inst_28651__$1 = cljs.core.seq.call(null,inst_28637);
var state_28696__$1 = (function (){var statearr_28720 = state_28696;
(statearr_28720[(10)] = inst_28651__$1);

return statearr_28720;
})();
if(inst_28651__$1){
var statearr_28721_28763 = state_28696__$1;
(statearr_28721_28763[(1)] = (13));

} else {
var statearr_28722_28764 = state_28696__$1;
(statearr_28722_28764[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (9))){
var inst_28673 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28723_28765 = state_28696__$1;
(statearr_28723_28765[(2)] = inst_28673);

(statearr_28723_28765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (5))){
var inst_28634 = cljs.core.deref.call(null,mults);
var inst_28635 = cljs.core.vals.call(null,inst_28634);
var inst_28636 = cljs.core.seq.call(null,inst_28635);
var inst_28637 = inst_28636;
var inst_28638 = null;
var inst_28639 = (0);
var inst_28640 = (0);
var state_28696__$1 = (function (){var statearr_28724 = state_28696;
(statearr_28724[(12)] = inst_28638);

(statearr_28724[(13)] = inst_28640);

(statearr_28724[(15)] = inst_28637);

(statearr_28724[(16)] = inst_28639);

return statearr_28724;
})();
var statearr_28725_28766 = state_28696__$1;
(statearr_28725_28766[(2)] = null);

(statearr_28725_28766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (14))){
var state_28696__$1 = state_28696;
var statearr_28729_28767 = state_28696__$1;
(statearr_28729_28767[(2)] = null);

(statearr_28729_28767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (16))){
var inst_28651 = (state_28696[(10)]);
var inst_28655 = cljs.core.chunk_first.call(null,inst_28651);
var inst_28656 = cljs.core.chunk_rest.call(null,inst_28651);
var inst_28657 = cljs.core.count.call(null,inst_28655);
var inst_28637 = inst_28656;
var inst_28638 = inst_28655;
var inst_28639 = inst_28657;
var inst_28640 = (0);
var state_28696__$1 = (function (){var statearr_28730 = state_28696;
(statearr_28730[(12)] = inst_28638);

(statearr_28730[(13)] = inst_28640);

(statearr_28730[(15)] = inst_28637);

(statearr_28730[(16)] = inst_28639);

return statearr_28730;
})();
var statearr_28731_28768 = state_28696__$1;
(statearr_28731_28768[(2)] = null);

(statearr_28731_28768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (10))){
var inst_28638 = (state_28696[(12)]);
var inst_28640 = (state_28696[(13)]);
var inst_28637 = (state_28696[(15)]);
var inst_28639 = (state_28696[(16)]);
var inst_28645 = cljs.core._nth.call(null,inst_28638,inst_28640);
var inst_28646 = cljs.core.async.muxch_STAR_.call(null,inst_28645);
var inst_28647 = cljs.core.async.close_BANG_.call(null,inst_28646);
var inst_28648 = (inst_28640 + (1));
var tmp28726 = inst_28638;
var tmp28727 = inst_28637;
var tmp28728 = inst_28639;
var inst_28637__$1 = tmp28727;
var inst_28638__$1 = tmp28726;
var inst_28639__$1 = tmp28728;
var inst_28640__$1 = inst_28648;
var state_28696__$1 = (function (){var statearr_28732 = state_28696;
(statearr_28732[(12)] = inst_28638__$1);

(statearr_28732[(13)] = inst_28640__$1);

(statearr_28732[(17)] = inst_28647);

(statearr_28732[(15)] = inst_28637__$1);

(statearr_28732[(16)] = inst_28639__$1);

return statearr_28732;
})();
var statearr_28733_28769 = state_28696__$1;
(statearr_28733_28769[(2)] = null);

(statearr_28733_28769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (18))){
var inst_28666 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28734_28770 = state_28696__$1;
(statearr_28734_28770[(2)] = inst_28666);

(statearr_28734_28770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (8))){
var inst_28640 = (state_28696[(13)]);
var inst_28639 = (state_28696[(16)]);
var inst_28642 = (inst_28640 < inst_28639);
var inst_28643 = inst_28642;
var state_28696__$1 = state_28696;
if(cljs.core.truth_(inst_28643)){
var statearr_28735_28771 = state_28696__$1;
(statearr_28735_28771[(1)] = (10));

} else {
var statearr_28736_28772 = state_28696__$1;
(statearr_28736_28772[(1)] = (11));

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
});})(c__15889__auto___28744,mults,ensure_mult,p))
;
return ((function (switch__15833__auto__,c__15889__auto___28744,mults,ensure_mult,p){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_28740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28740[(0)] = state_machine__15834__auto__);

(statearr_28740[(1)] = (1));

return statearr_28740;
});
var state_machine__15834__auto____1 = (function (state_28696){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_28696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e28741){if((e28741 instanceof Object)){
var ex__15837__auto__ = e28741;
var statearr_28742_28773 = state_28696;
(statearr_28742_28773[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28774 = state_28696;
state_28696 = G__28774;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_28696){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_28696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto___28744,mults,ensure_mult,p))
})();
var state__15891__auto__ = (function (){var statearr_28743 = f__15890__auto__.call(null);
(statearr_28743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___28744);

return statearr_28743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto___28744,mults,ensure_mult,p))
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
var c__15889__auto___28911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto___28911,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto___28911,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28881){
var state_val_28882 = (state_28881[(1)]);
if((state_val_28882 === (7))){
var state_28881__$1 = state_28881;
var statearr_28883_28912 = state_28881__$1;
(statearr_28883_28912[(2)] = null);

(statearr_28883_28912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (1))){
var state_28881__$1 = state_28881;
var statearr_28884_28913 = state_28881__$1;
(statearr_28884_28913[(2)] = null);

(statearr_28884_28913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (4))){
var inst_28845 = (state_28881[(7)]);
var inst_28847 = (inst_28845 < cnt);
var state_28881__$1 = state_28881;
if(cljs.core.truth_(inst_28847)){
var statearr_28885_28914 = state_28881__$1;
(statearr_28885_28914[(1)] = (6));

} else {
var statearr_28886_28915 = state_28881__$1;
(statearr_28886_28915[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (15))){
var inst_28877 = (state_28881[(2)]);
var state_28881__$1 = state_28881;
var statearr_28887_28916 = state_28881__$1;
(statearr_28887_28916[(2)] = inst_28877);

(statearr_28887_28916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (13))){
var inst_28870 = cljs.core.async.close_BANG_.call(null,out);
var state_28881__$1 = state_28881;
var statearr_28888_28917 = state_28881__$1;
(statearr_28888_28917[(2)] = inst_28870);

(statearr_28888_28917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (6))){
var state_28881__$1 = state_28881;
var statearr_28889_28918 = state_28881__$1;
(statearr_28889_28918[(2)] = null);

(statearr_28889_28918[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (3))){
var inst_28879 = (state_28881[(2)]);
var state_28881__$1 = state_28881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28881__$1,inst_28879);
} else {
if((state_val_28882 === (12))){
var inst_28867 = (state_28881[(8)]);
var inst_28867__$1 = (state_28881[(2)]);
var inst_28868 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28867__$1);
var state_28881__$1 = (function (){var statearr_28890 = state_28881;
(statearr_28890[(8)] = inst_28867__$1);

return statearr_28890;
})();
if(cljs.core.truth_(inst_28868)){
var statearr_28891_28919 = state_28881__$1;
(statearr_28891_28919[(1)] = (13));

} else {
var statearr_28892_28920 = state_28881__$1;
(statearr_28892_28920[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (2))){
var inst_28844 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28845 = (0);
var state_28881__$1 = (function (){var statearr_28893 = state_28881;
(statearr_28893[(9)] = inst_28844);

(statearr_28893[(7)] = inst_28845);

return statearr_28893;
})();
var statearr_28894_28921 = state_28881__$1;
(statearr_28894_28921[(2)] = null);

(statearr_28894_28921[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (11))){
var inst_28845 = (state_28881[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28881,(10),Object,null,(9));
var inst_28854 = chs__$1.call(null,inst_28845);
var inst_28855 = done.call(null,inst_28845);
var inst_28856 = cljs.core.async.take_BANG_.call(null,inst_28854,inst_28855);
var state_28881__$1 = state_28881;
var statearr_28895_28922 = state_28881__$1;
(statearr_28895_28922[(2)] = inst_28856);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28881__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (9))){
var inst_28845 = (state_28881[(7)]);
var inst_28858 = (state_28881[(2)]);
var inst_28859 = (inst_28845 + (1));
var inst_28845__$1 = inst_28859;
var state_28881__$1 = (function (){var statearr_28896 = state_28881;
(statearr_28896[(10)] = inst_28858);

(statearr_28896[(7)] = inst_28845__$1);

return statearr_28896;
})();
var statearr_28897_28923 = state_28881__$1;
(statearr_28897_28923[(2)] = null);

(statearr_28897_28923[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (5))){
var inst_28865 = (state_28881[(2)]);
var state_28881__$1 = (function (){var statearr_28898 = state_28881;
(statearr_28898[(11)] = inst_28865);

return statearr_28898;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28881__$1,(12),dchan);
} else {
if((state_val_28882 === (14))){
var inst_28867 = (state_28881[(8)]);
var inst_28872 = cljs.core.apply.call(null,f,inst_28867);
var state_28881__$1 = state_28881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28881__$1,(16),out,inst_28872);
} else {
if((state_val_28882 === (16))){
var inst_28874 = (state_28881[(2)]);
var state_28881__$1 = (function (){var statearr_28899 = state_28881;
(statearr_28899[(12)] = inst_28874);

return statearr_28899;
})();
var statearr_28900_28924 = state_28881__$1;
(statearr_28900_28924[(2)] = null);

(statearr_28900_28924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (10))){
var inst_28849 = (state_28881[(2)]);
var inst_28850 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28881__$1 = (function (){var statearr_28901 = state_28881;
(statearr_28901[(13)] = inst_28849);

return statearr_28901;
})();
var statearr_28902_28925 = state_28881__$1;
(statearr_28902_28925[(2)] = inst_28850);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28881__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (8))){
var inst_28863 = (state_28881[(2)]);
var state_28881__$1 = state_28881;
var statearr_28903_28926 = state_28881__$1;
(statearr_28903_28926[(2)] = inst_28863);

(statearr_28903_28926[(1)] = (5));


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
});})(c__15889__auto___28911,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15833__auto__,c__15889__auto___28911,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_28907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28907[(0)] = state_machine__15834__auto__);

(statearr_28907[(1)] = (1));

return statearr_28907;
});
var state_machine__15834__auto____1 = (function (state_28881){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_28881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e28908){if((e28908 instanceof Object)){
var ex__15837__auto__ = e28908;
var statearr_28909_28927 = state_28881;
(statearr_28909_28927[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28928 = state_28881;
state_28881 = G__28928;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_28881){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_28881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto___28911,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15891__auto__ = (function (){var statearr_28910 = f__15890__auto__.call(null);
(statearr_28910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___28911);

return statearr_28910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto___28911,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__15889__auto___29036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto___29036,out){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto___29036,out){
return (function (state_29012){
var state_val_29013 = (state_29012[(1)]);
if((state_val_29013 === (7))){
var inst_28991 = (state_29012[(7)]);
var inst_28992 = (state_29012[(8)]);
var inst_28991__$1 = (state_29012[(2)]);
var inst_28992__$1 = cljs.core.nth.call(null,inst_28991__$1,(0),null);
var inst_28993 = cljs.core.nth.call(null,inst_28991__$1,(1),null);
var inst_28994 = (inst_28992__$1 == null);
var state_29012__$1 = (function (){var statearr_29014 = state_29012;
(statearr_29014[(7)] = inst_28991__$1);

(statearr_29014[(9)] = inst_28993);

(statearr_29014[(8)] = inst_28992__$1);

return statearr_29014;
})();
if(cljs.core.truth_(inst_28994)){
var statearr_29015_29037 = state_29012__$1;
(statearr_29015_29037[(1)] = (8));

} else {
var statearr_29016_29038 = state_29012__$1;
(statearr_29016_29038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (1))){
var inst_28983 = cljs.core.vec.call(null,chs);
var inst_28984 = inst_28983;
var state_29012__$1 = (function (){var statearr_29017 = state_29012;
(statearr_29017[(10)] = inst_28984);

return statearr_29017;
})();
var statearr_29018_29039 = state_29012__$1;
(statearr_29018_29039[(2)] = null);

(statearr_29018_29039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (4))){
var inst_28984 = (state_29012[(10)]);
var state_29012__$1 = state_29012;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29012__$1,(7),inst_28984);
} else {
if((state_val_29013 === (6))){
var inst_29008 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
var statearr_29019_29040 = state_29012__$1;
(statearr_29019_29040[(2)] = inst_29008);

(statearr_29019_29040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (3))){
var inst_29010 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29012__$1,inst_29010);
} else {
if((state_val_29013 === (2))){
var inst_28984 = (state_29012[(10)]);
var inst_28986 = cljs.core.count.call(null,inst_28984);
var inst_28987 = (inst_28986 > (0));
var state_29012__$1 = state_29012;
if(cljs.core.truth_(inst_28987)){
var statearr_29021_29041 = state_29012__$1;
(statearr_29021_29041[(1)] = (4));

} else {
var statearr_29022_29042 = state_29012__$1;
(statearr_29022_29042[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (11))){
var inst_28984 = (state_29012[(10)]);
var inst_29001 = (state_29012[(2)]);
var tmp29020 = inst_28984;
var inst_28984__$1 = tmp29020;
var state_29012__$1 = (function (){var statearr_29023 = state_29012;
(statearr_29023[(11)] = inst_29001);

(statearr_29023[(10)] = inst_28984__$1);

return statearr_29023;
})();
var statearr_29024_29043 = state_29012__$1;
(statearr_29024_29043[(2)] = null);

(statearr_29024_29043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (9))){
var inst_28992 = (state_29012[(8)]);
var state_29012__$1 = state_29012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29012__$1,(11),out,inst_28992);
} else {
if((state_val_29013 === (5))){
var inst_29006 = cljs.core.async.close_BANG_.call(null,out);
var state_29012__$1 = state_29012;
var statearr_29025_29044 = state_29012__$1;
(statearr_29025_29044[(2)] = inst_29006);

(statearr_29025_29044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (10))){
var inst_29004 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
var statearr_29026_29045 = state_29012__$1;
(statearr_29026_29045[(2)] = inst_29004);

(statearr_29026_29045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (8))){
var inst_28991 = (state_29012[(7)]);
var inst_28993 = (state_29012[(9)]);
var inst_28992 = (state_29012[(8)]);
var inst_28984 = (state_29012[(10)]);
var inst_28996 = (function (){var c = inst_28993;
var v = inst_28992;
var vec__28989 = inst_28991;
var cs = inst_28984;
return ((function (c,v,vec__28989,cs,inst_28991,inst_28993,inst_28992,inst_28984,state_val_29013,c__15889__auto___29036,out){
return (function (p1__28929_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28929_SHARP_);
});
;})(c,v,vec__28989,cs,inst_28991,inst_28993,inst_28992,inst_28984,state_val_29013,c__15889__auto___29036,out))
})();
var inst_28997 = cljs.core.filterv.call(null,inst_28996,inst_28984);
var inst_28984__$1 = inst_28997;
var state_29012__$1 = (function (){var statearr_29027 = state_29012;
(statearr_29027[(10)] = inst_28984__$1);

return statearr_29027;
})();
var statearr_29028_29046 = state_29012__$1;
(statearr_29028_29046[(2)] = null);

(statearr_29028_29046[(1)] = (2));


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
});})(c__15889__auto___29036,out))
;
return ((function (switch__15833__auto__,c__15889__auto___29036,out){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_29032 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29032[(0)] = state_machine__15834__auto__);

(statearr_29032[(1)] = (1));

return statearr_29032;
});
var state_machine__15834__auto____1 = (function (state_29012){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_29012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e29033){if((e29033 instanceof Object)){
var ex__15837__auto__ = e29033;
var statearr_29034_29047 = state_29012;
(statearr_29034_29047[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29048 = state_29012;
state_29012 = G__29048;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_29012){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_29012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto___29036,out))
})();
var state__15891__auto__ = (function (){var statearr_29035 = f__15890__auto__.call(null);
(statearr_29035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___29036);

return statearr_29035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto___29036,out))
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
var c__15889__auto___29141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto___29141,out){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto___29141,out){
return (function (state_29118){
var state_val_29119 = (state_29118[(1)]);
if((state_val_29119 === (7))){
var inst_29100 = (state_29118[(7)]);
var inst_29100__$1 = (state_29118[(2)]);
var inst_29101 = (inst_29100__$1 == null);
var inst_29102 = cljs.core.not.call(null,inst_29101);
var state_29118__$1 = (function (){var statearr_29120 = state_29118;
(statearr_29120[(7)] = inst_29100__$1);

return statearr_29120;
})();
if(inst_29102){
var statearr_29121_29142 = state_29118__$1;
(statearr_29121_29142[(1)] = (8));

} else {
var statearr_29122_29143 = state_29118__$1;
(statearr_29122_29143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (1))){
var inst_29095 = (0);
var state_29118__$1 = (function (){var statearr_29123 = state_29118;
(statearr_29123[(8)] = inst_29095);

return statearr_29123;
})();
var statearr_29124_29144 = state_29118__$1;
(statearr_29124_29144[(2)] = null);

(statearr_29124_29144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (4))){
var state_29118__$1 = state_29118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29118__$1,(7),ch);
} else {
if((state_val_29119 === (6))){
var inst_29113 = (state_29118[(2)]);
var state_29118__$1 = state_29118;
var statearr_29125_29145 = state_29118__$1;
(statearr_29125_29145[(2)] = inst_29113);

(statearr_29125_29145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (3))){
var inst_29115 = (state_29118[(2)]);
var inst_29116 = cljs.core.async.close_BANG_.call(null,out);
var state_29118__$1 = (function (){var statearr_29126 = state_29118;
(statearr_29126[(9)] = inst_29115);

return statearr_29126;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29118__$1,inst_29116);
} else {
if((state_val_29119 === (2))){
var inst_29095 = (state_29118[(8)]);
var inst_29097 = (inst_29095 < n);
var state_29118__$1 = state_29118;
if(cljs.core.truth_(inst_29097)){
var statearr_29127_29146 = state_29118__$1;
(statearr_29127_29146[(1)] = (4));

} else {
var statearr_29128_29147 = state_29118__$1;
(statearr_29128_29147[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (11))){
var inst_29095 = (state_29118[(8)]);
var inst_29105 = (state_29118[(2)]);
var inst_29106 = (inst_29095 + (1));
var inst_29095__$1 = inst_29106;
var state_29118__$1 = (function (){var statearr_29129 = state_29118;
(statearr_29129[(10)] = inst_29105);

(statearr_29129[(8)] = inst_29095__$1);

return statearr_29129;
})();
var statearr_29130_29148 = state_29118__$1;
(statearr_29130_29148[(2)] = null);

(statearr_29130_29148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (9))){
var state_29118__$1 = state_29118;
var statearr_29131_29149 = state_29118__$1;
(statearr_29131_29149[(2)] = null);

(statearr_29131_29149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (5))){
var state_29118__$1 = state_29118;
var statearr_29132_29150 = state_29118__$1;
(statearr_29132_29150[(2)] = null);

(statearr_29132_29150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (10))){
var inst_29110 = (state_29118[(2)]);
var state_29118__$1 = state_29118;
var statearr_29133_29151 = state_29118__$1;
(statearr_29133_29151[(2)] = inst_29110);

(statearr_29133_29151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (8))){
var inst_29100 = (state_29118[(7)]);
var state_29118__$1 = state_29118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29118__$1,(11),out,inst_29100);
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
});})(c__15889__auto___29141,out))
;
return ((function (switch__15833__auto__,c__15889__auto___29141,out){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_29137 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29137[(0)] = state_machine__15834__auto__);

(statearr_29137[(1)] = (1));

return statearr_29137;
});
var state_machine__15834__auto____1 = (function (state_29118){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_29118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e29138){if((e29138 instanceof Object)){
var ex__15837__auto__ = e29138;
var statearr_29139_29152 = state_29118;
(statearr_29139_29152[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29153 = state_29118;
state_29118 = G__29153;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_29118){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_29118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto___29141,out))
})();
var state__15891__auto__ = (function (){var statearr_29140 = f__15890__auto__.call(null);
(statearr_29140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___29141);

return statearr_29140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto___29141,out))
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
if(typeof cljs.core.async.t29161 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29161 = (function (ch,f,map_LT_,meta29162){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29162 = meta29162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29161.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29161.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29161.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29161.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29164 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29164 = (function (fn1,_,meta29162,map_LT_,f,ch,meta29165){
this.fn1 = fn1;
this._ = _;
this.meta29162 = meta29162;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29165 = meta29165;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29164.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29154_SHARP_){
return f1.call(null,(((p1__29154_SHARP_ == null))?null:self__.f.call(null,p1__29154_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29164.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29166){
var self__ = this;
var _29166__$1 = this;
return self__.meta29165;
});})(___$1))
;

cljs.core.async.t29164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29166,meta29165__$1){
var self__ = this;
var _29166__$1 = this;
return (new cljs.core.async.t29164(self__.fn1,self__._,self__.meta29162,self__.map_LT_,self__.f,self__.ch,meta29165__$1));
});})(___$1))
;

cljs.core.async.t29164.cljs$lang$type = true;

cljs.core.async.t29164.cljs$lang$ctorStr = "cljs.core.async/t29164";

cljs.core.async.t29164.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13818__auto__,writer__13819__auto__,opt__13820__auto__){
return cljs.core._write.call(null,writer__13819__auto__,"cljs.core.async/t29164");
});})(___$1))
;

cljs.core.async.__GT_t29164 = ((function (___$1){
return (function __GT_t29164(fn1__$1,___$2,meta29162__$1,map_LT___$1,f__$1,ch__$1,meta29165){
return (new cljs.core.async.t29164(fn1__$1,___$2,meta29162__$1,map_LT___$1,f__$1,ch__$1,meta29165));
});})(___$1))
;

}

return (new cljs.core.async.t29164(fn1,___$1,self__.meta29162,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__13219__auto__ = ret;
if(cljs.core.truth_(and__13219__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__13219__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t29161.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29161.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29161.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29163){
var self__ = this;
var _29163__$1 = this;
return self__.meta29162;
});

cljs.core.async.t29161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29163,meta29162__$1){
var self__ = this;
var _29163__$1 = this;
return (new cljs.core.async.t29161(self__.ch,self__.f,self__.map_LT_,meta29162__$1));
});

cljs.core.async.t29161.cljs$lang$type = true;

cljs.core.async.t29161.cljs$lang$ctorStr = "cljs.core.async/t29161";

cljs.core.async.t29161.cljs$lang$ctorPrWriter = (function (this__13818__auto__,writer__13819__auto__,opt__13820__auto__){
return cljs.core._write.call(null,writer__13819__auto__,"cljs.core.async/t29161");
});

cljs.core.async.__GT_t29161 = (function __GT_t29161(ch__$1,f__$1,map_LT___$1,meta29162){
return (new cljs.core.async.t29161(ch__$1,f__$1,map_LT___$1,meta29162));
});

}

return (new cljs.core.async.t29161(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t29170 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29170 = (function (ch,f,map_GT_,meta29171){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29171 = meta29171;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29170.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29170.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29170.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29170.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29170.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29170.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29172){
var self__ = this;
var _29172__$1 = this;
return self__.meta29171;
});

cljs.core.async.t29170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29172,meta29171__$1){
var self__ = this;
var _29172__$1 = this;
return (new cljs.core.async.t29170(self__.ch,self__.f,self__.map_GT_,meta29171__$1));
});

cljs.core.async.t29170.cljs$lang$type = true;

cljs.core.async.t29170.cljs$lang$ctorStr = "cljs.core.async/t29170";

cljs.core.async.t29170.cljs$lang$ctorPrWriter = (function (this__13818__auto__,writer__13819__auto__,opt__13820__auto__){
return cljs.core._write.call(null,writer__13819__auto__,"cljs.core.async/t29170");
});

cljs.core.async.__GT_t29170 = (function __GT_t29170(ch__$1,f__$1,map_GT___$1,meta29171){
return (new cljs.core.async.t29170(ch__$1,f__$1,map_GT___$1,meta29171));
});

}

return (new cljs.core.async.t29170(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t29176 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29176 = (function (ch,p,filter_GT_,meta29177){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29177 = meta29177;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29176.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29176.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29176.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29176.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29176.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29176.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29176.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29178){
var self__ = this;
var _29178__$1 = this;
return self__.meta29177;
});

cljs.core.async.t29176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29178,meta29177__$1){
var self__ = this;
var _29178__$1 = this;
return (new cljs.core.async.t29176(self__.ch,self__.p,self__.filter_GT_,meta29177__$1));
});

cljs.core.async.t29176.cljs$lang$type = true;

cljs.core.async.t29176.cljs$lang$ctorStr = "cljs.core.async/t29176";

cljs.core.async.t29176.cljs$lang$ctorPrWriter = (function (this__13818__auto__,writer__13819__auto__,opt__13820__auto__){
return cljs.core._write.call(null,writer__13819__auto__,"cljs.core.async/t29176");
});

cljs.core.async.__GT_t29176 = (function __GT_t29176(ch__$1,p__$1,filter_GT___$1,meta29177){
return (new cljs.core.async.t29176(ch__$1,p__$1,filter_GT___$1,meta29177));
});

}

return (new cljs.core.async.t29176(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15889__auto___29261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto___29261,out){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto___29261,out){
return (function (state_29240){
var state_val_29241 = (state_29240[(1)]);
if((state_val_29241 === (7))){
var inst_29236 = (state_29240[(2)]);
var state_29240__$1 = state_29240;
var statearr_29242_29262 = state_29240__$1;
(statearr_29242_29262[(2)] = inst_29236);

(statearr_29242_29262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (1))){
var state_29240__$1 = state_29240;
var statearr_29243_29263 = state_29240__$1;
(statearr_29243_29263[(2)] = null);

(statearr_29243_29263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (4))){
var inst_29222 = (state_29240[(7)]);
var inst_29222__$1 = (state_29240[(2)]);
var inst_29223 = (inst_29222__$1 == null);
var state_29240__$1 = (function (){var statearr_29244 = state_29240;
(statearr_29244[(7)] = inst_29222__$1);

return statearr_29244;
})();
if(cljs.core.truth_(inst_29223)){
var statearr_29245_29264 = state_29240__$1;
(statearr_29245_29264[(1)] = (5));

} else {
var statearr_29246_29265 = state_29240__$1;
(statearr_29246_29265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (6))){
var inst_29222 = (state_29240[(7)]);
var inst_29227 = p.call(null,inst_29222);
var state_29240__$1 = state_29240;
if(cljs.core.truth_(inst_29227)){
var statearr_29247_29266 = state_29240__$1;
(statearr_29247_29266[(1)] = (8));

} else {
var statearr_29248_29267 = state_29240__$1;
(statearr_29248_29267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (3))){
var inst_29238 = (state_29240[(2)]);
var state_29240__$1 = state_29240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29240__$1,inst_29238);
} else {
if((state_val_29241 === (2))){
var state_29240__$1 = state_29240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29240__$1,(4),ch);
} else {
if((state_val_29241 === (11))){
var inst_29230 = (state_29240[(2)]);
var state_29240__$1 = state_29240;
var statearr_29249_29268 = state_29240__$1;
(statearr_29249_29268[(2)] = inst_29230);

(statearr_29249_29268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (9))){
var state_29240__$1 = state_29240;
var statearr_29250_29269 = state_29240__$1;
(statearr_29250_29269[(2)] = null);

(statearr_29250_29269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (5))){
var inst_29225 = cljs.core.async.close_BANG_.call(null,out);
var state_29240__$1 = state_29240;
var statearr_29251_29270 = state_29240__$1;
(statearr_29251_29270[(2)] = inst_29225);

(statearr_29251_29270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (10))){
var inst_29233 = (state_29240[(2)]);
var state_29240__$1 = (function (){var statearr_29252 = state_29240;
(statearr_29252[(8)] = inst_29233);

return statearr_29252;
})();
var statearr_29253_29271 = state_29240__$1;
(statearr_29253_29271[(2)] = null);

(statearr_29253_29271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (8))){
var inst_29222 = (state_29240[(7)]);
var state_29240__$1 = state_29240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29240__$1,(11),out,inst_29222);
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
});})(c__15889__auto___29261,out))
;
return ((function (switch__15833__auto__,c__15889__auto___29261,out){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_29257 = [null,null,null,null,null,null,null,null,null];
(statearr_29257[(0)] = state_machine__15834__auto__);

(statearr_29257[(1)] = (1));

return statearr_29257;
});
var state_machine__15834__auto____1 = (function (state_29240){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_29240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e29258){if((e29258 instanceof Object)){
var ex__15837__auto__ = e29258;
var statearr_29259_29272 = state_29240;
(statearr_29259_29272[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29273 = state_29240;
state_29240 = G__29273;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_29240){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_29240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto___29261,out))
})();
var state__15891__auto__ = (function (){var statearr_29260 = f__15890__auto__.call(null);
(statearr_29260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___29261);

return statearr_29260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto___29261,out))
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
var c__15889__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto__){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto__){
return (function (state_29439){
var state_val_29440 = (state_29439[(1)]);
if((state_val_29440 === (7))){
var inst_29435 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29441_29482 = state_29439__$1;
(statearr_29441_29482[(2)] = inst_29435);

(statearr_29441_29482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (20))){
var inst_29405 = (state_29439[(7)]);
var inst_29416 = (state_29439[(2)]);
var inst_29417 = cljs.core.next.call(null,inst_29405);
var inst_29391 = inst_29417;
var inst_29392 = null;
var inst_29393 = (0);
var inst_29394 = (0);
var state_29439__$1 = (function (){var statearr_29442 = state_29439;
(statearr_29442[(8)] = inst_29393);

(statearr_29442[(9)] = inst_29391);

(statearr_29442[(10)] = inst_29416);

(statearr_29442[(11)] = inst_29394);

(statearr_29442[(12)] = inst_29392);

return statearr_29442;
})();
var statearr_29443_29483 = state_29439__$1;
(statearr_29443_29483[(2)] = null);

(statearr_29443_29483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (1))){
var state_29439__$1 = state_29439;
var statearr_29444_29484 = state_29439__$1;
(statearr_29444_29484[(2)] = null);

(statearr_29444_29484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (4))){
var inst_29380 = (state_29439[(13)]);
var inst_29380__$1 = (state_29439[(2)]);
var inst_29381 = (inst_29380__$1 == null);
var state_29439__$1 = (function (){var statearr_29445 = state_29439;
(statearr_29445[(13)] = inst_29380__$1);

return statearr_29445;
})();
if(cljs.core.truth_(inst_29381)){
var statearr_29446_29485 = state_29439__$1;
(statearr_29446_29485[(1)] = (5));

} else {
var statearr_29447_29486 = state_29439__$1;
(statearr_29447_29486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (15))){
var state_29439__$1 = state_29439;
var statearr_29451_29487 = state_29439__$1;
(statearr_29451_29487[(2)] = null);

(statearr_29451_29487[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (21))){
var state_29439__$1 = state_29439;
var statearr_29452_29488 = state_29439__$1;
(statearr_29452_29488[(2)] = null);

(statearr_29452_29488[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (13))){
var inst_29393 = (state_29439[(8)]);
var inst_29391 = (state_29439[(9)]);
var inst_29394 = (state_29439[(11)]);
var inst_29392 = (state_29439[(12)]);
var inst_29401 = (state_29439[(2)]);
var inst_29402 = (inst_29394 + (1));
var tmp29448 = inst_29393;
var tmp29449 = inst_29391;
var tmp29450 = inst_29392;
var inst_29391__$1 = tmp29449;
var inst_29392__$1 = tmp29450;
var inst_29393__$1 = tmp29448;
var inst_29394__$1 = inst_29402;
var state_29439__$1 = (function (){var statearr_29453 = state_29439;
(statearr_29453[(8)] = inst_29393__$1);

(statearr_29453[(9)] = inst_29391__$1);

(statearr_29453[(14)] = inst_29401);

(statearr_29453[(11)] = inst_29394__$1);

(statearr_29453[(12)] = inst_29392__$1);

return statearr_29453;
})();
var statearr_29454_29489 = state_29439__$1;
(statearr_29454_29489[(2)] = null);

(statearr_29454_29489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (22))){
var state_29439__$1 = state_29439;
var statearr_29455_29490 = state_29439__$1;
(statearr_29455_29490[(2)] = null);

(statearr_29455_29490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (6))){
var inst_29380 = (state_29439[(13)]);
var inst_29389 = f.call(null,inst_29380);
var inst_29390 = cljs.core.seq.call(null,inst_29389);
var inst_29391 = inst_29390;
var inst_29392 = null;
var inst_29393 = (0);
var inst_29394 = (0);
var state_29439__$1 = (function (){var statearr_29456 = state_29439;
(statearr_29456[(8)] = inst_29393);

(statearr_29456[(9)] = inst_29391);

(statearr_29456[(11)] = inst_29394);

(statearr_29456[(12)] = inst_29392);

return statearr_29456;
})();
var statearr_29457_29491 = state_29439__$1;
(statearr_29457_29491[(2)] = null);

(statearr_29457_29491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (17))){
var inst_29405 = (state_29439[(7)]);
var inst_29409 = cljs.core.chunk_first.call(null,inst_29405);
var inst_29410 = cljs.core.chunk_rest.call(null,inst_29405);
var inst_29411 = cljs.core.count.call(null,inst_29409);
var inst_29391 = inst_29410;
var inst_29392 = inst_29409;
var inst_29393 = inst_29411;
var inst_29394 = (0);
var state_29439__$1 = (function (){var statearr_29458 = state_29439;
(statearr_29458[(8)] = inst_29393);

(statearr_29458[(9)] = inst_29391);

(statearr_29458[(11)] = inst_29394);

(statearr_29458[(12)] = inst_29392);

return statearr_29458;
})();
var statearr_29459_29492 = state_29439__$1;
(statearr_29459_29492[(2)] = null);

(statearr_29459_29492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (3))){
var inst_29437 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29439__$1,inst_29437);
} else {
if((state_val_29440 === (12))){
var inst_29425 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29460_29493 = state_29439__$1;
(statearr_29460_29493[(2)] = inst_29425);

(statearr_29460_29493[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (2))){
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29439__$1,(4),in$);
} else {
if((state_val_29440 === (23))){
var inst_29433 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29461_29494 = state_29439__$1;
(statearr_29461_29494[(2)] = inst_29433);

(statearr_29461_29494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (19))){
var inst_29420 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29462_29495 = state_29439__$1;
(statearr_29462_29495[(2)] = inst_29420);

(statearr_29462_29495[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (11))){
var inst_29391 = (state_29439[(9)]);
var inst_29405 = (state_29439[(7)]);
var inst_29405__$1 = cljs.core.seq.call(null,inst_29391);
var state_29439__$1 = (function (){var statearr_29463 = state_29439;
(statearr_29463[(7)] = inst_29405__$1);

return statearr_29463;
})();
if(inst_29405__$1){
var statearr_29464_29496 = state_29439__$1;
(statearr_29464_29496[(1)] = (14));

} else {
var statearr_29465_29497 = state_29439__$1;
(statearr_29465_29497[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (9))){
var inst_29427 = (state_29439[(2)]);
var inst_29428 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29439__$1 = (function (){var statearr_29466 = state_29439;
(statearr_29466[(15)] = inst_29427);

return statearr_29466;
})();
if(cljs.core.truth_(inst_29428)){
var statearr_29467_29498 = state_29439__$1;
(statearr_29467_29498[(1)] = (21));

} else {
var statearr_29468_29499 = state_29439__$1;
(statearr_29468_29499[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (5))){
var inst_29383 = cljs.core.async.close_BANG_.call(null,out);
var state_29439__$1 = state_29439;
var statearr_29469_29500 = state_29439__$1;
(statearr_29469_29500[(2)] = inst_29383);

(statearr_29469_29500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (14))){
var inst_29405 = (state_29439[(7)]);
var inst_29407 = cljs.core.chunked_seq_QMARK_.call(null,inst_29405);
var state_29439__$1 = state_29439;
if(inst_29407){
var statearr_29470_29501 = state_29439__$1;
(statearr_29470_29501[(1)] = (17));

} else {
var statearr_29471_29502 = state_29439__$1;
(statearr_29471_29502[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (16))){
var inst_29423 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29472_29503 = state_29439__$1;
(statearr_29472_29503[(2)] = inst_29423);

(statearr_29472_29503[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (10))){
var inst_29394 = (state_29439[(11)]);
var inst_29392 = (state_29439[(12)]);
var inst_29399 = cljs.core._nth.call(null,inst_29392,inst_29394);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29439__$1,(13),out,inst_29399);
} else {
if((state_val_29440 === (18))){
var inst_29405 = (state_29439[(7)]);
var inst_29414 = cljs.core.first.call(null,inst_29405);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29439__$1,(20),out,inst_29414);
} else {
if((state_val_29440 === (8))){
var inst_29393 = (state_29439[(8)]);
var inst_29394 = (state_29439[(11)]);
var inst_29396 = (inst_29394 < inst_29393);
var inst_29397 = inst_29396;
var state_29439__$1 = state_29439;
if(cljs.core.truth_(inst_29397)){
var statearr_29473_29504 = state_29439__$1;
(statearr_29473_29504[(1)] = (10));

} else {
var statearr_29474_29505 = state_29439__$1;
(statearr_29474_29505[(1)] = (11));

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
});})(c__15889__auto__))
;
return ((function (switch__15833__auto__,c__15889__auto__){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_29478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29478[(0)] = state_machine__15834__auto__);

(statearr_29478[(1)] = (1));

return statearr_29478;
});
var state_machine__15834__auto____1 = (function (state_29439){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_29439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e29479){if((e29479 instanceof Object)){
var ex__15837__auto__ = e29479;
var statearr_29480_29506 = state_29439;
(statearr_29480_29506[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29507 = state_29439;
state_29439 = G__29507;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_29439){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_29439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto__))
})();
var state__15891__auto__ = (function (){var statearr_29481 = f__15890__auto__.call(null);
(statearr_29481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto__);

return statearr_29481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto__))
);

return c__15889__auto__;
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
var c__15889__auto___29604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto___29604,out){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto___29604,out){
return (function (state_29579){
var state_val_29580 = (state_29579[(1)]);
if((state_val_29580 === (7))){
var inst_29574 = (state_29579[(2)]);
var state_29579__$1 = state_29579;
var statearr_29581_29605 = state_29579__$1;
(statearr_29581_29605[(2)] = inst_29574);

(statearr_29581_29605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (1))){
var inst_29556 = null;
var state_29579__$1 = (function (){var statearr_29582 = state_29579;
(statearr_29582[(7)] = inst_29556);

return statearr_29582;
})();
var statearr_29583_29606 = state_29579__$1;
(statearr_29583_29606[(2)] = null);

(statearr_29583_29606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (4))){
var inst_29559 = (state_29579[(8)]);
var inst_29559__$1 = (state_29579[(2)]);
var inst_29560 = (inst_29559__$1 == null);
var inst_29561 = cljs.core.not.call(null,inst_29560);
var state_29579__$1 = (function (){var statearr_29584 = state_29579;
(statearr_29584[(8)] = inst_29559__$1);

return statearr_29584;
})();
if(inst_29561){
var statearr_29585_29607 = state_29579__$1;
(statearr_29585_29607[(1)] = (5));

} else {
var statearr_29586_29608 = state_29579__$1;
(statearr_29586_29608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (6))){
var state_29579__$1 = state_29579;
var statearr_29587_29609 = state_29579__$1;
(statearr_29587_29609[(2)] = null);

(statearr_29587_29609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (3))){
var inst_29576 = (state_29579[(2)]);
var inst_29577 = cljs.core.async.close_BANG_.call(null,out);
var state_29579__$1 = (function (){var statearr_29588 = state_29579;
(statearr_29588[(9)] = inst_29576);

return statearr_29588;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29579__$1,inst_29577);
} else {
if((state_val_29580 === (2))){
var state_29579__$1 = state_29579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29579__$1,(4),ch);
} else {
if((state_val_29580 === (11))){
var inst_29559 = (state_29579[(8)]);
var inst_29568 = (state_29579[(2)]);
var inst_29556 = inst_29559;
var state_29579__$1 = (function (){var statearr_29589 = state_29579;
(statearr_29589[(10)] = inst_29568);

(statearr_29589[(7)] = inst_29556);

return statearr_29589;
})();
var statearr_29590_29610 = state_29579__$1;
(statearr_29590_29610[(2)] = null);

(statearr_29590_29610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (9))){
var inst_29559 = (state_29579[(8)]);
var state_29579__$1 = state_29579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29579__$1,(11),out,inst_29559);
} else {
if((state_val_29580 === (5))){
var inst_29556 = (state_29579[(7)]);
var inst_29559 = (state_29579[(8)]);
var inst_29563 = cljs.core._EQ_.call(null,inst_29559,inst_29556);
var state_29579__$1 = state_29579;
if(inst_29563){
var statearr_29592_29611 = state_29579__$1;
(statearr_29592_29611[(1)] = (8));

} else {
var statearr_29593_29612 = state_29579__$1;
(statearr_29593_29612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (10))){
var inst_29571 = (state_29579[(2)]);
var state_29579__$1 = state_29579;
var statearr_29594_29613 = state_29579__$1;
(statearr_29594_29613[(2)] = inst_29571);

(statearr_29594_29613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (8))){
var inst_29556 = (state_29579[(7)]);
var tmp29591 = inst_29556;
var inst_29556__$1 = tmp29591;
var state_29579__$1 = (function (){var statearr_29595 = state_29579;
(statearr_29595[(7)] = inst_29556__$1);

return statearr_29595;
})();
var statearr_29596_29614 = state_29579__$1;
(statearr_29596_29614[(2)] = null);

(statearr_29596_29614[(1)] = (2));


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
});})(c__15889__auto___29604,out))
;
return ((function (switch__15833__auto__,c__15889__auto___29604,out){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_29600 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29600[(0)] = state_machine__15834__auto__);

(statearr_29600[(1)] = (1));

return statearr_29600;
});
var state_machine__15834__auto____1 = (function (state_29579){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_29579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e29601){if((e29601 instanceof Object)){
var ex__15837__auto__ = e29601;
var statearr_29602_29615 = state_29579;
(statearr_29602_29615[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29616 = state_29579;
state_29579 = G__29616;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_29579){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_29579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto___29604,out))
})();
var state__15891__auto__ = (function (){var statearr_29603 = f__15890__auto__.call(null);
(statearr_29603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___29604);

return statearr_29603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto___29604,out))
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
var c__15889__auto___29751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto___29751,out){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto___29751,out){
return (function (state_29721){
var state_val_29722 = (state_29721[(1)]);
if((state_val_29722 === (7))){
var inst_29717 = (state_29721[(2)]);
var state_29721__$1 = state_29721;
var statearr_29723_29752 = state_29721__$1;
(statearr_29723_29752[(2)] = inst_29717);

(statearr_29723_29752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29722 === (1))){
var inst_29684 = (new Array(n));
var inst_29685 = inst_29684;
var inst_29686 = (0);
var state_29721__$1 = (function (){var statearr_29724 = state_29721;
(statearr_29724[(7)] = inst_29685);

(statearr_29724[(8)] = inst_29686);

return statearr_29724;
})();
var statearr_29725_29753 = state_29721__$1;
(statearr_29725_29753[(2)] = null);

(statearr_29725_29753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29722 === (4))){
var inst_29689 = (state_29721[(9)]);
var inst_29689__$1 = (state_29721[(2)]);
var inst_29690 = (inst_29689__$1 == null);
var inst_29691 = cljs.core.not.call(null,inst_29690);
var state_29721__$1 = (function (){var statearr_29726 = state_29721;
(statearr_29726[(9)] = inst_29689__$1);

return statearr_29726;
})();
if(inst_29691){
var statearr_29727_29754 = state_29721__$1;
(statearr_29727_29754[(1)] = (5));

} else {
var statearr_29728_29755 = state_29721__$1;
(statearr_29728_29755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29722 === (15))){
var inst_29711 = (state_29721[(2)]);
var state_29721__$1 = state_29721;
var statearr_29729_29756 = state_29721__$1;
(statearr_29729_29756[(2)] = inst_29711);

(statearr_29729_29756[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29722 === (13))){
var state_29721__$1 = state_29721;
var statearr_29730_29757 = state_29721__$1;
(statearr_29730_29757[(2)] = null);

(statearr_29730_29757[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29722 === (6))){
var inst_29686 = (state_29721[(8)]);
var inst_29707 = (inst_29686 > (0));
var state_29721__$1 = state_29721;
if(cljs.core.truth_(inst_29707)){
var statearr_29731_29758 = state_29721__$1;
(statearr_29731_29758[(1)] = (12));

} else {
var statearr_29732_29759 = state_29721__$1;
(statearr_29732_29759[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29722 === (3))){
var inst_29719 = (state_29721[(2)]);
var state_29721__$1 = state_29721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29721__$1,inst_29719);
} else {
if((state_val_29722 === (12))){
var inst_29685 = (state_29721[(7)]);
var inst_29709 = cljs.core.vec.call(null,inst_29685);
var state_29721__$1 = state_29721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29721__$1,(15),out,inst_29709);
} else {
if((state_val_29722 === (2))){
var state_29721__$1 = state_29721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29721__$1,(4),ch);
} else {
if((state_val_29722 === (11))){
var inst_29701 = (state_29721[(2)]);
var inst_29702 = (new Array(n));
var inst_29685 = inst_29702;
var inst_29686 = (0);
var state_29721__$1 = (function (){var statearr_29733 = state_29721;
(statearr_29733[(10)] = inst_29701);

(statearr_29733[(7)] = inst_29685);

(statearr_29733[(8)] = inst_29686);

return statearr_29733;
})();
var statearr_29734_29760 = state_29721__$1;
(statearr_29734_29760[(2)] = null);

(statearr_29734_29760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29722 === (9))){
var inst_29685 = (state_29721[(7)]);
var inst_29699 = cljs.core.vec.call(null,inst_29685);
var state_29721__$1 = state_29721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29721__$1,(11),out,inst_29699);
} else {
if((state_val_29722 === (5))){
var inst_29694 = (state_29721[(11)]);
var inst_29685 = (state_29721[(7)]);
var inst_29686 = (state_29721[(8)]);
var inst_29689 = (state_29721[(9)]);
var inst_29693 = (inst_29685[inst_29686] = inst_29689);
var inst_29694__$1 = (inst_29686 + (1));
var inst_29695 = (inst_29694__$1 < n);
var state_29721__$1 = (function (){var statearr_29735 = state_29721;
(statearr_29735[(11)] = inst_29694__$1);

(statearr_29735[(12)] = inst_29693);

return statearr_29735;
})();
if(cljs.core.truth_(inst_29695)){
var statearr_29736_29761 = state_29721__$1;
(statearr_29736_29761[(1)] = (8));

} else {
var statearr_29737_29762 = state_29721__$1;
(statearr_29737_29762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29722 === (14))){
var inst_29714 = (state_29721[(2)]);
var inst_29715 = cljs.core.async.close_BANG_.call(null,out);
var state_29721__$1 = (function (){var statearr_29739 = state_29721;
(statearr_29739[(13)] = inst_29714);

return statearr_29739;
})();
var statearr_29740_29763 = state_29721__$1;
(statearr_29740_29763[(2)] = inst_29715);

(statearr_29740_29763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29722 === (10))){
var inst_29705 = (state_29721[(2)]);
var state_29721__$1 = state_29721;
var statearr_29741_29764 = state_29721__$1;
(statearr_29741_29764[(2)] = inst_29705);

(statearr_29741_29764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29722 === (8))){
var inst_29694 = (state_29721[(11)]);
var inst_29685 = (state_29721[(7)]);
var tmp29738 = inst_29685;
var inst_29685__$1 = tmp29738;
var inst_29686 = inst_29694;
var state_29721__$1 = (function (){var statearr_29742 = state_29721;
(statearr_29742[(7)] = inst_29685__$1);

(statearr_29742[(8)] = inst_29686);

return statearr_29742;
})();
var statearr_29743_29765 = state_29721__$1;
(statearr_29743_29765[(2)] = null);

(statearr_29743_29765[(1)] = (2));


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
});})(c__15889__auto___29751,out))
;
return ((function (switch__15833__auto__,c__15889__auto___29751,out){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_29747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29747[(0)] = state_machine__15834__auto__);

(statearr_29747[(1)] = (1));

return statearr_29747;
});
var state_machine__15834__auto____1 = (function (state_29721){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_29721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e29748){if((e29748 instanceof Object)){
var ex__15837__auto__ = e29748;
var statearr_29749_29766 = state_29721;
(statearr_29749_29766[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29767 = state_29721;
state_29721 = G__29767;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_29721){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_29721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto___29751,out))
})();
var state__15891__auto__ = (function (){var statearr_29750 = f__15890__auto__.call(null);
(statearr_29750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___29751);

return statearr_29750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto___29751,out))
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
var c__15889__auto___29910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15889__auto___29910,out){
return (function (){
var f__15890__auto__ = (function (){var switch__15833__auto__ = ((function (c__15889__auto___29910,out){
return (function (state_29880){
var state_val_29881 = (state_29880[(1)]);
if((state_val_29881 === (7))){
var inst_29876 = (state_29880[(2)]);
var state_29880__$1 = state_29880;
var statearr_29882_29911 = state_29880__$1;
(statearr_29882_29911[(2)] = inst_29876);

(statearr_29882_29911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (1))){
var inst_29839 = [];
var inst_29840 = inst_29839;
var inst_29841 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29880__$1 = (function (){var statearr_29883 = state_29880;
(statearr_29883[(7)] = inst_29841);

(statearr_29883[(8)] = inst_29840);

return statearr_29883;
})();
var statearr_29884_29912 = state_29880__$1;
(statearr_29884_29912[(2)] = null);

(statearr_29884_29912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (4))){
var inst_29844 = (state_29880[(9)]);
var inst_29844__$1 = (state_29880[(2)]);
var inst_29845 = (inst_29844__$1 == null);
var inst_29846 = cljs.core.not.call(null,inst_29845);
var state_29880__$1 = (function (){var statearr_29885 = state_29880;
(statearr_29885[(9)] = inst_29844__$1);

return statearr_29885;
})();
if(inst_29846){
var statearr_29886_29913 = state_29880__$1;
(statearr_29886_29913[(1)] = (5));

} else {
var statearr_29887_29914 = state_29880__$1;
(statearr_29887_29914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (15))){
var inst_29870 = (state_29880[(2)]);
var state_29880__$1 = state_29880;
var statearr_29888_29915 = state_29880__$1;
(statearr_29888_29915[(2)] = inst_29870);

(statearr_29888_29915[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (13))){
var state_29880__$1 = state_29880;
var statearr_29889_29916 = state_29880__$1;
(statearr_29889_29916[(2)] = null);

(statearr_29889_29916[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (6))){
var inst_29840 = (state_29880[(8)]);
var inst_29865 = inst_29840.length;
var inst_29866 = (inst_29865 > (0));
var state_29880__$1 = state_29880;
if(cljs.core.truth_(inst_29866)){
var statearr_29890_29917 = state_29880__$1;
(statearr_29890_29917[(1)] = (12));

} else {
var statearr_29891_29918 = state_29880__$1;
(statearr_29891_29918[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (3))){
var inst_29878 = (state_29880[(2)]);
var state_29880__$1 = state_29880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29880__$1,inst_29878);
} else {
if((state_val_29881 === (12))){
var inst_29840 = (state_29880[(8)]);
var inst_29868 = cljs.core.vec.call(null,inst_29840);
var state_29880__$1 = state_29880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29880__$1,(15),out,inst_29868);
} else {
if((state_val_29881 === (2))){
var state_29880__$1 = state_29880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29880__$1,(4),ch);
} else {
if((state_val_29881 === (11))){
var inst_29848 = (state_29880[(10)]);
var inst_29844 = (state_29880[(9)]);
var inst_29858 = (state_29880[(2)]);
var inst_29859 = [];
var inst_29860 = inst_29859.push(inst_29844);
var inst_29840 = inst_29859;
var inst_29841 = inst_29848;
var state_29880__$1 = (function (){var statearr_29892 = state_29880;
(statearr_29892[(11)] = inst_29858);

(statearr_29892[(7)] = inst_29841);

(statearr_29892[(12)] = inst_29860);

(statearr_29892[(8)] = inst_29840);

return statearr_29892;
})();
var statearr_29893_29919 = state_29880__$1;
(statearr_29893_29919[(2)] = null);

(statearr_29893_29919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (9))){
var inst_29840 = (state_29880[(8)]);
var inst_29856 = cljs.core.vec.call(null,inst_29840);
var state_29880__$1 = state_29880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29880__$1,(11),out,inst_29856);
} else {
if((state_val_29881 === (5))){
var inst_29848 = (state_29880[(10)]);
var inst_29841 = (state_29880[(7)]);
var inst_29844 = (state_29880[(9)]);
var inst_29848__$1 = f.call(null,inst_29844);
var inst_29849 = cljs.core._EQ_.call(null,inst_29848__$1,inst_29841);
var inst_29850 = cljs.core.keyword_identical_QMARK_.call(null,inst_29841,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29851 = (inst_29849) || (inst_29850);
var state_29880__$1 = (function (){var statearr_29894 = state_29880;
(statearr_29894[(10)] = inst_29848__$1);

return statearr_29894;
})();
if(cljs.core.truth_(inst_29851)){
var statearr_29895_29920 = state_29880__$1;
(statearr_29895_29920[(1)] = (8));

} else {
var statearr_29896_29921 = state_29880__$1;
(statearr_29896_29921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (14))){
var inst_29873 = (state_29880[(2)]);
var inst_29874 = cljs.core.async.close_BANG_.call(null,out);
var state_29880__$1 = (function (){var statearr_29898 = state_29880;
(statearr_29898[(13)] = inst_29873);

return statearr_29898;
})();
var statearr_29899_29922 = state_29880__$1;
(statearr_29899_29922[(2)] = inst_29874);

(statearr_29899_29922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (10))){
var inst_29863 = (state_29880[(2)]);
var state_29880__$1 = state_29880;
var statearr_29900_29923 = state_29880__$1;
(statearr_29900_29923[(2)] = inst_29863);

(statearr_29900_29923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29881 === (8))){
var inst_29848 = (state_29880[(10)]);
var inst_29844 = (state_29880[(9)]);
var inst_29840 = (state_29880[(8)]);
var inst_29853 = inst_29840.push(inst_29844);
var tmp29897 = inst_29840;
var inst_29840__$1 = tmp29897;
var inst_29841 = inst_29848;
var state_29880__$1 = (function (){var statearr_29901 = state_29880;
(statearr_29901[(7)] = inst_29841);

(statearr_29901[(14)] = inst_29853);

(statearr_29901[(8)] = inst_29840__$1);

return statearr_29901;
})();
var statearr_29902_29924 = state_29880__$1;
(statearr_29902_29924[(2)] = null);

(statearr_29902_29924[(1)] = (2));


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
});})(c__15889__auto___29910,out))
;
return ((function (switch__15833__auto__,c__15889__auto___29910,out){
return (function() {
var state_machine__15834__auto__ = null;
var state_machine__15834__auto____0 = (function (){
var statearr_29906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29906[(0)] = state_machine__15834__auto__);

(statearr_29906[(1)] = (1));

return statearr_29906;
});
var state_machine__15834__auto____1 = (function (state_29880){
while(true){
var ret_value__15835__auto__ = (function (){try{while(true){
var result__15836__auto__ = switch__15833__auto__.call(null,state_29880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15836__auto__;
}
break;
}
}catch (e29907){if((e29907 instanceof Object)){
var ex__15837__auto__ = e29907;
var statearr_29908_29925 = state_29880;
(statearr_29908_29925[(5)] = ex__15837__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15835__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29926 = state_29880;
state_29880 = G__29926;
continue;
} else {
return ret_value__15835__auto__;
}
break;
}
});
state_machine__15834__auto__ = function(state_29880){
switch(arguments.length){
case 0:
return state_machine__15834__auto____0.call(this);
case 1:
return state_machine__15834__auto____1.call(this,state_29880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15834__auto____0;
state_machine__15834__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15834__auto____1;
return state_machine__15834__auto__;
})()
;})(switch__15833__auto__,c__15889__auto___29910,out))
})();
var state__15891__auto__ = (function (){var statearr_29909 = f__15890__auto__.call(null);
(statearr_29909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15889__auto___29910);

return statearr_29909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15891__auto__);
});})(c__15889__auto___29910,out))
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