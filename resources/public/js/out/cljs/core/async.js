// Compiled by ClojureScript 0.0-3053 {:elide-asserts false}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t24671 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24671 = (function (f,fn_handler,meta24672){
this.f = f;
this.fn_handler = fn_handler;
this.meta24672 = meta24672;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24671.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24671.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24671.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24673){
var self__ = this;
var _24673__$1 = this;
return self__.meta24672;
});

cljs.core.async.t24671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24673,meta24672__$1){
var self__ = this;
var _24673__$1 = this;
return (new cljs.core.async.t24671(self__.f,self__.fn_handler,meta24672__$1));
});

cljs.core.async.t24671.cljs$lang$type = true;

cljs.core.async.t24671.cljs$lang$ctorStr = "cljs.core.async/t24671";

cljs.core.async.t24671.cljs$lang$ctorPrWriter = (function (this__18181__auto__,writer__18182__auto__,opt__18183__auto__){
return cljs.core._write.call(null,writer__18182__auto__,"cljs.core.async/t24671");
});

cljs.core.async.__GT_t24671 = (function cljs$core$async$fn_handler_$___GT_t24671(f__$1,fn_handler__$1,meta24672){
return (new cljs.core.async.t24671(f__$1,fn_handler__$1,meta24672));
});

}

return (new cljs.core.async.t24671(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24675 = buff;
if(G__24675){
var bit__18275__auto__ = null;
if(cljs.core.truth_((function (){var or__17594__auto__ = bit__18275__auto__;
if(cljs.core.truth_(or__17594__auto__)){
return or__17594__auto__;
} else {
return G__24675.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24675.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24675);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24675);
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
var val_24676 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24676);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24676,ret){
return (function (){
return fn1.call(null,val_24676);
});})(val_24676,ret))
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
var n__18481__auto___24677 = n;
var x_24678 = (0);
while(true){
if((x_24678 < n__18481__auto___24677)){
(a[x_24678] = (0));

var G__24679 = (x_24678 + (1));
x_24678 = G__24679;
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

var G__24680 = (i + (1));
i = G__24680;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t24684 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24684 = (function (flag,alt_flag,meta24685){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24685 = meta24685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24684.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24684.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t24684.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t24684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24686){
var self__ = this;
var _24686__$1 = this;
return self__.meta24685;
});})(flag))
;

cljs.core.async.t24684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24686,meta24685__$1){
var self__ = this;
var _24686__$1 = this;
return (new cljs.core.async.t24684(self__.flag,self__.alt_flag,meta24685__$1));
});})(flag))
;

cljs.core.async.t24684.cljs$lang$type = true;

cljs.core.async.t24684.cljs$lang$ctorStr = "cljs.core.async/t24684";

cljs.core.async.t24684.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18181__auto__,writer__18182__auto__,opt__18183__auto__){
return cljs.core._write.call(null,writer__18182__auto__,"cljs.core.async/t24684");
});})(flag))
;

cljs.core.async.__GT_t24684 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t24684(flag__$1,alt_flag__$1,meta24685){
return (new cljs.core.async.t24684(flag__$1,alt_flag__$1,meta24685));
});})(flag))
;

}

return (new cljs.core.async.t24684(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t24690 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24690 = (function (cb,flag,alt_handler,meta24691){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24691 = meta24691;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24690.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24690.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t24690.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t24690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24692){
var self__ = this;
var _24692__$1 = this;
return self__.meta24691;
});

cljs.core.async.t24690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24692,meta24691__$1){
var self__ = this;
var _24692__$1 = this;
return (new cljs.core.async.t24690(self__.cb,self__.flag,self__.alt_handler,meta24691__$1));
});

cljs.core.async.t24690.cljs$lang$type = true;

cljs.core.async.t24690.cljs$lang$ctorStr = "cljs.core.async/t24690";

cljs.core.async.t24690.cljs$lang$ctorPrWriter = (function (this__18181__auto__,writer__18182__auto__,opt__18183__auto__){
return cljs.core._write.call(null,writer__18182__auto__,"cljs.core.async/t24690");
});

cljs.core.async.__GT_t24690 = (function cljs$core$async$alt_handler_$___GT_t24690(cb__$1,flag__$1,alt_handler__$1,meta24691){
return (new cljs.core.async.t24690(cb__$1,flag__$1,alt_handler__$1,meta24691));
});

}

