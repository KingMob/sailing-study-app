// Compiled by ClojureScript 0.0-3149 {:elide-asserts false}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t24794 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24794 = (function (f,fn_handler,meta24795){
this.f = f;
this.fn_handler = fn_handler;
this.meta24795 = meta24795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24794.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24794.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24794.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24796){
var self__ = this;
var _24796__$1 = this;
return self__.meta24795;
});

cljs.core.async.t24794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24796,meta24795__$1){
var self__ = this;
var _24796__$1 = this;
return (new cljs.core.async.t24794(self__.f,self__.fn_handler,meta24795__$1));
});

cljs.core.async.t24794.cljs$lang$type = true;

cljs.core.async.t24794.cljs$lang$ctorStr = "cljs.core.async/t24794";

cljs.core.async.t24794.cljs$lang$ctorPrWriter = (function (this__18283__auto__,writer__18284__auto__,opt__18285__auto__){
return cljs.core._write.call(null,writer__18284__auto__,"cljs.core.async/t24794");
});

cljs.core.async.__GT_t24794 = (function cljs$core$async$fn_handler_$___GT_t24794(f__$1,fn_handler__$1,meta24795){
return (new cljs.core.async.t24794(f__$1,fn_handler__$1,meta24795));
});

}

return (new cljs.core.async.t24794(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__24798 = buff;
if(G__24798){
var bit__18378__auto__ = null;
if(cljs.core.truth_((function (){var or__17704__auto__ = bit__18378__auto__;
if(cljs.core.truth_(or__17704__auto__)){
return or__17704__auto__;
} else {
return G__24798.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24798.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24798);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24798);
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
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.call(null,null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
return cljs$core$async$chan.call(null,buf_or_n,null,null);
});
var cljs$core$async$chan__2 = (function (buf_or_n,xform){
return cljs$core$async$chan.call(null,buf_or_n,xform,null);
});
var cljs$core$async$chan__3 = (function (buf_or_n,xform,ex_handler){
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
cljs$core$async$chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
case 2:
return cljs$core$async$chan__2.call(this,buf_or_n,xform);
case 3:
return cljs$core$async$chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$chan__2;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$chan__3;
return cljs$core$async$chan;
})()
;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.call(null,port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24799 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24799);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24799,ret){
return (function (){
return fn1.call(null,val_24799);
});})(val_24799,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.call(null,port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
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
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__18589__auto___24800 = n;
var x_24801 = (0);
while(true){
if((x_24801 < n__18589__auto___24800)){
(a[x_24801] = (0));

var G__24802 = (x_24801 + (1));
x_24801 = G__24802;
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

var G__24803 = (i + (1));
i = G__24803;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t24807 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24807 = (function (flag,alt_flag,meta24808){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24808 = meta24808;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24807.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24807.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t24807.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t24807.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24809){
var self__ = this;
var _24809__$1 = this;
return self__.meta24808;
});})(flag))
;

cljs.core.async.t24807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24809,meta24808__$1){
var self__ = this;
var _24809__$1 = this;
return (new cljs.core.async.t24807(self__.flag,self__.alt_flag,meta24808__$1));
});})(flag))
;

cljs.core.async.t24807.cljs$lang$type = true;

cljs.core.async.t24807.cljs$lang$ctorStr = "cljs.core.async/t24807";

cljs.core.async.t24807.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18283__auto__,writer__18284__auto__,opt__18285__auto__){
return cljs.core._write.call(null,writer__18284__auto__,"cljs.core.async/t24807");
});})(flag))
;

cljs.core.async.__GT_t24807 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t24807(flag__$1,alt_flag__$1,meta24808){
return (new cljs.core.async.t24807(flag__$1,alt_flag__$1,meta24808));
});})(flag))
;

}

return (new cljs.core.async.t24807(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t24813 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24813 = (function (cb,flag,alt_handler,meta24814){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24814 = meta24814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24813.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24813.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t24813.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t24813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24815){
var self__ = this;
var _24815__$1 = this;
return self__.meta24814;
});

cljs.core.async.t24813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24815,meta24814__$1){
var self__ = this;
var _24815__$1 = this;
return (new cljs.core.async.t24813(self__.cb,self__.flag,self__.alt_handler,meta24814__$1));
});

cljs.core.async.t24813.cljs$lang$type = true;

cljs.core.async.t24813.cljs$lang$ctorStr = "cljs.core.async/t24813";

cljs.core.async.t24813.cljs$lang$ctorPrWriter = (function (this__18283__auto__,writer__18284__auto__,opt__18285__auto__){
return cljs.core._write.call(null,writer__18284__auto__,"cljs.core.async/t24813");
});

cljs.core.async.__GT_t24813 = (function cljs$core$async$alt_handler_$___GT_t24813(cb__$1,flag__$1,alt_handler__$1,meta24814){
return (new cljs.core.async.t24813(cb__$1,flag__$1,alt_handler__$1,meta24814));
});

}

