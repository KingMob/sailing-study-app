// Compiled by ClojureScript 0.0-3148 {:elide-asserts false}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t24791 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24791 = (function (f,fn_handler,meta24792){
this.f = f;
this.fn_handler = fn_handler;
this.meta24792 = meta24792;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24791.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24791.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24791.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24793){
var self__ = this;
var _24793__$1 = this;
return self__.meta24792;
});

cljs.core.async.t24791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24793,meta24792__$1){
var self__ = this;
var _24793__$1 = this;
return (new cljs.core.async.t24791(self__.f,self__.fn_handler,meta24792__$1));
});

cljs.core.async.t24791.cljs$lang$type = true;

cljs.core.async.t24791.cljs$lang$ctorStr = "cljs.core.async/t24791";

cljs.core.async.t24791.cljs$lang$ctorPrWriter = (function (this__18282__auto__,writer__18283__auto__,opt__18284__auto__){
return cljs.core._write.call(null,writer__18283__auto__,"cljs.core.async/t24791");
});

cljs.core.async.__GT_t24791 = (function cljs$core$async$fn_handler_$___GT_t24791(f__$1,fn_handler__$1,meta24792){
return (new cljs.core.async.t24791(f__$1,fn_handler__$1,meta24792));
});

}

return (new cljs.core.async.t24791(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24795 = buff;
if(G__24795){
var bit__18377__auto__ = null;
if(cljs.core.truth_((function (){var or__17703__auto__ = bit__18377__auto__;
if(cljs.core.truth_(or__17703__auto__)){
return or__17703__auto__;
} else {
return G__24795.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24795.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24795);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24795);
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
var val_24796 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24796);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24796,ret){
return (function (){
return fn1.call(null,val_24796);
});})(val_24796,ret))
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
var n__18588__auto___24797 = n;
var x_24798 = (0);
while(true){
if((x_24798 < n__18588__auto___24797)){
(a[x_24798] = (0));

var G__24799 = (x_24798 + (1));
x_24798 = G__24799;
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

var G__24800 = (i + (1));
i = G__24800;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t24804 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24804 = (function (flag,alt_flag,meta24805){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24805 = meta24805;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24804.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24804.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t24804.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t24804.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24806){
var self__ = this;
var _24806__$1 = this;
return self__.meta24805;
});})(flag))
;

cljs.core.async.t24804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24806,meta24805__$1){
var self__ = this;
var _24806__$1 = this;
return (new cljs.core.async.t24804(self__.flag,self__.alt_flag,meta24805__$1));
});})(flag))
;

cljs.core.async.t24804.cljs$lang$type = true;

cljs.core.async.t24804.cljs$lang$ctorStr = "cljs.core.async/t24804";

cljs.core.async.t24804.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18282__auto__,writer__18283__auto__,opt__18284__auto__){
return cljs.core._write.call(null,writer__18283__auto__,"cljs.core.async/t24804");
});})(flag))
;

cljs.core.async.__GT_t24804 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t24804(flag__$1,alt_flag__$1,meta24805){
return (new cljs.core.async.t24804(flag__$1,alt_flag__$1,meta24805));
});})(flag))
;

}

return (new cljs.core.async.t24804(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t24810 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24810 = (function (cb,flag,alt_handler,meta24811){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24811 = meta24811;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24810.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24810.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t24810.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t24810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24812){
var self__ = this;
var _24812__$1 = this;
return self__.meta24811;
});

cljs.core.async.t24810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24812,meta24811__$1){
var self__ = this;
var _24812__$1 = this;
return (new cljs.core.async.t24810(self__.cb,self__.flag,self__.alt_handler,meta24811__$1));
});

cljs.core.async.t24810.cljs$lang$type = true;

cljs.core.async.t24810.cljs$lang$ctorStr = "cljs.core.async/t24810";

cljs.core.async.t24810.cljs$lang$ctorPrWriter = (function (this__18282__auto__,writer__18283__auto__,opt__18284__auto__){
return cljs.core._write.call(null,writer__18283__auto__,"cljs.core.async/t24810");
});

cljs.core.async.__GT_t24810 = (function cljs$core$async$alt_handler_$___GT_t24810(cb__$1,flag__$1,alt_handler__$1,meta24811){
return (new cljs.core.async.t24810(cb__$1,flag__$1,alt_handler__$1,meta24811));
});

}