return (new cljs.core.async.t24690(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24693_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24693_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24694_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24694_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17594__auto__ = wport;
if(cljs.core.truth_(or__17594__auto__)){
return or__17594__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24695 = (i + (1));
i = G__24695;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17594__auto__ = ret;
if(cljs.core.truth_(or__17594__auto__)){
return or__17594__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__17582__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17582__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17582__auto__;
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
var cljs$core$async$alts_BANG___delegate = function (ports,p__24696){
var map__24698 = p__24696;
var map__24698__$1 = ((cljs.core.seq_QMARK_.call(null,map__24698))?cljs.core.apply.call(null,cljs.core.hash_map,map__24698):map__24698);
var opts = map__24698__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__24696 = null;
if (arguments.length > 1) {
var G__24699__i = 0, G__24699__a = new Array(arguments.length -  1);
while (G__24699__i < G__24699__a.length) {G__24699__a[G__24699__i] = arguments[G__24699__i + 1]; ++G__24699__i;}
  p__24696 = new cljs.core.IndexedSeq(G__24699__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__24696);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__24700){
var ports = cljs.core.first(arglist__24700);
var p__24696 = cljs.core.rest(arglist__24700);
return cljs$core$async$alts_BANG___delegate(ports,p__24696);
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
var c__19775__auto___24795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto___24795){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto___24795){
return (function (state_24771){
var state_val_24772 = (state_24771[(1)]);
if((state_val_24772 === (7))){
var inst_24767 = (state_24771[(2)]);
var state_24771__$1 = state_24771;
var statearr_24773_24796 = state_24771__$1;
(statearr_24773_24796[(2)] = inst_24767);

(statearr_24773_24796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (1))){
var state_24771__$1 = state_24771;
var statearr_24774_24797 = state_24771__$1;
(statearr_24774_24797[(2)] = null);

(statearr_24774_24797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (4))){
var inst_24750 = (state_24771[(7)]);
var inst_24750__$1 = (state_24771[(2)]);
var inst_24751 = (inst_24750__$1 == null);
var state_24771__$1 = (function (){var statearr_24775 = state_24771;
(statearr_24775[(7)] = inst_24750__$1);

return statearr_24775;
})();
if(cljs.core.truth_(inst_24751)){
var statearr_24776_24798 = state_24771__$1;
(statearr_24776_24798[(1)] = (5));

} else {
var statearr_24777_24799 = state_24771__$1;
(statearr_24777_24799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (13))){
var state_24771__$1 = state_24771;
var statearr_24778_24800 = state_24771__$1;
(statearr_24778_24800[(2)] = null);

(statearr_24778_24800[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (6))){
var inst_24750 = (state_24771[(7)]);
var state_24771__$1 = state_24771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24771__$1,(11),to,inst_24750);
} else {
if((state_val_24772 === (3))){
var inst_24769 = (state_24771[(2)]);
var state_24771__$1 = state_24771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24771__$1,inst_24769);
} else {
if((state_val_24772 === (12))){
var state_24771__$1 = state_24771;
var statearr_24779_24801 = state_24771__$1;
(statearr_24779_24801[(2)] = null);

(statearr_24779_24801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (2))){
var state_24771__$1 = state_24771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24771__$1,(4),from);
} else {
if((state_val_24772 === (11))){
var inst_24760 = (state_24771[(2)]);
var state_24771__$1 = state_24771;
if(cljs.core.truth_(inst_24760)){
var statearr_24780_24802 = state_24771__$1;
(statearr_24780_24802[(1)] = (12));

} else {
var statearr_24781_24803 = state_24771__$1;
(statearr_24781_24803[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (9))){
var state_24771__$1 = state_24771;
var statearr_24782_24804 = state_24771__$1;
(statearr_24782_24804[(2)] = null);

(statearr_24782_24804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (5))){
var state_24771__$1 = state_24771;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24783_24805 = state_24771__$1;
(statearr_24783_24805[(1)] = (8));

} else {
var statearr_24784_24806 = state_24771__$1;
(statearr_24784_24806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (14))){
var inst_24765 = (state_24771[(2)]);
var state_24771__$1 = state_24771;
var statearr_24785_24807 = state_24771__$1;
(statearr_24785_24807[(2)] = inst_24765);

(statearr_24785_24807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (10))){
var inst_24757 = (state_24771[(2)]);
var state_24771__$1 = state_24771;
var statearr_24786_24808 = state_24771__$1;
(statearr_24786_24808[(2)] = inst_24757);

(statearr_24786_24808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24772 === (8))){
var inst_24754 = cljs.core.async.close_BANG_.call(null,to);
var state_24771__$1 = state_24771;
var statearr_24787_24809 = state_24771__$1;
(statearr_24787_24809[(2)] = inst_24754);

(statearr_24787_24809[(1)] = (10));


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
});})(c__19775__auto___24795))
;
return ((function (switch__19719__auto__,c__19775__auto___24795){
return (function() {
var cljs$core$async$pipe_$_state_machine__19720__auto__ = null;
var cljs$core$async$pipe_$_state_machine__19720__auto____0 = (function (){
var statearr_24791 = [null,null,null,null,null,null,null,null];
(statearr_24791[(0)] = cljs$core$async$pipe_$_state_machine__19720__auto__);

(statearr_24791[(1)] = (1));

return statearr_24791;
});
var cljs$core$async$pipe_$_state_machine__19720__auto____1 = (function (state_24771){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_24771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e24792){if((e24792 instanceof Object)){
var ex__19723__auto__ = e24792;
var statearr_24793_24810 = state_24771;
(statearr_24793_24810[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24811 = state_24771;
state_24771 = G__24811;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__19720__auto__ = function(state_24771){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__19720__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__19720__auto____1.call(this,state_24771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__19720__auto____0;
cljs$core$async$pipe_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__19720__auto____1;
return cljs$core$async$pipe_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto___24795))
})();
var state__19777__auto__ = (function (){var statearr_24794 = f__19776__auto__.call(null);
(statearr_24794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___24795);

return statearr_24794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto___24795))
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
return (function (p__24995){
var vec__24996 = p__24995;
var v = cljs.core.nth.call(null,vec__24996,(0),null);
var p = cljs.core.nth.call(null,vec__24996,(1),null);
var job = vec__24996;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19775__auto___25178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto___25178,res,vec__24996,v,p,job,jobs,results){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto___25178,res,vec__24996,v,p,job,jobs,results){
return (function (state_25001){
var state_val_25002 = (state_25001[(1)]);
if((state_val_25002 === (2))){
var inst_24998 = (state_25001[(2)]);
var inst_24999 = cljs.core.async.close_BANG_.call(null,res);
var state_25001__$1 = (function (){var statearr_25003 = state_25001;
(statearr_25003[(7)] = inst_24998);

return statearr_25003;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25001__$1,inst_24999);
} else {
if((state_val_25002 === (1))){
var state_25001__$1 = state_25001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25001__$1,(2),res,v);
} else {
return null;
}
}
});})(c__19775__auto___25178,res,vec__24996,v,p,job,jobs,results))
;
return ((function (switch__19719__auto__,c__19775__auto___25178,res,vec__24996,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____0 = (function (){
var statearr_25007 = [null,null,null,null,null,null,null,null];
(statearr_25007[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__);

(statearr_25007[(1)] = (1));

return statearr_25007;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____1 = (function (state_25001){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_25001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e25008){if((e25008 instanceof Object)){
var ex__19723__auto__ = e25008;
var statearr_25009_25179 = state_25001;
(statearr_25009_25179[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25180 = state_25001;
state_25001 = G__25180;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__ = function(state_25001){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____1.call(this,state_25001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto___25178,res,vec__24996,v,p,job,jobs,results))
})();
var state__19777__auto__ = (function (){var statearr_25010 = f__19776__auto__.call(null);
(statearr_25010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___25178);

return statearr_25010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto___25178,res,vec__24996,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25011){
var vec__25012 = p__25011;
var v = cljs.core.nth.call(null,vec__25012,(0),null);
var p = cljs.core.nth.call(null,vec__25012,(1),null);
var job = vec__25012;
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
var n__18481__auto___25181 = n;
var __25182 = (0);
while(true){
if((__25182 < n__18481__auto___25181)){
var G__25013_25183 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25013_25183) {
case "async":
var c__19775__auto___25185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25182,c__19775__auto___25185,G__25013_25183,n__18481__auto___25181,jobs,results,process,async){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (__25182,c__19775__auto___25185,G__25013_25183,n__18481__auto___25181,jobs,results,process,async){
return (function (state_25026){
var state_val_25027 = (state_25026[(1)]);
if((state_val_25027 === (7))){
var inst_25022 = (state_25026[(2)]);
var state_25026__$1 = state_25026;
var statearr_25028_25186 = state_25026__$1;
(statearr_25028_25186[(2)] = inst_25022);

(statearr_25028_25186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25027 === (6))){
var state_25026__$1 = state_25026;
var statearr_25029_25187 = state_25026__$1;
(statearr_25029_25187[(2)] = null);

(statearr_25029_25187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25027 === (5))){
var state_25026__$1 = state_25026;
var statearr_25030_25188 = state_25026__$1;
(statearr_25030_25188[(2)] = null);

(statearr_25030_25188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25027 === (4))){
var inst_25016 = (state_25026[(2)]);
var inst_25017 = async.call(null,inst_25016);
var state_25026__$1 = state_25026;
if(cljs.core.truth_(inst_25017)){
var statearr_25031_25189 = state_25026__$1;
(statearr_25031_25189[(1)] = (5));

} else {
var statearr_25032_25190 = state_25026__$1;
(statearr_25032_25190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25027 === (3))){
var inst_25024 = (state_25026[(2)]);
var state_25026__$1 = state_25026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25026__$1,inst_25024);
} else {
if((state_val_25027 === (2))){
var state_25026__$1 = state_25026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25026__$1,(4),jobs);
} else {
if((state_val_25027 === (1))){
var state_25026__$1 = state_25026;
var statearr_25033_25191 = state_25026__$1;
(statearr_25033_25191[(2)] = null);

(statearr_25033_25191[(1)] = (2));


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
});})(__25182,c__19775__auto___25185,G__25013_25183,n__18481__auto___25181,jobs,results,process,async))
;
return ((function (__25182,switch__19719__auto__,c__19775__auto___25185,G__25013_25183,n__18481__auto___25181,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____0 = (function (){
var statearr_25037 = [null,null,null,null,null,null,null];
(statearr_25037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__);

(statearr_25037[(1)] = (1));

return statearr_25037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____1 = (function (state_25026){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_25026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e25038){if((e25038 instanceof Object)){
var ex__19723__auto__ = e25038;
var statearr_25039_25192 = state_25026;
(statearr_25039_25192[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25193 = state_25026;
state_25026 = G__25193;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__ = function(state_25026){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____1.call(this,state_25026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__;
})()
;})(__25182,switch__19719__auto__,c__19775__auto___25185,G__25013_25183,n__18481__auto___25181,jobs,results,process,async))
})();
var state__19777__auto__ = (function (){var statearr_25040 = f__19776__auto__.call(null);
(statearr_25040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___25185);

return statearr_25040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(__25182,c__19775__auto___25185,G__25013_25183,n__18481__auto___25181,jobs,results,process,async))
);


break;
case "compute":
var c__19775__auto___25194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25182,c__19775__auto___25194,G__25013_25183,n__18481__auto___25181,jobs,results,process,async){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (__25182,c__19775__auto___25194,G__25013_25183,n__18481__auto___25181,jobs,results,process,async){
return (function (state_25053){
var state_val_25054 = (state_25053[(1)]);
if((state_val_25054 === (7))){
var inst_25049 = (state_25053[(2)]);
var state_25053__$1 = state_25053;
var statearr_25055_25195 = state_25053__$1;
(statearr_25055_25195[(2)] = inst_25049);

(statearr_25055_25195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25054 === (6))){
var state_25053__$1 = state_25053;
var statearr_25056_25196 = state_25053__$1;
(statearr_25056_25196[(2)] = null);

(statearr_25056_25196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25054 === (5))){
var state_25053__$1 = state_25053;
var statearr_25057_25197 = state_25053__$1;
(statearr_25057_25197[(2)] = null);

(statearr_25057_25197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25054 === (4))){
var inst_25043 = (state_25053[(2)]);
var inst_25044 = process.call(null,inst_25043);
var state_25053__$1 = state_25053;
if(cljs.core.truth_(inst_25044)){
var statearr_25058_25198 = state_25053__$1;
(statearr_25058_25198[(1)] = (5));

} else {
var statearr_25059_25199 = state_25053__$1;
(statearr_25059_25199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25054 === (3))){
var inst_25051 = (state_25053[(2)]);
var state_25053__$1 = state_25053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25053__$1,inst_25051);
} else {
if((state_val_25054 === (2))){
var state_25053__$1 = state_25053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25053__$1,(4),jobs);
} else {
if((state_val_25054 === (1))){
var state_25053__$1 = state_25053;
var statearr_25060_25200 = state_25053__$1;
(statearr_25060_25200[(2)] = null);

(statearr_25060_25200[(1)] = (2));


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
});})(__25182,c__19775__auto___25194,G__25013_25183,n__18481__auto___25181,jobs,results,process,async))
;
return ((function (__25182,switch__19719__auto__,c__19775__auto___25194,G__25013_25183,n__18481__auto___25181,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____0 = (function (){
var statearr_25064 = [null,null,null,null,null,null,null];
(statearr_25064[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__);

(statearr_25064[(1)] = (1));

return statearr_25064;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____1 = (function (state_25053){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_25053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e25065){if((e25065 instanceof Object)){
var ex__19723__auto__ = e25065;
var statearr_25066_25201 = state_25053;
(statearr_25066_25201[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25202 = state_25053;
state_25053 = G__25202;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__ = function(state_25053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____1.call(this,state_25053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__;
})()
;})(__25182,switch__19719__auto__,c__19775__auto___25194,G__25013_25183,n__18481__auto___25181,jobs,results,process,async))
})();
var state__19777__auto__ = (function (){var statearr_25067 = f__19776__auto__.call(null);
(statearr_25067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___25194);

return statearr_25067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(__25182,c__19775__auto___25194,G__25013_25183,n__18481__auto___25181,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25203 = (__25182 + (1));
__25182 = G__25203;
continue;
} else {
}
break;
}

var c__19775__auto___25204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto___25204,jobs,results,process,async){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto___25204,jobs,results,process,async){
return (function (state_25089){
var state_val_25090 = (state_25089[(1)]);
if((state_val_25090 === (9))){
var inst_25082 = (state_25089[(2)]);
var state_25089__$1 = (function (){var statearr_25091 = state_25089;
(statearr_25091[(7)] = inst_25082);

return statearr_25091;
})();
var statearr_25092_25205 = state_25089__$1;
(statearr_25092_25205[(2)] = null);

(statearr_25092_25205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (8))){
var inst_25075 = (state_25089[(8)]);
var inst_25080 = (state_25089[(2)]);
var state_25089__$1 = (function (){var statearr_25093 = state_25089;
(statearr_25093[(9)] = inst_25080);

return statearr_25093;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25089__$1,(9),results,inst_25075);
} else {
if((state_val_25090 === (7))){
var inst_25085 = (state_25089[(2)]);
var state_25089__$1 = state_25089;
var statearr_25094_25206 = state_25089__$1;
(statearr_25094_25206[(2)] = inst_25085);

(statearr_25094_25206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (6))){
var inst_25075 = (state_25089[(8)]);
var inst_25070 = (state_25089[(10)]);
var inst_25075__$1 = cljs.core.async.chan.call(null,(1));
var inst_25076 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25077 = [inst_25070,inst_25075__$1];
var inst_25078 = (new cljs.core.PersistentVector(null,2,(5),inst_25076,inst_25077,null));
var state_25089__$1 = (function (){var statearr_25095 = state_25089;
(statearr_25095[(8)] = inst_25075__$1);

return statearr_25095;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25089__$1,(8),jobs,inst_25078);
} else {
if((state_val_25090 === (5))){
var inst_25073 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25089__$1 = state_25089;
var statearr_25096_25207 = state_25089__$1;
(statearr_25096_25207[(2)] = inst_25073);

(statearr_25096_25207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (4))){
var inst_25070 = (state_25089[(10)]);
var inst_25070__$1 = (state_25089[(2)]);
var inst_25071 = (inst_25070__$1 == null);
var state_25089__$1 = (function (){var statearr_25097 = state_25089;
(statearr_25097[(10)] = inst_25070__$1);

return statearr_25097;
})();
if(cljs.core.truth_(inst_25071)){
var statearr_25098_25208 = state_25089__$1;
(statearr_25098_25208[(1)] = (5));

} else {
var statearr_25099_25209 = state_25089__$1;
(statearr_25099_25209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (3))){
var inst_25087 = (state_25089[(2)]);
var state_25089__$1 = state_25089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25089__$1,inst_25087);
} else {
if((state_val_25090 === (2))){
var state_25089__$1 = state_25089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25089__$1,(4),from);
} else {
if((state_val_25090 === (1))){
var state_25089__$1 = state_25089;
var statearr_25100_25210 = state_25089__$1;
(statearr_25100_25210[(2)] = null);

(statearr_25100_25210[(1)] = (2));


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
});})(c__19775__auto___25204,jobs,results,process,async))
;
return ((function (switch__19719__auto__,c__19775__auto___25204,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____0 = (function (){
var statearr_25104 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25104[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__);

(statearr_25104[(1)] = (1));

return statearr_25104;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____1 = (function (state_25089){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_25089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e25105){if((e25105 instanceof Object)){
var ex__19723__auto__ = e25105;
var statearr_25106_25211 = state_25089;
(statearr_25106_25211[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25212 = state_25089;
state_25089 = G__25212;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__ = function(state_25089){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____1.call(this,state_25089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto___25204,jobs,results,process,async))
})();
var state__19777__auto__ = (function (){var statearr_25107 = f__19776__auto__.call(null);
(statearr_25107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___25204);

return statearr_25107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto___25204,jobs,results,process,async))
);


var c__19775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto__,jobs,results,process,async){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto__,jobs,results,process,async){
return (function (state_25145){
var state_val_25146 = (state_25145[(1)]);
if((state_val_25146 === (7))){
var inst_25141 = (state_25145[(2)]);
var state_25145__$1 = state_25145;
var statearr_25147_25213 = state_25145__$1;
(statearr_25147_25213[(2)] = inst_25141);

(statearr_25147_25213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25146 === (20))){
var state_25145__$1 = state_25145;
var statearr_25148_25214 = state_25145__$1;
(statearr_25148_25214[(2)] = null);

(statearr_25148_25214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25146 === (1))){
var state_25145__$1 = state_25145;
var statearr_25149_25215 = state_25145__$1;
(statearr_25149_25215[(2)] = null);

(statearr_25149_25215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25146 === (4))){
var inst_25110 = (state_25145[(7)]);
var inst_25110__$1 = (state_25145[(2)]);
var inst_25111 = (inst_25110__$1 == null);
var state_25145__$1 = (function (){var statearr_25150 = state_25145;
(statearr_25150[(7)] = inst_25110__$1);

return statearr_25150;
})();
if(cljs.core.truth_(inst_25111)){
var statearr_25151_25216 = state_25145__$1;
(statearr_25151_25216[(1)] = (5));

} else {
var statearr_25152_25217 = state_25145__$1;
(statearr_25152_25217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25146 === (15))){
var inst_25123 = (state_25145[(8)]);
var state_25145__$1 = state_25145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25145__$1,(18),to,inst_25123);
} else {
if((state_val_25146 === (21))){
var inst_25136 = (state_25145[(2)]);
var state_25145__$1 = state_25145;
var statearr_25153_25218 = state_25145__$1;
(statearr_25153_25218[(2)] = inst_25136);

(statearr_25153_25218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25146 === (13))){
var inst_25138 = (state_25145[(2)]);
var state_25145__$1 = (function (){var statearr_25154 = state_25145;
(statearr_25154[(9)] = inst_25138);

return statearr_25154;
})();
var statearr_25155_25219 = state_25145__$1;
(statearr_25155_25219[(2)] = null);

(statearr_25155_25219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25146 === (6))){
var inst_25110 = (state_25145[(7)]);
var state_25145__$1 = state_25145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25145__$1,(11),inst_25110);
} else {
if((state_val_25146 === (17))){
var inst_25131 = (state_25145[(2)]);
var state_25145__$1 = state_25145;
if(cljs.core.truth_(inst_25131)){
var statearr_25156_25220 = state_25145__$1;
(statearr_25156_25220[(1)] = (19));

} else {
var statearr_25157_25221 = state_25145__$1;
(statearr_25157_25221[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25146 === (3))){
var inst_25143 = (state_25145[(2)]);
var state_25145__$1 = state_25145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25145__$1,inst_25143);
} else {
if((state_val_25146 === (12))){
var inst_25120 = (state_25145[(10)]);
var state_25145__$1 = state_25145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25145__$1,(14),inst_25120);
} else {
if((state_val_25146 === (2))){
var state_25145__$1 = state_25145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25145__$1,(4),results);
} else {
if((state_val_25146 === (19))){
var state_25145__$1 = state_25145;
var statearr_25158_25222 = state_25145__$1;
(statearr_25158_25222[(2)] = null);

(statearr_25158_25222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25146 === (11))){
var inst_25120 = (state_25145[(2)]);
var state_25145__$1 = (function (){var statearr_25159 = state_25145;
(statearr_25159[(10)] = inst_25120);

return statearr_25159;
})();
var statearr_25160_25223 = state_25145__$1;
(statearr_25160_25223[(2)] = null);

(statearr_25160_25223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25146 === (9))){
var state_25145__$1 = state_25145;
var statearr_25161_25224 = state_25145__$1;
(statearr_25161_25224[(2)] = null);

(statearr_25161_25224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25146 === (5))){
var state_25145__$1 = state_25145;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25162_25225 = state_25145__$1;
(statearr_25162_25225[(1)] = (8));

} else {
var statearr_25163_25226 = state_25145__$1;
(statearr_25163_25226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25146 === (14))){
var inst_25125 = (state_25145[(11)]);
var inst_25123 = (state_25145[(8)]);
var inst_25123__$1 = (state_25145[(2)]);
var inst_25124 = (inst_25123__$1 == null);
var inst_25125__$1 = cljs.core.not.call(null,inst_25124);
var state_25145__$1 = (function (){var statearr_25164 = state_25145;
(statearr_25164[(11)] = inst_25125__$1);

(statearr_25164[(8)] = inst_25123__$1);

return statearr_25164;
})();
if(inst_25125__$1){
var statearr_25165_25227 = state_25145__$1;
(statearr_25165_25227[(1)] = (15));

} else {
var statearr_25166_25228 = state_25145__$1;
(statearr_25166_25228[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25146 === (16))){
var inst_25125 = (state_25145[(11)]);
var state_25145__$1 = state_25145;
var statearr_25167_25229 = state_25145__$1;
(statearr_25167_25229[(2)] = inst_25125);

(statearr_25167_25229[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25146 === (10))){
var inst_25117 = (state_25145[(2)]);
var state_25145__$1 = state_25145;
var statearr_25168_25230 = state_25145__$1;
(statearr_25168_25230[(2)] = inst_25117);

(statearr_25168_25230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25146 === (18))){
var inst_25128 = (state_25145[(2)]);
var state_25145__$1 = state_25145;
var statearr_25169_25231 = state_25145__$1;
(statearr_25169_25231[(2)] = inst_25128);

(statearr_25169_25231[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25146 === (8))){
var inst_25114 = cljs.core.async.close_BANG_.call(null,to);
var state_25145__$1 = state_25145;
var statearr_25170_25232 = state_25145__$1;
(statearr_25170_25232[(2)] = inst_25114);

(statearr_25170_25232[(1)] = (10));


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
});})(c__19775__auto__,jobs,results,process,async))
;
return ((function (switch__19719__auto__,c__19775__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____0 = (function (){
var statearr_25174 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__);

(statearr_25174[(1)] = (1));

return statearr_25174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____1 = (function (state_25145){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_25145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e25175){if((e25175 instanceof Object)){
var ex__19723__auto__ = e25175;
var statearr_25176_25233 = state_25145;
(statearr_25176_25233[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25234 = state_25145;
state_25145 = G__25234;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__ = function(state_25145){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____1.call(this,state_25145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19720__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto__,jobs,results,process,async))
})();
var state__19777__auto__ = (function (){var statearr_25177 = f__19776__auto__.call(null);
(statearr_25177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto__);

return statearr_25177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto__,jobs,results,process,async))
);

return c__19775__auto__;
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
var c__19775__auto___25335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto___25335,tc,fc){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto___25335,tc,fc){
return (function (state_25310){
var state_val_25311 = (state_25310[(1)]);
if((state_val_25311 === (7))){
var inst_25306 = (state_25310[(2)]);
var state_25310__$1 = state_25310;
var statearr_25312_25336 = state_25310__$1;
(statearr_25312_25336[(2)] = inst_25306);

(statearr_25312_25336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25311 === (1))){
var state_25310__$1 = state_25310;
var statearr_25313_25337 = state_25310__$1;
(statearr_25313_25337[(2)] = null);

(statearr_25313_25337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25311 === (4))){
var inst_25287 = (state_25310[(7)]);
var inst_25287__$1 = (state_25310[(2)]);
var inst_25288 = (inst_25287__$1 == null);
var state_25310__$1 = (function (){var statearr_25314 = state_25310;
(statearr_25314[(7)] = inst_25287__$1);

return statearr_25314;
})();
if(cljs.core.truth_(inst_25288)){
var statearr_25315_25338 = state_25310__$1;
(statearr_25315_25338[(1)] = (5));

} else {
var statearr_25316_25339 = state_25310__$1;
(statearr_25316_25339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25311 === (13))){
var state_25310__$1 = state_25310;
var statearr_25317_25340 = state_25310__$1;
(statearr_25317_25340[(2)] = null);

(statearr_25317_25340[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25311 === (6))){
var inst_25287 = (state_25310[(7)]);
var inst_25293 = p.call(null,inst_25287);
var state_25310__$1 = state_25310;
if(cljs.core.truth_(inst_25293)){
var statearr_25318_25341 = state_25310__$1;
(statearr_25318_25341[(1)] = (9));

} else {
var statearr_25319_25342 = state_25310__$1;
(statearr_25319_25342[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25311 === (3))){
var inst_25308 = (state_25310[(2)]);
var state_25310__$1 = state_25310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25310__$1,inst_25308);
} else {
if((state_val_25311 === (12))){
var state_25310__$1 = state_25310;
var statearr_25320_25343 = state_25310__$1;
(statearr_25320_25343[(2)] = null);

(statearr_25320_25343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25311 === (2))){
var state_25310__$1 = state_25310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25310__$1,(4),ch);
} else {
if((state_val_25311 === (11))){
var inst_25287 = (state_25310[(7)]);
var inst_25297 = (state_25310[(2)]);
var state_25310__$1 = state_25310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25310__$1,(8),inst_25297,inst_25287);
} else {
if((state_val_25311 === (9))){
var state_25310__$1 = state_25310;
var statearr_25321_25344 = state_25310__$1;
(statearr_25321_25344[(2)] = tc);

(statearr_25321_25344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25311 === (5))){
var inst_25290 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25291 = cljs.core.async.close_BANG_.call(null,fc);
var state_25310__$1 = (function (){var statearr_25322 = state_25310;
(statearr_25322[(8)] = inst_25290);

return statearr_25322;
})();
var statearr_25323_25345 = state_25310__$1;
(statearr_25323_25345[(2)] = inst_25291);

(statearr_25323_25345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25311 === (14))){
var inst_25304 = (state_25310[(2)]);
var state_25310__$1 = state_25310;
var statearr_25324_25346 = state_25310__$1;
(statearr_25324_25346[(2)] = inst_25304);

(statearr_25324_25346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25311 === (10))){
var state_25310__$1 = state_25310;
var statearr_25325_25347 = state_25310__$1;
(statearr_25325_25347[(2)] = fc);

(statearr_25325_25347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25311 === (8))){
var inst_25299 = (state_25310[(2)]);
var state_25310__$1 = state_25310;
if(cljs.core.truth_(inst_25299)){
var statearr_25326_25348 = state_25310__$1;
(statearr_25326_25348[(1)] = (12));

} else {
var statearr_25327_25349 = state_25310__$1;
(statearr_25327_25349[(1)] = (13));

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
});})(c__19775__auto___25335,tc,fc))
;
return ((function (switch__19719__auto__,c__19775__auto___25335,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__19720__auto__ = null;
var cljs$core$async$split_$_state_machine__19720__auto____0 = (function (){
var statearr_25331 = [null,null,null,null,null,null,null,null,null];
(statearr_25331[(0)] = cljs$core$async$split_$_state_machine__19720__auto__);

(statearr_25331[(1)] = (1));

return statearr_25331;
});
var cljs$core$async$split_$_state_machine__19720__auto____1 = (function (state_25310){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_25310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e25332){if((e25332 instanceof Object)){
var ex__19723__auto__ = e25332;
var statearr_25333_25350 = state_25310;
(statearr_25333_25350[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25351 = state_25310;
state_25310 = G__25351;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__19720__auto__ = function(state_25310){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__19720__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__19720__auto____1.call(this,state_25310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__19720__auto____0;
cljs$core$async$split_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__19720__auto____1;
return cljs$core$async$split_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto___25335,tc,fc))
})();
var state__19777__auto__ = (function (){var statearr_25334 = f__19776__auto__.call(null);
(statearr_25334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___25335);

return statearr_25334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto___25335,tc,fc))
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
var c__19775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto__){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto__){
return (function (state_25398){
var state_val_25399 = (state_25398[(1)]);
if((state_val_25399 === (7))){
var inst_25394 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
var statearr_25400_25416 = state_25398__$1;
(statearr_25400_25416[(2)] = inst_25394);

(statearr_25400_25416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (6))){
var inst_25384 = (state_25398[(7)]);
var inst_25387 = (state_25398[(8)]);
var inst_25391 = f.call(null,inst_25384,inst_25387);
var inst_25384__$1 = inst_25391;
var state_25398__$1 = (function (){var statearr_25401 = state_25398;
(statearr_25401[(7)] = inst_25384__$1);

return statearr_25401;
})();
var statearr_25402_25417 = state_25398__$1;
(statearr_25402_25417[(2)] = null);

(statearr_25402_25417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (5))){
var inst_25384 = (state_25398[(7)]);
var state_25398__$1 = state_25398;
var statearr_25403_25418 = state_25398__$1;
(statearr_25403_25418[(2)] = inst_25384);

(statearr_25403_25418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (4))){
var inst_25387 = (state_25398[(8)]);
var inst_25387__$1 = (state_25398[(2)]);
var inst_25388 = (inst_25387__$1 == null);
var state_25398__$1 = (function (){var statearr_25404 = state_25398;
(statearr_25404[(8)] = inst_25387__$1);

return statearr_25404;
})();
if(cljs.core.truth_(inst_25388)){
var statearr_25405_25419 = state_25398__$1;
(statearr_25405_25419[(1)] = (5));

} else {
var statearr_25406_25420 = state_25398__$1;
(statearr_25406_25420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (3))){
var inst_25396 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25398__$1,inst_25396);
} else {
if((state_val_25399 === (2))){
var state_25398__$1 = state_25398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25398__$1,(4),ch);
} else {
if((state_val_25399 === (1))){
var inst_25384 = init;
var state_25398__$1 = (function (){var statearr_25407 = state_25398;
(statearr_25407[(7)] = inst_25384);

return statearr_25407;
})();
var statearr_25408_25421 = state_25398__$1;
(statearr_25408_25421[(2)] = null);

(statearr_25408_25421[(1)] = (2));


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
});})(c__19775__auto__))
;
return ((function (switch__19719__auto__,c__19775__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19720__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19720__auto____0 = (function (){
var statearr_25412 = [null,null,null,null,null,null,null,null,null];
(statearr_25412[(0)] = cljs$core$async$reduce_$_state_machine__19720__auto__);

(statearr_25412[(1)] = (1));

return statearr_25412;
});
var cljs$core$async$reduce_$_state_machine__19720__auto____1 = (function (state_25398){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_25398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e25413){if((e25413 instanceof Object)){
var ex__19723__auto__ = e25413;
var statearr_25414_25422 = state_25398;
(statearr_25414_25422[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25423 = state_25398;
state_25398 = G__25423;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19720__auto__ = function(state_25398){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19720__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19720__auto____1.call(this,state_25398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19720__auto____0;
cljs$core$async$reduce_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19720__auto____1;
return cljs$core$async$reduce_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto__))
})();
var state__19777__auto__ = (function (){var statearr_25415 = f__19776__auto__.call(null);
(statearr_25415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto__);

return statearr_25415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto__))
);

return c__19775__auto__;
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
var c__19775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto__){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto__){
return (function (state_25497){
var state_val_25498 = (state_25497[(1)]);
if((state_val_25498 === (7))){
var inst_25479 = (state_25497[(2)]);
var state_25497__$1 = state_25497;
var statearr_25499_25522 = state_25497__$1;
(statearr_25499_25522[(2)] = inst_25479);

(statearr_25499_25522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (1))){
var inst_25473 = cljs.core.seq.call(null,coll);
var inst_25474 = inst_25473;
var state_25497__$1 = (function (){var statearr_25500 = state_25497;
(statearr_25500[(7)] = inst_25474);

return statearr_25500;
})();
var statearr_25501_25523 = state_25497__$1;
(statearr_25501_25523[(2)] = null);

(statearr_25501_25523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (4))){
var inst_25474 = (state_25497[(7)]);
var inst_25477 = cljs.core.first.call(null,inst_25474);
var state_25497__$1 = state_25497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25497__$1,(7),ch,inst_25477);
} else {
if((state_val_25498 === (13))){
var inst_25491 = (state_25497[(2)]);
var state_25497__$1 = state_25497;
var statearr_25502_25524 = state_25497__$1;
(statearr_25502_25524[(2)] = inst_25491);

(statearr_25502_25524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (6))){
var inst_25482 = (state_25497[(2)]);
var state_25497__$1 = state_25497;
if(cljs.core.truth_(inst_25482)){
var statearr_25503_25525 = state_25497__$1;
(statearr_25503_25525[(1)] = (8));

} else {
var statearr_25504_25526 = state_25497__$1;
(statearr_25504_25526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (3))){
var inst_25495 = (state_25497[(2)]);
var state_25497__$1 = state_25497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25497__$1,inst_25495);
} else {
if((state_val_25498 === (12))){
var state_25497__$1 = state_25497;
var statearr_25505_25527 = state_25497__$1;
(statearr_25505_25527[(2)] = null);

(statearr_25505_25527[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (2))){
var inst_25474 = (state_25497[(7)]);
var state_25497__$1 = state_25497;
if(cljs.core.truth_(inst_25474)){
var statearr_25506_25528 = state_25497__$1;
(statearr_25506_25528[(1)] = (4));

} else {
var statearr_25507_25529 = state_25497__$1;
(statearr_25507_25529[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (11))){
var inst_25488 = cljs.core.async.close_BANG_.call(null,ch);
var state_25497__$1 = state_25497;
var statearr_25508_25530 = state_25497__$1;
(statearr_25508_25530[(2)] = inst_25488);

(statearr_25508_25530[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (9))){
var state_25497__$1 = state_25497;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25509_25531 = state_25497__$1;
(statearr_25509_25531[(1)] = (11));

} else {
var statearr_25510_25532 = state_25497__$1;
(statearr_25510_25532[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (5))){
var inst_25474 = (state_25497[(7)]);
var state_25497__$1 = state_25497;
var statearr_25511_25533 = state_25497__$1;
(statearr_25511_25533[(2)] = inst_25474);

(statearr_25511_25533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (10))){
var inst_25493 = (state_25497[(2)]);
var state_25497__$1 = state_25497;
var statearr_25512_25534 = state_25497__$1;
(statearr_25512_25534[(2)] = inst_25493);

(statearr_25512_25534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25498 === (8))){
var inst_25474 = (state_25497[(7)]);
var inst_25484 = cljs.core.next.call(null,inst_25474);
var inst_25474__$1 = inst_25484;
var state_25497__$1 = (function (){var statearr_25513 = state_25497;
(statearr_25513[(7)] = inst_25474__$1);

return statearr_25513;
})();
var statearr_25514_25535 = state_25497__$1;
(statearr_25514_25535[(2)] = null);

(statearr_25514_25535[(1)] = (2));


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
});})(c__19775__auto__))
;
return ((function (switch__19719__auto__,c__19775__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__19720__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__19720__auto____0 = (function (){
var statearr_25518 = [null,null,null,null,null,null,null,null];
(statearr_25518[(0)] = cljs$core$async$onto_chan_$_state_machine__19720__auto__);

(statearr_25518[(1)] = (1));

return statearr_25518;
});
var cljs$core$async$onto_chan_$_state_machine__19720__auto____1 = (function (state_25497){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_25497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e25519){if((e25519 instanceof Object)){
var ex__19723__auto__ = e25519;
var statearr_25520_25536 = state_25497;
(statearr_25520_25536[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25537 = state_25497;
state_25497 = G__25537;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__19720__auto__ = function(state_25497){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__19720__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__19720__auto____1.call(this,state_25497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__19720__auto____0;
cljs$core$async$onto_chan_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__19720__auto____1;
return cljs$core$async$onto_chan_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto__))
})();
var state__19777__auto__ = (function (){var statearr_25521 = f__19776__auto__.call(null);
(statearr_25521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto__);

return statearr_25521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto__))
);

return c__19775__auto__;
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

cljs.core.async.Mux = (function (){var obj25539 = {};
return obj25539;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__17582__auto__ = _;
if(and__17582__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__17582__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18238__auto__ = (((_ == null))?null:_);
return (function (){var or__17594__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18238__auto__)]);
if(or__17594__auto__){
return or__17594__auto__;
} else {
var or__17594__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__17594__auto____$1){
return or__17594__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj25541 = {};
return obj25541;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__17582__auto__ = m;
if(and__17582__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__17582__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18238__auto__ = (((m == null))?null:m);
return (function (){var or__17594__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18238__auto__)]);
if(or__17594__auto__){
return or__17594__auto__;
} else {
var or__17594__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__17594__auto____$1){
return or__17594__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__17582__auto__ = m;
if(and__17582__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__17582__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18238__auto__ = (((m == null))?null:m);
return (function (){var or__17594__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18238__auto__)]);
if(or__17594__auto__){
return or__17594__auto__;
} else {
var or__17594__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__17594__auto____$1){
return or__17594__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__17582__auto__ = m;
if(and__17582__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__17582__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18238__auto__ = (((m == null))?null:m);
return (function (){var or__17594__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18238__auto__)]);
if(or__17594__auto__){
return or__17594__auto__;
} else {
var or__17594__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__17594__auto____$1){
return or__17594__auto____$1;
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
if(typeof cljs.core.async.t25763 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25763 = (function (cs,ch,mult,meta25764){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25764 = meta25764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25763.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25763.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25763.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25763.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t25763.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25763.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25763.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25765){
var self__ = this;
var _25765__$1 = this;
return self__.meta25764;
});})(cs))
;

cljs.core.async.t25763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25765,meta25764__$1){
var self__ = this;
var _25765__$1 = this;
return (new cljs.core.async.t25763(self__.cs,self__.ch,self__.mult,meta25764__$1));
});})(cs))
;

cljs.core.async.t25763.cljs$lang$type = true;

cljs.core.async.t25763.cljs$lang$ctorStr = "cljs.core.async/t25763";

cljs.core.async.t25763.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18181__auto__,writer__18182__auto__,opt__18183__auto__){
return cljs.core._write.call(null,writer__18182__auto__,"cljs.core.async/t25763");
});})(cs))
;

cljs.core.async.__GT_t25763 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t25763(cs__$1,ch__$1,mult__$1,meta25764){
return (new cljs.core.async.t25763(cs__$1,ch__$1,mult__$1,meta25764));
});})(cs))
;

}

return (new cljs.core.async.t25763(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19775__auto___25984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto___25984,cs,m,dchan,dctr,done){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto___25984,cs,m,dchan,dctr,done){
return (function (state_25896){
var state_val_25897 = (state_25896[(1)]);
if((state_val_25897 === (7))){
var inst_25892 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25898_25985 = state_25896__$1;
(statearr_25898_25985[(2)] = inst_25892);

(statearr_25898_25985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (20))){
var inst_25797 = (state_25896[(7)]);
var inst_25807 = cljs.core.first.call(null,inst_25797);
var inst_25808 = cljs.core.nth.call(null,inst_25807,(0),null);
var inst_25809 = cljs.core.nth.call(null,inst_25807,(1),null);
var state_25896__$1 = (function (){var statearr_25899 = state_25896;
(statearr_25899[(8)] = inst_25808);

return statearr_25899;
})();
if(cljs.core.truth_(inst_25809)){
var statearr_25900_25986 = state_25896__$1;
(statearr_25900_25986[(1)] = (22));

} else {
var statearr_25901_25987 = state_25896__$1;
(statearr_25901_25987[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (27))){
var inst_25839 = (state_25896[(9)]);
var inst_25768 = (state_25896[(10)]);
var inst_25844 = (state_25896[(11)]);
var inst_25837 = (state_25896[(12)]);
var inst_25844__$1 = cljs.core._nth.call(null,inst_25837,inst_25839);
var inst_25845 = cljs.core.async.put_BANG_.call(null,inst_25844__$1,inst_25768,done);
var state_25896__$1 = (function (){var statearr_25902 = state_25896;
(statearr_25902[(11)] = inst_25844__$1);

return statearr_25902;
})();
if(cljs.core.truth_(inst_25845)){
var statearr_25903_25988 = state_25896__$1;
(statearr_25903_25988[(1)] = (30));

} else {
var statearr_25904_25989 = state_25896__$1;
(statearr_25904_25989[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (1))){
var state_25896__$1 = state_25896;
var statearr_25905_25990 = state_25896__$1;
(statearr_25905_25990[(2)] = null);

(statearr_25905_25990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (24))){
var inst_25797 = (state_25896[(7)]);
var inst_25814 = (state_25896[(2)]);
var inst_25815 = cljs.core.next.call(null,inst_25797);
var inst_25777 = inst_25815;
var inst_25778 = null;
var inst_25779 = (0);
var inst_25780 = (0);
var state_25896__$1 = (function (){var statearr_25906 = state_25896;
(statearr_25906[(13)] = inst_25780);

(statearr_25906[(14)] = inst_25777);

(statearr_25906[(15)] = inst_25814);

(statearr_25906[(16)] = inst_25778);

(statearr_25906[(17)] = inst_25779);

return statearr_25906;
})();
var statearr_25907_25991 = state_25896__$1;
(statearr_25907_25991[(2)] = null);

(statearr_25907_25991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (39))){
var state_25896__$1 = state_25896;
var statearr_25911_25992 = state_25896__$1;
(statearr_25911_25992[(2)] = null);

(statearr_25911_25992[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (4))){
var inst_25768 = (state_25896[(10)]);
var inst_25768__$1 = (state_25896[(2)]);
var inst_25769 = (inst_25768__$1 == null);
var state_25896__$1 = (function (){var statearr_25912 = state_25896;
(statearr_25912[(10)] = inst_25768__$1);

return statearr_25912;
})();
if(cljs.core.truth_(inst_25769)){
var statearr_25913_25993 = state_25896__$1;
(statearr_25913_25993[(1)] = (5));

} else {
var statearr_25914_25994 = state_25896__$1;
(statearr_25914_25994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (15))){
var inst_25780 = (state_25896[(13)]);
var inst_25777 = (state_25896[(14)]);
var inst_25778 = (state_25896[(16)]);
var inst_25779 = (state_25896[(17)]);
var inst_25793 = (state_25896[(2)]);
var inst_25794 = (inst_25780 + (1));
var tmp25908 = inst_25777;
var tmp25909 = inst_25778;
var tmp25910 = inst_25779;
var inst_25777__$1 = tmp25908;
var inst_25778__$1 = tmp25909;
var inst_25779__$1 = tmp25910;
var inst_25780__$1 = inst_25794;
var state_25896__$1 = (function (){var statearr_25915 = state_25896;
(statearr_25915[(13)] = inst_25780__$1);

(statearr_25915[(14)] = inst_25777__$1);

(statearr_25915[(18)] = inst_25793);

(statearr_25915[(16)] = inst_25778__$1);

(statearr_25915[(17)] = inst_25779__$1);

return statearr_25915;
})();
var statearr_25916_25995 = state_25896__$1;
(statearr_25916_25995[(2)] = null);

(statearr_25916_25995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (21))){
var inst_25818 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25920_25996 = state_25896__$1;
(statearr_25920_25996[(2)] = inst_25818);

(statearr_25920_25996[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (31))){
var inst_25844 = (state_25896[(11)]);
var inst_25848 = done.call(null,null);
var inst_25849 = cljs.core.async.untap_STAR_.call(null,m,inst_25844);
var state_25896__$1 = (function (){var statearr_25921 = state_25896;
(statearr_25921[(19)] = inst_25848);

return statearr_25921;
})();
var statearr_25922_25997 = state_25896__$1;
(statearr_25922_25997[(2)] = inst_25849);

(statearr_25922_25997[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (32))){
var inst_25839 = (state_25896[(9)]);
var inst_25838 = (state_25896[(20)]);
var inst_25836 = (state_25896[(21)]);
var inst_25837 = (state_25896[(12)]);
var inst_25851 = (state_25896[(2)]);
var inst_25852 = (inst_25839 + (1));
var tmp25917 = inst_25838;
var tmp25918 = inst_25836;
var tmp25919 = inst_25837;
var inst_25836__$1 = tmp25918;
var inst_25837__$1 = tmp25919;
var inst_25838__$1 = tmp25917;
var inst_25839__$1 = inst_25852;
var state_25896__$1 = (function (){var statearr_25923 = state_25896;
(statearr_25923[(9)] = inst_25839__$1);

(statearr_25923[(20)] = inst_25838__$1);

(statearr_25923[(22)] = inst_25851);

(statearr_25923[(21)] = inst_25836__$1);

(statearr_25923[(12)] = inst_25837__$1);

return statearr_25923;
})();
var statearr_25924_25998 = state_25896__$1;
(statearr_25924_25998[(2)] = null);

(statearr_25924_25998[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (40))){
var inst_25864 = (state_25896[(23)]);
var inst_25868 = done.call(null,null);
var inst_25869 = cljs.core.async.untap_STAR_.call(null,m,inst_25864);
var state_25896__$1 = (function (){var statearr_25925 = state_25896;
(statearr_25925[(24)] = inst_25868);

return statearr_25925;
})();
var statearr_25926_25999 = state_25896__$1;
(statearr_25926_25999[(2)] = inst_25869);

(statearr_25926_25999[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (33))){
var inst_25855 = (state_25896[(25)]);
var inst_25857 = cljs.core.chunked_seq_QMARK_.call(null,inst_25855);
var state_25896__$1 = state_25896;
if(inst_25857){
var statearr_25927_26000 = state_25896__$1;
(statearr_25927_26000[(1)] = (36));

} else {
var statearr_25928_26001 = state_25896__$1;
(statearr_25928_26001[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (13))){
var inst_25787 = (state_25896[(26)]);
var inst_25790 = cljs.core.async.close_BANG_.call(null,inst_25787);
var state_25896__$1 = state_25896;
var statearr_25929_26002 = state_25896__$1;
(statearr_25929_26002[(2)] = inst_25790);

(statearr_25929_26002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (22))){
var inst_25808 = (state_25896[(8)]);
var inst_25811 = cljs.core.async.close_BANG_.call(null,inst_25808);
var state_25896__$1 = state_25896;
var statearr_25930_26003 = state_25896__$1;
(statearr_25930_26003[(2)] = inst_25811);

(statearr_25930_26003[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (36))){
var inst_25855 = (state_25896[(25)]);
var inst_25859 = cljs.core.chunk_first.call(null,inst_25855);
var inst_25860 = cljs.core.chunk_rest.call(null,inst_25855);
var inst_25861 = cljs.core.count.call(null,inst_25859);
var inst_25836 = inst_25860;
var inst_25837 = inst_25859;
var inst_25838 = inst_25861;
var inst_25839 = (0);
var state_25896__$1 = (function (){var statearr_25931 = state_25896;
(statearr_25931[(9)] = inst_25839);

(statearr_25931[(20)] = inst_25838);

(statearr_25931[(21)] = inst_25836);

(statearr_25931[(12)] = inst_25837);

return statearr_25931;
})();
var statearr_25932_26004 = state_25896__$1;
(statearr_25932_26004[(2)] = null);

(statearr_25932_26004[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (41))){
var inst_25855 = (state_25896[(25)]);
var inst_25871 = (state_25896[(2)]);
var inst_25872 = cljs.core.next.call(null,inst_25855);
var inst_25836 = inst_25872;
var inst_25837 = null;
var inst_25838 = (0);
var inst_25839 = (0);
var state_25896__$1 = (function (){var statearr_25933 = state_25896;
(statearr_25933[(27)] = inst_25871);

(statearr_25933[(9)] = inst_25839);

(statearr_25933[(20)] = inst_25838);

(statearr_25933[(21)] = inst_25836);

(statearr_25933[(12)] = inst_25837);

return statearr_25933;
})();
var statearr_25934_26005 = state_25896__$1;
(statearr_25934_26005[(2)] = null);

(statearr_25934_26005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (43))){
var state_25896__$1 = state_25896;
var statearr_25935_26006 = state_25896__$1;
(statearr_25935_26006[(2)] = null);

(statearr_25935_26006[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (29))){
var inst_25880 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25936_26007 = state_25896__$1;
(statearr_25936_26007[(2)] = inst_25880);

(statearr_25936_26007[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (44))){
var inst_25889 = (state_25896[(2)]);
var state_25896__$1 = (function (){var statearr_25937 = state_25896;
(statearr_25937[(28)] = inst_25889);

return statearr_25937;
})();
var statearr_25938_26008 = state_25896__$1;
(statearr_25938_26008[(2)] = null);

(statearr_25938_26008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (6))){
var inst_25828 = (state_25896[(29)]);
var inst_25827 = cljs.core.deref.call(null,cs);
var inst_25828__$1 = cljs.core.keys.call(null,inst_25827);
var inst_25829 = cljs.core.count.call(null,inst_25828__$1);
var inst_25830 = cljs.core.reset_BANG_.call(null,dctr,inst_25829);
var inst_25835 = cljs.core.seq.call(null,inst_25828__$1);
var inst_25836 = inst_25835;
var inst_25837 = null;
var inst_25838 = (0);
var inst_25839 = (0);
var state_25896__$1 = (function (){var statearr_25939 = state_25896;
(statearr_25939[(9)] = inst_25839);

(statearr_25939[(20)] = inst_25838);

(statearr_25939[(30)] = inst_25830);

(statearr_25939[(21)] = inst_25836);

(statearr_25939[(12)] = inst_25837);

(statearr_25939[(29)] = inst_25828__$1);

return statearr_25939;
})();
var statearr_25940_26009 = state_25896__$1;
(statearr_25940_26009[(2)] = null);

(statearr_25940_26009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (28))){
var inst_25855 = (state_25896[(25)]);
var inst_25836 = (state_25896[(21)]);
var inst_25855__$1 = cljs.core.seq.call(null,inst_25836);
var state_25896__$1 = (function (){var statearr_25941 = state_25896;
(statearr_25941[(25)] = inst_25855__$1);

return statearr_25941;
})();
if(inst_25855__$1){
var statearr_25942_26010 = state_25896__$1;
(statearr_25942_26010[(1)] = (33));

} else {
var statearr_25943_26011 = state_25896__$1;
(statearr_25943_26011[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (25))){
var inst_25839 = (state_25896[(9)]);
var inst_25838 = (state_25896[(20)]);
var inst_25841 = (inst_25839 < inst_25838);
var inst_25842 = inst_25841;
var state_25896__$1 = state_25896;
if(cljs.core.truth_(inst_25842)){
var statearr_25944_26012 = state_25896__$1;
(statearr_25944_26012[(1)] = (27));

} else {
var statearr_25945_26013 = state_25896__$1;
(statearr_25945_26013[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (34))){
var state_25896__$1 = state_25896;
var statearr_25946_26014 = state_25896__$1;
(statearr_25946_26014[(2)] = null);

(statearr_25946_26014[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (17))){
var state_25896__$1 = state_25896;
var statearr_25947_26015 = state_25896__$1;
(statearr_25947_26015[(2)] = null);

(statearr_25947_26015[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (3))){
var inst_25894 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25896__$1,inst_25894);
} else {
if((state_val_25897 === (12))){
var inst_25823 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25948_26016 = state_25896__$1;
(statearr_25948_26016[(2)] = inst_25823);

(statearr_25948_26016[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (2))){
var state_25896__$1 = state_25896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25896__$1,(4),ch);
} else {
if((state_val_25897 === (23))){
var state_25896__$1 = state_25896;
var statearr_25949_26017 = state_25896__$1;
(statearr_25949_26017[(2)] = null);

(statearr_25949_26017[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (35))){
var inst_25878 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25950_26018 = state_25896__$1;
(statearr_25950_26018[(2)] = inst_25878);

(statearr_25950_26018[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (19))){
var inst_25797 = (state_25896[(7)]);
var inst_25801 = cljs.core.chunk_first.call(null,inst_25797);
var inst_25802 = cljs.core.chunk_rest.call(null,inst_25797);
var inst_25803 = cljs.core.count.call(null,inst_25801);
var inst_25777 = inst_25802;
var inst_25778 = inst_25801;
var inst_25779 = inst_25803;
var inst_25780 = (0);
var state_25896__$1 = (function (){var statearr_25951 = state_25896;
(statearr_25951[(13)] = inst_25780);

(statearr_25951[(14)] = inst_25777);

(statearr_25951[(16)] = inst_25778);

(statearr_25951[(17)] = inst_25779);

return statearr_25951;
})();
var statearr_25952_26019 = state_25896__$1;
(statearr_25952_26019[(2)] = null);

(statearr_25952_26019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (11))){
var inst_25797 = (state_25896[(7)]);
var inst_25777 = (state_25896[(14)]);
var inst_25797__$1 = cljs.core.seq.call(null,inst_25777);
var state_25896__$1 = (function (){var statearr_25953 = state_25896;
(statearr_25953[(7)] = inst_25797__$1);

return statearr_25953;
})();
if(inst_25797__$1){
var statearr_25954_26020 = state_25896__$1;
(statearr_25954_26020[(1)] = (16));

} else {
var statearr_25955_26021 = state_25896__$1;
(statearr_25955_26021[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (9))){
var inst_25825 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25956_26022 = state_25896__$1;
(statearr_25956_26022[(2)] = inst_25825);

(statearr_25956_26022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (5))){
var inst_25775 = cljs.core.deref.call(null,cs);
var inst_25776 = cljs.core.seq.call(null,inst_25775);
var inst_25777 = inst_25776;
var inst_25778 = null;
var inst_25779 = (0);
var inst_25780 = (0);
var state_25896__$1 = (function (){var statearr_25957 = state_25896;
(statearr_25957[(13)] = inst_25780);

(statearr_25957[(14)] = inst_25777);

(statearr_25957[(16)] = inst_25778);

(statearr_25957[(17)] = inst_25779);

return statearr_25957;
})();
var statearr_25958_26023 = state_25896__$1;
(statearr_25958_26023[(2)] = null);

(statearr_25958_26023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (14))){
var state_25896__$1 = state_25896;
var statearr_25959_26024 = state_25896__$1;
(statearr_25959_26024[(2)] = null);

(statearr_25959_26024[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (45))){
var inst_25886 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25960_26025 = state_25896__$1;
(statearr_25960_26025[(2)] = inst_25886);

(statearr_25960_26025[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (26))){
var inst_25828 = (state_25896[(29)]);
var inst_25882 = (state_25896[(2)]);
var inst_25883 = cljs.core.seq.call(null,inst_25828);
var state_25896__$1 = (function (){var statearr_25961 = state_25896;
(statearr_25961[(31)] = inst_25882);

return statearr_25961;
})();
if(inst_25883){
var statearr_25962_26026 = state_25896__$1;
(statearr_25962_26026[(1)] = (42));

} else {
var statearr_25963_26027 = state_25896__$1;
(statearr_25963_26027[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (16))){
var inst_25797 = (state_25896[(7)]);
var inst_25799 = cljs.core.chunked_seq_QMARK_.call(null,inst_25797);
var state_25896__$1 = state_25896;
if(inst_25799){
var statearr_25964_26028 = state_25896__$1;
(statearr_25964_26028[(1)] = (19));

} else {
var statearr_25965_26029 = state_25896__$1;
(statearr_25965_26029[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (38))){
var inst_25875 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25966_26030 = state_25896__$1;
(statearr_25966_26030[(2)] = inst_25875);

(statearr_25966_26030[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (30))){
var state_25896__$1 = state_25896;
var statearr_25967_26031 = state_25896__$1;
(statearr_25967_26031[(2)] = null);

(statearr_25967_26031[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (10))){
var inst_25780 = (state_25896[(13)]);
var inst_25778 = (state_25896[(16)]);
var inst_25786 = cljs.core._nth.call(null,inst_25778,inst_25780);
var inst_25787 = cljs.core.nth.call(null,inst_25786,(0),null);
var inst_25788 = cljs.core.nth.call(null,inst_25786,(1),null);
var state_25896__$1 = (function (){var statearr_25968 = state_25896;
(statearr_25968[(26)] = inst_25787);

return statearr_25968;
})();
if(cljs.core.truth_(inst_25788)){
var statearr_25969_26032 = state_25896__$1;
(statearr_25969_26032[(1)] = (13));

} else {
var statearr_25970_26033 = state_25896__$1;
(statearr_25970_26033[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (18))){
var inst_25821 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25971_26034 = state_25896__$1;
(statearr_25971_26034[(2)] = inst_25821);

(statearr_25971_26034[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (42))){
var state_25896__$1 = state_25896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25896__$1,(45),dchan);
} else {
if((state_val_25897 === (37))){
var inst_25855 = (state_25896[(25)]);
var inst_25768 = (state_25896[(10)]);
var inst_25864 = (state_25896[(23)]);
var inst_25864__$1 = cljs.core.first.call(null,inst_25855);
var inst_25865 = cljs.core.async.put_BANG_.call(null,inst_25864__$1,inst_25768,done);
var state_25896__$1 = (function (){var statearr_25972 = state_25896;
(statearr_25972[(23)] = inst_25864__$1);

return statearr_25972;
})();
if(cljs.core.truth_(inst_25865)){
var statearr_25973_26035 = state_25896__$1;
(statearr_25973_26035[(1)] = (39));

} else {
var statearr_25974_26036 = state_25896__$1;
(statearr_25974_26036[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (8))){
var inst_25780 = (state_25896[(13)]);
var inst_25779 = (state_25896[(17)]);
var inst_25782 = (inst_25780 < inst_25779);
var inst_25783 = inst_25782;
var state_25896__$1 = state_25896;
if(cljs.core.truth_(inst_25783)){
var statearr_25975_26037 = state_25896__$1;
(statearr_25975_26037[(1)] = (10));

} else {
var statearr_25976_26038 = state_25896__$1;
(statearr_25976_26038[(1)] = (11));

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
});})(c__19775__auto___25984,cs,m,dchan,dctr,done))
;
return ((function (switch__19719__auto__,c__19775__auto___25984,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19720__auto__ = null;
var cljs$core$async$mult_$_state_machine__19720__auto____0 = (function (){
var statearr_25980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25980[(0)] = cljs$core$async$mult_$_state_machine__19720__auto__);

(statearr_25980[(1)] = (1));

return statearr_25980;
});
var cljs$core$async$mult_$_state_machine__19720__auto____1 = (function (state_25896){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_25896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e25981){if((e25981 instanceof Object)){
var ex__19723__auto__ = e25981;
var statearr_25982_26039 = state_25896;
(statearr_25982_26039[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26040 = state_25896;
state_25896 = G__26040;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19720__auto__ = function(state_25896){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19720__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19720__auto____1.call(this,state_25896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19720__auto____0;
cljs$core$async$mult_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19720__auto____1;
return cljs$core$async$mult_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto___25984,cs,m,dchan,dctr,done))
})();
var state__19777__auto__ = (function (){var statearr_25983 = f__19776__auto__.call(null);
(statearr_25983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___25984);

return statearr_25983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto___25984,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj26042 = {};
return obj26042;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__17582__auto__ = m;
if(and__17582__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__17582__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18238__auto__ = (((m == null))?null:m);
return (function (){var or__17594__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18238__auto__)]);
if(or__17594__auto__){
return or__17594__auto__;
} else {
var or__17594__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__17594__auto____$1){
return or__17594__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__17582__auto__ = m;
if(and__17582__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__17582__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18238__auto__ = (((m == null))?null:m);
return (function (){var or__17594__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18238__auto__)]);
if(or__17594__auto__){
return or__17594__auto__;
} else {
var or__17594__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__17594__auto____$1){
return or__17594__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__17582__auto__ = m;
if(and__17582__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__17582__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18238__auto__ = (((m == null))?null:m);
return (function (){var or__17594__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18238__auto__)]);
if(or__17594__auto__){
return or__17594__auto__;
} else {
var or__17594__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__17594__auto____$1){
return or__17594__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__17582__auto__ = m;
if(and__17582__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__17582__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18238__auto__ = (((m == null))?null:m);
return (function (){var or__17594__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18238__auto__)]);
if(or__17594__auto__){
return or__17594__auto__;
} else {
var or__17594__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__17594__auto____$1){
return or__17594__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__17582__auto__ = m;
if(and__17582__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__17582__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18238__auto__ = (((m == null))?null:m);
return (function (){var or__17594__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18238__auto__)]);
if(or__17594__auto__){
return or__17594__auto__;
} else {
var or__17594__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__17594__auto____$1){
return or__17594__auto____$1;
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
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26043){
var map__26048 = p__26043;
var map__26048__$1 = ((cljs.core.seq_QMARK_.call(null,map__26048))?cljs.core.apply.call(null,cljs.core.hash_map,map__26048):map__26048);
var opts = map__26048__$1;
var statearr_26049_26052 = state;
(statearr_26049_26052[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__26048,map__26048__$1,opts){
return (function (val){
var statearr_26050_26053 = state;
(statearr_26050_26053[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26048,map__26048__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_26051_26054 = state;
(statearr_26051_26054[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26043 = null;
if (arguments.length > 3) {
var G__26055__i = 0, G__26055__a = new Array(arguments.length -  3);
while (G__26055__i < G__26055__a.length) {G__26055__a[G__26055__i] = arguments[G__26055__i + 3]; ++G__26055__i;}
  p__26043 = new cljs.core.IndexedSeq(G__26055__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26043);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26056){
var state = cljs.core.first(arglist__26056);
arglist__26056 = cljs.core.next(arglist__26056);
var cont_block = cljs.core.first(arglist__26056);
arglist__26056 = cljs.core.next(arglist__26056);
var ports = cljs.core.first(arglist__26056);
var p__26043 = cljs.core.rest(arglist__26056);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__26043);
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
if(typeof cljs.core.async.t26176 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26176 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26177){
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
this.meta26177 = meta26177;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26176.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26176.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26176.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26176.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26176.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26176.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t26176.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26176.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26176.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26178){
var self__ = this;
var _26178__$1 = this;
return self__.meta26177;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26178,meta26177__$1){
var self__ = this;
var _26178__$1 = this;
return (new cljs.core.async.t26176(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26177__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26176.cljs$lang$type = true;

cljs.core.async.t26176.cljs$lang$ctorStr = "cljs.core.async/t26176";

cljs.core.async.t26176.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18181__auto__,writer__18182__auto__,opt__18183__auto__){
return cljs.core._write.call(null,writer__18182__auto__,"cljs.core.async/t26176");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26176 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t26176(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26177){
return (new cljs.core.async.t26176(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26177));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26176(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19775__auto___26295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto___26295,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto___26295,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26248){
var state_val_26249 = (state_26248[(1)]);
if((state_val_26249 === (7))){
var inst_26192 = (state_26248[(7)]);
var inst_26197 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26192);
var state_26248__$1 = state_26248;
var statearr_26250_26296 = state_26248__$1;
(statearr_26250_26296[(2)] = inst_26197);

(statearr_26250_26296[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (20))){
var inst_26207 = (state_26248[(8)]);
var state_26248__$1 = state_26248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26248__$1,(23),out,inst_26207);
} else {
if((state_val_26249 === (1))){
var inst_26182 = (state_26248[(9)]);
var inst_26182__$1 = calc_state.call(null);
var inst_26183 = cljs.core.seq_QMARK_.call(null,inst_26182__$1);
var state_26248__$1 = (function (){var statearr_26251 = state_26248;
(statearr_26251[(9)] = inst_26182__$1);

return statearr_26251;
})();
if(inst_26183){
var statearr_26252_26297 = state_26248__$1;
(statearr_26252_26297[(1)] = (2));

} else {
var statearr_26253_26298 = state_26248__$1;
(statearr_26253_26298[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (24))){
var inst_26200 = (state_26248[(10)]);
var inst_26192 = inst_26200;
var state_26248__$1 = (function (){var statearr_26254 = state_26248;
(statearr_26254[(7)] = inst_26192);

return statearr_26254;
})();
var statearr_26255_26299 = state_26248__$1;
(statearr_26255_26299[(2)] = null);

(statearr_26255_26299[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (4))){
var inst_26182 = (state_26248[(9)]);
var inst_26188 = (state_26248[(2)]);
var inst_26189 = cljs.core.get.call(null,inst_26188,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26190 = cljs.core.get.call(null,inst_26188,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26191 = cljs.core.get.call(null,inst_26188,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26192 = inst_26182;
var state_26248__$1 = (function (){var statearr_26256 = state_26248;
(statearr_26256[(11)] = inst_26190);

(statearr_26256[(12)] = inst_26191);

(statearr_26256[(13)] = inst_26189);

(statearr_26256[(7)] = inst_26192);

return statearr_26256;
})();
var statearr_26257_26300 = state_26248__$1;
(statearr_26257_26300[(2)] = null);

(statearr_26257_26300[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (15))){
var state_26248__$1 = state_26248;
var statearr_26258_26301 = state_26248__$1;
(statearr_26258_26301[(2)] = null);

(statearr_26258_26301[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (21))){
var inst_26200 = (state_26248[(10)]);
var inst_26192 = inst_26200;
var state_26248__$1 = (function (){var statearr_26259 = state_26248;
(statearr_26259[(7)] = inst_26192);

return statearr_26259;
})();
var statearr_26260_26302 = state_26248__$1;
(statearr_26260_26302[(2)] = null);

(statearr_26260_26302[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (13))){
var inst_26244 = (state_26248[(2)]);
var state_26248__$1 = state_26248;
var statearr_26261_26303 = state_26248__$1;
(statearr_26261_26303[(2)] = inst_26244);

(statearr_26261_26303[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (22))){
var inst_26242 = (state_26248[(2)]);
var state_26248__$1 = state_26248;
var statearr_26262_26304 = state_26248__$1;
(statearr_26262_26304[(2)] = inst_26242);

(statearr_26262_26304[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (6))){
var inst_26246 = (state_26248[(2)]);
var state_26248__$1 = state_26248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26248__$1,inst_26246);
} else {
if((state_val_26249 === (25))){
var state_26248__$1 = state_26248;
var statearr_26263_26305 = state_26248__$1;
(statearr_26263_26305[(2)] = null);

(statearr_26263_26305[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (17))){
var inst_26222 = (state_26248[(14)]);
var state_26248__$1 = state_26248;
var statearr_26264_26306 = state_26248__$1;
(statearr_26264_26306[(2)] = inst_26222);

(statearr_26264_26306[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (3))){
var inst_26182 = (state_26248[(9)]);
var state_26248__$1 = state_26248;
var statearr_26265_26307 = state_26248__$1;
(statearr_26265_26307[(2)] = inst_26182);

(statearr_26265_26307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (12))){
var inst_26208 = (state_26248[(15)]);
var inst_26222 = (state_26248[(14)]);
var inst_26203 = (state_26248[(16)]);
var inst_26222__$1 = inst_26203.call(null,inst_26208);
var state_26248__$1 = (function (){var statearr_26266 = state_26248;
(statearr_26266[(14)] = inst_26222__$1);

return statearr_26266;
})();
if(cljs.core.truth_(inst_26222__$1)){
var statearr_26267_26308 = state_26248__$1;
(statearr_26267_26308[(1)] = (17));

} else {
var statearr_26268_26309 = state_26248__$1;
(statearr_26268_26309[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (2))){
var inst_26182 = (state_26248[(9)]);
var inst_26185 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26182);
var state_26248__$1 = state_26248;
var statearr_26269_26310 = state_26248__$1;
(statearr_26269_26310[(2)] = inst_26185);

(statearr_26269_26310[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (23))){
var inst_26233 = (state_26248[(2)]);
var state_26248__$1 = state_26248;
if(cljs.core.truth_(inst_26233)){
var statearr_26270_26311 = state_26248__$1;
(statearr_26270_26311[(1)] = (24));

} else {
var statearr_26271_26312 = state_26248__$1;
(statearr_26271_26312[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (19))){
var inst_26230 = (state_26248[(2)]);
var state_26248__$1 = state_26248;
if(cljs.core.truth_(inst_26230)){
var statearr_26272_26313 = state_26248__$1;
(statearr_26272_26313[(1)] = (20));

} else {
var statearr_26273_26314 = state_26248__$1;
(statearr_26273_26314[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (11))){
var inst_26207 = (state_26248[(8)]);
var inst_26213 = (inst_26207 == null);
var state_26248__$1 = state_26248;
if(cljs.core.truth_(inst_26213)){
var statearr_26274_26315 = state_26248__$1;
(statearr_26274_26315[(1)] = (14));

} else {
var statearr_26275_26316 = state_26248__$1;
(statearr_26275_26316[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (9))){
var inst_26200 = (state_26248[(10)]);
var inst_26200__$1 = (state_26248[(2)]);
var inst_26201 = cljs.core.get.call(null,inst_26200__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26202 = cljs.core.get.call(null,inst_26200__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26203 = cljs.core.get.call(null,inst_26200__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_26248__$1 = (function (){var statearr_26276 = state_26248;
(statearr_26276[(17)] = inst_26202);

(statearr_26276[(10)] = inst_26200__$1);

(statearr_26276[(16)] = inst_26203);

return statearr_26276;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26248__$1,(10),inst_26201);
} else {
if((state_val_26249 === (5))){
var inst_26192 = (state_26248[(7)]);
var inst_26195 = cljs.core.seq_QMARK_.call(null,inst_26192);
var state_26248__$1 = state_26248;
if(inst_26195){
var statearr_26277_26317 = state_26248__$1;
(statearr_26277_26317[(1)] = (7));

} else {
var statearr_26278_26318 = state_26248__$1;
(statearr_26278_26318[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (14))){
var inst_26208 = (state_26248[(15)]);
var inst_26215 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26208);
var state_26248__$1 = state_26248;
var statearr_26279_26319 = state_26248__$1;
(statearr_26279_26319[(2)] = inst_26215);

(statearr_26279_26319[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (26))){
var inst_26238 = (state_26248[(2)]);
var state_26248__$1 = state_26248;
var statearr_26280_26320 = state_26248__$1;
(statearr_26280_26320[(2)] = inst_26238);

(statearr_26280_26320[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (16))){
var inst_26218 = (state_26248[(2)]);
var inst_26219 = calc_state.call(null);
var inst_26192 = inst_26219;
var state_26248__$1 = (function (){var statearr_26281 = state_26248;
(statearr_26281[(18)] = inst_26218);

(statearr_26281[(7)] = inst_26192);

return statearr_26281;
})();
var statearr_26282_26321 = state_26248__$1;
(statearr_26282_26321[(2)] = null);

(statearr_26282_26321[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (10))){
var inst_26207 = (state_26248[(8)]);
var inst_26208 = (state_26248[(15)]);
var inst_26206 = (state_26248[(2)]);
var inst_26207__$1 = cljs.core.nth.call(null,inst_26206,(0),null);
var inst_26208__$1 = cljs.core.nth.call(null,inst_26206,(1),null);
var inst_26209 = (inst_26207__$1 == null);
var inst_26210 = cljs.core._EQ_.call(null,inst_26208__$1,change);
var inst_26211 = (inst_26209) || (inst_26210);
var state_26248__$1 = (function (){var statearr_26283 = state_26248;
(statearr_26283[(8)] = inst_26207__$1);

(statearr_26283[(15)] = inst_26208__$1);

return statearr_26283;
})();
if(cljs.core.truth_(inst_26211)){
var statearr_26284_26322 = state_26248__$1;
(statearr_26284_26322[(1)] = (11));

} else {
var statearr_26285_26323 = state_26248__$1;
(statearr_26285_26323[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (18))){
var inst_26202 = (state_26248[(17)]);
var inst_26208 = (state_26248[(15)]);
var inst_26203 = (state_26248[(16)]);
var inst_26225 = cljs.core.empty_QMARK_.call(null,inst_26203);
var inst_26226 = inst_26202.call(null,inst_26208);
var inst_26227 = cljs.core.not.call(null,inst_26226);
var inst_26228 = (inst_26225) && (inst_26227);
var state_26248__$1 = state_26248;
var statearr_26286_26324 = state_26248__$1;
(statearr_26286_26324[(2)] = inst_26228);

(statearr_26286_26324[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (8))){
var inst_26192 = (state_26248[(7)]);
var state_26248__$1 = state_26248;
var statearr_26287_26325 = state_26248__$1;
(statearr_26287_26325[(2)] = inst_26192);

(statearr_26287_26325[(1)] = (9));


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
});})(c__19775__auto___26295,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19719__auto__,c__19775__auto___26295,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19720__auto__ = null;
var cljs$core$async$mix_$_state_machine__19720__auto____0 = (function (){
var statearr_26291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26291[(0)] = cljs$core$async$mix_$_state_machine__19720__auto__);

(statearr_26291[(1)] = (1));

return statearr_26291;
});
var cljs$core$async$mix_$_state_machine__19720__auto____1 = (function (state_26248){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_26248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e26292){if((e26292 instanceof Object)){
var ex__19723__auto__ = e26292;
var statearr_26293_26326 = state_26248;
(statearr_26293_26326[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26327 = state_26248;
state_26248 = G__26327;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19720__auto__ = function(state_26248){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19720__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19720__auto____1.call(this,state_26248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19720__auto____0;
cljs$core$async$mix_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19720__auto____1;
return cljs$core$async$mix_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto___26295,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19777__auto__ = (function (){var statearr_26294 = f__19776__auto__.call(null);
(statearr_26294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___26295);

return statearr_26294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto___26295,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj26329 = {};
return obj26329;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__17582__auto__ = p;
if(and__17582__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__17582__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18238__auto__ = (((p == null))?null:p);
return (function (){var or__17594__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18238__auto__)]);
if(or__17594__auto__){
return or__17594__auto__;
} else {
var or__17594__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__17594__auto____$1){
return or__17594__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__17582__auto__ = p;
if(and__17582__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__17582__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18238__auto__ = (((p == null))?null:p);
return (function (){var or__17594__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18238__auto__)]);
if(or__17594__auto__){
return or__17594__auto__;
} else {
var or__17594__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__17594__auto____$1){
return or__17594__auto____$1;
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
if((function (){var and__17582__auto__ = p;
if(and__17582__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__17582__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18238__auto__ = (((p == null))?null:p);
return (function (){var or__17594__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18238__auto__)]);
if(or__17594__auto__){
return or__17594__auto__;
} else {
var or__17594__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17594__auto____$1){
return or__17594__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__17582__auto__ = p;
if(and__17582__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__17582__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18238__auto__ = (((p == null))?null:p);
return (function (){var or__17594__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18238__auto__)]);
if(or__17594__auto__){
return or__17594__auto__;
} else {
var or__17594__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17594__auto____$1){
return or__17594__auto____$1;
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
var or__17594__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17594__auto__)){
return or__17594__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17594__auto__,mults){
return (function (p1__26330_SHARP_){
if(cljs.core.truth_(p1__26330_SHARP_.call(null,topic))){
return p1__26330_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26330_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17594__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26453 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26453 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26454){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26454 = meta26454;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26453.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26453.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26453.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t26453.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t26453.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26453.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26453.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26453.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26455){
var self__ = this;
var _26455__$1 = this;
return self__.meta26454;
});})(mults,ensure_mult))
;

cljs.core.async.t26453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26455,meta26454__$1){
var self__ = this;
var _26455__$1 = this;
return (new cljs.core.async.t26453(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26454__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26453.cljs$lang$type = true;

cljs.core.async.t26453.cljs$lang$ctorStr = "cljs.core.async/t26453";

cljs.core.async.t26453.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18181__auto__,writer__18182__auto__,opt__18183__auto__){
return cljs.core._write.call(null,writer__18182__auto__,"cljs.core.async/t26453");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26453 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t26453(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26454){
return (new cljs.core.async.t26453(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26454));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26453(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19775__auto___26575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto___26575,mults,ensure_mult,p){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto___26575,mults,ensure_mult,p){
return (function (state_26527){
var state_val_26528 = (state_26527[(1)]);
if((state_val_26528 === (7))){
var inst_26523 = (state_26527[(2)]);
var state_26527__$1 = state_26527;
var statearr_26529_26576 = state_26527__$1;
(statearr_26529_26576[(2)] = inst_26523);

(statearr_26529_26576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (20))){
var state_26527__$1 = state_26527;
var statearr_26530_26577 = state_26527__$1;
(statearr_26530_26577[(2)] = null);

(statearr_26530_26577[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (1))){
var state_26527__$1 = state_26527;
var statearr_26531_26578 = state_26527__$1;
(statearr_26531_26578[(2)] = null);

(statearr_26531_26578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (24))){
var inst_26506 = (state_26527[(7)]);
var inst_26515 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26506);
var state_26527__$1 = state_26527;
var statearr_26532_26579 = state_26527__$1;
(statearr_26532_26579[(2)] = inst_26515);

(statearr_26532_26579[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (4))){
var inst_26458 = (state_26527[(8)]);
var inst_26458__$1 = (state_26527[(2)]);
var inst_26459 = (inst_26458__$1 == null);
var state_26527__$1 = (function (){var statearr_26533 = state_26527;
(statearr_26533[(8)] = inst_26458__$1);

return statearr_26533;
})();
if(cljs.core.truth_(inst_26459)){
var statearr_26534_26580 = state_26527__$1;
(statearr_26534_26580[(1)] = (5));

} else {
var statearr_26535_26581 = state_26527__$1;
(statearr_26535_26581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (15))){
var inst_26500 = (state_26527[(2)]);
var state_26527__$1 = state_26527;
var statearr_26536_26582 = state_26527__$1;
(statearr_26536_26582[(2)] = inst_26500);

(statearr_26536_26582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (21))){
var inst_26520 = (state_26527[(2)]);
var state_26527__$1 = (function (){var statearr_26537 = state_26527;
(statearr_26537[(9)] = inst_26520);

return statearr_26537;
})();
var statearr_26538_26583 = state_26527__$1;
(statearr_26538_26583[(2)] = null);

(statearr_26538_26583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (13))){
var inst_26482 = (state_26527[(10)]);
var inst_26484 = cljs.core.chunked_seq_QMARK_.call(null,inst_26482);
var state_26527__$1 = state_26527;
if(inst_26484){
var statearr_26539_26584 = state_26527__$1;
(statearr_26539_26584[(1)] = (16));

} else {
var statearr_26540_26585 = state_26527__$1;
(statearr_26540_26585[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (22))){
var inst_26512 = (state_26527[(2)]);
var state_26527__$1 = state_26527;
if(cljs.core.truth_(inst_26512)){
var statearr_26541_26586 = state_26527__$1;
(statearr_26541_26586[(1)] = (23));

} else {
var statearr_26542_26587 = state_26527__$1;
(statearr_26542_26587[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (6))){
var inst_26506 = (state_26527[(7)]);
var inst_26458 = (state_26527[(8)]);
var inst_26508 = (state_26527[(11)]);
var inst_26506__$1 = topic_fn.call(null,inst_26458);
var inst_26507 = cljs.core.deref.call(null,mults);
var inst_26508__$1 = cljs.core.get.call(null,inst_26507,inst_26506__$1);
var state_26527__$1 = (function (){var statearr_26543 = state_26527;
(statearr_26543[(7)] = inst_26506__$1);

(statearr_26543[(11)] = inst_26508__$1);

return statearr_26543;
})();
if(cljs.core.truth_(inst_26508__$1)){
var statearr_26544_26588 = state_26527__$1;
(statearr_26544_26588[(1)] = (19));

} else {
var statearr_26545_26589 = state_26527__$1;
(statearr_26545_26589[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (25))){
var inst_26517 = (state_26527[(2)]);
var state_26527__$1 = state_26527;
var statearr_26546_26590 = state_26527__$1;
(statearr_26546_26590[(2)] = inst_26517);

(statearr_26546_26590[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (17))){
var inst_26482 = (state_26527[(10)]);
var inst_26491 = cljs.core.first.call(null,inst_26482);
var inst_26492 = cljs.core.async.muxch_STAR_.call(null,inst_26491);
var inst_26493 = cljs.core.async.close_BANG_.call(null,inst_26492);
var inst_26494 = cljs.core.next.call(null,inst_26482);
var inst_26468 = inst_26494;
var inst_26469 = null;
var inst_26470 = (0);
var inst_26471 = (0);
var state_26527__$1 = (function (){var statearr_26547 = state_26527;
(statearr_26547[(12)] = inst_26469);

(statearr_26547[(13)] = inst_26493);

(statearr_26547[(14)] = inst_26470);

(statearr_26547[(15)] = inst_26468);

(statearr_26547[(16)] = inst_26471);

return statearr_26547;
})();
var statearr_26548_26591 = state_26527__$1;
(statearr_26548_26591[(2)] = null);

(statearr_26548_26591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (3))){
var inst_26525 = (state_26527[(2)]);
var state_26527__$1 = state_26527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26527__$1,inst_26525);
} else {
if((state_val_26528 === (12))){
var inst_26502 = (state_26527[(2)]);
var state_26527__$1 = state_26527;
var statearr_26549_26592 = state_26527__$1;
(statearr_26549_26592[(2)] = inst_26502);

(statearr_26549_26592[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (2))){
var state_26527__$1 = state_26527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26527__$1,(4),ch);
} else {
if((state_val_26528 === (23))){
var state_26527__$1 = state_26527;
var statearr_26550_26593 = state_26527__$1;
(statearr_26550_26593[(2)] = null);

(statearr_26550_26593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (19))){
var inst_26458 = (state_26527[(8)]);
var inst_26508 = (state_26527[(11)]);
var inst_26510 = cljs.core.async.muxch_STAR_.call(null,inst_26508);
var state_26527__$1 = state_26527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26527__$1,(22),inst_26510,inst_26458);
} else {
if((state_val_26528 === (11))){
var inst_26468 = (state_26527[(15)]);
var inst_26482 = (state_26527[(10)]);
var inst_26482__$1 = cljs.core.seq.call(null,inst_26468);
var state_26527__$1 = (function (){var statearr_26551 = state_26527;
(statearr_26551[(10)] = inst_26482__$1);

return statearr_26551;
})();
if(inst_26482__$1){
var statearr_26552_26594 = state_26527__$1;
(statearr_26552_26594[(1)] = (13));

} else {
var statearr_26553_26595 = state_26527__$1;
(statearr_26553_26595[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (9))){
var inst_26504 = (state_26527[(2)]);
var state_26527__$1 = state_26527;
var statearr_26554_26596 = state_26527__$1;
(statearr_26554_26596[(2)] = inst_26504);

(statearr_26554_26596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (5))){
var inst_26465 = cljs.core.deref.call(null,mults);
var inst_26466 = cljs.core.vals.call(null,inst_26465);
var inst_26467 = cljs.core.seq.call(null,inst_26466);
var inst_26468 = inst_26467;
var inst_26469 = null;
var inst_26470 = (0);
var inst_26471 = (0);
var state_26527__$1 = (function (){var statearr_26555 = state_26527;
(statearr_26555[(12)] = inst_26469);

(statearr_26555[(14)] = inst_26470);

(statearr_26555[(15)] = inst_26468);

(statearr_26555[(16)] = inst_26471);

return statearr_26555;
})();
var statearr_26556_26597 = state_26527__$1;
(statearr_26556_26597[(2)] = null);

(statearr_26556_26597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (14))){
var state_26527__$1 = state_26527;
var statearr_26560_26598 = state_26527__$1;
(statearr_26560_26598[(2)] = null);

(statearr_26560_26598[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (16))){
var inst_26482 = (state_26527[(10)]);
var inst_26486 = cljs.core.chunk_first.call(null,inst_26482);
var inst_26487 = cljs.core.chunk_rest.call(null,inst_26482);
var inst_26488 = cljs.core.count.call(null,inst_26486);
var inst_26468 = inst_26487;
var inst_26469 = inst_26486;
var inst_26470 = inst_26488;
var inst_26471 = (0);
var state_26527__$1 = (function (){var statearr_26561 = state_26527;
(statearr_26561[(12)] = inst_26469);

(statearr_26561[(14)] = inst_26470);

(statearr_26561[(15)] = inst_26468);

(statearr_26561[(16)] = inst_26471);

return statearr_26561;
})();
var statearr_26562_26599 = state_26527__$1;
(statearr_26562_26599[(2)] = null);

(statearr_26562_26599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (10))){
var inst_26469 = (state_26527[(12)]);
var inst_26470 = (state_26527[(14)]);
var inst_26468 = (state_26527[(15)]);
var inst_26471 = (state_26527[(16)]);
var inst_26476 = cljs.core._nth.call(null,inst_26469,inst_26471);
var inst_26477 = cljs.core.async.muxch_STAR_.call(null,inst_26476);
var inst_26478 = cljs.core.async.close_BANG_.call(null,inst_26477);
var inst_26479 = (inst_26471 + (1));
var tmp26557 = inst_26469;
var tmp26558 = inst_26470;
var tmp26559 = inst_26468;
var inst_26468__$1 = tmp26559;
var inst_26469__$1 = tmp26557;
var inst_26470__$1 = tmp26558;
var inst_26471__$1 = inst_26479;
var state_26527__$1 = (function (){var statearr_26563 = state_26527;
(statearr_26563[(12)] = inst_26469__$1);

(statearr_26563[(14)] = inst_26470__$1);

(statearr_26563[(17)] = inst_26478);

(statearr_26563[(15)] = inst_26468__$1);

(statearr_26563[(16)] = inst_26471__$1);

return statearr_26563;
})();
var statearr_26564_26600 = state_26527__$1;
(statearr_26564_26600[(2)] = null);

(statearr_26564_26600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (18))){
var inst_26497 = (state_26527[(2)]);
var state_26527__$1 = state_26527;
var statearr_26565_26601 = state_26527__$1;
(statearr_26565_26601[(2)] = inst_26497);

(statearr_26565_26601[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (8))){
var inst_26470 = (state_26527[(14)]);
var inst_26471 = (state_26527[(16)]);
var inst_26473 = (inst_26471 < inst_26470);
var inst_26474 = inst_26473;
var state_26527__$1 = state_26527;
if(cljs.core.truth_(inst_26474)){
var statearr_26566_26602 = state_26527__$1;
(statearr_26566_26602[(1)] = (10));

} else {
var statearr_26567_26603 = state_26527__$1;
(statearr_26567_26603[(1)] = (11));

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
});})(c__19775__auto___26575,mults,ensure_mult,p))
;
return ((function (switch__19719__auto__,c__19775__auto___26575,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__19720__auto__ = null;
var cljs$core$async$pub_$_state_machine__19720__auto____0 = (function (){
var statearr_26571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26571[(0)] = cljs$core$async$pub_$_state_machine__19720__auto__);

(statearr_26571[(1)] = (1));

return statearr_26571;
});
var cljs$core$async$pub_$_state_machine__19720__auto____1 = (function (state_26527){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_26527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e26572){if((e26572 instanceof Object)){
var ex__19723__auto__ = e26572;
var statearr_26573_26604 = state_26527;
(statearr_26573_26604[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26605 = state_26527;
state_26527 = G__26605;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__19720__auto__ = function(state_26527){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__19720__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__19720__auto____1.call(this,state_26527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__19720__auto____0;
cljs$core$async$pub_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__19720__auto____1;
return cljs$core$async$pub_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto___26575,mults,ensure_mult,p))
})();
var state__19777__auto__ = (function (){var statearr_26574 = f__19776__auto__.call(null);
(statearr_26574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___26575);

return statearr_26574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto___26575,mults,ensure_mult,p))
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
var c__19775__auto___26742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto___26742,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto___26742,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26712){
var state_val_26713 = (state_26712[(1)]);
if((state_val_26713 === (7))){
var state_26712__$1 = state_26712;
var statearr_26714_26743 = state_26712__$1;
(statearr_26714_26743[(2)] = null);

(statearr_26714_26743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (1))){
var state_26712__$1 = state_26712;
var statearr_26715_26744 = state_26712__$1;
(statearr_26715_26744[(2)] = null);

(statearr_26715_26744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (4))){
var inst_26676 = (state_26712[(7)]);
var inst_26678 = (inst_26676 < cnt);
var state_26712__$1 = state_26712;
if(cljs.core.truth_(inst_26678)){
var statearr_26716_26745 = state_26712__$1;
(statearr_26716_26745[(1)] = (6));

} else {
var statearr_26717_26746 = state_26712__$1;
(statearr_26717_26746[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (15))){
var inst_26708 = (state_26712[(2)]);
var state_26712__$1 = state_26712;
var statearr_26718_26747 = state_26712__$1;
(statearr_26718_26747[(2)] = inst_26708);

(statearr_26718_26747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (13))){
var inst_26701 = cljs.core.async.close_BANG_.call(null,out);
var state_26712__$1 = state_26712;
var statearr_26719_26748 = state_26712__$1;
(statearr_26719_26748[(2)] = inst_26701);

(statearr_26719_26748[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (6))){
var state_26712__$1 = state_26712;
var statearr_26720_26749 = state_26712__$1;
(statearr_26720_26749[(2)] = null);

(statearr_26720_26749[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (3))){
var inst_26710 = (state_26712[(2)]);
var state_26712__$1 = state_26712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26712__$1,inst_26710);
} else {
if((state_val_26713 === (12))){
var inst_26698 = (state_26712[(8)]);
var inst_26698__$1 = (state_26712[(2)]);
var inst_26699 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26698__$1);
var state_26712__$1 = (function (){var statearr_26721 = state_26712;
(statearr_26721[(8)] = inst_26698__$1);

return statearr_26721;
})();
if(cljs.core.truth_(inst_26699)){
var statearr_26722_26750 = state_26712__$1;
(statearr_26722_26750[(1)] = (13));

} else {
var statearr_26723_26751 = state_26712__$1;
(statearr_26723_26751[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (2))){
var inst_26675 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26676 = (0);
var state_26712__$1 = (function (){var statearr_26724 = state_26712;
(statearr_26724[(9)] = inst_26675);

(statearr_26724[(7)] = inst_26676);

return statearr_26724;
})();
var statearr_26725_26752 = state_26712__$1;
(statearr_26725_26752[(2)] = null);

(statearr_26725_26752[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (11))){
var inst_26676 = (state_26712[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26712,(10),Object,null,(9));
var inst_26685 = chs__$1.call(null,inst_26676);
var inst_26686 = done.call(null,inst_26676);
var inst_26687 = cljs.core.async.take_BANG_.call(null,inst_26685,inst_26686);
var state_26712__$1 = state_26712;
var statearr_26726_26753 = state_26712__$1;
(statearr_26726_26753[(2)] = inst_26687);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26712__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (9))){
var inst_26676 = (state_26712[(7)]);
var inst_26689 = (state_26712[(2)]);
var inst_26690 = (inst_26676 + (1));
var inst_26676__$1 = inst_26690;
var state_26712__$1 = (function (){var statearr_26727 = state_26712;
(statearr_26727[(7)] = inst_26676__$1);

(statearr_26727[(10)] = inst_26689);

return statearr_26727;
})();
var statearr_26728_26754 = state_26712__$1;
(statearr_26728_26754[(2)] = null);

(statearr_26728_26754[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (5))){
var inst_26696 = (state_26712[(2)]);
var state_26712__$1 = (function (){var statearr_26729 = state_26712;
(statearr_26729[(11)] = inst_26696);

return statearr_26729;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26712__$1,(12),dchan);
} else {
if((state_val_26713 === (14))){
var inst_26698 = (state_26712[(8)]);
var inst_26703 = cljs.core.apply.call(null,f,inst_26698);
var state_26712__$1 = state_26712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26712__$1,(16),out,inst_26703);
} else {
if((state_val_26713 === (16))){
var inst_26705 = (state_26712[(2)]);
var state_26712__$1 = (function (){var statearr_26730 = state_26712;
(statearr_26730[(12)] = inst_26705);

return statearr_26730;
})();
var statearr_26731_26755 = state_26712__$1;
(statearr_26731_26755[(2)] = null);

(statearr_26731_26755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (10))){
var inst_26680 = (state_26712[(2)]);
var inst_26681 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26712__$1 = (function (){var statearr_26732 = state_26712;
(statearr_26732[(13)] = inst_26680);

return statearr_26732;
})();
var statearr_26733_26756 = state_26712__$1;
(statearr_26733_26756[(2)] = inst_26681);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26712__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (8))){
var inst_26694 = (state_26712[(2)]);
var state_26712__$1 = state_26712;
var statearr_26734_26757 = state_26712__$1;
(statearr_26734_26757[(2)] = inst_26694);

(statearr_26734_26757[(1)] = (5));


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
});})(c__19775__auto___26742,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19719__auto__,c__19775__auto___26742,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__19720__auto__ = null;
var cljs$core$async$map_$_state_machine__19720__auto____0 = (function (){
var statearr_26738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26738[(0)] = cljs$core$async$map_$_state_machine__19720__auto__);

(statearr_26738[(1)] = (1));

return statearr_26738;
});
var cljs$core$async$map_$_state_machine__19720__auto____1 = (function (state_26712){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_26712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e26739){if((e26739 instanceof Object)){
var ex__19723__auto__ = e26739;
var statearr_26740_26758 = state_26712;
(statearr_26740_26758[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26759 = state_26712;
state_26712 = G__26759;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__19720__auto__ = function(state_26712){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__19720__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__19720__auto____1.call(this,state_26712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__19720__auto____0;
cljs$core$async$map_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__19720__auto____1;
return cljs$core$async$map_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto___26742,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19777__auto__ = (function (){var statearr_26741 = f__19776__auto__.call(null);
(statearr_26741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___26742);

return statearr_26741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto___26742,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__19775__auto___26867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto___26867,out){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto___26867,out){
return (function (state_26843){
var state_val_26844 = (state_26843[(1)]);
if((state_val_26844 === (7))){
var inst_26823 = (state_26843[(7)]);
var inst_26822 = (state_26843[(8)]);
var inst_26822__$1 = (state_26843[(2)]);
var inst_26823__$1 = cljs.core.nth.call(null,inst_26822__$1,(0),null);
var inst_26824 = cljs.core.nth.call(null,inst_26822__$1,(1),null);
var inst_26825 = (inst_26823__$1 == null);
var state_26843__$1 = (function (){var statearr_26845 = state_26843;
(statearr_26845[(7)] = inst_26823__$1);

(statearr_26845[(8)] = inst_26822__$1);

(statearr_26845[(9)] = inst_26824);

return statearr_26845;
})();
if(cljs.core.truth_(inst_26825)){
var statearr_26846_26868 = state_26843__$1;
(statearr_26846_26868[(1)] = (8));

} else {
var statearr_26847_26869 = state_26843__$1;
(statearr_26847_26869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26844 === (1))){
var inst_26814 = cljs.core.vec.call(null,chs);
var inst_26815 = inst_26814;
var state_26843__$1 = (function (){var statearr_26848 = state_26843;
(statearr_26848[(10)] = inst_26815);

return statearr_26848;
})();
var statearr_26849_26870 = state_26843__$1;
(statearr_26849_26870[(2)] = null);

(statearr_26849_26870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26844 === (4))){
var inst_26815 = (state_26843[(10)]);
var state_26843__$1 = state_26843;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26843__$1,(7),inst_26815);
} else {
if((state_val_26844 === (6))){
var inst_26839 = (state_26843[(2)]);
var state_26843__$1 = state_26843;
var statearr_26850_26871 = state_26843__$1;
(statearr_26850_26871[(2)] = inst_26839);

(statearr_26850_26871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26844 === (3))){
var inst_26841 = (state_26843[(2)]);
var state_26843__$1 = state_26843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26843__$1,inst_26841);
} else {
if((state_val_26844 === (2))){
var inst_26815 = (state_26843[(10)]);
var inst_26817 = cljs.core.count.call(null,inst_26815);
var inst_26818 = (inst_26817 > (0));
var state_26843__$1 = state_26843;
if(cljs.core.truth_(inst_26818)){
var statearr_26852_26872 = state_26843__$1;
(statearr_26852_26872[(1)] = (4));

} else {
var statearr_26853_26873 = state_26843__$1;
(statearr_26853_26873[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26844 === (11))){
var inst_26815 = (state_26843[(10)]);
var inst_26832 = (state_26843[(2)]);
var tmp26851 = inst_26815;
var inst_26815__$1 = tmp26851;
var state_26843__$1 = (function (){var statearr_26854 = state_26843;
(statearr_26854[(11)] = inst_26832);

(statearr_26854[(10)] = inst_26815__$1);

return statearr_26854;
})();
var statearr_26855_26874 = state_26843__$1;
(statearr_26855_26874[(2)] = null);

(statearr_26855_26874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26844 === (9))){
var inst_26823 = (state_26843[(7)]);
var state_26843__$1 = state_26843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26843__$1,(11),out,inst_26823);
} else {
if((state_val_26844 === (5))){
var inst_26837 = cljs.core.async.close_BANG_.call(null,out);
var state_26843__$1 = state_26843;
var statearr_26856_26875 = state_26843__$1;
(statearr_26856_26875[(2)] = inst_26837);

(statearr_26856_26875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26844 === (10))){
var inst_26835 = (state_26843[(2)]);
var state_26843__$1 = state_26843;
var statearr_26857_26876 = state_26843__$1;
(statearr_26857_26876[(2)] = inst_26835);

(statearr_26857_26876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26844 === (8))){
var inst_26823 = (state_26843[(7)]);
var inst_26815 = (state_26843[(10)]);
var inst_26822 = (state_26843[(8)]);
var inst_26824 = (state_26843[(9)]);
var inst_26827 = (function (){var c = inst_26824;
var v = inst_26823;
var vec__26820 = inst_26822;
var cs = inst_26815;
return ((function (c,v,vec__26820,cs,inst_26823,inst_26815,inst_26822,inst_26824,state_val_26844,c__19775__auto___26867,out){
return (function (p1__26760_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26760_SHARP_);
});
;})(c,v,vec__26820,cs,inst_26823,inst_26815,inst_26822,inst_26824,state_val_26844,c__19775__auto___26867,out))
})();
var inst_26828 = cljs.core.filterv.call(null,inst_26827,inst_26815);
var inst_26815__$1 = inst_26828;
var state_26843__$1 = (function (){var statearr_26858 = state_26843;
(statearr_26858[(10)] = inst_26815__$1);

return statearr_26858;
})();
var statearr_26859_26877 = state_26843__$1;
(statearr_26859_26877[(2)] = null);

(statearr_26859_26877[(1)] = (2));


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
});})(c__19775__auto___26867,out))
;
return ((function (switch__19719__auto__,c__19775__auto___26867,out){
return (function() {
var cljs$core$async$merge_$_state_machine__19720__auto__ = null;
var cljs$core$async$merge_$_state_machine__19720__auto____0 = (function (){
var statearr_26863 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26863[(0)] = cljs$core$async$merge_$_state_machine__19720__auto__);

(statearr_26863[(1)] = (1));

return statearr_26863;
});
var cljs$core$async$merge_$_state_machine__19720__auto____1 = (function (state_26843){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_26843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e26864){if((e26864 instanceof Object)){
var ex__19723__auto__ = e26864;
var statearr_26865_26878 = state_26843;
(statearr_26865_26878[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26879 = state_26843;
state_26843 = G__26879;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__19720__auto__ = function(state_26843){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__19720__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__19720__auto____1.call(this,state_26843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__19720__auto____0;
cljs$core$async$merge_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__19720__auto____1;
return cljs$core$async$merge_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto___26867,out))
})();
var state__19777__auto__ = (function (){var statearr_26866 = f__19776__auto__.call(null);
(statearr_26866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___26867);

return statearr_26866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto___26867,out))
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
var c__19775__auto___26972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto___26972,out){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto___26972,out){
return (function (state_26949){
var state_val_26950 = (state_26949[(1)]);
if((state_val_26950 === (7))){
var inst_26931 = (state_26949[(7)]);
var inst_26931__$1 = (state_26949[(2)]);
var inst_26932 = (inst_26931__$1 == null);
var inst_26933 = cljs.core.not.call(null,inst_26932);
var state_26949__$1 = (function (){var statearr_26951 = state_26949;
(statearr_26951[(7)] = inst_26931__$1);

return statearr_26951;
})();
if(inst_26933){
var statearr_26952_26973 = state_26949__$1;
(statearr_26952_26973[(1)] = (8));

} else {
var statearr_26953_26974 = state_26949__$1;
(statearr_26953_26974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26950 === (1))){
var inst_26926 = (0);
var state_26949__$1 = (function (){var statearr_26954 = state_26949;
(statearr_26954[(8)] = inst_26926);

return statearr_26954;
})();
var statearr_26955_26975 = state_26949__$1;
(statearr_26955_26975[(2)] = null);

(statearr_26955_26975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26950 === (4))){
var state_26949__$1 = state_26949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26949__$1,(7),ch);
} else {
if((state_val_26950 === (6))){
var inst_26944 = (state_26949[(2)]);
var state_26949__$1 = state_26949;
var statearr_26956_26976 = state_26949__$1;
(statearr_26956_26976[(2)] = inst_26944);

(statearr_26956_26976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26950 === (3))){
var inst_26946 = (state_26949[(2)]);
var inst_26947 = cljs.core.async.close_BANG_.call(null,out);
var state_26949__$1 = (function (){var statearr_26957 = state_26949;
(statearr_26957[(9)] = inst_26946);

return statearr_26957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26949__$1,inst_26947);
} else {
if((state_val_26950 === (2))){
var inst_26926 = (state_26949[(8)]);
var inst_26928 = (inst_26926 < n);
var state_26949__$1 = state_26949;
if(cljs.core.truth_(inst_26928)){
var statearr_26958_26977 = state_26949__$1;
(statearr_26958_26977[(1)] = (4));

} else {
var statearr_26959_26978 = state_26949__$1;
(statearr_26959_26978[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26950 === (11))){
var inst_26926 = (state_26949[(8)]);
var inst_26936 = (state_26949[(2)]);
var inst_26937 = (inst_26926 + (1));
var inst_26926__$1 = inst_26937;
var state_26949__$1 = (function (){var statearr_26960 = state_26949;
(statearr_26960[(8)] = inst_26926__$1);

(statearr_26960[(10)] = inst_26936);

return statearr_26960;
})();
var statearr_26961_26979 = state_26949__$1;
(statearr_26961_26979[(2)] = null);

(statearr_26961_26979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26950 === (9))){
var state_26949__$1 = state_26949;
var statearr_26962_26980 = state_26949__$1;
(statearr_26962_26980[(2)] = null);

(statearr_26962_26980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26950 === (5))){
var state_26949__$1 = state_26949;
var statearr_26963_26981 = state_26949__$1;
(statearr_26963_26981[(2)] = null);

(statearr_26963_26981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26950 === (10))){
var inst_26941 = (state_26949[(2)]);
var state_26949__$1 = state_26949;
var statearr_26964_26982 = state_26949__$1;
(statearr_26964_26982[(2)] = inst_26941);

(statearr_26964_26982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26950 === (8))){
var inst_26931 = (state_26949[(7)]);
var state_26949__$1 = state_26949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26949__$1,(11),out,inst_26931);
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
});})(c__19775__auto___26972,out))
;
return ((function (switch__19719__auto__,c__19775__auto___26972,out){
return (function() {
var cljs$core$async$take_$_state_machine__19720__auto__ = null;
var cljs$core$async$take_$_state_machine__19720__auto____0 = (function (){
var statearr_26968 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26968[(0)] = cljs$core$async$take_$_state_machine__19720__auto__);

(statearr_26968[(1)] = (1));

return statearr_26968;
});
var cljs$core$async$take_$_state_machine__19720__auto____1 = (function (state_26949){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_26949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e26969){if((e26969 instanceof Object)){
var ex__19723__auto__ = e26969;
var statearr_26970_26983 = state_26949;
(statearr_26970_26983[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26984 = state_26949;
state_26949 = G__26984;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__19720__auto__ = function(state_26949){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__19720__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__19720__auto____1.call(this,state_26949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__19720__auto____0;
cljs$core$async$take_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__19720__auto____1;
return cljs$core$async$take_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto___26972,out))
})();
var state__19777__auto__ = (function (){var statearr_26971 = f__19776__auto__.call(null);
(statearr_26971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___26972);

return statearr_26971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto___26972,out))
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
if(typeof cljs.core.async.t26992 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26992 = (function (ch,f,map_LT_,meta26993){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26993 = meta26993;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26992.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26992.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t26992.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26992.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t26995 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26995 = (function (fn1,_,meta26993,map_LT_,f,ch,meta26996){
this.fn1 = fn1;
this._ = _;
this.meta26993 = meta26993;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26996 = meta26996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26995.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t26995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26985_SHARP_){
return f1.call(null,(((p1__26985_SHARP_ == null))?null:self__.f.call(null,p1__26985_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t26995.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26997){
var self__ = this;
var _26997__$1 = this;
return self__.meta26996;
});})(___$1))
;

cljs.core.async.t26995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26997,meta26996__$1){
var self__ = this;
var _26997__$1 = this;
return (new cljs.core.async.t26995(self__.fn1,self__._,self__.meta26993,self__.map_LT_,self__.f,self__.ch,meta26996__$1));
});})(___$1))
;

cljs.core.async.t26995.cljs$lang$type = true;

cljs.core.async.t26995.cljs$lang$ctorStr = "cljs.core.async/t26995";

cljs.core.async.t26995.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18181__auto__,writer__18182__auto__,opt__18183__auto__){
return cljs.core._write.call(null,writer__18182__auto__,"cljs.core.async/t26995");
});})(___$1))
;

cljs.core.async.__GT_t26995 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t26995(fn1__$1,___$2,meta26993__$1,map_LT___$1,f__$1,ch__$1,meta26996){
return (new cljs.core.async.t26995(fn1__$1,___$2,meta26993__$1,map_LT___$1,f__$1,ch__$1,meta26996));
});})(___$1))
;

}

return (new cljs.core.async.t26995(fn1,___$1,self__.meta26993,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17582__auto__ = ret;
if(cljs.core.truth_(and__17582__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17582__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t26992.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26992.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26992.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26994){
var self__ = this;
var _26994__$1 = this;
return self__.meta26993;
});

cljs.core.async.t26992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26994,meta26993__$1){
var self__ = this;
var _26994__$1 = this;
return (new cljs.core.async.t26992(self__.ch,self__.f,self__.map_LT_,meta26993__$1));
});

cljs.core.async.t26992.cljs$lang$type = true;

cljs.core.async.t26992.cljs$lang$ctorStr = "cljs.core.async/t26992";

cljs.core.async.t26992.cljs$lang$ctorPrWriter = (function (this__18181__auto__,writer__18182__auto__,opt__18183__auto__){
return cljs.core._write.call(null,writer__18182__auto__,"cljs.core.async/t26992");
});

cljs.core.async.__GT_t26992 = (function cljs$core$async$map_LT__$___GT_t26992(ch__$1,f__$1,map_LT___$1,meta26993){
return (new cljs.core.async.t26992(ch__$1,f__$1,map_LT___$1,meta26993));
});

}

return (new cljs.core.async.t26992(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27001 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27001 = (function (ch,f,map_GT_,meta27002){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27002 = meta27002;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27001.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27001.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27001.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27001.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27001.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27001.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27003){
var self__ = this;
var _27003__$1 = this;
return self__.meta27002;
});

cljs.core.async.t27001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27003,meta27002__$1){
var self__ = this;
var _27003__$1 = this;
return (new cljs.core.async.t27001(self__.ch,self__.f,self__.map_GT_,meta27002__$1));
});

cljs.core.async.t27001.cljs$lang$type = true;

cljs.core.async.t27001.cljs$lang$ctorStr = "cljs.core.async/t27001";

cljs.core.async.t27001.cljs$lang$ctorPrWriter = (function (this__18181__auto__,writer__18182__auto__,opt__18183__auto__){
return cljs.core._write.call(null,writer__18182__auto__,"cljs.core.async/t27001");
});

cljs.core.async.__GT_t27001 = (function cljs$core$async$map_GT__$___GT_t27001(ch__$1,f__$1,map_GT___$1,meta27002){
return (new cljs.core.async.t27001(ch__$1,f__$1,map_GT___$1,meta27002));
});

}

return (new cljs.core.async.t27001(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27007 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27007 = (function (ch,p,filter_GT_,meta27008){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27008 = meta27008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27007.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27007.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27007.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27007.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27007.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27007.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27007.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27009){
var self__ = this;
var _27009__$1 = this;
return self__.meta27008;
});

cljs.core.async.t27007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27009,meta27008__$1){
var self__ = this;
var _27009__$1 = this;
return (new cljs.core.async.t27007(self__.ch,self__.p,self__.filter_GT_,meta27008__$1));
});

cljs.core.async.t27007.cljs$lang$type = true;

cljs.core.async.t27007.cljs$lang$ctorStr = "cljs.core.async/t27007";

cljs.core.async.t27007.cljs$lang$ctorPrWriter = (function (this__18181__auto__,writer__18182__auto__,opt__18183__auto__){
return cljs.core._write.call(null,writer__18182__auto__,"cljs.core.async/t27007");
});

cljs.core.async.__GT_t27007 = (function cljs$core$async$filter_GT__$___GT_t27007(ch__$1,p__$1,filter_GT___$1,meta27008){
return (new cljs.core.async.t27007(ch__$1,p__$1,filter_GT___$1,meta27008));
});

}

return (new cljs.core.async.t27007(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19775__auto___27092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto___27092,out){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto___27092,out){
return (function (state_27071){
var state_val_27072 = (state_27071[(1)]);
if((state_val_27072 === (7))){
var inst_27067 = (state_27071[(2)]);
var state_27071__$1 = state_27071;
var statearr_27073_27093 = state_27071__$1;
(statearr_27073_27093[(2)] = inst_27067);

(statearr_27073_27093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27072 === (1))){
var state_27071__$1 = state_27071;
var statearr_27074_27094 = state_27071__$1;
(statearr_27074_27094[(2)] = null);

(statearr_27074_27094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27072 === (4))){
var inst_27053 = (state_27071[(7)]);
var inst_27053__$1 = (state_27071[(2)]);
var inst_27054 = (inst_27053__$1 == null);
var state_27071__$1 = (function (){var statearr_27075 = state_27071;
(statearr_27075[(7)] = inst_27053__$1);

return statearr_27075;
})();
if(cljs.core.truth_(inst_27054)){
var statearr_27076_27095 = state_27071__$1;
(statearr_27076_27095[(1)] = (5));

} else {
var statearr_27077_27096 = state_27071__$1;
(statearr_27077_27096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27072 === (6))){
var inst_27053 = (state_27071[(7)]);
var inst_27058 = p.call(null,inst_27053);
var state_27071__$1 = state_27071;
if(cljs.core.truth_(inst_27058)){
var statearr_27078_27097 = state_27071__$1;
(statearr_27078_27097[(1)] = (8));

} else {
var statearr_27079_27098 = state_27071__$1;
(statearr_27079_27098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27072 === (3))){
var inst_27069 = (state_27071[(2)]);
var state_27071__$1 = state_27071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27071__$1,inst_27069);
} else {
if((state_val_27072 === (2))){
var state_27071__$1 = state_27071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27071__$1,(4),ch);
} else {
if((state_val_27072 === (11))){
var inst_27061 = (state_27071[(2)]);
var state_27071__$1 = state_27071;
var statearr_27080_27099 = state_27071__$1;
(statearr_27080_27099[(2)] = inst_27061);

(statearr_27080_27099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27072 === (9))){
var state_27071__$1 = state_27071;
var statearr_27081_27100 = state_27071__$1;
(statearr_27081_27100[(2)] = null);

(statearr_27081_27100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27072 === (5))){
var inst_27056 = cljs.core.async.close_BANG_.call(null,out);
var state_27071__$1 = state_27071;
var statearr_27082_27101 = state_27071__$1;
(statearr_27082_27101[(2)] = inst_27056);

(statearr_27082_27101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27072 === (10))){
var inst_27064 = (state_27071[(2)]);
var state_27071__$1 = (function (){var statearr_27083 = state_27071;
(statearr_27083[(8)] = inst_27064);

return statearr_27083;
})();
var statearr_27084_27102 = state_27071__$1;
(statearr_27084_27102[(2)] = null);

(statearr_27084_27102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27072 === (8))){
var inst_27053 = (state_27071[(7)]);
var state_27071__$1 = state_27071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27071__$1,(11),out,inst_27053);
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
});})(c__19775__auto___27092,out))
;
return ((function (switch__19719__auto__,c__19775__auto___27092,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__19720__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__19720__auto____0 = (function (){
var statearr_27088 = [null,null,null,null,null,null,null,null,null];
(statearr_27088[(0)] = cljs$core$async$filter_LT__$_state_machine__19720__auto__);

(statearr_27088[(1)] = (1));

return statearr_27088;
});
var cljs$core$async$filter_LT__$_state_machine__19720__auto____1 = (function (state_27071){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_27071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e27089){if((e27089 instanceof Object)){
var ex__19723__auto__ = e27089;
var statearr_27090_27103 = state_27071;
(statearr_27090_27103[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27104 = state_27071;
state_27071 = G__27104;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__19720__auto__ = function(state_27071){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__19720__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__19720__auto____1.call(this,state_27071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__19720__auto____0;
cljs$core$async$filter_LT__$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__19720__auto____1;
return cljs$core$async$filter_LT__$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto___27092,out))
})();
var state__19777__auto__ = (function (){var statearr_27091 = f__19776__auto__.call(null);
(statearr_27091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___27092);

return statearr_27091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto___27092,out))
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
var c__19775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto__){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto__){
return (function (state_27270){
var state_val_27271 = (state_27270[(1)]);
if((state_val_27271 === (7))){
var inst_27266 = (state_27270[(2)]);
var state_27270__$1 = state_27270;
var statearr_27272_27313 = state_27270__$1;
(statearr_27272_27313[(2)] = inst_27266);

(statearr_27272_27313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (20))){
var inst_27236 = (state_27270[(7)]);
var inst_27247 = (state_27270[(2)]);
var inst_27248 = cljs.core.next.call(null,inst_27236);
var inst_27222 = inst_27248;
var inst_27223 = null;
var inst_27224 = (0);
var inst_27225 = (0);
var state_27270__$1 = (function (){var statearr_27273 = state_27270;
(statearr_27273[(8)] = inst_27224);

(statearr_27273[(9)] = inst_27222);

(statearr_27273[(10)] = inst_27223);

(statearr_27273[(11)] = inst_27225);

(statearr_27273[(12)] = inst_27247);

return statearr_27273;
})();
var statearr_27274_27314 = state_27270__$1;
(statearr_27274_27314[(2)] = null);

(statearr_27274_27314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (1))){
var state_27270__$1 = state_27270;
var statearr_27275_27315 = state_27270__$1;
(statearr_27275_27315[(2)] = null);

(statearr_27275_27315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (4))){
var inst_27211 = (state_27270[(13)]);
var inst_27211__$1 = (state_27270[(2)]);
var inst_27212 = (inst_27211__$1 == null);
var state_27270__$1 = (function (){var statearr_27276 = state_27270;
(statearr_27276[(13)] = inst_27211__$1);

return statearr_27276;
})();
if(cljs.core.truth_(inst_27212)){
var statearr_27277_27316 = state_27270__$1;
(statearr_27277_27316[(1)] = (5));

} else {
var statearr_27278_27317 = state_27270__$1;
(statearr_27278_27317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (15))){
var state_27270__$1 = state_27270;
var statearr_27282_27318 = state_27270__$1;
(statearr_27282_27318[(2)] = null);

(statearr_27282_27318[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (21))){
var state_27270__$1 = state_27270;
var statearr_27283_27319 = state_27270__$1;
(statearr_27283_27319[(2)] = null);

(statearr_27283_27319[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (13))){
var inst_27224 = (state_27270[(8)]);
var inst_27222 = (state_27270[(9)]);
var inst_27223 = (state_27270[(10)]);
var inst_27225 = (state_27270[(11)]);
var inst_27232 = (state_27270[(2)]);
var inst_27233 = (inst_27225 + (1));
var tmp27279 = inst_27224;
var tmp27280 = inst_27222;
var tmp27281 = inst_27223;
var inst_27222__$1 = tmp27280;
var inst_27223__$1 = tmp27281;
var inst_27224__$1 = tmp27279;
var inst_27225__$1 = inst_27233;
var state_27270__$1 = (function (){var statearr_27284 = state_27270;
(statearr_27284[(8)] = inst_27224__$1);

(statearr_27284[(9)] = inst_27222__$1);

(statearr_27284[(10)] = inst_27223__$1);

(statearr_27284[(14)] = inst_27232);

(statearr_27284[(11)] = inst_27225__$1);

return statearr_27284;
})();
var statearr_27285_27320 = state_27270__$1;
(statearr_27285_27320[(2)] = null);

(statearr_27285_27320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (22))){
var state_27270__$1 = state_27270;
var statearr_27286_27321 = state_27270__$1;
(statearr_27286_27321[(2)] = null);

(statearr_27286_27321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (6))){
var inst_27211 = (state_27270[(13)]);
var inst_27220 = f.call(null,inst_27211);
var inst_27221 = cljs.core.seq.call(null,inst_27220);
var inst_27222 = inst_27221;
var inst_27223 = null;
var inst_27224 = (0);
var inst_27225 = (0);
var state_27270__$1 = (function (){var statearr_27287 = state_27270;
(statearr_27287[(8)] = inst_27224);

(statearr_27287[(9)] = inst_27222);

(statearr_27287[(10)] = inst_27223);

(statearr_27287[(11)] = inst_27225);

return statearr_27287;
})();
var statearr_27288_27322 = state_27270__$1;
(statearr_27288_27322[(2)] = null);

(statearr_27288_27322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (17))){
var inst_27236 = (state_27270[(7)]);
var inst_27240 = cljs.core.chunk_first.call(null,inst_27236);
var inst_27241 = cljs.core.chunk_rest.call(null,inst_27236);
var inst_27242 = cljs.core.count.call(null,inst_27240);
var inst_27222 = inst_27241;
var inst_27223 = inst_27240;
var inst_27224 = inst_27242;
var inst_27225 = (0);
var state_27270__$1 = (function (){var statearr_27289 = state_27270;
(statearr_27289[(8)] = inst_27224);

(statearr_27289[(9)] = inst_27222);

(statearr_27289[(10)] = inst_27223);

(statearr_27289[(11)] = inst_27225);

return statearr_27289;
})();
var statearr_27290_27323 = state_27270__$1;
(statearr_27290_27323[(2)] = null);

(statearr_27290_27323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (3))){
var inst_27268 = (state_27270[(2)]);
var state_27270__$1 = state_27270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27270__$1,inst_27268);
} else {
if((state_val_27271 === (12))){
var inst_27256 = (state_27270[(2)]);
var state_27270__$1 = state_27270;
var statearr_27291_27324 = state_27270__$1;
(statearr_27291_27324[(2)] = inst_27256);

(statearr_27291_27324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (2))){
var state_27270__$1 = state_27270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27270__$1,(4),in$);
} else {
if((state_val_27271 === (23))){
var inst_27264 = (state_27270[(2)]);
var state_27270__$1 = state_27270;
var statearr_27292_27325 = state_27270__$1;
(statearr_27292_27325[(2)] = inst_27264);

(statearr_27292_27325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (19))){
var inst_27251 = (state_27270[(2)]);
var state_27270__$1 = state_27270;
var statearr_27293_27326 = state_27270__$1;
(statearr_27293_27326[(2)] = inst_27251);

(statearr_27293_27326[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (11))){
var inst_27236 = (state_27270[(7)]);
var inst_27222 = (state_27270[(9)]);
var inst_27236__$1 = cljs.core.seq.call(null,inst_27222);
var state_27270__$1 = (function (){var statearr_27294 = state_27270;
(statearr_27294[(7)] = inst_27236__$1);

return statearr_27294;
})();
if(inst_27236__$1){
var statearr_27295_27327 = state_27270__$1;
(statearr_27295_27327[(1)] = (14));

} else {
var statearr_27296_27328 = state_27270__$1;
(statearr_27296_27328[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (9))){
var inst_27258 = (state_27270[(2)]);
var inst_27259 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27270__$1 = (function (){var statearr_27297 = state_27270;
(statearr_27297[(15)] = inst_27258);

return statearr_27297;
})();
if(cljs.core.truth_(inst_27259)){
var statearr_27298_27329 = state_27270__$1;
(statearr_27298_27329[(1)] = (21));

} else {
var statearr_27299_27330 = state_27270__$1;
(statearr_27299_27330[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (5))){
var inst_27214 = cljs.core.async.close_BANG_.call(null,out);
var state_27270__$1 = state_27270;
var statearr_27300_27331 = state_27270__$1;
(statearr_27300_27331[(2)] = inst_27214);

(statearr_27300_27331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (14))){
var inst_27236 = (state_27270[(7)]);
var inst_27238 = cljs.core.chunked_seq_QMARK_.call(null,inst_27236);
var state_27270__$1 = state_27270;
if(inst_27238){
var statearr_27301_27332 = state_27270__$1;
(statearr_27301_27332[(1)] = (17));

} else {
var statearr_27302_27333 = state_27270__$1;
(statearr_27302_27333[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (16))){
var inst_27254 = (state_27270[(2)]);
var state_27270__$1 = state_27270;
var statearr_27303_27334 = state_27270__$1;
(statearr_27303_27334[(2)] = inst_27254);

(statearr_27303_27334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (10))){
var inst_27223 = (state_27270[(10)]);
var inst_27225 = (state_27270[(11)]);
var inst_27230 = cljs.core._nth.call(null,inst_27223,inst_27225);
var state_27270__$1 = state_27270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27270__$1,(13),out,inst_27230);
} else {
if((state_val_27271 === (18))){
var inst_27236 = (state_27270[(7)]);
var inst_27245 = cljs.core.first.call(null,inst_27236);
var state_27270__$1 = state_27270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27270__$1,(20),out,inst_27245);
} else {
if((state_val_27271 === (8))){
var inst_27224 = (state_27270[(8)]);
var inst_27225 = (state_27270[(11)]);
var inst_27227 = (inst_27225 < inst_27224);
var inst_27228 = inst_27227;
var state_27270__$1 = state_27270;
if(cljs.core.truth_(inst_27228)){
var statearr_27304_27335 = state_27270__$1;
(statearr_27304_27335[(1)] = (10));

} else {
var statearr_27305_27336 = state_27270__$1;
(statearr_27305_27336[(1)] = (11));

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
});})(c__19775__auto__))
;
return ((function (switch__19719__auto__,c__19775__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19720__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19720__auto____0 = (function (){
var statearr_27309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27309[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19720__auto__);

(statearr_27309[(1)] = (1));

return statearr_27309;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19720__auto____1 = (function (state_27270){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_27270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e27310){if((e27310 instanceof Object)){
var ex__19723__auto__ = e27310;
var statearr_27311_27337 = state_27270;
(statearr_27311_27337[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27338 = state_27270;
state_27270 = G__27338;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19720__auto__ = function(state_27270){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19720__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19720__auto____1.call(this,state_27270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19720__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19720__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto__))
})();
var state__19777__auto__ = (function (){var statearr_27312 = f__19776__auto__.call(null);
(statearr_27312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto__);

return statearr_27312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto__))
);

return c__19775__auto__;
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
var c__19775__auto___27435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto___27435,out){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto___27435,out){
return (function (state_27410){
var state_val_27411 = (state_27410[(1)]);
if((state_val_27411 === (7))){
var inst_27405 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
var statearr_27412_27436 = state_27410__$1;
(statearr_27412_27436[(2)] = inst_27405);

(statearr_27412_27436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (1))){
var inst_27387 = null;
var state_27410__$1 = (function (){var statearr_27413 = state_27410;
(statearr_27413[(7)] = inst_27387);

return statearr_27413;
})();
var statearr_27414_27437 = state_27410__$1;
(statearr_27414_27437[(2)] = null);

(statearr_27414_27437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (4))){
var inst_27390 = (state_27410[(8)]);
var inst_27390__$1 = (state_27410[(2)]);
var inst_27391 = (inst_27390__$1 == null);
var inst_27392 = cljs.core.not.call(null,inst_27391);
var state_27410__$1 = (function (){var statearr_27415 = state_27410;
(statearr_27415[(8)] = inst_27390__$1);

return statearr_27415;
})();
if(inst_27392){
var statearr_27416_27438 = state_27410__$1;
(statearr_27416_27438[(1)] = (5));

} else {
var statearr_27417_27439 = state_27410__$1;
(statearr_27417_27439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (6))){
var state_27410__$1 = state_27410;
var statearr_27418_27440 = state_27410__$1;
(statearr_27418_27440[(2)] = null);

(statearr_27418_27440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (3))){
var inst_27407 = (state_27410[(2)]);
var inst_27408 = cljs.core.async.close_BANG_.call(null,out);
var state_27410__$1 = (function (){var statearr_27419 = state_27410;
(statearr_27419[(9)] = inst_27407);

return statearr_27419;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27410__$1,inst_27408);
} else {
if((state_val_27411 === (2))){
var state_27410__$1 = state_27410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27410__$1,(4),ch);
} else {
if((state_val_27411 === (11))){
var inst_27390 = (state_27410[(8)]);
var inst_27399 = (state_27410[(2)]);
var inst_27387 = inst_27390;
var state_27410__$1 = (function (){var statearr_27420 = state_27410;
(statearr_27420[(7)] = inst_27387);

(statearr_27420[(10)] = inst_27399);

return statearr_27420;
})();
var statearr_27421_27441 = state_27410__$1;
(statearr_27421_27441[(2)] = null);

(statearr_27421_27441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (9))){
var inst_27390 = (state_27410[(8)]);
var state_27410__$1 = state_27410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27410__$1,(11),out,inst_27390);
} else {
if((state_val_27411 === (5))){
var inst_27387 = (state_27410[(7)]);
var inst_27390 = (state_27410[(8)]);
var inst_27394 = cljs.core._EQ_.call(null,inst_27390,inst_27387);
var state_27410__$1 = state_27410;
if(inst_27394){
var statearr_27423_27442 = state_27410__$1;
(statearr_27423_27442[(1)] = (8));

} else {
var statearr_27424_27443 = state_27410__$1;
(statearr_27424_27443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (10))){
var inst_27402 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
var statearr_27425_27444 = state_27410__$1;
(statearr_27425_27444[(2)] = inst_27402);

(statearr_27425_27444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (8))){
var inst_27387 = (state_27410[(7)]);
var tmp27422 = inst_27387;
var inst_27387__$1 = tmp27422;
var state_27410__$1 = (function (){var statearr_27426 = state_27410;
(statearr_27426[(7)] = inst_27387__$1);

return statearr_27426;
})();
var statearr_27427_27445 = state_27410__$1;
(statearr_27427_27445[(2)] = null);

(statearr_27427_27445[(1)] = (2));


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
});})(c__19775__auto___27435,out))
;
return ((function (switch__19719__auto__,c__19775__auto___27435,out){
return (function() {
var cljs$core$async$unique_$_state_machine__19720__auto__ = null;
var cljs$core$async$unique_$_state_machine__19720__auto____0 = (function (){
var statearr_27431 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27431[(0)] = cljs$core$async$unique_$_state_machine__19720__auto__);

(statearr_27431[(1)] = (1));

return statearr_27431;
});
var cljs$core$async$unique_$_state_machine__19720__auto____1 = (function (state_27410){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_27410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e27432){if((e27432 instanceof Object)){
var ex__19723__auto__ = e27432;
var statearr_27433_27446 = state_27410;
(statearr_27433_27446[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27447 = state_27410;
state_27410 = G__27447;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__19720__auto__ = function(state_27410){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__19720__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__19720__auto____1.call(this,state_27410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__19720__auto____0;
cljs$core$async$unique_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__19720__auto____1;
return cljs$core$async$unique_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto___27435,out))
})();
var state__19777__auto__ = (function (){var statearr_27434 = f__19776__auto__.call(null);
(statearr_27434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___27435);

return statearr_27434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto___27435,out))
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
var c__19775__auto___27582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto___27582,out){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto___27582,out){
return (function (state_27552){
var state_val_27553 = (state_27552[(1)]);
if((state_val_27553 === (7))){
var inst_27548 = (state_27552[(2)]);
var state_27552__$1 = state_27552;
var statearr_27554_27583 = state_27552__$1;
(statearr_27554_27583[(2)] = inst_27548);

(statearr_27554_27583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (1))){
var inst_27515 = (new Array(n));
var inst_27516 = inst_27515;
var inst_27517 = (0);
var state_27552__$1 = (function (){var statearr_27555 = state_27552;
(statearr_27555[(7)] = inst_27517);

(statearr_27555[(8)] = inst_27516);

return statearr_27555;
})();
var statearr_27556_27584 = state_27552__$1;
(statearr_27556_27584[(2)] = null);

(statearr_27556_27584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (4))){
var inst_27520 = (state_27552[(9)]);
var inst_27520__$1 = (state_27552[(2)]);
var inst_27521 = (inst_27520__$1 == null);
var inst_27522 = cljs.core.not.call(null,inst_27521);
var state_27552__$1 = (function (){var statearr_27557 = state_27552;
(statearr_27557[(9)] = inst_27520__$1);

return statearr_27557;
})();
if(inst_27522){
var statearr_27558_27585 = state_27552__$1;
(statearr_27558_27585[(1)] = (5));

} else {
var statearr_27559_27586 = state_27552__$1;
(statearr_27559_27586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (15))){
var inst_27542 = (state_27552[(2)]);
var state_27552__$1 = state_27552;
var statearr_27560_27587 = state_27552__$1;
(statearr_27560_27587[(2)] = inst_27542);

(statearr_27560_27587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (13))){
var state_27552__$1 = state_27552;
var statearr_27561_27588 = state_27552__$1;
(statearr_27561_27588[(2)] = null);

(statearr_27561_27588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (6))){
var inst_27517 = (state_27552[(7)]);
var inst_27538 = (inst_27517 > (0));
var state_27552__$1 = state_27552;
if(cljs.core.truth_(inst_27538)){
var statearr_27562_27589 = state_27552__$1;
(statearr_27562_27589[(1)] = (12));

} else {
var statearr_27563_27590 = state_27552__$1;
(statearr_27563_27590[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (3))){
var inst_27550 = (state_27552[(2)]);
var state_27552__$1 = state_27552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27552__$1,inst_27550);
} else {
if((state_val_27553 === (12))){
var inst_27516 = (state_27552[(8)]);
var inst_27540 = cljs.core.vec.call(null,inst_27516);
var state_27552__$1 = state_27552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27552__$1,(15),out,inst_27540);
} else {
if((state_val_27553 === (2))){
var state_27552__$1 = state_27552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27552__$1,(4),ch);
} else {
if((state_val_27553 === (11))){
var inst_27532 = (state_27552[(2)]);
var inst_27533 = (new Array(n));
var inst_27516 = inst_27533;
var inst_27517 = (0);
var state_27552__$1 = (function (){var statearr_27564 = state_27552;
(statearr_27564[(7)] = inst_27517);

(statearr_27564[(10)] = inst_27532);

(statearr_27564[(8)] = inst_27516);

return statearr_27564;
})();
var statearr_27565_27591 = state_27552__$1;
(statearr_27565_27591[(2)] = null);

(statearr_27565_27591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (9))){
var inst_27516 = (state_27552[(8)]);
var inst_27530 = cljs.core.vec.call(null,inst_27516);
var state_27552__$1 = state_27552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27552__$1,(11),out,inst_27530);
} else {
if((state_val_27553 === (5))){
var inst_27517 = (state_27552[(7)]);
var inst_27520 = (state_27552[(9)]);
var inst_27525 = (state_27552[(11)]);
var inst_27516 = (state_27552[(8)]);
var inst_27524 = (inst_27516[inst_27517] = inst_27520);
var inst_27525__$1 = (inst_27517 + (1));
var inst_27526 = (inst_27525__$1 < n);
var state_27552__$1 = (function (){var statearr_27566 = state_27552;
(statearr_27566[(11)] = inst_27525__$1);

(statearr_27566[(12)] = inst_27524);

return statearr_27566;
})();
if(cljs.core.truth_(inst_27526)){
var statearr_27567_27592 = state_27552__$1;
(statearr_27567_27592[(1)] = (8));

} else {
var statearr_27568_27593 = state_27552__$1;
(statearr_27568_27593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (14))){
var inst_27545 = (state_27552[(2)]);
var inst_27546 = cljs.core.async.close_BANG_.call(null,out);
var state_27552__$1 = (function (){var statearr_27570 = state_27552;
(statearr_27570[(13)] = inst_27545);

return statearr_27570;
})();
var statearr_27571_27594 = state_27552__$1;
(statearr_27571_27594[(2)] = inst_27546);

(statearr_27571_27594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (10))){
var inst_27536 = (state_27552[(2)]);
var state_27552__$1 = state_27552;
var statearr_27572_27595 = state_27552__$1;
(statearr_27572_27595[(2)] = inst_27536);

(statearr_27572_27595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (8))){
var inst_27525 = (state_27552[(11)]);
var inst_27516 = (state_27552[(8)]);
var tmp27569 = inst_27516;
var inst_27516__$1 = tmp27569;
var inst_27517 = inst_27525;
var state_27552__$1 = (function (){var statearr_27573 = state_27552;
(statearr_27573[(7)] = inst_27517);

(statearr_27573[(8)] = inst_27516__$1);

return statearr_27573;
})();
var statearr_27574_27596 = state_27552__$1;
(statearr_27574_27596[(2)] = null);

(statearr_27574_27596[(1)] = (2));


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
});})(c__19775__auto___27582,out))
;
return ((function (switch__19719__auto__,c__19775__auto___27582,out){
return (function() {
var cljs$core$async$partition_$_state_machine__19720__auto__ = null;
var cljs$core$async$partition_$_state_machine__19720__auto____0 = (function (){
var statearr_27578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27578[(0)] = cljs$core$async$partition_$_state_machine__19720__auto__);

(statearr_27578[(1)] = (1));

return statearr_27578;
});
var cljs$core$async$partition_$_state_machine__19720__auto____1 = (function (state_27552){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_27552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e27579){if((e27579 instanceof Object)){
var ex__19723__auto__ = e27579;
var statearr_27580_27597 = state_27552;
(statearr_27580_27597[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27598 = state_27552;
state_27552 = G__27598;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__19720__auto__ = function(state_27552){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__19720__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__19720__auto____1.call(this,state_27552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__19720__auto____0;
cljs$core$async$partition_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__19720__auto____1;
return cljs$core$async$partition_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto___27582,out))
})();
var state__19777__auto__ = (function (){var statearr_27581 = f__19776__auto__.call(null);
(statearr_27581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___27582);

return statearr_27581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto___27582,out))
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
var c__19775__auto___27741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19775__auto___27741,out){
return (function (){
var f__19776__auto__ = (function (){var switch__19719__auto__ = ((function (c__19775__auto___27741,out){
return (function (state_27711){
var state_val_27712 = (state_27711[(1)]);
if((state_val_27712 === (7))){
var inst_27707 = (state_27711[(2)]);
var state_27711__$1 = state_27711;
var statearr_27713_27742 = state_27711__$1;
(statearr_27713_27742[(2)] = inst_27707);

(statearr_27713_27742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (1))){
var inst_27670 = [];
var inst_27671 = inst_27670;
var inst_27672 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27711__$1 = (function (){var statearr_27714 = state_27711;
(statearr_27714[(7)] = inst_27672);

(statearr_27714[(8)] = inst_27671);

return statearr_27714;
})();
var statearr_27715_27743 = state_27711__$1;
(statearr_27715_27743[(2)] = null);

(statearr_27715_27743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (4))){
var inst_27675 = (state_27711[(9)]);
var inst_27675__$1 = (state_27711[(2)]);
var inst_27676 = (inst_27675__$1 == null);
var inst_27677 = cljs.core.not.call(null,inst_27676);
var state_27711__$1 = (function (){var statearr_27716 = state_27711;
(statearr_27716[(9)] = inst_27675__$1);

return statearr_27716;
})();
if(inst_27677){
var statearr_27717_27744 = state_27711__$1;
(statearr_27717_27744[(1)] = (5));

} else {
var statearr_27718_27745 = state_27711__$1;
(statearr_27718_27745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (15))){
var inst_27701 = (state_27711[(2)]);
var state_27711__$1 = state_27711;
var statearr_27719_27746 = state_27711__$1;
(statearr_27719_27746[(2)] = inst_27701);

(statearr_27719_27746[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (13))){
var state_27711__$1 = state_27711;
var statearr_27720_27747 = state_27711__$1;
(statearr_27720_27747[(2)] = null);

(statearr_27720_27747[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (6))){
var inst_27671 = (state_27711[(8)]);
var inst_27696 = inst_27671.length;
var inst_27697 = (inst_27696 > (0));
var state_27711__$1 = state_27711;
if(cljs.core.truth_(inst_27697)){
var statearr_27721_27748 = state_27711__$1;
(statearr_27721_27748[(1)] = (12));

} else {
var statearr_27722_27749 = state_27711__$1;
(statearr_27722_27749[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (3))){
var inst_27709 = (state_27711[(2)]);
var state_27711__$1 = state_27711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27711__$1,inst_27709);
} else {
if((state_val_27712 === (12))){
var inst_27671 = (state_27711[(8)]);
var inst_27699 = cljs.core.vec.call(null,inst_27671);
var state_27711__$1 = state_27711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27711__$1,(15),out,inst_27699);
} else {
if((state_val_27712 === (2))){
var state_27711__$1 = state_27711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27711__$1,(4),ch);
} else {
if((state_val_27712 === (11))){
var inst_27679 = (state_27711[(10)]);
var inst_27675 = (state_27711[(9)]);
var inst_27689 = (state_27711[(2)]);
var inst_27690 = [];
var inst_27691 = inst_27690.push(inst_27675);
var inst_27671 = inst_27690;
var inst_27672 = inst_27679;
var state_27711__$1 = (function (){var statearr_27723 = state_27711;
(statearr_27723[(11)] = inst_27691);

(statearr_27723[(12)] = inst_27689);

(statearr_27723[(7)] = inst_27672);

(statearr_27723[(8)] = inst_27671);

return statearr_27723;
})();
var statearr_27724_27750 = state_27711__$1;
(statearr_27724_27750[(2)] = null);

(statearr_27724_27750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (9))){
var inst_27671 = (state_27711[(8)]);
var inst_27687 = cljs.core.vec.call(null,inst_27671);
var state_27711__$1 = state_27711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27711__$1,(11),out,inst_27687);
} else {
if((state_val_27712 === (5))){
var inst_27679 = (state_27711[(10)]);
var inst_27675 = (state_27711[(9)]);
var inst_27672 = (state_27711[(7)]);
var inst_27679__$1 = f.call(null,inst_27675);
var inst_27680 = cljs.core._EQ_.call(null,inst_27679__$1,inst_27672);
var inst_27681 = cljs.core.keyword_identical_QMARK_.call(null,inst_27672,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27682 = (inst_27680) || (inst_27681);
var state_27711__$1 = (function (){var statearr_27725 = state_27711;
(statearr_27725[(10)] = inst_27679__$1);

return statearr_27725;
})();
if(cljs.core.truth_(inst_27682)){
var statearr_27726_27751 = state_27711__$1;
(statearr_27726_27751[(1)] = (8));

} else {
var statearr_27727_27752 = state_27711__$1;
(statearr_27727_27752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (14))){
var inst_27704 = (state_27711[(2)]);
var inst_27705 = cljs.core.async.close_BANG_.call(null,out);
var state_27711__$1 = (function (){var statearr_27729 = state_27711;
(statearr_27729[(13)] = inst_27704);

return statearr_27729;
})();
var statearr_27730_27753 = state_27711__$1;
(statearr_27730_27753[(2)] = inst_27705);

(statearr_27730_27753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (10))){
var inst_27694 = (state_27711[(2)]);
var state_27711__$1 = state_27711;
var statearr_27731_27754 = state_27711__$1;
(statearr_27731_27754[(2)] = inst_27694);

(statearr_27731_27754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (8))){
var inst_27679 = (state_27711[(10)]);
var inst_27675 = (state_27711[(9)]);
var inst_27671 = (state_27711[(8)]);
var inst_27684 = inst_27671.push(inst_27675);
var tmp27728 = inst_27671;
var inst_27671__$1 = tmp27728;
var inst_27672 = inst_27679;
var state_27711__$1 = (function (){var statearr_27732 = state_27711;
(statearr_27732[(14)] = inst_27684);

(statearr_27732[(7)] = inst_27672);

(statearr_27732[(8)] = inst_27671__$1);

return statearr_27732;
})();
var statearr_27733_27755 = state_27711__$1;
(statearr_27733_27755[(2)] = null);

(statearr_27733_27755[(1)] = (2));


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
});})(c__19775__auto___27741,out))
;
return ((function (switch__19719__auto__,c__19775__auto___27741,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__19720__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__19720__auto____0 = (function (){
var statearr_27737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27737[(0)] = cljs$core$async$partition_by_$_state_machine__19720__auto__);

(statearr_27737[(1)] = (1));

return statearr_27737;
});
var cljs$core$async$partition_by_$_state_machine__19720__auto____1 = (function (state_27711){
while(true){
var ret_value__19721__auto__ = (function (){try{while(true){
var result__19722__auto__ = switch__19719__auto__.call(null,state_27711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19722__auto__;
}
break;
}
}catch (e27738){if((e27738 instanceof Object)){
var ex__19723__auto__ = e27738;
var statearr_27739_27756 = state_27711;
(statearr_27739_27756[(5)] = ex__19723__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27757 = state_27711;
state_27711 = G__27757;
continue;
} else {
return ret_value__19721__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__19720__auto__ = function(state_27711){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__19720__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__19720__auto____1.call(this,state_27711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__19720__auto____0;
cljs$core$async$partition_by_$_state_machine__19720__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__19720__auto____1;
return cljs$core$async$partition_by_$_state_machine__19720__auto__;
})()
;})(switch__19719__auto__,c__19775__auto___27741,out))
})();
var state__19777__auto__ = (function (){var statearr_27740 = f__19776__auto__.call(null);
(statearr_27740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19775__auto___27741);

return statearr_27740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19777__auto__);
});})(c__19775__auto___27741,out))
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