return (new cljs.core.async.t24813(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__24816_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24816_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24817_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24817_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17704__auto__ = wport;
if(cljs.core.truth_(or__17704__auto__)){
return or__17704__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24818 = (i + (1));
i = G__24818;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17704__auto__ = ret;
if(cljs.core.truth_(or__17704__auto__)){
return or__17704__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__17692__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17692__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17692__auto__;
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
var cljs$core$async$alts_BANG___delegate = function (ports,p__24819){
var map__24821 = p__24819;
var map__24821__$1 = ((cljs.core.seq_QMARK_.call(null,map__24821))?cljs.core.apply.call(null,cljs.core.hash_map,map__24821):map__24821);
var opts = map__24821__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__24819 = null;
if (arguments.length > 1) {
var G__24822__i = 0, G__24822__a = new Array(arguments.length -  1);
while (G__24822__i < G__24822__a.length) {G__24822__a[G__24822__i] = arguments[G__24822__i + 1]; ++G__24822__i;}
  p__24819 = new cljs.core.IndexedSeq(G__24822__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__24819);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__24823){
var ports = cljs.core.first(arglist__24823);
var p__24819 = cljs.core.rest(arglist__24823);
return cljs$core$async$alts_BANG___delegate(ports,p__24819);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.call(null,from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__19886__auto___24918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto___24918){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto___24918){
return (function (state_24894){
var state_val_24895 = (state_24894[(1)]);
if((state_val_24895 === (7))){
var inst_24890 = (state_24894[(2)]);
var state_24894__$1 = state_24894;
var statearr_24896_24919 = state_24894__$1;
(statearr_24896_24919[(2)] = inst_24890);

(statearr_24896_24919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24895 === (1))){
var state_24894__$1 = state_24894;
var statearr_24897_24920 = state_24894__$1;
(statearr_24897_24920[(2)] = null);

(statearr_24897_24920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24895 === (4))){
var inst_24873 = (state_24894[(7)]);
var inst_24873__$1 = (state_24894[(2)]);
var inst_24874 = (inst_24873__$1 == null);
var state_24894__$1 = (function (){var statearr_24898 = state_24894;
(statearr_24898[(7)] = inst_24873__$1);

return statearr_24898;
})();
if(cljs.core.truth_(inst_24874)){
var statearr_24899_24921 = state_24894__$1;
(statearr_24899_24921[(1)] = (5));

} else {
var statearr_24900_24922 = state_24894__$1;
(statearr_24900_24922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24895 === (13))){
var state_24894__$1 = state_24894;
var statearr_24901_24923 = state_24894__$1;
(statearr_24901_24923[(2)] = null);

(statearr_24901_24923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24895 === (6))){
var inst_24873 = (state_24894[(7)]);
var state_24894__$1 = state_24894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24894__$1,(11),to,inst_24873);
} else {
if((state_val_24895 === (3))){
var inst_24892 = (state_24894[(2)]);
var state_24894__$1 = state_24894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24894__$1,inst_24892);
} else {
if((state_val_24895 === (12))){
var state_24894__$1 = state_24894;
var statearr_24902_24924 = state_24894__$1;
(statearr_24902_24924[(2)] = null);

(statearr_24902_24924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24895 === (2))){
var state_24894__$1 = state_24894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24894__$1,(4),from);
} else {
if((state_val_24895 === (11))){
var inst_24883 = (state_24894[(2)]);
var state_24894__$1 = state_24894;
if(cljs.core.truth_(inst_24883)){
var statearr_24903_24925 = state_24894__$1;
(statearr_24903_24925[(1)] = (12));

} else {
var statearr_24904_24926 = state_24894__$1;
(statearr_24904_24926[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24895 === (9))){
var state_24894__$1 = state_24894;
var statearr_24905_24927 = state_24894__$1;
(statearr_24905_24927[(2)] = null);

(statearr_24905_24927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24895 === (5))){
var state_24894__$1 = state_24894;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24906_24928 = state_24894__$1;
(statearr_24906_24928[(1)] = (8));

} else {
var statearr_24907_24929 = state_24894__$1;
(statearr_24907_24929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24895 === (14))){
var inst_24888 = (state_24894[(2)]);
var state_24894__$1 = state_24894;
var statearr_24908_24930 = state_24894__$1;
(statearr_24908_24930[(2)] = inst_24888);

(statearr_24908_24930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24895 === (10))){
var inst_24880 = (state_24894[(2)]);
var state_24894__$1 = state_24894;
var statearr_24909_24931 = state_24894__$1;
(statearr_24909_24931[(2)] = inst_24880);

(statearr_24909_24931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24895 === (8))){
var inst_24877 = cljs.core.async.close_BANG_.call(null,to);
var state_24894__$1 = state_24894;
var statearr_24910_24932 = state_24894__$1;
(statearr_24910_24932[(2)] = inst_24877);

(statearr_24910_24932[(1)] = (10));


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
});})(c__19886__auto___24918))
;
return ((function (switch__19830__auto__,c__19886__auto___24918){
return (function() {
var cljs$core$async$pipe_$_state_machine__19831__auto__ = null;
var cljs$core$async$pipe_$_state_machine__19831__auto____0 = (function (){
var statearr_24914 = [null,null,null,null,null,null,null,null];
(statearr_24914[(0)] = cljs$core$async$pipe_$_state_machine__19831__auto__);

(statearr_24914[(1)] = (1));

return statearr_24914;
});
var cljs$core$async$pipe_$_state_machine__19831__auto____1 = (function (state_24894){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_24894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e24915){if((e24915 instanceof Object)){
var ex__19834__auto__ = e24915;
var statearr_24916_24933 = state_24894;
(statearr_24916_24933[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24934 = state_24894;
state_24894 = G__24934;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__19831__auto__ = function(state_24894){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__19831__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__19831__auto____1.call(this,state_24894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__19831__auto____0;
cljs$core$async$pipe_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__19831__auto____1;
return cljs$core$async$pipe_$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto___24918))
})();
var state__19888__auto__ = (function (){var statearr_24917 = f__19887__auto__.call(null);
(statearr_24917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___24918);

return statearr_24917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto___24918))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25118){
var vec__25119 = p__25118;
var v = cljs.core.nth.call(null,vec__25119,(0),null);
var p = cljs.core.nth.call(null,vec__25119,(1),null);
var job = vec__25119;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19886__auto___25301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto___25301,res,vec__25119,v,p,job,jobs,results){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto___25301,res,vec__25119,v,p,job,jobs,results){
return (function (state_25124){
var state_val_25125 = (state_25124[(1)]);
if((state_val_25125 === (2))){
var inst_25121 = (state_25124[(2)]);
var inst_25122 = cljs.core.async.close_BANG_.call(null,res);
var state_25124__$1 = (function (){var statearr_25126 = state_25124;
(statearr_25126[(7)] = inst_25121);

return statearr_25126;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25124__$1,inst_25122);
} else {
if((state_val_25125 === (1))){
var state_25124__$1 = state_25124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25124__$1,(2),res,v);
} else {
return null;
}
}
});})(c__19886__auto___25301,res,vec__25119,v,p,job,jobs,results))
;
return ((function (switch__19830__auto__,c__19886__auto___25301,res,vec__25119,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____0 = (function (){
var statearr_25130 = [null,null,null,null,null,null,null,null];
(statearr_25130[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__);

(statearr_25130[(1)] = (1));

return statearr_25130;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____1 = (function (state_25124){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_25124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e25131){if((e25131 instanceof Object)){
var ex__19834__auto__ = e25131;
var statearr_25132_25302 = state_25124;
(statearr_25132_25302[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25303 = state_25124;
state_25124 = G__25303;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__ = function(state_25124){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____1.call(this,state_25124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto___25301,res,vec__25119,v,p,job,jobs,results))
})();
var state__19888__auto__ = (function (){var statearr_25133 = f__19887__auto__.call(null);
(statearr_25133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___25301);

return statearr_25133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto___25301,res,vec__25119,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25134){
var vec__25135 = p__25134;
var v = cljs.core.nth.call(null,vec__25135,(0),null);
var p = cljs.core.nth.call(null,vec__25135,(1),null);
var job = vec__25135;
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
var n__18589__auto___25304 = n;
var __25305 = (0);
while(true){
if((__25305 < n__18589__auto___25304)){
var G__25136_25306 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25136_25306) {
case "async":
var c__19886__auto___25308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25305,c__19886__auto___25308,G__25136_25306,n__18589__auto___25304,jobs,results,process,async){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (__25305,c__19886__auto___25308,G__25136_25306,n__18589__auto___25304,jobs,results,process,async){
return (function (state_25149){
var state_val_25150 = (state_25149[(1)]);
if((state_val_25150 === (7))){
var inst_25145 = (state_25149[(2)]);
var state_25149__$1 = state_25149;
var statearr_25151_25309 = state_25149__$1;
(statearr_25151_25309[(2)] = inst_25145);

(statearr_25151_25309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25150 === (6))){
var state_25149__$1 = state_25149;
var statearr_25152_25310 = state_25149__$1;
(statearr_25152_25310[(2)] = null);

(statearr_25152_25310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25150 === (5))){
var state_25149__$1 = state_25149;
var statearr_25153_25311 = state_25149__$1;
(statearr_25153_25311[(2)] = null);

(statearr_25153_25311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25150 === (4))){
var inst_25139 = (state_25149[(2)]);
var inst_25140 = async.call(null,inst_25139);
var state_25149__$1 = state_25149;
if(cljs.core.truth_(inst_25140)){
var statearr_25154_25312 = state_25149__$1;
(statearr_25154_25312[(1)] = (5));

} else {
var statearr_25155_25313 = state_25149__$1;
(statearr_25155_25313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25150 === (3))){
var inst_25147 = (state_25149[(2)]);
var state_25149__$1 = state_25149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25149__$1,inst_25147);
} else {
if((state_val_25150 === (2))){
var state_25149__$1 = state_25149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25149__$1,(4),jobs);
} else {
if((state_val_25150 === (1))){
var state_25149__$1 = state_25149;
var statearr_25156_25314 = state_25149__$1;
(statearr_25156_25314[(2)] = null);

(statearr_25156_25314[(1)] = (2));


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
});})(__25305,c__19886__auto___25308,G__25136_25306,n__18589__auto___25304,jobs,results,process,async))
;
return ((function (__25305,switch__19830__auto__,c__19886__auto___25308,G__25136_25306,n__18589__auto___25304,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____0 = (function (){
var statearr_25160 = [null,null,null,null,null,null,null];
(statearr_25160[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__);

(statearr_25160[(1)] = (1));

return statearr_25160;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____1 = (function (state_25149){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_25149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e25161){if((e25161 instanceof Object)){
var ex__19834__auto__ = e25161;
var statearr_25162_25315 = state_25149;
(statearr_25162_25315[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25316 = state_25149;
state_25149 = G__25316;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__ = function(state_25149){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____1.call(this,state_25149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__;
})()
;})(__25305,switch__19830__auto__,c__19886__auto___25308,G__25136_25306,n__18589__auto___25304,jobs,results,process,async))
})();
var state__19888__auto__ = (function (){var statearr_25163 = f__19887__auto__.call(null);
(statearr_25163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___25308);

return statearr_25163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(__25305,c__19886__auto___25308,G__25136_25306,n__18589__auto___25304,jobs,results,process,async))
);


break;
case "compute":
var c__19886__auto___25317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25305,c__19886__auto___25317,G__25136_25306,n__18589__auto___25304,jobs,results,process,async){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (__25305,c__19886__auto___25317,G__25136_25306,n__18589__auto___25304,jobs,results,process,async){
return (function (state_25176){
var state_val_25177 = (state_25176[(1)]);
if((state_val_25177 === (7))){
var inst_25172 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
var statearr_25178_25318 = state_25176__$1;
(statearr_25178_25318[(2)] = inst_25172);

(statearr_25178_25318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (6))){
var state_25176__$1 = state_25176;
var statearr_25179_25319 = state_25176__$1;
(statearr_25179_25319[(2)] = null);

(statearr_25179_25319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (5))){
var state_25176__$1 = state_25176;
var statearr_25180_25320 = state_25176__$1;
(statearr_25180_25320[(2)] = null);

(statearr_25180_25320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (4))){
var inst_25166 = (state_25176[(2)]);
var inst_25167 = process.call(null,inst_25166);
var state_25176__$1 = state_25176;
if(cljs.core.truth_(inst_25167)){
var statearr_25181_25321 = state_25176__$1;
(statearr_25181_25321[(1)] = (5));

} else {
var statearr_25182_25322 = state_25176__$1;
(statearr_25182_25322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (3))){
var inst_25174 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25176__$1,inst_25174);
} else {
if((state_val_25177 === (2))){
var state_25176__$1 = state_25176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25176__$1,(4),jobs);
} else {
if((state_val_25177 === (1))){
var state_25176__$1 = state_25176;
var statearr_25183_25323 = state_25176__$1;
(statearr_25183_25323[(2)] = null);

(statearr_25183_25323[(1)] = (2));


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
});})(__25305,c__19886__auto___25317,G__25136_25306,n__18589__auto___25304,jobs,results,process,async))
;
return ((function (__25305,switch__19830__auto__,c__19886__auto___25317,G__25136_25306,n__18589__auto___25304,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____0 = (function (){
var statearr_25187 = [null,null,null,null,null,null,null];
(statearr_25187[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__);

(statearr_25187[(1)] = (1));

return statearr_25187;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____1 = (function (state_25176){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_25176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e25188){if((e25188 instanceof Object)){
var ex__19834__auto__ = e25188;
var statearr_25189_25324 = state_25176;
(statearr_25189_25324[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25325 = state_25176;
state_25176 = G__25325;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__ = function(state_25176){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____1.call(this,state_25176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__;
})()
;})(__25305,switch__19830__auto__,c__19886__auto___25317,G__25136_25306,n__18589__auto___25304,jobs,results,process,async))
})();
var state__19888__auto__ = (function (){var statearr_25190 = f__19887__auto__.call(null);
(statearr_25190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___25317);

return statearr_25190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(__25305,c__19886__auto___25317,G__25136_25306,n__18589__auto___25304,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25326 = (__25305 + (1));
__25305 = G__25326;
continue;
} else {
}
break;
}

var c__19886__auto___25327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto___25327,jobs,results,process,async){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto___25327,jobs,results,process,async){
return (function (state_25212){
var state_val_25213 = (state_25212[(1)]);
if((state_val_25213 === (9))){
var inst_25205 = (state_25212[(2)]);
var state_25212__$1 = (function (){var statearr_25214 = state_25212;
(statearr_25214[(7)] = inst_25205);

return statearr_25214;
})();
var statearr_25215_25328 = state_25212__$1;
(statearr_25215_25328[(2)] = null);

(statearr_25215_25328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (8))){
var inst_25198 = (state_25212[(8)]);
var inst_25203 = (state_25212[(2)]);
var state_25212__$1 = (function (){var statearr_25216 = state_25212;
(statearr_25216[(9)] = inst_25203);

return statearr_25216;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25212__$1,(9),results,inst_25198);
} else {
if((state_val_25213 === (7))){
var inst_25208 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
var statearr_25217_25329 = state_25212__$1;
(statearr_25217_25329[(2)] = inst_25208);

(statearr_25217_25329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (6))){
var inst_25193 = (state_25212[(10)]);
var inst_25198 = (state_25212[(8)]);
var inst_25198__$1 = cljs.core.async.chan.call(null,(1));
var inst_25199 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25200 = [inst_25193,inst_25198__$1];
var inst_25201 = (new cljs.core.PersistentVector(null,2,(5),inst_25199,inst_25200,null));
var state_25212__$1 = (function (){var statearr_25218 = state_25212;
(statearr_25218[(8)] = inst_25198__$1);

return statearr_25218;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25212__$1,(8),jobs,inst_25201);
} else {
if((state_val_25213 === (5))){
var inst_25196 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25212__$1 = state_25212;
var statearr_25219_25330 = state_25212__$1;
(statearr_25219_25330[(2)] = inst_25196);

(statearr_25219_25330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (4))){
var inst_25193 = (state_25212[(10)]);
var inst_25193__$1 = (state_25212[(2)]);
var inst_25194 = (inst_25193__$1 == null);
var state_25212__$1 = (function (){var statearr_25220 = state_25212;
(statearr_25220[(10)] = inst_25193__$1);

return statearr_25220;
})();
if(cljs.core.truth_(inst_25194)){
var statearr_25221_25331 = state_25212__$1;
(statearr_25221_25331[(1)] = (5));

} else {
var statearr_25222_25332 = state_25212__$1;
(statearr_25222_25332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (3))){
var inst_25210 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25212__$1,inst_25210);
} else {
if((state_val_25213 === (2))){
var state_25212__$1 = state_25212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25212__$1,(4),from);
} else {
if((state_val_25213 === (1))){
var state_25212__$1 = state_25212;
var statearr_25223_25333 = state_25212__$1;
(statearr_25223_25333[(2)] = null);

(statearr_25223_25333[(1)] = (2));


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
});})(c__19886__auto___25327,jobs,results,process,async))
;
return ((function (switch__19830__auto__,c__19886__auto___25327,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____0 = (function (){
var statearr_25227 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__);

(statearr_25227[(1)] = (1));

return statearr_25227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____1 = (function (state_25212){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_25212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e25228){if((e25228 instanceof Object)){
var ex__19834__auto__ = e25228;
var statearr_25229_25334 = state_25212;
(statearr_25229_25334[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25335 = state_25212;
state_25212 = G__25335;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__ = function(state_25212){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____1.call(this,state_25212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto___25327,jobs,results,process,async))
})();
var state__19888__auto__ = (function (){var statearr_25230 = f__19887__auto__.call(null);
(statearr_25230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___25327);

return statearr_25230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto___25327,jobs,results,process,async))
);


var c__19886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto__,jobs,results,process,async){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto__,jobs,results,process,async){
return (function (state_25268){
var state_val_25269 = (state_25268[(1)]);
if((state_val_25269 === (7))){
var inst_25264 = (state_25268[(2)]);
var state_25268__$1 = state_25268;
var statearr_25270_25336 = state_25268__$1;
(statearr_25270_25336[(2)] = inst_25264);

(statearr_25270_25336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (20))){
var state_25268__$1 = state_25268;
var statearr_25271_25337 = state_25268__$1;
(statearr_25271_25337[(2)] = null);

(statearr_25271_25337[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (1))){
var state_25268__$1 = state_25268;
var statearr_25272_25338 = state_25268__$1;
(statearr_25272_25338[(2)] = null);

(statearr_25272_25338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (4))){
var inst_25233 = (state_25268[(7)]);
var inst_25233__$1 = (state_25268[(2)]);
var inst_25234 = (inst_25233__$1 == null);
var state_25268__$1 = (function (){var statearr_25273 = state_25268;
(statearr_25273[(7)] = inst_25233__$1);

return statearr_25273;
})();
if(cljs.core.truth_(inst_25234)){
var statearr_25274_25339 = state_25268__$1;
(statearr_25274_25339[(1)] = (5));

} else {
var statearr_25275_25340 = state_25268__$1;
(statearr_25275_25340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (15))){
var inst_25246 = (state_25268[(8)]);
var state_25268__$1 = state_25268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25268__$1,(18),to,inst_25246);
} else {
if((state_val_25269 === (21))){
var inst_25259 = (state_25268[(2)]);
var state_25268__$1 = state_25268;
var statearr_25276_25341 = state_25268__$1;
(statearr_25276_25341[(2)] = inst_25259);

(statearr_25276_25341[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (13))){
var inst_25261 = (state_25268[(2)]);
var state_25268__$1 = (function (){var statearr_25277 = state_25268;
(statearr_25277[(9)] = inst_25261);

return statearr_25277;
})();
var statearr_25278_25342 = state_25268__$1;
(statearr_25278_25342[(2)] = null);

(statearr_25278_25342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (6))){
var inst_25233 = (state_25268[(7)]);
var state_25268__$1 = state_25268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25268__$1,(11),inst_25233);
} else {
if((state_val_25269 === (17))){
var inst_25254 = (state_25268[(2)]);
var state_25268__$1 = state_25268;
if(cljs.core.truth_(inst_25254)){
var statearr_25279_25343 = state_25268__$1;
(statearr_25279_25343[(1)] = (19));

} else {
var statearr_25280_25344 = state_25268__$1;
(statearr_25280_25344[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (3))){
var inst_25266 = (state_25268[(2)]);
var state_25268__$1 = state_25268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25268__$1,inst_25266);
} else {
if((state_val_25269 === (12))){
var inst_25243 = (state_25268[(10)]);
var state_25268__$1 = state_25268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25268__$1,(14),inst_25243);
} else {
if((state_val_25269 === (2))){
var state_25268__$1 = state_25268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25268__$1,(4),results);
} else {
if((state_val_25269 === (19))){
var state_25268__$1 = state_25268;
var statearr_25281_25345 = state_25268__$1;
(statearr_25281_25345[(2)] = null);

(statearr_25281_25345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (11))){
var inst_25243 = (state_25268[(2)]);
var state_25268__$1 = (function (){var statearr_25282 = state_25268;
(statearr_25282[(10)] = inst_25243);

return statearr_25282;
})();
var statearr_25283_25346 = state_25268__$1;
(statearr_25283_25346[(2)] = null);

(statearr_25283_25346[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (9))){
var state_25268__$1 = state_25268;
var statearr_25284_25347 = state_25268__$1;
(statearr_25284_25347[(2)] = null);

(statearr_25284_25347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (5))){
var state_25268__$1 = state_25268;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25285_25348 = state_25268__$1;
(statearr_25285_25348[(1)] = (8));

} else {
var statearr_25286_25349 = state_25268__$1;
(statearr_25286_25349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (14))){
var inst_25248 = (state_25268[(11)]);
var inst_25246 = (state_25268[(8)]);
var inst_25246__$1 = (state_25268[(2)]);
var inst_25247 = (inst_25246__$1 == null);
var inst_25248__$1 = cljs.core.not.call(null,inst_25247);
var state_25268__$1 = (function (){var statearr_25287 = state_25268;
(statearr_25287[(11)] = inst_25248__$1);

(statearr_25287[(8)] = inst_25246__$1);

return statearr_25287;
})();
if(inst_25248__$1){
var statearr_25288_25350 = state_25268__$1;
(statearr_25288_25350[(1)] = (15));

} else {
var statearr_25289_25351 = state_25268__$1;
(statearr_25289_25351[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (16))){
var inst_25248 = (state_25268[(11)]);
var state_25268__$1 = state_25268;
var statearr_25290_25352 = state_25268__$1;
(statearr_25290_25352[(2)] = inst_25248);

(statearr_25290_25352[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (10))){
var inst_25240 = (state_25268[(2)]);
var state_25268__$1 = state_25268;
var statearr_25291_25353 = state_25268__$1;
(statearr_25291_25353[(2)] = inst_25240);

(statearr_25291_25353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (18))){
var inst_25251 = (state_25268[(2)]);
var state_25268__$1 = state_25268;
var statearr_25292_25354 = state_25268__$1;
(statearr_25292_25354[(2)] = inst_25251);

(statearr_25292_25354[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (8))){
var inst_25237 = cljs.core.async.close_BANG_.call(null,to);
var state_25268__$1 = state_25268;
var statearr_25293_25355 = state_25268__$1;
(statearr_25293_25355[(2)] = inst_25237);

(statearr_25293_25355[(1)] = (10));


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
});})(c__19886__auto__,jobs,results,process,async))
;
return ((function (switch__19830__auto__,c__19886__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____0 = (function (){
var statearr_25297 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25297[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__);

(statearr_25297[(1)] = (1));

return statearr_25297;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____1 = (function (state_25268){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_25268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e25298){if((e25298 instanceof Object)){
var ex__19834__auto__ = e25298;
var statearr_25299_25356 = state_25268;
(statearr_25299_25356[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25357 = state_25268;
state_25268 = G__25357;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__ = function(state_25268){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____1.call(this,state_25268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19831__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto__,jobs,results,process,async))
})();
var state__19888__auto__ = (function (){var statearr_25300 = f__19887__auto__.call(null);
(statearr_25300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto__);

return statearr_25300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto__,jobs,results,process,async))
);

return c__19886__auto__;
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
var cljs$core$async$pipeline_async = null;
var cljs$core$async$pipeline_async__4 = (function (n,to,af,from){
return cljs$core$async$pipeline_async.call(null,n,to,af,from,true);
});
var cljs$core$async$pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
cljs$core$async$pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline_async__4.call(this,n,to,af,from);
case 5:
return cljs$core$async$pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline_async__4;
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline_async__5;
return cljs$core$async$pipeline_async;
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
var cljs$core$async$pipeline = null;
var cljs$core$async$pipeline__4 = (function (n,to,xf,from){
return cljs$core$async$pipeline.call(null,n,to,xf,from,true);
});
var cljs$core$async$pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return cljs$core$async$pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var cljs$core$async$pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
cljs$core$async$pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline__4.call(this,n,to,xf,from);
case 5:
return cljs$core$async$pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return cljs$core$async$pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline__4;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline__5;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6 = cljs$core$async$pipeline__6;
return cljs$core$async$pipeline;
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
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.call(null,p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19886__auto___25458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto___25458,tc,fc){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto___25458,tc,fc){
return (function (state_25433){
var state_val_25434 = (state_25433[(1)]);
if((state_val_25434 === (7))){
var inst_25429 = (state_25433[(2)]);
var state_25433__$1 = state_25433;
var statearr_25435_25459 = state_25433__$1;
(statearr_25435_25459[(2)] = inst_25429);

(statearr_25435_25459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (1))){
var state_25433__$1 = state_25433;
var statearr_25436_25460 = state_25433__$1;
(statearr_25436_25460[(2)] = null);

(statearr_25436_25460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (4))){
var inst_25410 = (state_25433[(7)]);
var inst_25410__$1 = (state_25433[(2)]);
var inst_25411 = (inst_25410__$1 == null);
var state_25433__$1 = (function (){var statearr_25437 = state_25433;
(statearr_25437[(7)] = inst_25410__$1);

return statearr_25437;
})();
if(cljs.core.truth_(inst_25411)){
var statearr_25438_25461 = state_25433__$1;
(statearr_25438_25461[(1)] = (5));

} else {
var statearr_25439_25462 = state_25433__$1;
(statearr_25439_25462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (13))){
var state_25433__$1 = state_25433;
var statearr_25440_25463 = state_25433__$1;
(statearr_25440_25463[(2)] = null);

(statearr_25440_25463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (6))){
var inst_25410 = (state_25433[(7)]);
var inst_25416 = p.call(null,inst_25410);
var state_25433__$1 = state_25433;
if(cljs.core.truth_(inst_25416)){
var statearr_25441_25464 = state_25433__$1;
(statearr_25441_25464[(1)] = (9));

} else {
var statearr_25442_25465 = state_25433__$1;
(statearr_25442_25465[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (3))){
var inst_25431 = (state_25433[(2)]);
var state_25433__$1 = state_25433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25433__$1,inst_25431);
} else {
if((state_val_25434 === (12))){
var state_25433__$1 = state_25433;
var statearr_25443_25466 = state_25433__$1;
(statearr_25443_25466[(2)] = null);

(statearr_25443_25466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (2))){
var state_25433__$1 = state_25433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25433__$1,(4),ch);
} else {
if((state_val_25434 === (11))){
var inst_25410 = (state_25433[(7)]);
var inst_25420 = (state_25433[(2)]);
var state_25433__$1 = state_25433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25433__$1,(8),inst_25420,inst_25410);
} else {
if((state_val_25434 === (9))){
var state_25433__$1 = state_25433;
var statearr_25444_25467 = state_25433__$1;
(statearr_25444_25467[(2)] = tc);

(statearr_25444_25467[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (5))){
var inst_25413 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25414 = cljs.core.async.close_BANG_.call(null,fc);
var state_25433__$1 = (function (){var statearr_25445 = state_25433;
(statearr_25445[(8)] = inst_25413);

return statearr_25445;
})();
var statearr_25446_25468 = state_25433__$1;
(statearr_25446_25468[(2)] = inst_25414);

(statearr_25446_25468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (14))){
var inst_25427 = (state_25433[(2)]);
var state_25433__$1 = state_25433;
var statearr_25447_25469 = state_25433__$1;
(statearr_25447_25469[(2)] = inst_25427);

(statearr_25447_25469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (10))){
var state_25433__$1 = state_25433;
var statearr_25448_25470 = state_25433__$1;
(statearr_25448_25470[(2)] = fc);

(statearr_25448_25470[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (8))){
var inst_25422 = (state_25433[(2)]);
var state_25433__$1 = state_25433;
if(cljs.core.truth_(inst_25422)){
var statearr_25449_25471 = state_25433__$1;
(statearr_25449_25471[(1)] = (12));

} else {
var statearr_25450_25472 = state_25433__$1;
(statearr_25450_25472[(1)] = (13));

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
});})(c__19886__auto___25458,tc,fc))
;
return ((function (switch__19830__auto__,c__19886__auto___25458,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__19831__auto__ = null;
var cljs$core$async$split_$_state_machine__19831__auto____0 = (function (){
var statearr_25454 = [null,null,null,null,null,null,null,null,null];
(statearr_25454[(0)] = cljs$core$async$split_$_state_machine__19831__auto__);

(statearr_25454[(1)] = (1));

return statearr_25454;
});
var cljs$core$async$split_$_state_machine__19831__auto____1 = (function (state_25433){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_25433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e25455){if((e25455 instanceof Object)){
var ex__19834__auto__ = e25455;
var statearr_25456_25473 = state_25433;
(statearr_25456_25473[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25474 = state_25433;
state_25433 = G__25474;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__19831__auto__ = function(state_25433){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__19831__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__19831__auto____1.call(this,state_25433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__19831__auto____0;
cljs$core$async$split_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__19831__auto____1;
return cljs$core$async$split_$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto___25458,tc,fc))
})();
var state__19888__auto__ = (function (){var statearr_25457 = f__19887__auto__.call(null);
(statearr_25457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___25458);

return statearr_25457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto___25458,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto__){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto__){
return (function (state_25521){
var state_val_25522 = (state_25521[(1)]);
if((state_val_25522 === (7))){
var inst_25517 = (state_25521[(2)]);
var state_25521__$1 = state_25521;
var statearr_25523_25539 = state_25521__$1;
(statearr_25523_25539[(2)] = inst_25517);

(statearr_25523_25539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25522 === (6))){
var inst_25507 = (state_25521[(7)]);
var inst_25510 = (state_25521[(8)]);
var inst_25514 = f.call(null,inst_25507,inst_25510);
var inst_25507__$1 = inst_25514;
var state_25521__$1 = (function (){var statearr_25524 = state_25521;
(statearr_25524[(7)] = inst_25507__$1);

return statearr_25524;
})();
var statearr_25525_25540 = state_25521__$1;
(statearr_25525_25540[(2)] = null);

(statearr_25525_25540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25522 === (5))){
var inst_25507 = (state_25521[(7)]);
var state_25521__$1 = state_25521;
var statearr_25526_25541 = state_25521__$1;
(statearr_25526_25541[(2)] = inst_25507);

(statearr_25526_25541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25522 === (4))){
var inst_25510 = (state_25521[(8)]);
var inst_25510__$1 = (state_25521[(2)]);
var inst_25511 = (inst_25510__$1 == null);
var state_25521__$1 = (function (){var statearr_25527 = state_25521;
(statearr_25527[(8)] = inst_25510__$1);

return statearr_25527;
})();
if(cljs.core.truth_(inst_25511)){
var statearr_25528_25542 = state_25521__$1;
(statearr_25528_25542[(1)] = (5));

} else {
var statearr_25529_25543 = state_25521__$1;
(statearr_25529_25543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25522 === (3))){
var inst_25519 = (state_25521[(2)]);
var state_25521__$1 = state_25521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25521__$1,inst_25519);
} else {
if((state_val_25522 === (2))){
var state_25521__$1 = state_25521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25521__$1,(4),ch);
} else {
if((state_val_25522 === (1))){
var inst_25507 = init;
var state_25521__$1 = (function (){var statearr_25530 = state_25521;
(statearr_25530[(7)] = inst_25507);

return statearr_25530;
})();
var statearr_25531_25544 = state_25521__$1;
(statearr_25531_25544[(2)] = null);

(statearr_25531_25544[(1)] = (2));


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
});})(c__19886__auto__))
;
return ((function (switch__19830__auto__,c__19886__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19831__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19831__auto____0 = (function (){
var statearr_25535 = [null,null,null,null,null,null,null,null,null];
(statearr_25535[(0)] = cljs$core$async$reduce_$_state_machine__19831__auto__);

(statearr_25535[(1)] = (1));

return statearr_25535;
});
var cljs$core$async$reduce_$_state_machine__19831__auto____1 = (function (state_25521){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_25521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e25536){if((e25536 instanceof Object)){
var ex__19834__auto__ = e25536;
var statearr_25537_25545 = state_25521;
(statearr_25537_25545[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25546 = state_25521;
state_25521 = G__25546;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19831__auto__ = function(state_25521){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19831__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19831__auto____1.call(this,state_25521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19831__auto____0;
cljs$core$async$reduce_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19831__auto____1;
return cljs$core$async$reduce_$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto__))
})();
var state__19888__auto__ = (function (){var statearr_25538 = f__19887__auto__.call(null);
(statearr_25538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto__);

return statearr_25538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto__))
);

return c__19886__auto__;
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
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.call(null,ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__19886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto__){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto__){
return (function (state_25620){
var state_val_25621 = (state_25620[(1)]);
if((state_val_25621 === (7))){
var inst_25602 = (state_25620[(2)]);
var state_25620__$1 = state_25620;
var statearr_25622_25645 = state_25620__$1;
(statearr_25622_25645[(2)] = inst_25602);

(statearr_25622_25645[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (1))){
var inst_25596 = cljs.core.seq.call(null,coll);
var inst_25597 = inst_25596;
var state_25620__$1 = (function (){var statearr_25623 = state_25620;
(statearr_25623[(7)] = inst_25597);

return statearr_25623;
})();
var statearr_25624_25646 = state_25620__$1;
(statearr_25624_25646[(2)] = null);

(statearr_25624_25646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (4))){
var inst_25597 = (state_25620[(7)]);
var inst_25600 = cljs.core.first.call(null,inst_25597);
var state_25620__$1 = state_25620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25620__$1,(7),ch,inst_25600);
} else {
if((state_val_25621 === (13))){
var inst_25614 = (state_25620[(2)]);
var state_25620__$1 = state_25620;
var statearr_25625_25647 = state_25620__$1;
(statearr_25625_25647[(2)] = inst_25614);

(statearr_25625_25647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (6))){
var inst_25605 = (state_25620[(2)]);
var state_25620__$1 = state_25620;
if(cljs.core.truth_(inst_25605)){
var statearr_25626_25648 = state_25620__$1;
(statearr_25626_25648[(1)] = (8));

} else {
var statearr_25627_25649 = state_25620__$1;
(statearr_25627_25649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (3))){
var inst_25618 = (state_25620[(2)]);
var state_25620__$1 = state_25620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25620__$1,inst_25618);
} else {
if((state_val_25621 === (12))){
var state_25620__$1 = state_25620;
var statearr_25628_25650 = state_25620__$1;
(statearr_25628_25650[(2)] = null);

(statearr_25628_25650[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (2))){
var inst_25597 = (state_25620[(7)]);
var state_25620__$1 = state_25620;
if(cljs.core.truth_(inst_25597)){
var statearr_25629_25651 = state_25620__$1;
(statearr_25629_25651[(1)] = (4));

} else {
var statearr_25630_25652 = state_25620__$1;
(statearr_25630_25652[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (11))){
var inst_25611 = cljs.core.async.close_BANG_.call(null,ch);
var state_25620__$1 = state_25620;
var statearr_25631_25653 = state_25620__$1;
(statearr_25631_25653[(2)] = inst_25611);

(statearr_25631_25653[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (9))){
var state_25620__$1 = state_25620;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25632_25654 = state_25620__$1;
(statearr_25632_25654[(1)] = (11));

} else {
var statearr_25633_25655 = state_25620__$1;
(statearr_25633_25655[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (5))){
var inst_25597 = (state_25620[(7)]);
var state_25620__$1 = state_25620;
var statearr_25634_25656 = state_25620__$1;
(statearr_25634_25656[(2)] = inst_25597);

(statearr_25634_25656[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (10))){
var inst_25616 = (state_25620[(2)]);
var state_25620__$1 = state_25620;
var statearr_25635_25657 = state_25620__$1;
(statearr_25635_25657[(2)] = inst_25616);

(statearr_25635_25657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25621 === (8))){
var inst_25597 = (state_25620[(7)]);
var inst_25607 = cljs.core.next.call(null,inst_25597);
var inst_25597__$1 = inst_25607;
var state_25620__$1 = (function (){var statearr_25636 = state_25620;
(statearr_25636[(7)] = inst_25597__$1);

return statearr_25636;
})();
var statearr_25637_25658 = state_25620__$1;
(statearr_25637_25658[(2)] = null);

(statearr_25637_25658[(1)] = (2));


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
});})(c__19886__auto__))
;
return ((function (switch__19830__auto__,c__19886__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__19831__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__19831__auto____0 = (function (){
var statearr_25641 = [null,null,null,null,null,null,null,null];
(statearr_25641[(0)] = cljs$core$async$onto_chan_$_state_machine__19831__auto__);

(statearr_25641[(1)] = (1));

return statearr_25641;
});
var cljs$core$async$onto_chan_$_state_machine__19831__auto____1 = (function (state_25620){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_25620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e25642){if((e25642 instanceof Object)){
var ex__19834__auto__ = e25642;
var statearr_25643_25659 = state_25620;
(statearr_25643_25659[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25660 = state_25620;
state_25620 = G__25660;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__19831__auto__ = function(state_25620){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__19831__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__19831__auto____1.call(this,state_25620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__19831__auto____0;
cljs$core$async$onto_chan_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__19831__auto____1;
return cljs$core$async$onto_chan_$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto__))
})();
var state__19888__auto__ = (function (){var statearr_25644 = f__19887__auto__.call(null);
(statearr_25644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto__);

return statearr_25644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto__))
);

return c__19886__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj25662 = {};
return obj25662;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__17692__auto__ = _;
if(and__17692__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__17692__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18340__auto__ = (((_ == null))?null:_);
return (function (){var or__17704__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18340__auto__)]);
if(or__17704__auto__){
return or__17704__auto__;
} else {
var or__17704__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__17704__auto____$1){
return or__17704__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj25664 = {};
return obj25664;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__17692__auto__ = m;
if(and__17692__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__17692__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18340__auto__ = (((m == null))?null:m);
return (function (){var or__17704__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18340__auto__)]);
if(or__17704__auto__){
return or__17704__auto__;
} else {
var or__17704__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__17704__auto____$1){
return or__17704__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__17692__auto__ = m;
if(and__17692__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__17692__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18340__auto__ = (((m == null))?null:m);
return (function (){var or__17704__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18340__auto__)]);
if(or__17704__auto__){
return or__17704__auto__;
} else {
var or__17704__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__17704__auto____$1){
return or__17704__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__17692__auto__ = m;
if(and__17692__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__17692__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18340__auto__ = (((m == null))?null:m);
return (function (){var or__17704__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18340__auto__)]);
if(or__17704__auto__){
return or__17704__auto__;
} else {
var or__17704__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__17704__auto____$1){
return or__17704__auto____$1;
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
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t25886 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25886 = (function (cs,ch,mult,meta25887){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25887 = meta25887;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25886.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25886.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25886.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25886.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t25886.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25886.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25886.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25888){
var self__ = this;
var _25888__$1 = this;
return self__.meta25887;
});})(cs))
;

cljs.core.async.t25886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25888,meta25887__$1){
var self__ = this;
var _25888__$1 = this;
return (new cljs.core.async.t25886(self__.cs,self__.ch,self__.mult,meta25887__$1));
});})(cs))
;

cljs.core.async.t25886.cljs$lang$type = true;

cljs.core.async.t25886.cljs$lang$ctorStr = "cljs.core.async/t25886";

cljs.core.async.t25886.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18283__auto__,writer__18284__auto__,opt__18285__auto__){
return cljs.core._write.call(null,writer__18284__auto__,"cljs.core.async/t25886");
});})(cs))
;

cljs.core.async.__GT_t25886 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t25886(cs__$1,ch__$1,mult__$1,meta25887){
return (new cljs.core.async.t25886(cs__$1,ch__$1,mult__$1,meta25887));
});})(cs))
;

}

return (new cljs.core.async.t25886(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19886__auto___26107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto___26107,cs,m,dchan,dctr,done){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto___26107,cs,m,dchan,dctr,done){
return (function (state_26019){
var state_val_26020 = (state_26019[(1)]);
if((state_val_26020 === (7))){
var inst_26015 = (state_26019[(2)]);
var state_26019__$1 = state_26019;
var statearr_26021_26108 = state_26019__$1;
(statearr_26021_26108[(2)] = inst_26015);

(statearr_26021_26108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (20))){
var inst_25920 = (state_26019[(7)]);
var inst_25930 = cljs.core.first.call(null,inst_25920);
var inst_25931 = cljs.core.nth.call(null,inst_25930,(0),null);
var inst_25932 = cljs.core.nth.call(null,inst_25930,(1),null);
var state_26019__$1 = (function (){var statearr_26022 = state_26019;
(statearr_26022[(8)] = inst_25931);

return statearr_26022;
})();
if(cljs.core.truth_(inst_25932)){
var statearr_26023_26109 = state_26019__$1;
(statearr_26023_26109[(1)] = (22));

} else {
var statearr_26024_26110 = state_26019__$1;
(statearr_26024_26110[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (27))){
var inst_25960 = (state_26019[(9)]);
var inst_25962 = (state_26019[(10)]);
var inst_25967 = (state_26019[(11)]);
var inst_25891 = (state_26019[(12)]);
var inst_25967__$1 = cljs.core._nth.call(null,inst_25960,inst_25962);
var inst_25968 = cljs.core.async.put_BANG_.call(null,inst_25967__$1,inst_25891,done);
var state_26019__$1 = (function (){var statearr_26025 = state_26019;
(statearr_26025[(11)] = inst_25967__$1);

return statearr_26025;
})();
if(cljs.core.truth_(inst_25968)){
var statearr_26026_26111 = state_26019__$1;
(statearr_26026_26111[(1)] = (30));

} else {
var statearr_26027_26112 = state_26019__$1;
(statearr_26027_26112[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (1))){
var state_26019__$1 = state_26019;
var statearr_26028_26113 = state_26019__$1;
(statearr_26028_26113[(2)] = null);

(statearr_26028_26113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (24))){
var inst_25920 = (state_26019[(7)]);
var inst_25937 = (state_26019[(2)]);
var inst_25938 = cljs.core.next.call(null,inst_25920);
var inst_25900 = inst_25938;
var inst_25901 = null;
var inst_25902 = (0);
var inst_25903 = (0);
var state_26019__$1 = (function (){var statearr_26029 = state_26019;
(statearr_26029[(13)] = inst_25937);

(statearr_26029[(14)] = inst_25902);

(statearr_26029[(15)] = inst_25901);

(statearr_26029[(16)] = inst_25903);

(statearr_26029[(17)] = inst_25900);

return statearr_26029;
})();
var statearr_26030_26114 = state_26019__$1;
(statearr_26030_26114[(2)] = null);

(statearr_26030_26114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (39))){
var state_26019__$1 = state_26019;
var statearr_26034_26115 = state_26019__$1;
(statearr_26034_26115[(2)] = null);

(statearr_26034_26115[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (4))){
var inst_25891 = (state_26019[(12)]);
var inst_25891__$1 = (state_26019[(2)]);
var inst_25892 = (inst_25891__$1 == null);
var state_26019__$1 = (function (){var statearr_26035 = state_26019;
(statearr_26035[(12)] = inst_25891__$1);

return statearr_26035;
})();
if(cljs.core.truth_(inst_25892)){
var statearr_26036_26116 = state_26019__$1;
(statearr_26036_26116[(1)] = (5));

} else {
var statearr_26037_26117 = state_26019__$1;
(statearr_26037_26117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (15))){
var inst_25902 = (state_26019[(14)]);
var inst_25901 = (state_26019[(15)]);
var inst_25903 = (state_26019[(16)]);
var inst_25900 = (state_26019[(17)]);
var inst_25916 = (state_26019[(2)]);
var inst_25917 = (inst_25903 + (1));
var tmp26031 = inst_25902;
var tmp26032 = inst_25901;
var tmp26033 = inst_25900;
var inst_25900__$1 = tmp26033;
var inst_25901__$1 = tmp26032;
var inst_25902__$1 = tmp26031;
var inst_25903__$1 = inst_25917;
var state_26019__$1 = (function (){var statearr_26038 = state_26019;
(statearr_26038[(14)] = inst_25902__$1);

(statearr_26038[(15)] = inst_25901__$1);

(statearr_26038[(16)] = inst_25903__$1);

(statearr_26038[(18)] = inst_25916);

(statearr_26038[(17)] = inst_25900__$1);

return statearr_26038;
})();
var statearr_26039_26118 = state_26019__$1;
(statearr_26039_26118[(2)] = null);

(statearr_26039_26118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (21))){
var inst_25941 = (state_26019[(2)]);
var state_26019__$1 = state_26019;
var statearr_26043_26119 = state_26019__$1;
(statearr_26043_26119[(2)] = inst_25941);

(statearr_26043_26119[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (31))){
var inst_25967 = (state_26019[(11)]);
var inst_25971 = done.call(null,null);
var inst_25972 = cljs.core.async.untap_STAR_.call(null,m,inst_25967);
var state_26019__$1 = (function (){var statearr_26044 = state_26019;
(statearr_26044[(19)] = inst_25971);

return statearr_26044;
})();
var statearr_26045_26120 = state_26019__$1;
(statearr_26045_26120[(2)] = inst_25972);

(statearr_26045_26120[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (32))){
var inst_25961 = (state_26019[(20)]);
var inst_25959 = (state_26019[(21)]);
var inst_25960 = (state_26019[(9)]);
var inst_25962 = (state_26019[(10)]);
var inst_25974 = (state_26019[(2)]);
var inst_25975 = (inst_25962 + (1));
var tmp26040 = inst_25961;
var tmp26041 = inst_25959;
var tmp26042 = inst_25960;
var inst_25959__$1 = tmp26041;
var inst_25960__$1 = tmp26042;
var inst_25961__$1 = tmp26040;
var inst_25962__$1 = inst_25975;
var state_26019__$1 = (function (){var statearr_26046 = state_26019;
(statearr_26046[(22)] = inst_25974);

(statearr_26046[(20)] = inst_25961__$1);

(statearr_26046[(21)] = inst_25959__$1);

(statearr_26046[(9)] = inst_25960__$1);

(statearr_26046[(10)] = inst_25962__$1);

return statearr_26046;
})();
var statearr_26047_26121 = state_26019__$1;
(statearr_26047_26121[(2)] = null);

(statearr_26047_26121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (40))){
var inst_25987 = (state_26019[(23)]);
var inst_25991 = done.call(null,null);
var inst_25992 = cljs.core.async.untap_STAR_.call(null,m,inst_25987);
var state_26019__$1 = (function (){var statearr_26048 = state_26019;
(statearr_26048[(24)] = inst_25991);

return statearr_26048;
})();
var statearr_26049_26122 = state_26019__$1;
(statearr_26049_26122[(2)] = inst_25992);

(statearr_26049_26122[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (33))){
var inst_25978 = (state_26019[(25)]);
var inst_25980 = cljs.core.chunked_seq_QMARK_.call(null,inst_25978);
var state_26019__$1 = state_26019;
if(inst_25980){
var statearr_26050_26123 = state_26019__$1;
(statearr_26050_26123[(1)] = (36));

} else {
var statearr_26051_26124 = state_26019__$1;
(statearr_26051_26124[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (13))){
var inst_25910 = (state_26019[(26)]);
var inst_25913 = cljs.core.async.close_BANG_.call(null,inst_25910);
var state_26019__$1 = state_26019;
var statearr_26052_26125 = state_26019__$1;
(statearr_26052_26125[(2)] = inst_25913);

(statearr_26052_26125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (22))){
var inst_25931 = (state_26019[(8)]);
var inst_25934 = cljs.core.async.close_BANG_.call(null,inst_25931);
var state_26019__$1 = state_26019;
var statearr_26053_26126 = state_26019__$1;
(statearr_26053_26126[(2)] = inst_25934);

(statearr_26053_26126[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (36))){
var inst_25978 = (state_26019[(25)]);
var inst_25982 = cljs.core.chunk_first.call(null,inst_25978);
var inst_25983 = cljs.core.chunk_rest.call(null,inst_25978);
var inst_25984 = cljs.core.count.call(null,inst_25982);
var inst_25959 = inst_25983;
var inst_25960 = inst_25982;
var inst_25961 = inst_25984;
var inst_25962 = (0);
var state_26019__$1 = (function (){var statearr_26054 = state_26019;
(statearr_26054[(20)] = inst_25961);

(statearr_26054[(21)] = inst_25959);

(statearr_26054[(9)] = inst_25960);

(statearr_26054[(10)] = inst_25962);

return statearr_26054;
})();
var statearr_26055_26127 = state_26019__$1;
(statearr_26055_26127[(2)] = null);

(statearr_26055_26127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (41))){
var inst_25978 = (state_26019[(25)]);
var inst_25994 = (state_26019[(2)]);
var inst_25995 = cljs.core.next.call(null,inst_25978);
var inst_25959 = inst_25995;
var inst_25960 = null;
var inst_25961 = (0);
var inst_25962 = (0);
var state_26019__$1 = (function (){var statearr_26056 = state_26019;
(statearr_26056[(20)] = inst_25961);

(statearr_26056[(21)] = inst_25959);

(statearr_26056[(9)] = inst_25960);

(statearr_26056[(10)] = inst_25962);

(statearr_26056[(27)] = inst_25994);

return statearr_26056;
})();
var statearr_26057_26128 = state_26019__$1;
(statearr_26057_26128[(2)] = null);

(statearr_26057_26128[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (43))){
var state_26019__$1 = state_26019;
var statearr_26058_26129 = state_26019__$1;
(statearr_26058_26129[(2)] = null);

(statearr_26058_26129[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (29))){
var inst_26003 = (state_26019[(2)]);
var state_26019__$1 = state_26019;
var statearr_26059_26130 = state_26019__$1;
(statearr_26059_26130[(2)] = inst_26003);

(statearr_26059_26130[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (44))){
var inst_26012 = (state_26019[(2)]);
var state_26019__$1 = (function (){var statearr_26060 = state_26019;
(statearr_26060[(28)] = inst_26012);

return statearr_26060;
})();
var statearr_26061_26131 = state_26019__$1;
(statearr_26061_26131[(2)] = null);

(statearr_26061_26131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (6))){
var inst_25951 = (state_26019[(29)]);
var inst_25950 = cljs.core.deref.call(null,cs);
var inst_25951__$1 = cljs.core.keys.call(null,inst_25950);
var inst_25952 = cljs.core.count.call(null,inst_25951__$1);
var inst_25953 = cljs.core.reset_BANG_.call(null,dctr,inst_25952);
var inst_25958 = cljs.core.seq.call(null,inst_25951__$1);
var inst_25959 = inst_25958;
var inst_25960 = null;
var inst_25961 = (0);
var inst_25962 = (0);
var state_26019__$1 = (function (){var statearr_26062 = state_26019;
(statearr_26062[(20)] = inst_25961);

(statearr_26062[(21)] = inst_25959);

(statearr_26062[(9)] = inst_25960);

(statearr_26062[(10)] = inst_25962);

(statearr_26062[(29)] = inst_25951__$1);

(statearr_26062[(30)] = inst_25953);

return statearr_26062;
})();
var statearr_26063_26132 = state_26019__$1;
(statearr_26063_26132[(2)] = null);

(statearr_26063_26132[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (28))){
var inst_25959 = (state_26019[(21)]);
var inst_25978 = (state_26019[(25)]);
var inst_25978__$1 = cljs.core.seq.call(null,inst_25959);
var state_26019__$1 = (function (){var statearr_26064 = state_26019;
(statearr_26064[(25)] = inst_25978__$1);

return statearr_26064;
})();
if(inst_25978__$1){
var statearr_26065_26133 = state_26019__$1;
(statearr_26065_26133[(1)] = (33));

} else {
var statearr_26066_26134 = state_26019__$1;
(statearr_26066_26134[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (25))){
var inst_25961 = (state_26019[(20)]);
var inst_25962 = (state_26019[(10)]);
var inst_25964 = (inst_25962 < inst_25961);
var inst_25965 = inst_25964;
var state_26019__$1 = state_26019;
if(cljs.core.truth_(inst_25965)){
var statearr_26067_26135 = state_26019__$1;
(statearr_26067_26135[(1)] = (27));

} else {
var statearr_26068_26136 = state_26019__$1;
(statearr_26068_26136[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (34))){
var state_26019__$1 = state_26019;
var statearr_26069_26137 = state_26019__$1;
(statearr_26069_26137[(2)] = null);

(statearr_26069_26137[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (17))){
var state_26019__$1 = state_26019;
var statearr_26070_26138 = state_26019__$1;
(statearr_26070_26138[(2)] = null);

(statearr_26070_26138[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (3))){
var inst_26017 = (state_26019[(2)]);
var state_26019__$1 = state_26019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26019__$1,inst_26017);
} else {
if((state_val_26020 === (12))){
var inst_25946 = (state_26019[(2)]);
var state_26019__$1 = state_26019;
var statearr_26071_26139 = state_26019__$1;
(statearr_26071_26139[(2)] = inst_25946);

(statearr_26071_26139[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (2))){
var state_26019__$1 = state_26019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26019__$1,(4),ch);
} else {
if((state_val_26020 === (23))){
var state_26019__$1 = state_26019;
var statearr_26072_26140 = state_26019__$1;
(statearr_26072_26140[(2)] = null);

(statearr_26072_26140[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (35))){
var inst_26001 = (state_26019[(2)]);
var state_26019__$1 = state_26019;
var statearr_26073_26141 = state_26019__$1;
(statearr_26073_26141[(2)] = inst_26001);

(statearr_26073_26141[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (19))){
var inst_25920 = (state_26019[(7)]);
var inst_25924 = cljs.core.chunk_first.call(null,inst_25920);
var inst_25925 = cljs.core.chunk_rest.call(null,inst_25920);
var inst_25926 = cljs.core.count.call(null,inst_25924);
var inst_25900 = inst_25925;
var inst_25901 = inst_25924;
var inst_25902 = inst_25926;
var inst_25903 = (0);
var state_26019__$1 = (function (){var statearr_26074 = state_26019;
(statearr_26074[(14)] = inst_25902);

(statearr_26074[(15)] = inst_25901);

(statearr_26074[(16)] = inst_25903);

(statearr_26074[(17)] = inst_25900);

return statearr_26074;
})();
var statearr_26075_26142 = state_26019__$1;
(statearr_26075_26142[(2)] = null);

(statearr_26075_26142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (11))){
var inst_25920 = (state_26019[(7)]);
var inst_25900 = (state_26019[(17)]);
var inst_25920__$1 = cljs.core.seq.call(null,inst_25900);
var state_26019__$1 = (function (){var statearr_26076 = state_26019;
(statearr_26076[(7)] = inst_25920__$1);

return statearr_26076;
})();
if(inst_25920__$1){
var statearr_26077_26143 = state_26019__$1;
(statearr_26077_26143[(1)] = (16));

} else {
var statearr_26078_26144 = state_26019__$1;
(statearr_26078_26144[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (9))){
var inst_25948 = (state_26019[(2)]);
var state_26019__$1 = state_26019;
var statearr_26079_26145 = state_26019__$1;
(statearr_26079_26145[(2)] = inst_25948);

(statearr_26079_26145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (5))){
var inst_25898 = cljs.core.deref.call(null,cs);
var inst_25899 = cljs.core.seq.call(null,inst_25898);
var inst_25900 = inst_25899;
var inst_25901 = null;
var inst_25902 = (0);
var inst_25903 = (0);
var state_26019__$1 = (function (){var statearr_26080 = state_26019;
(statearr_26080[(14)] = inst_25902);

(statearr_26080[(15)] = inst_25901);

(statearr_26080[(16)] = inst_25903);

(statearr_26080[(17)] = inst_25900);

return statearr_26080;
})();
var statearr_26081_26146 = state_26019__$1;
(statearr_26081_26146[(2)] = null);

(statearr_26081_26146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (14))){
var state_26019__$1 = state_26019;
var statearr_26082_26147 = state_26019__$1;
(statearr_26082_26147[(2)] = null);

(statearr_26082_26147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (45))){
var inst_26009 = (state_26019[(2)]);
var state_26019__$1 = state_26019;
var statearr_26083_26148 = state_26019__$1;
(statearr_26083_26148[(2)] = inst_26009);

(statearr_26083_26148[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (26))){
var inst_25951 = (state_26019[(29)]);
var inst_26005 = (state_26019[(2)]);
var inst_26006 = cljs.core.seq.call(null,inst_25951);
var state_26019__$1 = (function (){var statearr_26084 = state_26019;
(statearr_26084[(31)] = inst_26005);

return statearr_26084;
})();
if(inst_26006){
var statearr_26085_26149 = state_26019__$1;
(statearr_26085_26149[(1)] = (42));

} else {
var statearr_26086_26150 = state_26019__$1;
(statearr_26086_26150[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (16))){
var inst_25920 = (state_26019[(7)]);
var inst_25922 = cljs.core.chunked_seq_QMARK_.call(null,inst_25920);
var state_26019__$1 = state_26019;
if(inst_25922){
var statearr_26087_26151 = state_26019__$1;
(statearr_26087_26151[(1)] = (19));

} else {
var statearr_26088_26152 = state_26019__$1;
(statearr_26088_26152[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (38))){
var inst_25998 = (state_26019[(2)]);
var state_26019__$1 = state_26019;
var statearr_26089_26153 = state_26019__$1;
(statearr_26089_26153[(2)] = inst_25998);

(statearr_26089_26153[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (30))){
var state_26019__$1 = state_26019;
var statearr_26090_26154 = state_26019__$1;
(statearr_26090_26154[(2)] = null);

(statearr_26090_26154[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (10))){
var inst_25901 = (state_26019[(15)]);
var inst_25903 = (state_26019[(16)]);
var inst_25909 = cljs.core._nth.call(null,inst_25901,inst_25903);
var inst_25910 = cljs.core.nth.call(null,inst_25909,(0),null);
var inst_25911 = cljs.core.nth.call(null,inst_25909,(1),null);
var state_26019__$1 = (function (){var statearr_26091 = state_26019;
(statearr_26091[(26)] = inst_25910);

return statearr_26091;
})();
if(cljs.core.truth_(inst_25911)){
var statearr_26092_26155 = state_26019__$1;
(statearr_26092_26155[(1)] = (13));

} else {
var statearr_26093_26156 = state_26019__$1;
(statearr_26093_26156[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (18))){
var inst_25944 = (state_26019[(2)]);
var state_26019__$1 = state_26019;
var statearr_26094_26157 = state_26019__$1;
(statearr_26094_26157[(2)] = inst_25944);

(statearr_26094_26157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (42))){
var state_26019__$1 = state_26019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26019__$1,(45),dchan);
} else {
if((state_val_26020 === (37))){
var inst_25978 = (state_26019[(25)]);
var inst_25987 = (state_26019[(23)]);
var inst_25891 = (state_26019[(12)]);
var inst_25987__$1 = cljs.core.first.call(null,inst_25978);
var inst_25988 = cljs.core.async.put_BANG_.call(null,inst_25987__$1,inst_25891,done);
var state_26019__$1 = (function (){var statearr_26095 = state_26019;
(statearr_26095[(23)] = inst_25987__$1);

return statearr_26095;
})();
if(cljs.core.truth_(inst_25988)){
var statearr_26096_26158 = state_26019__$1;
(statearr_26096_26158[(1)] = (39));

} else {
var statearr_26097_26159 = state_26019__$1;
(statearr_26097_26159[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26020 === (8))){
var inst_25902 = (state_26019[(14)]);
var inst_25903 = (state_26019[(16)]);
var inst_25905 = (inst_25903 < inst_25902);
var inst_25906 = inst_25905;
var state_26019__$1 = state_26019;
if(cljs.core.truth_(inst_25906)){
var statearr_26098_26160 = state_26019__$1;
(statearr_26098_26160[(1)] = (10));

} else {
var statearr_26099_26161 = state_26019__$1;
(statearr_26099_26161[(1)] = (11));

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
});})(c__19886__auto___26107,cs,m,dchan,dctr,done))
;
return ((function (switch__19830__auto__,c__19886__auto___26107,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19831__auto__ = null;
var cljs$core$async$mult_$_state_machine__19831__auto____0 = (function (){
var statearr_26103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26103[(0)] = cljs$core$async$mult_$_state_machine__19831__auto__);

(statearr_26103[(1)] = (1));

return statearr_26103;
});
var cljs$core$async$mult_$_state_machine__19831__auto____1 = (function (state_26019){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_26019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e26104){if((e26104 instanceof Object)){
var ex__19834__auto__ = e26104;
var statearr_26105_26162 = state_26019;
(statearr_26105_26162[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26163 = state_26019;
state_26019 = G__26163;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19831__auto__ = function(state_26019){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19831__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19831__auto____1.call(this,state_26019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19831__auto____0;
cljs$core$async$mult_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19831__auto____1;
return cljs$core$async$mult_$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto___26107,cs,m,dchan,dctr,done))
})();
var state__19888__auto__ = (function (){var statearr_26106 = f__19887__auto__.call(null);
(statearr_26106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___26107);

return statearr_26106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto___26107,cs,m,dchan,dctr,done))
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
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.call(null,mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj26165 = {};
return obj26165;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__17692__auto__ = m;
if(and__17692__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__17692__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18340__auto__ = (((m == null))?null:m);
return (function (){var or__17704__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18340__auto__)]);
if(or__17704__auto__){
return or__17704__auto__;
} else {
var or__17704__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__17704__auto____$1){
return or__17704__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__17692__auto__ = m;
if(and__17692__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__17692__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18340__auto__ = (((m == null))?null:m);
return (function (){var or__17704__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18340__auto__)]);
if(or__17704__auto__){
return or__17704__auto__;
} else {
var or__17704__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__17704__auto____$1){
return or__17704__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__17692__auto__ = m;
if(and__17692__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__17692__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18340__auto__ = (((m == null))?null:m);
return (function (){var or__17704__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18340__auto__)]);
if(or__17704__auto__){
return or__17704__auto__;
} else {
var or__17704__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__17704__auto____$1){
return or__17704__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__17692__auto__ = m;
if(and__17692__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__17692__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18340__auto__ = (((m == null))?null:m);
return (function (){var or__17704__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18340__auto__)]);
if(or__17704__auto__){
return or__17704__auto__;
} else {
var or__17704__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__17704__auto____$1){
return or__17704__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__17692__auto__ = m;
if(and__17692__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__17692__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18340__auto__ = (((m == null))?null:m);
return (function (){var or__17704__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18340__auto__)]);
if(or__17704__auto__){
return or__17704__auto__;
} else {
var or__17704__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__17704__auto____$1){
return or__17704__auto____$1;
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
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26166){
var map__26171 = p__26166;
var map__26171__$1 = ((cljs.core.seq_QMARK_.call(null,map__26171))?cljs.core.apply.call(null,cljs.core.hash_map,map__26171):map__26171);
var opts = map__26171__$1;
var statearr_26172_26175 = state;
(statearr_26172_26175[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__26171,map__26171__$1,opts){
return (function (val){
var statearr_26173_26176 = state;
(statearr_26173_26176[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26171,map__26171__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_26174_26177 = state;
(statearr_26174_26177[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26166 = null;
if (arguments.length > 3) {
var G__26178__i = 0, G__26178__a = new Array(arguments.length -  3);
while (G__26178__i < G__26178__a.length) {G__26178__a[G__26178__i] = arguments[G__26178__i + 3]; ++G__26178__i;}
  p__26166 = new cljs.core.IndexedSeq(G__26178__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26166);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26179){
var state = cljs.core.first(arglist__26179);
arglist__26179 = cljs.core.next(arglist__26179);
var cont_block = cljs.core.first(arglist__26179);
arglist__26179 = cljs.core.next(arglist__26179);
var ports = cljs.core.first(arglist__26179);
var p__26166 = cljs.core.rest(arglist__26179);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__26166);
});
cljs$core$async$ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$ioc_alts_BANG___delegate;
return cljs$core$async$ioc_alts_BANG_;
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
cljs.core.async.mix = (function cljs$core$async$mix(out){
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
if(typeof cljs.core.async.t26299 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26299 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26300){
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
this.meta26300 = meta26300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26299.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26299.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26299.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26299.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26299.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26299.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t26299.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26299.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26301){
var self__ = this;
var _26301__$1 = this;
return self__.meta26300;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26301,meta26300__$1){
var self__ = this;
var _26301__$1 = this;
return (new cljs.core.async.t26299(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26300__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26299.cljs$lang$type = true;

cljs.core.async.t26299.cljs$lang$ctorStr = "cljs.core.async/t26299";

cljs.core.async.t26299.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18283__auto__,writer__18284__auto__,opt__18285__auto__){
return cljs.core._write.call(null,writer__18284__auto__,"cljs.core.async/t26299");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26299 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t26299(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26300){
return (new cljs.core.async.t26299(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26300));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26299(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19886__auto___26418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto___26418,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto___26418,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26371){
var state_val_26372 = (state_26371[(1)]);
if((state_val_26372 === (7))){
var inst_26315 = (state_26371[(7)]);
var inst_26320 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26315);
var state_26371__$1 = state_26371;
var statearr_26373_26419 = state_26371__$1;
(statearr_26373_26419[(2)] = inst_26320);

(statearr_26373_26419[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (20))){
var inst_26330 = (state_26371[(8)]);
var state_26371__$1 = state_26371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26371__$1,(23),out,inst_26330);
} else {
if((state_val_26372 === (1))){
var inst_26305 = (state_26371[(9)]);
var inst_26305__$1 = calc_state.call(null);
var inst_26306 = cljs.core.seq_QMARK_.call(null,inst_26305__$1);
var state_26371__$1 = (function (){var statearr_26374 = state_26371;
(statearr_26374[(9)] = inst_26305__$1);

return statearr_26374;
})();
if(inst_26306){
var statearr_26375_26420 = state_26371__$1;
(statearr_26375_26420[(1)] = (2));

} else {
var statearr_26376_26421 = state_26371__$1;
(statearr_26376_26421[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (24))){
var inst_26323 = (state_26371[(10)]);
var inst_26315 = inst_26323;
var state_26371__$1 = (function (){var statearr_26377 = state_26371;
(statearr_26377[(7)] = inst_26315);

return statearr_26377;
})();
var statearr_26378_26422 = state_26371__$1;
(statearr_26378_26422[(2)] = null);

(statearr_26378_26422[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (4))){
var inst_26305 = (state_26371[(9)]);
var inst_26311 = (state_26371[(2)]);
var inst_26312 = cljs.core.get.call(null,inst_26311,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26313 = cljs.core.get.call(null,inst_26311,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26314 = cljs.core.get.call(null,inst_26311,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26315 = inst_26305;
var state_26371__$1 = (function (){var statearr_26379 = state_26371;
(statearr_26379[(11)] = inst_26314);

(statearr_26379[(7)] = inst_26315);

(statearr_26379[(12)] = inst_26313);

(statearr_26379[(13)] = inst_26312);

return statearr_26379;
})();
var statearr_26380_26423 = state_26371__$1;
(statearr_26380_26423[(2)] = null);

(statearr_26380_26423[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (15))){
var state_26371__$1 = state_26371;
var statearr_26381_26424 = state_26371__$1;
(statearr_26381_26424[(2)] = null);

(statearr_26381_26424[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (21))){
var inst_26323 = (state_26371[(10)]);
var inst_26315 = inst_26323;
var state_26371__$1 = (function (){var statearr_26382 = state_26371;
(statearr_26382[(7)] = inst_26315);

return statearr_26382;
})();
var statearr_26383_26425 = state_26371__$1;
(statearr_26383_26425[(2)] = null);

(statearr_26383_26425[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (13))){
var inst_26367 = (state_26371[(2)]);
var state_26371__$1 = state_26371;
var statearr_26384_26426 = state_26371__$1;
(statearr_26384_26426[(2)] = inst_26367);

(statearr_26384_26426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (22))){
var inst_26365 = (state_26371[(2)]);
var state_26371__$1 = state_26371;
var statearr_26385_26427 = state_26371__$1;
(statearr_26385_26427[(2)] = inst_26365);

(statearr_26385_26427[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (6))){
var inst_26369 = (state_26371[(2)]);
var state_26371__$1 = state_26371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26371__$1,inst_26369);
} else {
if((state_val_26372 === (25))){
var state_26371__$1 = state_26371;
var statearr_26386_26428 = state_26371__$1;
(statearr_26386_26428[(2)] = null);

(statearr_26386_26428[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (17))){
var inst_26345 = (state_26371[(14)]);
var state_26371__$1 = state_26371;
var statearr_26387_26429 = state_26371__$1;
(statearr_26387_26429[(2)] = inst_26345);

(statearr_26387_26429[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (3))){
var inst_26305 = (state_26371[(9)]);
var state_26371__$1 = state_26371;
var statearr_26388_26430 = state_26371__$1;
(statearr_26388_26430[(2)] = inst_26305);

(statearr_26388_26430[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (12))){
var inst_26331 = (state_26371[(15)]);
var inst_26345 = (state_26371[(14)]);
var inst_26326 = (state_26371[(16)]);
var inst_26345__$1 = inst_26326.call(null,inst_26331);
var state_26371__$1 = (function (){var statearr_26389 = state_26371;
(statearr_26389[(14)] = inst_26345__$1);

return statearr_26389;
})();
if(cljs.core.truth_(inst_26345__$1)){
var statearr_26390_26431 = state_26371__$1;
(statearr_26390_26431[(1)] = (17));

} else {
var statearr_26391_26432 = state_26371__$1;
(statearr_26391_26432[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (2))){
var inst_26305 = (state_26371[(9)]);
var inst_26308 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26305);
var state_26371__$1 = state_26371;
var statearr_26392_26433 = state_26371__$1;
(statearr_26392_26433[(2)] = inst_26308);

(statearr_26392_26433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (23))){
var inst_26356 = (state_26371[(2)]);
var state_26371__$1 = state_26371;
if(cljs.core.truth_(inst_26356)){
var statearr_26393_26434 = state_26371__$1;
(statearr_26393_26434[(1)] = (24));

} else {
var statearr_26394_26435 = state_26371__$1;
(statearr_26394_26435[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (19))){
var inst_26353 = (state_26371[(2)]);
var state_26371__$1 = state_26371;
if(cljs.core.truth_(inst_26353)){
var statearr_26395_26436 = state_26371__$1;
(statearr_26395_26436[(1)] = (20));

} else {
var statearr_26396_26437 = state_26371__$1;
(statearr_26396_26437[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (11))){
var inst_26330 = (state_26371[(8)]);
var inst_26336 = (inst_26330 == null);
var state_26371__$1 = state_26371;
if(cljs.core.truth_(inst_26336)){
var statearr_26397_26438 = state_26371__$1;
(statearr_26397_26438[(1)] = (14));

} else {
var statearr_26398_26439 = state_26371__$1;
(statearr_26398_26439[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (9))){
var inst_26323 = (state_26371[(10)]);
var inst_26323__$1 = (state_26371[(2)]);
var inst_26324 = cljs.core.get.call(null,inst_26323__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26325 = cljs.core.get.call(null,inst_26323__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26326 = cljs.core.get.call(null,inst_26323__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_26371__$1 = (function (){var statearr_26399 = state_26371;
(statearr_26399[(10)] = inst_26323__$1);

(statearr_26399[(16)] = inst_26326);

(statearr_26399[(17)] = inst_26325);

return statearr_26399;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26371__$1,(10),inst_26324);
} else {
if((state_val_26372 === (5))){
var inst_26315 = (state_26371[(7)]);
var inst_26318 = cljs.core.seq_QMARK_.call(null,inst_26315);
var state_26371__$1 = state_26371;
if(inst_26318){
var statearr_26400_26440 = state_26371__$1;
(statearr_26400_26440[(1)] = (7));

} else {
var statearr_26401_26441 = state_26371__$1;
(statearr_26401_26441[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (14))){
var inst_26331 = (state_26371[(15)]);
var inst_26338 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26331);
var state_26371__$1 = state_26371;
var statearr_26402_26442 = state_26371__$1;
(statearr_26402_26442[(2)] = inst_26338);

(statearr_26402_26442[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (26))){
var inst_26361 = (state_26371[(2)]);
var state_26371__$1 = state_26371;
var statearr_26403_26443 = state_26371__$1;
(statearr_26403_26443[(2)] = inst_26361);

(statearr_26403_26443[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (16))){
var inst_26341 = (state_26371[(2)]);
var inst_26342 = calc_state.call(null);
var inst_26315 = inst_26342;
var state_26371__$1 = (function (){var statearr_26404 = state_26371;
(statearr_26404[(7)] = inst_26315);

(statearr_26404[(18)] = inst_26341);

return statearr_26404;
})();
var statearr_26405_26444 = state_26371__$1;
(statearr_26405_26444[(2)] = null);

(statearr_26405_26444[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (10))){
var inst_26331 = (state_26371[(15)]);
var inst_26330 = (state_26371[(8)]);
var inst_26329 = (state_26371[(2)]);
var inst_26330__$1 = cljs.core.nth.call(null,inst_26329,(0),null);
var inst_26331__$1 = cljs.core.nth.call(null,inst_26329,(1),null);
var inst_26332 = (inst_26330__$1 == null);
var inst_26333 = cljs.core._EQ_.call(null,inst_26331__$1,change);
var inst_26334 = (inst_26332) || (inst_26333);
var state_26371__$1 = (function (){var statearr_26406 = state_26371;
(statearr_26406[(15)] = inst_26331__$1);

(statearr_26406[(8)] = inst_26330__$1);

return statearr_26406;
})();
if(cljs.core.truth_(inst_26334)){
var statearr_26407_26445 = state_26371__$1;
(statearr_26407_26445[(1)] = (11));

} else {
var statearr_26408_26446 = state_26371__$1;
(statearr_26408_26446[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (18))){
var inst_26331 = (state_26371[(15)]);
var inst_26326 = (state_26371[(16)]);
var inst_26325 = (state_26371[(17)]);
var inst_26348 = cljs.core.empty_QMARK_.call(null,inst_26326);
var inst_26349 = inst_26325.call(null,inst_26331);
var inst_26350 = cljs.core.not.call(null,inst_26349);
var inst_26351 = (inst_26348) && (inst_26350);
var state_26371__$1 = state_26371;
var statearr_26409_26447 = state_26371__$1;
(statearr_26409_26447[(2)] = inst_26351);

(statearr_26409_26447[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26372 === (8))){
var inst_26315 = (state_26371[(7)]);
var state_26371__$1 = state_26371;
var statearr_26410_26448 = state_26371__$1;
(statearr_26410_26448[(2)] = inst_26315);

(statearr_26410_26448[(1)] = (9));


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
});})(c__19886__auto___26418,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19830__auto__,c__19886__auto___26418,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19831__auto__ = null;
var cljs$core$async$mix_$_state_machine__19831__auto____0 = (function (){
var statearr_26414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26414[(0)] = cljs$core$async$mix_$_state_machine__19831__auto__);

(statearr_26414[(1)] = (1));

return statearr_26414;
});
var cljs$core$async$mix_$_state_machine__19831__auto____1 = (function (state_26371){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_26371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e26415){if((e26415 instanceof Object)){
var ex__19834__auto__ = e26415;
var statearr_26416_26449 = state_26371;
(statearr_26416_26449[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26450 = state_26371;
state_26371 = G__26450;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19831__auto__ = function(state_26371){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19831__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19831__auto____1.call(this,state_26371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19831__auto____0;
cljs$core$async$mix_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19831__auto____1;
return cljs$core$async$mix_$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto___26418,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19888__auto__ = (function (){var statearr_26417 = f__19887__auto__.call(null);
(statearr_26417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___26418);

return statearr_26417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto___26418,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
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
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj26452 = {};
return obj26452;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__17692__auto__ = p;
if(and__17692__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__17692__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18340__auto__ = (((p == null))?null:p);
return (function (){var or__17704__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18340__auto__)]);
if(or__17704__auto__){
return or__17704__auto__;
} else {
var or__17704__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__17704__auto____$1){
return or__17704__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__17692__auto__ = p;
if(and__17692__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__17692__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18340__auto__ = (((p == null))?null:p);
return (function (){var or__17704__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18340__auto__)]);
if(or__17704__auto__){
return or__17704__auto__;
} else {
var or__17704__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__17704__auto____$1){
return or__17704__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__17692__auto__ = p;
if(and__17692__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__17692__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18340__auto__ = (((p == null))?null:p);
return (function (){var or__17704__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18340__auto__)]);
if(or__17704__auto__){
return or__17704__auto__;
} else {
var or__17704__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17704__auto____$1){
return or__17704__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__17692__auto__ = p;
if(and__17692__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__17692__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18340__auto__ = (((p == null))?null:p);
return (function (){var or__17704__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18340__auto__)]);
if(or__17704__auto__){
return or__17704__auto__;
} else {
var or__17704__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17704__auto____$1){
return or__17704__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
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
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__17704__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17704__auto__)){
return or__17704__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17704__auto__,mults){
return (function (p1__26453_SHARP_){
if(cljs.core.truth_(p1__26453_SHARP_.call(null,topic))){
return p1__26453_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26453_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17704__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26576 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26576 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26577){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26577 = meta26577;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26576.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26576.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26576.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t26576.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t26576.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26576.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26576.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26576.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26578){
var self__ = this;
var _26578__$1 = this;
return self__.meta26577;
});})(mults,ensure_mult))
;

cljs.core.async.t26576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26578,meta26577__$1){
var self__ = this;
var _26578__$1 = this;
return (new cljs.core.async.t26576(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26577__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26576.cljs$lang$type = true;

cljs.core.async.t26576.cljs$lang$ctorStr = "cljs.core.async/t26576";

cljs.core.async.t26576.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18283__auto__,writer__18284__auto__,opt__18285__auto__){
return cljs.core._write.call(null,writer__18284__auto__,"cljs.core.async/t26576");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26576 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t26576(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26577){
return (new cljs.core.async.t26576(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26577));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26576(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19886__auto___26698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto___26698,mults,ensure_mult,p){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto___26698,mults,ensure_mult,p){
return (function (state_26650){
var state_val_26651 = (state_26650[(1)]);
if((state_val_26651 === (7))){
var inst_26646 = (state_26650[(2)]);
var state_26650__$1 = state_26650;
var statearr_26652_26699 = state_26650__$1;
(statearr_26652_26699[(2)] = inst_26646);

(statearr_26652_26699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (20))){
var state_26650__$1 = state_26650;
var statearr_26653_26700 = state_26650__$1;
(statearr_26653_26700[(2)] = null);

(statearr_26653_26700[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (1))){
var state_26650__$1 = state_26650;
var statearr_26654_26701 = state_26650__$1;
(statearr_26654_26701[(2)] = null);

(statearr_26654_26701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (24))){
var inst_26629 = (state_26650[(7)]);
var inst_26638 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26629);
var state_26650__$1 = state_26650;
var statearr_26655_26702 = state_26650__$1;
(statearr_26655_26702[(2)] = inst_26638);

(statearr_26655_26702[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (4))){
var inst_26581 = (state_26650[(8)]);
var inst_26581__$1 = (state_26650[(2)]);
var inst_26582 = (inst_26581__$1 == null);
var state_26650__$1 = (function (){var statearr_26656 = state_26650;
(statearr_26656[(8)] = inst_26581__$1);

return statearr_26656;
})();
if(cljs.core.truth_(inst_26582)){
var statearr_26657_26703 = state_26650__$1;
(statearr_26657_26703[(1)] = (5));

} else {
var statearr_26658_26704 = state_26650__$1;
(statearr_26658_26704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (15))){
var inst_26623 = (state_26650[(2)]);
var state_26650__$1 = state_26650;
var statearr_26659_26705 = state_26650__$1;
(statearr_26659_26705[(2)] = inst_26623);

(statearr_26659_26705[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (21))){
var inst_26643 = (state_26650[(2)]);
var state_26650__$1 = (function (){var statearr_26660 = state_26650;
(statearr_26660[(9)] = inst_26643);

return statearr_26660;
})();
var statearr_26661_26706 = state_26650__$1;
(statearr_26661_26706[(2)] = null);

(statearr_26661_26706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (13))){
var inst_26605 = (state_26650[(10)]);
var inst_26607 = cljs.core.chunked_seq_QMARK_.call(null,inst_26605);
var state_26650__$1 = state_26650;
if(inst_26607){
var statearr_26662_26707 = state_26650__$1;
(statearr_26662_26707[(1)] = (16));

} else {
var statearr_26663_26708 = state_26650__$1;
(statearr_26663_26708[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (22))){
var inst_26635 = (state_26650[(2)]);
var state_26650__$1 = state_26650;
if(cljs.core.truth_(inst_26635)){
var statearr_26664_26709 = state_26650__$1;
(statearr_26664_26709[(1)] = (23));

} else {
var statearr_26665_26710 = state_26650__$1;
(statearr_26665_26710[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (6))){
var inst_26629 = (state_26650[(7)]);
var inst_26631 = (state_26650[(11)]);
var inst_26581 = (state_26650[(8)]);
var inst_26629__$1 = topic_fn.call(null,inst_26581);
var inst_26630 = cljs.core.deref.call(null,mults);
var inst_26631__$1 = cljs.core.get.call(null,inst_26630,inst_26629__$1);
var state_26650__$1 = (function (){var statearr_26666 = state_26650;
(statearr_26666[(7)] = inst_26629__$1);

(statearr_26666[(11)] = inst_26631__$1);

return statearr_26666;
})();
if(cljs.core.truth_(inst_26631__$1)){
var statearr_26667_26711 = state_26650__$1;
(statearr_26667_26711[(1)] = (19));

} else {
var statearr_26668_26712 = state_26650__$1;
(statearr_26668_26712[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (25))){
var inst_26640 = (state_26650[(2)]);
var state_26650__$1 = state_26650;
var statearr_26669_26713 = state_26650__$1;
(statearr_26669_26713[(2)] = inst_26640);

(statearr_26669_26713[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (17))){
var inst_26605 = (state_26650[(10)]);
var inst_26614 = cljs.core.first.call(null,inst_26605);
var inst_26615 = cljs.core.async.muxch_STAR_.call(null,inst_26614);
var inst_26616 = cljs.core.async.close_BANG_.call(null,inst_26615);
var inst_26617 = cljs.core.next.call(null,inst_26605);
var inst_26591 = inst_26617;
var inst_26592 = null;
var inst_26593 = (0);
var inst_26594 = (0);
var state_26650__$1 = (function (){var statearr_26670 = state_26650;
(statearr_26670[(12)] = inst_26593);

(statearr_26670[(13)] = inst_26592);

(statearr_26670[(14)] = inst_26594);

(statearr_26670[(15)] = inst_26591);

(statearr_26670[(16)] = inst_26616);

return statearr_26670;
})();
var statearr_26671_26714 = state_26650__$1;
(statearr_26671_26714[(2)] = null);

(statearr_26671_26714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (3))){
var inst_26648 = (state_26650[(2)]);
var state_26650__$1 = state_26650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26650__$1,inst_26648);
} else {
if((state_val_26651 === (12))){
var inst_26625 = (state_26650[(2)]);
var state_26650__$1 = state_26650;
var statearr_26672_26715 = state_26650__$1;
(statearr_26672_26715[(2)] = inst_26625);

(statearr_26672_26715[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (2))){
var state_26650__$1 = state_26650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26650__$1,(4),ch);
} else {
if((state_val_26651 === (23))){
var state_26650__$1 = state_26650;
var statearr_26673_26716 = state_26650__$1;
(statearr_26673_26716[(2)] = null);

(statearr_26673_26716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (19))){
var inst_26631 = (state_26650[(11)]);
var inst_26581 = (state_26650[(8)]);
var inst_26633 = cljs.core.async.muxch_STAR_.call(null,inst_26631);
var state_26650__$1 = state_26650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26650__$1,(22),inst_26633,inst_26581);
} else {
if((state_val_26651 === (11))){
var inst_26605 = (state_26650[(10)]);
var inst_26591 = (state_26650[(15)]);
var inst_26605__$1 = cljs.core.seq.call(null,inst_26591);
var state_26650__$1 = (function (){var statearr_26674 = state_26650;
(statearr_26674[(10)] = inst_26605__$1);

return statearr_26674;
})();
if(inst_26605__$1){
var statearr_26675_26717 = state_26650__$1;
(statearr_26675_26717[(1)] = (13));

} else {
var statearr_26676_26718 = state_26650__$1;
(statearr_26676_26718[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (9))){
var inst_26627 = (state_26650[(2)]);
var state_26650__$1 = state_26650;
var statearr_26677_26719 = state_26650__$1;
(statearr_26677_26719[(2)] = inst_26627);

(statearr_26677_26719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (5))){
var inst_26588 = cljs.core.deref.call(null,mults);
var inst_26589 = cljs.core.vals.call(null,inst_26588);
var inst_26590 = cljs.core.seq.call(null,inst_26589);
var inst_26591 = inst_26590;
var inst_26592 = null;
var inst_26593 = (0);
var inst_26594 = (0);
var state_26650__$1 = (function (){var statearr_26678 = state_26650;
(statearr_26678[(12)] = inst_26593);

(statearr_26678[(13)] = inst_26592);

(statearr_26678[(14)] = inst_26594);

(statearr_26678[(15)] = inst_26591);

return statearr_26678;
})();
var statearr_26679_26720 = state_26650__$1;
(statearr_26679_26720[(2)] = null);

(statearr_26679_26720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (14))){
var state_26650__$1 = state_26650;
var statearr_26683_26721 = state_26650__$1;
(statearr_26683_26721[(2)] = null);

(statearr_26683_26721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (16))){
var inst_26605 = (state_26650[(10)]);
var inst_26609 = cljs.core.chunk_first.call(null,inst_26605);
var inst_26610 = cljs.core.chunk_rest.call(null,inst_26605);
var inst_26611 = cljs.core.count.call(null,inst_26609);
var inst_26591 = inst_26610;
var inst_26592 = inst_26609;
var inst_26593 = inst_26611;
var inst_26594 = (0);
var state_26650__$1 = (function (){var statearr_26684 = state_26650;
(statearr_26684[(12)] = inst_26593);

(statearr_26684[(13)] = inst_26592);

(statearr_26684[(14)] = inst_26594);

(statearr_26684[(15)] = inst_26591);

return statearr_26684;
})();
var statearr_26685_26722 = state_26650__$1;
(statearr_26685_26722[(2)] = null);

(statearr_26685_26722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (10))){
var inst_26593 = (state_26650[(12)]);
var inst_26592 = (state_26650[(13)]);
var inst_26594 = (state_26650[(14)]);
var inst_26591 = (state_26650[(15)]);
var inst_26599 = cljs.core._nth.call(null,inst_26592,inst_26594);
var inst_26600 = cljs.core.async.muxch_STAR_.call(null,inst_26599);
var inst_26601 = cljs.core.async.close_BANG_.call(null,inst_26600);
var inst_26602 = (inst_26594 + (1));
var tmp26680 = inst_26593;
var tmp26681 = inst_26592;
var tmp26682 = inst_26591;
var inst_26591__$1 = tmp26682;
var inst_26592__$1 = tmp26681;
var inst_26593__$1 = tmp26680;
var inst_26594__$1 = inst_26602;
var state_26650__$1 = (function (){var statearr_26686 = state_26650;
(statearr_26686[(12)] = inst_26593__$1);

(statearr_26686[(13)] = inst_26592__$1);

(statearr_26686[(14)] = inst_26594__$1);

(statearr_26686[(17)] = inst_26601);

(statearr_26686[(15)] = inst_26591__$1);

return statearr_26686;
})();
var statearr_26687_26723 = state_26650__$1;
(statearr_26687_26723[(2)] = null);

(statearr_26687_26723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (18))){
var inst_26620 = (state_26650[(2)]);
var state_26650__$1 = state_26650;
var statearr_26688_26724 = state_26650__$1;
(statearr_26688_26724[(2)] = inst_26620);

(statearr_26688_26724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26651 === (8))){
var inst_26593 = (state_26650[(12)]);
var inst_26594 = (state_26650[(14)]);
var inst_26596 = (inst_26594 < inst_26593);
var inst_26597 = inst_26596;
var state_26650__$1 = state_26650;
if(cljs.core.truth_(inst_26597)){
var statearr_26689_26725 = state_26650__$1;
(statearr_26689_26725[(1)] = (10));

} else {
var statearr_26690_26726 = state_26650__$1;
(statearr_26690_26726[(1)] = (11));

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
});})(c__19886__auto___26698,mults,ensure_mult,p))
;
return ((function (switch__19830__auto__,c__19886__auto___26698,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__19831__auto__ = null;
var cljs$core$async$pub_$_state_machine__19831__auto____0 = (function (){
var statearr_26694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26694[(0)] = cljs$core$async$pub_$_state_machine__19831__auto__);

(statearr_26694[(1)] = (1));

return statearr_26694;
});
var cljs$core$async$pub_$_state_machine__19831__auto____1 = (function (state_26650){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_26650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e26695){if((e26695 instanceof Object)){
var ex__19834__auto__ = e26695;
var statearr_26696_26727 = state_26650;
(statearr_26696_26727[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26728 = state_26650;
state_26650 = G__26728;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__19831__auto__ = function(state_26650){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__19831__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__19831__auto____1.call(this,state_26650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__19831__auto____0;
cljs$core$async$pub_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__19831__auto____1;
return cljs$core$async$pub_$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto___26698,mults,ensure_mult,p))
})();
var state__19888__auto__ = (function (){var statearr_26697 = f__19887__auto__.call(null);
(statearr_26697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___26698);

return statearr_26697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto___26698,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.call(null,p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
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
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.call(null,f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
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
var c__19886__auto___26865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto___26865,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto___26865,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26835){
var state_val_26836 = (state_26835[(1)]);
if((state_val_26836 === (7))){
var state_26835__$1 = state_26835;
var statearr_26837_26866 = state_26835__$1;
(statearr_26837_26866[(2)] = null);

(statearr_26837_26866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26836 === (1))){
var state_26835__$1 = state_26835;
var statearr_26838_26867 = state_26835__$1;
(statearr_26838_26867[(2)] = null);

(statearr_26838_26867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26836 === (4))){
var inst_26799 = (state_26835[(7)]);
var inst_26801 = (inst_26799 < cnt);
var state_26835__$1 = state_26835;
if(cljs.core.truth_(inst_26801)){
var statearr_26839_26868 = state_26835__$1;
(statearr_26839_26868[(1)] = (6));

} else {
var statearr_26840_26869 = state_26835__$1;
(statearr_26840_26869[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26836 === (15))){
var inst_26831 = (state_26835[(2)]);
var state_26835__$1 = state_26835;
var statearr_26841_26870 = state_26835__$1;
(statearr_26841_26870[(2)] = inst_26831);

(statearr_26841_26870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26836 === (13))){
var inst_26824 = cljs.core.async.close_BANG_.call(null,out);
var state_26835__$1 = state_26835;
var statearr_26842_26871 = state_26835__$1;
(statearr_26842_26871[(2)] = inst_26824);

(statearr_26842_26871[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26836 === (6))){
var state_26835__$1 = state_26835;
var statearr_26843_26872 = state_26835__$1;
(statearr_26843_26872[(2)] = null);

(statearr_26843_26872[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26836 === (3))){
var inst_26833 = (state_26835[(2)]);
var state_26835__$1 = state_26835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26835__$1,inst_26833);
} else {
if((state_val_26836 === (12))){
var inst_26821 = (state_26835[(8)]);
var inst_26821__$1 = (state_26835[(2)]);
var inst_26822 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26821__$1);
var state_26835__$1 = (function (){var statearr_26844 = state_26835;
(statearr_26844[(8)] = inst_26821__$1);

return statearr_26844;
})();
if(cljs.core.truth_(inst_26822)){
var statearr_26845_26873 = state_26835__$1;
(statearr_26845_26873[(1)] = (13));

} else {
var statearr_26846_26874 = state_26835__$1;
(statearr_26846_26874[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26836 === (2))){
var inst_26798 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26799 = (0);
var state_26835__$1 = (function (){var statearr_26847 = state_26835;
(statearr_26847[(7)] = inst_26799);

(statearr_26847[(9)] = inst_26798);

return statearr_26847;
})();
var statearr_26848_26875 = state_26835__$1;
(statearr_26848_26875[(2)] = null);

(statearr_26848_26875[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26836 === (11))){
var inst_26799 = (state_26835[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26835,(10),Object,null,(9));
var inst_26808 = chs__$1.call(null,inst_26799);
var inst_26809 = done.call(null,inst_26799);
var inst_26810 = cljs.core.async.take_BANG_.call(null,inst_26808,inst_26809);
var state_26835__$1 = state_26835;
var statearr_26849_26876 = state_26835__$1;
(statearr_26849_26876[(2)] = inst_26810);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26835__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26836 === (9))){
var inst_26799 = (state_26835[(7)]);
var inst_26812 = (state_26835[(2)]);
var inst_26813 = (inst_26799 + (1));
var inst_26799__$1 = inst_26813;
var state_26835__$1 = (function (){var statearr_26850 = state_26835;
(statearr_26850[(7)] = inst_26799__$1);

(statearr_26850[(10)] = inst_26812);

return statearr_26850;
})();
var statearr_26851_26877 = state_26835__$1;
(statearr_26851_26877[(2)] = null);

(statearr_26851_26877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26836 === (5))){
var inst_26819 = (state_26835[(2)]);
var state_26835__$1 = (function (){var statearr_26852 = state_26835;
(statearr_26852[(11)] = inst_26819);

return statearr_26852;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26835__$1,(12),dchan);
} else {
if((state_val_26836 === (14))){
var inst_26821 = (state_26835[(8)]);
var inst_26826 = cljs.core.apply.call(null,f,inst_26821);
var state_26835__$1 = state_26835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26835__$1,(16),out,inst_26826);
} else {
if((state_val_26836 === (16))){
var inst_26828 = (state_26835[(2)]);
var state_26835__$1 = (function (){var statearr_26853 = state_26835;
(statearr_26853[(12)] = inst_26828);

return statearr_26853;
})();
var statearr_26854_26878 = state_26835__$1;
(statearr_26854_26878[(2)] = null);

(statearr_26854_26878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26836 === (10))){
var inst_26803 = (state_26835[(2)]);
var inst_26804 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26835__$1 = (function (){var statearr_26855 = state_26835;
(statearr_26855[(13)] = inst_26803);

return statearr_26855;
})();
var statearr_26856_26879 = state_26835__$1;
(statearr_26856_26879[(2)] = inst_26804);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26835__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26836 === (8))){
var inst_26817 = (state_26835[(2)]);
var state_26835__$1 = state_26835;
var statearr_26857_26880 = state_26835__$1;
(statearr_26857_26880[(2)] = inst_26817);

(statearr_26857_26880[(1)] = (5));


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
});})(c__19886__auto___26865,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19830__auto__,c__19886__auto___26865,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__19831__auto__ = null;
var cljs$core$async$map_$_state_machine__19831__auto____0 = (function (){
var statearr_26861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26861[(0)] = cljs$core$async$map_$_state_machine__19831__auto__);

(statearr_26861[(1)] = (1));

return statearr_26861;
});
var cljs$core$async$map_$_state_machine__19831__auto____1 = (function (state_26835){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_26835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e26862){if((e26862 instanceof Object)){
var ex__19834__auto__ = e26862;
var statearr_26863_26881 = state_26835;
(statearr_26863_26881[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26882 = state_26835;
state_26835 = G__26882;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__19831__auto__ = function(state_26835){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__19831__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__19831__auto____1.call(this,state_26835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__19831__auto____0;
cljs$core$async$map_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__19831__auto____1;
return cljs$core$async$map_$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto___26865,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19888__auto__ = (function (){var statearr_26864 = f__19887__auto__.call(null);
(statearr_26864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___26865);

return statearr_26864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto___26865,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.call(null,chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19886__auto___26990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto___26990,out){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto___26990,out){
return (function (state_26966){
var state_val_26967 = (state_26966[(1)]);
if((state_val_26967 === (7))){
var inst_26945 = (state_26966[(7)]);
var inst_26946 = (state_26966[(8)]);
var inst_26945__$1 = (state_26966[(2)]);
var inst_26946__$1 = cljs.core.nth.call(null,inst_26945__$1,(0),null);
var inst_26947 = cljs.core.nth.call(null,inst_26945__$1,(1),null);
var inst_26948 = (inst_26946__$1 == null);
var state_26966__$1 = (function (){var statearr_26968 = state_26966;
(statearr_26968[(9)] = inst_26947);

(statearr_26968[(7)] = inst_26945__$1);

(statearr_26968[(8)] = inst_26946__$1);

return statearr_26968;
})();
if(cljs.core.truth_(inst_26948)){
var statearr_26969_26991 = state_26966__$1;
(statearr_26969_26991[(1)] = (8));

} else {
var statearr_26970_26992 = state_26966__$1;
(statearr_26970_26992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (1))){
var inst_26937 = cljs.core.vec.call(null,chs);
var inst_26938 = inst_26937;
var state_26966__$1 = (function (){var statearr_26971 = state_26966;
(statearr_26971[(10)] = inst_26938);

return statearr_26971;
})();
var statearr_26972_26993 = state_26966__$1;
(statearr_26972_26993[(2)] = null);

(statearr_26972_26993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (4))){
var inst_26938 = (state_26966[(10)]);
var state_26966__$1 = state_26966;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26966__$1,(7),inst_26938);
} else {
if((state_val_26967 === (6))){
var inst_26962 = (state_26966[(2)]);
var state_26966__$1 = state_26966;
var statearr_26973_26994 = state_26966__$1;
(statearr_26973_26994[(2)] = inst_26962);

(statearr_26973_26994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (3))){
var inst_26964 = (state_26966[(2)]);
var state_26966__$1 = state_26966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26966__$1,inst_26964);
} else {
if((state_val_26967 === (2))){
var inst_26938 = (state_26966[(10)]);
var inst_26940 = cljs.core.count.call(null,inst_26938);
var inst_26941 = (inst_26940 > (0));
var state_26966__$1 = state_26966;
if(cljs.core.truth_(inst_26941)){
var statearr_26975_26995 = state_26966__$1;
(statearr_26975_26995[(1)] = (4));

} else {
var statearr_26976_26996 = state_26966__$1;
(statearr_26976_26996[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (11))){
var inst_26938 = (state_26966[(10)]);
var inst_26955 = (state_26966[(2)]);
var tmp26974 = inst_26938;
var inst_26938__$1 = tmp26974;
var state_26966__$1 = (function (){var statearr_26977 = state_26966;
(statearr_26977[(10)] = inst_26938__$1);

(statearr_26977[(11)] = inst_26955);

return statearr_26977;
})();
var statearr_26978_26997 = state_26966__$1;
(statearr_26978_26997[(2)] = null);

(statearr_26978_26997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (9))){
var inst_26946 = (state_26966[(8)]);
var state_26966__$1 = state_26966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26966__$1,(11),out,inst_26946);
} else {
if((state_val_26967 === (5))){
var inst_26960 = cljs.core.async.close_BANG_.call(null,out);
var state_26966__$1 = state_26966;
var statearr_26979_26998 = state_26966__$1;
(statearr_26979_26998[(2)] = inst_26960);

(statearr_26979_26998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (10))){
var inst_26958 = (state_26966[(2)]);
var state_26966__$1 = state_26966;
var statearr_26980_26999 = state_26966__$1;
(statearr_26980_26999[(2)] = inst_26958);

(statearr_26980_26999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26967 === (8))){
var inst_26947 = (state_26966[(9)]);
var inst_26938 = (state_26966[(10)]);
var inst_26945 = (state_26966[(7)]);
var inst_26946 = (state_26966[(8)]);
var inst_26950 = (function (){var c = inst_26947;
var v = inst_26946;
var vec__26943 = inst_26945;
var cs = inst_26938;
return ((function (c,v,vec__26943,cs,inst_26947,inst_26938,inst_26945,inst_26946,state_val_26967,c__19886__auto___26990,out){
return (function (p1__26883_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26883_SHARP_);
});
;})(c,v,vec__26943,cs,inst_26947,inst_26938,inst_26945,inst_26946,state_val_26967,c__19886__auto___26990,out))
})();
var inst_26951 = cljs.core.filterv.call(null,inst_26950,inst_26938);
var inst_26938__$1 = inst_26951;
var state_26966__$1 = (function (){var statearr_26981 = state_26966;
(statearr_26981[(10)] = inst_26938__$1);

return statearr_26981;
})();
var statearr_26982_27000 = state_26966__$1;
(statearr_26982_27000[(2)] = null);

(statearr_26982_27000[(1)] = (2));


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
});})(c__19886__auto___26990,out))
;
return ((function (switch__19830__auto__,c__19886__auto___26990,out){
return (function() {
var cljs$core$async$merge_$_state_machine__19831__auto__ = null;
var cljs$core$async$merge_$_state_machine__19831__auto____0 = (function (){
var statearr_26986 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26986[(0)] = cljs$core$async$merge_$_state_machine__19831__auto__);

(statearr_26986[(1)] = (1));

return statearr_26986;
});
var cljs$core$async$merge_$_state_machine__19831__auto____1 = (function (state_26966){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_26966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e26987){if((e26987 instanceof Object)){
var ex__19834__auto__ = e26987;
var statearr_26988_27001 = state_26966;
(statearr_26988_27001[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27002 = state_26966;
state_26966 = G__27002;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__19831__auto__ = function(state_26966){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__19831__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__19831__auto____1.call(this,state_26966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__19831__auto____0;
cljs$core$async$merge_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__19831__auto____1;
return cljs$core$async$merge_$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto___26990,out))
})();
var state__19888__auto__ = (function (){var statearr_26989 = f__19887__auto__.call(null);
(statearr_26989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___26990);

return statearr_26989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto___26990,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.call(null,n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19886__auto___27095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto___27095,out){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto___27095,out){
return (function (state_27072){
var state_val_27073 = (state_27072[(1)]);
if((state_val_27073 === (7))){
var inst_27054 = (state_27072[(7)]);
var inst_27054__$1 = (state_27072[(2)]);
var inst_27055 = (inst_27054__$1 == null);
var inst_27056 = cljs.core.not.call(null,inst_27055);
var state_27072__$1 = (function (){var statearr_27074 = state_27072;
(statearr_27074[(7)] = inst_27054__$1);

return statearr_27074;
})();
if(inst_27056){
var statearr_27075_27096 = state_27072__$1;
(statearr_27075_27096[(1)] = (8));

} else {
var statearr_27076_27097 = state_27072__$1;
(statearr_27076_27097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (1))){
var inst_27049 = (0);
var state_27072__$1 = (function (){var statearr_27077 = state_27072;
(statearr_27077[(8)] = inst_27049);

return statearr_27077;
})();
var statearr_27078_27098 = state_27072__$1;
(statearr_27078_27098[(2)] = null);

(statearr_27078_27098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (4))){
var state_27072__$1 = state_27072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27072__$1,(7),ch);
} else {
if((state_val_27073 === (6))){
var inst_27067 = (state_27072[(2)]);
var state_27072__$1 = state_27072;
var statearr_27079_27099 = state_27072__$1;
(statearr_27079_27099[(2)] = inst_27067);

(statearr_27079_27099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (3))){
var inst_27069 = (state_27072[(2)]);
var inst_27070 = cljs.core.async.close_BANG_.call(null,out);
var state_27072__$1 = (function (){var statearr_27080 = state_27072;
(statearr_27080[(9)] = inst_27069);

return statearr_27080;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27072__$1,inst_27070);
} else {
if((state_val_27073 === (2))){
var inst_27049 = (state_27072[(8)]);
var inst_27051 = (inst_27049 < n);
var state_27072__$1 = state_27072;
if(cljs.core.truth_(inst_27051)){
var statearr_27081_27100 = state_27072__$1;
(statearr_27081_27100[(1)] = (4));

} else {
var statearr_27082_27101 = state_27072__$1;
(statearr_27082_27101[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (11))){
var inst_27049 = (state_27072[(8)]);
var inst_27059 = (state_27072[(2)]);
var inst_27060 = (inst_27049 + (1));
var inst_27049__$1 = inst_27060;
var state_27072__$1 = (function (){var statearr_27083 = state_27072;
(statearr_27083[(10)] = inst_27059);

(statearr_27083[(8)] = inst_27049__$1);

return statearr_27083;
})();
var statearr_27084_27102 = state_27072__$1;
(statearr_27084_27102[(2)] = null);

(statearr_27084_27102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (9))){
var state_27072__$1 = state_27072;
var statearr_27085_27103 = state_27072__$1;
(statearr_27085_27103[(2)] = null);

(statearr_27085_27103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (5))){
var state_27072__$1 = state_27072;
var statearr_27086_27104 = state_27072__$1;
(statearr_27086_27104[(2)] = null);

(statearr_27086_27104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (10))){
var inst_27064 = (state_27072[(2)]);
var state_27072__$1 = state_27072;
var statearr_27087_27105 = state_27072__$1;
(statearr_27087_27105[(2)] = inst_27064);

(statearr_27087_27105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (8))){
var inst_27054 = (state_27072[(7)]);
var state_27072__$1 = state_27072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27072__$1,(11),out,inst_27054);
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
});})(c__19886__auto___27095,out))
;
return ((function (switch__19830__auto__,c__19886__auto___27095,out){
return (function() {
var cljs$core$async$take_$_state_machine__19831__auto__ = null;
var cljs$core$async$take_$_state_machine__19831__auto____0 = (function (){
var statearr_27091 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27091[(0)] = cljs$core$async$take_$_state_machine__19831__auto__);

(statearr_27091[(1)] = (1));

return statearr_27091;
});
var cljs$core$async$take_$_state_machine__19831__auto____1 = (function (state_27072){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_27072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e27092){if((e27092 instanceof Object)){
var ex__19834__auto__ = e27092;
var statearr_27093_27106 = state_27072;
(statearr_27093_27106[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27107 = state_27072;
state_27072 = G__27107;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__19831__auto__ = function(state_27072){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__19831__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__19831__auto____1.call(this,state_27072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__19831__auto____0;
cljs$core$async$take_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__19831__auto____1;
return cljs$core$async$take_$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto___27095,out))
})();
var state__19888__auto__ = (function (){var statearr_27094 = f__19887__auto__.call(null);
(statearr_27094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___27095);

return statearr_27094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto___27095,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27115 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27115 = (function (ch,f,map_LT_,meta27116){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27116 = meta27116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27115.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27115.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27115.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27115.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27118 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27118 = (function (fn1,_,meta27116,map_LT_,f,ch,meta27119){
this.fn1 = fn1;
this._ = _;
this.meta27116 = meta27116;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27119 = meta27119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27118.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27108_SHARP_){
return f1.call(null,(((p1__27108_SHARP_ == null))?null:self__.f.call(null,p1__27108_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27120){
var self__ = this;
var _27120__$1 = this;
return self__.meta27119;
});})(___$1))
;

cljs.core.async.t27118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27120,meta27119__$1){
var self__ = this;
var _27120__$1 = this;
return (new cljs.core.async.t27118(self__.fn1,self__._,self__.meta27116,self__.map_LT_,self__.f,self__.ch,meta27119__$1));
});})(___$1))
;

cljs.core.async.t27118.cljs$lang$type = true;

cljs.core.async.t27118.cljs$lang$ctorStr = "cljs.core.async/t27118";

cljs.core.async.t27118.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18283__auto__,writer__18284__auto__,opt__18285__auto__){
return cljs.core._write.call(null,writer__18284__auto__,"cljs.core.async/t27118");
});})(___$1))
;

cljs.core.async.__GT_t27118 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27118(fn1__$1,___$2,meta27116__$1,map_LT___$1,f__$1,ch__$1,meta27119){
return (new cljs.core.async.t27118(fn1__$1,___$2,meta27116__$1,map_LT___$1,f__$1,ch__$1,meta27119));
});})(___$1))
;

}

return (new cljs.core.async.t27118(fn1,___$1,self__.meta27116,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17692__auto__ = ret;
if(cljs.core.truth_(and__17692__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17692__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27115.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27115.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27115.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27117){
var self__ = this;
var _27117__$1 = this;
return self__.meta27116;
});

cljs.core.async.t27115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27117,meta27116__$1){
var self__ = this;
var _27117__$1 = this;
return (new cljs.core.async.t27115(self__.ch,self__.f,self__.map_LT_,meta27116__$1));
});

cljs.core.async.t27115.cljs$lang$type = true;

cljs.core.async.t27115.cljs$lang$ctorStr = "cljs.core.async/t27115";

cljs.core.async.t27115.cljs$lang$ctorPrWriter = (function (this__18283__auto__,writer__18284__auto__,opt__18285__auto__){
return cljs.core._write.call(null,writer__18284__auto__,"cljs.core.async/t27115");
});

cljs.core.async.__GT_t27115 = (function cljs$core$async$map_LT__$___GT_t27115(ch__$1,f__$1,map_LT___$1,meta27116){
return (new cljs.core.async.t27115(ch__$1,f__$1,map_LT___$1,meta27116));
});

}

return (new cljs.core.async.t27115(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27124 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27124 = (function (ch,f,map_GT_,meta27125){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27125 = meta27125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27124.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27124.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27124.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27126){
var self__ = this;
var _27126__$1 = this;
return self__.meta27125;
});

cljs.core.async.t27124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27126,meta27125__$1){
var self__ = this;
var _27126__$1 = this;
return (new cljs.core.async.t27124(self__.ch,self__.f,self__.map_GT_,meta27125__$1));
});

cljs.core.async.t27124.cljs$lang$type = true;

cljs.core.async.t27124.cljs$lang$ctorStr = "cljs.core.async/t27124";

cljs.core.async.t27124.cljs$lang$ctorPrWriter = (function (this__18283__auto__,writer__18284__auto__,opt__18285__auto__){
return cljs.core._write.call(null,writer__18284__auto__,"cljs.core.async/t27124");
});

cljs.core.async.__GT_t27124 = (function cljs$core$async$map_GT__$___GT_t27124(ch__$1,f__$1,map_GT___$1,meta27125){
return (new cljs.core.async.t27124(ch__$1,f__$1,map_GT___$1,meta27125));
});

}

return (new cljs.core.async.t27124(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27130 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27130 = (function (ch,p,filter_GT_,meta27131){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27131 = meta27131;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27130.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27130.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27130.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27130.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27130.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27130.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27130.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27132){
var self__ = this;
var _27132__$1 = this;
return self__.meta27131;
});

cljs.core.async.t27130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27132,meta27131__$1){
var self__ = this;
var _27132__$1 = this;
return (new cljs.core.async.t27130(self__.ch,self__.p,self__.filter_GT_,meta27131__$1));
});

cljs.core.async.t27130.cljs$lang$type = true;

cljs.core.async.t27130.cljs$lang$ctorStr = "cljs.core.async/t27130";

cljs.core.async.t27130.cljs$lang$ctorPrWriter = (function (this__18283__auto__,writer__18284__auto__,opt__18285__auto__){
return cljs.core._write.call(null,writer__18284__auto__,"cljs.core.async/t27130");
});

cljs.core.async.__GT_t27130 = (function cljs$core$async$filter_GT__$___GT_t27130(ch__$1,p__$1,filter_GT___$1,meta27131){
return (new cljs.core.async.t27130(ch__$1,p__$1,filter_GT___$1,meta27131));
});

}

return (new cljs.core.async.t27130(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.call(null,p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19886__auto___27215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto___27215,out){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto___27215,out){
return (function (state_27194){
var state_val_27195 = (state_27194[(1)]);
if((state_val_27195 === (7))){
var inst_27190 = (state_27194[(2)]);
var state_27194__$1 = state_27194;
var statearr_27196_27216 = state_27194__$1;
(statearr_27196_27216[(2)] = inst_27190);

(statearr_27196_27216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27195 === (1))){
var state_27194__$1 = state_27194;
var statearr_27197_27217 = state_27194__$1;
(statearr_27197_27217[(2)] = null);

(statearr_27197_27217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27195 === (4))){
var inst_27176 = (state_27194[(7)]);
var inst_27176__$1 = (state_27194[(2)]);
var inst_27177 = (inst_27176__$1 == null);
var state_27194__$1 = (function (){var statearr_27198 = state_27194;
(statearr_27198[(7)] = inst_27176__$1);

return statearr_27198;
})();
if(cljs.core.truth_(inst_27177)){
var statearr_27199_27218 = state_27194__$1;
(statearr_27199_27218[(1)] = (5));

} else {
var statearr_27200_27219 = state_27194__$1;
(statearr_27200_27219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27195 === (6))){
var inst_27176 = (state_27194[(7)]);
var inst_27181 = p.call(null,inst_27176);
var state_27194__$1 = state_27194;
if(cljs.core.truth_(inst_27181)){
var statearr_27201_27220 = state_27194__$1;
(statearr_27201_27220[(1)] = (8));

} else {
var statearr_27202_27221 = state_27194__$1;
(statearr_27202_27221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27195 === (3))){
var inst_27192 = (state_27194[(2)]);
var state_27194__$1 = state_27194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27194__$1,inst_27192);
} else {
if((state_val_27195 === (2))){
var state_27194__$1 = state_27194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27194__$1,(4),ch);
} else {
if((state_val_27195 === (11))){
var inst_27184 = (state_27194[(2)]);
var state_27194__$1 = state_27194;
var statearr_27203_27222 = state_27194__$1;
(statearr_27203_27222[(2)] = inst_27184);

(statearr_27203_27222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27195 === (9))){
var state_27194__$1 = state_27194;
var statearr_27204_27223 = state_27194__$1;
(statearr_27204_27223[(2)] = null);

(statearr_27204_27223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27195 === (5))){
var inst_27179 = cljs.core.async.close_BANG_.call(null,out);
var state_27194__$1 = state_27194;
var statearr_27205_27224 = state_27194__$1;
(statearr_27205_27224[(2)] = inst_27179);

(statearr_27205_27224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27195 === (10))){
var inst_27187 = (state_27194[(2)]);
var state_27194__$1 = (function (){var statearr_27206 = state_27194;
(statearr_27206[(8)] = inst_27187);

return statearr_27206;
})();
var statearr_27207_27225 = state_27194__$1;
(statearr_27207_27225[(2)] = null);

(statearr_27207_27225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27195 === (8))){
var inst_27176 = (state_27194[(7)]);
var state_27194__$1 = state_27194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27194__$1,(11),out,inst_27176);
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
});})(c__19886__auto___27215,out))
;
return ((function (switch__19830__auto__,c__19886__auto___27215,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__19831__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__19831__auto____0 = (function (){
var statearr_27211 = [null,null,null,null,null,null,null,null,null];
(statearr_27211[(0)] = cljs$core$async$filter_LT__$_state_machine__19831__auto__);

(statearr_27211[(1)] = (1));

return statearr_27211;
});
var cljs$core$async$filter_LT__$_state_machine__19831__auto____1 = (function (state_27194){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_27194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e27212){if((e27212 instanceof Object)){
var ex__19834__auto__ = e27212;
var statearr_27213_27226 = state_27194;
(statearr_27213_27226[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27227 = state_27194;
state_27194 = G__27227;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__19831__auto__ = function(state_27194){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__19831__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__19831__auto____1.call(this,state_27194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__19831__auto____0;
cljs$core$async$filter_LT__$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__19831__auto____1;
return cljs$core$async$filter_LT__$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto___27215,out))
})();
var state__19888__auto__ = (function (){var statearr_27214 = f__19887__auto__.call(null);
(statearr_27214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___27215);

return statearr_27214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto___27215,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.call(null,p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto__){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto__){
return (function (state_27393){
var state_val_27394 = (state_27393[(1)]);
if((state_val_27394 === (7))){
var inst_27389 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27395_27436 = state_27393__$1;
(statearr_27395_27436[(2)] = inst_27389);

(statearr_27395_27436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (20))){
var inst_27359 = (state_27393[(7)]);
var inst_27370 = (state_27393[(2)]);
var inst_27371 = cljs.core.next.call(null,inst_27359);
var inst_27345 = inst_27371;
var inst_27346 = null;
var inst_27347 = (0);
var inst_27348 = (0);
var state_27393__$1 = (function (){var statearr_27396 = state_27393;
(statearr_27396[(8)] = inst_27346);

(statearr_27396[(9)] = inst_27345);

(statearr_27396[(10)] = inst_27348);

(statearr_27396[(11)] = inst_27370);

(statearr_27396[(12)] = inst_27347);

return statearr_27396;
})();
var statearr_27397_27437 = state_27393__$1;
(statearr_27397_27437[(2)] = null);

(statearr_27397_27437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (1))){
var state_27393__$1 = state_27393;
var statearr_27398_27438 = state_27393__$1;
(statearr_27398_27438[(2)] = null);

(statearr_27398_27438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (4))){
var inst_27334 = (state_27393[(13)]);
var inst_27334__$1 = (state_27393[(2)]);
var inst_27335 = (inst_27334__$1 == null);
var state_27393__$1 = (function (){var statearr_27399 = state_27393;
(statearr_27399[(13)] = inst_27334__$1);

return statearr_27399;
})();
if(cljs.core.truth_(inst_27335)){
var statearr_27400_27439 = state_27393__$1;
(statearr_27400_27439[(1)] = (5));

} else {
var statearr_27401_27440 = state_27393__$1;
(statearr_27401_27440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (15))){
var state_27393__$1 = state_27393;
var statearr_27405_27441 = state_27393__$1;
(statearr_27405_27441[(2)] = null);

(statearr_27405_27441[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (21))){
var state_27393__$1 = state_27393;
var statearr_27406_27442 = state_27393__$1;
(statearr_27406_27442[(2)] = null);

(statearr_27406_27442[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (13))){
var inst_27346 = (state_27393[(8)]);
var inst_27345 = (state_27393[(9)]);
var inst_27348 = (state_27393[(10)]);
var inst_27347 = (state_27393[(12)]);
var inst_27355 = (state_27393[(2)]);
var inst_27356 = (inst_27348 + (1));
var tmp27402 = inst_27346;
var tmp27403 = inst_27345;
var tmp27404 = inst_27347;
var inst_27345__$1 = tmp27403;
var inst_27346__$1 = tmp27402;
var inst_27347__$1 = tmp27404;
var inst_27348__$1 = inst_27356;
var state_27393__$1 = (function (){var statearr_27407 = state_27393;
(statearr_27407[(8)] = inst_27346__$1);

(statearr_27407[(9)] = inst_27345__$1);

(statearr_27407[(14)] = inst_27355);

(statearr_27407[(10)] = inst_27348__$1);

(statearr_27407[(12)] = inst_27347__$1);

return statearr_27407;
})();
var statearr_27408_27443 = state_27393__$1;
(statearr_27408_27443[(2)] = null);

(statearr_27408_27443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (22))){
var state_27393__$1 = state_27393;
var statearr_27409_27444 = state_27393__$1;
(statearr_27409_27444[(2)] = null);

(statearr_27409_27444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (6))){
var inst_27334 = (state_27393[(13)]);
var inst_27343 = f.call(null,inst_27334);
var inst_27344 = cljs.core.seq.call(null,inst_27343);
var inst_27345 = inst_27344;
var inst_27346 = null;
var inst_27347 = (0);
var inst_27348 = (0);
var state_27393__$1 = (function (){var statearr_27410 = state_27393;
(statearr_27410[(8)] = inst_27346);

(statearr_27410[(9)] = inst_27345);

(statearr_27410[(10)] = inst_27348);

(statearr_27410[(12)] = inst_27347);

return statearr_27410;
})();
var statearr_27411_27445 = state_27393__$1;
(statearr_27411_27445[(2)] = null);

(statearr_27411_27445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (17))){
var inst_27359 = (state_27393[(7)]);
var inst_27363 = cljs.core.chunk_first.call(null,inst_27359);
var inst_27364 = cljs.core.chunk_rest.call(null,inst_27359);
var inst_27365 = cljs.core.count.call(null,inst_27363);
var inst_27345 = inst_27364;
var inst_27346 = inst_27363;
var inst_27347 = inst_27365;
var inst_27348 = (0);
var state_27393__$1 = (function (){var statearr_27412 = state_27393;
(statearr_27412[(8)] = inst_27346);

(statearr_27412[(9)] = inst_27345);

(statearr_27412[(10)] = inst_27348);

(statearr_27412[(12)] = inst_27347);

return statearr_27412;
})();
var statearr_27413_27446 = state_27393__$1;
(statearr_27413_27446[(2)] = null);

(statearr_27413_27446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (3))){
var inst_27391 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27393__$1,inst_27391);
} else {
if((state_val_27394 === (12))){
var inst_27379 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27414_27447 = state_27393__$1;
(statearr_27414_27447[(2)] = inst_27379);

(statearr_27414_27447[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (2))){
var state_27393__$1 = state_27393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27393__$1,(4),in$);
} else {
if((state_val_27394 === (23))){
var inst_27387 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27415_27448 = state_27393__$1;
(statearr_27415_27448[(2)] = inst_27387);

(statearr_27415_27448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (19))){
var inst_27374 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27416_27449 = state_27393__$1;
(statearr_27416_27449[(2)] = inst_27374);

(statearr_27416_27449[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (11))){
var inst_27345 = (state_27393[(9)]);
var inst_27359 = (state_27393[(7)]);
var inst_27359__$1 = cljs.core.seq.call(null,inst_27345);
var state_27393__$1 = (function (){var statearr_27417 = state_27393;
(statearr_27417[(7)] = inst_27359__$1);

return statearr_27417;
})();
if(inst_27359__$1){
var statearr_27418_27450 = state_27393__$1;
(statearr_27418_27450[(1)] = (14));

} else {
var statearr_27419_27451 = state_27393__$1;
(statearr_27419_27451[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (9))){
var inst_27381 = (state_27393[(2)]);
var inst_27382 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27393__$1 = (function (){var statearr_27420 = state_27393;
(statearr_27420[(15)] = inst_27381);

return statearr_27420;
})();
if(cljs.core.truth_(inst_27382)){
var statearr_27421_27452 = state_27393__$1;
(statearr_27421_27452[(1)] = (21));

} else {
var statearr_27422_27453 = state_27393__$1;
(statearr_27422_27453[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (5))){
var inst_27337 = cljs.core.async.close_BANG_.call(null,out);
var state_27393__$1 = state_27393;
var statearr_27423_27454 = state_27393__$1;
(statearr_27423_27454[(2)] = inst_27337);

(statearr_27423_27454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (14))){
var inst_27359 = (state_27393[(7)]);
var inst_27361 = cljs.core.chunked_seq_QMARK_.call(null,inst_27359);
var state_27393__$1 = state_27393;
if(inst_27361){
var statearr_27424_27455 = state_27393__$1;
(statearr_27424_27455[(1)] = (17));

} else {
var statearr_27425_27456 = state_27393__$1;
(statearr_27425_27456[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (16))){
var inst_27377 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27426_27457 = state_27393__$1;
(statearr_27426_27457[(2)] = inst_27377);

(statearr_27426_27457[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (10))){
var inst_27346 = (state_27393[(8)]);
var inst_27348 = (state_27393[(10)]);
var inst_27353 = cljs.core._nth.call(null,inst_27346,inst_27348);
var state_27393__$1 = state_27393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27393__$1,(13),out,inst_27353);
} else {
if((state_val_27394 === (18))){
var inst_27359 = (state_27393[(7)]);
var inst_27368 = cljs.core.first.call(null,inst_27359);
var state_27393__$1 = state_27393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27393__$1,(20),out,inst_27368);
} else {
if((state_val_27394 === (8))){
var inst_27348 = (state_27393[(10)]);
var inst_27347 = (state_27393[(12)]);
var inst_27350 = (inst_27348 < inst_27347);
var inst_27351 = inst_27350;
var state_27393__$1 = state_27393;
if(cljs.core.truth_(inst_27351)){
var statearr_27427_27458 = state_27393__$1;
(statearr_27427_27458[(1)] = (10));

} else {
var statearr_27428_27459 = state_27393__$1;
(statearr_27428_27459[(1)] = (11));

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
});})(c__19886__auto__))
;
return ((function (switch__19830__auto__,c__19886__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19831__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19831__auto____0 = (function (){
var statearr_27432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27432[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19831__auto__);

(statearr_27432[(1)] = (1));

return statearr_27432;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19831__auto____1 = (function (state_27393){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_27393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e27433){if((e27433 instanceof Object)){
var ex__19834__auto__ = e27433;
var statearr_27434_27460 = state_27393;
(statearr_27434_27460[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27461 = state_27393;
state_27393 = G__27461;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19831__auto__ = function(state_27393){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19831__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19831__auto____1.call(this,state_27393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19831__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19831__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto__))
})();
var state__19888__auto__ = (function (){var statearr_27435 = f__19887__auto__.call(null);
(statearr_27435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto__);

return statearr_27435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto__))
);

return c__19886__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.call(null,f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.call(null,f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.call(null,ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19886__auto___27558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto___27558,out){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto___27558,out){
return (function (state_27533){
var state_val_27534 = (state_27533[(1)]);
if((state_val_27534 === (7))){
var inst_27528 = (state_27533[(2)]);
var state_27533__$1 = state_27533;
var statearr_27535_27559 = state_27533__$1;
(statearr_27535_27559[(2)] = inst_27528);

(statearr_27535_27559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (1))){
var inst_27510 = null;
var state_27533__$1 = (function (){var statearr_27536 = state_27533;
(statearr_27536[(7)] = inst_27510);

return statearr_27536;
})();
var statearr_27537_27560 = state_27533__$1;
(statearr_27537_27560[(2)] = null);

(statearr_27537_27560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (4))){
var inst_27513 = (state_27533[(8)]);
var inst_27513__$1 = (state_27533[(2)]);
var inst_27514 = (inst_27513__$1 == null);
var inst_27515 = cljs.core.not.call(null,inst_27514);
var state_27533__$1 = (function (){var statearr_27538 = state_27533;
(statearr_27538[(8)] = inst_27513__$1);

return statearr_27538;
})();
if(inst_27515){
var statearr_27539_27561 = state_27533__$1;
(statearr_27539_27561[(1)] = (5));

} else {
var statearr_27540_27562 = state_27533__$1;
(statearr_27540_27562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (6))){
var state_27533__$1 = state_27533;
var statearr_27541_27563 = state_27533__$1;
(statearr_27541_27563[(2)] = null);

(statearr_27541_27563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (3))){
var inst_27530 = (state_27533[(2)]);
var inst_27531 = cljs.core.async.close_BANG_.call(null,out);
var state_27533__$1 = (function (){var statearr_27542 = state_27533;
(statearr_27542[(9)] = inst_27530);

return statearr_27542;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27533__$1,inst_27531);
} else {
if((state_val_27534 === (2))){
var state_27533__$1 = state_27533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27533__$1,(4),ch);
} else {
if((state_val_27534 === (11))){
var inst_27513 = (state_27533[(8)]);
var inst_27522 = (state_27533[(2)]);
var inst_27510 = inst_27513;
var state_27533__$1 = (function (){var statearr_27543 = state_27533;
(statearr_27543[(10)] = inst_27522);

(statearr_27543[(7)] = inst_27510);

return statearr_27543;
})();
var statearr_27544_27564 = state_27533__$1;
(statearr_27544_27564[(2)] = null);

(statearr_27544_27564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (9))){
var inst_27513 = (state_27533[(8)]);
var state_27533__$1 = state_27533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27533__$1,(11),out,inst_27513);
} else {
if((state_val_27534 === (5))){
var inst_27510 = (state_27533[(7)]);
var inst_27513 = (state_27533[(8)]);
var inst_27517 = cljs.core._EQ_.call(null,inst_27513,inst_27510);
var state_27533__$1 = state_27533;
if(inst_27517){
var statearr_27546_27565 = state_27533__$1;
(statearr_27546_27565[(1)] = (8));

} else {
var statearr_27547_27566 = state_27533__$1;
(statearr_27547_27566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (10))){
var inst_27525 = (state_27533[(2)]);
var state_27533__$1 = state_27533;
var statearr_27548_27567 = state_27533__$1;
(statearr_27548_27567[(2)] = inst_27525);

(statearr_27548_27567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (8))){
var inst_27510 = (state_27533[(7)]);
var tmp27545 = inst_27510;
var inst_27510__$1 = tmp27545;
var state_27533__$1 = (function (){var statearr_27549 = state_27533;
(statearr_27549[(7)] = inst_27510__$1);

return statearr_27549;
})();
var statearr_27550_27568 = state_27533__$1;
(statearr_27550_27568[(2)] = null);

(statearr_27550_27568[(1)] = (2));


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
});})(c__19886__auto___27558,out))
;
return ((function (switch__19830__auto__,c__19886__auto___27558,out){
return (function() {
var cljs$core$async$unique_$_state_machine__19831__auto__ = null;
var cljs$core$async$unique_$_state_machine__19831__auto____0 = (function (){
var statearr_27554 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27554[(0)] = cljs$core$async$unique_$_state_machine__19831__auto__);

(statearr_27554[(1)] = (1));

return statearr_27554;
});
var cljs$core$async$unique_$_state_machine__19831__auto____1 = (function (state_27533){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_27533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e27555){if((e27555 instanceof Object)){
var ex__19834__auto__ = e27555;
var statearr_27556_27569 = state_27533;
(statearr_27556_27569[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27570 = state_27533;
state_27533 = G__27570;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__19831__auto__ = function(state_27533){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__19831__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__19831__auto____1.call(this,state_27533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__19831__auto____0;
cljs$core$async$unique_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__19831__auto____1;
return cljs$core$async$unique_$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto___27558,out))
})();
var state__19888__auto__ = (function (){var statearr_27557 = f__19887__auto__.call(null);
(statearr_27557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___27558);

return statearr_27557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto___27558,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.call(null,n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19886__auto___27705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto___27705,out){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto___27705,out){
return (function (state_27675){
var state_val_27676 = (state_27675[(1)]);
if((state_val_27676 === (7))){
var inst_27671 = (state_27675[(2)]);
var state_27675__$1 = state_27675;
var statearr_27677_27706 = state_27675__$1;
(statearr_27677_27706[(2)] = inst_27671);

(statearr_27677_27706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (1))){
var inst_27638 = (new Array(n));
var inst_27639 = inst_27638;
var inst_27640 = (0);
var state_27675__$1 = (function (){var statearr_27678 = state_27675;
(statearr_27678[(7)] = inst_27639);

(statearr_27678[(8)] = inst_27640);

return statearr_27678;
})();
var statearr_27679_27707 = state_27675__$1;
(statearr_27679_27707[(2)] = null);

(statearr_27679_27707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (4))){
var inst_27643 = (state_27675[(9)]);
var inst_27643__$1 = (state_27675[(2)]);
var inst_27644 = (inst_27643__$1 == null);
var inst_27645 = cljs.core.not.call(null,inst_27644);
var state_27675__$1 = (function (){var statearr_27680 = state_27675;
(statearr_27680[(9)] = inst_27643__$1);

return statearr_27680;
})();
if(inst_27645){
var statearr_27681_27708 = state_27675__$1;
(statearr_27681_27708[(1)] = (5));

} else {
var statearr_27682_27709 = state_27675__$1;
(statearr_27682_27709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (15))){
var inst_27665 = (state_27675[(2)]);
var state_27675__$1 = state_27675;
var statearr_27683_27710 = state_27675__$1;
(statearr_27683_27710[(2)] = inst_27665);

(statearr_27683_27710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (13))){
var state_27675__$1 = state_27675;
var statearr_27684_27711 = state_27675__$1;
(statearr_27684_27711[(2)] = null);

(statearr_27684_27711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (6))){
var inst_27640 = (state_27675[(8)]);
var inst_27661 = (inst_27640 > (0));
var state_27675__$1 = state_27675;
if(cljs.core.truth_(inst_27661)){
var statearr_27685_27712 = state_27675__$1;
(statearr_27685_27712[(1)] = (12));

} else {
var statearr_27686_27713 = state_27675__$1;
(statearr_27686_27713[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (3))){
var inst_27673 = (state_27675[(2)]);
var state_27675__$1 = state_27675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27675__$1,inst_27673);
} else {
if((state_val_27676 === (12))){
var inst_27639 = (state_27675[(7)]);
var inst_27663 = cljs.core.vec.call(null,inst_27639);
var state_27675__$1 = state_27675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27675__$1,(15),out,inst_27663);
} else {
if((state_val_27676 === (2))){
var state_27675__$1 = state_27675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27675__$1,(4),ch);
} else {
if((state_val_27676 === (11))){
var inst_27655 = (state_27675[(2)]);
var inst_27656 = (new Array(n));
var inst_27639 = inst_27656;
var inst_27640 = (0);
var state_27675__$1 = (function (){var statearr_27687 = state_27675;
(statearr_27687[(7)] = inst_27639);

(statearr_27687[(8)] = inst_27640);

(statearr_27687[(10)] = inst_27655);

return statearr_27687;
})();
var statearr_27688_27714 = state_27675__$1;
(statearr_27688_27714[(2)] = null);

(statearr_27688_27714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (9))){
var inst_27639 = (state_27675[(7)]);
var inst_27653 = cljs.core.vec.call(null,inst_27639);
var state_27675__$1 = state_27675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27675__$1,(11),out,inst_27653);
} else {
if((state_val_27676 === (5))){
var inst_27648 = (state_27675[(11)]);
var inst_27639 = (state_27675[(7)]);
var inst_27640 = (state_27675[(8)]);
var inst_27643 = (state_27675[(9)]);
var inst_27647 = (inst_27639[inst_27640] = inst_27643);
var inst_27648__$1 = (inst_27640 + (1));
var inst_27649 = (inst_27648__$1 < n);
var state_27675__$1 = (function (){var statearr_27689 = state_27675;
(statearr_27689[(11)] = inst_27648__$1);

(statearr_27689[(12)] = inst_27647);

return statearr_27689;
})();
if(cljs.core.truth_(inst_27649)){
var statearr_27690_27715 = state_27675__$1;
(statearr_27690_27715[(1)] = (8));

} else {
var statearr_27691_27716 = state_27675__$1;
(statearr_27691_27716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (14))){
var inst_27668 = (state_27675[(2)]);
var inst_27669 = cljs.core.async.close_BANG_.call(null,out);
var state_27675__$1 = (function (){var statearr_27693 = state_27675;
(statearr_27693[(13)] = inst_27668);

return statearr_27693;
})();
var statearr_27694_27717 = state_27675__$1;
(statearr_27694_27717[(2)] = inst_27669);

(statearr_27694_27717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (10))){
var inst_27659 = (state_27675[(2)]);
var state_27675__$1 = state_27675;
var statearr_27695_27718 = state_27675__$1;
(statearr_27695_27718[(2)] = inst_27659);

(statearr_27695_27718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (8))){
var inst_27648 = (state_27675[(11)]);
var inst_27639 = (state_27675[(7)]);
var tmp27692 = inst_27639;
var inst_27639__$1 = tmp27692;
var inst_27640 = inst_27648;
var state_27675__$1 = (function (){var statearr_27696 = state_27675;
(statearr_27696[(7)] = inst_27639__$1);

(statearr_27696[(8)] = inst_27640);

return statearr_27696;
})();
var statearr_27697_27719 = state_27675__$1;
(statearr_27697_27719[(2)] = null);

(statearr_27697_27719[(1)] = (2));


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
});})(c__19886__auto___27705,out))
;
return ((function (switch__19830__auto__,c__19886__auto___27705,out){
return (function() {
var cljs$core$async$partition_$_state_machine__19831__auto__ = null;
var cljs$core$async$partition_$_state_machine__19831__auto____0 = (function (){
var statearr_27701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27701[(0)] = cljs$core$async$partition_$_state_machine__19831__auto__);

(statearr_27701[(1)] = (1));

return statearr_27701;
});
var cljs$core$async$partition_$_state_machine__19831__auto____1 = (function (state_27675){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_27675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e27702){if((e27702 instanceof Object)){
var ex__19834__auto__ = e27702;
var statearr_27703_27720 = state_27675;
(statearr_27703_27720[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27721 = state_27675;
state_27675 = G__27721;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__19831__auto__ = function(state_27675){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__19831__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__19831__auto____1.call(this,state_27675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__19831__auto____0;
cljs$core$async$partition_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__19831__auto____1;
return cljs$core$async$partition_$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto___27705,out))
})();
var state__19888__auto__ = (function (){var statearr_27704 = f__19887__auto__.call(null);
(statearr_27704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___27705);

return statearr_27704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto___27705,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.call(null,f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19886__auto___27864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19886__auto___27864,out){
return (function (){
var f__19887__auto__ = (function (){var switch__19830__auto__ = ((function (c__19886__auto___27864,out){
return (function (state_27834){
var state_val_27835 = (state_27834[(1)]);
if((state_val_27835 === (7))){
var inst_27830 = (state_27834[(2)]);
var state_27834__$1 = state_27834;
var statearr_27836_27865 = state_27834__$1;
(statearr_27836_27865[(2)] = inst_27830);

(statearr_27836_27865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (1))){
var inst_27793 = [];
var inst_27794 = inst_27793;
var inst_27795 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27834__$1 = (function (){var statearr_27837 = state_27834;
(statearr_27837[(7)] = inst_27794);

(statearr_27837[(8)] = inst_27795);

return statearr_27837;
})();
var statearr_27838_27866 = state_27834__$1;
(statearr_27838_27866[(2)] = null);

(statearr_27838_27866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (4))){
var inst_27798 = (state_27834[(9)]);
var inst_27798__$1 = (state_27834[(2)]);
var inst_27799 = (inst_27798__$1 == null);
var inst_27800 = cljs.core.not.call(null,inst_27799);
var state_27834__$1 = (function (){var statearr_27839 = state_27834;
(statearr_27839[(9)] = inst_27798__$1);

return statearr_27839;
})();
if(inst_27800){
var statearr_27840_27867 = state_27834__$1;
(statearr_27840_27867[(1)] = (5));

} else {
var statearr_27841_27868 = state_27834__$1;
(statearr_27841_27868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (15))){
var inst_27824 = (state_27834[(2)]);
var state_27834__$1 = state_27834;
var statearr_27842_27869 = state_27834__$1;
(statearr_27842_27869[(2)] = inst_27824);

(statearr_27842_27869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (13))){
var state_27834__$1 = state_27834;
var statearr_27843_27870 = state_27834__$1;
(statearr_27843_27870[(2)] = null);

(statearr_27843_27870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (6))){
var inst_27794 = (state_27834[(7)]);
var inst_27819 = inst_27794.length;
var inst_27820 = (inst_27819 > (0));
var state_27834__$1 = state_27834;
if(cljs.core.truth_(inst_27820)){
var statearr_27844_27871 = state_27834__$1;
(statearr_27844_27871[(1)] = (12));

} else {
var statearr_27845_27872 = state_27834__$1;
(statearr_27845_27872[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (3))){
var inst_27832 = (state_27834[(2)]);
var state_27834__$1 = state_27834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27834__$1,inst_27832);
} else {
if((state_val_27835 === (12))){
var inst_27794 = (state_27834[(7)]);
var inst_27822 = cljs.core.vec.call(null,inst_27794);
var state_27834__$1 = state_27834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27834__$1,(15),out,inst_27822);
} else {
if((state_val_27835 === (2))){
var state_27834__$1 = state_27834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27834__$1,(4),ch);
} else {
if((state_val_27835 === (11))){
var inst_27802 = (state_27834[(10)]);
var inst_27798 = (state_27834[(9)]);
var inst_27812 = (state_27834[(2)]);
var inst_27813 = [];
var inst_27814 = inst_27813.push(inst_27798);
var inst_27794 = inst_27813;
var inst_27795 = inst_27802;
var state_27834__$1 = (function (){var statearr_27846 = state_27834;
(statearr_27846[(7)] = inst_27794);

(statearr_27846[(8)] = inst_27795);

(statearr_27846[(11)] = inst_27812);

(statearr_27846[(12)] = inst_27814);

return statearr_27846;
})();
var statearr_27847_27873 = state_27834__$1;
(statearr_27847_27873[(2)] = null);

(statearr_27847_27873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (9))){
var inst_27794 = (state_27834[(7)]);
var inst_27810 = cljs.core.vec.call(null,inst_27794);
var state_27834__$1 = state_27834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27834__$1,(11),out,inst_27810);
} else {
if((state_val_27835 === (5))){
var inst_27802 = (state_27834[(10)]);
var inst_27795 = (state_27834[(8)]);
var inst_27798 = (state_27834[(9)]);
var inst_27802__$1 = f.call(null,inst_27798);
var inst_27803 = cljs.core._EQ_.call(null,inst_27802__$1,inst_27795);
var inst_27804 = cljs.core.keyword_identical_QMARK_.call(null,inst_27795,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27805 = (inst_27803) || (inst_27804);
var state_27834__$1 = (function (){var statearr_27848 = state_27834;
(statearr_27848[(10)] = inst_27802__$1);

return statearr_27848;
})();
if(cljs.core.truth_(inst_27805)){
var statearr_27849_27874 = state_27834__$1;
(statearr_27849_27874[(1)] = (8));

} else {
var statearr_27850_27875 = state_27834__$1;
(statearr_27850_27875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (14))){
var inst_27827 = (state_27834[(2)]);
var inst_27828 = cljs.core.async.close_BANG_.call(null,out);
var state_27834__$1 = (function (){var statearr_27852 = state_27834;
(statearr_27852[(13)] = inst_27827);

return statearr_27852;
})();
var statearr_27853_27876 = state_27834__$1;
(statearr_27853_27876[(2)] = inst_27828);

(statearr_27853_27876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (10))){
var inst_27817 = (state_27834[(2)]);
var state_27834__$1 = state_27834;
var statearr_27854_27877 = state_27834__$1;
(statearr_27854_27877[(2)] = inst_27817);

(statearr_27854_27877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (8))){
var inst_27802 = (state_27834[(10)]);
var inst_27794 = (state_27834[(7)]);
var inst_27798 = (state_27834[(9)]);
var inst_27807 = inst_27794.push(inst_27798);
var tmp27851 = inst_27794;
var inst_27794__$1 = tmp27851;
var inst_27795 = inst_27802;
var state_27834__$1 = (function (){var statearr_27855 = state_27834;
(statearr_27855[(14)] = inst_27807);

(statearr_27855[(7)] = inst_27794__$1);

(statearr_27855[(8)] = inst_27795);

return statearr_27855;
})();
var statearr_27856_27878 = state_27834__$1;
(statearr_27856_27878[(2)] = null);

(statearr_27856_27878[(1)] = (2));


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
});})(c__19886__auto___27864,out))
;
return ((function (switch__19830__auto__,c__19886__auto___27864,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__19831__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__19831__auto____0 = (function (){
var statearr_27860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27860[(0)] = cljs$core$async$partition_by_$_state_machine__19831__auto__);

(statearr_27860[(1)] = (1));

return statearr_27860;
});
var cljs$core$async$partition_by_$_state_machine__19831__auto____1 = (function (state_27834){
while(true){
var ret_value__19832__auto__ = (function (){try{while(true){
var result__19833__auto__ = switch__19830__auto__.call(null,state_27834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19833__auto__;
}
break;
}
}catch (e27861){if((e27861 instanceof Object)){
var ex__19834__auto__ = e27861;
var statearr_27862_27879 = state_27834;
(statearr_27862_27879[(5)] = ex__19834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27880 = state_27834;
state_27834 = G__27880;
continue;
} else {
return ret_value__19832__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__19831__auto__ = function(state_27834){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__19831__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__19831__auto____1.call(this,state_27834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__19831__auto____0;
cljs$core$async$partition_by_$_state_machine__19831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__19831__auto____1;
return cljs$core$async$partition_by_$_state_machine__19831__auto__;
})()
;})(switch__19830__auto__,c__19886__auto___27864,out))
})();
var state__19888__auto__ = (function (){var statearr_27863 = f__19887__auto__.call(null);
(statearr_27863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19886__auto___27864);

return statearr_27863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19888__auto__);
});})(c__19886__auto___27864,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;

//# sourceMappingURL=async.js.map