return (new cljs.core.async.t24810(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24813_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24813_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24814_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24814_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17703__auto__ = wport;
if(cljs.core.truth_(or__17703__auto__)){
return or__17703__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24815 = (i + (1));
i = G__24815;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17703__auto__ = ret;
if(cljs.core.truth_(or__17703__auto__)){
return or__17703__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__17691__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17691__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17691__auto__;
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
var cljs$core$async$alts_BANG___delegate = function (ports,p__24816){
var map__24818 = p__24816;
var map__24818__$1 = ((cljs.core.seq_QMARK_.call(null,map__24818))?cljs.core.apply.call(null,cljs.core.hash_map,map__24818):map__24818);
var opts = map__24818__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__24816 = null;
if (arguments.length > 1) {
var G__24819__i = 0, G__24819__a = new Array(arguments.length -  1);
while (G__24819__i < G__24819__a.length) {G__24819__a[G__24819__i] = arguments[G__24819__i + 1]; ++G__24819__i;}
  p__24816 = new cljs.core.IndexedSeq(G__24819__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__24816);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__24820){
var ports = cljs.core.first(arglist__24820);
var p__24816 = cljs.core.rest(arglist__24820);
return cljs$core$async$alts_BANG___delegate(ports,p__24816);
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
var c__19885__auto___24915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto___24915){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto___24915){
return (function (state_24891){
var state_val_24892 = (state_24891[(1)]);
if((state_val_24892 === (7))){
var inst_24887 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
var statearr_24893_24916 = state_24891__$1;
(statearr_24893_24916[(2)] = inst_24887);

(statearr_24893_24916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (1))){
var state_24891__$1 = state_24891;
var statearr_24894_24917 = state_24891__$1;
(statearr_24894_24917[(2)] = null);

(statearr_24894_24917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (4))){
var inst_24870 = (state_24891[(7)]);
var inst_24870__$1 = (state_24891[(2)]);
var inst_24871 = (inst_24870__$1 == null);
var state_24891__$1 = (function (){var statearr_24895 = state_24891;
(statearr_24895[(7)] = inst_24870__$1);

return statearr_24895;
})();
if(cljs.core.truth_(inst_24871)){
var statearr_24896_24918 = state_24891__$1;
(statearr_24896_24918[(1)] = (5));

} else {
var statearr_24897_24919 = state_24891__$1;
(statearr_24897_24919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (13))){
var state_24891__$1 = state_24891;
var statearr_24898_24920 = state_24891__$1;
(statearr_24898_24920[(2)] = null);

(statearr_24898_24920[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (6))){
var inst_24870 = (state_24891[(7)]);
var state_24891__$1 = state_24891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24891__$1,(11),to,inst_24870);
} else {
if((state_val_24892 === (3))){
var inst_24889 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24891__$1,inst_24889);
} else {
if((state_val_24892 === (12))){
var state_24891__$1 = state_24891;
var statearr_24899_24921 = state_24891__$1;
(statearr_24899_24921[(2)] = null);

(statearr_24899_24921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (2))){
var state_24891__$1 = state_24891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24891__$1,(4),from);
} else {
if((state_val_24892 === (11))){
var inst_24880 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
if(cljs.core.truth_(inst_24880)){
var statearr_24900_24922 = state_24891__$1;
(statearr_24900_24922[(1)] = (12));

} else {
var statearr_24901_24923 = state_24891__$1;
(statearr_24901_24923[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (9))){
var state_24891__$1 = state_24891;
var statearr_24902_24924 = state_24891__$1;
(statearr_24902_24924[(2)] = null);

(statearr_24902_24924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (5))){
var state_24891__$1 = state_24891;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24903_24925 = state_24891__$1;
(statearr_24903_24925[(1)] = (8));

} else {
var statearr_24904_24926 = state_24891__$1;
(statearr_24904_24926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (14))){
var inst_24885 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
var statearr_24905_24927 = state_24891__$1;
(statearr_24905_24927[(2)] = inst_24885);

(statearr_24905_24927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (10))){
var inst_24877 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
var statearr_24906_24928 = state_24891__$1;
(statearr_24906_24928[(2)] = inst_24877);

(statearr_24906_24928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (8))){
var inst_24874 = cljs.core.async.close_BANG_.call(null,to);
var state_24891__$1 = state_24891;
var statearr_24907_24929 = state_24891__$1;
(statearr_24907_24929[(2)] = inst_24874);

(statearr_24907_24929[(1)] = (10));


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
});})(c__19885__auto___24915))
;
return ((function (switch__19829__auto__,c__19885__auto___24915){
return (function() {
var cljs$core$async$pipe_$_state_machine__19830__auto__ = null;
var cljs$core$async$pipe_$_state_machine__19830__auto____0 = (function (){
var statearr_24911 = [null,null,null,null,null,null,null,null];
(statearr_24911[(0)] = cljs$core$async$pipe_$_state_machine__19830__auto__);

(statearr_24911[(1)] = (1));

return statearr_24911;
});
var cljs$core$async$pipe_$_state_machine__19830__auto____1 = (function (state_24891){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_24891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e24912){if((e24912 instanceof Object)){
var ex__19833__auto__ = e24912;
var statearr_24913_24930 = state_24891;
(statearr_24913_24930[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24931 = state_24891;
state_24891 = G__24931;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__19830__auto__ = function(state_24891){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__19830__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__19830__auto____1.call(this,state_24891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__19830__auto____0;
cljs$core$async$pipe_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__19830__auto____1;
return cljs$core$async$pipe_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto___24915))
})();
var state__19887__auto__ = (function (){var statearr_24914 = f__19886__auto__.call(null);
(statearr_24914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___24915);

return statearr_24914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto___24915))
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
return (function (p__25115){
var vec__25116 = p__25115;
var v = cljs.core.nth.call(null,vec__25116,(0),null);
var p = cljs.core.nth.call(null,vec__25116,(1),null);
var job = vec__25116;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19885__auto___25298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto___25298,res,vec__25116,v,p,job,jobs,results){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto___25298,res,vec__25116,v,p,job,jobs,results){
return (function (state_25121){
var state_val_25122 = (state_25121[(1)]);
if((state_val_25122 === (2))){
var inst_25118 = (state_25121[(2)]);
var inst_25119 = cljs.core.async.close_BANG_.call(null,res);
var state_25121__$1 = (function (){var statearr_25123 = state_25121;
(statearr_25123[(7)] = inst_25118);

return statearr_25123;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25121__$1,inst_25119);
} else {
if((state_val_25122 === (1))){
var state_25121__$1 = state_25121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25121__$1,(2),res,v);
} else {
return null;
}
}
});})(c__19885__auto___25298,res,vec__25116,v,p,job,jobs,results))
;
return ((function (switch__19829__auto__,c__19885__auto___25298,res,vec__25116,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____0 = (function (){
var statearr_25127 = [null,null,null,null,null,null,null,null];
(statearr_25127[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__);

(statearr_25127[(1)] = (1));

return statearr_25127;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____1 = (function (state_25121){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_25121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e25128){if((e25128 instanceof Object)){
var ex__19833__auto__ = e25128;
var statearr_25129_25299 = state_25121;
(statearr_25129_25299[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25300 = state_25121;
state_25121 = G__25300;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__ = function(state_25121){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____1.call(this,state_25121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto___25298,res,vec__25116,v,p,job,jobs,results))
})();
var state__19887__auto__ = (function (){var statearr_25130 = f__19886__auto__.call(null);
(statearr_25130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___25298);

return statearr_25130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto___25298,res,vec__25116,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25131){
var vec__25132 = p__25131;
var v = cljs.core.nth.call(null,vec__25132,(0),null);
var p = cljs.core.nth.call(null,vec__25132,(1),null);
var job = vec__25132;
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
var n__18588__auto___25301 = n;
var __25302 = (0);
while(true){
if((__25302 < n__18588__auto___25301)){
var G__25133_25303 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25133_25303) {
case "async":
var c__19885__auto___25305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25302,c__19885__auto___25305,G__25133_25303,n__18588__auto___25301,jobs,results,process,async){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (__25302,c__19885__auto___25305,G__25133_25303,n__18588__auto___25301,jobs,results,process,async){
return (function (state_25146){
var state_val_25147 = (state_25146[(1)]);
if((state_val_25147 === (7))){
var inst_25142 = (state_25146[(2)]);
var state_25146__$1 = state_25146;
var statearr_25148_25306 = state_25146__$1;
(statearr_25148_25306[(2)] = inst_25142);

(statearr_25148_25306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (6))){
var state_25146__$1 = state_25146;
var statearr_25149_25307 = state_25146__$1;
(statearr_25149_25307[(2)] = null);

(statearr_25149_25307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (5))){
var state_25146__$1 = state_25146;
var statearr_25150_25308 = state_25146__$1;
(statearr_25150_25308[(2)] = null);

(statearr_25150_25308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (4))){
var inst_25136 = (state_25146[(2)]);
var inst_25137 = async.call(null,inst_25136);
var state_25146__$1 = state_25146;
if(cljs.core.truth_(inst_25137)){
var statearr_25151_25309 = state_25146__$1;
(statearr_25151_25309[(1)] = (5));

} else {
var statearr_25152_25310 = state_25146__$1;
(statearr_25152_25310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25147 === (3))){
var inst_25144 = (state_25146[(2)]);
var state_25146__$1 = state_25146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25146__$1,inst_25144);
} else {
if((state_val_25147 === (2))){
var state_25146__$1 = state_25146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25146__$1,(4),jobs);
} else {
if((state_val_25147 === (1))){
var state_25146__$1 = state_25146;
var statearr_25153_25311 = state_25146__$1;
(statearr_25153_25311[(2)] = null);

(statearr_25153_25311[(1)] = (2));


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
});})(__25302,c__19885__auto___25305,G__25133_25303,n__18588__auto___25301,jobs,results,process,async))
;
return ((function (__25302,switch__19829__auto__,c__19885__auto___25305,G__25133_25303,n__18588__auto___25301,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____0 = (function (){
var statearr_25157 = [null,null,null,null,null,null,null];
(statearr_25157[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__);

(statearr_25157[(1)] = (1));

return statearr_25157;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____1 = (function (state_25146){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_25146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e25158){if((e25158 instanceof Object)){
var ex__19833__auto__ = e25158;
var statearr_25159_25312 = state_25146;
(statearr_25159_25312[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25313 = state_25146;
state_25146 = G__25313;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__ = function(state_25146){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____1.call(this,state_25146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__;
})()
;})(__25302,switch__19829__auto__,c__19885__auto___25305,G__25133_25303,n__18588__auto___25301,jobs,results,process,async))
})();
var state__19887__auto__ = (function (){var statearr_25160 = f__19886__auto__.call(null);
(statearr_25160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___25305);

return statearr_25160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(__25302,c__19885__auto___25305,G__25133_25303,n__18588__auto___25301,jobs,results,process,async))
);


break;
case "compute":
var c__19885__auto___25314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25302,c__19885__auto___25314,G__25133_25303,n__18588__auto___25301,jobs,results,process,async){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (__25302,c__19885__auto___25314,G__25133_25303,n__18588__auto___25301,jobs,results,process,async){
return (function (state_25173){
var state_val_25174 = (state_25173[(1)]);
if((state_val_25174 === (7))){
var inst_25169 = (state_25173[(2)]);
var state_25173__$1 = state_25173;
var statearr_25175_25315 = state_25173__$1;
(statearr_25175_25315[(2)] = inst_25169);

(statearr_25175_25315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25174 === (6))){
var state_25173__$1 = state_25173;
var statearr_25176_25316 = state_25173__$1;
(statearr_25176_25316[(2)] = null);

(statearr_25176_25316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25174 === (5))){
var state_25173__$1 = state_25173;
var statearr_25177_25317 = state_25173__$1;
(statearr_25177_25317[(2)] = null);

(statearr_25177_25317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25174 === (4))){
var inst_25163 = (state_25173[(2)]);
var inst_25164 = process.call(null,inst_25163);
var state_25173__$1 = state_25173;
if(cljs.core.truth_(inst_25164)){
var statearr_25178_25318 = state_25173__$1;
(statearr_25178_25318[(1)] = (5));

} else {
var statearr_25179_25319 = state_25173__$1;
(statearr_25179_25319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25174 === (3))){
var inst_25171 = (state_25173[(2)]);
var state_25173__$1 = state_25173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25173__$1,inst_25171);
} else {
if((state_val_25174 === (2))){
var state_25173__$1 = state_25173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25173__$1,(4),jobs);
} else {
if((state_val_25174 === (1))){
var state_25173__$1 = state_25173;
var statearr_25180_25320 = state_25173__$1;
(statearr_25180_25320[(2)] = null);

(statearr_25180_25320[(1)] = (2));


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
});})(__25302,c__19885__auto___25314,G__25133_25303,n__18588__auto___25301,jobs,results,process,async))
;
return ((function (__25302,switch__19829__auto__,c__19885__auto___25314,G__25133_25303,n__18588__auto___25301,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____0 = (function (){
var statearr_25184 = [null,null,null,null,null,null,null];
(statearr_25184[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__);

(statearr_25184[(1)] = (1));

return statearr_25184;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____1 = (function (state_25173){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_25173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e25185){if((e25185 instanceof Object)){
var ex__19833__auto__ = e25185;
var statearr_25186_25321 = state_25173;
(statearr_25186_25321[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25322 = state_25173;
state_25173 = G__25322;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__ = function(state_25173){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____1.call(this,state_25173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__;
})()
;})(__25302,switch__19829__auto__,c__19885__auto___25314,G__25133_25303,n__18588__auto___25301,jobs,results,process,async))
})();
var state__19887__auto__ = (function (){var statearr_25187 = f__19886__auto__.call(null);
(statearr_25187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___25314);

return statearr_25187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(__25302,c__19885__auto___25314,G__25133_25303,n__18588__auto___25301,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25323 = (__25302 + (1));
__25302 = G__25323;
continue;
} else {
}
break;
}

var c__19885__auto___25324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto___25324,jobs,results,process,async){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto___25324,jobs,results,process,async){
return (function (state_25209){
var state_val_25210 = (state_25209[(1)]);
if((state_val_25210 === (9))){
var inst_25202 = (state_25209[(2)]);
var state_25209__$1 = (function (){var statearr_25211 = state_25209;
(statearr_25211[(7)] = inst_25202);

return statearr_25211;
})();
var statearr_25212_25325 = state_25209__$1;
(statearr_25212_25325[(2)] = null);

(statearr_25212_25325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (8))){
var inst_25195 = (state_25209[(8)]);
var inst_25200 = (state_25209[(2)]);
var state_25209__$1 = (function (){var statearr_25213 = state_25209;
(statearr_25213[(9)] = inst_25200);

return statearr_25213;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25209__$1,(9),results,inst_25195);
} else {
if((state_val_25210 === (7))){
var inst_25205 = (state_25209[(2)]);
var state_25209__$1 = state_25209;
var statearr_25214_25326 = state_25209__$1;
(statearr_25214_25326[(2)] = inst_25205);

(statearr_25214_25326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (6))){
var inst_25190 = (state_25209[(10)]);
var inst_25195 = (state_25209[(8)]);
var inst_25195__$1 = cljs.core.async.chan.call(null,(1));
var inst_25196 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25197 = [inst_25190,inst_25195__$1];
var inst_25198 = (new cljs.core.PersistentVector(null,2,(5),inst_25196,inst_25197,null));
var state_25209__$1 = (function (){var statearr_25215 = state_25209;
(statearr_25215[(8)] = inst_25195__$1);

return statearr_25215;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25209__$1,(8),jobs,inst_25198);
} else {
if((state_val_25210 === (5))){
var inst_25193 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25209__$1 = state_25209;
var statearr_25216_25327 = state_25209__$1;
(statearr_25216_25327[(2)] = inst_25193);

(statearr_25216_25327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (4))){
var inst_25190 = (state_25209[(10)]);
var inst_25190__$1 = (state_25209[(2)]);
var inst_25191 = (inst_25190__$1 == null);
var state_25209__$1 = (function (){var statearr_25217 = state_25209;
(statearr_25217[(10)] = inst_25190__$1);

return statearr_25217;
})();
if(cljs.core.truth_(inst_25191)){
var statearr_25218_25328 = state_25209__$1;
(statearr_25218_25328[(1)] = (5));

} else {
var statearr_25219_25329 = state_25209__$1;
(statearr_25219_25329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25210 === (3))){
var inst_25207 = (state_25209[(2)]);
var state_25209__$1 = state_25209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25209__$1,inst_25207);
} else {
if((state_val_25210 === (2))){
var state_25209__$1 = state_25209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25209__$1,(4),from);
} else {
if((state_val_25210 === (1))){
var state_25209__$1 = state_25209;
var statearr_25220_25330 = state_25209__$1;
(statearr_25220_25330[(2)] = null);

(statearr_25220_25330[(1)] = (2));


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
});})(c__19885__auto___25324,jobs,results,process,async))
;
return ((function (switch__19829__auto__,c__19885__auto___25324,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____0 = (function (){
var statearr_25224 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__);

(statearr_25224[(1)] = (1));

return statearr_25224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____1 = (function (state_25209){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_25209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e25225){if((e25225 instanceof Object)){
var ex__19833__auto__ = e25225;
var statearr_25226_25331 = state_25209;
(statearr_25226_25331[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25332 = state_25209;
state_25209 = G__25332;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__ = function(state_25209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____1.call(this,state_25209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto___25324,jobs,results,process,async))
})();
var state__19887__auto__ = (function (){var statearr_25227 = f__19886__auto__.call(null);
(statearr_25227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___25324);

return statearr_25227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto___25324,jobs,results,process,async))
);


var c__19885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto__,jobs,results,process,async){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto__,jobs,results,process,async){
return (function (state_25265){
var state_val_25266 = (state_25265[(1)]);
if((state_val_25266 === (7))){
var inst_25261 = (state_25265[(2)]);
var state_25265__$1 = state_25265;
var statearr_25267_25333 = state_25265__$1;
(statearr_25267_25333[(2)] = inst_25261);

(statearr_25267_25333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (20))){
var state_25265__$1 = state_25265;
var statearr_25268_25334 = state_25265__$1;
(statearr_25268_25334[(2)] = null);

(statearr_25268_25334[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (1))){
var state_25265__$1 = state_25265;
var statearr_25269_25335 = state_25265__$1;
(statearr_25269_25335[(2)] = null);

(statearr_25269_25335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (4))){
var inst_25230 = (state_25265[(7)]);
var inst_25230__$1 = (state_25265[(2)]);
var inst_25231 = (inst_25230__$1 == null);
var state_25265__$1 = (function (){var statearr_25270 = state_25265;
(statearr_25270[(7)] = inst_25230__$1);

return statearr_25270;
})();
if(cljs.core.truth_(inst_25231)){
var statearr_25271_25336 = state_25265__$1;
(statearr_25271_25336[(1)] = (5));

} else {
var statearr_25272_25337 = state_25265__$1;
(statearr_25272_25337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (15))){
var inst_25243 = (state_25265[(8)]);
var state_25265__$1 = state_25265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25265__$1,(18),to,inst_25243);
} else {
if((state_val_25266 === (21))){
var inst_25256 = (state_25265[(2)]);
var state_25265__$1 = state_25265;
var statearr_25273_25338 = state_25265__$1;
(statearr_25273_25338[(2)] = inst_25256);

(statearr_25273_25338[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (13))){
var inst_25258 = (state_25265[(2)]);
var state_25265__$1 = (function (){var statearr_25274 = state_25265;
(statearr_25274[(9)] = inst_25258);

return statearr_25274;
})();
var statearr_25275_25339 = state_25265__$1;
(statearr_25275_25339[(2)] = null);

(statearr_25275_25339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (6))){
var inst_25230 = (state_25265[(7)]);
var state_25265__$1 = state_25265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25265__$1,(11),inst_25230);
} else {
if((state_val_25266 === (17))){
var inst_25251 = (state_25265[(2)]);
var state_25265__$1 = state_25265;
if(cljs.core.truth_(inst_25251)){
var statearr_25276_25340 = state_25265__$1;
(statearr_25276_25340[(1)] = (19));

} else {
var statearr_25277_25341 = state_25265__$1;
(statearr_25277_25341[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (3))){
var inst_25263 = (state_25265[(2)]);
var state_25265__$1 = state_25265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25265__$1,inst_25263);
} else {
if((state_val_25266 === (12))){
var inst_25240 = (state_25265[(10)]);
var state_25265__$1 = state_25265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25265__$1,(14),inst_25240);
} else {
if((state_val_25266 === (2))){
var state_25265__$1 = state_25265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25265__$1,(4),results);
} else {
if((state_val_25266 === (19))){
var state_25265__$1 = state_25265;
var statearr_25278_25342 = state_25265__$1;
(statearr_25278_25342[(2)] = null);

(statearr_25278_25342[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (11))){
var inst_25240 = (state_25265[(2)]);
var state_25265__$1 = (function (){var statearr_25279 = state_25265;
(statearr_25279[(10)] = inst_25240);

return statearr_25279;
})();
var statearr_25280_25343 = state_25265__$1;
(statearr_25280_25343[(2)] = null);

(statearr_25280_25343[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (9))){
var state_25265__$1 = state_25265;
var statearr_25281_25344 = state_25265__$1;
(statearr_25281_25344[(2)] = null);

(statearr_25281_25344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (5))){
var state_25265__$1 = state_25265;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25282_25345 = state_25265__$1;
(statearr_25282_25345[(1)] = (8));

} else {
var statearr_25283_25346 = state_25265__$1;
(statearr_25283_25346[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (14))){
var inst_25243 = (state_25265[(8)]);
var inst_25245 = (state_25265[(11)]);
var inst_25243__$1 = (state_25265[(2)]);
var inst_25244 = (inst_25243__$1 == null);
var inst_25245__$1 = cljs.core.not.call(null,inst_25244);
var state_25265__$1 = (function (){var statearr_25284 = state_25265;
(statearr_25284[(8)] = inst_25243__$1);

(statearr_25284[(11)] = inst_25245__$1);

return statearr_25284;
})();
if(inst_25245__$1){
var statearr_25285_25347 = state_25265__$1;
(statearr_25285_25347[(1)] = (15));

} else {
var statearr_25286_25348 = state_25265__$1;
(statearr_25286_25348[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (16))){
var inst_25245 = (state_25265[(11)]);
var state_25265__$1 = state_25265;
var statearr_25287_25349 = state_25265__$1;
(statearr_25287_25349[(2)] = inst_25245);

(statearr_25287_25349[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (10))){
var inst_25237 = (state_25265[(2)]);
var state_25265__$1 = state_25265;
var statearr_25288_25350 = state_25265__$1;
(statearr_25288_25350[(2)] = inst_25237);

(statearr_25288_25350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (18))){
var inst_25248 = (state_25265[(2)]);
var state_25265__$1 = state_25265;
var statearr_25289_25351 = state_25265__$1;
(statearr_25289_25351[(2)] = inst_25248);

(statearr_25289_25351[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (8))){
var inst_25234 = cljs.core.async.close_BANG_.call(null,to);
var state_25265__$1 = state_25265;
var statearr_25290_25352 = state_25265__$1;
(statearr_25290_25352[(2)] = inst_25234);

(statearr_25290_25352[(1)] = (10));


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
});})(c__19885__auto__,jobs,results,process,async))
;
return ((function (switch__19829__auto__,c__19885__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____0 = (function (){
var statearr_25294 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25294[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__);

(statearr_25294[(1)] = (1));

return statearr_25294;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____1 = (function (state_25265){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_25265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e25295){if((e25295 instanceof Object)){
var ex__19833__auto__ = e25295;
var statearr_25296_25353 = state_25265;
(statearr_25296_25353[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25354 = state_25265;
state_25265 = G__25354;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__ = function(state_25265){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____1.call(this,state_25265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19830__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto__,jobs,results,process,async))
})();
var state__19887__auto__ = (function (){var statearr_25297 = f__19886__auto__.call(null);
(statearr_25297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto__);

return statearr_25297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto__,jobs,results,process,async))
);

return c__19885__auto__;
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
var c__19885__auto___25455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto___25455,tc,fc){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto___25455,tc,fc){
return (function (state_25430){
var state_val_25431 = (state_25430[(1)]);
if((state_val_25431 === (7))){
var inst_25426 = (state_25430[(2)]);
var state_25430__$1 = state_25430;
var statearr_25432_25456 = state_25430__$1;
(statearr_25432_25456[(2)] = inst_25426);

(statearr_25432_25456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (1))){
var state_25430__$1 = state_25430;
var statearr_25433_25457 = state_25430__$1;
(statearr_25433_25457[(2)] = null);

(statearr_25433_25457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (4))){
var inst_25407 = (state_25430[(7)]);
var inst_25407__$1 = (state_25430[(2)]);
var inst_25408 = (inst_25407__$1 == null);
var state_25430__$1 = (function (){var statearr_25434 = state_25430;
(statearr_25434[(7)] = inst_25407__$1);

return statearr_25434;
})();
if(cljs.core.truth_(inst_25408)){
var statearr_25435_25458 = state_25430__$1;
(statearr_25435_25458[(1)] = (5));

} else {
var statearr_25436_25459 = state_25430__$1;
(statearr_25436_25459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (13))){
var state_25430__$1 = state_25430;
var statearr_25437_25460 = state_25430__$1;
(statearr_25437_25460[(2)] = null);

(statearr_25437_25460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (6))){
var inst_25407 = (state_25430[(7)]);
var inst_25413 = p.call(null,inst_25407);
var state_25430__$1 = state_25430;
if(cljs.core.truth_(inst_25413)){
var statearr_25438_25461 = state_25430__$1;
(statearr_25438_25461[(1)] = (9));

} else {
var statearr_25439_25462 = state_25430__$1;
(statearr_25439_25462[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (3))){
var inst_25428 = (state_25430[(2)]);
var state_25430__$1 = state_25430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25430__$1,inst_25428);
} else {
if((state_val_25431 === (12))){
var state_25430__$1 = state_25430;
var statearr_25440_25463 = state_25430__$1;
(statearr_25440_25463[(2)] = null);

(statearr_25440_25463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (2))){
var state_25430__$1 = state_25430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25430__$1,(4),ch);
} else {
if((state_val_25431 === (11))){
var inst_25407 = (state_25430[(7)]);
var inst_25417 = (state_25430[(2)]);
var state_25430__$1 = state_25430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25430__$1,(8),inst_25417,inst_25407);
} else {
if((state_val_25431 === (9))){
var state_25430__$1 = state_25430;
var statearr_25441_25464 = state_25430__$1;
(statearr_25441_25464[(2)] = tc);

(statearr_25441_25464[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (5))){
var inst_25410 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25411 = cljs.core.async.close_BANG_.call(null,fc);
var state_25430__$1 = (function (){var statearr_25442 = state_25430;
(statearr_25442[(8)] = inst_25410);

return statearr_25442;
})();
var statearr_25443_25465 = state_25430__$1;
(statearr_25443_25465[(2)] = inst_25411);

(statearr_25443_25465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (14))){
var inst_25424 = (state_25430[(2)]);
var state_25430__$1 = state_25430;
var statearr_25444_25466 = state_25430__$1;
(statearr_25444_25466[(2)] = inst_25424);

(statearr_25444_25466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (10))){
var state_25430__$1 = state_25430;
var statearr_25445_25467 = state_25430__$1;
(statearr_25445_25467[(2)] = fc);

(statearr_25445_25467[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (8))){
var inst_25419 = (state_25430[(2)]);
var state_25430__$1 = state_25430;
if(cljs.core.truth_(inst_25419)){
var statearr_25446_25468 = state_25430__$1;
(statearr_25446_25468[(1)] = (12));

} else {
var statearr_25447_25469 = state_25430__$1;
(statearr_25447_25469[(1)] = (13));

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
});})(c__19885__auto___25455,tc,fc))
;
return ((function (switch__19829__auto__,c__19885__auto___25455,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__19830__auto__ = null;
var cljs$core$async$split_$_state_machine__19830__auto____0 = (function (){
var statearr_25451 = [null,null,null,null,null,null,null,null,null];
(statearr_25451[(0)] = cljs$core$async$split_$_state_machine__19830__auto__);

(statearr_25451[(1)] = (1));

return statearr_25451;
});
var cljs$core$async$split_$_state_machine__19830__auto____1 = (function (state_25430){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_25430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e25452){if((e25452 instanceof Object)){
var ex__19833__auto__ = e25452;
var statearr_25453_25470 = state_25430;
(statearr_25453_25470[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25471 = state_25430;
state_25430 = G__25471;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__19830__auto__ = function(state_25430){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__19830__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__19830__auto____1.call(this,state_25430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__19830__auto____0;
cljs$core$async$split_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__19830__auto____1;
return cljs$core$async$split_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto___25455,tc,fc))
})();
var state__19887__auto__ = (function (){var statearr_25454 = f__19886__auto__.call(null);
(statearr_25454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___25455);

return statearr_25454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto___25455,tc,fc))
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
var c__19885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto__){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto__){
return (function (state_25518){
var state_val_25519 = (state_25518[(1)]);
if((state_val_25519 === (7))){
var inst_25514 = (state_25518[(2)]);
var state_25518__$1 = state_25518;
var statearr_25520_25536 = state_25518__$1;
(statearr_25520_25536[(2)] = inst_25514);

(statearr_25520_25536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25519 === (6))){
var inst_25507 = (state_25518[(7)]);
var inst_25504 = (state_25518[(8)]);
var inst_25511 = f.call(null,inst_25504,inst_25507);
var inst_25504__$1 = inst_25511;
var state_25518__$1 = (function (){var statearr_25521 = state_25518;
(statearr_25521[(8)] = inst_25504__$1);

return statearr_25521;
})();
var statearr_25522_25537 = state_25518__$1;
(statearr_25522_25537[(2)] = null);

(statearr_25522_25537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25519 === (5))){
var inst_25504 = (state_25518[(8)]);
var state_25518__$1 = state_25518;
var statearr_25523_25538 = state_25518__$1;
(statearr_25523_25538[(2)] = inst_25504);

(statearr_25523_25538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25519 === (4))){
var inst_25507 = (state_25518[(7)]);
var inst_25507__$1 = (state_25518[(2)]);
var inst_25508 = (inst_25507__$1 == null);
var state_25518__$1 = (function (){var statearr_25524 = state_25518;
(statearr_25524[(7)] = inst_25507__$1);

return statearr_25524;
})();
if(cljs.core.truth_(inst_25508)){
var statearr_25525_25539 = state_25518__$1;
(statearr_25525_25539[(1)] = (5));

} else {
var statearr_25526_25540 = state_25518__$1;
(statearr_25526_25540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25519 === (3))){
var inst_25516 = (state_25518[(2)]);
var state_25518__$1 = state_25518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25518__$1,inst_25516);
} else {
if((state_val_25519 === (2))){
var state_25518__$1 = state_25518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25518__$1,(4),ch);
} else {
if((state_val_25519 === (1))){
var inst_25504 = init;
var state_25518__$1 = (function (){var statearr_25527 = state_25518;
(statearr_25527[(8)] = inst_25504);

return statearr_25527;
})();
var statearr_25528_25541 = state_25518__$1;
(statearr_25528_25541[(2)] = null);

(statearr_25528_25541[(1)] = (2));


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
});})(c__19885__auto__))
;
return ((function (switch__19829__auto__,c__19885__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19830__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19830__auto____0 = (function (){
var statearr_25532 = [null,null,null,null,null,null,null,null,null];
(statearr_25532[(0)] = cljs$core$async$reduce_$_state_machine__19830__auto__);

(statearr_25532[(1)] = (1));

return statearr_25532;
});
var cljs$core$async$reduce_$_state_machine__19830__auto____1 = (function (state_25518){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_25518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e25533){if((e25533 instanceof Object)){
var ex__19833__auto__ = e25533;
var statearr_25534_25542 = state_25518;
(statearr_25534_25542[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25543 = state_25518;
state_25518 = G__25543;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19830__auto__ = function(state_25518){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19830__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19830__auto____1.call(this,state_25518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19830__auto____0;
cljs$core$async$reduce_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19830__auto____1;
return cljs$core$async$reduce_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto__))
})();
var state__19887__auto__ = (function (){var statearr_25535 = f__19886__auto__.call(null);
(statearr_25535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto__);

return statearr_25535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto__))
);

return c__19885__auto__;
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
var c__19885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto__){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto__){
return (function (state_25617){
var state_val_25618 = (state_25617[(1)]);
if((state_val_25618 === (7))){
var inst_25599 = (state_25617[(2)]);
var state_25617__$1 = state_25617;
var statearr_25619_25642 = state_25617__$1;
(statearr_25619_25642[(2)] = inst_25599);

(statearr_25619_25642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25618 === (1))){
var inst_25593 = cljs.core.seq.call(null,coll);
var inst_25594 = inst_25593;
var state_25617__$1 = (function (){var statearr_25620 = state_25617;
(statearr_25620[(7)] = inst_25594);

return statearr_25620;
})();
var statearr_25621_25643 = state_25617__$1;
(statearr_25621_25643[(2)] = null);

(statearr_25621_25643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25618 === (4))){
var inst_25594 = (state_25617[(7)]);
var inst_25597 = cljs.core.first.call(null,inst_25594);
var state_25617__$1 = state_25617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25617__$1,(7),ch,inst_25597);
} else {
if((state_val_25618 === (13))){
var inst_25611 = (state_25617[(2)]);
var state_25617__$1 = state_25617;
var statearr_25622_25644 = state_25617__$1;
(statearr_25622_25644[(2)] = inst_25611);

(statearr_25622_25644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25618 === (6))){
var inst_25602 = (state_25617[(2)]);
var state_25617__$1 = state_25617;
if(cljs.core.truth_(inst_25602)){
var statearr_25623_25645 = state_25617__$1;
(statearr_25623_25645[(1)] = (8));

} else {
var statearr_25624_25646 = state_25617__$1;
(statearr_25624_25646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25618 === (3))){
var inst_25615 = (state_25617[(2)]);
var state_25617__$1 = state_25617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25617__$1,inst_25615);
} else {
if((state_val_25618 === (12))){
var state_25617__$1 = state_25617;
var statearr_25625_25647 = state_25617__$1;
(statearr_25625_25647[(2)] = null);

(statearr_25625_25647[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25618 === (2))){
var inst_25594 = (state_25617[(7)]);
var state_25617__$1 = state_25617;
if(cljs.core.truth_(inst_25594)){
var statearr_25626_25648 = state_25617__$1;
(statearr_25626_25648[(1)] = (4));

} else {
var statearr_25627_25649 = state_25617__$1;
(statearr_25627_25649[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25618 === (11))){
var inst_25608 = cljs.core.async.close_BANG_.call(null,ch);
var state_25617__$1 = state_25617;
var statearr_25628_25650 = state_25617__$1;
(statearr_25628_25650[(2)] = inst_25608);

(statearr_25628_25650[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25618 === (9))){
var state_25617__$1 = state_25617;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25629_25651 = state_25617__$1;
(statearr_25629_25651[(1)] = (11));

} else {
var statearr_25630_25652 = state_25617__$1;
(statearr_25630_25652[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25618 === (5))){
var inst_25594 = (state_25617[(7)]);
var state_25617__$1 = state_25617;
var statearr_25631_25653 = state_25617__$1;
(statearr_25631_25653[(2)] = inst_25594);

(statearr_25631_25653[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25618 === (10))){
var inst_25613 = (state_25617[(2)]);
var state_25617__$1 = state_25617;
var statearr_25632_25654 = state_25617__$1;
(statearr_25632_25654[(2)] = inst_25613);

(statearr_25632_25654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25618 === (8))){
var inst_25594 = (state_25617[(7)]);
var inst_25604 = cljs.core.next.call(null,inst_25594);
var inst_25594__$1 = inst_25604;
var state_25617__$1 = (function (){var statearr_25633 = state_25617;
(statearr_25633[(7)] = inst_25594__$1);

return statearr_25633;
})();
var statearr_25634_25655 = state_25617__$1;
(statearr_25634_25655[(2)] = null);

(statearr_25634_25655[(1)] = (2));


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
});})(c__19885__auto__))
;
return ((function (switch__19829__auto__,c__19885__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__19830__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__19830__auto____0 = (function (){
var statearr_25638 = [null,null,null,null,null,null,null,null];
(statearr_25638[(0)] = cljs$core$async$onto_chan_$_state_machine__19830__auto__);

(statearr_25638[(1)] = (1));

return statearr_25638;
});
var cljs$core$async$onto_chan_$_state_machine__19830__auto____1 = (function (state_25617){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_25617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e25639){if((e25639 instanceof Object)){
var ex__19833__auto__ = e25639;
var statearr_25640_25656 = state_25617;
(statearr_25640_25656[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25657 = state_25617;
state_25617 = G__25657;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__19830__auto__ = function(state_25617){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__19830__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__19830__auto____1.call(this,state_25617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__19830__auto____0;
cljs$core$async$onto_chan_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__19830__auto____1;
return cljs$core$async$onto_chan_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto__))
})();
var state__19887__auto__ = (function (){var statearr_25641 = f__19886__auto__.call(null);
(statearr_25641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto__);

return statearr_25641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto__))
);

return c__19885__auto__;
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

cljs.core.async.Mux = (function (){var obj25659 = {};
return obj25659;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__17691__auto__ = _;
if(and__17691__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__17691__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18339__auto__ = (((_ == null))?null:_);
return (function (){var or__17703__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18339__auto__)]);
if(or__17703__auto__){
return or__17703__auto__;
} else {
var or__17703__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__17703__auto____$1){
return or__17703__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj25661 = {};
return obj25661;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__17691__auto__ = m;
if(and__17691__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__17691__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18339__auto__ = (((m == null))?null:m);
return (function (){var or__17703__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18339__auto__)]);
if(or__17703__auto__){
return or__17703__auto__;
} else {
var or__17703__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__17703__auto____$1){
return or__17703__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__17691__auto__ = m;
if(and__17691__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__17691__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18339__auto__ = (((m == null))?null:m);
return (function (){var or__17703__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18339__auto__)]);
if(or__17703__auto__){
return or__17703__auto__;
} else {
var or__17703__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__17703__auto____$1){
return or__17703__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__17691__auto__ = m;
if(and__17691__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__17691__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18339__auto__ = (((m == null))?null:m);
return (function (){var or__17703__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18339__auto__)]);
if(or__17703__auto__){
return or__17703__auto__;
} else {
var or__17703__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__17703__auto____$1){
return or__17703__auto____$1;
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
if(typeof cljs.core.async.t25883 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25883 = (function (cs,ch,mult,meta25884){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25884 = meta25884;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25883.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25883.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25883.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25883.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t25883.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25883.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25883.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25885){
var self__ = this;
var _25885__$1 = this;
return self__.meta25884;
});})(cs))
;

cljs.core.async.t25883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25885,meta25884__$1){
var self__ = this;
var _25885__$1 = this;
return (new cljs.core.async.t25883(self__.cs,self__.ch,self__.mult,meta25884__$1));
});})(cs))
;

cljs.core.async.t25883.cljs$lang$type = true;

cljs.core.async.t25883.cljs$lang$ctorStr = "cljs.core.async/t25883";

cljs.core.async.t25883.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18282__auto__,writer__18283__auto__,opt__18284__auto__){
return cljs.core._write.call(null,writer__18283__auto__,"cljs.core.async/t25883");
});})(cs))
;

cljs.core.async.__GT_t25883 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t25883(cs__$1,ch__$1,mult__$1,meta25884){
return (new cljs.core.async.t25883(cs__$1,ch__$1,mult__$1,meta25884));
});})(cs))
;

}

return (new cljs.core.async.t25883(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19885__auto___26104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto___26104,cs,m,dchan,dctr,done){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto___26104,cs,m,dchan,dctr,done){
return (function (state_26016){
var state_val_26017 = (state_26016[(1)]);
if((state_val_26017 === (7))){
var inst_26012 = (state_26016[(2)]);
var state_26016__$1 = state_26016;
var statearr_26018_26105 = state_26016__$1;
(statearr_26018_26105[(2)] = inst_26012);

(statearr_26018_26105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (20))){
var inst_25917 = (state_26016[(7)]);
var inst_25927 = cljs.core.first.call(null,inst_25917);
var inst_25928 = cljs.core.nth.call(null,inst_25927,(0),null);
var inst_25929 = cljs.core.nth.call(null,inst_25927,(1),null);
var state_26016__$1 = (function (){var statearr_26019 = state_26016;
(statearr_26019[(8)] = inst_25928);

return statearr_26019;
})();
if(cljs.core.truth_(inst_25929)){
var statearr_26020_26106 = state_26016__$1;
(statearr_26020_26106[(1)] = (22));

} else {
var statearr_26021_26107 = state_26016__$1;
(statearr_26021_26107[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (27))){
var inst_25964 = (state_26016[(9)]);
var inst_25959 = (state_26016[(10)]);
var inst_25957 = (state_26016[(11)]);
var inst_25888 = (state_26016[(12)]);
var inst_25964__$1 = cljs.core._nth.call(null,inst_25957,inst_25959);
var inst_25965 = cljs.core.async.put_BANG_.call(null,inst_25964__$1,inst_25888,done);
var state_26016__$1 = (function (){var statearr_26022 = state_26016;
(statearr_26022[(9)] = inst_25964__$1);

return statearr_26022;
})();
if(cljs.core.truth_(inst_25965)){
var statearr_26023_26108 = state_26016__$1;
(statearr_26023_26108[(1)] = (30));

} else {
var statearr_26024_26109 = state_26016__$1;
(statearr_26024_26109[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (1))){
var state_26016__$1 = state_26016;
var statearr_26025_26110 = state_26016__$1;
(statearr_26025_26110[(2)] = null);

(statearr_26025_26110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (24))){
var inst_25917 = (state_26016[(7)]);
var inst_25934 = (state_26016[(2)]);
var inst_25935 = cljs.core.next.call(null,inst_25917);
var inst_25897 = inst_25935;
var inst_25898 = null;
var inst_25899 = (0);
var inst_25900 = (0);
var state_26016__$1 = (function (){var statearr_26026 = state_26016;
(statearr_26026[(13)] = inst_25898);

(statearr_26026[(14)] = inst_25899);

(statearr_26026[(15)] = inst_25897);

(statearr_26026[(16)] = inst_25934);

(statearr_26026[(17)] = inst_25900);

return statearr_26026;
})();
var statearr_26027_26111 = state_26016__$1;
(statearr_26027_26111[(2)] = null);

(statearr_26027_26111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (39))){
var state_26016__$1 = state_26016;
var statearr_26031_26112 = state_26016__$1;
(statearr_26031_26112[(2)] = null);

(statearr_26031_26112[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (4))){
var inst_25888 = (state_26016[(12)]);
var inst_25888__$1 = (state_26016[(2)]);
var inst_25889 = (inst_25888__$1 == null);
var state_26016__$1 = (function (){var statearr_26032 = state_26016;
(statearr_26032[(12)] = inst_25888__$1);

return statearr_26032;
})();
if(cljs.core.truth_(inst_25889)){
var statearr_26033_26113 = state_26016__$1;
(statearr_26033_26113[(1)] = (5));

} else {
var statearr_26034_26114 = state_26016__$1;
(statearr_26034_26114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (15))){
var inst_25898 = (state_26016[(13)]);
var inst_25899 = (state_26016[(14)]);
var inst_25897 = (state_26016[(15)]);
var inst_25900 = (state_26016[(17)]);
var inst_25913 = (state_26016[(2)]);
var inst_25914 = (inst_25900 + (1));
var tmp26028 = inst_25898;
var tmp26029 = inst_25899;
var tmp26030 = inst_25897;
var inst_25897__$1 = tmp26030;
var inst_25898__$1 = tmp26028;
var inst_25899__$1 = tmp26029;
var inst_25900__$1 = inst_25914;
var state_26016__$1 = (function (){var statearr_26035 = state_26016;
(statearr_26035[(18)] = inst_25913);

(statearr_26035[(13)] = inst_25898__$1);

(statearr_26035[(14)] = inst_25899__$1);

(statearr_26035[(15)] = inst_25897__$1);

(statearr_26035[(17)] = inst_25900__$1);

return statearr_26035;
})();
var statearr_26036_26115 = state_26016__$1;
(statearr_26036_26115[(2)] = null);

(statearr_26036_26115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (21))){
var inst_25938 = (state_26016[(2)]);
var state_26016__$1 = state_26016;
var statearr_26040_26116 = state_26016__$1;
(statearr_26040_26116[(2)] = inst_25938);

(statearr_26040_26116[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (31))){
var inst_25964 = (state_26016[(9)]);
var inst_25968 = done.call(null,null);
var inst_25969 = cljs.core.async.untap_STAR_.call(null,m,inst_25964);
var state_26016__$1 = (function (){var statearr_26041 = state_26016;
(statearr_26041[(19)] = inst_25968);

return statearr_26041;
})();
var statearr_26042_26117 = state_26016__$1;
(statearr_26042_26117[(2)] = inst_25969);

(statearr_26042_26117[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (32))){
var inst_25959 = (state_26016[(10)]);
var inst_25958 = (state_26016[(20)]);
var inst_25956 = (state_26016[(21)]);
var inst_25957 = (state_26016[(11)]);
var inst_25971 = (state_26016[(2)]);
var inst_25972 = (inst_25959 + (1));
var tmp26037 = inst_25958;
var tmp26038 = inst_25956;
var tmp26039 = inst_25957;
var inst_25956__$1 = tmp26038;
var inst_25957__$1 = tmp26039;
var inst_25958__$1 = tmp26037;
var inst_25959__$1 = inst_25972;
var state_26016__$1 = (function (){var statearr_26043 = state_26016;
(statearr_26043[(10)] = inst_25959__$1);

(statearr_26043[(20)] = inst_25958__$1);

(statearr_26043[(21)] = inst_25956__$1);

(statearr_26043[(11)] = inst_25957__$1);

(statearr_26043[(22)] = inst_25971);

return statearr_26043;
})();
var statearr_26044_26118 = state_26016__$1;
(statearr_26044_26118[(2)] = null);

(statearr_26044_26118[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (40))){
var inst_25984 = (state_26016[(23)]);
var inst_25988 = done.call(null,null);
var inst_25989 = cljs.core.async.untap_STAR_.call(null,m,inst_25984);
var state_26016__$1 = (function (){var statearr_26045 = state_26016;
(statearr_26045[(24)] = inst_25988);

return statearr_26045;
})();
var statearr_26046_26119 = state_26016__$1;
(statearr_26046_26119[(2)] = inst_25989);

(statearr_26046_26119[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (33))){
var inst_25975 = (state_26016[(25)]);
var inst_25977 = cljs.core.chunked_seq_QMARK_.call(null,inst_25975);
var state_26016__$1 = state_26016;
if(inst_25977){
var statearr_26047_26120 = state_26016__$1;
(statearr_26047_26120[(1)] = (36));

} else {
var statearr_26048_26121 = state_26016__$1;
(statearr_26048_26121[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (13))){
var inst_25907 = (state_26016[(26)]);
var inst_25910 = cljs.core.async.close_BANG_.call(null,inst_25907);
var state_26016__$1 = state_26016;
var statearr_26049_26122 = state_26016__$1;
(statearr_26049_26122[(2)] = inst_25910);

(statearr_26049_26122[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (22))){
var inst_25928 = (state_26016[(8)]);
var inst_25931 = cljs.core.async.close_BANG_.call(null,inst_25928);
var state_26016__$1 = state_26016;
var statearr_26050_26123 = state_26016__$1;
(statearr_26050_26123[(2)] = inst_25931);

(statearr_26050_26123[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (36))){
var inst_25975 = (state_26016[(25)]);
var inst_25979 = cljs.core.chunk_first.call(null,inst_25975);
var inst_25980 = cljs.core.chunk_rest.call(null,inst_25975);
var inst_25981 = cljs.core.count.call(null,inst_25979);
var inst_25956 = inst_25980;
var inst_25957 = inst_25979;
var inst_25958 = inst_25981;
var inst_25959 = (0);
var state_26016__$1 = (function (){var statearr_26051 = state_26016;
(statearr_26051[(10)] = inst_25959);

(statearr_26051[(20)] = inst_25958);

(statearr_26051[(21)] = inst_25956);

(statearr_26051[(11)] = inst_25957);

return statearr_26051;
})();
var statearr_26052_26124 = state_26016__$1;
(statearr_26052_26124[(2)] = null);

(statearr_26052_26124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (41))){
var inst_25975 = (state_26016[(25)]);
var inst_25991 = (state_26016[(2)]);
var inst_25992 = cljs.core.next.call(null,inst_25975);
var inst_25956 = inst_25992;
var inst_25957 = null;
var inst_25958 = (0);
var inst_25959 = (0);
var state_26016__$1 = (function (){var statearr_26053 = state_26016;
(statearr_26053[(10)] = inst_25959);

(statearr_26053[(27)] = inst_25991);

(statearr_26053[(20)] = inst_25958);

(statearr_26053[(21)] = inst_25956);

(statearr_26053[(11)] = inst_25957);

return statearr_26053;
})();
var statearr_26054_26125 = state_26016__$1;
(statearr_26054_26125[(2)] = null);

(statearr_26054_26125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (43))){
var state_26016__$1 = state_26016;
var statearr_26055_26126 = state_26016__$1;
(statearr_26055_26126[(2)] = null);

(statearr_26055_26126[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (29))){
var inst_26000 = (state_26016[(2)]);
var state_26016__$1 = state_26016;
var statearr_26056_26127 = state_26016__$1;
(statearr_26056_26127[(2)] = inst_26000);

(statearr_26056_26127[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (44))){
var inst_26009 = (state_26016[(2)]);
var state_26016__$1 = (function (){var statearr_26057 = state_26016;
(statearr_26057[(28)] = inst_26009);

return statearr_26057;
})();
var statearr_26058_26128 = state_26016__$1;
(statearr_26058_26128[(2)] = null);

(statearr_26058_26128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (6))){
var inst_25948 = (state_26016[(29)]);
var inst_25947 = cljs.core.deref.call(null,cs);
var inst_25948__$1 = cljs.core.keys.call(null,inst_25947);
var inst_25949 = cljs.core.count.call(null,inst_25948__$1);
var inst_25950 = cljs.core.reset_BANG_.call(null,dctr,inst_25949);
var inst_25955 = cljs.core.seq.call(null,inst_25948__$1);
var inst_25956 = inst_25955;
var inst_25957 = null;
var inst_25958 = (0);
var inst_25959 = (0);
var state_26016__$1 = (function (){var statearr_26059 = state_26016;
(statearr_26059[(10)] = inst_25959);

(statearr_26059[(20)] = inst_25958);

(statearr_26059[(21)] = inst_25956);

(statearr_26059[(29)] = inst_25948__$1);

(statearr_26059[(11)] = inst_25957);

(statearr_26059[(30)] = inst_25950);

return statearr_26059;
})();
var statearr_26060_26129 = state_26016__$1;
(statearr_26060_26129[(2)] = null);

(statearr_26060_26129[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (28))){
var inst_25956 = (state_26016[(21)]);
var inst_25975 = (state_26016[(25)]);
var inst_25975__$1 = cljs.core.seq.call(null,inst_25956);
var state_26016__$1 = (function (){var statearr_26061 = state_26016;
(statearr_26061[(25)] = inst_25975__$1);

return statearr_26061;
})();
if(inst_25975__$1){
var statearr_26062_26130 = state_26016__$1;
(statearr_26062_26130[(1)] = (33));

} else {
var statearr_26063_26131 = state_26016__$1;
(statearr_26063_26131[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (25))){
var inst_25959 = (state_26016[(10)]);
var inst_25958 = (state_26016[(20)]);
var inst_25961 = (inst_25959 < inst_25958);
var inst_25962 = inst_25961;
var state_26016__$1 = state_26016;
if(cljs.core.truth_(inst_25962)){
var statearr_26064_26132 = state_26016__$1;
(statearr_26064_26132[(1)] = (27));

} else {
var statearr_26065_26133 = state_26016__$1;
(statearr_26065_26133[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (34))){
var state_26016__$1 = state_26016;
var statearr_26066_26134 = state_26016__$1;
(statearr_26066_26134[(2)] = null);

(statearr_26066_26134[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (17))){
var state_26016__$1 = state_26016;
var statearr_26067_26135 = state_26016__$1;
(statearr_26067_26135[(2)] = null);

(statearr_26067_26135[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (3))){
var inst_26014 = (state_26016[(2)]);
var state_26016__$1 = state_26016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26016__$1,inst_26014);
} else {
if((state_val_26017 === (12))){
var inst_25943 = (state_26016[(2)]);
var state_26016__$1 = state_26016;
var statearr_26068_26136 = state_26016__$1;
(statearr_26068_26136[(2)] = inst_25943);

(statearr_26068_26136[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (2))){
var state_26016__$1 = state_26016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26016__$1,(4),ch);
} else {
if((state_val_26017 === (23))){
var state_26016__$1 = state_26016;
var statearr_26069_26137 = state_26016__$1;
(statearr_26069_26137[(2)] = null);

(statearr_26069_26137[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (35))){
var inst_25998 = (state_26016[(2)]);
var state_26016__$1 = state_26016;
var statearr_26070_26138 = state_26016__$1;
(statearr_26070_26138[(2)] = inst_25998);

(statearr_26070_26138[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (19))){
var inst_25917 = (state_26016[(7)]);
var inst_25921 = cljs.core.chunk_first.call(null,inst_25917);
var inst_25922 = cljs.core.chunk_rest.call(null,inst_25917);
var inst_25923 = cljs.core.count.call(null,inst_25921);
var inst_25897 = inst_25922;
var inst_25898 = inst_25921;
var inst_25899 = inst_25923;
var inst_25900 = (0);
var state_26016__$1 = (function (){var statearr_26071 = state_26016;
(statearr_26071[(13)] = inst_25898);

(statearr_26071[(14)] = inst_25899);

(statearr_26071[(15)] = inst_25897);

(statearr_26071[(17)] = inst_25900);

return statearr_26071;
})();
var statearr_26072_26139 = state_26016__$1;
(statearr_26072_26139[(2)] = null);

(statearr_26072_26139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (11))){
var inst_25917 = (state_26016[(7)]);
var inst_25897 = (state_26016[(15)]);
var inst_25917__$1 = cljs.core.seq.call(null,inst_25897);
var state_26016__$1 = (function (){var statearr_26073 = state_26016;
(statearr_26073[(7)] = inst_25917__$1);

return statearr_26073;
})();
if(inst_25917__$1){
var statearr_26074_26140 = state_26016__$1;
(statearr_26074_26140[(1)] = (16));

} else {
var statearr_26075_26141 = state_26016__$1;
(statearr_26075_26141[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (9))){
var inst_25945 = (state_26016[(2)]);
var state_26016__$1 = state_26016;
var statearr_26076_26142 = state_26016__$1;
(statearr_26076_26142[(2)] = inst_25945);

(statearr_26076_26142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (5))){
var inst_25895 = cljs.core.deref.call(null,cs);
var inst_25896 = cljs.core.seq.call(null,inst_25895);
var inst_25897 = inst_25896;
var inst_25898 = null;
var inst_25899 = (0);
var inst_25900 = (0);
var state_26016__$1 = (function (){var statearr_26077 = state_26016;
(statearr_26077[(13)] = inst_25898);

(statearr_26077[(14)] = inst_25899);

(statearr_26077[(15)] = inst_25897);

(statearr_26077[(17)] = inst_25900);

return statearr_26077;
})();
var statearr_26078_26143 = state_26016__$1;
(statearr_26078_26143[(2)] = null);

(statearr_26078_26143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (14))){
var state_26016__$1 = state_26016;
var statearr_26079_26144 = state_26016__$1;
(statearr_26079_26144[(2)] = null);

(statearr_26079_26144[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (45))){
var inst_26006 = (state_26016[(2)]);
var state_26016__$1 = state_26016;
var statearr_26080_26145 = state_26016__$1;
(statearr_26080_26145[(2)] = inst_26006);

(statearr_26080_26145[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (26))){
var inst_25948 = (state_26016[(29)]);
var inst_26002 = (state_26016[(2)]);
var inst_26003 = cljs.core.seq.call(null,inst_25948);
var state_26016__$1 = (function (){var statearr_26081 = state_26016;
(statearr_26081[(31)] = inst_26002);

return statearr_26081;
})();
if(inst_26003){
var statearr_26082_26146 = state_26016__$1;
(statearr_26082_26146[(1)] = (42));

} else {
var statearr_26083_26147 = state_26016__$1;
(statearr_26083_26147[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (16))){
var inst_25917 = (state_26016[(7)]);
var inst_25919 = cljs.core.chunked_seq_QMARK_.call(null,inst_25917);
var state_26016__$1 = state_26016;
if(inst_25919){
var statearr_26084_26148 = state_26016__$1;
(statearr_26084_26148[(1)] = (19));

} else {
var statearr_26085_26149 = state_26016__$1;
(statearr_26085_26149[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (38))){
var inst_25995 = (state_26016[(2)]);
var state_26016__$1 = state_26016;
var statearr_26086_26150 = state_26016__$1;
(statearr_26086_26150[(2)] = inst_25995);

(statearr_26086_26150[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (30))){
var state_26016__$1 = state_26016;
var statearr_26087_26151 = state_26016__$1;
(statearr_26087_26151[(2)] = null);

(statearr_26087_26151[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (10))){
var inst_25898 = (state_26016[(13)]);
var inst_25900 = (state_26016[(17)]);
var inst_25906 = cljs.core._nth.call(null,inst_25898,inst_25900);
var inst_25907 = cljs.core.nth.call(null,inst_25906,(0),null);
var inst_25908 = cljs.core.nth.call(null,inst_25906,(1),null);
var state_26016__$1 = (function (){var statearr_26088 = state_26016;
(statearr_26088[(26)] = inst_25907);

return statearr_26088;
})();
if(cljs.core.truth_(inst_25908)){
var statearr_26089_26152 = state_26016__$1;
(statearr_26089_26152[(1)] = (13));

} else {
var statearr_26090_26153 = state_26016__$1;
(statearr_26090_26153[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (18))){
var inst_25941 = (state_26016[(2)]);
var state_26016__$1 = state_26016;
var statearr_26091_26154 = state_26016__$1;
(statearr_26091_26154[(2)] = inst_25941);

(statearr_26091_26154[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (42))){
var state_26016__$1 = state_26016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26016__$1,(45),dchan);
} else {
if((state_val_26017 === (37))){
var inst_25984 = (state_26016[(23)]);
var inst_25975 = (state_26016[(25)]);
var inst_25888 = (state_26016[(12)]);
var inst_25984__$1 = cljs.core.first.call(null,inst_25975);
var inst_25985 = cljs.core.async.put_BANG_.call(null,inst_25984__$1,inst_25888,done);
var state_26016__$1 = (function (){var statearr_26092 = state_26016;
(statearr_26092[(23)] = inst_25984__$1);

return statearr_26092;
})();
if(cljs.core.truth_(inst_25985)){
var statearr_26093_26155 = state_26016__$1;
(statearr_26093_26155[(1)] = (39));

} else {
var statearr_26094_26156 = state_26016__$1;
(statearr_26094_26156[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (8))){
var inst_25899 = (state_26016[(14)]);
var inst_25900 = (state_26016[(17)]);
var inst_25902 = (inst_25900 < inst_25899);
var inst_25903 = inst_25902;
var state_26016__$1 = state_26016;
if(cljs.core.truth_(inst_25903)){
var statearr_26095_26157 = state_26016__$1;
(statearr_26095_26157[(1)] = (10));

} else {
var statearr_26096_26158 = state_26016__$1;
(statearr_26096_26158[(1)] = (11));

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
});})(c__19885__auto___26104,cs,m,dchan,dctr,done))
;
return ((function (switch__19829__auto__,c__19885__auto___26104,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19830__auto__ = null;
var cljs$core$async$mult_$_state_machine__19830__auto____0 = (function (){
var statearr_26100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26100[(0)] = cljs$core$async$mult_$_state_machine__19830__auto__);

(statearr_26100[(1)] = (1));

return statearr_26100;
});
var cljs$core$async$mult_$_state_machine__19830__auto____1 = (function (state_26016){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_26016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e26101){if((e26101 instanceof Object)){
var ex__19833__auto__ = e26101;
var statearr_26102_26159 = state_26016;
(statearr_26102_26159[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26160 = state_26016;
state_26016 = G__26160;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19830__auto__ = function(state_26016){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19830__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19830__auto____1.call(this,state_26016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19830__auto____0;
cljs$core$async$mult_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19830__auto____1;
return cljs$core$async$mult_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto___26104,cs,m,dchan,dctr,done))
})();
var state__19887__auto__ = (function (){var statearr_26103 = f__19886__auto__.call(null);
(statearr_26103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___26104);

return statearr_26103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto___26104,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj26162 = {};
return obj26162;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__17691__auto__ = m;
if(and__17691__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__17691__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18339__auto__ = (((m == null))?null:m);
return (function (){var or__17703__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18339__auto__)]);
if(or__17703__auto__){
return or__17703__auto__;
} else {
var or__17703__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__17703__auto____$1){
return or__17703__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__17691__auto__ = m;
if(and__17691__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__17691__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18339__auto__ = (((m == null))?null:m);
return (function (){var or__17703__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18339__auto__)]);
if(or__17703__auto__){
return or__17703__auto__;
} else {
var or__17703__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__17703__auto____$1){
return or__17703__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__17691__auto__ = m;
if(and__17691__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__17691__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18339__auto__ = (((m == null))?null:m);
return (function (){var or__17703__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18339__auto__)]);
if(or__17703__auto__){
return or__17703__auto__;
} else {
var or__17703__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__17703__auto____$1){
return or__17703__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__17691__auto__ = m;
if(and__17691__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__17691__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18339__auto__ = (((m == null))?null:m);
return (function (){var or__17703__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18339__auto__)]);
if(or__17703__auto__){
return or__17703__auto__;
} else {
var or__17703__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__17703__auto____$1){
return or__17703__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__17691__auto__ = m;
if(and__17691__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__17691__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18339__auto__ = (((m == null))?null:m);
return (function (){var or__17703__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18339__auto__)]);
if(or__17703__auto__){
return or__17703__auto__;
} else {
var or__17703__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__17703__auto____$1){
return or__17703__auto____$1;
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
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26163){
var map__26168 = p__26163;
var map__26168__$1 = ((cljs.core.seq_QMARK_.call(null,map__26168))?cljs.core.apply.call(null,cljs.core.hash_map,map__26168):map__26168);
var opts = map__26168__$1;
var statearr_26169_26172 = state;
(statearr_26169_26172[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__26168,map__26168__$1,opts){
return (function (val){
var statearr_26170_26173 = state;
(statearr_26170_26173[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26168,map__26168__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_26171_26174 = state;
(statearr_26171_26174[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26163 = null;
if (arguments.length > 3) {
var G__26175__i = 0, G__26175__a = new Array(arguments.length -  3);
while (G__26175__i < G__26175__a.length) {G__26175__a[G__26175__i] = arguments[G__26175__i + 3]; ++G__26175__i;}
  p__26163 = new cljs.core.IndexedSeq(G__26175__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26163);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26176){
var state = cljs.core.first(arglist__26176);
arglist__26176 = cljs.core.next(arglist__26176);
var cont_block = cljs.core.first(arglist__26176);
arglist__26176 = cljs.core.next(arglist__26176);
var ports = cljs.core.first(arglist__26176);
var p__26163 = cljs.core.rest(arglist__26176);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__26163);
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
if(typeof cljs.core.async.t26296 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26296 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26297){
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
this.meta26297 = meta26297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26296.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26296.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26296.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26296.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26296.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26296.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t26296.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26296.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26298){
var self__ = this;
var _26298__$1 = this;
return self__.meta26297;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26298,meta26297__$1){
var self__ = this;
var _26298__$1 = this;
return (new cljs.core.async.t26296(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26297__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26296.cljs$lang$type = true;

cljs.core.async.t26296.cljs$lang$ctorStr = "cljs.core.async/t26296";

cljs.core.async.t26296.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18282__auto__,writer__18283__auto__,opt__18284__auto__){
return cljs.core._write.call(null,writer__18283__auto__,"cljs.core.async/t26296");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26296 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t26296(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26297){
return (new cljs.core.async.t26296(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26297));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26296(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19885__auto___26415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto___26415,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto___26415,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26368){
var state_val_26369 = (state_26368[(1)]);
if((state_val_26369 === (7))){
var inst_26312 = (state_26368[(7)]);
var inst_26317 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26312);
var state_26368__$1 = state_26368;
var statearr_26370_26416 = state_26368__$1;
(statearr_26370_26416[(2)] = inst_26317);

(statearr_26370_26416[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (20))){
var inst_26327 = (state_26368[(8)]);
var state_26368__$1 = state_26368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26368__$1,(23),out,inst_26327);
} else {
if((state_val_26369 === (1))){
var inst_26302 = (state_26368[(9)]);
var inst_26302__$1 = calc_state.call(null);
var inst_26303 = cljs.core.seq_QMARK_.call(null,inst_26302__$1);
var state_26368__$1 = (function (){var statearr_26371 = state_26368;
(statearr_26371[(9)] = inst_26302__$1);

return statearr_26371;
})();
if(inst_26303){
var statearr_26372_26417 = state_26368__$1;
(statearr_26372_26417[(1)] = (2));

} else {
var statearr_26373_26418 = state_26368__$1;
(statearr_26373_26418[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (24))){
var inst_26320 = (state_26368[(10)]);
var inst_26312 = inst_26320;
var state_26368__$1 = (function (){var statearr_26374 = state_26368;
(statearr_26374[(7)] = inst_26312);

return statearr_26374;
})();
var statearr_26375_26419 = state_26368__$1;
(statearr_26375_26419[(2)] = null);

(statearr_26375_26419[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (4))){
var inst_26302 = (state_26368[(9)]);
var inst_26308 = (state_26368[(2)]);
var inst_26309 = cljs.core.get.call(null,inst_26308,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26310 = cljs.core.get.call(null,inst_26308,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26311 = cljs.core.get.call(null,inst_26308,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26312 = inst_26302;
var state_26368__$1 = (function (){var statearr_26376 = state_26368;
(statearr_26376[(11)] = inst_26310);

(statearr_26376[(12)] = inst_26311);

(statearr_26376[(7)] = inst_26312);

(statearr_26376[(13)] = inst_26309);

return statearr_26376;
})();
var statearr_26377_26420 = state_26368__$1;
(statearr_26377_26420[(2)] = null);

(statearr_26377_26420[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (15))){
var state_26368__$1 = state_26368;
var statearr_26378_26421 = state_26368__$1;
(statearr_26378_26421[(2)] = null);

(statearr_26378_26421[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (21))){
var inst_26320 = (state_26368[(10)]);
var inst_26312 = inst_26320;
var state_26368__$1 = (function (){var statearr_26379 = state_26368;
(statearr_26379[(7)] = inst_26312);

return statearr_26379;
})();
var statearr_26380_26422 = state_26368__$1;
(statearr_26380_26422[(2)] = null);

(statearr_26380_26422[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (13))){
var inst_26364 = (state_26368[(2)]);
var state_26368__$1 = state_26368;
var statearr_26381_26423 = state_26368__$1;
(statearr_26381_26423[(2)] = inst_26364);

(statearr_26381_26423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (22))){
var inst_26362 = (state_26368[(2)]);
var state_26368__$1 = state_26368;
var statearr_26382_26424 = state_26368__$1;
(statearr_26382_26424[(2)] = inst_26362);

(statearr_26382_26424[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (6))){
var inst_26366 = (state_26368[(2)]);
var state_26368__$1 = state_26368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26368__$1,inst_26366);
} else {
if((state_val_26369 === (25))){
var state_26368__$1 = state_26368;
var statearr_26383_26425 = state_26368__$1;
(statearr_26383_26425[(2)] = null);

(statearr_26383_26425[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (17))){
var inst_26342 = (state_26368[(14)]);
var state_26368__$1 = state_26368;
var statearr_26384_26426 = state_26368__$1;
(statearr_26384_26426[(2)] = inst_26342);

(statearr_26384_26426[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (3))){
var inst_26302 = (state_26368[(9)]);
var state_26368__$1 = state_26368;
var statearr_26385_26427 = state_26368__$1;
(statearr_26385_26427[(2)] = inst_26302);

(statearr_26385_26427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (12))){
var inst_26323 = (state_26368[(15)]);
var inst_26342 = (state_26368[(14)]);
var inst_26328 = (state_26368[(16)]);
var inst_26342__$1 = inst_26323.call(null,inst_26328);
var state_26368__$1 = (function (){var statearr_26386 = state_26368;
(statearr_26386[(14)] = inst_26342__$1);

return statearr_26386;
})();
if(cljs.core.truth_(inst_26342__$1)){
var statearr_26387_26428 = state_26368__$1;
(statearr_26387_26428[(1)] = (17));

} else {
var statearr_26388_26429 = state_26368__$1;
(statearr_26388_26429[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (2))){
var inst_26302 = (state_26368[(9)]);
var inst_26305 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26302);
var state_26368__$1 = state_26368;
var statearr_26389_26430 = state_26368__$1;
(statearr_26389_26430[(2)] = inst_26305);

(statearr_26389_26430[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (23))){
var inst_26353 = (state_26368[(2)]);
var state_26368__$1 = state_26368;
if(cljs.core.truth_(inst_26353)){
var statearr_26390_26431 = state_26368__$1;
(statearr_26390_26431[(1)] = (24));

} else {
var statearr_26391_26432 = state_26368__$1;
(statearr_26391_26432[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (19))){
var inst_26350 = (state_26368[(2)]);
var state_26368__$1 = state_26368;
if(cljs.core.truth_(inst_26350)){
var statearr_26392_26433 = state_26368__$1;
(statearr_26392_26433[(1)] = (20));

} else {
var statearr_26393_26434 = state_26368__$1;
(statearr_26393_26434[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (11))){
var inst_26327 = (state_26368[(8)]);
var inst_26333 = (inst_26327 == null);
var state_26368__$1 = state_26368;
if(cljs.core.truth_(inst_26333)){
var statearr_26394_26435 = state_26368__$1;
(statearr_26394_26435[(1)] = (14));

} else {
var statearr_26395_26436 = state_26368__$1;
(statearr_26395_26436[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (9))){
var inst_26320 = (state_26368[(10)]);
var inst_26320__$1 = (state_26368[(2)]);
var inst_26321 = cljs.core.get.call(null,inst_26320__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26322 = cljs.core.get.call(null,inst_26320__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26323 = cljs.core.get.call(null,inst_26320__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_26368__$1 = (function (){var statearr_26396 = state_26368;
(statearr_26396[(15)] = inst_26323);

(statearr_26396[(17)] = inst_26322);

(statearr_26396[(10)] = inst_26320__$1);

return statearr_26396;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26368__$1,(10),inst_26321);
} else {
if((state_val_26369 === (5))){
var inst_26312 = (state_26368[(7)]);
var inst_26315 = cljs.core.seq_QMARK_.call(null,inst_26312);
var state_26368__$1 = state_26368;
if(inst_26315){
var statearr_26397_26437 = state_26368__$1;
(statearr_26397_26437[(1)] = (7));

} else {
var statearr_26398_26438 = state_26368__$1;
(statearr_26398_26438[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (14))){
var inst_26328 = (state_26368[(16)]);
var inst_26335 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26328);
var state_26368__$1 = state_26368;
var statearr_26399_26439 = state_26368__$1;
(statearr_26399_26439[(2)] = inst_26335);

(statearr_26399_26439[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (26))){
var inst_26358 = (state_26368[(2)]);
var state_26368__$1 = state_26368;
var statearr_26400_26440 = state_26368__$1;
(statearr_26400_26440[(2)] = inst_26358);

(statearr_26400_26440[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (16))){
var inst_26338 = (state_26368[(2)]);
var inst_26339 = calc_state.call(null);
var inst_26312 = inst_26339;
var state_26368__$1 = (function (){var statearr_26401 = state_26368;
(statearr_26401[(7)] = inst_26312);

(statearr_26401[(18)] = inst_26338);

return statearr_26401;
})();
var statearr_26402_26441 = state_26368__$1;
(statearr_26402_26441[(2)] = null);

(statearr_26402_26441[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (10))){
var inst_26328 = (state_26368[(16)]);
var inst_26327 = (state_26368[(8)]);
var inst_26326 = (state_26368[(2)]);
var inst_26327__$1 = cljs.core.nth.call(null,inst_26326,(0),null);
var inst_26328__$1 = cljs.core.nth.call(null,inst_26326,(1),null);
var inst_26329 = (inst_26327__$1 == null);
var inst_26330 = cljs.core._EQ_.call(null,inst_26328__$1,change);
var inst_26331 = (inst_26329) || (inst_26330);
var state_26368__$1 = (function (){var statearr_26403 = state_26368;
(statearr_26403[(16)] = inst_26328__$1);

(statearr_26403[(8)] = inst_26327__$1);

return statearr_26403;
})();
if(cljs.core.truth_(inst_26331)){
var statearr_26404_26442 = state_26368__$1;
(statearr_26404_26442[(1)] = (11));

} else {
var statearr_26405_26443 = state_26368__$1;
(statearr_26405_26443[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (18))){
var inst_26323 = (state_26368[(15)]);
var inst_26328 = (state_26368[(16)]);
var inst_26322 = (state_26368[(17)]);
var inst_26345 = cljs.core.empty_QMARK_.call(null,inst_26323);
var inst_26346 = inst_26322.call(null,inst_26328);
var inst_26347 = cljs.core.not.call(null,inst_26346);
var inst_26348 = (inst_26345) && (inst_26347);
var state_26368__$1 = state_26368;
var statearr_26406_26444 = state_26368__$1;
(statearr_26406_26444[(2)] = inst_26348);

(statearr_26406_26444[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26369 === (8))){
var inst_26312 = (state_26368[(7)]);
var state_26368__$1 = state_26368;
var statearr_26407_26445 = state_26368__$1;
(statearr_26407_26445[(2)] = inst_26312);

(statearr_26407_26445[(1)] = (9));


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
});})(c__19885__auto___26415,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19829__auto__,c__19885__auto___26415,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19830__auto__ = null;
var cljs$core$async$mix_$_state_machine__19830__auto____0 = (function (){
var statearr_26411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26411[(0)] = cljs$core$async$mix_$_state_machine__19830__auto__);

(statearr_26411[(1)] = (1));

return statearr_26411;
});
var cljs$core$async$mix_$_state_machine__19830__auto____1 = (function (state_26368){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_26368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e26412){if((e26412 instanceof Object)){
var ex__19833__auto__ = e26412;
var statearr_26413_26446 = state_26368;
(statearr_26413_26446[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26447 = state_26368;
state_26368 = G__26447;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19830__auto__ = function(state_26368){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19830__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19830__auto____1.call(this,state_26368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19830__auto____0;
cljs$core$async$mix_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19830__auto____1;
return cljs$core$async$mix_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto___26415,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19887__auto__ = (function (){var statearr_26414 = f__19886__auto__.call(null);
(statearr_26414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___26415);

return statearr_26414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto___26415,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj26449 = {};
return obj26449;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__17691__auto__ = p;
if(and__17691__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__17691__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18339__auto__ = (((p == null))?null:p);
return (function (){var or__17703__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18339__auto__)]);
if(or__17703__auto__){
return or__17703__auto__;
} else {
var or__17703__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__17703__auto____$1){
return or__17703__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__17691__auto__ = p;
if(and__17691__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__17691__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18339__auto__ = (((p == null))?null:p);
return (function (){var or__17703__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18339__auto__)]);
if(or__17703__auto__){
return or__17703__auto__;
} else {
var or__17703__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__17703__auto____$1){
return or__17703__auto____$1;
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
if((function (){var and__17691__auto__ = p;
if(and__17691__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__17691__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18339__auto__ = (((p == null))?null:p);
return (function (){var or__17703__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18339__auto__)]);
if(or__17703__auto__){
return or__17703__auto__;
} else {
var or__17703__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17703__auto____$1){
return or__17703__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__17691__auto__ = p;
if(and__17691__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__17691__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18339__auto__ = (((p == null))?null:p);
return (function (){var or__17703__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18339__auto__)]);
if(or__17703__auto__){
return or__17703__auto__;
} else {
var or__17703__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17703__auto____$1){
return or__17703__auto____$1;
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
var or__17703__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17703__auto__)){
return or__17703__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17703__auto__,mults){
return (function (p1__26450_SHARP_){
if(cljs.core.truth_(p1__26450_SHARP_.call(null,topic))){
return p1__26450_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26450_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17703__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26573 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26573 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26574){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26574 = meta26574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26573.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26573.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26573.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t26573.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t26573.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26573.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26573.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26573.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26575){
var self__ = this;
var _26575__$1 = this;
return self__.meta26574;
});})(mults,ensure_mult))
;

cljs.core.async.t26573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26575,meta26574__$1){
var self__ = this;
var _26575__$1 = this;
return (new cljs.core.async.t26573(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26574__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26573.cljs$lang$type = true;

cljs.core.async.t26573.cljs$lang$ctorStr = "cljs.core.async/t26573";

cljs.core.async.t26573.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18282__auto__,writer__18283__auto__,opt__18284__auto__){
return cljs.core._write.call(null,writer__18283__auto__,"cljs.core.async/t26573");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26573 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t26573(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26574){
return (new cljs.core.async.t26573(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26574));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26573(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19885__auto___26695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto___26695,mults,ensure_mult,p){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto___26695,mults,ensure_mult,p){
return (function (state_26647){
var state_val_26648 = (state_26647[(1)]);
if((state_val_26648 === (7))){
var inst_26643 = (state_26647[(2)]);
var state_26647__$1 = state_26647;
var statearr_26649_26696 = state_26647__$1;
(statearr_26649_26696[(2)] = inst_26643);

(statearr_26649_26696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (20))){
var state_26647__$1 = state_26647;
var statearr_26650_26697 = state_26647__$1;
(statearr_26650_26697[(2)] = null);

(statearr_26650_26697[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (1))){
var state_26647__$1 = state_26647;
var statearr_26651_26698 = state_26647__$1;
(statearr_26651_26698[(2)] = null);

(statearr_26651_26698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (24))){
var inst_26626 = (state_26647[(7)]);
var inst_26635 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26626);
var state_26647__$1 = state_26647;
var statearr_26652_26699 = state_26647__$1;
(statearr_26652_26699[(2)] = inst_26635);

(statearr_26652_26699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (4))){
var inst_26578 = (state_26647[(8)]);
var inst_26578__$1 = (state_26647[(2)]);
var inst_26579 = (inst_26578__$1 == null);
var state_26647__$1 = (function (){var statearr_26653 = state_26647;
(statearr_26653[(8)] = inst_26578__$1);

return statearr_26653;
})();
if(cljs.core.truth_(inst_26579)){
var statearr_26654_26700 = state_26647__$1;
(statearr_26654_26700[(1)] = (5));

} else {
var statearr_26655_26701 = state_26647__$1;
(statearr_26655_26701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (15))){
var inst_26620 = (state_26647[(2)]);
var state_26647__$1 = state_26647;
var statearr_26656_26702 = state_26647__$1;
(statearr_26656_26702[(2)] = inst_26620);

(statearr_26656_26702[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (21))){
var inst_26640 = (state_26647[(2)]);
var state_26647__$1 = (function (){var statearr_26657 = state_26647;
(statearr_26657[(9)] = inst_26640);

return statearr_26657;
})();
var statearr_26658_26703 = state_26647__$1;
(statearr_26658_26703[(2)] = null);

(statearr_26658_26703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (13))){
var inst_26602 = (state_26647[(10)]);
var inst_26604 = cljs.core.chunked_seq_QMARK_.call(null,inst_26602);
var state_26647__$1 = state_26647;
if(inst_26604){
var statearr_26659_26704 = state_26647__$1;
(statearr_26659_26704[(1)] = (16));

} else {
var statearr_26660_26705 = state_26647__$1;
(statearr_26660_26705[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (22))){
var inst_26632 = (state_26647[(2)]);
var state_26647__$1 = state_26647;
if(cljs.core.truth_(inst_26632)){
var statearr_26661_26706 = state_26647__$1;
(statearr_26661_26706[(1)] = (23));

} else {
var statearr_26662_26707 = state_26647__$1;
(statearr_26662_26707[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (6))){
var inst_26626 = (state_26647[(7)]);
var inst_26628 = (state_26647[(11)]);
var inst_26578 = (state_26647[(8)]);
var inst_26626__$1 = topic_fn.call(null,inst_26578);
var inst_26627 = cljs.core.deref.call(null,mults);
var inst_26628__$1 = cljs.core.get.call(null,inst_26627,inst_26626__$1);
var state_26647__$1 = (function (){var statearr_26663 = state_26647;
(statearr_26663[(7)] = inst_26626__$1);

(statearr_26663[(11)] = inst_26628__$1);

return statearr_26663;
})();
if(cljs.core.truth_(inst_26628__$1)){
var statearr_26664_26708 = state_26647__$1;
(statearr_26664_26708[(1)] = (19));

} else {
var statearr_26665_26709 = state_26647__$1;
(statearr_26665_26709[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (25))){
var inst_26637 = (state_26647[(2)]);
var state_26647__$1 = state_26647;
var statearr_26666_26710 = state_26647__$1;
(statearr_26666_26710[(2)] = inst_26637);

(statearr_26666_26710[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (17))){
var inst_26602 = (state_26647[(10)]);
var inst_26611 = cljs.core.first.call(null,inst_26602);
var inst_26612 = cljs.core.async.muxch_STAR_.call(null,inst_26611);
var inst_26613 = cljs.core.async.close_BANG_.call(null,inst_26612);
var inst_26614 = cljs.core.next.call(null,inst_26602);
var inst_26588 = inst_26614;
var inst_26589 = null;
var inst_26590 = (0);
var inst_26591 = (0);
var state_26647__$1 = (function (){var statearr_26667 = state_26647;
(statearr_26667[(12)] = inst_26589);

(statearr_26667[(13)] = inst_26588);

(statearr_26667[(14)] = inst_26590);

(statearr_26667[(15)] = inst_26613);

(statearr_26667[(16)] = inst_26591);

return statearr_26667;
})();
var statearr_26668_26711 = state_26647__$1;
(statearr_26668_26711[(2)] = null);

(statearr_26668_26711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (3))){
var inst_26645 = (state_26647[(2)]);
var state_26647__$1 = state_26647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26647__$1,inst_26645);
} else {
if((state_val_26648 === (12))){
var inst_26622 = (state_26647[(2)]);
var state_26647__$1 = state_26647;
var statearr_26669_26712 = state_26647__$1;
(statearr_26669_26712[(2)] = inst_26622);

(statearr_26669_26712[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (2))){
var state_26647__$1 = state_26647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26647__$1,(4),ch);
} else {
if((state_val_26648 === (23))){
var state_26647__$1 = state_26647;
var statearr_26670_26713 = state_26647__$1;
(statearr_26670_26713[(2)] = null);

(statearr_26670_26713[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (19))){
var inst_26628 = (state_26647[(11)]);
var inst_26578 = (state_26647[(8)]);
var inst_26630 = cljs.core.async.muxch_STAR_.call(null,inst_26628);
var state_26647__$1 = state_26647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26647__$1,(22),inst_26630,inst_26578);
} else {
if((state_val_26648 === (11))){
var inst_26588 = (state_26647[(13)]);
var inst_26602 = (state_26647[(10)]);
var inst_26602__$1 = cljs.core.seq.call(null,inst_26588);
var state_26647__$1 = (function (){var statearr_26671 = state_26647;
(statearr_26671[(10)] = inst_26602__$1);

return statearr_26671;
})();
if(inst_26602__$1){
var statearr_26672_26714 = state_26647__$1;
(statearr_26672_26714[(1)] = (13));

} else {
var statearr_26673_26715 = state_26647__$1;
(statearr_26673_26715[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (9))){
var inst_26624 = (state_26647[(2)]);
var state_26647__$1 = state_26647;
var statearr_26674_26716 = state_26647__$1;
(statearr_26674_26716[(2)] = inst_26624);

(statearr_26674_26716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (5))){
var inst_26585 = cljs.core.deref.call(null,mults);
var inst_26586 = cljs.core.vals.call(null,inst_26585);
var inst_26587 = cljs.core.seq.call(null,inst_26586);
var inst_26588 = inst_26587;
var inst_26589 = null;
var inst_26590 = (0);
var inst_26591 = (0);
var state_26647__$1 = (function (){var statearr_26675 = state_26647;
(statearr_26675[(12)] = inst_26589);

(statearr_26675[(13)] = inst_26588);

(statearr_26675[(14)] = inst_26590);

(statearr_26675[(16)] = inst_26591);

return statearr_26675;
})();
var statearr_26676_26717 = state_26647__$1;
(statearr_26676_26717[(2)] = null);

(statearr_26676_26717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (14))){
var state_26647__$1 = state_26647;
var statearr_26680_26718 = state_26647__$1;
(statearr_26680_26718[(2)] = null);

(statearr_26680_26718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (16))){
var inst_26602 = (state_26647[(10)]);
var inst_26606 = cljs.core.chunk_first.call(null,inst_26602);
var inst_26607 = cljs.core.chunk_rest.call(null,inst_26602);
var inst_26608 = cljs.core.count.call(null,inst_26606);
var inst_26588 = inst_26607;
var inst_26589 = inst_26606;
var inst_26590 = inst_26608;
var inst_26591 = (0);
var state_26647__$1 = (function (){var statearr_26681 = state_26647;
(statearr_26681[(12)] = inst_26589);

(statearr_26681[(13)] = inst_26588);

(statearr_26681[(14)] = inst_26590);

(statearr_26681[(16)] = inst_26591);

return statearr_26681;
})();
var statearr_26682_26719 = state_26647__$1;
(statearr_26682_26719[(2)] = null);

(statearr_26682_26719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (10))){
var inst_26589 = (state_26647[(12)]);
var inst_26588 = (state_26647[(13)]);
var inst_26590 = (state_26647[(14)]);
var inst_26591 = (state_26647[(16)]);
var inst_26596 = cljs.core._nth.call(null,inst_26589,inst_26591);
var inst_26597 = cljs.core.async.muxch_STAR_.call(null,inst_26596);
var inst_26598 = cljs.core.async.close_BANG_.call(null,inst_26597);
var inst_26599 = (inst_26591 + (1));
var tmp26677 = inst_26589;
var tmp26678 = inst_26588;
var tmp26679 = inst_26590;
var inst_26588__$1 = tmp26678;
var inst_26589__$1 = tmp26677;
var inst_26590__$1 = tmp26679;
var inst_26591__$1 = inst_26599;
var state_26647__$1 = (function (){var statearr_26683 = state_26647;
(statearr_26683[(12)] = inst_26589__$1);

(statearr_26683[(13)] = inst_26588__$1);

(statearr_26683[(14)] = inst_26590__$1);

(statearr_26683[(17)] = inst_26598);

(statearr_26683[(16)] = inst_26591__$1);

return statearr_26683;
})();
var statearr_26684_26720 = state_26647__$1;
(statearr_26684_26720[(2)] = null);

(statearr_26684_26720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (18))){
var inst_26617 = (state_26647[(2)]);
var state_26647__$1 = state_26647;
var statearr_26685_26721 = state_26647__$1;
(statearr_26685_26721[(2)] = inst_26617);

(statearr_26685_26721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26648 === (8))){
var inst_26590 = (state_26647[(14)]);
var inst_26591 = (state_26647[(16)]);
var inst_26593 = (inst_26591 < inst_26590);
var inst_26594 = inst_26593;
var state_26647__$1 = state_26647;
if(cljs.core.truth_(inst_26594)){
var statearr_26686_26722 = state_26647__$1;
(statearr_26686_26722[(1)] = (10));

} else {
var statearr_26687_26723 = state_26647__$1;
(statearr_26687_26723[(1)] = (11));

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
});})(c__19885__auto___26695,mults,ensure_mult,p))
;
return ((function (switch__19829__auto__,c__19885__auto___26695,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__19830__auto__ = null;
var cljs$core$async$pub_$_state_machine__19830__auto____0 = (function (){
var statearr_26691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26691[(0)] = cljs$core$async$pub_$_state_machine__19830__auto__);

(statearr_26691[(1)] = (1));

return statearr_26691;
});
var cljs$core$async$pub_$_state_machine__19830__auto____1 = (function (state_26647){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_26647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e26692){if((e26692 instanceof Object)){
var ex__19833__auto__ = e26692;
var statearr_26693_26724 = state_26647;
(statearr_26693_26724[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26725 = state_26647;
state_26647 = G__26725;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__19830__auto__ = function(state_26647){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__19830__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__19830__auto____1.call(this,state_26647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__19830__auto____0;
cljs$core$async$pub_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__19830__auto____1;
return cljs$core$async$pub_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto___26695,mults,ensure_mult,p))
})();
var state__19887__auto__ = (function (){var statearr_26694 = f__19886__auto__.call(null);
(statearr_26694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___26695);

return statearr_26694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto___26695,mults,ensure_mult,p))
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
var c__19885__auto___26862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto___26862,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto___26862,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26832){
var state_val_26833 = (state_26832[(1)]);
if((state_val_26833 === (7))){
var state_26832__$1 = state_26832;
var statearr_26834_26863 = state_26832__$1;
(statearr_26834_26863[(2)] = null);

(statearr_26834_26863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26833 === (1))){
var state_26832__$1 = state_26832;
var statearr_26835_26864 = state_26832__$1;
(statearr_26835_26864[(2)] = null);

(statearr_26835_26864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26833 === (4))){
var inst_26796 = (state_26832[(7)]);
var inst_26798 = (inst_26796 < cnt);
var state_26832__$1 = state_26832;
if(cljs.core.truth_(inst_26798)){
var statearr_26836_26865 = state_26832__$1;
(statearr_26836_26865[(1)] = (6));

} else {
var statearr_26837_26866 = state_26832__$1;
(statearr_26837_26866[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26833 === (15))){
var inst_26828 = (state_26832[(2)]);
var state_26832__$1 = state_26832;
var statearr_26838_26867 = state_26832__$1;
(statearr_26838_26867[(2)] = inst_26828);

(statearr_26838_26867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26833 === (13))){
var inst_26821 = cljs.core.async.close_BANG_.call(null,out);
var state_26832__$1 = state_26832;
var statearr_26839_26868 = state_26832__$1;
(statearr_26839_26868[(2)] = inst_26821);

(statearr_26839_26868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26833 === (6))){
var state_26832__$1 = state_26832;
var statearr_26840_26869 = state_26832__$1;
(statearr_26840_26869[(2)] = null);

(statearr_26840_26869[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26833 === (3))){
var inst_26830 = (state_26832[(2)]);
var state_26832__$1 = state_26832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26832__$1,inst_26830);
} else {
if((state_val_26833 === (12))){
var inst_26818 = (state_26832[(8)]);
var inst_26818__$1 = (state_26832[(2)]);
var inst_26819 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26818__$1);
var state_26832__$1 = (function (){var statearr_26841 = state_26832;
(statearr_26841[(8)] = inst_26818__$1);

return statearr_26841;
})();
if(cljs.core.truth_(inst_26819)){
var statearr_26842_26870 = state_26832__$1;
(statearr_26842_26870[(1)] = (13));

} else {
var statearr_26843_26871 = state_26832__$1;
(statearr_26843_26871[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26833 === (2))){
var inst_26795 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26796 = (0);
var state_26832__$1 = (function (){var statearr_26844 = state_26832;
(statearr_26844[(9)] = inst_26795);

(statearr_26844[(7)] = inst_26796);

return statearr_26844;
})();
var statearr_26845_26872 = state_26832__$1;
(statearr_26845_26872[(2)] = null);

(statearr_26845_26872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26833 === (11))){
var inst_26796 = (state_26832[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26832,(10),Object,null,(9));
var inst_26805 = chs__$1.call(null,inst_26796);
var inst_26806 = done.call(null,inst_26796);
var inst_26807 = cljs.core.async.take_BANG_.call(null,inst_26805,inst_26806);
var state_26832__$1 = state_26832;
var statearr_26846_26873 = state_26832__$1;
(statearr_26846_26873[(2)] = inst_26807);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26832__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26833 === (9))){
var inst_26796 = (state_26832[(7)]);
var inst_26809 = (state_26832[(2)]);
var inst_26810 = (inst_26796 + (1));
var inst_26796__$1 = inst_26810;
var state_26832__$1 = (function (){var statearr_26847 = state_26832;
(statearr_26847[(7)] = inst_26796__$1);

(statearr_26847[(10)] = inst_26809);

return statearr_26847;
})();
var statearr_26848_26874 = state_26832__$1;
(statearr_26848_26874[(2)] = null);

(statearr_26848_26874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26833 === (5))){
var inst_26816 = (state_26832[(2)]);
var state_26832__$1 = (function (){var statearr_26849 = state_26832;
(statearr_26849[(11)] = inst_26816);

return statearr_26849;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26832__$1,(12),dchan);
} else {
if((state_val_26833 === (14))){
var inst_26818 = (state_26832[(8)]);
var inst_26823 = cljs.core.apply.call(null,f,inst_26818);
var state_26832__$1 = state_26832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26832__$1,(16),out,inst_26823);
} else {
if((state_val_26833 === (16))){
var inst_26825 = (state_26832[(2)]);
var state_26832__$1 = (function (){var statearr_26850 = state_26832;
(statearr_26850[(12)] = inst_26825);

return statearr_26850;
})();
var statearr_26851_26875 = state_26832__$1;
(statearr_26851_26875[(2)] = null);

(statearr_26851_26875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26833 === (10))){
var inst_26800 = (state_26832[(2)]);
var inst_26801 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26832__$1 = (function (){var statearr_26852 = state_26832;
(statearr_26852[(13)] = inst_26800);

return statearr_26852;
})();
var statearr_26853_26876 = state_26832__$1;
(statearr_26853_26876[(2)] = inst_26801);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26832__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26833 === (8))){
var inst_26814 = (state_26832[(2)]);
var state_26832__$1 = state_26832;
var statearr_26854_26877 = state_26832__$1;
(statearr_26854_26877[(2)] = inst_26814);

(statearr_26854_26877[(1)] = (5));


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
});})(c__19885__auto___26862,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19829__auto__,c__19885__auto___26862,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__19830__auto__ = null;
var cljs$core$async$map_$_state_machine__19830__auto____0 = (function (){
var statearr_26858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26858[(0)] = cljs$core$async$map_$_state_machine__19830__auto__);

(statearr_26858[(1)] = (1));

return statearr_26858;
});
var cljs$core$async$map_$_state_machine__19830__auto____1 = (function (state_26832){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_26832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e26859){if((e26859 instanceof Object)){
var ex__19833__auto__ = e26859;
var statearr_26860_26878 = state_26832;
(statearr_26860_26878[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26879 = state_26832;
state_26832 = G__26879;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__19830__auto__ = function(state_26832){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__19830__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__19830__auto____1.call(this,state_26832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__19830__auto____0;
cljs$core$async$map_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__19830__auto____1;
return cljs$core$async$map_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto___26862,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19887__auto__ = (function (){var statearr_26861 = f__19886__auto__.call(null);
(statearr_26861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___26862);

return statearr_26861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto___26862,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__19885__auto___26987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto___26987,out){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto___26987,out){
return (function (state_26963){
var state_val_26964 = (state_26963[(1)]);
if((state_val_26964 === (7))){
var inst_26942 = (state_26963[(7)]);
var inst_26943 = (state_26963[(8)]);
var inst_26942__$1 = (state_26963[(2)]);
var inst_26943__$1 = cljs.core.nth.call(null,inst_26942__$1,(0),null);
var inst_26944 = cljs.core.nth.call(null,inst_26942__$1,(1),null);
var inst_26945 = (inst_26943__$1 == null);
var state_26963__$1 = (function (){var statearr_26965 = state_26963;
(statearr_26965[(7)] = inst_26942__$1);

(statearr_26965[(8)] = inst_26943__$1);

(statearr_26965[(9)] = inst_26944);

return statearr_26965;
})();
if(cljs.core.truth_(inst_26945)){
var statearr_26966_26988 = state_26963__$1;
(statearr_26966_26988[(1)] = (8));

} else {
var statearr_26967_26989 = state_26963__$1;
(statearr_26967_26989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26964 === (1))){
var inst_26934 = cljs.core.vec.call(null,chs);
var inst_26935 = inst_26934;
var state_26963__$1 = (function (){var statearr_26968 = state_26963;
(statearr_26968[(10)] = inst_26935);

return statearr_26968;
})();
var statearr_26969_26990 = state_26963__$1;
(statearr_26969_26990[(2)] = null);

(statearr_26969_26990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26964 === (4))){
var inst_26935 = (state_26963[(10)]);
var state_26963__$1 = state_26963;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26963__$1,(7),inst_26935);
} else {
if((state_val_26964 === (6))){
var inst_26959 = (state_26963[(2)]);
var state_26963__$1 = state_26963;
var statearr_26970_26991 = state_26963__$1;
(statearr_26970_26991[(2)] = inst_26959);

(statearr_26970_26991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26964 === (3))){
var inst_26961 = (state_26963[(2)]);
var state_26963__$1 = state_26963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26963__$1,inst_26961);
} else {
if((state_val_26964 === (2))){
var inst_26935 = (state_26963[(10)]);
var inst_26937 = cljs.core.count.call(null,inst_26935);
var inst_26938 = (inst_26937 > (0));
var state_26963__$1 = state_26963;
if(cljs.core.truth_(inst_26938)){
var statearr_26972_26992 = state_26963__$1;
(statearr_26972_26992[(1)] = (4));

} else {
var statearr_26973_26993 = state_26963__$1;
(statearr_26973_26993[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26964 === (11))){
var inst_26935 = (state_26963[(10)]);
var inst_26952 = (state_26963[(2)]);
var tmp26971 = inst_26935;
var inst_26935__$1 = tmp26971;
var state_26963__$1 = (function (){var statearr_26974 = state_26963;
(statearr_26974[(11)] = inst_26952);

(statearr_26974[(10)] = inst_26935__$1);

return statearr_26974;
})();
var statearr_26975_26994 = state_26963__$1;
(statearr_26975_26994[(2)] = null);

(statearr_26975_26994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26964 === (9))){
var inst_26943 = (state_26963[(8)]);
var state_26963__$1 = state_26963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26963__$1,(11),out,inst_26943);
} else {
if((state_val_26964 === (5))){
var inst_26957 = cljs.core.async.close_BANG_.call(null,out);
var state_26963__$1 = state_26963;
var statearr_26976_26995 = state_26963__$1;
(statearr_26976_26995[(2)] = inst_26957);

(statearr_26976_26995[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26964 === (10))){
var inst_26955 = (state_26963[(2)]);
var state_26963__$1 = state_26963;
var statearr_26977_26996 = state_26963__$1;
(statearr_26977_26996[(2)] = inst_26955);

(statearr_26977_26996[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26964 === (8))){
var inst_26942 = (state_26963[(7)]);
var inst_26943 = (state_26963[(8)]);
var inst_26935 = (state_26963[(10)]);
var inst_26944 = (state_26963[(9)]);
var inst_26947 = (function (){var c = inst_26944;
var v = inst_26943;
var vec__26940 = inst_26942;
var cs = inst_26935;
return ((function (c,v,vec__26940,cs,inst_26942,inst_26943,inst_26935,inst_26944,state_val_26964,c__19885__auto___26987,out){
return (function (p1__26880_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26880_SHARP_);
});
;})(c,v,vec__26940,cs,inst_26942,inst_26943,inst_26935,inst_26944,state_val_26964,c__19885__auto___26987,out))
})();
var inst_26948 = cljs.core.filterv.call(null,inst_26947,inst_26935);
var inst_26935__$1 = inst_26948;
var state_26963__$1 = (function (){var statearr_26978 = state_26963;
(statearr_26978[(10)] = inst_26935__$1);

return statearr_26978;
})();
var statearr_26979_26997 = state_26963__$1;
(statearr_26979_26997[(2)] = null);

(statearr_26979_26997[(1)] = (2));


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
});})(c__19885__auto___26987,out))
;
return ((function (switch__19829__auto__,c__19885__auto___26987,out){
return (function() {
var cljs$core$async$merge_$_state_machine__19830__auto__ = null;
var cljs$core$async$merge_$_state_machine__19830__auto____0 = (function (){
var statearr_26983 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26983[(0)] = cljs$core$async$merge_$_state_machine__19830__auto__);

(statearr_26983[(1)] = (1));

return statearr_26983;
});
var cljs$core$async$merge_$_state_machine__19830__auto____1 = (function (state_26963){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_26963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e26984){if((e26984 instanceof Object)){
var ex__19833__auto__ = e26984;
var statearr_26985_26998 = state_26963;
(statearr_26985_26998[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26999 = state_26963;
state_26963 = G__26999;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__19830__auto__ = function(state_26963){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__19830__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__19830__auto____1.call(this,state_26963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__19830__auto____0;
cljs$core$async$merge_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__19830__auto____1;
return cljs$core$async$merge_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto___26987,out))
})();
var state__19887__auto__ = (function (){var statearr_26986 = f__19886__auto__.call(null);
(statearr_26986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___26987);

return statearr_26986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto___26987,out))
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
var c__19885__auto___27092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto___27092,out){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto___27092,out){
return (function (state_27069){
var state_val_27070 = (state_27069[(1)]);
if((state_val_27070 === (7))){
var inst_27051 = (state_27069[(7)]);
var inst_27051__$1 = (state_27069[(2)]);
var inst_27052 = (inst_27051__$1 == null);
var inst_27053 = cljs.core.not.call(null,inst_27052);
var state_27069__$1 = (function (){var statearr_27071 = state_27069;
(statearr_27071[(7)] = inst_27051__$1);

return statearr_27071;
})();
if(inst_27053){
var statearr_27072_27093 = state_27069__$1;
(statearr_27072_27093[(1)] = (8));

} else {
var statearr_27073_27094 = state_27069__$1;
(statearr_27073_27094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (1))){
var inst_27046 = (0);
var state_27069__$1 = (function (){var statearr_27074 = state_27069;
(statearr_27074[(8)] = inst_27046);

return statearr_27074;
})();
var statearr_27075_27095 = state_27069__$1;
(statearr_27075_27095[(2)] = null);

(statearr_27075_27095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (4))){
var state_27069__$1 = state_27069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27069__$1,(7),ch);
} else {
if((state_val_27070 === (6))){
var inst_27064 = (state_27069[(2)]);
var state_27069__$1 = state_27069;
var statearr_27076_27096 = state_27069__$1;
(statearr_27076_27096[(2)] = inst_27064);

(statearr_27076_27096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (3))){
var inst_27066 = (state_27069[(2)]);
var inst_27067 = cljs.core.async.close_BANG_.call(null,out);
var state_27069__$1 = (function (){var statearr_27077 = state_27069;
(statearr_27077[(9)] = inst_27066);

return statearr_27077;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27069__$1,inst_27067);
} else {
if((state_val_27070 === (2))){
var inst_27046 = (state_27069[(8)]);
var inst_27048 = (inst_27046 < n);
var state_27069__$1 = state_27069;
if(cljs.core.truth_(inst_27048)){
var statearr_27078_27097 = state_27069__$1;
(statearr_27078_27097[(1)] = (4));

} else {
var statearr_27079_27098 = state_27069__$1;
(statearr_27079_27098[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (11))){
var inst_27046 = (state_27069[(8)]);
var inst_27056 = (state_27069[(2)]);
var inst_27057 = (inst_27046 + (1));
var inst_27046__$1 = inst_27057;
var state_27069__$1 = (function (){var statearr_27080 = state_27069;
(statearr_27080[(8)] = inst_27046__$1);

(statearr_27080[(10)] = inst_27056);

return statearr_27080;
})();
var statearr_27081_27099 = state_27069__$1;
(statearr_27081_27099[(2)] = null);

(statearr_27081_27099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (9))){
var state_27069__$1 = state_27069;
var statearr_27082_27100 = state_27069__$1;
(statearr_27082_27100[(2)] = null);

(statearr_27082_27100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (5))){
var state_27069__$1 = state_27069;
var statearr_27083_27101 = state_27069__$1;
(statearr_27083_27101[(2)] = null);

(statearr_27083_27101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (10))){
var inst_27061 = (state_27069[(2)]);
var state_27069__$1 = state_27069;
var statearr_27084_27102 = state_27069__$1;
(statearr_27084_27102[(2)] = inst_27061);

(statearr_27084_27102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (8))){
var inst_27051 = (state_27069[(7)]);
var state_27069__$1 = state_27069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27069__$1,(11),out,inst_27051);
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
});})(c__19885__auto___27092,out))
;
return ((function (switch__19829__auto__,c__19885__auto___27092,out){
return (function() {
var cljs$core$async$take_$_state_machine__19830__auto__ = null;
var cljs$core$async$take_$_state_machine__19830__auto____0 = (function (){
var statearr_27088 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27088[(0)] = cljs$core$async$take_$_state_machine__19830__auto__);

(statearr_27088[(1)] = (1));

return statearr_27088;
});
var cljs$core$async$take_$_state_machine__19830__auto____1 = (function (state_27069){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_27069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e27089){if((e27089 instanceof Object)){
var ex__19833__auto__ = e27089;
var statearr_27090_27103 = state_27069;
(statearr_27090_27103[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27104 = state_27069;
state_27069 = G__27104;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__19830__auto__ = function(state_27069){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__19830__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__19830__auto____1.call(this,state_27069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__19830__auto____0;
cljs$core$async$take_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__19830__auto____1;
return cljs$core$async$take_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto___27092,out))
})();
var state__19887__auto__ = (function (){var statearr_27091 = f__19886__auto__.call(null);
(statearr_27091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___27092);

return statearr_27091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto___27092,out))
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
if(typeof cljs.core.async.t27112 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27112 = (function (ch,f,map_LT_,meta27113){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27113 = meta27113;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27112.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27112.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27112.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27112.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27115 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27115 = (function (fn1,_,meta27113,map_LT_,f,ch,meta27116){
this.fn1 = fn1;
this._ = _;
this.meta27113 = meta27113;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27116 = meta27116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27115.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27115.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27115.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27105_SHARP_){
return f1.call(null,(((p1__27105_SHARP_ == null))?null:self__.f.call(null,p1__27105_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27115.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27117){
var self__ = this;
var _27117__$1 = this;
return self__.meta27116;
});})(___$1))
;

cljs.core.async.t27115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27117,meta27116__$1){
var self__ = this;
var _27117__$1 = this;
return (new cljs.core.async.t27115(self__.fn1,self__._,self__.meta27113,self__.map_LT_,self__.f,self__.ch,meta27116__$1));
});})(___$1))
;

cljs.core.async.t27115.cljs$lang$type = true;

cljs.core.async.t27115.cljs$lang$ctorStr = "cljs.core.async/t27115";

cljs.core.async.t27115.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18282__auto__,writer__18283__auto__,opt__18284__auto__){
return cljs.core._write.call(null,writer__18283__auto__,"cljs.core.async/t27115");
});})(___$1))
;

cljs.core.async.__GT_t27115 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27115(fn1__$1,___$2,meta27113__$1,map_LT___$1,f__$1,ch__$1,meta27116){
return (new cljs.core.async.t27115(fn1__$1,___$2,meta27113__$1,map_LT___$1,f__$1,ch__$1,meta27116));
});})(___$1))
;

}

return (new cljs.core.async.t27115(fn1,___$1,self__.meta27113,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17691__auto__ = ret;
if(cljs.core.truth_(and__17691__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17691__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27112.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27112.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27112.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27114){
var self__ = this;
var _27114__$1 = this;
return self__.meta27113;
});

cljs.core.async.t27112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27114,meta27113__$1){
var self__ = this;
var _27114__$1 = this;
return (new cljs.core.async.t27112(self__.ch,self__.f,self__.map_LT_,meta27113__$1));
});

cljs.core.async.t27112.cljs$lang$type = true;

cljs.core.async.t27112.cljs$lang$ctorStr = "cljs.core.async/t27112";

cljs.core.async.t27112.cljs$lang$ctorPrWriter = (function (this__18282__auto__,writer__18283__auto__,opt__18284__auto__){
return cljs.core._write.call(null,writer__18283__auto__,"cljs.core.async/t27112");
});

cljs.core.async.__GT_t27112 = (function cljs$core$async$map_LT__$___GT_t27112(ch__$1,f__$1,map_LT___$1,meta27113){
return (new cljs.core.async.t27112(ch__$1,f__$1,map_LT___$1,meta27113));
});

}

return (new cljs.core.async.t27112(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27121 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27121 = (function (ch,f,map_GT_,meta27122){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27122 = meta27122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27121.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27121.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27121.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27121.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27121.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27121.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27123){
var self__ = this;
var _27123__$1 = this;
return self__.meta27122;
});

cljs.core.async.t27121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27123,meta27122__$1){
var self__ = this;
var _27123__$1 = this;
return (new cljs.core.async.t27121(self__.ch,self__.f,self__.map_GT_,meta27122__$1));
});

cljs.core.async.t27121.cljs$lang$type = true;

cljs.core.async.t27121.cljs$lang$ctorStr = "cljs.core.async/t27121";

cljs.core.async.t27121.cljs$lang$ctorPrWriter = (function (this__18282__auto__,writer__18283__auto__,opt__18284__auto__){
return cljs.core._write.call(null,writer__18283__auto__,"cljs.core.async/t27121");
});

cljs.core.async.__GT_t27121 = (function cljs$core$async$map_GT__$___GT_t27121(ch__$1,f__$1,map_GT___$1,meta27122){
return (new cljs.core.async.t27121(ch__$1,f__$1,map_GT___$1,meta27122));
});

}

return (new cljs.core.async.t27121(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27127 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27127 = (function (ch,p,filter_GT_,meta27128){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27128 = meta27128;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27127.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27127.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27127.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27127.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27127.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27127.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27127.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27129){
var self__ = this;
var _27129__$1 = this;
return self__.meta27128;
});

cljs.core.async.t27127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27129,meta27128__$1){
var self__ = this;
var _27129__$1 = this;
return (new cljs.core.async.t27127(self__.ch,self__.p,self__.filter_GT_,meta27128__$1));
});

cljs.core.async.t27127.cljs$lang$type = true;

cljs.core.async.t27127.cljs$lang$ctorStr = "cljs.core.async/t27127";

cljs.core.async.t27127.cljs$lang$ctorPrWriter = (function (this__18282__auto__,writer__18283__auto__,opt__18284__auto__){
return cljs.core._write.call(null,writer__18283__auto__,"cljs.core.async/t27127");
});

cljs.core.async.__GT_t27127 = (function cljs$core$async$filter_GT__$___GT_t27127(ch__$1,p__$1,filter_GT___$1,meta27128){
return (new cljs.core.async.t27127(ch__$1,p__$1,filter_GT___$1,meta27128));
});

}

return (new cljs.core.async.t27127(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19885__auto___27212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto___27212,out){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto___27212,out){
return (function (state_27191){
var state_val_27192 = (state_27191[(1)]);
if((state_val_27192 === (7))){
var inst_27187 = (state_27191[(2)]);
var state_27191__$1 = state_27191;
var statearr_27193_27213 = state_27191__$1;
(statearr_27193_27213[(2)] = inst_27187);

(statearr_27193_27213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (1))){
var state_27191__$1 = state_27191;
var statearr_27194_27214 = state_27191__$1;
(statearr_27194_27214[(2)] = null);

(statearr_27194_27214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (4))){
var inst_27173 = (state_27191[(7)]);
var inst_27173__$1 = (state_27191[(2)]);
var inst_27174 = (inst_27173__$1 == null);
var state_27191__$1 = (function (){var statearr_27195 = state_27191;
(statearr_27195[(7)] = inst_27173__$1);

return statearr_27195;
})();
if(cljs.core.truth_(inst_27174)){
var statearr_27196_27215 = state_27191__$1;
(statearr_27196_27215[(1)] = (5));

} else {
var statearr_27197_27216 = state_27191__$1;
(statearr_27197_27216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (6))){
var inst_27173 = (state_27191[(7)]);
var inst_27178 = p.call(null,inst_27173);
var state_27191__$1 = state_27191;
if(cljs.core.truth_(inst_27178)){
var statearr_27198_27217 = state_27191__$1;
(statearr_27198_27217[(1)] = (8));

} else {
var statearr_27199_27218 = state_27191__$1;
(statearr_27199_27218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (3))){
var inst_27189 = (state_27191[(2)]);
var state_27191__$1 = state_27191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27191__$1,inst_27189);
} else {
if((state_val_27192 === (2))){
var state_27191__$1 = state_27191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27191__$1,(4),ch);
} else {
if((state_val_27192 === (11))){
var inst_27181 = (state_27191[(2)]);
var state_27191__$1 = state_27191;
var statearr_27200_27219 = state_27191__$1;
(statearr_27200_27219[(2)] = inst_27181);

(statearr_27200_27219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (9))){
var state_27191__$1 = state_27191;
var statearr_27201_27220 = state_27191__$1;
(statearr_27201_27220[(2)] = null);

(statearr_27201_27220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (5))){
var inst_27176 = cljs.core.async.close_BANG_.call(null,out);
var state_27191__$1 = state_27191;
var statearr_27202_27221 = state_27191__$1;
(statearr_27202_27221[(2)] = inst_27176);

(statearr_27202_27221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (10))){
var inst_27184 = (state_27191[(2)]);
var state_27191__$1 = (function (){var statearr_27203 = state_27191;
(statearr_27203[(8)] = inst_27184);

return statearr_27203;
})();
var statearr_27204_27222 = state_27191__$1;
(statearr_27204_27222[(2)] = null);

(statearr_27204_27222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27192 === (8))){
var inst_27173 = (state_27191[(7)]);
var state_27191__$1 = state_27191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27191__$1,(11),out,inst_27173);
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
});})(c__19885__auto___27212,out))
;
return ((function (switch__19829__auto__,c__19885__auto___27212,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__19830__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__19830__auto____0 = (function (){
var statearr_27208 = [null,null,null,null,null,null,null,null,null];
(statearr_27208[(0)] = cljs$core$async$filter_LT__$_state_machine__19830__auto__);

(statearr_27208[(1)] = (1));

return statearr_27208;
});
var cljs$core$async$filter_LT__$_state_machine__19830__auto____1 = (function (state_27191){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_27191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e27209){if((e27209 instanceof Object)){
var ex__19833__auto__ = e27209;
var statearr_27210_27223 = state_27191;
(statearr_27210_27223[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27224 = state_27191;
state_27191 = G__27224;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__19830__auto__ = function(state_27191){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__19830__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__19830__auto____1.call(this,state_27191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__19830__auto____0;
cljs$core$async$filter_LT__$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__19830__auto____1;
return cljs$core$async$filter_LT__$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto___27212,out))
})();
var state__19887__auto__ = (function (){var statearr_27211 = f__19886__auto__.call(null);
(statearr_27211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___27212);

return statearr_27211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto___27212,out))
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
var c__19885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto__){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto__){
return (function (state_27390){
var state_val_27391 = (state_27390[(1)]);
if((state_val_27391 === (7))){
var inst_27386 = (state_27390[(2)]);
var state_27390__$1 = state_27390;
var statearr_27392_27433 = state_27390__$1;
(statearr_27392_27433[(2)] = inst_27386);

(statearr_27392_27433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (20))){
var inst_27356 = (state_27390[(7)]);
var inst_27367 = (state_27390[(2)]);
var inst_27368 = cljs.core.next.call(null,inst_27356);
var inst_27342 = inst_27368;
var inst_27343 = null;
var inst_27344 = (0);
var inst_27345 = (0);
var state_27390__$1 = (function (){var statearr_27393 = state_27390;
(statearr_27393[(8)] = inst_27367);

(statearr_27393[(9)] = inst_27345);

(statearr_27393[(10)] = inst_27344);

(statearr_27393[(11)] = inst_27343);

(statearr_27393[(12)] = inst_27342);

return statearr_27393;
})();
var statearr_27394_27434 = state_27390__$1;
(statearr_27394_27434[(2)] = null);

(statearr_27394_27434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (1))){
var state_27390__$1 = state_27390;
var statearr_27395_27435 = state_27390__$1;
(statearr_27395_27435[(2)] = null);

(statearr_27395_27435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (4))){
var inst_27331 = (state_27390[(13)]);
var inst_27331__$1 = (state_27390[(2)]);
var inst_27332 = (inst_27331__$1 == null);
var state_27390__$1 = (function (){var statearr_27396 = state_27390;
(statearr_27396[(13)] = inst_27331__$1);

return statearr_27396;
})();
if(cljs.core.truth_(inst_27332)){
var statearr_27397_27436 = state_27390__$1;
(statearr_27397_27436[(1)] = (5));

} else {
var statearr_27398_27437 = state_27390__$1;
(statearr_27398_27437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (15))){
var state_27390__$1 = state_27390;
var statearr_27402_27438 = state_27390__$1;
(statearr_27402_27438[(2)] = null);

(statearr_27402_27438[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (21))){
var state_27390__$1 = state_27390;
var statearr_27403_27439 = state_27390__$1;
(statearr_27403_27439[(2)] = null);

(statearr_27403_27439[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (13))){
var inst_27345 = (state_27390[(9)]);
var inst_27344 = (state_27390[(10)]);
var inst_27343 = (state_27390[(11)]);
var inst_27342 = (state_27390[(12)]);
var inst_27352 = (state_27390[(2)]);
var inst_27353 = (inst_27345 + (1));
var tmp27399 = inst_27344;
var tmp27400 = inst_27343;
var tmp27401 = inst_27342;
var inst_27342__$1 = tmp27401;
var inst_27343__$1 = tmp27400;
var inst_27344__$1 = tmp27399;
var inst_27345__$1 = inst_27353;
var state_27390__$1 = (function (){var statearr_27404 = state_27390;
(statearr_27404[(14)] = inst_27352);

(statearr_27404[(9)] = inst_27345__$1);

(statearr_27404[(10)] = inst_27344__$1);

(statearr_27404[(11)] = inst_27343__$1);

(statearr_27404[(12)] = inst_27342__$1);

return statearr_27404;
})();
var statearr_27405_27440 = state_27390__$1;
(statearr_27405_27440[(2)] = null);

(statearr_27405_27440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (22))){
var state_27390__$1 = state_27390;
var statearr_27406_27441 = state_27390__$1;
(statearr_27406_27441[(2)] = null);

(statearr_27406_27441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (6))){
var inst_27331 = (state_27390[(13)]);
var inst_27340 = f.call(null,inst_27331);
var inst_27341 = cljs.core.seq.call(null,inst_27340);
var inst_27342 = inst_27341;
var inst_27343 = null;
var inst_27344 = (0);
var inst_27345 = (0);
var state_27390__$1 = (function (){var statearr_27407 = state_27390;
(statearr_27407[(9)] = inst_27345);

(statearr_27407[(10)] = inst_27344);

(statearr_27407[(11)] = inst_27343);

(statearr_27407[(12)] = inst_27342);

return statearr_27407;
})();
var statearr_27408_27442 = state_27390__$1;
(statearr_27408_27442[(2)] = null);

(statearr_27408_27442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (17))){
var inst_27356 = (state_27390[(7)]);
var inst_27360 = cljs.core.chunk_first.call(null,inst_27356);
var inst_27361 = cljs.core.chunk_rest.call(null,inst_27356);
var inst_27362 = cljs.core.count.call(null,inst_27360);
var inst_27342 = inst_27361;
var inst_27343 = inst_27360;
var inst_27344 = inst_27362;
var inst_27345 = (0);
var state_27390__$1 = (function (){var statearr_27409 = state_27390;
(statearr_27409[(9)] = inst_27345);

(statearr_27409[(10)] = inst_27344);

(statearr_27409[(11)] = inst_27343);

(statearr_27409[(12)] = inst_27342);

return statearr_27409;
})();
var statearr_27410_27443 = state_27390__$1;
(statearr_27410_27443[(2)] = null);

(statearr_27410_27443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (3))){
var inst_27388 = (state_27390[(2)]);
var state_27390__$1 = state_27390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27390__$1,inst_27388);
} else {
if((state_val_27391 === (12))){
var inst_27376 = (state_27390[(2)]);
var state_27390__$1 = state_27390;
var statearr_27411_27444 = state_27390__$1;
(statearr_27411_27444[(2)] = inst_27376);

(statearr_27411_27444[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (2))){
var state_27390__$1 = state_27390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27390__$1,(4),in$);
} else {
if((state_val_27391 === (23))){
var inst_27384 = (state_27390[(2)]);
var state_27390__$1 = state_27390;
var statearr_27412_27445 = state_27390__$1;
(statearr_27412_27445[(2)] = inst_27384);

(statearr_27412_27445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (19))){
var inst_27371 = (state_27390[(2)]);
var state_27390__$1 = state_27390;
var statearr_27413_27446 = state_27390__$1;
(statearr_27413_27446[(2)] = inst_27371);

(statearr_27413_27446[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (11))){
var inst_27356 = (state_27390[(7)]);
var inst_27342 = (state_27390[(12)]);
var inst_27356__$1 = cljs.core.seq.call(null,inst_27342);
var state_27390__$1 = (function (){var statearr_27414 = state_27390;
(statearr_27414[(7)] = inst_27356__$1);

return statearr_27414;
})();
if(inst_27356__$1){
var statearr_27415_27447 = state_27390__$1;
(statearr_27415_27447[(1)] = (14));

} else {
var statearr_27416_27448 = state_27390__$1;
(statearr_27416_27448[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (9))){
var inst_27378 = (state_27390[(2)]);
var inst_27379 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27390__$1 = (function (){var statearr_27417 = state_27390;
(statearr_27417[(15)] = inst_27378);

return statearr_27417;
})();
if(cljs.core.truth_(inst_27379)){
var statearr_27418_27449 = state_27390__$1;
(statearr_27418_27449[(1)] = (21));

} else {
var statearr_27419_27450 = state_27390__$1;
(statearr_27419_27450[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (5))){
var inst_27334 = cljs.core.async.close_BANG_.call(null,out);
var state_27390__$1 = state_27390;
var statearr_27420_27451 = state_27390__$1;
(statearr_27420_27451[(2)] = inst_27334);

(statearr_27420_27451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (14))){
var inst_27356 = (state_27390[(7)]);
var inst_27358 = cljs.core.chunked_seq_QMARK_.call(null,inst_27356);
var state_27390__$1 = state_27390;
if(inst_27358){
var statearr_27421_27452 = state_27390__$1;
(statearr_27421_27452[(1)] = (17));

} else {
var statearr_27422_27453 = state_27390__$1;
(statearr_27422_27453[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (16))){
var inst_27374 = (state_27390[(2)]);
var state_27390__$1 = state_27390;
var statearr_27423_27454 = state_27390__$1;
(statearr_27423_27454[(2)] = inst_27374);

(statearr_27423_27454[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27391 === (10))){
var inst_27345 = (state_27390[(9)]);
var inst_27343 = (state_27390[(11)]);
var inst_27350 = cljs.core._nth.call(null,inst_27343,inst_27345);
var state_27390__$1 = state_27390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27390__$1,(13),out,inst_27350);
} else {
if((state_val_27391 === (18))){
var inst_27356 = (state_27390[(7)]);
var inst_27365 = cljs.core.first.call(null,inst_27356);
var state_27390__$1 = state_27390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27390__$1,(20),out,inst_27365);
} else {
if((state_val_27391 === (8))){
var inst_27345 = (state_27390[(9)]);
var inst_27344 = (state_27390[(10)]);
var inst_27347 = (inst_27345 < inst_27344);
var inst_27348 = inst_27347;
var state_27390__$1 = state_27390;
if(cljs.core.truth_(inst_27348)){
var statearr_27424_27455 = state_27390__$1;
(statearr_27424_27455[(1)] = (10));

} else {
var statearr_27425_27456 = state_27390__$1;
(statearr_27425_27456[(1)] = (11));

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
});})(c__19885__auto__))
;
return ((function (switch__19829__auto__,c__19885__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19830__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19830__auto____0 = (function (){
var statearr_27429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27429[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19830__auto__);

(statearr_27429[(1)] = (1));

return statearr_27429;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19830__auto____1 = (function (state_27390){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_27390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e27430){if((e27430 instanceof Object)){
var ex__19833__auto__ = e27430;
var statearr_27431_27457 = state_27390;
(statearr_27431_27457[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27458 = state_27390;
state_27390 = G__27458;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19830__auto__ = function(state_27390){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19830__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19830__auto____1.call(this,state_27390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19830__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19830__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto__))
})();
var state__19887__auto__ = (function (){var statearr_27432 = f__19886__auto__.call(null);
(statearr_27432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto__);

return statearr_27432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto__))
);

return c__19885__auto__;
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
var c__19885__auto___27555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto___27555,out){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto___27555,out){
return (function (state_27530){
var state_val_27531 = (state_27530[(1)]);
if((state_val_27531 === (7))){
var inst_27525 = (state_27530[(2)]);
var state_27530__$1 = state_27530;
var statearr_27532_27556 = state_27530__$1;
(statearr_27532_27556[(2)] = inst_27525);

(statearr_27532_27556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (1))){
var inst_27507 = null;
var state_27530__$1 = (function (){var statearr_27533 = state_27530;
(statearr_27533[(7)] = inst_27507);

return statearr_27533;
})();
var statearr_27534_27557 = state_27530__$1;
(statearr_27534_27557[(2)] = null);

(statearr_27534_27557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (4))){
var inst_27510 = (state_27530[(8)]);
var inst_27510__$1 = (state_27530[(2)]);
var inst_27511 = (inst_27510__$1 == null);
var inst_27512 = cljs.core.not.call(null,inst_27511);
var state_27530__$1 = (function (){var statearr_27535 = state_27530;
(statearr_27535[(8)] = inst_27510__$1);

return statearr_27535;
})();
if(inst_27512){
var statearr_27536_27558 = state_27530__$1;
(statearr_27536_27558[(1)] = (5));

} else {
var statearr_27537_27559 = state_27530__$1;
(statearr_27537_27559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (6))){
var state_27530__$1 = state_27530;
var statearr_27538_27560 = state_27530__$1;
(statearr_27538_27560[(2)] = null);

(statearr_27538_27560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (3))){
var inst_27527 = (state_27530[(2)]);
var inst_27528 = cljs.core.async.close_BANG_.call(null,out);
var state_27530__$1 = (function (){var statearr_27539 = state_27530;
(statearr_27539[(9)] = inst_27527);

return statearr_27539;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27530__$1,inst_27528);
} else {
if((state_val_27531 === (2))){
var state_27530__$1 = state_27530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27530__$1,(4),ch);
} else {
if((state_val_27531 === (11))){
var inst_27510 = (state_27530[(8)]);
var inst_27519 = (state_27530[(2)]);
var inst_27507 = inst_27510;
var state_27530__$1 = (function (){var statearr_27540 = state_27530;
(statearr_27540[(10)] = inst_27519);

(statearr_27540[(7)] = inst_27507);

return statearr_27540;
})();
var statearr_27541_27561 = state_27530__$1;
(statearr_27541_27561[(2)] = null);

(statearr_27541_27561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (9))){
var inst_27510 = (state_27530[(8)]);
var state_27530__$1 = state_27530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27530__$1,(11),out,inst_27510);
} else {
if((state_val_27531 === (5))){
var inst_27510 = (state_27530[(8)]);
var inst_27507 = (state_27530[(7)]);
var inst_27514 = cljs.core._EQ_.call(null,inst_27510,inst_27507);
var state_27530__$1 = state_27530;
if(inst_27514){
var statearr_27543_27562 = state_27530__$1;
(statearr_27543_27562[(1)] = (8));

} else {
var statearr_27544_27563 = state_27530__$1;
(statearr_27544_27563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (10))){
var inst_27522 = (state_27530[(2)]);
var state_27530__$1 = state_27530;
var statearr_27545_27564 = state_27530__$1;
(statearr_27545_27564[(2)] = inst_27522);

(statearr_27545_27564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27531 === (8))){
var inst_27507 = (state_27530[(7)]);
var tmp27542 = inst_27507;
var inst_27507__$1 = tmp27542;
var state_27530__$1 = (function (){var statearr_27546 = state_27530;
(statearr_27546[(7)] = inst_27507__$1);

return statearr_27546;
})();
var statearr_27547_27565 = state_27530__$1;
(statearr_27547_27565[(2)] = null);

(statearr_27547_27565[(1)] = (2));


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
});})(c__19885__auto___27555,out))
;
return ((function (switch__19829__auto__,c__19885__auto___27555,out){
return (function() {
var cljs$core$async$unique_$_state_machine__19830__auto__ = null;
var cljs$core$async$unique_$_state_machine__19830__auto____0 = (function (){
var statearr_27551 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27551[(0)] = cljs$core$async$unique_$_state_machine__19830__auto__);

(statearr_27551[(1)] = (1));

return statearr_27551;
});
var cljs$core$async$unique_$_state_machine__19830__auto____1 = (function (state_27530){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_27530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e27552){if((e27552 instanceof Object)){
var ex__19833__auto__ = e27552;
var statearr_27553_27566 = state_27530;
(statearr_27553_27566[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27567 = state_27530;
state_27530 = G__27567;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__19830__auto__ = function(state_27530){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__19830__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__19830__auto____1.call(this,state_27530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__19830__auto____0;
cljs$core$async$unique_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__19830__auto____1;
return cljs$core$async$unique_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto___27555,out))
})();
var state__19887__auto__ = (function (){var statearr_27554 = f__19886__auto__.call(null);
(statearr_27554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___27555);

return statearr_27554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto___27555,out))
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
var c__19885__auto___27702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto___27702,out){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto___27702,out){
return (function (state_27672){
var state_val_27673 = (state_27672[(1)]);
if((state_val_27673 === (7))){
var inst_27668 = (state_27672[(2)]);
var state_27672__$1 = state_27672;
var statearr_27674_27703 = state_27672__$1;
(statearr_27674_27703[(2)] = inst_27668);

(statearr_27674_27703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27673 === (1))){
var inst_27635 = (new Array(n));
var inst_27636 = inst_27635;
var inst_27637 = (0);
var state_27672__$1 = (function (){var statearr_27675 = state_27672;
(statearr_27675[(7)] = inst_27636);

(statearr_27675[(8)] = inst_27637);

return statearr_27675;
})();
var statearr_27676_27704 = state_27672__$1;
(statearr_27676_27704[(2)] = null);

(statearr_27676_27704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27673 === (4))){
var inst_27640 = (state_27672[(9)]);
var inst_27640__$1 = (state_27672[(2)]);
var inst_27641 = (inst_27640__$1 == null);
var inst_27642 = cljs.core.not.call(null,inst_27641);
var state_27672__$1 = (function (){var statearr_27677 = state_27672;
(statearr_27677[(9)] = inst_27640__$1);

return statearr_27677;
})();
if(inst_27642){
var statearr_27678_27705 = state_27672__$1;
(statearr_27678_27705[(1)] = (5));

} else {
var statearr_27679_27706 = state_27672__$1;
(statearr_27679_27706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27673 === (15))){
var inst_27662 = (state_27672[(2)]);
var state_27672__$1 = state_27672;
var statearr_27680_27707 = state_27672__$1;
(statearr_27680_27707[(2)] = inst_27662);

(statearr_27680_27707[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27673 === (13))){
var state_27672__$1 = state_27672;
var statearr_27681_27708 = state_27672__$1;
(statearr_27681_27708[(2)] = null);

(statearr_27681_27708[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27673 === (6))){
var inst_27637 = (state_27672[(8)]);
var inst_27658 = (inst_27637 > (0));
var state_27672__$1 = state_27672;
if(cljs.core.truth_(inst_27658)){
var statearr_27682_27709 = state_27672__$1;
(statearr_27682_27709[(1)] = (12));

} else {
var statearr_27683_27710 = state_27672__$1;
(statearr_27683_27710[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27673 === (3))){
var inst_27670 = (state_27672[(2)]);
var state_27672__$1 = state_27672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27672__$1,inst_27670);
} else {
if((state_val_27673 === (12))){
var inst_27636 = (state_27672[(7)]);
var inst_27660 = cljs.core.vec.call(null,inst_27636);
var state_27672__$1 = state_27672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27672__$1,(15),out,inst_27660);
} else {
if((state_val_27673 === (2))){
var state_27672__$1 = state_27672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27672__$1,(4),ch);
} else {
if((state_val_27673 === (11))){
var inst_27652 = (state_27672[(2)]);
var inst_27653 = (new Array(n));
var inst_27636 = inst_27653;
var inst_27637 = (0);
var state_27672__$1 = (function (){var statearr_27684 = state_27672;
(statearr_27684[(10)] = inst_27652);

(statearr_27684[(7)] = inst_27636);

(statearr_27684[(8)] = inst_27637);

return statearr_27684;
})();
var statearr_27685_27711 = state_27672__$1;
(statearr_27685_27711[(2)] = null);

(statearr_27685_27711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27673 === (9))){
var inst_27636 = (state_27672[(7)]);
var inst_27650 = cljs.core.vec.call(null,inst_27636);
var state_27672__$1 = state_27672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27672__$1,(11),out,inst_27650);
} else {
if((state_val_27673 === (5))){
var inst_27640 = (state_27672[(9)]);
var inst_27636 = (state_27672[(7)]);
var inst_27637 = (state_27672[(8)]);
var inst_27645 = (state_27672[(11)]);
var inst_27644 = (inst_27636[inst_27637] = inst_27640);
var inst_27645__$1 = (inst_27637 + (1));
var inst_27646 = (inst_27645__$1 < n);
var state_27672__$1 = (function (){var statearr_27686 = state_27672;
(statearr_27686[(12)] = inst_27644);

(statearr_27686[(11)] = inst_27645__$1);

return statearr_27686;
})();
if(cljs.core.truth_(inst_27646)){
var statearr_27687_27712 = state_27672__$1;
(statearr_27687_27712[(1)] = (8));

} else {
var statearr_27688_27713 = state_27672__$1;
(statearr_27688_27713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27673 === (14))){
var inst_27665 = (state_27672[(2)]);
var inst_27666 = cljs.core.async.close_BANG_.call(null,out);
var state_27672__$1 = (function (){var statearr_27690 = state_27672;
(statearr_27690[(13)] = inst_27665);

return statearr_27690;
})();
var statearr_27691_27714 = state_27672__$1;
(statearr_27691_27714[(2)] = inst_27666);

(statearr_27691_27714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27673 === (10))){
var inst_27656 = (state_27672[(2)]);
var state_27672__$1 = state_27672;
var statearr_27692_27715 = state_27672__$1;
(statearr_27692_27715[(2)] = inst_27656);

(statearr_27692_27715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27673 === (8))){
var inst_27636 = (state_27672[(7)]);
var inst_27645 = (state_27672[(11)]);
var tmp27689 = inst_27636;
var inst_27636__$1 = tmp27689;
var inst_27637 = inst_27645;
var state_27672__$1 = (function (){var statearr_27693 = state_27672;
(statearr_27693[(7)] = inst_27636__$1);

(statearr_27693[(8)] = inst_27637);

return statearr_27693;
})();
var statearr_27694_27716 = state_27672__$1;
(statearr_27694_27716[(2)] = null);

(statearr_27694_27716[(1)] = (2));


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
});})(c__19885__auto___27702,out))
;
return ((function (switch__19829__auto__,c__19885__auto___27702,out){
return (function() {
var cljs$core$async$partition_$_state_machine__19830__auto__ = null;
var cljs$core$async$partition_$_state_machine__19830__auto____0 = (function (){
var statearr_27698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27698[(0)] = cljs$core$async$partition_$_state_machine__19830__auto__);

(statearr_27698[(1)] = (1));

return statearr_27698;
});
var cljs$core$async$partition_$_state_machine__19830__auto____1 = (function (state_27672){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_27672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e27699){if((e27699 instanceof Object)){
var ex__19833__auto__ = e27699;
var statearr_27700_27717 = state_27672;
(statearr_27700_27717[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27718 = state_27672;
state_27672 = G__27718;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__19830__auto__ = function(state_27672){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__19830__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__19830__auto____1.call(this,state_27672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__19830__auto____0;
cljs$core$async$partition_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__19830__auto____1;
return cljs$core$async$partition_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto___27702,out))
})();
var state__19887__auto__ = (function (){var statearr_27701 = f__19886__auto__.call(null);
(statearr_27701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___27702);

return statearr_27701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto___27702,out))
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
var c__19885__auto___27861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19885__auto___27861,out){
return (function (){
var f__19886__auto__ = (function (){var switch__19829__auto__ = ((function (c__19885__auto___27861,out){
return (function (state_27831){
var state_val_27832 = (state_27831[(1)]);
if((state_val_27832 === (7))){
var inst_27827 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
var statearr_27833_27862 = state_27831__$1;
(statearr_27833_27862[(2)] = inst_27827);

(statearr_27833_27862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (1))){
var inst_27790 = [];
var inst_27791 = inst_27790;
var inst_27792 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27831__$1 = (function (){var statearr_27834 = state_27831;
(statearr_27834[(7)] = inst_27792);

(statearr_27834[(8)] = inst_27791);

return statearr_27834;
})();
var statearr_27835_27863 = state_27831__$1;
(statearr_27835_27863[(2)] = null);

(statearr_27835_27863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (4))){
var inst_27795 = (state_27831[(9)]);
var inst_27795__$1 = (state_27831[(2)]);
var inst_27796 = (inst_27795__$1 == null);
var inst_27797 = cljs.core.not.call(null,inst_27796);
var state_27831__$1 = (function (){var statearr_27836 = state_27831;
(statearr_27836[(9)] = inst_27795__$1);

return statearr_27836;
})();
if(inst_27797){
var statearr_27837_27864 = state_27831__$1;
(statearr_27837_27864[(1)] = (5));

} else {
var statearr_27838_27865 = state_27831__$1;
(statearr_27838_27865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (15))){
var inst_27821 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
var statearr_27839_27866 = state_27831__$1;
(statearr_27839_27866[(2)] = inst_27821);

(statearr_27839_27866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (13))){
var state_27831__$1 = state_27831;
var statearr_27840_27867 = state_27831__$1;
(statearr_27840_27867[(2)] = null);

(statearr_27840_27867[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (6))){
var inst_27791 = (state_27831[(8)]);
var inst_27816 = inst_27791.length;
var inst_27817 = (inst_27816 > (0));
var state_27831__$1 = state_27831;
if(cljs.core.truth_(inst_27817)){
var statearr_27841_27868 = state_27831__$1;
(statearr_27841_27868[(1)] = (12));

} else {
var statearr_27842_27869 = state_27831__$1;
(statearr_27842_27869[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (3))){
var inst_27829 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27831__$1,inst_27829);
} else {
if((state_val_27832 === (12))){
var inst_27791 = (state_27831[(8)]);
var inst_27819 = cljs.core.vec.call(null,inst_27791);
var state_27831__$1 = state_27831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27831__$1,(15),out,inst_27819);
} else {
if((state_val_27832 === (2))){
var state_27831__$1 = state_27831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27831__$1,(4),ch);
} else {
if((state_val_27832 === (11))){
var inst_27795 = (state_27831[(9)]);
var inst_27799 = (state_27831[(10)]);
var inst_27809 = (state_27831[(2)]);
var inst_27810 = [];
var inst_27811 = inst_27810.push(inst_27795);
var inst_27791 = inst_27810;
var inst_27792 = inst_27799;
var state_27831__$1 = (function (){var statearr_27843 = state_27831;
(statearr_27843[(11)] = inst_27811);

(statearr_27843[(7)] = inst_27792);

(statearr_27843[(8)] = inst_27791);

(statearr_27843[(12)] = inst_27809);

return statearr_27843;
})();
var statearr_27844_27870 = state_27831__$1;
(statearr_27844_27870[(2)] = null);

(statearr_27844_27870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (9))){
var inst_27791 = (state_27831[(8)]);
var inst_27807 = cljs.core.vec.call(null,inst_27791);
var state_27831__$1 = state_27831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27831__$1,(11),out,inst_27807);
} else {
if((state_val_27832 === (5))){
var inst_27792 = (state_27831[(7)]);
var inst_27795 = (state_27831[(9)]);
var inst_27799 = (state_27831[(10)]);
var inst_27799__$1 = f.call(null,inst_27795);
var inst_27800 = cljs.core._EQ_.call(null,inst_27799__$1,inst_27792);
var inst_27801 = cljs.core.keyword_identical_QMARK_.call(null,inst_27792,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27802 = (inst_27800) || (inst_27801);
var state_27831__$1 = (function (){var statearr_27845 = state_27831;
(statearr_27845[(10)] = inst_27799__$1);

return statearr_27845;
})();
if(cljs.core.truth_(inst_27802)){
var statearr_27846_27871 = state_27831__$1;
(statearr_27846_27871[(1)] = (8));

} else {
var statearr_27847_27872 = state_27831__$1;
(statearr_27847_27872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (14))){
var inst_27824 = (state_27831[(2)]);
var inst_27825 = cljs.core.async.close_BANG_.call(null,out);
var state_27831__$1 = (function (){var statearr_27849 = state_27831;
(statearr_27849[(13)] = inst_27824);

return statearr_27849;
})();
var statearr_27850_27873 = state_27831__$1;
(statearr_27850_27873[(2)] = inst_27825);

(statearr_27850_27873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (10))){
var inst_27814 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
var statearr_27851_27874 = state_27831__$1;
(statearr_27851_27874[(2)] = inst_27814);

(statearr_27851_27874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (8))){
var inst_27795 = (state_27831[(9)]);
var inst_27799 = (state_27831[(10)]);
var inst_27791 = (state_27831[(8)]);
var inst_27804 = inst_27791.push(inst_27795);
var tmp27848 = inst_27791;
var inst_27791__$1 = tmp27848;
var inst_27792 = inst_27799;
var state_27831__$1 = (function (){var statearr_27852 = state_27831;
(statearr_27852[(14)] = inst_27804);

(statearr_27852[(7)] = inst_27792);

(statearr_27852[(8)] = inst_27791__$1);

return statearr_27852;
})();
var statearr_27853_27875 = state_27831__$1;
(statearr_27853_27875[(2)] = null);

(statearr_27853_27875[(1)] = (2));


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
});})(c__19885__auto___27861,out))
;
return ((function (switch__19829__auto__,c__19885__auto___27861,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__19830__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__19830__auto____0 = (function (){
var statearr_27857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27857[(0)] = cljs$core$async$partition_by_$_state_machine__19830__auto__);

(statearr_27857[(1)] = (1));

return statearr_27857;
});
var cljs$core$async$partition_by_$_state_machine__19830__auto____1 = (function (state_27831){
while(true){
var ret_value__19831__auto__ = (function (){try{while(true){
var result__19832__auto__ = switch__19829__auto__.call(null,state_27831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19832__auto__;
}
break;
}
}catch (e27858){if((e27858 instanceof Object)){
var ex__19833__auto__ = e27858;
var statearr_27859_27876 = state_27831;
(statearr_27859_27876[(5)] = ex__19833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27877 = state_27831;
state_27831 = G__27877;
continue;
} else {
return ret_value__19831__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__19830__auto__ = function(state_27831){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__19830__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__19830__auto____1.call(this,state_27831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__19830__auto____0;
cljs$core$async$partition_by_$_state_machine__19830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__19830__auto____1;
return cljs$core$async$partition_by_$_state_machine__19830__auto__;
})()
;})(switch__19829__auto__,c__19885__auto___27861,out))
})();
var state__19887__auto__ = (function (){var statearr_27860 = f__19886__auto__.call(null);
(statearr_27860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19885__auto___27861);

return statearr_27860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19887__auto__);
});})(c__19885__auto___27861,out))
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